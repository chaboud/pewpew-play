(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="180",Tf=0,Ol=1,Rf=2,Lh=1,Ph=2,si=3,bi=0,yn=1,gn=2,Mi=0,vs=1,uo=2,kl=3,Bl=4,Cf=5,Oi=100,Lf=101,Pf=102,Df=103,If=104,Uf=200,Ff=201,Nf=202,zf=203,po=204,mo=205,Of=206,kf=207,Bf=208,Hf=209,Gf=210,Vf=211,Wf=212,qf=213,Xf=214,go=0,xo=1,vo=2,ws=3,_o=4,yo=5,Mo=6,wo=7,ml=0,$f=1,Yf=2,wi=0,Kf=1,jf=2,Zf=3,Dh=4,Jf=5,Qf=6,eu=7,Ih=300,bs=301,Ss=302,bo=303,So=304,aa=306,Eo=1e3,Bi=1001,Ao=1002,fn=1003,tu=1004,xr=1005,Sn=1006,ma=1007,ai=1008,jn=1009,Uh=1010,Fh=1011,ir=1012,gl=1013,Si=1014,Fn=1015,Wi=1016,xl=1017,vl=1018,sr=1020,Nh=35902,zh=35899,Oh=1021,kh=1022,_n=1023,rr=1026,ar=1027,_s=1028,_l=1029,Bh=1030,yl=1031,Ml=1033,Kr=33776,jr=33777,Zr=33778,Jr=33779,To=35840,Ro=35841,Co=35842,Lo=35843,Po=36196,Do=37492,Io=37496,Uo=37808,Fo=37809,No=37810,zo=37811,Oo=37812,ko=37813,Bo=37814,Ho=37815,Go=37816,Vo=37817,Wo=37818,qo=37819,Xo=37820,$o=37821,Yo=36492,Ko=36494,jo=36495,Zo=36283,Jo=36284,Qo=36285,el=36286,nu=3200,Hh=3201,wl=0,iu=1,Vn="",hn="srgb",Es="srgb-linear",ia="linear",zt="srgb",ji=7680,Hl=519,su=512,ru=513,au=514,Gh=515,ou=516,lu=517,cu=518,hu=519,Gl=35044,As=35048,Vl="300 es",Yn=2e3,sa=2001;class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ga=Math.PI/180,tl=180/Math.PI;function gr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function fu(i,e){return(i%e+e)%e}function xa(i,e,t){return(1-t)*i+t*e}function zs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],m=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==m){let x=1-o;const p=l*d+c*f+h*m+u*g,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),M=Math.atan2(E,p*y);x=Math.sin(x*M)/E,o=Math.sin(o*M)/E}const v=o*y;if(l=l*x+d*v,c=c*x+f*v,h=h*x+m*v,u=u*x+g*v,x===1-o){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new k,Wl=new Jt;class gt{constructor(e,t,n,s,r,a,o,l,c){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],g=s[0],x=s[3],p=s[6],y=s[1],_=s[4],v=s[7],E=s[2],M=s[5],T=s[8];return r[0]=a*g+o*y+l*E,r[3]=a*x+o*_+l*M,r[6]=a*p+o*v+l*T,r[1]=c*g+h*y+u*E,r[4]=c*x+h*_+u*M,r[7]=c*p+h*v+u*T,r[2]=d*g+f*y+m*E,r[5]=d*x+f*_+m*M,r[8]=d*p+f*v+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(s*c-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new gt;function Vh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uu(){const i=or("canvas");return i.style.display="block",i}const ql={};function lr(i){i in ql||(ql[i]=!0,console.warn(i))}function du(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Xl=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pu(){const i={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===zt&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===zt&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Es]:{primaries:e,whitePoint:n,transfer:ia,toXYZ:Xl,fromXYZ:$l,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:zt,toXYZ:Xl,fromXYZ:$l,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const Rt=pu();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class mu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zi===void 0&&(Zi=or("canvas")),Zi.width=e.width,Zi.height=e.height;const s=Zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gu=0;class bl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ya(s[a].image)):r.push(ya(s[a]))}else r=ya(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xu=0;const Ma=new k;class un extends Ds{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=Bi,s=Bi,r=Sn,a=ai,o=_n,l=jn,c=un.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=gr(),this.name="",this.source=new bl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eo:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eo:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Ih;un.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],g=l[2],x=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+x)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(f+1)/2,E=(p+1)/2,M=(h+d)/4,T=(u+g)/4,D=(m+x)/4;return _>v&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=M/n,r=T/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=D/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=D/r),this.set(n,s,r,t),this}let y=Math.sqrt((x-m)*(x-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(x-m)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vu extends Ds{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new un(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new bl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends vu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wh extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _u extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),_r.subVectors(this.max,Os),Ji.subVectors(e.a,Os),Qi.subVectors(e.b,Os),es.subVectors(e.c,Os),hi.subVectors(Qi,Ji),fi.subVectors(es,Qi),Ci.subVectors(Ji,es);let t=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Ci.z,Ci.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Ci.z,0,-Ci.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Ci.y,Ci.x,0];return!wa(t,Ji,Qi,es,_r)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,Ji,Qi,es,_r))?!1:(yr.crossVectors(hi,fi),t=[yr.x,yr.y,yr.z],wa(t,Ji,Qi,es,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new k,new k,new k,new k,new k,new k,new k,new k],On=new k,vr=new Yi,Ji=new k,Qi=new k,es=new k,hi=new k,fi=new k,Ci=new k,Os=new k,_r=new k,yr=new k,Li=new k;function wa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Li.fromArray(i,r);const o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yu=new Yi,ks=new k,ba=new k;class Ei{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(ba)),this.expandByPoint(ks.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qn=new k,Sa=new k,Mr=new k,ui=new k,Ea=new k,wr=new k,Aa=new k;class Mu{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sa.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Sa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Mr),o=ui.dot(this.direction),l=-ui.dot(Mr),c=ui.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sa).addScaledVector(Mr,d),f}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,s,r){Ea.subVectors(t,e),wr.subVectors(n,e),Aa.crossVectors(Ea,wr);let a=this.direction.dot(Aa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);const l=o*this.direction.dot(wr.crossVectors(ui,wr));if(l<0)return null;const c=o*this.direction.dot(Ea.cross(ui));if(c<0||l+c>a)return null;const h=-o*ui.dot(Aa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,m,g,x){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,g,x)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,g,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d+g*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,g=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wu,e,bu)}lookAt(e,t,n){const s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),di.crossVectors(n,En),di.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),di.crossVectors(n,En)),di.normalize(),br.crossVectors(En,di),s[0]=di.x,s[4]=br.x,s[8]=En.x,s[1]=di.y,s[5]=br.y,s[9]=En.y,s[2]=di.z,s[6]=br.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],g=n[6],x=n[10],p=n[14],y=n[3],_=n[7],v=n[11],E=n[15],M=s[0],T=s[4],D=s[8],b=s[12],w=s[1],P=s[5],F=s[9],I=s[13],H=s[2],z=s[6],N=s[10],U=s[14],L=s[3],G=s[7],B=s[11],j=s[15];return r[0]=a*M+o*w+l*H+c*L,r[4]=a*T+o*P+l*z+c*G,r[8]=a*D+o*F+l*N+c*B,r[12]=a*b+o*I+l*U+c*j,r[1]=h*M+u*w+d*H+f*L,r[5]=h*T+u*P+d*z+f*G,r[9]=h*D+u*F+d*N+f*B,r[13]=h*b+u*I+d*U+f*j,r[2]=m*M+g*w+x*H+p*L,r[6]=m*T+g*P+x*z+p*G,r[10]=m*D+g*F+x*N+p*B,r[14]=m*b+g*I+x*U+p*j,r[3]=y*M+_*w+v*H+E*L,r[7]=y*T+_*P+v*z+E*G,r[11]=y*D+_*F+v*N+E*B,r[15]=y*b+_*I+v*U+E*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],g=e[7],x=e[11],p=e[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+g*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+x*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],g=e[13],x=e[14],p=e[15],y=u*x*c-g*d*c+g*l*f-o*x*f-u*l*p+o*d*p,_=m*d*c-h*x*c-m*l*f+a*x*f+h*l*p-a*d*p,v=h*g*c-m*u*c+m*o*f-a*g*f-h*o*p+a*u*p,E=m*u*l-h*g*l-m*o*d+a*g*d+h*o*x-a*u*x,M=t*y+n*_+s*v+r*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=y*T,e[1]=(g*d*r-u*x*r-g*s*f+n*x*f+u*s*p-n*d*p)*T,e[2]=(o*x*r-g*l*r+g*s*c-n*x*c-o*s*p+n*l*p)*T,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*T,e[4]=_*T,e[5]=(h*x*r-m*d*r+m*s*f-t*x*f-h*s*p+t*d*p)*T,e[6]=(m*l*r-a*x*r-m*s*c+t*x*c+a*s*p-t*l*p)*T,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*T,e[8]=v*T,e[9]=(m*u*r-h*g*r-m*n*f+t*g*f+h*n*p-t*u*p)*T,e[10]=(a*g*r-m*o*r+m*n*c-t*g*c-a*n*p+t*o*p)*T,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*T,e[12]=E*T,e[13]=(h*g*s-m*u*s+m*n*d-t*g*d-h*n*x+t*u*x)*T,e[14]=(m*o*s-a*g*s-m*n*l+t*g*l+a*n*x-t*o*x)*T,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,g=a*h,x=a*u,p=o*u,y=l*c,_=l*h,v=l*u,E=n.x,M=n.y,T=n.z;return s[0]=(1-(g+p))*E,s[1]=(f+v)*E,s[2]=(m-_)*E,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(d+p))*M,s[6]=(x+y)*M,s[7]=0,s[8]=(m+_)*T,s[9]=(x-y)*T,s[10]=(1-(d+g))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const a=ts.set(s[4],s[5],s[6]).length(),o=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);const c=1/r,h=1/a,u=1/o;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,t.setFromRotationMatrix(kn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Yn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let m,g;if(l)m=r/(a-r),g=a*r/(a-r);else if(o===Yn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===sa)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Yn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let m,g;if(l)m=1/(a-r),g=a/(a-r);else if(o===Yn)m=-2/(a-r),g=-(a+r)/(a-r);else if(o===sa)m=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ts=new k,kn=new Lt,wu=new k(0,0,0),bu=new k(1,1,1),di=new k,br=new k,En=new k,Yl=new Lt,Kl=new Jt;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Su=0;const jl=new k,ns=new Jt,ei=new Lt,Sr=new k,Bs=new k,Eu=new k,Au=new Jt,Zl=new k(1,0,0),Jl=new k(0,1,0),Ql=new k(0,0,1),ec={type:"added"},Tu={type:"removed"},is={type:"childadded",child:null},Ta={type:"childremoved",child:null};class dn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new k,t=new zn,n=new Jt,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new gt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(Ql,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(Ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Bs,Sr,this.up):ei.lookAt(Sr,Bs,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(ei),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ec),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tu),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ec),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Eu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}dn.DEFAULT_UP=new k(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new k,ti=new k,Ra=new k,ni=new k,ss=new k,rs=new k,tc=new k,Ca=new k,La=new k,Pa=new k,Da=new Mt,Ia=new Mt,Ua=new Mt;class Wn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),ti.subVectors(n,t),Ra.subVectors(e,t);const a=Bn.dot(Bn),o=Bn.dot(ti),l=Bn.dot(Ra),c=ti.dot(ti),h=ti.dot(Ra),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Da.setScalar(0),Ia.setScalar(0),Ua.setScalar(0),Da.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),Ua.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Da,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(Ua,r.z),a}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),ti.subVectors(e,t),Bn.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Bn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ss.subVectors(s,n),rs.subVectors(r,n),Ca.subVectors(e,n);const l=ss.dot(Ca),c=rs.dot(Ca);if(l<=0&&c<=0)return t.copy(n);La.subVectors(e,s);const h=ss.dot(La),u=rs.dot(La);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ss,a);Pa.subVectors(e,r);const f=ss.dot(Pa),m=rs.dot(Pa);if(m>=0&&f<=m)return t.copy(r);const g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(rs,o);const x=h*m-f*u;if(x<=0&&u-h>=0&&f-m>=0)return tc.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(tc,o);const p=1/(x+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Fa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Rt.workingColorSpace){if(e=fu(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fa(a,r,e+1/3),this.g=Fa(a,r,e),this.b=Fa(a,r,e-1/3)}return Rt.colorSpaceToWorking(this,s),this}setStyle(e,t=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=Xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Rt.workingToColorSpace(mn.copy(this),e),Math.round(_t(mn.r*255,0,255))*65536+Math.round(_t(mn.g*255,0,255))*256+Math.round(_t(mn.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(mn.copy(this),t);const n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=hn){Rt.workingToColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,s=mn.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Er);const n=xa(pi.h,Er.h,t),s=xa(pi.s,Er.s,t),r=xa(pi.l,Er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Qe;Qe.NAMES=Xh;let Ru=0;class Is extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=vs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==po&&(n.blendSrc=this.blendSrc),this.blendDst!==mo&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Us extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new k,Ar=new nt;let Cu=0;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),s=wn(s,this.array),r=wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}}class Ts extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sl extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wt extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lu=0;const Ln=new Lt,Na=new dn,as=new k,An=new Yi,Hs=new Yi,an=new k;class Ot extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vh(e)?Sl:Ts)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(An.min,Hs.min),An.expandByPoint(an),an.addVectors(An.max,Hs.max),An.expandByPoint(an)):(An.expandByPoint(Hs.min),An.expandByPoint(Hs.max))}An.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)an.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(e,c),an.add(as)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new k,l[D]=new k;const c=new k,h=new k,u=new k,d=new nt,f=new nt,m=new nt,g=new k,x=new k;function p(D,b,w){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),x.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[D].add(g),o[b].add(g),o[w].add(g),l[D].add(x),l[b].add(x),l[w].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,b=y.length;D<b;++D){const w=y[D],P=w.start,F=w.count;for(let I=P,H=P+F;I<H;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const _=new k,v=new k,E=new k,M=new k;function T(D){E.fromBufferAttribute(s,D),M.copy(E);const b=o[D];_.copy(b),_.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(M,b);const P=v.dot(l[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,P)}for(let D=0,b=y.length;D<b;++D){const w=y[D],P=w.start,F=w.count;for(let I=P,H=P+F;I<H;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),x=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let g=0,x=l.length;g<x;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Ct(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new Lt,Pi=new Mu,Tr=new Ei,ic=new k,Rr=new k,Cr=new k,Lr=new k,za=new k,Pr=new k,sc=new k,Dr=new k;class It extends dn{constructor(e=new Ot,t=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(za.fromBufferAttribute(u,e),a?Pr.addScaledVector(za,h):Pr.addScaledVector(za.sub(t),h))}t.add(Pr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(Tr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Tr,ic)===null||Pi.origin.distanceToSquared(ic)>(e.far-e.near)**2))&&(nc.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(nc),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],p=a[x.materialIndex],y=Math.max(x.start,f.start),_=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let v=y,E=_;v<E;v+=3){const M=o.getX(v),T=o.getX(v+1),D=o.getX(v+2);s=Ir(this,p,e,n,c,h,u,M,T,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const y=o.getX(x),_=o.getX(x+1),v=o.getX(x+2);s=Ir(this,a,e,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],p=a[x.materialIndex],y=Math.max(x.start,f.start),_=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let v=y,E=_;v<E;v+=3){const M=v,T=v+1,D=v+2;s=Ir(this,p,e,n,c,h,u,M,T,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const y=x,_=x+1,v=x+2;s=Ir(this,a,e,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Pu(i,e,t,n,s,r,a,o){let l;if(e.side===yn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===bi,o),l===null)return null;Dr.copy(o),Dr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:i}}function Ir(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Rr),i.getVertexPosition(l,Cr),i.getVertexPosition(c,Lr);const h=Pu(i,e,t,n,Rr,Cr,Lr,sc);if(h){const u=new k;Wn.getBarycoord(sc,Rr,Cr,Lr,u),s&&(h.uv=Wn.getInterpolatedAttribute(s,o,l,c,u,new nt)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,o,l,c,u,new nt)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};Wn.getNormal(Rr,Cr,Lr,d.normal),h.face=d,h.barycoord=u}return h}class Ti extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(u,2));function m(g,x,p,y,_,v,E,M,T,D,b){const w=v/T,P=E/D,F=v/2,I=E/2,H=M/2,z=T+1,N=D+1;let U=0,L=0;const G=new k;for(let B=0;B<N;B++){const j=B*P-I;for(let ee=0;ee<z;ee++){const ge=ee*w-F;G[g]=ge*y,G[x]=j*_,G[p]=H,c.push(G.x,G.y,G.z),G[g]=0,G[x]=0,G[p]=M>0?1:-1,h.push(G.x,G.y,G.z),u.push(ee/T),u.push(1-B/D),U+=1}}for(let B=0;B<D;B++)for(let j=0;j<T;j++){const ee=d+j+z*B,ge=d+j+z*(B+1),de=d+(j+1)+z*(B+1),Me=d+(j+1)+z*B;l.push(ee,ge,Me),l.push(ge,de,Me),L+=6}o.addGroup(f,L,b),f+=L,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function vn(i){const e={};for(let t=0;t<i.length;t++){const n=Rs(i[t]);for(const s in n)e[s]=n[s]}return e}function Du(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $h(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Iu={clone:Rs,merge:vn};var Uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uu,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Du(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yh extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new k,rc=new nt,ac=new nt;class Un extends Yh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,rc,ac),t.subVectors(ac,rc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ga*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const os=-90,ls=1;class Nu extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Un(os,ls,e,t);s.layers=this.layers,this.add(s);const r=new Un(os,ls,e,t);r.layers=this.layers,this.add(r);const a=new Un(os,ls,e,t);a.layers=this.layers,this.add(a);const o=new Un(os,ls,e,t);o.layers=this.layers,this.add(o);const l=new Un(os,ls,e,t);l.layers=this.layers,this.add(l);const c=new Un(os,ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Kh extends un{constructor(e=[],t=bs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zu extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Kh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ti(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Mi});r.uniforms.tEquirect.value=t;const a=new It(s,r),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=Sn),new Nu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Qt extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ou={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const x=t.getJointPose(g,n),p=this._getHandJoint(c,g);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ou)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class El{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=t}clone(){return new El(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nl extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qi extends un{constructor(e=null,t=1,n=1,s,r,a,o,l,c=fn,h=fn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new Lt,oc=new Lt,Ur=[],lc=new Yi,ku=new Lt,Gs=new It,Vs=new Ei;class Xi extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ku)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),lc.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(lc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),Vs.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),oc.multiplyMatrices(n,cs),Gs.matrixWorld=oc,Gs.raycast(e,Ur);for(let a=0,o=Ur.length;a<o;a++){const l=Ur[a];l.instanceId=r,l.object=this,t.push(l)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Kn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qi(new Float32Array(s*this.count),s,this.count,_s,Fn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ka=new k,Bu=new k,Hu=new gt;class Ni{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ka.subVectors(n,t).cross(Bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hu.getNormalMatrix(e),s=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Ei,Gu=new nt(.5,.5),Fr=new k;class oa{constructor(e=new Ni,t=new Ni,n=new Ni,s=new Ni,r=new Ni,a=new Ni){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],g=r[9],x=r[10],p=r[11],y=r[12],_=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,p-m,E-y).normalize(),s[1].setComponents(c+a,f+h,p+m,E+y).normalize(),s[2].setComponents(c+o,f+u,p+g,E+_).normalize(),s[3].setComponents(c-o,f-u,p-g,E-_).normalize(),n)s[4].setComponents(l,d,x,v).normalize(),s[5].setComponents(c-l,f-d,p-x,E-v).normalize();else if(s[4].setComponents(c-l,f-d,p-x,E-v).normalize(),t===Yn)s[5].setComponents(c+l,f+d,p+x,E+v).normalize();else if(t===sa)s[5].setComponents(l,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);const t=Gu.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vu extends un{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Al extends un{constructor(e,t,n=Si,s,r,a,o=fn,l=fn,c,h=rr,u=1){if(h!==rr&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jh extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class la extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const g=[],x=n/2;let p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function y(){const v=new k,E=new k;let M=0;const T=(t-e)/n;for(let D=0;D<=r;D++){const b=[],w=D/r,P=w*(t-e)+e;for(let F=0;F<=s;F++){const I=F/s,H=I*l+o,z=Math.sin(H),N=Math.cos(H);E.x=P*z,E.y=-w*n+x,E.z=P*N,u.push(E.x,E.y,E.z),v.set(z,T,N).normalize(),d.push(v.x,v.y,v.z),f.push(I,1-w),b.push(m++)}g.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){const w=g[b][D],P=g[b+1][D],F=g[b+1][D+1],I=g[b][D+1];(e>0||b!==0)&&(h.push(w,P,I),M+=3),(t>0||b!==r-1)&&(h.push(P,F,I),M+=3)}c.addGroup(p,M,0),p+=M}function _(v){const E=m,M=new nt,T=new k;let D=0;const b=v===!0?e:t,w=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,x*w,0),d.push(0,w,0),f.push(.5,.5),m++;const P=m;for(let F=0;F<=s;F++){const H=F/s*l+o,z=Math.cos(H),N=Math.sin(H);T.x=b*N,T.y=x*w,T.z=b*z,u.push(T.x,T.y,T.z),d.push(0,w,0),M.x=z*.5+.5,M.y=N*.5*w+.5,f.push(M.x,M.y),m++}for(let F=0;F<s;F++){const I=E+F,H=P+F;v===!0?h.push(H,H+1,I):h.push(H+1,H,I),D+=3}c.addGroup(p,D,v===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}function Wu(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Zh(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ku(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){const f=i[d],m=i[d+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return cr(r,a,t,o,l,c,0),a}function Zh(i,e,t,n,s){let r;if(s===ad(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=cc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=cc(a/n|0,i[a],i[a+1],r);return r&&Cs(r,r.next)&&(fr(r),r=r.next),r}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Cs(t,t.next)||Xt(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function cr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ed(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Xu(i,n,s,r):qu(i)){e.push(l.i,i.i,c.i),fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=$u($i(i),e),cr(i,e,t,n,s,r,2)):a===2&&Yu(i,e,t,n,s,r):cr($i(i),e,t,n,s,r,1);break}}}function qu(i){const e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Js(s,o,r,l,a,c,m.x,m.y)&&Xt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Xu(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Xt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,u,d),g=Math.max(o,l,c),x=Math.max(h,u,d),p=il(f,m,e,t,n),y=il(g,x,e,t,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=x&&_!==s&&_!==a&&Js(o,h,l,u,c,d,_.x,_.y)&&Xt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=g&&v.y>=m&&v.y<=x&&v!==s&&v!==a&&Js(o,h,l,u,c,d,v.x,v.y)&&Xt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=x&&_!==s&&_!==a&&Js(o,h,l,u,c,d,_.x,_.y)&&Xt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=g&&v.y>=m&&v.y<=x&&v!==s&&v!==a&&Js(o,h,l,u,c,d,v.x,v.y)&&Xt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function $u(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Cs(n,s)&&Qh(n,t,t.next,s)&&hr(n,s)&&hr(s,n)&&(e.push(n.i,t.i,s.i),fr(t),fr(t.next),t=i=s),t=t.next}while(t!==i);return $i(t)}function Yu(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&id(a,o)){let l=ef(a,o);a=$i(a,a.next),l=$i(l,l.next),cr(a,e,t,n,s,r,0),cr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ku(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Zh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(nd(c))}s.sort(ju);for(let r=0;r<s.length;r++)t=Zu(s[r],t);return t}function ju(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Zu(i,e){const t=Ju(i,e);if(!t)return e;const n=ef(t,i);return $i(n,n.next),$i(t,t.next)}function Ju(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Cs(i,t))return t;do{if(Cs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Jh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);hr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Qu(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Qu(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function ed(i,e,t,n){let s=i;do s.z===0&&(s.z=il(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,td(s)}function td(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function il(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function nd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Jh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Js(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Jh(i,e,t,n,s,r,a,o)}function id(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!sd(i,e)&&(hr(i,e)&&hr(e,i)&&rd(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||Cs(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Cs(i,e){return i.x===e.x&&i.y===e.y}function Qh(i,e,t,n){const s=zr(Xt(i,e,t)),r=zr(Xt(i,e,n)),a=zr(Xt(t,n,i)),o=zr(Xt(t,n,e));return!!(s!==r&&a!==o||s===0&&Nr(i,t,e)||r===0&&Nr(i,n,e)||a===0&&Nr(t,i,n)||o===0&&Nr(t,e,n))}function Nr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function zr(i){return i>0?1:i<0?-1:0}function sd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Qh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function hr(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function rd(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ef(i,e){const t=sl(i.i,i.x,i.y),n=sl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cc(i,e,t,n){const s=sl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ad(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class od{static triangulate(e,t,n=2){return Wu(e,t,n)}}class Ls{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Ls.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];hc(e),fc(n,e);let a=e.length;t.forEach(hc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,fc(n,t[l]);const o=od.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function hc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function fc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ca extends Ot{constructor(e=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=_t(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new k,d=new nt,f=new k,m=new k,g=new k;let x=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-x,f.z=p*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-x,f.z=p*0,m.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(m)}for(let y=0;y<=t;y++){const _=n+y*h*s,v=Math.sin(_),E=Math.cos(_);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*v,u.y=e[M].y,u.z=e[M].x*E,a.push(u.x,u.y,u.z),d.x=y/t,d.y=M/(e.length-1),o.push(d.x,d.y);const T=l[3*M+0]*v,D=l[3*M+1],b=l[3*M+0]*E;c.push(T,D,b)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const v=_+y*e.length,E=v,M=v+e.length,T=v+e.length+1,D=v+1;r.push(E,M,D),r.push(T,D,M)}this.setIndex(r),this.setAttribute("position",new wt(a,3)),this.setAttribute("uv",new wt(o,2)),this.setAttribute("normal",new wt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.points,e.segments,e.phiStart,e.phiLength)}}class Ai extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],g=[],x=[];for(let p=0;p<h;p++){const y=p*d-a;for(let _=0;_<c;_++){const v=_*u-r;m.push(v,-y,0),g.push(0,0,1),x.push(_/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const _=y+c*p,v=y+c*(p+1),E=y+1+c*(p+1),M=y+1+c*p;f.push(_,v,M),f.push(v,E,M)}this.setIndex(f),this.setAttribute("position",new wt(m,3)),this.setAttribute("normal",new wt(g,3)),this.setAttribute("uv",new wt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tl extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new k,d=new k,f=[],m=[],g=[],x=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const M=E/t;u.x=-e*Math.cos(s+M*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+M*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),x.push(M+v,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=h[p][y+1],v=h[p][y],E=h[p+1][y],M=h[p+1][y+1];(p!==0||a>0)&&f.push(_,v,M),(p!==n-1||l<Math.PI)&&f.push(v,E,M)}this.setIndex(f),this.setAttribute("position",new wt(m,3)),this.setAttribute("normal",new wt(g,3)),this.setAttribute("uv",new wt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rl extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new k,u=new k,d=new k;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const g=m/s*r,x=f/n*Math.PI*2;u.x=(e+t*Math.cos(x))*Math.cos(g),u.y=(e+t*Math.cos(x))*Math.sin(g),u.z=t*Math.sin(x),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const g=(s+1)*f+m-1,x=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,y=(s+1)*f+m;a.push(g,x,y),a.push(x,p,y)}this.setIndex(a),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Fs extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tf extends Fs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Nn extends Is{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nf extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ld extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ba={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class cd{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const hd=new cd;class Cl{constructor(e){this.manager=e!==void 0?e:hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";const hs=new WeakMap;class fd extends Cl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ba.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=hs.get(a);u===void 0&&(u=[],hs.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=or("img");function l(){h(),t&&t(this);const u=hs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}hs.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ba.remove(`image:${e}`);const d=hs.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ba.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class sf extends Cl{constructor(e){super(e)}load(e,t,n,s){const r=new un,a=new fd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class rf extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ud extends rf{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ha=new Lt,uc=new k,dc=new k;class dd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uc.setFromMatrixPosition(e.matrixWorld),t.position.copy(uc),dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dc),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ll extends Yh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pd extends dd{constructor(){super(new Ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class md extends rf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new pd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class af extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class gd extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function pc(i,e,t,n){const s=xd(n);switch(t){case Oh:return i*e;case _s:return i*e/s.components*s.byteLength;case _l:return i*e/s.components*s.byteLength;case Bh:return i*e*2/s.components*s.byteLength;case yl:return i*e*2/s.components*s.byteLength;case kh:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case Ml:return i*e*4/s.components*s.byteLength;case Kr:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:case Lo:return Math.max(i,16)*Math.max(e,8)/4;case To:case Co:return Math.max(i,8)*Math.max(e,8)/2;case Po:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yo:case Ko:case jo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qo:case el:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xd(i){switch(i){case jn:case Uh:return{byteLength:1,components:1};case ir:case Fh:case Wi:return{byteLength:2,components:1};case xl:case vl:return{byteLength:2,components:4};case Si:case gl:case Fn:return{byteLength:4,components:1};case Nh:case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function of(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function vd(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],g=u[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const g=u[f];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yd=`#ifdef USE_ALPHAHASH
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
#endif`,Md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
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
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
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
#endif`,Cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
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
#endif`,Id=`#ifdef USE_BUMPMAP
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gd=`#define PI 3.141592653589793
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
} // validated`,Vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wd=`vec3 transformedNormal = objectNormal;
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
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hp=`uniform bool receiveShadow;
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
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gp=`PhysicalMaterial material;
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
#endif`,xp=`struct PhysicalMaterial {
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
}`,vp=`
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rp=`#if defined( USE_POINTS_UV )
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
#endif`,Cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
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
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i0=`float getShadowMask() {
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
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,a0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,l0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`#include <common>
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
}`,E0=`#if DEPTH_PACKING == 3200
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
}`,A0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`uniform float scale;
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
}`,P0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,U0=`#define LAMBERT
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
}`,F0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,z0=`#define MATCAP
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
}`,O0=`#define NORMAL
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
}`,k0=`#define NORMAL
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
}`,B0=`#define PHONG
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
}`,H0=`#define PHONG
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
}`,G0=`#define STANDARD
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
}`,V0=`#define STANDARD
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
}`,W0=`#define TOON
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
}`,q0=`#define TOON
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
}`,X0=`uniform float size;
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
}`,$0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,K0=`uniform vec3 color;
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
}`,j0=`uniform float rotation;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:_d,alphahash_pars_fragment:yd,alphamap_fragment:Md,alphamap_pars_fragment:wd,alphatest_fragment:bd,alphatest_pars_fragment:Sd,aomap_fragment:Ed,aomap_pars_fragment:Ad,batching_pars_vertex:Td,batching_vertex:Rd,begin_vertex:Cd,beginnormal_vertex:Ld,bsdfs:Pd,iridescence_fragment:Dd,bumpmap_pars_fragment:Id,clipping_planes_fragment:Ud,clipping_planes_pars_fragment:Fd,clipping_planes_pars_vertex:Nd,clipping_planes_vertex:zd,color_fragment:Od,color_pars_fragment:kd,color_pars_vertex:Bd,color_vertex:Hd,common:Gd,cube_uv_reflection_fragment:Vd,defaultnormal_vertex:Wd,displacementmap_pars_vertex:qd,displacementmap_vertex:Xd,emissivemap_fragment:$d,emissivemap_pars_fragment:Yd,colorspace_fragment:Kd,colorspace_pars_fragment:jd,envmap_fragment:Zd,envmap_common_pars_fragment:Jd,envmap_pars_fragment:Qd,envmap_pars_vertex:ep,envmap_physical_pars_fragment:fp,envmap_vertex:tp,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:sp,fog_pars_fragment:rp,gradientmap_pars_fragment:ap,lightmap_pars_fragment:op,lights_lambert_fragment:lp,lights_lambert_pars_fragment:cp,lights_pars_begin:hp,lights_toon_fragment:up,lights_toon_pars_fragment:dp,lights_phong_fragment:pp,lights_phong_pars_fragment:mp,lights_physical_fragment:gp,lights_physical_pars_fragment:xp,lights_fragment_begin:vp,lights_fragment_maps:_p,lights_fragment_end:yp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:Sp,map_fragment:Ep,map_pars_fragment:Ap,map_particle_fragment:Tp,map_particle_pars_fragment:Rp,metalnessmap_fragment:Cp,metalnessmap_pars_fragment:Lp,morphinstance_vertex:Pp,morphcolor_vertex:Dp,morphnormal_vertex:Ip,morphtarget_pars_vertex:Up,morphtarget_vertex:Fp,normal_fragment_begin:Np,normal_fragment_maps:zp,normal_pars_fragment:Op,normal_pars_vertex:kp,normal_vertex:Bp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Vp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:qp,opaque_fragment:Xp,packing:$p,premultiplied_alpha_fragment:Yp,project_vertex:Kp,dithering_fragment:jp,dithering_pars_fragment:Zp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:e0,shadowmap_pars_vertex:t0,shadowmap_vertex:n0,shadowmask_pars_fragment:i0,skinbase_vertex:s0,skinning_pars_vertex:r0,skinning_vertex:a0,skinnormal_vertex:o0,specularmap_fragment:l0,specularmap_pars_fragment:c0,tonemapping_fragment:h0,tonemapping_pars_fragment:f0,transmission_fragment:u0,transmission_pars_fragment:d0,uv_pars_fragment:p0,uv_pars_vertex:m0,uv_vertex:g0,worldpos_vertex:x0,background_vert:v0,background_frag:_0,backgroundCube_vert:y0,backgroundCube_frag:M0,cube_vert:w0,cube_frag:b0,depth_vert:S0,depth_frag:E0,distanceRGBA_vert:A0,distanceRGBA_frag:T0,equirect_vert:R0,equirect_frag:C0,linedashed_vert:L0,linedashed_frag:P0,meshbasic_vert:D0,meshbasic_frag:I0,meshlambert_vert:U0,meshlambert_frag:F0,meshmatcap_vert:N0,meshmatcap_frag:z0,meshnormal_vert:O0,meshnormal_frag:k0,meshphong_vert:B0,meshphong_frag:H0,meshphysical_vert:G0,meshphysical_frag:V0,meshtoon_vert:W0,meshtoon_frag:q0,points_vert:X0,points_frag:$0,shadow_vert:Y0,shadow_frag:K0,sprite_vert:j0,sprite_frag:Z0},Fe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},$n={basic:{uniforms:vn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:vn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:vn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:vn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:vn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:vn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:vn([Fe.points,Fe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:vn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:vn([Fe.common,Fe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:vn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:vn([Fe.sprite,Fe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:vn([Fe.common,Fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:vn([Fe.lights,Fe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};$n.physical={uniforms:vn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Or={r:0,b:0,g:0},Ii=new zn,J0=new Lt;function Q0(i,e,t,n,s,r,a){const o=new Qe(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function g(_){let v=!1;const E=m(_);E===null?p(o,l):E&&E.isColor&&(p(E,1),v=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,v){const E=m(v);E&&(E.isCubeTexture||E.mapping===aa)?(h===void 0&&(h=new It(new Ti(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Rs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ii.copy(v.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(J0.makeRotationFromEuler(Ii)),h.material.toneMapped=Rt.getTransfer(E.colorSpace)!==zt,(u!==E||d!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new It(new Ai(2,2),new Cn({name:"BackgroundMaterial",uniforms:Rs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(E.colorSpace)!==zt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(Or,$h(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,v,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:g,addToRenderList:x,dispose:y}}function em(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(w,P,F,I,H){let z=!1;const N=u(I,F,P);r!==N&&(r=N,c(r.object)),z=f(w,I,F,H),z&&m(w,I,F,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,v(w,P,F,I),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,P,F){const I=F.wireframe===!0;let H=n[w.id];H===void 0&&(H={},n[w.id]=H);let z=H[P.id];z===void 0&&(z={},H[P.id]=z);let N=z[I];return N===void 0&&(N=d(l()),z[I]=N),N}function d(w){const P=[],F=[],I=[];for(let H=0;H<t;H++)P[H]=0,F[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:I,object:w,attributes:{},index:null}}function f(w,P,F,I){const H=r.attributes,z=P.attributes;let N=0;const U=F.getAttributes();for(const L in U)if(U[L].location>=0){const B=H[L];let j=z[L];if(j===void 0&&(L==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),L==="instanceColor"&&w.instanceColor&&(j=w.instanceColor)),B===void 0||B.attribute!==j||j&&B.data!==j.data)return!0;N++}return r.attributesNum!==N||r.index!==I}function m(w,P,F,I){const H={},z=P.attributes;let N=0;const U=F.getAttributes();for(const L in U)if(U[L].location>=0){let B=z[L];B===void 0&&(L==="instanceMatrix"&&w.instanceMatrix&&(B=w.instanceMatrix),L==="instanceColor"&&w.instanceColor&&(B=w.instanceColor));const j={};j.attribute=B,B&&B.data&&(j.data=B.data),H[L]=j,N++}r.attributes=H,r.attributesNum=N,r.index=I}function g(){const w=r.newAttributes;for(let P=0,F=w.length;P<F;P++)w[P]=0}function x(w){p(w,0)}function p(w,P){const F=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;F[w]=1,I[w]===0&&(i.enableVertexAttribArray(w),I[w]=1),H[w]!==P&&(i.vertexAttribDivisor(w,P),H[w]=P)}function y(){const w=r.newAttributes,P=r.enabledAttributes;for(let F=0,I=P.length;F<I;F++)P[F]!==w[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function _(w,P,F,I,H,z,N){N===!0?i.vertexAttribIPointer(w,P,F,H,z):i.vertexAttribPointer(w,P,F,I,H,z)}function v(w,P,F,I){g();const H=I.attributes,z=F.getAttributes(),N=P.defaultAttributeValues;for(const U in z){const L=z[U];if(L.location>=0){let G=H[U];if(G===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(G=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(G=w.instanceColor)),G!==void 0){const B=G.normalized,j=G.itemSize,ee=e.get(G);if(ee===void 0)continue;const ge=ee.buffer,de=ee.type,Me=ee.bytesPerElement,$=de===i.INT||de===i.UNSIGNED_INT||G.gpuType===gl;if(G.isInterleavedBufferAttribute){const Q=G.data,pe=Q.stride,Se=G.offset;if(Q.isInstancedInterleavedBuffer){for(let Re=0;Re<L.locationSize;Re++)p(L.location+Re,Q.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Re=0;Re<L.locationSize;Re++)x(L.location+Re);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Re=0;Re<L.locationSize;Re++)_(L.location+Re,j/L.locationSize,de,B,pe*Me,(Se+j/L.locationSize*Re)*Me,$)}else{if(G.isInstancedBufferAttribute){for(let Q=0;Q<L.locationSize;Q++)p(L.location+Q,G.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Q=0;Q<L.locationSize;Q++)x(L.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Q=0;Q<L.locationSize;Q++)_(L.location+Q,j/L.locationSize,de,B,j*Me,j/L.locationSize*Q*Me,$)}}else if(N!==void 0){const B=N[U];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(L.location,B);break;case 3:i.vertexAttrib3fv(L.location,B);break;case 4:i.vertexAttrib4fv(L.location,B);break;default:i.vertexAttrib1fv(L.location,B)}}}}y()}function E(){D();for(const w in n){const P=n[w];for(const F in P){const I=P[F];for(const H in I)h(I[H].object),delete I[H];delete P[F]}delete n[w]}}function M(w){if(n[w.id]===void 0)return;const P=n[w.id];for(const F in P){const I=P[F];for(const H in I)h(I[H].object),delete I[H];delete P[F]}delete n[w.id]}function T(w){for(const P in n){const F=n[P];if(F[w.id]===void 0)continue;const I=F[w.id];for(const H in I)h(I[H].object),delete I[H];delete F[w.id]}}function D(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:x,disableUnusedAttributes:y}}function tm(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g]*d[g];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function nm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==_n&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const D=T===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==jn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fn&&!D)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:E,maxSamples:M}}function im(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ni,o=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,g=u.clipIntersection,x=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!x)r?h(null):c();else{const y=r?0:n,_=y*4;let v=p.clippingState||null;l.value=v,v=h(m,d,_,f);for(let E=0;E!==_;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const g=u!==null?u.length:0;let x=null;if(g!==0){if(x=l.value,m!==!0||x===null){const p=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,v=f;_!==g;++_,v+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(x,v),x[v+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}}function sm(i){let e=new WeakMap;function t(a,o){return o===bo?a.mapping=bs:o===So&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bo||o===So)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new zu(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const gs=4,mc=[.125,.215,.35,.446,.526,.582],ki=20,Ga=new Ll,gc=new Qe;let Va=null,Wa=0,qa=0,Xa=!1;const zi=(1+Math.sqrt(5))/2,fs=1/zi,xc=[new k(-zi,fs,0),new k(zi,fs,0),new k(-fs,0,zi),new k(fs,0,zi),new k(0,zi,-fs),new k(0,zi,fs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],rm=new k;class rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=rm}=r;Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va,Wa,qa),this._renderer.xr.enabled=Xa,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Wi,format:_n,colorSpace:Es,depthBuffer:!1},s=vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=am(r)),this._blurMaterial=om(r,e,t)}return s}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,n,s,r){const l=new Un(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(gc),u.toneMapping=wi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const g=new Us({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),x=new It(new Ti,g);let p=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(gc),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const E=this._cubeSize;kr(s,v*E,_>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(x,l),u.render(e,l)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===bs||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ga)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xc[(s-r-1)%xc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new It(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),g=r/m,x=isFinite(r)?1+Math.floor(h*g):ki;x>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ki}`);const p=[];let y=0;for(let T=0;T<ki;++T){const D=T/g,b=Math.exp(-D*D/2);p.push(b),T===0?y+=b:T<x&&(y+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const v=this._sizeLods[s],E=3*v*(s>_-gs?s-_+gs:0),M=4*(this._cubeSize-v);kr(t,E,M,3*v,2*v),l.setRenderTarget(t),l.render(u,Ga)}}function am(i){const e=[],t=[],n=[];let s=i;const r=i-gs+1+mc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-gs?l=mc[a-i+gs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,g=3,x=2,p=1,y=new Float32Array(g*m*f),_=new Float32Array(x*m*f),v=new Float32Array(p*m*f);for(let M=0;M<f;M++){const T=M%3*2/3-1,D=M>2?0:-1,b=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];y.set(b,g*m*M),_.set(d,x*m*M);const w=[M,M,M,M,M,M];v.set(w,p*m*M)}const E=new Ot;E.setAttribute("position",new Ct(y,g)),E.setAttribute("uv",new Ct(_,x)),E.setAttribute("faceIndex",new Ct(v,p)),e.push(E),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vc(i,e,t){const n=new ci(i,e,t);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function om(i,e,t){const n=new Float32Array(ki),s=new k(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function _c(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function yc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Pl(){return`

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
	`}function lm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===bo||l===So,h=l===bs||l===Ss;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new rl(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new rl(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hm(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let _=0,v=y.length;_<v;_+=3){const E=y[_+0],M=y[_+1],T=y[_+2];d.push(E,M,M,T,T,E)}}else if(m!==void 0){const y=m.array;g=m.version;for(let _=0,v=y.length/3-1;_<v;_+=3){const E=_+0,M=_+1,T=_+2;d.push(E,M,M,T,T,E)}}else return;const x=new(Vh(d)?Sl:Ts)(d,1);x.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,x)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function fm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let x=0;for(let p=0;p<m;p++)x+=f[p];t.update(x,n,1)}function u(d,f,m,g){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*g[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function um(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function dm(i,e,t){const n=new WeakMap,s=new Mt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;f===!0&&(_=1),m===!0&&(_=2),g===!0&&(_=3);let v=o.attributes.position.count*_,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const M=new Float32Array(v*E*4*u),T=new Wh(M,v,E,u);T.type=Fn,T.needsUpdate=!0;const D=_*4;for(let w=0;w<u;w++){const P=x[w],F=p[w],I=y[w],H=v*E*4*w;for(let z=0;z<P.count;z++){const N=z*D;f===!0&&(s.fromBufferAttribute(P,z),M[H+N+0]=s.x,M[H+N+1]=s.y,M[H+N+2]=s.z,M[H+N+3]=0),m===!0&&(s.fromBufferAttribute(F,z),M[H+N+4]=s.x,M[H+N+5]=s.y,M[H+N+6]=s.z,M[H+N+7]=0),g===!0&&(s.fromBufferAttribute(I,z),M[H+N+8]=s.x,M[H+N+9]=s.y,M[H+N+10]=s.z,M[H+N+11]=I.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new nt(v,E)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function pm(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const lf=new un,Mc=new Al(1,1),cf=new Wh,hf=new _u,ff=new Kh,wc=[],bc=[],Sc=new Float32Array(16),Ec=new Float32Array(9),Ac=new Float32Array(4);function Ns(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=wc[s];if(r===void 0&&(r=new Float32Array(s),wc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ha(i,e){let t=bc[e];t===void 0&&(t=new Int32Array(e),bc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function _m(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Ac.set(n),i.uniformMatrix2fv(this.addr,!1,Ac),sn(t,n)}}function ym(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Ec.set(n),i.uniformMatrix3fv(this.addr,!1,Ec),sn(t,n)}}function Mm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Sc.set(n),i.uniformMatrix4fv(this.addr,!1,Sc),sn(t,n)}}function wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function Am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function Lm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mc.compareFunction=Gh,r=Mc):r=lf,t.setTexture2D(e||r,s)}function Pm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hf,s)}function Dm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ff,s)}function Im(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||cf,s)}function Um(i){switch(i){case 5126:return mm;case 35664:return gm;case 35665:return xm;case 35666:return vm;case 35674:return _m;case 35675:return ym;case 35676:return Mm;case 5124:case 35670:return wm;case 35667:case 35671:return bm;case 35668:case 35672:return Sm;case 35669:case 35673:return Em;case 5125:return Am;case 36294:return Tm;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Im}}function Fm(i,e){i.uniform1fv(this.addr,e)}function Nm(i,e){const t=Ns(e,this.size,2);i.uniform2fv(this.addr,t)}function zm(i,e){const t=Ns(e,this.size,3);i.uniform3fv(this.addr,t)}function Om(i,e){const t=Ns(e,this.size,4);i.uniform4fv(this.addr,t)}function km(i,e){const t=Ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bm(i,e){const t=Ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hm(i,e){const t=Ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gm(i,e){i.uniform1iv(this.addr,e)}function Vm(i,e){i.uniform2iv(this.addr,e)}function Wm(i,e){i.uniform3iv(this.addr,e)}function qm(i,e){i.uniform4iv(this.addr,e)}function Xm(i,e){i.uniform1uiv(this.addr,e)}function $m(i,e){i.uniform2uiv(this.addr,e)}function Ym(i,e){i.uniform3uiv(this.addr,e)}function Km(i,e){i.uniform4uiv(this.addr,e)}function jm(i,e,t){const n=this.cache,s=e.length,r=ha(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||lf,r[a])}function Zm(i,e,t){const n=this.cache,s=e.length,r=ha(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hf,r[a])}function Jm(i,e,t){const n=this.cache,s=e.length,r=ha(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ff,r[a])}function Qm(i,e,t){const n=this.cache,s=e.length,r=ha(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||cf,r[a])}function eg(i){switch(i){case 5126:return Fm;case 35664:return Nm;case 35665:return zm;case 35666:return Om;case 35674:return km;case 35675:return Bm;case 35676:return Hm;case 5124:case 35670:return Gm;case 35667:case 35671:return Vm;case 35668:case 35672:return Wm;case 35669:case 35673:return qm;case 5125:return Xm;case 36294:return $m;case 36295:return Ym;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Qm}}class tg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Um(t.type)}}class ng{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eg(t.type)}}class ig{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Tc(i,e){i.seq.push(e),i.map[e.id]=e}function sg(i,e,t){const n=i.name,s=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),a=$a.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Tc(t,c===void 0?new tg(o,i,e):new ng(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ig(o),Tc(t,u)),t=u}}}class Qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);sg(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Rc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const rg=37297;let ag=0;function og(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Cc=new gt;function lg(i){Rt._getMatrix(Cc,Rt.workingColorSpace,i);const e=`mat3( ${Cc.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(i)){case ia:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+og(i.getShaderSource(e),o)}else return r}function cg(i,e){const t=lg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hg(i,e){let t;switch(e){case Kf:t="Linear";break;case jf:t="Reinhard";break;case Zf:t="Cineon";break;case Dh:t="ACESFilmic";break;case Qf:t="AgX";break;case eu:t="Neutral";break;case Jf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Br=new k;function fg(){Rt.getLuminanceCoefficients(Br);const i=Br.x.toFixed(4),e=Br.y.toFixed(4),t=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function dg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qs(i){return i!==""}function Pc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(i){return i.replace(mg,xg)}const gg=new Map;function xg(i,e){let t=mt[e];if(t===void 0){const n=gg.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}const vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(i){return i.replace(vg,_g)}function _g(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function yg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Mg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ss:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function bg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ml:e="ENVMAP_BLENDING_MULTIPLY";break;case $f:e="ENVMAP_BLENDING_MIX";break;case Yf:e="ENVMAP_BLENDING_ADD";break}return e}function Sg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Eg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yg(t),c=Mg(t),h=wg(t),u=bg(t),d=Sg(t),f=ug(t),m=dg(r),g=s.createProgram();let x,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qs).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(x=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?mt.tonemapping_pars_fragment:"",t.toneMapping!==wi?hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,cg("linearToOutputTexel",t.outputColorSpace),fg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),a=al(a),a=Pc(a,t),a=Dc(a,t),o=al(o),o=Pc(o,t),o=Dc(o,t),a=Ic(a),o=Ic(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+x+a,v=y+p+o,E=Rc(s,s.VERTEX_SHADER,_),M=Rc(s,s.FRAGMENT_SHADER,v);s.attachShader(g,E),s.attachShader(g,M),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(g)||"",I=s.getShaderInfoLog(E)||"",H=s.getShaderInfoLog(M)||"",z=F.trim(),N=I.trim(),U=H.trim();let L=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,M);else{const B=Lc(s,E,"vertex"),j=Lc(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+B+`
`+j)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||U==="")&&(G=!1);G&&(P.diagnostics={runnable:L,programLog:z,vertexShader:{log:N,prefix:x},fragmentShader:{log:U,prefix:p}})}s.deleteShader(E),s.deleteShader(M),D=new Qr(s,g),b=pg(s,g)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(g,rg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ag++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=M,this}let Ag=0;class Tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rg(e),t.set(e,n)),n}}class Rg{constructor(e){this.id=Ag++,this.code=e,this.usedTimes=0}}function Cg(i,e,t,n,s,r,a){const o=new qh,l=new Tg,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function x(b,w,P,F,I){const H=F.fog,z=I.geometry,N=b.isMeshStandardMaterial?F.environment:null,U=(b.isMeshStandardMaterial?t:e).get(b.envMap||N),L=U&&U.mapping===aa?U.image.height:null,G=m[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const B=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,j=B!==void 0?B.length:0;let ee=0;z.morphAttributes.position!==void 0&&(ee=1),z.morphAttributes.normal!==void 0&&(ee=2),z.morphAttributes.color!==void 0&&(ee=3);let ge,de,Me,$;if(G){const ve=$n[G];ge=ve.vertexShader,de=ve.fragmentShader}else ge=b.vertexShader,de=b.fragmentShader,l.update(b),Me=l.getVertexShaderID(b),$=l.getFragmentShaderID(b);const Q=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Se=I.isInstancedMesh===!0,Re=I.isBatchedMesh===!0,$e=!!b.map,ie=!!b.matcap,A=!!U,xe=!!b.aoMap,ce=!!b.lightMap,le=!!b.bumpMap,be=!!b.normalMap,Pe=!!b.displacementMap,ye=!!b.emissiveMap,ze=!!b.metalnessMap,ct=!!b.roughnessMap,at=b.anisotropy>0,C=b.clearcoat>0,S=b.dispersion>0,X=b.iridescence>0,re=b.sheen>0,he=b.transmission>0,ne=at&&!!b.anisotropyMap,Oe=C&&!!b.clearcoatMap,_e=C&&!!b.clearcoatNormalMap,Be=C&&!!b.clearcoatRoughnessMap,Te=X&&!!b.iridescenceMap,fe=X&&!!b.iridescenceThicknessMap,me=re&&!!b.sheenColorMap,Xe=re&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,ue=!!b.specularColorMap,tt=!!b.specularIntensityMap,V=he&&!!b.transmissionMap,se=he&&!!b.thicknessMap,ae=!!b.gradientMap,oe=!!b.alphaMap,te=b.alphaTest>0,Z=!!b.alphaHash,Ae=!!b.extensions;let O=wi;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(O=i.toneMapping);const J={shaderID:G,shaderType:b.type,shaderName:b.name,vertexShader:ge,fragmentShader:de,defines:b.defines,customVertexShaderID:Me,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Re,batchingColor:Re&&I._colorsTexture!==null,instancing:Se,instancingColor:Se&&I.instanceColor!==null,instancingMorph:Se&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Es,alphaToCoverage:!!b.alphaToCoverage,map:$e,matcap:ie,envMap:A,envMapMode:A&&U.mapping,envMapCubeUVHeight:L,aoMap:xe,lightMap:ce,bumpMap:le,normalMap:be,displacementMap:d&&Pe,emissiveMap:ye,normalMapObjectSpace:be&&b.normalMapType===iu,normalMapTangentSpace:be&&b.normalMapType===wl,metalnessMap:ze,roughnessMap:ct,anisotropy:at,anisotropyMap:ne,clearcoat:C,clearcoatMap:Oe,clearcoatNormalMap:_e,clearcoatRoughnessMap:Be,dispersion:S,iridescence:X,iridescenceMap:Te,iridescenceThicknessMap:fe,sheen:re,sheenColorMap:me,sheenRoughnessMap:Xe,specularMap:Ce,specularColorMap:ue,specularIntensityMap:tt,transmission:he,transmissionMap:V,thicknessMap:se,gradientMap:ae,opaque:b.transparent===!1&&b.blending===vs&&b.alphaToCoverage===!1,alphaMap:oe,alphaTest:te,alphaHash:Z,combine:b.combine,mapUv:$e&&g(b.map.channel),aoMapUv:xe&&g(b.aoMap.channel),lightMapUv:ce&&g(b.lightMap.channel),bumpMapUv:le&&g(b.bumpMap.channel),normalMapUv:be&&g(b.normalMap.channel),displacementMapUv:Pe&&g(b.displacementMap.channel),emissiveMapUv:ye&&g(b.emissiveMap.channel),metalnessMapUv:ze&&g(b.metalnessMap.channel),roughnessMapUv:ct&&g(b.roughnessMap.channel),anisotropyMapUv:ne&&g(b.anisotropyMap.channel),clearcoatMapUv:Oe&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&g(b.sheenRoughnessMap.channel),specularMapUv:Ce&&g(b.specularMap.channel),specularColorMapUv:ue&&g(b.specularColorMap.channel),specularIntensityMapUv:tt&&g(b.specularIntensityMap.channel),transmissionMapUv:V&&g(b.transmissionMap.channel),thicknessMapUv:se&&g(b.thicknessMap.channel),alphaMapUv:oe&&g(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(be||at),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&($e||oe),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:O,decodeVideoTexture:$e&&b.map.isVideoTexture===!0&&Rt.getTransfer(b.map.colorSpace)===zt,decodeVideoTextureEmissive:ye&&b.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(b.emissiveMap.colorSpace)===zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===gn,flipSided:b.side===yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ae&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&b.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return J.vertexUv1s=c.has(1),J.vertexUv2s=c.has(2),J.vertexUv3s=c.has(3),c.clear(),J}function p(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)w.push(P),w.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(w,b),_(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function y(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),w.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const w=m[b.type];let P;if(w){const F=$n[w];P=Iu.clone(F.uniforms)}else P=b.uniforms;return P}function E(b,w){let P;for(let F=0,I=h.length;F<I;F++){const H=h[F];if(H.cacheKey===w){P=H,++P.usedTimes;break}}return P===void 0&&(P=new Eg(i,w,b,r),h.push(P)),P}function M(b){if(--b.usedTimes===0){const w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),b.destroy()}}function T(b){l.remove(b)}function D(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:D}}function Lg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Pg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,m,g,x){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:x},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=x),e++,p}function o(u,d,f,m,g,x){const p=a(u,d,f,m,g,x);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,m,g,x){const p=a(u,d,f,m,g,x);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Pg),n.length>1&&n.sort(d||Fc),s.length>1&&s.sort(d||Fc)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Dg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Nc,i.set(n,[a])):s>=r.length?(a=new Nc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ig(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Qe};break;case"SpotLight":t={position:new k,direction:new k,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Ug(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Fg=0;function Ng(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zg(i){const e=new Ig,t=Ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const s=new k,r=new Lt,a=new Lt;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,g=0,x=0,p=0,y=0,_=0,v=0,E=0,M=0,T=0;c.sort(Ng);for(let b=0,w=c.length;b<w;b++){const P=c[b],F=P.color,I=P.intensity,H=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*I,u+=F.g*I,d+=F.b*I;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],I);T++}else if(P.isDirectionalLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const U=P.shadow,L=t.get(P);L.shadowIntensity=U.intensity,L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,n.directionalShadow[f]=L,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=N,f++}else if(P.isSpotLight){const N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(F).multiplyScalar(I),N.distance=H,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[g]=N;const U=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,U.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[g]=U.matrix,P.castShadow){const L=t.get(P);L.shadowIntensity=U.intensity,L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,n.spotShadow[g]=L,n.spotShadowMap[g]=z,v++}g++}else if(P.isRectAreaLight){const N=e.get(P);N.color.copy(F).multiplyScalar(I),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[x]=N,x++}else if(P.isPointLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const U=P.shadow,L=t.get(P);L.shadowIntensity=U.intensity,L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,L.shadowCameraNear=U.camera.near,L.shadowCameraFar=U.camera.far,n.pointShadow[m]=L,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=N,m++}else if(P.isHemisphereLight){const N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(I),N.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[p]=N,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==g||D.rectAreaLength!==x||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==_||D.numSpotShadows!==v||D.numSpotMaps!==E||D.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=x,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,D.directionalLength=f,D.pointLength=m,D.spotLength=g,D.rectAreaLength=x,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=_,D.numSpotShadows=v,D.numSpotMaps=E,D.numLightProbes=T,n.version=Fg++)}function l(c,h){let u=0,d=0,f=0,m=0,g=0;const x=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const _=c[p];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),u++}else if(_.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),f++}else if(_.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),a.identity(),r.copy(_.matrixWorld),r.premultiply(x),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(x),g++}}}return{setup:o,setupView:l,state:n}}function zc(i){const e=new zg(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Og(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new zc(i),e.set(s,[o])):r>=a.length?(o=new zc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bg=`uniform sampler2D shadow_pass;
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
}`;function Hg(i,e,t){let n=new oa;const s=new nt,r=new nt,a=new Mt,o=new nf({depthPacking:Hh}),l=new ld,c={},h=t.maxTextureSize,u={[bi]:yn,[yn]:bi,[gn]:gn},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:kg,fragmentShader:Bg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ot;m.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new It(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let p=this.type;this.render=function(M,T,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;const b=i.getRenderTarget(),w=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Mi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const I=p!==si&&this.type===si,H=p===si&&this.type!==si;for(let z=0,N=M.length;z<N;z++){const U=M[z],L=U.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const G=L.getFrameExtents();if(s.multiply(G),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,L.mapSize.y=r.y)),L.map===null||I===!0||H===!0){const j=this.type!==si?{minFilter:fn,magFilter:fn}:{};L.map!==null&&L.map.dispose(),L.map=new ci(s.x,s.y,j),L.map.texture.name=U.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const B=L.getViewportCount();for(let j=0;j<B;j++){const ee=L.getViewport(j);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),F.viewport(a),L.updateMatrices(U,j),n=L.getFrustum(),v(T,D,L.camera,U,this.type)}L.isPointLightShadow!==!0&&this.type===si&&y(L,D),L.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(b,w,P)};function y(M,T){const D=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ci(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,D,d,g,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,D,f,g,null)}function _(M,T,D,b){let w=null;const P=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)w=P;else if(w=D.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const F=w.uuid,I=T.uuid;let H=c[F];H===void 0&&(H={},c[F]=H);let z=H[I];z===void 0&&(z=w.clone(),H[I]=z,T.addEventListener("dispose",E)),w=z}if(w.visible=T.visible,w.wireframe=T.wireframe,b===si?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=i.properties.get(w);F.light=D}return w}function v(M,T,D,b,w){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===si)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);const I=e.update(M),H=M.material;if(Array.isArray(H)){const z=I.groups;for(let N=0,U=z.length;N<U;N++){const L=z[N],G=H[L.materialIndex];if(G&&G.visible){const B=_(M,G,b,w);M.onBeforeShadow(i,M,T,D,I,B,L),i.renderBufferDirect(D,null,I,B,M,L),M.onAfterShadow(i,M,T,D,I,B,L)}}}else if(H.visible){const z=_(M,H,b,w);M.onBeforeShadow(i,M,T,D,I,z,null),i.renderBufferDirect(D,null,I,z,M,null),M.onAfterShadow(i,M,T,D,I,z,null)}}const F=M.children;for(let I=0,H=F.length;I<H;I++)v(F[I],T,D,b,w)}function E(M){M.target.removeEventListener("dispose",E);for(const D in c){const b=c[D],w=M.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const Gg={[go]:xo,[vo]:Mo,[_o]:wo,[ws]:yo,[xo]:go,[Mo]:vo,[wo]:_o,[yo]:ws};function Vg(i,e){function t(){let V=!1;const se=new Mt;let ae=null;const oe=new Mt(0,0,0,0);return{setMask:function(te){ae!==te&&!V&&(i.colorMask(te,te,te,te),ae=te)},setLocked:function(te){V=te},setClear:function(te,Z,Ae,O,J){J===!0&&(te*=O,Z*=O,Ae*=O),se.set(te,Z,Ae,O),oe.equals(se)===!1&&(i.clearColor(te,Z,Ae,O),oe.copy(se))},reset:function(){V=!1,ae=null,oe.set(-1,0,0,0)}}}function n(){let V=!1,se=!1,ae=null,oe=null,te=null;return{setReversed:function(Z){if(se!==Z){const Ae=e.get("EXT_clip_control");Z?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),se=Z;const O=te;te=null,this.setClear(O)}},getReversed:function(){return se},setTest:function(Z){Z?Q(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!V&&(i.depthMask(Z),ae=Z)},setFunc:function(Z){if(se&&(Z=Gg[Z]),oe!==Z){switch(Z){case go:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case _o:i.depthFunc(i.EQUAL);break;case yo:i.depthFunc(i.GEQUAL);break;case Mo:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Z}},setLocked:function(Z){V=Z},setClear:function(Z){te!==Z&&(se&&(Z=1-Z),i.clearDepth(Z),te=Z)},reset:function(){V=!1,ae=null,oe=null,te=null,se=!1}}}function s(){let V=!1,se=null,ae=null,oe=null,te=null,Z=null,Ae=null,O=null,J=null;return{setTest:function(ve){V||(ve?Q(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(ve){se!==ve&&!V&&(i.stencilMask(ve),se=ve)},setFunc:function(ve,Ve,dt){(ae!==ve||oe!==Ve||te!==dt)&&(i.stencilFunc(ve,Ve,dt),ae=ve,oe=Ve,te=dt)},setOp:function(ve,Ve,dt){(Z!==ve||Ae!==Ve||O!==dt)&&(i.stencilOp(ve,Ve,dt),Z=ve,Ae=Ve,O=dt)},setLocked:function(ve){V=ve},setClear:function(ve){J!==ve&&(i.clearStencil(ve),J=ve)},reset:function(){V=!1,se=null,ae=null,oe=null,te=null,Z=null,Ae=null,O=null,J=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,y=null,_=null,v=null,E=null,M=null,T=new Qe(0,0,0),D=0,b=!1,w=null,P=null,F=null,I=null,H=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,U=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(L)[1]),N=U>=1):L.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),N=U>=2);let G=null,B={};const j=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),ge=new Mt().fromArray(j),de=new Mt().fromArray(ee);function Me(V,se,ae,oe){const te=new Uint8Array(4),Z=i.createTexture();i.bindTexture(V,Z),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<ae;Ae++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(se+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return Z}const $={};$[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(ws),le(!1),be(Ol),Q(i.CULL_FACE),xe(Mi);function Q(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function pe(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function Se(V,se){return u[V]!==se?(i.bindFramebuffer(V,se),u[V]=se,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Re(V,se){let ae=f,oe=!1;if(V){ae=d.get(se),ae===void 0&&(ae=[],d.set(se,ae));const te=V.textures;if(ae.length!==te.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Ae=te.length;Z<Ae;Z++)ae[Z]=i.COLOR_ATTACHMENT0+Z;ae.length=te.length,oe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,oe=!0);oe&&i.drawBuffers(ae)}function $e(V){return m!==V?(i.useProgram(V),m=V,!0):!1}const ie={[Oi]:i.FUNC_ADD,[Lf]:i.FUNC_SUBTRACT,[Pf]:i.FUNC_REVERSE_SUBTRACT};ie[Df]=i.MIN,ie[If]=i.MAX;const A={[Uf]:i.ZERO,[Ff]:i.ONE,[Nf]:i.SRC_COLOR,[po]:i.SRC_ALPHA,[Gf]:i.SRC_ALPHA_SATURATE,[Bf]:i.DST_COLOR,[Of]:i.DST_ALPHA,[zf]:i.ONE_MINUS_SRC_COLOR,[mo]:i.ONE_MINUS_SRC_ALPHA,[Hf]:i.ONE_MINUS_DST_COLOR,[kf]:i.ONE_MINUS_DST_ALPHA,[Vf]:i.CONSTANT_COLOR,[Wf]:i.ONE_MINUS_CONSTANT_COLOR,[qf]:i.CONSTANT_ALPHA,[Xf]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(V,se,ae,oe,te,Z,Ae,O,J,ve){if(V===Mi){g===!0&&(pe(i.BLEND),g=!1);return}if(g===!1&&(Q(i.BLEND),g=!0),V!==Cf){if(V!==x||ve!==b){if((p!==Oi||v!==Oi)&&(i.blendEquation(i.FUNC_ADD),p=Oi,v=Oi),ve)switch(V){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.ONE,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}y=null,_=null,E=null,M=null,T.set(0,0,0),D=0,x=V,b=ve}return}te=te||se,Z=Z||ae,Ae=Ae||oe,(se!==p||te!==v)&&(i.blendEquationSeparate(ie[se],ie[te]),p=se,v=te),(ae!==y||oe!==_||Z!==E||Ae!==M)&&(i.blendFuncSeparate(A[ae],A[oe],A[Z],A[Ae]),y=ae,_=oe,E=Z,M=Ae),(O.equals(T)===!1||J!==D)&&(i.blendColor(O.r,O.g,O.b,J),T.copy(O),D=J),x=V,b=!1}function ce(V,se){V.side===gn?pe(i.CULL_FACE):Q(i.CULL_FACE);let ae=V.side===yn;se&&(ae=!ae),le(ae),V.blending===vs&&V.transparent===!1?xe(Mi):xe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const oe=V.stencilWrite;o.setTest(oe),oe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ye(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(V){w!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),w=V)}function be(V){V!==Tf?(Q(i.CULL_FACE),V!==P&&(V===Ol?i.cullFace(i.BACK):V===Rf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),P=V}function Pe(V){V!==F&&(N&&i.lineWidth(V),F=V)}function ye(V,se,ae){V?(Q(i.POLYGON_OFFSET_FILL),(I!==se||H!==ae)&&(i.polygonOffset(se,ae),I=se,H=ae)):pe(i.POLYGON_OFFSET_FILL)}function ze(V){V?Q(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function ct(V){V===void 0&&(V=i.TEXTURE0+z-1),G!==V&&(i.activeTexture(V),G=V)}function at(V,se,ae){ae===void 0&&(G===null?ae=i.TEXTURE0+z-1:ae=G);let oe=B[ae];oe===void 0&&(oe={type:void 0,texture:void 0},B[ae]=oe),(oe.type!==V||oe.texture!==se)&&(G!==ae&&(i.activeTexture(ae),G=ae),i.bindTexture(V,se||$[V]),oe.type=V,oe.texture=se)}function C(){const V=B[G];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(V){ge.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ge.copy(V))}function Xe(V){de.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),de.copy(V))}function Ce(V,se){let ae=c.get(se);ae===void 0&&(ae=new WeakMap,c.set(se,ae));let oe=ae.get(V);oe===void 0&&(oe=i.getUniformBlockIndex(se,V.name),ae.set(V,oe))}function ue(V,se){const oe=c.get(se).get(V);l.get(se)!==oe&&(i.uniformBlockBinding(se,oe,V.__bindingPointIndex),l.set(se,oe))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,B={},u={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,y=null,_=null,v=null,E=null,M=null,T=new Qe(0,0,0),D=0,b=!1,w=null,P=null,F=null,I=null,H=null,ge.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:pe,bindFramebuffer:Se,drawBuffers:Re,useProgram:$e,setBlending:xe,setMaterial:ce,setFlipSided:le,setCullFace:be,setLineWidth:Pe,setPolygonOffset:ye,setScissorTest:ze,activeTexture:ct,bindTexture:at,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:X,texImage2D:Te,texImage3D:fe,updateUBOMapping:Ce,uniformBlockBinding:ue,texStorage2D:_e,texStorage3D:Be,texSubImage2D:re,texSubImage3D:he,compressedTexSubImage2D:ne,compressedTexSubImage3D:Oe,scissor:me,viewport:Xe,reset:tt}}function Wg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return f?new OffscreenCanvas(C,S):or("canvas")}function g(C,S,X){let re=1;const he=at(C);if((he.width>X||he.height>X)&&(re=X/Math.max(he.width,he.height)),re<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ne=Math.floor(re*he.width),Oe=Math.floor(re*he.height);u===void 0&&(u=m(ne,Oe));const _e=S?m(ne,Oe):u;return _e.width=ne,_e.height=Oe,_e.getContext("2d").drawImage(C,0,0,ne,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ne+"x"+Oe+")."),_e}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),C;return C}function x(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,S,X,re,he=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=S;if(S===i.RED&&(X===i.FLOAT&&(ne=i.R32F),X===i.HALF_FLOAT&&(ne=i.R16F),X===i.UNSIGNED_BYTE&&(ne=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.R8UI),X===i.UNSIGNED_SHORT&&(ne=i.R16UI),X===i.UNSIGNED_INT&&(ne=i.R32UI),X===i.BYTE&&(ne=i.R8I),X===i.SHORT&&(ne=i.R16I),X===i.INT&&(ne=i.R32I)),S===i.RG&&(X===i.FLOAT&&(ne=i.RG32F),X===i.HALF_FLOAT&&(ne=i.RG16F),X===i.UNSIGNED_BYTE&&(ne=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RG8UI),X===i.UNSIGNED_SHORT&&(ne=i.RG16UI),X===i.UNSIGNED_INT&&(ne=i.RG32UI),X===i.BYTE&&(ne=i.RG8I),X===i.SHORT&&(ne=i.RG16I),X===i.INT&&(ne=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),X===i.UNSIGNED_INT&&(ne=i.RGB32UI),X===i.BYTE&&(ne=i.RGB8I),X===i.SHORT&&(ne=i.RGB16I),X===i.INT&&(ne=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),X===i.UNSIGNED_INT&&(ne=i.RGBA32UI),X===i.BYTE&&(ne=i.RGBA8I),X===i.SHORT&&(ne=i.RGBA16I),X===i.INT&&(ne=i.RGBA32I)),S===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),S===i.RGBA){const Oe=he?ia:Rt.getTransfer(re);X===i.FLOAT&&(ne=i.RGBA32F),X===i.HALF_FLOAT&&(ne=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ne=Oe===zt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(C,S){let X;return C?S===null||S===Si||S===sr?X=i.DEPTH24_STENCIL8:S===Fn?X=i.DEPTH32F_STENCIL8:S===ir&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Si||S===sr?X=i.DEPTH_COMPONENT24:S===Fn?X=i.DEPTH_COMPONENT32F:S===ir&&(X=i.DEPTH_COMPONENT16),X}function E(C,S){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==fn&&C.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function M(C){const S=C.target;S.removeEventListener("dispose",M),D(S),S.isVideoTexture&&h.delete(S)}function T(C){const S=C.target;S.removeEventListener("dispose",T),w(S)}function D(C){const S=n.get(C);if(S.__webglInit===void 0)return;const X=C.source,re=d.get(X);if(re){const he=re[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&b(C),Object.keys(re).length===0&&d.delete(X)}n.remove(C)}function b(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const X=C.source,re=d.get(X);delete re[S.__cacheKey],a.memory.textures--}function w(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let he=0;he<S.__webglFramebuffer[re].length;he++)i.deleteFramebuffer(S.__webglFramebuffer[re][he]);else i.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)i.deleteFramebuffer(S.__webglFramebuffer[re]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=C.textures;for(let re=0,he=X.length;re<he;re++){const ne=n.get(X[re]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(X[re])}n.remove(C)}let P=0;function F(){P=0}function I(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function H(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function z(C,S){const X=n.get(C);if(C.isVideoTexture&&ze(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(X,C,S);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function N(C,S){const X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){$(X,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function U(C,S){const X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){$(X,C,S);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function L(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Q(X,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const G={[Eo]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[Ao]:i.MIRRORED_REPEAT},B={[fn]:i.NEAREST,[tu]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},j={[su]:i.NEVER,[hu]:i.ALWAYS,[ru]:i.LESS,[Gh]:i.LEQUAL,[au]:i.EQUAL,[cu]:i.GEQUAL,[ou]:i.GREATER,[lu]:i.NOTEQUAL};function ee(C,S){if(S.type===Fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Sn||S.magFilter===ma||S.magFilter===xr||S.magFilter===ai||S.minFilter===Sn||S.minFilter===ma||S.minFilter===xr||S.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,G[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,G[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,G[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,B[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,B[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,j[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fn||S.minFilter!==xr&&S.minFilter!==ai||S.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ge(C,S){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",M));const re=S.source;let he=d.get(re);he===void 0&&(he={},d.set(re,he));const ne=H(S);if(ne!==C.__cacheKey){he[ne]===void 0&&(he[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),he[ne].usedTimes++;const Oe=he[C.__cacheKey];Oe!==void 0&&(he[C.__cacheKey].usedTimes--,Oe.usedTimes===0&&b(S)),C.__cacheKey=ne,C.__webglTexture=he[ne].texture}return X}function de(C,S,X){return Math.floor(Math.floor(C/X)/S)}function Me(C,S,X,re){const ne=C.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,X,re,S.data);else{ne.sort((fe,me)=>fe.start-me.start);let Oe=0;for(let fe=1;fe<ne.length;fe++){const me=ne[Oe],Xe=ne[fe],Ce=me.start+me.count,ue=de(Xe.start,S.width,4),tt=de(me.start,S.width,4);Xe.start<=Ce+1&&ue===tt&&de(Xe.start+Xe.count-1,S.width,4)===ue?me.count=Math.max(me.count,Xe.start+Xe.count-me.start):(++Oe,ne[Oe]=Xe)}ne.length=Oe+1;const _e=i.getParameter(i.UNPACK_ROW_LENGTH),Be=i.getParameter(i.UNPACK_SKIP_PIXELS),Te=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let fe=0,me=ne.length;fe<me;fe++){const Xe=ne[fe],Ce=Math.floor(Xe.start/4),ue=Math.ceil(Xe.count/4),tt=Ce%S.width,V=Math.floor(Ce/S.width),se=ue,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,tt,V,se,ae,X,re,S.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function $(C,S,X){let re=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=i.TEXTURE_3D);const he=ge(C,S),ne=S.source;t.bindTexture(re,C.__webglTexture,i.TEXTURE0+X);const Oe=n.get(ne);if(ne.version!==Oe.__version||he===!0){t.activeTexture(i.TEXTURE0+X);const _e=Rt.getPrimaries(Rt.workingColorSpace),Be=S.colorSpace===Vn?null:Rt.getPrimaries(S.colorSpace),Te=S.colorSpace===Vn||_e===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let fe=g(S.image,!1,s.maxTextureSize);fe=ct(S,fe);const me=r.convert(S.format,S.colorSpace),Xe=r.convert(S.type);let Ce=_(S.internalFormat,me,Xe,S.colorSpace,S.isVideoTexture);ee(re,S);let ue;const tt=S.mipmaps,V=S.isVideoTexture!==!0,se=Oe.__version===void 0||he===!0,ae=ne.dataReady,oe=E(S,fe);if(S.isDepthTexture)Ce=v(S.format===ar,S.type),se&&(V?t.texStorage2D(i.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,me,Xe,null));else if(S.isDataTexture)if(tt.length>0){V&&se&&t.texStorage2D(i.TEXTURE_2D,oe,Ce,tt[0].width,tt[0].height);for(let te=0,Z=tt.length;te<Z;te++)ue=tt[te],V?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,me,Xe,ue.data):t.texImage2D(i.TEXTURE_2D,te,Ce,ue.width,ue.height,0,me,Xe,ue.data);S.generateMipmaps=!1}else V?(se&&t.texStorage2D(i.TEXTURE_2D,oe,Ce,fe.width,fe.height),ae&&Me(S,fe,me,Xe)):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,me,Xe,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){V&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Ce,tt[0].width,tt[0].height,fe.depth);for(let te=0,Z=tt.length;te<Z;te++)if(ue=tt[te],S.format!==_n)if(me!==null)if(V){if(ae)if(S.layerUpdates.size>0){const Ae=pc(ue.width,ue.height,S.format,S.type);for(const O of S.layerUpdates){const J=ue.data.subarray(O*Ae/ue.data.BYTES_PER_ELEMENT,(O+1)*Ae/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,O,ue.width,ue.height,1,me,J)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,fe.depth,me,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Ce,ue.width,ue.height,fe.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,fe.depth,me,Xe,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Ce,ue.width,ue.height,fe.depth,0,me,Xe,ue.data)}else{V&&se&&t.texStorage2D(i.TEXTURE_2D,oe,Ce,tt[0].width,tt[0].height);for(let te=0,Z=tt.length;te<Z;te++)ue=tt[te],S.format!==_n?me!==null?V?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,me,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,me,Xe,ue.data):t.texImage2D(i.TEXTURE_2D,te,Ce,ue.width,ue.height,0,me,Xe,ue.data)}else if(S.isDataArrayTexture)if(V){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Ce,fe.width,fe.height,fe.depth),ae)if(S.layerUpdates.size>0){const te=pc(fe.width,fe.height,S.format,S.type);for(const Z of S.layerUpdates){const Ae=fe.data.subarray(Z*te/fe.data.BYTES_PER_ELEMENT,(Z+1)*te/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,fe.width,fe.height,1,me,Xe,Ae)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,me,Xe,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,me,Xe,fe.data);else if(S.isData3DTexture)V?(se&&t.texStorage3D(i.TEXTURE_3D,oe,Ce,fe.width,fe.height,fe.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,me,Xe,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,me,Xe,fe.data);else if(S.isFramebufferTexture){if(se)if(V)t.texStorage2D(i.TEXTURE_2D,oe,Ce,fe.width,fe.height);else{let te=fe.width,Z=fe.height;for(let Ae=0;Ae<oe;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Ce,te,Z,0,me,Xe,null),te>>=1,Z>>=1}}else if(tt.length>0){if(V&&se){const te=at(tt[0]);t.texStorage2D(i.TEXTURE_2D,oe,Ce,te.width,te.height)}for(let te=0,Z=tt.length;te<Z;te++)ue=tt[te],V?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,me,Xe,ue):t.texImage2D(i.TEXTURE_2D,te,Ce,me,Xe,ue);S.generateMipmaps=!1}else if(V){if(se){const te=at(fe);t.texStorage2D(i.TEXTURE_2D,oe,Ce,te.width,te.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Xe,fe)}else t.texImage2D(i.TEXTURE_2D,0,Ce,me,Xe,fe);x(S)&&p(re),Oe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,X){if(S.image.length!==6)return;const re=ge(C,S),he=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+X);const ne=n.get(he);if(he.version!==ne.__version||re===!0){t.activeTexture(i.TEXTURE0+X);const Oe=Rt.getPrimaries(Rt.workingColorSpace),_e=S.colorSpace===Vn?null:Rt.getPrimaries(S.colorSpace),Be=S.colorSpace===Vn||Oe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,fe=S.image[0]&&S.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!Te&&!fe?me[Z]=g(S.image[Z],!0,s.maxCubemapSize):me[Z]=fe?S.image[Z].image:S.image[Z],me[Z]=ct(S,me[Z]);const Xe=me[0],Ce=r.convert(S.format,S.colorSpace),ue=r.convert(S.type),tt=_(S.internalFormat,Ce,ue,S.colorSpace),V=S.isVideoTexture!==!0,se=ne.__version===void 0||re===!0,ae=he.dataReady;let oe=E(S,Xe);ee(i.TEXTURE_CUBE_MAP,S);let te;if(Te){V&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,tt,Xe.width,Xe.height);for(let Z=0;Z<6;Z++){te=me[Z].mipmaps;for(let Ae=0;Ae<te.length;Ae++){const O=te[Ae];S.format!==_n?Ce!==null?V?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,0,0,O.width,O.height,Ce,O.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,tt,O.width,O.height,0,O.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,0,0,O.width,O.height,Ce,ue,O.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,tt,O.width,O.height,0,Ce,ue,O.data)}}}else{if(te=S.mipmaps,V&&se){te.length>0&&oe++;const Z=at(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,tt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(fe){V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Ce,ue,me[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,tt,me[Z].width,me[Z].height,0,Ce,ue,me[Z].data);for(let Ae=0;Ae<te.length;Ae++){const J=te[Ae].image[Z].image;V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,0,0,J.width,J.height,Ce,ue,J.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,tt,J.width,J.height,0,Ce,ue,J.data)}}else{V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ce,ue,me[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,tt,Ce,ue,me[Z]);for(let Ae=0;Ae<te.length;Ae++){const O=te[Ae];V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,0,0,Ce,ue,O.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,tt,Ce,ue,O.image[Z])}}}x(S)&&p(i.TEXTURE_CUBE_MAP),ne.__version=he.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function pe(C,S,X,re,he,ne){const Oe=r.convert(X.format,X.colorSpace),_e=r.convert(X.type),Be=_(X.internalFormat,Oe,_e,X.colorSpace),Te=n.get(S),fe=n.get(X);if(fe.__renderTarget=S,!Te.__hasExternalTextures){const me=Math.max(1,S.width>>ne),Xe=Math.max(1,S.height>>ne);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,ne,Be,me,Xe,S.depth,0,Oe,_e,null):t.texImage2D(he,ne,Be,me,Xe,0,Oe,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ye(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,he,fe.__webglTexture,0,Pe(S)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,he,fe.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(C,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const re=S.depthTexture,he=re&&re.isDepthTexture?re.type:null,ne=v(S.stencilBuffer,he),Oe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=Pe(S);ye(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ne,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ne,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,C)}else{const re=S.textures;for(let he=0;he<re.length;he++){const ne=re[he],Oe=r.convert(ne.format,ne.colorSpace),_e=r.convert(ne.type),Be=_(ne.internalFormat,Oe,_e,ne.colorSpace),Te=Pe(S);X&&ye(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Be,S.width,S.height):ye(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,Be,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Be,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(S.depthTexture);re.__renderTarget=S,(!re.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const he=re.__webglTexture,ne=Pe(S);if(S.depthTexture.format===rr)ye(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(S.depthTexture.format===ar)ye(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function $e(C){const S=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const re=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){const he=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",he)};re.addEventListener("dispose",he),S.__depthDisposeCallback=he}S.__boundDepthTexture=re}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const re=C.texture.mipmaps;re&&re.length>0?Re(S.__webglFramebuffer[0],C):Re(S.__webglFramebuffer,C)}else if(X){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=i.createRenderbuffer(),Se(S.__webglDepthbuffer[re],C,!1);else{const he=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,ne)}}else{const re=C.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Se(S.__webglDepthbuffer,C,!1);else{const he=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(C,S,X){const re=n.get(C);S!==void 0&&pe(re.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&$e(C)}function A(C){const S=C.texture,X=n.get(C),re=n.get(S);C.addEventListener("dispose",T);const he=C.textures,ne=C.isWebGLCubeRenderTarget===!0,Oe=he.length>1;if(Oe||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=S.version,a.memory.textures++),ne){X.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[_e]=[];for(let Be=0;Be<S.mipmaps.length;Be++)X.__webglFramebuffer[_e][Be]=i.createFramebuffer()}else X.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let _e=0;_e<S.mipmaps.length;_e++)X.__webglFramebuffer[_e]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let _e=0,Be=he.length;_e<Be;_e++){const Te=n.get(he[_e]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&ye(C)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _e=0;_e<he.length;_e++){const Be=he[_e];X.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[_e]);const Te=r.convert(Be.format,Be.colorSpace),fe=r.convert(Be.type),me=_(Be.internalFormat,Te,fe,Be.colorSpace,C.isXRRenderTarget===!0),Xe=Pe(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,X.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),ee(i.TEXTURE_CUBE_MAP,S);for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0)for(let Be=0;Be<S.mipmaps.length;Be++)pe(X.__webglFramebuffer[_e][Be],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be);else pe(X.__webglFramebuffer[_e],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);x(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let _e=0,Be=he.length;_e<Be;_e++){const Te=he[_e],fe=n.get(Te);let me=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,fe.__webglTexture),ee(me,Te),pe(X.__webglFramebuffer,C,Te,i.COLOR_ATTACHMENT0+_e,me,0),x(Te)&&p(me)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_e=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,re.__webglTexture),ee(_e,S),S.mipmaps&&S.mipmaps.length>0)for(let Be=0;Be<S.mipmaps.length;Be++)pe(X.__webglFramebuffer[Be],C,S,i.COLOR_ATTACHMENT0,_e,Be);else pe(X.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,_e,0);x(S)&&p(_e),t.unbindTexture()}C.depthBuffer&&$e(C)}function xe(C){const S=C.textures;for(let X=0,re=S.length;X<re;X++){const he=S[X];if(x(he)){const ne=y(C),Oe=n.get(he).__webglTexture;t.bindTexture(ne,Oe),p(ne),t.unbindTexture()}}}const ce=[],le=[];function be(C){if(C.samples>0){if(ye(C)===!1){const S=C.textures,X=C.width,re=C.height;let he=i.COLOR_BUFFER_BIT;const ne=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(C),_e=S.length>1;if(_e)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Be=C.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Te]);const fe=n.get(S[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,X,re,0,0,X,re,he,i.NEAREST),l===!0&&(ce.length=0,le.length=0,ce.push(i.COLOR_ATTACHMENT0+Te),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ce.push(ne),le.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Te]);const fe=n.get(S[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Pe(C){return Math.min(s.maxSamples,C.samples)}function ye(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ze(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ct(C,S){const X=C.colorSpace,re=C.format,he=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Es&&X!==Vn&&(Rt.getTransfer(X)===zt?(re!==_n||he!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function at(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=F,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=U,this.setTextureCube=L,this.rebindTextures=ie,this.setupRenderTarget=A,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ye}function qg(i,e){function t(n,s=Vn){let r;const a=Rt.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uh)return i.BYTE;if(n===Fh)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===Oh)return i.ALPHA;if(n===kh)return i.RGB;if(n===_n)return i.RGBA;if(n===rr)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===_s)return i.RED;if(n===_l)return i.RED_INTEGER;if(n===Bh)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===Kr||n===jr||n===Zr||n===Jr)if(a===zt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===Ro||n===Co||n===Lo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Do||n===Io)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Do)return a===zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Io)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uo||n===Fo||n===No||n===zo||n===Oo||n===ko||n===Bo||n===Ho||n===Go||n===Vo||n===Wo||n===qo||n===Xo||n===$o)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===No)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ko)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bo)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ho)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Go)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vo)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wo)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xo)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===Ko||n===jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yo)return a===zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zo||n===Jo||n===Qo||n===el)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$g=`
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

}`;class Yg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new jh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:Xg,fragmentShader:$g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kg extends Ds{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const g=typeof XRWebGLBinding<"u",x=new Yg,p={},y=t.getContextAttributes();let _=null,v=null;const E=[],M=[],T=new nt;let D=null;const b=new Un;b.viewport=new Mt;const w=new Un;w.viewport=new Mt;const P=[b,w],F=new gd;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=E[$];return Q===void 0&&(Q=new Oa,E[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=E[$];return Q===void 0&&(Q=new Oa,E[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=E[$];return Q===void 0&&(Q=new Oa,E[$]=Q),Q.getHandSpace()};function z($){const Q=M.indexOf($.inputSource);if(Q===-1)return;const pe=E[Q];pe!==void 0&&(pe.update($.inputSource,$.frame,c||a),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",U);for(let $=0;$<E.length;$++){const Q=M[$];Q!==null&&(M[$]=null,E[$].disconnect(Q))}I=null,H=null,x.reset();for(const $ in p)delete p[$];e.setRenderTarget(_),f=null,d=null,u=null,s=null,v=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",N),s.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Se=null,Re=null;y.depth&&(Re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=y.stencil?ar:rr,Se=y.stencil?sr:Si);const $e={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer($e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ci(d.textureWidth,d.textureHeight,{format:_n,type:jn,depthTexture:new Al(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ci(f.framebufferWidth,f.framebufferHeight,{format:_n,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function U($){for(let Q=0;Q<$.removed.length;Q++){const pe=$.removed[Q],Se=M.indexOf(pe);Se>=0&&(M[Se]=null,E[Se].disconnect(pe))}for(let Q=0;Q<$.added.length;Q++){const pe=$.added[Q];let Se=M.indexOf(pe);if(Se===-1){for(let $e=0;$e<E.length;$e++)if($e>=M.length){M.push(pe),Se=$e;break}else if(M[$e]===null){M[$e]=pe,Se=$e;break}if(Se===-1)break}const Re=E[Se];Re&&Re.connect(pe)}}const L=new k,G=new k;function B($,Q,pe){L.setFromMatrixPosition(Q.matrixWorld),G.setFromMatrixPosition(pe.matrixWorld);const Se=L.distanceTo(G),Re=Q.projectionMatrix.elements,$e=pe.projectionMatrix.elements,ie=Re[14]/(Re[10]-1),A=Re[14]/(Re[10]+1),xe=(Re[9]+1)/Re[5],ce=(Re[9]-1)/Re[5],le=(Re[8]-1)/Re[0],be=($e[8]+1)/$e[0],Pe=ie*le,ye=ie*be,ze=Se/(-le+be),ct=ze*-le;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Re[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const at=ie+ze,C=A+ze,S=Pe-ct,X=ye+(Se-ct),re=xe*A/C*at,he=ce*A/C*at;$.projectionMatrix.makePerspective(S,X,re,he,at,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function j($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Q=$.near,pe=$.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),F.near=w.near=b.near=Q,F.far=w.far=b.far=pe,(I!==F.near||H!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,H=F.far),F.layers.mask=$.layers.mask|6,b.layers.mask=F.layers.mask&3,w.layers.mask=F.layers.mask&5;const Se=$.parent,Re=F.cameras;j(F,Se);for(let $e=0;$e<Re.length;$e++)j(Re[$e],Se);Re.length===2?B(F,b,w):F.projectionMatrix.copy(b.projectionMatrix),ee($,F,Se)};function ee($,Q,pe){pe===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=tl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function($){return p[$]};let ge=null;function de($,Q){if(h=Q.getViewerPose(c||a),m=Q,h!==null){const pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Se=!1;pe.length!==F.cameras.length&&(F.cameras.length=0,Se=!0);for(let A=0;A<pe.length;A++){const xe=pe[A];let ce=null;if(f!==null)ce=f.getViewport(xe);else{const be=u.getViewSubImage(d,xe);ce=be.viewport,A===0&&(e.setRenderTargetTextures(v,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(v))}let le=P[A];le===void 0&&(le=new Un,le.layers.enable(A),le.viewport=new Mt,P[A]=le),le.matrix.fromArray(xe.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(xe.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ce.x,ce.y,ce.width,ce.height),A===0&&(F.matrix.copy(le.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Se===!0&&F.cameras.push(le)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const A=u.getDepthInformation(pe[0]);A&&A.isValid&&A.texture&&x.init(A,s.renderState)}if(Re&&Re.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let A=0;A<pe.length;A++){const xe=pe[A].camera;if(xe){let ce=p[xe];ce||(ce=new jh,p[xe]=ce);const le=u.getCameraImage(xe);ce.sourceTexture=le}}}}for(let pe=0;pe<E.length;pe++){const Se=M[pe],Re=E[pe];Se!==null&&Re!==void 0&&Re.update(Se,Q,c||a)}ge&&ge($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const Me=new of;Me.setAnimationLoop(de),this.setAnimationLoop=function($){ge=$},this.dispose=function(){}}}const Ui=new zn,jg=new Lt;function Zg(i,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,$h(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),u(x,p)):p.isMeshPhongMaterial?(r(x,p),h(x,p)):p.isMeshStandardMaterial?(r(x,p),d(x,p),p.isMeshPhysicalMaterial&&f(x,p,v)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),g(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?l(x,p,y,_):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===yn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===yn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,v=y.envMapRotation;_&&(x.envMap.value=_,Ui.copy(v),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),x.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(Ui)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,y,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=_*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function f(x,p,y){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function g(x,p){const y=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(m(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",x));const E=_.program;n.updateUBOMapping(y,E);const M=e.render.frame;r[y.id]!==M&&(d(y),r[y.id]=M)}function h(y){const _=u();y.__bindingPointIndex=_;const v=i.createBuffer(),E=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,T=v.length;M<T;M++){const D=Array.isArray(v[M])?v[M]:[v[M]];for(let b=0,w=D.length;b<w;b++){const P=D[b];if(f(P,M,b,E)===!0){const F=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let z=0;z<I.length;z++){const N=I[z],U=g(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,F+H,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,H),H+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,v,E){const M=y.value,T=_+"_"+v;if(E[T]===void 0)return typeof M=="number"||typeof M=="boolean"?E[T]=M:E[T]=M.clone(),!0;{const D=E[T];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return E[T]=M,!0}else if(D.equals(M)===!1)return D.copy(M),!0}return!1}function m(y){const _=y.uniforms;let v=0;const E=16;for(let T=0,D=_.length;T<D;T++){const b=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,P=b.length;w<P;w++){const F=b[w],I=Array.isArray(F.value)?F.value:[F.value];for(let H=0,z=I.length;H<z;H++){const N=I[H],U=g(N),L=v%E,G=L%U.boundary,B=L+G;v+=G,B!==0&&E-B<U.storage&&(v+=E-B),F.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=U.storage}}}const M=v%E;return M>0&&(v+=E-M),y.__size=v,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function x(y){const _=y.target;_.removeEventListener("dispose",x);const v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Qg{constructor(e={}){const{canvas:t=uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=hn;let M=0,T=0,D=null,b=-1,w=null;const P=new Mt,F=new Mt;let I=null;const H=new Qe(0);let z=0,N=t.width,U=t.height,L=1,G=null,B=null;const j=new Mt(0,0,N,U),ee=new Mt(0,0,N,U);let ge=!1;const de=new oa;let Me=!1,$=!1;const Q=new Lt,pe=new k,Se=new Mt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function ie(){return D===null?L:1}let A=n;function xe(R,W){return t.getContext(R,W)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pl}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",te,!1),A===null){const W="webgl2";if(A=xe(W,R),A===null)throw xe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ce,le,be,Pe,ye,ze,ct,at,C,S,X,re,he,ne,Oe,_e,Be,Te,fe,me,Xe,Ce,ue,tt;function V(){ce=new cm(A),ce.init(),Ce=new qg(A,ce),le=new nm(A,ce,e,Ce),be=new Vg(A,ce),le.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),Pe=new um(A),ye=new Lg,ze=new Wg(A,ce,be,ye,le,Ce,Pe),ct=new sm(v),at=new lm(v),C=new vd(A),ue=new em(A,C),S=new hm(A,C,Pe,ue),X=new pm(A,S,C,Pe),fe=new dm(A,le,ze),_e=new im(ye),re=new Cg(v,ct,at,ce,le,ue,_e),he=new Zg(v,ye),ne=new Dg,Oe=new Og(ce),Te=new Q0(v,ct,at,be,X,f,l),Be=new Hg(v,X,le),tt=new Jg(A,Pe,le,be),me=new tm(A,ce,Pe),Xe=new fm(A,ce,Pe),Pe.programs=re.programs,v.capabilities=le,v.extensions=ce,v.properties=ye,v.renderLists=ne,v.shadowMap=Be,v.state=be,v.info=Pe}V();const se=new Kg(v,A);this.xr=se,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const R=ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(R){R!==void 0&&(L=R,this.setSize(N,U,!1))},this.getSize=function(R){return R.set(N,U)},this.setSize=function(R,W,Y=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,U=W,t.width=Math.floor(R*L),t.height=Math.floor(W*L),Y===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(N*L,U*L).floor()},this.setDrawingBufferSize=function(R,W,Y){N=R,U=W,L=Y,t.width=Math.floor(R*Y),t.height=Math.floor(W*Y),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(j)},this.setViewport=function(R,W,Y,K){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,W,Y,K),be.viewport(P.copy(j).multiplyScalar(L).round())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,W,Y,K){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,W,Y,K),be.scissor(F.copy(ee).multiplyScalar(L).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){be.setScissorTest(ge=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){B=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,Y=!0){let K=0;if(R){let q=!1;if(D!==null){const we=D.texture.format;q=we===Ml||we===yl||we===_l}if(q){const we=D.texture.type,Ie=we===jn||we===Si||we===ir||we===sr||we===xl||we===vl,He=Te.getClearColor(),ke=Te.getClearAlpha(),je=He.r,it=He.g,We=He.b;Ie?(m[0]=je,m[1]=it,m[2]=We,m[3]=ke,A.clearBufferuiv(A.COLOR,0,m)):(g[0]=je,g[1]=it,g[2]=We,g[3]=ke,A.clearBufferiv(A.COLOR,0,g))}else K|=A.COLOR_BUFFER_BIT}W&&(K|=A.DEPTH_BUFFER_BIT),Y&&(K|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Te.dispose(),ne.dispose(),Oe.dispose(),ye.dispose(),ct.dispose(),at.dispose(),X.dispose(),ue.dispose(),tt.dispose(),re.dispose(),se.dispose(),se.removeEventListener("sessionstart",dt),se.removeEventListener("sessionend",Ht),Ge.stop()};function ae(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=Pe.autoReset,W=Be.enabled,Y=Be.autoUpdate,K=Be.needsUpdate,q=Be.type;V(),Pe.autoReset=R,Be.enabled=W,Be.autoUpdate=Y,Be.needsUpdate=K,Be.type=q}function te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Z(R){const W=R.target;W.removeEventListener("dispose",Z),Ae(W)}function Ae(R){O(R),ye.remove(R)}function O(R){const W=ye.get(R).programs;W!==void 0&&(W.forEach(function(Y){re.releaseProgram(Y)}),R.isShaderMaterial&&re.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Y,K,q,we){W===null&&(W=Re);const Ie=q.isMesh&&q.matrixWorld.determinant()<0,He=yt(R,W,Y,K,q);be.setMaterial(K,Ie);let ke=Y.index,je=1;if(K.wireframe===!0){if(ke=S.getWireframeAttribute(Y),ke===void 0)return;je=2}const it=Y.drawRange,We=Y.attributes.position;let ot=it.start*je,bt=(it.start+it.count)*je;we!==null&&(ot=Math.max(ot,we.start*je),bt=Math.min(bt,(we.start+we.count)*je)),ke!==null?(ot=Math.max(ot,0),bt=Math.min(bt,ke.count)):We!=null&&(ot=Math.max(ot,0),bt=Math.min(bt,We.count));const Dt=bt-ot;if(Dt<0||Dt===1/0)return;ue.setup(q,K,He,Y,ke);let Ut,Et=me;if(ke!==null&&(Ut=C.get(ke),Et=Xe,Et.setIndex(Ut)),q.isMesh)K.wireframe===!0?(be.setLineWidth(K.wireframeLinewidth*ie()),Et.setMode(A.LINES)):Et.setMode(A.TRIANGLES);else if(q.isLine){let Ye=K.linewidth;Ye===void 0&&(Ye=1),be.setLineWidth(Ye*ie()),q.isLineSegments?Et.setMode(A.LINES):q.isLineLoop?Et.setMode(A.LINE_LOOP):Et.setMode(A.LINE_STRIP)}else q.isPoints?Et.setMode(A.POINTS):q.isSprite&&Et.setMode(A.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))Et.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ye=q._multiDrawStarts,Ke=q._multiDrawCounts,st=q._multiDrawCount,lt=ke?C.get(ke).bytesPerElement:1,At=ye.get(K).currentProgram.getUniforms();for(let xt=0;xt<st;xt++)At.setValue(A,"_gl_DrawID",xt),Et.render(Ye[xt]/lt,Ke[xt])}else if(q.isInstancedMesh)Et.renderInstances(ot,Dt,q.count);else if(Y.isInstancedBufferGeometry){const Ye=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ke=Math.min(Y.instanceCount,Ye);Et.renderInstances(ot,Dt,Ke)}else Et.render(ot,Dt)};function J(R,W,Y){R.transparent===!0&&R.side===gn&&R.forceSinglePass===!1?(R.side=yn,R.needsUpdate=!0,Le(R,W,Y),R.side=bi,R.needsUpdate=!0,Le(R,W,Y),R.side=gn):Le(R,W,Y)}this.compile=function(R,W,Y=null){Y===null&&(Y=R),p=Oe.get(Y),p.init(W),_.push(p),Y.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),R!==Y&&R.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const K=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const we=q.material;if(we)if(Array.isArray(we))for(let Ie=0;Ie<we.length;Ie++){const He=we[Ie];J(He,Y,q),K.add(He)}else J(we,Y,q),K.add(we)}),p=_.pop(),K},this.compileAsync=function(R,W,Y=null){const K=this.compile(R,W,Y);return new Promise(q=>{function we(){if(K.forEach(function(Ie){ye.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){q(R);return}setTimeout(we,10)}ce.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ve=null;function Ve(R){ve&&ve(R)}function dt(){Ge.stop()}function Ht(){Ge.start()}const Ge=new of;Ge.setAnimationLoop(Ve),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(R){ve=R,se.setAnimationLoop(R),R===null?Ge.stop():Ge.start()},se.addEventListener("sessionstart",dt),se.addEventListener("sessionend",Ht),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(W),W=se.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,W,D),p=Oe.get(R,_.length),p.init(W),_.push(p),Q.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),de.setFromProjectionMatrix(Q,Yn,W.reversedDepth),$=this.localClippingEnabled,Me=_e.init(this.clippingPlanes,$),x=ne.get(R,y.length),x.init(),y.push(x),se.enabled===!0&&se.isPresenting===!0){const we=v.xr.getDepthSensingMesh();we!==null&&De(we,W,-1/0,v.sortObjects)}De(R,W,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(G,B),$e=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,$e&&Te.addToRenderList(x,R),this.info.render.frame++,Me===!0&&_e.beginShadows();const Y=p.state.shadowsArray;Be.render(Y,R,W),Me===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,q=x.transmissive;if(p.setupLights(),W.isArrayCamera){const we=W.cameras;if(q.length>0)for(let Ie=0,He=we.length;Ie<He;Ie++){const ke=we[Ie];Kt(K,q,R,ke)}$e&&Te.render(R);for(let Ie=0,He=we.length;Ie<He;Ie++){const ke=we[Ie];Ze(x,R,ke,ke.viewport)}}else q.length>0&&Kt(K,q,R,W),$e&&Te.render(R),Ze(x,R,W);D!==null&&T===0&&(ze.updateMultisampleRenderTarget(D),ze.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(v,R,W),ue.resetDefaultState(),b=-1,w=null,_.pop(),_.length>0?(p=_[_.length-1],Me===!0&&_e.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?x=y[y.length-1]:x=null};function De(R,W,Y,K){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||de.intersectsSprite(R)){K&&Se.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Q);const Ie=X.update(R),He=R.material;He.visible&&x.push(R,Ie,He,Y,Se.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||de.intersectsObject(R))){const Ie=X.update(R),He=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Se.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Se.copy(Ie.boundingSphere.center)),Se.applyMatrix4(R.matrixWorld).applyMatrix4(Q)),Array.isArray(He)){const ke=Ie.groups;for(let je=0,it=ke.length;je<it;je++){const We=ke[je],ot=He[We.materialIndex];ot&&ot.visible&&x.push(R,Ie,ot,Y,Se.z,We)}}else He.visible&&x.push(R,Ie,He,Y,Se.z,null)}}const we=R.children;for(let Ie=0,He=we.length;Ie<He;Ie++)De(we[Ie],W,Y,K)}function Ze(R,W,Y,K){const q=R.opaque,we=R.transmissive,Ie=R.transparent;p.setupLightsView(Y),Me===!0&&_e.setGlobalState(v.clippingPlanes,Y),K&&be.viewport(P.copy(K)),q.length>0&&ht(q,W,Y),we.length>0&&ht(we,W,Y),Ie.length>0&&ht(Ie,W,Y),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Kt(R,W,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new ci(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Wi:jn,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const we=p.state.transmissionRenderTarget[K.id],Ie=K.viewport||P;we.setSize(Ie.z*v.transmissionResolutionScale,Ie.w*v.transmissionResolutionScale);const He=v.getRenderTarget(),ke=v.getActiveCubeFace(),je=v.getActiveMipmapLevel();v.setRenderTarget(we),v.getClearColor(H),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),$e&&Te.render(Y);const it=v.toneMapping;v.toneMapping=wi;const We=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),Me===!0&&_e.setGlobalState(v.clippingPlanes,K),ht(R,Y,K),ze.updateMultisampleRenderTarget(we),ze.updateRenderTargetMipmap(we),ce.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let bt=0,Dt=W.length;bt<Dt;bt++){const Ut=W[bt],Et=Ut.object,Ye=Ut.geometry,Ke=Ut.material,st=Ut.group;if(Ke.side===gn&&Et.layers.test(K.layers)){const lt=Ke.side;Ke.side=yn,Ke.needsUpdate=!0,Ue(Et,Y,K,Ye,Ke,st),Ke.side=lt,Ke.needsUpdate=!0,ot=!0}}ot===!0&&(ze.updateMultisampleRenderTarget(we),ze.updateRenderTargetMipmap(we))}v.setRenderTarget(He,ke,je),v.setClearColor(H,z),We!==void 0&&(K.viewport=We),v.toneMapping=it}function ht(R,W,Y){const K=W.isScene===!0?W.overrideMaterial:null;for(let q=0,we=R.length;q<we;q++){const Ie=R[q],He=Ie.object,ke=Ie.geometry,je=Ie.group;let it=Ie.material;it.allowOverride===!0&&K!==null&&(it=K),He.layers.test(Y.layers)&&Ue(He,W,Y,ke,it,je)}}function Ue(R,W,Y,K,q,we){R.onBeforeRender(v,W,Y,K,q,we),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(v,W,Y,K,R,we),q.transparent===!0&&q.side===gn&&q.forceSinglePass===!1?(q.side=yn,q.needsUpdate=!0,v.renderBufferDirect(Y,W,K,q,R,we),q.side=bi,q.needsUpdate=!0,v.renderBufferDirect(Y,W,K,q,R,we),q.side=gn):v.renderBufferDirect(Y,W,K,q,R,we),R.onAfterRender(v,W,Y,K,q,we)}function Le(R,W,Y){W.isScene!==!0&&(W=Re);const K=ye.get(R),q=p.state.lights,we=p.state.shadowsArray,Ie=q.state.version,He=re.getParameters(R,q.state,we,W,Y),ke=re.getProgramCacheKey(He);let je=K.programs;K.environment=R.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(R.isMeshStandardMaterial?at:ct).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",Z),je=new Map,K.programs=je);let it=je.get(ke);if(it!==void 0){if(K.currentProgram===it&&K.lightsStateVersion===Ie)return pt(R,He),it}else He.uniforms=re.getUniforms(R),R.onBeforeCompile(He,v),it=re.acquireProgram(He,ke),je.set(ke,it),K.uniforms=He.uniforms;const We=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=_e.uniform),pt(R,He),K.needsLights=Pt(R),K.lightsStateVersion=Ie,K.needsLights&&(We.ambientLightColor.value=q.state.ambient,We.lightProbe.value=q.state.probe,We.directionalLights.value=q.state.directional,We.directionalLightShadows.value=q.state.directionalShadow,We.spotLights.value=q.state.spot,We.spotLightShadows.value=q.state.spotShadow,We.rectAreaLights.value=q.state.rectArea,We.ltc_1.value=q.state.rectAreaLTC1,We.ltc_2.value=q.state.rectAreaLTC2,We.pointLights.value=q.state.point,We.pointLightShadows.value=q.state.pointShadow,We.hemisphereLights.value=q.state.hemi,We.directionalShadowMap.value=q.state.directionalShadowMap,We.directionalShadowMatrix.value=q.state.directionalShadowMatrix,We.spotShadowMap.value=q.state.spotShadowMap,We.spotLightMatrix.value=q.state.spotLightMatrix,We.spotLightMap.value=q.state.spotLightMap,We.pointShadowMap.value=q.state.pointShadowMap,We.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=it,K.uniformsList=null,it}function qe(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Qr.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function pt(R,W){const Y=ye.get(R);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.batchingColor=W.batchingColor,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.instancingMorph=W.instancingMorph,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function yt(R,W,Y,K,q){W.isScene!==!0&&(W=Re),ze.resetTextureUnits();const we=W.fog,Ie=K.isMeshStandardMaterial?W.environment:null,He=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Es,ke=(K.isMeshStandardMaterial?at:ct).get(K.envMap||Ie),je=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,it=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!Y.morphAttributes.position,ot=!!Y.morphAttributes.normal,bt=!!Y.morphAttributes.color;let Dt=wi;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const Ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Et=Ut!==void 0?Ut.length:0,Ye=ye.get(K),Ke=p.state.lights;if(Me===!0&&($===!0||R!==w)){const ut=R===w&&K.id===b;_e.setState(K,R,ut)}let st=!1;K.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Ke.state.version||Ye.outputColorSpace!==He||q.isBatchedMesh&&Ye.batching===!1||!q.isBatchedMesh&&Ye.batching===!0||q.isBatchedMesh&&Ye.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ye.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ye.instancing===!1||!q.isInstancedMesh&&Ye.instancing===!0||q.isSkinnedMesh&&Ye.skinning===!1||!q.isSkinnedMesh&&Ye.skinning===!0||q.isInstancedMesh&&Ye.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ye.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ye.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ye.instancingMorph===!1&&q.morphTexture!==null||Ye.envMap!==ke||K.fog===!0&&Ye.fog!==we||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==_e.numPlanes||Ye.numIntersection!==_e.numIntersection)||Ye.vertexAlphas!==je||Ye.vertexTangents!==it||Ye.morphTargets!==We||Ye.morphNormals!==ot||Ye.morphColors!==bt||Ye.toneMapping!==Dt||Ye.morphTargetsCount!==Et)&&(st=!0):(st=!0,Ye.__version=K.version);let lt=Ye.currentProgram;st===!0&&(lt=Le(K,W,q));let At=!1,xt=!1,rt=!1;const Ne=lt.getUniforms(),et=Ye.uniforms;if(be.useProgram(lt.program)&&(At=!0,xt=!0,rt=!0),K.id!==b&&(b=K.id,xt=!0),At||w!==R){be.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ne.setValue(A,"projectionMatrix",R.projectionMatrix),Ne.setValue(A,"viewMatrix",R.matrixWorldInverse);const Bt=Ne.map.cameraPosition;Bt!==void 0&&Bt.setValue(A,pe.setFromMatrixPosition(R.matrixWorld)),le.logarithmicDepthBuffer&&Ne.setValue(A,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ne.setValue(A,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,xt=!0,rt=!0)}if(q.isSkinnedMesh){Ne.setOptional(A,q,"bindMatrix"),Ne.setOptional(A,q,"bindMatrixInverse");const ut=q.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),Ne.setValue(A,"boneTexture",ut.boneTexture,ze))}q.isBatchedMesh&&(Ne.setOptional(A,q,"batchingTexture"),Ne.setValue(A,"batchingTexture",q._matricesTexture,ze),Ne.setOptional(A,q,"batchingIdTexture"),Ne.setValue(A,"batchingIdTexture",q._indirectTexture,ze),Ne.setOptional(A,q,"batchingColorTexture"),q._colorsTexture!==null&&Ne.setValue(A,"batchingColorTexture",q._colorsTexture,ze));const ft=Y.morphAttributes;if((ft.position!==void 0||ft.normal!==void 0||ft.color!==void 0)&&fe.update(q,Y,lt),(xt||Ye.receiveShadow!==q.receiveShadow)&&(Ye.receiveShadow=q.receiveShadow,Ne.setValue(A,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(et.envMap.value=ke,et.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(et.envMapIntensity.value=W.environmentIntensity),xt&&(Ne.setValue(A,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&St(et,rt),we&&K.fog===!0&&he.refreshFogUniforms(et,we),he.refreshMaterialUniforms(et,K,L,U,p.state.transmissionRenderTarget[R.id]),Qr.upload(A,qe(Ye),et,ze)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Qr.upload(A,qe(Ye),et,ze),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ne.setValue(A,"center",q.center),Ne.setValue(A,"modelViewMatrix",q.modelViewMatrix),Ne.setValue(A,"normalMatrix",q.normalMatrix),Ne.setValue(A,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ut=K.uniformsGroups;for(let Bt=0,Mn=ut.length;Bt<Mn;Bt++){const Wt=ut[Bt];tt.update(Wt,lt),tt.bind(Wt,lt)}}return lt}function St(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Pt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,W,Y){const K=ye.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ye.get(R.texture).__webglTexture=W,ye.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Y,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const Y=ye.get(R);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0};const Vt=A.createFramebuffer();this.setRenderTarget=function(R,W=0,Y=0){D=R,M=W,T=Y;let K=!0,q=null,we=!1,Ie=!1;if(R){const ke=ye.get(R);if(ke.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(A.FRAMEBUFFER,null),K=!1;else if(ke.__webglFramebuffer===void 0)ze.setupRenderTarget(R);else if(ke.__hasExternalTextures)ze.rebindTextures(R,ye.get(R.texture).__webglTexture,ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(ke.__boundDepthTexture!==We){if(We!==null&&ye.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(R)}}const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ie=!0);const it=ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[W])?q=it[W][Y]:q=it[W],we=!0):R.samples>0&&ze.useMultisampledRTT(R)===!1?q=ye.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?q=it[Y]:q=it,P.copy(R.viewport),F.copy(R.scissor),I=R.scissorTest}else P.copy(j).multiplyScalar(L).floor(),F.copy(ee).multiplyScalar(L).floor(),I=ge;if(Y!==0&&(q=Vt),be.bindFramebuffer(A.FRAMEBUFFER,q)&&K&&be.drawBuffers(R,q),be.viewport(P),be.scissor(F),be.setScissorTest(I),we){const ke=ye.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+W,ke.__webglTexture,Y)}else if(Ie){const ke=W;for(let je=0;je<R.textures.length;je++){const it=ye.get(R.textures[je]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+je,it.__webglTexture,Y,ke)}}else if(R!==null&&Y!==0){const ke=ye.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ke.__webglTexture,Y)}b=-1},this.readRenderTargetPixels=function(R,W,Y,K,q,we,Ie,He=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke){be.bindFramebuffer(A.FRAMEBUFFER,ke);try{const je=R.textures[He],it=je.format,We=je.type;if(!le.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-K&&Y>=0&&Y<=R.height-q&&(R.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+He),A.readPixels(W,Y,K,q,Ce.convert(it),Ce.convert(We),we))}finally{const je=D!==null?ye.get(D).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(R,W,Y,K,q,we,Ie,He=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke)if(W>=0&&W<=R.width-K&&Y>=0&&Y<=R.height-q){be.bindFramebuffer(A.FRAMEBUFFER,ke);const je=R.textures[He],it=je.format,We=je.type;if(!le.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ot),A.bufferData(A.PIXEL_PACK_BUFFER,we.byteLength,A.STREAM_READ),R.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+He),A.readPixels(W,Y,K,q,Ce.convert(it),Ce.convert(We),0);const bt=D!==null?ye.get(D).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,bt);const Dt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await du(A,Dt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ot),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,we),A.deleteBuffer(ot),A.deleteSync(Dt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,Y=0){const K=Math.pow(2,-Y),q=Math.floor(R.image.width*K),we=Math.floor(R.image.height*K),Ie=W!==null?W.x:0,He=W!==null?W.y:0;ze.setTexture2D(R,0),A.copyTexSubImage2D(A.TEXTURE_2D,Y,0,0,Ie,He,q,we),be.unbindTexture()};const kt=A.createFramebuffer(),en=A.createFramebuffer();this.copyTextureToTexture=function(R,W,Y=null,K=null,q=0,we=null){we===null&&(q!==0?(lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=q,q=0):we=0);let Ie,He,ke,je,it,We,ot,bt,Dt;const Ut=R.isCompressedTexture?R.mipmaps[we]:R.image;if(Y!==null)Ie=Y.max.x-Y.min.x,He=Y.max.y-Y.min.y,ke=Y.isBox3?Y.max.z-Y.min.z:1,je=Y.min.x,it=Y.min.y,We=Y.isBox3?Y.min.z:0;else{const ft=Math.pow(2,-q);Ie=Math.floor(Ut.width*ft),He=Math.floor(Ut.height*ft),R.isDataArrayTexture?ke=Ut.depth:R.isData3DTexture?ke=Math.floor(Ut.depth*ft):ke=1,je=0,it=0,We=0}K!==null?(ot=K.x,bt=K.y,Dt=K.z):(ot=0,bt=0,Dt=0);const Et=Ce.convert(W.format),Ye=Ce.convert(W.type);let Ke;W.isData3DTexture?(ze.setTexture3D(W,0),Ke=A.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ze.setTexture2DArray(W,0),Ke=A.TEXTURE_2D_ARRAY):(ze.setTexture2D(W,0),Ke=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,W.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,W.unpackAlignment);const st=A.getParameter(A.UNPACK_ROW_LENGTH),lt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),At=A.getParameter(A.UNPACK_SKIP_PIXELS),xt=A.getParameter(A.UNPACK_SKIP_ROWS),rt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ut.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ut.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,je),A.pixelStorei(A.UNPACK_SKIP_ROWS,it),A.pixelStorei(A.UNPACK_SKIP_IMAGES,We);const Ne=R.isDataArrayTexture||R.isData3DTexture,et=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const ft=ye.get(R),ut=ye.get(W),Bt=ye.get(ft.__renderTarget),Mn=ye.get(ut.__renderTarget);be.bindFramebuffer(A.READ_FRAMEBUFFER,Bt.__webglFramebuffer),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let Wt=0;Wt<ke;Wt++)Ne&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ye.get(R).__webglTexture,q,We+Wt),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ye.get(W).__webglTexture,we,Dt+Wt)),A.blitFramebuffer(je,it,Ie,He,ot,bt,Ie,He,A.DEPTH_BUFFER_BIT,A.NEAREST);be.bindFramebuffer(A.READ_FRAMEBUFFER,null),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||ye.has(R)){const ft=ye.get(R),ut=ye.get(W);be.bindFramebuffer(A.READ_FRAMEBUFFER,kt),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,en);for(let Bt=0;Bt<ke;Bt++)Ne?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ft.__webglTexture,q,We+Bt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ft.__webglTexture,q),et?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ut.__webglTexture,we,Dt+Bt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ut.__webglTexture,we),q!==0?A.blitFramebuffer(je,it,Ie,He,ot,bt,Ie,He,A.COLOR_BUFFER_BIT,A.NEAREST):et?A.copyTexSubImage3D(Ke,we,ot,bt,Dt+Bt,je,it,Ie,He):A.copyTexSubImage2D(Ke,we,ot,bt,je,it,Ie,He);be.bindFramebuffer(A.READ_FRAMEBUFFER,null),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else et?R.isDataTexture||R.isData3DTexture?A.texSubImage3D(Ke,we,ot,bt,Dt,Ie,He,ke,Et,Ye,Ut.data):W.isCompressedArrayTexture?A.compressedTexSubImage3D(Ke,we,ot,bt,Dt,Ie,He,ke,Et,Ut.data):A.texSubImage3D(Ke,we,ot,bt,Dt,Ie,He,ke,Et,Ye,Ut):R.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,we,ot,bt,Ie,He,Et,Ye,Ut.data):R.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,we,ot,bt,Ut.width,Ut.height,Et,Ut.data):A.texSubImage2D(A.TEXTURE_2D,we,ot,bt,Ie,He,Et,Ye,Ut);A.pixelStorei(A.UNPACK_ROW_LENGTH,st),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,lt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,At),A.pixelStorei(A.UNPACK_SKIP_ROWS,xt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,rt),we===0&&W.generateMipmaps&&A.generateMipmap(Ke),be.unbindTexture()},this.initRenderTarget=function(R){ye.get(R).__webglFramebuffer===void 0&&ze.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ze.setTextureCube(R,0):R.isData3DTexture?ze.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ze.setTexture2DArray(R,0):ze.setTexture2D(R,0),be.unbindTexture()},this.resetState=function(){M=0,T=0,D=null,be.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const Ee={POS:0,ROT:3,VEL:7,SPEED:13,RPM:14,GEAR:15,WHEELS:18,WHEEL_STRIDE:8,W_LENGTH:0,W_ANGLE:1,W_SPIN:2,W_SLIP:4,W_SLIP_TAN:5,W_GROUNDED:6,W_STEER:7,CRUSH:50,POWER:54,DAMAGE:56,FLOOD:58,DROWNED:59,HOLDS:61,WHEELS_OFF:62,SOFT_AWAKE:63,EXPLODED:64,WEAR:66},ln={BLOW:1,SNAPPED:2,GLASS:3,SPLASH:4,HORN:5,WRECK:6,CAME_OFF:7,PANEL:8,FELL:9,EXPLODED:10};function Oc(i,e){const t=i.p2p_strength_says(e,1),n=i.p2p_strength_says(e,2);return{times:i.p2p_strength_says(e,0),cap:t>0?t:null,boom:n>=0?n:null,hero:i.p2p_strength_says(e,3)>.5}}function ex(i){return{real:i.p2p_strength_says(0,4),ordinary:i.p2p_strength_says(0,5)}}const ur=17,Gt={ID:0,WHAT:1,WHICH:2,STATE:3,POS:4,ROT:7,HALF:11,VEL:14},Zt={BODIES:0,AWAKE:1,WALLS:2,WALL_COLLIDERS:3,PIECES:4,PARTS:5,BROKEN:6,FALLEN:7,PLANNED:10,PARTITIONS:11,HELD:12,THINGS:13,ARMED:14,OWN:15},tx=21;function kc(i){const e=new TextDecoder,t=[];for(let n=0;n<i.p2p_room_kind_count();n++)t.push(e.decode(new Uint8Array(i.memory.buffer,i.p2p_room_kind_name(n),i.p2p_room_kind_name_len(n))));return t}function Bc(i){const e=new TextDecoder,t=[];for(let n=0;n<i.p2p_kind_count();n++)t.push(e.decode(new Uint8Array(i.memory.buffer,i.p2p_kind_name(n),i.p2p_kind_name_len(n))));return t}function Ya(i){const e=i.p2p_rubble_stride();if(e!==ur)throw new Error(`the sim core reports a piece of rubble in ${e} floats and this page reads ${ur}: they are from different builds`);const t=new TextDecoder,n=[];for(let s=0;s<i.p2p_panel_kind_count();s++)n.push(t.decode(new Uint8Array(i.memory.buffer,i.p2p_panel_kind_name(s),i.p2p_panel_kind_name_len(s))));return n}function Ka(i){const e=new TextDecoder,t=new Map;for(let n=0;n<i.p2p_kind_count();n++){const s=e.decode(new Uint8Array(i.memory.buffer,i.p2p_kind_name(n),i.p2p_kind_name_len(n)));t.set(s,{name:s,half:[i.p2p_kind_half(n,0),i.p2p_kind_half(n,1),i.p2p_kind_half(n,2)]})}return t}const dr=13,Yt={INDEX:0,POS:1,ROT:4,SPEED:8,LOOK:9,FLAGS:10,KIND:11,CURVE:12},Ws={BRAKING:1,HORN:2,WRECK:4,LEFT:8,RIGHT:16};function nx(i){const e=i.p2p_traffic_stride();if(e!==dr)throw new Error(`the sim core reports a car of traffic in ${e} floats and this page reads ${dr}: they are from different builds`);const t=new TextDecoder,n=[];for(let s=0;s<i.p2p_vehicle_count();s++)n.push({index:s,name:t.decode(new Uint8Array(i.memory.buffer,i.p2p_vehicle_name(s),i.p2p_vehicle_name_len(s))),half:[i.p2p_vehicle_half(s,0),i.p2p_vehicle_half(s,1),i.p2p_vehicle_half(s,2)],clearance:i.p2p_vehicle_half(s,3)});return n}const Dl=i=>BigInt.asUintN(64,i).toString(16).padStart(16,"0");async function ix(i){const e=await fetch(i);if(!e.ok)throw new Error(`the sim core did not load (${e.status})`);const{instance:t}=await WebAssembly.instantiate(await e.arrayBuffer(),{});return t.exports}function sx(i){const e=(s,r)=>new TextDecoder().decode(new Uint8Array(i.memory.buffer,s,r)),t=[];for(let s=0;s<i.p2p_param_count();s++)t.push(e(i.p2p_param_name(s),i.p2p_param_name_len(s)));const n=[];for(let s=0;s<i.p2p_car_count();s++)n.push({index:s,name:e(i.p2p_car_name(s),i.p2p_car_name_len(s)),says:e(i.p2p_car_says(s),i.p2p_car_says_len(s)),param:r=>i.p2p_car_param(s,t.indexOf(r))});return n}const qs=new Float32Array(0);class Hc{constructor(e,t,n=1,s=0){this.core=e;const r=e.p2p_alloc(t.length);if(new Uint8Array(e.memory.buffer,r,t.length).set(t),this.ptr=e.p2p_new_car(n>>>0,0,r,t.length,s),e.p2p_free(r,t.length),!this.ptr)throw new Error("the sim core refused the world file");this.tickRate=e.p2p_tick_rate(),this.len=e.p2p_state_len()}tickRate;ptr;len;place(e,t,n){this.core.p2p_place(this.ptr,e,t,n)}placeAt(e,t,n,s){this.core.p2p_place_at(this.ptr,e,t,n,s)}step(e){this.core.p2p_step(this.ptr,e.steer,e.throttle,e.brake,e.handbrake)}read(e){e.set(new Float32Array(this.core.memory.buffer,this.core.p2p_state(this.ptr),this.len))}get stateLength(){return this.len}get tick(){return this.core.p2p_tick(this.ptr)}digest(){return Dl(this.core.p2p_digest(this.ptr))}drop(){this.ptr&&this.core.p2p_drop(this.ptr),this.ptr=0}movedProps(){const e=this.core.p2p_props_drain(this.ptr);return e?new Float32Array(this.core.memory.buffer,this.core.p2p_props_ptr(this.ptr),e*8).slice():qs}traffic(){const e=this.core.p2p_traffic_drain(this.ptr);return{count:e,cars:e?new Float32Array(this.core.memory.buffer,this.core.p2p_traffic_ptr(this.ptr),e*dr):qs}}setSoft(e){this.core.p2p_soft_set(this.ptr,e?1:0)}setStrength(e){this.core.p2p_strength_set(this.ptr,Math.max(0,Math.min(100,Math.round(e))))}softBuilt(){const e=this.core.p2p_soft_drain(this.ptr);if(!e)return null;const t=new Float32Array(e*3),n=new Int16Array(e);for(let s=0;s<e;s++){for(let r=0;r<3;r++)t[s*3+r]=this.core.p2p_soft_built(this.ptr,s,r);n[s]=this.core.p2p_soft_built(this.ptr,s,3)}return{rest:t,kind:n}}softNow(){const e=this.core.p2p_soft_drain(this.ptr),t=this.core.p2p_loose_count(this.ptr);return{nodes:e?new Float32Array(this.core.memory.buffer,this.core.p2p_soft_ptr(this.ptr),e*3).slice():qs,loose:t?new Float32Array(this.core.memory.buffer,this.core.p2p_loose_ptr(this.ptr),t*8).slice():qs}}get panelCount(){return this.core.p2p_panel_count(this.ptr)}panel(e){const t=this.core.p2p_panel(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,t,11);return{index:e,x0:n[0],z0:n[1],x1:n[2],z1:n[3],foot:n[4],holeTop:n[5],top:n[6],building:n[7],kind:n[8],state:n[9],role:n[10]}}rubble(){const e=this.core.p2p_rubble_drain(this.ptr);return e?new Float32Array(this.core.memory.buffer,this.core.p2p_rubble_ptr(this.ptr),e*ur).slice():qs}inside(e){const t=this.core.p2p_inside(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,this.core.p2p_inside_ptr(this.ptr),t),s={arche:n[0],made:n[5]===1,held:n[6]===1,walls:n[7],rooms:[],parts:[],doors:[],items:[]};let r=8;for(let a=0;a<n[1];a++,r+=9)s.rooms.push({quad:[[n[r],n[r+1]],[n[r+2],n[r+3]],[n[r+4],n[r+5]],[n[r+6],n[r+7]]],kind:n[r+8]});for(let a=0;a<n[2];a++,r+=5)s.parts.push({ax:n[r],az:n[r+1],bx:n[r+2],bz:n[r+3],kind:n[r+4]});for(let a=0;a<n[3];a++,r+=1)s.doors.push(n[r]);for(let a=0;a<n[4];a++,r+=6)s.items.push({kind:n[r],x:n[r+1],y:n[r+2],z:n[r+3],yaw:n[r+4],state:n[r+5]});return s}face(e){const t=this.core.p2p_face(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,this.core.p2p_face_ptr(this.ptr),t),s={arche:n[0],cls:n[1],front:n[3]?[n[4],n[5],n[6],n[7]]:null,walls:[]};for(let r=0,a=8;r<n[2];r++,a+=tx)s.walls.push({x0:n[a],z0:n[a+1],x1:n[a+2],z1:n[a+3],role:n[a+4],first:n[a+5],count:n[a+6],bay:n[a+7],pier:n[a+8],every:n[a+9],kind:n[a+10],door:n[a+11],doorWhat:n[a+12],d0:n[a+13],d1:n[a+14],l0:n[a+15],l1:n[a+16],door2:n[a+17],door2What:n[a+18],e0:n[a+19],e1:n[a+20]});return s}fallen(e){const t=this.core.p2p_fallen(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,this.core.p2p_fallen_ptr(this.ptr),t),s={mid:[n[0],n[1]],axis:[n[2],n[3]],shrink:n[4],parts:[]};for(let r=6;r+8<=t;r+=8)s.parts.push({id:n[r],x:n[r+1],y:n[r+2],z:n[r+3],yaw:n[r+4],hx:n[r+5],hy:n[r+6],hz:n[r+7]});return s}get propsBase(){return this.core.p2p_props_base(this.ptr)}propOrigin(e){const t=this.core.p2p_prop_origin(this.ptr,e,0);return t<0?null:{b:t,i:this.core.p2p_prop_origin(this.ptr,e,1),kind:this.core.p2p_prop_origin(this.ptr,e,2)}}count(e){return this.core.p2p_count(this.ptr,e)}wantTraffic(e){this.core.p2p_traffic_want(this.ptr,e)}events(){const e=this.core.p2p_events_drain(this.ptr);if(!e)return[];const t=new Float32Array(this.core.memory.buffer,this.core.p2p_events_ptr(this.ptr),e*3),n=[];for(let s=0;s<e;s++)n.push({what:t[s*3],a:t[s*3+1],b:t[s*3+2]});return n}params(){const e=this.core,t=new TextDecoder,n=[],s=(r,a)=>t.decode(new Uint8Array(e.memory.buffer,r,a));for(let r=0;r<e.p2p_param_count();r++)n.push({index:r,name:s(e.p2p_param_name(r),e.p2p_param_name_len(r)),doc:s(e.p2p_param_doc(r),e.p2p_param_doc_len(r)),default:e.p2p_param_default(r)});return n}param(e){return this.core.p2p_param_get(this.ptr,e)}setParam(e,t){this.core.p2p_param_set(this.ptr,e,t)}}let uf="mid";function rx(i){uf=i}function Il(){return uf}const yi=new k(-.72,.46,.52).normalize(),Gc=new nt(-yi.x/yi.y,-yi.z/yi.y),Ms=i=>{const e=i.toFixed(5);return e.includes(".")?e:`${e}.0`},df={far:1200},Ki=`
#ifndef P2P_LOOK
#define P2P_LOOK
const vec3 P2P_SUN = vec3(${Ms(yi.x)}, ${Ms(yi.y)}, ${Ms(yi.z)});
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
`;let Vc=!1;function ax(){if(Vc)return;Vc=!0;const i=mt;i.fog_pars_vertex=`
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
  ${Ki}
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
		return mix( 1.0, shadow, shadowIntensity * ( 1.0 - smoothstep( 0.80, 0.98, max( p2pEdge.x, p2pEdge.y ) ) ) );${e.slice(t+43)}`}let ol=null;function ox(i){ol=i}function Hi(){if(!ol)throw new Error("the ground is built before what stands on it: buildGround first");return ol}const pf=128;let Hr=null;function lx(i){if(Hr)return Hr;const[e,t,n,s]=i.box,r=2048,a=r/(n-e),o=r/(s-t),l=document.createElement("canvas");l.width=r,l.height=r;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#000",c.fillRect(0,0,r,r),c.globalCompositeOperation="lighten";const h=g=>(g-e)*a,u=g=>(g-t)*o,d=g=>`rgb(${Math.round(Math.min(1,g/pf)*255)},0,0)`;for(const g of i.buildings){const x=g.r,p=g.y1-g.y0;if(x.length<4||p<2)continue;let y=0;for(let M=0;M+1<x.length;M++)y+=x[M][0]*x[M+1][1]-x[M+1][0]*x[M][1];const _=y>0?1:-1,v=Gc.x*p,E=Gc.y*p;for(let M=0;M+1<x.length;M++){const[T,D]=x[M],[b,w]=x[M+1],P=Math.hypot(b-T,w-D);if(P<.05)continue;const F=(w-D)/P*_,I=-(b-T)/P*_,H=F*v+I*E;if(H<=.5)continue;const z=c.createLinearGradient(h(T),u(D),h(T+F*H),u(D+I*H));z.addColorStop(0,d(p)),z.addColorStop(1,"#000"),c.fillStyle=z,c.beginPath(),c.moveTo(h(T),u(D)),c.lineTo(h(b),u(w)),c.lineTo(h(b+v),u(w+E)),c.lineTo(h(T+v),u(D+E)),c.closePath(),c.fill()}c.fillStyle=d(p),c.beginPath(),x.forEach(([M,T],D)=>{D===0?c.moveTo(h(M),u(T)):c.lineTo(h(M),u(T))}),c.closePath(),c.fill()}c.fillStyle="rgb(0,255,0)";for(const g of i.buildings)g.r.length<4||(c.beginPath(),g.r.forEach(([x,p],y)=>{y===0?c.moveTo(h(x),u(p)):c.lineTo(h(x),u(p))}),c.closePath(),c.fill());const f=c.getImageData(0,0,r,r);cx(f.data,r),c.putImageData(f,0,0);const m=new Vu(l);return m.flipY=!1,m.colorSpace=Vn,m.generateMipmaps=!0,m.minFilter=ai,m.magFilter=Sn,m.anisotropy=4,Hr={texture:m,box:new Mt(e,t,1/(n-e),1/(s-t))},Hr}function cx(i,e){let s=new Float32Array(e*e),r=new Float32Array(e*e);for(let o=0;o<e*e;o++)s[o]=i[o*4+1];const a=(o,l,c,h)=>{for(let u=0;u<e;u++){const d=u*h;let f=0;for(let m=-2;m<=2;m++)f+=o[d+Math.min(e-1,Math.max(0,m))*c];for(let m=0;m<e;m++)l[d+m*c]=f/5,f+=o[d+Math.min(e-1,m+2+1)*c]-o[d+Math.max(0,m-2)*c]}};for(let o=0;o<3;o++)a(s,r,1,e),[s,r]=[r,s];for(let o=0;o<3;o++)a(s,r,e,1),[s,r]=[r,s];for(let o=0;o<e*e;o++)i[o*4+1]=Math.max(i[o*4+1],s[o])}let Gr=null;function hx(i){if(Gr)return Gr;let e=1/0,t=1/0,n=-1/0,s=-1/0;for(const f of i.ways??[])if(f.k==="tunnel")for(const m of f.p)e=Math.min(e,m[0]-20),t=Math.min(t,m[2]-20),n=Math.max(n,m[0]+20),s=Math.max(s,m[2]+20);e===1/0&&(e=0,t=0,n=1,s=1);const r=Math.max(1,Math.ceil((n-e)/1.5)),a=Math.max(1,Math.ceil((s-t)/1.5)),o=r/(n-e),l=a/(s-t),c=(i.ground.min??0)-10,h=new Uint8Array(r*a*4),u=f=>Math.max(1,Math.min(255,Math.round((f-c)*2)));for(const f of i.ways??[]){if(f.k!=="tunnel")continue;const m=f.clear??5.6,g=f.half+.6;for(let x=0;x+1<f.p.length;x++){const p=f.p[x],y=f.p[x+1],_=y[0]-p[0],v=y[2]-p[2],E=_*_+v*v||1,M=Math.floor((Math.min(p[0],y[0])-g-e)*o),T=Math.ceil((Math.max(p[0],y[0])+g-e)*o),D=Math.floor((Math.min(p[2],y[2])-g-t)*l),b=Math.ceil((Math.max(p[2],y[2])+g-t)*l);for(let w=Math.max(0,D);w<=Math.min(a-1,b);w++)for(let P=Math.max(0,M);P<=Math.min(r-1,T);P++){const F=e+(P+.5)/o,I=t+(w+.5)/l,H=Math.min(1,Math.max(0,((F-p[0])*_+(I-p[2])*v)/E));if(Math.hypot(p[0]+_*H-F,p[2]+v*H-I)>g)continue;const z=p[1]+(y[1]-p[1])*H,N=(w*r+P)*4;h[N]=u(z),h[N+1]=Math.max(h[N+1],u(z+m)),h[N+3]=255}}}const d=new qi(h,r,a,_n);return d.minFilter=d.magFilter=fn,d.generateMipmaps=!1,d.needsUpdate=!0,Gr={texture:d,box:new Mt(e,t,o/r,l/a),base:c},Gr}function li(i,e,t){const n=lx(e),s=hx(e);return i.onBeforeCompile=r=>{r.uniforms.uShade={value:n.texture},r.uniforms.uShadeBox={value:n.box},r.uniforms.uTubes={value:s.texture},r.uniforms.uTubesBox={value:s.box},Object.assign(r.uniforms,t.uniforms??{}),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorld;
${t.vertexPars??""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
${t.vertex??""}`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWorld;
        uniform sampler2D uShade; uniform vec4 uShadeBox;
        uniform sampler2D uTubes; uniform vec4 uTubesBox;
        ${Ki}
        // x: metres of shade standing over the ground at (x, z); y: how closed in by walls, 0 to 1
        vec2 p2pShade( vec2 xz ) {
          vec2 uv = ( xz - uShadeBox.xy ) * uShadeBox.zw;
          vec4 t = texture2D( uShade, uv );
          // past the map's edge there is nothing to cast shade: do not smear the last row outward
          float inside = step( 0.0, uv.x ) * step( uv.x, 1.0 ) * step( 0.0, uv.y ) * step( uv.y, 1.0 );
          return vec2( t.r * ${Ms(pf)}, t.g ) * inside;
        }
        ${t.fragmentPars??""}`).replace("#include <color_fragment>",`#include <color_fragment>
        ${t.tube===!1?"":`{
          // inside a tunnel's tube, over its floor and under its roof: not drawn (the hill's ground at a portal)
          vec2 tuv = ( vWorld.xz - uTubesBox.xy ) * uTubesBox.zw;
          vec4 tb = texture2D( uTubes, tuv );
          if ( tb.a > 0.5 && tuv.x > 0.0 && tuv.x < 1.0 && tuv.y > 0.0 && tuv.y < 1.0 ) {
            float floorY = tb.r * 127.5 + ${Ms(s.base)}, roofY = tb.g * 127.5 + ${Ms(s.base)};
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
        float p2pLit = clamp( dot( reflectedLight.directDiffuse, vec3( 0.3333 ) ) / max( dot( diffuseColor.rgb, vec3( 0.3333 ) ), 0.02 ) / 1.15, 0.0, 1.0 );`).replace("#include <envmap_fragment>",t.final??"")},i.customProgramCacheKey=()=>t.key,i}const fx=i=>i>=0&&i<=6,Hn=4,ux=[{size:[.62,.42,.05],color:5988195},{size:[.6,.46,.52],color:2895152},{size:[.24,.19,.17],color:1118740},{size:[.38,.38,.05],color:1381655,round:!0},{size:[1.3,.22,.32],color:1776670},{size:[.5,.75,.55],color:2762276},{size:[.5,.75,.55],color:2762276},{size:[.7,.24,.5],color:1579291}];class dx{constructor(e,t,n,s,r,a){this.body=e,this.group=n,this.world=s,this.wheel=r,this.wheelMaterial=a;const o=e.geometry.getAttribute("position");this.base=Float32Array.from(o.array),this.nodes0=t.rest;const l=t.kind.length,c=o.count;this.ties=new Int16Array(c*Hn).fill(-1),this.weights=new Float32Array(c*Hn),this.panelOf=new Uint8Array(c);const h=[];for(let f=0;f<l;f++)fx(t.kind[f])&&h.push(f);const u=(f,m,g,x)=>{const p=t.rest[f*3]-m,y=t.rest[f*3+1]-g,_=t.rest[f*3+2]-x;return p*p+y*y+_*_};for(let f=0;f<c;f++){const m=this.base[f*3],g=this.base[f*3+1],x=this.base[f*3+2];let p=h[0],y=1/0;for(const M of h){const T=u(M,m,g,x);T<y&&(y=T,p=M)}const _=t.kind[p];this.panelOf[f]=_;const v=h.filter(M=>t.kind[M]===_).map(M=>[M,u(M,m,g,x)]).sort((M,T)=>M[1]-T[1]).slice(0,Hn);let E=0;for(const[M,[T,D]]of v.entries()){const b=1/(D+.01);this.ties[f*Hn+M]=T,this.weights[f*Hn+M]=b,E+=b}for(let M=0;M<Hn;M++)this.weights[f*Hn+M]/=E||1}const d=e.geometry.getIndex();for(let f=1;f<=6;f++){const m=[];for(let y=0;y<d.count;y+=3){const _=d.getX(y),v=d.getX(y+1),E=d.getX(y+2);this.panelOf[_]===f&&this.panelOf[v]===f&&this.panelOf[E]===f&&m.push(_,v,E)}if(!m.length)continue;const g=new k;let x=0;for(let y=0;y<l;y++)t.kind[y]===f&&(g.x+=t.rest[y*3],g.y+=t.rest[y*3+1],g.z+=t.rest[y*3+2],x++);g.divideScalar(Math.max(1,x));const p=new Ot;for(const y of Object.keys(e.geometry.attributes)){const _=e.geometry.getAttribute(y),v=_.itemSize,E=new Float32Array(m.length*v);m.forEach((M,T)=>{for(let D=0;D<v;D++)E[T*v+D]=_.getComponent(M,D)-(y==="position"?g.getComponent(D):0)}),p.setAttribute(y,new Ct(E,v))}p.computeVertexNormals(),this.pieces.set(f,{geo:p,centre:g})}this.partBase=[...t.kind].findIndex(f=>f>=20),ux.forEach((f,m)=>{const g=f.round?new Rl(f.size[0]/2,.025,6,16):new Ti(...f.size),x=new It(g,new Fs({color:f.color,roughness:.6,metalness:m===1||m===0?.6:.1}));f.round&&(x.rotation.x=-.35),x.castShadow=!1,n.add(x),this.parts.push(x)}),this.apply(t.rest,0)}ties;weights;panelOf;base;nodes0;parts=[];partBase;pieces=new Map;loose=new Map;apply(e,t,n){const s=this.body.geometry.getAttribute("position"),r=s.array;for(let o=0;o<s.count;o++){const l=this.panelOf[o];if(l&&(t>>2*l&3)===2){const d=this.ties[o*Hn];r[o*3]=e[d*3],r[o*3+1]=e[d*3+1],r[o*3+2]=e[d*3+2];continue}let c=this.base[o*3],h=this.base[o*3+1],u=this.base[o*3+2];for(let d=0;d<Hn;d++){const f=this.ties[o*Hn+d],m=this.weights[o*Hn+d];f<0||(c+=(e[f*3]-this.nodes0[f*3])*m,h+=(e[f*3+1]-this.nodes0[f*3+1])*m,u+=(e[f*3+2]-this.nodes0[f*3+2])*m)}r[o*3]=c,r[o*3+1]=h,r[o*3+2]=u}s.needsUpdate=!0,this.body.geometry.computeVertexNormals(),this.body.geometry.computeBoundingSphere(),this.parts.forEach((o,l)=>{const c=this.partBase+l;o.position.set(e[c*3],e[c*3+1],e[c*3+2])});const a=new Set;for(let o=0;n&&o+7<n.length;o+=8){const l=n[o];a.add(l);let c=this.loose.get(l);if(!c){if(l>=10)c=new It(this.wheel,this.wheelMaterial);else{const h=this.pieces.get(l);if(!h)continue;c=new It(h.geo,this.body.material)}c.castShadow=!0,c.name=l>=10?"a wheel off the car":"a panel off the car",this.world.add(c),this.loose.set(l,c)}c.position.set(n[o+1],n[o+2],n[o+3]),c.quaternion.set(n[o+4],n[o+5],n[o+6],n[o+7])}for(const[o,l]of this.loose)a.has(o)||(this.world.remove(l),this.loose.delete(o))}dispose(){for(const t of this.loose.values())this.world.remove(t);this.loose.clear();for(const t of this.parts)this.group.remove(t),t.geometry.dispose();for(const t of this.pieces.values())t.geo.dispose();const e=this.body.geometry.getAttribute("position");e.array.set(this.base),e.needsUpdate=!0,this.body.geometry.computeVertexNormals()}}const gi=128,px=2.2,ii=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Ul={name:"Sorrento",paint:10227467,screenFoot:-.86,screenHead:-.08,backHead:.72,backFoot:1.68,nose:.13,belt:.38,roof:.845},Wc=-.17,mf=.085,qc=1.25,mx=`
  attribute vec4 carA; attribute vec4 carB; varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN;
  uniform vec4 uCrush; uniform vec4 uWear; uniform float uWide; uniform float uSoft; varying float vDent; varying float vWear;`,gx=`
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
    transformed.z += uCrush.x * nose * uneven * ${qc.toFixed(2)} * shove;
    transformed.z -= uCrush.y * tail * uneven * ${qc.toFixed(2)} * shove;
    // a side gives less than an end: the wheels stay where the sim has them, and the skin must not go in past them
    transformed.x += min(0.2, uCrush.z * 0.5) * left * uneven * shove;
    transformed.x -= min(0.2, uCrush.w * 0.5) * right * uneven * shove;
    // a crushed bonnet or boot lid buckles upward
    transformed.y += (uCrush.x * nose * nose + uCrush.y * tail * tail) * 0.35 * lump * step(0.12, position.y) * shove;
    // not in proportion: a light blow must show, and a heavy one has nowhere further to go
    vDent = pow(clamp((uCrush.x * nose + uCrush.y * tail + uCrush.z * left + uCrush.w * right) * 4.0, 0.0, 1.0), 0.65);
    // the paint wears by the deeper of the two: how far the metal went in, and how hard it was hit
    vec4 worn = max(uCrush, uWear);
    vWear = pow(clamp((worn.x * nose + worn.y * tail + worn.z * left + worn.w * right) * 4.0, 0.0, 1.0), 0.65);
  }`,xx=`
  uniform float uBrake; uniform float uReverse; uniform vec4 uCrush; uniform vec4 uWear; uniform float uBurnt; varying float vDent; varying float vWear;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN;
  ${Ki}`,vx=i=>{const e=i.screenFoot,t=i.screenHead,n=i.backHead,s=i.backFoot,r=(i.screenHead+i.backHead)/2+.02,a=Math.min(i.glassTo??99,i.backFoot-.42),o=i.belt;return`
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
    float lip = p2pLine(vCarB.z - ${mf.toFixed(3)} + 0.02, 0.022, fwidth(vCarB.z)) * side * step(q.y, 0.3);
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
    float worn = vWear * (0.2 + 0.8 * p2pFbm(q.xz * 9.0 + q.y * 13.0)) + vWear * 0.2 * p2pNoise(vec2(q.z * 3.0 + q.x * 2.0, q.y * 70.0));
    carScuff = smoothstep(0.06, 0.38, worn);
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.5 + vec3(0.03), carScuff);
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.13, 0.13, 0.135), smoothstep(0.5, 0.62, worn));
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.34, 0.35, 0.36), smoothstep(0.72, 0.84, worn));
    // cracked glass: a web from where the blow came through, on the panes of the side that took it
    {
      vec4 hit = max(uCrush, uWear);
      float pane = side > 0.5 ? (q.x < 0.0 ? hit.z : hit.w) : (q.z < 0.3 ? hit.x : hit.y);
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
    // burnt out (the car blew up): paint, trim and glass alike are soot over scaled metal, and no lamp is lit
    {
      float soot = 0.55 + 0.45 * p2pFbm(q.xz * 5.0 + q.y * 7.0);
      vec3 scale = mix(vec3(0.035, 0.031, 0.029), vec3(0.2, 0.11, 0.06), smoothstep(0.45, 0.85, p2pFbm(q.zy * 11.0 + q.x * 3.0)));
      diffuseColor.rgb = mix(diffuseColor.rgb, scale * soot, uBurnt);
      carLamp *= 1.0 - uBurnt;
      carGlass *= 1.0 - uBurnt; carTrim *= 1.0 - uBurnt;
      carScuff = max(carScuff, uBurnt);
    }
  }`},_x=`
  roughnessFactor = mix(mix(roughnessFactor, 0.62, carTrim), 0.05, carGlass);
  metalnessFactor = mix(mix(metalnessFactor, 0.0, carTrim), 0.85, carGlass);
  roughnessFactor = mix(roughnessFactor, 0.85, max(carScuff, carGlass * carCrack));
  metalnessFactor = mix(metalnessFactor, 0.15, carGlass * carCrack);`,yx=`
  normal = normalize(mix(normal, normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition))), vDent * 0.9));`,Mx="varying vec3 vLocal; uniform float uBurnt;",wx=`
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
    // a wheel of a car that blew up is burnt with it
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.02, 0.018, 0.017), uBurnt * 0.9);
    wheelMetal *= 1.0 - uBurnt * 0.8;
  }`,bx=`
  roughnessFactor = mix(0.9, 0.28, wheelMetal);
  metalnessFactor = mix(0.0, 0.9, wheelMetal);`;function Xc(i,e,t,n,s,r,a,o,l="",c=""){return i.onBeforeCompile=h=>{Object.assign(h.uniforms,t),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
${n}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${s}`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
${r}`).replace("#include <color_fragment>",`#include <color_fragment>
${a}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${o}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${l}`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
${c}`)},i.customProgramCacheKey=()=>e,i}class Sx{constructor(e,t=null,n=Ul){this.shape=e,this.look=n;const s=(e.axleFront+e.axleRear)/2+(e.overhang??.85),r=e.halfTrack+.12,a=Xc(new tf({color:n.paint,metalness:.35,roughness:.34,clearcoat:1,clearcoatRoughness:.06,envMap:t,envMapIntensity:.75}),`p2p-car-body-${n.name}`,this.lamps,mx,gx,xx,vx(n),_x,"totalEmissiveRadiance += carLamp;",yx);this.lamps.uWide.value=r,this.paint=a;const o=new It(this.body(s,r),a);o.castShadow=!0,o.receiveShadow=!0,this.group.add(o),this.bodyMesh=o;const l=Xc(new Fs({color:16777215,envMap:t,envMapIntensity:.6}),"p2p-car-wheel",{uRadius:{value:e.wheelRadius},uBurnt:this.lamps.uBurnt},"varying vec3 vLocal;","vLocal = position;",`uniform float uRadius; ${Mx}`,wx,bx),c=e.wheelRadius,h=.12,u=[[0,.02],[c*.64,.105],[c*.72,h],[c*.93,h],[c,h*.72],[c,-h*.72],[c*.93,-h],[c*.72,-h],[c*.64,-.105],[0,-.02]].map(([y,_])=>new nt(y,_)),d=new ca(u,20).rotateZ(-Math.PI/2);{const y=d.getAttribute("position"),_=d.index,v=new k,E=new k,M=new k;for(let T=0;T<_.count;T+=3)if(v.fromBufferAttribute(y,_.getX(T)),E.fromBufferAttribute(y,_.getX(T+1)),M.fromBufferAttribute(y,_.getX(T+2)),E.clone().sub(v).cross(M.clone().sub(v)).dot(v.add(E).add(M))<0){const b=_.getX(T+1);_.setX(T+1,_.getX(T+2)),_.setX(T+2,b)}}d.computeVertexNormals(),this.tyre=d,this.tyreMaterial=l;for(let y=0;y<4;y++){const _=new Qt,v=new It(d,l);v.castShadow=!0,_.add(v),this.group.add(_),this.wheels.push(_),this.spinners.push(v)}const f=new af,m=new Ai(1,1);f.setIndex(m.index),f.setAttribute("position",m.getAttribute("position")),f.setAttribute("uv",m.getAttribute("uv"));const g=new Float32Array(gi*3),x=new Float32Array(gi*3).fill(1);f.setAttribute("aAt",new Kn(g,3)),f.setAttribute("aLife",new Kn(x,3)),f.instanceCount=gi;const p=new It(f,new Cn({transparent:!0,depthWrite:!1,vertexShader:`
        attribute vec3 aAt; attribute vec3 aLife; varying vec2 vUv; varying vec3 vLife;
        void main() {
          vUv = uv; vLife = aLife;
          float size = (0.35 + 1.9 * aLife.x) * (0.8 + 0.4 * aLife.y) * step(aLife.x, 0.999) * (1.0 + 0.7 * step(1.5, aLife.z));
          vec4 mv = viewMatrix * vec4(aAt, 1.0);
          mv.xy += position.xy * size;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec2 vUv; varying vec3 vLife;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          float fire = step(1.5, vLife.z), black = min(vLife.z, 1.0);
          float a = (1.0 - smoothstep(0.25, 1.0, r)) * smoothstep(0.0, 0.08, vLife.x) * (1.0 - vLife.x) * mix(mix(0.32, 0.6, black), 0.95, fire);
          if (a < 0.004) discard;
          // what burns is white-hot, then orange, then the black smoke it leaves
          vec3 flame = mix(mix(vec3(3.4, 2.5, 1.0), vec3(2.3, 0.7, 0.08), smoothstep(0.03, 0.4, vLife.x)), vec3(0.035), smoothstep(0.4, 0.8, vLife.x));
          gl_FragColor = vec4(mix(mix(vec3(0.74, 0.75, 0.76), vec3(0.05), black), flame, fire), a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}));p.frustumCulled=!1,p.name="smoke",this.loose.add(p),this.puffs={life:x,at:g,vel:new Float32Array(gi*3),geo:f,next:0,owed:0}}group=new Qt;wheels=[];spinners=[];loose=new Qt;lamps={uBrake:{value:0},uReverse:{value:0},uCrush:{value:new Mt},uWear:{value:new Mt},uBurnt:{value:0},uWide:{value:1},uSoft:{value:0}};blown=!1;burnt=0;paint;bodyMesh;tyre;tyreMaterial;skin=null;puffs;nose=new k;was=new k;patch=new k;rubber=[0,0,0,0];smoke(e,t){const n=e[Ee.POWER],s=this.puffs,r=Math.min(1,Math.max(0,(.93-n)/.5));this.nose.set(0,.42,-this.shape.axleFront+.25).applyQuaternion(this.group.quaternion).add(this.group.position);const a=t>0?(this.nose.x-this.was.x)/t:0,o=t>0?(this.nose.y-this.was.y)/t:0,l=t>0?(this.nose.z-this.was.z)/t:0,c=Math.hypot(a,o,l)>120;this.was.copy(this.nose);for(let f=0;f<gi;f++){if(s.life[f*3]>=1)continue;s.life[f*3]=c?1:Math.min(1,s.life[f*3]+t/px);const m=Math.exp(-2.5*t);s.vel[f*3]=s.vel[f*3]*m,s.vel[f*3+2]=s.vel[f*3+2]*m,s.at[f*3]=s.at[f*3]+s.vel[f*3]*t,s.at[f*3+1]=s.at[f*3+1]+s.vel[f*3+1]*t,s.at[f*3+2]=s.at[f*3+2]+s.vel[f*3+2]*t}const h=(f,m,g,x,p,y)=>{const _=s.next;s.next=(s.next+1)%gi,s.at[_*3]=f+(Math.random()-.5)*.5,s.at[_*3+1]=m,s.at[_*3+2]=g+(Math.random()-.5)*.5,s.vel[_*3]=a*x+(Math.random()-.5)*.6,s.vel[_*3+1]=p*(.6+Math.random()*.6),s.vel[_*3+2]=l*x+(Math.random()-.5)*.6,s.life[_*3]=.001,s.life[_*3+1]=Math.random(),s.life[_*3+2]=y};s.owed=r>0&&!c?s.owed+t*(2+16*r):0;const u=this.blown?this.group.position:this.nose,d=this.blown?.5:0;for(;s.owed>=1;){s.owed-=1;const f=this.blown&&Math.random()<.4;h(u.x+(f?(Math.random()-.5)*1.6:0),u.y+d*Math.random(),u.z+(f?(Math.random()-.5)*1.6:0),.35,f?2.4:1.5,f?2:Math.min(1,r*1.6)*(.7+.3*Math.random()))}for(let f=0;f<4;f++){const m=Ee.WHEELS+f*Ee.WHEEL_STRIDE,g=Math.abs(e[m+Ee.W_SPIN]*this.shape.wheelRadius-e[Ee.SPEED]),x=Math.abs(e[m+Ee.W_SLIP_TAN])>.3?Math.abs(e[m+Ee.W_SLIP_TAN])*Math.abs(e[Ee.SPEED]):0,p=e[m+Ee.W_GROUNDED]>.5?Math.max(g-4,x-4):0;if(this.rubber[f]=p>0&&!c?this.rubber[f]+t*Math.min(22,4+p*1.6):0,!(this.rubber[f]<1))for(this.patch.set(f%2===0?-this.shape.halfTrack:this.shape.halfTrack,-e[m+Ee.W_LENGTH]-this.shape.wheelRadius+.1,f<2?-this.shape.axleFront:this.shape.axleRear).applyQuaternion(this.group.quaternion).add(this.group.position);this.rubber[f]>=1;)this.rubber[f]=this.rubber[f]-1,h(this.patch.x,this.patch.y,this.patch.z,.1,.9,0)}s.geo.getAttribute("aAt").needsUpdate=!0,s.geo.getAttribute("aLife").needsUpdate=!0}body(e,t){const n=this.shape,s=this.look,r=s.screenFoot,a=s.screenHead,o=s.backHead,l=s.backFoot,c=[];for(let P=-e;P<=e+1e-6;P+=e/18)c.push(P);const h=[],u=[],d=[],f=[],m=19,g=P=>Math.min(Math.abs(P+n.axleFront),Math.abs(P-n.axleRear)),x=P=>{const F=P/e,I=Math.abs(F),H=t*(.8+.2*Math.sqrt(Math.max(0,1-Math.pow(I,5))))*(1-.1*ii(.82,1,I)),z=P<0?s.nose+(s.belt-s.nose)*ii(-e,r,P):s.belt+.03*ii(.3,.75,F)-.07*ii(.86,1,F),N=P<a?ii(r,a,P):P<o?1:1-ii(o,l,P),U=.035*(1-ii(.85,1,I)),L=z+U+(s.roof-z-U)*N*(1-.04*ii(o-.6,o,P)),G=N>.02?1:0,B=H*(.93-.2*Math.min(1,N*1.6)),j=n.wheelRadius+mf,ee=g(P),ge=-.37+.1*ii(.86,1,I),de=ee<j?Math.max(ge,Wc+Math.sqrt(j*j-ee*ee)):ge,Me=de+.085,$=Math.max(Me+.04,z-.26),Q=[[H*.8,de,0,1],[H*.965,Me,0,1],[H,$,0,0],[H*.99,z-.07,0,0],[H*.93,z,0,0],[B+(H*.93-B)*.42,z+(L-z)*.5,.5,0],[B,L-(L-z)*.06,.94,0],[B*.72,L,1,0],[B*.36,L+U*.5,1,0]],pe=[],Se=[],Re=[0,0,0,0,0,0,1,.5,.15];pe.push([0,de]),Se.push([0,0,G,1]),Q.forEach(([ie,A,xe,ce],le)=>{pe.push([ie,A]),Se.push([xe,Re[le],G,ce])}),pe.push([0,L+U*.6]),Se.push([1,0,G,0]);for(let ie=Q.length-1;ie>=0;ie--){const[A,xe,ce,le]=Q[ie];pe.push([-A,xe]),Se.push([ce,Re[ie],G,le])}const $e=[(P-r)/(a-r),(P-o)/(l-o),0,e];return{p:pe,a:Se,b:$e}},p=c.map(x);p.forEach((P,F)=>{const I=c[F];P.p.forEach(([H,z],N)=>{h.push(H,z,I),u.push(...P.a[N]),d.push(P.b[0],P.b[1],Math.hypot(g(I),z-Wc)-n.wheelRadius,P.b[3])})});const y=(P,F)=>P*(m+1)+(F%(m+1)+(m+1))%(m+1);if(p[0].p.length!==m+1)throw new Error("the car body ring has changed its count");const _=new k,v=new k,E=new k,M=new k,T=new k,D=(P,F,I,H,z,N)=>{v.fromArray(h,P*3),E.fromArray(h,F*3),M.fromArray(h,I*3),T.subVectors(E,v).cross(M.clone().sub(v)),!(T.lengthSq()<1e-12)&&(_.copy(v).add(E).add(M).multiplyScalar(1/3),T.dot(_.sub(new k(H,z,N)))>=0?f.push(P,F,I):f.push(P,I,F))};for(let P=0;P+1<p.length;P++){const F=(c[P]+c[P+1])/2;for(let I=0;I<=m;I++){const H=y(P,I),z=y(P,I+1),N=y(P+1,I+1),U=y(P+1,I);D(H,z,N,0,.1,F),D(H,N,U,0,.1,F)}}for(const P of[0,p.length-1]){const F=c[P],I=P===0?F+1:F-1,H=h.length/3,z=p[P].p.map(L=>L[1]),N=(Math.min(...z)+Math.max(...z))/2;h.push(0,N,F),u.push(0,0,0,0),d.push(9,9,9,e);const U=h.length/3;p[P].p.forEach(([L,G],B)=>{h.push(L,G,F),u.push(0,0,0,p[P].a[B][3]),d.push(9,9,9,e)});for(let L=0;L<=m;L++)D(H,U+L,U+(L+1)%(m+1),0,N,I)}const b=P=>{const F=P*(t+.07),I=s.belt+.04,H=r+.42,z=.085,N=.05,U=.07,L=h.length/3;for(const B of[-1,1])for(const j of[-1,1])for(const ee of[-1,1])h.push(F+B*z,I+j*N,H+ee*U*(j>0?.7:1)),u.push(0,0,0,1),d.push(9,9,9,e);const G=(B,j,ee,ge)=>{D(L+B,L+j,L+ee,F,I,H),D(L+B,L+ee,L+ge,F,I,H)};G(0,1,3,2),G(4,5,7,6),G(0,1,5,4),G(2,3,7,6),G(0,2,6,4),G(1,3,7,5)};b(-1),b(1);const w=new Ot;return w.setAttribute("position",new wt(h,3)),w.setAttribute("carA",new wt(u,4)),w.setAttribute("carB",new wt(d,4)),w.setIndex(f),w.computeVertexNormals(),w.computeBoundingSphere(),w}useSoft(e){this.skin?.dispose(),this.skin=e?new dx(this.bodyMesh,e,this.group,this.loose,this.tyre,this.tyreMaterial):null,this.lamps.uSoft.value=e?1:0}soft(e,t,n){this.skin&&e.length&&this.skin.apply(e,t,n)}fireball(){const e=this.puffs,t=this.group.position;for(let n=0;n<56;n++){const s=e.next;e.next=(e.next+1)%gi;const r=Math.random()*Math.PI*2,a=Math.random(),o=Math.cbrt(Math.random())*1.7,l=1+Math.random()*5;e.at[s*3]=t.x+Math.cos(r)*o*(1-a*.5),e.at[s*3+1]=t.y+.2+a*1.6,e.at[s*3+2]=t.z+Math.sin(r)*o*(1-a*.5),e.vel[s*3]=Math.cos(r)*l,e.vel[s*3+1]=1.5+Math.random()*6,e.vel[s*3+2]=Math.sin(r)*l,e.life[s*3]=.001+Math.random()*.12,e.life[s*3+1]=Math.random(),e.life[s*3+2]=2}}splash(e){const t=this.puffs,n=Math.min(1,e/25),s=Math.round(14+26*n);for(let r=0;r<s;r++){const a=t.next;t.next=(t.next+1)%gi;const o=Math.random()*Math.PI*2,l=.8+Math.random()*1.6,c=1.5+Math.random()*(3+6*n);t.at[a*3]=this.group.position.x+Math.cos(o)*l,t.at[a*3+1]=this.group.position.y+.2,t.at[a*3+2]=this.group.position.z+Math.sin(o)*l,t.vel[a*3]=Math.cos(o)*c,t.vel[a*3+1]=2.5+Math.random()*(3+5*n),t.vel[a*3+2]=Math.sin(o)*c,t.life[a*3]=.001,t.life[a*3+1]=Math.random(),t.life[a*3+2]=0}}update(e,t,n=0){this.group.position.set(e[Ee.POS],e[Ee.POS+1],e[Ee.POS+2]),this.group.quaternion.set(e[Ee.ROT],e[Ee.ROT+1],e[Ee.ROT+2],e[Ee.ROT+3]).normalize();const s=this.shape,r=this.skin?Math.max(0,e[Ee.WHEELS_OFF]):0;for(let o=0;o<4;o++){const l=Ee.WHEELS+o*Ee.WHEEL_STRIDE,c=this.wheels[o];c.visible=!(r>>o&1),c.position.set(o%2===0?-s.halfTrack:s.halfTrack,-e[l+Ee.W_LENGTH],o<2?-s.axleFront:s.axleRear),c.rotation.y=-e[l+Ee.W_STEER],this.spinners[o].rotation.x=-e[l+Ee.W_ANGLE]}this.lamps.uBrake.value=t?1:0,this.lamps.uReverse.value=e[Ee.GEAR]<0?1:0,this.lamps.uCrush.value.set(e[Ee.CRUSH],e[Ee.CRUSH+1],e[Ee.CRUSH+2],e[Ee.CRUSH+3]),this.lamps.uWear.value.set(e[Ee.WEAR],e[Ee.WEAR+1],e[Ee.WEAR+2],e[Ee.WEAR+3]);const a=e[Ee.EXPLODED]>.5;a&&!this.blown&&this.fireball(),this.blown=a,this.burnt=a?Math.min(1,this.burnt+n/.5):0,this.lamps.uBurnt.value=this.burnt,this.paint.clearcoat=1-.97*this.burnt,this.smoke(e,n)}}const Ex=[Ul,{name:"Pico",paint:14263572,screenFoot:-.78,screenHead:-.18,backHead:1.22,backFoot:1.78,nose:.2,belt:.42,roof:.915},{name:"Brannan",paint:12734476,screenFoot:-.5,screenHead:.22,backHead:.98,backFoot:1.85,nose:.2,belt:.41,roof:.815},{name:"Tamalpais",paint:1395358,screenFoot:-.8,screenHead:-.08,backHead:.9,backFoot:1.62,nose:.16,belt:.41,roof:.895},{name:"Hauler",paint:14605008,screenFoot:-2,screenHead:-1.5,backHead:2.38,backFoot:2.5,nose:.6,belt:.72,roof:1.565,glassTo:-.75},{name:"Marauder",paint:1447706,screenFoot:-.45,screenHead:.25,backHead:.95,backFoot:1.8,nose:.22,belt:.43,roof:.815},{name:"Bulwark",paint:4869973,screenFoot:-.95,screenHead:-.5,backHead:.75,backFoot:.95,nose:.62,belt:.78,roof:1.365}],Ax=i=>Ex.find(e=>e.name===i)??{...Ul,name:i};class Tx{nx;nz;cell;x0;z0;h;constructor(e){const t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint32(4,!0);if(t.getUint32(0,!0)!==1464873552||n<1||n>8)throw new Error(`not a world file this build reads (version ${n})`);this.nx=t.getUint32(8,!0),this.nz=t.getUint32(12,!0),this.cell=t.getFloat32(16,!0),this.x0=t.getFloat32(20,!0),this.z0=t.getFloat32(24,!0);const s=t.getFloat32(28,!0);this.h=new Float32Array(this.nx*this.nz);for(let r=0;r<this.h.length;r++)this.h[r]=s+t.getInt16(32+r*2,!0)*.01}ways=[];setWays(e){this.ways=e}onWay(e,t,n,s){const r=e.p[t],a=e.p[t+1],o=a[0]-r[0],l=a[2]-r[2],c=o*o+l*l;if(c<1e-6)return null;const h=Math.sqrt(c),u=((n-r[0])*o+(s-r[2])*l)/c,d=.8/h;if(u<(t===0?0:-d)||u>(t+2===e.p.length?1:1+d))return null;const f=r[0]+o*u-n,m=r[2]+l*u-s;if(f*f+m*m>e.half*e.half)return null;const g=Math.min(1,Math.max(0,u));return r[1]+(a[1]-r[1])*g}surface(e,t,n){const s=this.at(e,t),r=n+.35;let a=-1/0,o=!1;for(const l of this.ways)for(let c=0;c+1<l.p.length;c++){const h=this.onWay(l,c,e,t);h!==null&&(l.k==="tunnel"&&n<h+(l.clear??5.6)&&(o=!0),h<=r&&h>a&&(a=h))}return!o&&s<=r&&s>a&&(a=s),a===-1/0?s:a}tunnel(e,t,n){for(const s of this.ways)if(s.k==="tunnel")for(let r=0;r+1<s.p.length;r++){const a=this.onWay(s,r,e,n);if(a!==null&&t>a-2&&t<a+(s.clear??5.6)+.5)return{floor:a,roof:a+(s.clear??5.6),way:s,si:r}}return null}deckOver(e,t,n){let s=1/0;for(const r of this.ways)if(r.k==="deck")for(let a=0;a+1<r.p.length;a++){const o=this.onWay(r,a,e,t);o!==null&&o-1.2>n&&o-1.2<s&&(s=o-1.2)}return s}at(e,t){const n=Math.min(this.nx-1.001,Math.max(0,(e-this.x0)/this.cell)),s=Math.min(this.nz-1.001,Math.max(0,(t-this.z0)/this.cell)),r=Math.floor(n),a=Math.floor(s),o=n-r,l=s-a,c=a*this.nx+r,h=this.h;return(h[c]*(1-o)+h[c+1]*o)*(1-l)+(h[c+this.nx]*(1-o)+h[c+this.nx+1]*o)*l}}async function Rx(i){const e=await fetch(i);if(!e.ok)throw new Error(`${i}: ${e.status}`);return new Uint8Array(await e.arrayBuffer())}const Cx=1464873552,Lx=8;function Px(i){const e=new DataView(i.buffer,i.byteOffset,i.byteLength);if(e.getUint32(0,!0)!==Cx)throw new Error("not a world file");const t=e.getUint32(8,!0),n=e.getUint32(12,!0),s=e.getFloat32(16,!0),r=e.getFloat32(20,!0),a=e.getFloat32(24,!0),o=e.getFloat32(28,!0),l=new Float32Array(t*n);for(let h=0;h<l.length;h++)l[h]=o+e.getInt16(32+h*2,!0)*.01;return{nx:t,nz:n,cell:s,x0:r,z0:a,h:l,at:(h,u)=>{const d=Math.min(t-1.001,Math.max(0,(h-r)/s)),f=Math.min(n-1.001,Math.max(0,(u-a)/s)),m=Math.floor(d),g=Math.floor(f),x=d-m,p=f-g,y=g*t+m;return(l[y]*(1-x)+l[y+1]*x)*(1-p)+(l[y+t]*(1-x)+l[y+t+1]*x)*p}}}const Dx=2e3,Vr=500,Ix=5;function Ux(i,e=Dx){const n=111320*Math.cos(i.lat*Math.PI/180),s=Math.round(i.lat*111320/Vr)*Vr/111320,r=Math.round(i.lon*n/Vr)*Vr/n,a=e/2/111320,o=e/2/n;return{key:`at_${s.toFixed(4)}_${r.toFixed(4)}_${e}_m${Ix}b${Lx}`,centre:{lon:r,lat:s},bbox:[r-o,s-a,r+o,s+a]}}const Fx=/^(motorway|trunk|primary|secondary|tertiary|residential|unclassified)$/,Nx=(i,e,t)=>{let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const[a,o]=i[s],[l,c]=i[r];o>t!=c>t&&e<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n};function zx(i,e,t,n,s){const[r,a,o,l]=i.box,c=48,h=new Map;i.buildings.forEach((g,x)=>{if(g.m)return;let p=1/0,y=-1/0,_=1/0,v=-1/0;for(const[E,M]of g.r)p=Math.min(p,E),y=Math.max(y,E),_=Math.min(_,M),v=Math.max(v,M);for(let E=Math.floor(p/c);E<=Math.floor(y/c);E++)for(let M=Math.floor(_/c);M<=Math.floor(v/c);M++){const T=`${E}_${M}`;(h.get(T)??h.set(T,[]).get(T)).push(x)}});const u=(g,x)=>(h.get(`${Math.floor(g/c)}_${Math.floor(x/c)}`)??[]).some(p=>Nx(i.buildings[p].r,g,x)),d=(g,x,p,y)=>{if(!(g>r+30&&g<o-30&&x>a+30&&x<l-30))return!1;for(const _ of[-3,0,3])for(const v of[-1.2,1.2]){const E=g+p*_-y*v,M=x+y*_+p*v;if(u(E,M)||e(E,M)<t+.2)return!1}return!0};let f=null;for(const g of i.roads)if(!(!Fx.test(g.c)||g.b))for(let x=0;x+1<g.p.length;x++){const[p,y]=g.p[x],[_,v]=g.p[x+1],E=_-p,M=v-y,T=Math.hypot(E,M);if(T<12)continue;const D=Math.max(5/T,Math.min(1-5/T,((n-p)*E+(s-y)*M)/(T*T))),b=p+E*D,w=y+M*D,P=Math.hypot(b-n,w-s);f&&P>=f.d||d(b,w,E/T,M/T)&&(f={d:P,qx:b,qz:w,dx:E,dz:M,c:g.c})}if(!f)return null;const m=g=>Math.round(g*10)/10;return{x:m(f.qx),z:m(f.qz),heading:Math.round(Math.atan2(f.dx,-f.dz)*1e3)/1e3,road:f.c,off:m(f.d)}}const $c=6378137,ja=Math.PI/180;function Ox(i,e){const t=Math.cos(i.lat*ja);return{x:(e.lon-i.lon)*ja*$c*t,y:(e.lat-i.lat)*ja*$c}}function gf(i){const e=/^\s*(-?\d{1,2}(?:\.\d+)?)\s*,\s*(-?\d{1,3}(?:\.\d+)?)\s*$/.exec(i.get("at")??"");if(!e)return null;const t=Number(e[1]),n=Number(e[2]);return Math.abs(t)>85||Math.abs(n)>180?null:{lat:t,lon:n,label:i.get("place")||`${t.toFixed(5)}, ${n.toFixed(5)}`}}function ll(i){const e=new URLSearchParams(location.search);e.delete("at"),e.delete("place"),e.delete("start"),e.delete("world"),i&&(e.set("at",`${i.lat.toFixed(5)},${i.lon.toFixed(5)}`),e.set("place",i.label.split(",").slice(0,2).join(",").slice(0,60)));const t=e.toString();return`${location.pathname}${t?`?${t}`:""}`}const kx=/^\s*(-?\d{1,2}(?:\.\d+)?)\s*[,\s]\s*(-?\d{1,3}(?:\.\d+)?)\s*$/;let Yc=0;async function Bx(i){const e=kx.exec(i);if(e){const r=Number(e[1]),a=Number(e[2]);if(Math.abs(r)<=85&&Math.abs(a)<=180)return[{label:`${r.toFixed(5)}, ${a.toFixed(5)}`,lat:r,lon:a}]}const t=Yc+1100-Date.now();t>0&&await new Promise(r=>setTimeout(r,t)),Yc=Date.now();const n=await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&q=${encodeURIComponent(i)}`,{headers:{Accept:"application/json"}});if(!n.ok)throw new Error(`the address search answered ${n.status}`);return(await n.json()).map(r=>({label:r.display_name,lat:Number(r.lat),lon:Number(r.lon)})).filter(r=>Number.isFinite(r.lat)&&Number.isFinite(r.lon)&&Math.abs(r.lat)<=85)}const Hx="p2p-squares",pr="squares",Gx=6;function xf(){return new Promise((i,e)=>{const t=indexedDB.open(Hx,1);t.onupgradeneeded=()=>{t.result.createObjectStore(pr,{keyPath:"key"})},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error??new Error("IndexedDB refused"))})}const vf=i=>new Promise((e,t)=>{i.onsuccess=()=>e(i.result),i.onerror=()=>t(i.error)});async function Vx(i){try{const e=await xf(),t=await vf(e.transaction(pr).objectStore(pr).get(i));return e.close(),t??null}catch{return null}}async function Kc(i){try{const e=await xf(),t=e.transaction(pr,"readwrite"),n=t.objectStore(pr);n.put(i);const s=await vf(n.getAll());for(const r of s.sort((a,o)=>o.used-a.used).slice(Gx))n.delete(r.key);return await new Promise((r,a)=>{t.oncomplete=()=>r(),t.onerror=()=>a(t.error),t.onabort=()=>a(t.error)}),e.close(),!0}catch(e){return console.warn("the square was made and not kept:",e),!1}}async function Wx(i,e,t){const n=Ux(i),s=qx().has("remake")?null:await Vx(n.key);if(s){t("a square made here before");const o=JSON.parse(s.page),l=new Uint8Array(s.blob),c=o.from.at;if(!c||Math.abs(c.lat-i.lat)>2e-4||Math.abs(c.lon-i.lon)>2e-4){const h=Ox(n.centre,i),u=Px(l),d=zx(o,u.at,o.ground.sea??-1/0,h.x,-h.y);d&&(o.starts=[{label:i.label,...d}])}return o.starts[0]&&(o.starts[0].label=i.label),Kc({...s,used:Date.now()}),{blob:l,page:o,mask:{...s.kinds,data:new Uint8Array(s.kinds.data)},kept:!0,seconds:null}}const r=await new Promise((o,l)=>{const c=new Worker(new URL(""+new URL("worker-DOQDnaDz.js",import.meta.url).href,import.meta.url),{type:"module"});c.onmessage=h=>{const u=h.data;"step"in u?t(u.step):"done"in u?(c.terminate(),o(u.done)):(c.terminate(),l(new Error(u.error)))},c.onerror=h=>{c.terminate(),l(new Error(`the worker that makes a square failed: ${h.message||"it could not be started"}`))},c.postMessage({lat:i.lat,lon:i.lon,label:i.label,kinds:e})});t("keeping the square on this device");const a=await Kc({key:r.key,used:Date.now(),blob:r.blob.slice(0),page:r.page,kinds:{...r.kinds,data:r.kinds.data.slice(0)}});return{blob:new Uint8Array(r.blob),page:JSON.parse(r.page),mask:{...r.kinds,data:new Uint8Array(r.kinds.data)},kept:a,seconds:r.seconds}}const qx=()=>new URLSearchParams(location.search),Xx=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,$x=`
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
  }`,Yx=`
  uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 texel;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tSrc, vUv).rgb * 0.25;
    c += (texture2D(tSrc, vUv + vec2(texel.x, 0.0)).rgb + texture2D(tSrc, vUv - vec2(texel.x, 0.0)).rgb + texture2D(tSrc, vUv + vec2(0.0, texel.y)).rgb + texture2D(tSrc, vUv - vec2(0.0, texel.y)).rgb) * 0.125;
    c += (texture2D(tSrc, vUv + texel).rgb + texture2D(tSrc, vUv - texel).rgb + texture2D(tSrc, vUv + vec2(texel.x, -texel.y)).rgb + texture2D(tSrc, vUv + vec2(-texel.x, texel.y)).rgb) * 0.0625;
    gl_FragColor = vec4(c + texture2D(tAdd, vUv).rgb, 1.0);
  }`,Kx=`
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
  }`;class jc{constructor(e,t,n){this.renderer=e,this.quality=t;const s=t==="high";this.target=new ci(4,4,{type:Wi,samples:n,depthBuffer:!0}),s&&(this.target.depthTexture=new Al(4,4),this.target.depthTexture.type=Si);const r=()=>new ci(4,4,{type:Wi,depthBuffer:!1,minFilter:Sn,magFilter:Sn});for(let l=0;l<3;l++)this.mips.push(r());for(let l=0;l<2;l++)this.ups.push(r());const a=(l,c,h={})=>new Cn({vertexShader:Xx,fragmentShader:l,uniforms:c,defines:h,depthTest:!1,depthWrite:!1,toneMapped:!1});this.down=a($x,{tSrc:{value:null},texel:{value:new nt},knee:{value:0}}),this.up=a(Yx,{tSrc:{value:null},tAdd:{value:null},texel:{value:new nt}}),this.final=a(Kx,{tScene:{value:this.target.texture},tBloom:{value:null},tDepth:{value:this.target.depthTexture??null},bloom:{value:t==="high"?.085:.07},exposure:{value:1},time:{value:0},size:{value:new nt},ao:{value:.75},nearFar:{value:new nt(.3,6e3)}},s?{USE_AO:""}:{});const o=new Ot;o.setAttribute("position",new wt([-1,-1,0,3,-1,0,-1,3,0],3)),o.setAttribute("uv",new wt([0,0,2,0,0,2],2)),this.quad=new It(o,this.down),this.quad.frustumCulled=!1,this.scene.add(this.quad)}scene=new nl;camera=new Ll(-1,1,1,-1,0,1);quad;target;mips=[];ups=[];down;up;final;size=new nt;frame=0;static samples(e){if(!e.capabilities.isWebGL2)return-1;const t=e.getContext();if(!(t.getExtension("EXT_color_buffer_half_float")||t.getExtension("EXT_color_buffer_float")))return-1;const n=a=>{const o=t.createFramebuffer(),l=t.createRenderbuffer(),c=t.createTexture();t.bindFramebuffer(t.FRAMEBUFFER,o),a?(t.bindRenderbuffer(t.RENDERBUFFER,l),t.renderbufferStorageMultisample(t.RENDERBUFFER,4,t.RGBA16F,8,8),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,l)):(t.bindTexture(t.TEXTURE_2D,c),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,8,8,0,t.RGBA,t.HALF_FLOAT,null),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,c,0));const h=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE&&t.getError()===t.NO_ERROR;return t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.bindTexture(t.TEXTURE_2D,null),t.deleteFramebuffer(o),t.deleteRenderbuffer(l),t.deleteTexture(c),h};for(;t.getError()!==t.NO_ERROR;);const s=n(!1),r=s&&n(!0);return e.resetState(),s?r?4:0:-1}fit(){const e=this.renderer.getDrawingBufferSize(new nt);if(e.equals(this.size))return;this.size.copy(e),this.target.setSize(e.x,e.y);let t=e.x,n=e.y;this.mips.forEach((s,r)=>{const a=r===0?4:2;t=Math.max(2,Math.round(t/a)),n=Math.max(2,Math.round(n/a)),s.setSize(t,n)}),this.ups[0].setSize(this.mips[1].width,this.mips[1].height),this.ups[1].setSize(this.mips[0].width,this.mips[0].height),this.final.uniforms.size.value.copy(e)}pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera)}render(e,t){this.fit();const n=this.renderer;n.setRenderTarget(this.target),n.render(e,t);const s=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1;const r=this.down.uniforms,a=this.up.uniforms;let o=this.target.texture,l=this.size.x,c=this.size.y;this.mips.forEach((u,d)=>{r.tSrc.value=o,r.texel.value.set(1/l,1/c).multiplyScalar(d===0?2:1),r.knee.value=d===0?1:0,this.pass(this.down,u),o=u.texture,l=u.width,c=u.height}),a.tSrc.value=this.mips[2].texture,a.tAdd.value=this.mips[1].texture,a.texel.value.set(1/this.mips[2].width,1/this.mips[2].height),this.pass(this.up,this.ups[0]),a.tSrc.value=this.ups[0].texture,a.tAdd.value=this.mips[0].texture,a.texel.value.set(1/this.ups[0].width,1/this.ups[0].height),this.pass(this.up,this.ups[1]);const h=this.final.uniforms;h.tBloom.value=this.ups[1].texture,h.exposure.value=n.toneMappingExposure,h.time.value=this.frame++%240/240,h.nearFar.value.set(t.near,t.far),this.pass(this.final,null),n.shadowMap.autoUpdate=s}get name(){return this.quality}}function jx(i){const e=i.has("test"),t=i.get("q"),n=t==="low"||t==="high"?t:"mid";return rx(n),{dpr:Math.min(Number(i.get("dpr")??(e?1:n==="low"?1.5:2)),window.devicePixelRatio||1),shadows:i.get("shadows")?i.get("shadows")!=="0":!e,far:Number(i.get("far")??1200),quality:n}}const Zx=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,Jx=`
  uniform float eyeY;
  varying vec3 vDir;
  ${Ki}
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
  }`,Zc=7e3;class Qx{constructor(e,t){this.knobs=t,ax(),df.far=t.far;const n=t.quality;if(this.renderer=new Qg({canvas:e,antialias:n==="low",powerPreference:"high-performance"}),this.renderer.setPixelRatio(t.dpr),this.renderer.outputColorSpace=hn,this.renderer.toneMapping=Dh,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=t.shadows,this.renderer.shadowMap.type=Ph,this.renderer.info.autoReset=!1,n!=="low"){const c=jc.samples(this.renderer);c>=0&&(this.post=new jc(this.renderer,n,c))}const s=new Cn({vertexShader:Zx,fragmentShader:Jx,side:yn,depthWrite:!1,fog:!1,uniforms:{eyeY:{value:0}},defines:{CLOUDS:""}});this.skyUniforms=s.uniforms,this.sky=new It(new Tl(1,32,16),s),this.sky.frustumCulled=!1,this.sky.renderOrder=-1;const r=new rl(this.renderer),a=new nl;a.add(this.sky),this.reflections=r.fromScene(a,0,.1,10).texture,r.dispose(),this.sky.scale.setScalar(Zc*.9),this.scene.add(this.sky),this.scene.fog=new El(10466511,1/(t.far*1.4)),this.scene.add(new ud(12899306,11771271,2.9)),this.square=n==="low"?260:210,this.mapSize=n==="low"?1024:2048,this.sun.castShadow=t.shadows,this.sun.shadow.mapSize.set(this.mapSize,this.mapSize);const o=this.sun.shadow.camera,l=this.square/2;o.left=-l,o.right=l,o.top=l,o.bottom=-l,o.near=10,o.far=760,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.45,this.sun.shadow.radius=1.6,this.scene.add(this.sun,this.sun.target)}renderer;scene=new nl;sun=new md(16767405,4.3);reflections;sky;skyUniforms;post=null;ahead=new k;square;mapSize;resize(e){const t=window.innerWidth,n=window.innerHeight;this.renderer.setSize(t,n,!1),e.aspect=t/n,e.far=Zc,e.updateProjectionMatrix()}follow(e,t){this.sky.position.copy(t),this.skyUniforms.eyeY.value=t.y,this.ahead.set(e.x-t.x,0,e.z-t.z);const n=this.ahead.length();n>.5?this.ahead.multiplyScalar(this.square*.3/n):this.ahead.set(0,0,0);const s=this.square/this.mapSize,r=Math.round((e.x+this.ahead.x)/s)*s,a=Math.round((e.z+this.ahead.z)/s)*s;this.sun.target.position.set(r,e.y,a),this.sun.position.copy(this.sun.target.position).addScaledVector(yi,380),this.sun.target.updateMatrixWorld()}draw(e){this.renderer.info.reset();for(const t of this.scene.children)t.userData.tend?.(e.position);this.post?this.post.render(this.scene,e):this.renderer.render(this.scene,e)}}const xs=`?v=${encodeURIComponent("d34f777 2026-11-23 01:50Z".split(" ")[0])}`,Jc={canon:[.075,.15,.034],pull:.65,soft:!0,second:[.19,.145,.095],patch:.8,patchSize:4.8,patchAt:.8,fine:[24,24],fineAmp:.8,mid:5,midAmp:.55,lean:[1.25,1,.5],coarse:.24,stain:[1.1,1.05,.86]},Qc={canon:[.175,.175,.18],pull:.62,second:[.12,.12,.125],patch:.7,patchSize:9,patchAt:.66,fine:[11,11],fineAmp:.3,mid:2,midAmp:.12,coarse:.14,stain:[.88,.88,.88],crack:.5,gloss:.4},er=[{canon:[0,0,0],pull:0,fine:[1,1],fineAmp:0,mid:1,midAmp:0,coarse:0,stain:[1,1,1]},Jc,{canon:[.045,.085,.03],pull:.55,soft:!0,second:[.105,.075,.05],patch:.9,patchSize:1.8,patchAt:.6,fine:[41,41],fineAmp:.5,mid:13,midAmp:.7,lean:[.9,1,.7],coarse:.5,stain:[1.25,1.1,.8]},{canon:[.5,.41,.27],pull:.65,soft:!0,second:[.36,.29,.19],patch:.5,patchSize:3,patchAt:.62,fine:[19,19],fineAmp:.34,mid:3.1,midAmp:.34,coarse:.2,stain:[.85,.85,.85]},{canon:[.2,.155,.1],pull:.6,soft:!0,second:[.085,.13,.04],patch:.7,patchSize:2.2,patchAt:.6,fine:[43,43],fineAmp:.4,mid:9,midAmp:.35,coarse:.25,stain:[.8,.8,.8]},{canon:[.2,.195,.185],pull:.7,second:[.12,.12,.11],patch:.5,patchSize:1.5,patchAt:.6,fine:[17,17],fineAmp:.4,mid:3.3,midAmp:.3,coarse:.3,stain:[.8,.8,.8],cell:[.9,.6],stagger:1,tone:.8,joint:.03,jointDark:.6,crown:.3},{canon:[.07,.36,.44],pull:.9,fine:[1,1],fineAmp:0,mid:2.1,midAmp:.5,coarse:.1,stain:[1,1,1],gloss:1,cell:[.25,.25],joint:.006,jointDark:.2},{canon:[.37,.35,.31],pull:.6,second:[.2,.16,.11],patch:.45,patchSize:1.4,patchAt:.64,fine:[9,9],fineAmp:.24,mid:31,midAmp:.2,coarse:.18,stain:[.8,.8,.78],crack:.5,gloss:.18},Qc,{canon:[0,0,0],pull:0,fine:[21,21],fineAmp:.14,mid:3,midAmp:.06,coarse:.1,stain:[.92,.92,.92],crack:.25,gloss:.3},{canon:[.42,.4,.355],pull:.6,second:[.24,.22,.19],patch:.4,patchSize:2.5,patchAt:.72,fine:[9,9],fineAmp:.22,mid:3,midAmp:.1,coarse:.11,stain:[.86,.85,.82],crack:.4,gloss:.22,cell:[1.83,1.83],tone:.2,joint:.009,jointDark:.45},{canon:[.36,.33,.29],pull:.42,second:[.24,.22,.2],patch:.35,patchSize:3,patchAt:.72,fine:[14,14],fineAmp:.2,mid:3,midAmp:.1,coarse:.14,stain:[.84,.84,.84],gloss:.3,cell:[.6,.3],stagger:.5,tone:.25,joint:.006,jointDark:.5},{...Qc,second:[.09,.09,.095],patch:.5,patchSize:1.4,patchAt:.74,cell:[2.6,17],joint:.05,jointDark:-.9,gate:5.2/17},{canon:[.21,.145,.1],pull:.7,second:[.12,.09,.07],patch:.5,patchSize:4,patchAt:.62,fine:[2.2,85],fineAmp:.34,mid:6,midAmp:.1,coarse:.1,stain:[.78,.78,.76],gloss:.12,cell:[4.2,.19],stagger:1,tone:.42,joint:.005,jointDark:.8,crown:.3},{...Jc,patch:0,stain:[1.1,1.05,.9],cell:[6,4e3],tone:.12}];function ev(i){const e=new Uint8Array(768),t=new Qe;for(let n=0;n<256;n++){const s=n>=30?Math.min(er.length-1,10+Math.floor((n-30)/45)):Math.min(n,9);s===0?t.copy(i):s===9?t.setRGB(.1,.2,.17):t.setRGB(...er[s].canon),t.convertLinearToSRGB(),e.set([Math.round(t.r*255),Math.round(t.g*255),Math.round(t.b*255)],n*3)}return e}const In={turned:30,steps:45,firstTurnedRow:10,deckRow:13,shoreRow:5},Za=8;function tv(){const i=new Float32Array(er.length*Za*4);er.forEach((t,n)=>{const s=t.cell??[1,1];i.set([...t.canon,t.pull+(t.soft?2:0),...t.second??[0,0,0],t.patch??0,...t.fine,t.fineAmp,1/(t.patchSize??1),t.mid,t.midAmp,t.coarse,t.patchAt??2,...t.lean??[1,1,1],t.gloss??0,...t.stain,t.crack??0,...s,t.stagger??0,t.tone??0,t.joint??.001,t.jointDark??0,t.gate??1,t.crown??0],n*Za*4)});const e=new qi(i,Za,er.length,_n,Fn);return e.minFilter=e.magFilter=fn,e.generateMipmaps=!1,e.colorSpace=Vn,e.needsUpdate=!0,e}const nv=`
  uniform sampler2D uKinds, uLooks; uniform vec4 uKindsBox; uniform vec2 uKindsSize; uniform float uKindsOn, uSea, uFlat;
  float p2pFade(float fw, float a, float b) { return 1.0 - smoothstep(a, b, fw); }
  // a byte of the mask: its row in the looks, and the angle it is laid at
  int p2pRow(float id) { return id >= ${In.turned}.0 ? ${In.firstTurnedRow} + int((id - ${In.turned}.0) / ${In.steps}.0) : min(int(id), ${In.firstTurnedRow-1}); }
  float p2pAngle(float id) {
    float o = max(id - ${In.turned}.0, 0.0), slot = floor(o / ${In.steps}.0);
    return (o - slot * ${In.steps}.0) / ${In.steps}.0 * (slot < 1.5 ? 1.5707963 : 3.1415927);
  }
  float p2pKind(ivec2 i) { return floor(texelFetch(uKinds, i, 0).r * 255.0 + 0.5); }
  vec4 p2pLook(int column, int row) { return texelFetch(uLooks, ivec2(column, row), 0); }
`,iv=(i,e,t)=>`
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
    float deck = dot(share, vec4(equal(rows, ivec4(${In.deckRow}))));
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
    float none = float(id < 0.5), deck = float(p2pRow(id) == ${In.deckRow});
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
    float bank = float(row == ${In.shoreRow}), up = vWorld.y - uSea;
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
  }`,Wr=64,sv=3,rv=i=>`vec3(${i.r.toFixed(4)}, ${i.g.toFixed(4)}, ${i.b.toFixed(4)})`,cl=new Qe(1456202),_f=`
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
  }`,av=`
  {
    vec3 toEye = normalize(cameraPosition - vWorld);
    float glare = pow(max(dot(reflect(-toEye, vec3(0.0, 1.0, 0.0)), P2P_SUN), 0.0), 7.0) * pow(1.0 - max(toEye.y, 0.0), 2.0);
    outgoingLight += vec3(1.0, 0.88, 0.72) * glare * p2pLit * p2pGloss;
  }
  if (p2pWet > 0.0) {
    ${_f}
    outgoingLight = mix(outgoingLight, p2pSea, p2pWet);
  }`;function ov(i,e){const t=new Uint32Array(400);for(const s of i.h){const r=Math.round((s-e)*100);r>10&&r<400&&t[r]++}let n=0;for(let s=1;s<400;s++)t[s]>t[n]&&(n=s);return t[n]>i.h.length/50?e+n/100:-1/0}function lv(i){const e=Math.ceil(i.width/2),t=Math.ceil(i.height/2),n=new Uint8Array(e*t*4),s=ev(cl);for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=i.data[Math.min(i.height-1,(t-1-a)*2)*i.width+Math.min(i.width-1,o*2)],c=(a*e+o)*4;n[c]=s[l*3],n[c+1]=s[l*3+1],n[c+2]=s[l*3+2],n[c+3]=255}const r=new qi(n,e,t,_n);return r.colorSpace=hn,r.generateMipmaps=!0,r.minFilter=ai,r.magFilter=Sn,r.needsUpdate=!0,r}function cv(i,e,t,n=null){const{nx:s,nz:r,cell:a,x0:o,z0:l,h:c}=i;ox(i);const[h,u,d,f]=e.box;!t&&n&&(t=lv(n));const m=new Qt,g=[],x=Il(),p=x==="low",y=e.ground.water+.6,_=new qi(new Uint8Array([0]),1,1,_s);_.needsUpdate=!0;const v={uKinds:{value:_},uLooks:{value:tv()},uKindsBox:{value:new Mt(0,0,1,1)},uKindsSize:{value:new nt(1,1)},uKindsOn:{value:0},uSea:{value:y},uFlat:{value:e.ground.flat??Math.max(ov(i,e.ground.water),y-1)}},E=li(new Nn({map:t,color:t?16777215:7304296}),e,{key:`p2p-ground-${x}`,uniforms:v,fragmentPars:nv,color:iv(!p,x==="high",rv(cl)),final:av}),M=(U,L,G)=>{U.format=_s,U.colorSpace=Vn,U.minFilter=U.magFilter=fn,U.generateMipmaps=!1,U.flipY=!1,v.uKinds.value=U,v.uKindsBox.value.set(h,u,L/(d-h),G/(f-u)),v.uKindsSize.value.set(L,G),v.uKindsOn.value=1};let T;if(n){const U=new qi(n.data,n.width,n.height,_s);U.unpackAlignment=1,U.needsUpdate=!0,M(U,n.width,n.height),T=Promise.resolve()}else T=new sf().loadAsync(`./world/${e.name}.kinds.png${xs}`).then(U=>{const{width:L,height:G}=U.image;M(U,L,G)},()=>{console.warn(`no kind mask for ${e.name}: the ground is the photograph alone`)});const D=e.photo??(n?{x0:h,z0:u,w:d-h,d:f-u}:null),b=(U,L)=>c[Math.min(r-1,Math.max(0,L))*s+Math.min(s-1,Math.max(0,U))],w=(U,L,G,B,j,ee)=>{const ge=Math.ceil(G/j),de=Math.ceil(B/j),Me=new Float32Array((ge+1)*(de+1)*3),$=new Float32Array(Me.length),Q=new Float32Array((ge+1)*(de+1)*2);let pe=0,Se=0;for(let $e=0;$e<=de;$e++)for(let ie=0;ie<=ge;ie++){const A=Math.min(U+G,U+ie*j),xe=Math.min(L+B,L+$e*j),ce=o+A*a,le=l+xe*a;Me[pe]=ce,Me[pe+1]=b(A,xe)-ee,Me[pe+2]=le;const be=(b(A+1,xe)-b(A-1,xe))/(2*a),Pe=(b(A,xe+1)-b(A,xe-1))/(2*a),ye=1/Math.hypot(be,1,Pe);$[pe]=-be*ye,$[pe+1]=ye,$[pe+2]=-Pe*ye,pe+=3,D&&(Q[Se]=(ce-D.x0)/D.w,Q[Se+1]=1-(le-D.z0)/D.d),Se+=2}const Re=new Ot;return Re.setAttribute("position",new Ct(Me,3)),Re.setAttribute("normal",new Ct($,3)),Re.setAttribute("uv",new Ct(Q,2)),Re.computeBoundingSphere(),Re},P=(U,L,G)=>{const B=[];for(let j=0;j<L;j+=G)for(let ee=0;ee<U;ee+=G){const ge=Math.min(U,ee+G),de=Math.min(L,j+G),Me=j*(U+1)+ee,$=j*(U+1)+ge,Q=de*(U+1)+ee,pe=de*(U+1)+ge;B.push(Me,Q,$,$,Q,pe)}return B};for(let U=0;U<r-1;U+=Wr)for(let L=0;L<s-1;L+=Wr){const G=Math.min(Wr,s-1-L),B=Math.min(Wr,r-1-U),j=w(L,U,G,B,1,0),ee=[];for(const ge of[1,2,4,8]){const de=new Ot;de.setAttribute("position",j.getAttribute("position")),de.setAttribute("normal",j.getAttribute("normal")),de.setAttribute("uv",j.getAttribute("uv")),de.setIndex(new Ts(P(G,B,ge),1)),de.boundingSphere=j.boundingSphere;const Me=new It(de,E);Me.receiveShadow=!0,Me.matrixAutoUpdate=!1,Me.visible=ge===8,m.add(Me),ee.push(Me)}g.push({x:o+(L+G/2)*a,z:l+(U+B/2)*a,hx:G*a/2,hz:B*a/2,levels:ee})}const F=16,I=Math.ceil(Math.max(s,r)/3/F)*F;for(let U=0;U<r-1;U+=I)for(let L=0;L<s-1;L+=I){const G=Math.min(I,s-1-L),B=Math.min(I,r-1-U),j=w(L,U,G,B,F,sv),ee=Math.ceil(G/F),ge=Math.ceil(B/F);j.setIndex(new Ts(P(ee,ge,1),1));const de=new It(j,E);de.receiveShadow=!0,de.matrixAutoUpdate=!1,m.add(de)}const H=li(new Nn({color:cl}),e,{key:"p2p-bay",light:"",final:`
      {
        ${_f}
        outgoingLight = p2pSea;
        // West of the map, and south of it as far east as the waterfront, there is city and not water.
        // Nothing is known of it here: the plane takes a city's mottled grey there, and the air does the rest.
        float land = max(step(vWorld.x, uEdge.x), step(uEdge.y, vWorld.z) * step(vWorld.x, uEdge.z));
        vec2 blocks = floor(vWorld.xz / 90.0);
        vec3 town = vec3(0.30, 0.29, 0.27) * (0.75 + 0.5 * p2pHash(blocks)) * (0.8 + 0.4 * p2pNoise(vWorld.xz * 0.05));
        town *= 1.0 - 0.35 * max(p2pLine(fract(vWorld.x / 90.0) * 90.0 - 45.0, 6.0, 1.0), p2pLine(fract(vWorld.z / 90.0) * 90.0 - 45.0, 6.0, 1.0));
        outgoingLight = mix(outgoingLight, town, land);
      }`,uniforms:{uEdge:{value:e.ground.around==="town"?new k(1e9,-1e9,1e9):new k(e.box[0],e.box[3],1100)}},fragmentPars:"uniform vec3 uEdge;"}),z=new It(new Ai(4e4,4e4),H);return z.rotation.x=-Math.PI/2,z.position.y=y,z.updateMatrixWorld(),m.add(z),{group:m,update:U=>{for(const L of g){const G=Math.hypot(Math.max(0,Math.abs(L.x-U.x)-L.hx),Math.max(0,Math.abs(L.z-U.z)-L.hz)),B=G<12?0:G<150?1:G<480?2:3,j=G<df.far;for(let ee=0;ee<4;ee++)L.levels[ee].visible=j&&ee===B}},ready:T}}function Nt(i){let e=Math.imul(i+1,2654435761);return e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,(e>>>0)/4294967296}class Xs{a=new Float32Array(1024);length=0;push(...e){if(this.length+e.length>this.a.length){const t=new Float32Array(Math.max(this.a.length*2,this.length+e.length));t.set(this.a.subarray(0,this.length)),this.a=t}for(let t=0;t<e.length;t++)this.a[this.length++]=e[t]}done(){return this.a.slice(0,this.length)}view(){return this.a.subarray(0,this.length)}}class ri{constructor(e,t=0,n=0){this.cellSize=e,this.auxSize=t,this.extSize=n}bins=new Map;bin(e,t){const n=`${Math.floor(e/this.cellSize)}_${Math.floor(t/this.cellSize)}`;let s=this.bins.get(n);return s||(s={pos:new Xs,nor:new Xs,col:new Xs,aux:new Xs,ext:new Xs,idx:[],late:[],box:[]},this.bins.set(n,s)),s}build(e,t={}){const n=new Qt;for(const s of this.bins.values()){if(!s.idx.length&&!s.late.length&&!s.box.length)continue;const r=new Ot,a=s.pos.length/3;r.setAttribute("position",new Ct(s.pos.done(),3));const o=s.nor.view(),l=s.col.view(),c=new Int8Array(o.length),h=new Uint8Array(l.length);for(let m=0;m<c.length;m++)c[m]=Math.round(Math.max(-1,Math.min(1,o[m]))*127);for(let m=0;m<h.length;m++)h[m]=Math.round(Math.max(0,Math.min(1,l[m]))*255);if(r.setAttribute("normal",new Ct(c,3,!0)),r.setAttribute("color",new Ct(h,3,!0)),this.auxSize&&r.setAttribute("aux",new Ct(s.aux.done(),this.auxSize)),this.extSize&&r.setAttribute("ext",new Ct(s.ext.done(),this.extSize)),this.auxSize&&s.aux.length!==a*this.auxSize)throw new Error("a batch has a short aux buffer");if(this.extSize&&s.ext.length!==a*this.extSize)throw new Error("a batch has a short ext buffer");const u=s.late.length>0||s.box.length>0,d=u?[...s.late,...s.idx,...s.box]:s.idx;r.setIndex(a>65535?new Sl(d,1):new Ts(d,1)),r.computeBoundingSphere(),r.computeBoundingBox();const f=new It(r,e);f.castShadow=!!t.cast,f.receiveShadow=!!t.receive,f.matrixAutoUpdate=!1,u&&(f.userData.near=[0,s.late.length+s.idx.length],f.userData.far=[s.late.length,s.idx.length+s.box.length]),s.mesh=f,n.add(f)}return this.bins.clear(),n}}function tr(i,e,t,n,s,r,a,o,l,c){return i.pos.push(e,t,n),i.nor.push(s,r,a),i.col.push(o,l,c),i.pos.length/3-1}function Fl(i){const e=new Qe(i);return[e.r,e.g,e.b]}const us=Fl(8092540),$s=Fl(12170667),eh=Fl(16777215),hv=/^(motorway|trunk|primary|secondary|tertiary|residential|unclassified|living_street|service)$/;function fv(i){return{at(e,t){let n=1/0,s=i.p[0][1];for(let r=0;r+1<i.p.length;r++){const a=i.p[r],o=i.p[r+1],l=o[0]-a[0],c=o[2]-a[2],h=l*l+c*c||1,u=Math.min(1,Math.max(0,((e-a[0])*l+(t-a[2])*c)/h)),d=Math.hypot(a[0]+l*u-e,a[2]+c*u-t);d<n&&(n=d,s=a[1]+(o[1]-a[1])*u)}return s}}}function Ys(i,e,t=[]){const n=[];let s=0;for(let a=0;a+1<i.length;a++){const[o,l]=i[a],[c,h]=i[a+1],u=Math.hypot(c-o,h-l);if(u<.01)continue;const d=Math.max(1,Math.ceil(u/e));for(let f=n.length===0?0:1;f<=d;f++)n.push({x:o+(c-o)*f/d,z:l+(h-l)*f/d,dx:(c-o)/u,dz:(h-l)/u,s:s+u*f/d,j:0,must:f===d});s+=u}n.length&&(n[0].must=!0);for(let a=1;a+1<n.length;a++){const o=n[a-1],l=n[a+1],c=l.x-o.x,h=l.z-o.z,u=Math.hypot(c,h);u>.01&&(n[a].dx=c/u,n[a].dz=h/u)}if(!t.length||n.length<2)return n;const r=[];for(const[a,o]of t)r.push(a-.8,a,o,o+.8);for(const a of r){if(a<=.05||a>=s-.05)continue;let o=0;for(;o+1<n.length&&n[o+1].s<a;)o++;const l=n[o],c=n[o+1];if(a-l.s<.05||c.s-a<.05)continue;const h=(a-l.s)/(c.s-l.s),u=l.dx+(c.dx-l.dx)*h,d=l.dz+(c.dz-l.dz)*h,f=Math.hypot(u,d)||1;n.splice(o+1,0,{x:l.x+(c.x-l.x)*h,z:l.z+(c.z-l.z)*h,dx:u/f,dz:d/f,s:a,j:0,must:!0})}for(const a of n)for(const[o,l]of t)a.s>=o-.01&&a.s<=l+.01&&(a.j=1,a.must=!0);return n}function qr(i,e,t,n=.055,s=54){if(i.length<3)return i;const r=i.map(l=>[e.at(l.x,l.z),e.at(l.x+l.dz*t,l.z-l.dx*t),e.at(l.x-l.dz*t,l.z+l.dx*t)]),a=[i[0]];let o=0;for(;o<i.length-1;){let l=o+1;for(let c=o+2;c<i.length;c++){const h=i[o],u=i[c];if(u.s-h.s>s||i[c-1].must)break;let d=Math.abs(h.dx*u.dz-h.dz*u.dx)<.012;for(let f=o+1;d&&f<c;f++){const m=(i[f].s-h.s)/(u.s-h.s);for(let g=0;g<3;g++)if(Math.abs(r[f][g]-(r[o][g]+(r[c][g]-r[o][g])*m))>n){d=!1;break}}if(!d)break;l=c}a.push(i[l]),o=l}return a}function Xn(i,e,t,n,s,r,a,o,l,c,h){if(t.length<2)return;let u=1;for(const f of t){const m=g=>e.at(f.x+f.dz*g,f.z-f.dx*g);if(Math.abs(m((n+s)/2)-(m(n)+m(s))/2)>.045){u=Math.max(1,Math.ceil(Math.abs(s-n)/6));break}}const d=[];for(const f of t){const m=f.dz,g=-f.dx,x=[];for(let p=0;p<=u;p++){const y=n+(s-n)*p/u,_=f.x+m*y,v=f.z+g*y;x.push(tr(i,_,e.at(_,v)+r,v,0,1,0,a[0],a[1],a[2])),i.aux.push(o(y),f.s,l,h??f.j),i.ext.push(c[0],c[1],c[2])}d.push(x)}for(let f=0;f+1<d.length;f++)for(let m=0;m<u;m++){const g=d[f][m],x=d[f][m+1],p=d[f+1][m],y=d[f+1][m+1];i.idx.push(g,p,x,x,p,y)}}const Vi=760,ea=170,Ps=330,Ja=`
  attribute vec4 aux; attribute vec3 ext;
  varying vec4 vAux; flat varying vec3 vExt;`,Qa="vAux = aux; vExt = ext;",eo=`
  varying vec4 vAux; flat varying vec3 vExt;
  // paint wears: where this is 0 it has gone
  float chipLike(vec2 rc) { return smoothstep(0.16, 0.5, p2pNoise(rc * vec2(7.0, 1.3) + 5.0) + 0.22); }`,yf=`
  float p2pFar = length(vWorld.xz - cameraPosition.xz);
  if (p2pFar > ${(Vi-ea).toFixed(1)} && p2pHash(gl_FragCoord.xy) < (p2pFar - ${(Vi-ea).toFixed(1)}) / ${ea.toFixed(1)}) discard;`,th=i=>`
  {
    vec3 toEye = normalize(cameraPosition - vWorld);
    float glare = pow(max(dot(reflect(-toEye, vec3(0.0, 1.0, 0.0)), P2P_SUN), 0.0), 7.0) * pow(1.0 - max(toEye.y, 0.0), 2.0);
    outgoingLight += vec3(1.0, 0.88, 0.72) * glare * p2pLit * ${i};
  }`,uv=`
  {
    // every derivative is taken here, outside any branch
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    ${yf}
    vec2 rc = vAux.xy;
    float halfW = vAux.z, junction = vAux.w, lanes = floor(vExt.x + 0.5), oneWay = step(0.5, vExt.y), seed = vExt.z;
    float near = 1.0 - smoothstep(${(Ps*.6).toFixed(1)}, ${Ps.toFixed(1)}, p2pFar);
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
  }`,dv=`
  {
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    ${yf}
    // across: metres in from the kerb; a plaza (ext.x = 1) has no kerb
    float across = vAux.x, along = vAux.y, wide = vAux.z, plaza = step(0.5, vExt.x), seed = vExt.z;
    float near = 1.0 - smoothstep(${(Ps*.5).toFixed(1)}, ${(Ps*.9).toFixed(1)}, p2pFar);
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
  }`,pv=`
  {
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    float p2pFar = length(vWorld.xz - cameraPosition.xz);
    float kind = floor(vExt.x + 0.5), seed = vExt.y;
    float near = 1.0 - smoothstep(${(Ps*.6).toFixed(1)}, ${Ps.toFixed(1)}, p2pFar);
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
    diffuseColor.a = a * (1.0 - smoothstep(${(Vi-ea-60).toFixed(1)}, ${(Vi-60).toFixed(1)}, p2pFar)) * (kind < 0.5 ? near : 1.0);
  }`;function mv(i,e){const t=new Qt,n=new ri(400,4,3),s=new ri(400,4,3),r=new ri(400,4,3),a=_=>`${_[0]}_${_[1]}`,o=new Map,l=e.roads.filter(_=>!_.b&&(hv.test(_.c)||_.c==="pedestrian")),c=_=>_==="service"||_==="living_street";for(const _ of l)_.c!=="pedestrian"&&_.p.forEach((v,E)=>{const M=o.get(a(v))??{n:0,major:0,half:0},T=E===0||E===_.p.length-1?1:2;M.n+=T,c(_.c)||(M.major+=T,M.half=Math.max(M.half,_.w/2)),o.set(a(v),M)});l.forEach((_,v)=>{const E=Nt(v),M=_.w/2,T=c(_.c);if(_.c==="pedestrian"){const z=qr(Ys(_.p,6),i,M),N=z[z.length>>1];z.length>1&&Xn(s.bin(N.x,N.z),i,z,-M,M,.05+E*.012,$s,U=>U+M,_.w,[1,0,E]);return}const D=[];let b=0;_.p.forEach((z,N)=>{N>0&&(b+=Math.hypot(z[0]-_.p[N-1][0],z[1]-_.p[N-1][1]));const U=o.get(a(z));if(T?U.n>=3:U.major>=3){const L=Math.max(U.half,M)+5.2;D.push([b-L,b+L])}});const w=qr(Ys(_.p,6,D),i,M+(_.s??0));if(w.length<2)return;const P=w[w.length>>1],F=.86+.3*Nt(v+4001),I=(Nt(v+911)-.5)*.05,H=[us[0]*F*(1+I),us[1]*F,us[2]*F*(1-I)];if(Xn(n.bin(P.x,P.z),i,w,-M,M,.07+E*.012,H,z=>z,M,[T?1:_.l??1,_.o||T?1:0,E]),_.s){const z=.92+.16*Nt(v+77),N=[$s[0]*z,$s[1]*z,$s[2]*z];Xn(s.bin(P.x,P.z),i,w,M,M+_.s,.05+E*.012,N,U=>U-M,_.s,[0,0,E]),Xn(s.bin(P.x,P.z),i,w,-M-_.s,-M,.05+E*.012,N,U=>-U-M,_.s,[0,1,E])}}),(e.ways??[]).forEach((_,v)=>{const E=fv(_),M=Nt(v+5003),T=_.p.map(H=>[H[0],H[2]]),D=Ys(T,6);if(D.length<2)return;const b=D[D.length>>1];if(_.c==="pedestrian"){Xn(s.bin(b.x,b.z),E,D,-_.half+.3,_.half-.3,.03,$s,H=>H+_.half,_.half*2,[1,0,M]);return}const w=_.w/2,P=.8+.2*Nt(v+6007),F=[us[0]*P,us[1]*P,us[2]*P];Xn(n.bin(b.x,b.z),E,D,-w,w,.1,F,H=>H,w,[_.l??1,_.o?1:0,M]);const I=_.half-w-.05;if(I>.2){const H=[.62,.61,.58];Xn(s.bin(b.x,b.z),E,D,w,w+I,.08,H,z=>z-w,I,[0,0,M]),Xn(s.bin(b.x,b.z),E,D,-w-I,-w,.08,H,z=>-z-w,I,[0,1,M])}}),e.lines.forEach((_,v)=>{if(_.k==="crosswalk"){const E=qr(Ys(_.p,3),i,3.3,.02);if(E.length<2)return;const M=E[E.length-1].s,T=E[E.length>>1];Xn(r.bin(T.x,T.z),i,E,-3.3,3.3,.105,eh,D=>D,M,[0,Nt(v+20011),0],0)}else if(_.k==="rail"){const E=qr(Ys(_.p,4),i,2,.03);if(E.length<2)return;const M=E[E.length>>1];Xn(r.bin(M.x,M.z),i,E,-2,2,.095,eh,T=>T,0,[1,Nt(v+733),0],0)}});const h=(_,v)=>(_.polygonOffset=!0,_.polygonOffsetFactor=v,_.polygonOffsetUnits=v*2,_),u=h(li(new Nn({vertexColors:!0}),e,{key:"p2p-road",vertexPars:Ja,vertex:Qa,fragmentPars:eo,color:uv,final:th("0.50")}),-3),d=h(li(new Nn({vertexColors:!0}),e,{key:"p2p-walk",vertexPars:Ja,vertex:Qa,fragmentPars:eo,color:dv,final:th("0.22")}),-2),f=h(li(new Nn({vertexColors:!0,transparent:!0,depthWrite:!1}),e,{key:"p2p-over",vertexPars:Ja,vertex:Qa,fragmentPars:eo,color:pv,final:`
      {
        vec3 toEye = normalize(cameraPosition - vWorld);
        vec3 r = reflect(-toEye, vec3(0.0, 1.0, 0.0));
        float fres = 0.25 + 0.75 * pow(1.0 - max(toEye.y, 0.0), 4.0);
        outgoingLight = mix(outgoingLight, p2pSky(r) * 0.8 + vec3(1.0, 0.85, 0.65) * pow(max(dot(r, P2P_SUN), 0.0), 30.0) * 2.0 * p2pLit, p2pGloss * fres);
      }`}),-5),m=n.build(u,{receive:!0}),g=s.build(d,{receive:!0}),x=r.build(f,{receive:!0});for(const _ of x.children)_.renderOrder=2;t.add(g,m,x);const p=(_,v,E)=>{for(const M of _){const T=M.geometry.boundingSphere;M.visible=Math.hypot(T.center.x-v.x,T.center.z-v.z)-T.radius<E}};return{group:t,update:_=>{p(m.children,_,Vi),p(g.children,_,Vi),p(x.children,_,Vi-60)}}}const Pn=1,gv=3.2,xv=2.4;function vv(i){const e=i.length;return i.map((t,n)=>{const s=i[Math.max(0,n-1)],r=i[Math.min(e-1,n+1)];let a=r[0]-s[0],o=r[2]-s[2];const l=Math.hypot(a,o)||1e-6;a/=l,o/=l;let c=o,h=-a;if(n>0&&n<e-1){const u=i[n-1],d=i[n],f=d[0]-u[0],m=d[2]-u[2],g=Math.hypot(f,m)||1e-6,x=Math.max(.5,c*(m/g)+h*(-f/g));c/=x,h/=x}return[c,h]})}function to(i,e,t,n,s){return i.some((r,a)=>{if(a===e)return!1;for(let o=0;o+1<r.p.length;o++){const l=r.p[o],c=r.p[o+1],h=c[0]-l[0],u=c[2]-l[2],d=h*h+u*u;if(d<1e-6)continue;const f=Math.sqrt(d),m=((t-l[0])*h+(s-l[2])*u)/d,g=.8/f;if(m<(o===0?0:-g)||m>(o+2===r.p.length?1:1+g)||Math.hypot(l[0]+h*m-t,l[2]+u*m-s)>r.half)continue;const x=l[1]+(c[1]-l[1])*Math.min(1,Math.max(0,m));if(Math.abs(x-n)<1.5)return!0}return!1})}class nh{pos=[];col=[];aux=[];idx=[];quad(e,t,n,s,r,a,o=[[0,0],[0,0],[0,0],[0,0]]){const l=this.pos.length/3;for(const[_,v]of[e,t,n,s].entries())this.pos.push(v[0],v[1],v[2]),this.col.push(...r),this.aux.push(o[_][0],o[_][1]);const c=t[0]-e[0],h=t[1]-e[1],u=t[2]-e[2],d=n[0]-e[0],f=n[1]-e[1],m=n[2]-e[2],g=h*m-u*f,x=u*d-c*m,p=c*f-h*d;g*(a[0]-e[0])+x*(a[1]-e[1])+p*(a[2]-e[2])>=0?this.idx.push(l,l+1,l+2,l,l+2,l+3):this.idx.push(l,l+2,l+1,l,l+3,l+2)}geometry(){const e=new Ot;return e.setAttribute("position",new wt(this.pos,3)),e.setAttribute("color",new wt(this.col,3)),e.setAttribute("aWay",new wt(this.aux,2)),e.setIndex(this.idx),e.computeVertexNormals(),e.computeBoundingSphere(),e}}const ds=[.66,.645,.61],_v=[.42,.41,.39],Fi=[.74,.73,.7];function yv(i,e){const t=i.ways??[],n=new Qt,s=new nh,r=new nh;t.forEach((l,c)=>{const h=vv(l.p),u=(g,x,p)=>{const y=l.p[g];return[y[0]+h[g][0]*l.half*x,y[1]+p,y[2]+h[g][1]*l.half*x]},d=(g,x)=>[l.p[g][0],l.p[g][1]+x,l.p[g][2]];if(l.k==="deck"){for(let g=0;g+1<l.p.length;g++){for(const x of[1,-1]){const p=u(g,x*3,-.6);s.quad(u(g,x,-1.2),u(g+1,x,-1.2),u(g+1,x,.02),u(g,x,.02),ds,p)}s.quad(u(g,1,-1.2),u(g+1,1,-1.2),u(g+1,-1,-1.2),u(g,-1,-1.2),_v,d(g,-1.2-5));for(const x of[1,-1]){const p=u(g,x*.98,0),y=u(g+1,x*.98,0),_=[(p[0]+y[0])/2,(p[1]+y[1])/2,(p[2]+y[2])/2];if(to(t,c,_[0],_[1],_[2])||to(t,c,p[0],p[1],p[2])&&to(t,c,y[0],y[1],y[2]))continue;const v=(M,T,D)=>u(M,x*(1-T/l.half),D),E=d(g,1.5);s.quad(v(g,0,0),v(g+1,0,0),v(g+1,0,Pn),v(g,0,Pn),Fi,u(g,x*2,.5)),s.quad(v(g,0,Pn),v(g+1,0,Pn),v(g+1,.18,Pn),v(g,.18,Pn),Fi,d(g,10)),s.quad(v(g,.18,Pn),v(g+1,.18,Pn),v(g+1,.3,.32),v(g,.3,.32),Fi,E),s.quad(v(g,.3,.32),v(g+1,.3,.32),v(g+1,.42,.02),v(g,.42,.02),Fi,E)}}for(const[g,x]of[[0,l.shut[0]],[l.p.length-1,l.shut[1]]]){const p=g===0?1:l.p.length-2,y=[2*l.p[g][0]-l.p[p][0],l.p[g][1],2*l.p[g][2]-l.p[p][2]];x?(s.quad(u(g,1,-1.2),u(g,-1,-1.2),u(g,-1,Pn),u(g,1,Pn),Fi,y),s.quad(u(g,1,-1.2),u(g,-1,-1.2),u(g,-1,Pn),u(g,1,Pn),Fi,l.p[p])):l.p[g][1]-e.at(l.p[g][0],l.p[g][2])>1.5&&s.quad(u(g,1,-1.2),u(g,-1,-1.2),u(g,-1,0),u(g,1,0),ds,y)}return}const f=l.clear??5.6;let m=0;for(let g=0;g+1<l.p.length;g++){const x=Math.hypot(l.p[g+1][0]-l.p[g][0],l.p[g+1][2]-l.p[g][2]),p=d(g,f*.5);for(const y of[1,-1])r.quad(u(g,y,-.25),u(g+1,y,-.25),u(g+1,y,f),u(g,y,f),[.78,.77,.72],p,[[m,0],[m+x,0],[m+x,1],[m,1]]);r.quad(u(g,1,f),u(g+1,1,f),u(g+1,-1,f),u(g,-1,f),[.3,.3,.31],p,[[m,2],[m+x,2],[m+x,3],[m,3]]),m+=x}for(const g of[0,l.p.length-1]){const x=g===0?1:l.p.length-2,p=[2*l.p[g][0]-l.p[x][0],l.p[g][1]+2,2*l.p[g][2]-l.p[x][2]];let y=l.p[g][1]+f+xv;for(let D=0;D<Math.min(4,l.p.length);D++){const b=l.p[g===0?D:l.p.length-1-D];y=Math.max(y,e.at(b[0],b[2])+.5)}const _=y,v=(l.half+gv)/l.half,E=(D,b)=>u(g,D,b);s.quad(E(1,-.3),E(v,-.3),E(v,_-l.p[g][1]),E(1,_-l.p[g][1]),ds,p),s.quad(E(-1,-.3),E(-v,-.3),E(-v,_-l.p[g][1]),E(-1,_-l.p[g][1]),ds,p),s.quad(E(1,f),E(-1,f),E(-1,_-l.p[g][1]),E(1,_-l.p[g][1]),ds,p);const M=[l.p[x][0],0,l.p[x][2]],T=(D,b)=>[D[0]+(M[0]-l.p[g][0])*b,D[1],D[2]+(M[2]-l.p[g][2])*b];s.quad(E(v,_-l.p[g][1]),E(-v,_-l.p[g][1]),T(E(-v,_-l.p[g][1]),.25),T(E(v,_-l.p[g][1]),.25),Fi,[l.p[g][0],_+10,l.p[g][2]])}});for(const l of i.piers??[]){const c=l.ax*l.a,h=l.az*l.a,u=-l.az*l.c,d=l.ax*l.c,f=.82,m=[[-1,-f],[-f,-1],[f,-1],[1,-f],[1,f],[f,1],[-f,1],[-1,f]].map(([g,x])=>[l.x+c*g+u*x,l.z+h*g+d*x]);for(let g=0;g<m.length;g++){const x=m[g],p=m[(g+1)%m.length],y=(x[0]+p[0])/2*2-l.x,_=(x[1]+p[1])/2*2-l.z;s.quad([x[0],l.y0,x[1]],[p[0],l.y0,p[1]],[p[0],l.y1,p[1]],[x[0],l.y1,x[1]],ds,[y,(l.y0+l.y1)/2,_])}}const a=li(new Nn({vertexColors:!0}),i,{key:"p2p-structure",color:`
      {
        float streak = p2pNoise(vec2(vWorld.x * 0.9 + vWorld.z * 0.7, vWorld.y * 0.08)) * p2pNoise(vec2(vWorld.x * 3.1 - vWorld.z * 2.3, vWorld.y * 0.4));
        diffuseColor.rgb *= 0.86 + 0.22 * p2pNoise(vWorld.xz * 0.35 + vWorld.y * 0.2) - 0.18 * streak;
      }`}),o=new It(s.geometry(),a);if(o.castShadow=!0,o.receiveShadow=!0,o.name="decks and piers",n.add(o),r.pos.length){const l=new Cn({vertexColors:!0,vertexShader:`
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
        }`}),c=new It(r.geometry(),l);c.name="tunnels",n.add(c)}return n.name="structures",{group:n,count:{decks:t.filter(l=>l.k==="deck").length,tunnels:t.filter(l=>l.k==="tunnel").length,piers:i.piers?.length??0}}}const ta=3.2;function Mv(i){const e=new Map;for(const t of i.fronts??[])e.set(t.b*4096+t.e,t);return(t,n)=>e.get(t*4096+n)}const ih=360,no=1.6;class wv{constructor(e,t){this.page=e;const n=e.fronts??[],s=new Ai(1,1),r=new Fs({color:2372412,metalness:.85,roughness:.08,envMap:t,envMapIntensity:1.2,transparent:!0,opacity:.5,side:gn,depthWrite:!1}),a=new Map;n.forEach((h,u)=>{const d=`${Math.floor(h.p0[0]/400)}_${Math.floor(h.p0[1]/400)}`;let f=a.get(d);f||a.set(d,f=[]),f.push(u)});const o=new Jt,l=new k,c=new k;for(const h of a.values()){const u=new Xi(s,r,h.length);h.forEach((d,f)=>{const m=n[d],g=Math.hypot(m.p1[0]-m.p0[0],m.p1[1]-m.p0[1]);o.setFromUnitVectors(new k(0,0,1),new k(m.n[0],0,m.n[1]));const x=Math.min(m.y,Hi().at(m.p0[0],m.p0[1]),Hi().at(m.p1[0],m.p1[1])),p=m.y+ta-x;c.set((m.p0[0]+m.p1[0])/2+m.n[0]*.04,x+p/2,(m.p0[1]+m.p1[1])/2+m.n[1]*.04),u.setMatrixAt(f,this.m.compose(c,o,l.set(g,p,1))),this.glass[d]={mesh:u,slot:f}}),u.instanceMatrix.needsUpdate=!0,u.computeBoundingSphere(),u.matrixAutoUpdate=!1,this.group.add(u),this.cells.push({mesh:u,x:u.boundingSphere.center.x,z:u.boundingSphere.center.z})}this.shards=new Xi(new Ai(1,1),new Us({color:13625070,transparent:!0,opacity:.75,side:gn,depthWrite:!1}),ih),this.shards.count=0,this.shards.frustumCulled=!1,this.group.add(this.shards)}group=new Qt;glass=[];cells=[];shards;live=[];broken=new Set;m=new Lt;raze(e){}shatter(e,t){const n=this.page.fronts?.[e],s=this.glass[e];if(!n||!s||this.broken.has(e))return;this.broken.add(e),s.mesh.getMatrixAt(s.slot,this.m),s.mesh.setMatrixAt(s.slot,this.m.makeScale(0,0,0)),s.mesh.instanceMatrix.needsUpdate=!0;const r=Math.hypot(n.p1[0]-n.p0[0],n.p1[1]-n.p0[1]);for(let a=0;a<90&&this.live.length<ih;a++){const o=Math.random(),l=Math.random()*ta,c=-(.25+Math.random()*.6)*Math.min(18,t);this.live.push({p:new k(n.p0[0]+(n.p1[0]-n.p0[0])*o,n.y+l,n.p0[1]+(n.p1[1]-n.p0[1])*o),v:new k(n.n[0]*c+(Math.random()-.5)*4,1+Math.random()*3,n.n[1]*c+(Math.random()-.5)*4),spin:new k(Math.random()*12-6,Math.random()*12-6,Math.random()*12-6),rot:new zn(Math.random()*6,Math.random()*6,0),age:0,size:.08+Math.random()*.22+(r>8?.05:0)})}}reset(){const e=this.page.fronts??[],t=new Jt,n=new k,s=new k;for(const r of this.broken){const a=e[r],o=this.glass[r],l=Math.hypot(a.p1[0]-a.p0[0],a.p1[1]-a.p0[1]);t.setFromUnitVectors(new k(0,0,1),new k(a.n[0],0,a.n[1]));const c=Math.min(a.y,Hi().at(a.p0[0],a.p0[1]),Hi().at(a.p1[0],a.p1[1])),h=a.y+ta-c;s.set((a.p0[0]+a.p1[0])/2+a.n[0]*.04,c+h/2,(a.p0[1]+a.p1[1])/2+a.n[1]*.04),o.mesh.setMatrixAt(o.slot,this.m.compose(s,t,n.set(l,h,1))),o.mesh.instanceMatrix.needsUpdate=!0}this.broken.clear(),this.live.length=0,this.shards.count=0}update(e,t){for(const r of this.cells)r.mesh.visible=Math.hypot(r.x-t.x,r.z-t.z)<700;if(!this.live.length&&!this.shards.count)return;const n=new Jt,s=new k;this.live=this.live.filter(r=>(r.age+=e)<no),this.live.forEach((r,a)=>{r.v.y-=9.81*e,r.p.addScaledVector(r.v,e);const o=this.floorAt(r.p);r.p.y<o&&(r.p.y=o,r.v.set(r.v.x*.4,0,r.v.z*.4),r.spin.multiplyScalar(.2)),r.rot.x+=r.spin.x*e,r.rot.y+=r.spin.y*e,r.rot.z+=r.spin.z*e;const l=Math.min(1,(no-r.age)/(no/3));this.shards.setMatrixAt(a,this.m.compose(r.p,n.setFromEuler(r.rot),s.setScalar(r.size*l)))}),this.shards.count=this.live.length,this.shards.instanceMatrix.needsUpdate=!0}floorAt(e){let t=-1e9;for(const n of this.broken){const s=this.page.fronts[n];Math.abs(s.p0[0]-e.x)<30&&Math.abs(s.p0[1]-e.z)<30&&(t=Math.max(t,s.y+.05))}return t}}const Ks=12,na={WALL:0,GLAZING:1,PIER:2},Nl={HEADER:9};function bv(i,e,t,n){const s=[];for(let r=0;r+1<i.length;r++)s.push([]);if(!t)return s;for(const r of t.walls){let a=-1,o=.3,l=0,c=0;for(let _=0;_+1<i.length;_++){let[v,E]=i[_],[M,T]=i[_+1];const D=Math.hypot(M-v,T-E);if(D<.05)continue;e>0&&([v,M]=[M,v],[E,T]=[T,E]);const b=(M-v)/D,w=(T-E)/D,P=(N,U)=>Math.abs(-(N-v)*w+(U-E)*b),F=(N,U)=>(N-v)*b+(U-E)*w,I=Math.max(P(r.x0,r.z0),P(r.x1,r.z1)),H=F(r.x0,r.z0),z=F(r.x1,r.z1);I<o&&Math.min(H,z)>-.3&&Math.max(H,z)<D+.3&&(o=I,a=_,l=H,c=z)}if(a<0)continue;const h=c>=l?1:-1,u=n[r.kind]??"",d=(_,v)=>{const E=l+h*_,M=l+h*v;return[Math.min(E,M),Math.max(E,M)]},[f,m]=r.door>=0?d(r.d0,r.d1):[0,0],[g,x]=r.l1>r.l0?d(r.l0,r.l1):[0,0],[p,y]=r.door2>=0?d(r.e0,r.e1):[0,0];s[a].push({u0:Math.min(l,c),u1:Math.max(l,c),r0:l,r1:c,wall:r,d0:f,d1:m,door:r.door>=0?r.doorWhat:0,e0:p,e1:y,door2:r.door2>=0?r.door2What:0,l0:g,l1:x,bay:u==="glazing"?na.GLAZING:u==="pier"||u==="column"||u==="lintel"?na.PIER:na.WALL,dress:r.role===1?Nl.HEADER:t.arche+1})}for(const r of s)r.sort((a,o)=>a.u0-o.u0);return s}function Sv(i){const[e,t]=i.door2?[i.e0,i.e1]:[i.l0,i.l1],n=Math.abs(i.r1-i.r0),s=i.dress===Nl.HEADER;return[i.r0,i.r1,s?n/Math.max(1,Math.round(n/3)):i.wall.bay,s?0:i.wall.pier,i.d0,i.d1,i.door+8*i.door2,i.wall.every,e,t,i.bay,i.dress]}const Ev=7.6,Av=(i,e,t)=>i<=1&&e&&t>=4.4;function Tv(i,e,t,n){const s=[];if(e=Math.max(e,.3),n=Math.max(n,1),t>.01){const r=n*e+t,a=Math.max(1,Math.floor((i-t)/r+.5));for(let o=0;o<a;o++){const l=o*r+t+n*e*.5;s.push({a:o*r,b:o*r+t,pier:!0,k:o*n,lot:l});for(let c=0;c<n;c++)s.push({a:o*r+t+c*e,b:o*r+t+(c+1)*e,pier:!1,k:o*n+c,lot:l})}s.push({a:a*r,b:i,pier:!0,k:a*n,lot:(a-1)*r+t+n*e*.5})}else{const r=Math.max(1,Math.floor(i/e+.5)),a=Math.max(1,Math.floor(Ev/e+.5));for(let o=0;o<r;o++){const l=Math.floor(o/a);s.push({a:o*e,b:o===r-1?i:(o+1)*e,pier:!1,k:o,lot:.5*(l*a*e+Math.min((l+1)*a*e,i))})}}return s}function Rv(i,e,t,n,s){return s?[{a:0,b:i,pier:!1,k:0,lot:i/2}]:Tv(i,e,t,n)}function Cv(i){const e=.04*i,t=.27*i;return{b0:e,b1:t,b2:i-t,b3:i-e,deep:Math.min(.6,.2*i)}}const Lv=(i,e)=>i%2===0&&e>=2.2,hl={VICTORIAN:0,STUCCO:1,MASONRY:2,OFFICE:3,GLASS:4,PRECAST:5,SHED:6},Pv=[{x:67,z:-136,high:260,shape:"pyramid",style:hl.PRECAST,color:14472904},{x:-28,z:212,high:237,style:hl.OFFICE,color:5980216}];class Dv{cells=new Map;size=40;constructor(e){for(const t of e.roads){if(t.b)continue;const n=/^(primary|secondary|tertiary|trunk)$/.test(t.c)?1:/^(residential|unclassified|living_street|pedestrian)$/.test(t.c)?2:t.c==="service"?3:0;if(n)for(let s=0;s+1<t.p.length;s++){const[r,a]=t.p[s],[o,l]=t.p[s+1],c={ax:r,az:a,bx:o,bz:l,reach:t.w/2+(t.s??0),kind:n},h=Math.floor(Math.min(r,o)/this.size),u=Math.floor(Math.max(r,o)/this.size),d=Math.floor(Math.min(a,l)/this.size),f=Math.floor(Math.max(a,l)/this.size);for(let m=h;m<=u;m++)for(let g=d;g<=f;g++){const x=`${m}_${g}`;let p=this.cells.get(x);p||(p=[],this.cells.set(x,p)),p.push(c)}}}}facing(e,t,n,s){let r=0,a=1/0;const o=Math.floor(e/this.size),l=Math.floor(t/this.size);for(let c=o-1;c<=o+1;c++)for(let h=l-1;h<=l+1;h++)for(const u of this.cells.get(`${c}_${h}`)??[]){const d=u.bx-u.ax,f=u.bz-u.az,m=d*d+f*f,g=m>0?Math.max(0,Math.min(1,((e-u.ax)*d+(t-u.az)*f)/m)):0,x=u.ax+d*g-e,p=u.az+f*g-t,y=Math.hypot(x,p);if(y>u.reach+7||x*n+p*s<y*.6)continue;const _=y+(u.kind===3?12:0);_<a&&(a=_,r=u.kind)}return r}}function Iv(i,e,t){const n=[];let s=!1,r=!1;for(let a=0;a+1<e.length;a++){const[o,l]=e[a],[c,h]=e[a+1],u=Math.hypot(c-o,h-l);if(u<2.2){n.push(0);continue}const d=(h-l)/u*t,f=-(c-o)/u*t,m=i.facing((o+c)/2,(l+h)/2,d,f);n.push(m),m===1?s=!0:m===2&&(r=!0)}return{faces:n,commercial:s,residential:r}}function Uv(i,e,t,n,s,r,a){const o=hl,l=Nt(i*3+1),c=Pv.find(u=>Math.hypot(u.x-e,u.z-t)<30&&Math.abs(u.high-n)<12);let h;return c?.style!=null?h=c.style:n>=45?h=l<.36?o.GLASS:l<.62?o.OFFICE:l<.88||n>110?o.PRECAST:o.MASONRY:n>=20?h=r||s>700?l<.48?o.MASONRY:l<.74?o.OFFICE:l<.88?o.PRECAST:o.STUCCO:l<.55?o.STUCCO:l<.8?o.MASONRY:o.PRECAST:s>1400&&n<11?h=o.SHED:r&&!a?h=l<.5?o.MASONRY:l<.82?o.STUCCO:o.VICTORIAN:s<=460?h=l<.55?o.VICTORIAN:l<.92?o.STUCCO:o.MASONRY:h=l<.62?o.STUCCO:l<.9?o.MASONRY:o.VICTORIAN,{style:h,mark:c}}function Mf(i,e,t,n){if(!n.length)return[[0,i,e,t]];const s=new Set([0,i]);for(const o of n)s.add(Math.max(0,Math.min(i,o.u0))),s.add(Math.max(0,Math.min(i,o.u1)));const r=[...s].sort((o,l)=>o-l),a=[];for(let o=0;o+1<r.length;o++){const l=r[o],c=r[o+1],h=(l+c)/2;if(c-l<.02)continue;let u=e;for(const f of n)h>f.u0&&h<f.u1&&(u=Math.max(u,f.y));if(t-u<.08)continue;const d=a[a.length-1];d&&Math.abs(d[1]-l)<1e-6&&Math.abs(d[2]-u)<1e-6?d[1]=c:a.push([l,c,u,t])}return a}function wf(i,e,t,n,s){const r=Math.hypot(t-i,n-e),a=[];if(r<.05)return a;const o=(t-i)/r,l=(n-e)/r;for(const c of s){const h=(c.x0+c.x1)/2-i,u=(c.z0+c.z1)/2-e,d=h*o+u*l;if(Math.abs(-h*l+u*o)>.25||d<-.1||d>r+.1)continue;const f=(c.x0-i)*o+(c.z0-e)*l,m=(c.x1-i)*o+(c.z1-e)*l;a.push({u0:Math.min(f,m),u1:Math.max(f,m),y:c.y})}return a}function sh(i,e,t){const n=i.geometry.getAttribute("position"),s=n.array,r=s.slice(e*3,t*3);for(let a=e;a<t;a++)s[a*3]=s[e*3],s[a*3+1]=s[e*3+1],s[a*3+2]=s[e*3+2];return n.addUpdateRange(e*3,(t-e)*3),n.needsUpdate=!0,r}function rh(i,e,t){const n=i.geometry.getAttribute("position");n.array.set(t,e*3),n.addUpdateRange(e*3,t.length),n.needsUpdate=!0}const nr=512,Fv=`
  attribute vec4 aux; attribute vec4 ext;
  varying vec4 vAux; flat varying vec4 vExt; varying vec3 vWallN;
  #ifdef P2P_BORN
    varying vec3 vBorn; varying vec3 vEyeBorn; flat varying mat3 vTurn;
  #endif`,Nv=`
  vAux = aux; vExt = ext; vWallN = normal;
  #ifdef P2P_BORN
    // where this was built (its mesh is in the building's own place; the model matrix is where it has fallen to)
    vBorn = position;
    vTurn = mat3( modelMatrix );
    vEyeBorn = transpose( vTurn ) * ( cameraPosition - modelMatrix[ 3 ].xyz );
  #endif`,zv=`
  varying vec4 vAux; flat varying vec4 vExt; varying vec3 vWallN;
  uniform highp sampler2D uFace; uniform float uMark;
  #ifdef P2P_BORN
    varying vec3 vBorn; varying vec3 vEyeBorn; flat varying mat3 vTurn;
    #define P2P_AT vBorn
    #define P2P_EYE vEyeBorn
    #define P2P_TURN( v ) ( vTurn * ( v ) )
  #else
    #define P2P_AT vWorld
    #define P2P_EYE cameraPosition
    #define P2P_TURN( v ) ( v )
  #endif
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
  }`,ah=`
  {
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
  }`,Ov=`
  vec3 p2pN = normalize(vWallN);     // the normal the lights use, in the frame the wall was built in: turned where the wall is modelled in or out
  float p2pGlass = 0.0;              // how much of the pixel is glass
  float p2pMirror = 0.5;             // how much of a mirror that glass is
  vec3 p2pPaneTilt = vec3(0.0);      // no two panes are quite parallel
  float p2pUp = 0.0;                 // metres above the ground at this wall's foot
  vec3 p2pGlow = vec3(0.0);          // light from inside, through the glass
  float p2pMark = 0.0;               // a probe's: 1 where what it asked to have marked is painted (uMark 1: a door a car takes; 2: a lobby's lit glass; 3: a house's front door)
  {
    // every derivative, here, outside any branch
    vec2 fwp = vec2(fwidth(vAux.x), fwidth(P2P_AT.y));
    float fwAuxY = fwidth(vAux.y);
    float fw = max(fwp.x, fwp.y);
    float style = floor(vExt.x + 0.0001), seed = fract(vExt.x);
    float flagsAll = floor(vExt.y + 0.5), faceIdx = floor(flagsAll / 32.0), flags = flagsAll - faceIdx * 32.0;
    float front = mod(flags, 2.0), gk = mod(floor(flags * 0.5), 4.0), spire = mod(floor(flags / 8.0), 2.0), built = step(15.5, flags);
    float slope = vExt.z, datum = vExt.w;
    float u = vAux.x, gHere = vAux.y, len = vAux.z, roofY = vAux.w;
    vec3 N = normalize(vWallN);
    vec3 T = normalize(vec3(N.z, 0.0, -N.x) + vec3(1e-5, 0.0, 0.0));
    vec3 toEye = normalize(P2P_EYE - P2P_AT);
    vec2 lean = vec2(dot(toEye, T), toEye.y) / max(dot(toEye, N), 0.14);
    vec3 body = diffuseColor.rgb, col = body;
    float sharp = 1.0 - smoothstep(0.45, 1.25, fw);     // windows are still windows
    float fine = 1.0 - smoothstep(0.012, 0.05, fw);     // bricks, boards and joints are still there
    float mid = 1.0 - smoothstep(0.06, 0.22, fw);       // mouldings, signs
    p2pUp = P2P_AT.y - gHere;
    vec2 wp = vec2(u, P2P_AT.y);                         // the wall as a sheet of paper

    if (style < -0.5) {
      // ---- a roof: tar and gravel, patched, with the odd vent
      float n1 = p2pNoise(P2P_AT.xz * 0.5 + seed * 20.0), n2 = p2pNoise(P2P_AT.xz * 6.0);
      col *= 0.86 + 0.22 * n1 + 0.12 * (n2 - 0.5) * mid;
      vec2 cell = floor(P2P_AT.xz / 5.0), cf = fract(P2P_AT.xz / 5.0) * 5.0;
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
      } else if (style < 11.5) {
        // a hanging sign: a border, and marks down it that say nothing (aux: metres across, metres up, its width, its height)
        vec2 sp = vAux.xy, ss = vAux.zw, fs = vec2(fwp.x, fwAuxY);
        vec3 ink = dot(col, vec3(0.33)) > 0.25 ? vec3(0.06, 0.05, 0.05) : vec3(0.86, 0.80, 0.62);
        float border = 1.0 - p2pBox(sp, vec2(0.05), ss - 0.05, fs);
        float rows = floor(ss.y / 0.36);
        vec2 mc = vec2((sp.x - ss.x * 0.5) / 0.30, (sp.y - (ss.y - rows * 0.36) * 0.5) / 0.36);
        float marks = step(abs(mc.x), 0.5) * step(0.0, mc.y) * step(mc.y, rows) * p2pBox(fract(mc + vec2(0.5, 0.0)), vec2(0.18, 0.16), vec2(0.82, 0.84), fs / vec2(0.30, 0.36)) * step(0.2, p2pHash(vec2(floor(mc.y), seed * 77.0)));
        col = mix(col, ink, max(border * 0.8, marks) * mid);
        p2pGlow = col * 0.10;
      } else {
        // where a building was cut through (a part of one that has come down, walls.ts): the inside, in section.
        // aux: metres along the cut, the height of the part's underside, the cut's length, the roof's height.
        // Seen from the side: the edge of each floor, rooms between them in the colours rooms have, the end of a
        // wall every few metres, a ceiling's shade. Seen from below (the cut is the storey that is gone): joists.
        float h = P2P_AT.y - vAux.y, down = roofY - P2P_AT.y;
        if (abs(N.y) > 0.5) {
          col = vec3(0.34, 0.30, 0.25) * (0.9 + 0.2 * p2pNoise(P2P_AT.xz * 2.0));
          col *= 1.0 - step(0.82, fract(dot(P2P_AT.xz, vec2(0.731, 0.682)) / 0.42)) * 0.45 * mid;
        } else {
          float sh = 3.1, fl = floor(down / sh), fy = down - fl * sh;        // storeys hang from the roof, as the wall's do
          vec2 room = vec2(floor((u + seed * 9.0) / 4.2), fl);
          float rh = p2pHash(room + seed * 31.0);
          vec3 wallIn = rh < 0.45 ? vec3(0.84, 0.80, 0.70) : rh < 0.7 ? vec3(0.72, 0.78, 0.74) : rh < 0.88 ? vec3(0.80, 0.74, 0.66) : vec3(0.66, 0.72, 0.80);
          col = wallIn * (0.52 + 0.22 * smoothstep(0.0, sh, sh - fy));           // darker up under the ceiling: lit from below now
          col = mix(col, vec3(0.20, 0.17, 0.14), p2pSpan(fy, sh - 0.22, sh - 0.12, fwp.y) * 0.8 * mid);   // a skirting's line
          float stub = p2pLine(fract((u + seed * 9.0) / 4.2) * 4.2 - 2.1, 0.07, fwp.x);
          col = mix(col, vec3(0.80, 0.78, 0.72), stub * mid);                    // the end of a wall between two rooms
          float slab = max(p2pSpan(fy, 0.0, 0.26, fwp.y), p2pSpan(h, -0.1, 0.24, fwp.y));
          col = mix(col, vec3(0.62, 0.60, 0.56) * (0.9 + 0.2 * p2pNoise(wp * 5.0)), slab);   // the edge of a floor, and of the one it was cut at
          col = mix(col, vec3(0.45, 0.36, 0.26), p2pSpan(fy, 0.26, 0.48, fwp.y) * step(0.5, fract(u / 0.4)) * fine);   // joist ends under it
        }
      }
    } else {
      // ---- a wall. First what kind of building it is a wall of.
      float floorH = 3.2, groundH = 3.9, bayW = 3.4, depth = 0.16, cap = 0.8, lot = 0.0, sparse = 0.0;
      vec2 wlo = vec2(0.24, 0.27), whi = vec2(0.76, 0.84);
      vec3 trim = vec3(0.78, 0.76, 0.70);
      vec3 tint = vec3(0.030, 0.038, 0.045);
      float lotted = step(style, 1.5) * front * step(4.4, len);   // houses and flats: a bay to each lot
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
      if (gk > 0.5 && gk < 1.5) groundH = max(groundH, 4.15);        // a wall with a shop in it has a tall ground floor

      // what the core says of this wall's ground floor (face.ts 'record'): three texels
      vec4 f0 = vec4(0.0), f1 = vec4(0.0), f2 = vec4(0.0);
      if (faceIdx > 0.5) {
        int fi = int(faceIdx + 0.5);
        ivec2 at = ivec2((fi % ${nr}) * 3, fi / ${nr});
        f0 = texelFetch(uFace, at, 0); f1 = texelFetch(uFace, at + ivec2(1, 0), 0); f2 = texelFetch(uFace, at + ivec2(2, 0), 0);
      }

      // Which bay or pier of the core's wall this is (core/src/walls.rs 'span_of'; storeys.ts 'bays' is the same
      // sum): the ground floor is painted by it, and the storeys above stand over it. cB0, cWide: where the bay
      // starts along the core's wall and how wide it is; cK: which bay it is, counting bays alone; cLot: the
      // middle of the lot it is in (a lot is a whole number of bays: a house's floors step with the street a lot
      // at a time, never through a window).
      float dress = f2.w;
      float cDir = f0.y >= f0.x ? 1.0 : -1.0, cL = abs(f0.y - f0.x), cS = clamp((u - f0.x) * cDir, 0.0, cL);
      float cBay = max(f0.z, 0.3), cB0 = 0.0, cWide = max(cL, 0.3), cPier = 0.0, cK = 0.0, cLot = cL * 0.5;
      float laid = step(0.5, dress) * step(0.3, cL);
      if (laid > 0.5 && (f2.z < 1.5 || dress > 8.5)) {
        float cp = f0.w, every = max(f1.w, 1.0);
        if (cp > 0.01 && dress < 8.5) {
          float per = every * cBay + cp, groups = max(1.0, floor((cL - cp) / per + 0.5)), g = floor(cS / per), t = cS - g * per;
          if (g > groups - 0.5) { cPier = 1.0; cB0 = groups * per; cWide = cp; cK = groups * every; g = groups - 1.0; }
          else if (t < cp) { cPier = 1.0; cB0 = g * per; cWide = cp; cK = g * every; }
          else { float j = min(floor((t - cp) / cBay), every - 1.0); cB0 = g * per + cp + j * cBay; cWide = cBay; cK = g * every + j; }
          cLot = g * per + cp + every * cBay * 0.5;
        } else {
          float n = max(1.0, floor(cL / cBay + 0.5)), k = min(floor(cS / cBay), n - 1.0);
          cB0 = k * cBay; cWide = k > n - 1.5 ? cL - cB0 : cBay; cK = k;
          float lotBays = max(1.0, floor(7.6 / cBay + 0.5)), lk = floor(k / lotBays);
          cLot = 0.5 * (lk * lotBays * cBay + min((lk + 1.0) * lotBays * cBay, cL));
        }
      }
      float cLow = min(f0.x + cDir * cB0, f0.x + cDir * (cB0 + cWide));     // where this bay starts, in metres along the page's wall

      // modules along the wall, floors up it: the style's own where the core says nothing of the wall, else its
      // bays, each cut into as many of the style's modules as fit
      float nb = max(1.0, floor(len / bayW + 0.5)), bw = len / nb;
      float mi = min(floor(u / bw), nb - 1.0), mx = u - mi * bw;
      float lotAt = (mi + 0.5) * bw;                                   // the middle of this lot, metres along
      float ironNb = nb, ironBw = bw;                                  // (a fire escape keeps the style's own modules)
      float overPier = 0.0, bayOdd = 0.0;
      if (laid > 0.5) {
        float sub = max(1.0, floor(cWide / bayW + 0.5));
        bw = cWide / sub;
        float j = min(floor((u - cLow) / bw), sub - 1.0);
        mx = u - cLow - j * bw;
        mi = floor(cLow * 2.0 + 0.5) * 8.0 + j;
        overPier = cPier; bayOdd = mod(cK, 2.0);
        lotAt = f0.x + cDir * cLot;
      }
      float gLot = gHere + slope * (lotAt - u);                        // the ground at the middle of this lot
      float base = mix(datum, gLot, lot);
      float y = P2P_AT.y - base, tall = roofY - base;
      float nF = max(0.0, floor((tall - groundH - cap) / floorH + 0.35));
      float fH = nF > 0.5 ? (tall - groundH - cap) / nF : floorH;
      float fl = (y - groundH) / fH, fi = floor(fl), fy = (fl - fi) * fH;
      float upper = step(groundH, y) * step(fi, nF - 0.5);
      float capZone = step(tall - cap, y);
      float wseed = p2pHash(vec2(mi, fi) + seed * 61.0);

      // ---- the wall's own surface
      float streaks = smoothstep(0.5, 0.9, p2pNoise(vec2(u * 2.3 + seed * 30.0, P2P_AT.y * 0.11)));
      col *= 0.95 + 0.10 * p2pNoise(wp * 0.35 + seed * 9.0) - 0.07 * streaks;
      if (style < 0.5) {
        // painted boards
        col *= 1.0 - p2pLine(fract(P2P_AT.y / 0.15) * 0.15 - 0.075, 0.011, fwp.y) * 0.26 * fine;
      } else if (style < 1.5) {
        col *= 0.96 + 0.08 * p2pNoise(wp * 9.0) * fine;
      } else if (style < 2.5) {
        // brick where the wall is red or buff, cut stone where it is pale
        float pale = step(0.34, body.b);
        vec2 unit = mix(vec2(0.22, 0.075), vec2(0.9, 0.42), pale);
        float row = floor(P2P_AT.y / unit.y);
        vec2 bc = vec2(u / unit.x + 0.5 * mod(row, 2.0), P2P_AT.y / unit.y);
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
      // 0 a window; 2 a garage door; 3 glass from the floor up; 5 a street
      // door's pair of leaves; 6 the door at a back; 7 a loading door's shutter;
      // 8 a house's front door
      float doorKind = 0.0;
      float unitId = mi;                                       // which lot or bay this is, for what differs from one to the next
      float lobbyLit = 0.0;                                    // behind this glass is a tower's lobby

      // ---- the storeys above the ground floor
      if (upper > 0.5 && spire < 0.5) {
        vec2 p = vec2(mx, fy), lo = wlo * vec2(bw, fH), hi = whi * vec2(bw, fH);
        float has = 1.0;
        if (lotted > 0.5 && laid > 0.5) {
          // a house's front over the core's bays: every other bay stands out as a bay window of three faces, each
          // with a window; a bay between has one window over its middle (storeys.ts 'bayWindow' has the numbers)
          float W = bw, yl = 0.78, yh = min(fH - 0.5, 2.75);
          if (bayOdd < 0.5 && W >= 2.2) {
            float b0 = 0.04 * W, b1 = 0.27 * W, b2 = W - b1, b3 = W - b0;
            float facet = mx < b1 ? -1.0 : mx > b2 ? 1.0 : 0.0;
            // where the bay is not built (far off) its faces are painted: the normal turned
            p2pN = normalize(N + T * facet * 0.95 * (1.0 - built) * step(b0, mx) * step(mx, b3));
            col = mix(col, trim, (p2pLine(mx - b1, 0.06, fwp.x) + p2pLine(mx - b2, 0.06, fwp.x)) * mid);
            if (mx < b1) { lo = vec2(b0 + 0.12, yl); hi = vec2(b1 - 0.10, yh); }
            else if (mx < b2) { lo = vec2(b1 + 0.20, yl); hi = vec2(b2 - 0.20, yh); }
            else { lo = vec2(b2 + 0.10, yl); hi = vec2(b3 - 0.12, yh); }
          } else {
            lo = vec2(W * 0.5 - min(0.55, W * 0.3), yl); hi = vec2(W * 0.5 + min(0.55, W * 0.3), yh);
            has = step(1.2, W);
          }
        } else if (lotted > 0.5) {
          // (a wall the core says nothing of) a lot: the bay's three faces, each with a window, then one more window beside it
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
          // (the first floor's entry was a door at the head of painted steps here: the way in is where the plan
          // has it now, at the ground, and this is a window like the ones over it)
          lo.x *= k; hi.x *= k;
        } else {
          has = step(sparse, wseed);
          // offices: a column cover every fourth module stands in front of the glass (where the core lays the wall
          // out, the cover is over its columns: below)
          if (style > 2.5 && style < 3.5 && laid < 0.5 && mod(mi, 4.0) < 0.5) has = 0.0;
          // a shed's high windows: one to two bays
          if (style > 5.5 && laid > 0.5 && bayOdd > 0.5) has = 0.0;
        }
        // over a pier or a column there is wall, not a window (a wall of glass runs on in front of its columns)
        if (overPier > 0.5 && (style < 3.5 || style > 4.5)) has = 0.0;
        if (has > 0.5) {
          p2pOpen(p, lo, hi, depth, lean, fwp, T, glass, reveal, p2pN, pane, paneSize);
          ${ah}
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
        col *= 1.0 - p2pLine(fract(P2P_AT.y / 3.6) * 3.6 - 1.8, 0.03, fwp.y) * 0.25 * mid;
        glass = 0.0; reveal = 0.0;
      }

      // ---- the ground floor: what the core says is there
      if (y < groundH && upper < 0.5) {
        float gy = P2P_AT.y - gHere;                        // above the ground right here, until a bay says where its middle is
        if (dress > 0.5 && dress < 8.5) {
          // the bay or pier this is, as laid out above
          float wide = cWide, isPier = cPier, lowU = cLow;
          if (f2.z > 1.5) isPier = 1.0;                     // a wall too short for a bay a car fits is all pier
          // the bay that is a door, and a second in the same wall (a house's front door beside its garage's): the
          // record's second stretch is that door's where the door's code says there is one, else a lobby's
          float what = mod(f1.z, 8.0), what2 = floor(f1.z / 8.0 + 0.01);
          float isDoor = step(0.5, what) * step(f1.x, u) * step(u, f1.y);
          if (isDoor > 0.5) { lowU = f1.x; wide = f1.y - f1.x; isPier = 0.0; }
          else if (what2 > 0.5 && u >= f2.x && u <= f2.y) { isDoor = 1.0; what = what2; lowU = f2.x; wide = f2.y - f2.x; isPier = 0.0; }
          gy = P2P_AT.y - (gHere + slope * (lowU + 0.5 * wide - u));   // a bay stands on the ground under its own middle
          unitId = floor(lowU * 2.0 + 0.5);
          vec2 p = vec2(u - lowU, gy);
          float bseed = p2pHash(vec2(unitId, seed * 61.0) + 4.0);
          // a bay whose middle lies in the stretch a tower's lobby is behind: glass, whatever the wall's other bays are
          float inLobby = step(what2, 0.5) * step(f2.x + 0.5, f2.y) * step(f2.x, lowU + 0.5 * wide) * step(lowU + 0.5 * wide, f2.y);
          if (isDoor > 0.5) {
            // ---- the bay that gives way as a door: a door, as wide as the bay lets a car through; a house's
            // front door (5) a leaf a person uses, in the middle of its bay (face.ts 'leafIn' has the same numbers)
            float m = min(0.28, wide * 0.12);
            float top = min(what < 1.5 ? 2.35 : what < 2.5 ? 2.7 : what < 3.5 ? 2.3 : what < 4.5 ? 3.1 : 2.6, groundH - 0.2);
            vec2 lo = vec2(m, 0.0), hi = vec2(wide - m, top);
            if (what > 4.5 && wide > 1.5) { lo.x = wide * 0.5 - 0.56; hi.x = wide * 0.5 + 0.56; }
            p2pOpen(p, lo, hi, what < 1.5 ? 0.16 : what < 2.5 ? 0.32 : what < 3.5 ? 0.14 : what < 4.5 ? 0.2 : 0.24, lean, fwp, T, glass, reveal, p2pN, pane, paneSize);
            doorKind = what < 1.5 ? 2.0 : what < 2.5 ? 5.0 : what < 3.5 ? 6.0 : what < 4.5 ? 7.0 : 8.0;
            revealCol = body * 0.7;
            // a lintel over it, and its shade
            float lintel = p2pBox(p, vec2(lo.x - 0.14, top), vec2(hi.x + 0.14, top + 0.17), fwp) * step(style, 2.5);
            col = mix(col, trim, lintel * mid);
          } else if (isPier > 0.5) {
            // ---- what never gives way: a column between a tower's bays, a pier of brick
            float edge = (p2pLine(p.x, 0.035, fwp.x) + p2pLine(p.x - wide, 0.035, fwp.x)) * mid;
            if (dress > 3.5 && dress < 4.5) col = mix(col, body * 0.82, 0.85) * (1.0 - edge * 0.25);
            else col *= (1.04 - edge * 0.16) * (1.0 - step(wide, 1.2) * p2pLine(fract(gy / 0.6) * 0.6 - 0.3, 0.02, fwp.y) * 0.12 * mid);
          } else if (f2.z > 0.5 || inLobby > 0.5) {
            // ---- glazing: glass from the floor up, between the columns; lit where the lobby is behind it
            float top = max(groundH - 1.25, min(groundH - 0.45, 2.6));
            p2pOpen(p, vec2(0.05, 0.2), vec2(wide - 0.05, top), 0.5, lean, fwp, T, glass, reveal, p2pN, pane, paneSize);
            col = mix(col * 0.8, vec3(0.10, 0.10, 0.11), p2pSpan(gy, top + 0.05, top + 0.4, fwp.y) * mid);
            doorKind = 3.0; revealCol = body * 0.6; tint *= 0.7;
            lobbyLit = inLobby;
          } else if ((dress > 1.5 && dress < 5.5 || dress > 6.5 && dress < 7.5) && wide > 1.7 && bseed >= (front > 0.5 ? 0.12 : 0.55)) {
            // ---- a bay of wall with a room behind it (a house's, a block's, the rooms beside a shop, a hall of
            // assembly's): a window, in the middle of its bay as the windows over it are
            vec2 lo = vec2(wide * 0.5 - min(0.85, wide * 0.27), 0.95), hi = vec2(wide * 0.5 + min(0.85, wide * 0.27), clamp(groundH - 0.55, 1.9, 2.9));
            p2pOpen(p, lo, hi, depth, lean, fwp, T, glass, reveal, p2pN, pane, paneSize);
            ${ah}
          }
          col *= 1.0 - (1.0 - step(0.4, gy)) * 0.13 * (1.0 - glass);       // a base course, scuffed
        } else if (dress > 8.5) {
          // ---- the wall over a shopfront's glass (the glass is a pane of its own, fronts.ts): the head of the
          // opening in shade, a sign band whose marks say nothing, the course over it
          float sw = abs(f0.y - f0.x), sx = u - min(f0.x, f0.y);
          gy = P2P_AT.y - (gHere + slope * (min(f0.x, f0.y) + 0.5 * sw - u));
          unitId = floor(min(f0.x, f0.y) * 2.0 + 0.5);
          vec2 p = vec2(sx, gy);
          vec2 sh = p2pHash2(vec2(unitId, seed * 37.0) + 2.0);
          vec3 accent = 0.5 + 0.5 * cos(6.2832 * (sh.x * 0.9 + vec3(0.0, 0.33, 0.67)));
          accent = mix(accent * 0.5, vec3(0.16, 0.15, 0.14), step(0.45, sh.y)) + 0.03;
          float sign = p2pBox(p, vec2(0.2, 3.3), vec2(sw - 0.2, 3.86), fwp);
          vec3 signCol = mix(accent, vec3(0.82, 0.80, 0.72), step(0.6, sh.x));
          vec2 lc = vec2((sx - sw * 0.5) / 0.26, (gy - 3.41) / 0.34);
          float letters = step(abs(lc.x), min(sw * 1.1, 18.0)) * step(0.0, lc.y) * step(lc.y, 1.0) * step(0.28, p2pHash(vec2(floor(lc.x), unitId + seed * 99.0))) * p2pBox(fract(lc), vec2(0.15, 0.1), vec2(0.85, 0.9), fwp / vec2(0.26, 0.34));
          signCol = mix(signCol, dot(signCol, vec3(0.33)) > 0.4 ? vec3(0.08) : vec3(0.88, 0.85, 0.75), letters * mid);
          col = mix(col, signCol, sign * mid);
          col *= 1.0 - p2pSpan(gy, 3.18, 3.29, fwp.y) * 0.35 * mid;
          col = mix(col, trim, p2pSpan(gy, 3.92, 4.1, fwp.y) * mid * step(style, 2.5));
          col *= 1.0 - p2pSpan(gy, 3.86, 3.92, fwp.y) * 0.25 * mid;
        } else {
          col *= 1.0 - (1.0 - step(0.5, gy)) * 0.14;
        }
        col = mix(col, vec3(0.30, 0.29, 0.27), (1.0 - step(0.0, gy)) * (1.0 - glass));    // under the ground line: footing
      }

      // ---- what is in an opening
      float sashes = 0.0, opening = glass;
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
      } else if (doorKind < 2.5) {
        // a garage door: boards or panels, in a colour of its own
        float gs = p2pHash1(seed * 41.0 + unitId * 3.0);
        vec3 leaf = gs < 0.4 ? vec3(0.78, 0.76, 0.70) : gs < 0.6 ? vec3(0.20, 0.13, 0.08) : gs < 0.8 ? body * 0.55 : vec3(0.12, 0.20, 0.16);
        float rows = p2pLine(fract(pane.y / 0.55) * 0.55 - 0.275, 0.02, fwq.y), cols = p2pLine(fract(pane.x / 0.7) * 0.7 - 0.35, 0.015, fwq.x) * step(0.5, gs);
        col = mix(col, leaf * (1.0 - max(rows, cols) * 0.35 * mid) * (0.9 + 0.1 * p2pNoise(pane * 3.0)), glass);
        glass = 0.0;
      } else if (doorKind < 3.5) {
        // glass from the floor up: mullions, and what is behind it by the same parallax, so it moves as you pass
        vec2 dh = p2pHash2(vec2(unitId, seed * 71.0));
        frame = max(frame, (1.0 - p2pBox(pane, vec2(0.05), paneSize - 0.05, fwq)) * mid);
        frame = max(frame, p2pLine(pane.y - (paneSize.y - 0.55), 0.03, fwq.y) * mid);
        frame = max(frame, p2pLine(pane.x - paneSize.x * 0.5, 0.025, fwq.x) * step(2.2, paneSize.x) * mid);
        if (lobbyLit > 0.5) {
          // a lobby: a lit ceiling far inside, and its lamps
          vec2 lq = (pane - 6.0 * lean) * vec2(0.7, 1.0);
          float ceilLamp = step(0.6, fract(lq.x)) * step(paneSize.y * 0.55, lq.y) * step(lq.y, paneSize.y * 0.62);
          p2pGlow = (vec3(0.16, 0.13, 0.09) * smoothstep(0.0, paneSize.y, pane.y) + vec3(1.2, 1.0, 0.7) * ceilLamp) * mid;
        } else {
          // rooms nobody has lit: a desk's lamp here and there
          p2pGlow = vec3(0.05, 0.045, 0.035) * step(0.7, dh.y) * smoothstep(paneSize.y, 0.0, pane.y) * mid;
        }
        p2pMirror = 0.35;
      } else if (doorKind < 5.5) {
        // a street door: a pair of tall leaves with panels, a light over them
        vec3 leaf = 0.5 + 0.5 * cos(6.2832 * (seed * 3.0 + vec3(0.0, 0.3, 0.6)));
        leaf = mix(leaf * 0.32, vec3(0.20, 0.12, 0.07), step(0.5, p2pHash1(seed * 57.0)));
        // (in a sliver of wall no car fits, under a metre and a half, it is one leaf: a door for a person)
        float pair = step(1.5, paneSize.x);
        float over = step(paneSize.y - 0.5, pane.y), hw = paneSize.x * mix(1.0, 0.5, pair), lx = mix(pane.x, abs(pane.x - hw), pair);
        float panels = p2pBox(vec2(lx, fract(pane.y / 1.05) * 1.05), vec2(0.14, 0.12), vec2(hw - 0.14, 0.93), fwq);
        float meet = p2pLine(pane.x - hw, 0.02, fwq.x) * pair + p2pLine(pane.y - (paneSize.y - 0.5), 0.03, fwq.y);
        col = mix(col, mix(leaf * (0.78 + 0.22 * panels) * (1.0 - min(meet, 1.0) * 0.55 * mid), tint, over), glass);
        frame = max(frame, (1.0 - p2pBox(pane, vec2(0.08), paneSize - 0.08, fwq)) * mid);
        glass *= over;
      } else if (doorKind < 6.5) {
        // the door at a back: two plain leaves of painted steel, a vent in each
        vec3 leaf = mix(vec3(0.34, 0.36, 0.37), body * 0.5, step(0.5, p2pHash1(seed * 67.0)));
        float pair = step(1.5, paneSize.x), hw = paneSize.x * mix(1.0, 0.5, pair), lx = mix(pane.x, abs(pane.x - hw), pair);
        float vent = p2pBox(vec2(lx, pane.y), vec2(hw * 0.3, 0.25), vec2(hw * 0.7, 0.55), fwq) * step(0.5, fract(pane.y / 0.06)) * fine;
        float meet = p2pLine(pane.x - hw, 0.018, fwq.x) * pair;
        col = mix(col, leaf * (1.0 - meet * 0.5 * mid - vent * 0.3) * (0.92 + 0.08 * p2pNoise(pane * 2.0)), glass);
        glass = 0.0;
      } else if (doorKind < 7.5) {
        // a loading door: a shutter of ribbed steel, its bottom rail
        vec3 leaf = mix(vec3(0.50, 0.52, 0.53), vec3(0.30, 0.36, 0.42), step(0.6, p2pHash1(seed * 73.0)));
        float ribs = step(0.5, fract(pane.y / 0.11)) * fine, rail = p2pSpan(pane.y, 0.0, 0.14, fwq.y);
        col = mix(col, mix(leaf * (0.86 + 0.14 * ribs), vec3(0.16, 0.16, 0.17), rail * mid), glass);
        glass = 0.0;
      } else {
        // a house's front door: one leaf with panels, in a colour the house chose, its handle, a light over it
        vec3 leaf = 0.5 + 0.5 * cos(6.2832 * (seed * 5.0 + unitId * 0.37 + vec3(0.0, 0.33, 0.67)));
        leaf = mix(leaf * 0.42, vec3(0.22, 0.13, 0.08), step(0.55, p2pHash1(seed * 83.0 + unitId)));
        float over = step(paneSize.y - 0.42, pane.y);
        float panels = p2pBox(vec2(pane.x, fract(pane.y / 1.06) * 1.06), vec2(0.16, 0.12), vec2(paneSize.x - 0.16, 0.94), fwq);
        float knob = p2pBox(pane, vec2(paneSize.x - 0.22, 0.98), vec2(paneSize.x - 0.13, 1.07), fwq) * fine;
        float rail = p2pLine(pane.y - (paneSize.y - 0.42), 0.03, fwq.y);
        col = mix(col, mix(mix(leaf * (0.78 + 0.22 * panels), vec3(0.78, 0.70, 0.42), knob) * (1.0 - rail * 0.55 * mid), tint, over), glass);
        frame = max(frame, (1.0 - p2pBox(pane, vec2(0.07), paneSize - 0.07, fwq)) * mid);
        glass *= over;
      }
      // a probe asks what is painted as a way in (scripts/outside-shots.mjs)
      if (uMark > 0.5 && sharp > 0.5 && opening > 0.5) p2pMark = uMark < 1.5 ? step(4.5, doorKind) * step(doorKind, 7.5) + step(1.5, doorKind) * step(doorKind, 2.5) : uMark < 2.5 ? lobbyLit * step(2.5, doorKind) * step(doorKind, 3.5) : step(7.5, doorKind);

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
        float em = floor(p2pHash1(seed * 23.0) * max(ironNb - 1.0, 1.0)), ex = u - em * ironBw;
        float on = step(0.45, p2pHash1(seed * 29.0)) * front * step(1.5, ironNb) * upper * step(1.5, nF);
        float inX = p2pSpan(ex, 0.25, 2.0 * ironBw - 0.25, fwp.x);
        float deck = p2pLine(fy - (wlo.y * fH - 0.12), 0.04, fwp.y);
        float rail = p2pLine(fy - (wlo.y * fH + 0.85), 0.022, fwp.y);
        float bars = p2pLine(fract(ex / 0.14) * 0.14 - 0.07, 0.011, fwp.x) * p2pSpan(fy, wlo.y * fH - 0.12, wlo.y * fH + 0.85, fwp.y) * fine;
        float ladder = p2pLine(ex - (0.5 + (fy / fH) * 1.4), 0.03, fwp.x) + p2pLine(ex - (0.95 + (fy / fH) * 1.4), 0.03, fwp.x);
        float iron = max(max(deck, rail), max(bars, ladder * step(wlo.y * fH - 0.12, fy) * step(fi, nF - 1.5))) * inX * on * mid;
        // and its shadow on the wall, down-sun of it
        float ironShade = p2pLine(fy - (wlo.y * fH - 0.45), 0.10, fwp.y) * p2pSpan(ex - sign(dot(T, P2P_SUN)) * -0.3, 0.25, 2.0 * ironBw - 0.25, fwp.x) * on * mid;
        col *= 1.0 - ironShade * 0.22;
        col = mix(col, vec3(0.028, 0.028, 0.03), iron);
        p2pGlass *= 1.0 - iron;
      }

      // ---- where the wall meets the street: grime, and less of the sky
      col *= 0.80 + 0.20 * smoothstep(0.0, 1.8, p2pUp);
    }
    diffuseColor.rgb = col;
  }
  #ifdef P2P_BORN
    // lying where it fell: the lights see it there, and how high it is over the ground it lies on is not known
    p2pUp = max(vWorld.y - vAux.y, 0.0);
  #endif`,kv="normal = normalize( mat3( viewMatrix ) * P2P_TURN( p2pN ) );",Bv=`
  {
    vec2 sh = p2pShade(vWorld.xz + normalize(P2P_TURN(vWallN).xz + vec2(1e-5)) * 3.2);
    float inShade = smoothstep(-2.0, 2.0, sh.x - p2pUp) * smoothstep(0.2, 1.2, sh.x);
    reflectedLight.directDiffuse *= mix(1.0 - inShade, 1.0, p2pNear);
    reflectedLight.indirectDiffuse *= mix(0.78, 1.0, smoothstep(0.0, 22.0, p2pUp));
  }`,Hv=`
  if (p2pGlass > 0.003) {
    vec3 toEye = normalize(cameraPosition - vWorld);
    vec3 n = normalize(P2P_TURN(p2pN + p2pPaneTilt)), wn = normalize(P2P_TURN(p2pN));
    vec3 r = reflect(-toEye, n);
    float fres = 0.05 + 0.95 * pow(1.0 - max(dot(toEye, n), 0.0), 5.0);
    float amount = mix(fres, 0.35 + 0.65 * fres, p2pMirror);
    // a mirrored ray that runs along the wall runs down the street, where the sky comes lower
    float along = 1.0 - abs(dot(normalize(r.xz + vec2(1e-5)), normalize(wn.xz + vec2(1e-5))));
    float roofs = mix(p2pRoofs(r, p2pUp), 0.05, smoothstep(0.55, 0.95, along));
    float seesSky = smoothstep(roofs - 0.05, roofs + 0.05, r.y);
    vec3 sky = p2pSky(normalize(vec3(r.x, max(r.y, 0.03), r.z)));
    vec3 seen = mix(p2pAcross(r), sky, seesSky);
    float sunward = max(dot(r, P2P_SUN), 0.0);
    seen += vec3(1.0, 0.86, 0.66) * (pow(sunward, 90.0) * 9.0 + pow(sunward, 10.0) * 0.35) * p2pLit * seesSky;
    outgoingLight = mix(outgoingLight, seen, p2pGlass * amount);
  }
  outgoingLight += p2pGlow;
  // (one flat colour that comes through the tone curve as itself: red and blue full, no green)
  if (p2pMark > 0.5) outgoingLight = vec3(1.0, 0.0, 1.0);`,qt={ROOF:-1,VICTORIAN:0,STUCCO:1,MASONRY:2,OFFICE:3,GLASS:4,PRECAST:5,SHED:6,AWNING:8,CORNICE:9,ROOFBOX:10,SIGN:11,CUT:12},js={PLAIN:0,SHOP:1},Gv=[15855074,15525590,15260864,15986662,14867920,14672863,15327951,14277846,15788244,15130834,13226944,12570072,14929860,15392686,13620940,14207412,12175055,15322032,13352914,12900556,9084853,11122586,12153690,7314583,5662074,8093554,13607834,14267482],Vv=[15722972,15327696,15920868,14998731,14602938,15131610,14277074,15787730,15061944,14080731,15260102,13617597,14730414,13226692,14469542],Wv=[9194042,10115652,8011826,12887420,12162923,14273972,13616558,10263188,11578272,11037007,14075554],qv=[12433581,11117980,13223096,9407106,5920338,11906460],Xv=[5595242,3752522,7109766,9085098,2896440,5200984],$v=[14209732,13617336,14867920,12564648,14076856],Yv=[11577496,10133664,12760476,9277324,10720387],oh=[8003356,2051386,1914199,2829102,13214247,9059090,4861022,14275264,1006691],io=(i,e)=>i[Math.min(i.length-1,Math.floor(e*i.length))],Kv=170,jv=200;function $t(i,e,t,n,s,r,a){const o=i.pos.length/3;for(let y=0;y<4;y++)tr(i,t[y][0],t[y][1],t[y][2],n[0],n[1],n[2],s.r,s.g,s.b),i.aux.push(...r[y]),i.ext.push(...a);const[l,c,h]=[t[0],t[1],t[2]],u=c[0]-l[0],d=c[1]-l[1],f=c[2]-l[2],m=h[0]-l[0],g=h[1]-l[1],x=h[2]-l[2];(d*x-f*g)*n[0]+(f*m-u*x)*n[1]+(u*g-d*m)*n[2]>=0?e.push(o,o+1,o+2,o,o+2,o+3):e.push(o,o+2,o+1,o,o+3,o+2)}function lh(i,e,t){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const[a,o]=i[s],[l,c]=i[r];o>t!=c>t&&e<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n}function Zv(i,e,t){const n=Hi(),s=new Dv(i),r=Mv(i);let a=new Float32Array(Ks*4096),o=1;const l=new Array(i.buildings.length).fill(null),c={value:null},h={value:0},u=(ie,A,xe)=>{let ce=l[ie];return ce||(ce=bv(A,xe,e(ie),t).map(le=>le.map(be=>{if(c.value)return{u0:be.u0,u1:be.u1,idx:0};if((o+1)*Ks>a.length){const Pe=new Float32Array(a.length*2);Pe.set(a),a=Pe}return a.set(Sv(be),o*Ks),{u0:be.u0,u1:be.u1,idx:o++}})),l[ie]=ce,ce)},d=new ri(400,4,4),f=new ri(400,4,4),m={walls:0,roofs:0,cornices:0,bays:0,awnings:0,signs:0,boxes:0},g=new Qe,x=new Qe,p=new Qe,y=new Qe,_={},v=i.buildings.length,E=new Array(v).fill(null),M=new Array(v).fill(null),T=new Int32Array(v*4),D=new Float32Array(v*6),b=(ie,A,xe)=>{const ce=ie.r;if(ce.length<4)return null;let le=0,be=0,Pe=0,ye=1/0,ze=0;const ct=[];for(let V=0;V+1<ce.length;V++){const[se,ae]=ce[V],[oe,te]=ce[V+1];le+=se,be+=ae,Pe+=se*te-oe*ae;const Z=n.at(se,ae);ct.push(Z),ye=Math.min(ye,Z),ze+=Z}ct.push(ct[0]);const at=ce.length-1;le/=at,be/=at;const C=Math.abs(Pe)/2,S=ie.y1,X=S-ie.y0,re=ze/at,he=Pe>0?1:-1,ne=u(A,ce,he),{faces:Oe,commercial:_e,residential:Be}=Iv(s,ce,he),{style:Te,mark:fe}=Uv(A,le,be,X,C,_e,Be);xe&&(_[Te]=(_[Te]??0)+1);const me=Te===qt.OFFICE||Te===qt.GLASS||Te===qt.PRECAST,Xe=Nt(A*3+2),Ce=Nt(A*3+3);g.setHex(fe?.color??io(Te===qt.VICTORIAN?Gv:Te===qt.STUCCO?Vv:Te===qt.MASONRY?Wv:Te===qt.OFFICE?qv:Te===qt.GLASS?Xv:Te===qt.PRECAST?$v:Yv,Xe)),g.offsetHSL((Nt(A+5003)-.5)*.02,0,(Nt(A+7919)-.5)*.07),Te===qt.VICTORIAN?x.setHex(15328988):x.copy(g).lerp(y.setHex(14209215),.45);const ue=Te+Ce*.98,tt=ie.m?ie.y0+ie.m:ye-1.5;return{ring:ce,corners:at,cx:le,cz:be,size:C,top:S,high:X,datum:re,g:ct,out:he,core:ne,faces:Oe,style:Te,tower:me,seed:Ce,code:ue,foot:tt,mark:fe}},w=(ie,A,xe,ce,le)=>{const be=b(ie,A,!ce);if(!be)return;const{ring:Pe,corners:ye,cx:ze,cz:ct,size:at,top:C,high:S,datum:X,g:re,out:he,core:ne,faces:Oe,style:_e,tower:Be,seed:Te,code:fe,foot:me,mark:Xe}=be,[Ce,ue]=xe(ze,ct),tt=S>=15||at>=700||!!ce,V=tt?Ce.idx:Ce.late;if(Xe?.shape==="pyramid")Jv(Ce,Ce.idx,Pe,he,ze,ct,me,C,X,g,fe,re,se=>ne[se]?.[0]?.idx??0);else for(let se=0;se+1<Pe.length;se++){let[ae,oe]=Pe[se],[te,Z]=Pe[se+1],Ae=re[se],O=re[se+1];const J=Math.hypot(te-ae,Z-oe);if(J<.05)continue;const ve=(Z-oe)/J*he,Ve=-(te-ae)/J*he;he>0&&([ae,te]=[te,ae],[oe,Z]=[Z,oe],[Ae,O]=[O,Ae]);const dt=Oe[se],Ht=dt===1||dt===2,Ge=r(A,se),De=Ge?js.SHOP:js.PLAIN,Ze=(O-Ae)/J,Kt=(Ht?1:0)+2*De,ht=ne[se]??[],Ue=ce?wf(ae,oe,te,Z,ce):[];if(Ge){const Ke=Math.hypot(Ge.p0[0]-ae,Ge.p0[1]-oe),st=Math.hypot(Ge.p1[0]-ae,Ge.p1[1]-oe);Ue.push({u0:Math.min(Ke,st),u1:Math.max(Ke,st),y:Ge.y+ta})}const Le=Mf(J,me,C,Ue),qe=(te-ae)/J,pt=(Z-oe)/J;le&&le.push(te,me,Z,ae,me,oe,ae,C,oe,te,me,Z,ae,C,oe,te,C,Z);for(const[Ke,st,lt,At]of Le)if(!(st-Ke<.02||At-lt<.02))for(let xt=0;xt<Math.max(1,ht.length);xt++){const rt=xt===0?Ke:Math.max(Ke,(ht[xt-1].u1+ht[xt].u0)/2),Ne=xt+1>=ht.length?st:Math.min(st,(ht[xt].u1+ht[xt+1].u0)/2);if(Ne-rt<.02)continue;const et=Ae+Ze*rt,ft=Ae+Ze*Ne;$t(Ce,V,[[ae+qe*rt,lt,oe+pt*rt],[ae+qe*Ne,lt,oe+pt*Ne],[ae+qe*Ne,At,oe+pt*Ne],[ae+qe*rt,At,oe+pt*rt]],[ve,0,Ve],g,[[rt,et,J,C],[Ne,ft,J,C],[Ne,ft,J,C],[rt,et,J,C]],[fe,Kt+32*(ht[xt]?.idx??0),Ze,X]),ce||(m.walls+=2)}if(!Ht||J<4||S>40||Be||_e===qt.SHED)continue;const yt=_e===qt.VICTORIAN?.42:.3,St=_e===qt.MASONRY?.7:.5,Pt=C-St+.12,Vt=C+.12,kt=ve*yt,en=Ve*yt,R=(te-ae)/J,W=(Z-oe)/J,Y=[qt.CORNICE+Te*.98,0,0,X],K=[ae,Pt,oe],q=[te,Pt,Z],we=[ae+kt,Pt,oe+en],Ie=[te+kt,Pt,Z+en],He=[ae+kt,Vt,oe+en],ke=[te+kt,Vt,Z+en],je=[ae,Vt,oe],it=[te,Vt,Z],We=Ke=>[[0,Ke,J,C],[J,Ke,J,C],[J,Ke+1,J,C],[0,Ke+1,J,C]];if($t(ue,ue.idx,[we,Ie,ke,He],[ve,0,Ve],x,We(0),Y),$t(ue,ue.idx,[K,q,Ie,we],[0,-1,0],x,We(2),Y),$t(ue,ue.idx,[He,ke,it,je],[0,1,0],x,We(4),Y),m.cornices+=6,Oe[(se+(he>0?1:ye-1))%ye]===1||Oe[(se+(he>0?1:ye-1))%ye]===2||($t(ue,ue.idx,[K,we,He,je],[-R,0,-W],x,We(0),Y),m.cornices+=2),Oe[(se+(he>0?ye-1:1))%ye]===1||Oe[(se+(he>0?ye-1:1))%ye]===2||($t(ue,ue.idx,[q,Ie,ke,it],[R,0,W],x,We(0),Y),m.cornices+=2),Av(_e,!0,J)){const Ke=_e===qt.VICTORIAN?1.05:.75,st=De===js.SHOP?4.15:2.75,lt=(rt,Ne,et)=>[ae+R*rt+ve*Ne,et,oe+W*rt+Ve*Ne],At=[],xt=c.value?.image.data??a;for(const rt of ht){if(!rt.idx)continue;const Ne=rt.idx*Ks,et=xt[Ne],ft=xt[Ne+1],ut=Math.abs(ft-et),Bt=ft>=et?1:-1,Mn=xt[Ne+11]===Nl.HEADER;for(const Wt of Rv(ut,xt[Ne+2],Mn?0:xt[Ne+3],xt[Ne+7],!Mn&&xt[Ne+10]===na.PIER)){const on=Wt.b-Wt.a;if(Wt.pier||!Lv(Wt.k,on))continue;const rn=Math.min(et+Bt*Wt.a,et+Bt*Wt.b),xn=Cv(on);At.push({b0:rn+xn.b0,b1:rn+xn.b1,b2:rn+xn.b2,b3:rn+xn.b3,deep:xn.deep,gl:Ae+Ze*(et+Bt*Wt.lot),idx:rt.idx})}}if(!ht.some(rt=>rt.idx)){const rt=Math.max(1,Math.floor(J/7.6+.5)),Ne=J/rt,et=Ne/7.6;for(let ft=0;ft<rt;ft++)At.push({b0:ft*Ne+.7*et,b1:ft*Ne+1.45*et,b2:ft*Ne+3.55*et,b3:ft*Ne+4.3*et,deep:Math.min(.7,.6*et),gl:Ae+Ze*(ft+.5)*Ne,idx:0})}for(const{b0:rt,b1:Ne,b2:et,b3:ft,deep:ut,gl:Bt,idx:Mn}of At){const Wt=[fe,1+2*De+16+32*Mn,Ze,X],on=Bt+st,rn=C-Ke;if(rn-on<2.2)continue;const xn=(Zn,fa,Ri,ua)=>{const da=Ri-Zn,pa=ua-fa,zl=Math.hypot(da,pa),Ef=(ve*da-R*pa)/zl,Af=(Ve*da-W*pa)/zl;$t(ue,ue.idx,[lt(Zn,fa,on),lt(Ri,ua,on),lt(Ri,ua,rn),lt(Zn,fa,rn)],[Ef,0,Af],g,[[Zn,Ae+Ze*Zn,J,C],[Ri,Ae+Ze*Ri,J,C],[Ri,Ae+Ze*Ri,J,C],[Zn,Ae+Ze*Zn,J,C]],Wt)};xn(rt,0,Ne,ut),xn(Ne,ut,et,ut),xn(et,ut,ft,0),$t(ue,ue.idx,[lt(rt,0,rn+.25),lt(Ne,ut,rn),lt(et,ut,rn),lt(ft,0,rn+.25)],[ve*.38,.92,Ve*.38],x,We(4),Y),$t(ue,ue.idx,[lt(rt,0,on),lt(Ne,ut,on),lt(et,ut,on),lt(ft,0,on)],[0,-1,0],x,We(2),Y),m.bays+=10}}if(!Ge||J<4)continue;const ot=Math.hypot(Ge.p0[0]-ae,Ge.p0[1]-oe),bt=Math.hypot(Ge.p1[0]-ae,Ge.p1[1]-oe),Dt=Math.min(ot,bt),Ut=Math.abs(bt-ot),Et=Math.max(1,Math.floor(Ut/5.5+.5)),Ye=Ut/Et;for(let Ke=0;Ke<Et;Ke++){if(Nt(A*131+se*17+Ke)>.5)continue;y.setHex(io(oh,Nt(A*57+se*5+Ke+9)));const lt=Dt+Ke*Ye+.3,At=Dt+(Ke+1)*Ye-.3,xt=Ae+Ze*(Dt+(Ke+.5)*Ye),rt=1+.5*Nt(A+Ke*7+13),Ne=xt+3.05,et=xt+2.5,ft=et-.24,ut=(rn,xn,Zn)=>[ae+R*rn+ve*xn,Zn,oe+W*rn+Ve*xn],Bt=[qt.AWNING+Nt(A+Ke*3+1)*.98,0,0,X],Mn=rt/Math.hypot(rt,Ne-et),Wt=(Ne-et)/Math.hypot(rt,Ne-et),on=(rn,xn)=>[[lt,rn,J,C],[At,rn,J,C],[At,xn,J,C],[lt,xn,J,C]];$t(ue,ue.idx,[ut(lt,rt,et),ut(At,rt,et),ut(At,.02,Ne),ut(lt,.02,Ne)],[ve*Wt,Mn,Ve*Wt],y,on(0,1),Bt),$t(ue,ue.idx,[ut(lt,rt,ft),ut(At,rt,ft),ut(At,rt,et),ut(lt,rt,et)],[ve,0,Ve],y,on(2,3),Bt),$t(ue,ue.idx,[ut(lt,rt,et-.02),ut(At,rt,et-.02),ut(At,.02,Ne-.02),ut(lt,.02,Ne-.02)],[-ve*Wt,-Mn,-Ve*Wt],y,on(4,5),Bt),m.awnings+=6}for(let Ke=0;Ke<Et;Ke++){if(Nt(A*173+se*29+Ke+5)>.42||S<6.5)continue;y.setHex(io(oh,Nt(A*61+se*3+Ke+2)));const st=Ae+Ze*(Dt+(Ke+.5)*Ye),lt=Dt+Ke*Ye+.16,At=Math.min(C-st-4.2,1.4+1.5*Nt(A+Ke*11+3));if(At<1)continue;const xt=st+3.5,rt=xt+At,Ne=.18,et=.18+.62+.25*Nt(A+Ke*5),ft=(Mn,Wt,on)=>[ae+R*(lt+on)+ve*Mn,Wt,oe+W*(lt+on)+Ve*Mn],ut=[qt.SIGN+Nt(A+Ke*13+7)*.98,0,0,X],Bt=[[0,0,et-Ne,At],[et-Ne,0,et-Ne,At],[et-Ne,At,et-Ne,At],[0,At,et-Ne,At]];$t(ue,ue.idx,[ft(Ne,xt,.03),ft(et,xt,.03),ft(et,rt,.03),ft(Ne,rt,.03)],[R,0,W],y,Bt,ut),$t(ue,ue.idx,[ft(Ne,xt,-.03),ft(et,xt,-.03),ft(et,rt,-.03),ft(Ne,rt,-.03)],[-R,0,-W],y,Bt,ut),m.signs+=4}}if(ie.col!=null?p.setHex(ie.col,hn):p.copy(g).multiplyScalar(.62),ce||D.set([g.r,g.g,g.b,p.r,p.g,p.b],A*6),!tt&&!ce){let se=1,ae=0,oe=0;for(let ht=0;ht+1<Pe.length;ht++){const Ue=Pe[ht+1][0]-Pe[ht][0],Le=Pe[ht+1][1]-Pe[ht][1],qe=Math.hypot(Ue,Le);qe>oe&&(oe=qe,se=Ue/qe,ae=Le/qe)}let te=1/0,Z=-1/0,Ae=1/0,O=-1/0;for(const[ht,Ue]of Pe){const Le=ht*se+Ue*ae,qe=-ht*ae+Ue*se;te=Math.min(te,Le),Z=Math.max(Z,Le),Ae=Math.min(Ae,qe),O=Math.max(O,qe)}const J=Math.sqrt(Math.min(1,at/Math.max(1,(Z-te)*(O-Ae)))),ve=(te+Z)/2,Ve=(Ae+O)/2,dt=(Z-te)/2*J,Ht=(O-Ae)/2*J,Ge=(ht,Ue)=>{const Le=ve+ht*dt,qe=Ve+Ue*Ht;return[Le*se-qe*ae,Le*ae+qe*se]},De=[Ge(-1,-1),Ge(1,-1),Ge(1,1),Ge(-1,1)],Ze=(De[0][0]+De[2][0])/2,Kt=(De[0][1]+De[2][1])/2;for(let ht=0;ht<4;ht++){const[Ue,Le]=De[ht],[qe,pt]=De[(ht+1)%4],yt=Math.hypot(qe-Ue,pt-Le);if(yt<.05)continue;let St=(pt-Le)/yt,Pt=-(qe-Ue)/yt;St*((Ue+qe)/2-Ze)+Pt*((Le+pt)/2-Kt)<0&&(St=-St,Pt=-Pt);const Vt=(qe-Ue)*Pt-(pt-Le)*St<0,[kt,en,R,W]=Vt?[qe,pt,Ue,Le]:[Ue,Le,qe,pt];$t(Ce,Ce.box,[[kt,me,en],[R,me,W],[R,C,W],[kt,C,en]],[St,0,Pt],g,[[0,X,yt,C],[yt,X,yt,C],[yt,X,yt,C],[0,X,yt,C]],[fe,1,0,X])}$t(Ce,Ce.box,[[De[0][0],C,De[0][1]],[De[1][0],C,De[1][1]],[De[2][0],C,De[2][1]],[De[3][0],C,De[3][1]]],[0,1,0],p,[[0,0,0,C],[0,0,0,C],[0,0,0,C],[0,0,0,C]],[qt.ROOF+Te*.98,0,0,X])}if(Xe?.shape!=="pyramid"){const se=Pe.slice(0,-1).map(([oe,te])=>new nt(oe,te)),ae=Ce.pos.length/3;for(const oe of se)tr(Ce,oe.x,C,oe.y,0,1,0,p.r,p.g,p.b),Ce.aux.push(0,0,0,C),Ce.ext.push(qt.ROOF+Te*.98,0,0,X);for(const oe of Ls.triangulateShape(se,[])){const te=se[oe[0]],Z=se[oe[1]],Ae=se[oe[2]],O=(Z.y-te.y)*(Ae.x-te.x)-(Z.x-te.x)*(Ae.y-te.y);if(O>=0?V.push(ae+oe[0],ae+oe[1],ae+oe[2]):V.push(ae+oe[0],ae+oe[2],ae+oe[1]),ce||m.roofs++,le)for(const J of O>=0?[oe[0],oe[2],oe[1]]:[oe[0],oe[1],oe[2]])le.push(se[J].x,C-.06,se[J].y)}if(S>=11&&at>=220){const oe=S>=45?2:1;for(let te=0;te<oe;te++){const Z=Math.sqrt(at),Ae=Math.min(Z*.42,3+Z*.22*(.5+Nt(A*7+te))),O=Math.min(Z*.42,3+Z*.18*(.5+Nt(A*11+te))),J=ze+(Nt(A*13+te)-.5)*Z*.35,ve=ct+(Nt(A*17+te)-.5)*Z*.35,Ve=S>=45?4+5*Nt(A*19+te):2.2+1.6*Nt(A*19+te);let dt=1,Ht=0,Ge=0;for(let Le=0;Le+1<Pe.length;Le++){const qe=Pe[Le+1][0]-Pe[Le][0],pt=Pe[Le+1][1]-Pe[Le][1],yt=Math.hypot(qe,pt);yt>Ge&&(Ge=yt,dt=qe/yt,Ht=pt/yt)}const De=(Le,qe)=>[J+dt*Ae/2*Le-Ht*O/2*qe,ve+Ht*Ae/2*Le+dt*O/2*qe],Ze=[De(-1,-1),De(1,-1),De(1,1),De(-1,1)];if(!Ze.every(([Le,qe])=>lh(Pe,Le,qe)))continue;y.copy(p).lerp(x.clone().multiplyScalar(.8),.5);const Kt=[qt.ROOFBOX+Nt(A+te)*.98,0,0,X],ht=S>=45?Ce:ue,Ue=ht.idx;ce||(m.boxes+=10);for(let Le=0;Le<4;Le++){const[qe,pt]=Ze[Le],[yt,St]=Ze[(Le+1)%4],Pt=Math.hypot(yt-qe,St-pt);let Vt=(St-pt)/Pt,kt=-(yt-qe)/Pt;Vt*((qe+yt)/2-J)+kt*((pt+St)/2-ve)<0&&(Vt=-Vt,kt=-kt),$t(ht,Ue,[[qe,C,pt],[yt,C,St],[yt,C+Ve,St],[qe,C+Ve,pt]],[Vt,0,kt],y,[[0,0,Pt,C],[Pt,0,Pt,C],[Pt,Ve,Pt,C],[0,Ve,Pt,C]],Kt)}$t(ht,Ue,[[Ze[0][0],C+Ve,Ze[0][1]],[Ze[1][0],C+Ve,Ze[1][1]],[Ze[2][0],C+Ve,Ze[2][1]],[Ze[3][0],C+Ve,Ze[3][1]]],[0,1,0],p,[[0,0,0,C],[0,0,0,C],[0,0,0,C],[0,0,0,C]],[qt.ROOF+Te*.98,0,0,X])}}}};i.buildings.forEach((ie,A)=>{w(ie,A,(xe,ce)=>{const le=d.bin(xe,ce),be=f.bin(xe,ce);return E[A]=le,M[A]=be,T[A*4]=le.pos.length/3,T[A*4+2]=be.pos.length/3,[le,be]},null,null),E[A]&&(T[A*4+1]=E[A].pos.length/3,T[A*4+3]=M[A].pos.length/3)});{const ie=Math.max(1,Math.ceil(o/nr)),A=new Float32Array(nr*3*4*ie);A.set(a.subarray(0,o*Ks));const xe=new qi(A,nr*3,ie,_n,Fn);xe.minFilter=xe.magFilter=fn,xe.generateMipmaps=!1,xe.needsUpdate=!0,c.value=xe,a=new Float32Array(0)}const P=(ie,A)=>{const xe=new Nn({vertexColors:!0});return xe.name=A?"fallen walls":"walls",A&&(xe.defines={P2P_BORN:""}),li(xe,i,{key:ie,uniforms:{uFace:c,uMark:h},vertexPars:Fv,vertex:Nv,fragmentPars:zv,color:Ov,normal:kv,light:Bv,final:Hv})},F=P("p2p-city-walls",!1),I=P("p2p-city-born",!0),H=new Qt;{const ie=new ri(1e9,4,4),A=ie.bin(0,0);$t(A,A.idx,[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],[0,1,0],g,[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],[qt.ROOF,0,0,0]);const xe=ie.build(I,{cast:!0,receive:!0});for(const ce of xe.children)ce.frustumCulled=!1;xe.name="the fallen façade, warm",H.add(xe)}const z=d.build(F,{cast:!0,receive:!0}),N=f.build(F,{cast:Il()==="high",receive:!0});H.add(z,N),H.userData.styles=_,H.userData.triangles=m;const U=z.children.map(ie=>{const A=ie.geometry,xe=A.index.array,ce=([Pe,ye])=>{const ze=new Ot;for(const ct of Object.keys(A.attributes))ze.setAttribute(ct,A.getAttribute(ct));return ze.setIndex(new Ct(xe.subarray(Pe,Pe+ye),1)),ze.boundingSphere=A.boundingSphere,ze.boundingBox=A.boundingBox,ze},le=ie.userData.near?ce(ie.userData.near):A,be=ie.userData.far?ce(ie.userData.far):A;return ie.geometry=le,{m:ie,near:le,far:be}}),L=N.children,G=(ie,A)=>{const xe=ie.geometry.boundingSphere;return Math.hypot(xe.center.x-A.x,xe.center.z-A.z)-xe.radius};H.userData.tend=ie=>{for(const A of U)A.m.geometry=G(A.m,ie)>jv?A.far:A.near;for(const A of L)A.visible=G(A,ie)<Kv};const B=new Qt;B.name="broken buildings",H.add(B);const j=new Us({color:1052430});j.name="the dark behind a hole";{const ie=new Ot;ie.setAttribute("position",new Ct(new Float32Array(9),3));const A=new It(ie,j);A.frustumCulled=!1,A.matrixAutoUpdate=!1,B.add(A)}const ee=new Map,ge=new Map,de=new Set,Me=ie=>{if(ee.has(ie)||!E[ie])return;const[A,xe,ce,le]=[T[ie*4],T[ie*4+1],T[ie*4+2],T[ie*4+3]],be=E[ie].mesh,Pe=M[ie].mesh;ee.set(ie,{main:be&&xe>A?sh(be,A,xe):null,fine:Pe&&le>ce?sh(Pe,ce,le):null})},$=ie=>{const A=ge.get(ie);A&&(B.remove(A),A.traverse(xe=>{const ce=xe;ce.isMesh&&ce.geometry.dispose()}),ge.delete(ie))};return{group:H,breach:(ie,A)=>{const xe=i.buildings[ie];if(!xe||de.has(ie)||!E[ie])return;Me(ie),$(ie);const ce=new ri(1e9,4,4),le=new ri(1e9,4,4),be=[];w(xe,ie,()=>[ce.bin(0,0),le.bin(0,0)],A,be);const Pe=new Qt;Pe.add(ce.build(F,{cast:!0,receive:!0}),le.build(F,{receive:!0}));const ye=new Ot;ye.setAttribute("position",new Ct(new Float32Array(be),3));const ze=new It(ye,j);ze.matrixAutoUpdate=!1,Pe.add(ze),B.add(Pe),ge.set(ie,Pe)},raze:ie=>{Me(ie),$(ie),de.add(ie)},reset:()=>{for(const[ie,A]of ee)A.main&&rh(E[ie].mesh,T[ie*4],A.main),A.fine&&rh(M[ie].mesh,T[ie*4+2],A.fine);ee.clear(),de.clear();for(const ie of[...ge.keys()])$(ie)},colors:ie=>({wall:[D[ie*6],D[ie*6+1],D[ie*6+2]],roof:[D[ie*6+3],D[ie*6+4],D[ie*6+5]]}),broken:()=>({breached:ge.size,razed:de.size}),mark:ie=>{h.value=ie},part:(ie,A,xe)=>{const ce=i.buildings[ie],le=A.parts.find(Ue=>Ue.id===xe),be=ce&&le?b(ce,ie,!1):null;if(!ce||!le||!be)return null;const{ring:Pe,top:ye,datum:ze,g:ct,out:at,core:C,faces:S,seed:X,code:re}=be,he=g.clone(),ne=ce.col!=null?new Qe().setHex(ce.col,hn):g.clone().multiplyScalar(.62),Oe=new Qe(1,1,1),[_e,Be]=A.mid,[Te,fe]=A.axis,me=Math.max(.2,A.shrink),Xe=(Ue,Le)=>[(Ue-_e)*Te+(Le-Be)*fe,-(Ue-_e)*fe+(Le-Be)*Te],Ce=(Ue,Le)=>[_e+me*(Ue*Te-Le*fe),Be+me*(Ue*fe+Le*Te)],ue=(Ue,Le)=>[_e+Ue*Te-Le*fe,Be+Ue*fe+Le*Te],[tt,V]=Xe(le.x,le.z),se=(le.hx+.08)/me+.03,ae=(le.hz+.08)/me+.03,oe=tt/me-se,te=tt/me+se,Z=V/me-ae,Ae=V/me+ae;let O=[];for(let Ue=0;Ue+1<Pe.length;Ue++){const[Le,qe]=Xe(Pe[Ue][0],Pe[Ue][1]);O.push({a:Le,b:qe,e:Ue})}const J=[Ue=>Ue.a-oe,Ue=>te-Ue.a,Ue=>Ue.b-Z,Ue=>Ae-Ue.b];for(const Ue of J){const Le=[];for(let qe=0;qe<O.length;qe++){const pt=O[qe],yt=O[(qe+1)%O.length],St=Ue(pt),Pt=Ue(yt),Vt=()=>{const kt=St/(St-Pt);return{a:pt.a+(yt.a-pt.a)*kt,b:pt.b+(yt.b-pt.b)*kt}};St>=0&&Pt>=0?Le.push(pt):St>=0?(Le.push(pt),Le.push({...Vt(),e:-1})):Pt>=0&&Le.push({...Vt(),e:pt.e})}if(O=Le,O.length<3)return null}const ve=le.y-le.hy,Ve=le.y+le.hy,dt=new ri(1e9,4,4),Ht=dt.bin(0,0),Ge=[qt.CUT+X*.98,0,0,ze];for(let Ue=0;Ue<O.length;Ue++){const Le=O[Ue],qe=O[(Ue+1)%O.length],[pt,yt]=Ce(Le.a,Le.b),[St,Pt]=Ce(qe.a,qe.b),Vt=Math.hypot(St-pt,Pt-yt);if(!(Vt<.03))if(Le.e>=0){let[kt,en]=Pe[Le.e],[R,W]=Pe[Le.e+1],Y=ct[Le.e],K=ct[Le.e+1];const q=Math.hypot(R-kt,W-en);if(q<.05)continue;const we=(W-en)/q*at,Ie=-(R-kt)/q*at;at>0&&([kt,R]=[R,kt],[en,W]=[W,en],[Y,K]=[K,Y]);const He=(R-kt)/q,ke=(W-en)/q,je=(K-Y)/q,it=(Ye,Ke)=>{const[st,lt]=ue(Ye,Ke);return(st-kt)*He+(lt-en)*ke},We=it(Le.a,Le.b),ot=it(qe.a,qe.b),bt=(We+ot)/2,Dt=S[Le.e],Ut=(Dt===1||Dt===2?1:0)+2*(r(ie,Le.e)?js.SHOP:js.PLAIN),Et=(C[Le.e]??[]).find(Ye=>bt>=Ye.u0&&bt<=Ye.u1)?.idx??0;$t(Ht,Ht.idx,[[pt,ve,yt],[St,ve,Pt],[St,Ve,Pt],[pt,Ve,yt]],[we,0,Ie],he,[[We,Y+je*We,q,ye],[ot,Y+je*ot,q,ye],[ot,Y+je*ot,q,ye],[We,Y+je*We,q,ye]],[re,Ut+32*Et,je,ze])}else{const kt=qe.a-Le.a,en=qe.b-Le.b,R=Math.hypot(kt,en),W=(Le.a+qe.a)/2,Y=(Le.b+qe.b)/2;let K=-en/R,q=kt/R;(tt/me-W)*K+(V/me-Y)*q<0&&(K=-K,q=-q);const[we,Ie]=ue(W+K*.15,Y+q*.15);if(!lh(Pe,we,Ie))continue;const He=-(K*Te-q*fe),ke=-(K*fe+q*Te);$t(Ht,Ht.idx,[[pt,ve,yt],[St,ve,Pt],[St,Ve,Pt],[pt,Ve,yt]],[He,0,ke],Oe,[[0,ve,Vt,ye],[Vt,ve,Vt,ye],[Vt,ve,Vt,ye],[0,ve,Vt,ye]],Ge)}}const De=O.map(Ue=>{const[Le,qe]=Ce(Ue.a,Ue.b);return new nt(Le,qe)}),Ze=Ht.pos.length/3;for(const Ue of De)tr(Ht,Ue.x,Ve,Ue.y,0,1,0,ne.r,ne.g,ne.b),Ht.aux.push(0,0,0,ye),Ht.ext.push(qt.ROOF+X*.98,0,0,ze);for(const Ue of De)tr(Ht,Ue.x,ve,Ue.y,0,-1,0,1,1,1),Ht.aux.push(0,ve,0,ye),Ht.ext.push(...Ge);for(const Ue of Ls.triangulateShape(De,[])){const Le=De[Ue[0]],qe=De[Ue[1]],pt=De[Ue[2]],St=(qe.y-Le.y)*(pt.x-Le.x)-(qe.x-Le.x)*(pt.y-Le.y)>=0?[Ue[0],Ue[1],Ue[2]]:[Ue[0],Ue[2],Ue[1]];Ht.idx.push(Ze+St[0],Ze+St[1],Ze+St[2],Ze+De.length+St[0],Ze+De.length+St[2],Ze+De.length+St[1])}const Kt=dt.build(I,{cast:!0,receive:!0}).children[0];if(!Kt)return null;Kt.name="fallen part";const ht=new Lt().compose(new k(le.x,le.y,le.z),new Jt().setFromAxisAngle(new k(0,1,0),le.yaw),new k(1,1,1)).invert();return{mesh:Kt,unborn:ht}},faces:()=>({walls:o-1,bytes:c.value.image.data.byteLength})}}function Jv(i,e,t,n,s,r,a,o,l,c,h,u,d){for(let m=0;m+1<t.length;m++){let[g,x]=t[m],[p,y]=t[m+1],_=u[m],v=u[m+1];const E=Math.hypot(p-g,y-x);if(E<.05)continue;const M=(y-x)/E*n,T=-(p-g)/E*n;n>0&&([g,p]=[p,g],[x,y]=[y,x],[_,v]=[v,_]);const D=Math.abs((s-(g+p)/2)*M+(r-(x+y)/2)*T),b=o-l,w=Math.hypot(D,b),P=[M*b/w,D/w,T*b/w],F=(H,z)=>{const N=H<=0?a:l+b*H,U=Math.max(0,H),L=g+(p-g)*z,G=x+(y-x)*z;return[L+(s-L)*U,N,G+(r-G)*U]},I=[h,9+32*d(m),0,l];for(let H=-1;H<10;H++){const z=H/10,N=(H+1)/10,U=E*(1-Math.max(0,z)),L=E*(1-N),G=(_+v)/2;$t(i,e,[F(z,0),F(z,1),F(N,1),F(N,0)],P,c,[[E/2-U/2,G,E,o],[E/2+U/2,G,E,o],[E/2+L/2,G,E,o],[E/2-L/2,G,E,o]],I)}}}function Qv(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ot;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=ch(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let g=0;g<a[h].length;++g)f.push(a[h][g][d]);const m=ch(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function ch(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Ct(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){const g=h.getComponent(d,m);o.setComponent(d+u,m,g)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}const Tt=(i,e)=>[i[0]+e[0],i[1]+e[1],i[2]+e[2]],qn=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],vt=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],Gi=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],Rn=i=>{const e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]};function e1(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const fl=i=>{const e=i()*2-1,t=i()*Math.PI*2,n=Math.sqrt(1-e*e);return[n*Math.cos(t),e,n*Math.sin(t)]};function bf(i){const e=Rn(Gi(i,Math.abs(i[1])<.95?[0,1,0]:[1,0,0]));return[e,Gi(i,e)]}class t1{pos=[];nor=[];col=[];leaf=[];idx=[];v(e,t,n,s,r,a,o){return this.pos.push(...e),this.nor.push(...t),this.col.push(n.r,n.g,n.b),this.leaf.push(s,r,a,o),this.pos.length/3-1}limb(e,t,n,s,r,a,o=0){const l=Rn(qn(t,e)),[c,h]=bf(l),u=Math.hypot(...qn(t,e)),d=this.pos.length/3;for(let f=0;f<=r;f++){const m=f/r*Math.PI*2,g=Tt(vt(c,Math.cos(m)),vt(h,Math.sin(m)));this.v(Tt(e,vt(g,n)),g,a,f/r,o,1,-1),this.v(Tt(t,vt(g,s)),g,a,f/r,o+u,1,-1)}for(let f=0;f<r;f++){const m=d+f*2;this.idx.push(m,m+2,m+1,m+1,m+2,m+3)}}quad(e,t,n,s,r,a,o){const l=this.v(e,s,r,0,0,a,o),c=this.v(Tt(e,t),s,r,1,0,a,o),h=this.v(Tt(e,n),s,r,0,1,a,o),u=this.v(Tt(Tt(e,t),n),s,r,1,1,a,o);this.idx.push(l,c,u,l,u,h)}strip(e,t,n,s,r,a,o){const l=this.pos.length/3;e.forEach((c,h)=>{const u=h/(e.length-1);this.v(qn(c,vt(n[h],t[h])),s[h],r,0,u,a[h],o),this.v(Tt(c,vt(n[h],t[h])),s[h],r,1,u,a[h],o)});for(let c=0;c+1<e.length;c++){const h=l+c*2;this.idx.push(h,h+1,h+3,h,h+3,h+2)}}geometry(){const e=new Ot;return e.setAttribute("position",new wt(this.pos,3)),e.setAttribute("normal",new wt(this.nor,3)),e.setAttribute("color",new wt(this.col,3)),e.setAttribute("aLeaf",new wt(this.leaf,4)),e.setIndex(this.idx),e.computeBoundingSphere(),e}}function Xr(i,e,t,n,s,r,a,o=0,l=0){const c=t.map(d=>d.r[0]*d.r[1]*d.r[2]),h=c.reduce((d,f)=>d+f,0),u=d=>{let f=e()*h,m=0;for(;m<t.length-1&&f>c[m];)f-=c[m],m++;const g=t[m],x=fl(e),p=d?.25+.2*e():.62+.38*Math.sqrt(e()),y=Tt(g.c,[x[0]*g.r[0]*p,x[1]*g.r[1]*p,x[2]*g.r[2]*p]),_=Rn([x[0]/g.r[0],x[1]/g.r[1],x[2]/g.r[2]]),v=qn(y,n.c),E=Rn([v[0]/n.r[0]**2,v[1]/n.r[1]**2,v[2]/n.r[2]**2]),M=Rn(Tt(Tt(_,vt(fl(e),.55)),[0,o,0])),[T,D]=bf(M),b=e()*Math.PI*2,w=Tt(vt(T,Math.cos(b)),vt(D,Math.sin(b))),P=Gi(M,w),F=r*(d?1.4:.95+.4*e()),I=Math.hypot(v[0]/n.r[0],v[1]/n.r[1],v[2]/n.r[2]),H=(d?.5:.6+.4*Math.min(1,p*I)**1.4)*(.8+.2*(E[1]*.5+.5)),z=Rn(Tt(Tt(Tt(vt(_,.55),vt(E,.45)),vt(M,.2)),[0,.25,0]));i.quad(qn(qn(y,vt(w,F/2)),vt(P,F/2)),vt(w,F),vt(P,F),z,a[Math.floor(e()*a.length)],H,e()*.999)};for(let d=0;d<s;d++)u(!1);for(let d=0;d<l;d++)u(!0)}function $r(i,e,t,n,s,r,a,o){const l=Tt(vt(Tt(t,n),.5),[(e()-.5)*.6,.3+e()*.4,(e()-.5)*.6]),c=(s+r)/2;i.limb(t,l,s,c,a,o),i.limb(l,n,c,r,a,o,Math.hypot(...qn(l,t)))}const Tn=i=>new Qe(i),ps=[{name:"plane",leaf:10,bark:1,leaves:[6257974,7047739,5665839],trunk:10262136,trunkHalf:.24,lobes:7,lobeDepth:.16,palm:0,build(i,e,t){const n=Tn(this.trunk),s=[.15,3.1,.05];i.limb([0,0,0],s,.3,.22,7,n),i.limb(s,[.1,6.6,0],.22,.07,6,n,3.1);const r={c:[0,7.4,0],r:[4,3.4,4]},a=[{c:[0,7.6,0],r:[3,2.6,3]}];for(let o=0;o<4;o++){const l=o*1.62+e()*.6,c=1.9+e()*.6;a.push({c:[Math.cos(l)*c,6.2+e()*2.4,Math.sin(l)*c],r:[1.9+e()*.4,1.7+e()*.3,1.9+e()*.4]})}for(const o of a.slice(1))if($r(i,e,s,vt(o.c,.85),.16,.07,5,n),t>=1)for(let l=0;l<2;l++)i.limb(vt(o.c,.85),Tt(o.c,vt(fl(e),1.4)),.06,.025,3,n);Xr(i,e,a,r,Math.round(46*t),2.4/Math.sqrt(t),this.leaves.map(Tn),0,5)}},{name:"ficus",leaf:11,bark:0,leaves:[3428906,2967589,3824174],trunk:8223346,trunkHalf:.2,lobes:9,lobeDepth:.08,palm:0,build(i,e,t){const n=Tn(this.trunk),s=[0,2.1,0];i.limb([0,0,0],s,.24,.2,7,n),i.limb(s,[0,4.4,0],.2,.06,6,n,2.1);const r={c:[0,4.9,0],r:[3.5,2.6,3.5]},a=[{c:[0,5,0],r:[3.1,2.3,3.1]}];for(let o=0;o<4;o++){const l=o*1.57+e()*.5;a.push({c:[Math.cos(l)*1.8,4.4+e()*1.2,Math.sin(l)*1.8],r:[1.7,1.4,1.7]})}for(const o of a.slice(1))$r(i,e,s,vt(o.c,.7),.13,.06,5,n);Xr(i,e,a,r,Math.round(52*t),2/Math.sqrt(t),this.leaves.map(Tn),0,6)}},{name:"cypress",leaf:12,bark:0,leaves:[2835760,3362611,2572331],trunk:6115656,trunkHalf:.38,lobes:5,lobeDepth:.22,palm:0,build(i,e,t){const n=Tn(this.trunk),s=[.5,2.4,.2];i.limb([0,0,0],s,.48,.38,8,n),i.limb(s,[.7,5.2,.2],.38,.12,7,n,2.4);const r=[];for(let o=0;o<4;o++){const l=o*1.9+e()*.7,c=o===0?.5:2.4+e()*1.2;r.push({c:[Math.cos(l)*c+.6,6+o*1.3+e()*.8,Math.sin(l)*c],r:[3.2-o*.25,1.15,3-o*.2]})}const a={c:[.6,8.2,0],r:[5,3.2,4.6]};for(const o of r)$r(i,e,s,qn(o.c,[0,.7,0]),.24,.1,5,n);Xr(i,e,r,a,Math.round(48*t),2.7/Math.sqrt(t),this.leaves.map(Tn),1.1,5)}},{name:"eucalyptus",leaf:13,bark:4,leaves:[7308391,8097644,6584412],trunk:13616819,trunkHalf:.3,lobes:4,lobeDepth:.3,palm:0,build(i,e,t){const n=Tn(this.trunk),s=[.3,8.5,-.2];i.limb([0,0,0],[.1,4.5,0],.4,.33,7,n),i.limb([.1,4.5,0],s,.33,.26,7,n,4.5),i.limb(s,[.4,13,-.3],.26,.08,6,n,8.5);const r=[];for(let o=0;o<5;o++){const l=o*1.26+e()*.5,c=o===0?.4:2+e()*1.4;r.push({c:[Math.cos(l)*c,11.5+e()*4.5,Math.sin(l)*c],r:[2.1+e()*.5,1.9+e()*.5,2.1+e()*.5]})}for(const o of r)$r(i,e,s,qn(o.c,[0,.8,0]),.17,.06,5,n);Xr(i,e,r,{c:[0,13.5,0],r:[4,4,4]},Math.round(42*t),2.1/Math.sqrt(t),this.leaves.map(Tn),-.3,3)}},{name:"fan-palm",leaf:14,bark:2,leaves:[6126138,6784063],trunk:8154460,trunkHalf:.2,lobes:11,lobeDepth:.42,palm:1,build(i,e,t){const n=Tn(this.trunk),s=[.35,0,.1],r=Tt([0,15,0],s);i.limb([0,0,0],Tt([0,7,0],vt(s,.25)),.27,.2,6,n),i.limb(Tt([0,7,0],vt(s,.25)),r,.2,.17,6,n,7);const a=Tn(9270870),o=Math.round(16*t),l=Math.round(10*t),c=2.3/Math.sqrt(t);for(let u=0;u<l;u++){const d=u*2.4+e()*.4,f=[Math.cos(d),0,Math.sin(d)],m=Rn(Tt(vt(f,.28),[0,-1,0])),g=Gi(m,f),x=Tt(Tt(r,[0,-.4,0]),vt(f,.2));i.quad(qn(x,vt(g,c*.4)),vt(g,c*.8),vt(m,c*1.1),Rn(Tt(f,[0,-.2,0])),a,.6,e()*.999)}const h=this.leaves.map(Tn);for(let u=0;u<o;u++){const d=u*2.39996,f=1.25-u/o*1.45,m=[Math.cos(d),0,Math.sin(d)],g=Rn(Tt(vt(m,Math.cos(f)),[0,Math.sin(f),0])),x=Rn(Gi(g,[0,1,0])),p=Gi(x,g),y=Tt(r,vt(g,.25));i.quad(qn(y,vt(x,c/2)),vt(x,c),vt(g,c*1.05),Rn(Tt(vt(g,.6),Tt(vt(p,.3),[0,.4,0]))),h[u%h.length],.75+.25*Math.max(0,Math.sin(f)),e()*.999)}}},{name:"canary-palm",leaf:15,bark:3,leaves:[5599290,6257472,5006899],trunk:7298117,trunkHalf:.36,lobes:13,lobeDepth:.5,palm:1,build(i,e,t){const n=Tn(this.trunk);i.limb([0,0,0],[.05,4.5,0],.42,.37,9,n),i.limb([.05,4.5,0],[.1,8.4,0],.37,.35,9,n,4.5),i.limb([.1,8.4,0],[.1,9.4,0],.48,.38,9,n,8.4);const s=[.1,9.3,0],r=this.leaves.map(Tn),a=Math.round(24*t),o=t>=1?5:3;for(let l=0;l<a;l++){const c=l*2.39996+e()*.2,h=1.15-l/a*1.35+(e()-.5)*.15,u=5.2+e()*.8,d=[Math.cos(c),0,Math.sin(c)],f=Rn(Gi(d,[0,1,0])),m=[],g=[],x=[],p=[],y=[];for(let _=0;_<=o;_++){const v=_/o*u,E=v*Math.cos(h),M=v*Math.sin(h)-.055*v*v;m.push(Tt(s,Tt(vt(d,E+.2),[0,M,0]))),g.push(.75*Math.max(.08,Math.sin(Math.PI*Math.min(1,_/o*1.1))**.6)*(1-.2*(_/o))),x.push(f),p.push(Rn(Tt([0,1,0],vt(d,.9+_/o)))),y.push(.55+.45*Math.min(1,_/o*1.6)*(.75+.25*Math.max(0,Math.sin(h))))}i.strip(m,g,x,p,r[l%r.length],y,e()*.999)}}}];function n1(i,e,t){const n=new t1;i.build(n,e1(t),e);const s=n.geometry();let r=0,a=0,o=1/0,l=0;for(let c=0;c<n.pos.length/3;c++){const h=n.pos[c*3],u=n.pos[c*3+1],d=n.pos[c*3+2];a=Math.max(a,u),n.leaf[c*4+3]>=0&&(r=Math.max(r,Math.hypot(h,d)),o=Math.min(o,u),l=Math.max(l,u))}return{geo:s,width:r*2,height:a,crownLo:o,crownHi:l}}const so=`
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
`,ro=`
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
`,hh=`
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
}`,i1={low:[38,58],mid:[70,100],high:[100,140]},s1=820,fh=950,uh=16,r1={low:.6,mid:1,high:1.35},dh=200;function _i(i,e,t){let n=Math.imul(Math.round(i*10)^668265261,73856093)^Math.imul(Math.round(e*10)+t*2654435761,19349663);return n=Math.imul(n^n>>>15,2246822507),n=Math.imul(n^n>>>13,3266489909),((n^n>>>16)>>>0)/4294967296}function a1(i,e){const t=i.r?Math.min(2.3,Math.max(.6,i.r/2.6)):1,n=(.8+.4*_i(i.x,i.z,1))*t,s=n*(.88+.24*_i(i.x,i.z,2));return e.set(s,n,s)}const o1={wood:[10,0,45,45,0,0],park:[30,10,25,15,8,12],plaza:[45,25,0,0,15,15],avenue:[40,15,0,0,15,30],street:[40,40,0,0,12,8],yard:[30,25,15,10,15,5]},ph={wood:"wood",park:"park",grass:"park",garden:"park",playground:"park",pool:"park",plaza:"plaza",pier:"plaza",parking:"street"};function l1(i,e){const t=i.props,n=new Uint8Array(e.length),s=i.areas.filter(l=>ph[l.k]).map(l=>{let c=1/0,h=1/0,u=-1/0,d=-1/0;for(const[f,m]of l.r)c=Math.min(c,f),h=Math.min(h,m),u=Math.max(u,f),d=Math.max(d,m);return{a:l,x0:c,z0:h,x1:u,z1:d}}),r=(l,c,h)=>{let u=!1;for(let d=0,f=l.length-1;d<l.length;f=d++){const[m,g]=l[d],[x,p]=l[f];g>h!=p>h&&c<(x-m)*(h-g)/(p-g)+m&&(u=!u)}return u},a=50,o=new Map;for(const l of i.roads){if(l.b||l.c==="pedestrian")continue;const c=l.c==="trunk"||l.c==="primary";for(let h=0;h+1<l.p.length;h++){const[u,d]=l.p[h],[f,m]=l.p[h+1],g=l.w/2+10;for(let x=Math.floor((Math.min(u,f)-g)/a);x<=Math.floor((Math.max(u,f)+g)/a);x++)for(let p=Math.floor((Math.min(d,m)-g)/a);p<=Math.floor((Math.max(d,m)+g)/a);p++){const y=`${x}_${p}`;let _=o.get(y);_||o.set(y,_=[]),_.push([u,d,f,m,l.w,c])}}}return e.forEach((l,c)=>{const h=t[l];let u="";for(const x of s)if(h.x>=x.x0&&h.x<=x.x1&&h.z>=x.z0&&h.z<=x.z1&&r(x.a.r,h.x,h.z)){u=ph[x.a.k];break}if(!u){let x=1/0,p=!1;for(const[y,_,v,E,M,T]of o.get(`${Math.floor(h.x/a)}_${Math.floor(h.z/a)}`)??[]){const D=v-y,b=E-_,w=D*D+b*b||1,P=Math.max(0,Math.min(1,((h.x-y)*D+(h.z-_)*b)/w)),F=Math.hypot(h.x-y-D*P,h.z-_-b*P)-M/2;F<x&&(x=F,p=T)}u=x<8?p?"avenue":"street":"yard"}const d=o1[u],f=d.reduce((x,p)=>x+p,0);let m=_i(h.x,h.z,3)*f,g=0;for(;g<d.length-1&&m>=d[g];)m-=d[g],g++;n[c]=g}),n}function c1(i,e,t){const n=typeof location>"u"?null:new URLSearchParams(location.search).get("treelod"),s=Il(),[r,a]=n==="near"?[220,240]:n==="far"?[-2,-1]:i1[s],o=new Qt;o.name="trees";const l=i.props,c=l1(i,e),h=new Map;e.forEach((N,U)=>h.set(N,U));const u={};for(const N of c)u[ps[N].name]=(u[ps[N].name]??0)+1;const d=new Float32Array(e.length*4);e.forEach((N,U)=>{const L=l[N];d[U*4]=_i(L.x,L.z,4),d[U*4+1]=(_i(L.x,L.z,5)-.5)*1.4,d[U*4+2]=.84+.32*_i(L.x,L.z,6),d[U*4+3]=c[U]===0&&_i(L.x,L.z,7)<.25?.2+.45*_i(L.x,L.z,8):0});const f={uTime:{value:0},uEye:{value:new k(1e9,0,0)},uWind:{value:new k(.92,0,.38).normalize()},uFade:{value:new Mt(r,a,s1,fh)}},m=ps.map((N,U)=>n1(N,r1[s],101+U*7919)),g=ps.map((N,U)=>{const L=Math.max(1,Math.min(2500,c.filter(Me=>Me===U).length)),G=m[U].geo.clone(),B=new Kn(new Float32Array(L*4),4).setUsage(As);G.setAttribute("aTree",B);const j=`#define TREE_LEAF ${N.leaf}
#define TREE_BARK ${N.bark}
`,ee=li(new Nn({vertexColors:!0,side:gn,alphaToCoverage:!0}),i,{key:`tree-near-${N.name}`,uniforms:f,vertexPars:`${j}attribute vec4 aLeaf;
${so}
varying vec4 vLeaf; varying vec3 vTint; varying float vFade; varying float vFoot;`,vertex:`
        vFade = smoothstep(uFade.x, uFade.y, treeDist());
        vFoot = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).y;
        vLeaf = aLeaf; vTint = aTree.yzw;
        transformed = treeSway(transformed, aLeaf.w);
        vWorld = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`,fragmentPars:`${j}${ro}
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
#endif`,light:hh}),ge=new nf({depthPacking:Hh,side:gn});ge.onBeforeCompile=Me=>{Object.assign(Me.uniforms,f),Me.vertexShader=Me.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aLeaf;
${so}
varying vec4 vLeaf; varying float vFade;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFade = smoothstep(uFade.x, uFade.y, treeDist()); vLeaf = aLeaf; transformed = treeSway(transformed, aLeaf.w);`),Me.fragmentShader=Me.fragmentShader.replace("#include <common>",`#include <common>
${j}${Ki}
${ro}
varying vec4 vLeaf; varying float vFade;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
          if (treeIgn(gl_FragCoord.xy) < vFade || (vLeaf.w >= -0.5 && treeLeaf(vLeaf.xy, vLeaf.w).x < 0.0)) discard;`)},ge.customProgramCacheKey=()=>`tree-depth-${N.name}`;const de=new Xi(G,ee,L);return de.instanceMatrix.setUsage(As),de.count=0,de.customDepthMaterial=ge,de.castShadow=!0,de.receiveShadow=!0,de.matrixAutoUpdate=!1,de.name=`tree near ${N.name}`,de.boundingSphere=new Ei(new k,1),o.add(de),{mesh:de,tree:B,slots:[]}}),x=new Map,p=ps.map((N,U)=>{const L=m[U];return{a:new Mt(L.width,L.height,L.crownLo,L.crownHi),b:new Mt(N.trunkHalf,N.lobes,N.lobeDepth,N.palm),leaf:h1(L.geo,!0),bark:new Qe(N.trunk)}}),y={...f,uFarA:{value:p.map(N=>N.a)},uFarB:{value:p.map(N=>N.b)},uFarLeaf:{value:p.map(N=>N.leaf)},uFarBark:{value:p.map(N=>N.bark)}},_=li(new Nn({side:gn,alphaToCoverage:!0}),i,{key:"tree-far",uniforms:y,vertexPars:`${so}
      #define NS ${ps.length}
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
${ro}
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
    }`,light:hh}),v=new wt([-.5,0,0,.5,0,0,.5,1,0,-.5,1,0],3),E=new wt([0,0,1,0,0,1,0,0,1,0,0,1],3),M=new Ts([0,1,2,0,2,3],1),T=Math.max(...m.map(N=>Math.max(N.height,N.width)))*1.5,D=new Map;e.forEach((N,U)=>{const L=l[N],G=`${Math.floor(L.x/dh)}_${Math.floor(L.z/dh)}`;let B=D.get(G);B||D.set(G,B=[]),B.push(U)});const b=new Map,w=[];for(const N of D.values()){const U=new Ot;U.setAttribute("position",v),U.setAttribute("normal",E),U.setIndex(M);const L=new Float32Array(N.length*4),G=new Float32Array(N.length),B=new Xi(U,_,N.length);let j=1/0,ee=1/0,ge=-1/0,de=-1/0;N.forEach((Se,Re)=>{const $e=e[Se],ie=l[$e];L.set(d.subarray(Se*4,Se*4+4),Re*4),G[Re]=c[Se],B.setMatrixAt(Re,t($e)),b.set($e,{mesh:B,slot:Re}),j=Math.min(j,ie.x),ee=Math.min(ee,ie.z),ge=Math.max(ge,ie.x),de=Math.max(de,ie.z)}),U.setAttribute("aTree",new Kn(L,4)),U.setAttribute("aSpec",new Kn(G,1)),B.instanceMatrix.needsUpdate=!0;const Me=(j+ge)/2,$=(ee+de)/2,Q=Math.hypot(ge-j,de-ee)/2+T+10;let pe=0;for(const Se of N)pe+=t(e[Se]).elements[13];B.boundingSphere=new Ei(new k(Me,pe/N.length,$),Q),B.castShadow=!1,B.receiveShadow=!0,B.matrixAutoUpdate=!1,B.name="tree far",o.add(B),w.push({mesh:B,x:Me,z:$,r:Q,members:N})}const P=new nt(1e9,1e9),F=a+uh,I=N=>{P.set(N.x,N.z),x.clear();for(const U of g)U.slots.length=0;for(const U of w)if(!(Math.hypot(U.x-N.x,U.z-N.z)-U.r+T+10>F))for(const L of U.members){const G=e[L],B=l[G];if(Math.hypot(B.x-N.x,B.z-N.z)>F+10)continue;const j=c[L],ee=g[j];if(ee.slots.length>=ee.mesh.instanceMatrix.count)continue;const ge=ee.slots.length;ee.slots.push(L),ee.mesh.setMatrixAt(ge,t(G)),ee.tree.array.set(d.subarray(L*4,L*4+4),ge*4),x.set(G,{s:j,slot:ge})}for(const U of g)U.mesh.count=U.slots.length,U.mesh.instanceMatrix.needsUpdate=!0,U.tree.needsUpdate=!0,U.mesh.boundingSphere.center.set(N.x,N.y,N.z),U.mesh.boundingSphere.radius=F+T+20};return{group:o,species:u,update:(N,U)=>{f.uEye.value.copy(N),f.uTime.value=U,Math.hypot(N.x-P.x,N.z-P.y)>uh&&I(N);for(const L of w){const G=Math.hypot(L.x-N.x,L.z-N.z);L.mesh.visible=G-L.r<fh&&G+L.r>r}},redraw:N=>{const U=t(N),L=b.get(N);L&&(L.mesh.setMatrixAt(L.slot,U),L.mesh.instanceMatrix.needsUpdate=!0);const G=x.get(N);if(G){const B=g[G.s];B.mesh.setMatrixAt(G.slot,U),B.mesh.instanceMatrix.needsUpdate=!0}},has:N=>h.has(N)}}function h1(i,e){const t=i.getAttribute("color"),n=i.getAttribute("aLeaf");let s=0,r=0,a=0,o=0;for(let l=0;l<t.count;l++){if(n.getW(l)>=0!==e)continue;const c=.4+n.getZ(l)*.6;s+=t.getX(l)*c,r+=t.getY(l)*c,a+=t.getZ(l)*c,o++}return o?new Qe(s/o,r/o,a/o):new Qe(5204794)}function Sf(i,e){const t=new Qe(e),n=i.getAttribute("position").count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new Ct(s,3)),i.index?i.toNonIndexed():i}const Je=(i,e,t,n,s,r,a)=>Sf(new Ti(i,e,t).translate(n,s,r),a),bn=(i,e,t,n=0,s=0)=>Sf(new la(i,i,e,6).translate(n,e/2,s),t),cn=i=>Qv(i.map(e=>(e.deleteAttribute("uv"),e))),mr={lamp:()=>cn([bn(.09,8,4869456),Je(1.6,.12,.2,.7,7.9,0,4869456),Je(.5,.14,.26,1.4,7.8,0,15262408)]),signal:()=>cn([bn(.1,5.2,3948354),Je(.34,1,.3,0,4.6,.2,1908513),Je(.2,.2,.05,0,4.9,.36,13123630)]),stop:()=>cn([bn(.04,2.4,9080208),Je(.7,.7,.05,0,2.5,0,12068381)]),hydrant:()=>cn([bn(.14,.7,15197404),Je(.44,.14,.14,0,.45,0,15197404)]),bench:()=>cn([Je(1.7,.08,.5,0,.45,0,7032631),Je(1.7,.5,.07,0,.72,-.24,7032631),Je(.08,.45,.5,-.75,.22,0,3356218),Je(.08,.45,.5,.75,.22,0,3356218)]),bin:()=>bn(.3,.95,3494463),bollard:()=>bn(.12,.9,5593180),post_box:()=>Je(.55,1.15,.55,0,.58,0,3100550),bus_stop:()=>cn([Je(3.2,.1,1.5,0,2.5,0,5659488),Je(3.2,2.2,.06,0,1.3,-.7,9675949),bn(.06,2.5,5659488,-1.5,.7),bn(.06,2.5,5659488,1.5,.7)]),bike_rack:()=>cn([bn(.03,.85,9212052,-.35,0),bn(.03,.85,9212052,.35,0),Je(.76,.06,.06,0,.85,0,9212052)]),table:()=>cn([Je(1.4,.06,.8,0,.73,0,10119999),Je(.07,.7,.07,-.6,.35,-.32,5913892),Je(.07,.7,.07,.6,.35,-.32,5913892),Je(.07,.7,.07,-.6,.35,.32,5913892),Je(.07,.7,.07,.6,.35,.32,5913892)]),chair:()=>cn([Je(.42,.05,.42,0,.44,0,11880506),Je(.42,.42,.05,0,.64,-.19,11880506),Je(.36,.42,.36,0,.21,0,3816512)]),sofa:()=>cn([Je(2,.42,.9,0,.21,0,6258060),Je(2,.4,.22,0,.6,-.34,5665151),Je(.2,.22,.9,-.9,.53,0,5665151),Je(.2,.22,.9,.9,.53,0,5665151)]),shelf:()=>cn([Je(1.2,1.8,.06,0,.9,-.17,8088149),Je(1.2,.05,.4,0,.3,0,13616040),Je(1.2,.05,.4,0,.9,0,13616040),Je(1.2,.05,.4,0,1.5,0,13616040),Je(.9,.22,.3,0,.44,0,13134396),Je(.8,.22,.3,.1,1.04,0,6986319)]),floor_lamp:()=>cn([bn(.025,1.4,2894894),Je(.26,.04,.26,0,.02,0,2894894),Je(.26,.24,.26,0,1.48,0,15852472)]),crate:()=>Je(.6,.5,.6,0,.25,0,12159566),counter:()=>cn([Je(1.8,.98,.58,0,.49,0,4864556),Je(1.8,.06,.64,0,1.01,0,14275264),Je(1.72,.7,.03,0,.5,.3,7033920),Je(.3,.22,.26,.55,1.15,-.05,2763824)]),stool:()=>cn([bn(.03,.7,2894894),Je(.3,.03,.3,0,.015,0,2894894),Je(.34,.06,.34,0,.71,0,9063218)]),rack:()=>cn([bn(.02,1.5,10132898,-.66,0),bn(.02,1.5,10132898,.66,0),Je(1.36,.03,.03,0,1.48,0,10132898),Je(1.36,.03,.44,0,.02,0,10132898),Je(.3,.9,.36,-.48,.98,0,3099243),Je(.3,.8,.4,-.16,1.03,0,11880506),Je(.3,.95,.34,.16,.955,0,14274488),Je(.3,.75,.38,.48,1.055,0,4156242)]),desk:()=>cn([Je(1.5,.05,.76,0,.73,0,13220250),Je(.05,.71,.7,-.7,.355,0,6119267),Je(.05,.71,.7,.7,.355,0,6119267),Je(1.36,.4,.03,0,.5,.33,6119267),Je(.42,.28,.04,.3,.92,-.1,1842722)])};mr.bed=()=>cn([Je(1.6,.3,2,0,.15,0,5916214),Je(1.56,.2,1.96,0,.4,0,15328472),Je(1.56,.07,1.3,0,.53,.3,8229800),Je(1,.1,.4,0,.55,-.72,16052712),Je(1.6,.56,.06,0,.28,-.98,5916214)]);const mh=new Map;function f1(i){if(!mr[i])return null;let e=mh.get(i);return e||(e=mr[i](),mh.set(i,e)),e}const u1=new Set(["bed","table","chair","sofa","shelf","floor_lamp","crate","counter","stool","rack","desk"]),d1=320,p1=170,gh=240;function m1(i,e,t){const n=new Qt,s=new Nn({vertexColors:!0}),r=e.props,a={},o=[],l=new Map,c=new Map,h=(U,L)=>`${Math.floor(U.x/L)}_${Math.floor(U.z/L)}`;r.forEach((U,L)=>{if(U.k==="tree"){a.tree=(a.tree??0)+1,o.push(L);return}if(!mr[U.k])return;a[U.k]=(a[U.k]??0)+1;const[G,B]=u1.has(U.k)?[c,120]:[l,400],j=h(U,B);let ee=G.get(j);ee||(ee=[],G.set(j,ee)),ee.push(L)});const u=new Lt,d=new Jt,f=new k,m=new k,g=new k(0,1,0),x=new k,p=new k,y=new Map,_=U=>t.get(U.k)?.half[1]??0,v=U=>{const L=r[U],G=y.get(U);return L.k==="tree"?a1(L,f):f.set(1,1,1),G?(d.set(G[3],G[4],G[5],G[6]),m.set(0,-_(L),0).applyQuaternion(d).add(x.set(G[0],G[1],G[2])),u.compose(m,d,f)):u.compose(m.set(L.x,i.at(L.x,L.z),L.z),d.setFromAxisAngle(g,L.a),f)},E=c1(e,o,v);n.add(E.group);const M=new Map,T=U=>{let L=M.get(U);return L||(L=mr[U](),M.set(U,L)),L},D=new Map,b=(U,L,G,B)=>{const j=T(r[U].k),ee=j.getAttribute("position"),ge=j.getAttribute("normal"),de=v(U),Me=d.clone();for(let $=0;$<ee.count;$++){x.fromBufferAttribute(ee,$).applyMatrix4(de),p.fromBufferAttribute(ge,$).applyQuaternion(Me);const Q=(B+$)*3;L[Q]=x.x,L[Q+1]=x.y,L[Q+2]=x.z,G[Q]=p.x,G[Q+1]=p.y,G[Q+2]=p.z}},w=(U,L)=>{let G=0;for(const Q of U)G+=T(r[Q].k).getAttribute("position").count;const B=new Float32Array(G*3),j=new Float32Array(G*3),ee=new Float32Array(G*3),ge=new Ot,de=new It(ge,s);let Me=0;for(const Q of U){const pe=T(r[Q].k).getAttribute("color");b(Q,B,j,Me),ee.set(pe.array,Me*3),D.set(Q,{mesh:de,start:Me}),Me+=pe.count}ge.setAttribute("position",new Ct(B,3).setUsage(As)),ge.setAttribute("normal",new Ct(j,3).setUsage(As)),ge.setAttribute("color",new Ct(ee,3)),ge.computeBoundingSphere(),ge.boundingSphere.radius+=40,de.matrixAutoUpdate=!1,n.add(de);const $=ge.boundingSphere;return{mesh:de,x:$.center.x,z:$.center.z,r:$.radius,far:L}},P=[...l.values()].map(U=>w(U,d1)),F=[...c.values()].map(U=>{let L=0,G=0;for(const B of U)L+=r[B].x,G+=r[B].z;return{list:U,x:L/U.length,z:G/U.length,baked:null}}),I=U=>{E.update(U,performance.now()/1e3);for(const L of P)L.mesh.visible=Math.max(0,Math.hypot(L.x-U.x,L.z-U.z)-L.r+40)<L.far;for(const L of F){const G=Math.hypot(L.x-U.x,L.z-U.z);if(!L.baked&&G<p1)L.baked=w(L.list,gh);else if(L.baked&&G>gh){n.remove(L.baked.mesh),L.baked.mesh.geometry.dispose();for(const B of L.list)D.delete(B);L.baked=null}}},H=U=>{if(E.has(U)){E.redraw(U);return}const L=D.get(U);if(!L)return;const G=L.mesh.geometry.getAttribute("position"),B=L.mesh.geometry.getAttribute("normal"),j=T(r[U].k).getAttribute("position").count;b(U,G.array,B.array,L.start),G.addUpdateRange(L.start*3,j*3),B.addUpdateRange(L.start*3,j*3),G.needsUpdate=!0,B.needsUpdate=!0};return{group:n,counts:a,update:I,apply:U=>{for(let L=0;L+8<=U.length;L+=8){const G=U[L];if(!r[G])continue;let B=y.get(G);B||(B=new Float32Array(7),y.set(G,B)),B.set(U.subarray(L+1,L+8)),H(G)}},reset:()=>{const U=[...y.keys()];y.clear();for(const L of U)H(L)}}}const ao=420,xh=240,oo=220,g1={timber:null,stud:14209732,brick:9194042,block:11117980,glazing:10470607,stone:12170150,drywall:14868180,door:14276300},x1={timber:13287327,stud:14473420,brick:11565666,block:12170668,glazing:13951718,stone:12894132,drywall:15131354,door:14210248};class v1{constructor(e,t,n,s,r=()=>null){this.city=e,this.fronts=t,this.insides=n,this.kinds=s,this.fallenOf=r;const a=new Ti(2,2,2),o=a.getAttribute("position").count,l=new Float32Array(o*3),c=a.getAttribute("normal");for(let d=0;d<o;d++){const f=c.getY(d)>.5?.62:c.getY(d)<-.5?.45:1;l[d*3]=f,l[d*3+1]=f,l[d*3+2]=f}a.setAttribute("color",new Ct(l,3));const h=(d,f)=>{const m=new Xi(a,new Nn({vertexColors:!0}),d);for(let g=0;g<d;g++)m.setMatrixAt(g,this.m.makeScale(0,0,0)),m.setColorAt(g,this.c.setHex(16777215));return m.count=d,m.frustumCulled=!1,m.castShadow=!0,m.receiveShadow=!0,m.name=f,this.group.add(m),m};this.pieces=h(ao,"wall pieces"),this.parts=h(xh,"fallen buildings"),this.parts.visible=!1;const u=new af;u.setAttribute("position",new Ct(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),u.setIndex([0,1,2,0,2,3]),this.dustAt=new Kn(new Float32Array(oo*4),4),this.dustLook=new Kn(new Float32Array(oo*4),4),u.setAttribute("at",this.dustAt),u.setAttribute("look",this.dustLook),u.instanceCount=0,this.dust=new It(u,new Cn({transparent:!0,depthWrite:!1,vertexShader:`
        attribute vec4 at;    // where, and how big
        attribute vec4 look;  // its tint, and how much of it is left
        varying vec2 vUv; varying vec4 vLook;
        void main() {
          vUv = position.xy; vLook = look;
          vec4 mv = viewMatrix * vec4(at.xyz, 1.0);
          mv.xy += position.xy * at.w;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec2 vUv; varying vec4 vLook;
        void main() {
          float r = length(vUv);
          float a = smoothstep(1.0, 0.25, r) * vLook.a;
          if (a < 0.004) discard;
          gl_FragColor = vec4(vLook.rgb, a);
        }`})),this.dust.frustumCulled=!1,this.dust.name="dust",this.dust.renderOrder=5,this.group.add(this.dust)}group=new Qt;pieces;parts;pieceAt=new Map;partAt=new Map;partMesh=new Map;ONE=new k(1,1,1);pieceSlot=new Array(ao).fill(null);partSlot=new Array(xh).fill(null);clock=0;holes=new Map;dirty=new Set;puffs=[];dust;dustAt;dustLook;m=new Lt;c=new Qe;seen={panels:0,fell:0};gaveWay(e,t){this.seen.panels++;const n=this.holes.get(e.building)??[];n.push({x0:e.x0,z0:e.z0,x1:e.x1,z1:e.z1,y:e.holeTop}),this.holes.set(e.building,n),this.dirty.add(e.building);const s=this.kinds[e.kind]??"timber",r=x1[s]??13617336,a=Hi().at((e.x0+e.x1)/2,(e.z0+e.z1)/2),o=s==="glazing"?3:7;for(let l=0;l<o;l++){const c=Math.random();this.puff(e.x0+(e.x1-e.x0)*c,a+.3+Math.random()*2.4,e.z0+(e.z1-e.z0)*c,(Math.random()-.5)*(1+t*.12),.4+Math.random(),(Math.random()-.5)*(1+t*.12),.7+Math.random()*.9,1.4+Math.random()*1.4,r,.5)}}fell(e,t){this.seen.fell++,this.dirty.delete(e),this.holes.delete(e),this.city.raze(e),this.fronts.raze(e),this.insides.raze(e);const n=this.city.colors(e).wall,s=this.c.setRGB(n[0],n[1],n[2]).lerp(new Qe(13617336),.6).getHex();for(let r=0;r<60;r++){const a=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*t.r,l=1.5+Math.random()*3.5;this.puff(t.x+Math.cos(a)*o,t.y+Math.random()*Math.min(5,t.high),t.z+Math.sin(a)*o,Math.cos(a)*l,.6+Math.random()*1.6,Math.sin(a)*l,2+Math.random()*2.5,2.6+Math.random()*2.4,s,.55)}}puff(e,t,n,s,r,a,o,l,c,h){this.puffs.length>=oo&&this.puffs.shift(),this.puffs.push({p:new k(e,t,n),v:new k(s,r,a),age:0,life:l,size:o,grow:.9+Math.random()*.8,tint:new Qe(c),alpha:h})}partOf(e,t){let n=this.partMesh.get(e);if(n!==void 0)return n;const s=this.fallenOf(t);return n=s?this.city.part(t,s,e):null,n&&this.group.add(n.mesh),this.partMesh.set(e,n),n}apply(e,t){for(let n=0;n+ur<=e.length;n+=ur){const s=e[n+Gt.ID],r=e[n+Gt.WHAT]===1,a=e[n+Gt.STATE]===1;if(r){const f=new k(e[n+Gt.POS],e[n+Gt.POS+1],e[n+Gt.POS+2]),m=new Jt(e[n+Gt.ROT],e[n+Gt.ROT+1],e[n+Gt.ROT+2],e[n+Gt.ROT+3]),g=this.partOf(s,e[n+Gt.WHICH]);g&&(g.mesh.matrix.compose(f,m,this.ONE).multiply(g.unborn),g.mesh.matrixWorldNeedsUpdate=!0);continue}const o=r?this.parts:this.pieces,l=r?this.partAt:this.pieceAt,c=r?this.partSlot:this.pieceSlot;let h=l.get(s);if(h===void 0){if(h=c.findIndex(m=>!m),h<0){let m=1/0;c.forEach((g,x)=>{g&&!g.v&&g.born<m&&(m=g.born,h=x)}),h<0&&(h=0),l.delete(c[h].id)}const f=e[n+Gt.WHICH];if(r){const m=this.city.colors(f).wall;this.c.setRGB(m[0],m[1],m[2])}else{const m=t(f),g=this.kinds[m?.kind??0]??"timber",x=g1[g];if(x==null){const p=this.city.colors(m?.building??0).wall;this.c.setRGB(p[0],p[1],p[2])}else this.c.setHex(x)}o.setColorAt(h,this.c),o.instanceColor.needsUpdate=!0,c[h]={id:s,at:new k,q:new Jt,half:new k,v:null,born:this.clock},l.set(s,h)}const u=c[h];u.at.set(e[n+Gt.POS],e[n+Gt.POS+1],e[n+Gt.POS+2]),u.q.set(e[n+Gt.ROT],e[n+Gt.ROT+1],e[n+Gt.ROT+2],e[n+Gt.ROT+3]),u.half.set(e[n+Gt.HALF],e[n+Gt.HALF+1],e[n+Gt.HALF+2]);const d=new k(e[n+Gt.VEL],e[n+Gt.VEL+1],e[n+Gt.VEL+2]);u.v=a&&!r&&d.lengthSq()>.6?d:null,o.setMatrixAt(h,this.m.compose(u.at,u.q,u.half)),o.instanceMatrix.needsUpdate=!0}}update(e){this.clock+=e;for(const r of this.dirty){const a=this.holes.get(r)??[];this.city.breach(r,a),this.insides.breach(r,a)}this.dirty.clear();let t=!1;for(let r=0;r<ao;r++){const a=this.pieceSlot[r];if(!a?.v)continue;a.v.y-=9.81*e,a.at.addScaledVector(a.v,e);const o=Hi().at(a.at.x,a.at.z)+Math.min(a.half.x,a.half.y,a.half.z);a.at.y<=o&&(a.at.y=o,a.q.setFromAxisAngle(new k(1,0,0),Math.PI/2),a.v=null),this.pieces.setMatrixAt(r,this.m.compose(a.at,a.q,a.half)),t=!0}if(t&&(this.pieces.instanceMatrix.needsUpdate=!0),!this.puffs.length&&!this.dust.geometry.instanceCount)return;this.puffs=this.puffs.filter(r=>(r.age+=e)<r.life);const n=this.dustAt.array,s=this.dustLook.array;this.puffs.forEach((r,a)=>{r.v.multiplyScalar(Math.max(0,1-1.6*e)),r.v.y+=.25*e,r.p.addScaledVector(r.v,e);const o=r.age/r.life;n.set([r.p.x,r.p.y,r.p.z,r.size*(1+r.grow*o*2)],a*4),s.set([r.tint.r,r.tint.g,r.tint.b,r.alpha*Math.min(1,o*8)*(1-o)*(1-o)],a*4)}),this.dust.geometry.instanceCount=this.puffs.length,this.dustAt.needsUpdate=!0,this.dustLook.needsUpdate=!0}reset(){this.holes.clear(),this.dirty.clear(),this.city.reset();for(const[e,t,n]of[[this.pieces,this.pieceSlot,this.pieceAt],[this.parts,this.partSlot,this.partAt]]){for(let s=0;s<t.length;s++)t[s]&&e.setMatrixAt(s,this.m.makeScale(0,0,0)),t[s]=null;n.clear(),e.instanceMatrix.needsUpdate=!0}for(const e of this.partMesh.values())e&&(this.group.remove(e.mesh),e.mesh.geometry.dispose());this.partMesh.clear(),this.puffs.length=0,this.dust.geometry.instanceCount=0,this.seen.panels=0,this.seen.fell=0}counts(){return{pieces:this.pieceAt.size,parts:[...this.partMesh.values()].filter(e=>e).length,puffs:this.puffs.length,...this.city.broken()}}}const vh={furniture:{wall:14273976,floor:9071178},cafe:{wall:13219738,floor:6115656},grocer:{wall:14672854,floor:10132628},restaurant:{wall:12159082,floor:4864560},bar:{wall:4865850,floor:3024418},shop:{wall:15131354,floor:11049606},bank:{wall:14078920,floor:8223346},hotel:{wall:13351066,floor:7028536},salon:{wall:15259862,floor:9407882},clinic:{wall:15002606,floor:10465460},gallery:{wall:15790058,floor:8026744},studio:{wall:14341836,floor:9072466},office:{wall:13619924,floor:6251624},room:{wall:14472904,floor:8219477},hall:{wall:14209990,floor:7301728},garage:{wall:12170926,floor:7105642},living:{wall:14866111,floor:9136711},bedroom:{wall:14015458,floor:10126440},kitchen:{wall:15262930,floor:12170146},store:{wall:13223354,floor:7828330},lobby:{wall:14275782,floor:9340792},core:{wall:9408396,floor:5000266},floor:{wall:12565682,floor:8026226},shed:{wall:11116428,floor:6971992},workroom:{wall:14672092,floor:7172984},nave:{wall:15130572,floor:6965814},concourse:{wall:14079180,floor:9078912},open:{wall:12105390,floor:7828847}},_1=3.5,y1=110,M1=160,lo=2,Zs=900;function _h(i,e,t){const n=r=>(t[0]-e[0])*(r[1]-e[1])-(t[1]-e[1])*(r[0]-e[0]),s=[];for(let r=0;r<i.length;r++){const a=i[r],o=i[(r+1)%i.length],l=n(a),c=n(o);if(l>=0&&s.push(a),l>=0!=c>=0){const h=l/(l-c);s.push([a[0]+(o[0]-a[0])*h,a[1]+(o[1]-a[1])*h])}}return s}class w1{constructor(e,t,n,s,r,a,o){this.page=e,this.ground=t,this.ask=n,this.originOf=s,this.kindNames=r,this.kinds=a,this.rooms=o;for(const l of e.fronts??[])this.show(l.b);this.group.name="insides"}group=new Qt;built=new Map;holes=new Map;razed=new Set;shown=new Set;fronted=new Map;mid=new Map;pools=new Map;strays=new Map;origin=new Map;material=new Us({vertexColors:!0,side:gn});m=new Lt;q=new Jt;t=new k;s=new k(1,1,1);up=new k(0,1,0);middle(e){let t=this.mid.get(e);if(!t){const n=this.page.buildings[e].r;let s=0,r=0;for(const[a,o]of n)s+=a,r+=o;t=[s/n.length,r/n.length],this.mid.set(e,t)}return t}show(e){if(!this.page.buildings[e]||this.shown.has(e))return;this.shown.add(e);const[t,n]=this.middle(e),s=`${Math.floor(t/96)}_${Math.floor(n/96)}`;let r=this.fronted.get(s);r||this.fronted.set(s,r=[]),r.push(e)}pool(e){let t=this.pools.get(e);if(t)return t;const n=f1(e);if(!n)return null;const s=new Xi(n,new Nn({vertexColors:!0}),Zs);for(let r=0;r<Zs;r++)s.setMatrixAt(r,this.m.makeScale(0,0,0));return s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!0,s.name=`inside ${e}`,this.group.add(s),t={mesh:s,free:Array.from({length:Zs},(r,a)=>Zs-1-a),halfUp:this.kinds.get(e)?.half[1]??0},this.pools.set(e,t),t}place(e,t,n){const s=t.plan.items[n],r=this.kindNames[s.kind]??"",a=this.pool(r);if(!a)return;const o=this.strays.get(`${e}:${n}`);let l=t.slots.get(n);if(!l){const c=a.free.pop();if(c===void 0)return;l={kind:r,slot:c},t.slots.set(n,l)}o?(this.q.set(o[3],o[4],o[5],o[6]),this.t.set(0,-a.halfUp,0).applyQuaternion(this.q),this.t.x+=o[0],this.t.y+=o[1],this.t.z+=o[2]):(this.q.setFromAxisAngle(this.up,s.yaw),this.t.set(s.x,s.y,s.z)),a.mesh.setMatrixAt(l.slot,this.m.compose(this.t,this.q,this.s)),a.mesh.instanceMatrix.needsUpdate=!0}drop(e){const t=this.built.get(e);if(t){this.group.remove(t.mesh),t.mesh.geometry.dispose();for(const{kind:n,slot:s}of t.slots.values()){const r=this.pools.get(n);r.mesh.setMatrixAt(s,this.m.makeScale(0,0,0)),r.mesh.instanceMatrix.needsUpdate=!0,r.free.push(s)}this.built.delete(e)}}build(e){this.drop(e);const t=this.ask(e),n=this.page.buildings[e];if(!t||!n||this.razed.has(e))return!1;const s=this.ground,r=this.holes.get(e)??[],a=(M,T)=>Math.min(s.at(M,T)+_1,n.y1-.1),o=[],l=[],c=[],h=new Qe,u=(M,T,D,b,w)=>(h.setHex(b),o.push(M,T,D),l.push(h.r*w,h.g*w,h.b*w),o.length/3-1),d=n.r.slice(0,-1),f=M=>vh[this.rooms[M]??"room"]??vh.room;for(const M of t.rooms){let T=d;const D=(M.quad[0][0]+M.quad[2][0])/2,b=(M.quad[0][1]+M.quad[2][1])/2,w=M.quad,P=(w[1][0]-w[0][0])*(b-w[0][1])-(w[1][1]-w[0][1])*(D-w[0][0])>=0;for(let z=0;z<4&&T.length>=3;z++)T=P?_h(T,w[z],w[(z+1)%4]):_h(T,w[(z+1)%4],w[z]);if(T.length<3)continue;const F=T.map(([z,N])=>new nt(z,N)),I=f(M.kind).floor,H=(z,N,U,L)=>{const G=Math.hypot(N[0]-z[0],N[1]-z[1]),B=Math.hypot(U[0]-N[0],U[1]-N[1]),j=Math.hypot(z[0]-U[0],z[1]-U[1]),ee=Math.max(G,B,j);if(ee>4&&L<7){if(ee===G){const de=[(z[0]+N[0])/2,(z[1]+N[1])/2];H(z,de,U,L+1),H(de,N,U,L+1)}else if(ee===B){const de=[(N[0]+U[0])/2,(N[1]+U[1])/2];H(z,N,de,L+1),H(z,de,U,L+1)}else{const de=[(U[0]+z[0])/2,(U[1]+z[1])/2];H(z,N,de,L+1),H(de,N,U,L+1)}return}const ge=[z,N,U].map(([de,Me])=>u(de,s.at(de,Me)+.09,Me,I,.92));c.push(ge[0],ge[1],ge[2])};for(const z of Ls.triangulateShape(F,[]))H(T[z[0]],T[z[1]],T[z[2]],0)}const m=(M,T,D,b,w,P)=>{const F=Math.hypot(D-M,b-T);if(F<.05)return;const I=s.at(M,T),H=s.at(D,b);for(const[z,N,U]of Mf(F,-1e6,1e6,wf(M,T,D,b,r))){const L=(B,j)=>{const ee=B/F,ge=I+(H-I)*ee,de=M+(D-M)*ee,Me=T+(b-T)*ee;return u(de,j?ge+.05:a(de,Me),Me,w,P*(j?1:.72))};if(U>-1e5)continue;const G=[L(z,!0),L(N,!0),L(N,!1),L(z,!1)];c.push(G[0],G[1],G[2],G[0],G[2],G[3])}},g=f(t.rooms[0]?.kind??0).wall;for(const M of t.parts)m(M.ax,M.az,M.bx,M.bz,14605008,.95);let x=0,p=0;for(const[M,T]of d)x+=M,p+=T;x/=d.length,p/=d.length;const y=(this.page.fronts??[]).filter(M=>M.b===e);for(let M=0;M<d.length;M++){const[T,D]=d[M],[b,w]=d[(M+1)%d.length],P=Math.hypot(b-T,w-D);if(P<.05)continue;let F=-(w-D)/P,I=(b-T)/P;F*(x-T)+I*(p-D)<0&&(F=-F,I=-I);const H=y.find(N=>N.e===M),z=.06;if(!H){m(T+F*z,D+I*z,b+F*z,w+I*z,g,.86);continue}m(T+F*z,D+I*z,H.p0[0]+F*z,H.p0[1]+I*z,g,.86),m(H.p1[0]+F*z,H.p1[1]+I*z,b+F*z,w+I*z,g,.86)}{const M=d.map(([D,b])=>new nt(D,b)),T=o.length/3;for(const[D,b]of d)u(D,a(D,b),b,g,.6);for(const D of Ls.triangulateShape(M,[]))c.push(T+D[0],T+D[1],T+D[2])}const _=new Ot;_.setAttribute("position",new Ct(new Float32Array(o),3)),_.setAttribute("color",new Ct(new Float32Array(l),3)),_.setIndex(c),_.computeBoundingSphere();const v=new It(_,this.material);v.matrixAutoUpdate=!1,v.name="inside",this.group.add(v);const E={mesh:v,plan:t,slots:new Map,holes:r};return this.built.set(e,E),t.items.forEach((M,T)=>{(M.state!==2||this.strays.has(`${e}:${T}`))&&this.place(e,E,T)}),!0}update(e){for(const[r]of this.built){const[a,o]=this.middle(r);Math.hypot(a-e.x,o-e.z)>M1&&this.drop(r)}let t=0;const n=Math.floor(e.x/96),s=Math.floor(e.z/96);for(let r=-2;r<=2&&t<lo;r++)for(let a=-2;a<=2&&t<lo;a++)for(const o of this.fronted.get(`${n+r}_${s+a}`)??[]){if(this.built.has(o)||this.razed.has(o))continue;const[l,c]=this.middle(o);if(!(Math.hypot(l-e.x,c-e.z)>y1)&&this.build(o)&&++t>=lo)break}}breach(e,t){this.razed.has(e)||(this.holes.set(e,t),this.show(e),this.build(e))}raze(e){this.razed.add(e);const t=this.built.get(e);if(!t)return;const n=new Map;for(const[s,r]of t.slots)this.strays.has(`${e}:${s}`)&&n.set(s,r);for(const s of n.keys())t.slots.delete(s);this.drop(e);for(const[s,r]of n)this.orphans.set(`${e}:${s}`,r)}orphans=new Map;apply(e,t){for(let n=0;n+8<=e.length;n+=8){const s=e[n];if(s<t)continue;let r=this.origin.get(s);if(r===void 0){const u=this.originOf(s);r=u?{b:u.b,i:u.i,kind:this.kindNames[u.kind]??""}:null,this.origin.set(s,r)}if(!r)continue;const a=`${r.b}:${r.i}`;let o=this.strays.get(a);o||(o=new Float32Array(7),this.strays.set(a,o)),o.set(e.subarray(n+1,n+8));const l=this.built.get(r.b);if(l){this.place(r.b,l,r.i);continue}const c=this.orphans.get(a),h=this.pool(r.kind);c&&h&&(this.q.set(o[3],o[4],o[5],o[6]),this.t.set(0,-h.halfUp,0).applyQuaternion(this.q),this.t.x+=o[0],this.t.y+=o[1],this.t.z+=o[2],h.mesh.setMatrixAt(c.slot,this.m.compose(this.t,this.q,this.s)),h.mesh.instanceMatrix.needsUpdate=!0)}}reset(){for(const e of[...this.built.keys()])this.drop(e);for(const[,e]of this.orphans){const t=this.pools.get(e.kind);t.mesh.setMatrixAt(e.slot,this.m.makeScale(0,0,0)),t.mesh.instanceMatrix.needsUpdate=!0,t.free.push(e.slot)}this.orphans.clear(),this.holes.clear(),this.razed.clear(),this.strays.clear(),this.origin.clear()}drawn(e){if(!this.built.has(e)&&!this.build(e))return null;const t=this.built.get(e),n=[...t.slots.entries()].map(([s,r])=>(this.pools.get(r.kind).mesh.getMatrixAt(r.slot,this.m),this.t.setFromMatrixPosition(this.m),{kind:r.kind,x:this.t.x,z:this.t.z,stray:this.strays.has(`${e}:${s}`)}));return{rooms:t.plan.rooms.map(s=>this.rooms[s.kind]??"?"),parts:t.plan.parts.map(s=>[s.ax,s.az,s.bx,s.bz]),items:n,triangles:t.mesh.geometry.index.count/3}}counts(){let e=0;for(const t of this.pools.values())e+=Zs-t.free.length;return{built:this.built.size,things:e}}}const yh={compact:{wheel:.3,axles:[.78,3.28],tyre:[.2,.2],nose:.66,belt:.95,tail:.98,screen:[1.2,1.88],back:[3.3,3.95],floor:.24,round:1,tumble:.2,head:[.66,.78],rear:[.82,.98],headX:[.52,.9],rearX:[.6,.93]},saloon:{wheel:.32,axles:[.95,3.78],tyre:[.22,.22],nose:.66,belt:.98,tail:1.02,screen:[1.5,2.25],back:[3.4,4.08],floor:.24,round:1,tumble:.21,head:[.66,.77],rear:[.84,.97],headX:[.5,.9],rearX:[.55,.93]},hatch:{wheel:.31,axles:[.9,3.55],tyre:[.21,.21],nose:.66,belt:.98,tail:1,screen:[1.32,2.05],back:[4.05,4.33],floor:.24,round:1,tumble:.17,head:[.66,.77],rear:[.9,1.12],headX:[.5,.9],rearX:[.7,.95]},suv:{wheel:.37,axles:[.98,3.8],tyre:[.25,.25],nose:.9,belt:1.13,tail:1.15,screen:[1.38,2.08],back:[4.3,4.66],floor:.42,round:.85,tumble:.16,head:[.88,.99],rear:[1.02,1.2],headX:[.48,.9],rearX:[.68,.95]},pickup:{wheel:.4,axles:[1.05,4.5],tyre:[.27,.27],nose:1.02,belt:1.24,tail:1.24,screen:[1.62,2.28],back:[3.1,3.18],bed:3.32,floor:.48,round:.55,tumble:.12,head:[.98,1.12],rear:[.92,1.22],headX:[.5,.92],rearX:[.86,.98]},van:{wheel:.36,axles:[.98,4.25],tyre:[.24,.26],nose:.98,belt:1.18,screen:[.75,1.5],back:[5.16,5.22],side:[.9,2.25],floor:.4,round:.45,tumble:.05,head:[.92,1.06],rear:[.62,1.4],headX:[.5,.9],rearX:[.88,.98]},truck:{wheel:.48,axles:[1.15,5.6],tyre:[.3,.52],nose:1.25,belt:1.5,screen:[.32,.72],back:[2.05,2.1],side:[.55,1.75],box:2.25,cab:.92,floor:.62,round:.25,tumble:.04,head:[.82,.98],rear:[.62,.82],headX:[.55,.88],rearX:[.8,.97],livery:"truck"},taxi:{wheel:.32,axles:[.95,3.8],tyre:[.22,.22],nose:.68,belt:.99,tail:1.03,screen:[1.52,2.27],back:[3.42,4.1],floor:.24,round:1,tumble:.21,head:[.68,.79],rear:[.85,.98],headX:[.5,.9],rearX:[.55,.93],livery:"taxi"},bus:{wheel:.5,axles:[2.65,8.95],tyre:[.3,.52],nose:1.05,belt:1.12,screen:[.02,.22],back:[11.82,11.97],side:[.35,11.55],pillars:1.45,floor:.34,round:.3,tumble:.03,head:[.42,.62],rear:[.55,.95],headX:[.62,.9],rearX:[.8,.96],livery:"bus"}},b1=i=>yh[i]??yh.saloon,xi=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},S1={taxi:1,bus:2,truck:3},vi=22;function Mh(i,e,t,n){const[s,r,a]=i.half,o=a*2,l=r*2,c=-(r+i.clearance),[h,u]=e.screen,[d,f]=e.back,m=l-.02,g=[0,o,h,u,d,f,...e.axles.flatMap(B=>n?[B-e.wheel-.06,B,B+e.wheel+.06]:[B])];e.box!==void 0&&g.push(e.box-.05,e.box),e.bed!==void 0&&g.push(e.bed-.04,e.bed);const x=Math.max(6,Math.round(o/t));for(let B=1;B<x;B++)g.push(o*B/x);const p=[...new Set(g.filter(B=>B>=0&&B<=o).map(B=>Math.round(B*1e3)/1e3))].sort((B,j)=>B-j).filter((B,j,ee)=>j===0||B-ee[j-1]>.025),y=[],_=[],v=[],E=[],M=B=>Math.min(Math.abs(B-e.axles[0]),Math.abs(B-e.axles[1])),T=B=>{const j=(B-a)/a,ee=Math.abs(j),ge=e.box!==void 0&&B>=e.box,de=e.box!==void 0&&!ge?e.cab??1:1,Me=s*de*(1-.11*e.round*xi(.78,1,ee))*(1-.03*xi(.95,1,ee));let $=B<h?e.nose+(e.belt-e.nose)*Math.pow(xi(0,h,B),.7):B>f?(e.tail??e.belt)-.06*e.round*xi(.9,1,j):e.belt,Q=B<u?xi(h,u,B):B<d?1:1-xi(d,f,B),pe=$+((e.box!==void 0?Math.min(m,e.belt+1.15):m)-$)*Q,Se=Q>.02?1:0;ge&&($=m-.05,pe=m,Q=0,Se=0);const Re=.035*e.round*(1-xi(.85,1,ee))*(ge?0:1),$e=Me*(.97-(ge?0:e.tumble)*Math.min(1,Q*1.6)),ie=e.wheel+.07,A=M(B),xe=e.floor+.08*e.round*xi(.86,1,ee),ce=A<ie?Math.max(xe,e.wheel+Math.sqrt(ie*ie-A*A)):xe,le=Math.min(ce+.08,$-.1),be=ge?le+.12:Math.max(le+.04,$-.28),Pe=at=>at+c,ye=[[Me*.84,ce,0,0,1],[Me*.975,le,0,0,1],[Me*.978,le+.012,0,0,0],[Me,be,0,0,0],[Me*.995,$-.07,0,0,0],[Me*.97,$,0,0,0],[$e+(Me*.97-$e)*.42,$+(pe-$)*.5,.5,0,0],[$e,pe-(pe-$)*.06,.94,1,0],[$e*.72,pe,1,.5,0],[$e*.36,pe+Re*.5,1,.15,0]],ze=[],ct=[];ze.push([0,Pe(ce)]),ct.push([0,0,Se,1]);for(const[at,C,S,X,re]of ye)ze.push([at,Pe(C)]),ct.push([S,X,Se,re]);ze.push([0,Pe(pe+Re*.6)]),ct.push([1,0,Se,0]);for(let at=ye.length-1;at>=0;at--){const[C,S,X,re,he]=ye[at];ze.push([-C,Pe(S)]),ct.push([X,re,Se,he])}return{p:ze,a:ct}},D=p.map(T);if(D[0].p.length!==vi)throw new Error("the traffic body ring has changed its count");D.forEach((B,j)=>{const ee=p[j],ge=ee-a;B.p.forEach(([de,Me],$)=>{y.push(de,Me,ge),_.push(...B.a[$]),v.push((ee-h)/(u-h),(ee-d)/(f-d),Math.hypot(M(ee),Me-c-e.wheel)-e.wheel,0)})});const b=new k,w=new k,P=new k,F=new k,I=new k,H=new k,z=(B,j,ee,ge,de,Me)=>{w.fromArray(y,B*3),P.fromArray(y,j*3),F.fromArray(y,ee*3),I.subVectors(P,w).cross(H.subVectors(F,w)),!(I.lengthSq()<1e-12)&&(b.copy(w).add(P).add(F).multiplyScalar(1/3),I.dot(b.sub(H.set(ge,de,Me)))>=0?E.push(B,j,ee):E.push(B,ee,j))},N=(B,j)=>B*vi+(j%vi+vi)%vi,U=c+l*.4;for(let B=0;B+1<D.length;B++){const j=(p[B]+p[B+1])/2-a;for(let ee=0;ee<vi;ee++){const ge=N(B,ee),de=N(B,ee+1),Me=N(B+1,ee+1),$=N(B+1,ee);z(ge,de,Me,0,U,j),z(ge,Me,$,0,U,j)}}for(const B of[0,D.length-1]){const j=p[B]-a,ee=B===0?j+1:j-1,ge=D[B].p.map(Q=>Q[1]),de=(Math.min(...ge)+Math.max(...ge))/2,Me=y.length/3;y.push(0,de,j),_.push(0,0,0,0),v.push(9,9,9,0);const $=y.length/3;D[B].p.forEach(([Q,pe])=>{y.push(Q,pe,j),_.push(0,0,0,0),v.push(9,9,9,0)});for(let Q=0;Q<vi;Q++)z(Me,$+Q,$+(Q+1)%vi,0,de,ee)}const L=(B,j,ee,ge,de,Me,$,Q=1)=>{const pe=y.length/3;for(const Re of[-1,1])for(const $e of[-1,1])for(const ie of[-1,1])y.push(B+Re*ge*($e>0?Q:1),j+$e*de,ee+ie*Me*($e>0?Q:1)),_.push(0,0,0,$),v.push(9,9,9,0);const Se=(Re,$e,ie,A)=>{z(pe+Re,pe+$e,pe+ie,B,j,ee),z(pe+Re,pe+ie,pe+A,B,j,ee)};Se(0,1,3,2),Se(4,5,7,6),Se(0,1,5,4),Se(2,3,7,6),Se(0,2,6,4),Se(1,3,7,5)};if(n){const B=e.box!==void 0||e.livery==="bus";for(const j of[-1,1]){const ee=h+(B?.15:.42),ge=s*(e.cab??1);B?L(j*(ge+.16),c+e.belt+.55,ee-a,.04,.24,.1,1):L(j*(ge+.06),c+e.belt+.04,ee-a,.085,.05,.07,1)}}e.livery==="taxi"&&L(0,c+l+.13,(u+d)/2-a-.1,.36,.11,.13,2,.85);const G=new Ot;return G.setAttribute("position",new wt(y,3)),G.setAttribute("carA",new wt(_,4)),G.setAttribute("carB",new wt(v,4)),G.setIndex(E),G.computeVertexNormals(),G.computeBoundingSphere(),G}function E1(i,e){const[t,n,s]=i.half,r=-(n+i.clearance),a=h=>h-s,o=h=>h+r,l=e.side??[e.screen[0]+.4,Math.min(e.back[1]-.42,e.bed??99)],c=e.pillars?-99:(e.screen[1]+e.back[0])/2+.02;return{uGlass:{value:new Mt(a(e.screen[0]),a(e.screen[1]),a(e.back[0]),a(e.back[1]))},uSide:{value:new Mt(a(l[0]),a(l[1]),c===-99?-99:a(c),e.pillars??0)},uLampY:{value:new Mt(o(e.head[0]),o(e.head[1]),o(e.rear[0]),o(e.rear[1]))},uLampX:{value:new Mt(e.headX[0]*t,e.headX[1]*t,e.rearX[0]*t,e.rearX[1]*t)},uShape:{value:new Mt(s,t,e.livery?S1[e.livery]:0,e.box!==void 0?a(e.box):e.bed!==void 0?a(e.bed):99)},uLevels:{value:new Mt(o(e.belt),o(e.floor),o(n*2-.02),e.bed!==void 0?1:0)}}}const A1=`
  attribute vec4 carA; attribute vec4 carB; attribute vec4 aState;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN; varying vec4 vState;
  uniform vec4 uShape;
  ${Ki}`,T1=`
  vCarA = carA; vCarB = carB; vLocal = position; vLocalN = normal; vState = aState;
  if (aState.w > 0.5) {
    float ends = smoothstep(uShape.x * 0.45, uShape.x, abs(position.z));
    float lump = p2pNoise(position.xz * 3.1 + position.y * 2.3 + aState.w * 7.0) - 0.5;
    transformed -= normalize(vec3(position.x, 0.3 * position.y, position.z) + 1e-4) * (0.06 + 0.22 * ends) * (0.6 + lump);
  }`,R1=`
  uniform vec4 uGlass; uniform vec4 uSide; uniform vec4 uLampY; uniform vec4 uLampX; uniform vec4 uShape; uniform vec4 uLevels;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN; varying vec4 vState;`,C1=`
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
  }`,L1=`
  roughnessFactor = mix(mix(roughnessFactor, 0.6, vTrim), 0.05, vGlass);
  metalnessFactor = mix(mix(metalnessFactor, 0.0, vTrim), 0.85, vGlass);
  if (vState.w > 0.5) { roughnessFactor = max(roughnessFactor, 0.7); metalnessFactor *= 0.4; }`;function wh(i,e,t){const n=t?new tf({color:16777215,metalness:.3,roughness:.38,clearcoat:1,clearcoatRoughness:.08,envMap:e,envMapIntensity:.8}):new Fs({color:16777215,metalness:.3,roughness:.4,envMap:e,envMapIntensity:.7});return n.onBeforeCompile=s=>{Object.assign(s.uniforms,i),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
${A1}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${T1}`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${R1}
${Ki}`).replace("#include <color_fragment>",`#include <color_fragment>
${C1}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${L1}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vLamp;`)},n.customProgramCacheKey=()=>t?"p2p-traffic-body-near":"p2p-traffic-body-far",n}const P1=`
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
  }`;function bh(i,e=!1){const t=(e?[[0,.3],[.9,.5],[1,.3],[1,-.3],[.9,-.5],[0,-.3]]:[[0,.1],[.64,.44],[.72,.5],[.93,.5],[1,.36],[1,-.36],[.93,-.5],[.72,-.5],[.64,-.44],[0,-.1]]).map(([h,u])=>new nt(h,u)),n=new ca(t,i).rotateZ(-Math.PI/2),s=n.getAttribute("position"),r=n.index,a=new k,o=new k,l=new k,c=new k;for(let h=0;h<r.count;h+=3)if(a.fromBufferAttribute(s,r.getX(h)),o.fromBufferAttribute(s,r.getX(h+1)),l.fromBufferAttribute(s,r.getX(h+2)),c.subVectors(o,a).cross(l.clone().sub(a)),c.dot(a.add(o).add(l))<0){const u=r.getX(h+1);r.setX(h+1,r.getX(h+2)),r.setX(h+2,u)}return n.deleteAttribute("uv"),n.computeVertexNormals(),n}function D1(i){const e=new Fs({color:16777215,roughness:.85,envMap:i,envMapIntensity:.6});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLocal = position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <color_fragment>",`#include <color_fragment>
${P1}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
roughnessFactor = mix(0.9, 0.28, wheelMetal); metalnessFactor = mix(0.0, 0.9, wheelMetal);`)},e.customProgramCacheKey=()=>"p2p-traffic-wheel",e}const ul=[[15263972,23],[855568,19],[6053990,9],[3816770,7],[11120049,14],[2306639,7],[3105704,3],[9376784,6],[11740702,2],[3099194,2],[9075296,2],[7023130,1],[13208082,1],[14078660,4]],I1=ul.reduce((i,[,e])=>i+e,0),Sh=[2051724,11544092,2846271,13791770],Eh=[15263972,15263972,11740702,2306639,2846271,14263572];function U1(i,e,t){const n=(i>>>4)%1e3;if(e==="taxi")return t.setHex(15906565).offsetHSL(0,0,((i&15)-7.5)*.004);if(e==="bus")return t.setHex(Sh[n%Sh.length]);if(e==="truck")return t.setHex(Eh[n%Eh.length]);if(e==="van"&&n<550)return t.setHex(15527661);let s=n/1e3*I1;for(const[r,a]of ul)if(s-=a,s<0)return t.setHex(r).offsetHSL(0,0,((i&15)-7.5)*.003);return t.setHex(ul[0][0])}const ms=200,F1=55,N1=110;class ra{group=new Qt;kinds=[];wheels;m=new Lt;w=new Lt;q=new Jt;p=new k;s=new k;one=new k(1,1,1);c=new Qe;steer=new Jt;spin=new Jt;wq=new Jt;wp=new k;static X=new k(1,0,0);static Y=new k(0,1,0);rolled=new Map;at=new Map;clock=0;frames=0;constructor(e,t=null){const n=(r,a,o,l,c=!0)=>{const h=new Kn(new Float32Array(o*4),4).setUsage(As);r.setAttribute("aState",h);const u=new Xi(r,a,o);return u.count=0,u.castShadow=l,u.receiveShadow=!0,c&&u.setColorAt(0,this.c.setHex(16777215)),u.instanceMatrix.setUsage(As),this.group.add(u),{mesh:u,state:h,count:0}};for(const r of e){const a=b1(r.name),o=E1(r,a),l=n(Mh(r,a,.17,!0),wh(o,t,!0),ms,!0),c=n(Mh(r,a,1,!1),wh(o,t,!1),ms,!0);l.mesh.name=`traffic ${r.name}`,c.mesh.name=`traffic ${r.name} far`,this.kinds.push({kind:r,lines:a,near:l,far:c,wheelbase:a.axles[1]-a.axles[0]})}const s=D1(t);this.wheels=[n(bh(14),s,ms*4,!1,!1),n(bh(7,!0),s,ms*4,!1,!1)],this.wheels[0].mesh.name="traffic wheels",this.wheels[1].mesh.name="traffic wheels far",this.group.name="traffic"}update(e,t,n,s){this.clock+=n,this.frames++;const r=this.clock%.8<.4?1:0,a=Math.min(t,ms);for(const c of this.kinds)c.near.count=0,c.far.count=0;for(const c of this.wheels)c.count=0;const o=new Set;this.at.clear();for(let c=0;c<a;c++){const h=c*dr,u=e[h+Yt.INDEX],d=e[h+Yt.FLAGS],f=e[h+Yt.SPEED],m=this.kinds[e[h+Yt.KIND]]??this.kinds[1]??this.kinds[0];if(!m)break;this.p.set(e[h+Yt.POS],e[h+Yt.POS+1],e[h+Yt.POS+2]),this.q.set(e[h+Yt.ROT],e[h+Yt.ROT+1],e[h+Yt.ROT+2],e[h+Yt.ROT+3]),this.m.compose(this.p,this.q,this.one);const g=this.p.distanceTo(s),x=g<F1,p=x?m.near:m.far,y=p.count++;p.mesh.setMatrixAt(y,this.m),p.mesh.setColorAt(y,U1(e[h+Yt.LOOK],m.kind.name,this.c));const _=d&Ws.WRECK?1:0;p.state.setXYZW(y,d&Ws.BRAKING?1:0,_?0:d&Ws.LEFT?r:0,_?0:d&Ws.RIGHT?r:0,_);const v=m.lines,[E,M,T]=m.kind.half,D=-(M+m.kind.clearance),b=(this.rolled.get(u)??0)+(_?0:f*n/v.wheel);this.rolled.set(u,b%(Math.PI*2)),o.add(u);const w=_?0:Math.max(-.6,Math.min(.6,Math.atan(m.wheelbase*e[h+Yt.CURVE]))),P=x?this.wheels[0]:this.wheels[1];this.spin.setFromAxisAngle(ra.X,-b);for(let F=0;F<(g<N1?2:0);F++){const I=v.tyre[F],H=v.axles[F]-T;this.steer.setFromAxisAngle(ra.Y,F===0?-w:0),this.wq.copy(this.steer).multiply(this.spin);for(const z of[-1,1]){if(P.count>=ms*4)break;this.wp.set(z*(E*(v.cab!==void 0&&F===0?v.cab:1)-I/2-.03),D+v.wheel,H),this.w.compose(this.wp,this.wq,this.s.set(I,v.wheel,v.wheel)),P.mesh.setMatrixAt(P.count++,this.w.premultiply(this.m))}}this.at.set(u,this.p.clone())}for(const c of this.rolled.keys())o.has(c)||this.rolled.delete(c);const l=this.frames<=3;for(const c of[...this.kinds.flatMap(h=>[h.near,h.far]),...this.wheels]){const h=c.mesh;l&&c.count===0&&h.setMatrixAt(c.count++,this.w.makeTranslation(0,-1e4,0)),h.count=c.count,h.visible=l||c.count>0,h.frustumCulled=!l,h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),c.state.needsUpdate=!0,c.count>0&&!l&&h.computeBoundingSphere()}}static HORN=Ws.HORN}const co=["chase","hood","high"];class z1{constructor(e,t=-1/0){this.ground=e,this.sea=t}camera=new Un(62,1,.3,2600);mode="chase";dir=new k(0,0,-1);eye=new k;look=new k;fresh=!0;next(){return this.mode=co[(co.indexOf(this.mode)+1)%co.length],this.fresh=!0,this.mode}cut(){this.fresh=!0}update(e,t){const n=new k(e[Ee.POS],e[Ee.POS+1],e[Ee.POS+2]),s=new Jt(e[Ee.ROT],e[Ee.ROT+1],e[Ee.ROT+2],e[Ee.ROT+3]).normalize(),r=new k(0,0,-1).applyQuaternion(s),a=new k(e[Ee.VEL],0,e[Ee.VEL+2]),o=a.length();if(this.mode==="hood"){this.camera.position.copy(n).add(new k(0,.95,-.9).applyQuaternion(s)),this.camera.quaternion.copy(s),this.camera.fov=72,this.camera.updateProjectionMatrix();return}const l=r.clone().setY(0);l.lengthSq()<1e-6?l.copy(this.dir):l.normalize();const c=l.clone(),h=e[Ee.SPEED];h>4&&o>4&&c.lerp(a.clone().divideScalar(o),Math.min(.75,(h-4)/12)).normalize();const u=this.fresh?1:1-Math.exp(-t*4.5);this.dir.lerp(c,u).setY(0).normalize();const d=this.mode==="high",f=d?16:6.4+Math.min(2.2,o*.035),m=d?22:2.35,g=n.clone().addScaledVector(this.dir,-f).add(new k(0,m,0)),x=this.ground.tunnel(n.x,n.y,n.z);if(x){const v=x.way,E=v.p[x.si],M=v.p[x.si+1],T=M[0]-E[0],D=M[2]-E[2],b=Math.hypot(T,D)||1,w=T/b,P=D/b,F=g.x-E[0],I=g.z-E[2],H=F*w+I*P,z=Math.max(-v.half+.8,Math.min(v.half-.8,-F*P+I*w));g.x=E[0]+w*H-P*z,g.z=E[2]+P*H+w*z;const N=(this.ground.tunnel(g.x,n.y,g.z)?.roof??x.roof)-.45;g.y=Math.min(g.y,N),g.y=Math.max(g.y,x.floor+.9)}else{g.y=Math.max(g.y,this.ground.surface(g.x,g.z,n.y+1.5)+.9,this.sea+.7);const v=this.ground.deckOver(g.x,g.z,n.y+.5);v<1/0&&(g.y=Math.min(g.y,v-.4))}const p=n.clone().addScaledVector(this.dir,d?6:5).add(new k(0,d?0:1,0)),y=this.fresh?1:1-Math.exp(-t*9);this.eye.lerp(g,y),this.look.lerp(p,this.fresh?1:1-Math.exp(-t*14)),this.fresh=!1,this.camera.position.copy(this.eye),this.camera.lookAt(this.look);const _=60+Math.min(14,o*.28);Math.abs(_-this.camera.fov)>.05&&(this.camera.fov=_,this.camera.updateProjectionMatrix())}}const Ah=80,Yr=26;function Th(i,e){try{i.setPointerCapture(e)}catch{}}class O1{constructor(e){this.root=e,window.addEventListener("keydown",l=>{l.repeat||(this.keys.add(l.code),this.onKey(l.code),(l.code.startsWith("Arrow")||l.code==="Space")&&l.preventDefault())}),window.addEventListener("keyup",l=>this.keys.delete(l.code));const t=()=>{this.keys.clear(),this.wheel=null,this.pedals.clear(),this.paint()};window.addEventListener("blur",t),document.addEventListener("visibilitychange",()=>{document.hidden&&t()});const n=e.querySelector("#wheel");n.addEventListener("pointerdown",l=>{this.wheel={id:l.pointerId,x0:l.clientX,value:0},Th(n,l.pointerId),this.paint()}),n.addEventListener("pointermove",l=>{this.wheel?.id===l.pointerId&&(this.wheel.value=Math.max(-1,Math.min(1,(l.clientX-this.wheel.x0)/Ah)),this.paint())});const s=l=>{this.wheel?.id===l.pointerId&&(this.wheel=null,this.paint())};for(const l of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(l,s);const r=e.querySelector("#gas"),a=e.querySelector("#brake"),o=(l,c)=>{if(!l)return!1;const h=l.getBoundingClientRect();return c.clientX>h.left-Yr&&c.clientX<h.right+Yr&&c.clientY>h.top-Yr&&c.clientY<h.bottom+Yr};for(const l of e.querySelectorAll("[data-pedal]")){const c=l.dataset.pedal,h=d=>{if(c==="hand")return["hand"];const f=[];return o(r,d)&&f.push("gas"),o(a,d)&&f.push("brake"),f.length?f:[c]};l.addEventListener("pointerdown",d=>{this.pedals.set(d.pointerId,h(d)),Th(l,d.pointerId),this.paint(),d.preventDefault()}),l.addEventListener("pointermove",d=>{this.pedals.has(d.pointerId)&&(this.pedals.set(d.pointerId,h(d)),this.paint())});const u=d=>{this.pedals.delete(d.pointerId)&&this.paint()};for(const d of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(d,u)}}keys=new Set;keySteer=0;wheel=null;pedals=new Map;override=null;onKey=()=>{};held(e){for(const t of this.pedals.values())if(t.includes(e))return!0;return!1}paint(){for(const t of this.root.querySelectorAll("[data-pedal]"))t.classList.toggle("down",this.held(t.dataset.pedal));const e=this.root.querySelector("#wheel-knob");e&&(e.style.opacity=this.wheel?"1":"0",e.style.transform=`translateX(${(this.wheel?.value??0)*Ah}px)`,this.wheel&&(e.style.left=`${this.wheel.x0}px`))}sample(e){if(this.override)return this.override;const t=this.keys,n=t.has("ArrowLeft")||t.has("KeyA"),r=(t.has("ArrowRight")||t.has("KeyD")?1:0)-(n?1:0),a=(r===0?6:3.5)*e;this.keySteer+=Math.max(-a,Math.min(a,r-this.keySteer));const o=this.wheel?this.wheel.value:this.keySteer,l=t.has("ArrowUp")||t.has("KeyW")||this.held("gas"),c=t.has("ArrowDown")||t.has("KeyS")||this.held("brake"),h=t.has("Space")||this.held("hand");return{steer:Math.round(o*1e3),throttle:l?1e3:0,brake:c?1e3:0,handbrake:h?1:0}}}class k1{ctx=null;engine=null;skid=null;wind=null;noise=null;enabled=!0;start(){if(this.ctx){this.ctx.resume();return}const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=this.ctx=new e,n=t.createGain();n.gain.value=.5,n.connect(t.destination);const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=500,s.Q.value=1.2;const r=t.createGain();r.gain.value=0;const a=t.createOscillator();a.type="sawtooth";const o=t.createOscillator();o.type="square";const l=t.createGain();l.gain.value=.5,a.connect(s),o.connect(l).connect(s),s.connect(r).connect(n),a.start(),o.start(),this.engine={a,b:o,filter:s,gain:r};const c=t.createBuffer(1,t.sampleRate*2,t.sampleRate),h=c.getChannelData(0);for(let d=0;d<h.length;d++)h[d]=Math.random()*2-1;this.noise=c;const u=(d,f,m)=>{const g=t.createBufferSource();g.buffer=c,g.loop=!0;const x=t.createBiquadFilter();x.type=d,x.frequency.value=f,x.Q.value=m;const p=t.createGain();return p.gain.value=0,g.connect(x).connect(p).connect(n),g.start(),p};this.skid=u("bandpass",1700,2.5),this.wind=u("lowpass",500,.5)}burst(e,t,n,s){const r=this.ctx;if(!r||!this.noise||!this.enabled)return;const a=r.createBufferSource();a.buffer=this.noise;const o=r.createBiquadFilter();o.type=e,o.frequency.value=t,o.Q.value=.8;const l=r.createGain(),c=r.currentTime;l.gain.setValueAtTime(Math.min(1,n),c),l.gain.exponentialRampToValueAtTime(.001,c+s),a.connect(o).connect(l).connect(r.destination),a.start(c,Math.random()*1.5,s+.05)}splash(e){const t=Math.min(1,e/25);this.burst("lowpass",180,.5,.3+.4*t),this.burst("bandpass",1400,.9+t*.8,.2+.35*t),this.burst("highpass",3500,.6+t*.6,.12+.2*t)}horn(e){if(!this.ctx||!this.enabled||e>120)return;const t=this.ctx.currentTime,n=this.ctx.createGain(),s=.16/(1+e*e/400);n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(s,t+.02),n.gain.setValueAtTime(s,t+.5),n.gain.linearRampToValueAtTime(0,t+.58),n.connect(this.ctx.destination);for(const r of[392,494]){const a=this.ctx.createOscillator();a.type="sawtooth",a.frequency.value=r,a.connect(n),a.start(t),a.stop(t+.6)}}thump(e){this.burst("lowpass",260+e*20,.25+e*.06,.25+Math.min(.5,e*.03)),this.burst("bandpass",2400,e*.03,.18)}boom(){this.burst("lowpass",95,1.6,1.4),this.burst("lowpass",420,1.1,.5),this.burst("bandpass",1800,.7,.35),this.burst("highpass",3200,.35,.9)}glass(){this.burst("highpass",3200,.5,.7),this.burst("bandpass",6500,.35,.4)}update(e,t){const n=this.ctx;if(!n||!this.engine||!this.skid||!this.wind)return;const s=n.currentTime,r=this.enabled?1:0,a=e[Ee.RPM],o=a/60*2;this.engine.a.frequency.setTargetAtTime(o,s,.03),this.engine.b.frequency.setTargetAtTime(o*.5,s,.03),this.engine.filter.frequency.setTargetAtTime(300+a*.25+t*1400,s,.05),this.engine.gain.gain.setTargetAtTime(r*(.1+.16*t+a/7200*.08),s,.05);let l=0;for(let h=0;h<4;h++){const u=Ee.WHEELS+h*Ee.WHEEL_STRIDE;e[u+Ee.W_GROUNDED]&&(l=Math.max(l,Math.abs(e[u+Ee.W_SLIP])/.1-1.2,Math.abs(e[u+Ee.W_SLIP_TAN])/.14-1.2))}const c=Math.hypot(e[Ee.VEL],e[Ee.VEL+2]);this.skid.gain.setTargetAtTime(r*Math.min(.35,Math.max(0,l)*.2)*Math.min(1,c/4),s,.04),this.wind.gain.setTargetAtTime(r*Math.min(.3,c*c/9e3),s,.2)}}const Ft=i=>document.getElementById(i);class B1{speed=Ft("speed");gear=Ft("gear");rpm=Ft("rpm").firstElementChild;time=Ft("time");place=Ft("place");toastEl=Ft("toast");menu=Ft("menu");hurt=Ft("hurt");lastHurt=-1;toastTimer=0;lastKmh=-1;lastGear="";lastTime="";constructor(e,t){Ft("stamp").textContent=`${e} · ${t}`,Ft("b-menu").addEventListener("click",()=>this.toggleMenu()),document.addEventListener("pointerdown",n=>{this.menu.classList.contains("open")&&!this.menu.contains(n.target)&&n.target!==Ft("b-menu")&&this.toggleMenu(!1)})}toggleMenu(e){this.menu.classList.toggle("open",e??!this.menu.classList.contains("open"))}on(e,t){Ft(e).addEventListener("click",t)}mark(e,t){Ft(e).classList.toggle("on",t)}starts(e,t){const n=Ft("starts");e.forEach((s,r)=>{const a=document.createElement("button");a.textContent=s,a.addEventListener("click",()=>{t(r),this.toggleMenu(!1)}),n.appendChild(a)})}cars(e,t,n){const s=Ft("cars");e.forEach((r,a)=>{const o=document.createElement("button"),l=document.createElement("b");l.textContent=r.name;const c=document.createElement("small");c.textContent=r.says,o.append(l,c),o.classList.toggle("on",a===t),o.addEventListener("click",()=>{n(a),this.toggleMenu(!1)}),s.appendChild(o)})}strength(e,t,n,s){const r=Ft("strength"),a=Ft("strength-says");this.strengthSays=t,r.value=String(e),a.textContent=t(e);for(const o of["keydown","keyup","keypress"])r.addEventListener(o,l=>l.stopPropagation());r.addEventListener("input",()=>{a.textContent=t(Number(r.value))}),r.addEventListener("change",()=>{r.blur(),n(Number(r.value))}),Ft("strength-own").addEventListener("click",s)}strengthSays=()=>"";setStrength(e){Ft("strength").value=String(e),Ft("strength-says").textContent=this.strengthSays(e)}pickedCar(e){[...Ft("cars").children].forEach((t,n)=>t.classList.toggle("on",n===e))}setPlace(e){this.place.textContent=e}report(e){Ft("report").textContent=e}loading(e){Ft("loading-step").textContent=e}loadingNote(e){Ft("loading-note").textContent=e}anywhere(e,t,n){const s=Ft("place-q"),r=Ft("place-go"),a=Ft("place-found"),o=Ft("place-home");for(const c of["keydown","keyup","keypress"])s.addEventListener(c,h=>h.stopPropagation());o.style.display=e?"":"none",o.addEventListener("click",n);const l=async()=>{const c=s.value.trim();if(c){a.textContent="asking…";try{const h=await t(c);a.textContent=h.length?"":"nothing found by that name";for(const u of h){const d=document.createElement("button");d.textContent=u.label,d.addEventListener("click",()=>{a.textContent="going…",u.go()}),a.appendChild(d)}}catch(h){a.textContent=`the search failed: ${h instanceof Error?h.message:String(h)}`}}};r.addEventListener("click",()=>void l()),s.addEventListener("keydown",c=>{c.key==="Enter"&&l()})}loaded(){Ft("loading").remove()}fail(e){const t=Ft("loading-step");t.className="err",t.textContent=e}toast(e,t=2200){this.toastEl.textContent=e,this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove("show"),t)}update(e,t,n){const s=Math.round(Math.abs(e[Ee.SPEED])*3.6);s!==this.lastKmh&&(this.speed.firstChild.textContent=String(s),this.lastKmh=s);const r=e[Ee.GEAR]<0?"R":String(e[Ee.GEAR]);r!==this.lastGear&&(this.gear.textContent=r,this.lastGear=r);const a=Math.min(1,e[Ee.RPM]/7200);this.rpm.style.width=`${(a*100).toFixed(0)}%`,this.rpm.classList.toggle("red",a>.9);const o=e[Ee.EXPLODED]>.5?2e3:e[Ee.DROWNED]>.5?1e3:Math.round(e[Ee.DAMAGE]*100);o!==this.lastHurt&&(this.hurt.textContent=o===2e3?"blown up":o===1e3?"engine flooded":o?`damage ${o}%  ·  engine ${Math.round(e[Ee.POWER]*100)}%`:"",this.lastHurt=o);const l=Math.floor(t/60),c=`${n?"▶ ":""}${l}:${(t-l*60).toFixed(1).padStart(4,"0")}`;c!==this.lastTime&&(this.time.textContent=c,this.lastTime=c)}}const Dn=128,H1=132,G1=20,V1=8,W1=70,tn={land:"#171c23",water:"#1c3a52",green:"#1e3828",paved:"#222831",pier:"#2a2f37",building:"#2e3540",minor:"#525b68",street:"#8d97a5",main:"#e6dfcb",path:"#4d6a55",car:"#ff5a3c",target:"#ffd23c",ink:"#f2f0ea",rim:"rgba(242,240,234,.35)"},q1=new Set(["park","grass","garden","wood","pitch","playground"]),X1=new Set(["water","pool"]);function $1(i){return/^(secondary|primary|trunk|motorway)$/.test(i)?2:/^(residential|unclassified|tertiary)$/.test(i)?1:0}class Y1{constructor(e,t){this.page=e,this.places=e.starts.map(d=>({x:d.x,z:d.z,label:d.label.split(",")[0]}));const n=(d,f)=>(Math.floor(d/Dn)+512)*4096+Math.floor(f/Dn)+512,s=(d,f,m)=>{let g=1/0,x=-1/0,p=1/0,y=-1/0;for(const[_,v]of m)g=Math.min(g,_),x=Math.max(x,_),p=Math.min(p,v),y=Math.max(y,v);for(let _=Math.floor(g/Dn);_<=Math.floor(x/Dn);_++)for(let v=Math.floor(p/Dn);v<=Math.floor(y/Dn);v++){const E=n(_*Dn,v*Dn);let M=this.cells.get(E);M||(M={roads:[],buildings:[],areas:[],lines:[]},this.cells.set(E,M)),M[d].push(f)}};this.roads=[...e.roads,...(e.ways??[]).filter(d=>d.k==="tunnel").map(d=>({c:d.c,w:d.w,p:d.p.map(f=>[f[0],f[2]])}))],this.roads.forEach((d,f)=>s("roads",f,d.p)),e.buildings.forEach((d,f)=>s("buildings",f,d.r)),e.areas.forEach((d,f)=>s("areas",f,d.r)),e.lines.forEach((d,f)=>{(d.k==="path"||d.k==="steps")&&s("lines",f,d.p)}),this.stamp={roads:new Uint32Array(this.roads.length),buildings:new Uint32Array(e.buildings.length),areas:new Uint32Array(e.areas.length),lines:new Uint32Array(e.lines.length)};const r=12,a=Math.ceil((e.box[2]-e.box[0])/r),o=Math.ceil((e.box[3]-e.box[1])/r);this.water=document.createElement("canvas"),this.water.width=a,this.water.height=o;const l=this.water.getContext("2d"),c=l.createImageData(a,o);for(let d=0;d<o;d++)for(let f=0;f<a;f++){const m=t.at(e.box[0]+(f+.5)*r,e.box[1]+(d+.5)*r)<=e.ground.water+.6,g=(d*a+f)*4;c.data[g]=28,c.data[g+1]=58,c.data[g+2]=82,c.data[g+3]=m?255:0}l.putImageData(c,0,0);const h=d=>document.getElementById(d);this.mini=h("mini"),this.mini.width=this.mini.height=Math.round(H1*this.dpr),this.miniCtx=this.mini.getContext("2d"),this.panel=h("map"),this.big=this.panel.querySelector("canvas"),this.bigCtx=this.big.getContext("2d"),this.still=document.createElement("canvas"),this.stillCtx=this.still.getContext("2d"),this.mini.addEventListener("pointerdown",d=>{d.preventDefault(),d.stopPropagation(),this.toggle()}),h("map-close").addEventListener("click",()=>this.toggle(!1)),h("map-in").addEventListener("click",()=>this.setZoom(this.zoom*2)),h("map-out").addEventListener("click",()=>this.setZoom(this.zoom/2)),h("map-clear").addEventListener("click",()=>this.setTarget(null));let u=null;this.big.addEventListener("pointerdown",d=>{u={x:d.clientX,y:d.clientY}}),this.big.addEventListener("pointerup",d=>{if(!u||Math.hypot(d.clientX-u.x,d.clientY-u.y)>12){u=null;return}u=null;const f=this.big.getBoundingClientRect(),m=this.mapView();this.tap((d.clientX-f.left-f.width/2)/(m.scale/this.dpr)+m.cx,(d.clientY-f.top-f.height/2)/(m.scale/this.dpr)+m.cz)}),window.addEventListener("resize",()=>{this.stillView=null})}target=null;onTarget=()=>{};cells=new Map;stamp={roads:new Uint32Array(0),buildings:new Uint32Array(0),areas:new Uint32Array(0),lines:new Uint32Array(0)};pass=0;water;mini;miniCtx;panel;big;bigCtx;still;stillCtx;stillView=null;zoom=1;sinceMini=1;sinceMap=1;reach=180;car={x:0,z:0,heading:0,speed:0};dpr=Math.min(2,window.devicePixelRatio||1);places;roads;get open(){return this.panel.classList.contains("open")}toggle(e){this.panel.classList.toggle("open",e??!this.open),this.stillView=null,this.sinceMap=1}setZoom(e){this.zoom=Math.max(1,Math.min(8,e)),this.stillView=null,this.sinceMap=1}setTarget(e){this.target=e,this.sinceMini=this.sinceMap=1,this.onTarget(e)}tap(e,t){const n=Math.max(W1,14/(this.mapView().scale/this.dpr));for(const o of this.places)if(Math.hypot(o.x-e,o.z-t)<n*.5)return this.setTarget({...o}),this.target;let s=1/0,r=0,a=0;for(const o of this.near("roads",e,t,n)){const l=this.roads[o].p;for(let c=0;c+1<l.length;c++){const[h,u]=l[c],[d,f]=l[c+1],m=d-h,g=f-u,x=m*m+g*g,p=x>0?Math.max(0,Math.min(1,((e-h)*m+(t-u)*g)/x)):0,y=Math.hypot(h+m*p-e,u+g*p-t);y<s&&(s=y,r=h+m*p,a=u+g*p)}}return s>n?null:(this.setTarget({x:r,z:a,label:"the pin"}),this.target)}update(e,t,n,s,r){this.car={x:e,z:t,heading:n,speed:s};const a=150+Math.min(170,Math.abs(s)*4.5);this.reach+=(a-this.reach)*Math.min(1,r*1.5),this.sinceMini+=r,this.sinceMap+=r,this.sinceMini>=1/G1&&(this.sinceMini=0,this.drawMini()),this.open&&this.sinceMap>=1/V1&&(this.sinceMap=0,this.drawMap())}near(e,t,n,s){const r=[],a=this.stamp[e],o=++this.pass;for(let l=Math.floor((t-s)/Dn);l<=Math.floor((t+s)/Dn);l++)for(let c=Math.floor((n-s)/Dn);c<=Math.floor((n+s)/Dn);c++){const h=this.cells.get((l+512)*4096+c+512);if(h)for(const u of h[e])a[u]!==o&&(a[u]=o,r.push(u))}return r}paint(e,t,n,s,r,a){const o=this.page;e.setTransform(1,0,0,1,0,0),e.fillStyle=tn.land,e.fillRect(0,0,t,n),e.translate(t/2+s.ox,n/2+s.oy),e.rotate(s.rot),e.scale(s.scale,s.scale),e.translate(-s.cx,-s.cz),e.imageSmoothingEnabled=!0,e.drawImage(this.water,o.box[0],o.box[1],o.box[2]-o.box[0],o.box[3]-o.box[1]);const l=d=>{e.moveTo(d[0][0],d[0][1]);for(let f=1;f<d.length;f++)e.lineTo(d[f][0],d[f][1]);e.closePath()},c=d=>{e.moveTo(d[0][0],d[0][1]);for(let f=1;f<d.length;f++)e.lineTo(d[f][0],d[f][1])},h=this.near("areas",s.cx,s.cz,r);for(const[d,f]of[[m=>q1.has(m),tn.green],[m=>X1.has(m),tn.water],[m=>m==="pier",tn.pier],[m=>m==="plaza"||m==="parking",tn.paved]]){e.beginPath();for(const m of h){const g=o.areas[m];d(g.k)&&g.r.length>2&&l(g.r)}e.fillStyle=f,e.fill()}if(s.scale>.1){e.beginPath();for(const d of this.near("buildings",s.cx,s.cz,r)){const f=o.buildings[d];f.r.length>3&&l(f.r)}e.fillStyle=tn.building,e.fill()}if(e.lineCap="round",e.lineJoin="round",a){e.beginPath();for(const d of this.near("lines",s.cx,s.cz,r))c(o.lines[d].p);e.strokeStyle=tn.path,e.lineWidth=Math.max(1.2*this.dpr/s.scale,1.5),e.setLineDash([4,4]),e.stroke(),e.setLineDash([])}const u=this.near("roads",s.cx,s.cz,r);for(const[d,f,m]of[[0,tn.minor,.8],[1,tn.street,1.3],[2,tn.main,2.2]]){if(d===0&&s.scale<.2*this.dpr)continue;e.beginPath();let g=4;for(const x of u){const p=this.roads[x];$1(p.c)===d&&(c(p.p),g=Math.max(g,p.w))}e.strokeStyle=f,e.lineWidth=Math.max(m*this.dpr/s.scale,d===2?Math.min(g,14)*.8:d===1?7:3.5),e.stroke()}e.setTransform(1,0,0,1,0,0)}toScreen(e,t,n,s,r){const a=(s-e.cx)*e.scale,o=(r-e.cz)*e.scale,l=Math.cos(e.rot),c=Math.sin(e.rot);return[t/2+e.ox+a*l-o*c,n/2+e.oy+a*c+o*l]}arrow(e,t,n,s,r){e.save(),e.translate(t,n),e.rotate(s),e.beginPath(),e.moveTo(0,-r),e.lineTo(r*.72,r*.8),e.lineTo(0,r*.4),e.lineTo(-r*.72,r*.8),e.closePath(),e.fillStyle=tn.car,e.strokeStyle="#fff",e.lineWidth=Math.max(1,r*.16),e.fill(),e.stroke(),e.restore()}drawMini(){const e=this.miniCtx,t=this.mini.width,n=this.dpr,s=t/2,r={cx:this.car.x,cz:this.car.z,scale:s*.86/this.reach,rot:-this.car.heading,ox:0,oy:s*.22};if(e.save(),e.beginPath(),e.arc(s,s,s,0,Math.PI*2),e.clip(),this.paint(e,t,t,r,this.reach*1.7,!0),this.target){const[l,c]=this.toScreen(r,t,t,this.target.x,this.target.z),h=l-s,u=c-s,d=Math.hypot(h,u),f=s-9*n,m=Math.hypot(this.target.x-this.car.x,this.target.z-this.car.z);if(e.fillStyle=tn.target,e.strokeStyle="#1a1a1a",e.lineWidth=1.5*n,d<=f)e.beginPath(),e.arc(l,c,5*n,0,Math.PI*2),e.fill(),e.stroke();else{const g=h/d,x=u/d,p=s+g*f,y=s+x*f,_=7*n;e.beginPath(),e.moveTo(p+g*_,y+x*_),e.lineTo(p-g*_*.5-x*_*.8,y-x*_*.5+g*_*.8),e.lineTo(p-g*_*.5+x*_*.8,y-x*_*.5-g*_*.8),e.closePath(),e.fill(),e.stroke(),e.font=`600 ${10*n}px system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle";const v=m>=1e3?`${(m/1e3).toFixed(1)} km`:`${Math.round(m/10)*10} m`,E=s+g*(f-20*n),M=s+x*(f-20*n);e.lineWidth=3*n,e.strokeStyle="rgba(10,12,16,.85)",e.strokeText(v,E,M),e.fillStyle=tn.target,e.fillText(v,E,M)}}this.arrow(e,s,s+r.oy,0,7.5*n),e.restore(),e.beginPath(),e.arc(s,s,s-n,0,Math.PI*2),e.strokeStyle=tn.rim,e.lineWidth=2*n,e.stroke();const a=s+Math.sin(r.rot)*(s-9*n),o=s-Math.cos(r.rot)*(s-9*n);e.font=`700 ${10*n}px system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.lineWidth=3*n,e.strokeStyle="rgba(10,12,16,.85)",e.strokeText("N",a,o),e.fillStyle=tn.ink,e.fillText("N",a,o)}mapView(){const e=this.big.width||1,t=this.big.height||1,n=this.page.box,s=Math.min(e/(n[2]-n[0]),t/(n[3]-n[1]))*.98;return this.zoom<=1?{cx:(n[0]+n[2])/2,cz:(n[1]+n[3])/2,scale:s,rot:0,ox:0,oy:0}:{cx:this.car.x,cz:this.car.z,scale:s*this.zoom,rot:0,ox:0,oy:0}}drawMap(){const e=this.big.getBoundingClientRect(),t=Math.round(e.width*this.dpr),n=Math.round(e.height*this.dpr);if(t<8||n<8)return;(this.big.width!==t||this.big.height!==n)&&(this.big.width=t,this.big.height=n,this.stillView=null);const s=this.mapView(),r=this.bigCtx,a=Math.round(40*this.dpr),o=this.stillView;(!o||o.scale!==s.scale||Math.abs((s.cx-o.cx)*s.scale)>a*.8||Math.abs((s.cz-o.cz)*s.scale)>a*.8)&&(this.still.width=t+a*2,this.still.height=n+a*2,this.paint(this.stillCtx,this.still.width,this.still.height,s,Math.hypot(this.still.width,this.still.height)/2/s.scale,s.scale>.45*this.dpr),this.stillView={...s});const l=this.stillView;r.setTransform(1,0,0,1,0,0),r.drawImage(this.still,Math.round(-a-(s.cx-l.cx)*s.scale),Math.round(-a-(s.cz-l.cz)*s.scale));const c=this.dpr;r.font=`600 ${11*c}px system-ui, sans-serif`,r.textBaseline="middle",r.textAlign="left";for(const d of this.places){const[f,m]=this.toScreen(s,t,n,d.x,d.z);r.beginPath(),r.arc(f,m,4*c,0,Math.PI*2),r.fillStyle=tn.ink,r.fill(),r.lineWidth=3*c,r.strokeStyle="rgba(10,12,16,.85)",r.strokeText(d.label,f+8*c,m),r.fillStyle=tn.ink,r.fillText(d.label,f+8*c,m)}if(this.target){const[d,f]=this.toScreen(s,t,n,this.target.x,this.target.z);r.beginPath(),r.arc(d,f,9*c,0,Math.PI*2),r.strokeStyle=tn.target,r.lineWidth=3*c,r.stroke(),r.beginPath(),r.arc(d,f,3.5*c,0,Math.PI*2),r.fillStyle=tn.target,r.fill()}const[h,u]=this.toScreen(s,t,n,this.car.x,this.car.z);this.arrow(r,h,u,this.car.heading,9*c)}probe(){return{open:this.open,zoom:this.zoom,target:this.target,reach:this.reach}}}const Gn=new URLSearchParams(location.search),K1=Gn.has("test"),ho=Gn.get("world")??"sf",Rh=1,dl=()=>new Promise(i=>requestAnimationFrame(()=>i())),j1=14;async function Z1(){const i=new B1("d34f777 2026-11-23 01:50Z","");let e=null;const t=async O=>{i.loading(O),await dl()};await t("the sim core");const n=await ix(`./core/p2p_core.wasm${xs}`),s=["p2p_new_car","p2p_kind_count","p2p_car_count","p2p_traffic_drain","p2p_traffic_stride","p2p_vehicle_count","p2p_events_drain","p2p_panel","p2p_rubble_drain","p2p_count","p2p_inside","p2p_prop_origin","p2p_strength_set","p2p_strength_says"].filter(O=>typeof n[O]!="function");if(s.length)throw new Error(`this page (${"d34f777 2026-11-23 01:50Z".split(" ")[0]}) was given a sim core from another build (it has no ${s.join(", ")}). Reload; if that does not cure it, clear this site's data.`);const r=gf(Gn);let a,o,l=null;if(r){i.loadingNote("making this place on this device, from open map data"),await t(`the place: ${r.label}`);const O=await Wx(r,[...Ka(n).keys()],J=>i.loading(J));({blob:a,page:o,mask:l}=O),e={seconds:O.seconds,kept:O.kept}}else await t("the city"),[a,o]=await Promise.all([Rx(`./world/${ho}.p2pw${xs}`),fetch(`./world/${ho}.json${xs}`).then(O=>{if(!O.ok)throw new Error(`world ${ho}: ${O.status}`);return O.json()})]);const c=new Tx(a);c.setWays(o.ways??[]);const h=o.from.flat?"the ground here is level: no source of heights covers this place":"";document.getElementById("stamp").textContent=r?`d34f777 2026-11-23 01:50Z · ${r.label}: made on this device from Overture Maps ${o.from.release}${h?` · ${h}`:""} · ${o.attribution}`:`d34f777 2026-11-23 01:50Z · ${o.name} from ${o.from.repo} ${o.from.sha} · ${o.attribution}`;const u=jx(Gn),d=new Qx(document.getElementById("view"),u),f=new z1(c,o.ground.sea??-1/0);await t("the ground");let m=null;o.photo&&(m=await new sf().loadAsync(`./world/${o.photo.file}${xs}`),m.colorSpace=hn,m.anisotropy=Math.min(8,d.renderer.capabilities.getMaxAnisotropy()));const g=cv(c,o,m,l);await g.ready,g.group.name="ground",d.scene.add(g.group),await t("the streets");const x=mv(c,o);x.group.name="streets",d.scene.add(x.group),await t("the bridges and tunnels");const p=yv(o,c);d.scene.add(p.group),await t("the sim");const y=sx(n),_=(()=>{try{return localStorage.getItem("p2p.car")}catch{return null}})();let v=Math.min(y.length-1,Math.max(0,Math.floor(Number(Gn.get("car")??_??0))||0));const E=Math.max(0,Math.min(120,Math.floor(Number(Gn.get("traffic")??36))||0)),M=(()=>{try{return localStorage.getItem("p2p.soft")}catch{return null}})();let T=(Gn.get("soft")??M??"1")!=="0";const D=O=>Math.max(0,Math.min(100,Math.round(y[O].param("STRENGTH")))),b=()=>{try{const O=/^(\d+):(\d+)$/.exec(localStorage.getItem("p2p.strength")??"");return O&&Number(O[1])===v?Math.min(100,Number(O[2])):null}catch{return null}},w=()=>{try{localStorage.setItem("p2p.strength",`${v}:${F}`)}catch{}},P=Gn.get("strength");let F=P!==null&&Number.isFinite(Number(P))?Math.max(0,Math.min(100,Math.round(Number(P)))):b()??D(v),I=new Hc(n,a,Rh,v);I.wantTraffic(E),await t("the buildings");const H=performance.now(),z=Zv(o,O=>I.face(O),Ya(n)),N=performance.now()-H;z.group.name="buildings",d.scene.add(z.group),await t("what stands along the streets");const U=m1(c,o,Ka(n));U.group.name="props",d.scene.add(U.group);const L=new wv(o,d.reflections);L.group.name="shopfronts",d.scene.add(L.group);const G=new w1(o,c,O=>I.inside(O),O=>I.propOrigin(O),Bc(n),Ka(n),kc(n));d.scene.add(G.group);const B=new v1(z,L,G,Ya(n),O=>I.fallen(O));B.group.name="rubble",d.scene.add(B.group),await t("the car");const j=O=>{const J=y[O],ve=new Sx({halfTrack:J.param("HALF_TRACK"),axleFront:J.param("AXLE_FRONT"),axleRear:J.param("AXLE_REAR"),wheelRadius:J.param("WHEEL_RADIUS"),overhang:J.param("OVERHANG")},d.reflections,{...Ax(J.name),roof:J.param("CABIN_TOP")+.015});return ve.group.name="car",ve.loose.name="car smoke",d.scene.add(ve.group,ve.loose),ve};let ee=j(v),ge=!1,de=0,Me=!1;const $=nx(n),Q=new ra($,d.reflections);d.scene.add(Q.group);const pe=new O1(document.body),Se=new k1,Re=1/I.tickRate,$e=I.stateLength,ie=new Float32Array($e),A=new Float32Array($e),xe=new Float32Array($e);let ce={start:0,car:v,strength:F,inputs:[],ticks:0,digest:""},le=null,be={throttle:0,brake:0};const Pe=O=>{const J=performance.now();I.drop(),I=new Hc(n,a,Rh,v),I.wantTraffic(E),I.setSoft(T),I.setStrength(F);const ve=o.starts[O]??o.starts[0];return I.place(ve.x,ve.z,ve.heading),ee.useSoft(T?I.softBuilt():null),ge=!1,I.read(A),ie.set(A),ce={start:O,car:v,strength:F,inputs:[],ticks:0,digest:""},de=0,U.reset(),L.reset(),B.reset(),G.reset(),S=0,f.cut(),i.setPlace(ve.label),performance.now()-J},ye=O=>{if(!(O===v||!y[O])){v=O;try{localStorage.setItem("p2p.car",String(O))}catch{}d.scene.remove(ee.group,ee.loose),ee.group.traverse(J=>{const ve=J;ve.isMesh&&ve.geometry.dispose()}),ee=j(O),le=null,F=D(O),w(),i.setStrength(F),Pe(ce.start),i.pickedCar(O),i.toast(`${y[O].name}: ${y[O].says}`,3200)}},ze=(O=ce.start)=>{le=null;const J=Pe(O);i.toast(`restart in ${J.toFixed(0)} ms`,1200)},ct=()=>{if(le||ce.ticks===0){i.toast("drive first, then replay it");return}const O={...ce,inputs:ce.inputs.slice(),digest:I.digest()};F!==O.strength&&(F=O.strength,i.setStrength(F)),Pe(O.start),le={of:O,at:0},i.toast(`replaying ${O.ticks} ticks from their inputs`)},at=()=>{if(!le)return;const{of:O}=le,J=I.digest(),ve=J===O.digest;i.report(`replay of ${O.ticks} ticks (${(O.ticks*Re).toFixed(1)} s)
driven:   ${O.digest}
replayed: ${J}
${ve?"SAME: the run is its inputs":"DIFFERENT: this is a bug, please send this text"}`),i.toast(ve?"replay ended where the drive did, to the bit":"replay DIFFERS from the drive",4e3),i.toggleMenu(!0),ce={...O,inputs:O.inputs.slice()},le=null},C=[0,0,0,0];let S=0;const X=()=>{let O;if(le){const J=le.at*4,ve=le.of.inputs;O={steer:ve[J],throttle:ve[J+1],brake:ve[J+2],handbrake:ve[J+3]},le.at++}else O=pe.sample(Re);ce.inputs.push(O.steer,O.throttle,O.brake,O.handbrake),ie.set(A),I.step(O),I.read(A),ce.ticks++,be=O,le&&le.at>=le.of.ticks&&at()};i.starts(o.starts.map(O=>O.label),O=>ze(O)),i.cars(y.map(O=>({name:O.name,says:O.says})),v,ye);const re=ex(n),he=O=>{const J=Oc(n,O),ve=O===D(v)?` (the ${y[v].name}'s own)`:"";if(J.boom!==null&&J.boom<.5)return`${O}: blows up at the slightest contact${ve}`;if(J.hero)return`${O}: hero. All but indestructible: a blow scuffs and dents it and costs it nothing${ve}`;const Ve=J.times>=1?J.times.toFixed(1):J.times.toFixed(2);let dt=O===re.real?`${O}: as strong as a real car`:`${O}: ${Ve}× as strong as a real car`;return J.boom!==null&&(dt+=`; blows up in a hit of ${Math.max(1,Math.round(J.boom*3.6))} km/h`),J.cap!==null&&(dt+=`; armoured, no dent deeper than ${Math.round(J.cap*100)} cm`),dt+ve},ne=O=>{O=Math.max(0,Math.min(100,Math.round(O))),i.setStrength(O),O!==F&&(F=O,w(),le=null,Pe(ce.start),i.toast(`strength ${he(O)}`,2600))};i.strength(F,he,ne,()=>ne(D(v))),i.anywhere(r?.label??null,async O=>(await Bx(O)).map(ve=>({label:ve.label,go:()=>location.assign(ll(ve))})),()=>location.assign(ll(null))),i.on("b-restart",()=>ze()),i.on("b-camera",()=>i.toast(`camera: ${f.next()}`,900)),i.on("b-replay",()=>{i.toggleMenu(!1),ct()}),i.on("b-sound",()=>{Se.enabled=!Se.enabled,i.mark("b-sound",Se.enabled)}),i.mark("b-soft",T),i.on("b-soft",()=>{T=!T;try{localStorage.setItem("p2p.soft",T?"1":"0")}catch{}i.mark("b-soft",T),le=null,Pe(ce.start),i.toast(T?"soft-body damage: the body bends, panels come off, the engine takes it":"damage as four dents",2600)}),i.on("b-check",()=>void Q1(n,i));let Oe=Gn.has("prof"),_e=0,Be=null,Te=null,fe=null;i.on("b-frames",()=>{Oe=!Oe,i.mark("b-frames",Oe),Oe||i.report("")}),i.mark("b-frames",Oe);const me=new Y1(o,c),Xe=new It(new la(2.2,2.2,160,20,1,!0).translate(0,80,0),new Us({color:16765500,transparent:!0,opacity:.4,blending:uo,depthWrite:!1,side:gn,fog:!1}));Xe.name="target",Xe.visible=!1,Xe.frustumCulled=!1,d.scene.add(Xe);let Ce=0;me.onTarget=O=>{Xe.visible=!!O,O&&(Xe.position.set(O.x,c.at(O.x,O.z),O.z),Ce=ce.ticks,i.toast(`target: ${O.label}`,1400))},pe.onKey=O=>{O==="KeyN"?me.toggle():O==="Escape"?me.toggle(!1):O==="KeyR"?ze():O==="KeyC"?f.next():O==="KeyM"?i.toggleMenu():O==="KeyP"&&ct()},window.addEventListener("pointerdown",()=>Se.start(),{passive:!0}),window.addEventListener("keydown",()=>Se.start()),window.addEventListener("resize",()=>d.resize(f.camera)),d.resize(f.camera),Pe(Number(Gn.get("start")??0)),i.loaded(),h&&i.toast(h,5e3);const ue=[],tt=[];let V=performance.now(),se=0;const ae=new k,oe=O=>{const J=Math.min(.1,(O-V)/1e3);V=O,S+=J;const ve=performance.now();let Ve=0;for(;S>=Re&&Ve<12;)X(),S-=Re,Ve++;Ve===12&&(S=0);const dt=performance.now()-ve;if(Ve){const Ge=I.movedProps();C[0]=(C[0]??0)+Ge.length/8,U.apply(Ge),G.apply(Ge,I.propsBase),B.apply(I.rubble(),De=>I.panel(De));for(const De of I.events())if(C[De.what]=(C[De.what]??0)+1,De.what===ln.BLOW)Se.thump(De.b);else if(De.what===ln.GLASS)Se.glass(),L.shatter(De.a,De.b);else if(De.what===ln.SNAPPED)Se.thump(De.b*.4);else if(De.what===ln.HORN){const Ze=Q.at.get(De.a);Ze&&Se.horn(Math.hypot(Ze.x-A[Ee.POS],Ze.z-A[Ee.POS+2]))}else if(De.what===ln.WRECK)Se.thump(De.b*.6);else if(De.what===ln.SPLASH)Se.splash(De.a),ee.splash(De.a),i.toast("in the bay",1600);else if(De.what===ln.PANEL){const Ze=I.panel(De.a);Ze&&(B.gaveWay(Ze,De.b),Se.thump(Math.min(9,2+De.b*.2)))}else if(De.what===ln.FELL){const Ze=o.buildings[De.a];if(Ze){let Kt=0,ht=0;for(const[Le,qe]of Ze.r)Kt+=Le,ht+=qe;Kt/=Ze.r.length,ht/=Ze.r.length;let Ue=0;for(const[Le,qe]of Ze.r)Ue=Math.max(Ue,Math.hypot(Le-Kt,qe-ht));B.fell(De.a,{x:Kt,z:ht,r:Ue,y:Ze.y0,high:Ze.y1-Ze.y0})}Se.thump(9),i.toast("a building came down",2200)}else De.what===ln.EXPLODED?(Se.boom(),i.toast("the car blew up",2600)):De.what===ln.CAME_OFF&&A[Ee.EXPLODED]<.5&&(Se.thump(4),i.toast(De.a>=10?"a wheel came off":`the ${["","bonnet","boot lid","front bumper","rear bumper","left door","right door"][De.a]??"panel"} came off`,1800))}const Ht=S/Re;for(let Ge=0;Ge<$e;Ge++)xe[Ge]=ie[Ge]+(A[Ge]-ie[Ge])*Ht;for(let Ge=0;Ge<4;Ge++){const De=Ee.WHEELS+Ge*Ee.WHEEL_STRIDE+Ee.W_ANGLE;Math.abs(A[De]-ie[De])>3&&(xe[De]=A[De])}if(Be){for(let Ge=0;Ge<4;Ge++)xe[Ee.CRUSH+Ge]=Be[Ge];xe[Ee.POWER]=Be[4]}if(T&&Ve){const Ge=A[Ee.SOFT_AWAKE]>.5;if(Ge||ge){const De=I.softNow();ee.soft(De.nodes,A[Ee.HOLDS],De.loose),ge=Ge||De.loose.length>0}}if(ee.update(xe,be.brake>0&&A[Ee.GEAR]>0,J),f.update(xe,J),Te){const Ge=new k(xe[Ee.POS],xe[Ee.POS+1],xe[Ee.POS+2]),De=new Jt(xe[Ee.ROT],xe[Ee.ROT+1],xe[Ee.ROT+2],xe[Ee.ROT+3]).normalize();f.camera.position.set(...Te).applyQuaternion(De).add(Ge),f.camera.lookAt(Ge.x,Ge.y+.2,Ge.z),f.camera.fov=50,f.camera.updateProjectionMatrix()}fe&&(f.camera.position.set(fe[0][0],fe[0][1],fe[0][2]),f.camera.lookAt(fe[1][0],fe[1][1],fe[1][2]),f.camera.fov=62,f.camera.updateProjectionMatrix()),g.update(f.camera.position),U.update(f.camera.position),x.update(f.camera.position),L.update(J,f.camera.position),G.update(f.camera.position),B.update(J);{const Ge=I.traffic();Q.update(Ge.cars,Ge.count,J,f.camera.position)}ae.set(xe[Ee.POS],xe[Ee.POS+1],xe[Ee.POS+2]),d.follow(ae,f.camera.position),Se.update(A,be.throttle/1e3),i.update(A,ce.ticks*Re,!!le),A[Ee.DROWNED]>.5&&A[Ee.FLOOD]>.98&&Math.abs(A[Ee.SPEED])<.6?(_e+=J,_e>3.5&&!le&&(_e=0,ze(),i.toast("sunk. back on the road",2400))):_e=0,A[Ee.EXPLODED]>.5&&(de+=J,de>5&&!le&&!Me&&(ze(),i.toast("blown up. back on the road",2400)));{const Ge=new Jt(xe[Ee.ROT],xe[Ee.ROT+1],xe[Ee.ROT+2],xe[Ee.ROT+3]).normalize(),De=new k(0,0,-1).applyQuaternion(Ge);me.update(xe[Ee.POS],xe[Ee.POS+2],Math.atan2(De.x,-De.z),xe[Ee.SPEED],J);const Ze=me.target;if(Ze&&Math.hypot(Ze.x-xe[Ee.POS],Ze.z-xe[Ee.POS+2])<j1){ce.ticks<Ce&&(Ce=0);const Kt=(ce.ticks-Ce)*Re;i.toast(`there: ${Ze.label}, ${Math.floor(Kt/60)}:${(Kt%60).toFixed(1).padStart(4,"0")} from setting it`,3200),me.setTarget(null)}}if(d.draw(f.camera),ue.push(J*1e3),tt.push(dt),ue.length>600&&(ue.shift(),tt.shift()),se+=J,Oe&&se>1){se=0;const Ge=B.counts();i.report(`${Ch(ue,tt,d,f.camera,U.counts)}
walls: ${I.count(Zt.WALLS)} stood as ${I.count(Zt.WALL_COLLIDERS)} slabs; ${I.count(Zt.BROKEN)} panels gone, ${I.count(Zt.FALLEN)} buildings down; bodies ${I.count(Zt.AWAKE)} awake of ${I.count(Zt.BODIES)}; drawn ${Ge.pieces} pieces, ${Ge.parts} parts, ${Ge.breached} buildings with holes`)}requestAnimationFrame(oe)};requestAnimationFrame(oe);let te=null,Z=0,Ae=null;K1&&(window.__p2p={ready:!0,page:o,made:e,scene:d.scene,state:()=>Array.from(A),tick:()=>ce.ticks,digest:()=>I.digest(),drive:O=>{pe.override=O},advance:O=>{for(let J=0;J<O;J++)X()},restart:ze,startReplay:ct,place:(O,J,ve)=>{I.place(O,J,ve),I.read(A),ie.set(A),f.cut()},placeAt:(O,J,ve,Ve)=>{I.placeAt(O,J,ve,Ve),I.read(A),ie.set(A),f.cut()},seen:()=>({moved:C[0],blows:C[ln.BLOW],snapped:C[ln.SNAPPED],glass:C[ln.GLASS],panels:C[ln.PANEL]??0,fell:C[ln.FELL]??0,cameOff:C[ln.CAME_OFF]??0,exploded:C[ln.EXPLODED]??0}),panel:O=>I.panel(O),panelCount:()=>I.panelCount,panelsOf:O=>{(!te||Ae!==I)&&(te=new Map,Z=0,Ae=I);for(let J=Z;J<I.panelCount;J++){const ve=I.panel(J);let Ve=te.get(ve.building);Ve||te.set(ve.building,Ve=[]),Ve.push(J)}return Z=I.panelCount,(te.get(O)??[]).map(J=>I.panel(J))},panelKinds:()=>Ya(n),inside:O=>I.inside(O),insideDrawn:O=>G.drawn(O),roomKinds:()=>kc(n),propKindNames:()=>Bc(n),insides:()=>({sim:{planned:I.count(Zt.PLANNED),partitions:I.count(Zt.PARTITIONS),held:I.count(Zt.HELD),things:I.count(Zt.THINGS),armed:I.count(Zt.ARMED),own:I.count(Zt.OWN)},drawn:G.counts()}),propOrigin:O=>I.propOrigin(O),propsBase:()=>I.propsBase,walls:()=>({sim:{bodies:I.count(Zt.BODIES),awake:I.count(Zt.AWAKE),walls:I.count(Zt.WALLS),colliders:I.count(Zt.WALL_COLLIDERS),pieces:I.count(Zt.PIECES),parts:I.count(Zt.PARTS),broken:I.count(Zt.BROKEN),fallen:I.count(Zt.FALLEN)},drawn:B.counts()}),replaying:()=>!!le,camera:O=>{f.mode=O,f.cut()},cars:()=>y.map(O=>O.name),car:O=>ye(O),strength:()=>F,strengthOwn:O=>D(O),strengthSays:O=>Oc(n,O),setStrength:O=>ne(O),holdBlown:O=>{Me=O},traffic:()=>{const O=I.traffic(),J=[];for(let ve=0;ve<O.count;ve++){const Ve=ve*dr,dt=O.cars;J.push({i:dt[Ve+Yt.INDEX],x:dt[Ve+Yt.POS],y:dt[Ve+Yt.POS+1],z:dt[Ve+Yt.POS+2],speed:dt[Ve+Yt.SPEED],flags:dt[Ve+Yt.FLAGS],kind:dt[Ve+Yt.KIND],name:$[dt[Ve+Yt.KIND]]?.name??"?",curve:dt[Ve+Yt.CURVE]})}return J},map:{toggle:O=>me.toggle(O),zoom:O=>me.setZoom(O),tap:(O,J)=>me.tap(O,J),clear:()=>me.setTarget(null),state:()=>me.probe()},show:O=>{Be=O},look:O=>{Te=O},view:(O,J)=>{fe=O&&J?[O,J]:null},ground:(O,J)=>c.at(O,J),selftest:O=>Dl(n.p2p_selftest(O)),frames:()=>Ch(ue,tt,d,f.camera,U.counts),info:()=>({calls:d.renderer.info.render.calls,triangles:d.renderer.info.render.triangles}),programs:()=>(d.renderer.info.programs??[]).map(O=>{const J=O;return J.name?`${J.type} (${J.name})`:J.type}),face:O=>I.face(O),mark:O=>z.mark(O),faces:()=>({...z.faces(),buildMs:N}),project:(O,J,ve)=>{const Ve=new k(O,J,ve).project(f.camera);if(Ve.z<-1||Ve.z>1)return null;const dt=d.renderer.domElement;return[(Ve.x*.5+.5)*dt.clientWidth,(.5-Ve.y*.5)*dt.clientHeight]}})}function fo(i,e){return i[Math.min(i.length-1,Math.floor(i.length*e))]??0}function J1(i,e){const t=new oa().setFromProjectionMatrix(new Lt().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)),n=new Ei,s=[];for(const r of i.scene.children){if(!r.name)continue;let a=0,o=0;r.traverseVisible(l=>{const c=l;if(!c.isMesh)return;const h=l,u=h.isInstancedMesh?h.boundingSphere:c.geometry.boundingSphere;if(u&&(n.copy(u).applyMatrix4(c.matrixWorld),!t.intersectsSphere(n)))return;const d=c.geometry,f=(d.index?d.index.count:d.getAttribute("position").count)/3;a+=f*(h.isInstancedMesh?h.count:1),o++}),s.push(`${r.name} ${Math.round(a/1e3)}k/${o}`)}return s.join(", ")}function Ch(i,e,t,n,s){const r=[...i].sort((c,h)=>c-h),a=[...e].sort((c,h)=>c-h),o=t.renderer.info.render,l=t.renderer.getDrawingBufferSize(new nt);return[`frames (last ${i.length}): median ${fo(r,.5).toFixed(1)} ms, 95th ${fo(r,.95).toFixed(1)}, worst ${(r[r.length-1]??0).toFixed(1)}`,`sim a frame: median ${fo(a,.5).toFixed(2)} ms, worst ${(a[a.length-1]??0).toFixed(2)}`,`drawn: ${o.triangles.toLocaleString()} triangles in ${o.calls} calls (shadow pass included), ${l.x} x ${l.y} px (dpr ${t.knobs.dpr}), shadows ${t.knobs.shadows?"on":"off"}`,`in view, thousand triangles / meshes: ${J1(t,n)}`,`props: ${Object.entries(s).map(([c,h])=>`${h} ${c}`).join(", ")}`,navigator.userAgent].join(`
`)}async function Q1(i,e){e.report("running the reference drive…"),await dl(),await dl();let t=null;try{const l=await fetch(`./core/selftest.json${xs}`);l.ok&&(t=await l.json())}catch{}const n=t?.ticks??12e3,s=performance.now(),r=Dl(i.p2p_selftest(n)),a=performance.now()-s,o=t?r===t.digest?"SAME as the build machine: this device runs the same race":"DIFFERENT from the build machine: please send this text":"no reference digest shipped with this build";e.report([`reference drive, ${n} ticks (${(n/i.p2p_tick_rate()).toFixed(0)} s of driving)`,`this device: ${r}`,`reference:   ${t?.digest??"none"}${t?` (${t.made})`:""}`,o,`${a.toFixed(0)} ms: ${(a/n*1e3).toFixed(1)} µs a tick, one car, world build included`,navigator.userAgent].join(`
`))}Z1().catch(i=>{console.error(i);const e=document.getElementById("loading-step");if(e){if(e.className="err",e.textContent=`could not start: ${i instanceof Error?i.message:String(i)}`,gf(Gn)){const t=document.createElement("a");t.href=ll(null),t.textContent="back to San Francisco",t.style.cssText="color:#f2f0ea;pointer-events:auto",e.after(t)}}else document.body.insertAdjacentHTML("beforeend",`<div style="position:fixed;inset:auto 8px 8px 8px;z-index:99;background:#400;color:#fff;padding:8px;border-radius:8px">${String(i)}</div>`)});
