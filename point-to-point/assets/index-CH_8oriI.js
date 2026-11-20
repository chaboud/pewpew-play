(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bo="180",Ph=0,ll=1,Dh=2,Vc=1,Wc=2,Xn=3,ui=0,Qt=1,Xt=2,ci=0,os=1,Ha=2,cl=3,hl=4,Ih=5,Ti=100,Uh=101,Fh=102,Nh=103,zh=104,Oh=200,kh=201,Bh=202,Hh=203,Ga=204,Va=205,Gh=206,Vh=207,Wh=208,Xh=209,qh=210,$h=211,Yh=212,Kh=213,jh=214,Wa=0,Xa=1,qa=2,fs=3,$a=4,Ya=5,Ka=6,ja=7,Ho=0,Zh=1,Jh=2,hi=0,Qh=1,ef=2,tf=3,Xc=4,nf=5,sf=6,rf=7,qc=300,us=301,ds=302,Za=303,Ja=304,Hr=306,Qa=1e3,Ci=1001,eo=1002,Yt=1003,af=1004,er=1005,un=1006,Kr=1007,oi=1008,On=1009,$c=1010,Yc=1011,ks=1012,Go=1013,di=1014,Pn=1015,Di=1016,Vo=1017,Wo=1018,Bs=1020,Kc=35902,jc=35899,Zc=1021,Jc=1022,dn=1023,Hs=1026,Gs=1027,Vs=1028,Xo=1029,Qc=1030,qo=1031,$o=1033,Dr=33776,Ir=33777,Ur=33778,Fr=33779,to=35840,no=35841,io=35842,so=35843,ro=36196,ao=37492,oo=37496,lo=37808,co=37809,ho=37810,fo=37811,uo=37812,po=37813,mo=37814,go=37815,vo=37816,xo=37817,_o=37818,yo=37819,Mo=37820,So=37821,wo=36492,bo=36494,Eo=36495,Ao=36283,To=36284,Ro=36285,Co=36286,of=3200,eh=3201,Yo=0,lf=1,Cn="",Jt="srgb",ps="srgb-linear",Or="linear",pt="srgb",Oi=7680,fl=519,cf=512,hf=513,ff=514,th=515,uf=516,df=517,pf=518,mf=519,ul=35044,ms=35048,dl="300 es",Nn=2e3,kr=2001;class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jr=Math.PI/180,Lo=180/Math.PI;function Qs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function gf(i,e){return(i%e+e)%e}function Zr(i,e,t){return(1-t)*i+t*e}function Es(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const u=r[a+0],d=r[a+1],v=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==u||c!==d||h!==v){let m=1-o;const p=l*u+c*d+h*v+f*g,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const M=Math.sqrt(_),E=Math.atan2(M,p*y);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}const x=o*y;if(l=l*m+u*x,c=c*m+d*x,h=h*m+v*x,f=f*m+g*x,m===1-o){const M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],v=r[a+3];return e[t]=o*v+h*f+l*d-c*u,e[t+1]=l*v+h*u+c*f-o*d,e[t+2]=c*v+h*d+o*u-l*f,e[t+3]=h*v-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*v,this._y=c*d*f-u*h*v,this._z=c*h*v+u*d*f,this._w=c*h*f-u*d*v;break;case"YXZ":this._x=u*h*f+c*d*v,this._y=c*d*f-u*h*v,this._z=c*h*v-u*d*f,this._w=c*h*f+u*d*v;break;case"ZXY":this._x=u*h*f-c*d*v,this._y=c*d*f+u*h*v,this._z=c*h*v+u*d*f,this._w=c*h*f-u*d*v;break;case"ZYX":this._x=u*h*f-c*d*v,this._y=c*d*f+u*h*v,this._z=c*h*v-u*d*f,this._w=c*h*f+u*d*v;break;case"YZX":this._x=u*h*f+c*d*v,this._y=c*d*f+u*h*v,this._z=c*h*v-u*d*f,this._w=c*h*f-u*d*v;break;case"XZY":this._x=u*h*f-c*d*v,this._y=c*d*f-u*h*v,this._z=c*h*v+u*d*f,this._w=c*h*f+u*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jr.copy(this).projectOnVector(e),this.sub(Jr)}reflect(e){return this.sub(Jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new B,pl=new qt;class Ze{constructor(e,t,n,s,r,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],v=n[8],g=s[0],m=s[3],p=s[6],y=s[1],_=s[4],x=s[7],M=s[2],E=s[5],R=s[8];return r[0]=a*g+o*y+l*M,r[3]=a*m+o*_+l*E,r[6]=a*p+o*x+l*R,r[1]=c*g+h*y+f*M,r[4]=c*m+h*_+f*E,r[7]=c*p+h*x+f*R,r[2]=u*g+d*y+v*M,r[5]=u*m+d*_+v*E,r[8]=u*p+d*x+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,v=t*f+n*u+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(s*c-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=u*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new Ze;function nh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vf(){const i=Ws("canvas");return i.style.display="block",i}const ml={};function Xs(i){i in ml||(ml[i]=!0,console.warn(i))}function xf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const gl=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _f(){const i={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?Or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ps]:{primaries:e,whitePoint:n,transfer:Or,toXYZ:gl,fromXYZ:vl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:gl,fromXYZ:vl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}const lt=_f();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ki;class yf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ki===void 0&&(ki=Ws("canvas")),ki.width=e.width,ki.height=e.height;const s=ki.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mf=0;class Ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ea(s[a].image)):r.push(ea(s[a]))}else r=ea(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sf=0;const ta=new B;class kt extends ys{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Ci,s=Ci,r=un,a=oi,o=dn,l=On,c=kt.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Qs(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ta).x}get height(){return this.source.getSize(ta).y}get depth(){return this.source.getSize(ta).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qa:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qa:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=qc;kt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(d+1)/2,M=(p+1)/2,E=(h+u)/4,R=(f+g)/4,F=(v+m)/4;return _>x&&_>M?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=R/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=F/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=R/r,s=F/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(f-g)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wf extends ys{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new kt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ko(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends wf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ih extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bf extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),nr.subVectors(this.max,As),Bi.subVectors(e.a,As),Hi.subVectors(e.b,As),Gi.subVectors(e.c,As),jn.subVectors(Hi,Bi),Zn.subVectors(Gi,Hi),vi.subVectors(Bi,Gi);let t=[0,-jn.z,jn.y,0,-Zn.z,Zn.y,0,-vi.z,vi.y,jn.z,0,-jn.x,Zn.z,0,-Zn.x,vi.z,0,-vi.x,-jn.y,jn.x,0,-Zn.y,Zn.x,0,-vi.y,vi.x,0];return!na(t,Bi,Hi,Gi,nr)||(t=[1,0,0,0,1,0,0,0,1],!na(t,Bi,Hi,Gi,nr))?!1:(ir.crossVectors(jn,Zn),t=[ir.x,ir.y,ir.z],na(t,Bi,Hi,Gi,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new B,new B,new B,new B,new B,new B,new B,new B],En=new B,tr=new Ui,Bi=new B,Hi=new B,Gi=new B,jn=new B,Zn=new B,vi=new B,As=new B,nr=new B,ir=new B,xi=new B;function na(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);const o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ef=new Ui,Ts=new B,ia=new B;class pi{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ef.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(ia)),this.expandByPoint(Ts.copy(e.center).sub(ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bn=new B,sa=new B,sr=new B,Jn=new B,ra=new B,rr=new B,aa=new B;class Af{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sa.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(sa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(sr),o=Jn.dot(this.direction),l=-Jn.dot(sr),c=Jn.lengthSq(),h=Math.abs(1-a*a);let f,u,d,v;if(h>0)if(f=a*l-o,u=a*o-l,v=r*h,f>=0)if(u>=-v)if(u<=v){const g=1/h;f*=g,u*=g,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-v?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=v?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(sa).addScaledVector(sr,u),d}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,s,r){ra.subVectors(t,e),rr.subVectors(n,e),aa.crossVectors(ra,rr);let a=this.direction.dot(aa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(rr.crossVectors(Jn,rr));if(l<0)return null;const c=o*this.direction.dot(ra.cross(Jn));if(c<0||l+c>a)return null;const h=-o*Jn.dot(aa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,v,g,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,v,g,m)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Vi.setFromMatrixColumn(e,0).length(),r=1/Vi.setFromMatrixColumn(e,1).length(),a=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,d=a*f,v=o*h,g=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+v*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=v+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,v=c*h,g=c*f;t[0]=u+g*o,t[4]=v*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-v,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,v=c*h,g=c*f;t[0]=u-g*o,t[4]=-a*f,t[8]=v+d*o,t[1]=d+v*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,v=o*h,g=o*f;t[0]=l*h,t[4]=v*c-d,t[8]=u*c+g,t[1]=l*f,t[5]=g*c+u,t[9]=d*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,v=o*l,g=o*c;t[0]=l*h,t[4]=g-u*f,t[8]=v*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+v,t[10]=u-g*f}else if(e.order==="XZY"){const u=a*l,d=a*c,v=o*l,g=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+g,t[5]=a*h,t[9]=d*f-v,t[2]=v*f-d,t[6]=o*h,t[10]=g*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tf,e,Rf)}lookAt(e,t,n){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Qn.crossVectors(n,ln),Qn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Qn.crossVectors(n,ln)),Qn.normalize(),ar.crossVectors(ln,Qn),s[0]=Qn.x,s[4]=ar.x,s[8]=ln.x,s[1]=Qn.y,s[5]=ar.y,s[9]=ln.y,s[2]=Qn.z,s[6]=ar.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],v=n[2],g=n[6],m=n[10],p=n[14],y=n[3],_=n[7],x=n[11],M=n[15],E=s[0],R=s[4],F=s[8],S=s[12],w=s[1],C=s[5],z=s[9],H=s[13],N=s[2],O=s[6],P=s[10],U=s[14],A=s[3],G=s[7],k=s[11],K=s[15];return r[0]=a*E+o*w+l*N+c*A,r[4]=a*R+o*C+l*O+c*G,r[8]=a*F+o*z+l*P+c*k,r[12]=a*S+o*H+l*U+c*K,r[1]=h*E+f*w+u*N+d*A,r[5]=h*R+f*C+u*O+d*G,r[9]=h*F+f*z+u*P+d*k,r[13]=h*S+f*H+u*U+d*K,r[2]=v*E+g*w+m*N+p*A,r[6]=v*R+g*C+m*O+p*G,r[10]=v*F+g*z+m*P+p*k,r[14]=v*S+g*H+m*U+p*K,r[3]=y*E+_*w+x*N+M*A,r[7]=y*R+_*C+x*O+M*G,r[11]=y*F+_*z+x*P+M*k,r[15]=y*S+_*H+x*U+M*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+r*l*f-s*c*f-r*o*u+n*c*u+s*o*d-n*l*d)+g*(+t*l*d-t*c*u+r*a*u-s*a*d+s*c*h-r*l*h)+m*(+t*c*f-t*o*d-r*a*f+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-t*l*f+t*o*u+s*a*f-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],v=e[12],g=e[13],m=e[14],p=e[15],y=f*m*c-g*u*c+g*l*d-o*m*d-f*l*p+o*u*p,_=v*u*c-h*m*c-v*l*d+a*m*d+h*l*p-a*u*p,x=h*g*c-v*f*c+v*o*d-a*g*d-h*o*p+a*f*p,M=v*f*l-h*g*l-v*o*u+a*g*u+h*o*m-a*f*m,E=t*y+n*_+s*x+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=y*R,e[1]=(g*u*r-f*m*r-g*s*d+n*m*d+f*s*p-n*u*p)*R,e[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*p+n*l*p)*R,e[3]=(f*l*r-o*u*r-f*s*c+n*u*c+o*s*d-n*l*d)*R,e[4]=_*R,e[5]=(h*m*r-v*u*r+v*s*d-t*m*d-h*s*p+t*u*p)*R,e[6]=(v*l*r-a*m*r-v*s*c+t*m*c+a*s*p-t*l*p)*R,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*d+t*l*d)*R,e[8]=x*R,e[9]=(v*f*r-h*g*r-v*n*d+t*g*d+h*n*p-t*f*p)*R,e[10]=(a*g*r-v*o*r+v*n*c-t*g*c-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*d-t*o*d)*R,e[12]=M*R,e[13]=(h*g*s-v*f*s+v*n*u-t*g*u-h*n*m+t*f*m)*R,e[14]=(v*o*s-a*g*s-v*n*l+t*g*l+a*n*m-t*o*m)*R,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*u+t*o*u)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,v=r*f,g=a*h,m=a*f,p=o*f,y=l*c,_=l*h,x=l*f,M=n.x,E=n.y,R=n.z;return s[0]=(1-(g+p))*M,s[1]=(d+x)*M,s[2]=(v-_)*M,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(u+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(v+_)*R,s[9]=(m-y)*R,s[10]=(1-(u+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Vi.set(s[0],s[1],s[2]).length();const a=Vi.set(s[4],s[5],s[6]).length(),o=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);const c=1/r,h=1/a,f=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,t.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Nn,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let v,g;if(l)v=r/(a-r),g=a*r/(a-r);else if(o===Nn)v=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===kr)v=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Nn,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s);let v,g;if(l)v=1/(a-r),g=a/(a-r);else if(o===Nn)v=-2/(a-r),g=-(a+r)/(a-r);else if(o===kr)v=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vi=new B,An=new ut,Tf=new B(0,0,0),Rf=new B(1,1,1),Qn=new B,ar=new B,ln=new B,xl=new ut,_l=new qt;class wn{constructor(e=0,t=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cf=0;const yl=new B,Wi=new qt,Hn=new ut,or=new B,Rs=new B,Lf=new B,Pf=new qt,Ml=new B(1,0,0),Sl=new B(0,1,0),wl=new B(0,0,1),bl={type:"added"},Df={type:"removed"},Xi={type:"childadded",child:null},oa={type:"childremoved",child:null};class Bt extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new B,t=new wn,n=new qt,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ze}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Ml,e)}rotateY(e){return this.rotateOnAxis(Sl,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return yl.copy(e).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ml,e)}translateY(e){return this.translateOnAxis(Sl,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?or.copy(e):or.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Rs,or,this.up):Hn.lookAt(or,Rs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Df),oa.child=e,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,Lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Bt.DEFAULT_UP=new B(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new B,Gn=new B,la=new B,Vn=new B,qi=new B,$i=new B,El=new B,ca=new B,ha=new B,fa=new B,ua=new it,da=new it,pa=new it;class Ln{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Gn.subVectors(n,t),la.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(Gn),l=Tn.dot(la),c=Gn.dot(Gn),h=Gn.dot(la),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,v=(a*h-o*l)*u;return r.set(1-d-v,v,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ua.setScalar(0),da.setScalar(0),pa.setScalar(0),ua.fromBufferAttribute(e,t),da.fromBufferAttribute(e,n),pa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ua,r.x),a.addScaledVector(da,r.y),a.addScaledVector(pa,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Gn.subVectors(e,t),Tn.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Tn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;qi.subVectors(s,n),$i.subVectors(r,n),ca.subVectors(e,n);const l=qi.dot(ca),c=$i.dot(ca);if(l<=0&&c<=0)return t.copy(n);ha.subVectors(e,s);const h=qi.dot(ha),f=$i.dot(ha);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(qi,a);fa.subVectors(e,r);const d=qi.dot(fa),v=$i.dot(fa);if(v>=0&&d<=v)return t.copy(r);const g=d*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector($i,o);const m=h*v-d*f;if(m<=0&&f-h>=0&&d-v>=0)return El.subVectors(r,s),o=(f-h)/(f-h+(d-v)),t.copy(s).addScaledVector(El,o);const p=1/(m+g+u);return a=g*p,o=u*p,t.copy(n).addScaledVector(qi,a).addScaledVector($i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},lr={h:0,s:0,l:0};function ma(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=gf(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ma(a,r,e+1/3),this.g=ma(a,r,e),this.b=ma(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=rh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return lt.workingToColorSpace(Vt.copy(this),e),Math.round(Qe(Vt.r*255,0,255))*65536+Math.round(Qe(Vt.g*255,0,255))*256+Math.round(Qe(Vt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Jt){lt.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,s=Vt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(lr);const n=Zr(ei.h,lr.h,t),s=Zr(ei.s,lr.s,t),r=Zr(ei.l,lr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new We;We.NAMES=rh;let If=0;class Ms extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=os,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Va,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qs extends Ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new B,cr=new Ve;let Uf=0;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ul,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ul&&(e.usage=this.usage),e}}class gs extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jo extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ff=0;const xn=new ut,ga=new Bt,Yi=new B,cn=new Ui,Cs=new Ui,zt=new B;class Mt extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nh(e)?jo:gs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(cn.min,Cs.min),cn.expandByPoint(zt),zt.addVectors(cn.max,Cs.max),cn.expandByPoint(zt)):(cn.expandByPoint(Cs.min),cn.expandByPoint(Cs.max))}cn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(e,c),zt.add(Yi)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new B,l[F]=new B;const c=new B,h=new B,f=new B,u=new Ve,d=new Ve,v=new Ve,g=new B,m=new B;function p(F,S,w){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,w),u.fromBufferAttribute(r,F),d.fromBufferAttribute(r,S),v.fromBufferAttribute(r,w),h.sub(c),f.sub(c),d.sub(u),v.sub(u);const C=1/(d.x*v.y-v.x*d.y);isFinite(C)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(C),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(C),o[F].add(g),o[S].add(g),o[w].add(g),l[F].add(m),l[S].add(m),l[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,S=y.length;F<S;++F){const w=y[F],C=w.start,z=w.count;for(let H=C,N=C+z;H<N;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new B,x=new B,M=new B,E=new B;function R(F){M.fromBufferAttribute(s,F),E.copy(M);const S=o[F];_.copy(S),_.sub(M.multiplyScalar(M.dot(S))).normalize(),x.crossVectors(E,S);const C=x.dot(l[F])<0?-1:1;a.setXYZW(F,_.x,_.y,_.z,C)}for(let F=0,S=y.length;F<S;++F){const w=y[F],C=w.start,z=w.count;for(let H=C,N=C+z;H<N;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(e)for(let u=0,d=e.count;u<d;u+=3){const v=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*h;for(let p=0;p<h;p++)u[v++]=c[d++]}return new xt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new ut,_i=new Af,hr=new pi,Tl=new B,fr=new B,ur=new B,dr=new B,va=new B,pr=new B,Rl=new B,mr=new B;class vt extends Bt{constructor(e=new Mt,t=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(va.fromBufferAttribute(f,e),a?pr.addScaledVector(va,h):pr.addScaledVector(va.sub(t),h))}t.add(pr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(hr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(hr,Tl)===null||_i.origin.distanceToSquared(Tl)>(e.far-e.near)**2))&&(Al.copy(r).invert(),_i.copy(e.ray).applyMatrix4(Al),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=u.length;v<g;v++){const m=u[v],p=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,M=_;x<M;x+=3){const E=o.getX(x),R=o.getX(x+1),F=o.getX(x+2);s=gr(this,p,e,n,c,h,f,E,R,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const y=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);s=gr(this,a,e,n,c,h,f,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=u.length;v<g;v++){const m=u[v],p=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,M=_;x<M;x+=3){const E=x,R=x+1,F=x+2;s=gr(this,p,e,n,c,h,f,E,R,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const y=m,_=m+1,x=m+2;s=gr(this,a,e,n,c,h,f,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Nf(i,e,t,n,s,r,a,o){let l;if(e.side===Qt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ui,o),l===null)return null;mr.copy(o),mr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(mr);return c<t.near||c>t.far?null:{distance:c,point:mr.clone(),object:i}}function gr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,fr),i.getVertexPosition(l,ur),i.getVertexPosition(c,dr);const h=Nf(i,e,t,n,fr,ur,dr,Rl);if(h){const f=new B;Ln.getBarycoord(Rl,fr,ur,dr,f),s&&(h.uv=Ln.getInterpolatedAttribute(s,o,l,c,f,new Ve)),r&&(h.uv1=Ln.getInterpolatedAttribute(r,o,l,c,f,new Ve)),a&&(h.normal=Ln.getInterpolatedAttribute(a,o,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new B,materialIndex:0};Ln.getNormal(fr,ur,dr,u.normal),h.face=u,h.barycoord=f}return h}class Fi extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2));function v(g,m,p,y,_,x,M,E,R,F,S){const w=x/R,C=M/F,z=x/2,H=M/2,N=E/2,O=R+1,P=F+1;let U=0,A=0;const G=new B;for(let k=0;k<P;k++){const K=k*C-H;for(let ee=0;ee<O;ee++){const ue=ee*w-z;G[g]=ue*y,G[m]=K*_,G[p]=N,c.push(G.x,G.y,G.z),G[g]=0,G[m]=0,G[p]=E>0?1:-1,h.push(G.x,G.y,G.z),f.push(ee/R),f.push(1-k/F),U+=1}}for(let k=0;k<F;k++)for(let K=0;K<R;K++){const ee=u+K+O*k,ue=u+K+O*(k+1),Ee=u+(K+1)+O*(k+1),he=u+(K+1)+O*k;l.push(ee,ue,he),l.push(ue,Ee,he),A+=6}o.addGroup(d,A,S),d+=A,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=vs(i[t]);for(const s in n)e[s]=n[s]}return e}function zf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ah(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Of={clone:vs,merge:Zt};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oh extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new B,Cl=new Ve,Ll=new Ve;class Sn extends oh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Cl,Ll),t.subVectors(Ll,Cl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,ji=1;class Hf extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(Ki,ji,e,t);s.layers=this.layers,this.add(s);const r=new Sn(Ki,ji,e,t);r.layers=this.layers,this.add(r);const a=new Sn(Ki,ji,e,t);a.layers=this.layers,this.add(a);const o=new Sn(Ki,ji,e,t);o.layers=this.layers,this.add(o);const l=new Sn(Ki,ji,e,t);l.layers=this.layers,this.add(l);const c=new Sn(Ki,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class lh extends kt{constructor(e=[],t=us,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gf extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new lh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fi(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:ci});r.uniforms.tEquirect.value=t;const a=new vt(s,r),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=un),new Hf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class $t extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vf={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new Zo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Po extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gr extends kt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Yt,h=Yt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi extends xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zi=new ut,Pl=new ut,vr=[],Dl=new Ui,Wf=new ut,Ls=new vt,Ps=new pi;class $s extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zi),Dl.copy(e.boundingBox).applyMatrix4(Zi),this.boundingBox.union(Dl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zi),Ps.copy(e.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),e.ray.intersectsSphere(Ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zi),Pl.multiplyMatrices(n,Zi),Ls.matrixWorld=Pl,Ls.raycast(e,vr);for(let a=0,o=vr.length;a<o;a++){const l=vr[a];l.instanceId=r,l.object=this,t.push(l)}vr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gr(new Float32Array(s*this.count),s,this.count,Vs,Pn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _a=new B,Xf=new B,qf=new Ze;class Ei{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=_a.subVectors(n,t).cross(Xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qf.getNormalMatrix(e),s=this.coplanarPoint(_a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new pi,$f=new Ve(.5,.5),xr=new B;class Vr{constructor(e=new Ei,t=new Ei,n=new Ei,s=new Ei,r=new Ei,a=new Ei){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],v=r[8],g=r[9],m=r[10],p=r[11],y=r[12],_=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-a,d-h,p-v,M-y).normalize(),s[1].setComponents(c+a,d+h,p+v,M+y).normalize(),s[2].setComponents(c+o,d+f,p+g,M+_).normalize(),s[3].setComponents(c-o,d-f,p-g,M-_).normalize(),n)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,d-u,p-m,M-x).normalize();else if(s[4].setComponents(c-l,d-u,p-m,M-x).normalize(),t===Nn)s[5].setComponents(c+l,d+u,p+m,M+x).normalize();else if(t===kr)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=$f.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(xr.x=s.normal.x>0?e.max.x:e.min.x,xr.y=s.normal.y>0?e.max.y:e.min.y,xr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yf extends kt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jo extends kt{constructor(e,t,n=di,s,r,a,o=Yt,l=Yt,c,h=Hs,f=1){if(h!==Hs&&h!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ch extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wr extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let v=0;const g=[],m=n/2;let p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new tt(f,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(d,2));function y(){const x=new B,M=new B;let E=0;const R=(t-e)/n;for(let F=0;F<=r;F++){const S=[],w=F/r,C=w*(t-e)+e;for(let z=0;z<=s;z++){const H=z/s,N=H*l+o,O=Math.sin(N),P=Math.cos(N);M.x=C*O,M.y=-w*n+m,M.z=C*P,f.push(M.x,M.y,M.z),x.set(O,R,P).normalize(),u.push(x.x,x.y,x.z),d.push(H,1-w),S.push(v++)}g.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){const w=g[S][F],C=g[S+1][F],z=g[S+1][F+1],H=g[S][F+1];(e>0||S!==0)&&(h.push(w,C,H),E+=3),(t>0||S!==r-1)&&(h.push(C,z,H),E+=3)}c.addGroup(p,E,0),p+=E}function _(x){const M=v,E=new Ve,R=new B;let F=0;const S=x===!0?e:t,w=x===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*w,0),u.push(0,w,0),d.push(.5,.5),v++;const C=v;for(let z=0;z<=s;z++){const N=z/s*l+o,O=Math.cos(N),P=Math.sin(N);R.x=S*P,R.y=m*w,R.z=S*O,f.push(R.x,R.y,R.z),u.push(0,w,0),E.x=O*.5+.5,E.y=P*.5*w+.5,d.push(E.x,E.y),v++}for(let z=0;z<s;z++){const H=M+z,N=C+z;x===!0?h.push(N,N+1,H):h.push(N+1,N,H),F+=3}c.addGroup(p,F,x===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}function Kf(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=hh(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=eu(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let h=-1/0,f=-1/0;for(let u=t;u<s;u+=t){const d=i[u],v=i[u+1];d<o&&(o=d),v<l&&(l=v),d>h&&(h=d),v>f&&(f=v)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Ys(r,a,t,o,l,c,0),a}function hh(i,e,t,n,s){let r;if(s===fu(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Il(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Il(a/n|0,i[a],i[a+1],r);return r&&xs(r,r.next)&&(js(r),r=r.next),r}function Ii(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(xs(t,t.next)||Et(t.prev,t,t.next)===0)){if(js(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ys(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ru(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Zf(i,n,s,r):jf(i)){e.push(l.i,i.i,c.i),js(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Jf(Ii(i),e),Ys(i,e,t,n,s,r,2)):a===2&&Qf(i,e,t,n,s,r):Ys(Ii(i),e,t,n,s,r,1);break}}}function jf(i){const e=i.prev,t=i,n=i.next;if(Et(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c);let v=n.next;for(;v!==e;){if(v.x>=h&&v.x<=u&&v.y>=f&&v.y<=d&&Ns(s,o,r,l,a,c,v.x,v.y)&&Et(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Zf(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Et(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),v=Math.min(h,f,u),g=Math.max(o,l,c),m=Math.max(h,f,u),p=Do(d,v,e,t,n),y=Do(g,m,e,t,n);let _=i.prevZ,x=i.nextZ;for(;_&&_.z>=p&&x&&x.z<=y;){if(_.x>=d&&_.x<=g&&_.y>=v&&_.y<=m&&_!==s&&_!==a&&Ns(o,h,l,f,c,u,_.x,_.y)&&Et(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=g&&x.y>=v&&x.y<=m&&x!==s&&x!==a&&Ns(o,h,l,f,c,u,x.x,x.y)&&Et(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=g&&_.y>=v&&_.y<=m&&_!==s&&_!==a&&Ns(o,h,l,f,c,u,_.x,_.y)&&Et(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=g&&x.y>=v&&x.y<=m&&x!==s&&x!==a&&Ns(o,h,l,f,c,u,x.x,x.y)&&Et(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Jf(i,e){let t=i;do{const n=t.prev,s=t.next.next;!xs(n,s)&&uh(n,t,t.next,s)&&Ks(n,s)&&Ks(s,n)&&(e.push(n.i,t.i,s.i),js(t),js(t.next),t=i=s),t=t.next}while(t!==i);return Ii(t)}function Qf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&lu(a,o)){let l=dh(a,o);a=Ii(a,a.next),l=Ii(l,l.next),Ys(a,e,t,n,s,r,0),Ys(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function eu(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=hh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ou(c))}s.sort(tu);for(let r=0;r<s.length;r++)t=nu(s[r],t);return t}function tu(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function nu(i,e){const t=iu(i,e);if(!t)return e;const n=dh(t,i);return Ii(n,n.next),Ii(t,t.next)}function iu(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(xs(i,t))return t;do{if(xs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&fh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);Ks(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&su(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function su(i,e){return Et(i.prev,i,e.prev)<0&&Et(e.next,i,i.next)<0}function ru(i,e,t,n){let s=i;do s.z===0&&(s.z=Do(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,au(s)}function au(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Do(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ou(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function fh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ns(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&fh(i,e,t,n,s,r,a,o)}function lu(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cu(i,e)&&(Ks(i,e)&&Ks(e,i)&&hu(i,e)&&(Et(i.prev,i,e.prev)||Et(i,e.prev,e))||xs(i,e)&&Et(i.prev,i,i.next)>0&&Et(e.prev,e,e.next)>0)}function Et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function xs(i,e){return i.x===e.x&&i.y===e.y}function uh(i,e,t,n){const s=yr(Et(i,e,t)),r=yr(Et(i,e,n)),a=yr(Et(t,n,i)),o=yr(Et(t,n,e));return!!(s!==r&&a!==o||s===0&&_r(i,t,e)||r===0&&_r(i,n,e)||a===0&&_r(t,i,n)||o===0&&_r(t,e,n))}function _r(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function yr(i){return i>0?1:i<0?-1:0}function cu(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&uh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ks(i,e){return Et(i.prev,i,i.next)<0?Et(i,e,i.next)>=0&&Et(i,i.prev,e)>=0:Et(i,e,i.prev)<0||Et(i,i.next,e)<0}function hu(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function dh(i,e){const t=Io(i.i,i.x,i.y),n=Io(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Il(i,e,t,n){const s=Io(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Io(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fu(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class uu{static triangulate(e,t,n=2){return Kf(e,t,n)}}class Qo{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Qo.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ul(e),Fl(n,e);let a=e.length;t.forEach(Ul);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Fl(n,t[l]);const o=uu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Ul(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Xr extends Mt{constructor(e=[new Ve(0,-.5),new Ve(.5,0),new Ve(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qe(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,f=new B,u=new Ve,d=new B,v=new B,g=new B;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(v)}for(let y=0;y<=t;y++){const _=n+y*h*s,x=Math.sin(_),M=Math.cos(_);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*x,f.y=e[E].y,f.z=e[E].x*M,a.push(f.x,f.y,f.z),u.x=y/t,u.y=E/(e.length-1),o.push(u.x,u.y);const R=l[3*E+0]*x,F=l[3*E+1],S=l[3*E+0]*M;c.push(R,F,S)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const x=_+y*e.length,M=x,E=x+e.length,R=x+e.length+1,F=x+1;r.push(M,E,F),r.push(R,F,E)}this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("uv",new tt(o,2)),this.setAttribute("normal",new tt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.points,e.segments,e.phiStart,e.phiLength)}}class mi extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],v=[],g=[],m=[];for(let p=0;p<h;p++){const y=p*u-a;for(let _=0;_<c;_++){const x=_*f-r;v.push(x,-y,0),g.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const _=y+c*p,x=y+c*(p+1),M=y+1+c*(p+1),E=y+1+c*p;d.push(_,x,E),d.push(x,M,E)}this.setIndex(d),this.setAttribute("position",new tt(v,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.widthSegments,e.heightSegments)}}class el extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new B,u=new B,d=[],v=[],g=[],m=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){const E=M/t;f.x=-e*Math.cos(s+E*r)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(s+E*r)*Math.sin(a+_*o),v.push(f.x,f.y,f.z),u.copy(f).normalize(),g.push(u.x,u.y,u.z),m.push(E+x,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=h[p][y+1],x=h[p][y],M=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&d.push(_,x,E),(p!==n-1||l<Math.PI)&&d.push(x,M,E)}this.setIndex(d),this.setAttribute("position",new tt(v,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tl extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new B,f=new B,u=new B;for(let d=0;d<=n;d++)for(let v=0;v<=s;v++){const g=v/s*r,m=d/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(g),f.y=(e+t*Math.cos(m))*Math.sin(g),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(v/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let v=1;v<=s;v++){const g=(s+1)*d+v-1,m=(s+1)*(d-1)+v-1,p=(s+1)*(d-1)+v,y=(s+1)*d+v;a.push(g,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ss extends Ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ph extends Ss{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zn extends Ms{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mh extends Ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class du extends Ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ya={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class pu{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],v=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const mu=new pu;class nl{constructor(e){this.manager=e!==void 0?e:mu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}nl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ji=new WeakMap;class gu extends nl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ya.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Ji.get(a);f===void 0&&(f=[],Ji.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=Ws("img");function l(){h(),t&&t(this);const f=Ji.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Ji.delete(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),ya.remove(`image:${e}`);const u=Ji.get(this)||[];for(let d=0;d<u.length;d++){const v=u[d];v.onError&&v.onError(f)}Ji.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ya.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class gh extends nl{constructor(e){super(e)}load(e,t,n,s){const r=new kt,a=new gu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class vh extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class vu extends vh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ma=new ut,Nl=new B,zl=new B;class xu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nl),zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zl),t.updateMatrixWorld(),Ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class il extends oh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _u extends xu{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yu extends vh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new _u}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mu extends Mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Su extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ol(i,e,t,n){const s=wu(n);switch(t){case Zc:return i*e;case Vs:return i*e/s.components*s.byteLength;case Xo:return i*e/s.components*s.byteLength;case Qc:return i*e*2/s.components*s.byteLength;case qo:return i*e*2/s.components*s.byteLength;case Jc:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case $o:return i*e*4/s.components*s.byteLength;case Dr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:case so:return Math.max(i,16)*Math.max(e,8)/4;case to:case io:return Math.max(i,8)*Math.max(e,8)/2;case ro:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wo:case bo:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ao:case To:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ro:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wu(i){switch(i){case On:case $c:return{byteLength:1,components:1};case ks:case Yc:case Di:return{byteLength:2,components:1};case Vo:case Wo:return{byteLength:2,components:4};case di:case Go:case Pn:return{byteLength:4,components:1};case Kc:case jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bu(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<f.length;d++){const v=f[u],g=f[d];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++u,f[u]=g)}f.length=u+1;for(let d=0,v=f.length;d<v;d++){const g=f[d];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Au=`#ifdef USE_ALPHAHASH
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
#endif`,Tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pu=`#ifdef USE_AOMAP
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
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iu=`#ifdef USE_BATCHING
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
#endif`,Uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ou=`#ifdef USE_IRIDESCENCE
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
#endif`,ku=`#ifdef USE_BUMPMAP
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
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yu=`#define PI 3.141592653589793
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
} // validated`,Ku=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ju=`vec3 transformedNormal = objectNormal;
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
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ud=`#ifdef USE_GRADIENTMAP
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
}`,dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gd=`uniform bool receiveShadow;
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
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sd=`PhysicalMaterial material;
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
#endif`,wd=`struct PhysicalMaterial {
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
}`,bd=`
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
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Td=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ud=`#if defined( USE_POINTS_UV )
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
#endif`,Fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bd=`#ifdef USE_MORPHTARGETS
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
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$d=`#ifdef USE_NORMALMAP
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
#endif`,Yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cp=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,_p=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ep=`uniform sampler2D t2D;
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
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
}`,Pp=`#if DEPTH_PACKING == 3200
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
}`,Ip=`#define DISTANCE
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Op=`#include <common>
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
}`,kp=`uniform vec3 diffuse;
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
}`,Bp=`#define LAMBERT
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
}`,Hp=`#define LAMBERT
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
}`,Gp=`#define MATCAP
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
}`,Vp=`#define MATCAP
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
}`,Wp=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define PHONG
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
}`,$p=`#define PHONG
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
}`,Yp=`#define STANDARD
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
}`,Kp=`#define STANDARD
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
}`,jp=`#define TOON
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
}`,Zp=`#define TOON
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
}`,Jp=`uniform float size;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,t0=`uniform vec3 color;
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
}`,n0=`uniform float rotation;
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
}`,i0=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Eu,alphahash_pars_fragment:Au,alphamap_fragment:Tu,alphamap_pars_fragment:Ru,alphatest_fragment:Cu,alphatest_pars_fragment:Lu,aomap_fragment:Pu,aomap_pars_fragment:Du,batching_pars_vertex:Iu,batching_vertex:Uu,begin_vertex:Fu,beginnormal_vertex:Nu,bsdfs:zu,iridescence_fragment:Ou,bumpmap_pars_fragment:ku,clipping_planes_fragment:Bu,clipping_planes_pars_fragment:Hu,clipping_planes_pars_vertex:Gu,clipping_planes_vertex:Vu,color_fragment:Wu,color_pars_fragment:Xu,color_pars_vertex:qu,color_vertex:$u,common:Yu,cube_uv_reflection_fragment:Ku,defaultnormal_vertex:ju,displacementmap_pars_vertex:Zu,displacementmap_vertex:Ju,emissivemap_fragment:Qu,emissivemap_pars_fragment:ed,colorspace_fragment:td,colorspace_pars_fragment:nd,envmap_fragment:id,envmap_common_pars_fragment:sd,envmap_pars_fragment:rd,envmap_pars_vertex:ad,envmap_physical_pars_fragment:vd,envmap_vertex:od,fog_vertex:ld,fog_pars_vertex:cd,fog_fragment:hd,fog_pars_fragment:fd,gradientmap_pars_fragment:ud,lightmap_pars_fragment:dd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:md,lights_pars_begin:gd,lights_toon_fragment:xd,lights_toon_pars_fragment:_d,lights_phong_fragment:yd,lights_phong_pars_fragment:Md,lights_physical_fragment:Sd,lights_physical_pars_fragment:wd,lights_fragment_begin:bd,lights_fragment_maps:Ed,lights_fragment_end:Ad,logdepthbuf_fragment:Td,logdepthbuf_pars_fragment:Rd,logdepthbuf_pars_vertex:Cd,logdepthbuf_vertex:Ld,map_fragment:Pd,map_pars_fragment:Dd,map_particle_fragment:Id,map_particle_pars_fragment:Ud,metalnessmap_fragment:Fd,metalnessmap_pars_fragment:Nd,morphinstance_vertex:zd,morphcolor_vertex:Od,morphnormal_vertex:kd,morphtarget_pars_vertex:Bd,morphtarget_vertex:Hd,normal_fragment_begin:Gd,normal_fragment_maps:Vd,normal_pars_fragment:Wd,normal_pars_vertex:Xd,normal_vertex:qd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:Yd,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Zd,opaque_fragment:Jd,packing:Qd,premultiplied_alpha_fragment:ep,project_vertex:tp,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:sp,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:hp,skinning_pars_vertex:fp,skinning_vertex:up,skinnormal_vertex:dp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:vp,transmission_fragment:xp,transmission_pars_fragment:_p,uv_pars_fragment:yp,uv_pars_vertex:Mp,uv_vertex:Sp,worldpos_vertex:wp,background_vert:bp,background_frag:Ep,backgroundCube_vert:Ap,backgroundCube_frag:Tp,cube_vert:Rp,cube_frag:Cp,depth_vert:Lp,depth_frag:Pp,distanceRGBA_vert:Dp,distanceRGBA_frag:Ip,equirect_vert:Up,equirect_frag:Fp,linedashed_vert:Np,linedashed_frag:zp,meshbasic_vert:Op,meshbasic_frag:kp,meshlambert_vert:Bp,meshlambert_frag:Hp,meshmatcap_vert:Gp,meshmatcap_frag:Vp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:qp,meshphong_frag:$p,meshphysical_vert:Yp,meshphysical_frag:Kp,meshtoon_vert:jp,meshtoon_frag:Zp,points_vert:Jp,points_frag:Qp,shadow_vert:e0,shadow_frag:t0,sprite_vert:n0,sprite_frag:i0},Re={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Fn={basic:{uniforms:Zt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Zt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new We(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Zt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Zt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Zt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new We(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Zt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Zt([Re.points,Re.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Zt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Zt([Re.common,Re.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Zt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Zt([Re.sprite,Re.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Zt([Re.common,Re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Zt([Re.lights,Re.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Fn.physical={uniforms:Zt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Mr={r:0,b:0,g:0},Mi=new wn,s0=new ut;function r0(i,e,t,n,s,r,a){const o=new We(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function g(_){let x=!1;const M=v(_);M===null?p(o,l):M&&M.isColor&&(p(M,1),x=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,x){const M=v(x);M&&(M.isCubeTexture||M.mapping===Hr)?(h===void 0&&(h=new vt(new Fi(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:vs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Mi.copy(x.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(s0.makeRotationFromEuler(Mi)),h.material.toneMapped=lt.getTransfer(M.colorSpace)!==pt,(f!==M||u!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,u=M.version,d=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new vt(new mi(2,2),new bn({name:"BackgroundMaterial",uniforms:vs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=lt.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,x){_.getRGB(Mr,ah(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,x,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:g,addToRenderList:m,dispose:y}}function a0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(w,C,z,H,N){let O=!1;const P=f(H,z,C);r!==P&&(r=P,c(r.object)),O=d(w,H,z,N),O&&v(w,H,z,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,x(w,C,z,H),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function f(w,C,z){const H=z.wireframe===!0;let N=n[w.id];N===void 0&&(N={},n[w.id]=N);let O=N[C.id];O===void 0&&(O={},N[C.id]=O);let P=O[H];return P===void 0&&(P=u(l()),O[H]=P),P}function u(w){const C=[],z=[],H=[];for(let N=0;N<t;N++)C[N]=0,z[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:H,object:w,attributes:{},index:null}}function d(w,C,z,H){const N=r.attributes,O=C.attributes;let P=0;const U=z.getAttributes();for(const A in U)if(U[A].location>=0){const k=N[A];let K=O[A];if(K===void 0&&(A==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),A==="instanceColor"&&w.instanceColor&&(K=w.instanceColor)),k===void 0||k.attribute!==K||K&&k.data!==K.data)return!0;P++}return r.attributesNum!==P||r.index!==H}function v(w,C,z,H){const N={},O=C.attributes;let P=0;const U=z.getAttributes();for(const A in U)if(U[A].location>=0){let k=O[A];k===void 0&&(A==="instanceMatrix"&&w.instanceMatrix&&(k=w.instanceMatrix),A==="instanceColor"&&w.instanceColor&&(k=w.instanceColor));const K={};K.attribute=k,k&&k.data&&(K.data=k.data),N[A]=K,P++}r.attributes=N,r.attributesNum=P,r.index=H}function g(){const w=r.newAttributes;for(let C=0,z=w.length;C<z;C++)w[C]=0}function m(w){p(w,0)}function p(w,C){const z=r.newAttributes,H=r.enabledAttributes,N=r.attributeDivisors;z[w]=1,H[w]===0&&(i.enableVertexAttribArray(w),H[w]=1),N[w]!==C&&(i.vertexAttribDivisor(w,C),N[w]=C)}function y(){const w=r.newAttributes,C=r.enabledAttributes;for(let z=0,H=C.length;z<H;z++)C[z]!==w[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function _(w,C,z,H,N,O,P){P===!0?i.vertexAttribIPointer(w,C,z,N,O):i.vertexAttribPointer(w,C,z,H,N,O)}function x(w,C,z,H){g();const N=H.attributes,O=z.getAttributes(),P=C.defaultAttributeValues;for(const U in O){const A=O[U];if(A.location>=0){let G=N[U];if(G===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(G=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(G=w.instanceColor)),G!==void 0){const k=G.normalized,K=G.itemSize,ee=e.get(G);if(ee===void 0)continue;const ue=ee.buffer,Ee=ee.type,he=ee.bytesPerElement,Y=Ee===i.INT||Ee===i.UNSIGNED_INT||G.gpuType===Go;if(G.isInterleavedBufferAttribute){const $=G.data,oe=$.stride,Se=G.offset;if($.isInstancedInterleavedBuffer){for(let we=0;we<A.locationSize;we++)p(A.location+we,$.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let we=0;we<A.locationSize;we++)m(A.location+we);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let we=0;we<A.locationSize;we++)_(A.location+we,K/A.locationSize,Ee,k,oe*he,(Se+K/A.locationSize*we)*he,Y)}else{if(G.isInstancedBufferAttribute){for(let $=0;$<A.locationSize;$++)p(A.location+$,G.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let $=0;$<A.locationSize;$++)m(A.location+$);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let $=0;$<A.locationSize;$++)_(A.location+$,K/A.locationSize,Ee,k,K*he,K/A.locationSize*$*he,Y)}}else if(P!==void 0){const k=P[U];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(A.location,k);break;case 3:i.vertexAttrib3fv(A.location,k);break;case 4:i.vertexAttrib4fv(A.location,k);break;default:i.vertexAttrib1fv(A.location,k)}}}}y()}function M(){F();for(const w in n){const C=n[w];for(const z in C){const H=C[z];for(const N in H)h(H[N].object),delete H[N];delete C[z]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;const C=n[w.id];for(const z in C){const H=C[z];for(const N in H)h(H[N].object),delete H[N];delete C[z]}delete n[w.id]}function R(w){for(const C in n){const z=n[C];if(z[w.id]===void 0)continue;const H=z[w.id];for(const N in H)h(H[N].object),delete H[N];delete z[w.id]}}function F(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function o0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let v=0;v<f;v++)d+=h[v];t.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)a(c[v],h[v],u[v]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let v=0;for(let g=0;g<f;g++)v+=h[g]*u[g];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function l0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const F=R===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==On&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Pn&&!F)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=v>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:M,maxSamples:E}}function c0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ei,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,_=y*4;let x=p.clippingState||null;l.value=x,x=h(v,u,_,d);for(let M=0;M!==_;++M)x[M]=t[M];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=d+g*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=d;_!==g;++_,x+=4)a.copy(f[_]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function h0(i){let e=new WeakMap;function t(a,o){return o===Za?a.mapping=us:o===Ja&&(a.mapping=ds),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Za||o===Ja)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gf(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const rs=4,kl=[.125,.215,.35,.446,.526,.582],Ri=20,Sa=new il,Bl=new We;let wa=null,ba=0,Ea=0,Aa=!1;const Ai=(1+Math.sqrt(5))/2,Qi=1/Ai,Hl=[new B(-Ai,Qi,0),new B(Ai,Qi,0),new B(-Qi,0,Ai),new B(Qi,0,Ai),new B(0,Ai,-Qi),new B(0,Ai,Qi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],f0=new B;class Uo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=f0}=r;wa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,ba,Ea),this._renderer.xr.enabled=Aa,e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Di,format:dn,colorSpace:ps,depthBuffer:!1},s=Gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u0(r)),this._blurMaterial=d0(r,e,t)}return s}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,n,s,r){const l=new Sn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Bl),f.toneMapping=hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const g=new qs({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),m=new vt(new Fi,g);let p=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Bl),p=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const M=this._cubeSize;Sr(s,x*M,_>2?M:0,M,M),f.setRenderTarget(s),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===us||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Sr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Hl[(s-r-1)%Hl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new vt(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ri-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const p=[];let y=0;for(let R=0;R<Ri;++R){const F=R/g,S=Math.exp(-F*F/2);p.push(S),R===0?y+=S:R<m&&(y+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-n;const x=this._sizeLods[s],M=3*x*(s>_-rs?s-_+rs:0),E=4*(this._cubeSize-x);Sr(t,M,E,3*x,2*x),l.setRenderTarget(t),l.render(f,Sa)}}function u0(i){const e=[],t=[],n=[];let s=i;const r=i-rs+1+kl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-rs?l=kl[a-i+rs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,v=6,g=3,m=2,p=1,y=new Float32Array(g*v*d),_=new Float32Array(m*v*d),x=new Float32Array(p*v*d);for(let E=0;E<d;E++){const R=E%3*2/3-1,F=E>2?0:-1,S=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];y.set(S,g*v*E),_.set(u,m*v*E);const w=[E,E,E,E,E,E];x.set(w,p*v*E)}const M=new Mt;M.setAttribute("position",new xt(y,g)),M.setAttribute("uv",new xt(_,m)),M.setAttribute("faceIndex",new xt(x,p)),e.push(M),s>rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gl(i,e,t){const n=new Yn(i,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function d0(i,e,t){const n=new Float32Array(Ri),s=new B(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Vl(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Wl(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function p0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Za||l===Ja,h=l===us||l===ds;if(c||h){let f=e.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Uo(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Uo(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function m0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function g0(i,e,t,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,v=f.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let _=0,x=y.length;_<x;_+=3){const M=y[_+0],E=y[_+1],R=y[_+2];u.push(M,E,E,R,R,M)}}else if(v!==void 0){const y=v.array;g=v.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const M=_+0,E=_+1,R=_+2;u.push(M,E,E,R,R,M)}}else return;const m=new(nh(u)?jo:gs)(u,1);m.version=g;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function v0(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,v){v!==0&&(i.drawElementsInstanced(n,d,r,u*a,v),t.update(d,n,v))}function h(u,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];t.update(m,n,1)}function f(u,d,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,g,0,v);let p=0;for(let y=0;y<v;y++)p+=d[y]*g[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function x0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _0(i,e,t){const n=new WeakMap,s=new it;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let w=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",w)};var d=w;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let x=0;v===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let M=o.attributes.position.count*x,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const R=new Float32Array(M*E*4*f),F=new ih(R,M,E,f);F.type=Pn,F.needsUpdate=!0;const S=x*4;for(let C=0;C<f;C++){const z=p[C],H=y[C],N=_[C],O=M*E*4*C;for(let P=0;P<z.count;P++){const U=P*S;v===!0&&(s.fromBufferAttribute(z,P),R[O+U+0]=s.x,R[O+U+1]=s.y,R[O+U+2]=s.z,R[O+U+3]=0),g===!0&&(s.fromBufferAttribute(H,P),R[O+U+4]=s.x,R[O+U+5]=s.y,R[O+U+6]=s.z,R[O+U+7]=0),m===!0&&(s.fromBufferAttribute(N,P),R[O+U+8]=s.x,R[O+U+9]=s.y,R[O+U+10]=s.z,R[O+U+11]=N.itemSize===4?s.w:1)}}u={count:f,texture:F,size:new Ve(M,E)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function y0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const _h=new kt,Xl=new Jo(1,1),yh=new ih,Mh=new bf,Sh=new lh,ql=[],$l=[],Yl=new Float32Array(16),Kl=new Float32Array(9),jl=new Float32Array(4);function ws(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ql[s];if(r===void 0&&(r=new Float32Array(s),ql[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qr(i,e){let t=$l[e];t===void 0&&(t=new Int32Array(e),$l[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function M0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function S0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function w0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function b0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function E0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),Ft(t,n)}}function A0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Kl.set(n),i.uniformMatrix3fv(this.addr,!1,Kl),Ft(t,n)}}function T0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Yl.set(n),i.uniformMatrix4fv(this.addr,!1,Yl),Ft(t,n)}}function R0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function C0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function L0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function P0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function D0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function I0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function U0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function N0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xl.compareFunction=th,r=Xl):r=_h,t.setTexture2D(e||r,s)}function z0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Mh,s)}function O0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sh,s)}function k0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yh,s)}function B0(i){switch(i){case 5126:return M0;case 35664:return S0;case 35665:return w0;case 35666:return b0;case 35674:return E0;case 35675:return A0;case 35676:return T0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return L0;case 35669:case 35673:return P0;case 5125:return D0;case 36294:return I0;case 36295:return U0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return k0}}function H0(i,e){i.uniform1fv(this.addr,e)}function G0(i,e){const t=ws(e,this.size,2);i.uniform2fv(this.addr,t)}function V0(i,e){const t=ws(e,this.size,3);i.uniform3fv(this.addr,t)}function W0(i,e){const t=ws(e,this.size,4);i.uniform4fv(this.addr,t)}function X0(i,e){const t=ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function q0(i,e){const t=ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $0(i,e){const t=ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Y0(i,e){i.uniform1iv(this.addr,e)}function K0(i,e){i.uniform2iv(this.addr,e)}function j0(i,e){i.uniform3iv(this.addr,e)}function Z0(i,e){i.uniform4iv(this.addr,e)}function J0(i,e){i.uniform1uiv(this.addr,e)}function Q0(i,e){i.uniform2uiv(this.addr,e)}function em(i,e){i.uniform3uiv(this.addr,e)}function tm(i,e){i.uniform4uiv(this.addr,e)}function nm(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||_h,r[a])}function im(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Mh,r[a])}function sm(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Sh,r[a])}function rm(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||yh,r[a])}function am(i){switch(i){case 5126:return H0;case 35664:return G0;case 35665:return V0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return $0;case 5124:case 35670:return Y0;case 35667:case 35671:return K0;case 35668:case 35672:return j0;case 35669:case 35673:return Z0;case 5125:return J0;case 36294:return Q0;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}class om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B0(t.type)}}class lm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=am(t.type)}}class cm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function Zl(i,e){i.seq.push(e),i.map[e.id]=e}function hm(i,e,t){const n=i.name,s=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),a=Ta.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Zl(t,c===void 0?new om(o,i,e):new lm(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new cm(o),Zl(t,f)),t=f}}}class Nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);hm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Jl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const fm=37297;let um=0;function dm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ql=new Ze;function pm(i){lt._getMatrix(Ql,lt.workingColorSpace,i);const e=`mat3( ${Ql.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Or:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ec(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+dm(i.getShaderSource(e),o)}else return r}function mm(i,e){const t=pm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gm(i,e){let t;switch(e){case Qh:t="Linear";break;case ef:t="Reinhard";break;case tf:t="Cineon";break;case Xc:t="ACESFilmic";break;case sf:t="AgX";break;case rf:t="Neutral";break;case nf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wr=new B;function vm(){lt.getLuminanceCoefficients(wr);const i=wr.x.toFixed(4),e=wr.y.toFixed(4),t=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function _m(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ym(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function zs(i){return i!==""}function tc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(i){return i.replace(Mm,wm)}const Sm=new Map;function wm(i,e){let t=je[e];if(t===void 0){const n=Sm.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fo(t)}const bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(i){return i.replace(bm,Em)}function Em(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Am(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Tm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case Hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function Cm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ho:e="ENVMAP_BLENDING_MULTIPLY";break;case Zh:e="ENVMAP_BLENDING_MIX";break;case Jh:e="ENVMAP_BLENDING_ADD";break}return e}function Lm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Pm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Am(t),c=Tm(t),h=Rm(t),f=Cm(t),u=Lm(t),d=xm(t),v=_m(r),g=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(m=[sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?je.tonemapping_pars_fragment:"",t.toneMapping!==hi?gm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,mm("linearToOutputTexel",t.outputColorSpace),vm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=Fo(a),a=tc(a,t),a=nc(a,t),o=Fo(o),o=tc(o,t),o=nc(o,t),a=ic(a),o=ic(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+m+a,x=y+p+o,M=Jl(s,s.VERTEX_SHADER,_),E=Jl(s,s.FRAGMENT_SHADER,x);s.attachShader(g,M),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(C){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(g)||"",H=s.getShaderInfoLog(M)||"",N=s.getShaderInfoLog(E)||"",O=z.trim(),P=H.trim(),U=N.trim();let A=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(A=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,E);else{const k=ec(s,M,"vertex"),K=ec(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+k+`
`+K)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(P===""||U==="")&&(G=!1);G&&(C.diagnostics={runnable:A,programLog:O,vertexShader:{log:P,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(M),s.deleteShader(E),F=new Nr(s,g),S=ym(s,g)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(g,fm)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=um++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=E,this}let Dm=0;class Im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Um(e),t.set(e,n)),n}}class Um{constructor(e){this.id=Dm++,this.code=e,this.usedTimes=0}}function Fm(i,e,t,n,s,r,a){const o=new sh,l=new Im,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,w,C,z,H){const N=z.fog,O=H.geometry,P=S.isMeshStandardMaterial?z.environment:null,U=(S.isMeshStandardMaterial?t:e).get(S.envMap||P),A=U&&U.mapping===Hr?U.image.height:null,G=v[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const k=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,K=k!==void 0?k.length:0;let ee=0;O.morphAttributes.position!==void 0&&(ee=1),O.morphAttributes.normal!==void 0&&(ee=2),O.morphAttributes.color!==void 0&&(ee=3);let ue,Ee,he,Y;if(G){const st=Fn[G];ue=st.vertexShader,Ee=st.fragmentShader}else ue=S.vertexShader,Ee=S.fragmentShader,l.update(S),he=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);const $=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),Se=H.isInstancedMesh===!0,we=H.isBatchedMesh===!0,Ce=!!S.map,ze=!!S.matcap,L=!!U,be=!!S.aoMap,ae=!!S.lightMap,re=!!S.bumpMap,ce=!!S.normalMap,Pe=!!S.displacementMap,xe=!!S.emissiveMap,me=!!S.metalnessMap,qe=!!S.roughnessMap,Oe=S.anisotropy>0,D=S.clearcoat>0,b=S.dispersion>0,I=S.iridescence>0,V=S.sheen>0,Z=S.transmission>0,j=Oe&&!!S.anisotropyMap,ve=D&&!!S.clearcoatMap,le=D&&!!S.clearcoatNormalMap,te=D&&!!S.clearcoatRoughnessMap,ne=I&&!!S.iridescenceMap,ie=I&&!!S.iridescenceThicknessMap,fe=V&&!!S.sheenColorMap,Ie=V&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,_e=!!S.specularColorMap,Ne=!!S.specularIntensityMap,W=Z&&!!S.transmissionMap,de=Z&&!!S.thicknessMap,ye=!!S.gradientMap,De=!!S.alphaMap,ge=S.alphaTest>0,se=!!S.alphaHash,Fe=!!S.extensions;let $e=hi;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&($e=i.toneMapping);const ct={shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:ue,fragmentShader:Ee,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:we,batchingColor:we&&H._colorsTexture!==null,instancing:Se,instancingColor:Se&&H.instanceColor!==null,instancingMorph:Se&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ps,alphaToCoverage:!!S.alphaToCoverage,map:Ce,matcap:ze,envMap:L,envMapMode:L&&U.mapping,envMapCubeUVHeight:A,aoMap:be,lightMap:ae,bumpMap:re,normalMap:ce,displacementMap:u&&Pe,emissiveMap:xe,normalMapObjectSpace:ce&&S.normalMapType===lf,normalMapTangentSpace:ce&&S.normalMapType===Yo,metalnessMap:me,roughnessMap:qe,anisotropy:Oe,anisotropyMap:j,clearcoat:D,clearcoatMap:ve,clearcoatNormalMap:le,clearcoatRoughnessMap:te,dispersion:b,iridescence:I,iridescenceMap:ne,iridescenceThicknessMap:ie,sheen:V,sheenColorMap:fe,sheenRoughnessMap:Ie,specularMap:Ae,specularColorMap:_e,specularIntensityMap:Ne,transmission:Z,transmissionMap:W,thicknessMap:de,gradientMap:ye,opaque:S.transparent===!1&&S.blending===os&&S.alphaToCoverage===!1,alphaMap:De,alphaTest:ge,alphaHash:se,combine:S.combine,mapUv:Ce&&g(S.map.channel),aoMapUv:be&&g(S.aoMap.channel),lightMapUv:ae&&g(S.lightMap.channel),bumpMapUv:re&&g(S.bumpMap.channel),normalMapUv:ce&&g(S.normalMap.channel),displacementMapUv:Pe&&g(S.displacementMap.channel),emissiveMapUv:xe&&g(S.emissiveMap.channel),metalnessMapUv:me&&g(S.metalnessMap.channel),roughnessMapUv:qe&&g(S.roughnessMap.channel),anisotropyMapUv:j&&g(S.anisotropyMap.channel),clearcoatMapUv:ve&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&g(S.sheenRoughnessMap.channel),specularMapUv:Ae&&g(S.specularMap.channel),specularColorMapUv:_e&&g(S.specularColorMap.channel),specularIntensityMapUv:Ne&&g(S.specularIntensityMap.channel),transmissionMapUv:W&&g(S.transmissionMap.channel),thicknessMapUv:de&&g(S.thicknessMap.channel),alphaMapUv:De&&g(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ce||Oe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!O.attributes.uv&&(Ce||De),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:oe,skinning:H.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&lt.getTransfer(S.map.colorSpace)===pt,decodeVideoTextureEmissive:xe&&S.emissiveMap.isVideoTexture===!0&&lt.getTransfer(S.emissiveMap.colorSpace)===pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xt,flipSided:S.side===Qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)w.push(C),w.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(y(w,S),_(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function y(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function _(S,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),w.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const w=v[S.type];let C;if(w){const z=Fn[w];C=Of.clone(z.uniforms)}else C=S.uniforms;return C}function M(S,w){let C;for(let z=0,H=h.length;z<H;z++){const N=h[z];if(N.cacheKey===w){C=N,++C.usedTimes;break}}return C===void 0&&(C=new Pm(i,w,S,r),h.push(C)),C}function E(S){if(--S.usedTimes===0){const w=h.indexOf(S);h[w]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:F}}function Nm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function zm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ac(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,u,d,v,g,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function o(f,u,d,v,g,m){const p=a(f,u,d,v,g,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,u,d,v,g,m){const p=a(f,u,d,v,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||zm),n.length>1&&n.sort(u||rc),s.length>1&&s.sort(u||rc)}function h(){for(let f=e,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Om(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ac,i.set(n,[a])):s>=r.length?(a=new ac,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function km(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new We};break;case"SpotLight":t={position:new B,direction:new B,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Bm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hm=0;function Gm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vm(i){const e=new km,t=Bm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new ut,a=new ut;function o(c){let h=0,f=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,v=0,g=0,m=0,p=0,y=0,_=0,x=0,M=0,E=0,R=0;c.sort(Gm);for(let S=0,w=c.length;S<w;S++){const C=c[S],z=C.color,H=C.intensity,N=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*H,f+=z.g*H,u+=z.b*H;else if(C.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(C.sh.coefficients[P],H);R++}else if(C.isDirectionalLight){const P=e.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const U=C.shadow,A=t.get(C);A.shadowIntensity=U.intensity,A.shadowBias=U.bias,A.shadowNormalBias=U.normalBias,A.shadowRadius=U.radius,A.shadowMapSize=U.mapSize,n.directionalShadow[d]=A,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=C.shadow.matrix,y++}n.directional[d]=P,d++}else if(C.isSpotLight){const P=e.get(C);P.position.setFromMatrixPosition(C.matrixWorld),P.color.copy(z).multiplyScalar(H),P.distance=N,P.coneCos=Math.cos(C.angle),P.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),P.decay=C.decay,n.spot[g]=P;const U=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,U.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[g]=U.matrix,C.castShadow){const A=t.get(C);A.shadowIntensity=U.intensity,A.shadowBias=U.bias,A.shadowNormalBias=U.normalBias,A.shadowRadius=U.radius,A.shadowMapSize=U.mapSize,n.spotShadow[g]=A,n.spotShadowMap[g]=O,x++}g++}else if(C.isRectAreaLight){const P=e.get(C);P.color.copy(z).multiplyScalar(H),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=P,m++}else if(C.isPointLight){const P=e.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),P.distance=C.distance,P.decay=C.decay,C.castShadow){const U=C.shadow,A=t.get(C);A.shadowIntensity=U.intensity,A.shadowBias=U.bias,A.shadowNormalBias=U.normalBias,A.shadowRadius=U.radius,A.shadowMapSize=U.mapSize,A.shadowCameraNear=U.camera.near,A.shadowCameraFar=U.camera.far,n.pointShadow[v]=A,n.pointShadowMap[v]=O,n.pointShadowMatrix[v]=C.shadow.matrix,_++}n.point[v]=P,v++}else if(C.isHemisphereLight){const P=e.get(C);P.skyColor.copy(C.color).multiplyScalar(H),P.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[p]=P,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const F=n.hash;(F.directionalLength!==d||F.pointLength!==v||F.spotLength!==g||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==y||F.numPointShadows!==_||F.numSpotShadows!==x||F.numSpotMaps!==M||F.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,F.directionalLength=d,F.pointLength=v,F.spotLength=g,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=y,F.numPointShadows=_,F.numSpotShadows=x,F.numSpotMaps=M,F.numLightProbes=R,n.version=Hm++)}function l(c,h){let f=0,u=0,d=0,v=0,g=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const _=c[p];if(_.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(_.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function oc(i){const e=new Vm(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Wm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new oc(i),e.set(s,[o])):r>=a.length?(o=new oc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
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
}`;function $m(i,e,t){let n=new Vr;const s=new Ve,r=new Ve,a=new it,o=new mh({depthPacking:eh}),l=new du,c={},h=t.maxTextureSize,f={[ui]:Qt,[Qt]:ui,[Xt]:Xt},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Xm,fragmentShader:qm}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const v=new Mt;v.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new vt(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let p=this.type;this.render=function(E,R,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),w=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ci),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=p!==Xn&&this.type===Xn,N=p===Xn&&this.type!==Xn;for(let O=0,P=E.length;O<P;O++){const U=E[O],A=U.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;s.copy(A.mapSize);const G=A.getFrameExtents();if(s.multiply(G),r.copy(A.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,A.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,A.mapSize.y=r.y)),A.map===null||H===!0||N===!0){const K=this.type!==Xn?{minFilter:Yt,magFilter:Yt}:{};A.map!==null&&A.map.dispose(),A.map=new Yn(s.x,s.y,K),A.map.texture.name=U.name+".shadowMap",A.camera.updateProjectionMatrix()}i.setRenderTarget(A.map),i.clear();const k=A.getViewportCount();for(let K=0;K<k;K++){const ee=A.getViewport(K);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),z.viewport(a),A.updateMatrices(U,K),n=A.getFrustum(),x(R,F,A.camera,U,this.type)}A.isPointLightShadow!==!0&&this.type===Xn&&y(A,F),A.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,w,C)};function y(E,R){const F=e.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yn(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,F,u,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,F,d,g,null)}function _(E,R,F,S){let w=null;const C=F.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)w=C;else if(w=F.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=w.uuid,H=R.uuid;let N=c[z];N===void 0&&(N={},c[z]=N);let O=N[H];O===void 0&&(O=w.clone(),N[H]=O,R.addEventListener("dispose",M)),w=O}if(w.visible=R.visible,w.wireframe=R.wireframe,S===Xn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:f[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const z=i.properties.get(w);z.light=F}return w}function x(E,R,F,S,w){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Xn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld);const H=e.update(E),N=E.material;if(Array.isArray(N)){const O=H.groups;for(let P=0,U=O.length;P<U;P++){const A=O[P],G=N[A.materialIndex];if(G&&G.visible){const k=_(E,G,S,w);E.onBeforeShadow(i,E,R,F,H,k,A),i.renderBufferDirect(F,null,H,k,E,A),E.onAfterShadow(i,E,R,F,H,k,A)}}}else if(N.visible){const O=_(E,N,S,w);E.onBeforeShadow(i,E,R,F,H,O,null),i.renderBufferDirect(F,null,H,O,E,null),E.onAfterShadow(i,E,R,F,H,O,null)}}const z=E.children;for(let H=0,N=z.length;H<N;H++)x(z[H],R,F,S,w)}function M(E){E.target.removeEventListener("dispose",M);for(const F in c){const S=c[F],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const Ym={[Wa]:Xa,[qa]:Ka,[$a]:ja,[fs]:Ya,[Xa]:Wa,[Ka]:qa,[ja]:$a,[Ya]:fs};function Km(i,e){function t(){let W=!1;const de=new it;let ye=null;const De=new it(0,0,0,0);return{setMask:function(ge){ye!==ge&&!W&&(i.colorMask(ge,ge,ge,ge),ye=ge)},setLocked:function(ge){W=ge},setClear:function(ge,se,Fe,$e,ct){ct===!0&&(ge*=$e,se*=$e,Fe*=$e),de.set(ge,se,Fe,$e),De.equals(de)===!1&&(i.clearColor(ge,se,Fe,$e),De.copy(de))},reset:function(){W=!1,ye=null,De.set(-1,0,0,0)}}}function n(){let W=!1,de=!1,ye=null,De=null,ge=null;return{setReversed:function(se){if(de!==se){const Fe=e.get("EXT_clip_control");se?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),de=se;const $e=ge;ge=null,this.setClear($e)}},getReversed:function(){return de},setTest:function(se){se?$(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(se){ye!==se&&!W&&(i.depthMask(se),ye=se)},setFunc:function(se){if(de&&(se=Ym[se]),De!==se){switch(se){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=se}},setLocked:function(se){W=se},setClear:function(se){ge!==se&&(de&&(se=1-se),i.clearDepth(se),ge=se)},reset:function(){W=!1,ye=null,De=null,ge=null,de=!1}}}function s(){let W=!1,de=null,ye=null,De=null,ge=null,se=null,Fe=null,$e=null,ct=null;return{setTest:function(st){W||(st?$(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(st){de!==st&&!W&&(i.stencilMask(st),de=st)},setFunc:function(st,Ot,en){(ye!==st||De!==Ot||ge!==en)&&(i.stencilFunc(st,Ot,en),ye=st,De=Ot,ge=en)},setOp:function(st,Ot,en){(se!==st||Fe!==Ot||$e!==en)&&(i.stencilOp(st,Ot,en),se=st,Fe=Ot,$e=en)},setLocked:function(st){W=st},setClear:function(st){ct!==st&&(i.clearStencil(st),ct=st)},reset:function(){W=!1,de=null,ye=null,De=null,ge=null,se=null,Fe=null,$e=null,ct=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],v=null,g=!1,m=null,p=null,y=null,_=null,x=null,M=null,E=null,R=new We(0,0,0),F=0,S=!1,w=null,C=null,z=null,H=null,N=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,U=0;const A=i.getParameter(i.VERSION);A.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(A)[1]),P=U>=1):A.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),P=U>=2);let G=null,k={};const K=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),ue=new it().fromArray(K),Ee=new it().fromArray(ee);function he(W,de,ye,De){const ge=new Uint8Array(4),se=i.createTexture();i.bindTexture(W,se),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<ye;Fe++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(de+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return se}const Y={};Y[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(fs),re(!1),ce(ll),$(i.CULL_FACE),be(ci);function $(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function oe(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function Se(W,de){return f[W]!==de?(i.bindFramebuffer(W,de),f[W]=de,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=de),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=de),!0):!1}function we(W,de){let ye=d,De=!1;if(W){ye=u.get(de),ye===void 0&&(ye=[],u.set(de,ye));const ge=W.textures;if(ye.length!==ge.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Fe=ge.length;se<Fe;se++)ye[se]=i.COLOR_ATTACHMENT0+se;ye.length=ge.length,De=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,De=!0);De&&i.drawBuffers(ye)}function Ce(W){return v!==W?(i.useProgram(W),v=W,!0):!1}const ze={[Ti]:i.FUNC_ADD,[Uh]:i.FUNC_SUBTRACT,[Fh]:i.FUNC_REVERSE_SUBTRACT};ze[Nh]=i.MIN,ze[zh]=i.MAX;const L={[Oh]:i.ZERO,[kh]:i.ONE,[Bh]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[qh]:i.SRC_ALPHA_SATURATE,[Wh]:i.DST_COLOR,[Gh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[Va]:i.ONE_MINUS_SRC_ALPHA,[Xh]:i.ONE_MINUS_DST_COLOR,[Vh]:i.ONE_MINUS_DST_ALPHA,[$h]:i.CONSTANT_COLOR,[Yh]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[jh]:i.ONE_MINUS_CONSTANT_ALPHA};function be(W,de,ye,De,ge,se,Fe,$e,ct,st){if(W===ci){g===!0&&(oe(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),W!==Ih){if(W!==m||st!==S){if((p!==Ti||x!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,x=Ti),st)switch(W){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ha:i.blendFunc(i.ONE,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ha:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}y=null,_=null,M=null,E=null,R.set(0,0,0),F=0,m=W,S=st}return}ge=ge||de,se=se||ye,Fe=Fe||De,(de!==p||ge!==x)&&(i.blendEquationSeparate(ze[de],ze[ge]),p=de,x=ge),(ye!==y||De!==_||se!==M||Fe!==E)&&(i.blendFuncSeparate(L[ye],L[De],L[se],L[Fe]),y=ye,_=De,M=se,E=Fe),($e.equals(R)===!1||ct!==F)&&(i.blendColor($e.r,$e.g,$e.b,ct),R.copy($e),F=ct),m=W,S=!1}function ae(W,de){W.side===Xt?oe(i.CULL_FACE):$(i.CULL_FACE);let ye=W.side===Qt;de&&(ye=!ye),re(ye),W.blending===os&&W.transparent===!1?be(ci):be(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);const De=W.stencilWrite;o.setTest(De),De&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),xe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(W){w!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),w=W)}function ce(W){W!==Ph?($(i.CULL_FACE),W!==C&&(W===ll?i.cullFace(i.BACK):W===Dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),C=W}function Pe(W){W!==z&&(P&&i.lineWidth(W),z=W)}function xe(W,de,ye){W?($(i.POLYGON_OFFSET_FILL),(H!==de||N!==ye)&&(i.polygonOffset(de,ye),H=de,N=ye)):oe(i.POLYGON_OFFSET_FILL)}function me(W){W?$(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function qe(W){W===void 0&&(W=i.TEXTURE0+O-1),G!==W&&(i.activeTexture(W),G=W)}function Oe(W,de,ye){ye===void 0&&(G===null?ye=i.TEXTURE0+O-1:ye=G);let De=k[ye];De===void 0&&(De={type:void 0,texture:void 0},k[ye]=De),(De.type!==W||De.texture!==de)&&(G!==ye&&(i.activeTexture(ye),G=ye),i.bindTexture(W,de||Y[W]),De.type=W,De.texture=de)}function D(){const W=k[G];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function V(){try{i.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Z(){try{i.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function le(){try{i.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function te(){try{i.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ne(){try{i.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{i.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(W){ue.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),ue.copy(W))}function Ie(W){Ee.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Ee.copy(W))}function Ae(W,de){let ye=c.get(de);ye===void 0&&(ye=new WeakMap,c.set(de,ye));let De=ye.get(W);De===void 0&&(De=i.getUniformBlockIndex(de,W.name),ye.set(W,De))}function _e(W,de){const De=c.get(de).get(W);l.get(de)!==De&&(i.uniformBlockBinding(de,De,W.__bindingPointIndex),l.set(de,De))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,k={},f={},u=new WeakMap,d=[],v=null,g=!1,m=null,p=null,y=null,_=null,x=null,M=null,E=null,R=new We(0,0,0),F=0,S=!1,w=null,C=null,z=null,H=null,N=null,ue.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:oe,bindFramebuffer:Se,drawBuffers:we,useProgram:Ce,setBlending:be,setMaterial:ae,setFlipSided:re,setCullFace:ce,setLineWidth:Pe,setPolygonOffset:xe,setScissorTest:me,activeTexture:qe,bindTexture:Oe,unbindTexture:D,compressedTexImage2D:b,compressedTexImage3D:I,texImage2D:ne,texImage3D:ie,updateUBOMapping:Ae,uniformBlockBinding:_e,texStorage2D:le,texStorage3D:te,texSubImage2D:V,texSubImage3D:Z,compressedTexSubImage2D:j,compressedTexSubImage3D:ve,scissor:fe,viewport:Ie,reset:Ne}}function jm(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,b){return d?new OffscreenCanvas(D,b):Ws("canvas")}function g(D,b,I){let V=1;const Z=Oe(D);if((Z.width>I||Z.height>I)&&(V=I/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const j=Math.floor(V*Z.width),ve=Math.floor(V*Z.height);f===void 0&&(f=v(j,ve));const le=b?v(j,ve):f;return le.width=j,le.height=ve,le.getContext("2d").drawImage(D,0,0,j,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+ve+")."),le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(D,b,I,V,Z=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let j=b;if(b===i.RED&&(I===i.FLOAT&&(j=i.R32F),I===i.HALF_FLOAT&&(j=i.R16F),I===i.UNSIGNED_BYTE&&(j=i.R8)),b===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.R8UI),I===i.UNSIGNED_SHORT&&(j=i.R16UI),I===i.UNSIGNED_INT&&(j=i.R32UI),I===i.BYTE&&(j=i.R8I),I===i.SHORT&&(j=i.R16I),I===i.INT&&(j=i.R32I)),b===i.RG&&(I===i.FLOAT&&(j=i.RG32F),I===i.HALF_FLOAT&&(j=i.RG16F),I===i.UNSIGNED_BYTE&&(j=i.RG8)),b===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.RG8UI),I===i.UNSIGNED_SHORT&&(j=i.RG16UI),I===i.UNSIGNED_INT&&(j=i.RG32UI),I===i.BYTE&&(j=i.RG8I),I===i.SHORT&&(j=i.RG16I),I===i.INT&&(j=i.RG32I)),b===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.RGB8UI),I===i.UNSIGNED_SHORT&&(j=i.RGB16UI),I===i.UNSIGNED_INT&&(j=i.RGB32UI),I===i.BYTE&&(j=i.RGB8I),I===i.SHORT&&(j=i.RGB16I),I===i.INT&&(j=i.RGB32I)),b===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),I===i.UNSIGNED_INT&&(j=i.RGBA32UI),I===i.BYTE&&(j=i.RGBA8I),I===i.SHORT&&(j=i.RGBA16I),I===i.INT&&(j=i.RGBA32I)),b===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),b===i.RGBA){const ve=Z?Or:lt.getTransfer(V);I===i.FLOAT&&(j=i.RGBA32F),I===i.HALF_FLOAT&&(j=i.RGBA16F),I===i.UNSIGNED_BYTE&&(j=ve===pt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(D,b){let I;return D?b===null||b===di||b===Bs?I=i.DEPTH24_STENCIL8:b===Pn?I=i.DEPTH32F_STENCIL8:b===ks&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===di||b===Bs?I=i.DEPTH_COMPONENT24:b===Pn?I=i.DEPTH_COMPONENT32F:b===ks&&(I=i.DEPTH_COMPONENT16),I}function M(D,b){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Yt&&D.minFilter!==un?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function E(D){const b=D.target;b.removeEventListener("dispose",E),F(b),b.isVideoTexture&&h.delete(b)}function R(D){const b=D.target;b.removeEventListener("dispose",R),w(b)}function F(D){const b=n.get(D);if(b.__webglInit===void 0)return;const I=D.source,V=u.get(I);if(V){const Z=V[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(D),Object.keys(V).length===0&&u.delete(I)}n.remove(D)}function S(D){const b=n.get(D);i.deleteTexture(b.__webglTexture);const I=D.source,V=u.get(I);delete V[b.__cacheKey],a.memory.textures--}function w(D){const b=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(b.__webglFramebuffer[V]))for(let Z=0;Z<b.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(b.__webglFramebuffer[V]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[V])}else{if(Array.isArray(b.__webglFramebuffer))for(let V=0;V<b.__webglFramebuffer.length;V++)i.deleteFramebuffer(b.__webglFramebuffer[V]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let V=0;V<b.__webglColorRenderbuffer.length;V++)b.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[V]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const I=D.textures;for(let V=0,Z=I.length;V<Z;V++){const j=n.get(I[V]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(I[V])}n.remove(D)}let C=0;function z(){C=0}function H(){const D=C;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),C+=1,D}function N(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function O(D,b){const I=n.get(D);if(D.isVideoTexture&&me(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&I.__version!==D.version){const V=D.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(I,D,b);return}}else D.isExternalTexture&&(I.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+b)}function P(D,b){const I=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&I.__version!==D.version){Y(I,D,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+b)}function U(D,b){const I=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&I.__version!==D.version){Y(I,D,b);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+b)}function A(D,b){const I=n.get(D);if(D.version>0&&I.__version!==D.version){$(I,D,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+b)}const G={[Qa]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},k={[Yt]:i.NEAREST,[af]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},K={[cf]:i.NEVER,[mf]:i.ALWAYS,[hf]:i.LESS,[th]:i.LEQUAL,[ff]:i.EQUAL,[pf]:i.GEQUAL,[uf]:i.GREATER,[df]:i.NOTEQUAL};function ee(D,b){if(b.type===Pn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===un||b.magFilter===Kr||b.magFilter===er||b.magFilter===oi||b.minFilter===un||b.minFilter===Kr||b.minFilter===er||b.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,G[b.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,G[b.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,G[b.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,k[b.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,k[b.minFilter]),b.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,K[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Yt||b.minFilter!==er&&b.minFilter!==oi||b.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ue(D,b){let I=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",E));const V=b.source;let Z=u.get(V);Z===void 0&&(Z={},u.set(V,Z));const j=N(b);if(j!==D.__cacheKey){Z[j]===void 0&&(Z[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Z[j].usedTimes++;const ve=Z[D.__cacheKey];ve!==void 0&&(Z[D.__cacheKey].usedTimes--,ve.usedTimes===0&&S(b)),D.__cacheKey=j,D.__webglTexture=Z[j].texture}return I}function Ee(D,b,I){return Math.floor(Math.floor(D/I)/b)}function he(D,b,I,V){const j=D.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,I,V,b.data);else{j.sort((ie,fe)=>ie.start-fe.start);let ve=0;for(let ie=1;ie<j.length;ie++){const fe=j[ve],Ie=j[ie],Ae=fe.start+fe.count,_e=Ee(Ie.start,b.width,4),Ne=Ee(fe.start,b.width,4);Ie.start<=Ae+1&&_e===Ne&&Ee(Ie.start+Ie.count-1,b.width,4)===_e?fe.count=Math.max(fe.count,Ie.start+Ie.count-fe.start):(++ve,j[ve]=Ie)}j.length=ve+1;const le=i.getParameter(i.UNPACK_ROW_LENGTH),te=i.getParameter(i.UNPACK_SKIP_PIXELS),ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ie=0,fe=j.length;ie<fe;ie++){const Ie=j[ie],Ae=Math.floor(Ie.start/4),_e=Math.ceil(Ie.count/4),Ne=Ae%b.width,W=Math.floor(Ae/b.width),de=_e,ye=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,Ne,W,de,ye,I,V,b.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,te),i.pixelStorei(i.UNPACK_SKIP_ROWS,ne)}}function Y(D,b,I){let V=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(V=i.TEXTURE_3D);const Z=ue(D,b),j=b.source;t.bindTexture(V,D.__webglTexture,i.TEXTURE0+I);const ve=n.get(j);if(j.version!==ve.__version||Z===!0){t.activeTexture(i.TEXTURE0+I);const le=lt.getPrimaries(lt.workingColorSpace),te=b.colorSpace===Cn?null:lt.getPrimaries(b.colorSpace),ne=b.colorSpace===Cn||le===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ie=g(b.image,!1,s.maxTextureSize);ie=qe(b,ie);const fe=r.convert(b.format,b.colorSpace),Ie=r.convert(b.type);let Ae=_(b.internalFormat,fe,Ie,b.colorSpace,b.isVideoTexture);ee(V,b);let _e;const Ne=b.mipmaps,W=b.isVideoTexture!==!0,de=ve.__version===void 0||Z===!0,ye=j.dataReady,De=M(b,ie);if(b.isDepthTexture)Ae=x(b.format===Gs,b.type),de&&(W?t.texStorage2D(i.TEXTURE_2D,1,Ae,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ie.width,ie.height,0,fe,Ie,null));else if(b.isDataTexture)if(Ne.length>0){W&&de&&t.texStorage2D(i.TEXTURE_2D,De,Ae,Ne[0].width,Ne[0].height);for(let ge=0,se=Ne.length;ge<se;ge++)_e=Ne[ge],W?ye&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,_e.width,_e.height,fe,Ie,_e.data):t.texImage2D(i.TEXTURE_2D,ge,Ae,_e.width,_e.height,0,fe,Ie,_e.data);b.generateMipmaps=!1}else W?(de&&t.texStorage2D(i.TEXTURE_2D,De,Ae,ie.width,ie.height),ye&&he(b,ie,fe,Ie)):t.texImage2D(i.TEXTURE_2D,0,Ae,ie.width,ie.height,0,fe,Ie,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ae,Ne[0].width,Ne[0].height,ie.depth);for(let ge=0,se=Ne.length;ge<se;ge++)if(_e=Ne[ge],b.format!==dn)if(fe!==null)if(W){if(ye)if(b.layerUpdates.size>0){const Fe=Ol(_e.width,_e.height,b.format,b.type);for(const $e of b.layerUpdates){const ct=_e.data.subarray($e*Fe/_e.data.BYTES_PER_ELEMENT,($e+1)*Fe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,$e,_e.width,_e.height,1,fe,ct)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,_e.width,_e.height,ie.depth,fe,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Ae,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,_e.width,_e.height,ie.depth,fe,Ie,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Ae,_e.width,_e.height,ie.depth,0,fe,Ie,_e.data)}else{W&&de&&t.texStorage2D(i.TEXTURE_2D,De,Ae,Ne[0].width,Ne[0].height);for(let ge=0,se=Ne.length;ge<se;ge++)_e=Ne[ge],b.format!==dn?fe!==null?W?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,_e.width,_e.height,fe,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?ye&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,_e.width,_e.height,fe,Ie,_e.data):t.texImage2D(i.TEXTURE_2D,ge,Ae,_e.width,_e.height,0,fe,Ie,_e.data)}else if(b.isDataArrayTexture)if(W){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ae,ie.width,ie.height,ie.depth),ye)if(b.layerUpdates.size>0){const ge=Ol(ie.width,ie.height,b.format,b.type);for(const se of b.layerUpdates){const Fe=ie.data.subarray(se*ge/ie.data.BYTES_PER_ELEMENT,(se+1)*ge/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,ie.width,ie.height,1,fe,Ie,Fe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ie,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ie.width,ie.height,ie.depth,0,fe,Ie,ie.data);else if(b.isData3DTexture)W?(de&&t.texStorage3D(i.TEXTURE_3D,De,Ae,ie.width,ie.height,ie.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ie,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ie.width,ie.height,ie.depth,0,fe,Ie,ie.data);else if(b.isFramebufferTexture){if(de)if(W)t.texStorage2D(i.TEXTURE_2D,De,Ae,ie.width,ie.height);else{let ge=ie.width,se=ie.height;for(let Fe=0;Fe<De;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Ae,ge,se,0,fe,Ie,null),ge>>=1,se>>=1}}else if(Ne.length>0){if(W&&de){const ge=Oe(Ne[0]);t.texStorage2D(i.TEXTURE_2D,De,Ae,ge.width,ge.height)}for(let ge=0,se=Ne.length;ge<se;ge++)_e=Ne[ge],W?ye&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,fe,Ie,_e):t.texImage2D(i.TEXTURE_2D,ge,Ae,fe,Ie,_e);b.generateMipmaps=!1}else if(W){if(de){const ge=Oe(ie);t.texStorage2D(i.TEXTURE_2D,De,Ae,ge.width,ge.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Ie,ie)}else t.texImage2D(i.TEXTURE_2D,0,Ae,fe,Ie,ie);m(b)&&p(V),ve.__version=j.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function $(D,b,I){if(b.image.length!==6)return;const V=ue(D,b),Z=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+I);const j=n.get(Z);if(Z.version!==j.__version||V===!0){t.activeTexture(i.TEXTURE0+I);const ve=lt.getPrimaries(lt.workingColorSpace),le=b.colorSpace===Cn?null:lt.getPrimaries(b.colorSpace),te=b.colorSpace===Cn||ve===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ne=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,fe=[];for(let se=0;se<6;se++)!ne&&!ie?fe[se]=g(b.image[se],!0,s.maxCubemapSize):fe[se]=ie?b.image[se].image:b.image[se],fe[se]=qe(b,fe[se]);const Ie=fe[0],Ae=r.convert(b.format,b.colorSpace),_e=r.convert(b.type),Ne=_(b.internalFormat,Ae,_e,b.colorSpace),W=b.isVideoTexture!==!0,de=j.__version===void 0||V===!0,ye=Z.dataReady;let De=M(b,Ie);ee(i.TEXTURE_CUBE_MAP,b);let ge;if(ne){W&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Ne,Ie.width,Ie.height);for(let se=0;se<6;se++){ge=fe[se].mipmaps;for(let Fe=0;Fe<ge.length;Fe++){const $e=ge[Fe];b.format!==dn?Ae!==null?W?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,$e.width,$e.height,Ae,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Ne,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,$e.width,$e.height,Ae,_e,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Ne,$e.width,$e.height,0,Ae,_e,$e.data)}}}else{if(ge=b.mipmaps,W&&de){ge.length>0&&De++;const se=Oe(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Ne,se.width,se.height)}for(let se=0;se<6;se++)if(ie){W?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,fe[se].width,fe[se].height,Ae,_e,fe[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ne,fe[se].width,fe[se].height,0,Ae,_e,fe[se].data);for(let Fe=0;Fe<ge.length;Fe++){const ct=ge[Fe].image[se].image;W?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,ct.width,ct.height,Ae,_e,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Ne,ct.width,ct.height,0,Ae,_e,ct.data)}}else{W?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae,_e,fe[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ne,Ae,_e,fe[se]);for(let Fe=0;Fe<ge.length;Fe++){const $e=ge[Fe];W?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,Ae,_e,$e.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Ne,Ae,_e,$e.image[se])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),j.__version=Z.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function oe(D,b,I,V,Z,j){const ve=r.convert(I.format,I.colorSpace),le=r.convert(I.type),te=_(I.internalFormat,ve,le,I.colorSpace),ne=n.get(b),ie=n.get(I);if(ie.__renderTarget=b,!ne.__hasExternalTextures){const fe=Math.max(1,b.width>>j),Ie=Math.max(1,b.height>>j);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,te,fe,Ie,b.depth,0,ve,le,null):t.texImage2D(Z,j,te,fe,Ie,0,ve,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),xe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,ie.__webglTexture,0,Pe(b)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,ie.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(D,b,I){if(i.bindRenderbuffer(i.RENDERBUFFER,D),b.depthBuffer){const V=b.depthTexture,Z=V&&V.isDepthTexture?V.type:null,j=x(b.stencilBuffer,Z),ve=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=Pe(b);xe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,j,b.width,b.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,j,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,j,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,D)}else{const V=b.textures;for(let Z=0;Z<V.length;Z++){const j=V[Z],ve=r.convert(j.format,j.colorSpace),le=r.convert(j.type),te=_(j.internalFormat,ve,le,j.colorSpace),ne=Pe(b);I&&xe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,te,b.width,b.height):xe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,te,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,te,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(b.depthTexture);V.__renderTarget=b,(!V.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const Z=V.__webglTexture,j=Pe(b);if(b.depthTexture.format===Hs)xe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(b.depthTexture.format===Gs)xe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ce(D){const b=n.get(D),I=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const V=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),V){const Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=V}if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const V=D.texture.mipmaps;V&&V.length>0?we(b.__webglFramebuffer[0],D):we(b.__webglFramebuffer,D)}else if(I){b.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[V]),b.__webglDepthbuffer[V]===void 0)b.__webglDepthbuffer[V]=i.createRenderbuffer(),Se(b.__webglDepthbuffer[V],D,!1);else{const Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}}else{const V=D.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Se(b.__webglDepthbuffer,D,!1);else{const Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(D,b,I){const V=n.get(D);b!==void 0&&oe(V.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Ce(D)}function L(D){const b=D.texture,I=n.get(D),V=n.get(b);D.addEventListener("dispose",R);const Z=D.textures,j=D.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=b.version,a.memory.textures++),j){I.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer[le]=[];for(let te=0;te<b.mipmaps.length;te++)I.__webglFramebuffer[le][te]=i.createFramebuffer()}else I.__webglFramebuffer[le]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)I.__webglFramebuffer[le]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(ve)for(let le=0,te=Z.length;le<te;le++){const ne=n.get(Z[le]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&xe(D)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const te=Z[le];I.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[le]);const ne=r.convert(te.format,te.colorSpace),ie=r.convert(te.type),fe=_(te.internalFormat,ne,ie,te.colorSpace,D.isXRRenderTarget===!0),Ie=Pe(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,fe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,I.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(I.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),ee(i.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)oe(I.__webglFramebuffer[le][te],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,te);else oe(I.__webglFramebuffer[le],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let le=0,te=Z.length;le<te;le++){const ne=Z[le],ie=n.get(ne);let fe=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,ie.__webglTexture),ee(fe,ne),oe(I.__webglFramebuffer,D,ne,i.COLOR_ATTACHMENT0+le,fe,0),m(ne)&&p(fe)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(le=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,V.__webglTexture),ee(le,b),b.mipmaps&&b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)oe(I.__webglFramebuffer[te],D,b,i.COLOR_ATTACHMENT0,le,te);else oe(I.__webglFramebuffer,D,b,i.COLOR_ATTACHMENT0,le,0);m(b)&&p(le),t.unbindTexture()}D.depthBuffer&&Ce(D)}function be(D){const b=D.textures;for(let I=0,V=b.length;I<V;I++){const Z=b[I];if(m(Z)){const j=y(D),ve=n.get(Z).__webglTexture;t.bindTexture(j,ve),p(j),t.unbindTexture()}}}const ae=[],re=[];function ce(D){if(D.samples>0){if(xe(D)===!1){const b=D.textures,I=D.width,V=D.height;let Z=i.COLOR_BUFFER_BIT;const j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(D),le=b.length>1;if(le)for(let ne=0;ne<b.length;ne++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const te=D.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ne=0;ne<b.length;ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ne]);const ie=n.get(b[ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,I,V,0,0,I,V,Z,i.NEAREST),l===!0&&(ae.length=0,re.length=0,ae.push(i.COLOR_ATTACHMENT0+ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ae.push(j),re.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let ne=0;ne<b.length;ne++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ne]);const ie=n.get(b[ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const b=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Pe(D){return Math.min(s.maxSamples,D.samples)}function xe(D){const b=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function me(D){const b=a.render.frame;h.get(D)!==b&&(h.set(D,b),D.update())}function qe(D,b){const I=D.colorSpace,V=D.format,Z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||I!==ps&&I!==Cn&&(lt.getTransfer(I)===pt?(V!==dn||Z!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),b}function Oe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=O,this.setTexture2DArray=P,this.setTexture3D=U,this.setTextureCube=A,this.rebindTextures=ze,this.setupRenderTarget=L,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=xe}function Zm(i,e){function t(n,s=Cn){let r;const a=lt.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===Vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$c)return i.BYTE;if(n===Yc)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===Jc)return i.RGB;if(n===dn)return i.RGBA;if(n===Hs)return i.DEPTH_COMPONENT;if(n===Gs)return i.DEPTH_STENCIL;if(n===Vs)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===Qc)return i.RG;if(n===qo)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===Dr||n===Ir||n===Ur||n===Fr)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===to||n===no||n===io||n===so)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===to)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro||n===ao||n===oo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ro||n===ao)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lo||n===co||n===ho||n===fo||n===uo||n===po||n===mo||n===go||n===vo||n===xo||n===_o||n===yo||n===Mo||n===So)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===co)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ho)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===po)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===go)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===bo||n===Eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wo)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ao||n===To||n===Ro||n===Co)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qm=`
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

}`;class eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ch(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bn({vertexShader:Jm,fragmentShader:Qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tg extends ys{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,v=null;const g=typeof XRWebGLBinding<"u",m=new eg,p={},y=t.getContextAttributes();let _=null,x=null;const M=[],E=[],R=new Ve;let F=null;const S=new Sn;S.viewport=new it;const w=new Sn;w.viewport=new it;const C=[S,w],z=new Su;let H=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=M[Y];return $===void 0&&($=new xa,M[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=M[Y];return $===void 0&&($=new xa,M[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=M[Y];return $===void 0&&($=new xa,M[Y]=$),$.getHandSpace()};function O(Y){const $=E.indexOf(Y.inputSource);if($===-1)return;const oe=M[$];oe!==void 0&&(oe.update(Y.inputSource,Y.frame,c||a),oe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function P(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",U);for(let Y=0;Y<M.length;Y++){const $=E[Y];$!==null&&(E[Y]=null,M[Y].disconnect($))}H=null,N=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(_),d=null,u=null,f=null,s=null,x=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",P),s.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Se=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?Gs:Hs,Se=y.stencil?Bs:di);const Ce={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Yn(u.textureWidth,u.textureHeight,{format:dn,type:On,depthTexture:new Jo(u.textureWidth,u.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Yn(d.framebufferWidth,d.framebufferHeight,{format:dn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(Y){for(let $=0;$<Y.removed.length;$++){const oe=Y.removed[$],Se=E.indexOf(oe);Se>=0&&(E[Se]=null,M[Se].disconnect(oe))}for(let $=0;$<Y.added.length;$++){const oe=Y.added[$];let Se=E.indexOf(oe);if(Se===-1){for(let Ce=0;Ce<M.length;Ce++)if(Ce>=E.length){E.push(oe),Se=Ce;break}else if(E[Ce]===null){E[Ce]=oe,Se=Ce;break}if(Se===-1)break}const we=M[Se];we&&we.connect(oe)}}const A=new B,G=new B;function k(Y,$,oe){A.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(oe.matrixWorld);const Se=A.distanceTo(G),we=$.projectionMatrix.elements,Ce=oe.projectionMatrix.elements,ze=we[14]/(we[10]-1),L=we[14]/(we[10]+1),be=(we[9]+1)/we[5],ae=(we[9]-1)/we[5],re=(we[8]-1)/we[0],ce=(Ce[8]+1)/Ce[0],Pe=ze*re,xe=ze*ce,me=Se/(-re+ce),qe=me*-re;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(qe),Y.translateZ(me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),we[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Oe=ze+me,D=L+me,b=Pe-qe,I=xe+(Se-qe),V=be*L/D*Oe,Z=ae*L/D*Oe;Y.projectionMatrix.makePerspective(b,I,V,Z,Oe,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function K(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let $=Y.near,oe=Y.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),z.near=w.near=S.near=$,z.far=w.far=S.far=oe,(H!==z.near||N!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,N=z.far),z.layers.mask=Y.layers.mask|6,S.layers.mask=z.layers.mask&3,w.layers.mask=z.layers.mask&5;const Se=Y.parent,we=z.cameras;K(z,Se);for(let Ce=0;Ce<we.length;Ce++)K(we[Ce],Se);we.length===2?k(z,S,w):z.projectionMatrix.copy(S.projectionMatrix),ee(Y,z,Se)};function ee(Y,$,oe){oe===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(oe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Lo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Y){return p[Y]};let ue=null;function Ee(Y,$){if(h=$.getViewerPose(c||a),v=$,h!==null){const oe=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Se=!1;oe.length!==z.cameras.length&&(z.cameras.length=0,Se=!0);for(let L=0;L<oe.length;L++){const be=oe[L];let ae=null;if(d!==null)ae=d.getViewport(be);else{const ce=f.getViewSubImage(u,be);ae=ce.viewport,L===0&&(e.setRenderTargetTextures(x,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(x))}let re=C[L];re===void 0&&(re=new Sn,re.layers.enable(L),re.viewport=new it,C[L]=re),re.matrix.fromArray(be.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(be.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ae.x,ae.y,ae.width,ae.height),L===0&&(z.matrix.copy(re.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Se===!0&&z.cameras.push(re)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){f=n.getBinding();const L=f.getDepthInformation(oe[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(we&&we.includes("camera-access")&&g){e.state.unbindTexture(),f=n.getBinding();for(let L=0;L<oe.length;L++){const be=oe[L].camera;if(be){let ae=p[be];ae||(ae=new ch,p[be]=ae);const re=f.getCameraImage(be);ae.sourceTexture=re}}}}for(let oe=0;oe<M.length;oe++){const Se=E[oe],we=M[oe];Se!==null&&we!==void 0&&we.update(Se,$,c||a)}ue&&ue(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),v=null}const he=new xh;he.setAnimationLoop(Ee),this.setAnimationLoop=function(Y){ue=Y},this.dispose=function(){}}}const Si=new wn,ng=new ut;function ig(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ah(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,x=y.envMapRotation;_&&(m.envMap.value=_,Si.copy(x),Si.x*=-1,Si.y*=-1,Si.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(ng.makeRotationFromEuler(Si)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=s[y.id];x===void 0&&(v(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const M=_.program;n.updateUBOMapping(y,M);const E=e.render.frame;r[y.id]!==E&&(u(y),r[y.id]=E)}function h(y){const _=f();y.__bindingPointIndex=_;const x=i.createBuffer(),M=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const _=s[y.id],x=y.uniforms,M=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,R=x.length;E<R;E++){const F=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,w=F.length;S<w;S++){const C=F[S];if(d(C,E,S,M)===!0){const z=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let O=0;O<H.length;O++){const P=H[O],U=g(P);typeof P=="number"||typeof P=="boolean"?(C.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,z+N,C.__data)):P.isMatrix3?(C.__data[0]=P.elements[0],C.__data[1]=P.elements[1],C.__data[2]=P.elements[2],C.__data[3]=0,C.__data[4]=P.elements[3],C.__data[5]=P.elements[4],C.__data[6]=P.elements[5],C.__data[7]=0,C.__data[8]=P.elements[6],C.__data[9]=P.elements[7],C.__data[10]=P.elements[8],C.__data[11]=0):(P.toArray(C.__data,N),N+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,x,M){const E=y.value,R=_+"_"+x;if(M[R]===void 0)return typeof E=="number"||typeof E=="boolean"?M[R]=E:M[R]=E.clone(),!0;{const F=M[R];if(typeof E=="number"||typeof E=="boolean"){if(F!==E)return M[R]=E,!0}else if(F.equals(E)===!1)return F.copy(E),!0}return!1}function v(y){const _=y.uniforms;let x=0;const M=16;for(let R=0,F=_.length;R<F;R++){const S=Array.isArray(_[R])?_[R]:[_[R]];for(let w=0,C=S.length;w<C;w++){const z=S[w],H=Array.isArray(z.value)?z.value:[z.value];for(let N=0,O=H.length;N<O;N++){const P=H[N],U=g(P),A=x%M,G=A%U.boundary,k=A+G;x+=G,k!==0&&M-k<U.storage&&(x+=M-k),z.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=U.storage}}}const E=x%M;return E>0&&(x+=M-E),y.__size=x,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class rg{constructor(e={}){const{canvas:t=vf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let M=!1;this._outputColorSpace=Jt;let E=0,R=0,F=null,S=-1,w=null;const C=new it,z=new it;let H=null;const N=new We(0);let O=0,P=t.width,U=t.height,A=1,G=null,k=null;const K=new it(0,0,P,U),ee=new it(0,0,P,U);let ue=!1;const Ee=new Vr;let he=!1,Y=!1;const $=new ut,oe=new B,Se=new it,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function ze(){return F===null?A:1}let L=n;function be(T,X){return t.getContext(T,X)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bo}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ge,!1),L===null){const X="webgl2";if(L=be(X,T),L===null)throw be(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ae,re,ce,Pe,xe,me,qe,Oe,D,b,I,V,Z,j,ve,le,te,ne,ie,fe,Ie,Ae,_e,Ne;function W(){ae=new m0(L),ae.init(),Ae=new Zm(L,ae),re=new l0(L,ae,e,Ae),ce=new Km(L,ae),re.reversedDepthBuffer&&u&&ce.buffers.depth.setReversed(!0),Pe=new x0(L),xe=new Nm,me=new jm(L,ae,ce,xe,re,Ae,Pe),qe=new h0(x),Oe=new p0(x),D=new bu(L),_e=new a0(L,D),b=new g0(L,D,Pe,_e),I=new y0(L,b,D,Pe),ie=new _0(L,re,me),le=new c0(xe),V=new Fm(x,qe,Oe,ae,re,_e,le),Z=new ig(x,xe),j=new Om,ve=new Wm(ae),ne=new r0(x,qe,Oe,ce,I,d,l),te=new $m(x,I,re),Ne=new sg(L,Pe,re,ce),fe=new o0(L,ae,Pe),Ie=new v0(L,ae,Pe),Pe.programs=V.programs,x.capabilities=re,x.extensions=ae,x.properties=xe,x.renderLists=j,x.shadowMap=te,x.state=ce,x.info=Pe}W();const de=new tg(x,L);this.xr=de,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(T){T!==void 0&&(A=T,this.setSize(P,U,!1))},this.getSize=function(T){return T.set(P,U)},this.setSize=function(T,X,Q=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=T,U=X,t.width=Math.floor(T*A),t.height=Math.floor(X*A),Q===!0&&(t.style.width=T+"px",t.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(P*A,U*A).floor()},this.setDrawingBufferSize=function(T,X,Q){P=T,U=X,A=Q,t.width=Math.floor(T*Q),t.height=Math.floor(X*Q),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,X,Q,J){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,X,Q,J),ce.viewport(C.copy(K).multiplyScalar(A).round())},this.getScissor=function(T){return T.copy(ee)},this.setScissor=function(T,X,Q,J){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,X,Q,J),ce.scissor(z.copy(ee).multiplyScalar(A).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(T){ce.setScissorTest(ue=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){k=T},this.getClearColor=function(T){return T.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,Q=!0){let J=0;if(T){let q=!1;if(F!==null){const pe=F.texture.format;q=pe===$o||pe===qo||pe===Xo}if(q){const pe=F.texture.type,Te=pe===On||pe===di||pe===ks||pe===Bs||pe===Vo||pe===Wo,Ue=ne.getClearColor(),Le=ne.getClearAlpha(),Be=Ue.r,Xe=Ue.g,ke=Ue.b;Te?(v[0]=Be,v[1]=Xe,v[2]=ke,v[3]=Le,L.clearBufferuiv(L.COLOR,0,v)):(g[0]=Be,g[1]=Xe,g[2]=ke,g[3]=Le,L.clearBufferiv(L.COLOR,0,g))}else J|=L.COLOR_BUFFER_BIT}X&&(J|=L.DEPTH_BUFFER_BIT),Q&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ne.dispose(),j.dispose(),ve.dispose(),xe.dispose(),qe.dispose(),Oe.dispose(),I.dispose(),_e.dispose(),Ne.dispose(),V.dispose(),de.dispose(),de.removeEventListener("sessionstart",en),de.removeEventListener("sessionend",Kn),Ye.stop()};function ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=Pe.autoReset,X=te.enabled,Q=te.autoUpdate,J=te.needsUpdate,q=te.type;W(),Pe.autoReset=T,te.enabled=X,te.autoUpdate=Q,te.needsUpdate=J,te.type=q}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){const X=T.target;X.removeEventListener("dispose",se),Fe(X)}function Fe(T){$e(T),xe.remove(T)}function $e(T){const X=xe.get(T).programs;X!==void 0&&(X.forEach(function(Q){V.releaseProgram(Q)}),T.isShaderMaterial&&V.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,Q,J,q,pe){X===null&&(X=we);const Te=q.isMesh&&q.matrixWorld.determinant()<0,Ue=Ct(T,X,Q,J,q);ce.setMaterial(J,Te);let Le=Q.index,Be=1;if(J.wireframe===!0){if(Le=b.getWireframeAttribute(Q),Le===void 0)return;Be=2}const Xe=Q.drawRange,ke=Q.attributes.position;let et=Xe.start*Be,dt=(Xe.start+Xe.count)*Be;pe!==null&&(et=Math.max(et,pe.start*Be),dt=Math.min(dt,(pe.start+pe.count)*Be)),Le!==null?(et=Math.max(et,0),dt=Math.min(dt,Le.count)):ke!=null&&(et=Math.max(et,0),dt=Math.min(dt,ke.count));const Tt=dt-et;if(Tt<0||Tt===1/0)return;_e.setup(q,J,Ue,Q,Le);let yt,gt=fe;if(Le!==null&&(yt=D.get(Le),gt=Ie,gt.setIndex(yt)),q.isMesh)J.wireframe===!0?(ce.setLineWidth(J.wireframeLinewidth*ze()),gt.setMode(L.LINES)):gt.setMode(L.TRIANGLES);else if(q.isLine){let Ge=J.linewidth;Ge===void 0&&(Ge=1),ce.setLineWidth(Ge*ze()),q.isLineSegments?gt.setMode(L.LINES):q.isLineLoop?gt.setMode(L.LINE_LOOP):gt.setMode(L.LINE_STRIP)}else q.isPoints?gt.setMode(L.POINTS):q.isSprite&&gt.setMode(L.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))gt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ge=q._multiDrawStarts,wt=q._multiDrawCounts,at=q._multiDrawCount,an=Le?D.get(Le).bytesPerElement:1,zi=xe.get(J).currentProgram.getUniforms();for(let on=0;on<at;on++)zi.setValue(L,"_gl_DrawID",on),gt.render(Ge[on]/an,wt[on])}else if(q.isInstancedMesh)gt.renderInstances(et,Tt,q.count);else if(Q.isInstancedBufferGeometry){const Ge=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,wt=Math.min(Q.instanceCount,Ge);gt.renderInstances(et,Tt,wt)}else gt.render(et,Tt)};function ct(T,X,Q){T.transparent===!0&&T.side===Xt&&T.forceSinglePass===!1?(T.side=Qt,T.needsUpdate=!0,_t(T,X,Q),T.side=ui,T.needsUpdate=!0,_t(T,X,Q),T.side=Xt):_t(T,X,Q)}this.compile=function(T,X,Q=null){Q===null&&(Q=T),p=ve.get(Q),p.init(X),_.push(p),Q.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),T!==Q&&T.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const J=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const pe=q.material;if(pe)if(Array.isArray(pe))for(let Te=0;Te<pe.length;Te++){const Ue=pe[Te];ct(Ue,Q,q),J.add(Ue)}else ct(pe,Q,q),J.add(pe)}),p=_.pop(),J},this.compileAsync=function(T,X,Q=null){const J=this.compile(T,X,Q);return new Promise(q=>{function pe(){if(J.forEach(function(Te){xe.get(Te).currentProgram.isReady()&&J.delete(Te)}),J.size===0){q(T);return}setTimeout(pe,10)}ae.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let st=null;function Ot(T){st&&st(T)}function en(){Ye.stop()}function Kn(){Ye.start()}const Ye=new xh;Ye.setAnimationLoop(Ot),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(T){st=T,de.setAnimationLoop(T),T===null?Ye.stop():Ye.start()},de.addEventListener("sessionstart",en),de.addEventListener("sessionend",Kn),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(X),X=de.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,X,F),p=ve.get(T,_.length),p.init(X),_.push(p),$.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ee.setFromProjectionMatrix($,Nn,X.reversedDepth),Y=this.localClippingEnabled,he=le.init(this.clippingPlanes,Y),m=j.get(T,y.length),m.init(),y.push(m),de.enabled===!0&&de.isPresenting===!0){const pe=x.xr.getDepthSensingMesh();pe!==null&&St(pe,X,-1/0,x.sortObjects)}St(T,X,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(G,k),Ce=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Ce&&ne.addToRenderList(m,T),this.info.render.frame++,he===!0&&le.beginShadows();const Q=p.state.shadowsArray;te.render(Q,T,X),he===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,q=m.transmissive;if(p.setupLights(),X.isArrayCamera){const pe=X.cameras;if(q.length>0)for(let Te=0,Ue=pe.length;Te<Ue;Te++){const Le=pe[Te];ht(J,q,T,Le)}Ce&&ne.render(T);for(let Te=0,Ue=pe.length;Te<Ue;Te++){const Le=pe[Te];mt(m,T,Le,Le.viewport)}}else q.length>0&&ht(J,q,T,X),Ce&&ne.render(T),mt(m,T,X);F!==null&&R===0&&(me.updateMultisampleRenderTarget(F),me.updateRenderTargetMipmap(F)),T.isScene===!0&&T.onAfterRender(x,T,X),_e.resetDefaultState(),S=-1,w=null,_.pop(),_.length>0?(p=_[_.length-1],he===!0&&le.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function St(T,X,Q,J){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ee.intersectsSprite(T)){J&&Se.setFromMatrixPosition(T.matrixWorld).applyMatrix4($);const Te=I.update(T),Ue=T.material;Ue.visible&&m.push(T,Te,Ue,Q,Se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ee.intersectsObject(T))){const Te=I.update(T),Ue=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Se.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Se.copy(Te.boundingSphere.center)),Se.applyMatrix4(T.matrixWorld).applyMatrix4($)),Array.isArray(Ue)){const Le=Te.groups;for(let Be=0,Xe=Le.length;Be<Xe;Be++){const ke=Le[Be],et=Ue[ke.materialIndex];et&&et.visible&&m.push(T,Te,et,Q,Se.z,ke)}}else Ue.visible&&m.push(T,Te,Ue,Q,Se.z,null)}}const pe=T.children;for(let Te=0,Ue=pe.length;Te<Ue;Te++)St(pe[Te],X,Q,J)}function mt(T,X,Q,J){const q=T.opaque,pe=T.transmissive,Te=T.transparent;p.setupLightsView(Q),he===!0&&le.setGlobalState(x.clippingPlanes,Q),J&&ce.viewport(C.copy(J)),q.length>0&&Nt(q,X,Q),pe.length>0&&Nt(pe,X,Q),Te.length>0&&Nt(Te,X,Q),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function ht(T,X,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Yn(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Di:On,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const pe=p.state.transmissionRenderTarget[J.id],Te=J.viewport||C;pe.setSize(Te.z*x.transmissionResolutionScale,Te.w*x.transmissionResolutionScale);const Ue=x.getRenderTarget(),Le=x.getActiveCubeFace(),Be=x.getActiveMipmapLevel();x.setRenderTarget(pe),x.getClearColor(N),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),Ce&&ne.render(Q);const Xe=x.toneMapping;x.toneMapping=hi;const ke=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),he===!0&&le.setGlobalState(x.clippingPlanes,J),Nt(T,Q,J),me.updateMultisampleRenderTarget(pe),me.updateRenderTargetMipmap(pe),ae.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let dt=0,Tt=X.length;dt<Tt;dt++){const yt=X[dt],gt=yt.object,Ge=yt.geometry,wt=yt.material,at=yt.group;if(wt.side===Xt&&gt.layers.test(J.layers)){const an=wt.side;wt.side=Qt,wt.needsUpdate=!0,nt(gt,Q,J,Ge,wt,at),wt.side=an,wt.needsUpdate=!0,et=!0}}et===!0&&(me.updateMultisampleRenderTarget(pe),me.updateRenderTargetMipmap(pe))}x.setRenderTarget(Ue,Le,Be),x.setClearColor(N,O),ke!==void 0&&(J.viewport=ke),x.toneMapping=Xe}function Nt(T,X,Q){const J=X.isScene===!0?X.overrideMaterial:null;for(let q=0,pe=T.length;q<pe;q++){const Te=T[q],Ue=Te.object,Le=Te.geometry,Be=Te.group;let Xe=Te.material;Xe.allowOverride===!0&&J!==null&&(Xe=J),Ue.layers.test(Q.layers)&&nt(Ue,X,Q,Le,Xe,Be)}}function nt(T,X,Q,J,q,pe){T.onBeforeRender(x,X,Q,J,q,pe),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(x,X,Q,J,T,pe),q.transparent===!0&&q.side===Xt&&q.forceSinglePass===!1?(q.side=Qt,q.needsUpdate=!0,x.renderBufferDirect(Q,X,J,q,T,pe),q.side=ui,q.needsUpdate=!0,x.renderBufferDirect(Q,X,J,q,T,pe),q.side=Xt):x.renderBufferDirect(Q,X,J,q,T,pe),T.onAfterRender(x,X,Q,J,q,pe)}function _t(T,X,Q){X.isScene!==!0&&(X=we);const J=xe.get(T),q=p.state.lights,pe=p.state.shadowsArray,Te=q.state.version,Ue=V.getParameters(T,q.state,pe,X,Q),Le=V.getProgramCacheKey(Ue);let Be=J.programs;J.environment=T.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(T.isMeshStandardMaterial?Oe:qe).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",se),Be=new Map,J.programs=Be);let Xe=Be.get(Le);if(Xe!==void 0){if(J.currentProgram===Xe&&J.lightsStateVersion===Te)return At(T,Ue),Xe}else Ue.uniforms=V.getUniforms(T),T.onBeforeCompile(Ue,x),Xe=V.acquireProgram(Ue,Le),Be.set(Le,Xe),J.uniforms=Ue.uniforms;const ke=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=le.uniform),At(T,Ue),J.needsLights=Kt(T),J.lightsStateVersion=Te,J.needsLights&&(ke.ambientLightColor.value=q.state.ambient,ke.lightProbe.value=q.state.probe,ke.directionalLights.value=q.state.directional,ke.directionalLightShadows.value=q.state.directionalShadow,ke.spotLights.value=q.state.spot,ke.spotLightShadows.value=q.state.spotShadow,ke.rectAreaLights.value=q.state.rectArea,ke.ltc_1.value=q.state.rectAreaLTC1,ke.ltc_2.value=q.state.rectAreaLTC2,ke.pointLights.value=q.state.point,ke.pointLightShadows.value=q.state.pointShadow,ke.hemisphereLights.value=q.state.hemi,ke.directionalShadowMap.value=q.state.directionalShadowMap,ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ke.spotShadowMap.value=q.state.spotShadowMap,ke.spotLightMatrix.value=q.state.spotLightMatrix,ke.spotLightMap.value=q.state.spotLightMap,ke.pointShadowMap.value=q.state.pointShadowMap,ke.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=Xe,J.uniformsList=null,Xe}function rt(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Nr.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function At(T,X){const Q=xe.get(T);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function Ct(T,X,Q,J,q){X.isScene!==!0&&(X=we),me.resetTextureUnits();const pe=X.fog,Te=J.isMeshStandardMaterial?X.environment:null,Ue=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ps,Le=(J.isMeshStandardMaterial?Oe:qe).get(J.envMap||Te),Be=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Xe=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ke=!!Q.morphAttributes.position,et=!!Q.morphAttributes.normal,dt=!!Q.morphAttributes.color;let Tt=hi;J.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const yt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gt=yt!==void 0?yt.length:0,Ge=xe.get(J),wt=p.state.lights;if(he===!0&&(Y===!0||T!==w)){const jt=T===w&&J.id===S;le.setState(J,T,jt)}let at=!1;J.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==wt.state.version||Ge.outputColorSpace!==Ue||q.isBatchedMesh&&Ge.batching===!1||!q.isBatchedMesh&&Ge.batching===!0||q.isBatchedMesh&&Ge.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ge.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ge.instancing===!1||!q.isInstancedMesh&&Ge.instancing===!0||q.isSkinnedMesh&&Ge.skinning===!1||!q.isSkinnedMesh&&Ge.skinning===!0||q.isInstancedMesh&&Ge.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ge.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ge.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ge.instancingMorph===!1&&q.morphTexture!==null||Ge.envMap!==Le||J.fog===!0&&Ge.fog!==pe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==le.numPlanes||Ge.numIntersection!==le.numIntersection)||Ge.vertexAlphas!==Be||Ge.vertexTangents!==Xe||Ge.morphTargets!==ke||Ge.morphNormals!==et||Ge.morphColors!==dt||Ge.toneMapping!==Tt||Ge.morphTargetsCount!==gt)&&(at=!0):(at=!0,Ge.__version=J.version);let an=Ge.currentProgram;at===!0&&(an=_t(J,X,q));let zi=!1,on=!1,bs=!1;const bt=an.getUniforms(),gn=Ge.uniforms;if(ce.useProgram(an.program)&&(zi=!0,on=!0,bs=!0),J.id!==S&&(S=J.id,on=!0),zi||w!==T){ce.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),bt.setValue(L,"projectionMatrix",T.projectionMatrix),bt.setValue(L,"viewMatrix",T.matrixWorldInverse);const tn=bt.map.cameraPosition;tn!==void 0&&tn.setValue(L,oe.setFromMatrixPosition(T.matrixWorld)),re.logarithmicDepthBuffer&&bt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&bt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,on=!0,bs=!0)}if(q.isSkinnedMesh){bt.setOptional(L,q,"bindMatrix"),bt.setOptional(L,q,"bindMatrixInverse");const jt=q.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),bt.setValue(L,"boneTexture",jt.boneTexture,me))}q.isBatchedMesh&&(bt.setOptional(L,q,"batchingTexture"),bt.setValue(L,"batchingTexture",q._matricesTexture,me),bt.setOptional(L,q,"batchingIdTexture"),bt.setValue(L,"batchingIdTexture",q._indirectTexture,me),bt.setOptional(L,q,"batchingColorTexture"),q._colorsTexture!==null&&bt.setValue(L,"batchingColorTexture",q._colorsTexture,me));const vn=Q.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ie.update(q,Q,an),(on||Ge.receiveShadow!==q.receiveShadow)&&(Ge.receiveShadow=q.receiveShadow,bt.setValue(L,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(gn.envMap.value=Le,gn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(gn.envMapIntensity.value=X.environmentIntensity),on&&(bt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&Ht(gn,bs),pe&&J.fog===!0&&Z.refreshFogUniforms(gn,pe),Z.refreshMaterialUniforms(gn,J,A,U,p.state.transmissionRenderTarget[T.id]),Nr.upload(L,rt(Ge),gn,me)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Nr.upload(L,rt(Ge),gn,me),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&bt.setValue(L,"center",q.center),bt.setValue(L,"modelViewMatrix",q.modelViewMatrix),bt.setValue(L,"normalMatrix",q.normalMatrix),bt.setValue(L,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const jt=J.uniformsGroups;for(let tn=0,Yr=jt.length;tn<Yr;tn++){const gi=jt[tn];Ne.update(gi,an),Ne.bind(gi,an)}}return an}function Ht(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Kt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,X,Q){const J=xe.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),xe.get(T.texture).__webglTexture=X,xe.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Q,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const Q=xe.get(T);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0};const pn=L.createFramebuffer();this.setRenderTarget=function(T,X=0,Q=0){F=T,E=X,R=Q;let J=!0,q=null,pe=!1,Te=!1;if(T){const Le=xe.get(T);if(Le.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Le.__webglFramebuffer===void 0)me.setupRenderTarget(T);else if(Le.__hasExternalTextures)me.rebindTextures(T,xe.get(T.texture).__webglTexture,xe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ke=T.depthTexture;if(Le.__boundDepthTexture!==ke){if(ke!==null&&xe.has(ke)&&(T.width!==ke.image.width||T.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(T)}}const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const Xe=xe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[X])?q=Xe[X][Q]:q=Xe[X],pe=!0):T.samples>0&&me.useMultisampledRTT(T)===!1?q=xe.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?q=Xe[Q]:q=Xe,C.copy(T.viewport),z.copy(T.scissor),H=T.scissorTest}else C.copy(K).multiplyScalar(A).floor(),z.copy(ee).multiplyScalar(A).floor(),H=ue;if(Q!==0&&(q=pn),ce.bindFramebuffer(L.FRAMEBUFFER,q)&&J&&ce.drawBuffers(T,q),ce.viewport(C),ce.scissor(z),ce.setScissorTest(H),pe){const Le=xe.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,Q)}else if(Te){const Le=X;for(let Be=0;Be<T.textures.length;Be++){const Xe=xe.get(T.textures[Be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Be,Xe.__webglTexture,Q,Le)}}else if(T!==null&&Q!==0){const Le=xe.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Le.__webglTexture,Q)}S=-1},this.readRenderTargetPixels=function(T,X,Q,J,q,pe,Te,Ue=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){ce.bindFramebuffer(L.FRAMEBUFFER,Le);try{const Be=T.textures[Ue],Xe=Be.format,ke=Be.type;if(!re.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-J&&Q>=0&&Q<=T.height-q&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(X,Q,J,q,Ae.convert(Xe),Ae.convert(ke),pe))}finally{const Be=F!==null?xe.get(F).__webglFramebuffer:null;ce.bindFramebuffer(L.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,X,Q,J,q,pe,Te,Ue=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le)if(X>=0&&X<=T.width-J&&Q>=0&&Q<=T.height-q){ce.bindFramebuffer(L.FRAMEBUFFER,Le);const Be=T.textures[Ue],Xe=Be.format,ke=Be.type;if(!re.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.bufferData(L.PIXEL_PACK_BUFFER,pe.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(X,Q,J,q,Ae.convert(Xe),Ae.convert(ke),0);const dt=F!==null?xe.get(F).__webglFramebuffer:null;ce.bindFramebuffer(L.FRAMEBUFFER,dt);const Tt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await xf(L,Tt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pe),L.deleteBuffer(et),L.deleteSync(Tt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,Q=0){const J=Math.pow(2,-Q),q=Math.floor(T.image.width*J),pe=Math.floor(T.image.height*J),Te=X!==null?X.x:0,Ue=X!==null?X.y:0;me.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,Q,0,0,Te,Ue,q,pe),ce.unbindTexture()};const rn=L.createFramebuffer(),mn=L.createFramebuffer();this.copyTextureToTexture=function(T,X,Q=null,J=null,q=0,pe=null){pe===null&&(q!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=q,q=0):pe=0);let Te,Ue,Le,Be,Xe,ke,et,dt,Tt;const yt=T.isCompressedTexture?T.mipmaps[pe]:T.image;if(Q!==null)Te=Q.max.x-Q.min.x,Ue=Q.max.y-Q.min.y,Le=Q.isBox3?Q.max.z-Q.min.z:1,Be=Q.min.x,Xe=Q.min.y,ke=Q.isBox3?Q.min.z:0;else{const vn=Math.pow(2,-q);Te=Math.floor(yt.width*vn),Ue=Math.floor(yt.height*vn),T.isDataArrayTexture?Le=yt.depth:T.isData3DTexture?Le=Math.floor(yt.depth*vn):Le=1,Be=0,Xe=0,ke=0}J!==null?(et=J.x,dt=J.y,Tt=J.z):(et=0,dt=0,Tt=0);const gt=Ae.convert(X.format),Ge=Ae.convert(X.type);let wt;X.isData3DTexture?(me.setTexture3D(X,0),wt=L.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(me.setTexture2DArray(X,0),wt=L.TEXTURE_2D_ARRAY):(me.setTexture2D(X,0),wt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,X.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,X.unpackAlignment);const at=L.getParameter(L.UNPACK_ROW_LENGTH),an=L.getParameter(L.UNPACK_IMAGE_HEIGHT),zi=L.getParameter(L.UNPACK_SKIP_PIXELS),on=L.getParameter(L.UNPACK_SKIP_ROWS),bs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Be),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke);const bt=T.isDataArrayTexture||T.isData3DTexture,gn=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const vn=xe.get(T),jt=xe.get(X),tn=xe.get(vn.__renderTarget),Yr=xe.get(jt.__renderTarget);ce.bindFramebuffer(L.READ_FRAMEBUFFER,tn.__webglFramebuffer),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let gi=0;gi<Le;gi++)bt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(T).__webglTexture,q,ke+gi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(X).__webglTexture,pe,Tt+gi)),L.blitFramebuffer(Be,Xe,Te,Ue,et,dt,Te,Ue,L.DEPTH_BUFFER_BIT,L.NEAREST);ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||xe.has(T)){const vn=xe.get(T),jt=xe.get(X);ce.bindFramebuffer(L.READ_FRAMEBUFFER,rn),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,mn);for(let tn=0;tn<Le;tn++)bt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vn.__webglTexture,q,ke+tn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vn.__webglTexture,q),gn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,jt.__webglTexture,pe,Tt+tn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,jt.__webglTexture,pe),q!==0?L.blitFramebuffer(Be,Xe,Te,Ue,et,dt,Te,Ue,L.COLOR_BUFFER_BIT,L.NEAREST):gn?L.copyTexSubImage3D(wt,pe,et,dt,Tt+tn,Be,Xe,Te,Ue):L.copyTexSubImage2D(wt,pe,et,dt,Be,Xe,Te,Ue);ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else gn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(wt,pe,et,dt,Tt,Te,Ue,Le,gt,Ge,yt.data):X.isCompressedArrayTexture?L.compressedTexSubImage3D(wt,pe,et,dt,Tt,Te,Ue,Le,gt,yt.data):L.texSubImage3D(wt,pe,et,dt,Tt,Te,Ue,Le,gt,Ge,yt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pe,et,dt,Te,Ue,gt,Ge,yt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pe,et,dt,yt.width,yt.height,gt,yt.data):L.texSubImage2D(L.TEXTURE_2D,pe,et,dt,Te,Ue,gt,Ge,yt);L.pixelStorei(L.UNPACK_ROW_LENGTH,at),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,an),L.pixelStorei(L.UNPACK_SKIP_PIXELS,zi),L.pixelStorei(L.UNPACK_SKIP_ROWS,on),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bs),pe===0&&X.generateMipmaps&&L.generateMipmap(wt),ce.unbindTexture()},this.initRenderTarget=function(T){xe.get(T).__webglFramebuffer===void 0&&me.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?me.setTextureCube(T,0):T.isData3DTexture?me.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?me.setTexture2DArray(T,0):me.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){E=0,R=0,F=null,ce.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const Me={POS:0,ROT:3,VEL:7,SPEED:13,RPM:14,GEAR:15,WHEELS:18,WHEEL_STRIDE:8,W_LENGTH:0,W_ANGLE:1,W_SPIN:2,W_SLIP:4,W_SLIP_TAN:5,W_GROUNDED:6,W_STEER:7,CRUSH:50,POWER:54,DAMAGE:56,FLOOD:58,DROWNED:59,HOLDS:61,WHEELS_OFF:62,SOFT_AWAKE:63},In={BLOW:1,SNAPPED:2,GLASS:3,SPLASH:4,HORN:5,WRECK:6,CAME_OFF:7};function ag(i){const e=new TextDecoder,t=new Map;for(let n=0;n<i.p2p_kind_count();n++){const s=e.decode(new Uint8Array(i.memory.buffer,i.p2p_kind_name(n),i.p2p_kind_name_len(n)));t.set(s,{name:s,half:[i.p2p_kind_half(n,0),i.p2p_kind_half(n,1),i.p2p_kind_half(n,2)]})}return t}const Zs=13,Rt={INDEX:0,POS:1,ROT:4,SPEED:8,LOOK:9,FLAGS:10,KIND:11,CURVE:12},Ds={BRAKING:1,HORN:2,WRECK:4,LEFT:8,RIGHT:16};function og(i){const e=i.p2p_traffic_stride();if(e!==Zs)throw new Error(`the sim core reports a car of traffic in ${e} floats and this page reads ${Zs}: they are from different builds`);const t=new TextDecoder,n=[];for(let s=0;s<i.p2p_vehicle_count();s++)n.push({index:s,name:t.decode(new Uint8Array(i.memory.buffer,i.p2p_vehicle_name(s),i.p2p_vehicle_name_len(s))),half:[i.p2p_vehicle_half(s,0),i.p2p_vehicle_half(s,1),i.p2p_vehicle_half(s,2)],clearance:i.p2p_vehicle_half(s,3)});return n}const rl=i=>BigInt.asUintN(64,i).toString(16).padStart(16,"0");async function lg(i){const e=await fetch(i);if(!e.ok)throw new Error(`the sim core did not load (${e.status})`);const{instance:t}=await WebAssembly.instantiate(await e.arrayBuffer(),{});return t.exports}function cg(i){const e=(s,r)=>new TextDecoder().decode(new Uint8Array(i.memory.buffer,s,r)),t=[];for(let s=0;s<i.p2p_param_count();s++)t.push(e(i.p2p_param_name(s),i.p2p_param_name_len(s)));const n=[];for(let s=0;s<i.p2p_car_count();s++)n.push({index:s,name:e(i.p2p_car_name(s),i.p2p_car_name_len(s)),says:e(i.p2p_car_says(s),i.p2p_car_says_len(s)),param:r=>i.p2p_car_param(s,t.indexOf(r))});return n}const br=new Float32Array(0);class lc{constructor(e,t,n=1,s=0){this.core=e;const r=e.p2p_alloc(t.length);if(new Uint8Array(e.memory.buffer,r,t.length).set(t),this.ptr=e.p2p_new_car(n>>>0,0,r,t.length,s),e.p2p_free(r,t.length),!this.ptr)throw new Error("the sim core refused the world file");this.tickRate=e.p2p_tick_rate(),this.len=e.p2p_state_len()}tickRate;ptr;len;place(e,t,n){this.core.p2p_place(this.ptr,e,t,n)}placeAt(e,t,n,s){this.core.p2p_place_at(this.ptr,e,t,n,s)}step(e){this.core.p2p_step(this.ptr,e.steer,e.throttle,e.brake,e.handbrake)}read(e){e.set(new Float32Array(this.core.memory.buffer,this.core.p2p_state(this.ptr),this.len))}get stateLength(){return this.len}get tick(){return this.core.p2p_tick(this.ptr)}digest(){return rl(this.core.p2p_digest(this.ptr))}drop(){this.ptr&&this.core.p2p_drop(this.ptr),this.ptr=0}movedProps(){const e=this.core.p2p_props_drain(this.ptr);return e?new Float32Array(this.core.memory.buffer,this.core.p2p_props_ptr(this.ptr),e*8).slice():br}traffic(){const e=this.core.p2p_traffic_drain(this.ptr);return{count:e,cars:e?new Float32Array(this.core.memory.buffer,this.core.p2p_traffic_ptr(this.ptr),e*Zs):br}}setSoft(e){this.core.p2p_soft_set(this.ptr,e?1:0)}softBuilt(){const e=this.core.p2p_soft_drain(this.ptr);if(!e)return null;const t=new Float32Array(e*3),n=new Int16Array(e);for(let s=0;s<e;s++){for(let r=0;r<3;r++)t[s*3+r]=this.core.p2p_soft_built(this.ptr,s,r);n[s]=this.core.p2p_soft_built(this.ptr,s,3)}return{rest:t,kind:n}}softNow(){const e=this.core.p2p_soft_drain(this.ptr),t=this.core.p2p_loose_count(this.ptr);return{nodes:e?new Float32Array(this.core.memory.buffer,this.core.p2p_soft_ptr(this.ptr),e*3).slice():br,loose:t?new Float32Array(this.core.memory.buffer,this.core.p2p_loose_ptr(this.ptr),t*8).slice():br}}wantTraffic(e){this.core.p2p_traffic_want(this.ptr,e)}events(){const e=this.core.p2p_events_drain(this.ptr);if(!e)return[];const t=new Float32Array(this.core.memory.buffer,this.core.p2p_events_ptr(this.ptr),e*3),n=[];for(let s=0;s<e;s++)n.push({what:t[s*3],a:t[s*3+1],b:t[s*3+2]});return n}params(){const e=this.core,t=new TextDecoder,n=[],s=(r,a)=>t.decode(new Uint8Array(e.memory.buffer,r,a));for(let r=0;r<e.p2p_param_count();r++)n.push({index:r,name:s(e.p2p_param_name(r),e.p2p_param_name_len(r)),doc:s(e.p2p_param_doc(r),e.p2p_param_doc_len(r)),default:e.p2p_param_default(r)});return n}param(e){return this.core.p2p_param_get(this.ptr,e)}setParam(e,t){this.core.p2p_param_set(this.ptr,e,t)}}let wh="mid";function hg(i){wh=i}function al(){return wh}const li=new B(-.72,.46,.52).normalize(),cc=new Ve(-li.x/li.y,-li.z/li.y),cs=i=>{const e=i.toFixed(5);return e.includes(".")?e:`${e}.0`},bh={far:1200},Ni=`
#ifndef P2P_LOOK
#define P2P_LOOK
const vec3 P2P_SUN = vec3(${cs(li.x)}, ${cs(li.y)}, ${cs(li.z)});
float p2pHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float p2pHash1(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
vec2 p2pHash2(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float p2pNoise(vec2 p) {
  vec2 i = floor(p), u = fract(p); u = u * u * (3.0 - 2.0 * u);
  return mix(mix(p2pHash(i), p2pHash(i + vec2(1.0, 0.0)), u.x), mix(p2pHash(i + vec2(0.0, 1.0)), p2pHash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float p2pFbm(vec2 p) { return p2pNoise(p) * 0.5 + p2pNoise(p * 2.03 + 7.1) * 0.25 + p2pNoise(p * 4.01 + 3.7) * 0.125 + p2pNoise(p * 8.07 + 1.3) * 0.0625; }
// the air at the horizon, looking along d: pale blue, warmed toward the sun
vec3 p2pHaze(vec3 d) {
  vec2 h = normalize(d.xz + vec2(1e-5)), s = normalize(P2P_SUN.xz);
  float toSun = max(dot(h, s), 0.0);
  return mix(vec3(0.55, 0.67, 0.83), vec3(0.98, 0.80, 0.60), toSun * toSun * toSun * 0.62);
}
// the clear sky along d, in the light's own units (before the tone curve)
vec3 p2pSky(vec3 d) {
  float y = max(d.y, 0.0);
  vec3 col = mix(p2pHaze(d), vec3(0.060, 0.17, 0.50), 1.0 - exp(-y * 3.2));
  float s = max(dot(d, P2P_SUN), 0.0);
  col += vec3(1.0, 0.70, 0.42) * (pow(s, 8.0) * 0.30 + pow(s, 80.0) * 0.55);
  return col;
}
// how much of a line of half-width hw, centred d away, covers a pixel fw wide: a box, and dimmer once thinner than the pixel
float p2pLine(float d, float hw, float fw) { fw = max(fw, 1e-4); return clamp((hw - abs(d)) / fw + 0.5, 0.0, 1.0) * min(1.0, 2.0 * hw / fw); }
// 1 between a and b along one axis, with a pixel's worth of edge
float p2pSpan(float x, float a, float b, float fw) { fw = max(fw, 1e-4); return clamp((x - a) / fw + 0.5, 0.0, 1.0) * clamp((b - x) / fw + 0.5, 0.0, 1.0); }
float p2pBox(vec2 p, vec2 lo, vec2 hi, vec2 fw) { return p2pSpan(p.x, lo.x, hi.x, fw.x) * p2pSpan(p.y, lo.y, hi.y, fw.y); }
// What a mirror shows below the sky: the walls across the street, in blocks
// by bearing, each a material, lit if it faces the sun, banded by storeys.
vec3 p2pAcross(vec3 r) {
  float id = floor(atan(r.x, r.z) * 4.5);
  float h = p2pHash1(id + 3.0);
  vec3 wall = mix(vec3(0.44, 0.41, 0.36), vec3(0.17, 0.20, 0.24), step(0.62, h));
  wall = mix(wall, vec3(0.34, 0.17, 0.12), step(0.88, h));
  float lit = smoothstep(-0.25, 0.45, -dot(normalize(r.xz + vec2(1e-5)), normalize(P2P_SUN.xz)));
  float storeys = 0.78 + 0.22 * step(0.45, fract(r.y * 13.0 + h));
  return wall * storeys * (0.30 + 1.25 * lit) * (0.55 + 0.45 * smoothstep(-0.35, 0.2, r.y));
}
// how high the roofs across the street stand in a mirror, as the sine of the angle, from a point 'up' metres above the street
float p2pRoofs(vec3 r, float up) {
  float id = floor(atan(r.x, r.z) * 4.5);
  return mix(0.50, 0.02, clamp(up / 60.0, 0.0, 1.0)) + (p2pHash1(id + 11.0) - 0.5) * 0.30 * (1.0 - clamp(up / 80.0, 0.0, 1.0));
}
// how much of a thing is lost to the air over a distance
float p2pAir(float dist, float density) { return 0.94 * (1.0 - exp(-pow(dist * density, 2.2))); }
#endif
`;let hc=!1;function fg(){if(hc)return;hc=!0;const i=je;i.fog_pars_vertex=`
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogDir;
#endif`,i.fog_vertex=`
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogDir = mvPosition.xyz * mat3( viewMatrix );
#endif`,i.fog_pars_fragment=`
#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  varying vec3 vFogDir;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
  ${Ni}
#endif`,i.fog_fragment=`
#ifdef USE_FOG
  float p2pDist = length( vFogDir );
  #ifdef FOG_EXP2
    float fogFactor = p2pAir( p2pDist, fogDensity );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, p2pDist );
  #endif
  vec3 p2pHazeCol = p2pHaze( vFogDir / max( p2pDist, 1e-3 ) );
  #ifdef TONE_MAPPING
    p2pHazeCol = toneMapping( p2pHazeCol );
  #endif
  p2pHazeCol = linearToOutputTexel( vec4( p2pHazeCol, 1.0 ) ).rgb;
  gl_FragColor.rgb = mix( gl_FragColor.rgb, p2pHazeCol, fogFactor );
#endif`;const e=i.shadowmap_pars_fragment,t=e.indexOf("return mix( 1.0, shadow, shadowIntensity );");if(t<0)throw new Error("three changed its shadow chunk: the look pass patches it");i.shadowmap_pars_fragment=`${e.slice(0,t)}vec2 p2pEdge = abs( shadowCoord.xy - 0.5 ) * 2.0;
		return mix( 1.0, shadow, shadowIntensity * ( 1.0 - smoothstep( 0.80, 0.98, max( p2pEdge.x, p2pEdge.y ) ) ) );${e.slice(t+43)}`}let No=null;function ug(i){No=i}function ss(){if(!No)throw new Error("the ground is built before what stands on it: buildGround first");return No}const Eh=128;let Er=null;function dg(i){if(Er)return Er;const[e,t,n,s]=i.box,r=2048,a=r/(n-e),o=r/(s-t),l=document.createElement("canvas");l.width=r,l.height=r;const c=l.getContext("2d");c.fillStyle="#000",c.fillRect(0,0,r,r),c.globalCompositeOperation="lighten";const h=v=>(v-e)*a,f=v=>(v-t)*o,u=v=>`rgb(${Math.round(Math.min(1,v/Eh)*255)},0,0)`;for(const v of i.buildings){const g=v.r,m=v.y1-v.y0;if(g.length<4||m<2)continue;let p=0;for(let M=0;M+1<g.length;M++)p+=g[M][0]*g[M+1][1]-g[M+1][0]*g[M][1];const y=p>0?1:-1,_=cc.x*m,x=cc.y*m;for(let M=0;M+1<g.length;M++){const[E,R]=g[M],[F,S]=g[M+1],w=Math.hypot(F-E,S-R);if(w<.05)continue;const C=(S-R)/w*y,z=-(F-E)/w*y,H=C*_+z*x;if(H<=.5)continue;const N=c.createLinearGradient(h(E),f(R),h(E+C*H),f(R+z*H));N.addColorStop(0,u(m)),N.addColorStop(1,"#000"),c.fillStyle=N,c.beginPath(),c.moveTo(h(E),f(R)),c.lineTo(h(F),f(S)),c.lineTo(h(F+_),f(S+x)),c.lineTo(h(E+_),f(R+x)),c.closePath(),c.fill()}c.fillStyle=u(m),c.beginPath(),g.forEach(([M,E],R)=>{R===0?c.moveTo(h(M),f(E)):c.lineTo(h(M),f(E))}),c.closePath(),c.fill()}c.shadowColor="rgb(0,255,0)",c.shadowBlur=5,c.fillStyle="rgb(0,255,0)";for(const v of i.buildings)v.r.length<4||(c.beginPath(),v.r.forEach(([g,m],p)=>{p===0?c.moveTo(h(g),f(m)):c.lineTo(h(g),f(m))}),c.closePath(),c.fill());const d=new Yf(l);return d.flipY=!1,d.colorSpace=Cn,d.generateMipmaps=!0,d.minFilter=oi,d.magFilter=un,d.anisotropy=4,Er={texture:d,box:new it(e,t,1/(n-e),1/(s-t))},Er}let Ar=null;function pg(i){if(Ar)return Ar;let e=1/0,t=1/0,n=-1/0,s=-1/0;for(const d of i.ways??[])if(d.k==="tunnel")for(const v of d.p)e=Math.min(e,v[0]-20),t=Math.min(t,v[2]-20),n=Math.max(n,v[0]+20),s=Math.max(s,v[2]+20);e===1/0&&(e=0,t=0,n=1,s=1);const r=Math.max(1,Math.ceil((n-e)/1.5)),a=Math.max(1,Math.ceil((s-t)/1.5)),o=r/(n-e),l=a/(s-t),c=(i.ground.min??0)-10,h=new Uint8Array(r*a*4),f=d=>Math.max(1,Math.min(255,Math.round((d-c)*2)));for(const d of i.ways??[]){if(d.k!=="tunnel")continue;const v=d.clear??5.6,g=d.half+.6;for(let m=0;m+1<d.p.length;m++){const p=d.p[m],y=d.p[m+1],_=y[0]-p[0],x=y[2]-p[2],M=_*_+x*x||1,E=Math.floor((Math.min(p[0],y[0])-g-e)*o),R=Math.ceil((Math.max(p[0],y[0])+g-e)*o),F=Math.floor((Math.min(p[2],y[2])-g-t)*l),S=Math.ceil((Math.max(p[2],y[2])+g-t)*l);for(let w=Math.max(0,F);w<=Math.min(a-1,S);w++)for(let C=Math.max(0,E);C<=Math.min(r-1,R);C++){const z=e+(C+.5)/o,H=t+(w+.5)/l,N=Math.min(1,Math.max(0,((z-p[0])*_+(H-p[2])*x)/M));if(Math.hypot(p[0]+_*N-z,p[2]+x*N-H)>g)continue;const O=p[1]+(y[1]-p[1])*N,P=(w*r+C)*4;h[P]=f(O),h[P+1]=Math.max(h[P+1],f(O+v)),h[P+3]=255}}}const u=new Gr(h,r,a,dn);return u.minFilter=u.magFilter=Yt,u.generateMipmaps=!1,u.needsUpdate=!0,Ar={texture:u,box:new it(e,t,o/r,l/a),base:c},Ar}function $n(i,e,t){const n=dg(e),s=pg(e);return i.onBeforeCompile=r=>{r.uniforms.uShade={value:n.texture},r.uniforms.uShadeBox={value:n.box},r.uniforms.uTubes={value:s.texture},r.uniforms.uTubesBox={value:s.box},Object.assign(r.uniforms,t.uniforms??{}),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorld;
${t.vertexPars??""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
${t.vertex??""}`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWorld;
        uniform sampler2D uShade; uniform vec4 uShadeBox;
        uniform sampler2D uTubes; uniform vec4 uTubesBox;
        ${Ni}
        // x: metres of shade standing over the ground at (x, z); y: how closed in by walls, 0 to 1
        vec2 p2pShade( vec2 xz ) {
          vec2 uv = ( xz - uShadeBox.xy ) * uShadeBox.zw;
          vec4 t = texture2D( uShade, uv );
          // past the map's edge there is nothing to cast shade: do not smear the last row outward
          float inside = step( 0.0, uv.x ) * step( uv.x, 1.0 ) * step( 0.0, uv.y ) * step( uv.y, 1.0 );
          return vec2( t.r * ${cs(Eh)}, t.g ) * inside;
        }
        ${t.fragmentPars??""}`).replace("#include <color_fragment>",`#include <color_fragment>
        ${t.tube===!1?"":`{
          // inside a tunnel's tube, over its floor and under its roof: not drawn (the hill's ground at a portal)
          vec2 tuv = ( vWorld.xz - uTubesBox.xy ) * uTubesBox.zw;
          vec4 tb = texture2D( uTubes, tuv );
          if ( tb.a > 0.5 && tuv.x > 0.0 && tuv.x < 1.0 && tuv.y > 0.0 && tuv.y < 1.0 ) {
            float floorY = tb.r * 127.5 + ${cs(s.base)}, roofY = tb.g * 127.5 + ${cs(s.base)};
            if ( vWorld.y > floorY + 0.15 && vWorld.y < roofY + 0.2 ) discard;
          }
        }`}
        // 1 inside the square the real shadow map covers, fading to 0 at its edge
        float p2pNear = 0.0;
        float p2pGloss = 0.0; // a patch may set it: how mirror-bright the surface is here
        #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
          {
            vec3 sc = vDirectionalShadowCoord[ 0 ].xyz / vDirectionalShadowCoord[ 0 ].w;
            vec2 e = abs( sc.xy - 0.5 ) * 2.0;
            p2pNear = ( 1.0 - smoothstep( 0.80, 0.98, max( e.x, e.y ) ) ) * step( sc.z, 1.0 );
          }
        #endif
        ${t.color??""}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${t.normal??""}`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
${t.light??`
        {
          vec2 sh = p2pShade( vWorld.xz );
          reflectedLight.directDiffuse *= mix( 1.0 - smoothstep( 0.4, 3.0, sh.x ), 1.0, p2pNear );
          float open = 1.0 - 0.34 * smoothstep( 0.3, 1.0, sh.y );
          reflectedLight.indirectDiffuse *= open;
          reflectedLight.directDiffuse *= mix( open, 1.0, 0.6 );
        }`}
        // how much of the sun reaches here, 0 to 1: the lights' own answer, shadows and all
        float p2pLit = clamp( dot( reflectedLight.directDiffuse, vec3( 0.3333 ) ) / max( dot( diffuseColor.rgb, vec3( 0.3333 ) ), 0.02 ) / 1.15, 0.0, 1.0 );`).replace("#include <envmap_fragment>",t.final??"")},i.customProgramCacheKey=()=>t.key,i}const mg=i=>i>=0&&i<=6,Rn=4,gg=[{size:[.62,.42,.05],color:5988195},{size:[.6,.46,.52],color:2895152},{size:[.24,.19,.17],color:1118740},{size:[.38,.38,.05],color:1381655,round:!0},{size:[1.3,.22,.32],color:1776670},{size:[.5,.75,.55],color:2762276},{size:[.5,.75,.55],color:2762276},{size:[.7,.24,.5],color:1579291}];class vg{constructor(e,t,n,s,r,a){this.body=e,this.group=n,this.world=s,this.wheel=r,this.wheelMaterial=a;const o=e.geometry.getAttribute("position");this.base=Float32Array.from(o.array),this.nodes0=t.rest;const l=t.kind.length,c=o.count;this.ties=new Int16Array(c*Rn).fill(-1),this.weights=new Float32Array(c*Rn),this.panelOf=new Uint8Array(c);const h=[];for(let d=0;d<l;d++)mg(t.kind[d])&&h.push(d);const f=(d,v,g,m)=>{const p=t.rest[d*3]-v,y=t.rest[d*3+1]-g,_=t.rest[d*3+2]-m;return p*p+y*y+_*_};for(let d=0;d<c;d++){const v=this.base[d*3],g=this.base[d*3+1],m=this.base[d*3+2];let p=h[0],y=1/0;for(const E of h){const R=f(E,v,g,m);R<y&&(y=R,p=E)}const _=t.kind[p];this.panelOf[d]=_;const x=h.filter(E=>t.kind[E]===_).map(E=>[E,f(E,v,g,m)]).sort((E,R)=>E[1]-R[1]).slice(0,Rn);let M=0;for(const[E,[R,F]]of x.entries()){const S=1/(F+.01);this.ties[d*Rn+E]=R,this.weights[d*Rn+E]=S,M+=S}for(let E=0;E<Rn;E++)this.weights[d*Rn+E]/=M||1}const u=e.geometry.getIndex();for(let d=1;d<=6;d++){const v=[];for(let y=0;y<u.count;y+=3){const _=u.getX(y),x=u.getX(y+1),M=u.getX(y+2);this.panelOf[_]===d&&this.panelOf[x]===d&&this.panelOf[M]===d&&v.push(_,x,M)}if(!v.length)continue;const g=new B;let m=0;for(let y=0;y<l;y++)t.kind[y]===d&&(g.x+=t.rest[y*3],g.y+=t.rest[y*3+1],g.z+=t.rest[y*3+2],m++);g.divideScalar(Math.max(1,m));const p=new Mt;for(const y of Object.keys(e.geometry.attributes)){const _=e.geometry.getAttribute(y),x=_.itemSize,M=new Float32Array(v.length*x);v.forEach((E,R)=>{for(let F=0;F<x;F++)M[R*x+F]=_.getComponent(E,F)-(y==="position"?g.getComponent(F):0)}),p.setAttribute(y,new xt(M,x))}p.computeVertexNormals(),this.pieces.set(d,{geo:p,centre:g})}this.partBase=[...t.kind].findIndex(d=>d>=20),gg.forEach((d,v)=>{const g=d.round?new tl(d.size[0]/2,.025,6,16):new Fi(...d.size),m=new vt(g,new Ss({color:d.color,roughness:.6,metalness:v===1||v===0?.6:.1}));d.round&&(m.rotation.x=-.35),m.castShadow=!1,n.add(m),this.parts.push(m)}),this.apply(t.rest,0)}ties;weights;panelOf;base;nodes0;parts=[];partBase;pieces=new Map;loose=new Map;apply(e,t,n){const s=this.body.geometry.getAttribute("position"),r=s.array;for(let o=0;o<s.count;o++){const l=this.panelOf[o];if(l&&(t>>2*l&3)===2){const u=this.ties[o*Rn];r[o*3]=e[u*3],r[o*3+1]=e[u*3+1],r[o*3+2]=e[u*3+2];continue}let c=this.base[o*3],h=this.base[o*3+1],f=this.base[o*3+2];for(let u=0;u<Rn;u++){const d=this.ties[o*Rn+u],v=this.weights[o*Rn+u];d<0||(c+=(e[d*3]-this.nodes0[d*3])*v,h+=(e[d*3+1]-this.nodes0[d*3+1])*v,f+=(e[d*3+2]-this.nodes0[d*3+2])*v)}r[o*3]=c,r[o*3+1]=h,r[o*3+2]=f}s.needsUpdate=!0,this.body.geometry.computeVertexNormals(),this.body.geometry.computeBoundingSphere(),this.parts.forEach((o,l)=>{const c=this.partBase+l;o.position.set(e[c*3],e[c*3+1],e[c*3+2])});const a=new Set;for(let o=0;n&&o+7<n.length;o+=8){const l=n[o];a.add(l);let c=this.loose.get(l);if(!c){if(l>=10)c=new vt(this.wheel,this.wheelMaterial);else{const h=this.pieces.get(l);if(!h)continue;c=new vt(h.geo,this.body.material)}c.castShadow=!0,c.name=l>=10?"a wheel off the car":"a panel off the car",this.world.add(c),this.loose.set(l,c)}c.position.set(n[o+1],n[o+2],n[o+3]),c.quaternion.set(n[o+4],n[o+5],n[o+6],n[o+7])}for(const[o,l]of this.loose)a.has(o)||(this.world.remove(l),this.loose.delete(o))}dispose(){for(const t of this.loose.values())this.world.remove(t);this.loose.clear();for(const t of this.parts)this.group.remove(t),t.geometry.dispose();for(const t of this.pieces.values())t.geo.dispose();const e=this.body.geometry.getAttribute("position");e.array.set(this.base),e.needsUpdate=!0,this.body.geometry.computeVertexNormals()}}const wi=128,xg=2.2,Wn=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},ol={name:"Sorrento",paint:10227467,screenFoot:-.86,screenHead:-.08,backHead:.72,backFoot:1.68,nose:.13,belt:.38,roof:.845},fc=-.17,Ah=.085,uc=1.25,_g=`
  attribute vec4 carA; attribute vec4 carB; varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN;
  uniform vec4 uCrush; uniform float uWide; uniform float uSoft; varying float vDent;`,yg=`
  vCarA = carA; vCarB = carB; vLocal = position; vLocalN = normal;
  {
    float hl = carB.w;
    float nose = smoothstep(-hl + 1.0, -hl, position.z), tail = smoothstep(hl - 0.9, hl, position.z);
    float low = 1.0 - smoothstep(0.38, 0.8, position.y);
    float left = smoothstep(-uWide * 0.45, -uWide, position.x) * low, right = smoothstep(uWide * 0.45, uWide, position.x) * low;
    float lump = 0.5 + 0.5 * sin(position.x * 9.0 + position.y * 7.0) * sin(position.z * 11.0 + position.y * 5.0);
    float uneven = 0.6 + 0.4 * lump;
    // with a soft body the skin is already where its masses put it (carsoft.ts): only the paint wears the crush
    float shove = 1.0 - uSoft;
    transformed.z += uCrush.x * nose * uneven * ${uc.toFixed(2)} * shove;
    transformed.z -= uCrush.y * tail * uneven * ${uc.toFixed(2)} * shove;
    // a side gives less than an end: the wheels stay where the sim has them, and the skin must not go in past them
    transformed.x += min(0.2, uCrush.z * 0.5) * left * uneven * shove;
    transformed.x -= min(0.2, uCrush.w * 0.5) * right * uneven * shove;
    // a crushed bonnet or boot lid buckles upward
    transformed.y += (uCrush.x * nose * nose + uCrush.y * tail * tail) * 0.35 * lump * step(0.12, position.y) * shove;
    // not in proportion: a light blow must show, and a heavy one has nowhere further to go
    vDent = pow(clamp((uCrush.x * nose + uCrush.y * tail + uCrush.z * left + uCrush.w * right) * 4.0, 0.0, 1.0), 0.65);
  }`,Mg=`
  uniform float uBrake; uniform float uReverse; uniform vec4 uCrush; varying float vDent;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN;
  ${Ni}`,Sg=i=>{const e=i.screenFoot,t=i.screenHead,n=i.backHead,s=i.backFoot,r=(i.screenHead+i.backHead)/2+.02,a=Math.min(i.glassTo??99,i.backFoot-.42),o=i.belt;return`
  float carGlass = 0.0, carTrim = 0.0, carScuff = 0.0, carCrack = 0.0; vec3 carLamp = vec3(0.0);
  {
    vec3 q = vLocal; vec3 n = normalize(vLocalN);
    float fz = fwidth(q.z), fy = fwidth(q.y), fx = fwidth(q.x), ff = fwidth(vCarA.x), fe = fwidth(vCarA.y), fu = max(fwidth(vCarB.x), fwidth(vCarB.y));
    float up = vCarA.x, edge = vCarA.y, cabin = step(0.5, vCarA.z), halfLen = vCarB.w;
    float side = step(0.62, abs(n.x));
    // glass: the side windows between their pillars, the windscreen and the back window inside their frames
    float sideGlass = side * p2pSpan(up, 0.13, 0.86, ff) * p2pSpan(q.z, ${(e+.42).toFixed(2)}, ${a.toFixed(2)}, fz) * (1.0 - p2pLine(q.z - ${r.toFixed(2)}, 0.05, fz));
    // the side glass leans with the screen and the back window: cut its corners along them
    sideGlass *= step(${e.toFixed(2)} + (${(t-e).toFixed(2)}) * up + 0.07, q.z) * step(q.z, ${s.toFixed(2)} - (${(s-n).toFixed(2)}) * up - 0.07);
    float top = (1.0 - side) * step(0.5, up);
    float screen = top * p2pSpan(vCarB.x, 0.06, 0.93, fu) * (1.0 - smoothstep(0.80 - fe, 0.80 + fe, edge));
    float back = top * p2pSpan(vCarB.y, 0.07, 0.92, fu) * (1.0 - smoothstep(0.80 - fe, 0.80 + fe, edge));
    carGlass = max(sideGlass, max(screen, back)) * cabin;
    // black: the sills and valances, the lips of the arches, the grille, the strip under the glass
    float lip = p2pLine(vCarB.z - ${Ah.toFixed(3)} + 0.02, 0.022, fwidth(vCarB.z)) * side * step(q.y, 0.3);
    float grille = step(q.z, -halfLen + 0.2) * p2pSpan(abs(q.x), -1.0, 0.52, fx) * p2pSpan(q.y, -0.30, -0.10, fy);
    float waist = side * cabin * p2pSpan(up, 0.09, 0.13, ff);
    carTrim = max(max(vCarA.w, lip), max(grille, waist));
    // shut lines: two doors, the bonnet, the boot
    float shut = side * (p2pLine(q.z - ${(e+.26).toFixed(2)}, 0.006, fz) + p2pLine(q.z - ${(r+.1).toFixed(2)}, 0.006, fz)) * step(-0.28, q.y) * step(up, 0.1);
    shut += (1.0 - side) * step(0.5, n.y) * (p2pLine(q.z - ${(e-.16).toFixed(2)}, 0.006, fz) * step(q.z, ${(e-.04).toFixed(2)}) + p2pLine(abs(q.x) - 0.70, 0.006, fx) * step(q.z, ${(e-.16).toFixed(2)}) * step(-halfLen + 0.35, q.z));
    diffuseColor.rgb *= 1.0 - min(shut, 1.0) * 0.75;
    // a handle on each door
    float handle = side * p2pSpan(q.z, ${(r-.24).toFixed(2)}, ${(r-.08).toFixed(2)}, fz) * p2pSpan(q.y, ${(o-.135).toFixed(3)}, ${(o-.105).toFixed(3)}, fy);
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.03), handle);
    // where the skin is pushed in: the paint dulled and scraped along the car, through to primer and then to bare metal
    float worn = vDent * (0.2 + 0.8 * p2pFbm(q.xz * 9.0 + q.y * 13.0)) + vDent * 0.2 * p2pNoise(vec2(q.z * 3.0 + q.x * 2.0, q.y * 70.0));
    carScuff = smoothstep(0.06, 0.38, worn);
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.5 + vec3(0.03), carScuff);
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.13, 0.13, 0.135), smoothstep(0.5, 0.62, worn));
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.34, 0.35, 0.36), smoothstep(0.72, 0.84, worn));
    // cracked glass: a web from where the blow came through, on the panes of the side that took it
    {
      float pane = side > 0.5 ? (q.x < 0.0 ? uCrush.z : uCrush.w) : (q.z < 0.3 ? uCrush.x : uCrush.y);
      vec2 p = side > 0.5 ? vec2(q.z - 0.55, q.y - 0.58) : (q.z < 0.3 ? vec2(q.x + 0.22, q.z + 0.52) : vec2(q.x - 0.18, q.z - 1.2));
      float rad = length(p), sector = atan(p.y, p.x) * 11.0 / 6.2831853, sid = floor(sector);
      float spoke = p2pLine(fract(sector) - 0.5 + (p2pHash1(sid + 2.0) - 0.5) * 0.5, 0.035, fwidth(sector));
      float rings = rad * 7.0 + p2pHash1(sid + 9.0);
      float web = max(spoke, 0.7 * p2pLine(fract(rings) - 0.5, 0.07, fwidth(rings)) * step(0.06, rad));
      carCrack = web * smoothstep(0.16, 0.3, pane) * (1.0 - smoothstep(0.25, 0.25 + 2.2 * pane, rad));
    }
    // lamps: at the nose a pair and a thin strip by day; at the tail a bar that brightens with the brake, and two small whites for reverse
    float nose = step(q.z, -halfLen + 0.42) * step(n.z, -0.25), tail = step(halfLen - 0.34, q.z) * step(0.25, n.z);
    float head = nose * p2pSpan(abs(q.x), 0.46, 0.80, fx) * p2pSpan(q.y, 0.02, 0.12, fy);
    float strip = nose * p2pSpan(abs(q.x), 0.44, 0.82, fx) * p2pLine(q.y - 0.145, 0.012, fy);
    float rear = tail * p2pSpan(abs(q.x), 0.30, 0.84, fx) * p2pSpan(q.y, 0.20, 0.28, fy);
    float bar = tail * p2pSpan(abs(q.x), -1.0, 0.32, fx) * p2pLine(q.y - 0.24, 0.012, fy);
    float white = tail * p2pSpan(abs(q.x), 0.18, 0.28, fx) * p2pSpan(q.y, 0.205, 0.235, fy);
    float plate = tail * p2pSpan(abs(q.x), -1.0, 0.26, fx) * p2pSpan(q.y, -0.02, 0.11, fy);
    // a crushed end's lamps are dark
    float lit0 = 1.0 - smoothstep(0.14, 0.26, uCrush.x), lit1 = 1.0 - smoothstep(0.14, 0.26, uCrush.y);
    carLamp = vec3(1.0, 0.93, 0.80) * (head * 0.9 + strip * 3.0) * lit0 + (vec3(1.0, 0.05, 0.02) * (rear + bar) * (0.35 + 5.0 * uBrake) + vec3(1.0, 0.98, 0.92) * white * uReverse * 4.0) * lit1;
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.012, 0.014, 0.017), carGlass);
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.68, 0.70), carGlass * carCrack);
    carScuff *= 1.0 - carGlass;
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.018), carTrim * (1.0 - carGlass));
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.20, 0.02, 0.015), max(rear, bar) * (1.0 - white));
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.55, 0.55, 0.52), max(head, plate));
  }`},wg=`
  roughnessFactor = mix(mix(roughnessFactor, 0.62, carTrim), 0.05, carGlass);
  metalnessFactor = mix(mix(metalnessFactor, 0.0, carTrim), 0.85, carGlass);
  roughnessFactor = mix(roughnessFactor, 0.85, max(carScuff, carGlass * carCrack));
  metalnessFactor = mix(metalnessFactor, 0.15, carGlass * carCrack);`,bg=`
  normal = normalize(mix(normal, normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition))), vDent * 0.9));`,Eg="varying vec3 vLocal;",Ag=`
  float wheelMetal = 0.0;
  {
    float r = length(vLocal.yz), a = atan(vLocal.z, vLocal.y), fr = fwidth(r);
    float R = uRadius, rim = R * 0.66;
    float face = step(0.08, abs(vLocal.x));
    float inRim = 1.0 - smoothstep(rim - fr, rim + fr, r);
    float lipRing = smoothstep(rim * 0.90 - fr, rim * 0.90 + fr, r) * inRim;
    float sp = abs(fract(a / 6.2831853 * 5.0 + 0.5) - 0.5);            // five spokes
    float spoke = (1.0 - smoothstep(0.10, 0.13, abs(sp - 0.13))) * step(R * 0.16, r);
    float hub = 1.0 - smoothstep(R * 0.17 - fr, R * 0.17 + fr, r);
    wheelMetal = inRim * max(max(lipRing, spoke), hub) * face;
    vec3 tyre = vec3(0.022) * (1.0 + 0.5 * step(R * 0.93, r) * step(0.5, fract(vLocal.x * 28.0)) * (1.0 - face));
    tyre *= 1.0 + 0.6 * (1.0 - smoothstep(0.0, R * 0.08, abs(r - R * 0.80))) * face;   // the raised band on the wall
    vec3 behind = vec3(0.012) + vec3(0.10, 0.10, 0.105) * (1.0 - smoothstep(R * 0.42, R * 0.46, r)) * step(R * 0.17, r);  // the brake's disc in the dark
    vec3 c = mix(tyre, behind, inRim * face);
    diffuseColor.rgb = mix(c, vec3(0.62, 0.63, 0.65), wheelMetal);
  }`,Tg=`
  roughnessFactor = mix(0.9, 0.28, wheelMetal);
  metalnessFactor = mix(0.0, 0.9, wheelMetal);`;function dc(i,e,t,n,s,r,a,o,l="",c=""){return i.onBeforeCompile=h=>{Object.assign(h.uniforms,t),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
${n}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${s}`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
${r}`).replace("#include <color_fragment>",`#include <color_fragment>
${a}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${o}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${l}`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
${c}`)},i.customProgramCacheKey=()=>e,i}class Rg{constructor(e,t=null,n=ol){this.shape=e,this.look=n;const s=(e.axleFront+e.axleRear)/2+(e.overhang??.85),r=e.halfTrack+.12,a=dc(new ph({color:n.paint,metalness:.35,roughness:.34,clearcoat:1,clearcoatRoughness:.06,envMap:t,envMapIntensity:.75}),`p2p-car-body-${n.name}`,this.lamps,_g,yg,Mg,Sg(n),wg,"totalEmissiveRadiance += carLamp;",bg);this.lamps.uWide.value=r;const o=new vt(this.body(s,r),a);o.castShadow=!0,o.receiveShadow=!0,this.group.add(o),this.bodyMesh=o;const l=dc(new Ss({color:16777215,envMap:t,envMapIntensity:.6}),"p2p-car-wheel",{uRadius:{value:e.wheelRadius}},"varying vec3 vLocal;","vLocal = position;",`uniform float uRadius; ${Eg}`,Ag,Tg),c=e.wheelRadius,h=.12,f=[[0,.02],[c*.64,.105],[c*.72,h],[c*.93,h],[c,h*.72],[c,-h*.72],[c*.93,-h],[c*.72,-h],[c*.64,-.105],[0,-.02]].map(([y,_])=>new Ve(y,_)),u=new Xr(f,20).rotateZ(-Math.PI/2);{const y=u.getAttribute("position"),_=u.index,x=new B,M=new B,E=new B;for(let R=0;R<_.count;R+=3)if(x.fromBufferAttribute(y,_.getX(R)),M.fromBufferAttribute(y,_.getX(R+1)),E.fromBufferAttribute(y,_.getX(R+2)),M.clone().sub(x).cross(E.clone().sub(x)).dot(x.add(M).add(E))<0){const S=_.getX(R+1);_.setX(R+1,_.getX(R+2)),_.setX(R+2,S)}}u.computeVertexNormals(),this.tyre=u,this.tyreMaterial=l;for(let y=0;y<4;y++){const _=new $t,x=new vt(u,l);x.castShadow=!0,_.add(x),this.group.add(_),this.wheels.push(_),this.spinners.push(x)}const d=new Mu,v=new mi(1,1);d.setIndex(v.index),d.setAttribute("position",v.getAttribute("position")),d.setAttribute("uv",v.getAttribute("uv"));const g=new Float32Array(wi*3),m=new Float32Array(wi*3).fill(1);d.setAttribute("aAt",new fi(g,3)),d.setAttribute("aLife",new fi(m,3)),d.instanceCount=wi;const p=new vt(d,new bn({transparent:!0,depthWrite:!1,vertexShader:`
        attribute vec3 aAt; attribute vec3 aLife; varying vec2 vUv; varying vec3 vLife;
        void main() {
          vUv = uv; vLife = aLife;
          float size = (0.35 + 1.9 * aLife.x) * (0.8 + 0.4 * aLife.y) * step(aLife.x, 0.999);
          vec4 mv = viewMatrix * vec4(aAt, 1.0);
          mv.xy += position.xy * size;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec2 vUv; varying vec3 vLife;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          float a = (1.0 - smoothstep(0.25, 1.0, r)) * smoothstep(0.0, 0.08, vLife.x) * (1.0 - vLife.x) * mix(0.32, 0.6, vLife.z);
          if (a < 0.004) discard;
          gl_FragColor = vec4(mix(vec3(0.74, 0.75, 0.76), vec3(0.05), vLife.z), a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}));p.frustumCulled=!1,p.name="smoke",this.loose.add(p),this.puffs={life:m,at:g,vel:new Float32Array(wi*3),geo:d,next:0,owed:0}}group=new $t;wheels=[];spinners=[];loose=new $t;lamps={uBrake:{value:0},uReverse:{value:0},uCrush:{value:new it},uWide:{value:1},uSoft:{value:0}};bodyMesh;tyre;tyreMaterial;skin=null;puffs;nose=new B;was=new B;patch=new B;rubber=[0,0,0,0];smoke(e,t){const n=e[Me.POWER],s=this.puffs,r=Math.min(1,Math.max(0,(.93-n)/.5));this.nose.set(0,.42,-this.shape.axleFront+.25).applyQuaternion(this.group.quaternion).add(this.group.position);const a=t>0?(this.nose.x-this.was.x)/t:0,o=t>0?(this.nose.y-this.was.y)/t:0,l=t>0?(this.nose.z-this.was.z)/t:0,c=Math.hypot(a,o,l)>120;this.was.copy(this.nose);for(let f=0;f<wi;f++){if(s.life[f*3]>=1)continue;s.life[f*3]=c?1:Math.min(1,s.life[f*3]+t/xg);const u=Math.exp(-2.5*t);s.vel[f*3]=s.vel[f*3]*u,s.vel[f*3+2]=s.vel[f*3+2]*u,s.at[f*3]=s.at[f*3]+s.vel[f*3]*t,s.at[f*3+1]=s.at[f*3+1]+s.vel[f*3+1]*t,s.at[f*3+2]=s.at[f*3+2]+s.vel[f*3+2]*t}const h=(f,u,d,v,g,m)=>{const p=s.next;s.next=(s.next+1)%wi,s.at[p*3]=f+(Math.random()-.5)*.5,s.at[p*3+1]=u,s.at[p*3+2]=d+(Math.random()-.5)*.5,s.vel[p*3]=a*v+(Math.random()-.5)*.6,s.vel[p*3+1]=g*(.6+Math.random()*.6),s.vel[p*3+2]=l*v+(Math.random()-.5)*.6,s.life[p*3]=.001,s.life[p*3+1]=Math.random(),s.life[p*3+2]=m};for(s.owed=r>0&&!c?s.owed+t*(2+16*r):0;s.owed>=1;)s.owed-=1,h(this.nose.x,this.nose.y,this.nose.z,.35,1.5,Math.min(1,r*1.6)*(.7+.3*Math.random()));for(let f=0;f<4;f++){const u=Me.WHEELS+f*Me.WHEEL_STRIDE,d=Math.abs(e[u+Me.W_SPIN]*this.shape.wheelRadius-e[Me.SPEED]),v=Math.abs(e[u+Me.W_SLIP_TAN])>.3?Math.abs(e[u+Me.W_SLIP_TAN])*Math.abs(e[Me.SPEED]):0,g=e[u+Me.W_GROUNDED]>.5?Math.max(d-4,v-4):0;if(this.rubber[f]=g>0&&!c?this.rubber[f]+t*Math.min(22,4+g*1.6):0,!(this.rubber[f]<1))for(this.patch.set(f%2===0?-this.shape.halfTrack:this.shape.halfTrack,-e[u+Me.W_LENGTH]-this.shape.wheelRadius+.1,f<2?-this.shape.axleFront:this.shape.axleRear).applyQuaternion(this.group.quaternion).add(this.group.position);this.rubber[f]>=1;)this.rubber[f]=this.rubber[f]-1,h(this.patch.x,this.patch.y,this.patch.z,.1,.9,0)}s.geo.getAttribute("aAt").needsUpdate=!0,s.geo.getAttribute("aLife").needsUpdate=!0}body(e,t){const n=this.shape,s=this.look,r=s.screenFoot,a=s.screenHead,o=s.backHead,l=s.backFoot,c=[];for(let C=-e;C<=e+1e-6;C+=e/18)c.push(C);const h=[],f=[],u=[],d=[],v=19,g=C=>Math.min(Math.abs(C+n.axleFront),Math.abs(C-n.axleRear)),m=C=>{const z=C/e,H=Math.abs(z),N=t*(.8+.2*Math.sqrt(Math.max(0,1-Math.pow(H,5))))*(1-.1*Wn(.82,1,H)),O=C<0?s.nose+(s.belt-s.nose)*Wn(-e,r,C):s.belt+.03*Wn(.3,.75,z)-.07*Wn(.86,1,z),P=C<a?Wn(r,a,C):C<o?1:1-Wn(o,l,C),U=.035*(1-Wn(.85,1,H)),A=O+U+(s.roof-O-U)*P*(1-.04*Wn(o-.6,o,C)),G=P>.02?1:0,k=N*(.93-.2*Math.min(1,P*1.6)),K=n.wheelRadius+Ah,ee=g(C),ue=-.37+.1*Wn(.86,1,H),Ee=ee<K?Math.max(ue,fc+Math.sqrt(K*K-ee*ee)):ue,he=Ee+.085,Y=Math.max(he+.04,O-.26),$=[[N*.8,Ee,0,1],[N*.965,he,0,1],[N,Y,0,0],[N*.99,O-.07,0,0],[N*.93,O,0,0],[k+(N*.93-k)*.42,O+(A-O)*.5,.5,0],[k,A-(A-O)*.06,.94,0],[k*.72,A,1,0],[k*.36,A+U*.5,1,0]],oe=[],Se=[],we=[0,0,0,0,0,0,1,.5,.15];oe.push([0,Ee]),Se.push([0,0,G,1]),$.forEach(([ze,L,be,ae],re)=>{oe.push([ze,L]),Se.push([be,we[re],G,ae])}),oe.push([0,A+U*.6]),Se.push([1,0,G,0]);for(let ze=$.length-1;ze>=0;ze--){const[L,be,ae,re]=$[ze];oe.push([-L,be]),Se.push([ae,we[ze],G,re])}const Ce=[(C-r)/(a-r),(C-o)/(l-o),0,e];return{p:oe,a:Se,b:Ce}},p=c.map(m);p.forEach((C,z)=>{const H=c[z];C.p.forEach(([N,O],P)=>{h.push(N,O,H),f.push(...C.a[P]),u.push(C.b[0],C.b[1],Math.hypot(g(H),O-fc)-n.wheelRadius,C.b[3])})});const y=(C,z)=>C*(v+1)+(z%(v+1)+(v+1))%(v+1);if(p[0].p.length!==v+1)throw new Error("the car body ring has changed its count");const _=new B,x=new B,M=new B,E=new B,R=new B,F=(C,z,H,N,O,P)=>{x.fromArray(h,C*3),M.fromArray(h,z*3),E.fromArray(h,H*3),R.subVectors(M,x).cross(E.clone().sub(x)),!(R.lengthSq()<1e-12)&&(_.copy(x).add(M).add(E).multiplyScalar(1/3),R.dot(_.sub(new B(N,O,P)))>=0?d.push(C,z,H):d.push(C,H,z))};for(let C=0;C+1<p.length;C++){const z=(c[C]+c[C+1])/2;for(let H=0;H<=v;H++){const N=y(C,H),O=y(C,H+1),P=y(C+1,H+1),U=y(C+1,H);F(N,O,P,0,.1,z),F(N,P,U,0,.1,z)}}for(const C of[0,p.length-1]){const z=c[C],H=C===0?z+1:z-1,N=h.length/3,O=p[C].p.map(A=>A[1]),P=(Math.min(...O)+Math.max(...O))/2;h.push(0,P,z),f.push(0,0,0,0),u.push(9,9,9,e);const U=h.length/3;p[C].p.forEach(([A,G],k)=>{h.push(A,G,z),f.push(0,0,0,p[C].a[k][3]),u.push(9,9,9,e)});for(let A=0;A<=v;A++)F(N,U+A,U+(A+1)%(v+1),0,P,H)}const S=C=>{const z=C*(t+.07),H=s.belt+.04,N=r+.42,O=.085,P=.05,U=.07,A=h.length/3;for(const k of[-1,1])for(const K of[-1,1])for(const ee of[-1,1])h.push(z+k*O,H+K*P,N+ee*U*(K>0?.7:1)),f.push(0,0,0,1),u.push(9,9,9,e);const G=(k,K,ee,ue)=>{F(A+k,A+K,A+ee,z,H,N),F(A+k,A+ee,A+ue,z,H,N)};G(0,1,3,2),G(4,5,7,6),G(0,1,5,4),G(2,3,7,6),G(0,2,6,4),G(1,3,7,5)};S(-1),S(1);const w=new Mt;return w.setAttribute("position",new tt(h,3)),w.setAttribute("carA",new tt(f,4)),w.setAttribute("carB",new tt(u,4)),w.setIndex(d),w.computeVertexNormals(),w.computeBoundingSphere(),w}useSoft(e){this.skin?.dispose(),this.skin=e?new vg(this.bodyMesh,e,this.group,this.loose,this.tyre,this.tyreMaterial):null,this.lamps.uSoft.value=e?1:0}soft(e,t,n){this.skin&&e.length&&this.skin.apply(e,t,n)}splash(e){const t=this.puffs,n=Math.min(1,e/25),s=Math.round(14+26*n);for(let r=0;r<s;r++){const a=t.next;t.next=(t.next+1)%wi;const o=Math.random()*Math.PI*2,l=.8+Math.random()*1.6,c=1.5+Math.random()*(3+6*n);t.at[a*3]=this.group.position.x+Math.cos(o)*l,t.at[a*3+1]=this.group.position.y+.2,t.at[a*3+2]=this.group.position.z+Math.sin(o)*l,t.vel[a*3]=Math.cos(o)*c,t.vel[a*3+1]=2.5+Math.random()*(3+5*n),t.vel[a*3+2]=Math.sin(o)*c,t.life[a*3]=.001,t.life[a*3+1]=Math.random(),t.life[a*3+2]=0}}update(e,t,n=0){this.group.position.set(e[Me.POS],e[Me.POS+1],e[Me.POS+2]),this.group.quaternion.set(e[Me.ROT],e[Me.ROT+1],e[Me.ROT+2],e[Me.ROT+3]).normalize();const s=this.shape,r=this.skin?Math.max(0,e[Me.WHEELS_OFF]):0;for(let a=0;a<4;a++){const o=Me.WHEELS+a*Me.WHEEL_STRIDE,l=this.wheels[a];l.visible=!(r>>a&1),l.position.set(a%2===0?-s.halfTrack:s.halfTrack,-e[o+Me.W_LENGTH],a<2?-s.axleFront:s.axleRear),l.rotation.y=-e[o+Me.W_STEER],this.spinners[a].rotation.x=-e[o+Me.W_ANGLE]}this.lamps.uBrake.value=t?1:0,this.lamps.uReverse.value=e[Me.GEAR]<0?1:0,this.lamps.uCrush.value.set(e[Me.CRUSH],e[Me.CRUSH+1],e[Me.CRUSH+2],e[Me.CRUSH+3]),this.smoke(e,n)}}const Cg=[ol,{name:"Pico",paint:14263572,screenFoot:-.78,screenHead:-.18,backHead:1.22,backFoot:1.78,nose:.2,belt:.42,roof:.915},{name:"Brannan",paint:12734476,screenFoot:-.5,screenHead:.22,backHead:.98,backFoot:1.85,nose:.2,belt:.41,roof:.815},{name:"Tamalpais",paint:1395358,screenFoot:-.8,screenHead:-.08,backHead:.9,backFoot:1.62,nose:.16,belt:.41,roof:.895},{name:"Hauler",paint:14605008,screenFoot:-2,screenHead:-1.5,backHead:2.38,backFoot:2.5,nose:.6,belt:.72,roof:1.565,glassTo:-.75}],Lg=i=>Cg.find(e=>e.name===i)??{...ol,name:i};class Pg{nx;nz;cell;x0;z0;h;constructor(e){const t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint32(4,!0);if(t.getUint32(0,!0)!==1464873552||n<1||n>5)throw new Error(`not a world file this build reads (version ${n})`);this.nx=t.getUint32(8,!0),this.nz=t.getUint32(12,!0),this.cell=t.getFloat32(16,!0),this.x0=t.getFloat32(20,!0),this.z0=t.getFloat32(24,!0);const s=t.getFloat32(28,!0);this.h=new Float32Array(this.nx*this.nz);for(let r=0;r<this.h.length;r++)this.h[r]=s+t.getInt16(32+r*2,!0)*.01}ways=[];setWays(e){this.ways=e}onWay(e,t,n,s){const r=e.p[t],a=e.p[t+1],o=a[0]-r[0],l=a[2]-r[2],c=o*o+l*l;if(c<1e-6)return null;const h=Math.sqrt(c),f=((n-r[0])*o+(s-r[2])*l)/c,u=.8/h;if(f<(t===0?0:-u)||f>(t+2===e.p.length?1:1+u))return null;const d=r[0]+o*f-n,v=r[2]+l*f-s;if(d*d+v*v>e.half*e.half)return null;const g=Math.min(1,Math.max(0,f));return r[1]+(a[1]-r[1])*g}surface(e,t,n){const s=this.at(e,t),r=n+.35;let a=-1/0,o=!1;for(const l of this.ways)for(let c=0;c+1<l.p.length;c++){const h=this.onWay(l,c,e,t);h!==null&&(l.k==="tunnel"&&n<h+(l.clear??5.6)&&(o=!0),h<=r&&h>a&&(a=h))}return!o&&s<=r&&s>a&&(a=s),a===-1/0?s:a}tunnel(e,t,n){for(const s of this.ways)if(s.k==="tunnel")for(let r=0;r+1<s.p.length;r++){const a=this.onWay(s,r,e,n);if(a!==null&&t>a-2&&t<a+(s.clear??5.6)+.5)return{floor:a,roof:a+(s.clear??5.6),way:s,si:r}}return null}deckOver(e,t,n){let s=1/0;for(const r of this.ways)if(r.k==="deck")for(let a=0;a+1<r.p.length;a++){const o=this.onWay(r,a,e,t);o!==null&&o-1.2>n&&o-1.2<s&&(s=o-1.2)}return s}at(e,t){const n=Math.min(this.nx-1.001,Math.max(0,(e-this.x0)/this.cell)),s=Math.min(this.nz-1.001,Math.max(0,(t-this.z0)/this.cell)),r=Math.floor(n),a=Math.floor(s),o=n-r,l=s-a,c=a*this.nx+r,h=this.h;return(h[c]*(1-o)+h[c+1]*o)*(1-l)+(h[c+this.nx]*(1-o)+h[c+this.nx+1]*o)*l}}async function Dg(i){const e=await fetch(i);if(!e.ok)throw new Error(`${i}: ${e.status}`);return new Uint8Array(await e.arrayBuffer())}const Ig=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Ug=`
  uniform sampler2D tSrc; uniform vec2 texel; uniform float knee;
  varying vec2 vUv;
  vec3 tap(vec2 o) {
    vec3 c = texture2D(tSrc, vUv + o * texel).rgb;
    // the first step keeps only what is brighter than paper in the sun, softly
    float l = max(c.r, max(c.g, c.b));
    return knee > 0.0 ? c * smoothstep(knee * 0.7, knee * 2.2, l) : c;
  }
  void main() {
    vec3 c = tap(vec2(0.0)) * 0.25;
    c += (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0))) * 0.125;
    c += (tap(vec2(-2.0, 0.0)) + tap(vec2(2.0, 0.0)) + tap(vec2(0.0, -2.0)) + tap(vec2(0.0, 2.0))) * 0.0625;
    gl_FragColor = vec4(min(c, vec3(24.0)), 1.0);
  }`,Fg=`
  uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 texel;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tSrc, vUv).rgb * 0.25;
    c += (texture2D(tSrc, vUv + vec2(texel.x, 0.0)).rgb + texture2D(tSrc, vUv - vec2(texel.x, 0.0)).rgb + texture2D(tSrc, vUv + vec2(0.0, texel.y)).rgb + texture2D(tSrc, vUv - vec2(0.0, texel.y)).rgb) * 0.125;
    c += (texture2D(tSrc, vUv + texel).rgb + texture2D(tSrc, vUv - texel).rgb + texture2D(tSrc, vUv + vec2(texel.x, -texel.y)).rgb + texture2D(tSrc, vUv + vec2(-texel.x, texel.y)).rgb) * 0.0625;
    gl_FragColor = vec4(c + texture2D(tAdd, vUv).rgb, 1.0);
  }`,Ng=`
  uniform sampler2D tScene; uniform sampler2D tBloom; uniform sampler2D tDepth;
  uniform float bloom; uniform float exposure; uniform float time; uniform vec2 size;
  uniform float ao; uniform vec2 nearFar;
  varying vec2 vUv;
  vec3 RRTAndODTFit(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
  vec3 aces(vec3 color) {
    const mat3 inM = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
    const mat3 outM = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
    color *= exposure / 0.6;
    color = inM * color; color = RRTAndODTFit(color); color = outM * color;
    return clamp(color, 0.0, 1.0);
  }
  float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  #ifdef USE_AO
  float eyeZ(vec2 uv) { float d = texture2D(tDepth, uv).x; float z = d * 2.0 - 1.0; return 2.0 * nearFar.x * nearFar.y / (nearFar.y + nearFar.x - z * (nearFar.y - nearFar.x)); }
  // Darkening in creases, from depth alone: how much of a small ring round
  // the pixel is nearer the eye than the pixel's own plane says it should be.
  float crease() {
    float z = eyeZ(vUv);
    if (z > 260.0) return 1.0;
    vec2 px = 1.0 / size;
    float zx = eyeZ(vUv + vec2(px.x, 0.0)) - z, zy = eyeZ(vUv + vec2(0.0, px.y)) - z;
    float zx2 = z - eyeZ(vUv - vec2(px.x, 0.0)), zy2 = z - eyeZ(vUv - vec2(0.0, px.y));
    if (abs(zx2) < abs(zx)) zx = zx2;
    if (abs(zy2) < abs(zy)) zy = zy2;
    float radius = clamp(size.y * 0.55 / z, 3.0, 42.0); // about half a metre on screen
    float turn = hash(gl_FragCoord.xy) * 6.2832, occ = 0.0;
    for (int i = 0; i < 8; i++) {
      float a = turn + float(i) * 2.3999, r = radius * sqrt((float(i) + 0.5) / 8.0);
      vec2 o = vec2(cos(a), sin(a)) * r;
      float want = z + zx * o.x + zy * o.y, got = eyeZ(vUv + o * px);
      float d = want - got;
      occ += smoothstep(0.03, 0.25, d) * (1.0 - smoothstep(0.6, 1.6, d));
    }
    return 1.0 - ao * occ / 8.0;
  }
  #endif
  void main() {
    vec3 c = texture2D(tScene, vUv).rgb;
    #ifdef USE_AO
      c *= crease();
    #endif
    c += texture2D(tBloom, vUv).rgb * bloom;
    vec2 q = vUv - 0.5;
    c *= 1.0 - dot(q, q) * 0.55;                       // the lens falls off toward its corners
    c = aces(c);
    // the grade: a film's toe, shadows pulled a little toward blue, lights toward the sun, more colour in the middle
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c = mix(vec3(l), c, 1.16);
    c *= mix(vec3(0.95, 0.99, 1.06), vec3(1.05, 1.0, 0.94), smoothstep(0.08, 0.75, l));
    c = c * c * (3.0 - 2.0 * c) * 0.35 + c * 0.65;      // a little more contrast about the middle
    c = max(c, 0.0);
    c = mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
    c += (hash(gl_FragCoord.xy + fract(time) * 61.0) - 0.5) / 255.0 * 2.0; // grain, and the end of banding in the sky
    gl_FragColor = vec4(c, 1.0);
  }`;class pc{constructor(e,t,n){this.renderer=e,this.quality=t;const s=t==="high";this.target=new Yn(4,4,{type:Di,samples:n,depthBuffer:!0}),s&&(this.target.depthTexture=new Jo(4,4),this.target.depthTexture.type=di);const r=()=>new Yn(4,4,{type:Di,depthBuffer:!1,minFilter:un,magFilter:un});for(let l=0;l<3;l++)this.mips.push(r());for(let l=0;l<2;l++)this.ups.push(r());const a=(l,c,h={})=>new bn({vertexShader:Ig,fragmentShader:l,uniforms:c,defines:h,depthTest:!1,depthWrite:!1,toneMapped:!1});this.down=a(Ug,{tSrc:{value:null},texel:{value:new Ve},knee:{value:0}}),this.up=a(Fg,{tSrc:{value:null},tAdd:{value:null},texel:{value:new Ve}}),this.final=a(Ng,{tScene:{value:this.target.texture},tBloom:{value:null},tDepth:{value:this.target.depthTexture??null},bloom:{value:t==="high"?.085:.07},exposure:{value:1},time:{value:0},size:{value:new Ve},ao:{value:.75},nearFar:{value:new Ve(.3,6e3)}},s?{USE_AO:""}:{});const o=new Mt;o.setAttribute("position",new tt([-1,-1,0,3,-1,0,-1,3,0],3)),o.setAttribute("uv",new tt([0,0,2,0,0,2],2)),this.quad=new vt(o,this.down),this.quad.frustumCulled=!1,this.scene.add(this.quad)}scene=new Po;camera=new il(-1,1,1,-1,0,1);quad;target;mips=[];ups=[];down;up;final;size=new Ve;frame=0;static samples(e){if(!e.capabilities.isWebGL2)return-1;const t=e.getContext();if(!(t.getExtension("EXT_color_buffer_half_float")||t.getExtension("EXT_color_buffer_float")))return-1;const n=a=>{const o=t.createFramebuffer(),l=t.createRenderbuffer(),c=t.createTexture();t.bindFramebuffer(t.FRAMEBUFFER,o),a?(t.bindRenderbuffer(t.RENDERBUFFER,l),t.renderbufferStorageMultisample(t.RENDERBUFFER,4,t.RGBA16F,8,8),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,l)):(t.bindTexture(t.TEXTURE_2D,c),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,8,8,0,t.RGBA,t.HALF_FLOAT,null),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,c,0));const h=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE&&t.getError()===t.NO_ERROR;return t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.bindTexture(t.TEXTURE_2D,null),t.deleteFramebuffer(o),t.deleteRenderbuffer(l),t.deleteTexture(c),h};for(;t.getError()!==t.NO_ERROR;);const s=n(!1),r=s&&n(!0);return e.resetState(),s?r?4:0:-1}fit(){const e=this.renderer.getDrawingBufferSize(new Ve);if(e.equals(this.size))return;this.size.copy(e),this.target.setSize(e.x,e.y);let t=e.x,n=e.y;this.mips.forEach((s,r)=>{const a=r===0?4:2;t=Math.max(2,Math.round(t/a)),n=Math.max(2,Math.round(n/a)),s.setSize(t,n)}),this.ups[0].setSize(this.mips[1].width,this.mips[1].height),this.ups[1].setSize(this.mips[0].width,this.mips[0].height),this.final.uniforms.size.value.copy(e)}pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera)}render(e,t){this.fit();const n=this.renderer;n.setRenderTarget(this.target),n.render(e,t);const s=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1;const r=this.down.uniforms,a=this.up.uniforms;let o=this.target.texture,l=this.size.x,c=this.size.y;this.mips.forEach((f,u)=>{r.tSrc.value=o,r.texel.value.set(1/l,1/c).multiplyScalar(u===0?2:1),r.knee.value=u===0?1:0,this.pass(this.down,f),o=f.texture,l=f.width,c=f.height}),a.tSrc.value=this.mips[2].texture,a.tAdd.value=this.mips[1].texture,a.texel.value.set(1/this.mips[2].width,1/this.mips[2].height),this.pass(this.up,this.ups[0]),a.tSrc.value=this.ups[0].texture,a.tAdd.value=this.mips[0].texture,a.texel.value.set(1/this.ups[0].width,1/this.ups[0].height),this.pass(this.up,this.ups[1]);const h=this.final.uniforms;h.tBloom.value=this.ups[1].texture,h.exposure.value=n.toneMappingExposure,h.time.value=this.frame++%240/240,h.nearFar.value.set(t.near,t.far),this.pass(this.final,null),n.shadowMap.autoUpdate=s}get name(){return this.quality}}function zg(i){const e=i.has("test"),t=i.get("q"),n=t==="low"||t==="high"?t:"mid";return hg(n),{dpr:Math.min(Number(i.get("dpr")??(e?1:n==="low"?1.5:2)),window.devicePixelRatio||1),shadows:i.get("shadows")?i.get("shadows")!=="0":!e,far:Number(i.get("far")??1200),quality:n}}const Og=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,kg=`
  uniform float eyeY;
  varying vec3 vDir;
  ${Ni}
  // one rise on the horizon: bearing (radians east of north), half width, metres high, metres away
  float hill(float az, float at, float wide, float high, float away) {
    float d = az - at; d -= 6.2831853 * floor(d / 6.2831853 + 0.5);
    float t = d / wide;
    return (high * exp(-t * t) - eyeY) / away;
  }
  void main() {
    vec3 d = normalize(vDir);
    vec3 col = p2pSky(d);
    float toSun = max(dot(d, P2P_SUN), 0.0);
    col += vec3(1.0, 0.86, 0.62) * smoothstep(0.99990, 0.99996, toSun) * 14.0;

    #ifdef CLOUDS
    // high cloud: streaks on a plane far overhead, thinning toward the horizon's haze
    vec2 p = d.xz / (max(d.y, 0.0) + 0.16);
    float streak = p2pFbm(p * vec2(0.55, 1.5) + vec2(3.1, 0.0));
    float fine = p2pFbm(p * vec2(2.3, 5.1) + streak * 1.7);
    float cirrus = smoothstep(0.50, 0.86, streak * 0.72 + fine * 0.40) * smoothstep(0.02, 0.22, d.y);
    vec3 lit = mix(vec3(0.92, 0.94, 0.98), vec3(1.25, 1.05, 0.82), pow(toSun, 2.0));
    col = mix(col, lit, cirrus * 0.50);
    #endif

    float az = atan(d.x, -d.z);
    // the far shore and the city's own hills, lost in the same air as everything else
    float rise = -1.0;
    rise = max(rise, hill(az, 1.15, 0.85, 480.0, 17000.0) + 0.004 * p2pNoise(vec2(az * 23.0, 1.0)));   // the East Bay hills
    rise = max(rise, hill(az, 1.72, 0.085, 105.0, 4300.0));    // Yerba Buena Island
    rise = max(rise, hill(az, -0.62, 0.40, 700.0, 19000.0) + 0.003 * p2pNoise(vec2(az * 31.0, 2.0)));  // Marin, Mount Tamalpais
    rise = max(rise, hill(az, -0.08, 0.10, 235.0, 7500.0));    // Angel Island
    rise = max(rise, hill(az, -2.27, 0.22, 270.0, 5800.0) + 0.004 * p2pNoise(vec2(az * 40.0, 3.0)));   // Twin Peaks
    rise = max(rise, hill(az, 3.05, 0.30, 400.0, 10500.0));    // San Bruno Mountain
    rise = max(rise, hill(az, 2.72, 0.16, 95.0, 4200.0));      // Potrero Hill
    float land = smoothstep(rise + 0.0012, rise - 0.0012, d.y);
    vec3 far = mix(p2pHaze(d), vec3(0.24, 0.30, 0.36), 0.42);
    col = mix(col, far, land * step(-0.02, rise));

    #ifdef CLOUDS
    // the marine layer: a bank lying on the horizon from the south-west round to the Golden Gate
    float west = smoothstep(-0.25, 0.65, dot(normalize(d.xz + vec2(1e-5)), normalize(vec2(-1.0, -0.45))));
    float top = 0.030 + 0.050 * p2pFbm(vec2(az * 3.1, 0.5)) * west;
    float bank = smoothstep(top, top * 0.35, d.y) * west;
    vec3 fogLit = mix(vec3(0.80, 0.84, 0.90), vec3(1.30, 1.08, 0.86), pow(toSun, 3.0));
    col = mix(col, fogLit, bank * 0.88);
    #endif

    // under the horizon there is only the air: the sea and the far ground fade to this
    col = mix(col, p2pHaze(d), smoothstep(0.0, -0.012, d.y));
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,mc=7e3;class Bg{constructor(e,t){this.knobs=t,fg(),bh.far=t.far;const n=t.quality;if(this.renderer=new rg({canvas:e,antialias:n==="low",powerPreference:"high-performance"}),this.renderer.setPixelRatio(t.dpr),this.renderer.outputColorSpace=Jt,this.renderer.toneMapping=Xc,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=t.shadows,this.renderer.shadowMap.type=Wc,this.renderer.info.autoReset=!1,n!=="low"){const c=pc.samples(this.renderer);c>=0&&(this.post=new pc(this.renderer,n,c))}const s=new bn({vertexShader:Og,fragmentShader:kg,side:Qt,depthWrite:!1,fog:!1,uniforms:{eyeY:{value:0}},defines:{CLOUDS:""}});this.skyUniforms=s.uniforms,this.sky=new vt(new el(1,32,16),s),this.sky.frustumCulled=!1,this.sky.renderOrder=-1;const r=new Uo(this.renderer),a=new Po;a.add(this.sky),this.reflections=r.fromScene(a,0,.1,10).texture,r.dispose(),this.sky.scale.setScalar(mc*.9),this.scene.add(this.sky),this.scene.fog=new Zo(10466511,1/(t.far*1.4)),this.scene.add(new vu(12899306,11771271,2.9)),this.square=n==="low"?260:210,this.mapSize=n==="low"?1024:2048,this.sun.castShadow=t.shadows,this.sun.shadow.mapSize.set(this.mapSize,this.mapSize);const o=this.sun.shadow.camera,l=this.square/2;o.left=-l,o.right=l,o.top=l,o.bottom=-l,o.near=10,o.far=760,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.45,this.sun.shadow.radius=1.6,this.scene.add(this.sun,this.sun.target)}renderer;scene=new Po;sun=new yu(16767405,4.3);reflections;sky;skyUniforms;post=null;ahead=new B;square;mapSize;resize(e){const t=window.innerWidth,n=window.innerHeight;this.renderer.setSize(t,n,!1),e.aspect=t/n,e.far=mc,e.updateProjectionMatrix()}follow(e,t){this.sky.position.copy(t),this.skyUniforms.eyeY.value=t.y,this.ahead.set(e.x-t.x,0,e.z-t.z);const n=this.ahead.length();n>.5?this.ahead.multiplyScalar(this.square*.3/n):this.ahead.set(0,0,0);const s=this.square/this.mapSize,r=Math.round((e.x+this.ahead.x)/s)*s,a=Math.round((e.z+this.ahead.z)/s)*s;this.sun.target.position.set(r,e.y,a),this.sun.position.copy(this.sun.target.position).addScaledVector(li,380),this.sun.target.updateMatrixWorld()}draw(e){this.renderer.info.reset();for(const t of this.scene.children)t.userData.tend?.(e.position);this.post?this.post.render(this.scene,e):this.renderer.render(this.scene,e)}}const as=`?v=${encodeURIComponent("05d104c 2026-11-20 19:46Z".split(" ")[0])}`,gc={canon:[.075,.15,.034],pull:.65,soft:!0,second:[.19,.145,.095],patch:.8,patchSize:4.8,patchAt:.8,fine:[24,24],fineAmp:.8,mid:5,midAmp:.55,lean:[1.25,1,.5],coarse:.24,stain:[1.1,1.05,.86]},vc={canon:[.175,.175,.18],pull:.62,second:[.12,.12,.125],patch:.7,patchSize:9,patchAt:.66,fine:[11,11],fineAmp:.3,mid:2,midAmp:.12,coarse:.14,stain:[.88,.88,.88],crack:.5,gloss:.4},Ra=[{canon:[0,0,0],pull:0,fine:[1,1],fineAmp:0,mid:1,midAmp:0,coarse:0,stain:[1,1,1]},gc,{canon:[.045,.085,.03],pull:.55,soft:!0,second:[.105,.075,.05],patch:.9,patchSize:1.8,patchAt:.6,fine:[41,41],fineAmp:.5,mid:13,midAmp:.7,lean:[.9,1,.7],coarse:.5,stain:[1.25,1.1,.8]},{canon:[.5,.41,.27],pull:.65,soft:!0,second:[.36,.29,.19],patch:.5,patchSize:3,patchAt:.62,fine:[19,19],fineAmp:.34,mid:3.1,midAmp:.34,coarse:.2,stain:[.85,.85,.85]},{canon:[.2,.155,.1],pull:.6,soft:!0,second:[.085,.13,.04],patch:.7,patchSize:2.2,patchAt:.6,fine:[43,43],fineAmp:.4,mid:9,midAmp:.35,coarse:.25,stain:[.8,.8,.8]},{canon:[.2,.195,.185],pull:.7,second:[.12,.12,.11],patch:.5,patchSize:1.5,patchAt:.6,fine:[17,17],fineAmp:.4,mid:3.3,midAmp:.3,coarse:.3,stain:[.8,.8,.8],cell:[.9,.6],stagger:1,tone:.8,joint:.03,jointDark:.6,crown:.3},{canon:[.07,.36,.44],pull:.9,fine:[1,1],fineAmp:0,mid:2.1,midAmp:.5,coarse:.1,stain:[1,1,1],gloss:1,cell:[.25,.25],joint:.006,jointDark:.2},{canon:[.37,.35,.31],pull:.6,second:[.2,.16,.11],patch:.45,patchSize:1.4,patchAt:.64,fine:[9,9],fineAmp:.24,mid:31,midAmp:.2,coarse:.18,stain:[.8,.8,.78],crack:.5,gloss:.18},vc,{canon:[0,0,0],pull:0,fine:[21,21],fineAmp:.14,mid:3,midAmp:.06,coarse:.1,stain:[.92,.92,.92],crack:.25,gloss:.3},{canon:[.42,.4,.355],pull:.6,second:[.24,.22,.19],patch:.4,patchSize:2.5,patchAt:.72,fine:[9,9],fineAmp:.22,mid:3,midAmp:.1,coarse:.11,stain:[.86,.85,.82],crack:.4,gloss:.22,cell:[1.83,1.83],tone:.2,joint:.009,jointDark:.45},{canon:[.36,.33,.29],pull:.42,second:[.24,.22,.2],patch:.35,patchSize:3,patchAt:.72,fine:[14,14],fineAmp:.2,mid:3,midAmp:.1,coarse:.14,stain:[.84,.84,.84],gloss:.3,cell:[.6,.3],stagger:.5,tone:.25,joint:.006,jointDark:.5},{...vc,second:[.09,.09,.095],patch:.5,patchSize:1.4,patchAt:.74,cell:[2.6,17],joint:.05,jointDark:-.9,gate:5.2/17},{canon:[.21,.145,.1],pull:.7,second:[.12,.09,.07],patch:.5,patchSize:4,patchAt:.62,fine:[2.2,85],fineAmp:.34,mid:6,midAmp:.1,coarse:.1,stain:[.78,.78,.76],gloss:.12,cell:[4.2,.19],stagger:1,tone:.42,joint:.005,jointDark:.8,crown:.3},{...gc,patch:0,stain:[1.1,1.05,.9],cell:[6,4e3],tone:.12}],Mn={turned:30,steps:45,firstTurnedRow:10,deckRow:13,shoreRow:5},Ca=8;function Hg(){const i=new Float32Array(Ra.length*Ca*4);Ra.forEach((t,n)=>{const s=t.cell??[1,1];i.set([...t.canon,t.pull+(t.soft?2:0),...t.second??[0,0,0],t.patch??0,...t.fine,t.fineAmp,1/(t.patchSize??1),t.mid,t.midAmp,t.coarse,t.patchAt??2,...t.lean??[1,1,1],t.gloss??0,...t.stain,t.crack??0,...s,t.stagger??0,t.tone??0,t.joint??.001,t.jointDark??0,t.gate??1,t.crown??0],n*Ca*4)});const e=new Gr(i,Ca,Ra.length,dn,Pn);return e.minFilter=e.magFilter=Yt,e.generateMipmaps=!1,e.colorSpace=Cn,e.needsUpdate=!0,e}const Gg=`
  uniform sampler2D uKinds, uLooks; uniform vec4 uKindsBox; uniform vec2 uKindsSize; uniform float uKindsOn, uSea, uFlat;
  float p2pFade(float fw, float a, float b) { return 1.0 - smoothstep(a, b, fw); }
  // a byte of the mask: its row in the looks, and the angle it is laid at
  int p2pRow(float id) { return id >= ${Mn.turned}.0 ? ${Mn.firstTurnedRow} + int((id - ${Mn.turned}.0) / ${Mn.steps}.0) : min(int(id), ${Mn.firstTurnedRow-1}); }
  float p2pAngle(float id) {
    float o = max(id - ${Mn.turned}.0, 0.0), slot = floor(o / ${Mn.steps}.0);
    return (o - slot * ${Mn.steps}.0) / ${Mn.steps}.0 * (slot < 1.5 ? 1.5707963 : 3.1415927);
  }
  float p2pKind(ivec2 i) { return floor(texelFetch(uKinds, i, 0).r * 255.0 + 0.5); }
  vec4 p2pLook(int column, int row) { return texelFetch(uLooks, ivec2(column, row), 0); }
`,Vg=(i,e,t)=>`
  float p2pWet = 0.0;
  {
    vec2 w = vWorld.xz;
    vec2 dwx = dFdx(w), dwy = dFdy(w);
    float fw = max(abs(dwx.x) + abs(dwy.x), abs(dwx.y) + abs(dwy.y));   // metres a pixel, the longer way
    // A pixel on the ground is long and thin seen low. Lines fade by its long side, or they crawl; grain fades by the
    // side of the square of the same area, or seen from a seat the ground has no grain past a few metres.
    float fg = sqrt(abs(dwx.x * dwy.y - dwx.y * dwy.x)), foot = fg * uKindsBox.z;   // foot: in texels of the mask
    float grainFine = p2pNoise(w * 5.0) - 0.5, grainCoarse = p2pNoise(w * 0.9 + 17.0) - 0.5;
    float fadeCoarse = p2pFade(fw, 0.3, 0.8);
    // the photograph, some of the glare of its higher sun taken out, with the two grains the ground always had: what the ground is far off
    vec3 photo = pow(diffuseColor.rgb, vec3(1.12)) * 0.92;
    vec3 far = photo * (1.0 + (grainFine * p2pFade(fw, 0.025, 0.09) * 0.22 + grainCoarse * fadeCoarse * 0.16) / 0.92);
    vec2 kt = (w - uKindsBox.xy) * uKindsBox.zw;                         // where this is in the mask, in texels
    float inMask = step(0.0, kt.x) * step(kt.x, uKindsSize.x) * step(0.0, kt.y) * step(kt.y, uKindsSize.y) * uKindsOn;
    ivec2 top = ivec2(uKindsSize) - 1;
    // The mask is kinds, not colours: it cannot be averaged. Past a few texels a pixel it is not read, and the ground is the photograph, which can.
    ${i?`
    float valid = p2pFade(foot, 2.0, 6.0) * inMask;
    vec2 t = kt - 0.5, tf = fract(t);
    ivec2 i0 = clamp(ivec2(floor(t)), ivec2(0), top), i1 = min(i0 + 1, top);
    vec4 k = vec4(p2pKind(i0), p2pKind(ivec2(i1.x, i0.y)), p2pKind(ivec2(i0.x, i1.y)), p2pKind(i1));
    ivec4 rows = ivec4(p2pRow(k.x), p2pRow(k.y), p2pRow(k.z), p2pRow(k.w));
    vec4 b0 = p2pLook(0, rows.x), b1 = p2pLook(0, rows.y), b2 = p2pLook(0, rows.z), b3 = p2pLook(0, rows.w);
    vec4 soft = step(1.5, vec4(b0.a, b1.a, b2.a, b3.a));
    vec4 wt = vec4((1.0 - tf.x) * (1.0 - tf.y), tf.x * (1.0 - tf.y), (1.0 - tf.x) * tf.y, tf.x * tf.y);
    // What is built ends in a line. What is grown or strewn does not: its texels weigh more or less by the
    // ground's two grains, so its edge wanders a third of a metre either way.
    wt *= mix(vec4(1.0), vec4(exp2(grainCoarse * 3.2 + grainFine * 1.6)), soft * p2pFade(fw, 0.3, 1.0));
    // each texel's kind's whole weight; a power of it draws the edge in
    vec4 whole = vec4(dot(wt, vec4(equal(k, k.xxxx))), dot(wt, vec4(equal(k, k.yyyy))), dot(wt, vec4(equal(k, k.zzzz))), dot(wt, vec4(equal(k, k.wwww))));
    vec4 share = wt * pow(max(whole, vec4(1e-4)), vec4(clamp(0.5 / max(foot, 0.01), 1.0, 9.0) - 1.0));
    share /= share.x + share.y + share.z + share.w;
    // the surface is the kind's that has most of the point; the colour is every kind's that has any
    float id = k.x, most = whole.x;
    if (whole.y > most) { id = k.y; most = whole.y; }
    if (whole.z > most) { id = k.z; most = whole.z; }
    if (whole.w > most) { id = k.w; most = whole.w; }
    vec4 base = b0 * share.x + b1 * share.y + b2 * share.z + b3 * share.w;
    base.a -= 2.0 * dot(soft, share);
    float none = dot(share, vec4(equal(rows, ivec4(0))));
    float deck = dot(share, vec4(equal(rows, ivec4(${Mn.deckRow}))));
    #ifdef USE_MAP
      vec3 low = pow(texture2D(map, vMapUv, 3.0).rgb, vec3(1.12)) * 0.92;   // three levels down, about 13 m: its parked cars and its own shadows are gone
    #else
      vec3 low = photo;
    #endif
    `:`
    float valid = p2pFade(fw * uKindsBox.z, 1.0, 3.0) * inMask;
    float id = p2pKind(clamp(ivec2(floor(kt)), ivec2(0), top));
    vec4 base = p2pLook(0, p2pRow(id));
    base.a -= 2.0 * step(1.5, base.a);
    float none = float(id < 0.5), deck = float(p2pRow(id) == ${Mn.deckRow});
    vec3 low = photo;
    `}
    int row = p2pRow(id);
    vec4 grain = p2pLook(2, row), sizes = p2pLook(3, row), lean = p2pLook(4, row), unit = p2pLook(6, row), joint = p2pLook(7, row);
    float angle = p2pAngle(id), cs = cos(angle), sn = sin(angle);
    vec2 q = vec2(w.x * cs + w.y * sn, -w.x * sn + w.y * cs);
    vec2 wl = w - floor(w / 48.0) * 48.0;   // the same place counted from near by: fine grain loses its precision a kilometre from the origin
    float fmax = max(grain.x, grain.y);
    vec2 ql = vec2(wl.x * cs + wl.y * sn, -wl.x * sn + wl.y * cs);
    float fineN = p2pNoise(ql * grain.xy) - 0.5;
    ${e?`
    // once more, three times finer: blades, grit, the pores of a board. Seen only within a couple of metres.
    fineN = fineN * p2pFade(fg, 0.5 / fmax, 1.2 / fmax) + (p2pNoise(ql * grain.xy * 3.1 + 19.0) - 0.5) * 0.7 * p2pFade(fg, 0.16 / fmax, 0.39 / fmax);
    float fadeFine = 1.0;`:`
    float fadeFine = p2pFade(fg, 0.5 / fmax, 1.2 / fmax);`}
    vec3 c = mix(low, base.rgb, base.a);
    ${i?`
    vec4 second = p2pLook(1, row), stain = p2pLook(5, row);
    float midN = p2pNoise(w * sizes.x + 9.0), fadeMid = p2pFade(fg, 0.5 / sizes.x, 1.2 / sizes.x);
    float stainN = p2pNoise(w * 0.11 + 3.0) * 0.6 + p2pNoise(w * 0.37 + 7.0) * 0.4;
    c = mix(c, c * stain.rgb, smoothstep(0.50, 0.72, stainN));
    // patches of the second material, their edge ragged by the metre-sized mottle
    float patchN = p2pNoise(w * grain.w + 40.0) * 0.72 + (grainCoarse + 0.5) * 0.28;
    c = mix(c, second.rgb * (0.8 + 0.4 * mix(0.5, midN, fadeMid)), smoothstep(sizes.w, sizes.w + 0.12, patchN) * second.a);
    c *= 1.0 + (midN - 0.5) * sizes.y * lean.rgb * fadeMid;
    // a sealed crack runs where the stain's noise crosses a level
    c *= 1.0 - p2pLine(stainN - 0.43, 0.0025, fw * 0.25) * p2pFade(fw, 0.03, 0.09) * stain.a;
    `:`
    float midN = 0.5;
    `}
    c *= 1.0 + fineN * grain.z * fadeFine + grainCoarse * sizes.z * fadeCoarse;
    // laid in units: each its own tone, a joint between
    vec2 gp = q / unit.xy;
    gp.x += unit.z < 0.75 ? unit.z * mod(floor(gp.y), 2.0) : p2pHash1(floor(gp.y)) ;
    vec2 gf = fract(gp), gd = (0.5 - abs(gf - 0.5)) * unit.xy;
    float small = min(unit.x, unit.y), unitFade = p2pFade(fw, 0.2 * small, 0.7 * small);
    c *= 1.0 + (p2pHash(floor(gp)) - 0.5) * unit.w * p2pFade(fg, 0.3 * small, 0.9 * small);   // a unit's tone is grain, its joint a line
    float lines = max(p2pLine(gd.x, joint.x, fw) * p2pSpan(gd.y, -1.0, joint.z * unit.y, fw), p2pLine(gd.y, joint.x, fw)) * unitFade;
    c *= 1.0 - lines * max(joint.y, 0.0);
    c = mix(c, vec3(0.62, 0.62, 0.58), lines * max(-joint.y, 0.0) * smoothstep(0.2, 0.55, midN + 0.2));   // paint, worn
    c *= 1.0 + (gf.y - 0.5) * dot(vec2(-sn, cs), normalize(P2P_SUN.xz)) * joint.w * unitFade;            // a crowned unit is lit on the side toward the sun
    // the foot of the bank is wet and weedy
    float bank = float(row == ${Mn.shoreRow}), up = vWorld.y - uSea;
    c = mix(c, mix(c, vec3(0.05, 0.065, 0.03), 0.6 * (1.0 - smoothstep(0.45, 1.0, up))) * mix(0.5, 1.0, smoothstep(0.3, 0.9, up)), bank);
    c = mix(c, far, none);
    diffuseColor.rgb = mix(far, c, valid);
    p2pGloss = lean.a * valid * (1.0 - none);
    // Where the lidar read water the ground is the bay, whatever else it is taken for. But a pier the lidar missed lies at
    // the water's level too: near, the mask says where the deck is; far off, what is pale in the photograph is taken for one.
    float dry = mix(smoothstep(0.10, 0.20, max(photo.r, photo.b)), deck, valid);
    p2pWet = (1.0 - smoothstep(uFlat + 0.05, uFlat + 0.13, vWorld.y)) * (1.0 - dry);
    diffuseColor.rgb = mix(diffuseColor.rgb, ${t}, p2pWet);
    p2pGloss *= 1.0 - p2pWet;
  }`,Tr=64,Wg=3,Xg=i=>`vec3(${i.r.toFixed(4)}, ${i.g.toFixed(4)}, ${i.b.toFixed(4)})`,xc=new We(1456202),Th=`
  vec3 p2pSea;
  {
    vec3 toEye = normalize(cameraPosition - vWorld);
    float dist = length(cameraPosition - vWorld);
    float calm = smoothstep(60.0, 900.0, dist);
    vec2 w = vWorld.xz;
    vec3 n = normalize(vec3((p2pNoise(w * 0.35) - 0.5) + (p2pNoise(w * 1.3 + 9.0) - 0.5) * 0.6, 5.0 + 22.0 * calm, (p2pNoise(w * 0.31 + 40.0) - 0.5) + (p2pNoise(w * 1.1 + 3.0) - 0.5) * 0.6));
    vec3 r = reflect(-toEye, n); r.y = abs(r.y);
    float fres = 0.03 + 0.97 * pow(1.0 - max(dot(toEye, n), 0.0), 5.0);
    float glint = pow(max(dot(r, P2P_SUN), 0.0), 220.0) * 6.0 + pow(max(dot(r, P2P_SUN), 0.0), 24.0) * 0.25;
    p2pSea = mix(outgoingLight * vec3(0.55, 0.9, 1.0), p2pSky(r), fres) + vec3(1.0, 0.82, 0.6) * glint;
  }`,qg=`
  {
    vec3 toEye = normalize(cameraPosition - vWorld);
    float glare = pow(max(dot(reflect(-toEye, vec3(0.0, 1.0, 0.0)), P2P_SUN), 0.0), 7.0) * pow(1.0 - max(toEye.y, 0.0), 2.0);
    outgoingLight += vec3(1.0, 0.88, 0.72) * glare * p2pLit * p2pGloss;
  }
  if (p2pWet > 0.0) {
    ${Th}
    outgoingLight = mix(outgoingLight, p2pSea, p2pWet);
  }`;function $g(i,e){const t=new Uint32Array(400);for(const s of i.h){const r=Math.round((s-e)*100);r>10&&r<400&&t[r]++}let n=0;for(let s=1;s<400;s++)t[s]>t[n]&&(n=s);return t[n]>i.h.length/50?e+n/100:-1/0}function Yg(i,e,t){const{nx:n,nz:s,cell:r,x0:a,z0:o,h:l}=i;ug(i);const c=new $t,h=[],f=al(),u=f==="low",d=e.ground.water+.6,v=new Gr(new Uint8Array([0]),1,1,Vs);v.needsUpdate=!0;const g={uKinds:{value:v},uLooks:{value:Hg()},uKindsBox:{value:new it(0,0,1,1)},uKindsSize:{value:new Ve(1,1)},uKindsOn:{value:0},uSea:{value:d},uFlat:{value:Math.max($g(i,e.ground.water),d-1)}},m=$n(new zn({map:t,color:t?16777215:7304296}),e,{key:`p2p-ground-${f}`,uniforms:g,fragmentPars:Gg,color:Vg(!u,f==="high",Xg(xc)),final:qg}),[p,y,_,x]=e.box,M=new gh().loadAsync(`./world/${e.name}.kinds.png${as}`).then(O=>{const{width:P,height:U}=O.image;O.format=Vs,O.colorSpace=Cn,O.minFilter=O.magFilter=Yt,O.generateMipmaps=!1,O.flipY=!1,g.uKinds.value=O,g.uKindsBox.value.set(p,y,P/(_-p),U/(x-y)),g.uKindsSize.value.set(P,U),g.uKindsOn.value=1},()=>{console.warn(`no kind mask for ${e.name}: the ground is the photograph alone`)}),E=e.photo,R=(O,P)=>l[Math.min(s-1,Math.max(0,P))*n+Math.min(n-1,Math.max(0,O))],F=(O,P,U,A,G,k)=>{const K=Math.ceil(U/G),ee=Math.ceil(A/G),ue=new Float32Array((K+1)*(ee+1)*3),Ee=new Float32Array(ue.length),he=new Float32Array((K+1)*(ee+1)*2);let Y=0,$=0;for(let Se=0;Se<=ee;Se++)for(let we=0;we<=K;we++){const Ce=Math.min(O+U,O+we*G),ze=Math.min(P+A,P+Se*G),L=a+Ce*r,be=o+ze*r;ue[Y]=L,ue[Y+1]=R(Ce,ze)-k,ue[Y+2]=be;const ae=(R(Ce+1,ze)-R(Ce-1,ze))/(2*r),re=(R(Ce,ze+1)-R(Ce,ze-1))/(2*r),ce=1/Math.hypot(ae,1,re);Ee[Y]=-ae*ce,Ee[Y+1]=ce,Ee[Y+2]=-re*ce,Y+=3,E&&(he[$]=(L-E.x0)/E.w,he[$+1]=1-(be-E.z0)/E.d),$+=2}const oe=new Mt;return oe.setAttribute("position",new xt(ue,3)),oe.setAttribute("normal",new xt(Ee,3)),oe.setAttribute("uv",new xt(he,2)),oe.computeBoundingSphere(),oe},S=(O,P,U)=>{const A=[];for(let G=0;G<P;G+=U)for(let k=0;k<O;k+=U){const K=Math.min(O,k+U),ee=Math.min(P,G+U),ue=G*(O+1)+k,Ee=G*(O+1)+K,he=ee*(O+1)+k,Y=ee*(O+1)+K;A.push(ue,he,Ee,Ee,he,Y)}return A};for(let O=0;O<s-1;O+=Tr)for(let P=0;P<n-1;P+=Tr){const U=Math.min(Tr,n-1-P),A=Math.min(Tr,s-1-O),G=F(P,O,U,A,1,0),k=[];for(const K of[1,2,4,8]){const ee=new Mt;ee.setAttribute("position",G.getAttribute("position")),ee.setAttribute("normal",G.getAttribute("normal")),ee.setAttribute("uv",G.getAttribute("uv")),ee.setIndex(new gs(S(U,A,K),1)),ee.boundingSphere=G.boundingSphere;const ue=new vt(ee,m);ue.receiveShadow=!0,ue.matrixAutoUpdate=!1,ue.visible=K===8,c.add(ue),k.push(ue)}h.push({x:a+(P+U/2)*r,z:o+(O+A/2)*r,hx:U*r/2,hz:A*r/2,levels:k})}const w=16,C=Math.ceil(Math.max(n,s)/3/w)*w;for(let O=0;O<s-1;O+=C)for(let P=0;P<n-1;P+=C){const U=Math.min(C,n-1-P),A=Math.min(C,s-1-O),G=F(P,O,U,A,w,Wg),k=Math.ceil(U/w),K=Math.ceil(A/w);G.setIndex(new gs(S(k,K,1),1));const ee=new vt(G,m);ee.receiveShadow=!0,ee.matrixAutoUpdate=!1,c.add(ee)}const z=$n(new zn({color:xc}),e,{key:"p2p-bay",light:"",final:`
      {
        ${Th}
        outgoingLight = p2pSea;
        // West of the map, and south of it as far east as the waterfront, there is city and not water.
        // Nothing is known of it here: the plane takes a city's mottled grey there, and the air does the rest.
        float land = max(step(vWorld.x, uEdge.x), step(uEdge.y, vWorld.z) * step(vWorld.x, uEdge.z));
        vec2 blocks = floor(vWorld.xz / 90.0);
        vec3 town = vec3(0.30, 0.29, 0.27) * (0.75 + 0.5 * p2pHash(blocks)) * (0.8 + 0.4 * p2pNoise(vWorld.xz * 0.05));
        town *= 1.0 - 0.35 * max(p2pLine(fract(vWorld.x / 90.0) * 90.0 - 45.0, 6.0, 1.0), p2pLine(fract(vWorld.z / 90.0) * 90.0 - 45.0, 6.0, 1.0));
        outgoingLight = mix(outgoingLight, town, land);
      }`,uniforms:{uEdge:{value:new B(e.box[0],e.box[3],1100)}},fragmentPars:"uniform vec3 uEdge;"}),H=new vt(new mi(4e4,4e4),z);return H.rotation.x=-Math.PI/2,H.position.y=d,H.updateMatrixWorld(),c.add(H),{group:c,update:O=>{for(const P of h){const U=Math.hypot(Math.max(0,Math.abs(P.x-O.x)-P.hx),Math.max(0,Math.abs(P.z-O.z)-P.hz)),A=U<12?0:U<150?1:U<480?2:3,G=U<bh.far;for(let k=0;k<4;k++)P.levels[k].visible=G&&k===A}},ready:M}}class Is{a=new Float32Array(1024);length=0;push(...e){if(this.length+e.length>this.a.length){const t=new Float32Array(Math.max(this.a.length*2,this.length+e.length));t.set(this.a.subarray(0,this.length)),this.a=t}for(let t=0;t<e.length;t++)this.a[this.length++]=e[t]}done(){return this.a.slice(0,this.length)}view(){return this.a.subarray(0,this.length)}}class hs{constructor(e,t=0,n=0){this.cellSize=e,this.auxSize=t,this.extSize=n}bins=new Map;bin(e,t){const n=`${Math.floor(e/this.cellSize)}_${Math.floor(t/this.cellSize)}`;let s=this.bins.get(n);return s||(s={pos:new Is,nor:new Is,col:new Is,aux:new Is,ext:new Is,idx:[],late:[],box:[]},this.bins.set(n,s)),s}build(e,t={}){const n=new $t;for(const s of this.bins.values()){if(!s.idx.length&&!s.late.length&&!s.box.length)continue;const r=new Mt,a=s.pos.length/3;r.setAttribute("position",new xt(s.pos.done(),3));const o=s.nor.view(),l=s.col.view(),c=new Int8Array(o.length),h=new Uint8Array(l.length);for(let v=0;v<c.length;v++)c[v]=Math.round(Math.max(-1,Math.min(1,o[v]))*127);for(let v=0;v<h.length;v++)h[v]=Math.round(Math.max(0,Math.min(1,l[v]))*255);if(r.setAttribute("normal",new xt(c,3,!0)),r.setAttribute("color",new xt(h,3,!0)),this.auxSize&&r.setAttribute("aux",new xt(s.aux.done(),this.auxSize)),this.extSize&&r.setAttribute("ext",new xt(s.ext.done(),this.extSize)),this.auxSize&&s.aux.length!==a*this.auxSize)throw new Error("a batch has a short aux buffer");if(this.extSize&&s.ext.length!==a*this.extSize)throw new Error("a batch has a short ext buffer");const f=s.late.length>0||s.box.length>0,u=f?[...s.late,...s.idx,...s.box]:s.idx;r.setIndex(a>65535?new jo(u,1):new gs(u,1)),r.computeBoundingSphere(),r.computeBoundingBox();const d=new vt(r,e);d.castShadow=!!t.cast,d.receiveShadow=!!t.receive,d.matrixAutoUpdate=!1,f&&(d.userData.near=[0,s.late.length+s.idx.length],d.userData.far=[s.late.length,s.idx.length+s.box.length]),n.add(d)}return this.bins.clear(),n}}function $r(i,e,t,n,s,r,a,o,l,c){return i.pos.push(e,t,n),i.nor.push(s,r,a),i.col.push(o,l,c),i.pos.length/3-1}function Js(i){const e=new We(i);return[e.r,e.g,e.b]}function ft(i){let e=Math.imul(i+1,2654435761);return e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,(e>>>0)/4294967296}const es=Js(8092540),Us=Js(12170667),_c=Js(16777215),Kg=/^(motorway|trunk|primary|secondary|tertiary|residential|unclassified|living_street|service)$/;function jg(i){return{at(e,t){let n=1/0,s=i.p[0][1];for(let r=0;r+1<i.p.length;r++){const a=i.p[r],o=i.p[r+1],l=o[0]-a[0],c=o[2]-a[2],h=l*l+c*c||1,f=Math.min(1,Math.max(0,((e-a[0])*l+(t-a[2])*c)/h)),u=Math.hypot(a[0]+l*f-e,a[2]+c*f-t);u<n&&(n=u,s=a[1]+(o[1]-a[1])*f)}return s}}}function Fs(i,e,t=[]){const n=[];let s=0;for(let a=0;a+1<i.length;a++){const[o,l]=i[a],[c,h]=i[a+1],f=Math.hypot(c-o,h-l);if(f<.01)continue;const u=Math.max(1,Math.ceil(f/e));for(let d=n.length===0?0:1;d<=u;d++)n.push({x:o+(c-o)*d/u,z:l+(h-l)*d/u,dx:(c-o)/f,dz:(h-l)/f,s:s+f*d/u,j:0,must:d===u});s+=f}n.length&&(n[0].must=!0);for(let a=1;a+1<n.length;a++){const o=n[a-1],l=n[a+1],c=l.x-o.x,h=l.z-o.z,f=Math.hypot(c,h);f>.01&&(n[a].dx=c/f,n[a].dz=h/f)}if(!t.length||n.length<2)return n;const r=[];for(const[a,o]of t)r.push(a-.8,a,o,o+.8);for(const a of r){if(a<=.05||a>=s-.05)continue;let o=0;for(;o+1<n.length&&n[o+1].s<a;)o++;const l=n[o],c=n[o+1];if(a-l.s<.05||c.s-a<.05)continue;const h=(a-l.s)/(c.s-l.s),f=l.dx+(c.dx-l.dx)*h,u=l.dz+(c.dz-l.dz)*h,d=Math.hypot(f,u)||1;n.splice(o+1,0,{x:l.x+(c.x-l.x)*h,z:l.z+(c.z-l.z)*h,dx:f/d,dz:u/d,s:a,j:0,must:!0})}for(const a of n)for(const[o,l]of t)a.s>=o-.01&&a.s<=l+.01&&(a.j=1,a.must=!0);return n}function Rr(i,e,t,n=.055,s=54){if(i.length<3)return i;const r=i.map(l=>[e.at(l.x,l.z),e.at(l.x+l.dz*t,l.z-l.dx*t),e.at(l.x-l.dz*t,l.z+l.dx*t)]),a=[i[0]];let o=0;for(;o<i.length-1;){let l=o+1;for(let c=o+2;c<i.length;c++){const h=i[o],f=i[c];if(f.s-h.s>s||i[c-1].must)break;let u=Math.abs(h.dx*f.dz-h.dz*f.dx)<.012;for(let d=o+1;u&&d<c;d++){const v=(i[d].s-h.s)/(f.s-h.s);for(let g=0;g<3;g++)if(Math.abs(r[d][g]-(r[o][g]+(r[c][g]-r[o][g])*v))>n){u=!1;break}}if(!u)break;l=c}a.push(i[l]),o=l}return a}function Un(i,e,t,n,s,r,a,o,l,c,h){if(t.length<2)return;let f=1;for(const d of t){const v=g=>e.at(d.x+d.dz*g,d.z-d.dx*g);if(Math.abs(v((n+s)/2)-(v(n)+v(s))/2)>.045){f=Math.max(1,Math.ceil(Math.abs(s-n)/6));break}}const u=[];for(const d of t){const v=d.dz,g=-d.dx,m=[];for(let p=0;p<=f;p++){const y=n+(s-n)*p/f,_=d.x+v*y,x=d.z+g*y;m.push($r(i,_,e.at(_,x)+r,x,0,1,0,a[0],a[1],a[2])),i.aux.push(o(y),d.s,l,h??d.j),i.ext.push(c[0],c[1],c[2])}u.push(m)}for(let d=0;d+1<u.length;d++)for(let v=0;v<f;v++){const g=u[d][v],m=u[d][v+1],p=u[d+1][v],y=u[d+1][v+1];i.idx.push(g,p,m,m,p,y)}}const Pi=760,zr=170,_s=330,La=`
  attribute vec4 aux; attribute vec3 ext;
  varying vec4 vAux; flat varying vec3 vExt;`,Pa="vAux = aux; vExt = ext;",Da=`
  varying vec4 vAux; flat varying vec3 vExt;
  // paint wears: where this is 0 it has gone
  float chipLike(vec2 rc) { return smoothstep(0.16, 0.5, p2pNoise(rc * vec2(7.0, 1.3) + 5.0) + 0.22); }`,Rh=`
  float p2pFar = length(vWorld.xz - cameraPosition.xz);
  if (p2pFar > ${(Pi-zr).toFixed(1)} && p2pHash(gl_FragCoord.xy) < (p2pFar - ${(Pi-zr).toFixed(1)}) / ${zr.toFixed(1)}) discard;`,yc=i=>`
  {
    vec3 toEye = normalize(cameraPosition - vWorld);
    float glare = pow(max(dot(reflect(-toEye, vec3(0.0, 1.0, 0.0)), P2P_SUN), 0.0), 7.0) * pow(1.0 - max(toEye.y, 0.0), 2.0);
    outgoingLight += vec3(1.0, 0.88, 0.72) * glare * p2pLit * ${i};
  }`,Zg=`
  {
    // every derivative is taken here, outside any branch
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    ${Rh}
    vec2 rc = vAux.xy;
    float halfW = vAux.z, junction = vAux.w, lanes = floor(vExt.x + 0.5), oneWay = step(0.5, vExt.y), seed = vExt.z;
    float near = 1.0 - smoothstep(${(_s*.6).toFixed(1)}, ${_s.toFixed(1)}, p2pFar);
    vec3 base = diffuseColor.rgb;

    // the surface: grain, mottle, and streaks drawn out along the road by years of tyres
    float grain = (p2pNoise(vWorld.xz * 11.0) - 0.5) * (1.0 - smoothstep(0.012, 0.045, fwW));
    float mottle = p2pNoise(vWorld.xz * 0.7 + seed * 50.0) - 0.5;
    float streak = p2pNoise(vec2(rc.x * 1.7 + seed * 9.0, rc.y * 0.06)) - 0.5;
    base *= 1.0 + grain * 0.30 + mottle * 0.07 + streak * 0.13;

    // lanes: parking at each side where the road is wider than its lanes, 3.3 m lanes between
    float park = max(0.0, (2.0 * halfW - lanes * 3.3) * 0.5);
    float la = (rc.x + halfW - park) / 3.3;
    float inLanes = step(0.0, la) * step(la, lanes);
    float lf = fract(la);
    float oil = exp(-pow((lf - 0.5) / 0.13, 2.0)), tracks = exp(-pow((lf - 0.24) / 0.09, 2.0)) + exp(-pow((lf - 0.76) / 0.09, 2.0));
    base *= 1.0 + inLanes * (tracks * 0.07 - oil * 0.10) * (1.0 - junction * 0.6);
    // where cars stand: drips
    float drips = smoothstep(0.6, 0.85, p2pNoise(rc * vec2(1.6, 0.5) + seed * 31.0)) * (1.0 - inLanes);
    base *= 1.0 - drips * 0.13;

    // patches: a trench cut and filled, darker or lighter than the road by its age
    vec2 pc = vec2(rc.x / 2.7, rc.y / 12.0 + seed * 7.0), pid = floor(pc), pf = fract(pc);
    vec2 ph = p2pHash2(pid + seed * 91.0), lo = 0.06 + 0.22 * p2pHash2(pid + 7.3), hi = 0.94 - 0.30 * p2pHash2(pid + 13.1);
    float patchFade = 1.0 - smoothstep(0.5, 1.6, fwL);
    vec2 pm = pf * vec2(2.7, 12.0), plo = lo * vec2(2.7, 12.0), phi = hi * vec2(2.7, 12.0);
    float inPatch = step(0.70, ph.x) * p2pBox(pm, plo, phi, vec2(fwA, fwL)) * patchFade;
    base = mix(base, base * (0.62 + 0.62 * ph.y), inPatch);
    // the saw cut round it, filled with tar
    float seam = max(max(p2pLine(pm.x - plo.x, 0.02, fwA), p2pLine(pm.x - phi.x, 0.02, fwA)) * step(plo.y, pm.y) * step(pm.y, phi.y), max(p2pLine(pm.y - plo.y, 0.02, fwL), p2pLine(pm.y - phi.y, 0.02, fwL)) * step(plo.x, pm.x) * step(pm.x, phi.x));
    base *= 1.0 - seam * step(0.70, ph.x) * 0.4 * near;

    // cracks, sealed with tar
    float cn = abs(p2pNoise(vWorld.xz * 0.42 + seed * 17.0) - 0.5) + abs(p2pNoise(vWorld.xz * 0.9 + 60.0) - 0.5) * 0.4;
    float crack = (1.0 - smoothstep(0.004, 0.006 + fwW * 0.5, cn)) * (1.0 - smoothstep(0.02, 0.06, fwW));
    base *= 1.0 - crack * 0.5;

    // iron covers
    vec2 mc = vec2(rc.x / 3.3, rc.y / 19.0 + seed * 3.0), mid = floor(mc);
    vec2 mh = p2pHash2(mid + seed * 57.0);
    vec2 mo = (fract(mc) - (0.25 + 0.5 * p2pHash2(mid + 3.7))) * vec2(3.3, 19.0);
    float md = length(mo), coverFade = step(0.62, mh.x) * (1.0 - smoothstep(0.08, 0.25, fwW));
    float cover = (1.0 - smoothstep(0.33, 0.33 + fwW, md)) * coverFade;
    float ring = p2pLine(md - 0.33, 0.035, fwW) * coverFade;
    base = mix(base, vec3(0.105, 0.10, 0.095) * (0.8 + 0.4 * p2pNoise(mo * 40.0)), cover * 0.85);
    base = mix(base, base * 1.5 + 0.02, ring * 0.6);

    // what the utilities spray before they dig: a few short strokes of colour, here and there
    vec2 uc = vec2(rc.x / 1.1, rc.y / 6.5 + seed * 11.0), uid = floor(uc), uf = (fract(uc) - 0.5) * vec2(1.1, 6.5);
    vec2 uh = p2pHash2(uid + seed * 123.0);
    float turn = (uh.y - 0.5) * 3.0;
    vec2 ur = vec2(uf.x * cos(turn) - uf.y * sin(turn), uf.x * sin(turn) + uf.y * cos(turn));
    float stroke = p2pLine(ur.x, 0.022, fwW) * p2pSpan(ur.y, -0.32, 0.32, fwW) * step(0.90, uh.x) * (1.0 - smoothstep(0.02, 0.06, fwW)) * chipLike(rc);
    vec3 spray = uh.y < 0.3 ? vec3(0.80, 0.16, 0.08) : uh.y < 0.55 ? vec3(0.85, 0.42, 0.05) : uh.y < 0.8 ? vec3(0.10, 0.28, 0.70) : vec3(0.82, 0.82, 0.78);
    base = mix(base, spray, stroke * 0.75);

    // the gutter: a pan of concrete against the kerb, and the seam where the asphalt meets it
    float edge = halfW - abs(rc.x);
    float pan = (1.0 - smoothstep(0.42 - fwA, 0.42 + fwA, edge)) * step(3.5, halfW);
    vec3 concrete = vec3(0.40, 0.385, 0.35) * (0.86 + 0.28 * p2pNoise(rc * vec2(3.0, 0.4)));
    base = mix(base, concrete, pan * 0.9 * (1.0 - junction));
    base *= 1.0 - p2pLine(edge - 0.42, 0.02, fwA) * 0.45 * step(3.5, halfW) * (1.0 - junction);
    // what collects there
    base *= 1.0 - (1.0 - smoothstep(0.0, 0.9, edge)) * 0.16 * (1.0 - junction);

    // paint: worn where tyres cross it, gone inside a junction
    float chip = chipLike(rc) * 0.92;
    float k = floor(la + 0.5), off = (la - k) * 3.3;
    float between = step(0.5, k) * step(k, lanes - 0.5);
    float middle = (1.0 - oneWay) * step(abs(k - floor(lanes * 0.5 + 0.5)), 0.25) * step(1.5, lanes);
    float dph = fract(rc.y / 12.0) * 12.0;
    float dash = mix(p2pSpan(dph, 0.0, 3.0, fwL), 0.25, smoothstep(1.5, 5.0, fwL));
    float white = p2pLine(off, 0.055, fwA) * dash * between * (1.0 - middle);
    float yellow = p2pLine(abs(off) - 0.13, 0.05, fwA) * middle;
    float paintOn = (1.0 - junction) * chip * near;
    base = mix(base, vec3(0.74, 0.74, 0.70), white * paintOn);
    base = mix(base, vec3(0.80, 0.53, 0.06), yellow * paintOn);

    diffuseColor.rgb = base;
  }`,Jg=`
  {
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    ${Rh}
    // across: metres in from the kerb; a plaza (ext.x = 1) has no kerb
    float across = vAux.x, along = vAux.y, wide = vAux.z, plaza = step(0.5, vExt.x), seed = vExt.z;
    float near = 1.0 - smoothstep(${(_s*.5).toFixed(1)}, ${(_s*.9).toFixed(1)}, p2pFar);
    vec3 base = diffuseColor.rgb;
    // squares of concrete, each poured a little differently
    float cell = wide / max(1.0, floor(wide / 0.95 + 0.5));
    vec2 sq = vec2((across - 0.16) / cell, along / 0.95), sid = floor(sq), sf = fract(sq);
    float slab = p2pHash(sid + seed * 77.0);
    float slabFade = 1.0 - smoothstep(0.25, 0.7, max(fwA, fwL));
    base *= 1.0 + (slab - 0.5) * 0.13 * slabFade;
    base *= 1.0 + (p2pNoise(vWorld.xz * 9.0) - 0.5) * 0.22 * (1.0 - smoothstep(0.014, 0.05, fwW)) + (p2pNoise(vWorld.xz * 0.6 + 11.0) - 0.5) * 0.16;
    // a replaced square now and then, whiter
    base = mix(base, base * 1.16, step(0.93, slab) * slabFade);
    // score lines, and gum
    float score = max(p2pLine((0.5 - abs(sf.x - 0.5)) * cell, 0.008, fwA), p2pLine((0.5 - abs(sf.y - 0.5)) * 0.95, 0.008, fwL));
    base *= 1.0 - score * 0.42 * step(0.16, across) * near;
    vec2 gum = fract(vWorld.xz * 1.3) - 0.5 - (p2pHash2(floor(vWorld.xz * 1.3)) - 0.5) * 0.7;
    base *= 1.0 - (1.0 - smoothstep(0.03, 0.045 + fwW, length(gum))) * step(0.55, p2pHash(floor(vWorld.xz * 1.3) + 3.0)) * 0.4 * (1.0 - smoothstep(0.01, 0.03, fwW));
    // the kerb: a granite edge, its face in shade over the gutter, and here and there its paint
    float kerb = (1.0 - smoothstep(0.16 - fwA, 0.16 + fwA, across)) * (1.0 - plaza);
    vec3 stone = vec3(0.47, 0.455, 0.43) * (0.9 + 0.2 * p2pNoise(vec2(along * 2.0, 1.0)));
    float zone = p2pHash(vec2(floor(along / 9.0), seed * 40.0 + vExt.y));
    vec3 paint = zone < 0.16 ? vec3(0.62, 0.07, 0.05) : zone < 0.21 ? vec3(0.72, 0.56, 0.06) : zone < 0.25 ? vec3(0.78, 0.78, 0.74) : zone < 0.28 ? vec3(0.10, 0.36, 0.16) : stone;
    paint = mix(stone, paint, smoothstep(0.2, 0.5, p2pNoise(vec2(along * 6.0, across * 20.0)) + 0.25));
    base = mix(base, mix(stone, paint, near), kerb);
    base *= 1.0 - p2pLine(across - 0.02, 0.03, fwA) * 0.55 * (1.0 - plaza);     // the face of the kerb, in its own shade
    base *= 1.0 + p2pLine(across - 0.085, 0.02, fwA) * 0.25 * (1.0 - plaza);   // its lit arris
    // against the buildings: what the broom does not reach
    base *= 1.0 - (1.0 - smoothstep(0.0, 0.5, wide - across)) * 0.2 * (1.0 - plaza);
    diffuseColor.rgb = base;
  }`,Qg=`
  {
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    float p2pFar = length(vWorld.xz - cameraPosition.xz);
    float kind = floor(vExt.x + 0.5), seed = vExt.y;
    float near = 1.0 - smoothstep(${(_s*.6).toFixed(1)}, ${_s.toFixed(1)}, p2pFar);
    vec3 col = vec3(0.0); float a = 0.0;
    if (kind < 0.5) {
      float u = vAux.x, v = vAux.y, len = vAux.z;
      float inWalk = p2pSpan(u, -1.5, 1.5, fwA);
      // two styles, as the city has: the ladder of bars, and two lines across
      float bars = p2pSpan(fract(v / 1.2) * 1.2, 0.0, 0.6, fwL);
      bars = mix(bars, 0.5, smoothstep(0.3, 0.9, fwL));
      float ladder = inWalk * bars;
      float lines = max(p2pLine(abs(u) - 1.35, 0.15, fwA), 0.0);
      float walk = seed < 0.62 ? ladder : lines;
      // the stop bar: before the walk, on the half of the road that drives toward it
      float bar = p2pLine(u + 2.9, 0.2, fwA) * step(len * 0.5, v) + p2pLine(u - 2.9, 0.2, fwA) * step(v, len * 0.5);
      bar *= p2pSpan(v, 0.4, len - 0.4, fwL);
      a = max(walk, bar * step(seed, 0.85));
      float chip = smoothstep(0.15, 0.5, p2pNoise(vWorld.xz * vec2(5.0, 5.0) + 9.0) + 0.2);
      a *= chip * 0.9;
      col = seed > 0.9 ? vec3(0.80, 0.56, 0.08) : vec3(0.76, 0.76, 0.72);
    } else {
      float x = vAux.x, s = vAux.y;
      // a slab of concrete under the track, poured in panels, its edges ragged where the asphalt laps it
      float ragged = 1.50 + 0.06 * p2pNoise(vec2(s * 0.8, seed * 9.0));
      a = 1.0 - smoothstep(ragged - fwA, ragged + fwA, abs(x));
      col = vec3(0.46, 0.45, 0.42) * (0.84 + 0.22 * p2pNoise(vWorld.xz * 7.0) * (1.0 - smoothstep(0.018, 0.06, fwW)) + 0.18 * p2pHash(vec2(floor(s / 3.6), seed)));
      col *= 1.0 - p2pLine(fract(s / 3.6) * 3.6 - 1.8, 0.015, fwL) * 0.5 * near;
      // the rails, 1067 mm apart, and the slot the grip runs in
      float rail = p2pLine(abs(x) - 0.534, 0.035, fwA);
      float flange = p2pLine(abs(x) - 0.534, 0.075, fwA);
      float slot = p2pLine(x, 0.014, fwA), lips = p2pLine(abs(x) - 0.06, 0.045, fwA);
      col = mix(col, vec3(0.13, 0.12, 0.11), max(flange, lips) * 0.9);
      col = mix(col, vec3(0.30, 0.30, 0.31), rail);
      col = mix(col, vec3(0.02), slot);
      p2pGloss = max(rail, lips * 0.5);
    }
    diffuseColor.rgb = col;
    diffuseColor.a = a * (1.0 - smoothstep(${(Pi-zr-60).toFixed(1)}, ${(Pi-60).toFixed(1)}, p2pFar)) * (kind < 0.5 ? near : 1.0);
  }`;function ev(i,e){const t=new $t,n=new hs(400,4,3),s=new hs(400,4,3),r=new hs(400,4,3),a=_=>`${_[0]}_${_[1]}`,o=new Map,l=e.roads.filter(_=>!_.b&&(Kg.test(_.c)||_.c==="pedestrian")),c=_=>_==="service"||_==="living_street";for(const _ of l)_.c!=="pedestrian"&&_.p.forEach((x,M)=>{const E=o.get(a(x))??{n:0,major:0,half:0},R=M===0||M===_.p.length-1?1:2;E.n+=R,c(_.c)||(E.major+=R,E.half=Math.max(E.half,_.w/2)),o.set(a(x),E)});l.forEach((_,x)=>{const M=ft(x),E=_.w/2,R=c(_.c);if(_.c==="pedestrian"){const O=Rr(Fs(_.p,6),i,E),P=O[O.length>>1];O.length>1&&Un(s.bin(P.x,P.z),i,O,-E,E,.05+M*.012,Us,U=>U+E,_.w,[1,0,M]);return}const F=[];let S=0;_.p.forEach((O,P)=>{P>0&&(S+=Math.hypot(O[0]-_.p[P-1][0],O[1]-_.p[P-1][1]));const U=o.get(a(O));if(R?U.n>=3:U.major>=3){const A=Math.max(U.half,E)+5.2;F.push([S-A,S+A])}});const w=Rr(Fs(_.p,6,F),i,E+(_.s??0));if(w.length<2)return;const C=w[w.length>>1],z=.86+.3*ft(x+4001),H=(ft(x+911)-.5)*.05,N=[es[0]*z*(1+H),es[1]*z,es[2]*z*(1-H)];if(Un(n.bin(C.x,C.z),i,w,-E,E,.07+M*.012,N,O=>O,E,[R?1:_.l??1,_.o||R?1:0,M]),_.s){const O=.92+.16*ft(x+77),P=[Us[0]*O,Us[1]*O,Us[2]*O];Un(s.bin(C.x,C.z),i,w,E,E+_.s,.05+M*.012,P,U=>U-E,_.s,[0,0,M]),Un(s.bin(C.x,C.z),i,w,-E-_.s,-E,.05+M*.012,P,U=>-U-E,_.s,[0,1,M])}}),(e.ways??[]).forEach((_,x)=>{const M=jg(_),E=ft(x+5003),R=_.p.map(N=>[N[0],N[2]]),F=Fs(R,6);if(F.length<2)return;const S=F[F.length>>1];if(_.c==="pedestrian"){Un(s.bin(S.x,S.z),M,F,-_.half+.3,_.half-.3,.03,Us,N=>N+_.half,_.half*2,[1,0,E]);return}const w=_.w/2,C=.8+.2*ft(x+6007),z=[es[0]*C,es[1]*C,es[2]*C];Un(n.bin(S.x,S.z),M,F,-w,w,.1,z,N=>N,w,[_.l??1,_.o?1:0,E]);const H=_.half-w-.05;if(H>.2){const N=[.62,.61,.58];Un(s.bin(S.x,S.z),M,F,w,w+H,.08,N,O=>O-w,H,[0,0,E]),Un(s.bin(S.x,S.z),M,F,-w-H,-w,.08,N,O=>-O-w,H,[0,1,E])}}),e.lines.forEach((_,x)=>{if(_.k==="crosswalk"){const M=Rr(Fs(_.p,3),i,3.3,.02);if(M.length<2)return;const E=M[M.length-1].s,R=M[M.length>>1];Un(r.bin(R.x,R.z),i,M,-3.3,3.3,.105,_c,F=>F,E,[0,ft(x+20011),0],0)}else if(_.k==="rail"){const M=Rr(Fs(_.p,4),i,2,.03);if(M.length<2)return;const E=M[M.length>>1];Un(r.bin(E.x,E.z),i,M,-2,2,.095,_c,R=>R,0,[1,ft(x+733),0],0)}});const h=(_,x)=>(_.polygonOffset=!0,_.polygonOffsetFactor=x,_.polygonOffsetUnits=x*2,_),f=h($n(new zn({vertexColors:!0}),e,{key:"p2p-road",vertexPars:La,vertex:Pa,fragmentPars:Da,color:Zg,final:yc("0.50")}),-3),u=h($n(new zn({vertexColors:!0}),e,{key:"p2p-walk",vertexPars:La,vertex:Pa,fragmentPars:Da,color:Jg,final:yc("0.22")}),-2),d=h($n(new zn({vertexColors:!0,transparent:!0,depthWrite:!1}),e,{key:"p2p-over",vertexPars:La,vertex:Pa,fragmentPars:Da,color:Qg,final:`
      {
        vec3 toEye = normalize(cameraPosition - vWorld);
        vec3 r = reflect(-toEye, vec3(0.0, 1.0, 0.0));
        float fres = 0.25 + 0.75 * pow(1.0 - max(toEye.y, 0.0), 4.0);
        outgoingLight = mix(outgoingLight, p2pSky(r) * 0.8 + vec3(1.0, 0.85, 0.65) * pow(max(dot(r, P2P_SUN), 0.0), 30.0) * 2.0 * p2pLit, p2pGloss * fres);
      }`}),-5),v=n.build(f,{receive:!0}),g=s.build(u,{receive:!0}),m=r.build(d,{receive:!0});for(const _ of m.children)_.renderOrder=2;t.add(g,v,m);const p=(_,x,M)=>{for(const E of _){const R=E.geometry.boundingSphere;E.visible=Math.hypot(R.center.x-x.x,R.center.z-x.z)-R.radius<M}};return{group:t,update:_=>{p(v.children,_,Pi),p(g.children,_,Pi),p(m.children,_,Pi-60)}}}const _n=1,tv=3.2,nv=2.4;function iv(i){const e=i.length;return i.map((t,n)=>{const s=i[Math.max(0,n-1)],r=i[Math.min(e-1,n+1)];let a=r[0]-s[0],o=r[2]-s[2];const l=Math.hypot(a,o)||1e-6;a/=l,o/=l;let c=o,h=-a;if(n>0&&n<e-1){const f=i[n-1],u=i[n],d=u[0]-f[0],v=u[2]-f[2],g=Math.hypot(d,v)||1e-6,m=Math.max(.5,c*(v/g)+h*(-d/g));c/=m,h/=m}return[c,h]})}function Ia(i,e,t,n,s){return i.some((r,a)=>{if(a===e)return!1;for(let o=0;o+1<r.p.length;o++){const l=r.p[o],c=r.p[o+1],h=c[0]-l[0],f=c[2]-l[2],u=h*h+f*f;if(u<1e-6)continue;const d=Math.sqrt(u),v=((t-l[0])*h+(s-l[2])*f)/u,g=.8/d;if(v<(o===0?0:-g)||v>(o+2===r.p.length?1:1+g)||Math.hypot(l[0]+h*v-t,l[2]+f*v-s)>r.half)continue;const m=l[1]+(c[1]-l[1])*Math.min(1,Math.max(0,v));if(Math.abs(m-n)<1.5)return!0}return!1})}class Mc{pos=[];col=[];aux=[];idx=[];quad(e,t,n,s,r,a,o=[[0,0],[0,0],[0,0],[0,0]]){const l=this.pos.length/3;for(const[_,x]of[e,t,n,s].entries())this.pos.push(x[0],x[1],x[2]),this.col.push(...r),this.aux.push(o[_][0],o[_][1]);const c=t[0]-e[0],h=t[1]-e[1],f=t[2]-e[2],u=n[0]-e[0],d=n[1]-e[1],v=n[2]-e[2],g=h*v-f*d,m=f*u-c*v,p=c*d-h*u;g*(a[0]-e[0])+m*(a[1]-e[1])+p*(a[2]-e[2])>=0?this.idx.push(l,l+1,l+2,l,l+2,l+3):this.idx.push(l,l+2,l+1,l,l+3,l+2)}geometry(){const e=new Mt;return e.setAttribute("position",new tt(this.pos,3)),e.setAttribute("color",new tt(this.col,3)),e.setAttribute("aWay",new tt(this.aux,2)),e.setIndex(this.idx),e.computeVertexNormals(),e.computeBoundingSphere(),e}}const ts=[.66,.645,.61],sv=[.42,.41,.39],bi=[.74,.73,.7];function rv(i,e){const t=i.ways??[],n=new $t,s=new Mc,r=new Mc;t.forEach((l,c)=>{const h=iv(l.p),f=(g,m,p)=>{const y=l.p[g];return[y[0]+h[g][0]*l.half*m,y[1]+p,y[2]+h[g][1]*l.half*m]},u=(g,m)=>[l.p[g][0],l.p[g][1]+m,l.p[g][2]];if(l.k==="deck"){for(let g=0;g+1<l.p.length;g++){for(const m of[1,-1]){const p=f(g,m*3,-.6);s.quad(f(g,m,-1.2),f(g+1,m,-1.2),f(g+1,m,.02),f(g,m,.02),ts,p)}s.quad(f(g,1,-1.2),f(g+1,1,-1.2),f(g+1,-1,-1.2),f(g,-1,-1.2),sv,u(g,-1.2-5));for(const m of[1,-1]){const p=f(g,m*.98,0),y=f(g+1,m*.98,0),_=[(p[0]+y[0])/2,(p[1]+y[1])/2,(p[2]+y[2])/2];if(Ia(t,c,_[0],_[1],_[2])||Ia(t,c,p[0],p[1],p[2])&&Ia(t,c,y[0],y[1],y[2]))continue;const x=(E,R,F)=>f(E,m*(1-R/l.half),F),M=u(g,1.5);s.quad(x(g,0,0),x(g+1,0,0),x(g+1,0,_n),x(g,0,_n),bi,f(g,m*2,.5)),s.quad(x(g,0,_n),x(g+1,0,_n),x(g+1,.18,_n),x(g,.18,_n),bi,u(g,10)),s.quad(x(g,.18,_n),x(g+1,.18,_n),x(g+1,.3,.32),x(g,.3,.32),bi,M),s.quad(x(g,.3,.32),x(g+1,.3,.32),x(g+1,.42,.02),x(g,.42,.02),bi,M)}}for(const[g,m]of[[0,l.shut[0]],[l.p.length-1,l.shut[1]]]){const p=g===0?1:l.p.length-2,y=[2*l.p[g][0]-l.p[p][0],l.p[g][1],2*l.p[g][2]-l.p[p][2]];m?(s.quad(f(g,1,-1.2),f(g,-1,-1.2),f(g,-1,_n),f(g,1,_n),bi,y),s.quad(f(g,1,-1.2),f(g,-1,-1.2),f(g,-1,_n),f(g,1,_n),bi,l.p[p])):l.p[g][1]-e.at(l.p[g][0],l.p[g][2])>1.5&&s.quad(f(g,1,-1.2),f(g,-1,-1.2),f(g,-1,0),f(g,1,0),ts,y)}return}const d=l.clear??5.6;let v=0;for(let g=0;g+1<l.p.length;g++){const m=Math.hypot(l.p[g+1][0]-l.p[g][0],l.p[g+1][2]-l.p[g][2]),p=u(g,d*.5);for(const y of[1,-1])r.quad(f(g,y,-.25),f(g+1,y,-.25),f(g+1,y,d),f(g,y,d),[.78,.77,.72],p,[[v,0],[v+m,0],[v+m,1],[v,1]]);r.quad(f(g,1,d),f(g+1,1,d),f(g+1,-1,d),f(g,-1,d),[.3,.3,.31],p,[[v,2],[v+m,2],[v+m,3],[v,3]]),v+=m}for(const g of[0,l.p.length-1]){const m=g===0?1:l.p.length-2,p=[2*l.p[g][0]-l.p[m][0],l.p[g][1]+2,2*l.p[g][2]-l.p[m][2]];let y=l.p[g][1]+d+nv;for(let F=0;F<Math.min(4,l.p.length);F++){const S=l.p[g===0?F:l.p.length-1-F];y=Math.max(y,e.at(S[0],S[2])+.5)}const _=y,x=(l.half+tv)/l.half,M=(F,S)=>f(g,F,S);s.quad(M(1,-.3),M(x,-.3),M(x,_-l.p[g][1]),M(1,_-l.p[g][1]),ts,p),s.quad(M(-1,-.3),M(-x,-.3),M(-x,_-l.p[g][1]),M(-1,_-l.p[g][1]),ts,p),s.quad(M(1,d),M(-1,d),M(-1,_-l.p[g][1]),M(1,_-l.p[g][1]),ts,p);const E=[l.p[m][0],0,l.p[m][2]],R=(F,S)=>[F[0]+(E[0]-l.p[g][0])*S,F[1],F[2]+(E[2]-l.p[g][2])*S];s.quad(M(x,_-l.p[g][1]),M(-x,_-l.p[g][1]),R(M(-x,_-l.p[g][1]),.25),R(M(x,_-l.p[g][1]),.25),bi,[l.p[g][0],_+10,l.p[g][2]])}});for(const l of i.piers??[]){const c=l.ax*l.a,h=l.az*l.a,f=-l.az*l.c,u=l.ax*l.c,d=.82,v=[[-1,-d],[-d,-1],[d,-1],[1,-d],[1,d],[d,1],[-d,1],[-1,d]].map(([g,m])=>[l.x+c*g+f*m,l.z+h*g+u*m]);for(let g=0;g<v.length;g++){const m=v[g],p=v[(g+1)%v.length],y=(m[0]+p[0])/2*2-l.x,_=(m[1]+p[1])/2*2-l.z;s.quad([m[0],l.y0,m[1]],[p[0],l.y0,p[1]],[p[0],l.y1,p[1]],[m[0],l.y1,m[1]],ts,[y,(l.y0+l.y1)/2,_])}}const a=$n(new zn({vertexColors:!0}),i,{key:"p2p-structure",color:`
      {
        float streak = p2pNoise(vec2(vWorld.x * 0.9 + vWorld.z * 0.7, vWorld.y * 0.08)) * p2pNoise(vec2(vWorld.x * 3.1 - vWorld.z * 2.3, vWorld.y * 0.4));
        diffuseColor.rgb *= 0.86 + 0.22 * p2pNoise(vWorld.xz * 0.35 + vWorld.y * 0.2) - 0.18 * streak;
      }`}),o=new vt(s.geometry(),a);if(o.castShadow=!0,o.receiveShadow=!0,o.name="decks and piers",n.add(o),r.pos.length){const l=new bn({vertexColors:!0,vertexShader:`
        attribute vec2 aWay; varying vec2 vWay; varying vec3 vCol; varying float vFogDepth;
        void main() {
          vWay = aWay; vCol = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec2 vWay; varying vec3 vCol; varying float vFogDepth;
        void main() {
          vec3 c = vCol;
          float along = vWay.x, up = vWay.y;
          if (up < 1.5) {
            // the walls: tiles 0.3 by 0.15 in courses, grout, grime up from the road
            vec2 t = vec2(along / 0.3, up * 5.6 / 0.15);
            t.x += floor(t.y) * 0.5;
            vec2 f = abs(fract(t) - 0.5);
            float grout = step(0.46, max(f.x * 1.0, f.y));
            c *= 1.0 - 0.28 * grout;
            c *= mix(0.55, 1.0, smoothstep(0.0, 0.35, up));
            // the lamps' light along the wall, brighter near the roof
            float pool = 0.6 + 0.4 * cos(along / 6.0 * 6.2831853);
            c *= 0.45 + 0.55 * pool * (0.6 + 0.4 * up);
          } else {
            // the roof: dark, and the lamps in a row down its middle
            float across = abs(up - 2.5);
            float lamp = step(across, 0.07) * step(abs(fract(along / 6.0) - 0.5), 0.18);
            c = mix(c * 0.6, vec3(3.2, 2.9, 2.2), lamp);
          }
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),c=new vt(r.geometry(),l);c.name="tunnels",n.add(c)}return n.name="structures",{group:n,count:{decks:t.filter(l=>l.k==="deck").length,tunnels:t.filter(l=>l.k==="tunnel").length,piers:i.piers?.length??0}}}const Os=3.2;function av(i){const e=new Map;for(const t of i.fronts??[])e.set(t.b*4096+t.e,t);return(t,n)=>e.get(t*4096+n)}const Sc={furniture:{wall:14273976,floor:9071178},cafe:{wall:13219738,floor:6115656},grocer:{wall:14672854,floor:10132628},restaurant:{wall:12159082,floor:4864560},bar:{wall:4865850,floor:3024418},shop:{wall:15131354,floor:11049606},bank:{wall:14078920,floor:8223346},hotel:{wall:13351066,floor:7028536},salon:{wall:15259862,floor:9407882},clinic:{wall:15002606,floor:10465460},gallery:{wall:15790058,floor:8026744},studio:{wall:14341836,floor:9072466},office:{wall:13619924,floor:6251624}},wc=360,Ua=1.6;class ov{constructor(e,t){this.page=e;const n=e.fronts??[],s=new hs(400);for(const u of n){const d=Sc[u.k]??Sc.furniture,v=Js(d.wall),g=Js(d.floor),[m,p]=u.p0,[y,_]=u.p1,x=-u.n[0]*u.d,M=-u.n[1]*u.d,E=ss(),R=(O,P)=>E.at(O,P)+.03,F=R(m,p),S=R(y,_),w=R(y+x,_+M),C=R(m+x,p+M),z=u.y+Os+.35,H=s.bin((m+y)/2,(p+_)/2),N=(O,P,U)=>{const A=O.map(([G,k,K],ee)=>$r(H,G,k,K,0,1,0,P[0]*U[ee],P[1]*U[ee],P[2]*U[ee]));H.idx.push(A[0],A[1],A[2],A[0],A[2],A[3])};N([[m,F,p],[y,S,_],[y+x,w,_+M],[m+x,C,p+M]],g,[1,1,.7,.7]),N([[m,z,p],[y,z,_],[y+x,z,_+M],[m+x,z,p+M]],v,[.8,.8,.5,.5]),N([[m+x,C,p+M],[y+x,w,_+M],[y+x,z,_+M],[m+x,z,p+M]],v,[.7,.7,.55,.55]),N([[m,F,p],[m+x,C,p+M],[m+x,z,p+M],[m,z,p]],v,[.95,.7,.55,.8]),N([[y,S,_],[y+x,w,_+M],[y+x,z,_+M],[y,z,_]],v,[.95,.7,.55,.8])}const r=s.build(new qs({vertexColors:!0,side:Xt}));this.group.add(r);for(const u of r.children){const d=u.geometry.boundingSphere.center;this.cells.push({mesh:u,x:d.x,z:d.z})}const a=new mi(1,1),o=new Ss({color:2372412,metalness:.85,roughness:.08,envMap:t,envMapIntensity:1.2,transparent:!0,opacity:.5,side:Xt,depthWrite:!1}),l=new Map;n.forEach((u,d)=>{const v=`${Math.floor(u.p0[0]/400)}_${Math.floor(u.p0[1]/400)}`;let g=l.get(v);g||l.set(v,g=[]),g.push(d)});const c=new qt,h=new B,f=new B;for(const u of l.values()){const d=new $s(a,o,u.length);u.forEach((v,g)=>{const m=n[v],p=Math.hypot(m.p1[0]-m.p0[0],m.p1[1]-m.p0[1]);c.setFromUnitVectors(new B(0,0,1),new B(m.n[0],0,m.n[1]));const y=Math.min(m.y,ss().at(m.p0[0],m.p0[1]),ss().at(m.p1[0],m.p1[1])),_=m.y+Os-y;f.set((m.p0[0]+m.p1[0])/2+m.n[0]*.04,y+_/2,(m.p0[1]+m.p1[1])/2+m.n[1]*.04),d.setMatrixAt(g,this.m.compose(f,c,h.set(p,_,1))),this.glass[v]={mesh:d,slot:g}}),d.instanceMatrix.needsUpdate=!0,d.computeBoundingSphere(),d.matrixAutoUpdate=!1,this.group.add(d),this.cells.push({mesh:d,x:d.boundingSphere.center.x,z:d.boundingSphere.center.z})}this.shards=new $s(new mi(1,1),new qs({color:13625070,transparent:!0,opacity:.75,side:Xt,depthWrite:!1}),wc),this.shards.count=0,this.shards.frustumCulled=!1,this.group.add(this.shards)}group=new $t;glass=[];cells=[];shards;live=[];broken=new Set;m=new ut;shatter(e,t){const n=this.page.fronts?.[e],s=this.glass[e];if(!n||!s||this.broken.has(e))return;this.broken.add(e),s.mesh.getMatrixAt(s.slot,this.m),s.mesh.setMatrixAt(s.slot,this.m.makeScale(0,0,0)),s.mesh.instanceMatrix.needsUpdate=!0;const r=Math.hypot(n.p1[0]-n.p0[0],n.p1[1]-n.p0[1]);for(let a=0;a<90&&this.live.length<wc;a++){const o=Math.random(),l=Math.random()*Os,c=-(.25+Math.random()*.6)*Math.min(18,t);this.live.push({p:new B(n.p0[0]+(n.p1[0]-n.p0[0])*o,n.y+l,n.p0[1]+(n.p1[1]-n.p0[1])*o),v:new B(n.n[0]*c+(Math.random()-.5)*4,1+Math.random()*3,n.n[1]*c+(Math.random()-.5)*4),spin:new B(Math.random()*12-6,Math.random()*12-6,Math.random()*12-6),rot:new wn(Math.random()*6,Math.random()*6,0),age:0,size:.08+Math.random()*.22+(r>8?.05:0)})}}reset(){const e=this.page.fronts??[],t=new qt,n=new B,s=new B;for(const r of this.broken){const a=e[r],o=this.glass[r],l=Math.hypot(a.p1[0]-a.p0[0],a.p1[1]-a.p0[1]);t.setFromUnitVectors(new B(0,0,1),new B(a.n[0],0,a.n[1]));const c=Math.min(a.y,ss().at(a.p0[0],a.p0[1]),ss().at(a.p1[0],a.p1[1])),h=a.y+Os-c;s.set((a.p0[0]+a.p1[0])/2+a.n[0]*.04,c+h/2,(a.p0[1]+a.p1[1])/2+a.n[1]*.04),o.mesh.setMatrixAt(o.slot,this.m.compose(s,t,n.set(l,h,1))),o.mesh.instanceMatrix.needsUpdate=!0}this.broken.clear(),this.live.length=0,this.shards.count=0}update(e,t){for(const r of this.cells)r.mesh.visible=Math.hypot(r.x-t.x,r.z-t.z)<700;if(!this.live.length&&!this.shards.count)return;const n=new qt,s=new B;this.live=this.live.filter(r=>(r.age+=e)<Ua),this.live.forEach((r,a)=>{r.v.y-=9.81*e,r.p.addScaledVector(r.v,e);const o=this.floorAt(r.p);r.p.y<o&&(r.p.y=o,r.v.set(r.v.x*.4,0,r.v.z*.4),r.spin.multiplyScalar(.2)),r.rot.x+=r.spin.x*e,r.rot.y+=r.spin.y*e,r.rot.z+=r.spin.z*e;const l=Math.min(1,(Ua-r.age)/(Ua/3));this.shards.setMatrixAt(a,this.m.compose(r.p,n.setFromEuler(r.rot),s.setScalar(r.size*l)))}),this.shards.count=this.live.length,this.shards.instanceMatrix.needsUpdate=!0}floorAt(e){let t=-1e9;for(const n of this.broken){const s=this.page.fronts[n];Math.abs(s.p0[0]-e.x)<30&&Math.abs(s.p0[1]-e.z)<30&&(t=Math.max(t,s.y+.05))}return t}}const lv=`
  attribute vec4 aux; attribute vec4 ext;
  varying vec4 vAux; flat varying vec4 vExt; varying vec3 vWallN;`,cv="vAux = aux; vExt = ext; vWallN = normal;",hv=`
  varying vec4 vAux; flat varying vec4 vExt; varying vec3 vWallN;
  // An opening set back 'depth' into the wall. p: metres within its cell; lo..hi: the hole;
  // lean: how far a thing slides sideways and up per metre it is set back, from where the eye is.
  // Adds what of the pixel is the glass at the back and what is the side of the hole,
  // and turns the normal to face the way that side faces.
  void p2pOpen(vec2 p, vec2 lo, vec2 hi, float depth, vec2 lean, vec2 fw, vec3 T, inout float glass, inout float reveal, inout vec3 n, inout vec2 pane, inout vec2 paneSize) {
    float open = p2pBox(p, lo, hi, fw);
    vec2 q = p - depth * lean;
    float back = p2pBox(q, lo, hi, fw);
    vec2 over = max(lo - q, q - hi);
    vec3 side = over.x > over.y ? (q.x < lo.x ? T : -T) : (q.y < lo.y ? vec3(0.0, 1.0, 0.0) : vec3(0.0, -1.0, 0.0));
    float r = open * (1.0 - back);
    n = mix(n, side, step(0.5, r));
    if (open * back > glass) { pane = q - lo; paneSize = hi - lo; }
    glass = max(glass, open * back); reveal = max(reveal, r);
  }`,fv=`
  vec3 p2pN = normalize(vWallN);     // the normal the lights use: turned where the wall is modelled in or out
  float p2pGlass = 0.0;              // how much of the pixel is glass
  float p2pMirror = 0.5;             // how much of a mirror that glass is
  vec3 p2pPaneTilt = vec3(0.0);      // no two panes are quite parallel
  float p2pUp = 0.0;                 // metres above the ground at this wall's foot
  vec3 p2pGlow = vec3(0.0);          // light from inside, through the glass
  {
    // every derivative, here, outside any branch
    vec2 fwp = vec2(fwidth(vAux.x), fwidth(vWorld.y));
    float fwAuxY = fwidth(vAux.y);
    float fw = max(fwp.x, fwp.y);
    float style = floor(vExt.x + 0.0001), seed = fract(vExt.x);
    float flags = floor(vExt.y + 0.5), front = mod(flags, 2.0), gk = mod(floor(flags * 0.5), 4.0), spire = mod(floor(flags / 8.0), 2.0), built = step(15.5, flags);
    float slope = vExt.z, datum = vExt.w;
    float u = vAux.x, gHere = vAux.y, len = vAux.z, roofY = vAux.w;
    vec3 N = normalize(vWallN);
    vec3 T = normalize(vec3(N.z, 0.0, -N.x) + vec3(1e-5, 0.0, 0.0));
    vec3 toEye = normalize(cameraPosition - vWorld);
    vec2 lean = vec2(dot(toEye, T), toEye.y) / max(dot(toEye, N), 0.14);
    vec3 body = diffuseColor.rgb, col = body;
    float sharp = 1.0 - smoothstep(0.45, 1.25, fw);     // windows are still windows
    float fine = 1.0 - smoothstep(0.012, 0.05, fw);     // bricks, boards and joints are still there
    float mid = 1.0 - smoothstep(0.06, 0.22, fw);       // mouldings, signs
    p2pUp = vWorld.y - gHere;
    vec2 wp = vec2(u, vWorld.y);                         // the wall as a sheet of paper

    if (style < -0.5) {
      // ---- a roof: tar and gravel, patched, with the odd vent
      float n1 = p2pNoise(vWorld.xz * 0.5 + seed * 20.0), n2 = p2pNoise(vWorld.xz * 6.0);
      col *= 0.86 + 0.22 * n1 + 0.12 * (n2 - 0.5) * mid;
      vec2 cell = floor(vWorld.xz / 5.0), cf = fract(vWorld.xz / 5.0) * 5.0;
      vec2 ch = p2pHash2(cell + seed * 17.0);
      float vent = p2pBox(cf, vec2(1.6) + ch * 1.4, vec2(2.3) + ch * 1.9, vec2(fw)) * step(0.72, p2pHash(cell + 3.1)) * mid;
      col = mix(col, vec3(0.42, 0.44, 0.46) * (0.6 + 0.8 * ch.x), vent);
    } else if (style > 7.5) {
      // ---- what is built out from a wall or up from a roof
      if (style < 8.5) {
        // an awning: cloth, striped on some, its underside in its own shade
        float stripes = step(0.55, seed) * step(0.5, fract(u / 0.42)) * mid;
        col = mix(col, vec3(0.86, 0.84, 0.78), stripes * step(vAux.y, 3.5));
        col *= vAux.y > 3.5 ? 0.45 : 1.0 - 0.12 * p2pNoise(wp * 3.0);
      } else if (style < 9.5) {
        // a cornice: brackets under its face
        float face = step(vAux.y, 1.5), under = step(1.5, vAux.y) * step(vAux.y, 3.5);
        float bracket = p2pSpan(fract(u / 0.62) * 0.62, 0.0, 0.2, fwp.x) * mid;
        col *= 1.0 - under * 0.25 - bracket * face * step(vAux.y, 0.55) * 0.3;
        col *= 1.0 - p2pLine(vAux.y - 0.62, 0.035, fwAuxY) * face * 0.3 * mid;
      } else if (style < 10.5) {
        // a plant room: louvres
        col *= 0.9 + 0.1 * p2pNoise(wp * 0.7);
        col *= 1.0 - step(0.5, fract(vAux.y / 0.22)) * 0.22 * fine * step(0.3, seed);
      } else {
        // a hanging sign: a border, and marks down it that say nothing (aux: metres across, metres up, its width, its height)
        vec2 sp = vAux.xy, ss = vAux.zw, fs = vec2(fwp.x, fwAuxY);
        vec3 ink = dot(col, vec3(0.33)) > 0.25 ? vec3(0.06, 0.05, 0.05) : vec3(0.86, 0.80, 0.62);
        float border = 1.0 - p2pBox(sp, vec2(0.05), ss - 0.05, fs);
        float rows = floor(ss.y / 0.36);
        vec2 mc = vec2((sp.x - ss.x * 0.5) / 0.30, (sp.y - (ss.y - rows * 0.36) * 0.5) / 0.36);
        float marks = step(abs(mc.x), 0.5) * step(0.0, mc.y) * step(mc.y, rows) * p2pBox(fract(mc + vec2(0.5, 0.0)), vec2(0.18, 0.16), vec2(0.82, 0.84), fs / vec2(0.30, 0.36)) * step(0.2, p2pHash(vec2(floor(mc.y), seed * 77.0)));
        col = mix(col, ink, max(border * 0.8, marks) * mid);
        p2pGlow = col * 0.10;
      }
    } else {
      // ---- a wall. First what kind of building it is a wall of.
      float floorH = 3.2, groundH = 3.9, bayW = 3.4, depth = 0.16, cap = 0.8, lot = 0.0, sparse = 0.0;
      vec2 wlo = vec2(0.24, 0.27), whi = vec2(0.76, 0.84);
      vec3 trim = vec3(0.78, 0.76, 0.70);
      vec3 tint = vec3(0.030, 0.038, 0.045);
      float lotted = step(style, 1.5) * front * step(4.4, len);   // houses and flats: a bay and an entry to each lot
      if (style < 0.5) {
        floorH = 3.3; groundH = 2.75; depth = 0.12; cap = 1.05;
        trim = mix(vec3(0.84, 0.83, 0.78), body * 0.42, step(0.85, p2pHash1(seed * 91.0)));
      } else if (style < 1.5) {
        floorH = 3.05; groundH = 2.75; depth = 0.14; cap = 0.75;
        trim = mix(body * 1.18 + 0.03, vec3(0.80, 0.78, 0.72), 0.4);
      } else if (style < 2.5) {
        floorH = 3.7; groundH = 4.2; bayW = 3.0; depth = 0.26; cap = 1.4; wlo = vec2(0.25, 0.20); whi = vec2(0.75, 0.80);
        trim = mix(body * 1.2 + 0.04, vec3(0.62, 0.58, 0.50), 0.55);
      } else if (style < 3.5) {
        floorH = 3.8; groundH = 5.2; bayW = 1.6; depth = 0.10; cap = 1.8; wlo = vec2(0.0, 0.33); whi = vec2(1.0, 0.86);
        tint = mix(vec3(0.02, 0.055, 0.06), vec3(0.055, 0.04, 0.025), step(0.5, p2pHash1(seed * 13.0))); p2pMirror = 0.72;
      } else if (style < 4.5) {
        floorH = 3.9; groundH = 6.0; bayW = 1.5; depth = 0.05; cap = 0.9; wlo = vec2(0.03, 0.0); whi = vec2(0.97, 1.0);
        tint = mix(vec3(0.015, 0.04, 0.055), vec3(0.03, 0.045, 0.04), p2pHash1(seed * 7.0)); p2pMirror = 0.9;
      } else if (style < 5.5) {
        floorH = 3.7; groundH = 5.5; bayW = 2.15; depth = 0.42; cap = 1.4; wlo = vec2(0.20, 0.22); whi = vec2(0.80, 0.84);
        trim = body * 1.06; p2pMirror = 0.6;
      } else {
        floorH = 5.2; groundH = 4.6; bayW = 6.5; depth = 0.12; cap = 0.45; wlo = vec2(0.22, 0.48); whi = vec2(0.78, 0.80);
      }
      if (lotted > 0.5) { bayW = 7.6; lot = 1.0; wlo = vec2(0.25, 0.24); whi = vec2(0.75, 0.83); } else if (style < 1.5) { sparse = 0.55; }
      if (front < 0.5 && style < 2.5) sparse = max(sparse, 0.5);     // side and back walls: few windows
      if (gk > 0.5 && gk < 1.5) groundH = max(groundH, 4.15);        // a shop is taller than a garage

      // modules along the wall, floors up it
      float nb = max(1.0, floor(len / bayW + 0.5)), bw = len / nb;
      float mi = min(floor(u / bw), nb - 1.0), mx = u - mi * bw;
      float gLot = gHere + slope * ((mi + 0.5) * bw - u);            // the ground at the middle of this lot
      float base = mix(datum, gLot, lot);
      float y = vWorld.y - base, tall = roofY - base;
      float nF = max(0.0, floor((tall - groundH - cap) / floorH + 0.35));
      float fH = nF > 0.5 ? (tall - groundH - cap) / nF : floorH;
      float fl = (y - groundH) / fH, fi = floor(fl), fy = (fl - fi) * fH;
      float upper = step(groundH, y) * step(fi, nF - 0.5);
      float capZone = step(tall - cap, y);
      float wseed = p2pHash(vec2(mi, fi) + seed * 61.0);

      // ---- the wall's own surface
      float streaks = smoothstep(0.5, 0.9, p2pNoise(vec2(u * 2.3 + seed * 30.0, vWorld.y * 0.11)));
      col *= 0.95 + 0.10 * p2pNoise(wp * 0.35 + seed * 9.0) - 0.07 * streaks;
      if (style < 0.5) {
        // painted boards
        col *= 1.0 - p2pLine(fract(vWorld.y / 0.15) * 0.15 - 0.075, 0.011, fwp.y) * 0.26 * fine;
      } else if (style < 1.5) {
        col *= 0.96 + 0.08 * p2pNoise(wp * 9.0) * fine;
      } else if (style < 2.5) {
        // brick where the wall is red or buff, cut stone where it is pale
        float pale = step(0.34, body.b);
        vec2 unit = mix(vec2(0.22, 0.075), vec2(0.9, 0.42), pale);
        float row = floor(vWorld.y / unit.y);
        vec2 bc = vec2(u / unit.x + 0.5 * mod(row, 2.0), vWorld.y / unit.y);
        float joint = max(p2pLine((0.5 - abs(fract(bc.x) - 0.5)) * unit.x, 0.006, fwp.x), p2pLine((0.5 - abs(fract(bc.y) - 0.5)) * unit.y, 0.006, fwp.y));
        float each = p2pHash(floor(bc) + seed * 5.0);
        float unitFade = mix(fine, mid, pale);
        col *= 1.0 + (each - 0.5) * 0.22 * unitFade;
        col = mix(col, mix(vec3(0.62, 0.59, 0.54), col * 0.7, pale), joint * 0.75 * unitFade);
      } else if (style < 3.5) {
        col *= 0.97 + 0.05 * p2pNoise(wp * vec2(7.0, 0.6)) * mid;
      } else if (style > 4.5 && style < 5.5) {
        col *= 0.96 + 0.07 * p2pNoise(wp * 4.0) * mid;
      } else if (style > 5.5) {
        // a shed: ribbed sheet or blockwork
        col *= 1.0 - step(0.5, fract(u / 0.3)) * 0.07 * fine * step(0.5, seed);
      }

      float glass = 0.0, reveal = 0.0, frame = 0.0, blind = 0.0;
      vec2 pane = vec2(0.0), paneSize = vec2(1.0);
      vec3 revealCol = body * 0.9;
      float doorKind = 0.0;                                    // 1: a door leaf fills the opening, 2: a garage door, 3: a shop's glass
      float unitId = mi;                                       // which lot or shop this is, for what differs from one to the next

      // ---- the storeys above the ground floor
      if (upper > 0.5 && spire < 0.5) {
        vec2 p = vec2(mx, fy), lo = wlo * vec2(bw, fH), hi = whi * vec2(bw, fH);
        float has = 1.0;
        if (lotted > 0.5) {
          // a lot: the bay's three faces, each with a window, then the window over the entry
          float k = bw / 7.6, x = mx / k;
          float b0 = 0.7, b1 = 1.45, b2 = 3.55, b3 = 4.3;
          float inBay = step(b0, x) * step(x, b3);
          float facet = x < b1 ? -1.0 : x > b2 ? 1.0 : 0.0;
          // where the bay is not built (far off) its faces are painted: the normal turned, and a
          // line of shade where it meets the wall on the side away from the sun
          p2pN = normalize(N + T * facet * inBay * 0.95 * (1.0 - built));
          col *= 1.0 - (p2pSpan(x, b3, b3 + 0.35, fwp.x / k) * 0.30 * step(0.0, dot(T, P2P_SUN)) + p2pSpan(x, b0 - 0.35, b0, fwp.x / k) * 0.30 * step(dot(T, P2P_SUN), 0.0)) * (1.0 - built);
          col = mix(col, trim, (p2pLine(x - b1, 0.06, fwp.x / k) + p2pLine(x - b2, 0.06, fwp.x / k)) * inBay * mid);
          float yl = 0.78, yh = min(fH - 0.5, 2.75);
          if (x < b1) { lo = vec2(b0 + 0.14, yl); hi = vec2(b1 - 0.12, yh); }
          else if (x < b2) { lo = vec2(b1 + 0.24, yl); hi = vec2(b2 - 0.24, yh); }
          else if (x < b3) { lo = vec2(b2 + 0.12, yl); hi = vec2(b3 - 0.14, yh); }
          else { lo = vec2(5.25, yl); hi = vec2(6.35, yh); }
          // the first floor's entry is a door at the head of the steps
          if (fi < 0.5 && x >= b3) { lo = vec2(5.2, 0.0); hi = vec2(6.3, 2.3); doorKind = 1.0; }
          lo.x *= k; hi.x *= k;
        } else {
          has = step(sparse, wseed);
          // offices: a column cover every fourth module stands in front of the glass
          if (style > 2.5 && style < 3.5 && mod(mi, 4.0) < 0.5) has = 0.0;
        }
        if (has > 0.5) {
          p2pOpen(p, lo, hi, doorKind > 0.5 ? 0.35 : depth, lean, fwp, T, glass, reveal, p2pN, pane, paneSize);
          // what frames the hole: a sill that catches the light, a head, casings, and what runs down from the sill's ends
          float surround = step(style, 2.5) + step(4.5, style) * step(style, 5.5);
          float sill = p2pBox(p, vec2(lo.x - 0.10, lo.y - 0.13), vec2(hi.x + 0.10, lo.y), fwp) * surround * (1.0 - step(0.5, doorKind));
          float head = p2pBox(p, vec2(lo.x - 0.12, hi.y), vec2(hi.x + 0.12, hi.y + (style < 0.5 ? 0.30 : 0.18)), fwp) * step(style, 2.5);
          float casing = p2pBox(p, lo - vec2(0.11, 0.0), hi + vec2(0.11, 0.0), fwp) * step(style, 1.5) * (1.0 - glass - reveal);
          col = mix(col, trim, max(max(sill, head), casing) * mid);
          if (sill * mid > 0.5) p2pN = normalize(N + vec3(0.0, 0.9, 0.0));
          col *= 1.0 - p2pBox(p, vec2(lo.x - 0.08, lo.y - 0.26), vec2(hi.x + 0.08, lo.y - 0.13), fwp) * 0.32 * surround * mid;
          float drip = (p2pLine(p.x - lo.x, 0.09, fwp.x) + p2pLine(p.x - hi.x, 0.09, fwp.x)) * step(p.y, lo.y - 0.2) * smoothstep(lo.y - 1.6, lo.y - 0.2, p.y);
          col *= 1.0 - drip * 0.10 * surround * mid;
          revealCol = mix(body * 0.92, trim * 0.9, step(style, 1.5));
        }
        // between storeys
        if (style > 1.5 && style < 2.5) {
          // a belt course, and its shade
          col = mix(col, trim, p2pSpan(fy, 0.0, 0.20, fwp.y) * mid * step(mod(fi, 3.0), 0.5));
          col *= 1.0 - p2pSpan(fy, fH - 0.10, fH, fwp.y) * 0.25 * mid * step(mod(fi + 1.0, 3.0), 0.5);
          // piers between the windows
          col *= 1.0 + p2pLine(mx, 0.22, fwp.x) * 0.06 + p2pLine(mx - bw, 0.22, fwp.x) * 0.06;
        } else if (style > 2.5 && style < 3.5) {
          col *= 1.0 - p2pLine(fy - 0.06, 0.02, fwp.y) * 0.3 * mid;      // the spandrel's joint
          col *= 1.0 - p2pLine(mx, 0.012, fwp.x) * 0.25 * fine;
        } else if (style > 3.5 && style < 4.5) {
          // the band of blind glass in front of each floor's edge
          float spandrel = p2pSpan(fy, 0.0, 0.95, fwp.y);
          tint = mix(tint, tint * 0.55 + vec3(0.012, 0.016, 0.018), spandrel);
          p2pMirror *= 1.0 - spandrel * 0.25;
          frame = max(frame, max(p2pLine(fy, 0.03, fwp.y), p2pLine(fy - 0.95, 0.025, fwp.y)) * mid);
        } else if (style > 4.5 && style < 5.5) {
          col *= 1.0 - (p2pLine(fy, 0.012, fwp.y) + p2pLine(mx, 0.012, fwp.x)) * 0.35 * fine;   // the panels' joints
        } else if (style < 0.5) {
          col = mix(col, trim, p2pSpan(fy, 0.0, 0.16, fwp.y) * mid * 0.85);
          col *= 1.0 - p2pSpan(fy, fH - 0.07, fH, fwp.y) * 0.18 * mid;
        }
      }

      // ---- the top: a cornice with its shade under it, or a tower's plant screen
      if (capZone > 0.5) {
        float cy = y - (tall - cap);
        if (style < 2.5) {
          col = trim * (0.95 + 0.05 * p2pNoise(wp * 2.0));
          float bracket = p2pSpan(fract(u / 0.62) * 0.62, 0.0, 0.22, fwp.x) * p2pSpan(cy, cap * 0.25, cap * 0.75, fwp.y) * mid;
          col *= 1.0 - bracket * 0.28 - p2pLine(cy - cap * 0.22, 0.03, fwp.y) * 0.3 * mid;
          if (cy > cap * 0.25 && cy < cap * 0.75) p2pN = normalize(N + vec3(0.0, -0.55, 0.0));
        } else {
          col *= 0.86;
          col *= 1.0 - step(0.5, fract(u / 0.45)) * 0.10 * fine;
        }
      } else if (style < 2.5) {
        col *= 1.0 - (1.0 - smoothstep(0.0, 0.7, tall - cap - y)) * 0.30 * step(0.0, tall - cap - y);
      }
      if (spire > 0.5 && y > tall * 0.76) {
        // the Pyramid's point: bare metal panels
        col = vec3(0.62, 0.64, 0.66) * (0.94 + 0.06 * p2pNoise(wp * 0.4));
        col *= 1.0 - p2pLine(fract(vWorld.y / 3.6) * 3.6 - 1.8, 0.03, fwp.y) * 0.25 * mid;
        glass = 0.0; reveal = 0.0;
      }

      // ---- the ground floor
      if (y < groundH && upper < 0.5) {
        // shops and garages stand on the ground under their own middle, whatever the building's datum
        float ns = max(1.0, floor(len / 5.5 + 0.5)), sw = lot > 0.5 ? bw : len / ns;
        float si = lot > 0.5 ? mi : min(floor(u / sw), ns - 1.0), sx = u - si * sw;
        float gy = vWorld.y - (gHere + slope * ((si + 0.5) * sw - u));
        unitId = si;
        vec2 p = vec2(sx, gy);
        vec2 sh = p2pHash2(vec2(si, seed * 37.0) + 2.0);
        if (gk > 0.5 && gk < 1.5) {
          // a shop: bulkhead, glass, a door set back, a sign band over them, piers between
          float shopTop = 2.85;
          vec3 accent = 0.5 + 0.5 * cos(6.2832 * (sh.x * 0.9 + vec3(0.0, 0.33, 0.67)));
          accent = mix(accent * 0.5, vec3(0.16, 0.15, 0.14), step(0.45, sh.y)) + 0.03;
          float bulk = p2pBox(p, vec2(0.32, 0.0), vec2(sw - 0.32, 0.5), fwp);
          col = mix(col, accent * 0.8 * (1.0 - 0.5 * step(0.5, fract(sx / 0.3)) * step(0.7, sh.y) * fine), bulk * mid);
          float sign = p2pBox(p, vec2(0.25, 3.0), vec2(sw - 0.25, 3.75), fwp);
          vec3 signCol = mix(accent, vec3(0.82, 0.80, 0.72), step(0.6, sh.x));
          // lettering that says nothing: a row of marks
          vec2 lc = vec2((sx - sw * 0.5) / 0.26, (gy - 3.2) / 0.34);
          float letters = step(abs(lc.x), sw * 1.1) * step(0.0, lc.y) * step(lc.y, 1.0) * step(0.28, p2pHash(vec2(floor(lc.x), si + seed * 99.0))) * p2pBox(fract(lc), vec2(0.15, 0.1), vec2(0.85, 0.9), fwp / vec2(0.26, 0.34));
          signCol = mix(signCol, dot(signCol, vec3(0.33)) > 0.4 ? vec3(0.08) : vec3(0.88, 0.85, 0.75), letters * mid);
          col = mix(col, signCol, sign * mid);
          col *= 1.0 - p2pSpan(gy, 2.86, 3.0, fwp.y) * 0.35 * mid;                       // the head of the shopfront, in shade
          col = mix(col, trim, p2pSpan(gy, 3.78, 3.98, fwp.y) * mid * step(style, 2.5));   // the course over the shops
          col *= 1.0 - p2pSpan(gy, 3.66, 3.78, fwp.y) * 0.25 * mid;
          vec2 lo = vec2(0.42, 0.5), hi = vec2(sw - 0.42, shopTop);
          p2pOpen(p, lo, hi, 0.30, lean, fwp, T, glass, reveal, p2pN, pane, paneSize);
          doorKind = 3.0; revealCol = accent * 0.7;
        } else if (gk > 1.5 && gk < 2.5) {
          // a house: the garage under the bay, the steps to the door beside it
          float k = sw / 7.6, x = sx / k;
          vec2 lo = vec2(1.0, 0.0), hi = vec2(3.9, min(2.25, groundH - 0.3));
          if (x > 4.3) {
            // the way in: an alcove a metre deep with the steps climbing inside it, behind an iron gate
            lo = vec2(4.95 * k, 0.0); hi = vec2(6.35 * k, min(2.45, groundH - 0.2));
            p2pOpen(p, lo, hi, 1.1, lean, fwp, T, glass, reveal, p2pN, pane, paneSize);
            doorKind = 4.0; revealCol = body * 0.62;
          } else {
            lo.x *= k; hi.x *= k;
            p2pOpen(p, lo, hi, 0.16, lean, fwp, T, glass, reveal, p2pN, pane, paneSize);
            doorKind = 2.0; revealCol = body * 0.8;
          }
          col *= 1.0 - (1.0 - step(0.35, gy)) * 0.12;       // a base course, scuffed
        } else if (gk > 2.5) {
          // a tower's lobby: tall glass between piers, a canopy's line over it
          float px = fract(u / 6.2) * 6.2;
          vec2 q = vec2(px, gy);
          p2pOpen(q, vec2(0.75, 0.25), vec2(6.2, groundH - 1.25), 0.5, lean, fwp, T, glass, reveal, p2pN, pane, paneSize);
          col = mix(col * 0.8, vec3(0.10, 0.10, 0.11), p2pSpan(gy, groundH - 1.2, groundH - 0.85, fwp.y) * mid);
          doorKind = 3.0; revealCol = body * 0.6; tint *= 0.7;
        } else {
          col *= 1.0 - (1.0 - step(0.5, gy)) * 0.14;
        }
        col = mix(col, vec3(0.30, 0.29, 0.27), 1.0 - step(0.0, gy));    // under the ground line: footing
      }

      // ---- what is in an opening
      float sashes = 0.0;
      vec2 fwq = fwp;
      if (doorKind < 0.5) {
        // a window: its frame, and a rail where the sashes meet
        float fr = style > 2.5 && style < 4.5 ? 0.035 : 0.06;
        frame = max(frame, (1.0 - p2pBox(pane, vec2(fr), paneSize - fr, fwq)) * mid);
        sashes = p2pLine(pane.y - paneSize.y * 0.5, 0.03, fwq.y) * step(style, 2.5);
        sashes = max(sashes, p2pLine(pane.x - paneSize.x * 0.5, 0.025, fwq.x) * step(1.7, paneSize.x) * step(style, 2.5));
        frame = max(frame, sashes * mid);
        // a blind drawn part of the way, or a curtain
        float bs = p2pHash(vec2(mi, fi) * 1.7 + seed * 23.0);
        blind = step(0.5, bs) * step((1.0 - (bs - 0.5) * 1.6) * paneSize.y, pane.y) * step(style, 2.5);
        blind = max(blind, step(bs, 0.12) * step(abs(pane.x / paneSize.x - 0.5), 0.5) * step(0.32, abs(pane.x / paneSize.x - 0.5)) * step(style, 2.5));
        blind = max(blind, step(0.62, bs) * step(paneSize.y * (0.35 + 0.5 * p2pHash1(bs * 31.0)), pane.y) * step(2.5, style) * step(style, 3.5));
      } else if (doorKind < 1.5) {
        // a front door: a painted leaf with panels, a strip of glass over it
        vec3 leaf = 0.5 + 0.5 * cos(6.2832 * (seed * 3.0 + vec3(0.0, 0.3, 0.6)));
        leaf = mix(leaf * 0.35, vec3(0.22, 0.13, 0.08), step(0.5, p2pHash1(seed * 57.0)));
        float over = step(paneSize.y - 0.42, pane.y);
        float panels = p2pBox(fract(pane / vec2(paneSize.x * 0.5, 0.95)) * vec2(paneSize.x * 0.5, 0.95), vec2(0.12), vec2(paneSize.x * 0.5 - 0.12, 0.83), fwq);
        col = mix(col, mix(leaf * (0.8 + 0.2 * panels), tint, over), glass);
        frame = max(frame, (1.0 - p2pBox(pane, vec2(0.07), paneSize - 0.07, fwq)) * mid);
        glass *= over;
      } else if (doorKind < 2.5) {
        // a garage door: boards or panels, in a colour of its own
        float gs = p2pHash1(seed * 41.0 + unitId * 3.0);
        vec3 leaf = gs < 0.4 ? vec3(0.78, 0.76, 0.70) : gs < 0.6 ? vec3(0.20, 0.13, 0.08) : gs < 0.8 ? body * 0.55 : vec3(0.12, 0.20, 0.16);
        float rows = p2pLine(fract(pane.y / 0.55) * 0.55 - 0.275, 0.02, fwq.y), cols = p2pLine(fract(pane.x / 0.7) * 0.7 - 0.35, 0.015, fwq.x) * step(0.5, gs);
        col = mix(col, leaf * (1.0 - max(rows, cols) * 0.35 * mid) * (0.9 + 0.1 * p2pNoise(pane * 3.0)), glass);
        glass = 0.0;
      } else if (doorKind > 3.5) {
        // the alcove: steps going up into the dark, and the gate's bars across its mouth
        float tread = step(0.5, fract(pane.y / 0.19)) * step(pane.y, paneSize.y * 0.62);
        vec3 well = mix(vec3(0.05, 0.048, 0.045), vec3(0.20, 0.19, 0.175), tread * (1.0 - pane.y / paneSize.y));
        float bars = p2pLine(fract(u / 0.13) * 0.13 - 0.065, 0.012, fwq.x) * fine * step(0.4, p2pHash1(seed * 19.0 + unitId));
        col = mix(col, mix(well, vec3(0.03), bars), glass);
        glass = 0.0;
      } else {
        // a shop's glass: a door somewhere along it, mullions, and behind it shelves of nothing in particular
        vec2 dh = p2pHash2(vec2(unitId, seed * 71.0));
        float doorX = paneSize.x * (0.15 + 0.6 * dh.x);
        float door = p2pSpan(pane.x, doorX, doorX + 1.0, fwq.x);
        frame = max(frame, (1.0 - p2pBox(pane, vec2(0.05), paneSize - 0.05, fwq)) * mid);
        frame = max(frame, max(p2pLine(pane.x - doorX, 0.035, fwq.x), p2pLine(pane.x - doorX - 1.0, 0.035, fwq.x)) * mid);
        frame = max(frame, p2pLine(pane.y - (paneSize.y - 0.55), 0.03, fwq.y) * mid);
        frame = max(frame, p2pLine(fract(pane.x / 1.9) * 1.9 - 0.95, 0.025, fwq.x) * (1.0 - door) * mid);
        // the inside, a metre and a half back: by the same parallax, so it moves as you pass
        vec2 inq = (pane - 1.3 * lean) * vec2(2.2, 2.6);
        vec3 stock = 0.5 + 0.5 * cos(6.2832 * (p2pHash(floor(inq) + seed * 13.0) + vec3(0.0, 0.33, 0.67)));
        stock = mix(vec3(dot(stock, vec3(0.33))), stock, 0.25) * step(0.5, p2pHash(floor(inq) + 9.0)) * step(0.3, fract(inq.y)) * step(0.15, fract(inq.x)) * (0.4 + 0.6 * p2pHash(floor(inq) + 21.0));
        float lamps = step(0.3, dh.y);          // most shops have their lights on
        if (gk < 1.5) {
          tint = mix(tint, stock * 0.10 + 0.012, 0.8 * (1.0 - door) * mid * (1.0 - smoothstep(0.5, 0.9, pane.y / paneSize.y)));
          p2pGlow = (stock * 0.09 + vec3(0.07, 0.06, 0.045)) * lamps * (1.0 - door * 0.6) * mid;
        } else {
          // a lobby: a lit ceiling far inside, and its lamps
          vec2 lq = (pane - 6.0 * lean) * vec2(0.7, 1.0);
          float ceilLamp = step(0.6, fract(lq.x)) * step(paneSize.y * 0.55, lq.y) * step(lq.y, paneSize.y * 0.62);
          p2pGlow = (vec3(0.16, 0.13, 0.09) * smoothstep(0.0, paneSize.y, pane.y) + vec3(1.2, 1.0, 0.7) * ceilLamp) * step(0.25, dh.y) * mid;
        }
        p2pMirror = 0.35;
      }

      // ---- put the opening into the wall
      vec3 frameCol = style > 2.5 ? mix(body * 0.55, vec3(0.07, 0.075, 0.08), 0.6) : style < 0.5 ? vec3(0.86, 0.85, 0.80) : mix(trim, vec3(0.20, 0.19, 0.18), step(0.6, seed));
      if (style > 3.5 && style < 4.5) frameCol = body;
      vec3 inside = mix(tint, vec3(0.62, 0.60, 0.54) * (0.75 + 0.25 * wseed), blind);
      vec3 hole = mix(inside, frameCol, frame);
      // Far off a window is smaller than a pixel: first the windows of a floor
      // run together into a band, then the bands into the wall's average.
      float widthFrac = (whi.x - wlo.x) * (1.0 - sparse * 0.8);
      float rows = p2pSpan(fy, wlo.y * fH, whi.y * fH, fwp.y);
      float banded = 1.0 - smoothstep(0.3 * fH, 0.85 * fH, fwp.y);
      float farGlass = widthFrac * mix(whi.y - wlo.y, rows, banded) * upper * (1.0 - spire * step(tall * 0.76, y));
      vec3 nearCol = mix(mix(col, revealCol, reveal), hole, glass);
      col = mix(mix(col, tint, farGlass * 0.85), nearCol, sharp);
      p2pGlass = mix(farGlass * 0.85, glass * (1.0 - frame) * (1.0 - blind * 0.8), sharp);
      p2pGlow *= glass * (1.0 - frame) * sharp;
      // each pane a hair out of true, so a wall of glass is a patchwork of sky
      vec2 tilt = p2pHash2(vec2(mi, fi) + seed * 3.0) - 0.5;
      p2pPaneTilt = (T * tilt.x + vec3(0.0, tilt.y, 0.0)) * (style > 2.5 ? 0.035 : 0.06) * sharp;

      // ---- iron: a fire escape down the front of a brick block, a landing at every floor and a ladder between
      if (style > 1.5 && style < 2.5) {
        float em = floor(p2pHash1(seed * 23.0) * max(nb - 1.0, 1.0)), ex = u - em * bw;
        float on = step(0.45, p2pHash1(seed * 29.0)) * front * step(1.5, nb) * upper * step(1.5, nF);
        float inX = p2pSpan(ex, 0.25, 2.0 * bw - 0.25, fwp.x);
        float deck = p2pLine(fy - (wlo.y * fH - 0.12), 0.04, fwp.y);
        float rail = p2pLine(fy - (wlo.y * fH + 0.85), 0.022, fwp.y);
        float bars = p2pLine(fract(ex / 0.14) * 0.14 - 0.07, 0.011, fwp.x) * p2pSpan(fy, wlo.y * fH - 0.12, wlo.y * fH + 0.85, fwp.y) * fine;
        float ladder = p2pLine(ex - (0.5 + (fy / fH) * 1.4), 0.03, fwp.x) + p2pLine(ex - (0.95 + (fy / fH) * 1.4), 0.03, fwp.x);
        float iron = max(max(deck, rail), max(bars, ladder * step(wlo.y * fH - 0.12, fy) * step(fi, nF - 1.5))) * inX * on * mid;
        // and its shadow on the wall, down-sun of it
        float ironShade = p2pLine(fy - (wlo.y * fH - 0.45), 0.10, fwp.y) * p2pSpan(ex - sign(dot(T, P2P_SUN)) * -0.3, 0.25, 2.0 * bw - 0.25, fwp.x) * on * mid;
        col *= 1.0 - ironShade * 0.22;
        col = mix(col, vec3(0.028, 0.028, 0.03), iron);
        p2pGlass *= 1.0 - iron;
      }

      // ---- where the wall meets the street: grime, and less of the sky
      col *= 0.80 + 0.20 * smoothstep(0.0, 1.8, p2pUp);
    }
    diffuseColor.rgb = col;
  }`,uv="normal = normalize( mat3( viewMatrix ) * p2pN );",dv=`
  {
    vec2 sh = p2pShade(vWorld.xz + normalize(vWallN.xz + vec2(1e-5)) * 3.2);
    float inShade = smoothstep(-2.0, 2.0, sh.x - p2pUp) * smoothstep(0.2, 1.2, sh.x);
    reflectedLight.directDiffuse *= mix(1.0 - inShade, 1.0, p2pNear);
    reflectedLight.indirectDiffuse *= mix(0.78, 1.0, smoothstep(0.0, 22.0, p2pUp));
  }`,pv=`
  if (p2pGlass > 0.003) {
    vec3 toEye = normalize(cameraPosition - vWorld);
    vec3 n = normalize(p2pN + p2pPaneTilt);
    vec3 r = reflect(-toEye, n);
    float fres = 0.05 + 0.95 * pow(1.0 - max(dot(toEye, n), 0.0), 5.0);
    float amount = mix(fres, 0.35 + 0.65 * fres, p2pMirror);
    // a mirrored ray that runs along the wall runs down the street, where the sky comes lower
    float along = 1.0 - abs(dot(normalize(r.xz + vec2(1e-5)), normalize(p2pN.xz + vec2(1e-5))));
    float roofs = mix(p2pRoofs(r, p2pUp), 0.05, smoothstep(0.55, 0.95, along));
    float seesSky = smoothstep(roofs - 0.05, roofs + 0.05, r.y);
    vec3 sky = p2pSky(normalize(vec3(r.x, max(r.y, 0.03), r.z)));
    vec3 seen = mix(p2pAcross(r), sky, seesSky);
    float sunward = max(dot(r, P2P_SUN), 0.0);
    seen += vec3(1.0, 0.86, 0.66) * (pow(sunward, 90.0) * 9.0 + pow(sunward, 10.0) * 0.35) * p2pLit * seesSky;
    outgoingLight = mix(outgoingLight, seen, p2pGlass * amount);
  }
  outgoingLight += p2pGlow;`,Ke={ROOF:-1,VICTORIAN:0,STUCCO:1,MASONRY:2,OFFICE:3,GLASS:4,PRECAST:5,SHED:6,AWNING:8,CORNICE:9,ROOFBOX:10,SIGN:11},si={PLAIN:0,SHOP:1,GARAGE:2,LOBBY:3},mv=[15855074,15525590,15260864,15986662,14867920,14672863,15327951,14277846,15788244,15130834,13226944,12570072,14929860,15392686,13620940,14207412,12175055,15322032,13352914,12900556,9084853,11122586,12153690,7314583,5662074,8093554,13607834,14267482],gv=[15722972,15327696,15920868,14998731,14602938,15131610,14277074,15787730,15061944,14080731,15260102,13617597,14730414,13226692,14469542],vv=[9194042,10115652,8011826,12887420,12162923,14273972,13616558,10263188,11578272,11037007,14075554],xv=[12433581,11117980,13223096,9407106,5920338,11906460],_v=[5595242,3752522,7109766,9085098,2896440,5200984],yv=[14209732,13617336,14867920,12564648,14076856],Mv=[11577496,10133664,12760476,9277324,10720387],bc=[8003356,2051386,1914199,2829102,13214247,9059090,4861022,14275264,1006691],Fa=(i,e)=>i[Math.min(i.length-1,Math.floor(e*i.length))],Sv=170,wv=200,bv=[{x:67,z:-136,high:260,shape:"pyramid",style:Ke.PRECAST,color:14472904},{x:-28,z:212,high:237,style:Ke.OFFICE,color:5980216}];class Ev{cells=new Map;size=40;constructor(e){for(const t of e.roads){if(t.b)continue;const n=/^(primary|secondary|tertiary|trunk)$/.test(t.c)?1:/^(residential|unclassified|living_street|pedestrian)$/.test(t.c)?2:t.c==="service"?3:0;if(n)for(let s=0;s+1<t.p.length;s++){const[r,a]=t.p[s],[o,l]=t.p[s+1],c={ax:r,az:a,bx:o,bz:l,reach:t.w/2+(t.s??0),kind:n},h=Math.floor(Math.min(r,o)/this.size),f=Math.floor(Math.max(r,o)/this.size),u=Math.floor(Math.min(a,l)/this.size),d=Math.floor(Math.max(a,l)/this.size);for(let v=h;v<=f;v++)for(let g=u;g<=d;g++){const m=`${v}_${g}`;let p=this.cells.get(m);p||(p=[],this.cells.set(m,p)),p.push(c)}}}}facing(e,t,n,s){let r=0,a=1/0;const o=Math.floor(e/this.size),l=Math.floor(t/this.size);for(let c=o-1;c<=o+1;c++)for(let h=l-1;h<=l+1;h++)for(const f of this.cells.get(`${c}_${h}`)??[]){const u=f.bx-f.ax,d=f.bz-f.az,v=u*u+d*d,g=v>0?Math.max(0,Math.min(1,((e-f.ax)*u+(t-f.az)*d)/v)):0,m=f.ax+u*g-e,p=f.az+d*g-t,y=Math.hypot(m,p);if(y>f.reach+7||m*n+p*s<y*.6)continue;const _=y+(f.kind===3?12:0);_<a&&(a=_,r=f.kind)}return r}}function It(i,e,t,n,s,r,a){const o=i.pos.length/3;for(let y=0;y<4;y++)$r(i,t[y][0],t[y][1],t[y][2],n[0],n[1],n[2],s.r,s.g,s.b),i.aux.push(...r[y]),i.ext.push(...a);const[l,c,h]=[t[0],t[1],t[2]],f=c[0]-l[0],u=c[1]-l[1],d=c[2]-l[2],v=h[0]-l[0],g=h[1]-l[1],m=h[2]-l[2];(u*m-d*g)*n[0]+(d*v-f*m)*n[1]+(f*g-u*v)*n[2]>=0?e.push(o,o+1,o+2,o,o+2,o+3):e.push(o,o+2,o+1,o,o+3,o+2)}function Av(i,e,t){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const[a,o]=i[s],[l,c]=i[r];o>t!=c>t&&e<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n}function Tv(i){const e=ss(),t=new Ev(i),n=av(i),s=new hs(400,4,4),r=new hs(400,4,4),a={walls:0,roofs:0,cornices:0,bays:0,awnings:0,signs:0,boxes:0},o=new We,l=new We,c=new We,h=new We,f={};i.buildings.forEach((_,x)=>{const M=_.r;if(M.length<4)return;let E=0,R=0,F=0,S=1/0,w=0;const C=[];for(let L=0;L+1<M.length;L++){const[be,ae]=M[L],[re,ce]=M[L+1];E+=be,R+=ae,F+=be*ce-re*ae;const Pe=e.at(be,ae);C.push(Pe),S=Math.min(S,Pe),w+=Pe}C.push(C[0]);const z=M.length-1;E/=z,R/=z;const H=Math.abs(F)/2,N=_.y1,O=N-_.y0,P=w/z,U=s.bin(E,R),A=r.bin(E,R),G=O>=15||H>=700,k=G?U.idx:U.late,K=F>0?1:-1,ee=[];let ue=!1,Ee=!1;for(let L=0;L+1<M.length;L++){const[be,ae]=M[L],[re,ce]=M[L+1],Pe=Math.hypot(re-be,ce-ae);if(Pe<2.2){ee.push(0);continue}const xe=(ce-ae)/Pe*K,me=-(re-be)/Pe*K,qe=t.facing((be+re)/2,(ae+ce)/2,xe,me);ee.push(qe),qe===1?ue=!0:qe===2&&(Ee=!0)}const he=ft(x*3+1),Y=bv.find(L=>Math.hypot(L.x-E,L.z-R)<30&&Math.abs(L.high-O)<12);let $;Y?.style!=null?$=Y.style:O>=45?$=he<.36?Ke.GLASS:he<.62?Ke.OFFICE:he<.88||O>110?Ke.PRECAST:Ke.MASONRY:O>=20?$=ue||H>700?he<.48?Ke.MASONRY:he<.74?Ke.OFFICE:he<.88?Ke.PRECAST:Ke.STUCCO:he<.55?Ke.STUCCO:he<.8?Ke.MASONRY:Ke.PRECAST:H>1400&&O<11?$=Ke.SHED:ue&&!Ee?$=he<.5?Ke.MASONRY:he<.82?Ke.STUCCO:Ke.VICTORIAN:H<=460?$=he<.55?Ke.VICTORIAN:he<.92?Ke.STUCCO:Ke.MASONRY:$=he<.62?Ke.STUCCO:he<.9?Ke.MASONRY:Ke.VICTORIAN,f[$]=(f[$]??0)+1;const oe=$===Ke.OFFICE||$===Ke.GLASS||$===Ke.PRECAST,Se=ft(x*3+2),we=ft(x*3+3);o.setHex(Y?.color??Fa($===Ke.VICTORIAN?mv:$===Ke.STUCCO?gv:$===Ke.MASONRY?vv:$===Ke.OFFICE?xv:$===Ke.GLASS?_v:$===Ke.PRECAST?yv:Mv,Se)),o.offsetHSL((ft(x+5003)-.5)*.02,0,(ft(x+7919)-.5)*.07),$===Ke.VICTORIAN?l.setHex(15328988):l.copy(o).lerp(h.setHex(14209215),.45);const Ce=$+we*.98,ze=_.m?_.y0+_.m:S-1.5;if(Y?.shape==="pyramid")Rv(U,U.idx,M,K,E,R,ze,N,P,o,Ce,C);else for(let L=0;L+1<M.length;L++){let[be,ae]=M[L],[re,ce]=M[L+1],Pe=C[L],xe=C[L+1];const me=Math.hypot(re-be,ce-ae);if(me<.05)continue;const qe=(ce-ae)/me*K,Oe=-(re-be)/me*K;K>0&&([be,re]=[re,be],[ae,ce]=[ce,ae],[Pe,xe]=[xe,Pe]);const D=ee[L],b=D===1||D===2,I=oe?si.LOBBY:$===Ke.SHED?si.PLAIN:D===1?si.SHOP:D===2?si.GARAGE:si.PLAIN,V=(xe-Pe)/me,Z=[Ce,(b?1:0)+2*I,V,P],j=n(x,L),ve=[];if(j){const Ye=Math.hypot(j.p0[0]-be,j.p0[1]-ae),St=Math.hypot(j.p1[0]-be,j.p1[1]-ae),mt=Math.min(Ye,St),ht=Math.max(Ye,St);ve.push([0,mt,ze,N],[ht,me,ze,N],[mt,ht,j.y+Os,N])}else ve.push([0,me,ze,N]);const le=(re-be)/me,te=(ce-ae)/me;for(const[Ye,St,mt,ht]of ve){if(St-Ye<.02||ht-mt<.02)continue;const Nt=Pe+V*Ye,nt=Pe+V*St;It(U,k,[[be+le*Ye,mt,ae+te*Ye],[be+le*St,mt,ae+te*St],[be+le*St,ht,ae+te*St],[be+le*Ye,ht,ae+te*Ye]],[qe,0,Oe],o,[[Ye,Nt,me,N],[St,nt,me,N],[St,nt,me,N],[Ye,Nt,me,N]],Z),a.walls+=2}if(!b||me<4||O>40||oe||$===Ke.SHED)continue;const ne=$===Ke.VICTORIAN?.42:.3,ie=$===Ke.MASONRY?.7:.5,fe=N-ie+.12,Ie=N+.12,Ae=qe*ne,_e=Oe*ne,Ne=(re-be)/me,W=(ce-ae)/me,de=[Ke.CORNICE+we*.98,0,0,P],ye=[be,fe,ae],De=[re,fe,ce],ge=[be+Ae,fe,ae+_e],se=[re+Ae,fe,ce+_e],Fe=[be+Ae,Ie,ae+_e],$e=[re+Ae,Ie,ce+_e],ct=[be,Ie,ae],st=[re,Ie,ce],Ot=Ye=>[[0,Ye,me,N],[me,Ye,me,N],[me,Ye+1,me,N],[0,Ye+1,me,N]];if(It(A,A.idx,[ge,se,$e,Fe],[qe,0,Oe],l,Ot(0),de),It(A,A.idx,[ye,De,se,ge],[0,-1,0],l,Ot(2),de),It(A,A.idx,[Fe,$e,st,ct],[0,1,0],l,Ot(4),de),a.cornices+=6,ee[(L+(K>0?1:z-1))%z]===1||ee[(L+(K>0?1:z-1))%z]===2||(It(A,A.idx,[ye,ge,Fe,ct],[-Ne,0,-W],l,Ot(0),de),a.cornices+=2),ee[(L+(K>0?z-1:1))%z]===1||ee[(L+(K>0?z-1:1))%z]===2||(It(A,A.idx,[De,se,$e,st],[Ne,0,W],l,Ot(0),de),a.cornices+=2),$<=Ke.STUCCO&&me>=4.4){const Ye=Math.max(1,Math.floor(me/7.6+.5)),St=me/Ye,mt=St/7.6,ht=$===Ke.VICTORIAN?1.05:.75,Nt=I===si.SHOP?4.15:2.75,nt=(rt,At,Ct)=>[be+Ne*rt+qe*At,Ct,ae+W*rt+Oe*At],_t=[Ce,1+2*I+16,V,P];for(let rt=0;rt<Ye;rt++){const At=rt*St,Ct=Pe+V*(rt+.5)*St,Ht=Ct+Nt,Kt=N-ht;if(Kt-Ht<2.2)continue;const pn=At+.7*mt,rn=At+1.45*mt,mn=At+3.55*mt,T=At+4.3*mt,X=Math.min(.7,.6*mt),Q=(J,q,pe,Te)=>{const Ue=pe-J,Le=Te-q,Be=Math.hypot(Ue,Le),Xe=(qe*Ue-Ne*Le)/Be,ke=(Oe*Ue-W*Le)/Be;It(A,A.idx,[nt(J,q,Ht),nt(pe,Te,Ht),nt(pe,Te,Kt),nt(J,q,Kt)],[Xe,0,ke],o,[[J,Pe+V*J,me,N],[pe,Pe+V*pe,me,N],[pe,Pe+V*pe,me,N],[J,Pe+V*J,me,N]],_t)};Q(pn,0,rn,X),Q(rn,X,mn,X),Q(mn,X,T,0),It(A,A.idx,[nt(pn,0,Kt+.25),nt(rn,X,Kt),nt(mn,X,Kt),nt(T,0,Kt+.25)],[qe*.38,.92,Oe*.38],l,Ot(4),de),It(A,A.idx,[nt(pn,0,Ht),nt(rn,X,Ht),nt(mn,X,Ht),nt(T,0,Ht)],[0,-1,0],l,Ot(2),de),a.bays+=10}}if(I!==si.SHOP||me<4)continue;const en=Math.max(1,Math.floor(me/5.5+.5)),Kn=me/en;for(let Ye=0;Ye<en;Ye++){if(ft(x*131+L*17+Ye)>.5)continue;h.setHex(Fa(bc,ft(x*57+L*5+Ye+9)));const mt=Ye*Kn+.3,ht=(Ye+1)*Kn-.3,Nt=Pe+V*(Ye+.5)*Kn,nt=1+.5*ft(x+Ye*7+13),_t=Nt+3.05,rt=Nt+2.5,At=rt-.24,Ct=(mn,T,X)=>[be+Ne*mn+qe*T,X,ae+W*mn+Oe*T],Ht=[Ke.AWNING+ft(x+Ye*3+1)*.98,0,0,P],Kt=nt/Math.hypot(nt,_t-rt),pn=(_t-rt)/Math.hypot(nt,_t-rt),rn=(mn,T)=>[[mt,mn,me,N],[ht,mn,me,N],[ht,T,me,N],[mt,T,me,N]];It(A,A.idx,[Ct(mt,nt,rt),Ct(ht,nt,rt),Ct(ht,.02,_t),Ct(mt,.02,_t)],[qe*pn,Kt,Oe*pn],h,rn(0,1),Ht),It(A,A.idx,[Ct(mt,nt,At),Ct(ht,nt,At),Ct(ht,nt,rt),Ct(mt,nt,rt)],[qe,0,Oe],h,rn(2,3),Ht),It(A,A.idx,[Ct(mt,nt,rt-.02),Ct(ht,nt,rt-.02),Ct(ht,.02,_t-.02),Ct(mt,.02,_t-.02)],[-qe*pn,-Kt,-Oe*pn],h,rn(4,5),Ht),a.awnings+=6}for(let Ye=0;Ye<en;Ye++){if(ft(x*173+L*29+Ye+5)>.42||O<6.5)continue;h.setHex(Fa(bc,ft(x*61+L*3+Ye+2)));const St=Pe+V*(Ye+.5)*Kn,mt=Ye*Kn+.16,ht=Math.min(N-St-4.2,1.4+1.5*ft(x+Ye*11+3));if(ht<1)continue;const Nt=St+3.5,nt=Nt+ht,_t=.18,rt=.18+.62+.25*ft(x+Ye*5),At=(Kt,pn,rn)=>[be+Ne*(mt+rn)+qe*Kt,pn,ae+W*(mt+rn)+Oe*Kt],Ct=[Ke.SIGN+ft(x+Ye*13+7)*.98,0,0,P],Ht=[[0,0,rt-_t,ht],[rt-_t,0,rt-_t,ht],[rt-_t,ht,rt-_t,ht],[0,ht,rt-_t,ht]];It(A,A.idx,[At(_t,Nt,.03),At(rt,Nt,.03),At(rt,nt,.03),At(_t,nt,.03)],[Ne,0,W],h,Ht,Ct),It(A,A.idx,[At(_t,Nt,-.03),At(rt,Nt,-.03),At(rt,nt,-.03),At(_t,nt,-.03)],[-Ne,0,-W],h,Ht,Ct),a.signs+=4}}if(_.col!=null?c.setHex(_.col,Jt):c.copy(o).multiplyScalar(.62),!G){let L=1,be=0,ae=0;for(let ve=0;ve+1<M.length;ve++){const le=M[ve+1][0]-M[ve][0],te=M[ve+1][1]-M[ve][1],ne=Math.hypot(le,te);ne>ae&&(ae=ne,L=le/ne,be=te/ne)}let re=1/0,ce=-1/0,Pe=1/0,xe=-1/0;for(const[ve,le]of M){const te=ve*L+le*be,ne=-ve*be+le*L;re=Math.min(re,te),ce=Math.max(ce,te),Pe=Math.min(Pe,ne),xe=Math.max(xe,ne)}const me=Math.sqrt(Math.min(1,H/Math.max(1,(ce-re)*(xe-Pe)))),qe=(re+ce)/2,Oe=(Pe+xe)/2,D=(ce-re)/2*me,b=(xe-Pe)/2*me,I=(ve,le)=>{const te=qe+ve*D,ne=Oe+le*b;return[te*L-ne*be,te*be+ne*L]},V=[I(-1,-1),I(1,-1),I(1,1),I(-1,1)],Z=(V[0][0]+V[2][0])/2,j=(V[0][1]+V[2][1])/2;for(let ve=0;ve<4;ve++){const[le,te]=V[ve],[ne,ie]=V[(ve+1)%4],fe=Math.hypot(ne-le,ie-te);if(fe<.05)continue;let Ie=(ie-te)/fe,Ae=-(ne-le)/fe;Ie*((le+ne)/2-Z)+Ae*((te+ie)/2-j)<0&&(Ie=-Ie,Ae=-Ae);const _e=(ne-le)*Ae-(ie-te)*Ie<0,[Ne,W,de,ye]=_e?[ne,ie,le,te]:[le,te,ne,ie];It(U,U.box,[[Ne,ze,W],[de,ze,ye],[de,N,ye],[Ne,N,W]],[Ie,0,Ae],o,[[0,P,fe,N],[fe,P,fe,N],[fe,P,fe,N],[0,P,fe,N]],[Ce,1,0,P])}It(U,U.box,[[V[0][0],N,V[0][1]],[V[1][0],N,V[1][1]],[V[2][0],N,V[2][1]],[V[3][0],N,V[3][1]]],[0,1,0],c,[[0,0,0,N],[0,0,0,N],[0,0,0,N],[0,0,0,N]],[Ke.ROOF+we*.98,0,0,P])}if(Y?.shape!=="pyramid"){const L=M.slice(0,-1).map(([ae,re])=>new Ve(ae,re)),be=U.pos.length/3;for(const ae of L)$r(U,ae.x,N,ae.y,0,1,0,c.r,c.g,c.b),U.aux.push(0,0,0,N),U.ext.push(Ke.ROOF+we*.98,0,0,P);for(const ae of Qo.triangulateShape(L,[])){const re=L[ae[0]],ce=L[ae[1]],Pe=L[ae[2]];(ce.y-re.y)*(Pe.x-re.x)-(ce.x-re.x)*(Pe.y-re.y)>=0?k.push(be+ae[0],be+ae[1],be+ae[2]):k.push(be+ae[0],be+ae[2],be+ae[1]),a.roofs++}if(O>=11&&H>=220){const ae=O>=45?2:1;for(let re=0;re<ae;re++){const ce=Math.sqrt(H),Pe=Math.min(ce*.42,3+ce*.22*(.5+ft(x*7+re))),xe=Math.min(ce*.42,3+ce*.18*(.5+ft(x*11+re))),me=E+(ft(x*13+re)-.5)*ce*.35,qe=R+(ft(x*17+re)-.5)*ce*.35,Oe=O>=45?4+5*ft(x*19+re):2.2+1.6*ft(x*19+re);let D=1,b=0,I=0;for(let te=0;te+1<M.length;te++){const ne=M[te+1][0]-M[te][0],ie=M[te+1][1]-M[te][1],fe=Math.hypot(ne,ie);fe>I&&(I=fe,D=ne/fe,b=ie/fe)}const V=(te,ne)=>[me+D*Pe/2*te-b*xe/2*ne,qe+b*Pe/2*te+D*xe/2*ne],Z=[V(-1,-1),V(1,-1),V(1,1),V(-1,1)];if(!Z.every(([te,ne])=>Av(M,te,ne)))continue;h.copy(c).lerp(l.clone().multiplyScalar(.8),.5);const j=[Ke.ROOFBOX+ft(x+re)*.98,0,0,P],ve=O>=45?U:A,le=ve.idx;a.boxes+=10;for(let te=0;te<4;te++){const[ne,ie]=Z[te],[fe,Ie]=Z[(te+1)%4],Ae=Math.hypot(fe-ne,Ie-ie);let _e=(Ie-ie)/Ae,Ne=-(fe-ne)/Ae;_e*((ne+fe)/2-me)+Ne*((ie+Ie)/2-qe)<0&&(_e=-_e,Ne=-Ne),It(ve,le,[[ne,N,ie],[fe,N,Ie],[fe,N+Oe,Ie],[ne,N+Oe,ie]],[_e,0,Ne],h,[[0,0,Ae,N],[Ae,0,Ae,N],[Ae,Oe,Ae,N],[0,Oe,Ae,N]],j)}It(ve,le,[[Z[0][0],N+Oe,Z[0][1]],[Z[1][0],N+Oe,Z[1][1]],[Z[2][0],N+Oe,Z[2][1]],[Z[3][0],N+Oe,Z[3][1]]],[0,1,0],c,[[0,0,0,N],[0,0,0,N],[0,0,0,N],[0,0,0,N]],[Ke.ROOF+we*.98,0,0,P])}}}});const u=$n(new zn({vertexColors:!0}),i,{key:"p2p-city-walls",vertexPars:lv,vertex:cv,fragmentPars:hv,color:fv,normal:uv,light:dv,final:pv}),d=new $t,v=s.build(u,{cast:!0,receive:!0}),g=r.build(u,{cast:al()==="high",receive:!0});d.add(v,g),d.userData.styles=f,d.userData.triangles=a;const m=v.children.map(_=>{const x=_.geometry,M=x.index.array,E=([S,w])=>{const C=new Mt;for(const z of Object.keys(x.attributes))C.setAttribute(z,x.getAttribute(z));return C.setIndex(new xt(M.subarray(S,S+w),1)),C.boundingSphere=x.boundingSphere,C.boundingBox=x.boundingBox,C},R=_.userData.near?E(_.userData.near):x,F=_.userData.far?E(_.userData.far):x;return _.geometry=R,{m:_,near:R,far:F}}),p=g.children,y=(_,x)=>{const M=_.geometry.boundingSphere;return Math.hypot(M.center.x-x.x,M.center.z-x.z)-M.radius};return d.userData.tend=_=>{for(const x of m)x.m.geometry=y(x.m,_)>wv?x.far:x.near;for(const x of p)x.visible=y(x,_)<Sv},d}function Rv(i,e,t,n,s,r,a,o,l,c,h,f){for(let d=0;d+1<t.length;d++){let[v,g]=t[d],[m,p]=t[d+1],y=f[d],_=f[d+1];const x=Math.hypot(m-v,p-g);if(x<.05)continue;const M=(p-g)/x*n,E=-(m-v)/x*n;n>0&&([v,m]=[m,v],[g,p]=[p,g],[y,_]=[_,y]);const R=Math.abs((s-(v+m)/2)*M+(r-(g+p)/2)*E),F=o-l,S=Math.hypot(R,F),w=[M*F/S,R/S,E*F/S],C=(H,N)=>{const O=H<=0?a:l+F*H,P=Math.max(0,H),U=v+(m-v)*N,A=g+(p-g)*N;return[U+(s-U)*P,O,A+(r-A)*P]},z=[h,1+2*si.LOBBY+8,0,l];for(let H=-1;H<10;H++){const N=H/10,O=(H+1)/10,P=x*(1-Math.max(0,N)),U=x*(1-O),A=(y+_)/2;It(i,e,[C(N,0),C(N,1),C(O,1),C(O,0)],w,c,[[x/2-P/2,A,x,o],[x/2+P/2,A,x,o],[x/2+U/2,A,x,o],[x/2-U/2,A,x,o]],z)}}}function Cv(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Mt;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let v=0;v<d.count;++v)f.push(d.getX(v)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=Ec(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let g=0;g<a[h].length;++g)d.push(a[h][g][u]);const v=Ec(d);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function Ec(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new xt(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let u=0,d=h.count;u<d;u++)for(let v=0;v<t;v++){const g=h.getComponent(u,v);o.setComponent(u+f,v,g)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}const ot=(i,e)=>[i[0]+e[0],i[1]+e[1],i[2]+e[2]],Dn=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],Je=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],Li=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],fn=i=>{const e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]};function Lv(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const zo=i=>{const e=i()*2-1,t=i()*Math.PI*2,n=Math.sqrt(1-e*e);return[n*Math.cos(t),e,n*Math.sin(t)]};function Ch(i){const e=fn(Li(i,Math.abs(i[1])<.95?[0,1,0]:[1,0,0]));return[e,Li(i,e)]}class Pv{pos=[];nor=[];col=[];leaf=[];idx=[];v(e,t,n,s,r,a,o){return this.pos.push(...e),this.nor.push(...t),this.col.push(n.r,n.g,n.b),this.leaf.push(s,r,a,o),this.pos.length/3-1}limb(e,t,n,s,r,a,o=0){const l=fn(Dn(t,e)),[c,h]=Ch(l),f=Math.hypot(...Dn(t,e)),u=this.pos.length/3;for(let d=0;d<=r;d++){const v=d/r*Math.PI*2,g=ot(Je(c,Math.cos(v)),Je(h,Math.sin(v)));this.v(ot(e,Je(g,n)),g,a,d/r,o,1,-1),this.v(ot(t,Je(g,s)),g,a,d/r,o+f,1,-1)}for(let d=0;d<r;d++){const v=u+d*2;this.idx.push(v,v+2,v+1,v+1,v+2,v+3)}}quad(e,t,n,s,r,a,o){const l=this.v(e,s,r,0,0,a,o),c=this.v(ot(e,t),s,r,1,0,a,o),h=this.v(ot(e,n),s,r,0,1,a,o),f=this.v(ot(ot(e,t),n),s,r,1,1,a,o);this.idx.push(l,c,f,l,f,h)}strip(e,t,n,s,r,a,o){const l=this.pos.length/3;e.forEach((c,h)=>{const f=h/(e.length-1);this.v(Dn(c,Je(n[h],t[h])),s[h],r,0,f,a[h],o),this.v(ot(c,Je(n[h],t[h])),s[h],r,1,f,a[h],o)});for(let c=0;c+1<e.length;c++){const h=l+c*2;this.idx.push(h,h+1,h+3,h,h+3,h+2)}}geometry(){const e=new Mt;return e.setAttribute("position",new tt(this.pos,3)),e.setAttribute("normal",new tt(this.nor,3)),e.setAttribute("color",new tt(this.col,3)),e.setAttribute("aLeaf",new tt(this.leaf,4)),e.setIndex(this.idx),e.computeBoundingSphere(),e}}function Cr(i,e,t,n,s,r,a,o=0,l=0){const c=t.map(u=>u.r[0]*u.r[1]*u.r[2]),h=c.reduce((u,d)=>u+d,0),f=u=>{let d=e()*h,v=0;for(;v<t.length-1&&d>c[v];)d-=c[v],v++;const g=t[v],m=zo(e),p=u?.25+.2*e():.62+.38*Math.sqrt(e()),y=ot(g.c,[m[0]*g.r[0]*p,m[1]*g.r[1]*p,m[2]*g.r[2]*p]),_=fn([m[0]/g.r[0],m[1]/g.r[1],m[2]/g.r[2]]),x=Dn(y,n.c),M=fn([x[0]/n.r[0]**2,x[1]/n.r[1]**2,x[2]/n.r[2]**2]),E=fn(ot(ot(_,Je(zo(e),.55)),[0,o,0])),[R,F]=Ch(E),S=e()*Math.PI*2,w=ot(Je(R,Math.cos(S)),Je(F,Math.sin(S))),C=Li(E,w),z=r*(u?1.4:.95+.4*e()),H=Math.hypot(x[0]/n.r[0],x[1]/n.r[1],x[2]/n.r[2]),N=(u?.5:.6+.4*Math.min(1,p*H)**1.4)*(.8+.2*(M[1]*.5+.5)),O=fn(ot(ot(ot(Je(_,.55),Je(M,.45)),Je(E,.2)),[0,.25,0]));i.quad(Dn(Dn(y,Je(w,z/2)),Je(C,z/2)),Je(w,z),Je(C,z),O,a[Math.floor(e()*a.length)],N,e()*.999)};for(let u=0;u<s;u++)f(!1);for(let u=0;u<l;u++)f(!0)}function Lr(i,e,t,n,s,r,a,o){const l=ot(Je(ot(t,n),.5),[(e()-.5)*.6,.3+e()*.4,(e()-.5)*.6]),c=(s+r)/2;i.limb(t,l,s,c,a,o),i.limb(l,n,c,r,a,o,Math.hypot(...Dn(l,t)))}const hn=i=>new We(i),ns=[{name:"plane",leaf:10,bark:1,leaves:[6257974,7047739,5665839],trunk:10262136,trunkHalf:.24,lobes:7,lobeDepth:.16,palm:0,build(i,e,t){const n=hn(this.trunk),s=[.15,3.1,.05];i.limb([0,0,0],s,.3,.22,7,n),i.limb(s,[.1,6.6,0],.22,.07,6,n,3.1);const r={c:[0,7.4,0],r:[4,3.4,4]},a=[{c:[0,7.6,0],r:[3,2.6,3]}];for(let o=0;o<4;o++){const l=o*1.62+e()*.6,c=1.9+e()*.6;a.push({c:[Math.cos(l)*c,6.2+e()*2.4,Math.sin(l)*c],r:[1.9+e()*.4,1.7+e()*.3,1.9+e()*.4]})}for(const o of a.slice(1))if(Lr(i,e,s,Je(o.c,.85),.16,.07,5,n),t>=1)for(let l=0;l<2;l++)i.limb(Je(o.c,.85),ot(o.c,Je(zo(e),1.4)),.06,.025,3,n);Cr(i,e,a,r,Math.round(46*t),2.4/Math.sqrt(t),this.leaves.map(hn),0,5)}},{name:"ficus",leaf:11,bark:0,leaves:[3428906,2967589,3824174],trunk:8223346,trunkHalf:.2,lobes:9,lobeDepth:.08,palm:0,build(i,e,t){const n=hn(this.trunk),s=[0,2.1,0];i.limb([0,0,0],s,.24,.2,7,n),i.limb(s,[0,4.4,0],.2,.06,6,n,2.1);const r={c:[0,4.9,0],r:[3.5,2.6,3.5]},a=[{c:[0,5,0],r:[3.1,2.3,3.1]}];for(let o=0;o<4;o++){const l=o*1.57+e()*.5;a.push({c:[Math.cos(l)*1.8,4.4+e()*1.2,Math.sin(l)*1.8],r:[1.7,1.4,1.7]})}for(const o of a.slice(1))Lr(i,e,s,Je(o.c,.7),.13,.06,5,n);Cr(i,e,a,r,Math.round(52*t),2/Math.sqrt(t),this.leaves.map(hn),0,6)}},{name:"cypress",leaf:12,bark:0,leaves:[2835760,3362611,2572331],trunk:6115656,trunkHalf:.38,lobes:5,lobeDepth:.22,palm:0,build(i,e,t){const n=hn(this.trunk),s=[.5,2.4,.2];i.limb([0,0,0],s,.48,.38,8,n),i.limb(s,[.7,5.2,.2],.38,.12,7,n,2.4);const r=[];for(let o=0;o<4;o++){const l=o*1.9+e()*.7,c=o===0?.5:2.4+e()*1.2;r.push({c:[Math.cos(l)*c+.6,6+o*1.3+e()*.8,Math.sin(l)*c],r:[3.2-o*.25,1.15,3-o*.2]})}const a={c:[.6,8.2,0],r:[5,3.2,4.6]};for(const o of r)Lr(i,e,s,Dn(o.c,[0,.7,0]),.24,.1,5,n);Cr(i,e,r,a,Math.round(48*t),2.7/Math.sqrt(t),this.leaves.map(hn),1.1,5)}},{name:"eucalyptus",leaf:13,bark:4,leaves:[7308391,8097644,6584412],trunk:13616819,trunkHalf:.3,lobes:4,lobeDepth:.3,palm:0,build(i,e,t){const n=hn(this.trunk),s=[.3,8.5,-.2];i.limb([0,0,0],[.1,4.5,0],.4,.33,7,n),i.limb([.1,4.5,0],s,.33,.26,7,n,4.5),i.limb(s,[.4,13,-.3],.26,.08,6,n,8.5);const r=[];for(let o=0;o<5;o++){const l=o*1.26+e()*.5,c=o===0?.4:2+e()*1.4;r.push({c:[Math.cos(l)*c,11.5+e()*4.5,Math.sin(l)*c],r:[2.1+e()*.5,1.9+e()*.5,2.1+e()*.5]})}for(const o of r)Lr(i,e,s,Dn(o.c,[0,.8,0]),.17,.06,5,n);Cr(i,e,r,{c:[0,13.5,0],r:[4,4,4]},Math.round(42*t),2.1/Math.sqrt(t),this.leaves.map(hn),-.3,3)}},{name:"fan-palm",leaf:14,bark:2,leaves:[6126138,6784063],trunk:8154460,trunkHalf:.2,lobes:11,lobeDepth:.42,palm:1,build(i,e,t){const n=hn(this.trunk),s=[.35,0,.1],r=ot([0,15,0],s);i.limb([0,0,0],ot([0,7,0],Je(s,.25)),.27,.2,6,n),i.limb(ot([0,7,0],Je(s,.25)),r,.2,.17,6,n,7);const a=hn(9270870),o=Math.round(16*t),l=Math.round(10*t),c=2.3/Math.sqrt(t);for(let f=0;f<l;f++){const u=f*2.4+e()*.4,d=[Math.cos(u),0,Math.sin(u)],v=fn(ot(Je(d,.28),[0,-1,0])),g=Li(v,d),m=ot(ot(r,[0,-.4,0]),Je(d,.2));i.quad(Dn(m,Je(g,c*.4)),Je(g,c*.8),Je(v,c*1.1),fn(ot(d,[0,-.2,0])),a,.6,e()*.999)}const h=this.leaves.map(hn);for(let f=0;f<o;f++){const u=f*2.39996,d=1.25-f/o*1.45,v=[Math.cos(u),0,Math.sin(u)],g=fn(ot(Je(v,Math.cos(d)),[0,Math.sin(d),0])),m=fn(Li(g,[0,1,0])),p=Li(m,g),y=ot(r,Je(g,.25));i.quad(Dn(y,Je(m,c/2)),Je(m,c),Je(g,c*1.05),fn(ot(Je(g,.6),ot(Je(p,.3),[0,.4,0]))),h[f%h.length],.75+.25*Math.max(0,Math.sin(d)),e()*.999)}}},{name:"canary-palm",leaf:15,bark:3,leaves:[5599290,6257472,5006899],trunk:7298117,trunkHalf:.36,lobes:13,lobeDepth:.5,palm:1,build(i,e,t){const n=hn(this.trunk);i.limb([0,0,0],[.05,4.5,0],.42,.37,9,n),i.limb([.05,4.5,0],[.1,8.4,0],.37,.35,9,n,4.5),i.limb([.1,8.4,0],[.1,9.4,0],.48,.38,9,n,8.4);const s=[.1,9.3,0],r=this.leaves.map(hn),a=Math.round(24*t),o=t>=1?5:3;for(let l=0;l<a;l++){const c=l*2.39996+e()*.2,h=1.15-l/a*1.35+(e()-.5)*.15,f=5.2+e()*.8,u=[Math.cos(c),0,Math.sin(c)],d=fn(Li(u,[0,1,0])),v=[],g=[],m=[],p=[],y=[];for(let _=0;_<=o;_++){const x=_/o*f,M=x*Math.cos(h),E=x*Math.sin(h)-.055*x*x;v.push(ot(s,ot(Je(u,M+.2),[0,E,0]))),g.push(.75*Math.max(.08,Math.sin(Math.PI*Math.min(1,_/o*1.1))**.6)*(1-.2*(_/o))),m.push(d),p.push(fn(ot([0,1,0],Je(u,.9+_/o)))),y.push(.55+.45*Math.min(1,_/o*1.6)*(.75+.25*Math.max(0,Math.sin(h))))}i.strip(v,g,m,p,r[l%r.length],y,e()*.999)}}}];function Dv(i,e,t){const n=new Pv;i.build(n,Lv(t),e);const s=n.geometry();let r=0,a=0,o=1/0,l=0;for(let c=0;c<n.pos.length/3;c++){const h=n.pos[c*3],f=n.pos[c*3+1],u=n.pos[c*3+2];a=Math.max(a,f),n.leaf[c*4+3]>=0&&(r=Math.max(r,Math.hypot(h,u)),o=Math.min(o,f),l=Math.max(l,f))}return{geo:s,width:r*2,height:a,crownLo:o,crownHi:l}}const Na=`
uniform float uTime; uniform vec3 uEye; uniform vec3 uWind; uniform vec4 uFade;
// seed, hue (-1 bluer to 1 yellower), lightness, autumn (0 to 1)
attribute vec4 aTree;
vec3 treeH3(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yzz) * p3.zyx);
}
// how far from the view's eye this tree stands: the one number the near and far levels must agree on
float treeDist() { return distance((modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz, uEye); }
// A slow sway, more the higher a point is, in the one wind every tree shares;
// a card's leaves flutter, and each card is set off a little per tree, so no
// two crowns of a species are the same. A tree that is not standing keeps still.
vec3 treeSway(vec3 p, float id) {
  mat3 im = mat3(instanceMatrix);
  float up = smoothstep(0.80, 0.95, normalize(im[1]).y);
  vec3 wl = transpose(im) * uWind / max(dot(im[0], im[0]), 1e-4);
  float ph = uTime * 0.6 + aTree.x * 6.2831;
  float gust = 0.6 + 0.4 * sin(ph) + 0.25 * sin(ph * 2.37 + 1.7);
  float h = max(p.y, 0.0);
  p.xz += wl.xz * gust * h * h * 0.0016 * up;
  float leaf = step(0.0, id);
  vec3 j = treeH3(vec2(id * 97.0 + 1.3, aTree.x * 131.0 + 7.1)) - 0.5;
  p += leaf * (j * 0.7 + 0.035 * up * vec3(sin(uTime * 2.6 + id * 41.0), 0.5 * sin(uTime * 3.1 + id * 23.0), cos(uTime * 2.2 + id * 37.0)));
  return p;
}
`,za=`
// interleaved gradient noise: a threshold a pixel, even over the screen
float treeIgn(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
// a clump's outline on its card, lobed, in card units
float treeOutline(vec2 uv, float id) {
  vec2 c = uv * 2.0 - 1.0;
  float r = length(c), a = atan(c.y, c.x + 1e-4);
  float edge = 0.86 + 0.08 * sin(a * 5.0 + id * 40.0) + 0.05 * sin(a * 9.0 + id * 17.0);
  return (edge - r) * 0.5;
}
// leaves: one in each cell of two grids set off from each other, an ellipse of half-axes ax (cells), turned by up to 'turn'
vec2 treeLeaves(vec2 uv, float id, float n, vec2 ax, float turn) {
  float best = -1.0, shade = 1.0;
  for (int g = 0; g < 2; g++) {
    vec2 q = uv * n + float(g) * vec2(0.5, 0.31) + id * 7.0;
    vec2 cell = floor(q), h = p2pHash2(cell + float(g) * 19.0);
    vec2 f = fract(q) - 0.5 - (h - 0.5) * 0.3;
    float a = (h.x - 0.5) * turn, cs = cos(a), sn = sin(a);
    vec2 l = vec2(cs * f.x + sn * f.y, -sn * f.x + cs * f.y) / ax;
    float v = (1.0 - length(l)) * min(ax.x, ax.y) / n;
    if (v > best) { best = v; shade = 0.78 + 0.44 * h.y; }
  }
  return vec2(best, shade);
}
// x: the field (positive where there is leaf), y: the leaf's own shade
vec2 treeLeaf(vec2 uv, float id) {
#if TREE_LEAF == 10
  // big leaves, few to a card
  vec2 l = treeLeaves(uv, id, 4.0, vec2(0.46, 0.40), 6.28);
  return vec2(min(treeOutline(uv, id), l.x), l.y);
#elif TREE_LEAF == 11
  // small glossy leaves, many
  vec2 l = treeLeaves(uv, id, 6.0, vec2(0.48, 0.30), 6.28);
  return vec2(min(treeOutline(uv, id), l.x), l.y);
#elif TREE_LEAF == 12
  // scale foliage in lacy sprays
  vec2 p = uv + id * 3.7;
  float n = p2pNoise(p * 7.0) * 0.65 + p2pNoise(p * 15.0) * 0.35;
  return vec2(min(treeOutline(uv, id), (n - 0.40) * 0.12), 0.8 + 0.4 * p2pNoise(p * 4.0));
#elif TREE_LEAF == 13
  // long narrow leaves, hanging along the card
  vec2 l = treeLeaves(uv, id, 3.6, vec2(0.12, 0.46), 0.9);
  return vec2(min(treeOutline(uv, id) * 1.1 - 0.02, l.x), l.y);
#elif TREE_LEAF == 14
  // a fan on its stalk: pleated segments, split toward the tips; the stalk at the card's foot
  vec2 d = uv - vec2(0.5, 0.06);
  float r = length(d) / 0.94, a = atan(d.x, d.y + 1e-4);
  float s = fract((a + 1.3) / 2.6 * 24.0);
  float fan = min(min(1.0 - r, (1.3 - abs(a)) * 0.4), max(0.5 - r, (0.40 - abs(s - 0.5)) * 0.12));
  fan = min(fan, r - 0.12);
  float stalk = min(0.025 - abs(uv.x - 0.5), 0.2 - uv.y);
  return vec2(max(fan, stalk), 0.82 + 0.3 * step(0.5, s));
#elif TREE_LEAF == 15
  // a feather frond: a rib and leaflets slanting toward the tip, bare at its base
  float x = abs(uv.x - 0.5) * 2.0;
  float s = fract(uv.y * 34.0 - x * 2.2 + id * 5.0);
  float leaflets = min(1.0 - x, (0.30 - abs(s - 0.5)) * 0.10);
  leaflets = min(leaflets, uv.y - 0.08);
  float rib = (0.05 - x) * 0.5;
  return vec2(max(leaflets, rib), 0.8 + 0.35 * fract(floor(uv.y * 34.0 - x * 2.2) * 0.618));
#else
  return vec2(1.0, 1.0);
#endif
}
// bark: u round the limb, v metres along it
vec3 treeBark(vec2 uv, vec3 col) {
#if TREE_BARK == 1
  // a plane's: olive, cream and grey where the bark has flaked
  float n = p2pNoise(vec2(uv.x * 7.0, uv.y * 1.7)), m = p2pNoise(vec2(uv.x * 11.0, uv.y * 2.9) + 5.3);
  col = mix(col, col * vec3(0.66, 0.68, 0.55), smoothstep(0.45, 0.5, n));
  return mix(col, vec3(0.80, 0.78, 0.66), smoothstep(0.62, 0.67, m) * 0.8);
#elif TREE_BARK == 2
  // a fan palm's rings
  return col * (0.78 + 0.28 * smoothstep(0.2, 0.8, abs(fract(uv.y * 3.3) - 0.5) * 2.0)) * (0.9 + 0.2 * p2pNoise(uv * vec2(9.0, 2.0)));
#elif TREE_BARK == 3
  // a date palm's old leaf bases, in diamonds
  float d = abs(fract(uv.x * 9.0 + uv.y * 1.7) - 0.5) + abs(fract(uv.x * 9.0 - uv.y * 1.7) - 0.5);
  return col * (0.62 + 0.55 * smoothstep(0.25, 0.65, d));
#elif TREE_BARK == 4
  // a gum's pale trunk with long strips of old bark
  return col * mix(vec3(1.0), vec3(0.62, 0.57, 0.50), smoothstep(0.56, 0.66, p2pNoise(vec2(uv.x * 6.0, uv.y * 0.35))));
#else
  // rough: fissures up the trunk
  return col * (0.76 + 0.32 * p2pNoise(vec2(uv.x * 14.0, uv.y * 1.3)));
#endif
}
// the instance's hue, lightness and autumn on a leaf colour
vec3 treeTint(vec3 c, vec3 t) {
  c *= vec3(1.0 + 0.13 * t.x, 1.0 + 0.05 * t.x, 1.0 - 0.16 * t.x) * t.y;
  float l = dot(c, vec3(0.3, 0.55, 0.15));
  return mix(c, vec3(1.6, 1.15, 0.35) * l, t.z);
}
`,Ac=`
{
  vec2 sh = p2pShade(vWorld.xz);
  float farLit = mix(smoothstep(-1.5, 1.5, (vWorld.y - vFoot) - sh.x), 1.0, p2pNear);
  reflectedLight.directDiffuse *= farLit;
  float open = 1.0 - 0.34 * smoothstep(0.3, 1.0, sh.y);
  reflectedLight.indirectDiffuse *= open * tAo;
  reflectedLight.directDiffuse *= mix(open, 1.0, 0.6) * mix(1.0, tAo, 0.5);
  #if NUM_DIR_LIGHTS > 0
    float back = pow(saturate(dot(-geometryViewDir, directLight.direction)), 4.0);
    float through = 0.28 * saturate(-dot(geometryNormal, directLight.direction)) + 0.75 * back;
    reflectedLight.directDiffuse += tLeaf * through * tAo * farLit * directLight.color * BRDF_Lambert(diffuseColor.rgb * vec3(1.05, 1.2, 0.55));
  #endif
}`,Iv={low:[38,58],mid:[70,100],high:[100,140]},Uv=820,Tc=950,Rc=16,Fv={low:.6,mid:1,high:1.35},Cc=200;function ai(i,e,t){let n=Math.imul(Math.round(i*10)^668265261,73856093)^Math.imul(Math.round(e*10)+t*2654435761,19349663);return n=Math.imul(n^n>>>15,2246822507),n=Math.imul(n^n>>>13,3266489909),((n^n>>>16)>>>0)/4294967296}function Nv(i,e){const t=i.r?Math.min(2.3,Math.max(.6,i.r/2.6)):1,n=(.8+.4*ai(i.x,i.z,1))*t,s=n*(.88+.24*ai(i.x,i.z,2));return e.set(s,n,s)}const zv={wood:[10,0,45,45,0,0],park:[30,10,25,15,8,12],plaza:[45,25,0,0,15,15],avenue:[40,15,0,0,15,30],street:[40,40,0,0,12,8],yard:[30,25,15,10,15,5]},Lc={wood:"wood",park:"park",grass:"park",garden:"park",playground:"park",pool:"park",plaza:"plaza",pier:"plaza",parking:"street"};function Ov(i,e){const t=i.props,n=new Uint8Array(e.length),s=i.areas.filter(l=>Lc[l.k]).map(l=>{let c=1/0,h=1/0,f=-1/0,u=-1/0;for(const[d,v]of l.r)c=Math.min(c,d),h=Math.min(h,v),f=Math.max(f,d),u=Math.max(u,v);return{a:l,x0:c,z0:h,x1:f,z1:u}}),r=(l,c,h)=>{let f=!1;for(let u=0,d=l.length-1;u<l.length;d=u++){const[v,g]=l[u],[m,p]=l[d];g>h!=p>h&&c<(m-v)*(h-g)/(p-g)+v&&(f=!f)}return f},a=50,o=new Map;for(const l of i.roads){if(l.b||l.c==="pedestrian")continue;const c=l.c==="trunk"||l.c==="primary";for(let h=0;h+1<l.p.length;h++){const[f,u]=l.p[h],[d,v]=l.p[h+1],g=l.w/2+10;for(let m=Math.floor((Math.min(f,d)-g)/a);m<=Math.floor((Math.max(f,d)+g)/a);m++)for(let p=Math.floor((Math.min(u,v)-g)/a);p<=Math.floor((Math.max(u,v)+g)/a);p++){const y=`${m}_${p}`;let _=o.get(y);_||o.set(y,_=[]),_.push([f,u,d,v,l.w,c])}}}return e.forEach((l,c)=>{const h=t[l];let f="";for(const m of s)if(h.x>=m.x0&&h.x<=m.x1&&h.z>=m.z0&&h.z<=m.z1&&r(m.a.r,h.x,h.z)){f=Lc[m.a.k];break}if(!f){let m=1/0,p=!1;for(const[y,_,x,M,E,R]of o.get(`${Math.floor(h.x/a)}_${Math.floor(h.z/a)}`)??[]){const F=x-y,S=M-_,w=F*F+S*S||1,C=Math.max(0,Math.min(1,((h.x-y)*F+(h.z-_)*S)/w)),z=Math.hypot(h.x-y-F*C,h.z-_-S*C)-E/2;z<m&&(m=z,p=R)}f=m<8?p?"avenue":"street":"yard"}const u=zv[f],d=u.reduce((m,p)=>m+p,0);let v=ai(h.x,h.z,3)*d,g=0;for(;g<u.length-1&&v>=u[g];)v-=u[g],g++;n[c]=g}),n}function kv(i,e,t){const n=typeof location>"u"?null:new URLSearchParams(location.search).get("treelod"),s=al(),[r,a]=n==="near"?[220,240]:n==="far"?[-2,-1]:Iv[s],o=new $t;o.name="trees";const l=i.props,c=Ov(i,e),h=new Map;e.forEach((P,U)=>h.set(P,U));const f={};for(const P of c)f[ns[P].name]=(f[ns[P].name]??0)+1;const u=new Float32Array(e.length*4);e.forEach((P,U)=>{const A=l[P];u[U*4]=ai(A.x,A.z,4),u[U*4+1]=(ai(A.x,A.z,5)-.5)*1.4,u[U*4+2]=.84+.32*ai(A.x,A.z,6),u[U*4+3]=c[U]===0&&ai(A.x,A.z,7)<.25?.2+.45*ai(A.x,A.z,8):0});const d={uTime:{value:0},uEye:{value:new B(1e9,0,0)},uWind:{value:new B(.92,0,.38).normalize()},uFade:{value:new it(r,a,Uv,Tc)}},v=ns.map((P,U)=>Dv(P,Fv[s],101+U*7919)),g=ns.map((P,U)=>{const A=Math.max(1,Math.min(2500,c.filter(he=>he===U).length)),G=v[U].geo.clone(),k=new fi(new Float32Array(A*4),4).setUsage(ms);G.setAttribute("aTree",k);const K=`#define TREE_LEAF ${P.leaf}
#define TREE_BARK ${P.bark}
`,ee=$n(new zn({vertexColors:!0,side:Xt,alphaToCoverage:!0}),i,{key:`tree-near-${P.name}`,uniforms:d,vertexPars:`${K}attribute vec4 aLeaf;
${Na}
varying vec4 vLeaf; varying vec3 vTint; varying float vFade; varying float vFoot;`,vertex:`
        vFade = smoothstep(uFade.x, uFade.y, treeDist());
        vFoot = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).y;
        vLeaf = aLeaf; vTint = aTree.yzw;
        transformed = treeSway(transformed, aLeaf.w);
        vWorld = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`,fragmentPars:`${K}${za}
varying vec4 vLeaf; varying vec3 vTint; varying float vFade; varying float vFoot;`,color:`
        vec2 tLm = treeLeaf(vLeaf.xy, vLeaf.w);
        float tFw = max(fwidth(tLm.x), 1e-5);
        float tLeaf = step(-0.5, vLeaf.w);
        float tCover = mix(1.0, clamp(tLm.x / tFw + 0.5, 0.0, 1.0), tLeaf);
        if (treeIgn(gl_FragCoord.xy) < vFade || tCover < 0.3) discard;
        diffuseColor.a = clamp((tCover - 0.3) / 0.4, 0.0, 1.0);
        diffuseColor.rgb = mix(treeBark(vLeaf.xy, diffuseColor.rgb), treeTint(diffuseColor.rgb * tLm.y, vTint), tLeaf);
        float tAo = mix(1.0, vLeaf.z, tLeaf);`,normal:`#ifdef DOUBLE_SIDED
 normal *= faceDirection;
#endif`,light:Ac}),ue=new mh({depthPacking:eh,side:Xt});ue.onBeforeCompile=he=>{Object.assign(he.uniforms,d),he.vertexShader=he.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aLeaf;
${Na}
varying vec4 vLeaf; varying float vFade;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFade = smoothstep(uFade.x, uFade.y, treeDist()); vLeaf = aLeaf; transformed = treeSway(transformed, aLeaf.w);`),he.fragmentShader=he.fragmentShader.replace("#include <common>",`#include <common>
${K}${Ni}
${za}
varying vec4 vLeaf; varying float vFade;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
          if (treeIgn(gl_FragCoord.xy) < vFade || (vLeaf.w >= -0.5 && treeLeaf(vLeaf.xy, vLeaf.w).x < 0.0)) discard;`)},ue.customProgramCacheKey=()=>`tree-depth-${P.name}`;const Ee=new $s(G,ee,A);return Ee.instanceMatrix.setUsage(ms),Ee.count=0,Ee.customDepthMaterial=ue,Ee.castShadow=!0,Ee.receiveShadow=!0,Ee.matrixAutoUpdate=!1,Ee.name=`tree near ${P.name}`,Ee.boundingSphere=new pi(new B,1),o.add(Ee),{mesh:Ee,tree:k,slots:[]}}),m=new Map,p=ns.map((P,U)=>{const A=v[U];return{a:new it(A.width,A.height,A.crownLo,A.crownHi),b:new it(P.trunkHalf,P.lobes,P.lobeDepth,P.palm),leaf:Bv(A.geo,!0),bark:new We(P.trunk)}}),y={...d,uFarA:{value:p.map(P=>P.a)},uFarB:{value:p.map(P=>P.b)},uFarLeaf:{value:p.map(P=>P.leaf)},uFarBark:{value:p.map(P=>P.bark)}},_=$n(new zn({side:Xt,alphaToCoverage:!0}),i,{key:"tree-far",uniforms:y,vertexPars:`${Na}
      #define NS ${ns.length}
      uniform vec4 uFarA[NS]; uniform vec4 uFarB[NS]; uniform vec3 uFarLeaf[NS]; uniform vec3 uFarBark[NS];
      attribute float aSpec;
      varying vec2 vQuad; varying vec4 vA; varying vec4 vB; varying vec3 vLeafCol; varying vec3 vBarkCol;
      varying vec3 vR; varying vec3 vU; varying vec3 vT; varying float vFade; varying float vFoot; varying vec3 vTint; varying float vSeed;`,vertex:`
      int tS = int(aSpec + 0.5);
      vA = uFarA[tS]; vB = uFarB[tS]; vLeafCol = uFarLeaf[tS]; vBarkCol = uFarBark[tS];
      float tD = treeDist();
      vFade = smoothstep(uFade.x, uFade.y, tD) * (1.0 - smoothstep(uFade.z, uFade.w, tD));
      mat4 tM = modelMatrix * instanceMatrix;
      vFoot = tM[3].y;
      // turned about its own axis to face the eye: upright when standing, along the trunk when not
      vec3 tE = (inverse(tM) * vec4(uEye, 1.0)).xyz;
      float tL = length(tE.xz);
      vec2 tDir = tL > 1e-3 ? tE.xz / tL : vec2(0.0, 1.0);
      vec3 tRight = vec3(tDir.y, 0.0, -tDir.x), tToward = vec3(tDir.x, 0.0, tDir.y);
      vQuad = vec2(position.x * vA.x, position.y * vA.y);
      transformed = treeSway(tRight * vQuad.x + vec3(0.0, vQuad.y, 0.0), -1.0);
      mat3 tNm = mat3(modelViewMatrix) * mat3(instanceMatrix);
      vR = normalize(tNm * tRight); vU = normalize(tNm * vec3(0.0, 1.0, 0.0)); vT = normalize(tNm * tToward);
      vTint = aTree.yzw; vSeed = aTree.x;
      vWorld = (tM * vec4(transformed, 1.0)).xyz;`,fragmentPars:`#define TREE_LEAF 0
#define TREE_BARK 0
${za}
      varying vec2 vQuad; varying vec4 vA; varying vec4 vB; varying vec3 vLeafCol; varying vec3 vBarkCol;
      varying vec3 vR; varying vec3 vU; varying vec3 vT; varying float vFade; varying float vFoot; varying vec3 vTint; varying float vSeed;`,color:`
      // the crown: an ellipse over the leaf cards' height, lobed (a palm's head as spikes), clumped, with sky through its edge
      vec2 tP = vQuad;
      // the cards' corners reach past the leaves they hold: the outline is drawn a little inside them, a palm's head more so
      vec2 tC = vec2(0.0, (vA.z + vA.w) * 0.5), tRad = vec2(vA.x * 0.5, max((vA.w - vA.z) * 0.5, 0.5)) * mix(0.84, 0.74, vB.w);
      vec2 tQ = (tP - tC) / tRad;
      float tR = length(tQ), tAng = atan(tQ.y, tQ.x + 1e-4);
      float tLob = 0.5 + 0.5 * sin(tAng * vB.y + vSeed * 6.2831);
      float tEdge = 1.0 - vB.z * pow(tLob, 1.0 + 2.0 * vB.w) - 0.14 * p2pNoise(tP * 0.9 + vSeed * 13.0) - 0.10 * p2pNoise(tP * 2.6 + vSeed * 5.0);
      float tCrown = (tEdge - tR) * min(tRad.x, tRad.y);
      tCrown -= (0.5 + 0.4 * vB.w) * smoothstep(0.6 - 0.15 * vB.w, 0.8, p2pNoise(tP * 1.4 + vSeed * 7.0)) * smoothstep(0.4 - 0.2 * vB.w, 0.9, tR);
      // and small holes all through it, as the near crown's gaps between cards
      tCrown -= 0.45 * smoothstep(0.62, 0.78, p2pNoise(tP * 0.95 + vSeed * 11.0));
      float tTrunkW = vB.x * (1.0 - 0.3 * tP.y / max(vA.y, 1.0));
      // a palm's skirt of dead fronds, or its knob, just under the head
      float tSkirt = vB.w * (1.0 - smoothstep(0.0, 1.2, tC.y - tRad.y - tP.y)) * step(tP.y, tC.y);
      tTrunkW *= 1.0 + 0.9 * tSkirt;
      float tTrunk = min(tTrunkW - abs(tP.x), tC.y - tP.y);
      float tF = max(tCrown, tTrunk);
      float tFw = max(fwidth(tF), 1e-4);
      float tCover = clamp(tF / tFw + 0.5, 0.0, 1.0);
      float tLeaf = step(tTrunk, tCrown);
      if (treeIgn(gl_FragCoord.xy) >= vFade || tCover < 0.3) discard;
      diffuseColor.a = clamp((tCover - 0.3) / 0.4, 0.0, 1.0);
      float tClump = 0.8 + 0.4 * p2pNoise(tP * 0.75 + vSeed * 3.0);
      vec3 tBark = mix(vBarkCol, vec3(0.26, 0.19, 0.10), tSkirt * 0.8) * (0.8 + 0.3 * p2pNoise(tP * vec2(3.0, 0.5)));
      diffuseColor.rgb = mix(tBark, treeTint(vLeafCol * tClump * 1.3, vTint), tLeaf);
      float tAo = mix(1.0, (0.62 + 0.38 * tClump) * (0.84 + 0.16 * clamp(tQ.y, -1.0, 1.0)), tLeaf);`,normal:`{
      vec2 tD2 = tQ / max(1.0, tR);
      float tX = clamp(tP.x / max(tTrunkW, 1e-3), -1.0, 1.0);
      vec3 tN = tLeaf > 0.5 ? vec3(tD2, sqrt(max(0.0, 1.0 - dot(tD2, tD2)))) : vec3(tX, 0.0, sqrt(max(0.0, 1.0 - tX * tX)));
      // leaning up as the near cards' normals do
      normal = normalize(vR * tN.x + vU * (tN.y + 0.25 * tLeaf) + vT * tN.z);
    }`,light:Ac}),x=new tt([-.5,0,0,.5,0,0,.5,1,0,-.5,1,0],3),M=new tt([0,0,1,0,0,1,0,0,1,0,0,1],3),E=new gs([0,1,2,0,2,3],1),R=Math.max(...v.map(P=>Math.max(P.height,P.width)))*1.5,F=new Map;e.forEach((P,U)=>{const A=l[P],G=`${Math.floor(A.x/Cc)}_${Math.floor(A.z/Cc)}`;let k=F.get(G);k||F.set(G,k=[]),k.push(U)});const S=new Map,w=[];for(const P of F.values()){const U=new Mt;U.setAttribute("position",x),U.setAttribute("normal",M),U.setIndex(E);const A=new Float32Array(P.length*4),G=new Float32Array(P.length),k=new $s(U,_,P.length);let K=1/0,ee=1/0,ue=-1/0,Ee=-1/0;P.forEach((Se,we)=>{const Ce=e[Se],ze=l[Ce];A.set(u.subarray(Se*4,Se*4+4),we*4),G[we]=c[Se],k.setMatrixAt(we,t(Ce)),S.set(Ce,{mesh:k,slot:we}),K=Math.min(K,ze.x),ee=Math.min(ee,ze.z),ue=Math.max(ue,ze.x),Ee=Math.max(Ee,ze.z)}),U.setAttribute("aTree",new fi(A,4)),U.setAttribute("aSpec",new fi(G,1)),k.instanceMatrix.needsUpdate=!0;const he=(K+ue)/2,Y=(ee+Ee)/2,$=Math.hypot(ue-K,Ee-ee)/2+R+10;let oe=0;for(const Se of P)oe+=t(e[Se]).elements[13];k.boundingSphere=new pi(new B(he,oe/P.length,Y),$),k.castShadow=!1,k.receiveShadow=!0,k.matrixAutoUpdate=!1,k.name="tree far",o.add(k),w.push({mesh:k,x:he,z:Y,r:$,members:P})}const C=new Ve(1e9,1e9),z=a+Rc,H=P=>{C.set(P.x,P.z),m.clear();for(const U of g)U.slots.length=0;for(const U of w)if(!(Math.hypot(U.x-P.x,U.z-P.z)-U.r+R+10>z))for(const A of U.members){const G=e[A],k=l[G];if(Math.hypot(k.x-P.x,k.z-P.z)>z+10)continue;const K=c[A],ee=g[K];if(ee.slots.length>=ee.mesh.instanceMatrix.count)continue;const ue=ee.slots.length;ee.slots.push(A),ee.mesh.setMatrixAt(ue,t(G)),ee.tree.array.set(u.subarray(A*4,A*4+4),ue*4),m.set(G,{s:K,slot:ue})}for(const U of g)U.mesh.count=U.slots.length,U.mesh.instanceMatrix.needsUpdate=!0,U.tree.needsUpdate=!0,U.mesh.boundingSphere.center.set(P.x,P.y,P.z),U.mesh.boundingSphere.radius=z+R+20};return{group:o,species:f,update:(P,U)=>{d.uEye.value.copy(P),d.uTime.value=U,Math.hypot(P.x-C.x,P.z-C.y)>Rc&&H(P);for(const A of w){const G=Math.hypot(A.x-P.x,A.z-P.z);A.mesh.visible=G-A.r<Tc&&G+A.r>r}},redraw:P=>{const U=t(P),A=S.get(P);A&&(A.mesh.setMatrixAt(A.slot,U),A.mesh.instanceMatrix.needsUpdate=!0);const G=m.get(P);if(G){const k=g[G.s];k.mesh.setMatrixAt(G.slot,U),k.mesh.instanceMatrix.needsUpdate=!0}},has:P=>h.has(P)}}function Bv(i,e){const t=i.getAttribute("color"),n=i.getAttribute("aLeaf");let s=0,r=0,a=0,o=0;for(let l=0;l<t.count;l++){if(n.getW(l)>=0!==e)continue;const c=.4+n.getZ(l)*.6;s+=t.getX(l)*c,r+=t.getY(l)*c,a+=t.getZ(l)*c,o++}return o?new We(s/o,r/o,a/o):new We(5204794)}function Lh(i,e){const t=new We(e),n=i.getAttribute("position").count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new xt(s,3)),i.index?i.toNonIndexed():i}const He=(i,e,t,n,s,r,a)=>Lh(new Fi(i,e,t).translate(n,s,r),a),sn=(i,e,t,n=0,s=0)=>Lh(new Wr(i,i,e,6).translate(n,e/2,s),t),Wt=i=>Cv(i.map(e=>(e.deleteAttribute("uv"),e))),Pc={lamp:()=>Wt([sn(.09,8,4869456),He(1.6,.12,.2,.7,7.9,0,4869456),He(.5,.14,.26,1.4,7.8,0,15262408)]),signal:()=>Wt([sn(.1,5.2,3948354),He(.34,1,.3,0,4.6,.2,1908513),He(.2,.2,.05,0,4.9,.36,13123630)]),stop:()=>Wt([sn(.04,2.4,9080208),He(.7,.7,.05,0,2.5,0,12068381)]),hydrant:()=>Wt([sn(.14,.7,15197404),He(.44,.14,.14,0,.45,0,15197404)]),bench:()=>Wt([He(1.7,.08,.5,0,.45,0,7032631),He(1.7,.5,.07,0,.72,-.24,7032631),He(.08,.45,.5,-.75,.22,0,3356218),He(.08,.45,.5,.75,.22,0,3356218)]),bin:()=>sn(.3,.95,3494463),bollard:()=>sn(.12,.9,5593180),post_box:()=>He(.55,1.15,.55,0,.58,0,3100550),bus_stop:()=>Wt([He(3.2,.1,1.5,0,2.5,0,5659488),He(3.2,2.2,.06,0,1.3,-.7,9675949),sn(.06,2.5,5659488,-1.5,.7),sn(.06,2.5,5659488,1.5,.7)]),bike_rack:()=>Wt([sn(.03,.85,9212052,-.35,0),sn(.03,.85,9212052,.35,0),He(.76,.06,.06,0,.85,0,9212052)]),table:()=>Wt([He(1.4,.06,.8,0,.73,0,10119999),He(.07,.7,.07,-.6,.35,-.32,5913892),He(.07,.7,.07,.6,.35,-.32,5913892),He(.07,.7,.07,-.6,.35,.32,5913892),He(.07,.7,.07,.6,.35,.32,5913892)]),chair:()=>Wt([He(.42,.05,.42,0,.44,0,11880506),He(.42,.42,.05,0,.64,-.19,11880506),He(.36,.42,.36,0,.21,0,3816512)]),sofa:()=>Wt([He(2,.42,.9,0,.21,0,6258060),He(2,.4,.22,0,.6,-.34,5665151),He(.2,.22,.9,-.9,.53,0,5665151),He(.2,.22,.9,.9,.53,0,5665151)]),shelf:()=>Wt([He(1.2,1.8,.06,0,.9,-.17,8088149),He(1.2,.05,.4,0,.3,0,13616040),He(1.2,.05,.4,0,.9,0,13616040),He(1.2,.05,.4,0,1.5,0,13616040),He(.9,.22,.3,0,.44,0,13134396),He(.8,.22,.3,.1,1.04,0,6986319)]),floor_lamp:()=>Wt([sn(.025,1.4,2894894),He(.26,.04,.26,0,.02,0,2894894),He(.26,.24,.26,0,1.48,0,15852472)]),crate:()=>He(.6,.5,.6,0,.25,0,12159566),counter:()=>Wt([He(1.8,.98,.58,0,.49,0,4864556),He(1.8,.06,.64,0,1.01,0,14275264),He(1.72,.7,.03,0,.5,.3,7033920),He(.3,.22,.26,.55,1.15,-.05,2763824)]),stool:()=>Wt([sn(.03,.7,2894894),He(.3,.03,.3,0,.015,0,2894894),He(.34,.06,.34,0,.71,0,9063218)]),rack:()=>Wt([sn(.02,1.5,10132898,-.66,0),sn(.02,1.5,10132898,.66,0),He(1.36,.03,.03,0,1.48,0,10132898),He(1.36,.03,.44,0,.02,0,10132898),He(.3,.9,.36,-.48,.98,0,3099243),He(.3,.8,.4,-.16,1.03,0,11880506),He(.3,.95,.34,.16,.955,0,14274488),He(.3,.75,.38,.48,1.055,0,4156242)]),desk:()=>Wt([He(1.5,.05,.76,0,.73,0,13220250),He(.05,.71,.7,-.7,.355,0,6119267),He(.05,.71,.7,.7,.355,0,6119267),He(1.36,.4,.03,0,.5,.33,6119267),He(.42,.28,.04,.3,.92,-.1,1842722)])},Hv=new Set(["table","chair","sofa","shelf","floor_lamp","crate","counter","stool","rack","desk"]),Gv=320,Vv=170,Dc=240;function Wv(i,e,t){const n=new $t,s=new zn({vertexColors:!0}),r=e.props,a={},o=[],l=new Map,c=new Map,h=(U,A)=>`${Math.floor(U.x/A)}_${Math.floor(U.z/A)}`;r.forEach((U,A)=>{if(U.k==="tree"){a.tree=(a.tree??0)+1,o.push(A);return}if(!Pc[U.k])return;a[U.k]=(a[U.k]??0)+1;const[G,k]=Hv.has(U.k)?[c,120]:[l,400],K=h(U,k);let ee=G.get(K);ee||(ee=[],G.set(K,ee)),ee.push(A)});const f=new ut,u=new qt,d=new B,v=new B,g=new B(0,1,0),m=new B,p=new B,y=new Map,_=U=>t.get(U.k)?.half[1]??0,x=U=>{const A=r[U],G=y.get(U);return A.k==="tree"?Nv(A,d):d.set(1,1,1),G?(u.set(G[3],G[4],G[5],G[6]),v.set(0,-_(A),0).applyQuaternion(u).add(m.set(G[0],G[1],G[2])),f.compose(v,u,d)):f.compose(v.set(A.x,i.at(A.x,A.z),A.z),u.setFromAxisAngle(g,A.a),d)},M=kv(e,o,x);n.add(M.group);const E=new Map,R=U=>{let A=E.get(U);return A||(A=Pc[U](),E.set(U,A)),A},F=new Map,S=(U,A,G,k)=>{const K=R(r[U].k),ee=K.getAttribute("position"),ue=K.getAttribute("normal"),Ee=x(U),he=u.clone();for(let Y=0;Y<ee.count;Y++){m.fromBufferAttribute(ee,Y).applyMatrix4(Ee),p.fromBufferAttribute(ue,Y).applyQuaternion(he);const $=(k+Y)*3;A[$]=m.x,A[$+1]=m.y,A[$+2]=m.z,G[$]=p.x,G[$+1]=p.y,G[$+2]=p.z}},w=(U,A)=>{let G=0;for(const $ of U)G+=R(r[$].k).getAttribute("position").count;const k=new Float32Array(G*3),K=new Float32Array(G*3),ee=new Float32Array(G*3),ue=new Mt,Ee=new vt(ue,s);let he=0;for(const $ of U){const oe=R(r[$].k).getAttribute("color");S($,k,K,he),ee.set(oe.array,he*3),F.set($,{mesh:Ee,start:he}),he+=oe.count}ue.setAttribute("position",new xt(k,3).setUsage(ms)),ue.setAttribute("normal",new xt(K,3).setUsage(ms)),ue.setAttribute("color",new xt(ee,3)),ue.computeBoundingSphere(),ue.boundingSphere.radius+=40,Ee.matrixAutoUpdate=!1,n.add(Ee);const Y=ue.boundingSphere;return{mesh:Ee,x:Y.center.x,z:Y.center.z,r:Y.radius,far:A}},C=[...l.values()].map(U=>w(U,Gv)),z=[...c.values()].map(U=>{let A=0,G=0;for(const k of U)A+=r[k].x,G+=r[k].z;return{list:U,x:A/U.length,z:G/U.length,baked:null}}),H=U=>{M.update(U,performance.now()/1e3);for(const A of C)A.mesh.visible=Math.max(0,Math.hypot(A.x-U.x,A.z-U.z)-A.r+40)<A.far;for(const A of z){const G=Math.hypot(A.x-U.x,A.z-U.z);if(!A.baked&&G<Vv)A.baked=w(A.list,Dc);else if(A.baked&&G>Dc){n.remove(A.baked.mesh),A.baked.mesh.geometry.dispose();for(const k of A.list)F.delete(k);A.baked=null}}},N=U=>{if(M.has(U)){M.redraw(U);return}const A=F.get(U);if(!A)return;const G=A.mesh.geometry.getAttribute("position"),k=A.mesh.geometry.getAttribute("normal"),K=R(r[U].k).getAttribute("position").count;S(U,G.array,k.array,A.start),G.addUpdateRange(A.start*3,K*3),k.addUpdateRange(A.start*3,K*3),G.needsUpdate=!0,k.needsUpdate=!0};return{group:n,counts:a,update:H,apply:U=>{for(let A=0;A+8<=U.length;A+=8){const G=U[A];if(!r[G])continue;let k=y.get(G);k||(k=new Float32Array(7),y.set(G,k)),k.set(U.subarray(A+1,A+8)),N(G)}},reset:()=>{const U=[...y.keys()];y.clear();for(const A of U)N(A)}}}const Ic={compact:{wheel:.3,axles:[.78,3.28],tyre:[.2,.2],nose:.66,belt:.95,tail:.98,screen:[1.2,1.88],back:[3.3,3.95],floor:.24,round:1,tumble:.2,head:[.66,.78],rear:[.82,.98],headX:[.52,.9],rearX:[.6,.93]},saloon:{wheel:.32,axles:[.95,3.78],tyre:[.22,.22],nose:.66,belt:.98,tail:1.02,screen:[1.5,2.25],back:[3.4,4.08],floor:.24,round:1,tumble:.21,head:[.66,.77],rear:[.84,.97],headX:[.5,.9],rearX:[.55,.93]},hatch:{wheel:.31,axles:[.9,3.55],tyre:[.21,.21],nose:.66,belt:.98,tail:1,screen:[1.32,2.05],back:[4.05,4.33],floor:.24,round:1,tumble:.17,head:[.66,.77],rear:[.9,1.12],headX:[.5,.9],rearX:[.7,.95]},suv:{wheel:.37,axles:[.98,3.8],tyre:[.25,.25],nose:.9,belt:1.13,tail:1.15,screen:[1.38,2.08],back:[4.3,4.66],floor:.42,round:.85,tumble:.16,head:[.88,.99],rear:[1.02,1.2],headX:[.48,.9],rearX:[.68,.95]},pickup:{wheel:.4,axles:[1.05,4.5],tyre:[.27,.27],nose:1.02,belt:1.24,tail:1.24,screen:[1.62,2.28],back:[3.1,3.18],bed:3.32,floor:.48,round:.55,tumble:.12,head:[.98,1.12],rear:[.92,1.22],headX:[.5,.92],rearX:[.86,.98]},van:{wheel:.36,axles:[.98,4.25],tyre:[.24,.26],nose:.98,belt:1.18,screen:[.75,1.5],back:[5.16,5.22],side:[.9,2.25],floor:.4,round:.45,tumble:.05,head:[.92,1.06],rear:[.62,1.4],headX:[.5,.9],rearX:[.88,.98]},truck:{wheel:.48,axles:[1.15,5.6],tyre:[.3,.52],nose:1.25,belt:1.5,screen:[.32,.72],back:[2.05,2.1],side:[.55,1.75],box:2.25,cab:.92,floor:.62,round:.25,tumble:.04,head:[.82,.98],rear:[.62,.82],headX:[.55,.88],rearX:[.8,.97],livery:"truck"},taxi:{wheel:.32,axles:[.95,3.8],tyre:[.22,.22],nose:.68,belt:.99,tail:1.03,screen:[1.52,2.27],back:[3.42,4.1],floor:.24,round:1,tumble:.21,head:[.68,.79],rear:[.85,.98],headX:[.5,.9],rearX:[.55,.93],livery:"taxi"},bus:{wheel:.5,axles:[2.65,8.95],tyre:[.3,.52],nose:1.05,belt:1.12,screen:[.02,.22],back:[11.82,11.97],side:[.35,11.55],pillars:1.45,floor:.34,round:.3,tumble:.03,head:[.42,.62],rear:[.55,.95],headX:[.62,.9],rearX:[.8,.96],livery:"bus"}},Xv=i=>Ic[i]??Ic.saloon,ni=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},qv={taxi:1,bus:2,truck:3},ii=22;function Uc(i,e,t,n){const[s,r,a]=i.half,o=a*2,l=r*2,c=-(r+i.clearance),[h,f]=e.screen,[u,d]=e.back,v=l-.02,g=[0,o,h,f,u,d,...e.axles.flatMap(k=>n?[k-e.wheel-.06,k,k+e.wheel+.06]:[k])];e.box!==void 0&&g.push(e.box-.05,e.box),e.bed!==void 0&&g.push(e.bed-.04,e.bed);const m=Math.max(6,Math.round(o/t));for(let k=1;k<m;k++)g.push(o*k/m);const p=[...new Set(g.filter(k=>k>=0&&k<=o).map(k=>Math.round(k*1e3)/1e3))].sort((k,K)=>k-K).filter((k,K,ee)=>K===0||k-ee[K-1]>.025),y=[],_=[],x=[],M=[],E=k=>Math.min(Math.abs(k-e.axles[0]),Math.abs(k-e.axles[1])),R=k=>{const K=(k-a)/a,ee=Math.abs(K),ue=e.box!==void 0&&k>=e.box,Ee=e.box!==void 0&&!ue?e.cab??1:1,he=s*Ee*(1-.11*e.round*ni(.78,1,ee))*(1-.03*ni(.95,1,ee));let Y=k<h?e.nose+(e.belt-e.nose)*Math.pow(ni(0,h,k),.7):k>d?(e.tail??e.belt)-.06*e.round*ni(.9,1,K):e.belt,$=k<f?ni(h,f,k):k<u?1:1-ni(u,d,k),oe=Y+((e.box!==void 0?Math.min(v,e.belt+1.15):v)-Y)*$,Se=$>.02?1:0;ue&&(Y=v-.05,oe=v,$=0,Se=0);const we=.035*e.round*(1-ni(.85,1,ee))*(ue?0:1),Ce=he*(.97-(ue?0:e.tumble)*Math.min(1,$*1.6)),ze=e.wheel+.07,L=E(k),be=e.floor+.08*e.round*ni(.86,1,ee),ae=L<ze?Math.max(be,e.wheel+Math.sqrt(ze*ze-L*L)):be,re=Math.min(ae+.08,Y-.1),ce=ue?re+.12:Math.max(re+.04,Y-.28),Pe=Oe=>Oe+c,xe=[[he*.84,ae,0,0,1],[he*.975,re,0,0,1],[he*.978,re+.012,0,0,0],[he,ce,0,0,0],[he*.995,Y-.07,0,0,0],[he*.97,Y,0,0,0],[Ce+(he*.97-Ce)*.42,Y+(oe-Y)*.5,.5,0,0],[Ce,oe-(oe-Y)*.06,.94,1,0],[Ce*.72,oe,1,.5,0],[Ce*.36,oe+we*.5,1,.15,0]],me=[],qe=[];me.push([0,Pe(ae)]),qe.push([0,0,Se,1]);for(const[Oe,D,b,I,V]of xe)me.push([Oe,Pe(D)]),qe.push([b,I,Se,V]);me.push([0,Pe(oe+we*.6)]),qe.push([1,0,Se,0]);for(let Oe=xe.length-1;Oe>=0;Oe--){const[D,b,I,V,Z]=xe[Oe];me.push([-D,Pe(b)]),qe.push([I,V,Se,Z])}return{p:me,a:qe}},F=p.map(R);if(F[0].p.length!==ii)throw new Error("the traffic body ring has changed its count");F.forEach((k,K)=>{const ee=p[K],ue=ee-a;k.p.forEach(([Ee,he],Y)=>{y.push(Ee,he,ue),_.push(...k.a[Y]),x.push((ee-h)/(f-h),(ee-u)/(d-u),Math.hypot(E(ee),he-c-e.wheel)-e.wheel,0)})});const S=new B,w=new B,C=new B,z=new B,H=new B,N=new B,O=(k,K,ee,ue,Ee,he)=>{w.fromArray(y,k*3),C.fromArray(y,K*3),z.fromArray(y,ee*3),H.subVectors(C,w).cross(N.subVectors(z,w)),!(H.lengthSq()<1e-12)&&(S.copy(w).add(C).add(z).multiplyScalar(1/3),H.dot(S.sub(N.set(ue,Ee,he)))>=0?M.push(k,K,ee):M.push(k,ee,K))},P=(k,K)=>k*ii+(K%ii+ii)%ii,U=c+l*.4;for(let k=0;k+1<F.length;k++){const K=(p[k]+p[k+1])/2-a;for(let ee=0;ee<ii;ee++){const ue=P(k,ee),Ee=P(k,ee+1),he=P(k+1,ee+1),Y=P(k+1,ee);O(ue,Ee,he,0,U,K),O(ue,he,Y,0,U,K)}}for(const k of[0,F.length-1]){const K=p[k]-a,ee=k===0?K+1:K-1,ue=F[k].p.map($=>$[1]),Ee=(Math.min(...ue)+Math.max(...ue))/2,he=y.length/3;y.push(0,Ee,K),_.push(0,0,0,0),x.push(9,9,9,0);const Y=y.length/3;F[k].p.forEach(([$,oe])=>{y.push($,oe,K),_.push(0,0,0,0),x.push(9,9,9,0)});for(let $=0;$<ii;$++)O(he,Y+$,Y+($+1)%ii,0,Ee,ee)}const A=(k,K,ee,ue,Ee,he,Y,$=1)=>{const oe=y.length/3;for(const we of[-1,1])for(const Ce of[-1,1])for(const ze of[-1,1])y.push(k+we*ue*(Ce>0?$:1),K+Ce*Ee,ee+ze*he*(Ce>0?$:1)),_.push(0,0,0,Y),x.push(9,9,9,0);const Se=(we,Ce,ze,L)=>{O(oe+we,oe+Ce,oe+ze,k,K,ee),O(oe+we,oe+ze,oe+L,k,K,ee)};Se(0,1,3,2),Se(4,5,7,6),Se(0,1,5,4),Se(2,3,7,6),Se(0,2,6,4),Se(1,3,7,5)};if(n){const k=e.box!==void 0||e.livery==="bus";for(const K of[-1,1]){const ee=h+(k?.15:.42),ue=s*(e.cab??1);k?A(K*(ue+.16),c+e.belt+.55,ee-a,.04,.24,.1,1):A(K*(ue+.06),c+e.belt+.04,ee-a,.085,.05,.07,1)}}e.livery==="taxi"&&A(0,c+l+.13,(f+u)/2-a-.1,.36,.11,.13,2,.85);const G=new Mt;return G.setAttribute("position",new tt(y,3)),G.setAttribute("carA",new tt(_,4)),G.setAttribute("carB",new tt(x,4)),G.setIndex(M),G.computeVertexNormals(),G.computeBoundingSphere(),G}function $v(i,e){const[t,n,s]=i.half,r=-(n+i.clearance),a=h=>h-s,o=h=>h+r,l=e.side??[e.screen[0]+.4,Math.min(e.back[1]-.42,e.bed??99)],c=e.pillars?-99:(e.screen[1]+e.back[0])/2+.02;return{uGlass:{value:new it(a(e.screen[0]),a(e.screen[1]),a(e.back[0]),a(e.back[1]))},uSide:{value:new it(a(l[0]),a(l[1]),c===-99?-99:a(c),e.pillars??0)},uLampY:{value:new it(o(e.head[0]),o(e.head[1]),o(e.rear[0]),o(e.rear[1]))},uLampX:{value:new it(e.headX[0]*t,e.headX[1]*t,e.rearX[0]*t,e.rearX[1]*t)},uShape:{value:new it(s,t,e.livery?qv[e.livery]:0,e.box!==void 0?a(e.box):e.bed!==void 0?a(e.bed):99)},uLevels:{value:new it(o(e.belt),o(e.floor),o(n*2-.02),e.bed!==void 0?1:0)}}}const Yv=`
  attribute vec4 carA; attribute vec4 carB; attribute vec4 aState;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN; varying vec4 vState;
  uniform vec4 uShape;
  ${Ni}`,Kv=`
  vCarA = carA; vCarB = carB; vLocal = position; vLocalN = normal; vState = aState;
  if (aState.w > 0.5) {
    float ends = smoothstep(uShape.x * 0.45, uShape.x, abs(position.z));
    float lump = p2pNoise(position.xz * 3.1 + position.y * 2.3 + aState.w * 7.0) - 0.5;
    transformed -= normalize(vec3(position.x, 0.3 * position.y, position.z) + 1e-4) * (0.06 + 0.22 * ends) * (0.6 + lump);
  }`,jv=`
  uniform vec4 uGlass; uniform vec4 uSide; uniform vec4 uLampY; uniform vec4 uLampX; uniform vec4 uShape; uniform vec4 uLevels;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN; varying vec4 vState;`,Zv=`
  float vGlass = 0.0, vTrim = 0.0, vSign = 0.0; vec3 vLamp = vec3(0.0);
  {
    vec3 q = vLocal; vec3 n = normalize(vLocalN);
    float fz = fwidth(q.z), fy = fwidth(q.y), fx = fwidth(q.x), ff = fwidth(vCarA.x), fe = fwidth(vCarA.y), fu = max(fwidth(vCarB.x), fwidth(vCarB.y));
    float up = vCarA.x, edge = vCarA.y, cabin = step(0.5, vCarA.z), hl = uShape.x, hw = uShape.y, livery = uShape.z, rear = uShape.w;
    float wreck = vState.w, brake = vState.x;
    float side = step(0.62, abs(n.x));
    vec3 paint = diffuseColor.rgb;
    // --- liveries: a bus white over a coloured skirt and band; a truck's box white with a stripe; a taxi's checks
    if (livery > 1.5 && livery < 2.5) {
      float band = p2pSpan(q.y, uLevels.x - 0.36, uLevels.x - 0.14, fy) + (1.0 - smoothstep(uLevels.y + 0.42 - fy, uLevels.y + 0.42 + fy, q.y));
      diffuseColor.rgb = mix(vec3(0.86, 0.87, 0.86), paint, clamp(band, 0.0, 1.0));
    } else if (livery > 2.5) {
      float box = step(rear, q.z);
      float stripe = side * p2pSpan(q.y, uLevels.x - 0.12, uLevels.x + 0.12, fy);
      diffuseColor.rgb = mix(paint, mix(vec3(0.88, 0.88, 0.86), paint, stripe), box);
    } else if (livery > 0.5) {
      float cell = 0.11;
      float checks = mod(floor(q.z / cell) + floor((q.y - uLevels.x) / cell), 2.0);
      float band = side * p2pSpan(q.y, uLevels.x - 0.33, uLevels.x - 0.11, fy) * p2pSpan(q.z, uGlass.x, uGlass.w - 0.2, fz);
      diffuseColor.rgb = mix(diffuseColor.rgb, mix(vec3(0.02), vec3(0.85), checks), band);
    }
    // --- glass: the side panes between their pillars, the windscreen and the back window in their frames
    float pillars = uSide.w > 0.0 ? p2pLine(fract((q.z - uSide.x) / uSide.w + 0.5) - 0.5, 0.06 / uSide.w, fz / uSide.w) : p2pLine(q.z - uSide.z, 0.05, fz);
    float sideGlass = side * p2pSpan(up, 0.13, 0.87, ff) * p2pSpan(q.z, uSide.x, uSide.y, fz) * (1.0 - pillars);
    sideGlass *= step(uGlass.x + (uGlass.y - uGlass.x) * up + 0.07, q.z) * step(q.z, uGlass.w - (uGlass.w - uGlass.z) * up - 0.07);
    float top = (1.0 - side) * step(0.5, up);
    float screen = top * p2pSpan(vCarB.x, 0.06, 0.93, fu) * (1.0 - smoothstep(0.80 - fe, 0.80 + fe, edge));
    float back = top * p2pSpan(vCarB.y, 0.07, 0.92, fu) * (1.0 - smoothstep(0.80 - fe, 0.80 + fe, edge)) * step(livery, 2.5);
    vGlass = max(sideGlass, max(screen, back)) * cabin;
    // --- black: sills, arch lips, the grille, the strip under the glass, mirrors; a pickup's bed inside its sides
    float lip = p2pLine(vCarB.z - 0.05, 0.022, fwidth(vCarB.z)) * side * step(q.y, uLevels.x - 0.2);
    float grille = step(q.z, -hl + 0.2) * p2pSpan(abs(q.x), -1.0, hw * 0.55, fx) * p2pSpan(q.y, uLampY.x - 0.24, uLampY.x - 0.03, fy) * step(livery, 1.5);
    float waist = side * cabin * p2pSpan(up, 0.09, 0.13, ff);
    float bed = uLevels.w * step(rear, q.z) * step(0.8, n.y) * p2pSpan(abs(q.x), -1.0, hw * 0.86, fx) * step(q.z, hl - 0.12);
    float valance = step(0.5, abs(n.z)) * step(hl - 0.05, abs(q.z)) * (1.0 - smoothstep(uLevels.y + 0.24 - fy, uLevels.y + 0.24 + fy, q.y));
    vTrim = max(max(step(0.5, vCarA.w) * step(vCarA.w, 1.5), max(lip, valance)), max(max(grille, waist), bed));
    vSign = step(1.5, vCarA.w);
    // shut lines: two doors (a bus's door by the front axle), the bonnet
    float shut = side * step(uLevels.y + 0.1, q.y) * step(up, 0.1) * (p2pLine(q.z - (uGlass.x + 0.26), 0.006, fz) + p2pLine(q.z - uSide.z - 0.1, 0.006, fz));
    diffuseColor.rgb *= 1.0 - min(shut, 1.0) * 0.7;
    // --- lamps: the head lamps and a running strip, tail lamps that brighten with the brake, indicators, plates
    float front = step(q.z, -hl + 0.4) * step(n.z, -0.3), tail = step(hl - 0.36, q.z) * step(0.3, n.z);
    float head = front * p2pSpan(abs(q.x), uLampX.x, uLampX.y, fx) * p2pSpan(q.y, uLampY.x, uLampY.y, fy);
    float drl = front * p2pSpan(abs(q.x), uLampX.x, uLampX.y, fx) * p2pLine(q.y - uLampY.y - 0.025, 0.01, fy);
    float red = tail * p2pSpan(abs(q.x), uLampX.z, uLampX.w, fx) * p2pSpan(q.y, uLampY.z, uLampY.w, fy);
    float amberF = front * p2pSpan(abs(q.x), uLampX.y + 0.02, min(uLampX.y + 0.14, hw * 0.99), fx) * p2pSpan(q.y, uLampY.x, uLampY.y, fy);
    float amberR = tail * p2pSpan(abs(q.x), uLampX.z - 0.13, uLampX.z - 0.02, fx) * p2pSpan(q.y, uLampY.z, uLampY.w, fy);
    float plate = (front + tail) * p2pSpan(abs(q.x), -1.0, 0.26, fx) * p2pSpan(q.y, uLampY.x - 0.2, uLampY.x - 0.09, fy);
    float blink = q.x < 0.0 ? vState.y : vState.z;
    float lit = 1.0 - wreck;
    // a bus's destination board, over its windscreen
    float board = step(1.5, livery) * step(livery, 2.5) * front * p2pSpan(abs(q.x), -1.0, hw * 0.8, fx) * p2pSpan(q.y, uLevels.z - 0.34, uLevels.z - 0.1, fy);
    vLamp = (vec3(1.0, 0.95, 0.84) * (head * 0.8 + drl * 2.5) + vec3(1.0, 0.05, 0.02) * red * (0.3 + 5.0 * brake)
           + vec3(1.0, 0.45, 0.02) * (amberF + amberR) * blink * 4.0 + vec3(1.0, 0.62, 0.12) * board * 1.6 * step(0.5, fract(q.x * 9.0) + fract(q.y * 9.0) * 0.6)
           + vec3(1.0, 0.88, 0.5) * vSign * 1.4) * lit;
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.012, 0.014, 0.017), vGlass);
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.02), vTrim * (1.0 - vGlass));
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.22, 0.02, 0.015), red);
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.45, 0.25, 0.03), max(amberF, amberR));
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.55, 0.55, 0.52), max(head, plate));
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.04, 0.02), board);
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.95, 0.9, 0.7), vSign);
    // a wreck: the paint dulled and scorched, the glass crazed grey
    if (wreck > 0.5) {
      // (sooted most toward its ends, where it was likely hit, in soft patches: hard-edged ones read as a cow's hide)
      float soot = p2pFbm(q.xz * 1.1 + q.y * 0.8) * (0.6 + 0.4 * smoothstep(hl * 0.4, hl, abs(q.z)));
      diffuseColor.rgb = mix(diffuseColor.rgb * 0.5, vec3(0.06, 0.055, 0.05), 0.75 * smoothstep(0.3, 0.75, soot));
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.45, 0.48, 0.5), vGlass * step(0.5, p2pNoise(q.zy * 11.0 + q.x * 5.0)));
    }
  }`,Jv=`
  roughnessFactor = mix(mix(roughnessFactor, 0.6, vTrim), 0.05, vGlass);
  metalnessFactor = mix(mix(metalnessFactor, 0.0, vTrim), 0.85, vGlass);
  if (vState.w > 0.5) { roughnessFactor = max(roughnessFactor, 0.7); metalnessFactor *= 0.4; }`;function Fc(i,e,t){const n=t?new ph({color:16777215,metalness:.3,roughness:.38,clearcoat:1,clearcoatRoughness:.08,envMap:e,envMapIntensity:.8}):new Ss({color:16777215,metalness:.3,roughness:.4,envMap:e,envMapIntensity:.7});return n.onBeforeCompile=s=>{Object.assign(s.uniforms,i),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
${Yv}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${Kv}`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${jv}
${Ni}`).replace("#include <color_fragment>",`#include <color_fragment>
${Zv}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${Jv}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vLamp;`)},n.customProgramCacheKey=()=>t?"p2p-traffic-body-near":"p2p-traffic-body-far",n}const Qv=`
  float wheelMetal = 0.0;
  {
    float r = length(vLocal.yz), a = atan(vLocal.z, vLocal.y), fr = fwidth(r);
    float rim = 0.64;
    float face = step(0.3, abs(vLocal.x));
    float inRim = 1.0 - smoothstep(rim - fr, rim + fr, r);
    float lipRing = smoothstep(rim * 0.9 - fr, rim * 0.9 + fr, r) * inRim;
    float sp = abs(fract(a / 6.2831853 * 6.0 + 0.5) - 0.5);
    float spoke = (1.0 - smoothstep(0.09, 0.13, abs(sp - 0.13))) * step(0.16, r);
    float hub = 1.0 - smoothstep(0.17 - fr, 0.17 + fr, r);
    wheelMetal = inRim * max(max(lipRing, spoke), hub) * face;
    vec3 tyre = vec3(0.022) * (1.0 + 0.5 * step(0.93, r) * step(0.5, fract(vLocal.x * 7.0)) * (1.0 - face));
    vec3 behind = vec3(0.012) + vec3(0.09) * (1.0 - smoothstep(0.42, 0.46, r)) * step(0.17, r);
    diffuseColor.rgb = mix(mix(tyre, behind, inRim * face), vec3(0.6, 0.61, 0.63), wheelMetal);
  }`;function Nc(i,e=!1){const t=(e?[[0,.3],[.9,.5],[1,.3],[1,-.3],[.9,-.5],[0,-.3]]:[[0,.1],[.64,.44],[.72,.5],[.93,.5],[1,.36],[1,-.36],[.93,-.5],[.72,-.5],[.64,-.44],[0,-.1]]).map(([h,f])=>new Ve(h,f)),n=new Xr(t,i).rotateZ(-Math.PI/2),s=n.getAttribute("position"),r=n.index,a=new B,o=new B,l=new B,c=new B;for(let h=0;h<r.count;h+=3)if(a.fromBufferAttribute(s,r.getX(h)),o.fromBufferAttribute(s,r.getX(h+1)),l.fromBufferAttribute(s,r.getX(h+2)),c.subVectors(o,a).cross(l.clone().sub(a)),c.dot(a.add(o).add(l))<0){const f=r.getX(h+1);r.setX(h+1,r.getX(h+2)),r.setX(h+2,f)}return n.deleteAttribute("uv"),n.computeVertexNormals(),n}function ex(i){const e=new Ss({color:16777215,roughness:.85,envMap:i,envMapIntensity:.6});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLocal = position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <color_fragment>",`#include <color_fragment>
${Qv}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
roughnessFactor = mix(0.9, 0.28, wheelMetal); metalnessFactor = mix(0.0, 0.9, wheelMetal);`)},e.customProgramCacheKey=()=>"p2p-traffic-wheel",e}const Oo=[[15263972,23],[855568,19],[6053990,9],[3816770,7],[11120049,14],[2306639,7],[3105704,3],[9376784,6],[11740702,2],[3099194,2],[9075296,2],[7023130,1],[13208082,1],[14078660,4]],tx=Oo.reduce((i,[,e])=>i+e,0),zc=[2051724,11544092,2846271,13791770],Oc=[15263972,15263972,11740702,2306639,2846271,14263572];function nx(i,e,t){const n=(i>>>4)%1e3;if(e==="taxi")return t.setHex(15906565).offsetHSL(0,0,((i&15)-7.5)*.004);if(e==="bus")return t.setHex(zc[n%zc.length]);if(e==="truck")return t.setHex(Oc[n%Oc.length]);if(e==="van"&&n<550)return t.setHex(15527661);let s=n/1e3*tx;for(const[r,a]of Oo)if(s-=a,s<0)return t.setHex(r).offsetHSL(0,0,((i&15)-7.5)*.003);return t.setHex(Oo[0][0])}const is=200,ix=55,sx=110;class Br{group=new $t;kinds=[];wheels;m=new ut;w=new ut;q=new qt;p=new B;s=new B;one=new B(1,1,1);c=new We;steer=new qt;spin=new qt;wq=new qt;wp=new B;static X=new B(1,0,0);static Y=new B(0,1,0);rolled=new Map;at=new Map;clock=0;frames=0;constructor(e,t=null){const n=(r,a,o,l,c=!0)=>{const h=new fi(new Float32Array(o*4),4).setUsage(ms);r.setAttribute("aState",h);const f=new $s(r,a,o);return f.count=0,f.castShadow=l,f.receiveShadow=!0,c&&f.setColorAt(0,this.c.setHex(16777215)),f.instanceMatrix.setUsage(ms),this.group.add(f),{mesh:f,state:h,count:0}};for(const r of e){const a=Xv(r.name),o=$v(r,a),l=n(Uc(r,a,.17,!0),Fc(o,t,!0),is,!0),c=n(Uc(r,a,1,!1),Fc(o,t,!1),is,!0);l.mesh.name=`traffic ${r.name}`,c.mesh.name=`traffic ${r.name} far`,this.kinds.push({kind:r,lines:a,near:l,far:c,wheelbase:a.axles[1]-a.axles[0]})}const s=ex(t);this.wheels=[n(Nc(14),s,is*4,!1,!1),n(Nc(7,!0),s,is*4,!1,!1)],this.wheels[0].mesh.name="traffic wheels",this.wheels[1].mesh.name="traffic wheels far",this.group.name="traffic"}update(e,t,n,s){this.clock+=n,this.frames++;const r=this.clock%.8<.4?1:0,a=Math.min(t,is);for(const c of this.kinds)c.near.count=0,c.far.count=0;for(const c of this.wheels)c.count=0;const o=new Set;this.at.clear();for(let c=0;c<a;c++){const h=c*Zs,f=e[h+Rt.INDEX],u=e[h+Rt.FLAGS],d=e[h+Rt.SPEED],v=this.kinds[e[h+Rt.KIND]]??this.kinds[1]??this.kinds[0];if(!v)break;this.p.set(e[h+Rt.POS],e[h+Rt.POS+1],e[h+Rt.POS+2]),this.q.set(e[h+Rt.ROT],e[h+Rt.ROT+1],e[h+Rt.ROT+2],e[h+Rt.ROT+3]),this.m.compose(this.p,this.q,this.one);const g=this.p.distanceTo(s),m=g<ix,p=m?v.near:v.far,y=p.count++;p.mesh.setMatrixAt(y,this.m),p.mesh.setColorAt(y,nx(e[h+Rt.LOOK],v.kind.name,this.c));const _=u&Ds.WRECK?1:0;p.state.setXYZW(y,u&Ds.BRAKING?1:0,_?0:u&Ds.LEFT?r:0,_?0:u&Ds.RIGHT?r:0,_);const x=v.lines,[M,E,R]=v.kind.half,F=-(E+v.kind.clearance),S=(this.rolled.get(f)??0)+(_?0:d*n/x.wheel);this.rolled.set(f,S%(Math.PI*2)),o.add(f);const w=_?0:Math.max(-.6,Math.min(.6,Math.atan(v.wheelbase*e[h+Rt.CURVE]))),C=m?this.wheels[0]:this.wheels[1];this.spin.setFromAxisAngle(Br.X,-S);for(let z=0;z<(g<sx?2:0);z++){const H=x.tyre[z],N=x.axles[z]-R;this.steer.setFromAxisAngle(Br.Y,z===0?-w:0),this.wq.copy(this.steer).multiply(this.spin);for(const O of[-1,1]){if(C.count>=is*4)break;this.wp.set(O*(M*(x.cab!==void 0&&z===0?x.cab:1)-H/2-.03),F+x.wheel,N),this.w.compose(this.wp,this.wq,this.s.set(H,x.wheel,x.wheel)),C.mesh.setMatrixAt(C.count++,this.w.premultiply(this.m))}}this.at.set(f,this.p.clone())}for(const c of this.rolled.keys())o.has(c)||this.rolled.delete(c);const l=this.frames<=3;for(const c of[...this.kinds.flatMap(h=>[h.near,h.far]),...this.wheels]){const h=c.mesh;l&&c.count===0&&h.setMatrixAt(c.count++,this.w.makeTranslation(0,-1e4,0)),h.count=c.count,h.visible=l||c.count>0,h.frustumCulled=!l,h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),c.state.needsUpdate=!0,c.count>0&&!l&&h.computeBoundingSphere()}}static HORN=Ds.HORN}const Oa=["chase","hood","high"];class rx{constructor(e,t=-1/0){this.ground=e,this.sea=t}camera=new Sn(62,1,.3,2600);mode="chase";dir=new B(0,0,-1);eye=new B;look=new B;fresh=!0;next(){return this.mode=Oa[(Oa.indexOf(this.mode)+1)%Oa.length],this.fresh=!0,this.mode}cut(){this.fresh=!0}update(e,t){const n=new B(e[Me.POS],e[Me.POS+1],e[Me.POS+2]),s=new qt(e[Me.ROT],e[Me.ROT+1],e[Me.ROT+2],e[Me.ROT+3]).normalize(),r=new B(0,0,-1).applyQuaternion(s),a=new B(e[Me.VEL],0,e[Me.VEL+2]),o=a.length();if(this.mode==="hood"){this.camera.position.copy(n).add(new B(0,.95,-.9).applyQuaternion(s)),this.camera.quaternion.copy(s),this.camera.fov=72,this.camera.updateProjectionMatrix();return}const l=r.clone().setY(0);l.lengthSq()<1e-6?l.copy(this.dir):l.normalize();const c=l.clone(),h=e[Me.SPEED];h>4&&o>4&&c.lerp(a.clone().divideScalar(o),Math.min(.75,(h-4)/12)).normalize();const f=this.fresh?1:1-Math.exp(-t*4.5);this.dir.lerp(c,f).setY(0).normalize();const u=this.mode==="high",d=u?16:6.4+Math.min(2.2,o*.035),v=u?22:2.35,g=n.clone().addScaledVector(this.dir,-d).add(new B(0,v,0)),m=this.ground.tunnel(n.x,n.y,n.z);if(m){const x=m.way,M=x.p[m.si],E=x.p[m.si+1],R=E[0]-M[0],F=E[2]-M[2],S=Math.hypot(R,F)||1,w=R/S,C=F/S,z=g.x-M[0],H=g.z-M[2],N=z*w+H*C,O=Math.max(-x.half+.8,Math.min(x.half-.8,-z*C+H*w));g.x=M[0]+w*N-C*O,g.z=M[2]+C*N+w*O;const P=(this.ground.tunnel(g.x,n.y,g.z)?.roof??m.roof)-.45;g.y=Math.min(g.y,P),g.y=Math.max(g.y,m.floor+.9)}else{g.y=Math.max(g.y,this.ground.surface(g.x,g.z,n.y+1.5)+.9,this.sea+.7);const x=this.ground.deckOver(g.x,g.z,n.y+.5);x<1/0&&(g.y=Math.min(g.y,x-.4))}const p=n.clone().addScaledVector(this.dir,u?6:5).add(new B(0,u?0:1,0)),y=this.fresh?1:1-Math.exp(-t*9);this.eye.lerp(g,y),this.look.lerp(p,this.fresh?1:1-Math.exp(-t*14)),this.fresh=!1,this.camera.position.copy(this.eye),this.camera.lookAt(this.look);const _=60+Math.min(14,o*.28);Math.abs(_-this.camera.fov)>.05&&(this.camera.fov=_,this.camera.updateProjectionMatrix())}}const kc=80,Pr=26;function Bc(i,e){try{i.setPointerCapture(e)}catch{}}class ax{constructor(e){this.root=e,window.addEventListener("keydown",l=>{l.repeat||(this.keys.add(l.code),this.onKey(l.code),(l.code.startsWith("Arrow")||l.code==="Space")&&l.preventDefault())}),window.addEventListener("keyup",l=>this.keys.delete(l.code));const t=()=>{this.keys.clear(),this.wheel=null,this.pedals.clear(),this.paint()};window.addEventListener("blur",t),document.addEventListener("visibilitychange",()=>{document.hidden&&t()});const n=e.querySelector("#wheel");n.addEventListener("pointerdown",l=>{this.wheel={id:l.pointerId,x0:l.clientX,value:0},Bc(n,l.pointerId),this.paint()}),n.addEventListener("pointermove",l=>{this.wheel?.id===l.pointerId&&(this.wheel.value=Math.max(-1,Math.min(1,(l.clientX-this.wheel.x0)/kc)),this.paint())});const s=l=>{this.wheel?.id===l.pointerId&&(this.wheel=null,this.paint())};for(const l of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(l,s);const r=e.querySelector("#gas"),a=e.querySelector("#brake"),o=(l,c)=>{if(!l)return!1;const h=l.getBoundingClientRect();return c.clientX>h.left-Pr&&c.clientX<h.right+Pr&&c.clientY>h.top-Pr&&c.clientY<h.bottom+Pr};for(const l of e.querySelectorAll("[data-pedal]")){const c=l.dataset.pedal,h=u=>{if(c==="hand")return["hand"];const d=[];return o(r,u)&&d.push("gas"),o(a,u)&&d.push("brake"),d.length?d:[c]};l.addEventListener("pointerdown",u=>{this.pedals.set(u.pointerId,h(u)),Bc(l,u.pointerId),this.paint(),u.preventDefault()}),l.addEventListener("pointermove",u=>{this.pedals.has(u.pointerId)&&(this.pedals.set(u.pointerId,h(u)),this.paint())});const f=u=>{this.pedals.delete(u.pointerId)&&this.paint()};for(const u of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(u,f)}}keys=new Set;keySteer=0;wheel=null;pedals=new Map;override=null;onKey=()=>{};held(e){for(const t of this.pedals.values())if(t.includes(e))return!0;return!1}paint(){for(const t of this.root.querySelectorAll("[data-pedal]"))t.classList.toggle("down",this.held(t.dataset.pedal));const e=this.root.querySelector("#wheel-knob");e&&(e.style.opacity=this.wheel?"1":"0",e.style.transform=`translateX(${(this.wheel?.value??0)*kc}px)`,this.wheel&&(e.style.left=`${this.wheel.x0}px`))}sample(e){if(this.override)return this.override;const t=this.keys,n=t.has("ArrowLeft")||t.has("KeyA"),r=(t.has("ArrowRight")||t.has("KeyD")?1:0)-(n?1:0),a=(r===0?6:3.5)*e;this.keySteer+=Math.max(-a,Math.min(a,r-this.keySteer));const o=this.wheel?this.wheel.value:this.keySteer,l=t.has("ArrowUp")||t.has("KeyW")||this.held("gas"),c=t.has("ArrowDown")||t.has("KeyS")||this.held("brake"),h=t.has("Space")||this.held("hand");return{steer:Math.round(o*1e3),throttle:l?1e3:0,brake:c?1e3:0,handbrake:h?1:0}}}class ox{ctx=null;engine=null;skid=null;wind=null;noise=null;enabled=!0;start(){if(this.ctx){this.ctx.resume();return}const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=this.ctx=new e,n=t.createGain();n.gain.value=.5,n.connect(t.destination);const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=500,s.Q.value=1.2;const r=t.createGain();r.gain.value=0;const a=t.createOscillator();a.type="sawtooth";const o=t.createOscillator();o.type="square";const l=t.createGain();l.gain.value=.5,a.connect(s),o.connect(l).connect(s),s.connect(r).connect(n),a.start(),o.start(),this.engine={a,b:o,filter:s,gain:r};const c=t.createBuffer(1,t.sampleRate*2,t.sampleRate),h=c.getChannelData(0);for(let u=0;u<h.length;u++)h[u]=Math.random()*2-1;this.noise=c;const f=(u,d,v)=>{const g=t.createBufferSource();g.buffer=c,g.loop=!0;const m=t.createBiquadFilter();m.type=u,m.frequency.value=d,m.Q.value=v;const p=t.createGain();return p.gain.value=0,g.connect(m).connect(p).connect(n),g.start(),p};this.skid=f("bandpass",1700,2.5),this.wind=f("lowpass",500,.5)}burst(e,t,n,s){const r=this.ctx;if(!r||!this.noise||!this.enabled)return;const a=r.createBufferSource();a.buffer=this.noise;const o=r.createBiquadFilter();o.type=e,o.frequency.value=t,o.Q.value=.8;const l=r.createGain(),c=r.currentTime;l.gain.setValueAtTime(Math.min(1,n),c),l.gain.exponentialRampToValueAtTime(.001,c+s),a.connect(o).connect(l).connect(r.destination),a.start(c,Math.random()*1.5,s+.05)}splash(e){const t=Math.min(1,e/25);this.burst("lowpass",180,.5,.3+.4*t),this.burst("bandpass",1400,.9+t*.8,.2+.35*t),this.burst("highpass",3500,.6+t*.6,.12+.2*t)}horn(e){if(!this.ctx||!this.enabled||e>120)return;const t=this.ctx.currentTime,n=this.ctx.createGain(),s=.16/(1+e*e/400);n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(s,t+.02),n.gain.setValueAtTime(s,t+.5),n.gain.linearRampToValueAtTime(0,t+.58),n.connect(this.ctx.destination);for(const r of[392,494]){const a=this.ctx.createOscillator();a.type="sawtooth",a.frequency.value=r,a.connect(n),a.start(t),a.stop(t+.6)}}thump(e){this.burst("lowpass",260+e*20,.25+e*.06,.25+Math.min(.5,e*.03)),this.burst("bandpass",2400,e*.03,.18)}glass(){this.burst("highpass",3200,.5,.7),this.burst("bandpass",6500,.35,.4)}update(e,t){const n=this.ctx;if(!n||!this.engine||!this.skid||!this.wind)return;const s=n.currentTime,r=this.enabled?1:0,a=e[Me.RPM],o=a/60*2;this.engine.a.frequency.setTargetAtTime(o,s,.03),this.engine.b.frequency.setTargetAtTime(o*.5,s,.03),this.engine.filter.frequency.setTargetAtTime(300+a*.25+t*1400,s,.05),this.engine.gain.gain.setTargetAtTime(r*(.1+.16*t+a/7200*.08),s,.05);let l=0;for(let h=0;h<4;h++){const f=Me.WHEELS+h*Me.WHEEL_STRIDE;e[f+Me.W_GROUNDED]&&(l=Math.max(l,Math.abs(e[f+Me.W_SLIP])/.1-1.2,Math.abs(e[f+Me.W_SLIP_TAN])/.14-1.2))}const c=Math.hypot(e[Me.VEL],e[Me.VEL+2]);this.skid.gain.setTargetAtTime(r*Math.min(.35,Math.max(0,l)*.2)*Math.min(1,c/4),s,.04),this.wind.gain.setTargetAtTime(r*Math.min(.3,c*c/9e3),s,.2)}}const Pt=i=>document.getElementById(i);class lx{speed=Pt("speed");gear=Pt("gear");rpm=Pt("rpm").firstElementChild;time=Pt("time");place=Pt("place");toastEl=Pt("toast");menu=Pt("menu");hurt=Pt("hurt");lastHurt=-1;toastTimer=0;lastKmh=-1;lastGear="";lastTime="";constructor(e,t){Pt("stamp").textContent=`${e} · ${t}`,Pt("b-menu").addEventListener("click",()=>this.toggleMenu()),document.addEventListener("pointerdown",n=>{this.menu.classList.contains("open")&&!this.menu.contains(n.target)&&n.target!==Pt("b-menu")&&this.toggleMenu(!1)})}toggleMenu(e){this.menu.classList.toggle("open",e??!this.menu.classList.contains("open"))}on(e,t){Pt(e).addEventListener("click",t)}mark(e,t){Pt(e).classList.toggle("on",t)}starts(e,t){const n=Pt("starts");e.forEach((s,r)=>{const a=document.createElement("button");a.textContent=s,a.addEventListener("click",()=>{t(r),this.toggleMenu(!1)}),n.appendChild(a)})}cars(e,t,n){const s=Pt("cars");e.forEach((r,a)=>{const o=document.createElement("button"),l=document.createElement("b");l.textContent=r.name;const c=document.createElement("small");c.textContent=r.says,o.append(l,c),o.classList.toggle("on",a===t),o.addEventListener("click",()=>{n(a),this.toggleMenu(!1)}),s.appendChild(o)})}pickedCar(e){[...Pt("cars").children].forEach((t,n)=>t.classList.toggle("on",n===e))}setPlace(e){this.place.textContent=e}report(e){Pt("report").textContent=e}loading(e){Pt("loading-step").textContent=e}loaded(){Pt("loading").remove()}fail(e){const t=Pt("loading-step");t.className="err",t.textContent=e}toast(e,t=2200){this.toastEl.textContent=e,this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove("show"),t)}update(e,t,n){const s=Math.round(Math.abs(e[Me.SPEED])*3.6);s!==this.lastKmh&&(this.speed.firstChild.textContent=String(s),this.lastKmh=s);const r=e[Me.GEAR]<0?"R":String(e[Me.GEAR]);r!==this.lastGear&&(this.gear.textContent=r,this.lastGear=r);const a=Math.min(1,e[Me.RPM]/7200);this.rpm.style.width=`${(a*100).toFixed(0)}%`,this.rpm.classList.toggle("red",a>.9);const o=e[Me.DROWNED]>.5?1e3:Math.round(e[Me.DAMAGE]*100);o!==this.lastHurt&&(this.hurt.textContent=o===1e3?"engine flooded":o?`damage ${o}%  ·  engine ${Math.round(e[Me.POWER]*100)}%`:"",this.lastHurt=o);const l=Math.floor(t/60),c=`${n?"▶ ":""}${l}:${(t-l*60).toFixed(1).padStart(4,"0")}`;c!==this.lastTime&&(this.time.textContent=c,this.lastTime=c)}}const yn=128,cx=132,hx=20,fx=8,ux=70,Dt={land:"#171c23",water:"#1c3a52",green:"#1e3828",paved:"#222831",pier:"#2a2f37",building:"#2e3540",minor:"#525b68",street:"#8d97a5",main:"#e6dfcb",path:"#4d6a55",car:"#ff5a3c",target:"#ffd23c",ink:"#f2f0ea",rim:"rgba(242,240,234,.35)"},dx=new Set(["park","grass","garden","wood","pitch","playground"]),px=new Set(["water","pool"]);function mx(i){return/^(secondary|primary|trunk|motorway)$/.test(i)?2:/^(residential|unclassified|tertiary)$/.test(i)?1:0}class gx{constructor(e,t){this.page=e,this.places=e.starts.map(u=>({x:u.x,z:u.z,label:u.label.split(",")[0]}));const n=(u,d)=>(Math.floor(u/yn)+512)*4096+Math.floor(d/yn)+512,s=(u,d,v)=>{let g=1/0,m=-1/0,p=1/0,y=-1/0;for(const[_,x]of v)g=Math.min(g,_),m=Math.max(m,_),p=Math.min(p,x),y=Math.max(y,x);for(let _=Math.floor(g/yn);_<=Math.floor(m/yn);_++)for(let x=Math.floor(p/yn);x<=Math.floor(y/yn);x++){const M=n(_*yn,x*yn);let E=this.cells.get(M);E||(E={roads:[],buildings:[],areas:[],lines:[]},this.cells.set(M,E)),E[u].push(d)}};this.roads=[...e.roads,...(e.ways??[]).filter(u=>u.k==="tunnel").map(u=>({c:u.c,w:u.w,p:u.p.map(d=>[d[0],d[2]])}))],this.roads.forEach((u,d)=>s("roads",d,u.p)),e.buildings.forEach((u,d)=>s("buildings",d,u.r)),e.areas.forEach((u,d)=>s("areas",d,u.r)),e.lines.forEach((u,d)=>{(u.k==="path"||u.k==="steps")&&s("lines",d,u.p)}),this.stamp={roads:new Uint32Array(this.roads.length),buildings:new Uint32Array(e.buildings.length),areas:new Uint32Array(e.areas.length),lines:new Uint32Array(e.lines.length)};const r=12,a=Math.ceil((e.box[2]-e.box[0])/r),o=Math.ceil((e.box[3]-e.box[1])/r);this.water=document.createElement("canvas"),this.water.width=a,this.water.height=o;const l=this.water.getContext("2d"),c=l.createImageData(a,o);for(let u=0;u<o;u++)for(let d=0;d<a;d++){const v=t.at(e.box[0]+(d+.5)*r,e.box[1]+(u+.5)*r)<=e.ground.water+.6,g=(u*a+d)*4;c.data[g]=28,c.data[g+1]=58,c.data[g+2]=82,c.data[g+3]=v?255:0}l.putImageData(c,0,0);const h=u=>document.getElementById(u);this.mini=h("mini"),this.mini.width=this.mini.height=Math.round(cx*this.dpr),this.miniCtx=this.mini.getContext("2d"),this.panel=h("map"),this.big=this.panel.querySelector("canvas"),this.bigCtx=this.big.getContext("2d"),this.still=document.createElement("canvas"),this.stillCtx=this.still.getContext("2d"),this.mini.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),this.toggle()}),h("map-close").addEventListener("click",()=>this.toggle(!1)),h("map-in").addEventListener("click",()=>this.setZoom(this.zoom*2)),h("map-out").addEventListener("click",()=>this.setZoom(this.zoom/2)),h("map-clear").addEventListener("click",()=>this.setTarget(null));let f=null;this.big.addEventListener("pointerdown",u=>{f={x:u.clientX,y:u.clientY}}),this.big.addEventListener("pointerup",u=>{if(!f||Math.hypot(u.clientX-f.x,u.clientY-f.y)>12){f=null;return}f=null;const d=this.big.getBoundingClientRect(),v=this.mapView();this.tap((u.clientX-d.left-d.width/2)/(v.scale/this.dpr)+v.cx,(u.clientY-d.top-d.height/2)/(v.scale/this.dpr)+v.cz)}),window.addEventListener("resize",()=>{this.stillView=null})}target=null;onTarget=()=>{};cells=new Map;stamp={roads:new Uint32Array(0),buildings:new Uint32Array(0),areas:new Uint32Array(0),lines:new Uint32Array(0)};pass=0;water;mini;miniCtx;panel;big;bigCtx;still;stillCtx;stillView=null;zoom=1;sinceMini=1;sinceMap=1;reach=180;car={x:0,z:0,heading:0,speed:0};dpr=Math.min(2,window.devicePixelRatio||1);places;roads;get open(){return this.panel.classList.contains("open")}toggle(e){this.panel.classList.toggle("open",e??!this.open),this.stillView=null,this.sinceMap=1}setZoom(e){this.zoom=Math.max(1,Math.min(8,e)),this.stillView=null,this.sinceMap=1}setTarget(e){this.target=e,this.sinceMini=this.sinceMap=1,this.onTarget(e)}tap(e,t){const n=Math.max(ux,14/(this.mapView().scale/this.dpr));for(const o of this.places)if(Math.hypot(o.x-e,o.z-t)<n*.5)return this.setTarget({...o}),this.target;let s=1/0,r=0,a=0;for(const o of this.near("roads",e,t,n)){const l=this.roads[o].p;for(let c=0;c+1<l.length;c++){const[h,f]=l[c],[u,d]=l[c+1],v=u-h,g=d-f,m=v*v+g*g,p=m>0?Math.max(0,Math.min(1,((e-h)*v+(t-f)*g)/m)):0,y=Math.hypot(h+v*p-e,f+g*p-t);y<s&&(s=y,r=h+v*p,a=f+g*p)}}return s>n?null:(this.setTarget({x:r,z:a,label:"the pin"}),this.target)}update(e,t,n,s,r){this.car={x:e,z:t,heading:n,speed:s};const a=150+Math.min(170,Math.abs(s)*4.5);this.reach+=(a-this.reach)*Math.min(1,r*1.5),this.sinceMini+=r,this.sinceMap+=r,this.sinceMini>=1/hx&&(this.sinceMini=0,this.drawMini()),this.open&&this.sinceMap>=1/fx&&(this.sinceMap=0,this.drawMap())}near(e,t,n,s){const r=[],a=this.stamp[e],o=++this.pass;for(let l=Math.floor((t-s)/yn);l<=Math.floor((t+s)/yn);l++)for(let c=Math.floor((n-s)/yn);c<=Math.floor((n+s)/yn);c++){const h=this.cells.get((l+512)*4096+c+512);if(h)for(const f of h[e])a[f]!==o&&(a[f]=o,r.push(f))}return r}paint(e,t,n,s,r,a){const o=this.page;e.setTransform(1,0,0,1,0,0),e.fillStyle=Dt.land,e.fillRect(0,0,t,n),e.translate(t/2+s.ox,n/2+s.oy),e.rotate(s.rot),e.scale(s.scale,s.scale),e.translate(-s.cx,-s.cz),e.imageSmoothingEnabled=!0,e.drawImage(this.water,o.box[0],o.box[1],o.box[2]-o.box[0],o.box[3]-o.box[1]);const l=u=>{e.moveTo(u[0][0],u[0][1]);for(let d=1;d<u.length;d++)e.lineTo(u[d][0],u[d][1]);e.closePath()},c=u=>{e.moveTo(u[0][0],u[0][1]);for(let d=1;d<u.length;d++)e.lineTo(u[d][0],u[d][1])},h=this.near("areas",s.cx,s.cz,r);for(const[u,d]of[[v=>dx.has(v),Dt.green],[v=>px.has(v),Dt.water],[v=>v==="pier",Dt.pier],[v=>v==="plaza"||v==="parking",Dt.paved]]){e.beginPath();for(const v of h){const g=o.areas[v];u(g.k)&&g.r.length>2&&l(g.r)}e.fillStyle=d,e.fill()}if(s.scale>.1){e.beginPath();for(const u of this.near("buildings",s.cx,s.cz,r)){const d=o.buildings[u];d.r.length>3&&l(d.r)}e.fillStyle=Dt.building,e.fill()}if(e.lineCap="round",e.lineJoin="round",a){e.beginPath();for(const u of this.near("lines",s.cx,s.cz,r))c(o.lines[u].p);e.strokeStyle=Dt.path,e.lineWidth=Math.max(1.2*this.dpr/s.scale,1.5),e.setLineDash([4,4]),e.stroke(),e.setLineDash([])}const f=this.near("roads",s.cx,s.cz,r);for(const[u,d,v]of[[0,Dt.minor,.8],[1,Dt.street,1.3],[2,Dt.main,2.2]]){if(u===0&&s.scale<.2*this.dpr)continue;e.beginPath();let g=4;for(const m of f){const p=this.roads[m];mx(p.c)===u&&(c(p.p),g=Math.max(g,p.w))}e.strokeStyle=d,e.lineWidth=Math.max(v*this.dpr/s.scale,u===2?Math.min(g,14)*.8:u===1?7:3.5),e.stroke()}e.setTransform(1,0,0,1,0,0)}toScreen(e,t,n,s,r){const a=(s-e.cx)*e.scale,o=(r-e.cz)*e.scale,l=Math.cos(e.rot),c=Math.sin(e.rot);return[t/2+e.ox+a*l-o*c,n/2+e.oy+a*c+o*l]}arrow(e,t,n,s,r){e.save(),e.translate(t,n),e.rotate(s),e.beginPath(),e.moveTo(0,-r),e.lineTo(r*.72,r*.8),e.lineTo(0,r*.4),e.lineTo(-r*.72,r*.8),e.closePath(),e.fillStyle=Dt.car,e.strokeStyle="#fff",e.lineWidth=Math.max(1,r*.16),e.fill(),e.stroke(),e.restore()}drawMini(){const e=this.miniCtx,t=this.mini.width,n=this.dpr,s=t/2,r={cx:this.car.x,cz:this.car.z,scale:s*.86/this.reach,rot:-this.car.heading,ox:0,oy:s*.22};if(e.save(),e.beginPath(),e.arc(s,s,s,0,Math.PI*2),e.clip(),this.paint(e,t,t,r,this.reach*1.7,!0),this.target){const[l,c]=this.toScreen(r,t,t,this.target.x,this.target.z),h=l-s,f=c-s,u=Math.hypot(h,f),d=s-9*n,v=Math.hypot(this.target.x-this.car.x,this.target.z-this.car.z);if(e.fillStyle=Dt.target,e.strokeStyle="#1a1a1a",e.lineWidth=1.5*n,u<=d)e.beginPath(),e.arc(l,c,5*n,0,Math.PI*2),e.fill(),e.stroke();else{const g=h/u,m=f/u,p=s+g*d,y=s+m*d,_=7*n;e.beginPath(),e.moveTo(p+g*_,y+m*_),e.lineTo(p-g*_*.5-m*_*.8,y-m*_*.5+g*_*.8),e.lineTo(p-g*_*.5+m*_*.8,y-m*_*.5-g*_*.8),e.closePath(),e.fill(),e.stroke(),e.font=`600 ${10*n}px system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle";const x=v>=1e3?`${(v/1e3).toFixed(1)} km`:`${Math.round(v/10)*10} m`,M=s+g*(d-20*n),E=s+m*(d-20*n);e.lineWidth=3*n,e.strokeStyle="rgba(10,12,16,.85)",e.strokeText(x,M,E),e.fillStyle=Dt.target,e.fillText(x,M,E)}}this.arrow(e,s,s+r.oy,0,7.5*n),e.restore(),e.beginPath(),e.arc(s,s,s-n,0,Math.PI*2),e.strokeStyle=Dt.rim,e.lineWidth=2*n,e.stroke();const a=s+Math.sin(r.rot)*(s-9*n),o=s-Math.cos(r.rot)*(s-9*n);e.font=`700 ${10*n}px system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.lineWidth=3*n,e.strokeStyle="rgba(10,12,16,.85)",e.strokeText("N",a,o),e.fillStyle=Dt.ink,e.fillText("N",a,o)}mapView(){const e=this.big.width||1,t=this.big.height||1,n=this.page.box,s=Math.min(e/(n[2]-n[0]),t/(n[3]-n[1]))*.98;return this.zoom<=1?{cx:(n[0]+n[2])/2,cz:(n[1]+n[3])/2,scale:s,rot:0,ox:0,oy:0}:{cx:this.car.x,cz:this.car.z,scale:s*this.zoom,rot:0,ox:0,oy:0}}drawMap(){const e=this.big.getBoundingClientRect(),t=Math.round(e.width*this.dpr),n=Math.round(e.height*this.dpr);if(t<8||n<8)return;(this.big.width!==t||this.big.height!==n)&&(this.big.width=t,this.big.height=n,this.stillView=null);const s=this.mapView(),r=this.bigCtx,a=Math.round(40*this.dpr),o=this.stillView;(!o||o.scale!==s.scale||Math.abs((s.cx-o.cx)*s.scale)>a*.8||Math.abs((s.cz-o.cz)*s.scale)>a*.8)&&(this.still.width=t+a*2,this.still.height=n+a*2,this.paint(this.stillCtx,this.still.width,this.still.height,s,Math.hypot(this.still.width,this.still.height)/2/s.scale,s.scale>.45*this.dpr),this.stillView={...s});const l=this.stillView;r.setTransform(1,0,0,1,0,0),r.drawImage(this.still,Math.round(-a-(s.cx-l.cx)*s.scale),Math.round(-a-(s.cz-l.cz)*s.scale));const c=this.dpr;r.font=`600 ${11*c}px system-ui, sans-serif`,r.textBaseline="middle",r.textAlign="left";for(const u of this.places){const[d,v]=this.toScreen(s,t,n,u.x,u.z);r.beginPath(),r.arc(d,v,4*c,0,Math.PI*2),r.fillStyle=Dt.ink,r.fill(),r.lineWidth=3*c,r.strokeStyle="rgba(10,12,16,.85)",r.strokeText(u.label,d+8*c,v),r.fillStyle=Dt.ink,r.fillText(u.label,d+8*c,v)}if(this.target){const[u,d]=this.toScreen(s,t,n,this.target.x,this.target.z);r.beginPath(),r.arc(u,d,9*c,0,Math.PI*2),r.strokeStyle=Dt.target,r.lineWidth=3*c,r.stroke(),r.beginPath(),r.arc(u,d,3.5*c,0,Math.PI*2),r.fillStyle=Dt.target,r.fill()}const[h,f]=this.toScreen(s,t,n,this.car.x,this.car.z);this.arrow(r,h,f,this.car.heading,9*c)}probe(){return{open:this.open,zoom:this.zoom,target:this.target,reach:this.reach}}}const ri=new URLSearchParams(location.search),vx=ri.has("test"),ka=ri.get("world")??"sf",Hc=1,ko=()=>new Promise(i=>requestAnimationFrame(()=>i())),xx=14;async function _x(){const i=new lx("05d104c 2026-11-20 19:46Z",""),e=async I=>{i.loading(I),await ko()};await e("the sim core");const t=await lg(`./core/p2p_core.wasm${as}`),n=["p2p_new_car","p2p_kind_count","p2p_car_count","p2p_traffic_drain","p2p_traffic_stride","p2p_vehicle_count","p2p_events_drain"].filter(I=>typeof t[I]!="function");if(n.length)throw new Error(`this page (${"05d104c 2026-11-20 19:46Z".split(" ")[0]}) was given a sim core from another build (it has no ${n.join(", ")}). Reload; if that does not cure it, clear this site's data.`);await e("the city");const[s,r]=await Promise.all([Dg(`./world/${ka}.p2pw${as}`),fetch(`./world/${ka}.json${as}`).then(I=>{if(!I.ok)throw new Error(`world ${ka}: ${I.status}`);return I.json()})]),a=new Pg(s);a.setWays(r.ways??[]),document.getElementById("stamp").textContent=`05d104c 2026-11-20 19:46Z · ${r.name} from ${r.from.repo} ${r.from.sha} · ${r.attribution}`;const o=zg(ri),l=new Bg(document.getElementById("view"),o),c=new rx(a,r.ground.sea??-1/0);await e("the ground");let h=null;r.photo&&(h=await new gh().loadAsync(`./world/${r.photo.file}${as}`),h.colorSpace=Jt,h.anisotropy=Math.min(8,l.renderer.capabilities.getMaxAnisotropy()));const f=Yg(a,r,h);await f.ready,f.group.name="ground",l.scene.add(f.group),await e("the streets");const u=ev(a,r);u.group.name="streets",l.scene.add(u.group),await e("the bridges and tunnels");const d=rv(r,a);l.scene.add(d.group),await e("the buildings");const v=Tv(r);v.name="buildings",l.scene.add(v),await e("what stands along the streets");const g=Wv(a,r,ag(t));g.group.name="props",l.scene.add(g.group);const m=new ov(r,l.reflections);m.group.name="shopfronts",l.scene.add(m.group),await e("the car");const p=cg(t),y=(()=>{try{return localStorage.getItem("p2p.car")}catch{return null}})();let _=Math.min(p.length-1,Math.max(0,Math.floor(Number(ri.get("car")??y??0))||0));const x=Math.max(0,Math.min(120,Math.floor(Number(ri.get("traffic")??36))||0)),M=(()=>{try{return localStorage.getItem("p2p.soft")}catch{return null}})();let E=(ri.get("soft")??M??"1")!=="0",R=new lc(t,s,Hc,_);R.wantTraffic(x);const F=I=>{const V=p[I],Z=new Rg({halfTrack:V.param("HALF_TRACK"),axleFront:V.param("AXLE_FRONT"),axleRear:V.param("AXLE_REAR"),wheelRadius:V.param("WHEEL_RADIUS"),overhang:V.param("OVERHANG")},l.reflections,{...Lg(V.name),roof:V.param("CABIN_TOP")+.015});return Z.group.name="car",Z.loose.name="car smoke",l.scene.add(Z.group,Z.loose),Z};let S=F(_),w=!1;const C=og(t),z=new Br(C,l.reflections);l.scene.add(z.group);const H=new ax(document.body),N=new ox,O=1/R.tickRate,P=R.stateLength,U=new Float32Array(P),A=new Float32Array(P),G=new Float32Array(P);let k={start:0,car:_,inputs:[],ticks:0,digest:""},K=null,ee={throttle:0,brake:0};const ue=I=>{const V=performance.now();R.drop(),R=new lc(t,s,Hc,_),R.wantTraffic(x),R.setSoft(E);const Z=r.starts[I]??r.starts[0];return R.place(Z.x,Z.z,Z.heading),S.useSoft(E?R.softBuilt():null),w=!1,R.read(A),U.set(A),k={start:I,car:_,inputs:[],ticks:0,digest:""},g.reset(),m.reset(),Se=0,c.cut(),i.setPlace(Z.label),performance.now()-V},Ee=I=>{if(!(I===_||!p[I])){_=I;try{localStorage.setItem("p2p.car",String(I))}catch{}l.scene.remove(S.group,S.loose),S.group.traverse(V=>{const Z=V;Z.isMesh&&Z.geometry.dispose()}),S=F(I),K=null,ue(k.start),i.pickedCar(I),i.toast(`${p[I].name}: ${p[I].says}`,3200)}},he=(I=k.start)=>{K=null;const V=ue(I);i.toast(`restart in ${V.toFixed(0)} ms`,1200)},Y=()=>{if(K||k.ticks===0){i.toast("drive first, then replay it");return}const I={...k,inputs:k.inputs.slice(),digest:R.digest()};ue(I.start),K={of:I,at:0},i.toast(`replaying ${I.ticks} ticks from their inputs`)},$=()=>{if(!K)return;const{of:I}=K,V=R.digest(),Z=V===I.digest;i.report(`replay of ${I.ticks} ticks (${(I.ticks*O).toFixed(1)} s)
driven:   ${I.digest}
replayed: ${V}
${Z?"SAME: the run is its inputs":"DIFFERENT: this is a bug, please send this text"}`),i.toast(Z?"replay ended where the drive did, to the bit":"replay DIFFERS from the drive",4e3),i.toggleMenu(!0),k={...I,inputs:I.inputs.slice()},K=null},oe=[0,0,0,0];let Se=0;const we=()=>{let I;if(K){const V=K.at*4,Z=K.of.inputs;I={steer:Z[V],throttle:Z[V+1],brake:Z[V+2],handbrake:Z[V+3]},K.at++}else I=H.sample(O);k.inputs.push(I.steer,I.throttle,I.brake,I.handbrake),U.set(A),R.step(I),R.read(A),k.ticks++,ee=I,K&&K.at>=K.of.ticks&&$()};i.starts(r.starts.map(I=>I.label),I=>he(I)),i.cars(p.map(I=>({name:I.name,says:I.says})),_,Ee),i.on("b-restart",()=>he()),i.on("b-camera",()=>i.toast(`camera: ${c.next()}`,900)),i.on("b-replay",()=>{i.toggleMenu(!1),Y()}),i.on("b-sound",()=>{N.enabled=!N.enabled,i.mark("b-sound",N.enabled)}),i.mark("b-soft",E),i.on("b-soft",()=>{E=!E;try{localStorage.setItem("p2p.soft",E?"1":"0")}catch{}i.mark("b-soft",E),K=null,ue(k.start),i.toast(E?"soft-body damage: the body bends, panels come off, the engine takes it":"damage as four dents",2600)}),i.on("b-check",()=>void Mx(t,i));let Ce=ri.has("prof"),ze=0,L=null,be=null,ae=null;i.on("b-frames",()=>{Ce=!Ce,i.mark("b-frames",Ce),Ce||i.report("")}),i.mark("b-frames",Ce);const re=new gx(r,a),ce=new vt(new Wr(2.2,2.2,160,20,1,!0).translate(0,80,0),new qs({color:16765500,transparent:!0,opacity:.4,blending:Ha,depthWrite:!1,side:Xt,fog:!1}));ce.name="target",ce.visible=!1,ce.frustumCulled=!1,l.scene.add(ce);let Pe=0;re.onTarget=I=>{ce.visible=!!I,I&&(ce.position.set(I.x,a.at(I.x,I.z),I.z),Pe=k.ticks,i.toast(`target: ${I.label}`,1400))},H.onKey=I=>{I==="KeyN"?re.toggle():I==="Escape"?re.toggle(!1):I==="KeyR"?he():I==="KeyC"?c.next():I==="KeyM"?i.toggleMenu():I==="KeyP"&&Y()},window.addEventListener("pointerdown",()=>N.start(),{passive:!0}),window.addEventListener("keydown",()=>N.start()),window.addEventListener("resize",()=>l.resize(c.camera)),l.resize(c.camera),ue(Number(ri.get("start")??0)),i.loaded();const xe=[],me=[];let qe=performance.now(),Oe=0;const D=new B,b=I=>{const V=Math.min(.1,(I-qe)/1e3);qe=I,Se+=V;const Z=performance.now();let j=0;for(;Se>=O&&j<12;)we(),Se-=O,j++;j===12&&(Se=0);const ve=performance.now()-Z;if(j){const te=R.movedProps();oe[0]=(oe[0]??0)+te.length/8,g.apply(te);for(const ne of R.events())if(oe[ne.what]=(oe[ne.what]??0)+1,ne.what===In.BLOW)N.thump(ne.b);else if(ne.what===In.GLASS)N.glass(),m.shatter(ne.a,ne.b);else if(ne.what===In.SNAPPED)N.thump(ne.b*.4);else if(ne.what===In.HORN){const ie=z.at.get(ne.a);ie&&N.horn(Math.hypot(ie.x-A[Me.POS],ie.z-A[Me.POS+2]))}else ne.what===In.WRECK?N.thump(ne.b*.6):ne.what===In.SPLASH?(N.splash(ne.a),S.splash(ne.a),i.toast("in the bay",1600)):ne.what===In.CAME_OFF&&(N.thump(4),i.toast(ne.a>=10?"a wheel came off":`the ${["","bonnet","boot lid","front bumper","rear bumper","left door","right door"][ne.a]??"panel"} came off`,1800))}const le=Se/O;for(let te=0;te<P;te++)G[te]=U[te]+(A[te]-U[te])*le;for(let te=0;te<4;te++){const ne=Me.WHEELS+te*Me.WHEEL_STRIDE+Me.W_ANGLE;Math.abs(A[ne]-U[ne])>3&&(G[ne]=A[ne])}if(L){for(let te=0;te<4;te++)G[Me.CRUSH+te]=L[te];G[Me.POWER]=L[4]}if(E&&j){const te=A[Me.SOFT_AWAKE]>.5;if(te||w){const ne=R.softNow();S.soft(ne.nodes,A[Me.HOLDS],ne.loose),w=te||ne.loose.length>0}}if(S.update(G,ee.brake>0&&A[Me.GEAR]>0,V),c.update(G,V),be){const te=new B(G[Me.POS],G[Me.POS+1],G[Me.POS+2]),ne=new qt(G[Me.ROT],G[Me.ROT+1],G[Me.ROT+2],G[Me.ROT+3]).normalize();c.camera.position.set(...be).applyQuaternion(ne).add(te),c.camera.lookAt(te.x,te.y+.2,te.z),c.camera.fov=50,c.camera.updateProjectionMatrix()}ae&&(c.camera.position.set(ae[0][0],ae[0][1],ae[0][2]),c.camera.lookAt(ae[1][0],ae[1][1],ae[1][2]),c.camera.fov=62,c.camera.updateProjectionMatrix()),f.update(c.camera.position),g.update(c.camera.position),u.update(c.camera.position),m.update(V,c.camera.position);{const te=R.traffic();z.update(te.cars,te.count,V,c.camera.position)}D.set(G[Me.POS],G[Me.POS+1],G[Me.POS+2]),l.follow(D,c.camera.position),N.update(A,ee.throttle/1e3),i.update(A,k.ticks*O,!!K),A[Me.DROWNED]>.5&&A[Me.FLOOD]>.98&&Math.abs(A[Me.SPEED])<.6?(ze+=V,ze>3.5&&!K&&(ze=0,he(),i.toast("sunk. back on the road",2400))):ze=0;{const te=new qt(G[Me.ROT],G[Me.ROT+1],G[Me.ROT+2],G[Me.ROT+3]).normalize(),ne=new B(0,0,-1).applyQuaternion(te);re.update(G[Me.POS],G[Me.POS+2],Math.atan2(ne.x,-ne.z),G[Me.SPEED],V);const ie=re.target;if(ie&&Math.hypot(ie.x-G[Me.POS],ie.z-G[Me.POS+2])<xx){k.ticks<Pe&&(Pe=0);const fe=(k.ticks-Pe)*O;i.toast(`there: ${ie.label}, ${Math.floor(fe/60)}:${(fe%60).toFixed(1).padStart(4,"0")} from setting it`,3200),re.setTarget(null)}}l.draw(c.camera),xe.push(V*1e3),me.push(ve),xe.length>600&&(xe.shift(),me.shift()),Oe+=V,Ce&&Oe>1&&(Oe=0,i.report(Gc(xe,me,l,c.camera,g.counts))),requestAnimationFrame(b)};requestAnimationFrame(b),vx&&(window.__p2p={ready:!0,page:r,scene:l.scene,state:()=>Array.from(A),tick:()=>k.ticks,digest:()=>R.digest(),drive:I=>{H.override=I},advance:I=>{for(let V=0;V<I;V++)we()},restart:he,startReplay:Y,place:(I,V,Z)=>{R.place(I,V,Z),R.read(A),U.set(A),c.cut()},placeAt:(I,V,Z,j)=>{R.placeAt(I,V,Z,j),R.read(A),U.set(A),c.cut()},seen:()=>({moved:oe[0],blows:oe[In.BLOW],snapped:oe[In.SNAPPED],glass:oe[In.GLASS]}),replaying:()=>!!K,camera:I=>{c.mode=I,c.cut()},cars:()=>p.map(I=>I.name),car:I=>Ee(I),traffic:()=>{const I=R.traffic(),V=[];for(let Z=0;Z<I.count;Z++){const j=Z*Zs,ve=I.cars;V.push({i:ve[j+Rt.INDEX],x:ve[j+Rt.POS],y:ve[j+Rt.POS+1],z:ve[j+Rt.POS+2],speed:ve[j+Rt.SPEED],flags:ve[j+Rt.FLAGS],kind:ve[j+Rt.KIND],name:C[ve[j+Rt.KIND]]?.name??"?",curve:ve[j+Rt.CURVE]})}return V},map:{toggle:I=>re.toggle(I),zoom:I=>re.setZoom(I),tap:(I,V)=>re.tap(I,V),clear:()=>re.setTarget(null),state:()=>re.probe()},show:I=>{L=I},look:I=>{be=I},view:(I,V)=>{ae=I&&V?[I,V]:null},ground:(I,V)=>a.at(I,V),selftest:I=>rl(t.p2p_selftest(I)),frames:()=>Gc(xe,me,l,c.camera,g.counts),info:()=>({calls:l.renderer.info.render.calls,triangles:l.renderer.info.render.triangles})})}function Ba(i,e){return i[Math.min(i.length-1,Math.floor(i.length*e))]??0}function yx(i,e){const t=new Vr().setFromProjectionMatrix(new ut().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)),n=new pi,s=[];for(const r of i.scene.children){if(!r.name)continue;let a=0,o=0;r.traverseVisible(l=>{const c=l;if(!c.isMesh)return;const h=l,f=h.isInstancedMesh?h.boundingSphere:c.geometry.boundingSphere;if(f&&(n.copy(f).applyMatrix4(c.matrixWorld),!t.intersectsSphere(n)))return;const u=c.geometry,d=(u.index?u.index.count:u.getAttribute("position").count)/3;a+=d*(h.isInstancedMesh?h.count:1),o++}),s.push(`${r.name} ${Math.round(a/1e3)}k/${o}`)}return s.join(", ")}function Gc(i,e,t,n,s){const r=[...i].sort((c,h)=>c-h),a=[...e].sort((c,h)=>c-h),o=t.renderer.info.render,l=t.renderer.getDrawingBufferSize(new Ve);return[`frames (last ${i.length}): median ${Ba(r,.5).toFixed(1)} ms, 95th ${Ba(r,.95).toFixed(1)}, worst ${(r[r.length-1]??0).toFixed(1)}`,`sim a frame: median ${Ba(a,.5).toFixed(2)} ms, worst ${(a[a.length-1]??0).toFixed(2)}`,`drawn: ${o.triangles.toLocaleString()} triangles in ${o.calls} calls (shadow pass included), ${l.x} x ${l.y} px (dpr ${t.knobs.dpr}), shadows ${t.knobs.shadows?"on":"off"}`,`in view, thousand triangles / meshes: ${yx(t,n)}`,`props: ${Object.entries(s).map(([c,h])=>`${h} ${c}`).join(", ")}`,navigator.userAgent].join(`
`)}async function Mx(i,e){e.report("running the reference drive…"),await ko(),await ko();let t=null;try{const l=await fetch(`./core/selftest.json${as}`);l.ok&&(t=await l.json())}catch{}const n=t?.ticks??12e3,s=performance.now(),r=rl(i.p2p_selftest(n)),a=performance.now()-s,o=t?r===t.digest?"SAME as the build machine: this device runs the same race":"DIFFERENT from the build machine: please send this text":"no reference digest shipped with this build";e.report([`reference drive, ${n} ticks (${(n/i.p2p_tick_rate()).toFixed(0)} s of driving)`,`this device: ${r}`,`reference:   ${t?.digest??"none"}${t?` (${t.made})`:""}`,o,`${a.toFixed(0)} ms: ${(a/n*1e3).toFixed(1)} µs a tick, one car, world build included`,navigator.userAgent].join(`
`))}_x().catch(i=>{console.error(i);const e=document.getElementById("loading-step");e?(e.className="err",e.textContent=`could not start: ${i instanceof Error?i.message:String(i)}`):document.body.insertAdjacentHTML("beforeend",`<div style="position:fixed;inset:auto 8px 8px 8px;z-index:99;background:#400;color:#fff;padding:8px;border-radius:8px">${String(i)}</div>`)});
