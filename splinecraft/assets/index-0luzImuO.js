(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ui="180",qu=0,kl=1,Ku=2,Dh=1,Rh=2,kn=3,In=0,Rt=1,Gt=2,Pt=0,ls=1,Kr=2,Gl=3,Hl=4,Zu=5,bi=100,ju=101,Ju=102,$u=103,ed=104,td=200,nd=201,id=202,sd=203,oo=204,lo=205,rd=206,ad=207,od=208,ld=209,cd=210,hd=211,ud=212,dd=213,fd=214,co=0,Zr=1,ho=2,hs=3,uo=4,fo=5,po=6,mo=7,Ih=0,pd=1,md=2,Vn=0,gd=1,vd=2,xd=3,Md=4,yd=5,Ad=6,Sd=7,Ph=300,us=301,ds=302,go=303,vo=304,aa=306,Vs=1e3,bn=1001,xo=1002,Mt=1003,_d=1004,tr=1005,tt=1006,ga=1007,Cn=1008,yt=1009,Lh=1010,Bh=1011,Ws=1012,ol=1013,Ri=1014,tn=1015,Sn=1016,ll=1017,cl=1018,fs=1020,Uh=35902,Nh=35899,Fh=1021,zh=1022,Ft=1023,Xs=1026,ps=1027,hi=1028,hl=1029,ul=1030,dl=1031,fl=1033,Hr=33776,Vr=33777,Wr=33778,Xr=33779,Mo=35840,yo=35841,Ao=35842,So=35843,_o=36196,wo=37492,Eo=37496,To=37808,bo=37809,Co=37810,Do=37811,Ro=37812,Io=37813,Po=37814,Lo=37815,Bo=37816,Uo=37817,No=37818,Fo=37819,zo=37820,Oo=37821,ko=36492,Go=36494,Ho=36495,Vo=36283,Wo=36284,Xo=36285,Yo=36286,_n=3200,Oh=3201,pl=0,wd=1,on="",st="srgb",ui="srgb-linear",jr="linear",ct="srgb",Oi=7680,Vl=519,Ed=512,Td=513,bd=514,kh=515,Cd=516,Dd=517,Rd=518,Id=519,Wl=35044,Jr="300 es",Dn=2e3,$r=2001;class Yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],va=Math.PI/180,Qo=180/Math.PI;function Zs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function Pd(n,e){return(n%e+e)%e}function xa(n,e,t){return(1-t)*n+t*e}function _s(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ii{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const d=r[a+0],u=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=u,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==u||h!==g){let m=1-o;const p=l*d+c*u+h*g+f*v,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),_=Math.atan2(w,p*S);m=Math.sin(m*_)/w,o=Math.sin(o*_)/w}const y=o*S;if(l=l*m+d*y,c=c*m+u*y,h=h*m+g*y,f=f*m+v*y,m===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=w,c*=w,h*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*u-c*d,e[t+1]=l*g+h*d+c*f-o*u,e[t+2]=c*g+h*u+o*d-l*f,e[t+3]=h*g-o*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),d=l(i/2),u=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+o+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(i>o&&i>f){const u=2*Math.sqrt(1+i-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>f){const u=2*Math.sqrt(1+o-i-f);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-i-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-t;return this._w=u*a+t*this._w,this._x=u*i+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new k,Xl=new Ii;class Xe{constructor(e,t,i,s,r,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],u=i[5],g=i[8],v=s[0],m=s[3],p=s[6],S=s[1],x=s[4],y=s[7],w=s[2],_=s[5],T=s[8];return r[0]=a*v+o*S+l*w,r[3]=a*m+o*x+l*_,r[6]=a*p+o*y+l*T,r[1]=c*v+h*S+f*w,r[4]=c*m+h*x+f*_,r[7]=c*p+h*y+f*T,r[2]=d*v+u*S+g*w,r[5]=d*m+u*x+g*_,r[8]=d*p+u*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,g=t*f+i*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=u*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new Xe;function Gh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ld(){const n=ea("canvas");return n.style.display="block",n}const Yl={};function Ys(n){n in Yl||(Yl[n]=!0,console.warn(n))}function Bd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Ql=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ql=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ud(){const n={enabled:!0,workingColorSpace:ui,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===on?jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ui]:{primaries:e,whitePoint:i,transfer:jr,toXYZ:Ql,fromXYZ:ql,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:st},outputColorSpaceConfig:{drawingBufferColorSpace:st}},[st]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Ql,fromXYZ:ql,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:st}}}),n}const $e=Ud();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ki;class Nd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ki===void 0&&(ki=ea("canvas")),ki.width=e.width,ki.height=e.height;const s=ki.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ki}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wn(t[i]/255)*255):t[i]=Wn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fd=0;class ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Zs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Aa(s[a].image)):r.push(Aa(s[a]))}else r=Aa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zd=0;const Sa=new k;class Lt extends Yn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=bn,s=bn,r=tt,a=Cn,o=Ft,l=yt,c=Lt.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Zs(),this.name="",this.source=new ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sa).x}get height(){return this.source.getSize(Sa).y}get depth(){return this.source.getSize(Sa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Ph;Lt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(u+1)/2,w=(p+1)/2,_=(h+d)/4,T=(f+v)/4,b=(g+m)/4;return x>y&&x>w?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=_/i,r=T/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=_/s,r=b/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=T/r,s=b/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Od extends Yn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Lt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ml(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class at extends Od{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gl extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ta extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kd extends at{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new ta(null,e,t,i),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class Ni{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nr.copy(i.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),ir.subVectors(this.max,ws),Gi.subVectors(e.a,ws),Hi.subVectors(e.b,ws),Vi.subVectors(e.c,ws),Kn.subVectors(Hi,Gi),Zn.subVectors(Vi,Hi),gi.subVectors(Gi,Vi);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-gi.z,gi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,gi.z,0,-gi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-gi.y,gi.x,0];return!_a(t,Gi,Hi,Vi,ir)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,Gi,Hi,Vi,ir))?!1:(sr.crossVectors(Kn,Zn),t=[sr.x,sr.y,sr.z],_a(t,Gi,Hi,Vi,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new k,new k,new k,new k,new k,new k,new k,new k],pn=new k,nr=new Ni,Gi=new k,Hi=new k,Vi=new k,Kn=new k,Zn=new k,gi=new k,ws=new k,ir=new k,sr=new k,vi=new k;function _a(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){vi.fromArray(n,r);const o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),h=i.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Gd=new Ni,Es=new k,wa=new k;class fi{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Es,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(wa)),this.expandByPoint(Es.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Nn=new k,Ea=new k,rr=new k,jn=new k,Ta=new k,ar=new k,ba=new k;class Hh{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ea.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Ea);const r=e.distanceTo(t)*.5,a=-this.direction.dot(rr),o=jn.dot(this.direction),l=-jn.dot(rr),c=jn.lengthSq(),h=Math.abs(1-a*a);let f,d,u,g;if(h>0)if(f=a*l-o,d=a*o-l,g=r*h,f>=0)if(d>=-g)if(d<=g){const v=1/h;f*=v,d*=v,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ea).addScaledVector(rr,d),u}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,s,r){Ta.subVectors(t,e),ar.subVectors(i,e),ba.crossVectors(Ta,ar);let a=this.direction.dot(ba),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,e);const l=o*this.direction.dot(ar.crossVectors(jn,ar));if(l<0)return null;const c=o*this.direction.dot(Ta.cross(jn));if(c<0||l+c>a)return null;const h=-o*jn.dot(ba);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,i,s,r,a,o,l,c,h,f,d,u,g,v,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,f,d,u,g,v,m)}set(e,t,i,s,r,a,o,l,c,h,f,d,u,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*h,u=a*f,g=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+u*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,u=l*f,g=c*h,v=c*f;t[0]=d+v*o,t[4]=g*o-u,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=u*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,u=l*f,g=c*h,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,u=a*f,g=o*h,v=o*f;t[0]=l*h,t[4]=g*c-u,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=u*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,u=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*f,t[8]=g*f+u,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,u=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+v,t[5]=a*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=o*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hd,e,Vd)}lookAt(e,t,i){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Jn.crossVectors(i,rn),Jn.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Jn.crossVectors(i,rn)),Jn.normalize(),or.crossVectors(rn,Jn),s[0]=Jn.x,s[4]=or.x,s[8]=rn.x,s[1]=Jn.y,s[5]=or.y,s[9]=rn.y,s[2]=Jn.z,s[6]=or.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],u=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],x=i[7],y=i[11],w=i[15],_=s[0],T=s[4],b=s[8],M=s[12],A=s[1],C=s[5],P=s[9],F=s[13],z=s[2],G=s[6],L=s[10],B=s[14],N=s[3],Y=s[7],ee=s[11],le=s[15];return r[0]=a*_+o*A+l*z+c*N,r[4]=a*T+o*C+l*G+c*Y,r[8]=a*b+o*P+l*L+c*ee,r[12]=a*M+o*F+l*B+c*le,r[1]=h*_+f*A+d*z+u*N,r[5]=h*T+f*C+d*G+u*Y,r[9]=h*b+f*P+d*L+u*ee,r[13]=h*M+f*F+d*B+u*le,r[2]=g*_+v*A+m*z+p*N,r[6]=g*T+v*C+m*G+p*Y,r[10]=g*b+v*P+m*L+p*ee,r[14]=g*M+v*F+m*B+p*le,r[3]=S*_+x*A+y*z+w*N,r[7]=S*T+x*C+y*G+w*Y,r[11]=S*b+x*P+y*L+w*ee,r[15]=S*M+x*F+y*B+w*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*o*d+i*c*d+s*o*u-i*l*u)+v*(+t*l*u-t*c*d+r*a*d-s*a*u+s*c*h-r*l*h)+m*(+t*c*f-t*o*u-r*a*f+i*a*u+r*o*h-i*c*h)+p*(-s*o*h-t*l*f+t*o*d+s*a*f-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=f*m*c-v*d*c+v*l*u-o*m*u-f*l*p+o*d*p,x=g*d*c-h*m*c-g*l*u+a*m*u+h*l*p-a*d*p,y=h*v*c-g*f*c+g*o*u-a*v*u-h*o*p+a*f*p,w=g*f*l-h*v*l-g*o*d+a*v*d+h*o*m-a*f*m,_=t*S+i*x+s*y+r*w;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/_;return e[0]=S*T,e[1]=(v*d*r-f*m*r-v*s*u+i*m*u+f*s*p-i*d*p)*T,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*p+i*l*p)*T,e[3]=(f*l*r-o*d*r-f*s*c+i*d*c+o*s*u-i*l*u)*T,e[4]=x*T,e[5]=(h*m*r-g*d*r+g*s*u-t*m*u-h*s*p+t*d*p)*T,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*T,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*u+t*l*u)*T,e[8]=y*T,e[9]=(g*f*r-h*v*r-g*i*u+t*v*u+h*i*p-t*f*p)*T,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*p+t*o*p)*T,e[11]=(h*o*r-a*f*r-h*i*c+t*f*c+a*i*u-t*o*u)*T,e[12]=w*T,e[13]=(h*v*s-g*f*s+g*i*d-t*v*d-h*i*m+t*f*m)*T,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*m-t*o*m)*T,e[15]=(a*f*s-h*o*s+h*i*l-t*f*l-a*i*d+t*o*d)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,g=r*f,v=a*h,m=a*f,p=o*f,S=l*c,x=l*h,y=l*f,w=i.x,_=i.y,T=i.z;return s[0]=(1-(v+p))*w,s[1]=(u+y)*w,s[2]=(g-x)*w,s[3]=0,s[4]=(u-y)*_,s[5]=(1-(d+p))*_,s[6]=(m+S)*_,s[7]=0,s[8]=(g+x)*T,s[9]=(m-S)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Wi.set(s[0],s[1],s[2]).length();const a=Wi.set(s[4],s[5],s[6]).length(),o=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mn.copy(this);const c=1/r,h=1/a,f=1/o;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,t.setFromRotationMatrix(mn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Dn,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Dn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===$r)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Dn,l=!1){const c=this.elements,h=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),u=-(i+s)/(i-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Dn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===$r)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wi=new k,mn=new Ke,Hd=new k(0,0,0),Vd=new k(1,1,1),Jn=new k,or=new k,rn=new k,Kl=new Ke,Zl=new Ii;class Pn{constructor(e=0,t=0,i=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Vh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wd=0;const jl=new k,Xi=new Ii,Fn=new Ke,lr=new k,Ts=new k,Xd=new k,Yd=new Ii,Jl=new k(1,0,0),$l=new k(0,1,0),ec=new k(0,0,1),tc={type:"added"},Qd={type:"removed"},Yi={type:"childadded",child:null},Ca={type:"childremoved",child:null};class zt extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new k,t=new Pn,i=new Ii,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Xe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Jl,e)}rotateY(e){return this.rotateOnAxis($l,e)}rotateZ(e){return this.rotateOnAxis(ec,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jl,e)}translateY(e){return this.translateOnAxis($l,e)}translateZ(e){return this.translateOnAxis(ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lr.copy(e):lr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ts,lr,this.up):Fn.lookAt(lr,Ts,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qd),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,Xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}zt.DEFAULT_UP=new k(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new k,zn=new k,Da=new k,On=new k,Qi=new k,qi=new k,nc=new k,Ra=new k,Ia=new k,Pa=new k,La=new mt,Ba=new mt,Ua=new mt;class Mn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gn.subVectors(e,t),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gn.subVectors(s,t),zn.subVectors(i,t),Da.subVectors(e,t);const a=gn.dot(gn),o=gn.dot(zn),l=gn.dot(Da),c=zn.dot(zn),h=zn.dot(Da),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,u=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-u-g,g,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return La.setScalar(0),Ba.setScalar(0),Ua.setScalar(0),La.fromBufferAttribute(e,t),Ba.fromBufferAttribute(e,i),Ua.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(La,r.x),a.addScaledVector(Ba,r.y),a.addScaledVector(Ua,r.z),a}static isFrontFacing(e,t,i,s){return gn.subVectors(i,t),zn.subVectors(e,t),gn.cross(zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),gn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Qi.subVectors(s,i),qi.subVectors(r,i),Ra.subVectors(e,i);const l=Qi.dot(Ra),c=qi.dot(Ra);if(l<=0&&c<=0)return t.copy(i);Ia.subVectors(e,s);const h=Qi.dot(Ia),f=qi.dot(Ia);if(h>=0&&f<=h)return t.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Qi,a);Pa.subVectors(e,r);const u=Qi.dot(Pa),g=qi.dot(Pa);if(g>=0&&u<=g)return t.copy(r);const v=u*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(qi,o);const m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return nc.subVectors(r,s),o=(f-h)/(f-h+(u-g)),t.copy(s).addScaledVector(nc,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(i).addScaledVector(Qi,a).addScaledVector(qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=Pd(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Na(a,r,e+1/3),this.g=Na(a,r,e),this.b=Na(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=st){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){const i=Wh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return $e.workingToColorSpace(Wt.copy(this),e),Math.round(je(Wt.r*255,0,255))*65536+Math.round(je(Wt.g*255,0,255))*256+Math.round(je(Wt.b*255,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Wt.copy(this),t);const i=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=st){$e.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,s=Wt.b;return e!==st?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(cr);const i=xa($n.h,cr.h,t),s=xa($n.s,cr.s,t),r=xa($n.l,cr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ye;Ye.NAMES=Wh;let qd=0;class Qn extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=ls,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=lo,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==In&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oo&&(i.blendSrc=this.blendSrc),this.blendDst!==lo&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xh extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new k,hr=new me;let Kd=0;class Ze{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wl,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_s(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),e}}class Yh extends Ze{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qh extends Ze{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ln extends Ze{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zd=0;const un=new Ke,Fa=new zt,Ki=new k,an=new Ni,bs=new Ni,Nt=new k;class Ht extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gh(e)?Qh:Yh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ln(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(an.min,bs.min),an.expandByPoint(Nt),Nt.addVectors(an.max,bs.max),an.expandByPoint(Nt)):(an.expandByPoint(bs.min),an.expandByPoint(bs.max))}an.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(e,c),Nt.add(Ki)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<i.count;b++)o[b]=new k,l[b]=new k;const c=new k,h=new k,f=new k,d=new me,u=new me,g=new me,v=new k,m=new k;function p(b,M,A){c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),f.fromBufferAttribute(i,A),d.fromBufferAttribute(r,b),u.fromBufferAttribute(r,M),g.fromBufferAttribute(r,A),h.sub(c),f.sub(c),u.sub(d),g.sub(d);const C=1/(u.x*g.y-g.x*u.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(C),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(C),o[b].add(v),o[M].add(v),o[A].add(v),l[b].add(m),l[M].add(m),l[A].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let b=0,M=S.length;b<M;++b){const A=S[b],C=A.start,P=A.count;for(let F=C,z=C+P;F<z;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new k,y=new k,w=new k,_=new k;function T(b){w.fromBufferAttribute(s,b),_.copy(w);const M=o[b];x.copy(M),x.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(_,M);const C=y.dot(l[b])<0?-1:1;a.setXYZW(b,x.x,x.y,x.z,C)}for(let b=0,M=S.length;b<M;++b){const A=S[b],C=A.start,P=A.count;for(let F=C,z=C+P;F<z;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,f=new k;if(e)for(let d=0,u=e.count;d<u;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let u=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[u++]}return new Ze(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=e(d,i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ic=new Ke,xi=new Hh,ur=new fi,sc=new k,dr=new k,fr=new k,pr=new k,za=new k,mr=new k,rc=new k,gr=new k;class vt extends zt{constructor(e=new Ht,t=new Xh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(za.fromBufferAttribute(f,e),a?mr.addScaledVector(za,h):mr.addScaledVector(za.sub(t),h))}t.add(mr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(r),xi.copy(e.ray).recast(e.near),!(ur.containsPoint(xi.origin)===!1&&(xi.intersectSphere(ur,sc)===null||xi.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(ic.copy(r).invert(),xi.copy(e.ray).applyMatrix4(ic),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,u.start),x=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let y=S,w=x;y<w;y+=3){const _=o.getX(y),T=o.getX(y+1),b=o.getX(y+2);s=vr(this,p,e,i,c,h,f,_,T,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const S=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=vr(this,a,e,i,c,h,f,S,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,u.start),x=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=S,w=x;y<w;y+=3){const _=y,T=y+1,b=y+2;s=vr(this,p,e,i,c,h,f,_,T,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const S=m,x=m+1,y=m+2;s=vr(this,a,e,i,c,h,f,S,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function jd(n,e,t,i,s,r,a,o){let l;if(e.side===Rt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===In,o),l===null)return null;gr.copy(o),gr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(gr);return c<t.near||c>t.far?null:{distance:c,point:gr.clone(),object:n}}function vr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,dr),n.getVertexPosition(l,fr),n.getVertexPosition(c,pr);const h=jd(n,e,t,i,dr,fr,pr,rc);if(h){const f=new k;Mn.getBarycoord(rc,dr,fr,pr,f),s&&(h.uv=Mn.getInterpolatedAttribute(s,o,l,c,f,new me)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,o,l,c,f,new me)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,l,c,f,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};Mn.getNormal(dr,fr,pr,d.normal),h.face=d,h.barycoord=f}return h}class Pi extends Ht{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,u=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(f,2));function g(v,m,p,S,x,y,w,_,T,b,M){const A=y/T,C=w/b,P=y/2,F=w/2,z=_/2,G=T+1,L=b+1;let B=0,N=0;const Y=new k;for(let ee=0;ee<L;ee++){const le=ee*C-F;for(let we=0;we<G;we++){const Be=we*A-P;Y[v]=Be*S,Y[m]=le*x,Y[p]=z,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[p]=_>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(we/T),f.push(1-ee/b),B+=1}}for(let ee=0;ee<b;ee++)for(let le=0;le<T;le++){const we=d+le+G*ee,Be=d+le+G*(ee+1),ze=d+(le+1)+G*(ee+1),Pe=d+(le+1)+G*ee;l.push(we,Be,Pe),l.push(Be,ze,Pe),N+=6}o.addGroup(u,N,M),u+=N,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=ms(n[t]);for(const s in i)e[s]=i[s]}return e}function Jd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const $d={clone:ms,merge:qt};var ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rt extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=Jd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Kh extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new k,ac=new me,oc=new me;class Kt extends Kh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,ac,oc),t.subVectors(oc,ac)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,ji=1;class nf extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(Zi,ji,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Zi,ji,e,t);r.layers=this.layers,this.add(r);const a=new Kt(Zi,ji,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Zi,ji,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Zi,ji,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Zi,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$r)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Zh extends Lt{constructor(e=[],t=us,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sf extends at{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Zh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pi(5,5,5),r=new rt({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Pt});r.uniforms.tEquirect.value=t;const a=new vt(s,r),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=tt),new nf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class oi extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rf={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new oi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class vl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new vl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Li extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class na extends Lt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Mt,h=Mt,f,d){super(null,a,o,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci extends Ze{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ji=new Ke,lc=new Ke,xr=[],cc=new Ni,af=new Ke,Cs=new vt,Ds=new fi;class of extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ci(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,af)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ji),cc.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(cc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ji),Ds.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(i),e.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ji),lc.multiplyMatrices(i,Ji),Cs.matrixWorld=lc,Cs.raycast(e,xr);for(let a=0,o=xr.length;a<o;a++){const l=xr[a];l.instanceId=r,l.object=this,t.push(l)}xr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new na(new Float32Array(s*this.count),s,this.count,hi,tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ka=new k,lf=new k,cf=new Xe;class ri{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ka.subVectors(i,t).cross(lf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ka),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cf.getNormalMatrix(e),s=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new fi,hf=new me(.5,.5),Mr=new k;class js{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,a=new ri){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],g=r[8],v=r[9],m=r[10],p=r[11],S=r[12],x=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,u-h,p-g,w-S).normalize(),s[1].setComponents(c+a,u+h,p+g,w+S).normalize(),s[2].setComponents(c+o,u+f,p+v,w+x).normalize(),s[3].setComponents(c-o,u-f,p-v,w-x).normalize(),i)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,u-d,p-m,w-y).normalize();else if(s[4].setComponents(c-l,u-d,p-m,w-y).normalize(),t===Dn)s[5].setComponents(c+l,u+d,p+m,w+y).normalize();else if(t===$r)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=hf.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Mr.x=s.normal.x>0?e.max.x:e.min.x,Mr.y=s.normal.y>0?e.max.y:e.min.y,Mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uf extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hc=new Ke,qo=new Hh,yr=new fi,Ar=new k;class df extends zt{constructor(e=new Ht,t=new uf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,e.ray.intersectsSphere(yr)===!1)return;hc.copy(s).invert(),qo.copy(e.ray).applyMatrix4(hc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let g=d,v=u;g<v;g++){const m=c.getX(g);Ar.fromBufferAttribute(f,m),uc(Ar,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let g=d,v=u;g<v;g++)Ar.fromBufferAttribute(f,g),uc(Ar,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function uc(n,e,t,i,s,r,a){const o=qo.distanceSqToPoint(n);if(o<t){const l=new k;qo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class oa extends Lt{constructor(e,t,i=Ri,s,r,a,o=Mt,l=Mt,c,h=Xs,f=1){if(h!==Xs&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ml(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jh extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ln extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,d=t/l,u=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const S=p*d-a;for(let x=0;x<c;x++){const y=x*f-r;g.push(y,-S,0),v.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const x=S+c*p,y=S+c*(p+1),w=S+1+c*(p+1),_=S+1+c*p;u.push(x,y,_),u.push(y,w,_)}this.setIndex(u),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}class xl extends Ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new k,d=new k,u=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const S=[],x=p/i;let y=0;p===0&&a===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const _=w/t;f.x=-e*Math.cos(s+_*r)*Math.sin(a+x*o),f.y=e*Math.cos(a+x*o),f.z=e*Math.sin(s+_*r)*Math.sin(a+x*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(_+y,1-x),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){const x=h[p][S+1],y=h[p][S],w=h[p+1][S],_=h[p+1][S+1];(p!==0||a>0)&&u.push(x,y,_),(p!==i-1||l<Math.PI)&&u.push(y,w,_)}this.setIndex(u),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dc extends rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ia extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ff extends Qn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Jh extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_n,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pf extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mf{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const u=c[f],g=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}class $h extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ga=new Ke,fc=new k,pc=new k;class gf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=yt,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(fc),pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pc),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ys extends Kh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vf extends gf{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xf extends $h{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new vf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mf extends $h{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yf extends Ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Af extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class oe{constructor(e){this.value=e}clone(){return new oe(this.value.clone===void 0?this.value:this.value.clone())}}function mc(n,e,t,i){const s=Sf(i);switch(t){case Fh:return n*e;case hi:return n*e/s.components*s.byteLength;case hl:return n*e/s.components*s.byteLength;case ul:return n*e*2/s.components*s.byteLength;case dl:return n*e*2/s.components*s.byteLength;case zh:return n*e*3/s.components*s.byteLength;case Ft:return n*e*4/s.components*s.byteLength;case fl:return n*e*4/s.components*s.byteLength;case Hr:case Vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wr:case Xr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yo:case So:return Math.max(n,16)*Math.max(e,8)/4;case Mo:case Ao:return Math.max(n,8)*Math.max(e,8)/2;case _o:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Co:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Do:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Io:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Po:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ko:case Go:case Ho:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vo:case Wo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xo:case Yo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sf(n){switch(n){case yt:case Lh:return{byteLength:1,components:1};case Ws:case Bh:case Sn:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case Ri:case ol:case tn:return{byteLength:4,components:1};case Uh:case Nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ui}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ui);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function eu(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function _f(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){const g=f[d],v=f[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){const v=f[u];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ef=`#ifdef USE_ALPHAHASH
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
#endif`,Tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
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
#endif`,If=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pf=`#ifdef USE_BATCHING
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
#endif`,Lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ff=`#ifdef USE_IRIDESCENCE
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
#endif`,zf=`#ifdef USE_BUMPMAP
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qf=`#define PI 3.141592653589793
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
} // validated`,qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kf=`vec3 transformedNormal = objectNormal;
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
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
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
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
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
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
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
#endif`,Sp=`struct PhysicalMaterial {
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
}`,_p=`
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
#endif`,wp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lp=`#if defined( USE_POINTS_UV )
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
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`#ifdef USE_MORPHTARGETS
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
#endif`,kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
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
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lm=`float getShadowMask() {
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
}`,cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wm=`uniform sampler2D t2D;
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`#include <common>
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
}`,Rm=`#if DEPTH_PACKING == 3200
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
}`,Im=`#define DISTANCE
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
}`,Pm=`#define DISTANCE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,zm=`uniform vec3 diffuse;
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
}`,Om=`#define LAMBERT
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
}`,km=`#define LAMBERT
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
}`,Gm=`#define MATCAP
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
}`,Hm=`#define MATCAP
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
}`,Vm=`#define NORMAL
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define PHONG
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
}`,Ym=`#define PHONG
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
}`,Qm=`#define STANDARD
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
}`,qm=`#define STANDARD
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
}`,Km=`#define TOON
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
}`,Zm=`#define TOON
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
}`,jm=`uniform float size;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,eg=`uniform vec3 color;
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
}`,tg=`uniform float rotation;
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
}`,ng=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:wf,alphahash_pars_fragment:Ef,alphamap_fragment:Tf,alphamap_pars_fragment:bf,alphatest_fragment:Cf,alphatest_pars_fragment:Df,aomap_fragment:Rf,aomap_pars_fragment:If,batching_pars_vertex:Pf,batching_vertex:Lf,begin_vertex:Bf,beginnormal_vertex:Uf,bsdfs:Nf,iridescence_fragment:Ff,bumpmap_pars_fragment:zf,clipping_planes_fragment:Of,clipping_planes_pars_fragment:kf,clipping_planes_pars_vertex:Gf,clipping_planes_vertex:Hf,color_fragment:Vf,color_pars_fragment:Wf,color_pars_vertex:Xf,color_vertex:Yf,common:Qf,cube_uv_reflection_fragment:qf,defaultnormal_vertex:Kf,displacementmap_pars_vertex:Zf,displacementmap_vertex:jf,emissivemap_fragment:Jf,emissivemap_pars_fragment:$f,colorspace_fragment:ep,colorspace_pars_fragment:tp,envmap_fragment:np,envmap_common_pars_fragment:ip,envmap_pars_fragment:sp,envmap_pars_vertex:rp,envmap_physical_pars_fragment:gp,envmap_vertex:ap,fog_vertex:op,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:hp,gradientmap_pars_fragment:up,lightmap_pars_fragment:dp,lights_lambert_fragment:fp,lights_lambert_pars_fragment:pp,lights_pars_begin:mp,lights_toon_fragment:vp,lights_toon_pars_fragment:xp,lights_phong_fragment:Mp,lights_phong_pars_fragment:yp,lights_physical_fragment:Ap,lights_physical_pars_fragment:Sp,lights_fragment_begin:_p,lights_fragment_maps:wp,lights_fragment_end:Ep,logdepthbuf_fragment:Tp,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Dp,map_fragment:Rp,map_pars_fragment:Ip,map_particle_fragment:Pp,map_particle_pars_fragment:Lp,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:Up,morphinstance_vertex:Np,morphcolor_vertex:Fp,morphnormal_vertex:zp,morphtarget_pars_vertex:Op,morphtarget_vertex:kp,normal_fragment_begin:Gp,normal_fragment_maps:Hp,normal_pars_fragment:Vp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:qp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:Zp,opaque_fragment:jp,packing:Jp,premultiplied_alpha_fragment:$p,project_vertex:em,dithering_fragment:tm,dithering_pars_fragment:nm,roughnessmap_fragment:im,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:am,shadowmap_vertex:om,shadowmask_pars_fragment:lm,skinbase_vertex:cm,skinning_pars_vertex:hm,skinning_vertex:um,skinnormal_vertex:dm,specularmap_fragment:fm,specularmap_pars_fragment:pm,tonemapping_fragment:mm,tonemapping_pars_fragment:gm,transmission_fragment:vm,transmission_pars_fragment:xm,uv_pars_fragment:Mm,uv_pars_vertex:ym,uv_vertex:Am,worldpos_vertex:Sm,background_vert:_m,background_frag:wm,backgroundCube_vert:Em,backgroundCube_frag:Tm,cube_vert:bm,cube_frag:Cm,depth_vert:Dm,depth_frag:Rm,distanceRGBA_vert:Im,distanceRGBA_frag:Pm,equirect_vert:Lm,equirect_frag:Bm,linedashed_vert:Um,linedashed_frag:Nm,meshbasic_vert:Fm,meshbasic_frag:zm,meshlambert_vert:Om,meshlambert_frag:km,meshmatcap_vert:Gm,meshmatcap_frag:Hm,meshnormal_vert:Vm,meshnormal_frag:Wm,meshphong_vert:Xm,meshphong_frag:Ym,meshphysical_vert:Qm,meshphysical_frag:qm,meshtoon_vert:Km,meshtoon_frag:Zm,points_vert:jm,points_frag:Jm,shadow_vert:$m,shadow_frag:eg,sprite_vert:tg,sprite_frag:ng},he={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Tn={basic:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:qt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:qt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:qt([he.points,he.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:qt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:qt([he.common,he.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:qt([he.sprite,he.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:qt([he.common,he.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:qt([he.lights,he.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Tn.physical={uniforms:qt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Sr={r:0,b:0,g:0},yi=new Pn,ig=new Ke;function sg(n,e,t,i,s,r,a){const o=new Ye(0);let l=r===!0?0:1,c,h,f=null,d=0,u=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function v(x){let y=!1;const w=g(x);w===null?p(o,l):w&&w.isColor&&(p(w,1),y=!0);const _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,y){const w=g(y);w&&(w.isCubeTexture||w.mapping===aa)?(h===void 0&&(h=new vt(new Pi(1,1,1),new rt({name:"BackgroundCubeMaterial",uniforms:ms(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(_,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(y.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(yi)),h.material.toneMapped=$e.getTransfer(w.colorSpace)!==ct,(f!==w||d!==w.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,f=w,d=w.version,u=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new vt(new Ln(2,2),new rt({name:"BackgroundMaterial",uniforms:ms(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$e.getTransfer(w.colorSpace)!==ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,u=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Sr,qh(n)),i.buffers.color.setClear(Sr.r,Sr.g,Sr.b,y,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:v,addToRenderList:m,dispose:S}}function rg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(A,C,P,F,z){let G=!1;const L=f(F,P,C);r!==L&&(r=L,c(r.object)),G=u(A,F,P,z),G&&g(A,F,P,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(A,C,P,F),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function f(A,C,P){const F=P.wireframe===!0;let z=i[A.id];z===void 0&&(z={},i[A.id]=z);let G=z[C.id];G===void 0&&(G={},z[C.id]=G);let L=G[F];return L===void 0&&(L=d(l()),G[F]=L),L}function d(A){const C=[],P=[],F=[];for(let z=0;z<t;z++)C[z]=0,P[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:F,object:A,attributes:{},index:null}}function u(A,C,P,F){const z=r.attributes,G=C.attributes;let L=0;const B=P.getAttributes();for(const N in B)if(B[N].location>=0){const ee=z[N];let le=G[N];if(le===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),ee===void 0||ee.attribute!==le||le&&ee.data!==le.data)return!0;L++}return r.attributesNum!==L||r.index!==F}function g(A,C,P,F){const z={},G=C.attributes;let L=0;const B=P.getAttributes();for(const N in B)if(B[N].location>=0){let ee=G[N];ee===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(ee=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(ee=A.instanceColor));const le={};le.attribute=ee,ee&&ee.data&&(le.data=ee.data),z[N]=le,L++}r.attributes=z,r.attributesNum=L,r.index=F}function v(){const A=r.newAttributes;for(let C=0,P=A.length;C<P;C++)A[C]=0}function m(A){p(A,0)}function p(A,C){const P=r.newAttributes,F=r.enabledAttributes,z=r.attributeDivisors;P[A]=1,F[A]===0&&(n.enableVertexAttribArray(A),F[A]=1),z[A]!==C&&(n.vertexAttribDivisor(A,C),z[A]=C)}function S(){const A=r.newAttributes,C=r.enabledAttributes;for(let P=0,F=C.length;P<F;P++)C[P]!==A[P]&&(n.disableVertexAttribArray(P),C[P]=0)}function x(A,C,P,F,z,G,L){L===!0?n.vertexAttribIPointer(A,C,P,z,G):n.vertexAttribPointer(A,C,P,F,z,G)}function y(A,C,P,F){v();const z=F.attributes,G=P.getAttributes(),L=C.defaultAttributeValues;for(const B in G){const N=G[B];if(N.location>=0){let Y=z[B];if(Y===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(Y=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(Y=A.instanceColor)),Y!==void 0){const ee=Y.normalized,le=Y.itemSize,we=e.get(Y);if(we===void 0)continue;const Be=we.buffer,ze=we.type,Pe=we.bytesPerElement,q=ze===n.INT||ze===n.UNSIGNED_INT||Y.gpuType===ol;if(Y.isInterleavedBufferAttribute){const j=Y.data,te=j.stride,Ae=Y.offset;if(j.isInstancedInterleavedBuffer){for(let ge=0;ge<N.locationSize;ge++)p(N.location+ge,j.meshPerAttribute);A.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<N.locationSize;ge++)m(N.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let ge=0;ge<N.locationSize;ge++)x(N.location+ge,le/N.locationSize,ze,ee,te*Pe,(Ae+le/N.locationSize*ge)*Pe,q)}else{if(Y.isInstancedBufferAttribute){for(let j=0;j<N.locationSize;j++)p(N.location+j,Y.meshPerAttribute);A.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let j=0;j<N.locationSize;j++)m(N.location+j);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let j=0;j<N.locationSize;j++)x(N.location+j,le/N.locationSize,ze,ee,le*Pe,le/N.locationSize*j*Pe,q)}}else if(L!==void 0){const ee=L[B];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(N.location,ee);break;case 3:n.vertexAttrib3fv(N.location,ee);break;case 4:n.vertexAttrib4fv(N.location,ee);break;default:n.vertexAttrib1fv(N.location,ee)}}}}S()}function w(){b();for(const A in i){const C=i[A];for(const P in C){const F=C[P];for(const z in F)h(F[z].object),delete F[z];delete C[P]}delete i[A]}}function _(A){if(i[A.id]===void 0)return;const C=i[A.id];for(const P in C){const F=C[P];for(const z in F)h(F[z].object),delete F[z];delete C[P]}delete i[A.id]}function T(A){for(const C in i){const P=i[C];if(P[A.id]===void 0)continue;const F=P[A.id];for(const z in F)h(F[z].object),delete F[z];delete P[A.id]}}function b(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:_,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function ag(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];t.update(u,i,1)}function l(c,h,f,d){if(f===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function og(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Ft&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const b=T===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yt&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==tn&&!b)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,_=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:w,maxSamples:_}}function lg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ri,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||i!==0||s;return s=d,i=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,x=S*4;let y=p.clippingState||null;l.value=y,y=h(g,d,x,u);for(let w=0;w!==x;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,u,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=u+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=u;x!==v;++x,y+=4)a.copy(f[x]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function cg(n){let e=new WeakMap;function t(a,o){return o===go?a.mapping=us:o===vo&&(a.mapping=ds),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===go||o===vo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sf(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const rs=4,gc=[.125,.215,.35,.446,.526,.582],Ci=20,Ha=new ys,vc=new Ye;let Va=null,Wa=0,Xa=0,Ya=!1;const Ei=(1+Math.sqrt(5))/2,$i=1/Ei,xc=[new k(-Ei,$i,0),new k(Ei,$i,0),new k(-$i,0,Ei),new k($i,0,Ei),new k(0,Ei,-$i),new k(0,Ei,$i),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],hg=new k;class Mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=hg}=r;Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va,Wa,Xa),this._renderer.xr.enabled=Ya,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tt,minFilter:tt,generateMipmaps:!1,type:Sn,format:Ft,colorSpace:ui,depthBuffer:!1},s=yc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ug(r)),this._blurMaterial=dg(r,e,t)}return s}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,i,s,r){const l=new Kt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(vc),f.toneMapping=Vn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const v=new Xh({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),m=new vt(new Pi,v);let p=!1;const S=e.background;S?S.isColor&&(v.color.copy(S),e.background=null,p=!0):(v.color.copy(vc),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const w=this._cubeSize;_r(s,y*w,x>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=d,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===us||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_r(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xc[(s-r-1)%xc.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new vt(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ci-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ci;m>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let S=0;for(let T=0;T<Ci;++T){const b=T/v,M=Math.exp(-b*b/2);p.push(M),T===0?S+=M:T<m&&(S+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const y=this._sizeLods[s],w=3*y*(s>x-rs?s-x+rs:0),_=4*(this._cubeSize-y);_r(t,w,_,3*y,2*y),l.setRenderTarget(t),l.render(f,Ha)}}function ug(n){const e=[],t=[],i=[];let s=n;const r=n-rs+1+gc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-rs?l=gc[a-n+rs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*u),x=new Float32Array(m*g*u),y=new Float32Array(p*g*u);for(let _=0;_<u;_++){const T=_%3*2/3-1,b=_>2?0:-1,M=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];S.set(M,v*g*_),x.set(d,m*g*_);const A=[_,_,_,_,_,_];y.set(A,p*g*_)}const w=new Ht;w.setAttribute("position",new Ze(S,v)),w.setAttribute("uv",new Ze(x,m)),w.setAttribute("faceIndex",new Ze(y,p)),e.push(w),s>rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yc(n,e,t){const i=new at(n,e,t);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function dg(n,e,t){const i=new Float32Array(Ci),s=new k(0,1,0);return new rt({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Ac(){return new rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Sc(){return new rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Ml(){return`

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
	`}function fg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===go||l===vo,h=l===us||l===ds;if(c||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Mc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const u=o.image;return c&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new Mc(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function pg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ys("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function mg(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const u=r.get(d);u&&(e.remove(u),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const u in d)e.update(d[u],n.ARRAY_BUFFER)}function c(f){const d=[],u=f.index,g=f.attributes.position;let v=0;if(u!==null){const S=u.array;v=u.version;for(let x=0,y=S.length;x<y;x+=3){const w=S[x+0],_=S[x+1],T=S[x+2];d.push(w,_,_,T,T,w)}}else if(g!==void 0){const S=g.array;v=g.version;for(let x=0,y=S.length/3-1;x<y;x+=3){const w=x+0,_=x+1,T=x+2;d.push(w,_,_,T,T,w)}}else return;const m=new(Gh(d)?Qh:Yh)(d,1);m.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){const d=r.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function gg(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function c(d,u,g){g!==0&&(n.drawElementsInstanced(i,u,r,d*a,g),t.update(u,i,g))}function h(d,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];t.update(m,i,1)}function f(d,u,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,u[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,u,0,r,d,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=u[S]*v[S];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function vg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function xg(n,e,t){const i=new WeakMap,s=new mt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let M=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;u===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let y=o.attributes.position.count*x,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const _=new Float32Array(y*w*4*f),T=new gl(_,y,w,f);T.type=tn,T.needsUpdate=!0;const b=x*4;for(let A=0;A<f;A++){const C=m[A],P=p[A],F=S[A],z=y*w*4*A;for(let G=0;G<C.count;G++){const L=G*b;u===!0&&(s.fromBufferAttribute(C,G),_[z+L+0]=s.x,_[z+L+1]=s.y,_[z+L+2]=s.z,_[z+L+3]=0),g===!0&&(s.fromBufferAttribute(P,G),_[z+L+4]=s.x,_[z+L+5]=s.y,_[z+L+6]=s.z,_[z+L+7]=0),v===!0&&(s.fromBufferAttribute(F,G),_[z+L+8]=s.x,_[z+L+9]=s.y,_[z+L+10]=s.z,_[z+L+11]=F.itemSize===4?s.w:1)}}d={count:f,texture:T,size:new me(y,w)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let u=0;for(let v=0;v<c.length;v++)u+=c[v];const g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Mg(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const tu=new Lt,_c=new oa(1,1),nu=new gl,iu=new ta,su=new Zh,wc=[],Ec=[],Tc=new Float32Array(16),bc=new Float32Array(9),Cc=new Float32Array(4);function As(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=wc[s];if(r===void 0&&(r=new Float32Array(s),wc[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function la(n,e){let t=Ec[e];t===void 0&&(t=new Int32Array(e),Ec[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Bt(t,i))return;Cc.set(i),n.uniformMatrix2fv(this.addr,!1,Cc),Ut(t,i)}}function Eg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Bt(t,i))return;bc.set(i),n.uniformMatrix3fv(this.addr,!1,bc),Ut(t,i)}}function Tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Bt(t,i))return;Tc.set(i),n.uniformMatrix4fv(this.addr,!1,Tc),Ut(t,i)}}function bg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function Dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Ig(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Ug(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_c.compareFunction=kh,r=_c):r=tu,t.setTexture2D(e||r,s)}function Ng(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||iu,s)}function Fg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||su,s)}function zg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||nu,s)}function Og(n){switch(n){case 5126:return yg;case 35664:return Ag;case 35665:return Sg;case 35666:return _g;case 35674:return wg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return bg;case 35667:case 35671:return Cg;case 35668:case 35672:return Dg;case 35669:case 35673:return Rg;case 5125:return Ig;case 36294:return Pg;case 36295:return Lg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return zg}}function kg(n,e){n.uniform1fv(this.addr,e)}function Gg(n,e){const t=As(e,this.size,2);n.uniform2fv(this.addr,t)}function Hg(n,e){const t=As(e,this.size,3);n.uniform3fv(this.addr,t)}function Vg(n,e){const t=As(e,this.size,4);n.uniform4fv(this.addr,t)}function Wg(n,e){const t=As(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Xg(n,e){const t=As(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yg(n,e){const t=As(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Qg(n,e){n.uniform1iv(this.addr,e)}function qg(n,e){n.uniform2iv(this.addr,e)}function Kg(n,e){n.uniform3iv(this.addr,e)}function Zg(n,e){n.uniform4iv(this.addr,e)}function jg(n,e){n.uniform1uiv(this.addr,e)}function Jg(n,e){n.uniform2uiv(this.addr,e)}function $g(n,e){n.uniform3uiv(this.addr,e)}function e0(n,e){n.uniform4uiv(this.addr,e)}function t0(n,e,t){const i=this.cache,s=e.length,r=la(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||tu,r[a])}function n0(n,e,t){const i=this.cache,s=e.length,r=la(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||iu,r[a])}function i0(n,e,t){const i=this.cache,s=e.length,r=la(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||su,r[a])}function s0(n,e,t){const i=this.cache,s=e.length,r=la(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nu,r[a])}function r0(n){switch(n){case 5126:return kg;case 35664:return Gg;case 35665:return Hg;case 35666:return Vg;case 35674:return Wg;case 35675:return Xg;case 35676:return Yg;case 5124:case 35670:return Qg;case 35667:case 35671:return qg;case 35668:case 35672:return Kg;case 35669:case 35673:return Zg;case 5125:return jg;case 36294:return Jg;case 36295:return $g;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}class a0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Og(t.type)}}class o0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=r0(t.type)}}class l0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function Dc(n,e){n.seq.push(e),n.map[e.id]=e}function c0(n,e,t){const i=n.name,s=i.length;for(Qa.lastIndex=0;;){const r=Qa.exec(i),a=Qa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Dc(t,c===void 0?new a0(o,n,e):new o0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new l0(o),Dc(t,f)),t=f}}}class Yr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);c0(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Rc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const h0=37297;let u0=0;function d0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ic=new Xe;function f0(n){$e._getMatrix(Ic,$e.workingColorSpace,n);const e=`mat3( ${Ic.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case jr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Pc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+d0(n.getShaderSource(e),o)}else return r}function p0(n,e){const t=f0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function m0(n,e){let t;switch(e){case gd:t="Linear";break;case vd:t="Reinhard";break;case xd:t="Cineon";break;case Md:t="ACESFilmic";break;case Ad:t="AgX";break;case Sd:t="Neutral";break;case yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wr=new k;function g0(){$e.getLuminanceCoefficients(wr);const n=wr.x.toFixed(4),e=wr.y.toFixed(4),t=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function x0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function M0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function zs(n){return n!==""}function Lc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(n){return n.replace(y0,S0)}const A0=new Map;function S0(n,e){let t=Ve[e];if(t===void 0){const i=A0.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ko(t)}const _0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(n){return n.replace(_0,w0)}function w0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function E0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function T0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function C0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ih:e="ENVMAP_BLENDING_MULTIPLY";break;case pd:e="ENVMAP_BLENDING_MIX";break;case md:e="ENVMAP_BLENDING_ADD";break}return e}function D0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function R0(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=E0(t),c=T0(t),h=b0(t),f=C0(t),d=D0(t),u=v0(t),g=x0(r),v=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(m=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Vn?m0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,p0("linearToOutputTexel",t.outputColorSpace),g0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=Ko(a),a=Lc(a,t),a=Bc(a,t),o=Ko(o),o=Lc(o,t),o=Bc(o,t),a=Uc(a),o=Uc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+a,y=S+p+o,w=Rc(s,s.VERTEX_SHADER,x),_=Rc(s,s.FRAGMENT_SHADER,y);s.attachShader(v,w),s.attachShader(v,_),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(C){if(n.debug.checkShaderErrors){const P=s.getProgramInfoLog(v)||"",F=s.getShaderInfoLog(w)||"",z=s.getShaderInfoLog(_)||"",G=P.trim(),L=F.trim(),B=z.trim();let N=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,_);else{const ee=Pc(s,w,"vertex"),le=Pc(s,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+ee+`
`+le)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(L===""||B==="")&&(Y=!1);Y&&(C.diagnostics={runnable:N,programLog:G,vertexShader:{log:L,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(w),s.deleteShader(_),b=new Yr(s,v),M=M0(s,v)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,h0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=_,this}let I0=0;class P0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new L0(e),t.set(e,i)),i}}class L0{constructor(e){this.id=I0++,this.code=e,this.usedTimes=0}}function B0(n,e,t,i,s,r,a){const o=new Vh,l=new P0,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,A,C,P,F){const z=P.fog,G=F.geometry,L=M.isMeshStandardMaterial?P.environment:null,B=(M.isMeshStandardMaterial?t:e).get(M.envMap||L),N=B&&B.mapping===aa?B.image.height:null,Y=g[M.type];M.precision!==null&&(u=s.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=ee!==void 0?ee.length:0;let we=0;G.morphAttributes.position!==void 0&&(we=1),G.morphAttributes.normal!==void 0&&(we=2),G.morphAttributes.color!==void 0&&(we=3);let Be,ze,Pe,q;if(Y){const it=Tn[Y];Be=it.vertexShader,ze=it.fragmentShader}else Be=M.vertexShader,ze=M.fragmentShader,l.update(M),Pe=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);const j=n.getRenderTarget(),te=n.state.buffers.depth.getReversed(),Ae=F.isInstancedMesh===!0,ge=F.isBatchedMesh===!0,Ne=!!M.map,Tt=!!M.matcap,U=!!B,ht=!!M.aoMap,Oe=!!M.lightMap,Re=!!M.bumpMap,xe=!!M.normalMap,ot=!!M.displacementMap,Me=!!M.emissiveMap,ke=!!M.metalnessMap,ut=!!M.roughnessMap,Qe=M.anisotropy>0,I=M.clearcoat>0,E=M.dispersion>0,W=M.iridescence>0,Z=M.sheen>0,$=M.transmission>0,K=Qe&&!!M.anisotropyMap,Ce=I&&!!M.clearcoatMap,ae=I&&!!M.clearcoatNormalMap,Ee=I&&!!M.clearcoatRoughnessMap,Te=W&&!!M.iridescenceMap,se=W&&!!M.iridescenceThicknessMap,fe=Z&&!!M.sheenColorMap,Ue=Z&&!!M.sheenRoughnessMap,be=!!M.specularMap,ue=!!M.specularColorMap,He=!!M.specularIntensityMap,O=$&&!!M.transmissionMap,re=$&&!!M.thicknessMap,ce=!!M.gradientMap,ye=!!M.alphaMap,ne=M.alphaTest>0,J=!!M.alphaHash,_e=!!M.extensions;let Ge=Vn;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const gt={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:Be,fragmentShader:ze,defines:M.defines,customVertexShaderID:Pe,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:ge,batchingColor:ge&&F._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&F.instanceColor!==null,instancingMorph:Ae&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ui,alphaToCoverage:!!M.alphaToCoverage,map:Ne,matcap:Tt,envMap:U,envMapMode:U&&B.mapping,envMapCubeUVHeight:N,aoMap:ht,lightMap:Oe,bumpMap:Re,normalMap:xe,displacementMap:d&&ot,emissiveMap:Me,normalMapObjectSpace:xe&&M.normalMapType===wd,normalMapTangentSpace:xe&&M.normalMapType===pl,metalnessMap:ke,roughnessMap:ut,anisotropy:Qe,anisotropyMap:K,clearcoat:I,clearcoatMap:Ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:E,iridescence:W,iridescenceMap:Te,iridescenceThicknessMap:se,sheen:Z,sheenColorMap:fe,sheenRoughnessMap:Ue,specularMap:be,specularColorMap:ue,specularIntensityMap:He,transmission:$,transmissionMap:O,thicknessMap:re,gradientMap:ce,opaque:M.transparent===!1&&M.blending===ls&&M.alphaToCoverage===!1,alphaMap:ye,alphaTest:ne,alphaHash:J,combine:M.combine,mapUv:Ne&&v(M.map.channel),aoMapUv:ht&&v(M.aoMap.channel),lightMapUv:Oe&&v(M.lightMap.channel),bumpMapUv:Re&&v(M.bumpMap.channel),normalMapUv:xe&&v(M.normalMap.channel),displacementMapUv:ot&&v(M.displacementMap.channel),emissiveMapUv:Me&&v(M.emissiveMap.channel),metalnessMapUv:ke&&v(M.metalnessMap.channel),roughnessMapUv:ut&&v(M.roughnessMap.channel),anisotropyMapUv:K&&v(M.anisotropyMap.channel),clearcoatMapUv:Ce&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(M.sheenRoughnessMap.channel),specularMapUv:be&&v(M.specularMap.channel),specularColorMapUv:ue&&v(M.specularColorMap.channel),specularIntensityMapUv:He&&v(M.specularIntensityMap.channel),transmissionMapUv:O&&v(M.transmissionMap.channel),thicknessMapUv:re&&v(M.thicknessMap.channel),alphaMapUv:ye&&v(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(xe||Qe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Ne||ye),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:te,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:we,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ne&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:Me&&M.emissiveMap.isVideoTexture===!0&&$e.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Gt,flipSided:M.side===Rt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function p(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)A.push(C),A.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(S(A,M),x(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function S(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function x(M,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),A.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const A=g[M.type];let C;if(A){const P=Tn[A];C=$d.clone(P.uniforms)}else C=M.uniforms;return C}function w(M,A){let C;for(let P=0,F=h.length;P<F;P++){const z=h[P];if(z.cacheKey===A){C=z,++C.usedTimes;break}}return C===void 0&&(C=new R0(n,A,M,r),h.push(C)),C}function _(M){if(--M.usedTimes===0){const A=h.indexOf(M);h[A]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:_,releaseShaderCache:T,programs:h,dispose:b}}function U0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function N0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,d,u,g,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function o(f,d,u,g,v,m){const p=a(f,d,u,g,v,m);u.transmission>0?i.push(p):u.transparent===!0?s.push(p):t.push(p)}function l(f,d,u,g,v,m){const p=a(f,d,u,g,v,m);u.transmission>0?i.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||N0),i.length>1&&i.sort(d||Fc),s.length>1&&s.sort(d||Fc)}function h(){for(let f=e,d=n.length;f<d;f++){const u=n[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function F0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new zc,n.set(i,[a])):s>=r.length?(a=new zc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function z0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ye};break;case"SpotLight":t={position:new k,direction:new k,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function O0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let k0=0;function G0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function H0(n){const e=new z0,t=O0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new Ke,a=new Ke;function o(c){let h=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let u=0,g=0,v=0,m=0,p=0,S=0,x=0,y=0,w=0,_=0,T=0;c.sort(G0);for(let M=0,A=c.length;M<A;M++){const C=c[M],P=C.color,F=C.intensity,z=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=P.r*F,f+=P.g*F,d+=P.b*F;else if(C.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(C.sh.coefficients[L],F);T++}else if(C.isDirectionalLight){const L=e.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const B=C.shadow,N=t.get(C);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,i.directionalShadow[u]=N,i.directionalShadowMap[u]=G,i.directionalShadowMatrix[u]=C.shadow.matrix,S++}i.directional[u]=L,u++}else if(C.isSpotLight){const L=e.get(C);L.position.setFromMatrixPosition(C.matrixWorld),L.color.copy(P).multiplyScalar(F),L.distance=z,L.coneCos=Math.cos(C.angle),L.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),L.decay=C.decay,i.spot[v]=L;const B=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,B.updateMatrices(C),C.castShadow&&_++),i.spotLightMatrix[v]=B.matrix,C.castShadow){const N=t.get(C);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=G,y++}v++}else if(C.isRectAreaLight){const L=e.get(C);L.color.copy(P).multiplyScalar(F),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=L,m++}else if(C.isPointLight){const L=e.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),L.distance=C.distance,L.decay=C.decay,C.castShadow){const B=C.shadow,N=t.get(C);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,N.shadowCameraNear=B.camera.near,N.shadowCameraFar=B.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=C.shadow.matrix,x++}i.point[g]=L,g++}else if(C.isHemisphereLight){const L=e.get(C);L.skyColor.copy(C.color).multiplyScalar(F),L.groundColor.copy(C.groundColor).multiplyScalar(F),i.hemi[p]=L,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==u||b.pointLength!==g||b.spotLength!==v||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==S||b.numPointShadows!==x||b.numSpotShadows!==y||b.numSpotMaps!==w||b.numLightProbes!==T)&&(i.directional.length=u,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+w-_,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=_,i.numLightProbes=T,b.directionalLength=u,b.pointLength=g,b.spotLength=v,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=S,b.numPointShadows=x,b.numSpotShadows=y,b.numSpotMaps=w,b.numLightProbes=T,i.version=k0++)}function l(c,h){let f=0,d=0,u=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const x=c[p];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Oc(n){const e=new H0(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function V0(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Oc(n),e.set(s,[o])):r>=a.length?(o=new Oc(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const W0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
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
}`;function Y0(n,e,t){let i=new js;const s=new me,r=new me,a=new mt,o=new Jh({depthPacking:Oh}),l=new pf,c={},h=t.maxTextureSize,f={[In]:Rt,[Rt]:In,[Gt]:Gt},d=new rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:W0,fragmentShader:X0}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let p=this.type;this.render=function(_,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;const M=n.getRenderTarget(),A=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Pt),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const F=p!==kn&&this.type===kn,z=p===kn&&this.type!==kn;for(let G=0,L=_.length;G<L;G++){const B=_[G],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const Y=N.getFrameExtents();if(s.multiply(Y),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,N.mapSize.y=r.y)),N.map===null||F===!0||z===!0){const le=this.type!==kn?{minFilter:Mt,magFilter:Mt}:{};N.map!==null&&N.map.dispose(),N.map=new at(s.x,s.y,le),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const ee=N.getViewportCount();for(let le=0;le<ee;le++){const we=N.getViewport(le);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),P.viewport(a),N.updateMatrices(B,le),i=N.getFrustum(),y(T,b,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===kn&&S(N,b),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,A,C)};function S(_,T){const b=e.update(v);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,u.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new at(s.x,s.y)),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,n.setRenderTarget(_.mapPass),n.clear(),n.renderBufferDirect(T,null,b,d,v,null),u.uniforms.shadow_pass.value=_.mapPass.texture,u.uniforms.resolution.value=_.mapSize,u.uniforms.radius.value=_.radius,n.setRenderTarget(_.map),n.clear(),n.renderBufferDirect(T,null,b,u,v,null)}function x(_,T,b,M){let A=null;const C=b.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(C!==void 0)A=C;else if(A=b.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const P=A.uuid,F=T.uuid;let z=c[P];z===void 0&&(z={},c[P]=z);let G=z[F];G===void 0&&(G=A.clone(),z[F]=G,T.addEventListener("dispose",w)),A=G}if(A.visible=T.visible,A.wireframe=T.wireframe,M===kn?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:f[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const P=n.properties.get(A);P.light=b}return A}function y(_,T,b,M,A){if(_.visible===!1)return;if(_.layers.test(T.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&A===kn)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,_.matrixWorld);const F=e.update(_),z=_.material;if(Array.isArray(z)){const G=F.groups;for(let L=0,B=G.length;L<B;L++){const N=G[L],Y=z[N.materialIndex];if(Y&&Y.visible){const ee=x(_,Y,M,A);_.onBeforeShadow(n,_,T,b,F,ee,N),n.renderBufferDirect(b,null,F,ee,_,N),_.onAfterShadow(n,_,T,b,F,ee,N)}}}else if(z.visible){const G=x(_,z,M,A);_.onBeforeShadow(n,_,T,b,F,G,null),n.renderBufferDirect(b,null,F,G,_,null),_.onAfterShadow(n,_,T,b,F,G,null)}}const P=_.children;for(let F=0,z=P.length;F<z;F++)y(P[F],T,b,M,A)}function w(_){_.target.removeEventListener("dispose",w);for(const b in c){const M=c[b],A=_.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}const Q0={[co]:Zr,[ho]:po,[uo]:mo,[hs]:fo,[Zr]:co,[po]:ho,[mo]:uo,[fo]:hs};function q0(n,e){function t(){let O=!1;const re=new mt;let ce=null;const ye=new mt(0,0,0,0);return{setMask:function(ne){ce!==ne&&!O&&(n.colorMask(ne,ne,ne,ne),ce=ne)},setLocked:function(ne){O=ne},setClear:function(ne,J,_e,Ge,gt){gt===!0&&(ne*=Ge,J*=Ge,_e*=Ge),re.set(ne,J,_e,Ge),ye.equals(re)===!1&&(n.clearColor(ne,J,_e,Ge),ye.copy(re))},reset:function(){O=!1,ce=null,ye.set(-1,0,0,0)}}}function i(){let O=!1,re=!1,ce=null,ye=null,ne=null;return{setReversed:function(J){if(re!==J){const _e=e.get("EXT_clip_control");J?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),re=J;const Ge=ne;ne=null,this.setClear(Ge)}},getReversed:function(){return re},setTest:function(J){J?j(n.DEPTH_TEST):te(n.DEPTH_TEST)},setMask:function(J){ce!==J&&!O&&(n.depthMask(J),ce=J)},setFunc:function(J){if(re&&(J=Q0[J]),ye!==J){switch(J){case co:n.depthFunc(n.NEVER);break;case Zr:n.depthFunc(n.ALWAYS);break;case ho:n.depthFunc(n.LESS);break;case hs:n.depthFunc(n.LEQUAL);break;case uo:n.depthFunc(n.EQUAL);break;case fo:n.depthFunc(n.GEQUAL);break;case po:n.depthFunc(n.GREATER);break;case mo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=J}},setLocked:function(J){O=J},setClear:function(J){ne!==J&&(re&&(J=1-J),n.clearDepth(J),ne=J)},reset:function(){O=!1,ce=null,ye=null,ne=null,re=!1}}}function s(){let O=!1,re=null,ce=null,ye=null,ne=null,J=null,_e=null,Ge=null,gt=null;return{setTest:function(it){O||(it?j(n.STENCIL_TEST):te(n.STENCIL_TEST))},setMask:function(it){re!==it&&!O&&(n.stencilMask(it),re=it)},setFunc:function(it,Bn,wn){(ce!==it||ye!==Bn||ne!==wn)&&(n.stencilFunc(it,Bn,wn),ce=it,ye=Bn,ne=wn)},setOp:function(it,Bn,wn){(J!==it||_e!==Bn||Ge!==wn)&&(n.stencilOp(it,Bn,wn),J=it,_e=Bn,Ge=wn)},setLocked:function(it){O=it},setClear:function(it){gt!==it&&(n.clearStencil(it),gt=it)},reset:function(){O=!1,re=null,ce=null,ye=null,ne=null,J=null,_e=null,Ge=null,gt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,u=[],g=null,v=!1,m=null,p=null,S=null,x=null,y=null,w=null,_=null,T=new Ye(0,0,0),b=0,M=!1,A=null,C=null,P=null,F=null,z=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,B=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(N)[1]),L=B>=1):N.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),L=B>=2);let Y=null,ee={};const le=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),Be=new mt().fromArray(le),ze=new mt().fromArray(we);function Pe(O,re,ce,ye){const ne=new Uint8Array(4),J=n.createTexture();n.bindTexture(O,J),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<ce;_e++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(re+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return J}const q={};q[n.TEXTURE_2D]=Pe(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(hs),Re(!1),xe(kl),j(n.CULL_FACE),ht(Pt);function j(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function te(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Ae(O,re){return f[O]!==re?(n.bindFramebuffer(O,re),f[O]=re,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=re),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=re),!0):!1}function ge(O,re){let ce=u,ye=!1;if(O){ce=d.get(re),ce===void 0&&(ce=[],d.set(re,ce));const ne=O.textures;if(ce.length!==ne.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let J=0,_e=ne.length;J<_e;J++)ce[J]=n.COLOR_ATTACHMENT0+J;ce.length=ne.length,ye=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,ye=!0);ye&&n.drawBuffers(ce)}function Ne(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const Tt={[bi]:n.FUNC_ADD,[ju]:n.FUNC_SUBTRACT,[Ju]:n.FUNC_REVERSE_SUBTRACT};Tt[$u]=n.MIN,Tt[ed]=n.MAX;const U={[td]:n.ZERO,[nd]:n.ONE,[id]:n.SRC_COLOR,[oo]:n.SRC_ALPHA,[cd]:n.SRC_ALPHA_SATURATE,[od]:n.DST_COLOR,[rd]:n.DST_ALPHA,[sd]:n.ONE_MINUS_SRC_COLOR,[lo]:n.ONE_MINUS_SRC_ALPHA,[ld]:n.ONE_MINUS_DST_COLOR,[ad]:n.ONE_MINUS_DST_ALPHA,[hd]:n.CONSTANT_COLOR,[ud]:n.ONE_MINUS_CONSTANT_COLOR,[dd]:n.CONSTANT_ALPHA,[fd]:n.ONE_MINUS_CONSTANT_ALPHA};function ht(O,re,ce,ye,ne,J,_e,Ge,gt,it){if(O===Pt){v===!0&&(te(n.BLEND),v=!1);return}if(v===!1&&(j(n.BLEND),v=!0),O!==Zu){if(O!==m||it!==M){if((p!==bi||y!==bi)&&(n.blendEquation(n.FUNC_ADD),p=bi,y=bi),it)switch(O){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kr:n.blendFunc(n.ONE,n.ONE);break;case Gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,x=null,w=null,_=null,T.set(0,0,0),b=0,m=O,M=it}return}ne=ne||re,J=J||ce,_e=_e||ye,(re!==p||ne!==y)&&(n.blendEquationSeparate(Tt[re],Tt[ne]),p=re,y=ne),(ce!==S||ye!==x||J!==w||_e!==_)&&(n.blendFuncSeparate(U[ce],U[ye],U[J],U[_e]),S=ce,x=ye,w=J,_=_e),(Ge.equals(T)===!1||gt!==b)&&(n.blendColor(Ge.r,Ge.g,Ge.b,gt),T.copy(Ge),b=gt),m=O,M=!1}function Oe(O,re){O.side===Gt?te(n.CULL_FACE):j(n.CULL_FACE);let ce=O.side===Rt;re&&(ce=!ce),Re(ce),O.blending===ls&&O.transparent===!1?ht(Pt):ht(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const ye=O.stencilWrite;o.setTest(ye),ye&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Me(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(O){A!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),A=O)}function xe(O){O!==qu?(j(n.CULL_FACE),O!==C&&(O===kl?n.cullFace(n.BACK):O===Ku?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):te(n.CULL_FACE),C=O}function ot(O){O!==P&&(L&&n.lineWidth(O),P=O)}function Me(O,re,ce){O?(j(n.POLYGON_OFFSET_FILL),(F!==re||z!==ce)&&(n.polygonOffset(re,ce),F=re,z=ce)):te(n.POLYGON_OFFSET_FILL)}function ke(O){O?j(n.SCISSOR_TEST):te(n.SCISSOR_TEST)}function ut(O){O===void 0&&(O=n.TEXTURE0+G-1),Y!==O&&(n.activeTexture(O),Y=O)}function Qe(O,re,ce){ce===void 0&&(Y===null?ce=n.TEXTURE0+G-1:ce=Y);let ye=ee[ce];ye===void 0&&(ye={type:void 0,texture:void 0},ee[ce]=ye),(ye.type!==O||ye.texture!==re)&&(Y!==ce&&(n.activeTexture(ce),Y=ce),n.bindTexture(O,re||q[O]),ye.type=O,ye.texture=re)}function I(){const O=ee[Y];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(O){Be.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Be.copy(O))}function Ue(O){ze.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ze.copy(O))}function be(O,re){let ce=c.get(re);ce===void 0&&(ce=new WeakMap,c.set(re,ce));let ye=ce.get(O);ye===void 0&&(ye=n.getUniformBlockIndex(re,O.name),ce.set(O,ye))}function ue(O,re){const ye=c.get(re).get(O);l.get(re)!==ye&&(n.uniformBlockBinding(re,ye,O.__bindingPointIndex),l.set(re,ye))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Y=null,ee={},f={},d=new WeakMap,u=[],g=null,v=!1,m=null,p=null,S=null,x=null,y=null,w=null,_=null,T=new Ye(0,0,0),b=0,M=!1,A=null,C=null,P=null,F=null,z=null,Be.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:te,bindFramebuffer:Ae,drawBuffers:ge,useProgram:Ne,setBlending:ht,setMaterial:Oe,setFlipSided:Re,setCullFace:xe,setLineWidth:ot,setPolygonOffset:Me,setScissorTest:ke,activeTexture:ut,bindTexture:Qe,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:Te,texImage3D:se,updateUBOMapping:be,uniformBlockBinding:ue,texStorage2D:ae,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:$,compressedTexSubImage2D:K,compressedTexSubImage3D:Ce,scissor:fe,viewport:Ue,reset:He}}function K0(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap;let f;const d=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return u?new OffscreenCanvas(I,E):ea("canvas")}function v(I,E,W){let Z=1;const $=Qe(I);if(($.width>W||$.height>W)&&(Z=W/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const K=Math.floor(Z*$.width),Ce=Math.floor(Z*$.height);f===void 0&&(f=g(K,Ce));const ae=E?g(K,Ce):f;return ae.width=K,ae.height=Ce,ae.getContext("2d").drawImage(I,0,0,K,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+K+"x"+Ce+")."),ae}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){n.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(I,E,W,Z,$=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=E;if(E===n.RED&&(W===n.FLOAT&&(K=n.R32F),W===n.HALF_FLOAT&&(K=n.R16F),W===n.UNSIGNED_BYTE&&(K=n.R8)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(K=n.R8UI),W===n.UNSIGNED_SHORT&&(K=n.R16UI),W===n.UNSIGNED_INT&&(K=n.R32UI),W===n.BYTE&&(K=n.R8I),W===n.SHORT&&(K=n.R16I),W===n.INT&&(K=n.R32I)),E===n.RG&&(W===n.FLOAT&&(K=n.RG32F),W===n.HALF_FLOAT&&(K=n.RG16F),W===n.UNSIGNED_BYTE&&(K=n.RG8)),E===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(K=n.RG8UI),W===n.UNSIGNED_SHORT&&(K=n.RG16UI),W===n.UNSIGNED_INT&&(K=n.RG32UI),W===n.BYTE&&(K=n.RG8I),W===n.SHORT&&(K=n.RG16I),W===n.INT&&(K=n.RG32I)),E===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(K=n.RGB8UI),W===n.UNSIGNED_SHORT&&(K=n.RGB16UI),W===n.UNSIGNED_INT&&(K=n.RGB32UI),W===n.BYTE&&(K=n.RGB8I),W===n.SHORT&&(K=n.RGB16I),W===n.INT&&(K=n.RGB32I)),E===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),W===n.UNSIGNED_INT&&(K=n.RGBA32UI),W===n.BYTE&&(K=n.RGBA8I),W===n.SHORT&&(K=n.RGBA16I),W===n.INT&&(K=n.RGBA32I)),E===n.RGB&&(W===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),E===n.RGBA){const Ce=$?jr:$e.getTransfer(Z);W===n.FLOAT&&(K=n.RGBA32F),W===n.HALF_FLOAT&&(K=n.RGBA16F),W===n.UNSIGNED_BYTE&&(K=Ce===ct?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(I,E){let W;return I?E===null||E===Ri||E===fs?W=n.DEPTH24_STENCIL8:E===tn?W=n.DEPTH32F_STENCIL8:E===Ws&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ri||E===fs?W=n.DEPTH_COMPONENT24:E===tn?W=n.DEPTH_COMPONENT32F:E===Ws&&(W=n.DEPTH_COMPONENT16),W}function w(I,E){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Mt&&I.minFilter!==tt?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function _(I){const E=I.target;E.removeEventListener("dispose",_),b(E),E.isVideoTexture&&h.delete(E)}function T(I){const E=I.target;E.removeEventListener("dispose",T),A(E)}function b(I){const E=i.get(I);if(E.__webglInit===void 0)return;const W=I.source,Z=d.get(W);if(Z){const $=Z[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(I),Object.keys(Z).length===0&&d.delete(W)}i.remove(I)}function M(I){const E=i.get(I);n.deleteTexture(E.__webglTexture);const W=I.source,Z=d.get(W);delete Z[E.__cacheKey],a.memory.textures--}function A(I){const E=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let $=0;$<E.__webglFramebuffer[Z].length;$++)n.deleteFramebuffer(E.__webglFramebuffer[Z][$]);else n.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)n.deleteFramebuffer(E.__webglFramebuffer[Z]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=I.textures;for(let Z=0,$=W.length;Z<$;Z++){const K=i.get(W[Z]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(W[Z])}i.remove(I)}let C=0;function P(){C=0}function F(){const I=C;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),C+=1,I}function z(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function G(I,E){const W=i.get(I);if(I.isVideoTexture&&ke(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){const Z=I.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(W,I,E);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function L(I,E){const W=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){q(W,I,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function B(I,E){const W=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){q(W,I,E);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function N(I,E){const W=i.get(I);if(I.version>0&&W.__version!==I.version){j(W,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}const Y={[Vs]:n.REPEAT,[bn]:n.CLAMP_TO_EDGE,[xo]:n.MIRRORED_REPEAT},ee={[Mt]:n.NEAREST,[_d]:n.NEAREST_MIPMAP_NEAREST,[tr]:n.NEAREST_MIPMAP_LINEAR,[tt]:n.LINEAR,[ga]:n.LINEAR_MIPMAP_NEAREST,[Cn]:n.LINEAR_MIPMAP_LINEAR},le={[Ed]:n.NEVER,[Id]:n.ALWAYS,[Td]:n.LESS,[kh]:n.LEQUAL,[bd]:n.EQUAL,[Rd]:n.GEQUAL,[Cd]:n.GREATER,[Dd]:n.NOTEQUAL};function we(I,E){if(E.type===tn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===tt||E.magFilter===ga||E.magFilter===tr||E.magFilter===Cn||E.minFilter===tt||E.minFilter===ga||E.minFilter===tr||E.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Y[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Y[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Y[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ee[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ee[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,le[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mt||E.minFilter!==tr&&E.minFilter!==Cn||E.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Be(I,E){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",_));const Z=E.source;let $=d.get(Z);$===void 0&&($={},d.set(Z,$));const K=z(E);if(K!==I.__cacheKey){$[K]===void 0&&($[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),$[K].usedTimes++;const Ce=$[I.__cacheKey];Ce!==void 0&&($[I.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(E)),I.__cacheKey=K,I.__webglTexture=$[K].texture}return W}function ze(I,E,W){return Math.floor(Math.floor(I/W)/E)}function Pe(I,E,W,Z){const K=I.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,W,Z,E.data);else{K.sort((se,fe)=>se.start-fe.start);let Ce=0;for(let se=1;se<K.length;se++){const fe=K[Ce],Ue=K[se],be=fe.start+fe.count,ue=ze(Ue.start,E.width,4),He=ze(fe.start,E.width,4);Ue.start<=be+1&&ue===He&&ze(Ue.start+Ue.count-1,E.width,4)===ue?fe.count=Math.max(fe.count,Ue.start+Ue.count-fe.start):(++Ce,K[Ce]=Ue)}K.length=Ce+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let se=0,fe=K.length;se<fe;se++){const Ue=K[se],be=Math.floor(Ue.start/4),ue=Math.ceil(Ue.count/4),He=be%E.width,O=Math.floor(be/E.width),re=ue,ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,He,O,re,ce,W,Z,E.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function q(I,E,W){let Z=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=n.TEXTURE_3D);const $=Be(I,E),K=E.source;t.bindTexture(Z,I.__webglTexture,n.TEXTURE0+W);const Ce=i.get(K);if(K.version!==Ce.__version||$===!0){t.activeTexture(n.TEXTURE0+W);const ae=$e.getPrimaries($e.workingColorSpace),Ee=E.colorSpace===on?null:$e.getPrimaries(E.colorSpace),Te=E.colorSpace===on||ae===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let se=v(E.image,!1,s.maxTextureSize);se=ut(E,se);const fe=r.convert(E.format,E.colorSpace),Ue=r.convert(E.type);let be=x(E.internalFormat,fe,Ue,E.colorSpace,E.isVideoTexture);we(Z,E);let ue;const He=E.mipmaps,O=E.isVideoTexture!==!0,re=Ce.__version===void 0||$===!0,ce=K.dataReady,ye=w(E,se);if(E.isDepthTexture)be=y(E.format===ps,E.type),re&&(O?t.texStorage2D(n.TEXTURE_2D,1,be,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,be,se.width,se.height,0,fe,Ue,null));else if(E.isDataTexture)if(He.length>0){O&&re&&t.texStorage2D(n.TEXTURE_2D,ye,be,He[0].width,He[0].height);for(let ne=0,J=He.length;ne<J;ne++)ue=He[ne],O?ce&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,fe,Ue,ue.data):t.texImage2D(n.TEXTURE_2D,ne,be,ue.width,ue.height,0,fe,Ue,ue.data);E.generateMipmaps=!1}else O?(re&&t.texStorage2D(n.TEXTURE_2D,ye,be,se.width,se.height),ce&&Pe(E,se,fe,Ue)):t.texImage2D(n.TEXTURE_2D,0,be,se.width,se.height,0,fe,Ue,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){O&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,be,He[0].width,He[0].height,se.depth);for(let ne=0,J=He.length;ne<J;ne++)if(ue=He[ne],E.format!==Ft)if(fe!==null)if(O){if(ce)if(E.layerUpdates.size>0){const _e=mc(ue.width,ue.height,E.format,E.type);for(const Ge of E.layerUpdates){const gt=ue.data.subarray(Ge*_e/ue.data.BYTES_PER_ELEMENT,(Ge+1)*_e/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Ge,ue.width,ue.height,1,fe,gt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,se.depth,fe,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,be,ue.width,ue.height,se.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,se.depth,fe,Ue,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,be,ue.width,ue.height,se.depth,0,fe,Ue,ue.data)}else{O&&re&&t.texStorage2D(n.TEXTURE_2D,ye,be,He[0].width,He[0].height);for(let ne=0,J=He.length;ne<J;ne++)ue=He[ne],E.format!==Ft?fe!==null?O?ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,be,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ce&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,fe,Ue,ue.data):t.texImage2D(n.TEXTURE_2D,ne,be,ue.width,ue.height,0,fe,Ue,ue.data)}else if(E.isDataArrayTexture)if(O){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,be,se.width,se.height,se.depth),ce)if(E.layerUpdates.size>0){const ne=mc(se.width,se.height,E.format,E.type);for(const J of E.layerUpdates){const _e=se.data.subarray(J*ne/se.data.BYTES_PER_ELEMENT,(J+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,fe,Ue,_e)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,Ue,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,se.width,se.height,se.depth,0,fe,Ue,se.data);else if(E.isData3DTexture)O?(re&&t.texStorage3D(n.TEXTURE_3D,ye,be,se.width,se.height,se.depth),ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,Ue,se.data)):t.texImage3D(n.TEXTURE_3D,0,be,se.width,se.height,se.depth,0,fe,Ue,se.data);else if(E.isFramebufferTexture){if(re)if(O)t.texStorage2D(n.TEXTURE_2D,ye,be,se.width,se.height);else{let ne=se.width,J=se.height;for(let _e=0;_e<ye;_e++)t.texImage2D(n.TEXTURE_2D,_e,be,ne,J,0,fe,Ue,null),ne>>=1,J>>=1}}else if(He.length>0){if(O&&re){const ne=Qe(He[0]);t.texStorage2D(n.TEXTURE_2D,ye,be,ne.width,ne.height)}for(let ne=0,J=He.length;ne<J;ne++)ue=He[ne],O?ce&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe,Ue,ue):t.texImage2D(n.TEXTURE_2D,ne,be,fe,Ue,ue);E.generateMipmaps=!1}else if(O){if(re){const ne=Qe(se);t.texStorage2D(n.TEXTURE_2D,ye,be,ne.width,ne.height)}ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Ue,se)}else t.texImage2D(n.TEXTURE_2D,0,be,fe,Ue,se);m(E)&&p(Z),Ce.__version=K.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function j(I,E,W){if(E.image.length!==6)return;const Z=Be(I,E),$=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+W);const K=i.get($);if($.version!==K.__version||Z===!0){t.activeTexture(n.TEXTURE0+W);const Ce=$e.getPrimaries($e.workingColorSpace),ae=E.colorSpace===on?null:$e.getPrimaries(E.colorSpace),Ee=E.colorSpace===on||Ce===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Te=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let J=0;J<6;J++)!Te&&!se?fe[J]=v(E.image[J],!0,s.maxCubemapSize):fe[J]=se?E.image[J].image:E.image[J],fe[J]=ut(E,fe[J]);const Ue=fe[0],be=r.convert(E.format,E.colorSpace),ue=r.convert(E.type),He=x(E.internalFormat,be,ue,E.colorSpace),O=E.isVideoTexture!==!0,re=K.__version===void 0||Z===!0,ce=$.dataReady;let ye=w(E,Ue);we(n.TEXTURE_CUBE_MAP,E);let ne;if(Te){O&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,He,Ue.width,Ue.height);for(let J=0;J<6;J++){ne=fe[J].mipmaps;for(let _e=0;_e<ne.length;_e++){const Ge=ne[_e];E.format!==Ft?be!==null?O?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,Ge.width,Ge.height,be,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,He,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,Ge.width,Ge.height,be,ue,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,He,Ge.width,Ge.height,0,be,ue,Ge.data)}}}else{if(ne=E.mipmaps,O&&re){ne.length>0&&ye++;const J=Qe(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,He,J.width,J.height)}for(let J=0;J<6;J++)if(se){O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,fe[J].width,fe[J].height,be,ue,fe[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,fe[J].width,fe[J].height,0,be,ue,fe[J].data);for(let _e=0;_e<ne.length;_e++){const gt=ne[_e].image[J].image;O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,gt.width,gt.height,be,ue,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,He,gt.width,gt.height,0,be,ue,gt.data)}}else{O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,be,ue,fe[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,be,ue,fe[J]);for(let _e=0;_e<ne.length;_e++){const Ge=ne[_e];O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,be,ue,Ge.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,He,be,ue,Ge.image[J])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),K.__version=$.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function te(I,E,W,Z,$,K){const Ce=r.convert(W.format,W.colorSpace),ae=r.convert(W.type),Ee=x(W.internalFormat,Ce,ae,W.colorSpace),Te=i.get(E),se=i.get(W);if(se.__renderTarget=E,!Te.__hasExternalTextures){const fe=Math.max(1,E.width>>K),Ue=Math.max(1,E.height>>K);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,K,Ee,fe,Ue,E.depth,0,Ce,ae,null):t.texImage2D($,K,Ee,fe,Ue,0,Ce,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Me(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,$,se.__webglTexture,0,ot(E)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,$,se.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(I,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){const Z=E.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,K=y(E.stencilBuffer,$),Ce=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=ot(E);Me(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,K,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,K,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,K,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,I)}else{const Z=E.textures;for(let $=0;$<Z.length;$++){const K=Z[$],Ce=r.convert(K.format,K.colorSpace),ae=r.convert(K.type),Ee=x(K.internalFormat,Ce,ae,K.colorSpace),Te=ot(E);W&&Me(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Ee,E.width,E.height):Me(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,Ee,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const $=Z.__webglTexture,K=ot(E);if(E.depthTexture.format===Xs)Me(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(E.depthTexture.format===ps)Me(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ne(I){const E=i.get(I),W=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const $=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),E.__depthDisposeCallback=$}E.__boundDepthTexture=Z}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const Z=I.texture.mipmaps;Z&&Z.length>0?ge(E.__webglFramebuffer[0],I):ge(E.__webglFramebuffer,I)}else if(W){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ae(E.__webglDepthbuffer[Z],I,!1);else{const $=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,K)}}else{const Z=I.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ae(E.__webglDepthbuffer,I,!1);else{const $=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(I,E,W){const Z=i.get(I);E!==void 0&&te(Z.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Ne(I)}function U(I){const E=I.texture,W=i.get(I),Z=i.get(E);I.addEventListener("dispose",T);const $=I.textures,K=I.isWebGLCubeRenderTarget===!0,Ce=$.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=E.version,a.memory.textures++),K){W.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ae]=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)W.__webglFramebuffer[ae][Ee]=n.createFramebuffer()}else W.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)W.__webglFramebuffer[ae]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ae=0,Ee=$.length;ae<Ee;ae++){const Te=i.get($[ae]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&Me(I)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ae=0;ae<$.length;ae++){const Ee=$[ae];W.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ae]);const Te=r.convert(Ee.format,Ee.colorSpace),se=r.convert(Ee.type),fe=x(Ee.internalFormat,Te,se,Ee.colorSpace,I.isXRRenderTarget===!0),Ue=ot(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,fe,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,W.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),we(n.TEXTURE_CUBE_MAP,E);for(let ae=0;ae<6;ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)te(W.__webglFramebuffer[ae][Ee],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee);else te(W.__webglFramebuffer[ae],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(E)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ae=0,Ee=$.length;ae<Ee;ae++){const Te=$[ae],se=i.get(Te);let fe=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),we(fe,Te),te(W.__webglFramebuffer,I,Te,n.COLOR_ATTACHMENT0+ae,fe,0),m(Te)&&p(fe)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ae=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),we(ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)te(W.__webglFramebuffer[Ee],I,E,n.COLOR_ATTACHMENT0,ae,Ee);else te(W.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,ae,0);m(E)&&p(ae),t.unbindTexture()}I.depthBuffer&&Ne(I)}function ht(I){const E=I.textures;for(let W=0,Z=E.length;W<Z;W++){const $=E[W];if(m($)){const K=S(I),Ce=i.get($).__webglTexture;t.bindTexture(K,Ce),p(K),t.unbindTexture()}}}const Oe=[],Re=[];function xe(I){if(I.samples>0){if(Me(I)===!1){const E=I.textures,W=I.width,Z=I.height;let $=n.COLOR_BUFFER_BIT;const K=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(I),ae=E.length>1;if(ae)for(let Te=0;Te<E.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Ee=I.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){if(I.resolveDepthBuffer&&(I.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const se=i.get(E[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,W,Z,0,0,W,Z,$,n.NEAREST),l===!0&&(Oe.length=0,Re.length=0,Oe.push(n.COLOR_ATTACHMENT0+Te),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Oe.push(K),Re.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Te=0;Te<E.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const se=i.get(E[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ot(I){return Math.min(s.maxSamples,I.samples)}function Me(I){const E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ke(I){const E=a.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function ut(I,E){const W=I.colorSpace,Z=I.format,$=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==ui&&W!==on&&($e.getTransfer(W)===ct?(Z!==Ft||$!==yt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=L,this.setTexture3D=B,this.setTextureCube=N,this.rebindTextures=Tt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Me}function Z0(n,e){function t(i,s=on){let r;const a=$e.getTransfer(s);if(i===yt)return n.UNSIGNED_BYTE;if(i===ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lh)return n.BYTE;if(i===Bh)return n.SHORT;if(i===Ws)return n.UNSIGNED_SHORT;if(i===ol)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===tn)return n.FLOAT;if(i===Sn)return n.HALF_FLOAT;if(i===Fh)return n.ALPHA;if(i===zh)return n.RGB;if(i===Ft)return n.RGBA;if(i===Xs)return n.DEPTH_COMPONENT;if(i===ps)return n.DEPTH_STENCIL;if(i===hi)return n.RED;if(i===hl)return n.RED_INTEGER;if(i===ul)return n.RG;if(i===dl)return n.RG_INTEGER;if(i===fl)return n.RGBA_INTEGER;if(i===Hr||i===Vr||i===Wr||i===Xr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mo||i===yo||i===Ao||i===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_o||i===wo||i===Eo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_o||i===wo)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Eo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===To||i===bo||i===Co||i===Do||i===Ro||i===Io||i===Po||i===Lo||i===Bo||i===Uo||i===No||i===Fo||i===zo||i===Oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===To)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Co)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Do)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ro)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Io)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Po)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===No)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ko||i===Go||i===Ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ko)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vo||i===Wo||i===Xo||i===Yo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Vo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const j0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J0=`
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

}`;class $0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new jh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rt({vertexShader:j0,fragmentShader:J0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ev extends Yn{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null;const v=typeof XRWebGLBinding<"u",m=new $0,p={},S=t.getContextAttributes();let x=null,y=null;const w=[],_=[],T=new me;let b=null;const M=new Kt;M.viewport=new mt;const A=new Kt;A.viewport=new mt;const C=[M,A],P=new Af;let F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=w[q];return j===void 0&&(j=new Oa,w[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=w[q];return j===void 0&&(j=new Oa,w[q]=j),j.getGripSpace()},this.getHand=function(q){let j=w[q];return j===void 0&&(j=new Oa,w[q]=j),j.getHandSpace()};function G(q){const j=_.indexOf(q.inputSource);if(j===-1)return;const te=w[j];te!==void 0&&(te.update(q.inputSource,q.frame,c||a),te.dispatchEvent({type:q.type,data:q.inputSource}))}function L(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",B);for(let q=0;q<w.length;q++){const j=_[q];j!==null&&(_[q]=null,w[q].disconnect(j))}F=null,z=null,m.reset();for(const q in p)delete p[q];e.setRenderTarget(x),u=null,d=null,f=null,s=null,y=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",L),s.addEventListener("inputsourceschange",B),S.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Ae=null,ge=null;S.depth&&(ge=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=S.stencil?ps:Xs,Ae=S.stencil?fs:Ri);const Ne={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new at(d.textureWidth,d.textureHeight,{format:Ft,type:yt,depthTexture:new oa(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new at(u.framebufferWidth,u.framebufferHeight,{format:Ft,type:yt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Pe.setContext(s),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(q){for(let j=0;j<q.removed.length;j++){const te=q.removed[j],Ae=_.indexOf(te);Ae>=0&&(_[Ae]=null,w[Ae].disconnect(te))}for(let j=0;j<q.added.length;j++){const te=q.added[j];let Ae=_.indexOf(te);if(Ae===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=_.length){_.push(te),Ae=Ne;break}else if(_[Ne]===null){_[Ne]=te,Ae=Ne;break}if(Ae===-1)break}const ge=w[Ae];ge&&ge.connect(te)}}const N=new k,Y=new k;function ee(q,j,te){N.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(te.matrixWorld);const Ae=N.distanceTo(Y),ge=j.projectionMatrix.elements,Ne=te.projectionMatrix.elements,Tt=ge[14]/(ge[10]-1),U=ge[14]/(ge[10]+1),ht=(ge[9]+1)/ge[5],Oe=(ge[9]-1)/ge[5],Re=(ge[8]-1)/ge[0],xe=(Ne[8]+1)/Ne[0],ot=Tt*Re,Me=Tt*xe,ke=Ae/(-Re+xe),ut=ke*-Re;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ut),q.translateZ(ke),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ge[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Qe=Tt+ke,I=U+ke,E=ot-ut,W=Me+(Ae-ut),Z=ht*U/I*Qe,$=Oe*U/I*Qe;q.projectionMatrix.makePerspective(E,W,Z,$,Qe,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function le(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,te=q.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(te=m.depthFar)),P.near=A.near=M.near=j,P.far=A.far=M.far=te,(F!==P.near||z!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,z=P.far),P.layers.mask=q.layers.mask|6,M.layers.mask=P.layers.mask&3,A.layers.mask=P.layers.mask&5;const Ae=q.parent,ge=P.cameras;le(P,Ae);for(let Ne=0;Ne<ge.length;Ne++)le(ge[Ne],Ae);ge.length===2?ee(P,M,A):P.projectionMatrix.copy(M.projectionMatrix),we(q,P,Ae)};function we(q,j,te){te===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(te.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Qo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(q){return p[q]};let Be=null;function ze(q,j){if(h=j.getViewerPose(c||a),g=j,h!==null){const te=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Ae=!1;te.length!==P.cameras.length&&(P.cameras.length=0,Ae=!0);for(let U=0;U<te.length;U++){const ht=te[U];let Oe=null;if(u!==null)Oe=u.getViewport(ht);else{const xe=f.getViewSubImage(d,ht);Oe=xe.viewport,U===0&&(e.setRenderTargetTextures(y,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(y))}let Re=C[U];Re===void 0&&(Re=new Kt,Re.layers.enable(U),Re.viewport=new mt,C[U]=Re),Re.matrix.fromArray(ht.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ht.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),U===0&&(P.matrix.copy(Re.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ae===!0&&P.cameras.push(Re)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const U=f.getDepthInformation(te[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let U=0;U<te.length;U++){const ht=te[U].camera;if(ht){let Oe=p[ht];Oe||(Oe=new jh,p[ht]=Oe);const Re=f.getCameraImage(ht);Oe.sourceTexture=Re}}}}for(let te=0;te<w.length;te++){const Ae=_[te],ge=w[te];Ae!==null&&ge!==void 0&&ge.update(Ae,j,c||a)}Be&&Be(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const Pe=new eu;Pe.setAnimationLoop(ze),this.setAnimationLoop=function(q){Be=q},this.dispose=function(){}}}const Ai=new Pn,tv=new Ke;function nv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,qh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),x=S.envMap,y=S.envMapRotation;x&&(m.envMap.value=x,Ai.copy(y),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(tv.makeRotationFromEuler(Ai)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iv(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const y=x.program;i.uniformBlockBinding(S,y)}function c(S,x){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(S,w);const _=e.render.frame;r[S.id]!==_&&(d(S),r[S.id]=_)}function h(S){const x=f();S.__bindingPointIndex=x;const y=n.createBuffer(),w=S.__size,_=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=s[S.id],y=S.uniforms,w=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let _=0,T=y.length;_<T;_++){const b=Array.isArray(y[_])?y[_]:[y[_]];for(let M=0,A=b.length;M<A;M++){const C=b[M];if(u(C,_,M,w)===!0){const P=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let G=0;G<F.length;G++){const L=F[G],B=v(L);typeof L=="number"||typeof L=="boolean"?(C.__data[0]=L,n.bufferSubData(n.UNIFORM_BUFFER,P+z,C.__data)):L.isMatrix3?(C.__data[0]=L.elements[0],C.__data[1]=L.elements[1],C.__data[2]=L.elements[2],C.__data[3]=0,C.__data[4]=L.elements[3],C.__data[5]=L.elements[4],C.__data[6]=L.elements[5],C.__data[7]=0,C.__data[8]=L.elements[6],C.__data[9]=L.elements[7],C.__data[10]=L.elements[8],C.__data[11]=0):(L.toArray(C.__data,z),z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(S,x,y,w){const _=S.value,T=x+"_"+y;if(w[T]===void 0)return typeof _=="number"||typeof _=="boolean"?w[T]=_:w[T]=_.clone(),!0;{const b=w[T];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return w[T]=_,!0}else if(b.equals(_)===!1)return b.copy(_),!0}return!1}function g(S){const x=S.uniforms;let y=0;const w=16;for(let T=0,b=x.length;T<b;T++){const M=Array.isArray(x[T])?x[T]:[x[T]];for(let A=0,C=M.length;A<C;A++){const P=M[A],F=Array.isArray(P.value)?P.value:[P.value];for(let z=0,G=F.length;z<G;z++){const L=F[z],B=v(L),N=y%w,Y=N%B.boundary,ee=N+Y;y+=Y,ee!==0&&w-ee<B.storage&&(y+=w-ee),P.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=B.storage}}}const _=y%w;return _>0&&(y+=w-_),S.__size=y,S.__cache={},this}function v(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class sv{constructor(e={}){const{canvas:t=Ld(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let w=!1;this._outputColorSpace=st;let _=0,T=0,b=null,M=-1,A=null;const C=new mt,P=new mt;let F=null;const z=new Ye(0);let G=0,L=t.width,B=t.height,N=1,Y=null,ee=null;const le=new mt(0,0,L,B),we=new mt(0,0,L,B);let Be=!1;const ze=new js;let Pe=!1,q=!1;const j=new Ke,te=new k,Ae=new mt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Tt(){return b===null?N:1}let U=i;function ht(D,H){return t.getContext(D,H)}try{const D={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ui}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ne,!1),U===null){const H="webgl2";if(U=ht(H,D),U===null)throw ht(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Oe,Re,xe,ot,Me,ke,ut,Qe,I,E,W,Z,$,K,Ce,ae,Ee,Te,se,fe,Ue,be,ue,He;function O(){Oe=new pg(U),Oe.init(),be=new Z0(U,Oe),Re=new og(U,Oe,e,be),xe=new q0(U,Oe),Re.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),ot=new vg(U),Me=new U0,ke=new K0(U,Oe,xe,Me,Re,be,ot),ut=new cg(y),Qe=new fg(y),I=new _f(U),ue=new rg(U,I),E=new mg(U,I,ot,ue),W=new Mg(U,E,I,ot),se=new xg(U,Re,ke),ae=new lg(Me),Z=new B0(y,ut,Qe,Oe,Re,ue,ae),$=new nv(y,Me),K=new F0,Ce=new V0(Oe),Te=new sg(y,ut,Qe,xe,W,u,l),Ee=new Y0(y,W,Re),He=new iv(U,ot,Re,xe),fe=new ag(U,Oe,ot),Ue=new gg(U,Oe,ot),ot.programs=Z.programs,y.capabilities=Re,y.extensions=Oe,y.properties=Me,y.renderLists=K,y.shadowMap=Ee,y.state=xe,y.info=ot}O();const re=new ev(y,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const D=Oe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Oe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(D){D!==void 0&&(N=D,this.setSize(L,B,!1))},this.getSize=function(D){return D.set(L,B)},this.setSize=function(D,H,X=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=D,B=H,t.width=Math.floor(D*N),t.height=Math.floor(H*N),X===!0&&(t.style.width=D+"px",t.style.height=H+"px"),this.setViewport(0,0,D,H)},this.getDrawingBufferSize=function(D){return D.set(L*N,B*N).floor()},this.setDrawingBufferSize=function(D,H,X){L=D,B=H,N=X,t.width=Math.floor(D*X),t.height=Math.floor(H*X),this.setViewport(0,0,D,H)},this.getCurrentViewport=function(D){return D.copy(C)},this.getViewport=function(D){return D.copy(le)},this.setViewport=function(D,H,X,Q){D.isVector4?le.set(D.x,D.y,D.z,D.w):le.set(D,H,X,Q),xe.viewport(C.copy(le).multiplyScalar(N).round())},this.getScissor=function(D){return D.copy(we)},this.setScissor=function(D,H,X,Q){D.isVector4?we.set(D.x,D.y,D.z,D.w):we.set(D,H,X,Q),xe.scissor(P.copy(we).multiplyScalar(N).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(D){xe.setScissorTest(Be=D)},this.setOpaqueSort=function(D){Y=D},this.setTransparentSort=function(D){ee=D},this.getClearColor=function(D){return D.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(D=!0,H=!0,X=!0){let Q=0;if(D){let V=!1;if(b!==null){const ie=b.texture.format;V=ie===fl||ie===dl||ie===hl}if(V){const ie=b.texture.type,de=ie===yt||ie===Ri||ie===Ws||ie===fs||ie===ll||ie===cl,Se=Te.getClearColor(),ve=Te.getClearAlpha(),Le=Se.r,Fe=Se.g,De=Se.b;de?(g[0]=Le,g[1]=Fe,g[2]=De,g[3]=ve,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Le,v[1]=Fe,v[2]=De,v[3]=ve,U.clearBufferiv(U.COLOR,0,v))}else Q|=U.COLOR_BUFFER_BIT}H&&(Q|=U.DEPTH_BUFFER_BIT),X&&(Q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Te.dispose(),K.dispose(),Ce.dispose(),Me.dispose(),ut.dispose(),Qe.dispose(),W.dispose(),ue.dispose(),He.dispose(),Z.dispose(),re.dispose(),re.removeEventListener("sessionstart",wn),re.removeEventListener("sessionend",Bl),pi.stop()};function ce(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const D=ot.autoReset,H=Ee.enabled,X=Ee.autoUpdate,Q=Ee.needsUpdate,V=Ee.type;O(),ot.autoReset=D,Ee.enabled=H,Ee.autoUpdate=X,Ee.needsUpdate=Q,Ee.type=V}function ne(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function J(D){const H=D.target;H.removeEventListener("dispose",J),_e(H)}function _e(D){Ge(D),Me.remove(D)}function Ge(D){const H=Me.get(D).programs;H!==void 0&&(H.forEach(function(X){Z.releaseProgram(X)}),D.isShaderMaterial&&Z.releaseShaderCache(D))}this.renderBufferDirect=function(D,H,X,Q,V,ie){H===null&&(H=ge);const de=V.isMesh&&V.matrixWorld.determinant()<0,Se=Hu(D,H,X,Q,V);xe.setMaterial(Q,de);let ve=X.index,Le=1;if(Q.wireframe===!0){if(ve=E.getWireframeAttribute(X),ve===void 0)return;Le=2}const Fe=X.drawRange,De=X.attributes.position;let qe=Fe.start*Le,lt=(Fe.start+Fe.count)*Le;ie!==null&&(qe=Math.max(qe,ie.start*Le),lt=Math.min(lt,(ie.start+ie.count)*Le)),ve!==null?(qe=Math.max(qe,0),lt=Math.min(lt,ve.count)):De!=null&&(qe=Math.max(qe,0),lt=Math.min(lt,De.count));const wt=lt-qe;if(wt<0||wt===1/0)return;ue.setup(V,Q,Se,X,ve);let xt,dt=fe;if(ve!==null&&(xt=I.get(ve),dt=Ue,dt.setIndex(xt)),V.isMesh)Q.wireframe===!0?(xe.setLineWidth(Q.wireframeLinewidth*Tt()),dt.setMode(U.LINES)):dt.setMode(U.TRIANGLES);else if(V.isLine){let Ie=Q.linewidth;Ie===void 0&&(Ie=1),xe.setLineWidth(Ie*Tt()),V.isLineSegments?dt.setMode(U.LINES):V.isLineLoop?dt.setMode(U.LINE_LOOP):dt.setMode(U.LINE_STRIP)}else V.isPoints?dt.setMode(U.POINTS):V.isSprite&&dt.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ie=V._multiDrawStarts,At=V._multiDrawCounts,Je=V._multiDrawCount,nn=ve?I.get(ve).bytesPerElement:1,zi=Me.get(Q).currentProgram.getUniforms();for(let sn=0;sn<Je;sn++)zi.setValue(U,"_gl_DrawID",sn),dt.render(Ie[sn]/nn,At[sn])}else if(V.isInstancedMesh)dt.renderInstances(qe,wt,V.count);else if(X.isInstancedBufferGeometry){const Ie=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,At=Math.min(X.instanceCount,Ie);dt.renderInstances(qe,wt,At)}else dt.render(qe,wt)};function gt(D,H,X){D.transparent===!0&&D.side===Gt&&D.forceSinglePass===!1?(D.side=Rt,D.needsUpdate=!0,er(D,H,X),D.side=In,D.needsUpdate=!0,er(D,H,X),D.side=Gt):er(D,H,X)}this.compile=function(D,H,X=null){X===null&&(X=D),p=Ce.get(X),p.init(H),x.push(p),X.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),D!==X&&D.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Q=new Set;return D.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ie=V.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const Se=ie[de];gt(Se,X,V),Q.add(Se)}else gt(ie,X,V),Q.add(ie)}),p=x.pop(),Q},this.compileAsync=function(D,H,X=null){const Q=this.compile(D,H,X);return new Promise(V=>{function ie(){if(Q.forEach(function(de){Me.get(de).currentProgram.isReady()&&Q.delete(de)}),Q.size===0){V(D);return}setTimeout(ie,10)}Oe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let it=null;function Bn(D){it&&it(D)}function wn(){pi.stop()}function Bl(){pi.start()}const pi=new eu;pi.setAnimationLoop(Bn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(D){it=D,re.setAnimationLoop(D),D===null?pi.stop():pi.start()},re.addEventListener("sessionstart",wn),re.addEventListener("sessionend",Bl),this.render=function(D,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(H),H=re.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,H,b),p=Ce.get(D,x.length),p.init(H),x.push(p),j.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ze.setFromProjectionMatrix(j,Dn,H.reversedDepth),q=this.localClippingEnabled,Pe=ae.init(this.clippingPlanes,q),m=K.get(D,S.length),m.init(),S.push(m),re.enabled===!0&&re.isPresenting===!0){const ie=y.xr.getDepthSensingMesh();ie!==null&&pa(ie,H,-1/0,y.sortObjects)}pa(D,H,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Y,ee),Ne=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ne&&Te.addToRenderList(m,D),this.info.render.frame++,Pe===!0&&ae.beginShadows();const X=p.state.shadowsArray;Ee.render(X,D,H),Pe===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const ie=H.cameras;if(V.length>0)for(let de=0,Se=ie.length;de<Se;de++){const ve=ie[de];Nl(Q,V,D,ve)}Ne&&Te.render(D);for(let de=0,Se=ie.length;de<Se;de++){const ve=ie[de];Ul(m,D,ve,ve.viewport)}}else V.length>0&&Nl(Q,V,D,H),Ne&&Te.render(D),Ul(m,D,H);b!==null&&T===0&&(ke.updateMultisampleRenderTarget(b),ke.updateRenderTargetMipmap(b)),D.isScene===!0&&D.onAfterRender(y,D,H),ue.resetDefaultState(),M=-1,A=null,x.pop(),x.length>0?(p=x[x.length-1],Pe===!0&&ae.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function pa(D,H,X,Q){if(D.visible===!1)return;if(D.layers.test(H.layers)){if(D.isGroup)X=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(H);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ze.intersectsSprite(D)){Q&&Ae.setFromMatrixPosition(D.matrixWorld).applyMatrix4(j);const de=W.update(D),Se=D.material;Se.visible&&m.push(D,de,Se,X,Ae.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ze.intersectsObject(D))){const de=W.update(D),Se=D.material;if(Q&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ae.copy(D.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ae.copy(de.boundingSphere.center)),Ae.applyMatrix4(D.matrixWorld).applyMatrix4(j)),Array.isArray(Se)){const ve=de.groups;for(let Le=0,Fe=ve.length;Le<Fe;Le++){const De=ve[Le],qe=Se[De.materialIndex];qe&&qe.visible&&m.push(D,de,qe,X,Ae.z,De)}}else Se.visible&&m.push(D,de,Se,X,Ae.z,null)}}const ie=D.children;for(let de=0,Se=ie.length;de<Se;de++)pa(ie[de],H,X,Q)}function Ul(D,H,X,Q){const V=D.opaque,ie=D.transmissive,de=D.transparent;p.setupLightsView(X),Pe===!0&&ae.setGlobalState(y.clippingPlanes,X),Q&&xe.viewport(C.copy(Q)),V.length>0&&$s(V,H,X),ie.length>0&&$s(ie,H,X),de.length>0&&$s(de,H,X),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Nl(D,H,X,Q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new at(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Sn:yt,minFilter:Cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ie=p.state.transmissionRenderTarget[Q.id],de=Q.viewport||C;ie.setSize(de.z*y.transmissionResolutionScale,de.w*y.transmissionResolutionScale);const Se=y.getRenderTarget(),ve=y.getActiveCubeFace(),Le=y.getActiveMipmapLevel();y.setRenderTarget(ie),y.getClearColor(z),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),Ne&&Te.render(X);const Fe=y.toneMapping;y.toneMapping=Vn;const De=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),Pe===!0&&ae.setGlobalState(y.clippingPlanes,Q),$s(D,X,Q),ke.updateMultisampleRenderTarget(ie),ke.updateRenderTargetMipmap(ie),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let lt=0,wt=H.length;lt<wt;lt++){const xt=H[lt],dt=xt.object,Ie=xt.geometry,At=xt.material,Je=xt.group;if(At.side===Gt&&dt.layers.test(Q.layers)){const nn=At.side;At.side=Rt,At.needsUpdate=!0,Fl(dt,X,Q,Ie,At,Je),At.side=nn,At.needsUpdate=!0,qe=!0}}qe===!0&&(ke.updateMultisampleRenderTarget(ie),ke.updateRenderTargetMipmap(ie))}y.setRenderTarget(Se,ve,Le),y.setClearColor(z,G),De!==void 0&&(Q.viewport=De),y.toneMapping=Fe}function $s(D,H,X){const Q=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ie=D.length;V<ie;V++){const de=D[V],Se=de.object,ve=de.geometry,Le=de.group;let Fe=de.material;Fe.allowOverride===!0&&Q!==null&&(Fe=Q),Se.layers.test(X.layers)&&Fl(Se,H,X,ve,Fe,Le)}}function Fl(D,H,X,Q,V,ie){D.onBeforeRender(y,H,X,Q,V,ie),D.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),V.onBeforeRender(y,H,X,Q,D,ie),V.transparent===!0&&V.side===Gt&&V.forceSinglePass===!1?(V.side=Rt,V.needsUpdate=!0,y.renderBufferDirect(X,H,Q,V,D,ie),V.side=In,V.needsUpdate=!0,y.renderBufferDirect(X,H,Q,V,D,ie),V.side=Gt):y.renderBufferDirect(X,H,Q,V,D,ie),D.onAfterRender(y,H,X,Q,V,ie)}function er(D,H,X){H.isScene!==!0&&(H=ge);const Q=Me.get(D),V=p.state.lights,ie=p.state.shadowsArray,de=V.state.version,Se=Z.getParameters(D,V.state,ie,H,X),ve=Z.getProgramCacheKey(Se);let Le=Q.programs;Q.environment=D.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(D.isMeshStandardMaterial?Qe:ut).get(D.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&D.envMap===null?H.environmentRotation:D.envMapRotation,Le===void 0&&(D.addEventListener("dispose",J),Le=new Map,Q.programs=Le);let Fe=Le.get(ve);if(Fe!==void 0){if(Q.currentProgram===Fe&&Q.lightsStateVersion===de)return Ol(D,Se),Fe}else Se.uniforms=Z.getUniforms(D),D.onBeforeCompile(Se,y),Fe=Z.acquireProgram(Se,ve),Le.set(ve,Fe),Q.uniforms=Se.uniforms;const De=Q.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(De.clippingPlanes=ae.uniform),Ol(D,Se),Q.needsLights=Wu(D),Q.lightsStateVersion=de,Q.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMap.value=V.state.directionalShadowMap,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotShadowMap.value=V.state.spotShadowMap,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMap.value=V.state.pointShadowMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),Q.currentProgram=Fe,Q.uniformsList=null,Fe}function zl(D){if(D.uniformsList===null){const H=D.currentProgram.getUniforms();D.uniformsList=Yr.seqWithValue(H.seq,D.uniforms)}return D.uniformsList}function Ol(D,H){const X=Me.get(D);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.batchingColor=H.batchingColor,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function Hu(D,H,X,Q,V){H.isScene!==!0&&(H=ge),ke.resetTextureUnits();const ie=H.fog,de=Q.isMeshStandardMaterial?H.environment:null,Se=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ui,ve=(Q.isMeshStandardMaterial?Qe:ut).get(Q.envMap||de),Le=Q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!X.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),De=!!X.morphAttributes.position,qe=!!X.morphAttributes.normal,lt=!!X.morphAttributes.color;let wt=Vn;Q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(wt=y.toneMapping);const xt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=xt!==void 0?xt.length:0,Ie=Me.get(Q),At=p.state.lights;if(Pe===!0&&(q===!0||D!==A)){const Yt=D===A&&Q.id===M;ae.setState(Q,D,Yt)}let Je=!1;Q.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==At.state.version||Ie.outputColorSpace!==Se||V.isBatchedMesh&&Ie.batching===!1||!V.isBatchedMesh&&Ie.batching===!0||V.isBatchedMesh&&Ie.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ie.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ie.instancing===!1||!V.isInstancedMesh&&Ie.instancing===!0||V.isSkinnedMesh&&Ie.skinning===!1||!V.isSkinnedMesh&&Ie.skinning===!0||V.isInstancedMesh&&Ie.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ie.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ie.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ie.instancingMorph===!1&&V.morphTexture!==null||Ie.envMap!==ve||Q.fog===!0&&Ie.fog!==ie||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ae.numPlanes||Ie.numIntersection!==ae.numIntersection)||Ie.vertexAlphas!==Le||Ie.vertexTangents!==Fe||Ie.morphTargets!==De||Ie.morphNormals!==qe||Ie.morphColors!==lt||Ie.toneMapping!==wt||Ie.morphTargetsCount!==dt)&&(Je=!0):(Je=!0,Ie.__version=Q.version);let nn=Ie.currentProgram;Je===!0&&(nn=er(Q,H,V));let zi=!1,sn=!1,Ss=!1;const St=nn.getUniforms(),cn=Ie.uniforms;if(xe.useProgram(nn.program)&&(zi=!0,sn=!0,Ss=!0),Q.id!==M&&(M=Q.id,sn=!0),zi||A!==D){xe.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),St.setValue(U,"projectionMatrix",D.projectionMatrix),St.setValue(U,"viewMatrix",D.matrixWorldInverse);const jt=St.map.cameraPosition;jt!==void 0&&jt.setValue(U,te.setFromMatrixPosition(D.matrixWorld)),Re.logarithmicDepthBuffer&&St.setValue(U,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&St.setValue(U,"isOrthographic",D.isOrthographicCamera===!0),A!==D&&(A=D,sn=!0,Ss=!0)}if(V.isSkinnedMesh){St.setOptional(U,V,"bindMatrix"),St.setOptional(U,V,"bindMatrixInverse");const Yt=V.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),St.setValue(U,"boneTexture",Yt.boneTexture,ke))}V.isBatchedMesh&&(St.setOptional(U,V,"batchingTexture"),St.setValue(U,"batchingTexture",V._matricesTexture,ke),St.setOptional(U,V,"batchingIdTexture"),St.setValue(U,"batchingIdTexture",V._indirectTexture,ke),St.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&St.setValue(U,"batchingColorTexture",V._colorsTexture,ke));const hn=X.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&se.update(V,X,nn),(sn||Ie.receiveShadow!==V.receiveShadow)&&(Ie.receiveShadow=V.receiveShadow,St.setValue(U,"receiveShadow",V.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(cn.envMap.value=ve,cn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&H.environment!==null&&(cn.envMapIntensity.value=H.environmentIntensity),sn&&(St.setValue(U,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&Vu(cn,Ss),ie&&Q.fog===!0&&$.refreshFogUniforms(cn,ie),$.refreshMaterialUniforms(cn,Q,N,B,p.state.transmissionRenderTarget[D.id]),Yr.upload(U,zl(Ie),cn,ke)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Yr.upload(U,zl(Ie),cn,ke),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&St.setValue(U,"center",V.center),St.setValue(U,"modelViewMatrix",V.modelViewMatrix),St.setValue(U,"normalMatrix",V.normalMatrix),St.setValue(U,"modelMatrix",V.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Yt=Q.uniformsGroups;for(let jt=0,ma=Yt.length;jt<ma;jt++){const mi=Yt[jt];He.update(mi,nn),He.bind(mi,nn)}}return nn}function Vu(D,H){D.ambientLightColor.needsUpdate=H,D.lightProbe.needsUpdate=H,D.directionalLights.needsUpdate=H,D.directionalLightShadows.needsUpdate=H,D.pointLights.needsUpdate=H,D.pointLightShadows.needsUpdate=H,D.spotLights.needsUpdate=H,D.spotLightShadows.needsUpdate=H,D.rectAreaLights.needsUpdate=H,D.hemisphereLights.needsUpdate=H}function Wu(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(D,H,X){const Q=Me.get(D);Q.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Me.get(D.texture).__webglTexture=H,Me.get(D.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:X,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,H){const X=Me.get(D);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0};const Xu=U.createFramebuffer();this.setRenderTarget=function(D,H=0,X=0){b=D,_=H,T=X;let Q=!0,V=null,ie=!1,de=!1;if(D){const ve=Me.get(D);if(ve.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(U.FRAMEBUFFER,null),Q=!1;else if(ve.__webglFramebuffer===void 0)ke.setupRenderTarget(D);else if(ve.__hasExternalTextures)ke.rebindTextures(D,Me.get(D.texture).__webglTexture,Me.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const De=D.depthTexture;if(ve.__boundDepthTexture!==De){if(De!==null&&Me.has(De)&&(D.width!==De.image.width||D.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(D)}}const Le=D.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(de=!0);const Fe=Me.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Fe[H])?V=Fe[H][X]:V=Fe[H],ie=!0):D.samples>0&&ke.useMultisampledRTT(D)===!1?V=Me.get(D).__webglMultisampledFramebuffer:Array.isArray(Fe)?V=Fe[X]:V=Fe,C.copy(D.viewport),P.copy(D.scissor),F=D.scissorTest}else C.copy(le).multiplyScalar(N).floor(),P.copy(we).multiplyScalar(N).floor(),F=Be;if(X!==0&&(V=Xu),xe.bindFramebuffer(U.FRAMEBUFFER,V)&&Q&&xe.drawBuffers(D,V),xe.viewport(C),xe.scissor(P),xe.setScissorTest(F),ie){const ve=Me.get(D.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,ve.__webglTexture,X)}else if(de){const ve=H;for(let Le=0;Le<D.textures.length;Le++){const Fe=Me.get(D.textures[Le]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Le,Fe.__webglTexture,X,ve)}}else if(D!==null&&X!==0){const ve=Me.get(D.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ve.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(D,H,X,Q,V,ie,de,Se=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Me.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){xe.bindFramebuffer(U.FRAMEBUFFER,ve);try{const Le=D.textures[Se],Fe=Le.format,De=Le.type;if(!Re.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=D.width-Q&&X>=0&&X<=D.height-V&&(D.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se),U.readPixels(H,X,Q,V,be.convert(Fe),be.convert(De),ie))}finally{const Le=b!==null?Me.get(b).__webglFramebuffer:null;xe.bindFramebuffer(U.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(D,H,X,Q,V,ie,de,Se=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Me.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve)if(H>=0&&H<=D.width-Q&&X>=0&&X<=D.height-V){xe.bindFramebuffer(U.FRAMEBUFFER,ve);const Le=D.textures[Se],Fe=Le.format,De=Le.type;if(!Re.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,qe),U.bufferData(U.PIXEL_PACK_BUFFER,ie.byteLength,U.STREAM_READ),D.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se),U.readPixels(H,X,Q,V,be.convert(Fe),be.convert(De),0);const lt=b!==null?Me.get(b).__webglFramebuffer:null;xe.bindFramebuffer(U.FRAMEBUFFER,lt);const wt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Bd(U,wt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,qe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ie),U.deleteBuffer(qe),U.deleteSync(wt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,H=null,X=0){const Q=Math.pow(2,-X),V=Math.floor(D.image.width*Q),ie=Math.floor(D.image.height*Q),de=H!==null?H.x:0,Se=H!==null?H.y:0;ke.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,de,Se,V,ie),xe.unbindTexture()};const Yu=U.createFramebuffer(),Qu=U.createFramebuffer();this.copyTextureToTexture=function(D,H,X=null,Q=null,V=0,ie=null){ie===null&&(V!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=V,V=0):ie=0);let de,Se,ve,Le,Fe,De,qe,lt,wt;const xt=D.isCompressedTexture?D.mipmaps[ie]:D.image;if(X!==null)de=X.max.x-X.min.x,Se=X.max.y-X.min.y,ve=X.isBox3?X.max.z-X.min.z:1,Le=X.min.x,Fe=X.min.y,De=X.isBox3?X.min.z:0;else{const hn=Math.pow(2,-V);de=Math.floor(xt.width*hn),Se=Math.floor(xt.height*hn),D.isDataArrayTexture?ve=xt.depth:D.isData3DTexture?ve=Math.floor(xt.depth*hn):ve=1,Le=0,Fe=0,De=0}Q!==null?(qe=Q.x,lt=Q.y,wt=Q.z):(qe=0,lt=0,wt=0);const dt=be.convert(H.format),Ie=be.convert(H.type);let At;H.isData3DTexture?(ke.setTexture3D(H,0),At=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ke.setTexture2DArray(H,0),At=U.TEXTURE_2D_ARRAY):(ke.setTexture2D(H,0),At=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const Je=U.getParameter(U.UNPACK_ROW_LENGTH),nn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),zi=U.getParameter(U.UNPACK_SKIP_PIXELS),sn=U.getParameter(U.UNPACK_SKIP_ROWS),Ss=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Le),U.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,De);const St=D.isDataArrayTexture||D.isData3DTexture,cn=H.isDataArrayTexture||H.isData3DTexture;if(D.isDepthTexture){const hn=Me.get(D),Yt=Me.get(H),jt=Me.get(hn.__renderTarget),ma=Me.get(Yt.__renderTarget);xe.bindFramebuffer(U.READ_FRAMEBUFFER,jt.__webglFramebuffer),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let mi=0;mi<ve;mi++)St&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.get(D).__webglTexture,V,De+mi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.get(H).__webglTexture,ie,wt+mi)),U.blitFramebuffer(Le,Fe,de,Se,qe,lt,de,Se,U.DEPTH_BUFFER_BIT,U.NEAREST);xe.bindFramebuffer(U.READ_FRAMEBUFFER,null),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||D.isRenderTargetTexture||Me.has(D)){const hn=Me.get(D),Yt=Me.get(H);xe.bindFramebuffer(U.READ_FRAMEBUFFER,Yu),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qu);for(let jt=0;jt<ve;jt++)St?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hn.__webglTexture,V,De+jt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hn.__webglTexture,V),cn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yt.__webglTexture,ie,wt+jt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Yt.__webglTexture,ie),V!==0?U.blitFramebuffer(Le,Fe,de,Se,qe,lt,de,Se,U.COLOR_BUFFER_BIT,U.NEAREST):cn?U.copyTexSubImage3D(At,ie,qe,lt,wt+jt,Le,Fe,de,Se):U.copyTexSubImage2D(At,ie,qe,lt,Le,Fe,de,Se);xe.bindFramebuffer(U.READ_FRAMEBUFFER,null),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else cn?D.isDataTexture||D.isData3DTexture?U.texSubImage3D(At,ie,qe,lt,wt,de,Se,ve,dt,Ie,xt.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(At,ie,qe,lt,wt,de,Se,ve,dt,xt.data):U.texSubImage3D(At,ie,qe,lt,wt,de,Se,ve,dt,Ie,xt):D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ie,qe,lt,de,Se,dt,Ie,xt.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ie,qe,lt,xt.width,xt.height,dt,xt.data):U.texSubImage2D(U.TEXTURE_2D,ie,qe,lt,de,Se,dt,Ie,xt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Je),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,zi),U.pixelStorei(U.UNPACK_SKIP_ROWS,sn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ss),ie===0&&H.generateMipmaps&&U.generateMipmap(At),xe.unbindTexture()},this.initRenderTarget=function(D){Me.get(D).__webglFramebuffer===void 0&&ke.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ke.setTextureCube(D,0):D.isData3DTexture?ke.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ke.setTexture2DArray(D,0):ke.setTexture2D(D,0),xe.unbindTexture()},this.resetState=function(){_=0,T=0,b=null,xe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const R=.5,pe=32,_t=2,nt=4,kc={seed:1337,chunksX:8,chunksY:4,chunksZ:8,seaLevel:22};function Dt(n,e,t){return(n*1024+e)*1024+t}const rv=0,Qs=1,gs=2,vs=3,qs=4,Js=5,ai=6,as=7,ru=8,au=9,ou=10,lu=11,cu=12,hu=13,uu=14,du=15,yl=16,Al=17,xs=18,Sl=19,av=20,_l=21,ov=22,wl=23,lv=24,yn=25,Et=[{id:rv,name:"air",albedo:[0,0,0],roughness:1,metalness:0,pattern:"stone",scale:1,placeable:!1,hard:!1},{id:Qs,name:"stone",albedo:[.42,.41,.4],roughness:.85,metalness:0,pattern:"stone",scale:3,placeable:!0,hard:!1},{id:gs,name:"dirt",albedo:[.3,.21,.14],roughness:.95,metalness:0,pattern:"dirt",scale:2,placeable:!0,hard:!1},{id:vs,name:"grass",albedo:[.22,.38,.12],roughness:.9,metalness:0,pattern:"grass",scale:2,placeable:!0,hard:!1},{id:qs,name:"sand",albedo:[.76,.66,.48],roughness:.9,metalness:0,pattern:"sand",scale:1.5,placeable:!0,hard:!1,repose:34},{id:Js,name:"snow",albedo:[.92,.94,.97],roughness:.6,metalness:0,pattern:"snow",scale:2,placeable:!0,hard:!1},{id:ai,name:"wood",albedo:[.4,.26,.14],roughness:.8,metalness:0,pattern:"wood",scale:1,placeable:!0,hard:!1},{id:as,name:"leaves",albedo:[.16,.34,.1],roughness:.8,metalness:0,pattern:"leaves",scale:1,placeable:!0,hard:!1},{id:ru,name:"brick",albedo:[.56,.26,.18],roughness:.8,metalness:0,pattern:"clay",scale:1,placeable:!0,hard:!0},{id:au,name:"marble",albedo:[.93,.92,.9],roughness:.32,metalness:0,pattern:"marble",scale:2.5,placeable:!0,hard:!1},{id:ou,name:"obsidian",albedo:[.02,.02,.03],roughness:.08,metalness:.05,pattern:"obsidian",scale:2,placeable:!0,hard:!1},{id:lu,name:"lantern",albedo:[.9,.75,.5],roughness:.5,metalness:0,pattern:"glow",scale:1,emissive:[1.7,1.15,.5],placeable:!0,hard:!0},{id:cu,name:"moss",albedo:[.2,.3,.12],roughness:.95,metalness:0,pattern:"moss",scale:1.5,placeable:!0,hard:!1},{id:hu,name:"planks",albedo:[.55,.38,.2],roughness:.7,metalness:0,pattern:"planks",scale:1,placeable:!0,hard:!0},{id:uu,name:"cobble",albedo:[.45,.44,.42],roughness:.9,metalness:0,pattern:"cobble",scale:1,placeable:!0,hard:!0},{id:du,name:"torch",albedo:[.3,.2,.1],roughness:.85,metalness:0,pattern:"torch",scale:.5,emissive:[20,10,3.1],placeable:!0,hard:!0,solid:!1},{id:yl,name:"lamp",albedo:[.25,.25,.28],roughness:.5,metalness:.3,pattern:"obsidian",scale:.5,emissive:[16,15.5,12.8],placeable:!0,hard:!0,solid:!1},{id:Al,name:"goat",albedo:[.62,.55,.44],roughness:.95,metalness:0,pattern:"fur",scale:.35,placeable:!0,hard:!1,spawn:"goat"},{id:xs,name:"anchor",albedo:[.2,.07,.34],roughness:.35,metalness:.1,pattern:"anchor",scale:1,emissive:[.1,.03,.22],placeable:!0,hard:!0},{id:Sl,name:"penguin",albedo:[.07,.07,.09],roughness:.8,metalness:0,pattern:"fur",scale:.3,placeable:!0,hard:!1,spawn:"penguin"},{id:av,name:"plumage",albedo:[.92,.91,.86],roughness:.75,metalness:0,pattern:"fur",scale:.3,placeable:!1,hard:!1},{id:_l,name:"fish",albedo:[.88,.42,.1],roughness:.35,metalness:.1,pattern:"scales",scale:.25,placeable:!0,hard:!1,spawn:"fish"},{id:ov,name:"fin",albedo:[.95,.62,.22],roughness:.3,metalness:.05,pattern:"scales",scale:.15,placeable:!1,hard:!1},{id:wl,name:"cat",albedo:[.42,.38,.35],roughness:.95,metalness:0,pattern:"fur",scale:.3,placeable:!0,hard:!1,spawn:"cat"},{id:lv,name:"muzzle",albedo:[.85,.82,.78],roughness:.95,metalness:0,pattern:"fur",scale:.3,placeable:!1,hard:!1},{id:yn,name:"ice",albedo:[.8,.9,.97],roughness:.1,metalness:0,pattern:"ice",scale:2,placeable:!0,hard:!1}],cv=[Qs,gs,vs,qs,ai,as,ru,hu,uu,au,ou,yn,du,yl,lu,Js,cu,Al,Sl,_l,wl,xs],fn=cv.map(n=>Et[n]);Et.length;function Hn(n){return Et[n]?.hard??!1}function ft(n){const e=Et[n];return!!e&&e.hard&&e.solid!==!1}const Zt=134217727,Ct=3;function fu(n){let e=0;for(;n;)n&=n-1,e++;return e}class ca{ox;oy;oz;nx;ny;nz;density;material;hard;sub;water;sy;sx;constructor(e,t,i,s=0,r=0,a=0,o,l,c,h,f){this.nx=e,this.ny=t,this.nz=i,this.ox=s,this.oy=r,this.oz=a,this.sy=i,this.sx=t*i,this.density=o??new Float32Array(e*t*i).fill(-nt),this.material=l??new Uint8Array(e*t*i),this.hard=c??new Uint8Array(e*t*i),this.sub=h??new Uint32Array(e*t*i),this.water=f??new Uint8Array(e*t*i)}waterAt(e,t,i){const s=Math.floor(e/R),r=Math.floor(t/R),a=Math.floor(i/R);return this.inBounds(s,r,a)?this.water[this.index(s,r,a)]!==0:!1}subMask(e,t,i){if(!this.inBounds(e,t,i))return 0;const s=this.index(e,t,i);if(this.hard[s]===0)return 0;const r=this.sub[s];return r===0?Zt:r}subOccupied(e,t,i,s,r,a){return(this.subMask(e,t,i)&1<<s+3*(r+3*a))!==0}solidFraction(e,t,i){const s=this.subMask(e,t,i);return s===0?0:s===Zt?1:fu(s)/27}hardOccupiedAt(e,t,i){const s=Math.floor(e/R),r=Math.floor(t/R),a=Math.floor(i/R),o=this.subMask(s,r,a);if(o===0)return!1;if(o===Zt)return!0;const l=Math.min(2,Math.floor((e/R-s)*3)),c=Math.min(2,Math.floor((t/R-r)*3)),h=Math.min(2,Math.floor((i/R-a)*3));return(o&1<<l+3*(c+3*h))!==0}getHard(e,t,i){return this.inBounds(e,t,i)?this.hard[this.index(e,t,i)]:0}setHard(e,t,i,s){this.inBounds(e,t,i)&&(this.hard[this.index(e,t,i)]=s)}hardAt(e,t,i){return this.getHard(Math.floor(e/R),Math.floor(t/R),Math.floor(i/R))}solidAt(e,t,i){return ft(this.hardAt(e,t,i))&&this.hardOccupiedAt(e,t,i)||this.sampleNearest(e,t,i)>0}index(e,t,i){return(e-this.ox)*this.sx+(t-this.oy)*this.sy+(i-this.oz)}inBounds(e,t,i){return e>=this.ox&&t>=this.oy&&i>=this.oz&&e<this.ox+this.nx&&t<this.oy+this.ny&&i<this.oz+this.nz}get(e,t,i){return this.inBounds(e,t,i)?this.density[this.index(e,t,i)]:-nt}getMaterial(e,t,i){return this.inBounds(e,t,i)?this.material[this.index(e,t,i)]:0}set(e,t,i,s,r){if(!this.inBounds(e,t,i))return;const a=this.index(e,t,i);this.density[a]=s<-nt?-nt:s>nt?nt:s,r!==void 0&&(this.material[a]=r)}sample(e,t,i){const s=e/R-this.ox,r=t/R-this.oy,a=i/R-this.oz;let o=Math.floor(s),l=Math.floor(r),c=Math.floor(a),h=s-o,f=r-l,d=a-c;o<0?(o=0,h=0):o>=this.nx-1&&(o=this.nx-2,h=1),l<0?(l=0,f=0):l>=this.ny-1&&(l=this.ny-2,f=1),c<0?(c=0,d=0):c>=this.nz-1&&(c=this.nz-2,d=1);const u=this.density,g=this.sx,v=this.sy,m=o*g+l*v+c,p=u[m]+(u[m+g]-u[m])*h,S=u[m+1]+(u[m+g+1]-u[m+1])*h,x=u[m+v]+(u[m+g+v]-u[m+v])*h,y=u[m+v+1]+(u[m+g+v+1]-u[m+v+1])*h,w=p+(x-p)*f,_=S+(y-S)*f;return w+(_-w)*d}sampleNearest(e,t,i){const s=Math.round(e/R),r=Math.round(t/R),a=Math.round(i/R);return this.get(s,r,a)}gradient(e,t,i,s=[0,0,0],r=R*.5){return s[0]=this.sample(e+r,t,i)-this.sample(e-r,t,i),s[1]=this.sample(e,t+r,i)-this.sample(e,t-r,i),s[2]=this.sample(e,t,i+r)-this.sample(e,t,i-r),s}materialAt(e,t,i){const s=Math.floor(e/R),r=Math.floor(t/R),a=Math.floor(i/R);let o=-1/0,l=0;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let f=0;f<=1;f++){const d=this.get(s+c,r+h,a+f);d>o&&(o=d,l=this.getMaterial(s+c,r+h,a+f))}return l}extract(e,t,i,s,r,a){const o=new ca(s,r,a,e,t,i),l=o.density,c=o.material;for(let h=0;h<s;h++){const f=e+h,d=f>=this.ox&&f<this.ox+this.nx;for(let u=0;u<r;u++){const g=t+u,v=g>=this.oy&&g<this.oy+this.ny,m=h*r*a+u*a;if(!d||!v)continue;const p=Math.max(i,this.oz),S=Math.min(i+a,this.oz+this.nz);if(S<=p)continue;const x=this.index(f,g,p),y=S-p;l.set(this.density.subarray(x,x+y),m+(p-i)),c.set(this.material.subarray(x,x+y),m+(p-i)),o.hard.set(this.hard.subarray(x,x+y),m+(p-i)),o.sub.set(this.sub.subarray(x,x+y),m+(p-i)),o.water.set(this.water.subarray(x,x+y),m+(p-i))}}return o}get sizeX(){return(this.nx-1)*R}get sizeY(){return(this.ny-1)*R}get sizeZ(){return(this.nz-1)*R}}const hv=2;function pu(n){const e=Math.round(hv/R),t=Math.floor((n.nx-1)/2)-(e>>1),i=Math.floor((n.nz-1)/2)-(e>>1);return{x0:t,y0:0,z0:i,x1:t+e,y1:e,z1:i+e}}function Gs(n,e,t,i){const s=pu(n);return e>=s.x0&&e<s.x1&&t>=s.y0&&t<s.y1&&i>=s.z0&&i<s.z1}function uv(n){const e=pu(n);let t=0;for(let i=e.x0;i<e.x1;i++)for(let s=e.y0;s<e.y1;s++)for(let r=e.z0;r<e.z1;r++){const a=n.index(i,s,r);n.hard[a]===xs&&n.sub[a]===0||(n.hard[a]=xs,n.sub[a]=0,t++)}return t}function Zo(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function qa(n,e,t){let i=Math.imul(n|0,668265261)^Math.imul(e|0,374761393)^Math.imul(t|0,2654435761);return i=Math.imul(i^i>>>15,2246822507),i=Math.imul(i^i>>>13,3266489909),((i^i>>>16)>>>0)/4294967296}const Si=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],dv=.5*(Math.sqrt(3)-1),Rs=(3-Math.sqrt(3))/6,fv=1/3,En=1/6;class Gc{perm=new Uint8Array(512);permMod12=new Uint8Array(512);constructor(e){const t=new Uint8Array(256);for(let s=0;s<256;s++)t[s]=s;const i=Zo(e);for(let s=255;s>0;s--){const r=Math.floor(i()*(s+1)),a=t[s];t[s]=t[r],t[r]=a}for(let s=0;s<512;s++)this.perm[s]=t[s&255],this.permMod12[s]=this.perm[s]%12}noise2(e,t){const i=this.perm,s=this.permMod12;let r=0,a=0,o=0;const l=(e+t)*dv,c=Math.floor(e+l),h=Math.floor(t+l),f=(c+h)*Rs,d=e-(c-f),u=t-(h-f);let g,v;d>u?(g=1,v=0):(g=0,v=1);const m=d-g+Rs,p=u-v+Rs,S=d-1+2*Rs,x=u-1+2*Rs,y=c&255,w=h&255,_=s[y+i[w]],T=s[y+g+i[w+v]],b=s[y+1+i[w+1]];let M=.5-d*d-u*u;if(M>=0){M*=M;const P=Si[_];r=M*M*(P[0]*d+P[1]*u)}let A=.5-m*m-p*p;if(A>=0){A*=A;const P=Si[T];a=A*A*(P[0]*m+P[1]*p)}let C=.5-S*S-x*x;if(C>=0){C*=C;const P=Si[b];o=C*C*(P[0]*S+P[1]*x)}return 70*(r+a+o)}noise3(e,t,i){const s=this.perm,r=this.permMod12;let a=0,o=0,l=0,c=0;const h=(e+t+i)*fv,f=Math.floor(e+h),d=Math.floor(t+h),u=Math.floor(i+h),g=(f+d+u)*En,v=e-(f-g),m=t-(d-g),p=i-(u-g);let S,x,y,w,_,T;v>=m?m>=p?(S=1,x=0,y=0,w=1,_=1,T=0):v>=p?(S=1,x=0,y=0,w=1,_=0,T=1):(S=0,x=0,y=1,w=1,_=0,T=1):m<p?(S=0,x=0,y=1,w=0,_=1,T=1):v<p?(S=0,x=1,y=0,w=0,_=1,T=1):(S=0,x=1,y=0,w=1,_=1,T=0);const b=v-S+En,M=m-x+En,A=p-y+En,C=v-w+2*En,P=m-_+2*En,F=p-T+2*En,z=v-1+3*En,G=m-1+3*En,L=p-1+3*En,B=f&255,N=d&255,Y=u&255,ee=r[B+s[N+s[Y]]],le=r[B+S+s[N+x+s[Y+y]]],we=r[B+w+s[N+_+s[Y+T]]],Be=r[B+1+s[N+1+s[Y+1]]];let ze=.6-v*v-m*m-p*p;if(ze>=0){ze*=ze;const te=Si[ee];a=ze*ze*(te[0]*v+te[1]*m+te[2]*p)}let Pe=.6-b*b-M*M-A*A;if(Pe>=0){Pe*=Pe;const te=Si[le];o=Pe*Pe*(te[0]*b+te[1]*M+te[2]*A)}let q=.6-C*C-P*P-F*F;if(q>=0){q*=q;const te=Si[we];l=q*q*(te[0]*C+te[1]*P+te[2]*F)}let j=.6-z*z-G*G-L*L;if(j>=0){j*=j;const te=Si[Be];c=j*j*(te[0]*z+te[1]*G+te[2]*L)}return 32*(a+o+l+c)}fbm2(e,t,i,s=2,r=.5){let a=0,o=1,l=1,c=0;for(let h=0;h<i;h++)a+=o*this.noise2(e*l,t*l),c+=o,o*=r,l*=s;return a/c}fbm3(e,t,i,s,r=2,a=.5){let o=0,l=1,c=1,h=0;for(let f=0;f<s;f++)o+=l*this.noise3(e*c,t*c,i*c),h+=l,l*=a,c*=r;return o/h}ridged2(e,t,i){let s=0,r=.5,a=1,o=1;for(let l=0;l<i;l++){let c=1-Math.abs(this.noise2(e*a,t*a));c*=c*o,o=Math.min(1,Math.max(0,c*2)),s+=c*r,r*=.5,a*=2}return Math.min(1,s)}}class Hc{constructor(e){this.cfg=e,this.n=new Gc(e.seed),this.n2=new Gc(e.seed^1540483477)}n;n2;height(e,t){const i=this.n,s=i.fbm2(e/260,t/260,4),r=Vc(-.15,.55,s),a=i.ridged2(e/110+31.7,t/110-12.3,4),o=i.fbm2(e/34+7.1,t/34+3.3,3),l=i.fbm2(e/9,t/9,2);let c=this.cfg.seaLevel+4+s*12;return c+=Math.pow(a,1.6)*30*r,c+=o*4+l*.8,c}heightInfo(e,t){const i=this.height(e,t),s=.75,r=(this.height(e+s,t)-this.height(e-s,t))/(2*s),a=(this.height(e,t+s)-this.height(e,t-s))/(2*s);return{height:i,slope:Math.hypot(r,a)}}generate(e,t=!0){const{nx:i,ny:s,nz:r}=e,a=this.n,o=this.n2,l=this.cfg.seaLevel,c=14;for(let h=0;h<i;h++){const f=(e.ox+h)*R;for(let d=0;d<r;d++){const u=(e.oz+d)*R,{height:g,slope:v}=this.heightInfo(f,u),m=50+a.noise2(f/40,u/40)*3,p=v>1+a.noise2(f/6,u/6)*.25;for(let S=0;S<s;S++){const x=(e.oy+S)*R;let y=g-x;if(Math.abs(y)<c){const b=a.fbm3(f/22,x/22,u/22,3);if(y+=b*(1.5+Math.min(v,2)*2),x<g-3&&x>3){const M=o.noise3(f/24,x/16,u/24),A=o.noise3(f/24+71.3,x/16+11.9,u/24-40.1),P=(Math.sqrt(M*M+A*A)-.11)*18,F=Vc(g-3,g-8,x),z=P+(1-F)*100;z<y&&(y=z)}}y=y>nt?nt:y<-nt?-nt:y,e.oy+S>=this.cfg.chunksY*pe&&(y=-nt);const w=g-x;let _;x>m&&w<3?_=Js:p&&w<6?_=Qs:w<1.2?_=x<l+1.5?qs:vs:w<4.5?_=x<l+1?qs:gs:_=Qs;const T=e.index(e.ox+h,e.oy+S,e.oz+d);e.density[T]=y,e.material[T]=_}}}t&&this.plantTrees(e)}treeSites(e,t){const i=this.cfg.seaLevel,s=[];for(let r=4;r<e-4;r+=2)for(let a=4;a<t-4;a+=2){const o=qa(r,a,this.cfg.seed),l=this.n.fbm2(r/70+200,a/70+200,2);if(o>.045+l*.06)continue;const{height:c,slope:h}=this.heightInfo(r,a);c<i+2.5||h>.7||c>46||s.push({x:r,z:a,trunkH:3.5+qa(r+17,a+5,this.cfg.seed)*3,canopyR:2+qa(r+3,a+29,this.cfg.seed)*1.2})}return s}siteGround(e,t){return this.groundAt(e,t.x,t.z,this.heightInfo(t.x,t.z).height+3)}groundAt(e,t,i,s){const r=Math.floor(t/R),a=Math.floor(i/R);for(let o=Math.min(e.sizeY-1.5,s);o>this.cfg.seaLevel;o-=R){if(e.sample(t,o,i)<=0)continue;const l=e.getMaterial(r,Math.floor(o/R),a);if(!(l===ai||l===as))return o}return-1}plantTreeAt(e,t,i=1,s=this.siteGround(e,t)){if(s<0)return null;const r=t.trunkH*i,a=t.canopyR*(.3+.7*i);this.stampSphereUnion(e,t.x,s+r+a*.5,t.z,a,as,.6*i),this.stampCylinderUnion(e,t.x,s-.5,t.z,r+a*.6,.42*(.6+.4*i),ai);const o=a+1.5;return{x0:Math.max(0,Math.floor((t.x-o)/R)),y0:Math.max(0,Math.floor((s-1)/R)),z0:Math.max(0,Math.floor((t.z-o)/R)),x1:Math.min(e.nx-1,Math.ceil((t.x+o)/R)),y1:Math.min(e.ny-1,Math.ceil((s+r+a*1.5+1)/R)),z1:Math.min(e.nz-1,Math.ceil((t.z+o)/R))}}plantTrees(e){for(const t of this.treeSites(e.sizeX,e.sizeZ))this.plantTreeAt(e,t,1)}treeGrowth(e,t,i){if(i<0)return 0;const s=Math.floor(t.x/R),r=Math.floor(t.z/R),a=Math.max(0,Math.floor((i-.5)/R)),o=Math.min(e.ny-1,Math.ceil((i+1)/R)),l=Math.min(e.ny-1,Math.ceil((i+t.trunkH+t.canopyR*1.5+1)/R));let c=!1,h=i,f=i;for(let g=a;g<=l;g++)for(let v=0;v<=1;v++)for(let m=0;m<=1;m++){const p=s+v,S=r+m;if(!e.inBounds(p,g,S))continue;const x=e.index(p,g,S);if(e.density[x]<=0)continue;const y=e.material[x];y===ai&&g<=o&&(c=!0),y===ai&&(h=Math.max(h,g*R)),(y===ai||y===as)&&(f=Math.max(f,g*R))}if(!c)return 0;const d=Math.min(1,Math.max(0,h-i)/(t.trunkH+t.canopyR*.6)),u=Math.min(1,Math.max(0,f-i)/(t.trunkH+t.canopyR*1.5));return d>=.7&&u>=.85?Math.max(d,.9):d}siteFree(e,t,i){if(i<0||i<this.cfg.seaLevel+1)return!1;const s=Math.floor(t.x/R),r=Math.floor(t.z/R);if(e.hardAt(t.x,i-.2,t.z)!==0||e.waterAt(t.x,i+.3,t.z))return!1;for(let a=i+.6;a<i+t.trunkH+1;a+=R){if(e.hardAt(t.x,a,t.z)!==0)return!1;if(e.sample(t.x,a,t.z)>0){const o=e.getMaterial(s,Math.floor(a/R),r);if(o!==ai&&o!==as)return!1}}return!0}stampSphereUnion(e,t,i,s,r,a,o){const l=Math.floor((t-r-1)/R),c=Math.ceil((t+r+1)/R),h=Math.floor((i-r-1)/R),f=Math.ceil((i+r+1)/R),d=Math.floor((s-r-1)/R),u=Math.ceil((s+r+1)/R);for(let g=l;g<=c;g++)for(let v=h;v<=f;v++)for(let m=d;m<=u;m++){if(!e.inBounds(g,v,m))continue;const p=g*R,S=v*R,x=m*R,y=Math.hypot(p-t,(S-i)*1.15,x-s),w=o*this.n2.noise3(p*1.3,S*1.3,x*1.3),_=r-y+w,T=e.index(g,v,m);_>e.density[T]&&(e.density[T]=Math.min(_,nt)),_>-R&&(e.material[T]=a)}}stampCylinderUnion(e,t,i,s,r,a,o,l=i+.5){const c=Math.floor((t-a-1)/R),h=Math.ceil((t+a+1)/R),f=Math.floor((s-a-1)/R),d=Math.ceil((s+a+1)/R),u=Math.floor(i/R),g=Math.ceil((i+r)/R);for(let v=c;v<=h;v++)for(let m=u;m<=g;m++)for(let p=f;p<=d;p++){if(!e.inBounds(v,m,p))continue;const S=v*R,x=m*R,y=p*R,w=a-Math.hypot(S-t,y-s),_=Math.min(x-i,i+r-x),T=Math.min(w,_),b=e.index(v,m,p);T>e.density[b]&&(e.density[b]=Math.min(T,nt)),T>-R*.6&&x>=l-1e-6&&(e.material[b]=o)}}}function Vc(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const El=2,Is=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],Wc=(n,e)=>[n[0]*e,n[1]*e,n[2]*e];function Er(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function Xc(n){const e=(n-6)/24*Math.PI*2,t=Math.cos(e),i=Math.sin(e),s=Math.hypot(t,i,.35);let r=[t/s,i/s,.35/s];const a=r[1],o=Er(-.08,.18,a),l=1-Er(.02,.35,a),c=Is([1,.98,.94],[1,.5,.22],l),h=3*Math.pow(Er(-.02,.25,a),.8);let f=Wc(c,h);const d=[.1,.26,.64],u=[.46,.6,.8],g=[.95,.45,.18],v=[.01,.014,.032],m=[.022,.028,.05];let p=Is(u,g,l*.85),S=d;S=Is(v,S,o),p=Is(m,p,o);const x=Wc(Is(S,p,.5),.9);if(a<0){const y=Er(0,-.12,a)*.28;r=[-r[0],-r[1],r[2]],r[1]>.05?f=[.55*y,.65*y,.95*y]:f=[0,0,0]}return{dir:r,sun:f,zenith:S,horizon:p,ambient:x,daylight:o}}class pv{sx;sy;sz;data;normals;constructor(e){this.sx=Math.ceil((e.nx-1)/_t),this.sy=Math.ceil((e.ny-1)/_t),this.sz=Math.ceil((e.nz-1)/_t),this.data=new Uint8Array(this.sx*this.sy*this.sz*4),this.normals=new Uint8Array(this.sx*this.sy*this.sz*4)}index(e,t,i){return(e+this.sx*(t+this.sy*i))*4}get texel(){return _t*R}}const _i=[0,0,0];function Tr(n,e,t,i,s,r,a,o){const l=e.texel,c=t*r,h=i*r,f=s*r,d=e.data,u=255/El,g=a.dir,v=g[1]>0,m=n.sizeY,p=e.normals,S=Xt(mv*255);for(let x=f;x<f+r&&x<e.sz;x++)for(let y=c;y<c+r&&y<e.sx;y++){const w=(y+.5)*l,_=(x+.5)*l;let T=Yc(n,w,(h+r)*l,_,m);for(let b=Math.min(h+r,e.sy)-1;b>=h;b--){const M=e.index(y,b,x);let A=0,C=-1/0,P=0,F=0,z=0,G=0,L=0;const B=y*_t,N=b*_t,Y=x*_t;for(let Qe=0;Qe<_t;Qe++)for(let I=0;I<_t;I++)for(let E=0;E<_t;E++){const W=n.getHard(B+Qe,N+I,Y+E);if(W!==0&&!ft(W)){const $=Et[W].emissive;$&&(z+=$[0],G+=$[1],L+=$[2]);continue}if(W!==0){const $=n.solidFraction(B+Qe,N+I,Y+E);A+=$,$>0&&(F++,P=W);continue}const Z=n.get(B+Qe,N+I,Y+E);Z>0&&(A++,Z>C&&F===0&&(C=Z,P=n.getMaterial(B+Qe,N+I,Y+E)))}const ee=o?.get(M);let le;ee&&(ee[3]===1?le=ee:(z+=ee[0],G+=ee[1],L+=ee[2]));const we=_t*_t*_t,Be=A/we;let ze=A>0&&A<we-1e-6;if(A>=we-1e-6&&(ze=!dn(n,B-1,N,Y)||!dn(n,B+_t,N,Y)||!dn(n,B,N-1,Y)||!dn(n,B,N+_t,Y)||!dn(n,B,N,Y-1)||!dn(n,B,N,Y+_t)),A>0&&(T=!1),!ze&&le){d[M]=Xt(le[0]*u),d[M+1]=Xt(le[1]*u),d[M+2]=Xt(le[2]*u),d[M+3]=Math.round(Be*255),p[M]=128,p[M+1]=255,p[M+2]=128,p[M+3]=0;continue}if(!ze&&z+G+L>0){d[M]=Xt(z/Ti*u),d[M+1]=Xt(G/Ti*u),d[M+2]=Xt(L/Ti*u),d[M+3]=Math.round(Be*255),p[M]=128,p[M+1]=128,p[M+2]=128,p[M+3]=255;continue}if(!ze){A===0&&T?(d[M]=0,d[M+1]=0,d[M+2]=0,d[M+3]=0,p[M]=128,p[M+1]=0,p[M+2]=128,p[M+3]=S):(d[M]=0,d[M+1]=0,d[M+2]=0,d[M+3]=Math.round(Be*255),p[M]=128,p[M+1]=255,p[M+2]=128,p[M+3]=0);continue}const Pe=(y+.5)*l,q=(b+.5)*l,j=(x+.5)*l;let te=0,Ae=1,ge=0;if(F===0){n.gradient(Pe,q,j,_i,l*.5);const Qe=Math.hypot(_i[0],_i[1],_i[2]);Qe>1e-5&&(te=-_i[0]/Qe,Ae=-_i[1]/Qe,ge=-_i[2]/Qe)}else{te=(dn(n,B-1,N,Y)?0:-1)+(dn(n,B+_t,N,Y)?0:1),Ae=(dn(n,B,N-1,Y)?0:-1)+(dn(n,B,N+_t,Y)?0:1),ge=(dn(n,B,N,Y-1)?0:-1)+(dn(n,B,N,Y+_t)?0:1);const Qe=Math.hypot(te,Ae,ge);Qe>0?(te/=Qe,Ae/=Qe,ge/=Qe):Ae=1}const Ne=Et[P]??Et[1],Tt=Ne.albedo;let U=0;const ht=te*g[0]+Ae*g[1]+ge*g[2];v&&ht>0&&gv(n,Pe+te*l*.75,q+Ae*l*.75,j+ge*l*.75,g,m)&&(U=ht);const Oe=Yc(n,Pe+te*l*.6,q+Ae*l*.6,j+ge*l*.6,m),Re=(.5+.5*Ae)*(Oe?1:.06),xe=1/Math.PI;let ot=Tt[0]*(a.sun[0]*U*xe+a.ambient[0]*Re),Me=Tt[1]*(a.sun[1]*U*xe+a.ambient[1]*Re),ke=Tt[2]*(a.sun[2]*U*xe+a.ambient[2]*Re);Ne.emissive&&(ot+=Ne.emissive[0],Me+=Ne.emissive[1],ke+=Ne.emissive[2]);const ut=Math.max(Be,jo);if(z+G+L>0){d[M]=Xt((ot*ut+z)/Ti*u),d[M+1]=Xt((Me*ut+G)/Ti*u),d[M+2]=Xt((ke*ut+L)/Ti*u),d[M+3]=Math.round(ut*255),p[M]=128,p[M+1]=128,p[M+2]=128,p[M+3]=255;continue}d[M]=Xt(ot*ut*u),d[M+1]=Xt(Me*ut*u),d[M+2]=Xt(ke*ut*u),d[M+3]=Math.round(ut*255),p[M]=Xt((te*.5+.5)*255),p[M+1]=Xt((Ae*.5+.5)*255),p[M+2]=Xt((ge*.5+.5)*255),p[M+3]=0}}}const jo=.25,mv=.7,Ti=24;function dn(n,e,t,i){return n.getHard(e,t,i)!==0||n.get(e,t,i)>0}function Xt(n){return n<=0?0:n>=255?255:Math.round(n)}function gv(n,e,t,i,s,r){const a=R,o=s[0]*a,l=s[1]*a,c=s[2]*a;for(let h=0;h<400;h++){if(e+=o,t+=l,i+=c,t>r||t<0||e<0||i<0||e>n.sizeX||i>n.sizeZ)return!0;if(n.solidAt(e,t,i))return!1}return!0}function Yc(n,e,t,i,s){for(let r=t;r<=s;r+=R*2)if(n.solidAt(e,r,i))return!1;return!0}const ti=[R/Ct,.5,1,2,4,6,8],Qr=[[1,0,0],[0,0,1],[-1,0,0],[0,0,-1]];function br(n,e,t,i,s=R*.2,r=1){const a=n.size*.5*r,o=e-n.x,l=t-n.y,c=i-n.z;if(n.shape==="sphere")return a-Math.sqrt(o*o+l*l+c*c);const h=Math.max(Math.abs(o),Math.abs(l),Math.abs(c)),f=a-h+s;if(n.shape==="cube")return f;const d=n.y-a;if(n.shape==="slab"){const v=n.size/(2*Ct)*r,m=n.y-n.size*.5+n.size/(2*Ct),p=n.size*.5*r;return Math.min(p-Math.max(Math.abs(o),Math.abs(c)),v-Math.abs(t-m))+s}const u=Qr[(n.dir??0)&3];if(n.shape==="wall"){const v=n.size*.5,m=(e-n.x)*u[0]+(i-n.z)*u[2]+v,p=Math.min(n.size/Ct,R),S=(e-n.x)*u[2]-(i-n.z)*u[0];return Math.min(p*.5*r-Math.abs(m-p*.5),a-Math.abs(S),a-Math.abs(l))+s}const g=(e-n.x)*u[0]+(i-n.z)*u[2]+a;if(n.shape==="roof"){const v=(e-n.x)*u[2]-(i-n.z)*u[0],m=.75,p=t-d-(a-Math.abs(v))*m,S=Math.abs(p)/Math.sqrt(1+m*m),x=Math.min(n.size/Ct,R)*r;return Math.min(f,x*.5-S+s)}return Math.min(f,g-(t-d)+R/Ct*.5)}function Os(n,e,t=1){const i=e.size*.5+R*1.5,s=Math.max(0,Math.floor((e.x-i)/R)),r=Math.min(n.nx-1,Math.ceil((e.x+i)/R)),a=Math.max(0,Math.floor((e.y-i)/R)),o=Math.min(n.ny-1,Math.ceil((e.y+i)/R)),l=Math.max(0,Math.floor((e.z-i)/R)),c=Math.min(n.nz-1,Math.ceil((e.z+i)/R)),h=n.density,f=n.material;if(e.op==="smooth"){const u=h.slice();for(let g=s;g<=r;g++)for(let v=a;v<=o;v++)for(let m=l;m<=c;m++){const p=br(e,g*R,v*R,m*R);if(p<0)continue;let S=0,x=0;for(let _=-1;_<=1;_++)for(let T=-1;T<=1;T++)for(let b=-1;b<=1;b++){const M=g+_,A=v+T,C=m+b;n.inBounds(M,A,C)&&(S+=u[n.index(M,A,C)],x++)}const y=Math.min(1,p/R),w=n.index(g,v,m);h[w]=h[w]*(1-y)+S/x*y}return{x0:s,y0:a,z0:l,x1:r,y1:o,z1:c}}if(e.pick){const u=Math.max(e.size,R)*.5,g=Math.max(0,Math.ceil((e.x-u)/R-.5)),v=Math.min(n.nx-2,Math.ceil((e.x+u)/R-.5)-1),m=Math.max(0,Math.ceil((e.y-u)/R-.5)),p=Math.min(n.ny-2,Math.ceil((e.y+u)/R-.5)-1),S=Math.max(0,Math.ceil((e.z-u)/R-.5)),x=Math.min(n.nz-2,Math.ceil((e.z+u)/R-.5)-1);for(let y=g;y<=v;y++)for(let w=m;w<=p;w++)for(let _=S;_<=x;_++){if(Gs(n,y,w,_))continue;const T=n.index(y,w,_);n.hard[T]===0||e.mat!==0&&n.hard[T]!==e.mat||(n.hard[T]=0,n.sub[T]=0)}return{x0:Math.max(0,g-1),y0:Math.max(0,m-1),z0:Math.max(0,S-1),x1:Math.min(n.nx-1,v+2),y1:Math.min(n.ny-1,p+2),z1:Math.min(n.nz-1,x+2)}}const d=Hn(e.mat);if(e.op==="sub"||e.op==="add"&&d&&ft(e.mat)){for(let u=s;u<r;u++)for(let g=a;g<o;g++)for(let v=l;v<c;v++){let m=0;for(let x=0;x<Ct;x++)for(let y=0;y<Ct;y++)for(let w=0;w<Ct;w++)br(e,(u+(w+.5)/Ct)*R,(g+(y+.5)/Ct)*R,(v+(x+.5)/Ct)*R,0,t)>0&&(m|=1<<w+3*(y+3*x));if(m===0||Gs(n,u,g,v))continue;const p=n.index(u,g,v),S=n.subMask(u,g,v);if(e.op==="sub"){if(S===0||!ft(n.hard[p])){n.hard[p]!==0&&!ft(n.hard[p])&&(n.hard[p]=0,n.sub[p]=0);continue}const x=S&~m;x===0?(n.hard[p]=0,n.sub[p]=0):n.sub[p]=x===Zt?0:x}else{const x=(ft(n.hard[p])?S:0)|m;n.hard[p]=e.mat,n.sub[p]=x===Zt?0:x}}if(e.op==="add")return{x0:s,y0:a,z0:l,x1:r,y1:o,z1:c}}if(e.op==="add"&&d&&!ft(e.mat)){const u=Math.floor(e.x/R),g=Math.floor(e.y/R),v=Math.floor(e.z/R);return n.setHard(u,g,v,e.mat),n.sub[n.index(u,g,v)]=0,{x0:Math.max(0,u-1),y0:Math.max(0,g-1),z0:Math.max(0,v-1),x1:Math.min(n.nx-1,u+2),y1:Math.min(n.ny-1,g+2),z1:Math.min(n.nz-1,v+2)}}if(e.op==="paint")for(let u=s;u<r;u++)for(let g=a;g<o;g++)for(let v=l;v<c;v++){if(br(e,(u+.5)*R,(g+.5)*R,(v+.5)*R)<=0||Gs(n,u,g,v))continue;const p=n.index(u,g,v);n.hard[p]!==0&&d&&ft(e.mat)&&ft(n.hard[p])&&(n.hard[p]=e.mat)}if((e.op==="add"||e.op==="sub")&&e.size<R){const u=e.op==="add"?1:-1,g=Math.floor(e.x/R),v=Math.floor(e.y/R),m=Math.floor(e.z/R);for(let p=g;p<=g+1;p++)for(let S=v;S<=v+1;S++)for(let x=m;x<=m+1;x++){if(!n.inBounds(p,S,x))continue;const y=Math.hypot(p*R-e.x,S*R-e.y,x*R-e.z),w=Math.max(0,1-y/R),_=n.index(p,S,x);u>0&&S>=n.ny-1||(h[_]=Math.max(-nt,Math.min(nt,h[_]+u*.45*w)),u>0&&h[_]>-R&&(f[_]=e.mat))}return{x0:Math.max(0,g-1),y0:Math.max(0,v-1),z0:Math.max(0,m-1),x1:Math.min(n.nx-1,g+2),y1:Math.min(n.ny-1,v+2),z1:Math.min(n.nz-1,m+2)}}for(let u=s;u<=r;u++)for(let g=a;g<=o;g++)for(let v=l;v<=c;v++){const m=br(e,u*R,g*R,v*R,R*.2,t),p=n.index(u,g,v);if(e.op==="add"){if(g>=n.ny-1)continue;m>h[p]&&(h[p]=Math.min(m,nt)),m>-R&&(f[p]=e.mat)}else if(e.op==="sub"){const S=-m;S<h[p]&&(h[p]=Math.max(S,-nt))}else e.op==="paint"&&m>-R&&(f[p]=e.mat)}return{x0:s,y0:a,z0:l,x1:r,y1:o,z1:c}}function Ka(n,e,t,i,s){const r=[],a=l=>Math.max(0,Math.floor((l-2)/e)),o=(l,c)=>Math.min(c-1,Math.floor((l+1)/e));for(let l=a(n.x0);l<=o(n.x1,t);l++)for(let c=a(n.y0);c<=o(n.y1,i);c++)for(let h=a(n.z0);h<=o(n.z1,s);h++)r.push([l,c,h]);return r}function vv(n){return!(n.pick||n.op!=="add"&&n.op!=="sub"||n.size<R||n.op==="add"&&Hn(n.mat)&&!ft(n.mat))}function xv(n){const e=JSON.parse(n),t=[];for(const i of e){if(!Array.isArray(i)||i.length<7||i.length>9)continue;const[s,r,a,o,l,c,h,f,d]=i;if(!["add","sub","paint","smooth"].includes(s)||!["sphere","cube","slab","ramp","wall","roof"].includes(r))continue;const u={op:s,shape:r,size:+a,mat:+o,x:+l,y:+c,z:+h};d!==void 0&&+d&1?u.pick=!0:f!==void 0&&(u.dir=+f&3),t.push(u)}return t}const Mv=8208|1<<22;function mu(n,e,t,i=64,s=.12){const[r,a,o]=e,[l,c,h]=t,f=(m,p,S)=>!(m<0||p<0||S<0||m>n.sizeX||p>n.sizeY||S>n.sizeZ);let d=f(r,a,o),u=d?n.sample(r,a,o):-1,g=u>0,v=0;for(let m=s;m<=i;m+=s){const p=r+l*m,S=a+c*m,x=o+h*m;let y;if(f(p,S,x))d=!0,y=n.sample(p,S,x);else{if(d)return null;y=-1}if(g)y<=0&&(g=!1);else if(y>0){let w=v,_=m;for(let F=0;F<8;F++){const z=.5*(w+_);n.sample(r+l*z,a+c*z,o+h*z)>0?_=z:w=z}const T=.5*(w+_),b=r+l*T,M=a+c*T,A=o+h*T,C=n.gradient(b,M,A),P=Math.hypot(C[0],C[1],C[2])||1;return{point:[b,M,A],normal:[-C[0]/P,-C[1]/P,-C[2]/P],distance:T,material:n.materialAt(b,M,A),hard:!1}}u=y,v=m}return null}function yv(n,e,t,i=64){const[s,r,a]=e,[o,l,c]=t;let h=Math.floor(s/R),f=Math.floor(r/R),d=Math.floor(a/R);const u=o>0?1:-1,g=l>0?1:-1,v=c>0?1:-1,m=o!==0?Math.abs(R/o):1/0,p=l!==0?Math.abs(R/l):1/0,S=c!==0?Math.abs(R/c):1/0,x=(A,C,P,F)=>P===0?1/0:(F>0?(C+1)*R-A:A-C*R)/Math.abs(P);let y=x(s,h,o,u),w=x(r,f,l,g),_=x(a,d,c,v),T=n.getHard(h,f,d)!==0,b=0,M=-1;for(let A=0;A<1024;A++){if(b>i)return null;const C=n.getHard(h,f,d);if(C!==0&&!T&&M>=0){const P=ft(C)?n.subMask(h,f,d):Mv;if(P===Zt){const L=M===0?[-u,0,0]:M===1?[0,-g,0]:[0,0,-v];return{point:[s+o*b,r+l*b,a+c*b],normal:L,distance:b,material:C,hard:!0}}const F=Math.min(y,w,_),z=R/24;let G=-1;for(let L=b+z*.5;L<F;L+=z){const B=s+o*L,N=r+l*L,Y=a+c*L,ee=B/R-h,le=N/R-f,we=Y/R-d,Be=Math.min(2,Math.max(0,Math.floor(ee*3))),ze=Math.min(2,Math.max(0,Math.floor(le*3))),Pe=Math.min(2,Math.max(0,Math.floor(we*3))),q=Be+3*(ze+3*Pe);if(P&1<<q){let j;if(G<0)j=M===0?[-u,0,0]:M===1?[0,-g,0]:[0,0,-v];else{const te=G%3,Ae=Math.floor(G/3)%3;j=te!==Be?[-u,0,0]:Ae!==ze?[0,-g,0]:[0,0,-v]}return{point:[B,N,Y],normal:j,distance:L,material:C,hard:!0}}G=q}}if(C===0&&(T=!1),y<w&&y<_?(b=y,y+=m,h+=u,M=0):w<_?(b=w,w+=p,f+=g,M=1):(b=_,_+=S,d+=v,M=2),(h<0||f<0||d<0||h>=n.nx-1||f>=n.ny-1||d>=n.nz-1)&&b>1)return null}return null}function Av(n,e,t,i=64){const s=yv(n,e,t,i),r=mu(n,e,t,s?s.distance:i);return r&&(!s||r.distance<s.distance)?r:s}const Di=.12,Ps=.62,Sv=26,_v=5.5,Jo=1.75,li=1.62,Qc=22,wv=9.2,Cr=.6,$o=[.2,1.25],gu=[.15],Ev=.3,Tv=.27,vu=[li-.12],bv=1/120,Cv=.78,Dv=8,Rv=5,qc=[.15,.55,.95,1.35,1.7],Iv=.95;function xu(n,e,t){return{pos:[n,e,t],vel:[0,0,0],onGround:!1,fly:!1}}function Tl(n,e,t){let i=t.dt;for(;i>1e-6;){const s=Math.min(bv,i);i-=s,Lv(n,e,t,s)}}const en=[0,0,0];function Pv(n,e){let t=0;for(const i of qc)n.waterAt(e.pos[0],e.pos[1]+i,e.pos[2])&&t++;return t/qc.length}function Lv(n,e,t,i){const s=e.vel,r=e.fly?0:Pv(n,e);if(e.swim=!e.fly&&r>0&&n.waterAt(e.pos[0],e.pos[1]+(e.crouch?.25:Iv),e.pos[2]),e.fly){const v=1-Math.exp(-i*28);s[0]+=(t.wishX-s[0])*v,s[1]+=(t.wishY-s[1])*v,s[2]+=(t.wishZ-s[2])*v}else if(e.swim){const v=1-Math.exp(-i*Rv);s[0]+=(t.wishX-s[0])*v,s[2]+=(t.wishZ-s[2])*v;const m=Qc*(r/Cv-1),p=t.jump?Math.max(t.wishY,2.5):t.wishY;s[1]+=(m+(p-s[1])*Dv)*i,e.onGround=!1}else{const v=e.onGround?14:4,m=1-Math.exp(-i*v);s[0]+=(t.wishX-s[0])*m,s[2]+=(t.wishZ-s[2])*m,s[1]-=Qc*i,t.jump&&e.onGround&&(s[1]=wv,e.onGround=!1),s[1]<-40&&(s[1]=-40)}let a=!1;const o=e.pos[0],l=e.pos[1],c=e.pos[2],h=s[0],f=s[2],d=e.onGround;if(e.pos[0]+=s[0]*i,es(n,e,0)&&(s[0]=0),e.pos[1]+=s[1]*i,es(n,e,1)&&(s[1]<0&&(a=!0),s[1]=0),e.pos[2]+=s[2]*i,es(n,e,2)&&(s[2]=0),Za(n,e),a&&(e.onGround=!0),!e.fly&&!e.swim&&d){const v=Math.hypot(h,f)*i,m=Math.hypot(e.pos[0]-o,e.pos[2]-c);if(v>1e-5&&m<v*.6){const p=e.pos[0],S=e.pos[1],x=e.pos[2],y=s[0],w=s[1],_=s[2],T=()=>{e.pos[0]=p,e.pos[1]=S,e.pos[2]=x,s[0]=y,s[1]=w,s[2]=_};if(e.pos[0]=o,e.pos[1]=l+Cr,e.pos[2]=c,s[0]=h,s[2]=f,e.pos[0]+=h*i,es(n,e,0)&&(s[0]=0),e.pos[2]+=f*i,es(n,e,2)&&(s[2]=0),Za(n,e),Math.hypot(e.pos[0]-o,e.pos[2]-c)<m+v*.3||e.pos[1]>l+Cr+.05)T();else{let M=!1;for(let A=0;A<8&&!M;A++){e.pos[1]-=Cr/8,es(n,e,1)&&(M=!0);const C=e.pos[1];Za(n,e),(e.onGround||e.pos[1]>C+1e-6)&&(M=!0)}!M||e.pos[1]>l+Cr+.001||e.pos[1]<l-.001?T():(s[1]<0&&(s[1]=0),e.onGround=!0)}}}Bv(n,e,i);const u=Di+.05;e.pos[0]=Math.min(n.sizeX-u,Math.max(u,e.pos[0])),e.pos[2]=Math.min(n.sizeZ-u,Math.max(u,e.pos[2]));const g=e.fly?.5-li+.6:.5;e.pos[1]<g&&(e.pos[1]=g,s[1]<0&&(s[1]=0),e.onGround=!e.fly),e.pos[1]>n.sizeY-Jo&&(e.pos[1]=n.sizeY-Jo,s[1]>0&&(s[1]=0))}function Za(n,e){let t=!1;for(let i=0;i<4;i++){let s=!1;for(const r of e.fly?vu:e.crouch?gu:$o){const a=e.pos[0],o=e.pos[1]+r,l=e.pos[2],c=-n.sample(a,o,l);if(c>=Di)continue;n.gradient(a,o,l,en);let h=Math.hypot(en[0],en[1],en[2]),f,d,u;h<1e-4?(f=0,d=1,u=0):(f=-en[0]/h,d=-en[1]/h,u=-en[2]/h);const g=Math.min(Di-c,.35);if(d>.55&&!e.fly)e.pos[1]+=Math.min(g/d,.4),e.vel[1]<0&&(e.vel[1]=0),t=!0;else{e.pos[0]+=f*g,e.pos[1]+=d*g,e.pos[2]+=u*g;const v=e.vel[0]*f+e.vel[1]*d+e.vel[2]*u;v<0&&(e.vel[0]-=v*f,e.vel[1]-=v*d,e.vel[2]-=v*u)}s=!0}if(!s)break}!t&&!e.fly&&-n.sample(e.pos[0],e.pos[1]+$o[0]-.06,e.pos[2])<Di&&e.vel[1]<=.01&&(t=!0),e.onGround=t}function Bv(n,e,t){const i=e.fly?vu[0]:e.crouch?gu[0]:$o[1],s=e.pos[0],r=e.pos[1]+i,a=e.pos[2];let o=-n.sample(s,r,a),l=0,c=0,h=0;if(o<Ps){n.gradient(s,r,a,en);const m=Math.hypot(en[0],en[1],en[2]);m<1e-4?o=1/0:(l=-en[0]/m,c=-en[1]/m,h=-en[2]/m)}const f=Uv(n,s,r,a,Ps);if(f&&f[0]<o&&(o=f[0],l=f[1],c=f[2],h=f[3]),o>=Ps||o<Di-.2||!e.fly&&c>.6)return;const d=Math.min(1,(Ps-Math.max(o,Di))/(Ps-Di)),u=e.vel,g=Math.exp(-t*_v*d*(e.fly?.3:1));u[0]*=g,u[2]*=g,e.fly&&(u[1]*=g);const v=Sv*d*t;u[0]+=l*v,e.fly&&(u[1]+=c*v),u[2]+=h*v}function Uv(n,e,t,i,s){const r=[Math.floor((e-s)/R),Math.floor((t-s)/R),Math.floor((i-s)/R)],a=[Math.floor((e+s)/R),Math.floor((t+s)/R),Math.floor((i+s)/R)];let o=s,l=0,c=1,h=0,f=!1;const d=R/Ct,u=(g,v,m,p)=>{const S=Math.max(g,Math.min(e,g+p)),x=Math.max(v,Math.min(t,v+p)),y=Math.max(m,Math.min(i,m+p)),w=e-S,_=t-x,T=i-y,b=Math.hypot(w,_,T);b>=o||(o=b,f=!0,b>1e-5?(l=w/b,c=_/b,h=T/b):(l=0,c=1,h=0))};for(let g=r[0];g<=a[0];g++)for(let v=r[1];v<=a[1];v++)for(let m=r[2];m<=a[2];m++){if(!ft(n.getHard(g,v,m)))continue;const p=n.subMask(g,v,m);if(p===Zt){u(g*R,v*R,m*R,R);continue}for(let S=0;S<Ct;S++)for(let x=0;x<Ct;x++)for(let y=0;y<Ct;y++)p&1<<y+3*(x+3*S)&&u(g*R+y*d,v*R+x*d,m*R+S*d,d)}return f?[o,l,c,h]:null}const Dr=.12;function es(n,e,t){const i=e.fly?li-.3:0,s=e.fly?li+.15:e.crouch?Ev:Jo,r=[e.pos[0]-Dr,e.pos[1]+i,e.pos[2]-Dr],a=[e.pos[0]+Dr,e.pos[1]+s,e.pos[2]+Dr],o=r.map(f=>Math.floor(f/R)),l=a.map(f=>Math.floor((f-1e-4)/R)),c=t===1?e.pos[1]+(i+s)*.5:e.pos[t],h=(f,d)=>{for(let u=0;u<3;u++)if(d[u]<=r[u]||f[u]>=a[u])return!1;return c<(f[t]+d[t])*.5?e.pos[t]-=a[t]-f[t]+1e-4:e.pos[t]+=d[t]-r[t]+1e-4,!0};for(let f=o[0];f<=l[0];f++)for(let d=o[1];d<=l[1];d++)for(let u=o[2];u<=l[2];u++){if(!ft(n.getHard(f,d,u)))continue;const g=n.subMask(f,d,u);if(g===Zt){if(h([f*R,d*R,u*R],[(f+1)*R,(d+1)*R,(u+1)*R]))return!0;continue}const v=R/Ct;for(let m=0;m<Ct;m++)for(let p=0;p<Ct;p++)for(let S=0;S<Ct;S++){if(!(g&1<<S+3*(p+3*m)))continue;const x=[f*R+S*v,d*R+p*v,u*R+m*v];if(h(x,[x[0]+v,x[1]+v,x[2]+v]))return!0}}return!1}function Ms(n,e,t){for(let i=n.sizeY-1;i>0;i-=.25)if(n.sample(e,i,t)>0||ft(n.hardAt(e,i,t))&&n.hardOccupiedAt(e,i,t))return i+.25;return 1}function Nv(n){let e=0;const{nx:t,ny:i,nz:s}=n;for(let r=0;r<t-1;r++)for(let a=0;a<i-1;a++)for(let o=0;o<s-1;o++){const l=n.index(r,a,o),c=n.hard[l];if(c===0||Hn(c))continue;const h=n.sub[l]===0?Zt:n.sub[l];for(let f=0;f<=1;f++)for(let d=0;d<=1;d++)for(let u=0;u<=1;u++){const g=1<<f*2+3*(d*2+3*(u*2));if(!(h&g))continue;const v=n.index(r+f,a+d,o+u);n.density[v]<=0&&(n.density[v]=nt*.5,n.material[v]=c)}n.hard[l]=0,n.sub[l]=0,e++}return e}const ja=60,Fv=.08,zv=.05,Ov=3e3,Kc=4,Ja=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]];function ts(n){return Et[n]?.repose!==void 0}class kv{constructor(e,t){this.field=e,this.seaLevel=t}queue=[];queued=new Set;get pending(){return this.queue.length}wake(e){const t=this.field;for(let i=Math.max(0,e.x0-1);i<=Math.min(t.nx-1,e.x1+1);i++)for(let s=Math.max(0,e.z0-1);s<=Math.min(t.nz-1,e.z1+1);s++)this.wakeColumn(i,s)}wakeColumn(e,t){const i=e*this.field.nz+t;this.queued.has(i)||(this.queued.add(i),this.queue.push(i))}wakeAround(e,t){const i=this.field;this.wakeColumn(e,t);for(const[s,r]of Ja){const a=e+s,o=t+r;a>=0&&o>=0&&a<i.nx&&o<i.nz&&this.wakeColumn(a,o)}}clear(){this.queue=[],this.queued.clear()}hardAt(e,t,i){const s=this.field,r=s.hard;for(let a=Math.max(0,e-1);a<=Math.min(s.nx-2,e);a++)for(let o=Math.max(0,i-1);o<=Math.min(s.nz-2,i);o++)for(let l=Math.max(0,t-1);l<=Math.min(s.ny-2,t);l++)if(ft(r[s.index(a,l,o)]))return!0;return!1}top(e,t){const i=this.field,s=i.density;for(let r=i.ny-1;r>=0;r--){const a=i.index(e,r,t);if(s[a]>0){let o=r;if(r+1<i.ny){const c=s[a],h=s[i.index(e,r+1,t)];h<=0&&(o=r+c/(c-h))}const l=o*R<this.seaLevel+.3||i.water[a]!==0||r+1<i.ny&&i.water[i.index(e,r+1,t)]!==0;return{h:o,sand:ts(i.material[a]),wet:l,y:r}}if(this.hardAt(e,r,t))return{h:r,sand:!1,wet:r*R<this.seaLevel+.3,y:r}}return{h:0,sand:!1,wet:!1,y:0}}intervals(e,t,i,s){const r=this.field,a=r.density,o=[];let l=NaN;const c=h=>a[r.index(e,h,t)];c(i)>0&&(l=i-c(i)/R);for(let h=i;h<s;h++){const f=c(h),d=c(h+1);f>0&&d<=0?(o.push(l,h+f/(f-d)),l=NaN):f<=0&&d>0&&(l=h+f/(f-d))}return Number.isNaN(l)||o.push(l,s+Math.max(0,c(s))/R),o}rewrite(e,t,i,s,r,a){const o=this.field,l=o.density,c=o.material;for(let h=i;h<=s;h++){let f=!1,d=1/0;for(let m=0;m<r.length;m+=2){const p=r[m],S=r[m+1];h>=p&&h<=S&&(f=!0),d=Math.min(d,Math.abs(h-p),Math.abs(h-S))}const u=o.index(e,h,t),g=l[u],v=(f?1:-1)*Math.min(d*R,nt);g<=0&&v>0&&(c[u]=a),l[u]=v}}slope(e,t){const i=e.wet?ja:Et[t]?.repose??ja;return Math.tan(i*Math.PI/180)}wetAt(e,t,i){const s=this.field,r=Math.max(0,Math.min(s.ny-1,Math.floor(t)));return t*R<this.seaLevel+.3||s.water[s.index(e,r,i)]!==0||r+1<s.ny&&s.water[s.index(e,r+1,i)]!==0}step(){const e=this.field,t=e.material,i=Math.min(Ov,this.queue.length);if(!i)return null;const s=this.queue.splice(0,i);for(const d of s)this.queued.delete(d);const r=new Map,a=(d,u)=>{const g=d*e.nz+u;let v=r.get(g);return v||(v=this.intervals(d,u,0,e.ny-2),r.set(g,v)),v},o=new Map,l=(d,u,g,v)=>{let m=o.get(d);m||(m=new Map,o.set(d,m));const p=m.get(u);p?(p[0]+=g,g>0&&p[1]===0&&(p[1]=v)):m.set(u,[g,v])};let c=null;const h=(d,u,g,v)=>{c=c?{x0:Math.min(c.x0,d),y0:Math.min(c.y0,u),z0:Math.min(c.z0,v),x1:Math.max(c.x1,d),y1:Math.max(c.y1,g),z1:Math.max(c.z1,v)}:{x0:d,y0:u,z0:v,x1:d,y1:g,z1:v}};for(const d of s){const u=Math.floor(d/e.nz),g=d%e.nz,v=a(u,g);for(let m=0;m<v.length;m+=2){const p=v[m+1],S=Math.min(e.ny-2,Math.floor(p)),x=t[e.index(u,S,g)];if(!ts(x))continue;const y=Math.tan((this.wetAt(u,p,g)?ja:Et[x].repose)*Math.PI/180);let w=0;const _=[];for(const[M,A,C]of Ja){const P=u+M,F=g+A;if(P<0||F<0||P>=e.nx||F>=e.nz)continue;const z=a(P,F);let G=0;for(let B=z.length-2;B>=0;B-=2)if(z[B]<=p+.5){G=z[B+1];break}const L=(p-G)*R-y*C*R;L<=.01||(_.push([P*e.nz+F,Math.floor(G),L*.5]),w+=L*.5)}if(!_.length)continue;const T=Math.min(1,Fv/w)/R;let b=0;for(const[M,A,C]of _){const P=C*T;l(M,A,P,x),b+=P}l(d,Math.floor(p),-b,x)}}for(const[d,u]of o)for(const[g,[v,m]]of u){if(Math.abs(v)<1e-4)continue;const p=Math.floor(d/e.nz),S=d%e.nz,x=Math.max(0,Math.floor(g+Math.min(0,v))-Kc),y=Math.min(e.ny-2,Math.ceil(g+1+Math.max(0,v))+Kc),w=this.intervals(p,S,x,y);let _=-1,T=1/0;for(let M=1;M<w.length;M+=2){const A=Math.abs(w[M]-g-.5);A<T&&A<=1.01&&(T=A,_=M)}if(_>=0)w[_]=Math.max(w[_-1]+.02,w[_]+v);else if(v>0)w.push(g,g+v),w.sort((M,A)=>M-A);else continue;const b=t[e.index(p,Math.min(e.ny-2,g),S)];this.rewrite(p,S,x,y,w,ts(b)?b:m||this.sandFrom(p,S,o,t)),h(p,x,y,S),this.wakeAround(p,S)}for(const d of s){const u=Math.floor(d/e.nz),g=d%e.nz,v=this.intervals(u,g,0,e.ny-2);for(let m=2;m<v.length;m+=2){const p=v[m],S=v[m+1],x=v[m-1],y=p-x;if(y<=.02)continue;const w=Math.ceil(p);if(w>e.ny-2||!ts(t[e.index(u,w,g)])||this.hardAt(u,Math.floor(p),g))continue;let _=w;for(;_+1<=Math.floor(S)&&ts(t[e.index(u,_+1,g)]);)_++;const T=_+1<=Math.floor(S)?_+.5:S,b=Math.min(1,y),M=v.slice(0,m);M.push(p-b,T-b),T<S&&M.push(T,S);for(let P=m+2;P<v.length;P++)M.push(v[P]);const A=Math.max(0,Math.floor(p-b)-1),C=Math.min(e.ny-2,Math.ceil(S)+1);this.rewrite(u,g,A,C,M,t[e.index(u,w,g)]),h(u,A,C,g),this.wakeAround(u,g);break}}if(!c)return null;const f=c;return{x0:Math.max(0,f.x0-1),y0:Math.max(0,f.y0-1),z0:Math.max(0,f.z0-1),x1:Math.min(e.nx-1,f.x1+1),y1:Math.min(e.ny-1,f.y1+1),z1:Math.min(e.nz-1,f.z1+1)}}sandFrom(e,t,i,s){const r=this.field;let a=0,o=0;for(const[l,c]of Ja){const h=e+l,f=t+c;if(h<0||f<0||h>=r.nx||f>=r.nz)continue;const d=i.get(h*r.nz+f);if(d){for(const[u,[g]]of d)if(g<a){const v=s[r.index(h,Math.min(r.ny-2,u),f)];ts(v)&&(a=g,o=v)}}}if(o)return o;for(const l of Et)if(l.repose!==void 0)return l.id;return 0}settle(e=2e3){let t=0;for(;t<e&&this.queue.length;)t++,this.step();return t}}const Ks=8,Gv=Ks,Zc=Ks+1,Hv=Ks+2,Vv={length:1.25,height:.95,width:.5},Wv={goat:Vv,penguin:{length:.45,height:.66,width:.4},fish:{length:.5,height:.3,width:.25,centred:!0},cat:{length:.8,height:.42,width:.3}},Xv={walk:1.4,run:4.2,turn:2.6,flee:4.5,calm:10,probe:1,cliff:1.6,wall:.75,grazeOdds:.35},Yv={walk:.8,run:2.2,turn:2.2,flee:3.2,calm:8,probe:.7,cliff:1,wall:.5,grazeOdds:.3},Qv={walk:1.1,run:3.6,turn:4,flee:0,calm:0,probe:.8,cliff:1.4,wall:.6,grazeOdds:0},vn={swim:.7,dash:2.6,turn:3,flee:3.5,calm:7,probe:.6,school:6,close:2.2},Rr=2.2,jc=12,qv=15,Jc=20;function Mu(n){return n==="fish"}function el(n,e,t,i,s,r,a,o=0){const l=a??Ms(n,t,i),c=xu(t,Mu(e)?l:l+.05,i);return c.crouch=!0,{id:r,kind:e,body:c,yaw:o,yawTarget:o,pitch:0,pitchTarget:0,seed:s,phase:0,mood:"wander",timer:0,speed:0,bored:0,detour:0}}function $c(n){return{kind:n.kind,x:n.body.pos[0],y:n.body.pos[1],z:n.body.pos[2],yaw:n.yaw,seed:n.seed}}function Kv(n,e,t){return el(n,e.kind,e.x,e.z,e.seed,t,e.y,e.yaw)}function Zv(n,e,t,i){for(let s=t+1.2;s>t-3;s-=.15)if(n.sample(e,s,i)>0||n.solidAt(e,s,i))return s+.15;return null}function jv(n){if(n.kind==="cat"){if(n.mood==="rest"||n.mood==="graze")return Zc}else if(n.mood==="graze")return Zc;return n.mood==="flop"?Math.floor(n.phase%1*Ks):n.speed<(n.kind==="fish"?.15:.2)?Gv:Math.floor(n.phase%1*Ks)}function yu(n,e,t){let i=n.yawTarget-n.yaw;i=Math.atan2(Math.sin(i),Math.cos(i));const s=e*t;return n.yaw+=Math.max(-s,Math.min(s,i)),i}function Jv(n,e,t,i,s,r,a,o,l){const c=e.body.pos,h=c[0]-s[0],f=c[2]-s[2],d=Math.hypot(h,f);if(e.kind==="cat"?(e.bored=Math.max(0,e.bored-i),e.detour=Math.max(0,e.detour-i),e.bored<=0&&d<jc&&e.mood!=="follow"&&d>Rr&&(e.mood="follow",e.timer=qv,e.detour=0),e.mood==="follow"?(e.detour<=0&&(e.yawTarget=Math.atan2(h,f)),d<Rr?(e.mood="rest",e.timer=4+r()*6):(e.timer<=0||d>jc*1.5)&&(e.mood="wander",e.timer=2+r()*3,e.bored=Jc)):e.mood==="rest"&&d<Rr&&(e.yawTarget=Math.atan2(h,f))):(d<t.flee&&e.mood!=="flee"&&(e.mood="flee",e.timer=2+r()*2),e.mood==="flee"&&(e.yawTarget=Math.atan2(-h,-f),d>t.calm&&e.timer<=0&&(e.mood="wander",e.timer=1+r()*3))),e.timer-=i,e.timer<=0&&e.mood!=="flee"&&e.mood!=="follow"){const y=r();e.mood==="rest"&&e.kind==="cat"&&e.bored<=0&&d<Rr?(e.timer=3+r()*4,e.bored=e.timer>6?Jc:0):y<.45?(e.mood="wander",e.timer=2+r()*5,e.yawTarget=e.yaw+(r()-.5)*Math.PI,e.kind==="cat"&&(e.bored=Math.max(e.bored,3))):y<.45+t.grazeOdds?(e.mood="graze",e.timer=2+r()*4,a.push({kind:"graze",x:c[0],y:c[1],z:c[2]})):(e.mood="rest",e.timer=3+r()*5)}const u=y=>{const w=-Math.sin(y),_=-Math.cos(y),T=c[0]+w*t.probe,b=c[2]+_*t.probe;if(T<2||b<2||T>o-2||b>l-2)return!1;const M=Zv(n,T,c[1],b);return!(M===null||c[1]-M>t.cliff||M-c[1]>t.wall||n.waterAt(T,M-.1,b)||n.waterAt(T,M+.3,b))},g=e.mood==="flee"?t.run:e.mood==="follow"?d>7?t.run:t.walk:e.mood==="wander"?t.walk:0;if(g>0&&!u(e.yawTarget))if(e.mood==="follow"){const y=r()<.5?1:-1;let w=!1;for(const _ of[.7,1.4,2.1])for(const T of[y,-y])!w&&u(e.yawTarget+_*T)&&(e.yawTarget+=_*T,e.detour=.7,w=!0);w||(e.mood="wander",e.timer=2,e.bored=6)}else e.yawTarget+=(r()<.5?1:-1)*(Math.PI*.5+r()*.5),e.mood==="wander"&&(e.timer=Math.max(e.timer,1.5));const v=yu(e,t.turn,i),m=Math.max(0,Math.cos(v)),p=g*(.3+.7*m);e.speed+=(p-e.speed)*Math.min(1,i*6);const S=-Math.sin(e.yaw)*e.speed,x=-Math.cos(e.yaw)*e.speed;Tl(n,e.body,{wishX:S,wishZ:x,wishY:0,jump:!1,dt:i}),e.phase+=e.speed/t.walk*i*(e.kind==="penguin"?1.8:1.3)}function os(n,e,t,i){return n.waterAt(e,t,i)&&!n.solidAt(e,t,i)}function $v(n,e,t,i,s,r,a,o){const l=e.body.pos;if(!n.waterAt(l[0],l[1],l[2])){e.mood!=="flop"&&(e.mood="flop",e.timer=0),e.speed=0,e.pitch=0,e.body.fly=!1,Tl(n,e.body,{wishX:0,wishZ:0,wishY:0,jump:!1,dt:i}),e.timer-=i,e.timer<=0&&(e.timer=.6+r()*2,e.yaw+=(r()-.5)*1.5),e.phase+=i*(e.timer<.3?6:.5);return}e.mood==="flop"&&(e.mood="wander",e.timer=0);const c=l[0]-s[0],h=l[1]-s[1]-1.2,f=l[2]-s[2],d=Math.hypot(c,h,f);if(d<vn.flee&&e.mood!=="flee"&&(e.mood="flee",e.timer=1.5+r()*1.5),e.mood==="flee"&&(e.yawTarget=Math.atan2(-c,-f),e.pitchTarget=Math.max(-.5,Math.min(.5,Math.atan2(h,Math.hypot(c,f))*.5)),d>vn.calm&&e.timer<=0&&(e.mood="wander",e.timer=1+r()*3)),e.timer-=i,e.timer<=0&&e.mood!=="flee"&&(r()<.6?(e.mood="wander",e.timer=2+r()*5,e.yawTarget=e.yaw+(r()-.5)*Math.PI,e.pitchTarget=(r()-.5)*.5):(e.mood="rest",e.timer=2+r()*4,e.pitchTarget=0),e.mood==="wander")){let A=0,C=0,P=0,F=0;for(const z of t){if(z===e||z.kind!==e.kind)continue;Math.hypot(z.body.pos[0]-l[0],z.body.pos[1]-l[1],z.body.pos[2]-l[2])<vn.school&&(A+=z.body.pos[0],C+=z.body.pos[1],P+=z.body.pos[2],F++)}if(F){A/=F,C/=F,P/=F;const z=Math.hypot(A-l[0],P-l[2]);z>vn.close&&(e.yawTarget=Math.atan2(-(A-l[0]),-(P-l[2]))+(r()-.5)*.6,e.pitchTarget=Math.max(-.4,Math.min(.4,Math.atan2(C-l[1],z))))}}os(n,l[0],l[1]+.35,l[2])||(e.pitchTarget=Math.min(e.pitchTarget,-.35)),os(n,l[0],l[1]-.35,l[2])||(e.pitchTarget=Math.max(e.pitchTarget,.35));const u=e.mood==="flee"?vn.dash:e.mood==="wander"?vn.swim:.1,g=-Math.sin(e.yawTarget)*Math.cos(e.pitchTarget),v=Math.sin(e.pitchTarget),m=-Math.cos(e.yawTarget)*Math.cos(e.pitchTarget),p=l[0]+g*vn.probe,S=l[1]+v*vn.probe,x=l[2]+m*vn.probe;(p<2||x<2||p>a-2||x>o-2||!os(n,p,S,x))&&(e.yawTarget+=(r()<.5?1:-1)*(Math.PI*.5+r()*.6),e.mood==="wander"&&(e.timer=Math.max(e.timer,1)));const y=yu(e,vn.turn,i);e.pitch+=Math.max(-1.5*i,Math.min(1.5*i,e.pitchTarget-e.pitch));const w=Math.max(0,Math.cos(y));e.speed+=(u*(.3+.7*w)-e.speed)*Math.min(1,i*4);const _=-Math.sin(e.yaw)*Math.cos(e.pitch)*e.speed*i,T=Math.sin(e.pitch)*e.speed*i,b=-Math.cos(e.yaw)*Math.cos(e.pitch)*e.speed*i;os(n,l[0]+_,l[1]+T,l[2]+b)?(l[0]+=_,l[1]+=T,l[2]+=b):(e.speed*=.5,e.yawTarget+=(r()<.5?1:-1)*1.2),e.phase+=(.6+e.speed/vn.swim)*i*1.4}function ex(n,e,t,i,s){const r=[],a=(n.nx-1)*R,o=(n.nz-1)*R;for(const l of e)l.kind==="fish"?$v(n,l,e,t,i,s,a,o):Jv(n,l,l.kind==="goat"?Xv:l.kind==="penguin"?Yv:Qv,t,i,s,r,a,o);return r}function eh(n,e,t,i,s,r,a="goat"){const o=[],l=(n.nx-1)*R,c=(n.nz-1)*R;let h=0;for(;o.length<i&&h++<i*60;){const f=4+s()*(l-8),d=4+s()*(c-8),u=Ms(n,f,d);if(u<e+.5)continue;const g=n.getMaterial(Math.floor(f/R),Math.floor((u-.2)/R),Math.floor(d/R));r.includes(g)&&o.push({kind:a,x:f,y:u,z:d,yaw:s()*Math.PI*2,seed:Math.floor(s()*1e9)^t})}return o}function tx(n,e,t,i,s){for(let r=0;r<8;r++){const a=r/8*Math.PI*2;for(const o of[s*.5,s])if(n.waterAt(e+Math.cos(a)*o,i-.25,t+Math.sin(a)*o))return!0}return!1}function nx(n,e,t,i,s,r){const a=[],o=(n.nx-1)*R,l=(n.nz-1)*R;let c=null;for(let f=0;f<400&&!c;f++){const d=4+s()*(o-8),u=4+s()*(l-8),g=Ms(n,d,u);if(g<e+.1||g>e+4)continue;const v=n.getMaterial(Math.floor(d/R),Math.floor((g-.2)/R),Math.floor(u/R));!r.includes(v)||!tx(n,d,u,e,5)||(c=[d,u])}if(!c)return a;let h=0;for(;a.length<i&&h++<i*40;){const f=c[0]+(s()-.5)*10,d=c[1]+(s()-.5)*10;if(f<3||d<3||f>o-3||d>l-3)continue;const u=Ms(n,f,d);u<e+.1||u>e+5||n.waterAt(f,u-.1,d)||n.waterAt(f,u+.3,d)||a.push({kind:"penguin",x:f,y:u,z:d,yaw:s()*Math.PI*2,seed:Math.floor(s()*1e9)^t})}return a}function th(n,e,t,i){let s=0;for(;s<30&&os(n,e,i-.25-s,t);)s+=.25;return s}function ix(n,e,t,i,s){const r=[],a=(n.nx-1)*R,o=(n.nz-1)*R;let l=null;for(let h=0;h<400&&!l;h++){const f=4+s()*(a-8),d=4+s()*(o-8);th(n,f,d,e)>=1.5&&(l=[f,d])}if(!l)return r;let c=0;for(;r.length<i&&c++<i*40;){const h=l[0]+(s()-.5)*6,f=l[1]+(s()-.5)*6;if(h<3||f<3||h>a-3||f>o-3)continue;const d=th(n,h,f,e);if(d<.9)continue;const u=e-.4-s()*(d-.7);os(n,h,u,f)&&r.push({kind:"fish",x:h,y:u,z:f,yaw:s()*Math.PI*2,seed:Math.floor(s()*1e9)^t})}return r}function sx(n,e,t,i){const s=n.body.pos,r=Wv[n.kind],a=r.width*.5+.1,o=r.centred?s[1]-r.height*.5:s[1],l=o+Math.min(a,r.height*.5),c=o+Math.max(r.height-a,r.height*.5);let h=null;for(let f=0;f<=6;f++){const d=l+(c-l)*f/6,u=s[0]-e[0],g=d-e[1],v=s[2]-e[2],m=u*t[0]+g*t[1]+v*t[2];if(m<0||m>i)continue;const p=u-t[0]*m,S=g-t[1]*m,x=v-t[2]*m;p*p+S*S+x*x<=a*a&&(h===null||m<h)&&(h=m-a*.5)}return h}const rx=120,nh=80,ax=12,ox=24,lx=5,Ir=[.3,.62,1];class cx{constructor(e,t,i){this.gen=e,this.sites=e.treeSites(t,i),this.state=this.sites.map(()=>({next:-1,stage:-1}))}sites;state;cursor=0;lastCheck=-1/0;stageOf(e){return Math.max(0,this.state[e].stage)}get standingCount(){return this.state.filter(e=>e.stage>=Ir.length).length}step(e,t,i,s){const r=[];if(t-this.lastCheck<lx||!this.sites.length)return r;this.lastCheck=t;for(let a=0;a<ox&&a<this.sites.length;a++){const o=this.cursor;this.cursor=(this.cursor+1)%this.sites.length;const l=this.sites[o],c=this.state[o],h=this.gen.siteGround(e,l),f=this.gen.treeGrowth(e,l,h);if(c.stage>=Ir.length&&f>0)continue;if(f>=.85){c.stage=Ir.length,c.next=-1;continue}const d=f<=0?0:f<.5?1:2;if(c.stage!==d||c.next<0){c.stage=d,c.next=t+(d===0?rx:nh)*(.7+s()*.6);continue}if(t<c.next||Math.hypot(l.x-i[0],l.z-i[2])<ax)continue;if(!this.gen.siteFree(e,l,h)){c.next=t+60;continue}const u=this.gen.plantTreeAt(e,l,Ir[d],h);u&&r.push(u),c.stage=d+1,c.next=t+nh*(.7+s()*.6)}return r}}const hx="splinecraft",di="chunks",Ot="worlds",Xn=n=>String(n);async function ih(n,e){const t=await qn();t&&await new Promise(i=>{const s=t.transaction(Ot,"readwrite"),r=s.objectStore(Ot),a=Xn(n),o=r.get(a);o.onsuccess=()=>{const l=o.result;l&&r.put({...l,animals:e,updatedAt:Date.now()})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}function qn(){return new Promise(n=>{try{const e=indexedDB.open(hx,2);e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(di)||t.createObjectStore(di),t.objectStoreNames.contains(Ot)||t.createObjectStore(Ot,{keyPath:"id"})},e.onsuccess=()=>n(e.result),e.onerror=()=>n(null),e.onblocked=()=>n(null)}catch{n(null)}})}const ux=(n,e,t,i)=>`${n}/${e},${t},${i}`,Au=n=>IDBKeyRange.bound(`${n}/`,`${n}/￿`);async function dx(n){if(typeof CompressionStream>"u")return{deflated:!1,blob:n};try{const e=new CompressionStream("deflate-raw"),t=e.writable.getWriter();return t.write(n),t.close(),{deflated:!0,blob:new Uint8Array(await new Response(e.readable).arrayBuffer())}}catch{return{deflated:!1,blob:n}}}async function fx(n,e){if(!e)return n;const t=new DecompressionStream("deflate-raw"),i=t.writable.getWriter();return i.write(n),i.close(),new Uint8Array(await new Response(t.readable).arrayBuffer())}async function px(n){const e=n.n*n.n*n.n,t=n.sub!==null,i=n.water!==null&&n.water!==void 0,s=new Uint8Array(e*2+e+e+(t?e*4:0)+(i?e:0));let r=0;s.set(new Uint8Array(n.density.buffer,n.density.byteOffset,e*2),r),r+=e*2,s.set(n.material,r),r+=e,s.set(n.hard,r),r+=e,t&&(s.set(new Uint8Array(n.sub.buffer,n.sub.byteOffset,e*4),r),r+=e*4),i&&(s.set(n.water,r),r+=e);const{deflated:a,blob:o}=await dx(s);return{v:2,cx:n.cx,cy:n.cy,cz:n.cz,n:n.n,deflated:a,hasSub:t,hasWater:i,blob:o}}async function mx(n){const e=n.n*n.n*n.n,t=await fx(n.blob,n.deflated);let i=0;const s=new Int16Array(t.slice(i,i+e*2).buffer);i+=e*2;const r=t.slice(i,i+e);i+=e;const a=t.slice(i,i+e);i+=e;let o=null;n.hasSub&&(o=new Uint32Array(t.slice(i,i+e*4).buffer),i+=e*4);let l=null;return n.hasWater&&(l=t.slice(i,i+e),i+=e),{cx:n.cx,cy:n.cy,cz:n.cz,n:n.n,density:s,material:r,hard:a,sub:o,water:l}}async function gx(n){const e=await qn();if(!e)return[];const t=await new Promise(s=>{const r=[],a=e.transaction(di,"readonly"),o=a.objectStore(di).openCursor(Au(Xn(n)));o.onsuccess=()=>{const l=o.result;if(!l){s(r);return}r.push(l.value),l.continue()},o.onerror=()=>s(r),a.onerror=()=>s(r)}),i=[];for(const s of t){const r=s;if(r&&r.v===2&&r.blob)try{i.push(await mx(r))}catch{}else r&&r.density&&r.material&&r.hard&&i.push(r)}return i}async function sh(n,e){const t=await qn();if(!t)return!1;const i=await Promise.all(e.map(px));return new Promise(s=>{const r=t.transaction([di,Ot],"readwrite"),a=r.objectStore(di),o=Xn(n);for(const h of i)a.put(h,ux(o,h.cx,h.cy,h.cz));const l=r.objectStore(Ot),c=l.get(o);c.onsuccess=()=>{const h=c.result??{id:o,name:bl(n),seed:n,createdAt:Date.now(),updatedAt:0,edited:0};l.put({...h,updatedAt:Date.now(),edited:(h.edited??0)+e.length})},r.oncomplete=()=>s(!0),r.onerror=()=>s(!1),r.onabort=()=>s(!1)})}async function $a(n,e){const t=await qn();return t?new Promise(i=>{const s=t.transaction(Ot,"readwrite"),r=s.objectStore(Ot),a=Xn(n),o=r.get(a);o.onsuccess=()=>{const l=o.result;l&&r.put({...l,bodies:e,updatedAt:Date.now()})},s.oncomplete=()=>i(!0),s.onerror=()=>i(!1),s.onabort=()=>i(!1)}):!1}const bl=n=>`World ${n}`;async function vx(){const n=await qn();return n?new Promise(e=>{const t=n.transaction(Ot,"readonly"),i=t.objectStore(Ot).getAll();i.onsuccess=()=>e((i.result??[]).sort((s,r)=>r.updatedAt-s.updatedAt)),i.onerror=()=>e([]),t.onerror=()=>e([])}):[]}async function xx(n){const e=await qn();return e?new Promise(t=>{const i=e.transaction(Ot,"readonly"),s=i.objectStore(Ot).get(Xn(n));s.onsuccess=()=>t(s.result??null),s.onerror=()=>t(null),i.onerror=()=>t(null)}):null}async function Mx(n,e){const t=await qn();return t?new Promise(i=>{const s=t.transaction(Ot,"readwrite"),r=s.objectStore(Ot),a=Xn(n),o=r.get(a);let l=null;o.onsuccess=()=>{const c=o.result??{id:a,name:bl(n),seed:n,createdAt:Date.now(),updatedAt:0,edited:0,chunks:e};l={...c,chunks:c.chunks??e,updatedAt:Date.now()},r.put(l)},s.oncomplete=()=>i(l),s.onerror=()=>i(null),s.onabort=()=>i(null)}):null}async function yx(n,e){const t=await qn();t&&await new Promise(i=>{const s=t.transaction(Ot,"readwrite"),r=s.objectStore(Ot),a=Xn(n),o=r.get(a);o.onsuccess=()=>{const l=o.result??{id:a,name:e,seed:n,createdAt:Date.now(),updatedAt:Date.now(),edited:0};r.put({...l,name:e.trim()||bl(n)})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}async function rh(n){const e=await qn();e&&await new Promise(t=>{const i=e.transaction([di,Ot],"readwrite");i.objectStore(di).delete(Au(Xn(n))),i.objectStore(Ot).delete(Xn(n)),i.oncomplete=()=>t(),i.onerror=()=>t(),i.onabort=()=>t()})}const sa=40,Su=72,_u=30,wu=10,Ax=10,Sx=pe*R*Math.sqrt(3)/2,_x=2;function wx(n,e){return e==="low"||n<=0?1/0:e==="medium"?n===1?sa:-1/0:n===1?Su:n===2?_u:-1/0}function Ex(n,e,t){if(t==="low")return 0;const i=s=>e>=s?wu:0;return t==="medium"?n<sa+i(1)?1:0:n<_u+i(2)?2:n<Su+i(1)?1:0}function Tx(n,e){if(n<=0)return 0;const t=wx(n,e);return Number.isFinite(t)?Math.max(1,t-Sx-_x):0}/**
 * postprocessing v6.39.2 build Sun Jun 28 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var bx=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Ht;return t.setAttribute("position",new Ze(n,3)),t.setAttribute("uv",new Ze(e,2)),t})(),kt=class tl{static get fullscreenGeometry(){return bx}constructor(e="Pass",t=new Li,i=new ys){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new vt(tl.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Li),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=_n){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof at||t instanceof Qn||t instanceof Lt||t instanceof tl)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Cx=class extends kt{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){const r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},Dx=`#ifdef COLOR_WRITE
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
}`,Cl="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Eu=class extends rt{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new oe(null),depthBuffer:new oe(null),channelWeights:new oe(null),opacity:new oe(1)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Dx,vertexShader:Cl}),this.depthFunc=Zr}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},Tu=class extends kt{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new Eu,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new at(1,1,{minFilter:tt,magFilter:tt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==yt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===st&&(this.renderTarget.texture.colorSpace=st))}},ah=new Ye,Dl=class extends kt{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),l=r!==null,c=a>=0;l?(n.getClearColor(ah),n.setClearColor(r,c?a:o)):c&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),l?n.setClearColor(ah,o):c&&n.setClearAlpha(o)}},Rx=class extends kt{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new Dl(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){const r=n.getContext(),a=n.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,h=this.inverted?0:1,f=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,h,4294967295),a.stencil.setClear(f),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(n,null):(c.render(n,e),c.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,l)):(n.setRenderTarget(e),n.render(o,l),n.setRenderTarget(t),n.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},eo=1/1e3,Ix=1e3,Px=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*eo}get fixedDelta(){return this._fixedDelta*eo}set fixedDelta(n){this._fixedDelta=n*Ix}get elapsed(){return this._elapsed*eo}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Lx=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Tu,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new Px,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples}set multisampling(n){const e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new me),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===yt&&n.outputColorSpace===st&&(this.inputBuffer.texture.colorSpace=st,this.outputBuffer.texture.colorSpace=st,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=this.inputBuffer,e=new oa;this.depthTexture=e,n.stencilBuffer?(e.format=ps,e.type=fs):e.type=tn;const t=e.clone();return t.name="EffectComposer.StableDepth",this.depthRenderTarget=new at(n.width,n.height,{depthBuffer:!0,stencilBuffer:n.stencilBuffer,depthTexture:t}),t}blitDepthBuffer(n){const e=this.renderer,t=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(t);const r=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,o=n.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){const s=this.renderer,r=s===null?new me:s.getDrawingBufferSize(new me),a={minFilter:tt,magFilter:tt,stencilBuffer:e,depthBuffer:n,type:t},o=new at(r.width,r.height,a);return i>0&&(o.samples=i),t===yt&&s!==null&&s.outputColorSpace===st&&(o.texture.colorSpace=st),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new me),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(s.width,s.height),n.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(n of t)n.setDepthTexture(o)}else{const o=this.depthRenderTarget.depthTexture;n.setDepthTexture(o)}}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(o,l)=>o||l.needsDepthTexture;if(!e.reduce(r,!1)){const o=this.depthRenderTarget.depthTexture;n.getDepthTexture()===o&&n.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,r,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(i.depthTexture=this.depthTexture,s.depthTexture=null,o.render(e,i,s,n,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){t.renderToScreen=o.renderToScreen;const l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),t.render(e,i,s,n,a),c.setFunc(l.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof Rx?a=!0:o instanceof Cx&&(a=!1)}}setSize(n,e,t){const i=this.renderer,s=i.getSize(new me);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);const r=i.getDrawingBufferSize(new me);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),kt.fullscreenGeometry.dispose()}},Rn={NONE:0,DEPTH:1,CONVOLUTION:2},et={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Bx=class{constructor(){this.shaderParts=new Map([[et.FRAGMENT_HEAD,null],[et.FRAGMENT_MAIN_UV,null],[et.FRAGMENT_MAIN_IMAGE,null],[et.VERTEX_HEAD,null],[et.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Rn.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ui}},to=!1,oh=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Gt:t=this.materialsFlatShadedDoubleSide;break;case Rt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Gt:t=this.materialsDoubleSide;break;case Rt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof rt))return n.clone();const e=n.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const i=n.clone();for(const s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=In;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Rt,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Gt,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Rt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Gt,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,to){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return to}static set workaroundEnabled(n){to=n}},ni=-1,It=class extends Yn{constructor(n=null,e=ni,t=ni,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new me(1,1),this.preferredSize=new me(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new me,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==ni?t.width=e.width:e.height!==ni?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==ni?t.height=e.height:e.width!==ni?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(ni),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return ni}},We={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Ux="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",Fx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ox="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Qx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Kx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Jx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$x="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",eM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",sM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",aM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",uM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fM=new Map([[We.ADD,Ux],[We.ALPHA,Nx],[We.AVERAGE,Fx],[We.COLOR,zx],[We.COLOR_BURN,Ox],[We.COLOR_DODGE,kx],[We.DARKEN,Gx],[We.DIFFERENCE,Hx],[We.DIVIDE,Vx],[We.DST,null],[We.EXCLUSION,Wx],[We.HARD_LIGHT,Xx],[We.HARD_MIX,Yx],[We.HUE,Qx],[We.INVERT,qx],[We.INVERT_RGB,Kx],[We.LIGHTEN,Zx],[We.LINEAR_BURN,jx],[We.LINEAR_DODGE,Jx],[We.LINEAR_LIGHT,$x],[We.LUMINOSITY,eM],[We.MULTIPLY,tM],[We.NEGATION,nM],[We.NORMAL,iM],[We.OVERLAY,sM],[We.PIN_LIGHT,rM],[We.REFLECT,aM],[We.SATURATION,oM],[We.SCREEN,lM],[We.SOFT_LIGHT,cM],[We.SRC,hM],[We.SUBTRACT,uM],[We.VIVID_LIGHT,dM]]),pM=class extends Yn{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new oe(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return fM.get(this.blendFunction)}},Fi=class extends Yn{constructor(n,e,{attributes:t=Rn.NONE,blendFunction:i=We.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new pM(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=ui,this._outputColorSpace=on}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=_n){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof at||e instanceof Qn||e instanceof Lt||e instanceof kt)&&this[n].dispose()}}},Rl={MEDIUM:2,LARGE:3},mM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,gM="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",vM=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],xM=class extends rt{constructor(n=new mt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new oe(null),texelSize:new oe(new mt),scale:new oe(1),kernel:new oe(0)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:mM,vertexShader:gM}),this.setTexelSize(n.x,n.y),this.kernelSize=Rl.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return vM[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},MM=class extends kt{constructor({kernelSize:n=Rl.MEDIUM,resolutionScale:e=.5,width:t=It.AUTO_SIZE,height:i=It.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new at(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new It(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new xM,this._blurMaterial.kernelSize=n,this.copyMaterial=new Eu}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,h=c.kernelSequence;let f=e;this.fullscreenMaterial=c;for(let d=0,u=h.length;d<u;++d){const g=(d&1)===0?o:l;c.kernel=h[d],c.inputBuffer=f.texture,n.setRenderTarget(g),n.render(r,a),f=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=f.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==yt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===st&&(this.renderTargetA.texture.colorSpace=st,this.renderTargetB.texture.colorSpace=st))}static get AUTO_SIZE(){return It.AUTO_SIZE}},yM=`#include <common>
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
}`,AM=class extends rt{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Ui.replace(/\D+/g,"")},uniforms:{inputBuffer:new oe(null),threshold:new oe(0),smoothing:new oe(1),range:new oe(null)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:yM,vertexShader:Cl}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},bu=class extends kt{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=It.AUTO_SIZE,height:r=It.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new AM(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new at(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new It(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==yt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},SM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,_M="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",wM=class extends rt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new oe(null),texelSize:new oe(new me)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:SM,vertexShader:_M})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},EM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,TM="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",bM=class extends rt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new oe(null),supportBuffer:new oe(null),texelSize:new oe(new me),radius:new oe(.85)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:EM,vertexShader:TM})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},CM=class extends kt{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new at(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new wM,this.upsamplingMaterial=new bM,this.resolution=new me}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){const{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:h}=this;let f=e;this.fullscreenMaterial=o;for(let d=0,u=c.length;d<u;++d){const g=c[d];o.setSize(f.width,f.height),o.inputBuffer=f.texture,n.setRenderTarget(g),n.render(r,a),f=g}this.fullscreenMaterial=l;for(let d=h.length-1;d>=0;--d){const u=h[d];l.setSize(f.width,f.height),l.inputBuffer=f.texture,l.supportBuffer=c[d].texture,n.setRenderTarget(u),n.render(r,a),f=u}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of i)s.texture.type=t;if(t!==yt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===st)for(const s of i)s.texture.colorSpace=st}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},DM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,RM=class extends Fi{constructor({blendFunction:n=We.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=Rl.LARGE,resolutionScale:l=.5,width:c=It.AUTO_SIZE,height:h=It.AUTO_SIZE,resolutionX:f=c,resolutionY:d=h}={}){super("BloomEffect",DM,{blendFunction:n,uniforms:new Map([["map",new oe(null)],["intensity",new oe(s)]])}),this.renderTarget=new at(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new MM({kernelSize:o}),this.luminancePass=new bu({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new CM,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const u=this.resolution=new It(this,f,d,l);u.addEventListener("change",g=>this.setSize(u.baseWidth,u.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===st&&(this.renderTarget.texture.colorSpace=st))}},nl=class extends kt{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,s){const r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==yt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}};function IM(n,e,t){const i=new Map([[hi,1],[ul,2],[Ft,4]]);let s;if(i.has(e)||console.error("Invalid noise texture format"),t===yt){s=new Uint8Array(n*i.get(e));for(let r=0,a=s.length;r<a;++r)s[r]=Math.random()*255+.5}else{s=new Float32Array(n*i.get(e));for(let r=0,a=s.length;r<a;++r)s[r]=Math.random()}return s}var PM=class extends na{constructor(n,e,t=hi,i=yt){super(IM(n*e,t,i),n,e,t,i),this.needsUpdate=!0}},Cu=class extends kt{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Dl,this.overrideMaterialManager=t===null?null:new oh(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new oh(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,h=n.shadowMap.autoUpdate,f=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(f),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,a):n.render(r,a),a.layers.mask=l,r.background=c,n.shadowMap.autoUpdate=h}},Du={COLOR:2},LM={DISABLED:0},Ls={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},$t={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},Bs={DEFAULT:0,ESKIL:1},BM=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
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
}`,UM=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,NM=class extends rt{constructor(n=new me,e=Du.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:Ui.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new oe(null),depthBuffer:new oe(null),predicationBuffer:new oe(null),texelSize:new oe(n)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:BM,vertexShader:UM}),this.edgeDetectionMode=e}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=_n){this.depthBuffer=n,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(n){this.defines.EDGE_DETECTION_MODE=n.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(n){this.edgeDetectionMode=n}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(n){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=n.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(n){this.localContrastAdaptationFactor=n}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(n){this.defines.EDGE_THRESHOLD=n.toFixed("6"),this.defines.DEPTH_THRESHOLD=(n*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(n){this.edgeDetectionThreshold=n}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(n){this.defines.PREDICATION_MODE=n.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(n){this.predicationMode=n}set predicationBuffer(n){this.uniforms.predicationBuffer.value=n}setPredicationBuffer(n){this.uniforms.predicationBuffer.value=n}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(n){this.defines.PREDICATION_THRESHOLD=n.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(n){this.predicationThreshold=n}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(n){this.defines.PREDICATION_SCALE=n.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(n){this.predicationScale=n}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(n){this.defines.PREDICATION_STRENGTH=n.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(n){this.predicationStrength=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},FM=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
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
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,zM="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",OM=class extends rt{constructor(n=new me,e=new me){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new oe(null),searchTexture:new oe(null),areaTexture:new oe(null),resolution:new oe(e),texelSize:new oe(n)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:FM,vertexShader:zM})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(n){this.uniforms.searchTexture.value=n}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(n){this.uniforms.areaTexture.value=n}setLookupTextures(n,e){this.searchTexture=n,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(n){const e=Math.min(Math.max(n,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(n){this.orthogonalSearchSteps=n}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(n){const e=Math.min(Math.max(n,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(n){this.diagonalSearchSteps=n}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(n){n?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(n){this.diagonalDetection=n}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(n){const e=Math.min(Math.max(n,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(n){this.cornerRounding=n}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(n){n?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(n){this.cornerDetection=n}setSize(n,e){const t=this.uniforms;t.texelSize.value.set(1/n,1/e),t.resolution.value.set(n,e)}},lh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",ch="data:image/png;base64,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",kM="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",GM="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",HM=class extends Fi{constructor({blendFunction:n=We.SRC,preset:e=Ls.MEDIUM,edgeDetectionMode:t=Du.COLOR,predicationMode:i=LM.DISABLED}={}){super("SMAAEffect",kM,{vertexShader:GM,blendFunction:n,attributes:Rn.CONVOLUTION|Rn.DEPTH,uniforms:new Map([["weightMap",new oe(null)]])});let s,r;arguments.length>1&&(s=arguments[0],r=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(t=arguments[3])),this.renderTargetEdges=new at(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new Dl(!0,!1,!1),this.clearPass.overrideClearColor=new Ye(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new nl(new NM),this.edgeDetectionMaterial.edgeDetectionMode=t,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new nl(new OM);const a=new mf;a.onLoad=()=>{const o=new Lt(s);o.name="SMAA.Search",o.magFilter=Mt,o.minFilter=Mt,o.generateMipmaps=!1,o.needsUpdate=!0,o.flipY=!0,this.weightsMaterial.searchTexture=o;const l=new Lt(r);l.name="SMAA.Area",l.magFilter=tt,l.minFilter=tt,l.generateMipmaps=!1,l.needsUpdate=!0,l.flipY=!1,this.weightsMaterial.areaTexture=l,this.dispatchEvent({type:"load"})},a.itemStart("search"),a.itemStart("area"),s!==void 0&&r!==void 0?(a.itemEnd("search"),a.itemEnd("area")):typeof Image<"u"&&(s=new Image,r=new Image,s.addEventListener("load",()=>a.itemEnd("search")),r.addEventListener("load",()=>a.itemEnd("area")),s.src=lh,r.src=ch),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(n){this.edgeDetectionMaterial.edgeDetectionThreshold=n}setOrthogonalSearchSteps(n){this.weightsMaterial.orthogonalSearchSteps=n}applyPreset(n){const e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(n){case Ls.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Ls.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Ls.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case Ls.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(n,e=_n){this.edgeDetectionMaterial.depthBuffer=n,this.edgeDetectionMaterial.depthPacking=e}update(n,e,t){this.clearPass.render(n,this.renderTargetEdges),this.edgeDetectionPass.render(n,e,this.renderTargetEdges),this.weightsPass.render(n,this.renderTargetEdges,this.renderTargetWeights)}setSize(n,e){this.edgeDetectionMaterial.setSize(n,e),this.weightsMaterial.setSize(n,e),this.renderTargetEdges.setSize(n,e),this.renderTargetWeights.setSize(n,e)}dispose(){const{searchTexture:n,areaTexture:e}=this.weightsMaterial;n!==null&&e!==null&&(n.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return lh}static get areaImageDataURL(){return ch}};function Pr(n,e,t){return n*(e-t)-e}function Lr(n,e,t){return Math.min(Math.max((n+e)/(e-t),0),1)}var VM=`#include <common>
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
}gl_FragColor.r=ao;}`,WM="uniform vec2 noiseScale;varying vec2 vUv;varying vec2 vUv2;void main(){vUv=position.xy*0.5+0.5;vUv2=vUv*noiseScale;gl_Position=vec4(position.xy,1.0,1.0);}",XM=class extends rt{constructor(n){super({name:"SSAOMaterial",defines:{SAMPLES_INT:"0",INV_SAMPLES_FLOAT:"0.0",SPIRAL_TURNS:"0.0",RADIUS:"1.0",RADIUS_SQ:"1.0",DISTANCE_SCALING:"1",DEPTH_PACKING:"0"},uniforms:{depthBuffer:new oe(null),normalBuffer:new oe(null),normalDepthBuffer:new oe(null),noiseTexture:new oe(null),inverseProjectionMatrix:new oe(new Ke),projectionMatrix:new oe(new Ke),texelSize:new oe(new me),cameraNearFar:new oe(new me),distanceCutoff:new oe(new me),proximityCutoff:new oe(new me),noiseScale:new oe(new me),minRadiusScale:new oe(.33),intensity:new oe(1),fade:new oe(.01),bias:new oe(0)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:VM,vertexShader:WM}),this.copyCameraSettings(n),this.resolution=new me,this.r=1}get near(){return this.uniforms.cameraNearFar.value.x}get far(){return this.uniforms.cameraNearFar.value.y}set normalDepthBuffer(n){this.uniforms.normalDepthBuffer.value=n,n!==null?this.defines.NORMAL_DEPTH="1":delete this.defines.NORMAL_DEPTH,this.needsUpdate=!0}setNormalDepthBuffer(n){this.normalDepthBuffer=n}set normalBuffer(n){this.uniforms.normalBuffer.value=n}setNormalBuffer(n){this.uniforms.normalBuffer.value=n}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=_n){this.depthBuffer=n,this.depthPacking=e}set noiseTexture(n){this.uniforms.noiseTexture.value=n}setNoiseTexture(n){this.uniforms.noiseTexture.value=n}get samples(){return Number(this.defines.SAMPLES_INT)}set samples(n){this.defines.SAMPLES_INT=n.toFixed(0),this.defines.INV_SAMPLES_FLOAT=(1/n).toFixed(9),this.needsUpdate=!0}getSamples(){return this.samples}setSamples(n){this.samples=n}get rings(){return Number(this.defines.SPIRAL_TURNS)}set rings(n){this.defines.SPIRAL_TURNS=n.toFixed(1),this.needsUpdate=!0}getRings(){return this.rings}setRings(n){this.rings=n}get intensity(){return this.uniforms.intensity.value}set intensity(n){this.uniforms.intensity.value=n,this.defines.LEGACY_INTENSITY===void 0&&(this.defines.LEGACY_INTENSITY="1",this.needsUpdate=!0)}getIntensity(){return this.uniforms.intensity.value}setIntensity(n){this.uniforms.intensity.value=n}get fade(){return this.uniforms.fade.value}set fade(n){this.uniforms.fade.value=n}getFade(){return this.uniforms.fade.value}setFade(n){this.uniforms.fade.value=n}get bias(){return this.uniforms.bias.value}set bias(n){this.uniforms.bias.value=n}getBias(){return this.uniforms.bias.value}setBias(n){this.uniforms.bias.value=n}get minRadiusScale(){return this.uniforms.minRadiusScale.value}set minRadiusScale(n){this.uniforms.minRadiusScale.value=n}getMinRadiusScale(){return this.uniforms.minRadiusScale.value}setMinRadiusScale(n){this.uniforms.minRadiusScale.value=n}updateRadius(){const n=this.r*this.resolution.height;this.defines.RADIUS=n.toFixed(11),this.defines.RADIUS_SQ=(n*n).toFixed(11),this.needsUpdate=!0}get radius(){return this.r}set radius(n){this.r=Math.min(Math.max(n,1e-6),1),this.updateRadius()}getRadius(){return this.radius}setRadius(n){this.radius=n}get distanceScaling(){return!0}set distanceScaling(n){}isDistanceScalingEnabled(){return this.distanceScaling}setDistanceScalingEnabled(n){this.distanceScaling=n}get distanceThreshold(){return this.uniforms.distanceCutoff.value.x}set distanceThreshold(n){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.distanceFalloff,0),1))}get worldDistanceThreshold(){return-Pr(this.distanceThreshold,this.near,this.far)}set worldDistanceThreshold(n){this.distanceThreshold=Lr(-n,this.near,this.far)}get distanceFalloff(){return this.uniforms.distanceCutoff.value.y-this.distanceThreshold}set distanceFalloff(n){this.uniforms.distanceCutoff.value.y=Math.min(Math.max(this.distanceThreshold+n,0),1)}get worldDistanceFalloff(){return-Pr(this.distanceFalloff,this.near,this.far)}set worldDistanceFalloff(n){this.distanceFalloff=Lr(-n,this.near,this.far)}setDistanceCutoff(n,e){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}get proximityThreshold(){return this.uniforms.proximityCutoff.value.x}set proximityThreshold(n){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.proximityFalloff,0),1))}get worldProximityThreshold(){return-Pr(this.proximityThreshold,this.near,this.far)}set worldProximityThreshold(n){this.proximityThreshold=Lr(-n,this.near,this.far)}get proximityFalloff(){return this.uniforms.proximityCutoff.value.y-this.proximityThreshold}set proximityFalloff(n){this.uniforms.proximityCutoff.value.y=Math.min(Math.max(this.proximityThreshold+n,0),1)}get worldProximityFalloff(){return-Pr(this.proximityFalloff,this.near,this.far)}set worldProximityFalloff(n){this.proximityFalloff=Lr(-n,this.near,this.far)}setProximityCutoff(n,e){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNearFar.value.set(n.near,n.far),this.uniforms.projectionMatrix.value.copy(n.projectionMatrix),this.uniforms.inverseProjectionMatrix.value.copy(n.projectionMatrix).invert(),n instanceof Kt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms,i=t.noiseTexture.value;i!==null&&t.noiseScale.value.set(n/i.image.width,e/i.image.height),t.texelSize.value.set(1/n,1/e),this.resolution.set(n,e),this.updateRadius()}},YM=`#include <packing>
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
gl_FragColor=vec4(n[index],d[index]);}`,QM="uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}",qM=class extends rt{constructor(){super({name:"DepthDownsamplingMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new oe(null),normalBuffer:new oe(null),texelSize:new oe(new me)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:YM,vertexShader:QM})}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=_n){this.depthBuffer=n,this.depthPacking=e}set normalBuffer(n){this.uniforms.normalBuffer.value=n,n!==null?this.defines.DOWNSAMPLE_NORMALS="1":delete this.defines.DOWNSAMPLE_NORMALS,this.needsUpdate=!0}setNormalBuffer(n){this.normalBuffer=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},KM=class extends kt{constructor({normalBuffer:n=null,resolutionScale:e=.5,width:t=It.AUTO_SIZE,height:i=It.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("DepthDownsamplingPass");const a=new qM;a.normalBuffer=n,this.fullscreenMaterial=a,this.needsDepthTexture=!0,this.needsSwap=!1,this.renderTarget=new at(1,1,{minFilter:Mt,magFilter:Mt,depthBuffer:!1,type:tn}),this.renderTarget.texture.name="DepthDownsamplingPass.Target",this.renderTarget.texture.generateMipmaps=!1;const o=this.resolution=new It(this,s,r,e);o.addEventListener("change",l=>this.setSize(o.baseWidth,o.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}setDepthTexture(n,e=_n){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e}render(n,e,t,i,s){n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.fullscreenMaterial.setSize(n,e)}initialize(n,e,t){const i=n.getContext();if(!(i.getExtension("EXT_color_buffer_float")||i.getExtension("EXT_color_buffer_half_float")))throw new Error("Rendering to float texture is not supported.")}},ZM=`uniform lowp sampler2D aoBuffer;uniform float luminanceInfluence;uniform float intensity;
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
}`,hh=64,jM=class extends Fi{constructor(n,e,{blendFunction:t=We.MULTIPLY,samples:i=9,rings:s=7,normalDepthBuffer:r=null,depthAwareUpsampling:a=!0,worldDistanceThreshold:o,worldDistanceFalloff:l,worldProximityThreshold:c,worldProximityFalloff:h,distanceThreshold:f=.97,distanceFalloff:d=.03,rangeThreshold:u=5e-4,rangeFalloff:g=.001,minRadiusScale:v=.1,luminanceInfluence:m=.7,radius:p=.1825,intensity:S=1,bias:x=.025,fade:y=.01,color:w=null,resolutionScale:_=1,width:T=It.AUTO_SIZE,height:b=It.AUTO_SIZE,resolutionX:M=T,resolutionY:A=b}={}){super("SSAOEffect",ZM,{blendFunction:t,attributes:Rn.DEPTH,defines:new Map([["THRESHOLD","0.997"]]),uniforms:new Map([["aoBuffer",new oe(null)],["normalDepthBuffer",new oe(r)],["luminanceInfluence",new oe(m)],["color",new oe(null)],["intensity",new oe(S)],["scale",new oe(0)]])}),this.renderTarget=new at(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="AO.Target",this.uniforms.get("aoBuffer").value=this.renderTarget.texture;const C=this.resolution=new It(this,M,A,_);C.addEventListener("change",z=>this.setSize(C.baseWidth,C.baseHeight)),this.camera=n,this.depthDownsamplingPass=new KM({normalBuffer:e,resolutionScale:_}),this.depthDownsamplingPass.enabled=r===null,this.ssaoPass=new nl(new XM(n));const P=new PM(hh,hh,Ft);P.wrapS=P.wrapT=Vs;const F=this.ssaoMaterial;F.normalBuffer=e,F.noiseTexture=P,F.minRadiusScale=v,F.samples=i,F.radius=p,F.rings=s,F.fade=y,F.bias=x,F.distanceThreshold=f,F.distanceFalloff=d,F.proximityThreshold=u,F.proximityFalloff=g,o!==void 0&&(F.worldDistanceThreshold=o),l!==void 0&&(F.worldDistanceFalloff=l),c!==void 0&&(F.worldProximityThreshold=c),h!==void 0&&(F.worldProximityFalloff=h),r!==null&&(this.ssaoMaterial.normalDepthBuffer=r,this.defines.set("NORMAL_DEPTH","1")),this.depthAwareUpsampling=a,this.color=w}set mainCamera(n){this.camera=n,this.ssaoMaterial.copyCameraSettings(n)}get normalBuffer(){return this.ssaoMaterial.normalBuffer}set normalBuffer(n){this.ssaoMaterial.normalBuffer=n,this.depthDownsamplingPass.fullscreenMaterial.normalBuffer=n}getResolution(){return this.resolution}get ssaoMaterial(){return this.ssaoPass.fullscreenMaterial}getSSAOMaterial(){return this.ssaoMaterial}get samples(){return this.ssaoMaterial.samples}set samples(n){this.ssaoMaterial.samples=n}get rings(){return this.ssaoMaterial.rings}set rings(n){this.ssaoMaterial.rings=n}get radius(){return this.ssaoMaterial.radius}set radius(n){this.ssaoMaterial.radius=n}get depthAwareUpsampling(){return this.defines.has("DEPTH_AWARE_UPSAMPLING")}set depthAwareUpsampling(n){this.depthAwareUpsampling!==n&&(n?this.defines.set("DEPTH_AWARE_UPSAMPLING","1"):this.defines.delete("DEPTH_AWARE_UPSAMPLING"),this.setChanged())}isDepthAwareUpsamplingEnabled(){return this.depthAwareUpsampling}setDepthAwareUpsamplingEnabled(n){this.depthAwareUpsampling=n}get distanceScaling(){return!0}set distanceScaling(n){}get color(){return this.uniforms.get("color").value}set color(n){const e=this.uniforms,t=this.defines;n!==null?t.has("COLORIZE")?e.get("color").value.set(n):(t.set("COLORIZE","1"),e.get("color").value=new Ye(n),this.setChanged()):t.has("COLORIZE")&&(t.delete("COLORIZE"),e.get("color").value=null,this.setChanged())}get luminanceInfluence(){return this.uniforms.get("luminanceInfluence").value}set luminanceInfluence(n){this.uniforms.get("luminanceInfluence").value=n}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getColor(){return this.color}setColor(n){this.color=n}setDistanceCutoff(n,e){this.ssaoMaterial.distanceThreshold=n,this.ssaoMaterial.distanceFalloff=e}setProximityCutoff(n,e){this.ssaoMaterial.proximityThreshold=n,this.ssaoMaterial.proximityFalloff=e}setDepthTexture(n,e=_n){this.depthDownsamplingPass.setDepthTexture(n,e),this.ssaoMaterial.depthBuffer=n,this.ssaoMaterial.depthPacking=e}update(n,e,t){const i=this.renderTarget;this.depthDownsamplingPass.enabled&&this.depthDownsamplingPass.render(n),this.ssaoPass.render(n,null,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.ssaoMaterial.copyCameraSettings(this.camera),this.ssaoMaterial.setSize(i,s),this.renderTarget.setSize(i,s),this.depthDownsamplingPass.resolution.scale=t.scale,this.depthDownsamplingPass.setSize(n,e)}initialize(n,e,t){try{let i=this.uniforms.get("normalDepthBuffer").value;i===null&&(this.depthDownsamplingPass.initialize(n,e,t),i=this.depthDownsamplingPass.texture,this.uniforms.get("normalDepthBuffer").value=i,this.ssaoMaterial.normalDepthBuffer=i,this.defines.set("NORMAL_DEPTH","1"))}catch{this.depthDownsamplingPass.enabled=!1}}},JM=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,$M=class extends rt{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new oe(null),luminanceBuffer1:new oe(null),minLuminance:new oe(.01),deltaTime:new oe(0),tau:new oe(1)},extensions:{shaderTextureLOD:!0},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:JM,vertexShader:Cl})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},ey=class extends kt{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new $M,this.needsSwap=!1,this.renderTargetPrevious=new at(1,1,{minFilter:Mt,magFilter:Mt,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new Tu(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,s){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},ty=`#include <tonemapping_pars_fragment>
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
}`,ny=class extends Fi{constructor({blendFunction:n=We.SRC,adaptive:e=!1,mode:t=e?$t.REINHARD2_ADAPTIVE:$t.AGX,resolution:i=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:l=1,adaptationRate:c=1}={}){super("ToneMappingEffect",ty,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new oe(null)],["maxLuminance",new oe(s)],["whitePoint",new oe(r)],["middleGrey",new oe(a)],["averageLuminance",new oe(l)]])}),this.renderTargetLuminance=new at(1,1,{minFilter:Cn,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new bu({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new ey(this.luminancePass.texture,{minLuminance:o,adaptationRate:c}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;const t=Ui.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case $t.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case $t.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case $t.CINEON:case $t.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case $t.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case $t.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case $t.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===$t.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){const e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===$t.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?$t.REINHARD2_ADAPTIVE:$t.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}},iy=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,sy=class extends Fi{constructor({blendFunction:n,eskil:e=!1,technique:t=e?Bs.ESKIL:Bs.DEFAULT,offset:i=.5,darkness:s=.5}={}){super("VignetteEffect",iy,{blendFunction:n,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new oe(i)],["darkness",new oe(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(n){this.technique!==n&&(this.defines.set("VIGNETTE_TECHNIQUE",n.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Bs.ESKIL}set eskil(n){this.technique=n?Bs.ESKIL:Bs.DEFAULT}getTechnique(){return this.technique}setTechnique(n){this.technique=n}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}get darkness(){return this.uniforms.get("darkness").value}set darkness(n){this.uniforms.get("darkness").value=n}getDarkness(){return this.darkness}setDarkness(n){this.darkness=n}},ry=`#include <common>
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
}`,ay="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",oy=class extends rt{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Ui.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new oe(null),depthBuffer:new oe(null),resolution:new oe(new me),texelSize:new oe(new me),cameraNear:new oe(.3),cameraFar:new oe(1e3),aspect:new oe(1),time:new oe(0)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=_n){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=ry.replace(et.FRAGMENT_HEAD,n.get(et.FRAGMENT_HEAD)||"").replace(et.FRAGMENT_MAIN_UV,n.get(et.FRAGMENT_MAIN_UV)||"").replace(et.FRAGMENT_MAIN_IMAGE,n.get(et.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=ay.replace(et.VERTEX_HEAD,n.get(et.VERTEX_HEAD)||"").replace(et.VERTEX_MAIN_SUPPORT,n.get(et.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Kt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return et}};function uh(n,e,t){for(const i of e){const s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function ly(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader();const r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&Rn.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get(et.FRAGMENT_HEAD)||"",h=l.get(et.FRAGMENT_MAIN_UV)||"",f=l.get(et.FRAGMENT_MAIN_IMAGE)||"",d=l.get(et.VERTEX_HEAD)||"",u=l.get(et.VERTEX_MAIN_SUPPORT)||"";const g=new Set,v=new Set;if(a&&(h+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const S=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);u+=`	${n}MainSupport(`,u+=S?`vUv);
`:`);
`;for(const x of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const y of x[1].split(/\s*,\s*/))t.varyings.add(y),g.add(y),v.add(y);for(const x of s.matchAll(o))v.add(x[1])}for(const S of i.matchAll(o))v.add(S[1]);for(const S of e.defines.keys())v.add(S.replace(/\([\w\s,]*\)/g,""));for(const S of e.uniforms.keys())v.add(S);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((S,x)=>t.uniforms.set(n+x.charAt(0).toUpperCase()+x.slice(1),S)),e.defines.forEach((S,x)=>t.defines.set(n+x.charAt(0).toUpperCase()+x.slice(1),S));const m=new Map([["fragment",i],["vertex",s]]);uh(n,v,t.defines),uh(n,v,m),i=m.get("fragment"),s=m.get("vertex");const p=e.blendMode;if(t.blendModes.set(p.blendFunction,p),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(f+=e.inputColorSpace===st?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==on?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const S=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;f+=`${n}MainImage(color0, UV, `,(t.attributes&Rn.DEPTH)!==0&&S.test(i)&&(f+="depth, ",t.readDepth=!0),f+=`color1);
	`;const x=n+"BlendOpacity";t.uniforms.set(x,p.opacity),f+=`color0 = blend${p.blendFunction}(color0, color1, ${x});

	`,c+=`uniform float ${x};

`}if(c+=i+`
`,s!==null&&(d+=s+`
`),l.set(et.FRAGMENT_HEAD,c),l.set(et.FRAGMENT_MAIN_UV,h),l.set(et.FRAGMENT_MAIN_IMAGE,f),l.set(et.VERTEX_HEAD,d),l.set(et.VERTEX_MAIN_SUPPORT,u),e.extensions!==null)for(const S of e.extensions)t.extensions.add(S)}}var dh=class extends kt{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new oy(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new Bx;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===We.DST)n.attributes|=a.getAttributes()&Rn.DEPTH;else{if((n.attributes&a.getAttributes()&Rn.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);ly("e"+e++,a,n)}let t=n.shaderParts.get(et.FRAGMENT_HEAD),i=n.shaderParts.get(et.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get(et.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of n.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(n.attributes&Rn.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===st&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(et.FRAGMENT_HEAD,t),n.shaderParts.set(et.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(et.FRAGMENT_MAIN_UV,s);for(const[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=_n){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(const r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==yt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}},cy=class extends kt{constructor(n,e,{renderTarget:t,resolutionScale:i=1,width:s=It.AUTO_SIZE,height:r=It.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new Cu(n,e,new ff);const l=this.renderPass;l.ignoreBackground=!0,l.skipShadowMapUpdate=!0;const c=l.getClearPass();c.overrideClearColor=new Ye(7829503),c.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new at(1,1,{minFilter:Mt,magFilter:Mt}),this.renderTarget.texture.name="NormalPass.Target");const h=this.resolution=new It(this,a,o,i);h.addEventListener("change",f=>this.setSize(h.baseWidth,h.baseHeight))}set mainScene(n){this.renderPass.mainScene=n}set mainCamera(n){this.renderPass.mainCamera=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.renderToScreen?null:this.renderTarget;this.renderPass.render(n,r,r)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}};class hy{constructor(e){this.volume=e;const t=new ta(e.data,e.sx,e.sy,e.sz);t.format=Ft,t.type=yt,t.colorSpace=on,t.minFilter=Cn,t.magFilter=tt,t.wrapS=t.wrapT=t.wrapR=bn,t.generateMipmaps=!0,t.unpackAlignment=1,t.needsUpdate=!0,this.texture=t;const i=new ta(e.normals,e.sx,e.sy,e.sz);i.format=Ft,i.type=yt,i.colorSpace=on,i.minFilter=tt,i.magFilter=tt,i.generateMipmaps=!1,i.wrapS=i.wrapT=i.wrapR=bn,i.unpackAlignment=1,i.needsUpdate=!0,this.normalTexture=i,this.size=new k(e.sx*e.texel,e.sy*e.texel,e.sz*e.texel)}texture;normalTexture;size;upload(){this.texture.needsUpdate=!0,this.normalTexture.needsUpdate=!0}}const uy=new Ln(2,2),Ru=`
  precision highp float;
  precision highp sampler3D;
  // L1 SH: Y00 = 0.282095, Y1 = 0.488603 * (y, z, x)
  float shEval(vec4 c, vec3 d) { return c.x * 0.282095 + 0.488603 * (c.y * d.y + c.z * d.z + c.w * d.x); }
  vec4 cosLobe(vec3 d) { return vec4(0.886227, 1.023328 * d.y, 1.023328 * d.z, 1.023328 * d.x); }
`,dy=Ru+`
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
`,fy=Ru+`
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
`;class py{constructor(e,t,i=1){this.gl=e,this.gi=t;const s=t.volume;this.size=new k(Math.ceil(s.sx/i),Math.ceil(s.sy/i),Math.ceil(s.sz/i)),this.worldSize=t.size.clone();const r=()=>{const a=new kd(this.size.x,this.size.y,this.size.z,{type:Sn,format:Ft,minFilter:tt,magFilter:tt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});return a.texture.wrapS=a.texture.wrapT=a.texture.wrapR=bn,a};for(let a=0;a<3;a++)this.seed.push(r()),this.ping.push(r()),this.pong.push(r());this.injectMat=new dc({glslVersion:Jr,vertexShader:"in vec3 position; void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:dy,uniforms:{uDirect:{value:t.texture},uNormal:{value:null},uSrcSize:{value:new k(s.sx,s.sy,s.sz)},uDstSize:{value:this.size.clone()},uLayer:{value:0},uDecode:{value:2},uChannel:{value:0},uSkyAmbient:{value:new k(.3,.4,.6)},uTime:{value:0},uBoost:{value:8}},depthTest:!1,depthWrite:!1}),this.propMat=new dc({glslVersion:Jr,vertexShader:"in vec3 position; void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:fy,uniforms:{uPrev:{value:null},uSeed:{value:null},uDirect:{value:t.texture},uDstSize:{value:this.size.clone()},uLayer:{value:0},uGain:{value:this.gain}},depthTest:!1,depthWrite:!1}),this.quad=new vt(uy,this.injectMat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}size;worldSize;seed=[];ping=[];pong=[];injectMat;propMat;quad;cam=new ys(-1,1,1,-1,0,1);scene=new Li;iterations=0;gain=.58;setSources(e,t){this.injectMat.uniforms.uNormal.value=e,this.injectMat.uniforms.uDecode.value=t}setBoost(e){this.injectMat.uniforms.uBoost.value=e}setSky(e){this.injectMat.uniforms.uSkyAmbient.value.set(...e)}get textures(){return[this.ping[0].texture,this.ping[1].texture,this.ping[2].texture]}runLayers(e,t,i){this.quad.material=e;for(let s=0;s<3;s++){i(s);for(let r=0;r<this.size.z;r++)e.uniforms.uLayer.value=r,this.gl.setRenderTarget(t[s],r),this.gl.render(this.scene,this.cam)}this.gl.setRenderTarget(null)}inject(e){this.injectMat.uniforms.uTime.value=e,this.runLayers(this.injectMat,this.seed,t=>{this.injectMat.uniforms.uChannel.value=t})}step(e=1){for(let t=0;t<e;t++){this.propMat.uniforms.uGain.value=this.gain,this.runLayers(this.propMat,this.pong,s=>{this.propMat.uniforms.uPrev.value=this.ping[s].texture,this.propMat.uniforms.uSeed.value=this.seed[s].texture});const i=this.ping;this.ping=this.pong,this.pong=i,this.iterations++}}dispose(){for(const e of[...this.seed,...this.ping,...this.pong])e.dispose()}}const Br=Et.length,Iu=`
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
        uniform sampler3D uSh2;`,Pu=`
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
`;function my(n){return{uGi:n.uGi,uGiSize:n.uGiSize,uGiTexel:n.uGiTexel,uGiDecode:n.uGiDecode,uGiStrength:n.uGiStrength,uSkyZenith:n.uSkyZenith,uSkyHorizon:n.uSkyHorizon,uSkySunColor:n.uSkySunColor,uSunDir:n.uSunDir,uDaylight:n.uDaylight,uSh0:n.uSh0,uSh1:n.uSh1,uSh2:n.uSh2}}const Lu=(n,e)=>({SC_CONES:n?4:6,SC_STEPS:n?14:28,SC_SPEC:n?0:1,SC_GI_SH:e==="sh"?1:0});function ns(n,e,t=!1,i="sh",s="full",r){const a=new Float32Array(Br),o=new Float32Array(Br*3),l=new Float32Array(Br*3);for(const d of Et)a[d.id]=d.scale,l[d.id*3]=d.albedo[0],l[d.id*3+1]=d.albedo[1],l[d.id*3+2]=d.albedo[2],d.emissive&&(o[d.id*3]=d.emissive[0],o[d.id*3+1]=d.emissive[1],o[d.id*3+2]=d.emissive[2]);const c=r?{...r,uTexLocal:{value:1},uTexOrigin:{value:new k},uFade:{value:1},uIceMode:{value:2}}:{uAlbedo:{value:n.albedo},uNormal:{value:n.normal},uMatScale:{value:a},uMatEmissive:{value:o},uMatAlbedo:{value:l},uGi:{value:e.texture},uGiSize:{value:e.size.clone()},uGiTexel:{value:e.volume.texel},uGiDecode:{value:El},uGiStrength:{value:1},uSkyZenith:{value:new k(.2,.36,.72)},uSkyHorizon:{value:new k(.6,.7,.82)},uSkySunColor:{value:new k(1,1,1)},uSunDir:{value:new k(0,1,0)},uTime:{value:0},uDaylight:{value:1},uSh0:{value:null},uSh1:{value:null},uSh2:{value:null},uCursor:{value:new mt(0,0,0,0)},uCursorShape:{value:0},uCursorExt:{value:new k(.5,.5,.5)},uTexLocal:{value:0},uTexOrigin:{value:new k},uFade:{value:1},uMorphBand:{value:Ax},uIceMode:{value:0},uSceneColor:{value:null},uSceneDepth:{value:null},uResolution:{value:new me(1,1)},uNear:{value:.08},uFar:{value:1200},uProjection:{value:new Ke},uIceShadow:{value:null},uIceShadowMatrix:{value:new Ke},uIceCaustic:{value:0},uIceReach:{value:56},uSeaLevel:{value:0},uIceDebug:{value:0}},h=new ia({color:16777215,roughness:1,metalness:0,side:In}),f=Lu(t,i);return s!=="full"&&(f.SC_SPEC=0),h.defines={SC_MATERIALS:Br,SC_GRASS:vs,SC_DIRT:gs,SC_SNOW:Js,SC_STONE:Qs,SC_ICE:yn,SC_LITE:s==="full"?0:1,SC_BASIC:s==="basic"?1:0,...f},h.name="terrain-"+s,h.onBeforeCompile=d=>{Object.assign(d.uniforms,c),d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
        attribute vec3 aMats;
        attribute vec3 aBary;
        attribute vec4 aFace;
        attribute vec4 aMorph;
        uniform float uMorphBand;
        varying vec4 vFace;
        varying vec3 vWorldPos;
        varying vec3 vTexPos;
        uniform float uTexLocal;
        uniform vec3 uTexOrigin;
        varying vec3 vWorldNormal;
        flat varying vec3 vMats;
        varying vec3 vBary;`).replace("#include <begin_vertex>",`
        // LOD by distance: within aMorph.w of the camera the vertex is in its own place, a band further out it sits on the coarser surface
        float lodT = aMorph.w > 0.0 ? clamp((aMorph.w - distance(cameraPosition, (modelMatrix * vec4(position, 1.0)).xyz)) / uMorphBand, 0.0, 1.0) : 1.0;
        vec3 transformed = mix(aMorph.xyz, vec3(position), lodT);
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
        ${Iu}
        uniform float uTime;
        uniform vec4 uCursor;
        varying vec4 vFace;
        uniform float uCursorShape;
        uniform vec3 uCursorExt;
        varying vec3 vTexPos;
        uniform float uTexLocal, uFade;
        uniform float uIceMode, uNear, uFar;
        uniform sampler2D uSceneColor, uSceneDepth;
        uniform vec2 uResolution;
        uniform mat4 uProjection;
        uniform sampler2D uIceShadow;
        uniform mat4 uIceShadowMatrix;
        uniform float uIceCaustic, uIceReach, uSeaLevel, uIceDebug;
        // pseudo-caustics: where the sun reaches a point through ice (the ice-only depth map from the sun says so),
        // the direct light is dimmed a little, tinted a little, and crossed by a slow bright web — low accuracy,
        // fuzzy, and a fraction of the cost of the real thing (founder, 2026-09-12)
        vec3 iceCaustic(vec3 p) {
          if (uIceCaustic < 0.5) return vec3(1.0);
          vec4 lp = uIceShadowMatrix * vec4(p, 1.0);
          vec3 c = lp.xyz / lp.w;
          if (c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0) return vec3(1.0);
          // four taps a texel and a half apart: the edge of the lit patch is soft, not a hard-shadow edge
          vec2 tx = vec2(1.5 / 1024.0);
          float d0 = texture2D(uIceShadow, c.xy + vec2(-tx.x, -tx.y)).r, d1 = texture2D(uIceShadow, c.xy + vec2(tx.x, -tx.y)).r;
          float d2 = texture2D(uIceShadow, c.xy + vec2(-tx.x, tx.y)).r, d3 = texture2D(uIceShadow, c.xy + vec2(tx.x, tx.y)).r;
          float z = c.z - 0.0015;
          float cover = (step(d0, z) + step(d1, z) + step(d2, z) + step(d3, z)) * 0.25;
          if (cover <= 0.0) return vec3(1.0);
          float iceD = min(min(d0, d1), min(d2, d3));
          // how far under the ice's sun-facing side we are, in metres, fades the web: light spreads with distance
          float below = (c.z - iceD) * uIceReach * 4.0;
          float spread = exp(-below * 0.12);
          // the web lives in world space: the sun's shadow box rides with the camera, so anything drawn in its
          // coordinates slides as you walk (founder saw the caustics move with him, 2026-09-12)
          vec2 q = p.xz + p.y * vec2(0.37, 0.23);
          float t = uTime;
          float w = 0.5 + 0.5 * sin(q.x * 4.1 + t * 0.9) * sin(q.y * 3.7 - t * 0.7) + 0.35 * sin((q.x + q.y) * 2.9 + t * 0.5) + 0.25 * sin((q.x - q.y * 1.3) * 5.3 - t * 1.1);
          // measured 2026-09-12 (headless, sun at 21°): a floor of 0.62 and a peak of 1.3 moved the sand under the
          // patch by 8% and read as nothing; the web has to be a thing you notice
          float web = pow(clamp(w, 0.0, 1.0), 3.0) * spread;
          return mix(vec3(1.0), mix(vec3(0.5, 0.58, 0.72), vec3(1.7, 1.75, 1.85), web), cover);
        }
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
        ${Pu}
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
        // ice is glass: the opaque pass leaves it out, the ice pass draws only it (over the scene it left behind)
        {
          vec3 bwi = clamp(vBary, 0.0, 1.0);
          float iceW = (m0 == SC_ICE ? bwi.x : 0.0) + (m1 == SC_ICE ? bwi.y : 0.0) + (m2 == SC_ICE ? bwi.z : 0.0);
          iceW /= max(bwi.x + bwi.y + bwi.z, 1e-4);
          if (uIceMode < 0.5 && iceW > 0.5) discard;
          if (uIceMode > 0.5 && uIceMode < 1.5 && iceW <= 0.5 && uIceDebug < 5.5) discard;
        }
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
        }`)},h.onBeforeCompile=(d=>(u,g)=>{d(u,g),u.fragmentShader=u.fragmentShader.replace("#include <lights_fragment_begin>",Ve.lights_fragment_begin.replace("vDirectionalShadowCoord[ i ] ) : 1.0;",`vDirectionalShadowCoord[ i ] ) : 1.0;
		directLight.color *= iceCaustic(vWorldPos);`)),u.fragmentShader=u.fragmentShader.replace("#include <dithering_fragment>",`
      #include <dithering_fragment>
      // belt and braces: a NaN here becomes a black bloom blob three passes later
      if (any(isnan(gl_FragColor.rgb)) || any(isinf(gl_FragColor.rgb))) gl_FragColor.rgb = vec3(0.0);
      if (uIceDebug > 7.5 && uIceMode > 0.5 && uIceMode < 1.5) gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
      if (uIceDebug > 9.5 && uIceDebug < 10.5) gl_FragColor = vec4(iceCaustic(vWorldPos) * 0.5, 1.0);
      if (uIceDebug > 10.5) { vec4 lp = uIceShadowMatrix * vec4(vWorldPos, 1.0); vec3 c = lp.xyz / lp.w; float d = texture2D(uIceShadow, c.xy).r; gl_FragColor = vec4(c.x, c.y, (c.z - d) * 20.0 + 0.5, 1.0); }`),u.fragmentShader=u.fragmentShader.replace("#include <fog_fragment>",`
      if (uIceMode > 0.5 && uIceMode < 1.5) {
        // the ice pass: the solid world was drawn first and copied (colour and depth); this walks the refracted ray
        // through that copy until it meets a solid, so a block pressed against the ice is what you see (obstructive),
        // a tree ten metres behind is found where the bent ray really meets it (a lens), and only a ray that meets
        // nothing shows the sky. The bend is deliberately strong (n = 1.45, glass rather than ice) because the
        // founder liked it that way; the normal carries the cracks and frost, so they facet the scene behind them
        vec3 P = -vViewPosition;                 // the surface, view space
        vec3 Vv = normalize(-P);                 // toward the camera
        // the bend follows the smooth surface with only half of the crack detail: full crack normals threw
        // neighbouring pixels onto different things behind and the image aliased into sparkle
        vec3 nV = normalize(mix(normalize(mat3(viewMatrix) * normalize(vWorldNormal)), normalize(normal), 0.5));
        // under the sea the interface is water to ice and the indices are close (1.33 against 1.31 in nature): the
        // bend is slight, what shows through is fuzzier, and the water pass, drawn after, does the refraction
        // tricks over the result (founder, 2026-09-12: "closer in refractive index ... low accuracy / fuzzy")
        float wet = 1.0 - smoothstep(uSeaLevel - 0.35, uSeaLevel + 0.05, vWorldPos.y);
        float eta = mix(1.0 / 1.45, 1.33 / 1.38, wet);
        vec3 T = refract(-Vv, nV, eta);
        if (dot(T, T) < 1e-6) T = -Vv;
        vec2 suv = gl_FragCoord.xy / uResolution;
        vec2 huv = suv;
        float travelled = 0.0, stepLen = 0.12;
        bool hit = false;
        vec3 p = P;
        for (int i = 0; i < 14; i++) {
          p += T * stepLen; travelled += stepLen; stepLen *= 1.35;
          vec4 c = uProjection * vec4(p, 1.0);
          vec2 uv = c.xy / c.w * 0.5 + 0.5;
          if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) break;
          huv = uv;
          float sceneD = -perspectiveDepthToViewZ(texture2D(uSceneDepth, uv).r, uNear, uFar);
          if (-p.z > sceneD + 0.02) { hit = true; break; }
        }
        // what shows through is softened: five taps in a small diamond that widens with the ice crossed (frosted
        // glass, and no single-pixel sparkle from a lamp behind), each capped so one bright texel cannot bloom
        float thick = hit ? clamp(travelled, 0.0, 5.0) : 5.0;
        vec2 br = (0.0015 + 0.0035 * min(thick, 3.0)) * (1.0 + 2.0 * wet) * vec2(1.0, uResolution.x / uResolution.y);
        vec3 behind = min(texture2D(uSceneColor, huv).rgb, vec3(2.5));
        behind += min(texture2D(uSceneColor, huv + vec2(br.x, 0.0)).rgb, vec3(2.5));
        behind += min(texture2D(uSceneColor, huv - vec2(br.x, 0.0)).rgb, vec3(2.5));
        behind += min(texture2D(uSceneColor, huv + vec2(0.0, br.y)).rgb, vec3(2.5));
        behind += min(texture2D(uSceneColor, huv - vec2(0.0, br.y)).rgb, vec3(2.5));
        behind *= 0.2;
        // the light through it absorbs toward blue over what it crossed (a ray that met nothing crossed the cap)
        // (under the sea the water pass absorbs by depth on its own: the ice keeps a third of its tint there, and
        // scatters more, so a submerged face reads as a milky body rather than a dark hole in the water)
        vec3 absorb = exp(-thick * vec3(0.55, 0.22, 0.10) * mix(1.0, 0.35, wet));
        vec3 seen = behind * absorb;
        vec3 Vw = normalize(cameraPosition - vWorldPos);
        vec3 Nw = normalize(vWorldNormal);
        float ndv = max(dot(Nw, Vw), 0.0);
        float fres = 0.03 + 0.97 * pow(1.0 - ndv, 5.0);
        vec3 Rw = reflect(-Vw, Nw);
        vec3 sky = mix(uSkyHorizon, uSkyZenith, clamp(Rw.y, 0.0, 1.0)) * (0.35 + 0.65 * uDaylight);
        float frost = mix(clamp((roughnessFactor - 0.06) * 1.6, 0.12, 0.85), 0.5, wet);
        vec3 lit = gl_FragColor.rgb;
        gl_FragColor.rgb = mix(seen, lit, frost) * (1.0 - fres) + sky * fres + lit * 0.15;
        if (uIceDebug > 0.5) gl_FragColor.rgb = uIceDebug < 1.5 ? seen : uIceDebug < 2.5 ? lit : uIceDebug < 3.5 ? vec3(thick / 5.0) : uIceDebug < 4.5 ? vec3(wet) : vec3(1.0, 0.0, 1.0);
      }
      #ifdef USE_FOG
        // aerial perspective: distance fog that brightens toward the sun
        vec3 vd = normalize(vWorldPos - cameraPosition);
        float sunAmt = pow(max(dot(vd, uSunDir), 0.0), 6.0) * uDaylight;
        vec3 fogCol = fogColor + uSkySunColor * 0.06 * sunAmt;
        float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, fogCol, fogFactor);
      #endif`)})(h.onBeforeCompile),h.customProgramCacheKey=()=>"splinecraft-terrain-v21-"+s+"-"+(t?"cheap":"full")+"-"+i,{material:h,uniforms:c}}function fh(n){const e=new Jh({depthPacking:Oh});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aMats; attribute vec3 aBary; flat varying vec3 vMatsD; varying vec3 vBaryD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMatsD = aMats; vBaryD = aBary;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
flat varying vec3 vMatsD; varying vec3 vBaryD;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          int m0 = int(vMatsD.x + 0.5), m1 = int(vMatsD.y + 0.5), m2 = int(vMatsD.z + 0.5);
          vec3 bw = clamp(vBaryD, 0.0, 1.0);
          float iceW = ((m0 == ${yn} ? bw.x : 0.0) + (m1 == ${yn} ? bw.y : 0.0) + (m2 == ${yn} ? bw.z : 0.0)) / max(bw.x + bw.y + bw.z, 1e-4);
          if (${n?"iceW <= 0.5":"iceW > 0.5"}) discard;
        }`)},e.customProgramCacheKey=()=>"splinecraft-ice-depth-"+(n?"only":"none"),e}class gy{mesh;uniforms={uSunDir:{value:new k(0,1,0)},uSunColor:{value:new k(1,1,1)},uZenith:{value:new k(.2,.36,.72)},uHorizon:{value:new k(.6,.7,.82)},uDaylight:{value:1},uTime:{value:0},uCloud:{value:.55}};constructor(){const e=new rt({uniforms:this.uniforms,side:Rt,depthWrite:!1,fog:!1,vertexShader:`
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
        }`});this.mesh=new vt(new xl(1,32,16),e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.mesh.scale.setScalar(900)}}const ha=n=>Math.round(n/R);function Bi(n,e,t,i){if(e<0||t<0||i<0||e>=n.nx-1||t>=n.ny-1||i>=n.nz-1)return!1;const s=n.index(e,t,i),r=n.hard[s];if(r!==0&&ft(r)){const h=n.sub[s]===0?Zt:n.sub[s];if(fu(h)>13)return!1}const a=n.density,o=n.ny*n.nz,l=n.nz;let c=0;return a[s]>0&&c++,a[s+1]>0&&c++,a[s+l]>0&&c++,a[s+l+1]>0&&c++,a[s+o]>0&&c++,a[s+o+1]>0&&c++,a[s+o+l]>0&&c++,a[s+o+l+1]>0&&c++,c<6}function vy(n,e,t,i){for(let s=t+1;s<n.ny-1;s++)if(!Bi(n,e,s,i))return!1;return!0}function xy(n,e){n.water.fill(0);const t=ha(e),i=[],s=n.water,r=Math.min(t-1,n.ny-2);if(r<0)return 0;for(let a=0;a<n.nx-1;a++)for(let o=0;o<n.nz-1;o++)if(Bi(n,a,r,o)&&vy(n,a,r,o)){const l=n.index(a,r,o);s[l]||(s[l]=1,i.push(a,r,o))}return Ay(n,i,t)}function My(n,e,t,i=!0){const s=Bu(n,e,t);if(!s.plan||!i)return s.removed;const r=il(n,s.plan,s.plan.cells.length);return r?Il(s.removed,r):s.removed}function Bu(n,e,t){const i=ha(t),s=n.water,r=Math.max(0,e.x0-1),a=Math.max(0,e.y0-1),o=Math.max(0,e.z0-1),l=Math.min(n.nx-2,e.x1),c=Math.min(n.ny-2,e.y1,i-1),h=Math.min(n.nz-2,e.z1);let f=null;const d=[],u=new Set;for(let _=r;_<=l;_++)for(let T=a;T<=c;T++)for(let b=o;b<=h;b++){const M=n.index(_,T,b),A=Bi(n,_,T,b);if(s[M]&&!A){s[M]=0,f=Il(f,{x0:_,y0:T,z0:b,x1:_+1,y1:T+1,z1:b+1});continue}A&&!s[M]&&(_>0&&s[M-n.nz*n.ny]!==0||_<n.nx-2&&s[M+n.nz*n.ny]!==0||T>0&&s[M-n.nz]!==0||T<i-1&&s[M+n.nz]!==0||b>0&&s[M-1]!==0||b<n.nz-2&&s[M+1]!==0)&&!u.has(M)&&(u.add(M),d.push(_,T,b,0))}if(!d.length)return{removed:f,plan:null};const g=[],v=d.slice(),m=n.ny*n.nz,p=n.nz;let S=0;for(;S<v.length;){const _=v[S],T=v[S+1],b=v[S+2],M=v[S+3];S+=4;const A=n.index(_,T,b);g.push(A,T,M);const C=(P,F,z,G)=>{F>=i||s[G]||u.has(G)||Bi(n,P,F,z)&&(u.add(G),v.push(P,F,z,M+1))};_>0&&C(_-1,T,b,A-m),_<n.nx-2&&C(_+1,T,b,A+m),T>0&&C(_,T-1,b,A-p),T<i-1&&C(_,T+1,b,A+p),b>0&&C(_,T,b-1,A-1),b<n.nz-2&&C(_,T,b+1,A+1)}const x=g.length/3,y=new Int32Array(x);for(let _=0;_<x;_++)y[_]=_;y.sort((_,T)=>g[_*3+1]-g[T*3+1]||g[_*3+2]-g[T*3+2]);const w=new Int32Array(x);for(let _=0;_<x;_++)w[_]=g[y[_]*3];return{removed:f,plan:{cells:w,done:0,contacts:d.length/4,carry:0}}}function il(n,e,t){const i=Math.min(e.cells.length,e.done+Math.max(0,Math.floor(t)));if(i<=e.done)return null;let s=null;const r=n.ny*n.nz,a=n.nz;for(let o=e.done;o<i;o++){const l=e.cells[o];if(!Bi(n,Math.floor(l/r),Math.floor(l/a)%n.ny,l%n.nz))continue;n.water[l]=1;const c=Math.floor(l/r),h=Math.floor(l/a)%n.ny,f=l%n.nz;s=Il(s,{x0:c,y0:h,z0:f,x1:c+1,y1:h+1,z1:f+1})}return e.done=i,s}function yy(n){return Math.max(36,n.contacts*30)}function Il(n,e){return n?{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}:e}function Ay(n,e,t,i){const s=n.water;let r=0;const a=n.ny*n.nz,o=n.nz;for(;e.length;){const l=e.pop(),c=e.pop(),h=e.pop(),f=n.index(h,c,l),d=(u,g,v,m)=>{s[m]||g>=t||Bi(n,u,g,v)&&(s[m]=1,r++,e.push(u,g,v))};h>0&&d(h-1,c,l,f-a),h<n.nx-2&&d(h+1,c,l,f+a),c>0&&d(h,c-1,l,f-o),c<t-1&&d(h,c+1,l,f+o),l>0&&d(h,c,l-1,f-1),l<n.nz-2&&d(h,c,l+1,f+1)}return r}const Sy=512,ph=Et.length;Et.length+1;function _y(n){const e=(t,i)=>{const s=new gl(t,n.size,n.size,n.layers);return s.format=Ft,s.type=yt,s.colorSpace=i?st:on,s.wrapS=s.wrapT=Vs,s.minFilter=Cn,s.magFilter=tt,s.generateMipmaps=!0,s.anisotropy=8,s.needsUpdate=!0,s};return{albedo:e(n.albedo,!0),normal:e(n.normal,!1),swatches:n.swatches}}const ra=16,Hs=8,wy=`
  precision highp float;
  uniform sampler2D uPrev, uMask;
  uniform vec2 uTexel, uWorld;
  uniform float uK, uDamp, uRest, uN;
  uniform vec4 uImp[${ra}];
  uniform vec4 uObs[${Hs}];
  uniform float uNObs;
  varying vec2 vUv;
  // 1 where water can move: the shore mask, minus any moving body sitting on this texel
  float open(vec2 uv, vec2 p) {
    float m = texture2D(uMask, uv).r;
    for (int i = 0; i < ${Hs}; i++) {
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
    for (int i = 0; i < ${ra}; i++) {
      if (float(i) >= uN) break;
      vec4 im = uImp[i];
      float d2 = dot(p - im.xy, p - im.xy);
      v += im.w * exp(-d2 / (im.z * im.z));
    }
    // a moving body pushes the water at its rim, in proportion to its speed — a small, bounded push:
    // this ran every step at ten times the size, and a player standing in the sea pumped the surface
    // down to the clamp and left a pit there for good (damping only ever acted on velocity)
    for (int i = 0; i < ${Hs}; i++) {
      if (float(i) >= uNObs) break;
      vec4 o = uObs[i];
      float d = length(p - o.xy);
      float rim = smoothstep(o.z * 0.7, o.z, d) * (1.0 - smoothstep(o.z, o.z * 1.6, d));
      v -= rim * min(o.w, 3.0) * 0.0015;
    }
    // the surface wants to be level: a weak spring to rest removes any offset a push left behind
    v -= h * uRest;
    v *= uDamp;
    v = clamp(v, -0.03, 0.03);
    h += v;
    float m = open(vUv, p);
    h *= m; v *= m;
    h = clamp(h, -0.12, 0.12);
    gl_FragColor = vec4(h, v, 0.0, 1.0);
  }`;class Ey{constructor(e,t,i,s){this.worldX=e,this.worldZ=t,this.level=s;const r=Math.max(16,Math.round(e*i)),a=Math.max(16,Math.round(t*i)),o=()=>new at(r,a,{type:Sn,format:Ft,minFilter:tt,magFilter:tt,depthBuffer:!1,stencilBuffer:!1});this.rts=[o(),o()],this.mask=new na(new Uint8Array(4),1,1,hi,yt),this.mask.minFilter=tt,this.mask.magFilter=tt,this.mask.needsUpdate=!0,this.mat=new rt({vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:wy,uniforms:{uPrev:{value:null},uMask:{value:this.mask},uTexel:{value:new me(1/r,1/a)},uWorld:{value:new me(e,t)},uK:{value:.06},uDamp:{value:.988},uRest:{value:.004},uN:{value:0},uImp:{value:Array.from({length:ra},()=>new mt)},uObs:{value:Array.from({length:Hs},()=>new mt)},uNObs:{value:0}},depthTest:!1,depthWrite:!1}),this.scene.add(new vt(new Ln(2,2),this.mat))}rts;cur=0;mat;scene=new Li;cam=new ys(-1,1,1,-1,0,1);mask;pending=[];acc=0;get texture(){return this.rts[this.cur].texture}get maskTexture(){return this.mask}get texelSize(){return this.mat.uniforms.uTexel.value}setMask(e){const t=ha(this.level),i=Math.min(t-1,e.ny-2),s=e.nx-1,r=e.nz-1,a=new Uint8Array(s*r);if(i>=0)for(let o=0;o<r;o++)for(let l=0;l<s;l++)a[o*s+l]=e.water[e.index(l,i,o)]?255:0;this.mask.dispose(),this.mask=new na(a,s,r,hi,yt),this.mask.minFilter=tt,this.mask.magFilter=tt,this.mask.needsUpdate=!0,this.mat.uniforms.uMask.value=this.mask}setObstacles(e){const t=this.mat.uniforms,i=Math.min(Hs,e.length);for(let s=0;s<i;s++)t.uObs.value[s].set(e[s][0],e[s][1],e[s][2],e[s][3]);t.uNObs.value=i}splash(e,t,i,s){this.pending.push(e,t,Math.max(.15,i),s)}step(e,t){this.acc=Math.min(this.acc+t,3/60);const i=this.mat.uniforms;let s=!0;for(;this.acc>=1/60;){this.acc-=1/60;const r=s?Math.min(ra,this.pending.length/4):0;for(let l=0;l<r;l++)i.uImp.value[l].set(this.pending[l*4],this.pending[l*4+1],this.pending[l*4+2],this.pending[l*4+3]);i.uN.value=r,i.uPrev.value=this.rts[this.cur].texture;const a=1-this.cur,o=e.getRenderTarget();e.setRenderTarget(this.rts[a]),e.render(this.scene,this.cam),e.setRenderTarget(o),this.cur=a,s=!1}s||(this.pending.length=0)}}const Ty=.08,by=`
  uniform sampler2D uWave, uWaveMask;
  uniform vec2 uWorldSize;
  attribute float aShore, aEdge;
  varying vec3 vWorldPos;
  varying float vShore;
  void main() {
    vShore = aShore;
    vec3 p = position;
    // waves lift the grid, fading with the sim mask and pinned to the level on every vertex that touches
    // the shoreline ring: a lifted surface beside a block top or a ledge at the waterline rode over it
    vec2 wuv = p.xz / uWorldSize;
    float m = texture2D(uWaveMask, wuv).r;
    p.y += texture2D(uWave, wuv).r * m * m * (1.0 - aEdge);
    vWorldPos = p;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }`,Uu=`
  vec3 waterBody(vec3 light) { return vec3(0.02, 0.10, 0.16) * (light * 2.0 + 0.01); }
  // Seen through d metres of water: absorbed per metre (red first), blue-shifted, filled in with the body
  // colour, and dimmed for the light the water above the camera already took (uDim)
  vec3 underwaterGrade(vec3 c, float d, vec3 light, float dim) {
    vec3 absorb = exp(-d * vec3(0.55, 0.24, 0.15));
    return c * absorb * vec3(0.8, 0.92, 1.0) * dim + waterBody(light) * (1.0 - exp(-d * 0.15));
  }`,Cy=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 1.0, 1.0); }`,Dy=`
  precision highp sampler2DArray;
  #include <packing>
  uniform sampler2D inputBuffer, uSceneDepth;
  uniform sampler2DArray uNormal;
  uniform float uNear, uFar, uUnder, uDim, uLayer, uTime;
  uniform vec2 uResolution;
  uniform vec3 uLight;
  varying vec2 vUv;
  float viewZ(float ndcDepth) { return perspectiveDepthToViewZ(ndcDepth, uNear, uFar); }
  `+Uu+`
  void main() {
    vec3 c = texture2D(inputBuffer, vUv).rgb;
    if (uUnder > 0.5) {
      float d0 = -viewZ(texture2D(uSceneDepth, vUv).r);
      // the water between the eye and the scene sways the view: two drifting normal maps in screen space,
      // an amplitude that grows with that distance (a hand in front of you is steady, the far bed wavers),
      // and the surface pass's rule against pulling a nearer thing across — its depth must be about the same
      vec2 sp = vUv * vec2(uResolution.x / uResolution.y, 1.0);
      vec3 n1 = texture(uNormal, vec3(sp * 1.4 + uTime * vec2(0.025, 0.018), uLayer)).xyz * 2.0 - 1.0;
      vec3 n2 = texture(uNormal, vec3(sp * 2.9 - uTime * vec2(0.016, 0.03), uLayer)).xyz * 2.0 - 1.0;
      vec2 wob = (n1.xy * 0.7 + n2.xy * 0.3) * 0.014 * smoothstep(0.0, 6.0, d0);
      vec2 wuv = clamp(vUv + wob, vec2(0.001), vec2(0.999));
      float d1 = -viewZ(texture2D(uSceneDepth, wuv).r);
      if (d1 < d0 * 0.6) { wuv = vUv; d1 = d0; }
      c = underwaterGrade(texture2D(inputBuffer, wuv).rgb, min(d1, 80.0), uLight, uDim);
    }
    gl_FragColor = vec4(c, 1.0);
  }`,Ry=`
  precision highp sampler2DArray;
  // foam is a hint, not a paint stroke: a tenth of the full line (founder, 2026-09-08)
  #define FOAM_STRENGTH 0.1
  #include <packing>
  uniform sampler2DArray uNormal;
  uniform sampler2D uSceneColor, uSceneDepth, uReflTex, uWave;
  uniform vec2 uWorldSize, uWaveTexel;
  uniform mat4 uReflMatrix;
  uniform float uLayer, uTime, fogDensity, uNear, uFar, uReflect, uUnder;
  uniform vec2 uResolution;
  uniform vec3 uSunDir, uSunColor, uZenith, uHorizon, uAmbient, fogColor;
  uniform sampler3D uSh0, uSh1, uSh2;
  uniform vec3 uGiSize;
  uniform float uGiTexel, uGiLit, uDim;
  varying vec3 vWorldPos;
  varying float vShore;

  vec3 skyRadiance(vec3 d) {
    float t = clamp(d.y, 0.0, 1.0);
    return mix(uHorizon, uZenith, pow(max(t, 1e-5), 0.55));
  }
  // What a white, flat, upward-facing surface here would reflect: the same L1
  // SH irradiance the terrain is lit by, over pi. Shallows and foam take this
  // instead of a sky-ambient constant, so a dark shore is dark and a lantern
  // on the bank brightens it. Sky only outside the volume (or without SH).
  float shUp(vec4 c) { return max(0.886227 * c.x + 1.023326 * c.y, 0.0); }
  vec3 surfaceLight(vec3 p) {
    vec3 skyL = skyRadiance(vec3(0.0, 1.0, 0.0));
    if (uGiLit < 0.5) return uAmbient * 1.6 + 0.25;
    vec3 uvw = (p + vec3(0.0, uGiTexel * 0.75, 0.0)) / uGiSize;
    if (any(lessThan(uvw, vec3(0.0))) || any(greaterThan(uvw, vec3(1.0)))) return skyL;
    vec3 e = vec3(shUp(textureLod(uSh0, uvw, 0.0)), shUp(textureLod(uSh1, uvw, 0.0)), shUp(textureLod(uSh2, uvw, 0.0))) * 0.318310;
    return mix(e, skyL, smoothstep(0.9, 1.0, uvw.y));
  }
  float viewZ(float ndcDepth) { return perspectiveDepthToViewZ(ndcDepth, uNear, uFar); }
  `+Uu+`

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
    vec2 ruv = uv + slope * (below ? 0.09 : 0.035 * thickR);
    float rNdc = texture2D(uSceneDepth, ruv).r;
    if (rNdc < waterNdc) { ruv = uv; rNdc = sceneNdc; }
    vec3 refr = texture2D(uSceneColor, ruv).rgb;
    float thickRef = max(-viewZ(rNdc) + viewZ(waterNdc), 0.0);
    vec3 light = surfaceLight(vWorldPos);
    vec3 shallow = vec3(0.10, 0.34, 0.36) * (light * 1.6 + 0.01);
    vec3 deep = vec3(0.015, 0.07, 0.10) * (light * 2.0 + 0.01);
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
    // shoreline foam: where the water is a few centimetres deep and the shore flag says something rises here —
    // a beach's edge, or a wall or block face at the waterline (the meniscus line the founder asked to keep)
    float foam = (smoothstep(0.45, 0.0, thick) * smoothstep(0.3, 0.7, n1.z * 0.5 + 0.5 + n2.x * 0.3) * smoothstep(0.0, 0.5, vShore) + smoothstep(0.35, 0.9, crest) * 0.6) * (1.0 - float(below));
    vec3 col;
    if (below) {
      // from underneath: the air above through the surface. The water is between the camera and the
      // surface, so absorb over that distance (not the air beyond); past the critical angle the surface
      // mirrors the dark water back (Snell's window)
      float dSurf = -viewZ(waterNdc);
      vec3 col0 = underwaterGrade(refr, dSurf, light, uDim);
      // Snell's window, soft: straight up is clear, the edges dim and mirror some water back, but the world
      // above stays visible (warped by the waves) at every angle — you can always see out
      float window = smoothstep(0.1, 0.6, dot(V, vec3(0.0, -1.0, 0.0)));
      col = mix(col0 * 0.5 + waterBody(light) * 0.35, col0, window);
    } else {
      col = mix(under, refl, fres) + uSunColor * spec + min(foam, 1.0) * (light * 2.6 + 0.03) * FOAM_STRENGTH;
    }
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = 1.0 - exp(-fogDensity * fogDensity * depth * depth);
    col = mix(col, fogColor, fogFactor);
    if (any(isnan(col))) col = deep;
    gl_FragColor = vec4(col, 1.0);
  }`;class Iy extends kt{constructor(e,t,i,s,r,a,o,l){super("WaterPass"),this.worldScene=e,this.cam=t,this.level=i,this.sim=new Ey(a,o,l,i),this.uniforms.uWorldSize.value.set(a,o),this.uniforms.uWaveTexel.value.copy(this.sim.texelSize),this.needsDepthTexture=!0,this.needsSwap=!0,this.uniforms.uNormal.value=s,this.grade.uniforms.uNormal.value=s,this.uniforms.uNear.value=t.near,this.uniforms.uFar.value=t.far,this.clip=new ri(new k(0,1,0),-i+.02),this.refl=r?new at(1,1,{type:Sn,depthBuffer:!0,minFilter:tt,magFilter:tt}):null,this.uniforms.uReflect.value=r?1:0,this.refl&&(this.uniforms.uReflTex.value=this.refl.texture);const c=new rt({uniforms:this.uniforms,vertexShader:by,fragmentShader:Ry,depthTest:!1,depthWrite:!1,side:Gt,transparent:!1});this.mesh=new vt(new Ht,c),this.mesh.frustumCulled=!1,this.waterScene.add(this.mesh),this.fullscreenMaterial=this.grade}mesh;uniforms={uNormal:{value:null},uSceneColor:{value:null},uSceneDepth:{value:null},uReflTex:{value:null},uReflMatrix:{value:new Ke},uLayer:{value:ph},uTime:{value:0},uNear:{value:.08},uFar:{value:1200},uReflect:{value:0},uUnder:{value:0},uResolution:{value:new me(1,1)},uSunDir:{value:new k(0,1,0)},uSunColor:{value:new k(1,1,1)},uZenith:{value:new k(.2,.36,.72)},uHorizon:{value:new k(.6,.7,.82)},uAmbient:{value:new k(.3,.4,.6)},uSh0:{value:null},uSh1:{value:null},uSh2:{value:null},uGiSize:{value:new k(1,1,1)},uGiTexel:{value:1},uGiLit:{value:0},uDim:{value:1},fogColor:{value:new Ye},fogDensity:{value:.006},uWave:{value:null},uWaveMask:{value:null},uWorldSize:{value:new me(1,1)},uWaveTexel:{value:new me(1,1)}};waterScene=new Li;grade=new rt({uniforms:{inputBuffer:{value:null},uSceneDepth:{value:null},uNear:{value:.08},uFar:{value:1200},uUnder:{value:0},uLight:{value:new k(.3,.4,.6)},uDim:{value:1},uNormal:{value:null},uLayer:{value:ph},uTime:{value:0},uResolution:{value:new me(1,1)}},vertexShader:Cy,fragmentShader:Dy,depthTest:!1,depthWrite:!1});refl;mirror=new Kt;clip;sim;lastTime=-1;frustum=new js;hasWater=!1;area=0;rebuild(e){const t=ha(this.level),i=Math.min(t-1,e.ny-2),s=[],r=[],a=new Map,o=[],l=[],c=[],h=(u,g,v)=>{const m=(u*1024+v)*1024+g;let p=a.get(m);return p===void 0&&(p=s.length/3,a.set(m,p),s.push(u*R,g*R,v*R),o.push(0),l.push(0),c.push(0)),p};let f=0;if(i>=0){const u=e.water,g=e.nx-1,v=e.nz-1,m=e.nz,p=new Map,S=(x,y,w)=>(x*1024+w)*1024+y;for(let x=0;x<g;x++)for(let y=0;y<v;y++)for(let w=i;w>=0;w--){const _=e.index(x,w,y);if(!(!u[_]||!(w===i||!u[_+m]&&Bi(e,x,w+1,y)))){f++;for(let b=-1;b<=1;b++)for(let M=-1;M<=1;M++){const A=x+b,C=y+M;if(A>=0&&C>=0&&A<g&&C<v){const P=S(A,w,C);b===0&&M===0?p.set(P,1):p.has(P)||p.set(P,2)}}}}for(const[x,y]of p){const w=x%1024,_=Math.floor(x/1024)%1024,T=Math.floor(x/(1024*1024)),b=h(T,w+1,_),M=h(T+1,w+1,_),A=h(T+1,w+1,_+1),C=h(T,w+1,_+1);r.push(b,M,A,b,A,C),y===2?(l[b]=1,l[M]=1,l[A]=1,l[C]=1):(c[b]=1,c[M]=1,c[A]=1,c[C]=1)}for(let x=0;x<c.length;x++)c[x]||(s[x*3+1]-=Ty),o[x]=l[x]}const d=new Ht;d.setAttribute("position",new ln(s,3)),d.setAttribute("aShore",new ln(o,1)),d.setAttribute("aEdge",new ln(l,1)),d.setIndex(r),d.computeBoundingBox(),d.boundingBox&&(d.boundingBox.min.y-=.5,d.boundingBox.max.y+=.5),this.mesh.geometry.dispose(),this.mesh.geometry=d,this.hasWater=s.length>0,this.area=f*R*R,this.sim.setMask(e),this.uniforms.uWaveMask.value=this.sim.maskTexture}setObstacles(e){this.sim.setObstacles(e)}splash(e,t,i,s){this.sim.splash(e,t,i,s)}setUnderwater(e){this.uniforms.uUnder.value=e?1:0,this.grade.uniforms.uUnder.value=e?1:0}dispose(){}setDepthTexture(e){this.uniforms.uSceneDepth.value=e,this.grade.uniforms.uSceneDepth.value=e}setUnderwaterLight(e,t,i,s){this.grade.uniforms.uLight.value.set(e,t,i),this.grade.uniforms.uDim.value=s,this.uniforms.uDim.value=s}setSize(e,t){this.uniforms.uResolution.value.set(e,t),this.grade.uniforms.uResolution.value.set(e,t),this.refl?.setSize(Math.max(1,Math.floor(e*.5)),Math.max(1,Math.floor(t*.5)))}render(e,t,i){if(!t||!i)return;const s=this.uniforms.uTime.value,r=this.lastTime<0?1/60:Math.min(.1,Math.max(0,s-this.lastTime));this.lastTime=s,this.hasWater&&(this.sim.step(e,r),this.uniforms.uWave.value=this.sim.texture);const a=this.mesh.geometry.boundingBox;this.frustum.setFromProjectionMatrix(new Ke().multiplyMatrices(this.cam.projectionMatrix,this.cam.matrixWorldInverse));const o=this.hasWater&&(!a||this.frustum.intersectsBox(a)),l=this.uniforms;if(l.uNear.value=this.cam.near,l.uFar.value=this.cam.far,o&&this.refl&&l.uUnder.value<.5&&this.cam.position.y>this.level){this.setupMirror();const h=e.clippingPlanes,f=e.autoClear;e.clippingPlanes=[this.clip],e.autoClear=!0,e.setRenderTarget(this.refl),e.render(this.worldScene,this.mirror),e.clippingPlanes=h,e.autoClear=f}if(this.grade.uniforms.inputBuffer.value=t.texture,this.grade.uniforms.uTime.value=s,this.grade.uniforms.uNear.value=this.cam.near,this.grade.uniforms.uFar.value=this.cam.far,e.setRenderTarget(i),e.render(this.scene,this.camera),!o)return;l.uSceneColor.value=t.texture;const c=e.autoClear;e.autoClear=!1,e.render(this.waterScene,this.cam),e.autoClear=c}setupMirror(){const e=this.cam,t=this.mirror,i=new k(0,1,0),s=new k(0,this.level,0),r=new k().setFromMatrixPosition(e.matrixWorld),a=r.clone().sub(s);a.reflect(i).negate().add(s);const o=new Ke().extractRotation(e.matrixWorld),l=new k(0,0,-1).applyMatrix4(o).add(r),c=s.clone().sub(l);c.reflect(i).negate().add(s),t.position.copy(a),t.up.set(0,1,0).applyMatrix4(o).reflect(i),t.lookAt(c),t.near=e.near,t.far=e.far,t.updateMatrixWorld(),t.projectionMatrix.copy(e.projectionMatrix),this.uniforms.uReflMatrix.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(t.projectionMatrix).multiply(t.matrixWorldInverse)}}const ks=1,mh="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Py="uniform sampler2D tSrc; varying vec2 vUv; void main() { gl_FragColor = texture2D(tSrc, vUv); }",Ly="uniform sampler2D tSrc; varying vec2 vUv; void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).r, 0.0, 0.0, 1.0); }";class By extends kt{constructor(e,t,i){super("IcePass"),this.cam=e,this.world=t,this.uniforms=i,this.needsSwap=!1,this.needsDepthTexture=!0,this.needsDepthBlit=!0,this.copyTarget=new at(1,1,{type:Sn,depthBuffer:!1}),this.depthTarget=new at(1,1,{type:tn,format:hi,depthBuffer:!1,minFilter:Mt,magFilter:Mt}),this.quad=new vt(new Ln(2,2),this.copyMat),this.copyScene.add(this.quad)}meshes=new Set;copyTarget;depthTarget;copyMat=new rt({uniforms:{tSrc:{value:null}},vertexShader:mh,fragmentShader:Py,depthTest:!1,depthWrite:!1});depthMat=new rt({uniforms:{tSrc:{value:null}},vertexShader:mh,fragmentShader:Ly,depthTest:!1,depthWrite:!1});copyScene=new Li;quad;copyCam=new ys(-1,1,1,-1,0,1);frustum=new js;pv=new Ke;sphere=new fi;setSize(e,t){this.copyTarget.setSize(e,t),this.depthTarget.setSize(e,t),this.uniforms.uResolution.value.set(e,t)}render(e,t){if(!t||this.meshes.size===0)return;this.pv.multiplyMatrices(this.cam.projectionMatrix,this.cam.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.pv);let i=!1;for(const o of this.meshes){const l=o.geometry.boundingSphere;if(l&&(o.updateWorldMatrix(!0,!1),this.sphere.copy(l).applyMatrix4(o.matrixWorld),this.frustum.intersectsSphere(this.sphere))){i=!0;break}}if(!i)return;this.quad.material=this.copyMat,this.copyMat.uniforms.tSrc.value=t.texture,e.setRenderTarget(this.copyTarget),e.render(this.copyScene,this.copyCam),this.quad.material=this.depthMat,this.depthMat.uniforms.tSrc.value=t.depthTexture,e.setRenderTarget(this.depthTarget),e.render(this.copyScene,this.copyCam);const s=this.uniforms;s.uSceneColor.value=this.copyTarget.texture,s.uSceneDepth.value=this.depthTarget.texture,s.uNear.value=this.cam.near,s.uFar.value=this.cam.far,s.uProjection.value.copy(this.cam.projectionMatrix),s.uResolution.value.set(t.width,t.height);const r=e.autoClear,a=this.cam.layers.mask;e.autoClear=!1,this.cam.layers.set(ks),e.setRenderTarget(t),e.render(this.world,this.cam),this.cam.layers.mask=a,e.autoClear=r}dispose(){this.copyTarget.dispose(),this.depthTarget.dispose(),this.copyMat.dispose(),this.depthMat.dispose()}}const Uy=`
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
  }`,Ny=`
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
  }`;class Fy{constructor(e){this.scene=e,this.material=new rt({uniforms:{uTime:{value:0}},vertexShader:Uy,fragmentShader:Ny,transparent:!0,depthWrite:!1,blending:Kr,side:Gt}),this.geo=new Ln(1,1),this.geo.translate(.5,.5,0)}material;meshes=new Map;geo;set(e,t){const i=this.meshes.get(e);i&&(this.scene.remove(i),i.geometry.dispose(),this.meshes.delete(e));const s=t.length/4;if(s===0)return;const r=new yf;r.index=this.geo.index,r.attributes.position=this.geo.attributes.position,r.attributes.uv=this.geo.attributes.uv,r.instanceCount=s;const a=new Float32Array(s*3),o=new Float32Array(s),l=new Float32Array(s);for(let h=0;h<s;h++)a[h*3]=t[h*4],a[h*3+1]=t[h*4+1],a[h*3+2]=t[h*4+2],l[h]=t[h*4+3],o[h]=((a[h*3]*7.31+a[h*3+2]*3.17+a[h*3+1])%1+1)%1;r.setAttribute("aOffset",new ci(a,3)),r.setAttribute("aSeed",new ci(o,1)),r.setAttribute("aKind",new ci(l,1));const c=new vt(r,this.material);c.frustumCulled=!1,c.renderOrder=20,this.scene.add(c),this.meshes.set(e,c)}update(e){this.material.uniforms.uTime.value=e}get count(){let e=0;for(const t of this.meshes.values())e+=t.geometry.instanceCount;return e}}const Ur=1,gh=2,Nr=8,zy=`
  uniform float uTime;
  uniform float uFadeAt, uFadeBand;
  attribute float aSeed;
  attribute float aBorn;
  attribute float aDie;
  varying float vSeed;
  varying vec2 vUv2;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;
`;function vh(n,e,t,i){const s=new ia({color:16777215,roughness:.85,metalness:0,side:Gt,alphaTest:.5}),r={...my(e),uTime:{value:0},uFadeAt:{value:26},uFadeBand:{value:8}};return s.defines={...Lu(t,i),SC_KIND:n},s.onBeforeCompile=a=>{Object.assign(a.uniforms,r),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
`+zy).replace("#include <begin_vertex>",`
        // a blade grows from its root when it first appears, and shrinks away when its chunk retires it
        float grow = smoothstep(0.0, 0.4, uTime - aBorn) * (1.0 - smoothstep(0.0, 0.4, uTime - aDie));
        // and by distance: foliage is fully grown within uFadeAt of the camera and gone a band further out, so its chunks come and go unseen
        vec3 iorigin0 = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        grow *= clamp((uFadeAt - distance(cameraPosition, iorigin0)) / uFadeBand, 0.0, 1.0);
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
        ${Iu}
        uniform float uTime;
        varying float vSeed;
        varying vec2 vUv2;
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
        ${Pu}`).replace("#include <map_fragment>",`
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
        if (any(isnan(gl_FragColor.rgb)) || any(isinf(gl_FragColor.rgb))) gl_FragColor.rgb = vec3(0.0);`)},s.customProgramCacheKey=()=>`splinecraft-scatter-v2-${n}-${t}-${i}`,s.__uniforms=r,s}class Oy{constructor(e,t,i,s,r=1){this.scene=e,this.density=r,this.grassMat=vh(Ur,t,i,s),this.leafMat=vh(gh,t,i,s),this.bladeGeo=new Ln(.09,.55,1,3),this.bladeGeo.translate(0,.275,0),this.leafGeo=new Ln(.75,.75)}grassMat;leafMat;bladeGeo;leafGeo;meshes=new Map;born=new Map;retiring=[];time=0;dummy=new zt;density=1;count=0;set(e,t,i=this.scene,s=this.time){const r=this.meshes.get(e);if(r){for(const m of r){const p=m.geometry.getAttribute("aDie");p.array.fill(s),p.needsUpdate=!0,this.retiring.push({mesh:m,at:s}),this.count-=m.count}this.meshes.delete(e)}const a=this.born.get(e)??new Map,o=new Map,l=t.length/Nr;if(l===0)return;let c=0,h=0;for(let m=0;m<l;m++)t[m*Nr+7]===Ur?c++:h++;const f=m=>this.density>=1||t[m*Nr+6]<this.density,d=(m,p,S,x)=>{if(p===0)return null;const y=S.clone(),w=new of(y,x,p),_=new Float32Array(p),T=new Float32Array(p),b=new Float32Array(p).fill(1e9);let M=0;const A=new k(0,1,0),C=new k,P=new Ii;for(let F=0;F<l;F++){const z=F*Nr;if(t[z+7]!==m||!f(F))continue;const G=t[z+6];if(this.dummy.position.set(t[z],t[z+1],t[z+2]),C.set(t[z+3],t[z+4],t[z+5]),m===Ur){this.dummy.quaternion.setFromAxisAngle(A,G*Math.PI*2);const N=.7+G*.7;this.dummy.scale.set(N,N,N)}else{P.setFromUnitVectors(new k(0,0,1),C),this.dummy.quaternion.copy(P).multiply(new Ii().setFromAxisAngle(new k(0,0,1),G*Math.PI*2)),this.dummy.position.addScaledVector(C,.12+G*.15);const N=.75+G*.6;this.dummy.scale.set(N,N,N)}this.dummy.updateMatrix(),w.setMatrixAt(M,this.dummy.matrix),_[M]=G;const L=Math.round(G*16777216)*3+m,B=a.get(L)??s;T[M]=B,o.set(L,B),M++}return w.count=M,y.setAttribute("aSeed",new ci(_,1)),y.setAttribute("aBorn",new ci(T,1)),y.setAttribute("aDie",new ci(b,1)),w.receiveShadow=!0,w.castShadow=!1,w.frustumCulled=!1,i.add(w),this.count+=M,w},u=[],g=d(Ur,c,this.bladeGeo,this.grassMat);g&&u.push(g);const v=d(gh,h,this.leafGeo,this.leafMat);v&&u.push(v),u.length&&this.meshes.set(e,u),o.size?this.born.set(e,o):this.born.delete(e)}setFade(e,t){for(const i of[this.grassMat,this.leafMat]){const s=i.__uniforms;s.uFadeAt.value=e,s.uFadeBand.value=t}}update(e){this.time=e;for(const t of[this.grassMat,this.leafMat])t.__uniforms.uTime.value=e;if(this.retiring.length){const t=[];for(const i of this.retiring)e-i.at>.45?(i.mesh.parent?.remove(i.mesh),i.mesh.geometry.dispose()):t.push(i);this.retiring=t}}setVisible(e){for(const t of this.meshes.values())for(const i of t)i.visible=e}}const ky=`
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
  }`,Gy=`
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
  }`;class Hy{constructor(e,t){this.scene=e,this.material=new rt({uniforms:{uTime:{value:0},uPixelRatio:{value:t},uNight:{value:0}},vertexShader:ky,fragmentShader:Gy,transparent:!0,depthWrite:!1,blending:Kr})}material;clouds=new Map;count=0;set(e,t,i,s,r){const a=this.clouds.get(e);a&&(this.scene.remove(a),a.geometry.dispose(),this.count-=a.geometry.getAttribute("aOrigin").count,this.clouds.delete(e));const o=14;let l=0;for(let x=0;x<t.length/4;x++)t[x*4+3]<.5&&l++;const c=l*o,h=i.length/s;let f=0;for(let x=0;x<h;x++)i[x*s+6]<r&&f++;const d=c+f;if(d===0)return;const u=new Float32Array(d*3),g=new Float32Array(d),v=new Float32Array(d);let m=0;for(let x=0;x<t.length/4;x++)for(let y=0;y<o&&!(t[x*4+3]>=.5);y++)u[m*3]=t[x*4],u[m*3+1]=t[x*4+1]+.1,u[m*3+2]=t[x*4+2],g[m]=(x*.618+y*.137)%1,v[m]=0,m++;for(let x=0;x<h;x++){const y=x*s;i[y+6]>=r||(u[m*3]=i[y],u[m*3+1]=i[y+1]+.5,u[m*3+2]=i[y+2],g[m]=i[y+6]/r,v[m]=1,m++)}const p=new Ht;p.setAttribute("position",new Ze(new Float32Array(d*3),3)),p.setAttribute("aOrigin",new Ze(u,3)),p.setAttribute("aSeed",new Ze(g,1)),p.setAttribute("aKind",new Ze(v,1));const S=new df(p,this.material);S.frustumCulled=!1,S.renderOrder=21,this.scene.add(S),this.clouds.set(e,S),this.count+=d}update(e,t){this.material.uniforms.uTime.value=e,this.material.uniforms.uNight.value=1-t}}class Vy extends Fi{constructor(){super("SunStreaksEffect",`
      uniform vec2 uSun;
      uniform float uOn, uAspect;
      float ign(vec2 p) { return fract(52.9829189 * fract(0.06711056 * p.x + 0.00583715 * p.y)); }
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        if (uOn < 0.5) { outputColor = inputColor; return; }
        vec2 d = uSun - uv;
        float dist = length(d * vec2(uAspect, 1.0));
        const int N = 28;
        float jitter = ign(gl_FragCoord.xy);
        vec3 acc = vec3(0.0);
        float w = 1.0, tw = 0.0;
        for (int i = 0; i < N; i++) {
          float t = (float(i) + jitter) / float(N);
          vec2 p = uv + d * t * 0.92;
          vec3 c = texture2D(inputBuffer, p).rgb;
          // only what is far brighter than the water: the disc, and the glints the surface throws
          float l = max(0.0, dot(c, vec3(0.299, 0.587, 0.114)) - 1.4);
          acc += c * min(l, 6.0) * w;
          tw += w;
          w *= 0.94;
        }
        vec3 rays = acc / tw;
        float fall = exp(-dist * 1.4);
        outputColor = vec4(inputColor.rgb + rays * (0.9 * fall + 0.18), inputColor.a);
      }`,{blendFunction:We.NORMAL,uniforms:new Map([["uSun",new oe(new me(.5,.5))],["uOn",new oe(0)],["uAspect",new oe(1)]])})}set(e,t,i){this.uniforms.get("uOn").value=e?1:0,this.uniforms.get("uSun").value.copy(t),this.uniforms.get("uAspect").value=i}}const Wy=`
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
  uniform float uUnder;
  uniform sampler2D uWave;
  uniform vec2 uWorldSize, uWaveTexel;
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
  // The surface as a lens: where the ripples are concave the sun converges into a bright column, where
  // convex it thins. The wave height field's Laplacian at the point the sun ray enters the water is
  // the focusing; a faster procedural shimmer stands in for the capillary ripples the sim is too coarse for.
  float lensing(vec3 q) {
    vec2 uv = q.xz / uWorldSize;
    if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) return 1.0;
    vec2 dx = vec2(uWaveTexel.x, 0.0), dz = vec2(0.0, uWaveTexel.y);
    float h = texture2D(uWave, uv).r;
    float lap = texture2D(uWave, uv + dx).r + texture2D(uWave, uv - dx).r + texture2D(uWave, uv + dz).r + texture2D(uWave, uv - dz).r - 4.0 * h;
    float focus = clamp(1.0 - lap * 220.0, 0.15, 5.0);
    float shimmer = 0.75 + 0.25 * sin(q.x * 6.1 + uTime * 1.9) * sin(q.z * 5.3 - uTime * 1.4) + 0.2 * sin((q.x + q.z) * 9.7 + uTime * 2.6);
    return focus * shimmer;
  }
  void main() {
    if (uUnder > 0.5) { underwater(); return; }
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
  }`,Xy=`
  void underwater() {
    float depth = textureLod(depthBuffer, vUv, 0.0).r;
    vec3 target = worldFromDepth(vUv, min(depth, 0.9999));
    vec3 ro = cameraPos;
    vec3 seg = target - ro;
    float len = length(seg);
    float maxLen = 36.0;
    if (len > maxLen) { seg *= maxLen / len; len = maxLen; }
    vec3 rd = len > 1e-4 ? seg / len : vec3(0.0, 0.0, 1.0);
    // the sun seen from inside the water: Snell's law on a flat surface
    vec3 L = uSunDir;
    float sinI = length(L.xz);
    float sinT = sinI / 1.33;
    float cosT = sqrt(max(0.0, 1.0 - sinT * sinT));
    float k = sinI > 1e-4 ? sinT / sinI : 0.0;
    vec3 Lw = vec3(L.x * k, cosT, L.z * k); // unit: the horizontal part is sinT, the vertical cosT
    float cosV = dot(rd, Lw);
    const float g = 0.72;
    float hg = min((1.0 - g * g) / (4.0 * 3.14159 * pow(1.0 + g * g - 2.0 * g * cosV, 1.5)), 1.1); // the peak toward the sun is a glare, not a whiteout
    float sunUp = step(0.02, L.y);
    float jitter = ign(gl_FragCoord.xy);
    float dt = len / float(uSteps);
    float T = 1.0;
    vec3 acc = vec3(0.0);
    const float dens = 0.085;
    for (int i = 0; i < 32; i++) {
      if (i >= uSteps) break;
      float t = (float(i) + jitter) * dt;
      vec3 p = ro + rd * t;
      float below = uSeaLevel - p.y;
      if (below <= 0.0) continue;
      vec3 reach = exp(-below * vec3(0.55, 0.24, 0.15));
      vec3 q = p + Lw * (below / max(Lw.y, 0.2));
      float lens = lensing(q);
      vec3 sun = uSunColor * (hg * sunVisible(p) * lens * 1.5) * sunUp;
      vec3 sky = uSkyAmbient * 0.04;
      vec3 S = (sun + sky) * reach * dens;
      acc += T * S * dt;
      T *= exp(-dens * 0.22 * dt);
    }
    if (any(isnan(acc)) || any(isinf(acc)) || isnan(T)) { acc = vec3(0.0); T = 1.0; }
    gl_FragColor = vec4(acc, T);
  }`;class Yy extends kt{constructor(e,t,i,s=16){super("VolumetricPass"),this.cam=e,this.sun=t,this.needsDepthTexture=!0,this.needsSwap=!1,this.target=new at(1,1,{type:Sn,depthBuffer:!1,minFilter:tt,magFilter:tt}),this.mat=new rt({vertexShader:"varying vec2 vUv; void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:Wy.replace("  void main() {",Xy+`
  void main() {`),uniforms:{depthBuffer:{value:null},shadowMap:{value:null},shadowMatrix:{value:new Ke},invProjection:{value:new Ke},invView:{value:new Ke},cameraPos:{value:new k},uSunDir:i.uSunDir,uSunColor:i.uSkySunColor,uSkyAmbient:{value:new k(.3,.4,.6)},uDaylight:i.uDaylight,uSeaLevel:{value:22},uDensity:{value:.0085},uLocal:{value:.5},uTime:{value:0},uUnder:{value:0},uWave:{value:null},uWorldSize:{value:new me(1,1)},uWaveTexel:{value:new me(1,1)},uGiSize:i.uGiSize,uSh0:i.uSh0,uSh1:i.uSh1,uSh2:i.uSh2,uSteps:{value:s}},depthTest:!1,depthWrite:!1}),this.fullscreenMaterial=this.mat}target;mat;scale=.5;get uniforms(){return this.mat.uniforms}setDepthTexture(e){this.mat.uniforms.depthBuffer.value=e}setSize(e,t){this.target.setSize(Math.max(1,Math.floor(e*this.scale)),Math.max(1,Math.floor(t*this.scale)))}render(e){const t=this.mat.uniforms;t.shadowMap.value=this.sun.shadow.map?.texture??null,t.shadowMatrix.value.copy(this.sun.shadow.matrix),t.invProjection.value.copy(this.cam.projectionMatrixInverse),t.invView.value.copy(this.cam.matrixWorld),t.cameraPos.value.copy(this.cam.position),t.shadowMap.value&&(e.setRenderTarget(this.target),e.render(this.scene,this.camera))}}class Qy extends Fi{constructor(e){super("VolumetricEffect",`
      uniform sampler2D volTex;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 v = texture2D(volTex, uv);
        outputColor = vec4(inputColor.rgb * v.a + v.rgb, inputColor.a);
      }`,{blendFunction:We.NORMAL,uniforms:new Map([["volTex",new oe(e.texture)]])})}}const qy=56;class Ky{gl;scene=new Li;camera;sun;ambient;sky;water;flames;scatter;particles;underLight=new k(.1,.15,.2);skyAmbient=[.3,.4,.6];volumetric=null;textures;giTex;terrain;uniforms;variant="full";shaderError="";onShaderError=null;opts;fog;chunks=new Map;worldCenter;worldRadius;shadowReach=1;streaks=null;sunUv=new me;tmpV=new k;shadowCenter=new k;sunDir=new k(0,1,0);triangles=0;underwater=!1;composer=null;volumetricSteps=16;caustics=!0;propagation=null;giDirty=!1;postTier=1;seaLevel;constructor(e,t,i,s,r){this.seaLevel=s,this.opts=r,this.variant=r.variant??"full",this.gl=new sv({canvas:e,antialias:r.antialias,powerPreference:"high-performance"}),this.gl.toneMapping=Vn,this.gl.toneMappingExposure=.9,this.gl.outputColorSpace=st,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=Rh,this.gl.setPixelRatio(Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.camera=new Kt(72,1,.08,1200),this.worldCenter=new k(t.sizeX/2,t.sizeY/2,t.sizeZ/2),this.worldRadius=Math.hypot(t.sizeX,t.sizeY,t.sizeZ)/2,this.fog=new vl(10466248,.0032),this.scene.fog=this.fog,this.textures=r.textures,this.giTex=new hy(i);const a=ns(this.textures,this.giTex,r.cheapGi,r.giMode,this.variant);this.terrain=a.material,this.uniforms=a.uniforms,this.gl.debug.onShaderError=(c,h,f,d)=>{const u=c.getProgramInfoLog(h)??"",g=c.getShaderInfoLog(d)??"",v=c.getShaderInfoLog(f)??"",m=(g||v||u).split(`
`).find(S=>/error/i.test(S))??(g||v||u).slice(0,160),p=this.gl.info.programs?.length??0;this.shaderError=`shader error (${p} programs): ${m.slice(0,200)}`,console.error("[splinecraft] shader error",{vsLog:v,fsLog:g,log:u}),this.onShaderError?.(this.shaderError),/terrain/.test(this.terrain.name)&&this.variant!=="basic"&&this.stepDownVariant()},this.sun=new xf(16777215,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(r.shadowMapSize,r.shadowMapSize),this.shadowReach=Math.min(qy,this.worldRadius*.85);const o=this.shadowReach,l=this.sun.shadow.camera;if(l.left=-o,l.right=o,l.top=o,l.bottom=-o,l.near=1,l.far=this.worldRadius*4,l.updateProjectionMatrix(),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.04,this.sun.shadow.radius=3,this.sun.target.position.copy(this.worldCenter),this.scene.add(this.sun,this.sun.target),this.ambient=new Mf(16777215,.02),this.scene.add(this.ambient),this.sun.layers.enable(ks),this.ambient.layers.enable(ks),this.sky=new gy,this.scene.add(this.sky.mesh),this.water=new Iy(this.scene,this.camera,s,this.textures.normal,r.reflection,t.sizeX,t.sizeZ,r.reflection?4:2),this.gl.shadowMap.autoUpdate=!1,this.flames=new Fy(this.scene),this.scatter=new Oy(this.scene,this.uniforms,r.cheapGi,r.giMode,r.scatterDensity),this.particles=new Hy(this.scene,Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.volumetricSteps=r.volumetricSteps,this.caustics=r.caustics,r.giMode==="sh"){const c=new py(this.gl,this.giTex,r.giDiv);c.setSources(this.giTex.normalTexture,El),c.setBoost(Ti);const[h,f,d]=c.textures;this.uniforms.uSh0.value=h,this.uniforms.uSh1.value=f,this.uniforms.uSh2.value=d,this.propagation=c;const u=this.water.uniforms;u.uSh0=this.uniforms.uSh0,u.uSh1=this.uniforms.uSh1,u.uSh2=this.uniforms.uSh2,u.uGiSize=this.uniforms.uGiSize,u.uGiTexel=this.uniforms.uGiTexel,this.water.uniforms.uGiLit.value=1}this.setPost(r.post),this.resize()}giUploaded(){this.giDirty=!0}setupIce(e){for(const s of this.iceChunks.values())this.scene.remove(s),this.ice?.meshes.delete(s);this.iceChunks.clear(),this.ice?.dispose(),this.ice=null,this.iceMat?.dispose(),this.iceMat=null,this.iceUniforms=null,this.iceCastDepth?.dispose(),this.iceCastDepth=null,this.iceOnlyDepth?.dispose(),this.iceOnlyDepth=null,this.iceShadowRT?.dispose(),this.iceShadowRT=null;for(const s of this.chunks.values())s.customDepthMaterial=void 0;if(this.uniforms.uIceCaustic.value=0,!e){this.uniforms.uIceMode.value=2;return}this.uniforms.uIceMode.value=0,this.iceCastDepth=fh(!1),this.iceOnlyDepth=fh(!0);for(const s of this.chunks.values())s.customDepthMaterial=this.iceCastDepth;const t=1024;this.iceShadowRT=new at(t,t,{depthTexture:new oa(t,t,tn),depthBuffer:!0,minFilter:Mt,magFilter:Mt}),this.uniforms.uIceShadow.value=this.iceShadowRT.depthTexture,this.uniforms.uIceReach.value=this.shadowReach,this.uniforms.uSeaLevel.value=this.seaLevel,this.uniforms.uIceDebug.value=this.opts.iceDebug;const i=ns(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);i.uniforms.uTexLocal.value=0,i.uniforms.uIceMode.value=1,this.opts.iceDebug===7&&(i.material.depthTest=!1),this.opts.iceDebug===9&&(i.material.side=Gt),this.iceMat=i.material,this.iceUniforms=i.uniforms,this.ice=new By(this.camera,this.scene,i.uniforms);for(const[s,r]of this.chunks)r.geometry.getAttribute("aMats").array.includes(yn)&&this.iceChunks.set(s,this.iceTwin(r.geometry,this.iceMat,this.scene))}iceTwin(e,t,i){const s=new vt(e,t);return s.layers.set(ks),s.castShadow=!1,s.receiveShadow=!0,i.add(s),this.ice?.meshes.add(s),s}stepDownVariant(){const e=this.variant==="full"?"lite":"basic";this.variant=e;const t=ns(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,e);for(const s of Object.keys(t.uniforms))t.uniforms[s]=this.uniforms[s];const i=this.terrain;this.terrain=t.material;for(const s of this.chunks.values())s.material=this.terrain;i.dispose(),this.setupIce(this.ice!==null&&e!=="basic"),this.onShaderError?.(`terrain material stepped down to '${e}'`)}setPost(e){this.postTier=e,this.composer?.dispose();const t=new Lx(this.gl,{frameBufferType:Sn});t.addPass(new Cu(this.scene,this.camera)),this.setupIce(e>=1&&this.variant!=="basic"),this.ice&&t.addPass(this.ice),t.addPass(this.water);const i=[];if(this.volumetric=null,e>=2&&this.volumetricSteps>0){const s=new Yy(this.camera,this.sun,this.uniforms,this.volumetricSteps);s.uniforms.uSeaLevel.value=this.seaLevel,t.addPass(s),i.push(new Qy(s.target)),this.volumetric=s,s.uniforms.uUnder.value=this.underwater?1:0}if(e>=2){const s=new cy(this.scene,this.camera),r=s.render.bind(s);s.render=(...a)=>{const o=this.sky.mesh.visible;this.sky.mesh.visible=!1;const l=this.flames.material.visible;this.flames.material.visible=!1;const c=this.particles.material.visible;this.particles.material.visible=!1,r(...a),this.sky.mesh.visible=o,this.flames.material.visible=l,this.particles.material.visible=c},t.addPass(s),i.push(new jM(this.camera,s.texture,{samples:12,rings:5,radius:.04,intensity:1.6,luminanceInfluence:.6,resolutionScale:.5,bias:.02,distanceThreshold:.6,distanceFalloff:.1}))}this.streaks=null,e>=1&&(this.streaks=new Vy,i.push(this.streaks),i.push(new RM({luminanceThreshold:.85,luminanceSmoothing:.3,intensity:.55,mipmapBlur:!0,radius:.7})),i.push(new sy({darkness:.32,offset:.28}))),i.push(new ny({mode:$t.ACES_FILMIC})),t.addPass(new dh(this.camera,...i)),e>=2&&t.addPass(new dh(this.camera,new HM)),this.composer=t,this.resize()}resize(){const e=window.innerWidth,t=window.innerHeight;this.gl.setSize(e,t,!1),this.composer?.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setSun(e){const t=new k(...e.dir);this.sunDir.copy(t),this.placeSun();const i=Math.max(e.sun[0],e.sun[1],e.sun[2],1e-4);this.sun.color.setRGB(e.sun[0]/i,e.sun[1]/i,e.sun[2]/i),this.sun.intensity=i,this.sun.visible=i>.01;const s=this.uniforms;s.uSunDir.value.copy(t),s.uSkyZenith.value.set(...e.zenith),s.uSkyHorizon.value.set(...e.horizon),s.uSkySunColor.value.set(...e.sun),s.uDaylight.value=e.daylight,this.propagation?.setSky(e.ambient),this.volumetric&&this.volumetric.uniforms.uSkyAmbient.value.set(...e.ambient);const r=this.sky.uniforms;r.uSunDir.value.copy(t),r.uSunColor.value.set(e.sun[0]/3,e.sun[1]/3,e.sun[2]/3),r.uZenith.value.set(...e.zenith),r.uHorizon.value.set(...e.horizon),r.uDaylight.value=e.daylight;const a=this.water.uniforms;a.uSunDir.value.copy(t),a.uSunColor.value.set(...e.sun),a.uZenith.value.set(...e.zenith),a.uHorizon.value.set(...e.horizon),a.uAmbient.value.set(...e.ambient),this.skyAmbient=[e.ambient[0],e.ambient[1],e.ambient[2]],this.ambient.intensity=.015+.02*e.daylight,this.underwater||(this.fog.color.setRGB(e.horizon[0],e.horizon[1],e.horizon[2]),this.fog.density=.0032),this.water.uniforms.fogColor.value.copy(this.fog.color),this.water.uniforms.fogDensity.value=this.fog.density}placeSun(){const e=2*this.shadowReach/this.sun.shadow.mapSize.x,t=this.shadowCenter;t.copy(this.camera.position),t.x=Math.round(t.x/e)*e,t.y=Math.round(t.y/e)*e,t.z=Math.round(t.z/e)*e,this.sun.target.position.copy(t),this.sun.position.copy(t).addScaledVector(this.sunDir,this.worldRadius*2)}setUnderwater(e,t){this.underwater=e,e?(this.fog.color.setRGB(.03*(.3+t.daylight),.12*(.3+t.daylight),.16*(.3+t.daylight)),this.fog.density=.018):(this.fog.color.setRGB(t.horizon[0],t.horizon[1],t.horizon[2]),this.fog.density=.0032),this.water.uniforms.fogColor.value.copy(this.fog.color),this.water.uniforms.fogDensity.value=this.fog.density,this.water.setUnderwater(e),this.volumetric&&(this.volumetric.uniforms.uUnder.value=e?1:0)}time=0;chunkGeometry(e,t,i,s){const r=new Ht;r.setAttribute("position",new Ze(s.positions,3)),r.setAttribute("normal",new Ze(s.normals,3)),r.setAttribute("aMats",new Ze(s.mats,3,!1)),r.setAttribute("aBary",new Ze(s.bary,3)),r.setAttribute("aFace",new Ze(s.face,4)),r.setAttribute("aMorph",new Ze(s.morph,4));const a=pe*R;return r.boundingSphere=new fi(new k((e+.5)*a,(t+.5)*a,(i+.5)*a),a*.9),r}setChunk(e,t,i,s){const r=Dt(e,t,i);this.flames.set(r,s.emitters),this.scatter.set(r,s.scatter,void 0,this.time),this.particles.set(r,s.emitters,s.scatter,8,.003);const a=this.chunks.get(r);a&&(this.triangles-=a.geometry.getAttribute("position").count/3,this.scene.remove(a),a.geometry.dispose(),this.chunks.delete(r));const o=this.iceChunks.get(r);if(o&&(this.scene.remove(o),this.ice?.meshes.delete(o),this.iceChunks.delete(r)),s.vertexCount===0)return;const l=new vt(this.chunkGeometry(e,t,i,s),this.terrain);l.castShadow=!0,l.receiveShadow=!0,this.iceCastDepth&&(l.customDepthMaterial=this.iceCastDepth),this.scene.add(l),this.chunks.set(r,l),this.triangles+=s.vertexCount/3,this.ice&&this.iceMat&&s.mats.includes(yn)&&this.iceChunks.set(r,this.iceTwin(l.geometry,this.iceMat,this.scene))}fragments=new Map;setFragment(e,t,i,s,r,a){if(this.removeFragment(e),t.vertexCount===0)return;const o=new Ht;o.setAttribute("position",new Ze(t.positions,3)),o.setAttribute("normal",new Ze(t.normals,3)),o.setAttribute("aMats",new Ze(t.mats,3,!1)),o.setAttribute("aBary",new Ze(t.bary,3)),o.setAttribute("aFace",new Ze(t.face,4)),o.setAttribute("aMorph",new Ze(t.morph,4)),o.computeBoundingSphere();const l=ns(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);l.uniforms.uTexLocal.value=1,l.uniforms.uTexOrigin.value.set(a[0],a[1],a[2]);const c=new vt(o,l.material);c.castShadow=!0,c.receiveShadow=!0,this.iceCastDepth&&(c.customDepthMaterial=this.iceCastDepth);const h=new oi;h.userData.body=l;const f=new oi;if(f.position.set(-i[0],-i[1],-i[2]),f.add(c),this.ice&&t.mats.includes(yn)){l.uniforms.uIceMode.value=0;const d=ns(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);d.uniforms.uTexLocal.value=1,d.uniforms.uTexOrigin.value.set(a[0],a[1],a[2]),d.uniforms.uIceMode.value=1,this.iceUniforms&&(d.uniforms.uSceneColor=this.iceUniforms.uSceneColor,d.uniforms.uSceneDepth=this.iceUniforms.uSceneDepth,d.uniforms.uResolution=this.iceUniforms.uResolution,d.uniforms.uNear=this.iceUniforms.uNear,d.uniforms.uFar=this.iceUniforms.uFar),h.userData.iceBody=d,this.iceTwin(o,d.material,f)}h.add(f),h.position.set(s[0],s[1],s[2]),h.quaternion.set(r[0],r[1],r[2],r[3]),h.userData.emitters=t.emitters,h.userData.inner=f,this.scene.add(h),this.fragments.set(e,h),this.scatter.set(-e,t.scatter,f,this.time),this.placeBodyFlames(e,h)}placeBodyFlames(e,t){const i=t.userData.emitters;if(!i||i.length===0)return;t.updateMatrixWorld(!0);const s=t.userData.inner,r=new Float32Array(i.length),a=new k;for(let o=0;o<i.length;o+=4)a.set(i[o],i[o+1],i[o+2]),s.localToWorld(a),r[o]=a.x,r[o+1]=a.y,r[o+2]=a.z,r[o+3]=i[o+3];this.flames.set(-e,r)}moveFragment(e,t,i){const s=this.fragments.get(e);s&&(s.position.set(t[0],t[1],t[2]),s.quaternion.set(i[0],i[1],i[2],i[3]),this.placeBodyFlames(e,s))}fadeFragment(e,t){const i=this.fragments.get(e);if(!i)return;const s=i.userData.body;s.uniforms.uFade.value=Math.max(0,Math.min(1,t)),s.material.polygonOffset=t<1,s.material.polygonOffsetFactor=-1,s.material.polygonOffsetUnits=-2;const r=i.userData.iceBody;r&&(r.uniforms.uFade.value=s.uniforms.uFade.value)}removeFragment(e){const t=this.fragments.get(e);t&&(this.scatter.set(-e,new Float32Array(0)),this.flames.set(-e,new Float32Array(0)),this.scene.remove(t),t.traverse(i=>{i instanceof vt&&(i.geometry.dispose(),this.ice?.meshes.delete(i))}),t.userData.body.material.dispose(),t.userData.iceBody?.material.dispose(),this.fragments.delete(e))}get fallingCount(){return this.fragments.size}ice=null;iceMat=null;iceUniforms=null;iceChunks=new Map;iceCastDepth=null;iceOnlyDepth=null;iceShadowRT=null;skins=new Map;animals=new Map;setSkin(e,t,i){const s=new Ht;s.setAttribute("position",new Ze(i.positions,3)),s.setAttribute("normal",new Ze(i.normals,3)),s.setAttribute("aMats",new Ze(i.mats,3,!1)),s.setAttribute("aBary",new Ze(i.bary,3)),s.setAttribute("aFace",new Ze(i.face,4)),s.setAttribute("aMorph",new Ze(i.morph,4)),s.computeBoundingSphere();const r=`${e}:${t}`;this.skins.get(r)?.dispose(),this.skins.set(r,s)}get skinCount(){return this.skins.size}placeAnimal(e,t,i,s,r,a=0){const o=this.skins.get(`${t}:${i}`);if(!o)return;let l=this.animals.get(e);if(!l){const h=ns(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);h.uniforms.uTexLocal.value=1,h.uniforms.uTexOrigin.value.set(0,0,0);const f=new vt(o,h.material);f.castShadow=!0,f.receiveShadow=!0,l=new oi,l.add(f),l.userData.body=h,l.userData.mesh=f,this.scene.add(l),this.animals.set(e,l)}const c=l.userData.mesh;c.geometry!==o&&(c.geometry=o),l.position.set(s[0],s[1],s[2]),l.rotation.set(0,r+Math.PI*.5,a,"YZX")}removeAnimal(e){const t=this.animals.get(e);t&&(this.scene.remove(t),t.userData.body.material.dispose(),this.animals.delete(e))}clearAnimals(){for(const e of[...this.animals.keys()])this.removeAnimal(e)}get animalCount(){return this.animals.size}hand=null;handKind=-1;setHandItem(e){this.camera.parent||this.scene.add(this.camera),this.hand&&(this.camera.remove(this.hand),this.hand.traverse(a=>{a instanceof vt&&(a.geometry.dispose(),a.material.dispose())}),this.hand=null),this.handKind=-1,this.flames.set(-7,new Float32Array(0));const t=Et[e];if(!t)return;const i=new oi,s=new Ye(t.albedo[0],t.albedo[1],t.albedo[2]),r=t.emissive?new Ye(t.emissive[0],t.emissive[1],t.emissive[2]).multiplyScalar(.03):new Ye(0,0,0);if(t.hard&&t.solid===!1){const a=new vt(new Pi(.02,.1,.02),new ia({color:s,roughness:.8}));a.position.y=-.03,i.add(a),this.handKind=e===yl?1:0}else{const a=new vt(new Pi(.11,.11,.11),new ia({color:s,emissive:r,roughness:t.roughness??.8,metalness:t.metalness??0,transparent:e===yn,opacity:e===yn?.55:1}));a.rotation.set(.35,-.6,.1),i.add(a)}i.position.set(.3,-.24,-.52),i.traverse(a=>{a.castShadow=!1,a.receiveShadow=!1,a.frustumCulled=!1}),this.camera.add(i),this.hand=i}handWorld(){if(!this.hand)return null;this.camera.updateMatrixWorld(!0);const e=new k(0,.06,0);return this.hand.localToWorld(e),this.handKind>=0&&this.flames.set(-7,new Float32Array([e.x,e.y,e.z,this.handKind])),e}setCursor(e,t,i,s,r){this.uniforms.uCursor.value.set(e,t,i,s),this.uniforms.uCursorShape.value=r?1:0,r&&this.uniforms.uCursorExt.value.set(r[0],r[1],r[2])}render(e){this.time=e,this.uniforms.uTime.value=e,this.water.uniforms.uTime.value=e,this.flames.update(e),this.scatter.update(e),this.particles.update(e,this.uniforms.uDaylight.value);const t=Math.max(0,this.seaLevel-this.camera.position.y),i=Math.exp(-t*.22);if(this.underLight.set(this.skyAmbient[0]*i,this.skyAmbient[1]*i,this.skyAmbient[2]*i),this.water.setUnderwaterLight(this.underLight.x,this.underLight.y,this.underLight.z,.92*Math.exp(-t*.06)),this.streaks){const s=this.sunDir;this.tmpV.copy(s).multiplyScalar(200).add(this.camera.position).project(this.camera);const r=this.tmpV.z<1;this.sunUv.set(this.tmpV.x*.5+.5,this.tmpV.y*.5+.5);const a=this.underwater&&r&&s.y>-.05&&this.sunUv.x>-.6&&this.sunUv.x<1.6&&this.sunUv.y>-.6&&this.sunUv.y<1.6;this.streaks.set(a,this.sunUv,this.camera.aspect)}if(this.sky.uniforms.uTime.value=e,this.volumetric){const s=this.volumetric.uniforms;s.uTime.value=e,s.uWave.value=this.water.sim.texture,s.uWorldSize.value.copy(this.water.uniforms.uWorldSize.value),s.uWaveTexel.value.copy(this.water.sim.texelSize)}if(this.sky.mesh.position.copy(this.camera.position),this.propagation){this.propagation.inject(e),this.giDirty?(this.giDirty=!1,this.propagation.step(this.propagation.iterations===0?12:2)):this.propagation.step(1);const[s,r,a]=this.propagation.textures;this.uniforms.uSh0.value=s,this.uniforms.uSh1.value=r,this.uniforms.uSh2.value=a}this.placeSun(),this.renderIceShadow(),this.gl.shadowMap.needsUpdate=!0,this.composer?this.composer.render():this.gl.render(this.scene,this.camera)}renderIceShadow(){const e=this.uniforms;if(!this.caustics||!this.ice||!this.iceShadowRT||!this.iceOnlyDepth||this.ice.meshes.size===0||this.sunDir.y<.02){e.uIceCaustic.value=0;return}this.sun.updateMatrixWorld(!0),this.sun.target.updateMatrixWorld(!0),this.sun.shadow.updateMatrices(this.sun);const t=this.sun.shadow.camera,i=t.layers.mask,s=this.scene.overrideMaterial,r=this.gl.autoClear;t.layers.set(ks),this.scene.overrideMaterial=this.iceOnlyDepth,this.gl.autoClear=!0,this.gl.setRenderTarget(this.iceShadowRT),this.gl.clear(!0,!0,!1),this.gl.render(this.scene,t),this.gl.setRenderTarget(null),this.scene.overrideMaterial=s,t.layers.mask=i,this.gl.autoClear=r,e.uIceShadowMatrix.value.copy(this.sun.shadow.matrix),e.uIceCaustic.value=1}get chunkCount(){return this.chunks.size}}class Zy{workers=[];idle=[];queue=[];inflight=new Map;nextId=1;constructor(e){for(let t=0;t<e;t++){const i=new Worker(new URL(""+new URL("mesh.worker-v9tzwNm1.js",import.meta.url).href,import.meta.url),{type:"module"});i.onmessage=s=>{const r=this.inflight.get(i);this.inflight.delete(i),this.idle.push(i),r?.resolve(s.data),this.pump()},i.onerror=s=>console.error("worker error",s),this.workers.push(i),this.idle.push(i)}}get size(){return this.workers.length}get queued(){return this.queue.length+this.inflight.size}submit(e,t){const i={...e,kind:"mesh",id:this.nextId++};return this.enqueue(i,[i.density.buffer,i.material.buffer,i.hard.buffer,i.sub.buffer],t)}gen(e,t,i,s,r){return this.enqueue({kind:"gen",id:this.nextId++,cx:e,cy:t,cz:i,cfg:s},[],r)}skin(e,t,i){return this.enqueue({kind:"skin",id:this.nextId++,animal:e,bucket:t,material:i},[],-3)}frag(e,t,i,s,r,a,o,l){return this.enqueue({kind:"frag",id:this.nextId++,nx:e,ny:t,nz:i,density:s,material:r,hard:a,sub:o,scatter:l},[s.buffer,r.buffer,a.buffer,o.buffer],-2)}textures(e){return this.enqueue({kind:"textures",id:this.nextId++,size:e},[],-1)}enqueue(e,t,i){return new Promise(s=>{this.queue.push({job:e,transfer:t,priority:i,resolve:s}),this.pump()})}reprioritize(e){for(const t of this.queue)t.job.kind==="mesh"&&(t.priority=e(t.job))}pump(){for(;this.idle.length&&this.queue.length;){let e=0;for(let s=1;s<this.queue.length;s++)this.queue[s].priority<this.queue[e].priority&&(e=s);const t=this.queue.splice(e,1)[0],i=this.idle.pop();this.inflight.set(i,t),i.postMessage(t.job,t.transfer)}}}class jy{constructor(e){this.canvas=e,window.addEventListener("keydown",t=>{t.repeat||(this.keys.add(t.code),this.pressed.add(t.code),["Space","Tab","KeyQ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&(this.locked||this.freeMouse)&&t.preventDefault())}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseDown=[!1,!1,!1]}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===e,this.locked||(this.mouseDown=[!1,!1,!1])}),e.addEventListener("mousemove",t=>{if(!this.locked)return;this.yaw-=t.movementX*this.sens,this.pitch-=t.movementY*this.sens;const i=Math.PI/2-.01;this.pitch=Math.max(-i,Math.min(i,this.pitch))}),e.addEventListener("mousedown",t=>{this.locked&&(t.preventDefault(),t.button<3&&(this.mouseDown[t.button]=!0,this.mouseClick[t.button]=!0))}),window.addEventListener("mouseup",t=>{t.button<3&&(this.mouseDown[t.button]=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("wheel",t=>{this.locked&&(t.preventDefault(),this.wheel+=Math.sign(t.deltaY))},{passive:!1})}keys=new Set;pressed=new Set;yaw=0;pitch=0;wheel=0;mouseDown=[!1,!1,!1];mouseClick=[!1,!1,!1];locked=!1;freeMouse=!1;sens=.0022;requestLock(){this.canvas.requestPointerLock?.()}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}flush(){this.pressed.clear(),this.mouseClick=[!1,!1,!1],this.wheel=0}}class Jy{root;hotbar;slots=[];status;clock;debug;toast;toastTimer=0;overlay;loading;loadingBar;loadingText;lastStatus="";lastDebug="";onNewWorld=null;onResetEdits=null;onLoadWorld=null;onRenameWorld=null;onDeleteWorld=null;onQuality=null;onFoliage=null;onFall=null;onEditMs=null;onAnimals=null;onSand=null;onResume=null;onSelectSlot=null;onTime=null;onTimeFlow=null;onCopyLink=null;onMenu=null;errorEl=null;timeSliders=[];dragging=!1;constructor(){this.root=document.getElementById("hud"),this.hotbar=document.getElementById("hotbar"),this.status=document.getElementById("status"),this.clock=document.getElementById("clock"),this.debug=document.getElementById("debug"),this.toast=document.getElementById("toast"),this.overlay=document.getElementById("overlay"),this.loading=document.getElementById("loading"),this.loadingBar=document.getElementById("loading-bar"),this.loadingText=document.getElementById("loading-text"),document.getElementById("btn-play").addEventListener("click",()=>this.onResume?.()),document.getElementById("btn-new").addEventListener("click",()=>{const e=document.getElementById("seed-input").value.trim(),t=e===""?Math.floor(Math.random()*1e9):Nu(e),i=document.getElementById("size-select");this.onNewWorld?.(t,i?Number(i.value):8)}),document.getElementById("btn-reset").addEventListener("click",()=>{confirm("Erase every edit in this world? The terrain regenerates from its seed.")&&this.onResetEdits?.()});for(const e of["time-slider","time-slider-menu"]){const t=document.getElementById(e);t&&(this.timeSliders.push(t),t.addEventListener("input",()=>{this.dragging=!0,this.onTime?.(Number(t.value))}),t.addEventListener("change",()=>{this.dragging=!1}))}document.getElementById("time-flow")?.addEventListener("click",()=>this.onTimeFlow?.()),document.getElementById("btn-copy")?.addEventListener("click",()=>this.onCopyLink?.()),document.getElementById("gear")?.addEventListener("click",()=>this.onMenu?.()),this.errorEl=document.getElementById("error-strip"),this.errorEl?.addEventListener("click",()=>{this.errorEl&&(this.errorEl.hidden=!0)}),document.getElementById("edit-slider")?.addEventListener("input",e=>{const t=Number(e.target.value);this.setEditLabel(t),this.onEditMs?.(t)}),document.getElementById("fall-select")?.addEventListener("change",e=>{this.onFall?.(Number(e.target.value))}),document.getElementById("animals-select")?.addEventListener("change",e=>{this.onAnimals?.(e.target.value==="1")}),document.getElementById("sand-select")?.addEventListener("change",e=>{this.onSand?.(e.target.value==="1")}),document.getElementById("foliage-select")?.addEventListener("change",e=>{this.onFoliage?.(Number(e.target.value))}),document.getElementById("quality-select").addEventListener("change",e=>{this.onQuality?.(e.target.value)})}setLoading(e,t){this.loading.hidden=!1,this.loadingBar.style.width=`${Math.round(e*100)}%`,this.loadingText.textContent=t}hideLoading(){this.loading.hidden=!0}setEditLabel(e){const t=document.getElementById("edit-label");t&&(t.textContent=`${(e/1e3).toFixed(2)} s`)}showOverlay(e,t,i=1,s=7,r=!0,a=!0,o=140){const l=document.getElementById("edit-slider");l&&(l.value=String(o),this.setEditLabel(o));const c=document.getElementById("animals-select");c&&(c.value=r?"1":"0");const h=document.getElementById("sand-select");h&&(h.value=a?"1":"0");const f=document.getElementById("fall-select");f&&(f.value=String(s),f.value!==String(s)&&(f.value="7")),this.overlay.hidden=!1,this.root.classList.add("dim"),document.getElementById("seed-label").textContent=String(e),document.getElementById("quality-select").value=t;const d=document.getElementById("foliage-select");d&&(d.value=String(i),d.value!==String(i)&&(d.value="1"))}hideOverlay(){this.overlay.hidden=!0,this.root.classList.remove("dim")}renderWorlds(e,t){const i=document.getElementById("worlds");if(!i)return;i.innerHTML="";const s=[...e].sort((r,a)=>r.seed===t?-1:a.seed===t?1:a.updatedAt-r.updatedAt);for(const r of s){const a=document.createElement("div");a.className="world"+(r.seed===t?" current":"");const o=document.createElement("button");o.className="wname",o.textContent=r.name,o.title=r.seed===t?"this world":"load this world",o.addEventListener("click",()=>this.onLoadWorld?.(r.seed));const l=document.createElement("span");l.className="wmeta",l.textContent=`seed ${r.seed} · ${(r.chunks??8)*16} m${r.seed===t?" · playing":r.updatedAt?" · "+eA(r.updatedAt):""}`;const c=document.createElement("button");c.className="wbtn",c.textContent="✎",c.title="rename",c.addEventListener("click",()=>{const f=prompt("World name",r.name);f!==null&&this.onRenameWorld?.(r.seed,f)});const h=document.createElement("button");h.className="wbtn",h.textContent="✕",h.title="delete this world and its edits",h.addEventListener("click",()=>{confirm(`Delete "${r.name}" and every edit in it?`)&&this.onDeleteWorld?.(r.seed)}),a.append(o,l,c,h),i.appendChild(a)}if(!s.length){const r=document.createElement("div");r.className="wmeta",r.textContent="no saved worlds yet",i.appendChild(r)}}get overlayVisible(){return!this.overlay.hidden}buildHotbar(e){this.hotbar.innerHTML="",this.slots=[],fn.forEach((t,i)=>{const s=document.createElement("div");s.className="slot";const r=document.createElement("canvas");r.width=16,r.height=16;const a=r.getContext("2d"),o=a.createImageData(16,16),l=e.swatches[t.id];for(let f=0;f<256;f++)o.data[f*4]=l[f*3],o.data[f*4+1]=l[f*3+1],o.data[f*4+2]=l[f*3+2],o.data[f*4+3]=255;a.putImageData(o,0,0);const c=document.createElement("span");c.className="key",c.textContent=$y[i]??"";const h=document.createElement("span");h.className="name",h.textContent=t.name,s.append(r,c,h),s.addEventListener("pointerdown",f=>{f.preventDefault(),this.onSelectSlot?.(i)}),this.hotbar.appendChild(s),this.slots.push(s)})}setSelected(e){this.slots.forEach((t,i)=>t.classList.toggle("sel",i===e))}setStatus(e){e!==this.lastStatus&&(this.status.textContent=e,this.lastStatus=e)}setClock(e,t){this.clock.textContent=e;const i=document.getElementById("time-label");if(i&&(i.textContent=e),t!==void 0&&!this.dragging)for(const s of this.timeSliders)s.value=t.toFixed(2)}setDebug(e){e!==this.lastDebug&&(this.debug.textContent=e,this.lastDebug=e)}showError(e){this.errorEl&&(this.errorEl.textContent=e,this.errorEl.hidden=!1)}say(e,t=1800){this.toast.textContent=e,this.toast.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toast.classList.remove("show"),t)}}const $y=["1","2","3","4","5","6","7","8","9","0","-","=","[","]","\\"],xh=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","BracketLeft","BracketRight","Backslash"];function Nu(n){if(/^\d+$/.test(n))return Number(n)>>>0;let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function eA(n){const e=(Date.now()-n)/1e3;return e<90?"just now":e<5400?`${Math.round(e/60)} min ago`:e<172800?`${Math.round(e/3600)} h ago`:`${Math.round(e/86400)} d ago`}class tA{constructor(e){if(this.layer=e,this.stickEl=document.getElementById("stick"),this.thumbEl=document.getElementById("stick-thumb"),this.enabled=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,!this.enabled)return;document.body.classList.add("touch"),e.addEventListener("pointerdown",s=>{s.target.closest("button, .slot")||(s.preventDefault(),e.setPointerCapture(s.pointerId),s.clientX<window.innerWidth*.45&&this.stickId<0?(this.stickId=s.pointerId,this.stickOrigin=[s.clientX,s.clientY],this.stickEl.style.left=`${s.clientX-60}px`,this.stickEl.style.top=`${s.clientY-60}px`,this.stickEl.classList.add("active"),this.thumbEl.style.transform="translate(0,0)"):this.lookId<0&&(this.lookId=s.pointerId,this.lookLast=[s.clientX,s.clientY]))}),e.addEventListener("pointermove",s=>{if(s.pointerId===this.stickId){const r=s.clientX-this.stickOrigin[0],a=s.clientY-this.stickOrigin[1],o=50,l=Math.hypot(r,a),c=l>o?o/l:1;this.moveX=r*c/o,this.moveY=-(a*c)/o,this.thumbEl.style.transform=`translate(${r*c}px, ${a*c}px)`}else s.pointerId===this.lookId&&(this.lookDX+=s.clientX-this.lookLast[0],this.lookDY+=s.clientY-this.lookLast[1],this.lookLast=[s.clientX,s.clientY])});const t=s=>{s.pointerId===this.stickId?(this.stickId=-1,this.moveX=0,this.moveY=0,this.stickEl.classList.remove("active")):s.pointerId===this.lookId&&(this.lookId=-1)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t);const i=(s,r)=>{const a=document.getElementById(s);a.addEventListener("pointerdown",l=>{l.preventDefault(),a.setPointerCapture(l.pointerId),r(!0),a.classList.add("down"),this.taps.add(s)});const o=()=>{r(!1),s==="tb-duck"&&this.duckLit||a.classList.remove("down")};a.addEventListener("pointerup",o),a.addEventListener("pointercancel",o)};i("tb-jump",s=>this.jump=s),i("tb-duck",s=>this.duck=s),i("tb-dig",s=>this.dig=s),i("tb-add",s=>this.add=s),i("tb-smooth",s=>this.smooth=s),i("tb-paint",s=>this.paint=s);for(const s of["tb-fly","tb-size-down","tb-size-up","tb-shape","tb-snap","tb-menu","tb-undo"])document.getElementById(s)?.addEventListener("pointerdown",a=>{a.preventDefault(),this.taps.add(s)})}enabled=!1;moveX=0;moveY=0;lookDX=0;lookDY=0;jump=!1;dig=!1;add=!1;smooth=!1;paint=!1;duck=!1;duckLit=!1;taps=new Set;stickId=-1;lookId=-1;stickOrigin=[0,0];lookLast=[0,0];stickEl;thumbEl;tapped(e){return this.taps.has(e)}setDuckLit(e){if(e===this.duckLit)return;this.duckLit=e;const t=document.getElementById("tb-duck");t&&!this.duck&&t.classList.toggle("down",e)}get heldOp(){return this.add?"add":this.smooth?"smooth":this.paint?"paint":null}digLabel="dig";setDig(e){if(e===this.digLabel)return;this.digLabel=e;const t=document.getElementById("tb-dig");t&&(t.textContent=e)}setFly(e){const t=document.getElementById("tb-duck");t&&(t.textContent=e?"down":"duck");const i=document.getElementById("tb-jump");i&&(i.textContent=e?"up":"jump");const s=document.getElementById("tb-fly");s&&(s.textContent=e?"walk":"fly")}flush(){this.lookDX=0,this.lookDY=0,this.taps.clear()}}const ua="splinecraft.v1.";function nA(n){try{const e=localStorage.getItem(ua+"world."+n);return e?xv(e):[]}catch{return[]}}function Mh(n){try{localStorage.removeItem(ua+"world."+n)}catch{}}function Fu(){try{const n=localStorage.getItem(ua+"settings");return n?JSON.parse(n):{}}catch{return{}}}function Gn(n){try{localStorage.setItem(ua+"settings",JSON.stringify({...Fu(),...n}))}catch{}}const zu=4096;function no(n,e,t,i){const s=pe+1,r=new Int16Array(s*s*s),a=new Uint8Array(s*s*s),o=new Uint8Array(s*s*s),l=new Uint32Array(s*s*s),c=new Uint8Array(s*s*s);let h=!1,f=!1,d=0;for(let u=0;u<s;u++)for(let g=0;g<s;g++)for(let v=0;v<s;v++,d++){const m=e*pe+u,p=t*pe+g,S=i*pe+v;if(!n.inBounds(m,p,S))continue;const x=n.index(m,p,S);r[d]=Math.round(Math.max(-nt,Math.min(nt,n.density[x]))*zu),a[d]=n.material[x],o[d]=n.hard[x],l[d]=n.sub[x],l[d]!==0&&(h=!0),c[d]=n.water[x],c[d]!==0&&(f=!0)}return{cx:e,cy:t,cz:i,n:s,density:r,material:a,hard:o,sub:h?l:null,water:f?c:null}}function yh(n,e){const t=e.n;let i=0;for(let s=0;s<t;s++)for(let r=0;r<t;r++)for(let a=0;a<t;a++,i++){const o=e.cx*pe+s,l=e.cy*pe+r,c=e.cz*pe+a;if(!n.inBounds(o,l,c))continue;const h=n.index(o,l,c);n.density[h]=e.density[i]/zu,n.material[h]=e.material[i],n.hard[h]=e.hard[i],n.sub[h]=e.sub?e.sub[i]:0,e.water!==void 0&&(n.water[h]=e.water?e.water[i]:0)}}function xn(n,e,t,i){const s=[],r=o=>Math.max(0,Math.floor((o-1)/pe)),a=(o,l)=>Math.min(l-1,Math.floor(o/pe));for(let o=r(n.x0);o<=a(n.x1,e);o++)for(let l=r(n.y0);l<=a(n.y1,t);l++)for(let c=r(n.z0);c<=a(n.z1,i);c++)s.push([o,l,c]);return s}const Pl=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],qr=2,iA=7,sA=9.8,rA=.6,aA=.45,oA=14;function lA(n,e){return n?{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}:e}function sl(n,e,t,i,s,r,a,o,l){const c=n.density,h=n.material,f=new Float32Array(a*o*l).fill(-nt),d=new Uint8Array(a*o*l),u=[],g=new Set;for(const[A,C,P]of e)g.add(n.index(A,C,P));for(let A=0;A<a;A++)for(let C=0;C<o;C++)for(let P=0;P<l;P++){const F=i+A,z=s+C,G=r+P;if(!n.inBounds(F,z,G))continue;const L=n.index(F,z,G),B=(A*o+C)*l+P;g.has(L)?(f[B]=c[L],d[B]=h[L],u.push([A,C,P])):c[L]<=0?(f[B]=c[L],d[B]=h[L]):(f[B]=-R*.5,d[B]=h[L])}for(const[A,C,P]of e)c[n.index(A,C,P)]=-nt;const v=new Uint8Array(a*o*l),m=new Uint32Array(a*o*l),p=[],S=new Set,x=(A,C,P)=>{if(!n.inBounds(A,C,P))return;const F=n.getHard(A,C,P);if(F===0)return;const z=n.index(A,C,P);if(S.has(z))return;S.add(z);const G=A-i,L=C-s,B=P-r;if(G<0||L<0||B<0||G>=a-1||L>=o-1||B>=l-1)return;const N=n.sub[z];v[(G*o+L)*l+B]=F,m[(G*o+L)*l+B]=N,p.push({x:G,y:L,z:B,mat:F,sub:N}),n.setHard(A,C,P,0),n.sub[z]=0};for(const[A,C,P]of t)x(A,C,P);for(const[A,C,P]of e)for(let F=-1;F<=0;F++)for(let z=-1;z<=0;z++)for(let G=-1;G<=0;G++)x(A+F,C+z,P+G);const y=u.slice();for(const A of p)if(ft(A.mat))for(let C=0;C<8;C++)y.push([A.x+(C&1),A.y+(C>>1&1),A.z+(C>>2&1)]);const w=[0,0,0];for(const[A,C,P]of y)w[0]+=A,w[1]+=C,w[2]+=P;const _=Math.max(1,y.length);w[0]=w[0]/_*R,w[1]=w[1]/_*R,w[2]=w[2]/_*R;const T=(A,C,P)=>A<0||C<0||P<0||A>=a||C>=o||P>=l?-1:f[(A*o+C)*l+P],b=[];let M=0;for(const[A,C,P]of u){const F=A*R-w[0],z=C*R-w[1],G=P*R-w[2];M=Math.max(M,Math.hypot(F,z,G));let L=!1;for(const[B,N,Y]of Pl)if(T(A+B,C+N,P+Y)<=0){L=!0;break}L&&b.push([F,z,G])}for(let A=u.length;A<y.length;A++){const[C,P,F]=y[A],z=C*R-w[0],G=P*R-w[1],L=F*R-w[2];M=Math.max(M,Math.hypot(z,G,L)),b.push([z,G,L])}return{ox:i,oy:s,oz:r,nx:a,ny:o,nz:l,density:f,material:d,hard:v,sub:m,items:p,solid:u,contacts:b,com:w,radius:Math.max(M,R),pos:[i*R+w[0],s*R+w[1],r*R+w[2]],q:[0,0,0,1],vel:[0,0,0],ang:[0,0,0],rest:0,age:0,settled:!1,touching:!1,texOrigin:[i*R,s*R,r*R]}}function Ou(n){return new ca(n.nx,n.ny,n.nz,0,0,0,n.density,n.material,n.hard,n.sub)}function rl(n,e,t=[0,0,0]){return pt[0]=e[0]-n.pos[0],pt[1]=e[1]-n.pos[1],pt[2]=e[2]-n.pos[2],An(fa(n.q),pt,t),t[0]+=n.com[0],t[1]+=n.com[1],t[2]+=n.com[2],t}function da(n,e,t=[0,0,0]){return pt[0]=e[0]-n.com[0],pt[1]=e[1]-n.com[1],pt[2]=e[2]-n.com[2],An(n.q,pt,t),t[0]+=n.pos[0],t[1]+=n.pos[1],t[2]+=n.pos[2],t}function cA(n,e,t,i){const s=fa(n.q),r=rl(n,e),a=[0,0,0];An(s,t,a);const o=mu(Ou(n),r,a,i,.08);if(!o)return null;const l=da(n,o.point),c=[0,0,0];return An(n.q,o.normal,c),{point:l,normal:c,distance:o.distance,material:o.material,hard:!1}}function hA(n,e,t,i,s,r,a){const o=Math.min(0,e),l=Math.min(0,t),c=Math.min(0,i),h=Math.max(n.nx-1,s),f=Math.max(n.ny-1,r),d=Math.max(n.nz-1,a);if(o===0&&l===0&&c===0&&h===n.nx-1&&f===n.ny-1&&d===n.nz-1)return;const u=h-o+1,g=f-l+1,v=d-c+1,m=new Float32Array(u*g*v).fill(-nt),p=new Uint8Array(u*g*v),S=new Uint8Array(u*g*v),x=new Uint32Array(u*g*v);for(let y=0;y<n.nx;y++)for(let w=0;w<n.ny;w++)for(let _=0;_<n.nz;_++){const T=(y*n.ny+w)*n.nz+_,b=((y-o)*g+(w-l))*v+(_-c);m[b]=n.density[T],p[b]=n.material[T],S[b]=n.hard[T],x[b]=n.sub[T]}n.density=m,n.material=p,n.hard=S,n.sub=x,n.nx=u,n.ny=g,n.nz=v;for(const y of n.items)y.x-=o,y.y-=l,y.z-=c;n.com[0]-=o*R,n.com[1]-=l*R,n.com[2]-=c*R,n.texOrigin[0]+=o*R,n.texOrigin[1]+=l*R,n.texOrigin[2]+=c*R,n.ox+=o,n.oy+=l,n.oz+=c}function al(n){const{nx:e,ny:t,nz:i}=n,s=(f,d,u)=>f<0||d<0||u<0||f>=e||d>=t||u>=i?-1:n.density[(f*t+d)*i+u],r=[];for(let f=0;f<e;f++)for(let d=0;d<t;d++)for(let u=0;u<i;u++)s(f,d,u)>0&&r.push([f,d,u]);n.solid=r;const a=r.slice();for(const f of n.items)if(ft(f.mat))for(let d=0;d<8;d++)a.push([f.x+(d&1),f.y+(d>>1&1),f.z+(d>>2&1)]);if(!a.length){n.contacts=[];return}const o=[0,0,0];for(const[f,d,u]of a)o[0]+=f,o[1]+=d,o[2]+=u;o[0]=o[0]/a.length*R,o[1]=o[1]/a.length*R,o[2]=o[2]/a.length*R;const l=[o[0]-n.com[0],o[1]-n.com[1],o[2]-n.com[2]];An(n.q,l,pt),n.pos[0]+=pt[0],n.pos[1]+=pt[1],n.pos[2]+=pt[2],n.com=o;const c=[];let h=0;for(const[f,d,u]of r){const g=f*R-o[0],v=d*R-o[1],m=u*R-o[2];h=Math.max(h,Math.hypot(g,v,m));let p=!1;for(const[S,x,y]of Pl)if(s(f+S,d+x,u+y)<=0){p=!0;break}p&&c.push([g,v,m])}for(let f=r.length;f<a.length;f++){const[d,u,g]=a[f],v=d*R-o[0],m=u*R-o[1],p=g*R-o[2];h=Math.max(h,Math.hypot(v,m,p)),c.push([v,m,p])}n.contacts=c,n.radius=Math.max(h,R),n.rest=0,n.settled=!1}function uA(n,e){if(e.op==="add"&&Hn(e.mat))return[n];const t=rl(n,[e.x,e.y,e.z]),i=e.size*.5+R*2;e.op==="add"&&hA(n,Math.floor((t[0]-i)/R),Math.floor((t[1]-i)/R),Math.floor((t[2]-i)/R),Math.ceil((t[0]+i)/R),Math.ceil((t[1]+i)/R),Math.ceil((t[2]+i)/R));const s=rl(n,[e.x,e.y,e.z]),r={...e,x:s[0],y:s[1],z:s[2]},a=Ou(n);Os(a,r),n.items=[];for(let g=0;g<n.nx-1;g++)for(let v=0;v<n.ny-1;v++)for(let m=0;m<n.nz-1;m++){const p=(g*n.ny+v)*n.nz+m;n.hard[p]!==0&&n.items.push({x:g,y:v,z:m,mat:n.hard[p],sub:n.sub[p]})}const{nx:o,ny:l,nz:c}=n,h=n.density,f=new Uint8Array(o*l*c),d=[];for(let g=0;g<o;g++)for(let v=0;v<l;v++)for(let m=0;m<c;m++){const p=(g*l+v)*c+m;if(h[p]<=0||f[p])continue;const S=[],x=[g,v,m];for(f[p]=1;x.length;){const y=x.pop(),w=x.pop(),_=x.pop();S.push([_,w,y]);for(const[T,b,M]of Pl){const A=_+T,C=w+b,P=y+M;if(A<0||C<0||P<0||A>=o||C>=l||P>=c)continue;const F=(A*l+C)*c+P;h[F]<=0||f[F]||(f[F]=1,x.push(A,C,P))}}if(S.length<=qr){for(const[y,w,_]of S)h[(y*l+w)*c+_]=-nt;continue}d.push(S)}if(d.length===0)return n.items.length?(al(n),[n]):[];if(d.length===1)return al(n),[n];const u=[];for(const g of d){let v=1/0,m=1/0,p=1/0,S=-1/0,x=-1/0,y=-1/0;for(const[T,b,M]of g)v=Math.min(v,T),m=Math.min(m,b),p=Math.min(p,M),S=Math.max(S,T),x=Math.max(x,b),y=Math.max(y,M);const w=sl(a,g,[],v-1,m-1,p-1,S-v+3,x-m+3,y-p+3),_=da(n,w.pos);w.pos=_,w.q=[n.q[0],n.q[1],n.q[2],n.q[3]],w.vel=[n.vel[0],n.vel[1],n.vel[2]],w.ang=[n.ang[0],n.ang[1],n.ang[2]],w.texOrigin=[n.texOrigin[0]+(v-1)*R,n.texOrigin[1]+(m-1)*R,n.texOrigin[2]+(p-1)*R],u.push(w)}return u}function An(n,e,t){const[i,s,r,a]=n,[o,l,c]=e,h=a*o+s*c-r*l,f=a*l+r*o-i*c,d=a*c+i*l-s*o,u=-i*o-s*l-r*c;return t[0]=h*a+u*-i+f*-r-d*-s,t[1]=f*a+u*-s+d*-i-h*-r,t[2]=d*a+u*-r+h*-s-f*-i,t}function fa(n){return[-n[0],-n[1],-n[2],n[3]]}function dA(n,e,t){const[i,s,r]=e,[a,o,l,c]=n,h=.5*t*(i*c+s*l-r*o),f=.5*t*(s*c+r*a-i*l),d=.5*t*(r*c+i*o-s*a),u=.5*t*(-i*a-s*o-r*l);let g=a+h,v=o+f,m=l+d,p=c+u;const S=Math.hypot(g,v,m,p)||1;n[0]=g/S,n[1]=v/S,n[2]=m/S,n[3]=p/S}const pt=[0,0,0],wi=[0,0,0];function fA(n,e,t,i=iA){if(e.settled)return;e.age+=t;const s=e.vel,r=e.ang;s[1]-=sA*t;const a=Math.hypot(s[0],s[1],s[2]);if(a>i){const m=i/a;s[0]*=m,s[1]*=m,s[2]*=m}e.pos[0]+=s[0]*t,e.pos[1]+=s[1]*t,e.pos[2]+=s[2]*t,dA(e.q,r,t);const o=1,l=1/(.4*e.radius*e.radius);let c=0,h=0,f=0,d=0;e.touching=!1;for(const m of e.contacts){An(e.q,m,pt);const p=e.pos[0]+pt[0],S=e.pos[1]+pt[1],x=e.pos[2]+pt[2];let y,w=0,_=1,T=0;if(S<0)y=-S;else{const G=n.sample(p,S,x),L=n.hardAt(p,S,x)!==0&&n.hardOccupiedAt(p,S,x);if(G<=0&&!L)continue;y=L?Math.max(G,.12):G,n.gradient(p,S,x,wi);const B=Math.hypot(wi[0],wi[1],wi[2]);B>1e-4&&!L&&(w=-wi[0]/B,_=-wi[1]/B,T=-wi[2]/B)}y=Math.min(y,.5),e.touching=!0;const b=pt[0],M=pt[1],A=pt[2],C=s[0]+(r[1]*A-r[2]*M),P=s[1]+(r[2]*b-r[0]*A),F=s[2]+(r[0]*M-r[1]*b),z=C*w+P*_+F*T;if(z<0){const G=M*T-A*_,L=A*w-b*T,B=b*_-M*w,N=o+l*(G*G+L*L+B*B),Y=-1.12*z/N;s[0]+=Y*w*o,s[1]+=Y*_*o,s[2]+=Y*T*o,r[0]+=l*G*Y,r[1]+=l*L*Y,r[2]+=l*B*Y;const ee=C-z*w,le=P-z*_,we=F-z*T,Be=Math.hypot(ee,le,we);if(Be>1e-4){const ze=ee/Be,Pe=le/Be,q=we/Be,j=M*q-A*Pe,te=A*ze-b*q,Ae=b*Pe-M*ze,ge=o+l*(j*j+te*te+Ae*Ae),Ne=Math.min(Be/ge,rA*Y);s[0]-=Ne*ze*o,s[1]-=Ne*Pe*o,s[2]-=Ne*q*o,r[0]-=l*j*Ne,r[1]-=l*te*Ne,r[2]-=l*Ae*Ne}}c+=w*y,h+=_*y,f+=T*y,d++}d>0&&(e.pos[0]+=c/d*1.05,e.pos[1]+=h/d*1.05,e.pos[2]+=f/d*1.05);const u=Math.exp(-t*(d>0?.9:.05));s[0]*=u,s[2]*=u,d>0&&(s[1]*=u);const g=Math.exp(-t*(d>0?1.1:.3));r[0]*=g,r[1]*=g,r[2]*=g,e.pos[0]=Math.min(n.sizeX-e.radius,Math.max(e.radius,e.pos[0])),e.pos[2]=Math.min(n.sizeZ-e.radius,Math.max(e.radius,e.pos[2]));const v=d>0&&Math.hypot(s[0],s[1],s[2])<.25&&Math.hypot(r[0],r[1],r[2])<.35;e.rest=v?e.rest+t:0,(e.rest>aA||e.age>oA)&&(e.settled=!0)}function ku(n,e,t,i){const s=e/R,r=t/R,a=i/R,o=Math.floor(s),l=Math.floor(r),c=Math.floor(a);if(o<0||l<0||c<0||o>=n.nx-1||l>=n.ny-1||c>=n.nz-1)return-nt;const h=s-o,f=r-l,d=a-c,u=(y,w,_)=>n.density[(y*n.ny+w)*n.nz+_],g=u(o,l,c)+(u(o+1,l,c)-u(o,l,c))*h,v=u(o,l,c+1)+(u(o+1,l,c+1)-u(o,l,c+1))*h,m=u(o,l+1,c)+(u(o+1,l+1,c)-u(o,l+1,c))*h,p=u(o,l+1,c+1)+(u(o+1,l+1,c+1)-u(o,l+1,c+1))*h,S=g+(m-g)*f,x=v+(p-v)*f;return S+(x-S)*d}function pA(n,e){const t=e.radius+R*2;return{x0:Math.max(0,Math.floor((e.pos[0]-t)/R)),y0:Math.max(0,Math.floor((e.pos[1]-t)/R)),z0:Math.max(0,Math.floor((e.pos[2]-t)/R)),x1:Math.min(n.nx-1,Math.ceil((e.pos[0]+t)/R)),y1:Math.min(n.ny-1,Math.ceil((e.pos[1]+t)/R)),z1:Math.min(n.nz-1,Math.ceil((e.pos[2]+t)/R))}}function mA(n,e){const t=(e.x1-e.x0+1)*(e.y1-e.y0+1)*(e.z1-e.z0+1),i=new Float32Array(t),s=new Uint8Array(t);let r=0;for(let a=e.x0;a<=e.x1;a++)for(let o=e.y0;o<=e.y1;o++)for(let l=e.z0;l<=e.z1;l++,r++){const c=n.index(a,o,l);i[r]=n.density[c],s[r]=n.material[c]}return{d:i,m:s}}function gA(n,e,t){let i=0;for(let s=e.x0;s<=e.x1;s++)for(let r=e.y0;r<=e.y1;r++)for(let a=e.z0;a<=e.z1;a++,i++){const o=n.index(s,r,a);n.density[o]=t.d[i],n.material[o]=t.m[i]}}function vA(n,e,t){if(t<=1e-6)return Math.max(n,e);const i=Math.max(0,Math.min(1,.5+.5*(e-n)/t));return n+(e-n)*i+t*i*(1-i)}function io(n,e,t,i,s,r){const a=n.density,o=n.material,l=fa(e.q),c=[0,0,0];let h=0;for(let f=t.x0;f<=t.x1;f++)for(let d=t.y0;d<=t.y1;d++)for(let u=t.z0;u<=t.z1;u++,h++){const g=n.index(f,d,u);pt[0]=f*R-e.pos[0],pt[1]=d*R-e.pos[1],pt[2]=u*R-e.pos[2],An(l,pt,c);const v=c[0]+e.com[0],m=c[1]+e.com[1],p=c[2]+e.com[2],S=ku(e,v,m,p)-s,x=i.d[h];if(d>=n.ny-1||S<=-R){a[g]=x,o[g]=i.m[h];continue}const y=Math.min(nt,vA(x,S,r));if(a[g]=y,S>x&&S>0){const w=Math.min(e.nx-1,Math.max(0,Math.round(v/R))),_=Math.min(e.ny-1,Math.max(0,Math.round(m/R))),T=Math.min(e.nz-1,Math.max(0,Math.round(p/R)));o[g]=e.material[(w*e.ny+_)*e.nz+T]||i.m[h]}else o[g]=i.m[h]}}function Gu(n,e,t=[0,0,0]){return da(n,[(e.x+.5)*R,(e.y+.5)*R,(e.z+.5)*R],t)}function Ah(n,e){let t=0;e[0]=0,e[1]=0,e[2]=0;for(let i=0;i<27;i++)n&1<<i&&(e[0]+=i%3-1,e[1]+=Math.floor(i/3)%3-1,e[2]+=Math.floor(i/9)-1,t++);return t&&(e[0]/=t,e[1]/=t,e[2]/=t),t}function xA(n,e){if(n===0||n===Zt)return n;const t=[An(e,[1,0,0],[0,0,0]),An(e,[0,1,0],[0,0,0]),An(e,[0,0,1],[0,0,0])],i=[-1,-1,-1],s=[1,1,1],r=[!1,!1,!1];for(let g=0;g<2;g++){let v=-1,m=-1,p=-1;for(let S=0;S<3;S++)if(!(i[S]>=0))for(let x=0;x<3;x++)!r[x]&&Math.abs(t[S][x])>p&&(p=Math.abs(t[S][x]),v=x,m=S);i[m]=v,s[m]=t[m][v]<0?-1:1,r[v]=!0}const a=i.indexOf(-1),o=r.indexOf(!1);i[a]=o;const l=(a+1)%3,c=(a+2)%3,h=[0,0,0],f=[0,0,0];h[i[l]]=s[l],f[i[c]]=s[c];const d=[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]];s[a]=d[o]<0?-1:1;let u=0;for(let g=0;g<27;g++)if(n&1<<g){const v=[g%3-1,Math.floor(g/3)%3-1,Math.floor(g/9)-1],m=[0,0,0];for(let p=0;p<3;p++)m[i[p]]+=s[p]*v[p];u|=1<<m[0]+1+3*(m[1]+1+3*(m[2]+1))}return u}const Fr=[0,0,0],zr=[0,0,0];function Sh(n,e){const t=n.density,i=n.material;for(const v of e.items){let m,p,S,x=0;if(ft(v.mat)){const _=v.sub||Zt;x=xA(_,e.q),Ah(_,Fr);const T=da(e,[(v.x+.5)*R+Fr[0]*R/3,(v.y+.5)*R+Fr[1]*R/3,(v.z+.5)*R+Fr[2]*R/3]);Ah(x,zr),m=Math.round((T[0]-zr[0]*R/3)/R-.5),p=Math.round((T[1]-zr[1]*R/3)/R-.5),S=Math.round((T[2]-zr[2]*R/3)/R-.5)}else{const _=Gu(e,v);m=Math.floor(_[0]/R),p=Math.floor(_[1]/R),S=Math.floor(_[2]/R)}if(!n.inBounds(m,p,S)||m>=n.nx-1||p>=n.ny-1||S>=n.nz-1)continue;const y=n.index(m,p,S),w=n.getHard(m,p,S);if(w===0)n.setHard(m,p,S,v.mat),n.sub[y]=x===Zt?0:x;else if(w===v.mat&&x!==0){const T=(n.sub[y]||Zt)|x;n.sub[y]=T===Zt?0:T}}const s=e.radius+R,r=Math.max(0,Math.floor((e.pos[0]-s)/R)),a=Math.min(n.nx-1,Math.ceil((e.pos[0]+s)/R)),o=Math.max(0,Math.floor((e.pos[1]-s)/R)),l=Math.min(n.ny-1,Math.ceil((e.pos[1]+s)/R)),c=Math.max(0,Math.floor((e.pos[2]-s)/R)),h=Math.min(n.nz-1,Math.ceil((e.pos[2]+s)/R)),f=fa(e.q),d=[0,0,0];let u=null;for(let v=r;v<=a;v++)for(let m=o;m<=l;m++)for(let p=c;p<=h;p++){pt[0]=v*R-e.pos[0],pt[1]=m*R-e.pos[1],pt[2]=p*R-e.pos[2],An(f,pt,d);const S=d[0]+e.com[0],x=d[1]+e.com[1],y=d[2]+e.com[2],w=ku(e,S,x,y);if(w<=-R)continue;const _=n.index(v,m,p);if(w>t[_]&&m<n.ny-1){if(t[_]=Math.min(w,nt),w>0){const T=Math.min(e.nx-1,Math.max(0,Math.round(S/R))),b=Math.min(e.ny-1,Math.max(0,Math.round(x/R))),M=Math.min(e.nz-1,Math.max(0,Math.round(y/R)));i[_]=e.material[(T*e.ny+b)*e.nz+M]||i[_]}u=lA(u,{x0:v-1,y0:m-1,z0:p-1,x1:v+1,y1:m+1,z1:p+1})}}const g=u??{x0:r,y0:o,z0:c,x1:a,y1:l,z1:h};return{x0:Math.max(0,g.x0),y0:Math.max(0,g.y0),z0:Math.max(0,g.z0),x1:Math.min(n.nx-1,g.x1),y1:Math.min(n.ny-1,g.y1),z1:Math.min(n.nz-1,g.z1)}}function _h(n){return{ox:n.ox,oy:n.oy,oz:n.oz,nx:n.nx,ny:n.ny,nz:n.nz,density:Array.from(n.density,e=>+e.toFixed(4)),material:Array.from(n.material),hard:Array.from(n.hard),sub:Array.from(n.sub),items:n.items.map(e=>({...e})),pos:[...n.pos],q:[...n.q],vel:[...n.vel],ang:[...n.ang],age:n.age,texOrigin:[...n.texOrigin]}}function MA(n){const e={ox:n.ox,oy:n.oy,oz:n.oz,nx:n.nx,ny:n.ny,nz:n.nz,density:Float32Array.from(n.density),material:Uint8Array.from(n.material),hard:Uint8Array.from(n.hard),sub:Uint32Array.from(n.sub),items:n.items.map(i=>({...i})),solid:[],contacts:[],com:[0,0,0],radius:R,pos:[...n.pos],q:[...n.q],vel:[...n.vel],ang:[...n.ang],rest:0,age:n.age,settled:!1,touching:!1,texOrigin:[...n.texOrigin]},t=[e.pos[0],e.pos[1],e.pos[2]];return al(e),e.pos=t,e}const Us=7,Ns=8,Or=16,kr=20,Qt=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],so=[1,0,3,2,5,4],is=4,wh=3e5;class yA{constructor(e){this.field=e,this.N=e.nx*e.ny*e.nz,this.parent=new Uint8Array(this.N*2),this.sx=e.ny*e.nz,this.sy=e.nz}parent;N;sx;sy;xyz(e){const t=this.field,i=e<this.N?e:e-this.N;return[Math.floor(i/this.sx),Math.floor(i/this.sy)%t.ny,i%t.nz]}solid(e){return e<this.N?this.field.density[e]>0:ft(this.field.hard[e-this.N])}isRoot(e){return e>=this.N&&this.field.hard[e-this.N]===xs}cellIn(e,t,i){const s=this.field;return e>=0&&t>=0&&i>=0&&e<s.nx-1&&t<s.ny-1&&i<s.nz-1}cornerIn(e,t,i){const s=this.field;return e>=0&&t>=0&&i>=0&&e<s.nx&&t<s.ny&&i<s.nz}neighbours(e,t){const[i,s,r]=this.xyz(e);if(e<this.N){for(let a=0;a<6;a++){const o=i+Qt[a][0],l=s+Qt[a][1],c=r+Qt[a][2];this.cornerIn(o,l,c)&&t(e+Qt[a][0]*this.sx+Qt[a][1]*this.sy+Qt[a][2],so[a]+1)}for(let a=0;a<8;a++){const o=a&1,l=a>>1&1,c=a>>2&1,h=i-o,f=s-l,d=r-c;this.cellIn(h,f,d)&&t(this.N+this.field.index(h,f,d),Ns+a)}for(let a=0;a<4;a++){const o=a&1,l=a>>1&1,c=i-o,h=s+1,f=r-l;this.cellIn(c,h,f)&&t(this.N+this.field.index(c,h,f),Or+a)}}else{for(let a=0;a<6;a++){const o=i+Qt[a][0],l=s+Qt[a][1],c=r+Qt[a][2];this.cellIn(o,l,c)&&t(e+Qt[a][0]*this.sx+Qt[a][1]*this.sy+Qt[a][2],so[a]+1)}for(let a=0;a<8;a++){const o=a&1,l=a>>1&1,c=a>>2&1;t(this.field.index(i+o,s+l,r+c),Ns+a)}if(s>0)for(let a=0;a<4;a++){const o=a&1,l=a>>1&1;t(this.field.index(i+o,s-1,r+l),Or+a)}}}parentOf(e){const t=this.parent[e];if(t===0||t===Us||t===kr)return-1;const[i,s,r]=this.xyz(e);if(t<Ns){const h=t-1;return e+Qt[h][0]*this.sx+Qt[h][1]*this.sy+Qt[h][2]}if(t>=Or){const h=t-Or,f=h&1,d=h>>1&1;return e<this.N?this.N+this.field.index(i-f,s+1,r-d):this.field.index(i+f,s-1,r+d)}const a=t-Ns,o=a&1,l=a>>1&1,c=a>>2&1;return e<this.N?this.N+this.field.index(i-o,s-l,r-c):this.field.index(i+o,s+l,r+c)}build(){const e=this.field,t=this.parent,i=e.hard;t.fill(0);const s=[];for(let r=0;r<this.N;r++)i[r]===xs&&this.isRoot(this.N+r)&&(t[this.N+r]=Us,s.push(this.N+r));this.grow(s)}grow(e){const t=this.parent;let i=0;for(;i<e.length;){const s=e[i++];this.neighbours(s,(r,a)=>{t[r]===0&&this.solid(r)&&(t[r]=a,e.push(r))}),i>65536&&i*2>e.length&&(e=e.slice(i),i=0)}}afterEdit(e,t=wh){const i=this.field,s=this.parent;let r=0;const a=Math.max(0,e.x0-1),o=Math.max(0,e.y0-1),l=Math.max(0,e.z0-1),c=Math.min(i.nx-1,e.x1+1),h=Math.min(i.ny-1,e.y1+1),f=Math.min(i.nz-1,e.z1+1),d=[],u=[],g=b=>{if(!this.solid(b)){s[b]!==0&&(s[b]=0,d.push(b));return}s[b]===Us&&!this.isRoot(b)?(s[b]=0,d.push(b),u.push(b)):s[b]===0&&u.push(b)};for(let b=a;b<=c;b++)for(let M=o;M<=h;M++)for(let A=l;A<=f;A++){const C=i.index(b,M,A);g(C),this.cellIn(b,M,A)&&g(this.N+C)}const v=[];let m=0;const p=d.slice();for(;m<p.length;){const b=p[m++];this.neighbours(b,M=>{s[M]===0||s[M]===Us||s[M]===kr||!this.solid(M)||this.parentOf(M)!==b||(s[M]=0,v.push(M),p.push(M))})}const S=u.concat(v),x=[];for(const b of S)s[b]===0&&this.solid(b)&&this.isRoot(b)&&(s[b]=Us,x.push(b));for(const b of S)s[b]!==0||!this.solid(b)||this.neighbours(b,(M,A)=>{s[b]!==0||!this.solid(M)||s[M]===0||(s[b]=this.reverse(b,M,A),x.push(b))});this.grow(x);const y=[];let w=null;const _=new Set,T=b=>{const{corners:M,cells:A}=this.component(b,_);let C=1/0,P=1/0,F=1/0,z=-1/0,G=-1/0,L=-1/0;for(const[N,Y,ee]of M)C=Math.min(C,N),P=Math.min(P,Y),F=Math.min(F,ee),z=Math.max(z,N),G=Math.max(G,Y),L=Math.max(L,ee);for(const[N,Y,ee]of A)C=Math.min(C,N),P=Math.min(P,Y),F=Math.min(F,ee),z=Math.max(z,N+1),G=Math.max(G,Y+1),L=Math.max(L,ee+1);const B={x0:Math.max(0,C-1),y0:Math.max(0,P-1),z0:Math.max(0,F-1),x1:Math.min(i.nx-1,z+1),y1:Math.min(i.ny-1,G+1),z1:Math.min(i.nz-1,L+1)};if(w=w?{x0:Math.min(w.x0,B.x0),y0:Math.min(w.y0,B.y0),z0:Math.min(w.z0,B.z0),x1:Math.max(w.x1,B.x1),y1:Math.max(w.y1,B.y1),z1:Math.max(w.z1,B.z1)}:B,A.length===0&&M.length<=qr){for(const[N,Y,ee]of M)i.density[i.index(N,Y,ee)]=-nt;return}if(M.length+A.length>t){this.hold(M,A),r++;return}y.push(sl(i,M,A,C-1,P-1,F-1,z-C+3,G-P+3,L-F+3))};for(const b of S)s[b]===0&&this.solid(b)&&!_.has(b)&&T(b);if(w){const b=w,M=Math.max(0,b.x0-is),A=Math.max(0,b.y0-is),C=Math.max(0,b.z0-is),P=Math.min(i.nx-1,b.x1+is),F=Math.min(i.ny-1,b.y1+is),z=Math.min(i.nz-1,b.z1+is);for(let G=M;G<=P;G++)for(let L=A;L<=F;L++)for(let B=C;B<=z;B++){const N=i.index(G,L,B);s[N]===0&&this.solid(N)&&!_.has(N)&&T(N);const Y=this.N+N;this.cellIn(G,L,B)&&s[Y]===0&&this.solid(Y)&&!_.has(Y)&&T(Y)}}return{fragments:y,changed:w,held:r}}hold(e,t){const i=this.field,s=this.parent;for(const[r,a,o]of e)s[i.index(r,a,o)]=kr;for(const[r,a,o]of t)s[this.N+i.index(r,a,o)]=kr}reverse(e,t,i){return i<Ns?so[i-1]+1:i}component(e,t){const i=this.parent,s=[],r=[],a=[e];for(t.add(e);a.length;){const o=a.pop();(o<this.N?s:r).push(this.xyz(o)),this.neighbours(o,l=>{i[l]!==0||!this.solid(l)||t.has(l)||(t.add(l),a.push(l))})}return{corners:s,cells:r}}dropLoose(e=wh){const t=this.field,i=this.parent,s=new Set,r=[];let a=null,o=0;for(let l=0;l<this.N*2;l++){if(i[l]!==0||!this.solid(l)||s.has(l))continue;const{corners:c,cells:h}=this.component(l,s);if(h.length===0&&c.length<=qr){for(const[S,x,y]of c)t.density[t.index(S,x,y)]=-nt;continue}if(c.length+h.length>e){this.hold(c,h),o++;continue}let f=1/0,d=1/0,u=1/0,g=-1/0,v=-1/0,m=-1/0;for(const[S,x,y]of c)f=Math.min(f,S),d=Math.min(d,x),u=Math.min(u,y),g=Math.max(g,S),v=Math.max(v,x),m=Math.max(m,y);for(const[S,x,y]of h)f=Math.min(f,S),d=Math.min(d,x),u=Math.min(u,y),g=Math.max(g,S+1),v=Math.max(v,x+1),m=Math.max(m,y+1);const p={x0:Math.max(0,f-1),y0:Math.max(0,d-1),z0:Math.max(0,u-1),x1:Math.min(t.nx-1,g+1),y1:Math.min(t.ny-1,v+1),z1:Math.min(t.nz-1,m+1)};a=a?{x0:Math.min(a.x0,p.x0),y0:Math.min(a.y0,p.y0),z0:Math.min(a.z0,p.z0),x1:Math.max(a.x1,p.x1),y1:Math.max(a.y1,p.y1),z1:Math.max(a.z1,p.z1)}:p,r.push(sl(t,c,h,f-1,d-1,u-1,g-f+3,v-d+3,m-u+3))}return{fragments:r,changed:a,held:o}}pruneSpecks(){const e=this.field,t=e.density,i=this.parent,s=new Set;let r=0;for(let a=0;a<this.N;a++){if(t[a]<=0||i[a]!==0||s.has(a))continue;const{corners:o,cells:l}=this.component(a,s);if(!(l.length||o.length>qr)){for(const[c,h,f]of o)t[e.index(c,h,f)]=-nt;r+=o.length}}return r}countUnsupported(){const e=this.parent;let t=0;for(let i=0;i<this.N*2;i++)e[i]===0&&this.solid(i)&&t++;return t}}const AA=600;class Ll{cfg;field;gi;renderer;pool;bootLog="";world;input;touch;hud;body;edits;quality;time;timeRate=1/90;timePaused=!1;sun;brush={shape:"cube",sizeIndex:2,op:"add",matIndex:0,snap:!0};chunks=new Map;lightDirty=new Set;lightRR=0;giDirty=!1;lastGiUpload=0;lastLod=0;lastEdit=0;saveTimer=0;dirtySlabs=new Set;undoStack=[];fps=0;frames=0;fpsT=0;lastFrame=0;lastHash=0;anims=[];waterDirty=!1;lastWaterBuild=0;floods=[];handEmpty=!1;crouch=!1;crouchLatch=!1;eye=li;foliage=1;falling=[];fallSpeed=7;slosh=0;editMs=Eh;lights=new Map;support;nextFragId=1;opts;lightSweeps=0;ready=!1;hit=null;hitBody=null;pickTarget=null;primeAim=!1;animals=[];regrowth=null;sand;sandOn=!0;sandClock=0;playSeconds=0;animalsOn=!0;animalRng=Zo(1);nextAnimalId=1;animalsDirty=!1;lastAnimalSave=0;constructor(e,t,i,s,r,a,o,l,c){this.pool=o,this.world=c,this.opts=t,this.cfg=s,this.field=i,this.edits=r,this.hud=a,this.quality=t.quality,this.foliage=t.foliage??(this.touchEnabledGuess()?.5:1),this.fallSpeed=t.fall??7,this.editMs=Math.max(60,Math.min(2e3,t.edit??Eh)),this.time=t.time??10.5,this.sun=Xc(this.time),this.gi=new pv(i),this.support=new yA(i),this.touch=new tA(document.getElementById("touch"));const h=this.touch.enabled||/Mobi|Android/i.test(navigator.userAgent);this.renderer=new Ky(e,i,this.gi,s.seaLevel,{textures:l,shadowMapSize:t.test||h?2048:4096,antialias:!t.test,cheapGi:t.cheapGi??h,maxPixelRatio:h?1.5:2,post:t.post??(t.quality==="low"?1:2),giMode:t.giMode??"sh",giDiv:t.giDiv??(h?2:1),scatterDensity:1,volumetricSteps:t.volumetric===!1||t.quality==="low"?0:h?8:16,caustics:t.caustic!==!1,iceDebug:t.iceDebug??0,reflection:!h,variant:t.shader}),this.renderer.onShaderError=u=>this.hud.showError(u),window.addEventListener("error",u=>this.hud.showError("error: "+(u.message??"").slice(0,160))),window.addEventListener("unhandledrejection",u=>this.hud.showError("rejection: "+String(u.reason).slice(0,160))),this.input=new jy(e);const f=i.sizeX/2,d=i.sizeZ/2;if(this.body=xu(f,Ms(i,f,d)+.2,d),this.input.yaw=Math.PI*.25,this.touch.setFly(!1),t.view&&t.view.length>=5){const u=t.view;this.body.pos[0]=u[0],this.body.pos[1]=u[1],this.body.pos[2]=u[2],this.input.yaw=u[3],this.input.pitch=u[4],u.length>=6&&(this.time=u[5],this.timePaused=!0),this.body.fly=!0}for(let u=0;u<s.chunksX;u++)for(let g=0;g<s.chunksY;g++)for(let v=0;v<s.chunksZ;v++)this.chunks.set(Dt(u,g,v),{level:-1,wanted:0,inflight:!1,dirty:!1,triangles:0,version:0,scatter:0,wantedScatter:0,nextBatch:null});this.hud.buildHotbar(this.renderer.textures),this.renderer.scatter.setFade(sa-pe*R*.9,8),this.hud.setSelected(0),this.hud.onFall=u=>{this.fallSpeed=u,Gn({fall:u}),this.hud.say(`fall speed ${u} m/s`)},this.hud.onEditMs=u=>{this.editMs=Math.max(60,Math.min(2e3,u)),Gn({edit:this.editMs})},this.hud.onFoliage=u=>{this.foliage=u,Gn({foliage:u}),this.updateLod(!1),this.hud.say(`foliage ×${u}`)},this.animalsOn=t.animals??!0,this.sandOn=t.sand??!0,this.sand=new kv(i,s.seaLevel),window.addEventListener("pagehide",()=>this.flushNow()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&this.flushNow()}),this.hud.onAnimals=u=>{this.animalsOn=u,Gn({animals:u}),u||this.renderer.clearAnimals(),this.hud.say(u?"animals on":"animals off")},this.hud.onSand=u=>{this.sandOn=u,Gn({sand:u}),u||this.sand.clear(),this.hud.say(u?"sand slumps":"sand holds")},this.hud.onQuality=u=>{this.quality=u,Gn({quality:u}),this.lastLod=0,this.renderer.setPost(u==="low"?1:2)},this.hud.onResetEdits=()=>{Mh(this.cfg.seed),rh(this.cfg.seed).then(()=>location.reload())},this.hud.onNewWorld=(u,g)=>{Gn({seed:u}),location.href=location.pathname+"?seed="+u+(g?"&chunks="+g:"")},this.hud.onLoadWorld=u=>{if(u===this.cfg.seed){this.resume();return}Gn({seed:u}),location.href=location.pathname+"?seed="+u},this.hud.onRenameWorld=(u,g)=>{yx(u,g).then(()=>this.refreshWorlds()),u===this.cfg.seed&&this.world&&(this.world.name=g)},this.hud.onDeleteWorld=u=>{if(u===this.cfg.seed){this.hud.onResetEdits?.();return}rh(u).then(()=>this.refreshWorlds())},this.hud.onResume=()=>this.resume(),this.hud.onMenu=()=>{document.pointerLockElement&&document.exitPointerLock(),this.showMenu()},this.hud.onCopyLink=()=>{const u=this.shareLink();navigator.clipboard?.writeText(u).then(()=>this.hud.say("link copied"),()=>this.hud.say(u,6e3))},this.hud.onTime=u=>{this.time=u,this.timePaused=!0},this.hud.onTimeFlow=()=>{this.timePaused=!this.timePaused,this.hud.say(this.timePaused?"time paused":"time flowing")},this.hud.onSelectSlot=u=>this.selectSlot(u),this.renderer.setHandItem(fn[0].id),e.addEventListener("click",()=>{!this.hud.overlayVisible&&!this.input.freeMouse&&this.input.requestLock()}),document.addEventListener("pointerlockchange",()=>{!this.input.locked&&!t.test&&!this.touch.enabled&&!this.input.freeMouse&&this.showMenu()}),window.addEventListener("resize",()=>this.renderer.resize())}touchEnabledGuess(){return"ontouchstart"in window||/Mobi|Android/i.test(navigator.userAgent)}static async create(e,t,i){const s=t.chunks??kc.chunksX,r={...kc,seed:t.seed,chunksX:s,chunksZ:s},a=new Zy(t.test?2:Math.max(1,Math.min(6,(navigator.hardwareConcurrency||4)-1))),o=performance.now(),l=[],c=T=>l.push(`${T} ${(performance.now()-o).toFixed(0)}`);i.setLoading(.02,"shaping terrain");const h=a.textures(Sy),f=Mx(r.seed,s),d=gx(r.seed),u=new ca(r.chunksX*pe+1,r.chunksY*pe+1,r.chunksZ*pe+1),g=r.chunksX*r.chunksY*r.chunksZ;let v=0;const m=pe+1,p=[];for(let T=0;T<r.chunksX;T++)for(let b=0;b<r.chunksY;b++)for(let M=0;M<r.chunksZ;M++)p.push(a.gen(T,b,M,r,b*8+Math.abs(T-r.chunksX/2)+Math.abs(M-r.chunksZ/2)).then(A=>{for(let C=0;C<m;C++)for(let P=0;P<m;P++){const F=(C*m+P)*m,z=u.index(T*pe+C,b*pe+P,M*pe);u.density.set(A.density.subarray(F,F+m),z),u.material.set(A.material.subarray(F,F+m),z)}v++,((v&7)===0||v===g)&&i.setLoading(.02+.28*(v/g),`shaping terrain · ${v} / ${g}`)}));await Promise.all(p),c("terrain"),i.setLoading(.3,"planting trees"),await ii(),new Hc(r).plantTrees(u),c("trees"),xy(u,r.seaLevel),c("water");const S=_y(await h),x=await f;c("textures"),i.setLoading(.35,"loading your world"),await ii();const y=await d;for(const T of y)yh(u,T);Nv(u),uv(u);for(const T of y)T.water===void 0&&My(u,{x0:T.cx*pe,y0:T.cy*pe,z0:T.cz*pe,x1:T.cx*pe+pe,y1:T.cy*pe+pe,z1:T.cz*pe+pe},r.seaLevel);const w=[];if(y.length===0){const T=nA(r.seed);if(T.length){i.setLoading(.4,`converting ${T.length} old edits`),await ii();const b=new Set;for(let A=0;A<T.length;A++){const C=Os(u,T[A]);for(const[P,F,z]of xn(C,r.chunksX,r.chunksY,r.chunksZ))b.add(Dt(P,F,z));(A&31)===31&&(i.setLoading(.4+.05*(A/T.length),`converting ${A+1} / ${T.length} old edits`),await ii())}const M=[];for(const A of b){const[C,P,F]=Fs(A);M.push(no(u,C,P,F))}await sh(r.seed,M),Mh(r.seed)}}i.setLoading(.45,"painting materials"),await ii(),c("slabs");const _=new Ll(e,t,u,r,w,i,a,S,x);_.renderer.water.rebuild(u),_.seedAnimals(),_.resumeBodies(),_.regrowth=new cx(new Hc(r),u.sizeX,u.sizeZ);try{navigator.storage?.persist?.()}catch{}return c("renderer"),i.setLoading(.6,"finding what stands on what"),await ii(),_.support.build(),_.settleLoose(),c("support"),i.setLoading(.7,"lighting the world"),await ii(),_.injectAll(),_.renderer.giTex.upload(),_.renderer.giUploaded(),_.renderer.setSun(_.sun),c("light"),i.setLoading(.8,"meshing chunks"),await ii(),_.updateLod(!0),c("lod"),_.bootLog=l.join(" · "),_}resume(){this.hud.hideOverlay(),!this.opts.test&&!this.touch.enabled&&this.input.requestLock()}showMenu(){this.hud.showOverlay(this.cfg.seed,this.quality,this.foliage,this.fallSpeed,this.animalsOn,this.sandOn,this.editMs),this.refreshWorlds()}async refreshWorlds(){const e=await vx();this.world&&!e.some(t=>t.id===this.world.id)&&e.unshift(this.world),this.hud.renderWorlds(e,this.cfg.seed)}stepSand(e){if(!this.sandOn||!this.sand.pending||(this.sandClock+=Math.min(e,.1),this.sandClock<zv))return;this.sandClock=0;const t=this.sand.step();if(!t)return;const i=this.support.afterEdit(t);for(const r of i.fragments)this.launch(r);const s=this.refresh(i.changed?si(t,i.changed):t,!0);for(const[r,a,o]of xn(s,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Dt(r,a,o));this.scheduleSave()}settleSand(e=600){let t=0,i=null;for(;t<e&&this.sand.pending;){t++;const s=this.sand.step();s&&(i=i?si(i,s):s)}if(i){const s=this.support.afterEdit(i);for(const a of s.fragments)this.launch(a);const r=this.refresh(s.changed?si(i,s.changed):i,!0);for(const[a,o,l]of xn(r,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Dt(a,o,l));this.scheduleSave()}return t}stepRegrowth(e){if(!this.regrowth)return;this.playSeconds+=Math.min(e,.1);const t=this.regrowth.step(this.field,this.playSeconds,this.body.pos,this.animalRng);for(const i of t){const s=this.support.afterEdit(i);for(const a of s.fragments)this.launch(a);this.sandOn&&this.sand.wake(i);const r=this.refresh(s.changed?si(i,s.changed):i,!0);for(const[a,o,l]of xn(r,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Dt(a,o,l));this.scheduleSave()}}seedAnimals(){this.animalRng=Zo((this.cfg.seed^2577)>>>0);const e=this.world?.animals,t=e?[...e]:[],i=this.cfg.chunksX*this.cfg.chunksZ,s=o=>t.some(l=>l.kind===o);let r=!1;s("goat")||(t.push(...eh(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(2,Math.round(i/8)),this.animalRng,[vs,gs])),r=!0),s("penguin")||(t.push(...nx(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(3,Math.round(i/10)),this.animalRng,[qs,Js])),r=!0),s("fish")||(t.push(...ix(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(5,Math.round(i/6)),this.animalRng)),r=!0),s("cat")||(t.push(...eh(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(1,Math.round(i/32)),this.animalRng,[vs,gs],"cat")),r=!0),this.animals=t.map(o=>Kv(this.field,o,this.nextAnimalId++)),r&&(this.animalsDirty=!0);const a=[["goat",Al],["penguin",Sl],["fish",_l],["cat",wl]];for(const[o,l]of a)for(let c=0;c<Hv;c++)this.pool.skin(o,c,l).then(h=>this.renderer.setSkin(o,c,h))}stepAnimals(e){if(!this.animalsOn||!this.animals.length)return;const t=this.animals.length;ex(this.field,this.animals,Math.min(e,.05),this.body.pos,this.animalRng);for(const s of this.animals)this.renderer.placeAnimal(s.id,s.kind,jv(s),s.body.pos,s.yaw,s.pitch);t&&(this.animalsDirty=!0);const i=this.lastNow;if(this.animalsDirty&&i-this.lastAnimalSave>8e3){this.lastAnimalSave=i,this.animalsDirty=!1;const s=this.animals.map($c);this.world&&(this.world.animals=s),ih(this.cfg.seed,s)}}pick(e){if(e.kind==="animal"){const s=this.animals.find(r=>r.id===e.id)?.kind??"animal";this.animals=this.animals.filter(r=>r.id!==e.id),this.renderer.removeAnimal(e.id),this.animalsDirty=!0,this.hud.say(`${s} removed`),this.pickTarget=null;return}const{c:t,size:i}=this.pickBox(e);this.applyEdit({op:"sub",shape:"cube",size:i,mat:e.mat,x:t[0],y:t[1],z:t[2],pick:!0}),this.hud.say(`${Et[e.mat]?.name??"light"} removed`),this.pickTarget=null}pickBox(e){const[t,i,s]=e.cell,r=[(t+.5)*R,(i+.5)*R,(s+.5)*R];if(!ft(e.mat))return{c:r,size:R};const a=Math.max(R,ti[this.brush.sizeIndex]);return{c:this.brush.snap?[Math.floor(r[0]/a)*a+a/2,Math.floor(r[1]/a)*a+a/2,Math.floor(r[2]/a)*a+a/2]:r,size:a}}selectSlot(e){if(e===this.brush.matIndex&&!this.handEmpty){this.handEmpty=!0,this.hud.setSelected(-1),this.renderer.setHandItem(0),this.hud.say("empty hand");return}this.handEmpty=!1,this.brush.matIndex=e,this.hud.setSelected(e),this.syncShapeToMaterial(),this.renderer.setHandItem(fn[e].id)}syncShapeToMaterial(){Hn(fn[this.brush.matIndex].id)&&(this.brush.shape="cube",this.brush.snap=!0)}injectAll(){const e=pe/_t;for(let t=0;t<this.cfg.chunksX;t++)for(let i=0;i<this.cfg.chunksY;i++)for(let s=0;s<this.cfg.chunksZ;s++)Tr(this.field,this.gi,t,i,s,e,this.sun);this.lightSweeps++,this.giDirty=!0}lightTexels(e,t,i){const s=this.gi,r=s.texel,a=pe/_t,o=e/r-.5,l=t/r-.5,c=i/r-.5,h=Math.floor(o),f=Math.floor(l),d=Math.floor(c),u=o-h,g=l-f,v=c-d,m=[];for(let p=0;p<=1;p++)for(let S=0;S<=1;S++)for(let x=0;x<=1;x++){const y=h+p,w=f+S,_=d+x;if(y<0||w<0||_<0||y>=s.sx||w>=s.sy||_>=s.sz)continue;const T=(p?u:1-u)*(S?g:1-g)*(x?v:1-v);T<.001||m.push({o:s.index(y,w,_),chunk:Dt(Math.floor(y/a),Math.floor(w/a),Math.floor(_/a)),w:T})}return m}extraLights(e){let t;for(const i of this.lights.values())if(i.chunks.has(e))for(const s of this.lightTexels(i.x,i.y,i.z)){if(s.chunk!==e)continue;t??=new Map;const r=t.get(s.o);r?(r[0]+=i.r*s.w,r[1]+=i.g*s.w,r[2]+=i.b*s.w,r[3]=Math.max(r[3],i.kind)):t.set(s.o,[i.r*s.w,i.g*s.w,i.b*s.w,i.kind])}return t}setLight(e,t,i,s,r,a,o,l){const c=this.lights.get(e);if(c&&Math.hypot(c.x-t,c.y-i,c.z-s)<this.gi.texel/6&&c.r===r&&c.kind===l||c&&this.lastNow-c.at<30)return;const h=new Set;for(const d of this.lightTexels(t,i,s))h.add(d.chunk);const f=new Set(h);if(c)for(const d of c.chunks)f.add(d);this.lights.set(e,{x:t,y:i,z:s,r,g:a,b:o,kind:l,chunks:h,at:this.lastNow}),this.relightNow(f)}clearLight(e){const t=this.lights.get(e);t&&(this.lights.delete(e),this.relightNow(t.chunks))}relightNow(e){const t=pe/_t;for(const i of e){const[s,r,a]=Fs(i);Tr(this.field,this.gi,s,r,a,t,this.sun,this.extraLights(i)),this.lightDirty.delete(i)}this.giDirty=!0}updateLights(){const e=new Set,t=fn[this.brush.matIndex],i=this.renderer.handWorld();if(i&&t.emissive&&!this.handEmpty){const s=.25*(ft(t.id)?jo:1);this.setLight("hand",i.x,i.y,i.z,t.emissive[0]*s,t.emissive[1]*s,t.emissive[2]*s,ft(t.id)?1:0),e.add("hand")}for(const s of this.falling)s.cooking||s.frag.items.forEach((r,a)=>{const o=Et[r.mat];if(!o?.emissive)return;const l=Gu(s.frag,r),c=`body:${s.id}:${a}`,h=ft(r.mat)?jo:1;this.setLight(c,l[0],l[1],l[2],o.emissive[0]*h,o.emissive[1]*h,o.emissive[2]*h,ft(r.mat)?1:0),e.add(c)});for(const s of this.lights.keys())e.has(s)||this.clearLight(s)}lightStep(e){this.updateLights();const t=this.opts.test?12:2.5,i=performance.now(),s=pe/_t,r=this.cfg.chunksX*this.cfg.chunksY*this.cfg.chunksZ;let a=0;for(const o of this.lightDirty){const[l,c,h]=Fs(o);if(Tr(this.field,this.gi,l,c,h,s,this.sun,this.extraLights(o)),this.lightDirty.delete(o),a++,performance.now()-i>t)break}for(;performance.now()-i<t;){const o=this.lightRR,l=Math.floor(o/(this.cfg.chunksY*this.cfg.chunksZ)),c=Math.floor(o/this.cfg.chunksZ)%this.cfg.chunksY,h=o%this.cfg.chunksZ;Tr(this.field,this.gi,l,c,h,s,this.sun),this.lightRR=(o+1)%r,this.lightRR===0&&this.lightSweeps++,a++}a>0&&(this.giDirty=!0),this.giDirty&&e-this.lastGiUpload>(this.opts.test?30:150)&&(this.renderer.giTex.upload(),this.renderer.giUploaded(),this.giDirty=!1,this.lastGiUpload=e)}wantedLevel(e,t,i,s){const r=pe*R,a=this.renderer.camera.position,o=Math.hypot((e+.5)*r-a.x,(t+.5)*r-a.y,(i+.5)*r-a.z);return Ex(o,s,this.quality)}updateLod(e){const t=()=>{for(const[i,s]of this.chunks){const[r,a,o]=Fs(i),l=this.wantedLevel(r,a,o,s.level),c=this.scatterFor(r,a,o,s.scatter);(l!==s.wanted||c!==s.wantedScatter||e||s.level<0)&&(s.wanted=l,s.wantedScatter=c,(s.level!==l||s.scatter!==c||s.level<0)&&this.requestMesh(r,a,o,e?null:this.curBatch))}};e?t():this.batched(t),this.pool.reprioritize(i=>this.priority(i.cx,i.cy,i.cz))}scatterFor(e,t,i,s){if(this.foliage<=0)return 0;const r=pe*R;return Math.hypot((e+.5)*r-this.body.pos[0],(t+.5)*r-this.body.pos[1],(i+.5)*r-this.body.pos[2])<sa+(s>0?wu:0)?this.foliage:0}priority(e,t,i){const s=pe*R;return Math.hypot((e+.5)*s-this.body.pos[0],(t+.5)*s-this.body.pos[1],(i+.5)*s-this.body.pos[2])}curBatch=null;batches=new Set;batched(e){const t=this.curBatch,i={pending:0,swaps:[],t0:performance.now(),flushed:!1};this.curBatch=i;try{e()}finally{this.curBatch=t}i.pending>0&&this.batches.add(i)}flushBatch(e){e.flushed=!0,this.batches.delete(e);const t=e.swaps;e.swaps=[];for(const i of t)i()}flushStaleBatches(e){for(const t of this.batches)e-t.t0>AA&&this.flushBatch(t)}requestMesh(e,t,i,s=this.curBatch,r=!1){const a=Dt(e,t,i),o=this.chunks.get(a);if(o.inflight){o.dirty=!0,s&&!s.flushed&&!o.nextBatch&&(s.pending++,o.nextBatch=s);return}s&&!r&&s.pending++,o.inflight=!0,o.dirty=!1;const l=2,c=pe+1+2*l,h=this.field.extract(e*pe-l,t*pe-l,i*pe-l,c,c,c),f=o.wanted,d=o.wantedScatter,u=Tx(f,this.quality);this.pool.submit({cx:e,cy:t,cz:i,ox:h.ox,oy:h.oy,oz:h.oz,n:c,density:h.density,material:h.material,hard:h.hard,sub:h.sub,levels:f,scatter:d,morphAt:u},this.priority(e,t,i)).then(g=>{const v=()=>{o.inflight=!1,o.level=g.levels,o.scatter=d,o.version++,o.triangles=g.vertexCount/3,this.renderer.setChunk(e,t,i,{positions:g.positions,normals:g.normals,mats:g.mats,bary:g.bary,face:g.face,morph:g.morph,emitters:g.emitters,scatter:g.scatter,vertexCount:g.vertexCount});const m=o.nextBatch;o.nextBatch=null,(o.dirty||o.wanted!==o.level||o.wantedScatter!==o.scatter)&&this.requestMesh(e,t,i,m,m!==null)};if(!s||s.flushed){v();return}s.swaps.push(v),--s.pending<=0&&this.flushBatch(s)})}get pendingMeshes(){let e=0;for(const t of this.chunks.values())(t.inflight||t.level<0)&&e++;return e}applyEdit(e,t=!0){const i=e.op==="add"?Et[e.mat]?.spawn:void 0;if(i){if(!this.animalsOn){this.hud.say("animals are off");return}if(Mu(i)){const s=this.field.waterAt(e.x,e.y+.3,e.z)?e.y+.3:this.field.waterAt(e.x,e.y-.3,e.z)?e.y-.3:NaN;if(Number.isNaN(s)){this.hud.say("a fish needs water");return}this.animals.push(el(this.field,i,e.x,e.z,Math.floor(this.animalRng()*1e9),this.nextAnimalId++,s,this.input.yaw+Math.PI))}else this.animals.push(el(this.field,i,e.x,e.z,Math.floor(this.animalRng()*1e9),this.nextAnimalId++,void 0,this.input.yaw+Math.PI));this.animalsDirty=!0;return}if(this.undryNear(Gr(e,this.field)),vv(e)&&!this.opts.test){this.anims.push({e,t0:performance.now(),record:t}),this.stepEdit(e,ao(.001));return}if(e.op==="smooth"&&!this.opts.test){const s=t?this.preImages(e):[],r=Gr(e,this.field),a=this.copyDensity(r),o=Os(this.field,e),l=this.copyDensity(r);this.writeDensity(r,a,l,0),this.anims.push({e,t0:performance.now(),record:t,lerp:{b:o,pre:a,post:l,preImages:s}}),this.refresh(o);return}this.finishEdit(e,t)}preImages(e){const t=[];for(const[i,s,r]of xn(Gr(e,this.field),this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))t.push(no(this.field,i,s,r));return t}copyDensity(e){const t=this.field,i=new Float32Array((e.x1-e.x0+1)*(e.y1-e.y0+1)*(e.z1-e.z0+1));let s=0;for(let r=e.x0;r<=e.x1;r++)for(let a=e.y0;a<=e.y1;a++)for(let o=e.z0;o<=e.z1;o++)i[s++]=t.density[t.index(r,a,o)];return i}writeDensity(e,t,i,s){const r=this.field;let a=0;for(let o=e.x0;o<=e.x1;o++)for(let l=e.y0;l<=e.y1;l++)for(let c=e.z0;c<=e.z1;c++,a++)r.density[r.index(o,l,c)]=t[a]+(i[a]-t[a])*s}refresh(e,t=!1){const{removed:i,plan:s}=Bu(this.field,e,this.cfg.seaLevel);if(i){this.waterDirty=!0,e=si(e,i);const r=Math.max(.5,(i.x1-i.x0)*R*.5),a=Math.max(.5,(i.z1-i.z0)*R*.5);this.renderer.water.splash((i.x0+i.x1)*.5*R,(i.z0+i.z1)*.5*R,Math.hypot(r,a),-.02*Math.min(4,Math.hypot(r,a)))}if(s)if(s.cells.length<=6){const r=il(this.field,s,s.cells.length);r&&(this.waterDirty=!0,e=si(e,r))}else this.floods.push(s);return this.batched(()=>{for(const[r,a,o]of Ka(e,pe,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))if(this.requestMesh(r,a,o),this.lightDirty.add(Dt(r,a,o)),t)for(let l=a-1;l>=0;l--)this.lightDirty.add(Dt(r,l,o))}),e}stepEdit(e,t){this.refresh(Os(this.field,e,t))}finishEdit(e,t){const i=t?this.preImages(e):[],s=Os(this.field,e);this.commitEdit(e,t,i,s)}editLoose(e,t){const i=this.falling.find(r=>r.id===e);if(!i)return;if(t.op==="add"&&Hn(t.mat)){this.hud.say("blocks need solid ground");return}i.blend&&this.undry(i);const s=uA(i.frag,t);this.renderer.removeFragment(e),this.falling=this.falling.filter(r=>r.id!==e);for(const r of s)this.launch(r)}undry(e){const t=e.blend;if(!t)return;gA(this.field,t.box,t.pre),this.refresh(t.box,!1),e.blend=void 0,this.renderer.fadeFragment(e.id,1);const i=e.frag;i.settled=!1,i.rest=0,i.age=0}undryNear(e){for(const t of this.falling){if(!t.blend)continue;const i=t.blend.box;i.x0>e.x1+ss||i.x1<e.x0-ss||i.y0>e.y1+ss||i.y1<e.y0-ss||i.z0>e.z1+ss||i.z1<e.z0-ss||this.undry(t)}}launch(e){const t=this.nextFragId++;this.falling.push({frag:e,id:t}),this.pool.frag(e.nx,e.ny,e.nz,e.density.slice(),e.material.slice(),e.hard.slice(),e.sub.slice(),this.foliage).then(i=>{this.falling.some(s=>s.id===t)&&this.renderer.setFragment(t,i,e.com,e.pos,e.q,e.texOrigin)})}lastBodySave=0;bodiesSaved=!0;stepFalling(e){const t=this.falling.filter(r=>!r.cooking&&!r.blend);if(t.length&&(this.bodiesSaved=!1),!this.bodiesSaved&&this.lastNow-this.lastBodySave>2e3&&(this.lastBodySave=this.lastNow,t.length||(this.bodiesSaved=!0),$a(this.cfg.seed,t.map(r=>_h(r.frag)))),!this.falling.length)return;const i=[],s=this.lastNow;for(const r of this.falling){const a=r.frag;if(r.cooking){if(r.cooking.keys.every((f,d)=>{const u=this.chunks.get(f);return u.version>r.cooking.versions[d]&&!u.inflight})){this.renderer.removeFragment(r.id);continue}i.push(r);continue}if(r.blend){const h=Math.min(1,(s-r.blend.t0)/SA),f=h*h*(3-2*h);if(this.renderer.fadeFragment(r.id,h<.55?1:Math.max(.08,1-(h-.55)/.45)),h>=1){if(!r.blend.final){r.blend.final=!0,io(this.field,a,r.blend.box,r.blend.pre,0,0);const d=Sh(this.field,a),u=this.support.afterEdit(d);for(const m of u.fragments)this.launch(m);this.sandOn&&this.sand.wake(u.changed?si(d,u.changed):d);const g=this.refresh(u.changed?si(d,u.changed):d,!0),v=Ka(g,pe,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([m,p,S])=>Dt(m,p,S));r.cooking={keys:v,versions:v.map(m=>this.chunks.get(m).version)};for(const[m,p,S]of xn(g,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Dt(m,p,S));this.scheduleSave()}i.push(r);continue}if(s-r.blend.lastStep>_A){r.blend.lastStep=s;const d=wA*(1-f),u=EA*(1-f)+.02;io(this.field,a,r.blend.box,r.blend.pre,d,u),this.refresh(r.blend.box,!1)}i.push(r);continue}const o=a.pos[1]-a.radius>this.cfg.seaLevel,l=Math.max(1,Math.ceil(e/(1/120)));for(let h=0;h<l&&!a.settled;h++)fA(this.field,a,e/l,this.fallSpeed);if(o&&a.pos[1]-a.radius<=this.cfg.seaLevel&&this.field.waterAt(a.pos[0],this.cfg.seaLevel-R*.5,a.pos[2])&&this.renderer.water.splash(a.pos[0],a.pos[2],Math.max(.6,a.radius),-.05*Math.min(6,a.solid.length/12)),this.renderer.moveFragment(r.id,a.pos,a.q),!a.settled){i.push(r);continue}const c=pA(this.field,a);r.blend={box:c,pre:mA(this.field,c),t0:s,lastStep:-1e9,final:!1},i.push(r)}this.falling=i}commitEdit(e,t,i,s){if(s=this.refresh(s,!0),t){this.edits.push(e),this.undoStack.push(i),this.undoStack.length>24&&this.undoStack.shift();for(const[o,l,c]of xn(s,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Dt(o,l,c));this.scheduleSave()}const r=e.size*.5+R;Math.abs(e.y-this.cfg.seaLevel)<r+.5&&this.field.waterAt(e.x,this.cfg.seaLevel-R*.5,e.z)&&this.renderer.water.splash(e.x,e.z,r,-.05*Math.min(3,e.size));const a=this.support.afterEdit(s);if(a.held&&this.hud.say("too vast to fall: it stands"),this.sandOn&&(this.sand.wake(s),a.changed&&this.sand.wake(a.changed)),a.changed){this.refresh(a.changed,!0);for(const[o,l,c]of xn(a.changed,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Dt(o,l,c));this.scheduleSave()}for(const o of a.fragments)this.launch(o)}brushTarget(e){const t=this.hit;if(!t)return null;const i=this.effectiveSize(e)*.5,s=t.normal;let r;const o=e==="add"&&Hn(fn[this.brush.matIndex].id)||t.hard?.5:.6;if(e==="add")r=[t.point[0]+s[0]*i*o,t.point[1]+s[1]*i*o,t.point[2]+s[2]*i*o];else if(e==="sub"){const c=Math.min(i*.4,.06);r=[t.point[0]-s[0]*c,t.point[1]-s[1]*c,t.point[2]-s[2]*c]}else r=[t.point[0],t.point[1],t.point[2]];if(this.brush.snap&&(e!=="sub"||this.brush.shape!=="sphere")){const c=this.effectiveSize(e);r=[Math.floor(r[0]/c)*c+c/2,Math.floor(r[1]/c)*c+c/2,Math.floor(r[2]/c)*c+c/2]}return r}facingDir(){const e=-Math.sin(this.input.yaw),t=-Math.cos(this.input.yaw);let i=0,s=-1/0;for(let r=0;r<4;r++){const a=e*Qr[r][0]+t*Qr[r][2];a>s&&(s=a,i=r)}return i}effectiveSize(e){const t=fn[this.brush.matIndex].id;return e==="add"&&Hn(t)&&!ft(t)?.5:ti[this.brush.sizeIndex]}doEdit(e){if(e==="add"&&this.handEmpty)return;const t=this.brushTarget(e);if(!t)return;if(e==="add"&&fn[this.brush.matIndex].spawn&&this.hitBody!==null){this.hud.say("not on a falling thing");return}if(e!=="add"&&this.hit?.hard&&this.hitBody===null){const a=this.hit,o=[a.point[0]-a.normal[0]*.25,a.point[1]-a.normal[1]*.25,a.point[2]-a.normal[2]*.25];if(Gs(this.field,Math.floor(o[0]/R),Math.floor(o[1]/R),Math.floor(o[2]/R))){this.hud.say("the prime anchor holds the world");return}}const i=fn[this.brush.matIndex].id,s=e==="add"&&Hn(i)&&!ft(i),r={op:e,shape:s?"cube":this.brush.shape,size:this.effectiveSize(e),mat:i,x:t[0],y:t[1],z:t[2]};if((r.shape==="ramp"||r.shape==="wall"||r.shape==="roof")&&(r.dir=this.facingDir()),this.hitBody!==null){this.editLoose(this.hitBody,r);return}this.applyEdit(r)}lastNow=0;frame(e){this.lastNow=e;const t=this.lastFrame?(e-this.lastFrame)/1e3:1/60;this.lastFrame=e;const i=Math.min(t,.05),s=this.input,r=this.touch;s.hit("CapsLock")&&!this.opts.test&&!r.enabled&&!this.hud.overlayVisible&&(s.freeMouse=!s.freeMouse,s.freeMouse?(document.pointerLockElement&&document.exitPointerLock(),this.hud.say("free mouse · Caps Lock to look again")):(this.hud.say("mouse look"),s.requestLock()));const a=s.locked||s.freeMouse&&!this.hud.overlayVisible||this.opts.test||r.enabled&&!this.hud.overlayVisible;if(a){for(let L=0;L<xh.length&&L<fn.length;L++)s.hit(xh[L])&&this.selectSlot(L);s.hit("Escape")&&(this.touch.enabled||s.freeMouse)&&this.showMenu(),s.wheel!==0&&(this.brush.sizeIndex=Math.max(0,Math.min(ti.length-1,this.brush.sizeIndex-s.wheel))),s.hit("KeyQ")&&(this.brush.shape=Ch(this.brush.shape)),s.hit("Tab")&&(this.brush.op=ro[(ro.indexOf(this.brush.op)+1)%ro.length],this.hud.say(`tool: ${this.brush.op==="sub"?"remove":this.brush.op}`)),s.down("ArrowLeft")&&(s.yaw+=Th*i),s.down("ArrowRight")&&(s.yaw-=Th*i),s.down("ArrowUp")&&(s.pitch=Math.min(1.55,s.pitch+bh*i)),s.down("ArrowDown")&&(s.pitch=Math.max(-1.55,s.pitch-bh*i)),s.hit("KeyG")&&(this.brush.snap=!this.brush.snap,this.hud.say(this.brush.snap?"grid snap on":"grid snap off")),s.hit("KeyF")&&(this.body.fly=!this.body.fly,this.touch.setFly(this.body.fly),this.hud.say(this.body.fly?"flying":"walking")),s.hit("KeyP")&&(this.timePaused=!this.timePaused,this.hud.say(this.timePaused?"time paused":"time flowing")),s.hit("Comma")&&(this.time=(this.time-.5+24)%24),s.hit("Period")&&(this.time=(this.time+.5)%24),s.hit("KeyZ")&&this.edits.length&&this.undo()}r.enabled&&a&&(s.yaw-=r.lookDX*.005,s.pitch=Math.max(-1.55,Math.min(1.55,s.pitch-r.lookDY*.005)),r.tapped("tb-fly")&&(this.body.fly=!this.body.fly,r.setFly(this.body.fly),this.hud.say(this.body.fly?"flying":"walking")),r.tapped("tb-size-down")&&(this.brush.sizeIndex=Math.max(0,this.brush.sizeIndex-1)),r.tapped("tb-size-up")&&(this.brush.sizeIndex=Math.min(ti.length-1,this.brush.sizeIndex+1)),r.tapped("tb-shape")&&(this.brush.shape=Ch(this.brush.shape)),r.tapped("tb-snap")&&(this.brush.snap=!this.brush.snap,this.hud.say(this.brush.snap?"grid snap on":"grid snap off")),r.tapped("tb-undo")&&this.edits.length&&this.undo(),r.tapped("tb-menu")&&this.showMenu()),!this.timePaused&&!this.opts.test&&(this.time=(this.time+this.timeRate*i)%24),this.sun=Xc(this.time),this.renderer.setSun(this.sun);const o=s.yaw,l=-Math.sin(o),c=-Math.cos(o),h=Math.cos(o),f=-Math.sin(o);let d=0,u=0,g=0;a&&(s.down("KeyW")&&(d+=l,u+=c),s.down("KeyS")&&(d-=l,u-=c),s.down("KeyD")&&(d+=h,u+=f),s.down("KeyA")&&(d-=h,u-=f),r.enabled&&(d+=l*r.moveY+h*r.moveX,u+=c*r.moveY+f*r.moveX),(this.body.fly||this.body.swim)&&((s.down("Space")||r.jump)&&(g+=1),(s.down("ShiftLeft")||s.down("ShiftRight")||s.down("KeyC")||r.duck)&&(g-=1))),a&&!this.body.fly&&!this.body.swim?((s.hit("KeyC")||r.tapped("tb-duck"))&&(this.crouchLatch=!this.crouchLatch),(s.hit("Space")||r.tapped("tb-jump"))&&(this.crouchLatch=!1)):this.crouchLatch=!1,this.crouch=this.crouchLatch,this.body.crouch=this.crouch,r.setDuckLit(this.crouch);const v=Math.max(1,Math.hypot(d,u)),m=s.down("ShiftLeft")||s.down("ShiftRight"),p=this.body.swim,S=this.body.fly?m?40:18:p?m?4.2:2.6:this.crouch?1.8:m?8.5:5.2;Tl(this.field,this.body,{wishX:d/v*S,wishZ:u/v*S,wishY:g*(this.body.fly?m?28:16:p?3:0),jump:a&&!p&&(s.down("Space")||r.jump),dt:i});const x=this.renderer.camera;this.eye+=((this.crouch?Tv:li)-this.eye)*Math.min(1,i*14),this.slosh+=((this.body.swim?1:0)-this.slosh)*Math.min(1,i*2);const y=this.slosh*Math.sin(e*.0021)*.06,w=this.slosh*Math.sin(e*.0016+1.3)*.02;x.position.set(this.body.pos[0],this.body.pos[1]+this.eye+y,this.body.pos[2]),x.rotation.set(s.pitch,o,w,"YXZ");const _=this.field.waterAt(x.position.x,x.position.y,x.position.z);if(_!==this.renderer.underwater&&this.renderer.setUnderwater(_,this.sun),this.floods.length){const L=[];for(const B of this.floods){B.carry+=yy(B)*i;const N=Math.floor(B.carry);B.carry-=N;const Y=il(this.field,B,N);if(Y){this.waterDirty=!0;for(const[ee,le,we]of xn(Y,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Dt(ee,le,we))}B.done<B.cells.length?L.push(B):this.scheduleSave()}this.floods=L}this.waterDirty&&(e-this.lastWaterBuild>90||!this.floods.length)&&(this.waterDirty=!1,this.lastWaterBuild=e,this.renderer.water.rebuild(this.field));const T=[],b=this.body.pos,M=this.cfg.seaLevel;b[1]<M&&b[1]+li>M&&this.field.waterAt(b[0],M-R*.5,b[2])&&T.push([b[0],b[2],.42,Math.min(4,Math.hypot(this.body.vel[0],this.body.vel[1],this.body.vel[2]))]),this.stepFalling(i),this.stepAnimals(i),this.stepRegrowth(i),this.stepSand(i);for(const L of this.falling){const B=L.frag;B.pos[1]-B.radius<M&&B.pos[1]+B.radius>M&&this.field.waterAt(B.pos[0],M-R*.5,B.pos[2])&&T.push([B.pos[0],B.pos[2],Math.max(.4,B.radius*.8),Math.min(6,Math.hypot(B.vel[0],B.vel[1],B.vel[2])*1.5)])}this.renderer.water.setObstacles(T);const A=new k(0,0,-1).applyEuler(x.rotation);this.hit=Av(this.field,[x.position.x,x.position.y,x.position.z],[A.x,A.y,A.z],48),this.hitBody=null;for(const L of this.falling){if(L.cooking)continue;const B=this.hit?this.hit.distance:48,N=L.frag,Y=N.pos[0]-x.position.x,ee=N.pos[1]-x.position.y,le=N.pos[2]-x.position.z,we=Y*A.x+ee*A.y+le*A.z;if(we<-N.radius||we>B+N.radius)continue;const Be=Y-A.x*we,ze=ee-A.y*we,Pe=le-A.z*we;if(Be*Be+ze*ze+Pe*Pe>N.radius*N.radius)continue;const q=cA(N,[x.position.x,x.position.y,x.position.z],[A.x,A.y,A.z],B);q&&(!this.hit||q.distance<this.hit.distance)&&(this.hit=q,this.hitBody=L.id)}if(this.pickTarget=null,this.primeAim=!1,this.hit&&this.hit.hard&&this.hitBody===null&&Et[this.hit.material]?.emissive){const L=this.hit.point,B=this.hit.normal,N=[Math.floor((L[0]-B[0]*.02)/R),Math.floor((L[1]-B[1]*.02)/R),Math.floor((L[2]-B[2]*.02)/R)];Gs(this.field,N[0],N[1],N[2])?this.primeAim=!0:this.field.getHard(N[0],N[1],N[2])===this.hit.material&&(this.pickTarget={kind:"light",cell:N,mat:this.hit.material})}if(this.animalsOn){const L=this.hit?this.hit.distance:48;let B=1/0,N=-1;for(const Y of this.animals){const ee=sx(Y,[x.position.x,x.position.y,x.position.z],[A.x,A.y,A.z],L);ee!==null&&ee<B&&(B=ee,N=Y.id)}N>=0&&(this.pickTarget={kind:"animal",id:N},this.hitBody=null)}if(r.setDig(this.pickTarget?"remove":"dig"),this.pickTarget?.kind==="light"){const{c:L,size:B}=this.pickBox(this.pickTarget);this.renderer.setCursor(L[0],L[1],L[2],B*.5,[B*.5,B*.5,B*.5])}else if(this.pickTarget?.kind==="animal"){const L=this.animals.find(B=>B.id===this.pickTarget.id);L&&this.renderer.setCursor(L.body.pos[0],L.body.pos[1]+.45,L.body.pos[2],.55,[.6,.5,.6])}else if(this.hit){const L=s.mouseDown[0]||r.dig?"sub":r.heldOp??this.brush.op,B=this.effectiveSize(L)*.5,N=this.brushTarget(L),Y=this.brush.shape;if(Y==="sphere"&&B>=.3)this.renderer.setCursor(N[0],N[1],N[2],B,null);else if(Y==="slab")this.renderer.setCursor(N[0],N[1]-B+B/3,N[2],B,[B,B/3,B]);else if(Y==="wall"){const ee=Qr[this.facingDir()],le=Math.min(B*2/3,R)*.5;this.renderer.setCursor(N[0]-ee[0]*(B-le),N[1],N[2]-ee[2]*(B-le),B,[ee[0]!==0?le:B,B,ee[2]!==0?le:B])}else this.renderer.setCursor(N[0],N[1],N[2],B,[B,B,B])}else this.renderer.setCursor(0,0,0,0,null);if(a){const L=e-this.lastEdit>(this.brush.sizeIndex>=2?260:150);this.pickTarget&&(s.mouseClick[0]||s.hit("KeyM")||r.tapped("tb-dig"))?(this.pick(this.pickTarget),this.lastEdit=e):this.pickTarget&&(s.mouseDown[0]||s.down("KeyM")||r.dig)||(s.mouseClick[0]||s.hit("KeyM")||(s.mouseDown[0]||s.down("KeyM")||r.dig)&&L?(this.doEdit("sub"),this.lastEdit=e):s.mouseClick[2]||s.hit("KeyE")||(s.mouseDown[2]||s.down("KeyE"))&&L?(this.doEdit(this.brush.op),this.lastEdit=e):r.heldOp&&L&&(this.doEdit(r.heldOp),this.lastEdit=e))}if(this.anims.length){const L=[];for(const B of this.anims){const N=(e-B.t0)/this.editMs;if(B.lerp){const{b:Y,pre:ee,post:le,preImages:we}=B.lerp,Be=Gr(B.e,this.field);N>=1?(this.writeDensity(Be,ee,le,1),this.commitEdit(B.e,B.record,we,Y)):(this.writeDensity(Be,ee,le,ao(N)),this.refresh(Y),L.push(B))}else N>=1?this.finishEdit(B.e,B.record):(this.stepEdit(B.e,ao(N)),L.push(B))}this.anims=L}this.flushStaleBatches(e),this.lightStep(e),e-this.lastLod>400&&(this.updateLod(!1),this.lastLod=e),this.renderer.render(e/1e3),this.frames++,e-this.fpsT>500&&(this.fps=this.frames*1e3/(e-this.fpsT),this.frames=0,this.fpsT=e);const C=this.brush;this.hud.setStatus(r.enabled?`${this.handEmpty?"empty hand":fn[C.matIndex].name} · ${C.shape} ${ti[C.sizeIndex]<.5?"⅙":ti[C.sizeIndex]} m · ${C.snap?"snap":"free"} · ${this.body.fly?"fly":this.body.swim?"swim":this.crouch?"duck":"walk"}`:`${this.handEmpty?"empty hand":fn[C.matIndex].name} · ${C.shape} ${ti[C.sizeIndex]<.5?"⅙":ti[C.sizeIndex]} m · tool: ${C.op==="sub"?"remove":C.op} · ${C.snap?"snap":"free"} · ${this.body.fly?"fly":this.body.swim?"swim":this.crouch?"duck":"walk"}${this.input.freeMouse?" · free mouse":""}${this.pickTarget?` · LMB removes the ${this.pickTarget.kind==="animal"?this.animals.find(L=>L.id===this.pickTarget.id)?.kind??"animal":Et[this.pickTarget.mat]?.name}`:""}${this.primeAim?" · the prime anchor holds the world":""}`);const P=Math.floor(this.time),F=Math.floor((this.time-P)*60);this.hud.setClock(`${String(P).padStart(2,"0")}:${String(F).padStart(2,"0")}${this.timePaused?" ⏸":""}`,this.time);const z=this.hit,G=z?` · aim ${this.hitBody!==null?"body":z.hard?"block":"field"} ${Et[z.material]?.name??z.material} @${z.distance.toFixed(1)} m`:" · aim none";this.hud.setDebug(`${this.fps.toFixed(0)} fps · ${(this.renderer.triangles/1e3).toFixed(0)}k tris · ${this.renderer.chunkCount} chunks · ${this.renderer.flames.count} flames · ${(this.renderer.scatter.count/1e3).toFixed(1)}k scatter · mesh q ${this.pool.queued} · ${this.renderer.fallingCount} falling · ${this.animals.length} animals · ${this.body.pos.map(L=>L.toFixed(1)).join(", ")}${G}`),e-this.lastHash>1e3&&(this.lastHash=e,this.writeHash()),s.flush(),r.flush(),this.ready=!0}stateString(){const e=this.body.pos;return[e[0],e[1],e[2],this.input.yaw,this.input.pitch,this.time].map(t=>+t.toFixed(2)).join(",")}writeHash(){try{history.replaceState(null,"",location.pathname+location.search+"#v="+this.stateString())}catch{}}shareLink(){const e=new URLSearchParams(location.search);return e.set("seed",String(this.cfg.seed)),e.set("quality",this.quality),location.origin+location.pathname+"?"+e.toString()+"#v="+this.stateString()}scheduleSave(){clearTimeout(this.saveTimer),this.saveTimer=window.setTimeout(()=>void this.saveDirty(),600)}saveFailed=!1;async saveDirty(){if(!this.dirtySlabs.size)return;const e=[];for(const i of this.dirtySlabs){const[s,r,a]=Fs(i);e.push(no(this.field,s,r,a))}this.dirtySlabs.clear();const t=await sh(this.cfg.seed,e);!t&&!this.saveFailed&&(this.saveFailed=!0,this.hud.say("save failed — this browser refused to store the world (full? private?)",6e3)),t&&(this.saveFailed=!1)}flushNow(){clearTimeout(this.saveTimer);for(const t of this.falling)if(t.blend&&!t.blend.final){t.blend.final=!0,io(this.field,t.frag,t.blend.box,t.blend.pre,0,0);const i=Sh(this.field,t.frag);for(const[s,r,a]of xn(i,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Dt(s,r,a));t.cooking={keys:[],versions:[]}}const e=this.falling.filter(t=>!t.cooking&&!t.blend).map(t=>_h(t.frag));$a(this.cfg.seed,e),ih(this.cfg.seed,this.animals.map($c)),this.saveDirty()}settleLoose(){const e=this.support.dropLoose();for(const t of e.fragments)this.launch(t);if(e.changed){for(const[t,i,s]of xn(e.changed,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Dt(t,i,s));this.scheduleSave()}e.fragments.length&&this.hud.say(`${e.fragments.length} loose thing${e.fragments.length===1?"":"s"} had no anchor and fell`),e.held&&this.hud.say(`${e.held} thing${e.held===1?"":"s"} too vast to fall stand${e.held===1?"s":""} without an anchor`)}resumeBodies(){const e=this.world?.bodies;if(e?.length){for(const t of e)try{this.launch(MA(t))}catch{}this.world.bodies=[],$a(this.cfg.seed,[])}}undo(){const e=this.undoStack.pop();if(!e){this.hud.say("nothing to undo");return}for(const t of this.falling)t.blend&&this.undry(t);this.edits.pop();for(const t of e){yh(this.field,t),this.support.afterEdit({x0:t.cx*pe,y0:t.cy*pe,z0:t.cz*pe,x1:t.cx*pe+pe,y1:t.cy*pe+pe,z1:t.cz*pe+pe}),this.sandOn&&this.sand.wake({x0:t.cx*pe,y0:t.cy*pe,z0:t.cz*pe,x1:t.cx*pe+pe,y1:t.cy*pe+pe,z1:t.cz*pe+pe});const i=Dt(t.cx,t.cy,t.cz);this.dirtySlabs.add(i);for(const[s,r,a]of Ka({x0:t.cx*pe,y0:t.cy*pe,z0:t.cz*pe,x1:t.cx*pe+pe,y1:t.cy*pe+pe,z1:t.cz*pe+pe},pe,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.requestMesh(s,r,a),this.lightDirty.add(Dt(s,r,a))}this.waterDirty=!0,this.scheduleSave(),this.hud.say("undo")}setView(e,t,i,s,r){this.body.pos[0]=e,this.body.pos[1]=t-li,this.body.pos[2]=i,this.body.vel[0]=this.body.vel[1]=this.body.vel[2]=0,this.body.fly=!0,this.input.yaw=s,this.input.pitch=r,this.lastLod=0}setTime(e){this.time=e}}const Eh=140,ro=["add","sub","smooth","paint"],Th=2.4,bh=1.7,SA=2600,ss=6,_A=160,wA=.45,EA=.4;function ao(n){const e=1-Math.min(1,Math.max(0,n));return 1-e*e*e}function Ch(n){return n==="cube"?"slab":n==="slab"?"wall":n==="wall"?"roof":n==="roof"?"ramp":n==="ramp"?"sphere":"cube"}function Fs(n){const e=n%1024,t=Math.floor(n/1024)%1024;return[Math.floor(n/1048576),t,e]}function ii(){return new Promise(n=>requestAnimationFrame(()=>n()))}function Gr(n,e){const t=n.size*.5+2;return{x0:Math.max(0,Math.floor((n.x-t)/R)),y0:Math.max(0,Math.floor((n.y-t)/R)),z0:Math.max(0,Math.floor((n.z-t)/R)),x1:Math.min(e.nx-1,Math.ceil((n.x+t)/R)),y1:Math.min(e.ny-1,Math.ceil((n.y+t)/R)),z1:Math.min(e.nz-1,Math.ceil((n.z+t)/R))}}function si(n,e){return{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}}function TA(n){const e=/#v=([-\d.,]+)/.exec(n);if(!e)return;const t=e[1].split(",").map(Number);return t.length>=5&&t.every(i=>Number.isFinite(i))?t:void 0}async function bA(){const n=new URLSearchParams(location.search),e=Fu(),t=n.get("test")==="1";n.get("debug")==="1"&&document.body.classList.add("debug");const i=n.get("seed")??n.get("world"),s=i!==null?Nu(i):e.seed??1337,r=n.get("quality")||e.quality||"medium",a={seed:s,quality:r,test:t,chunks:(await xx(s))?.chunks??(n.get("chunks")?Math.max(2,Math.min(24,Number(n.get("chunks")))):void 0),time:n.get("time")?Number(n.get("time")):void 0,cheapGi:n.get("gi")==="cheap"?!0:n.get("gi")==="full"?!1:void 0,giMode:n.get("gi")==="cone"?"cone":n.get("gi")==="sh"?"sh":void 0,post:n.has("post")?Math.max(0,Math.min(2,Number(n.get("post")))):void 0,volumetric:n.get("vol")==="0"?!1:void 0,caustic:n.get("caustic")==="0"?!1:void 0,iceDebug:n.has("icedebug")?Number(n.get("icedebug")):void 0,shader:["full","lite","basic"].find(f=>f===n.get("shader")),giDiv:n.has("gidiv")?Math.max(1,Math.min(4,Number(n.get("gidiv")))):void 0,view:TA(location.hash),foliage:n.has("foliage")?Math.max(0,Math.min(8,Number(n.get("foliage")))):e.foliage,fall:n.has("fall")?Math.max(1,Math.min(60,Number(n.get("fall")))):e.fall,animals:n.has("animals")?n.get("animals")!=="0":e.animals,sand:n.has("sand")?n.get("sand")!=="0":e.sand,edit:n.has("edit")?Math.max(60,Math.min(2e3,Number(n.get("edit")))):e.edit};Gn({seed:s,quality:r});const o=document.getElementById("view"),l=new Jy;window.addEventListener("error",f=>l.showError("error: "+(f.message??"").slice(0,160)));const c=await Ll.create(o,a,l);l.hideLoading(),t||c.showMenu(),window.__splinecraft={game:c,ready:()=>c.ready&&c.pendingMeshes===0,setView:c.setView.bind(c),setTime:c.setTime.bind(c),edit:c.applyEdit.bind(c),ground:(f,d)=>Ms(c.field,f,d),state:()=>c.stateString()};const h=f=>{c.frame(f),requestAnimationFrame(h)};requestAnimationFrame(h)}bA().catch(n=>{console.error(n);const e=document.getElementById("loading-text");e&&(e.textContent="failed to start: "+(n instanceof Error?n.message:String(n)))});
