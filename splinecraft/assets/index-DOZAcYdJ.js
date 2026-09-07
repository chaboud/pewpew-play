(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ti="180",Wu=0,al=1,Xu=2,Lc=1,Bc=2,Bn=3,wn=0,Ct=1,Ht=2,Rt=0,ji=1,Mr=2,ol=3,ll=4,Yu=5,gi=100,Qu=101,qu=102,Ku=103,ju=104,Zu=200,Ju=201,$u=202,eh=203,Ia=204,Pa=205,th=206,nh=207,ih=208,sh=209,rh=210,ah=211,oh=212,lh=213,ch=214,La=0,Ar=1,Ba=2,Ji=3,Ua=4,Fa=5,Na=6,Oa=7,Uc=0,uh=1,hh=2,Un=0,dh=1,fh=2,ph=3,mh=4,gh=5,vh=6,xh=7,Fc=300,$i=301,es=302,za=303,ka=304,Rr=306,ws=1e3,Sn=1001,Ha=1002,Tt=1003,Mh=1004,Bs=1005,et=1006,Gr=1007,_n=1008,xt=1009,Nc=1010,Oc=1011,Ts=1012,bo=1013,Ai=1014,un=1015,bn=1016,Co=1017,Do=1018,ts=1020,zc=35902,kc=35899,Hc=1021,Gc=1022,Ft=1023,bs=1026,ns=1027,Si=1028,Ro=1029,Io=1030,Po=1031,Lo=1033,pr=33776,mr=33777,gr=33778,vr=33779,Ga=35840,Va=35841,Wa=35842,Xa=35843,Ya=36196,Qa=37492,qa=37496,Ka=37808,ja=37809,Za=37810,Ja=37811,$a=37812,eo=37813,to=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,co=36492,uo=36494,ho=36495,fo=36283,po=36284,mo=36285,go=36286,gn=3200,Ah=3201,Bo=0,Sh=1,rn="",nt="srgb",$n="srgb-linear",Sr="linear",ot="srgb",Ii=7680,cl=519,_h=512,yh=513,Eh=514,Vc=515,wh=516,Th=517,bh=518,Ch=519,ul=35044,_r="300 es",yn=2e3,yr=2001;class zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vr=Math.PI/180,vo=180/Math.PI;function Rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Dh(n,e){return(n%e+e)%e}function Wr(n,e,t){return(1-t)*n+t*e}function ls(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _i{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let m=1-o;const f=l*d+c*p+u*g+h*v,S=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const T=Math.sqrt(x),y=Math.atan2(T,f*S);m=Math.sin(m*y)/T,o=Math.sin(o*y)/T}const A=o*S;if(l=l*m+d*A,c=c*m+p*A,u=u*m+g*A,h=h*m+v*A,m===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xr.copy(this).projectOnVector(e),this.sub(Xr)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new z,hl=new _i;class Ve{constructor(e,t,i,s,r,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],S=s[1],x=s[4],A=s[7],T=s[2],y=s[5],E=s[8];return r[0]=a*v+o*S+l*T,r[3]=a*m+o*x+l*y,r[6]=a*f+o*A+l*E,r[1]=c*v+u*S+h*T,r[4]=c*m+u*x+h*y,r[7]=c*f+u*A+h*E,r[2]=d*v+p*S+g*T,r[5]=d*m+p*x+g*y,r[8]=d*f+p*A+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=t*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yr.makeScale(e,t)),this}rotate(e){return this.premultiply(Yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Ve;function Wc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rh(){const n=Er("canvas");return n.style.display="block",n}const dl={};function Cs(n){n in dl||(dl[n]=!0,console.warn(n))}function Ih(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const fl=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ph(){const n={enabled:!0,workingColorSpace:$n,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===rn?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$n]:{primaries:e,whitePoint:i,transfer:Sr,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nt},outputColorSpaceConfig:{drawingBufferColorSpace:nt}},[nt]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nt}}}),n}const Je=Ph();function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pi;class Lh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pi===void 0&&(Pi=Er("canvas")),Pi.width=e.width,Pi.height=e.height;const s=Pi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Pi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fn(t[i]/255)*255):t[i]=Fn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bh=0;class Uo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qr(s[a].image)):r.push(Qr(s[a]))}else r=Qr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Qr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uh=0;const qr=new z;class It extends zn{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Sn,s=Sn,r=et,a=_n,o=Ft,l=xt,c=It.DEFAULT_ANISOTROPY,u=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Rs(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qr).x}get height(){return this.source.getSize(qr).y}get depth(){return this.source.getSize(qr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Fc;It.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,A=(p+1)/2,T=(f+1)/2,y=(u+d)/4,E=(h+v)/4,D=(g+m)/4;return x>A&&x>T?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=y/i,r=E/i):A>T?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=y/s,r=D/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=E/r,s=D/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fh extends zn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new It(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Uo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mt extends Fh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fo extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wr extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nh extends mt{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new wr(null,e,t,i),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class bi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Us.copy(i.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Fs.subVectors(this.max,cs),Li.subVectors(e.a,cs),Bi.subVectors(e.b,cs),Ui.subVectors(e.c,cs),Hn.subVectors(Bi,Li),Gn.subVectors(Ui,Bi),si.subVectors(Li,Ui);let t=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-si.z,si.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,si.z,0,-si.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-si.y,si.x,0];return!Kr(t,Li,Bi,Ui,Fs)||(t=[1,0,0,0,1,0,0,0,1],!Kr(t,Li,Bi,Ui,Fs))?!1:(Ns.crossVectors(Hn,Gn),t=[Ns.x,Ns.y,Ns.z],Kr(t,Li,Bi,Ui,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Dn=[new z,new z,new z,new z,new z,new z,new z,new z],hn=new z,Us=new bi,Li=new z,Bi=new z,Ui=new z,Hn=new z,Gn=new z,si=new z,cs=new z,Fs=new z,Ns=new z,ri=new z;function Kr(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ri.fromArray(n,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),u=i.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Oh=new bi,us=new z,jr=new z;class Ci{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Oh.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);const t=us.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(us,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(jr)),this.expandByPoint(us.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Rn=new z,Zr=new z,Os=new z,Vn=new z,Jr=new z,zs=new z,$r=new z;class Xc{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Zr.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(Zr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Os),o=Vn.dot(this.direction),l=-Vn.dot(Os),c=Vn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Zr).addScaledVector(Os,d),p}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const i=Rn.dot(this.direction),s=Rn.dot(Rn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,i,s,r){Jr.subVectors(t,e),zs.subVectors(i,e),$r.crossVectors(Jr,zs);let a=this.direction.dot($r),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);const l=o*this.direction.dot(zs.crossVectors(Vn,zs));if(l<0)return null;const c=o*this.direction.dot(Jr.cross(Vn));if(c<0||l+c>a)return null;const u=-o*Vn.dot($r);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,s,r,a,o,l,c,u,h,d,p,g,v,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,p,g,v,m)}set(e,t,i,s,r,a,o,l,c,u,h,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zh,e,kh)}lookAt(e,t,i){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Wn.crossVectors(i,tn),Wn.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Wn.crossVectors(i,tn)),Wn.normalize(),ks.crossVectors(tn,Wn),s[0]=Wn.x,s[4]=ks.x,s[8]=tn.x,s[1]=Wn.y,s[5]=ks.y,s[9]=tn.y,s[2]=Wn.z,s[6]=ks.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],S=i[3],x=i[7],A=i[11],T=i[15],y=s[0],E=s[4],D=s[8],M=s[12],_=s[1],C=s[5],U=s[9],I=s[13],L=s[2],N=s[6],H=s[10],W=s[14],O=s[3],K=s[7],re=s[11],ce=s[15];return r[0]=a*y+o*_+l*L+c*O,r[4]=a*E+o*C+l*N+c*K,r[8]=a*D+o*U+l*H+c*re,r[12]=a*M+o*I+l*W+c*ce,r[1]=u*y+h*_+d*L+p*O,r[5]=u*E+h*C+d*N+p*K,r[9]=u*D+h*U+d*H+p*re,r[13]=u*M+h*I+d*W+p*ce,r[2]=g*y+v*_+m*L+f*O,r[6]=g*E+v*C+m*N+f*K,r[10]=g*D+v*U+m*H+f*re,r[14]=g*M+v*I+m*W+f*ce,r[3]=S*y+x*_+A*L+T*O,r[7]=S*E+x*C+A*N+T*K,r[11]=S*D+x*U+A*H+T*re,r[15]=S*M+x*I+A*W+T*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*o*d+i*c*d+s*o*p-i*l*p)+v*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+i*a*p+r*o*u-i*c*u)+f*(-s*o*u-t*l*h+t*o*d+s*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],S=h*m*c-v*d*c+v*l*p-o*m*p-h*l*f+o*d*f,x=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,A=u*v*c-g*h*c+g*o*p-a*v*p-u*o*f+a*h*f,T=g*h*l-u*v*l-g*o*d+a*v*d+u*o*m-a*h*m,y=t*S+i*x+s*A+r*T;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/y;return e[0]=S*E,e[1]=(v*d*r-h*m*r-v*s*p+i*m*p+h*s*f-i*d*f)*E,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*f+i*l*f)*E,e[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*p-i*l*p)*E,e[4]=x*E,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*E,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*E,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*p+t*l*p)*E,e[8]=A*E,e[9]=(g*h*r-u*v*r-g*i*p+t*v*p+u*i*f-t*h*f)*E,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*f+t*o*f)*E,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*p-t*o*p)*E,e[12]=T*E,e[13]=(u*v*s-g*h*s+g*i*d-t*v*d-u*i*m+t*h*m)*E,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*m-t*o*m)*E,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*d+t*o*d)*E,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,v=a*u,m=a*h,f=o*h,S=l*c,x=l*u,A=l*h,T=i.x,y=i.y,E=i.z;return s[0]=(1-(v+f))*T,s[1]=(p+A)*T,s[2]=(g-x)*T,s[3]=0,s[4]=(p-A)*y,s[5]=(1-(d+f))*y,s[6]=(m+S)*y,s[7]=0,s[8]=(g+x)*E,s[9]=(m-S)*E,s[10]=(1-(d+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Fi.set(s[0],s[1],s[2]).length();const a=Fi.set(s[4],s[5],s[6]).length(),o=Fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const c=1/r,u=1/a,h=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,t.setFromRotationMatrix(dn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=yn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===yn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===yr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=yn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===yn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===yr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fi=new z,dn=new je,zh=new z(0,0,0),kh=new z(1,1,1),Wn=new z,ks=new z,tn=new z,ml=new je,gl=new _i;class Tn{constructor(e=0,t=0,i=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ml,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gl.setFromEuler(this),this.setFromQuaternion(gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hh=0;const vl=new z,Ni=new _i,In=new je,Hs=new z,hs=new z,Gh=new z,Vh=new _i,xl=new z(1,0,0),Ml=new z(0,1,0),Al=new z(0,0,1),Sl={type:"added"},Wh={type:"removed"},Oi={type:"childadded",child:null},ea={type:"childremoved",child:null};class Nt extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new z,t=new Tn,i=new _i,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ve}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(xl,e)}rotateY(e){return this.rotateOnAxis(Ml,e)}rotateZ(e){return this.rotateOnAxis(Al,e)}translateOnAxis(e,t){return vl.copy(e).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xl,e)}translateY(e){return this.translateOnAxis(Ml,e)}translateZ(e){return this.translateOnAxis(Al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hs.copy(e):Hs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(hs,Hs,this.up):In.lookAt(Hs,hs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(In),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wh),ea.child=e,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,Gh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Vh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new z(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new z,Pn=new z,ta=new z,Ln=new z,zi=new z,ki=new z,_l=new z,na=new z,ia=new z,sa=new z,ra=new ht,aa=new ht,oa=new ht;class pn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fn.subVectors(e,t),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){fn.subVectors(s,t),Pn.subVectors(i,t),ta.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Pn),l=fn.dot(ta),c=Pn.dot(Pn),u=Pn.dot(ta),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return ra.setScalar(0),aa.setScalar(0),oa.setScalar(0),ra.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,i),oa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ra,r.x),a.addScaledVector(aa,r.y),a.addScaledVector(oa,r.z),a}static isFrontFacing(e,t,i,s){return fn.subVectors(i,t),Pn.subVectors(e,t),fn.cross(Pn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),fn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,i),ki.subVectors(r,i),na.subVectors(e,i);const l=zi.dot(na),c=ki.dot(na);if(l<=0&&c<=0)return t.copy(i);ia.subVectors(e,s);const u=zi.dot(ia),h=ki.dot(ia);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(zi,a);sa.subVectors(e,r);const p=zi.dot(sa),g=ki.dot(sa);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ki,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return _l.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(_l,o);const f=1/(m+v+d);return a=v*f,o=d*f,t.copy(i).addScaledVector(zi,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function la(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=Dh(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=la(a,r,e+1/3),this.g=la(a,r,e),this.b=la(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=nt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){const i=Qc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return Je.workingToColorSpace(kt.copy(this),e),Math.round(Ke(kt.r*255,0,255))*65536+Math.round(Ke(kt.g*255,0,255))*256+Math.round(Ke(kt.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(kt.copy(this),t);const i=kt.r,s=kt.g,r=kt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=nt){Je.workingToColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,s=kt.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Gs);const i=Wr(Xn.h,Gs.h,t),s=Wr(Xn.s,Gs.s,t),r=Wr(Xn.l,Gs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new We;We.NAMES=Qc;let Xh=0;class kn extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=ji,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Pa,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ia&&(i.blendSrc=this.blendSrc),this.blendDst!==Pa&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qc extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new z,Vs=new Ae;let Yh=0;class it{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ul,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ls(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ul&&(e.usage=this.usage),e}}class Kc extends it{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class jc extends it{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mn extends it{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qh=0;const ln=new je,ca=new Nt,Hi=new z,nn=new bi,ds=new bi,Bt=new z;class Gt extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wc(e)?jc:Kc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return ca.lookAt(e),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(nn.min,ds.min),nn.expandByPoint(Bt),Bt.addVectors(nn.max,ds.max),nn.expandByPoint(Bt)):(nn.expandByPoint(ds.min),nn.expandByPoint(ds.max))}nn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Bt.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(e,c),Bt.add(Hi)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new it(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new z,l[D]=new z;const c=new z,u=new z,h=new z,d=new Ae,p=new Ae,g=new Ae,v=new z,m=new z;function f(D,M,_){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,_),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[D].add(v),o[M].add(v),o[_].add(v),l[D].add(m),l[M].add(m),l[_].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,M=S.length;D<M;++D){const _=S[D],C=_.start,U=_.count;for(let I=C,L=C+U;I<L;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new z,A=new z,T=new z,y=new z;function E(D){T.fromBufferAttribute(s,D),y.copy(T);const M=o[D];x.copy(M),x.sub(T.multiplyScalar(T.dot(M))).normalize(),A.crossVectors(y,M);const C=A.dot(l[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,C)}for(let D=0,M=S.length;D<M;++D){const _=S[D],C=_.start,U=_.count;for(let I=C,L=C+U;I<L;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new it(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new je,ai=new Xc,Ws=new Ci,El=new z,Xs=new z,Ys=new z,Qs=new z,ua=new z,qs=new z,wl=new z,Ks=new z;class _t extends Nt{constructor(e=new Gt,t=new qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ua.fromBufferAttribute(h,e),a?qs.addScaledVector(ua,u):qs.addScaledVector(ua.sub(t),u))}t.add(qs)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(Ws.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Ws,El)===null||ai.origin.distanceToSquared(El)>(e.far-e.near)**2))&&(yl.copy(r).invert(),ai.copy(e.ray).applyMatrix4(yl),!(i.boundingBox!==null&&ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=S,T=x;A<T;A+=3){const y=o.getX(A),E=o.getX(A+1),D=o.getX(A+2);s=js(this,f,e,i,c,u,h,y,E,D),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const S=o.getX(m),x=o.getX(m+1),A=o.getX(m+2);s=js(this,a,e,i,c,u,h,S,x,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=S,T=x;A<T;A+=3){const y=A,E=A+1,D=A+2;s=js(this,f,e,i,c,u,h,y,E,D),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const S=m,x=m+1,A=m+2;s=js(this,a,e,i,c,u,h,S,x,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function qh(n,e,t,i,s,r,a,o){let l;if(e.side===Ct?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===wn,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:n}}function js(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Xs),n.getVertexPosition(l,Ys),n.getVertexPosition(c,Qs);const u=qh(n,e,t,i,Xs,Ys,Qs,wl);if(u){const h=new z;pn.getBarycoord(wl,Xs,Ys,Qs,h),s&&(u.uv=pn.getInterpolatedAttribute(s,o,l,c,h,new Ae)),r&&(u.uv1=pn.getInterpolatedAttribute(r,o,l,c,h,new Ae)),a&&(u.normal=pn.getInterpolatedAttribute(a,o,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new z,materialIndex:0};pn.getNormal(Xs,Ys,Qs,d.normal),u.face=d,u.barycoord=h}return u}class yi extends Gt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(h,2));function g(v,m,f,S,x,A,T,y,E,D,M){const _=A/E,C=T/D,U=A/2,I=T/2,L=y/2,N=E+1,H=D+1;let W=0,O=0;const K=new z;for(let re=0;re<H;re++){const ce=re*C-I;for(let Ce=0;Ce<N;Ce++){const Ue=Ce*_-U;K[v]=Ue*S,K[m]=ce*x,K[f]=L,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[f]=y>0?1:-1,u.push(K.x,K.y,K.z),h.push(Ce/E),h.push(1-re/D),W+=1}}for(let re=0;re<D;re++)for(let ce=0;ce<E;ce++){const Ce=d+ce+N*re,Ue=d+ce+N*(re+1),ke=d+(ce+1)+N*(re+1),Re=d+(ce+1)+N*re;l.push(Ce,Ue,Re),l.push(Ue,ke,Re),O+=6}o.addGroup(p,O,M),p+=O,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=is(n[t]);for(const s in i)e[s]=i[s]}return e}function Kh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const jh={clone:is,merge:Wt};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dt extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=Jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Kh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Jc extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new z,Tl=new Ae,bl=new Ae;class Xt extends Jc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,Tl,bl),t.subVectors(bl,Tl)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Vi=1;class $h extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(Gi,Vi,e,t);s.layers=this.layers,this.add(s);const r=new Xt(Gi,Vi,e,t);r.layers=this.layers,this.add(r);const a=new Xt(Gi,Vi,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Gi,Vi,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Gi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Gi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $c extends It{constructor(e=[],t=$i,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ed extends mt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new $c(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yi(5,5,5),r=new dt({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ct,blending:Rt});r.uniforms.tEquirect.value=t;const a=new _t(s,r),o=t.minFilter;return t.minFilter===_n&&(t.minFilter=et),new $h(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class xi extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const td={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(td)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class No{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new No(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ss extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tr extends It{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Tt,u=Tt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn extends it{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new je,Cl=new je,Zs=[],Dl=new bi,nd=new je,fs=new _t,ps=new Ci;class id extends _t{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,nd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wi),Dl.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Dl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wi),ps.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(i),e.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),Cl.multiplyMatrices(i,Wi),fs.matrixWorld=Cl,fs.raycast(e,Zs);for(let a=0,o=Zs.length;a<o;a++){const l=Zs[a];l.instanceId=r,l.object=this,t.push(l)}Zs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Tr(new Float32Array(s*this.count),s,this.count,Si,un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const da=new z,sd=new z,rd=new Ve;class Kn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=da.subVectors(i,t).cross(sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(da),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rd.getNormalMatrix(e),s=this.coplanarPoint(da).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Ci,ad=new Ae(.5,.5),Js=new z;class Ir{constructor(e=new Kn,t=new Kn,i=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],v=r[9],m=r[10],f=r[11],S=r[12],x=r[13],A=r[14],T=r[15];if(s[0].setComponents(c-a,p-u,f-g,T-S).normalize(),s[1].setComponents(c+a,p+u,f+g,T+S).normalize(),s[2].setComponents(c+o,p+h,f+v,T+x).normalize(),s[3].setComponents(c-o,p-h,f-v,T-x).normalize(),i)s[4].setComponents(l,d,m,A).normalize(),s[5].setComponents(c-l,p-d,f-m,T-A).normalize();else if(s[4].setComponents(c-l,p-d,f-m,T-A).normalize(),t===yn)s[5].setComponents(c+l,p+d,f+m,T+A).normalize();else if(t===yr)s[5].setComponents(l,d,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=ad.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Js.x=s.normal.x>0?e.max.x:e.min.x,Js.y=s.normal.y>0?e.max.y:e.min.y,Js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class od extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rl=new je,xo=new Xc,$s=new Ci,er=new z;class ld extends Nt{constructor(e=new Gt,t=new od){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(s),$s.radius+=r,e.ray.intersectsSphere($s)===!1)return;Rl.copy(s).invert(),xo.copy(e.ray).applyMatrix4(Rl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);er.fromBufferAttribute(h,m),Il(er,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,v=p;g<v;g++)er.fromBufferAttribute(h,g),Il(er,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Il(n,e,t,i,s,r,a){const o=xo.distanceSqToPoint(n);if(o<t){const l=new z;xo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Oo extends It{constructor(e,t,i=Ai,s,r,a,o=Tt,l=Tt,c,u=bs,h=1){if(u!==bs&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class eu extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class On extends Gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const S=f*d-a;for(let x=0;x<c;x++){const A=x*h-r;g.push(A,-S,0),v.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const x=S+c*f,A=S+c*(f+1),T=S+1+c*(f+1),y=S+1+c*f;p.push(x,A,y),p.push(A,T,y)}this.setIndex(p),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.widthSegments,e.heightSegments)}}class zo extends Gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new z,d=new z,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const S=[],x=f/i;let A=0;f===0&&a===0?A=.5/t:f===i&&l===Math.PI&&(A=-.5/t);for(let T=0;T<=t;T++){const y=T/t;h.x=-e*Math.cos(s+y*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(s+y*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(y+A,1-x),S.push(c++)}u.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){const x=u[f][S+1],A=u[f][S],T=u[f+1][S],y=u[f+1][S+1];(f!==0||a>0)&&p.push(x,A,y),(f!==i-1||l<Math.PI)&&p.push(A,T,y)}this.setIndex(p),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pl extends dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class br extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cd extends kn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ud extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hd extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dd{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}class tu extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const fa=new je,Ll=new z,Bl=new z;class fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=xt,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ll),Bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bl),t.updateMatrixWorld(),fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Is extends Jc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pd extends fd{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class md extends tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new pd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gd extends tu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vd extends Gt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class xd extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class le{constructor(e){this.value=e}clone(){return new le(this.value.clone===void 0?this.value:this.value.clone())}}function Ul(n,e,t,i){const s=Md(i);switch(t){case Hc:return n*e;case Si:return n*e/s.components*s.byteLength;case Ro:return n*e/s.components*s.byteLength;case Io:return n*e*2/s.components*s.byteLength;case Po:return n*e*2/s.components*s.byteLength;case Gc:return n*e*3/s.components*s.byteLength;case Ft:return n*e*4/s.components*s.byteLength;case Lo:return n*e*4/s.components*s.byteLength;case pr:case mr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gr:case vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:case Xa:return Math.max(n,16)*Math.max(e,8)/4;case Ga:case Wa:return Math.max(n,8)*Math.max(e,8)/2;case Ya:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case eo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case to:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case no:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case io:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case so:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ro:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ao:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case oo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case co:case uo:case ho:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fo:case po:return Math.ceil(n/4)*Math.ceil(e/4)*8;case mo:case go:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Md(n){switch(n){case xt:case Nc:return{byteLength:1,components:1};case Ts:case Oc:case bn:return{byteLength:2,components:1};case Co:case Do:return{byteLength:2,components:4};case Ai:case bo:case un:return{byteLength:4,components:1};case zc:case kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ti}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ti);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nu(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ad(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ld=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ud=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ff=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Af=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,If=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ap=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,up=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Sd,alphahash_pars_fragment:_d,alphamap_fragment:yd,alphamap_pars_fragment:Ed,alphatest_fragment:wd,alphatest_pars_fragment:Td,aomap_fragment:bd,aomap_pars_fragment:Cd,batching_pars_vertex:Dd,batching_vertex:Rd,begin_vertex:Id,beginnormal_vertex:Pd,bsdfs:Ld,iridescence_fragment:Bd,bumpmap_pars_fragment:Ud,clipping_planes_fragment:Fd,clipping_planes_pars_fragment:Nd,clipping_planes_pars_vertex:Od,clipping_planes_vertex:zd,color_fragment:kd,color_pars_fragment:Hd,color_pars_vertex:Gd,color_vertex:Vd,common:Wd,cube_uv_reflection_fragment:Xd,defaultnormal_vertex:Yd,displacementmap_pars_vertex:Qd,displacementmap_vertex:qd,emissivemap_fragment:Kd,emissivemap_pars_fragment:jd,colorspace_fragment:Zd,colorspace_pars_fragment:Jd,envmap_fragment:$d,envmap_common_pars_fragment:ef,envmap_pars_fragment:tf,envmap_pars_vertex:nf,envmap_physical_pars_fragment:pf,envmap_vertex:sf,fog_vertex:rf,fog_pars_vertex:af,fog_fragment:of,fog_pars_fragment:lf,gradientmap_pars_fragment:cf,lightmap_pars_fragment:uf,lights_lambert_fragment:hf,lights_lambert_pars_fragment:df,lights_pars_begin:ff,lights_toon_fragment:mf,lights_toon_pars_fragment:gf,lights_phong_fragment:vf,lights_phong_pars_fragment:xf,lights_physical_fragment:Mf,lights_physical_pars_fragment:Af,lights_fragment_begin:Sf,lights_fragment_maps:_f,lights_fragment_end:yf,logdepthbuf_fragment:Ef,logdepthbuf_pars_fragment:wf,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:bf,map_fragment:Cf,map_pars_fragment:Df,map_particle_fragment:Rf,map_particle_pars_fragment:If,metalnessmap_fragment:Pf,metalnessmap_pars_fragment:Lf,morphinstance_vertex:Bf,morphcolor_vertex:Uf,morphnormal_vertex:Ff,morphtarget_pars_vertex:Nf,morphtarget_vertex:Of,normal_fragment_begin:zf,normal_fragment_maps:kf,normal_pars_fragment:Hf,normal_pars_vertex:Gf,normal_vertex:Vf,normalmap_pars_fragment:Wf,clearcoat_normal_fragment_begin:Xf,clearcoat_normal_fragment_maps:Yf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:qf,opaque_fragment:Kf,packing:jf,premultiplied_alpha_fragment:Zf,project_vertex:Jf,dithering_fragment:$f,dithering_pars_fragment:ep,roughnessmap_fragment:tp,roughnessmap_pars_fragment:np,shadowmap_pars_fragment:ip,shadowmap_pars_vertex:sp,shadowmap_vertex:rp,shadowmask_pars_fragment:ap,skinbase_vertex:op,skinning_pars_vertex:lp,skinning_vertex:cp,skinnormal_vertex:up,specularmap_fragment:hp,specularmap_pars_fragment:dp,tonemapping_fragment:fp,tonemapping_pars_fragment:pp,transmission_fragment:mp,transmission_pars_fragment:gp,uv_pars_fragment:vp,uv_pars_vertex:xp,uv_vertex:Mp,worldpos_vertex:Ap,background_vert:Sp,background_frag:_p,backgroundCube_vert:yp,backgroundCube_frag:Ep,cube_vert:wp,cube_frag:Tp,depth_vert:bp,depth_frag:Cp,distanceRGBA_vert:Dp,distanceRGBA_frag:Rp,equirect_vert:Ip,equirect_frag:Pp,linedashed_vert:Lp,linedashed_frag:Bp,meshbasic_vert:Up,meshbasic_frag:Fp,meshlambert_vert:Np,meshlambert_frag:Op,meshmatcap_vert:zp,meshmatcap_frag:kp,meshnormal_vert:Hp,meshnormal_frag:Gp,meshphong_vert:Vp,meshphong_frag:Wp,meshphysical_vert:Xp,meshphysical_frag:Yp,meshtoon_vert:Qp,meshtoon_frag:qp,points_vert:Kp,points_frag:jp,shadow_vert:Zp,shadow_frag:Jp,sprite_vert:$p,sprite_frag:em},ue={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},An={basic:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new We(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new We(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Wt([ue.points,ue.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Wt([ue.common,ue.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Wt([ue.sprite,ue.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Wt([ue.common,ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Wt([ue.lights,ue.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};An.physical={uniforms:Wt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const tr={r:0,b:0,g:0},li=new Tn,tm=new je;function nm(n,e,t,i,s,r,a){const o=new We(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(x){let A=x.isScene===!0?x.background:null;return A&&A.isTexture&&(A=(x.backgroundBlurriness>0?t:e).get(A)),A}function v(x){let A=!1;const T=g(x);T===null?f(o,l):T&&T.isColor&&(f(T,1),A=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,A){const T=g(A);T&&(T.isCubeTexture||T.mapping===Rr)?(u===void 0&&(u=new _t(new yi(1,1,1),new dt({name:"BackgroundCubeMaterial",uniforms:is(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),li.copy(A.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(li)),u.material.toneMapped=Je.getTransfer(T.colorSpace)!==ot,(h!==T||d!==T.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new _t(new On(2,2),new dt({name:"BackgroundMaterial",uniforms:is(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Je.getTransfer(T.colorSpace)!==ot,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,A){x.getRGB(tr,Zc(n)),i.buffers.color.setClear(tr.r,tr.g,tr.b,A,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,A=1){o.set(x),l=A,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(o,l)},render:v,addToRenderList:m,dispose:S}}function im(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(_,C,U,I,L){let N=!1;const H=h(I,U,C);r!==H&&(r=H,c(r.object)),N=p(_,I,U,L),N&&g(_,I,U,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,A(_,C,U,I),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,C,U){const I=U.wireframe===!0;let L=i[_.id];L===void 0&&(L={},i[_.id]=L);let N=L[C.id];N===void 0&&(N={},L[C.id]=N);let H=N[I];return H===void 0&&(H=d(l()),N[I]=H),H}function d(_){const C=[],U=[],I=[];for(let L=0;L<t;L++)C[L]=0,U[L]=0,I[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:I,object:_,attributes:{},index:null}}function p(_,C,U,I){const L=r.attributes,N=C.attributes;let H=0;const W=U.getAttributes();for(const O in W)if(W[O].location>=0){const re=L[O];let ce=N[O];if(ce===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function g(_,C,U,I){const L={},N=C.attributes;let H=0;const W=U.getAttributes();for(const O in W)if(W[O].location>=0){let re=N[O];re===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(re=_.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),L[O]=ce,H++}r.attributes=L,r.attributesNum=H,r.index=I}function v(){const _=r.newAttributes;for(let C=0,U=_.length;C<U;C++)_[C]=0}function m(_){f(_,0)}function f(_,C){const U=r.newAttributes,I=r.enabledAttributes,L=r.attributeDivisors;U[_]=1,I[_]===0&&(n.enableVertexAttribArray(_),I[_]=1),L[_]!==C&&(n.vertexAttribDivisor(_,C),L[_]=C)}function S(){const _=r.newAttributes,C=r.enabledAttributes;for(let U=0,I=C.length;U<I;U++)C[U]!==_[U]&&(n.disableVertexAttribArray(U),C[U]=0)}function x(_,C,U,I,L,N,H){H===!0?n.vertexAttribIPointer(_,C,U,L,N):n.vertexAttribPointer(_,C,U,I,L,N)}function A(_,C,U,I){v();const L=I.attributes,N=U.getAttributes(),H=C.defaultAttributeValues;for(const W in N){const O=N[W];if(O.location>=0){let K=L[W];if(K===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){const re=K.normalized,ce=K.itemSize,Ce=e.get(K);if(Ce===void 0)continue;const Ue=Ce.buffer,ke=Ce.type,Re=Ce.bytesPerElement,Q=ke===n.INT||ke===n.UNSIGNED_INT||K.gpuType===bo;if(K.isInterleavedBufferAttribute){const Z=K.data,ee=Z.stride,Se=K.offset;if(Z.isInstancedInterleavedBuffer){for(let me=0;me<O.locationSize;me++)f(O.location+me,Z.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let me=0;me<O.locationSize;me++)m(O.location+me);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let me=0;me<O.locationSize;me++)x(O.location+me,ce/O.locationSize,ke,re,ee*Re,(Se+ce/O.locationSize*me)*Re,Q)}else{if(K.isInstancedBufferAttribute){for(let Z=0;Z<O.locationSize;Z++)f(O.location+Z,K.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Z=0;Z<O.locationSize;Z++)m(O.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Z=0;Z<O.locationSize;Z++)x(O.location+Z,ce/O.locationSize,ke,re,ce*Re,ce/O.locationSize*Z*Re,Q)}}else if(H!==void 0){const re=H[W];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(O.location,re);break;case 3:n.vertexAttrib3fv(O.location,re);break;case 4:n.vertexAttrib4fv(O.location,re);break;default:n.vertexAttrib1fv(O.location,re)}}}}S()}function T(){D();for(const _ in i){const C=i[_];for(const U in C){const I=C[U];for(const L in I)u(I[L].object),delete I[L];delete C[U]}delete i[_]}}function y(_){if(i[_.id]===void 0)return;const C=i[_.id];for(const U in C){const I=C[U];for(const L in I)u(I[L].object),delete I[L];delete C[U]}delete i[_.id]}function E(_){for(const C in i){const U=i[C];if(U[_.id]===void 0)continue;const I=U[_.id];for(const L in I)u(I[L].object),delete I[L];delete U[_.id]}}function D(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function sm(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Ft&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const D=E===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==xt&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==un&&!D)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,y=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:A,vertexTextures:T,maxSamples:y}}function am(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Kn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,x=S*4;let A=f.clippingState||null;l.value=A,A=u(g,d,x,p);for(let T=0;T!==x;++T)A[T]=t[T];f.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,A=p;x!==v;++x,A+=4)a.copy(h[x]).applyMatrix4(S,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function om(n){let e=new WeakMap;function t(a,o){return o===za?a.mapping=$i:o===ka&&(a.mapping=es),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===za||o===ka)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ed(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ki=4,Fl=[.125,.215,.35,.446,.526,.582],vi=20,pa=new Is,Nl=new We;let ma=null,ga=0,va=0,xa=!1;const pi=(1+Math.sqrt(5))/2,Xi=1/pi,Ol=[new z(-pi,Xi,0),new z(pi,Xi,0),new z(-Xi,0,pi),new z(Xi,0,pi),new z(0,pi,-Xi),new z(0,pi,Xi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],lm=new z;class zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=lm}=r;ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ma,ga,va),this._renderer.xr.enabled=xa,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:et,minFilter:et,generateMipmaps:!1,type:bn,format:Ft,colorSpace:$n,depthBuffer:!1},s=kl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cm(r)),this._blurMaterial=um(r,e,t)}return s}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,i,s,r){const l=new Xt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Nl),h.toneMapping=Un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const v=new qc({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),m=new _t(new yi,v);let f=!1;const S=e.background;S?S.isColor&&(v.color.copy(S),e.background=null,f=!0):(v.color.copy(Nl),f=!0);for(let x=0;x<6;x++){const A=x%3;A===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):A===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const T=this._cubeSize;nr(s,A*T,x>2?T:0,T,T),h.setRenderTarget(s),f&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===$i||e.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;nr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,pa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ol[(s-r-1)%Ol.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new _t(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const f=[];let S=0;for(let E=0;E<vi;++E){const D=E/v,M=Math.exp(-D*D/2);f.push(M),E===0?S+=M:E<m&&(S+=2*M)}for(let E=0;E<f.length;E++)f[E]=f[E]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const A=this._sizeLods[s],T=3*A*(s>x-Ki?s-x+Ki:0),y=4*(this._cubeSize-A);nr(t,T,y,3*A,2*A),l.setRenderTarget(t),l.render(h,pa)}}function cm(n){const e=[],t=[],i=[];let s=n;const r=n-Ki+1+Fl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ki?l=Fl[a-n+Ki-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,S=new Float32Array(v*g*p),x=new Float32Array(m*g*p),A=new Float32Array(f*g*p);for(let y=0;y<p;y++){const E=y%3*2/3-1,D=y>2?0:-1,M=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];S.set(M,v*g*y),x.set(d,m*g*y);const _=[y,y,y,y,y,y];A.set(_,f*g*y)}const T=new Gt;T.setAttribute("position",new it(S,v)),T.setAttribute("uv",new it(x,m)),T.setAttribute("faceIndex",new it(A,f)),e.push(T),s>Ki&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kl(n,e,t){const i=new mt(n,e,t);return i.texture.mapping=Rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function um(n,e,t){const i=new Float32Array(vi),s=new z(0,1,0);return new dt({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function Hl(){return new dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function Gl(){return new dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===za||l===ka,u=l===$i||l===es;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new zl(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new zl(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function dm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Cs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function fm(n,e,t,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let x=0,A=S.length;x<A;x+=3){const T=S[x+0],y=S[x+1],E=S[x+2];d.push(T,y,y,E,E,T)}}else if(g!==void 0){const S=g.array;v=g.version;for(let x=0,A=S.length/3-1;x<A;x+=3){const T=x+0,y=x+1,E=x+2;d.push(T,y,y,E,E,T)}}else return;const m=new(Wc(d)?jc:Kc)(d,1);m.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function pm(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*a,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function h(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*v[S];t.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function mm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function gm(n,e,t){const i=new WeakMap,s=new ht;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let M=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let A=o.attributes.position.count*x,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const y=new Float32Array(A*T*4*h),E=new Fo(y,A,T,h);E.type=un,E.needsUpdate=!0;const D=x*4;for(let _=0;_<h;_++){const C=m[_],U=f[_],I=S[_],L=A*T*4*_;for(let N=0;N<C.count;N++){const H=N*D;p===!0&&(s.fromBufferAttribute(C,N),y[L+H+0]=s.x,y[L+H+1]=s.y,y[L+H+2]=s.z,y[L+H+3]=0),g===!0&&(s.fromBufferAttribute(U,N),y[L+H+4]=s.x,y[L+H+5]=s.y,y[L+H+6]=s.z,y[L+H+7]=0),v===!0&&(s.fromBufferAttribute(I,N),y[L+H+8]=s.x,y[L+H+9]=s.y,y[L+H+10]=s.z,y[L+H+11]=I.itemSize===4?s.w:1)}}d={count:h,texture:E,size:new Ae(A,T)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function vm(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const iu=new It,Vl=new Oo(1,1),su=new Fo,ru=new wr,au=new $c,Wl=[],Xl=[],Yl=new Float32Array(16),Ql=new Float32Array(9),ql=new Float32Array(4);function rs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Wl[s];if(r===void 0&&(r=new Float32Array(s),Wl[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pr(n,e){let t=Xl[e];t===void 0&&(t=new Int32Array(e),Xl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function Sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function _m(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;ql.set(i),n.uniformMatrix2fv(this.addr,!1,ql),Lt(t,i)}}function ym(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Ql.set(i),n.uniformMatrix3fv(this.addr,!1,Ql),Lt(t,i)}}function Em(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Yl.set(i),n.uniformMatrix4fv(this.addr,!1,Yl),Lt(t,i)}}function wm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function Cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function Dm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Lm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Vl.compareFunction=Vc,r=Vl):r=iu,t.setTexture2D(e||r,s)}function Bm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ru,s)}function Um(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||au,s)}function Fm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||su,s)}function Nm(n){switch(n){case 5126:return xm;case 35664:return Mm;case 35665:return Am;case 35666:return Sm;case 35674:return _m;case 35675:return ym;case 35676:return Em;case 5124:case 35670:return wm;case 35667:case 35671:return Tm;case 35668:case 35672:return bm;case 35669:case 35673:return Cm;case 5125:return Dm;case 36294:return Rm;case 36295:return Im;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Fm}}function Om(n,e){n.uniform1fv(this.addr,e)}function zm(n,e){const t=rs(e,this.size,2);n.uniform2fv(this.addr,t)}function km(n,e){const t=rs(e,this.size,3);n.uniform3fv(this.addr,t)}function Hm(n,e){const t=rs(e,this.size,4);n.uniform4fv(this.addr,t)}function Gm(n,e){const t=rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vm(n,e){const t=rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wm(n,e){const t=rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xm(n,e){n.uniform1iv(this.addr,e)}function Ym(n,e){n.uniform2iv(this.addr,e)}function Qm(n,e){n.uniform3iv(this.addr,e)}function qm(n,e){n.uniform4iv(this.addr,e)}function Km(n,e){n.uniform1uiv(this.addr,e)}function jm(n,e){n.uniform2uiv(this.addr,e)}function Zm(n,e){n.uniform3uiv(this.addr,e)}function Jm(n,e){n.uniform4uiv(this.addr,e)}function $m(n,e,t){const i=this.cache,s=e.length,r=Pr(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||iu,r[a])}function eg(n,e,t){const i=this.cache,s=e.length,r=Pr(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ru,r[a])}function tg(n,e,t){const i=this.cache,s=e.length,r=Pr(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||au,r[a])}function ng(n,e,t){const i=this.cache,s=e.length,r=Pr(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||su,r[a])}function ig(n){switch(n){case 5126:return Om;case 35664:return zm;case 35665:return km;case 35666:return Hm;case 35674:return Gm;case 35675:return Vm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return Ym;case 35668:case 35672:return Qm;case 35669:case 35673:return qm;case 5125:return Km;case 36294:return jm;case 36295:return Zm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}class sg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nm(t.type)}}class rg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ig(t.type)}}class ag{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Kl(n,e){n.seq.push(e),n.map[e.id]=e}function og(n,e,t){const i=n.name,s=i.length;for(Ma.lastIndex=0;;){const r=Ma.exec(i),a=Ma.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Kl(t,c===void 0?new sg(o,n,e):new rg(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new ag(o),Kl(t,h)),t=h}}}class xr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);og(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function jl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lg=37297;let cg=0;function ug(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Zl=new Ve;function hg(n){Je._getMatrix(Zl,Je.workingColorSpace,n);const e=`mat3( ${Zl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Sr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ug(n.getShaderSource(e),o)}else return r}function dg(n,e){const t=hg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fg(n,e){let t;switch(e){case dh:t="Linear";break;case fh:t="Reinhard";break;case ph:t="Cineon";break;case mh:t="ACESFilmic";break;case vh:t="AgX";break;case xh:t="Neutral";break;case gh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new z;function pg(){Je.getLuminanceCoefficients(ir);const n=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function gg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _s(n){return n!==""}function $l(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ec(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(n){return n.replace(xg,Ag)}const Mg=new Map;function Ag(n,e){let t=Xe[e];if(t===void 0){const i=Mg.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mo(t)}const Sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(n){return n.replace(Sg,_g)}function _g(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Eg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $i:case es:e="ENVMAP_TYPE_CUBE";break;case Rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function Tg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uc:e="ENVMAP_BLENDING_MULTIPLY";break;case uh:e="ENVMAP_BLENDING_MIX";break;case hh:e="ENVMAP_BLENDING_ADD";break}return e}function bg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Cg(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yg(t),c=Eg(t),u=wg(t),h=Tg(t),d=bg(t),p=mg(t),g=gg(r),v=s.createProgram();let m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_s).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_s).join(`
`),f.length>0&&(f+=`
`)):(m=[nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),f=[nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Un?fg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,dg("linearToOutputTexel",t.outputColorSpace),pg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),a=Mo(a),a=$l(a,t),a=ec(a,t),o=Mo(o),o=$l(o,t),o=ec(o,t),a=tc(a),o=tc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===_r?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_r?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=S+m+a,A=S+f+o,T=jl(s,s.VERTEX_SHADER,x),y=jl(s,s.FRAGMENT_SHADER,A);s.attachShader(v,T),s.attachShader(v,y),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(C){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(v)||"",I=s.getShaderInfoLog(T)||"",L=s.getShaderInfoLog(y)||"",N=U.trim(),H=I.trim(),W=L.trim();let O=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,T,y);else{const re=Jl(s,T,"vertex"),ce=Jl(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+re+`
`+ce)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||W==="")&&(K=!1);K&&(C.diagnostics={runnable:O,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(T),s.deleteShader(y),D=new xr(s,v),M=vg(s,v)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,lg)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=y,this}let Dg=0;class Rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ig(e),t.set(e,i)),i}}class Ig{constructor(e){this.id=Dg++,this.code=e,this.usedTimes=0}}function Pg(n,e,t,i,s,r,a){const o=new Yc,l=new Rg,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,C,U,I){const L=U.fog,N=I.geometry,H=M.isMeshStandardMaterial?U.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),O=W&&W.mapping===Rr?W.image.height:null,K=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const re=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ce=re!==void 0?re.length:0;let Ce=0;N.morphAttributes.position!==void 0&&(Ce=1),N.morphAttributes.normal!==void 0&&(Ce=2),N.morphAttributes.color!==void 0&&(Ce=3);let Ue,ke,Re,Q;if(K){const tt=An[K];Ue=tt.vertexShader,ke=tt.fragmentShader}else Ue=M.vertexShader,ke=M.fragmentShader,l.update(M),Re=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);const Z=n.getRenderTarget(),ee=n.state.buffers.depth.getReversed(),Se=I.isInstancedMesh===!0,me=I.isBatchedMesh===!0,ze=!!M.map,wt=!!M.matcap,B=!!W,ft=!!M.aoMap,Oe=!!M.lightMap,Ie=!!M.bumpMap,ge=!!M.normalMap,st=!!M.displacementMap,ve=!!M.emissiveMap,Le=!!M.metalnessMap,qe=!!M.roughnessMap,rt=M.anisotropy>0,R=M.clearcoat>0,w=M.dispersion>0,V=M.iridescence>0,q=M.sheen>0,$=M.transmission>0,j=rt&&!!M.anisotropyMap,be=R&&!!M.clearcoatMap,ae=R&&!!M.clearcoatNormalMap,ye=R&&!!M.clearcoatRoughnessMap,we=V&&!!M.iridescenceMap,ie=V&&!!M.iridescenceThicknessMap,fe=q&&!!M.sheenColorMap,Fe=q&&!!M.sheenRoughnessMap,Te=!!M.specularMap,he=!!M.specularColorMap,Ge=!!M.specularIntensityMap,F=$&&!!M.transmissionMap,se=$&&!!M.thicknessMap,oe=!!M.gradientMap,xe=!!M.alphaMap,te=M.alphaTest>0,J=!!M.alphaHash,_e=!!M.extensions;let He=Un;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(He=n.toneMapping);const pt={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Ue,fragmentShader:ke,defines:M.defines,customVertexShaderID:Re,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:me,batchingColor:me&&I._colorsTexture!==null,instancing:Se,instancingColor:Se&&I.instanceColor!==null,instancingMorph:Se&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:$n,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:wt,envMap:B,envMapMode:B&&W.mapping,envMapCubeUVHeight:O,aoMap:ft,lightMap:Oe,bumpMap:Ie,normalMap:ge,displacementMap:d&&st,emissiveMap:ve,normalMapObjectSpace:ge&&M.normalMapType===Sh,normalMapTangentSpace:ge&&M.normalMapType===Bo,metalnessMap:Le,roughnessMap:qe,anisotropy:rt,anisotropyMap:j,clearcoat:R,clearcoatMap:be,clearcoatNormalMap:ae,clearcoatRoughnessMap:ye,dispersion:w,iridescence:V,iridescenceMap:we,iridescenceThicknessMap:ie,sheen:q,sheenColorMap:fe,sheenRoughnessMap:Fe,specularMap:Te,specularColorMap:he,specularIntensityMap:Ge,transmission:$,transmissionMap:F,thicknessMap:se,gradientMap:oe,opaque:M.transparent===!1&&M.blending===ji&&M.alphaToCoverage===!1,alphaMap:xe,alphaTest:te,alphaHash:J,combine:M.combine,mapUv:ze&&v(M.map.channel),aoMapUv:ft&&v(M.aoMap.channel),lightMapUv:Oe&&v(M.lightMap.channel),bumpMapUv:Ie&&v(M.bumpMap.channel),normalMapUv:ge&&v(M.normalMap.channel),displacementMapUv:st&&v(M.displacementMap.channel),emissiveMapUv:ve&&v(M.emissiveMap.channel),metalnessMapUv:Le&&v(M.metalnessMap.channel),roughnessMapUv:qe&&v(M.roughnessMap.channel),anisotropyMapUv:j&&v(M.anisotropyMap.channel),clearcoatMapUv:be&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(M.sheenRoughnessMap.channel),specularMapUv:Te&&v(M.specularMap.channel),specularColorMapUv:he&&v(M.specularColorMap.channel),specularIntensityMapUv:Ge&&v(M.specularIntensityMap.channel),transmissionMapUv:F&&v(M.transmissionMap.channel),thicknessMapUv:se&&v(M.thicknessMap.channel),alphaMapUv:xe&&v(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ge||rt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(ze||xe),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ee,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ce,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===ot,decodeVideoTextureEmissive:ve&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ht,flipSided:M.side===Ct,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function f(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)_.push(C),_.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(S(_,M),x(_,M),_.push(n.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function S(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function x(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function A(M){const _=g[M.type];let C;if(_){const U=An[_];C=jh.clone(U.uniforms)}else C=M.uniforms;return C}function T(M,_){let C;for(let U=0,I=u.length;U<I;U++){const L=u[U];if(L.cacheKey===_){C=L,++C.usedTimes;break}}return C===void 0&&(C=new Cg(n,_,M,r),u.push(C)),C}function y(M){if(--M.usedTimes===0){const _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:T,releaseProgram:y,releaseShaderCache:E,programs:u,dispose:D}}function Lg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Bg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ic(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,d,p,g,v,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function o(h,d,p,g,v,m){const f=a(h,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,g,v,m){const f=a(h,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Bg),i.length>1&&i.sort(d||ic),s.length>1&&s.sort(d||ic)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Ug(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new sc,n.set(i,[a])):s>=r.length?(a=new sc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Fg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new We};break;case"SpotLight":t={position:new z,direction:new z,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Ng(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Og=0;function zg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kg(n){const e=new Fg,t=Ng(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new je,a=new je;function o(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,S=0,x=0,A=0,T=0,y=0,E=0;c.sort(zg);for(let M=0,_=c.length;M<_;M++){const C=c[M],U=C.color,I=C.intensity,L=C.distance,N=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*I,h+=U.g*I,d+=U.b*I;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],I);E++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,O=t.get(C);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=C.shadow.matrix,S++}i.directional[p]=H,p++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(U).multiplyScalar(I),H.distance=L,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[v]=H;const W=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,W.updateMatrices(C),C.castShadow&&y++),i.spotLightMatrix[v]=W.matrix,C.castShadow){const O=t.get(C);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=N,A++}v++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(U).multiplyScalar(I),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const W=C.shadow,O=t.get(C);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,O.shadowCameraNear=W.camera.near,O.shadowCameraFar=W.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=C.shadow.matrix,x++}i.point[g]=H,g++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(I),H.groundColor.copy(C.groundColor).multiplyScalar(I),i.hemi[f]=H,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==S||D.numPointShadows!==x||D.numSpotShadows!==A||D.numSpotMaps!==T||D.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=A+T-y,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=E,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=S,D.numPointShadows=x,D.numSpotShadows=A,D.numSpotMaps=T,D.numLightProbes=E,i.version=Og++)}function l(c,u){let h=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const x=c[f];if(x.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(x.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const A=i.hemi[v];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function rc(n){const e=new kg(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Hg(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new rc(n),e.set(s,[o])):r>=a.length?(o=new rc(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wg(n,e,t){let i=new Ir;const s=new Ae,r=new Ae,a=new ht,o=new ud({depthPacking:Ah}),l=new hd,c={},u=t.maxTextureSize,h={[wn]:Ct,[Ct]:wn,[Ht]:Ht},d=new dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Gg,fragmentShader:Vg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let f=this.type;this.render=function(y,E,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const M=n.getRenderTarget(),_=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Rt),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=f!==Bn&&this.type===Bn,L=f===Bn&&this.type!==Bn;for(let N=0,H=y.length;N<H;N++){const W=y[N],O=W.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const K=O.getFrameExtents();if(s.multiply(K),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,O.mapSize.y=r.y)),O.map===null||I===!0||L===!0){const ce=this.type!==Bn?{minFilter:Tt,magFilter:Tt}:{};O.map!==null&&O.map.dispose(),O.map=new mt(s.x,s.y,ce),O.map.texture.name=W.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const re=O.getViewportCount();for(let ce=0;ce<re;ce++){const Ce=O.getViewport(ce);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),U.viewport(a),O.updateMatrices(W,ce),i=O.getFrustum(),A(E,D,O.camera,W,this.type)}O.isPointLightShadow!==!0&&this.type===Bn&&S(O,D),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,_,C)};function S(y,E){const D=e.update(v);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new mt(s.x,s.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(E,null,D,d,v,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(E,null,D,p,v,null)}function x(y,E,D,M){let _=null;const C=D.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)_=C;else if(_=D.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const U=_.uuid,I=E.uuid;let L=c[U];L===void 0&&(L={},c[U]=L);let N=L[I];N===void 0&&(N=_.clone(),L[I]=N,E.addEventListener("dispose",T)),_=N}if(_.visible=E.visible,_.wireframe=E.wireframe,M===Bn?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:h[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const U=n.properties.get(_);U.light=D}return _}function A(y,E,D,M,_){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&_===Bn)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,y.matrixWorld);const I=e.update(y),L=y.material;if(Array.isArray(L)){const N=I.groups;for(let H=0,W=N.length;H<W;H++){const O=N[H],K=L[O.materialIndex];if(K&&K.visible){const re=x(y,K,M,_);y.onBeforeShadow(n,y,E,D,I,re,O),n.renderBufferDirect(D,null,I,re,y,O),y.onAfterShadow(n,y,E,D,I,re,O)}}}else if(L.visible){const N=x(y,L,M,_);y.onBeforeShadow(n,y,E,D,I,N,null),n.renderBufferDirect(D,null,I,N,y,null),y.onAfterShadow(n,y,E,D,I,N,null)}}const U=y.children;for(let I=0,L=U.length;I<L;I++)A(U[I],E,D,M,_)}function T(y){y.target.removeEventListener("dispose",T);for(const D in c){const M=c[D],_=y.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const Xg={[La]:Ar,[Ba]:Na,[Ua]:Oa,[Ji]:Fa,[Ar]:La,[Na]:Ba,[Oa]:Ua,[Fa]:Ji};function Yg(n,e){function t(){let F=!1;const se=new ht;let oe=null;const xe=new ht(0,0,0,0);return{setMask:function(te){oe!==te&&!F&&(n.colorMask(te,te,te,te),oe=te)},setLocked:function(te){F=te},setClear:function(te,J,_e,He,pt){pt===!0&&(te*=He,J*=He,_e*=He),se.set(te,J,_e,He),xe.equals(se)===!1&&(n.clearColor(te,J,_e,He),xe.copy(se))},reset:function(){F=!1,oe=null,xe.set(-1,0,0,0)}}}function i(){let F=!1,se=!1,oe=null,xe=null,te=null;return{setReversed:function(J){if(se!==J){const _e=e.get("EXT_clip_control");J?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),se=J;const He=te;te=null,this.setClear(He)}},getReversed:function(){return se},setTest:function(J){J?Z(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(J){oe!==J&&!F&&(n.depthMask(J),oe=J)},setFunc:function(J){if(se&&(J=Xg[J]),xe!==J){switch(J){case La:n.depthFunc(n.NEVER);break;case Ar:n.depthFunc(n.ALWAYS);break;case Ba:n.depthFunc(n.LESS);break;case Ji:n.depthFunc(n.LEQUAL);break;case Ua:n.depthFunc(n.EQUAL);break;case Fa:n.depthFunc(n.GEQUAL);break;case Na:n.depthFunc(n.GREATER);break;case Oa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=J}},setLocked:function(J){F=J},setClear:function(J){te!==J&&(se&&(J=1-J),n.clearDepth(J),te=J)},reset:function(){F=!1,oe=null,xe=null,te=null,se=!1}}}function s(){let F=!1,se=null,oe=null,xe=null,te=null,J=null,_e=null,He=null,pt=null;return{setTest:function(tt){F||(tt?Z(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(tt){se!==tt&&!F&&(n.stencilMask(tt),se=tt)},setFunc:function(tt,Cn,vn){(oe!==tt||xe!==Cn||te!==vn)&&(n.stencilFunc(tt,Cn,vn),oe=tt,xe=Cn,te=vn)},setOp:function(tt,Cn,vn){(J!==tt||_e!==Cn||He!==vn)&&(n.stencilOp(tt,Cn,vn),J=tt,_e=Cn,He=vn)},setLocked:function(tt){F=tt},setClear:function(tt){pt!==tt&&(n.clearStencil(tt),pt=tt)},reset:function(){F=!1,se=null,oe=null,xe=null,te=null,J=null,_e=null,He=null,pt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,S=null,x=null,A=null,T=null,y=null,E=new We(0,0,0),D=0,M=!1,_=null,C=null,U=null,I=null,L=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,W=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(O)[1]),H=W>=1):O.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),H=W>=2);let K=null,re={};const ce=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Ue=new ht().fromArray(ce),ke=new ht().fromArray(Ce);function Re(F,se,oe,xe){const te=new Uint8Array(4),J=n.createTexture();n.bindTexture(F,J),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<oe;_e++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(se+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return J}const Q={};Q[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(Ji),Ie(!1),ge(al),Z(n.CULL_FACE),ft(Rt);function Z(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ee(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Se(F,se){return h[F]!==se?(n.bindFramebuffer(F,se),h[F]=se,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=se),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=se),!0):!1}function me(F,se){let oe=p,xe=!1;if(F){oe=d.get(se),oe===void 0&&(oe=[],d.set(se,oe));const te=F.textures;if(oe.length!==te.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let J=0,_e=te.length;J<_e;J++)oe[J]=n.COLOR_ATTACHMENT0+J;oe.length=te.length,xe=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,xe=!0);xe&&n.drawBuffers(oe)}function ze(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const wt={[gi]:n.FUNC_ADD,[Qu]:n.FUNC_SUBTRACT,[qu]:n.FUNC_REVERSE_SUBTRACT};wt[Ku]=n.MIN,wt[ju]=n.MAX;const B={[Zu]:n.ZERO,[Ju]:n.ONE,[$u]:n.SRC_COLOR,[Ia]:n.SRC_ALPHA,[rh]:n.SRC_ALPHA_SATURATE,[ih]:n.DST_COLOR,[th]:n.DST_ALPHA,[eh]:n.ONE_MINUS_SRC_COLOR,[Pa]:n.ONE_MINUS_SRC_ALPHA,[sh]:n.ONE_MINUS_DST_COLOR,[nh]:n.ONE_MINUS_DST_ALPHA,[ah]:n.CONSTANT_COLOR,[oh]:n.ONE_MINUS_CONSTANT_COLOR,[lh]:n.CONSTANT_ALPHA,[ch]:n.ONE_MINUS_CONSTANT_ALPHA};function ft(F,se,oe,xe,te,J,_e,He,pt,tt){if(F===Rt){v===!0&&(ee(n.BLEND),v=!1);return}if(v===!1&&(Z(n.BLEND),v=!0),F!==Yu){if(F!==m||tt!==M){if((f!==gi||A!==gi)&&(n.blendEquation(n.FUNC_ADD),f=gi,A=gi),tt)switch(F){case ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mr:n.blendFunc(n.ONE,n.ONE);break;case ol:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ll:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ol:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ll:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,x=null,T=null,y=null,E.set(0,0,0),D=0,m=F,M=tt}return}te=te||se,J=J||oe,_e=_e||xe,(se!==f||te!==A)&&(n.blendEquationSeparate(wt[se],wt[te]),f=se,A=te),(oe!==S||xe!==x||J!==T||_e!==y)&&(n.blendFuncSeparate(B[oe],B[xe],B[J],B[_e]),S=oe,x=xe,T=J,y=_e),(He.equals(E)===!1||pt!==D)&&(n.blendColor(He.r,He.g,He.b,pt),E.copy(He),D=pt),m=F,M=!1}function Oe(F,se){F.side===Ht?ee(n.CULL_FACE):Z(n.CULL_FACE);let oe=F.side===Ct;se&&(oe=!oe),Ie(oe),F.blending===ji&&F.transparent===!1?ft(Rt):ft(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const xe=F.stencilWrite;o.setTest(xe),xe&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ve(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(F){_!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),_=F)}function ge(F){F!==Wu?(Z(n.CULL_FACE),F!==C&&(F===al?n.cullFace(n.BACK):F===Xu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),C=F}function st(F){F!==U&&(H&&n.lineWidth(F),U=F)}function ve(F,se,oe){F?(Z(n.POLYGON_OFFSET_FILL),(I!==se||L!==oe)&&(n.polygonOffset(se,oe),I=se,L=oe)):ee(n.POLYGON_OFFSET_FILL)}function Le(F){F?Z(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function qe(F){F===void 0&&(F=n.TEXTURE0+N-1),K!==F&&(n.activeTexture(F),K=F)}function rt(F,se,oe){oe===void 0&&(K===null?oe=n.TEXTURE0+N-1:oe=K);let xe=re[oe];xe===void 0&&(xe={type:void 0,texture:void 0},re[oe]=xe),(xe.type!==F||xe.texture!==se)&&(K!==oe&&(n.activeTexture(oe),K=oe),n.bindTexture(F,se||Q[F]),xe.type=F,xe.texture=se)}function R(){const F=re[K];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(F){Ue.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ue.copy(F))}function Fe(F){ke.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ke.copy(F))}function Te(F,se){let oe=c.get(se);oe===void 0&&(oe=new WeakMap,c.set(se,oe));let xe=oe.get(F);xe===void 0&&(xe=n.getUniformBlockIndex(se,F.name),oe.set(F,xe))}function he(F,se){const xe=c.get(se).get(F);l.get(se)!==xe&&(n.uniformBlockBinding(se,xe,F.__bindingPointIndex),l.set(se,xe))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,re={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,S=null,x=null,A=null,T=null,y=null,E=new We(0,0,0),D=0,M=!1,_=null,C=null,U=null,I=null,L=null,Ue.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:ee,bindFramebuffer:Se,drawBuffers:me,useProgram:ze,setBlending:ft,setMaterial:Oe,setFlipSided:Ie,setCullFace:ge,setLineWidth:st,setPolygonOffset:ve,setScissorTest:Le,activeTexture:qe,bindTexture:rt,unbindTexture:R,compressedTexImage2D:w,compressedTexImage3D:V,texImage2D:we,texImage3D:ie,updateUBOMapping:Te,uniformBlockBinding:he,texStorage2D:ae,texStorage3D:ye,texSubImage2D:q,texSubImage3D:$,compressedTexSubImage2D:j,compressedTexSubImage3D:be,scissor:fe,viewport:Fe,reset:Ge}}function Qg(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return p?new OffscreenCanvas(R,w):Er("canvas")}function v(R,w,V){let q=1;const $=rt(R);if(($.width>V||$.height>V)&&(q=V/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(q*$.width),be=Math.floor(q*$.height);h===void 0&&(h=g(j,be));const ae=w?g(j,be):h;return ae.width=j,ae.height=be,ae.getContext("2d").drawImage(R,0,0,j,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+be+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){n.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,w,V,q,$=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=w;if(w===n.RED&&(V===n.FLOAT&&(j=n.R32F),V===n.HALF_FLOAT&&(j=n.R16F),V===n.UNSIGNED_BYTE&&(j=n.R8)),w===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.R8UI),V===n.UNSIGNED_SHORT&&(j=n.R16UI),V===n.UNSIGNED_INT&&(j=n.R32UI),V===n.BYTE&&(j=n.R8I),V===n.SHORT&&(j=n.R16I),V===n.INT&&(j=n.R32I)),w===n.RG&&(V===n.FLOAT&&(j=n.RG32F),V===n.HALF_FLOAT&&(j=n.RG16F),V===n.UNSIGNED_BYTE&&(j=n.RG8)),w===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RG8UI),V===n.UNSIGNED_SHORT&&(j=n.RG16UI),V===n.UNSIGNED_INT&&(j=n.RG32UI),V===n.BYTE&&(j=n.RG8I),V===n.SHORT&&(j=n.RG16I),V===n.INT&&(j=n.RG32I)),w===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGB8UI),V===n.UNSIGNED_SHORT&&(j=n.RGB16UI),V===n.UNSIGNED_INT&&(j=n.RGB32UI),V===n.BYTE&&(j=n.RGB8I),V===n.SHORT&&(j=n.RGB16I),V===n.INT&&(j=n.RGB32I)),w===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),V===n.UNSIGNED_INT&&(j=n.RGBA32UI),V===n.BYTE&&(j=n.RGBA8I),V===n.SHORT&&(j=n.RGBA16I),V===n.INT&&(j=n.RGBA32I)),w===n.RGB&&(V===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),w===n.RGBA){const be=$?Sr:Je.getTransfer(q);V===n.FLOAT&&(j=n.RGBA32F),V===n.HALF_FLOAT&&(j=n.RGBA16F),V===n.UNSIGNED_BYTE&&(j=be===ot?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function A(R,w){let V;return R?w===null||w===Ai||w===ts?V=n.DEPTH24_STENCIL8:w===un?V=n.DEPTH32F_STENCIL8:w===Ts&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ai||w===ts?V=n.DEPTH_COMPONENT24:w===un?V=n.DEPTH_COMPONENT32F:w===Ts&&(V=n.DEPTH_COMPONENT16),V}function T(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tt&&R.minFilter!==et?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function y(R){const w=R.target;w.removeEventListener("dispose",y),D(w),w.isVideoTexture&&u.delete(w)}function E(R){const w=R.target;w.removeEventListener("dispose",E),_(w)}function D(R){const w=i.get(R);if(w.__webglInit===void 0)return;const V=R.source,q=d.get(V);if(q){const $=q[w.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(R),Object.keys(q).length===0&&d.delete(V)}i.remove(R)}function M(R){const w=i.get(R);n.deleteTexture(w.__webglTexture);const V=R.source,q=d.get(V);delete q[w.__cacheKey],a.memory.textures--}function _(R){const w=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(w.__webglFramebuffer[q]))for(let $=0;$<w.__webglFramebuffer[q].length;$++)n.deleteFramebuffer(w.__webglFramebuffer[q][$]);else n.deleteFramebuffer(w.__webglFramebuffer[q]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[q])}else{if(Array.isArray(w.__webglFramebuffer))for(let q=0;q<w.__webglFramebuffer.length;q++)n.deleteFramebuffer(w.__webglFramebuffer[q]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let q=0;q<w.__webglColorRenderbuffer.length;q++)w.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[q]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=R.textures;for(let q=0,$=V.length;q<$;q++){const j=i.get(V[q]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(V[q])}i.remove(R)}let C=0;function U(){C=0}function I(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function L(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function N(R,w){const V=i.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,R,w);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+w)}function H(R,w){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Q(V,R,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+w)}function W(R,w){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Q(V,R,w);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+w)}function O(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Z(V,R,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+w)}const K={[ws]:n.REPEAT,[Sn]:n.CLAMP_TO_EDGE,[Ha]:n.MIRRORED_REPEAT},re={[Tt]:n.NEAREST,[Mh]:n.NEAREST_MIPMAP_NEAREST,[Bs]:n.NEAREST_MIPMAP_LINEAR,[et]:n.LINEAR,[Gr]:n.LINEAR_MIPMAP_NEAREST,[_n]:n.LINEAR_MIPMAP_LINEAR},ce={[_h]:n.NEVER,[Ch]:n.ALWAYS,[yh]:n.LESS,[Vc]:n.LEQUAL,[Eh]:n.EQUAL,[bh]:n.GEQUAL,[wh]:n.GREATER,[Th]:n.NOTEQUAL};function Ce(R,w){if(w.type===un&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===et||w.magFilter===Gr||w.magFilter===Bs||w.magFilter===_n||w.minFilter===et||w.minFilter===Gr||w.minFilter===Bs||w.minFilter===_n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,K[w.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,K[w.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,K[w.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,re[w.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ce[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Tt||w.minFilter!==Bs&&w.minFilter!==_n||w.type===un&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(R,w){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",y));const q=w.source;let $=d.get(q);$===void 0&&($={},d.set(q,$));const j=L(w);if(j!==R.__cacheKey){$[j]===void 0&&($[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),$[j].usedTimes++;const be=$[R.__cacheKey];be!==void 0&&($[R.__cacheKey].usedTimes--,be.usedTimes===0&&M(w)),R.__cacheKey=j,R.__webglTexture=$[j].texture}return V}function ke(R,w,V){return Math.floor(Math.floor(R/V)/w)}function Re(R,w,V,q){const j=R.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,V,q,w.data);else{j.sort((ie,fe)=>ie.start-fe.start);let be=0;for(let ie=1;ie<j.length;ie++){const fe=j[be],Fe=j[ie],Te=fe.start+fe.count,he=ke(Fe.start,w.width,4),Ge=ke(fe.start,w.width,4);Fe.start<=Te+1&&he===Ge&&ke(Fe.start+Fe.count-1,w.width,4)===he?fe.count=Math.max(fe.count,Fe.start+Fe.count-fe.start):(++be,j[be]=Fe)}j.length=be+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),ye=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let ie=0,fe=j.length;ie<fe;ie++){const Fe=j[ie],Te=Math.floor(Fe.start/4),he=Math.ceil(Fe.count/4),Ge=Te%w.width,F=Math.floor(Te/w.width),se=he,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ge,F,se,oe,V,q,w.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function Q(R,w,V){let q=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(q=n.TEXTURE_3D);const $=Ue(R,w),j=w.source;t.bindTexture(q,R.__webglTexture,n.TEXTURE0+V);const be=i.get(j);if(j.version!==be.__version||$===!0){t.activeTexture(n.TEXTURE0+V);const ae=Je.getPrimaries(Je.workingColorSpace),ye=w.colorSpace===rn?null:Je.getPrimaries(w.colorSpace),we=w.colorSpace===rn||ae===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ie=v(w.image,!1,s.maxTextureSize);ie=qe(w,ie);const fe=r.convert(w.format,w.colorSpace),Fe=r.convert(w.type);let Te=x(w.internalFormat,fe,Fe,w.colorSpace,w.isVideoTexture);Ce(q,w);let he;const Ge=w.mipmaps,F=w.isVideoTexture!==!0,se=be.__version===void 0||$===!0,oe=j.dataReady,xe=T(w,ie);if(w.isDepthTexture)Te=A(w.format===ns,w.type),se&&(F?t.texStorage2D(n.TEXTURE_2D,1,Te,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Te,ie.width,ie.height,0,fe,Fe,null));else if(w.isDataTexture)if(Ge.length>0){F&&se&&t.texStorage2D(n.TEXTURE_2D,xe,Te,Ge[0].width,Ge[0].height);for(let te=0,J=Ge.length;te<J;te++)he=Ge[te],F?oe&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,fe,Fe,he.data):t.texImage2D(n.TEXTURE_2D,te,Te,he.width,he.height,0,fe,Fe,he.data);w.generateMipmaps=!1}else F?(se&&t.texStorage2D(n.TEXTURE_2D,xe,Te,ie.width,ie.height),oe&&Re(w,ie,fe,Fe)):t.texImage2D(n.TEXTURE_2D,0,Te,ie.width,ie.height,0,fe,Fe,ie.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Te,Ge[0].width,Ge[0].height,ie.depth);for(let te=0,J=Ge.length;te<J;te++)if(he=Ge[te],w.format!==Ft)if(fe!==null)if(F){if(oe)if(w.layerUpdates.size>0){const _e=Ul(he.width,he.height,w.format,w.type);for(const He of w.layerUpdates){const pt=he.data.subarray(He*_e/he.data.BYTES_PER_ELEMENT,(He+1)*_e/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,He,he.width,he.height,1,fe,pt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ie.depth,fe,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Te,he.width,he.height,ie.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ie.depth,fe,Fe,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Te,he.width,he.height,ie.depth,0,fe,Fe,he.data)}else{F&&se&&t.texStorage2D(n.TEXTURE_2D,xe,Te,Ge[0].width,Ge[0].height);for(let te=0,J=Ge.length;te<J;te++)he=Ge[te],w.format!==Ft?fe!==null?F?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Te,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?oe&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,fe,Fe,he.data):t.texImage2D(n.TEXTURE_2D,te,Te,he.width,he.height,0,fe,Fe,he.data)}else if(w.isDataArrayTexture)if(F){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Te,ie.width,ie.height,ie.depth),oe)if(w.layerUpdates.size>0){const te=Ul(ie.width,ie.height,w.format,w.type);for(const J of w.layerUpdates){const _e=ie.data.subarray(J*te/ie.data.BYTES_PER_ELEMENT,(J+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,fe,Fe,_e)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Fe,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,fe,Fe,ie.data);else if(w.isData3DTexture)F?(se&&t.texStorage3D(n.TEXTURE_3D,xe,Te,ie.width,ie.height,ie.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Fe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,fe,Fe,ie.data);else if(w.isFramebufferTexture){if(se)if(F)t.texStorage2D(n.TEXTURE_2D,xe,Te,ie.width,ie.height);else{let te=ie.width,J=ie.height;for(let _e=0;_e<xe;_e++)t.texImage2D(n.TEXTURE_2D,_e,Te,te,J,0,fe,Fe,null),te>>=1,J>>=1}}else if(Ge.length>0){if(F&&se){const te=rt(Ge[0]);t.texStorage2D(n.TEXTURE_2D,xe,Te,te.width,te.height)}for(let te=0,J=Ge.length;te<J;te++)he=Ge[te],F?oe&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,fe,Fe,he):t.texImage2D(n.TEXTURE_2D,te,Te,fe,Fe,he);w.generateMipmaps=!1}else if(F){if(se){const te=rt(ie);t.texStorage2D(n.TEXTURE_2D,xe,Te,te.width,te.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Fe,ie)}else t.texImage2D(n.TEXTURE_2D,0,Te,fe,Fe,ie);m(w)&&f(q),be.__version=j.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Z(R,w,V){if(w.image.length!==6)return;const q=Ue(R,w),$=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);const j=i.get($);if($.version!==j.__version||q===!0){t.activeTexture(n.TEXTURE0+V);const be=Je.getPrimaries(Je.workingColorSpace),ae=w.colorSpace===rn?null:Je.getPrimaries(w.colorSpace),ye=w.colorSpace===rn||be===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const we=w.isCompressedTexture||w.image[0].isCompressedTexture,ie=w.image[0]&&w.image[0].isDataTexture,fe=[];for(let J=0;J<6;J++)!we&&!ie?fe[J]=v(w.image[J],!0,s.maxCubemapSize):fe[J]=ie?w.image[J].image:w.image[J],fe[J]=qe(w,fe[J]);const Fe=fe[0],Te=r.convert(w.format,w.colorSpace),he=r.convert(w.type),Ge=x(w.internalFormat,Te,he,w.colorSpace),F=w.isVideoTexture!==!0,se=j.__version===void 0||q===!0,oe=$.dataReady;let xe=T(w,Fe);Ce(n.TEXTURE_CUBE_MAP,w);let te;if(we){F&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ge,Fe.width,Fe.height);for(let J=0;J<6;J++){te=fe[J].mipmaps;for(let _e=0;_e<te.length;_e++){const He=te[_e];w.format!==Ft?Te!==null?F?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,He.width,He.height,Te,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,Ge,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,He.width,He.height,Te,he,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,Ge,He.width,He.height,0,Te,he,He.data)}}}else{if(te=w.mipmaps,F&&se){te.length>0&&xe++;const J=rt(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ge,J.width,J.height)}for(let J=0;J<6;J++)if(ie){F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,fe[J].width,fe[J].height,Te,he,fe[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,fe[J].width,fe[J].height,0,Te,he,fe[J].data);for(let _e=0;_e<te.length;_e++){const pt=te[_e].image[J].image;F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,pt.width,pt.height,Te,he,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,Ge,pt.width,pt.height,0,Te,he,pt.data)}}else{F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Te,he,fe[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,Te,he,fe[J]);for(let _e=0;_e<te.length;_e++){const He=te[_e];F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,Te,he,He.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,Ge,Te,he,He.image[J])}}}m(w)&&f(n.TEXTURE_CUBE_MAP),j.__version=$.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ee(R,w,V,q,$,j){const be=r.convert(V.format,V.colorSpace),ae=r.convert(V.type),ye=x(V.internalFormat,be,ae,V.colorSpace),we=i.get(w),ie=i.get(V);if(ie.__renderTarget=w,!we.__hasExternalTextures){const fe=Math.max(1,w.width>>j),Fe=Math.max(1,w.height>>j);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,j,ye,fe,Fe,w.depth,0,be,ae,null):t.texImage2D($,j,ye,fe,Fe,0,be,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ve(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,$,ie.__webglTexture,0,st(w)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,$,ie.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(R,w,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),w.depthBuffer){const q=w.depthTexture,$=q&&q.isDepthTexture?q.type:null,j=A(w.stencilBuffer,$),be=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=st(w);ve(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,j,w.width,w.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,j,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,j,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,R)}else{const q=w.textures;for(let $=0;$<q.length;$++){const j=q[$],be=r.convert(j.format,j.colorSpace),ae=r.convert(j.type),ye=x(j.internalFormat,be,ae,j.colorSpace),we=st(w);V&&ve(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ye,w.width,w.height):ve(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,ye,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ye,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(w.depthTexture);q.__renderTarget=w,(!q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const $=q.__webglTexture,j=st(w);if(w.depthTexture.format===bs)ve(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(w.depthTexture.format===ns)ve(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ze(R){const w=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),q){const $=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),w.__depthDisposeCallback=$}w.__boundDepthTexture=q}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const q=R.texture.mipmaps;q&&q.length>0?me(w.__webglFramebuffer[0],R):me(w.__webglFramebuffer,R)}else if(V){w.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[q]),w.__webglDepthbuffer[q]===void 0)w.__webglDepthbuffer[q]=n.createRenderbuffer(),Se(w.__webglDepthbuffer[q],R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,j)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Se(w.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(R,w,V){const q=i.get(R);w!==void 0&&ee(q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&ze(R)}function B(R){const w=R.texture,V=i.get(R),q=i.get(w);R.addEventListener("dispose",E);const $=R.textures,j=R.isWebGLCubeRenderTarget===!0,be=$.length>1;if(be||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=w.version,a.memory.textures++),j){V.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[ae]=[];for(let ye=0;ye<w.mipmaps.length;ye++)V.__webglFramebuffer[ae][ye]=n.createFramebuffer()}else V.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let ae=0;ae<w.mipmaps.length;ae++)V.__webglFramebuffer[ae]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(be)for(let ae=0,ye=$.length;ae<ye;ae++){const we=i.get($[ae]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ve(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ae=0;ae<$.length;ae++){const ye=$[ae];V.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ae]);const we=r.convert(ye.format,ye.colorSpace),ie=r.convert(ye.type),fe=x(ye.internalFormat,we,ie,ye.colorSpace,R.isXRRenderTarget===!0),Fe=st(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,fe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,V.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,w);for(let ae=0;ae<6;ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)ee(V.__webglFramebuffer[ae][ye],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye);else ee(V.__webglFramebuffer[ae],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(w)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ae=0,ye=$.length;ae<ye;ae++){const we=$[ae],ie=i.get(we);let fe=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ie.__webglTexture),Ce(fe,we),ee(V.__webglFramebuffer,R,we,n.COLOR_ATTACHMENT0+ae,fe,0),m(we)&&f(fe)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,q.__webglTexture),Ce(ae,w),w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)ee(V.__webglFramebuffer[ye],R,w,n.COLOR_ATTACHMENT0,ae,ye);else ee(V.__webglFramebuffer,R,w,n.COLOR_ATTACHMENT0,ae,0);m(w)&&f(ae),t.unbindTexture()}R.depthBuffer&&ze(R)}function ft(R){const w=R.textures;for(let V=0,q=w.length;V<q;V++){const $=w[V];if(m($)){const j=S(R),be=i.get($).__webglTexture;t.bindTexture(j,be),f(j),t.unbindTexture()}}}const Oe=[],Ie=[];function ge(R){if(R.samples>0){if(ve(R)===!1){const w=R.textures,V=R.width,q=R.height;let $=n.COLOR_BUFFER_BIT;const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(R),ae=w.length>1;if(ae)for(let we=0;we<w.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ye=R.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let we=0;we<w.length;we++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[we]);const ie=i.get(w[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,V,q,0,0,V,q,$,n.NEAREST),l===!0&&(Oe.length=0,Ie.length=0,Oe.push(n.COLOR_ATTACHMENT0+we),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Oe.push(j),Ie.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ie)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let we=0;we<w.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,be.__webglColorRenderbuffer[we]);const ie=i.get(w[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function st(R){return Math.min(s.maxSamples,R.samples)}function ve(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Le(R){const w=a.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function qe(R,w){const V=R.colorSpace,q=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==$n&&V!==rn&&(Je.getTransfer(V)===ot?(q!==Ft||$!==xt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=U,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=O,this.rebindTextures=wt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=ve}function qg(n,e){function t(i,s=rn){let r;const a=Je.getTransfer(s);if(i===xt)return n.UNSIGNED_BYTE;if(i===Co)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Do)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nc)return n.BYTE;if(i===Oc)return n.SHORT;if(i===Ts)return n.UNSIGNED_SHORT;if(i===bo)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===un)return n.FLOAT;if(i===bn)return n.HALF_FLOAT;if(i===Hc)return n.ALPHA;if(i===Gc)return n.RGB;if(i===Ft)return n.RGBA;if(i===bs)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===Si)return n.RED;if(i===Ro)return n.RED_INTEGER;if(i===Io)return n.RG;if(i===Po)return n.RG_INTEGER;if(i===Lo)return n.RGBA_INTEGER;if(i===pr||i===mr||i===gr||i===vr)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ga||i===Va||i===Wa||i===Xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ya||i===Qa||i===qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ya||i===Qa)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===qa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ka||i===ja||i===Za||i===Ja||i===$a||i===eo||i===to||i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ka)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ja)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Za)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ja)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$a)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===to)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===no)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===io)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===so)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ro)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ao)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===co||i===uo||i===ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===co)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fo||i===po||i===mo||i===go)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new eu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new dt({vertexShader:Kg,fragmentShader:jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new On(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jg extends zn{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Zg,f={},S=t.getContextAttributes();let x=null,A=null;const T=[],y=[],E=new Ae;let D=null;const M=new Xt;M.viewport=new ht;const _=new Xt;_.viewport=new ht;const C=[M,_],U=new xd;let I=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let Z=T[Q];return Z===void 0&&(Z=new ha,T[Q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Q){let Z=T[Q];return Z===void 0&&(Z=new ha,T[Q]=Z),Z.getGripSpace()},this.getHand=function(Q){let Z=T[Q];return Z===void 0&&(Z=new ha,T[Q]=Z),Z.getHandSpace()};function N(Q){const Z=y.indexOf(Q.inputSource);if(Z===-1)return;const ee=T[Z];ee!==void 0&&(ee.update(Q.inputSource,Q.frame,c||a),ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",W);for(let Q=0;Q<T.length;Q++){const Z=y[Q];Z!==null&&(y[Q]=null,T[Q].disconnect(Z))}I=null,L=null,m.reset();for(const Q in f)delete f[Q];e.setRenderTarget(x),p=null,d=null,h=null,s=null,A=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",W),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Se=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=S.stencil?ns:bs,Se=S.stencil?ts:Ai);const ze={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new mt(d.textureWidth,d.textureHeight,{format:Ft,type:xt,depthTexture:new Oo(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new mt(p.framebufferWidth,p.framebufferHeight,{format:Ft,type:xt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Q){for(let Z=0;Z<Q.removed.length;Z++){const ee=Q.removed[Z],Se=y.indexOf(ee);Se>=0&&(y[Se]=null,T[Se].disconnect(ee))}for(let Z=0;Z<Q.added.length;Z++){const ee=Q.added[Z];let Se=y.indexOf(ee);if(Se===-1){for(let ze=0;ze<T.length;ze++)if(ze>=y.length){y.push(ee),Se=ze;break}else if(y[ze]===null){y[ze]=ee,Se=ze;break}if(Se===-1)break}const me=T[Se];me&&me.connect(ee)}}const O=new z,K=new z;function re(Q,Z,ee){O.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(ee.matrixWorld);const Se=O.distanceTo(K),me=Z.projectionMatrix.elements,ze=ee.projectionMatrix.elements,wt=me[14]/(me[10]-1),B=me[14]/(me[10]+1),ft=(me[9]+1)/me[5],Oe=(me[9]-1)/me[5],Ie=(me[8]-1)/me[0],ge=(ze[8]+1)/ze[0],st=wt*Ie,ve=wt*ge,Le=Se/(-Ie+ge),qe=Le*-Ie;if(Z.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(qe),Q.translateZ(Le),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),me[10]===-1)Q.projectionMatrix.copy(Z.projectionMatrix),Q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const rt=wt+Le,R=B+Le,w=st-qe,V=ve+(Se-qe),q=ft*B/R*rt,$=Oe*B/R*rt;Q.projectionMatrix.makePerspective(w,V,q,$,rt,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ce(Q,Z){Z===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(Z.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let Z=Q.near,ee=Q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),U.near=_.near=M.near=Z,U.far=_.far=M.far=ee,(I!==U.near||L!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,L=U.far),U.layers.mask=Q.layers.mask|6,M.layers.mask=U.layers.mask&3,_.layers.mask=U.layers.mask&5;const Se=Q.parent,me=U.cameras;ce(U,Se);for(let ze=0;ze<me.length;ze++)ce(me[ze],Se);me.length===2?re(U,M,_):U.projectionMatrix.copy(M.projectionMatrix),Ce(Q,U,Se)};function Ce(Q,Z,ee){ee===null?Q.matrix.copy(Z.matrixWorld):(Q.matrix.copy(ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(Z.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(Z.projectionMatrix),Q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=vo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Q){return f[Q]};let Ue=null;function ke(Q,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){const ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Se=!1;ee.length!==U.cameras.length&&(U.cameras.length=0,Se=!0);for(let B=0;B<ee.length;B++){const ft=ee[B];let Oe=null;if(p!==null)Oe=p.getViewport(ft);else{const ge=h.getViewSubImage(d,ft);Oe=ge.viewport,B===0&&(e.setRenderTargetTextures(A,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(A))}let Ie=C[B];Ie===void 0&&(Ie=new Xt,Ie.layers.enable(B),Ie.viewport=new ht,C[B]=Ie),Ie.matrix.fromArray(ft.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ft.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),B===0&&(U.matrix.copy(Ie.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Se===!0&&U.cameras.push(Ie)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const B=h.getDepthInformation(ee[0]);B&&B.isValid&&B.texture&&m.init(B,s.renderState)}if(me&&me.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let B=0;B<ee.length;B++){const ft=ee[B].camera;if(ft){let Oe=f[ft];Oe||(Oe=new eu,f[ft]=Oe);const Ie=h.getCameraImage(ft);Oe.sourceTexture=Ie}}}}for(let ee=0;ee<T.length;ee++){const Se=y[ee],me=T[ee];Se!==null&&me!==void 0&&me.update(Se,Z,c||a)}Ue&&Ue(Q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Re=new nu;Re.setAnimationLoop(ke),this.setAnimationLoop=function(Q){Ue=Q},this.dispose=function(){}}}const ci=new Tn,$g=new je;function e0(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Zc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,x,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ct&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ct&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=e.get(f),x=S.envMap,A=S.envMapRotation;x&&(m.envMap.value=x,ci.copy(A),ci.x*=-1,ci.y*=-1,ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4($g.makeRotationFromEuler(ci)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function t0(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const A=x.program;i.uniformBlockBinding(S,A)}function c(S,x){let A=s[S.id];A===void 0&&(g(S),A=u(S),s[S.id]=A,S.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(S,T);const y=e.render.frame;r[S.id]!==y&&(d(S),r[S.id]=y)}function u(S){const x=h();S.__bindingPointIndex=x;const A=n.createBuffer(),T=S.__size,y=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,T,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,A),A}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=s[S.id],A=S.uniforms,T=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let y=0,E=A.length;y<E;y++){const D=Array.isArray(A[y])?A[y]:[A[y]];for(let M=0,_=D.length;M<_;M++){const C=D[M];if(p(C,y,M,T)===!0){const U=C.__offset,I=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let N=0;N<I.length;N++){const H=I[N],W=v(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,U+L,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,x,A,T){const y=S.value,E=x+"_"+A;if(T[E]===void 0)return typeof y=="number"||typeof y=="boolean"?T[E]=y:T[E]=y.clone(),!0;{const D=T[E];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return T[E]=y,!0}else if(D.equals(y)===!1)return D.copy(y),!0}return!1}function g(S){const x=S.uniforms;let A=0;const T=16;for(let E=0,D=x.length;E<D;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let _=0,C=M.length;_<C;_++){const U=M[_],I=Array.isArray(U.value)?U.value:[U.value];for(let L=0,N=I.length;L<N;L++){const H=I[L],W=v(H),O=A%T,K=O%W.boundary,re=O+K;A+=K,re!==0&&T-re<W.storage&&(A+=T-re),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=A,A+=W.storage}}}const y=A%T;return y>0&&(A+=T-y),S.__size=A,S.__cache={},this}function v(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const A=a.indexOf(x.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class n0{constructor(e={}){const{canvas:t=Rh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let T=!1;this._outputColorSpace=nt;let y=0,E=0,D=null,M=-1,_=null;const C=new ht,U=new ht;let I=null;const L=new We(0);let N=0,H=t.width,W=t.height,O=1,K=null,re=null;const ce=new ht(0,0,H,W),Ce=new ht(0,0,H,W);let Ue=!1;const ke=new Ir;let Re=!1,Q=!1;const Z=new je,ee=new z,Se=new ht,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function wt(){return D===null?O:1}let B=i;function ft(b,k){return t.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ti}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",te,!1),B===null){const k="webgl2";if(B=ft(k,b),B===null)throw ft(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Oe,Ie,ge,st,ve,Le,qe,rt,R,w,V,q,$,j,be,ae,ye,we,ie,fe,Fe,Te,he,Ge;function F(){Oe=new dm(B),Oe.init(),Te=new qg(B,Oe),Ie=new rm(B,Oe,e,Te),ge=new Yg(B,Oe),Ie.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),st=new mm(B),ve=new Lg,Le=new Qg(B,Oe,ge,ve,Ie,Te,st),qe=new om(A),rt=new hm(A),R=new Ad(B),he=new im(B,R),w=new fm(B,R,st,he),V=new vm(B,w,R,st),ie=new gm(B,Ie,Le),ae=new am(ve),q=new Pg(A,qe,rt,Oe,Ie,he,ae),$=new e0(A,ve),j=new Ug,be=new Hg(Oe),we=new nm(A,qe,rt,ge,V,p,l),ye=new Wg(A,V,Ie),Ge=new t0(B,st,Ie,ge),fe=new sm(B,Oe,st),Fe=new pm(B,Oe,st),st.programs=q.programs,A.capabilities=Ie,A.extensions=Oe,A.properties=ve,A.renderLists=j,A.shadowMap=ye,A.state=ge,A.info=st}F();const se=new Jg(A,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=Oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(b){b!==void 0&&(O=b,this.setSize(H,W,!1))},this.getSize=function(b){return b.set(H,W)},this.setSize=function(b,k,X=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,W=k,t.width=Math.floor(b*O),t.height=Math.floor(k*O),X===!0&&(t.style.width=b+"px",t.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(H*O,W*O).floor()},this.setDrawingBufferSize=function(b,k,X){H=b,W=k,O=X,t.width=Math.floor(b*X),t.height=Math.floor(k*X),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(ce)},this.setViewport=function(b,k,X,Y){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,k,X,Y),ge.viewport(C.copy(ce).multiplyScalar(O).round())},this.getScissor=function(b){return b.copy(Ce)},this.setScissor=function(b,k,X,Y){b.isVector4?Ce.set(b.x,b.y,b.z,b.w):Ce.set(b,k,X,Y),ge.scissor(U.copy(Ce).multiplyScalar(O).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(b){ge.setScissorTest(Ue=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){re=b},this.getClearColor=function(b){return b.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,X=!0){let Y=0;if(b){let G=!1;if(D!==null){const ne=D.texture.format;G=ne===Lo||ne===Po||ne===Ro}if(G){const ne=D.texture.type,de=ne===xt||ne===Ai||ne===Ts||ne===ts||ne===Co||ne===Do,Me=we.getClearColor(),pe=we.getClearAlpha(),Be=Me.r,Ne=Me.g,De=Me.b;de?(g[0]=Be,g[1]=Ne,g[2]=De,g[3]=pe,B.clearBufferuiv(B.COLOR,0,g)):(v[0]=Be,v[1]=Ne,v[2]=De,v[3]=pe,B.clearBufferiv(B.COLOR,0,v))}else Y|=B.COLOR_BUFFER_BIT}k&&(Y|=B.DEPTH_BUFFER_BIT),X&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",te,!1),we.dispose(),j.dispose(),be.dispose(),ve.dispose(),qe.dispose(),rt.dispose(),V.dispose(),he.dispose(),Ge.dispose(),q.dispose(),se.dispose(),se.removeEventListener("sessionstart",vn),se.removeEventListener("sessionend",el),ni.stop()};function oe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=st.autoReset,k=ye.enabled,X=ye.autoUpdate,Y=ye.needsUpdate,G=ye.type;F(),st.autoReset=b,ye.enabled=k,ye.autoUpdate=X,ye.needsUpdate=Y,ye.type=G}function te(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function J(b){const k=b.target;k.removeEventListener("dispose",J),_e(k)}function _e(b){He(b),ve.remove(b)}function He(b){const k=ve.get(b).programs;k!==void 0&&(k.forEach(function(X){q.releaseProgram(X)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,X,Y,G,ne){k===null&&(k=me);const de=G.isMesh&&G.matrixWorld.determinant()<0,Me=Ou(b,k,X,Y,G);ge.setMaterial(Y,de);let pe=X.index,Be=1;if(Y.wireframe===!0){if(pe=w.getWireframeAttribute(X),pe===void 0)return;Be=2}const Ne=X.drawRange,De=X.attributes.position;let Qe=Ne.start*Be,at=(Ne.start+Ne.count)*Be;ne!==null&&(Qe=Math.max(Qe,ne.start*Be),at=Math.min(at,(ne.start+ne.count)*Be)),pe!==null?(Qe=Math.max(Qe,0),at=Math.min(at,pe.count)):De!=null&&(Qe=Math.max(Qe,0),at=Math.min(at,De.count));const yt=at-Qe;if(yt<0||yt===1/0)return;he.setup(G,Y,Me,X,pe);let gt,lt=fe;if(pe!==null&&(gt=R.get(pe),lt=Fe,lt.setIndex(gt)),G.isMesh)Y.wireframe===!0?(ge.setLineWidth(Y.wireframeLinewidth*wt()),lt.setMode(B.LINES)):lt.setMode(B.TRIANGLES);else if(G.isLine){let Pe=Y.linewidth;Pe===void 0&&(Pe=1),ge.setLineWidth(Pe*wt()),G.isLineSegments?lt.setMode(B.LINES):G.isLineLoop?lt.setMode(B.LINE_LOOP):lt.setMode(B.LINE_STRIP)}else G.isPoints?lt.setMode(B.POINTS):G.isSprite&&lt.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Pe=G._multiDrawStarts,At=G._multiDrawCounts,Ze=G._multiDrawCount,$t=pe?R.get(pe).bytesPerElement:1,Ri=ve.get(Y).currentProgram.getUniforms();for(let en=0;en<Ze;en++)Ri.setValue(B,"_gl_DrawID",en),lt.render(Pe[en]/$t,At[en])}else if(G.isInstancedMesh)lt.renderInstances(Qe,yt,G.count);else if(X.isInstancedBufferGeometry){const Pe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,At=Math.min(X.instanceCount,Pe);lt.renderInstances(Qe,yt,At)}else lt.render(Qe,yt)};function pt(b,k,X){b.transparent===!0&&b.side===Ht&&b.forceSinglePass===!1?(b.side=Ct,b.needsUpdate=!0,Ls(b,k,X),b.side=wn,b.needsUpdate=!0,Ls(b,k,X),b.side=Ht):Ls(b,k,X)}this.compile=function(b,k,X=null){X===null&&(X=b),f=be.get(X),f.init(k),x.push(f),X.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();const Y=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ne=G.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){const Me=ne[de];pt(Me,X,G),Y.add(Me)}else pt(ne,X,G),Y.add(ne)}),f=x.pop(),Y},this.compileAsync=function(b,k,X=null){const Y=this.compile(b,k,X);return new Promise(G=>{function ne(){if(Y.forEach(function(de){ve.get(de).currentProgram.isReady()&&Y.delete(de)}),Y.size===0){G(b);return}setTimeout(ne,10)}Oe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let tt=null;function Cn(b){tt&&tt(b)}function vn(){ni.stop()}function el(){ni.start()}const ni=new nu;ni.setAnimationLoop(Cn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(b){tt=b,se.setAnimationLoop(b),b===null?ni.stop():ni.start()},se.addEventListener("sessionstart",vn),se.addEventListener("sessionend",el),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(k),k=se.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,k,D),f=be.get(b,x.length),f.init(k),x.push(f),Z.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ke.setFromProjectionMatrix(Z,yn,k.reversedDepth),Q=this.localClippingEnabled,Re=ae.init(this.clippingPlanes,Q),m=j.get(b,S.length),m.init(),S.push(m),se.enabled===!0&&se.isPresenting===!0){const ne=A.xr.getDepthSensingMesh();ne!==null&&kr(ne,k,-1/0,A.sortObjects)}kr(b,k,0,A.sortObjects),m.finish(),A.sortObjects===!0&&m.sort(K,re),ze=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ze&&we.addToRenderList(m,b),this.info.render.frame++,Re===!0&&ae.beginShadows();const X=f.state.shadowsArray;ye.render(X,b,k),Re===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,G=m.transmissive;if(f.setupLights(),k.isArrayCamera){const ne=k.cameras;if(G.length>0)for(let de=0,Me=ne.length;de<Me;de++){const pe=ne[de];nl(Y,G,b,pe)}ze&&we.render(b);for(let de=0,Me=ne.length;de<Me;de++){const pe=ne[de];tl(m,b,pe,pe.viewport)}}else G.length>0&&nl(Y,G,b,k),ze&&we.render(b),tl(m,b,k);D!==null&&E===0&&(Le.updateMultisampleRenderTarget(D),Le.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(A,b,k),he.resetDefaultState(),M=-1,_=null,x.pop(),x.length>0?(f=x[x.length-1],Re===!0&&ae.setGlobalState(A.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function kr(b,k,X,Y){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ke.intersectsSprite(b)){Y&&Se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z);const de=V.update(b),Me=b.material;Me.visible&&m.push(b,de,Me,X,Se.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ke.intersectsObject(b))){const de=V.update(b),Me=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Se.copy(b.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Se.copy(de.boundingSphere.center)),Se.applyMatrix4(b.matrixWorld).applyMatrix4(Z)),Array.isArray(Me)){const pe=de.groups;for(let Be=0,Ne=pe.length;Be<Ne;Be++){const De=pe[Be],Qe=Me[De.materialIndex];Qe&&Qe.visible&&m.push(b,de,Qe,X,Se.z,De)}}else Me.visible&&m.push(b,de,Me,X,Se.z,null)}}const ne=b.children;for(let de=0,Me=ne.length;de<Me;de++)kr(ne[de],k,X,Y)}function tl(b,k,X,Y){const G=b.opaque,ne=b.transmissive,de=b.transparent;f.setupLightsView(X),Re===!0&&ae.setGlobalState(A.clippingPlanes,X),Y&&ge.viewport(C.copy(Y)),G.length>0&&Ps(G,k,X),ne.length>0&&Ps(ne,k,X),de.length>0&&Ps(de,k,X),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function nl(b,k,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new mt(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?bn:xt,minFilter:_n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ne=f.state.transmissionRenderTarget[Y.id],de=Y.viewport||C;ne.setSize(de.z*A.transmissionResolutionScale,de.w*A.transmissionResolutionScale);const Me=A.getRenderTarget(),pe=A.getActiveCubeFace(),Be=A.getActiveMipmapLevel();A.setRenderTarget(ne),A.getClearColor(L),N=A.getClearAlpha(),N<1&&A.setClearColor(16777215,.5),A.clear(),ze&&we.render(X);const Ne=A.toneMapping;A.toneMapping=Un;const De=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),Re===!0&&ae.setGlobalState(A.clippingPlanes,Y),Ps(b,X,Y),Le.updateMultisampleRenderTarget(ne),Le.updateRenderTargetMipmap(ne),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let at=0,yt=k.length;at<yt;at++){const gt=k[at],lt=gt.object,Pe=gt.geometry,At=gt.material,Ze=gt.group;if(At.side===Ht&&lt.layers.test(Y.layers)){const $t=At.side;At.side=Ct,At.needsUpdate=!0,il(lt,X,Y,Pe,At,Ze),At.side=$t,At.needsUpdate=!0,Qe=!0}}Qe===!0&&(Le.updateMultisampleRenderTarget(ne),Le.updateRenderTargetMipmap(ne))}A.setRenderTarget(Me,pe,Be),A.setClearColor(L,N),De!==void 0&&(Y.viewport=De),A.toneMapping=Ne}function Ps(b,k,X){const Y=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ne=b.length;G<ne;G++){const de=b[G],Me=de.object,pe=de.geometry,Be=de.group;let Ne=de.material;Ne.allowOverride===!0&&Y!==null&&(Ne=Y),Me.layers.test(X.layers)&&il(Me,k,X,pe,Ne,Be)}}function il(b,k,X,Y,G,ne){b.onBeforeRender(A,k,X,Y,G,ne),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(A,k,X,Y,b,ne),G.transparent===!0&&G.side===Ht&&G.forceSinglePass===!1?(G.side=Ct,G.needsUpdate=!0,A.renderBufferDirect(X,k,Y,G,b,ne),G.side=wn,G.needsUpdate=!0,A.renderBufferDirect(X,k,Y,G,b,ne),G.side=Ht):A.renderBufferDirect(X,k,Y,G,b,ne),b.onAfterRender(A,k,X,Y,G,ne)}function Ls(b,k,X){k.isScene!==!0&&(k=me);const Y=ve.get(b),G=f.state.lights,ne=f.state.shadowsArray,de=G.state.version,Me=q.getParameters(b,G.state,ne,k,X),pe=q.getProgramCacheKey(Me);let Be=Y.programs;Y.environment=b.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(b.isMeshStandardMaterial?rt:qe).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",J),Be=new Map,Y.programs=Be);let Ne=Be.get(pe);if(Ne!==void 0){if(Y.currentProgram===Ne&&Y.lightsStateVersion===de)return rl(b,Me),Ne}else Me.uniforms=q.getUniforms(b),b.onBeforeCompile(Me,A),Ne=q.acquireProgram(Me,pe),Be.set(pe,Ne),Y.uniforms=Me.uniforms;const De=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=ae.uniform),rl(b,Me),Y.needsLights=ku(b),Y.lightsStateVersion=de,Y.needsLights&&(De.ambientLightColor.value=G.state.ambient,De.lightProbe.value=G.state.probe,De.directionalLights.value=G.state.directional,De.directionalLightShadows.value=G.state.directionalShadow,De.spotLights.value=G.state.spot,De.spotLightShadows.value=G.state.spotShadow,De.rectAreaLights.value=G.state.rectArea,De.ltc_1.value=G.state.rectAreaLTC1,De.ltc_2.value=G.state.rectAreaLTC2,De.pointLights.value=G.state.point,De.pointLightShadows.value=G.state.pointShadow,De.hemisphereLights.value=G.state.hemi,De.directionalShadowMap.value=G.state.directionalShadowMap,De.directionalShadowMatrix.value=G.state.directionalShadowMatrix,De.spotShadowMap.value=G.state.spotShadowMap,De.spotLightMatrix.value=G.state.spotLightMatrix,De.spotLightMap.value=G.state.spotLightMap,De.pointShadowMap.value=G.state.pointShadowMap,De.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ne,Y.uniformsList=null,Ne}function sl(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=xr.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function rl(b,k){const X=ve.get(b);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Ou(b,k,X,Y,G){k.isScene!==!0&&(k=me),Le.resetTextureUnits();const ne=k.fog,de=Y.isMeshStandardMaterial?k.environment:null,Me=D===null?A.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:$n,pe=(Y.isMeshStandardMaterial?rt:qe).get(Y.envMap||de),Be=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ne=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!X.morphAttributes.position,Qe=!!X.morphAttributes.normal,at=!!X.morphAttributes.color;let yt=Un;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(yt=A.toneMapping);const gt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,lt=gt!==void 0?gt.length:0,Pe=ve.get(Y),At=f.state.lights;if(Re===!0&&(Q===!0||b!==_)){const Vt=b===_&&Y.id===M;ae.setState(Y,b,Vt)}let Ze=!1;Y.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==At.state.version||Pe.outputColorSpace!==Me||G.isBatchedMesh&&Pe.batching===!1||!G.isBatchedMesh&&Pe.batching===!0||G.isBatchedMesh&&Pe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Pe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Pe.instancing===!1||!G.isInstancedMesh&&Pe.instancing===!0||G.isSkinnedMesh&&Pe.skinning===!1||!G.isSkinnedMesh&&Pe.skinning===!0||G.isInstancedMesh&&Pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pe.instancingMorph===!1&&G.morphTexture!==null||Pe.envMap!==pe||Y.fog===!0&&Pe.fog!==ne||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ae.numPlanes||Pe.numIntersection!==ae.numIntersection)||Pe.vertexAlphas!==Be||Pe.vertexTangents!==Ne||Pe.morphTargets!==De||Pe.morphNormals!==Qe||Pe.morphColors!==at||Pe.toneMapping!==yt||Pe.morphTargetsCount!==lt)&&(Ze=!0):(Ze=!0,Pe.__version=Y.version);let $t=Pe.currentProgram;Ze===!0&&($t=Ls(Y,k,G));let Ri=!1,en=!1,os=!1;const St=$t.getUniforms(),an=Pe.uniforms;if(ge.useProgram($t.program)&&(Ri=!0,en=!0,os=!0),Y.id!==M&&(M=Y.id,en=!0),Ri||_!==b){ge.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),St.setValue(B,"projectionMatrix",b.projectionMatrix),St.setValue(B,"viewMatrix",b.matrixWorldInverse);const Yt=St.map.cameraPosition;Yt!==void 0&&Yt.setValue(B,ee.setFromMatrixPosition(b.matrixWorld)),Ie.logarithmicDepthBuffer&&St.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&St.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),_!==b&&(_=b,en=!0,os=!0)}if(G.isSkinnedMesh){St.setOptional(B,G,"bindMatrix"),St.setOptional(B,G,"bindMatrixInverse");const Vt=G.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),St.setValue(B,"boneTexture",Vt.boneTexture,Le))}G.isBatchedMesh&&(St.setOptional(B,G,"batchingTexture"),St.setValue(B,"batchingTexture",G._matricesTexture,Le),St.setOptional(B,G,"batchingIdTexture"),St.setValue(B,"batchingIdTexture",G._indirectTexture,Le),St.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&St.setValue(B,"batchingColorTexture",G._colorsTexture,Le));const on=X.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&ie.update(G,X,$t),(en||Pe.receiveShadow!==G.receiveShadow)&&(Pe.receiveShadow=G.receiveShadow,St.setValue(B,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(an.envMap.value=pe,an.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(an.envMapIntensity.value=k.environmentIntensity),en&&(St.setValue(B,"toneMappingExposure",A.toneMappingExposure),Pe.needsLights&&zu(an,os),ne&&Y.fog===!0&&$.refreshFogUniforms(an,ne),$.refreshMaterialUniforms(an,Y,O,W,f.state.transmissionRenderTarget[b.id]),xr.upload(B,sl(Pe),an,Le)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(xr.upload(B,sl(Pe),an,Le),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&St.setValue(B,"center",G.center),St.setValue(B,"modelViewMatrix",G.modelViewMatrix),St.setValue(B,"normalMatrix",G.normalMatrix),St.setValue(B,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Vt=Y.uniformsGroups;for(let Yt=0,Hr=Vt.length;Yt<Hr;Yt++){const ii=Vt[Yt];Ge.update(ii,$t),Ge.bind(ii,$t)}}return $t}function zu(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function ku(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,k,X){const Y=ve.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ve.get(b.texture).__webglTexture=k,ve.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const X=ve.get(b);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};const Hu=B.createFramebuffer();this.setRenderTarget=function(b,k=0,X=0){D=b,y=k,E=X;let Y=!0,G=null,ne=!1,de=!1;if(b){const pe=ve.get(b);if(pe.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(B.FRAMEBUFFER,null),Y=!1;else if(pe.__webglFramebuffer===void 0)Le.setupRenderTarget(b);else if(pe.__hasExternalTextures)Le.rebindTextures(b,ve.get(b.texture).__webglTexture,ve.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const De=b.depthTexture;if(pe.__boundDepthTexture!==De){if(De!==null&&ve.has(De)&&(b.width!==De.image.width||b.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(de=!0);const Ne=ve.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?G=Ne[k][X]:G=Ne[k],ne=!0):b.samples>0&&Le.useMultisampledRTT(b)===!1?G=ve.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[X]:G=Ne,C.copy(b.viewport),U.copy(b.scissor),I=b.scissorTest}else C.copy(ce).multiplyScalar(O).floor(),U.copy(Ce).multiplyScalar(O).floor(),I=Ue;if(X!==0&&(G=Hu),ge.bindFramebuffer(B.FRAMEBUFFER,G)&&Y&&ge.drawBuffers(b,G),ge.viewport(C),ge.scissor(U),ge.setScissorTest(I),ne){const pe=ve.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,pe.__webglTexture,X)}else if(de){const pe=k;for(let Be=0;Be<b.textures.length;Be++){const Ne=ve.get(b.textures[Be]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Be,Ne.__webglTexture,X,pe)}}else if(b!==null&&X!==0){const pe=ve.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pe.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(b,k,X,Y,G,ne,de,Me=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe){ge.bindFramebuffer(B.FRAMEBUFFER,pe);try{const Be=b.textures[Me],Ne=Be.format,De=Be.type;if(!Ie.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-Y&&X>=0&&X<=b.height-G&&(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me),B.readPixels(k,X,Y,G,Te.convert(Ne),Te.convert(De),ne))}finally{const Be=D!==null?ve.get(D).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,k,X,Y,G,ne,de,Me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe)if(k>=0&&k<=b.width-Y&&X>=0&&X<=b.height-G){ge.bindFramebuffer(B.FRAMEBUFFER,pe);const Be=b.textures[Me],Ne=Be.format,De=Be.type;if(!Ie.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Qe),B.bufferData(B.PIXEL_PACK_BUFFER,ne.byteLength,B.STREAM_READ),b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me),B.readPixels(k,X,Y,G,Te.convert(Ne),Te.convert(De),0);const at=D!==null?ve.get(D).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,at);const yt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ih(B,yt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Qe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ne),B.deleteBuffer(Qe),B.deleteSync(yt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,X=0){const Y=Math.pow(2,-X),G=Math.floor(b.image.width*Y),ne=Math.floor(b.image.height*Y),de=k!==null?k.x:0,Me=k!==null?k.y:0;Le.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,de,Me,G,ne),ge.unbindTexture()};const Gu=B.createFramebuffer(),Vu=B.createFramebuffer();this.copyTextureToTexture=function(b,k,X=null,Y=null,G=0,ne=null){ne===null&&(G!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=G,G=0):ne=0);let de,Me,pe,Be,Ne,De,Qe,at,yt;const gt=b.isCompressedTexture?b.mipmaps[ne]:b.image;if(X!==null)de=X.max.x-X.min.x,Me=X.max.y-X.min.y,pe=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,Ne=X.min.y,De=X.isBox3?X.min.z:0;else{const on=Math.pow(2,-G);de=Math.floor(gt.width*on),Me=Math.floor(gt.height*on),b.isDataArrayTexture?pe=gt.depth:b.isData3DTexture?pe=Math.floor(gt.depth*on):pe=1,Be=0,Ne=0,De=0}Y!==null?(Qe=Y.x,at=Y.y,yt=Y.z):(Qe=0,at=0,yt=0);const lt=Te.convert(k.format),Pe=Te.convert(k.type);let At;k.isData3DTexture?(Le.setTexture3D(k,0),At=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Le.setTexture2DArray(k,0),At=B.TEXTURE_2D_ARRAY):(Le.setTexture2D(k,0),At=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const Ze=B.getParameter(B.UNPACK_ROW_LENGTH),$t=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ri=B.getParameter(B.UNPACK_SKIP_PIXELS),en=B.getParameter(B.UNPACK_SKIP_ROWS),os=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ne),B.pixelStorei(B.UNPACK_SKIP_IMAGES,De);const St=b.isDataArrayTexture||b.isData3DTexture,an=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const on=ve.get(b),Vt=ve.get(k),Yt=ve.get(on.__renderTarget),Hr=ve.get(Vt.__renderTarget);ge.bindFramebuffer(B.READ_FRAMEBUFFER,Yt.__webglFramebuffer),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let ii=0;ii<pe;ii++)St&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ve.get(b).__webglTexture,G,De+ii),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ve.get(k).__webglTexture,ne,yt+ii)),B.blitFramebuffer(Be,Ne,de,Me,Qe,at,de,Me,B.DEPTH_BUFFER_BIT,B.NEAREST);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||ve.has(b)){const on=ve.get(b),Vt=ve.get(k);ge.bindFramebuffer(B.READ_FRAMEBUFFER,Gu),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Vu);for(let Yt=0;Yt<pe;Yt++)St?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,on.__webglTexture,G,De+Yt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,on.__webglTexture,G),an?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vt.__webglTexture,ne,yt+Yt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Vt.__webglTexture,ne),G!==0?B.blitFramebuffer(Be,Ne,de,Me,Qe,at,de,Me,B.COLOR_BUFFER_BIT,B.NEAREST):an?B.copyTexSubImage3D(At,ne,Qe,at,yt+Yt,Be,Ne,de,Me):B.copyTexSubImage2D(At,ne,Qe,at,Be,Ne,de,Me);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else an?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(At,ne,Qe,at,yt,de,Me,pe,lt,Pe,gt.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(At,ne,Qe,at,yt,de,Me,pe,lt,gt.data):B.texSubImage3D(At,ne,Qe,at,yt,de,Me,pe,lt,Pe,gt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ne,Qe,at,de,Me,lt,Pe,gt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ne,Qe,at,gt.width,gt.height,lt,gt.data):B.texSubImage2D(B.TEXTURE_2D,ne,Qe,at,de,Me,lt,Pe,gt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ze),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,$t),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ri),B.pixelStorei(B.UNPACK_SKIP_ROWS,en),B.pixelStorei(B.UNPACK_SKIP_IMAGES,os),ne===0&&k.generateMipmaps&&B.generateMipmap(At),ge.unbindTexture()},this.initRenderTarget=function(b){ve.get(b).__webglFramebuffer===void 0&&Le.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Le.setTextureCube(b,0):b.isData3DTexture?Le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Le.setTexture2DArray(b,0):Le.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){y=0,E=0,D=null,ge.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const P=.5,Ee=32,vt=2,ct=4,ac={seed:1337,chunksX:8,chunksY:4,chunksZ:8,seaLevel:22};function qt(n,e,t){return(n*1024+e)*1024+t}const i0=0,Ds=1,Lr=2,Br=3,Cr=4,Ur=5,Ho=6,Go=7,ou=8,lu=9,cu=10,uu=11,hu=12,du=13,fu=14,pu=15,Vo=16,Zt=[{id:i0,name:"air",albedo:[0,0,0],roughness:1,metalness:0,pattern:"stone",scale:1,placeable:!1,hard:!1},{id:Ds,name:"stone",albedo:[.42,.41,.4],roughness:.85,metalness:0,pattern:"stone",scale:3,placeable:!0,hard:!1},{id:Lr,name:"dirt",albedo:[.3,.21,.14],roughness:.95,metalness:0,pattern:"dirt",scale:2,placeable:!0,hard:!1},{id:Br,name:"grass",albedo:[.22,.38,.12],roughness:.9,metalness:0,pattern:"grass",scale:2,placeable:!0,hard:!1},{id:Cr,name:"sand",albedo:[.76,.66,.48],roughness:.9,metalness:0,pattern:"sand",scale:1.5,placeable:!0,hard:!1},{id:Ur,name:"snow",albedo:[.92,.94,.97],roughness:.6,metalness:0,pattern:"snow",scale:2,placeable:!0,hard:!1},{id:Ho,name:"wood",albedo:[.4,.26,.14],roughness:.8,metalness:0,pattern:"wood",scale:1,placeable:!0,hard:!1},{id:Go,name:"leaves",albedo:[.16,.34,.1],roughness:.8,metalness:0,pattern:"leaves",scale:1,placeable:!0,hard:!1},{id:ou,name:"brick",albedo:[.56,.26,.18],roughness:.8,metalness:0,pattern:"clay",scale:1,placeable:!0,hard:!0},{id:lu,name:"marble",albedo:[.85,.84,.82],roughness:.25,metalness:0,pattern:"marble",scale:2.5,placeable:!0,hard:!0},{id:cu,name:"obsidian",albedo:[.06,.05,.08],roughness:.15,metalness:.1,pattern:"obsidian",scale:2,placeable:!0,hard:!0},{id:uu,name:"lantern",albedo:[.9,.75,.5],roughness:.5,metalness:0,pattern:"glow",scale:1,emissive:[1.7,1.15,.5],placeable:!0,hard:!0},{id:hu,name:"moss",albedo:[.2,.3,.12],roughness:.95,metalness:0,pattern:"moss",scale:1.5,placeable:!0,hard:!1},{id:du,name:"planks",albedo:[.55,.38,.2],roughness:.7,metalness:0,pattern:"planks",scale:1,placeable:!0,hard:!0},{id:fu,name:"cobble",albedo:[.45,.44,.42],roughness:.9,metalness:0,pattern:"cobble",scale:1,placeable:!0,hard:!0},{id:pu,name:"torch",albedo:[.3,.2,.1],roughness:.85,metalness:0,pattern:"torch",scale:.5,emissive:[20,10,3.1],placeable:!0,hard:!0,solid:!1},{id:Vo,name:"lamp",albedo:[.25,.25,.28],roughness:.5,metalness:.3,pattern:"obsidian",scale:.5,emissive:[16,15.5,12.8],placeable:!0,hard:!0,solid:!1}],s0=[Ds,Lr,Br,Cr,Ho,Go,ou,du,fu,lu,cu,pu,Vo,uu,Ur,hu],Mn=s0.map(n=>Zt[n]);Zt.length;function jn(n){return Zt[n]?.hard??!1}function Et(n){const e=Zt[n];return!!e&&e.hard&&e.solid!==!1}const Nn=134217727,Ut=3;function mu(n){let e=0;for(;n;)n&=n-1,e++;return e}class Fr{ox;oy;oz;nx;ny;nz;density;material;hard;sub;water;sy;sx;constructor(e,t,i,s=0,r=0,a=0,o,l,c,u,h){this.nx=e,this.ny=t,this.nz=i,this.ox=s,this.oy=r,this.oz=a,this.sy=i,this.sx=t*i,this.density=o??new Float32Array(e*t*i).fill(-ct),this.material=l??new Uint8Array(e*t*i),this.hard=c??new Uint8Array(e*t*i),this.sub=u??new Uint32Array(e*t*i),this.water=h??new Uint8Array(e*t*i)}waterAt(e,t,i){const s=Math.floor(e/P),r=Math.floor(t/P),a=Math.floor(i/P);return this.inBounds(s,r,a)?this.water[this.index(s,r,a)]!==0:!1}subMask(e,t,i){if(!this.inBounds(e,t,i))return 0;const s=this.index(e,t,i);if(this.hard[s]===0)return 0;const r=this.sub[s];return r===0?Nn:r}subOccupied(e,t,i,s,r,a){return(this.subMask(e,t,i)&1<<s+3*(r+3*a))!==0}solidFraction(e,t,i){const s=this.subMask(e,t,i);return s===0?0:s===Nn?1:mu(s)/27}hardOccupiedAt(e,t,i){const s=Math.floor(e/P),r=Math.floor(t/P),a=Math.floor(i/P),o=this.subMask(s,r,a);if(o===0)return!1;if(o===Nn)return!0;const l=Math.min(2,Math.floor((e/P-s)*3)),c=Math.min(2,Math.floor((t/P-r)*3)),u=Math.min(2,Math.floor((i/P-a)*3));return(o&1<<l+3*(c+3*u))!==0}getHard(e,t,i){return this.inBounds(e,t,i)?this.hard[this.index(e,t,i)]:0}setHard(e,t,i,s){this.inBounds(e,t,i)&&(this.hard[this.index(e,t,i)]=s)}hardAt(e,t,i){return this.getHard(Math.floor(e/P),Math.floor(t/P),Math.floor(i/P))}solidAt(e,t,i){return Et(this.hardAt(e,t,i))&&this.hardOccupiedAt(e,t,i)||this.sampleNearest(e,t,i)>0}index(e,t,i){return(e-this.ox)*this.sx+(t-this.oy)*this.sy+(i-this.oz)}inBounds(e,t,i){return e>=this.ox&&t>=this.oy&&i>=this.oz&&e<this.ox+this.nx&&t<this.oy+this.ny&&i<this.oz+this.nz}get(e,t,i){return this.inBounds(e,t,i)?this.density[this.index(e,t,i)]:-ct}getMaterial(e,t,i){return this.inBounds(e,t,i)?this.material[this.index(e,t,i)]:0}set(e,t,i,s,r){if(!this.inBounds(e,t,i))return;const a=this.index(e,t,i);this.density[a]=s<-ct?-ct:s>ct?ct:s,r!==void 0&&(this.material[a]=r)}sample(e,t,i){const s=e/P-this.ox,r=t/P-this.oy,a=i/P-this.oz;let o=Math.floor(s),l=Math.floor(r),c=Math.floor(a),u=s-o,h=r-l,d=a-c;o<0?(o=0,u=0):o>=this.nx-1&&(o=this.nx-2,u=1),l<0?(l=0,h=0):l>=this.ny-1&&(l=this.ny-2,h=1),c<0?(c=0,d=0):c>=this.nz-1&&(c=this.nz-2,d=1);const p=this.density,g=this.sx,v=this.sy,m=o*g+l*v+c,f=p[m]+(p[m+g]-p[m])*u,S=p[m+1]+(p[m+g+1]-p[m+1])*u,x=p[m+v]+(p[m+g+v]-p[m+v])*u,A=p[m+v+1]+(p[m+g+v+1]-p[m+v+1])*u,T=f+(x-f)*h,y=S+(A-S)*h;return T+(y-T)*d}sampleNearest(e,t,i){const s=Math.round(e/P),r=Math.round(t/P),a=Math.round(i/P);return this.get(s,r,a)}gradient(e,t,i,s=[0,0,0],r=P*.5){return s[0]=this.sample(e+r,t,i)-this.sample(e-r,t,i),s[1]=this.sample(e,t+r,i)-this.sample(e,t-r,i),s[2]=this.sample(e,t,i+r)-this.sample(e,t,i-r),s}materialAt(e,t,i){const s=Math.floor(e/P),r=Math.floor(t/P),a=Math.floor(i/P);let o=-1/0,l=0;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const d=this.get(s+c,r+u,a+h);d>o&&(o=d,l=this.getMaterial(s+c,r+u,a+h))}return l}extract(e,t,i,s,r,a){const o=new Fr(s,r,a,e,t,i),l=o.density,c=o.material;for(let u=0;u<s;u++){const h=e+u,d=h>=this.ox&&h<this.ox+this.nx;for(let p=0;p<r;p++){const g=t+p,v=g>=this.oy&&g<this.oy+this.ny,m=u*r*a+p*a;if(!d||!v)continue;const f=Math.max(i,this.oz),S=Math.min(i+a,this.oz+this.nz);if(S<=f)continue;const x=this.index(h,g,f),A=S-f;l.set(this.density.subarray(x,x+A),m+(f-i)),c.set(this.material.subarray(x,x+A),m+(f-i)),o.hard.set(this.hard.subarray(x,x+A),m+(f-i)),o.sub.set(this.sub.subarray(x,x+A),m+(f-i)),o.water.set(this.water.subarray(x,x+A),m+(f-i))}}return o}get sizeX(){return(this.nx-1)*P}get sizeY(){return(this.ny-1)*P}get sizeZ(){return(this.nz-1)*P}}function r0(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Aa(n,e,t){let i=Math.imul(n|0,668265261)^Math.imul(e|0,374761393)^Math.imul(t|0,2654435761);return i=Math.imul(i^i>>>15,2246822507),i=Math.imul(i^i>>>13,3266489909),((i^i>>>16)>>>0)/4294967296}const ui=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],a0=.5*(Math.sqrt(3)-1),ms=(3-Math.sqrt(3))/6,o0=1/3,xn=1/6;class oc{perm=new Uint8Array(512);permMod12=new Uint8Array(512);constructor(e){const t=new Uint8Array(256);for(let s=0;s<256;s++)t[s]=s;const i=r0(e);for(let s=255;s>0;s--){const r=Math.floor(i()*(s+1)),a=t[s];t[s]=t[r],t[r]=a}for(let s=0;s<512;s++)this.perm[s]=t[s&255],this.permMod12[s]=this.perm[s]%12}noise2(e,t){const i=this.perm,s=this.permMod12;let r=0,a=0,o=0;const l=(e+t)*a0,c=Math.floor(e+l),u=Math.floor(t+l),h=(c+u)*ms,d=e-(c-h),p=t-(u-h);let g,v;d>p?(g=1,v=0):(g=0,v=1);const m=d-g+ms,f=p-v+ms,S=d-1+2*ms,x=p-1+2*ms,A=c&255,T=u&255,y=s[A+i[T]],E=s[A+g+i[T+v]],D=s[A+1+i[T+1]];let M=.5-d*d-p*p;if(M>=0){M*=M;const U=ui[y];r=M*M*(U[0]*d+U[1]*p)}let _=.5-m*m-f*f;if(_>=0){_*=_;const U=ui[E];a=_*_*(U[0]*m+U[1]*f)}let C=.5-S*S-x*x;if(C>=0){C*=C;const U=ui[D];o=C*C*(U[0]*S+U[1]*x)}return 70*(r+a+o)}noise3(e,t,i){const s=this.perm,r=this.permMod12;let a=0,o=0,l=0,c=0;const u=(e+t+i)*o0,h=Math.floor(e+u),d=Math.floor(t+u),p=Math.floor(i+u),g=(h+d+p)*xn,v=e-(h-g),m=t-(d-g),f=i-(p-g);let S,x,A,T,y,E;v>=m?m>=f?(S=1,x=0,A=0,T=1,y=1,E=0):v>=f?(S=1,x=0,A=0,T=1,y=0,E=1):(S=0,x=0,A=1,T=1,y=0,E=1):m<f?(S=0,x=0,A=1,T=0,y=1,E=1):v<f?(S=0,x=1,A=0,T=0,y=1,E=1):(S=0,x=1,A=0,T=1,y=1,E=0);const D=v-S+xn,M=m-x+xn,_=f-A+xn,C=v-T+2*xn,U=m-y+2*xn,I=f-E+2*xn,L=v-1+3*xn,N=m-1+3*xn,H=f-1+3*xn,W=h&255,O=d&255,K=p&255,re=r[W+s[O+s[K]]],ce=r[W+S+s[O+x+s[K+A]]],Ce=r[W+T+s[O+y+s[K+E]]],Ue=r[W+1+s[O+1+s[K+1]]];let ke=.6-v*v-m*m-f*f;if(ke>=0){ke*=ke;const ee=ui[re];a=ke*ke*(ee[0]*v+ee[1]*m+ee[2]*f)}let Re=.6-D*D-M*M-_*_;if(Re>=0){Re*=Re;const ee=ui[ce];o=Re*Re*(ee[0]*D+ee[1]*M+ee[2]*_)}let Q=.6-C*C-U*U-I*I;if(Q>=0){Q*=Q;const ee=ui[Ce];l=Q*Q*(ee[0]*C+ee[1]*U+ee[2]*I)}let Z=.6-L*L-N*N-H*H;if(Z>=0){Z*=Z;const ee=ui[Ue];c=Z*Z*(ee[0]*L+ee[1]*N+ee[2]*H)}return 32*(a+o+l+c)}fbm2(e,t,i,s=2,r=.5){let a=0,o=1,l=1,c=0;for(let u=0;u<i;u++)a+=o*this.noise2(e*l,t*l),c+=o,o*=r,l*=s;return a/c}fbm3(e,t,i,s,r=2,a=.5){let o=0,l=1,c=1,u=0;for(let h=0;h<s;h++)o+=l*this.noise3(e*c,t*c,i*c),u+=l,l*=a,c*=r;return o/u}ridged2(e,t,i){let s=0,r=.5,a=1,o=1;for(let l=0;l<i;l++){let c=1-Math.abs(this.noise2(e*a,t*a));c*=c*o,o=Math.min(1,Math.max(0,c*2)),s+=c*r,r*=.5,a*=2}return Math.min(1,s)}}class l0{constructor(e){this.cfg=e,this.n=new oc(e.seed),this.n2=new oc(e.seed^1540483477)}n;n2;height(e,t){const i=this.n,s=i.fbm2(e/260,t/260,4),r=lc(-.15,.55,s),a=i.ridged2(e/110+31.7,t/110-12.3,4),o=i.fbm2(e/34+7.1,t/34+3.3,3),l=i.fbm2(e/9,t/9,2);let c=this.cfg.seaLevel+4+s*12;return c+=Math.pow(a,1.6)*30*r,c+=o*4+l*.8,c}heightInfo(e,t){const i=this.height(e,t),s=.75,r=(this.height(e+s,t)-this.height(e-s,t))/(2*s),a=(this.height(e,t+s)-this.height(e,t-s))/(2*s);return{height:i,slope:Math.hypot(r,a)}}generate(e,t=!0){const{nx:i,ny:s,nz:r}=e,a=this.n,o=this.n2,l=this.cfg.seaLevel,c=14;for(let u=0;u<i;u++){const h=(e.ox+u)*P;for(let d=0;d<r;d++){const p=(e.oz+d)*P,{height:g,slope:v}=this.heightInfo(h,p),m=50+a.noise2(h/40,p/40)*3,f=v>1+a.noise2(h/6,p/6)*.25;for(let S=0;S<s;S++){const x=(e.oy+S)*P;let A=g-x;if(Math.abs(A)<c){const D=a.fbm3(h/22,x/22,p/22,3);if(A+=D*(1.5+Math.min(v,2)*2),x<g-3&&x>3){const M=o.noise3(h/24,x/16,p/24),_=o.noise3(h/24+71.3,x/16+11.9,p/24-40.1),U=(Math.sqrt(M*M+_*_)-.11)*18,I=lc(g-3,g-8,x),L=U+(1-I)*100;L<A&&(A=L)}}A=A>ct?ct:A<-ct?-ct:A,e.oy+S>=this.cfg.chunksY*Ee&&(A=-ct);const T=g-x;let y;x>m&&T<3?y=Ur:f&&T<6?y=Ds:T<1.2?y=x<l+1.5?Cr:Br:T<4.5?y=x<l+1?Cr:Lr:y=Ds;const E=e.index(e.ox+u,e.oy+S,e.oz+d);e.density[E]=A,e.material[E]=y}}}t&&this.plantTrees(e)}plantTrees(e){const t=this.cfg.seaLevel,i=this.n;for(let s=4;s<e.sizeX-4;s+=2)for(let r=4;r<e.sizeZ-4;r+=2){const a=Aa(s,r,this.cfg.seed),o=i.fbm2(s/70+200,r/70+200,2);if(a>.045+o*.06)continue;const{height:l,slope:c}=this.heightInfo(s,r);if(l<t+2.5||c>.7||l>46)continue;let u=-1;for(let p=Math.min(e.sizeY-8,l+3);p>t;p-=P)if(e.sample(s,p,r)>0){u=p;break}if(u<0)continue;const h=3.5+Aa(s+17,r+5,this.cfg.seed)*3,d=2+Aa(s+3,r+29,this.cfg.seed)*1.2;this.stampSphereUnion(e,s,u+h+d*.5,r,d,Go,.6),this.stampCylinderUnion(e,s,u-.5,r,h+d*.6,.42,Ho)}}stampSphereUnion(e,t,i,s,r,a,o){const l=Math.floor((t-r-1)/P),c=Math.ceil((t+r+1)/P),u=Math.floor((i-r-1)/P),h=Math.ceil((i+r+1)/P),d=Math.floor((s-r-1)/P),p=Math.ceil((s+r+1)/P);for(let g=l;g<=c;g++)for(let v=u;v<=h;v++)for(let m=d;m<=p;m++){if(!e.inBounds(g,v,m))continue;const f=g*P,S=v*P,x=m*P,A=Math.hypot(f-t,(S-i)*1.15,x-s),T=o*this.n2.noise3(f*1.3,S*1.3,x*1.3),y=r-A+T,E=e.index(g,v,m);y>e.density[E]&&(e.density[E]=Math.min(y,ct)),y>-P&&(e.material[E]=a)}}stampCylinderUnion(e,t,i,s,r,a,o){const l=Math.floor((t-a-1)/P),c=Math.ceil((t+a+1)/P),u=Math.floor((s-a-1)/P),h=Math.ceil((s+a+1)/P),d=Math.floor(i/P),p=Math.ceil((i+r)/P);for(let g=l;g<=c;g++)for(let v=d;v<=p;v++)for(let m=u;m<=h;m++){if(!e.inBounds(g,v,m))continue;const f=g*P,S=v*P,x=m*P,A=a-Math.hypot(f-t,x-s),T=Math.min(S-i,i+r-S),y=Math.min(A,T),E=e.index(g,v,m);y>e.density[E]&&(e.density[E]=Math.min(y,ct)),y>-P*.6&&(e.material[E]=o)}}}function lc(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const Wo=2,gs=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],cc=(n,e)=>[n[0]*e,n[1]*e,n[2]*e];function sr(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function uc(n){const e=(n-6)/24*Math.PI*2,t=Math.cos(e),i=Math.sin(e),s=Math.hypot(t,i,.35);let r=[t/s,i/s,.35/s];const a=r[1],o=sr(-.08,.18,a),l=1-sr(.02,.35,a),c=gs([1,.98,.94],[1,.5,.22],l),u=3*Math.pow(sr(-.02,.25,a),.8);let h=cc(c,u);const d=[.1,.26,.64],p=[.46,.6,.8],g=[.95,.45,.18],v=[.01,.014,.032],m=[.022,.028,.05];let f=gs(p,g,l*.85),S=d;S=gs(v,S,o),f=gs(m,f,o);const x=cc(gs(S,f,.5),.9);if(a<0){const A=sr(0,-.12,a)*.28;r=[-r[0],-r[1],r[2]],r[1]>.05?h=[.55*A,.65*A,.95*A]:h=[0,0,0]}return{dir:r,sun:h,zenith:S,horizon:f,ambient:x,daylight:o}}class c0{sx;sy;sz;data;normals;constructor(e){this.sx=Math.ceil((e.nx-1)/vt),this.sy=Math.ceil((e.ny-1)/vt),this.sz=Math.ceil((e.nz-1)/vt),this.data=new Uint8Array(this.sx*this.sy*this.sz*4),this.normals=new Uint8Array(this.sx*this.sy*this.sz*4)}index(e,t,i){return(e+this.sx*(t+this.sy*i))*4}get texel(){return vt*P}}const hi=[0,0,0];function Sa(n,e,t,i,s,r,a,o){const l=e.texel,c=t*r,u=i*r,h=s*r,d=e.data,p=255/Wo,g=a.dir,v=g[1]>0,m=n.sizeY,f=e.normals,S=sn(u0*255);for(let x=h;x<h+r&&x<e.sz;x++)for(let A=c;A<c+r&&A<e.sx;A++){const T=(A+.5)*l,y=(x+.5)*l;let E=hc(n,T,(u+r)*l,y,m);for(let D=Math.min(u+r,e.sy)-1;D>=u;D--){const M=e.index(A,D,x);let _=0,C=-1/0,U=0,I=0,L=0,N=0,H=0;const W=A*vt,O=D*vt,K=x*vt;for(let qe=0;qe<vt;qe++)for(let rt=0;rt<vt;rt++)for(let R=0;R<vt;R++){const w=n.getHard(W+qe,O+rt,K+R);if(w!==0&&!Et(w)){const q=Zt[w].emissive;q&&(L+=q[0],N+=q[1],H+=q[2]);continue}if(w!==0){const q=n.solidFraction(W+qe,O+rt,K+R);_+=q,q>0&&(I++,U=w);continue}const V=n.get(W+qe,O+rt,K+R);V>0&&(_++,V>C&&I===0&&(C=V,U=n.getMaterial(W+qe,O+rt,K+R)))}const re=o?.get(M);re&&(L+=re[0],N+=re[1],H+=re[2]);const ce=vt*vt*vt,Ce=_/ce;let Ue=_>0&&_<ce-1e-6;if(_>=ce-1e-6&&(Ue=!cn(n,W-1,O,K)||!cn(n,W+vt,O,K)||!cn(n,W,O-1,K)||!cn(n,W,O+vt,K)||!cn(n,W,O,K-1)||!cn(n,W,O,K+vt)),_>0&&(E=!1),!Ue&&L+N+H>0){d[M]=sn(L/mi*p),d[M+1]=sn(N/mi*p),d[M+2]=sn(H/mi*p),d[M+3]=Math.round(Ce*255),f[M]=128,f[M+1]=128,f[M+2]=128,f[M+3]=255;continue}if(!Ue){_===0&&E?(d[M]=0,d[M+1]=0,d[M+2]=0,d[M+3]=0,f[M]=128,f[M+1]=0,f[M+2]=128,f[M+3]=S):(d[M]=0,d[M+1]=0,d[M+2]=0,d[M+3]=Math.round(Ce*255),f[M]=128,f[M+1]=255,f[M+2]=128,f[M+3]=0);continue}const ke=(A+.5)*l,Re=(D+.5)*l,Q=(x+.5)*l;let Z=0,ee=1,Se=0;if(I===0){n.gradient(ke,Re,Q,hi,l*.5);const qe=Math.hypot(hi[0],hi[1],hi[2]);qe>1e-5&&(Z=-hi[0]/qe,ee=-hi[1]/qe,Se=-hi[2]/qe)}else{Z=(cn(n,W-1,O,K)?0:-1)+(cn(n,W+vt,O,K)?0:1),ee=(cn(n,W,O-1,K)?0:-1)+(cn(n,W,O+vt,K)?0:1),Se=(cn(n,W,O,K-1)?0:-1)+(cn(n,W,O,K+vt)?0:1);const qe=Math.hypot(Z,ee,Se);qe>0?(Z/=qe,ee/=qe,Se/=qe):ee=1}const me=Zt[U]??Zt[1],ze=me.albedo;let wt=0;const B=Z*g[0]+ee*g[1]+Se*g[2];v&&B>0&&h0(n,ke+Z*l*.75,Re+ee*l*.75,Q+Se*l*.75,g,m)&&(wt=B);const ft=hc(n,ke+Z*l*.6,Re+ee*l*.6,Q+Se*l*.6,m),Oe=(.5+.5*ee)*(ft?1:.06),Ie=1/Math.PI;let ge=ze[0]*(a.sun[0]*wt*Ie+a.ambient[0]*Oe),st=ze[1]*(a.sun[1]*wt*Ie+a.ambient[1]*Oe),ve=ze[2]*(a.sun[2]*wt*Ie+a.ambient[2]*Oe);me.emissive&&(ge+=me.emissive[0],st+=me.emissive[1],ve+=me.emissive[2]);const Le=Math.max(Ce,.25);if(L+N+H>0){d[M]=sn((ge*Le+L)/mi*p),d[M+1]=sn((st*Le+N)/mi*p),d[M+2]=sn((ve*Le+H)/mi*p),d[M+3]=Math.round(Le*255),f[M]=128,f[M+1]=128,f[M+2]=128,f[M+3]=255;continue}d[M]=sn(ge*Le*p),d[M+1]=sn(st*Le*p),d[M+2]=sn(ve*Le*p),d[M+3]=Math.round(Le*255),f[M]=sn((Z*.5+.5)*255),f[M+1]=sn((ee*.5+.5)*255),f[M+2]=sn((Se*.5+.5)*255),f[M+3]=0}}}const u0=.7,mi=24;function cn(n,e,t,i){return n.getHard(e,t,i)!==0||n.get(e,t,i)>0}function sn(n){return n<=0?0:n>=255?255:Math.round(n)}function h0(n,e,t,i,s,r){const a=P,o=s[0]*a,l=s[1]*a,c=s[2]*a;for(let u=0;u<400;u++){if(e+=o,t+=l,i+=c,t>r||t<0||e<0||i<0||e>n.sizeX||i>n.sizeZ)return!0;if(n.solidAt(e,t,i))return!1}return!0}function hc(n,e,t,i,s){for(let r=t;r<=s;r+=P*2)if(n.solidAt(e,r,i))return!1;return!0}const di=[P/Ut,.5,1,2,4],Ao=[[1,0,0],[0,0,1],[-1,0,0],[0,0,-1]];function rr(n,e,t,i,s=P*.2,r=1){const a=n.size*.5*r,o=e-n.x,l=t-n.y,c=i-n.z;if(n.shape==="sphere")return a-Math.sqrt(o*o+l*l+c*c);const u=Math.max(Math.abs(o),Math.abs(l),Math.abs(c)),h=a-u+s;if(n.shape==="cube")return h;const d=n.y-a;if(n.shape==="slab"){const v=n.size/(2*Ut)*r,m=n.y-n.size*.5+n.size/(2*Ut),f=n.size*.5*r;return Math.min(f-Math.max(Math.abs(o),Math.abs(c)),v-Math.abs(t-m))+s}const p=Ao[(n.dir??0)&3],g=(e-n.x)*p[0]+(i-n.z)*p[2]+a;return Math.min(h,g-(t-d)+P/Ut*.5)}function ys(n,e,t=1){const i=e.size*.5+P*1.5,s=Math.max(0,Math.floor((e.x-i)/P)),r=Math.min(n.nx-1,Math.ceil((e.x+i)/P)),a=Math.max(0,Math.floor((e.y-i)/P)),o=Math.min(n.ny-1,Math.ceil((e.y+i)/P)),l=Math.max(0,Math.floor((e.z-i)/P)),c=Math.min(n.nz-1,Math.ceil((e.z+i)/P)),u=n.density,h=n.material;if(e.op==="smooth"){const p=u.slice();for(let g=s;g<=r;g++)for(let v=a;v<=o;v++)for(let m=l;m<=c;m++){const f=rr(e,g*P,v*P,m*P);if(f<0)continue;let S=0,x=0;for(let y=-1;y<=1;y++)for(let E=-1;E<=1;E++)for(let D=-1;D<=1;D++){const M=g+y,_=v+E,C=m+D;n.inBounds(M,_,C)&&(S+=p[n.index(M,_,C)],x++)}const A=Math.min(1,f/P),T=n.index(g,v,m);u[T]=u[T]*(1-A)+S/x*A}return{x0:s,y0:a,z0:l,x1:r,y1:o,z1:c}}const d=jn(e.mat);if(e.op==="sub"||e.op==="add"&&d&&Et(e.mat)){for(let p=s;p<r;p++)for(let g=a;g<o;g++)for(let v=l;v<c;v++){let m=0;for(let x=0;x<Ut;x++)for(let A=0;A<Ut;A++)for(let T=0;T<Ut;T++)rr(e,(p+(T+.5)/Ut)*P,(g+(A+.5)/Ut)*P,(v+(x+.5)/Ut)*P,0,t)>0&&(m|=1<<T+3*(A+3*x));if(m===0)continue;const f=n.index(p,g,v),S=n.subMask(p,g,v);if(e.op==="sub"){if(S===0||!Et(n.hard[f])){n.hard[f]!==0&&!Et(n.hard[f])&&(n.hard[f]=0,n.sub[f]=0);continue}const x=S&~m;x===0?(n.hard[f]=0,n.sub[f]=0):n.sub[f]=x===Nn?0:x}else{const x=(Et(n.hard[f])?S:0)|m;n.hard[f]=e.mat,n.sub[f]=x===Nn?0:x}}if(e.op==="add")return{x0:s,y0:a,z0:l,x1:r,y1:o,z1:c}}if(e.op==="add"&&d&&!Et(e.mat)){const p=Math.floor(e.x/P),g=Math.floor(e.y/P),v=Math.floor(e.z/P);return n.setHard(p,g,v,e.mat),n.sub[n.index(p,g,v)]=0,{x0:Math.max(0,p-1),y0:Math.max(0,g-1),z0:Math.max(0,v-1),x1:Math.min(n.nx-1,p+2),y1:Math.min(n.ny-1,g+2),z1:Math.min(n.nz-1,v+2)}}if(e.op==="paint")for(let p=s;p<r;p++)for(let g=a;g<o;g++)for(let v=l;v<c;v++){if(rr(e,(p+.5)*P,(g+.5)*P,(v+.5)*P)<=0)continue;const f=n.index(p,g,v);n.hard[f]!==0&&d&&Et(e.mat)&&Et(n.hard[f])&&(n.hard[f]=e.mat)}if((e.op==="add"||e.op==="sub")&&e.size<P){const p=e.op==="add"?1:-1,g=Math.floor(e.x/P),v=Math.floor(e.y/P),m=Math.floor(e.z/P);for(let f=g;f<=g+1;f++)for(let S=v;S<=v+1;S++)for(let x=m;x<=m+1;x++){if(!n.inBounds(f,S,x))continue;const A=Math.hypot(f*P-e.x,S*P-e.y,x*P-e.z),T=Math.max(0,1-A/P),y=n.index(f,S,x);p>0&&S>=n.ny-1||(u[y]=Math.max(-ct,Math.min(ct,u[y]+p*.45*T)),p>0&&u[y]>-P&&(h[y]=e.mat))}return{x0:Math.max(0,g-1),y0:Math.max(0,v-1),z0:Math.max(0,m-1),x1:Math.min(n.nx-1,g+2),y1:Math.min(n.ny-1,v+2),z1:Math.min(n.nz-1,m+2)}}for(let p=s;p<=r;p++)for(let g=a;g<=o;g++)for(let v=l;v<=c;v++){const m=rr(e,p*P,g*P,v*P,P*.2,t),f=n.index(p,g,v);if(e.op==="add"){if(g>=n.ny-1)continue;m>u[f]&&(u[f]=Math.min(m,ct)),m>-P&&(h[f]=e.mat)}else if(e.op==="sub"){const S=-m;S<u[f]&&(u[f]=Math.max(S,-ct))}else e.op==="paint"&&m>-P&&(h[f]=e.mat)}return{x0:s,y0:a,z0:l,x1:r,y1:o,z1:c}}function _a(n,e,t,i,s){const r=[],a=l=>Math.max(0,Math.floor((l-2)/e)),o=(l,c)=>Math.min(c-1,Math.floor((l+1)/e));for(let l=a(n.x0);l<=o(n.x1,t);l++)for(let c=a(n.y0);c<=o(n.y1,i);c++)for(let u=a(n.z0);u<=o(n.z1,s);u++)r.push([l,c,u]);return r}function d0(n){return!(n.op!=="add"&&n.op!=="sub"||n.size<P||n.op==="add"&&jn(n.mat)&&!Et(n.mat))}function f0(n){const e=JSON.parse(n),t=[];for(const i of e){if(!Array.isArray(i)||i.length!==7&&i.length!==8)continue;const[s,r,a,o,l,c,u,h]=i;if(!["add","sub","paint","smooth"].includes(s)||!["sphere","cube","slab","ramp"].includes(r))continue;const d={op:s,shape:r,size:+a,mat:+o,x:+l,y:+c,z:+u};h!==void 0&&(d.dir=+h&3),t.push(d)}return t}const p0=8208|1<<22;function gu(n,e,t,i=64,s=.12){const[r,a,o]=e,[l,c,u]=t,h=(m,f,S)=>!(m<0||f<0||S<0||m>n.sizeX||f>n.sizeY||S>n.sizeZ);let d=h(r,a,o),p=d?n.sample(r,a,o):-1,g=p>0,v=0;for(let m=s;m<=i;m+=s){const f=r+l*m,S=a+c*m,x=o+u*m;let A;if(h(f,S,x))d=!0,A=n.sample(f,S,x);else{if(d)return null;A=-1}if(g)A<=0&&(g=!1);else if(A>0){let T=v,y=m;for(let I=0;I<8;I++){const L=.5*(T+y);n.sample(r+l*L,a+c*L,o+u*L)>0?y=L:T=L}const E=.5*(T+y),D=r+l*E,M=a+c*E,_=o+u*E,C=n.gradient(D,M,_),U=Math.hypot(C[0],C[1],C[2])||1;return{point:[D,M,_],normal:[-C[0]/U,-C[1]/U,-C[2]/U],distance:E,material:n.materialAt(D,M,_),hard:!1}}p=A,v=m}return null}function m0(n,e,t,i=64){const[s,r,a]=e,[o,l,c]=t;let u=Math.floor(s/P),h=Math.floor(r/P),d=Math.floor(a/P);const p=o>0?1:-1,g=l>0?1:-1,v=c>0?1:-1,m=o!==0?Math.abs(P/o):1/0,f=l!==0?Math.abs(P/l):1/0,S=c!==0?Math.abs(P/c):1/0,x=(_,C,U,I)=>U===0?1/0:(I>0?(C+1)*P-_:_-C*P)/Math.abs(U);let A=x(s,u,o,p),T=x(r,h,l,g),y=x(a,d,c,v),E=n.getHard(u,h,d)!==0,D=0,M=-1;for(let _=0;_<1024;_++){if(D>i)return null;const C=n.getHard(u,h,d);if(C!==0&&!E&&M>=0){const U=Et(C)?n.subMask(u,h,d):p0;if(U===Nn){const H=M===0?[-p,0,0]:M===1?[0,-g,0]:[0,0,-v];return{point:[s+o*D,r+l*D,a+c*D],normal:H,distance:D,material:C,hard:!0}}const I=Math.min(A,T,y),L=P/24;let N=-1;for(let H=D+L*.5;H<I;H+=L){const W=s+o*H,O=r+l*H,K=a+c*H,re=W/P-u,ce=O/P-h,Ce=K/P-d,Ue=Math.min(2,Math.max(0,Math.floor(re*3))),ke=Math.min(2,Math.max(0,Math.floor(ce*3))),Re=Math.min(2,Math.max(0,Math.floor(Ce*3))),Q=Ue+3*(ke+3*Re);if(U&1<<Q){let Z;if(N<0)Z=M===0?[-p,0,0]:M===1?[0,-g,0]:[0,0,-v];else{const ee=N%3,Se=Math.floor(N/3)%3;Z=ee!==Ue?[-p,0,0]:Se!==ke?[0,-g,0]:[0,0,-v]}return{point:[W,O,K],normal:Z,distance:H,material:C,hard:!0}}N=Q}}if(C===0&&(E=!1),A<T&&A<y?(D=A,A+=m,u+=p,M=0):T<y?(D=T,T+=f,h+=g,M=1):(D=y,y+=S,d+=v,M=2),(u<0||h<0||d<0||u>=n.nx-1||h>=n.ny-1||d>=n.nz-1)&&D>1)return null}return null}function g0(n,e,t,i=64){const s=m0(n,e,t,i),r=gu(n,e,t,s?s.distance:i);return r&&(!s||r.distance<s.distance)?r:s}const Mi=.12,vs=.62,v0=26,x0=5.5,So=1.75,Zn=1.62,M0=22,A0=9.2,ar=.6,_o=[.2,1.25],vu=[.15],S0=.3,_0=.27,xu=[Zn-.12],y0=1/120;function E0(n,e,t){return{pos:[n,e,t],vel:[0,0,0],onGround:!1,fly:!1}}function w0(n,e,t){let i=t.dt;for(;i>1e-6;){const s=Math.min(y0,i);i-=s,T0(n,e,t,s)}}const jt=[0,0,0];function T0(n,e,t,i){const s=e.vel;if(e.fly){const g=1-Math.exp(-i*28);s[0]+=(t.wishX-s[0])*g,s[1]+=(t.wishY-s[1])*g,s[2]+=(t.wishZ-s[2])*g}else{const g=e.onGround?14:4,v=1-Math.exp(-i*g);s[0]+=(t.wishX-s[0])*v,s[2]+=(t.wishZ-s[2])*v,s[1]-=M0*i,t.jump&&e.onGround&&(s[1]=A0,e.onGround=!1),s[1]<-40&&(s[1]=-40)}let r=!1;const a=e.pos[0],o=e.pos[1],l=e.pos[2],c=s[0],u=s[2],h=e.onGround;if(e.pos[0]+=s[0]*i,Yi(n,e,0)&&(s[0]=0),e.pos[1]+=s[1]*i,Yi(n,e,1)&&(s[1]<0&&(r=!0),s[1]=0),e.pos[2]+=s[2]*i,Yi(n,e,2)&&(s[2]=0),ya(n,e),r&&(e.onGround=!0),!e.fly&&h){const g=Math.hypot(c,u)*i,v=Math.hypot(e.pos[0]-a,e.pos[2]-l);if(g>1e-5&&v<g*.6){const m=e.pos[0],f=e.pos[1],S=e.pos[2],x=s[0],A=s[1],T=s[2],y=()=>{e.pos[0]=m,e.pos[1]=f,e.pos[2]=S,s[0]=x,s[1]=A,s[2]=T};if(e.pos[0]=a,e.pos[1]=o+ar,e.pos[2]=l,s[0]=c,s[2]=u,e.pos[0]+=c*i,Yi(n,e,0)&&(s[0]=0),e.pos[2]+=u*i,Yi(n,e,2)&&(s[2]=0),ya(n,e),Math.hypot(e.pos[0]-a,e.pos[2]-l)<v+g*.3||e.pos[1]>o+ar+.05)y();else{let D=!1;for(let M=0;M<8&&!D;M++){e.pos[1]-=ar/8,Yi(n,e,1)&&(D=!0);const _=e.pos[1];ya(n,e),(e.onGround||e.pos[1]>_+1e-6)&&(D=!0)}!D||e.pos[1]>o+ar+.001||e.pos[1]<o-.001?y():(s[1]<0&&(s[1]=0),e.onGround=!0)}}}b0(n,e,i);const d=Mi+.05;e.pos[0]=Math.min(n.sizeX-d,Math.max(d,e.pos[0])),e.pos[2]=Math.min(n.sizeZ-d,Math.max(d,e.pos[2]));const p=e.fly?.5-Zn+.6:.5;e.pos[1]<p&&(e.pos[1]=p,s[1]<0&&(s[1]=0),e.onGround=!e.fly),e.pos[1]>n.sizeY-So&&(e.pos[1]=n.sizeY-So,s[1]>0&&(s[1]=0))}function ya(n,e){let t=!1;for(let i=0;i<4;i++){let s=!1;for(const r of e.fly?xu:e.crouch?vu:_o){const a=e.pos[0],o=e.pos[1]+r,l=e.pos[2],c=-n.sample(a,o,l);if(c>=Mi)continue;n.gradient(a,o,l,jt);let u=Math.hypot(jt[0],jt[1],jt[2]),h,d,p;u<1e-4?(h=0,d=1,p=0):(h=-jt[0]/u,d=-jt[1]/u,p=-jt[2]/u);const g=Math.min(Mi-c,.35);if(d>.55&&!e.fly)e.pos[1]+=Math.min(g/d,.4),e.vel[1]<0&&(e.vel[1]=0),t=!0;else{e.pos[0]+=h*g,e.pos[1]+=d*g,e.pos[2]+=p*g;const v=e.vel[0]*h+e.vel[1]*d+e.vel[2]*p;v<0&&(e.vel[0]-=v*h,e.vel[1]-=v*d,e.vel[2]-=v*p)}s=!0}if(!s)break}!t&&!e.fly&&-n.sample(e.pos[0],e.pos[1]+_o[0]-.06,e.pos[2])<Mi&&e.vel[1]<=.01&&(t=!0),e.onGround=t}function b0(n,e,t){const i=e.fly?xu[0]:e.crouch?vu[0]:_o[1],s=e.pos[0],r=e.pos[1]+i,a=e.pos[2];let o=-n.sample(s,r,a),l=0,c=0,u=0;if(o<vs){n.gradient(s,r,a,jt);const m=Math.hypot(jt[0],jt[1],jt[2]);m<1e-4?o=1/0:(l=-jt[0]/m,c=-jt[1]/m,u=-jt[2]/m)}const h=C0(n,s,r,a,vs);if(h&&h[0]<o&&(o=h[0],l=h[1],c=h[2],u=h[3]),o>=vs||o<Mi-.2||!e.fly&&c>.6)return;const d=Math.min(1,(vs-Math.max(o,Mi))/(vs-Mi)),p=e.vel,g=Math.exp(-t*x0*d*(e.fly?.3:1));p[0]*=g,p[2]*=g,e.fly&&(p[1]*=g);const v=v0*d*t;p[0]+=l*v,e.fly&&(p[1]+=c*v),p[2]+=u*v}function C0(n,e,t,i,s){const r=[Math.floor((e-s)/P),Math.floor((t-s)/P),Math.floor((i-s)/P)],a=[Math.floor((e+s)/P),Math.floor((t+s)/P),Math.floor((i+s)/P)];let o=s,l=0,c=1,u=0,h=!1;const d=P/Ut,p=(g,v,m,f)=>{const S=Math.max(g,Math.min(e,g+f)),x=Math.max(v,Math.min(t,v+f)),A=Math.max(m,Math.min(i,m+f)),T=e-S,y=t-x,E=i-A,D=Math.hypot(T,y,E);D>=o||(o=D,h=!0,D>1e-5?(l=T/D,c=y/D,u=E/D):(l=0,c=1,u=0))};for(let g=r[0];g<=a[0];g++)for(let v=r[1];v<=a[1];v++)for(let m=r[2];m<=a[2];m++){if(!Et(n.getHard(g,v,m)))continue;const f=n.subMask(g,v,m);if(f===Nn){p(g*P,v*P,m*P,P);continue}for(let S=0;S<Ut;S++)for(let x=0;x<Ut;x++)for(let A=0;A<Ut;A++)f&1<<A+3*(x+3*S)&&p(g*P+A*d,v*P+x*d,m*P+S*d,d)}return h?[o,l,c,u]:null}const or=.12;function Yi(n,e,t){const i=e.fly?Zn-.3:0,s=e.fly?Zn+.15:e.crouch?S0:So,r=[e.pos[0]-or,e.pos[1]+i,e.pos[2]-or],a=[e.pos[0]+or,e.pos[1]+s,e.pos[2]+or],o=r.map(h=>Math.floor(h/P)),l=a.map(h=>Math.floor((h-1e-4)/P)),c=t===1?e.pos[1]+(i+s)*.5:e.pos[t],u=(h,d)=>{for(let p=0;p<3;p++)if(d[p]<=r[p]||h[p]>=a[p])return!1;return c<(h[t]+d[t])*.5?e.pos[t]-=a[t]-h[t]+1e-4:e.pos[t]+=d[t]-r[t]+1e-4,!0};for(let h=o[0];h<=l[0];h++)for(let d=o[1];d<=l[1];d++)for(let p=o[2];p<=l[2];p++){if(!Et(n.getHard(h,d,p)))continue;const g=n.subMask(h,d,p);if(g===Nn){if(u([h*P,d*P,p*P],[(h+1)*P,(d+1)*P,(p+1)*P]))return!0;continue}const v=P/Ut;for(let m=0;m<Ut;m++)for(let f=0;f<Ut;f++)for(let S=0;S<Ut;S++){if(!(g&1<<S+3*(f+3*m)))continue;const x=[h*P+S*v,d*P+f*v,p*P+m*v];if(u(x,[x[0]+v,x[1]+v,x[2]+v]))return!0}}return!1}function Mu(n,e,t){for(let i=n.sizeY-1;i>0;i-=.25)if(n.sample(e,i,t)>0||Et(n.hardAt(e,i,t))&&n.hardOccupiedAt(e,i,t))return i+.25;return 1}/**
 * postprocessing v6.39.2 build Sun Jun 28 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var D0=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Gt;return t.setAttribute("position",new it(n,3)),t.setAttribute("uv",new it(e,2)),t})(),Ot=class yo{static get fullscreenGeometry(){return D0}constructor(e="Pass",t=new ss,i=new Is){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new _t(yo.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new ss),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=gn){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof mt||t instanceof kn||t instanceof It||t instanceof yo)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},R0=class extends Ot{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){const r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},I0=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,Xo="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Yo=class extends dt{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new le(null),depthBuffer:new le(null),channelWeights:new le(null),opacity:new le(1)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:I0,vertexShader:Xo}),this.depthFunc=Ar}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},Au=class extends Ot{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new Yo,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new mt(1,1,{minFilter:et,magFilter:et,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==xt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===nt&&(this.renderTarget.texture.colorSpace=nt))}},dc=new We,Qo=class extends Ot{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),l=r!==null,c=a>=0;l?(n.getClearColor(dc),n.setClearColor(r,c?a:o)):c&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),l?n.setClearColor(dc,o):c&&n.setClearAlpha(o)}},P0=class extends Ot{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new Qo(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){const r=n.getContext(),a=n.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,h=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,u,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(n,null):(c.render(n,e),c.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,l)):(n.setRenderTarget(e),n.render(o,l),n.setRenderTarget(t),n.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},Ea=1/1e3,L0=1e3,B0=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*Ea}get fixedDelta(){return this._fixedDelta*Ea}set fixedDelta(n){this._fixedDelta=n*L0}get elapsed(){return this._elapsed*Ea}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},U0=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Au,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new B0,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples}set multisampling(n){const e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new Ae),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===xt&&n.outputColorSpace===nt&&(this.inputBuffer.texture.colorSpace=nt,this.outputBuffer.texture.colorSpace=nt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=this.inputBuffer,e=new Oo;this.depthTexture=e,n.stencilBuffer?(e.format=ns,e.type=ts):e.type=un;const t=e.clone();return t.name="EffectComposer.StableDepth",this.depthRenderTarget=new mt(n.width,n.height,{depthBuffer:!0,stencilBuffer:n.stencilBuffer,depthTexture:t}),t}blitDepthBuffer(n){const e=this.renderer,t=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(t);const r=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,o=n.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){const s=this.renderer,r=s===null?new Ae:s.getDrawingBufferSize(new Ae),a={minFilter:et,magFilter:et,stencilBuffer:e,depthBuffer:n,type:t},o=new mt(r.width,r.height,a);return i>0&&(o.samples=i),t===xt&&s!==null&&s.outputColorSpace===nt&&(o.texture.colorSpace=nt),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new Ae),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(s.width,s.height),n.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(n of t)n.setDepthTexture(o)}else{const o=this.depthRenderTarget.depthTexture;n.setDepthTexture(o)}}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(o,l)=>o||l.needsDepthTexture;if(!e.reduce(r,!1)){const o=this.depthRenderTarget.depthTexture;n.getDepthTexture()===o&&n.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,r,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(i.depthTexture=this.depthTexture,s.depthTexture=null,o.render(e,i,s,n,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){t.renderToScreen=o.renderToScreen;const l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),t.render(e,i,s,n,a),c.setFunc(l.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof P0?a=!0:o instanceof R0&&(a=!1)}}setSize(n,e,t){const i=this.renderer,s=i.getSize(new Ae);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);const r=i.getDrawingBufferSize(new Ae);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Ot.fullscreenGeometry.dispose()}},En={NONE:0,DEPTH:1,CONVOLUTION:2},$e={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},F0=class{constructor(){this.shaderParts=new Map([[$e.FRAGMENT_HEAD,null],[$e.FRAGMENT_MAIN_UV,null],[$e.FRAGMENT_MAIN_IMAGE,null],[$e.VERTEX_HEAD,null],[$e.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=En.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=$n}},wa=!1,fc=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Ht:t=this.materialsFlatShadedDoubleSide;break;case Ct:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Ht:t=this.materialsDoubleSide;break;case Ct:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof dt))return n.clone();const e=n.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const i=n.clone();for(const s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=wn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Ct,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Ht,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Ct,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Ht,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,wa){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return wa}static set workaroundEnabled(n){wa=n}},Qn=-1,Dt=class extends zn{constructor(n=null,e=Qn,t=Qn,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new Ae(1,1),this.preferredSize=new Ae(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new Ae,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Qn?t.width=e.width:e.height!==Qn?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Qn?t.height=e.height:e.width!==Qn?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Qn),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Qn}},Ye={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},N0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",O0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",z0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",k0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",H0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",G0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",V0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",W0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",X0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Y0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Q0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",q0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",K0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",j0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Z0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",J0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ev="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",av="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ov="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",fv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mv=new Map([[Ye.ADD,N0],[Ye.ALPHA,O0],[Ye.AVERAGE,z0],[Ye.COLOR,k0],[Ye.COLOR_BURN,H0],[Ye.COLOR_DODGE,G0],[Ye.DARKEN,V0],[Ye.DIFFERENCE,W0],[Ye.DIVIDE,X0],[Ye.DST,null],[Ye.EXCLUSION,Y0],[Ye.HARD_LIGHT,Q0],[Ye.HARD_MIX,q0],[Ye.HUE,K0],[Ye.INVERT,j0],[Ye.INVERT_RGB,Z0],[Ye.LIGHTEN,J0],[Ye.LINEAR_BURN,$0],[Ye.LINEAR_DODGE,ev],[Ye.LINEAR_LIGHT,tv],[Ye.LUMINOSITY,nv],[Ye.MULTIPLY,iv],[Ye.NEGATION,sv],[Ye.NORMAL,rv],[Ye.OVERLAY,av],[Ye.PIN_LIGHT,ov],[Ye.REFLECT,lv],[Ye.SATURATION,cv],[Ye.SCREEN,uv],[Ye.SOFT_LIGHT,hv],[Ye.SRC,dv],[Ye.SUBTRACT,fv],[Ye.VIVID_LIGHT,pv]]),gv=class extends zn{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new le(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return mv.get(this.blendFunction)}},as=class extends zn{constructor(n,e,{attributes:t=En.NONE,blendFunction:i=Ye.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new gv(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=$n,this._outputColorSpace=rn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=gn){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof mt||e instanceof kn||e instanceof It||e instanceof Ot)&&this[n].dispose()}}},qo={MEDIUM:2,LARGE:3},vv=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,xv="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",Mv=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],Av=class extends dt{constructor(n=new ht){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new le(null),texelSize:new le(new ht),scale:new le(1),kernel:new le(0)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:vv,vertexShader:xv}),this.setTexelSize(n.x,n.y),this.kernelSize=qo.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return Mv[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},Sv=class extends Ot{constructor({kernelSize:n=qo.MEDIUM,resolutionScale:e=.5,width:t=Dt.AUTO_SIZE,height:i=Dt.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new mt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new Dt(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new Av,this._blurMaterial.kernelSize=n,this.copyMaterial=new Yo}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence;let h=e;this.fullscreenMaterial=c;for(let d=0,p=u.length;d<p;++d){const g=(d&1)===0?o:l;c.kernel=u[d],c.inputBuffer=h.texture,n.setRenderTarget(g),n.render(r,a),h=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==xt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===nt&&(this.renderTargetA.texture.colorSpace=nt,this.renderTargetB.texture.colorSpace=nt))}static get AUTO_SIZE(){return Dt.AUTO_SIZE}},_v=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,yv=class extends dt{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Ti.replace(/\D+/g,"")},uniforms:{inputBuffer:new le(null),threshold:new le(0),smoothing:new le(1),range:new le(null)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:_v,vertexShader:Xo}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},Su=class extends Ot{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=Dt.AUTO_SIZE,height:r=Dt.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new yv(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new mt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new Dt(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==xt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Ev=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,wv="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",Tv=class extends dt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new le(null),texelSize:new le(new Ae)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Ev,vertexShader:wv})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},bv=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,Cv="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",Dv=class extends dt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new le(null),supportBuffer:new le(null),texelSize:new le(new Ae),radius:new le(.85)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:bv,vertexShader:Cv})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},Rv=class extends Ot{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new mt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new Tv,this.upsamplingMaterial=new Dv,this.resolution=new Ae}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){const{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this;let h=e;this.fullscreenMaterial=o;for(let d=0,p=c.length;d<p;++d){const g=c[d];o.setSize(h.width,h.height),o.inputBuffer=h.texture,n.setRenderTarget(g),n.render(r,a),h=g}this.fullscreenMaterial=l;for(let d=u.length-1;d>=0;--d){const p=u[d];l.setSize(h.width,h.height),l.inputBuffer=h.texture,l.supportBuffer=c[d].texture,n.setRenderTarget(p),n.render(r,a),h=p}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of i)s.texture.type=t;if(t!==xt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===nt)for(const s of i)s.texture.colorSpace=nt}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},Iv=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,Pv=class extends as{constructor({blendFunction:n=Ye.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=qo.LARGE,resolutionScale:l=.5,width:c=Dt.AUTO_SIZE,height:u=Dt.AUTO_SIZE,resolutionX:h=c,resolutionY:d=u}={}){super("BloomEffect",Iv,{blendFunction:n,uniforms:new Map([["map",new le(null)],["intensity",new le(s)]])}),this.renderTarget=new mt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new Sv({kernelSize:o}),this.luminancePass=new Su({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new Rv,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const p=this.resolution=new Dt(this,h,d,l);p.addEventListener("change",g=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===nt&&(this.renderTarget.texture.colorSpace=nt))}},Eo=class extends Ot{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,s){const r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==xt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}};function Lv(n,e,t){const i=new Map([[Si,1],[Io,2],[Ft,4]]);let s;if(i.has(e)||console.error("Invalid noise texture format"),t===xt){s=new Uint8Array(n*i.get(e));for(let r=0,a=s.length;r<a;++r)s[r]=Math.random()*255+.5}else{s=new Float32Array(n*i.get(e));for(let r=0,a=s.length;r<a;++r)s[r]=Math.random()}return s}var Bv=class extends Tr{constructor(n,e,t=Si,i=xt){super(Lv(n*e,t,i),n,e,t,i),this.needsUpdate=!0}},_u=class extends Ot{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Qo,this.overrideMaterialManager=t===null?null:new fc(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new fc(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,u=n.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,a):n.render(r,a),a.layers.mask=l,r.background=c,n.shadowMap.autoUpdate=u}},yu={COLOR:2},Uv={DISABLED:0},xs={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},Kt={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},Ms={DEFAULT:0,ESKIL:1},Fv=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,Nv=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,Ov=class extends dt{constructor(n=new Ae,e=yu.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:Ti.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new le(null),depthBuffer:new le(null),predicationBuffer:new le(null),texelSize:new le(n)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Fv,vertexShader:Nv}),this.edgeDetectionMode=e}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=gn){this.depthBuffer=n,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(n){this.defines.EDGE_DETECTION_MODE=n.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(n){this.edgeDetectionMode=n}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(n){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=n.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(n){this.localContrastAdaptationFactor=n}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(n){this.defines.EDGE_THRESHOLD=n.toFixed("6"),this.defines.DEPTH_THRESHOLD=(n*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(n){this.edgeDetectionThreshold=n}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(n){this.defines.PREDICATION_MODE=n.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(n){this.predicationMode=n}set predicationBuffer(n){this.uniforms.predicationBuffer.value=n}setPredicationBuffer(n){this.uniforms.predicationBuffer.value=n}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(n){this.defines.PREDICATION_THRESHOLD=n.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(n){this.predicationThreshold=n}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(n){this.defines.PREDICATION_SCALE=n.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(n){this.predicationScale=n}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(n){this.defines.PREDICATION_STRENGTH=n.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(n){this.predicationStrength=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},zv=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,kv="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",Hv=class extends dt{constructor(n=new Ae,e=new Ae){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new le(null),searchTexture:new le(null),areaTexture:new le(null),resolution:new le(e),texelSize:new le(n)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:zv,vertexShader:kv})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(n){this.uniforms.searchTexture.value=n}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(n){this.uniforms.areaTexture.value=n}setLookupTextures(n,e){this.searchTexture=n,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(n){const e=Math.min(Math.max(n,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(n){this.orthogonalSearchSteps=n}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(n){const e=Math.min(Math.max(n,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(n){this.diagonalSearchSteps=n}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(n){n?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(n){this.diagonalDetection=n}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(n){const e=Math.min(Math.max(n,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(n){this.cornerRounding=n}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(n){n?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(n){this.cornerDetection=n}setSize(n,e){const t=this.uniforms;t.texelSize.value.set(1/n,1/e),t.resolution.value.set(n,e)}},pc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",mc="data:image/png;base64,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",Gv="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",Vv="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",Wv=class extends as{constructor({blendFunction:n=Ye.SRC,preset:e=xs.MEDIUM,edgeDetectionMode:t=yu.COLOR,predicationMode:i=Uv.DISABLED}={}){super("SMAAEffect",Gv,{vertexShader:Vv,blendFunction:n,attributes:En.CONVOLUTION|En.DEPTH,uniforms:new Map([["weightMap",new le(null)]])});let s,r;arguments.length>1&&(s=arguments[0],r=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(t=arguments[3])),this.renderTargetEdges=new mt(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new Qo(!0,!1,!1),this.clearPass.overrideClearColor=new We(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new Eo(new Ov),this.edgeDetectionMaterial.edgeDetectionMode=t,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new Eo(new Hv);const a=new dd;a.onLoad=()=>{const o=new It(s);o.name="SMAA.Search",o.magFilter=Tt,o.minFilter=Tt,o.generateMipmaps=!1,o.needsUpdate=!0,o.flipY=!0,this.weightsMaterial.searchTexture=o;const l=new It(r);l.name="SMAA.Area",l.magFilter=et,l.minFilter=et,l.generateMipmaps=!1,l.needsUpdate=!0,l.flipY=!1,this.weightsMaterial.areaTexture=l,this.dispatchEvent({type:"load"})},a.itemStart("search"),a.itemStart("area"),s!==void 0&&r!==void 0?(a.itemEnd("search"),a.itemEnd("area")):typeof Image<"u"&&(s=new Image,r=new Image,s.addEventListener("load",()=>a.itemEnd("search")),r.addEventListener("load",()=>a.itemEnd("area")),s.src=pc,r.src=mc),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(n){this.edgeDetectionMaterial.edgeDetectionThreshold=n}setOrthogonalSearchSteps(n){this.weightsMaterial.orthogonalSearchSteps=n}applyPreset(n){const e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(n){case xs.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case xs.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case xs.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case xs.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(n,e=gn){this.edgeDetectionMaterial.depthBuffer=n,this.edgeDetectionMaterial.depthPacking=e}update(n,e,t){this.clearPass.render(n,this.renderTargetEdges),this.edgeDetectionPass.render(n,e,this.renderTargetEdges),this.weightsPass.render(n,this.renderTargetEdges,this.renderTargetWeights)}setSize(n,e){this.edgeDetectionMaterial.setSize(n,e),this.weightsMaterial.setSize(n,e),this.renderTargetEdges.setSize(n,e),this.renderTargetWeights.setSize(n,e)}dispose(){const{searchTexture:n,areaTexture:e}=this.weightsMaterial;n!==null&&e!==null&&(n.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return pc}static get areaImageDataURL(){return mc}};function lr(n,e,t){return n*(e-t)-e}function cr(n,e,t){return Math.min(Math.max((n+e)/(e-t),0),1)}var Xv=`#include <common>
#include <packing>
uniform vec2 cameraNearFar;
#define cameraNear cameraNearFar.x
#define cameraFar cameraNearFar.y
#ifdef NORMAL_DEPTH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
float readDepth(const in vec2 uv){float depth=texture2D(normalDepthBuffer,uv).a;
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#endif
return depth;}
#else
uniform lowp sampler2D normalBuffer;
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#endif
return depth;}
#endif
uniform lowp sampler2D noiseTexture;uniform mat4 inverseProjectionMatrix;uniform mat4 projectionMatrix;uniform vec2 texelSize;uniform float intensity;uniform float minRadiusScale;uniform float fade;uniform float bias;uniform vec2 distanceCutoff;uniform vec2 proximityCutoff;varying vec2 vUv;varying vec2 vUv2;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 getViewPosition(const in vec2 screenPosition,const in float depth,const in float viewZ){vec4 clipPosition=vec4(vec3(screenPosition,depth)*2.0-1.0,1.0);float clipW=projectionMatrix[2][3]*viewZ+projectionMatrix[3][3];clipPosition*=clipW;return(inverseProjectionMatrix*clipPosition).xyz;}float getAmbientOcclusion(const in vec3 p,const in vec3 n,const in float depth,const in vec2 uv){float radiusScale=1.0-smoothstep(0.0,distanceCutoff.y,depth);radiusScale=radiusScale*(1.0-minRadiusScale)+minRadiusScale;float radius=RADIUS*radiusScale;float noise=texture2D(noiseTexture,vUv2).r;float baseAngle=noise*PI2;float rings=SPIRAL_TURNS*PI2;float occlusion=0.0;int taps=0;for(int i=0;i<SAMPLES_INT;++i){float alpha=(float(i)+0.5)*INV_SAMPLES_FLOAT;float angle=alpha*rings+baseAngle;vec2 rotation=vec2(cos(angle),sin(angle));vec2 coords=alpha*radius*rotation*texelSize+uv;if(coords.s<0.0||coords.s>1.0||coords.t<0.0||coords.t>1.0){continue;}float sampleDepth=readDepth(coords);float viewZ=getViewZ(sampleDepth);
#ifdef PERSPECTIVE_CAMERA
float linearSampleDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearSampleDepth=sampleDepth;
#endif
float proximity=abs(depth-linearSampleDepth);if(proximity<proximityCutoff.y){float falloff=1.0-smoothstep(proximityCutoff.x,proximityCutoff.y,proximity);vec3 Q=getViewPosition(coords,sampleDepth,viewZ);vec3 v=Q-p;float vv=dot(v,v);float vn=dot(v,n)-bias;float f=max(RADIUS_SQ-vv,0.0)/RADIUS_SQ;occlusion+=(f*f*f*max(vn/(fade+vv),0.0))*falloff;}++taps;}return occlusion/(4.0*max(float(taps),1.0));}void main(){
#ifdef NORMAL_DEPTH
vec4 normalDepth=texture2D(normalDepthBuffer,vUv);
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,normalDepth.a*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);normalDepth.a=a+b/d;
#endif
#else
vec4 normalDepth=vec4(texture2D(normalBuffer,vUv).xyz,readDepth(vUv));
#endif
float ao=0.0;float depth=normalDepth.a;float viewZ=getViewZ(depth);
#ifdef PERSPECTIVE_CAMERA
float linearDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearDepth=depth;
#endif
if(linearDepth<distanceCutoff.y){vec3 viewPosition=getViewPosition(vUv,depth,viewZ);vec3 viewNormal=unpackRGBToNormal(normalDepth.rgb);ao+=getAmbientOcclusion(viewPosition,viewNormal,linearDepth,vUv);float d=smoothstep(distanceCutoff.x,distanceCutoff.y,linearDepth);ao=mix(ao,0.0,d);
#ifdef LEGACY_INTENSITY
ao=clamp(1.0-pow(1.0-ao,abs(intensity)),0.0,1.0);
#endif
}gl_FragColor.r=ao;}`,Yv="uniform vec2 noiseScale;varying vec2 vUv;varying vec2 vUv2;void main(){vUv=position.xy*0.5+0.5;vUv2=vUv*noiseScale;gl_Position=vec4(position.xy,1.0,1.0);}",Qv=class extends dt{constructor(n){super({name:"SSAOMaterial",defines:{SAMPLES_INT:"0",INV_SAMPLES_FLOAT:"0.0",SPIRAL_TURNS:"0.0",RADIUS:"1.0",RADIUS_SQ:"1.0",DISTANCE_SCALING:"1",DEPTH_PACKING:"0"},uniforms:{depthBuffer:new le(null),normalBuffer:new le(null),normalDepthBuffer:new le(null),noiseTexture:new le(null),inverseProjectionMatrix:new le(new je),projectionMatrix:new le(new je),texelSize:new le(new Ae),cameraNearFar:new le(new Ae),distanceCutoff:new le(new Ae),proximityCutoff:new le(new Ae),noiseScale:new le(new Ae),minRadiusScale:new le(.33),intensity:new le(1),fade:new le(.01),bias:new le(0)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Xv,vertexShader:Yv}),this.copyCameraSettings(n),this.resolution=new Ae,this.r=1}get near(){return this.uniforms.cameraNearFar.value.x}get far(){return this.uniforms.cameraNearFar.value.y}set normalDepthBuffer(n){this.uniforms.normalDepthBuffer.value=n,n!==null?this.defines.NORMAL_DEPTH="1":delete this.defines.NORMAL_DEPTH,this.needsUpdate=!0}setNormalDepthBuffer(n){this.normalDepthBuffer=n}set normalBuffer(n){this.uniforms.normalBuffer.value=n}setNormalBuffer(n){this.uniforms.normalBuffer.value=n}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=gn){this.depthBuffer=n,this.depthPacking=e}set noiseTexture(n){this.uniforms.noiseTexture.value=n}setNoiseTexture(n){this.uniforms.noiseTexture.value=n}get samples(){return Number(this.defines.SAMPLES_INT)}set samples(n){this.defines.SAMPLES_INT=n.toFixed(0),this.defines.INV_SAMPLES_FLOAT=(1/n).toFixed(9),this.needsUpdate=!0}getSamples(){return this.samples}setSamples(n){this.samples=n}get rings(){return Number(this.defines.SPIRAL_TURNS)}set rings(n){this.defines.SPIRAL_TURNS=n.toFixed(1),this.needsUpdate=!0}getRings(){return this.rings}setRings(n){this.rings=n}get intensity(){return this.uniforms.intensity.value}set intensity(n){this.uniforms.intensity.value=n,this.defines.LEGACY_INTENSITY===void 0&&(this.defines.LEGACY_INTENSITY="1",this.needsUpdate=!0)}getIntensity(){return this.uniforms.intensity.value}setIntensity(n){this.uniforms.intensity.value=n}get fade(){return this.uniforms.fade.value}set fade(n){this.uniforms.fade.value=n}getFade(){return this.uniforms.fade.value}setFade(n){this.uniforms.fade.value=n}get bias(){return this.uniforms.bias.value}set bias(n){this.uniforms.bias.value=n}getBias(){return this.uniforms.bias.value}setBias(n){this.uniforms.bias.value=n}get minRadiusScale(){return this.uniforms.minRadiusScale.value}set minRadiusScale(n){this.uniforms.minRadiusScale.value=n}getMinRadiusScale(){return this.uniforms.minRadiusScale.value}setMinRadiusScale(n){this.uniforms.minRadiusScale.value=n}updateRadius(){const n=this.r*this.resolution.height;this.defines.RADIUS=n.toFixed(11),this.defines.RADIUS_SQ=(n*n).toFixed(11),this.needsUpdate=!0}get radius(){return this.r}set radius(n){this.r=Math.min(Math.max(n,1e-6),1),this.updateRadius()}getRadius(){return this.radius}setRadius(n){this.radius=n}get distanceScaling(){return!0}set distanceScaling(n){}isDistanceScalingEnabled(){return this.distanceScaling}setDistanceScalingEnabled(n){this.distanceScaling=n}get distanceThreshold(){return this.uniforms.distanceCutoff.value.x}set distanceThreshold(n){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.distanceFalloff,0),1))}get worldDistanceThreshold(){return-lr(this.distanceThreshold,this.near,this.far)}set worldDistanceThreshold(n){this.distanceThreshold=cr(-n,this.near,this.far)}get distanceFalloff(){return this.uniforms.distanceCutoff.value.y-this.distanceThreshold}set distanceFalloff(n){this.uniforms.distanceCutoff.value.y=Math.min(Math.max(this.distanceThreshold+n,0),1)}get worldDistanceFalloff(){return-lr(this.distanceFalloff,this.near,this.far)}set worldDistanceFalloff(n){this.distanceFalloff=cr(-n,this.near,this.far)}setDistanceCutoff(n,e){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}get proximityThreshold(){return this.uniforms.proximityCutoff.value.x}set proximityThreshold(n){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.proximityFalloff,0),1))}get worldProximityThreshold(){return-lr(this.proximityThreshold,this.near,this.far)}set worldProximityThreshold(n){this.proximityThreshold=cr(-n,this.near,this.far)}get proximityFalloff(){return this.uniforms.proximityCutoff.value.y-this.proximityThreshold}set proximityFalloff(n){this.uniforms.proximityCutoff.value.y=Math.min(Math.max(this.proximityThreshold+n,0),1)}get worldProximityFalloff(){return-lr(this.proximityFalloff,this.near,this.far)}set worldProximityFalloff(n){this.proximityFalloff=cr(-n,this.near,this.far)}setProximityCutoff(n,e){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNearFar.value.set(n.near,n.far),this.uniforms.projectionMatrix.value.copy(n.projectionMatrix),this.uniforms.inverseProjectionMatrix.value.copy(n.projectionMatrix).invert(),n instanceof Xt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms,i=t.noiseTexture.value;i!==null&&t.noiseScale.value.set(n/i.image.width,e/i.image.height),t.texelSize.value.set(1/n,1/e),this.resolution.set(n,e),this.updateRadius()}},qv=`#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
#ifdef DOWNSAMPLE_NORMALS
uniform lowp sampler2D normalBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}int findBestDepth(const in float samples[4]){float c=(samples[0]+samples[1]+samples[2]+samples[3])*0.25;float distances[4];distances[0]=abs(c-samples[0]);distances[1]=abs(c-samples[1]);distances[2]=abs(c-samples[2]);distances[3]=abs(c-samples[3]);float maxDistance=max(max(distances[0],distances[1]),max(distances[2],distances[3]));int remaining[3];int rejected[3];int i,j,k;for(i=0,j=0,k=0;i<4;++i){if(distances[i]<maxDistance){remaining[j++]=i;}else{rejected[k++]=i;}}for(;j<3;++j){remaining[j]=rejected[--k];}vec3 s=vec3(samples[remaining[0]],samples[remaining[1]],samples[remaining[2]]);c=(s.x+s.y+s.z)/3.0;distances[0]=abs(c-s.x);distances[1]=abs(c-s.y);distances[2]=abs(c-s.z);float minDistance=min(distances[0],min(distances[1],distances[2]));for(i=0;i<3;++i){if(distances[i]==minDistance){break;}}return remaining[i];}void main(){float d[4];d[0]=readDepth(vUv0);d[1]=readDepth(vUv1);d[2]=readDepth(vUv2);d[3]=readDepth(vUv3);int index=findBestDepth(d);
#ifdef DOWNSAMPLE_NORMALS
vec3 n[4];n[0]=texture2D(normalBuffer,vUv0).rgb;n[1]=texture2D(normalBuffer,vUv1).rgb;n[2]=texture2D(normalBuffer,vUv2).rgb;n[3]=texture2D(normalBuffer,vUv3).rgb;
#else
vec3 n[4];n[0]=vec3(0.0);n[1]=vec3(0.0);n[2]=vec3(0.0);n[3]=vec3(0.0);
#endif
gl_FragColor=vec4(n[index],d[index]);}`,Kv="uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}",jv=class extends dt{constructor(){super({name:"DepthDownsamplingMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new le(null),normalBuffer:new le(null),texelSize:new le(new Ae)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:qv,vertexShader:Kv})}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=gn){this.depthBuffer=n,this.depthPacking=e}set normalBuffer(n){this.uniforms.normalBuffer.value=n,n!==null?this.defines.DOWNSAMPLE_NORMALS="1":delete this.defines.DOWNSAMPLE_NORMALS,this.needsUpdate=!0}setNormalBuffer(n){this.normalBuffer=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},Zv=class extends Ot{constructor({normalBuffer:n=null,resolutionScale:e=.5,width:t=Dt.AUTO_SIZE,height:i=Dt.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("DepthDownsamplingPass");const a=new jv;a.normalBuffer=n,this.fullscreenMaterial=a,this.needsDepthTexture=!0,this.needsSwap=!1,this.renderTarget=new mt(1,1,{minFilter:Tt,magFilter:Tt,depthBuffer:!1,type:un}),this.renderTarget.texture.name="DepthDownsamplingPass.Target",this.renderTarget.texture.generateMipmaps=!1;const o=this.resolution=new Dt(this,s,r,e);o.addEventListener("change",l=>this.setSize(o.baseWidth,o.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}setDepthTexture(n,e=gn){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e}render(n,e,t,i,s){n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.fullscreenMaterial.setSize(n,e)}initialize(n,e,t){const i=n.getContext();if(!(i.getExtension("EXT_color_buffer_float")||i.getExtension("EXT_color_buffer_half_float")))throw new Error("Rendering to float texture is not supported.")}},Jv=`uniform lowp sampler2D aoBuffer;uniform float luminanceInfluence;uniform float intensity;
#if defined(DEPTH_AWARE_UPSAMPLING) && defined(NORMAL_DEPTH)
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
#endif
#ifdef COLORIZE
uniform vec3 color;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){float aoLinear=texture2D(aoBuffer,uv).r;
#if defined(DEPTH_AWARE_UPSAMPLING) && defined(NORMAL_DEPTH) && __VERSION__ == 300
vec4 normalDepth[4];normalDepth[0]=textureOffset(normalDepthBuffer,uv,ivec2(0,0));normalDepth[1]=textureOffset(normalDepthBuffer,uv,ivec2(0,1));normalDepth[2]=textureOffset(normalDepthBuffer,uv,ivec2(1,0));normalDepth[3]=textureOffset(normalDepthBuffer,uv,ivec2(1,1));float dot01=dot(normalDepth[0].rgb,normalDepth[1].rgb);float dot02=dot(normalDepth[0].rgb,normalDepth[2].rgb);float dot03=dot(normalDepth[0].rgb,normalDepth[3].rgb);float minDot=min(dot01,min(dot02,dot03));float s=step(THRESHOLD,minDot);float smallestDistance=1.0;int index;for(int i=0;i<4;++i){float distance=abs(depth-normalDepth[i].a);if(distance<smallestDistance){smallestDistance=distance;index=i;}}ivec2 offsets[4];offsets[0]=ivec2(0,0);offsets[1]=ivec2(0,1);offsets[2]=ivec2(1,0);offsets[3]=ivec2(1,1);ivec2 coord=ivec2(uv*vec2(textureSize(aoBuffer,0)))+offsets[index];float aoNearest=texelFetch(aoBuffer,coord,0).r;float ao=mix(aoNearest,aoLinear,s);
#else
float ao=aoLinear;
#endif
float l=luminance(inputColor.rgb);ao=mix(ao,0.0,l*luminanceInfluence);ao=clamp(ao*intensity,0.0,1.0);
#ifdef COLORIZE
outputColor=vec4(1.0-ao*(1.0-color),inputColor.a);
#else
outputColor=vec4(vec3(1.0-ao),inputColor.a);
#endif
}`,gc=64,$v=class extends as{constructor(n,e,{blendFunction:t=Ye.MULTIPLY,samples:i=9,rings:s=7,normalDepthBuffer:r=null,depthAwareUpsampling:a=!0,worldDistanceThreshold:o,worldDistanceFalloff:l,worldProximityThreshold:c,worldProximityFalloff:u,distanceThreshold:h=.97,distanceFalloff:d=.03,rangeThreshold:p=5e-4,rangeFalloff:g=.001,minRadiusScale:v=.1,luminanceInfluence:m=.7,radius:f=.1825,intensity:S=1,bias:x=.025,fade:A=.01,color:T=null,resolutionScale:y=1,width:E=Dt.AUTO_SIZE,height:D=Dt.AUTO_SIZE,resolutionX:M=E,resolutionY:_=D}={}){super("SSAOEffect",Jv,{blendFunction:t,attributes:En.DEPTH,defines:new Map([["THRESHOLD","0.997"]]),uniforms:new Map([["aoBuffer",new le(null)],["normalDepthBuffer",new le(r)],["luminanceInfluence",new le(m)],["color",new le(null)],["intensity",new le(S)],["scale",new le(0)]])}),this.renderTarget=new mt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="AO.Target",this.uniforms.get("aoBuffer").value=this.renderTarget.texture;const C=this.resolution=new Dt(this,M,_,y);C.addEventListener("change",L=>this.setSize(C.baseWidth,C.baseHeight)),this.camera=n,this.depthDownsamplingPass=new Zv({normalBuffer:e,resolutionScale:y}),this.depthDownsamplingPass.enabled=r===null,this.ssaoPass=new Eo(new Qv(n));const U=new Bv(gc,gc,Ft);U.wrapS=U.wrapT=ws;const I=this.ssaoMaterial;I.normalBuffer=e,I.noiseTexture=U,I.minRadiusScale=v,I.samples=i,I.radius=f,I.rings=s,I.fade=A,I.bias=x,I.distanceThreshold=h,I.distanceFalloff=d,I.proximityThreshold=p,I.proximityFalloff=g,o!==void 0&&(I.worldDistanceThreshold=o),l!==void 0&&(I.worldDistanceFalloff=l),c!==void 0&&(I.worldProximityThreshold=c),u!==void 0&&(I.worldProximityFalloff=u),r!==null&&(this.ssaoMaterial.normalDepthBuffer=r,this.defines.set("NORMAL_DEPTH","1")),this.depthAwareUpsampling=a,this.color=T}set mainCamera(n){this.camera=n,this.ssaoMaterial.copyCameraSettings(n)}get normalBuffer(){return this.ssaoMaterial.normalBuffer}set normalBuffer(n){this.ssaoMaterial.normalBuffer=n,this.depthDownsamplingPass.fullscreenMaterial.normalBuffer=n}getResolution(){return this.resolution}get ssaoMaterial(){return this.ssaoPass.fullscreenMaterial}getSSAOMaterial(){return this.ssaoMaterial}get samples(){return this.ssaoMaterial.samples}set samples(n){this.ssaoMaterial.samples=n}get rings(){return this.ssaoMaterial.rings}set rings(n){this.ssaoMaterial.rings=n}get radius(){return this.ssaoMaterial.radius}set radius(n){this.ssaoMaterial.radius=n}get depthAwareUpsampling(){return this.defines.has("DEPTH_AWARE_UPSAMPLING")}set depthAwareUpsampling(n){this.depthAwareUpsampling!==n&&(n?this.defines.set("DEPTH_AWARE_UPSAMPLING","1"):this.defines.delete("DEPTH_AWARE_UPSAMPLING"),this.setChanged())}isDepthAwareUpsamplingEnabled(){return this.depthAwareUpsampling}setDepthAwareUpsamplingEnabled(n){this.depthAwareUpsampling=n}get distanceScaling(){return!0}set distanceScaling(n){}get color(){return this.uniforms.get("color").value}set color(n){const e=this.uniforms,t=this.defines;n!==null?t.has("COLORIZE")?e.get("color").value.set(n):(t.set("COLORIZE","1"),e.get("color").value=new We(n),this.setChanged()):t.has("COLORIZE")&&(t.delete("COLORIZE"),e.get("color").value=null,this.setChanged())}get luminanceInfluence(){return this.uniforms.get("luminanceInfluence").value}set luminanceInfluence(n){this.uniforms.get("luminanceInfluence").value=n}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getColor(){return this.color}setColor(n){this.color=n}setDistanceCutoff(n,e){this.ssaoMaterial.distanceThreshold=n,this.ssaoMaterial.distanceFalloff=e}setProximityCutoff(n,e){this.ssaoMaterial.proximityThreshold=n,this.ssaoMaterial.proximityFalloff=e}setDepthTexture(n,e=gn){this.depthDownsamplingPass.setDepthTexture(n,e),this.ssaoMaterial.depthBuffer=n,this.ssaoMaterial.depthPacking=e}update(n,e,t){const i=this.renderTarget;this.depthDownsamplingPass.enabled&&this.depthDownsamplingPass.render(n),this.ssaoPass.render(n,null,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.ssaoMaterial.copyCameraSettings(this.camera),this.ssaoMaterial.setSize(i,s),this.renderTarget.setSize(i,s),this.depthDownsamplingPass.resolution.scale=t.scale,this.depthDownsamplingPass.setSize(n,e)}initialize(n,e,t){try{let i=this.uniforms.get("normalDepthBuffer").value;i===null&&(this.depthDownsamplingPass.initialize(n,e,t),i=this.depthDownsamplingPass.texture,this.uniforms.get("normalDepthBuffer").value=i,this.ssaoMaterial.normalDepthBuffer=i,this.defines.set("NORMAL_DEPTH","1"))}catch{this.depthDownsamplingPass.enabled=!1}}},ex=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,tx=class extends dt{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new le(null),luminanceBuffer1:new le(null),minLuminance:new le(.01),deltaTime:new le(0),tau:new le(1)},extensions:{shaderTextureLOD:!0},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ex,vertexShader:Xo})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},nx=class extends Ot{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new tx,this.needsSwap=!1,this.renderTargetPrevious=new mt(1,1,{minFilter:Tt,magFilter:Tt,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new Au(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,s){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},ix=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,sx=class extends as{constructor({blendFunction:n=Ye.SRC,adaptive:e=!1,mode:t=e?Kt.REINHARD2_ADAPTIVE:Kt.AGX,resolution:i=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:l=1,adaptationRate:c=1}={}){super("ToneMappingEffect",ix,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new le(null)],["maxLuminance",new le(s)],["whitePoint",new le(r)],["middleGrey",new le(a)],["averageLuminance",new le(l)]])}),this.renderTargetLuminance=new mt(1,1,{minFilter:_n,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new Su({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new nx(this.luminancePass.texture,{minLuminance:o,adaptationRate:c}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;const t=Ti.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case Kt.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case Kt.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case Kt.CINEON:case Kt.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case Kt.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case Kt.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case Kt.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===Kt.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){const e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===Kt.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?Kt.REINHARD2_ADAPTIVE:Kt.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}},rx=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,ax=class extends as{constructor({blendFunction:n,eskil:e=!1,technique:t=e?Ms.ESKIL:Ms.DEFAULT,offset:i=.5,darkness:s=.5}={}){super("VignetteEffect",rx,{blendFunction:n,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new le(i)],["darkness",new le(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(n){this.technique!==n&&(this.defines.set("VIGNETTE_TECHNIQUE",n.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Ms.ESKIL}set eskil(n){this.technique=n?Ms.ESKIL:Ms.DEFAULT}getTechnique(){return this.technique}setTechnique(n){this.technique=n}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}get darkness(){return this.uniforms.get("darkness").value}set darkness(n){this.uniforms.get("darkness").value=n}getDarkness(){return this.darkness}setDarkness(n){this.darkness=n}},ox=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,lx="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",cx=class extends dt{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Ti.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new le(null),depthBuffer:new le(null),resolution:new le(new Ae),texelSize:new le(new Ae),cameraNear:new le(.3),cameraFar:new le(1e3),aspect:new le(1),time:new le(0)},blending:Rt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=gn){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=ox.replace($e.FRAGMENT_HEAD,n.get($e.FRAGMENT_HEAD)||"").replace($e.FRAGMENT_MAIN_UV,n.get($e.FRAGMENT_MAIN_UV)||"").replace($e.FRAGMENT_MAIN_IMAGE,n.get($e.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=lx.replace($e.VERTEX_HEAD,n.get($e.VERTEX_HEAD)||"").replace($e.VERTEX_MAIN_SUPPORT,n.get($e.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Xt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return $e}};function vc(n,e,t){for(const i of e){const s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function ux(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader();const r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&En.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get($e.FRAGMENT_HEAD)||"",u=l.get($e.FRAGMENT_MAIN_UV)||"",h=l.get($e.FRAGMENT_MAIN_IMAGE)||"",d=l.get($e.VERTEX_HEAD)||"",p=l.get($e.VERTEX_MAIN_SUPPORT)||"";const g=new Set,v=new Set;if(a&&(u+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const S=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);p+=`	${n}MainSupport(`,p+=S?`vUv);
`:`);
`;for(const x of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const A of x[1].split(/\s*,\s*/))t.varyings.add(A),g.add(A),v.add(A);for(const x of s.matchAll(o))v.add(x[1])}for(const S of i.matchAll(o))v.add(S[1]);for(const S of e.defines.keys())v.add(S.replace(/\([\w\s,]*\)/g,""));for(const S of e.uniforms.keys())v.add(S);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((S,x)=>t.uniforms.set(n+x.charAt(0).toUpperCase()+x.slice(1),S)),e.defines.forEach((S,x)=>t.defines.set(n+x.charAt(0).toUpperCase()+x.slice(1),S));const m=new Map([["fragment",i],["vertex",s]]);vc(n,v,t.defines),vc(n,v,m),i=m.get("fragment"),s=m.get("vertex");const f=e.blendMode;if(t.blendModes.set(f.blendFunction,f),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(h+=e.inputColorSpace===nt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==rn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const S=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${n}MainImage(color0, UV, `,(t.attributes&En.DEPTH)!==0&&S.test(i)&&(h+="depth, ",t.readDepth=!0),h+=`color1);
	`;const x=n+"BlendOpacity";t.uniforms.set(x,f.opacity),h+=`color0 = blend${f.blendFunction}(color0, color1, ${x});

	`,c+=`uniform float ${x};

`}if(c+=i+`
`,s!==null&&(d+=s+`
`),l.set($e.FRAGMENT_HEAD,c),l.set($e.FRAGMENT_MAIN_UV,u),l.set($e.FRAGMENT_MAIN_IMAGE,h),l.set($e.VERTEX_HEAD,d),l.set($e.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const S of e.extensions)t.extensions.add(S)}}var xc=class extends Ot{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new cx(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new F0;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===Ye.DST)n.attributes|=a.getAttributes()&En.DEPTH;else{if((n.attributes&a.getAttributes()&En.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);ux("e"+e++,a,n)}let t=n.shaderParts.get($e.FRAGMENT_HEAD),i=n.shaderParts.get($e.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get($e.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of n.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(n.attributes&En.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===nt&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set($e.FRAGMENT_HEAD,t),n.shaderParts.set($e.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set($e.FRAGMENT_MAIN_UV,s);for(const[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=gn){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(const r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==xt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}},hx=class extends Ot{constructor(n,e,{renderTarget:t,resolutionScale:i=1,width:s=Dt.AUTO_SIZE,height:r=Dt.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new _u(n,e,new cd);const l=this.renderPass;l.ignoreBackground=!0,l.skipShadowMapUpdate=!0;const c=l.getClearPass();c.overrideClearColor=new We(7829503),c.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new mt(1,1,{minFilter:Tt,magFilter:Tt}),this.renderTarget.texture.name="NormalPass.Target");const u=this.resolution=new Dt(this,a,o,i);u.addEventListener("change",h=>this.setSize(u.baseWidth,u.baseHeight))}set mainScene(n){this.renderPass.mainScene=n}set mainCamera(n){this.renderPass.mainCamera=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.renderToScreen?null:this.renderTarget;this.renderPass.render(n,r,r)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}};class dx{constructor(e){this.volume=e;const t=new wr(e.data,e.sx,e.sy,e.sz);t.format=Ft,t.type=xt,t.colorSpace=rn,t.minFilter=_n,t.magFilter=et,t.wrapS=t.wrapT=t.wrapR=Sn,t.generateMipmaps=!0,t.unpackAlignment=1,t.needsUpdate=!0,this.texture=t;const i=new wr(e.normals,e.sx,e.sy,e.sz);i.format=Ft,i.type=xt,i.colorSpace=rn,i.minFilter=et,i.magFilter=et,i.generateMipmaps=!1,i.wrapS=i.wrapT=i.wrapR=Sn,i.unpackAlignment=1,i.needsUpdate=!0,this.normalTexture=i,this.size=new z(e.sx*e.texel,e.sy*e.texel,e.sz*e.texel)}texture;normalTexture;size;upload(){this.texture.needsUpdate=!0,this.normalTexture.needsUpdate=!0}}const fx=new On(2,2),Eu=`
  precision highp float;
  precision highp sampler3D;
  // L1 SH: Y00 = 0.282095, Y1 = 0.488603 * (y, z, x)
  float shEval(vec4 c, vec3 d) { return c.x * 0.282095 + 0.488603 * (c.y * d.y + c.z * d.z + c.w * d.x); }
  vec4 cosLobe(vec3 d) { return vec4(0.886227, 1.023328 * d.y, 1.023328 * d.z, 1.023328 * d.x); }
`,px=Eu+`
  uniform sampler3D uDirect;   // rgb premultiplied radiance (bytes / uDecode), a = solid fraction
  uniform sampler3D uNormal;   // xyz * 0.5 + 0.5
  uniform vec3 uSrcSize;       // texels of the source volumes
  uniform vec3 uDstSize;       // texels of the SH volumes
  uniform float uLayer;        // z layer being written
  uniform float uDecode;
  uniform int uChannel;
  uniform vec3 uSkyAmbient;    // mean sky radiance; open-air texels seed a fraction of it (normal.w) as a downward lobe
  uniform float uTime;
  uniform float uBoost;        // point emitters were stored / uBoost
  out vec4 outSh;
  float hash13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.yzx + 33.33); return fract((p.x + p.y) * p.z); }
  // One source texel → SH. Surfaces are a cosine lobe; a zero-length normal
  // marks an isotropic point source (torch, lamp) that is boosted and flickers.
  vec4 seedFrom(ivec3 c, vec3 cellf) {
    vec4 d = texelFetch(uDirect, c, 0);
    vec4 nrm = texelFetch(uNormal, c, 0);
    vec3 n = nrm.xyz * 2.0 - 1.0;
    float nl = length(n);
    float rad = (uChannel == 0 ? d.r : (uChannel == 1 ? d.g : d.b)) * uDecode;
    if (nl < 0.05) {
      float h = hash13(cellf);
      float flick = 0.78 + 0.16 * sin(uTime * 9.0 + h * 6.283) + 0.08 * sin(uTime * 23.0 + h * 17.0);
      return vec4(3.5449 * rad * uBoost * nrm.w * flick, 0.0, 0.0, 0.0);
    }
    n /= nl;
    float sky = (uChannel == 0 ? uSkyAmbient.r : (uChannel == 1 ? uSkyAmbient.g : uSkyAmbient.b)) * nrm.w;
    return cosLobe(n) * (rad + sky);
  }
  void main() {
    vec3 cell = vec3(floor(gl_FragCoord.xy), uLayer);
    // when the SH volume is coarser than the source, gather every source texel
    // inside this cell: surface light averages (radiance is intensive), point
    // sources sum (a torch must not be diluted or lose its flag)
    int ratio = int(uSrcSize.x / uDstSize.x + 0.5);
    if (ratio <= 1) { outSh = seedFrom(ivec3(cell), cell); return; }
    vec4 acc = vec4(0.0);
    ivec3 base = ivec3(cell) * ratio;
    float inv = 1.0 / float(ratio * ratio * ratio);
    for (int dz = 0; dz < 2; dz++) for (int dy = 0; dy < 2; dy++) for (int dx = 0; dx < 2; dx++) {
      ivec3 c = base + ivec3(dx, dy, dz);
      vec4 nrm = texelFetch(uNormal, c, 0);
      bool point = length(nrm.xyz * 2.0 - 1.0) < 0.05 && nrm.w > 0.5 && texelFetch(uDirect, c, 0).a < 1.0;
      vec4 sh = seedFrom(c, vec3(c));
      acc += point ? sh : sh * inv;
    }
    outSh = acc;
  }
`,mx=Eu+`
  uniform sampler3D uPrev;     // previous SH for this channel
  uniform sampler3D uSeed;     // injected SH for this channel
  uniform sampler3D uDirect;   // for solid fraction (alpha)
  uniform vec3 uDstSize;
  uniform float uLayer;
  uniform float uGain;         // per-step propagation weight
  out vec4 outSh;
  vec4 fetch(vec3 c) { return textureLod(uPrev, (c + 0.5) / uDstSize, 0.0); }
  void main() {
    vec3 cell = vec3(floor(gl_FragCoord.xy), uLayer);
    vec3 uvw = (cell + 0.5) / uDstSize;
    float alpha = textureLod(uDirect, uvw, 0.0).a;
    float T = 1.0 - alpha;              // solid cells absorb; air passes
    vec4 acc = textureLod(uSeed, uvw, 0.0);     // the source term keeps direct light alive
    const vec3 dirs[6] = vec3[6](vec3(1,0,0), vec3(-1,0,0), vec3(0,1,0), vec3(0,-1,0), vec3(0,0,1), vec3(0,0,-1));
    for (int i = 0; i < 6; i++) {
      vec3 o = dirs[i];
      vec3 nc = cell + o;
      if (any(lessThan(nc, vec3(0.0))) || any(greaterThanEqual(nc, uDstSize))) continue;
      vec4 sh = fetch(nc);
      // radiance the neighbour sends toward us (direction -o), re-emitted here as a lobe along -o
      float flux = max(shEval(sh, -o), 0.0);
      acc += cosLobe(-o) * (flux * uGain * T);
    }
    outSh = acc;
  }
`;class gx{constructor(e,t,i=1){this.gl=e,this.gi=t;const s=t.volume;this.size=new z(Math.ceil(s.sx/i),Math.ceil(s.sy/i),Math.ceil(s.sz/i)),this.worldSize=t.size.clone();const r=()=>{const a=new Nh(this.size.x,this.size.y,this.size.z,{type:bn,format:Ft,minFilter:et,magFilter:et,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});return a.texture.wrapS=a.texture.wrapT=a.texture.wrapR=Sn,a};for(let a=0;a<3;a++)this.seed.push(r()),this.ping.push(r()),this.pong.push(r());this.injectMat=new Pl({glslVersion:_r,vertexShader:"in vec3 position; void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:px,uniforms:{uDirect:{value:t.texture},uNormal:{value:null},uSrcSize:{value:new z(s.sx,s.sy,s.sz)},uDstSize:{value:this.size.clone()},uLayer:{value:0},uDecode:{value:2},uChannel:{value:0},uSkyAmbient:{value:new z(.3,.4,.6)},uTime:{value:0},uBoost:{value:8}},depthTest:!1,depthWrite:!1}),this.propMat=new Pl({glslVersion:_r,vertexShader:"in vec3 position; void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:mx,uniforms:{uPrev:{value:null},uSeed:{value:null},uDirect:{value:t.texture},uDstSize:{value:this.size.clone()},uLayer:{value:0},uGain:{value:this.gain}},depthTest:!1,depthWrite:!1}),this.quad=new _t(fx,this.injectMat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}size;worldSize;seed=[];ping=[];pong=[];injectMat;propMat;quad;cam=new Is(-1,1,1,-1,0,1);scene=new ss;iterations=0;gain=.58;setSources(e,t){this.injectMat.uniforms.uNormal.value=e,this.injectMat.uniforms.uDecode.value=t}setBoost(e){this.injectMat.uniforms.uBoost.value=e}setSky(e){this.injectMat.uniforms.uSkyAmbient.value.set(...e)}get textures(){return[this.ping[0].texture,this.ping[1].texture,this.ping[2].texture]}runLayers(e,t,i){this.quad.material=e;for(let s=0;s<3;s++){i(s);for(let r=0;r<this.size.z;r++)e.uniforms.uLayer.value=r,this.gl.setRenderTarget(t[s],r),this.gl.render(this.scene,this.cam)}this.gl.setRenderTarget(null)}inject(e){this.injectMat.uniforms.uTime.value=e,this.runLayers(this.injectMat,this.seed,t=>{this.injectMat.uniforms.uChannel.value=t})}step(e=1){for(let t=0;t<e;t++){this.propMat.uniforms.uGain.value=this.gain,this.runLayers(this.propMat,this.pong,s=>{this.propMat.uniforms.uPrev.value=this.ping[s].texture,this.propMat.uniforms.uSeed.value=this.seed[s].texture});const i=this.ping;this.ping=this.pong,this.pong=i,this.iterations++}}dispose(){for(const e of[...this.seed,...this.ping,...this.pong])e.dispose()}}const ur=Zt.length,wu=`
        uniform sampler3D uGi;
        uniform vec3 uGiSize;
        uniform float uGiTexel;
        uniform float uGiDecode;
        uniform float uGiStrength;
        uniform vec3 uSkyZenith;
        uniform vec3 uSkyHorizon;
        uniform vec3 uSkySunColor;
        uniform vec3 uSunDir;
        uniform float uDaylight;
        uniform sampler3D uSh0;
        uniform sampler3D uSh1;
        uniform sampler3D uSh2;`,Tu=`
        vec3 skyRadiance(vec3 d) {
          float t = clamp(d.y, 0.0, 1.0);
          vec3 sky = mix(uSkyHorizon, uSkyZenith, pow(max(t, 0.0), 0.55));
          float ground = smoothstep(0.0, -0.35, d.y);
          return mix(sky, uSkyHorizon * 0.35, ground);
        }
        #if SC_SPEC || !SC_GI_SH
        // Cone march through the premultiplied radiance volume. Returns gathered
        // radiance (with the sky filling whatever the cone didn't hit) and occlusion.
        vec4 traceCone(vec3 origin, vec3 dir, float halfTan, float maxDist) {
          vec3 acc = vec3(0.0);
          float occ = 0.0;
          float dist = uGiTexel * 0.6;
          vec3 invSize = 1.0 / uGiSize;
          for (int i = 0; i < SC_STEPS; i++) {
            if (dist >= maxDist || occ > 0.96) break;
            float diam = max(uGiTexel, 2.0 * halfTan * dist);
            vec3 p = origin + dir * dist;
            vec3 uvw = p * invSize;
            if (uvw.y > 1.0 || uvw.y < 0.0) break;
            if (any(lessThan(uvw.xz, vec2(0.0))) || any(greaterThan(uvw.xz, vec2(1.0)))) break;
            float mip = log2(diam / uGiTexel);
            vec4 s = textureLod(uGi, uvw, mip);
            // a step of half the footprint sees roughly half the texel's opacity
            float a = 1.0 - pow(1.0 - s.a, 0.6);
            acc += (1.0 - occ) * s.rgb * uGiDecode * (a / max(s.a, 1e-3));
            occ += (1.0 - occ) * a;
            dist += diam * 0.55;
          }
          acc += (1.0 - occ) * skyRadiance(dir);
          return vec4(acc, occ);
        }
        vec4 giDiffuse(vec3 p, vec3 n) {
          vec3 up = abs(n.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
          vec3 t = normalize(cross(up, n));
          vec3 b = cross(n, t);
          vec3 origin = p + n * uGiTexel * 1.1;
          #if SC_CONES == 6
          const float ht = 0.577; // tan(30°): six 60° cones tile the hemisphere
          vec4 sum = traceCone(origin, n, ht, 48.0) * 0.25;
          const float c = 0.5, s = 0.866025;
          vec3 d1 = t * s + n * c;
          vec3 d2 = t * (s * 0.309017) + n * c + b * (s * 0.951057);
          vec3 d3 = t * (-s * 0.809017) + n * c + b * (s * 0.587785);
          vec3 d4 = t * (-s * 0.809017) + n * c + b * (-s * 0.587785);
          vec3 d5 = t * (s * 0.309017) + n * c + b * (-s * 0.951057);
          sum += traceCone(origin, d1, ht, 40.0) * 0.15;
          sum += traceCone(origin, d2, ht, 40.0) * 0.15;
          sum += traceCone(origin, d3, ht, 40.0) * 0.15;
          sum += traceCone(origin, d4, ht, 40.0) * 0.15;
          sum += traceCone(origin, d5, ht, 40.0) * 0.15;
          return sum;
          #else
          // phones: one wide cone up, three around it
          const float ht = 0.75;
          vec4 sum = traceCone(origin, n, ht, 32.0) * 0.34;
          const float c = 0.55, s = 0.835;
          vec3 d1 = t * s + n * c;
          vec3 d2 = t * (-s * 0.5) + n * c + b * (s * 0.866025);
          vec3 d3 = t * (-s * 0.5) + n * c + b * (-s * 0.866025);
          sum += traceCone(origin, d1, ht, 28.0) * 0.22;
          sum += traceCone(origin, d2, ht, 28.0) * 0.22;
          sum += traceCone(origin, d3, ht, 28.0) * 0.22;
          return sum;
          #endif
        }
        #endif
        // Irradiance for normal n from L1 SH radiance: E = pi*Y00*c0 + (2pi/3)*Y1*(c1.n)
        float shIrradiance(vec4 c, vec3 n) { return max(0.886227 * c.x + 1.023326 * (c.y * n.y + c.z * n.z + c.w * n.x), 0.0); }
        vec3 giIrradianceSH(vec3 p, vec3 n) {
          vec3 uvw = (p + n * uGiTexel * 0.75) / uGiSize;
          vec3 skyE = skyRadiance(n) * PI * (0.5 + 0.5 * n.y);
          if (any(lessThan(uvw, vec3(0.0))) || any(greaterThan(uvw, vec3(1.0)))) return skyE;
          vec3 e = vec3(shIrradiance(textureLod(uSh0, uvw, 0.0), n), shIrradiance(textureLod(uSh1, uvw, 0.0), n), shIrradiance(textureLod(uSh2, uvw, 0.0), n));
          // fade to the analytic sky near the top so the volume's ceiling isn't a visible seam
          float top = smoothstep(0.9, 1.0, uvw.y);
          return mix(e, skyE, top);
        }
`;function vx(n){return{uGi:n.uGi,uGiSize:n.uGiSize,uGiTexel:n.uGiTexel,uGiDecode:n.uGiDecode,uGiStrength:n.uGiStrength,uSkyZenith:n.uSkyZenith,uSkyHorizon:n.uSkyHorizon,uSkySunColor:n.uSkySunColor,uSunDir:n.uSunDir,uDaylight:n.uDaylight,uSh0:n.uSh0,uSh1:n.uSh1,uSh2:n.uSh2}}const bu=(n,e)=>({SC_CONES:n?4:6,SC_STEPS:n?14:28,SC_SPEC:n?0:1,SC_GI_SH:e==="sh"?1:0});function As(n,e,t=!1,i="sh",s="full",r){const a=new Float32Array(ur),o=new Float32Array(ur*3),l=new Float32Array(ur*3);for(const d of Zt)a[d.id]=d.scale,l[d.id*3]=d.albedo[0],l[d.id*3+1]=d.albedo[1],l[d.id*3+2]=d.albedo[2],d.emissive&&(o[d.id*3]=d.emissive[0],o[d.id*3+1]=d.emissive[1],o[d.id*3+2]=d.emissive[2]);const c=r?{...r,uTexLocal:{value:1},uTexOrigin:{value:new z},uFade:{value:1},uMorph:{value:1}}:{uAlbedo:{value:n.albedo},uNormal:{value:n.normal},uMatScale:{value:a},uMatEmissive:{value:o},uMatAlbedo:{value:l},uGi:{value:e.texture},uGiSize:{value:e.size.clone()},uGiTexel:{value:e.volume.texel},uGiDecode:{value:Wo},uGiStrength:{value:1},uSkyZenith:{value:new z(.2,.36,.72)},uSkyHorizon:{value:new z(.6,.7,.82)},uSkySunColor:{value:new z(1,1,1)},uSunDir:{value:new z(0,1,0)},uTime:{value:0},uDaylight:{value:1},uSh0:{value:null},uSh1:{value:null},uSh2:{value:null},uCursor:{value:new ht(0,0,0,0)},uCursorShape:{value:0},uCursorExt:{value:new z(.5,.5,.5)},uTexLocal:{value:0},uTexOrigin:{value:new z},uFade:{value:1},uMorph:{value:1}},u=new br({color:16777215,roughness:1,metalness:0,side:wn}),h=bu(t,i);return s!=="full"&&(h.SC_SPEC=0),u.defines={SC_MATERIALS:ur,SC_GRASS:Br,SC_DIRT:Lr,SC_SNOW:Ur,SC_STONE:Ds,SC_LITE:s==="full"?0:1,SC_BASIC:s==="basic"?1:0,...h},u.name="terrain-"+s,u.onBeforeCompile=d=>{Object.assign(d.uniforms,c),d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
        attribute vec3 aMats;
        attribute vec3 aBary;
        attribute vec4 aFace;
        attribute vec3 aMorph;
        uniform float uMorph;
        varying vec4 vFace;
        varying vec3 vWorldPos;
        varying vec3 vTexPos;
        uniform float uTexLocal;
        uniform vec3 uTexOrigin;
        varying vec3 vWorldNormal;
        flat varying vec3 vMats;
        varying vec3 vBary;`).replace("#include <begin_vertex>",`vec3 transformed = mix(aMorph, vec3(position), uMorph);
        vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vTexPos = uTexLocal > 0.5 ? transformed + uTexOrigin : vWorldPos;
        vWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
        vMats = aMats;
        vBary = aBary;
        vFace = aFace;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
        precision highp sampler2DArray;
        precision highp sampler3D;
        uniform sampler2DArray uAlbedo;
        uniform sampler2DArray uNormal;
        uniform float uMatScale[SC_MATERIALS];
        uniform vec3 uMatEmissive[SC_MATERIALS];
        uniform vec3 uMatAlbedo[SC_MATERIALS];
        ${wu}
        uniform float uTime;
        uniform vec4 uCursor;
        varying vec4 vFace;
        uniform float uCursorShape;
        uniform vec3 uCursorExt;
        varying vec3 vTexPos;
        uniform float uTexLocal, uFade;
        uniform vec3 uTexOrigin;
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        flat varying vec3 vMats;
        varying vec3 vBary;

        struct Surf { vec3 albedo; float rough; vec3 normal; vec3 emissive; };
        float hash3(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.yzx + 33.33); return fract((p.x + p.y) * p.z); }

        vec3 triW(vec3 n) {
          vec3 w = pow(abs(n) + 1e-5, vec3(5.0));
          return w / (w.x + w.y + w.z);
        }
        vec3 safeNormalize(vec3 v, vec3 fallback) { float l = length(v); return l > 1e-6 ? v / l : fallback; }
        vec4 sampleArr(sampler2DArray s, float layer, float scale, vec3 p, vec3 w) {
          vec4 x = texture(s, vec3(p.zy / scale, layer));
          vec4 y = texture(s, vec3(p.xz / scale, layer));
          vec4 z = texture(s, vec3(p.xy / scale, layer));
          return x * w.x + y * w.y + z * w.z;
        }
        // Whiteout-style triplanar normal blend (Golus). Returns a world-space normal.
        vec3 sampleNormal(float layer, float scale, vec3 p, vec3 w, vec3 n) {
          vec3 tx = texture(uNormal, vec3(p.zy / scale, layer)).xyz * 2.0 - 1.0;
          vec3 ty = texture(uNormal, vec3(p.xz / scale, layer)).xyz * 2.0 - 1.0;
          vec3 tz = texture(uNormal, vec3(p.xy / scale, layer)).xyz * 2.0 - 1.0;
          tx = vec3(tx.xy + n.zy, abs(tx.z) * n.x);
          ty = vec3(ty.xy + n.xz, abs(ty.z) * n.y);
          tz = vec3(tz.xy + n.xy, abs(tz.z) * n.z);
          return safeNormalize(tx.zyx * w.x + ty.xzy * w.y + tz.xyz * w.z, n);
        }
        Surf sampleSurf(int m, vec3 p, vec3 w, vec3 n) {
          float layer = float(m);
          float sc = uMatScale[m];
          #if SC_BASIC
          // no texture arrays: flat albedo with a little hash grain so it isn't plastic
          float grain = 0.9 + 0.2 * hash3(floor(p * 4.0));
          vec4 a = vec4(uMatAlbedo[m] * grain, 0.9);
          vec3 nn = n;
          #else
          vec4 a = sampleArr(uAlbedo, layer, sc, p, w);
          vec3 nn = sampleNormal(layer, sc, p, w, n);
          #endif
          // slope-aware swaps: grass and snow don't cling to cliffs. The alt
          // material is sampled unconditionally: a texture() inside a branch
          // that varies per pixel has undefined derivatives, and real GPUs
          // answer that with black that flickers as the camera moves.
          #if !SC_BASIC
          if (m == SC_GRASS || m == SC_SNOW) {
            float k = smoothstep(0.45, 0.75, n.y);
            int alt = (m == SC_GRASS) ? SC_DIRT : SC_STONE;
            float asc = uMatScale[alt];
            vec4 b = sampleArr(uAlbedo, float(alt), asc, p, w);
            vec3 bn = sampleNormal(float(alt), asc, p, w, n);
            a = mix(b, a, k);
            nn = safeNormalize(mix(bn, nn, k), n);
          }
          #endif
          Surf s;
          s.albedo = a.rgb;
          s.rough = a.a;
          s.normal = nn;
          s.emissive = uMatEmissive[m];
          return s;
        }
        ${Tu}
        // Block-face frame: the u and v edge directions for an axis-aligned normal (see core/mesher FACES).
        void faceFrame(vec3 n, out vec3 u, out vec3 v) {
          if (n.x > 0.5) { u = vec3(0,1,0); v = vec3(0,0,1); }
          else if (n.x < -0.5) { u = vec3(0,0,1); v = vec3(0,1,0); }
          else if (n.y > 0.5) { u = vec3(0,0,1); v = vec3(1,0,0); }
          else if (n.y < -0.5) { u = vec3(1,0,0); v = vec3(0,0,1); }
          else if (n.z > 0.5) { u = vec3(1,0,0); v = vec3(0,1,0); }
          else { u = vec3(0,1,0); v = vec3(1,0,0); }
        }
        // Rounded edges on real object corners only: bend the normal toward the
        // outward edge direction within a few centimetres of an exposed edge.
        vec3 bevelNormal(vec3 n, vec3 texN, vec4 face, out float edgeDark) {
          const float W = 0.10; // fraction of the 0.5 m face
          int mask = int(face.z + 0.5);
          vec3 u, v; faceFrame(n, u, v);
          vec3 bend = vec3(0.0);
          float t = 0.0;
          if ((mask & 1) != 0 && face.x < W) { float k = 1.0 - face.x / W; bend -= u * k; t = max(t, k); }
          if ((mask & 2) != 0 && face.x > 1.0 - W) { float k = (face.x - (1.0 - W)) / W; bend += u * k; t = max(t, k); }
          if ((mask & 4) != 0 && face.y < W) { float k = 1.0 - face.y / W; bend -= v * k; t = max(t, k); }
          if ((mask & 8) != 0 && face.y > 1.0 - W) { float k = (face.y - (1.0 - W)) / W; bend += v * k; t = max(t, k); }
          edgeDark = t;
          if (t <= 0.0) return texN;
          float s = smoothstep(0.0, 1.0, t);
          return safeNormalize(mix(texN, safeNormalize(n + bend * 1.4, n), s * 0.8), n);
        }
        float cursorSdf(vec3 p) {
          vec3 d = p - uCursor.xyz;
          if (uCursorShape > 0.5) { vec3 q = abs(d) - uCursorExt; return max(max(q.x, q.y), q.z); }
          return length(d) - uCursor.w;
        }`).replace("#include <map_fragment>",`
        vec3 wN = safeNormalize(vWorldNormal, vec3(0.0, 1.0, 0.0));
        vec3 wW = triW(wN);
        int m0 = int(vMats.x + 0.5), m1 = int(vMats.y + 0.5), m2 = int(vMats.z + 0.5);
        if (uFade < 1.0) { float dh = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453); if (dh > uFade) discard; }
        Surf surf = sampleSurf(m0, vTexPos, wW, wN);
        if (m1 != m0 || m2 != m0) {
          Surf s1 = surf;
          if (m1 != m0) s1 = sampleSurf(m1, vTexPos, wW, wN);
          Surf s2 = surf;
          if (m2 == m1) s2 = s1; else if (m2 != m0) s2 = sampleSurf(m2, vTexPos, wW, wN);
          // sharpen the barycentric blend so materials meet in a band, not a smear
          // interpolated barycentrics can dip below zero on real GPUs; pow of a
          // negative is NaN, and one NaN texel blooms into a black blob
          vec3 bw = pow(clamp(vBary, 0.0, 1.0), vec3(2.2));
          bw /= max(bw.x + bw.y + bw.z, 1e-4);
          surf.albedo = surf.albedo * bw.x + s1.albedo * bw.y + s2.albedo * bw.z;
          surf.rough = surf.rough * bw.x + s1.rough * bw.y + s2.rough * bw.z;
          surf.normal = safeNormalize(surf.normal * bw.x + s1.normal * bw.y + s2.normal * bw.z, wN);
          surf.emissive = surf.emissive * bw.x + s1.emissive * bw.y + s2.emissive * bw.z;
        }
        #if !SC_LITE
        // built things: bevelled corners and a per-cell tint so a wall isn't a stamp
        if (vFace.w > 0.5) {
          float edgeDark;
          surf.normal = bevelNormal(wN, surf.normal, vFace, edgeDark);
          vec3 cell = floor((vTexPos - wN * 0.05) * 2.0);
          float h = hash3(cell);
          surf.albedo *= 0.93 + 0.14 * h;
          surf.albedo *= 1.0 - 0.12 * edgeDark;
          surf.rough = clamp(surf.rough + (h - 0.5) * 0.1, 0.05, 1.0);
        }
        // macro variation (layer 0), ~23 m period
        vec4 macro = sampleArr(uAlbedo, 0.0, 23.0, vTexPos, wW);
        surf.albedo *= mix(0.78, 1.18, macro.r);
        surf.albedo *= vec3(1.0 + (macro.g - 0.5) * 0.12, 1.0, 1.0 - (macro.g - 0.5) * 0.10);
        #endif
        diffuseColor.rgb *= surf.albedo;
        // brush cursor: a thin bright shell where the brush surface meets the terrain
        if (uCursor.w > 0.0) {
          float cd = cursorSdf(vWorldPos);
          float ring = 1.0 - smoothstep(0.0, 0.08, abs(cd));
          float fill = (cd < 0.0) ? 0.18 : 0.0;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.95, 0.6), ring * 0.9 + fill);
        }`).replace("#include <roughnessmap_fragment>","float roughnessFactor = clamp(surf.rough, 0.04, 1.0);").replace("#include <normal_fragment_maps>","normal = normalize(mat3(viewMatrix) * surf.normal);").replace("#include <emissivemap_fragment>","totalEmissiveRadiance += surf.emissive;").replace("#include <lights_fragment_maps>",`
        {
          vec3 gN = safeNormalize(vWorldNormal, vec3(0.0, 1.0, 0.0));
          #if SC_GI_SH
          { vec3 e = giIrradianceSH(vWorldPos, gN) * uGiStrength; iblIrradiance += e / (1.0 + e * 0.06); } // soft knee next to torches
          #else
          vec4 gi = giDiffuse(vWorldPos, gN);
          iblIrradiance += gi.rgb * PI * uGiStrength;
          #endif
          // glossy specular cone: reflections of the lit world + sky, occluded
          float rough = material.roughness;
          #if SC_SPEC
          if (rough < 0.7) {
            vec3 V = normalize(cameraPosition - vWorldPos);
            vec3 R = reflect(-V, surf.normal);
            float ht = tan(clamp(rough, 0.05, 0.7) * 0.9);
            vec4 spec = traceCone(vWorldPos + gN * uGiTexel * 0.9, R, ht, 64.0);
            // the sun disc itself: analytic highlight so smooth surfaces glint
            float sunSpot = pow(max(dot(R, uSunDir), 0.0), 2.0 / max(rough * rough, 0.002)) * (1.0 - spec.a);
            radiance += (spec.rgb + uSkySunColor * sunSpot * 0.25) * (1.0 - rough * 0.7);
          }
          #endif
        }`)},u.onBeforeCompile=(d=>(p,g)=>{d(p,g),p.fragmentShader=p.fragmentShader.replace("#include <dithering_fragment>",`
      #include <dithering_fragment>
      // belt and braces: a NaN here becomes a black bloom blob three passes later
      if (any(isnan(gl_FragColor.rgb)) || any(isinf(gl_FragColor.rgb))) gl_FragColor.rgb = vec3(0.0);`),p.fragmentShader=p.fragmentShader.replace("#include <fog_fragment>",`
      #ifdef USE_FOG
        // aerial perspective: distance fog that brightens toward the sun
        vec3 vd = normalize(vWorldPos - cameraPosition);
        float sunAmt = pow(max(dot(vd, uSunDir), 0.0), 6.0) * uDaylight;
        vec3 fogCol = fogColor + uSkySunColor * 0.06 * sunAmt;
        float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, fogCol, fogFactor);
      #endif`)})(u.onBeforeCompile),u.customProgramCacheKey=()=>"splinecraft-terrain-v12-"+s+"-"+(t?"cheap":"full")+"-"+i,{material:u,uniforms:c}}class xx{mesh;uniforms={uSunDir:{value:new z(0,1,0)},uSunColor:{value:new z(1,1,1)},uZenith:{value:new z(.2,.36,.72)},uHorizon:{value:new z(.6,.7,.82)},uDaylight:{value:1},uTime:{value:0},uCloud:{value:.55}};constructor(){const e=new dt({uniforms:this.uniforms,side:Ct,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_Position.z = gl_Position.w * 0.999999; // just inside the far plane; z == w is a coin flip on some GPUs
        }`,fragmentShader:`
        uniform vec3 uSunDir, uSunColor, uZenith, uHorizon;
        uniform float uDaylight, uTime, uCloud;
        varying vec3 vDir;
        float hash13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.yzx + 33.33); return fract((p.x + p.y) * p.z); }
        float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
        float vnoise(vec2 p) {
          vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash21(i), hash21(i + vec2(1,0)), f.x), mix(hash21(i + vec2(0,1)), hash21(i + vec2(1,1)), f.x), f.y);
        }
        float fbm(vec2 p) { float a = 0.0, w = 0.5; for (int i = 0; i < 5; i++) { a += w * vnoise(p); p = p * 2.03 + 17.0; w *= 0.5; } return a; }
        void main() {
          vec3 d = normalize(vDir);
          float t = clamp(d.y, 0.0, 1.0);
          vec3 col = mix(uHorizon, uZenith, pow(max(t, 1e-5), 0.55));
          float below = smoothstep(0.0, -0.3, d.y);
          col = mix(col, uHorizon * 0.35, below);
          float cosSun = dot(d, uSunDir);
          // forward-scattered haze around the sun, strongest near the horizon
          col += uHorizon * pow(max(cosSun, 0.0), 6.0) * 0.55 * (1.0 - t) * step(-0.1, uSunDir.y);
          float disc = smoothstep(0.9993, 0.9997, cosSun);
          float glow = pow(max(cosSun, 0.0), 24.0) * 0.18 + pow(max(cosSun, 0.0), 4.0) * 0.06;
          float discGain = mix(40.0, 6.0, uDaylight); // the moon is dim in radiance but must read as a disc
          col += uSunColor * (disc * discGain + glow) * step(-0.05, uSunDir.y);
          // a cloud deck at ~1.5 km, lit from the sun side, gone at the horizon
          if (d.y > 0.02) {
            vec2 cuv = d.xz / d.y * 0.9 + vec2(uTime * 0.006, uTime * 0.0025);
            float n = fbm(cuv * 0.35);
            float cov = smoothstep(1.0 - uCloud * 0.9, 1.0 - uCloud * 0.9 + 0.32, n);
            float edge = smoothstep(0.02, 0.18, d.y);
            float lit = 0.5 + 0.5 * dot(d, uSunDir);
            vec3 cShade = mix(uHorizon * 0.55, uZenith * 0.9, 0.5) * (0.35 + 0.65 * uDaylight);
            vec3 cLit = (uSunColor * 0.7 + uHorizon * 0.5) * (0.25 + 0.75 * uDaylight);
            float thick = smoothstep(0.0, 0.6, n - (1.0 - uCloud * 0.9));
            vec3 cloud = mix(cLit, cShade, thick * 0.8) * (0.6 + 0.4 * lit);
            col = mix(col, cloud, cov * edge * 0.92);
          }
          // stars
          vec3 cell = floor(d * 240.0);
          float star = step(0.9975, hash13(cell)) * (1.0 - uDaylight) * smoothstep(0.0, 0.1, d.y);
          col += vec3(star) * 0.6 * (1.0 - smoothstep(0.3, 0.6, fbm((d.xz / max(d.y, 0.05)) * 0.315) * uCloud));
          if (any(isnan(col)) || any(isinf(col))) col = uHorizon;
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.mesh=new _t(new zo(1,32,16),e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.mesh.scale.setScalar(900)}}const Nr=n=>Math.round(n/P);function Ei(n,e,t,i){if(e<0||t<0||i<0||e>=n.nx-1||t>=n.ny-1||i>=n.nz-1)return!1;const s=n.index(e,t,i),r=n.hard[s];if(r!==0&&Et(r)){const u=n.sub[s]===0?Nn:n.sub[s];if(mu(u)>13)return!1}const a=n.density,o=n.ny*n.nz,l=n.nz;let c=0;return a[s]>0&&c++,a[s+1]>0&&c++,a[s+l]>0&&c++,a[s+l+1]>0&&c++,a[s+o]>0&&c++,a[s+o+1]>0&&c++,a[s+o+l]>0&&c++,a[s+o+l+1]>0&&c++,c<6}function Mx(n,e,t,i){for(let s=t+1;s<n.ny-1;s++)if(!Ei(n,e,s,i))return!1;return!0}function Ax(n,e){n.water.fill(0);const t=Nr(e),i=[],s=n.water,r=Math.min(t-1,n.ny-2);if(r<0)return 0;for(let a=0;a<n.nx-1;a++)for(let o=0;o<n.nz-1;o++)if(Ei(n,a,r,o)&&Mx(n,a,r,o)){const l=n.index(a,r,o);s[l]||(s[l]=1,i.push(a,r,o))}return yx(n,i,t)}function Sx(n,e,t,i=!0){const s=Cu(n,e,t);if(!s.plan||!i)return s.removed;const r=wo(n,s.plan,s.plan.cells.length);return r?Ko(s.removed,r):s.removed}function Cu(n,e,t){const i=Nr(t),s=n.water,r=Math.max(0,e.x0-1),a=Math.max(0,e.y0-1),o=Math.max(0,e.z0-1),l=Math.min(n.nx-2,e.x1),c=Math.min(n.ny-2,e.y1,i-1),u=Math.min(n.nz-2,e.z1);let h=null;const d=[],p=new Set;for(let y=r;y<=l;y++)for(let E=a;E<=c;E++)for(let D=o;D<=u;D++){const M=n.index(y,E,D),_=Ei(n,y,E,D);if(s[M]&&!_){s[M]=0,h=Ko(h,{x0:y,y0:E,z0:D,x1:y+1,y1:E+1,z1:D+1});continue}_&&!s[M]&&(y>0&&s[M-n.nz*n.ny]!==0||y<n.nx-2&&s[M+n.nz*n.ny]!==0||E>0&&s[M-n.nz]!==0||E<i-1&&s[M+n.nz]!==0||D>0&&s[M-1]!==0||D<n.nz-2&&s[M+1]!==0)&&!p.has(M)&&(p.add(M),d.push(y,E,D,0))}if(!d.length)return{removed:h,plan:null};const g=[],v=d.slice(),m=n.ny*n.nz,f=n.nz;let S=0;for(;S<v.length;){const y=v[S],E=v[S+1],D=v[S+2],M=v[S+3];S+=4;const _=n.index(y,E,D);g.push(_,E,M);const C=(U,I,L,N)=>{I>=i||s[N]||p.has(N)||Ei(n,U,I,L)&&(p.add(N),v.push(U,I,L,M+1))};y>0&&C(y-1,E,D,_-m),y<n.nx-2&&C(y+1,E,D,_+m),E>0&&C(y,E-1,D,_-f),E<i-1&&C(y,E+1,D,_+f),D>0&&C(y,E,D-1,_-1),D<n.nz-2&&C(y,E,D+1,_+1)}const x=g.length/3,A=new Int32Array(x);for(let y=0;y<x;y++)A[y]=y;A.sort((y,E)=>g[y*3+1]-g[E*3+1]||g[y*3+2]-g[E*3+2]);const T=new Int32Array(x);for(let y=0;y<x;y++)T[y]=g[A[y]*3];return{removed:h,plan:{cells:T,done:0,contacts:d.length/4,carry:0}}}function wo(n,e,t){const i=Math.min(e.cells.length,e.done+Math.max(0,Math.floor(t)));if(i<=e.done)return null;let s=null;const r=n.ny*n.nz,a=n.nz;for(let o=e.done;o<i;o++){const l=e.cells[o];if(!Ei(n,Math.floor(l/r),Math.floor(l/a)%n.ny,l%n.nz))continue;n.water[l]=1;const c=Math.floor(l/r),u=Math.floor(l/a)%n.ny,h=l%n.nz;s=Ko(s,{x0:c,y0:u,z0:h,x1:c+1,y1:u+1,z1:h+1})}return e.done=i,s}function _x(n){return Math.max(36,n.contacts*30)}function Ko(n,e){return n?{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}:e}function yx(n,e,t,i){const s=n.water;let r=0;const a=n.ny*n.nz,o=n.nz;for(;e.length;){const l=e.pop(),c=e.pop(),u=e.pop(),h=n.index(u,c,l),d=(p,g,v,m)=>{s[m]||g>=t||Ei(n,p,g,v)&&(s[m]=1,r++,e.push(p,g,v))};u>0&&d(u-1,c,l,h-a),u<n.nx-2&&d(u+1,c,l,h+a),c>0&&d(u,c-1,l,h-o),c<t-1&&d(u,c+1,l,h+o),l>0&&d(u,c,l-1,h-1),l<n.nz-2&&d(u,c,l+1,h+1)}return r}const Ex=512,wx=Zt.length;Zt.length+1;function Tx(n){const e=(t,i)=>{const s=new Fo(t,n.size,n.size,n.layers);return s.format=Ft,s.type=xt,s.colorSpace=i?nt:rn,s.wrapS=s.wrapT=ws,s.minFilter=_n,s.magFilter=et,s.generateMipmaps=!0,s.anisotropy=8,s.needsUpdate=!0,s};return{albedo:e(n.albedo,!0),normal:e(n.normal,!1),swatches:n.swatches}}const Dr=16,Es=8,bx=`
  precision highp float;
  uniform sampler2D uPrev, uMask;
  uniform vec2 uTexel, uWorld;
  uniform float uK, uDamp, uN;
  uniform vec4 uImp[${Dr}];
  uniform vec4 uObs[${Es}];
  uniform float uNObs;
  varying vec2 vUv;
  // 1 where water can move: the shore mask, minus any moving body sitting on this texel
  float open(vec2 uv, vec2 p) {
    float m = texture2D(uMask, uv).r;
    for (int i = 0; i < ${Es}; i++) {
      if (float(i) >= uNObs) break;
      vec4 o = uObs[i];
      m *= smoothstep(o.z * 0.8, o.z, length(p - o.xy));
    }
    return m;
  }
  void main() {
    vec2 c = texture2D(uPrev, vUv).rg;
    float h = c.r, v = c.g;
    vec2 p = vUv * uWorld;
    // waves reflect off anything closed: a neighbour that is not water contributes no gradient
    vec2 dx = vec2(uTexel.x, 0.0), dz = vec2(0.0, uTexel.y);
    float l = open(vUv - dx, p - vec2(uTexel.x * uWorld.x, 0.0)) * (texture2D(uPrev, vUv - dx).r - h)
            + open(vUv + dx, p + vec2(uTexel.x * uWorld.x, 0.0)) * (texture2D(uPrev, vUv + dx).r - h)
            + open(vUv - dz, p - vec2(0.0, uTexel.y * uWorld.y)) * (texture2D(uPrev, vUv - dz).r - h)
            + open(vUv + dz, p + vec2(0.0, uTexel.y * uWorld.y)) * (texture2D(uPrev, vUv + dz).r - h);
    v += uK * l;
    for (int i = 0; i < ${Dr}; i++) {
      if (float(i) >= uN) break;
      vec4 im = uImp[i];
      float d2 = dot(p - im.xy, p - im.xy);
      v += im.w * exp(-d2 / (im.z * im.z));
    }
    // a moving body pushes the water at its rim, in proportion to its speed
    for (int i = 0; i < ${Es}; i++) {
      if (float(i) >= uNObs) break;
      vec4 o = uObs[i];
      float d = length(p - o.xy);
      float rim = smoothstep(o.z * 0.7, o.z, d) * (1.0 - smoothstep(o.z, o.z * 1.6, d));
      v -= rim * o.w * 0.012;
    }
    v *= uDamp;
    h += v;
    float m = open(vUv, p);
    h *= m; v *= m;
    h = clamp(h, -0.4, 0.4);
    gl_FragColor = vec4(h, v, 0.0, 1.0);
  }`;class Cx{constructor(e,t,i,s){this.worldX=e,this.worldZ=t,this.level=s;const r=Math.max(16,Math.round(e*i)),a=Math.max(16,Math.round(t*i)),o=()=>new mt(r,a,{type:bn,format:Ft,minFilter:et,magFilter:et,depthBuffer:!1,stencilBuffer:!1});this.rts=[o(),o()],this.mask=new Tr(new Uint8Array(4),1,1,Si,xt),this.mask.minFilter=et,this.mask.magFilter=et,this.mask.needsUpdate=!0,this.mat=new dt({vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:bx,uniforms:{uPrev:{value:null},uMask:{value:this.mask},uTexel:{value:new Ae(1/r,1/a)},uWorld:{value:new Ae(e,t)},uK:{value:.06},uDamp:{value:.992},uN:{value:0},uImp:{value:Array.from({length:Dr},()=>new ht)},uObs:{value:Array.from({length:Es},()=>new ht)},uNObs:{value:0}},depthTest:!1,depthWrite:!1}),this.scene.add(new _t(new On(2,2),this.mat))}rts;cur=0;mat;scene=new ss;cam=new Is(-1,1,1,-1,0,1);mask;pending=[];acc=0;get texture(){return this.rts[this.cur].texture}get maskTexture(){return this.mask}get texelSize(){return this.mat.uniforms.uTexel.value}setMask(e){const t=Nr(this.level),i=Math.min(t-1,e.ny-2),s=e.nx-1,r=e.nz-1,a=new Uint8Array(s*r);if(i>=0)for(let o=0;o<r;o++)for(let l=0;l<s;l++)a[o*s+l]=e.water[e.index(l,i,o)]?255:0;this.mask.dispose(),this.mask=new Tr(a,s,r,Si,xt),this.mask.minFilter=et,this.mask.magFilter=et,this.mask.needsUpdate=!0,this.mat.uniforms.uMask.value=this.mask}setObstacles(e){const t=this.mat.uniforms,i=Math.min(Es,e.length);for(let s=0;s<i;s++)t.uObs.value[s].set(e[s][0],e[s][1],e[s][2],e[s][3]);t.uNObs.value=i}splash(e,t,i,s){this.pending.push(e,t,Math.max(.15,i),s)}step(e,t){this.acc=Math.min(this.acc+t,3/60);const i=this.mat.uniforms;let s=!0;for(;this.acc>=1/60;){this.acc-=1/60;const r=s?Math.min(Dr,this.pending.length/4):0;for(let l=0;l<r;l++)i.uImp.value[l].set(this.pending[l*4],this.pending[l*4+1],this.pending[l*4+2],this.pending[l*4+3]);i.uN.value=r,i.uPrev.value=this.rts[this.cur].texture;const a=1-this.cur,o=e.getRenderTarget();e.setRenderTarget(this.rts[a]),e.render(this.scene,this.cam),e.setRenderTarget(o),this.cur=a,s=!1}s||(this.pending.length=0)}}const Dx=`
  uniform sampler2D uWave, uWaveMask;
  uniform vec2 uWorldSize;
  varying vec3 vWorldPos;
  void main() {
    vec3 p = position;
    // waves lift the grid, fading to nothing at the shore so no vertex climbs the sand
    vec2 wuv = p.xz / uWorldSize;
    float m = texture2D(uWaveMask, wuv).r;
    p.y += texture2D(uWave, wuv).r * m * m;
    vWorldPos = p;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }`,Rx=`
  precision highp sampler2DArray;
  #include <packing>
  uniform sampler2DArray uNormal;
  uniform sampler2D uSceneColor, uSceneDepth, uReflTex, uWave;
  uniform vec2 uWorldSize, uWaveTexel;
  uniform mat4 uReflMatrix;
  uniform float uLayer, uTime, fogDensity, uNear, uFar, uReflect, uUnder;
  uniform vec2 uResolution;
  uniform vec3 uSunDir, uSunColor, uZenith, uHorizon, uAmbient, fogColor;
  varying vec3 vWorldPos;

  vec3 skyRadiance(vec3 d) {
    float t = clamp(d.y, 0.0, 1.0);
    return mix(uHorizon, uZenith, pow(max(t, 1e-5), 0.55));
  }
  float viewZ(float ndcDepth) { return perspectiveDepthToViewZ(ndcDepth, uNear, uFar); }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;
    float sceneNdc = texture2D(uSceneDepth, uv).r;
    float waterNdc = gl_FragCoord.z;
    // the opaque scene owns the depth buffer; terrain in front of the surface wins
    if (sceneNdc < waterNdc - 2e-6) discard;
    float thick = max(-viewZ(sceneNdc) + viewZ(waterNdc), 0.0); // metres of water along the view ray

    vec2 p = vWorldPos.xz;
    vec3 n1 = texture(uNormal, vec3(p / 9.0 + uTime * vec2(0.012, 0.007), uLayer)).xyz * 2.0 - 1.0;
    vec3 n2 = texture(uNormal, vec3(p / 3.5 - uTime * vec2(0.01, 0.014), uLayer)).xyz * 2.0 - 1.0;
    vec2 slope = (n1.xy + n2.xy) * 0.55;
    // simulated waves: the height field's gradient, plus crest foam
    vec2 wuv = p / uWorldSize;
    float hL = texture2D(uWave, wuv - vec2(uWaveTexel.x, 0.0)).r, hR = texture2D(uWave, wuv + vec2(uWaveTexel.x, 0.0)).r;
    float hD = texture2D(uWave, wuv - vec2(0.0, uWaveTexel.y)).r, hU = texture2D(uWave, wuv + vec2(0.0, uWaveTexel.y)).r;
    vec2 wslope = vec2(hR - hL, hU - hD) / (2.0 * uWaveTexel * uWorldSize);
    slope += wslope * 1.6;
    float crest = length(wslope);
    vec3 n = normalize(vec3(slope.x, 1.0, slope.y));
    bool below = uUnder > 0.5;
    if (below) n = -n;
    vec3 V = normalize(cameraPosition - vWorldPos);

    // refraction: look through the surface a little off-axis, but never pull the foreground in
    float thickR = clamp(thick, 0.0, 1.0);
    vec2 ruv = uv + slope * 0.035 * (below ? 1.0 : thickR);
    float rNdc = texture2D(uSceneDepth, ruv).r;
    if (rNdc < waterNdc) { ruv = uv; rNdc = sceneNdc; }
    vec3 refr = texture2D(uSceneColor, ruv).rgb;
    float thickRef = max(-viewZ(rNdc) + viewZ(waterNdc), 0.0);
    vec3 shallow = vec3(0.10, 0.34, 0.36) * (uAmbient * 1.6 + 0.25);
    vec3 deep = vec3(0.015, 0.07, 0.10) * (uAmbient * 2.0 + 0.3);
    vec3 absorb = exp(-thickRef * vec3(0.9, 0.35, 0.22));
    vec3 under = refr * absorb + mix(shallow, deep, 1.0 - exp(-thickRef * 0.25)) * (1.0 - absorb);

    float fres = 0.02 + 0.98 * pow(1.0 - max(dot(V, n), 0.0), 5.0);
    vec3 R = reflect(-V, n);
    R.y = abs(R.y);
    vec3 refl = skyRadiance(R);
    if (uReflect > 0.5 && !below) {
      vec4 rp = uReflMatrix * vec4(vWorldPos, 1.0);
      vec2 rcoord = rp.xy / rp.w + slope * 0.04;
      if (all(greaterThan(rcoord, vec2(0.0))) && all(lessThan(rcoord, vec2(1.0)))) refl = texture2D(uReflTex, rcoord).rgb;
    }
    vec3 H = normalize(V + uSunDir);
    float spec = pow(max(dot(n, H), 0.0), 360.0) * 2.0 * step(0.0, uSunDir.y);
    // foam where the water is a few centimetres deep, broken up by the normal texture
    float foam = (smoothstep(0.35, 0.0, thick) * smoothstep(0.35, 0.75, n1.z * 0.5 + 0.5 + n2.x * 0.3) + smoothstep(0.35, 0.9, crest) * 0.6) * (1.0 - float(below));
    vec3 col;
    if (below) {
      // from underneath: the world above through the surface, dimmed at grazing angles
      col = mix(under, deep * 2.0, fres * 0.6);
    } else {
      col = mix(under, refl, fres) + uSunColor * spec + foam * (uAmbient * 1.5 + 0.35);
    }
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = 1.0 - exp(-fogDensity * fogDensity * depth * depth);
    col = mix(col, fogColor, fogFactor);
    if (any(isnan(col))) col = deep;
    gl_FragColor = vec4(col, 1.0);
  }`;class Ix extends Ot{constructor(e,t,i,s,r,a,o,l){super("WaterPass"),this.worldScene=e,this.cam=t,this.level=i,this.sim=new Cx(a,o,l,i),this.uniforms.uWorldSize.value.set(a,o),this.uniforms.uWaveTexel.value.copy(this.sim.texelSize),this.needsDepthTexture=!0,this.needsSwap=!1,this.uniforms.uNormal.value=s,this.uniforms.uNear.value=t.near,this.uniforms.uFar.value=t.far,this.clip=new Kn(new z(0,1,0),-i+.02),this.refl=r?new mt(1,1,{type:bn,depthBuffer:!0,minFilter:et,magFilter:et}):null,this.uniforms.uReflect.value=r?1:0,this.refl&&(this.uniforms.uReflTex.value=this.refl.texture);const c=new dt({uniforms:this.uniforms,vertexShader:Dx,fragmentShader:Rx,depthTest:!1,depthWrite:!1,side:Ht,transparent:!1});this.mesh=new _t(new Gt,c),this.mesh.frustumCulled=!1,this.waterScene.add(this.mesh),this.fullscreenMaterial=this.copy}mesh;uniforms={uNormal:{value:null},uSceneColor:{value:null},uSceneDepth:{value:null},uReflTex:{value:null},uReflMatrix:{value:new je},uLayer:{value:wx},uTime:{value:0},uNear:{value:.08},uFar:{value:1200},uReflect:{value:0},uUnder:{value:0},uResolution:{value:new Ae(1,1)},uSunDir:{value:new z(0,1,0)},uSunColor:{value:new z(1,1,1)},uZenith:{value:new z(.2,.36,.72)},uHorizon:{value:new z(.6,.7,.82)},uAmbient:{value:new z(.3,.4,.6)},fogColor:{value:new We},fogDensity:{value:.006},uWave:{value:null},uWaveMask:{value:null},uWorldSize:{value:new Ae(1,1)},uWaveTexel:{value:new Ae(1,1)}};waterScene=new ss;copy=new Yo;refl;mirror=new Xt;clip;sim;lastTime=-1;frustum=new Ir;hasWater=!1;area=0;rebuild(e){const t=Nr(this.level),i=Math.min(t-1,e.ny-2),s=[],r=[],a=new Map,o=(u,h,d)=>{const p=(u*1024+d)*1024+h;let g=a.get(p);return g===void 0&&(g=s.length/3,a.set(p,g),s.push(u*P,h*P,d*P)),g};let l=0;if(i>=0){const u=e.water,h=e.nx-1,d=e.nz-1,p=e.nz,g=new Map,v=(m,f,S)=>(m*1024+S)*1024+f;for(let m=0;m<h;m++)for(let f=0;f<d;f++)for(let S=i;S>=0;S--){const x=e.index(m,S,f);if(!(!u[x]||!(S===i||!u[x+p]&&Ei(e,m,S+1,f)))){l++;for(let T=-1;T<=1;T++)for(let y=-1;y<=1;y++){const E=m+T,D=f+y;E>=0&&D>=0&&E<h&&D<d&&g.set(v(E,S,D),1)}}}for(const m of g.keys()){const f=m%1024,S=Math.floor(m/1024)%1024,x=Math.floor(m/(1024*1024)),A=o(x,f+1,S),T=o(x+1,f+1,S),y=o(x+1,f+1,S+1),E=o(x,f+1,S+1);r.push(A,T,y,A,y,E)}}const c=new Gt;c.setAttribute("position",new mn(s,3)),c.setIndex(r),c.computeBoundingBox(),c.boundingBox&&(c.boundingBox.min.y-=.5,c.boundingBox.max.y+=.5),this.mesh.geometry.dispose(),this.mesh.geometry=c,this.hasWater=s.length>0,this.needsSwap=this.hasWater,this.area=l*P*P,this.sim.setMask(e),this.uniforms.uWaveMask.value=this.sim.maskTexture}setObstacles(e){this.sim.setObstacles(e)}splash(e,t,i,s){this.sim.splash(e,t,i,s)}setUnderwater(e){this.uniforms.uUnder.value=e?1:0}dispose(){}setDepthTexture(e){this.uniforms.uSceneDepth.value=e}setSize(e,t){this.uniforms.uResolution.value.set(e,t),this.refl?.setSize(Math.max(1,Math.floor(e*.5)),Math.max(1,Math.floor(t*.5)))}render(e,t,i){if(!this.hasWater||!t||!i)return;const s=this.uniforms.uTime.value,r=this.lastTime<0?1/60:Math.min(.1,Math.max(0,s-this.lastTime));this.lastTime=s,this.sim.step(e,r),this.uniforms.uWave.value=this.sim.texture;const a=this.mesh.geometry.boundingBox;this.frustum.setFromProjectionMatrix(new je().multiplyMatrices(this.cam.projectionMatrix,this.cam.matrixWorldInverse));const o=!a||this.frustum.intersectsBox(a),l=this.uniforms;if(l.uNear.value=this.cam.near,l.uFar.value=this.cam.far,o&&this.refl&&l.uUnder.value<.5&&this.cam.position.y>this.level){this.setupMirror();const u=e.clippingPlanes,h=e.autoClear;e.clippingPlanes=[this.clip],e.autoClear=!0,e.setRenderTarget(this.refl),e.render(this.worldScene,this.mirror),e.clippingPlanes=u,e.autoClear=h}if(this.copy.inputBuffer=t.texture,e.setRenderTarget(i),e.render(this.scene,this.camera),!o)return;l.uSceneColor.value=t.texture;const c=e.autoClear;e.autoClear=!1,e.render(this.waterScene,this.cam),e.autoClear=c}setupMirror(){const e=this.cam,t=this.mirror,i=new z(0,1,0),s=new z(0,this.level,0),r=new z().setFromMatrixPosition(e.matrixWorld),a=r.clone().sub(s);a.reflect(i).negate().add(s);const o=new je().extractRotation(e.matrixWorld),l=new z(0,0,-1).applyMatrix4(o).add(r),c=s.clone().sub(l);c.reflect(i).negate().add(s),t.position.copy(a),t.up.set(0,1,0).applyMatrix4(o).reflect(i),t.lookAt(c),t.near=e.near,t.far=e.far,t.updateMatrixWorld(),t.projectionMatrix.copy(e.projectionMatrix),this.uniforms.uReflMatrix.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(t.projectionMatrix).multiply(t.matrixWorldInverse)}}const Px=`
  uniform float uTime;
  attribute vec3 aOffset;   // instance world position (flame base)
  attribute float aSeed;
  attribute float aKind;    // 0 flame, 1 lamp glow
  varying vec2 vUv;
  varying float vSeed;
  varying float vKind;
  void main() {
    vUv = uv;
    vSeed = aSeed;
    vKind = aKind;
    // billboard: camera right/up from the view matrix
    vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
    vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
    float w = aKind > 0.5 ? 0.42 : 0.28, h = aKind > 0.5 ? 0.42 : 0.48;
    float sway = aKind > 0.5 ? 0.0 : sin(uTime * 6.0 + aSeed * 12.0) * 0.02 * uv.y;
    vec3 p = aOffset + right * ((uv.x - 0.5) * w + sway) + up * ((uv.y - (aKind > 0.5 ? 0.5 : 0.0)) * h);
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }`,Lx=`
  precision highp float;
  uniform float uTime;
  varying vec2 vUv;
  varying float vSeed;
  varying float vKind;
  float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash21(i), hash21(i + vec2(1,0)), f.x), mix(hash21(i + vec2(0,1)), hash21(i + vec2(1,1)), f.x), f.y);
  }
  void main() {
    vec2 uv = vUv;
    if (vKind > 0.5) {
      // lamp: a soft warm-white orb
      float r = length(uv - 0.5) * 2.0;
      float glow = smoothstep(1.0, 0.0, r);
      if (glow < 0.02) discard;
      gl_FragColor = vec4(vec3(1.0, 0.95, 0.8) * (glow * glow * 1.3 + smoothstep(0.35, 0.0, r) * 1.2), 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      return;
    }
    float t = uTime * 2.2 + vSeed * 9.0;
    // rising noise narrows the flame toward the tip
    float n = vnoise(vec2(uv.x * 4.0 + vSeed * 3.0, uv.y * 5.0 - t * 1.6)) * 0.35;
    float width = mix(0.42, 0.06, pow(uv.y, 0.8));
    float d = abs(uv.x - 0.5 + (n - 0.17) * (0.3 + uv.y)) / width;
    float body = smoothstep(1.0, 0.2, d) * smoothstep(0.0, 0.08, uv.y) * smoothstep(1.0, 0.75, uv.y);
    float core = smoothstep(0.6, 0.0, d) * smoothstep(0.0, 0.25, uv.y) * smoothstep(0.7, 0.2, uv.y);
    vec3 col = mix(vec3(1.0, 0.35, 0.05), vec3(1.0, 0.85, 0.45), core) * body * 2.2 + vec3(1.0, 0.9, 0.7) * core * 1.6;
    float flick = 0.85 + 0.15 * sin(uTime * 11.0 + vSeed * 20.0);
    if (body < 0.02) discard;
    gl_FragColor = vec4(col * flick, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;class Bx{constructor(e){this.scene=e,this.material=new dt({uniforms:{uTime:{value:0}},vertexShader:Px,fragmentShader:Lx,transparent:!0,depthWrite:!1,blending:Mr,side:Ht}),this.geo=new On(1,1),this.geo.translate(.5,.5,0)}material;meshes=new Map;geo;set(e,t){const i=this.meshes.get(e);i&&(this.scene.remove(i),i.geometry.dispose(),this.meshes.delete(e));const s=t.length/4;if(s===0)return;const r=new vd;r.index=this.geo.index,r.attributes.position=this.geo.attributes.position,r.attributes.uv=this.geo.attributes.uv,r.instanceCount=s;const a=new Float32Array(s*3),o=new Float32Array(s),l=new Float32Array(s);for(let u=0;u<s;u++)a[u*3]=t[u*4],a[u*3+1]=t[u*4+1],a[u*3+2]=t[u*4+2],l[u]=t[u*4+3],o[u]=((a[u*3]*7.31+a[u*3+2]*3.17+a[u*3+1])%1+1)%1;r.setAttribute("aOffset",new Jn(a,3)),r.setAttribute("aSeed",new Jn(o,1)),r.setAttribute("aKind",new Jn(l,1));const c=new _t(r,this.material);c.frustumCulled=!1,c.renderOrder=20,this.scene.add(c),this.meshes.set(e,c)}update(e){this.material.uniforms.uTime.value=e}get count(){let e=0;for(const t of this.meshes.values())e+=t.geometry.instanceCount;return e}}const hr=1,Mc=2,dr=8,Ux=`
  uniform float uTime;
  attribute float aSeed;
  attribute float aBorn;
  attribute float aDie;
  varying float vSeed;
  varying vec2 vUv2;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;
`;function Ac(n,e,t,i){const s=new br({color:16777215,roughness:.85,metalness:0,side:Ht,alphaTest:.5}),r={...vx(e),uTime:{value:0}};return s.defines={...bu(t,i),SC_KIND:n},s.onBeforeCompile=a=>{Object.assign(a.uniforms,r),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
`+Ux).replace("#include <begin_vertex>",`
        // a blade grows from its root when it first appears, and shrinks away when its chunk retires it
        float grow = smoothstep(0.0, 0.4, uTime - aBorn) * (1.0 - smoothstep(0.0, 0.4, uTime - aDie));
        vec3 transformed = vec3(position) * grow;
        vSeed = aSeed;
        vUv2 = uv;
        // instance origin in world space drives the wind phase
        vec3 iorigin = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        float ph = uTime * 1.7 + iorigin.x * 0.35 + iorigin.z * 0.23 + aSeed * 6.0;
        float gust = sin(ph) * 0.6 + sin(ph * 2.3 + 1.0) * 0.25 + sin(uTime * 0.4 + iorigin.x * 0.05) * 0.5;
        #if SC_KIND == 1
          // blades bend from the root, more toward the tip
          float bend = uv.y * uv.y * (0.35 + 0.25 * gust);
          transformed.x += bend * 0.6;
          transformed.z += bend * 0.3 * sin(aSeed * 9.0);
        #else
          transformed.xyz += vec3(0.04, 0.02, 0.03) * gust * uv.y;
        #endif`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vWorldPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
        vWorldNormal = normalize(mat3(modelMatrix * instanceMatrix) * objectNormal);`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
        precision highp sampler3D;
        ${wu}
        uniform float uTime;
        varying float vSeed;
        varying vec2 vUv2;
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
        ${Tu}`).replace("#include <map_fragment>",`
        #if SC_KIND == 1
          // blade: tapered, darker at the root, a little yellow at the tip
          float hw = 0.5 * (1.0 - vUv2.y * vUv2.y);
          if (abs(vUv2.x - 0.5) > hw) discard;
          vec3 root = vec3(0.10, 0.22, 0.06), tip = vec3(0.45, 0.62, 0.18);
          vec3 col = mix(root, tip, pow(vUv2.y, 1.3)) * (0.85 + 0.3 * vSeed);
        #else
          // leaf cluster: a few overlapping lobes cut from the card
          vec2 c = vUv2 - 0.5;
          float r = length(c);
          float ang = r > 1e-4 ? atan(c.y, c.x) : 0.0; // atan(0,0) is undefined on some GPUs
          float lobes = 0.30 + 0.09 * sin(ang * 5.0 + vSeed * 12.0) + 0.05 * hash21(floor(vUv2 * 6.0) + vSeed);
          if (r > lobes) discard;
          vec3 col = mix(vec3(0.10, 0.26, 0.07), vec3(0.28, 0.48, 0.14), smoothstep(0.35, 0.0, r) * 0.6 + 0.4 * vSeed);
        #endif
        diffuseColor.rgb *= col;`).replace("#include <lights_fragment_maps>",`
        {
          vec3 gN = normalize(vWorldNormal);
          if (!gl_FrontFacing) gN = -gN;
          if (length(gN) < 1e-6) gN = vec3(0.0, 1.0, 0.0);
          #if SC_GI_SH
          iblIrradiance += giIrradianceSH(vWorldPos, gN) * uGiStrength;
          #else
          iblIrradiance += giDiffuse(vWorldPos, gN).rgb * PI * uGiStrength;
          #endif
        }`).replace("#include <dithering_fragment>",`
        #include <dithering_fragment>
        if (any(isnan(gl_FragColor.rgb)) || any(isinf(gl_FragColor.rgb))) gl_FragColor.rgb = vec3(0.0);`)},s.customProgramCacheKey=()=>`splinecraft-scatter-v2-${n}-${t}-${i}`,s.__uniforms=r,s}class Fx{constructor(e,t,i,s,r=1){this.scene=e,this.density=r,this.grassMat=Ac(hr,t,i,s),this.leafMat=Ac(Mc,t,i,s),this.bladeGeo=new On(.09,.55,1,3),this.bladeGeo.translate(0,.275,0),this.leafGeo=new On(.75,.75)}grassMat;leafMat;bladeGeo;leafGeo;meshes=new Map;born=new Map;retiring=[];time=0;dummy=new Nt;density=1;count=0;set(e,t,i=this.scene,s=this.time){const r=this.meshes.get(e);if(r){for(const m of r){const f=m.geometry.getAttribute("aDie");f.array.fill(s),f.needsUpdate=!0,this.retiring.push({mesh:m,at:s}),this.count-=m.count}this.meshes.delete(e)}const a=this.born.get(e)??new Map,o=new Map,l=t.length/dr;if(l===0)return;let c=0,u=0;for(let m=0;m<l;m++)t[m*dr+7]===hr?c++:u++;const h=m=>this.density>=1||t[m*dr+6]<this.density,d=(m,f,S,x)=>{if(f===0)return null;const A=S.clone(),T=new id(A,x,f),y=new Float32Array(f),E=new Float32Array(f),D=new Float32Array(f).fill(1e9);let M=0;const _=new z(0,1,0),C=new z,U=new _i;for(let I=0;I<l;I++){const L=I*dr;if(t[L+7]!==m||!h(I))continue;const N=t[L+6];if(this.dummy.position.set(t[L],t[L+1],t[L+2]),C.set(t[L+3],t[L+4],t[L+5]),m===hr){this.dummy.quaternion.setFromAxisAngle(_,N*Math.PI*2);const O=.7+N*.7;this.dummy.scale.set(O,O,O)}else{U.setFromUnitVectors(new z(0,0,1),C),this.dummy.quaternion.copy(U).multiply(new _i().setFromAxisAngle(new z(0,0,1),N*Math.PI*2)),this.dummy.position.addScaledVector(C,.12+N*.15);const O=.75+N*.6;this.dummy.scale.set(O,O,O)}this.dummy.updateMatrix(),T.setMatrixAt(M,this.dummy.matrix),y[M]=N;const H=Math.round(N*16777216)*3+m,W=a.get(H)??s;E[M]=W,o.set(H,W),M++}return T.count=M,A.setAttribute("aSeed",new Jn(y,1)),A.setAttribute("aBorn",new Jn(E,1)),A.setAttribute("aDie",new Jn(D,1)),T.receiveShadow=!0,T.castShadow=!1,T.frustumCulled=!1,i.add(T),this.count+=M,T},p=[],g=d(hr,c,this.bladeGeo,this.grassMat);g&&p.push(g);const v=d(Mc,u,this.leafGeo,this.leafMat);v&&p.push(v),p.length&&this.meshes.set(e,p),o.size?this.born.set(e,o):this.born.delete(e)}update(e){this.time=e;for(const t of[this.grassMat,this.leafMat])t.__uniforms.uTime.value=e;if(this.retiring.length){const t=[];for(const i of this.retiring)e-i.at>.45?(i.mesh.parent?.remove(i.mesh),i.mesh.geometry.dispose()):t.push(i);this.retiring=t}}setVisible(e){for(const t of this.meshes.values())for(const i of t)i.visible=e}}const Nx=`
  uniform float uTime;
  uniform float uPixelRatio;
  attribute vec3 aOrigin;
  attribute float aSeed;
  attribute float aKind; // 0 ember, 1 firefly
  varying float vAlpha;
  varying float vKind;
  float h(float x) { return fract(sin(x * 127.1) * 43758.5453); }
  void main() {
    vKind = aKind;
    vec3 p = aOrigin;
    float size = 1.0;
    if (aKind < 0.5) {
      // ember: 2.6 s life, rises with a wobble, shrinks and fades
      float life = 2.6;
      float t = mod(uTime * (0.8 + 0.4 * aSeed) + aSeed * life, life) / life;
      p.y += t * (0.9 + 1.4 * h(aSeed + 1.0));
      p.x += sin(t * 9.0 + aSeed * 30.0) * 0.08 + (h(aSeed + 2.0) - 0.5) * 0.3 * t;
      p.z += cos(t * 7.0 + aSeed * 20.0) * 0.08 + (h(aSeed + 3.0) - 0.5) * 0.3 * t;
      vAlpha = (1.0 - t) * smoothstep(0.0, 0.1, t);
      size = 3.5 * (1.0 - t * 0.6);
    } else {
      // firefly: slow lissajous wander, blinks
      float s = aSeed * 50.0;
      p += vec3(sin(uTime * 0.31 + s), sin(uTime * 0.53 + s * 1.7) * 0.4 + 0.6, cos(uTime * 0.27 + s * 0.6)) * 1.2;
      float blink = smoothstep(0.55, 0.95, sin(uTime * (1.5 + aSeed) + s * 3.0));
      vAlpha = blink;
      size = 3.0;
    }
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = size * uPixelRatio * 60.0 / max(-mv.z, 1.0);
  }`,Ox=`
  precision highp float;
  uniform float uNight;
  varying float vAlpha;
  varying float vKind;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    if (r > 0.5) discard;
    float core = smoothstep(0.5, 0.0, r);
    vec3 col = vKind < 0.5 ? mix(vec3(1.0, 0.25, 0.03), vec3(1.0, 0.7, 0.3), core) * 3.0 : vec3(0.7, 1.0, 0.35) * 2.2 * uNight;
    float a = vAlpha * core * core;
    if (a < 0.01) discard;
    gl_FragColor = vec4(col * a, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;class zx{constructor(e,t){this.scene=e,this.material=new dt({uniforms:{uTime:{value:0},uPixelRatio:{value:t},uNight:{value:0}},vertexShader:Nx,fragmentShader:Ox,transparent:!0,depthWrite:!1,blending:Mr})}material;clouds=new Map;count=0;set(e,t,i,s,r){const a=this.clouds.get(e);a&&(this.scene.remove(a),a.geometry.dispose(),this.count-=a.geometry.getAttribute("aOrigin").count,this.clouds.delete(e));const o=14;let l=0;for(let x=0;x<t.length/4;x++)t[x*4+3]<.5&&l++;const c=l*o,u=i.length/s;let h=0;for(let x=0;x<u;x++)i[x*s+6]<r&&h++;const d=c+h;if(d===0)return;const p=new Float32Array(d*3),g=new Float32Array(d),v=new Float32Array(d);let m=0;for(let x=0;x<t.length/4;x++)for(let A=0;A<o&&!(t[x*4+3]>=.5);A++)p[m*3]=t[x*4],p[m*3+1]=t[x*4+1]+.1,p[m*3+2]=t[x*4+2],g[m]=(x*.618+A*.137)%1,v[m]=0,m++;for(let x=0;x<u;x++){const A=x*s;i[A+6]>=r||(p[m*3]=i[A],p[m*3+1]=i[A+1]+.5,p[m*3+2]=i[A+2],g[m]=i[A+6]/r,v[m]=1,m++)}const f=new Gt;f.setAttribute("position",new it(new Float32Array(d*3),3)),f.setAttribute("aOrigin",new it(p,3)),f.setAttribute("aSeed",new it(g,1)),f.setAttribute("aKind",new it(v,1));const S=new ld(f,this.material);S.frustumCulled=!1,S.renderOrder=21,this.scene.add(S),this.clouds.set(e,S),this.count+=d}update(e,t){this.material.uniforms.uTime.value=e,this.material.uniforms.uNight.value=1-t}}const kx=`
  precision highp float;
  precision highp sampler3D;
  uniform sampler2D depthBuffer;
  uniform sampler2D shadowMap;
  uniform mat4 shadowMatrix;
  uniform mat4 invProjection;
  uniform mat4 invView;
  uniform vec3 cameraPos;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform vec3 uSkyAmbient;
  uniform float uDaylight;
  uniform float uSeaLevel;
  uniform float uDensity;
  uniform float uLocal;
  uniform float uTime;
  uniform vec3 uGiSize;
  uniform sampler3D uSh0;
  uniform sampler3D uSh1;
  uniform sampler3D uSh2;
  uniform int uSteps;
  varying vec2 vUv;

  float unpackRGBAToDepth(vec4 v) { return dot(v, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0)); }
  float ign(vec2 p) { return fract(52.9829189 * fract(0.06711056 * p.x + 0.00583715 * p.y)); }

  vec3 worldFromDepth(vec2 uv, float depth) {
    vec4 clip = vec4(uv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    vec4 view = invProjection * clip;
    view /= view.w;
    return (invView * view).xyz;
  }
  float density(vec3 p) {
    // thicker low down and at night; a slow drift so it isn't a static gradient
    float h = max(p.y - uSeaLevel, 0.0);
    float base = exp(-h / 14.0);
    float night = 1.0 + 2.4 * (1.0 - uDaylight); // clear days, misty nights and dawns
    float drift = 0.85 + 0.15 * sin(p.x * 0.07 + uTime * 0.13) * sin(p.z * 0.05 - uTime * 0.09);
    return uDensity * (0.25 + base) * night * drift;
  }
  float sunVisible(vec3 p) {
    vec4 sc = shadowMatrix * vec4(p, 1.0);
    sc.xyz /= sc.w;
    if (any(lessThan(sc.xy, vec2(0.0))) || any(greaterThan(sc.xy, vec2(1.0)))) return 1.0;
    float d = unpackRGBAToDepth(textureLod(shadowMap, sc.xy, 0.0));
    return sc.z - 0.0015 <= d ? 1.0 : 0.0;
  }
  vec3 localRadiance(vec3 p) {
    vec3 uvw = p / uGiSize;
    if (any(lessThan(uvw, vec3(0.0))) || any(greaterThan(uvw, vec3(1.0)))) return vec3(0.0);
    return vec3(textureLod(uSh0, uvw, 0.0).x, textureLod(uSh1, uvw, 0.0).x, textureLod(uSh2, uvw, 0.0).x) * 0.282095;
  }
  void main() {
    float depth = textureLod(depthBuffer, vUv, 0.0).r;
    vec3 target = worldFromDepth(vUv, min(depth, 0.9999));
    vec3 ro = cameraPos;
    vec3 seg = target - ro;
    float len = length(seg);
    float maxLen = 90.0;
    if (len > maxLen) { seg *= maxLen / len; len = maxLen; }
    vec3 rd = len > 1e-4 ? seg / len : vec3(0.0, 0.0, 1.0);
    float cosT = dot(rd, uSunDir);
    // Henyey-Greenstein, forward-leaning
    const float g = 0.55;
    float hg = (1.0 - g * g) / (4.0 * 3.14159 * pow(1.0 + g * g - 2.0 * g * cosT, 1.5));
    float jitter = ign(gl_FragCoord.xy);
    float dt = len / float(uSteps);
    float T = 1.0;
    vec3 acc = vec3(0.0);
    for (int i = 0; i < 32; i++) {
      if (i >= uSteps) break;
      float t = (float(i) + jitter) * dt;
      vec3 p = ro + rd * t;
      float dens = density(p);
      vec3 sun = uSunColor * (hg * sunVisible(p)) * step(0.0, uSunDir.y);
      vec3 sky = uSkyAmbient * 0.12;
      vec3 loc = localRadiance(p) * uLocal * mix(1.0, 0.15, uDaylight); // torch glow belongs to the dark
      loc = loc / (1.0 + loc);                                             // a knee: a torch is a glow, not a sun
      vec3 S = (sun + sky + loc) * dens;
      float ext = exp(-dens * dt);
      acc += T * S * dt;
      T *= ext;
    }
    if (any(isnan(acc)) || any(isinf(acc)) || isnan(T)) { acc = vec3(0.0); T = 1.0; }
    gl_FragColor = vec4(acc, T);
  }`;class Hx extends Ot{constructor(e,t,i,s=16){super("VolumetricPass"),this.cam=e,this.sun=t,this.needsDepthTexture=!0,this.needsSwap=!1,this.target=new mt(1,1,{type:bn,depthBuffer:!1,minFilter:et,magFilter:et}),this.mat=new dt({vertexShader:"varying vec2 vUv; void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:kx,uniforms:{depthBuffer:{value:null},shadowMap:{value:null},shadowMatrix:{value:new je},invProjection:{value:new je},invView:{value:new je},cameraPos:{value:new z},uSunDir:i.uSunDir,uSunColor:i.uSkySunColor,uSkyAmbient:{value:new z(.3,.4,.6)},uDaylight:i.uDaylight,uSeaLevel:{value:22},uDensity:{value:.0085},uLocal:{value:.5},uTime:{value:0},uGiSize:i.uGiSize,uSh0:i.uSh0,uSh1:i.uSh1,uSh2:i.uSh2,uSteps:{value:s}},depthTest:!1,depthWrite:!1}),this.fullscreenMaterial=this.mat}target;mat;scale=.5;get uniforms(){return this.mat.uniforms}setDepthTexture(e){this.mat.uniforms.depthBuffer.value=e}setSize(e,t){this.target.setSize(Math.max(1,Math.floor(e*this.scale)),Math.max(1,Math.floor(t*this.scale)))}render(e){const t=this.mat.uniforms;t.shadowMap.value=this.sun.shadow.map?.texture??null,t.shadowMatrix.value.copy(this.sun.shadow.matrix),t.invProjection.value.copy(this.cam.projectionMatrixInverse),t.invView.value.copy(this.cam.matrixWorld),t.cameraPos.value.copy(this.cam.position),t.shadowMap.value&&(e.setRenderTarget(this.target),e.render(this.scene,this.camera))}}class Gx extends as{constructor(e){super("VolumetricEffect",`
      uniform sampler2D volTex;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 v = texture2D(volTex, uv);
        outputColor = vec4(inputColor.rgb * v.a + v.rgb, inputColor.a);
      }`,{blendFunction:Ye.NORMAL,uniforms:new Map([["volTex",new le(e.texture)]])})}}class Vx{gl;scene=new ss;camera;sun;ambient;sky;water;flames;scatter;particles;volumetric=null;textures;giTex;terrain;uniforms;variant="full";shaderError="";onShaderError=null;opts;fog;chunks=new Map;worldCenter;worldRadius;triangles=0;underwater=!1;composer=null;volumetricSteps=16;propagation=null;giDirty=!1;postTier=1;seaLevel;constructor(e,t,i,s,r){this.seaLevel=s,this.opts=r,this.variant=r.variant??"full",this.gl=new n0({canvas:e,antialias:r.antialias,powerPreference:"high-performance"}),this.gl.toneMapping=Un,this.gl.toneMappingExposure=.9,this.gl.outputColorSpace=nt,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=Bc,this.gl.setPixelRatio(Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.camera=new Xt(72,1,.08,1200),this.worldCenter=new z(t.sizeX/2,t.sizeY/2,t.sizeZ/2),this.worldRadius=Math.hypot(t.sizeX,t.sizeY,t.sizeZ)/2,this.fog=new No(10466248,.0032),this.scene.fog=this.fog,this.textures=r.textures,this.giTex=new dx(i);const a=As(this.textures,this.giTex,r.cheapGi,r.giMode,this.variant);this.terrain=a.material,this.uniforms=a.uniforms,this.gl.debug.onShaderError=(c,u,h,d)=>{const p=c.getProgramInfoLog(u)??"",g=c.getShaderInfoLog(d)??"",v=c.getShaderInfoLog(h)??"",m=(g||v||p).split(`
`).find(S=>/error/i.test(S))??(g||v||p).slice(0,160),f=this.gl.info.programs?.length??0;this.shaderError=`shader error (${f} programs): ${m.slice(0,200)}`,console.error("[splinecraft] shader error",{vsLog:v,fsLog:g,log:p}),this.onShaderError?.(this.shaderError),/terrain/.test(this.terrain.name)&&this.variant!=="basic"&&this.stepDownVariant()},this.sun=new md(16777215,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(r.shadowMapSize,r.shadowMapSize);const o=this.worldRadius*.85,l=this.sun.shadow.camera;if(l.left=-o,l.right=o,l.top=o,l.bottom=-o,l.near=1,l.far=this.worldRadius*4,l.updateProjectionMatrix(),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.06,this.sun.shadow.radius=2,this.sun.target.position.copy(this.worldCenter),this.scene.add(this.sun,this.sun.target),this.ambient=new gd(16777215,.02),this.scene.add(this.ambient),this.sky=new xx,this.scene.add(this.sky.mesh),this.water=new Ix(this.scene,this.camera,s,this.textures.normal,r.reflection,t.sizeX,t.sizeZ,r.reflection?4:2),this.gl.shadowMap.autoUpdate=!1,this.flames=new Bx(this.scene),this.scatter=new Fx(this.scene,this.uniforms,r.cheapGi,r.giMode,r.scatterDensity),this.particles=new zx(this.scene,Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.volumetricSteps=r.volumetricSteps,r.giMode==="sh"){const c=new gx(this.gl,this.giTex,r.giDiv);c.setSources(this.giTex.normalTexture,Wo),c.setBoost(mi);const[u,h,d]=c.textures;this.uniforms.uSh0.value=u,this.uniforms.uSh1.value=h,this.uniforms.uSh2.value=d,this.propagation=c}this.setPost(r.post),this.resize()}giUploaded(){this.giDirty=!0}stepDownVariant(){const e=this.variant==="full"?"lite":"basic";this.variant=e;const t=As(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,e);for(const s of Object.keys(t.uniforms))t.uniforms[s]=this.uniforms[s];const i=this.terrain;this.terrain=t.material;for(const s of this.chunks.values())s.material=this.terrain;i.dispose(),this.onShaderError?.(`terrain material stepped down to '${e}'`)}setPost(e){this.postTier=e,this.composer?.dispose();const t=new U0(this.gl,{frameBufferType:bn});t.addPass(new _u(this.scene,this.camera)),t.addPass(this.water);const i=[];if(this.volumetric=null,e>=2&&this.volumetricSteps>0){const s=new Hx(this.camera,this.sun,this.uniforms,this.volumetricSteps);s.uniforms.uSeaLevel.value=this.seaLevel,t.addPass(s),i.push(new Gx(s.target)),this.volumetric=s}if(e>=2){const s=new hx(this.scene,this.camera),r=s.render.bind(s);s.render=(...a)=>{const o=this.sky.mesh.visible;this.sky.mesh.visible=!1;const l=this.flames.material.visible;this.flames.material.visible=!1;const c=this.particles.material.visible;this.particles.material.visible=!1,r(...a),this.sky.mesh.visible=o,this.flames.material.visible=l,this.particles.material.visible=c},t.addPass(s),i.push(new $v(this.camera,s.texture,{samples:12,rings:5,radius:.04,intensity:1.6,luminanceInfluence:.6,resolutionScale:.5,bias:.02,distanceThreshold:.6,distanceFalloff:.1}))}e>=1&&(i.push(new Pv({luminanceThreshold:.85,luminanceSmoothing:.3,intensity:.55,mipmapBlur:!0,radius:.7})),i.push(new ax({darkness:.32,offset:.28}))),i.push(new sx({mode:Kt.ACES_FILMIC})),t.addPass(new xc(this.camera,...i)),e>=2&&t.addPass(new xc(this.camera,new Wv)),this.composer=t,this.resize()}resize(){const e=window.innerWidth,t=window.innerHeight;this.gl.setSize(e,t,!1),this.composer?.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setSun(e){const t=new z(...e.dir);this.sun.position.copy(this.worldCenter).addScaledVector(t,this.worldRadius*2);const i=Math.max(e.sun[0],e.sun[1],e.sun[2],1e-4);this.sun.color.setRGB(e.sun[0]/i,e.sun[1]/i,e.sun[2]/i),this.sun.intensity=i,this.sun.visible=i>.01;const s=this.uniforms;s.uSunDir.value.copy(t),s.uSkyZenith.value.set(...e.zenith),s.uSkyHorizon.value.set(...e.horizon),s.uSkySunColor.value.set(...e.sun),s.uDaylight.value=e.daylight,this.propagation?.setSky(e.ambient),this.volumetric&&this.volumetric.uniforms.uSkyAmbient.value.set(...e.ambient);const r=this.sky.uniforms;r.uSunDir.value.copy(t),r.uSunColor.value.set(e.sun[0]/3,e.sun[1]/3,e.sun[2]/3),r.uZenith.value.set(...e.zenith),r.uHorizon.value.set(...e.horizon),r.uDaylight.value=e.daylight;const a=this.water.uniforms;a.uSunDir.value.copy(t),a.uSunColor.value.set(...e.sun),a.uZenith.value.set(...e.zenith),a.uHorizon.value.set(...e.horizon),a.uAmbient.value.set(...e.ambient),this.ambient.intensity=.015+.02*e.daylight,this.underwater||(this.fog.color.setRGB(e.horizon[0],e.horizon[1],e.horizon[2]),this.fog.density=.0032),this.water.uniforms.fogColor.value.copy(this.fog.color),this.water.uniforms.fogDensity.value=this.fog.density}setUnderwater(e,t){this.underwater=e,e?(this.fog.color.setRGB(.03*(.3+t.daylight),.12*(.3+t.daylight),.16*(.3+t.daylight)),this.fog.density=.06):(this.fog.color.setRGB(t.horizon[0],t.horizon[1],t.horizon[2]),this.fog.density=.0032),this.water.uniforms.fogColor.value.copy(this.fog.color),this.water.uniforms.fogDensity.value=this.fog.density,this.water.setUnderwater(e)}morphs=new Map;levels=new Map;time=0;chunkGeometry(e,t,i,s){const r=new Gt;r.setAttribute("position",new it(s.positions,3)),r.setAttribute("normal",new it(s.normals,3)),r.setAttribute("aMats",new it(s.mats,3,!1)),r.setAttribute("aBary",new it(s.bary,3)),r.setAttribute("aFace",new it(s.face,4)),r.setAttribute("aMorph",new it(s.morph,3));const a=Ee*P;return r.boundingSphere=new Ci(new z((e+.5)*a,(t+.5)*a,(i+.5)*a),a*.9),r}finishMorph(e){const t=this.morphs.get(e);t&&(this.morphs.delete(e),t.pending&&(this.triangles-=t.mesh.geometry.getAttribute("position").count/3,t.mesh.geometry.dispose(),t.mesh.geometry=t.pending.geo,this.triangles+=t.pending.geo.getAttribute("position").count/3,this.levels.set(e,t.pending.level)),t.mesh.material=this.terrain,t.body.material.dispose())}setChunk(e,t,i,s,r=0){const a=qt(e,t,i);this.flames.set(a,s.emitters),this.scatter.set(a,s.scatter,void 0,this.time),this.particles.set(a,s.emitters,s.scatter,8,.012);const o=this.chunks.get(a),l=this.levels.get(a)??-1;if(this.morphs.get(a)&&this.finishMorph(a),s.vertexCount===0){o&&(this.triangles-=o.geometry.getAttribute("position").count/3,this.scene.remove(o),o.geometry.dispose(),this.chunks.delete(a)),this.levels.set(a,r);return}const u=this.chunkGeometry(e,t,i,s);if(o&&r<l&&!this.opts.cheapGi){const d=As(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);d.uniforms.uTexLocal.value=0,d.uniforms.uMorph.value=1,o.material=d.material,this.morphs.set(a,{mesh:o,body:d,t0:this.time,up:!1,pending:{geo:u,level:r}});return}o&&(this.triangles-=o.geometry.getAttribute("position").count/3,this.scene.remove(o),o.geometry.dispose());const h=new _t(u,this.terrain);if(h.castShadow=!0,h.receiveShadow=!0,o&&r>l&&!this.opts.cheapGi){const d=As(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);d.uniforms.uTexLocal.value=0,d.uniforms.uMorph.value=0,h.material=d.material,this.morphs.set(a,{mesh:h,body:d,t0:this.time,up:!0})}this.scene.add(h),this.chunks.set(a,h),this.levels.set(a,r),this.triangles+=s.vertexCount/3}stepMorphs(){for(const[e,t]of this.morphs){const i=Math.min(1,(this.time-t.t0)/Wx),s=i*i*(3-2*i);t.body.uniforms.uMorph.value=t.up?s:1-s,i>=1&&this.finishMorph(e)}}fragments=new Map;setFragment(e,t,i,s,r,a){if(this.removeFragment(e),t.vertexCount===0)return;const o=new Gt;o.setAttribute("position",new it(t.positions,3)),o.setAttribute("normal",new it(t.normals,3)),o.setAttribute("aMats",new it(t.mats,3,!1)),o.setAttribute("aBary",new it(t.bary,3)),o.setAttribute("aFace",new it(t.face,4)),o.setAttribute("aMorph",new it(t.morph,3)),o.computeBoundingSphere();const l=As(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);l.uniforms.uTexLocal.value=1,l.uniforms.uTexOrigin.value.set(a[0],a[1],a[2]);const c=new _t(o,l.material);c.castShadow=!0,c.receiveShadow=!0;const u=new xi;u.userData.body=l;const h=new xi;h.position.set(-i[0],-i[1],-i[2]),h.add(c),u.add(h),u.position.set(s[0],s[1],s[2]),u.quaternion.set(r[0],r[1],r[2],r[3]),u.userData.emitters=t.emitters,u.userData.inner=h,this.scene.add(u),this.fragments.set(e,u),this.scatter.set(-e,t.scatter,h,this.time),this.placeBodyFlames(e,u)}placeBodyFlames(e,t){const i=t.userData.emitters;if(!i||i.length===0)return;t.updateMatrixWorld(!0);const s=t.userData.inner,r=new Float32Array(i.length),a=new z;for(let o=0;o<i.length;o+=4)a.set(i[o],i[o+1],i[o+2]),s.localToWorld(a),r[o]=a.x,r[o+1]=a.y,r[o+2]=a.z,r[o+3]=i[o+3];this.flames.set(-e,r)}moveFragment(e,t,i){const s=this.fragments.get(e);s&&(s.position.set(t[0],t[1],t[2]),s.quaternion.set(i[0],i[1],i[2],i[3]),this.placeBodyFlames(e,s))}fadeFragment(e,t){const i=this.fragments.get(e);if(!i)return;const s=i.userData.body;s.uniforms.uFade.value=Math.max(0,Math.min(1,t)),s.material.polygonOffset=t<1,s.material.polygonOffsetFactor=-1,s.material.polygonOffsetUnits=-2}removeFragment(e){const t=this.fragments.get(e);t&&(this.scatter.set(-e,new Float32Array(0)),this.flames.set(-e,new Float32Array(0)),this.scene.remove(t),t.traverse(i=>{i instanceof _t&&i.geometry.dispose()}),t.userData.body.material.dispose(),this.fragments.delete(e))}get fallingCount(){return this.fragments.size}hand=null;handKind=-1;setHandItem(e){this.camera.parent||this.scene.add(this.camera),this.hand&&(this.camera.remove(this.hand),this.hand.traverse(a=>{a instanceof _t&&(a.geometry.dispose(),a.material.dispose())}),this.hand=null),this.handKind=-1,this.flames.set(-7,new Float32Array(0));const t=Zt[e];if(!t)return;const i=new xi,s=new We(t.albedo[0],t.albedo[1],t.albedo[2]),r=t.emissive?new We(t.emissive[0],t.emissive[1],t.emissive[2]).multiplyScalar(.03):new We(0,0,0);if(t.hard&&t.solid===!1){const a=new _t(new yi(.02,.1,.02),new br({color:s,roughness:.8}));a.position.y=-.03,i.add(a),this.handKind=e===Vo?1:0}else{const a=new _t(new yi(.11,.11,.11),new br({color:s,emissive:r,roughness:t.roughness??.8,metalness:t.metalness??0}));a.rotation.set(.35,-.6,.1),i.add(a)}i.position.set(.3,-.24,-.52),i.traverse(a=>{a.castShadow=!1,a.receiveShadow=!1,a.frustumCulled=!1}),this.camera.add(i),this.hand=i}handWorld(){if(!this.hand)return null;this.camera.updateMatrixWorld(!0);const e=new z(0,.06,0);return this.hand.localToWorld(e),this.handKind>=0&&this.flames.set(-7,new Float32Array([e.x,e.y,e.z,this.handKind])),e}setCursor(e,t,i,s,r){this.uniforms.uCursor.value.set(e,t,i,s),this.uniforms.uCursorShape.value=r?1:0,r&&this.uniforms.uCursorExt.value.set(r[0],r[1],r[2])}render(e){if(this.time=e,this.stepMorphs(),this.uniforms.uTime.value=e,this.water.uniforms.uTime.value=e,this.flames.update(e),this.scatter.update(e),this.particles.update(e,this.uniforms.uDaylight.value),this.sky.uniforms.uTime.value=e,this.volumetric&&(this.volumetric.uniforms.uTime.value=e),this.sky.mesh.position.copy(this.camera.position),this.propagation){this.propagation.inject(e),this.giDirty?(this.giDirty=!1,this.propagation.step(this.propagation.iterations===0?12:2)):this.propagation.step(1);const[t,i,s]=this.propagation.textures;this.uniforms.uSh0.value=t,this.uniforms.uSh1.value=i,this.uniforms.uSh2.value=s}this.gl.shadowMap.needsUpdate=!0,this.composer?this.composer.render():this.gl.render(this.scene,this.camera)}get chunkCount(){return this.chunks.size}}const Wx=.45;class Xx{workers=[];idle=[];queue=[];inflight=new Map;nextId=1;constructor(e){for(let t=0;t<e;t++){const i=new Worker(new URL(""+new URL("mesh.worker-D-zzdpyk.js",import.meta.url).href,import.meta.url),{type:"module"});i.onmessage=s=>{const r=this.inflight.get(i);this.inflight.delete(i),this.idle.push(i),r?.resolve(s.data),this.pump()},i.onerror=s=>console.error("worker error",s),this.workers.push(i),this.idle.push(i)}}get size(){return this.workers.length}get queued(){return this.queue.length+this.inflight.size}submit(e,t){const i={...e,kind:"mesh",id:this.nextId++};return this.enqueue(i,[i.density.buffer,i.material.buffer,i.hard.buffer,i.sub.buffer],t)}gen(e,t,i,s,r){return this.enqueue({kind:"gen",id:this.nextId++,cx:e,cy:t,cz:i,cfg:s},[],r)}frag(e,t,i,s,r,a,o){return this.enqueue({kind:"frag",id:this.nextId++,nx:e,ny:t,nz:i,density:s,material:r,hard:a,scatter:o},[s.buffer,r.buffer,a.buffer],-2)}textures(e){return this.enqueue({kind:"textures",id:this.nextId++,size:e},[],-1)}enqueue(e,t,i){return new Promise(s=>{this.queue.push({job:e,transfer:t,priority:i,resolve:s}),this.pump()})}reprioritize(e){for(const t of this.queue)t.job.kind==="mesh"&&(t.priority=e(t.job))}pump(){for(;this.idle.length&&this.queue.length;){let e=0;for(let s=1;s<this.queue.length;s++)this.queue[s].priority<this.queue[e].priority&&(e=s);const t=this.queue.splice(e,1)[0],i=this.idle.pop();this.inflight.set(i,t),i.postMessage(t.job,t.transfer)}}}class Yx{constructor(e){this.canvas=e,window.addEventListener("keydown",t=>{t.repeat||(this.keys.add(t.code),this.pressed.add(t.code),["Space","Tab","KeyQ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&(this.locked||this.freeMouse)&&t.preventDefault())}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseDown=[!1,!1,!1]}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===e,this.locked||(this.mouseDown=[!1,!1,!1])}),e.addEventListener("mousemove",t=>{if(!this.locked)return;this.yaw-=t.movementX*this.sens,this.pitch-=t.movementY*this.sens;const i=Math.PI/2-.01;this.pitch=Math.max(-i,Math.min(i,this.pitch))}),e.addEventListener("mousedown",t=>{this.locked&&(t.preventDefault(),t.button<3&&(this.mouseDown[t.button]=!0,this.mouseClick[t.button]=!0))}),window.addEventListener("mouseup",t=>{t.button<3&&(this.mouseDown[t.button]=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("wheel",t=>{this.locked&&(t.preventDefault(),this.wheel+=Math.sign(t.deltaY))},{passive:!1})}keys=new Set;pressed=new Set;yaw=0;pitch=0;wheel=0;mouseDown=[!1,!1,!1];mouseClick=[!1,!1,!1];locked=!1;freeMouse=!1;sens=.0022;requestLock(){this.canvas.requestPointerLock?.()}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}flush(){this.pressed.clear(),this.mouseClick=[!1,!1,!1],this.wheel=0}}class Qx{root;hotbar;slots=[];status;clock;debug;toast;toastTimer=0;overlay;loading;loadingBar;loadingText;lastStatus="";lastDebug="";onNewWorld=null;onResetEdits=null;onLoadWorld=null;onRenameWorld=null;onDeleteWorld=null;onQuality=null;onFoliage=null;onFall=null;onResume=null;onSelectSlot=null;onTime=null;onTimeFlow=null;onCopyLink=null;onMenu=null;errorEl=null;timeSliders=[];dragging=!1;constructor(){this.root=document.getElementById("hud"),this.hotbar=document.getElementById("hotbar"),this.status=document.getElementById("status"),this.clock=document.getElementById("clock"),this.debug=document.getElementById("debug"),this.toast=document.getElementById("toast"),this.overlay=document.getElementById("overlay"),this.loading=document.getElementById("loading"),this.loadingBar=document.getElementById("loading-bar"),this.loadingText=document.getElementById("loading-text"),document.getElementById("btn-play").addEventListener("click",()=>this.onResume?.()),document.getElementById("btn-new").addEventListener("click",()=>{const e=document.getElementById("seed-input").value.trim(),t=e===""?Math.floor(Math.random()*1e9):Du(e),i=document.getElementById("size-select");this.onNewWorld?.(t,i?Number(i.value):8)}),document.getElementById("btn-reset").addEventListener("click",()=>{confirm("Erase every edit in this world? The terrain regenerates from its seed.")&&this.onResetEdits?.()});for(const e of["time-slider","time-slider-menu"]){const t=document.getElementById(e);t&&(this.timeSliders.push(t),t.addEventListener("input",()=>{this.dragging=!0,this.onTime?.(Number(t.value))}),t.addEventListener("change",()=>{this.dragging=!1}))}document.getElementById("time-flow")?.addEventListener("click",()=>this.onTimeFlow?.()),document.getElementById("btn-copy")?.addEventListener("click",()=>this.onCopyLink?.()),document.getElementById("gear")?.addEventListener("click",()=>this.onMenu?.()),this.errorEl=document.getElementById("error-strip"),this.errorEl?.addEventListener("click",()=>{this.errorEl&&(this.errorEl.hidden=!0)}),document.getElementById("fall-select")?.addEventListener("change",e=>{this.onFall?.(Number(e.target.value))}),document.getElementById("foliage-select")?.addEventListener("change",e=>{this.onFoliage?.(Number(e.target.value))}),document.getElementById("quality-select").addEventListener("change",e=>{this.onQuality?.(e.target.value)})}setLoading(e,t){this.loading.hidden=!1,this.loadingBar.style.width=`${Math.round(e*100)}%`,this.loadingText.textContent=t}hideLoading(){this.loading.hidden=!0}showOverlay(e,t,i=1,s=7){const r=document.getElementById("fall-select");r&&(r.value=String(s),r.value!==String(s)&&(r.value="7")),this.overlay.hidden=!1,this.root.classList.add("dim"),document.getElementById("seed-label").textContent=String(e),document.getElementById("quality-select").value=t;const a=document.getElementById("foliage-select");a&&(a.value=String(i),a.value!==String(i)&&(a.value="1"))}hideOverlay(){this.overlay.hidden=!0,this.root.classList.remove("dim")}renderWorlds(e,t){const i=document.getElementById("worlds");if(!i)return;i.innerHTML="";const s=[...e].sort((r,a)=>r.seed===t?-1:a.seed===t?1:a.updatedAt-r.updatedAt);for(const r of s){const a=document.createElement("div");a.className="world"+(r.seed===t?" current":"");const o=document.createElement("button");o.className="wname",o.textContent=r.name,o.title=r.seed===t?"this world":"load this world",o.addEventListener("click",()=>this.onLoadWorld?.(r.seed));const l=document.createElement("span");l.className="wmeta",l.textContent=`seed ${r.seed} · ${(r.chunks??8)*16} m${r.seed===t?" · playing":r.updatedAt?" · "+Kx(r.updatedAt):""}`;const c=document.createElement("button");c.className="wbtn",c.textContent="✎",c.title="rename",c.addEventListener("click",()=>{const h=prompt("World name",r.name);h!==null&&this.onRenameWorld?.(r.seed,h)});const u=document.createElement("button");u.className="wbtn",u.textContent="✕",u.title="delete this world and its edits",u.addEventListener("click",()=>{confirm(`Delete "${r.name}" and every edit in it?`)&&this.onDeleteWorld?.(r.seed)}),a.append(o,l,c,u),i.appendChild(a)}if(!s.length){const r=document.createElement("div");r.className="wmeta",r.textContent="no saved worlds yet",i.appendChild(r)}}get overlayVisible(){return!this.overlay.hidden}buildHotbar(e){this.hotbar.innerHTML="",this.slots=[],Mn.forEach((t,i)=>{const s=document.createElement("div");s.className="slot";const r=document.createElement("canvas");r.width=16,r.height=16;const a=r.getContext("2d"),o=a.createImageData(16,16),l=e.swatches[t.id];for(let h=0;h<256;h++)o.data[h*4]=l[h*3],o.data[h*4+1]=l[h*3+1],o.data[h*4+2]=l[h*3+2],o.data[h*4+3]=255;a.putImageData(o,0,0);const c=document.createElement("span");c.className="key",c.textContent=qx[i]??"";const u=document.createElement("span");u.className="name",u.textContent=t.name,s.append(r,c,u),s.addEventListener("pointerdown",h=>{h.preventDefault(),this.onSelectSlot?.(i)}),this.hotbar.appendChild(s),this.slots.push(s)})}setSelected(e){this.slots.forEach((t,i)=>t.classList.toggle("sel",i===e))}setStatus(e){e!==this.lastStatus&&(this.status.textContent=e,this.lastStatus=e)}setClock(e,t){this.clock.textContent=e;const i=document.getElementById("time-label");if(i&&(i.textContent=e),t!==void 0&&!this.dragging)for(const s of this.timeSliders)s.value=t.toFixed(2)}setDebug(e){e!==this.lastDebug&&(this.debug.textContent=e,this.lastDebug=e)}showError(e){this.errorEl&&(this.errorEl.textContent=e,this.errorEl.hidden=!1)}say(e,t=1800){this.toast.textContent=e,this.toast.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toast.classList.remove("show"),t)}}const qx=["1","2","3","4","5","6","7","8","9","0","-","=","[","]","\\"],Sc=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","BracketLeft","BracketRight","Backslash"];function Du(n){if(/^\d+$/.test(n))return Number(n)>>>0;let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Kx(n){const e=(Date.now()-n)/1e3;return e<90?"just now":e<5400?`${Math.round(e/60)} min ago`:e<172800?`${Math.round(e/3600)} h ago`:`${Math.round(e/86400)} d ago`}class jx{constructor(e){if(this.layer=e,this.stickEl=document.getElementById("stick"),this.thumbEl=document.getElementById("stick-thumb"),this.enabled=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,!this.enabled)return;document.body.classList.add("touch"),e.addEventListener("pointerdown",s=>{s.target.closest("button, .slot")||(s.preventDefault(),e.setPointerCapture(s.pointerId),s.clientX<window.innerWidth*.45&&this.stickId<0?(this.stickId=s.pointerId,this.stickOrigin=[s.clientX,s.clientY],this.stickEl.style.left=`${s.clientX-60}px`,this.stickEl.style.top=`${s.clientY-60}px`,this.stickEl.classList.add("active"),this.thumbEl.style.transform="translate(0,0)"):this.lookId<0&&(this.lookId=s.pointerId,this.lookLast=[s.clientX,s.clientY]))}),e.addEventListener("pointermove",s=>{if(s.pointerId===this.stickId){const r=s.clientX-this.stickOrigin[0],a=s.clientY-this.stickOrigin[1],o=50,l=Math.hypot(r,a),c=l>o?o/l:1;this.moveX=r*c/o,this.moveY=-(a*c)/o,this.thumbEl.style.transform=`translate(${r*c}px, ${a*c}px)`}else s.pointerId===this.lookId&&(this.lookDX+=s.clientX-this.lookLast[0],this.lookDY+=s.clientY-this.lookLast[1],this.lookLast=[s.clientX,s.clientY])});const t=s=>{s.pointerId===this.stickId?(this.stickId=-1,this.moveX=0,this.moveY=0,this.stickEl.classList.remove("active")):s.pointerId===this.lookId&&(this.lookId=-1)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t);const i=(s,r)=>{const a=document.getElementById(s);a.addEventListener("pointerdown",l=>{l.preventDefault(),a.setPointerCapture(l.pointerId),r(!0),a.classList.add("down")});const o=()=>{r(!1),a.classList.remove("down")};a.addEventListener("pointerup",o),a.addEventListener("pointercancel",o)};i("tb-jump",s=>this.jump=s),i("tb-duck",s=>this.duck=s),i("tb-dig",s=>this.dig=s),i("tb-add",s=>this.add=s),i("tb-smooth",s=>this.smooth=s),i("tb-paint",s=>this.paint=s);for(const s of["tb-fly","tb-size-down","tb-size-up","tb-shape","tb-snap","tb-menu","tb-undo"])document.getElementById(s)?.addEventListener("pointerdown",a=>{a.preventDefault(),this.taps.add(s)})}enabled=!1;moveX=0;moveY=0;lookDX=0;lookDY=0;jump=!1;dig=!1;add=!1;smooth=!1;paint=!1;duck=!1;taps=new Set;stickId=-1;lookId=-1;stickOrigin=[0,0];lookLast=[0,0];stickEl;thumbEl;tapped(e){return this.taps.has(e)}get heldOp(){return this.add?"add":this.smooth?"smooth":this.paint?"paint":null}setFly(e){const t=document.getElementById("tb-duck");t&&(t.textContent=e?"down":"duck");const i=document.getElementById("tb-jump");i&&(i.textContent=e?"up":"jump");const s=document.getElementById("tb-fly");s&&(s.textContent=e?"walk":"fly")}flush(){this.lookDX=0,this.lookDY=0,this.taps.clear()}}const Or="splinecraft.v1.";function Zx(n){try{const e=localStorage.getItem(Or+"world."+n);return e?f0(e):[]}catch{return[]}}function _c(n){try{localStorage.removeItem(Or+"world."+n)}catch{}}function Ru(){try{const n=localStorage.getItem(Or+"settings");return n?JSON.parse(n):{}}catch{return{}}}function qi(n){try{localStorage.setItem(Or+"settings",JSON.stringify({...Ru(),...n}))}catch{}}const Iu=4096;function Ta(n,e,t,i){const s=Ee+1,r=new Int16Array(s*s*s),a=new Uint8Array(s*s*s),o=new Uint8Array(s*s*s),l=new Uint32Array(s*s*s),c=new Uint8Array(s*s*s);let u=!1,h=!1,d=0;for(let p=0;p<s;p++)for(let g=0;g<s;g++)for(let v=0;v<s;v++,d++){const m=e*Ee+p,f=t*Ee+g,S=i*Ee+v;if(!n.inBounds(m,f,S))continue;const x=n.index(m,f,S);r[d]=Math.round(Math.max(-ct,Math.min(ct,n.density[x]))*Iu),a[d]=n.material[x],o[d]=n.hard[x],l[d]=n.sub[x],l[d]!==0&&(u=!0),c[d]=n.water[x],c[d]!==0&&(h=!0)}return{cx:e,cy:t,cz:i,n:s,density:r,material:a,hard:o,sub:u?l:null,water:h?c:null}}function yc(n,e){const t=e.n;let i=0;for(let s=0;s<t;s++)for(let r=0;r<t;r++)for(let a=0;a<t;a++,i++){const o=e.cx*Ee+s,l=e.cy*Ee+r,c=e.cz*Ee+a;if(!n.inBounds(o,l,c))continue;const u=n.index(o,l,c);n.density[u]=e.density[i]/Iu,n.material[u]=e.material[i],n.hard[u]=e.hard[i],n.sub[u]=e.sub?e.sub[i]:0,e.water!==void 0&&(n.water[u]=e.water?e.water[i]:0)}}function Qi(n,e,t,i){const s=[],r=o=>Math.max(0,Math.floor((o-1)/Ee)),a=(o,l)=>Math.min(l-1,Math.floor(o/Ee));for(let o=r(n.x0);o<=a(n.x1,e);o++)for(let l=r(n.y0);l<=a(n.y1,t);l++)for(let c=r(n.z0);c<=a(n.z1,i);c++)s.push([o,l,c]);return s}const Jx="splinecraft",ei="chunks",Jt="worlds",wi=n=>String(n);function Di(){return new Promise(n=>{try{const e=indexedDB.open(Jx,2);e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(ei)||t.createObjectStore(ei),t.objectStoreNames.contains(Jt)||t.createObjectStore(Jt,{keyPath:"id"})},e.onsuccess=()=>n(e.result),e.onerror=()=>n(null),e.onblocked=()=>n(null)}catch{n(null)}})}const $x=(n,e,t,i)=>`${n}/${e},${t},${i}`,Pu=n=>IDBKeyRange.bound(`${n}/`,`${n}/￿`);async function eM(n){const e=await Di();return e?new Promise(t=>{const i=[],s=e.transaction(ei,"readonly"),r=s.objectStore(ei).openCursor(Pu(wi(n)));r.onsuccess=()=>{const a=r.result;if(!a){t(i);return}const o=a.value;o&&o.density&&o.material&&o.hard&&i.push(o),a.continue()},r.onerror=()=>t(i),s.onerror=()=>t(i)}):[]}async function Ec(n,e){const t=await Di();t&&await new Promise(i=>{const s=t.transaction([ei,Jt],"readwrite"),r=s.objectStore(ei),a=wi(n);for(const c of e)r.put(c,$x(a,c.cx,c.cy,c.cz));const o=s.objectStore(Jt),l=o.get(a);l.onsuccess=()=>{const c=l.result??{id:a,name:jo(n),seed:n,createdAt:Date.now(),updatedAt:0,edited:0};o.put({...c,updatedAt:Date.now(),edited:(c.edited??0)+e.length})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}const jo=n=>`World ${n}`;async function tM(){const n=await Di();return n?new Promise(e=>{const t=n.transaction(Jt,"readonly"),i=t.objectStore(Jt).getAll();i.onsuccess=()=>e((i.result??[]).sort((s,r)=>r.updatedAt-s.updatedAt)),i.onerror=()=>e([]),t.onerror=()=>e([])}):[]}async function nM(n){const e=await Di();return e?new Promise(t=>{const i=e.transaction(Jt,"readonly"),s=i.objectStore(Jt).get(wi(n));s.onsuccess=()=>t(s.result??null),s.onerror=()=>t(null),i.onerror=()=>t(null)}):null}async function iM(n,e){const t=await Di();return t?new Promise(i=>{const s=t.transaction(Jt,"readwrite"),r=s.objectStore(Jt),a=wi(n),o=r.get(a);let l=null;o.onsuccess=()=>{const c=o.result??{id:a,name:jo(n),seed:n,createdAt:Date.now(),updatedAt:0,edited:0,chunks:e};l={...c,chunks:c.chunks??e,updatedAt:Date.now()},r.put(l)},s.oncomplete=()=>i(l),s.onerror=()=>i(null),s.onabort=()=>i(null)}):null}async function sM(n,e){const t=await Di();t&&await new Promise(i=>{const s=t.transaction(Jt,"readwrite"),r=s.objectStore(Jt),a=wi(n),o=r.get(a);o.onsuccess=()=>{const l=o.result??{id:a,name:e,seed:n,createdAt:Date.now(),updatedAt:Date.now(),edited:0};r.put({...l,name:e.trim()||jo(n)})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}async function wc(n){const e=await Di();e&&await new Promise(t=>{const i=e.transaction([ei,Jt],"readwrite");i.objectStore(ei).delete(Pu(wi(n))),i.objectStore(Jt).delete(wi(n)),i.oncomplete=()=>t(),i.onerror=()=>t(),i.onabort=()=>t()})}const Zo=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Lu=2,rM=7,aM=9.8,oM=.6,lM=.45,cM=14;function uM(n,e){return n?{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}:e}function Bu(n,e,t,i,s,r,a,o){const l=n.density,c=n.material,u=new Float32Array(r*a*o).fill(-ct),h=new Uint8Array(r*a*o),d=[],p=new Set;for(const[T,y,E]of e)p.add(n.index(T,y,E));for(let T=0;T<r;T++)for(let y=0;y<a;y++)for(let E=0;E<o;E++){const D=t+T,M=i+y,_=s+E;if(!n.inBounds(D,M,_))continue;const C=n.index(D,M,_),U=(T*a+y)*o+E;p.has(C)?(u[U]=l[C],h[U]=c[C],d.push([T,y,E])):l[C]<=0?(u[U]=l[C],h[U]=c[C]):(u[U]=-P*.5,h[U]=c[C])}for(const[T,y,E]of e)l[n.index(T,y,E)]=-ct;const g=new Uint8Array(r*a*o),v=[],m=new Set;for(const[T,y,E]of e)for(let D=-1;D<=0;D++)for(let M=-1;M<=0;M++)for(let _=-1;_<=0;_++){const C=T+D,U=y+M,I=E+_;if(!n.inBounds(C,U,I))continue;const L=n.getHard(C,U,I);if(L===0||Et(L))continue;const N=n.index(C,U,I);if(m.has(N))continue;m.add(N);const H=C-t,W=U-i,O=I-s;H<0||W<0||O<0||H>=r-1||W>=a-1||O>=o-1||(g[(H*a+W)*o+O]=L,v.push({x:H,y:W,z:O,mat:L}),n.setHard(C,U,I,0),n.sub[N]=0)}const f=[0,0,0];for(const[T,y,E]of d)f[0]+=T,f[1]+=y,f[2]+=E;f[0]=f[0]/d.length*P,f[1]=f[1]/d.length*P,f[2]=f[2]/d.length*P;const S=(T,y,E)=>T<0||y<0||E<0||T>=r||y>=a||E>=o?-1:u[(T*a+y)*o+E],x=[];let A=0;for(const[T,y,E]of d){const D=T*P-f[0],M=y*P-f[1],_=E*P-f[2];A=Math.max(A,Math.hypot(D,M,_));let C=!1;for(const[U,I,L]of Zo)if(S(T+U,y+I,E+L)<=0){C=!0;break}C&&x.push([D,M,_])}return{ox:t,oy:i,oz:s,nx:r,ny:a,nz:o,density:u,material:h,hard:g,items:v,solid:d,contacts:x,com:f,radius:Math.max(A,P),pos:[t*P+f[0],i*P+f[1],s*P+f[2]],q:[0,0,0,1],vel:[0,0,0],ang:[0,0,0],rest:0,age:0,settled:!1,touching:!1,texOrigin:[t*P,i*P,s*P]}}function Uu(n){return new Fr(n.nx,n.ny,n.nz,0,0,0,n.density,n.material,n.hard)}function To(n,e,t=[0,0,0]){return ut[0]=e[0]-n.pos[0],ut[1]=e[1]-n.pos[1],ut[2]=e[2]-n.pos[2],ti(zr(n.q),ut,t),t[0]+=n.com[0],t[1]+=n.com[1],t[2]+=n.com[2],t}function Jo(n,e,t=[0,0,0]){return ut[0]=e[0]-n.com[0],ut[1]=e[1]-n.com[1],ut[2]=e[2]-n.com[2],ti(n.q,ut,t),t[0]+=n.pos[0],t[1]+=n.pos[1],t[2]+=n.pos[2],t}function hM(n,e,t,i){const s=zr(n.q),r=To(n,e),a=[0,0,0];ti(s,t,a);const o=gu(Uu(n),r,a,i,.08);if(!o)return null;const l=Jo(n,o.point),c=[0,0,0];return ti(n.q,o.normal,c),{point:l,normal:c,distance:o.distance,material:o.material,hard:!1}}function dM(n,e,t,i,s,r,a){const o=Math.min(0,e),l=Math.min(0,t),c=Math.min(0,i),u=Math.max(n.nx-1,s),h=Math.max(n.ny-1,r),d=Math.max(n.nz-1,a);if(o===0&&l===0&&c===0&&u===n.nx-1&&h===n.ny-1&&d===n.nz-1)return;const p=u-o+1,g=h-l+1,v=d-c+1,m=new Float32Array(p*g*v).fill(-ct),f=new Uint8Array(p*g*v),S=new Uint8Array(p*g*v);for(let x=0;x<n.nx;x++)for(let A=0;A<n.ny;A++)for(let T=0;T<n.nz;T++){const y=(x*n.ny+A)*n.nz+T,E=((x-o)*g+(A-l))*v+(T-c);m[E]=n.density[y],f[E]=n.material[y],S[E]=n.hard[y]}n.density=m,n.material=f,n.hard=S,n.nx=p,n.ny=g,n.nz=v;for(const x of n.items)x.x-=o,x.y-=l,x.z-=c;n.com[0]-=o*P,n.com[1]-=l*P,n.com[2]-=c*P,n.texOrigin[0]+=o*P,n.texOrigin[1]+=l*P,n.texOrigin[2]+=c*P,n.ox+=o,n.oy+=l,n.oz+=c}function fM(n){const{nx:e,ny:t,nz:i}=n,s=(u,h,d)=>u<0||h<0||d<0||u>=e||h>=t||d>=i?-1:n.density[(u*t+h)*i+d],r=[];for(let u=0;u<e;u++)for(let h=0;h<t;h++)for(let d=0;d<i;d++)s(u,h,d)>0&&r.push([u,h,d]);if(n.solid=r,!r.length){n.contacts=[];return}const a=[0,0,0];for(const[u,h,d]of r)a[0]+=u,a[1]+=h,a[2]+=d;a[0]=a[0]/r.length*P,a[1]=a[1]/r.length*P,a[2]=a[2]/r.length*P;const o=[a[0]-n.com[0],a[1]-n.com[1],a[2]-n.com[2]];ti(n.q,o,ut),n.pos[0]+=ut[0],n.pos[1]+=ut[1],n.pos[2]+=ut[2],n.com=a;const l=[];let c=0;for(const[u,h,d]of r){const p=u*P-a[0],g=h*P-a[1],v=d*P-a[2];c=Math.max(c,Math.hypot(p,g,v));let m=!1;for(const[f,S,x]of Zo)if(s(u+f,h+S,d+x)<=0){m=!0;break}m&&l.push([p,g,v])}n.contacts=l,n.radius=Math.max(c,P),n.rest=0,n.settled=!1}function pM(n,e){if(e.op==="add"&&jn(e.mat))return[n];const t=To(n,[e.x,e.y,e.z]),i=e.size*.5+P*2;e.op==="add"&&dM(n,Math.floor((t[0]-i)/P),Math.floor((t[1]-i)/P),Math.floor((t[2]-i)/P),Math.ceil((t[0]+i)/P),Math.ceil((t[1]+i)/P),Math.ceil((t[2]+i)/P));const s=To(n,[e.x,e.y,e.z]),r={...e,x:s[0],y:s[1],z:s[2]},a=Uu(n);ys(a,r);const{nx:o,ny:l,nz:c}=n,u=n.density,h=new Uint8Array(o*l*c),d=[];for(let g=0;g<o;g++)for(let v=0;v<l;v++)for(let m=0;m<c;m++){const f=(g*l+v)*c+m;if(u[f]<=0||h[f])continue;const S=[],x=[g,v,m];for(h[f]=1;x.length;){const A=x.pop(),T=x.pop(),y=x.pop();S.push([y,T,A]);for(const[E,D,M]of Zo){const _=y+E,C=T+D,U=A+M;if(_<0||C<0||U<0||_>=o||C>=l||U>=c)continue;const I=(_*l+C)*c+U;u[I]<=0||h[I]||(h[I]=1,x.push(_,C,U))}}if(S.length<=Lu){for(const[A,T,y]of S)u[(A*l+T)*c+y]=-ct;continue}d.push(S)}if(d.length===0)return[];if(d.length===1)return fM(n),[n];const p=[];for(const g of d){let v=1/0,m=1/0,f=1/0,S=-1/0,x=-1/0,A=-1/0;for(const[E,D,M]of g)v=Math.min(v,E),m=Math.min(m,D),f=Math.min(f,M),S=Math.max(S,E),x=Math.max(x,D),A=Math.max(A,M);const T=Bu(a,g,v-1,m-1,f-1,S-v+3,x-m+3,A-f+3),y=Jo(n,T.pos);T.pos=y,T.q=[n.q[0],n.q[1],n.q[2],n.q[3]],T.vel=[n.vel[0],n.vel[1],n.vel[2]],T.ang=[n.ang[0],n.ang[1],n.ang[2]],T.texOrigin=[n.texOrigin[0]+(v-1)*P,n.texOrigin[1]+(m-1)*P,n.texOrigin[2]+(f-1)*P],p.push(T)}return p}function ti(n,e,t){const[i,s,r,a]=n,[o,l,c]=e,u=a*o+s*c-r*l,h=a*l+r*o-i*c,d=a*c+i*l-s*o,p=-i*o-s*l-r*c;return t[0]=u*a+p*-i+h*-r-d*-s,t[1]=h*a+p*-s+d*-i-u*-r,t[2]=d*a+p*-r+u*-s-h*-i,t}function zr(n){return[-n[0],-n[1],-n[2],n[3]]}function mM(n,e,t){const[i,s,r]=e,[a,o,l,c]=n,u=.5*t*(i*c+s*l-r*o),h=.5*t*(s*c+r*a-i*l),d=.5*t*(r*c+i*o-s*a),p=.5*t*(-i*a-s*o-r*l);let g=a+u,v=o+h,m=l+d,f=c+p;const S=Math.hypot(g,v,m,f)||1;n[0]=g/S,n[1]=v/S,n[2]=m/S,n[3]=f/S}const ut=[0,0,0],fi=[0,0,0];function gM(n,e,t,i=rM){if(e.settled)return;e.age+=t;const s=e.vel,r=e.ang;s[1]-=aM*t;const a=Math.hypot(s[0],s[1],s[2]);if(a>i){const m=i/a;s[0]*=m,s[1]*=m,s[2]*=m}e.pos[0]+=s[0]*t,e.pos[1]+=s[1]*t,e.pos[2]+=s[2]*t,mM(e.q,r,t);const o=1,l=1/(.4*e.radius*e.radius);let c=0,u=0,h=0,d=0;e.touching=!1;for(const m of e.contacts){ti(e.q,m,ut);const f=e.pos[0]+ut[0],S=e.pos[1]+ut[1],x=e.pos[2]+ut[2];let A,T=0,y=1,E=0;if(S<0)A=-S;else{const N=n.sample(f,S,x),H=n.hardAt(f,S,x)!==0&&n.hardOccupiedAt(f,S,x);if(N<=0&&!H)continue;A=H?Math.max(N,.12):N,n.gradient(f,S,x,fi);const W=Math.hypot(fi[0],fi[1],fi[2]);W>1e-4&&!H&&(T=-fi[0]/W,y=-fi[1]/W,E=-fi[2]/W)}A=Math.min(A,.5),e.touching=!0;const D=ut[0],M=ut[1],_=ut[2],C=s[0]+(r[1]*_-r[2]*M),U=s[1]+(r[2]*D-r[0]*_),I=s[2]+(r[0]*M-r[1]*D),L=C*T+U*y+I*E;if(L<0){const N=M*E-_*y,H=_*T-D*E,W=D*y-M*T,O=o+l*(N*N+H*H+W*W),K=-1.12*L/O;s[0]+=K*T*o,s[1]+=K*y*o,s[2]+=K*E*o,r[0]+=l*N*K,r[1]+=l*H*K,r[2]+=l*W*K;const re=C-L*T,ce=U-L*y,Ce=I-L*E,Ue=Math.hypot(re,ce,Ce);if(Ue>1e-4){const ke=re/Ue,Re=ce/Ue,Q=Ce/Ue,Z=M*Q-_*Re,ee=_*ke-D*Q,Se=D*Re-M*ke,me=o+l*(Z*Z+ee*ee+Se*Se),ze=Math.min(Ue/me,oM*K);s[0]-=ze*ke*o,s[1]-=ze*Re*o,s[2]-=ze*Q*o,r[0]-=l*Z*ze,r[1]-=l*ee*ze,r[2]-=l*Se*ze}}c+=T*A,u+=y*A,h+=E*A,d++}d>0&&(e.pos[0]+=c/d*1.05,e.pos[1]+=u/d*1.05,e.pos[2]+=h/d*1.05);const p=Math.exp(-t*(d>0?.9:.05));s[0]*=p,s[2]*=p,d>0&&(s[1]*=p);const g=Math.exp(-t*(d>0?1.1:.3));r[0]*=g,r[1]*=g,r[2]*=g,e.pos[0]=Math.min(n.sizeX-e.radius,Math.max(e.radius,e.pos[0])),e.pos[2]=Math.min(n.sizeZ-e.radius,Math.max(e.radius,e.pos[2]));const v=d>0&&Math.hypot(s[0],s[1],s[2])<.25&&Math.hypot(r[0],r[1],r[2])<.35;e.rest=v?e.rest+t:0,(e.rest>lM||e.age>cM)&&(e.settled=!0)}function Fu(n,e,t,i){const s=e/P,r=t/P,a=i/P,o=Math.floor(s),l=Math.floor(r),c=Math.floor(a);if(o<0||l<0||c<0||o>=n.nx-1||l>=n.ny-1||c>=n.nz-1)return-ct;const u=s-o,h=r-l,d=a-c,p=(A,T,y)=>n.density[(A*n.ny+T)*n.nz+y],g=p(o,l,c)+(p(o+1,l,c)-p(o,l,c))*u,v=p(o,l,c+1)+(p(o+1,l,c+1)-p(o,l,c+1))*u,m=p(o,l+1,c)+(p(o+1,l+1,c)-p(o,l+1,c))*u,f=p(o,l+1,c+1)+(p(o+1,l+1,c+1)-p(o,l+1,c+1))*u,S=g+(m-g)*h,x=v+(f-v)*h;return S+(x-S)*d}function vM(n,e){const t=e.radius+P*2;return{x0:Math.max(0,Math.floor((e.pos[0]-t)/P)),y0:Math.max(0,Math.floor((e.pos[1]-t)/P)),z0:Math.max(0,Math.floor((e.pos[2]-t)/P)),x1:Math.min(n.nx-1,Math.ceil((e.pos[0]+t)/P)),y1:Math.min(n.ny-1,Math.ceil((e.pos[1]+t)/P)),z1:Math.min(n.nz-1,Math.ceil((e.pos[2]+t)/P))}}function xM(n,e){const t=(e.x1-e.x0+1)*(e.y1-e.y0+1)*(e.z1-e.z0+1),i=new Float32Array(t),s=new Uint8Array(t);let r=0;for(let a=e.x0;a<=e.x1;a++)for(let o=e.y0;o<=e.y1;o++)for(let l=e.z0;l<=e.z1;l++,r++){const c=n.index(a,o,l);i[r]=n.density[c],s[r]=n.material[c]}return{d:i,m:s}}function MM(n,e,t){if(t<=1e-6)return Math.max(n,e);const i=Math.max(0,Math.min(1,.5+.5*(e-n)/t));return n+(e-n)*i+t*i*(1-i)}function Tc(n,e,t,i,s,r){const a=n.density,o=n.material,l=zr(e.q),c=[0,0,0];let u=0;for(let h=t.x0;h<=t.x1;h++)for(let d=t.y0;d<=t.y1;d++)for(let p=t.z0;p<=t.z1;p++,u++){const g=n.index(h,d,p);ut[0]=h*P-e.pos[0],ut[1]=d*P-e.pos[1],ut[2]=p*P-e.pos[2],ti(l,ut,c);const v=c[0]+e.com[0],m=c[1]+e.com[1],f=c[2]+e.com[2],S=Fu(e,v,m,f)-s,x=i.d[u];if(d>=n.ny-1||S<=-P){a[g]=x,o[g]=i.m[u];continue}const A=Math.min(ct,MM(x,S,r));if(a[g]=A,S>x&&S>0){const T=Math.min(e.nx-1,Math.max(0,Math.round(v/P))),y=Math.min(e.ny-1,Math.max(0,Math.round(m/P))),E=Math.min(e.nz-1,Math.max(0,Math.round(f/P)));o[g]=e.material[(T*e.ny+y)*e.nz+E]||i.m[u]}else o[g]=i.m[u]}}function Nu(n,e,t=[0,0,0]){return Jo(n,[(e.x+.5)*P,(e.y+.5)*P,(e.z+.5)*P],t)}function AM(n,e){const t=n.density,i=n.material;for(const v of e.items){const m=Nu(e,v),f=Math.floor(m[0]/P),S=Math.floor(m[1]/P),x=Math.floor(m[2]/P);n.inBounds(f,S,x)&&f<n.nx-1&&S<n.ny-1&&x<n.nz-1&&n.getHard(f,S,x)===0&&(n.setHard(f,S,x,v.mat),n.sub[n.index(f,S,x)]=0)}const s=e.radius+P,r=Math.max(0,Math.floor((e.pos[0]-s)/P)),a=Math.min(n.nx-1,Math.ceil((e.pos[0]+s)/P)),o=Math.max(0,Math.floor((e.pos[1]-s)/P)),l=Math.min(n.ny-1,Math.ceil((e.pos[1]+s)/P)),c=Math.max(0,Math.floor((e.pos[2]-s)/P)),u=Math.min(n.nz-1,Math.ceil((e.pos[2]+s)/P)),h=zr(e.q),d=[0,0,0];let p=null;for(let v=r;v<=a;v++)for(let m=o;m<=l;m++)for(let f=c;f<=u;f++){ut[0]=v*P-e.pos[0],ut[1]=m*P-e.pos[1],ut[2]=f*P-e.pos[2],ti(h,ut,d);const S=d[0]+e.com[0],x=d[1]+e.com[1],A=d[2]+e.com[2],T=Fu(e,S,x,A);if(T<=-P)continue;const y=n.index(v,m,f);if(T>t[y]&&m<n.ny-1){if(t[y]=Math.min(T,ct),T>0){const E=Math.min(e.nx-1,Math.max(0,Math.round(S/P))),D=Math.min(e.ny-1,Math.max(0,Math.round(x/P))),M=Math.min(e.nz-1,Math.max(0,Math.round(A/P)));i[y]=e.material[(E*e.ny+D)*e.nz+M]||i[y]}p=uM(p,{x0:v-1,y0:m-1,z0:f-1,x1:v+1,y1:m+1,z1:f+1})}}const g=p??{x0:r,y0:o,z0:c,x1:a,y1:l,z1:u};return{x0:Math.max(0,g.x0),y0:Math.max(0,g.y0),z0:Math.max(0,g.z0),x1:Math.min(n.nx-1,g.x1),y1:Math.min(n.ny-1,g.y1),z1:Math.min(n.nz-1,g.z1)}}const Ss=7,Mt=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],bc=[1,0,3,2,5,4];function SM(n,e,t,i){return Et(n.getHard(e,t-1,i))||Et(n.getHard(e-1,t-1,i))||Et(n.getHard(e,t-1,i-1))||Et(n.getHard(e-1,t-1,i-1))}class _M{constructor(e){this.field=e,this.parent=new Uint8Array(e.nx*e.ny*e.nz),this.sx=e.ny*e.nz,this.sy=e.nz}parent;sx;sy;isRoot(e,t,i){return t===0||SM(this.field,e,t,i)}build(){const e=this.field,t=e.density,i=this.parent;i.fill(0);let s=[];for(let r=0;r<e.nx;r++)for(let a=0;a<e.ny;a++)for(let o=0;o<e.nz;o++){const l=e.index(r,a,o);t[l]>0&&this.isRoot(r,a,o)&&(i[l]=Ss,s.push(l))}this.grow(s)}grow(e){const t=this.field,i=t.density,s=this.parent,r=this.sx,a=this.sy;let o=0;for(;o<e.length;){const l=e[o++],c=Math.floor(l/r),u=Math.floor(l/a)%t.ny,h=l%t.nz;for(let d=0;d<6;d++){const p=c+Mt[d][0],g=u+Mt[d][1],v=h+Mt[d][2];if(p<0||g<0||v<0||p>=t.nx||g>=t.ny||v>=t.nz)continue;const m=l+Mt[d][0]*r+Mt[d][1]*a+Mt[d][2];s[m]!==0||i[m]<=0||(s[m]=bc[d]+1,e.push(m))}o>65536&&o*2>e.length&&(e=e.slice(o),o=0)}}afterEdit(e){const t=this.field,i=t.density,s=this.parent,r=this.sx,a=this.sy,o=Math.max(0,e.x0-1),l=Math.max(0,e.y0-1),c=Math.max(0,e.z0-1),u=Math.min(t.nx-1,e.x1+1),h=Math.min(t.ny-1,e.y1+1),d=Math.min(t.nz-1,e.z1+1),p=[],g=[];for(let E=o;E<=u;E++)for(let D=l;D<=h;D++)for(let M=c;M<=d;M++){const _=t.index(E,D,M);if(i[_]<=0){s[_]!==0&&(s[_]=0,p.push(_));continue}s[_]===Ss&&!this.isRoot(E,D,M)?(s[_]=0,p.push(_),g.push(_)):s[_]===0?g.push(_):s[_]!==Ss&&this.isRoot(E,D,M)&&(s[_]=Ss)}const v=[];let m=0;const f=p.slice();for(;m<f.length;){const E=f[m++],D=Math.floor(E/r),M=Math.floor(E/a)%t.ny,_=E%t.nz;for(let C=0;C<6;C++){const U=D+Mt[C][0],I=M+Mt[C][1],L=_+Mt[C][2];if(U<0||I<0||L<0||U>=t.nx||I>=t.ny||L>=t.nz)continue;const N=E+Mt[C][0]*r+Mt[C][1]*a+Mt[C][2];i[N]<=0||s[N]!==bc[C]+1||(s[N]=0,v.push(N),f.push(N))}}const S=g.concat(v),x=[];for(const E of S){const D=Math.floor(E/r),M=Math.floor(E/a)%t.ny,_=E%t.nz;s[E]===0&&i[E]>0&&this.isRoot(D,M,_)&&(s[E]=Ss,x.push(E))}for(const E of S){if(s[E]!==0||i[E]<=0)continue;const D=Math.floor(E/r),M=Math.floor(E/a)%t.ny,_=E%t.nz;for(let C=0;C<6;C++){const U=D+Mt[C][0],I=M+Mt[C][1],L=_+Mt[C][2];if(U<0||I<0||L<0||U>=t.nx||I>=t.ny||L>=t.nz)continue;const N=E+Mt[C][0]*r+Mt[C][1]*a+Mt[C][2];if(i[N]>0&&s[N]!==0){s[E]=C+1,x.push(E);break}}}this.grow(x);const A=[];let T=null;const y=new Set;for(const E of S){if(s[E]!==0||i[E]<=0||y.has(E))continue;const D=[],M=[E];for(y.add(E);M.length;){const W=M.pop(),O=Math.floor(W/r),K=Math.floor(W/a)%t.ny,re=W%t.nz;D.push([O,K,re]);for(let ce=0;ce<6;ce++){const Ce=O+Mt[ce][0],Ue=K+Mt[ce][1],ke=re+Mt[ce][2];if(Ce<0||Ue<0||ke<0||Ce>=t.nx||Ue>=t.ny||ke>=t.nz)continue;const Re=W+Mt[ce][0]*r+Mt[ce][1]*a+Mt[ce][2];i[Re]<=0||s[Re]!==0||y.has(Re)||(y.add(Re),M.push(Re))}}let _=1/0,C=1/0,U=1/0,I=-1/0,L=-1/0,N=-1/0;for(const[W,O,K]of D)_=Math.min(_,W),C=Math.min(C,O),U=Math.min(U,K),I=Math.max(I,W),L=Math.max(L,O),N=Math.max(N,K);const H={x0:Math.max(0,_-1),y0:Math.max(0,C-1),z0:Math.max(0,U-1),x1:Math.min(t.nx-1,I+1),y1:Math.min(t.ny-1,L+1),z1:Math.min(t.nz-1,N+1)};if(T=T?{x0:Math.min(T.x0,H.x0),y0:Math.min(T.y0,H.y0),z0:Math.min(T.z0,H.z0),x1:Math.max(T.x1,H.x1),y1:Math.max(T.y1,H.y1),z1:Math.max(T.z1,H.z1)}:H,D.length<=Lu){for(const[W,O,K]of D)i[t.index(W,O,K)]=-ct;continue}A.push(Bu(t,D,_-1,C-1,U-1,I-_+3,L-C+3,N-U+3))}return{fragments:A,changed:T}}countUnsupported(){const e=this.field.density,t=this.parent;let i=0;for(let s=0;s<e.length;s++)e[s]>0&&t[s]===0&&i++;return i}}const Cc=40,yM=72,Dc=10;class $o{cfg;field;gi;renderer;pool;bootLog="";world;input;touch;hud;body;edits;quality;time;timeRate=1/90;timePaused=!1;sun;brush={shape:"cube",sizeIndex:2,op:"add",matIndex:0,snap:!0};chunks=new Map;lightDirty=new Set;lightRR=0;giDirty=!1;lastGiUpload=0;lastLod=0;lastEdit=0;saveTimer=0;dirtySlabs=new Set;undoStack=[];fps=0;frames=0;fpsT=0;lastFrame=0;lastHash=0;anims=[];waterDirty=!1;lastWaterBuild=0;floods=[];crouch=!1;eye=Zn;foliage=1;falling=[];fallSpeed=7;lights=new Map;support;nextFragId=1;opts;lightSweeps=0;ready=!1;hit=null;hitBody=null;constructor(e,t,i,s,r,a,o,l,c){this.pool=o,this.world=c,this.opts=t,this.cfg=s,this.field=i,this.edits=r,this.hud=a,this.quality=t.quality,this.foliage=t.foliage??(this.touchEnabledGuess()?.5:1),this.fallSpeed=t.fall??7,this.time=t.time??10.5,this.sun=uc(this.time),this.gi=new c0(i),this.support=new _M(i),this.touch=new jx(document.getElementById("touch"));const u=this.touch.enabled||/Mobi|Android/i.test(navigator.userAgent);this.renderer=new Vx(e,i,this.gi,s.seaLevel,{textures:l,shadowMapSize:t.test||u?2048:4096,antialias:!t.test,cheapGi:t.cheapGi??u,maxPixelRatio:u?1.5:2,post:t.post??(t.quality==="low"?1:2),giMode:t.giMode??"sh",giDiv:t.giDiv??(u?2:1),scatterDensity:1,volumetricSteps:t.volumetric===!1||t.quality==="low"?0:u?8:16,reflection:!u,variant:t.shader}),this.renderer.onShaderError=p=>this.hud.showError(p),window.addEventListener("error",p=>this.hud.showError("error: "+(p.message??"").slice(0,160))),window.addEventListener("unhandledrejection",p=>this.hud.showError("rejection: "+String(p.reason).slice(0,160))),this.input=new Yx(e);const h=i.sizeX/2,d=i.sizeZ/2;if(this.body=E0(h,Mu(i,h,d)+.2,d),this.input.yaw=Math.PI*.25,this.touch.setFly(!1),t.view&&t.view.length>=5){const p=t.view;this.body.pos[0]=p[0],this.body.pos[1]=p[1],this.body.pos[2]=p[2],this.input.yaw=p[3],this.input.pitch=p[4],p.length>=6&&(this.time=p[5],this.timePaused=!0),this.body.fly=!0}for(let p=0;p<s.chunksX;p++)for(let g=0;g<s.chunksY;g++)for(let v=0;v<s.chunksZ;v++)this.chunks.set(qt(p,g,v),{level:-1,wanted:0,inflight:!1,dirty:!1,triangles:0,version:0,scatter:0,wantedScatter:0});this.hud.buildHotbar(this.renderer.textures),this.hud.setSelected(0),this.hud.onFall=p=>{this.fallSpeed=p,qi({fall:p}),this.hud.say(`fall speed ${p} m/s`)},this.hud.onFoliage=p=>{this.foliage=p,qi({foliage:p}),this.updateLod(!1),this.hud.say(`foliage ×${p}`)},this.hud.onQuality=p=>{this.quality=p,qi({quality:p}),this.lastLod=0,this.renderer.setPost(p==="low"?1:2)},this.hud.onResetEdits=()=>{_c(this.cfg.seed),wc(this.cfg.seed).then(()=>location.reload())},this.hud.onNewWorld=(p,g)=>{qi({seed:p}),location.href=location.pathname+"?seed="+p+(g?"&chunks="+g:"")},this.hud.onLoadWorld=p=>{if(p===this.cfg.seed){this.resume();return}qi({seed:p}),location.href=location.pathname+"?seed="+p},this.hud.onRenameWorld=(p,g)=>{sM(p,g).then(()=>this.refreshWorlds()),p===this.cfg.seed&&this.world&&(this.world.name=g)},this.hud.onDeleteWorld=p=>{if(p===this.cfg.seed){this.hud.onResetEdits?.();return}wc(p).then(()=>this.refreshWorlds())},this.hud.onResume=()=>this.resume(),this.hud.onMenu=()=>{document.pointerLockElement&&document.exitPointerLock(),this.showMenu()},this.hud.onCopyLink=()=>{const p=this.shareLink();navigator.clipboard?.writeText(p).then(()=>this.hud.say("link copied"),()=>this.hud.say(p,6e3))},this.hud.onTime=p=>{this.time=p,this.timePaused=!0},this.hud.onTimeFlow=()=>{this.timePaused=!this.timePaused,this.hud.say(this.timePaused?"time paused":"time flowing")},this.hud.onSelectSlot=p=>{this.brush.matIndex=p,this.hud.setSelected(p),this.syncShapeToMaterial(),this.renderer.setHandItem(Mn[p].id)},this.renderer.setHandItem(Mn[0].id),e.addEventListener("click",()=>{!this.hud.overlayVisible&&!this.input.freeMouse&&this.input.requestLock()}),document.addEventListener("pointerlockchange",()=>{!this.input.locked&&!t.test&&!this.touch.enabled&&!this.input.freeMouse&&this.showMenu()}),window.addEventListener("resize",()=>this.renderer.resize())}touchEnabledGuess(){return"ontouchstart"in window||/Mobi|Android/i.test(navigator.userAgent)}static async create(e,t,i){const s=t.chunks??ac.chunksX,r={...ac,seed:t.seed,chunksX:s,chunksZ:s},a=new Xx(t.test?2:Math.max(1,Math.min(6,(navigator.hardwareConcurrency||4)-1))),o=performance.now(),l=[],c=E=>l.push(`${E} ${(performance.now()-o).toFixed(0)}`);i.setLoading(.02,"shaping terrain");const u=a.textures(Ex),h=iM(r.seed,s),d=eM(r.seed),p=new Fr(r.chunksX*Ee+1,r.chunksY*Ee+1,r.chunksZ*Ee+1),g=r.chunksX*r.chunksY*r.chunksZ;let v=0;const m=Ee+1,f=[];for(let E=0;E<r.chunksX;E++)for(let D=0;D<r.chunksY;D++)for(let M=0;M<r.chunksZ;M++)f.push(a.gen(E,D,M,r,D*8+Math.abs(E-r.chunksX/2)+Math.abs(M-r.chunksZ/2)).then(_=>{for(let C=0;C<m;C++)for(let U=0;U<m;U++){const I=(C*m+U)*m,L=p.index(E*Ee+C,D*Ee+U,M*Ee);p.density.set(_.density.subarray(I,I+m),L),p.material.set(_.material.subarray(I,I+m),L)}v++,((v&7)===0||v===g)&&i.setLoading(.02+.28*(v/g),`shaping terrain · ${v} / ${g}`)}));await Promise.all(f),c("terrain"),i.setLoading(.3,"planting trees"),await qn(),new l0(r).plantTrees(p),c("trees"),Ax(p,r.seaLevel),c("water");const S=Tx(await u),x=await h;c("textures"),i.setLoading(.35,"loading your world"),await qn();const A=await d;for(const E of A)yc(p,E);for(const E of A)E.water===void 0&&Sx(p,{x0:E.cx*Ee,y0:E.cy*Ee,z0:E.cz*Ee,x1:E.cx*Ee+Ee,y1:E.cy*Ee+Ee,z1:E.cz*Ee+Ee},r.seaLevel);const T=[];if(A.length===0){const E=Zx(r.seed);if(E.length){i.setLoading(.4,`converting ${E.length} old edits`),await qn();const D=new Set;for(let _=0;_<E.length;_++){const C=ys(p,E[_]);for(const[U,I,L]of Qi(C,r.chunksX,r.chunksY,r.chunksZ))D.add(qt(U,I,L));(_&31)===31&&(i.setLoading(.4+.05*(_/E.length),`converting ${_+1} / ${E.length} old edits`),await qn())}const M=[];for(const _ of D){const[C,U,I]=fr(_);M.push(Ta(p,C,U,I))}await Ec(r.seed,M),_c(r.seed)}}i.setLoading(.45,"painting materials"),await qn(),c("slabs");const y=new $o(e,t,p,r,T,i,a,S,x);return y.renderer.water.rebuild(p),c("renderer"),i.setLoading(.6,"finding what stands on what"),await qn(),y.support.build(),c("support"),i.setLoading(.7,"lighting the world"),await qn(),y.injectAll(),y.renderer.giTex.upload(),y.renderer.giUploaded(),y.renderer.setSun(y.sun),c("light"),i.setLoading(.8,"meshing chunks"),await qn(),y.updateLod(!0),c("lod"),y.bootLog=l.join(" · "),y}resume(){this.hud.hideOverlay(),!this.opts.test&&!this.touch.enabled&&this.input.requestLock()}showMenu(){this.hud.showOverlay(this.cfg.seed,this.quality,this.foliage,this.fallSpeed),this.refreshWorlds()}async refreshWorlds(){const e=await tM();this.world&&!e.some(t=>t.id===this.world.id)&&e.unshift(this.world),this.hud.renderWorlds(e,this.cfg.seed)}syncShapeToMaterial(){jn(Mn[this.brush.matIndex].id)&&(this.brush.shape="cube",this.brush.snap=!0)}injectAll(){const e=Ee/vt;for(let t=0;t<this.cfg.chunksX;t++)for(let i=0;i<this.cfg.chunksY;i++)for(let s=0;s<this.cfg.chunksZ;s++)Sa(this.field,this.gi,t,i,s,e,this.sun);this.lightSweeps++,this.giDirty=!0}extraLights(e){let t;for(const i of this.lights.values()){if(i.chunk!==e)continue;const s=this.gi.index(Math.floor(i.x/vt),Math.floor(i.y/vt),Math.floor(i.z/vt));t??=new Map;const r=t.get(s);r?(r[0]+=i.r,r[1]+=i.g,r[2]+=i.b):t.set(s,[i.r,i.g,i.b])}return t}setLight(e,t,i,s,r,a,o){const l=this.lights.get(e),c=Ee*P,u=qt(Math.max(0,Math.min(this.cfg.chunksX-1,Math.floor(t/c))),Math.max(0,Math.min(this.cfg.chunksY-1,Math.floor(i/c))),Math.max(0,Math.min(this.cfg.chunksZ-1,Math.floor(s/c))));l&&l.chunk===u&&Math.hypot(l.x-t,l.y-i,l.z-s)<vt*.5||(l&&this.lightDirty.add(l.chunk),this.lights.set(e,{x:t,y:i,z:s,r,g:a,b:o,chunk:u}),this.lightDirty.add(u))}clearLight(e){const t=this.lights.get(e);t&&(this.lights.delete(e),this.lightDirty.add(t.chunk))}updateLights(){const e=new Set,t=Mn[this.brush.matIndex],i=this.renderer.handWorld();i&&t.emissive&&t.hard&&t.solid===!1&&(this.setLight("hand",i.x,i.y,i.z,t.emissive[0]*.35,t.emissive[1]*.35,t.emissive[2]*.35),e.add("hand"));for(const s of this.falling)s.cooking||s.frag.items.forEach((r,a)=>{const o=Zt[r.mat];if(!o?.emissive)return;const l=Nu(s.frag,r),c=`body:${s.id}:${a}`;this.setLight(c,l[0],l[1],l[2],o.emissive[0],o.emissive[1],o.emissive[2]),e.add(c)});for(const s of this.lights.keys())e.has(s)||this.clearLight(s)}lightStep(e){this.updateLights();const t=this.opts.test?12:2.5,i=performance.now(),s=Ee/vt,r=this.cfg.chunksX*this.cfg.chunksY*this.cfg.chunksZ;let a=0;for(const o of this.lightDirty){const[l,c,u]=fr(o);if(Sa(this.field,this.gi,l,c,u,s,this.sun,this.extraLights(o)),this.lightDirty.delete(o),a++,performance.now()-i>t)break}for(;performance.now()-i<t;){const o=this.lightRR,l=Math.floor(o/(this.cfg.chunksY*this.cfg.chunksZ)),c=Math.floor(o/this.cfg.chunksZ)%this.cfg.chunksY,u=o%this.cfg.chunksZ;Sa(this.field,this.gi,l,c,u,s,this.sun),this.lightRR=(o+1)%r,this.lightRR===0&&this.lightSweeps++,a++}a>0&&(this.giDirty=!0),this.giDirty&&e-this.lastGiUpload>(this.opts.test?30:150)&&(this.renderer.giTex.upload(),this.renderer.giUploaded(),this.giDirty=!1,this.lastGiUpload=e)}wantedLevel(e,t,i,s){const r=Ee*P,a=(e+.5)*r-this.body.pos[0],o=(t+.5)*r-this.body.pos[1],l=(i+.5)*r-this.body.pos[2],c=Math.hypot(a,o,l),u=h=>s>=h?Dc:0;return this.quality==="low"?0:this.quality==="medium"?c<Cc+u(1)?1:0:c<22+u(2)?2:c<yM+u(1)?1:0}updateLod(e){for(const[t,i]of this.chunks){const[s,r,a]=fr(t),o=this.wantedLevel(s,r,a,i.level),l=this.scatterFor(s,r,a,i.scatter);(o!==i.wanted||l!==i.wantedScatter||e||i.level<0)&&(i.wanted=o,i.wantedScatter=l,(i.level!==o||i.scatter!==l||i.level<0)&&this.requestMesh(s,r,a))}this.pool.reprioritize(t=>this.priority(t.cx,t.cy,t.cz))}scatterFor(e,t,i,s){if(this.foliage<=0)return 0;const r=Ee*P;return Math.hypot((e+.5)*r-this.body.pos[0],(t+.5)*r-this.body.pos[1],(i+.5)*r-this.body.pos[2])<Cc+(s>0?Dc:0)?this.foliage:0}priority(e,t,i){const s=Ee*P;return Math.hypot((e+.5)*s-this.body.pos[0],(t+.5)*s-this.body.pos[1],(i+.5)*s-this.body.pos[2])}requestMesh(e,t,i){const s=qt(e,t,i),r=this.chunks.get(s);if(r.inflight){r.dirty=!0;return}r.inflight=!0,r.dirty=!1;const a=2,o=Ee+1+2*a,l=this.field.extract(e*Ee-a,t*Ee-a,i*Ee-a,o,o,o),c=r.wanted,u=r.wantedScatter;this.pool.submit({cx:e,cy:t,cz:i,ox:l.ox,oy:l.oy,oz:l.oz,n:o,density:l.density,material:l.material,hard:l.hard,sub:l.sub,levels:c,scatter:u},this.priority(e,t,i)).then(h=>{r.inflight=!1,r.level=h.levels,r.scatter=u,r.version++,r.triangles=h.vertexCount/3,this.renderer.setChunk(e,t,i,{positions:h.positions,normals:h.normals,mats:h.mats,bary:h.bary,face:h.face,morph:h.morph,emitters:h.emitters,scatter:h.scatter,vertexCount:h.vertexCount},h.levels),(r.dirty||r.wanted!==r.level||r.wantedScatter!==r.scatter)&&this.requestMesh(e,t,i)})}get pendingMeshes(){let e=0;for(const t of this.chunks.values())(t.inflight||t.level<0)&&e++;return e}applyEdit(e,t=!0){if(d0(e)&&!this.opts.test){this.anims.push({e,t0:performance.now(),record:t}),this.stepEdit(e,Ca(.001));return}if(e.op==="smooth"&&!this.opts.test){const i=t?this.preImages(e):[],s=Da(e,this.field),r=this.copyDensity(s),a=ys(this.field,e),o=this.copyDensity(s);this.writeDensity(s,r,o,0),this.anims.push({e,t0:performance.now(),record:t,lerp:{b:a,pre:r,post:o,preImages:i}}),this.refresh(a);return}this.finishEdit(e,t)}preImages(e){const t=[];for(const[i,s,r]of Qi(Da(e,this.field),this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))t.push(Ta(this.field,i,s,r));return t}copyDensity(e){const t=this.field,i=new Float32Array((e.x1-e.x0+1)*(e.y1-e.y0+1)*(e.z1-e.z0+1));let s=0;for(let r=e.x0;r<=e.x1;r++)for(let a=e.y0;a<=e.y1;a++)for(let o=e.z0;o<=e.z1;o++)i[s++]=t.density[t.index(r,a,o)];return i}writeDensity(e,t,i,s){const r=this.field;let a=0;for(let o=e.x0;o<=e.x1;o++)for(let l=e.y0;l<=e.y1;l++)for(let c=e.z0;c<=e.z1;c++,a++)r.density[r.index(o,l,c)]=t[a]+(i[a]-t[a])*s}refresh(e,t=!1){const{removed:i,plan:s}=Cu(this.field,e,this.cfg.seaLevel);if(i){this.waterDirty=!0,e=Ra(e,i);const r=Math.max(.5,(i.x1-i.x0)*P*.5),a=Math.max(.5,(i.z1-i.z0)*P*.5);this.renderer.water.splash((i.x0+i.x1)*.5*P,(i.z0+i.z1)*.5*P,Math.hypot(r,a),-.02*Math.min(4,Math.hypot(r,a)))}if(s)if(s.cells.length<=6){const r=wo(this.field,s,s.cells.length);r&&(this.waterDirty=!0,e=Ra(e,r))}else this.floods.push(s);for(const[r,a,o]of _a(e,Ee,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))if(this.requestMesh(r,a,o),this.lightDirty.add(qt(r,a,o)),t)for(let l=a-1;l>=0;l--)this.lightDirty.add(qt(r,l,o));return e}stepEdit(e,t){this.refresh(ys(this.field,e,t))}finishEdit(e,t){const i=t?this.preImages(e):[],s=ys(this.field,e);this.commitEdit(e,t,i,s)}editLoose(e,t){const i=this.falling.find(r=>r.id===e);if(!i)return;if(t.op==="add"&&jn(t.mat)){this.hud.say("blocks need solid ground");return}const s=pM(i.frag,t);this.renderer.removeFragment(e),this.falling=this.falling.filter(r=>r.id!==e);for(const r of s)this.launch(r)}launch(e){const t=this.nextFragId++;this.falling.push({frag:e,id:t}),this.pool.frag(e.nx,e.ny,e.nz,e.density.slice(),e.material.slice(),e.hard.slice(),this.foliage).then(i=>{this.falling.some(s=>s.id===t)&&this.renderer.setFragment(t,i,e.com,e.pos,e.q,e.texOrigin)})}stepFalling(e){if(!this.falling.length)return;const t=[],i=this.lastNow;for(const s of this.falling){const r=s.frag;if(s.cooking){if(s.cooking.keys.every((u,h)=>{const d=this.chunks.get(u);return d.version>s.cooking.versions[h]&&!d.inflight})){this.renderer.removeFragment(s.id);continue}t.push(s);continue}if(s.blend){const c=Math.min(1,(i-s.blend.t0)/wM),u=c*c*(3-2*c);if(this.renderer.fadeFragment(s.id,c<.55?1:Math.max(.08,1-(c-.55)/.45)),c>=1){if(!s.blend.final){s.blend.final=!0,Tc(this.field,r,s.blend.box,s.blend.pre,0,0);const h=AM(this.field,r),d=this.support.afterEdit(h);for(const v of d.fragments)this.launch(v);const p=this.refresh(d.changed?Ra(h,d.changed):h,!0),g=_a(p,Ee,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([v,m,f])=>qt(v,m,f));s.cooking={keys:g,versions:g.map(v=>this.chunks.get(v).version)};for(const[v,m,f]of Qi(p,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(qt(v,m,f));this.scheduleSave()}t.push(s);continue}if(i-s.blend.lastStep>TM){s.blend.lastStep=i;const h=bM*(1-u),d=CM*(1-u)+.02;Tc(this.field,r,s.blend.box,s.blend.pre,h,d),this.refresh(s.blend.box,!1)}t.push(s);continue}const a=r.pos[1]-r.radius>this.cfg.seaLevel,o=Math.max(1,Math.ceil(e/(1/120)));for(let c=0;c<o&&!r.settled;c++)gM(this.field,r,e/o,this.fallSpeed);if(a&&r.pos[1]-r.radius<=this.cfg.seaLevel&&this.field.waterAt(r.pos[0],this.cfg.seaLevel-P*.5,r.pos[2])&&this.renderer.water.splash(r.pos[0],r.pos[2],Math.max(.6,r.radius),-.05*Math.min(6,r.solid.length/12)),this.renderer.moveFragment(s.id,r.pos,r.q),!r.settled){t.push(s);continue}const l=vM(this.field,r);s.blend={box:l,pre:xM(this.field,l),t0:i,lastStep:-1e9,final:!1},t.push(s)}this.falling=t}commitEdit(e,t,i,s){if(s=this.refresh(s,!0),t){this.edits.push(e),this.undoStack.push(i),this.undoStack.length>24&&this.undoStack.shift();for(const[o,l,c]of Qi(s,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(qt(o,l,c));this.scheduleSave()}const r=e.size*.5+P;Math.abs(e.y-this.cfg.seaLevel)<r+.5&&this.field.waterAt(e.x,this.cfg.seaLevel-P*.5,e.z)&&this.renderer.water.splash(e.x,e.z,r,-.05*Math.min(3,e.size));const a=this.support.afterEdit(s);if(a.changed){this.refresh(a.changed,!0);for(const[o,l,c]of Qi(a.changed,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(qt(o,l,c));this.scheduleSave()}for(const o of a.fragments)this.launch(o)}brushTarget(e){const t=this.hit;if(!t)return null;const i=this.effectiveSize(e)*.5,s=t.normal;let r;const a=e==="add"&&jn(Mn[this.brush.matIndex].id),o=a||t.hard?.5:.6;if(e==="add")r=[t.point[0]+s[0]*i*o,t.point[1]+s[1]*i*o,t.point[2]+s[2]*i*o];else if(e==="sub"){const c=Math.min(i*.4,.06);r=[t.point[0]-s[0]*c,t.point[1]-s[1]*c,t.point[2]-s[2]*c]}else r=[t.point[0],t.point[1],t.point[2]];if(this.brush.snap&&(e!=="sub"||this.brush.shape!=="sphere")||a){const c=this.effectiveSize(e);r=[Math.floor(r[0]/c)*c+c/2,Math.floor(r[1]/c)*c+c/2,Math.floor(r[2]/c)*c+c/2]}return r}facingDir(){const e=-Math.sin(this.input.yaw),t=-Math.cos(this.input.yaw);let i=0,s=-1/0;for(let r=0;r<4;r++){const a=e*Ao[r][0]+t*Ao[r][2];a>s&&(s=a,i=r)}return i}effectiveSize(e){const t=Mn[this.brush.matIndex].id;return e==="add"&&jn(t)&&!Et(t)?.5:di[this.brush.sizeIndex]}doEdit(e){const t=this.brushTarget(e);if(!t)return;const i=Mn[this.brush.matIndex].id,s=e==="add"&&jn(i)&&!Et(i),r={op:e,shape:s?"cube":this.brush.shape,size:this.effectiveSize(e),mat:i,x:t[0],y:t[1],z:t[2]};if(r.shape==="ramp"&&(r.dir=this.facingDir()),this.hitBody!==null){this.editLoose(this.hitBody,r);return}this.applyEdit(r)}lastNow=0;frame(e){this.lastNow=e;const t=this.lastFrame?(e-this.lastFrame)/1e3:1/60;this.lastFrame=e;const i=Math.min(t,.05),s=this.input,r=this.touch;s.hit("CapsLock")&&!this.opts.test&&!r.enabled&&!this.hud.overlayVisible&&(s.freeMouse=!s.freeMouse,s.freeMouse?(document.pointerLockElement&&document.exitPointerLock(),this.hud.say("free mouse · Caps Lock to look again")):(this.hud.say("mouse look"),s.requestLock()));const a=s.locked||s.freeMouse&&!this.hud.overlayVisible||this.opts.test||r.enabled&&!this.hud.overlayVisible;if(a){for(let I=0;I<Sc.length&&I<Mn.length;I++)s.hit(Sc[I])&&(this.brush.matIndex=I,this.hud.setSelected(I),this.syncShapeToMaterial(),this.renderer.setHandItem(Mn[I].id));s.hit("Escape")&&(this.touch.enabled||s.freeMouse)&&this.showMenu(),s.wheel!==0&&(this.brush.sizeIndex=Math.max(0,Math.min(di.length-1,this.brush.sizeIndex-s.wheel))),s.hit("KeyQ")&&(this.brush.shape=Pc(this.brush.shape)),s.hit("Tab")&&(this.brush.op=ba[(ba.indexOf(this.brush.op)+1)%ba.length],this.hud.say(`tool: ${this.brush.op==="sub"?"remove":this.brush.op}`)),s.down("ArrowLeft")&&(s.yaw+=Rc*i),s.down("ArrowRight")&&(s.yaw-=Rc*i),s.down("ArrowUp")&&(s.pitch=Math.min(1.55,s.pitch+Ic*i)),s.down("ArrowDown")&&(s.pitch=Math.max(-1.55,s.pitch-Ic*i)),s.hit("KeyG")&&(this.brush.snap=!this.brush.snap,this.hud.say(this.brush.snap?"grid snap on":"grid snap off")),s.hit("KeyF")&&(this.body.fly=!this.body.fly,this.touch.setFly(this.body.fly),this.hud.say(this.body.fly?"flying":"walking")),s.hit("KeyP")&&(this.timePaused=!this.timePaused,this.hud.say(this.timePaused?"time paused":"time flowing")),s.hit("Comma")&&(this.time=(this.time-.5+24)%24),s.hit("Period")&&(this.time=(this.time+.5)%24),s.hit("KeyZ")&&this.edits.length&&this.undo()}r.enabled&&a&&(s.yaw-=r.lookDX*.005,s.pitch=Math.max(-1.55,Math.min(1.55,s.pitch-r.lookDY*.005)),r.tapped("tb-fly")&&(this.body.fly=!this.body.fly,r.setFly(this.body.fly),this.hud.say(this.body.fly?"flying":"walking")),r.tapped("tb-size-down")&&(this.brush.sizeIndex=Math.max(0,this.brush.sizeIndex-1)),r.tapped("tb-size-up")&&(this.brush.sizeIndex=Math.min(di.length-1,this.brush.sizeIndex+1)),r.tapped("tb-shape")&&(this.brush.shape=Pc(this.brush.shape)),r.tapped("tb-snap")&&(this.brush.snap=!this.brush.snap,this.hud.say(this.brush.snap?"grid snap on":"grid snap off")),r.tapped("tb-undo")&&this.edits.length&&this.undo(),r.tapped("tb-menu")&&this.showMenu()),!this.timePaused&&!this.opts.test&&(this.time=(this.time+this.timeRate*i)%24),this.sun=uc(this.time),this.renderer.setSun(this.sun);const o=s.yaw,l=-Math.sin(o),c=-Math.cos(o),u=Math.cos(o),h=-Math.sin(o);let d=0,p=0,g=0;a&&(s.down("KeyW")&&(d+=l,p+=c),s.down("KeyS")&&(d-=l,p-=c),s.down("KeyD")&&(d+=u,p+=h),s.down("KeyA")&&(d-=u,p-=h),r.enabled&&(d+=l*r.moveY+u*r.moveX,p+=c*r.moveY+h*r.moveX),this.body.fly&&((s.down("Space")||r.jump)&&(g+=1),(s.down("ShiftLeft")||s.down("ShiftRight")||s.down("KeyC")||r.duck)&&(g-=1))),this.crouch=!this.body.fly&&a&&(r.duck||s.down("KeyC")),this.body.crouch=this.crouch;const v=Math.max(1,Math.hypot(d,p)),m=s.down("ShiftLeft")||s.down("ShiftRight"),f=this.body.fly?m?40:18:this.crouch?1.8:m?8.5:5.2;w0(this.field,this.body,{wishX:d/v*f,wishZ:p/v*f,wishY:g*(this.body.fly?m?28:16:0),jump:a&&(s.down("Space")||r.jump),dt:i});const S=this.renderer.camera;this.eye+=((this.crouch?_0:Zn)-this.eye)*Math.min(1,i*14),S.position.set(this.body.pos[0],this.body.pos[1]+this.eye,this.body.pos[2]),S.rotation.set(s.pitch,o,0,"YXZ");const x=this.field.waterAt(S.position.x,S.position.y,S.position.z);if(x!==this.renderer.underwater&&this.renderer.setUnderwater(x,this.sun),this.floods.length){const I=[];for(const L of this.floods){L.carry+=_x(L)*i;const N=Math.floor(L.carry);L.carry-=N;const H=wo(this.field,L,N);if(H){this.waterDirty=!0;for(const[W,O,K]of Qi(H,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(qt(W,O,K))}L.done<L.cells.length?I.push(L):this.scheduleSave()}this.floods=I}this.waterDirty&&(e-this.lastWaterBuild>90||!this.floods.length)&&(this.waterDirty=!1,this.lastWaterBuild=e,this.renderer.water.rebuild(this.field));const A=[],T=this.body.pos,y=this.cfg.seaLevel;T[1]<y&&T[1]+Zn>y&&this.field.waterAt(T[0],y-P*.5,T[2])&&A.push([T[0],T[2],.42,Math.min(4,Math.hypot(this.body.vel[0],this.body.vel[1],this.body.vel[2]))]),this.stepFalling(i);for(const I of this.falling){const L=I.frag;L.pos[1]-L.radius<y&&L.pos[1]+L.radius>y&&this.field.waterAt(L.pos[0],y-P*.5,L.pos[2])&&A.push([L.pos[0],L.pos[2],Math.max(.4,L.radius*.8),Math.min(6,Math.hypot(L.vel[0],L.vel[1],L.vel[2])*1.5)])}this.renderer.water.setObstacles(A);const E=new z(0,0,-1).applyEuler(S.rotation);this.hit=g0(this.field,[S.position.x,S.position.y,S.position.z],[E.x,E.y,E.z],48),this.hitBody=null;for(const I of this.falling){if(I.cooking||I.blend)continue;const L=this.hit?this.hit.distance:48,N=I.frag,H=N.pos[0]-S.position.x,W=N.pos[1]-S.position.y,O=N.pos[2]-S.position.z,K=H*E.x+W*E.y+O*E.z;if(K<-N.radius||K>L+N.radius)continue;const re=H-E.x*K,ce=W-E.y*K,Ce=O-E.z*K;if(re*re+ce*ce+Ce*Ce>N.radius*N.radius)continue;const Ue=hM(N,[S.position.x,S.position.y,S.position.z],[E.x,E.y,E.z],L);Ue&&(!this.hit||Ue.distance<this.hit.distance)&&(this.hit=Ue,this.hitBody=I.id)}if(this.hit){const I=s.mouseDown[0]||r.dig?"sub":r.heldOp??this.brush.op,L=this.effectiveSize(I)*.5,N=this.brushTarget(I),H=this.brush.shape;H==="sphere"&&L>=.3?this.renderer.setCursor(N[0],N[1],N[2],L,null):H==="slab"?this.renderer.setCursor(N[0],N[1]-L+L/3,N[2],L,[L,L/3,L]):this.renderer.setCursor(N[0],N[1],N[2],L,[L,L,L])}else this.renderer.setCursor(0,0,0,0,null);if(a){const I=e-this.lastEdit>(this.brush.sizeIndex>=2?260:150);s.mouseClick[0]||s.hit("KeyM")||(s.mouseDown[0]||s.down("KeyM")||r.dig)&&I?(this.doEdit("sub"),this.lastEdit=e):s.mouseClick[2]||s.hit("KeyE")||(s.mouseDown[2]||s.down("KeyE"))&&I?(this.doEdit(this.brush.op),this.lastEdit=e):r.heldOp&&I&&(this.doEdit(r.heldOp),this.lastEdit=e)}if(this.anims.length){const I=[];for(const L of this.anims){const N=(e-L.t0)/EM;if(L.lerp){const{b:H,pre:W,post:O,preImages:K}=L.lerp,re=Da(L.e,this.field);N>=1?(this.writeDensity(re,W,O,1),this.commitEdit(L.e,L.record,K,H)):(this.writeDensity(re,W,O,Ca(N)),this.refresh(H),I.push(L))}else N>=1?this.finishEdit(L.e,L.record):(this.stepEdit(L.e,Ca(N)),I.push(L))}this.anims=I}this.lightStep(e),e-this.lastLod>400&&(this.updateLod(!1),this.lastLod=e),this.renderer.render(e/1e3),this.frames++,e-this.fpsT>500&&(this.fps=this.frames*1e3/(e-this.fpsT),this.frames=0,this.fpsT=e);const D=this.brush;this.hud.setStatus(r.enabled?`${D.shape} ${di[D.sizeIndex]<.5?"⅙":di[D.sizeIndex]} m · ${D.snap?"snap":"free"} · ${this.body.fly?"fly":this.crouch?"duck":"walk"}`:`${D.shape} ${di[D.sizeIndex]<.5?"⅙":di[D.sizeIndex]} m · tool: ${D.op==="sub"?"remove":D.op} · ${D.snap?"snap":"free"} · ${this.body.fly?"fly":this.crouch?"duck":"walk"}${this.input.freeMouse?" · free mouse":""}`);const M=Math.floor(this.time),_=Math.floor((this.time-M)*60);this.hud.setClock(`${String(M).padStart(2,"0")}:${String(_).padStart(2,"0")}${this.timePaused?" ⏸":""}`,this.time);const C=this.hit,U=C?` · aim ${this.hitBody!==null?"body":C.hard?"block":"field"} ${Zt[C.material]?.name??C.material} @${C.distance.toFixed(1)} m`:" · aim none";this.hud.setDebug(`${this.fps.toFixed(0)} fps · ${(this.renderer.triangles/1e3).toFixed(0)}k tris · ${this.renderer.chunkCount} chunks · ${this.renderer.flames.count} flames · ${(this.renderer.scatter.count/1e3).toFixed(1)}k scatter · mesh q ${this.pool.queued} · ${this.renderer.fallingCount} falling · ${this.body.pos.map(I=>I.toFixed(1)).join(", ")}${U}`),e-this.lastHash>1e3&&(this.lastHash=e,this.writeHash()),s.flush(),r.flush(),this.ready=!0}stateString(){const e=this.body.pos;return[e[0],e[1],e[2],this.input.yaw,this.input.pitch,this.time].map(t=>+t.toFixed(2)).join(",")}writeHash(){try{history.replaceState(null,"",location.pathname+location.search+"#v="+this.stateString())}catch{}}shareLink(){const e=new URLSearchParams(location.search);return e.set("seed",String(this.cfg.seed)),e.set("quality",this.quality),location.origin+location.pathname+"?"+e.toString()+"#v="+this.stateString()}scheduleSave(){clearTimeout(this.saveTimer),this.saveTimer=window.setTimeout(()=>{const e=[];for(const t of this.dirtySlabs){const[i,s,r]=fr(t);e.push(Ta(this.field,i,s,r))}this.dirtySlabs.clear(),Ec(this.cfg.seed,e)},600)}undo(){const e=this.undoStack.pop();if(!e){this.hud.say("nothing to undo");return}this.edits.pop();for(const t of e){yc(this.field,t),this.support.afterEdit({x0:t.cx*Ee,y0:t.cy*Ee,z0:t.cz*Ee,x1:t.cx*Ee+Ee,y1:t.cy*Ee+Ee,z1:t.cz*Ee+Ee});const i=qt(t.cx,t.cy,t.cz);this.dirtySlabs.add(i);for(const[s,r,a]of _a({x0:t.cx*Ee,y0:t.cy*Ee,z0:t.cz*Ee,x1:t.cx*Ee+Ee,y1:t.cy*Ee+Ee,z1:t.cz*Ee+Ee},Ee,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.requestMesh(s,r,a),this.lightDirty.add(qt(s,r,a))}this.waterDirty=!0,this.scheduleSave(),this.hud.say("undo")}setView(e,t,i,s,r){this.body.pos[0]=e,this.body.pos[1]=t-Zn,this.body.pos[2]=i,this.body.vel[0]=this.body.vel[1]=this.body.vel[2]=0,this.body.fly=!0,this.input.yaw=s,this.input.pitch=r,this.lastLod=0}setTime(e){this.time=e}}const EM=140,ba=["add","sub","smooth","paint"],Rc=2.4,Ic=1.7,wM=2600,TM=160,bM=.45,CM=.4;function Ca(n){const e=1-Math.min(1,Math.max(0,n));return 1-e*e*e}function Pc(n){return n==="cube"?"slab":n==="slab"?"ramp":n==="ramp"?"sphere":"cube"}function fr(n){const e=n%1024,t=Math.floor(n/1024)%1024;return[Math.floor(n/1048576),t,e]}function qn(){return new Promise(n=>requestAnimationFrame(()=>n()))}function Da(n,e){const t=n.size*.5+2;return{x0:Math.max(0,Math.floor((n.x-t)/P)),y0:Math.max(0,Math.floor((n.y-t)/P)),z0:Math.max(0,Math.floor((n.z-t)/P)),x1:Math.min(e.nx-1,Math.ceil((n.x+t)/P)),y1:Math.min(e.ny-1,Math.ceil((n.y+t)/P)),z1:Math.min(e.nz-1,Math.ceil((n.z+t)/P))}}function Ra(n,e){return{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}}function DM(n){const e=/#v=([-\d.,]+)/.exec(n);if(!e)return;const t=e[1].split(",").map(Number);return t.length>=5&&t.every(i=>Number.isFinite(i))?t:void 0}async function RM(){const n=new URLSearchParams(location.search),e=Ru(),t=n.get("test")==="1";n.get("debug")==="1"&&document.body.classList.add("debug");const i=n.get("seed")??n.get("world"),s=i!==null?Du(i):e.seed??1337,r=n.get("quality")||e.quality||"medium",a={seed:s,quality:r,test:t,chunks:(await nM(s))?.chunks??(n.get("chunks")?Math.max(2,Math.min(24,Number(n.get("chunks")))):void 0),time:n.get("time")?Number(n.get("time")):void 0,cheapGi:n.get("gi")==="cheap"?!0:n.get("gi")==="full"?!1:void 0,giMode:n.get("gi")==="cone"?"cone":n.get("gi")==="sh"?"sh":void 0,post:n.has("post")?Math.max(0,Math.min(2,Number(n.get("post")))):void 0,volumetric:n.get("vol")==="0"?!1:void 0,shader:["full","lite","basic"].find(h=>h===n.get("shader")),giDiv:n.has("gidiv")?Math.max(1,Math.min(4,Number(n.get("gidiv")))):void 0,view:DM(location.hash),foliage:n.has("foliage")?Math.max(0,Math.min(8,Number(n.get("foliage")))):e.foliage,fall:n.has("fall")?Math.max(1,Math.min(60,Number(n.get("fall")))):e.fall};qi({seed:s,quality:r});const o=document.getElementById("view"),l=new Qx;window.addEventListener("error",h=>l.showError("error: "+(h.message??"").slice(0,160)));const c=await $o.create(o,a,l);l.hideLoading(),t||c.showMenu(),window.__splinecraft={game:c,ready:()=>c.ready&&c.pendingMeshes===0,setView:c.setView.bind(c),setTime:c.setTime.bind(c),edit:c.applyEdit.bind(c),ground:(h,d)=>Mu(c.field,h,d),state:()=>c.stateString()};const u=h=>{c.frame(h),requestAnimationFrame(u)};requestAnimationFrame(u)}RM().catch(n=>{console.error(n);const e=document.getElementById("loading-text");e&&(e.textContent="failed to start: "+(n instanceof Error?n.message:String(n)))});
