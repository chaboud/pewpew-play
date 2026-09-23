(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qi="180",Gf=0,wc=1,Vf=2,Tu=1,Cu=2,jn=3,kn=0,Ut=1,Qt=2,Ft=0,xi=1,ma=2,Sc=3,Ac=4,Wf=5,Fi=100,Xf=101,Yf=102,qf=103,Qf=104,Kf=200,Zf=201,jf=202,Jf=203,Lo=204,Bo=205,$f=206,ed=207,td=208,nd=209,id=210,sd=211,rd=212,ad=213,od=214,Uo=0,ga=1,zo=2,As=3,Fo=4,No=5,Oo=6,ko=7,Du=0,ld=1,cd=2,ei=0,hd=1,ud=2,fd=3,dd=4,pd=5,md=6,gd=7,Ru=300,_s=301,Es=302,Ho=303,Go=304,Da=306,lr=1e3,Un=1001,Vo=1002,_t=1003,vd=1004,xr=1005,ut=1006,Na=1007,zn=1008,Et=1009,Iu=1010,Pu=1011,cr=1012,Bl=1013,Hi=1014,on=1015,Rn=1016,Ul=1017,zl=1018,bs=1020,Lu=35902,Bu=35899,Uu=1021,zu=1022,Vt=1023,hr=1026,Ts=1027,yi=1028,Fl=1029,Nl=1030,Ol=1031,kl=1033,oa=33776,la=33777,ca=33778,ha=33779,Wo=35840,Xo=35841,Yo=35842,qo=35843,Qo=36196,Ko=37492,Zo=37496,jo=37808,Jo=37809,$o=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,ul=36492,fl=36494,dl=36495,pl=36283,ml=36284,gl=36285,vl=36286,In=3200,Fu=3201,Hl=0,xd=1,mn="",dt="srgb",wi="srgb-linear",va="linear",Mt="srgb",Ji=7680,_c=519,Md=512,yd=513,wd=514,Nu=515,Sd=516,Ad=517,_d=518,Ed=519,Ec=35044,xa="300 es",Fn=2e3,Ma=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oa=Math.PI/180,xl=180/Math.PI;function pr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function bd(n,e){return(n%e+e)%e}function ka(n,e,t){return(1-t)*n+t*e}function Fs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[a+0],p=r[a+1],m=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==f||c!==p||h!==m){let g=1-o;const d=l*f+c*p+h*m+u*v,x=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const w=Math.sqrt(M),E=Math.atan2(w,d*x);g=Math.sin(g*E)/w,o=Math.sin(o*E)/w}const y=o*x;if(l=l*g+f*y,c=c*g+p*y,h=h*g+m*y,u=u*g+v*y,g===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*p-c*f,e[t+1]=l*m+h*f+c*u-o*p,e[t+2]=c*m+h*p+o*f-l*u,e[t+3]=h*m-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"YXZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"ZXY":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"ZYX":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"YZX":this._x=f*h*u+c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u-f*p*m;break;case"XZY":this._x=f*h*u-c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new W,bc=new Gi;class Ke{constructor(e,t,i,s,r,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],m=i[8],v=s[0],g=s[3],d=s[6],x=s[1],M=s[4],y=s[7],w=s[2],E=s[5],b=s[8];return r[0]=a*v+o*x+l*w,r[3]=a*g+o*M+l*E,r[6]=a*d+o*y+l*b,r[1]=c*v+h*x+u*w,r[4]=c*g+h*M+u*E,r[7]=c*d+h*y+u*b,r[2]=f*v+p*x+m*w,r[5]=f*g+p*M+m*E,r[8]=f*d+p*y+m*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,m=t*u+i*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ga=new Ke;function Ou(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Td(){const n=ya("canvas");return n.style.display="block",n}const Tc={};function ur(n){n in Tc||(Tc[n]=!0,console.warn(n))}function Cd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Cc=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dd(){const n={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mn?va:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wi]:{primaries:e,whitePoint:i,transfer:va,toXYZ:Cc,fromXYZ:Dc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:Cc,fromXYZ:Dc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),n}const lt=Dd();function ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $i;class Rd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$i===void 0&&($i=ya("canvas")),$i.width=e.width,$i.height=e.height;const s=$i.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=$i}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ya("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ti(t[i]/255)*255):t[i]=ti(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Id=0;class Gl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=pr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Va(s[a].image)):r.push(Va(s[a]))}else r=Va(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pd=0;const Wa=new W;class Nt extends ni{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=Un,s=Un,r=ut,a=zn,o=Vt,l=Et,c=Nt.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=pr(),this.name="",this.source=new Gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lr:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lr:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Ru;Nt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,s=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],m=l[9],v=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(p+1)/2,w=(d+1)/2,E=(h+f)/4,b=(u+v)/4,T=(m+g)/4;return M>y&&M>w?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=b/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=T/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=b/r,s=T/r),this.set(i,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ld extends ni{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Nt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vt extends Ld{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vl extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wa extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bd extends vt{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new wa(null,e,t,i),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class Qi{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mr.copy(i.boundingBox)),Mr.applyMatrix4(e.matrixWorld),this.union(Mr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),yr.subVectors(this.max,Ns),es.subVectors(e.a,Ns),ts.subVectors(e.b,Ns),ns.subVectors(e.c,Ns),si.subVectors(ts,es),ri.subVectors(ns,ts),Ei.subVectors(es,ns);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ei.z,Ei.y,si.z,0,-si.x,ri.z,0,-ri.x,Ei.z,0,-Ei.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ei.y,Ei.x,0];return!Xa(t,es,ts,ns,yr)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,es,ts,ns,yr))?!1:(wr.crossVectors(si,ri),t=[wr.x,wr.y,wr.z],Xa(t,es,ts,ns,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new W,new W,new W,new W,new W,new W,new W,new W],En=new W,Mr=new Qi,es=new W,ts=new W,ns=new W,si=new W,ri=new W,Ei=new W,Ns=new W,yr=new W,wr=new W,bi=new W;function Xa(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){bi.fromArray(n,r);const o=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),h=i.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ud=new Qi,Os=new W,Ya=new W;class Ai{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ud.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Os,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Ya)),this.expandByPoint(Os.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new W,qa=new W,Sr=new W,ai=new W,Qa=new W,Ar=new W,Ka=new W;class ku{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qa.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(qa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Sr),o=ai.dot(this.direction),l=-ai.dot(Sr),c=ai.lengthSq(),h=Math.abs(1-a*a);let u,f,p,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){const v=1/h;u*=v,f*=v,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qa).addScaledVector(Sr,f),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,r){Qa.subVectors(t,e),Ar.subVectors(i,e),Ka.crossVectors(Qa,Ar);let a=this.direction.dot(Ka),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,e);const l=o*this.direction.dot(Ar.crossVectors(ai,Ar));if(l<0)return null;const c=o*this.direction.dot(Qa.cross(ai));if(c<0||l+c>a)return null;const h=-o*ai.dot(Ka);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,i,s,r,a,o,l,c,h,u,f,p,m,v,g){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,p,m,v,g)}set(e,t,i,s,r,a,o,l,c,h,u,f,p,m,v,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=m,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,p=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,m=c*h,v=c*u;t[0]=f+v*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,m=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zd,e,Fd)}lookAt(e,t,i){const s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),oi.crossVectors(i,un),oi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),oi.crossVectors(i,un)),oi.normalize(),_r.crossVectors(un,oi),s[0]=oi.x,s[4]=_r.x,s[8]=un.x,s[1]=oi.y,s[5]=_r.y,s[9]=un.y,s[2]=oi.z,s[6]=_r.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],m=i[2],v=i[6],g=i[10],d=i[14],x=i[3],M=i[7],y=i[11],w=i[15],E=s[0],b=s[4],T=s[8],S=s[12],A=s[1],_=s[5],R=s[9],P=s[13],z=s[2],O=s[6],L=s[10],U=s[14],B=s[3],k=s[7],X=s[11],K=s[15];return r[0]=a*E+o*A+l*z+c*B,r[4]=a*b+o*_+l*O+c*k,r[8]=a*T+o*R+l*L+c*X,r[12]=a*S+o*P+l*U+c*K,r[1]=h*E+u*A+f*z+p*B,r[5]=h*b+u*_+f*O+p*k,r[9]=h*T+u*R+f*L+p*X,r[13]=h*S+u*P+f*U+p*K,r[2]=m*E+v*A+g*z+d*B,r[6]=m*b+v*_+g*O+d*k,r[10]=m*T+v*R+g*L+d*X,r[14]=m*S+v*P+g*U+d*K,r[3]=x*E+M*A+y*z+w*B,r[7]=x*b+M*_+y*O+w*k,r[11]=x*T+M*R+y*L+w*X,r[15]=x*S+M*P+y*U+w*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],m=e[3],v=e[7],g=e[11],d=e[15];return m*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*p-i*l*p)+v*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+g*(+t*c*u-t*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+d*(-s*o*h-t*l*u+t*o*f+s*a*u-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],m=e[12],v=e[13],g=e[14],d=e[15],x=u*g*c-v*f*c+v*l*p-o*g*p-u*l*d+o*f*d,M=m*f*c-h*g*c-m*l*p+a*g*p+h*l*d-a*f*d,y=h*v*c-m*u*c+m*o*p-a*v*p-h*o*d+a*u*d,w=m*u*l-h*v*l-m*o*f+a*v*f+h*o*g-a*u*g,E=t*x+i*M+s*y+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=x*b,e[1]=(v*f*r-u*g*r-v*s*p+i*g*p+u*s*d-i*f*d)*b,e[2]=(o*g*r-v*l*r+v*s*c-i*g*c-o*s*d+i*l*d)*b,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*p-i*l*p)*b,e[4]=M*b,e[5]=(h*g*r-m*f*r+m*s*p-t*g*p-h*s*d+t*f*d)*b,e[6]=(m*l*r-a*g*r-m*s*c+t*g*c+a*s*d-t*l*d)*b,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*p+t*l*p)*b,e[8]=y*b,e[9]=(m*u*r-h*v*r-m*i*p+t*v*p+h*i*d-t*u*d)*b,e[10]=(a*v*r-m*o*r+m*i*c-t*v*c-a*i*d+t*o*d)*b,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*p-t*o*p)*b,e[12]=w*b,e[13]=(h*v*s-m*u*s+m*i*f-t*v*f-h*i*g+t*u*g)*b,e[14]=(m*o*s-a*v*s-m*i*l+t*v*l+a*i*g-t*o*g)*b,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*f+t*o*f)*b,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,m=r*u,v=a*h,g=a*u,d=o*u,x=l*c,M=l*h,y=l*u,w=i.x,E=i.y,b=i.z;return s[0]=(1-(v+d))*w,s[1]=(p+y)*w,s[2]=(m-M)*w,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(f+d))*E,s[6]=(g+x)*E,s[7]=0,s[8]=(m+M)*b,s[9]=(g-x)*b,s[10]=(1-(f+v))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const a=is.set(s[4],s[5],s[6]).length(),o=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bn.copy(this);const c=1/r,h=1/a,u=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,t.setFromRotationMatrix(bn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Fn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===Fn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ma)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Fn,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===Fn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ma)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const is=new W,bn=new tt,zd=new W(0,0,0),Fd=new W(1,1,1),oi=new W,_r=new W,un=new W,Rc=new tt,Ic=new Gi;class Hn{constructor(e=0,t=0,i=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nd=0;const Pc=new W,ss=new Gi,qn=new tt,Er=new W,ks=new W,Od=new W,kd=new Gi,Lc=new W(1,0,0),Bc=new W(0,1,0),Uc=new W(0,0,1),zc={type:"added"},Hd={type:"removed"},rs={type:"childadded",child:null},Za={type:"childremoved",child:null};class Wt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new W,t=new Hn,i=new Gi,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ke}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Pc.copy(e).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Er.copy(e):Er.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(ks,Er,this.up):qn.lookAt(Er,ks,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(qn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hd),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,Od),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wt.DEFAULT_UP=new W(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new W,Qn=new W,ja=new W,Kn=new W,as=new W,os=new W,Fc=new W,Ja=new W,$a=new W,eo=new W,to=new wt,no=new wt,io=new wt;class Dn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Tn.subVectors(e,t),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Tn.subVectors(s,t),Qn.subVectors(i,t),ja.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(Qn),l=Tn.dot(ja),c=Qn.dot(Qn),h=Qn.dot(ja),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return to.setScalar(0),no.setScalar(0),io.setScalar(0),to.fromBufferAttribute(e,t),no.fromBufferAttribute(e,i),io.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(to,r.x),a.addScaledVector(no,r.y),a.addScaledVector(io,r.z),a}static isFrontFacing(e,t,i,s){return Tn.subVectors(i,t),Qn.subVectors(e,t),Tn.cross(Qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Tn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;as.subVectors(s,i),os.subVectors(r,i),Ja.subVectors(e,i);const l=as.dot(Ja),c=os.dot(Ja);if(l<=0&&c<=0)return t.copy(i);$a.subVectors(e,s);const h=as.dot($a),u=os.dot($a);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(as,a);eo.subVectors(e,r);const p=as.dot(eo),m=os.dot(eo);if(m>=0&&p<=m)return t.copy(r);const v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(os,o);const g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Fc.subVectors(r,s),o=(u-h)/(u-h+(p-m)),t.copy(s).addScaledVector(Fc,o);const d=1/(g+v+f);return a=v*d,o=f*d,t.copy(i).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},br={h:0,s:0,l:0};function so(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=bd(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=so(a,r,e+1/3),this.g=so(a,r,e),this.b=so(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=dt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const i=Gu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return lt.workingToColorSpace(Zt.copy(this),e),Math.round(nt(Zt.r*255,0,255))*65536+Math.round(nt(Zt.g*255,0,255))*256+Math.round(nt(Zt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Zt.copy(this),t);const i=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=dt){lt.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,s=Zt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(br);const i=ka(li.h,br.h,t),s=ka(li.s,br.s,t),r=ka(li.l,br.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ze;Ze.NAMES=Gu;let Gd=0;class ii extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=xi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Bo,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(i.blending=this.blending),this.side!==kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lo&&(i.blendSrc=this.blendSrc),this.blendDst!==Bo&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vu extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new W,Tr=new Pe;let Vd=0;class Oe{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ec,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ec&&(e.usage=this.usage),e}}class Wu extends Oe{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xu extends Oe{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends Oe{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wd=0;const yn=new tt,ro=new Wt,ls=new W,fn=new Qi,Hs=new Qi,Ht=new W;class Xt extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?Xu:Wu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(fn.min,Hs.min),fn.expandByPoint(Ht),Ht.addVectors(fn.max,Hs.max),fn.expandByPoint(Ht)):(fn.expandByPoint(Hs.min),fn.expandByPoint(Hs.max))}fn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(e,c),Ht.add(ls)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<i.count;T++)o[T]=new W,l[T]=new W;const c=new W,h=new W,u=new W,f=new Pe,p=new Pe,m=new Pe,v=new W,g=new W;function d(T,S,A){c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,A),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,S),m.fromBufferAttribute(r,A),h.sub(c),u.sub(c),p.sub(f),m.sub(f);const _=1/(p.x*m.y-m.x*p.y);isFinite(_)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(_),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(_),o[T].add(v),o[S].add(v),o[A].add(v),l[T].add(g),l[S].add(g),l[A].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let T=0,S=x.length;T<S;++T){const A=x[T],_=A.start,R=A.count;for(let P=_,z=_+R;P<z;P+=3)d(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const M=new W,y=new W,w=new W,E=new W;function b(T){w.fromBufferAttribute(s,T),E.copy(w);const S=o[T];M.copy(S),M.sub(w.multiplyScalar(w.dot(S))).normalize(),y.crossVectors(E,S);const _=y.dot(l[T])<0?-1:1;a.setXYZW(T,M.x,M.y,M.z,_)}for(let T=0,S=x.length;T<S;++T){const A=x[T],_=A.start,R=A.count;for(let P=_,z=_+R;P<z;P+=3)b(e.getX(P+0)),b(e.getX(P+1)),b(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Oe(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,h=new W,u=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let d=0;d<h;d++)f[m++]=c[p++]}return new Oe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new tt,Ti=new ku,Cr=new Ai,Oc=new W,Dr=new W,Rr=new W,Ir=new W,ao=new W,Pr=new W,kc=new W,Lr=new W;class St extends Wt{constructor(e=new Xt,t=new Vu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ao.fromBufferAttribute(u,e),a?Pr.addScaledVector(ao,h):Pr.addScaledVector(ao.sub(t),h))}t.add(Pr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(Cr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Cr,Oc)===null||Ti.origin.distanceToSquared(Oc)>(e.far-e.near)**2))&&(Nc.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(Nc),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],d=a[g.materialIndex],x=Math.max(g.start,p.start),M=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,w=M;y<w;y+=3){const E=o.getX(y),b=o.getX(y+1),T=o.getX(y+2);s=Br(this,d,e,i,c,h,u,E,b,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=m,d=v;g<d;g+=3){const x=o.getX(g),M=o.getX(g+1),y=o.getX(g+2);s=Br(this,a,e,i,c,h,u,x,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],d=a[g.materialIndex],x=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,w=M;y<w;y+=3){const E=y,b=y+1,T=y+2;s=Br(this,d,e,i,c,h,u,E,b,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=m,d=v;g<d;g+=3){const x=g,M=g+1,y=g+2;s=Br(this,a,e,i,c,h,u,x,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Xd(n,e,t,i,s,r,a,o){let l;if(e.side===Ut?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===kn,o),l===null)return null;Lr.copy(o),Lr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Lr);return c<t.near||c>t.far?null:{distance:c,point:Lr.clone(),object:n}}function Br(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Dr),n.getVertexPosition(l,Rr),n.getVertexPosition(c,Ir);const h=Xd(n,e,t,i,Dr,Rr,Ir,kc);if(h){const u=new W;Dn.getBarycoord(kc,Dr,Rr,Ir,u),s&&(h.uv=Dn.getInterpolatedAttribute(s,o,l,c,u,new Pe)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,o,l,c,u,new Pe)),a&&(h.normal=Dn.getInterpolatedAttribute(a,o,l,c,u,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};Dn.getNormal(Dr,Rr,Ir,f.normal),h.face=f,h.barycoord=u}return h}class Vi extends Xt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(h,3)),this.setAttribute("uv",new Nn(u,2));function m(v,g,d,x,M,y,w,E,b,T,S){const A=y/b,_=w/T,R=y/2,P=w/2,z=E/2,O=b+1,L=T+1;let U=0,B=0;const k=new W;for(let X=0;X<L;X++){const K=X*_-P;for(let oe=0;oe<O;oe++){const we=oe*A-R;k[v]=we*x,k[g]=K*M,k[d]=z,c.push(k.x,k.y,k.z),k[v]=0,k[g]=0,k[d]=E>0?1:-1,h.push(k.x,k.y,k.z),u.push(oe/b),u.push(1-X/T),U+=1}}for(let X=0;X<T;X++)for(let K=0;K<b;K++){const oe=f+K+O*X,we=f+K+O*(X+1),be=f+(K+1)+O*(X+1),Se=f+(K+1)+O*X;l.push(oe,we,Se),l.push(we,be,Se),B+=6}o.addGroup(p,B,S),p+=B,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function en(n){const e={};for(let t=0;t<n.length;t++){const i=Cs(n[t]);for(const s in i)e[s]=i[s]}return e}function Yd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const qd={clone:Cs,merge:en};var Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ft extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qu extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new W,Hc=new Pe,Gc=new Pe;class tn extends qu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Hc,Gc),t.subVectors(Gc,Hc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,hs=1;class Zd extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(cs,hs,e,t);s.layers=this.layers,this.add(s);const r=new tn(cs,hs,e,t);r.layers=this.layers,this.add(r);const a=new tn(cs,hs,e,t);a.layers=this.layers,this.add(a);const o=new tn(cs,hs,e,t);o.layers=this.layers,this.add(o);const l=new tn(cs,hs,e,t);l.layers=this.layers,this.add(l);const c=new tn(cs,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Qu extends Nt{constructor(e=[],t=_s,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jd extends vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Qu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vi(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:Ft});r.uniforms.tEquirect.value=t;const a=new St(s,r),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=ut),new Zd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class gi extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jd={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),d=this._getHandJoint(c,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Wl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ze(e),this.density=t}clone(){return new Wl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wi extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sa extends Nt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=_t,h=_t,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi extends Oe{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new tt,Vc=new tt,Ur=[],Wc=new Qi,$d=new tt,Gs=new St,Vs=new Ai;class ep extends St{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,$d)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,us),Wc.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(Wc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,us),Vs.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(i),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),Vc.multiplyMatrices(i,us),Gs.matrixWorld=Vc,Gs.raycast(e,Ur);for(let a=0,o=Ur.length;a<o;a++){const l=Ur[a];l.instanceId=r,l.object=this,t.push(l)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sa(new Float32Array(s*this.count),s,this.count,yi,on));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lo=new W,tp=new W,np=new Ke;class mi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=lo.subVectors(i,t).cross(tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(lo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||np.getNormalMatrix(e),s=this.coplanarPoint(lo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Ai,ip=new Pe(.5,.5),zr=new W;class mr{constructor(e=new mi,t=new mi,i=new mi,s=new mi,r=new mi,a=new mi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],m=r[8],v=r[9],g=r[10],d=r[11],x=r[12],M=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,p-h,d-m,w-x).normalize(),s[1].setComponents(c+a,p+h,d+m,w+x).normalize(),s[2].setComponents(c+o,p+u,d+v,w+M).normalize(),s[3].setComponents(c-o,p-u,d-v,w-M).normalize(),i)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(c-l,p-f,d-g,w-y).normalize();else if(s[4].setComponents(c-l,p-f,d-g,w-y).normalize(),t===Fn)s[5].setComponents(c+l,p+f,d+g,w+y).normalize();else if(t===Ma)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);const t=ip.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(zr.x=s.normal.x>0?e.max.x:e.min.x,zr.y=s.normal.y>0?e.max.y:e.min.y,zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sp extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xc=new tt,Ml=new ku,Fr=new Ai,Nr=new W;class Xl extends Wt{constructor(e=new Xt,t=new sp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=r,e.ray.intersectsSphere(Fr)===!1)return;Xc.copy(s).invert(),Ml.copy(e.ray).applyMatrix4(Xc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=f,v=p;m<v;m++){const g=c.getX(m);Nr.fromBufferAttribute(u,g),Yc(Nr,g,l,s,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=f,v=p;m<v;m++)Nr.fromBufferAttribute(u,m),Yc(Nr,m,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Yc(n,e,t,i,s,r,a){const o=Ml.distanceSqToPoint(n);if(o<t){const l=new W;Ml.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ra extends Nt{constructor(e,t,i=Hi,s,r,a,o=_t,l=_t,c,h=hr,u=1){if(h!==hr&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ku extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gn extends Xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],m=[],v=[],g=[];for(let d=0;d<h;d++){const x=d*f-a;for(let M=0;M<c;M++){const y=M*u-r;m.push(y,-x,0),v.push(0,0,1),g.push(M/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const M=x+c*d,y=x+c*(d+1),w=x+1+c*(d+1),E=x+1+c*d;p.push(M,y,E),p.push(y,w,E)}this.setIndex(p),this.setAttribute("position",new Nn(m,3)),this.setAttribute("normal",new Nn(v,3)),this.setAttribute("uv",new Nn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yl extends Xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new W,f=new W,p=[],m=[],v=[],g=[];for(let d=0;d<=i;d++){const x=[],M=d/i;let y=0;d===0&&a===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const E=w/t;u.x=-e*Math.cos(s+E*r)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(s+E*r)*Math.sin(a+M*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(E+y,1-M),x.push(c++)}h.push(x)}for(let d=0;d<i;d++)for(let x=0;x<t;x++){const M=h[d][x+1],y=h[d][x],w=h[d+1][x],E=h[d+1][x+1];(d!==0||a>0)&&p.push(M,y,E),(d!==i-1||l<Math.PI)&&p.push(y,w,E)}this.setIndex(p),this.setAttribute("position",new Nn(m,3)),this.setAttribute("normal",new Nn(v,3)),this.setAttribute("uv",new Nn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qc extends ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Aa extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rp extends ii{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Zu extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=In,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ap extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class op{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}class ju extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const co=new tt,Qc=new W,Kc=new W;class lp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Et,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qc),Kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kc),t.updateMatrixWorld(),co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ls extends qu{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cp extends lp{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hp extends ju{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new cp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class up extends ju{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fp extends Xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class dp extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _e{constructor(e){this.value=e}clone(){return new _e(this.value.clone===void 0?this.value:this.value.clone())}}function Zc(n,e,t,i){const s=pp(i);switch(t){case Uu:return n*e;case yi:return n*e/s.components*s.byteLength;case Fl:return n*e/s.components*s.byteLength;case Nl:return n*e*2/s.components*s.byteLength;case Ol:return n*e*2/s.components*s.byteLength;case zu:return n*e*3/s.components*s.byteLength;case Vt:return n*e*4/s.components*s.byteLength;case kl:return n*e*4/s.components*s.byteLength;case oa:case la:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ca:case ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xo:case qo:return Math.max(n,16)*Math.max(e,8)/4;case Wo:case Yo:return Math.max(n,8)*Math.max(e,8)/2;case Qo:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $o:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ul:case fl:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pl:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gl:case vl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pp(n){switch(n){case Et:case Iu:return{byteLength:1,components:1};case cr:case Pu:case Rn:return{byteLength:2,components:1};case Ul:case zl:return{byteLength:2,components:4};case Hi:case Bl:case on:return{byteLength:4,components:1};case Lu:case Bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qi);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ju(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function mp(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){const m=u[f],v=u[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){const v=u[p];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
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
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sp=`#ifdef USE_AOMAP
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
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
#endif`,Ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dp=`#ifdef USE_IRIDESCENCE
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
#endif`,Rp=`#ifdef USE_BUMPMAP
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Op=`#define PI 3.141592653589793
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
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hp=`vec3 transformedNormal = objectNormal;
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
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
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
}`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,om=`uniform bool receiveShadow;
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
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
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
#endif`,pm=`struct PhysicalMaterial {
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
}`,mm=`
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
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
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
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
#endif`,Om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e0=`float getShadowMask() {
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
}`,t0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`#include <common>
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
}`,S0=`#if DEPTH_PACKING == 3200
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
}`,_0=`#define DISTANCE
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`uniform float scale;
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
}`,C0=`uniform vec3 diffuse;
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
}`,R0=`uniform vec3 diffuse;
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
}`,I0=`#define LAMBERT
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
}`,P0=`#define LAMBERT
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
}`,L0=`#define MATCAP
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
}`,B0=`#define MATCAP
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
}`,U0=`#define NORMAL
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
}`,z0=`#define NORMAL
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
}`,F0=`#define PHONG
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
}`,N0=`#define PHONG
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
}`,O0=`#define STANDARD
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
}`,k0=`#define STANDARD
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
}`,H0=`#define TOON
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
}`,G0=`#define TOON
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
}`,V0=`uniform float size;
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,Y0=`uniform vec3 color;
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
}`,q0=`uniform float rotation;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:gp,alphahash_pars_fragment:vp,alphamap_fragment:xp,alphamap_pars_fragment:Mp,alphatest_fragment:yp,alphatest_pars_fragment:wp,aomap_fragment:Sp,aomap_pars_fragment:Ap,batching_pars_vertex:_p,batching_vertex:Ep,begin_vertex:bp,beginnormal_vertex:Tp,bsdfs:Cp,iridescence_fragment:Dp,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Ip,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Bp,color_fragment:Up,color_pars_fragment:zp,color_pars_vertex:Fp,color_vertex:Np,common:Op,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Hp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Vp,emissivemap_fragment:Wp,emissivemap_pars_fragment:Xp,colorspace_fragment:Yp,colorspace_pars_fragment:qp,envmap_fragment:Qp,envmap_common_pars_fragment:Kp,envmap_pars_fragment:Zp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:lm,envmap_vertex:Jp,fog_vertex:$p,fog_pars_vertex:em,fog_fragment:tm,fog_pars_fragment:nm,gradientmap_pars_fragment:im,lightmap_pars_fragment:sm,lights_lambert_fragment:rm,lights_lambert_pars_fragment:am,lights_pars_begin:om,lights_toon_fragment:cm,lights_toon_pars_fragment:hm,lights_phong_fragment:um,lights_phong_pars_fragment:fm,lights_physical_fragment:dm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:vm,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:ym,logdepthbuf_vertex:wm,map_fragment:Sm,map_pars_fragment:Am,map_particle_fragment:_m,map_particle_pars_fragment:Em,metalnessmap_fragment:bm,metalnessmap_pars_fragment:Tm,morphinstance_vertex:Cm,morphcolor_vertex:Dm,morphnormal_vertex:Rm,morphtarget_pars_vertex:Im,morphtarget_vertex:Pm,normal_fragment_begin:Lm,normal_fragment_maps:Bm,normal_pars_fragment:Um,normal_pars_vertex:zm,normal_vertex:Fm,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:Om,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:Hm,iridescence_pars_fragment:Gm,opaque_fragment:Vm,packing:Wm,premultiplied_alpha_fragment:Xm,project_vertex:Ym,dithering_fragment:qm,dithering_pars_fragment:Qm,roughnessmap_fragment:Km,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:jm,shadowmap_pars_vertex:Jm,shadowmap_vertex:$m,shadowmask_pars_fragment:e0,skinbase_vertex:t0,skinning_pars_vertex:n0,skinning_vertex:i0,skinnormal_vertex:s0,specularmap_fragment:r0,specularmap_pars_fragment:a0,tonemapping_fragment:o0,tonemapping_pars_fragment:l0,transmission_fragment:c0,transmission_pars_fragment:h0,uv_pars_fragment:u0,uv_pars_vertex:f0,uv_vertex:d0,worldpos_vertex:p0,background_vert:m0,background_frag:g0,backgroundCube_vert:v0,backgroundCube_frag:x0,cube_vert:M0,cube_frag:y0,depth_vert:w0,depth_frag:S0,distanceRGBA_vert:A0,distanceRGBA_frag:_0,equirect_vert:E0,equirect_frag:b0,linedashed_vert:T0,linedashed_frag:C0,meshbasic_vert:D0,meshbasic_frag:R0,meshlambert_vert:I0,meshlambert_frag:P0,meshmatcap_vert:L0,meshmatcap_frag:B0,meshnormal_vert:U0,meshnormal_frag:z0,meshphong_vert:F0,meshphong_frag:N0,meshphysical_vert:O0,meshphysical_frag:k0,meshtoon_vert:H0,meshtoon_frag:G0,points_vert:V0,points_frag:W0,shadow_vert:X0,shadow_frag:Y0,sprite_vert:q0,sprite_frag:Q0},De={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Bn={basic:{uniforms:en([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:en([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:en([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:en([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:en([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:en([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:en([De.points,De.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:en([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:en([De.common,De.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:en([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:en([De.sprite,De.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:en([De.common,De.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:en([De.lights,De.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Bn.physical={uniforms:en([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Or={r:0,b:0,g:0},Di=new Hn,K0=new tt;function Z0(n,e,t,i,s,r,a){const o=new Ze(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function v(M){let y=!1;const w=m(M);w===null?d(o,l):w&&w.isColor&&(d(w,1),y=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,y){const w=m(y);w&&(w.isCubeTexture||w.mapping===Da)?(h===void 0&&(h=new St(new Vi(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:Cs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Di.copy(y.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(Di)),h.material.toneMapped=lt.getTransfer(w.colorSpace)!==Mt,(u!==w||f!==w.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,p=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new St(new Gn(2,2),new ft({name:"BackgroundMaterial",uniforms:Cs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=lt.getTransfer(w.colorSpace)!==Mt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,p=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,y){M.getRGB(Or,Yu(n)),i.buffers.color.setClear(Or.r,Or.g,Or.b,y,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(o,l)},render:v,addToRenderList:g,dispose:x}}function j0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(A,_,R,P,z){let O=!1;const L=u(P,R,_);r!==L&&(r=L,c(r.object)),O=p(A,P,R,z),O&&m(A,P,R,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,y(A,_,R,P),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function u(A,_,R){const P=R.wireframe===!0;let z=i[A.id];z===void 0&&(z={},i[A.id]=z);let O=z[_.id];O===void 0&&(O={},z[_.id]=O);let L=O[P];return L===void 0&&(L=f(l()),O[P]=L),L}function f(A){const _=[],R=[],P=[];for(let z=0;z<t;z++)_[z]=0,R[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:R,attributeDivisors:P,object:A,attributes:{},index:null}}function p(A,_,R,P){const z=r.attributes,O=_.attributes;let L=0;const U=R.getAttributes();for(const B in U)if(U[B].location>=0){const X=z[B];let K=O[B];if(K===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(K=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(K=A.instanceColor)),X===void 0||X.attribute!==K||K&&X.data!==K.data)return!0;L++}return r.attributesNum!==L||r.index!==P}function m(A,_,R,P){const z={},O=_.attributes;let L=0;const U=R.getAttributes();for(const B in U)if(U[B].location>=0){let X=O[B];X===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(X=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(X=A.instanceColor));const K={};K.attribute=X,X&&X.data&&(K.data=X.data),z[B]=K,L++}r.attributes=z,r.attributesNum=L,r.index=P}function v(){const A=r.newAttributes;for(let _=0,R=A.length;_<R;_++)A[_]=0}function g(A){d(A,0)}function d(A,_){const R=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;R[A]=1,P[A]===0&&(n.enableVertexAttribArray(A),P[A]=1),z[A]!==_&&(n.vertexAttribDivisor(A,_),z[A]=_)}function x(){const A=r.newAttributes,_=r.enabledAttributes;for(let R=0,P=_.length;R<P;R++)_[R]!==A[R]&&(n.disableVertexAttribArray(R),_[R]=0)}function M(A,_,R,P,z,O,L){L===!0?n.vertexAttribIPointer(A,_,R,z,O):n.vertexAttribPointer(A,_,R,P,z,O)}function y(A,_,R,P){v();const z=P.attributes,O=R.getAttributes(),L=_.defaultAttributeValues;for(const U in O){const B=O[U];if(B.location>=0){let k=z[U];if(k===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(k=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(k=A.instanceColor)),k!==void 0){const X=k.normalized,K=k.itemSize,oe=e.get(k);if(oe===void 0)continue;const we=oe.buffer,be=oe.type,Se=oe.bytesPerElement,Z=be===n.INT||be===n.UNSIGNED_INT||k.gpuType===Bl;if(k.isInterleavedBufferAttribute){const ne=k.data,me=ne.stride,le=k.offset;if(ne.isInstancedInterleavedBuffer){for(let se=0;se<B.locationSize;se++)d(B.location+se,ne.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let se=0;se<B.locationSize;se++)g(B.location+se);n.bindBuffer(n.ARRAY_BUFFER,we);for(let se=0;se<B.locationSize;se++)M(B.location+se,K/B.locationSize,be,X,me*Se,(le+K/B.locationSize*se)*Se,Z)}else{if(k.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)d(B.location+ne,k.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ne=0;ne<B.locationSize;ne++)g(B.location+ne);n.bindBuffer(n.ARRAY_BUFFER,we);for(let ne=0;ne<B.locationSize;ne++)M(B.location+ne,K/B.locationSize,be,X,K*Se,K/B.locationSize*ne*Se,Z)}}else if(L!==void 0){const X=L[U];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(B.location,X);break;case 3:n.vertexAttrib3fv(B.location,X);break;case 4:n.vertexAttrib4fv(B.location,X);break;default:n.vertexAttrib1fv(B.location,X)}}}}x()}function w(){T();for(const A in i){const _=i[A];for(const R in _){const P=_[R];for(const z in P)h(P[z].object),delete P[z];delete _[R]}delete i[A]}}function E(A){if(i[A.id]===void 0)return;const _=i[A.id];for(const R in _){const P=_[R];for(const z in P)h(P[z].object),delete P[z];delete _[R]}delete i[A.id]}function b(A){for(const _ in i){const R=i[_];if(R[A.id]===void 0)continue;const P=R[A.id];for(const z in P)h(P[z].object),delete P[z];delete R[A.id]}}function T(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function J0(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];t.update(p,i,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*f[v];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==Vt&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const T=b===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Et&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==on&&!T)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:w,maxSamples:E}}function eg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new mi,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,d=n.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const x=r?0:i,M=x*4;let y=d.clippingState||null;l.value=y,y=h(m,f,M,p);for(let w=0;w!==M;++w)y[w]=t[w];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const d=p+v*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,y=p;M!==v;++M,y+=4)a.copy(u[M]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function tg(n){let e=new WeakMap;function t(a,o){return o===Ho?a.mapping=_s:o===Go&&(a.mapping=Es),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ho||o===Go)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jd(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ys=4,jc=[.125,.215,.35,.446,.526,.582],Ni=20,ho=new Ls,Jc=new Ze;let uo=null,fo=0,po=0,mo=!1;const Ui=(1+Math.sqrt(5))/2,fs=1/Ui,$c=[new W(-Ui,fs,0),new W(Ui,fs,0),new W(-fs,0,Ui),new W(fs,0,Ui),new W(0,Ui,-fs),new W(0,Ui,fs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],ng=new W;class eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=ng}=r;uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uo,fo,po),this._renderer.xr.enabled=mo,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:Rn,format:Vt,colorSpace:wi,depthBuffer:!1},s=th(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(r)),this._blurMaterial=sg(r,e,t)}return s}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,ho)}_sceneToCubeUV(e,t,i,s,r){const l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Jc),u.toneMapping=ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new Vu({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new St(new Vi,v);let d=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,d=!0):(v.color.copy(Jc),d=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const w=this._cubeSize;kr(s,y*w,M>2?w:0,w,w),u.setRenderTarget(s),d&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===_s||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;kr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ho)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$c[(s-r-1)%$c.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new St(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):Ni;g>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ni}`);const d=[];let x=0;for(let b=0;b<Ni;++b){const T=b/v,S=Math.exp(-T*T/2);d.push(S),b===0?x+=S:b<g&&(x+=2*S)}for(let b=0;b<d.length;b++)d[b]=d[b]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-i;const y=this._sizeLods[s],w=3*y*(s>M-ys?s-M+ys:0),E=4*(this._cubeSize-y);kr(t,w,E,3*y,2*y),l.setRenderTarget(t),l.render(u,ho)}}function ig(n){const e=[],t=[],i=[];let s=n;const r=n-ys+1+jc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-ys?l=jc[a-n+ys-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,v=3,g=2,d=1,x=new Float32Array(v*m*p),M=new Float32Array(g*m*p),y=new Float32Array(d*m*p);for(let E=0;E<p;E++){const b=E%3*2/3-1,T=E>2?0:-1,S=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];x.set(S,v*m*E),M.set(f,g*m*E);const A=[E,E,E,E,E,E];y.set(A,d*m*E)}const w=new Xt;w.setAttribute("position",new Oe(x,v)),w.setAttribute("uv",new Oe(M,g)),w.setAttribute("faceIndex",new Oe(y,d)),e.push(w),s>ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function th(n,e,t){const i=new vt(n,e,t);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sg(n,e,t){const i=new Float32Array(Ni),s=new W(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ql(),fragmentShader:`

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
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function nh(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

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
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function ih(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function ql(){return`

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
	`}function rg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ho||l===Go,h=l===_s||l===Es;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new eh(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new eh(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ag(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ur("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function og(n,e,t,i){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,m=u.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let M=0,y=x.length;M<y;M+=3){const w=x[M+0],E=x[M+1],b=x[M+2];f.push(w,E,E,b,b,w)}}else if(m!==void 0){const x=m.array;v=m.version;for(let M=0,y=x.length/3-1;M<y;M+=3){const w=M+0,E=M+1,b=M+2;f.push(w,E,E,b,b,w)}}else return;const g=new(Ou(f)?Xu:Wu)(f,1);g.version=v;const d=r.get(u);d&&e.remove(d),r.set(u,g)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function lg(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*a),t.update(p,i,1)}function c(f,p,m){m!==0&&(n.drawElementsInstanced(i,p,r,f*a,m),t.update(p,i,m))}function h(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];t.update(g,i,1)}function u(f,p,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,m);let d=0;for(let x=0;x<m;x++)d+=p[x]*v[x];t.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function hg(n,e,t){const i=new WeakMap,s=new wt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let S=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),m===!0&&(M=2),v===!0&&(M=3);let y=o.attributes.position.count*M,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*w*4*u),b=new Vl(E,y,w,u);b.type=on,b.needsUpdate=!0;const T=M*4;for(let A=0;A<u;A++){const _=g[A],R=d[A],P=x[A],z=y*w*4*A;for(let O=0;O<_.count;O++){const L=O*T;p===!0&&(s.fromBufferAttribute(_,O),E[z+L+0]=s.x,E[z+L+1]=s.y,E[z+L+2]=s.z,E[z+L+3]=0),m===!0&&(s.fromBufferAttribute(R,O),E[z+L+4]=s.x,E[z+L+5]=s.y,E[z+L+6]=s.z,E[z+L+7]=0),v===!0&&(s.fromBufferAttribute(P,O),E[z+L+8]=s.x,E[z+L+9]=s.y,E[z+L+10]=s.z,E[z+L+11]=P.itemSize===4?s.w:1)}}f={count:u,texture:b,size:new Pe(y,w)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function ug(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const $u=new Nt,sh=new Ra(1,1),ef=new Vl,tf=new wa,nf=new Qu,rh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function Bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=rh[s];if(r===void 0&&(r=new Float32Array(s),rh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ia(n,e){let t=ah[e];t===void 0&&(t=new Int32Array(e),ah[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function gg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;ch.set(i),n.uniformMatrix2fv(this.addr,!1,ch),kt(t,i)}}function vg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;lh.set(i),n.uniformMatrix3fv(this.addr,!1,lh),kt(t,i)}}function xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;oh.set(i),n.uniformMatrix4fv(this.addr,!1,oh),kt(t,i)}}function Mg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function Ag(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function Tg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(sh.compareFunction=Nu,r=sh):r=$u,t.setTexture2D(e||r,s)}function Cg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||tf,s)}function Dg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||nf,s)}function Rg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ef,s)}function Ig(n){switch(n){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return vg;case 35676:return xg;case 5124:case 35670:return Mg;case 35667:case 35671:return yg;case 35668:case 35672:return wg;case 35669:case 35673:return Sg;case 5125:return Ag;case 36294:return _g;case 36295:return Eg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Rg}}function Pg(n,e){n.uniform1fv(this.addr,e)}function Lg(n,e){const t=Bs(e,this.size,2);n.uniform2fv(this.addr,t)}function Bg(n,e){const t=Bs(e,this.size,3);n.uniform3fv(this.addr,t)}function Ug(n,e){const t=Bs(e,this.size,4);n.uniform4fv(this.addr,t)}function zg(n,e){const t=Bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fg(n,e){const t=Bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ng(n,e){const t=Bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Og(n,e){n.uniform1iv(this.addr,e)}function kg(n,e){n.uniform2iv(this.addr,e)}function Hg(n,e){n.uniform3iv(this.addr,e)}function Gg(n,e){n.uniform4iv(this.addr,e)}function Vg(n,e){n.uniform1uiv(this.addr,e)}function Wg(n,e){n.uniform2uiv(this.addr,e)}function Xg(n,e){n.uniform3uiv(this.addr,e)}function Yg(n,e){n.uniform4uiv(this.addr,e)}function qg(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||$u,r[a])}function Qg(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||tf,r[a])}function Kg(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||nf,r[a])}function Zg(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ef,r[a])}function jg(n){switch(n){case 5126:return Pg;case 35664:return Lg;case 35665:return Bg;case 35666:return Ug;case 35674:return zg;case 35675:return Fg;case 35676:return Ng;case 5124:case 35670:return Og;case 35667:case 35671:return kg;case 35668:case 35672:return Hg;case 35669:case 35673:return Gg;case 5125:return Vg;case 36294:return Wg;case 36295:return Xg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Zg}}class Jg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ig(t.type)}}class $g{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jg(t.type)}}class ev{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const go=/(\w+)(\])?(\[|\.)?/g;function hh(n,e){n.seq.push(e),n.map[e.id]=e}function tv(n,e,t){const i=n.name,s=i.length;for(go.lastIndex=0;;){const r=go.exec(i),a=go.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hh(t,c===void 0?new Jg(o,n,e):new $g(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new ev(o),hh(t,u)),t=u}}}class ua{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);tv(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function uh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const nv=37297;let iv=0;function sv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const fh=new Ke;function rv(n){lt._getMatrix(fh,lt.workingColorSpace,n);const e=`mat3( ${fh.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case va:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function dh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+sv(n.getShaderSource(e),o)}else return r}function av(n,e){const t=rv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ov(n,e){let t;switch(e){case hd:t="Linear";break;case ud:t="Reinhard";break;case fd:t="Cineon";break;case dd:t="ACESFilmic";break;case md:t="AgX";break;case gd:t="Neutral";break;case pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new W;function lv(){lt.getLuminanceCoefficients(Hr);const n=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function hv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function tr(n){return n!==""}function ph(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(n){return n.replace(fv,pv)}const dv=new Map;function pv(n,e){let t=qe[e];if(t===void 0){const i=dv.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}const mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gh(n){return n.replace(mv,gv)}function gv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function vv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function xv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _s:case Es:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function yv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Du:e="ENVMAP_BLENDING_MULTIPLY";break;case ld:e="ENVMAP_BLENDING_MIX";break;case cd:e="ENVMAP_BLENDING_ADD";break}return e}function wv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Sv(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vv(t),c=xv(t),h=Mv(t),u=yv(t),f=wv(t),p=cv(t),m=hv(r),v=s.createProgram();let g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(tr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(tr).join(`
`),d.length>0&&(d+=`
`)):(g=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),d=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?qe.tonemapping_pars_fragment:"",t.toneMapping!==ei?ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,av("linearToOutputTexel",t.outputColorSpace),lv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=yl(a),a=ph(a,t),a=mh(a,t),o=yl(o),o=ph(o,t),o=mh(o,t),a=gh(a),o=gh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=x+g+a,y=x+d+o,w=uh(s,s.VERTEX_SHADER,M),E=uh(s,s.FRAGMENT_SHADER,y);s.attachShader(v,w),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(_){if(n.debug.checkShaderErrors){const R=s.getProgramInfoLog(v)||"",P=s.getShaderInfoLog(w)||"",z=s.getShaderInfoLog(E)||"",O=R.trim(),L=P.trim(),U=z.trim();let B=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,E);else{const X=dh(s,w,"vertex"),K=dh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+_.name+`
Material Type: `+_.type+`

Program Info Log: `+O+`
`+X+`
`+K)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||U==="")&&(k=!1);k&&(_.diagnostics={runnable:B,programLog:O,vertexShader:{log:L,prefix:g},fragmentShader:{log:U,prefix:d}})}s.deleteShader(w),s.deleteShader(E),T=new ua(s,v),S=uv(s,v)}let T;this.getUniforms=function(){return T===void 0&&b(this),T};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,nv)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=E,this}let Av=0;class _v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ev(e),t.set(e,i)),i}}class Ev{constructor(e){this.id=Av++,this.code=e,this.usedTimes=0}}function bv(n,e,t,i,s,r,a){const o=new Hu,l=new _v,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,A,_,R,P){const z=R.fog,O=P.geometry,L=S.isMeshStandardMaterial?R.environment:null,U=(S.isMeshStandardMaterial?t:e).get(S.envMap||L),B=U&&U.mapping===Da?U.image.height:null,k=m[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const X=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,K=X!==void 0?X.length:0;let oe=0;O.morphAttributes.position!==void 0&&(oe=1),O.morphAttributes.normal!==void 0&&(oe=2),O.morphAttributes.color!==void 0&&(oe=3);let we,be,Se,Z;if(k){const rt=Bn[k];we=rt.vertexShader,be=rt.fragmentShader}else we=S.vertexShader,be=S.fragmentShader,l.update(S),Se=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const ne=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),le=P.isInstancedMesh===!0,se=P.isBatchedMesh===!0,Ae=!!S.map,Ge=!!S.matcap,N=!!U,ze=!!S.aoMap,Fe=!!S.lightMap,Te=!!S.bumpMap,ue=!!S.normalMap,Ve=!!S.displacementMap,Ee=!!S.emissiveMap,ke=!!S.metalnessMap,Je=!!S.roughnessMap,$e=S.anisotropy>0,F=S.clearcoat>0,D=S.dispersion>0,Q=S.iridescence>0,ee=S.sheen>0,G=S.transmission>0,V=$e&&!!S.anisotropyMap,$=F&&!!S.clearcoatMap,te=F&&!!S.clearcoatNormalMap,de=F&&!!S.clearcoatRoughnessMap,ge=Q&&!!S.iridescenceMap,he=Q&&!!S.iridescenceThicknessMap,xe=ee&&!!S.sheenColorMap,Ce=ee&&!!S.sheenRoughnessMap,Me=!!S.specularMap,ce=!!S.specularColorMap,Be=!!S.specularIntensityMap,H=G&&!!S.transmissionMap,pe=G&&!!S.thicknessMap,fe=!!S.gradientMap,ye=!!S.alphaMap,ae=S.alphaTest>0,ie=!!S.alphaHash,Ie=!!S.extensions;let Ne=ei;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ne=n.toneMapping);const pt={shaderID:k,shaderType:S.type,shaderName:S.name,vertexShader:we,fragmentShader:be,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:se,batchingColor:se&&P._colorsTexture!==null,instancing:le,instancingColor:le&&P.instanceColor!==null,instancingMorph:le&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:wi,alphaToCoverage:!!S.alphaToCoverage,map:Ae,matcap:Ge,envMap:N,envMapMode:N&&U.mapping,envMapCubeUVHeight:B,aoMap:ze,lightMap:Fe,bumpMap:Te,normalMap:ue,displacementMap:f&&Ve,emissiveMap:Ee,normalMapObjectSpace:ue&&S.normalMapType===xd,normalMapTangentSpace:ue&&S.normalMapType===Hl,metalnessMap:ke,roughnessMap:Je,anisotropy:$e,anisotropyMap:V,clearcoat:F,clearcoatMap:$,clearcoatNormalMap:te,clearcoatRoughnessMap:de,dispersion:D,iridescence:Q,iridescenceMap:ge,iridescenceThicknessMap:he,sheen:ee,sheenColorMap:xe,sheenRoughnessMap:Ce,specularMap:Me,specularColorMap:ce,specularIntensityMap:Be,transmission:G,transmissionMap:H,thicknessMap:pe,gradientMap:fe,opaque:S.transparent===!1&&S.blending===xi&&S.alphaToCoverage===!1,alphaMap:ye,alphaTest:ae,alphaHash:ie,combine:S.combine,mapUv:Ae&&v(S.map.channel),aoMapUv:ze&&v(S.aoMap.channel),lightMapUv:Fe&&v(S.lightMap.channel),bumpMapUv:Te&&v(S.bumpMap.channel),normalMapUv:ue&&v(S.normalMap.channel),displacementMapUv:Ve&&v(S.displacementMap.channel),emissiveMapUv:Ee&&v(S.emissiveMap.channel),metalnessMapUv:ke&&v(S.metalnessMap.channel),roughnessMapUv:Je&&v(S.roughnessMap.channel),anisotropyMapUv:V&&v(S.anisotropyMap.channel),clearcoatMapUv:$&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(S.sheenRoughnessMap.channel),specularMapUv:Me&&v(S.specularMap.channel),specularColorMapUv:ce&&v(S.specularColorMap.channel),specularIntensityMapUv:Be&&v(S.specularIntensityMap.channel),transmissionMapUv:H&&v(S.transmissionMap.channel),thicknessMapUv:pe&&v(S.thicknessMap.channel),alphaMapUv:ye&&v(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ue||$e),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(Ae||ye),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:P.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&_.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&lt.getTransfer(S.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ee&&S.emissiveMap.isVideoTexture===!0&&lt.getTransfer(S.emissiveMap.colorSpace)===Mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qt,flipSided:S.side===Ut,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ie&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&S.extensions.multiDraw===!0||se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function d(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const _ in S.defines)A.push(_),A.push(S.defines[_]);return S.isRawShaderMaterial===!1&&(x(A,S),M(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function x(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function M(S,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),A.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const A=m[S.type];let _;if(A){const R=Bn[A];_=qd.clone(R.uniforms)}else _=S.uniforms;return _}function w(S,A){let _;for(let R=0,P=h.length;R<P;R++){const z=h[R];if(z.cacheKey===A){_=z,++_.usedTimes;break}}return _===void 0&&(_=new Sv(n,A,S,r),h.push(_)),_}function E(S){if(--S.usedTimes===0){const A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:w,releaseProgram:E,releaseShaderCache:b,programs:h,dispose:T}}function Tv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Cv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,p,m,v,g){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=u.renderOrder,d.z=v,d.group=g),e++,d}function o(u,f,p,m,v,g){const d=a(u,f,p,m,v,g);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,m,v,g){const d=a(u,f,p,m,v,g);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Cv),i.length>1&&i.sort(f||xh),s.length>1&&s.sort(f||xh)}function h(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Dv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Mh,n.set(i,[a])):s>=r.length?(a=new Mh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ze};break;case"SpotLight":t={position:new W,direction:new W,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function Iv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Pv=0;function Lv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bv(n){const e=new Rv,t=Iv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const s=new W,r=new tt,a=new tt;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,m=0,v=0,g=0,d=0,x=0,M=0,y=0,w=0,E=0,b=0;c.sort(Lv);for(let S=0,A=c.length;S<A;S++){const _=c[S],R=_.color,P=_.intensity,z=_.distance,O=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)h+=R.r*P,u+=R.g*P,f+=R.b*P;else if(_.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(_.sh.coefficients[L],P);b++}else if(_.isDirectionalLight){const L=e.get(_);if(L.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){const U=_.shadow,B=t.get(_);B.shadowIntensity=U.intensity,B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=_.shadow.matrix,x++}i.directional[p]=L,p++}else if(_.isSpotLight){const L=e.get(_);L.position.setFromMatrixPosition(_.matrixWorld),L.color.copy(R).multiplyScalar(P),L.distance=z,L.coneCos=Math.cos(_.angle),L.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),L.decay=_.decay,i.spot[v]=L;const U=_.shadow;if(_.map&&(i.spotLightMap[w]=_.map,w++,U.updateMatrices(_),_.castShadow&&E++),i.spotLightMatrix[v]=U.matrix,_.castShadow){const B=t.get(_);B.shadowIntensity=U.intensity,B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,i.spotShadow[v]=B,i.spotShadowMap[v]=O,y++}v++}else if(_.isRectAreaLight){const L=e.get(_);L.color.copy(R).multiplyScalar(P),L.halfWidth.set(_.width*.5,0,0),L.halfHeight.set(0,_.height*.5,0),i.rectArea[g]=L,g++}else if(_.isPointLight){const L=e.get(_);if(L.color.copy(_.color).multiplyScalar(_.intensity),L.distance=_.distance,L.decay=_.decay,_.castShadow){const U=_.shadow,B=t.get(_);B.shadowIntensity=U.intensity,B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,B.shadowCameraNear=U.camera.near,B.shadowCameraFar=U.camera.far,i.pointShadow[m]=B,i.pointShadowMap[m]=O,i.pointShadowMatrix[m]=_.shadow.matrix,M++}i.point[m]=L,m++}else if(_.isHemisphereLight){const L=e.get(_);L.skyColor.copy(_.color).multiplyScalar(P),L.groundColor.copy(_.groundColor).multiplyScalar(P),i.hemi[d]=L,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const T=i.hash;(T.directionalLength!==p||T.pointLength!==m||T.spotLength!==v||T.rectAreaLength!==g||T.hemiLength!==d||T.numDirectionalShadows!==x||T.numPointShadows!==M||T.numSpotShadows!==y||T.numSpotMaps!==w||T.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=b,T.directionalLength=p,T.pointLength=m,T.spotLength=v,T.rectAreaLength=g,T.hemiLength=d,T.numDirectionalShadows=x,T.numPointShadows=M,T.numSpotShadows=y,T.numSpotMaps=w,T.numLightProbes=b,i.version=Pv++)}function l(c,h){let u=0,f=0,p=0,m=0,v=0;const g=h.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const M=c[d];if(M.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(M.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function yh(n){const e=new Bv(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Uv(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new yh(n),e.set(s,[o])):r>=a.length?(o=new yh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
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
}`;function Nv(n,e,t){let i=new mr;const s=new Pe,r=new Pe,a=new wt,o=new Zu({depthPacking:Fu}),l=new ap,c={},h=t.maxTextureSize,u={[kn]:Ut,[Ut]:kn,[Qt]:Qt},f=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:zv,fragmentShader:Fv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new Xt;m.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new St(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let d=this.type;this.render=function(E,b,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const S=n.getRenderTarget(),A=n.getActiveCubeFace(),_=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Ft),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const P=d!==jn&&this.type===jn,z=d===jn&&this.type!==jn;for(let O=0,L=E.length;O<L;O++){const U=E[O],B=U.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const k=B.getFrameExtents();if(s.multiply(k),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,B.mapSize.y=r.y)),B.map===null||P===!0||z===!0){const K=this.type!==jn?{minFilter:_t,magFilter:_t}:{};B.map!==null&&B.map.dispose(),B.map=new vt(s.x,s.y,K),B.map.texture.name=U.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const X=B.getViewportCount();for(let K=0;K<X;K++){const oe=B.getViewport(K);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),R.viewport(a),B.updateMatrices(U,K),i=B.getFrustum(),y(b,T,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===jn&&x(B,T),B.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(S,A,_)};function x(E,b){const T=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new vt(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(b,null,T,f,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(b,null,T,p,v,null)}function M(E,b,T,S){let A=null;const _=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(_!==void 0)A=_;else if(A=T.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const R=A.uuid,P=b.uuid;let z=c[R];z===void 0&&(z={},c[R]=z);let O=z[P];O===void 0&&(O=A.clone(),z[P]=O,b.addEventListener("dispose",w)),A=O}if(A.visible=b.visible,A.wireframe=b.wireframe,S===jn?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:u[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,T.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const R=n.properties.get(A);R.light=T}return A}function y(E,b,T,S,A){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===jn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const P=e.update(E),z=E.material;if(Array.isArray(z)){const O=P.groups;for(let L=0,U=O.length;L<U;L++){const B=O[L],k=z[B.materialIndex];if(k&&k.visible){const X=M(E,k,S,A);E.onBeforeShadow(n,E,b,T,P,X,B),n.renderBufferDirect(T,null,P,X,E,B),E.onAfterShadow(n,E,b,T,P,X,B)}}}else if(z.visible){const O=M(E,z,S,A);E.onBeforeShadow(n,E,b,T,P,O,null),n.renderBufferDirect(T,null,P,O,E,null),E.onAfterShadow(n,E,b,T,P,O,null)}}const R=E.children;for(let P=0,z=R.length;P<z;P++)y(R[P],b,T,S,A)}function w(E){E.target.removeEventListener("dispose",w);for(const T in c){const S=c[T],A=E.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}const Ov={[Uo]:ga,[zo]:Oo,[Fo]:ko,[As]:No,[ga]:Uo,[Oo]:zo,[ko]:Fo,[No]:As};function kv(n,e){function t(){let H=!1;const pe=new wt;let fe=null;const ye=new wt(0,0,0,0);return{setMask:function(ae){fe!==ae&&!H&&(n.colorMask(ae,ae,ae,ae),fe=ae)},setLocked:function(ae){H=ae},setClear:function(ae,ie,Ie,Ne,pt){pt===!0&&(ae*=Ne,ie*=Ne,Ie*=Ne),pe.set(ae,ie,Ie,Ne),ye.equals(pe)===!1&&(n.clearColor(ae,ie,Ie,Ne),ye.copy(pe))},reset:function(){H=!1,fe=null,ye.set(-1,0,0,0)}}}function i(){let H=!1,pe=!1,fe=null,ye=null,ae=null;return{setReversed:function(ie){if(pe!==ie){const Ie=e.get("EXT_clip_control");ie?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),pe=ie;const Ne=ae;ae=null,this.setClear(Ne)}},getReversed:function(){return pe},setTest:function(ie){ie?ne(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(ie){fe!==ie&&!H&&(n.depthMask(ie),fe=ie)},setFunc:function(ie){if(pe&&(ie=Ov[ie]),ye!==ie){switch(ie){case Uo:n.depthFunc(n.NEVER);break;case ga:n.depthFunc(n.ALWAYS);break;case zo:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case Fo:n.depthFunc(n.EQUAL);break;case No:n.depthFunc(n.GEQUAL);break;case Oo:n.depthFunc(n.GREATER);break;case ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=ie}},setLocked:function(ie){H=ie},setClear:function(ie){ae!==ie&&(pe&&(ie=1-ie),n.clearDepth(ie),ae=ie)},reset:function(){H=!1,fe=null,ye=null,ae=null,pe=!1}}}function s(){let H=!1,pe=null,fe=null,ye=null,ae=null,ie=null,Ie=null,Ne=null,pt=null;return{setTest:function(rt){H||(rt?ne(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!H&&(n.stencilMask(rt),pe=rt)},setFunc:function(rt,vn,Lt){(fe!==rt||ye!==vn||ae!==Lt)&&(n.stencilFunc(rt,vn,Lt),fe=rt,ye=vn,ae=Lt)},setOp:function(rt,vn,Lt){(ie!==rt||Ie!==vn||Ne!==Lt)&&(n.stencilOp(rt,vn,Lt),ie=rt,Ie=vn,Ne=Lt)},setLocked:function(rt){H=rt},setClear:function(rt){pt!==rt&&(n.clearStencil(rt),pt=rt)},reset:function(){H=!1,pe=null,fe=null,ye=null,ae=null,ie=null,Ie=null,Ne=null,pt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],m=null,v=!1,g=null,d=null,x=null,M=null,y=null,w=null,E=null,b=new Ze(0,0,0),T=0,S=!1,A=null,_=null,R=null,P=null,z=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,U=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(B)[1]),L=U>=1):B.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),L=U>=2);let k=null,X={};const K=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),we=new wt().fromArray(K),be=new wt().fromArray(oe);function Se(H,pe,fe,ye){const ae=new Uint8Array(4),ie=n.createTexture();n.bindTexture(H,ie),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<fe;Ie++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(pe+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return ie}const Z={};Z[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(As),Te(!1),ue(wc),ne(n.CULL_FACE),ze(Ft);function ne(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function me(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function le(H,pe){return u[H]!==pe?(n.bindFramebuffer(H,pe),u[H]=pe,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pe),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function se(H,pe){let fe=p,ye=!1;if(H){fe=f.get(pe),fe===void 0&&(fe=[],f.set(pe,fe));const ae=H.textures;if(fe.length!==ae.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Ie=ae.length;ie<Ie;ie++)fe[ie]=n.COLOR_ATTACHMENT0+ie;fe.length=ae.length,ye=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,ye=!0);ye&&n.drawBuffers(fe)}function Ae(H){return m!==H?(n.useProgram(H),m=H,!0):!1}const Ge={[Fi]:n.FUNC_ADD,[Xf]:n.FUNC_SUBTRACT,[Yf]:n.FUNC_REVERSE_SUBTRACT};Ge[qf]=n.MIN,Ge[Qf]=n.MAX;const N={[Kf]:n.ZERO,[Zf]:n.ONE,[jf]:n.SRC_COLOR,[Lo]:n.SRC_ALPHA,[id]:n.SRC_ALPHA_SATURATE,[td]:n.DST_COLOR,[$f]:n.DST_ALPHA,[Jf]:n.ONE_MINUS_SRC_COLOR,[Bo]:n.ONE_MINUS_SRC_ALPHA,[nd]:n.ONE_MINUS_DST_COLOR,[ed]:n.ONE_MINUS_DST_ALPHA,[sd]:n.CONSTANT_COLOR,[rd]:n.ONE_MINUS_CONSTANT_COLOR,[ad]:n.CONSTANT_ALPHA,[od]:n.ONE_MINUS_CONSTANT_ALPHA};function ze(H,pe,fe,ye,ae,ie,Ie,Ne,pt,rt){if(H===Ft){v===!0&&(me(n.BLEND),v=!1);return}if(v===!1&&(ne(n.BLEND),v=!0),H!==Wf){if(H!==g||rt!==S){if((d!==Fi||y!==Fi)&&(n.blendEquation(n.FUNC_ADD),d=Fi,y=Fi),rt)switch(H){case xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ma:n.blendFunc(n.ONE,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ac:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ma:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}x=null,M=null,w=null,E=null,b.set(0,0,0),T=0,g=H,S=rt}return}ae=ae||pe,ie=ie||fe,Ie=Ie||ye,(pe!==d||ae!==y)&&(n.blendEquationSeparate(Ge[pe],Ge[ae]),d=pe,y=ae),(fe!==x||ye!==M||ie!==w||Ie!==E)&&(n.blendFuncSeparate(N[fe],N[ye],N[ie],N[Ie]),x=fe,M=ye,w=ie,E=Ie),(Ne.equals(b)===!1||pt!==T)&&(n.blendColor(Ne.r,Ne.g,Ne.b,pt),b.copy(Ne),T=pt),g=H,S=!1}function Fe(H,pe){H.side===Qt?me(n.CULL_FACE):ne(n.CULL_FACE);let fe=H.side===Ut;pe&&(fe=!fe),Te(fe),H.blending===xi&&H.transparent===!1?ze(Ft):ze(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const ye=H.stencilWrite;o.setTest(ye),ye&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ee(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Te(H){A!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),A=H)}function ue(H){H!==Gf?(ne(n.CULL_FACE),H!==_&&(H===wc?n.cullFace(n.BACK):H===Vf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),_=H}function Ve(H){H!==R&&(L&&n.lineWidth(H),R=H)}function Ee(H,pe,fe){H?(ne(n.POLYGON_OFFSET_FILL),(P!==pe||z!==fe)&&(n.polygonOffset(pe,fe),P=pe,z=fe)):me(n.POLYGON_OFFSET_FILL)}function ke(H){H?ne(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Je(H){H===void 0&&(H=n.TEXTURE0+O-1),k!==H&&(n.activeTexture(H),k=H)}function $e(H,pe,fe){fe===void 0&&(k===null?fe=n.TEXTURE0+O-1:fe=k);let ye=X[fe];ye===void 0&&(ye={type:void 0,texture:void 0},X[fe]=ye),(ye.type!==H||ye.texture!==pe)&&(k!==fe&&(n.activeTexture(fe),k=fe),n.bindTexture(H,pe||Z[H]),ye.type=H,ye.texture=pe)}function F(){const H=X[k];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function D(){try{n.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Q(){try{n.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{n.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function G(){try{n.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{n.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{n.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{n.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{n.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(H){we.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),we.copy(H))}function Ce(H){be.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),be.copy(H))}function Me(H,pe){let fe=c.get(pe);fe===void 0&&(fe=new WeakMap,c.set(pe,fe));let ye=fe.get(H);ye===void 0&&(ye=n.getUniformBlockIndex(pe,H.name),fe.set(H,ye))}function ce(H,pe){const ye=c.get(pe).get(H);l.get(pe)!==ye&&(n.uniformBlockBinding(pe,ye,H.__bindingPointIndex),l.set(pe,ye))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},k=null,X={},u={},f=new WeakMap,p=[],m=null,v=!1,g=null,d=null,x=null,M=null,y=null,w=null,E=null,b=new Ze(0,0,0),T=0,S=!1,A=null,_=null,R=null,P=null,z=null,we.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:me,bindFramebuffer:le,drawBuffers:se,useProgram:Ae,setBlending:ze,setMaterial:Fe,setFlipSided:Te,setCullFace:ue,setLineWidth:Ve,setPolygonOffset:Ee,setScissorTest:ke,activeTexture:Je,bindTexture:$e,unbindTexture:F,compressedTexImage2D:D,compressedTexImage3D:Q,texImage2D:ge,texImage3D:he,updateUBOMapping:Me,uniformBlockBinding:ce,texStorage2D:te,texStorage3D:de,texSubImage2D:ee,texSubImage3D:G,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:xe,viewport:Ce,reset:Be}}function Hv(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(F,D){return p?new OffscreenCanvas(F,D):ya("canvas")}function v(F,D,Q){let ee=1;const G=$e(F);if((G.width>Q||G.height>Q)&&(ee=Q/Math.max(G.width,G.height)),ee<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const V=Math.floor(ee*G.width),$=Math.floor(ee*G.height);u===void 0&&(u=m(V,$));const te=D?m(V,$):u;return te.width=V,te.height=$,te.getContext("2d").drawImage(F,0,0,V,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+V+"x"+$+")."),te}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),F;return F}function g(F){return F.generateMipmaps}function d(F){n.generateMipmap(F)}function x(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(F,D,Q,ee,G=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let V=D;if(D===n.RED&&(Q===n.FLOAT&&(V=n.R32F),Q===n.HALF_FLOAT&&(V=n.R16F),Q===n.UNSIGNED_BYTE&&(V=n.R8)),D===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(V=n.R8UI),Q===n.UNSIGNED_SHORT&&(V=n.R16UI),Q===n.UNSIGNED_INT&&(V=n.R32UI),Q===n.BYTE&&(V=n.R8I),Q===n.SHORT&&(V=n.R16I),Q===n.INT&&(V=n.R32I)),D===n.RG&&(Q===n.FLOAT&&(V=n.RG32F),Q===n.HALF_FLOAT&&(V=n.RG16F),Q===n.UNSIGNED_BYTE&&(V=n.RG8)),D===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(V=n.RG8UI),Q===n.UNSIGNED_SHORT&&(V=n.RG16UI),Q===n.UNSIGNED_INT&&(V=n.RG32UI),Q===n.BYTE&&(V=n.RG8I),Q===n.SHORT&&(V=n.RG16I),Q===n.INT&&(V=n.RG32I)),D===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(V=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(V=n.RGB16UI),Q===n.UNSIGNED_INT&&(V=n.RGB32UI),Q===n.BYTE&&(V=n.RGB8I),Q===n.SHORT&&(V=n.RGB16I),Q===n.INT&&(V=n.RGB32I)),D===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),Q===n.UNSIGNED_INT&&(V=n.RGBA32UI),Q===n.BYTE&&(V=n.RGBA8I),Q===n.SHORT&&(V=n.RGBA16I),Q===n.INT&&(V=n.RGBA32I)),D===n.RGB&&(Q===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),D===n.RGBA){const $=G?va:lt.getTransfer(ee);Q===n.FLOAT&&(V=n.RGBA32F),Q===n.HALF_FLOAT&&(V=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(V=$===Mt?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function y(F,D){let Q;return F?D===null||D===Hi||D===bs?Q=n.DEPTH24_STENCIL8:D===on?Q=n.DEPTH32F_STENCIL8:D===cr&&(Q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Hi||D===bs?Q=n.DEPTH_COMPONENT24:D===on?Q=n.DEPTH_COMPONENT32F:D===cr&&(Q=n.DEPTH_COMPONENT16),Q}function w(F,D){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==_t&&F.minFilter!==ut?Math.log2(Math.max(D.width,D.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?D.mipmaps.length:1}function E(F){const D=F.target;D.removeEventListener("dispose",E),T(D),D.isVideoTexture&&h.delete(D)}function b(F){const D=F.target;D.removeEventListener("dispose",b),A(D)}function T(F){const D=i.get(F);if(D.__webglInit===void 0)return;const Q=F.source,ee=f.get(Q);if(ee){const G=ee[D.__cacheKey];G.usedTimes--,G.usedTimes===0&&S(F),Object.keys(ee).length===0&&f.delete(Q)}i.remove(F)}function S(F){const D=i.get(F);n.deleteTexture(D.__webglTexture);const Q=F.source,ee=f.get(Q);delete ee[D.__cacheKey],a.memory.textures--}function A(F){const D=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(D.__webglFramebuffer[ee]))for(let G=0;G<D.__webglFramebuffer[ee].length;G++)n.deleteFramebuffer(D.__webglFramebuffer[ee][G]);else n.deleteFramebuffer(D.__webglFramebuffer[ee]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[ee])}else{if(Array.isArray(D.__webglFramebuffer))for(let ee=0;ee<D.__webglFramebuffer.length;ee++)n.deleteFramebuffer(D.__webglFramebuffer[ee]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let ee=0;ee<D.__webglColorRenderbuffer.length;ee++)D.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[ee]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const Q=F.textures;for(let ee=0,G=Q.length;ee<G;ee++){const V=i.get(Q[ee]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(Q[ee])}i.remove(F)}let _=0;function R(){_=0}function P(){const F=_;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),_+=1,F}function z(F){const D=[];return D.push(F.wrapS),D.push(F.wrapT),D.push(F.wrapR||0),D.push(F.magFilter),D.push(F.minFilter),D.push(F.anisotropy),D.push(F.internalFormat),D.push(F.format),D.push(F.type),D.push(F.generateMipmaps),D.push(F.premultiplyAlpha),D.push(F.flipY),D.push(F.unpackAlignment),D.push(F.colorSpace),D.join()}function O(F,D){const Q=i.get(F);if(F.isVideoTexture&&ke(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Q.__version!==F.version){const ee=F.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Q,F,D);return}}else F.isExternalTexture&&(Q.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+D)}function L(F,D){const Q=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){Z(Q,F,D);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+D)}function U(F,D){const Q=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){Z(Q,F,D);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+D)}function B(F,D){const Q=i.get(F);if(F.version>0&&Q.__version!==F.version){ne(Q,F,D);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+D)}const k={[lr]:n.REPEAT,[Un]:n.CLAMP_TO_EDGE,[Vo]:n.MIRRORED_REPEAT},X={[_t]:n.NEAREST,[vd]:n.NEAREST_MIPMAP_NEAREST,[xr]:n.NEAREST_MIPMAP_LINEAR,[ut]:n.LINEAR,[Na]:n.LINEAR_MIPMAP_NEAREST,[zn]:n.LINEAR_MIPMAP_LINEAR},K={[Md]:n.NEVER,[Ed]:n.ALWAYS,[yd]:n.LESS,[Nu]:n.LEQUAL,[wd]:n.EQUAL,[_d]:n.GEQUAL,[Sd]:n.GREATER,[Ad]:n.NOTEQUAL};function oe(F,D){if(D.type===on&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===ut||D.magFilter===Na||D.magFilter===xr||D.magFilter===zn||D.minFilter===ut||D.minFilter===Na||D.minFilter===xr||D.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,k[D.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,k[D.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,k[D.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,X[D.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,X[D.minFilter]),D.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,K[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===_t||D.minFilter!==xr&&D.minFilter!==zn||D.type===on&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||i.get(D).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy}}}function we(F,D){let Q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,D.addEventListener("dispose",E));const ee=D.source;let G=f.get(ee);G===void 0&&(G={},f.set(ee,G));const V=z(D);if(V!==F.__cacheKey){G[V]===void 0&&(G[V]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),G[V].usedTimes++;const $=G[F.__cacheKey];$!==void 0&&(G[F.__cacheKey].usedTimes--,$.usedTimes===0&&S(D)),F.__cacheKey=V,F.__webglTexture=G[V].texture}return Q}function be(F,D,Q){return Math.floor(Math.floor(F/Q)/D)}function Se(F,D,Q,ee){const V=F.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,D.width,D.height,Q,ee,D.data);else{V.sort((he,xe)=>he.start-xe.start);let $=0;for(let he=1;he<V.length;he++){const xe=V[$],Ce=V[he],Me=xe.start+xe.count,ce=be(Ce.start,D.width,4),Be=be(xe.start,D.width,4);Ce.start<=Me+1&&ce===Be&&be(Ce.start+Ce.count-1,D.width,4)===ce?xe.count=Math.max(xe.count,Ce.start+Ce.count-xe.start):(++$,V[$]=Ce)}V.length=$+1;const te=n.getParameter(n.UNPACK_ROW_LENGTH),de=n.getParameter(n.UNPACK_SKIP_PIXELS),ge=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,D.width);for(let he=0,xe=V.length;he<xe;he++){const Ce=V[he],Me=Math.floor(Ce.start/4),ce=Math.ceil(Ce.count/4),Be=Me%D.width,H=Math.floor(Me/D.width),pe=ce,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,Be,H,pe,fe,Q,ee,D.data)}F.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,te),n.pixelStorei(n.UNPACK_SKIP_PIXELS,de),n.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function Z(F,D,Q){let ee=n.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),D.isData3DTexture&&(ee=n.TEXTURE_3D);const G=we(F,D),V=D.source;t.bindTexture(ee,F.__webglTexture,n.TEXTURE0+Q);const $=i.get(V);if(V.version!==$.__version||G===!0){t.activeTexture(n.TEXTURE0+Q);const te=lt.getPrimaries(lt.workingColorSpace),de=D.colorSpace===mn?null:lt.getPrimaries(D.colorSpace),ge=D.colorSpace===mn||te===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,D.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,D.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let he=v(D.image,!1,s.maxTextureSize);he=Je(D,he);const xe=r.convert(D.format,D.colorSpace),Ce=r.convert(D.type);let Me=M(D.internalFormat,xe,Ce,D.colorSpace,D.isVideoTexture);oe(ee,D);let ce;const Be=D.mipmaps,H=D.isVideoTexture!==!0,pe=$.__version===void 0||G===!0,fe=V.dataReady,ye=w(D,he);if(D.isDepthTexture)Me=y(D.format===Ts,D.type),pe&&(H?t.texStorage2D(n.TEXTURE_2D,1,Me,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Me,he.width,he.height,0,xe,Ce,null));else if(D.isDataTexture)if(Be.length>0){H&&pe&&t.texStorage2D(n.TEXTURE_2D,ye,Me,Be[0].width,Be[0].height);for(let ae=0,ie=Be.length;ae<ie;ae++)ce=Be[ae],H?fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ce.width,ce.height,xe,Ce,ce.data):t.texImage2D(n.TEXTURE_2D,ae,Me,ce.width,ce.height,0,xe,Ce,ce.data);D.generateMipmaps=!1}else H?(pe&&t.texStorage2D(n.TEXTURE_2D,ye,Me,he.width,he.height),fe&&Se(D,he,xe,Ce)):t.texImage2D(n.TEXTURE_2D,0,Me,he.width,he.height,0,xe,Ce,he.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){H&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Me,Be[0].width,Be[0].height,he.depth);for(let ae=0,ie=Be.length;ae<ie;ae++)if(ce=Be[ae],D.format!==Vt)if(xe!==null)if(H){if(fe)if(D.layerUpdates.size>0){const Ie=Zc(ce.width,ce.height,D.format,D.type);for(const Ne of D.layerUpdates){const pt=ce.data.subarray(Ne*Ie/ce.data.BYTES_PER_ELEMENT,(Ne+1)*Ie/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Ne,ce.width,ce.height,1,xe,pt)}D.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ce.width,ce.height,he.depth,xe,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Me,ce.width,ce.height,he.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ce.width,ce.height,he.depth,xe,Ce,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Me,ce.width,ce.height,he.depth,0,xe,Ce,ce.data)}else{H&&pe&&t.texStorage2D(n.TEXTURE_2D,ye,Me,Be[0].width,Be[0].height);for(let ae=0,ie=Be.length;ae<ie;ae++)ce=Be[ae],D.format!==Vt?xe!==null?H?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,ce.width,ce.height,xe,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ce.width,ce.height,xe,Ce,ce.data):t.texImage2D(n.TEXTURE_2D,ae,Me,ce.width,ce.height,0,xe,Ce,ce.data)}else if(D.isDataArrayTexture)if(H){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Me,he.width,he.height,he.depth),fe)if(D.layerUpdates.size>0){const ae=Zc(he.width,he.height,D.format,D.type);for(const ie of D.layerUpdates){const Ie=he.data.subarray(ie*ae/he.data.BYTES_PER_ELEMENT,(ie+1)*ae/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,he.width,he.height,1,xe,Ce,Ie)}D.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,xe,Ce,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,he.width,he.height,he.depth,0,xe,Ce,he.data);else if(D.isData3DTexture)H?(pe&&t.texStorage3D(n.TEXTURE_3D,ye,Me,he.width,he.height,he.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,xe,Ce,he.data)):t.texImage3D(n.TEXTURE_3D,0,Me,he.width,he.height,he.depth,0,xe,Ce,he.data);else if(D.isFramebufferTexture){if(pe)if(H)t.texStorage2D(n.TEXTURE_2D,ye,Me,he.width,he.height);else{let ae=he.width,ie=he.height;for(let Ie=0;Ie<ye;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Me,ae,ie,0,xe,Ce,null),ae>>=1,ie>>=1}}else if(Be.length>0){if(H&&pe){const ae=$e(Be[0]);t.texStorage2D(n.TEXTURE_2D,ye,Me,ae.width,ae.height)}for(let ae=0,ie=Be.length;ae<ie;ae++)ce=Be[ae],H?fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe,Ce,ce):t.texImage2D(n.TEXTURE_2D,ae,Me,xe,Ce,ce);D.generateMipmaps=!1}else if(H){if(pe){const ae=$e(he);t.texStorage2D(n.TEXTURE_2D,ye,Me,ae.width,ae.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ce,he)}else t.texImage2D(n.TEXTURE_2D,0,Me,xe,Ce,he);g(D)&&d(ee),$.__version=V.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function ne(F,D,Q){if(D.image.length!==6)return;const ee=we(F,D),G=D.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+Q);const V=i.get(G);if(G.version!==V.__version||ee===!0){t.activeTexture(n.TEXTURE0+Q);const $=lt.getPrimaries(lt.workingColorSpace),te=D.colorSpace===mn?null:lt.getPrimaries(D.colorSpace),de=D.colorSpace===mn||$===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,D.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,D.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ge=D.isCompressedTexture||D.image[0].isCompressedTexture,he=D.image[0]&&D.image[0].isDataTexture,xe=[];for(let ie=0;ie<6;ie++)!ge&&!he?xe[ie]=v(D.image[ie],!0,s.maxCubemapSize):xe[ie]=he?D.image[ie].image:D.image[ie],xe[ie]=Je(D,xe[ie]);const Ce=xe[0],Me=r.convert(D.format,D.colorSpace),ce=r.convert(D.type),Be=M(D.internalFormat,Me,ce,D.colorSpace),H=D.isVideoTexture!==!0,pe=V.__version===void 0||ee===!0,fe=G.dataReady;let ye=w(D,Ce);oe(n.TEXTURE_CUBE_MAP,D);let ae;if(ge){H&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Be,Ce.width,Ce.height);for(let ie=0;ie<6;ie++){ae=xe[ie].mipmaps;for(let Ie=0;Ie<ae.length;Ie++){const Ne=ae[Ie];D.format!==Vt?Me!==null?H?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,Ne.width,Ne.height,Me,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,Be,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,Ne.width,Ne.height,Me,ce,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,Be,Ne.width,Ne.height,0,Me,ce,Ne.data)}}}else{if(ae=D.mipmaps,H&&pe){ae.length>0&&ye++;const ie=$e(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Be,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(he){H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,xe[ie].width,xe[ie].height,Me,ce,xe[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Be,xe[ie].width,xe[ie].height,0,Me,ce,xe[ie].data);for(let Ie=0;Ie<ae.length;Ie++){const pt=ae[Ie].image[ie].image;H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,pt.width,pt.height,Me,ce,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,Be,pt.width,pt.height,0,Me,ce,pt.data)}}else{H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Me,ce,xe[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Be,Me,ce,xe[ie]);for(let Ie=0;Ie<ae.length;Ie++){const Ne=ae[Ie];H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,Me,ce,Ne.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,Be,Me,ce,Ne.image[ie])}}}g(D)&&d(n.TEXTURE_CUBE_MAP),V.__version=G.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function me(F,D,Q,ee,G,V){const $=r.convert(Q.format,Q.colorSpace),te=r.convert(Q.type),de=M(Q.internalFormat,$,te,Q.colorSpace),ge=i.get(D),he=i.get(Q);if(he.__renderTarget=D,!ge.__hasExternalTextures){const xe=Math.max(1,D.width>>V),Ce=Math.max(1,D.height>>V);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,V,de,xe,Ce,D.depth,0,$,te,null):t.texImage2D(G,V,de,xe,Ce,0,$,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),Ee(D)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,G,he.__webglTexture,0,Ve(D)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,G,he.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(F,D,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,F),D.depthBuffer){const ee=D.depthTexture,G=ee&&ee.isDepthTexture?ee.type:null,V=y(D.stencilBuffer,G),$=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=Ve(D);Ee(D)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,V,D.width,D.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,V,D.width,D.height):n.renderbufferStorage(n.RENDERBUFFER,V,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,F)}else{const ee=D.textures;for(let G=0;G<ee.length;G++){const V=ee[G],$=r.convert(V.format,V.colorSpace),te=r.convert(V.type),de=M(V.internalFormat,$,te,V.colorSpace),ge=Ve(D);Q&&Ee(D)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,de,D.width,D.height):Ee(D)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,de,D.width,D.height):n.renderbufferStorage(n.RENDERBUFFER,de,D.width,D.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(F,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(D.depthTexture);ee.__renderTarget=D,(!ee.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),O(D.depthTexture,0);const G=ee.__webglTexture,V=Ve(D);if(D.depthTexture.format===hr)Ee(D)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(D.depthTexture.format===Ts)Ee(D)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Ae(F){const D=i.get(F),Q=F.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==F.depthTexture){const ee=F.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),ee){const G=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,ee.removeEventListener("dispose",G)};ee.addEventListener("dispose",G),D.__depthDisposeCallback=G}D.__boundDepthTexture=ee}if(F.depthTexture&&!D.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const ee=F.texture.mipmaps;ee&&ee.length>0?se(D.__webglFramebuffer[0],F):se(D.__webglFramebuffer,F)}else if(Q){D.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer[ee]),D.__webglDepthbuffer[ee]===void 0)D.__webglDepthbuffer[ee]=n.createRenderbuffer(),le(D.__webglDepthbuffer[ee],F,!1);else{const G=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=D.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,V)}}else{const ee=F.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=n.createRenderbuffer(),le(D.__webglDepthbuffer,F,!1);else{const G=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=D.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(F,D,Q){const ee=i.get(F);D!==void 0&&me(ee.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&Ae(F)}function N(F){const D=F.texture,Q=i.get(F),ee=i.get(D);F.addEventListener("dispose",b);const G=F.textures,V=F.isWebGLCubeRenderTarget===!0,$=G.length>1;if($||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=D.version,a.memory.textures++),V){Q.__webglFramebuffer=[];for(let te=0;te<6;te++)if(D.mipmaps&&D.mipmaps.length>0){Q.__webglFramebuffer[te]=[];for(let de=0;de<D.mipmaps.length;de++)Q.__webglFramebuffer[te][de]=n.createFramebuffer()}else Q.__webglFramebuffer[te]=n.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){Q.__webglFramebuffer=[];for(let te=0;te<D.mipmaps.length;te++)Q.__webglFramebuffer[te]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if($)for(let te=0,de=G.length;te<de;te++){const ge=i.get(G[te]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),a.memory.textures++)}if(F.samples>0&&Ee(F)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let te=0;te<G.length;te++){const de=G[te];Q.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[te]);const ge=r.convert(de.format,de.colorSpace),he=r.convert(de.type),xe=M(de.internalFormat,ge,he,de.colorSpace,F.isXRRenderTarget===!0),Ce=Ve(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,xe,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,Q.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),le(Q.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),oe(n.TEXTURE_CUBE_MAP,D);for(let te=0;te<6;te++)if(D.mipmaps&&D.mipmaps.length>0)for(let de=0;de<D.mipmaps.length;de++)me(Q.__webglFramebuffer[te][de],F,D,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de);else me(Q.__webglFramebuffer[te],F,D,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);g(D)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){for(let te=0,de=G.length;te<de;te++){const ge=G[te],he=i.get(ge);let xe=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(xe=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,he.__webglTexture),oe(xe,ge),me(Q.__webglFramebuffer,F,ge,n.COLOR_ATTACHMENT0+te,xe,0),g(ge)&&d(xe)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(te=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,ee.__webglTexture),oe(te,D),D.mipmaps&&D.mipmaps.length>0)for(let de=0;de<D.mipmaps.length;de++)me(Q.__webglFramebuffer[de],F,D,n.COLOR_ATTACHMENT0,te,de);else me(Q.__webglFramebuffer,F,D,n.COLOR_ATTACHMENT0,te,0);g(D)&&d(te),t.unbindTexture()}F.depthBuffer&&Ae(F)}function ze(F){const D=F.textures;for(let Q=0,ee=D.length;Q<ee;Q++){const G=D[Q];if(g(G)){const V=x(F),$=i.get(G).__webglTexture;t.bindTexture(V,$),d(V),t.unbindTexture()}}}const Fe=[],Te=[];function ue(F){if(F.samples>0){if(Ee(F)===!1){const D=F.textures,Q=F.width,ee=F.height;let G=n.COLOR_BUFFER_BIT;const V=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=i.get(F),te=D.length>1;if(te)for(let ge=0;ge<D.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer);const de=F.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let ge=0;ge<D.length;ge++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$.__webglColorRenderbuffer[ge]);const he=i.get(D[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,Q,ee,0,0,Q,ee,G,n.NEAREST),l===!0&&(Fe.length=0,Te.length=0,Fe.push(n.COLOR_ATTACHMENT0+ge),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Fe.push(V),Te.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let ge=0;ge<D.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,$.__webglColorRenderbuffer[ge]);const he=i.get(D[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const D=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[D])}}}function Ve(F){return Math.min(s.maxSamples,F.samples)}function Ee(F){const D=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function ke(F){const D=a.render.frame;h.get(F)!==D&&(h.set(F,D),F.update())}function Je(F,D){const Q=F.colorSpace,ee=F.format,G=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Q!==wi&&Q!==mn&&(lt.getTransfer(Q)===Mt?(ee!==Vt||G!==Et)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),D}function $e(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=R,this.setTexture2D=O,this.setTexture2DArray=L,this.setTexture3D=U,this.setTextureCube=B,this.rebindTextures=Ge,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ee}function Gv(n,e){function t(i,s=mn){let r;const a=lt.getTransfer(s);if(i===Et)return n.UNSIGNED_BYTE;if(i===Ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Iu)return n.BYTE;if(i===Pu)return n.SHORT;if(i===cr)return n.UNSIGNED_SHORT;if(i===Bl)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===on)return n.FLOAT;if(i===Rn)return n.HALF_FLOAT;if(i===Uu)return n.ALPHA;if(i===zu)return n.RGB;if(i===Vt)return n.RGBA;if(i===hr)return n.DEPTH_COMPONENT;if(i===Ts)return n.DEPTH_STENCIL;if(i===yi)return n.RED;if(i===Fl)return n.RED_INTEGER;if(i===Nl)return n.RG;if(i===Ol)return n.RG_INTEGER;if(i===kl)return n.RGBA_INTEGER;if(i===oa||i===la||i===ca||i===ha)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wo||i===Xo||i===Yo||i===qo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qo||i===Ko||i===Zo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qo||i===Ko)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jo||i===Jo||i===$o||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===cl||i===hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$o)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===el)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===il)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===al)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ol)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ul||i===fl||i===dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ul)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pl||i===ml||i===gl||i===vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wv=`
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

}`;class Xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ku(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ft({vertexShader:Vv,fragmentShader:Wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Gn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yv extends ni{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,m=null;const v=typeof XRWebGLBinding<"u",g=new Xv,d={},x=t.getContextAttributes();let M=null,y=null;const w=[],E=[],b=new Pe;let T=null;const S=new tn;S.viewport=new wt;const A=new tn;A.viewport=new wt;const _=[S,A],R=new dp;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=w[Z];return ne===void 0&&(ne=new oo,w[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=w[Z];return ne===void 0&&(ne=new oo,w[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=w[Z];return ne===void 0&&(ne=new oo,w[Z]=ne),ne.getHandSpace()};function O(Z){const ne=E.indexOf(Z.inputSource);if(ne===-1)return;const me=w[ne];me!==void 0&&(me.update(Z.inputSource,Z.frame,c||a),me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function L(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",U);for(let Z=0;Z<w.length;Z++){const ne=E[Z];ne!==null&&(E[Z]=null,w[Z].disconnect(ne))}P=null,z=null,g.reset();for(const Z in d)delete d[Z];e.setRenderTarget(M),p=null,f=null,u=null,s=null,y=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",L),s.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,le=null,se=null;x.depth&&(se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=x.stencil?Ts:hr,le=x.stencil?bs:Hi);const Ae={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new vt(f.textureWidth,f.textureHeight,{format:Vt,type:Et,depthTexture:new Ra(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new vt(p.framebufferWidth,p.framebufferHeight,{format:Vt,type:Et,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Se.setContext(s),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(Z){for(let ne=0;ne<Z.removed.length;ne++){const me=Z.removed[ne],le=E.indexOf(me);le>=0&&(E[le]=null,w[le].disconnect(me))}for(let ne=0;ne<Z.added.length;ne++){const me=Z.added[ne];let le=E.indexOf(me);if(le===-1){for(let Ae=0;Ae<w.length;Ae++)if(Ae>=E.length){E.push(me),le=Ae;break}else if(E[Ae]===null){E[Ae]=me,le=Ae;break}if(le===-1)break}const se=w[le];se&&se.connect(me)}}const B=new W,k=new W;function X(Z,ne,me){B.setFromMatrixPosition(ne.matrixWorld),k.setFromMatrixPosition(me.matrixWorld);const le=B.distanceTo(k),se=ne.projectionMatrix.elements,Ae=me.projectionMatrix.elements,Ge=se[14]/(se[10]-1),N=se[14]/(se[10]+1),ze=(se[9]+1)/se[5],Fe=(se[9]-1)/se[5],Te=(se[8]-1)/se[0],ue=(Ae[8]+1)/Ae[0],Ve=Ge*Te,Ee=Ge*ue,ke=le/(-Te+ue),Je=ke*-Te;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Je),Z.translateZ(ke),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),se[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const $e=Ge+ke,F=N+ke,D=Ve-Je,Q=Ee+(le-Je),ee=ze*N/F*$e,G=Fe*N/F*$e;Z.projectionMatrix.makePerspective(D,Q,ee,G,$e,F),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function K(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ne=Z.near,me=Z.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(me=g.depthFar)),R.near=A.near=S.near=ne,R.far=A.far=S.far=me,(P!==R.near||z!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),P=R.near,z=R.far),R.layers.mask=Z.layers.mask|6,S.layers.mask=R.layers.mask&3,A.layers.mask=R.layers.mask&5;const le=Z.parent,se=R.cameras;K(R,le);for(let Ae=0;Ae<se.length;Ae++)K(se[Ae],le);se.length===2?X(R,S,A):R.projectionMatrix.copy(S.projectionMatrix),oe(Z,R,le)};function oe(Z,ne,me){me===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)},this.getCameraTexture=function(Z){return d[Z]};let we=null;function be(Z,ne){if(h=ne.getViewerPose(c||a),m=ne,h!==null){const me=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let le=!1;me.length!==R.cameras.length&&(R.cameras.length=0,le=!0);for(let N=0;N<me.length;N++){const ze=me[N];let Fe=null;if(p!==null)Fe=p.getViewport(ze);else{const ue=u.getViewSubImage(f,ze);Fe=ue.viewport,N===0&&(e.setRenderTargetTextures(y,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(y))}let Te=_[N];Te===void 0&&(Te=new tn,Te.layers.enable(N),Te.viewport=new wt,_[N]=Te),Te.matrix.fromArray(ze.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(ze.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),N===0&&(R.matrix.copy(Te.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),le===!0&&R.cameras.push(Te)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const N=u.getDepthInformation(me[0]);N&&N.isValid&&N.texture&&g.init(N,s.renderState)}if(se&&se.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let N=0;N<me.length;N++){const ze=me[N].camera;if(ze){let Fe=d[ze];Fe||(Fe=new Ku,d[ze]=Fe);const Te=u.getCameraImage(ze);Fe.sourceTexture=Te}}}}for(let me=0;me<w.length;me++){const le=E[me],se=w[me];le!==null&&se!==void 0&&se.update(le,ne,c||a)}we&&we(Z,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),m=null}const Se=new Ju;Se.setAnimationLoop(be),this.setAnimationLoop=function(Z){we=Z},this.dispose=function(){}}}const Ri=new Hn,qv=new tt;function Qv(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Yu(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,x,M,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),v(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,x,M):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Ut&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Ut&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),M=x.envMap,y=x.envMapRotation;M&&(g.envMap.value=M,Ri.copy(y),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(qv.makeRotationFromEuler(Ri)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=M*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Kv(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const y=M.program;i.uniformBlockBinding(x,y)}function c(x,M){let y=s[x.id];y===void 0&&(m(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",g));const w=M.program;i.updateUBOMapping(x,w);const E=e.render.frame;r[x.id]!==E&&(f(x),r[x.id]=E)}function h(x){const M=u();x.__bindingPointIndex=M;const y=n.createBuffer(),w=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=s[x.id],y=x.uniforms,w=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let E=0,b=y.length;E<b;E++){const T=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,A=T.length;S<A;S++){const _=T[S];if(p(_,E,S,w)===!0){const R=_.__offset,P=Array.isArray(_.value)?_.value:[_.value];let z=0;for(let O=0;O<P.length;O++){const L=P[O],U=v(L);typeof L=="number"||typeof L=="boolean"?(_.__data[0]=L,n.bufferSubData(n.UNIFORM_BUFFER,R+z,_.__data)):L.isMatrix3?(_.__data[0]=L.elements[0],_.__data[1]=L.elements[1],_.__data[2]=L.elements[2],_.__data[3]=0,_.__data[4]=L.elements[3],_.__data[5]=L.elements[4],_.__data[6]=L.elements[5],_.__data[7]=0,_.__data[8]=L.elements[6],_.__data[9]=L.elements[7],_.__data[10]=L.elements[8],_.__data[11]=0):(L.toArray(_.__data,z),z+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,_.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,M,y,w){const E=x.value,b=M+"_"+y;if(w[b]===void 0)return typeof E=="number"||typeof E=="boolean"?w[b]=E:w[b]=E.clone(),!0;{const T=w[b];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return w[b]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function m(x){const M=x.uniforms;let y=0;const w=16;for(let b=0,T=M.length;b<T;b++){const S=Array.isArray(M[b])?M[b]:[M[b]];for(let A=0,_=S.length;A<_;A++){const R=S[A],P=Array.isArray(R.value)?R.value:[R.value];for(let z=0,O=P.length;z<O;z++){const L=P[z],U=v(L),B=y%w,k=B%U.boundary,X=B+k;y+=k,X!==0&&w-X<U.storage&&(y+=w-X),R.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=U.storage}}}const E=y%w;return E>0&&(y+=w-E),x.__size=y,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function g(x){const M=x.target;M.removeEventListener("dispose",g);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Zv{constructor(e={}){const{canvas:t=Td(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,d=null;const x=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let w=!1;this._outputColorSpace=dt;let E=0,b=0,T=null,S=-1,A=null;const _=new wt,R=new wt;let P=null;const z=new Ze(0);let O=0,L=t.width,U=t.height,B=1,k=null,X=null;const K=new wt(0,0,L,U),oe=new wt(0,0,L,U);let we=!1;const be=new mr;let Se=!1,Z=!1;const ne=new tt,me=new W,le=new wt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function Ge(){return T===null?B:1}let N=i;function ze(I,Y){return t.getContext(I,Y)}try{const I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qi}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ae,!1),N===null){const Y="webgl2";if(N=ze(Y,I),N===null)throw ze(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Fe,Te,ue,Ve,Ee,ke,Je,$e,F,D,Q,ee,G,V,$,te,de,ge,he,xe,Ce,Me,ce,Be;function H(){Fe=new ag(N),Fe.init(),Me=new Gv(N,Fe),Te=new $0(N,Fe,e,Me),ue=new kv(N,Fe),Te.reversedDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),Ve=new cg(N),Ee=new Tv,ke=new Hv(N,Fe,ue,Ee,Te,Me,Ve),Je=new tg(y),$e=new rg(y),F=new mp(N),ce=new j0(N,F),D=new og(N,F,Ve,ce),Q=new ug(N,D,F,Ve),he=new hg(N,Te,ke),te=new eg(Ee),ee=new bv(y,Je,$e,Fe,Te,ce,te),G=new Qv(y,Ee),V=new Dv,$=new Uv(Fe),ge=new Z0(y,Je,$e,ue,Q,p,l),de=new Nv(y,Q,Te),Be=new Kv(N,Ve,Te,ue),xe=new J0(N,Fe,Ve),Ce=new lg(N,Fe,Ve),Ve.programs=ee.programs,y.capabilities=Te,y.extensions=Fe,y.properties=Ee,y.renderLists=V,y.shadowMap=de,y.state=ue,y.info=Ve}H();const pe=new Yv(y,N);this.xr=pe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const I=Fe.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Fe.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(I){I!==void 0&&(B=I,this.setSize(L,U,!1))},this.getSize=function(I){return I.set(L,U)},this.setSize=function(I,Y,j=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=I,U=Y,t.width=Math.floor(I*B),t.height=Math.floor(Y*B),j===!0&&(t.style.width=I+"px",t.style.height=Y+"px"),this.setViewport(0,0,I,Y)},this.getDrawingBufferSize=function(I){return I.set(L*B,U*B).floor()},this.setDrawingBufferSize=function(I,Y,j){L=I,U=Y,B=j,t.width=Math.floor(I*j),t.height=Math.floor(Y*j),this.setViewport(0,0,I,Y)},this.getCurrentViewport=function(I){return I.copy(_)},this.getViewport=function(I){return I.copy(K)},this.setViewport=function(I,Y,j,J){I.isVector4?K.set(I.x,I.y,I.z,I.w):K.set(I,Y,j,J),ue.viewport(_.copy(K).multiplyScalar(B).round())},this.getScissor=function(I){return I.copy(oe)},this.setScissor=function(I,Y,j,J){I.isVector4?oe.set(I.x,I.y,I.z,I.w):oe.set(I,Y,j,J),ue.scissor(R.copy(oe).multiplyScalar(B).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(I){ue.setScissorTest(we=I)},this.setOpaqueSort=function(I){k=I},this.setTransparentSort=function(I){X=I},this.getClearColor=function(I){return I.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(I=!0,Y=!0,j=!0){let J=0;if(I){let q=!1;if(T!==null){const ve=T.texture.format;q=ve===kl||ve===Ol||ve===Fl}if(q){const ve=T.texture.type,Re=ve===Et||ve===Hi||ve===cr||ve===bs||ve===Ul||ve===zl,Ue=ge.getClearColor(),Le=ge.getClearAlpha(),Xe=Ue.r,Ye=Ue.g,He=Ue.b;Re?(m[0]=Xe,m[1]=Ye,m[2]=He,m[3]=Le,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=Xe,v[1]=Ye,v[2]=He,v[3]=Le,N.clearBufferiv(N.COLOR,0,v))}else J|=N.COLOR_BUFFER_BIT}Y&&(J|=N.DEPTH_BUFFER_BIT),j&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ge.dispose(),V.dispose(),$.dispose(),Ee.dispose(),Je.dispose(),$e.dispose(),Q.dispose(),ce.dispose(),Be.dispose(),ee.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Lt),pe.removeEventListener("sessionend",Pn),_n.stop()};function fe(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const I=Ve.autoReset,Y=de.enabled,j=de.autoUpdate,J=de.needsUpdate,q=de.type;H(),Ve.autoReset=I,de.enabled=Y,de.autoUpdate=j,de.needsUpdate=J,de.type=q}function ae(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ie(I){const Y=I.target;Y.removeEventListener("dispose",ie),Ie(Y)}function Ie(I){Ne(I),Ee.remove(I)}function Ne(I){const Y=Ee.get(I).programs;Y!==void 0&&(Y.forEach(function(j){ee.releaseProgram(j)}),I.isShaderMaterial&&ee.releaseShaderCache(I))}this.renderBufferDirect=function(I,Y,j,J,q,ve){Y===null&&(Y=se);const Re=q.isMesh&&q.matrixWorld.determinant()<0,Ue=zf(I,Y,j,J,q);ue.setMaterial(J,Re);let Le=j.index,Xe=1;if(J.wireframe===!0){if(Le=D.getWireframeAttribute(j),Le===void 0)return;Xe=2}const Ye=j.drawRange,He=j.attributes.position;let et=Ye.start*Xe,xt=(Ye.start+Ye.count)*Xe;ve!==null&&(et=Math.max(et,ve.start*Xe),xt=Math.min(xt,(ve.start+ve.count)*Xe)),Le!==null?(et=Math.max(et,0),xt=Math.min(xt,Le.count)):He!=null&&(et=Math.max(et,0),xt=Math.min(xt,He.count));const Rt=xt-et;if(Rt<0||Rt===1/0)return;ce.setup(q,J,Ue,j,Le);let At,yt=xe;if(Le!==null&&(At=F.get(Le),yt=Ce,yt.setIndex(At)),q.isMesh)J.wireframe===!0?(ue.setLineWidth(J.wireframeLinewidth*Ge()),yt.setMode(N.LINES)):yt.setMode(N.TRIANGLES);else if(q.isLine){let We=J.linewidth;We===void 0&&(We=1),ue.setLineWidth(We*Ge()),q.isLineSegments?yt.setMode(N.LINES):q.isLineLoop?yt.setMode(N.LINE_LOOP):yt.setMode(N.LINE_STRIP)}else q.isPoints?yt.setMode(N.POINTS):q.isSprite&&yt.setMode(N.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))yt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const We=q._multiDrawStarts,Tt=q._multiDrawCounts,ot=q._multiDrawCount,cn=Le?F.get(Le).bytesPerElement:1,ji=Ee.get(J).currentProgram.getUniforms();for(let hn=0;hn<ot;hn++)ji.setValue(N,"_gl_DrawID",hn),yt.render(We[hn]/cn,Tt[hn])}else if(q.isInstancedMesh)yt.renderInstances(et,Rt,q.count);else if(j.isInstancedBufferGeometry){const We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Tt=Math.min(j.instanceCount,We);yt.renderInstances(et,Rt,Tt)}else yt.render(et,Rt)};function pt(I,Y,j){I.transparent===!0&&I.side===Qt&&I.forceSinglePass===!1?(I.side=Ut,I.needsUpdate=!0,vr(I,Y,j),I.side=kn,I.needsUpdate=!0,vr(I,Y,j),I.side=Qt):vr(I,Y,j)}this.compile=function(I,Y,j=null){j===null&&(j=I),d=$.get(j),d.init(Y),M.push(d),j.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),I!==j&&I.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),d.setupLights();const J=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ve=q.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){const Ue=ve[Re];pt(Ue,j,q),J.add(Ue)}else pt(ve,j,q),J.add(ve)}),d=M.pop(),J},this.compileAsync=function(I,Y,j=null){const J=this.compile(I,Y,j);return new Promise(q=>{function ve(){if(J.forEach(function(Re){Ee.get(Re).currentProgram.isReady()&&J.delete(Re)}),J.size===0){q(I);return}setTimeout(ve,10)}Fe.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let rt=null;function vn(I){rt&&rt(I)}function Lt(){_n.stop()}function Pn(){_n.start()}const _n=new Ju;_n.setAnimationLoop(vn),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(I){rt=I,pe.setAnimationLoop(I),I===null?_n.stop():_n.start()},pe.addEventListener("sessionstart",Lt),pe.addEventListener("sessionend",Pn),this.render=function(I,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(Y),Y=pe.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,Y,T),d=$.get(I,M.length),d.init(Y),M.push(d),ne.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),be.setFromProjectionMatrix(ne,Fn,Y.reversedDepth),Z=this.localClippingEnabled,Se=te.init(this.clippingPlanes,Z),g=V.get(I,x.length),g.init(),x.push(g),pe.enabled===!0&&pe.isPresenting===!0){const ve=y.xr.getDepthSensingMesh();ve!==null&&Zi(ve,Y,-1/0,y.sortObjects)}Zi(I,Y,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(k,X),Ae=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Ae&&ge.addToRenderList(g,I),this.info.render.frame++,Se===!0&&te.beginShadows();const j=d.state.shadowsArray;de.render(j,I,Y),Se===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,q=g.transmissive;if(d.setupLights(),Y.isArrayCamera){const ve=Y.cameras;if(q.length>0)for(let Re=0,Ue=ve.length;Re<Ue;Re++){const Le=ve[Re];vc(J,q,I,Le)}Ae&&ge.render(I);for(let Re=0,Ue=ve.length;Re<Ue;Re++){const Le=ve[Re];gc(g,I,Le,Le.viewport)}}else q.length>0&&vc(J,q,I,Y),Ae&&ge.render(I),gc(g,I,Y);T!==null&&b===0&&(ke.updateMultisampleRenderTarget(T),ke.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(y,I,Y),ce.resetDefaultState(),S=-1,A=null,M.pop(),M.length>0?(d=M[M.length-1],Se===!0&&te.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Zi(I,Y,j,J){if(I.visible===!1)return;if(I.layers.test(Y.layers)){if(I.isGroup)j=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Y);else if(I.isLight)d.pushLight(I),I.castShadow&&d.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||be.intersectsSprite(I)){J&&le.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ne);const Re=Q.update(I),Ue=I.material;Ue.visible&&g.push(I,Re,Ue,j,le.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||be.intersectsObject(I))){const Re=Q.update(I),Ue=I.material;if(J&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),le.copy(I.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),le.copy(Re.boundingSphere.center)),le.applyMatrix4(I.matrixWorld).applyMatrix4(ne)),Array.isArray(Ue)){const Le=Re.groups;for(let Xe=0,Ye=Le.length;Xe<Ye;Xe++){const He=Le[Xe],et=Ue[He.materialIndex];et&&et.visible&&g.push(I,Re,et,j,le.z,He)}}else Ue.visible&&g.push(I,Re,Ue,j,le.z,null)}}const ve=I.children;for(let Re=0,Ue=ve.length;Re<Ue;Re++)Zi(ve[Re],Y,j,J)}function gc(I,Y,j,J){const q=I.opaque,ve=I.transmissive,Re=I.transparent;d.setupLightsView(j),Se===!0&&te.setGlobalState(y.clippingPlanes,j),J&&ue.viewport(_.copy(J)),q.length>0&&gr(q,Y,j),ve.length>0&&gr(ve,Y,j),Re.length>0&&gr(Re,Y,j),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function vc(I,Y,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new vt(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Rn:Et,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const ve=d.state.transmissionRenderTarget[J.id],Re=J.viewport||_;ve.setSize(Re.z*y.transmissionResolutionScale,Re.w*y.transmissionResolutionScale);const Ue=y.getRenderTarget(),Le=y.getActiveCubeFace(),Xe=y.getActiveMipmapLevel();y.setRenderTarget(ve),y.getClearColor(z),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),Ae&&ge.render(j);const Ye=y.toneMapping;y.toneMapping=ei;const He=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),Se===!0&&te.setGlobalState(y.clippingPlanes,J),gr(I,j,J),ke.updateMultisampleRenderTarget(ve),ke.updateRenderTargetMipmap(ve),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let xt=0,Rt=Y.length;xt<Rt;xt++){const At=Y[xt],yt=At.object,We=At.geometry,Tt=At.material,ot=At.group;if(Tt.side===Qt&&yt.layers.test(J.layers)){const cn=Tt.side;Tt.side=Ut,Tt.needsUpdate=!0,xc(yt,j,J,We,Tt,ot),Tt.side=cn,Tt.needsUpdate=!0,et=!0}}et===!0&&(ke.updateMultisampleRenderTarget(ve),ke.updateRenderTargetMipmap(ve))}y.setRenderTarget(Ue,Le,Xe),y.setClearColor(z,O),He!==void 0&&(J.viewport=He),y.toneMapping=Ye}function gr(I,Y,j){const J=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,ve=I.length;q<ve;q++){const Re=I[q],Ue=Re.object,Le=Re.geometry,Xe=Re.group;let Ye=Re.material;Ye.allowOverride===!0&&J!==null&&(Ye=J),Ue.layers.test(j.layers)&&xc(Ue,Y,j,Le,Ye,Xe)}}function xc(I,Y,j,J,q,ve){I.onBeforeRender(y,Y,j,J,q,ve),I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(y,Y,j,J,I,ve),q.transparent===!0&&q.side===Qt&&q.forceSinglePass===!1?(q.side=Ut,q.needsUpdate=!0,y.renderBufferDirect(j,Y,J,q,I,ve),q.side=kn,q.needsUpdate=!0,y.renderBufferDirect(j,Y,J,q,I,ve),q.side=Qt):y.renderBufferDirect(j,Y,J,q,I,ve),I.onAfterRender(y,Y,j,J,q,ve)}function vr(I,Y,j){Y.isScene!==!0&&(Y=se);const J=Ee.get(I),q=d.state.lights,ve=d.state.shadowsArray,Re=q.state.version,Ue=ee.getParameters(I,q.state,ve,Y,j),Le=ee.getProgramCacheKey(Ue);let Xe=J.programs;J.environment=I.isMeshStandardMaterial?Y.environment:null,J.fog=Y.fog,J.envMap=(I.isMeshStandardMaterial?$e:Je).get(I.envMap||J.environment),J.envMapRotation=J.environment!==null&&I.envMap===null?Y.environmentRotation:I.envMapRotation,Xe===void 0&&(I.addEventListener("dispose",ie),Xe=new Map,J.programs=Xe);let Ye=Xe.get(Le);if(Ye!==void 0){if(J.currentProgram===Ye&&J.lightsStateVersion===Re)return yc(I,Ue),Ye}else Ue.uniforms=ee.getUniforms(I),I.onBeforeCompile(Ue,y),Ye=ee.acquireProgram(Ue,Le),Xe.set(Le,Ye),J.uniforms=Ue.uniforms;const He=J.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(He.clippingPlanes=te.uniform),yc(I,Ue),J.needsLights=Nf(I),J.lightsStateVersion=Re,J.needsLights&&(He.ambientLightColor.value=q.state.ambient,He.lightProbe.value=q.state.probe,He.directionalLights.value=q.state.directional,He.directionalLightShadows.value=q.state.directionalShadow,He.spotLights.value=q.state.spot,He.spotLightShadows.value=q.state.spotShadow,He.rectAreaLights.value=q.state.rectArea,He.ltc_1.value=q.state.rectAreaLTC1,He.ltc_2.value=q.state.rectAreaLTC2,He.pointLights.value=q.state.point,He.pointLightShadows.value=q.state.pointShadow,He.hemisphereLights.value=q.state.hemi,He.directionalShadowMap.value=q.state.directionalShadowMap,He.directionalShadowMatrix.value=q.state.directionalShadowMatrix,He.spotShadowMap.value=q.state.spotShadowMap,He.spotLightMatrix.value=q.state.spotLightMatrix,He.spotLightMap.value=q.state.spotLightMap,He.pointShadowMap.value=q.state.pointShadowMap,He.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=Ye,J.uniformsList=null,Ye}function Mc(I){if(I.uniformsList===null){const Y=I.currentProgram.getUniforms();I.uniformsList=ua.seqWithValue(Y.seq,I.uniforms)}return I.uniformsList}function yc(I,Y){const j=Ee.get(I);j.outputColorSpace=Y.outputColorSpace,j.batching=Y.batching,j.batchingColor=Y.batchingColor,j.instancing=Y.instancing,j.instancingColor=Y.instancingColor,j.instancingMorph=Y.instancingMorph,j.skinning=Y.skinning,j.morphTargets=Y.morphTargets,j.morphNormals=Y.morphNormals,j.morphColors=Y.morphColors,j.morphTargetsCount=Y.morphTargetsCount,j.numClippingPlanes=Y.numClippingPlanes,j.numIntersection=Y.numClipIntersection,j.vertexAlphas=Y.vertexAlphas,j.vertexTangents=Y.vertexTangents,j.toneMapping=Y.toneMapping}function zf(I,Y,j,J,q){Y.isScene!==!0&&(Y=se),ke.resetTextureUnits();const ve=Y.fog,Re=J.isMeshStandardMaterial?Y.environment:null,Ue=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:wi,Le=(J.isMeshStandardMaterial?$e:Je).get(J.envMap||Re),Xe=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ye=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),He=!!j.morphAttributes.position,et=!!j.morphAttributes.normal,xt=!!j.morphAttributes.color;let Rt=ei;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Rt=y.toneMapping);const At=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,yt=At!==void 0?At.length:0,We=Ee.get(J),Tt=d.state.lights;if(Se===!0&&(Z===!0||I!==A)){const Jt=I===A&&J.id===S;te.setState(J,I,Jt)}let ot=!1;J.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Tt.state.version||We.outputColorSpace!==Ue||q.isBatchedMesh&&We.batching===!1||!q.isBatchedMesh&&We.batching===!0||q.isBatchedMesh&&We.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&We.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&We.instancing===!1||!q.isInstancedMesh&&We.instancing===!0||q.isSkinnedMesh&&We.skinning===!1||!q.isSkinnedMesh&&We.skinning===!0||q.isInstancedMesh&&We.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&We.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&We.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&We.instancingMorph===!1&&q.morphTexture!==null||We.envMap!==Le||J.fog===!0&&We.fog!==ve||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==te.numPlanes||We.numIntersection!==te.numIntersection)||We.vertexAlphas!==Xe||We.vertexTangents!==Ye||We.morphTargets!==He||We.morphNormals!==et||We.morphColors!==xt||We.toneMapping!==Rt||We.morphTargetsCount!==yt)&&(ot=!0):(ot=!0,We.__version=J.version);let cn=We.currentProgram;ot===!0&&(cn=vr(J,Y,q));let ji=!1,hn=!1,zs=!1;const Ct=cn.getUniforms(),xn=We.uniforms;if(ue.useProgram(cn.program)&&(ji=!0,hn=!0,zs=!0),J.id!==S&&(S=J.id,hn=!0),ji||A!==I){ue.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ct.setValue(N,"projectionMatrix",I.projectionMatrix),Ct.setValue(N,"viewMatrix",I.matrixWorldInverse);const nn=Ct.map.cameraPosition;nn!==void 0&&nn.setValue(N,me.setFromMatrixPosition(I.matrixWorld)),Te.logarithmicDepthBuffer&&Ct.setValue(N,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ct.setValue(N,"isOrthographic",I.isOrthographicCamera===!0),A!==I&&(A=I,hn=!0,zs=!0)}if(q.isSkinnedMesh){Ct.setOptional(N,q,"bindMatrix"),Ct.setOptional(N,q,"bindMatrixInverse");const Jt=q.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Ct.setValue(N,"boneTexture",Jt.boneTexture,ke))}q.isBatchedMesh&&(Ct.setOptional(N,q,"batchingTexture"),Ct.setValue(N,"batchingTexture",q._matricesTexture,ke),Ct.setOptional(N,q,"batchingIdTexture"),Ct.setValue(N,"batchingIdTexture",q._indirectTexture,ke),Ct.setOptional(N,q,"batchingColorTexture"),q._colorsTexture!==null&&Ct.setValue(N,"batchingColorTexture",q._colorsTexture,ke));const Mn=j.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&he.update(q,j,cn),(hn||We.receiveShadow!==q.receiveShadow)&&(We.receiveShadow=q.receiveShadow,Ct.setValue(N,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(xn.envMap.value=Le,xn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&Y.environment!==null&&(xn.envMapIntensity.value=Y.environmentIntensity),hn&&(Ct.setValue(N,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&Ff(xn,zs),ve&&J.fog===!0&&G.refreshFogUniforms(xn,ve),G.refreshMaterialUniforms(xn,J,B,U,d.state.transmissionRenderTarget[I.id]),ua.upload(N,Mc(We),xn,ke)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ua.upload(N,Mc(We),xn,ke),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ct.setValue(N,"center",q.center),Ct.setValue(N,"modelViewMatrix",q.modelViewMatrix),Ct.setValue(N,"normalMatrix",q.normalMatrix),Ct.setValue(N,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Jt=J.uniformsGroups;for(let nn=0,Fa=Jt.length;nn<Fa;nn++){const _i=Jt[nn];Be.update(_i,cn),Be.bind(_i,cn)}}return cn}function Ff(I,Y){I.ambientLightColor.needsUpdate=Y,I.lightProbe.needsUpdate=Y,I.directionalLights.needsUpdate=Y,I.directionalLightShadows.needsUpdate=Y,I.pointLights.needsUpdate=Y,I.pointLightShadows.needsUpdate=Y,I.spotLights.needsUpdate=Y,I.spotLightShadows.needsUpdate=Y,I.rectAreaLights.needsUpdate=Y,I.hemisphereLights.needsUpdate=Y}function Nf(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,Y,j){const J=Ee.get(I);J.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Ee.get(I.texture).__webglTexture=Y,Ee.get(I.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,Y){const j=Ee.get(I);j.__webglFramebuffer=Y,j.__useDefaultFramebuffer=Y===void 0};const Of=N.createFramebuffer();this.setRenderTarget=function(I,Y=0,j=0){T=I,E=Y,b=j;let J=!0,q=null,ve=!1,Re=!1;if(I){const Le=Ee.get(I);if(Le.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(N.FRAMEBUFFER,null),J=!1;else if(Le.__webglFramebuffer===void 0)ke.setupRenderTarget(I);else if(Le.__hasExternalTextures)ke.rebindTextures(I,Ee.get(I.texture).__webglTexture,Ee.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const He=I.depthTexture;if(Le.__boundDepthTexture!==He){if(He!==null&&Ee.has(He)&&(I.width!==He.image.width||I.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(I)}}const Xe=I.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Re=!0);const Ye=Ee.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ye[Y])?q=Ye[Y][j]:q=Ye[Y],ve=!0):I.samples>0&&ke.useMultisampledRTT(I)===!1?q=Ee.get(I).__webglMultisampledFramebuffer:Array.isArray(Ye)?q=Ye[j]:q=Ye,_.copy(I.viewport),R.copy(I.scissor),P=I.scissorTest}else _.copy(K).multiplyScalar(B).floor(),R.copy(oe).multiplyScalar(B).floor(),P=we;if(j!==0&&(q=Of),ue.bindFramebuffer(N.FRAMEBUFFER,q)&&J&&ue.drawBuffers(I,q),ue.viewport(_),ue.scissor(R),ue.setScissorTest(P),ve){const Le=Ee.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Le.__webglTexture,j)}else if(Re){const Le=Y;for(let Xe=0;Xe<I.textures.length;Xe++){const Ye=Ee.get(I.textures[Xe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Xe,Ye.__webglTexture,j,Le)}}else if(I!==null&&j!==0){const Le=Ee.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Le.__webglTexture,j)}S=-1},this.readRenderTargetPixels=function(I,Y,j,J,q,ve,Re,Ue=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ee.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){ue.bindFramebuffer(N.FRAMEBUFFER,Le);try{const Xe=I.textures[Ue],Ye=Xe.format,He=Xe.type;if(!Te.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=I.width-J&&j>=0&&j<=I.height-q&&(I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ue),N.readPixels(Y,j,J,q,Me.convert(Ye),Me.convert(He),ve))}finally{const Xe=T!==null?Ee.get(T).__webglFramebuffer:null;ue.bindFramebuffer(N.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(I,Y,j,J,q,ve,Re,Ue=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ee.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le)if(Y>=0&&Y<=I.width-J&&j>=0&&j<=I.height-q){ue.bindFramebuffer(N.FRAMEBUFFER,Le);const Xe=I.textures[Ue],Ye=Xe.format,He=Xe.type;if(!Te.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.bufferData(N.PIXEL_PACK_BUFFER,ve.byteLength,N.STREAM_READ),I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ue),N.readPixels(Y,j,J,q,Me.convert(Ye),Me.convert(He),0);const xt=T!==null?Ee.get(T).__webglFramebuffer:null;ue.bindFramebuffer(N.FRAMEBUFFER,xt);const Rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Cd(N,Rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ve),N.deleteBuffer(et),N.deleteSync(Rt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,Y=null,j=0){const J=Math.pow(2,-j),q=Math.floor(I.image.width*J),ve=Math.floor(I.image.height*J),Re=Y!==null?Y.x:0,Ue=Y!==null?Y.y:0;ke.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,Re,Ue,q,ve),ue.unbindTexture()};const kf=N.createFramebuffer(),Hf=N.createFramebuffer();this.copyTextureToTexture=function(I,Y,j=null,J=null,q=0,ve=null){ve===null&&(q!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=q,q=0):ve=0);let Re,Ue,Le,Xe,Ye,He,et,xt,Rt;const At=I.isCompressedTexture?I.mipmaps[ve]:I.image;if(j!==null)Re=j.max.x-j.min.x,Ue=j.max.y-j.min.y,Le=j.isBox3?j.max.z-j.min.z:1,Xe=j.min.x,Ye=j.min.y,He=j.isBox3?j.min.z:0;else{const Mn=Math.pow(2,-q);Re=Math.floor(At.width*Mn),Ue=Math.floor(At.height*Mn),I.isDataArrayTexture?Le=At.depth:I.isData3DTexture?Le=Math.floor(At.depth*Mn):Le=1,Xe=0,Ye=0,He=0}J!==null?(et=J.x,xt=J.y,Rt=J.z):(et=0,xt=0,Rt=0);const yt=Me.convert(Y.format),We=Me.convert(Y.type);let Tt;Y.isData3DTexture?(ke.setTexture3D(Y,0),Tt=N.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ke.setTexture2DArray(Y,0),Tt=N.TEXTURE_2D_ARRAY):(ke.setTexture2D(Y,0),Tt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment);const ot=N.getParameter(N.UNPACK_ROW_LENGTH),cn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ji=N.getParameter(N.UNPACK_SKIP_PIXELS),hn=N.getParameter(N.UNPACK_SKIP_ROWS),zs=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,At.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,At.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Xe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,He);const Ct=I.isDataArrayTexture||I.isData3DTexture,xn=Y.isDataArrayTexture||Y.isData3DTexture;if(I.isDepthTexture){const Mn=Ee.get(I),Jt=Ee.get(Y),nn=Ee.get(Mn.__renderTarget),Fa=Ee.get(Jt.__renderTarget);ue.bindFramebuffer(N.READ_FRAMEBUFFER,nn.__webglFramebuffer),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,Fa.__webglFramebuffer);for(let _i=0;_i<Le;_i++)Ct&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.get(I).__webglTexture,q,He+_i),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.get(Y).__webglTexture,ve,Rt+_i)),N.blitFramebuffer(Xe,Ye,Re,Ue,et,xt,Re,Ue,N.DEPTH_BUFFER_BIT,N.NEAREST);ue.bindFramebuffer(N.READ_FRAMEBUFFER,null),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(q!==0||I.isRenderTargetTexture||Ee.has(I)){const Mn=Ee.get(I),Jt=Ee.get(Y);ue.bindFramebuffer(N.READ_FRAMEBUFFER,kf),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,Hf);for(let nn=0;nn<Le;nn++)Ct?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mn.__webglTexture,q,He+nn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Mn.__webglTexture,q),xn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Jt.__webglTexture,ve,Rt+nn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Jt.__webglTexture,ve),q!==0?N.blitFramebuffer(Xe,Ye,Re,Ue,et,xt,Re,Ue,N.COLOR_BUFFER_BIT,N.NEAREST):xn?N.copyTexSubImage3D(Tt,ve,et,xt,Rt+nn,Xe,Ye,Re,Ue):N.copyTexSubImage2D(Tt,ve,et,xt,Xe,Ye,Re,Ue);ue.bindFramebuffer(N.READ_FRAMEBUFFER,null),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else xn?I.isDataTexture||I.isData3DTexture?N.texSubImage3D(Tt,ve,et,xt,Rt,Re,Ue,Le,yt,We,At.data):Y.isCompressedArrayTexture?N.compressedTexSubImage3D(Tt,ve,et,xt,Rt,Re,Ue,Le,yt,At.data):N.texSubImage3D(Tt,ve,et,xt,Rt,Re,Ue,Le,yt,We,At):I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ve,et,xt,Re,Ue,yt,We,At.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ve,et,xt,At.width,At.height,yt,At.data):N.texSubImage2D(N.TEXTURE_2D,ve,et,xt,Re,Ue,yt,We,At);N.pixelStorei(N.UNPACK_ROW_LENGTH,ot),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,cn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ji),N.pixelStorei(N.UNPACK_SKIP_ROWS,hn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,zs),ve===0&&Y.generateMipmaps&&N.generateMipmap(Tt),ue.unbindTexture()},this.initRenderTarget=function(I){Ee.get(I).__webglFramebuffer===void 0&&ke.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?ke.setTextureCube(I,0):I.isData3DTexture?ke.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?ke.setTexture2DArray(I,0):ke.setTexture2D(I,0),ue.unbindTexture()},this.resetState=function(){E=0,b=0,T=null,ue.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const C=.5,re=32,Dt=2,it=4,mt=128,wh={seed:1337,chunksX:8,chunksY:4,chunksZ:8,seaLevel:22};function st(n,e,t){return(n*1024+e)*1024+t}const jv=0,Ds=1,Xi=2,Yi=3,Rs=4,gn=5,Jn=6,Oi=7,Ql=8,Kl=9,Zl=10,jl=11,Jl=12,$l=13,ec=14,sf=15,Pa=16,tc=17,Is=18,nc=19,Jv=20,ic=21,$v=22,sc=23,e1=24,An=25,_a=26,La=27,bt=[{id:jv,name:"air",albedo:[0,0,0],roughness:1,metalness:0,pattern:"stone",scale:1,placeable:!1,hard:!1},{id:Ds,name:"stone",albedo:[.42,.41,.4],roughness:.85,metalness:0,pattern:"stone",scale:3,placeable:!0,hard:!1},{id:Xi,name:"dirt",albedo:[.3,.21,.14],roughness:.95,metalness:0,pattern:"dirt",scale:2,placeable:!0,hard:!1},{id:Yi,name:"grass",albedo:[.22,.38,.12],roughness:.9,metalness:0,pattern:"grass",scale:2,placeable:!0,hard:!1},{id:Rs,name:"sand",albedo:[.76,.66,.48],roughness:.9,metalness:0,pattern:"sand",scale:1.5,placeable:!0,hard:!1,repose:34},{id:gn,name:"snow",albedo:[.92,.94,.97],roughness:.6,metalness:0,pattern:"snow",scale:2,placeable:!0,hard:!1},{id:Jn,name:"wood",albedo:[.4,.26,.14],roughness:.8,metalness:0,pattern:"wood",scale:1,placeable:!0,hard:!1},{id:Oi,name:"leaves",albedo:[.16,.34,.1],roughness:.8,metalness:0,pattern:"leaves",scale:1,placeable:!0,hard:!1},{id:Ql,name:"brick",albedo:[.56,.26,.18],roughness:.8,metalness:0,pattern:"clay",scale:1,placeable:!0,hard:!0},{id:Kl,name:"marble",albedo:[.93,.92,.9],roughness:.32,metalness:0,pattern:"marble",scale:2.5,placeable:!0,hard:!1},{id:Zl,name:"obsidian",albedo:[.02,.02,.03],roughness:.08,metalness:.05,pattern:"obsidian",scale:2,placeable:!0,hard:!1},{id:jl,name:"lantern",albedo:[.9,.75,.5],roughness:.5,metalness:0,pattern:"glow",scale:1,emissive:[1.7,1.15,.5],placeable:!0,hard:!0},{id:Jl,name:"moss",albedo:[.2,.3,.12],roughness:.95,metalness:0,pattern:"moss",scale:1.5,placeable:!0,hard:!1},{id:$l,name:"planks",albedo:[.55,.38,.2],roughness:.7,metalness:0,pattern:"planks",scale:1,placeable:!0,hard:!0},{id:ec,name:"cobble",albedo:[.45,.44,.42],roughness:.9,metalness:0,pattern:"cobble",scale:1,placeable:!0,hard:!0},{id:sf,name:"torch",albedo:[.3,.2,.1],roughness:.85,metalness:0,pattern:"torch",scale:.5,emissive:[20,10,3.1],placeable:!0,hard:!0,solid:!1},{id:Pa,name:"lamp",albedo:[.25,.25,.28],roughness:.5,metalness:.3,pattern:"obsidian",scale:.5,emissive:[16,15.5,12.8],placeable:!0,hard:!0,solid:!1},{id:tc,name:"goat",albedo:[.62,.55,.44],roughness:.95,metalness:0,pattern:"fur",scale:.35,placeable:!0,hard:!1,spawn:"goat"},{id:Is,name:"anchor",albedo:[.2,.07,.34],roughness:.35,metalness:.1,pattern:"anchor",scale:1,emissive:[.1,.03,.22],placeable:!0,hard:!0},{id:nc,name:"penguin",albedo:[.07,.07,.09],roughness:.8,metalness:0,pattern:"fur",scale:.3,placeable:!0,hard:!1,spawn:"penguin"},{id:Jv,name:"plumage",albedo:[.92,.91,.86],roughness:.75,metalness:0,pattern:"fur",scale:.3,placeable:!1,hard:!1},{id:ic,name:"fish",albedo:[.88,.42,.1],roughness:.35,metalness:.1,pattern:"scales",scale:.25,placeable:!0,hard:!1,spawn:"fish"},{id:$v,name:"fin",albedo:[.95,.62,.22],roughness:.3,metalness:.05,pattern:"scales",scale:.15,placeable:!1,hard:!1},{id:sc,name:"cat",albedo:[.42,.38,.35],roughness:.95,metalness:0,pattern:"fur",scale:.3,placeable:!0,hard:!1,spawn:"cat"},{id:e1,name:"muzzle",albedo:[.85,.82,.78],roughness:.95,metalness:0,pattern:"fur",scale:.3,placeable:!1,hard:!1},{id:An,name:"ice",albedo:[.8,.9,.97],roughness:.1,metalness:0,pattern:"ice",scale:2,placeable:!0,hard:!1},{id:_a,name:"water",albedo:[.16,.38,.62],roughness:.1,metalness:0,pattern:"water",scale:1,placeable:!0,hard:!1},{id:La,name:"sponge",albedo:[.86,.78,.3],roughness:.9,metalness:0,pattern:"sand",scale:1,placeable:!0,hard:!1}],t1=[Ds,Xi,Yi,Rs,Jn,Oi,Ql,$l,ec,Kl,Zl,An,_a,La,sf,Pa,jl,gn,Jl,tc,nc,ic,sc,Is],dn=t1.map(n=>bt[n]);bt.length;function $n(n){return bt[n]?.hard??!1}function ht(n){const e=bt[n];return!!e&&e.hard&&e.solid!==!1}const Gt=134217727,gt=3;function rf(n){let e=0;for(;n;)n&=n-1,e++;return e}class Ba{ox;oy;oz;nx;ny;nz;density;material;hard;sub;water;sy;sx;constructor(e,t,i,s=0,r=0,a=0,o,l,c,h,u){this.nx=e,this.ny=t,this.nz=i,this.ox=s,this.oy=r,this.oz=a,this.sy=i,this.sx=t*i,this.density=o??new Float32Array(e*t*i).fill(-it),this.material=l??new Uint8Array(e*t*i),this.hard=c??new Uint8Array(e*t*i),this.sub=h??new Uint32Array(e*t*i),this.water=u??new Uint8Array(e*t*i)}waterAt(e,t,i){const s=Math.floor(e/C),r=Math.floor(t/C),a=Math.floor(i/C);if(!this.inBounds(s,r,a))return!1;const o=this.water[this.index(s,r,a)];return o===0?!1:t-r*C<=Math.min(o,mt)/mt*C}subMask(e,t,i){if(!this.inBounds(e,t,i))return 0;const s=this.index(e,t,i);if(this.hard[s]===0)return 0;const r=this.sub[s];return r===0?Gt:r}subOccupied(e,t,i,s,r,a){return(this.subMask(e,t,i)&1<<s+3*(r+3*a))!==0}solidFraction(e,t,i){const s=this.subMask(e,t,i);return s===0?0:s===Gt?1:rf(s)/27}hardOccupiedAt(e,t,i){const s=Math.floor(e/C),r=Math.floor(t/C),a=Math.floor(i/C),o=this.subMask(s,r,a);if(o===0)return!1;if(o===Gt)return!0;const l=Math.min(2,Math.floor((e/C-s)*3)),c=Math.min(2,Math.floor((t/C-r)*3)),h=Math.min(2,Math.floor((i/C-a)*3));return(o&1<<l+3*(c+3*h))!==0}getHard(e,t,i){return this.inBounds(e,t,i)?this.hard[this.index(e,t,i)]:0}setHard(e,t,i,s){this.inBounds(e,t,i)&&(this.hard[this.index(e,t,i)]=s)}hardAt(e,t,i){return this.getHard(Math.floor(e/C),Math.floor(t/C),Math.floor(i/C))}solidAt(e,t,i){return ht(this.hardAt(e,t,i))&&this.hardOccupiedAt(e,t,i)||this.sampleNearest(e,t,i)>0}index(e,t,i){return(e-this.ox)*this.sx+(t-this.oy)*this.sy+(i-this.oz)}inBounds(e,t,i){return e>=this.ox&&t>=this.oy&&i>=this.oz&&e<this.ox+this.nx&&t<this.oy+this.ny&&i<this.oz+this.nz}get(e,t,i){return this.inBounds(e,t,i)?this.density[this.index(e,t,i)]:-it}getMaterial(e,t,i){return this.inBounds(e,t,i)?this.material[this.index(e,t,i)]:0}set(e,t,i,s,r){if(!this.inBounds(e,t,i))return;const a=this.index(e,t,i);this.density[a]=s<-it?-it:s>it?it:s,r!==void 0&&(this.material[a]=r)}sample(e,t,i){const s=e/C-this.ox,r=t/C-this.oy,a=i/C-this.oz;let o=Math.floor(s),l=Math.floor(r),c=Math.floor(a),h=s-o,u=r-l,f=a-c;o<0?(o=0,h=0):o>=this.nx-1&&(o=this.nx-2,h=1),l<0?(l=0,u=0):l>=this.ny-1&&(l=this.ny-2,u=1),c<0?(c=0,f=0):c>=this.nz-1&&(c=this.nz-2,f=1);const p=this.density,m=this.sx,v=this.sy,g=o*m+l*v+c,d=p[g]+(p[g+m]-p[g])*h,x=p[g+1]+(p[g+m+1]-p[g+1])*h,M=p[g+v]+(p[g+m+v]-p[g+v])*h,y=p[g+v+1]+(p[g+m+v+1]-p[g+v+1])*h,w=d+(M-d)*u,E=x+(y-x)*u;return w+(E-w)*f}sampleNearest(e,t,i){const s=Math.round(e/C),r=Math.round(t/C),a=Math.round(i/C);return this.get(s,r,a)}gradient(e,t,i,s=[0,0,0],r=C*.5){return s[0]=this.sample(e+r,t,i)-this.sample(e-r,t,i),s[1]=this.sample(e,t+r,i)-this.sample(e,t-r,i),s[2]=this.sample(e,t,i+r)-this.sample(e,t,i-r),s}materialAt(e,t,i){const s=Math.floor(e/C),r=Math.floor(t/C),a=Math.floor(i/C);let o=-1/0,l=0;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){const f=this.get(s+c,r+h,a+u);f>o&&(o=f,l=this.getMaterial(s+c,r+h,a+u))}return l}extract(e,t,i,s,r,a){const o=new Ba(s,r,a,e,t,i),l=o.density,c=o.material;for(let h=0;h<s;h++){const u=e+h,f=u>=this.ox&&u<this.ox+this.nx;for(let p=0;p<r;p++){const m=t+p,v=m>=this.oy&&m<this.oy+this.ny,g=h*r*a+p*a;if(!f||!v)continue;const d=Math.max(i,this.oz),x=Math.min(i+a,this.oz+this.nz);if(x<=d)continue;const M=this.index(u,m,d),y=x-d;l.set(this.density.subarray(M,M+y),g+(d-i)),c.set(this.material.subarray(M,M+y),g+(d-i)),o.hard.set(this.hard.subarray(M,M+y),g+(d-i)),o.sub.set(this.sub.subarray(M,M+y),g+(d-i)),o.water.set(this.water.subarray(M,M+y),g+(d-i))}}return o}get sizeX(){return(this.nx-1)*C}get sizeY(){return(this.ny-1)*C}get sizeZ(){return(this.nz-1)*C}}const n1=2;function af(n){const e=Math.round(n1/C),t=Math.floor((n.nx-1)/2)-(e>>1),i=Math.floor((n.nz-1)/2)-(e>>1);return{x0:t,y0:0,z0:i,x1:t+e,y1:e,z1:i+e}}function rr(n,e,t,i){const s=af(n);return e>=s.x0&&e<s.x1&&t>=s.y0&&t<s.y1&&i>=s.z0&&i<s.z1}function i1(n){const e=af(n);let t=0;for(let i=e.x0;i<e.x1;i++)for(let s=e.y0;s<e.y1;s++)for(let r=e.z0;r<e.z1;r++){const a=n.index(i,s,r);n.hard[a]===Is&&n.sub[a]===0||(n.hard[a]=Is,n.sub[a]=0,t++)}return t}function wl(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function vo(n,e,t){let i=Math.imul(n|0,668265261)^Math.imul(e|0,374761393)^Math.imul(t|0,2654435761);return i=Math.imul(i^i>>>15,2246822507),i=Math.imul(i^i>>>13,3266489909),((i^i>>>16)>>>0)/4294967296}const Ii=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],s1=.5*(Math.sqrt(3)-1),Ws=(3-Math.sqrt(3))/6,r1=1/3,Ln=1/6;class Sh{perm=new Uint8Array(512);permMod12=new Uint8Array(512);constructor(e){const t=new Uint8Array(256);for(let s=0;s<256;s++)t[s]=s;const i=wl(e);for(let s=255;s>0;s--){const r=Math.floor(i()*(s+1)),a=t[s];t[s]=t[r],t[r]=a}for(let s=0;s<512;s++)this.perm[s]=t[s&255],this.permMod12[s]=this.perm[s]%12}noise2(e,t){const i=this.perm,s=this.permMod12;let r=0,a=0,o=0;const l=(e+t)*s1,c=Math.floor(e+l),h=Math.floor(t+l),u=(c+h)*Ws,f=e-(c-u),p=t-(h-u);let m,v;f>p?(m=1,v=0):(m=0,v=1);const g=f-m+Ws,d=p-v+Ws,x=f-1+2*Ws,M=p-1+2*Ws,y=c&255,w=h&255,E=s[y+i[w]],b=s[y+m+i[w+v]],T=s[y+1+i[w+1]];let S=.5-f*f-p*p;if(S>=0){S*=S;const R=Ii[E];r=S*S*(R[0]*f+R[1]*p)}let A=.5-g*g-d*d;if(A>=0){A*=A;const R=Ii[b];a=A*A*(R[0]*g+R[1]*d)}let _=.5-x*x-M*M;if(_>=0){_*=_;const R=Ii[T];o=_*_*(R[0]*x+R[1]*M)}return 70*(r+a+o)}noise3(e,t,i){const s=this.perm,r=this.permMod12;let a=0,o=0,l=0,c=0;const h=(e+t+i)*r1,u=Math.floor(e+h),f=Math.floor(t+h),p=Math.floor(i+h),m=(u+f+p)*Ln,v=e-(u-m),g=t-(f-m),d=i-(p-m);let x,M,y,w,E,b;v>=g?g>=d?(x=1,M=0,y=0,w=1,E=1,b=0):v>=d?(x=1,M=0,y=0,w=1,E=0,b=1):(x=0,M=0,y=1,w=1,E=0,b=1):g<d?(x=0,M=0,y=1,w=0,E=1,b=1):v<d?(x=0,M=1,y=0,w=0,E=1,b=1):(x=0,M=1,y=0,w=1,E=1,b=0);const T=v-x+Ln,S=g-M+Ln,A=d-y+Ln,_=v-w+2*Ln,R=g-E+2*Ln,P=d-b+2*Ln,z=v-1+3*Ln,O=g-1+3*Ln,L=d-1+3*Ln,U=u&255,B=f&255,k=p&255,X=r[U+s[B+s[k]]],K=r[U+x+s[B+M+s[k+y]]],oe=r[U+w+s[B+E+s[k+b]]],we=r[U+1+s[B+1+s[k+1]]];let be=.6-v*v-g*g-d*d;if(be>=0){be*=be;const me=Ii[X];a=be*be*(me[0]*v+me[1]*g+me[2]*d)}let Se=.6-T*T-S*S-A*A;if(Se>=0){Se*=Se;const me=Ii[K];o=Se*Se*(me[0]*T+me[1]*S+me[2]*A)}let Z=.6-_*_-R*R-P*P;if(Z>=0){Z*=Z;const me=Ii[oe];l=Z*Z*(me[0]*_+me[1]*R+me[2]*P)}let ne=.6-z*z-O*O-L*L;if(ne>=0){ne*=ne;const me=Ii[we];c=ne*ne*(me[0]*z+me[1]*O+me[2]*L)}return 32*(a+o+l+c)}fbm2(e,t,i,s=2,r=.5){let a=0,o=1,l=1,c=0;for(let h=0;h<i;h++)a+=o*this.noise2(e*l,t*l),c+=o,o*=r,l*=s;return a/c}fbm3(e,t,i,s,r=2,a=.5){let o=0,l=1,c=1,h=0;for(let u=0;u<s;u++)o+=l*this.noise3(e*c,t*c,i*c),h+=l,l*=a,c*=r;return o/h}ridged2(e,t,i){let s=0,r=.5,a=1,o=1;for(let l=0;l<i;l++){let c=1-Math.abs(this.noise2(e*a,t*a));c*=c*o,o=Math.min(1,Math.max(0,c*2)),s+=c*r,r*=.5,a*=2}return Math.min(1,s)}}class Ah{constructor(e){this.cfg=e,this.n=new Sh(e.seed),this.n2=new Sh(e.seed^1540483477)}n;n2;height(e,t){const i=this.n,s=i.fbm2(e/260,t/260,4),r=_h(-.15,.55,s),a=i.ridged2(e/110+31.7,t/110-12.3,4),o=i.fbm2(e/34+7.1,t/34+3.3,3),l=i.fbm2(e/9,t/9,2);let c=this.cfg.seaLevel+4+s*12;return c+=Math.pow(a,1.6)*30*r,c+=o*4+l*.8,c}heightInfo(e,t){const i=this.height(e,t),s=.75,r=(this.height(e+s,t)-this.height(e-s,t))/(2*s),a=(this.height(e,t+s)-this.height(e,t-s))/(2*s);return{height:i,slope:Math.hypot(r,a)}}generate(e,t=!0){const{nx:i,ny:s,nz:r}=e,a=this.n,o=this.n2,l=this.cfg.seaLevel,c=14;for(let h=0;h<i;h++){const u=(e.ox+h)*C;for(let f=0;f<r;f++){const p=(e.oz+f)*C,{height:m,slope:v}=this.heightInfo(u,p),g=50+a.noise2(u/40,p/40)*3,d=v>1+a.noise2(u/6,p/6)*.25;for(let x=0;x<s;x++){const M=(e.oy+x)*C;let y=m-M;if(Math.abs(y)<c){const T=a.fbm3(u/22,M/22,p/22,3);if(y+=T*(1.5+Math.min(v,2)*2),M<m-3&&M>3){const S=o.noise3(u/24,M/16,p/24),A=o.noise3(u/24+71.3,M/16+11.9,p/24-40.1),R=(Math.sqrt(S*S+A*A)-.11)*18,P=_h(m-3,m-8,M),z=R+(1-P)*100;z<y&&(y=z)}}y=y>it?it:y<-it?-it:y,e.oy+x>=this.cfg.chunksY*re&&(y=-it);const w=m-M;let E;M>g&&w<3?E=gn:d&&w<6?E=Ds:w<1.2?E=M<l+1.5?Rs:Yi:w<4.5?E=M<l+1?Rs:Xi:E=Ds;const b=e.index(e.ox+h,e.oy+x,e.oz+f);e.density[b]=y,e.material[b]=E}}}t&&this.plantTrees(e)}treeSites(e,t){const i=this.cfg.seaLevel,s=[];for(let r=4;r<e-4;r+=2)for(let a=4;a<t-4;a+=2){const o=vo(r,a,this.cfg.seed),l=this.n.fbm2(r/70+200,a/70+200,2);if(o>.045+l*.06)continue;const{height:c,slope:h}=this.heightInfo(r,a);c<i+2.5||h>.7||c>46||s.push({x:r,z:a,trunkH:3.5+vo(r+17,a+5,this.cfg.seed)*3,canopyR:2+vo(r+3,a+29,this.cfg.seed)*1.2})}return s}siteGround(e,t){return this.groundAt(e,t.x,t.z,this.heightInfo(t.x,t.z).height+3)}groundAt(e,t,i,s){const r=Math.floor(t/C),a=Math.floor(i/C);for(let o=Math.min(e.sizeY-1.5,s);o>this.cfg.seaLevel;o-=C){if(e.sample(t,o,i)<=0)continue;const l=e.getMaterial(r,Math.floor(o/C),a);if(!(l===Jn||l===Oi))return o}return-1}plantTreeAt(e,t,i=1,s=this.siteGround(e,t)){if(s<0)return null;const r=t.trunkH*i,a=t.canopyR*(.3+.7*i);this.stampSphereUnion(e,t.x,s+r+a*.5,t.z,a,Oi,.6*i),this.stampCylinderUnion(e,t.x,s-.5,t.z,r+a*.6,.42*(.6+.4*i),Jn);const o=a+1.5;return{x0:Math.max(0,Math.floor((t.x-o)/C)),y0:Math.max(0,Math.floor((s-1)/C)),z0:Math.max(0,Math.floor((t.z-o)/C)),x1:Math.min(e.nx-1,Math.ceil((t.x+o)/C)),y1:Math.min(e.ny-1,Math.ceil((s+r+a*1.5+1)/C)),z1:Math.min(e.nz-1,Math.ceil((t.z+o)/C))}}plantTrees(e){for(const t of this.treeSites(e.sizeX,e.sizeZ))this.plantTreeAt(e,t,1)}treeGrowth(e,t,i){if(i<0)return 0;const s=Math.floor(t.x/C),r=Math.floor(t.z/C),a=Math.max(0,Math.floor((i-.5)/C)),o=Math.min(e.ny-1,Math.ceil((i+1)/C)),l=Math.min(e.ny-1,Math.ceil((i+t.trunkH+t.canopyR*1.5+1)/C));let c=!1,h=i,u=i;for(let m=a;m<=l;m++)for(let v=0;v<=1;v++)for(let g=0;g<=1;g++){const d=s+v,x=r+g;if(!e.inBounds(d,m,x))continue;const M=e.index(d,m,x);if(e.density[M]<=0)continue;const y=e.material[M];y===Jn&&m<=o&&(c=!0),y===Jn&&(h=Math.max(h,m*C)),(y===Jn||y===Oi)&&(u=Math.max(u,m*C))}if(!c)return 0;const f=Math.min(1,Math.max(0,h-i)/(t.trunkH+t.canopyR*.6)),p=Math.min(1,Math.max(0,u-i)/(t.trunkH+t.canopyR*1.5));return f>=.7&&p>=.85?Math.max(f,.9):f}siteFree(e,t,i){if(i<0||i<this.cfg.seaLevel+1)return!1;const s=Math.floor(t.x/C),r=Math.floor(t.z/C);if(e.hardAt(t.x,i-.2,t.z)!==0||e.waterAt(t.x,i+.3,t.z))return!1;for(let a=i+.6;a<i+t.trunkH+1;a+=C){if(e.hardAt(t.x,a,t.z)!==0)return!1;if(e.sample(t.x,a,t.z)>0){const o=e.getMaterial(s,Math.floor(a/C),r);if(o!==Jn&&o!==Oi)return!1}}return!0}stampSphereUnion(e,t,i,s,r,a,o){const l=Math.floor((t-r-1)/C),c=Math.ceil((t+r+1)/C),h=Math.floor((i-r-1)/C),u=Math.ceil((i+r+1)/C),f=Math.floor((s-r-1)/C),p=Math.ceil((s+r+1)/C);for(let m=l;m<=c;m++)for(let v=h;v<=u;v++)for(let g=f;g<=p;g++){if(!e.inBounds(m,v,g))continue;const d=m*C,x=v*C,M=g*C,y=Math.hypot(d-t,(x-i)*1.15,M-s),w=o*this.n2.noise3(d*1.3,x*1.3,M*1.3),E=r-y+w,b=e.index(m,v,g);E>e.density[b]&&(e.density[b]=Math.min(E,it)),E>-C&&(e.material[b]=a)}}stampCylinderUnion(e,t,i,s,r,a,o,l=i+.5){const c=Math.floor((t-a-1)/C),h=Math.ceil((t+a+1)/C),u=Math.floor((s-a-1)/C),f=Math.ceil((s+a+1)/C),p=Math.floor(i/C),m=Math.ceil((i+r)/C);for(let v=c;v<=h;v++)for(let g=p;g<=m;g++)for(let d=u;d<=f;d++){if(!e.inBounds(v,g,d))continue;const x=v*C,M=g*C,y=d*C,w=a-Math.hypot(x-t,y-s),E=Math.min(M-i,i+r-M),b=Math.min(w,E),T=e.index(v,g,d);b>e.density[T]&&(e.density[T]=Math.min(b,it)),b>-C*.6&&M>=l-1e-6&&(e.material[T]=o)}}}function _h(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const rc=2,Xs=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],Eh=(n,e)=>[n[0]*e,n[1]*e,n[2]*e];function Gr(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function bh(n){const e=(n-6)/24*Math.PI*2,t=Math.cos(e),i=Math.sin(e),s=Math.hypot(t,i,.35);let r=[t/s,i/s,.35/s];const a=r[1],o=Gr(-.08,.18,a),l=1-Gr(.02,.35,a),c=Xs([1,.98,.94],[1,.5,.22],l),h=3*Math.pow(Gr(-.02,.25,a),.8);let u=Eh(c,h);const f=[.1,.26,.64],p=[.46,.6,.8],m=[.95,.45,.18],v=[.01,.014,.032],g=[.022,.028,.05];let d=Xs(p,m,l*.85),x=f;x=Xs(v,x,o),d=Xs(g,d,o);const M=Eh(Xs(x,d,.5),.9);if(a<0){const y=Gr(0,-.12,a)*.28;r=[-r[0],-r[1],r[2]],r[1]>.05?u=[.55*y,.65*y,.95*y]:u=[0,0,0]}return{dir:r,sun:u,zenith:x,horizon:d,ambient:M,daylight:o}}class a1{sx;sy;sz;data;target;normals;pending=new Map;constructor(e){this.sx=Math.ceil((e.nx-1)/Dt),this.sy=Math.ceil((e.ny-1)/Dt),this.sz=Math.ceil((e.nz-1)/Dt),this.data=new Uint8Array(this.sx*this.sy*this.sz*4),this.target=new Uint8Array(this.sx*this.sy*this.sz*4),this.normals=new Uint8Array(this.sx*this.sy*this.sz*4)}index(e,t,i){return(e+this.sx*(t+this.sy*i))*4}snap(e,t,i,s){this.region(e,t,i,s,r=>{this.data[r]=this.target[r],this.data[r+1]=this.target[r+1],this.data[r+2]=this.target[r+2],this.data[r+3]=this.target[r+3]})}easeStep(e){for(const[t,[i,s,r,a]]of this.pending){let o=!1;this.region(i,s,r,a,l=>{for(let c=0;c<4;c++){const h=this.data[l+c],u=this.target[l+c],f=u-h;if(f===0)continue;if(Math.abs(f)<=1){this.data[l+c]=u;continue}o=!0;let p=Math.round(f*e);p===0&&(p=f>0?1:-1),this.data[l+c]=h+p}}),o||this.pending.delete(t)}return this.pending.size}region(e,t,i,s,r){const a=e*s,o=t*s,l=i*s;for(let c=l;c<Math.min(l+s,this.sz);c++)for(let h=o;h<Math.min(o+s,this.sy);h++)for(let u=a;u<Math.min(a+s,this.sx);u++)r(this.index(u,h,c))}get texel(){return Dt*C}}const Pi=[0,0,0];function Vr(n,e,t,i,s,r,a,o,l=!1){const c=e.texel,h=t*r,u=i*r,f=s*r,p=e.target,m=255/rc,v=a.dir,g=v[1]>0,d=n.sizeY,x=e.normals,M=jt(o1*255);for(let w=f;w<f+r&&w<e.sz;w++)for(let E=h;E<h+r&&E<e.sx;E++){const b=(E+.5)*c,T=(w+.5)*c;let S=Th(n,b,(u+r)*c,T,d);for(let A=Math.min(u+r,e.sy)-1;A>=u;A--){const _=e.index(E,A,w);let R=0,P=-1/0,z=0,O=0,L=0,U=0,B=0;const k=E*Dt,X=A*Dt,K=w*Dt;for(let D=0;D<Dt;D++)for(let Q=0;Q<Dt;Q++)for(let ee=0;ee<Dt;ee++){const G=n.getHard(k+D,X+Q,K+ee);if(G!==0&&!ht(G)){const $=bt[G].emissive;$&&(L+=$[0],U+=$[1],B+=$[2]);continue}if(G!==0){const $=n.solidFraction(k+D,X+Q,K+ee);R+=$,$>0&&(O++,z=G);continue}const V=n.get(k+D,X+Q,K+ee);V>0&&(R++,V>P&&O===0&&(P=V,z=n.getMaterial(k+D,X+Q,K+ee)))}const oe=o?.get(_);let we;oe&&(oe[3]===1?we=oe:(L+=oe[0],U+=oe[1],B+=oe[2]));const be=Dt*Dt*Dt,Se=R/be;let Z=R>0&&R<be-1e-6;if(R>=be-1e-6&&(Z=!wn(n,k-1,X,K)||!wn(n,k+Dt,X,K)||!wn(n,k,X-1,K)||!wn(n,k,X+Dt,K)||!wn(n,k,X,K-1)||!wn(n,k,X,K+Dt)),R>0&&(S=!1),!Z&&we){p[_]=jt(we[0]*m),p[_+1]=jt(we[1]*m),p[_+2]=jt(we[2]*m),p[_+3]=Math.round(Se*255),x[_]=128,x[_+1]=255,x[_+2]=128,x[_+3]=0;continue}if(!Z&&L+U+B>0){p[_]=jt(L/zi*m),p[_+1]=jt(U/zi*m),p[_+2]=jt(B/zi*m),p[_+3]=Math.round(Se*255),x[_]=128,x[_+1]=128,x[_+2]=128,x[_+3]=255;continue}if(!Z){R===0&&S?(p[_]=0,p[_+1]=0,p[_+2]=0,p[_+3]=0,x[_]=128,x[_+1]=0,x[_+2]=128,x[_+3]=M):(p[_]=0,p[_+1]=0,p[_+2]=0,p[_+3]=Math.round(Se*255),x[_]=128,x[_+1]=255,x[_+2]=128,x[_+3]=0);continue}const ne=(E+.5)*c,me=(A+.5)*c,le=(w+.5)*c;let se=0,Ae=1,Ge=0;if(O===0){n.gradient(ne,me,le,Pi,c*.5);const D=Math.hypot(Pi[0],Pi[1],Pi[2]);D>1e-5&&(se=-Pi[0]/D,Ae=-Pi[1]/D,Ge=-Pi[2]/D)}else{se=(wn(n,k-1,X,K)?0:-1)+(wn(n,k+Dt,X,K)?0:1),Ae=(wn(n,k,X-1,K)?0:-1)+(wn(n,k,X+Dt,K)?0:1),Ge=(wn(n,k,X,K-1)?0:-1)+(wn(n,k,X,K+Dt)?0:1);const D=Math.hypot(se,Ae,Ge);D>0?(se/=D,Ae/=D,Ge/=D):Ae=1}const N=bt[z]??bt[1],ze=N.albedo;let Fe=0;const Te=se*v[0]+Ae*v[1]+Ge*v[2];g&&Te>0&&l1(n,ne+se*c*.75,me+Ae*c*.75,le+Ge*c*.75,v,d)&&(Fe=Te);const ue=Th(n,ne+se*c*.6,me+Ae*c*.6,le+Ge*c*.6,d),Ve=(.5+.5*Ae)*(ue?1:.06),Ee=1/Math.PI;let ke=ze[0]*(a.sun[0]*Fe*Ee+a.ambient[0]*Ve),Je=ze[1]*(a.sun[1]*Fe*Ee+a.ambient[1]*Ve),$e=ze[2]*(a.sun[2]*Fe*Ee+a.ambient[2]*Ve);N.emissive&&(ke+=N.emissive[0],Je+=N.emissive[1],$e+=N.emissive[2]);const F=Math.max(Se,Sl);if(L+U+B>0){p[_]=jt((ke*F+L)/zi*m),p[_+1]=jt((Je*F+U)/zi*m),p[_+2]=jt(($e*F+B)/zi*m),p[_+3]=Math.round(F*255),x[_]=128,x[_+1]=128,x[_+2]=128,x[_+3]=255;continue}p[_]=jt(ke*F*m),p[_+1]=jt(Je*F*m),p[_+2]=jt($e*F*m),p[_+3]=Math.round(F*255),x[_]=jt((se*.5+.5)*255),x[_+1]=jt((Ae*.5+.5)*255),x[_+2]=jt((Ge*.5+.5)*255),x[_+3]=0}}const y=(t*1024+i)*1024+s;l?e.pending.set(y,[t,i,s,r]):(e.pending.delete(y),e.snap(t,i,s,r))}const Sl=.25,o1=.7,zi=24;function wn(n,e,t,i){return n.getHard(e,t,i)!==0||n.get(e,t,i)>0}function jt(n){return n<=0?0:n>=255?255:Math.round(n)}function l1(n,e,t,i,s,r){const a=C,o=s[0]*a,l=s[1]*a,c=s[2]*a;for(let h=0;h<400;h++){if(e+=o,t+=l,i+=c,t>r||t<0||e<0||i<0||e>n.sizeX||i>n.sizeZ)return!0;if(n.solidAt(e,t,i))return!1}return!0}function Th(n,e,t,i,s){for(let r=t;r<=s;r+=C*2)if(n.solidAt(e,r,i))return!1;return!0}const hi=[C/gt,.5,1,2,4,6,8],fa=[[1,0,0],[0,0,1],[-1,0,0],[0,0,-1]];function Wr(n,e,t,i,s=C*.2,r=1){const a=n.size*.5*r,o=e-n.x,l=t-n.y,c=i-n.z;if(n.shape==="sphere")return a-Math.sqrt(o*o+l*l+c*c);const h=Math.max(Math.abs(o),Math.abs(l),Math.abs(c)),u=a-h+s;if(n.shape==="cube")return u;const f=n.y-a;if(n.shape==="slab"){const v=n.size/(2*gt)*r,g=n.y-n.size*.5+n.size/(2*gt),d=n.size*.5*r;return Math.min(d-Math.max(Math.abs(o),Math.abs(c)),v-Math.abs(t-g))+s}const p=fa[(n.dir??0)&3];if(n.shape==="wall"){const v=n.size*.5,g=(e-n.x)*p[0]+(i-n.z)*p[2]+v,d=Math.min(n.size/gt,C),x=(e-n.x)*p[2]-(i-n.z)*p[0];return Math.min(d*.5*r-Math.abs(g-d*.5),a-Math.abs(x),a-Math.abs(l))+s}const m=(e-n.x)*p[0]+(i-n.z)*p[2]+a;if(n.shape==="roof"){const v=(e-n.x)*p[2]-(i-n.z)*p[0],g=.75,d=t-f-(a-Math.abs(v))*g,x=Math.abs(d)/Math.sqrt(1+g*g),M=Math.min(n.size/gt,C)*r;return Math.min(u,M*.5-x+s)}return Math.min(u,m-(t-f)+C/gt*.5)}function Ms(n,e,t=1){const i=e.size*.5+C*1.5,s=Math.max(0,Math.floor((e.x-i)/C)),r=Math.min(n.nx-1,Math.ceil((e.x+i)/C)),a=Math.max(0,Math.floor((e.y-i)/C)),o=Math.min(n.ny-1,Math.ceil((e.y+i)/C)),l=Math.max(0,Math.floor((e.z-i)/C)),c=Math.min(n.nz-1,Math.ceil((e.z+i)/C)),h=n.density,u=n.material;if(e.op==="smooth"){const p=h.slice();for(let m=s;m<=r;m++)for(let v=a;v<=o;v++)for(let g=l;g<=c;g++){const d=Wr(e,m*C,v*C,g*C);if(d<0)continue;let x=0,M=0;for(let E=-1;E<=1;E++)for(let b=-1;b<=1;b++)for(let T=-1;T<=1;T++){const S=m+E,A=v+b,_=g+T;n.inBounds(S,A,_)&&(x+=p[n.index(S,A,_)],M++)}const y=Math.min(1,d/C),w=n.index(m,v,g);h[w]=h[w]*(1-y)+x/M*y}return{x0:s,y0:a,z0:l,x1:r,y1:o,z1:c}}if(e.pick){const p=Math.max(e.size,C)*.5,m=Math.max(0,Math.ceil((e.x-p)/C-.5)),v=Math.min(n.nx-2,Math.ceil((e.x+p)/C-.5)-1),g=Math.max(0,Math.ceil((e.y-p)/C-.5)),d=Math.min(n.ny-2,Math.ceil((e.y+p)/C-.5)-1),x=Math.max(0,Math.ceil((e.z-p)/C-.5)),M=Math.min(n.nz-2,Math.ceil((e.z+p)/C-.5)-1);for(let y=m;y<=v;y++)for(let w=g;w<=d;w++)for(let E=x;E<=M;E++){if(rr(n,y,w,E))continue;const b=n.index(y,w,E);n.hard[b]===0||e.mat!==0&&n.hard[b]!==e.mat||(n.hard[b]=0,n.sub[b]=0)}return{x0:Math.max(0,m-1),y0:Math.max(0,g-1),z0:Math.max(0,x-1),x1:Math.min(n.nx-1,v+2),y1:Math.min(n.ny-1,d+2),z1:Math.min(n.nz-1,M+2)}}const f=$n(e.mat);if(e.op==="sub"||e.op==="add"&&f&&ht(e.mat)){for(let p=s;p<r;p++)for(let m=a;m<o;m++)for(let v=l;v<c;v++){let g=0;for(let M=0;M<gt;M++)for(let y=0;y<gt;y++)for(let w=0;w<gt;w++)Wr(e,(p+(w+.5)/gt)*C,(m+(y+.5)/gt)*C,(v+(M+.5)/gt)*C,0,t)>0&&(g|=1<<w+3*(y+3*M));if(g===0||rr(n,p,m,v))continue;const d=n.index(p,m,v),x=n.subMask(p,m,v);if(e.op==="sub"){if(x===0||!ht(n.hard[d])){n.hard[d]!==0&&!ht(n.hard[d])&&(n.hard[d]=0,n.sub[d]=0);continue}const M=x&~g;M===0?(n.hard[d]=0,n.sub[d]=0):n.sub[d]=M===Gt?0:M}else{const M=(ht(n.hard[d])?x:0)|g;n.hard[d]=e.mat,n.sub[d]=M===Gt?0:M}}if(e.op==="add")return{x0:s,y0:a,z0:l,x1:r,y1:o,z1:c}}if(e.op==="add"&&f&&!ht(e.mat)){const p=Math.floor(e.x/C),m=Math.floor(e.y/C),v=Math.floor(e.z/C);return n.setHard(p,m,v,e.mat),n.sub[n.index(p,m,v)]=0,{x0:Math.max(0,p-1),y0:Math.max(0,m-1),z0:Math.max(0,v-1),x1:Math.min(n.nx-1,p+2),y1:Math.min(n.ny-1,m+2),z1:Math.min(n.nz-1,v+2)}}if(e.op==="paint")for(let p=s;p<r;p++)for(let m=a;m<o;m++)for(let v=l;v<c;v++){if(Wr(e,(p+.5)*C,(m+.5)*C,(v+.5)*C)<=0||rr(n,p,m,v))continue;const d=n.index(p,m,v);n.hard[d]!==0&&f&&ht(e.mat)&&ht(n.hard[d])&&(n.hard[d]=e.mat)}if((e.op==="add"||e.op==="sub")&&e.size<C){const p=e.op==="add"?1:-1,m=Math.floor(e.x/C),v=Math.floor(e.y/C),g=Math.floor(e.z/C);for(let d=m;d<=m+1;d++)for(let x=v;x<=v+1;x++)for(let M=g;M<=g+1;M++){if(!n.inBounds(d,x,M))continue;const y=Math.hypot(d*C-e.x,x*C-e.y,M*C-e.z),w=Math.max(0,1-y/C),E=n.index(d,x,M);p>0&&x>=n.ny-1||(h[E]=Math.max(-it,Math.min(it,h[E]+p*.45*w)),p>0&&h[E]>-C&&(u[E]=e.mat))}return{x0:Math.max(0,m-1),y0:Math.max(0,v-1),z0:Math.max(0,g-1),x1:Math.min(n.nx-1,m+2),y1:Math.min(n.ny-1,v+2),z1:Math.min(n.nz-1,g+2)}}for(let p=s;p<=r;p++)for(let m=a;m<=o;m++)for(let v=l;v<=c;v++){const g=Wr(e,p*C,m*C,v*C,C*.2,t),d=n.index(p,m,v);if(e.op==="add"){if(m>=n.ny-1)continue;g>h[d]&&(h[d]=Math.min(g,it)),g>-C&&(u[d]=e.mat)}else if(e.op==="sub"){const x=-g;x<h[d]&&(h[d]=Math.max(x,-it))}else e.op==="paint"&&g>-C&&(u[d]=e.mat)}return{x0:s,y0:a,z0:l,x1:r,y1:o,z1:c}}function Zn(n,e,t,i,s){const r=[],a=l=>Math.max(0,Math.floor((l-2)/e)),o=(l,c)=>Math.min(c-1,Math.floor((l+1)/e));for(let l=a(n.x0);l<=o(n.x1,t);l++)for(let c=a(n.y0);c<=o(n.y1,i);c++)for(let h=a(n.z0);h<=o(n.z1,s);h++)r.push([l,c,h]);return r}function c1(n){return!(n.pick||n.op!=="add"&&n.op!=="sub"||n.size<C||n.op==="add"&&$n(n.mat)&&!ht(n.mat))}function h1(n){const e=JSON.parse(n),t=[];for(const i of e){if(!Array.isArray(i)||i.length<7||i.length>9)continue;const[s,r,a,o,l,c,h,u,f]=i;if(!["add","sub","paint","smooth"].includes(s)||!["sphere","cube","slab","ramp","wall","roof"].includes(r))continue;const p={op:s,shape:r,size:+a,mat:+o,x:+l,y:+c,z:+h};f!==void 0&&+f&1?p.pick=!0:u!==void 0&&(p.dir=+u&3),t.push(p)}return t}const u1=8208|1<<22;function of(n,e,t,i=64,s=.12){const[r,a,o]=e,[l,c,h]=t,u=(g,d,x)=>!(g<0||d<0||x<0||g>n.sizeX||d>n.sizeY||x>n.sizeZ);let f=u(r,a,o),p=f?n.sample(r,a,o):-1,m=p>0,v=0;for(let g=s;g<=i;g+=s){const d=r+l*g,x=a+c*g,M=o+h*g;let y;if(u(d,x,M))f=!0,y=n.sample(d,x,M);else{if(f)return null;y=-1}if(m)y<=0&&(m=!1);else if(y>0){let w=v,E=g;for(let P=0;P<8;P++){const z=.5*(w+E);n.sample(r+l*z,a+c*z,o+h*z)>0?E=z:w=z}const b=.5*(w+E),T=r+l*b,S=a+c*b,A=o+h*b,_=n.gradient(T,S,A),R=Math.hypot(_[0],_[1],_[2])||1;return{point:[T,S,A],normal:[-_[0]/R,-_[1]/R,-_[2]/R],distance:b,material:n.materialAt(T,S,A),hard:!1}}p=y,v=g}return null}function f1(n,e,t,i=64){const[s,r,a]=e,[o,l,c]=t;let h=Math.floor(s/C),u=Math.floor(r/C),f=Math.floor(a/C);const p=o>0?1:-1,m=l>0?1:-1,v=c>0?1:-1,g=o!==0?Math.abs(C/o):1/0,d=l!==0?Math.abs(C/l):1/0,x=c!==0?Math.abs(C/c):1/0,M=(A,_,R,P)=>R===0?1/0:(P>0?(_+1)*C-A:A-_*C)/Math.abs(R);let y=M(s,h,o,p),w=M(r,u,l,m),E=M(a,f,c,v),b=n.getHard(h,u,f)!==0,T=0,S=-1;for(let A=0;A<1024;A++){if(T>i)return null;const _=n.getHard(h,u,f);if(_!==0&&!b&&S>=0){const R=ht(_)?n.subMask(h,u,f):u1;if(R===Gt){const L=S===0?[-p,0,0]:S===1?[0,-m,0]:[0,0,-v];return{point:[s+o*T,r+l*T,a+c*T],normal:L,distance:T,material:_,hard:!0}}const P=Math.min(y,w,E),z=C/24;let O=-1;for(let L=T+z*.5;L<P;L+=z){const U=s+o*L,B=r+l*L,k=a+c*L,X=U/C-h,K=B/C-u,oe=k/C-f,we=Math.min(2,Math.max(0,Math.floor(X*3))),be=Math.min(2,Math.max(0,Math.floor(K*3))),Se=Math.min(2,Math.max(0,Math.floor(oe*3))),Z=we+3*(be+3*Se);if(R&1<<Z){let ne;if(O<0)ne=S===0?[-p,0,0]:S===1?[0,-m,0]:[0,0,-v];else{const me=O%3,le=Math.floor(O/3)%3;ne=me!==we?[-p,0,0]:le!==be?[0,-m,0]:[0,0,-v]}return{point:[U,B,k],normal:ne,distance:L,material:_,hard:!0}}O=Z}}if(_===0&&(b=!1),y<w&&y<E?(T=y,y+=g,h+=p,S=0):w<E?(T=w,w+=d,u+=m,S=1):(T=E,E+=x,f+=v,S=2),(h<0||u<0||f<0||h>=n.nx-1||u>=n.ny-1||f>=n.nz-1)&&T>1)return null}return null}function d1(n,e,t,i=64){const s=f1(n,e,t,i),r=of(n,e,t,s?s.distance:i);return r&&(!s||r.distance<s.distance)?r:s}function p1(n,e,t,i=64,s=.12){const[r,a,o]=e,[l,c,h]=t;let u=n.waterAt(r,a,o);for(let f=s;f<=i;f+=s){const p=r+l*f,m=a+c*f,v=o+h*f,g=n.waterAt(p,m,v);if(g&&!u)return{point:[p,m,v],distance:f,cell:[Math.floor(p/C),Math.floor(m/C),Math.floor(v/C)]};u=g}return null}const ki=.12,Ys=.62,m1=26,g1=5.5,Al=1.75,vi=1.62,Ch=22,v1=9.2,Xr=.6,_l=[.2,1.25],lf=[.15],x1=.3,M1=.27,cf=[vi-.12],y1=1/120,w1=.78,S1=8,A1=5,Dh=[.15,.55,.95,1.35,1.7],_1=.95;function hf(n,e,t){return{pos:[n,e,t],vel:[0,0,0],onGround:!1,fly:!1}}function ac(n,e,t){let i=t.dt;for(;i>1e-6;){const s=Math.min(y1,i);i-=s,b1(n,e,t,s)}}const an=[0,0,0];function E1(n,e){let t=0;for(const i of Dh)n.waterAt(e.pos[0],e.pos[1]+i,e.pos[2])&&t++;return t/Dh.length}function b1(n,e,t,i){const s=e.vel,r=e.fly?0:E1(n,e);if(e.swim=!e.fly&&r>0&&n.waterAt(e.pos[0],e.pos[1]+(e.crouch?.25:_1),e.pos[2]),e.fly){const v=1-Math.exp(-i*28);s[0]+=(t.wishX-s[0])*v,s[1]+=(t.wishY-s[1])*v,s[2]+=(t.wishZ-s[2])*v}else if(e.swim){const v=1-Math.exp(-i*A1);s[0]+=(t.wishX-s[0])*v,s[2]+=(t.wishZ-s[2])*v;const g=r>=.99?0:Ch*(r/w1-1),d=t.jump?Math.max(t.wishY,2.5):t.wishY;s[1]+=(g+(d-s[1])*S1)*i,e.onGround=!1}else{const v=e.onGround?14:4,g=1-Math.exp(-i*v);s[0]+=(t.wishX-s[0])*g,s[2]+=(t.wishZ-s[2])*g,s[1]-=Ch*i,t.jump&&e.onGround&&(s[1]=v1,e.onGround=!1),s[1]<-40&&(s[1]=-40)}let a=!1;const o=e.pos[0],l=e.pos[1],c=e.pos[2],h=s[0],u=s[2],f=e.onGround;if(e.pos[0]+=s[0]*i,ds(n,e,0)&&(s[0]=0),e.pos[1]+=s[1]*i,ds(n,e,1)&&(s[1]<0&&(a=!0),s[1]=0),e.pos[2]+=s[2]*i,ds(n,e,2)&&(s[2]=0),xo(n,e),a&&(e.onGround=!0),!e.fly&&!e.swim&&f){const v=Math.hypot(h,u)*i,g=Math.hypot(e.pos[0]-o,e.pos[2]-c);if(v>1e-5&&g<v*.6){const d=e.pos[0],x=e.pos[1],M=e.pos[2],y=s[0],w=s[1],E=s[2],b=()=>{e.pos[0]=d,e.pos[1]=x,e.pos[2]=M,s[0]=y,s[1]=w,s[2]=E};if(e.pos[0]=o,e.pos[1]=l+Xr,e.pos[2]=c,s[0]=h,s[2]=u,e.pos[0]+=h*i,ds(n,e,0)&&(s[0]=0),e.pos[2]+=u*i,ds(n,e,2)&&(s[2]=0),xo(n,e),Math.hypot(e.pos[0]-o,e.pos[2]-c)<g+v*.3||e.pos[1]>l+Xr+.05)b();else{let S=!1;for(let A=0;A<8&&!S;A++){e.pos[1]-=Xr/8,ds(n,e,1)&&(S=!0);const _=e.pos[1];xo(n,e),(e.onGround||e.pos[1]>_+1e-6)&&(S=!0)}!S||e.pos[1]>l+Xr+.001||e.pos[1]<l-.001?b():(s[1]<0&&(s[1]=0),e.onGround=!0)}}}T1(n,e,i);const p=ki+.05;e.pos[0]=Math.min(n.sizeX-p,Math.max(p,e.pos[0])),e.pos[2]=Math.min(n.sizeZ-p,Math.max(p,e.pos[2]));const m=e.fly?.5-vi+.6:.5;e.pos[1]<m&&(e.pos[1]=m,s[1]<0&&(s[1]=0),e.onGround=!e.fly),e.pos[1]>n.sizeY-Al&&(e.pos[1]=n.sizeY-Al,s[1]>0&&(s[1]=0))}function xo(n,e){let t=!1;for(let i=0;i<4;i++){let s=!1;for(const r of e.fly?cf:e.crouch?lf:_l){const a=e.pos[0],o=e.pos[1]+r,l=e.pos[2],c=-n.sample(a,o,l);if(c>=ki)continue;n.gradient(a,o,l,an);let h=Math.hypot(an[0],an[1],an[2]),u,f,p;h<1e-4?(u=0,f=1,p=0):(u=-an[0]/h,f=-an[1]/h,p=-an[2]/h);const m=Math.min(ki-c,.35);if(f>.55&&!e.fly)e.pos[1]+=Math.min(m/f,.4),e.vel[1]<0&&(e.vel[1]=0),t=!0;else{e.pos[0]+=u*m,e.pos[1]+=f*m,e.pos[2]+=p*m;const v=e.vel[0]*u+e.vel[1]*f+e.vel[2]*p;v<0&&(e.vel[0]-=v*u,e.vel[1]-=v*f,e.vel[2]-=v*p)}s=!0}if(!s)break}!t&&!e.fly&&-n.sample(e.pos[0],e.pos[1]+_l[0]-.06,e.pos[2])<ki&&e.vel[1]<=.01&&(t=!0),e.onGround=t}function T1(n,e,t){const i=e.fly?cf[0]:e.crouch?lf[0]:_l[1],s=e.pos[0],r=e.pos[1]+i,a=e.pos[2];let o=-n.sample(s,r,a),l=0,c=0,h=0;if(o<Ys){n.gradient(s,r,a,an);const g=Math.hypot(an[0],an[1],an[2]);g<1e-4?o=1/0:(l=-an[0]/g,c=-an[1]/g,h=-an[2]/g)}const u=C1(n,s,r,a,Ys);if(u&&u[0]<o&&(o=u[0],l=u[1],c=u[2],h=u[3]),o>=Ys||o<ki-.2||!e.fly&&c>.6)return;const f=Math.min(1,(Ys-Math.max(o,ki))/(Ys-ki)),p=e.vel,m=Math.exp(-t*g1*f*(e.fly?.3:1));p[0]*=m,p[2]*=m,e.fly&&(p[1]*=m);const v=m1*f*t;p[0]+=l*v,e.fly&&(p[1]+=c*v),p[2]+=h*v}function C1(n,e,t,i,s){const r=[Math.floor((e-s)/C),Math.floor((t-s)/C),Math.floor((i-s)/C)],a=[Math.floor((e+s)/C),Math.floor((t+s)/C),Math.floor((i+s)/C)];let o=s,l=0,c=1,h=0,u=!1;const f=C/gt,p=(m,v,g,d)=>{const x=Math.max(m,Math.min(e,m+d)),M=Math.max(v,Math.min(t,v+d)),y=Math.max(g,Math.min(i,g+d)),w=e-x,E=t-M,b=i-y,T=Math.hypot(w,E,b);T>=o||(o=T,u=!0,T>1e-5?(l=w/T,c=E/T,h=b/T):(l=0,c=1,h=0))};for(let m=r[0];m<=a[0];m++)for(let v=r[1];v<=a[1];v++)for(let g=r[2];g<=a[2];g++){if(!ht(n.getHard(m,v,g)))continue;const d=n.subMask(m,v,g);if(d===Gt){p(m*C,v*C,g*C,C);continue}for(let x=0;x<gt;x++)for(let M=0;M<gt;M++)for(let y=0;y<gt;y++)d&1<<y+3*(M+3*x)&&p(m*C+y*f,v*C+M*f,g*C+x*f,f)}return u?[o,l,c,h]:null}const Yr=.12;function ds(n,e,t){const i=e.fly?vi-.3:0,s=e.fly?vi+.15:e.crouch?x1:Al,r=[e.pos[0]-Yr,e.pos[1]+i,e.pos[2]-Yr],a=[e.pos[0]+Yr,e.pos[1]+s,e.pos[2]+Yr],o=r.map(u=>Math.floor(u/C)),l=a.map(u=>Math.floor((u-1e-4)/C)),c=t===1?e.pos[1]+(i+s)*.5:e.pos[t],h=(u,f)=>{for(let p=0;p<3;p++)if(f[p]<=r[p]||u[p]>=a[p])return!1;return c<(u[t]+f[t])*.5?e.pos[t]-=a[t]-u[t]+1e-4:e.pos[t]+=f[t]-r[t]+1e-4,!0};for(let u=o[0];u<=l[0];u++)for(let f=o[1];f<=l[1];f++)for(let p=o[2];p<=l[2];p++){if(!ht(n.getHard(u,f,p)))continue;const m=n.subMask(u,f,p);if(m===Gt){if(h([u*C,f*C,p*C],[(u+1)*C,(f+1)*C,(p+1)*C]))return!0;continue}const v=C/gt;for(let g=0;g<gt;g++)for(let d=0;d<gt;d++)for(let x=0;x<gt;x++){if(!(m&1<<x+3*(d+3*g)))continue;const M=[u*C+x*v,f*C+d*v,p*C+g*v];if(h(M,[M[0]+v,M[1]+v,M[2]+v]))return!0}}return!1}function Ps(n,e,t){for(let i=n.sizeY-1;i>0;i-=.25)if(n.sample(e,i,t)>0||ht(n.hardAt(e,i,t))&&n.hardOccupiedAt(e,i,t))return i+.25;return 1}function D1(n){let e=0;const{nx:t,ny:i,nz:s}=n;for(let r=0;r<t-1;r++)for(let a=0;a<i-1;a++)for(let o=0;o<s-1;o++){const l=n.index(r,a,o),c=n.hard[l];if(c===0||$n(c))continue;const h=n.sub[l]===0?Gt:n.sub[l];for(let u=0;u<=1;u++)for(let f=0;f<=1;f++)for(let p=0;p<=1;p++){const m=1<<u*2+3*(f*2+3*(p*2));if(!(h&m))continue;const v=n.index(r+u,a+f,o+p);n.density[v]<=0&&(n.density[v]=it*.5,n.material[v]=c)}n.hard[l]=0,n.sub[l]=0,e++}return e}function Ea(n,e,t){if(!n||n.r<=0)return!0;const i=e+.5-n.x,s=t+.5-n.z;return i*i+s*s<=n.r*n.r}function Rh(n,e,t,i){if(!n||n.r<=0)return!0;const s=e+.5-n.x,r=t+.5-n.y,a=i+.5-n.z;return s*s+r*r+a*a<=n.r*n.r}const Mo=60,R1=.08,I1=3e3,qr=4,Qr=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]];function P1(n){return bt[n]?.repose!==void 0}function L1(n,e){const t=Math.floor((n+(ar(n*3+1,e*7+2)<.5?0:1))/3),i=Math.floor((e+(ar(n*5+3,e*11+4)<.5?0:1))/3);return Math.floor(ar(t,i)*3)%3}function ar(n,e){let t=n*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}const B1=.05,U1=10,z1=6,F1=1,N1=.1;class Ih{constructor(e,t,i={}){this.field=e,this.seaLevel=t,this.opts=i}queue=[];queued=new Set;parkedCols=[];get rate(){return this.opts.rate??R1}tick=0;get passes(){return this.tick}landed=[];energy=new Map;gran(e){const t=this.field.material[e];return this.opts.material!==void 0?t===this.opts.material&&(!this.opts.loose||this.opts.loose[e]!==0):P1(t)}reposeOf(e){return this.opts.repose??bt[e]?.repose??Mo}get pending(){return this.queue.length}get parked(){return this.parkedCols.length}bubbleSort(e){const t=this.field.nz;if(!e||e.r<=0){this.parkedCols.length&&(this.queue.push(...this.parkedCols),this.parkedCols=[]);return}const i=[];for(const r of this.parkedCols)Ea(e,Math.floor(r/t),r%t)?this.queue.push(r):i.push(r);const s=[];for(const r of this.queue)Ea(e,Math.floor(r/t),r%t)?s.push(r):i.push(r);this.queue=s,this.parkedCols=i}wake(e){const t=this.field;for(let i=Math.max(0,e.x0-1);i<=Math.min(t.nx-1,e.x1+1);i++)for(let s=Math.max(0,e.z0-1);s<=Math.min(t.nz-1,e.z1+1);s++)this.wakeColumn(i,s)}wakeColumn(e,t){const i=e*this.field.nz+t;this.queued.has(i)||(this.queued.add(i),this.queue.push(i))}wakeAround(e,t){const i=this.field;this.wakeColumn(e,t);for(const[s,r]of Qr){const a=e+s,o=t+r;a>=0&&o>=0&&a<i.nx&&o<i.nz&&this.wakeColumn(a,o)}}clear(){this.queue=[],this.parkedCols=[],this.queued.clear(),this.energy.clear()}hardAt(e,t,i){const s=this.field,r=s.hard;for(let a=Math.max(0,e-1);a<=Math.min(s.nx-2,e);a++)for(let o=Math.max(0,i-1);o<=Math.min(s.nz-2,i);o++)for(let l=Math.max(0,t-1);l<=Math.min(s.ny-2,t);l++)if(ht(r[s.index(a,l,o)]))return!0;return!1}top(e,t){const i=this.field,s=i.density;for(let r=i.ny-1;r>=0;r--){const a=i.index(e,r,t);if(s[a]>0){let o=r;if(r+1<i.ny){const c=s[a],h=s[i.index(e,r+1,t)];h<=0&&(o=r+c/(c-h))}const l=o*C<this.seaLevel+.3||i.water[a]!==0||r+1<i.ny&&i.water[i.index(e,r+1,t)]!==0;return{h:o,sand:this.gran(a),wet:l,y:r}}if(this.hardAt(e,r,t))return{h:r,sand:!1,wet:r*C<this.seaLevel+.3,y:r}}return{h:0,sand:!1,wet:!1,y:0}}intervals(e,t,i,s){const r=this.field,a=r.density,o=[];let l=NaN;const c=h=>a[r.index(e,h,t)];c(i)>0&&(l=i-c(i)/C);for(let h=i;h<s;h++){const u=c(h),f=c(h+1);u>0&&f<=0?(o.push(l,h+u/(u-f)),l=NaN):u<=0&&f>0&&(l=h+u/(u-f))}return Number.isNaN(l)||o.push(l,s+Math.max(0,c(s))/C),o}rewrite(e,t,i,s,r,a){const o=this.field,l=o.density,c=o.material,h=[];for(let m=0;m<r.length;m+=2){let v=r[m]<=0?-1:r[m],g=r[m+1];if(g<=v+1e-6)continue;const d=g-v,x=h.length?h[h.length-1]:-1/0;if(v>x&&Math.floor(v)<Math.ceil(x)&&(v=x,g=x+d),v<=x+1e-6){h[h.length-1]=x+d;continue}if(Math.ceil(v)>Math.floor(g)&&v>0){const M=(v+g)*.5,y=Math.round(M);if(v+=y-M,g+=y-M,v<=x+1e-6){h[h.length-1]=x+d;continue}}h.push(v,g)}const u=[],f=m=>{const v=l[o.index(e,m,t)],g=l[o.index(e,m+1,t)];return v>0!=g>0?m+v/(v-g):null};for(let m=i-1;m>=0;m--){const v=f(m);if(v!==null){u.push(v);break}}for(let m=s;m<o.ny-1;m++){const v=f(m);if(v!==null){u.push(v);break}}const p=new Float32Array(s-i+1);for(let m=i;m<=s;m++){let v=!1,g=1/0;for(let d=0;d<h.length;d+=2){const x=h[d],M=h[d+1];m>=x&&m<=M&&(v=!0),g=Math.min(g,Math.abs(m-x),Math.abs(m-M))}for(const d of u)g=Math.min(g,Math.abs(m-d));p[m-i]=(v?1:-1)*Math.min(g*C,it)}for(let m=0;m<h.length;m+=2){const v=h[m],g=h[m+1],d=Math.ceil(v),x=Math.floor(g);if(d!==x||d-1<i||d+1>s||v<=0)continue;const M=-p[d-1-i]/C,y=-p[d+1-i]/C;if(!(M>0)||!(y>0))continue;const w=g-v;let E=1e-4,b=64;for(let T=0;T<24;T++){const S=(E+b)*.5;1+S/(S+y)-M/(M+S)<w?E=S:b=S}p[d-i]=Math.min((E+b)*.5*C,it)}for(let m=i;m<=s;m++){const v=o.index(e,m,t),g=l[v],d=p[m-i];g<=0&&d>0&&(c[v]=a,this.opts.loose&&(this.opts.loose[v]=1)),l[v]=d}}deposit(e,t,i,s=this.field.ny){const r=this.field;if(i<=.001||e<0||t<0||e>=r.nx||t>=r.nz)return null;const a=this.intervals(e,t,0,r.ny-2);let o=-1;for(let m=a.length-1;m>=1;m-=2)if(a[m]<=s+1){o=m;break}if(o<0&&a.length)return null;let l=o>=0?a[o]:0;o<0&&(a.push(0,0),o=1,l=0);for(let m=Math.floor(l);m<Math.min(r.ny-2,s+1);m++)this.hardAt(e,m+1,t)&&m+1>l&&(l=m+1,a[o-1]=Math.min(a[o-1],l),a[o]=l);const c=o+1<a.length?a[o+1]-.5:r.ny-3,h=Math.min(c,l+i);if(h<=l+.001)return null;a[o]=h,o+1<a.length&&a[o+1]-h<.001&&a.splice(o,2);const u=Math.max(0,Math.floor(l)-qr),f=Math.min(r.ny-2,Math.ceil(h)+qr),p=this.opts.material??this.sandFrom(e,t,new Map,r.material);return this.rewrite(e,t,u,f,a,p),this.wakeAround(e,t),[u,f]}slope(e,t){const i=e.wet?Math.max(Mo,this.reposeOf(t)):this.reposeOf(t);return Math.tan(i*Math.PI/180)}wetAt(e,t,i){const s=this.field,r=Math.max(0,Math.min(s.ny-1,Math.floor(t)));return t*C<this.seaLevel+.3||s.water[s.index(e,r,i)]!==0||r+1<s.ny&&s.water[s.index(e,r+1,i)]!==0}step(e=null){const t=this.field,i=t.material;this.bubbleSort(e);const s=Math.min(I1,this.queue.length);if(!s)return null;const r=this.queue.splice(0,s);for(const v of r)this.queued.delete(v);this.tick++,this.landed=[];const a=this.opts.loose!==void 0,o=new Map,l=(v,g)=>{const d=v*t.nz+g;let x=o.get(d);return x||(x=this.intervals(v,g,0,t.ny-2),o.set(d,x)),x},c=new Map,h=(v,g,d,x)=>{let M=c.get(v);M||(M=new Map,c.set(v,M));const y=M.get(g);y?(y[0]+=d,d>0&&y[1]===0&&(y[1]=x)):M.set(g,[d,x])};let u=null;const f=(v,g,d,x)=>{u=u?{x0:Math.min(u.x0,v),y0:Math.min(u.y0,g),z0:Math.min(u.z0,x),x1:Math.max(u.x1,v),y1:Math.max(u.y1,d),z1:Math.max(u.z1,x)}:{x0:v,y0:g,z0:x,x1:v,y1:d,z1:x}},p=new Map;for(const v of r){const g=Math.floor(v/t.nz),d=v%t.nz,x=l(g,d);if(a&&this.tick%(L1(g,d)%Math.max(1,Math.round(this.opts.clumps??3))+1)!==0){this.wakeColumn(g,d);continue}const M=a?this.energy.get(v)??0:0;for(let y=0;y<x.length;y+=2){const w=x[y+1],E=Math.min(t.ny-2,Math.floor(w)),b=t.index(g,E,d),T=i[b];if(!this.gran(b))continue;const S=Math.tan((this.wetAt(g,w,d)?Math.max(Mo,this.reposeOf(T)):this.reposeOf(T))*Math.PI/180);let A=0;const _=[];for(const[L,U,B]of Qr){const k=g+L,X=d+U;if(k<0||X<0||k>=t.nx||X>=t.nz)continue;const K=l(k,X);let oe=0;for(let be=K.length-2;be>=0;be-=2)if(K[be]<=w+.5){oe=K[be+1];break}const we=(w-oe)*C-S*B*C;we<=B1||(_.push([k*t.nz+X,Math.floor(oe),we*.5]),A+=we*.5)}if(a){let L=0,U=0;const B=[];for(const[X,K]of Qr){const oe=g+X,we=d+K;if(oe<0||we<0||oe>=t.nx||we>=t.nz)continue;const be=l(oe,we);let Se=0;for(let Z=be.length-2;Z>=0;Z-=2)if(be[Z]<=w+.5){Se=be[Z+1];break}L+=Se,U++,Se<w-.05&&B.push([oe*t.nz+we,Math.floor(Se),w-Se])}const k=U?w-L/U-(this.opts.crown??F1):0;if(k>N1&&B.length){const X=k*.3*C/B.length;for(const[K,oe]of B)_.push([K,oe,X]),A+=X}}if(!_.length)continue;const R=(w-x[y])*C,P=(a?this.rate*(.7+.6*ar(g*13+5,d*17+9)):this.rate)*(M>0?this.opts.impact??z1:1),z=Math.min(1,P/A,R/A)/C;let O=0;for(const[L,U,B]of _){const k=B*z;h(L,U,k,T),O+=k,M>1&&p.set(L,Math.max(p.get(L)??0,M-1))}h(v,Math.floor(w),-O,T)}}if(a){for(const[v,g]of this.energy)g<=1?this.energy.delete(v):this.energy.set(v,g-1);for(const[v,g]of p)this.energy.set(v,Math.max(this.energy.get(v)??0,g)),this.wakeColumn(Math.floor(v/t.nz),v%t.nz)}for(const[v,g]of c)for(const[d,[x,M]]of g){if(Math.abs(x)<1e-4)continue;const y=Math.floor(v/t.nz),w=v%t.nz,E=Math.max(0,Math.floor(d+Math.min(0,x))-qr),b=Math.min(t.ny-2,Math.ceil(d+1+Math.max(0,x))+qr),T=this.intervals(y,w,E,b);let S=-1,A=1/0;for(let P=1;P<T.length;P+=2){const z=Math.abs(T[P]-d-.5);z<A&&z<=1.01&&(A=z,S=P)}if(S>=0)T[S]+=x,T[S]<=T[S-1]+1e-6&&T.splice(S-1,2);else if(x>0)T.push(d,d+x),T.sort((P,z)=>P-z);else continue;const _=t.index(y,Math.min(t.ny-2,d),w),R=i[_];this.rewrite(y,w,E,b,T,this.gran(_)?R:M||this.sandFrom(y,w,c,i)),f(y,E,b,w),this.wakeAround(y,w)}for(const v of r){const g=Math.floor(v/t.nz),d=v%t.nz,x=this.intervals(g,d,0,t.ny-2);for(let M=2;M<x.length;M+=2){const y=x[M],w=x[M+1],E=x[M-1],b=y-E;if(b<=.02)continue;const T=Math.ceil(y);if(T>t.ny-2||!this.gran(t.index(g,T,d))||this.hardAt(g,Math.floor(y),d))continue;let S=T;for(;S+1<=Math.floor(w)&&this.gran(t.index(g,S+1,d));)S++;const A=S+1<=Math.floor(w)?S+.5:w,_=Math.min(1,b),R=x.slice(0,M);R.push(y-_,A-_),A<w&&R.push(A,w);for(let O=M+2;O<x.length;O++)R.push(x[O]);const P=Math.max(0,Math.floor(y-_)-1),z=Math.min(t.ny-2,Math.ceil(w)+1);if(this.rewrite(g,d,P,z,R,i[t.index(g,T,d)]),this.opts.moved){const O=Math.max(1,Math.round(_)),L=this.opts.moved;for(let U=Math.max(0,Math.ceil(y-_));U<=Math.min(t.ny-1,Math.floor(A-_)+1);U++){const B=t.index(g,U,d);L[B]=Math.min(127,L[B]+O)}}b-_<1+1e-6&&(this.landed.push(g,Math.round(y-_),d),a&&this.energy.set(v,U1)),f(g,P,z,d),this.wakeAround(g,d);break}}if(!u)return null;const m=u;return{x0:Math.max(0,m.x0-1),y0:Math.max(0,m.y0-1),z0:Math.max(0,m.z0-1),x1:Math.min(t.nx-1,m.x1+1),y1:Math.min(t.ny-1,m.y1+1),z1:Math.min(t.nz-1,m.z1+1)}}sandFrom(e,t,i,s){const r=this.field;let a=0,o=0;for(const[l,c]of Qr){const h=e+l,u=t+c;if(h<0||u<0||h>=r.nx||u>=r.nz)continue;const f=i.get(h*r.nz+u);if(f){for(const[p,[m]]of f)if(m<a){const v=r.index(h,Math.min(r.ny-2,p),u);this.gran(v)&&(a=m,o=s[v])}}}if(o)return o;if(this.opts.material!==void 0)return this.opts.material;for(const l of bt)if(l.repose!==void 0)return l.id;return 0}settle(e=2e3){let t=0;for(;t<e&&this.queue.length;)t++,this.step();return t}}const oc=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],da=2,O1=7,k1=9.8,H1=.6,G1=.45,V1=.6,El=3,Ph=.5,W1=.55,X1=4,Y1=2,q1=.6,Q1=3,K1=3,Lh={[Ds]:2.6,[Xi]:1.6,[Yi]:1.4,[Rs]:1.8,[gn]:1.05,[Jn]:1.15,[Oi]:1.05,[Ql]:1.9,[Kl]:2.7,[Zl]:2.5,[Jl]:1.1,[$l]:1.15,[ec]:2.5,[An]:1.05,[La]:1.1,[jl]:1.2,[Pa]:1.2};function Z1(n){if(n.rho!==void 0)return n.rho;let e=0,t=0;for(const[i,s,r]of n.solid){const a=n.material[(i*n.ny+s)*n.nz+r];e+=Lh[a]??2,t++}for(const i of n.items)e+=(Lh[i.mat]??2)*8,t+=8;return n.rho=Math.max(1.02,t?e/t:2),n.rho}const j1=14;function J1(n,e){return n?{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}:e}function ba(n,e,t,i,s,r,a,o,l){const c=El-1;i-=c,s-=c,r-=c,a+=2*c,o+=2*c,l+=2*c;const h=n.density,u=n.material,f=new Float32Array(a*o*l).fill(-it),p=new Uint8Array(a*o*l),m=[],v=new Set;for(const[R,P,z]of e)v.add(n.index(R,P,z));for(let R=0;R<a;R++)for(let P=0;P<o;P++)for(let z=0;z<l;z++){const O=i+R,L=s+P,U=r+z;if(!n.inBounds(O,L,U))continue;const B=n.index(O,L,U),k=(R*o+P)*l+z;v.has(B)?(f[k]=h[B],p[k]=u[B],m.push([R,P,z])):(f[k]=-it,p[k]=u[B])}const g=El;for(const[R,P,z]of m){const O=f[(R*o+P)*l+z];for(let L=Math.max(0,R-g);L<=Math.min(a-1,R+g);L++)for(let U=Math.max(0,P-g);U<=Math.min(o-1,P+g);U++)for(let B=Math.max(0,z-g);B<=Math.min(l-1,z+g);B++){const k=(L*o+U)*l+B;if(v.has(n.index(i+L,s+U,r+B)))continue;const X=O-Math.hypot(L-R,U-P,B-z)*C;X>f[k]&&(f[k]=X)}}for(let R=0;R<a;R++)for(let P=0;P<o;P++)for(let z=0;z<l;z++){const O=i+R,L=s+P,U=r+z;if(!n.inBounds(O,L,U))continue;const B=n.index(O,L,U),k=(R*o+P)*l+z;!v.has(B)&&h[B]>0&&f[k]>-C*.5&&(f[k]=-C*.5)}for(const[R,P,z]of e)h[n.index(R,P,z)]=-it;const d=new Uint8Array(a*o*l),x=new Uint32Array(a*o*l),M=[],y=new Set,w=(R,P,z)=>{if(!n.inBounds(R,P,z))return;const O=n.getHard(R,P,z);if(O===0)return;const L=n.index(R,P,z);if(y.has(L))return;y.add(L);const U=R-i,B=P-s,k=z-r;if(U<0||B<0||k<0||U>=a-1||B>=o-1||k>=l-1)return;const X=n.sub[L];d[(U*o+B)*l+k]=O,x[(U*o+B)*l+k]=X,M.push({x:U,y:B,z:k,mat:O,sub:X}),n.setHard(R,P,z,0),n.sub[L]=0};for(const[R,P,z]of t)w(R,P,z);for(const[R,P,z]of e)for(let O=-1;O<=0;O++)for(let L=-1;L<=0;L++)for(let U=-1;U<=0;U++)w(R+O,P+L,z+U);const E=m.slice();for(const R of M)if(ht(R.mat))for(let P=0;P<8;P++)E.push([R.x+(P&1),R.y+(P>>1&1),R.z+(P>>2&1)]);const b=[0,0,0];for(const[R,P,z]of E)b[0]+=R,b[1]+=P,b[2]+=z;const T=Math.max(1,E.length);b[0]=b[0]/T*C,b[1]=b[1]/T*C,b[2]=b[2]/T*C;const S=(R,P,z)=>R<0||P<0||z<0||R>=a||P>=o||z>=l?-1:f[(R*o+P)*l+z],A=[];let _=0;for(const[R,P,z]of m){const O=R*C-b[0],L=P*C-b[1],U=z*C-b[2];_=Math.max(_,Math.hypot(O,L,U));let B=!1;for(const[k,X,K]of oc)if(S(R+k,P+X,z+K)<=0){B=!0;break}B&&A.push([O,L,U])}for(let R=m.length;R<E.length;R++){const[P,z,O]=E[R],L=P*C-b[0],U=z*C-b[1],B=O*C-b[2];_=Math.max(_,Math.hypot(L,U,B)),A.push([L,U,B])}return{ox:i,oy:s,oz:r,nx:a,ny:o,nz:l,density:f,material:p,hard:d,sub:x,items:M,solid:m,contacts:A,com:b,radius:Math.max(_,C),pos:[i*C+b[0],s*C+b[1],r*C+b[2]],q:[0,0,0,1],vel:[0,0,0],ang:[0,0,0],rest:0,age:0,settled:!1,touching:!1,texOrigin:[i*C,s*C,r*C]}}function uf(n){return new Ba(n.nx,n.ny,n.nz,0,0,0,n.density,n.material,n.hard,n.sub)}function bl(n,e,t=[0,0,0]){return je[0]=e[0]-n.pos[0],je[1]=e[1]-n.pos[1],je[2]=e[2]-n.pos[2],ln(Us(n.q),je,t),t[0]+=n.com[0],t[1]+=n.com[1],t[2]+=n.com[2],t}function Ua(n,e,t=[0,0,0]){return je[0]=e[0]-n.com[0],je[1]=e[1]-n.com[1],je[2]=e[2]-n.com[2],ln(n.q,je,t),t[0]+=n.pos[0],t[1]+=n.pos[1],t[2]+=n.pos[2],t}function $1(n,e,t,i){const s=Us(n.q),r=bl(n,e),a=[0,0,0];ln(s,t,a);const o=of(uf(n),r,a,i,.08);if(!o)return null;const l=Ua(n,o.point),c=[0,0,0];return ln(n.q,o.normal,c),{point:l,normal:c,distance:o.distance,material:o.material,hard:!1}}function ex(n,e,t,i,s,r,a){const o=Math.min(0,e),l=Math.min(0,t),c=Math.min(0,i),h=Math.max(n.nx-1,s),u=Math.max(n.ny-1,r),f=Math.max(n.nz-1,a);if(o===0&&l===0&&c===0&&h===n.nx-1&&u===n.ny-1&&f===n.nz-1)return;const p=h-o+1,m=u-l+1,v=f-c+1,g=new Float32Array(p*m*v).fill(-it),d=new Uint8Array(p*m*v),x=new Uint8Array(p*m*v),M=new Uint32Array(p*m*v);for(let y=0;y<n.nx;y++)for(let w=0;w<n.ny;w++)for(let E=0;E<n.nz;E++){const b=(y*n.ny+w)*n.nz+E,T=((y-o)*m+(w-l))*v+(E-c);g[T]=n.density[b],d[T]=n.material[b],x[T]=n.hard[b],M[T]=n.sub[b]}n.density=g,n.material=d,n.hard=x,n.sub=M,n.nx=p,n.ny=m,n.nz=v;for(const y of n.items)y.x-=o,y.y-=l,y.z-=c;n.com[0]-=o*C,n.com[1]-=l*C,n.com[2]-=c*C,n.texOrigin[0]+=o*C,n.texOrigin[1]+=l*C,n.texOrigin[2]+=c*C,n.ox+=o,n.oy+=l,n.oz+=c}function Tl(n){n.rho=void 0;const{nx:e,ny:t,nz:i}=n,s=(u,f,p)=>u<0||f<0||p<0||u>=e||f>=t||p>=i?-1:n.density[(u*t+f)*i+p],r=[];for(let u=0;u<e;u++)for(let f=0;f<t;f++)for(let p=0;p<i;p++)s(u,f,p)>0&&r.push([u,f,p]);n.solid=r;const a=r.slice();for(const u of n.items)if(ht(u.mat))for(let f=0;f<8;f++)a.push([u.x+(f&1),u.y+(f>>1&1),u.z+(f>>2&1)]);if(!a.length){n.contacts=[];return}const o=[0,0,0];for(const[u,f,p]of a)o[0]+=u,o[1]+=f,o[2]+=p;o[0]=o[0]/a.length*C,o[1]=o[1]/a.length*C,o[2]=o[2]/a.length*C;const l=[o[0]-n.com[0],o[1]-n.com[1],o[2]-n.com[2]];ln(n.q,l,je),n.pos[0]+=je[0],n.pos[1]+=je[1],n.pos[2]+=je[2],n.com=o;const c=[];let h=0;for(const[u,f,p]of r){const m=u*C-o[0],v=f*C-o[1],g=p*C-o[2];h=Math.max(h,Math.hypot(m,v,g));let d=!1;for(const[x,M,y]of oc)if(s(u+x,f+M,p+y)<=0){d=!0;break}d&&c.push([m,v,g])}for(let u=r.length;u<a.length;u++){const[f,p,m]=a[u],v=f*C-o[0],g=p*C-o[1],d=m*C-o[2];h=Math.max(h,Math.hypot(v,g,d)),c.push([v,g,d])}n.contacts=c,n.radius=Math.max(h,C),n.rest=0,n.settled=!1}function tx(n,e){if(e.op==="add"&&$n(e.mat))return[n];const t=bl(n,[e.x,e.y,e.z]),i=e.size*.5+C*2;e.op==="add"&&ex(n,Math.floor((t[0]-i)/C),Math.floor((t[1]-i)/C),Math.floor((t[2]-i)/C),Math.ceil((t[0]+i)/C),Math.ceil((t[1]+i)/C),Math.ceil((t[2]+i)/C));const s=bl(n,[e.x,e.y,e.z]),r={...e,x:s[0],y:s[1],z:s[2]},a=uf(n);Ms(a,r),n.items=[];for(let m=0;m<n.nx-1;m++)for(let v=0;v<n.ny-1;v++)for(let g=0;g<n.nz-1;g++){const d=(m*n.ny+v)*n.nz+g;n.hard[d]!==0&&n.items.push({x:m,y:v,z:g,mat:n.hard[d],sub:n.sub[d]})}const{nx:o,ny:l,nz:c}=n,h=n.density,u=new Uint8Array(o*l*c),f=[];for(let m=0;m<o;m++)for(let v=0;v<l;v++)for(let g=0;g<c;g++){const d=(m*l+v)*c+g;if(h[d]<=0||u[d])continue;const x=[],M=[m,v,g];for(u[d]=1;M.length;){const y=M.pop(),w=M.pop(),E=M.pop();x.push([E,w,y]);for(const[b,T,S]of oc){const A=E+b,_=w+T,R=y+S;if(A<0||_<0||R<0||A>=o||_>=l||R>=c)continue;const P=(A*l+_)*c+R;h[P]<=0||u[P]||(u[P]=1,M.push(A,_,R))}}if(x.length<=da){for(const[y,w,E]of x)h[(y*l+w)*c+E]=-it;continue}f.push(x)}if(f.length===0)return n.items.length?(Tl(n),[n]):[];if(f.length===1)return Tl(n),[n];const p=[];for(const m of f){let v=1/0,g=1/0,d=1/0,x=-1/0,M=-1/0,y=-1/0;for(const[b,T,S]of m)v=Math.min(v,b),g=Math.min(g,T),d=Math.min(d,S),x=Math.max(x,b),M=Math.max(M,T),y=Math.max(y,S);const w=ba(a,m,[],v-1,g-1,d-1,x-v+3,M-g+3,y-d+3),E=Ua(n,w.pos);w.pos=E,w.q=[n.q[0],n.q[1],n.q[2],n.q[3]],w.vel=[n.vel[0],n.vel[1],n.vel[2]],w.ang=[n.ang[0],n.ang[1],n.ang[2]],w.texOrigin=[n.texOrigin[0]+w.ox*C,n.texOrigin[1]+w.oy*C,n.texOrigin[2]+w.oz*C],p.push(w)}return p}function ln(n,e,t){const[i,s,r,a]=n,[o,l,c]=e,h=a*o+s*c-r*l,u=a*l+r*o-i*c,f=a*c+i*l-s*o,p=-i*o-s*l-r*c;return t[0]=h*a+p*-i+u*-r-f*-s,t[1]=u*a+p*-s+f*-i-h*-r,t[2]=f*a+p*-r+h*-s-u*-i,t}function Us(n){return[-n[0],-n[1],-n[2],n[3]]}function nx(n,e,t){const[i,s,r]=e,[a,o,l,c]=n,h=.5*t*(i*c+s*l-r*o),u=.5*t*(s*c+r*a-i*l),f=.5*t*(r*c+i*o-s*a),p=.5*t*(-i*a-s*o-r*l);let m=a+h,v=o+u,g=l+f,d=c+p;const x=Math.hypot(m,v,g,d)||1;n[0]=m/x,n[1]=v/x,n[2]=g/x,n[3]=d/x}const je=[0,0,0],Li=[0,0,0];function ix(n,e,t,i=O1,s){if(e.settled)return;e.age+=t;const r=e.vel,a=e.ang;let o=0;if(s?.water){let M=0,y=0;for(const w of e.contacts)ln(e.q,w,je),y++,n.waterAt(e.pos[0]+je[0],e.pos[1]+je[1],e.pos[2]+je[2])&&M++;y===0&&n.waterAt(e.pos[0],e.pos[1],e.pos[2])&&(M=1,y=1),o=y?M/y:0}const l=o>0?Z1(e):1;if(r[1]-=k1*(e.snow?W1:1)*(1-o/l)*t,e.snow&&(i=Math.min(i,X1)),o>0){const M=Math.hypot(r[0],r[1],r[2]),y=Math.exp(-t*o*(Y1+q1*M));r[0]*=y,r[1]*=y,r[2]*=y;const w=Math.exp(-t*o*Q1);a[0]*=w,a[1]*=w,a[2]*=w,i=Math.min(i,K1)}const c=Math.hypot(r[0],r[1],r[2]);if(c>i){const M=i/c;r[0]*=M,r[1]*=M,r[2]*=M}e.pos[0]+=r[0]*t,e.pos[1]+=r[1]*t,e.pos[2]+=r[2]*t,nx(e.q,a,t);const h=1,u=1/(.4*e.radius*e.radius);let f=0,p=0,m=0,v=0;e.touching=!1;for(const M of e.contacts){ln(e.q,M,je);const y=e.pos[0]+je[0],w=e.pos[1]+je[1],E=e.pos[2]+je[2];let b,T=0,S=1,A=0;if(w<0)b=-w;else{const B=n.sample(y,w,E),k=n.hardAt(y,w,E)!==0&&n.hardOccupiedAt(y,w,E);if(B<=0&&!k)continue;b=k?Math.max(B,.12):B,n.gradient(y,w,E,Li);const X=Math.hypot(Li[0],Li[1],Li[2]);X>1e-4&&!k&&(T=-Li[0]/X,S=-Li[1]/X,A=-Li[2]/X)}b=Math.min(b,.5),e.touching=!0;const _=je[0],R=je[1],P=je[2],z=r[0]+(a[1]*P-a[2]*R),O=r[1]+(a[2]*_-a[0]*P),L=r[2]+(a[0]*R-a[1]*_),U=z*T+O*S+L*A;if(U<0){const B=R*A-P*S,k=P*T-_*A,X=_*S-R*T,K=h+u*(B*B+k*k+X*X),oe=-1.12*U/K;r[0]+=oe*T*h,r[1]+=oe*S*h,r[2]+=oe*A*h,a[0]+=u*B*oe,a[1]+=u*k*oe,a[2]+=u*X*oe;const we=z-U*T,be=O-U*S,Se=L-U*A,Z=Math.hypot(we,be,Se);if(Z>1e-4){const ne=we/Z,me=be/Z,le=Se/Z,se=R*le-P*me,Ae=P*ne-_*le,Ge=_*me-R*ne,N=h+u*(se*se+Ae*Ae+Ge*Ge),ze=Math.min(Z/N,H1*oe);r[0]-=ze*ne*h,r[1]-=ze*me*h,r[2]-=ze*le*h,a[0]-=u*se*ze,a[1]-=u*Ae*ze,a[2]-=u*Ge*ze}}f+=T*b,p+=S*b,m+=A*b,v++}v>0&&(e.pos[0]+=f/v*1.05,e.pos[1]+=p/v*1.05,e.pos[2]+=m/v*1.05);const g=Math.exp(-t*(v>0?.9:.05));r[0]*=g,r[2]*=g,v>0&&(r[1]*=g);const d=Math.exp(-t*(e.snow?3:v>0?1.1:.3));if(a[0]*=d,a[1]*=d,a[2]*=d,e.snow){const M=Math.hypot(a[0],a[1],a[2]);if(M>Ph){const y=Ph/M;a[0]*=y,a[1]*=y,a[2]*=y}}e.pos[0]=Math.min(n.sizeX-e.radius,Math.max(e.radius,e.pos[0])),e.pos[2]=Math.min(n.sizeZ-e.radius,Math.max(e.radius,e.pos[2]));const x=v>0&&Math.hypot(r[0],r[1],r[2])<.25&&Math.hypot(a[0],a[1],a[2])<.35;e.rest=x?e.rest+t:0,(e.rest>G1&&e.age>V1||e.age>j1)&&(e.settled=!0)}function Cl(n,e,t,i){const s=e/C,r=t/C,a=i/C,o=Math.floor(s),l=Math.floor(r),c=Math.floor(a);let h=0,u=0;for(let f=0;f<8;f++){const p=o+(f&1),m=l+(f>>1&1),v=c+(f>>2&1);if(p<0||m<0||v<0||p>=n.nx||m>=n.ny||v>=n.nz)continue;const g=(p*n.ny+m)*n.nz+v,d=n.density[g];d>h&&n.material[g]!==0&&(h=d,u=n.material[g])}return u}function lc(n,e,t,i){const s=e/C,r=t/C,a=i/C,o=Math.floor(s),l=Math.floor(r),c=Math.floor(a);if(o<0||l<0||c<0||o>=n.nx-1||l>=n.ny-1||c>=n.nz-1)return-it;const h=s-o,u=r-l,f=a-c,p=(y,w,E)=>n.density[(y*n.ny+w)*n.nz+E],m=p(o,l,c)+(p(o+1,l,c)-p(o,l,c))*h,v=p(o,l,c+1)+(p(o+1,l,c+1)-p(o,l,c+1))*h,g=p(o,l+1,c)+(p(o+1,l+1,c)-p(o,l+1,c))*h,d=p(o,l+1,c+1)+(p(o+1,l+1,c+1)-p(o,l+1,c+1))*h,x=m+(g-m)*u,M=v+(d-v)*u;return x+(M-x)*f}function cc(n,e){const t=e.radius+C*El;return{x0:Math.max(0,Math.floor((e.pos[0]-t)/C)),y0:Math.max(0,Math.floor((e.pos[1]-t)/C)),z0:Math.max(0,Math.floor((e.pos[2]-t)/C)),x1:Math.min(n.nx-1,Math.ceil((e.pos[0]+t)/C)),y1:Math.min(n.ny-1,Math.ceil((e.pos[1]+t)/C)),z1:Math.min(n.nz-1,Math.ceil((e.pos[2]+t)/C))}}function ff(n,e){const t=(e.x1-e.x0+1)*(e.y1-e.y0+1)*(e.z1-e.z0+1),i=new Float32Array(t),s=new Uint8Array(t),r=new Uint8Array(t),a=new Uint32Array(t);let o=0;for(let l=e.x0;l<=e.x1;l++)for(let c=e.y0;c<=e.y1;c++)for(let h=e.z0;h<=e.z1;h++,o++){const u=n.index(l,c,h);i[o]=n.density[u],s[o]=n.material[u],r[o]=n.hard[u],a[o]=n.sub[u]}return{d:i,m:s,h:r,s:a}}function sx(n,e,t){let i=0;for(let s=e.x0;s<=e.x1;s++)for(let r=e.y0;r<=e.y1;r++)for(let a=e.z0;a<=e.z1;a++,i++){const o=n.index(s,r,a);n.density[o]=t.d[i],n.material[o]=t.m[i],n.hard[o]!==t.h[i]&&n.setHard(s,r,a,t.h[i]),n.sub[o]=t.s[i]}}function rx(n,e,t){if(t<=1e-6)return Math.max(n,e);const i=Math.max(0,Math.min(1,.5+.5*(e-n)/t));return n+(e-n)*i+t*i*(1-i)}function Kr(n,e,t,i,s,r){const a=n.density,o=n.material,l=Us(e.q),c=[0,0,0];let h=0;for(let u=t.x0;u<=t.x1;u++)for(let f=t.y0;f<=t.y1;f++)for(let p=t.z0;p<=t.z1;p++,h++){const m=n.index(u,f,p);je[0]=u*C-e.pos[0],je[1]=f*C-e.pos[1],je[2]=p*C-e.pos[2],ln(l,je,c);const v=c[0]+e.com[0],g=c[1]+e.com[1],d=c[2]+e.com[2],x=lc(e,v,g,d)-s,M=i.d[h];if(f>=n.ny-1||x<=-4){a[m]=M,o[m]=i.m[h];continue}const y=Math.min(it,rx(M,x,r));a[m]=y,x>M&&x>0||y>0&&M<=0?o[m]=Cl(e,v,g,d)||i.m[h]:o[m]=i.m[h]}}function df(n,e,t=[0,0,0]){return Ua(n,[(e.x+.5)*C,(e.y+.5)*C,(e.z+.5)*C],t)}function Bh(n,e){let t=0;e[0]=0,e[1]=0,e[2]=0;for(let i=0;i<27;i++)n&1<<i&&(e[0]+=i%3-1,e[1]+=Math.floor(i/3)%3-1,e[2]+=Math.floor(i/9)-1,t++);return t&&(e[0]/=t,e[1]/=t,e[2]/=t),t}function ax(n,e){if(n===0||n===Gt)return n;const t=[ln(e,[1,0,0],[0,0,0]),ln(e,[0,1,0],[0,0,0]),ln(e,[0,0,1],[0,0,0])],i=[-1,-1,-1],s=[1,1,1],r=[!1,!1,!1];for(let m=0;m<2;m++){let v=-1,g=-1,d=-1;for(let x=0;x<3;x++)if(!(i[x]>=0))for(let M=0;M<3;M++)!r[M]&&Math.abs(t[x][M])>d&&(d=Math.abs(t[x][M]),v=M,g=x);i[g]=v,s[g]=t[g][v]<0?-1:1,r[v]=!0}const a=i.indexOf(-1),o=r.indexOf(!1);i[a]=o;const l=(a+1)%3,c=(a+2)%3,h=[0,0,0],u=[0,0,0];h[i[l]]=s[l],u[i[c]]=s[c];const f=[h[1]*u[2]-h[2]*u[1],h[2]*u[0]-h[0]*u[2],h[0]*u[1]-h[1]*u[0]];s[a]=f[o]<0?-1:1;let p=0;for(let m=0;m<27;m++)if(n&1<<m){const v=[m%3-1,Math.floor(m/3)%3-1,Math.floor(m/9)-1],g=[0,0,0];for(let d=0;d<3;d++)g[i[d]]+=s[d]*v[d];p|=1<<g[0]+1+3*(g[1]+1+3*(g[2]+1))}return p}const Zr=[0,0,0],jr=[0,0,0],ox=.03;function lx(n,e,t,i){const s=n.density,r=n.material,a=t.y1-t.y0+1,o=t.z1-t.z0+1,l=(d,x,M)=>i[((d-t.x0)*a+(x-t.y0))*o+(M-t.z0)],c=(d,x,M)=>d>=t.x0&&d<=t.x1&&x>=t.y0&&x<=t.y1&&M>=t.z0&&M<=t.z1,h=Us(e.q),u=[0,0,0],f=(d,x,M)=>(je[0]=d*C-e.pos[0],je[1]=x*C-e.pos[1],je[2]=M*C-e.pos[2],ln(h,je,u),lc(e,u[0]+e.com[0],u[1]+e.com[1],u[2]+e.com[2])),p=[],m=[],v=2;for(let d=t.x0;d<=t.x1;d++)for(let x=t.y0;x<=t.y1;x++)for(let M=t.z0;M<=t.z1;M++){const y=n.index(d,x,M);if(s[y]<=0||l(d,x,M)>0)continue;let w=!1;for(const[E,b,T]of cx){const S=d+E,A=x+b,_=M+T;if(c(S,A,_)&&s[n.index(S,A,_)]<=0){w=!0;break}}if(w)for(let E=-v;E<=v;E++)for(let b=-v;b<=v;b++)for(let T=-v;T<=v;T++){if(Math.abs(E)+Math.abs(b)+Math.abs(T)<2)continue;const A=d+E,_=x+b,R=M+T;if(!c(A,_,R)||l(A,_,R)<=0||s[n.index(A,_,R)]<=0)continue;const P=[];for(let L=0;L<Math.abs(E);L++)P.push([Math.sign(E),0,0]);for(let L=0;L<Math.abs(b);L++)P.push([0,Math.sign(b),0]);for(let L=0;L<Math.abs(T);L++)P.push([0,0,Math.sign(T)]);let z=null,O=-1/0;for(const L of hx(P.length)){let U=d,B=x,k=M,X=1/0;const K=[];for(let oe=0;oe<L.length-1;oe++){const we=P[L[oe]];U+=we[0],B+=we[1],k+=we[2];const be=n.index(U,B,k);K.push(be);const Se=s[be];X=Math.min(X,Se>0?Se:Math.min(l(U,B,k),f(U,B,k)))}X>O&&(O=X,z=K)}if(!(!z||O>0)&&!(O<-.15))for(const L of z)s[L]<=0&&(p.push(L),m.push(r[y]))}}let g=0;for(let d=0;d<p.length;d++){const x=p[d];s[x]<=0&&(s[x]=ox,r[x]=m[d],g++)}return g}const cx=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],yo=[];function hx(n){if(yo[n])return yo[n];const e=[],t=(i,s)=>{if(!s.length){e.push(i);return}for(let r=0;r<s.length;r++)t([...i,s[r]],s.filter((a,o)=>o!==r))};return t([],Array.from({length:n},(i,s)=>s)),yo[n]=e,e}function pf(n,e,t="all"){if(t!=="solid")for(const o of e.items){if(ht(o.mat)&&!bt[o.mat]?.emissive)continue;let l,c,h,u=0;if(ht(o.mat)){const m=o.sub||Gt;u=ax(m,e.q),Bh(m,Zr);const v=Ua(e,[(o.x+.5)*C+Zr[0]*C/3,(o.y+.5)*C+Zr[1]*C/3,(o.z+.5)*C+Zr[2]*C/3]);Bh(u,jr),l=Math.round((v[0]-jr[0]*C/3)/C-.5),c=Math.round((v[1]-jr[1]*C/3)/C-.5),h=Math.round((v[2]-jr[2]*C/3)/C-.5)}else{const m=df(e,o);l=Math.floor(m[0]/C),c=Math.floor(m[1]/C),h=Math.floor(m[2]/C)}if(!n.inBounds(l,c,h)||l>=n.nx-1||c>=n.ny-1||h>=n.nz-1)continue;const f=n.index(l,c,h),p=n.getHard(l,c,h);if(p===0)n.setHard(l,c,h,o.mat),n.sub[f]=u===Gt?0:u;else if(p===o.mat&&u!==0){const v=(n.sub[f]||Gt)|u;n.sub[f]=v===Gt?0:v}}if(t==="lights"||!e.items.some(o=>ht(o.mat)&&!bt[o.mat]?.emissive))return;const i=cc(n,e),s=Us(e.q),r=[0,0,0],a=new Uint8Array(27);for(let o=i.x0;o<Math.min(i.x1,n.nx-1);o++)for(let l=i.y0;l<Math.min(i.y1,n.ny-1);l++)for(let c=i.z0;c<Math.min(i.z1,n.nz-1);c++){const h=n.getHard(o,l,c);if(h!==0&&!ht(h))continue;let u=!1;for(let g=0;g<27;g++){a[g]=0;const d=g%3,x=Math.floor(g/3)%3,M=Math.floor(g/9);je[0]=(o+(d+.5)/gt)*C-e.pos[0],je[1]=(l+(x+.5)/gt)*C-e.pos[1],je[2]=(c+(M+.5)/gt)*C-e.pos[2],ln(s,je,r);const y=(r[0]+e.com[0])/C,w=(r[1]+e.com[1])/C,E=(r[2]+e.com[2])/C,b=Math.floor(y),T=Math.floor(w),S=Math.floor(E);if(b<0||T<0||S<0||b>=e.nx-1||T>=e.ny-1||S>=e.nz-1)continue;const A=(b*e.ny+T)*e.nz+S,_=e.hard[A];if(_===0||!ht(_)||bt[_]?.emissive)continue;const R=e.sub[A]||Gt,P=Math.min(gt-1,Math.floor((y-b)*gt)),z=Math.min(gt-1,Math.floor((w-T)*gt)),O=Math.min(gt-1,Math.floor((E-S)*gt));R&1<<P+3*z+9*O&&(a[g]=_,u=!0)}if(!u)continue;let f=0,p=0;for(let g=0;g<27;g++){const d=a[g];if(!d)continue;let x=0;for(let M=0;M<27;M++)a[M]===d&&x++;x>p&&(p=x,f=d)}if(h!==0&&h!==f)continue;let m=0;for(let g=0;g<27;g++)a[g]===f&&(m|=1<<g);const v=n.index(o,l,c);if(h===f){const g=n.sub[v]||Gt;m|=g}h===0&&n.setHard(o,l,c,f),n.sub[v]=m===Gt?0:m}}function Uh(n,e,t,i){const s=n.density,r=n.material;i?.items!=="none"&&pf(n,e,i?.items??"all");const{x0:a,y0:o,z0:l,x1:c,y1:h,z1:u}=cc(n,e),f=(c-a+1)*(h-o+1)*(u-l+1),p=i?.before&&i.before.d.length===f?i.before.d:ff(n,{x0:a,y0:o,z0:l,x1:c,y1:h,z1:u}).d,m=Us(e.q),v=[0,0,0];let g=null,d=0;for(let y=a;y<=c;y++)for(let w=o;w<=h;w++)for(let E=l;E<=u;E++){je[0]=y*C-e.pos[0],je[1]=w*C-e.pos[1],je[2]=E*C-e.pos[2],ln(m,je,v);const b=v[0]+e.com[0],T=v[1]+e.com[1],S=v[2]+e.com[2],A=lc(e,b,T,S);if(A<=-4)continue;const _=n.index(y,w,E);A>s[_]&&w<n.ny-1&&(t&&A>0&&s[_]<=0&&d++,s[_]=Math.min(A,it),A>0&&(r[_]=Cl(e,b,T,S)||r[_]),g=J1(g,{x0:y-1,y0:w-1,z0:E-1,x1:y+1,y1:w+1,z1:E+1}))}t&&(t.lost=Math.max(0,e.solid.length-d));const x=lx(n,e,{x0:a,y0:o,z0:l,x1:c,y1:h,z1:u},p);t&&(t.bridged=x);const M=g??{x0:a,y0:o,z0:l,x1:c,y1:h,z1:u};return{x0:Math.max(0,M.x0),y0:Math.max(0,M.y0),z0:Math.max(0,M.z0),x1:Math.min(n.nx-1,M.x1),y1:Math.min(n.ny-1,M.y1),z1:Math.min(n.nz-1,M.z1)}}function zh(n){return{ox:n.ox,oy:n.oy,oz:n.oz,nx:n.nx,ny:n.ny,nz:n.nz,density:Array.from(n.density,e=>+e.toFixed(4)),material:Array.from(n.material),hard:Array.from(n.hard),sub:Array.from(n.sub),items:n.items.map(e=>({...e})),pos:[...n.pos],q:[...n.q],vel:[...n.vel],ang:[...n.ang],age:n.age,texOrigin:[...n.texOrigin],snow:n.snow||void 0}}function ux(n){const e={ox:n.ox,oy:n.oy,oz:n.oz,nx:n.nx,ny:n.ny,nz:n.nz,density:Float32Array.from(n.density),material:Uint8Array.from(n.material),hard:Uint8Array.from(n.hard),sub:Uint32Array.from(n.sub),items:n.items.map(i=>({...i})),solid:[],contacts:[],com:[0,0,0],radius:C,pos:[...n.pos],q:[...n.q],vel:[...n.vel],ang:[...n.ang],rest:0,age:n.age,settled:!1,touching:!1,texOrigin:[...n.texOrigin],snow:n.snow||void 0},t=[e.pos[0],e.pos[1],e.pos[2]];return Tl(e),e.pos=t,e}const fx=3,dx=.7,px=2,qs=6,Fh=6,mx=.15,gx=.05,vx=2e3,Nh=32,xx=8,Mx=1,Oh=1.2,kh=40,yx=0,wx=0,Sx=4,wo=.4,Ax=.2,_x=0,So=[[0,0,0],[.5,.5,0],[.5,0,.5],[0,.5,.5]];function Qs(n,e,t,i){let s=n*374761393+e*1103515245+t*668265263+i*2246822519|0;return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}function Ex(n,e,t,i){if(i<=0)return-1;const s=Math.floor(n/i),r=Math.floor(e/i),a=Math.floor(t/i);let o=1/0,l=-1;for(let c=s-1;c<=s+1;c++)for(let h=r-1;h<=r+1;h++)for(let u=a-1;u<=a+1;u++)for(let f=0;f<4;f++){if(Qs(c,h,u,f+40)<Ax)continue;const p=(c+So[f][0]+(Qs(c,h,u,f)-.5)*wo)*i,m=(h+So[f][1]+(Qs(c,h,u,f+10)-.5)*wo)*i,v=(u+So[f][2]+(Qs(c,h,u,f+20)-.5)*wo)*i,g=((c*1024+h)*1024+u)*4+f,d=Math.hypot(n-p,e-m,t-v)+(Qs(n,e,t,g&1023)-.5)*_x*i;d<o&&(o=d,l=g)}return l}const Hh=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function Gh(n,e){let t=n*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),(t^t>>>16)>>>0}function Vh(n,e){return(Gh(n>>1,e>>1)&1)+((Gh(n,e)>>>3)%3===0?1:0)}class bx{constructor(e,t,i={reach:fx,creep:dx,calve:wx,slab:Fh,flight:yx}){this.field=e,this.loose=t,this.opts=i;const s=e.nx*e.nz;this.colLo=new Int16Array(s),this.colHi=new Int16Array(s),this.colKnown=new Uint8Array(s)}queue=[];queued=new Set;parkedCols=[];fuses=new Map;colLo;colHi;colKnown;cellOf=new Map;cellSlab=-1;scratchState=new Uint8Array(0);scratchReach=new Int16Array(0);scratchPast=new Uint8Array(0);get pending(){return this.queue.length}get parked(){return this.parkedCols.length}bubbleSort(e){const t=this.field.nz;if(!e||e.r<=0){this.parkedCols.length&&(this.queue.push(...this.parkedCols),this.parkedCols=[]);return}const i=[];for(const r of this.parkedCols)Ea(e,Math.floor(r/t),r%t)?this.queue.push(r):i.push(r);const s=[];for(const r of this.queue)Ea(e,Math.floor(r/t),r%t)?s.push(r):i.push(r);this.queue=s,this.parkedCols=i}wake(e){const t=this.field,i=this.opts.reach+1;for(let s=Math.max(0,e.x0-i);s<=Math.min(t.nx-1,e.x1+i);s++)for(let r=Math.max(0,e.z0-i);r<=Math.min(t.nz-1,e.z1+i);r++)this.wakeColumn(s,r),this.colKnown[s*t.nz+r]=0}wakeColumn(e,t){const i=e*this.field.nz+t;this.queued.has(i)||(this.queued.add(i),this.queue.push(i))}clear(){this.queue=[],this.parkedCols=[],this.queued.clear(),this.fuses.clear(),this.colKnown.fill(0),this.cellOf.clear()}coords(e){const t=this.field,i=e%t.nz,s=(e-i)/t.nz,r=s%t.ny;return[(s-r)/t.ny,r,i]}isPacked(e){return this.field.density[e]>0&&this.field.material[e]===gn&&this.loose[e]===0}groundUnder(e,t,i){const s=this.field;for(let r=1;r<=px;r++){const a=t-r;if(a<0)return!0;const o=s.index(e,a,i);if(s.density[o]>0)return s.material[o]!==gn;for(let l=Math.max(0,e-1);l<=Math.min(s.nx-2,e);l++)for(let c=Math.max(0,i-1);c<=Math.min(s.nz-2,i);c++)if(ht(s.hard[s.index(l,a,c)]))return!0}return!1}step(e,t=null,i=0){const s=this.field,r=this.opts.flight??0;let a=r>0&&i>=r;if(this.bubbleSort(t),this.queue.length===0)return{loosened:0,changed:null,bodies:[],powder:[]};const o=s.nz,l=this.queue[0],c=Math.floor(l/o),h=l%o,u=[],f=[];for(const le of this.queue){const se=Math.floor(le/o),Ae=le%o;u.length<vx&&Math.abs(se-c)<=Nh&&Math.abs(Ae-h)<=Nh?u.push(le):f.push(le)}this.queue=f;for(const le of u)this.queued.delete(le);let p=1/0,m=-1/0,v=1/0,g=-1/0;for(const le of u){const se=Math.floor(le/s.nz),Ae=le%s.nz;p=Math.min(p,se),m=Math.max(m,se),v=Math.min(v,Ae),g=Math.max(g,Ae)}const d=Math.max(1,Math.round(this.opts.reach)),x=Math.max(1,d-1),M=d+1;p=Math.max(0,p-M),v=Math.max(0,v-M),m=Math.min(s.nx-1,m+M),g=Math.min(s.nz-1,g+M);const y={loosened:0,changed:null,bodies:[],powder:[]};this.opts.calve>0&&this.calve(u,e,y);const w=m-p+1,E=g-v+1,b=s.ny,T=s.ny,S=w*E*b;this.scratchState.length<S&&(this.scratchState=new Uint8Array(S),this.scratchReach=new Int16Array(S),this.scratchPast=new Uint8Array(S));const A=this.scratchState.fill(0,0,S),_=this.scratchReach.fill(0,0,S),R=s.density,P=s.material,z=this.loose,O=(le,se,Ae)=>(le*E+Ae)*b+se,L=(le,se,Ae)=>((p+le)*T+se)*o+v+Ae;let U=0;const B=[];for(let le=0;le<w;le++)for(let se=0;se<E;se++){const Ae=p+le,Ge=v+se,N=Ae*o+Ge;if(!this.colKnown[N]){let Ee=b,ke=-1,Je=L(le,0,se);for(let $e=0;$e<b;$e++,Je+=o)R[Je]>0&&P[Je]===gn&&($e<Ee&&(Ee=$e),ke=$e);this.colLo[N]=Ee,this.colHi[N]=ke,this.colKnown[N]=1}const ze=this.colLo[N],Fe=this.colHi[N];if(Fe<ze)continue;let Te=L(le,ze,se),ue=O(le,ze,se),Ve=!1;for(let Ee=ze;Ee<=Fe;Ee++,Te+=o,ue++){if(!(R[Te]>0&&P[Te]===gn&&z[Te]===0)){Ve=!1;continue}Ve||this.groundUnder(Ae,Ee,Ge)?(A[ue]=1,Ve=!0,B.push(ue)):(A[ue]=2,U++,Ve=!1)}}if(U===0)return y;const k=[E*b,-E*b,b,-b],X=le=>Math.floor(le/(E*b)),K=le=>Math.floor(le/b)%E,oe=le=>le%b;let we=[];for(const le of B){const se=X(le),Ae=K(le);for(let Ge=0;Ge<4;Ge++){if(Ge===0&&se===w-1||Ge===1&&se===0||Ge===2&&Ae===E-1||Ge===3&&Ae===0)continue;const N=le+k[Ge];A[N]===2&&_[N]===0&&(_[N]=1,we.push(N))}}let be=1;for(;we.length;){for(let se=0;se<we.length;se++){const Ae=we[se],Ge=oe(Ae);for(let N=Ae+1,ze=Ge+1;ze<b&&A[N]===2&&_[N]===0;N++,ze++)_[N]=be,we.push(N);for(let N=Ae-1,ze=Ge-1;ze>=0&&A[N]===2&&_[N]===0;N--,ze--)_[N]=be,we.push(N)}const le=[];for(const se of we){const Ae=X(se),Ge=K(se);for(let N=0;N<4;N++){if(N===0&&Ae===w-1||N===1&&Ae===0||N===2&&Ge===E-1||N===3&&Ge===0)continue;const ze=se+k[N];A[ze]===2&&_[ze]===0&&(_[ze]=be+1,le.push(ze))}}we=le,be++}const Se=this.scratchPast.fill(0,0,S),Z=[];for(let le=0;le<S;le++){const se=_[le];se!==0&&se>=x+Vh(p+X(le),v+K(le))&&(Se[le]=1,Z.push(le))}const ne=new Set,me=new Set;for(const le of Z){if(Se[le]!==1)continue;const se=[le];Se[le]=2;let Ae=0;for(let Te=0;Te<se.length;Te++){const ue=se[Te];_[ue]>Ae&&(Ae=_[ue]);const Ve=X(ue),Ee=K(ue),ke=oe(ue);ke+1<b&&Se[ue+1]===1&&(Se[ue+1]=2,se.push(ue+1)),ke>0&&Se[ue-1]===1&&(Se[ue-1]=2,se.push(ue-1));for(let Je=0;Je<4;Je++){if(Je===0&&Ve===w-1||Je===1&&Ve===0||Je===2&&Ee===E-1||Je===3&&Ee===0)continue;const $e=ue+k[Je];Se[$e]===1&&(Se[$e]=2,se.push($e))}}if(Ae<d||se.length<qs)continue;const Ge=new Array(se.length),N=new Map;let ze=1/0;for(let Te=0;Te<se.length;Te++){const ue=se[Te],Ve=L(X(ue),oe(ue),K(ue));Ge[Te]=Ve,N.set(Ve,_[ue]),ne.add(Ve),ze=Math.min(ze,oe(ue))}const Fe=this.pieces(Ge,N);Fe.sort((Te,ue)=>ue.far-Te.far||Te.bottom-ue.bottom||Te.key-ue.key);for(let Te=0;Te<Fe.length;Te++){const ue=Fe[Te];me.add(ue.key);const Ve=this.fuses.get(ue.key);if(Ve===void 0){this.fuses.set(ue.key,e+this.opts.creep*(1+mx*Te)),this.rewake(ue.corners);continue}if(e<Ve||a){this.rewake(ue.corners);continue}if(this.opts.bodies??!0){if(!this.cleave(ue,ze,N,y))continue;this.fuses.delete(ue.key)}else this.fuses.delete(ue.key),this.loosen(ue.corners,y);r>0&&(a=!0)}}for(const le of Array.from(this.fuses.keys())){if(le>=1073741824||me.has(le)||ne.has(le))continue;const[se,,Ae]=this.coords(le);se>=p&&se<=m&&Ae>=v&&Ae<=g&&this.fuses.delete(le)}return y}calve(e,t,i){const s=this.field,r=s.density,a=Math.round(this.opts.calve),o=(c,h)=>{for(let u=s.ny-1;u>=0;u--)if(r[s.index(c,u,h)]>0)return u;return-1},l=[];for(const c of e){const h=Math.floor(c/s.nz),u=c%s.nz;let f=-1;for(let x=s.ny-1;x>=0;x--){const M=s.index(h,x,u);if(r[M]>0){this.isPacked(M)&&(f=x);break}}if(f<0)continue;let p=f;for(;p>0&&this.isPacked(s.index(h,p-1,u));)p--;let m=f;for(let x=1;x<=Sx;x++)for(const[M,y]of[[1,0],[-1,0],[0,1],[0,-1]]){const w=h+M*x,E=u+y*x;w<0||E<0||w>=s.nx||E>=s.nz||(m=Math.min(m,o(w,E)))}if(m=Math.max(m,p),f-m<a)continue;const v=1073741824+c,g=this.fuses.get(v);if(g===void 0){this.fuses.set(v,t+this.opts.creep*2),this.wakeColumn(h,u);continue}if(t<g){this.wakeColumn(h,u);continue}const d=m+Math.round(a*.6)+Vh(h,u);for(let x=d;x<=f;x++){const M=s.index(h,x,u);this.isPacked(M)&&l.push(M)}this.fuses.delete(v)}if(l.length>=qs)this.loosen(l,i);else for(const c of l);}pieces(e,t){const i=this.field,s=Math.round(this.opts.slab??Fh),r=new Map,a=new Map,o=s*Math.SQRT2;this.cellSlab!==s&&(this.cellOf.clear(),this.cellSlab=s);for(const c of e){let h=this.cellOf.get(c);if(h===void 0){const[f,p,m]=this.coords(c);h=s>0?Ex(f,p,m,o):0,this.cellOf.set(c,h)}r.set(c,h);const u=a.get(h);u?u.push(c):a.set(h,[c])}if(s>0){const c=this.opts.bodies??!0?kh:qs,h=new Map;for(const[p,m]of a){let v=1/0,g=-1/0,d=1/0,x=-1/0,M=1/0,y=-1/0;for(const w of m){const[E,b,T]=this.coords(w);b<v&&(v=b),b>g&&(g=b),E<d&&(d=E),E>x&&(x=E),T<M&&(M=T),T>y&&(y=T)}h.set(p,[v,g,d,x,M,y])}const u=2*s,f=Array.from(a.keys()).filter(p=>a.get(p).length<c).sort((p,m)=>a.get(p).length-a.get(m).length);for(const p of f){const m=a.get(p);if(!m||m.length>=c)continue;const v=h.get(p);let g=-1,d=1/0;for(const M of m){const[y,w,E]=this.coords(M);for(const[b,T,S]of Hh){const A=y+b,_=w+T,R=E+S;if(A<0||_<0||R<0||A>=i.nx||_>=i.ny||R>=i.nz)continue;const P=r.get(i.index(A,_,R));if(P===void 0||P===p)continue;const z=h.get(P),O=Math.max(z[1],v[1])-Math.min(z[0],v[0]);O>u||Math.max(z[3],v[3])-Math.min(z[2],v[2])>u||Math.max(z[5],v[5])-Math.min(z[4],v[4])>u||O<d&&(d=O,g=P)}}if(g<0)continue;for(const M of m)r.set(M,g);a.get(g).push(...m);const x=h.get(g);h.set(g,[Math.min(x[0],v[0]),Math.max(x[1],v[1]),Math.min(x[2],v[2]),Math.max(x[3],v[3]),Math.min(x[4],v[4]),Math.max(x[5],v[5])]),a.delete(p),h.delete(p)}}const l=[];for(const c of a.values()){if(c.length<qs)continue;let h=1/0,u=0,f=-1,p=1/0;for(const m of c){h=Math.min(h,m);const v=t.get(m)??0;u=Math.max(u,v);const g=this.coords(m)[1];f=Math.max(f,g),p=Math.min(p,g)}l.push({key:h,corners:c,far:u,top:f,bottom:p})}return l}cleave(e,t,i,s){const r=this.field,a=r.density,o=this.opts.powder??Mx,l=e.corners;if(e.bottom-t>=xx||e.far<Math.max(1,Math.round(this.opts.reach)))return!1;const c=new Set(l);if(c.size<qs)return!1;for(const R of c){const[P,z,O]=this.coords(R);if(z===0)continue;const L=r.index(P,z-1,O);if(!c.has(L)&&this.isPacked(L))return!1}const h=[];let u=0,f=0;for(const R of c){const[P,z,O]=this.coords(R);let L=!1;for(const[U,B,k]of Hh){const X=P+U,K=z+B,oe=O+k;if(X<0||K<0||oe<0||X>=r.nx||K>=r.ny||oe>=r.nz)continue;const we=r.index(X,K,oe);if(!c.has(we)&&!i.has(we)&&this.isPacked(we)){L=!0;break}}L&&(h.push(R),u+=P,f+=O)}const p=new Map;for(const R of h){const[P,z,O]=this.coords(R);if(ar(P*7+z*13,O*17+z*3)>=o)continue;c.delete(R),a[R]=-it;const L=P*r.nz+O,U=p.get(L);U?(U.n++,U.y=Math.max(U.y,z)):p.set(L,{y:z,n:1})}let m=1/0,v=1/0,g=1/0,d=-1/0,x=-1/0,M=-1/0,y=0,w=0;const E=[];for(const R of c){const P=this.coords(R);E.push(P),m=Math.min(m,P[0]),v=Math.min(v,P[1]),g=Math.min(g,P[2]),d=Math.max(d,P[0]),x=Math.max(x,P[1]),M=Math.max(M,P[2]),y+=P[0],w+=P[2]}const b=Math.max(1,c.size);let T=y/b-(h.length?u/h.length:y/b),S=w/b-(h.length?f/h.length:w/b);const A=Math.hypot(T,S);A>1e-6?(T/=A,S/=A):(T=1,S=0);for(const[R,P]of p)s.powder.push({x:Math.floor(R/r.nz),z:R%r.nz,y:P.y,corners:P.n,dx:T,dz:S});if(c.size<kh){const R=new Map;for(const[P,z,O]of E){a[r.index(P,z,O)]=-it;const L=P*r.nz+O,U=R.get(L);U?(U.n++,U.y=Math.max(U.y,z)):R.set(L,{y:z,n:1})}for(const[P,z]of R)s.powder.push({x:Math.floor(P/r.nz),z:P%r.nz,y:z.y,corners:z.n})}else{const R=ba(r,E,[],m-1,v-1,g-1,d-m+3,x-v+3,M-g+3);R.vel=[T*Oh,-.3,S*Oh],R.age=-.8,R.snow=!0,s.bodies.push(R)}s.loosened+=c.size+h.length;const _={x0:Math.max(0,m-1),y0:Math.max(0,v-1),z0:Math.max(0,g-1),x1:Math.min(r.nx-1,d+1),y1:Math.min(r.ny-1,x+1),z1:Math.min(r.nz-1,M+1)};return s.changed=s.changed?{x0:Math.min(s.changed.x0,_.x0),y0:Math.min(s.changed.y0,_.y0),z0:Math.min(s.changed.z0,_.z0),x1:Math.max(s.changed.x1,_.x1),y1:Math.max(s.changed.y1,_.y1),z1:Math.max(s.changed.z1,_.z1)}:_,this.wake(_),!0}rewake(e){for(const t of e){const[i,,s]=this.coords(t);this.wakeColumn(i,s)}}loosen(e,t){const i=this.field;let s=1/0,r=1/0,a=1/0,o=-1/0,l=-1/0,c=-1/0;for(const u of e){this.loose[u]=1;const[f,p,m]=this.coords(u);s=Math.min(s,f),r=Math.min(r,p),a=Math.min(a,m),o=Math.max(o,f),l=Math.max(l,p),c=Math.max(c,m)}t.loosened+=e.length;const h={x0:Math.max(0,s-1),y0:Math.max(0,r-1),z0:Math.max(0,a-1),x1:Math.min(i.nx-1,o+1),y1:Math.min(i.ny-1,l+1),z1:Math.min(i.nz-1,c+1)};t.changed=t.changed?{x0:Math.min(t.changed.x0,h.x0),y0:Math.min(t.changed.y0,h.y0),z0:Math.min(t.changed.z0,h.z0),x1:Math.max(t.changed.x1,h.x1),y1:Math.max(t.changed.y1,h.y1),z1:Math.max(t.changed.z1,h.z1)}:h,this.wake(h)}settle(e=200,t=0){const i={loosened:0,changed:null,bodies:[],powder:[]};let s=t,r=0;for(;r<e&&this.queue.length;){r++;const a=this.step(s);i.loosened+=a.loosened,i.bodies.push(...a.bodies),i.powder.push(...a.powder),a.changed&&(i.changed=i.changed?{x0:Math.min(i.changed.x0,a.changed.x0),y0:Math.min(i.changed.y0,a.changed.y0),z0:Math.min(i.changed.z0,a.changed.z0),x1:Math.max(i.changed.x1,a.changed.x1),y1:Math.max(i.changed.y1,a.changed.y1),z1:Math.max(i.changed.z1,a.changed.z1)}:a.changed),s+=this.opts.creep*2+.01}return i}}function Tx(n,e){let t=0;const i=Math.max(1,Math.round(e))+1;for(let s=0;s<n.length;s++){const r=n[s];r!==0&&(r>=i?(n[s]=0,t++):r<255&&(n[s]=r+1))}return t}const Ao=9.8,Dl=4,Cx=.3,Wh=.5,Xh=2,Yh=3,mf=2,qh=.25,Dx=8;function Rx(n){const e=Math.max(0,n),t=Dl/Ao,i=.5*Ao*t*t;return(e<=i?Math.sqrt(2*e/Ao):t+(e-i)/Dl)+Cx}class Ix{constructor(e,t){this.field=e,this.slump=t}flights=[];mounds=[];get pending(){return this.flights.length+this.mounds.length}get inFlight(){let e=0;for(const t of this.flights)e+=t.corners;for(const t of this.mounds)e+=t.corners*(1-t.done);return e}landRow(e,t,i){const s=this.field,r=l=>{if(s.density[s.index(e,l,t)]>0)return!0;for(let c=Math.max(0,e-1);c<=Math.min(s.nx-2,e);c++)for(let h=Math.max(0,t-1);h<=Math.min(s.nz-2,t);h++)if(l>0&&s.hard[s.index(c,l-1,h)]!==0)return!0;return!1},a=Math.min(s.ny-1,i);let o=0;if(!r(0)){for(;o<=a&&!r(o);)o++;if(o>a)return-1}for(;o+1<s.ny&&r(o+1);)o++;return o>=i?-2:o}add(e,t){const i=[];for(let s of e){if(s.corners<=0)continue;let r=s.x,a=s.z,o=this.landRow(r,a,s.y-1);for(let c=1;o===-2&&c<=Dx&&s.dx!==void 0;c++){const h=Math.max(0,Math.min(this.field.nx-1,s.x+Math.round(s.dx*c))),u=Math.max(0,Math.min(this.field.nz-1,s.z+Math.round((s.dz??0)*c))),f=this.landRow(h,u,s.y-1);f!==-2&&(r=h,a=u,o=f)}o===-2&&(o=this.landRow(r,a,this.field.ny-1)),o=Math.max(0,o),s={...s,x:r,z:a};const l={...s,land:o,due:Math.ceil((t+Rx((s.y-o)*C))/Wh)*Wh};this.flights.push(l),i.push(l)}return i}addLost(e,t,i){if(t<=0)return[];const s=this.field,r=Math.round(e.pos[0]/C),a=Math.round(e.pos[2]/C),o=Math.min(s.ny-1,Math.round((e.pos[1]+e.radius)/C)),l=Math.max(1,Math.round(e.radius/C)-1),c=[];for(let u=r-l;u<=r+l;u+=2)for(let f=a-l;f<=a+l;f+=2)u>=0&&f>=0&&u<s.nx&&f<s.nz&&(u-r)*(u-r)+(f-a)*(f-a)<=l*l&&c.push([u,f]);c.length||c.push([Math.max(0,Math.min(s.nx-1,r)),Math.max(0,Math.min(s.nz-1,a))]);const h=t/c.length;return this.add(c.map(([u,f])=>({x:u,z:f,y:o,corners:h})),i)}step(e){if(!this.flights.length&&!this.mounds.length)return null;const t=this.field,i=[],s=[];for(const l of this.flights)(e<l.due?s:i).push(l);this.flights=s;const r=new Uint8Array(i.length);for(let l=0;l<i.length;l++){if(r[l])continue;const c=[l];r[l]=1;for(let g=0;g<c.length;g++){const d=i[c[g]];for(let x=0;x<i.length;x++)!r[x]&&Math.abs(i[x].x-d.x)<=Yh&&Math.abs(i[x].z-d.z)<=Yh&&(r[x]=1,c.push(x))}let h=0,u=0,f=0,p=0;for(const g of c){const d=i[g];h+=d.corners,u+=d.x*d.corners,f+=d.z*d.corners,p+=d.land*d.corners}if(h<=0)continue;const m=Math.max(0,Math.ceil(Math.sqrt(3*h/(Math.PI*Xh))-1));let v=0;for(let g=-m;g<=m;g++)for(let d=-m;d<=m;d++){const x=Math.hypot(g,d);x<=m&&(v+=1-x/(m+1))}this.mounds.push({x:Math.round(u/h),z:Math.round(f/h),r:m,weight:v,corners:h,done:0,started:e,lastStep:-1e9,land:Math.round(p/h)})}let a=null;const o=[];for(const l of this.mounds){const c=Math.min(1,(e-l.started+qh)/mf);if(c<1&&e-l.lastStep<qh){o.push(l);continue}const h=c-l.done;if(h>1e-6)for(let u=-l.r;u<=l.r;u++)for(let f=-l.r;f<=l.r;f++){const p=Math.hypot(u,f);if(p>l.r)continue;const m=l.x+u,v=l.z+f;if(m<0||v<0||m>=t.nx||v>=t.nz)continue;const g=this.slump.deposit(m,v,l.corners*h*(1-p/(l.r+1))/l.weight,l.land+Xh+2);if(!g)continue;const d={x0:Math.max(0,m-1),y0:Math.max(0,g[0]),z0:Math.max(0,v-1),x1:Math.min(t.nx-1,m+1),y1:Math.min(t.ny-1,g[1]),z1:Math.min(t.nz-1,v+1)};a=a?{x0:Math.min(a.x0,d.x0),y0:Math.min(a.y0,d.y0),z0:Math.min(a.z0,d.z0),x1:Math.max(a.x1,d.x1),y1:Math.max(a.y1,d.y1),z1:Math.max(a.z1,d.z1)}:d}l.done=c,l.lastStep=e,c<1&&o.push(l)}return this.mounds=o,a}clear(){this.flights=[],this.mounds=[]}}const nr={sandRepose:34,sandRate:.08,sandHz:30,snowReach:1.5,snowCreep:.7,snowCalve:0,snowRepose:55,snowSlumpRate:.15,snowSlumpHz:30,snowClumps:3,snowCrown:.5,snowPack:10,snowSlab:3,snowImpact:6,snowFlight:3,snowBodies:1,snowPowder:1,snowLandSlump:0,pourRate:6,waterHz:30,waterSmooth:.3,landBlend:1.2,tween:0,caustics:1,profile:0,moveCoarse:0,waterPhysics:1,ripple:1,voidFill:50,bubble:48},pa=[{key:"sandRepose",label:"sand angle",min:15,max:60,step:1,unit:"°",group:"sand"},{key:"sandRate",label:"sand rate",min:.02,max:.4,step:.01,unit:" m/pass",group:"sand"},{key:"sandHz",label:"sand cadence",min:2,max:40,step:1,unit:" /s",group:"sand"},{key:"snowReach",label:"cornice reach",min:.5,max:4,step:.5,unit:" m",group:"snow"},{key:"snowCreep",label:"cornice creep",min:0,max:3,step:.1,unit:" s",group:"snow"},{key:"snowCalve",label:"calving height",min:0,max:16,step:.5,unit:" m",group:"snow"},{key:"snowRepose",label:"loose snow angle",min:30,max:80,step:1,unit:"°",group:"snow"},{key:"snowSlumpRate",label:"loose snow rate",min:.02,max:.5,step:.01,unit:" m/pass",group:"snow"},{key:"snowSlumpHz",label:"loose snow cadence",min:2,max:40,step:1,unit:" /s",group:"snow"},{key:"snowClumps",label:"landing clumps",min:1,max:3,step:1,unit:"",group:"snow"},{key:"snowCrown",label:"mound crown",min:.25,max:2,step:.25,unit:" m",group:"snow"},{key:"snowPack",label:"snow packs after",min:1,max:60,step:1,unit:" min",group:"snow"},{key:"snowSlab",label:"slab size",min:0,max:8,step:.5,unit:" m",group:"snow"},{key:"snowImpact",label:"landing splash",min:1,max:12,step:1,unit:"×",group:"snow"},{key:"snowFlight",label:"pieces in the air",min:0,max:12,step:1,unit:"",group:"snow"},{key:"snowBodies",label:"breaks cleave off",min:0,max:1,step:1,unit:"",group:"snow"},{key:"snowPowder",label:"fracture powder",min:0,max:1,step:.1,unit:"",group:"snow"},{key:"snowLandSlump",label:"landed snow slumps",min:0,max:1,step:1,unit:"",group:"snow"},{key:"pourRate",label:"pour rate",min:1,max:40,step:1,unit:" cells/s",group:"water"},{key:"waterHz",label:"flow cadence",min:5,max:40,step:1,unit:" /s",group:"water"},{key:"waterSmooth",label:"surface smoothing",min:0,max:1,step:.05,unit:" s",group:"water"},{key:"waterPhysics",label:"water physics (bodies sink slow, splash)",min:0,max:1,step:1,unit:"",group:"water"},{key:"ripple",label:"ripple strength",min:0,max:4,step:.1,unit:"×",group:"water"},{key:"voidFill",label:"void rush-in (0 = fills at once)",min:0,max:100,step:5,unit:"%",group:"water"},{key:"landBlend",label:"landing settles over",min:.3,max:10,step:.1,unit:" s",group:"render"},{key:"tween",label:"a re-mesh slides in over (0 = instant)",min:0,max:1.5,step:.05,unit:" s",group:"render"},{key:"caustics",label:"ice caustics",min:0,max:1,step:1,unit:"",group:"render"},{key:"profile",label:"profile overlay",min:0,max:1,step:1,unit:"",group:"render"},{key:"moveCoarse",label:"coarse while moving",min:0,max:1,step:1,unit:"",group:"render"},{key:"bubble",label:"physics bubble",min:0,max:128,step:8,unit:" m",group:"physics"}];function Px(n){const e={...nr};if(!n)return e;for(const t of pa){const i=n[t.key];typeof i=="number"&&Number.isFinite(i)&&(e[t.key]=Math.min(t.max,Math.max(t.min,i)))}return e}const Lx=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),_o=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),fr=8,Bx=fr,Qh=fr+1,Ux=fr+2,zx={length:1.25,height:.95,width:.5},Fx={goat:zx,penguin:{length:.45,height:.66,width:.4},fish:{length:.5,height:.3,width:.25,centred:!0},cat:{length:.8,height:.42,width:.3}},Nx={walk:1.4,run:4.2,turn:2.6,flee:4.5,calm:10,probe:1,cliff:1.6,wall:.75,grazeOdds:.35},Ox={walk:.8,run:2.2,turn:2.2,flee:3.2,calm:8,probe:.7,cliff:1,wall:.5,grazeOdds:.3},kx={walk:1.1,run:3.6,turn:4,flee:0,calm:0,probe:.8,cliff:1.4,wall:.6,grazeOdds:0},Cn={swim:.7,dash:2.6,turn:3,flee:3.5,calm:7,probe:.6,school:6,close:2.2},Jr=2.2,Kh=12,Hx=15,Zh=20;function gf(n){return n==="fish"}function Rl(n,e,t,i,s,r,a,o=0){const l=a??Ps(n,t,i),c=hf(t,gf(e)?l:l+.05,i);return c.crouch=!0,{id:r,kind:e,body:c,yaw:o,yawTarget:o,pitch:0,pitchTarget:0,seed:s,phase:0,mood:"wander",timer:0,speed:0,bored:0,detour:0}}function jh(n){return{kind:n.kind,x:n.body.pos[0],y:n.body.pos[1],z:n.body.pos[2],yaw:n.yaw,seed:n.seed}}function Gx(n,e,t){return Rl(n,e.kind,e.x,e.z,e.seed,t,e.y,e.yaw)}function Vx(n,e,t,i){for(let s=t+1.2;s>t-3;s-=.15)if(n.sample(e,s,i)>0||n.solidAt(e,s,i))return s+.15;return null}function Wx(n){if(n.kind==="cat"){if(n.mood==="rest"||n.mood==="graze")return Qh}else if(n.mood==="graze")return Qh;return n.mood==="flop"?Math.floor(n.phase%1*fr):n.speed<(n.kind==="fish"?.15:.2)?Bx:Math.floor(n.phase%1*fr)}function vf(n,e,t){let i=n.yawTarget-n.yaw;i=Math.atan2(Math.sin(i),Math.cos(i));const s=e*t;return n.yaw+=Math.max(-s,Math.min(s,i)),i}function Xx(n,e,t,i,s,r,a,o,l){const c=e.body.pos,h=c[0]-s[0],u=c[2]-s[2],f=Math.hypot(h,u);if(e.kind==="cat"?(e.bored=Math.max(0,e.bored-i),e.detour=Math.max(0,e.detour-i),e.bored<=0&&f<Kh&&e.mood!=="follow"&&f>Jr&&(e.mood="follow",e.timer=Hx,e.detour=0),e.mood==="follow"?(e.detour<=0&&(e.yawTarget=Math.atan2(h,u)),f<Jr?(e.mood="rest",e.timer=4+r()*6):(e.timer<=0||f>Kh*1.5)&&(e.mood="wander",e.timer=2+r()*3,e.bored=Zh)):e.mood==="rest"&&f<Jr&&(e.yawTarget=Math.atan2(h,u))):(f<t.flee&&e.mood!=="flee"&&(e.mood="flee",e.timer=2+r()*2),e.mood==="flee"&&(e.yawTarget=Math.atan2(-h,-u),f>t.calm&&e.timer<=0&&(e.mood="wander",e.timer=1+r()*3))),e.timer-=i,e.timer<=0&&e.mood!=="flee"&&e.mood!=="follow"){const y=r();e.mood==="rest"&&e.kind==="cat"&&e.bored<=0&&f<Jr?(e.timer=3+r()*4,e.bored=e.timer>6?Zh:0):y<.45?(e.mood="wander",e.timer=2+r()*5,e.yawTarget=e.yaw+(r()-.5)*Math.PI,e.kind==="cat"&&(e.bored=Math.max(e.bored,3))):y<.45+t.grazeOdds?(e.mood="graze",e.timer=2+r()*4,a.push({kind:"graze",x:c[0],y:c[1],z:c[2]})):(e.mood="rest",e.timer=3+r()*5)}const p=y=>{const w=-Math.sin(y),E=-Math.cos(y),b=c[0]+w*t.probe,T=c[2]+E*t.probe;if(b<2||T<2||b>o-2||T>l-2)return!1;const S=Vx(n,b,c[1],T);return!(S===null||c[1]-S>t.cliff||S-c[1]>t.wall||n.waterAt(b,S-.1,T)||n.waterAt(b,S+.3,T))},m=e.mood==="flee"?t.run:e.mood==="follow"?f>7?t.run:t.walk:e.mood==="wander"?t.walk:0;if(m>0&&!p(e.yawTarget))if(e.mood==="follow"){const y=r()<.5?1:-1;let w=!1;for(const E of[.7,1.4,2.1])for(const b of[y,-y])!w&&p(e.yawTarget+E*b)&&(e.yawTarget+=E*b,e.detour=.7,w=!0);w||(e.mood="wander",e.timer=2,e.bored=6)}else e.yawTarget+=(r()<.5?1:-1)*(Math.PI*.5+r()*.5),e.mood==="wander"&&(e.timer=Math.max(e.timer,1.5));const v=vf(e,t.turn,i),g=Math.max(0,Math.cos(v)),d=m*(.3+.7*g);e.speed+=(d-e.speed)*Math.min(1,i*6);const x=-Math.sin(e.yaw)*e.speed,M=-Math.cos(e.yaw)*e.speed;ac(n,e.body,{wishX:x,wishZ:M,wishY:0,jump:!1,dt:i}),e.phase+=e.speed/t.walk*i*(e.kind==="penguin"?1.8:1.3)}function ws(n,e,t,i){return n.waterAt(e,t,i)&&!n.solidAt(e,t,i)}function Yx(n,e,t,i,s,r,a,o){const l=e.body.pos;if(!n.waterAt(l[0],l[1],l[2])){e.mood!=="flop"&&(e.mood="flop",e.timer=0),e.speed=0,e.pitch=0,e.body.fly=!1,ac(n,e.body,{wishX:0,wishZ:0,wishY:0,jump:!1,dt:i}),e.timer-=i,e.timer<=0&&(e.timer=.6+r()*2,e.yaw+=(r()-.5)*1.5),e.phase+=i*(e.timer<.3?6:.5);return}e.mood==="flop"&&(e.mood="wander",e.timer=0);const c=l[0]-s[0],h=l[1]-s[1]-1.2,u=l[2]-s[2],f=Math.hypot(c,h,u);if(f<Cn.flee&&e.mood!=="flee"&&(e.mood="flee",e.timer=1.5+r()*1.5),e.mood==="flee"&&(e.yawTarget=Math.atan2(-c,-u),e.pitchTarget=Math.max(-.5,Math.min(.5,Math.atan2(h,Math.hypot(c,u))*.5)),f>Cn.calm&&e.timer<=0&&(e.mood="wander",e.timer=1+r()*3)),e.timer-=i,e.timer<=0&&e.mood!=="flee"&&(r()<.6?(e.mood="wander",e.timer=2+r()*5,e.yawTarget=e.yaw+(r()-.5)*Math.PI,e.pitchTarget=(r()-.5)*.5):(e.mood="rest",e.timer=2+r()*4,e.pitchTarget=0),e.mood==="wander")){let A=0,_=0,R=0,P=0;for(const z of t){if(z===e||z.kind!==e.kind)continue;Math.hypot(z.body.pos[0]-l[0],z.body.pos[1]-l[1],z.body.pos[2]-l[2])<Cn.school&&(A+=z.body.pos[0],_+=z.body.pos[1],R+=z.body.pos[2],P++)}if(P){A/=P,_/=P,R/=P;const z=Math.hypot(A-l[0],R-l[2]);z>Cn.close&&(e.yawTarget=Math.atan2(-(A-l[0]),-(R-l[2]))+(r()-.5)*.6,e.pitchTarget=Math.max(-.4,Math.min(.4,Math.atan2(_-l[1],z))))}}ws(n,l[0],l[1]+.35,l[2])||(e.pitchTarget=Math.min(e.pitchTarget,-.35)),ws(n,l[0],l[1]-.35,l[2])||(e.pitchTarget=Math.max(e.pitchTarget,.35));const p=e.mood==="flee"?Cn.dash:e.mood==="wander"?Cn.swim:.1,m=-Math.sin(e.yawTarget)*Math.cos(e.pitchTarget),v=Math.sin(e.pitchTarget),g=-Math.cos(e.yawTarget)*Math.cos(e.pitchTarget),d=l[0]+m*Cn.probe,x=l[1]+v*Cn.probe,M=l[2]+g*Cn.probe;(d<2||M<2||d>a-2||M>o-2||!ws(n,d,x,M))&&(e.yawTarget+=(r()<.5?1:-1)*(Math.PI*.5+r()*.6),e.mood==="wander"&&(e.timer=Math.max(e.timer,1)));const y=vf(e,Cn.turn,i);e.pitch+=Math.max(-1.5*i,Math.min(1.5*i,e.pitchTarget-e.pitch));const w=Math.max(0,Math.cos(y));e.speed+=(p*(.3+.7*w)-e.speed)*Math.min(1,i*4);const E=-Math.sin(e.yaw)*Math.cos(e.pitch)*e.speed*i,b=Math.sin(e.pitch)*e.speed*i,T=-Math.cos(e.yaw)*Math.cos(e.pitch)*e.speed*i;ws(n,l[0]+E,l[1]+b,l[2]+T)?(l[0]+=E,l[1]+=b,l[2]+=T):(e.speed*=.5,e.yawTarget+=(r()<.5?1:-1)*1.2),e.phase+=(.6+e.speed/Cn.swim)*i*1.4}function qx(n,e,t,i,s){const r=[],a=(n.nx-1)*C,o=(n.nz-1)*C;for(const l of e)l.kind==="fish"?Yx(n,l,e,t,i,s,a,o):Xx(n,l,l.kind==="goat"?Nx:l.kind==="penguin"?Ox:kx,t,i,s,r,a,o);return r}function Jh(n,e,t,i,s,r,a="goat"){const o=[],l=(n.nx-1)*C,c=(n.nz-1)*C;let h=0;for(;o.length<i&&h++<i*60;){const u=4+s()*(l-8),f=4+s()*(c-8),p=Ps(n,u,f);if(p<e+.5)continue;const m=n.getMaterial(Math.floor(u/C),Math.floor((p-.2)/C),Math.floor(f/C));r.includes(m)&&o.push({kind:a,x:u,y:p,z:f,yaw:s()*Math.PI*2,seed:Math.floor(s()*1e9)^t})}return o}function Qx(n,e,t,i,s){for(let r=0;r<8;r++){const a=r/8*Math.PI*2;for(const o of[s*.5,s])if(n.waterAt(e+Math.cos(a)*o,i-.25,t+Math.sin(a)*o))return!0}return!1}function Kx(n,e,t,i,s,r){const a=[],o=(n.nx-1)*C,l=(n.nz-1)*C;let c=null;for(let u=0;u<400&&!c;u++){const f=4+s()*(o-8),p=4+s()*(l-8),m=Ps(n,f,p);if(m<e+.1||m>e+4)continue;const v=n.getMaterial(Math.floor(f/C),Math.floor((m-.2)/C),Math.floor(p/C));!r.includes(v)||!Qx(n,f,p,e,5)||(c=[f,p])}if(!c)return a;let h=0;for(;a.length<i&&h++<i*40;){const u=c[0]+(s()-.5)*10,f=c[1]+(s()-.5)*10;if(u<3||f<3||u>o-3||f>l-3)continue;const p=Ps(n,u,f);p<e+.1||p>e+5||n.waterAt(u,p-.1,f)||n.waterAt(u,p+.3,f)||a.push({kind:"penguin",x:u,y:p,z:f,yaw:s()*Math.PI*2,seed:Math.floor(s()*1e9)^t})}return a}function $h(n,e,t,i){let s=0;for(;s<30&&ws(n,e,i-.25-s,t);)s+=.25;return s}function Zx(n,e,t,i,s){const r=[],a=(n.nx-1)*C,o=(n.nz-1)*C;let l=null;for(let h=0;h<400&&!l;h++){const u=4+s()*(a-8),f=4+s()*(o-8);$h(n,u,f,e)>=1.5&&(l=[u,f])}if(!l)return r;let c=0;for(;r.length<i&&c++<i*40;){const h=l[0]+(s()-.5)*6,u=l[1]+(s()-.5)*6;if(h<3||u<3||h>a-3||u>o-3)continue;const f=$h(n,h,u,e);if(f<.9)continue;const p=e-.4-s()*(f-.7);ws(n,h,p,u)&&r.push({kind:"fish",x:h,y:p,z:u,yaw:s()*Math.PI*2,seed:Math.floor(s()*1e9)^t})}return r}function jx(n,e,t,i){const s=n.body.pos,r=Fx[n.kind],a=r.width*.5+.1,o=r.centred?s[1]-r.height*.5:s[1],l=o+Math.min(a,r.height*.5),c=o+Math.max(r.height-a,r.height*.5);let h=null;for(let u=0;u<=6;u++){const f=l+(c-l)*u/6,p=s[0]-e[0],m=f-e[1],v=s[2]-e[2],g=p*t[0]+m*t[1]+v*t[2];if(g<0||g>i)continue;const d=p-t[0]*g,x=m-t[1]*g,M=v-t[2]*g;d*d+x*x+M*M<=a*a&&(h===null||g<h)&&(h=g-a*.5)}return h}const Jx=120,eu=80,$x=12,eM=24,tM=5,$r=[.3,.62,1];class nM{constructor(e,t,i){this.gen=e,this.sites=e.treeSites(t,i),this.state=this.sites.map(()=>({next:-1,stage:-1}))}sites;state;cursor=0;lastCheck=-1/0;stageOf(e){return Math.max(0,this.state[e].stage)}get standingCount(){return this.state.filter(e=>e.stage>=$r.length).length}step(e,t,i,s){const r=[];if(t-this.lastCheck<tM||!this.sites.length)return r;this.lastCheck=t;for(let a=0;a<eM&&a<this.sites.length;a++){const o=this.cursor;this.cursor=(this.cursor+1)%this.sites.length;const l=this.sites[o],c=this.state[o],h=this.gen.siteGround(e,l),u=this.gen.treeGrowth(e,l,h);if(c.stage>=$r.length&&u>0)continue;if(u>=.85){c.stage=$r.length,c.next=-1;continue}const f=u<=0?0:u<.5?1:2;if(c.stage!==f||c.next<0){c.stage=f,c.next=t+(f===0?Jx:eu)*(.7+s()*.6);continue}if(t<c.next||Math.hypot(l.x-i[0],l.z-i[2])<$x)continue;if(!this.gen.siteFree(e,l,h)){c.next=t+60;continue}const p=this.gen.plantTreeAt(e,l,$r[f],h);p&&r.push(p),c.stage=f+1,c.next=t+eu*(.7+s()*.6)}return r}}const iM="splinecraft",Si="chunks",Pt="worlds",Vn=n=>String(n);async function tu(n,e){const t=await Wn();t&&await new Promise(i=>{const s=t.transaction(Pt,"readwrite"),r=s.objectStore(Pt),a=Vn(n),o=r.get(a);o.onsuccess=()=>{const l=o.result;l&&r.put({...l,animals:e,updatedAt:Date.now()})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}function Wn(){return new Promise(n=>{try{const e=indexedDB.open(iM,2);e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(Si)||t.createObjectStore(Si),t.objectStoreNames.contains(Pt)||t.createObjectStore(Pt,{keyPath:"id"})},e.onsuccess=()=>n(e.result),e.onerror=()=>n(null),e.onblocked=()=>n(null)}catch{n(null)}})}const sM=(n,e,t,i)=>`${n}/${e},${t},${i}`,xf=n=>IDBKeyRange.bound(`${n}/`,`${n}/￿`);async function rM(n){if(typeof CompressionStream>"u")return{deflated:!1,blob:n};try{const e=new CompressionStream("deflate-raw"),t=e.writable.getWriter();return t.write(n),t.close(),{deflated:!0,blob:new Uint8Array(await new Response(e.readable).arrayBuffer())}}catch{return{deflated:!1,blob:n}}}async function aM(n,e){if(!e)return n;const t=new DecompressionStream("deflate-raw"),i=t.writable.getWriter();return i.write(n),i.close(),new Uint8Array(await new Response(t.readable).arrayBuffer())}async function oM(n){const e=n.n*n.n*n.n,t=n.sub!==null,i=n.water!==null&&n.water!==void 0,s=new Uint8Array(e*2+e+e+(t?e*4:0)+(i?e:0));let r=0;s.set(new Uint8Array(n.density.buffer,n.density.byteOffset,e*2),r),r+=e*2,s.set(n.material,r),r+=e,s.set(n.hard,r),r+=e,t&&(s.set(new Uint8Array(n.sub.buffer,n.sub.byteOffset,e*4),r),r+=e*4),i&&(s.set(n.water,r),r+=e);const{deflated:a,blob:o}=await rM(s);return{v:2,cx:n.cx,cy:n.cy,cz:n.cz,n:n.n,deflated:a,hasSub:t,hasWater:i,blob:o}}async function lM(n){const e=n.n*n.n*n.n,t=await aM(n.blob,n.deflated);let i=0;const s=new Int16Array(t.slice(i,i+e*2).buffer);i+=e*2;const r=t.slice(i,i+e);i+=e;const a=t.slice(i,i+e);i+=e;let o=null;n.hasSub&&(o=new Uint32Array(t.slice(i,i+e*4).buffer),i+=e*4);let l=null;return n.hasWater&&(l=t.slice(i,i+e),i+=e),{cx:n.cx,cy:n.cy,cz:n.cz,n:n.n,density:s,material:r,hard:a,sub:o,water:l}}async function cM(n){const e=await Wn();if(!e)return[];const t=await new Promise(s=>{const r=[],a=e.transaction(Si,"readonly"),o=a.objectStore(Si).openCursor(xf(Vn(n)));o.onsuccess=()=>{const l=o.result;if(!l){s(r);return}r.push(l.value),l.continue()},o.onerror=()=>s(r),a.onerror=()=>s(r)}),i=[];for(const s of t){const r=s;if(r&&r.v===2&&r.blob)try{i.push(await lM(r))}catch{}else r&&r.density&&r.material&&r.hard&&i.push(r)}return i}async function nu(n,e){const t=await Wn();if(!t)return!1;const i=await Promise.all(e.map(oM));return new Promise(s=>{const r=t.transaction([Si,Pt],"readwrite"),a=r.objectStore(Si),o=Vn(n);for(const h of i)a.put(h,sM(o,h.cx,h.cy,h.cz));const l=r.objectStore(Pt),c=l.get(o);c.onsuccess=()=>{const h=c.result??{id:o,name:hc(n),seed:n,createdAt:Date.now(),updatedAt:0,edited:0};l.put({...h,updatedAt:Date.now(),edited:(h.edited??0)+e.length})},r.oncomplete=()=>s(!0),r.onerror=()=>s(!1),r.onabort=()=>s(!1)})}async function Eo(n,e){const t=await Wn();t&&await new Promise(i=>{const s=t.transaction(Pt,"readwrite"),r=s.objectStore(Pt),a=Vn(n),o=r.get(a);o.onsuccess=()=>{const l=o.result;l&&r.put({...l,sources:e,updatedAt:Date.now()})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}async function bo(n,e){const t=await Wn();return t?new Promise(i=>{const s=t.transaction(Pt,"readwrite"),r=s.objectStore(Pt),a=Vn(n),o=r.get(a);o.onsuccess=()=>{const l=o.result;l&&r.put({...l,bodies:e,updatedAt:Date.now()})},s.oncomplete=()=>i(!0),s.onerror=()=>i(!1),s.onabort=()=>i(!1)}):!1}const hc=n=>`World ${n}`;async function hM(){const n=await Wn();return n?new Promise(e=>{const t=n.transaction(Pt,"readonly"),i=t.objectStore(Pt).getAll();i.onsuccess=()=>e((i.result??[]).sort((s,r)=>r.updatedAt-s.updatedAt)),i.onerror=()=>e([]),t.onerror=()=>e([])}):[]}async function uM(n){const e=await Wn();return e?new Promise(t=>{const i=e.transaction(Pt,"readonly"),s=i.objectStore(Pt).get(Vn(n));s.onsuccess=()=>t(s.result??null),s.onerror=()=>t(null),i.onerror=()=>t(null)}):null}async function fM(n,e){const t=await Wn();return t?new Promise(i=>{const s=t.transaction(Pt,"readwrite"),r=s.objectStore(Pt),a=Vn(n),o=r.get(a);let l=null;o.onsuccess=()=>{const c=o.result??{id:a,name:hc(n),seed:n,createdAt:Date.now(),updatedAt:0,edited:0,chunks:e};l={...c,chunks:c.chunks??e,updatedAt:Date.now()},r.put(l)},s.oncomplete=()=>i(l),s.onerror=()=>i(null),s.onabort=()=>i(null)}):null}async function dM(n,e){const t=await Wn();t&&await new Promise(i=>{const s=t.transaction(Pt,"readwrite"),r=s.objectStore(Pt),a=Vn(n),o=r.get(a);o.onsuccess=()=>{const l=o.result??{id:a,name:e,seed:n,createdAt:Date.now(),updatedAt:Date.now(),edited:0};r.put({...l,name:e.trim()||hc(n)})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}async function iu(n){const e=await Wn();e&&await new Promise(t=>{const i=e.transaction([Si,Pt],"readwrite");i.objectStore(Si).delete(xf(Vn(n))),i.objectStore(Pt).delete(Vn(n)),i.oncomplete=()=>t(),i.onerror=()=>t(),i.onabort=()=>t()})}const Ta=40,Mf=72,yf=30,wf=10,pM=10,mM=re*C*Math.sqrt(3)/2,gM=2;function vM(n,e){return e==="low"||n<=0?1/0:e==="medium"?n===1?Ta:-1/0:n===1?Mf:n===2?yf:-1/0}function xM(n,e,t){if(t==="low")return 0;const i=s=>e>=s?wf:0;return t==="medium"?n<Ta+i(1)?1:0:n<yf+i(2)?2:n<Mf+i(1)?1:0}function MM(n,e){if(n<=0)return 0;const t=vM(n,e);return Number.isFinite(t)?Math.max(1,t-mM-gM):0}/**
 * postprocessing v6.39.2 build Sun Jun 28 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var yM=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Xt;return t.setAttribute("position",new Oe(n,3)),t.setAttribute("uv",new Oe(e,2)),t})(),Yt=class Il{static get fullscreenGeometry(){return yM}constructor(e="Pass",t=new Wi,i=new Ls){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new St(Il.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Wi),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=In){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof vt||t instanceof ii||t instanceof Nt||t instanceof Il)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},wM=class extends Yt{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){const r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},SM=`#ifdef COLOR_WRITE
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
}`,uc="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Sf=class extends ft{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new _e(null),depthBuffer:new _e(null),channelWeights:new _e(null),opacity:new _e(1)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:SM,vertexShader:uc}),this.depthFunc=ga}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},Af=class extends Yt{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new Sf,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new vt(1,1,{minFilter:ut,magFilter:ut,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Et?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===dt&&(this.renderTarget.texture.colorSpace=dt))}},su=new Ze,fc=class extends Yt{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),l=r!==null,c=a>=0;l?(n.getClearColor(su),n.setClearColor(r,c?a:o)):c&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),l?n.setClearColor(su,o):c&&n.setClearAlpha(o)}},AM=class extends Yt{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new fc(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){const r=n.getContext(),a=n.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,h=this.inverted?0:1,u=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,h,4294967295),a.stencil.setClear(u),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(n,null):(c.render(n,e),c.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,l)):(n.setRenderTarget(e),n.render(o,l),n.setRenderTarget(t),n.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},To=1/1e3,_M=1e3,EM=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*To}get fixedDelta(){return this._fixedDelta*To}set fixedDelta(n){this._fixedDelta=n*_M}get elapsed(){return this._elapsed*To}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},bM=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Af,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new EM,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples}set multisampling(n){const e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new Pe),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Et&&n.outputColorSpace===dt&&(this.inputBuffer.texture.colorSpace=dt,this.outputBuffer.texture.colorSpace=dt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=this.inputBuffer,e=new Ra;this.depthTexture=e,n.stencilBuffer?(e.format=Ts,e.type=bs):e.type=on;const t=e.clone();return t.name="EffectComposer.StableDepth",this.depthRenderTarget=new vt(n.width,n.height,{depthBuffer:!0,stencilBuffer:n.stencilBuffer,depthTexture:t}),t}blitDepthBuffer(n){const e=this.renderer,t=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(t);const r=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,o=n.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){const s=this.renderer,r=s===null?new Pe:s.getDrawingBufferSize(new Pe),a={minFilter:ut,magFilter:ut,stencilBuffer:e,depthBuffer:n,type:t},o=new vt(r.width,r.height,a);return i>0&&(o.samples=i),t===Et&&s!==null&&s.outputColorSpace===dt&&(o.texture.colorSpace=dt),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new Pe),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(s.width,s.height),n.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(n of t)n.setDepthTexture(o)}else{const o=this.depthRenderTarget.depthTexture;n.setDepthTexture(o)}}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(o,l)=>o||l.needsDepthTexture;if(!e.reduce(r,!1)){const o=this.depthRenderTarget.depthTexture;n.getDepthTexture()===o&&n.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,r,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(i.depthTexture=this.depthTexture,s.depthTexture=null,o.render(e,i,s,n,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){t.renderToScreen=o.renderToScreen;const l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),t.render(e,i,s,n,a),c.setFunc(l.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof AM?a=!0:o instanceof wM&&(a=!1)}}setSize(n,e,t){const i=this.renderer,s=i.getSize(new Pe);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);const r=i.getDrawingBufferSize(new Pe);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Yt.fullscreenGeometry.dispose()}},On={NONE:0,DEPTH:1,CONVOLUTION:2},ct={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},TM=class{constructor(){this.shaderParts=new Map([[ct.FRAGMENT_HEAD,null],[ct.FRAGMENT_MAIN_UV,null],[ct.FRAGMENT_MAIN_IMAGE,null],[ct.VERTEX_HEAD,null],[ct.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=On.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=wi}},Co=!1,ru=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Qt:t=this.materialsFlatShadedDoubleSide;break;case Ut:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Qt:t=this.materialsDoubleSide;break;case Ut:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof ft))return n.clone();const e=n.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const i=n.clone();for(const s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=kn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Ut,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Qt,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Ut,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Qt,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,Co){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Co}static set workaroundEnabled(n){Co=n}},ui=-1,zt=class extends ni{constructor(n=null,e=ui,t=ui,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new Pe(1,1),this.preferredSize=new Pe(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new Pe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==ui?t.width=e.width:e.height!==ui?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==ui?t.height=e.height:e.width!==ui?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(ui),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return ui}},Qe={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},CM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",RM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",HM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",WM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",XM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",YM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",QM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",KM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ZM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",jM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",JM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$M="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ey="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ty="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ny="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",sy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ry="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ay=new Map([[Qe.ADD,CM],[Qe.ALPHA,DM],[Qe.AVERAGE,RM],[Qe.COLOR,IM],[Qe.COLOR_BURN,PM],[Qe.COLOR_DODGE,LM],[Qe.DARKEN,BM],[Qe.DIFFERENCE,UM],[Qe.DIVIDE,zM],[Qe.DST,null],[Qe.EXCLUSION,FM],[Qe.HARD_LIGHT,NM],[Qe.HARD_MIX,OM],[Qe.HUE,kM],[Qe.INVERT,HM],[Qe.INVERT_RGB,GM],[Qe.LIGHTEN,VM],[Qe.LINEAR_BURN,WM],[Qe.LINEAR_DODGE,XM],[Qe.LINEAR_LIGHT,YM],[Qe.LUMINOSITY,qM],[Qe.MULTIPLY,QM],[Qe.NEGATION,KM],[Qe.NORMAL,ZM],[Qe.OVERLAY,jM],[Qe.PIN_LIGHT,JM],[Qe.REFLECT,$M],[Qe.SATURATION,ey],[Qe.SCREEN,ty],[Qe.SOFT_LIGHT,ny],[Qe.SRC,iy],[Qe.SUBTRACT,sy],[Qe.VIVID_LIGHT,ry]]),oy=class extends ni{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new _e(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return ay.get(this.blendFunction)}},Ki=class extends ni{constructor(n,e,{attributes:t=On.NONE,blendFunction:i=Qe.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new oy(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=wi,this._outputColorSpace=mn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=In){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof vt||e instanceof ii||e instanceof Nt||e instanceof Yt)&&this[n].dispose()}}},dc={MEDIUM:2,LARGE:3},ly=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,cy="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",hy=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],uy=class extends ft{constructor(n=new wt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new _e(null),texelSize:new _e(new wt),scale:new _e(1),kernel:new _e(0)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ly,vertexShader:cy}),this.setTexelSize(n.x,n.y),this.kernelSize=dc.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return hy[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},fy=class extends Yt{constructor({kernelSize:n=dc.MEDIUM,resolutionScale:e=.5,width:t=zt.AUTO_SIZE,height:i=zt.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new vt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new zt(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new uy,this._blurMaterial.kernelSize=n,this.copyMaterial=new Sf}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,h=c.kernelSequence;let u=e;this.fullscreenMaterial=c;for(let f=0,p=h.length;f<p;++f){const m=(f&1)===0?o:l;c.kernel=h[f],c.inputBuffer=u.texture,n.setRenderTarget(m),n.render(r,a),u=m}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=u.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Et?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===dt&&(this.renderTargetA.texture.colorSpace=dt,this.renderTargetB.texture.colorSpace=dt))}static get AUTO_SIZE(){return zt.AUTO_SIZE}},dy=`#include <common>
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
}`,py=class extends ft{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:qi.replace(/\D+/g,"")},uniforms:{inputBuffer:new _e(null),threshold:new _e(0),smoothing:new _e(1),range:new _e(null)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:dy,vertexShader:uc}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},_f=class extends Yt{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=zt.AUTO_SIZE,height:r=zt.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new py(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new vt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new zt(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==Et&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},my=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,gy="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",vy=class extends ft{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new _e(null),texelSize:new _e(new Pe)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:my,vertexShader:gy})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},xy=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,My="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",yy=class extends ft{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new _e(null),supportBuffer:new _e(null),texelSize:new _e(new Pe),radius:new _e(.85)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:xy,vertexShader:My})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},wy=class extends Yt{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new vt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new vy,this.upsamplingMaterial=new yy,this.resolution=new Pe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){const{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:h}=this;let u=e;this.fullscreenMaterial=o;for(let f=0,p=c.length;f<p;++f){const m=c[f];o.setSize(u.width,u.height),o.inputBuffer=u.texture,n.setRenderTarget(m),n.render(r,a),u=m}this.fullscreenMaterial=l;for(let f=h.length-1;f>=0;--f){const p=h[f];l.setSize(u.width,u.height),l.inputBuffer=u.texture,l.supportBuffer=c[f].texture,n.setRenderTarget(p),n.render(r,a),u=p}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of i)s.texture.type=t;if(t!==Et)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===dt)for(const s of i)s.texture.colorSpace=dt}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},Sy=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,Ay=class extends Ki{constructor({blendFunction:n=Qe.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=dc.LARGE,resolutionScale:l=.5,width:c=zt.AUTO_SIZE,height:h=zt.AUTO_SIZE,resolutionX:u=c,resolutionY:f=h}={}){super("BloomEffect",Sy,{blendFunction:n,uniforms:new Map([["map",new _e(null)],["intensity",new _e(s)]])}),this.renderTarget=new vt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new fy({kernelSize:o}),this.luminancePass=new _f({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new wy,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const p=this.resolution=new zt(this,u,f,l);p.addEventListener("change",m=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===dt&&(this.renderTarget.texture.colorSpace=dt))}},Pl=class extends Yt{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,s){const r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==Et&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}};function _y(n,e,t){const i=new Map([[yi,1],[Nl,2],[Vt,4]]);let s;if(i.has(e)||console.error("Invalid noise texture format"),t===Et){s=new Uint8Array(n*i.get(e));for(let r=0,a=s.length;r<a;++r)s[r]=Math.random()*255+.5}else{s=new Float32Array(n*i.get(e));for(let r=0,a=s.length;r<a;++r)s[r]=Math.random()}return s}var Ey=class extends Sa{constructor(n,e,t=yi,i=Et){super(_y(n*e,t,i),n,e,t,i),this.needsUpdate=!0}},Ef=class extends Yt{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new fc,this.overrideMaterialManager=t===null?null:new ru(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new ru(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,h=n.shadowMap.autoUpdate,u=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(u),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,a):n.render(r,a),a.layers.mask=l,r.background=c,n.shadowMap.autoUpdate=h}},bf={COLOR:2},by={DISABLED:0},Ks={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},rn={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},Zs={DEFAULT:0,ESKIL:1},Ty=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
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
}`,Cy=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,Dy=class extends ft{constructor(n=new Pe,e=bf.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:qi.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new _e(null),depthBuffer:new _e(null),predicationBuffer:new _e(null),texelSize:new _e(n)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Ty,vertexShader:Cy}),this.edgeDetectionMode=e}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=In){this.depthBuffer=n,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(n){this.defines.EDGE_DETECTION_MODE=n.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(n){this.edgeDetectionMode=n}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(n){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=n.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(n){this.localContrastAdaptationFactor=n}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(n){this.defines.EDGE_THRESHOLD=n.toFixed("6"),this.defines.DEPTH_THRESHOLD=(n*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(n){this.edgeDetectionThreshold=n}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(n){this.defines.PREDICATION_MODE=n.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(n){this.predicationMode=n}set predicationBuffer(n){this.uniforms.predicationBuffer.value=n}setPredicationBuffer(n){this.uniforms.predicationBuffer.value=n}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(n){this.defines.PREDICATION_THRESHOLD=n.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(n){this.predicationThreshold=n}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(n){this.defines.PREDICATION_SCALE=n.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(n){this.predicationScale=n}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(n){this.defines.PREDICATION_STRENGTH=n.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(n){this.predicationStrength=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},Ry=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
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
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,Iy="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",Py=class extends ft{constructor(n=new Pe,e=new Pe){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new _e(null),searchTexture:new _e(null),areaTexture:new _e(null),resolution:new _e(e),texelSize:new _e(n)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Ry,vertexShader:Iy})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(n){this.uniforms.searchTexture.value=n}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(n){this.uniforms.areaTexture.value=n}setLookupTextures(n,e){this.searchTexture=n,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(n){const e=Math.min(Math.max(n,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(n){this.orthogonalSearchSteps=n}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(n){const e=Math.min(Math.max(n,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(n){this.diagonalSearchSteps=n}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(n){n?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(n){this.diagonalDetection=n}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(n){const e=Math.min(Math.max(n,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(n){this.cornerRounding=n}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(n){n?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(n){this.cornerDetection=n}setSize(n,e){const t=this.uniforms;t.texelSize.value.set(1/n,1/e),t.resolution.value.set(n,e)}},au="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",ou="data:image/png;base64,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",Ly="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",By="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",Uy=class extends Ki{constructor({blendFunction:n=Qe.SRC,preset:e=Ks.MEDIUM,edgeDetectionMode:t=bf.COLOR,predicationMode:i=by.DISABLED}={}){super("SMAAEffect",Ly,{vertexShader:By,blendFunction:n,attributes:On.CONVOLUTION|On.DEPTH,uniforms:new Map([["weightMap",new _e(null)]])});let s,r;arguments.length>1&&(s=arguments[0],r=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(t=arguments[3])),this.renderTargetEdges=new vt(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new fc(!0,!1,!1),this.clearPass.overrideClearColor=new Ze(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new Pl(new Dy),this.edgeDetectionMaterial.edgeDetectionMode=t,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new Pl(new Py);const a=new op;a.onLoad=()=>{const o=new Nt(s);o.name="SMAA.Search",o.magFilter=_t,o.minFilter=_t,o.generateMipmaps=!1,o.needsUpdate=!0,o.flipY=!0,this.weightsMaterial.searchTexture=o;const l=new Nt(r);l.name="SMAA.Area",l.magFilter=ut,l.minFilter=ut,l.generateMipmaps=!1,l.needsUpdate=!0,l.flipY=!1,this.weightsMaterial.areaTexture=l,this.dispatchEvent({type:"load"})},a.itemStart("search"),a.itemStart("area"),s!==void 0&&r!==void 0?(a.itemEnd("search"),a.itemEnd("area")):typeof Image<"u"&&(s=new Image,r=new Image,s.addEventListener("load",()=>a.itemEnd("search")),r.addEventListener("load",()=>a.itemEnd("area")),s.src=au,r.src=ou),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(n){this.edgeDetectionMaterial.edgeDetectionThreshold=n}setOrthogonalSearchSteps(n){this.weightsMaterial.orthogonalSearchSteps=n}applyPreset(n){const e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(n){case Ks.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Ks.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Ks.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case Ks.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(n,e=In){this.edgeDetectionMaterial.depthBuffer=n,this.edgeDetectionMaterial.depthPacking=e}update(n,e,t){this.clearPass.render(n,this.renderTargetEdges),this.edgeDetectionPass.render(n,e,this.renderTargetEdges),this.weightsPass.render(n,this.renderTargetEdges,this.renderTargetWeights)}setSize(n,e){this.edgeDetectionMaterial.setSize(n,e),this.weightsMaterial.setSize(n,e),this.renderTargetEdges.setSize(n,e),this.renderTargetWeights.setSize(n,e)}dispose(){const{searchTexture:n,areaTexture:e}=this.weightsMaterial;n!==null&&e!==null&&(n.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return au}static get areaImageDataURL(){return ou}};function ea(n,e,t){return n*(e-t)-e}function ta(n,e,t){return Math.min(Math.max((n+e)/(e-t),0),1)}var zy=`#include <common>
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
}gl_FragColor.r=ao;}`,Fy="uniform vec2 noiseScale;varying vec2 vUv;varying vec2 vUv2;void main(){vUv=position.xy*0.5+0.5;vUv2=vUv*noiseScale;gl_Position=vec4(position.xy,1.0,1.0);}",Ny=class extends ft{constructor(n){super({name:"SSAOMaterial",defines:{SAMPLES_INT:"0",INV_SAMPLES_FLOAT:"0.0",SPIRAL_TURNS:"0.0",RADIUS:"1.0",RADIUS_SQ:"1.0",DISTANCE_SCALING:"1",DEPTH_PACKING:"0"},uniforms:{depthBuffer:new _e(null),normalBuffer:new _e(null),normalDepthBuffer:new _e(null),noiseTexture:new _e(null),inverseProjectionMatrix:new _e(new tt),projectionMatrix:new _e(new tt),texelSize:new _e(new Pe),cameraNearFar:new _e(new Pe),distanceCutoff:new _e(new Pe),proximityCutoff:new _e(new Pe),noiseScale:new _e(new Pe),minRadiusScale:new _e(.33),intensity:new _e(1),fade:new _e(.01),bias:new _e(0)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:zy,vertexShader:Fy}),this.copyCameraSettings(n),this.resolution=new Pe,this.r=1}get near(){return this.uniforms.cameraNearFar.value.x}get far(){return this.uniforms.cameraNearFar.value.y}set normalDepthBuffer(n){this.uniforms.normalDepthBuffer.value=n,n!==null?this.defines.NORMAL_DEPTH="1":delete this.defines.NORMAL_DEPTH,this.needsUpdate=!0}setNormalDepthBuffer(n){this.normalDepthBuffer=n}set normalBuffer(n){this.uniforms.normalBuffer.value=n}setNormalBuffer(n){this.uniforms.normalBuffer.value=n}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=In){this.depthBuffer=n,this.depthPacking=e}set noiseTexture(n){this.uniforms.noiseTexture.value=n}setNoiseTexture(n){this.uniforms.noiseTexture.value=n}get samples(){return Number(this.defines.SAMPLES_INT)}set samples(n){this.defines.SAMPLES_INT=n.toFixed(0),this.defines.INV_SAMPLES_FLOAT=(1/n).toFixed(9),this.needsUpdate=!0}getSamples(){return this.samples}setSamples(n){this.samples=n}get rings(){return Number(this.defines.SPIRAL_TURNS)}set rings(n){this.defines.SPIRAL_TURNS=n.toFixed(1),this.needsUpdate=!0}getRings(){return this.rings}setRings(n){this.rings=n}get intensity(){return this.uniforms.intensity.value}set intensity(n){this.uniforms.intensity.value=n,this.defines.LEGACY_INTENSITY===void 0&&(this.defines.LEGACY_INTENSITY="1",this.needsUpdate=!0)}getIntensity(){return this.uniforms.intensity.value}setIntensity(n){this.uniforms.intensity.value=n}get fade(){return this.uniforms.fade.value}set fade(n){this.uniforms.fade.value=n}getFade(){return this.uniforms.fade.value}setFade(n){this.uniforms.fade.value=n}get bias(){return this.uniforms.bias.value}set bias(n){this.uniforms.bias.value=n}getBias(){return this.uniforms.bias.value}setBias(n){this.uniforms.bias.value=n}get minRadiusScale(){return this.uniforms.minRadiusScale.value}set minRadiusScale(n){this.uniforms.minRadiusScale.value=n}getMinRadiusScale(){return this.uniforms.minRadiusScale.value}setMinRadiusScale(n){this.uniforms.minRadiusScale.value=n}updateRadius(){const n=this.r*this.resolution.height;this.defines.RADIUS=n.toFixed(11),this.defines.RADIUS_SQ=(n*n).toFixed(11),this.needsUpdate=!0}get radius(){return this.r}set radius(n){this.r=Math.min(Math.max(n,1e-6),1),this.updateRadius()}getRadius(){return this.radius}setRadius(n){this.radius=n}get distanceScaling(){return!0}set distanceScaling(n){}isDistanceScalingEnabled(){return this.distanceScaling}setDistanceScalingEnabled(n){this.distanceScaling=n}get distanceThreshold(){return this.uniforms.distanceCutoff.value.x}set distanceThreshold(n){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.distanceFalloff,0),1))}get worldDistanceThreshold(){return-ea(this.distanceThreshold,this.near,this.far)}set worldDistanceThreshold(n){this.distanceThreshold=ta(-n,this.near,this.far)}get distanceFalloff(){return this.uniforms.distanceCutoff.value.y-this.distanceThreshold}set distanceFalloff(n){this.uniforms.distanceCutoff.value.y=Math.min(Math.max(this.distanceThreshold+n,0),1)}get worldDistanceFalloff(){return-ea(this.distanceFalloff,this.near,this.far)}set worldDistanceFalloff(n){this.distanceFalloff=ta(-n,this.near,this.far)}setDistanceCutoff(n,e){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}get proximityThreshold(){return this.uniforms.proximityCutoff.value.x}set proximityThreshold(n){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.proximityFalloff,0),1))}get worldProximityThreshold(){return-ea(this.proximityThreshold,this.near,this.far)}set worldProximityThreshold(n){this.proximityThreshold=ta(-n,this.near,this.far)}get proximityFalloff(){return this.uniforms.proximityCutoff.value.y-this.proximityThreshold}set proximityFalloff(n){this.uniforms.proximityCutoff.value.y=Math.min(Math.max(this.proximityThreshold+n,0),1)}get worldProximityFalloff(){return-ea(this.proximityFalloff,this.near,this.far)}set worldProximityFalloff(n){this.proximityFalloff=ta(-n,this.near,this.far)}setProximityCutoff(n,e){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNearFar.value.set(n.near,n.far),this.uniforms.projectionMatrix.value.copy(n.projectionMatrix),this.uniforms.inverseProjectionMatrix.value.copy(n.projectionMatrix).invert(),n instanceof tn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms,i=t.noiseTexture.value;i!==null&&t.noiseScale.value.set(n/i.image.width,e/i.image.height),t.texelSize.value.set(1/n,1/e),this.resolution.set(n,e),this.updateRadius()}},Oy=`#include <packing>
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
gl_FragColor=vec4(n[index],d[index]);}`,ky="uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}",Hy=class extends ft{constructor(){super({name:"DepthDownsamplingMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new _e(null),normalBuffer:new _e(null),texelSize:new _e(new Pe)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Oy,vertexShader:ky})}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=In){this.depthBuffer=n,this.depthPacking=e}set normalBuffer(n){this.uniforms.normalBuffer.value=n,n!==null?this.defines.DOWNSAMPLE_NORMALS="1":delete this.defines.DOWNSAMPLE_NORMALS,this.needsUpdate=!0}setNormalBuffer(n){this.normalBuffer=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},Gy=class extends Yt{constructor({normalBuffer:n=null,resolutionScale:e=.5,width:t=zt.AUTO_SIZE,height:i=zt.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("DepthDownsamplingPass");const a=new Hy;a.normalBuffer=n,this.fullscreenMaterial=a,this.needsDepthTexture=!0,this.needsSwap=!1,this.renderTarget=new vt(1,1,{minFilter:_t,magFilter:_t,depthBuffer:!1,type:on}),this.renderTarget.texture.name="DepthDownsamplingPass.Target",this.renderTarget.texture.generateMipmaps=!1;const o=this.resolution=new zt(this,s,r,e);o.addEventListener("change",l=>this.setSize(o.baseWidth,o.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}setDepthTexture(n,e=In){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e}render(n,e,t,i,s){n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.fullscreenMaterial.setSize(n,e)}initialize(n,e,t){const i=n.getContext();if(!(i.getExtension("EXT_color_buffer_float")||i.getExtension("EXT_color_buffer_half_float")))throw new Error("Rendering to float texture is not supported.")}},Vy=`uniform lowp sampler2D aoBuffer;uniform float luminanceInfluence;uniform float intensity;
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
}`,lu=64,Wy=class extends Ki{constructor(n,e,{blendFunction:t=Qe.MULTIPLY,samples:i=9,rings:s=7,normalDepthBuffer:r=null,depthAwareUpsampling:a=!0,worldDistanceThreshold:o,worldDistanceFalloff:l,worldProximityThreshold:c,worldProximityFalloff:h,distanceThreshold:u=.97,distanceFalloff:f=.03,rangeThreshold:p=5e-4,rangeFalloff:m=.001,minRadiusScale:v=.1,luminanceInfluence:g=.7,radius:d=.1825,intensity:x=1,bias:M=.025,fade:y=.01,color:w=null,resolutionScale:E=1,width:b=zt.AUTO_SIZE,height:T=zt.AUTO_SIZE,resolutionX:S=b,resolutionY:A=T}={}){super("SSAOEffect",Vy,{blendFunction:t,attributes:On.DEPTH,defines:new Map([["THRESHOLD","0.997"]]),uniforms:new Map([["aoBuffer",new _e(null)],["normalDepthBuffer",new _e(r)],["luminanceInfluence",new _e(g)],["color",new _e(null)],["intensity",new _e(x)],["scale",new _e(0)]])}),this.renderTarget=new vt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="AO.Target",this.uniforms.get("aoBuffer").value=this.renderTarget.texture;const _=this.resolution=new zt(this,S,A,E);_.addEventListener("change",z=>this.setSize(_.baseWidth,_.baseHeight)),this.camera=n,this.depthDownsamplingPass=new Gy({normalBuffer:e,resolutionScale:E}),this.depthDownsamplingPass.enabled=r===null,this.ssaoPass=new Pl(new Ny(n));const R=new Ey(lu,lu,Vt);R.wrapS=R.wrapT=lr;const P=this.ssaoMaterial;P.normalBuffer=e,P.noiseTexture=R,P.minRadiusScale=v,P.samples=i,P.radius=d,P.rings=s,P.fade=y,P.bias=M,P.distanceThreshold=u,P.distanceFalloff=f,P.proximityThreshold=p,P.proximityFalloff=m,o!==void 0&&(P.worldDistanceThreshold=o),l!==void 0&&(P.worldDistanceFalloff=l),c!==void 0&&(P.worldProximityThreshold=c),h!==void 0&&(P.worldProximityFalloff=h),r!==null&&(this.ssaoMaterial.normalDepthBuffer=r,this.defines.set("NORMAL_DEPTH","1")),this.depthAwareUpsampling=a,this.color=w}set mainCamera(n){this.camera=n,this.ssaoMaterial.copyCameraSettings(n)}get normalBuffer(){return this.ssaoMaterial.normalBuffer}set normalBuffer(n){this.ssaoMaterial.normalBuffer=n,this.depthDownsamplingPass.fullscreenMaterial.normalBuffer=n}getResolution(){return this.resolution}get ssaoMaterial(){return this.ssaoPass.fullscreenMaterial}getSSAOMaterial(){return this.ssaoMaterial}get samples(){return this.ssaoMaterial.samples}set samples(n){this.ssaoMaterial.samples=n}get rings(){return this.ssaoMaterial.rings}set rings(n){this.ssaoMaterial.rings=n}get radius(){return this.ssaoMaterial.radius}set radius(n){this.ssaoMaterial.radius=n}get depthAwareUpsampling(){return this.defines.has("DEPTH_AWARE_UPSAMPLING")}set depthAwareUpsampling(n){this.depthAwareUpsampling!==n&&(n?this.defines.set("DEPTH_AWARE_UPSAMPLING","1"):this.defines.delete("DEPTH_AWARE_UPSAMPLING"),this.setChanged())}isDepthAwareUpsamplingEnabled(){return this.depthAwareUpsampling}setDepthAwareUpsamplingEnabled(n){this.depthAwareUpsampling=n}get distanceScaling(){return!0}set distanceScaling(n){}get color(){return this.uniforms.get("color").value}set color(n){const e=this.uniforms,t=this.defines;n!==null?t.has("COLORIZE")?e.get("color").value.set(n):(t.set("COLORIZE","1"),e.get("color").value=new Ze(n),this.setChanged()):t.has("COLORIZE")&&(t.delete("COLORIZE"),e.get("color").value=null,this.setChanged())}get luminanceInfluence(){return this.uniforms.get("luminanceInfluence").value}set luminanceInfluence(n){this.uniforms.get("luminanceInfluence").value=n}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getColor(){return this.color}setColor(n){this.color=n}setDistanceCutoff(n,e){this.ssaoMaterial.distanceThreshold=n,this.ssaoMaterial.distanceFalloff=e}setProximityCutoff(n,e){this.ssaoMaterial.proximityThreshold=n,this.ssaoMaterial.proximityFalloff=e}setDepthTexture(n,e=In){this.depthDownsamplingPass.setDepthTexture(n,e),this.ssaoMaterial.depthBuffer=n,this.ssaoMaterial.depthPacking=e}update(n,e,t){const i=this.renderTarget;this.depthDownsamplingPass.enabled&&this.depthDownsamplingPass.render(n),this.ssaoPass.render(n,null,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.ssaoMaterial.copyCameraSettings(this.camera),this.ssaoMaterial.setSize(i,s),this.renderTarget.setSize(i,s),this.depthDownsamplingPass.resolution.scale=t.scale,this.depthDownsamplingPass.setSize(n,e)}initialize(n,e,t){try{let i=this.uniforms.get("normalDepthBuffer").value;i===null&&(this.depthDownsamplingPass.initialize(n,e,t),i=this.depthDownsamplingPass.texture,this.uniforms.get("normalDepthBuffer").value=i,this.ssaoMaterial.normalDepthBuffer=i,this.defines.set("NORMAL_DEPTH","1"))}catch{this.depthDownsamplingPass.enabled=!1}}},Xy=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,Yy=class extends ft{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new _e(null),luminanceBuffer1:new _e(null),minLuminance:new _e(.01),deltaTime:new _e(0),tau:new _e(1)},extensions:{shaderTextureLOD:!0},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Xy,vertexShader:uc})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},qy=class extends Yt{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new Yy,this.needsSwap=!1,this.renderTargetPrevious=new vt(1,1,{minFilter:_t,magFilter:_t,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new Af(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,s){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},Qy=`#include <tonemapping_pars_fragment>
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
}`,Ky=class extends Ki{constructor({blendFunction:n=Qe.SRC,adaptive:e=!1,mode:t=e?rn.REINHARD2_ADAPTIVE:rn.AGX,resolution:i=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:l=1,adaptationRate:c=1}={}){super("ToneMappingEffect",Qy,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new _e(null)],["maxLuminance",new _e(s)],["whitePoint",new _e(r)],["middleGrey",new _e(a)],["averageLuminance",new _e(l)]])}),this.renderTargetLuminance=new vt(1,1,{minFilter:zn,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new _f({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new qy(this.luminancePass.texture,{minLuminance:o,adaptationRate:c}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;const t=qi.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case rn.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case rn.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case rn.CINEON:case rn.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case rn.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case rn.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case rn.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===rn.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){const e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===rn.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?rn.REINHARD2_ADAPTIVE:rn.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}},Zy=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,jy=class extends Ki{constructor({blendFunction:n,eskil:e=!1,technique:t=e?Zs.ESKIL:Zs.DEFAULT,offset:i=.5,darkness:s=.5}={}){super("VignetteEffect",Zy,{blendFunction:n,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new _e(i)],["darkness",new _e(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(n){this.technique!==n&&(this.defines.set("VIGNETTE_TECHNIQUE",n.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Zs.ESKIL}set eskil(n){this.technique=n?Zs.ESKIL:Zs.DEFAULT}getTechnique(){return this.technique}setTechnique(n){this.technique=n}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}get darkness(){return this.uniforms.get("darkness").value}set darkness(n){this.uniforms.get("darkness").value=n}getDarkness(){return this.darkness}setDarkness(n){this.darkness=n}},Jy=`#include <common>
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
}`,$y="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",ew=class extends ft{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:qi.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new _e(null),depthBuffer:new _e(null),resolution:new _e(new Pe),texelSize:new _e(new Pe),cameraNear:new _e(.3),cameraFar:new _e(1e3),aspect:new _e(1),time:new _e(0)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=In){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=Jy.replace(ct.FRAGMENT_HEAD,n.get(ct.FRAGMENT_HEAD)||"").replace(ct.FRAGMENT_MAIN_UV,n.get(ct.FRAGMENT_MAIN_UV)||"").replace(ct.FRAGMENT_MAIN_IMAGE,n.get(ct.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=$y.replace(ct.VERTEX_HEAD,n.get(ct.VERTEX_HEAD)||"").replace(ct.VERTEX_MAIN_SUPPORT,n.get(ct.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof tn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return ct}};function cu(n,e,t){for(const i of e){const s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function tw(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader();const r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&On.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get(ct.FRAGMENT_HEAD)||"",h=l.get(ct.FRAGMENT_MAIN_UV)||"",u=l.get(ct.FRAGMENT_MAIN_IMAGE)||"",f=l.get(ct.VERTEX_HEAD)||"",p=l.get(ct.VERTEX_MAIN_SUPPORT)||"";const m=new Set,v=new Set;if(a&&(h+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const x=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);p+=`	${n}MainSupport(`,p+=x?`vUv);
`:`);
`;for(const M of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const y of M[1].split(/\s*,\s*/))t.varyings.add(y),m.add(y),v.add(y);for(const M of s.matchAll(o))v.add(M[1])}for(const x of i.matchAll(o))v.add(x[1]);for(const x of e.defines.keys())v.add(x.replace(/\([\w\s,]*\)/g,""));for(const x of e.uniforms.keys())v.add(x);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((x,M)=>t.uniforms.set(n+M.charAt(0).toUpperCase()+M.slice(1),x)),e.defines.forEach((x,M)=>t.defines.set(n+M.charAt(0).toUpperCase()+M.slice(1),x));const g=new Map([["fragment",i],["vertex",s]]);cu(n,v,t.defines),cu(n,v,g),i=g.get("fragment"),s=g.get("vertex");const d=e.blendMode;if(t.blendModes.set(d.blendFunction,d),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(u+=e.inputColorSpace===dt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==mn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const x=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;u+=`${n}MainImage(color0, UV, `,(t.attributes&On.DEPTH)!==0&&x.test(i)&&(u+="depth, ",t.readDepth=!0),u+=`color1);
	`;const M=n+"BlendOpacity";t.uniforms.set(M,d.opacity),u+=`color0 = blend${d.blendFunction}(color0, color1, ${M});

	`,c+=`uniform float ${M};

`}if(c+=i+`
`,s!==null&&(f+=s+`
`),l.set(ct.FRAGMENT_HEAD,c),l.set(ct.FRAGMENT_MAIN_UV,h),l.set(ct.FRAGMENT_MAIN_IMAGE,u),l.set(ct.VERTEX_HEAD,f),l.set(ct.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const x of e.extensions)t.extensions.add(x)}}var hu=class extends Yt{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new ew(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new TM;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===Qe.DST)n.attributes|=a.getAttributes()&On.DEPTH;else{if((n.attributes&a.getAttributes()&On.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);tw("e"+e++,a,n)}let t=n.shaderParts.get(ct.FRAGMENT_HEAD),i=n.shaderParts.get(ct.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get(ct.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of n.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(n.attributes&On.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===dt&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(ct.FRAGMENT_HEAD,t),n.shaderParts.set(ct.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(ct.FRAGMENT_MAIN_UV,s);for(const[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=In){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(const r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==Et&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}},nw=class extends Yt{constructor(n,e,{renderTarget:t,resolutionScale:i=1,width:s=zt.AUTO_SIZE,height:r=zt.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new Ef(n,e,new rp);const l=this.renderPass;l.ignoreBackground=!0,l.skipShadowMapUpdate=!0;const c=l.getClearPass();c.overrideClearColor=new Ze(7829503),c.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new vt(1,1,{minFilter:_t,magFilter:_t}),this.renderTarget.texture.name="NormalPass.Target");const h=this.resolution=new zt(this,a,o,i);h.addEventListener("change",u=>this.setSize(h.baseWidth,h.baseHeight))}set mainScene(n){this.renderPass.mainScene=n}set mainCamera(n){this.renderPass.mainCamera=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.renderToScreen?null:this.renderTarget;this.renderPass.render(n,r,r)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}};class iw{constructor(e){this.volume=e;const t=new wa(e.data,e.sx,e.sy,e.sz);t.format=Vt,t.type=Et,t.colorSpace=mn,t.minFilter=zn,t.magFilter=ut,t.wrapS=t.wrapT=t.wrapR=Un,t.generateMipmaps=!0,t.unpackAlignment=1,t.needsUpdate=!0,this.texture=t;const i=new wa(e.normals,e.sx,e.sy,e.sz);i.format=Vt,i.type=Et,i.colorSpace=mn,i.minFilter=ut,i.magFilter=ut,i.generateMipmaps=!1,i.wrapS=i.wrapT=i.wrapR=Un,i.unpackAlignment=1,i.needsUpdate=!0,this.normalTexture=i,this.size=new W(e.sx*e.texel,e.sy*e.texel,e.sz*e.texel)}texture;normalTexture;size;upload(){this.texture.needsUpdate=!0,this.normalTexture.needsUpdate=!0}}const sw=new Gn(2,2),Tf=`
  precision highp float;
  precision highp sampler3D;
  // L1 SH: Y00 = 0.282095, Y1 = 0.488603 * (y, z, x)
  float shEval(vec4 c, vec3 d) { return c.x * 0.282095 + 0.488603 * (c.y * d.y + c.z * d.z + c.w * d.x); }
  vec4 cosLobe(vec3 d) { return vec4(0.886227, 1.023328 * d.y, 1.023328 * d.z, 1.023328 * d.x); }
`,rw=Tf+`
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
`,aw=Tf+`
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
`;class ow{constructor(e,t,i=1){this.gl=e,this.gi=t;const s=t.volume;this.size=new W(Math.ceil(s.sx/i),Math.ceil(s.sy/i),Math.ceil(s.sz/i)),this.worldSize=t.size.clone();const r=()=>{const a=new Bd(this.size.x,this.size.y,this.size.z,{type:Rn,format:Vt,minFilter:ut,magFilter:ut,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});return a.texture.wrapS=a.texture.wrapT=a.texture.wrapR=Un,a};for(let a=0;a<3;a++)this.seed.push(r()),this.ping.push(r()),this.pong.push(r());this.injectMat=new qc({glslVersion:xa,vertexShader:"in vec3 position; void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:rw,uniforms:{uDirect:{value:t.texture},uNormal:{value:null},uSrcSize:{value:new W(s.sx,s.sy,s.sz)},uDstSize:{value:this.size.clone()},uLayer:{value:0},uDecode:{value:2},uChannel:{value:0},uSkyAmbient:{value:new W(.3,.4,.6)},uTime:{value:0},uBoost:{value:8}},depthTest:!1,depthWrite:!1}),this.propMat=new qc({glslVersion:xa,vertexShader:"in vec3 position; void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:aw,uniforms:{uPrev:{value:null},uSeed:{value:null},uDirect:{value:t.texture},uDstSize:{value:this.size.clone()},uLayer:{value:0},uGain:{value:this.gain}},depthTest:!1,depthWrite:!1}),this.quad=new St(sw,this.injectMat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}size;worldSize;seed=[];ping=[];pong=[];injectMat;propMat;quad;cam=new Ls(-1,1,1,-1,0,1);scene=new Wi;iterations=0;gain=.58;setSources(e,t){this.injectMat.uniforms.uNormal.value=e,this.injectMat.uniforms.uDecode.value=t}setBoost(e){this.injectMat.uniforms.uBoost.value=e}setSky(e){this.injectMat.uniforms.uSkyAmbient.value.set(...e)}get textures(){return[this.ping[0].texture,this.ping[1].texture,this.ping[2].texture]}runLayers(e,t,i){this.quad.material=e;for(let s=0;s<3;s++){i(s);for(let r=0;r<this.size.z;r++)e.uniforms.uLayer.value=r,this.gl.setRenderTarget(t[s],r),this.gl.render(this.scene,this.cam)}this.gl.setRenderTarget(null)}inject(e){this.injectMat.uniforms.uTime.value=e,this.runLayers(this.injectMat,this.seed,t=>{this.injectMat.uniforms.uChannel.value=t})}step(e=1){for(let t=0;t<e;t++){this.propMat.uniforms.uGain.value=this.gain,this.runLayers(this.propMat,this.pong,s=>{this.propMat.uniforms.uPrev.value=this.ping[s].texture,this.propMat.uniforms.uSeed.value=this.seed[s].texture});const i=this.ping;this.ping=this.pong,this.pong=i,this.iterations++}}dispose(){for(const e of[...this.seed,...this.ping,...this.pong])e.dispose()}}const na=bt.length,Cf=`
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
        uniform sampler3D uSh2;`,Df=`
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
`;function lw(n){return{uGi:n.uGi,uGiSize:n.uGiSize,uGiTexel:n.uGiTexel,uGiDecode:n.uGiDecode,uGiStrength:n.uGiStrength,uSkyZenith:n.uSkyZenith,uSkyHorizon:n.uSkyHorizon,uSkySunColor:n.uSkySunColor,uSunDir:n.uSunDir,uDaylight:n.uDaylight,uSh0:n.uSh0,uSh1:n.uSh1,uSh2:n.uSh2}}const Rf=(n,e)=>({SC_CONES:n?4:6,SC_STEPS:n?14:28,SC_SPEC:n?0:1,SC_GI_SH:e==="sh"?1:0});function ps(n,e,t=!1,i="sh",s="full",r){const a=new Float32Array(na),o=new Float32Array(na*3),l=new Float32Array(na*3);for(const f of bt)a[f.id]=f.scale,l[f.id*3]=f.albedo[0],l[f.id*3+1]=f.albedo[1],l[f.id*3+2]=f.albedo[2],f.emissive&&(o[f.id*3]=f.emissive[0],o[f.id*3+1]=f.emissive[1],o[f.id*3+2]=f.emissive[2]);const c=r?{...r,uTexLocal:{value:1},uTexOrigin:{value:new W},uFade:{value:1},uIceMode:{value:2}}:{uAlbedo:{value:n.albedo},uNormal:{value:n.normal},uMatScale:{value:a},uMatEmissive:{value:o},uMatAlbedo:{value:l},uGi:{value:e.texture},uGiSize:{value:e.size.clone()},uGiTexel:{value:e.volume.texel},uGiDecode:{value:rc},uGiStrength:{value:1},uSkyZenith:{value:new W(.2,.36,.72)},uSkyHorizon:{value:new W(.6,.7,.82)},uSkySunColor:{value:new W(1,1,1)},uSunDir:{value:new W(0,1,0)},uTime:{value:0},uDaylight:{value:1},uSh0:{value:null},uSh1:{value:null},uSh2:{value:null},uCursor:{value:new wt(0,0,0,0)},uCursorShape:{value:0},uCursorExt:{value:new W(.5,.5,.5)},uTexLocal:{value:0},uTexOrigin:{value:new W},uFade:{value:1},uMorphBand:{value:pM},uFromT0:{value:-1e9},uFromDur:{value:0},uIceMode:{value:0},uSceneColor:{value:null},uSceneDepth:{value:null},uResolution:{value:new Pe(1,1)},uNear:{value:.08},uFar:{value:1200},uProjection:{value:new tt},uIceShadow:{value:null},uIceShadowMatrix:{value:new tt},uIceCaustic:{value:0},uIceReach:{value:56},uSeaLevel:{value:0},uIceDebug:{value:0}},h=new Aa({color:16777215,roughness:1,metalness:0,side:kn}),u=Rf(t,i);return s!=="full"&&(u.SC_SPEC=0),h.defines={SC_MATERIALS:na,SC_GRASS:Yi,SC_DIRT:Xi,SC_SNOW:gn,SC_STONE:Ds,SC_ICE:An,SC_LITE:s==="full"?0:1,SC_BASIC:s==="basic"?1:0,...u},h.name="terrain-"+s,h.onBeforeCompile=f=>{Object.assign(f.uniforms,c),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
        attribute vec3 aMats;
        attribute vec3 aBary;
        attribute vec4 aFace;
        attribute vec4 aMorph;
        attribute vec3 aFrom;
        uniform float uMorphBand, uFromT0, uFromDur, uTime;
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
        // the keyframe morph: a re-meshed chunk slides in from where its surface was (a slump pass, a break, a
        // brush keyframe), eased, so stepped physics reads as motion rather than jumps
        float fromT = uFromDur > 0.0 ? clamp((uTime - uFromT0) / uFromDur, 0.0, 1.0) : 1.0;
        fromT = fromT * fromT * (3.0 - 2.0 * fromT);
        vec3 transformed = mix(aFrom, mix(aMorph.xyz, vec3(position), lodT), fromT);
        vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vTexPos = uTexLocal > 0.5 ? transformed + uTexOrigin : vWorldPos;
        vWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
        vMats = aMats;
        vBary = aBary;
        vFace = aFace;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
        precision highp sampler2DArray;
        precision highp sampler3D;
        uniform sampler2DArray uAlbedo;
        uniform sampler2DArray uNormal;
        uniform float uMatScale[SC_MATERIALS];
        uniform vec3 uMatEmissive[SC_MATERIALS];
        uniform vec3 uMatAlbedo[SC_MATERIALS];
        ${Cf}
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
          // ice is static: its caustics drift at a tenth of the water's pace, still smooth (founder, 2026-09-15)
          float t = uTime * 0.1;
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
          // slope-aware swap: grass doesn't cling to cliffs. Snow used to swap to
          // stone the same way and read as grey rock from the side (founder,
          // 2026-09-12: "white on all sides"); a snow block is snow all round. The
          // alt material is sampled unconditionally: a texture() inside a branch
          // that varies per pixel has undefined derivatives, and real GPUs
          // answer that with black that flickers as the camera moves.
          #if !SC_BASIC
          if (m == SC_GRASS) {
            float k = smoothstep(0.45, 0.75, n.y);
            int alt = SC_DIRT;
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
        ${Df}
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
        }`)},h.onBeforeCompile=(f=>(p,m)=>{f(p,m),p.fragmentShader=p.fragmentShader.replace("#include <lights_fragment_begin>",qe.lights_fragment_begin.replace("vDirectionalShadowCoord[ i ] ) : 1.0;",`vDirectionalShadowCoord[ i ] ) : 1.0;
		directLight.color *= iceCaustic(vWorldPos);`)),p.fragmentShader=p.fragmentShader.replace("#include <dithering_fragment>",`
      #include <dithering_fragment>
      // belt and braces: a NaN here becomes a black bloom blob three passes later
      if (any(isnan(gl_FragColor.rgb)) || any(isinf(gl_FragColor.rgb))) gl_FragColor.rgb = vec3(0.0);
      if (uIceDebug > 7.5 && uIceMode > 0.5 && uIceMode < 1.5) gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
      if (uIceDebug > 9.5 && uIceDebug < 10.5) gl_FragColor = vec4(iceCaustic(vWorldPos) * 0.5, 1.0);
      if (uIceDebug > 10.5) { vec4 lp = uIceShadowMatrix * vec4(vWorldPos, 1.0); vec3 c = lp.xyz / lp.w; float d = texture2D(uIceShadow, c.xy).r; gl_FragColor = vec4(c.x, c.y, (c.z - d) * 20.0 + 0.5, 1.0); }`),p.fragmentShader=p.fragmentShader.replace("#include <fog_fragment>",`
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
      #endif`)})(h.onBeforeCompile),h.customProgramCacheKey=()=>"splinecraft-terrain-v23-"+s+"-"+(t?"cheap":"full")+"-"+i,{material:h,uniforms:c}}function uu(n){const e=new Zu({depthPacking:Fu});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aMats; attribute vec3 aBary; flat varying vec3 vMatsD; varying vec3 vBaryD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMatsD = aMats; vBaryD = aBary;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
flat varying vec3 vMatsD; varying vec3 vBaryD;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          int m0 = int(vMatsD.x + 0.5), m1 = int(vMatsD.y + 0.5), m2 = int(vMatsD.z + 0.5);
          vec3 bw = clamp(vBaryD, 0.0, 1.0);
          float iceW = ((m0 == ${An} ? bw.x : 0.0) + (m1 == ${An} ? bw.y : 0.0) + (m2 == ${An} ? bw.z : 0.0)) / max(bw.x + bw.y + bw.z, 1e-4);
          if (${n?"iceW <= 0.5":"iceW > 0.5"}) discard;
        }`)},e.customProgramCacheKey=()=>"splinecraft-ice-depth-"+(n?"only":"none"),e}const cw=.08,hw=.45;class uw{mesh;uniforms={uSunDir:{value:new W(0,1,0)},uSunColor:{value:new W(1,1,1)},uZenith:{value:new W(.2,.36,.72)},uHorizon:{value:new W(.6,.7,.82)},uDaylight:{value:1},uTime:{value:0},uCloud:{value:.55}};constructor(){const e=new ft({uniforms:this.uniforms,side:Ut,depthWrite:!1,fog:!1,vertexShader:`
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
        }`});this.mesh=new St(new Yl(1,32,16),e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.mesh.scale.setScalar(900)}}const pc=n=>Math.round(n/C);function pn(n,e,t,i){if(e<0||t<0||i<0||e>=n.nx-1||t>=n.ny-1||i>=n.nz-1)return!1;const s=n.index(e,t,i),r=n.hard[s];if(r!==0&&ht(r)){const h=n.sub[s]===0?Gt:n.sub[s];if(rf(h)>13)return!1}const a=n.density,o=n.ny*n.nz,l=n.nz;let c=0;return a[s]>0&&c++,a[s+1]>0&&c++,a[s+l]>0&&c++,a[s+l+1]>0&&c++,a[s+o]>0&&c++,a[s+o+1]>0&&c++,a[s+o+l]>0&&c++,a[s+o+l+1]>0&&c++,c<6}function fw(n,e,t,i){for(let s=t+1;s<n.ny-1;s++)if(!pn(n,e,s,i))return!1;return!0}function If(n,e,t){n.water.fill(0);const i=pc(e),s=[],r=n.water,a=Math.min(i-1,n.ny-2);if(a<0)return 0;for(let o=0;o<n.nx-1;o++)for(let l=0;l<n.nz-1;l++)if(pn(n,o,a,l)&&fw(n,o,a,l)){const c=n.index(o,a,l);r[c]||(r[c]=mt,t&&(t[c]=mt),s.push(o,a,l))}return Mw(n,s,i,t)}function dw(n,e,t){let i=0;for(let s=Math.max(0,e.x0);s<Math.min(n.nx-1,e.x1);s++)for(let r=Math.max(0,e.y0);r<Math.min(n.ny-1,e.y1);r++)for(let a=Math.max(0,e.z0);a<Math.min(n.nz-1,e.z1);a++){const o=n.index(s,r,a);n.water[o]&&(n.water[o]=0,i++),t&&(t[o]=0)}return i}function pw(n,e){const t=n.water.slice(),i=new Uint8Array(n.water.length);return If(n,e,i),n.water.set(t),i}function mw(n,e,t,i,s){if(!n.inBounds(e,t,i)||!n.water[n.index(e,t,i)])return null;const r=n.water,a=n.ny*n.nz,o=n.nz,l=[e,t,i];r[n.index(e,t,i)]=0,s&&(s[n.index(e,t,i)]=0);let c={x0:e,y0:t,z0:i,x1:e+1,y1:t+1,z1:i+1},h=0;for(;l.length;){const u=l.pop(),f=l.pop(),p=l.pop();h++,c=Ll(c,{x0:p,y0:f,z0:u,x1:p+1,y1:f+1,z1:u+1});const m=n.index(p,f,u),v=(g,d,x,M)=>{r[M]&&(r[M]=0,s&&(s[M]=0),l.push(g,d,x))};p>0&&v(p-1,f,u,m-a),p<n.nx-2&&v(p+1,f,u,m+a),f>0&&v(p,f-1,u,m-o),f<n.ny-2&&v(p,f+1,u,m+o),u>0&&v(p,f,u-1,m-1),u<n.nz-2&&v(p,f,u+1,m+1);for(let g=2;g<=3;g++)if(f+g<n.ny-1&&r[m+g*o]&&!r[m+o]){v(p,f+g,u,m+g*o);break}}return{box:c,cells:h}}const ir=8,gw=2,vw=8;class xw{constructor(e,t,i){this.field=e,this.seaLevel=t,this.sea=i,this.motion=new Uint8Array(e.water.length)}queued=new Set;queue=[];parkedCells=[];parkedSet=new Set;sources=new Map;motion;voidSeverity=0;get refillPace(){return 1-.9*this.voidSeverity}get active(){return this.queue.length}get parked(){return this.parkedCells.length}bubbleSort(e){const t=this.field,i=t.ny*t.nz,s=t.nz,r=o=>{const l=Math.floor(o/i),c=Math.floor((o-l*i)/s);return[l,c,o-l*i-c*s]};if(!e||e.r<=0){for(const o of this.parkedCells)this.activate(o);this.parkedCells=[],this.parkedSet.clear();return}if(this.parkedCells.length){const o=[];for(const l of this.parkedCells){const[c,h,u]=r(l);Rh(e,c,h,u)?(this.parkedSet.delete(l),this.activate(l)):o.push(l)}this.parkedCells=o}const a=[];for(const o of this.queue){const[l,c,h]=r(o);Rh(e,l,c,h)?a.push(o):(this.queued.delete(o),this.parkedSet.has(o)||(this.parkedSet.add(o),this.parkedCells.push(o)))}this.queue=a}activate(e){!this.queued.has(e)&&!this.parkedSet.has(e)&&(this.queued.add(e),this.queue.push(e))}activateAround(e){const t=this.field,i=t.ny*t.nz,s=t.nz,r=e%s,a=(e-r)/s,o=a%t.ny,l=(a-o)/t.ny;this.activate(e),l>0&&this.activate(e-i),l<t.nx-2&&this.activate(e+i),o>0&&this.activate(e-s),o<t.ny-2&&this.activate(e+s),r>0&&this.activate(e-1),r<t.nz-2&&this.activate(e+1)}wake(e){const t=this.field,i=t.water;let s=null;const r=Math.max(0,e.x0-1),a=Math.max(0,e.y0-1),o=Math.max(0,e.z0-1),l=Math.min(t.nx-2,e.x1),c=Math.min(t.ny-2,e.y1),h=Math.min(t.nz-2,e.z1);for(let u=r;u<=l;u++)for(let f=a;f<=c;f++)for(let p=o;p<=h;p++){const m=t.index(u,f,p);i[m]&&!pn(t,u,f,p)&&(i[m]=0,this.sea[m]=0,this.sources.delete(m),s=Ll(s,{x0:u,y0:f,z0:p,x1:u+1,y1:f+1,z1:p+1})),i[m]||this.sea[m]?this.activateAround(m):pn(t,u,f,p)&&this.activate(m)}return this.fillStanding(r,a,o,l,c,h),s}fillStanding(e,t,i,s,r,a){const o=this.field,l=o.water,c=this.sea,h=o.ny*o.nz,u=o.nz,f=(d,x,M)=>d>=e&&d<=s&&x>=t&&x<=r&&M>=i&&M<=a,p=(d,x)=>x+Math.min(c[d],mt)/mt,m=new Map,v=[],g=(d,x,M,y,w)=>{if(w<=M||!f(x,M,y)||l[d]||!pn(o,x,M,y))return;const E=m.get(d);E!==void 0&&E>=w||(m.set(d,w),v.push(d))};for(let d=e;d<=s;d++)for(let x=t;x<=r;x++)for(let M=i;M<=a;M++){const y=d*h+x*u+M;if(l[y]||!pn(o,d,x,M))continue;let w=-1;d>0&&c[y-h]&&l[y-h]&&(w=Math.max(w,p(y-h,x))),d+1<o.nx-1&&c[y+h]&&l[y+h]&&(w=Math.max(w,p(y+h,x))),x>0&&c[y-u]&&l[y-u]&&(w=Math.max(w,p(y-u,x-1))),x+1<o.ny-1&&c[y+u]&&l[y+u]&&(w=Math.max(w,p(y+u,x+1))),M>0&&c[y-1]&&l[y-1]&&(w=Math.max(w,p(y-1,x))),M+1<o.nz-1&&c[y+1]&&l[y+1]&&(w=Math.max(w,p(y+1,x))),w>x&&g(y,d,x,M,w)}for(;v.length;){const d=v.pop(),x=m.get(d),M=Math.floor(d/h),y=Math.floor((d-M*h)/u),w=d-M*h-y*u;M>0&&g(d-h,M-1,y,w,x),M+1<o.nx-1&&g(d+h,M+1,y,w,x),y>0&&g(d-u,M,y-1,w,x),y+1<o.ny-1&&g(d+u,M,y+1,w,x),w>0&&g(d-1,M,y,w-1,x),w+1<o.nz-1&&g(d+1,M,y,w+1,x)}for(const[d,x]of m){const M=Math.floor(d/h),y=Math.floor((d-M*h)/u),w=Math.max(1,Math.min(mt,Math.round((x-y)*mt)));l[d]=Math.round(w*(1-this.voidSeverity)),c[d]=w,this.activate(d),this.activateAround(d)}}addSource(e,t,i,s){const r=this.field.index(e,t,i);this.sources.set(r,s),this.activateAround(r)}dropDrySources(){let e=0;for(const t of Array.from(this.sources.keys()))this.field.water[t]||(this.sources.delete(t),e++);return e}step(e=null){const t=this.field,i=t.water,s=this.sea,r=t.ny*t.nz,a=t.nz;for(const[m,v]of this.sources)this.parkedSet.has(m)||(i[m]=Math.min(255,i[m]+v),this.activate(m));this.bubbleSort(e);const o=this.queue;this.queue=[],this.queued.clear(),o.sort((m,v)=>m-v);const l=new Map,c=(m,v,g)=>{g<=0||(l.set(m,(l.get(m)??0)-g),l.set(v,(l.get(v)??0)+g))},h=m=>m<=mt?m:m<2*mt+ir?(mt*mt+m*ir)/(mt+ir):(m+ir)/2,u=this.refillPace;for(const m of o)s[m]&&i[m]<s[m]&&l.set(m,(l.get(m)??0)+Math.max(1,Math.ceil((s[m]-i[m])*u)));for(const m of o){let v=i[m]+(l.get(m)??0);if(v<=0)continue;const g=m%a,d=(m-g)/a,x=d%t.ny,M=(d-x)/t.ny;let y=!1;if(x>0){const E=m-a;if(pn(t,M,x-1,g)){const b=i[E]+(l.get(E)??0),T=Math.min(v,Math.max(0,Math.floor(h(v+b)-b)));T>0&&(c(m,E,T),v-=T),y=b+T<mt}}if(y||v<vw)continue;const w=[];M>0&&w.push([M-1,x,g,m-r]),M<t.nx-2&&w.push([M+1,x,g,m+r]),g>0&&w.push([M,x,g-1,m-1]),g<t.nz-2&&w.push([M,x,g+1,m+1]);for(const[E,b,T,S]of w){if(!pn(t,E,b,T))continue;const A=i[S]+(l.get(S)??0);if(A>=v)continue;const _=v-A,R=Math.min(v,Math.max(_>=2?1:0,Math.floor(_/(v>mt&&A>=mt?2:4))));R>0&&(c(m,S,R),v-=R)}if(!(v<=mt)&&x<t.ny-2&&pn(t,M,x+1,g)){const E=m+a,b=i[E]+(l.get(E)??0),T=v-h(v+b),S=Math.min(v-mt,Math.max(0,T>.5?Math.max(1,Math.floor(T)):0));S>0&&c(m,E,S)}}let f=null;const p=new Set;for(const[m,v]of l){if(v===0)continue;let g=i[m]+v;if(s[m]&&u>=1&&(g=Math.max(g,s[m])),g<gw&&!s[m]&&(g=0),g=Math.max(0,Math.min(255,g)),g===i[m])continue;this.motion[m]=Math.min(255,Math.abs(g-i[m])*3),i[m]=g,p.add(m);const d=m%a,x=(m-d)/a,M=x%t.ny,y=(x-M)/t.ny;f=Ll(f,{x0:y,y0:M,z0:d,x1:y+1,y1:M+1,z1:d+1})}for(const m of p)this.activateAround(m);for(const m of o)!p.has(m)&&this.motion[m]>0&&(this.motion[m]=Math.floor(this.motion[m]*.6));return{changed:f,active:this.queue.length,cells:Array.from(p)}}settleTable(){const e=this.field.water,t=this.sea;let i=0;for(let s=0;s<e.length;s++)e[s]&&!t[s]&&(t[s]=e[s],i++);return i}settle(e=2e3){let t=0;for(;t<e&&this.queue.length;)t++,this.step();return t}}function Ll(n,e){return n?{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}:e}function Mw(n,e,t,i){const s=n.water;let r=0;const a=n.ny*n.nz,o=n.nz;for(;e.length;){const l=e.pop(),c=e.pop(),h=e.pop(),u=n.index(h,c,l),f=(p,m,v,g)=>{s[g]||m>=t||pn(n,p,m,v)&&(s[g]=i?Math.min(255,mt+ir*Math.max(0,t-1-m)):mt,i&&(i[g]=s[g]),r++,e.push(p,m,v))};h>0&&f(h-1,c,l,u-a),h<n.nx-2&&f(h+1,c,l,u+a),c>0&&f(h,c-1,l,u-o),c<t-1&&f(h,c+1,l,u+o),l>0&&f(h,c,l-1,u-1),l<n.nz-2&&f(h,c,l+1,u+1)}return r}const fi=0,at=2,yw=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],ww=[[0,0,0,0],[1,0,0,1],[0,1,0,0],[0,0,0,1],[0,0,1,0],[1,0,1,1],[0,1,1,0],[0,0,1,1],[0,0,0,2],[1,0,0,2],[1,1,0,2],[0,1,0,2]];let js=null;function Sw(n){if(js&&js.B===n)return js;const e=n*n*n;return js={B:n,val:new Float32Array(e),pval:new Float32Array(e),ext:new Uint8Array(e),own:new Uint8Array(e),vmap:new Int32Array(e*3),colBase:new Int32Array(n*n),colWet:new Uint8Array(n*n),near:new Uint8Array(n*n),lo:new Int16Array(n*n),hi:new Int16Array(n*n)},js}function Aw(n,e,t,i,s){const r=[],a=n.nx-1,o=n.ny-1,l=n.nz-1,c=n.water;for(let h=e;h<Math.min(e+s,a);h++)for(let u=t;u<Math.min(t+s,o);u++){const f=n.index(h,u,0);for(let p=i;p<Math.min(i+s,l);p++)c[f+p]&&r.push(f+p)}return r}const _w={positions:new Float32Array(0),prev:new Float32Array(0),normals:new Float32Array(0),shore:new Float32Array(0),flow:new Float32Array(0),indices:new Uint32Array(0),cells:0};function Ew(n,e,t,i,s,r={}){const a=n.nx-1,o=n.ny-1,l=n.nz-1,c=n.water,h=n.ny*n.nz,u=n.nz,f=s+1+2*at,p=Sw(f),m=p.val,v=r.shown?p.pval:null,g=p.ext,d=p.own,x=r.shown,M=r.flow,y=G=>Math.min(c[G],mt)/mt,w=n.density,E=G=>{let V=0;for(const $ of[0,1,h,h+1]){const te=w[G+$],de=w[G+$+u];V+=te>0?de>0?1:te/(te-de):0}return V*.25},b=(G,V)=>Math.min(1,E(G)+V),T=G=>x.get(G)??0,S=p.colBase,A=p.colWet.fill(0),_=Math.max(0,at-t),R=Math.min(f-1,o-1-t+at),P=u,z=(G,V)=>S[G]+(t-at+V)*P,O=(G,V)=>{const $=z(G,V),te=Math.floor($/h),de=Math.floor(($-te*h)/u),ge=$-te*h-de*u;return pn(n,te,de,ge)};let L=0,U=f,B=-1,k=f,X=-1,K=f,oe=-1;for(let G=0;G<f;G++){const V=e-at+G;for(let $=0;$<f;$++){const te=i-at+$,de=G*f+$;if(V<0||te<0||V>=a||te>=l){S[de]=-1;continue}S[de]=V*h+te;let ge=0,he=f,xe=-1;const Ce=G>=at&&$>=at&&G<at+s&&$<at+s,Me=V*h+te+(t-at)*u;for(let ce=_;ce<=R;ce++)c[Me+ce*u]&&(ge=1,ce<he&&(he=ce),xe=ce,Ce&&ce>=at&&ce<at+s&&L++);ge&&(A[de]=1,G<U&&(U=G),G>B&&(B=G),$<K&&(K=$),$>oe&&(oe=$),he<k&&(k=he),xe>X&&(X=xe))}}if(B<0)return{..._w,cells:L};const we=3;U=Math.max(0,U-we),B=Math.min(f-1,B+we),K=Math.max(0,K-we),oe=Math.min(f-1,oe+we),k=Math.max(0,k-we),X=Math.min(f-1,X+we);const be=p.lo,Se=p.hi;for(let G=U;G<=B;G++)for(let V=K;V<=oe;V++){const $=G*f+V;be[$]=f,Se[$]=-1;const te=$*f+k;m.fill(-1,te,te+(X-k+1)),v&&v.fill(-1,te,te+(X-k+1)),g.fill(0,te,te+(X-k+1)),d.fill(0,te,te+(X-k+1))}const Z=(G,V,$,te)=>{const de=G*f,ge=Math.max(_,k),he=Math.min(R,X);let xe=ge;for(;xe<=he;){if(V(z(G,xe))<=0){xe++;continue}const Ce=xe;let Me=xe;for(;Me+1<=he&&V(z(G,Me+1))>0;)Me++;const ce=b(z(G,Me),V(z(G,Me))),Be=ae=>ae<_||ae>R||!O(G,ae);let H=Ce,pe=Me+ce;Ce===_&&Ce===0?H=-1e9:Be(Ce-1)&&(H=Be(Ce-2)?Ce-2:Ce-1),Me===R&&Me===f-1?pe=1e9:ce>=1&&Be(Me+1)&&(pe=Be(Me+2)?Me+3:Me+2);const fe=Math.max(k,Ce-2),ye=Math.min(X,Me+2);for(let ae=fe;ae<=ye;ae++){const ie=ae+.5,Ie=Math.max(-1,Math.min(1,Math.min(ie-H,pe-ie))),Ne=de+ae;Ie>$[Ne]&&($[Ne]=Ie),te&&Ie>-1&&(d[Ne]=1,ae<be[G]&&(be[G]=ae),ae>Se[G]&&(Se[G]=ae))}xe=Me+1}};for(let G=U;G<=B;G++)for(let V=K;V<=oe;V++){const $=G*f+V;A[$]&&Z($,y,m,!0)}const ne=p.near.fill(0);for(let G=U;G<=B;G++)for(let V=K;V<=oe;V++)if(A[G*f+V])for(let $=-1;$<=1;$++)for(let te=-1;te<=1;te++){const de=G+$,ge=V+te;de>=0&&ge>=0&&de<f&&ge<f&&(ne[de*f+ge]=1)}for(let G=Math.max(1,U);G<=Math.min(f-2,B);G++)for(let V=Math.max(1,K);V<=Math.min(f-2,oe);V++){const $=G*f+V;if(!ne[$]||S[$]<0)continue;const te=$-f,de=$+f,ge=$-1,he=$+1,xe=Math.max(_,Math.min(be[te],be[de],be[ge],be[he])),Ce=Math.min(R,Math.max(Se[te],Se[de],Se[ge],Se[he]));for(let Me=xe;Me<=Ce;Me++){const ce=$*f+Me;if(d[ce])continue;let Be=-1;d[ce-f*f]&&m[ce-f*f]>Be&&(Be=m[ce-f*f]),d[ce+f*f]&&m[ce+f*f]>Be&&(Be=m[ce+f*f]),d[ce-f]&&m[ce-f]>Be&&(Be=m[ce-f]),d[ce+f]&&m[ce+f]>Be&&(Be=m[ce+f]),!(Be<=-1||O($,Me))&&(m[ce]=Be,g[ce]=1,Me<be[$]&&(be[$]=Me),Me>Se[$]&&(Se[$]=Me))}}if(v){for(let G=U;G<=B;G++)for(let V=K;V<=oe;V++){const $=G*f+V;ne[$]&&S[$]>=0&&Z($,T,v,!1)}for(let G=Math.max(1,U);G<=Math.min(f-2,B);G++)for(let V=Math.max(1,K);V<=Math.min(f-2,oe);V++){const $=G*f+V;if(ne[$])for(let te=k;te<=X;te++){const de=$*f+te;if(!g[de])continue;let ge=-1;d[de-f*f]&&v[de-f*f]>ge&&(ge=v[de-f*f]),d[de+f*f]&&v[de+f*f]>ge&&(ge=v[de+f*f]),d[de-f]&&v[de-f]>ge&&(ge=v[de-f]),d[de+f]&&v[de+f]>ge&&(ge=v[de+f]),v[de]=ge}}}const me=[],le=[],se=[],Ae=[],Ge=[],N=[],ze=p.vmap;for(let G=U;G<=B;G++)for(let V=K;V<=oe;V++){const $=(G*f+V)*f*3;ze.fill(-1,$+k*3,$+(X+1)*3)}const Fe=new Int32Array(12),Te=[f*f,1,f],ue=(G,V)=>{V[0]=(m[G+f*f]-m[G-f*f])*.5,V[1]=(m[G+1]-m[G-1])*.5,V[2]=(m[G+f]-m[G-f])*.5},Ve=[0,0,0],Ee=[0,0,0],ke=G=>{if(!M)return 0;const V=Math.floor(G/f),$=G%f;return S[V]<0||$<_||$>R?0:M.get(z(V,$))??0},Je=(G,V)=>G>=fi!=V>=fi,$e=(G,V)=>{const $=G*3+V;let te=ze[$];if(te>=0)return te;const de=Te[V],ge=G+de,he=m[G],xe=m[ge];let Ce=(he-fi)/(he-xe);Ce>=0&&Ce<=1||(Ce=.5);const Me=Math.floor(G/(f*f)),ce=G%f,Be=Math.floor(G/f)%f;let H=e-at+Me+.5,pe=t-at+ce+.5,fe=i-at+Be+.5;V===0?H+=Ce:V===1?pe+=Ce:fe+=Ce,te=me.length/3,me.push(H*C,pe*C,fe*C),ue(G,Ve),ue(ge,Ee);let ye=Ve[0]+(Ee[0]-Ve[0])*Ce,ae=Ve[1]+(Ee[1]-Ve[1])*Ce,ie=Ve[2]+(Ee[2]-Ve[2])*Ce,Ie=Math.hypot(ye,ae,ie);Ie<1e-6&&(ye=0,ae=1,ie=0,Ie=1),ye=-ye/Ie,ae=-ae/Ie,ie=-ie/Ie,se.push(ye,ae,ie);let Ne=Ce;if(v){const Lt=v[G],Pn=v[ge];if(Je(Lt,Pn))Ne=(Lt-fi)/(Lt-Pn);else{const _n=v[G-de],Zi=v[ge+de];Je(_n,Lt)?Ne=(_n-fi)/(_n-Lt)-1:Je(Pn,Zi)?Ne=1+(Pn-fi)/(Pn-Zi):Lt<fi?Ne=Lt>=Pn?0:1:Ne=Lt<=Pn?0:1}Ne>=-1&&Ne<=2||(Ne=Ce)}let pt=e-at+Me+.5,rt=t-at+ce+.5,vn=i-at+Be+.5;return V===0?pt+=Ne:V===1?rt+=Ne:vn+=Ne,le.push(pt*C,rt*C,vn*C),Ae.push(g[G]||g[ge]?1:0),Ge.push(Math.max(ke(G),ke(ge),(1-Math.max(ae,0))*.35)),ze[$]=te,te},F=Math.max(0,U-at),D=Math.min(s-1,B-at-1),Q=Math.max(0,K-at),ee=Math.min(s-1,oe-at-1);for(let G=F;G<=D;G++)for(let V=Q;V<=ee;V++){const $=(G+at)*f+V+at,te=$+f,de=$+1,ge=te+1,he=Math.min(be[$],be[te],be[de],be[ge]),xe=Math.max(Se[$],Se[te],Se[de],Se[ge]);if(xe<0)continue;const Ce=Math.max(0,he-at-1),Me=Math.min(s-1,xe-at);for(let ce=Ce;ce<=Me;ce++){let Be=0;for(let fe=0;fe<8;fe++){const ye=yw[fe];m[((G+at+ye[0])*f+V+at+ye[2])*f+ce+at+ye[1]]>=fi&&(Be|=1<<fe)}const H=Lx[Be];if(H===0)continue;for(let fe=0;fe<12;fe++){if(!(H&1<<fe))continue;const ye=ww[fe];Fe[fe]=$e(((G+at+ye[0])*f+V+at+ye[2])*f+ce+at+ye[1],ye[3])}const pe=Be*16;for(let fe=0;fe<16;fe+=3){const ye=_o[pe+fe];if(ye<0)break;const ae=_o[pe+fe+1],ie=_o[pe+fe+2];N.push(Fe[ye],Fe[ie],Fe[ae])}}}return{positions:Float32Array.from(me),prev:Float32Array.from(le),normals:Float32Array.from(se),shore:Float32Array.from(Ae),flow:Float32Array.from(Ge),indices:Uint32Array.from(N),cells:L}}const bw=512,fu=bt.length;bt.length+1;function Tw(n){const e=(t,i)=>{const s=new Vl(t,n.size,n.size,n.layers);return s.format=Vt,s.type=Et,s.colorSpace=i?dt:mn,s.wrapS=s.wrapT=lr,s.minFilter=zn,s.magFilter=ut,s.generateMipmaps=!0,s.anisotropy=8,s.needsUpdate=!0,s};return{albedo:e(n.albedo,!0),normal:e(n.normal,!1),swatches:n.swatches}}const Ca=16,or=8,Cw=`
  precision highp float;
  uniform sampler2D uPrev, uMask;
  uniform vec2 uTexel, uWorld;
  uniform float uK, uDamp, uRest, uN, uGain;
  uniform vec4 uImp[${Ca}];
  uniform vec4 uObs[${or}];
  uniform float uNObs;
  varying vec2 vUv;
  // 1 where water can move: the shore mask, minus any moving body sitting on this texel
  float open(vec2 uv, vec2 p) {
    float m = texture2D(uMask, uv).r;
    for (int i = 0; i < ${or}; i++) {
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
    for (int i = 0; i < ${Ca}; i++) {
      if (float(i) >= uN) break;
      vec4 im = uImp[i];
      float d2 = dot(p - im.xy, p - im.xy);
      v += im.w * exp(-d2 / (im.z * im.z));
    }
    // a moving body pushes the water at its rim, in proportion to its speed — a small, bounded push:
    // this ran every step at ten times the size, and a player standing in the sea pumped the surface
    // down to the clamp and left a pit there for good (damping only ever acted on velocity)
    for (int i = 0; i < ${or}; i++) {
      if (float(i) >= uNObs) break;
      vec4 o = uObs[i];
      float d = length(p - o.xy);
      float rim = smoothstep(o.z * 0.7, o.z, d) * (1.0 - smoothstep(o.z, o.z * 1.6, d));
      v -= rim * min(o.w, 3.0) * 0.0015 * uGain;
    }
    // the surface wants to be level: a weak spring to rest removes any offset a push left behind
    v -= h * uRest;
    v *= uDamp;
    // the clamp grows with the gain, or a strong setting would only saturate
    v = clamp(v, -0.03 * max(1.0, uGain), 0.03 * max(1.0, uGain));
    h += v;
    float m = open(vUv, p);
    h *= m; v *= m;
    h = clamp(h, -0.12, 0.12);
    gl_FragColor = vec4(h, v, 0.0, 1.0);
  }`;class Dw{constructor(e,t,i,s){this.worldX=e,this.worldZ=t,this.level=s;const r=Math.max(16,Math.round(e*i)),a=Math.max(16,Math.round(t*i)),o=()=>new vt(r,a,{type:Rn,format:Vt,minFilter:ut,magFilter:ut,depthBuffer:!1,stencilBuffer:!1});this.rts=[o(),o()],this.mask=new Sa(new Uint8Array(4),1,1,yi,Et),this.mask.minFilter=ut,this.mask.magFilter=ut,this.mask.needsUpdate=!0,this.mat=new ft({vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Cw,uniforms:{uPrev:{value:null},uMask:{value:this.mask},uTexel:{value:new Pe(1/r,1/a)},uWorld:{value:new Pe(e,t)},uK:{value:.06},uDamp:{value:.988},uRest:{value:.004},uN:{value:0},uGain:{value:1},uImp:{value:Array.from({length:Ca},()=>new wt)},uObs:{value:Array.from({length:or},()=>new wt)},uNObs:{value:0}},depthTest:!1,depthWrite:!1}),this.scene.add(new St(new Gn(2,2),this.mat))}rts;cur=0;mat;scene=new Wi;cam=new Ls(-1,1,1,-1,0,1);mask;pending=[];acc=0;get texture(){return this.rts[this.cur].texture}get maskTexture(){return this.mask}get texelSize(){return this.mat.uniforms.uTexel.value}setMask(e,t){const i=pc(this.level),s=Math.min(i-1,e.ny-2),r=e.nx-1,a=e.nz-1,o=new Uint8Array(r*a);if(t){const l=e.ny,c=e.nz;for(let h=0;h<a;h++)for(let u=0;u<r;u++){const f=u*l*c+h;for(let p=l-2;p>=0;p--){const m=f+p*c;if(e.water[m]){o[h*r+u]=t[m]?255:0;break}}}}else if(s>=0)for(let l=0;l<a;l++)for(let c=0;c<r;c++)o[l*r+c]=e.water[e.index(c,s,l)]?255:0;this.mask.dispose(),this.mask=new Sa(o,r,a,yi,Et),this.mask.minFilter=ut,this.mask.magFilter=ut,this.mask.needsUpdate=!0,this.mat.uniforms.uMask.value=this.mask}setObstacles(e){const t=this.mat.uniforms,i=Math.min(or,e.length);for(let s=0;s<i;s++)t.uObs.value[s].set(e[s][0],e[s][1],e[s][2],e[s][3]);t.uNObs.value=i}gain=1;setGain(e){this.gain=e,this.mat.uniforms.uGain.value=e}splash(e,t,i,s){this.pending.push(e,t,Math.max(.15,i),s*this.gain)}step(e,t){this.acc=Math.min(this.acc+t,3/60);const i=this.mat.uniforms;let s=!0;for(;this.acc>=1/60;){this.acc-=1/60;const r=s?Math.min(Ca,this.pending.length/4):0;for(let l=0;l<r;l++)i.uImp.value[l].set(this.pending[l*4],this.pending[l*4+1],this.pending[l*4+2],this.pending[l*4+3]);i.uN.value=r,i.uPrev.value=this.rts[this.cur].texture;const a=1-this.cur,o=e.getRenderTarget();e.setRenderTarget(this.rts[a]),e.render(this.scene,this.cam),e.setRenderTarget(o),this.cur=a,s=!1}s||(this.pending.length=0)}}const di=3,Rw=.7,Iw=`
  uniform sampler2D uWave, uWaveMask;
  uniform vec2 uWorldSize;
  uniform float uTime;
  attribute float aShore, aFlow;
  attribute vec3 aPrev;
  attribute vec2 aGlide;
  varying vec3 vWorldPos, vNormal;
  varying float vShore;
  varying float vFlow;
  void main() {
    vShore = aShore;
    vFlow = aFlow;
    vNormal = normal;
    // smoothing: every vertex glides from where the surface was shown when its chunk was last rebuilt (aPrev) to
    // where it is now, over the chunk's span (aGlide: build time, span; span 0 snaps, and aPrev is the position anyway)
    float b = aGlide.y > 0.0 ? clamp((uTime - aGlide.x) / aGlide.y, 0.0, 1.0) : 1.0;
    vec3 p = mix(aPrev, position, b);
    // waves lift the sheet, fading with the sim mask and pinned wherever it is not a level top: the terrain extension
    // (aShore) and the faces of falls, where a lifted surface beside a bank or a ledge rode over it
    vec2 wuv = p.xz / uWorldSize;
    float m = texture2D(uWaveMask, wuv).r;
    float pinned = max(aShore, clamp((0.85 - normal.y) / 0.3, 0.0, 1.0));
    p.y += texture2D(uWave, wuv).r * m * m * (1.0 - pinned);
    vWorldPos = p;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }`,Pf=`
  vec3 waterBody(vec3 light) { return vec3(0.02, 0.10, 0.16) * (light * 2.0 + 0.01); }
  // Seen through d metres of water: absorbed per metre (red first), blue-shifted, filled in with the body
  // colour, and dimmed for the light the water above the camera already took (uDim)
  vec3 underwaterGrade(vec3 c, float d, vec3 light, float dim) {
    vec3 absorb = exp(-d * vec3(0.55, 0.24, 0.15));
    return c * absorb * vec3(0.8, 0.92, 1.0) * dim + waterBody(light) * (1.0 - exp(-d * 0.15));
  }`,Pw=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 1.0, 1.0); }`,Lw=`
  precision highp sampler2DArray;
  #include <packing>
  uniform sampler2D inputBuffer, uSceneDepth;
  uniform sampler2DArray uNormal;
  uniform float uNear, uFar, uUnder, uDim, uLayer, uTime;
  uniform vec2 uResolution;
  uniform vec3 uLight;
  varying vec2 vUv;
  float viewZ(float ndcDepth) { return perspectiveDepthToViewZ(ndcDepth, uNear, uFar); }
  `+Pf+`
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
  }`,Bw=`
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
  varying vec3 vWorldPos, vNormal;
  varying float vShore;
  varying float vFlow;

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
  `+Pf+`

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;
    float sceneNdc = texture2D(uSceneDepth, uv).r;
    float waterNdc = gl_FragCoord.z;
    // the opaque scene owns the depth buffer; terrain in front of the surface wins
    if (sceneNdc < waterNdc - 2e-6) discard;
    float thick = max(-viewZ(sceneNdc) + viewZ(waterNdc), 0.0); // metres of water along the view ray
    // the face of a fall or a front is a sheet, not a wall of deep water: the ray leaves it within a cell or so,
    // whatever the depth buffer says lies behind it
    vec3 nGeo = normalize(vNormal);
    float steep = 1.0 - abs(nGeo.y);
    thick = mix(thick, min(thick, 0.7), steep);

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
    vec3 n = normalize(nGeo + vec3(slope.x, 0.0, slope.y));
    bool below = uUnder > 0.5;
    vec3 V = normalize(cameraPosition - vWorldPos);
    if (dot(n, V) < 0.0) n = -n; // whichever side of the sheet the eye is on

    // refraction: look through the surface a little off-axis, but never pull the foreground in
    float thickR = clamp(thick, 0.0, 1.0);
    vec2 ruv = uv + slope * (below ? 0.09 : 0.035 * thickR);
    float rNdc = texture2D(uSceneDepth, ruv).r;
    if (rNdc < waterNdc) { ruv = uv; rNdc = sceneNdc; }
    vec3 refr = texture2D(uSceneColor, ruv).rgb;
    // a floor on the depth the tint sees: real water twenty centimetres deep over grass is glass, and a poured sheet
    // read as nothing at all (2026-09-14); half a metre of body colour makes any water water, and the sea's shallows
    // still grade to their deep
    float thickRef = max(-viewZ(rNdc) + viewZ(waterNdc), 0.5);
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
    // whitewater where the water moved last tick (a fall, a rapid, the front of a pour), broken up by the normal texture
    float white = vFlow * smoothstep(0.2, 0.8, n2.z * 0.5 + 0.5 + n1.x * 0.3 + uTime * 0.0);
    float foam = (smoothstep(0.45, 0.0, thick) * smoothstep(0.3, 0.7, n1.z * 0.5 + 0.5 + n2.x * 0.3) * smoothstep(0.0, 0.5, vShore) + smoothstep(0.35, 0.9, crest) * 0.6 + white * 1.2) * (1.0 - float(below));
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
  }`;function Uw(n){const e=[];for(let t=0;t<n.length;t++)n[t]!==0&&e.push(t);return e}class dr extends Yt{constructor(e,t,i,s,r,a,o,l){super("WaterPass"),this.worldScene=e,this.cam=t,this.level=i,this.sim=new Dw(a,o,l,i),this.uniforms.uWorldSize.value.set(a,o),this.uniforms.uWaveTexel.value.copy(this.sim.texelSize),this.needsDepthTexture=!0,this.needsSwap=!0,this.uniforms.uNormal.value=s,this.grade.uniforms.uNormal.value=s,this.uniforms.uNear.value=t.near,this.uniforms.uFar.value=t.far,this.clip=new mi(new W(0,1,0),-i+.02),this.refl=r?new vt(1,1,{type:Rn,depthBuffer:!0,minFilter:ut,magFilter:ut}):null,this.uniforms.uReflect.value=r?1:0,this.refl&&(this.uniforms.uReflTex.value=this.refl.texture),this.material=new ft({uniforms:this.uniforms,vertexShader:Iw,fragmentShader:Bw,depthTest:!1,depthWrite:!1,side:Qt,transparent:!1}),this.fullscreenMaterial=this.grade}chunks=new Map;material;chunkCells=new Map;uniforms={uNormal:{value:null},uSceneColor:{value:null},uSceneDepth:{value:null},uReflTex:{value:null},uReflMatrix:{value:new tt},uLayer:{value:fu},uTime:{value:0},uNear:{value:.08},uFar:{value:1200},uReflect:{value:0},uUnder:{value:0},uResolution:{value:new Pe(1,1)},uSunDir:{value:new W(0,1,0)},uSunColor:{value:new W(1,1,1)},uZenith:{value:new W(.2,.36,.72)},uHorizon:{value:new W(.6,.7,.82)},uAmbient:{value:new W(.3,.4,.6)},uSh0:{value:null},uSh1:{value:null},uSh2:{value:null},uGiSize:{value:new W(1,1,1)},uGiTexel:{value:1},uGiLit:{value:0},uDim:{value:1},fogColor:{value:new Ze},fogDensity:{value:.006},uWave:{value:null},uWaveMask:{value:null},uWorldSize:{value:new Pe(1,1)},uWaveTexel:{value:new Pe(1,1)}};shown=new Map;target=new Map;flowShown=new Map;glide=new Map;tracked=new Map;waterScene=new Wi;grade=new ft({uniforms:{inputBuffer:{value:null},uSceneDepth:{value:null},uNear:{value:.08},uFar:{value:1200},uUnder:{value:0},uLight:{value:new W(.3,.4,.6)},uDim:{value:1},uNormal:{value:null},uLayer:{value:fu},uTime:{value:0},uResolution:{value:new Pe(1,1)}},vertexShader:Pw,fragmentShader:Lw,depthTest:!1,depthWrite:!1});refl;mirror=new tn;clip;sim;lastTime=-1;frustum=new mr;hasWater=!1;area=0;static chunksOf(e,t){const i=t.nx-1,s=t.ny-1,r=t.nz-1,a=Math.ceil(i/re),o=Math.ceil(s/re),l=Math.ceil(r/re),c=new Set,h=f=>Math.max(0,Math.floor((f-di)/re)),u=(f,p)=>Math.min(p-1,Math.floor((f+di)/re));for(let f=h(e.x0);f<=u(e.x1,a);f++)for(let p=h(e.y0);p<=u(e.y1,o);p++)for(let m=h(e.z0);m<=u(e.z1,l);m++)c.add(st(f,p,m));return c}static chunksOfCells(e,t,i){const s=t.nx-1,r=t.ny-1,a=t.nz-1,o=Math.ceil(s/re),l=Math.ceil(r/re),c=Math.ceil(a/re),h=t.ny*t.nz,u=t.nz;for(const f of e){const p=Math.floor(f/h),m=Math.floor((f-p*h)/u),v=f-p*h-m*u,g=Math.floor(p/re),d=Math.floor(m/re),x=Math.floor(v/re),M=[g],y=[d],w=[x];p-g*re<di&&g>0?M.push(g-1):g*re+re-p<=di&&g+1<o&&M.push(g+1),m-d*re<di&&d>0?y.push(d-1):d*re+re-m<=di&&d+1<l&&y.push(d+1),v-x*re<di&&x>0?w.push(x-1):x*re+re-v<=di&&x+1<c&&w.push(x+1);for(const E of M)for(const b of y)for(const T of w)i.add(st(E,b,T))}}rebuild(e,t=null,i,s=0,r=0,a=1/0){const o=e.nx-1,l=e.ny-1,c=e.nz-1,h=Math.ceil(o/re),u=Math.ceil(l/re),f=Math.ceil(c/re),p=e.water;if(!t){t=new Set;for(const w of this.chunks.keys())t.add(w);dr.chunksOfCells(Uw(p),e,t)}const m=performance.now(),v=new Set,g=Math.floor(pc(this.level)/re);let d=!1;s<=0&&(this.shown.clear(),this.target.clear(),this.glide.clear(),this.tracked.clear());const x=w=>Math.min(p[w],mt)/mt;let M=0;for(const w of t){if(M>0&&performance.now()-m>a){v.add(w);continue}M++;const E=Math.floor(w/(1024*1024)),b=Math.floor(w/1024)%1024,T=w%1024;if(E>=h||b>=u||T>=f)continue;(b===g||b===g-1)&&(d=!0);const S=E*re,A=b*re,_=T*re,R=Aw(e,S,A,_,re);if(s>0){const U=this.glide.get(w),B=U&&U[1]>0?Math.min(1,Math.max(0,(r-U[0])/U[1])):1,k=this.tracked.get(w),X=new Set;for(const K of R){const oe=x(K),we=this.shown.get(K);we===void 0?this.shown.set(K,k?0:oe):this.shown.set(K,we+((this.target.get(K)??oe)-we)*B),this.target.set(K,oe),X.add(K)}if(k){for(const K of k)if(!X.has(K)){const oe=(this.shown.get(K)??0)*(1-B);oe<.01?(this.shown.delete(K),this.target.delete(K)):(this.shown.set(K,oe),this.target.set(K,0),X.add(K))}}this.tracked.set(w,X),this.glide.set(w,[r,s])}if(i)for(const U of R){const B=Math.max(i[U]/255,(this.flowShown.get(U)??0)*Rw);B>.03?this.flowShown.set(U,B):this.flowShown.delete(U)}const P=Ew(e,S,A,_,re,{shown:s>0?this.shown:void 0,flow:this.flowShown});this.chunkCells.set(w,P.cells);let z=this.chunks.get(w);if(P.indices.length===0){z&&(this.waterScene.remove(z),z.geometry.dispose(),this.chunks.delete(w));continue}const O=new Xt;O.setAttribute("position",new Oe(P.positions,3)),O.setAttribute("normal",new Oe(P.normals,3)),O.setAttribute("aPrev",new Oe(P.prev,3)),O.setAttribute("aShore",new Oe(P.shore,1)),O.setAttribute("aFlow",new Oe(P.flow,1));const L=new Float32Array(P.positions.length/3*2);for(let U=0;U<L.length;U+=2)L[U]=r,L[U+1]=s;O.setAttribute("aGlide",new Oe(L,2)),O.setIndex(new Oe(P.indices,1)),O.computeBoundingBox(),O.boundingBox&&(O.boundingBox.min.y-=.5+C,O.boundingBox.max.y+=.5+C),O.computeBoundingSphere(),z?(z.geometry.dispose(),z.geometry=O):(z=new St(O,this.material),this.waterScene.add(z),this.chunks.set(w,z))}let y=0;for(const w of this.chunkCells.values())y+=w;return this.hasWater=this.chunks.size>0,this.area=y*C*C,(this.held?r-this.maskAt>.5:d)&&(this.maskAt=r,this.sim.setMask(e,this.held??void 0),this.uniforms.uWaveMask.value=this.sim.maskTexture),v}setObstacles(e){this.sim.setObstacles(e)}held=null;maskAt=-1e9;setHeld(e){this.held=e,this.maskAt=-1e9}setRippleGain(e){this.sim.setGain(e)}splash(e,t,i,s){this.sim.splash(e,t,i,s)}setUnderwater(e){this.uniforms.uUnder.value=e?1:0,this.grade.uniforms.uUnder.value=e?1:0}dispose(){}setDepthTexture(e){this.uniforms.uSceneDepth.value=e,this.grade.uniforms.uSceneDepth.value=e}setUnderwaterLight(e,t,i,s){this.grade.uniforms.uLight.value.set(e,t,i),this.grade.uniforms.uDim.value=s,this.uniforms.uDim.value=s}setSize(e,t){this.uniforms.uResolution.value.set(e,t),this.grade.uniforms.uResolution.value.set(e,t),this.refl?.setSize(Math.max(1,Math.floor(e*.5)),Math.max(1,Math.floor(t*.5)))}render(e,t,i){if(!t||!i)return;const s=this.uniforms.uTime.value,r=this.lastTime<0?1/60:Math.min(.1,Math.max(0,s-this.lastTime));this.lastTime=s,this.hasWater&&(this.sim.step(e,r),this.uniforms.uWave.value=this.sim.texture),this.frustum.setFromProjectionMatrix(new tt().multiplyMatrices(this.cam.projectionMatrix,this.cam.matrixWorldInverse));let a=!1;if(this.hasWater)for(const c of this.chunks.values()){const h=c.geometry.boundingBox;if(!h||this.frustum.intersectsBox(h)){a=!0;break}}const o=this.uniforms;if(o.uNear.value=this.cam.near,o.uFar.value=this.cam.far,a&&this.refl&&o.uUnder.value<.5&&this.cam.position.y>this.level){this.setupMirror();const c=e.clippingPlanes,h=e.autoClear;e.clippingPlanes=[this.clip],e.autoClear=!0,e.setRenderTarget(this.refl),e.render(this.worldScene,this.mirror),e.clippingPlanes=c,e.autoClear=h}if(this.grade.uniforms.inputBuffer.value=t.texture,this.grade.uniforms.uTime.value=s,this.grade.uniforms.uNear.value=this.cam.near,this.grade.uniforms.uFar.value=this.cam.far,e.setRenderTarget(i),e.render(this.scene,this.camera),!a)return;o.uSceneColor.value=t.texture;const l=e.autoClear;e.autoClear=!1,e.render(this.waterScene,this.cam),e.autoClear=l}setupMirror(){const e=this.cam,t=this.mirror,i=new W(0,1,0),s=new W(0,this.level,0),r=new W().setFromMatrixPosition(e.matrixWorld),a=r.clone().sub(s);a.reflect(i).negate().add(s);const o=new tt().extractRotation(e.matrixWorld),l=new W(0,0,-1).applyMatrix4(o).add(r),c=s.clone().sub(l);c.reflect(i).negate().add(s),t.position.copy(a),t.up.set(0,1,0).applyMatrix4(o).reflect(i),t.lookAt(c),t.near=e.near,t.far=e.far,t.updateMatrixWorld(),t.projectionMatrix.copy(e.projectionMatrix),this.uniforms.uReflMatrix.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(t.projectionMatrix).multiply(t.matrixWorldInverse)}}const sr=1,du="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",zw="uniform sampler2D tSrc; varying vec2 vUv; void main() { gl_FragColor = texture2D(tSrc, vUv); }",Fw="uniform sampler2D tSrc; varying vec2 vUv; void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).r, 0.0, 0.0, 1.0); }";class Nw extends Yt{constructor(e,t,i){super("IcePass"),this.cam=e,this.world=t,this.uniforms=i,this.needsSwap=!1,this.needsDepthTexture=!0,this.needsDepthBlit=!0,this.copyTarget=new vt(1,1,{type:Rn,depthBuffer:!1}),this.depthTarget=new vt(1,1,{type:on,format:yi,depthBuffer:!1,minFilter:_t,magFilter:_t}),this.quad=new St(new Gn(2,2),this.copyMat),this.copyScene.add(this.quad)}meshes=new Set;copyTarget;depthTarget;copyMat=new ft({uniforms:{tSrc:{value:null}},vertexShader:du,fragmentShader:zw,depthTest:!1,depthWrite:!1});depthMat=new ft({uniforms:{tSrc:{value:null}},vertexShader:du,fragmentShader:Fw,depthTest:!1,depthWrite:!1});copyScene=new Wi;quad;copyCam=new Ls(-1,1,1,-1,0,1);frustum=new mr;pv=new tt;sphere=new Ai;setSize(e,t){this.copyTarget.setSize(e,t),this.depthTarget.setSize(e,t),this.uniforms.uResolution.value.set(e,t)}render(e,t){if(!t||this.meshes.size===0)return;this.pv.multiplyMatrices(this.cam.projectionMatrix,this.cam.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.pv);let i=!1;for(const o of this.meshes){const l=o.geometry.boundingSphere;if(l&&(o.updateWorldMatrix(!0,!1),this.sphere.copy(l).applyMatrix4(o.matrixWorld),this.frustum.intersectsSphere(this.sphere))){i=!0;break}}if(!i)return;this.quad.material=this.copyMat,this.copyMat.uniforms.tSrc.value=t.texture,e.setRenderTarget(this.copyTarget),e.render(this.copyScene,this.copyCam),this.quad.material=this.depthMat,this.depthMat.uniforms.tSrc.value=t.depthTexture,e.setRenderTarget(this.depthTarget),e.render(this.copyScene,this.copyCam);const s=this.uniforms;s.uSceneColor.value=this.copyTarget.texture,s.uSceneDepth.value=this.depthTarget.texture,s.uNear.value=this.cam.near,s.uFar.value=this.cam.far,s.uProjection.value.copy(this.cam.projectionMatrix),s.uResolution.value.set(t.width,t.height);const r=e.autoClear,a=this.cam.layers.mask;e.autoClear=!1,this.cam.layers.set(sr),e.setRenderTarget(t),e.render(this.world,this.cam),this.cam.layers.mask=a,e.autoClear=r}dispose(){this.copyTarget.dispose(),this.depthTarget.dispose(),this.copyMat.dispose(),this.depthMat.dispose()}}const Ow=`
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
  }`,kw=`
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
  }`;class Hw{constructor(e){this.scene=e,this.material=new ft({uniforms:{uTime:{value:0}},vertexShader:Ow,fragmentShader:kw,transparent:!0,depthWrite:!1,blending:ma,side:Qt}),this.geo=new Gn(1,1),this.geo.translate(.5,.5,0)}material;meshes=new Map;geo;set(e,t){const i=this.meshes.get(e);i&&(this.scene.remove(i),i.geometry.dispose(),this.meshes.delete(e));const s=t.length/4;if(s===0)return;const r=new fp;r.index=this.geo.index,r.attributes.position=this.geo.attributes.position,r.attributes.uv=this.geo.attributes.uv,r.instanceCount=s;const a=new Float32Array(s*3),o=new Float32Array(s),l=new Float32Array(s);for(let h=0;h<s;h++)a[h*3]=t[h*4],a[h*3+1]=t[h*4+1],a[h*3+2]=t[h*4+2],l[h]=t[h*4+3],o[h]=((a[h*3]*7.31+a[h*3+2]*3.17+a[h*3+1])%1+1)%1;r.setAttribute("aOffset",new Mi(a,3)),r.setAttribute("aSeed",new Mi(o,1)),r.setAttribute("aKind",new Mi(l,1));const c=new St(r,this.material);c.frustumCulled=!1,c.renderOrder=20,this.scene.add(c),this.meshes.set(e,c)}update(e){this.material.uniforms.uTime.value=e}get count(){let e=0;for(const t of this.meshes.values())e+=t.geometry.instanceCount;return e}}const ia=1,pu=2,ms=8,Gw=`
  uniform float uTime;
  uniform float uFadeAt, uFadeBand;
  attribute float aSeed;
  attribute float aBorn;
  attribute float aDie;
  varying float vSeed;
  varying vec2 vUv2;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;
`;function mu(n,e,t,i){const s=new Aa({color:16777215,roughness:.85,metalness:0,side:Qt,alphaTest:.5}),r={...lw(e),uTime:{value:0},uFadeAt:{value:26},uFadeBand:{value:8}};return s.defines={...Rf(t,i),SC_KIND:n},s.onBeforeCompile=a=>{Object.assign(a.uniforms,r),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
`+Gw).replace("#include <begin_vertex>",`
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
        ${Cf}
        uniform float uTime;
        varying float vSeed;
        varying vec2 vUv2;
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
        ${Df}`).replace("#include <map_fragment>",`
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
        if (any(isnan(gl_FragColor.rgb)) || any(isinf(gl_FragColor.rgb))) gl_FragColor.rgb = vec3(0.0);`)},s.customProgramCacheKey=()=>`splinecraft-scatter-v2-${n}-${t}-${i}`,s.__uniforms=r,s}class Vw{constructor(e,t,i,s,r=1){this.scene=e,this.density=r,this.grassMat=mu(ia,t,i,s),this.leafMat=mu(pu,t,i,s),this.bladeGeo=new Gn(.09,.55,1,3),this.bladeGeo.translate(0,.275,0),this.leafGeo=new Gn(.75,.75)}grassMat;leafMat;bladeGeo;leafGeo;meshes=new Map;born=new Map;retiring=[];time=0;dummy=new Wt;density=1;count=0;set(e,t,i=this.scene,s=this.time){const r=t.length/ms,a=x=>this.density>=1||t[x*ms+6]<this.density,o=x=>Math.round(t[x*ms+6]*16777216)*3+t[x*ms+7],l=new Set;for(let x=0;x<r;x++)a(x)&&l.add(o(x));const c=this.meshes.get(e);if(c){for(const x of c){const M=x.geometry.getAttribute("aDie"),y=M.array,w=x.userData.ids;for(let E=0;E<x.count;E++)y[E]=l.has(w[E])?s-1:s;M.needsUpdate=!0,this.retiring.push({mesh:x,at:s}),this.count-=x.count}this.meshes.delete(e)}const h=this.born.get(e)??new Map,u=new Map;if(r===0)return;let f=0,p=0;for(let x=0;x<r;x++)t[x*ms+7]===ia?f++:p++;const m=(x,M,y,w)=>{if(M===0)return null;const E=y.clone(),b=new ep(E,w,M),T=new Float32Array(M),S=new Float32Array(M),A=new Float32Array(M).fill(1e9),_=new Float64Array(M);let R=0;const P=new W(0,1,0),z=new W,O=new Gi;for(let L=0;L<r;L++){const U=L*ms;if(t[U+7]!==x||!a(L))continue;const B=t[U+6];if(this.dummy.position.set(t[U],t[U+1],t[U+2]),z.set(t[U+3],t[U+4],t[U+5]),x===ia){this.dummy.quaternion.setFromAxisAngle(P,B*Math.PI*2);const K=.7+B*.7;this.dummy.scale.set(K,K,K)}else{O.setFromUnitVectors(new W(0,0,1),z),this.dummy.quaternion.copy(O).multiply(new Gi().setFromAxisAngle(new W(0,0,1),B*Math.PI*2)),this.dummy.position.addScaledVector(z,.12+B*.15);const K=.75+B*.6;this.dummy.scale.set(K,K,K)}this.dummy.updateMatrix(),b.setMatrixAt(R,this.dummy.matrix),T[R]=B;const k=o(L),X=h.get(k)??s;S[R]=X,u.set(k,X),_[R]=k,R++}return b.count=R,b.userData.ids=_,E.setAttribute("aSeed",new Mi(T,1)),E.setAttribute("aBorn",new Mi(S,1)),E.setAttribute("aDie",new Mi(A,1)),b.receiveShadow=!0,b.castShadow=!1,b.frustumCulled=!1,i.add(b),this.count+=R,b},v=[],g=m(ia,f,this.bladeGeo,this.grassMat);g&&v.push(g);const d=m(pu,p,this.leafGeo,this.leafMat);d&&v.push(d),v.length&&this.meshes.set(e,v),u.size?this.born.set(e,u):this.born.delete(e)}setFade(e,t){for(const i of[this.grassMat,this.leafMat]){const s=i.__uniforms;s.uFadeAt.value=e,s.uFadeBand.value=t}}update(e){this.time=e;for(const t of[this.grassMat,this.leafMat])t.__uniforms.uTime.value=e;if(this.retiring.length){const t=[];for(const i of this.retiring)e-i.at>.45?(i.mesh.parent?.remove(i.mesh),i.mesh.geometry.dispose()):t.push(i);this.retiring=t}}setVisible(e){for(const t of this.meshes.values())for(const i of t)i.visible=e}}const Ww=`
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
  }`,Xw=`
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
  }`;class Yw{constructor(e,t){this.scene=e,this.material=new ft({uniforms:{uTime:{value:0},uPixelRatio:{value:t},uNight:{value:0}},vertexShader:Ww,fragmentShader:Xw,transparent:!0,depthWrite:!1,blending:ma})}material;clouds=new Map;count=0;set(e,t,i,s,r){const a=this.clouds.get(e);a&&(this.scene.remove(a),a.geometry.dispose(),this.count-=a.geometry.getAttribute("aOrigin").count,this.clouds.delete(e));const o=14;let l=0;for(let M=0;M<t.length/4;M++)t[M*4+3]<.5&&l++;const c=l*o,h=i.length/s;let u=0;for(let M=0;M<h;M++)i[M*s+6]<r&&u++;const f=c+u;if(f===0)return;const p=new Float32Array(f*3),m=new Float32Array(f),v=new Float32Array(f);let g=0;for(let M=0;M<t.length/4;M++)for(let y=0;y<o&&!(t[M*4+3]>=.5);y++)p[g*3]=t[M*4],p[g*3+1]=t[M*4+1]+.1,p[g*3+2]=t[M*4+2],m[g]=(M*.618+y*.137)%1,v[g]=0,g++;for(let M=0;M<h;M++){const y=M*s;i[y+6]>=r||(p[g*3]=i[y],p[g*3+1]=i[y+1]+.5,p[g*3+2]=i[y+2],m[g]=i[y+6]/r,v[g]=1,g++)}const d=new Xt;d.setAttribute("position",new Oe(new Float32Array(f*3),3)),d.setAttribute("aOrigin",new Oe(p,3)),d.setAttribute("aSeed",new Oe(m,1)),d.setAttribute("aKind",new Oe(v,1));const x=new Xl(d,this.material);x.frustumCulled=!1,x.renderOrder=21,this.scene.add(x),this.clouds.set(e,x),this.count+=f}update(e,t){this.material.uniforms.uTime.value=e,this.material.uniforms.uNight.value=1-t}}const qw=1.1,Qw=`
  uniform float uTime;
  uniform float uPixelRatio;
  attribute vec3 aOrigin;
  attribute float aSeed;
  attribute float aBorn;
  attribute float aSize; // metres of spread, and the sprite's size scales with it
  varying float vAlpha;
  varying float vSeed;
  float h(float x) { return fract(sin(x * 127.1) * 43758.5453); }
  void main() {
    float t = (uTime - aBorn) / ${qw.toFixed(2)};
    vSeed = aSeed;
    if (t < 0.0 || t > 1.0) { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); gl_PointSize = 0.0; vAlpha = 0.0; return; }
    // out along a random direction, fast then slow; a little lift, then a slow settle
    float a = h(aSeed) * 6.2832, e = h(aSeed + 1.0) * 2.0 - 1.0;
    vec3 dir = vec3(cos(a) * sqrt(1.0 - e * e), 0.35 + 0.65 * abs(e), sin(a) * sqrt(1.0 - e * e));
    float ease = 1.0 - pow(1.0 - t, 2.2);
    vec3 p = aOrigin + dir * aSize * (0.6 + 0.8 * h(aSeed + 2.0)) * ease;
    p.y += 0.25 * aSize * t - 0.35 * aSize * t * t;
    vAlpha = smoothstep(0.0, 0.06, t) * pow(1.0 - t, 1.6);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float size = aSize * (0.5 + 0.9 * ease) * (0.8 + 0.4 * h(aSeed + 3.0));
    gl_PointSize = size * uPixelRatio * 420.0 / max(-mv.z, 1.0);
  }`,Kw=`
  precision highp float;
  uniform float uLight;
  varying float vAlpha;
  varying float vSeed;
  float h(float x) { return fract(sin(x * 127.1) * 43758.5453); }
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    if (r > 0.5) discard;
    // a soft lump, its edge ragged by a few lobes so a puff is not a disc
    float lobes = 0.5 + 0.12 * sin(atan(c.y, c.x) * 5.0 + vSeed * 40.0) + 0.06 * sin(atan(c.y, c.x) * 9.0 + vSeed * 70.0);
    float core = smoothstep(lobes, lobes * 0.25, r);
    float a = vAlpha * core * 0.85;
    if (a < 0.01) discard;
    vec3 col = vec3(0.93, 0.95, 1.0) * uLight;
    gl_FragColor = vec4(col, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,gs=4096;class Zw{material;origin=new Float32Array(gs*3);seed=new Float32Array(gs);born=new Float32Array(gs).fill(-1e6);size=new Float32Array(gs);attrs;cursor=0;dirty=!1;constructor(e,t){this.material=new ft({uniforms:{uTime:{value:0},uPixelRatio:{value:t},uLight:{value:1}},vertexShader:Qw,fragmentShader:Kw,transparent:!0,depthWrite:!1,blending:xi});const i=new Xt;i.setAttribute("position",new Oe(new Float32Array(gs*3),3)),this.attrs={origin:new Oe(this.origin,3),seed:new Oe(this.seed,1),born:new Oe(this.born,1),size:new Oe(this.size,1)},i.setAttribute("aOrigin",this.attrs.origin),i.setAttribute("aSeed",this.attrs.seed),i.setAttribute("aBorn",this.attrs.born),i.setAttribute("aSize",this.attrs.size);const s=new Xl(i,this.material);s.frustumCulled=!1,s.renderOrder=22,e.add(s)}emit(e,t,i,s,r,a){for(let o=0;o<s;o++){const l=this.cursor;this.cursor=(this.cursor+1)%gs,this.origin[l*3]=e+(Math.random()-.5)*r*.5,this.origin[l*3+1]=t+(Math.random()-.5)*r*.3,this.origin[l*3+2]=i+(Math.random()-.5)*r*.5,this.seed[l]=Math.random(),this.born[l]=a,this.size[l]=r}this.dirty=!0}update(e,t){if(this.material.uniforms.uTime.value=e,this.material.uniforms.uLight.value=.35+.65*t,this.dirty){this.dirty=!1;for(const i of Object.values(this.attrs))i.needsUpdate=!0}}}const jw=`
  uniform float uTime;
  uniform float uPixelRatio;
  attribute vec3 aOrigin;
  attribute float aSeed;
  attribute float aBorn;
  attribute float aLand;  // world y the point lands at
  attribute float aSize;  // metres across the drop spreads
  varying float vAlpha;
  varying float vSeed;
  float h(float x) { return fract(sin(x * 127.1) * 43758.5453); }
  void main() {
    float t = uTime - aBorn;
    vSeed = aSeed;
    if (t < 0.0) { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); gl_PointSize = 0.0; vAlpha = 0.0; return; }
    // free fall to the terminal speed, then steady
    float g = 9.8, vt = ${Dl.toFixed(1)}, tv = vt / g;
    float fall = t < tv ? 0.5 * g * t * t : 0.5 * g * tv * tv + vt * (t - tv);
    float drop = aOrigin.y - aLand;
    // landed: it hovers just over the ground, spreads and thins over the accumulate window while the mound grows
    float since = max(0.0, (fall - drop) / vt);
    float landed = clamp(since / ${mf.toFixed(2)}, 0.0, 1.0);
    float y = aOrigin.y - min(fall, drop) + 0.3 * (1.0 - landed) * step(drop, fall);
    float a = h(aSeed) * 6.2832, r = aSize * (0.2 + 0.8 * h(aSeed + 1.0)) * min(1.0, 0.3 + fall * 0.5) * (1.0 + 1.5 * landed);
    vec3 p = vec3(aOrigin.x + cos(a) * r, y, aOrigin.z + sin(a) * r);
    // in over a tenth of a second, out as it settles
    vAlpha = smoothstep(0.0, 0.1, t) * (1.0 - landed) * 0.7;
    if (vAlpha < 0.005) { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float size = (0.5 + 0.6 * h(aSeed + 3.0)) * (1.0 + 0.6 * min(1.0, fall * 0.3)) * (1.0 + 0.5 * landed);
    gl_PointSize = size * uPixelRatio * 420.0 / max(-mv.z, 1.0);
  }`,Jw=`
  precision highp float;
  uniform float uLight;
  varying float vAlpha;
  varying float vSeed;
  float h(float x) { return fract(sin(x * 127.1) * 43758.5453); }
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    if (r > 0.5) discard;
    float lobes = 0.5 + 0.12 * sin(atan(c.y, c.x) * 5.0 + vSeed * 40.0) + 0.06 * sin(atan(c.y, c.x) * 9.0 + vSeed * 70.0);
    float core = smoothstep(lobes, lobes * 0.15, r);
    float a = vAlpha * core;
    if (a < 0.01) discard;
    vec3 col = vec3(0.94, 0.96, 1.0) * uLight;
    gl_FragColor = vec4(col, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,Bi=8192;class $w{material;origin=new Float32Array(Bi*3);seed=new Float32Array(Bi);born=new Float32Array(Bi).fill(-1e6);land=new Float32Array(Bi);size=new Float32Array(Bi);attrs;cursor=0;dirty=!1;constructor(e,t){this.material=new ft({uniforms:{uTime:{value:0},uPixelRatio:{value:t},uLight:{value:1}},vertexShader:jw,fragmentShader:Jw,transparent:!0,depthWrite:!1,blending:xi});const i=new Xt;i.setAttribute("position",new Oe(new Float32Array(Bi*3),3)),this.attrs={aOrigin:new Oe(this.origin,3),aSeed:new Oe(this.seed,1),aBorn:new Oe(this.born,1),aLand:new Oe(this.land,1),aSize:new Oe(this.size,1)};for(const[r,a]of Object.entries(this.attrs))i.setAttribute(r,a);const s=new Xl(i,this.material);s.frustumCulled=!1,s.renderOrder=22,e.add(s)}emit(e,t,i,s,r,a,o){for(let l=0;l<r;l++){const c=this.cursor;this.cursor=(this.cursor+1)%Bi,this.origin[c*3]=e+(Math.random()-.5)*a,this.origin[c*3+1]=t+Math.random()*.4,this.origin[c*3+2]=i+(Math.random()-.5)*a,this.seed[c]=Math.random(),this.born[c]=o+Math.random()*.25,this.land[c]=s,this.size[c]=a}this.dirty=!0}update(e,t){if(this.material.uniforms.uTime.value=e,this.material.uniforms.uLight.value=.35+.65*t,this.dirty){this.dirty=!1;for(const i of Object.values(this.attrs))i.needsUpdate=!0}}}class eS extends Ki{constructor(){super("SunStreaksEffect",`
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
      }`,{blendFunction:Qe.NORMAL,uniforms:new Map([["uSun",new _e(new Pe(.5,.5))],["uOn",new _e(0)],["uAspect",new _e(1)]])})}set(e,t,i){this.uniforms.get("uOn").value=e?1:0,this.uniforms.get("uSun").value.copy(t),this.uniforms.get("uAspect").value=i}}const tS=`
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
  }`,nS=`
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
  }`;class iS extends Yt{constructor(e,t,i,s=16){super("VolumetricPass"),this.cam=e,this.sun=t,this.needsDepthTexture=!0,this.needsSwap=!1,this.target=new vt(1,1,{type:Rn,depthBuffer:!1,minFilter:ut,magFilter:ut}),this.mat=new ft({vertexShader:"varying vec2 vUv; void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:tS.replace("  void main() {",nS+`
  void main() {`),uniforms:{depthBuffer:{value:null},shadowMap:{value:null},shadowMatrix:{value:new tt},invProjection:{value:new tt},invView:{value:new tt},cameraPos:{value:new W},uSunDir:i.uSunDir,uSunColor:i.uSkySunColor,uSkyAmbient:{value:new W(.3,.4,.6)},uDaylight:i.uDaylight,uSeaLevel:{value:22},uDensity:{value:.0085},uLocal:{value:.5},uTime:{value:0},uUnder:{value:0},uWave:{value:null},uWorldSize:{value:new Pe(1,1)},uWaveTexel:{value:new Pe(1,1)},uGiSize:i.uGiSize,uSh0:i.uSh0,uSh1:i.uSh1,uSh2:i.uSh2,uSteps:{value:s}},depthTest:!1,depthWrite:!1}),this.fullscreenMaterial=this.mat}target;mat;scale=.5;get uniforms(){return this.mat.uniforms}setDepthTexture(e){this.mat.uniforms.depthBuffer.value=e}setSize(e,t){this.target.setSize(Math.max(1,Math.floor(e*this.scale)),Math.max(1,Math.floor(t*this.scale)))}render(e){const t=this.mat.uniforms;t.shadowMap.value=this.sun.shadow.map?.texture??null,t.shadowMatrix.value.copy(this.sun.shadow.matrix),t.invProjection.value.copy(this.cam.projectionMatrixInverse),t.invView.value.copy(this.cam.matrixWorld),t.cameraPos.value.copy(this.cam.position),t.shadowMap.value&&(e.setRenderTarget(this.target),e.render(this.scene,this.camera))}}class sS extends Ki{constructor(e){super("VolumetricEffect",`
      uniform sampler2D volTex;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 v = texture2D(volTex, uv);
        outputColor = vec4(inputColor.rgb * v.a + v.rgb, inputColor.a);
      }`,{blendFunction:Qe.NORMAL,uniforms:new Map([["volTex",new _e(e.texture)]])})}}const rS=56;class aS{gl;scene=new Wi;camera;sun;ambient;sky;water;flames;scatter;particles;puffs;powder;underLight=new W(.1,.15,.2);skyAmbient=[.3,.4,.6];volumetric=null;textures;giTex;terrain;uniforms;variant="full";shaderError="";onShaderError=null;opts;fog;chunks=new Map;worldCenter;worldRadius;shadowReach=1;streaks=null;sunUv=new Pe;tmpV=new W;shadowCenter=new W;sunDir=new W(0,1,0);triangles=0;underwater=!1;composer=null;volumetricSteps=16;caustics=!0;tweenMax=hw;propagation=null;giDirty=!1;postTier=1;seaLevel;constructor(e,t,i,s,r){this.seaLevel=s,this.opts=r,this.variant=r.variant??"full",this.gl=new Zv({canvas:e,antialias:r.antialias,powerPreference:"high-performance"}),this.gl.toneMapping=ei,this.gl.toneMappingExposure=.9,this.gl.outputColorSpace=dt,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=Cu,this.gl.setPixelRatio(Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.camera=new tn(72,1,.08,1200),this.worldCenter=new W(t.sizeX/2,t.sizeY/2,t.sizeZ/2),this.worldRadius=Math.hypot(t.sizeX,t.sizeY,t.sizeZ)/2,this.fog=new Wl(10466248,.0032),this.scene.fog=this.fog,this.textures=r.textures,this.giTex=new iw(i);const a=ps(this.textures,this.giTex,r.cheapGi,r.giMode,this.variant);this.terrain=a.material,this.uniforms=a.uniforms,this.gl.debug.onShaderError=(c,h,u,f)=>{const p=c.getProgramInfoLog(h)??"",m=c.getShaderInfoLog(f)??"",v=c.getShaderInfoLog(u)??"",g=(m||v||p).split(`
`).find(x=>/error/i.test(x))??(m||v||p).slice(0,160),d=this.gl.info.programs?.length??0;this.shaderError=`shader error (${d} programs): ${g.slice(0,200)}`,console.error("[splinecraft] shader error",{vsLog:v,fsLog:m,log:p}),this.onShaderError?.(this.shaderError),/terrain/.test(this.terrain.name)&&this.variant!=="basic"&&this.stepDownVariant()},this.sun=new hp(16777215,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(r.shadowMapSize,r.shadowMapSize),this.shadowReach=Math.min(rS,this.worldRadius*.85);const o=this.shadowReach,l=this.sun.shadow.camera;if(l.left=-o,l.right=o,l.top=o,l.bottom=-o,l.near=1,l.far=this.worldRadius*4,l.updateProjectionMatrix(),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.04,this.sun.shadow.radius=3,this.sun.target.position.copy(this.worldCenter),this.scene.add(this.sun,this.sun.target),this.ambient=new up(16777215,.02),this.scene.add(this.ambient),this.sun.layers.enable(sr),this.ambient.layers.enable(sr),this.sky=new uw,this.scene.add(this.sky.mesh),this.water=new dr(this.scene,this.camera,s,this.textures.normal,r.reflection,t.sizeX,t.sizeZ,r.reflection?4:2),this.gl.shadowMap.autoUpdate=!1,this.flames=new Hw(this.scene),this.scatter=new Vw(this.scene,this.uniforms,r.cheapGi,r.giMode,r.scatterDensity),this.particles=new Yw(this.scene,Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.puffs=new Zw(this.scene,Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.powder=new $w(this.scene,Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.volumetricSteps=r.volumetricSteps,this.caustics=r.caustics,r.giMode==="sh"){const c=new ow(this.gl,this.giTex,r.giDiv);c.setSources(this.giTex.normalTexture,rc),c.setBoost(zi);const[h,u,f]=c.textures;this.uniforms.uSh0.value=h,this.uniforms.uSh1.value=u,this.uniforms.uSh2.value=f,this.propagation=c;const p=this.water.uniforms;p.uSh0=this.uniforms.uSh0,p.uSh1=this.uniforms.uSh1,p.uSh2=this.uniforms.uSh2,p.uGiSize=this.uniforms.uGiSize,p.uGiTexel=this.uniforms.uGiTexel,this.water.uniforms.uGiLit.value=1}this.setPost(r.post),this.resize()}giUploaded(){this.giDirty=!0}setupIce(e){for(const s of this.iceChunks.values())this.scene.remove(s),this.ice?.meshes.delete(s);this.iceChunks.clear(),this.ice?.dispose(),this.ice=null,this.iceMat?.dispose(),this.iceMat=null,this.iceUniforms=null,this.iceCastDepth?.dispose(),this.iceCastDepth=null,this.iceOnlyDepth?.dispose(),this.iceOnlyDepth=null,this.iceShadowRT?.dispose(),this.iceShadowRT=null;for(const s of this.chunks.values())s.customDepthMaterial=void 0;if(this.uniforms.uIceCaustic.value=0,!e){this.uniforms.uIceMode.value=2;return}this.uniforms.uIceMode.value=0,this.iceCastDepth=uu(!1),this.iceOnlyDepth=uu(!0);for(const s of this.chunks.values())s.customDepthMaterial=this.iceCastDepth;const t=1024;this.iceShadowRT=new vt(t,t,{depthTexture:new Ra(t,t,on),depthBuffer:!0,minFilter:_t,magFilter:_t}),this.uniforms.uIceShadow.value=this.iceShadowRT.depthTexture,this.uniforms.uIceReach.value=this.shadowReach,this.uniforms.uSeaLevel.value=this.seaLevel,this.uniforms.uIceDebug.value=this.opts.iceDebug;const i=ps(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);i.uniforms.uTexLocal.value=0,i.uniforms.uIceMode.value=1,this.opts.iceDebug===7&&(i.material.depthTest=!1),this.opts.iceDebug===9&&(i.material.side=Qt),this.iceMat=i.material,this.iceUniforms=i.uniforms,this.ice=new Nw(this.camera,this.scene,i.uniforms);for(const[s,r]of this.chunks)r.geometry.getAttribute("aMats").array.includes(An)&&this.iceChunks.set(s,this.iceTwin(r.geometry,this.iceMat,this.scene))}iceTwin(e,t,i){const s=new St(e,t);return s.layers.set(sr),s.castShadow=!1,s.receiveShadow=!0,i.add(s),this.ice?.meshes.add(s),s}stepDownVariant(){const e=this.variant==="full"?"lite":"basic";this.variant=e;const t=ps(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,e);for(const s of Object.keys(t.uniforms))t.uniforms[s]=this.uniforms[s];const i=this.terrain;this.terrain=t.material;for(const s of this.chunks.values())s.material=this.terrain;i.dispose(),this.setupIce(this.ice!==null&&e!=="basic"),this.onShaderError?.(`terrain material stepped down to '${e}'`)}describe(){const e=this.gl.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),i=t?String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)):"gpu unknown",s=this.opts;return`${i.slice(0,60)} · ${e.drawingBufferWidth}×${e.drawingBufferHeight} @${this.gl.getPixelRatio().toFixed(2)} · shader ${this.variant} · post ${this.postTier} · vol ${s.volumetricSteps} · refl ${s.reflection?"on":"off"} · gi ${s.giMode}/${s.giDiv}${s.cheapGi?" cheap":""} · shadow ${s.shadowMapSize}${s.antialias?" · aa":""}`}memoryLine(){const e=this.gl.info.memory;let t=0;return this.scene.traverse(()=>t++),`gl ${e.geometries} geometries · ${e.textures} textures · ${this.gl.info.programs?.length??0} programs · ${t} scene objects · ${this.scatter.count} scatter · swap queue ${this.pendingSwap.length} · slides ${this.lastSwap.size}`}setPost(e){this.postTier=e,this.composer?.dispose();const t=new bM(this.gl,{frameBufferType:Rn});t.addPass(new Ef(this.scene,this.camera)),this.setupIce(e>=1&&this.variant!=="basic"),this.ice&&t.addPass(this.ice),t.addPass(this.water);const i=[];if(this.volumetric=null,e>=2&&this.volumetricSteps>0){const s=new iS(this.camera,this.sun,this.uniforms,this.volumetricSteps);s.uniforms.uSeaLevel.value=this.seaLevel,t.addPass(s),i.push(new sS(s.target)),this.volumetric=s,s.uniforms.uUnder.value=this.underwater?1:0}if(e>=2){const s=new nw(this.scene,this.camera),r=s.render.bind(s);s.render=(...a)=>{const o=this.sky.mesh.visible;this.sky.mesh.visible=!1;const l=this.flames.material.visible;this.flames.material.visible=!1;const c=this.particles.material.visible;this.particles.material.visible=!1;const h=this.puffs.material.visible;this.puffs.material.visible=!1;const u=this.powder.material.visible;this.powder.material.visible=!1,r(...a),this.sky.mesh.visible=o,this.flames.material.visible=l,this.particles.material.visible=c,this.puffs.material.visible=h,this.powder.material.visible=u},t.addPass(s),i.push(new Wy(this.camera,s.texture,{samples:12,rings:5,radius:.04,intensity:1.6,luminanceInfluence:.6,resolutionScale:.5,bias:.02,distanceThreshold:.6,distanceFalloff:.1}))}this.streaks=null,e>=1&&(this.streaks=new eS,i.push(this.streaks),i.push(new Ay({luminanceThreshold:.85,luminanceSmoothing:.3,intensity:.55,mipmapBlur:!0,radius:.7})),i.push(new jy({darkness:.32,offset:.28}))),i.push(new Ky({mode:rn.ACES_FILMIC})),t.addPass(new hu(this.camera,...i)),e>=2&&t.addPass(new hu(this.camera,new Uy)),this.composer=t,this.resize()}resize(){const e=window.innerWidth,t=window.innerHeight;this.gl.setSize(e,t,!1),this.composer?.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setSun(e){const t=new W(...e.dir);this.sunDir.copy(t),this.placeSun();const i=Math.max(e.sun[0],e.sun[1],e.sun[2],1e-4);this.sun.color.setRGB(e.sun[0]/i,e.sun[1]/i,e.sun[2]/i),this.sun.intensity=i,this.sun.visible=i>.01;const s=this.uniforms;s.uSunDir.value.copy(t),s.uSkyZenith.value.set(...e.zenith),s.uSkyHorizon.value.set(...e.horizon),s.uSkySunColor.value.set(...e.sun),s.uDaylight.value=e.daylight,this.propagation?.setSky(e.ambient),this.volumetric&&this.volumetric.uniforms.uSkyAmbient.value.set(...e.ambient);const r=this.sky.uniforms;r.uSunDir.value.copy(t),r.uSunColor.value.set(e.sun[0]/3,e.sun[1]/3,e.sun[2]/3),r.uZenith.value.set(...e.zenith),r.uHorizon.value.set(...e.horizon),r.uDaylight.value=e.daylight;const a=this.water.uniforms;a.uSunDir.value.copy(t),a.uSunColor.value.set(...e.sun),a.uZenith.value.set(...e.zenith),a.uHorizon.value.set(...e.horizon),a.uAmbient.value.set(...e.ambient),this.skyAmbient=[e.ambient[0],e.ambient[1],e.ambient[2]],this.ambient.intensity=.015+.02*e.daylight,this.underwater||(this.fog.color.setRGB(e.horizon[0],e.horizon[1],e.horizon[2]),this.fog.density=.0032),this.water.uniforms.fogColor.value.copy(this.fog.color),this.water.uniforms.fogDensity.value=this.fog.density}placeSun(){const e=2*this.shadowReach/this.sun.shadow.mapSize.x,t=this.shadowCenter;t.copy(this.camera.position),t.x=Math.round(t.x/e)*e,t.y=Math.round(t.y/e)*e,t.z=Math.round(t.z/e)*e,this.sun.target.position.copy(t),this.sun.position.copy(t).addScaledVector(this.sunDir,this.worldRadius*2)}setUnderwater(e,t){this.underwater=e,e?(this.fog.color.setRGB(.03*(.3+t.daylight),.12*(.3+t.daylight),.16*(.3+t.daylight)),this.fog.density=.018):(this.fog.color.setRGB(t.horizon[0],t.horizon[1],t.horizon[2]),this.fog.density=.0032),this.water.uniforms.fogColor.value.copy(this.fog.color),this.water.uniforms.fogDensity.value=this.fog.density,this.water.setUnderwater(e),this.volumetric&&(this.volumetric.uniforms.uUnder.value=e?1:0)}time=0;chunkGeometry(e,t,i,s){const r=new Xt;r.setAttribute("position",new Oe(s.positions,3)),r.setAttribute("normal",new Oe(s.normals,3)),r.setAttribute("aMats",new Oe(s.mats,3,!1)),r.setAttribute("aBary",new Oe(s.bary,3)),r.setAttribute("aFace",new Oe(s.face,4)),r.setAttribute("aMorph",new Oe(s.morph,4)),r.setAttribute("aFrom",new Oe(s.from&&s.from.length===s.positions.length?s.from:s.positions,3));const a=re*C;return r.boundingSphere=new Ai(new W((e+.5)*a,(t+.5)*a,(i+.5)*a),a*.9),r}pendingSwap=[];swapPending(){for(;this.pendingSwap.length;){const e=this.pendingSwap[0];let t=this.time-e.at>this.tweenMax+.1;if(!t){t=!0;for(const i of e.items){const s=this.chunks.get(i.key);if(s&&this.time<s.userData.fromT0+s.userData.fromDur){t=!1;break}}}if(!t)return;this.pendingSwap.shift(),this.applyGroup(e.items,e.at)}}applyGroup(e,t){let i=t;for(const r of e){const a=this.lastSwap.get(r.key);a!==void 0&&a<i&&(i=a)}const s=Math.max(0,t-i);for(const r of e){const a=r.key%1024,o=Math.floor(r.key/1024)%1024,l=Math.floor(r.key/(1024*1024));this.applyChunk(l,o,a,r.rm,t,s),r.onShown?.()}}setChunk(e,t,i,s,r){const a=st(e,t,i);if((!(!!s.from&&s.from.length===s.positions.length)||this.tweenMax<=0)&&!this.pendingSwap.some(h=>h.items.some(u=>u.key===a))){this.applyChunk(e,t,i,s,this.time,0),r?.();return}const l=this.pendingSwap[this.pendingSwap.length-1];l&&l.at===this.time?l.items.push({key:a,rm:s,onShown:r}):this.pendingSwap.push({at:this.time,items:[{key:a,rm:s,onShown:r}]})}applyChunk(e,t,i,s,r,a){const o=st(e,t,i);this.flames.set(o,s.emitters),this.scatter.set(o,s.scatter,void 0,this.time),this.particles.set(o,s.emitters,s.scatter,8,.003);const l=this.chunks.get(o);l&&(this.triangles-=l.geometry.getAttribute("position").count/3,this.scene.remove(l),l.geometry.dispose(),this.chunks.delete(o));const c=this.iceChunks.get(o);if(c&&(this.scene.remove(c),this.ice?.meshes.delete(c),this.iceChunks.delete(o)),s.vertexCount===0)return;const h=new St(this.chunkGeometry(e,t,i,s),this.terrain);h.castShadow=!0,h.receiveShadow=!0,this.iceCastDepth&&(h.customDepthMaterial=this.iceCastDepth);const u=!!s.from&&s.from.length===s.positions.length,f=this.lastSwap.get(o)??-1e9,p=u&&this.tweenMax>0?Math.min(this.tweenMax,Math.max(Math.min(cw,this.tweenMax),a>0?a:r-f)):0;if(this.lastSwap.set(o,r),h.userData.fromT0=this.time,h.userData.fromDur=p,h.onBeforeRender=(m,v,g,d,x)=>this.tweenClock(h,x),this.scene.add(h),this.chunks.set(o,h),this.triangles+=s.vertexCount/3,this.ice&&this.iceMat&&s.mats.includes(An)){const m=this.iceTwin(h.geometry,this.iceMat,this.scene);m.userData.fromT0=h.userData.fromT0,m.userData.fromDur=p,m.onBeforeRender=(v,g,d,x,M)=>this.tweenClock(m,M),this.iceChunks.set(o,m)}}lastSwap=new Map;tweenClock(e,t){const i=this.uniforms,s=e.userData.fromT0??-1e9,r=e.userData.fromDur??0;i.uFromT0.value===s&&i.uFromDur.value===r||(i.uFromT0.value=s,i.uFromDur.value=r,t.uniformsNeedUpdate=!0)}fragments=new Map;setFragment(e,t,i,s,r,a){if(this.removeFragment(e),t.vertexCount===0)return;const o=new Xt;o.setAttribute("position",new Oe(t.positions,3)),o.setAttribute("normal",new Oe(t.normals,3)),o.setAttribute("aMats",new Oe(t.mats,3,!1)),o.setAttribute("aBary",new Oe(t.bary,3)),o.setAttribute("aFace",new Oe(t.face,4)),o.setAttribute("aMorph",new Oe(t.morph,4)),o.computeBoundingSphere();const l=ps(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);l.uniforms.uTexLocal.value=1,l.uniforms.uTexOrigin.value.set(a[0],a[1],a[2]);const c=new St(o,l.material);c.castShadow=!0,c.receiveShadow=!0,this.iceCastDepth&&(c.customDepthMaterial=this.iceCastDepth);const h=new gi;h.userData.body=l;const u=new gi;if(u.position.set(-i[0],-i[1],-i[2]),u.add(c),this.ice&&t.mats.includes(An)){l.uniforms.uIceMode.value=0;const f=ps(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);f.uniforms.uTexLocal.value=1,f.uniforms.uTexOrigin.value.set(a[0],a[1],a[2]),f.uniforms.uIceMode.value=1,this.iceUniforms&&(f.uniforms.uSceneColor=this.iceUniforms.uSceneColor,f.uniforms.uSceneDepth=this.iceUniforms.uSceneDepth,f.uniforms.uResolution=this.iceUniforms.uResolution,f.uniforms.uNear=this.iceUniforms.uNear,f.uniforms.uFar=this.iceUniforms.uFar),h.userData.iceBody=f,this.iceTwin(o,f.material,u)}h.add(u),h.position.set(s[0],s[1],s[2]),h.quaternion.set(r[0],r[1],r[2],r[3]),h.userData.emitters=t.emitters,h.userData.inner=u,this.scene.add(h),this.fragments.set(e,h),this.scatter.set(-e,t.scatter,u,this.time),this.placeBodyFlames(e,h)}placeBodyFlames(e,t){const i=t.userData.emitters;if(!i||i.length===0)return;t.updateMatrixWorld(!0);const s=t.userData.inner,r=new Float32Array(i.length),a=new W;for(let o=0;o<i.length;o+=4)a.set(i[o],i[o+1],i[o+2]),s.localToWorld(a),r[o]=a.x,r[o+1]=a.y,r[o+2]=a.z,r[o+3]=i[o+3];this.flames.set(-e,r)}moveFragment(e,t,i){const s=this.fragments.get(e);s&&(s.position.set(t[0],t[1],t[2]),s.quaternion.set(i[0],i[1],i[2],i[3]),this.placeBodyFlames(e,s))}fadeFragment(e,t){const i=this.fragments.get(e);if(!i)return;const s=i.userData.body;s.uniforms.uFade.value=Math.max(0,Math.min(1,t)),s.material.polygonOffset=t<1,s.material.polygonOffsetFactor=-1,s.material.polygonOffsetUnits=-2;const r=i.userData.iceBody;r&&(r.uniforms.uFade.value=s.uniforms.uFade.value)}hasFragment(e){return this.fragments.has(e)}removeFragment(e){const t=this.fragments.get(e);t&&(this.scatter.set(-e,new Float32Array(0)),this.flames.set(-e,new Float32Array(0)),this.scene.remove(t),t.traverse(i=>{i instanceof St&&(i.geometry.dispose(),this.ice?.meshes.delete(i))}),t.userData.body.material.dispose(),t.userData.iceBody?.material.dispose(),this.fragments.delete(e))}get fallingCount(){return this.fragments.size}ice=null;iceMat=null;iceUniforms=null;iceChunks=new Map;iceCastDepth=null;iceOnlyDepth=null;iceShadowRT=null;skins=new Map;animals=new Map;setSkin(e,t,i){const s=new Xt;s.setAttribute("position",new Oe(i.positions,3)),s.setAttribute("normal",new Oe(i.normals,3)),s.setAttribute("aMats",new Oe(i.mats,3,!1)),s.setAttribute("aBary",new Oe(i.bary,3)),s.setAttribute("aFace",new Oe(i.face,4)),s.setAttribute("aMorph",new Oe(i.morph,4)),s.computeBoundingSphere();const r=`${e}:${t}`;this.skins.get(r)?.dispose(),this.skins.set(r,s)}get skinCount(){return this.skins.size}placeAnimal(e,t,i,s,r,a=0){const o=this.skins.get(`${t}:${i}`);if(!o)return;let l=this.animals.get(e);if(!l){const h=ps(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);h.uniforms.uTexLocal.value=1,h.uniforms.uTexOrigin.value.set(0,0,0);const u=new St(o,h.material);u.castShadow=!0,u.receiveShadow=!0,l=new gi,l.add(u),l.userData.body=h,l.userData.mesh=u,this.scene.add(l),this.animals.set(e,l)}const c=l.userData.mesh;c.geometry!==o&&(c.geometry=o),l.position.set(s[0],s[1],s[2]),l.rotation.set(0,r+Math.PI*.5,a,"YZX")}removeAnimal(e){const t=this.animals.get(e);t&&(this.scene.remove(t),t.userData.body.material.dispose(),this.animals.delete(e))}clearAnimals(){for(const e of[...this.animals.keys()])this.removeAnimal(e)}get animalCount(){return this.animals.size}hand=null;handKind=-1;setHandItem(e){this.camera.parent||this.scene.add(this.camera),this.hand&&(this.camera.remove(this.hand),this.hand.traverse(a=>{a instanceof St&&(a.geometry.dispose(),a.material.dispose())}),this.hand=null),this.handKind=-1,this.flames.set(-7,new Float32Array(0));const t=bt[e];if(!t)return;const i=new gi,s=new Ze(t.albedo[0],t.albedo[1],t.albedo[2]),r=t.emissive?new Ze(t.emissive[0],t.emissive[1],t.emissive[2]).multiplyScalar(.03):new Ze(0,0,0);if(t.hard&&t.solid===!1){const a=new St(new Vi(.02,.1,.02),new Aa({color:s,roughness:.8}));a.position.y=-.03,i.add(a),this.handKind=e===Pa?1:0}else{const a=new St(new Vi(.11,.11,.11),new Aa({color:s,emissive:r,roughness:t.roughness??.8,metalness:t.metalness??0,transparent:e===An,opacity:e===An?.55:1}));a.rotation.set(.35,-.6,.1),i.add(a)}i.position.set(.3,-.24,-.52),i.traverse(a=>{a.castShadow=!1,a.receiveShadow=!1,a.frustumCulled=!1}),this.camera.add(i),this.hand=i}handWorld(){if(!this.hand)return null;this.camera.updateMatrixWorld(!0);const e=new W(0,.06,0);return this.hand.localToWorld(e),this.handKind>=0&&this.flames.set(-7,new Float32Array([e.x,e.y,e.z,this.handKind])),e}setCursor(e,t,i,s,r){this.uniforms.uCursor.value.set(e,t,i,s),this.uniforms.uCursorShape.value=r?1:0,r&&this.uniforms.uCursorExt.value.set(r[0],r[1],r[2])}render(e){this.time=e,this.swapPending(),this.uniforms.uTime.value=e,this.water.uniforms.uTime.value=e,this.flames.update(e),this.scatter.update(e),this.particles.update(e,this.uniforms.uDaylight.value),this.puffs.update(e,this.uniforms.uDaylight.value),this.powder.update(e,this.uniforms.uDaylight.value);const t=Math.max(0,this.seaLevel-this.camera.position.y),i=Math.exp(-t*.22);if(this.underLight.set(this.skyAmbient[0]*i,this.skyAmbient[1]*i,this.skyAmbient[2]*i),this.water.setUnderwaterLight(this.underLight.x,this.underLight.y,this.underLight.z,.92*Math.exp(-t*.06)),this.streaks){const s=this.sunDir;this.tmpV.copy(s).multiplyScalar(200).add(this.camera.position).project(this.camera);const r=this.tmpV.z<1;this.sunUv.set(this.tmpV.x*.5+.5,this.tmpV.y*.5+.5);const a=this.underwater&&r&&s.y>-.05&&this.sunUv.x>-.6&&this.sunUv.x<1.6&&this.sunUv.y>-.6&&this.sunUv.y<1.6;this.streaks.set(a,this.sunUv,this.camera.aspect)}if(this.sky.uniforms.uTime.value=e,this.volumetric){const s=this.volumetric.uniforms;s.uTime.value=e,s.uWave.value=this.water.sim.texture,s.uWorldSize.value.copy(this.water.uniforms.uWorldSize.value),s.uWaveTexel.value.copy(this.water.sim.texelSize)}if(this.sky.mesh.position.copy(this.camera.position),this.propagation){this.propagation.inject(e),this.giDirty?(this.giDirty=!1,this.propagation.step(this.propagation.iterations===0?12:2)):this.propagation.step(1);const[s,r,a]=this.propagation.textures;this.uniforms.uSh0.value=s,this.uniforms.uSh1.value=r,this.uniforms.uSh2.value=a}this.placeSun(),this.renderIceShadow(),this.gl.shadowMap.needsUpdate=!0,this.composer?this.composer.render():this.gl.render(this.scene,this.camera)}renderIceShadow(){const e=this.uniforms;if(!this.caustics||!this.ice||!this.iceShadowRT||!this.iceOnlyDepth||this.ice.meshes.size===0||this.sunDir.y<.02){e.uIceCaustic.value=0;return}this.sun.updateMatrixWorld(!0),this.sun.target.updateMatrixWorld(!0),this.sun.shadow.updateMatrices(this.sun);const t=this.sun.shadow.camera,i=t.layers.mask,s=this.scene.overrideMaterial,r=this.gl.autoClear;t.layers.set(sr),this.scene.overrideMaterial=this.iceOnlyDepth,this.gl.autoClear=!0,this.gl.setRenderTarget(this.iceShadowRT),this.gl.clear(!0,!0,!1),this.gl.render(this.scene,t),this.gl.setRenderTarget(null),this.scene.overrideMaterial=s,t.layers.mask=i,this.gl.autoClear=r,e.uIceShadowMatrix.value.copy(this.sun.shadow.matrix),e.uIceCaustic.value=1}get chunkCount(){return this.chunks.size}}class oS{workers=[];idle=[];queue=[];inflight=new Map;nextId=1;constructor(e){for(let t=0;t<e;t++){const i=new Worker(new URL(""+new URL("mesh.worker-CzWWZSMJ.js",import.meta.url).href,import.meta.url),{type:"module"});i.onmessage=s=>{const r=this.inflight.get(i);this.inflight.delete(i),this.idle.push(i),r?.resolve(s.data),this.pump()},i.onerror=s=>console.error("worker error",s),this.workers.push(i),this.idle.push(i)}}get size(){return this.workers.length}get queued(){return this.queue.length+this.inflight.size}submit(e,t){const i={...e,kind:"mesh",id:this.nextId++};return this.enqueue(i,[i.density.buffer,i.material.buffer,i.hard.buffer,i.sub.buffer],t)}gen(e,t,i,s,r){return this.enqueue({kind:"gen",id:this.nextId++,cx:e,cy:t,cz:i,cfg:s},[],r)}skin(e,t,i){return this.enqueue({kind:"skin",id:this.nextId++,animal:e,bucket:t,material:i},[],-3)}frag(e,t,i,s,r,a,o,l){return this.enqueue({kind:"frag",id:this.nextId++,nx:e,ny:t,nz:i,density:s,material:r,hard:a,sub:o,scatter:l},[s.buffer,r.buffer,a.buffer,o.buffer],-2)}textures(e){return this.enqueue({kind:"textures",id:this.nextId++,size:e},[],-1)}enqueue(e,t,i){return new Promise(s=>{this.queue.push({job:e,transfer:t,priority:i,resolve:s}),this.pump()})}reprioritize(e){for(const t of this.queue)t.job.kind==="mesh"&&(t.priority=e(t.job))}home(e){return e.kind!=="mesh"?null:this.workers[((e.cx*4096+e.cy)*4096+e.cz)%this.workers.length]}pump(){let e=!0;for(;e&&this.idle.length&&this.queue.length;){e=!1;for(let t=this.idle.length-1;t>=0;t--){const i=this.idle[t];let s=-1;for(let a=0;a<this.queue.length;a++){const o=this.home(this.queue[a].job);o!==null&&o!==i||(s<0||this.queue[a].priority<this.queue[s].priority)&&(s=a)}if(s<0)continue;const r=this.queue.splice(s,1)[0];this.idle.splice(t,1),this.inflight.set(i,r),i.postMessage(r.job,r.transfer),e=!0}}}}class lS{constructor(e){this.canvas=e,window.addEventListener("keydown",t=>{t.repeat||(this.keys.add(t.code),this.pressed.add(t.code),["Space","Tab","KeyQ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&(this.locked||this.freeMouse)&&t.preventDefault())}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseDown=[!1,!1,!1]}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===e,this.locked||(this.mouseDown=[!1,!1,!1])}),e.addEventListener("mousemove",t=>{if(this.mouseX=t.clientX,this.mouseY=t.clientY,!this.locked)return;this.yaw-=t.movementX*this.sens,this.pitch-=t.movementY*this.sens;const i=Math.PI/2-.01;this.pitch=Math.max(-i,Math.min(i,this.pitch))}),e.addEventListener("mousedown",t=>{!this.locked&&!this.freeMouse||(t.preventDefault(),t.button<3&&(this.mouseDown[t.button]=!0,this.mouseClick[t.button]=!0))}),window.addEventListener("mouseup",t=>{t.button<3&&(this.mouseDown[t.button]=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("wheel",t=>{!this.locked&&!this.freeMouse||(t.preventDefault(),this.wheel+=Math.sign(t.deltaY))},{passive:!1})}keys=new Set;pressed=new Set;yaw=0;pitch=0;wheel=0;mouseDown=[!1,!1,!1];mouseClick=[!1,!1,!1];locked=!1;freeMouse=!1;mouseX=-1;mouseY=-1;sens=.0022;requestLock(){this.canvas.requestPointerLock?.()}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}flush(){this.pressed.clear(),this.mouseClick=[!1,!1,!1],this.wheel=0}}class cS{root;hotbar;slots=[];status;clock;debug;toast;toastTimer=0;overlay;loading;loadingBar;loadingText;lastStatus="";lastDebug="";onNewWorld=null;onResetEdits=null;onLoadWorld=null;onRenameWorld=null;onDeleteWorld=null;onQuality=null;onFoliage=null;onFall=null;onEditMs=null;onAnimals=null;onSand=null;onSnow=null;onTuning=null;onTuningDefaults=null;onResume=null;onSelectSlot=null;onTime=null;onTimeFlow=null;onCopyLink=null;onMenu=null;errorEl=null;timeSliders=[];dragging=!1;constructor(){this.root=document.getElementById("hud"),this.hotbar=document.getElementById("hotbar"),this.status=document.getElementById("status"),this.clock=document.getElementById("clock"),this.debug=document.getElementById("debug"),this.toast=document.getElementById("toast"),this.overlay=document.getElementById("overlay"),this.loading=document.getElementById("loading"),this.loadingBar=document.getElementById("loading-bar"),this.loadingText=document.getElementById("loading-text"),document.getElementById("btn-play").addEventListener("click",()=>this.onResume?.()),document.getElementById("btn-new").addEventListener("click",()=>{const e=document.getElementById("seed-input").value.trim(),t=e===""?Math.floor(Math.random()*1e9):Lf(e),i=document.getElementById("size-select");this.onNewWorld?.(t,i?Number(i.value):8)}),document.getElementById("btn-reset").addEventListener("click",()=>{confirm("Erase every edit in this world? The terrain regenerates from its seed.")&&this.onResetEdits?.()});for(const e of["time-slider","time-slider-menu"]){const t=document.getElementById(e);t&&(this.timeSliders.push(t),t.addEventListener("input",()=>{this.dragging=!0,this.onTime?.(Number(t.value))}),t.addEventListener("change",()=>{this.dragging=!1}))}document.getElementById("time-flow")?.addEventListener("click",()=>this.onTimeFlow?.()),document.getElementById("btn-copy")?.addEventListener("click",()=>this.onCopyLink?.()),document.getElementById("gear")?.addEventListener("click",()=>this.onMenu?.()),this.errorEl=document.getElementById("error-strip"),this.errorEl?.addEventListener("click",()=>{this.errorEl&&(this.errorEl.hidden=!0)}),this.buildTuning(),document.getElementById("btn-defaults")?.addEventListener("click",()=>this.onTuningDefaults?.()),document.getElementById("edit-slider")?.addEventListener("input",e=>{const t=Number(e.target.value);this.setEditLabel(t),this.onEditMs?.(t)}),document.getElementById("fall-select")?.addEventListener("change",e=>{this.onFall?.(Number(e.target.value))}),document.getElementById("animals-select")?.addEventListener("change",e=>{this.onAnimals?.(e.target.value==="1")}),document.getElementById("sand-select")?.addEventListener("change",e=>{this.onSand?.(e.target.value==="1")}),document.getElementById("snow-select")?.addEventListener("change",e=>{this.onSnow?.(e.target.value==="1")}),document.getElementById("foliage-select")?.addEventListener("change",e=>{this.onFoliage?.(Number(e.target.value))}),document.getElementById("quality-select").addEventListener("change",e=>{this.onQuality?.(e.target.value)})}setLoading(e,t){this.loading.hidden=!1,this.loadingBar.style.width=`${Math.round(e*100)}%`,this.loadingText.textContent=t}hideLoading(){this.loading.hidden=!0}buildTuning(){const e=document.getElementById("tuning");if(!e)return;let t="",i=null;for(const s of pa){if(s.group!==t){t=s.group;const l=document.createElement("h4");l.textContent=t,e.appendChild(l),i=document.createElement("div"),i.className="tune",e.appendChild(i)}const r=document.createElement("label");r.textContent=s.label,r.htmlFor=`tune-${s.key}`;const a=document.createElement("input");a.type="range",a.id=`tune-${s.key}`,a.min=String(s.min),a.max=String(s.max),a.step=String(s.step);const o=document.createElement("span");o.className="val",o.id=`tune-${s.key}-val`,a.addEventListener("input",()=>{const l=Number(a.value);o.textContent=this.tuneText(s.key,l),this.onTuning?.(s.key,l)}),i.append(r,a,o)}}tuneText(e,t){const i=pa.find(s=>s.key===e);return e==="caustics"||e==="profile"?t>.5?"on":"off":e==="bubble"&&t<=0?"everything":e==="snowSlab"&&t<=0?"whole":e==="snowImpact"&&t<=1?"none":e==="snowFlight"&&t<=0?"unlimited":e==="snowBodies"||e==="snowLandSlump"||e==="moveCoarse"?t>.5?"on":"off":e==="snowPowder"&&t<=0?"none":`${i.step<1?t.toFixed(2).replace(/\.?0+$/,""):t}${i.unit}`}setTuning(e){for(const t of pa){const i=document.getElementById(`tune-${t.key}`),s=document.getElementById(`tune-${t.key}-val`);i&&(i.value=String(e[t.key])),s&&(s.textContent=this.tuneText(t.key,e[t.key]))}}setEditLabel(e){const t=document.getElementById("edit-label");t&&(t.textContent=`${(e/1e3).toFixed(2)} s`)}showOverlay(e,t,i=1,s=7,r=!0,a=!0,o=140,l=!0){const c=document.getElementById("edit-slider");c&&(c.value=String(o),this.setEditLabel(o));const h=document.getElementById("animals-select");h&&(h.value=r?"1":"0");const u=document.getElementById("sand-select");u&&(u.value=a?"1":"0");const f=document.getElementById("snow-select");f&&(f.value=l?"1":"0");const p=document.getElementById("fall-select");p&&(p.value=String(s),p.value!==String(s)&&(p.value="7")),this.overlay.hidden=!1,this.root.classList.add("dim"),document.getElementById("seed-label").textContent=String(e),document.getElementById("quality-select").value=t;const m=document.getElementById("foliage-select");m&&(m.value=String(i),m.value!==String(i)&&(m.value="1"))}hideOverlay(){this.overlay.hidden=!0,this.root.classList.remove("dim")}renderWorlds(e,t){const i=document.getElementById("worlds");if(!i)return;i.innerHTML="";const s=[...e].sort((r,a)=>r.seed===t?-1:a.seed===t?1:a.updatedAt-r.updatedAt);for(const r of s){const a=document.createElement("div");a.className="world"+(r.seed===t?" current":"");const o=document.createElement("button");o.className="wname",o.textContent=r.name,o.title=r.seed===t?"this world":"load this world",o.addEventListener("click",()=>this.onLoadWorld?.(r.seed));const l=document.createElement("span");l.className="wmeta",l.textContent=`seed ${r.seed} · ${(r.chunks??8)*16} m${r.seed===t?" · playing":r.updatedAt?" · "+uS(r.updatedAt):""}`;const c=document.createElement("button");c.className="wbtn",c.textContent="✎",c.title="rename",c.addEventListener("click",()=>{const u=prompt("World name",r.name);u!==null&&this.onRenameWorld?.(r.seed,u)});const h=document.createElement("button");h.className="wbtn",h.textContent="✕",h.title="delete this world and its edits",h.addEventListener("click",()=>{confirm(`Delete "${r.name}" and every edit in it?`)&&this.onDeleteWorld?.(r.seed)}),a.append(o,l,c,h),i.appendChild(a)}if(!s.length){const r=document.createElement("div");r.className="wmeta",r.textContent="no saved worlds yet",i.appendChild(r)}}get overlayVisible(){return!this.overlay.hidden}buildHotbar(e){this.hotbar.innerHTML="",this.slots=[],dn.forEach((t,i)=>{const s=document.createElement("div");s.className="slot";const r=document.createElement("canvas");r.width=16,r.height=16;const a=r.getContext("2d"),o=a.createImageData(16,16),l=e.swatches[t.id];for(let u=0;u<256;u++)o.data[u*4]=l[u*3],o.data[u*4+1]=l[u*3+1],o.data[u*4+2]=l[u*3+2],o.data[u*4+3]=255;a.putImageData(o,0,0);const c=document.createElement("span");c.className="key",c.textContent=hS[i]??"";const h=document.createElement("span");h.className="name",h.textContent=t.name,s.append(r,c,h),s.addEventListener("pointerdown",u=>{u.preventDefault(),this.onSelectSlot?.(i)}),this.hotbar.appendChild(s),this.slots.push(s)})}setSelected(e){this.slots.forEach((t,i)=>t.classList.toggle("sel",i===e))}setStatus(e){e!==this.lastStatus&&(this.status.textContent=e,this.lastStatus=e)}setClock(e,t){this.clock.textContent=e;const i=document.getElementById("time-label");if(i&&(i.textContent=e),t!==void 0&&!this.dragging)for(const s of this.timeSliders)s.value=t.toFixed(2)}setDebug(e){e!==this.lastDebug&&(this.debug.textContent=e,this.lastDebug=e)}showError(e){this.errorEl&&(this.errorEl.textContent=e,this.errorEl.hidden=!1)}say(e,t=1800){this.toast.textContent=e,this.toast.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toast.classList.remove("show"),t)}}const hS=["1","2","3","4","5","6","7","8","9","0","-","=","[","]","\\"],gu=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","BracketLeft","BracketRight","Backslash"];function Lf(n){if(/^\d+$/.test(n))return Number(n)>>>0;let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function uS(n){const e=(Date.now()-n)/1e3;return e<90?"just now":e<5400?`${Math.round(e/60)} min ago`:e<172800?`${Math.round(e/3600)} h ago`:`${Math.round(e/86400)} d ago`}class fS{constructor(e){if(this.layer=e,this.stickEl=document.getElementById("stick"),this.thumbEl=document.getElementById("stick-thumb"),this.enabled=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,this.wireButtons(),!this.enabled)return;document.body.classList.add("touch"),e.addEventListener("pointerdown",i=>{i.target.closest("button, .slot")||(i.preventDefault(),e.setPointerCapture(i.pointerId),i.clientX<window.innerWidth*.45&&this.stickId<0?(this.stickId=i.pointerId,this.stickOrigin=[i.clientX,i.clientY],this.stickEl.style.left=`${i.clientX-60}px`,this.stickEl.style.top=`${i.clientY-60}px`,this.stickEl.classList.add("active"),this.thumbEl.style.transform="translate(0,0)"):this.lookId<0&&(this.lookId=i.pointerId,this.lookLast=[i.clientX,i.clientY]))}),e.addEventListener("pointermove",i=>{if(i.pointerId===this.stickId){const s=i.clientX-this.stickOrigin[0],r=i.clientY-this.stickOrigin[1],a=50,o=Math.hypot(s,r),l=o>a?a/o:1;this.moveX=s*l/a,this.moveY=-(r*l)/a,this.thumbEl.style.transform=`translate(${s*l}px, ${r*l}px)`}else i.pointerId===this.lookId&&(this.lookDX+=i.clientX-this.lookLast[0],this.lookDY+=i.clientY-this.lookLast[1],this.lookLast=[i.clientX,i.clientY])});const t=i=>{i.pointerId===this.stickId?(this.stickId=-1,this.moveX=0,this.moveY=0,this.stickEl.classList.remove("active")):i.pointerId===this.lookId&&(this.lookId=-1)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t)}enabled=!1;moveX=0;moveY=0;lookDX=0;lookDY=0;jump=!1;dig=!1;add=!1;smooth=!1;paint=!1;duck=!1;duckLit=!1;taps=new Set;stickId=-1;lookId=-1;stickOrigin=[0,0];lookLast=[0,0];stickEl;thumbEl;wireButtons(){const e=(t,i)=>{const s=document.getElementById(t);s.addEventListener("pointerdown",a=>{a.preventDefault(),s.setPointerCapture(a.pointerId),i(!0),s.classList.add("down"),this.taps.add(t)});const r=()=>{i(!1),t==="tb-duck"&&this.duckLit||s.classList.remove("down")};s.addEventListener("pointerup",r),s.addEventListener("pointercancel",r)};e("tb-jump",t=>this.jump=t),e("tb-duck",t=>this.duck=t),e("tb-dig",t=>this.dig=t),e("tb-add",t=>this.add=t),e("tb-smooth",t=>this.smooth=t),e("tb-paint",t=>this.paint=t);for(const t of["tb-fly","tb-size-down","tb-size-up","tb-shape","tb-snap","tb-menu","tb-undo"])document.getElementById(t)?.addEventListener("pointerdown",s=>{s.preventDefault(),this.taps.add(t)})}tapped(e){return this.taps.has(e)}setDuckLit(e){if(e===this.duckLit)return;this.duckLit=e;const t=document.getElementById("tb-duck");t&&!this.duck&&t.classList.toggle("down",e)}get heldOp(){return this.add?"add":this.smooth?"smooth":this.paint?"paint":null}digLabel="dig";setDig(e){if(e===this.digLabel)return;this.digLabel=e;const t=document.getElementById("tb-dig");t&&(t.textContent=e)}setFly(e){const t=document.getElementById("tb-duck");t&&(t.textContent=e?"down":"duck");const i=document.getElementById("tb-jump");i&&(i.textContent=e?"up":"jump");const s=document.getElementById("tb-fly");s&&(s.textContent=e?"walk":"fly")}flush(){this.lookDX=0,this.lookDY=0,this.taps.clear()}}const vu=.08,dS=2e3,pS=50,mS=240;class gS{enabled=!1;summary=null;el=null;phases=[];byName=new Map;t=0;frameStart=0;frameEma=0;frameMax=0;maxSince=0;history=[];long=[];lastDraw=0;begin(e){this.frameStart=e,this.t=e;for(const t of this.phases)t.ms=0}mark(e){const t=performance.now();let i=this.byName.get(e);i||(i={name:e,ms:0,ema:0,max:0},this.byName.set(e,i),this.phases.push(i)),i.ms+=t-this.t,this.t=t}end(e){const t=performance.now(),i=t-this.frameStart;if(t-this.maxSince>dS){this.maxSince=t,this.frameMax=0;for(const s of this.phases)s.max=0}this.frameEma+=(i-this.frameEma)*vu,this.frameMax=Math.max(this.frameMax,i);for(const s of this.phases)s.ema+=(s.ms-s.ema)*vu,s.max=Math.max(s.max,s.ms);if(this.history.push(i),this.history.length>mS&&this.history.shift(),i>pS){let s=this.phases[0];for(const a of this.phases)a.ms>s.ms&&(s=a);const r=e/1e3;this.long.push(`${Math.floor(r/60)}:${(r%60).toFixed(1).padStart(4,"0")}  ${i.toFixed(0)} ms  ${s.name} ${s.ms.toFixed(0)}`),this.long.length>6&&this.long.shift()}if(!this.enabled){this.el&&(this.el.remove(),this.el=null);return}t-this.lastDraw<250||(this.lastDraw=t,this.draw())}draw(){if(!this.el){const a=document.createElement("pre");a.id="profile",a.style.cssText="position:fixed;left:8px;top:84px;margin:0;padding:6px 8px;max-width:min(96vw,760px);font:11px/1.35 ui-monospace,Menlo,Consolas,monospace;color:#fff;background:rgba(0,0,0,.62);border-radius:6px;white-space:pre-wrap;pointer-events:none;z-index:5;text-shadow:0 1px 1px #000;font-variant-numeric:tabular-nums",document.body.appendChild(a),this.el=a}const e=this.history.slice().sort((a,o)=>o-a),t=e.length?e[Math.min(e.length-1,Math.floor(e.length*.01))]:0,i=this.frameEma>0?1e3/this.frameEma:0,s=[];s.push(`frame ${this.frameEma.toFixed(1)} ms avg · ${this.frameMax.toFixed(0)} max/2s · ${i.toFixed(0)} fps · 1% low ${t.toFixed(0)} ms`),s.push(this.phases.map(a=>`${a.name} ${a.ema.toFixed(1)}/${a.max.toFixed(0)}`).join(" · ")),this.summary&&s.push(...this.summary()),this.long.length&&s.push("long frames (ms · phase): "+this.long.join(" | "));const r=s.join(`
`);this.el.textContent!==r&&(this.el.textContent=r)}}const za="splinecraft.v1.";function vS(n){try{const e=localStorage.getItem(za+"world."+n);return e?h1(e):[]}catch{return[]}}function xu(n){try{localStorage.removeItem(za+"world."+n)}catch{}}function Bf(){try{const n=localStorage.getItem(za+"settings");return n?JSON.parse(n):{}}catch{return{}}}function Sn(n){try{localStorage.setItem(za+"settings",JSON.stringify({...Bf(),...n}))}catch{}}const Uf=4096;function Do(n,e,t,i){const s=re+1,r=new Int16Array(s*s*s),a=new Uint8Array(s*s*s),o=new Uint8Array(s*s*s),l=new Uint32Array(s*s*s),c=new Uint8Array(s*s*s);let h=!1,u=!1,f=0;for(let p=0;p<s;p++)for(let m=0;m<s;m++)for(let v=0;v<s;v++,f++){const g=e*re+p,d=t*re+m,x=i*re+v;if(!n.inBounds(g,d,x))continue;const M=n.index(g,d,x);r[f]=Math.round(Math.max(-it,Math.min(it,n.density[M]))*Uf),a[f]=n.material[M],o[f]=n.hard[M],l[f]=n.sub[M],l[f]!==0&&(h=!0),c[f]=n.water[M],c[f]!==0&&(u=!0)}return{cx:e,cy:t,cz:i,n:s,density:r,material:a,hard:o,sub:h?l:null,water:u?c:null}}function Mu(n,e){const t=e.n;let i=0;for(let s=0;s<t;s++)for(let r=0;r<t;r++)for(let a=0;a<t;a++,i++){const o=e.cx*re+s,l=e.cy*re+r,c=e.cz*re+a;if(!n.inBounds(o,l,c))continue;const h=n.index(o,l,c);n.density[h]=e.density[i]/Uf,n.material[h]=e.material[i],n.hard[h]=e.hard[i],n.sub[h]=e.sub?e.sub[i]:0,e.water!==void 0&&(n.water[h]=e.water?e.water[i]:0)}}function qt(n,e,t,i){const s=[],r=o=>Math.max(0,Math.floor((o-1)/re)),a=(o,l)=>Math.min(l-1,Math.floor(o/re));for(let o=r(n.x0);o<=a(n.x1,e);o++)for(let l=r(n.y0);l<=a(n.y1,t);l++)for(let c=r(n.z0);c<=a(n.z1,i);c++)s.push([o,l,c]);return s}const Js=7,$s=8,sa=16,ra=20,$t=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Ro=[1,0,3,2,5,4],vs=4,yu=3e5;class xS{constructor(e){this.field=e,this.N=e.nx*e.ny*e.nz,this.parent=new Uint8Array(this.N*2),this.sx=e.ny*e.nz,this.sy=e.nz}parent;N;sx;sy;xyz(e){const t=this.field,i=e<this.N?e:e-this.N;return[Math.floor(i/this.sx),Math.floor(i/this.sy)%t.ny,i%t.nz]}solid(e){return e<this.N?this.field.density[e]>0:ht(this.field.hard[e-this.N])}isRoot(e){return e>=this.N&&this.field.hard[e-this.N]===Is}cellIn(e,t,i){const s=this.field;return e>=0&&t>=0&&i>=0&&e<s.nx-1&&t<s.ny-1&&i<s.nz-1}cornerIn(e,t,i){const s=this.field;return e>=0&&t>=0&&i>=0&&e<s.nx&&t<s.ny&&i<s.nz}neighbours(e,t){const[i,s,r]=this.xyz(e);if(e<this.N){for(let a=0;a<6;a++){const o=i+$t[a][0],l=s+$t[a][1],c=r+$t[a][2];this.cornerIn(o,l,c)&&t(e+$t[a][0]*this.sx+$t[a][1]*this.sy+$t[a][2],Ro[a]+1)}for(let a=0;a<8;a++){const o=a&1,l=a>>1&1,c=a>>2&1,h=i-o,u=s-l,f=r-c;this.cellIn(h,u,f)&&t(this.N+this.field.index(h,u,f),$s+a)}for(let a=0;a<4;a++){const o=a&1,l=a>>1&1,c=i-o,h=s+1,u=r-l;this.cellIn(c,h,u)&&t(this.N+this.field.index(c,h,u),sa+a)}}else{for(let a=0;a<6;a++){const o=i+$t[a][0],l=s+$t[a][1],c=r+$t[a][2];this.cellIn(o,l,c)&&t(e+$t[a][0]*this.sx+$t[a][1]*this.sy+$t[a][2],Ro[a]+1)}for(let a=0;a<8;a++){const o=a&1,l=a>>1&1,c=a>>2&1;t(this.field.index(i+o,s+l,r+c),$s+a)}if(s>0)for(let a=0;a<4;a++){const o=a&1,l=a>>1&1;t(this.field.index(i+o,s-1,r+l),sa+a)}}}parentOf(e){const t=this.parent[e];if(t===0||t===Js||t===ra)return-1;const[i,s,r]=this.xyz(e);if(t<$s){const h=t-1;return e+$t[h][0]*this.sx+$t[h][1]*this.sy+$t[h][2]}if(t>=sa){const h=t-sa,u=h&1,f=h>>1&1;return e<this.N?this.N+this.field.index(i-u,s+1,r-f):this.field.index(i+u,s-1,r+f)}const a=t-$s,o=a&1,l=a>>1&1,c=a>>2&1;return e<this.N?this.N+this.field.index(i-o,s-l,r-c):this.field.index(i+o,s+l,r+c)}build(){const e=this.field,t=this.parent,i=e.hard;t.fill(0);const s=[];for(let r=0;r<this.N;r++)i[r]===Is&&this.isRoot(this.N+r)&&(t[this.N+r]=Js,s.push(this.N+r));this.grow(s)}grow(e){const t=this.parent;let i=0;for(;i<e.length;){const s=e[i++];this.neighbours(s,(r,a)=>{t[r]===0&&this.solid(r)&&(t[r]=a,e.push(r))}),i>65536&&i*2>e.length&&(e=e.slice(i),i=0)}}afterEdit(e,t=yu){const i=this.field,s=this.parent;let r=0;const a=Math.max(0,e.x0-1),o=Math.max(0,e.y0-1),l=Math.max(0,e.z0-1),c=Math.min(i.nx-1,e.x1+1),h=Math.min(i.ny-1,e.y1+1),u=Math.min(i.nz-1,e.z1+1),f=[],p=[],m=T=>{if(!this.solid(T)){s[T]!==0&&(s[T]=0,f.push(T));return}s[T]===Js&&!this.isRoot(T)?(s[T]=0,f.push(T),p.push(T)):s[T]===0&&p.push(T)};for(let T=a;T<=c;T++)for(let S=o;S<=h;S++)for(let A=l;A<=u;A++){const _=i.index(T,S,A);m(_),this.cellIn(T,S,A)&&m(this.N+_)}const v=[];let g=0;const d=f.slice();for(;g<d.length;){const T=d[g++];this.neighbours(T,S=>{s[S]===0||s[S]===Js||s[S]===ra||!this.solid(S)||this.parentOf(S)!==T||(s[S]=0,v.push(S),d.push(S))})}const x=p.concat(v),M=[];for(const T of x)s[T]===0&&this.solid(T)&&this.isRoot(T)&&(s[T]=Js,M.push(T));for(const T of x)s[T]!==0||!this.solid(T)||this.neighbours(T,(S,A)=>{s[T]!==0||!this.solid(S)||s[S]===0||(s[T]=this.reverse(T,S,A),M.push(T))});this.grow(M);const y=[];let w=null;const E=new Set,b=T=>{const{corners:S,cells:A}=this.component(T,E);let _=1/0,R=1/0,P=1/0,z=-1/0,O=-1/0,L=-1/0;for(const[B,k,X]of S)_=Math.min(_,B),R=Math.min(R,k),P=Math.min(P,X),z=Math.max(z,B),O=Math.max(O,k),L=Math.max(L,X);for(const[B,k,X]of A)_=Math.min(_,B),R=Math.min(R,k),P=Math.min(P,X),z=Math.max(z,B+1),O=Math.max(O,k+1),L=Math.max(L,X+1);const U={x0:Math.max(0,_-1),y0:Math.max(0,R-1),z0:Math.max(0,P-1),x1:Math.min(i.nx-1,z+1),y1:Math.min(i.ny-1,O+1),z1:Math.min(i.nz-1,L+1)};if(w=w?{x0:Math.min(w.x0,U.x0),y0:Math.min(w.y0,U.y0),z0:Math.min(w.z0,U.z0),x1:Math.max(w.x1,U.x1),y1:Math.max(w.y1,U.y1),z1:Math.max(w.z1,U.z1)}:U,A.length===0&&S.length<=da){for(const[B,k,X]of S)i.density[i.index(B,k,X)]=-it;return}if(S.length+A.length>t){this.hold(S,A),r++;return}y.push(ba(i,S,A,_-1,R-1,P-1,z-_+3,O-R+3,L-P+3))};for(const T of x)s[T]===0&&this.solid(T)&&!E.has(T)&&b(T);if(w){const T=w,S=Math.max(0,T.x0-vs),A=Math.max(0,T.y0-vs),_=Math.max(0,T.z0-vs),R=Math.min(i.nx-1,T.x1+vs),P=Math.min(i.ny-1,T.y1+vs),z=Math.min(i.nz-1,T.z1+vs);for(let O=S;O<=R;O++)for(let L=A;L<=P;L++)for(let U=_;U<=z;U++){const B=i.index(O,L,U);s[B]===0&&this.solid(B)&&!E.has(B)&&b(B);const k=this.N+B;this.cellIn(O,L,U)&&s[k]===0&&this.solid(k)&&!E.has(k)&&b(k)}}return{fragments:y,changed:w,held:r}}hold(e,t){const i=this.field,s=this.parent;for(const[r,a,o]of e)s[i.index(r,a,o)]=ra;for(const[r,a,o]of t)s[this.N+i.index(r,a,o)]=ra}reverse(e,t,i){return i<$s?Ro[i-1]+1:i}component(e,t){const i=this.parent,s=[],r=[],a=[e];for(t.add(e);a.length;){const o=a.pop();(o<this.N?s:r).push(this.xyz(o)),this.neighbours(o,l=>{i[l]!==0||!this.solid(l)||t.has(l)||(t.add(l),a.push(l))})}return{corners:s,cells:r}}dropLoose(e=yu){const t=this.field,i=this.parent,s=new Set,r=[];let a=null,o=0;for(let l=0;l<this.N*2;l++){if(i[l]!==0||!this.solid(l)||s.has(l))continue;const{corners:c,cells:h}=this.component(l,s);if(h.length===0&&c.length<=da){for(const[x,M,y]of c)t.density[t.index(x,M,y)]=-it;continue}if(c.length+h.length>e){this.hold(c,h),o++;continue}let u=1/0,f=1/0,p=1/0,m=-1/0,v=-1/0,g=-1/0;for(const[x,M,y]of c)u=Math.min(u,x),f=Math.min(f,M),p=Math.min(p,y),m=Math.max(m,x),v=Math.max(v,M),g=Math.max(g,y);for(const[x,M,y]of h)u=Math.min(u,x),f=Math.min(f,M),p=Math.min(p,y),m=Math.max(m,x+1),v=Math.max(v,M+1),g=Math.max(g,y+1);const d={x0:Math.max(0,u-1),y0:Math.max(0,f-1),z0:Math.max(0,p-1),x1:Math.min(t.nx-1,m+1),y1:Math.min(t.ny-1,v+1),z1:Math.min(t.nz-1,g+1)};a=a?{x0:Math.min(a.x0,d.x0),y0:Math.min(a.y0,d.y0),z0:Math.min(a.z0,d.z0),x1:Math.max(a.x1,d.x1),y1:Math.max(a.y1,d.y1),z1:Math.max(a.z1,d.z1)}:d,r.push(ba(t,c,h,u-1,f-1,p-1,m-u+3,v-f+3,g-p+3))}return{fragments:r,changed:a,held:o}}pruneSpecks(){const e=this.field,t=e.density,i=this.parent,s=new Set;let r=0;for(let a=0;a<this.N;a++){if(t[a]<=0||i[a]!==0||s.has(a))continue;const{corners:o,cells:l}=this.component(a,s);if(!(l.length||o.length>da)){for(const[c,h,u]of o)t[e.index(c,h,u)]=-it;r+=o.length}}return r}countUnsupported(){const e=this.parent;let t=0;for(let i=0;i<this.N*2;i++)e[i]===0&&this.solid(i)&&t++;return t}}const MS=600;class mc{cfg;field;gi;renderer;pool;bootLog="";world;input;touch;hud;body;edits;quality;time;timeRate=1/90;timePaused=!1;sun;brush={shape:"cube",sizeIndex:2,op:"add",matIndex:0,snap:!0};chunks=new Map;lightDirty=new Set;lastHashState="";lightRR=0;sweepSun=null;sweepDone=!1;giDirty=!1;lastGiUpload=0;lastLod=0;lastEdit=0;saveTimer=0;dirtySlabs=new Set;undoStack=[];fps=0;frames=0;fpsT=0;lastFrame=0;lastHash=0;anims=[];profiler=new gS;animalsParked=0;bubbleNow(){const e=this.tuning.bubble;if(e<=0)return null;const t=this.body.pos;return{x:t[0]/C,y:t[1]/C,z:t[2]/C,r:e/C}}waterKeys=new Set;waterLeft=new Set;waterAll=!1;lastWaterBuild=0;markWater(e){if(!e)this.waterAll=!0;else for(const t of dr.chunksOf(e,this.field))this.waterKeys.add(t)}markWaterCells(e){dr.chunksOfCells(e,this.field,this.waterKeys)}flow;sea;flowClock=0;handEmpty=!1;crouch=!1;crouchLatch=!1;eye=vi;foliage=1;falling=[];fallSpeed=7;slosh=0;editMs=Su;lights=new Map;support;nextFragId=1;opts;lightSweeps=0;ready=!1;hit=null;hitBody=null;pickTarget=null;primeAim=!1;animals=[];regrowth=null;sand;sandOn=!0;sandClock=0;snow;snowOn=!0;snowClock=0;snowLoose;snowSlump;snowSlumpClock=0;powder;powderSeconds=0;tuning={...nr};packClock=0;moved;movedBox=null;snowSeconds=0;playSeconds=0;animalsOn=!0;animalRng=wl(1);nextAnimalId=1;animalsDirty=!1;lastAnimalSave=0;constructor(e,t,i,s,r,a,o,l,c){this.pool=o,this.world=c,this.opts=t,this.cfg=s,this.field=i,this.edits=r,this.hud=a,this.quality=t.quality,this.foliage=t.foliage??(this.touchEnabledGuess()?.5:1),this.fallSpeed=t.fall??7,this.editMs=Math.max(60,Math.min(2e3,t.edit??Su)),this.time=t.time??10.5,this.sun=bh(this.time),this.gi=new a1(i),this.support=new xS(i),this.touch=new fS(document.getElementById("touch"));const h=this.touch.enabled||/Mobi|Android/i.test(navigator.userAgent);this.renderer=new aS(e,i,this.gi,s.seaLevel,{textures:l,shadowMapSize:t.test||h?2048:4096,antialias:!t.test,cheapGi:t.cheapGi??h,maxPixelRatio:h?1.5:2,post:t.post??(t.quality==="low"?1:2),giMode:t.giMode??"sh",giDiv:t.giDiv??(h?2:1),scatterDensity:1,volumetricSteps:t.volumetric===!1||t.quality==="low"?0:h?8:16,caustics:t.caustic!==!1,iceDebug:t.iceDebug??0,reflection:!h,variant:t.shader}),this.renderer.onShaderError=m=>this.hud.showError(m),this.profiler.summary=()=>this.profileLines(),window.addEventListener("error",m=>this.hud.showError("error: "+(m.message??"").slice(0,160))),window.addEventListener("unhandledrejection",m=>this.hud.showError("rejection: "+String(m.reason).slice(0,160))),this.input=new lS(e);const u=i.sizeX/2,f=i.sizeZ/2;if(this.body=hf(u,Ps(i,u,f)+.2,f),this.input.yaw=Math.PI*.25,this.touch.setFly(!1),t.view&&t.view.length>=5){const m=t.view;this.body.pos[0]=m[0],this.body.pos[1]=m[1],this.body.pos[2]=m[2],this.input.yaw=m[3],this.input.pitch=m[4],m.length>=6&&(this.time=m[5],this.timePaused=!0),this.body.fly=!0}for(let m=0;m<s.chunksX;m++)for(let v=0;v<s.chunksY;v++)for(let g=0;g<s.chunksZ;g++)this.chunks.set(st(m,v,g),{level:-1,wanted:0,inflight:!1,dirty:!1,triangles:0,version:0,shown:0,scatter:0,wantedScatter:0,nextBatch:null});this.hud.buildHotbar(this.renderer.textures),this.renderer.scatter.setFade(Ta-re*C*.9,8),this.hud.setSelected(0),this.hud.onFall=m=>{this.fallSpeed=m,Sn({fall:m}),this.hud.say(`fall speed ${m} m/s`)},this.hud.onEditMs=m=>{this.editMs=Math.max(60,Math.min(2e3,m)),Sn({edit:this.editMs})},this.hud.onFoliage=m=>{this.foliage=m,Sn({foliage:m}),this.updateLod(!1),this.hud.say(`foliage ×${m}`)},this.animalsOn=t.animals??!0,this.sandOn=t.sand??!0,this.sand=new Ih(i,s.seaLevel),this.snowOn=t.snow??!0,this.snowLoose=new Uint8Array(i.density.length),this.tuning=Px(t.tuning);const p=this.tuning;this.snow=new bx(i,this.snowLoose,{reach:Math.max(1,Math.round(p.snowReach/C)),creep:p.snowCreep,calve:Math.round(p.snowCalve/C),slab:Math.round(p.snowSlab/C),flight:Math.round(p.snowFlight)}),this.moved=new Int8Array(i.density.length),this.snowSlump=new Ih(i,s.seaLevel,{material:gn,repose:p.snowRepose,rate:p.snowSlumpRate,loose:this.snowLoose,moved:this.moved,impact:p.snowImpact}),this.powder=new Ix(i,this.snowSlump),this.snow.opts.bodies=p.snowBodies>.5,this.snow.opts.powder=p.snowPowder,this.sand.opts.repose=p.sandRepose,this.sand.opts.rate=p.sandRate,window.addEventListener("pagehide",()=>this.flushNow()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&this.flushNow()}),this.hud.onAnimals=m=>{this.animalsOn=m,Sn({animals:m}),m||this.renderer.clearAnimals(),this.hud.say(m?"animals on":"animals off")},this.hud.onSand=m=>{this.sandOn=m,Sn({sand:m}),m||this.sand.clear(),this.hud.say(m?"sand slumps":"sand holds")},this.hud.onTuning=(m,v)=>{this.tuning[m]=v,this.applyTuning(),Sn({tuning:this.tuningDiff()})},this.hud.onTuningDefaults=()=>{this.tuning={...nr},this.applyTuning(),this.hud.setTuning(this.tuning),Sn({tuning:{}}),this.hud.say("advanced settings back to defaults")},this.applyTuning(),this.hud.onSnow=m=>{this.snowOn=m,Sn({snow:m}),m||(this.snow.clear(),this.snowSlump.clear(),this.powder.clear()),this.hud.say(m?"snow breaks":"snow holds")},this.hud.onQuality=m=>{this.quality=m,Sn({quality:m}),this.lastLod=0,this.renderer.setPost(m==="low"?1:2)},this.hud.onResetEdits=()=>{xu(this.cfg.seed),iu(this.cfg.seed).then(()=>location.reload())},this.hud.onNewWorld=(m,v)=>{Sn({seed:m}),location.href=location.pathname+"?seed="+m+(v?"&chunks="+v:"")},this.hud.onLoadWorld=m=>{if(m===this.cfg.seed){this.resume();return}Sn({seed:m}),location.href=location.pathname+"?seed="+m},this.hud.onRenameWorld=(m,v)=>{dM(m,v).then(()=>this.refreshWorlds()),m===this.cfg.seed&&this.world&&(this.world.name=v)},this.hud.onDeleteWorld=m=>{if(m===this.cfg.seed){this.hud.onResetEdits?.();return}iu(m).then(()=>this.refreshWorlds())},this.hud.onResume=()=>this.resume(),this.hud.onMenu=()=>{document.pointerLockElement&&document.exitPointerLock(),this.showMenu()},this.hud.onCopyLink=()=>{const m=this.shareLink();navigator.clipboard?.writeText(m).then(()=>this.hud.say("link copied"),()=>this.hud.say(m,6e3))},this.hud.onTime=m=>{this.time=m,this.timePaused=!0},this.hud.onTimeFlow=()=>{this.timePaused=!this.timePaused,this.hud.say(this.timePaused?"time paused":"time flowing")},this.hud.onSelectSlot=m=>this.selectSlot(m),this.renderer.setHandItem(dn[0].id),e.addEventListener("click",()=>{!this.hud.overlayVisible&&!this.input.freeMouse&&this.input.requestLock()}),document.addEventListener("pointerlockchange",()=>{!this.input.locked&&!t.test&&!this.touch.enabled&&!this.input.freeMouse&&this.showMenu()}),window.addEventListener("resize",()=>this.renderer.resize())}touchEnabledGuess(){return"ontouchstart"in window||/Mobi|Android/i.test(navigator.userAgent)}static async create(e,t,i){const s=t.chunks??wh.chunksX,r={...wh,seed:t.seed,chunksX:s,chunksZ:s},a=new oS(t.test?2:Math.max(1,Math.min(6,(navigator.hardwareConcurrency||4)-1))),o=performance.now(),l=[],c=T=>l.push(`${T} ${(performance.now()-o).toFixed(0)}`);i.setLoading(.02,"shaping terrain");const h=a.textures(bw),u=fM(r.seed,s),f=cM(r.seed),p=new Ba(r.chunksX*re+1,r.chunksY*re+1,r.chunksZ*re+1),m=r.chunksX*r.chunksY*r.chunksZ;let v=0;const g=re+1,d=[];for(let T=0;T<r.chunksX;T++)for(let S=0;S<r.chunksY;S++)for(let A=0;A<r.chunksZ;A++)d.push(a.gen(T,S,A,r,S*8+Math.abs(T-r.chunksX/2)+Math.abs(A-r.chunksZ/2)).then(_=>{for(let R=0;R<g;R++)for(let P=0;P<g;P++){const z=(R*g+P)*g,O=p.index(T*re+R,S*re+P,A*re);p.density.set(_.density.subarray(z,z+g),O),p.material.set(_.material.subarray(z,z+g),O)}v++,((v&7)===0||v===m)&&i.setLoading(.02+.28*(v/m),`shaping terrain · ${v} / ${m}`)}));await Promise.all(d),c("terrain"),i.setLoading(.3,"planting trees"),await pi(),new Ah(r).plantTrees(p),c("trees"),If(p,r.seaLevel),c("water");const x=Tw(await h),M=await u;c("textures"),i.setLoading(.35,"loading your world"),await pi();const y=await f;for(const T of y)Mu(p,T);D1(p),i1(p);const w=pw(p,r.seaLevel);for(const T of y)if(T.water===void 0)for(let S=T.cx*re;S<T.cx*re+re;S++)for(let A=T.cy*re;A<T.cy*re+re;A++)for(let _=T.cz*re;_<T.cz*re+re;_++){const R=p.index(S,A,_);w[R]&&(p.water[R]=mt)}for(let T=0;T<p.water.length;T++)p.water[T]===1&&(p.water[T]=mt);const E=[];if(y.length===0){const T=vS(r.seed);if(T.length){i.setLoading(.4,`converting ${T.length} old edits`),await pi();const S=new Set;for(let _=0;_<T.length;_++){const R=Ms(p,T[_]);for(const[P,z,O]of qt(R,r.chunksX,r.chunksY,r.chunksZ))S.add(st(P,z,O));(_&31)===31&&(i.setLoading(.4+.05*(_/T.length),`converting ${_+1} / ${T.length} old edits`),await pi())}const A=[];for(const _ of S){const[R,P,z]=er(_);A.push(Do(p,R,P,z))}await nu(r.seed,A),xu(r.seed)}}i.setLoading(.45,"painting materials"),await pi(),c("slabs");const b=new mc(e,t,p,r,E,i,a,x,M);b.renderer.water.rebuild(p),b.seedAnimals(),b.resumeBodies(),b.regrowth=new nM(new Ah(r),p.sizeX,p.sizeZ),b.sea=w,b.flow=new xw(p,r.seaLevel,w),b.renderer.water.setHeld(w);for(const[T,S,A]of M?.sources??[])p.inBounds(T,S,A)&&b.flow.addSource(T,S,A,b.pourLevels());try{navigator.storage?.persist?.()}catch{}return c("renderer"),i.setLoading(.6,"finding what stands on what"),await pi(),b.support.build(),b.settleLoose(),c("support"),i.setLoading(.7,"lighting the world"),await pi(),b.injectAll(),b.renderer.giTex.upload(),b.renderer.giUploaded(),b.renderer.setSun(b.sun),c("light"),i.setLoading(.8,"meshing chunks"),await pi(),b.updateLod(!0),c("lod"),b.bootLog=l.join(" · "),b}resume(){this.hud.hideOverlay(),!this.opts.test&&!this.touch.enabled&&this.input.requestLock()}showMenu(){this.hud.showOverlay(this.cfg.seed,this.quality,this.foliage,this.fallSpeed,this.animalsOn,this.sandOn,this.editMs,this.snowOn),this.hud.setTuning(this.tuning),this.refreshWorlds()}async refreshWorlds(){const e=await hM();this.world&&!e.some(t=>t.id===this.world.id)&&e.unshift(this.world),this.hud.renderWorlds(e,this.cfg.seed)}sandKeys=[];slumpKeys=[];moving=new Map;markMoving(e){if(this.tuning.moveCoarse<.5)return;const t=this.lastNow+wS;for(const i of e){this.moving.set(i,t);const s=this.chunks.get(i);s&&(s.wanted=0)}}sandStepAt=0;sandTurn=0;slumpStepAt=0;slumpTurn=0;paced(e,t,i){return e>=Math.max(1/t,i*SS)}passesDue(e,t){return Math.max(1,Math.min(ES,Math.round(e*t)))}meshesLanded(e){return e.every(t=>!this.chunks.get(t)?.inflight)}stepSand(e){if(this.why="sand",!this.sandOn||!this.sand.pending&&!this.sand.parked){this.sandTurn=0;return}if(this.sandClock+=Math.min(e,.1),!this.meshesLanded(this.sandKeys))return;if(this.sandStepAt){const o=(this.lastNow-this.sandStepAt)/1e3;this.sandTurn=this.sandTurn?this.sandTurn*.7+o*.3:o,this.sandStepAt=0}if(!this.paced(this.sandClock,this.tuning.sandHz,this.sandTurn))return;const t=this.passesDue(this.sandClock,this.tuning.sandHz);this.sandClock=0,this.sandStepAt=this.lastNow;let i=null;for(let o=0;o<t&&this.sand.pending;o++){const l=this.sand.step(this.bubbleNow());l&&(i=i?Bt(i,l):l)}if(!i)return;const s=this.support.afterEdit(i);for(const o of s.fragments)this.launch(o);const r=s.changed?Bt(i,s.changed):i;this.markMoving(Zn(r,re,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([o,l,c])=>st(o,l,c)));const a=this.refresh(r,!0);this.sandKeys=Zn(a,re,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([o,l,c])=>st(o,l,c));for(const[o,l,c]of qt(a,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(o,l,c));this.scheduleSave()}lastBuildAt=-1e9;stepSnow(e){if(!this.snowOn||!this.snow.pending&&!this.snow.parked||this.lastNow-this.lastBuildAt<_S)return;const t=Math.min(e,.1);if(this.snowClock+=t,this.snowSeconds+=t,this.packClock+=t,this.packClock>=60&&(this.packClock=0,Tx(this.snowLoose,this.tuning.snowPack)),this.snowClock<gx)return;this.snowClock=0;const i=this.snow.opts.bodies??!0?this.falling.filter(s=>s.frag.snow&&!s.blend&&!s.cooking).length:this.snowSlump.pending?this.slumpKeys.length:0;this.afterSnow(this.snow.step(this.snowSeconds,this.bubbleNow(),i))}stepPowder(e){if(this.why="powder",this.powderSeconds+=Math.min(e,.1),!this.powder.pending)return;const t=this.powder.step(this.powderSeconds);if(!t)return;const i=this.support.afterEdit(t);for(const a of i.fragments)this.launch(a);this.snowOn&&this.snow.wake(t);const s=this.refresh(i.changed?Bt(t,i.changed):t,!0);for(const[a,o,l]of qt(s,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(a,o,l));this.scheduleSave();const r=this.renderer.time;for(let a=0;a<3;a++)this.renderer.puffs.emit((t.x0+Math.random()*(t.x1-t.x0))*C,(t.y1+.5)*C,(t.z0+Math.random()*(t.z1-t.z0))*C,3,.8,r)}afterSnow(e){if(this.why="cut",!e.changed)return;const t=e.bodies.map(i=>this.launch(i));if(e.powder.length){const i=this.renderer.time;for(const s of this.powder.add(e.powder,this.powderSeconds))this.renderer.powder.emit((s.x+.5)*C,s.y*C,(s.z+.5)*C,(s.land+.5)*C,Math.min(24,2+s.corners*2),.9,i)}if(e.bodies.length||e.powder.length){const i=this.support.afterEdit(e.changed);for(const r of i.fragments)t.push(this.launch(r));const s=i.changed?Bt(e.changed,i.changed):e.changed;Promise.all(t).then(()=>{this.why="cut";const r=this.refresh(s,!0,!1);for(const[a,o,l]of qt(r,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(a,o,l));this.scheduleSave()})}if((this.snow.opts.bodies??!0)||this.snowSlump.wake(e.changed),e.loosened>0){const i=e.changed,s=this.renderer.time,r=Math.min(24,2+Math.floor(e.loosened/4));for(let a=0;a<r;a++)this.renderer.puffs.emit((i.x0+Math.random()*(i.x1-i.x0))*C,(i.y0+Math.random()*(i.y1-i.y0))*C,(i.z0+Math.random()*(i.z1-i.z0))*C,5,1.4,s)}}waterSlice(e,t,i,s){const r=this.field,a=new Uint8Array(s*s*s);let o=!1;for(let l=Math.max(0,e);l<Math.min(r.nx-1,e+s);l++)for(let c=Math.max(0,t);c<Math.min(r.ny-1,t+s);c++)for(let h=Math.max(0,i);h<Math.min(r.nz-1,i+s);h++)r.water[r.index(l,c,h)]&&(a[((l-e)*s+(c-t))*s+(h-i)]=1,o=!0);return o?a:void 0}wetBox=null;lastWetMesh=0;wetChanged(e){this.wetBox=this.wetBox?Bt(this.wetBox,e):e}flushWet(e,t){if(!this.wetBox||!t&&e-this.lastWetMesh<2500)return;const i=this.wetBox;this.wetBox=null,this.lastWetMesh=e,this.batched(()=>{for(const[s,r,a]of Zn(i,re,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.requestMesh(s,r,a)})}movedSlice(e,t,i,s){const r=this.movedBox;if(!r||e>r.x1||t>r.y1||i>r.z1||e+s<=r.x0||t+s<=r.y0||i+s<=r.z0)return;const a=this.field,o=new Int8Array(s*s*s);let l=!1;for(let c=Math.max(0,e);c<Math.min(a.nx,e+s);c++)for(let h=Math.max(0,t);h<Math.min(a.ny,t+s);h++)for(let u=Math.max(0,i);u<Math.min(a.nz,i+s);u++){const f=this.moved[a.index(c,h,u)];f&&(o[((c-e)*s+(h-t))*s+(u-i)]=f,l=!0)}return l?o:void 0}stepSnowSlump(e){if(!this.snowOn||!this.snowSlump.pending&&!this.snowSlump.parked){this.slumpTurn=0;return}if(this.snowSlumpClock+=Math.min(e,.1),!this.meshesLanded(this.slumpKeys))return;if(this.slumpStepAt){const r=(this.lastNow-this.slumpStepAt)/1e3;this.slumpTurn=this.slumpTurn?this.slumpTurn*.7+r*.3:r,this.slumpStepAt=0}if(!this.paced(this.snowSlumpClock,this.tuning.snowSlumpHz,this.slumpTurn))return;const t=this.passesDue(this.snowSlumpClock,this.tuning.snowSlumpHz);this.snowSlumpClock=0,this.slumpStepAt=this.lastNow;let i=null;const s=[];for(let r=0;r<t&&this.snowSlump.pending;r++){const a=this.snowSlump.step(this.bubbleNow());a&&(i=i?Bt(i,a):a),s.push(...this.snowSlump.landed)}this.afterSlump(i,s)}afterSlump(e,t){if(this.why="slump",!e)return;if(t.length){const a=this.renderer.time,o=Math.max(1,Math.floor(t.length/3/24));for(let l=0;l<t.length;l+=3*o)this.renderer.puffs.emit((t[l]+.5)*C,(t[l+1]+.3)*C,(t[l+2]+.5)*C,3,.8,a)}const i=this.support.afterEdit(e);for(const a of i.fragments)this.launch(a);this.snow.wake(e),this.movedBox=e;const s=i.changed?Bt(e,i.changed):e;this.markMoving(Zn(s,re,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([a,o,l])=>st(a,o,l)));const r=this.refresh(s,!0);for(let a=e.x0;a<=e.x1;a++)for(let o=e.y0;o<=e.y1;o++)for(let l=e.z0;l<=e.z1;l++)this.moved[this.field.index(a,o,l)]=0;this.movedBox=null,this.slumpKeys=Zn(r,re,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([a,o,l])=>st(a,o,l));for(const[a,o,l]of qt(r,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(a,o,l));this.scheduleSave()}applyTuning(){const e=this.tuning;if(this.sand.opts.repose=e.sandRepose,this.sand.opts.rate=e.sandRate,this.snow.opts.reach=Math.max(1,Math.round(e.snowReach/C)),this.snow.opts.creep=e.snowCreep,this.snow.opts.calve=Math.round(e.snowCalve/C),this.snow.opts.slab=Math.round(e.snowSlab/C),this.snow.opts.flight=Math.round(e.snowFlight),this.snow.opts.bodies=e.snowBodies>.5,this.snow.opts.powder=e.snowPowder,this.snowSlump.opts.repose=e.snowRepose,this.snowSlump.opts.rate=e.snowSlumpRate,this.snowSlump.opts.clumps=e.snowClumps,this.snowSlump.opts.crown=e.snowCrown/C,this.snowSlump.opts.impact=e.snowImpact,this.renderer.tweenMax=e.tween,this.renderer.water.setRippleGain(e.ripple),this.flow&&(this.flow.voidSeverity=e.voidFill/100),this.renderer.caustics=e.caustics>.5,this.profiler.enabled=e.profile>.5,this.flow)for(const t of this.flow.sources.keys())this.flow.sources.set(t,this.pourLevels())}tuningDiff(){const e={};for(const t of Object.keys(nr))this.tuning[t]!==nr[t]&&(e[t]=this.tuning[t]);return e}markLooseSnow(e,t){const i=this.field;let s=!1,r=0;for(let a=e.x0;a<=e.x1;a++)for(let o=e.y0;o<=e.y1;o++)for(let l=e.z0;l<=e.z1;l++,r++){const c=i.index(a,o,l);t.d[r]<=0&&i.density[c]>0&&i.material[c]===gn&&(this.snowLoose[c]=1,s=!0)}return s}settleSnowSlump(e=400){let t=0,i=null;for(;t<e&&this.snowSlump.pending;){t++;const s=this.snowSlump.step();s&&(i=i?Bt(i,s):s)}return this.afterSlump(i,[]),t}lastMass=-1e9;massText="";massReadout(){const e=this.field,t=e.density,i=e.material;let s=0,r=0;for(let l=0;l<t.length;l++)t[l]>0&&(s++,i[l]===gn&&r++);let a=0;for(const l of this.falling)l.blend||(a+=l.frag.solid.length);const o=this.powder.inFlight;return`mass ${s+a+o} (${r} snow, ${a} riding, ${o} powder)`}settleSnow(e=200){const t=this.snow.settle(e,this.snowSeconds);return this.snowSeconds+=e*(this.tuning.snowCreep*2+.01),this.afterSnow(t),this.powderSeconds+=60,this.stepPowder(0),t.loosened}settleWater(e=200){let t=0,i=null;for(;t<e&&this.flow.active;){t++;const s=this.flow.step();s.changed&&(i=i?Bt(i,s.changed):s.changed)}if(i){this.markWater(i),this.wetChanged(i),this.flushWet(this.lastNow,!0);for(const[s,r,a]of qt(i,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(s,r,a))}return t}settleSand(e=600){let t=0,i=null;for(;t<e&&this.sand.pending;){t++;const s=this.sand.step();s&&(i=i?Bt(i,s):s)}if(i){const s=this.support.afterEdit(i);for(const a of s.fragments)this.launch(a);const r=this.refresh(s.changed?Bt(i,s.changed):i,!0);for(const[a,o,l]of qt(r,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(a,o,l));this.scheduleSave()}return t}stepRegrowth(e){if(this.why="regrow",!this.regrowth)return;this.playSeconds+=Math.min(e,.1);const t=this.regrowth.step(this.field,this.playSeconds,this.body.pos,this.animalRng);for(const i of t){const s=this.support.afterEdit(i);for(const a of s.fragments)this.launch(a);this.sandOn&&this.sand.wake(i),this.snowOn&&this.snow.wake(i);const r=this.refresh(s.changed?Bt(i,s.changed):i,!0);for(const[a,o,l]of qt(r,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(a,o,l));this.scheduleSave()}}seedAnimals(){this.animalRng=wl((this.cfg.seed^2577)>>>0);const e=this.world?.animals,t=e?[...e]:[],i=this.cfg.chunksX*this.cfg.chunksZ,s=o=>t.some(l=>l.kind===o);let r=!1;s("goat")||(t.push(...Jh(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(2,Math.round(i/8)),this.animalRng,[Yi,Xi])),r=!0),s("penguin")||(t.push(...Kx(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(3,Math.round(i/10)),this.animalRng,[Rs,gn])),r=!0),s("fish")||(t.push(...Zx(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(5,Math.round(i/6)),this.animalRng)),r=!0),s("cat")||(t.push(...Jh(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(1,Math.round(i/32)),this.animalRng,[Yi,Xi],"cat")),r=!0),this.animals=t.map(o=>Gx(this.field,o,this.nextAnimalId++)),r&&(this.animalsDirty=!0);const a=[["goat",tc],["penguin",nc],["fish",ic],["cat",sc]];for(const[o,l]of a)for(let c=0;c<Ux;c++)this.pool.skin(o,c,l).then(h=>this.renderer.setSkin(o,c,h))}stepAnimals(e){if(!this.animalsOn||!this.animals.length)return;const t=this.animals.length,i=this.tuning.bubble,s=this.body.pos,r=i>0?this.animals.filter(o=>Math.hypot(o.body.pos[0]-s[0],o.body.pos[2]-s[2])<=i):this.animals;this.animalsParked=this.animals.length-r.length,qx(this.field,r,Math.min(e,.05),this.body.pos,this.animalRng);for(const o of r)this.renderer.placeAnimal(o.id,o.kind,Wx(o),o.body.pos,o.yaw,o.pitch);t&&(this.animalsDirty=!0);const a=this.lastNow;if(this.animalsDirty&&a-this.lastAnimalSave>8e3){this.lastAnimalSave=a,this.animalsDirty=!1;const o=this.animals.map(jh);this.world&&(this.world.animals=o),tu(this.cfg.seed,o)}}pick(e){if(e.kind==="water"){const s=mw(this.field,e.cell[0],e.cell[1],e.cell[2],this.sea);if(this.pickTarget=null,!s)return;this.flow.dropDrySources()&&Eo(this.cfg.seed,this.sourceList()),this.flow.wake(s.box),this.markWater(s.box),this.wetChanged(s.box),this.flushWet(this.lastNow,!0),this.renderer.water.splash((e.cell[0]+.5)*C,(e.cell[2]+.5)*C,1.5,-.05);for(const[r,a,o]of qt(s.box,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(r,a,o));this.scheduleSave(),this.hud.say(`${(s.cells*C*C*C).toFixed(s.cells<80?1:0)} m³ of water hoovered`);return}if(e.kind==="animal"){const s=this.animals.find(r=>r.id===e.id)?.kind??"animal";this.animals=this.animals.filter(r=>r.id!==e.id),this.renderer.removeAnimal(e.id),this.animalsDirty=!0,this.hud.say(`${s} removed`),this.pickTarget=null;return}const{c:t,size:i}=this.pickBox(e);this.applyEdit({op:"sub",shape:"cube",size:i,mat:e.mat,x:t[0],y:t[1],z:t[2],pick:!0}),this.hud.say(`${bt[e.mat]?.name??"light"} removed`),this.pickTarget=null}pickBox(e){const[t,i,s]=e.cell,r=[(t+.5)*C,(i+.5)*C,(s+.5)*C];if(!ht(e.mat))return{c:r,size:C};const a=Math.max(C,hi[this.brush.sizeIndex]);return{c:this.brush.snap?[Math.floor(r[0]/a)*a+a/2,Math.floor(r[1]/a)*a+a/2,Math.floor(r[2]/a)*a+a/2]:r,size:a}}selectSlot(e){if(e===this.brush.matIndex&&!this.handEmpty){this.handEmpty=!0,this.hud.setSelected(-1),this.renderer.setHandItem(0),this.hud.say("empty hand");return}this.handEmpty=!1,this.brush.matIndex=e,this.hud.setSelected(e),this.syncShapeToMaterial(),this.renderer.setHandItem(dn[e].id)}syncShapeToMaterial(){$n(dn[this.brush.matIndex].id)&&(this.brush.shape="cube",this.brush.snap=!0)}injectAll(){const e=re/Dt;for(let t=0;t<this.cfg.chunksX;t++)for(let i=0;i<this.cfg.chunksY;i++)for(let s=0;s<this.cfg.chunksZ;s++)Vr(this.field,this.gi,t,i,s,e,this.sun);this.lightSweeps++,this.giDirty=!0}lightTexels(e,t,i){const s=this.gi,r=s.texel,a=re/Dt,o=e/r-.5,l=t/r-.5,c=i/r-.5,h=Math.floor(o),u=Math.floor(l),f=Math.floor(c),p=o-h,m=l-u,v=c-f,g=[];for(let d=0;d<=1;d++)for(let x=0;x<=1;x++)for(let M=0;M<=1;M++){const y=h+d,w=u+x,E=f+M;if(y<0||w<0||E<0||y>=s.sx||w>=s.sy||E>=s.sz)continue;const b=(d?p:1-p)*(x?m:1-m)*(M?v:1-v);b<.001||g.push({o:s.index(y,w,E),chunk:st(Math.floor(y/a),Math.floor(w/a),Math.floor(E/a)),w:b})}return g}extraLights(e){let t;for(const i of this.lights.values())if(i.chunks.has(e))for(const s of this.lightTexels(i.x,i.y,i.z)){if(s.chunk!==e)continue;t??=new Map;const r=t.get(s.o);r?(r[0]+=i.r*s.w,r[1]+=i.g*s.w,r[2]+=i.b*s.w,r[3]=Math.max(r[3],i.kind)):t.set(s.o,[i.r*s.w,i.g*s.w,i.b*s.w,i.kind])}return t}setLight(e,t,i,s,r,a,o,l){const c=this.lights.get(e);if(c&&Math.hypot(c.x-t,c.y-i,c.z-s)<this.gi.texel/6&&c.r===r&&c.kind===l||c&&this.lastNow-c.at<30)return;const h=new Set;for(const f of this.lightTexels(t,i,s))h.add(f.chunk);const u=new Set(h);if(c)for(const f of c.chunks)u.add(f);this.lights.set(e,{x:t,y:i,z:s,r,g:a,b:o,kind:l,chunks:h,at:this.lastNow}),this.relightNow(u)}clearLight(e){const t=this.lights.get(e);t&&(this.lights.delete(e),this.relightNow(t.chunks))}relightNow(e){const t=re/Dt;for(const i of e){const[s,r,a]=er(i);Vr(this.field,this.gi,s,r,a,t,this.sun,this.extraLights(i)),this.lightDirty.delete(i)}this.giDirty=!0}updateLights(){const e=new Set,t=dn[this.brush.matIndex],i=this.renderer.handWorld();if(i&&t.emissive&&!this.handEmpty){const s=.25*(ht(t.id)?Sl:1);this.setLight("hand",i.x,i.y,i.z,t.emissive[0]*s,t.emissive[1]*s,t.emissive[2]*s,ht(t.id)?1:0),e.add("hand")}for(const s of this.falling)s.cooking||s.frag.items.forEach((r,a)=>{const o=bt[r.mat];if(!o?.emissive)return;const l=df(s.frag,r),c=`body:${s.id}:${a}`,h=ht(r.mat)?Sl:1;this.setLight(c,l[0],l[1],l[2],o.emissive[0]*h,o.emissive[1]*h,o.emissive[2]*h,ht(r.mat)?1:0),e.add(c)});for(const s of this.lights.keys())e.has(s)||this.clearLight(s)}lightStep(e){this.updateLights();const t=this.opts.test?12:2.5,i=performance.now(),s=re/Dt,r=this.cfg.chunksX*this.cfg.chunksY*this.cfg.chunksZ;let a=0;for(const c of this.lightDirty){const[h,u,f]=er(c);if(Vr(this.field,this.gi,h,u,f,s,this.sun,this.extraLights(c),!0),this.lightDirty.delete(c),a++,performance.now()-i>t)break}const o=this.sun.dir;for((!this.sweepSun||Math.hypot(o[0]-this.sweepSun[0],o[1]-this.sweepSun[1],o[2]-this.sweepSun[2])>.001)&&(this.sweepDone=!1,this.sweepSun=[o[0],o[1],o[2]]);!this.sweepDone&&performance.now()-i<t;){const c=this.lightRR,h=Math.floor(c/(this.cfg.chunksY*this.cfg.chunksZ)),u=Math.floor(c/this.cfg.chunksZ)%this.cfg.chunksY,f=c%this.cfg.chunksZ;Vr(this.field,this.gi,h,u,f,s,this.sun,void 0,!0),this.lightRR=(c+1)%r,this.lightRR===0&&(this.lightSweeps++,this.sweepDone=!0),a++}if(a>0&&(this.giDirty=!0),this.giDirty&&e-this.lastGiUpload>(this.opts.test?30:150)){const c=this.gi.easeStep(this.opts.test?1:yS);this.renderer.giTex.upload(),this.renderer.giUploaded(),this.giDirty=c>0,this.lastGiUpload=e}}wantedLevel(e,t,i,s){const r=re*C,a=this.renderer.camera.position,o=Math.hypot((e+.5)*r-a.x,(t+.5)*r-a.y,(i+.5)*r-a.z);return xM(o,s,this.quality)}updateLod(e){this.why="lod";const t=this.lastNow;for(const[s,r]of this.moving)r<=t&&this.moving.delete(s);const i=()=>{for(const[s,r]of this.chunks){const[a,o,l]=er(s),c=this.moving.has(s)?0:this.wantedLevel(a,o,l,r.level),h=this.scatterFor(a,o,l,r.scatter);(c!==r.wanted||h!==r.wantedScatter||e||r.level<0)&&(r.wanted=c,r.wantedScatter=h,(r.level!==c||r.scatter!==h||r.level<0)&&this.requestMesh(a,o,l,e?null:this.curBatch))}};e?i():this.batched(i),this.pool.reprioritize(s=>this.priority(s.cx,s.cy,s.cz))}scatterFor(e,t,i,s){if(this.foliage<=0)return 0;const r=re*C;return Math.hypot((e+.5)*r-this.body.pos[0],(t+.5)*r-this.body.pos[1],(i+.5)*r-this.body.pos[2])<Ta+(s>0?wf:0)?this.foliage:0}priority(e,t,i){const s=re*C;return Math.hypot((e+.5)*s-this.body.pos[0],(t+.5)*s-this.body.pos[1],(i+.5)*s-this.body.pos[2])}curBatch=null;batches=new Set;batched(e){const t=this.curBatch,i={pending:0,swaps:[],t0:performance.now(),flushed:!1};this.curBatch=i;try{e()}finally{this.curBatch=t}i.pending>0&&this.batches.add(i)}flushBatch(e){e.flushed=!0,this.batches.delete(e);const t=e.swaps;e.swaps=[];for(const i of t)i()}flushStaleBatches(e){for(const t of this.batches)e-t.t0>MS&&this.flushBatch(t)}meshWhyLine(){return this.lastNow-this.meshWhyAt>=5e3&&(this.meshWhyShown=Array.from(this.meshWhy.entries()).sort((e,t)=>t[1]-e[1]).map(([e,t])=>`${e} ${t}`).join(" · ")||"none",this.meshWhy.clear(),this.meshWhyAt=this.lastNow),this.meshWhyShown}why="edit";meshWhy=new Map;meshWhyShown="";meshWhyAt=0;requestMesh(e,t,i,s=this.curBatch,r=!1){const a=st(e,t,i),o=this.chunks.get(a);if(this.meshWhy.set(this.why,(this.meshWhy.get(this.why)??0)+1),o.inflight||o.shown<o.version){o.dirty=!0,s&&!s.flushed&&!o.nextBatch&&(s.pending++,o.nextBatch=s);return}s&&!r&&s.pending++,o.inflight=!0,o.dirty=!1;const l=2,c=re+1+2*l,h=this.field.extract(e*re-l,t*re-l,i*re-l,c,c,c),u=o.wanted,f=o.wantedScatter,p=MM(u,this.quality),m=o.version>0&&!this.noSlide.delete(a),v=m?this.movedSlice(h.ox,h.oy,h.oz,c):void 0,g=f>0?this.waterSlice(h.ox,h.oy,h.oz,c):void 0;this.pool.submit({cx:e,cy:t,cz:i,ox:h.ox,oy:h.oy,oz:h.oz,n:c,density:h.density,material:h.material,hard:h.hard,sub:h.sub,levels:u,scatter:f,morphAt:p,from:m,moved:v,water:g},this.priority(e,t,i)).then(d=>{const x=()=>{o.inflight=!1,o.level=d.levels,o.scatter=f;const M=++o.version;o.triangles=d.vertexCount/3;const y=()=>{const w=o.nextBatch;o.nextBatch=null,(o.dirty||o.wanted!==o.level||o.wantedScatter!==o.scatter)&&this.requestMesh(e,t,i,w,w!==null)};this.renderer.setChunk(e,t,i,{positions:d.positions,normals:d.normals,mats:d.mats,bary:d.bary,face:d.face,morph:d.morph,from:d.from,emitters:d.emitters,scatter:d.scatter,vertexCount:d.vertexCount},()=>{o.shown<M&&(o.shown=M),o.shown>=o.version&&!o.inflight&&y()}),o.shown>=M&&y()};if(!s||s.flushed){x();return}s.swaps.push(x),--s.pending<=0&&this.flushBatch(s)})}get pendingMeshes(){let e=0;for(const t of this.chunks.values())(t.inflight||t.level<0)&&e++;return e}applyEdit(e,t=!0){t&&(this.lastBuildAt=this.lastNow);const i=e.op==="add"?bt[e.mat]?.spawn:void 0;if(i){if(!this.animalsOn){this.hud.say("animals are off");return}if(gf(i)){const s=this.field.waterAt(e.x,e.y+.3,e.z)?e.y+.3:this.field.waterAt(e.x,e.y-.3,e.z)?e.y-.3:NaN;if(Number.isNaN(s)){this.hud.say("a fish needs water");return}this.animals.push(Rl(this.field,i,e.x,e.z,Math.floor(this.animalRng()*1e9),this.nextAnimalId++,s,this.input.yaw+Math.PI))}else this.animals.push(Rl(this.field,i,e.x,e.z,Math.floor(this.animalRng()*1e9),this.nextAnimalId++,void 0,this.input.yaw+Math.PI));this.animalsDirty=!0;return}if(e.mat===_a&&e.op!=="sub"){if(e.op!=="add"){this.hud.say("water is poured, not painted");return}this.pourWater(e);return}if(e.mat===La&&e.op!=="sub"){if(e.op!=="add"){this.hud.say("a sponge soaks, it does not paint");return}this.sponge(e);return}if(this.undryNear(aa(e,this.field)),c1(e)&&!this.opts.test){this.anims.push({e,t0:performance.now(),record:t}),this.stepEdit(e,Po(.001));return}if(e.op==="smooth"&&!this.opts.test){const s=t?this.preImages(e):[],r=aa(e,this.field),a=this.copyDensity(r),o=Ms(this.field,e),l=this.copyDensity(r);this.writeDensity(r,a,l,0),this.anims.push({e,t0:performance.now(),record:t,lerp:{b:o,pre:a,post:l,preImages:s}}),this.refresh(o);return}this.finishEdit(e,t)}pourWater(e){const t=this.field;let i=Math.floor(e.x/C),s=Math.floor(e.y/C),r=Math.floor(e.z/C);for(let o=0;o<3&&t.inBounds(i,s,r)&&!pn(t,i,s,r);o++)s++;if(!t.inBounds(i,s,r)||!pn(t,i,s,r)){this.hud.say("no room for water there");return}const a=t.index(i,s,r);this.flow.sources.has(a)||(this.flow.addSource(i,s,r,this.pourLevels()),Eo(this.cfg.seed,this.sourceList()),this.renderer.water.splash((i+.5)*C,(r+.5)*C,.6,-.03))}sponge(e){const t=this.field,i=e.size*.5,s={x0:Math.floor((e.x-i)/C),y0:Math.floor((e.y-i)/C),z0:Math.floor((e.z-i)/C),x1:Math.ceil((e.x+i)/C),y1:Math.ceil((e.y+i)/C),z1:Math.ceil((e.z+i)/C)},r=dw(t,s,this.sea);if(!r){this.hud.say("nothing to soak up");return}this.flow.dropDrySources()&&Eo(this.cfg.seed,this.sourceList()),this.flow.wake(s),this.markWater(s),this.wetChanged(s),this.flushWet(this.lastNow,!0);for(const[a,o,l]of qt(s,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(a,o,l));this.scheduleSave(),this.hud.say(`${(r*C*C*C).toFixed(r<80?1:0)} m³ soaked up`)}pourLevels(){return Math.max(1,Math.round(this.tuning.pourRate/this.tuning.waterHz*mt))}sourceList(){const e=this.field,t=[];for(const i of this.flow.sources.keys()){const s=i%e.nz,r=(i-s)/e.nz,a=r%e.ny;t.push([(r-a)/e.ny,a,s])}return t}preImages(e){const t=[];for(const[i,s,r]of qt(aa(e,this.field),this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))t.push(Do(this.field,i,s,r));return t}copyDensity(e){const t=this.field,i=new Float32Array((e.x1-e.x0+1)*(e.y1-e.y0+1)*(e.z1-e.z0+1));let s=0;for(let r=e.x0;r<=e.x1;r++)for(let a=e.y0;a<=e.y1;a++)for(let o=e.z0;o<=e.z1;o++)i[s++]=t.density[t.index(r,a,o)];return i}writeDensity(e,t,i,s){const r=this.field;let a=0;for(let o=e.x0;o<=e.x1;o++)for(let l=e.y0;l<=e.y1;l++)for(let c=e.z0;c<=e.z1;c++,a++)r.density[r.index(o,l,c)]=t[a]+(i[a]-t[a])*s}noSlide=new Set;refresh(e,t=!1,i=!0){const s=this.flow.wake(e);if(this.markWater(e),s){this.markWater(s),e=Bt(e,s);const r=Math.max(.5,(s.x1-s.x0)*C*.5),a=Math.max(.5,(s.z1-s.z0)*C*.5);this.renderer.water.splash((s.x0+s.x1)*.5*C,(s.z0+s.z1)*.5*C,Math.hypot(r,a),-.02*Math.min(4,Math.hypot(r,a)))}return this.batched(()=>{for(const[r,a,o]of Zn(e,re,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))if(i||this.noSlide.add(st(r,a,o)),this.requestMesh(r,a,o),this.lightDirty.add(st(r,a,o)),t)for(let l=a-1;l>=0;l--)this.lightDirty.add(st(r,l,o))}),e}stepEdit(e,t){this.refresh(Ms(this.field,e,t))}lastAnimMesh=0;animMoved=null;finishEdit(e,t){const i=t?this.preImages(e):[],s=Ms(this.field,e);this.commitEdit(e,t,i,s)}editLoose(e,t){const i=this.falling.find(r=>r.id===e);if(!i)return;if(t.op==="add"&&$n(t.mat)){this.hud.say("blocks need solid ground");return}i.blend&&this.undry(i);const s=tx(i.frag,t);this.renderer.removeFragment(e),this.falling=this.falling.filter(r=>r.id!==e);for(const r of s)this.launch(r)}undry(e){const t=e.blend;if(!t)return;sx(this.field,t.box,t.pre),this.refresh(t.box,!1),e.blend=void 0;const i=e.frag;i.settled=!1,i.rest=0,i.age=0,this.renderer.hasFragment(e.id)?this.renderer.fadeFragment(e.id,1):this.meshBody(i,e.id)}undryNear(e){for(const t of this.falling){if(!t.blend)continue;const i=t.blend.box;i.x0>e.x1+xs||i.x1<e.x0-xs||i.y0>e.y1+xs||i.y1<e.y0-xs||i.z0>e.z1+xs||i.z1<e.z0-xs||this.undry(t)}}launch(e){const t=this.nextFragId++;return this.falling.push({frag:e,id:t}),this.meshBody(e,t)}meshBody(e,t){return this.pool.frag(e.nx,e.ny,e.nz,e.density.slice(),e.material.slice(),e.hard.slice(),e.sub.slice(),this.foliage).then(i=>{const s=this.falling.find(r=>r.id===t);!s||s.blend&&s.blend.fadeT0===void 0&&s.blend.phase==="join"||s.cooking||this.renderer.setFragment(t,i,e.com,e.pos,e.q,e.texOrigin)})}waterSurfaceNear(e,t,i,s){const r=this.field,a=Math.floor(e/C),o=Math.floor(i/C);if(a<0||o<0||a>=r.nx-1||o>=r.nz-1)return null;const l=Math.min(r.ny-2,Math.floor((t+s)/C)),c=Math.max(0,Math.floor((t-s)/C));for(let h=l;h>=c;h--){const u=r.water[r.index(a,h,o)];if(u)return(h+Math.min(u,mt)/mt)*C}return null}lastBodySave=0;bodiesSaved=!0;stepFalling(e){this.why="landing";const t=this.falling.filter(r=>!r.cooking&&!r.blend);if(t.length&&(this.bodiesSaved=!1),!this.bodiesSaved&&this.lastNow-this.lastBodySave>2e3&&(this.lastBodySave=this.lastNow,t.length||(this.bodiesSaved=!0),bo(this.cfg.seed,t.map(r=>zh(r.frag)))),!this.falling.length)return;const i=[],s=this.lastNow;for(const r of this.falling){const a=r.frag;if(r.cooking){if(r.cooking.keys.every((x,M)=>{const y=this.chunks.get(x);return y.version>r.cooking.versions[M]&&!y.inflight})){this.renderer.removeFragment(r.id);continue}i.push(r);continue}if(r.blend){if(r.blend.phase==="take"){const y=r.blend.wait;y.keys.every((E,b)=>this.chunks.get(E).shown>=y.versions[b])&&(r.blend.phase="join",r.blend.t0=s,r.blend.lastStep=s,r.blend.fadeT0=s),i.push(r);continue}if(r.blend.fadeT0!==void 0){const y=1-(s-r.blend.fadeT0)/bS;y<=0?(this.renderer.removeFragment(r.id),r.blend.fadeT0=void 0):this.renderer.fadeFragment(r.id,y)}const d=this.tuning.landBlend*1e3,x=Math.min(1,(s-r.blend.t0)/d),M=x*x*(3-2*x);if(x>=1){if(!r.blend.final){r.blend.final=!0,Kr(this.field,a,r.blend.box,r.blend.pre,0,0);const y={lost:0},w=Uh(this.field,a,y,{items:"lights",before:r.blend.pre});if(a.snow&&y.lost>0){const S=this.renderer.time;for(const A of this.powder.addLost(a,y.lost,this.powderSeconds))this.renderer.powder.emit((A.x+.5)*C,A.y*C,(A.z+.5)*C,(A.land+.5)*C,Math.min(12,2+A.corners),.8,S)}const E=this.support.afterEdit(w);for(const S of E.fragments)this.launch(S);this.sandOn&&this.sand.wake(E.changed?Bt(w,E.changed):w),this.snowOn&&(this.snow.wake(E.changed?Bt(w,E.changed):w),this.markLooseSnow(r.blend.box,r.blend.pre)&&this.tuning.snowLandSlump>.5&&this.snowSlump.wake(w));const b=this.refresh(E.changed?Bt(w,E.changed):w,!0),T=Zn(b,re,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([S,A,_])=>st(S,A,_));r.cooking={keys:T,versions:T.map(S=>this.chunks.get(S).version)};for(const[S,A,_]of qt(b,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(S,A,_));this.scheduleSave()}i.push(r);continue}if(s-r.blend.lastStep>Math.max(CS,d/TS)){r.blend.lastStep=s;const y=Eu*(1-M)+.02;Kr(this.field,a,r.blend.box,r.blend.pre,0,y),this.refresh(r.blend.box,!1)}i.push(r);continue}const o=this.waterSurfaceNear(a.pos[0],a.pos[1]-a.radius,a.pos[2],a.radius+1),l=o===null||a.pos[1]-a.radius>o,c=Math.hypot(a.vel[0],a.vel[1],a.vel[2]),h=this.tuning.waterPhysics>.5,u=Math.max(1,Math.ceil(e/(1/120)));for(let d=0;d<u&&!a.settled;d++)ix(this.field,a,e/u,this.fallSpeed,{water:h});const f=this.waterSurfaceNear(a.pos[0],a.pos[1]-a.radius,a.pos[2],a.radius+1);if(l&&f!==null&&a.pos[1]-a.radius<=f){const d=Math.min(6,a.solid.length/12+a.items.length/2),x=h?-Math.min(.35,.012*c*Math.max(.6,a.radius)*Math.max(1,d)):-.05*d;this.renderer.water.splash(a.pos[0],a.pos[2],Math.max(.6,a.radius)*(h?1.3:1),x)}if(this.renderer.moveFragment(r.id,a.pos,a.q),!a.settled){i.push(r);continue}const p=cc(this.field,a),m=ff(this.field,p);Kr(this.field,a,p,m,0,Eu),pf(this.field,a,"solid");const v=this.refresh(p,!1,!1),g=Zn(v,re,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([d,x,M])=>st(d,x,M));r.blend={box:p,pre:m,t0:s,lastStep:s,final:!1,phase:"take",wait:{keys:g,versions:g.map(d=>{const x=this.chunks.get(d);return x.version+(x.dirty?2:1)})}},i.push(r)}this.falling=i}commitEdit(e,t,i,s){if(s=this.refresh(s,!0),t){this.edits.push(e),this.undoStack.push(i),this.undoStack.length>24&&this.undoStack.shift();for(const[l,c,h]of qt(s,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(l,c,h));this.scheduleSave()}const r=e.size*.5+C;if(this.waterSurfaceNear(e.x,e.y,e.z,r+.5)!==null){const l=e.op==="sub"?1+3*(this.tuning.voidFill/100)*Math.min(1,r/2):1;this.renderer.water.splash(e.x,e.z,r*(e.op==="sub"?1.3:1),-.05*Math.min(3,e.size)*l)}const o=this.support.afterEdit(s);if(o.held&&this.hud.say("too vast to fall: it stands"),this.sandOn&&(this.sand.wake(s),o.changed&&this.sand.wake(o.changed)),this.snowOn&&(this.snow.wake(s),o.changed&&this.snow.wake(o.changed)),o.changed){this.refresh(o.changed,!0);for(const[l,c,h]of qt(o.changed,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(l,c,h));this.scheduleSave()}for(const l of o.fragments)this.launch(l)}brushTarget(e){const t=this.hit;if(!t)return null;const i=this.effectiveSize(e)*.5,s=t.normal;let r;const o=e==="add"&&$n(dn[this.brush.matIndex].id)||t.hard?.5:.6;if(e==="add")r=[t.point[0]+s[0]*i*o,t.point[1]+s[1]*i*o,t.point[2]+s[2]*i*o];else if(e==="sub"){const c=Math.min(i*.4,.06);r=[t.point[0]-s[0]*c,t.point[1]-s[1]*c,t.point[2]-s[2]*c]}else r=[t.point[0],t.point[1],t.point[2]];if(this.brush.snap&&(e!=="sub"||this.brush.shape!=="sphere")){const c=this.effectiveSize(e);r=[Math.floor(r[0]/c)*c+c/2,Math.floor(r[1]/c)*c+c/2,Math.floor(r[2]/c)*c+c/2]}return r}facingDir(){const e=-Math.sin(this.input.yaw),t=-Math.cos(this.input.yaw);let i=0,s=-1/0;for(let r=0;r<4;r++){const a=e*fa[r][0]+t*fa[r][2];a>s&&(s=a,i=r)}return i}effectiveSize(e){const t=dn[this.brush.matIndex].id;return e==="add"&&$n(t)&&!ht(t)?.5:hi[this.brush.sizeIndex]}doEdit(e){if(e==="add"&&this.handEmpty)return;const t=this.brushTarget(e);if(!t)return;if(e==="add"&&dn[this.brush.matIndex].spawn&&this.hitBody!==null){this.hud.say("not on a falling thing");return}if(e!=="add"&&this.hit?.hard&&this.hitBody===null){const a=this.hit,o=[a.point[0]-a.normal[0]*.25,a.point[1]-a.normal[1]*.25,a.point[2]-a.normal[2]*.25];if(rr(this.field,Math.floor(o[0]/C),Math.floor(o[1]/C),Math.floor(o[2]/C))){this.hud.say("the prime anchor holds the world");return}}const i=dn[this.brush.matIndex].id,s=e==="add"&&$n(i)&&!ht(i),r={op:e,shape:s?"cube":this.brush.shape,size:this.effectiveSize(e),mat:i,x:t[0],y:t[1],z:t[2]};if((r.shape==="ramp"||r.shape==="wall"||r.shape==="roof")&&(r.dir=this.facingDir()),this.hitBody!==null){this.editLoose(this.hitBody,r);return}this.applyEdit(r)}lastNow=0;frame(e){this.why="edit",this.lastNow=e,this.profiler.begin(e);const t=this.lastFrame?(e-this.lastFrame)/1e3:1/60;this.lastFrame=e;const i=Math.min(t,.05),s=this.input,r=this.touch;s.hit("CapsLock")&&!this.opts.test&&!r.enabled&&!this.hud.overlayVisible&&(s.freeMouse=!s.freeMouse,document.body.classList.toggle("freemouse",s.freeMouse),s.freeMouse?(document.pointerLockElement&&document.exitPointerLock(),this.hud.say("free mouse · point and click · Caps Lock to look again")):(this.hud.say("mouse look"),s.requestLock()));const a=s.locked||s.freeMouse&&!this.hud.overlayVisible||this.opts.test||r.enabled&&!this.hud.overlayVisible;if(a){for(let L=0;L<gu.length&&L<dn.length;L++)s.hit(gu[L])&&this.selectSlot(L);s.hit("Escape")&&(this.touch.enabled||s.freeMouse)&&this.showMenu(),s.wheel!==0&&(this.brush.sizeIndex=Math.max(0,Math.min(hi.length-1,this.brush.sizeIndex-s.wheel))),s.hit("KeyQ")&&(this.brush.shape=bu(this.brush.shape)),s.hit("Tab")&&(this.brush.op=Io[(Io.indexOf(this.brush.op)+1)%Io.length],this.hud.say(`tool: ${this.brush.op==="sub"?"remove":this.brush.op}`)),s.down("ArrowLeft")&&(s.yaw+=Au*i),s.down("ArrowRight")&&(s.yaw-=Au*i),s.down("ArrowUp")&&(s.pitch=Math.min(1.55,s.pitch+_u*i)),s.down("ArrowDown")&&(s.pitch=Math.max(-1.55,s.pitch-_u*i)),s.hit("KeyG")&&(this.brush.snap=!this.brush.snap,this.hud.say(this.brush.snap?"grid snap on":"grid snap off")),s.hit("KeyF")&&(this.body.fly=!this.body.fly,this.touch.setFly(this.body.fly),this.hud.say(this.body.fly?"flying":"walking")),s.hit("KeyP")&&(this.timePaused=!this.timePaused,this.hud.say(this.timePaused?"time paused":"time flowing")),s.hit("Comma")&&(this.time=(this.time-.5+24)%24),s.hit("Period")&&(this.time=(this.time+.5)%24),s.hit("KeyZ")&&this.edits.length&&this.undo()}r.enabled&&a&&(s.yaw-=r.lookDX*.005,s.pitch=Math.max(-1.55,Math.min(1.55,s.pitch-r.lookDY*.005))),(r.enabled||s.freeMouse)&&a&&(r.tapped("tb-fly")&&(this.body.fly=!this.body.fly,r.setFly(this.body.fly),this.hud.say(this.body.fly?"flying":"walking")),r.tapped("tb-size-down")&&(this.brush.sizeIndex=Math.max(0,this.brush.sizeIndex-1)),r.tapped("tb-size-up")&&(this.brush.sizeIndex=Math.min(hi.length-1,this.brush.sizeIndex+1)),r.tapped("tb-shape")&&(this.brush.shape=bu(this.brush.shape)),r.tapped("tb-snap")&&(this.brush.snap=!this.brush.snap,this.hud.say(this.brush.snap?"grid snap on":"grid snap off")),r.tapped("tb-undo")&&this.edits.length&&this.undo(),r.tapped("tb-menu")&&this.showMenu()),!this.timePaused&&!this.opts.test&&(this.time=(this.time+this.timeRate*i)%24),this.sun=bh(this.time),this.renderer.setSun(this.sun);const o=s.yaw,l=-Math.sin(o),c=-Math.cos(o),h=Math.cos(o),u=-Math.sin(o);let f=0,p=0,m=0;a&&(s.down("KeyW")&&(f+=l,p+=c),s.down("KeyS")&&(f-=l,p-=c),s.down("KeyD")&&(f+=h,p+=u),s.down("KeyA")&&(f-=h,p-=u),r.enabled&&(f+=l*r.moveY+h*r.moveX,p+=c*r.moveY+u*r.moveX),(this.body.fly||this.body.swim)&&((s.down("Space")||r.jump)&&(m+=1),(s.down("ShiftLeft")||s.down("ShiftRight")||s.down("KeyC")||r.duck)&&(m-=1))),a&&!this.body.fly&&!this.body.swim?((s.hit("KeyC")||r.tapped("tb-duck"))&&(this.crouchLatch=!this.crouchLatch),(s.hit("Space")||r.tapped("tb-jump"))&&(this.crouchLatch=!1)):this.crouchLatch=!1,this.crouch=this.crouchLatch,this.body.crouch=this.crouch,r.setDuckLit(this.crouch);const v=Math.max(1,Math.hypot(f,p)),g=s.down("ShiftLeft")||s.down("ShiftRight"),d=this.body.swim,x=this.body.fly?g?40:18:d?g?4.2:2.6:this.crouch?1.8:g?8.5:5.2;ac(this.field,this.body,{wishX:f/v*x,wishZ:p/v*x,wishY:m*(this.body.fly?g?28:16:d?3:0),jump:a&&!d&&(s.down("Space")||r.jump),dt:i});const M=this.renderer.camera;this.eye+=((this.crouch?M1:vi)-this.eye)*Math.min(1,i*14),this.slosh+=((this.body.swim?1:0)-this.slosh)*Math.min(1,i*2);const y=this.slosh*Math.sin(e*.0021)*.06,w=this.slosh*Math.sin(e*.0016+1.3)*.02;M.position.set(this.body.pos[0],this.body.pos[1]+this.eye+y,this.body.pos[2]),M.rotation.set(s.pitch,o,w,"YXZ");const E=this.field.waterAt(M.position.x,M.position.y,M.position.z);if(E!==this.renderer.underwater&&this.renderer.setUnderwater(E,this.sun),this.flow.active||this.flow.parked){this.flowClock+=Math.min(i,.1);const L=1/this.tuning.waterHz,U=this.bubbleNow();for(let B=0;B<3&&this.flowClock>=L;B++){this.flowClock-=L;const k=this.flow.step(U);if(k.changed){this.markWaterCells(k.cells),this.wetChanged(k.changed);for(const[X,K,oe]of qt(k.changed,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(X,K,oe));this.scheduleSave()}}this.flowClock>L&&(this.flowClock=L),!this.flow.active&&!this.flow.parked&&this.flow.settleTable()}else this.flowClock=0;if(this.profiler.mark("flow"),this.flushWet(e,!this.flow.active),this.waterLeft.size)this.waterLeft=this.renderer.water.rebuild(this.field,this.waterLeft,this.flow.motion,this.tuning.waterSmooth,e/1e3,wu);else if((this.waterAll||this.waterKeys.size)&&(e-this.lastWaterBuild>90||!this.flow.active)){const L=this.waterAll?null:this.waterKeys;this.waterAll=!1,this.waterKeys=new Set,this.lastWaterBuild=e,this.waterLeft=this.renderer.water.rebuild(this.field,L,this.flow.motion,this.tuning.waterSmooth,e/1e3,L?wu:1/0)}this.profiler.mark("water mesh");const b=[],T=this.body.pos,S=this.cfg.seaLevel;T[1]<S&&T[1]+vi>S&&this.field.waterAt(T[0],S-C*.5,T[2])&&b.push([T[0],T[2],.42,Math.min(4,Math.hypot(this.body.vel[0],this.body.vel[1],this.body.vel[2]))]),this.profiler.mark("input"),this.stepFalling(i),this.profiler.mark("bodies"),this.stepAnimals(i),this.profiler.mark("animals"),this.stepRegrowth(i),this.stepSand(i),this.profiler.mark("sand"),this.stepSnow(i),this.stepPowder(i),this.stepSnowSlump(i),this.profiler.mark("snow");for(const L of this.falling){const U=L.frag;U.pos[1]-U.radius<S&&U.pos[1]+U.radius>S&&this.field.waterAt(U.pos[0],S-C*.5,U.pos[2])&&b.push([U.pos[0],U.pos[2],Math.max(.4,U.radius*.8),Math.min(6,Math.hypot(U.vel[0],U.vel[1],U.vel[2])*1.5)])}this.renderer.water.setObstacles(b);const A=new W(0,0,-1).applyEuler(M.rotation);if(s.freeMouse&&!r.enabled&&s.mouseX>=0){const L=this.input.canvas.getBoundingClientRect(),U=(s.mouseX-L.left)/Math.max(1,L.width)*2-1,B=1-(s.mouseY-L.top)/Math.max(1,L.height)*2;U>=-1&&U<=1&&B>=-1&&B<=1&&A.set(U,B,.5).unproject(M).sub(M.position).normalize()}this.hit=d1(this.field,[M.position.x,M.position.y,M.position.z],[A.x,A.y,A.z],48),this.hitBody=null;for(const L of this.falling){if(L.cooking)continue;const U=this.hit?this.hit.distance:48,B=L.frag,k=B.pos[0]-M.position.x,X=B.pos[1]-M.position.y,K=B.pos[2]-M.position.z,oe=k*A.x+X*A.y+K*A.z;if(oe<-B.radius||oe>U+B.radius)continue;const we=k-A.x*oe,be=X-A.y*oe,Se=K-A.z*oe;if(we*we+be*be+Se*Se>B.radius*B.radius)continue;const Z=$1(B,[M.position.x,M.position.y,M.position.z],[A.x,A.y,A.z],U);Z&&(!this.hit||Z.distance<this.hit.distance)&&(this.hit=Z,this.hitBody=L.id)}if(this.pickTarget=null,this.primeAim=!1,this.hit&&this.hit.hard&&this.hitBody===null&&bt[this.hit.material]?.emissive){const L=this.hit.point,U=this.hit.normal,B=[Math.floor((L[0]-U[0]*.02)/C),Math.floor((L[1]-U[1]*.02)/C),Math.floor((L[2]-U[2]*.02)/C)];rr(this.field,B[0],B[1],B[2])?this.primeAim=!0:this.field.getHard(B[0],B[1],B[2])===this.hit.material&&(this.pickTarget={kind:"light",cell:B,mat:this.hit.material})}if(!this.pickTarget&&dn[this.brush.matIndex].id===_a){const L=p1(this.field,[M.position.x,M.position.y,M.position.z],[A.x,A.y,A.z],this.hit?this.hit.distance:48);L&&(this.pickTarget={kind:"water",cell:L.cell,distance:L.distance})}if(this.animalsOn){const L=this.hit?this.hit.distance:48;let U=1/0,B=-1;for(const k of this.animals){const X=jx(k,[M.position.x,M.position.y,M.position.z],[A.x,A.y,A.z],L);X!==null&&X<U&&(U=X,B=k.id)}B>=0&&(this.pickTarget={kind:"animal",id:B},this.hitBody=null)}if(r.setDig(this.pickTarget?"remove":"dig"),this.pickTarget?.kind==="light"){const{c:L,size:U}=this.pickBox(this.pickTarget);this.renderer.setCursor(L[0],L[1],L[2],U*.5,[U*.5,U*.5,U*.5])}else if(this.pickTarget?.kind==="animal"){const L=this.animals.find(U=>U.id===this.pickTarget.id);L&&this.renderer.setCursor(L.body.pos[0],L.body.pos[1]+.45,L.body.pos[2],.55,[.6,.5,.6])}else if(this.pickTarget?.kind==="water"){const L=this.pickTarget.cell;this.renderer.setCursor((L[0]+.5)*C,(L[1]+.5)*C,(L[2]+.5)*C,.25,[.25,.25,.25])}else if(this.hit){const L=s.mouseDown[2]||r.dig?"sub":r.heldOp??this.brush.op,U=this.effectiveSize(L)*.5,B=this.brushTarget(L),k=this.brush.shape;if(k==="sphere"&&U>=.3)this.renderer.setCursor(B[0],B[1],B[2],U,null);else if(k==="slab")this.renderer.setCursor(B[0],B[1]-U+U/3,B[2],U,[U,U/3,U]);else if(k==="wall"){const X=fa[this.facingDir()],K=Math.min(U*2/3,C)*.5;this.renderer.setCursor(B[0]-X[0]*(U-K),B[1],B[2]-X[2]*(U-K),U,[X[0]!==0?K:U,U,X[2]!==0?K:U])}else this.renderer.setCursor(B[0],B[1],B[2],U,[U,U,U])}else this.renderer.setCursor(0,0,0,0,null);if(a){const L=e-this.lastEdit>(this.brush.sizeIndex>=2?260:150);this.pickTarget&&(s.mouseClick[2]||s.hit("KeyM")||r.tapped("tb-dig"))?(this.pick(this.pickTarget),this.lastEdit=e):this.pickTarget&&(s.mouseDown[2]||s.down("KeyM")||r.dig)||(s.mouseClick[2]||s.hit("KeyM")||(s.mouseDown[2]||s.down("KeyM")||r.dig)&&L?(this.doEdit("sub"),this.lastEdit=e):s.mouseClick[0]||s.hit("KeyE")||(s.mouseDown[0]||s.down("KeyE"))&&L?(this.doEdit(this.brush.op),this.lastEdit=e):r.heldOp&&L&&(this.doEdit(r.heldOp),this.lastEdit=e))}if(this.anims.length){const L=[];let U=null;for(const B of this.anims){const k=(e-B.t0)/this.editMs;if(B.lerp){const{b:X,pre:K,post:oe,preImages:we}=B.lerp,be=aa(B.e,this.field);k>=1?(this.writeDensity(be,K,oe,1),this.commitEdit(B.e,B.record,we,X)):(this.writeDensity(be,K,oe,Po(k)),U=U?Bt(U,X):X,L.push(B))}else if(k>=1)this.finishEdit(B.e,B.record);else{const X=Ms(this.field,B.e,Po(k));U=U?Bt(U,X):X,L.push(B)}}this.anims=L,U&&e-this.lastAnimMesh>=AS?(this.lastAnimMesh=e,this.refresh(U)):U&&(this.animMoved=this.animMoved?Bt(this.animMoved,U):U),!this.anims.length&&this.animMoved&&(this.refresh(this.animMoved),this.animMoved=null)}this.profiler.mark("edits"),this.flushStaleBatches(e),this.lightStep(e),this.profiler.mark("light"),e-this.lastLod>400&&(this.updateLod(!1),this.lastLod=e),this.profiler.mark("lod"),this.renderer.render(e/1e3),this.profiler.mark("render"),this.frames++,e-this.fpsT>500&&(this.fps=this.frames*1e3/(e-this.fpsT),this.frames=0,this.fpsT=e);const _=this.brush;this.hud.setStatus(r.enabled?`${this.handEmpty?"empty hand":dn[_.matIndex].name} · ${_.shape} ${hi[_.sizeIndex]<.5?"⅙":hi[_.sizeIndex]} m · ${_.snap?"snap":"free"} · ${this.body.fly?"fly":this.body.swim?"swim":this.crouch?"duck":"walk"}`:`${this.handEmpty?"empty hand":dn[_.matIndex].name} · ${_.shape} ${hi[_.sizeIndex]<.5?"⅙":hi[_.sizeIndex]} m · tool: ${_.op==="sub"?"remove":_.op} · ${_.snap?"snap":"free"} · ${this.body.fly?"fly":this.body.swim?"swim":this.crouch?"duck":"walk"}${this.input.freeMouse?" · free mouse":""}${this.pickTarget?` · RMB removes the ${this.pickTarget.kind==="animal"?this.animals.find(L=>L.id===this.pickTarget.id)?.kind??"animal":this.pickTarget.kind==="water"?"water":bt[this.pickTarget.mat]?.name}`:""}${this.primeAim?" · the prime anchor holds the world":""}`);const R=Math.floor(this.time),P=Math.floor((this.time-R)*60);this.hud.setClock(`${String(R).padStart(2,"0")}:${String(P).padStart(2,"0")}${this.timePaused?" ⏸":""}`,this.time);const z=this.hit,O=this.pickTarget?.kind==="water"?` · aim water @${this.pickTarget.distance.toFixed(1)} m`:z?` · aim ${this.hitBody!==null?"body":z.hard?"block":"field"} ${bt[z.material]?.name??z.material} @${z.distance.toFixed(1)} m`:" · aim none";if(e-this.lastMass>2e3&&(this.lastMass=e,this.massText=this.massReadout()),this.hud.setDebug(`${this.fps.toFixed(0)} fps · ${(this.renderer.triangles/1e3).toFixed(0)}k tris · ${this.renderer.chunkCount} chunks · ${this.renderer.flames.count} flames · ${(this.renderer.scatter.count/1e3).toFixed(1)}k scatter · mesh q ${this.pool.queued} · ${this.renderer.fallingCount} falling · ${this.animals.length} animals · water ${this.flow.active} · ${this.massText} · ${this.body.pos.map(L=>L.toFixed(1)).join(", ")}${O}`),e-this.lastHash>2e3){this.lastHash=e;const L=this.stateString();L!==this.lastHashState&&(this.lastHashState=L,this.writeHash())}s.flush(),r.flush(),this.profiler.mark("hud"),this.profiler.end(e),this.ready=!0}profileLines(){const e=this.renderer,t=performance.memory,i=Object.entries(this.tuningDiff()).map(([s,r])=>`${s} ${r}`).join(", ");return[e.describe(),`quality ${this.quality} · foliage ${this.foliage} · sand ${this.sandOn?"on":"off"} · snow ${this.snowOn?"on":"off"} · animals ${this.animalsOn?"on":"off"} · edit ${this.editMs} ms · workers ${this.pool.size}${t?` · heap ${(t.usedJSHeapSize/1048576).toFixed(0)} of ${(t.jsHeapSizeLimit/1048576).toFixed(0)} MB`:""}`,`${this.renderer.memoryLine()} · undo ${this.undoStack.length} · journal ${this.edits.length} · bodies ${this.falling.length}`,`meshes asked in the last 5 s: ${this.meshWhyLine()}`,`${e.chunkCount} chunks · ${(e.triangles/1e3).toFixed(0)}k tris · ${(e.scatter.count/1e3).toFixed(1)}k scatter · ${e.flames.count} flames · mesh q ${this.pool.queued} · falling ${e.fallingCount} · animals ${this.animals.length} (${this.animalsParked} parked) · water ${e.water.chunks.size} chunks, ${this.flow.active} active, ${this.flow.parked} parked · sand ${this.sand.pending}/${this.sand.parked} · snow ${this.snow.pending}/${this.snow.parked} · slump ${this.snowSlump.pending}/${this.snowSlump.parked}`,`bubble ${this.tuning.bubble>0?`${this.tuning.bubble} m`:"everything"} · smoothing ${this.tuning.waterSmooth} s · tuning off defaults: ${i||"none"} · at ${this.body.pos.map(s=>s.toFixed(1)).join(", ")} · ${this.body.fly?"fly":this.body.swim?"swim":"walk"} · seed ${this.cfg.seed}`]}stateString(){const e=this.body.pos;return[e[0],e[1],e[2],this.input.yaw,this.input.pitch,this.time].map(t=>+t.toFixed(2)).join(",")}writeHash(){try{history.replaceState(null,"",location.pathname+location.search+"#v="+this.stateString())}catch{}}shareLink(){const e=new URLSearchParams(location.search);return e.set("seed",String(this.cfg.seed)),e.set("quality",this.quality),location.origin+location.pathname+"?"+e.toString()+"#v="+this.stateString()}scheduleSave(){clearTimeout(this.saveTimer),this.saveTimer=window.setTimeout(()=>void this.saveDirty(),600)}saveFailed=!1;async saveDirty(){if(!this.dirtySlabs.size)return;const e=[];for(const i of this.dirtySlabs){const[s,r,a]=er(i);e.push(Do(this.field,s,r,a))}this.dirtySlabs.clear();const t=await nu(this.cfg.seed,e);!t&&!this.saveFailed&&(this.saveFailed=!0,this.hud.say("save failed — this browser refused to store the world (full? private?)",6e3)),t&&(this.saveFailed=!1)}flushNow(){clearTimeout(this.saveTimer);for(const t of this.falling)if(t.blend&&!t.blend.final){t.blend.final=!0,Kr(this.field,t.frag,t.blend.box,t.blend.pre,0,0);const i=Uh(this.field,t.frag);for(const[s,r,a]of qt(i,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(s,r,a));t.cooking={keys:[],versions:[]}}const e=this.falling.filter(t=>!t.cooking&&!t.blend).map(t=>zh(t.frag));bo(this.cfg.seed,e),tu(this.cfg.seed,this.animals.map(jh)),this.saveDirty()}settleLoose(){const e=this.support.dropLoose();for(const t of e.fragments)this.launch(t);if(e.changed){for(const[t,i,s]of qt(e.changed,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(st(t,i,s));this.scheduleSave()}e.fragments.length&&this.hud.say(`${e.fragments.length} loose thing${e.fragments.length===1?"":"s"} had no anchor and fell`),e.held&&this.hud.say(`${e.held} thing${e.held===1?"":"s"} too vast to fall stand${e.held===1?"s":""} without an anchor`)}resumeBodies(){const e=this.world?.bodies;if(e?.length){for(const t of e)try{this.launch(ux(t))}catch{}this.world.bodies=[],bo(this.cfg.seed,[])}}undo(){this.why="undo";const e=this.undoStack.pop();if(!e){this.hud.say("nothing to undo");return}for(const t of this.falling)t.blend&&this.undry(t);this.edits.pop();for(const t of e){Mu(this.field,t),this.support.afterEdit({x0:t.cx*re,y0:t.cy*re,z0:t.cz*re,x1:t.cx*re+re,y1:t.cy*re+re,z1:t.cz*re+re}),this.sandOn&&this.sand.wake({x0:t.cx*re,y0:t.cy*re,z0:t.cz*re,x1:t.cx*re+re,y1:t.cy*re+re,z1:t.cz*re+re}),this.snowOn&&this.snow.wake({x0:t.cx*re,y0:t.cy*re,z0:t.cz*re,x1:t.cx*re+re,y1:t.cy*re+re,z1:t.cz*re+re});const i=st(t.cx,t.cy,t.cz);this.dirtySlabs.add(i);for(const[s,r,a]of Zn({x0:t.cx*re,y0:t.cy*re,z0:t.cz*re,x1:t.cx*re+re,y1:t.cy*re+re,z1:t.cz*re+re},re,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.requestMesh(s,r,a),this.lightDirty.add(st(s,r,a))}this.markWater(null),this.scheduleSave(),this.hud.say("undo")}setView(e,t,i,s,r){this.body.pos[0]=e,this.body.pos[1]=t-vi,this.body.pos[2]=i,this.body.vel[0]=this.body.vel[1]=this.body.vel[2]=0,this.body.fly=!0,this.input.yaw=s,this.input.pitch=r,this.lastLod=0}setTime(e){this.time=e}}const yS=.4,wS=2e3,SS=1.05,AS=60,_S=3e3,ES=3,wu=6,Su=140,Io=["add","sub","smooth","paint"],Au=2.4,_u=1.7,bS=300,TS=8,xs=6,CS=160,Eu=.4;function Po(n){const e=1-Math.min(1,Math.max(0,n));return 1-e*e*e}function bu(n){return n==="cube"?"slab":n==="slab"?"wall":n==="wall"?"roof":n==="roof"?"ramp":n==="ramp"?"sphere":"cube"}function er(n){const e=n%1024,t=Math.floor(n/1024)%1024;return[Math.floor(n/1048576),t,e]}function pi(){return new Promise(n=>requestAnimationFrame(()=>n()))}function aa(n,e){const t=n.size*.5+2;return{x0:Math.max(0,Math.floor((n.x-t)/C)),y0:Math.max(0,Math.floor((n.y-t)/C)),z0:Math.max(0,Math.floor((n.z-t)/C)),x1:Math.min(e.nx-1,Math.ceil((n.x+t)/C)),y1:Math.min(e.ny-1,Math.ceil((n.y+t)/C)),z1:Math.min(e.nz-1,Math.ceil((n.z+t)/C))}}function Bt(n,e){return{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}}function DS(n){const e=/#v=([-\d.,]+)/.exec(n);if(!e)return;const t=e[1].split(",").map(Number);return t.length>=5&&t.every(i=>Number.isFinite(i))?t:void 0}async function RS(){const n=new URLSearchParams(location.search),e=Bf(),t=n.get("test")==="1";n.get("debug")==="1"&&document.body.classList.add("debug");const i=n.get("seed")??n.get("world"),s=i!==null?Lf(i):e.seed??1337,r=n.get("quality")||e.quality||"medium",a={seed:s,quality:r,test:t,chunks:(await uM(s))?.chunks??(n.get("chunks")?Math.max(2,Math.min(24,Number(n.get("chunks")))):void 0),time:n.get("time")?Number(n.get("time")):void 0,cheapGi:n.get("gi")==="cheap"?!0:n.get("gi")==="full"?!1:void 0,giMode:n.get("gi")==="cone"?"cone":n.get("gi")==="sh"?"sh":void 0,post:n.has("post")?Math.max(0,Math.min(2,Number(n.get("post")))):void 0,volumetric:n.get("vol")==="0"?!1:void 0,caustic:n.get("caustic")==="0"?!1:void 0,iceDebug:n.has("icedebug")?Number(n.get("icedebug")):void 0,shader:["full","lite","basic"].find(u=>u===n.get("shader")),giDiv:n.has("gidiv")?Math.max(1,Math.min(4,Number(n.get("gidiv")))):void 0,view:DS(location.hash),foliage:n.has("foliage")?Math.max(0,Math.min(8,Number(n.get("foliage")))):e.foliage,fall:n.has("fall")?Math.max(1,Math.min(60,Number(n.get("fall")))):e.fall,animals:n.has("animals")?n.get("animals")!=="0":e.animals,sand:n.has("sand")?n.get("sand")!=="0":e.sand,snow:n.has("snow")?n.get("snow")!=="0":e.snow,tuning:e.tuning,edit:n.has("edit")?Math.max(60,Math.min(2e3,Number(n.get("edit")))):e.edit};Sn({seed:s,quality:r});const o=document.getElementById("view"),l=new cS;window.addEventListener("error",u=>l.showError("error: "+(u.message??"").slice(0,160)));const c=await mc.create(o,a,l);l.hideLoading(),t||c.showMenu(),window.__splinecraft={game:c,ready:()=>c.ready&&c.pendingMeshes===0,setView:c.setView.bind(c),setTime:c.setTime.bind(c),edit:c.applyEdit.bind(c),ground:(u,f)=>Ps(c.field,u,f),state:()=>c.stateString()};const h=u=>{c.frame(u),requestAnimationFrame(h)};requestAnimationFrame(h)}RS().catch(n=>{console.error(n);const e=document.getElementById("loading-text");e&&(e.textContent="failed to start: "+(n instanceof Error?n.message:String(n)))});
