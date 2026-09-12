(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ni="180",Zu=0,Hc=1,ju=2,Ih=1,Ph=2,Hn=3,Ln=0,Rt=1,Gt=2,Pt=0,ls=1,Kr=2,Vc=3,Wc=4,Ju=5,bi=100,$u=101,ed=102,td=103,nd=104,id=200,sd=201,rd=202,ad=203,lo=204,ho=205,od=206,cd=207,ld=208,hd=209,ud=210,dd=211,fd=212,pd=213,md=214,uo=0,Zr=1,fo=2,us=3,po=4,mo=5,go=6,vo=7,Lh=0,gd=1,vd=2,Wn=0,xd=1,Md=2,yd=3,Sd=4,Ad=5,_d=6,wd=7,Bh=300,ds=301,fs=302,xo=303,Mo=304,oa=306,Ws=1e3,Dn=1001,yo=1002,Mt=1003,Ed=1004,tr=1005,tt=1006,va=1007,Rn=1008,yt=1009,Uh=1010,Nh=1011,Xs=1012,lc=1013,Ri=1014,tn=1015,An=1016,hc=1017,uc=1018,ps=1020,Fh=35902,zh=35899,Oh=1021,kh=1022,Ft=1023,Ys=1026,ms=1027,hi=1028,dc=1029,fc=1030,pc=1031,mc=1033,Hr=33776,Vr=33777,Wr=33778,Xr=33779,So=35840,Ao=35841,_o=35842,wo=35843,Eo=36196,To=37492,bo=37496,Co=37808,Do=37809,Ro=37810,Io=37811,Po=37812,Lo=37813,Bo=37814,Uo=37815,No=37816,Fo=37817,zo=37818,Oo=37819,ko=37820,Go=37821,Ho=36492,Vo=36494,Wo=36495,Xo=36283,Yo=36284,qo=36285,Qo=36286,_n=3200,Gh=3201,gc=0,Td=1,on="",st="srgb",ui="srgb-linear",jr="linear",lt="srgb",ki=7680,Xc=519,bd=512,Cd=513,Dd=514,Hh=515,Rd=516,Id=517,Pd=518,Ld=519,Yc=35044,Jr="300 es",In=2e3,$r=2001;class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xa=Math.PI/180,Ko=180/Math.PI;function js(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function Bd(n,e){return(n%e+e)%e}function Ma(n,e,t){return(1-t)*n+t*e}function ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ii{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3];const d=r[a+0],u=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=u,e[t+2]=g,e[t+3]=v;return}if(f!==v||c!==d||l!==u||h!==g){let m=1-o;const p=c*d+l*u+h*g+f*v,A=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),_=Math.atan2(E,p*A);m=Math.sin(m*_)/E,o=Math.sin(o*_)/E}const y=o*A;if(c=c*m+d*y,l=l*m+u*y,h=h*m+g*y,f=f*m+v*y,m===1-o){const E=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=E,l*=E,h*=E,f*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return e[t]=o*g+h*f+c*u-l*d,e[t+1]=c*g+h*d+l*f-o*u,e[t+2]=l*g+h*u+o*d-c*f,e[t+3]=h*g-o*f-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),f=o(r/2),d=c(i/2),u=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"YZX":this._x=d*h*f+l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f-d*u*g;break;case"XZY":this._x=d*h*f-l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=i+o+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(i>o&&i>f){const u=2*Math.sqrt(1+i-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>f){const u=2*Math.sqrt(1+o-i-f);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+f-i-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const u=1-t;return this._w=u*a+t*this._w,this._x=u*i+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+c*l+a*f-o*h,this.y=i+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new k,qc=new Ii;class Xe{constructor(e,t,i,s,r,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],d=i[2],u=i[5],g=i[8],v=s[0],m=s[3],p=s[6],A=s[1],x=s[4],y=s[7],E=s[2],_=s[5],w=s[8];return r[0]=a*v+o*A+c*E,r[3]=a*m+o*x+c*_,r[6]=a*p+o*y+c*w,r[1]=l*v+h*A+f*E,r[4]=l*m+h*x+f*_,r[7]=l*p+h*y+f*w,r[2]=d*v+u*A+g*E,r[5]=d*m+u*x+g*_,r[8]=d*p+u*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,d=o*c-h*r,u=l*r-a*c,g=t*f+i*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*l-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=u*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new Xe;function Vh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ud(){const n=ea("canvas");return n.style.display="block",n}const Qc={};function qs(n){n in Qc||(Qc[n]=!0,console.warn(n))}function Nd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Kc=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fd(){const n={enabled:!0,workingColorSpace:ui,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===on?jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ui]:{primaries:e,whitePoint:i,transfer:jr,toXYZ:Kc,fromXYZ:Zc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:st},outputColorSpaceConfig:{drawingBufferColorSpace:st}},[st]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Kc,fromXYZ:Zc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:st}}}),n}const $e=Fd();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gi;class zd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gi===void 0&&(Gi=ea("canvas")),Gi.width=e.width,Gi.height=e.height;const s=Gi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Gi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xn(t[i]/255)*255):t[i]=Xn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Od=0;class vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Aa(s[a].image)):r.push(Aa(s[a]))}else r=Aa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kd=0;const _a=new k;class Lt extends qn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Dn,s=Dn,r=tt,a=Rn,o=Ft,c=yt,l=Lt.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=js(),this.name="",this.source=new vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Bh;Lt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(u+1)/2,E=(p+1)/2,_=(h+d)/4,w=(f+v)/4,T=(g+m)/4;return x>y&&x>E?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=_/i,r=w/i):y>E?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=_/s,r=T/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=w/r,s=T/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-v)/A,this.z=(d-h)/A,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gd extends qn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Lt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new vc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class at extends Gd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xc extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ta extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hd extends at{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new ta(null,e,t,i),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class Fi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nr.copy(i.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),ir.subVectors(this.max,Es),Hi.subVectors(e.a,Es),Vi.subVectors(e.b,Es),Wi.subVectors(e.c,Es),Zn.subVectors(Vi,Hi),jn.subVectors(Wi,Vi),gi.subVectors(Hi,Wi);let t=[0,-Zn.z,Zn.y,0,-jn.z,jn.y,0,-gi.z,gi.y,Zn.z,0,-Zn.x,jn.z,0,-jn.x,gi.z,0,-gi.x,-Zn.y,Zn.x,0,-jn.y,jn.x,0,-gi.y,gi.x,0];return!wa(t,Hi,Vi,Wi,ir)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,Hi,Vi,Wi,ir))?!1:(sr.crossVectors(Zn,jn),t=[sr.x,sr.y,sr.z],wa(t,Hi,Vi,Wi,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new k,new k,new k,new k,new k,new k,new k,new k],mn=new k,nr=new Fi,Hi=new k,Vi=new k,Wi=new k,Zn=new k,jn=new k,gi=new k,Es=new k,ir=new k,sr=new k,vi=new k;function wa(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){vi.fromArray(n,r);const o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),h=i.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Vd=new Fi,Ts=new k,Ea=new k;class fi{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ts,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(Ea)),this.expandByPoint(Ts.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new k,Ta=new k,rr=new k,Jn=new k,ba=new k,ar=new k,Ca=new k;class Wh{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ta.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Ta);const r=e.distanceTo(t)*.5,a=-this.direction.dot(rr),o=Jn.dot(this.direction),c=-Jn.dot(rr),l=Jn.lengthSq(),h=Math.abs(1-a*a);let f,d,u,g;if(h>0)if(f=a*c-o,d=a*o-c,g=r*h,f>=0)if(d>=-g)if(d<=g){const v=1/h;f*=v,d*=v,u=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ta).addScaledVector(rr,d),u}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),s=zn.dot(zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,s,r){ba.subVectors(t,e),ar.subVectors(i,e),Ca.crossVectors(ba,ar);let a=this.direction.dot(Ca),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const c=o*this.direction.dot(ar.crossVectors(Jn,ar));if(c<0)return null;const l=o*this.direction.dot(ba.cross(Jn));if(l<0||c+l>a)return null;const h=-o*Jn.dot(Ca);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,i,s,r,a,o,c,l,h,f,d,u,g,v,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,f,d,u,g,v,m)}set(e,t,i,s,r,a,o,c,l,h,f,d,u,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),r=1/Xi.setFromMatrixColumn(e,1).length(),a=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*h,u=a*f,g=o*h,v=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=u+g*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=g+u*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,u=c*f,g=l*h,v=l*f;t[0]=d+v*o,t[4]=g*o-u,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=u*o-g,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,u=c*f,g=l*h,v=l*f;t[0]=d-v*o,t[4]=-a*f,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,u=a*f,g=o*h,v=o*f;t[0]=c*h,t[4]=g*l-u,t[8]=d*l+v,t[1]=c*f,t[5]=v*l+d,t[9]=u*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,u=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-d*f,t[8]=g*f+u,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*c,u=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+v,t[5]=a*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=o*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wd,e,Xd)}lookAt(e,t,i){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),$n.crossVectors(i,rn),$n.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),$n.crossVectors(i,rn)),$n.normalize(),or.crossVectors(rn,$n),s[0]=$n.x,s[4]=or.x,s[8]=rn.x,s[1]=$n.y,s[5]=or.y,s[9]=rn.y,s[2]=$n.z,s[6]=or.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],d=i[9],u=i[13],g=i[2],v=i[6],m=i[10],p=i[14],A=i[3],x=i[7],y=i[11],E=i[15],_=s[0],w=s[4],T=s[8],M=s[12],S=s[1],C=s[5],I=s[9],L=s[13],z=s[2],G=s[6],B=s[10],U=s[14],N=s[3],X=s[7],J=s[11],ae=s[15];return r[0]=a*_+o*S+c*z+l*N,r[4]=a*w+o*C+c*G+l*X,r[8]=a*T+o*I+c*B+l*J,r[12]=a*M+o*L+c*U+l*ae,r[1]=h*_+f*S+d*z+u*N,r[5]=h*w+f*C+d*G+u*X,r[9]=h*T+f*I+d*B+u*J,r[13]=h*M+f*L+d*U+u*ae,r[2]=g*_+v*S+m*z+p*N,r[6]=g*w+v*C+m*G+p*X,r[10]=g*T+v*I+m*B+p*J,r[14]=g*M+v*L+m*U+p*ae,r[3]=A*_+x*S+y*z+E*N,r[7]=A*w+x*C+y*G+E*X,r[11]=A*T+x*I+y*B+E*J,r[15]=A*M+x*L+y*U+E*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*f-s*l*f-r*o*d+i*l*d+s*o*u-i*c*u)+v*(+t*c*u-t*l*d+r*a*d-s*a*u+s*l*h-r*c*h)+m*(+t*l*f-t*o*u-r*a*f+i*a*u+r*o*h-i*l*h)+p*(-s*o*h-t*c*f+t*o*d+s*a*f-i*a*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],v=e[13],m=e[14],p=e[15],A=f*m*l-v*d*l+v*c*u-o*m*u-f*c*p+o*d*p,x=g*d*l-h*m*l-g*c*u+a*m*u+h*c*p-a*d*p,y=h*v*l-g*f*l+g*o*u-a*v*u-h*o*p+a*f*p,E=g*f*c-h*v*c-g*o*d+a*v*d+h*o*m-a*f*m,_=t*A+i*x+s*y+r*E;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/_;return e[0]=A*w,e[1]=(v*d*r-f*m*r-v*s*u+i*m*u+f*s*p-i*d*p)*w,e[2]=(o*m*r-v*c*r+v*s*l-i*m*l-o*s*p+i*c*p)*w,e[3]=(f*c*r-o*d*r-f*s*l+i*d*l+o*s*u-i*c*u)*w,e[4]=x*w,e[5]=(h*m*r-g*d*r+g*s*u-t*m*u-h*s*p+t*d*p)*w,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*w,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*u+t*c*u)*w,e[8]=y*w,e[9]=(g*f*r-h*v*r-g*i*u+t*v*u+h*i*p-t*f*p)*w,e[10]=(a*v*r-g*o*r+g*i*l-t*v*l-a*i*p+t*o*p)*w,e[11]=(h*o*r-a*f*r-h*i*l+t*f*l+a*i*u-t*o*u)*w,e[12]=E*w,e[13]=(h*v*s-g*f*s+g*i*d-t*v*d-h*i*m+t*f*m)*w,e[14]=(g*o*s-a*v*s-g*i*c+t*v*c+a*i*m-t*o*m)*w,e[15]=(a*f*s-h*o*s+h*i*c-t*f*c-a*i*d+t*o*d)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,d=r*l,u=r*h,g=r*f,v=a*h,m=a*f,p=o*f,A=c*l,x=c*h,y=c*f,E=i.x,_=i.y,w=i.z;return s[0]=(1-(v+p))*E,s[1]=(u+y)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(u-y)*_,s[5]=(1-(d+p))*_,s[6]=(m+A)*_,s[7]=0,s[8]=(g+x)*w,s[9]=(m-A)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Xi.set(s[0],s[1],s[2]).length();const a=Xi.set(s[4],s[5],s[6]).length(),o=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gn.copy(this);const l=1/r,h=1/a,f=1/o;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,t.setFromRotationMatrix(gn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=In,c=!1){const l=this.elements,h=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s);let g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===In)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===$r)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=In,c=!1){const l=this.elements,h=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),u=-(i+s)/(i-s);let g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===In)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===$r)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xi=new k,gn=new Ke,Wd=new k(0,0,0),Xd=new k(1,1,1),$n=new k,or=new k,rn=new k,jc=new Ke,Jc=new Ii;class Bn{constructor(e=0,t=0,i=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yd=0;const $c=new k,Yi=new Ii,On=new Ke,cr=new k,bs=new k,qd=new k,Qd=new Ii,el=new k(1,0,0),tl=new k(0,1,0),nl=new k(0,0,1),il={type:"added"},Kd={type:"removed"},qi={type:"childadded",child:null},Da={type:"childremoved",child:null};class zt extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new k,t=new Bn,i=new Ii,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Xe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(el,e)}rotateY(e){return this.rotateOnAxis(tl,e)}rotateZ(e){return this.rotateOnAxis(nl,e)}translateOnAxis(e,t){return $c.copy(e).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(el,e)}translateY(e){return this.translateOnAxis(tl,e)}translateZ(e){return this.translateOnAxis(nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cr.copy(e):cr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(bs,cr,this.up):On.lookAt(cr,bs,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(On),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(il),qi.child=e,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kd),Da.child=e,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(il),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Qd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}zt.DEFAULT_UP=new k(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new k,kn=new k,Ra=new k,Gn=new k,Qi=new k,Ki=new k,sl=new k,Ia=new k,Pa=new k,La=new k,Ba=new mt,Ua=new mt,Na=new mt;class Mn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),kn.subVectors(i,t),Ra.subVectors(e,t);const a=vn.dot(vn),o=vn.dot(kn),c=vn.dot(Ra),l=kn.dot(kn),h=kn.dot(Ra),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,u=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-u-g,g,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ba.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Ba.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,i),Na.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ba,r.x),a.addScaledVector(Ua,r.y),a.addScaledVector(Na,r.z),a}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),kn.subVectors(e,t),vn.cross(kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),vn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Qi.subVectors(s,i),Ki.subVectors(r,i),Ia.subVectors(e,i);const c=Qi.dot(Ia),l=Ki.dot(Ia);if(c<=0&&l<=0)return t.copy(i);Pa.subVectors(e,s);const h=Qi.dot(Pa),f=Ki.dot(Pa);if(h>=0&&f<=h)return t.copy(s);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Qi,a);La.subVectors(e,r);const u=Qi.dot(La),g=Ki.dot(La);if(g>=0&&u<=g)return t.copy(r);const v=u*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Ki,o);const m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return sl.subVectors(r,s),o=(f-h)/(f-h+(u-g)),t.copy(s).addScaledVector(sl,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(i).addScaledVector(Qi,a).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},lr={h:0,s:0,l:0};function Fa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=Bd(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Fa(a,r,e+1/3),this.g=Fa(a,r,e),this.b=Fa(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=st){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){const i=Yh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return $e.workingToColorSpace(Wt.copy(this),e),Math.round(je(Wt.r*255,0,255))*65536+Math.round(je(Wt.g*255,0,255))*256+Math.round(je(Wt.b*255,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Wt.copy(this),t);const i=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=st){$e.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,s=Wt.b;return e!==st?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(lr);const i=Ma(ei.h,lr.h,t),s=Ma(ei.s,lr.s,t),r=Ma(ei.l,lr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ye;Ye.NAMES=Yh;let Zd=0;class Qn extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=js(),this.name="",this.type="Material",this.blending=ls,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=ho,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==Ln&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lo&&(i.blendSrc=this.blendSrc),this.blendDst!==ho&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qh extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new k,hr=new me;let jd=0;class Ze{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yc,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yc&&(e.usage=this.usage),e}}class Qh extends Ze{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kh extends Ze{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class cn extends Ze{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jd=0;const un=new Ke,za=new zt,Zi=new k,an=new Fi,Cs=new Fi,Nt=new k;class Ht extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vh(e)?Kh:Qh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(an.min,Cs.min),an.expandByPoint(Nt),Nt.addVectors(an.max,Cs.max),an.expandByPoint(Nt)):(an.expandByPoint(Cs.min),an.expandByPoint(Cs.max))}an.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Nt.fromBufferAttribute(o,l),c&&(Zi.fromBufferAttribute(e,l),Nt.add(Zi)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let T=0;T<i.count;T++)o[T]=new k,c[T]=new k;const l=new k,h=new k,f=new k,d=new me,u=new me,g=new me,v=new k,m=new k;function p(T,M,S){l.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),d.fromBufferAttribute(r,T),u.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(l),f.sub(l),u.sub(d),g.sub(d);const C=1/(u.x*g.y-g.x*u.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(C),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(C),o[T].add(v),o[M].add(v),o[S].add(v),c[T].add(m),c[M].add(m),c[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let T=0,M=A.length;T<M;++T){const S=A[T],C=S.start,I=S.count;for(let L=C,z=C+I;L<z;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const x=new k,y=new k,E=new k,_=new k;function w(T){E.fromBufferAttribute(s,T),_.copy(E);const M=o[T];x.copy(M),x.sub(E.multiplyScalar(E.dot(M))).normalize(),y.crossVectors(_,M);const C=y.dot(c[T])<0?-1:1;a.setXYZW(T,x.x,x.y,x.z,C)}for(let T=0,M=A.length;T<M;++T){const S=A[T],C=S.start,I=S.count;for(let L=C,z=C+I;L<z;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);const s=new k,r=new k,a=new k,o=new k,c=new k,l=new k,h=new k,f=new k;if(e)for(let d=0,u=e.count;d<u;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let u=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?u=c[v]*o.data.stride+o.offset:u=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[u++]}return new Ze(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],u=e(d,i);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const u=l[f];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rl=new Ke,xi=new Wh,ur=new fi,al=new k,dr=new k,fr=new k,pr=new k,Oa=new k,mr=new k,ol=new k,gr=new k;class vt extends zt{constructor(e=new Ht,t=new qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){mr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],f=r[c];h!==0&&(Oa.fromBufferAttribute(f,e),a?mr.addScaledVector(Oa,h):mr.addScaledVector(Oa.sub(t),h))}t.add(mr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(r),xi.copy(e.ray).recast(e.near),!(ur.containsPoint(xi.origin)===!1&&(xi.intersectSphere(ur,al)===null||xi.origin.distanceToSquared(al)>(e.far-e.near)**2))&&(rl.copy(r).invert(),xi.copy(e.ray).applyMatrix4(rl),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],A=Math.max(m.start,u.start),x=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let y=A,E=x;y<E;y+=3){const _=o.getX(y),w=o.getX(y+1),T=o.getX(y+2);s=vr(this,p,e,i,l,h,f,_,w,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const A=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=vr(this,a,e,i,l,h,f,A,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],A=Math.max(m.start,u.start),x=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let y=A,E=x;y<E;y+=3){const _=y,w=y+1,T=y+2;s=vr(this,p,e,i,l,h,f,_,w,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const A=m,x=m+1,y=m+2;s=vr(this,a,e,i,l,h,f,A,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function $d(n,e,t,i,s,r,a,o){let c;if(e.side===Rt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Ln,o),c===null)return null;gr.copy(o),gr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(gr);return l<t.near||l>t.far?null:{distance:l,point:gr.clone(),object:n}}function vr(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,dr),n.getVertexPosition(c,fr),n.getVertexPosition(l,pr);const h=$d(n,e,t,i,dr,fr,pr,ol);if(h){const f=new k;Mn.getBarycoord(ol,dr,fr,pr,f),s&&(h.uv=Mn.getInterpolatedAttribute(s,o,c,l,f,new me)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,o,c,l,f,new me)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,c,l,f,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new k,materialIndex:0};Mn.getNormal(dr,fr,pr,d.normal),h.face=d,h.barycoord=f}return h}class Pi extends Ht{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],f=[];let d=0,u=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(f,2));function g(v,m,p,A,x,y,E,_,w,T,M){const S=y/w,C=E/T,I=y/2,L=E/2,z=_/2,G=w+1,B=T+1;let U=0,N=0;const X=new k;for(let J=0;J<B;J++){const ae=J*C-L;for(let xe=0;xe<G;xe++){const Be=xe*S-I;X[v]=Be*A,X[m]=ae*x,X[p]=z,l.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=_>0?1:-1,h.push(X.x,X.y,X.z),f.push(xe/w),f.push(1-J/T),U+=1}}for(let J=0;J<T;J++)for(let ae=0;ae<w;ae++){const xe=d+ae+G*J,Be=d+ae+G*(J+1),ze=d+(ae+1)+G*(J+1),Pe=d+(ae+1)+G*J;c.push(xe,Be,Pe),c.push(Be,ze,Pe),N+=6}o.addGroup(u,N,M),u+=N,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qt(n){const e={};for(let t=0;t<n.length;t++){const i=gs(n[t]);for(const s in i)e[s]=i[s]}return e}function ef(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const tf={clone:gs,merge:Qt};var nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rt extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nf,this.fragmentShader=sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=ef(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jh extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new k,cl=new me,ll=new me;class Kt extends jh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,cl,ll),t.subVectors(ll,cl)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Ji=1;class rf extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(ji,Ji,e,t);s.layers=this.layers,this.add(s);const r=new Kt(ji,Ji,e,t);r.layers=this.layers,this.add(r);const a=new Kt(ji,Ji,e,t);a.layers=this.layers,this.add(a);const o=new Kt(ji,Ji,e,t);o.layers=this.layers,this.add(o);const c=new Kt(ji,Ji,e,t);c.layers=this.layers,this.add(c);const l=new Kt(ji,Ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$r)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Jh extends Lt{constructor(e=[],t=ds,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class af extends at{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Jh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pi(5,5,5),r=new rt({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Pt});r.uniforms.tEquirect.value=t;const a=new vt(s,r),o=t.minFilter;return t.minFilter===Rn&&(t.minFilter=tt),new rf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class oi extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const of={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&d>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(of)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new oi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Mc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new Mc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Li extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class na extends Lt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Mt,h=Mt,f,d){super(null,a,o,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li extends Ze{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $i=new Ke,hl=new Ke,xr=[],ul=new Fi,cf=new Ke,Ds=new vt,Rs=new fi;class lf extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new li(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,cf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$i),ul.copy(e.boundingBox).applyMatrix4($i),this.boundingBox.union(ul)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$i),Rs.copy(e.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(i),e.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),hl.multiplyMatrices(i,$i),Ds.matrixWorld=hl,Ds.raycast(e,xr);for(let a=0,o=xr.length;a<o;a++){const c=xr[a];c.instanceId=r,c.object=this,t.push(c)}xr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new li(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new na(new Float32Array(s*this.count),s,this.count,hi,tn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ga=new k,hf=new k,uf=new Xe;class ri{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ga.subVectors(i,t).cross(hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ga),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uf.getNormalMatrix(e),s=this.coplanarPoint(Ga).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new fi,df=new me(.5,.5),Mr=new k;class Js{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,a=new ri){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],g=r[8],v=r[9],m=r[10],p=r[11],A=r[12],x=r[13],y=r[14],E=r[15];if(s[0].setComponents(l-a,u-h,p-g,E-A).normalize(),s[1].setComponents(l+a,u+h,p+g,E+A).normalize(),s[2].setComponents(l+o,u+f,p+v,E+x).normalize(),s[3].setComponents(l-o,u-f,p-v,E-x).normalize(),i)s[4].setComponents(c,d,m,y).normalize(),s[5].setComponents(l-c,u-d,p-m,E-y).normalize();else if(s[4].setComponents(l-c,u-d,p-m,E-y).normalize(),t===In)s[5].setComponents(l+c,u+d,p+m,E+y).normalize();else if(t===$r)s[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=df.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Mr.x=s.normal.x>0?e.max.x:e.min.x,Mr.y=s.normal.y>0?e.max.y:e.min.y,Mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ff extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dl=new Ke,Zo=new Wh,yr=new fi,Sr=new k;class pf extends zt{constructor(e=new Ht,t=new ff){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,e.ray.intersectsSphere(yr)===!1)return;dl.copy(s).invert(),Zo.copy(e.ray).applyMatrix4(dl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let g=d,v=u;g<v;g++){const m=l.getX(g);Sr.fromBufferAttribute(f,m),fl(Sr,m,c,s,e,t,this)}}else{const d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let g=d,v=u;g<v;g++)Sr.fromBufferAttribute(f,g),fl(Sr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fl(n,e,t,i,s,r,a){const o=Zo.distanceSqToPoint(n);if(o<t){const c=new k;Zo.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ca extends Lt{constructor(e,t,i=Ri,s,r,a,o=Mt,c=Mt,l,h=Ys,f=1){if(h!==Ys&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $h extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Un extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,f=e/o,d=t/c,u=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const A=p*d-a;for(let x=0;x<l;x++){const y=x*f-r;g.push(y,-A,0),v.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<o;A++){const x=A+l*p,y=A+l*(p+1),E=A+1+l*(p+1),_=A+1+l*p;u.push(x,y,_),u.push(y,E,_)}this.setIndex(u),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}class yc extends Ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new k,d=new k,u=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const A=[],x=p/i;let y=0;p===0&&a===0?y=.5/t:p===i&&c===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const _=E/t;f.x=-e*Math.cos(s+_*r)*Math.sin(a+x*o),f.y=e*Math.cos(a+x*o),f.z=e*Math.sin(s+_*r)*Math.sin(a+x*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(_+y,1-x),A.push(l++)}h.push(A)}for(let p=0;p<i;p++)for(let A=0;A<t;A++){const x=h[p][A+1],y=h[p][A],E=h[p+1][A],_=h[p+1][A+1];(p!==0||a>0)&&u.push(x,y,_),(p!==i-1||c<Math.PI)&&u.push(y,E,_)}this.setIndex(u),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pl extends rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ia extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mf extends Qn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class eu extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_n,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gf extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vf{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){const u=l[f],g=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}class tu extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ha=new Ke,ml=new k,gl=new k;class xf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=yt,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(ml),gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gl),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ss extends jh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mf extends xf{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yf extends tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Mf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sf extends tu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Af extends Ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class _f extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ce{constructor(e){this.value=e}clone(){return new ce(this.value.clone===void 0?this.value:this.value.clone())}}function vl(n,e,t,i){const s=wf(i);switch(t){case Oh:return n*e;case hi:return n*e/s.components*s.byteLength;case dc:return n*e/s.components*s.byteLength;case fc:return n*e*2/s.components*s.byteLength;case pc:return n*e*2/s.components*s.byteLength;case kh:return n*e*3/s.components*s.byteLength;case Ft:return n*e*4/s.components*s.byteLength;case mc:return n*e*4/s.components*s.byteLength;case Hr:case Vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wr:case Xr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ao:case wo:return Math.max(n,16)*Math.max(e,8)/4;case So:case _o:return Math.max(n,8)*Math.max(e,8)/2;case Eo:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Do:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Io:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case No:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ko:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Go:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ho:case Vo:case Wo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xo:case Yo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case qo:case Qo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wf(n){switch(n){case yt:case Uh:return{byteLength:1,components:1};case Xs:case Nh:case An:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case Ri:case lc:case tn:return{byteLength:4,components:1};case Fh:case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ni}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ni);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nu(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ef(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=n.SHORT;else if(l instanceof Uint32Array)u=n.UNSIGNED_INT;else if(l instanceof Int32Array)u=n.INT;else if(l instanceof Int8Array)u=n.BYTE;else if(l instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){const g=f[d],v=f[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){const v=f[u];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bf=`#ifdef USE_ALPHAHASH
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
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pf=`#ifdef USE_AOMAP
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
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bf=`#ifdef USE_BATCHING
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
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Of=`#ifdef USE_IRIDESCENCE
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
#endif`,kf=`#ifdef USE_BUMPMAP
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kf=`#define PI 3.141592653589793
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
} // validated`,Zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
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
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vp=`uniform bool receiveShadow;
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
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
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
#endif`,wp=`struct PhysicalMaterial {
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
}`,Ep=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Up=`#if defined( USE_POINTS_UV )
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
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hm=`float getShadowMask() {
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
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
}`,Pm=`#if DEPTH_PACKING == 3200
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
}`,Lm=`#define DISTANCE
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
}`,Bm=`#define DISTANCE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,km=`uniform vec3 diffuse;
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
}`,Gm=`#define LAMBERT
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
}`,Hm=`#define LAMBERT
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
}`,Vm=`#define MATCAP
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define NORMAL
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
}`,Ym=`#define NORMAL
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
}`,qm=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,Km=`#define STANDARD
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
}`,Zm=`#define STANDARD
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
}`,jm=`#define TOON
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
}`,Jm=`#define TOON
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
}`,$m=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,sg=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Tf,alphahash_pars_fragment:bf,alphamap_fragment:Cf,alphamap_pars_fragment:Df,alphatest_fragment:Rf,alphatest_pars_fragment:If,aomap_fragment:Pf,aomap_pars_fragment:Lf,batching_pars_vertex:Bf,batching_vertex:Uf,begin_vertex:Nf,beginnormal_vertex:Ff,bsdfs:zf,iridescence_fragment:Of,bumpmap_pars_fragment:kf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Hf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:Yf,color_pars_vertex:qf,color_vertex:Qf,common:Kf,cube_uv_reflection_fragment:Zf,defaultnormal_vertex:jf,displacementmap_pars_vertex:Jf,displacementmap_vertex:$f,emissivemap_fragment:ep,emissivemap_pars_fragment:tp,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:sp,envmap_common_pars_fragment:rp,envmap_pars_fragment:ap,envmap_pars_vertex:op,envmap_physical_pars_fragment:xp,envmap_vertex:cp,fog_vertex:lp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:dp,gradientmap_pars_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:vp,lights_toon_fragment:Mp,lights_toon_pars_fragment:yp,lights_phong_fragment:Sp,lights_phong_pars_fragment:Ap,lights_physical_fragment:_p,lights_physical_pars_fragment:wp,lights_fragment_begin:Ep,lights_fragment_maps:Tp,lights_fragment_end:bp,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Dp,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Ip,map_fragment:Pp,map_pars_fragment:Lp,map_particle_fragment:Bp,map_particle_pars_fragment:Up,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Fp,morphinstance_vertex:zp,morphcolor_vertex:Op,morphnormal_vertex:kp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Hp,normal_fragment_begin:Vp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:Yp,normal_vertex:qp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:jp,iridescence_pars_fragment:Jp,opaque_fragment:$p,packing:em,premultiplied_alpha_fragment:tm,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:om,shadowmap_pars_vertex:cm,shadowmap_vertex:lm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:dm,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:vm,tonemapping_pars_fragment:xm,transmission_fragment:Mm,transmission_pars_fragment:ym,uv_pars_fragment:Sm,uv_pars_vertex:Am,uv_vertex:_m,worldpos_vertex:wm,background_vert:Em,background_frag:Tm,backgroundCube_vert:bm,backgroundCube_frag:Cm,cube_vert:Dm,cube_frag:Rm,depth_vert:Im,depth_frag:Pm,distanceRGBA_vert:Lm,distanceRGBA_frag:Bm,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:Fm,linedashed_frag:zm,meshbasic_vert:Om,meshbasic_frag:km,meshlambert_vert:Gm,meshlambert_frag:Hm,meshmatcap_vert:Vm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:Ym,meshphong_vert:qm,meshphong_frag:Qm,meshphysical_vert:Km,meshphysical_frag:Zm,meshtoon_vert:jm,meshtoon_frag:Jm,points_vert:$m,points_frag:eg,shadow_vert:tg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},ue={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Cn={basic:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Qt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Qt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Qt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Qt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Qt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Qt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Qt([ue.common,ue.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Qt([ue.lights,ue.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Cn.physical={uniforms:Qt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ar={r:0,b:0,g:0},yi=new Bn,rg=new Ke;function ag(n,e,t,i,s,r,a){const o=new Ye(0);let c=r===!0?0:1,l,h,f=null,d=0,u=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function v(x){let y=!1;const E=g(x);E===null?p(o,c):E&&E.isColor&&(p(E,1),y=!0);const _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===oa)?(h===void 0&&(h=new vt(new Pi(1,1,1),new rt({name:"BackgroundCubeMaterial",uniforms:gs(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(_,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(y.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(yi)),h.material.toneMapped=$e.getTransfer(E.colorSpace)!==lt,(f!==E||d!==E.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,f=E,d=E.version,u=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new vt(new Un(2,2),new rt({name:"BackgroundMaterial",uniforms:gs(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=$e.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=E,d=E.version,u=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(Ar,Zh(n)),i.buffers.color.setClear(Ar.r,Ar.g,Ar.b,y,a)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:v,addToRenderList:m,dispose:A}}function og(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(S,C,I,L,z){let G=!1;const B=f(L,I,C);r!==B&&(r=B,l(r.object)),G=u(S,L,I,z),G&&g(S,L,I,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(S,C,I,L),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function f(S,C,I){const L=I.wireframe===!0;let z=i[S.id];z===void 0&&(z={},i[S.id]=z);let G=z[C.id];G===void 0&&(G={},z[C.id]=G);let B=G[L];return B===void 0&&(B=d(c()),G[L]=B),B}function d(S){const C=[],I=[],L=[];for(let z=0;z<t;z++)C[z]=0,I[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:L,object:S,attributes:{},index:null}}function u(S,C,I,L){const z=r.attributes,G=C.attributes;let B=0;const U=I.getAttributes();for(const N in U)if(U[N].location>=0){const J=z[N];let ae=G[N];if(ae===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function g(S,C,I,L){const z={},G=C.attributes;let B=0;const U=I.getAttributes();for(const N in U)if(U[N].location>=0){let J=G[N];J===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),z[N]=ae,B++}r.attributes=z,r.attributesNum=B,r.index=L}function v(){const S=r.newAttributes;for(let C=0,I=S.length;C<I;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){const I=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;I[S]=1,L[S]===0&&(n.enableVertexAttribArray(S),L[S]=1),z[S]!==C&&(n.vertexAttribDivisor(S,C),z[S]=C)}function A(){const S=r.newAttributes,C=r.enabledAttributes;for(let I=0,L=C.length;I<L;I++)C[I]!==S[I]&&(n.disableVertexAttribArray(I),C[I]=0)}function x(S,C,I,L,z,G,B){B===!0?n.vertexAttribIPointer(S,C,I,z,G):n.vertexAttribPointer(S,C,I,L,z,G)}function y(S,C,I,L){v();const z=L.attributes,G=I.getAttributes(),B=C.defaultAttributeValues;for(const U in G){const N=G[U];if(N.location>=0){let X=z[U];if(X===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const J=X.normalized,ae=X.itemSize,xe=e.get(X);if(xe===void 0)continue;const Be=xe.buffer,ze=xe.type,Pe=xe.bytesPerElement,Q=ze===n.INT||ze===n.UNSIGNED_INT||X.gpuType===lc;if(X.isInterleavedBufferAttribute){const j=X.data,te=j.stride,Ae=X.offset;if(j.isInstancedInterleavedBuffer){for(let ge=0;ge<N.locationSize;ge++)p(N.location+ge,j.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<N.locationSize;ge++)m(N.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let ge=0;ge<N.locationSize;ge++)x(N.location+ge,ae/N.locationSize,ze,J,te*Pe,(Ae+ae/N.locationSize*ge)*Pe,Q)}else{if(X.isInstancedBufferAttribute){for(let j=0;j<N.locationSize;j++)p(N.location+j,X.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let j=0;j<N.locationSize;j++)m(N.location+j);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let j=0;j<N.locationSize;j++)x(N.location+j,ae/N.locationSize,ze,J,ae*Pe,ae/N.locationSize*j*Pe,Q)}}else if(B!==void 0){const J=B[U];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(N.location,J);break;case 3:n.vertexAttrib3fv(N.location,J);break;case 4:n.vertexAttrib4fv(N.location,J);break;default:n.vertexAttrib1fv(N.location,J)}}}}A()}function E(){T();for(const S in i){const C=i[S];for(const I in C){const L=C[I];for(const z in L)h(L[z].object),delete L[z];delete C[I]}delete i[S]}}function _(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const I in C){const L=C[I];for(const z in L)h(L[z].object),delete L[z];delete C[I]}delete i[S.id]}function w(S){for(const C in i){const I=i[C];if(I[S.id]===void 0)continue;const L=I[S.id];for(const z in L)h(L[z].object),delete L[z];delete I[S.id]}}function T(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:_,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function cg(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,f){f!==0&&(n.drawArraysInstanced(i,l,h,f),t.update(h,i,f))}function o(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];t.update(u,i,1)}function c(l,h,f,d){if(f===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function lg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Ft&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const T=w===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==yt&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==tn&&!T)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,_=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:E,maxSamples:_}}function hg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ri,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||i!==0||s;return s=d,i=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const A=r?0:i,x=A*4;let y=p.clippingState||null;c.value=y,y=h(g,d,x,u);for(let E=0;E!==x;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,u,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=u+v*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=u;x!==v;++x,y+=4)a.copy(f[x]).applyMatrix4(A,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ug(n){let e=new WeakMap;function t(a,o){return o===xo?a.mapping=ds:o===Mo&&(a.mapping=fs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===xo||o===Mo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new af(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const as=4,xl=[.125,.215,.35,.446,.526,.582],Ci=20,Va=new Ss,Ml=new Ye;let Wa=null,Xa=0,Ya=0,qa=!1;const Ei=(1+Math.sqrt(5))/2,es=1/Ei,yl=[new k(-Ei,es,0),new k(Ei,es,0),new k(-es,0,Ei),new k(es,0,Ei),new k(0,Ei,-es),new k(0,Ei,es),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],dg=new k;class Sl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=dg}=r;Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa,Xa,Ya),this._renderer.xr.enabled=qa,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tt,minFilter:tt,generateMipmaps:!1,type:An,format:Ft,colorSpace:ui,depthBuffer:!1},s=Al(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(r)),this._blurMaterial=pg(r,e,t)}return s}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,i,s,r){const c=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(Ml),f.toneMapping=Wn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const v=new qh({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),m=new vt(new Pi,v);let p=!1;const A=e.background;A?A.isColor&&(v.color.copy(A),e.background=null,p=!0):(v.color.copy(Ml),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):y===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));const E=this._cubeSize;_r(s,y*E,x>2?E:0,E,E),f.setRenderTarget(s),p&&f.render(m,c),f.render(e,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=d,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ds||e.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;_r(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Va)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yl[(s-r-1)%yl.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new vt(this._lodPlanes[s],l),d=l.uniforms,u=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ci-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ci;m>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let A=0;for(let w=0;w<Ci;++w){const T=w/v,M=Math.exp(-T*T/2);p.push(M),w===0?A+=M:w<m&&(A+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const y=this._sizeLods[s],E=3*y*(s>x-as?s-x+as:0),_=4*(this._cubeSize-y);_r(t,E,_,3*y,2*y),c.setRenderTarget(t),c.render(f,Va)}}function fg(n){const e=[],t=[],i=[];let s=n;const r=n-as+1+xl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>n-as?c=xl[a-n+as-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,v=3,m=2,p=1,A=new Float32Array(v*g*u),x=new Float32Array(m*g*u),y=new Float32Array(p*g*u);for(let _=0;_<u;_++){const w=_%3*2/3-1,T=_>2?0:-1,M=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];A.set(M,v*g*_),x.set(d,m*g*_);const S=[_,_,_,_,_,_];y.set(S,p*g*_)}const E=new Ht;E.setAttribute("position",new Ze(A,v)),E.setAttribute("uv",new Ze(x,m)),E.setAttribute("faceIndex",new Ze(y,p)),e.push(E),s>as&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Al(n,e,t){const i=new at(n,e,t);return i.texture.mapping=oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function pg(n,e,t){const i=new Float32Array(Ci),s=new k(0,1,0);return new rt({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function _l(){return new rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function wl(){return new rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}function mg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===xo||c===Mo,h=c===ds||c===fs;if(l||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Sl(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const u=o.image;return l&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new Sl(n)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function gg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&qs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function vg(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const u=r.get(d);u&&(e.remove(u),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const u in d)e.update(d[u],n.ARRAY_BUFFER)}function l(f){const d=[],u=f.index,g=f.attributes.position;let v=0;if(u!==null){const A=u.array;v=u.version;for(let x=0,y=A.length;x<y;x+=3){const E=A[x+0],_=A[x+1],w=A[x+2];d.push(E,_,_,w,w,E)}}else if(g!==void 0){const A=g.array;v=g.version;for(let x=0,y=A.length/3-1;x<y;x+=3){const E=x+0,_=x+1,w=x+2;d.push(E,_,_,w,w,E)}}else return;const m=new(Vh(d)?Kh:Qh)(d,1);m.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){const d=r.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function xg(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function l(d,u,g){g!==0&&(n.drawElementsInstanced(i,u,r,d*a,g),t.update(u,i,g))}function h(d,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];t.update(m,i,1)}function f(d,u,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,u[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,u,0,r,d,0,v,0,g);let p=0;for(let A=0;A<g;A++)p+=u[A]*v[A];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Mg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function yg(n,e,t){const i=new WeakMap,s=new mt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let M=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let x=0;u===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let y=o.attributes.position.count*x,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const _=new Float32Array(y*E*4*f),w=new xc(_,y,E,f);w.type=tn,w.needsUpdate=!0;const T=x*4;for(let S=0;S<f;S++){const C=m[S],I=p[S],L=A[S],z=y*E*4*S;for(let G=0;G<C.count;G++){const B=G*T;u===!0&&(s.fromBufferAttribute(C,G),_[z+B+0]=s.x,_[z+B+1]=s.y,_[z+B+2]=s.z,_[z+B+3]=0),g===!0&&(s.fromBufferAttribute(I,G),_[z+B+4]=s.x,_[z+B+5]=s.y,_[z+B+6]=s.z,_[z+B+7]=0),v===!0&&(s.fromBufferAttribute(L,G),_[z+B+8]=s.x,_[z+B+9]=s.y,_[z+B+10]=s.z,_[z+B+11]=L.itemSize===4?s.w:1)}}d={count:f,texture:w,size:new me(y,E)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let u=0;for(let v=0;v<l.length;v++)u+=l[v];const g=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Sg(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const iu=new Lt,El=new ca(1,1),su=new xc,ru=new ta,au=new Jh,Tl=[],bl=[],Cl=new Float32Array(16),Dl=new Float32Array(9),Rl=new Float32Array(4);function As(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Tl[s];if(r===void 0&&(r=new Float32Array(s),Tl[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function la(n,e){let t=bl[e];t===void 0&&(t=new Int32Array(e),bl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ag(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function Tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Bt(t,i))return;Rl.set(i),n.uniformMatrix2fv(this.addr,!1,Rl),Ut(t,i)}}function bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Bt(t,i))return;Dl.set(i),n.uniformMatrix3fv(this.addr,!1,Dl),Ut(t,i)}}function Cg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Bt(t,i))return;Cl.set(i),n.uniformMatrix4fv(this.addr,!1,Cl),Ut(t,i)}}function Dg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Lg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Fg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(El.compareFunction=Hh,r=El):r=iu,t.setTexture2D(e||r,s)}function zg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ru,s)}function Og(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||au,s)}function kg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||su,s)}function Gg(n){switch(n){case 5126:return Ag;case 35664:return _g;case 35665:return wg;case 35666:return Eg;case 35674:return Tg;case 35675:return bg;case 35676:return Cg;case 5124:case 35670:return Dg;case 35667:case 35671:return Rg;case 35668:case 35672:return Ig;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Bg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return kg}}function Hg(n,e){n.uniform1fv(this.addr,e)}function Vg(n,e){const t=As(e,this.size,2);n.uniform2fv(this.addr,t)}function Wg(n,e){const t=As(e,this.size,3);n.uniform3fv(this.addr,t)}function Xg(n,e){const t=As(e,this.size,4);n.uniform4fv(this.addr,t)}function Yg(n,e){const t=As(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qg(n,e){const t=As(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qg(n,e){const t=As(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kg(n,e){n.uniform1iv(this.addr,e)}function Zg(n,e){n.uniform2iv(this.addr,e)}function jg(n,e){n.uniform3iv(this.addr,e)}function Jg(n,e){n.uniform4iv(this.addr,e)}function $g(n,e){n.uniform1uiv(this.addr,e)}function e0(n,e){n.uniform2uiv(this.addr,e)}function t0(n,e){n.uniform3uiv(this.addr,e)}function n0(n,e){n.uniform4uiv(this.addr,e)}function i0(n,e,t){const i=this.cache,s=e.length,r=la(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||iu,r[a])}function s0(n,e,t){const i=this.cache,s=e.length,r=la(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ru,r[a])}function r0(n,e,t){const i=this.cache,s=e.length,r=la(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||au,r[a])}function a0(n,e,t){const i=this.cache,s=e.length,r=la(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||su,r[a])}function o0(n){switch(n){case 5126:return Hg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return Yg;case 35675:return qg;case 35676:return Qg;case 5124:case 35670:return Kg;case 35667:case 35671:return Zg;case 35668:case 35672:return jg;case 35669:case 35673:return Jg;case 5125:return $g;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return a0}}class c0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gg(t.type)}}class l0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o0(t.type)}}class h0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function Il(n,e){n.seq.push(e),n.map[e.id]=e}function u0(n,e,t){const i=n.name,s=i.length;for(Qa.lastIndex=0;;){const r=Qa.exec(i),a=Qa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Il(t,l===void 0?new c0(o,n,e):new l0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new h0(o),Il(t,f)),t=f}}}class Yr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);u0(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Pl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const d0=37297;let f0=0;function p0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ll=new Xe;function m0(n){$e._getMatrix(Ll,$e.workingColorSpace,n);const e=`mat3( ${Ll.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case jr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+p0(n.getShaderSource(e),o)}else return r}function g0(n,e){const t=m0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function v0(n,e){let t;switch(e){case xd:t="Linear";break;case Md:t="Reinhard";break;case yd:t="Cineon";break;case Sd:t="ACESFilmic";break;case _d:t="AgX";break;case wd:t="Neutral";break;case Ad:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wr=new k;function x0(){$e.getLuminanceCoefficients(wr);const n=wr.x.toFixed(4),e=wr.y.toFixed(4),t=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function y0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function S0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Os(n){return n!==""}function Ul(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(n){return n.replace(A0,w0)}const _0=new Map;function w0(n,e){let t=Ve[e];if(t===void 0){const i=_0.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jo(t)}const E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(n){return n.replace(E0,T0)}function T0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function b0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ih?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function C0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ds:case fs:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function R0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lh:e="ENVMAP_BLENDING_MULTIPLY";break;case gd:e="ENVMAP_BLENDING_MIX";break;case vd:e="ENVMAP_BLENDING_ADD";break}return e}function I0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function P0(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=b0(t),l=C0(t),h=D0(t),f=R0(t),d=I0(t),u=M0(t),g=y0(r),v=s.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(m=[zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Wn?v0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,g0("linearToOutputTexel",t.outputColorSpace),x0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),a=jo(a),a=Ul(a,t),a=Nl(a,t),o=jo(o),o=Ul(o,t),o=Nl(o,t),a=Fl(a),o=Fl(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=A+m+a,y=A+p+o,E=Pl(s,s.VERTEX_SHADER,x),_=Pl(s,s.FRAGMENT_SHADER,y);s.attachShader(v,E),s.attachShader(v,_),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(C){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(E)||"",z=s.getShaderInfoLog(_)||"",G=I.trim(),B=L.trim(),U=z.trim();let N=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,E,_);else{const J=Bl(s,E,"vertex"),ae=Bl(s,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+J+`
`+ae)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||U==="")&&(X=!1);X&&(C.diagnostics={runnable:N,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(E),s.deleteShader(_),T=new Yr(s,v),M=S0(s,v)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,d0)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=_,this}let L0=0;class B0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new U0(e),t.set(e,i)),i}}class U0{constructor(e){this.id=L0++,this.code=e,this.usedTimes=0}}function N0(n,e,t,i,s,r,a){const o=new Xh,c=new B0,l=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,C,I,L){const z=I.fog,G=L.geometry,B=M.isMeshStandardMaterial?I.environment:null,U=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),N=U&&U.mapping===oa?U.image.height:null,X=g[M.type];M.precision!==null&&(u=s.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const J=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=J!==void 0?J.length:0;let xe=0;G.morphAttributes.position!==void 0&&(xe=1),G.morphAttributes.normal!==void 0&&(xe=2),G.morphAttributes.color!==void 0&&(xe=3);let Be,ze,Pe,Q;if(X){const it=Cn[X];Be=it.vertexShader,ze=it.fragmentShader}else Be=M.vertexShader,ze=M.fragmentShader,c.update(M),Pe=c.getVertexShaderID(M),Q=c.getFragmentShaderID(M);const j=n.getRenderTarget(),te=n.state.buffers.depth.getReversed(),Ae=L.isInstancedMesh===!0,ge=L.isBatchedMesh===!0,Ne=!!M.map,Tt=!!M.matcap,F=!!U,ut=!!M.aoMap,Oe=!!M.lightMap,Re=!!M.bumpMap,Me=!!M.normalMap,ot=!!M.displacementMap,ye=!!M.emissiveMap,ke=!!M.metalnessMap,dt=!!M.roughnessMap,qe=M.anisotropy>0,P=M.clearcoat>0,b=M.dispersion>0,W=M.iridescence>0,Z=M.sheen>0,ee=M.transmission>0,K=qe&&!!M.anisotropyMap,Ce=P&&!!M.clearcoatMap,oe=P&&!!M.clearcoatNormalMap,Ee=P&&!!M.clearcoatRoughnessMap,Te=W&&!!M.iridescenceMap,se=W&&!!M.iridescenceThicknessMap,pe=Z&&!!M.sheenColorMap,Ue=Z&&!!M.sheenRoughnessMap,be=!!M.specularMap,de=!!M.specularColorMap,He=!!M.specularIntensityMap,O=ee&&!!M.transmissionMap,re=ee&&!!M.thicknessMap,le=!!M.gradientMap,Se=!!M.alphaMap,ne=M.alphaTest>0,$=!!M.alphaHash,we=!!M.extensions;let Ge=Wn;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const gt={shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:Be,fragmentShader:ze,defines:M.defines,customVertexShaderID:Pe,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:ge,batchingColor:ge&&L._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&L.instanceColor!==null,instancingMorph:Ae&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ui,alphaToCoverage:!!M.alphaToCoverage,map:Ne,matcap:Tt,envMap:F,envMapMode:F&&U.mapping,envMapCubeUVHeight:N,aoMap:ut,lightMap:Oe,bumpMap:Re,normalMap:Me,displacementMap:d&&ot,emissiveMap:ye,normalMapObjectSpace:Me&&M.normalMapType===Td,normalMapTangentSpace:Me&&M.normalMapType===gc,metalnessMap:ke,roughnessMap:dt,anisotropy:qe,anisotropyMap:K,clearcoat:P,clearcoatMap:Ce,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ee,dispersion:b,iridescence:W,iridescenceMap:Te,iridescenceThicknessMap:se,sheen:Z,sheenColorMap:pe,sheenRoughnessMap:Ue,specularMap:be,specularColorMap:de,specularIntensityMap:He,transmission:ee,transmissionMap:O,thicknessMap:re,gradientMap:le,opaque:M.transparent===!1&&M.blending===ls&&M.alphaToCoverage===!1,alphaMap:Se,alphaTest:ne,alphaHash:$,combine:M.combine,mapUv:Ne&&v(M.map.channel),aoMapUv:ut&&v(M.aoMap.channel),lightMapUv:Oe&&v(M.lightMap.channel),bumpMapUv:Re&&v(M.bumpMap.channel),normalMapUv:Me&&v(M.normalMap.channel),displacementMapUv:ot&&v(M.displacementMap.channel),emissiveMapUv:ye&&v(M.emissiveMap.channel),metalnessMapUv:ke&&v(M.metalnessMap.channel),roughnessMapUv:dt&&v(M.roughnessMap.channel),anisotropyMapUv:K&&v(M.anisotropyMap.channel),clearcoatMapUv:Ce&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(M.sheenRoughnessMap.channel),specularMapUv:be&&v(M.specularMap.channel),specularColorMapUv:de&&v(M.specularColorMap.channel),specularIntensityMapUv:He&&v(M.specularIntensityMap.channel),transmissionMapUv:O&&v(M.transmissionMap.channel),thicknessMapUv:re&&v(M.thicknessMap.channel),alphaMapUv:Se&&v(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Me||qe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(Ne||Se),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:te,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ne&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===lt,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&$e.getTransfer(M.emissiveMap.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Gt,flipSided:M.side===Rt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:we&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&M.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(A(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function A(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const S=g[M.type];let C;if(S){const I=Cn[S];C=tf.clone(I.uniforms)}else C=M.uniforms;return C}function E(M,S){let C;for(let I=0,L=h.length;I<L;I++){const z=h[I];if(z.cacheKey===S){C=z,++C.usedTimes;break}}return C===void 0&&(C=new P0(n,S,M,r),h.push(C)),C}function _(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:_,releaseShaderCache:w,programs:h,dispose:T}}function F0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function z0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ol(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,d,u,g,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function o(f,d,u,g,v,m){const p=a(f,d,u,g,v,m);u.transmission>0?i.push(p):u.transparent===!0?s.push(p):t.push(p)}function c(f,d,u,g,v,m){const p=a(f,d,u,g,v,m);u.transmission>0?i.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||z0),i.length>1&&i.sort(d||Ol),s.length>1&&s.sort(d||Ol)}function h(){for(let f=e,d=n.length;f<d;f++){const u=n[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function O0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new kl,n.set(i,[a])):s>=r.length?(a=new kl,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function k0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ye};break;case"SpotLight":t={position:new k,direction:new k,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function G0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let H0=0;function V0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W0(n){const e=new k0,t=G0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);const s=new k,r=new Ke,a=new Ke;function o(l){let h=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let u=0,g=0,v=0,m=0,p=0,A=0,x=0,y=0,E=0,_=0,w=0;l.sort(V0);for(let M=0,S=l.length;M<S;M++){const C=l[M],I=C.color,L=C.intensity,z=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=I.r*L,f+=I.g*L,d+=I.b*L;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],L);w++}else if(C.isDirectionalLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const U=C.shadow,N=t.get(C);N.shadowIntensity=U.intensity,N.shadowBias=U.bias,N.shadowNormalBias=U.normalBias,N.shadowRadius=U.radius,N.shadowMapSize=U.mapSize,i.directionalShadow[u]=N,i.directionalShadowMap[u]=G,i.directionalShadowMatrix[u]=C.shadow.matrix,A++}i.directional[u]=B,u++}else if(C.isSpotLight){const B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(I).multiplyScalar(L),B.distance=z,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[v]=B;const U=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,U.updateMatrices(C),C.castShadow&&_++),i.spotLightMatrix[v]=U.matrix,C.castShadow){const N=t.get(C);N.shadowIntensity=U.intensity,N.shadowBias=U.bias,N.shadowNormalBias=U.normalBias,N.shadowRadius=U.radius,N.shadowMapSize=U.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=G,y++}v++}else if(C.isRectAreaLight){const B=e.get(C);B.color.copy(I).multiplyScalar(L),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=B,m++}else if(C.isPointLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const U=C.shadow,N=t.get(C);N.shadowIntensity=U.intensity,N.shadowBias=U.bias,N.shadowNormalBias=U.normalBias,N.shadowRadius=U.radius,N.shadowMapSize=U.mapSize,N.shadowCameraNear=U.camera.near,N.shadowCameraFar=U.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=C.shadow.matrix,x++}i.point[g]=B,g++}else if(C.isHemisphereLight){const B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(L),B.groundColor.copy(C.groundColor).multiplyScalar(L),i.hemi[p]=B,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const T=i.hash;(T.directionalLength!==u||T.pointLength!==g||T.spotLength!==v||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==A||T.numPointShadows!==x||T.numSpotShadows!==y||T.numSpotMaps!==E||T.numLightProbes!==w)&&(i.directional.length=u,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+E-_,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=_,i.numLightProbes=w,T.directionalLength=u,T.pointLength=g,T.spotLength=v,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=A,T.numPointShadows=x,T.numSpotShadows=y,T.numSpotMaps=E,T.numLightProbes=w,i.version=H0++)}function c(l,h){let f=0,d=0,u=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,A=l.length;p<A;p++){const x=l[p];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function Gl(n){const e=new W0(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function X0(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Gl(n),e.set(s,[o])):r>=a.length?(o=new Gl(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
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
}`;function Q0(n,e,t){let i=new Js;const s=new me,r=new me,a=new mt,o=new eu({depthPacking:Gh}),c=new gf,l={},h=t.maxTextureSize,f={[Ln]:Rt,[Rt]:Ln,[Gt]:Gt},d=new rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Y0,fragmentShader:q0}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ih;let p=this.type;this.render=function(_,w,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Pt),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const L=p!==Hn&&this.type===Hn,z=p===Hn&&this.type!==Hn;for(let G=0,B=_.length;G<B;G++){const U=_[G],N=U.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const X=N.getFrameExtents();if(s.multiply(X),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,N.mapSize.y=r.y)),N.map===null||L===!0||z===!0){const ae=this.type!==Hn?{minFilter:Mt,magFilter:Mt}:{};N.map!==null&&N.map.dispose(),N.map=new at(s.x,s.y,ae),N.map.texture.name=U.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const J=N.getViewportCount();for(let ae=0;ae<J;ae++){const xe=N.getViewport(ae);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),I.viewport(a),N.updateMatrices(U,ae),i=N.getFrustum(),y(w,T,N.camera,U,this.type)}N.isPointLightShadow!==!0&&this.type===Hn&&A(N,T),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,C)};function A(_,w){const T=e.update(v);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,u.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new at(s.x,s.y)),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,n.setRenderTarget(_.mapPass),n.clear(),n.renderBufferDirect(w,null,T,d,v,null),u.uniforms.shadow_pass.value=_.mapPass.texture,u.uniforms.resolution.value=_.mapSize,u.uniforms.radius.value=_.radius,n.setRenderTarget(_.map),n.clear(),n.renderBufferDirect(w,null,T,u,v,null)}function x(_,w,T,M){let S=null;const C=T.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(C!==void 0)S=C;else if(S=T.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=S.uuid,L=w.uuid;let z=l[I];z===void 0&&(z={},l[I]=z);let G=z[L];G===void 0&&(G=S.clone(),z[L]=G,w.addEventListener("dispose",E)),S=G}if(S.visible=w.visible,S.wireframe=w.wireframe,M===Hn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=n.properties.get(S);I.light=T}return S}function y(_,w,T,M,S){if(_.visible===!1)return;if(_.layers.test(w.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&S===Hn)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,_.matrixWorld);const L=e.update(_),z=_.material;if(Array.isArray(z)){const G=L.groups;for(let B=0,U=G.length;B<U;B++){const N=G[B],X=z[N.materialIndex];if(X&&X.visible){const J=x(_,X,M,S);_.onBeforeShadow(n,_,w,T,L,J,N),n.renderBufferDirect(T,null,L,J,_,N),_.onAfterShadow(n,_,w,T,L,J,N)}}}else if(z.visible){const G=x(_,z,M,S);_.onBeforeShadow(n,_,w,T,L,G,null),n.renderBufferDirect(T,null,L,G,_,null),_.onAfterShadow(n,_,w,T,L,G,null)}}const I=_.children;for(let L=0,z=I.length;L<z;L++)y(I[L],w,T,M,S)}function E(_){_.target.removeEventListener("dispose",E);for(const T in l){const M=l[T],S=_.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const K0={[uo]:Zr,[fo]:go,[po]:vo,[us]:mo,[Zr]:uo,[go]:fo,[vo]:po,[mo]:us};function Z0(n,e){function t(){let O=!1;const re=new mt;let le=null;const Se=new mt(0,0,0,0);return{setMask:function(ne){le!==ne&&!O&&(n.colorMask(ne,ne,ne,ne),le=ne)},setLocked:function(ne){O=ne},setClear:function(ne,$,we,Ge,gt){gt===!0&&(ne*=Ge,$*=Ge,we*=Ge),re.set(ne,$,we,Ge),Se.equals(re)===!1&&(n.clearColor(ne,$,we,Ge),Se.copy(re))},reset:function(){O=!1,le=null,Se.set(-1,0,0,0)}}}function i(){let O=!1,re=!1,le=null,Se=null,ne=null;return{setReversed:function($){if(re!==$){const we=e.get("EXT_clip_control");$?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),re=$;const Ge=ne;ne=null,this.setClear(Ge)}},getReversed:function(){return re},setTest:function($){$?j(n.DEPTH_TEST):te(n.DEPTH_TEST)},setMask:function($){le!==$&&!O&&(n.depthMask($),le=$)},setFunc:function($){if(re&&($=K0[$]),Se!==$){switch($){case uo:n.depthFunc(n.NEVER);break;case Zr:n.depthFunc(n.ALWAYS);break;case fo:n.depthFunc(n.LESS);break;case us:n.depthFunc(n.LEQUAL);break;case po:n.depthFunc(n.EQUAL);break;case mo:n.depthFunc(n.GEQUAL);break;case go:n.depthFunc(n.GREATER);break;case vo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=$}},setLocked:function($){O=$},setClear:function($){ne!==$&&(re&&($=1-$),n.clearDepth($),ne=$)},reset:function(){O=!1,le=null,Se=null,ne=null,re=!1}}}function s(){let O=!1,re=null,le=null,Se=null,ne=null,$=null,we=null,Ge=null,gt=null;return{setTest:function(it){O||(it?j(n.STENCIL_TEST):te(n.STENCIL_TEST))},setMask:function(it){re!==it&&!O&&(n.stencilMask(it),re=it)},setFunc:function(it,Nn,wn){(le!==it||Se!==Nn||ne!==wn)&&(n.stencilFunc(it,Nn,wn),le=it,Se=Nn,ne=wn)},setOp:function(it,Nn,wn){($!==it||we!==Nn||Ge!==wn)&&(n.stencilOp(it,Nn,wn),$=it,we=Nn,Ge=wn)},setLocked:function(it){O=it},setClear:function(it){gt!==it&&(n.clearStencil(it),gt=it)},reset:function(){O=!1,re=null,le=null,Se=null,ne=null,$=null,we=null,Ge=null,gt=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let h={},f={},d=new WeakMap,u=[],g=null,v=!1,m=null,p=null,A=null,x=null,y=null,E=null,_=null,w=new Ye(0,0,0),T=0,M=!1,S=null,C=null,I=null,L=null,z=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,U=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(N)[1]),B=U>=1):N.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),B=U>=2);let X=null,J={};const ae=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Be=new mt().fromArray(ae),ze=new mt().fromArray(xe);function Pe(O,re,le,Se){const ne=new Uint8Array(4),$=n.createTexture();n.bindTexture(O,$),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<le;we++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(re+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return $}const Q={};Q[n.TEXTURE_2D]=Pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=Pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=Pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=Pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(us),Re(!1),Me(Hc),j(n.CULL_FACE),ut(Pt);function j(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function te(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Ae(O,re){return f[O]!==re?(n.bindFramebuffer(O,re),f[O]=re,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=re),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=re),!0):!1}function ge(O,re){let le=u,Se=!1;if(O){le=d.get(re),le===void 0&&(le=[],d.set(re,le));const ne=O.textures;if(le.length!==ne.length||le[0]!==n.COLOR_ATTACHMENT0){for(let $=0,we=ne.length;$<we;$++)le[$]=n.COLOR_ATTACHMENT0+$;le.length=ne.length,Se=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Se=!0);Se&&n.drawBuffers(le)}function Ne(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const Tt={[bi]:n.FUNC_ADD,[$u]:n.FUNC_SUBTRACT,[ed]:n.FUNC_REVERSE_SUBTRACT};Tt[td]=n.MIN,Tt[nd]=n.MAX;const F={[id]:n.ZERO,[sd]:n.ONE,[rd]:n.SRC_COLOR,[lo]:n.SRC_ALPHA,[ud]:n.SRC_ALPHA_SATURATE,[ld]:n.DST_COLOR,[od]:n.DST_ALPHA,[ad]:n.ONE_MINUS_SRC_COLOR,[ho]:n.ONE_MINUS_SRC_ALPHA,[hd]:n.ONE_MINUS_DST_COLOR,[cd]:n.ONE_MINUS_DST_ALPHA,[dd]:n.CONSTANT_COLOR,[fd]:n.ONE_MINUS_CONSTANT_COLOR,[pd]:n.CONSTANT_ALPHA,[md]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(O,re,le,Se,ne,$,we,Ge,gt,it){if(O===Pt){v===!0&&(te(n.BLEND),v=!1);return}if(v===!1&&(j(n.BLEND),v=!0),O!==Ju){if(O!==m||it!==M){if((p!==bi||y!==bi)&&(n.blendEquation(n.FUNC_ADD),p=bi,y=bi),it)switch(O){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kr:n.blendFunc(n.ONE,n.ONE);break;case Vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Vc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,x=null,E=null,_=null,w.set(0,0,0),T=0,m=O,M=it}return}ne=ne||re,$=$||le,we=we||Se,(re!==p||ne!==y)&&(n.blendEquationSeparate(Tt[re],Tt[ne]),p=re,y=ne),(le!==A||Se!==x||$!==E||we!==_)&&(n.blendFuncSeparate(F[le],F[Se],F[$],F[we]),A=le,x=Se,E=$,_=we),(Ge.equals(w)===!1||gt!==T)&&(n.blendColor(Ge.r,Ge.g,Ge.b,gt),w.copy(Ge),T=gt),m=O,M=!1}function Oe(O,re){O.side===Gt?te(n.CULL_FACE):j(n.CULL_FACE);let le=O.side===Rt;re&&(le=!le),Re(le),O.blending===ls&&O.transparent===!1?ut(Pt):ut(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Se=O.stencilWrite;o.setTest(Se),Se&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ye(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(O){S!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),S=O)}function Me(O){O!==Zu?(j(n.CULL_FACE),O!==C&&(O===Hc?n.cullFace(n.BACK):O===ju?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):te(n.CULL_FACE),C=O}function ot(O){O!==I&&(B&&n.lineWidth(O),I=O)}function ye(O,re,le){O?(j(n.POLYGON_OFFSET_FILL),(L!==re||z!==le)&&(n.polygonOffset(re,le),L=re,z=le)):te(n.POLYGON_OFFSET_FILL)}function ke(O){O?j(n.SCISSOR_TEST):te(n.SCISSOR_TEST)}function dt(O){O===void 0&&(O=n.TEXTURE0+G-1),X!==O&&(n.activeTexture(O),X=O)}function qe(O,re,le){le===void 0&&(X===null?le=n.TEXTURE0+G-1:le=X);let Se=J[le];Se===void 0&&(Se={type:void 0,texture:void 0},J[le]=Se),(Se.type!==O||Se.texture!==re)&&(X!==le&&(n.activeTexture(le),X=le),n.bindTexture(O,re||Q[O]),Se.type=O,Se.texture=re)}function P(){const O=J[X];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(O){Be.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Be.copy(O))}function Ue(O){ze.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ze.copy(O))}function be(O,re){let le=l.get(re);le===void 0&&(le=new WeakMap,l.set(re,le));let Se=le.get(O);Se===void 0&&(Se=n.getUniformBlockIndex(re,O.name),le.set(O,Se))}function de(O,re){const Se=l.get(re).get(O);c.get(re)!==Se&&(n.uniformBlockBinding(re,Se,O.__bindingPointIndex),c.set(re,Se))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},X=null,J={},f={},d=new WeakMap,u=[],g=null,v=!1,m=null,p=null,A=null,x=null,y=null,E=null,_=null,w=new Ye(0,0,0),T=0,M=!1,S=null,C=null,I=null,L=null,z=null,Be.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:te,bindFramebuffer:Ae,drawBuffers:ge,useProgram:Ne,setBlending:ut,setMaterial:Oe,setFlipSided:Re,setCullFace:Me,setLineWidth:ot,setPolygonOffset:ye,setScissorTest:ke,activeTexture:dt,bindTexture:qe,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:Te,texImage3D:se,updateUBOMapping:be,uniformBlockBinding:de,texStorage2D:oe,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:ee,compressedTexSubImage2D:K,compressedTexSubImage3D:Ce,scissor:pe,viewport:Ue,reset:He}}function j0(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new me,h=new WeakMap;let f;const d=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return u?new OffscreenCanvas(P,b):ea("canvas")}function v(P,b,W){let Z=1;const ee=qe(P);if((ee.width>W||ee.height>W)&&(Z=W/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(Z*ee.width),Ce=Math.floor(Z*ee.height);f===void 0&&(f=g(K,Ce));const oe=b?g(K,Ce):f;return oe.width=K,oe.height=Ce,oe.getContext("2d").drawImage(P,0,0,K,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Ce+")."),oe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(P,b,W,Z,ee=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=b;if(b===n.RED&&(W===n.FLOAT&&(K=n.R32F),W===n.HALF_FLOAT&&(K=n.R16F),W===n.UNSIGNED_BYTE&&(K=n.R8)),b===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(K=n.R8UI),W===n.UNSIGNED_SHORT&&(K=n.R16UI),W===n.UNSIGNED_INT&&(K=n.R32UI),W===n.BYTE&&(K=n.R8I),W===n.SHORT&&(K=n.R16I),W===n.INT&&(K=n.R32I)),b===n.RG&&(W===n.FLOAT&&(K=n.RG32F),W===n.HALF_FLOAT&&(K=n.RG16F),W===n.UNSIGNED_BYTE&&(K=n.RG8)),b===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(K=n.RG8UI),W===n.UNSIGNED_SHORT&&(K=n.RG16UI),W===n.UNSIGNED_INT&&(K=n.RG32UI),W===n.BYTE&&(K=n.RG8I),W===n.SHORT&&(K=n.RG16I),W===n.INT&&(K=n.RG32I)),b===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(K=n.RGB8UI),W===n.UNSIGNED_SHORT&&(K=n.RGB16UI),W===n.UNSIGNED_INT&&(K=n.RGB32UI),W===n.BYTE&&(K=n.RGB8I),W===n.SHORT&&(K=n.RGB16I),W===n.INT&&(K=n.RGB32I)),b===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),W===n.UNSIGNED_INT&&(K=n.RGBA32UI),W===n.BYTE&&(K=n.RGBA8I),W===n.SHORT&&(K=n.RGBA16I),W===n.INT&&(K=n.RGBA32I)),b===n.RGB&&(W===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),b===n.RGBA){const Ce=ee?jr:$e.getTransfer(Z);W===n.FLOAT&&(K=n.RGBA32F),W===n.HALF_FLOAT&&(K=n.RGBA16F),W===n.UNSIGNED_BYTE&&(K=Ce===lt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(P,b){let W;return P?b===null||b===Ri||b===ps?W=n.DEPTH24_STENCIL8:b===tn?W=n.DEPTH32F_STENCIL8:b===Xs&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ri||b===ps?W=n.DEPTH_COMPONENT24:b===tn?W=n.DEPTH_COMPONENT32F:b===Xs&&(W=n.DEPTH_COMPONENT16),W}function E(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Mt&&P.minFilter!==tt?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function _(P){const b=P.target;b.removeEventListener("dispose",_),T(b),b.isVideoTexture&&h.delete(b)}function w(P){const b=P.target;b.removeEventListener("dispose",w),S(b)}function T(P){const b=i.get(P);if(b.__webglInit===void 0)return;const W=P.source,Z=d.get(W);if(Z){const ee=Z[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(P),Object.keys(Z).length===0&&d.delete(W)}i.remove(P)}function M(P){const b=i.get(P);n.deleteTexture(b.__webglTexture);const W=P.source,Z=d.get(W);delete Z[b.__cacheKey],a.memory.textures--}function S(P){const b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let ee=0;ee<b.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(b.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[Z]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=P.textures;for(let Z=0,ee=W.length;Z<ee;Z++){const K=i.get(W[Z]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(W[Z])}i.remove(P)}let C=0;function I(){C=0}function L(){const P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function z(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function G(P,b){const W=i.get(P);if(P.isVideoTexture&&ke(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(W,P,b);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+b)}function B(P,b){const W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Q(W,P,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+b)}function U(P,b){const W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Q(W,P,b);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+b)}function N(P,b){const W=i.get(P);if(P.version>0&&W.__version!==P.version){j(W,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+b)}const X={[Ws]:n.REPEAT,[Dn]:n.CLAMP_TO_EDGE,[yo]:n.MIRRORED_REPEAT},J={[Mt]:n.NEAREST,[Ed]:n.NEAREST_MIPMAP_NEAREST,[tr]:n.NEAREST_MIPMAP_LINEAR,[tt]:n.LINEAR,[va]:n.LINEAR_MIPMAP_NEAREST,[Rn]:n.LINEAR_MIPMAP_LINEAR},ae={[bd]:n.NEVER,[Ld]:n.ALWAYS,[Cd]:n.LESS,[Hh]:n.LEQUAL,[Dd]:n.EQUAL,[Pd]:n.GEQUAL,[Rd]:n.GREATER,[Id]:n.NOTEQUAL};function xe(P,b){if(b.type===tn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===tt||b.magFilter===va||b.magFilter===tr||b.magFilter===Rn||b.minFilter===tt||b.minFilter===va||b.minFilter===tr||b.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,X[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,X[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,X[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,J[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,J[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Mt||b.minFilter!==tr&&b.minFilter!==Rn||b.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Be(P,b){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",_));const Z=b.source;let ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));const K=z(b);if(K!==P.__cacheKey){ee[K]===void 0&&(ee[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ee[K].usedTimes++;const Ce=ee[P.__cacheKey];Ce!==void 0&&(ee[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(b)),P.__cacheKey=K,P.__webglTexture=ee[K].texture}return W}function ze(P,b,W){return Math.floor(Math.floor(P/W)/b)}function Pe(P,b,W,Z){const K=P.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,W,Z,b.data);else{K.sort((se,pe)=>se.start-pe.start);let Ce=0;for(let se=1;se<K.length;se++){const pe=K[Ce],Ue=K[se],be=pe.start+pe.count,de=ze(Ue.start,b.width,4),He=ze(pe.start,b.width,4);Ue.start<=be+1&&de===He&&ze(Ue.start+Ue.count-1,b.width,4)===de?pe.count=Math.max(pe.count,Ue.start+Ue.count-pe.start):(++Ce,K[Ce]=Ue)}K.length=Ce+1;const oe=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let se=0,pe=K.length;se<pe;se++){const Ue=K[se],be=Math.floor(Ue.start/4),de=Math.ceil(Ue.count/4),He=be%b.width,O=Math.floor(be/b.width),re=de,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,He,O,re,le,W,Z,b.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,oe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function Q(P,b,W){let Z=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=n.TEXTURE_3D);const ee=Be(P,b),K=b.source;t.bindTexture(Z,P.__webglTexture,n.TEXTURE0+W);const Ce=i.get(K);if(K.version!==Ce.__version||ee===!0){t.activeTexture(n.TEXTURE0+W);const oe=$e.getPrimaries($e.workingColorSpace),Ee=b.colorSpace===on?null:$e.getPrimaries(b.colorSpace),Te=b.colorSpace===on||oe===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let se=v(b.image,!1,s.maxTextureSize);se=dt(b,se);const pe=r.convert(b.format,b.colorSpace),Ue=r.convert(b.type);let be=x(b.internalFormat,pe,Ue,b.colorSpace,b.isVideoTexture);xe(Z,b);let de;const He=b.mipmaps,O=b.isVideoTexture!==!0,re=Ce.__version===void 0||ee===!0,le=K.dataReady,Se=E(b,se);if(b.isDepthTexture)be=y(b.format===ms,b.type),re&&(O?t.texStorage2D(n.TEXTURE_2D,1,be,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,be,se.width,se.height,0,pe,Ue,null));else if(b.isDataTexture)if(He.length>0){O&&re&&t.texStorage2D(n.TEXTURE_2D,Se,be,He[0].width,He[0].height);for(let ne=0,$=He.length;ne<$;ne++)de=He[ne],O?le&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,pe,Ue,de.data):t.texImage2D(n.TEXTURE_2D,ne,be,de.width,de.height,0,pe,Ue,de.data);b.generateMipmaps=!1}else O?(re&&t.texStorage2D(n.TEXTURE_2D,Se,be,se.width,se.height),le&&Pe(b,se,pe,Ue)):t.texImage2D(n.TEXTURE_2D,0,be,se.width,se.height,0,pe,Ue,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,be,He[0].width,He[0].height,se.depth);for(let ne=0,$=He.length;ne<$;ne++)if(de=He[ne],b.format!==Ft)if(pe!==null)if(O){if(le)if(b.layerUpdates.size>0){const we=vl(de.width,de.height,b.format,b.type);for(const Ge of b.layerUpdates){const gt=de.data.subarray(Ge*we/de.data.BYTES_PER_ELEMENT,(Ge+1)*we/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Ge,de.width,de.height,1,pe,gt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,se.depth,pe,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,be,de.width,de.height,se.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,se.depth,pe,Ue,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,be,de.width,de.height,se.depth,0,pe,Ue,de.data)}else{O&&re&&t.texStorage2D(n.TEXTURE_2D,Se,be,He[0].width,He[0].height);for(let ne=0,$=He.length;ne<$;ne++)de=He[ne],b.format!==Ft?pe!==null?O?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?le&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,pe,Ue,de.data):t.texImage2D(n.TEXTURE_2D,ne,be,de.width,de.height,0,pe,Ue,de.data)}else if(b.isDataArrayTexture)if(O){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,be,se.width,se.height,se.depth),le)if(b.layerUpdates.size>0){const ne=vl(se.width,se.height,b.format,b.type);for(const $ of b.layerUpdates){const we=se.data.subarray($*ne/se.data.BYTES_PER_ELEMENT,($+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,se.width,se.height,1,pe,Ue,we)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,pe,Ue,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,se.width,se.height,se.depth,0,pe,Ue,se.data);else if(b.isData3DTexture)O?(re&&t.texStorage3D(n.TEXTURE_3D,Se,be,se.width,se.height,se.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,pe,Ue,se.data)):t.texImage3D(n.TEXTURE_3D,0,be,se.width,se.height,se.depth,0,pe,Ue,se.data);else if(b.isFramebufferTexture){if(re)if(O)t.texStorage2D(n.TEXTURE_2D,Se,be,se.width,se.height);else{let ne=se.width,$=se.height;for(let we=0;we<Se;we++)t.texImage2D(n.TEXTURE_2D,we,be,ne,$,0,pe,Ue,null),ne>>=1,$>>=1}}else if(He.length>0){if(O&&re){const ne=qe(He[0]);t.texStorage2D(n.TEXTURE_2D,Se,be,ne.width,ne.height)}for(let ne=0,$=He.length;ne<$;ne++)de=He[ne],O?le&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,pe,Ue,de):t.texImage2D(n.TEXTURE_2D,ne,be,pe,Ue,de);b.generateMipmaps=!1}else if(O){if(re){const ne=qe(se);t.texStorage2D(n.TEXTURE_2D,Se,be,ne.width,ne.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Ue,se)}else t.texImage2D(n.TEXTURE_2D,0,be,pe,Ue,se);m(b)&&p(Z),Ce.__version=K.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function j(P,b,W){if(b.image.length!==6)return;const Z=Be(P,b),ee=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+W);const K=i.get(ee);if(ee.version!==K.__version||Z===!0){t.activeTexture(n.TEXTURE0+W);const Ce=$e.getPrimaries($e.workingColorSpace),oe=b.colorSpace===on?null:$e.getPrimaries(b.colorSpace),Ee=b.colorSpace===on||Ce===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Te=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,pe=[];for(let $=0;$<6;$++)!Te&&!se?pe[$]=v(b.image[$],!0,s.maxCubemapSize):pe[$]=se?b.image[$].image:b.image[$],pe[$]=dt(b,pe[$]);const Ue=pe[0],be=r.convert(b.format,b.colorSpace),de=r.convert(b.type),He=x(b.internalFormat,be,de,b.colorSpace),O=b.isVideoTexture!==!0,re=K.__version===void 0||Z===!0,le=ee.dataReady;let Se=E(b,Ue);xe(n.TEXTURE_CUBE_MAP,b);let ne;if(Te){O&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,He,Ue.width,Ue.height);for(let $=0;$<6;$++){ne=pe[$].mipmaps;for(let we=0;we<ne.length;we++){const Ge=ne[we];b.format!==Ft?be!==null?O?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,we,0,0,Ge.width,Ge.height,be,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,we,He,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,we,0,0,Ge.width,Ge.height,be,de,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,we,He,Ge.width,Ge.height,0,be,de,Ge.data)}}}else{if(ne=b.mipmaps,O&&re){ne.length>0&&Se++;const $=qe(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,He,$.width,$.height)}for(let $=0;$<6;$++)if(se){O?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe[$].width,pe[$].height,be,de,pe[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,pe[$].width,pe[$].height,0,be,de,pe[$].data);for(let we=0;we<ne.length;we++){const gt=ne[we].image[$].image;O?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,we+1,0,0,gt.width,gt.height,be,de,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,we+1,He,gt.width,gt.height,0,be,de,gt.data)}}else{O?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be,de,pe[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,be,de,pe[$]);for(let we=0;we<ne.length;we++){const Ge=ne[we];O?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,we+1,0,0,be,de,Ge.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,we+1,He,be,de,Ge.image[$])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),K.__version=ee.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function te(P,b,W,Z,ee,K){const Ce=r.convert(W.format,W.colorSpace),oe=r.convert(W.type),Ee=x(W.internalFormat,Ce,oe,W.colorSpace),Te=i.get(b),se=i.get(W);if(se.__renderTarget=b,!Te.__hasExternalTextures){const pe=Math.max(1,b.width>>K),Ue=Math.max(1,b.height>>K);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,Ee,pe,Ue,b.depth,0,Ce,oe,null):t.texImage2D(ee,K,Ee,pe,Ue,0,Ce,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ye(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ee,se.__webglTexture,0,ot(b)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ee,se.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(P,b,W){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){const Z=b.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,K=y(b.stencilBuffer,ee),Ce=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=ot(b);ye(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,K,b.width,b.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,K,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,K,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,P)}else{const Z=b.textures;for(let ee=0;ee<Z.length;ee++){const K=Z[ee],Ce=r.convert(K.format,K.colorSpace),oe=r.convert(K.type),Ee=x(K.internalFormat,Ce,oe,K.colorSpace),Te=ot(b);W&&ye(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Ee,b.width,b.height):ye(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,Ee,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);const ee=Z.__webglTexture,K=ot(b);if(b.depthTexture.format===Ys)ye(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(b.depthTexture.format===ms)ye(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ne(P){const b=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=Z}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const Z=P.texture.mipmaps;Z&&Z.length>0?ge(b.__webglFramebuffer[0],P):ge(b.__webglFramebuffer,P)}else if(W){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ae(b.__webglDepthbuffer[Z],P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,K)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Ae(b.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(P,b,W){const Z=i.get(P);b!==void 0&&te(Z.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Ne(P)}function F(P){const b=P.texture,W=i.get(P),Z=i.get(b);P.addEventListener("dispose",w);const ee=P.textures,K=P.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=b.version,a.memory.textures++),K){W.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[oe]=[];for(let Ee=0;Ee<b.mipmaps.length;Ee++)W.__webglFramebuffer[oe][Ee]=n.createFramebuffer()}else W.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let oe=0;oe<b.mipmaps.length;oe++)W.__webglFramebuffer[oe]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let oe=0,Ee=ee.length;oe<Ee;oe++){const Te=i.get(ee[oe]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&ye(P)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let oe=0;oe<ee.length;oe++){const Ee=ee[oe];W.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[oe]);const Te=r.convert(Ee.format,Ee.colorSpace),se=r.convert(Ee.type),pe=x(Ee.internalFormat,Te,se,Ee.colorSpace,P.isXRRenderTarget===!0),Ue=ot(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,pe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,W.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),xe(n.TEXTURE_CUBE_MAP,b);for(let oe=0;oe<6;oe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)te(W.__webglFramebuffer[oe][Ee],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee);else te(W.__webglFramebuffer[oe],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let oe=0,Ee=ee.length;oe<Ee;oe++){const Te=ee[oe],se=i.get(Te);let pe=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,se.__webglTexture),xe(pe,Te),te(W.__webglFramebuffer,P,Te,n.COLOR_ATTACHMENT0+oe,pe,0),m(Te)&&p(pe)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(oe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,Z.__webglTexture),xe(oe,b),b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)te(W.__webglFramebuffer[Ee],P,b,n.COLOR_ATTACHMENT0,oe,Ee);else te(W.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,oe,0);m(b)&&p(oe),t.unbindTexture()}P.depthBuffer&&Ne(P)}function ut(P){const b=P.textures;for(let W=0,Z=b.length;W<Z;W++){const ee=b[W];if(m(ee)){const K=A(P),Ce=i.get(ee).__webglTexture;t.bindTexture(K,Ce),p(K),t.unbindTexture()}}}const Oe=[],Re=[];function Me(P){if(P.samples>0){if(ye(P)===!1){const b=P.textures,W=P.width,Z=P.height;let ee=n.COLOR_BUFFER_BIT;const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(P),oe=b.length>1;if(oe)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Ee=P.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const se=i.get(b[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,W,Z,0,0,W,Z,ee,n.NEAREST),c===!0&&(Oe.length=0,Re.length=0,Oe.push(n.COLOR_ATTACHMENT0+Te),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Oe.push(K),Re.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const se=i.get(b[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ot(P){return Math.min(s.maxSamples,P.samples)}function ye(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ke(P){const b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function dt(P,b){const W=P.colorSpace,Z=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==ui&&W!==on&&($e.getTransfer(W)===lt?(Z!==Ft||ee!==yt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=U,this.setTextureCube=N,this.rebindTextures=Tt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ye}function J0(n,e){function t(i,s=on){let r;const a=$e.getTransfer(s);if(i===yt)return n.UNSIGNED_BYTE;if(i===hc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uh)return n.BYTE;if(i===Nh)return n.SHORT;if(i===Xs)return n.UNSIGNED_SHORT;if(i===lc)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===tn)return n.FLOAT;if(i===An)return n.HALF_FLOAT;if(i===Oh)return n.ALPHA;if(i===kh)return n.RGB;if(i===Ft)return n.RGBA;if(i===Ys)return n.DEPTH_COMPONENT;if(i===ms)return n.DEPTH_STENCIL;if(i===hi)return n.RED;if(i===dc)return n.RED_INTEGER;if(i===fc)return n.RG;if(i===pc)return n.RG_INTEGER;if(i===mc)return n.RGBA_INTEGER;if(i===Hr||i===Vr||i===Wr||i===Xr)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===So||i===Ao||i===_o||i===wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===So)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eo||i===To||i===bo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Eo||i===To)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Co||i===Do||i===Ro||i===Io||i===Po||i===Lo||i===Bo||i===Uo||i===No||i===Fo||i===zo||i===Oo||i===ko||i===Go)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Co)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Do)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ro)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Io)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Po)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===No)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ko)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Go)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ho||i===Vo||i===Wo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ho)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xo||i===Yo||i===qo||i===Qo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Xo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const $0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ev=`
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

}`;class tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new $h(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rt({vertexShader:$0,fragmentShader:ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nv extends qn{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,g=null;const v=typeof XRWebGLBinding<"u",m=new tv,p={},A=t.getContextAttributes();let x=null,y=null;const E=[],_=[],w=new me;let T=null;const M=new Kt;M.viewport=new mt;const S=new Kt;S.viewport=new mt;const C=[M,S],I=new _f;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let j=E[Q];return j===void 0&&(j=new ka,E[Q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Q){let j=E[Q];return j===void 0&&(j=new ka,E[Q]=j),j.getGripSpace()},this.getHand=function(Q){let j=E[Q];return j===void 0&&(j=new ka,E[Q]=j),j.getHandSpace()};function G(Q){const j=_.indexOf(Q.inputSource);if(j===-1)return;const te=E[j];te!==void 0&&(te.update(Q.inputSource,Q.frame,l||a),te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function B(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",U);for(let Q=0;Q<E.length;Q++){const j=_[Q];j!==null&&(_[Q]=null,E[Q].disconnect(j))}L=null,z=null,m.reset();for(const Q in p)delete p[Q];e.setRenderTarget(x),u=null,d=null,f=null,s=null,y=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",B),s.addEventListener("inputsourceschange",U),A.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Ae=null,ge=null;A.depth&&(ge=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=A.stencil?ms:Ys,Ae=A.stencil?ps:Ri);const Ne={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new at(d.textureWidth,d.textureHeight,{format:Ft,type:yt,depthTexture:new ca(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new at(u.framebufferWidth,u.framebufferHeight,{format:Ft,type:yt,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Pe.setContext(s),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(Q){for(let j=0;j<Q.removed.length;j++){const te=Q.removed[j],Ae=_.indexOf(te);Ae>=0&&(_[Ae]=null,E[Ae].disconnect(te))}for(let j=0;j<Q.added.length;j++){const te=Q.added[j];let Ae=_.indexOf(te);if(Ae===-1){for(let Ne=0;Ne<E.length;Ne++)if(Ne>=_.length){_.push(te),Ae=Ne;break}else if(_[Ne]===null){_[Ne]=te,Ae=Ne;break}if(Ae===-1)break}const ge=E[Ae];ge&&ge.connect(te)}}const N=new k,X=new k;function J(Q,j,te){N.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(te.matrixWorld);const Ae=N.distanceTo(X),ge=j.projectionMatrix.elements,Ne=te.projectionMatrix.elements,Tt=ge[14]/(ge[10]-1),F=ge[14]/(ge[10]+1),ut=(ge[9]+1)/ge[5],Oe=(ge[9]-1)/ge[5],Re=(ge[8]-1)/ge[0],Me=(Ne[8]+1)/Ne[0],ot=Tt*Re,ye=Tt*Me,ke=Ae/(-Re+Me),dt=ke*-Re;if(j.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(dt),Q.translateZ(ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ge[10]===-1)Q.projectionMatrix.copy(j.projectionMatrix),Q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const qe=Tt+ke,P=F+ke,b=ot-dt,W=ye+(Ae-dt),Z=ut*F/P*qe,ee=Oe*F/P*qe;Q.projectionMatrix.makePerspective(b,W,Z,ee,qe,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,j){j===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(j.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let j=Q.near,te=Q.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(te=m.depthFar)),I.near=S.near=M.near=j,I.far=S.far=M.far=te,(L!==I.near||z!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),L=I.near,z=I.far),I.layers.mask=Q.layers.mask|6,M.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;const Ae=Q.parent,ge=I.cameras;ae(I,Ae);for(let Ne=0;Ne<ge.length;Ne++)ae(ge[Ne],Ae);ge.length===2?J(I,M,S):I.projectionMatrix.copy(M.projectionMatrix),xe(Q,I,Ae)};function xe(Q,j,te){te===null?Q.matrix.copy(j.matrixWorld):(Q.matrix.copy(te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(j.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(j.projectionMatrix),Q.projectionMatrixInverse.copy(j.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ko*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Q){return p[Q]};let Be=null;function ze(Q,j){if(h=j.getViewerPose(l||a),g=j,h!==null){const te=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Ae=!1;te.length!==I.cameras.length&&(I.cameras.length=0,Ae=!0);for(let F=0;F<te.length;F++){const ut=te[F];let Oe=null;if(u!==null)Oe=u.getViewport(ut);else{const Me=f.getViewSubImage(d,ut);Oe=Me.viewport,F===0&&(e.setRenderTargetTextures(y,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(y))}let Re=C[F];Re===void 0&&(Re=new Kt,Re.layers.enable(F),Re.viewport=new mt,C[F]=Re),Re.matrix.fromArray(ut.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ut.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),F===0&&(I.matrix.copy(Re.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ae===!0&&I.cameras.push(Re)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const F=f.getDepthInformation(te[0]);F&&F.isValid&&F.texture&&m.init(F,s.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let F=0;F<te.length;F++){const ut=te[F].camera;if(ut){let Oe=p[ut];Oe||(Oe=new $h,p[ut]=Oe);const Re=f.getCameraImage(ut);Oe.sourceTexture=Re}}}}for(let te=0;te<E.length;te++){const Ae=_[te],ge=E[te];Ae!==null&&ge!==void 0&&ge.update(Ae,j,l||a)}Be&&Be(Q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const Pe=new nu;Pe.setAnimationLoop(ze),this.setAnimationLoop=function(Q){Be=Q},this.dispose=function(){}}}const Si=new Bn,iv=new Ke;function sv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Zh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,A,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),x=A.envMap,y=A.envMapRotation;x&&(m.envMap.value=x,Si.copy(y),Si.x*=-1,Si.y*=-1,Si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(Si)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,A,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rv(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,x){const y=x.program;i.uniformBlockBinding(A,y)}function l(A,x){let y=s[A.id];y===void 0&&(g(A),y=h(A),s[A.id]=y,A.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(A,E);const _=e.render.frame;r[A.id]!==_&&(d(A),r[A.id]=_)}function h(A){const x=f();A.__bindingPointIndex=x;const y=n.createBuffer(),E=A.__size,_=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const x=s[A.id],y=A.uniforms,E=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let _=0,w=y.length;_<w;_++){const T=Array.isArray(y[_])?y[_]:[y[_]];for(let M=0,S=T.length;M<S;M++){const C=T[M];if(u(C,_,M,E)===!0){const I=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let G=0;G<L.length;G++){const B=L[G],U=v(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,I+z,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,z),z+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(A,x,y,E){const _=A.value,w=x+"_"+y;if(E[w]===void 0)return typeof _=="number"||typeof _=="boolean"?E[w]=_:E[w]=_.clone(),!0;{const T=E[w];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return E[w]=_,!0}else if(T.equals(_)===!1)return T.copy(_),!0}return!1}function g(A){const x=A.uniforms;let y=0;const E=16;for(let w=0,T=x.length;w<T;w++){const M=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,C=M.length;S<C;S++){const I=M[S],L=Array.isArray(I.value)?I.value:[I.value];for(let z=0,G=L.length;z<G;z++){const B=L[z],U=v(B),N=y%E,X=N%U.boundary,J=N+X;y+=X,J!==0&&E-J<U.storage&&(y+=E-J),I.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=U.storage}}}const _=y%E;return _>0&&(y+=E-_),A.__size=y,A.__cache={},this}function v(A){const x={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(x.boundary=4,x.storage=4):A.isVector2?(x.boundary=8,x.storage=8):A.isVector3||A.isColor?(x.boundary=16,x.storage=12):A.isVector4?(x.boundary=16,x.storage=16):A.isMatrix3?(x.boundary=48,x.storage=48):A.isMatrix4?(x.boundary=64,x.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),x}function m(A){const x=A.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class av{constructor(e={}){const{canvas:t=Ud(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const A=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let E=!1;this._outputColorSpace=st;let _=0,w=0,T=null,M=-1,S=null;const C=new mt,I=new mt;let L=null;const z=new Ye(0);let G=0,B=t.width,U=t.height,N=1,X=null,J=null;const ae=new mt(0,0,B,U),xe=new mt(0,0,B,U);let Be=!1;const ze=new Js;let Pe=!1,Q=!1;const j=new Ke,te=new k,Ae=new mt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Tt(){return T===null?N:1}let F=i;function ut(D,H){return t.getContext(D,H)}try{const D={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ni}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ne,!1),F===null){const H="webgl2";if(F=ut(H,D),F===null)throw ut(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Oe,Re,Me,ot,ye,ke,dt,qe,P,b,W,Z,ee,K,Ce,oe,Ee,Te,se,pe,Ue,be,de,He;function O(){Oe=new gg(F),Oe.init(),be=new J0(F,Oe),Re=new lg(F,Oe,e,be),Me=new Z0(F,Oe),Re.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),ot=new Mg(F),ye=new F0,ke=new j0(F,Oe,Me,ye,Re,be,ot),dt=new ug(y),qe=new mg(y),P=new Ef(F),de=new og(F,P),b=new vg(F,P,ot,de),W=new Sg(F,b,P,ot),se=new yg(F,Re,ke),oe=new hg(ye),Z=new N0(y,dt,qe,Oe,Re,de,oe),ee=new sv(y,ye),K=new O0,Ce=new X0(Oe),Te=new ag(y,dt,qe,Me,W,u,c),Ee=new Q0(y,W,Re),He=new rv(F,ot,Re,Me),pe=new cg(F,Oe,ot),Ue=new xg(F,Oe,ot),ot.programs=Z.programs,y.capabilities=Re,y.extensions=Oe,y.properties=ye,y.renderLists=K,y.shadowMap=Ee,y.state=Me,y.info=ot}O();const re=new nv(y,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const D=Oe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Oe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(D){D!==void 0&&(N=D,this.setSize(B,U,!1))},this.getSize=function(D){return D.set(B,U)},this.setSize=function(D,H,Y=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,U=H,t.width=Math.floor(D*N),t.height=Math.floor(H*N),Y===!0&&(t.style.width=D+"px",t.style.height=H+"px"),this.setViewport(0,0,D,H)},this.getDrawingBufferSize=function(D){return D.set(B*N,U*N).floor()},this.setDrawingBufferSize=function(D,H,Y){B=D,U=H,N=Y,t.width=Math.floor(D*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,D,H)},this.getCurrentViewport=function(D){return D.copy(C)},this.getViewport=function(D){return D.copy(ae)},this.setViewport=function(D,H,Y,q){D.isVector4?ae.set(D.x,D.y,D.z,D.w):ae.set(D,H,Y,q),Me.viewport(C.copy(ae).multiplyScalar(N).round())},this.getScissor=function(D){return D.copy(xe)},this.setScissor=function(D,H,Y,q){D.isVector4?xe.set(D.x,D.y,D.z,D.w):xe.set(D,H,Y,q),Me.scissor(I.copy(xe).multiplyScalar(N).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(D){Me.setScissorTest(Be=D)},this.setOpaqueSort=function(D){X=D},this.setTransparentSort=function(D){J=D},this.getClearColor=function(D){return D.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(D=!0,H=!0,Y=!0){let q=0;if(D){let V=!1;if(T!==null){const ie=T.texture.format;V=ie===mc||ie===pc||ie===dc}if(V){const ie=T.texture.type,fe=ie===yt||ie===Ri||ie===Xs||ie===ps||ie===hc||ie===uc,_e=Te.getClearColor(),ve=Te.getClearAlpha(),Le=_e.r,Fe=_e.g,De=_e.b;fe?(g[0]=Le,g[1]=Fe,g[2]=De,g[3]=ve,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Le,v[1]=Fe,v[2]=De,v[3]=ve,F.clearBufferiv(F.COLOR,0,v))}else q|=F.COLOR_BUFFER_BIT}H&&(q|=F.DEPTH_BUFFER_BIT),Y&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Te.dispose(),K.dispose(),Ce.dispose(),ye.dispose(),dt.dispose(),qe.dispose(),W.dispose(),de.dispose(),He.dispose(),Z.dispose(),re.dispose(),re.removeEventListener("sessionstart",wn),re.removeEventListener("sessionend",Nc),pi.stop()};function le(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const D=ot.autoReset,H=Ee.enabled,Y=Ee.autoUpdate,q=Ee.needsUpdate,V=Ee.type;O(),ot.autoReset=D,Ee.enabled=H,Ee.autoUpdate=Y,Ee.needsUpdate=q,Ee.type=V}function ne(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function $(D){const H=D.target;H.removeEventListener("dispose",$),we(H)}function we(D){Ge(D),ye.remove(D)}function Ge(D){const H=ye.get(D).programs;H!==void 0&&(H.forEach(function(Y){Z.releaseProgram(Y)}),D.isShaderMaterial&&Z.releaseShaderCache(D))}this.renderBufferDirect=function(D,H,Y,q,V,ie){H===null&&(H=ge);const fe=V.isMesh&&V.matrixWorld.determinant()<0,_e=Wu(D,H,Y,q,V);Me.setMaterial(q,fe);let ve=Y.index,Le=1;if(q.wireframe===!0){if(ve=b.getWireframeAttribute(Y),ve===void 0)return;Le=2}const Fe=Y.drawRange,De=Y.attributes.position;let Qe=Fe.start*Le,ct=(Fe.start+Fe.count)*Le;ie!==null&&(Qe=Math.max(Qe,ie.start*Le),ct=Math.min(ct,(ie.start+ie.count)*Le)),ve!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,ve.count)):De!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,De.count));const wt=ct-Qe;if(wt<0||wt===1/0)return;de.setup(V,q,_e,Y,ve);let xt,ft=pe;if(ve!==null&&(xt=P.get(ve),ft=Ue,ft.setIndex(xt)),V.isMesh)q.wireframe===!0?(Me.setLineWidth(q.wireframeLinewidth*Tt()),ft.setMode(F.LINES)):ft.setMode(F.TRIANGLES);else if(V.isLine){let Ie=q.linewidth;Ie===void 0&&(Ie=1),Me.setLineWidth(Ie*Tt()),V.isLineSegments?ft.setMode(F.LINES):V.isLineLoop?ft.setMode(F.LINE_LOOP):ft.setMode(F.LINE_STRIP)}else V.isPoints?ft.setMode(F.POINTS):V.isSprite&&ft.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)qs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))ft.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ie=V._multiDrawStarts,St=V._multiDrawCounts,Je=V._multiDrawCount,nn=ve?P.get(ve).bytesPerElement:1,Oi=ye.get(q).currentProgram.getUniforms();for(let sn=0;sn<Je;sn++)Oi.setValue(F,"_gl_DrawID",sn),ft.render(Ie[sn]/nn,St[sn])}else if(V.isInstancedMesh)ft.renderInstances(Qe,wt,V.count);else if(Y.isInstancedBufferGeometry){const Ie=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,St=Math.min(Y.instanceCount,Ie);ft.renderInstances(Qe,wt,St)}else ft.render(Qe,wt)};function gt(D,H,Y){D.transparent===!0&&D.side===Gt&&D.forceSinglePass===!1?(D.side=Rt,D.needsUpdate=!0,er(D,H,Y),D.side=Ln,D.needsUpdate=!0,er(D,H,Y),D.side=Gt):er(D,H,Y)}this.compile=function(D,H,Y=null){Y===null&&(Y=D),p=Ce.get(Y),p.init(H),x.push(p),Y.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),D!==Y&&D.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const q=new Set;return D.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ie=V.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){const _e=ie[fe];gt(_e,Y,V),q.add(_e)}else gt(ie,Y,V),q.add(ie)}),p=x.pop(),q},this.compileAsync=function(D,H,Y=null){const q=this.compile(D,H,Y);return new Promise(V=>{function ie(){if(q.forEach(function(fe){ye.get(fe).currentProgram.isReady()&&q.delete(fe)}),q.size===0){V(D);return}setTimeout(ie,10)}Oe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let it=null;function Nn(D){it&&it(D)}function wn(){pi.stop()}function Nc(){pi.start()}const pi=new nu;pi.setAnimationLoop(Nn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(D){it=D,re.setAnimationLoop(D),D===null?pi.stop():pi.start()},re.addEventListener("sessionstart",wn),re.addEventListener("sessionend",Nc),this.render=function(D,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(H),H=re.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,H,T),p=Ce.get(D,x.length),p.init(H),x.push(p),j.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ze.setFromProjectionMatrix(j,In,H.reversedDepth),Q=this.localClippingEnabled,Pe=oe.init(this.clippingPlanes,Q),m=K.get(D,A.length),m.init(),A.push(m),re.enabled===!0&&re.isPresenting===!0){const ie=y.xr.getDepthSensingMesh();ie!==null&&ma(ie,H,-1/0,y.sortObjects)}ma(D,H,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(X,J),Ne=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ne&&Te.addToRenderList(m,D),this.info.render.frame++,Pe===!0&&oe.beginShadows();const Y=p.state.shadowsArray;Ee.render(Y,D,H),Pe===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const ie=H.cameras;if(V.length>0)for(let fe=0,_e=ie.length;fe<_e;fe++){const ve=ie[fe];zc(q,V,D,ve)}Ne&&Te.render(D);for(let fe=0,_e=ie.length;fe<_e;fe++){const ve=ie[fe];Fc(m,D,ve,ve.viewport)}}else V.length>0&&zc(q,V,D,H),Ne&&Te.render(D),Fc(m,D,H);T!==null&&w===0&&(ke.updateMultisampleRenderTarget(T),ke.updateRenderTargetMipmap(T)),D.isScene===!0&&D.onAfterRender(y,D,H),de.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],Pe===!0&&oe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function ma(D,H,Y,q){if(D.visible===!1)return;if(D.layers.test(H.layers)){if(D.isGroup)Y=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(H);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ze.intersectsSprite(D)){q&&Ae.setFromMatrixPosition(D.matrixWorld).applyMatrix4(j);const fe=W.update(D),_e=D.material;_e.visible&&m.push(D,fe,_e,Y,Ae.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ze.intersectsObject(D))){const fe=W.update(D),_e=D.material;if(q&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ae.copy(D.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ae.copy(fe.boundingSphere.center)),Ae.applyMatrix4(D.matrixWorld).applyMatrix4(j)),Array.isArray(_e)){const ve=fe.groups;for(let Le=0,Fe=ve.length;Le<Fe;Le++){const De=ve[Le],Qe=_e[De.materialIndex];Qe&&Qe.visible&&m.push(D,fe,Qe,Y,Ae.z,De)}}else _e.visible&&m.push(D,fe,_e,Y,Ae.z,null)}}const ie=D.children;for(let fe=0,_e=ie.length;fe<_e;fe++)ma(ie[fe],H,Y,q)}function Fc(D,H,Y,q){const V=D.opaque,ie=D.transmissive,fe=D.transparent;p.setupLightsView(Y),Pe===!0&&oe.setGlobalState(y.clippingPlanes,Y),q&&Me.viewport(C.copy(q)),V.length>0&&$s(V,H,Y),ie.length>0&&$s(ie,H,Y),fe.length>0&&$s(fe,H,Y),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function zc(D,H,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new at(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?An:yt,minFilter:Rn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ie=p.state.transmissionRenderTarget[q.id],fe=q.viewport||C;ie.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);const _e=y.getRenderTarget(),ve=y.getActiveCubeFace(),Le=y.getActiveMipmapLevel();y.setRenderTarget(ie),y.getClearColor(z),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),Ne&&Te.render(Y);const Fe=y.toneMapping;y.toneMapping=Wn;const De=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Pe===!0&&oe.setGlobalState(y.clippingPlanes,q),$s(D,Y,q),ke.updateMultisampleRenderTarget(ie),ke.updateRenderTargetMipmap(ie),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ct=0,wt=H.length;ct<wt;ct++){const xt=H[ct],ft=xt.object,Ie=xt.geometry,St=xt.material,Je=xt.group;if(St.side===Gt&&ft.layers.test(q.layers)){const nn=St.side;St.side=Rt,St.needsUpdate=!0,Oc(ft,Y,q,Ie,St,Je),St.side=nn,St.needsUpdate=!0,Qe=!0}}Qe===!0&&(ke.updateMultisampleRenderTarget(ie),ke.updateRenderTargetMipmap(ie))}y.setRenderTarget(_e,ve,Le),y.setClearColor(z,G),De!==void 0&&(q.viewport=De),y.toneMapping=Fe}function $s(D,H,Y){const q=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ie=D.length;V<ie;V++){const fe=D[V],_e=fe.object,ve=fe.geometry,Le=fe.group;let Fe=fe.material;Fe.allowOverride===!0&&q!==null&&(Fe=q),_e.layers.test(Y.layers)&&Oc(_e,H,Y,ve,Fe,Le)}}function Oc(D,H,Y,q,V,ie){D.onBeforeRender(y,H,Y,q,V,ie),D.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),V.onBeforeRender(y,H,Y,q,D,ie),V.transparent===!0&&V.side===Gt&&V.forceSinglePass===!1?(V.side=Rt,V.needsUpdate=!0,y.renderBufferDirect(Y,H,q,V,D,ie),V.side=Ln,V.needsUpdate=!0,y.renderBufferDirect(Y,H,q,V,D,ie),V.side=Gt):y.renderBufferDirect(Y,H,q,V,D,ie),D.onAfterRender(y,H,Y,q,V,ie)}function er(D,H,Y){H.isScene!==!0&&(H=ge);const q=ye.get(D),V=p.state.lights,ie=p.state.shadowsArray,fe=V.state.version,_e=Z.getParameters(D,V.state,ie,H,Y),ve=Z.getProgramCacheKey(_e);let Le=q.programs;q.environment=D.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(D.isMeshStandardMaterial?qe:dt).get(D.envMap||q.environment),q.envMapRotation=q.environment!==null&&D.envMap===null?H.environmentRotation:D.envMapRotation,Le===void 0&&(D.addEventListener("dispose",$),Le=new Map,q.programs=Le);let Fe=Le.get(ve);if(Fe!==void 0){if(q.currentProgram===Fe&&q.lightsStateVersion===fe)return Gc(D,_e),Fe}else _e.uniforms=Z.getUniforms(D),D.onBeforeCompile(_e,y),Fe=Z.acquireProgram(_e,ve),Le.set(ve,Fe),q.uniforms=_e.uniforms;const De=q.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(De.clippingPlanes=oe.uniform),Gc(D,_e),q.needsLights=Yu(D),q.lightsStateVersion=fe,q.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMap.value=V.state.directionalShadowMap,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotShadowMap.value=V.state.spotShadowMap,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMap.value=V.state.pointShadowMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Fe,q.uniformsList=null,Fe}function kc(D){if(D.uniformsList===null){const H=D.currentProgram.getUniforms();D.uniformsList=Yr.seqWithValue(H.seq,D.uniforms)}return D.uniformsList}function Gc(D,H){const Y=ye.get(D);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function Wu(D,H,Y,q,V){H.isScene!==!0&&(H=ge),ke.resetTextureUnits();const ie=H.fog,fe=q.isMeshStandardMaterial?H.environment:null,_e=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ui,ve=(q.isMeshStandardMaterial?qe:dt).get(q.envMap||fe),Le=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Fe=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),De=!!Y.morphAttributes.position,Qe=!!Y.morphAttributes.normal,ct=!!Y.morphAttributes.color;let wt=Wn;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(wt=y.toneMapping);const xt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=xt!==void 0?xt.length:0,Ie=ye.get(q),St=p.state.lights;if(Pe===!0&&(Q===!0||D!==S)){const Yt=D===S&&q.id===M;oe.setState(q,D,Yt)}let Je=!1;q.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==St.state.version||Ie.outputColorSpace!==_e||V.isBatchedMesh&&Ie.batching===!1||!V.isBatchedMesh&&Ie.batching===!0||V.isBatchedMesh&&Ie.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ie.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ie.instancing===!1||!V.isInstancedMesh&&Ie.instancing===!0||V.isSkinnedMesh&&Ie.skinning===!1||!V.isSkinnedMesh&&Ie.skinning===!0||V.isInstancedMesh&&Ie.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ie.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ie.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ie.instancingMorph===!1&&V.morphTexture!==null||Ie.envMap!==ve||q.fog===!0&&Ie.fog!==ie||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==oe.numPlanes||Ie.numIntersection!==oe.numIntersection)||Ie.vertexAlphas!==Le||Ie.vertexTangents!==Fe||Ie.morphTargets!==De||Ie.morphNormals!==Qe||Ie.morphColors!==ct||Ie.toneMapping!==wt||Ie.morphTargetsCount!==ft)&&(Je=!0):(Je=!0,Ie.__version=q.version);let nn=Ie.currentProgram;Je===!0&&(nn=er(q,H,V));let Oi=!1,sn=!1,_s=!1;const At=nn.getUniforms(),ln=Ie.uniforms;if(Me.useProgram(nn.program)&&(Oi=!0,sn=!0,_s=!0),q.id!==M&&(M=q.id,sn=!0),Oi||S!==D){Me.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),At.setValue(F,"projectionMatrix",D.projectionMatrix),At.setValue(F,"viewMatrix",D.matrixWorldInverse);const jt=At.map.cameraPosition;jt!==void 0&&jt.setValue(F,te.setFromMatrixPosition(D.matrixWorld)),Re.logarithmicDepthBuffer&&At.setValue(F,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&At.setValue(F,"isOrthographic",D.isOrthographicCamera===!0),S!==D&&(S=D,sn=!0,_s=!0)}if(V.isSkinnedMesh){At.setOptional(F,V,"bindMatrix"),At.setOptional(F,V,"bindMatrixInverse");const Yt=V.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),At.setValue(F,"boneTexture",Yt.boneTexture,ke))}V.isBatchedMesh&&(At.setOptional(F,V,"batchingTexture"),At.setValue(F,"batchingTexture",V._matricesTexture,ke),At.setOptional(F,V,"batchingIdTexture"),At.setValue(F,"batchingIdTexture",V._indirectTexture,ke),At.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&At.setValue(F,"batchingColorTexture",V._colorsTexture,ke));const hn=Y.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&se.update(V,Y,nn),(sn||Ie.receiveShadow!==V.receiveShadow)&&(Ie.receiveShadow=V.receiveShadow,At.setValue(F,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ln.envMap.value=ve,ln.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(ln.envMapIntensity.value=H.environmentIntensity),sn&&(At.setValue(F,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&Xu(ln,_s),ie&&q.fog===!0&&ee.refreshFogUniforms(ln,ie),ee.refreshMaterialUniforms(ln,q,N,U,p.state.transmissionRenderTarget[D.id]),Yr.upload(F,kc(Ie),ln,ke)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Yr.upload(F,kc(Ie),ln,ke),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&At.setValue(F,"center",V.center),At.setValue(F,"modelViewMatrix",V.modelViewMatrix),At.setValue(F,"normalMatrix",V.normalMatrix),At.setValue(F,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Yt=q.uniformsGroups;for(let jt=0,ga=Yt.length;jt<ga;jt++){const mi=Yt[jt];He.update(mi,nn),He.bind(mi,nn)}}return nn}function Xu(D,H){D.ambientLightColor.needsUpdate=H,D.lightProbe.needsUpdate=H,D.directionalLights.needsUpdate=H,D.directionalLightShadows.needsUpdate=H,D.pointLights.needsUpdate=H,D.pointLightShadows.needsUpdate=H,D.spotLights.needsUpdate=H,D.spotLightShadows.needsUpdate=H,D.rectAreaLights.needsUpdate=H,D.hemisphereLights.needsUpdate=H}function Yu(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(D,H,Y){const q=ye.get(D);q.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ye.get(D.texture).__webglTexture=H,ye.get(D.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,H){const Y=ye.get(D);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};const qu=F.createFramebuffer();this.setRenderTarget=function(D,H=0,Y=0){T=D,_=H,w=Y;let q=!0,V=null,ie=!1,fe=!1;if(D){const ve=ye.get(D);if(ve.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(ve.__webglFramebuffer===void 0)ke.setupRenderTarget(D);else if(ve.__hasExternalTextures)ke.rebindTextures(D,ye.get(D.texture).__webglTexture,ye.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const De=D.depthTexture;if(ve.__boundDepthTexture!==De){if(De!==null&&ye.has(De)&&(D.width!==De.image.width||D.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(D)}}const Le=D.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);const Fe=ye.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Fe[H])?V=Fe[H][Y]:V=Fe[H],ie=!0):D.samples>0&&ke.useMultisampledRTT(D)===!1?V=ye.get(D).__webglMultisampledFramebuffer:Array.isArray(Fe)?V=Fe[Y]:V=Fe,C.copy(D.viewport),I.copy(D.scissor),L=D.scissorTest}else C.copy(ae).multiplyScalar(N).floor(),I.copy(xe).multiplyScalar(N).floor(),L=Be;if(Y!==0&&(V=qu),Me.bindFramebuffer(F.FRAMEBUFFER,V)&&q&&Me.drawBuffers(D,V),Me.viewport(C),Me.scissor(I),Me.setScissorTest(L),ie){const ve=ye.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,ve.__webglTexture,Y)}else if(fe){const ve=H;for(let Le=0;Le<D.textures.length;Le++){const Fe=ye.get(D.textures[Le]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Le,Fe.__webglTexture,Y,ve)}}else if(D!==null&&Y!==0){const ve=ye.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,Y)}M=-1},this.readRenderTargetPixels=function(D,H,Y,q,V,ie,fe,_e=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ye.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Me.bindFramebuffer(F.FRAMEBUFFER,ve);try{const Le=D.textures[_e],Fe=Le.format,De=Le.type;if(!Re.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=D.width-q&&Y>=0&&Y<=D.height-V&&(D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_e),F.readPixels(H,Y,q,V,be.convert(Fe),be.convert(De),ie))}finally{const Le=T!==null?ye.get(T).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(D,H,Y,q,V,ie,fe,_e=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ye.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(H>=0&&H<=D.width-q&&Y>=0&&Y<=D.height-V){Me.bindFramebuffer(F.FRAMEBUFFER,ve);const Le=D.textures[_e],Fe=Le.format,De=Le.type;if(!Re.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Qe),F.bufferData(F.PIXEL_PACK_BUFFER,ie.byteLength,F.STREAM_READ),D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_e),F.readPixels(H,Y,q,V,be.convert(Fe),be.convert(De),0);const ct=T!==null?ye.get(T).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,ct);const wt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Nd(F,wt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Qe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ie),F.deleteBuffer(Qe),F.deleteSync(wt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,H=null,Y=0){const q=Math.pow(2,-Y),V=Math.floor(D.image.width*q),ie=Math.floor(D.image.height*q),fe=H!==null?H.x:0,_e=H!==null?H.y:0;ke.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,fe,_e,V,ie),Me.unbindTexture()};const Qu=F.createFramebuffer(),Ku=F.createFramebuffer();this.copyTextureToTexture=function(D,H,Y=null,q=null,V=0,ie=null){ie===null&&(V!==0?(qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=V,V=0):ie=0);let fe,_e,ve,Le,Fe,De,Qe,ct,wt;const xt=D.isCompressedTexture?D.mipmaps[ie]:D.image;if(Y!==null)fe=Y.max.x-Y.min.x,_e=Y.max.y-Y.min.y,ve=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Fe=Y.min.y,De=Y.isBox3?Y.min.z:0;else{const hn=Math.pow(2,-V);fe=Math.floor(xt.width*hn),_e=Math.floor(xt.height*hn),D.isDataArrayTexture?ve=xt.depth:D.isData3DTexture?ve=Math.floor(xt.depth*hn):ve=1,Le=0,Fe=0,De=0}q!==null?(Qe=q.x,ct=q.y,wt=q.z):(Qe=0,ct=0,wt=0);const ft=be.convert(H.format),Ie=be.convert(H.type);let St;H.isData3DTexture?(ke.setTexture3D(H,0),St=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ke.setTexture2DArray(H,0),St=F.TEXTURE_2D_ARRAY):(ke.setTexture2D(H,0),St=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const Je=F.getParameter(F.UNPACK_ROW_LENGTH),nn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Oi=F.getParameter(F.UNPACK_SKIP_PIXELS),sn=F.getParameter(F.UNPACK_SKIP_ROWS),_s=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),F.pixelStorei(F.UNPACK_SKIP_ROWS,Fe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,De);const At=D.isDataArrayTexture||D.isData3DTexture,ln=H.isDataArrayTexture||H.isData3DTexture;if(D.isDepthTexture){const hn=ye.get(D),Yt=ye.get(H),jt=ye.get(hn.__renderTarget),ga=ye.get(Yt.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,jt.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,ga.__webglFramebuffer);for(let mi=0;mi<ve;mi++)At&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.get(D).__webglTexture,V,De+mi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.get(H).__webglTexture,ie,wt+mi)),F.blitFramebuffer(Le,Fe,fe,_e,Qe,ct,fe,_e,F.DEPTH_BUFFER_BIT,F.NEAREST);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||D.isRenderTargetTexture||ye.has(D)){const hn=ye.get(D),Yt=ye.get(H);Me.bindFramebuffer(F.READ_FRAMEBUFFER,Qu),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ku);for(let jt=0;jt<ve;jt++)At?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hn.__webglTexture,V,De+jt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hn.__webglTexture,V),ln?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.__webglTexture,ie,wt+jt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Yt.__webglTexture,ie),V!==0?F.blitFramebuffer(Le,Fe,fe,_e,Qe,ct,fe,_e,F.COLOR_BUFFER_BIT,F.NEAREST):ln?F.copyTexSubImage3D(St,ie,Qe,ct,wt+jt,Le,Fe,fe,_e):F.copyTexSubImage2D(St,ie,Qe,ct,Le,Fe,fe,_e);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ln?D.isDataTexture||D.isData3DTexture?F.texSubImage3D(St,ie,Qe,ct,wt,fe,_e,ve,ft,Ie,xt.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(St,ie,Qe,ct,wt,fe,_e,ve,ft,xt.data):F.texSubImage3D(St,ie,Qe,ct,wt,fe,_e,ve,ft,Ie,xt):D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ie,Qe,ct,fe,_e,ft,Ie,xt.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ie,Qe,ct,xt.width,xt.height,ft,xt.data):F.texSubImage2D(F.TEXTURE_2D,ie,Qe,ct,fe,_e,ft,Ie,xt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Je),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Oi),F.pixelStorei(F.UNPACK_SKIP_ROWS,sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,_s),ie===0&&H.generateMipmaps&&F.generateMipmap(St),Me.unbindTexture()},this.initRenderTarget=function(D){ye.get(D).__webglFramebuffer===void 0&&ke.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ke.setTextureCube(D,0):D.isData3DTexture?ke.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ke.setTexture2DArray(D,0):ke.setTexture2D(D,0),Me.unbindTexture()},this.resetState=function(){_=0,w=0,T=null,Me.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const R=.5,he=32,_t=2,nt=4,Hl={seed:1337,chunksX:8,chunksY:4,chunksZ:8,seaLevel:22};function Ct(n,e,t){return(n*1024+e)*1024+t}const ov=0,Qs=1,vs=2,xs=3,Ks=4,Bi=5,ai=6,os=7,ou=8,cu=9,lu=10,hu=11,uu=12,du=13,fu=14,pu=15,Ac=16,_c=17,Ms=18,wc=19,cv=20,Ec=21,lv=22,Tc=23,hv=24,yn=25,Et=[{id:ov,name:"air",albedo:[0,0,0],roughness:1,metalness:0,pattern:"stone",scale:1,placeable:!1,hard:!1},{id:Qs,name:"stone",albedo:[.42,.41,.4],roughness:.85,metalness:0,pattern:"stone",scale:3,placeable:!0,hard:!1},{id:vs,name:"dirt",albedo:[.3,.21,.14],roughness:.95,metalness:0,pattern:"dirt",scale:2,placeable:!0,hard:!1},{id:xs,name:"grass",albedo:[.22,.38,.12],roughness:.9,metalness:0,pattern:"grass",scale:2,placeable:!0,hard:!1},{id:Ks,name:"sand",albedo:[.76,.66,.48],roughness:.9,metalness:0,pattern:"sand",scale:1.5,placeable:!0,hard:!1,repose:34},{id:Bi,name:"snow",albedo:[.92,.94,.97],roughness:.6,metalness:0,pattern:"snow",scale:2,placeable:!0,hard:!1},{id:ai,name:"wood",albedo:[.4,.26,.14],roughness:.8,metalness:0,pattern:"wood",scale:1,placeable:!0,hard:!1},{id:os,name:"leaves",albedo:[.16,.34,.1],roughness:.8,metalness:0,pattern:"leaves",scale:1,placeable:!0,hard:!1},{id:ou,name:"brick",albedo:[.56,.26,.18],roughness:.8,metalness:0,pattern:"clay",scale:1,placeable:!0,hard:!0},{id:cu,name:"marble",albedo:[.93,.92,.9],roughness:.32,metalness:0,pattern:"marble",scale:2.5,placeable:!0,hard:!1},{id:lu,name:"obsidian",albedo:[.02,.02,.03],roughness:.08,metalness:.05,pattern:"obsidian",scale:2,placeable:!0,hard:!1},{id:hu,name:"lantern",albedo:[.9,.75,.5],roughness:.5,metalness:0,pattern:"glow",scale:1,emissive:[1.7,1.15,.5],placeable:!0,hard:!0},{id:uu,name:"moss",albedo:[.2,.3,.12],roughness:.95,metalness:0,pattern:"moss",scale:1.5,placeable:!0,hard:!1},{id:du,name:"planks",albedo:[.55,.38,.2],roughness:.7,metalness:0,pattern:"planks",scale:1,placeable:!0,hard:!0},{id:fu,name:"cobble",albedo:[.45,.44,.42],roughness:.9,metalness:0,pattern:"cobble",scale:1,placeable:!0,hard:!0},{id:pu,name:"torch",albedo:[.3,.2,.1],roughness:.85,metalness:0,pattern:"torch",scale:.5,emissive:[20,10,3.1],placeable:!0,hard:!0,solid:!1},{id:Ac,name:"lamp",albedo:[.25,.25,.28],roughness:.5,metalness:.3,pattern:"obsidian",scale:.5,emissive:[16,15.5,12.8],placeable:!0,hard:!0,solid:!1},{id:_c,name:"goat",albedo:[.62,.55,.44],roughness:.95,metalness:0,pattern:"fur",scale:.35,placeable:!0,hard:!1,spawn:"goat"},{id:Ms,name:"anchor",albedo:[.2,.07,.34],roughness:.35,metalness:.1,pattern:"anchor",scale:1,emissive:[.1,.03,.22],placeable:!0,hard:!0},{id:wc,name:"penguin",albedo:[.07,.07,.09],roughness:.8,metalness:0,pattern:"fur",scale:.3,placeable:!0,hard:!1,spawn:"penguin"},{id:cv,name:"plumage",albedo:[.92,.91,.86],roughness:.75,metalness:0,pattern:"fur",scale:.3,placeable:!1,hard:!1},{id:Ec,name:"fish",albedo:[.88,.42,.1],roughness:.35,metalness:.1,pattern:"scales",scale:.25,placeable:!0,hard:!1,spawn:"fish"},{id:lv,name:"fin",albedo:[.95,.62,.22],roughness:.3,metalness:.05,pattern:"scales",scale:.15,placeable:!1,hard:!1},{id:Tc,name:"cat",albedo:[.42,.38,.35],roughness:.95,metalness:0,pattern:"fur",scale:.3,placeable:!0,hard:!1,spawn:"cat"},{id:hv,name:"muzzle",albedo:[.85,.82,.78],roughness:.95,metalness:0,pattern:"fur",scale:.3,placeable:!1,hard:!1},{id:yn,name:"ice",albedo:[.8,.9,.97],roughness:.1,metalness:0,pattern:"ice",scale:2,placeable:!0,hard:!1}],uv=[Qs,vs,xs,Ks,ai,os,ou,du,fu,cu,lu,yn,pu,Ac,hu,Bi,uu,_c,wc,Ec,Tc,Ms],pn=uv.map(n=>Et[n]);Et.length;function Vn(n){return Et[n]?.hard??!1}function ht(n){const e=Et[n];return!!e&&e.hard&&e.solid!==!1}const Zt=134217727,Dt=3;function mu(n){let e=0;for(;n;)n&=n-1,e++;return e}class ha{ox;oy;oz;nx;ny;nz;density;material;hard;sub;water;sy;sx;constructor(e,t,i,s=0,r=0,a=0,o,c,l,h,f){this.nx=e,this.ny=t,this.nz=i,this.ox=s,this.oy=r,this.oz=a,this.sy=i,this.sx=t*i,this.density=o??new Float32Array(e*t*i).fill(-nt),this.material=c??new Uint8Array(e*t*i),this.hard=l??new Uint8Array(e*t*i),this.sub=h??new Uint32Array(e*t*i),this.water=f??new Uint8Array(e*t*i)}waterAt(e,t,i){const s=Math.floor(e/R),r=Math.floor(t/R),a=Math.floor(i/R);return this.inBounds(s,r,a)?this.water[this.index(s,r,a)]!==0:!1}subMask(e,t,i){if(!this.inBounds(e,t,i))return 0;const s=this.index(e,t,i);if(this.hard[s]===0)return 0;const r=this.sub[s];return r===0?Zt:r}subOccupied(e,t,i,s,r,a){return(this.subMask(e,t,i)&1<<s+3*(r+3*a))!==0}solidFraction(e,t,i){const s=this.subMask(e,t,i);return s===0?0:s===Zt?1:mu(s)/27}hardOccupiedAt(e,t,i){const s=Math.floor(e/R),r=Math.floor(t/R),a=Math.floor(i/R),o=this.subMask(s,r,a);if(o===0)return!1;if(o===Zt)return!0;const c=Math.min(2,Math.floor((e/R-s)*3)),l=Math.min(2,Math.floor((t/R-r)*3)),h=Math.min(2,Math.floor((i/R-a)*3));return(o&1<<c+3*(l+3*h))!==0}getHard(e,t,i){return this.inBounds(e,t,i)?this.hard[this.index(e,t,i)]:0}setHard(e,t,i,s){this.inBounds(e,t,i)&&(this.hard[this.index(e,t,i)]=s)}hardAt(e,t,i){return this.getHard(Math.floor(e/R),Math.floor(t/R),Math.floor(i/R))}solidAt(e,t,i){return ht(this.hardAt(e,t,i))&&this.hardOccupiedAt(e,t,i)||this.sampleNearest(e,t,i)>0}index(e,t,i){return(e-this.ox)*this.sx+(t-this.oy)*this.sy+(i-this.oz)}inBounds(e,t,i){return e>=this.ox&&t>=this.oy&&i>=this.oz&&e<this.ox+this.nx&&t<this.oy+this.ny&&i<this.oz+this.nz}get(e,t,i){return this.inBounds(e,t,i)?this.density[this.index(e,t,i)]:-nt}getMaterial(e,t,i){return this.inBounds(e,t,i)?this.material[this.index(e,t,i)]:0}set(e,t,i,s,r){if(!this.inBounds(e,t,i))return;const a=this.index(e,t,i);this.density[a]=s<-nt?-nt:s>nt?nt:s,r!==void 0&&(this.material[a]=r)}sample(e,t,i){const s=e/R-this.ox,r=t/R-this.oy,a=i/R-this.oz;let o=Math.floor(s),c=Math.floor(r),l=Math.floor(a),h=s-o,f=r-c,d=a-l;o<0?(o=0,h=0):o>=this.nx-1&&(o=this.nx-2,h=1),c<0?(c=0,f=0):c>=this.ny-1&&(c=this.ny-2,f=1),l<0?(l=0,d=0):l>=this.nz-1&&(l=this.nz-2,d=1);const u=this.density,g=this.sx,v=this.sy,m=o*g+c*v+l,p=u[m]+(u[m+g]-u[m])*h,A=u[m+1]+(u[m+g+1]-u[m+1])*h,x=u[m+v]+(u[m+g+v]-u[m+v])*h,y=u[m+v+1]+(u[m+g+v+1]-u[m+v+1])*h,E=p+(x-p)*f,_=A+(y-A)*f;return E+(_-E)*d}sampleNearest(e,t,i){const s=Math.round(e/R),r=Math.round(t/R),a=Math.round(i/R);return this.get(s,r,a)}gradient(e,t,i,s=[0,0,0],r=R*.5){return s[0]=this.sample(e+r,t,i)-this.sample(e-r,t,i),s[1]=this.sample(e,t+r,i)-this.sample(e,t-r,i),s[2]=this.sample(e,t,i+r)-this.sample(e,t,i-r),s}materialAt(e,t,i){const s=Math.floor(e/R),r=Math.floor(t/R),a=Math.floor(i/R);let o=-1/0,c=0;for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)for(let f=0;f<=1;f++){const d=this.get(s+l,r+h,a+f);d>o&&(o=d,c=this.getMaterial(s+l,r+h,a+f))}return c}extract(e,t,i,s,r,a){const o=new ha(s,r,a,e,t,i),c=o.density,l=o.material;for(let h=0;h<s;h++){const f=e+h,d=f>=this.ox&&f<this.ox+this.nx;for(let u=0;u<r;u++){const g=t+u,v=g>=this.oy&&g<this.oy+this.ny,m=h*r*a+u*a;if(!d||!v)continue;const p=Math.max(i,this.oz),A=Math.min(i+a,this.oz+this.nz);if(A<=p)continue;const x=this.index(f,g,p),y=A-p;c.set(this.density.subarray(x,x+y),m+(p-i)),l.set(this.material.subarray(x,x+y),m+(p-i)),o.hard.set(this.hard.subarray(x,x+y),m+(p-i)),o.sub.set(this.sub.subarray(x,x+y),m+(p-i)),o.water.set(this.water.subarray(x,x+y),m+(p-i))}}return o}get sizeX(){return(this.nx-1)*R}get sizeY(){return(this.ny-1)*R}get sizeZ(){return(this.nz-1)*R}}const dv=2;function gu(n){const e=Math.round(dv/R),t=Math.floor((n.nx-1)/2)-(e>>1),i=Math.floor((n.nz-1)/2)-(e>>1);return{x0:t,y0:0,z0:i,x1:t+e,y1:e,z1:i+e}}function Hs(n,e,t,i){const s=gu(n);return e>=s.x0&&e<s.x1&&t>=s.y0&&t<s.y1&&i>=s.z0&&i<s.z1}function fv(n){const e=gu(n);let t=0;for(let i=e.x0;i<e.x1;i++)for(let s=e.y0;s<e.y1;s++)for(let r=e.z0;r<e.z1;r++){const a=n.index(i,s,r);n.hard[a]===Ms&&n.sub[a]===0||(n.hard[a]=Ms,n.sub[a]=0,t++)}return t}function Jo(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Ka(n,e,t){let i=Math.imul(n|0,668265261)^Math.imul(e|0,374761393)^Math.imul(t|0,2654435761);return i=Math.imul(i^i>>>15,2246822507),i=Math.imul(i^i>>>13,3266489909),((i^i>>>16)>>>0)/4294967296}const Ai=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],pv=.5*(Math.sqrt(3)-1),Is=(3-Math.sqrt(3))/6,mv=1/3,En=1/6;class Vl{perm=new Uint8Array(512);permMod12=new Uint8Array(512);constructor(e){const t=new Uint8Array(256);for(let s=0;s<256;s++)t[s]=s;const i=Jo(e);for(let s=255;s>0;s--){const r=Math.floor(i()*(s+1)),a=t[s];t[s]=t[r],t[r]=a}for(let s=0;s<512;s++)this.perm[s]=t[s&255],this.permMod12[s]=this.perm[s]%12}noise2(e,t){const i=this.perm,s=this.permMod12;let r=0,a=0,o=0;const c=(e+t)*pv,l=Math.floor(e+c),h=Math.floor(t+c),f=(l+h)*Is,d=e-(l-f),u=t-(h-f);let g,v;d>u?(g=1,v=0):(g=0,v=1);const m=d-g+Is,p=u-v+Is,A=d-1+2*Is,x=u-1+2*Is,y=l&255,E=h&255,_=s[y+i[E]],w=s[y+g+i[E+v]],T=s[y+1+i[E+1]];let M=.5-d*d-u*u;if(M>=0){M*=M;const I=Ai[_];r=M*M*(I[0]*d+I[1]*u)}let S=.5-m*m-p*p;if(S>=0){S*=S;const I=Ai[w];a=S*S*(I[0]*m+I[1]*p)}let C=.5-A*A-x*x;if(C>=0){C*=C;const I=Ai[T];o=C*C*(I[0]*A+I[1]*x)}return 70*(r+a+o)}noise3(e,t,i){const s=this.perm,r=this.permMod12;let a=0,o=0,c=0,l=0;const h=(e+t+i)*mv,f=Math.floor(e+h),d=Math.floor(t+h),u=Math.floor(i+h),g=(f+d+u)*En,v=e-(f-g),m=t-(d-g),p=i-(u-g);let A,x,y,E,_,w;v>=m?m>=p?(A=1,x=0,y=0,E=1,_=1,w=0):v>=p?(A=1,x=0,y=0,E=1,_=0,w=1):(A=0,x=0,y=1,E=1,_=0,w=1):m<p?(A=0,x=0,y=1,E=0,_=1,w=1):v<p?(A=0,x=1,y=0,E=0,_=1,w=1):(A=0,x=1,y=0,E=1,_=1,w=0);const T=v-A+En,M=m-x+En,S=p-y+En,C=v-E+2*En,I=m-_+2*En,L=p-w+2*En,z=v-1+3*En,G=m-1+3*En,B=p-1+3*En,U=f&255,N=d&255,X=u&255,J=r[U+s[N+s[X]]],ae=r[U+A+s[N+x+s[X+y]]],xe=r[U+E+s[N+_+s[X+w]]],Be=r[U+1+s[N+1+s[X+1]]];let ze=.6-v*v-m*m-p*p;if(ze>=0){ze*=ze;const te=Ai[J];a=ze*ze*(te[0]*v+te[1]*m+te[2]*p)}let Pe=.6-T*T-M*M-S*S;if(Pe>=0){Pe*=Pe;const te=Ai[ae];o=Pe*Pe*(te[0]*T+te[1]*M+te[2]*S)}let Q=.6-C*C-I*I-L*L;if(Q>=0){Q*=Q;const te=Ai[xe];c=Q*Q*(te[0]*C+te[1]*I+te[2]*L)}let j=.6-z*z-G*G-B*B;if(j>=0){j*=j;const te=Ai[Be];l=j*j*(te[0]*z+te[1]*G+te[2]*B)}return 32*(a+o+c+l)}fbm2(e,t,i,s=2,r=.5){let a=0,o=1,c=1,l=0;for(let h=0;h<i;h++)a+=o*this.noise2(e*c,t*c),l+=o,o*=r,c*=s;return a/l}fbm3(e,t,i,s,r=2,a=.5){let o=0,c=1,l=1,h=0;for(let f=0;f<s;f++)o+=c*this.noise3(e*l,t*l,i*l),h+=c,c*=a,l*=r;return o/h}ridged2(e,t,i){let s=0,r=.5,a=1,o=1;for(let c=0;c<i;c++){let l=1-Math.abs(this.noise2(e*a,t*a));l*=l*o,o=Math.min(1,Math.max(0,l*2)),s+=l*r,r*=.5,a*=2}return Math.min(1,s)}}class Wl{constructor(e){this.cfg=e,this.n=new Vl(e.seed),this.n2=new Vl(e.seed^1540483477)}n;n2;height(e,t){const i=this.n,s=i.fbm2(e/260,t/260,4),r=Xl(-.15,.55,s),a=i.ridged2(e/110+31.7,t/110-12.3,4),o=i.fbm2(e/34+7.1,t/34+3.3,3),c=i.fbm2(e/9,t/9,2);let l=this.cfg.seaLevel+4+s*12;return l+=Math.pow(a,1.6)*30*r,l+=o*4+c*.8,l}heightInfo(e,t){const i=this.height(e,t),s=.75,r=(this.height(e+s,t)-this.height(e-s,t))/(2*s),a=(this.height(e,t+s)-this.height(e,t-s))/(2*s);return{height:i,slope:Math.hypot(r,a)}}generate(e,t=!0){const{nx:i,ny:s,nz:r}=e,a=this.n,o=this.n2,c=this.cfg.seaLevel,l=14;for(let h=0;h<i;h++){const f=(e.ox+h)*R;for(let d=0;d<r;d++){const u=(e.oz+d)*R,{height:g,slope:v}=this.heightInfo(f,u),m=50+a.noise2(f/40,u/40)*3,p=v>1+a.noise2(f/6,u/6)*.25;for(let A=0;A<s;A++){const x=(e.oy+A)*R;let y=g-x;if(Math.abs(y)<l){const T=a.fbm3(f/22,x/22,u/22,3);if(y+=T*(1.5+Math.min(v,2)*2),x<g-3&&x>3){const M=o.noise3(f/24,x/16,u/24),S=o.noise3(f/24+71.3,x/16+11.9,u/24-40.1),I=(Math.sqrt(M*M+S*S)-.11)*18,L=Xl(g-3,g-8,x),z=I+(1-L)*100;z<y&&(y=z)}}y=y>nt?nt:y<-nt?-nt:y,e.oy+A>=this.cfg.chunksY*he&&(y=-nt);const E=g-x;let _;x>m&&E<3?_=Bi:p&&E<6?_=Qs:E<1.2?_=x<c+1.5?Ks:xs:E<4.5?_=x<c+1?Ks:vs:_=Qs;const w=e.index(e.ox+h,e.oy+A,e.oz+d);e.density[w]=y,e.material[w]=_}}}t&&this.plantTrees(e)}treeSites(e,t){const i=this.cfg.seaLevel,s=[];for(let r=4;r<e-4;r+=2)for(let a=4;a<t-4;a+=2){const o=Ka(r,a,this.cfg.seed),c=this.n.fbm2(r/70+200,a/70+200,2);if(o>.045+c*.06)continue;const{height:l,slope:h}=this.heightInfo(r,a);l<i+2.5||h>.7||l>46||s.push({x:r,z:a,trunkH:3.5+Ka(r+17,a+5,this.cfg.seed)*3,canopyR:2+Ka(r+3,a+29,this.cfg.seed)*1.2})}return s}siteGround(e,t){return this.groundAt(e,t.x,t.z,this.heightInfo(t.x,t.z).height+3)}groundAt(e,t,i,s){const r=Math.floor(t/R),a=Math.floor(i/R);for(let o=Math.min(e.sizeY-1.5,s);o>this.cfg.seaLevel;o-=R){if(e.sample(t,o,i)<=0)continue;const c=e.getMaterial(r,Math.floor(o/R),a);if(!(c===ai||c===os))return o}return-1}plantTreeAt(e,t,i=1,s=this.siteGround(e,t)){if(s<0)return null;const r=t.trunkH*i,a=t.canopyR*(.3+.7*i);this.stampSphereUnion(e,t.x,s+r+a*.5,t.z,a,os,.6*i),this.stampCylinderUnion(e,t.x,s-.5,t.z,r+a*.6,.42*(.6+.4*i),ai);const o=a+1.5;return{x0:Math.max(0,Math.floor((t.x-o)/R)),y0:Math.max(0,Math.floor((s-1)/R)),z0:Math.max(0,Math.floor((t.z-o)/R)),x1:Math.min(e.nx-1,Math.ceil((t.x+o)/R)),y1:Math.min(e.ny-1,Math.ceil((s+r+a*1.5+1)/R)),z1:Math.min(e.nz-1,Math.ceil((t.z+o)/R))}}plantTrees(e){for(const t of this.treeSites(e.sizeX,e.sizeZ))this.plantTreeAt(e,t,1)}treeGrowth(e,t,i){if(i<0)return 0;const s=Math.floor(t.x/R),r=Math.floor(t.z/R),a=Math.max(0,Math.floor((i-.5)/R)),o=Math.min(e.ny-1,Math.ceil((i+1)/R)),c=Math.min(e.ny-1,Math.ceil((i+t.trunkH+t.canopyR*1.5+1)/R));let l=!1,h=i,f=i;for(let g=a;g<=c;g++)for(let v=0;v<=1;v++)for(let m=0;m<=1;m++){const p=s+v,A=r+m;if(!e.inBounds(p,g,A))continue;const x=e.index(p,g,A);if(e.density[x]<=0)continue;const y=e.material[x];y===ai&&g<=o&&(l=!0),y===ai&&(h=Math.max(h,g*R)),(y===ai||y===os)&&(f=Math.max(f,g*R))}if(!l)return 0;const d=Math.min(1,Math.max(0,h-i)/(t.trunkH+t.canopyR*.6)),u=Math.min(1,Math.max(0,f-i)/(t.trunkH+t.canopyR*1.5));return d>=.7&&u>=.85?Math.max(d,.9):d}siteFree(e,t,i){if(i<0||i<this.cfg.seaLevel+1)return!1;const s=Math.floor(t.x/R),r=Math.floor(t.z/R);if(e.hardAt(t.x,i-.2,t.z)!==0||e.waterAt(t.x,i+.3,t.z))return!1;for(let a=i+.6;a<i+t.trunkH+1;a+=R){if(e.hardAt(t.x,a,t.z)!==0)return!1;if(e.sample(t.x,a,t.z)>0){const o=e.getMaterial(s,Math.floor(a/R),r);if(o!==ai&&o!==os)return!1}}return!0}stampSphereUnion(e,t,i,s,r,a,o){const c=Math.floor((t-r-1)/R),l=Math.ceil((t+r+1)/R),h=Math.floor((i-r-1)/R),f=Math.ceil((i+r+1)/R),d=Math.floor((s-r-1)/R),u=Math.ceil((s+r+1)/R);for(let g=c;g<=l;g++)for(let v=h;v<=f;v++)for(let m=d;m<=u;m++){if(!e.inBounds(g,v,m))continue;const p=g*R,A=v*R,x=m*R,y=Math.hypot(p-t,(A-i)*1.15,x-s),E=o*this.n2.noise3(p*1.3,A*1.3,x*1.3),_=r-y+E,w=e.index(g,v,m);_>e.density[w]&&(e.density[w]=Math.min(_,nt)),_>-R&&(e.material[w]=a)}}stampCylinderUnion(e,t,i,s,r,a,o,c=i+.5){const l=Math.floor((t-a-1)/R),h=Math.ceil((t+a+1)/R),f=Math.floor((s-a-1)/R),d=Math.ceil((s+a+1)/R),u=Math.floor(i/R),g=Math.ceil((i+r)/R);for(let v=l;v<=h;v++)for(let m=u;m<=g;m++)for(let p=f;p<=d;p++){if(!e.inBounds(v,m,p))continue;const A=v*R,x=m*R,y=p*R,E=a-Math.hypot(A-t,y-s),_=Math.min(x-i,i+r-x),w=Math.min(E,_),T=e.index(v,m,p);w>e.density[T]&&(e.density[T]=Math.min(w,nt)),w>-R*.6&&x>=c-1e-6&&(e.material[T]=o)}}}function Xl(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const bc=2,Ps=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],Yl=(n,e)=>[n[0]*e,n[1]*e,n[2]*e];function Er(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function ql(n){const e=(n-6)/24*Math.PI*2,t=Math.cos(e),i=Math.sin(e),s=Math.hypot(t,i,.35);let r=[t/s,i/s,.35/s];const a=r[1],o=Er(-.08,.18,a),c=1-Er(.02,.35,a),l=Ps([1,.98,.94],[1,.5,.22],c),h=3*Math.pow(Er(-.02,.25,a),.8);let f=Yl(l,h);const d=[.1,.26,.64],u=[.46,.6,.8],g=[.95,.45,.18],v=[.01,.014,.032],m=[.022,.028,.05];let p=Ps(u,g,c*.85),A=d;A=Ps(v,A,o),p=Ps(m,p,o);const x=Yl(Ps(A,p,.5),.9);if(a<0){const y=Er(0,-.12,a)*.28;r=[-r[0],-r[1],r[2]],r[1]>.05?f=[.55*y,.65*y,.95*y]:f=[0,0,0]}return{dir:r,sun:f,zenith:A,horizon:p,ambient:x,daylight:o}}class gv{sx;sy;sz;data;normals;constructor(e){this.sx=Math.ceil((e.nx-1)/_t),this.sy=Math.ceil((e.ny-1)/_t),this.sz=Math.ceil((e.nz-1)/_t),this.data=new Uint8Array(this.sx*this.sy*this.sz*4),this.normals=new Uint8Array(this.sx*this.sy*this.sz*4)}index(e,t,i){return(e+this.sx*(t+this.sy*i))*4}get texel(){return _t*R}}const _i=[0,0,0];function Tr(n,e,t,i,s,r,a,o){const c=e.texel,l=t*r,h=i*r,f=s*r,d=e.data,u=255/bc,g=a.dir,v=g[1]>0,m=n.sizeY,p=e.normals,A=Xt(vv*255);for(let x=f;x<f+r&&x<e.sz;x++)for(let y=l;y<l+r&&y<e.sx;y++){const E=(y+.5)*c,_=(x+.5)*c;let w=Ql(n,E,(h+r)*c,_,m);for(let T=Math.min(h+r,e.sy)-1;T>=h;T--){const M=e.index(y,T,x);let S=0,C=-1/0,I=0,L=0,z=0,G=0,B=0;const U=y*_t,N=T*_t,X=x*_t;for(let qe=0;qe<_t;qe++)for(let P=0;P<_t;P++)for(let b=0;b<_t;b++){const W=n.getHard(U+qe,N+P,X+b);if(W!==0&&!ht(W)){const ee=Et[W].emissive;ee&&(z+=ee[0],G+=ee[1],B+=ee[2]);continue}if(W!==0){const ee=n.solidFraction(U+qe,N+P,X+b);S+=ee,ee>0&&(L++,I=W);continue}const Z=n.get(U+qe,N+P,X+b);Z>0&&(S++,Z>C&&L===0&&(C=Z,I=n.getMaterial(U+qe,N+P,X+b)))}const J=o?.get(M);let ae;J&&(J[3]===1?ae=J:(z+=J[0],G+=J[1],B+=J[2]));const xe=_t*_t*_t,Be=S/xe;let ze=S>0&&S<xe-1e-6;if(S>=xe-1e-6&&(ze=!dn(n,U-1,N,X)||!dn(n,U+_t,N,X)||!dn(n,U,N-1,X)||!dn(n,U,N+_t,X)||!dn(n,U,N,X-1)||!dn(n,U,N,X+_t)),S>0&&(w=!1),!ze&&ae){d[M]=Xt(ae[0]*u),d[M+1]=Xt(ae[1]*u),d[M+2]=Xt(ae[2]*u),d[M+3]=Math.round(Be*255),p[M]=128,p[M+1]=255,p[M+2]=128,p[M+3]=0;continue}if(!ze&&z+G+B>0){d[M]=Xt(z/Ti*u),d[M+1]=Xt(G/Ti*u),d[M+2]=Xt(B/Ti*u),d[M+3]=Math.round(Be*255),p[M]=128,p[M+1]=128,p[M+2]=128,p[M+3]=255;continue}if(!ze){S===0&&w?(d[M]=0,d[M+1]=0,d[M+2]=0,d[M+3]=0,p[M]=128,p[M+1]=0,p[M+2]=128,p[M+3]=A):(d[M]=0,d[M+1]=0,d[M+2]=0,d[M+3]=Math.round(Be*255),p[M]=128,p[M+1]=255,p[M+2]=128,p[M+3]=0);continue}const Pe=(y+.5)*c,Q=(T+.5)*c,j=(x+.5)*c;let te=0,Ae=1,ge=0;if(L===0){n.gradient(Pe,Q,j,_i,c*.5);const qe=Math.hypot(_i[0],_i[1],_i[2]);qe>1e-5&&(te=-_i[0]/qe,Ae=-_i[1]/qe,ge=-_i[2]/qe)}else{te=(dn(n,U-1,N,X)?0:-1)+(dn(n,U+_t,N,X)?0:1),Ae=(dn(n,U,N-1,X)?0:-1)+(dn(n,U,N+_t,X)?0:1),ge=(dn(n,U,N,X-1)?0:-1)+(dn(n,U,N,X+_t)?0:1);const qe=Math.hypot(te,Ae,ge);qe>0?(te/=qe,Ae/=qe,ge/=qe):Ae=1}const Ne=Et[I]??Et[1],Tt=Ne.albedo;let F=0;const ut=te*g[0]+Ae*g[1]+ge*g[2];v&&ut>0&&xv(n,Pe+te*c*.75,Q+Ae*c*.75,j+ge*c*.75,g,m)&&(F=ut);const Oe=Ql(n,Pe+te*c*.6,Q+Ae*c*.6,j+ge*c*.6,m),Re=(.5+.5*Ae)*(Oe?1:.06),Me=1/Math.PI;let ot=Tt[0]*(a.sun[0]*F*Me+a.ambient[0]*Re),ye=Tt[1]*(a.sun[1]*F*Me+a.ambient[1]*Re),ke=Tt[2]*(a.sun[2]*F*Me+a.ambient[2]*Re);Ne.emissive&&(ot+=Ne.emissive[0],ye+=Ne.emissive[1],ke+=Ne.emissive[2]);const dt=Math.max(Be,$o);if(z+G+B>0){d[M]=Xt((ot*dt+z)/Ti*u),d[M+1]=Xt((ye*dt+G)/Ti*u),d[M+2]=Xt((ke*dt+B)/Ti*u),d[M+3]=Math.round(dt*255),p[M]=128,p[M+1]=128,p[M+2]=128,p[M+3]=255;continue}d[M]=Xt(ot*dt*u),d[M+1]=Xt(ye*dt*u),d[M+2]=Xt(ke*dt*u),d[M+3]=Math.round(dt*255),p[M]=Xt((te*.5+.5)*255),p[M+1]=Xt((Ae*.5+.5)*255),p[M+2]=Xt((ge*.5+.5)*255),p[M+3]=0}}}const $o=.25,vv=.7,Ti=24;function dn(n,e,t,i){return n.getHard(e,t,i)!==0||n.get(e,t,i)>0}function Xt(n){return n<=0?0:n>=255?255:Math.round(n)}function xv(n,e,t,i,s,r){const a=R,o=s[0]*a,c=s[1]*a,l=s[2]*a;for(let h=0;h<400;h++){if(e+=o,t+=c,i+=l,t>r||t<0||e<0||i<0||e>n.sizeX||i>n.sizeZ)return!0;if(n.solidAt(e,t,i))return!1}return!0}function Ql(n,e,t,i,s){for(let r=t;r<=s;r+=R*2)if(n.solidAt(e,r,i))return!1;return!0}const ni=[R/Dt,.5,1,2,4,6,8],qr=[[1,0,0],[0,0,1],[-1,0,0],[0,0,-1]];function br(n,e,t,i,s=R*.2,r=1){const a=n.size*.5*r,o=e-n.x,c=t-n.y,l=i-n.z;if(n.shape==="sphere")return a-Math.sqrt(o*o+c*c+l*l);const h=Math.max(Math.abs(o),Math.abs(c),Math.abs(l)),f=a-h+s;if(n.shape==="cube")return f;const d=n.y-a;if(n.shape==="slab"){const v=n.size/(2*Dt)*r,m=n.y-n.size*.5+n.size/(2*Dt),p=n.size*.5*r;return Math.min(p-Math.max(Math.abs(o),Math.abs(l)),v-Math.abs(t-m))+s}const u=qr[(n.dir??0)&3];if(n.shape==="wall"){const v=n.size*.5,m=(e-n.x)*u[0]+(i-n.z)*u[2]+v,p=Math.min(n.size/Dt,R),A=(e-n.x)*u[2]-(i-n.z)*u[0];return Math.min(p*.5*r-Math.abs(m-p*.5),a-Math.abs(A),a-Math.abs(c))+s}const g=(e-n.x)*u[0]+(i-n.z)*u[2]+a;if(n.shape==="roof"){const v=(e-n.x)*u[2]-(i-n.z)*u[0],m=.75,p=t-d-(a-Math.abs(v))*m,A=Math.abs(p)/Math.sqrt(1+m*m),x=Math.min(n.size/Dt,R)*r;return Math.min(f,x*.5-A+s)}return Math.min(f,g-(t-d)+R/Dt*.5)}function ks(n,e,t=1){const i=e.size*.5+R*1.5,s=Math.max(0,Math.floor((e.x-i)/R)),r=Math.min(n.nx-1,Math.ceil((e.x+i)/R)),a=Math.max(0,Math.floor((e.y-i)/R)),o=Math.min(n.ny-1,Math.ceil((e.y+i)/R)),c=Math.max(0,Math.floor((e.z-i)/R)),l=Math.min(n.nz-1,Math.ceil((e.z+i)/R)),h=n.density,f=n.material;if(e.op==="smooth"){const u=h.slice();for(let g=s;g<=r;g++)for(let v=a;v<=o;v++)for(let m=c;m<=l;m++){const p=br(e,g*R,v*R,m*R);if(p<0)continue;let A=0,x=0;for(let _=-1;_<=1;_++)for(let w=-1;w<=1;w++)for(let T=-1;T<=1;T++){const M=g+_,S=v+w,C=m+T;n.inBounds(M,S,C)&&(A+=u[n.index(M,S,C)],x++)}const y=Math.min(1,p/R),E=n.index(g,v,m);h[E]=h[E]*(1-y)+A/x*y}return{x0:s,y0:a,z0:c,x1:r,y1:o,z1:l}}if(e.pick){const u=Math.max(e.size,R)*.5,g=Math.max(0,Math.ceil((e.x-u)/R-.5)),v=Math.min(n.nx-2,Math.ceil((e.x+u)/R-.5)-1),m=Math.max(0,Math.ceil((e.y-u)/R-.5)),p=Math.min(n.ny-2,Math.ceil((e.y+u)/R-.5)-1),A=Math.max(0,Math.ceil((e.z-u)/R-.5)),x=Math.min(n.nz-2,Math.ceil((e.z+u)/R-.5)-1);for(let y=g;y<=v;y++)for(let E=m;E<=p;E++)for(let _=A;_<=x;_++){if(Hs(n,y,E,_))continue;const w=n.index(y,E,_);n.hard[w]===0||e.mat!==0&&n.hard[w]!==e.mat||(n.hard[w]=0,n.sub[w]=0)}return{x0:Math.max(0,g-1),y0:Math.max(0,m-1),z0:Math.max(0,A-1),x1:Math.min(n.nx-1,v+2),y1:Math.min(n.ny-1,p+2),z1:Math.min(n.nz-1,x+2)}}const d=Vn(e.mat);if(e.op==="sub"||e.op==="add"&&d&&ht(e.mat)){for(let u=s;u<r;u++)for(let g=a;g<o;g++)for(let v=c;v<l;v++){let m=0;for(let x=0;x<Dt;x++)for(let y=0;y<Dt;y++)for(let E=0;E<Dt;E++)br(e,(u+(E+.5)/Dt)*R,(g+(y+.5)/Dt)*R,(v+(x+.5)/Dt)*R,0,t)>0&&(m|=1<<E+3*(y+3*x));if(m===0||Hs(n,u,g,v))continue;const p=n.index(u,g,v),A=n.subMask(u,g,v);if(e.op==="sub"){if(A===0||!ht(n.hard[p])){n.hard[p]!==0&&!ht(n.hard[p])&&(n.hard[p]=0,n.sub[p]=0);continue}const x=A&~m;x===0?(n.hard[p]=0,n.sub[p]=0):n.sub[p]=x===Zt?0:x}else{const x=(ht(n.hard[p])?A:0)|m;n.hard[p]=e.mat,n.sub[p]=x===Zt?0:x}}if(e.op==="add")return{x0:s,y0:a,z0:c,x1:r,y1:o,z1:l}}if(e.op==="add"&&d&&!ht(e.mat)){const u=Math.floor(e.x/R),g=Math.floor(e.y/R),v=Math.floor(e.z/R);return n.setHard(u,g,v,e.mat),n.sub[n.index(u,g,v)]=0,{x0:Math.max(0,u-1),y0:Math.max(0,g-1),z0:Math.max(0,v-1),x1:Math.min(n.nx-1,u+2),y1:Math.min(n.ny-1,g+2),z1:Math.min(n.nz-1,v+2)}}if(e.op==="paint")for(let u=s;u<r;u++)for(let g=a;g<o;g++)for(let v=c;v<l;v++){if(br(e,(u+.5)*R,(g+.5)*R,(v+.5)*R)<=0||Hs(n,u,g,v))continue;const p=n.index(u,g,v);n.hard[p]!==0&&d&&ht(e.mat)&&ht(n.hard[p])&&(n.hard[p]=e.mat)}if((e.op==="add"||e.op==="sub")&&e.size<R){const u=e.op==="add"?1:-1,g=Math.floor(e.x/R),v=Math.floor(e.y/R),m=Math.floor(e.z/R);for(let p=g;p<=g+1;p++)for(let A=v;A<=v+1;A++)for(let x=m;x<=m+1;x++){if(!n.inBounds(p,A,x))continue;const y=Math.hypot(p*R-e.x,A*R-e.y,x*R-e.z),E=Math.max(0,1-y/R),_=n.index(p,A,x);u>0&&A>=n.ny-1||(h[_]=Math.max(-nt,Math.min(nt,h[_]+u*.45*E)),u>0&&h[_]>-R&&(f[_]=e.mat))}return{x0:Math.max(0,g-1),y0:Math.max(0,v-1),z0:Math.max(0,m-1),x1:Math.min(n.nx-1,g+2),y1:Math.min(n.ny-1,v+2),z1:Math.min(n.nz-1,m+2)}}for(let u=s;u<=r;u++)for(let g=a;g<=o;g++)for(let v=c;v<=l;v++){const m=br(e,u*R,g*R,v*R,R*.2,t),p=n.index(u,g,v);if(e.op==="add"){if(g>=n.ny-1)continue;m>h[p]&&(h[p]=Math.min(m,nt)),m>-R&&(f[p]=e.mat)}else if(e.op==="sub"){const A=-m;A<h[p]&&(h[p]=Math.max(A,-nt))}else e.op==="paint"&&m>-R&&(f[p]=e.mat)}return{x0:s,y0:a,z0:c,x1:r,y1:o,z1:l}}function Za(n,e,t,i,s){const r=[],a=c=>Math.max(0,Math.floor((c-2)/e)),o=(c,l)=>Math.min(l-1,Math.floor((c+1)/e));for(let c=a(n.x0);c<=o(n.x1,t);c++)for(let l=a(n.y0);l<=o(n.y1,i);l++)for(let h=a(n.z0);h<=o(n.z1,s);h++)r.push([c,l,h]);return r}function Mv(n){return!(n.pick||n.op!=="add"&&n.op!=="sub"||n.size<R||n.op==="add"&&Vn(n.mat)&&!ht(n.mat))}function yv(n){const e=JSON.parse(n),t=[];for(const i of e){if(!Array.isArray(i)||i.length<7||i.length>9)continue;const[s,r,a,o,c,l,h,f,d]=i;if(!["add","sub","paint","smooth"].includes(s)||!["sphere","cube","slab","ramp","wall","roof"].includes(r))continue;const u={op:s,shape:r,size:+a,mat:+o,x:+c,y:+l,z:+h};d!==void 0&&+d&1?u.pick=!0:f!==void 0&&(u.dir=+f&3),t.push(u)}return t}const Sv=8208|1<<22;function vu(n,e,t,i=64,s=.12){const[r,a,o]=e,[c,l,h]=t,f=(m,p,A)=>!(m<0||p<0||A<0||m>n.sizeX||p>n.sizeY||A>n.sizeZ);let d=f(r,a,o),u=d?n.sample(r,a,o):-1,g=u>0,v=0;for(let m=s;m<=i;m+=s){const p=r+c*m,A=a+l*m,x=o+h*m;let y;if(f(p,A,x))d=!0,y=n.sample(p,A,x);else{if(d)return null;y=-1}if(g)y<=0&&(g=!1);else if(y>0){let E=v,_=m;for(let L=0;L<8;L++){const z=.5*(E+_);n.sample(r+c*z,a+l*z,o+h*z)>0?_=z:E=z}const w=.5*(E+_),T=r+c*w,M=a+l*w,S=o+h*w,C=n.gradient(T,M,S),I=Math.hypot(C[0],C[1],C[2])||1;return{point:[T,M,S],normal:[-C[0]/I,-C[1]/I,-C[2]/I],distance:w,material:n.materialAt(T,M,S),hard:!1}}u=y,v=m}return null}function Av(n,e,t,i=64){const[s,r,a]=e,[o,c,l]=t;let h=Math.floor(s/R),f=Math.floor(r/R),d=Math.floor(a/R);const u=o>0?1:-1,g=c>0?1:-1,v=l>0?1:-1,m=o!==0?Math.abs(R/o):1/0,p=c!==0?Math.abs(R/c):1/0,A=l!==0?Math.abs(R/l):1/0,x=(S,C,I,L)=>I===0?1/0:(L>0?(C+1)*R-S:S-C*R)/Math.abs(I);let y=x(s,h,o,u),E=x(r,f,c,g),_=x(a,d,l,v),w=n.getHard(h,f,d)!==0,T=0,M=-1;for(let S=0;S<1024;S++){if(T>i)return null;const C=n.getHard(h,f,d);if(C!==0&&!w&&M>=0){const I=ht(C)?n.subMask(h,f,d):Sv;if(I===Zt){const B=M===0?[-u,0,0]:M===1?[0,-g,0]:[0,0,-v];return{point:[s+o*T,r+c*T,a+l*T],normal:B,distance:T,material:C,hard:!0}}const L=Math.min(y,E,_),z=R/24;let G=-1;for(let B=T+z*.5;B<L;B+=z){const U=s+o*B,N=r+c*B,X=a+l*B,J=U/R-h,ae=N/R-f,xe=X/R-d,Be=Math.min(2,Math.max(0,Math.floor(J*3))),ze=Math.min(2,Math.max(0,Math.floor(ae*3))),Pe=Math.min(2,Math.max(0,Math.floor(xe*3))),Q=Be+3*(ze+3*Pe);if(I&1<<Q){let j;if(G<0)j=M===0?[-u,0,0]:M===1?[0,-g,0]:[0,0,-v];else{const te=G%3,Ae=Math.floor(G/3)%3;j=te!==Be?[-u,0,0]:Ae!==ze?[0,-g,0]:[0,0,-v]}return{point:[U,N,X],normal:j,distance:B,material:C,hard:!0}}G=Q}}if(C===0&&(w=!1),y<E&&y<_?(T=y,y+=m,h+=u,M=0):E<_?(T=E,E+=p,f+=g,M=1):(T=_,_+=A,d+=v,M=2),(h<0||f<0||d<0||h>=n.nx-1||f>=n.ny-1||d>=n.nz-1)&&T>1)return null}return null}function _v(n,e,t,i=64){const s=Av(n,e,t,i),r=vu(n,e,t,s?s.distance:i);return r&&(!s||r.distance<s.distance)?r:s}const Di=.12,Ls=.62,wv=26,Ev=5.5,ec=1.75,ci=1.62,Kl=22,Tv=9.2,Cr=.6,tc=[.2,1.25],xu=[.15],bv=.3,Cv=.27,Mu=[ci-.12],Dv=1/120,Rv=.78,Iv=8,Pv=5,Zl=[.15,.55,.95,1.35,1.7],Lv=.95;function yu(n,e,t){return{pos:[n,e,t],vel:[0,0,0],onGround:!1,fly:!1}}function Cc(n,e,t){let i=t.dt;for(;i>1e-6;){const s=Math.min(Dv,i);i-=s,Uv(n,e,t,s)}}const en=[0,0,0];function Bv(n,e){let t=0;for(const i of Zl)n.waterAt(e.pos[0],e.pos[1]+i,e.pos[2])&&t++;return t/Zl.length}function Uv(n,e,t,i){const s=e.vel,r=e.fly?0:Bv(n,e);if(e.swim=!e.fly&&r>0&&n.waterAt(e.pos[0],e.pos[1]+(e.crouch?.25:Lv),e.pos[2]),e.fly){const v=1-Math.exp(-i*28);s[0]+=(t.wishX-s[0])*v,s[1]+=(t.wishY-s[1])*v,s[2]+=(t.wishZ-s[2])*v}else if(e.swim){const v=1-Math.exp(-i*Pv);s[0]+=(t.wishX-s[0])*v,s[2]+=(t.wishZ-s[2])*v;const m=Kl*(r/Rv-1),p=t.jump?Math.max(t.wishY,2.5):t.wishY;s[1]+=(m+(p-s[1])*Iv)*i,e.onGround=!1}else{const v=e.onGround?14:4,m=1-Math.exp(-i*v);s[0]+=(t.wishX-s[0])*m,s[2]+=(t.wishZ-s[2])*m,s[1]-=Kl*i,t.jump&&e.onGround&&(s[1]=Tv,e.onGround=!1),s[1]<-40&&(s[1]=-40)}let a=!1;const o=e.pos[0],c=e.pos[1],l=e.pos[2],h=s[0],f=s[2],d=e.onGround;if(e.pos[0]+=s[0]*i,ts(n,e,0)&&(s[0]=0),e.pos[1]+=s[1]*i,ts(n,e,1)&&(s[1]<0&&(a=!0),s[1]=0),e.pos[2]+=s[2]*i,ts(n,e,2)&&(s[2]=0),ja(n,e),a&&(e.onGround=!0),!e.fly&&!e.swim&&d){const v=Math.hypot(h,f)*i,m=Math.hypot(e.pos[0]-o,e.pos[2]-l);if(v>1e-5&&m<v*.6){const p=e.pos[0],A=e.pos[1],x=e.pos[2],y=s[0],E=s[1],_=s[2],w=()=>{e.pos[0]=p,e.pos[1]=A,e.pos[2]=x,s[0]=y,s[1]=E,s[2]=_};if(e.pos[0]=o,e.pos[1]=c+Cr,e.pos[2]=l,s[0]=h,s[2]=f,e.pos[0]+=h*i,ts(n,e,0)&&(s[0]=0),e.pos[2]+=f*i,ts(n,e,2)&&(s[2]=0),ja(n,e),Math.hypot(e.pos[0]-o,e.pos[2]-l)<m+v*.3||e.pos[1]>c+Cr+.05)w();else{let M=!1;for(let S=0;S<8&&!M;S++){e.pos[1]-=Cr/8,ts(n,e,1)&&(M=!0);const C=e.pos[1];ja(n,e),(e.onGround||e.pos[1]>C+1e-6)&&(M=!0)}!M||e.pos[1]>c+Cr+.001||e.pos[1]<c-.001?w():(s[1]<0&&(s[1]=0),e.onGround=!0)}}}Nv(n,e,i);const u=Di+.05;e.pos[0]=Math.min(n.sizeX-u,Math.max(u,e.pos[0])),e.pos[2]=Math.min(n.sizeZ-u,Math.max(u,e.pos[2]));const g=e.fly?.5-ci+.6:.5;e.pos[1]<g&&(e.pos[1]=g,s[1]<0&&(s[1]=0),e.onGround=!e.fly),e.pos[1]>n.sizeY-ec&&(e.pos[1]=n.sizeY-ec,s[1]>0&&(s[1]=0))}function ja(n,e){let t=!1;for(let i=0;i<4;i++){let s=!1;for(const r of e.fly?Mu:e.crouch?xu:tc){const a=e.pos[0],o=e.pos[1]+r,c=e.pos[2],l=-n.sample(a,o,c);if(l>=Di)continue;n.gradient(a,o,c,en);let h=Math.hypot(en[0],en[1],en[2]),f,d,u;h<1e-4?(f=0,d=1,u=0):(f=-en[0]/h,d=-en[1]/h,u=-en[2]/h);const g=Math.min(Di-l,.35);if(d>.55&&!e.fly)e.pos[1]+=Math.min(g/d,.4),e.vel[1]<0&&(e.vel[1]=0),t=!0;else{e.pos[0]+=f*g,e.pos[1]+=d*g,e.pos[2]+=u*g;const v=e.vel[0]*f+e.vel[1]*d+e.vel[2]*u;v<0&&(e.vel[0]-=v*f,e.vel[1]-=v*d,e.vel[2]-=v*u)}s=!0}if(!s)break}!t&&!e.fly&&-n.sample(e.pos[0],e.pos[1]+tc[0]-.06,e.pos[2])<Di&&e.vel[1]<=.01&&(t=!0),e.onGround=t}function Nv(n,e,t){const i=e.fly?Mu[0]:e.crouch?xu[0]:tc[1],s=e.pos[0],r=e.pos[1]+i,a=e.pos[2];let o=-n.sample(s,r,a),c=0,l=0,h=0;if(o<Ls){n.gradient(s,r,a,en);const m=Math.hypot(en[0],en[1],en[2]);m<1e-4?o=1/0:(c=-en[0]/m,l=-en[1]/m,h=-en[2]/m)}const f=Fv(n,s,r,a,Ls);if(f&&f[0]<o&&(o=f[0],c=f[1],l=f[2],h=f[3]),o>=Ls||o<Di-.2||!e.fly&&l>.6)return;const d=Math.min(1,(Ls-Math.max(o,Di))/(Ls-Di)),u=e.vel,g=Math.exp(-t*Ev*d*(e.fly?.3:1));u[0]*=g,u[2]*=g,e.fly&&(u[1]*=g);const v=wv*d*t;u[0]+=c*v,e.fly&&(u[1]+=l*v),u[2]+=h*v}function Fv(n,e,t,i,s){const r=[Math.floor((e-s)/R),Math.floor((t-s)/R),Math.floor((i-s)/R)],a=[Math.floor((e+s)/R),Math.floor((t+s)/R),Math.floor((i+s)/R)];let o=s,c=0,l=1,h=0,f=!1;const d=R/Dt,u=(g,v,m,p)=>{const A=Math.max(g,Math.min(e,g+p)),x=Math.max(v,Math.min(t,v+p)),y=Math.max(m,Math.min(i,m+p)),E=e-A,_=t-x,w=i-y,T=Math.hypot(E,_,w);T>=o||(o=T,f=!0,T>1e-5?(c=E/T,l=_/T,h=w/T):(c=0,l=1,h=0))};for(let g=r[0];g<=a[0];g++)for(let v=r[1];v<=a[1];v++)for(let m=r[2];m<=a[2];m++){if(!ht(n.getHard(g,v,m)))continue;const p=n.subMask(g,v,m);if(p===Zt){u(g*R,v*R,m*R,R);continue}for(let A=0;A<Dt;A++)for(let x=0;x<Dt;x++)for(let y=0;y<Dt;y++)p&1<<y+3*(x+3*A)&&u(g*R+y*d,v*R+x*d,m*R+A*d,d)}return f?[o,c,l,h]:null}const Dr=.12;function ts(n,e,t){const i=e.fly?ci-.3:0,s=e.fly?ci+.15:e.crouch?bv:ec,r=[e.pos[0]-Dr,e.pos[1]+i,e.pos[2]-Dr],a=[e.pos[0]+Dr,e.pos[1]+s,e.pos[2]+Dr],o=r.map(f=>Math.floor(f/R)),c=a.map(f=>Math.floor((f-1e-4)/R)),l=t===1?e.pos[1]+(i+s)*.5:e.pos[t],h=(f,d)=>{for(let u=0;u<3;u++)if(d[u]<=r[u]||f[u]>=a[u])return!1;return l<(f[t]+d[t])*.5?e.pos[t]-=a[t]-f[t]+1e-4:e.pos[t]+=d[t]-r[t]+1e-4,!0};for(let f=o[0];f<=c[0];f++)for(let d=o[1];d<=c[1];d++)for(let u=o[2];u<=c[2];u++){if(!ht(n.getHard(f,d,u)))continue;const g=n.subMask(f,d,u);if(g===Zt){if(h([f*R,d*R,u*R],[(f+1)*R,(d+1)*R,(u+1)*R]))return!0;continue}const v=R/Dt;for(let m=0;m<Dt;m++)for(let p=0;p<Dt;p++)for(let A=0;A<Dt;A++){if(!(g&1<<A+3*(p+3*m)))continue;const x=[f*R+A*v,d*R+p*v,u*R+m*v];if(h(x,[x[0]+v,x[1]+v,x[2]+v]))return!0}}return!1}function ys(n,e,t){for(let i=n.sizeY-1;i>0;i-=.25)if(n.sample(e,i,t)>0||ht(n.hardAt(e,i,t))&&n.hardOccupiedAt(e,i,t))return i+.25;return 1}function zv(n){let e=0;const{nx:t,ny:i,nz:s}=n;for(let r=0;r<t-1;r++)for(let a=0;a<i-1;a++)for(let o=0;o<s-1;o++){const c=n.index(r,a,o),l=n.hard[c];if(l===0||Vn(l))continue;const h=n.sub[c]===0?Zt:n.sub[c];for(let f=0;f<=1;f++)for(let d=0;d<=1;d++)for(let u=0;u<=1;u++){const g=1<<f*2+3*(d*2+3*(u*2));if(!(h&g))continue;const v=n.index(r+f,a+d,o+u);n.density[v]<=0&&(n.density[v]=nt*.5,n.material[v]=l)}n.hard[c]=0,n.sub[c]=0,e++}return e}const Ja=60,Ov=.08,kv=.05,Gv=3e3,jl=4,$a=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]];function ns(n){return Et[n]?.repose!==void 0}class Hv{constructor(e,t){this.field=e,this.seaLevel=t}queue=[];queued=new Set;get pending(){return this.queue.length}wake(e){const t=this.field;for(let i=Math.max(0,e.x0-1);i<=Math.min(t.nx-1,e.x1+1);i++)for(let s=Math.max(0,e.z0-1);s<=Math.min(t.nz-1,e.z1+1);s++)this.wakeColumn(i,s)}wakeColumn(e,t){const i=e*this.field.nz+t;this.queued.has(i)||(this.queued.add(i),this.queue.push(i))}wakeAround(e,t){const i=this.field;this.wakeColumn(e,t);for(const[s,r]of $a){const a=e+s,o=t+r;a>=0&&o>=0&&a<i.nx&&o<i.nz&&this.wakeColumn(a,o)}}clear(){this.queue=[],this.queued.clear()}hardAt(e,t,i){const s=this.field,r=s.hard;for(let a=Math.max(0,e-1);a<=Math.min(s.nx-2,e);a++)for(let o=Math.max(0,i-1);o<=Math.min(s.nz-2,i);o++)for(let c=Math.max(0,t-1);c<=Math.min(s.ny-2,t);c++)if(ht(r[s.index(a,c,o)]))return!0;return!1}top(e,t){const i=this.field,s=i.density;for(let r=i.ny-1;r>=0;r--){const a=i.index(e,r,t);if(s[a]>0){let o=r;if(r+1<i.ny){const l=s[a],h=s[i.index(e,r+1,t)];h<=0&&(o=r+l/(l-h))}const c=o*R<this.seaLevel+.3||i.water[a]!==0||r+1<i.ny&&i.water[i.index(e,r+1,t)]!==0;return{h:o,sand:ns(i.material[a]),wet:c,y:r}}if(this.hardAt(e,r,t))return{h:r,sand:!1,wet:r*R<this.seaLevel+.3,y:r}}return{h:0,sand:!1,wet:!1,y:0}}intervals(e,t,i,s){const r=this.field,a=r.density,o=[];let c=NaN;const l=h=>a[r.index(e,h,t)];l(i)>0&&(c=i-l(i)/R);for(let h=i;h<s;h++){const f=l(h),d=l(h+1);f>0&&d<=0?(o.push(c,h+f/(f-d)),c=NaN):f<=0&&d>0&&(c=h+f/(f-d))}return Number.isNaN(c)||o.push(c,s+Math.max(0,l(s))/R),o}rewrite(e,t,i,s,r,a){const o=this.field,c=o.density,l=o.material;for(let h=i;h<=s;h++){let f=!1,d=1/0;for(let m=0;m<r.length;m+=2){const p=r[m],A=r[m+1];h>=p&&h<=A&&(f=!0),d=Math.min(d,Math.abs(h-p),Math.abs(h-A))}const u=o.index(e,h,t),g=c[u],v=(f?1:-1)*Math.min(d*R,nt);g<=0&&v>0&&(l[u]=a),c[u]=v}}slope(e,t){const i=e.wet?Ja:Et[t]?.repose??Ja;return Math.tan(i*Math.PI/180)}wetAt(e,t,i){const s=this.field,r=Math.max(0,Math.min(s.ny-1,Math.floor(t)));return t*R<this.seaLevel+.3||s.water[s.index(e,r,i)]!==0||r+1<s.ny&&s.water[s.index(e,r+1,i)]!==0}step(){const e=this.field,t=e.material,i=Math.min(Gv,this.queue.length);if(!i)return null;const s=this.queue.splice(0,i);for(const d of s)this.queued.delete(d);const r=new Map,a=(d,u)=>{const g=d*e.nz+u;let v=r.get(g);return v||(v=this.intervals(d,u,0,e.ny-2),r.set(g,v)),v},o=new Map,c=(d,u,g,v)=>{let m=o.get(d);m||(m=new Map,o.set(d,m));const p=m.get(u);p?(p[0]+=g,g>0&&p[1]===0&&(p[1]=v)):m.set(u,[g,v])};let l=null;const h=(d,u,g,v)=>{l=l?{x0:Math.min(l.x0,d),y0:Math.min(l.y0,u),z0:Math.min(l.z0,v),x1:Math.max(l.x1,d),y1:Math.max(l.y1,g),z1:Math.max(l.z1,v)}:{x0:d,y0:u,z0:v,x1:d,y1:g,z1:v}};for(const d of s){const u=Math.floor(d/e.nz),g=d%e.nz,v=a(u,g);for(let m=0;m<v.length;m+=2){const p=v[m+1],A=Math.min(e.ny-2,Math.floor(p)),x=t[e.index(u,A,g)];if(!ns(x))continue;const y=Math.tan((this.wetAt(u,p,g)?Ja:Et[x].repose)*Math.PI/180);let E=0;const _=[];for(const[M,S,C]of $a){const I=u+M,L=g+S;if(I<0||L<0||I>=e.nx||L>=e.nz)continue;const z=a(I,L);let G=0;for(let U=z.length-2;U>=0;U-=2)if(z[U]<=p+.5){G=z[U+1];break}const B=(p-G)*R-y*C*R;B<=.01||(_.push([I*e.nz+L,Math.floor(G),B*.5]),E+=B*.5)}if(!_.length)continue;const w=Math.min(1,Ov/E)/R;let T=0;for(const[M,S,C]of _){const I=C*w;c(M,S,I,x),T+=I}c(d,Math.floor(p),-T,x)}}for(const[d,u]of o)for(const[g,[v,m]]of u){if(Math.abs(v)<1e-4)continue;const p=Math.floor(d/e.nz),A=d%e.nz,x=Math.max(0,Math.floor(g+Math.min(0,v))-jl),y=Math.min(e.ny-2,Math.ceil(g+1+Math.max(0,v))+jl),E=this.intervals(p,A,x,y);let _=-1,w=1/0;for(let M=1;M<E.length;M+=2){const S=Math.abs(E[M]-g-.5);S<w&&S<=1.01&&(w=S,_=M)}if(_>=0)E[_]=Math.max(E[_-1]+.02,E[_]+v);else if(v>0)E.push(g,g+v),E.sort((M,S)=>M-S);else continue;const T=t[e.index(p,Math.min(e.ny-2,g),A)];this.rewrite(p,A,x,y,E,ns(T)?T:m||this.sandFrom(p,A,o,t)),h(p,x,y,A),this.wakeAround(p,A)}for(const d of s){const u=Math.floor(d/e.nz),g=d%e.nz,v=this.intervals(u,g,0,e.ny-2);for(let m=2;m<v.length;m+=2){const p=v[m],A=v[m+1],x=v[m-1],y=p-x;if(y<=.02)continue;const E=Math.ceil(p);if(E>e.ny-2||!ns(t[e.index(u,E,g)])||this.hardAt(u,Math.floor(p),g))continue;let _=E;for(;_+1<=Math.floor(A)&&ns(t[e.index(u,_+1,g)]);)_++;const w=_+1<=Math.floor(A)?_+.5:A,T=Math.min(1,y),M=v.slice(0,m);M.push(p-T,w-T),w<A&&M.push(w,A);for(let I=m+2;I<v.length;I++)M.push(v[I]);const S=Math.max(0,Math.floor(p-T)-1),C=Math.min(e.ny-2,Math.ceil(A)+1);this.rewrite(u,g,S,C,M,t[e.index(u,E,g)]),h(u,S,C,g),this.wakeAround(u,g);break}}if(!l)return null;const f=l;return{x0:Math.max(0,f.x0-1),y0:Math.max(0,f.y0-1),z0:Math.max(0,f.z0-1),x1:Math.min(e.nx-1,f.x1+1),y1:Math.min(e.ny-1,f.y1+1),z1:Math.min(e.nz-1,f.z1+1)}}sandFrom(e,t,i,s){const r=this.field;let a=0,o=0;for(const[c,l]of $a){const h=e+c,f=t+l;if(h<0||f<0||h>=r.nx||f>=r.nz)continue;const d=i.get(h*r.nz+f);if(d){for(const[u,[g]]of d)if(g<a){const v=s[r.index(h,Math.min(r.ny-2,u),f)];ns(v)&&(a=g,o=v)}}}if(o)return o;for(const c of Et)if(c.repose!==void 0)return c.id;return 0}settle(e=2e3){let t=0;for(;t<e&&this.queue.length;)t++,this.step();return t}}const Dc=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Qr=2,Vv=7,Wv=9.8,Xv=.6,Yv=.45,qv=14;function Qv(n,e){return n?{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}:e}function sa(n,e,t,i,s,r,a,o,c){const l=n.density,h=n.material,f=new Float32Array(a*o*c).fill(-nt),d=new Uint8Array(a*o*c),u=[],g=new Set;for(const[S,C,I]of e)g.add(n.index(S,C,I));for(let S=0;S<a;S++)for(let C=0;C<o;C++)for(let I=0;I<c;I++){const L=i+S,z=s+C,G=r+I;if(!n.inBounds(L,z,G))continue;const B=n.index(L,z,G),U=(S*o+C)*c+I;g.has(B)?(f[U]=l[B],d[U]=h[B],u.push([S,C,I])):l[B]<=0?(f[U]=l[B],d[U]=h[B]):(f[U]=-R*.5,d[U]=h[B])}for(const[S,C,I]of e)l[n.index(S,C,I)]=-nt;const v=new Uint8Array(a*o*c),m=new Uint32Array(a*o*c),p=[],A=new Set,x=(S,C,I)=>{if(!n.inBounds(S,C,I))return;const L=n.getHard(S,C,I);if(L===0)return;const z=n.index(S,C,I);if(A.has(z))return;A.add(z);const G=S-i,B=C-s,U=I-r;if(G<0||B<0||U<0||G>=a-1||B>=o-1||U>=c-1)return;const N=n.sub[z];v[(G*o+B)*c+U]=L,m[(G*o+B)*c+U]=N,p.push({x:G,y:B,z:U,mat:L,sub:N}),n.setHard(S,C,I,0),n.sub[z]=0};for(const[S,C,I]of t)x(S,C,I);for(const[S,C,I]of e)for(let L=-1;L<=0;L++)for(let z=-1;z<=0;z++)for(let G=-1;G<=0;G++)x(S+L,C+z,I+G);const y=u.slice();for(const S of p)if(ht(S.mat))for(let C=0;C<8;C++)y.push([S.x+(C&1),S.y+(C>>1&1),S.z+(C>>2&1)]);const E=[0,0,0];for(const[S,C,I]of y)E[0]+=S,E[1]+=C,E[2]+=I;const _=Math.max(1,y.length);E[0]=E[0]/_*R,E[1]=E[1]/_*R,E[2]=E[2]/_*R;const w=(S,C,I)=>S<0||C<0||I<0||S>=a||C>=o||I>=c?-1:f[(S*o+C)*c+I],T=[];let M=0;for(const[S,C,I]of u){const L=S*R-E[0],z=C*R-E[1],G=I*R-E[2];M=Math.max(M,Math.hypot(L,z,G));let B=!1;for(const[U,N,X]of Dc)if(w(S+U,C+N,I+X)<=0){B=!0;break}B&&T.push([L,z,G])}for(let S=u.length;S<y.length;S++){const[C,I,L]=y[S],z=C*R-E[0],G=I*R-E[1],B=L*R-E[2];M=Math.max(M,Math.hypot(z,G,B)),T.push([z,G,B])}return{ox:i,oy:s,oz:r,nx:a,ny:o,nz:c,density:f,material:d,hard:v,sub:m,items:p,solid:u,contacts:T,com:E,radius:Math.max(M,R),pos:[i*R+E[0],s*R+E[1],r*R+E[2]],q:[0,0,0,1],vel:[0,0,0],ang:[0,0,0],rest:0,age:0,settled:!1,touching:!1,texOrigin:[i*R,s*R,r*R]}}function Su(n){return new ha(n.nx,n.ny,n.nz,0,0,0,n.density,n.material,n.hard,n.sub)}function nc(n,e,t=[0,0,0]){return pt[0]=e[0]-n.pos[0],pt[1]=e[1]-n.pos[1],pt[2]=e[2]-n.pos[2],Sn(da(n.q),pt,t),t[0]+=n.com[0],t[1]+=n.com[1],t[2]+=n.com[2],t}function ua(n,e,t=[0,0,0]){return pt[0]=e[0]-n.com[0],pt[1]=e[1]-n.com[1],pt[2]=e[2]-n.com[2],Sn(n.q,pt,t),t[0]+=n.pos[0],t[1]+=n.pos[1],t[2]+=n.pos[2],t}function Kv(n,e,t,i){const s=da(n.q),r=nc(n,e),a=[0,0,0];Sn(s,t,a);const o=vu(Su(n),r,a,i,.08);if(!o)return null;const c=ua(n,o.point),l=[0,0,0];return Sn(n.q,o.normal,l),{point:c,normal:l,distance:o.distance,material:o.material,hard:!1}}function Zv(n,e,t,i,s,r,a){const o=Math.min(0,e),c=Math.min(0,t),l=Math.min(0,i),h=Math.max(n.nx-1,s),f=Math.max(n.ny-1,r),d=Math.max(n.nz-1,a);if(o===0&&c===0&&l===0&&h===n.nx-1&&f===n.ny-1&&d===n.nz-1)return;const u=h-o+1,g=f-c+1,v=d-l+1,m=new Float32Array(u*g*v).fill(-nt),p=new Uint8Array(u*g*v),A=new Uint8Array(u*g*v),x=new Uint32Array(u*g*v);for(let y=0;y<n.nx;y++)for(let E=0;E<n.ny;E++)for(let _=0;_<n.nz;_++){const w=(y*n.ny+E)*n.nz+_,T=((y-o)*g+(E-c))*v+(_-l);m[T]=n.density[w],p[T]=n.material[w],A[T]=n.hard[w],x[T]=n.sub[w]}n.density=m,n.material=p,n.hard=A,n.sub=x,n.nx=u,n.ny=g,n.nz=v;for(const y of n.items)y.x-=o,y.y-=c,y.z-=l;n.com[0]-=o*R,n.com[1]-=c*R,n.com[2]-=l*R,n.texOrigin[0]+=o*R,n.texOrigin[1]+=c*R,n.texOrigin[2]+=l*R,n.ox+=o,n.oy+=c,n.oz+=l}function ic(n){const{nx:e,ny:t,nz:i}=n,s=(f,d,u)=>f<0||d<0||u<0||f>=e||d>=t||u>=i?-1:n.density[(f*t+d)*i+u],r=[];for(let f=0;f<e;f++)for(let d=0;d<t;d++)for(let u=0;u<i;u++)s(f,d,u)>0&&r.push([f,d,u]);n.solid=r;const a=r.slice();for(const f of n.items)if(ht(f.mat))for(let d=0;d<8;d++)a.push([f.x+(d&1),f.y+(d>>1&1),f.z+(d>>2&1)]);if(!a.length){n.contacts=[];return}const o=[0,0,0];for(const[f,d,u]of a)o[0]+=f,o[1]+=d,o[2]+=u;o[0]=o[0]/a.length*R,o[1]=o[1]/a.length*R,o[2]=o[2]/a.length*R;const c=[o[0]-n.com[0],o[1]-n.com[1],o[2]-n.com[2]];Sn(n.q,c,pt),n.pos[0]+=pt[0],n.pos[1]+=pt[1],n.pos[2]+=pt[2],n.com=o;const l=[];let h=0;for(const[f,d,u]of r){const g=f*R-o[0],v=d*R-o[1],m=u*R-o[2];h=Math.max(h,Math.hypot(g,v,m));let p=!1;for(const[A,x,y]of Dc)if(s(f+A,d+x,u+y)<=0){p=!0;break}p&&l.push([g,v,m])}for(let f=r.length;f<a.length;f++){const[d,u,g]=a[f],v=d*R-o[0],m=u*R-o[1],p=g*R-o[2];h=Math.max(h,Math.hypot(v,m,p)),l.push([v,m,p])}n.contacts=l,n.radius=Math.max(h,R),n.rest=0,n.settled=!1}function jv(n,e){if(e.op==="add"&&Vn(e.mat))return[n];const t=nc(n,[e.x,e.y,e.z]),i=e.size*.5+R*2;e.op==="add"&&Zv(n,Math.floor((t[0]-i)/R),Math.floor((t[1]-i)/R),Math.floor((t[2]-i)/R),Math.ceil((t[0]+i)/R),Math.ceil((t[1]+i)/R),Math.ceil((t[2]+i)/R));const s=nc(n,[e.x,e.y,e.z]),r={...e,x:s[0],y:s[1],z:s[2]},a=Su(n);ks(a,r),n.items=[];for(let g=0;g<n.nx-1;g++)for(let v=0;v<n.ny-1;v++)for(let m=0;m<n.nz-1;m++){const p=(g*n.ny+v)*n.nz+m;n.hard[p]!==0&&n.items.push({x:g,y:v,z:m,mat:n.hard[p],sub:n.sub[p]})}const{nx:o,ny:c,nz:l}=n,h=n.density,f=new Uint8Array(o*c*l),d=[];for(let g=0;g<o;g++)for(let v=0;v<c;v++)for(let m=0;m<l;m++){const p=(g*c+v)*l+m;if(h[p]<=0||f[p])continue;const A=[],x=[g,v,m];for(f[p]=1;x.length;){const y=x.pop(),E=x.pop(),_=x.pop();A.push([_,E,y]);for(const[w,T,M]of Dc){const S=_+w,C=E+T,I=y+M;if(S<0||C<0||I<0||S>=o||C>=c||I>=l)continue;const L=(S*c+C)*l+I;h[L]<=0||f[L]||(f[L]=1,x.push(S,C,I))}}if(A.length<=Qr){for(const[y,E,_]of A)h[(y*c+E)*l+_]=-nt;continue}d.push(A)}if(d.length===0)return n.items.length?(ic(n),[n]):[];if(d.length===1)return ic(n),[n];const u=[];for(const g of d){let v=1/0,m=1/0,p=1/0,A=-1/0,x=-1/0,y=-1/0;for(const[w,T,M]of g)v=Math.min(v,w),m=Math.min(m,T),p=Math.min(p,M),A=Math.max(A,w),x=Math.max(x,T),y=Math.max(y,M);const E=sa(a,g,[],v-1,m-1,p-1,A-v+3,x-m+3,y-p+3),_=ua(n,E.pos);E.pos=_,E.q=[n.q[0],n.q[1],n.q[2],n.q[3]],E.vel=[n.vel[0],n.vel[1],n.vel[2]],E.ang=[n.ang[0],n.ang[1],n.ang[2]],E.texOrigin=[n.texOrigin[0]+(v-1)*R,n.texOrigin[1]+(m-1)*R,n.texOrigin[2]+(p-1)*R],u.push(E)}return u}function Sn(n,e,t){const[i,s,r,a]=n,[o,c,l]=e,h=a*o+s*l-r*c,f=a*c+r*o-i*l,d=a*l+i*c-s*o,u=-i*o-s*c-r*l;return t[0]=h*a+u*-i+f*-r-d*-s,t[1]=f*a+u*-s+d*-i-h*-r,t[2]=d*a+u*-r+h*-s-f*-i,t}function da(n){return[-n[0],-n[1],-n[2],n[3]]}function Jv(n,e,t){const[i,s,r]=e,[a,o,c,l]=n,h=.5*t*(i*l+s*c-r*o),f=.5*t*(s*l+r*a-i*c),d=.5*t*(r*l+i*o-s*a),u=.5*t*(-i*a-s*o-r*c);let g=a+h,v=o+f,m=c+d,p=l+u;const A=Math.hypot(g,v,m,p)||1;n[0]=g/A,n[1]=v/A,n[2]=m/A,n[3]=p/A}const pt=[0,0,0],wi=[0,0,0];function $v(n,e,t,i=Vv){if(e.settled)return;e.age+=t;const s=e.vel,r=e.ang;s[1]-=Wv*t;const a=Math.hypot(s[0],s[1],s[2]);if(a>i){const m=i/a;s[0]*=m,s[1]*=m,s[2]*=m}e.pos[0]+=s[0]*t,e.pos[1]+=s[1]*t,e.pos[2]+=s[2]*t,Jv(e.q,r,t);const o=1,c=1/(.4*e.radius*e.radius);let l=0,h=0,f=0,d=0;e.touching=!1;for(const m of e.contacts){Sn(e.q,m,pt);const p=e.pos[0]+pt[0],A=e.pos[1]+pt[1],x=e.pos[2]+pt[2];let y,E=0,_=1,w=0;if(A<0)y=-A;else{const G=n.sample(p,A,x),B=n.hardAt(p,A,x)!==0&&n.hardOccupiedAt(p,A,x);if(G<=0&&!B)continue;y=B?Math.max(G,.12):G,n.gradient(p,A,x,wi);const U=Math.hypot(wi[0],wi[1],wi[2]);U>1e-4&&!B&&(E=-wi[0]/U,_=-wi[1]/U,w=-wi[2]/U)}y=Math.min(y,.5),e.touching=!0;const T=pt[0],M=pt[1],S=pt[2],C=s[0]+(r[1]*S-r[2]*M),I=s[1]+(r[2]*T-r[0]*S),L=s[2]+(r[0]*M-r[1]*T),z=C*E+I*_+L*w;if(z<0){const G=M*w-S*_,B=S*E-T*w,U=T*_-M*E,N=o+c*(G*G+B*B+U*U),X=-1.12*z/N;s[0]+=X*E*o,s[1]+=X*_*o,s[2]+=X*w*o,r[0]+=c*G*X,r[1]+=c*B*X,r[2]+=c*U*X;const J=C-z*E,ae=I-z*_,xe=L-z*w,Be=Math.hypot(J,ae,xe);if(Be>1e-4){const ze=J/Be,Pe=ae/Be,Q=xe/Be,j=M*Q-S*Pe,te=S*ze-T*Q,Ae=T*Pe-M*ze,ge=o+c*(j*j+te*te+Ae*Ae),Ne=Math.min(Be/ge,Xv*X);s[0]-=Ne*ze*o,s[1]-=Ne*Pe*o,s[2]-=Ne*Q*o,r[0]-=c*j*Ne,r[1]-=c*te*Ne,r[2]-=c*Ae*Ne}}l+=E*y,h+=_*y,f+=w*y,d++}d>0&&(e.pos[0]+=l/d*1.05,e.pos[1]+=h/d*1.05,e.pos[2]+=f/d*1.05);const u=Math.exp(-t*(d>0?.9:.05));s[0]*=u,s[2]*=u,d>0&&(s[1]*=u);const g=Math.exp(-t*(d>0?1.1:.3));r[0]*=g,r[1]*=g,r[2]*=g,e.pos[0]=Math.min(n.sizeX-e.radius,Math.max(e.radius,e.pos[0])),e.pos[2]=Math.min(n.sizeZ-e.radius,Math.max(e.radius,e.pos[2]));const v=d>0&&Math.hypot(s[0],s[1],s[2])<.25&&Math.hypot(r[0],r[1],r[2])<.35;e.rest=v?e.rest+t:0,(e.rest>Yv||e.age>qv)&&(e.settled=!0)}function Au(n,e,t,i){const s=e/R,r=t/R,a=i/R,o=Math.floor(s),c=Math.floor(r),l=Math.floor(a);if(o<0||c<0||l<0||o>=n.nx-1||c>=n.ny-1||l>=n.nz-1)return-nt;const h=s-o,f=r-c,d=a-l,u=(y,E,_)=>n.density[(y*n.ny+E)*n.nz+_],g=u(o,c,l)+(u(o+1,c,l)-u(o,c,l))*h,v=u(o,c,l+1)+(u(o+1,c,l+1)-u(o,c,l+1))*h,m=u(o,c+1,l)+(u(o+1,c+1,l)-u(o,c+1,l))*h,p=u(o,c+1,l+1)+(u(o+1,c+1,l+1)-u(o,c+1,l+1))*h,A=g+(m-g)*f,x=v+(p-v)*f;return A+(x-A)*d}function ex(n,e){const t=e.radius+R*2;return{x0:Math.max(0,Math.floor((e.pos[0]-t)/R)),y0:Math.max(0,Math.floor((e.pos[1]-t)/R)),z0:Math.max(0,Math.floor((e.pos[2]-t)/R)),x1:Math.min(n.nx-1,Math.ceil((e.pos[0]+t)/R)),y1:Math.min(n.ny-1,Math.ceil((e.pos[1]+t)/R)),z1:Math.min(n.nz-1,Math.ceil((e.pos[2]+t)/R))}}function tx(n,e){const t=(e.x1-e.x0+1)*(e.y1-e.y0+1)*(e.z1-e.z0+1),i=new Float32Array(t),s=new Uint8Array(t);let r=0;for(let a=e.x0;a<=e.x1;a++)for(let o=e.y0;o<=e.y1;o++)for(let c=e.z0;c<=e.z1;c++,r++){const l=n.index(a,o,c);i[r]=n.density[l],s[r]=n.material[l]}return{d:i,m:s}}function nx(n,e,t){let i=0;for(let s=e.x0;s<=e.x1;s++)for(let r=e.y0;r<=e.y1;r++)for(let a=e.z0;a<=e.z1;a++,i++){const o=n.index(s,r,a);n.density[o]=t.d[i],n.material[o]=t.m[i]}}function ix(n,e,t){if(t<=1e-6)return Math.max(n,e);const i=Math.max(0,Math.min(1,.5+.5*(e-n)/t));return n+(e-n)*i+t*i*(1-i)}function eo(n,e,t,i,s,r){const a=n.density,o=n.material,c=da(e.q),l=[0,0,0];let h=0;for(let f=t.x0;f<=t.x1;f++)for(let d=t.y0;d<=t.y1;d++)for(let u=t.z0;u<=t.z1;u++,h++){const g=n.index(f,d,u);pt[0]=f*R-e.pos[0],pt[1]=d*R-e.pos[1],pt[2]=u*R-e.pos[2],Sn(c,pt,l);const v=l[0]+e.com[0],m=l[1]+e.com[1],p=l[2]+e.com[2],A=Au(e,v,m,p)-s,x=i.d[h];if(d>=n.ny-1||A<=-R){a[g]=x,o[g]=i.m[h];continue}const y=Math.min(nt,ix(x,A,r));if(a[g]=y,A>x&&A>0){const E=Math.min(e.nx-1,Math.max(0,Math.round(v/R))),_=Math.min(e.ny-1,Math.max(0,Math.round(m/R))),w=Math.min(e.nz-1,Math.max(0,Math.round(p/R)));o[g]=e.material[(E*e.ny+_)*e.nz+w]||i.m[h]}else o[g]=i.m[h]}}function _u(n,e,t=[0,0,0]){return ua(n,[(e.x+.5)*R,(e.y+.5)*R,(e.z+.5)*R],t)}function Jl(n,e){let t=0;e[0]=0,e[1]=0,e[2]=0;for(let i=0;i<27;i++)n&1<<i&&(e[0]+=i%3-1,e[1]+=Math.floor(i/3)%3-1,e[2]+=Math.floor(i/9)-1,t++);return t&&(e[0]/=t,e[1]/=t,e[2]/=t),t}function sx(n,e){if(n===0||n===Zt)return n;const t=[Sn(e,[1,0,0],[0,0,0]),Sn(e,[0,1,0],[0,0,0]),Sn(e,[0,0,1],[0,0,0])],i=[-1,-1,-1],s=[1,1,1],r=[!1,!1,!1];for(let g=0;g<2;g++){let v=-1,m=-1,p=-1;for(let A=0;A<3;A++)if(!(i[A]>=0))for(let x=0;x<3;x++)!r[x]&&Math.abs(t[A][x])>p&&(p=Math.abs(t[A][x]),v=x,m=A);i[m]=v,s[m]=t[m][v]<0?-1:1,r[v]=!0}const a=i.indexOf(-1),o=r.indexOf(!1);i[a]=o;const c=(a+1)%3,l=(a+2)%3,h=[0,0,0],f=[0,0,0];h[i[c]]=s[c],f[i[l]]=s[l];const d=[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]];s[a]=d[o]<0?-1:1;let u=0;for(let g=0;g<27;g++)if(n&1<<g){const v=[g%3-1,Math.floor(g/3)%3-1,Math.floor(g/9)-1],m=[0,0,0];for(let p=0;p<3;p++)m[i[p]]+=s[p]*v[p];u|=1<<m[0]+1+3*(m[1]+1+3*(m[2]+1))}return u}const Rr=[0,0,0],Ir=[0,0,0];function $l(n,e){const t=n.density,i=n.material;for(const v of e.items){let m,p,A,x=0;if(ht(v.mat)){const _=v.sub||Zt;x=sx(_,e.q),Jl(_,Rr);const w=ua(e,[(v.x+.5)*R+Rr[0]*R/3,(v.y+.5)*R+Rr[1]*R/3,(v.z+.5)*R+Rr[2]*R/3]);Jl(x,Ir),m=Math.round((w[0]-Ir[0]*R/3)/R-.5),p=Math.round((w[1]-Ir[1]*R/3)/R-.5),A=Math.round((w[2]-Ir[2]*R/3)/R-.5)}else{const _=_u(e,v);m=Math.floor(_[0]/R),p=Math.floor(_[1]/R),A=Math.floor(_[2]/R)}if(!n.inBounds(m,p,A)||m>=n.nx-1||p>=n.ny-1||A>=n.nz-1)continue;const y=n.index(m,p,A),E=n.getHard(m,p,A);if(E===0)n.setHard(m,p,A,v.mat),n.sub[y]=x===Zt?0:x;else if(E===v.mat&&x!==0){const w=(n.sub[y]||Zt)|x;n.sub[y]=w===Zt?0:w}}const s=e.radius+R,r=Math.max(0,Math.floor((e.pos[0]-s)/R)),a=Math.min(n.nx-1,Math.ceil((e.pos[0]+s)/R)),o=Math.max(0,Math.floor((e.pos[1]-s)/R)),c=Math.min(n.ny-1,Math.ceil((e.pos[1]+s)/R)),l=Math.max(0,Math.floor((e.pos[2]-s)/R)),h=Math.min(n.nz-1,Math.ceil((e.pos[2]+s)/R)),f=da(e.q),d=[0,0,0];let u=null;for(let v=r;v<=a;v++)for(let m=o;m<=c;m++)for(let p=l;p<=h;p++){pt[0]=v*R-e.pos[0],pt[1]=m*R-e.pos[1],pt[2]=p*R-e.pos[2],Sn(f,pt,d);const A=d[0]+e.com[0],x=d[1]+e.com[1],y=d[2]+e.com[2],E=Au(e,A,x,y);if(E<=-R)continue;const _=n.index(v,m,p);if(E>t[_]&&m<n.ny-1){if(t[_]=Math.min(E,nt),E>0){const w=Math.min(e.nx-1,Math.max(0,Math.round(A/R))),T=Math.min(e.ny-1,Math.max(0,Math.round(x/R))),M=Math.min(e.nz-1,Math.max(0,Math.round(y/R)));i[_]=e.material[(w*e.ny+T)*e.nz+M]||i[_]}u=Qv(u,{x0:v-1,y0:m-1,z0:p-1,x1:v+1,y1:m+1,z1:p+1})}}const g=u??{x0:r,y0:o,z0:l,x1:a,y1:c,z1:h};return{x0:Math.max(0,g.x0),y0:Math.max(0,g.y0),z0:Math.max(0,g.z0),x1:Math.min(n.nx-1,g.x1),y1:Math.min(n.ny-1,g.y1),z1:Math.min(n.nz-1,g.z1)}}function eh(n){return{ox:n.ox,oy:n.oy,oz:n.oz,nx:n.nx,ny:n.ny,nz:n.nz,density:Array.from(n.density,e=>+e.toFixed(4)),material:Array.from(n.material),hard:Array.from(n.hard),sub:Array.from(n.sub),items:n.items.map(e=>({...e})),pos:[...n.pos],q:[...n.q],vel:[...n.vel],ang:[...n.ang],age:n.age,texOrigin:[...n.texOrigin]}}function rx(n){const e={ox:n.ox,oy:n.oy,oz:n.oz,nx:n.nx,ny:n.ny,nz:n.nz,density:Float32Array.from(n.density),material:Uint8Array.from(n.material),hard:Uint8Array.from(n.hard),sub:Uint32Array.from(n.sub),items:n.items.map(i=>({...i})),solid:[],contacts:[],com:[0,0,0],radius:R,pos:[...n.pos],q:[...n.q],vel:[...n.vel],ang:[...n.ang],rest:0,age:n.age,settled:!1,touching:!1,texOrigin:[...n.texOrigin]},t=[e.pos[0],e.pos[1],e.pos[2]];return ic(e),e.pos=t,e}const to=3,ax=2,sc=.7,ox=2,cx=6,lx=.05,hx=2e3,ux=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function dx(n,e){let t=n*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),(t^t>>>16)>>>0&1}class fx{constructor(e){this.field=e}queue=[];queued=new Set;fuses=new Map;get pending(){return this.queue.length}wake(e){const t=this.field,i=to+1;for(let s=Math.max(0,e.x0-i);s<=Math.min(t.nx-1,e.x1+i);s++)for(let r=Math.max(0,e.z0-i);r<=Math.min(t.nz-1,e.z1+i);r++)this.wakeColumn(s,r)}wakeColumn(e,t){const i=e*this.field.nz+t;this.queued.has(i)||(this.queued.add(i),this.queue.push(i))}clear(){this.queue=[],this.queued.clear(),this.fuses.clear()}coords(e){const t=this.field,i=e%t.nz,s=(e-i)/t.nz,r=s%t.ny;return[(s-r)/t.ny,r,i]}isSnow(e){return this.field.density[e]>0&&this.field.material[e]===Bi}groundUnder(e,t,i){const s=this.field;for(let r=1;r<=ox;r++){const a=t-r;if(a<0)return!0;const o=s.index(e,a,i);if(s.density[o]>0)return s.material[o]!==Bi;for(let c=Math.max(0,e-1);c<=Math.min(s.nx-2,e);c++)for(let l=Math.max(0,i-1);l<=Math.min(s.nz-2,i);l++)if(ht(s.hard[s.index(c,a,l)]))return!0}return!1}step(e){const t=this.field,i=Math.min(hx,this.queue.length);if(i===0)return{fragments:[],changed:null};const s=this.queue.splice(0,i);for(const _ of s)this.queued.delete(_);let r=1/0,a=-1/0,o=1/0,c=-1/0;for(const _ of s){const w=Math.floor(_/t.nz),T=_%t.nz;r=Math.min(r,w),a=Math.max(a,w),o=Math.min(o,T),c=Math.max(c,T)}const l=to+1;r=Math.max(0,r-l),o=Math.max(0,o-l),a=Math.min(t.nx-1,a+l),c=Math.min(t.nz-1,c+l);const h=new Set,f=[];for(let _=r;_<=a;_++)for(let w=o;w<=c;w++){let T=!1;for(let M=0;M<t.ny;M++){const S=t.index(_,M,w);if(!this.isSnow(S)){T=!1;continue}T||this.groundUnder(_,M,w)?(h.add(S),T=!0):(f.push(S),T=!1)}}if(f.length===0)return{fragments:[],changed:null};const d=new Map,u=new Set(f),g=_=>this.coords(_),v=(_,w,T)=>_>=r&&_<=a&&T>=o&&T<=c&&w>=0&&w<t.ny;let m=[];for(const _ of h){const[w,T,M]=g(_);for(const S of[1,-1])if(v(w+S,T,M)){const C=t.index(w+S,T,M);u.has(C)&&!d.has(C)&&(d.set(C,1),m.push(C))}for(const S of[1,-1])if(v(w,T,M+S)){const C=t.index(w,T,M+S);u.has(C)&&!d.has(C)&&(d.set(C,1),m.push(C))}}let p=1;for(;m.length;){for(let w=0;w<m.length;w++){const[T,M,S]=g(m[w]);for(const C of[1,-1]){let I=M+C;for(;I>=0&&I<t.ny;){const L=t.index(T,I,S);if(!u.has(L)||d.has(L))break;d.set(L,p),m.push(L),I+=C}}}const _=[];for(const w of m){const[T,M,S]=g(w);for(const[C,I]of[[1,0],[-1,0],[0,1],[0,-1]]){if(!v(T+C,M,S+I))continue;const L=t.index(T+C,M,S+I);u.has(L)&&!d.has(L)&&(d.set(L,p+1),_.push(L))}}m=_,p++}const A=new Set;for(const _ of f){const w=d.get(_);if(w===void 0)continue;const[T,,M]=this.coords(_);w>=ax+dx(T,M)&&A.add(_)}const x=new Set,y={fragments:[],changed:null},E=new Set;for(const _ of A){if(x.has(_))continue;const w=[_];x.add(_);let T=0,M=_;for(let C=0;C<w.length;C++){const I=w[C];T=Math.max(T,d.get(I)),M=Math.min(M,I);const[L,z,G]=this.coords(I);for(const[B,U,N]of ux){const X=L+B,J=z+U,ae=G+N;if(X<r||X>a||ae<o||ae>c||J<0||J>=t.ny)continue;const xe=t.index(X,J,ae);A.has(xe)&&!x.has(xe)&&(x.add(xe),w.push(xe))}}if(T<to||w.length<cx)continue;E.add(M);const S=this.fuses.get(M);if(S===void 0){this.fuses.set(M,e+sc),this.rewake(w);continue}if(e<S){this.rewake(w);continue}this.fuses.delete(M),y.fragments.push(this.lift(w,y))}for(const _ of Array.from(this.fuses.keys()))!E.has(_)&&!x.has(_)&&this.fuses.delete(_);return y}rewake(e){this.field;for(const t of e){const[i,,s]=this.coords(t);this.wakeColumn(i,s)}}lift(e,t){const i=this.field;let s=1/0,r=1/0,a=1/0,o=-1/0,c=-1/0,l=-1/0;const h=[];for(const m of e){const[p,A,x]=this.coords(m);h.push([p,A,x]),s=Math.min(s,p),r=Math.min(r,A),a=Math.min(a,x),o=Math.max(o,p),c=Math.max(c,A),l=Math.max(l,x)}const f=s-1,d=r-1,u=a-1,g=sa(i,h,[],f,d,u,o-s+3,c-r+3,l-a+3),v={x0:Math.max(0,f),y0:Math.max(0,d),z0:Math.max(0,u),x1:Math.min(i.nx-1,o+1),y1:Math.min(i.ny-1,c+1),z1:Math.min(i.nz-1,l+1)};return t.changed=t.changed?{x0:Math.min(t.changed.x0,v.x0),y0:Math.min(t.changed.y0,v.y0),z0:Math.min(t.changed.z0,v.z0),x1:Math.max(t.changed.x1,v.x1),y1:Math.max(t.changed.y1,v.y1),z1:Math.max(t.changed.z1,v.z1)}:v,this.wake(v),g}settle(e=200,t=0){const i={fragments:[],changed:null};let s=t,r=0;for(;r<e&&this.queue.length;){r++;const a=this.step(s);i.fragments.push(...a.fragments),a.changed&&(i.changed=i.changed?{x0:Math.min(i.changed.x0,a.changed.x0),y0:Math.min(i.changed.y0,a.changed.y0),z0:Math.min(i.changed.z0,a.changed.z0),x1:Math.max(i.changed.x1,a.changed.x1),y1:Math.max(i.changed.y1,a.changed.y1),z1:Math.max(i.changed.z1,a.changed.z1)}:a.changed),s+=sc}return i}}const Zs=8,px=Zs,th=Zs+1,mx=Zs+2,gx={length:1.25,height:.95,width:.5},vx={goat:gx,penguin:{length:.45,height:.66,width:.4},fish:{length:.5,height:.3,width:.25,centred:!0},cat:{length:.8,height:.42,width:.3}},xx={walk:1.4,run:4.2,turn:2.6,flee:4.5,calm:10,probe:1,cliff:1.6,wall:.75,grazeOdds:.35},Mx={walk:.8,run:2.2,turn:2.2,flee:3.2,calm:8,probe:.7,cliff:1,wall:.5,grazeOdds:.3},yx={walk:1.1,run:3.6,turn:4,flee:0,calm:0,probe:.8,cliff:1.4,wall:.6,grazeOdds:0},xn={swim:.7,dash:2.6,turn:3,flee:3.5,calm:7,probe:.6,school:6,close:2.2},Pr=2.2,nh=12,Sx=15,ih=20;function wu(n){return n==="fish"}function rc(n,e,t,i,s,r,a,o=0){const c=a??ys(n,t,i),l=yu(t,wu(e)?c:c+.05,i);return l.crouch=!0,{id:r,kind:e,body:l,yaw:o,yawTarget:o,pitch:0,pitchTarget:0,seed:s,phase:0,mood:"wander",timer:0,speed:0,bored:0,detour:0}}function sh(n){return{kind:n.kind,x:n.body.pos[0],y:n.body.pos[1],z:n.body.pos[2],yaw:n.yaw,seed:n.seed}}function Ax(n,e,t){return rc(n,e.kind,e.x,e.z,e.seed,t,e.y,e.yaw)}function _x(n,e,t,i){for(let s=t+1.2;s>t-3;s-=.15)if(n.sample(e,s,i)>0||n.solidAt(e,s,i))return s+.15;return null}function wx(n){if(n.kind==="cat"){if(n.mood==="rest"||n.mood==="graze")return th}else if(n.mood==="graze")return th;return n.mood==="flop"?Math.floor(n.phase%1*Zs):n.speed<(n.kind==="fish"?.15:.2)?px:Math.floor(n.phase%1*Zs)}function Eu(n,e,t){let i=n.yawTarget-n.yaw;i=Math.atan2(Math.sin(i),Math.cos(i));const s=e*t;return n.yaw+=Math.max(-s,Math.min(s,i)),i}function Ex(n,e,t,i,s,r,a,o,c){const l=e.body.pos,h=l[0]-s[0],f=l[2]-s[2],d=Math.hypot(h,f);if(e.kind==="cat"?(e.bored=Math.max(0,e.bored-i),e.detour=Math.max(0,e.detour-i),e.bored<=0&&d<nh&&e.mood!=="follow"&&d>Pr&&(e.mood="follow",e.timer=Sx,e.detour=0),e.mood==="follow"?(e.detour<=0&&(e.yawTarget=Math.atan2(h,f)),d<Pr?(e.mood="rest",e.timer=4+r()*6):(e.timer<=0||d>nh*1.5)&&(e.mood="wander",e.timer=2+r()*3,e.bored=ih)):e.mood==="rest"&&d<Pr&&(e.yawTarget=Math.atan2(h,f))):(d<t.flee&&e.mood!=="flee"&&(e.mood="flee",e.timer=2+r()*2),e.mood==="flee"&&(e.yawTarget=Math.atan2(-h,-f),d>t.calm&&e.timer<=0&&(e.mood="wander",e.timer=1+r()*3))),e.timer-=i,e.timer<=0&&e.mood!=="flee"&&e.mood!=="follow"){const y=r();e.mood==="rest"&&e.kind==="cat"&&e.bored<=0&&d<Pr?(e.timer=3+r()*4,e.bored=e.timer>6?ih:0):y<.45?(e.mood="wander",e.timer=2+r()*5,e.yawTarget=e.yaw+(r()-.5)*Math.PI,e.kind==="cat"&&(e.bored=Math.max(e.bored,3))):y<.45+t.grazeOdds?(e.mood="graze",e.timer=2+r()*4,a.push({kind:"graze",x:l[0],y:l[1],z:l[2]})):(e.mood="rest",e.timer=3+r()*5)}const u=y=>{const E=-Math.sin(y),_=-Math.cos(y),w=l[0]+E*t.probe,T=l[2]+_*t.probe;if(w<2||T<2||w>o-2||T>c-2)return!1;const M=_x(n,w,l[1],T);return!(M===null||l[1]-M>t.cliff||M-l[1]>t.wall||n.waterAt(w,M-.1,T)||n.waterAt(w,M+.3,T))},g=e.mood==="flee"?t.run:e.mood==="follow"?d>7?t.run:t.walk:e.mood==="wander"?t.walk:0;if(g>0&&!u(e.yawTarget))if(e.mood==="follow"){const y=r()<.5?1:-1;let E=!1;for(const _ of[.7,1.4,2.1])for(const w of[y,-y])!E&&u(e.yawTarget+_*w)&&(e.yawTarget+=_*w,e.detour=.7,E=!0);E||(e.mood="wander",e.timer=2,e.bored=6)}else e.yawTarget+=(r()<.5?1:-1)*(Math.PI*.5+r()*.5),e.mood==="wander"&&(e.timer=Math.max(e.timer,1.5));const v=Eu(e,t.turn,i),m=Math.max(0,Math.cos(v)),p=g*(.3+.7*m);e.speed+=(p-e.speed)*Math.min(1,i*6);const A=-Math.sin(e.yaw)*e.speed,x=-Math.cos(e.yaw)*e.speed;Cc(n,e.body,{wishX:A,wishZ:x,wishY:0,jump:!1,dt:i}),e.phase+=e.speed/t.walk*i*(e.kind==="penguin"?1.8:1.3)}function cs(n,e,t,i){return n.waterAt(e,t,i)&&!n.solidAt(e,t,i)}function Tx(n,e,t,i,s,r,a,o){const c=e.body.pos;if(!n.waterAt(c[0],c[1],c[2])){e.mood!=="flop"&&(e.mood="flop",e.timer=0),e.speed=0,e.pitch=0,e.body.fly=!1,Cc(n,e.body,{wishX:0,wishZ:0,wishY:0,jump:!1,dt:i}),e.timer-=i,e.timer<=0&&(e.timer=.6+r()*2,e.yaw+=(r()-.5)*1.5),e.phase+=i*(e.timer<.3?6:.5);return}e.mood==="flop"&&(e.mood="wander",e.timer=0);const l=c[0]-s[0],h=c[1]-s[1]-1.2,f=c[2]-s[2],d=Math.hypot(l,h,f);if(d<xn.flee&&e.mood!=="flee"&&(e.mood="flee",e.timer=1.5+r()*1.5),e.mood==="flee"&&(e.yawTarget=Math.atan2(-l,-f),e.pitchTarget=Math.max(-.5,Math.min(.5,Math.atan2(h,Math.hypot(l,f))*.5)),d>xn.calm&&e.timer<=0&&(e.mood="wander",e.timer=1+r()*3)),e.timer-=i,e.timer<=0&&e.mood!=="flee"&&(r()<.6?(e.mood="wander",e.timer=2+r()*5,e.yawTarget=e.yaw+(r()-.5)*Math.PI,e.pitchTarget=(r()-.5)*.5):(e.mood="rest",e.timer=2+r()*4,e.pitchTarget=0),e.mood==="wander")){let S=0,C=0,I=0,L=0;for(const z of t){if(z===e||z.kind!==e.kind)continue;Math.hypot(z.body.pos[0]-c[0],z.body.pos[1]-c[1],z.body.pos[2]-c[2])<xn.school&&(S+=z.body.pos[0],C+=z.body.pos[1],I+=z.body.pos[2],L++)}if(L){S/=L,C/=L,I/=L;const z=Math.hypot(S-c[0],I-c[2]);z>xn.close&&(e.yawTarget=Math.atan2(-(S-c[0]),-(I-c[2]))+(r()-.5)*.6,e.pitchTarget=Math.max(-.4,Math.min(.4,Math.atan2(C-c[1],z))))}}cs(n,c[0],c[1]+.35,c[2])||(e.pitchTarget=Math.min(e.pitchTarget,-.35)),cs(n,c[0],c[1]-.35,c[2])||(e.pitchTarget=Math.max(e.pitchTarget,.35));const u=e.mood==="flee"?xn.dash:e.mood==="wander"?xn.swim:.1,g=-Math.sin(e.yawTarget)*Math.cos(e.pitchTarget),v=Math.sin(e.pitchTarget),m=-Math.cos(e.yawTarget)*Math.cos(e.pitchTarget),p=c[0]+g*xn.probe,A=c[1]+v*xn.probe,x=c[2]+m*xn.probe;(p<2||x<2||p>a-2||x>o-2||!cs(n,p,A,x))&&(e.yawTarget+=(r()<.5?1:-1)*(Math.PI*.5+r()*.6),e.mood==="wander"&&(e.timer=Math.max(e.timer,1)));const y=Eu(e,xn.turn,i);e.pitch+=Math.max(-1.5*i,Math.min(1.5*i,e.pitchTarget-e.pitch));const E=Math.max(0,Math.cos(y));e.speed+=(u*(.3+.7*E)-e.speed)*Math.min(1,i*4);const _=-Math.sin(e.yaw)*Math.cos(e.pitch)*e.speed*i,w=Math.sin(e.pitch)*e.speed*i,T=-Math.cos(e.yaw)*Math.cos(e.pitch)*e.speed*i;cs(n,c[0]+_,c[1]+w,c[2]+T)?(c[0]+=_,c[1]+=w,c[2]+=T):(e.speed*=.5,e.yawTarget+=(r()<.5?1:-1)*1.2),e.phase+=(.6+e.speed/xn.swim)*i*1.4}function bx(n,e,t,i,s){const r=[],a=(n.nx-1)*R,o=(n.nz-1)*R;for(const c of e)c.kind==="fish"?Tx(n,c,e,t,i,s,a,o):Ex(n,c,c.kind==="goat"?xx:c.kind==="penguin"?Mx:yx,t,i,s,r,a,o);return r}function rh(n,e,t,i,s,r,a="goat"){const o=[],c=(n.nx-1)*R,l=(n.nz-1)*R;let h=0;for(;o.length<i&&h++<i*60;){const f=4+s()*(c-8),d=4+s()*(l-8),u=ys(n,f,d);if(u<e+.5)continue;const g=n.getMaterial(Math.floor(f/R),Math.floor((u-.2)/R),Math.floor(d/R));r.includes(g)&&o.push({kind:a,x:f,y:u,z:d,yaw:s()*Math.PI*2,seed:Math.floor(s()*1e9)^t})}return o}function Cx(n,e,t,i,s){for(let r=0;r<8;r++){const a=r/8*Math.PI*2;for(const o of[s*.5,s])if(n.waterAt(e+Math.cos(a)*o,i-.25,t+Math.sin(a)*o))return!0}return!1}function Dx(n,e,t,i,s,r){const a=[],o=(n.nx-1)*R,c=(n.nz-1)*R;let l=null;for(let f=0;f<400&&!l;f++){const d=4+s()*(o-8),u=4+s()*(c-8),g=ys(n,d,u);if(g<e+.1||g>e+4)continue;const v=n.getMaterial(Math.floor(d/R),Math.floor((g-.2)/R),Math.floor(u/R));!r.includes(v)||!Cx(n,d,u,e,5)||(l=[d,u])}if(!l)return a;let h=0;for(;a.length<i&&h++<i*40;){const f=l[0]+(s()-.5)*10,d=l[1]+(s()-.5)*10;if(f<3||d<3||f>o-3||d>c-3)continue;const u=ys(n,f,d);u<e+.1||u>e+5||n.waterAt(f,u-.1,d)||n.waterAt(f,u+.3,d)||a.push({kind:"penguin",x:f,y:u,z:d,yaw:s()*Math.PI*2,seed:Math.floor(s()*1e9)^t})}return a}function ah(n,e,t,i){let s=0;for(;s<30&&cs(n,e,i-.25-s,t);)s+=.25;return s}function Rx(n,e,t,i,s){const r=[],a=(n.nx-1)*R,o=(n.nz-1)*R;let c=null;for(let h=0;h<400&&!c;h++){const f=4+s()*(a-8),d=4+s()*(o-8);ah(n,f,d,e)>=1.5&&(c=[f,d])}if(!c)return r;let l=0;for(;r.length<i&&l++<i*40;){const h=c[0]+(s()-.5)*6,f=c[1]+(s()-.5)*6;if(h<3||f<3||h>a-3||f>o-3)continue;const d=ah(n,h,f,e);if(d<.9)continue;const u=e-.4-s()*(d-.7);cs(n,h,u,f)&&r.push({kind:"fish",x:h,y:u,z:f,yaw:s()*Math.PI*2,seed:Math.floor(s()*1e9)^t})}return r}function Ix(n,e,t,i){const s=n.body.pos,r=vx[n.kind],a=r.width*.5+.1,o=r.centred?s[1]-r.height*.5:s[1],c=o+Math.min(a,r.height*.5),l=o+Math.max(r.height-a,r.height*.5);let h=null;for(let f=0;f<=6;f++){const d=c+(l-c)*f/6,u=s[0]-e[0],g=d-e[1],v=s[2]-e[2],m=u*t[0]+g*t[1]+v*t[2];if(m<0||m>i)continue;const p=u-t[0]*m,A=g-t[1]*m,x=v-t[2]*m;p*p+A*A+x*x<=a*a&&(h===null||m<h)&&(h=m-a*.5)}return h}const Px=120,oh=80,Lx=12,Bx=24,Ux=5,Lr=[.3,.62,1];class Nx{constructor(e,t,i){this.gen=e,this.sites=e.treeSites(t,i),this.state=this.sites.map(()=>({next:-1,stage:-1}))}sites;state;cursor=0;lastCheck=-1/0;stageOf(e){return Math.max(0,this.state[e].stage)}get standingCount(){return this.state.filter(e=>e.stage>=Lr.length).length}step(e,t,i,s){const r=[];if(t-this.lastCheck<Ux||!this.sites.length)return r;this.lastCheck=t;for(let a=0;a<Bx&&a<this.sites.length;a++){const o=this.cursor;this.cursor=(this.cursor+1)%this.sites.length;const c=this.sites[o],l=this.state[o],h=this.gen.siteGround(e,c),f=this.gen.treeGrowth(e,c,h);if(l.stage>=Lr.length&&f>0)continue;if(f>=.85){l.stage=Lr.length,l.next=-1;continue}const d=f<=0?0:f<.5?1:2;if(l.stage!==d||l.next<0){l.stage=d,l.next=t+(d===0?Px:oh)*(.7+s()*.6);continue}if(t<l.next||Math.hypot(c.x-i[0],c.z-i[2])<Lx)continue;if(!this.gen.siteFree(e,c,h)){l.next=t+60;continue}const u=this.gen.plantTreeAt(e,c,Lr[d],h);u&&r.push(u),l.stage=d+1,l.next=t+oh*(.7+s()*.6)}return r}}const Fx="splinecraft",di="chunks",Ot="worlds",Yn=n=>String(n);async function ch(n,e){const t=await Kn();t&&await new Promise(i=>{const s=t.transaction(Ot,"readwrite"),r=s.objectStore(Ot),a=Yn(n),o=r.get(a);o.onsuccess=()=>{const c=o.result;c&&r.put({...c,animals:e,updatedAt:Date.now()})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}function Kn(){return new Promise(n=>{try{const e=indexedDB.open(Fx,2);e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(di)||t.createObjectStore(di),t.objectStoreNames.contains(Ot)||t.createObjectStore(Ot,{keyPath:"id"})},e.onsuccess=()=>n(e.result),e.onerror=()=>n(null),e.onblocked=()=>n(null)}catch{n(null)}})}const zx=(n,e,t,i)=>`${n}/${e},${t},${i}`,Tu=n=>IDBKeyRange.bound(`${n}/`,`${n}/￿`);async function Ox(n){if(typeof CompressionStream>"u")return{deflated:!1,blob:n};try{const e=new CompressionStream("deflate-raw"),t=e.writable.getWriter();return t.write(n),t.close(),{deflated:!0,blob:new Uint8Array(await new Response(e.readable).arrayBuffer())}}catch{return{deflated:!1,blob:n}}}async function kx(n,e){if(!e)return n;const t=new DecompressionStream("deflate-raw"),i=t.writable.getWriter();return i.write(n),i.close(),new Uint8Array(await new Response(t.readable).arrayBuffer())}async function Gx(n){const e=n.n*n.n*n.n,t=n.sub!==null,i=n.water!==null&&n.water!==void 0,s=new Uint8Array(e*2+e+e+(t?e*4:0)+(i?e:0));let r=0;s.set(new Uint8Array(n.density.buffer,n.density.byteOffset,e*2),r),r+=e*2,s.set(n.material,r),r+=e,s.set(n.hard,r),r+=e,t&&(s.set(new Uint8Array(n.sub.buffer,n.sub.byteOffset,e*4),r),r+=e*4),i&&(s.set(n.water,r),r+=e);const{deflated:a,blob:o}=await Ox(s);return{v:2,cx:n.cx,cy:n.cy,cz:n.cz,n:n.n,deflated:a,hasSub:t,hasWater:i,blob:o}}async function Hx(n){const e=n.n*n.n*n.n,t=await kx(n.blob,n.deflated);let i=0;const s=new Int16Array(t.slice(i,i+e*2).buffer);i+=e*2;const r=t.slice(i,i+e);i+=e;const a=t.slice(i,i+e);i+=e;let o=null;n.hasSub&&(o=new Uint32Array(t.slice(i,i+e*4).buffer),i+=e*4);let c=null;return n.hasWater&&(c=t.slice(i,i+e),i+=e),{cx:n.cx,cy:n.cy,cz:n.cz,n:n.n,density:s,material:r,hard:a,sub:o,water:c}}async function Vx(n){const e=await Kn();if(!e)return[];const t=await new Promise(s=>{const r=[],a=e.transaction(di,"readonly"),o=a.objectStore(di).openCursor(Tu(Yn(n)));o.onsuccess=()=>{const c=o.result;if(!c){s(r);return}r.push(c.value),c.continue()},o.onerror=()=>s(r),a.onerror=()=>s(r)}),i=[];for(const s of t){const r=s;if(r&&r.v===2&&r.blob)try{i.push(await Hx(r))}catch{}else r&&r.density&&r.material&&r.hard&&i.push(r)}return i}async function lh(n,e){const t=await Kn();if(!t)return!1;const i=await Promise.all(e.map(Gx));return new Promise(s=>{const r=t.transaction([di,Ot],"readwrite"),a=r.objectStore(di),o=Yn(n);for(const h of i)a.put(h,zx(o,h.cx,h.cy,h.cz));const c=r.objectStore(Ot),l=c.get(o);l.onsuccess=()=>{const h=l.result??{id:o,name:Rc(n),seed:n,createdAt:Date.now(),updatedAt:0,edited:0};c.put({...h,updatedAt:Date.now(),edited:(h.edited??0)+e.length})},r.oncomplete=()=>s(!0),r.onerror=()=>s(!1),r.onabort=()=>s(!1)})}async function no(n,e){const t=await Kn();return t?new Promise(i=>{const s=t.transaction(Ot,"readwrite"),r=s.objectStore(Ot),a=Yn(n),o=r.get(a);o.onsuccess=()=>{const c=o.result;c&&r.put({...c,bodies:e,updatedAt:Date.now()})},s.oncomplete=()=>i(!0),s.onerror=()=>i(!1),s.onabort=()=>i(!1)}):!1}const Rc=n=>`World ${n}`;async function Wx(){const n=await Kn();return n?new Promise(e=>{const t=n.transaction(Ot,"readonly"),i=t.objectStore(Ot).getAll();i.onsuccess=()=>e((i.result??[]).sort((s,r)=>r.updatedAt-s.updatedAt)),i.onerror=()=>e([]),t.onerror=()=>e([])}):[]}async function Xx(n){const e=await Kn();return e?new Promise(t=>{const i=e.transaction(Ot,"readonly"),s=i.objectStore(Ot).get(Yn(n));s.onsuccess=()=>t(s.result??null),s.onerror=()=>t(null),i.onerror=()=>t(null)}):null}async function Yx(n,e){const t=await Kn();return t?new Promise(i=>{const s=t.transaction(Ot,"readwrite"),r=s.objectStore(Ot),a=Yn(n),o=r.get(a);let c=null;o.onsuccess=()=>{const l=o.result??{id:a,name:Rc(n),seed:n,createdAt:Date.now(),updatedAt:0,edited:0,chunks:e};c={...l,chunks:l.chunks??e,updatedAt:Date.now()},r.put(c)},s.oncomplete=()=>i(c),s.onerror=()=>i(null),s.onabort=()=>i(null)}):null}async function qx(n,e){const t=await Kn();t&&await new Promise(i=>{const s=t.transaction(Ot,"readwrite"),r=s.objectStore(Ot),a=Yn(n),o=r.get(a);o.onsuccess=()=>{const c=o.result??{id:a,name:e,seed:n,createdAt:Date.now(),updatedAt:Date.now(),edited:0};r.put({...c,name:e.trim()||Rc(n)})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}async function hh(n){const e=await Kn();e&&await new Promise(t=>{const i=e.transaction([di,Ot],"readwrite");i.objectStore(di).delete(Tu(Yn(n))),i.objectStore(Ot).delete(Yn(n)),i.oncomplete=()=>t(),i.onerror=()=>t(),i.onabort=()=>t()})}const ra=40,bu=72,Cu=30,Du=10,Qx=10,Kx=he*R*Math.sqrt(3)/2,Zx=2;function jx(n,e){return e==="low"||n<=0?1/0:e==="medium"?n===1?ra:-1/0:n===1?bu:n===2?Cu:-1/0}function Jx(n,e,t){if(t==="low")return 0;const i=s=>e>=s?Du:0;return t==="medium"?n<ra+i(1)?1:0:n<Cu+i(2)?2:n<bu+i(1)?1:0}function $x(n,e){if(n<=0)return 0;const t=jx(n,e);return Number.isFinite(t)?Math.max(1,t-Kx-Zx):0}/**
 * postprocessing v6.39.2 build Sun Jun 28 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var eM=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Ht;return t.setAttribute("position",new Ze(n,3)),t.setAttribute("uv",new Ze(e,2)),t})(),kt=class ac{static get fullscreenGeometry(){return eM}constructor(e="Pass",t=new Li,i=new Ss){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new vt(ac.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Li),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=_n){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof at||t instanceof Qn||t instanceof Lt||t instanceof ac)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},tM=class extends kt{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){const r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},nM=`#ifdef COLOR_WRITE
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
}`,Ic="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Ru=class extends rt{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new ce(null),depthBuffer:new ce(null),channelWeights:new ce(null),opacity:new ce(1)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:nM,vertexShader:Ic}),this.depthFunc=Zr}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},Iu=class extends kt{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new Ru,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new at(1,1,{minFilter:tt,magFilter:tt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==yt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===st&&(this.renderTarget.texture.colorSpace=st))}},uh=new Ye,Pc=class extends kt{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),c=r!==null,l=a>=0;c?(n.getClearColor(uh),n.setClearColor(r,l?a:o)):l&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),c?n.setClearColor(uh,o):l&&n.setClearAlpha(o)}},iM=class extends kt{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new Pc(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){const r=n.getContext(),a=n.state.buffers,o=this.scene,c=this.camera,l=this.clearPass,h=this.inverted?0:1,f=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,h,4294967295),a.stencil.setClear(f),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?l.render(n,null):(l.render(n,e),l.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,c)):(n.setRenderTarget(e),n.render(o,c),n.setRenderTarget(t),n.render(o,c)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},io=1/1e3,sM=1e3,rM=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*io}get fixedDelta(){return this._fixedDelta*io}set fixedDelta(n){this._fixedDelta=n*sM}get elapsed(){return this._elapsed*io}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},aM=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Iu,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new rM,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples}set multisampling(n){const e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new me),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===yt&&n.outputColorSpace===st&&(this.inputBuffer.texture.colorSpace=st,this.outputBuffer.texture.colorSpace=st,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=this.inputBuffer,e=new ca;this.depthTexture=e,n.stencilBuffer?(e.format=ms,e.type=ps):e.type=tn;const t=e.clone();return t.name="EffectComposer.StableDepth",this.depthRenderTarget=new at(n.width,n.height,{depthBuffer:!0,stencilBuffer:n.stencilBuffer,depthTexture:t}),t}blitDepthBuffer(n){const e=this.renderer,t=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(t);const r=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,o=n.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){const s=this.renderer,r=s===null?new me:s.getDrawingBufferSize(new me),a={minFilter:tt,magFilter:tt,stencilBuffer:e,depthBuffer:n,type:t},o=new at(r.width,r.height,a);return i>0&&(o.samples=i),t===yt&&s!==null&&s.outputColorSpace===st&&(o.texture.colorSpace=st),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new me),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(s.width,s.height),n.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(n of t)n.setDepthTexture(o)}else{const o=this.depthRenderTarget.depthTexture;n.setDepthTexture(o)}}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(o,c)=>o||c.needsDepthTexture;if(!e.reduce(r,!1)){const o=this.depthRenderTarget.depthTexture;n.getDepthTexture()===o&&n.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,r,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(i.depthTexture=this.depthTexture,s.depthTexture=null,o.render(e,i,s,n,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){t.renderToScreen=o.renderToScreen;const c=e.getContext(),l=e.state.buffers.stencil;l.setFunc(c.NOTEQUAL,1,4294967295),t.render(e,i,s,n,a),l.setFunc(c.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof iM?a=!0:o instanceof tM&&(a=!1)}}setSize(n,e,t){const i=this.renderer,s=i.getSize(new me);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);const r=i.getDrawingBufferSize(new me);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),kt.fullscreenGeometry.dispose()}},Pn={NONE:0,DEPTH:1,CONVOLUTION:2},et={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},oM=class{constructor(){this.shaderParts=new Map([[et.FRAGMENT_HEAD,null],[et.FRAGMENT_MAIN_UV,null],[et.FRAGMENT_MAIN_IMAGE,null],[et.VERTEX_HEAD,null],[et.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Pn.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ui}},so=!1,dh=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Gt:t=this.materialsFlatShadedDoubleSide;break;case Rt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Gt:t=this.materialsDoubleSide;break;case Rt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof rt))return n.clone();const e=n.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const i=n.clone();for(const s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=Ln;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Rt,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Gt,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Rt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Gt,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,so){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return so}static set workaroundEnabled(n){so=n}},ii=-1,It=class extends qn{constructor(n=null,e=ii,t=ii,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new me(1,1),this.preferredSize=new me(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new me,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==ii?t.width=e.width:e.height!==ii?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==ii?t.height=e.height:e.width!==ii?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(ii),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return ii}},We={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},cM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",hM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",MM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_M="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",IM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",zM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kM=new Map([[We.ADD,cM],[We.ALPHA,lM],[We.AVERAGE,hM],[We.COLOR,uM],[We.COLOR_BURN,dM],[We.COLOR_DODGE,fM],[We.DARKEN,pM],[We.DIFFERENCE,mM],[We.DIVIDE,gM],[We.DST,null],[We.EXCLUSION,vM],[We.HARD_LIGHT,xM],[We.HARD_MIX,MM],[We.HUE,yM],[We.INVERT,SM],[We.INVERT_RGB,AM],[We.LIGHTEN,_M],[We.LINEAR_BURN,wM],[We.LINEAR_DODGE,EM],[We.LINEAR_LIGHT,TM],[We.LUMINOSITY,bM],[We.MULTIPLY,CM],[We.NEGATION,DM],[We.NORMAL,RM],[We.OVERLAY,IM],[We.PIN_LIGHT,PM],[We.REFLECT,LM],[We.SATURATION,BM],[We.SCREEN,UM],[We.SOFT_LIGHT,NM],[We.SRC,FM],[We.SUBTRACT,zM],[We.VIVID_LIGHT,OM]]),GM=class extends qn{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new ce(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return kM.get(this.blendFunction)}},zi=class extends qn{constructor(n,e,{attributes:t=Pn.NONE,blendFunction:i=We.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new GM(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=ui,this._outputColorSpace=on}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=_n){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof at||e instanceof Qn||e instanceof Lt||e instanceof kt)&&this[n].dispose()}}},Lc={MEDIUM:2,LARGE:3},HM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,VM="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",WM=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],XM=class extends rt{constructor(n=new mt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new ce(null),texelSize:new ce(new mt),scale:new ce(1),kernel:new ce(0)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:HM,vertexShader:VM}),this.setTexelSize(n.x,n.y),this.kernelSize=Lc.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return WM[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},YM=class extends kt{constructor({kernelSize:n=Lc.MEDIUM,resolutionScale:e=.5,width:t=It.AUTO_SIZE,height:i=It.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new at(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new It(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new XM,this._blurMaterial.kernelSize=n,this.copyMaterial=new Ru}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.renderTargetA,c=this.renderTargetB,l=this.blurMaterial,h=l.kernelSequence;let f=e;this.fullscreenMaterial=l;for(let d=0,u=h.length;d<u;++d){const g=(d&1)===0?o:c;l.kernel=h[d],l.inputBuffer=f.texture,n.setRenderTarget(g),n.render(r,a),f=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=f.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==yt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===st&&(this.renderTargetA.texture.colorSpace=st,this.renderTargetB.texture.colorSpace=st))}static get AUTO_SIZE(){return It.AUTO_SIZE}},qM=`#include <common>
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
}`,QM=class extends rt{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Ni.replace(/\D+/g,"")},uniforms:{inputBuffer:new ce(null),threshold:new ce(0),smoothing:new ce(1),range:new ce(null)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:qM,vertexShader:Ic}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},Pu=class extends kt{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=It.AUTO_SIZE,height:r=It.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new QM(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new at(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const c=this.resolution=new It(this,a,o,i);c.addEventListener("change",l=>this.setSize(c.baseWidth,c.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==yt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},KM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,ZM="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",jM=class extends rt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new ce(null),texelSize:new ce(new me)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:KM,vertexShader:ZM})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},JM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,$M="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",ey=class extends rt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new ce(null),supportBuffer:new ce(null),texelSize:new ce(new me),radius:new ce(.85)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:JM,vertexShader:$M})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},ty=class extends kt{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new at(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new jM,this.upsamplingMaterial=new ey,this.resolution=new me}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){const{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:c}=this,{downsamplingMipmaps:l,upsamplingMipmaps:h}=this;let f=e;this.fullscreenMaterial=o;for(let d=0,u=l.length;d<u;++d){const g=l[d];o.setSize(f.width,f.height),o.inputBuffer=f.texture,n.setRenderTarget(g),n.render(r,a),f=g}this.fullscreenMaterial=c;for(let d=h.length-1;d>=0;--d){const u=h[d];c.setSize(f.width,f.height),c.inputBuffer=f.texture,c.supportBuffer=l[d].texture,n.setRenderTarget(u),n.render(r,a),f=u}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of i)s.texture.type=t;if(t!==yt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===st)for(const s of i)s.texture.colorSpace=st}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},ny=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,iy=class extends zi{constructor({blendFunction:n=We.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=Lc.LARGE,resolutionScale:c=.5,width:l=It.AUTO_SIZE,height:h=It.AUTO_SIZE,resolutionX:f=l,resolutionY:d=h}={}){super("BloomEffect",ny,{blendFunction:n,uniforms:new Map([["map",new ce(null)],["intensity",new ce(s)]])}),this.renderTarget=new at(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new YM({kernelSize:o}),this.luminancePass=new Pu({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new ty,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const u=this.resolution=new It(this,f,d,c);u.addEventListener("change",g=>this.setSize(u.baseWidth,u.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===st&&(this.renderTarget.texture.colorSpace=st))}},oc=class extends kt{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,s){const r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==yt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}};function sy(n,e,t){const i=new Map([[hi,1],[fc,2],[Ft,4]]);let s;if(i.has(e)||console.error("Invalid noise texture format"),t===yt){s=new Uint8Array(n*i.get(e));for(let r=0,a=s.length;r<a;++r)s[r]=Math.random()*255+.5}else{s=new Float32Array(n*i.get(e));for(let r=0,a=s.length;r<a;++r)s[r]=Math.random()}return s}var ry=class extends na{constructor(n,e,t=hi,i=yt){super(sy(n*e,t,i),n,e,t,i),this.needsUpdate=!0}},Lu=class extends kt{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Pc,this.overrideMaterialManager=t===null?null:new dh(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new dh(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.selection,c=a.layers.mask,l=r.background,h=n.shadowMap.autoUpdate,f=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(f),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,a):n.render(r,a),a.layers.mask=c,r.background=l,n.shadowMap.autoUpdate=h}},Bu={COLOR:2},ay={DISABLED:0},Bs={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},$t={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},Us={DEFAULT:0,ESKIL:1},oy=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
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
}`,cy=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,ly=class extends rt{constructor(n=new me,e=Bu.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:Ni.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new ce(null),depthBuffer:new ce(null),predicationBuffer:new ce(null),texelSize:new ce(n)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:oy,vertexShader:cy}),this.edgeDetectionMode=e}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=_n){this.depthBuffer=n,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(n){this.defines.EDGE_DETECTION_MODE=n.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(n){this.edgeDetectionMode=n}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(n){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=n.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(n){this.localContrastAdaptationFactor=n}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(n){this.defines.EDGE_THRESHOLD=n.toFixed("6"),this.defines.DEPTH_THRESHOLD=(n*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(n){this.edgeDetectionThreshold=n}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(n){this.defines.PREDICATION_MODE=n.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(n){this.predicationMode=n}set predicationBuffer(n){this.uniforms.predicationBuffer.value=n}setPredicationBuffer(n){this.uniforms.predicationBuffer.value=n}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(n){this.defines.PREDICATION_THRESHOLD=n.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(n){this.predicationThreshold=n}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(n){this.defines.PREDICATION_SCALE=n.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(n){this.predicationScale=n}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(n){this.defines.PREDICATION_STRENGTH=n.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(n){this.predicationStrength=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},hy=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
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
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,uy="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",dy=class extends rt{constructor(n=new me,e=new me){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new ce(null),searchTexture:new ce(null),areaTexture:new ce(null),resolution:new ce(e),texelSize:new ce(n)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:hy,vertexShader:uy})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(n){this.uniforms.searchTexture.value=n}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(n){this.uniforms.areaTexture.value=n}setLookupTextures(n,e){this.searchTexture=n,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(n){const e=Math.min(Math.max(n,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(n){this.orthogonalSearchSteps=n}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(n){const e=Math.min(Math.max(n,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(n){this.diagonalSearchSteps=n}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(n){n?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(n){this.diagonalDetection=n}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(n){const e=Math.min(Math.max(n,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(n){this.cornerRounding=n}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(n){n?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(n){this.cornerDetection=n}setSize(n,e){const t=this.uniforms;t.texelSize.value.set(1/n,1/e),t.resolution.value.set(n,e)}},fh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",ph="data:image/png;base64,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",fy="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",py="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",my=class extends zi{constructor({blendFunction:n=We.SRC,preset:e=Bs.MEDIUM,edgeDetectionMode:t=Bu.COLOR,predicationMode:i=ay.DISABLED}={}){super("SMAAEffect",fy,{vertexShader:py,blendFunction:n,attributes:Pn.CONVOLUTION|Pn.DEPTH,uniforms:new Map([["weightMap",new ce(null)]])});let s,r;arguments.length>1&&(s=arguments[0],r=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(t=arguments[3])),this.renderTargetEdges=new at(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new Pc(!0,!1,!1),this.clearPass.overrideClearColor=new Ye(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new oc(new ly),this.edgeDetectionMaterial.edgeDetectionMode=t,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new oc(new dy);const a=new vf;a.onLoad=()=>{const o=new Lt(s);o.name="SMAA.Search",o.magFilter=Mt,o.minFilter=Mt,o.generateMipmaps=!1,o.needsUpdate=!0,o.flipY=!0,this.weightsMaterial.searchTexture=o;const c=new Lt(r);c.name="SMAA.Area",c.magFilter=tt,c.minFilter=tt,c.generateMipmaps=!1,c.needsUpdate=!0,c.flipY=!1,this.weightsMaterial.areaTexture=c,this.dispatchEvent({type:"load"})},a.itemStart("search"),a.itemStart("area"),s!==void 0&&r!==void 0?(a.itemEnd("search"),a.itemEnd("area")):typeof Image<"u"&&(s=new Image,r=new Image,s.addEventListener("load",()=>a.itemEnd("search")),r.addEventListener("load",()=>a.itemEnd("area")),s.src=fh,r.src=ph),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(n){this.edgeDetectionMaterial.edgeDetectionThreshold=n}setOrthogonalSearchSteps(n){this.weightsMaterial.orthogonalSearchSteps=n}applyPreset(n){const e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(n){case Bs.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Bs.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Bs.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case Bs.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(n,e=_n){this.edgeDetectionMaterial.depthBuffer=n,this.edgeDetectionMaterial.depthPacking=e}update(n,e,t){this.clearPass.render(n,this.renderTargetEdges),this.edgeDetectionPass.render(n,e,this.renderTargetEdges),this.weightsPass.render(n,this.renderTargetEdges,this.renderTargetWeights)}setSize(n,e){this.edgeDetectionMaterial.setSize(n,e),this.weightsMaterial.setSize(n,e),this.renderTargetEdges.setSize(n,e),this.renderTargetWeights.setSize(n,e)}dispose(){const{searchTexture:n,areaTexture:e}=this.weightsMaterial;n!==null&&e!==null&&(n.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return fh}static get areaImageDataURL(){return ph}};function Br(n,e,t){return n*(e-t)-e}function Ur(n,e,t){return Math.min(Math.max((n+e)/(e-t),0),1)}var gy=`#include <common>
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
}gl_FragColor.r=ao;}`,vy="uniform vec2 noiseScale;varying vec2 vUv;varying vec2 vUv2;void main(){vUv=position.xy*0.5+0.5;vUv2=vUv*noiseScale;gl_Position=vec4(position.xy,1.0,1.0);}",xy=class extends rt{constructor(n){super({name:"SSAOMaterial",defines:{SAMPLES_INT:"0",INV_SAMPLES_FLOAT:"0.0",SPIRAL_TURNS:"0.0",RADIUS:"1.0",RADIUS_SQ:"1.0",DISTANCE_SCALING:"1",DEPTH_PACKING:"0"},uniforms:{depthBuffer:new ce(null),normalBuffer:new ce(null),normalDepthBuffer:new ce(null),noiseTexture:new ce(null),inverseProjectionMatrix:new ce(new Ke),projectionMatrix:new ce(new Ke),texelSize:new ce(new me),cameraNearFar:new ce(new me),distanceCutoff:new ce(new me),proximityCutoff:new ce(new me),noiseScale:new ce(new me),minRadiusScale:new ce(.33),intensity:new ce(1),fade:new ce(.01),bias:new ce(0)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:gy,vertexShader:vy}),this.copyCameraSettings(n),this.resolution=new me,this.r=1}get near(){return this.uniforms.cameraNearFar.value.x}get far(){return this.uniforms.cameraNearFar.value.y}set normalDepthBuffer(n){this.uniforms.normalDepthBuffer.value=n,n!==null?this.defines.NORMAL_DEPTH="1":delete this.defines.NORMAL_DEPTH,this.needsUpdate=!0}setNormalDepthBuffer(n){this.normalDepthBuffer=n}set normalBuffer(n){this.uniforms.normalBuffer.value=n}setNormalBuffer(n){this.uniforms.normalBuffer.value=n}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=_n){this.depthBuffer=n,this.depthPacking=e}set noiseTexture(n){this.uniforms.noiseTexture.value=n}setNoiseTexture(n){this.uniforms.noiseTexture.value=n}get samples(){return Number(this.defines.SAMPLES_INT)}set samples(n){this.defines.SAMPLES_INT=n.toFixed(0),this.defines.INV_SAMPLES_FLOAT=(1/n).toFixed(9),this.needsUpdate=!0}getSamples(){return this.samples}setSamples(n){this.samples=n}get rings(){return Number(this.defines.SPIRAL_TURNS)}set rings(n){this.defines.SPIRAL_TURNS=n.toFixed(1),this.needsUpdate=!0}getRings(){return this.rings}setRings(n){this.rings=n}get intensity(){return this.uniforms.intensity.value}set intensity(n){this.uniforms.intensity.value=n,this.defines.LEGACY_INTENSITY===void 0&&(this.defines.LEGACY_INTENSITY="1",this.needsUpdate=!0)}getIntensity(){return this.uniforms.intensity.value}setIntensity(n){this.uniforms.intensity.value=n}get fade(){return this.uniforms.fade.value}set fade(n){this.uniforms.fade.value=n}getFade(){return this.uniforms.fade.value}setFade(n){this.uniforms.fade.value=n}get bias(){return this.uniforms.bias.value}set bias(n){this.uniforms.bias.value=n}getBias(){return this.uniforms.bias.value}setBias(n){this.uniforms.bias.value=n}get minRadiusScale(){return this.uniforms.minRadiusScale.value}set minRadiusScale(n){this.uniforms.minRadiusScale.value=n}getMinRadiusScale(){return this.uniforms.minRadiusScale.value}setMinRadiusScale(n){this.uniforms.minRadiusScale.value=n}updateRadius(){const n=this.r*this.resolution.height;this.defines.RADIUS=n.toFixed(11),this.defines.RADIUS_SQ=(n*n).toFixed(11),this.needsUpdate=!0}get radius(){return this.r}set radius(n){this.r=Math.min(Math.max(n,1e-6),1),this.updateRadius()}getRadius(){return this.radius}setRadius(n){this.radius=n}get distanceScaling(){return!0}set distanceScaling(n){}isDistanceScalingEnabled(){return this.distanceScaling}setDistanceScalingEnabled(n){this.distanceScaling=n}get distanceThreshold(){return this.uniforms.distanceCutoff.value.x}set distanceThreshold(n){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.distanceFalloff,0),1))}get worldDistanceThreshold(){return-Br(this.distanceThreshold,this.near,this.far)}set worldDistanceThreshold(n){this.distanceThreshold=Ur(-n,this.near,this.far)}get distanceFalloff(){return this.uniforms.distanceCutoff.value.y-this.distanceThreshold}set distanceFalloff(n){this.uniforms.distanceCutoff.value.y=Math.min(Math.max(this.distanceThreshold+n,0),1)}get worldDistanceFalloff(){return-Br(this.distanceFalloff,this.near,this.far)}set worldDistanceFalloff(n){this.distanceFalloff=Ur(-n,this.near,this.far)}setDistanceCutoff(n,e){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}get proximityThreshold(){return this.uniforms.proximityCutoff.value.x}set proximityThreshold(n){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.proximityFalloff,0),1))}get worldProximityThreshold(){return-Br(this.proximityThreshold,this.near,this.far)}set worldProximityThreshold(n){this.proximityThreshold=Ur(-n,this.near,this.far)}get proximityFalloff(){return this.uniforms.proximityCutoff.value.y-this.proximityThreshold}set proximityFalloff(n){this.uniforms.proximityCutoff.value.y=Math.min(Math.max(this.proximityThreshold+n,0),1)}get worldProximityFalloff(){return-Br(this.proximityFalloff,this.near,this.far)}set worldProximityFalloff(n){this.proximityFalloff=Ur(-n,this.near,this.far)}setProximityCutoff(n,e){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNearFar.value.set(n.near,n.far),this.uniforms.projectionMatrix.value.copy(n.projectionMatrix),this.uniforms.inverseProjectionMatrix.value.copy(n.projectionMatrix).invert(),n instanceof Kt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms,i=t.noiseTexture.value;i!==null&&t.noiseScale.value.set(n/i.image.width,e/i.image.height),t.texelSize.value.set(1/n,1/e),this.resolution.set(n,e),this.updateRadius()}},My=`#include <packing>
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
gl_FragColor=vec4(n[index],d[index]);}`,yy="uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}",Sy=class extends rt{constructor(){super({name:"DepthDownsamplingMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new ce(null),normalBuffer:new ce(null),texelSize:new ce(new me)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:My,vertexShader:yy})}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=_n){this.depthBuffer=n,this.depthPacking=e}set normalBuffer(n){this.uniforms.normalBuffer.value=n,n!==null?this.defines.DOWNSAMPLE_NORMALS="1":delete this.defines.DOWNSAMPLE_NORMALS,this.needsUpdate=!0}setNormalBuffer(n){this.normalBuffer=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},Ay=class extends kt{constructor({normalBuffer:n=null,resolutionScale:e=.5,width:t=It.AUTO_SIZE,height:i=It.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("DepthDownsamplingPass");const a=new Sy;a.normalBuffer=n,this.fullscreenMaterial=a,this.needsDepthTexture=!0,this.needsSwap=!1,this.renderTarget=new at(1,1,{minFilter:Mt,magFilter:Mt,depthBuffer:!1,type:tn}),this.renderTarget.texture.name="DepthDownsamplingPass.Target",this.renderTarget.texture.generateMipmaps=!1;const o=this.resolution=new It(this,s,r,e);o.addEventListener("change",c=>this.setSize(o.baseWidth,o.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}setDepthTexture(n,e=_n){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e}render(n,e,t,i,s){n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.fullscreenMaterial.setSize(n,e)}initialize(n,e,t){const i=n.getContext();if(!(i.getExtension("EXT_color_buffer_float")||i.getExtension("EXT_color_buffer_half_float")))throw new Error("Rendering to float texture is not supported.")}},_y=`uniform lowp sampler2D aoBuffer;uniform float luminanceInfluence;uniform float intensity;
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
}`,mh=64,wy=class extends zi{constructor(n,e,{blendFunction:t=We.MULTIPLY,samples:i=9,rings:s=7,normalDepthBuffer:r=null,depthAwareUpsampling:a=!0,worldDistanceThreshold:o,worldDistanceFalloff:c,worldProximityThreshold:l,worldProximityFalloff:h,distanceThreshold:f=.97,distanceFalloff:d=.03,rangeThreshold:u=5e-4,rangeFalloff:g=.001,minRadiusScale:v=.1,luminanceInfluence:m=.7,radius:p=.1825,intensity:A=1,bias:x=.025,fade:y=.01,color:E=null,resolutionScale:_=1,width:w=It.AUTO_SIZE,height:T=It.AUTO_SIZE,resolutionX:M=w,resolutionY:S=T}={}){super("SSAOEffect",_y,{blendFunction:t,attributes:Pn.DEPTH,defines:new Map([["THRESHOLD","0.997"]]),uniforms:new Map([["aoBuffer",new ce(null)],["normalDepthBuffer",new ce(r)],["luminanceInfluence",new ce(m)],["color",new ce(null)],["intensity",new ce(A)],["scale",new ce(0)]])}),this.renderTarget=new at(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="AO.Target",this.uniforms.get("aoBuffer").value=this.renderTarget.texture;const C=this.resolution=new It(this,M,S,_);C.addEventListener("change",z=>this.setSize(C.baseWidth,C.baseHeight)),this.camera=n,this.depthDownsamplingPass=new Ay({normalBuffer:e,resolutionScale:_}),this.depthDownsamplingPass.enabled=r===null,this.ssaoPass=new oc(new xy(n));const I=new ry(mh,mh,Ft);I.wrapS=I.wrapT=Ws;const L=this.ssaoMaterial;L.normalBuffer=e,L.noiseTexture=I,L.minRadiusScale=v,L.samples=i,L.radius=p,L.rings=s,L.fade=y,L.bias=x,L.distanceThreshold=f,L.distanceFalloff=d,L.proximityThreshold=u,L.proximityFalloff=g,o!==void 0&&(L.worldDistanceThreshold=o),c!==void 0&&(L.worldDistanceFalloff=c),l!==void 0&&(L.worldProximityThreshold=l),h!==void 0&&(L.worldProximityFalloff=h),r!==null&&(this.ssaoMaterial.normalDepthBuffer=r,this.defines.set("NORMAL_DEPTH","1")),this.depthAwareUpsampling=a,this.color=E}set mainCamera(n){this.camera=n,this.ssaoMaterial.copyCameraSettings(n)}get normalBuffer(){return this.ssaoMaterial.normalBuffer}set normalBuffer(n){this.ssaoMaterial.normalBuffer=n,this.depthDownsamplingPass.fullscreenMaterial.normalBuffer=n}getResolution(){return this.resolution}get ssaoMaterial(){return this.ssaoPass.fullscreenMaterial}getSSAOMaterial(){return this.ssaoMaterial}get samples(){return this.ssaoMaterial.samples}set samples(n){this.ssaoMaterial.samples=n}get rings(){return this.ssaoMaterial.rings}set rings(n){this.ssaoMaterial.rings=n}get radius(){return this.ssaoMaterial.radius}set radius(n){this.ssaoMaterial.radius=n}get depthAwareUpsampling(){return this.defines.has("DEPTH_AWARE_UPSAMPLING")}set depthAwareUpsampling(n){this.depthAwareUpsampling!==n&&(n?this.defines.set("DEPTH_AWARE_UPSAMPLING","1"):this.defines.delete("DEPTH_AWARE_UPSAMPLING"),this.setChanged())}isDepthAwareUpsamplingEnabled(){return this.depthAwareUpsampling}setDepthAwareUpsamplingEnabled(n){this.depthAwareUpsampling=n}get distanceScaling(){return!0}set distanceScaling(n){}get color(){return this.uniforms.get("color").value}set color(n){const e=this.uniforms,t=this.defines;n!==null?t.has("COLORIZE")?e.get("color").value.set(n):(t.set("COLORIZE","1"),e.get("color").value=new Ye(n),this.setChanged()):t.has("COLORIZE")&&(t.delete("COLORIZE"),e.get("color").value=null,this.setChanged())}get luminanceInfluence(){return this.uniforms.get("luminanceInfluence").value}set luminanceInfluence(n){this.uniforms.get("luminanceInfluence").value=n}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getColor(){return this.color}setColor(n){this.color=n}setDistanceCutoff(n,e){this.ssaoMaterial.distanceThreshold=n,this.ssaoMaterial.distanceFalloff=e}setProximityCutoff(n,e){this.ssaoMaterial.proximityThreshold=n,this.ssaoMaterial.proximityFalloff=e}setDepthTexture(n,e=_n){this.depthDownsamplingPass.setDepthTexture(n,e),this.ssaoMaterial.depthBuffer=n,this.ssaoMaterial.depthPacking=e}update(n,e,t){const i=this.renderTarget;this.depthDownsamplingPass.enabled&&this.depthDownsamplingPass.render(n),this.ssaoPass.render(n,null,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.ssaoMaterial.copyCameraSettings(this.camera),this.ssaoMaterial.setSize(i,s),this.renderTarget.setSize(i,s),this.depthDownsamplingPass.resolution.scale=t.scale,this.depthDownsamplingPass.setSize(n,e)}initialize(n,e,t){try{let i=this.uniforms.get("normalDepthBuffer").value;i===null&&(this.depthDownsamplingPass.initialize(n,e,t),i=this.depthDownsamplingPass.texture,this.uniforms.get("normalDepthBuffer").value=i,this.ssaoMaterial.normalDepthBuffer=i,this.defines.set("NORMAL_DEPTH","1"))}catch{this.depthDownsamplingPass.enabled=!1}}},Ey=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,Ty=class extends rt{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new ce(null),luminanceBuffer1:new ce(null),minLuminance:new ce(.01),deltaTime:new ce(0),tau:new ce(1)},extensions:{shaderTextureLOD:!0},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Ey,vertexShader:Ic})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},by=class extends kt{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new Ty,this.needsSwap=!1,this.renderTargetPrevious=new at(1,1,{minFilter:Mt,magFilter:Mt,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new Iu(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,s){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},Cy=`#include <tonemapping_pars_fragment>
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
}`,Dy=class extends zi{constructor({blendFunction:n=We.SRC,adaptive:e=!1,mode:t=e?$t.REINHARD2_ADAPTIVE:$t.AGX,resolution:i=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:c=1,adaptationRate:l=1}={}){super("ToneMappingEffect",Cy,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new ce(null)],["maxLuminance",new ce(s)],["whitePoint",new ce(r)],["middleGrey",new ce(a)],["averageLuminance",new ce(c)]])}),this.renderTargetLuminance=new at(1,1,{minFilter:Rn,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new Pu({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new by(this.luminancePass.texture,{minLuminance:o,adaptationRate:l}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;const t=Ni.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case $t.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case $t.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case $t.CINEON:case $t.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case $t.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case $t.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case $t.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===$t.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){const e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===$t.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?$t.REINHARD2_ADAPTIVE:$t.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}},Ry=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,Iy=class extends zi{constructor({blendFunction:n,eskil:e=!1,technique:t=e?Us.ESKIL:Us.DEFAULT,offset:i=.5,darkness:s=.5}={}){super("VignetteEffect",Ry,{blendFunction:n,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new ce(i)],["darkness",new ce(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(n){this.technique!==n&&(this.defines.set("VIGNETTE_TECHNIQUE",n.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Us.ESKIL}set eskil(n){this.technique=n?Us.ESKIL:Us.DEFAULT}getTechnique(){return this.technique}setTechnique(n){this.technique=n}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}get darkness(){return this.uniforms.get("darkness").value}set darkness(n){this.uniforms.get("darkness").value=n}getDarkness(){return this.darkness}setDarkness(n){this.darkness=n}},Py=`#include <common>
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
}`,Ly="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",By=class extends rt{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Ni.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new ce(null),depthBuffer:new ce(null),resolution:new ce(new me),texelSize:new ce(new me),cameraNear:new ce(.3),cameraFar:new ce(1e3),aspect:new ce(1),time:new ce(0)},blending:Pt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=_n){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=Py.replace(et.FRAGMENT_HEAD,n.get(et.FRAGMENT_HEAD)||"").replace(et.FRAGMENT_MAIN_UV,n.get(et.FRAGMENT_MAIN_UV)||"").replace(et.FRAGMENT_MAIN_IMAGE,n.get(et.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=Ly.replace(et.VERTEX_HEAD,n.get(et.VERTEX_HEAD)||"").replace(et.VERTEX_MAIN_SUPPORT,n.get(et.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Kt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return et}};function gh(n,e,t){for(const i of e){const s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function Uy(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader();const r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&Pn.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,c=t.shaderParts;let l=c.get(et.FRAGMENT_HEAD)||"",h=c.get(et.FRAGMENT_MAIN_UV)||"",f=c.get(et.FRAGMENT_MAIN_IMAGE)||"",d=c.get(et.VERTEX_HEAD)||"",u=c.get(et.VERTEX_MAIN_SUPPORT)||"";const g=new Set,v=new Set;if(a&&(h+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const A=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);u+=`	${n}MainSupport(`,u+=A?`vUv);
`:`);
`;for(const x of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const y of x[1].split(/\s*,\s*/))t.varyings.add(y),g.add(y),v.add(y);for(const x of s.matchAll(o))v.add(x[1])}for(const A of i.matchAll(o))v.add(A[1]);for(const A of e.defines.keys())v.add(A.replace(/\([\w\s,]*\)/g,""));for(const A of e.uniforms.keys())v.add(A);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((A,x)=>t.uniforms.set(n+x.charAt(0).toUpperCase()+x.slice(1),A)),e.defines.forEach((A,x)=>t.defines.set(n+x.charAt(0).toUpperCase()+x.slice(1),A));const m=new Map([["fragment",i],["vertex",s]]);gh(n,v,t.defines),gh(n,v,m),i=m.get("fragment"),s=m.get("vertex");const p=e.blendMode;if(t.blendModes.set(p.blendFunction,p),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(f+=e.inputColorSpace===st?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==on?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const A=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;f+=`${n}MainImage(color0, UV, `,(t.attributes&Pn.DEPTH)!==0&&A.test(i)&&(f+="depth, ",t.readDepth=!0),f+=`color1);
	`;const x=n+"BlendOpacity";t.uniforms.set(x,p.opacity),f+=`color0 = blend${p.blendFunction}(color0, color1, ${x});

	`,l+=`uniform float ${x};

`}if(l+=i+`
`,s!==null&&(d+=s+`
`),c.set(et.FRAGMENT_HEAD,l),c.set(et.FRAGMENT_MAIN_UV,h),c.set(et.FRAGMENT_MAIN_IMAGE,f),c.set(et.VERTEX_HEAD,d),c.set(et.VERTEX_MAIN_SUPPORT,u),e.extensions!==null)for(const A of e.extensions)t.extensions.add(A)}}var vh=class extends kt{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new By(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new oM;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===We.DST)n.attributes|=a.getAttributes()&Pn.DEPTH;else{if((n.attributes&a.getAttributes()&Pn.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);Uy("e"+e++,a,n)}let t=n.shaderParts.get(et.FRAGMENT_HEAD),i=n.shaderParts.get(et.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get(et.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of n.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(n.attributes&Pn.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===st&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(et.FRAGMENT_HEAD,t),n.shaderParts.set(et.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(et.FRAGMENT_MAIN_UV,s);for(const[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=_n){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(const r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==yt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}},Ny=class extends kt{constructor(n,e,{renderTarget:t,resolutionScale:i=1,width:s=It.AUTO_SIZE,height:r=It.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new Lu(n,e,new mf);const c=this.renderPass;c.ignoreBackground=!0,c.skipShadowMapUpdate=!0;const l=c.getClearPass();l.overrideClearColor=new Ye(7829503),l.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new at(1,1,{minFilter:Mt,magFilter:Mt}),this.renderTarget.texture.name="NormalPass.Target");const h=this.resolution=new It(this,a,o,i);h.addEventListener("change",f=>this.setSize(h.baseWidth,h.baseHeight))}set mainScene(n){this.renderPass.mainScene=n}set mainCamera(n){this.renderPass.mainCamera=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.renderToScreen?null:this.renderTarget;this.renderPass.render(n,r,r)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}};class Fy{constructor(e){this.volume=e;const t=new ta(e.data,e.sx,e.sy,e.sz);t.format=Ft,t.type=yt,t.colorSpace=on,t.minFilter=Rn,t.magFilter=tt,t.wrapS=t.wrapT=t.wrapR=Dn,t.generateMipmaps=!0,t.unpackAlignment=1,t.needsUpdate=!0,this.texture=t;const i=new ta(e.normals,e.sx,e.sy,e.sz);i.format=Ft,i.type=yt,i.colorSpace=on,i.minFilter=tt,i.magFilter=tt,i.generateMipmaps=!1,i.wrapS=i.wrapT=i.wrapR=Dn,i.unpackAlignment=1,i.needsUpdate=!0,this.normalTexture=i,this.size=new k(e.sx*e.texel,e.sy*e.texel,e.sz*e.texel)}texture;normalTexture;size;upload(){this.texture.needsUpdate=!0,this.normalTexture.needsUpdate=!0}}const zy=new Un(2,2),Uu=`
  precision highp float;
  precision highp sampler3D;
  // L1 SH: Y00 = 0.282095, Y1 = 0.488603 * (y, z, x)
  float shEval(vec4 c, vec3 d) { return c.x * 0.282095 + 0.488603 * (c.y * d.y + c.z * d.z + c.w * d.x); }
  vec4 cosLobe(vec3 d) { return vec4(0.886227, 1.023328 * d.y, 1.023328 * d.z, 1.023328 * d.x); }
`,Oy=Uu+`
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
`,ky=Uu+`
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
`;class Gy{constructor(e,t,i=1){this.gl=e,this.gi=t;const s=t.volume;this.size=new k(Math.ceil(s.sx/i),Math.ceil(s.sy/i),Math.ceil(s.sz/i)),this.worldSize=t.size.clone();const r=()=>{const a=new Hd(this.size.x,this.size.y,this.size.z,{type:An,format:Ft,minFilter:tt,magFilter:tt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});return a.texture.wrapS=a.texture.wrapT=a.texture.wrapR=Dn,a};for(let a=0;a<3;a++)this.seed.push(r()),this.ping.push(r()),this.pong.push(r());this.injectMat=new pl({glslVersion:Jr,vertexShader:"in vec3 position; void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Oy,uniforms:{uDirect:{value:t.texture},uNormal:{value:null},uSrcSize:{value:new k(s.sx,s.sy,s.sz)},uDstSize:{value:this.size.clone()},uLayer:{value:0},uDecode:{value:2},uChannel:{value:0},uSkyAmbient:{value:new k(.3,.4,.6)},uTime:{value:0},uBoost:{value:8}},depthTest:!1,depthWrite:!1}),this.propMat=new pl({glslVersion:Jr,vertexShader:"in vec3 position; void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:ky,uniforms:{uPrev:{value:null},uSeed:{value:null},uDirect:{value:t.texture},uDstSize:{value:this.size.clone()},uLayer:{value:0},uGain:{value:this.gain}},depthTest:!1,depthWrite:!1}),this.quad=new vt(zy,this.injectMat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}size;worldSize;seed=[];ping=[];pong=[];injectMat;propMat;quad;cam=new Ss(-1,1,1,-1,0,1);scene=new Li;iterations=0;gain=.58;setSources(e,t){this.injectMat.uniforms.uNormal.value=e,this.injectMat.uniforms.uDecode.value=t}setBoost(e){this.injectMat.uniforms.uBoost.value=e}setSky(e){this.injectMat.uniforms.uSkyAmbient.value.set(...e)}get textures(){return[this.ping[0].texture,this.ping[1].texture,this.ping[2].texture]}runLayers(e,t,i){this.quad.material=e;for(let s=0;s<3;s++){i(s);for(let r=0;r<this.size.z;r++)e.uniforms.uLayer.value=r,this.gl.setRenderTarget(t[s],r),this.gl.render(this.scene,this.cam)}this.gl.setRenderTarget(null)}inject(e){this.injectMat.uniforms.uTime.value=e,this.runLayers(this.injectMat,this.seed,t=>{this.injectMat.uniforms.uChannel.value=t})}step(e=1){for(let t=0;t<e;t++){this.propMat.uniforms.uGain.value=this.gain,this.runLayers(this.propMat,this.pong,s=>{this.propMat.uniforms.uPrev.value=this.ping[s].texture,this.propMat.uniforms.uSeed.value=this.seed[s].texture});const i=this.ping;this.ping=this.pong,this.pong=i,this.iterations++}}dispose(){for(const e of[...this.seed,...this.ping,...this.pong])e.dispose()}}const Nr=Et.length,Nu=`
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
        uniform sampler3D uSh2;`,Fu=`
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
`;function Hy(n){return{uGi:n.uGi,uGiSize:n.uGiSize,uGiTexel:n.uGiTexel,uGiDecode:n.uGiDecode,uGiStrength:n.uGiStrength,uSkyZenith:n.uSkyZenith,uSkyHorizon:n.uSkyHorizon,uSkySunColor:n.uSkySunColor,uSunDir:n.uSunDir,uDaylight:n.uDaylight,uSh0:n.uSh0,uSh1:n.uSh1,uSh2:n.uSh2}}const zu=(n,e)=>({SC_CONES:n?4:6,SC_STEPS:n?14:28,SC_SPEC:n?0:1,SC_GI_SH:e==="sh"?1:0});function is(n,e,t=!1,i="sh",s="full",r){const a=new Float32Array(Nr),o=new Float32Array(Nr*3),c=new Float32Array(Nr*3);for(const d of Et)a[d.id]=d.scale,c[d.id*3]=d.albedo[0],c[d.id*3+1]=d.albedo[1],c[d.id*3+2]=d.albedo[2],d.emissive&&(o[d.id*3]=d.emissive[0],o[d.id*3+1]=d.emissive[1],o[d.id*3+2]=d.emissive[2]);const l=r?{...r,uTexLocal:{value:1},uTexOrigin:{value:new k},uFade:{value:1},uIceMode:{value:2}}:{uAlbedo:{value:n.albedo},uNormal:{value:n.normal},uMatScale:{value:a},uMatEmissive:{value:o},uMatAlbedo:{value:c},uGi:{value:e.texture},uGiSize:{value:e.size.clone()},uGiTexel:{value:e.volume.texel},uGiDecode:{value:bc},uGiStrength:{value:1},uSkyZenith:{value:new k(.2,.36,.72)},uSkyHorizon:{value:new k(.6,.7,.82)},uSkySunColor:{value:new k(1,1,1)},uSunDir:{value:new k(0,1,0)},uTime:{value:0},uDaylight:{value:1},uSh0:{value:null},uSh1:{value:null},uSh2:{value:null},uCursor:{value:new mt(0,0,0,0)},uCursorShape:{value:0},uCursorExt:{value:new k(.5,.5,.5)},uTexLocal:{value:0},uTexOrigin:{value:new k},uFade:{value:1},uMorphBand:{value:Qx},uIceMode:{value:0},uSceneColor:{value:null},uSceneDepth:{value:null},uResolution:{value:new me(1,1)},uNear:{value:.08},uFar:{value:1200},uProjection:{value:new Ke},uIceShadow:{value:null},uIceShadowMatrix:{value:new Ke},uIceCaustic:{value:0},uIceReach:{value:56},uSeaLevel:{value:0},uIceDebug:{value:0}},h=new ia({color:16777215,roughness:1,metalness:0,side:Ln}),f=zu(t,i);return s!=="full"&&(f.SC_SPEC=0),h.defines={SC_MATERIALS:Nr,SC_GRASS:xs,SC_DIRT:vs,SC_SNOW:Bi,SC_STONE:Qs,SC_ICE:yn,SC_LITE:s==="full"?0:1,SC_BASIC:s==="basic"?1:0,...f},h.name="terrain-"+s,h.onBeforeCompile=d=>{Object.assign(d.uniforms,l),d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
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
        ${Nu}
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
        ${Fu}
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
      #endif`)})(h.onBeforeCompile),h.customProgramCacheKey=()=>"splinecraft-terrain-v22-"+s+"-"+(t?"cheap":"full")+"-"+i,{material:h,uniforms:l}}function xh(n){const e=new eu({depthPacking:Gh});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aMats; attribute vec3 aBary; flat varying vec3 vMatsD; varying vec3 vBaryD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMatsD = aMats; vBaryD = aBary;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
flat varying vec3 vMatsD; varying vec3 vBaryD;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          int m0 = int(vMatsD.x + 0.5), m1 = int(vMatsD.y + 0.5), m2 = int(vMatsD.z + 0.5);
          vec3 bw = clamp(vBaryD, 0.0, 1.0);
          float iceW = ((m0 == ${yn} ? bw.x : 0.0) + (m1 == ${yn} ? bw.y : 0.0) + (m2 == ${yn} ? bw.z : 0.0)) / max(bw.x + bw.y + bw.z, 1e-4);
          if (${n?"iceW <= 0.5":"iceW > 0.5"}) discard;
        }`)},e.customProgramCacheKey=()=>"splinecraft-ice-depth-"+(n?"only":"none"),e}class Vy{mesh;uniforms={uSunDir:{value:new k(0,1,0)},uSunColor:{value:new k(1,1,1)},uZenith:{value:new k(.2,.36,.72)},uHorizon:{value:new k(.6,.7,.82)},uDaylight:{value:1},uTime:{value:0},uCloud:{value:.55}};constructor(){const e=new rt({uniforms:this.uniforms,side:Rt,depthWrite:!1,fog:!1,vertexShader:`
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
        }`});this.mesh=new vt(new yc(1,32,16),e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.mesh.scale.setScalar(900)}}const fa=n=>Math.round(n/R);function Ui(n,e,t,i){if(e<0||t<0||i<0||e>=n.nx-1||t>=n.ny-1||i>=n.nz-1)return!1;const s=n.index(e,t,i),r=n.hard[s];if(r!==0&&ht(r)){const h=n.sub[s]===0?Zt:n.sub[s];if(mu(h)>13)return!1}const a=n.density,o=n.ny*n.nz,c=n.nz;let l=0;return a[s]>0&&l++,a[s+1]>0&&l++,a[s+c]>0&&l++,a[s+c+1]>0&&l++,a[s+o]>0&&l++,a[s+o+1]>0&&l++,a[s+o+c]>0&&l++,a[s+o+c+1]>0&&l++,l<6}function Wy(n,e,t,i){for(let s=t+1;s<n.ny-1;s++)if(!Ui(n,e,s,i))return!1;return!0}function Xy(n,e){n.water.fill(0);const t=fa(e),i=[],s=n.water,r=Math.min(t-1,n.ny-2);if(r<0)return 0;for(let a=0;a<n.nx-1;a++)for(let o=0;o<n.nz-1;o++)if(Ui(n,a,r,o)&&Wy(n,a,r,o)){const c=n.index(a,r,o);s[c]||(s[c]=1,i.push(a,r,o))}return Qy(n,i,t)}function Yy(n,e,t,i=!0){const s=Ou(n,e,t);if(!s.plan||!i)return s.removed;const r=cc(n,s.plan,s.plan.cells.length);return r?Bc(s.removed,r):s.removed}function Ou(n,e,t){const i=fa(t),s=n.water,r=Math.max(0,e.x0-1),a=Math.max(0,e.y0-1),o=Math.max(0,e.z0-1),c=Math.min(n.nx-2,e.x1),l=Math.min(n.ny-2,e.y1,i-1),h=Math.min(n.nz-2,e.z1);let f=null;const d=[],u=new Set;for(let _=r;_<=c;_++)for(let w=a;w<=l;w++)for(let T=o;T<=h;T++){const M=n.index(_,w,T),S=Ui(n,_,w,T);if(s[M]&&!S){s[M]=0,f=Bc(f,{x0:_,y0:w,z0:T,x1:_+1,y1:w+1,z1:T+1});continue}S&&!s[M]&&(_>0&&s[M-n.nz*n.ny]!==0||_<n.nx-2&&s[M+n.nz*n.ny]!==0||w>0&&s[M-n.nz]!==0||w<i-1&&s[M+n.nz]!==0||T>0&&s[M-1]!==0||T<n.nz-2&&s[M+1]!==0)&&!u.has(M)&&(u.add(M),d.push(_,w,T,0))}if(!d.length)return{removed:f,plan:null};const g=[],v=d.slice(),m=n.ny*n.nz,p=n.nz;let A=0;for(;A<v.length;){const _=v[A],w=v[A+1],T=v[A+2],M=v[A+3];A+=4;const S=n.index(_,w,T);g.push(S,w,M);const C=(I,L,z,G)=>{L>=i||s[G]||u.has(G)||Ui(n,I,L,z)&&(u.add(G),v.push(I,L,z,M+1))};_>0&&C(_-1,w,T,S-m),_<n.nx-2&&C(_+1,w,T,S+m),w>0&&C(_,w-1,T,S-p),w<i-1&&C(_,w+1,T,S+p),T>0&&C(_,w,T-1,S-1),T<n.nz-2&&C(_,w,T+1,S+1)}const x=g.length/3,y=new Int32Array(x);for(let _=0;_<x;_++)y[_]=_;y.sort((_,w)=>g[_*3+1]-g[w*3+1]||g[_*3+2]-g[w*3+2]);const E=new Int32Array(x);for(let _=0;_<x;_++)E[_]=g[y[_]*3];return{removed:f,plan:{cells:E,done:0,contacts:d.length/4,carry:0}}}function cc(n,e,t){const i=Math.min(e.cells.length,e.done+Math.max(0,Math.floor(t)));if(i<=e.done)return null;let s=null;const r=n.ny*n.nz,a=n.nz;for(let o=e.done;o<i;o++){const c=e.cells[o];if(!Ui(n,Math.floor(c/r),Math.floor(c/a)%n.ny,c%n.nz))continue;n.water[c]=1;const l=Math.floor(c/r),h=Math.floor(c/a)%n.ny,f=c%n.nz;s=Bc(s,{x0:l,y0:h,z0:f,x1:l+1,y1:h+1,z1:f+1})}return e.done=i,s}function qy(n){return Math.max(36,n.contacts*30)}function Bc(n,e){return n?{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}:e}function Qy(n,e,t,i){const s=n.water;let r=0;const a=n.ny*n.nz,o=n.nz;for(;e.length;){const c=e.pop(),l=e.pop(),h=e.pop(),f=n.index(h,l,c),d=(u,g,v,m)=>{s[m]||g>=t||Ui(n,u,g,v)&&(s[m]=1,r++,e.push(u,g,v))};h>0&&d(h-1,l,c,f-a),h<n.nx-2&&d(h+1,l,c,f+a),l>0&&d(h,l-1,c,f-o),l<t-1&&d(h,l+1,c,f+o),c>0&&d(h,l,c-1,f-1),c<n.nz-2&&d(h,l,c+1,f+1)}return r}const Ky=512,Mh=Et.length;Et.length+1;function Zy(n){const e=(t,i)=>{const s=new xc(t,n.size,n.size,n.layers);return s.format=Ft,s.type=yt,s.colorSpace=i?st:on,s.wrapS=s.wrapT=Ws,s.minFilter=Rn,s.magFilter=tt,s.generateMipmaps=!0,s.anisotropy=8,s.needsUpdate=!0,s};return{albedo:e(n.albedo,!0),normal:e(n.normal,!1),swatches:n.swatches}}const aa=16,Vs=8,jy=`
  precision highp float;
  uniform sampler2D uPrev, uMask;
  uniform vec2 uTexel, uWorld;
  uniform float uK, uDamp, uRest, uN;
  uniform vec4 uImp[${aa}];
  uniform vec4 uObs[${Vs}];
  uniform float uNObs;
  varying vec2 vUv;
  // 1 where water can move: the shore mask, minus any moving body sitting on this texel
  float open(vec2 uv, vec2 p) {
    float m = texture2D(uMask, uv).r;
    for (int i = 0; i < ${Vs}; i++) {
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
    for (int i = 0; i < ${aa}; i++) {
      if (float(i) >= uN) break;
      vec4 im = uImp[i];
      float d2 = dot(p - im.xy, p - im.xy);
      v += im.w * exp(-d2 / (im.z * im.z));
    }
    // a moving body pushes the water at its rim, in proportion to its speed — a small, bounded push:
    // this ran every step at ten times the size, and a player standing in the sea pumped the surface
    // down to the clamp and left a pit there for good (damping only ever acted on velocity)
    for (int i = 0; i < ${Vs}; i++) {
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
  }`;class Jy{constructor(e,t,i,s){this.worldX=e,this.worldZ=t,this.level=s;const r=Math.max(16,Math.round(e*i)),a=Math.max(16,Math.round(t*i)),o=()=>new at(r,a,{type:An,format:Ft,minFilter:tt,magFilter:tt,depthBuffer:!1,stencilBuffer:!1});this.rts=[o(),o()],this.mask=new na(new Uint8Array(4),1,1,hi,yt),this.mask.minFilter=tt,this.mask.magFilter=tt,this.mask.needsUpdate=!0,this.mat=new rt({vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:jy,uniforms:{uPrev:{value:null},uMask:{value:this.mask},uTexel:{value:new me(1/r,1/a)},uWorld:{value:new me(e,t)},uK:{value:.06},uDamp:{value:.988},uRest:{value:.004},uN:{value:0},uImp:{value:Array.from({length:aa},()=>new mt)},uObs:{value:Array.from({length:Vs},()=>new mt)},uNObs:{value:0}},depthTest:!1,depthWrite:!1}),this.scene.add(new vt(new Un(2,2),this.mat))}rts;cur=0;mat;scene=new Li;cam=new Ss(-1,1,1,-1,0,1);mask;pending=[];acc=0;get texture(){return this.rts[this.cur].texture}get maskTexture(){return this.mask}get texelSize(){return this.mat.uniforms.uTexel.value}setMask(e){const t=fa(this.level),i=Math.min(t-1,e.ny-2),s=e.nx-1,r=e.nz-1,a=new Uint8Array(s*r);if(i>=0)for(let o=0;o<r;o++)for(let c=0;c<s;c++)a[o*s+c]=e.water[e.index(c,i,o)]?255:0;this.mask.dispose(),this.mask=new na(a,s,r,hi,yt),this.mask.minFilter=tt,this.mask.magFilter=tt,this.mask.needsUpdate=!0,this.mat.uniforms.uMask.value=this.mask}setObstacles(e){const t=this.mat.uniforms,i=Math.min(Vs,e.length);for(let s=0;s<i;s++)t.uObs.value[s].set(e[s][0],e[s][1],e[s][2],e[s][3]);t.uNObs.value=i}splash(e,t,i,s){this.pending.push(e,t,Math.max(.15,i),s)}step(e,t){this.acc=Math.min(this.acc+t,3/60);const i=this.mat.uniforms;let s=!0;for(;this.acc>=1/60;){this.acc-=1/60;const r=s?Math.min(aa,this.pending.length/4):0;for(let c=0;c<r;c++)i.uImp.value[c].set(this.pending[c*4],this.pending[c*4+1],this.pending[c*4+2],this.pending[c*4+3]);i.uN.value=r,i.uPrev.value=this.rts[this.cur].texture;const a=1-this.cur,o=e.getRenderTarget();e.setRenderTarget(this.rts[a]),e.render(this.scene,this.cam),e.setRenderTarget(o),this.cur=a,s=!1}s||(this.pending.length=0)}}const $y=.08,eS=`
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
  }`,ku=`
  vec3 waterBody(vec3 light) { return vec3(0.02, 0.10, 0.16) * (light * 2.0 + 0.01); }
  // Seen through d metres of water: absorbed per metre (red first), blue-shifted, filled in with the body
  // colour, and dimmed for the light the water above the camera already took (uDim)
  vec3 underwaterGrade(vec3 c, float d, vec3 light, float dim) {
    vec3 absorb = exp(-d * vec3(0.55, 0.24, 0.15));
    return c * absorb * vec3(0.8, 0.92, 1.0) * dim + waterBody(light) * (1.0 - exp(-d * 0.15));
  }`,tS=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 1.0, 1.0); }`,nS=`
  precision highp sampler2DArray;
  #include <packing>
  uniform sampler2D inputBuffer, uSceneDepth;
  uniform sampler2DArray uNormal;
  uniform float uNear, uFar, uUnder, uDim, uLayer, uTime;
  uniform vec2 uResolution;
  uniform vec3 uLight;
  varying vec2 vUv;
  float viewZ(float ndcDepth) { return perspectiveDepthToViewZ(ndcDepth, uNear, uFar); }
  `+ku+`
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
  }`,iS=`
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
  `+ku+`

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
  }`;class sS extends kt{constructor(e,t,i,s,r,a,o,c){super("WaterPass"),this.worldScene=e,this.cam=t,this.level=i,this.sim=new Jy(a,o,c,i),this.uniforms.uWorldSize.value.set(a,o),this.uniforms.uWaveTexel.value.copy(this.sim.texelSize),this.needsDepthTexture=!0,this.needsSwap=!0,this.uniforms.uNormal.value=s,this.grade.uniforms.uNormal.value=s,this.uniforms.uNear.value=t.near,this.uniforms.uFar.value=t.far,this.clip=new ri(new k(0,1,0),-i+.02),this.refl=r?new at(1,1,{type:An,depthBuffer:!0,minFilter:tt,magFilter:tt}):null,this.uniforms.uReflect.value=r?1:0,this.refl&&(this.uniforms.uReflTex.value=this.refl.texture);const l=new rt({uniforms:this.uniforms,vertexShader:eS,fragmentShader:iS,depthTest:!1,depthWrite:!1,side:Gt,transparent:!1});this.mesh=new vt(new Ht,l),this.mesh.frustumCulled=!1,this.waterScene.add(this.mesh),this.fullscreenMaterial=this.grade}mesh;uniforms={uNormal:{value:null},uSceneColor:{value:null},uSceneDepth:{value:null},uReflTex:{value:null},uReflMatrix:{value:new Ke},uLayer:{value:Mh},uTime:{value:0},uNear:{value:.08},uFar:{value:1200},uReflect:{value:0},uUnder:{value:0},uResolution:{value:new me(1,1)},uSunDir:{value:new k(0,1,0)},uSunColor:{value:new k(1,1,1)},uZenith:{value:new k(.2,.36,.72)},uHorizon:{value:new k(.6,.7,.82)},uAmbient:{value:new k(.3,.4,.6)},uSh0:{value:null},uSh1:{value:null},uSh2:{value:null},uGiSize:{value:new k(1,1,1)},uGiTexel:{value:1},uGiLit:{value:0},uDim:{value:1},fogColor:{value:new Ye},fogDensity:{value:.006},uWave:{value:null},uWaveMask:{value:null},uWorldSize:{value:new me(1,1)},uWaveTexel:{value:new me(1,1)}};waterScene=new Li;grade=new rt({uniforms:{inputBuffer:{value:null},uSceneDepth:{value:null},uNear:{value:.08},uFar:{value:1200},uUnder:{value:0},uLight:{value:new k(.3,.4,.6)},uDim:{value:1},uNormal:{value:null},uLayer:{value:Mh},uTime:{value:0},uResolution:{value:new me(1,1)}},vertexShader:tS,fragmentShader:nS,depthTest:!1,depthWrite:!1});refl;mirror=new Kt;clip;sim;lastTime=-1;frustum=new Js;hasWater=!1;area=0;rebuild(e){const t=fa(this.level),i=Math.min(t-1,e.ny-2),s=[],r=[],a=new Map,o=[],c=[],l=[],h=(u,g,v)=>{const m=(u*1024+v)*1024+g;let p=a.get(m);return p===void 0&&(p=s.length/3,a.set(m,p),s.push(u*R,g*R,v*R),o.push(0),c.push(0),l.push(0)),p};let f=0;if(i>=0){const u=e.water,g=e.nx-1,v=e.nz-1,m=e.nz,p=new Map,A=(x,y,E)=>(x*1024+E)*1024+y;for(let x=0;x<g;x++)for(let y=0;y<v;y++)for(let E=i;E>=0;E--){const _=e.index(x,E,y);if(!(!u[_]||!(E===i||!u[_+m]&&Ui(e,x,E+1,y)))){f++;for(let T=-1;T<=1;T++)for(let M=-1;M<=1;M++){const S=x+T,C=y+M;if(S>=0&&C>=0&&S<g&&C<v){const I=A(S,E,C);T===0&&M===0?p.set(I,1):p.has(I)||p.set(I,2)}}}}for(const[x,y]of p){const E=x%1024,_=Math.floor(x/1024)%1024,w=Math.floor(x/(1024*1024)),T=h(w,E+1,_),M=h(w+1,E+1,_),S=h(w+1,E+1,_+1),C=h(w,E+1,_+1);r.push(T,M,S,T,S,C),y===2?(c[T]=1,c[M]=1,c[S]=1,c[C]=1):(l[T]=1,l[M]=1,l[S]=1,l[C]=1)}for(let x=0;x<l.length;x++)l[x]||(s[x*3+1]-=$y),o[x]=c[x]}const d=new Ht;d.setAttribute("position",new cn(s,3)),d.setAttribute("aShore",new cn(o,1)),d.setAttribute("aEdge",new cn(c,1)),d.setIndex(r),d.computeBoundingBox(),d.boundingBox&&(d.boundingBox.min.y-=.5,d.boundingBox.max.y+=.5),this.mesh.geometry.dispose(),this.mesh.geometry=d,this.hasWater=s.length>0,this.area=f*R*R,this.sim.setMask(e),this.uniforms.uWaveMask.value=this.sim.maskTexture}setObstacles(e){this.sim.setObstacles(e)}splash(e,t,i,s){this.sim.splash(e,t,i,s)}setUnderwater(e){this.uniforms.uUnder.value=e?1:0,this.grade.uniforms.uUnder.value=e?1:0}dispose(){}setDepthTexture(e){this.uniforms.uSceneDepth.value=e,this.grade.uniforms.uSceneDepth.value=e}setUnderwaterLight(e,t,i,s){this.grade.uniforms.uLight.value.set(e,t,i),this.grade.uniforms.uDim.value=s,this.uniforms.uDim.value=s}setSize(e,t){this.uniforms.uResolution.value.set(e,t),this.grade.uniforms.uResolution.value.set(e,t),this.refl?.setSize(Math.max(1,Math.floor(e*.5)),Math.max(1,Math.floor(t*.5)))}render(e,t,i){if(!t||!i)return;const s=this.uniforms.uTime.value,r=this.lastTime<0?1/60:Math.min(.1,Math.max(0,s-this.lastTime));this.lastTime=s,this.hasWater&&(this.sim.step(e,r),this.uniforms.uWave.value=this.sim.texture);const a=this.mesh.geometry.boundingBox;this.frustum.setFromProjectionMatrix(new Ke().multiplyMatrices(this.cam.projectionMatrix,this.cam.matrixWorldInverse));const o=this.hasWater&&(!a||this.frustum.intersectsBox(a)),c=this.uniforms;if(c.uNear.value=this.cam.near,c.uFar.value=this.cam.far,o&&this.refl&&c.uUnder.value<.5&&this.cam.position.y>this.level){this.setupMirror();const h=e.clippingPlanes,f=e.autoClear;e.clippingPlanes=[this.clip],e.autoClear=!0,e.setRenderTarget(this.refl),e.render(this.worldScene,this.mirror),e.clippingPlanes=h,e.autoClear=f}if(this.grade.uniforms.inputBuffer.value=t.texture,this.grade.uniforms.uTime.value=s,this.grade.uniforms.uNear.value=this.cam.near,this.grade.uniforms.uFar.value=this.cam.far,e.setRenderTarget(i),e.render(this.scene,this.camera),!o)return;c.uSceneColor.value=t.texture;const l=e.autoClear;e.autoClear=!1,e.render(this.waterScene,this.cam),e.autoClear=l}setupMirror(){const e=this.cam,t=this.mirror,i=new k(0,1,0),s=new k(0,this.level,0),r=new k().setFromMatrixPosition(e.matrixWorld),a=r.clone().sub(s);a.reflect(i).negate().add(s);const o=new Ke().extractRotation(e.matrixWorld),c=new k(0,0,-1).applyMatrix4(o).add(r),l=s.clone().sub(c);l.reflect(i).negate().add(s),t.position.copy(a),t.up.set(0,1,0).applyMatrix4(o).reflect(i),t.lookAt(l),t.near=e.near,t.far=e.far,t.updateMatrixWorld(),t.projectionMatrix.copy(e.projectionMatrix),this.uniforms.uReflMatrix.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(t.projectionMatrix).multiply(t.matrixWorldInverse)}}const Gs=1,yh="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",rS="uniform sampler2D tSrc; varying vec2 vUv; void main() { gl_FragColor = texture2D(tSrc, vUv); }",aS="uniform sampler2D tSrc; varying vec2 vUv; void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).r, 0.0, 0.0, 1.0); }";class oS extends kt{constructor(e,t,i){super("IcePass"),this.cam=e,this.world=t,this.uniforms=i,this.needsSwap=!1,this.needsDepthTexture=!0,this.needsDepthBlit=!0,this.copyTarget=new at(1,1,{type:An,depthBuffer:!1}),this.depthTarget=new at(1,1,{type:tn,format:hi,depthBuffer:!1,minFilter:Mt,magFilter:Mt}),this.quad=new vt(new Un(2,2),this.copyMat),this.copyScene.add(this.quad)}meshes=new Set;copyTarget;depthTarget;copyMat=new rt({uniforms:{tSrc:{value:null}},vertexShader:yh,fragmentShader:rS,depthTest:!1,depthWrite:!1});depthMat=new rt({uniforms:{tSrc:{value:null}},vertexShader:yh,fragmentShader:aS,depthTest:!1,depthWrite:!1});copyScene=new Li;quad;copyCam=new Ss(-1,1,1,-1,0,1);frustum=new Js;pv=new Ke;sphere=new fi;setSize(e,t){this.copyTarget.setSize(e,t),this.depthTarget.setSize(e,t),this.uniforms.uResolution.value.set(e,t)}render(e,t){if(!t||this.meshes.size===0)return;this.pv.multiplyMatrices(this.cam.projectionMatrix,this.cam.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.pv);let i=!1;for(const o of this.meshes){const c=o.geometry.boundingSphere;if(c&&(o.updateWorldMatrix(!0,!1),this.sphere.copy(c).applyMatrix4(o.matrixWorld),this.frustum.intersectsSphere(this.sphere))){i=!0;break}}if(!i)return;this.quad.material=this.copyMat,this.copyMat.uniforms.tSrc.value=t.texture,e.setRenderTarget(this.copyTarget),e.render(this.copyScene,this.copyCam),this.quad.material=this.depthMat,this.depthMat.uniforms.tSrc.value=t.depthTexture,e.setRenderTarget(this.depthTarget),e.render(this.copyScene,this.copyCam);const s=this.uniforms;s.uSceneColor.value=this.copyTarget.texture,s.uSceneDepth.value=this.depthTarget.texture,s.uNear.value=this.cam.near,s.uFar.value=this.cam.far,s.uProjection.value.copy(this.cam.projectionMatrix),s.uResolution.value.set(t.width,t.height);const r=e.autoClear,a=this.cam.layers.mask;e.autoClear=!1,this.cam.layers.set(Gs),e.setRenderTarget(t),e.render(this.world,this.cam),this.cam.layers.mask=a,e.autoClear=r}dispose(){this.copyTarget.dispose(),this.depthTarget.dispose(),this.copyMat.dispose(),this.depthMat.dispose()}}const cS=`
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
  }`,lS=`
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
  }`;class hS{constructor(e){this.scene=e,this.material=new rt({uniforms:{uTime:{value:0}},vertexShader:cS,fragmentShader:lS,transparent:!0,depthWrite:!1,blending:Kr,side:Gt}),this.geo=new Un(1,1),this.geo.translate(.5,.5,0)}material;meshes=new Map;geo;set(e,t){const i=this.meshes.get(e);i&&(this.scene.remove(i),i.geometry.dispose(),this.meshes.delete(e));const s=t.length/4;if(s===0)return;const r=new Af;r.index=this.geo.index,r.attributes.position=this.geo.attributes.position,r.attributes.uv=this.geo.attributes.uv,r.instanceCount=s;const a=new Float32Array(s*3),o=new Float32Array(s),c=new Float32Array(s);for(let h=0;h<s;h++)a[h*3]=t[h*4],a[h*3+1]=t[h*4+1],a[h*3+2]=t[h*4+2],c[h]=t[h*4+3],o[h]=((a[h*3]*7.31+a[h*3+2]*3.17+a[h*3+1])%1+1)%1;r.setAttribute("aOffset",new li(a,3)),r.setAttribute("aSeed",new li(o,1)),r.setAttribute("aKind",new li(c,1));const l=new vt(r,this.material);l.frustumCulled=!1,l.renderOrder=20,this.scene.add(l),this.meshes.set(e,l)}update(e){this.material.uniforms.uTime.value=e}get count(){let e=0;for(const t of this.meshes.values())e+=t.geometry.instanceCount;return e}}const Fr=1,Sh=2,zr=8,uS=`
  uniform float uTime;
  uniform float uFadeAt, uFadeBand;
  attribute float aSeed;
  attribute float aBorn;
  attribute float aDie;
  varying float vSeed;
  varying vec2 vUv2;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;
`;function Ah(n,e,t,i){const s=new ia({color:16777215,roughness:.85,metalness:0,side:Gt,alphaTest:.5}),r={...Hy(e),uTime:{value:0},uFadeAt:{value:26},uFadeBand:{value:8}};return s.defines={...zu(t,i),SC_KIND:n},s.onBeforeCompile=a=>{Object.assign(a.uniforms,r),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
`+uS).replace("#include <begin_vertex>",`
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
        ${Nu}
        uniform float uTime;
        varying float vSeed;
        varying vec2 vUv2;
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
        ${Fu}`).replace("#include <map_fragment>",`
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
        if (any(isnan(gl_FragColor.rgb)) || any(isinf(gl_FragColor.rgb))) gl_FragColor.rgb = vec3(0.0);`)},s.customProgramCacheKey=()=>`splinecraft-scatter-v2-${n}-${t}-${i}`,s.__uniforms=r,s}class dS{constructor(e,t,i,s,r=1){this.scene=e,this.density=r,this.grassMat=Ah(Fr,t,i,s),this.leafMat=Ah(Sh,t,i,s),this.bladeGeo=new Un(.09,.55,1,3),this.bladeGeo.translate(0,.275,0),this.leafGeo=new Un(.75,.75)}grassMat;leafMat;bladeGeo;leafGeo;meshes=new Map;born=new Map;retiring=[];time=0;dummy=new zt;density=1;count=0;set(e,t,i=this.scene,s=this.time){const r=this.meshes.get(e);if(r){for(const m of r){const p=m.geometry.getAttribute("aDie");p.array.fill(s),p.needsUpdate=!0,this.retiring.push({mesh:m,at:s}),this.count-=m.count}this.meshes.delete(e)}const a=this.born.get(e)??new Map,o=new Map,c=t.length/zr;if(c===0)return;let l=0,h=0;for(let m=0;m<c;m++)t[m*zr+7]===Fr?l++:h++;const f=m=>this.density>=1||t[m*zr+6]<this.density,d=(m,p,A,x)=>{if(p===0)return null;const y=A.clone(),E=new lf(y,x,p),_=new Float32Array(p),w=new Float32Array(p),T=new Float32Array(p).fill(1e9);let M=0;const S=new k(0,1,0),C=new k,I=new Ii;for(let L=0;L<c;L++){const z=L*zr;if(t[z+7]!==m||!f(L))continue;const G=t[z+6];if(this.dummy.position.set(t[z],t[z+1],t[z+2]),C.set(t[z+3],t[z+4],t[z+5]),m===Fr){this.dummy.quaternion.setFromAxisAngle(S,G*Math.PI*2);const N=.7+G*.7;this.dummy.scale.set(N,N,N)}else{I.setFromUnitVectors(new k(0,0,1),C),this.dummy.quaternion.copy(I).multiply(new Ii().setFromAxisAngle(new k(0,0,1),G*Math.PI*2)),this.dummy.position.addScaledVector(C,.12+G*.15);const N=.75+G*.6;this.dummy.scale.set(N,N,N)}this.dummy.updateMatrix(),E.setMatrixAt(M,this.dummy.matrix),_[M]=G;const B=Math.round(G*16777216)*3+m,U=a.get(B)??s;w[M]=U,o.set(B,U),M++}return E.count=M,y.setAttribute("aSeed",new li(_,1)),y.setAttribute("aBorn",new li(w,1)),y.setAttribute("aDie",new li(T,1)),E.receiveShadow=!0,E.castShadow=!1,E.frustumCulled=!1,i.add(E),this.count+=M,E},u=[],g=d(Fr,l,this.bladeGeo,this.grassMat);g&&u.push(g);const v=d(Sh,h,this.leafGeo,this.leafMat);v&&u.push(v),u.length&&this.meshes.set(e,u),o.size?this.born.set(e,o):this.born.delete(e)}setFade(e,t){for(const i of[this.grassMat,this.leafMat]){const s=i.__uniforms;s.uFadeAt.value=e,s.uFadeBand.value=t}}update(e){this.time=e;for(const t of[this.grassMat,this.leafMat])t.__uniforms.uTime.value=e;if(this.retiring.length){const t=[];for(const i of this.retiring)e-i.at>.45?(i.mesh.parent?.remove(i.mesh),i.mesh.geometry.dispose()):t.push(i);this.retiring=t}}setVisible(e){for(const t of this.meshes.values())for(const i of t)i.visible=e}}const fS=`
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
  }`,pS=`
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
  }`;class mS{constructor(e,t){this.scene=e,this.material=new rt({uniforms:{uTime:{value:0},uPixelRatio:{value:t},uNight:{value:0}},vertexShader:fS,fragmentShader:pS,transparent:!0,depthWrite:!1,blending:Kr})}material;clouds=new Map;count=0;set(e,t,i,s,r){const a=this.clouds.get(e);a&&(this.scene.remove(a),a.geometry.dispose(),this.count-=a.geometry.getAttribute("aOrigin").count,this.clouds.delete(e));const o=14;let c=0;for(let x=0;x<t.length/4;x++)t[x*4+3]<.5&&c++;const l=c*o,h=i.length/s;let f=0;for(let x=0;x<h;x++)i[x*s+6]<r&&f++;const d=l+f;if(d===0)return;const u=new Float32Array(d*3),g=new Float32Array(d),v=new Float32Array(d);let m=0;for(let x=0;x<t.length/4;x++)for(let y=0;y<o&&!(t[x*4+3]>=.5);y++)u[m*3]=t[x*4],u[m*3+1]=t[x*4+1]+.1,u[m*3+2]=t[x*4+2],g[m]=(x*.618+y*.137)%1,v[m]=0,m++;for(let x=0;x<h;x++){const y=x*s;i[y+6]>=r||(u[m*3]=i[y],u[m*3+1]=i[y+1]+.5,u[m*3+2]=i[y+2],g[m]=i[y+6]/r,v[m]=1,m++)}const p=new Ht;p.setAttribute("position",new Ze(new Float32Array(d*3),3)),p.setAttribute("aOrigin",new Ze(u,3)),p.setAttribute("aSeed",new Ze(g,1)),p.setAttribute("aKind",new Ze(v,1));const A=new pf(p,this.material);A.frustumCulled=!1,A.renderOrder=21,this.scene.add(A),this.clouds.set(e,A),this.count+=d}update(e,t){this.material.uniforms.uTime.value=e,this.material.uniforms.uNight.value=1-t}}class gS extends zi{constructor(){super("SunStreaksEffect",`
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
      }`,{blendFunction:We.NORMAL,uniforms:new Map([["uSun",new ce(new me(.5,.5))],["uOn",new ce(0)],["uAspect",new ce(1)]])})}set(e,t,i){this.uniforms.get("uOn").value=e?1:0,this.uniforms.get("uSun").value.copy(t),this.uniforms.get("uAspect").value=i}}const vS=`
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
  }`,xS=`
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
  }`;class MS extends kt{constructor(e,t,i,s=16){super("VolumetricPass"),this.cam=e,this.sun=t,this.needsDepthTexture=!0,this.needsSwap=!1,this.target=new at(1,1,{type:An,depthBuffer:!1,minFilter:tt,magFilter:tt}),this.mat=new rt({vertexShader:"varying vec2 vUv; void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:vS.replace("  void main() {",xS+`
  void main() {`),uniforms:{depthBuffer:{value:null},shadowMap:{value:null},shadowMatrix:{value:new Ke},invProjection:{value:new Ke},invView:{value:new Ke},cameraPos:{value:new k},uSunDir:i.uSunDir,uSunColor:i.uSkySunColor,uSkyAmbient:{value:new k(.3,.4,.6)},uDaylight:i.uDaylight,uSeaLevel:{value:22},uDensity:{value:.0085},uLocal:{value:.5},uTime:{value:0},uUnder:{value:0},uWave:{value:null},uWorldSize:{value:new me(1,1)},uWaveTexel:{value:new me(1,1)},uGiSize:i.uGiSize,uSh0:i.uSh0,uSh1:i.uSh1,uSh2:i.uSh2,uSteps:{value:s}},depthTest:!1,depthWrite:!1}),this.fullscreenMaterial=this.mat}target;mat;scale=.5;get uniforms(){return this.mat.uniforms}setDepthTexture(e){this.mat.uniforms.depthBuffer.value=e}setSize(e,t){this.target.setSize(Math.max(1,Math.floor(e*this.scale)),Math.max(1,Math.floor(t*this.scale)))}render(e){const t=this.mat.uniforms;t.shadowMap.value=this.sun.shadow.map?.texture??null,t.shadowMatrix.value.copy(this.sun.shadow.matrix),t.invProjection.value.copy(this.cam.projectionMatrixInverse),t.invView.value.copy(this.cam.matrixWorld),t.cameraPos.value.copy(this.cam.position),t.shadowMap.value&&(e.setRenderTarget(this.target),e.render(this.scene,this.camera))}}class yS extends zi{constructor(e){super("VolumetricEffect",`
      uniform sampler2D volTex;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 v = texture2D(volTex, uv);
        outputColor = vec4(inputColor.rgb * v.a + v.rgb, inputColor.a);
      }`,{blendFunction:We.NORMAL,uniforms:new Map([["volTex",new ce(e.texture)]])})}}const SS=56;class AS{gl;scene=new Li;camera;sun;ambient;sky;water;flames;scatter;particles;underLight=new k(.1,.15,.2);skyAmbient=[.3,.4,.6];volumetric=null;textures;giTex;terrain;uniforms;variant="full";shaderError="";onShaderError=null;opts;fog;chunks=new Map;worldCenter;worldRadius;shadowReach=1;streaks=null;sunUv=new me;tmpV=new k;shadowCenter=new k;sunDir=new k(0,1,0);triangles=0;underwater=!1;composer=null;volumetricSteps=16;caustics=!0;propagation=null;giDirty=!1;postTier=1;seaLevel;constructor(e,t,i,s,r){this.seaLevel=s,this.opts=r,this.variant=r.variant??"full",this.gl=new av({canvas:e,antialias:r.antialias,powerPreference:"high-performance"}),this.gl.toneMapping=Wn,this.gl.toneMappingExposure=.9,this.gl.outputColorSpace=st,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=Ph,this.gl.setPixelRatio(Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.camera=new Kt(72,1,.08,1200),this.worldCenter=new k(t.sizeX/2,t.sizeY/2,t.sizeZ/2),this.worldRadius=Math.hypot(t.sizeX,t.sizeY,t.sizeZ)/2,this.fog=new Mc(10466248,.0032),this.scene.fog=this.fog,this.textures=r.textures,this.giTex=new Fy(i);const a=is(this.textures,this.giTex,r.cheapGi,r.giMode,this.variant);this.terrain=a.material,this.uniforms=a.uniforms,this.gl.debug.onShaderError=(l,h,f,d)=>{const u=l.getProgramInfoLog(h)??"",g=l.getShaderInfoLog(d)??"",v=l.getShaderInfoLog(f)??"",m=(g||v||u).split(`
`).find(A=>/error/i.test(A))??(g||v||u).slice(0,160),p=this.gl.info.programs?.length??0;this.shaderError=`shader error (${p} programs): ${m.slice(0,200)}`,console.error("[splinecraft] shader error",{vsLog:v,fsLog:g,log:u}),this.onShaderError?.(this.shaderError),/terrain/.test(this.terrain.name)&&this.variant!=="basic"&&this.stepDownVariant()},this.sun=new yf(16777215,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(r.shadowMapSize,r.shadowMapSize),this.shadowReach=Math.min(SS,this.worldRadius*.85);const o=this.shadowReach,c=this.sun.shadow.camera;if(c.left=-o,c.right=o,c.top=o,c.bottom=-o,c.near=1,c.far=this.worldRadius*4,c.updateProjectionMatrix(),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.04,this.sun.shadow.radius=3,this.sun.target.position.copy(this.worldCenter),this.scene.add(this.sun,this.sun.target),this.ambient=new Sf(16777215,.02),this.scene.add(this.ambient),this.sun.layers.enable(Gs),this.ambient.layers.enable(Gs),this.sky=new Vy,this.scene.add(this.sky.mesh),this.water=new sS(this.scene,this.camera,s,this.textures.normal,r.reflection,t.sizeX,t.sizeZ,r.reflection?4:2),this.gl.shadowMap.autoUpdate=!1,this.flames=new hS(this.scene),this.scatter=new dS(this.scene,this.uniforms,r.cheapGi,r.giMode,r.scatterDensity),this.particles=new mS(this.scene,Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.volumetricSteps=r.volumetricSteps,this.caustics=r.caustics,r.giMode==="sh"){const l=new Gy(this.gl,this.giTex,r.giDiv);l.setSources(this.giTex.normalTexture,bc),l.setBoost(Ti);const[h,f,d]=l.textures;this.uniforms.uSh0.value=h,this.uniforms.uSh1.value=f,this.uniforms.uSh2.value=d,this.propagation=l;const u=this.water.uniforms;u.uSh0=this.uniforms.uSh0,u.uSh1=this.uniforms.uSh1,u.uSh2=this.uniforms.uSh2,u.uGiSize=this.uniforms.uGiSize,u.uGiTexel=this.uniforms.uGiTexel,this.water.uniforms.uGiLit.value=1}this.setPost(r.post),this.resize()}giUploaded(){this.giDirty=!0}setupIce(e){for(const s of this.iceChunks.values())this.scene.remove(s),this.ice?.meshes.delete(s);this.iceChunks.clear(),this.ice?.dispose(),this.ice=null,this.iceMat?.dispose(),this.iceMat=null,this.iceUniforms=null,this.iceCastDepth?.dispose(),this.iceCastDepth=null,this.iceOnlyDepth?.dispose(),this.iceOnlyDepth=null,this.iceShadowRT?.dispose(),this.iceShadowRT=null;for(const s of this.chunks.values())s.customDepthMaterial=void 0;if(this.uniforms.uIceCaustic.value=0,!e){this.uniforms.uIceMode.value=2;return}this.uniforms.uIceMode.value=0,this.iceCastDepth=xh(!1),this.iceOnlyDepth=xh(!0);for(const s of this.chunks.values())s.customDepthMaterial=this.iceCastDepth;const t=1024;this.iceShadowRT=new at(t,t,{depthTexture:new ca(t,t,tn),depthBuffer:!0,minFilter:Mt,magFilter:Mt}),this.uniforms.uIceShadow.value=this.iceShadowRT.depthTexture,this.uniforms.uIceReach.value=this.shadowReach,this.uniforms.uSeaLevel.value=this.seaLevel,this.uniforms.uIceDebug.value=this.opts.iceDebug;const i=is(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);i.uniforms.uTexLocal.value=0,i.uniforms.uIceMode.value=1,this.opts.iceDebug===7&&(i.material.depthTest=!1),this.opts.iceDebug===9&&(i.material.side=Gt),this.iceMat=i.material,this.iceUniforms=i.uniforms,this.ice=new oS(this.camera,this.scene,i.uniforms);for(const[s,r]of this.chunks)r.geometry.getAttribute("aMats").array.includes(yn)&&this.iceChunks.set(s,this.iceTwin(r.geometry,this.iceMat,this.scene))}iceTwin(e,t,i){const s=new vt(e,t);return s.layers.set(Gs),s.castShadow=!1,s.receiveShadow=!0,i.add(s),this.ice?.meshes.add(s),s}stepDownVariant(){const e=this.variant==="full"?"lite":"basic";this.variant=e;const t=is(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,e);for(const s of Object.keys(t.uniforms))t.uniforms[s]=this.uniforms[s];const i=this.terrain;this.terrain=t.material;for(const s of this.chunks.values())s.material=this.terrain;i.dispose(),this.setupIce(this.ice!==null&&e!=="basic"),this.onShaderError?.(`terrain material stepped down to '${e}'`)}setPost(e){this.postTier=e,this.composer?.dispose();const t=new aM(this.gl,{frameBufferType:An});t.addPass(new Lu(this.scene,this.camera)),this.setupIce(e>=1&&this.variant!=="basic"),this.ice&&t.addPass(this.ice),t.addPass(this.water);const i=[];if(this.volumetric=null,e>=2&&this.volumetricSteps>0){const s=new MS(this.camera,this.sun,this.uniforms,this.volumetricSteps);s.uniforms.uSeaLevel.value=this.seaLevel,t.addPass(s),i.push(new yS(s.target)),this.volumetric=s,s.uniforms.uUnder.value=this.underwater?1:0}if(e>=2){const s=new Ny(this.scene,this.camera),r=s.render.bind(s);s.render=(...a)=>{const o=this.sky.mesh.visible;this.sky.mesh.visible=!1;const c=this.flames.material.visible;this.flames.material.visible=!1;const l=this.particles.material.visible;this.particles.material.visible=!1,r(...a),this.sky.mesh.visible=o,this.flames.material.visible=c,this.particles.material.visible=l},t.addPass(s),i.push(new wy(this.camera,s.texture,{samples:12,rings:5,radius:.04,intensity:1.6,luminanceInfluence:.6,resolutionScale:.5,bias:.02,distanceThreshold:.6,distanceFalloff:.1}))}this.streaks=null,e>=1&&(this.streaks=new gS,i.push(this.streaks),i.push(new iy({luminanceThreshold:.85,luminanceSmoothing:.3,intensity:.55,mipmapBlur:!0,radius:.7})),i.push(new Iy({darkness:.32,offset:.28}))),i.push(new Dy({mode:$t.ACES_FILMIC})),t.addPass(new vh(this.camera,...i)),e>=2&&t.addPass(new vh(this.camera,new my)),this.composer=t,this.resize()}resize(){const e=window.innerWidth,t=window.innerHeight;this.gl.setSize(e,t,!1),this.composer?.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setSun(e){const t=new k(...e.dir);this.sunDir.copy(t),this.placeSun();const i=Math.max(e.sun[0],e.sun[1],e.sun[2],1e-4);this.sun.color.setRGB(e.sun[0]/i,e.sun[1]/i,e.sun[2]/i),this.sun.intensity=i,this.sun.visible=i>.01;const s=this.uniforms;s.uSunDir.value.copy(t),s.uSkyZenith.value.set(...e.zenith),s.uSkyHorizon.value.set(...e.horizon),s.uSkySunColor.value.set(...e.sun),s.uDaylight.value=e.daylight,this.propagation?.setSky(e.ambient),this.volumetric&&this.volumetric.uniforms.uSkyAmbient.value.set(...e.ambient);const r=this.sky.uniforms;r.uSunDir.value.copy(t),r.uSunColor.value.set(e.sun[0]/3,e.sun[1]/3,e.sun[2]/3),r.uZenith.value.set(...e.zenith),r.uHorizon.value.set(...e.horizon),r.uDaylight.value=e.daylight;const a=this.water.uniforms;a.uSunDir.value.copy(t),a.uSunColor.value.set(...e.sun),a.uZenith.value.set(...e.zenith),a.uHorizon.value.set(...e.horizon),a.uAmbient.value.set(...e.ambient),this.skyAmbient=[e.ambient[0],e.ambient[1],e.ambient[2]],this.ambient.intensity=.015+.02*e.daylight,this.underwater||(this.fog.color.setRGB(e.horizon[0],e.horizon[1],e.horizon[2]),this.fog.density=.0032),this.water.uniforms.fogColor.value.copy(this.fog.color),this.water.uniforms.fogDensity.value=this.fog.density}placeSun(){const e=2*this.shadowReach/this.sun.shadow.mapSize.x,t=this.shadowCenter;t.copy(this.camera.position),t.x=Math.round(t.x/e)*e,t.y=Math.round(t.y/e)*e,t.z=Math.round(t.z/e)*e,this.sun.target.position.copy(t),this.sun.position.copy(t).addScaledVector(this.sunDir,this.worldRadius*2)}setUnderwater(e,t){this.underwater=e,e?(this.fog.color.setRGB(.03*(.3+t.daylight),.12*(.3+t.daylight),.16*(.3+t.daylight)),this.fog.density=.018):(this.fog.color.setRGB(t.horizon[0],t.horizon[1],t.horizon[2]),this.fog.density=.0032),this.water.uniforms.fogColor.value.copy(this.fog.color),this.water.uniforms.fogDensity.value=this.fog.density,this.water.setUnderwater(e),this.volumetric&&(this.volumetric.uniforms.uUnder.value=e?1:0)}time=0;chunkGeometry(e,t,i,s){const r=new Ht;r.setAttribute("position",new Ze(s.positions,3)),r.setAttribute("normal",new Ze(s.normals,3)),r.setAttribute("aMats",new Ze(s.mats,3,!1)),r.setAttribute("aBary",new Ze(s.bary,3)),r.setAttribute("aFace",new Ze(s.face,4)),r.setAttribute("aMorph",new Ze(s.morph,4));const a=he*R;return r.boundingSphere=new fi(new k((e+.5)*a,(t+.5)*a,(i+.5)*a),a*.9),r}setChunk(e,t,i,s){const r=Ct(e,t,i);this.flames.set(r,s.emitters),this.scatter.set(r,s.scatter,void 0,this.time),this.particles.set(r,s.emitters,s.scatter,8,.003);const a=this.chunks.get(r);a&&(this.triangles-=a.geometry.getAttribute("position").count/3,this.scene.remove(a),a.geometry.dispose(),this.chunks.delete(r));const o=this.iceChunks.get(r);if(o&&(this.scene.remove(o),this.ice?.meshes.delete(o),this.iceChunks.delete(r)),s.vertexCount===0)return;const c=new vt(this.chunkGeometry(e,t,i,s),this.terrain);c.castShadow=!0,c.receiveShadow=!0,this.iceCastDepth&&(c.customDepthMaterial=this.iceCastDepth),this.scene.add(c),this.chunks.set(r,c),this.triangles+=s.vertexCount/3,this.ice&&this.iceMat&&s.mats.includes(yn)&&this.iceChunks.set(r,this.iceTwin(c.geometry,this.iceMat,this.scene))}fragments=new Map;setFragment(e,t,i,s,r,a){if(this.removeFragment(e),t.vertexCount===0)return;const o=new Ht;o.setAttribute("position",new Ze(t.positions,3)),o.setAttribute("normal",new Ze(t.normals,3)),o.setAttribute("aMats",new Ze(t.mats,3,!1)),o.setAttribute("aBary",new Ze(t.bary,3)),o.setAttribute("aFace",new Ze(t.face,4)),o.setAttribute("aMorph",new Ze(t.morph,4)),o.computeBoundingSphere();const c=is(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);c.uniforms.uTexLocal.value=1,c.uniforms.uTexOrigin.value.set(a[0],a[1],a[2]);const l=new vt(o,c.material);l.castShadow=!0,l.receiveShadow=!0,this.iceCastDepth&&(l.customDepthMaterial=this.iceCastDepth);const h=new oi;h.userData.body=c;const f=new oi;if(f.position.set(-i[0],-i[1],-i[2]),f.add(l),this.ice&&t.mats.includes(yn)){c.uniforms.uIceMode.value=0;const d=is(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);d.uniforms.uTexLocal.value=1,d.uniforms.uTexOrigin.value.set(a[0],a[1],a[2]),d.uniforms.uIceMode.value=1,this.iceUniforms&&(d.uniforms.uSceneColor=this.iceUniforms.uSceneColor,d.uniforms.uSceneDepth=this.iceUniforms.uSceneDepth,d.uniforms.uResolution=this.iceUniforms.uResolution,d.uniforms.uNear=this.iceUniforms.uNear,d.uniforms.uFar=this.iceUniforms.uFar),h.userData.iceBody=d,this.iceTwin(o,d.material,f)}h.add(f),h.position.set(s[0],s[1],s[2]),h.quaternion.set(r[0],r[1],r[2],r[3]),h.userData.emitters=t.emitters,h.userData.inner=f,this.scene.add(h),this.fragments.set(e,h),this.scatter.set(-e,t.scatter,f,this.time),this.placeBodyFlames(e,h)}placeBodyFlames(e,t){const i=t.userData.emitters;if(!i||i.length===0)return;t.updateMatrixWorld(!0);const s=t.userData.inner,r=new Float32Array(i.length),a=new k;for(let o=0;o<i.length;o+=4)a.set(i[o],i[o+1],i[o+2]),s.localToWorld(a),r[o]=a.x,r[o+1]=a.y,r[o+2]=a.z,r[o+3]=i[o+3];this.flames.set(-e,r)}moveFragment(e,t,i){const s=this.fragments.get(e);s&&(s.position.set(t[0],t[1],t[2]),s.quaternion.set(i[0],i[1],i[2],i[3]),this.placeBodyFlames(e,s))}fadeFragment(e,t){const i=this.fragments.get(e);if(!i)return;const s=i.userData.body;s.uniforms.uFade.value=Math.max(0,Math.min(1,t)),s.material.polygonOffset=t<1,s.material.polygonOffsetFactor=-1,s.material.polygonOffsetUnits=-2;const r=i.userData.iceBody;r&&(r.uniforms.uFade.value=s.uniforms.uFade.value)}removeFragment(e){const t=this.fragments.get(e);t&&(this.scatter.set(-e,new Float32Array(0)),this.flames.set(-e,new Float32Array(0)),this.scene.remove(t),t.traverse(i=>{i instanceof vt&&(i.geometry.dispose(),this.ice?.meshes.delete(i))}),t.userData.body.material.dispose(),t.userData.iceBody?.material.dispose(),this.fragments.delete(e))}get fallingCount(){return this.fragments.size}ice=null;iceMat=null;iceUniforms=null;iceChunks=new Map;iceCastDepth=null;iceOnlyDepth=null;iceShadowRT=null;skins=new Map;animals=new Map;setSkin(e,t,i){const s=new Ht;s.setAttribute("position",new Ze(i.positions,3)),s.setAttribute("normal",new Ze(i.normals,3)),s.setAttribute("aMats",new Ze(i.mats,3,!1)),s.setAttribute("aBary",new Ze(i.bary,3)),s.setAttribute("aFace",new Ze(i.face,4)),s.setAttribute("aMorph",new Ze(i.morph,4)),s.computeBoundingSphere();const r=`${e}:${t}`;this.skins.get(r)?.dispose(),this.skins.set(r,s)}get skinCount(){return this.skins.size}placeAnimal(e,t,i,s,r,a=0){const o=this.skins.get(`${t}:${i}`);if(!o)return;let c=this.animals.get(e);if(!c){const h=is(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);h.uniforms.uTexLocal.value=1,h.uniforms.uTexOrigin.value.set(0,0,0);const f=new vt(o,h.material);f.castShadow=!0,f.receiveShadow=!0,c=new oi,c.add(f),c.userData.body=h,c.userData.mesh=f,this.scene.add(c),this.animals.set(e,c)}const l=c.userData.mesh;l.geometry!==o&&(l.geometry=o),c.position.set(s[0],s[1],s[2]),c.rotation.set(0,r+Math.PI*.5,a,"YZX")}removeAnimal(e){const t=this.animals.get(e);t&&(this.scene.remove(t),t.userData.body.material.dispose(),this.animals.delete(e))}clearAnimals(){for(const e of[...this.animals.keys()])this.removeAnimal(e)}get animalCount(){return this.animals.size}hand=null;handKind=-1;setHandItem(e){this.camera.parent||this.scene.add(this.camera),this.hand&&(this.camera.remove(this.hand),this.hand.traverse(a=>{a instanceof vt&&(a.geometry.dispose(),a.material.dispose())}),this.hand=null),this.handKind=-1,this.flames.set(-7,new Float32Array(0));const t=Et[e];if(!t)return;const i=new oi,s=new Ye(t.albedo[0],t.albedo[1],t.albedo[2]),r=t.emissive?new Ye(t.emissive[0],t.emissive[1],t.emissive[2]).multiplyScalar(.03):new Ye(0,0,0);if(t.hard&&t.solid===!1){const a=new vt(new Pi(.02,.1,.02),new ia({color:s,roughness:.8}));a.position.y=-.03,i.add(a),this.handKind=e===Ac?1:0}else{const a=new vt(new Pi(.11,.11,.11),new ia({color:s,emissive:r,roughness:t.roughness??.8,metalness:t.metalness??0,transparent:e===yn,opacity:e===yn?.55:1}));a.rotation.set(.35,-.6,.1),i.add(a)}i.position.set(.3,-.24,-.52),i.traverse(a=>{a.castShadow=!1,a.receiveShadow=!1,a.frustumCulled=!1}),this.camera.add(i),this.hand=i}handWorld(){if(!this.hand)return null;this.camera.updateMatrixWorld(!0);const e=new k(0,.06,0);return this.hand.localToWorld(e),this.handKind>=0&&this.flames.set(-7,new Float32Array([e.x,e.y,e.z,this.handKind])),e}setCursor(e,t,i,s,r){this.uniforms.uCursor.value.set(e,t,i,s),this.uniforms.uCursorShape.value=r?1:0,r&&this.uniforms.uCursorExt.value.set(r[0],r[1],r[2])}render(e){this.time=e,this.uniforms.uTime.value=e,this.water.uniforms.uTime.value=e,this.flames.update(e),this.scatter.update(e),this.particles.update(e,this.uniforms.uDaylight.value);const t=Math.max(0,this.seaLevel-this.camera.position.y),i=Math.exp(-t*.22);if(this.underLight.set(this.skyAmbient[0]*i,this.skyAmbient[1]*i,this.skyAmbient[2]*i),this.water.setUnderwaterLight(this.underLight.x,this.underLight.y,this.underLight.z,.92*Math.exp(-t*.06)),this.streaks){const s=this.sunDir;this.tmpV.copy(s).multiplyScalar(200).add(this.camera.position).project(this.camera);const r=this.tmpV.z<1;this.sunUv.set(this.tmpV.x*.5+.5,this.tmpV.y*.5+.5);const a=this.underwater&&r&&s.y>-.05&&this.sunUv.x>-.6&&this.sunUv.x<1.6&&this.sunUv.y>-.6&&this.sunUv.y<1.6;this.streaks.set(a,this.sunUv,this.camera.aspect)}if(this.sky.uniforms.uTime.value=e,this.volumetric){const s=this.volumetric.uniforms;s.uTime.value=e,s.uWave.value=this.water.sim.texture,s.uWorldSize.value.copy(this.water.uniforms.uWorldSize.value),s.uWaveTexel.value.copy(this.water.sim.texelSize)}if(this.sky.mesh.position.copy(this.camera.position),this.propagation){this.propagation.inject(e),this.giDirty?(this.giDirty=!1,this.propagation.step(this.propagation.iterations===0?12:2)):this.propagation.step(1);const[s,r,a]=this.propagation.textures;this.uniforms.uSh0.value=s,this.uniforms.uSh1.value=r,this.uniforms.uSh2.value=a}this.placeSun(),this.renderIceShadow(),this.gl.shadowMap.needsUpdate=!0,this.composer?this.composer.render():this.gl.render(this.scene,this.camera)}renderIceShadow(){const e=this.uniforms;if(!this.caustics||!this.ice||!this.iceShadowRT||!this.iceOnlyDepth||this.ice.meshes.size===0||this.sunDir.y<.02){e.uIceCaustic.value=0;return}this.sun.updateMatrixWorld(!0),this.sun.target.updateMatrixWorld(!0),this.sun.shadow.updateMatrices(this.sun);const t=this.sun.shadow.camera,i=t.layers.mask,s=this.scene.overrideMaterial,r=this.gl.autoClear;t.layers.set(Gs),this.scene.overrideMaterial=this.iceOnlyDepth,this.gl.autoClear=!0,this.gl.setRenderTarget(this.iceShadowRT),this.gl.clear(!0,!0,!1),this.gl.render(this.scene,t),this.gl.setRenderTarget(null),this.scene.overrideMaterial=s,t.layers.mask=i,this.gl.autoClear=r,e.uIceShadowMatrix.value.copy(this.sun.shadow.matrix),e.uIceCaustic.value=1}get chunkCount(){return this.chunks.size}}class _S{workers=[];idle=[];queue=[];inflight=new Map;nextId=1;constructor(e){for(let t=0;t<e;t++){const i=new Worker(new URL(""+new URL("mesh.worker-v9tzwNm1.js",import.meta.url).href,import.meta.url),{type:"module"});i.onmessage=s=>{const r=this.inflight.get(i);this.inflight.delete(i),this.idle.push(i),r?.resolve(s.data),this.pump()},i.onerror=s=>console.error("worker error",s),this.workers.push(i),this.idle.push(i)}}get size(){return this.workers.length}get queued(){return this.queue.length+this.inflight.size}submit(e,t){const i={...e,kind:"mesh",id:this.nextId++};return this.enqueue(i,[i.density.buffer,i.material.buffer,i.hard.buffer,i.sub.buffer],t)}gen(e,t,i,s,r){return this.enqueue({kind:"gen",id:this.nextId++,cx:e,cy:t,cz:i,cfg:s},[],r)}skin(e,t,i){return this.enqueue({kind:"skin",id:this.nextId++,animal:e,bucket:t,material:i},[],-3)}frag(e,t,i,s,r,a,o,c){return this.enqueue({kind:"frag",id:this.nextId++,nx:e,ny:t,nz:i,density:s,material:r,hard:a,sub:o,scatter:c},[s.buffer,r.buffer,a.buffer,o.buffer],-2)}textures(e){return this.enqueue({kind:"textures",id:this.nextId++,size:e},[],-1)}enqueue(e,t,i){return new Promise(s=>{this.queue.push({job:e,transfer:t,priority:i,resolve:s}),this.pump()})}reprioritize(e){for(const t of this.queue)t.job.kind==="mesh"&&(t.priority=e(t.job))}pump(){for(;this.idle.length&&this.queue.length;){let e=0;for(let s=1;s<this.queue.length;s++)this.queue[s].priority<this.queue[e].priority&&(e=s);const t=this.queue.splice(e,1)[0],i=this.idle.pop();this.inflight.set(i,t),i.postMessage(t.job,t.transfer)}}}class wS{constructor(e){this.canvas=e,window.addEventListener("keydown",t=>{t.repeat||(this.keys.add(t.code),this.pressed.add(t.code),["Space","Tab","KeyQ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&(this.locked||this.freeMouse)&&t.preventDefault())}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseDown=[!1,!1,!1]}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===e,this.locked||(this.mouseDown=[!1,!1,!1])}),e.addEventListener("mousemove",t=>{if(!this.locked)return;this.yaw-=t.movementX*this.sens,this.pitch-=t.movementY*this.sens;const i=Math.PI/2-.01;this.pitch=Math.max(-i,Math.min(i,this.pitch))}),e.addEventListener("mousedown",t=>{this.locked&&(t.preventDefault(),t.button<3&&(this.mouseDown[t.button]=!0,this.mouseClick[t.button]=!0))}),window.addEventListener("mouseup",t=>{t.button<3&&(this.mouseDown[t.button]=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("wheel",t=>{this.locked&&(t.preventDefault(),this.wheel+=Math.sign(t.deltaY))},{passive:!1})}keys=new Set;pressed=new Set;yaw=0;pitch=0;wheel=0;mouseDown=[!1,!1,!1];mouseClick=[!1,!1,!1];locked=!1;freeMouse=!1;sens=.0022;requestLock(){this.canvas.requestPointerLock?.()}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}flush(){this.pressed.clear(),this.mouseClick=[!1,!1,!1],this.wheel=0}}class ES{root;hotbar;slots=[];status;clock;debug;toast;toastTimer=0;overlay;loading;loadingBar;loadingText;lastStatus="";lastDebug="";onNewWorld=null;onResetEdits=null;onLoadWorld=null;onRenameWorld=null;onDeleteWorld=null;onQuality=null;onFoliage=null;onFall=null;onEditMs=null;onAnimals=null;onSand=null;onSnow=null;onResume=null;onSelectSlot=null;onTime=null;onTimeFlow=null;onCopyLink=null;onMenu=null;errorEl=null;timeSliders=[];dragging=!1;constructor(){this.root=document.getElementById("hud"),this.hotbar=document.getElementById("hotbar"),this.status=document.getElementById("status"),this.clock=document.getElementById("clock"),this.debug=document.getElementById("debug"),this.toast=document.getElementById("toast"),this.overlay=document.getElementById("overlay"),this.loading=document.getElementById("loading"),this.loadingBar=document.getElementById("loading-bar"),this.loadingText=document.getElementById("loading-text"),document.getElementById("btn-play").addEventListener("click",()=>this.onResume?.()),document.getElementById("btn-new").addEventListener("click",()=>{const e=document.getElementById("seed-input").value.trim(),t=e===""?Math.floor(Math.random()*1e9):Gu(e),i=document.getElementById("size-select");this.onNewWorld?.(t,i?Number(i.value):8)}),document.getElementById("btn-reset").addEventListener("click",()=>{confirm("Erase every edit in this world? The terrain regenerates from its seed.")&&this.onResetEdits?.()});for(const e of["time-slider","time-slider-menu"]){const t=document.getElementById(e);t&&(this.timeSliders.push(t),t.addEventListener("input",()=>{this.dragging=!0,this.onTime?.(Number(t.value))}),t.addEventListener("change",()=>{this.dragging=!1}))}document.getElementById("time-flow")?.addEventListener("click",()=>this.onTimeFlow?.()),document.getElementById("btn-copy")?.addEventListener("click",()=>this.onCopyLink?.()),document.getElementById("gear")?.addEventListener("click",()=>this.onMenu?.()),this.errorEl=document.getElementById("error-strip"),this.errorEl?.addEventListener("click",()=>{this.errorEl&&(this.errorEl.hidden=!0)}),document.getElementById("edit-slider")?.addEventListener("input",e=>{const t=Number(e.target.value);this.setEditLabel(t),this.onEditMs?.(t)}),document.getElementById("fall-select")?.addEventListener("change",e=>{this.onFall?.(Number(e.target.value))}),document.getElementById("animals-select")?.addEventListener("change",e=>{this.onAnimals?.(e.target.value==="1")}),document.getElementById("sand-select")?.addEventListener("change",e=>{this.onSand?.(e.target.value==="1")}),document.getElementById("snow-select")?.addEventListener("change",e=>{this.onSnow?.(e.target.value==="1")}),document.getElementById("foliage-select")?.addEventListener("change",e=>{this.onFoliage?.(Number(e.target.value))}),document.getElementById("quality-select").addEventListener("change",e=>{this.onQuality?.(e.target.value)})}setLoading(e,t){this.loading.hidden=!1,this.loadingBar.style.width=`${Math.round(e*100)}%`,this.loadingText.textContent=t}hideLoading(){this.loading.hidden=!0}setEditLabel(e){const t=document.getElementById("edit-label");t&&(t.textContent=`${(e/1e3).toFixed(2)} s`)}showOverlay(e,t,i=1,s=7,r=!0,a=!0,o=140,c=!0){const l=document.getElementById("edit-slider");l&&(l.value=String(o),this.setEditLabel(o));const h=document.getElementById("animals-select");h&&(h.value=r?"1":"0");const f=document.getElementById("sand-select");f&&(f.value=a?"1":"0");const d=document.getElementById("snow-select");d&&(d.value=c?"1":"0");const u=document.getElementById("fall-select");u&&(u.value=String(s),u.value!==String(s)&&(u.value="7")),this.overlay.hidden=!1,this.root.classList.add("dim"),document.getElementById("seed-label").textContent=String(e),document.getElementById("quality-select").value=t;const g=document.getElementById("foliage-select");g&&(g.value=String(i),g.value!==String(i)&&(g.value="1"))}hideOverlay(){this.overlay.hidden=!0,this.root.classList.remove("dim")}renderWorlds(e,t){const i=document.getElementById("worlds");if(!i)return;i.innerHTML="";const s=[...e].sort((r,a)=>r.seed===t?-1:a.seed===t?1:a.updatedAt-r.updatedAt);for(const r of s){const a=document.createElement("div");a.className="world"+(r.seed===t?" current":"");const o=document.createElement("button");o.className="wname",o.textContent=r.name,o.title=r.seed===t?"this world":"load this world",o.addEventListener("click",()=>this.onLoadWorld?.(r.seed));const c=document.createElement("span");c.className="wmeta",c.textContent=`seed ${r.seed} · ${(r.chunks??8)*16} m${r.seed===t?" · playing":r.updatedAt?" · "+bS(r.updatedAt):""}`;const l=document.createElement("button");l.className="wbtn",l.textContent="✎",l.title="rename",l.addEventListener("click",()=>{const f=prompt("World name",r.name);f!==null&&this.onRenameWorld?.(r.seed,f)});const h=document.createElement("button");h.className="wbtn",h.textContent="✕",h.title="delete this world and its edits",h.addEventListener("click",()=>{confirm(`Delete "${r.name}" and every edit in it?`)&&this.onDeleteWorld?.(r.seed)}),a.append(o,c,l,h),i.appendChild(a)}if(!s.length){const r=document.createElement("div");r.className="wmeta",r.textContent="no saved worlds yet",i.appendChild(r)}}get overlayVisible(){return!this.overlay.hidden}buildHotbar(e){this.hotbar.innerHTML="",this.slots=[],pn.forEach((t,i)=>{const s=document.createElement("div");s.className="slot";const r=document.createElement("canvas");r.width=16,r.height=16;const a=r.getContext("2d"),o=a.createImageData(16,16),c=e.swatches[t.id];for(let f=0;f<256;f++)o.data[f*4]=c[f*3],o.data[f*4+1]=c[f*3+1],o.data[f*4+2]=c[f*3+2],o.data[f*4+3]=255;a.putImageData(o,0,0);const l=document.createElement("span");l.className="key",l.textContent=TS[i]??"";const h=document.createElement("span");h.className="name",h.textContent=t.name,s.append(r,l,h),s.addEventListener("pointerdown",f=>{f.preventDefault(),this.onSelectSlot?.(i)}),this.hotbar.appendChild(s),this.slots.push(s)})}setSelected(e){this.slots.forEach((t,i)=>t.classList.toggle("sel",i===e))}setStatus(e){e!==this.lastStatus&&(this.status.textContent=e,this.lastStatus=e)}setClock(e,t){this.clock.textContent=e;const i=document.getElementById("time-label");if(i&&(i.textContent=e),t!==void 0&&!this.dragging)for(const s of this.timeSliders)s.value=t.toFixed(2)}setDebug(e){e!==this.lastDebug&&(this.debug.textContent=e,this.lastDebug=e)}showError(e){this.errorEl&&(this.errorEl.textContent=e,this.errorEl.hidden=!1)}say(e,t=1800){this.toast.textContent=e,this.toast.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toast.classList.remove("show"),t)}}const TS=["1","2","3","4","5","6","7","8","9","0","-","=","[","]","\\"],_h=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","BracketLeft","BracketRight","Backslash"];function Gu(n){if(/^\d+$/.test(n))return Number(n)>>>0;let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function bS(n){const e=(Date.now()-n)/1e3;return e<90?"just now":e<5400?`${Math.round(e/60)} min ago`:e<172800?`${Math.round(e/3600)} h ago`:`${Math.round(e/86400)} d ago`}class CS{constructor(e){if(this.layer=e,this.stickEl=document.getElementById("stick"),this.thumbEl=document.getElementById("stick-thumb"),this.enabled=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,!this.enabled)return;document.body.classList.add("touch"),e.addEventListener("pointerdown",s=>{s.target.closest("button, .slot")||(s.preventDefault(),e.setPointerCapture(s.pointerId),s.clientX<window.innerWidth*.45&&this.stickId<0?(this.stickId=s.pointerId,this.stickOrigin=[s.clientX,s.clientY],this.stickEl.style.left=`${s.clientX-60}px`,this.stickEl.style.top=`${s.clientY-60}px`,this.stickEl.classList.add("active"),this.thumbEl.style.transform="translate(0,0)"):this.lookId<0&&(this.lookId=s.pointerId,this.lookLast=[s.clientX,s.clientY]))}),e.addEventListener("pointermove",s=>{if(s.pointerId===this.stickId){const r=s.clientX-this.stickOrigin[0],a=s.clientY-this.stickOrigin[1],o=50,c=Math.hypot(r,a),l=c>o?o/c:1;this.moveX=r*l/o,this.moveY=-(a*l)/o,this.thumbEl.style.transform=`translate(${r*l}px, ${a*l}px)`}else s.pointerId===this.lookId&&(this.lookDX+=s.clientX-this.lookLast[0],this.lookDY+=s.clientY-this.lookLast[1],this.lookLast=[s.clientX,s.clientY])});const t=s=>{s.pointerId===this.stickId?(this.stickId=-1,this.moveX=0,this.moveY=0,this.stickEl.classList.remove("active")):s.pointerId===this.lookId&&(this.lookId=-1)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t);const i=(s,r)=>{const a=document.getElementById(s);a.addEventListener("pointerdown",c=>{c.preventDefault(),a.setPointerCapture(c.pointerId),r(!0),a.classList.add("down"),this.taps.add(s)});const o=()=>{r(!1),s==="tb-duck"&&this.duckLit||a.classList.remove("down")};a.addEventListener("pointerup",o),a.addEventListener("pointercancel",o)};i("tb-jump",s=>this.jump=s),i("tb-duck",s=>this.duck=s),i("tb-dig",s=>this.dig=s),i("tb-add",s=>this.add=s),i("tb-smooth",s=>this.smooth=s),i("tb-paint",s=>this.paint=s);for(const s of["tb-fly","tb-size-down","tb-size-up","tb-shape","tb-snap","tb-menu","tb-undo"])document.getElementById(s)?.addEventListener("pointerdown",a=>{a.preventDefault(),this.taps.add(s)})}enabled=!1;moveX=0;moveY=0;lookDX=0;lookDY=0;jump=!1;dig=!1;add=!1;smooth=!1;paint=!1;duck=!1;duckLit=!1;taps=new Set;stickId=-1;lookId=-1;stickOrigin=[0,0];lookLast=[0,0];stickEl;thumbEl;tapped(e){return this.taps.has(e)}setDuckLit(e){if(e===this.duckLit)return;this.duckLit=e;const t=document.getElementById("tb-duck");t&&!this.duck&&t.classList.toggle("down",e)}get heldOp(){return this.add?"add":this.smooth?"smooth":this.paint?"paint":null}digLabel="dig";setDig(e){if(e===this.digLabel)return;this.digLabel=e;const t=document.getElementById("tb-dig");t&&(t.textContent=e)}setFly(e){const t=document.getElementById("tb-duck");t&&(t.textContent=e?"down":"duck");const i=document.getElementById("tb-jump");i&&(i.textContent=e?"up":"jump");const s=document.getElementById("tb-fly");s&&(s.textContent=e?"walk":"fly")}flush(){this.lookDX=0,this.lookDY=0,this.taps.clear()}}const pa="splinecraft.v1.";function DS(n){try{const e=localStorage.getItem(pa+"world."+n);return e?yv(e):[]}catch{return[]}}function wh(n){try{localStorage.removeItem(pa+"world."+n)}catch{}}function Hu(){try{const n=localStorage.getItem(pa+"settings");return n?JSON.parse(n):{}}catch{return{}}}function bn(n){try{localStorage.setItem(pa+"settings",JSON.stringify({...Hu(),...n}))}catch{}}const Vu=4096;function ro(n,e,t,i){const s=he+1,r=new Int16Array(s*s*s),a=new Uint8Array(s*s*s),o=new Uint8Array(s*s*s),c=new Uint32Array(s*s*s),l=new Uint8Array(s*s*s);let h=!1,f=!1,d=0;for(let u=0;u<s;u++)for(let g=0;g<s;g++)for(let v=0;v<s;v++,d++){const m=e*he+u,p=t*he+g,A=i*he+v;if(!n.inBounds(m,p,A))continue;const x=n.index(m,p,A);r[d]=Math.round(Math.max(-nt,Math.min(nt,n.density[x]))*Vu),a[d]=n.material[x],o[d]=n.hard[x],c[d]=n.sub[x],c[d]!==0&&(h=!0),l[d]=n.water[x],l[d]!==0&&(f=!0)}return{cx:e,cy:t,cz:i,n:s,density:r,material:a,hard:o,sub:h?c:null,water:f?l:null}}function Eh(n,e){const t=e.n;let i=0;for(let s=0;s<t;s++)for(let r=0;r<t;r++)for(let a=0;a<t;a++,i++){const o=e.cx*he+s,c=e.cy*he+r,l=e.cz*he+a;if(!n.inBounds(o,c,l))continue;const h=n.index(o,c,l);n.density[h]=e.density[i]/Vu,n.material[h]=e.material[i],n.hard[h]=e.hard[i],n.sub[h]=e.sub?e.sub[i]:0,e.water!==void 0&&(n.water[h]=e.water?e.water[i]:0)}}function fn(n,e,t,i){const s=[],r=o=>Math.max(0,Math.floor((o-1)/he)),a=(o,c)=>Math.min(c-1,Math.floor(o/he));for(let o=r(n.x0);o<=a(n.x1,e);o++)for(let c=r(n.y0);c<=a(n.y1,t);c++)for(let l=r(n.z0);l<=a(n.z1,i);l++)s.push([o,c,l]);return s}const Ns=7,Fs=8,Or=16,kr=20,qt=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],ao=[1,0,3,2,5,4],ss=4,Th=3e5;class RS{constructor(e){this.field=e,this.N=e.nx*e.ny*e.nz,this.parent=new Uint8Array(this.N*2),this.sx=e.ny*e.nz,this.sy=e.nz}parent;N;sx;sy;xyz(e){const t=this.field,i=e<this.N?e:e-this.N;return[Math.floor(i/this.sx),Math.floor(i/this.sy)%t.ny,i%t.nz]}solid(e){return e<this.N?this.field.density[e]>0:ht(this.field.hard[e-this.N])}isRoot(e){return e>=this.N&&this.field.hard[e-this.N]===Ms}cellIn(e,t,i){const s=this.field;return e>=0&&t>=0&&i>=0&&e<s.nx-1&&t<s.ny-1&&i<s.nz-1}cornerIn(e,t,i){const s=this.field;return e>=0&&t>=0&&i>=0&&e<s.nx&&t<s.ny&&i<s.nz}neighbours(e,t){const[i,s,r]=this.xyz(e);if(e<this.N){for(let a=0;a<6;a++){const o=i+qt[a][0],c=s+qt[a][1],l=r+qt[a][2];this.cornerIn(o,c,l)&&t(e+qt[a][0]*this.sx+qt[a][1]*this.sy+qt[a][2],ao[a]+1)}for(let a=0;a<8;a++){const o=a&1,c=a>>1&1,l=a>>2&1,h=i-o,f=s-c,d=r-l;this.cellIn(h,f,d)&&t(this.N+this.field.index(h,f,d),Fs+a)}for(let a=0;a<4;a++){const o=a&1,c=a>>1&1,l=i-o,h=s+1,f=r-c;this.cellIn(l,h,f)&&t(this.N+this.field.index(l,h,f),Or+a)}}else{for(let a=0;a<6;a++){const o=i+qt[a][0],c=s+qt[a][1],l=r+qt[a][2];this.cellIn(o,c,l)&&t(e+qt[a][0]*this.sx+qt[a][1]*this.sy+qt[a][2],ao[a]+1)}for(let a=0;a<8;a++){const o=a&1,c=a>>1&1,l=a>>2&1;t(this.field.index(i+o,s+c,r+l),Fs+a)}if(s>0)for(let a=0;a<4;a++){const o=a&1,c=a>>1&1;t(this.field.index(i+o,s-1,r+c),Or+a)}}}parentOf(e){const t=this.parent[e];if(t===0||t===Ns||t===kr)return-1;const[i,s,r]=this.xyz(e);if(t<Fs){const h=t-1;return e+qt[h][0]*this.sx+qt[h][1]*this.sy+qt[h][2]}if(t>=Or){const h=t-Or,f=h&1,d=h>>1&1;return e<this.N?this.N+this.field.index(i-f,s+1,r-d):this.field.index(i+f,s-1,r+d)}const a=t-Fs,o=a&1,c=a>>1&1,l=a>>2&1;return e<this.N?this.N+this.field.index(i-o,s-c,r-l):this.field.index(i+o,s+c,r+l)}build(){const e=this.field,t=this.parent,i=e.hard;t.fill(0);const s=[];for(let r=0;r<this.N;r++)i[r]===Ms&&this.isRoot(this.N+r)&&(t[this.N+r]=Ns,s.push(this.N+r));this.grow(s)}grow(e){const t=this.parent;let i=0;for(;i<e.length;){const s=e[i++];this.neighbours(s,(r,a)=>{t[r]===0&&this.solid(r)&&(t[r]=a,e.push(r))}),i>65536&&i*2>e.length&&(e=e.slice(i),i=0)}}afterEdit(e,t=Th){const i=this.field,s=this.parent;let r=0;const a=Math.max(0,e.x0-1),o=Math.max(0,e.y0-1),c=Math.max(0,e.z0-1),l=Math.min(i.nx-1,e.x1+1),h=Math.min(i.ny-1,e.y1+1),f=Math.min(i.nz-1,e.z1+1),d=[],u=[],g=T=>{if(!this.solid(T)){s[T]!==0&&(s[T]=0,d.push(T));return}s[T]===Ns&&!this.isRoot(T)?(s[T]=0,d.push(T),u.push(T)):s[T]===0&&u.push(T)};for(let T=a;T<=l;T++)for(let M=o;M<=h;M++)for(let S=c;S<=f;S++){const C=i.index(T,M,S);g(C),this.cellIn(T,M,S)&&g(this.N+C)}const v=[];let m=0;const p=d.slice();for(;m<p.length;){const T=p[m++];this.neighbours(T,M=>{s[M]===0||s[M]===Ns||s[M]===kr||!this.solid(M)||this.parentOf(M)!==T||(s[M]=0,v.push(M),p.push(M))})}const A=u.concat(v),x=[];for(const T of A)s[T]===0&&this.solid(T)&&this.isRoot(T)&&(s[T]=Ns,x.push(T));for(const T of A)s[T]!==0||!this.solid(T)||this.neighbours(T,(M,S)=>{s[T]!==0||!this.solid(M)||s[M]===0||(s[T]=this.reverse(T,M,S),x.push(T))});this.grow(x);const y=[];let E=null;const _=new Set,w=T=>{const{corners:M,cells:S}=this.component(T,_);let C=1/0,I=1/0,L=1/0,z=-1/0,G=-1/0,B=-1/0;for(const[N,X,J]of M)C=Math.min(C,N),I=Math.min(I,X),L=Math.min(L,J),z=Math.max(z,N),G=Math.max(G,X),B=Math.max(B,J);for(const[N,X,J]of S)C=Math.min(C,N),I=Math.min(I,X),L=Math.min(L,J),z=Math.max(z,N+1),G=Math.max(G,X+1),B=Math.max(B,J+1);const U={x0:Math.max(0,C-1),y0:Math.max(0,I-1),z0:Math.max(0,L-1),x1:Math.min(i.nx-1,z+1),y1:Math.min(i.ny-1,G+1),z1:Math.min(i.nz-1,B+1)};if(E=E?{x0:Math.min(E.x0,U.x0),y0:Math.min(E.y0,U.y0),z0:Math.min(E.z0,U.z0),x1:Math.max(E.x1,U.x1),y1:Math.max(E.y1,U.y1),z1:Math.max(E.z1,U.z1)}:U,S.length===0&&M.length<=Qr){for(const[N,X,J]of M)i.density[i.index(N,X,J)]=-nt;return}if(M.length+S.length>t){this.hold(M,S),r++;return}y.push(sa(i,M,S,C-1,I-1,L-1,z-C+3,G-I+3,B-L+3))};for(const T of A)s[T]===0&&this.solid(T)&&!_.has(T)&&w(T);if(E){const T=E,M=Math.max(0,T.x0-ss),S=Math.max(0,T.y0-ss),C=Math.max(0,T.z0-ss),I=Math.min(i.nx-1,T.x1+ss),L=Math.min(i.ny-1,T.y1+ss),z=Math.min(i.nz-1,T.z1+ss);for(let G=M;G<=I;G++)for(let B=S;B<=L;B++)for(let U=C;U<=z;U++){const N=i.index(G,B,U);s[N]===0&&this.solid(N)&&!_.has(N)&&w(N);const X=this.N+N;this.cellIn(G,B,U)&&s[X]===0&&this.solid(X)&&!_.has(X)&&w(X)}}return{fragments:y,changed:E,held:r}}hold(e,t){const i=this.field,s=this.parent;for(const[r,a,o]of e)s[i.index(r,a,o)]=kr;for(const[r,a,o]of t)s[this.N+i.index(r,a,o)]=kr}reverse(e,t,i){return i<Fs?ao[i-1]+1:i}component(e,t){const i=this.parent,s=[],r=[],a=[e];for(t.add(e);a.length;){const o=a.pop();(o<this.N?s:r).push(this.xyz(o)),this.neighbours(o,c=>{i[c]!==0||!this.solid(c)||t.has(c)||(t.add(c),a.push(c))})}return{corners:s,cells:r}}dropLoose(e=Th){const t=this.field,i=this.parent,s=new Set,r=[];let a=null,o=0;for(let c=0;c<this.N*2;c++){if(i[c]!==0||!this.solid(c)||s.has(c))continue;const{corners:l,cells:h}=this.component(c,s);if(h.length===0&&l.length<=Qr){for(const[A,x,y]of l)t.density[t.index(A,x,y)]=-nt;continue}if(l.length+h.length>e){this.hold(l,h),o++;continue}let f=1/0,d=1/0,u=1/0,g=-1/0,v=-1/0,m=-1/0;for(const[A,x,y]of l)f=Math.min(f,A),d=Math.min(d,x),u=Math.min(u,y),g=Math.max(g,A),v=Math.max(v,x),m=Math.max(m,y);for(const[A,x,y]of h)f=Math.min(f,A),d=Math.min(d,x),u=Math.min(u,y),g=Math.max(g,A+1),v=Math.max(v,x+1),m=Math.max(m,y+1);const p={x0:Math.max(0,f-1),y0:Math.max(0,d-1),z0:Math.max(0,u-1),x1:Math.min(t.nx-1,g+1),y1:Math.min(t.ny-1,v+1),z1:Math.min(t.nz-1,m+1)};a=a?{x0:Math.min(a.x0,p.x0),y0:Math.min(a.y0,p.y0),z0:Math.min(a.z0,p.z0),x1:Math.max(a.x1,p.x1),y1:Math.max(a.y1,p.y1),z1:Math.max(a.z1,p.z1)}:p,r.push(sa(t,l,h,f-1,d-1,u-1,g-f+3,v-d+3,m-u+3))}return{fragments:r,changed:a,held:o}}pruneSpecks(){const e=this.field,t=e.density,i=this.parent,s=new Set;let r=0;for(let a=0;a<this.N;a++){if(t[a]<=0||i[a]!==0||s.has(a))continue;const{corners:o,cells:c}=this.component(a,s);if(!(c.length||o.length>Qr)){for(const[l,h,f]of o)t[e.index(l,h,f)]=-nt;r+=o.length}}return r}countUnsupported(){const e=this.parent;let t=0;for(let i=0;i<this.N*2;i++)e[i]===0&&this.solid(i)&&t++;return t}}const IS=600;class Uc{cfg;field;gi;renderer;pool;bootLog="";world;input;touch;hud;body;edits;quality;time;timeRate=1/90;timePaused=!1;sun;brush={shape:"cube",sizeIndex:2,op:"add",matIndex:0,snap:!0};chunks=new Map;lightDirty=new Set;lightRR=0;giDirty=!1;lastGiUpload=0;lastLod=0;lastEdit=0;saveTimer=0;dirtySlabs=new Set;undoStack=[];fps=0;frames=0;fpsT=0;lastFrame=0;lastHash=0;anims=[];waterDirty=!1;lastWaterBuild=0;floods=[];handEmpty=!1;crouch=!1;crouchLatch=!1;eye=ci;foliage=1;falling=[];fallSpeed=7;slosh=0;editMs=bh;lights=new Map;support;nextFragId=1;opts;lightSweeps=0;ready=!1;hit=null;hitBody=null;pickTarget=null;primeAim=!1;animals=[];regrowth=null;sand;sandOn=!0;sandClock=0;snow;snowOn=!0;snowClock=0;snowSeconds=0;playSeconds=0;animalsOn=!0;animalRng=Jo(1);nextAnimalId=1;animalsDirty=!1;lastAnimalSave=0;constructor(e,t,i,s,r,a,o,c,l){this.pool=o,this.world=l,this.opts=t,this.cfg=s,this.field=i,this.edits=r,this.hud=a,this.quality=t.quality,this.foliage=t.foliage??(this.touchEnabledGuess()?.5:1),this.fallSpeed=t.fall??7,this.editMs=Math.max(60,Math.min(2e3,t.edit??bh)),this.time=t.time??10.5,this.sun=ql(this.time),this.gi=new gv(i),this.support=new RS(i),this.touch=new CS(document.getElementById("touch"));const h=this.touch.enabled||/Mobi|Android/i.test(navigator.userAgent);this.renderer=new AS(e,i,this.gi,s.seaLevel,{textures:c,shadowMapSize:t.test||h?2048:4096,antialias:!t.test,cheapGi:t.cheapGi??h,maxPixelRatio:h?1.5:2,post:t.post??(t.quality==="low"?1:2),giMode:t.giMode??"sh",giDiv:t.giDiv??(h?2:1),scatterDensity:1,volumetricSteps:t.volumetric===!1||t.quality==="low"?0:h?8:16,caustics:t.caustic!==!1,iceDebug:t.iceDebug??0,reflection:!h,variant:t.shader}),this.renderer.onShaderError=u=>this.hud.showError(u),window.addEventListener("error",u=>this.hud.showError("error: "+(u.message??"").slice(0,160))),window.addEventListener("unhandledrejection",u=>this.hud.showError("rejection: "+String(u.reason).slice(0,160))),this.input=new wS(e);const f=i.sizeX/2,d=i.sizeZ/2;if(this.body=yu(f,ys(i,f,d)+.2,d),this.input.yaw=Math.PI*.25,this.touch.setFly(!1),t.view&&t.view.length>=5){const u=t.view;this.body.pos[0]=u[0],this.body.pos[1]=u[1],this.body.pos[2]=u[2],this.input.yaw=u[3],this.input.pitch=u[4],u.length>=6&&(this.time=u[5],this.timePaused=!0),this.body.fly=!0}for(let u=0;u<s.chunksX;u++)for(let g=0;g<s.chunksY;g++)for(let v=0;v<s.chunksZ;v++)this.chunks.set(Ct(u,g,v),{level:-1,wanted:0,inflight:!1,dirty:!1,triangles:0,version:0,scatter:0,wantedScatter:0,nextBatch:null});this.hud.buildHotbar(this.renderer.textures),this.renderer.scatter.setFade(ra-he*R*.9,8),this.hud.setSelected(0),this.hud.onFall=u=>{this.fallSpeed=u,bn({fall:u}),this.hud.say(`fall speed ${u} m/s`)},this.hud.onEditMs=u=>{this.editMs=Math.max(60,Math.min(2e3,u)),bn({edit:this.editMs})},this.hud.onFoliage=u=>{this.foliage=u,bn({foliage:u}),this.updateLod(!1),this.hud.say(`foliage ×${u}`)},this.animalsOn=t.animals??!0,this.sandOn=t.sand??!0,this.sand=new Hv(i,s.seaLevel),this.snowOn=t.snow??!0,this.snow=new fx(i),window.addEventListener("pagehide",()=>this.flushNow()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&this.flushNow()}),this.hud.onAnimals=u=>{this.animalsOn=u,bn({animals:u}),u||this.renderer.clearAnimals(),this.hud.say(u?"animals on":"animals off")},this.hud.onSand=u=>{this.sandOn=u,bn({sand:u}),u||this.sand.clear(),this.hud.say(u?"sand slumps":"sand holds")},this.hud.onSnow=u=>{this.snowOn=u,bn({snow:u}),u||this.snow.clear(),this.hud.say(u?"snow breaks":"snow holds")},this.hud.onQuality=u=>{this.quality=u,bn({quality:u}),this.lastLod=0,this.renderer.setPost(u==="low"?1:2)},this.hud.onResetEdits=()=>{wh(this.cfg.seed),hh(this.cfg.seed).then(()=>location.reload())},this.hud.onNewWorld=(u,g)=>{bn({seed:u}),location.href=location.pathname+"?seed="+u+(g?"&chunks="+g:"")},this.hud.onLoadWorld=u=>{if(u===this.cfg.seed){this.resume();return}bn({seed:u}),location.href=location.pathname+"?seed="+u},this.hud.onRenameWorld=(u,g)=>{qx(u,g).then(()=>this.refreshWorlds()),u===this.cfg.seed&&this.world&&(this.world.name=g)},this.hud.onDeleteWorld=u=>{if(u===this.cfg.seed){this.hud.onResetEdits?.();return}hh(u).then(()=>this.refreshWorlds())},this.hud.onResume=()=>this.resume(),this.hud.onMenu=()=>{document.pointerLockElement&&document.exitPointerLock(),this.showMenu()},this.hud.onCopyLink=()=>{const u=this.shareLink();navigator.clipboard?.writeText(u).then(()=>this.hud.say("link copied"),()=>this.hud.say(u,6e3))},this.hud.onTime=u=>{this.time=u,this.timePaused=!0},this.hud.onTimeFlow=()=>{this.timePaused=!this.timePaused,this.hud.say(this.timePaused?"time paused":"time flowing")},this.hud.onSelectSlot=u=>this.selectSlot(u),this.renderer.setHandItem(pn[0].id),e.addEventListener("click",()=>{!this.hud.overlayVisible&&!this.input.freeMouse&&this.input.requestLock()}),document.addEventListener("pointerlockchange",()=>{!this.input.locked&&!t.test&&!this.touch.enabled&&!this.input.freeMouse&&this.showMenu()}),window.addEventListener("resize",()=>this.renderer.resize())}touchEnabledGuess(){return"ontouchstart"in window||/Mobi|Android/i.test(navigator.userAgent)}static async create(e,t,i){const s=t.chunks??Hl.chunksX,r={...Hl,seed:t.seed,chunksX:s,chunksZ:s},a=new _S(t.test?2:Math.max(1,Math.min(6,(navigator.hardwareConcurrency||4)-1))),o=performance.now(),c=[],l=w=>c.push(`${w} ${(performance.now()-o).toFixed(0)}`);i.setLoading(.02,"shaping terrain");const h=a.textures(Ky),f=Yx(r.seed,s),d=Vx(r.seed),u=new ha(r.chunksX*he+1,r.chunksY*he+1,r.chunksZ*he+1),g=r.chunksX*r.chunksY*r.chunksZ;let v=0;const m=he+1,p=[];for(let w=0;w<r.chunksX;w++)for(let T=0;T<r.chunksY;T++)for(let M=0;M<r.chunksZ;M++)p.push(a.gen(w,T,M,r,T*8+Math.abs(w-r.chunksX/2)+Math.abs(M-r.chunksZ/2)).then(S=>{for(let C=0;C<m;C++)for(let I=0;I<m;I++){const L=(C*m+I)*m,z=u.index(w*he+C,T*he+I,M*he);u.density.set(S.density.subarray(L,L+m),z),u.material.set(S.material.subarray(L,L+m),z)}v++,((v&7)===0||v===g)&&i.setLoading(.02+.28*(v/g),`shaping terrain · ${v} / ${g}`)}));await Promise.all(p),l("terrain"),i.setLoading(.3,"planting trees"),await si(),new Wl(r).plantTrees(u),l("trees"),Xy(u,r.seaLevel),l("water");const A=Zy(await h),x=await f;l("textures"),i.setLoading(.35,"loading your world"),await si();const y=await d;for(const w of y)Eh(u,w);zv(u),fv(u);for(const w of y)w.water===void 0&&Yy(u,{x0:w.cx*he,y0:w.cy*he,z0:w.cz*he,x1:w.cx*he+he,y1:w.cy*he+he,z1:w.cz*he+he},r.seaLevel);const E=[];if(y.length===0){const w=DS(r.seed);if(w.length){i.setLoading(.4,`converting ${w.length} old edits`),await si();const T=new Set;for(let S=0;S<w.length;S++){const C=ks(u,w[S]);for(const[I,L,z]of fn(C,r.chunksX,r.chunksY,r.chunksZ))T.add(Ct(I,L,z));(S&31)===31&&(i.setLoading(.4+.05*(S/w.length),`converting ${S+1} / ${w.length} old edits`),await si())}const M=[];for(const S of T){const[C,I,L]=zs(S);M.push(ro(u,C,I,L))}await lh(r.seed,M),wh(r.seed)}}i.setLoading(.45,"painting materials"),await si(),l("slabs");const _=new Uc(e,t,u,r,E,i,a,A,x);_.renderer.water.rebuild(u),_.seedAnimals(),_.resumeBodies(),_.regrowth=new Nx(new Wl(r),u.sizeX,u.sizeZ);try{navigator.storage?.persist?.()}catch{}return l("renderer"),i.setLoading(.6,"finding what stands on what"),await si(),_.support.build(),_.settleLoose(),l("support"),i.setLoading(.7,"lighting the world"),await si(),_.injectAll(),_.renderer.giTex.upload(),_.renderer.giUploaded(),_.renderer.setSun(_.sun),l("light"),i.setLoading(.8,"meshing chunks"),await si(),_.updateLod(!0),l("lod"),_.bootLog=c.join(" · "),_}resume(){this.hud.hideOverlay(),!this.opts.test&&!this.touch.enabled&&this.input.requestLock()}showMenu(){this.hud.showOverlay(this.cfg.seed,this.quality,this.foliage,this.fallSpeed,this.animalsOn,this.sandOn,this.editMs,this.snowOn),this.refreshWorlds()}async refreshWorlds(){const e=await Wx();this.world&&!e.some(t=>t.id===this.world.id)&&e.unshift(this.world),this.hud.renderWorlds(e,this.cfg.seed)}stepSand(e){if(!this.sandOn||!this.sand.pending||(this.sandClock+=Math.min(e,.1),this.sandClock<kv))return;this.sandClock=0;const t=this.sand.step();if(!t)return;const i=this.support.afterEdit(t);for(const r of i.fragments)this.launch(r);const s=this.refresh(i.changed?Tn(t,i.changed):t,!0);for(const[r,a,o]of fn(s,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Ct(r,a,o));this.scheduleSave()}stepSnow(e){if(!this.snowOn||!this.snow.pending)return;const t=Math.min(e,.1);this.snowClock+=t,this.snowSeconds+=t,!(this.snowClock<lx)&&(this.snowClock=0,this.afterSnow(this.snow.step(this.snowSeconds)))}afterSnow(e){for(const s of e.fragments)this.launch(s);if(!e.changed)return;const t=this.support.afterEdit(e.changed);for(const s of t.fragments)this.launch(s);this.sandOn&&this.sand.wake(e.changed);const i=this.refresh(t.changed?Tn(e.changed,t.changed):e.changed,!0);for(const[s,r,a]of fn(i,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Ct(s,r,a));this.scheduleSave(),e.fragments.length&&this.hud.say(e.fragments.length===1?"a cornice breaks":`${e.fragments.length} cornices break`)}settleSnow(e=200){const t=this.snow.settle(e,this.snowSeconds);return this.snowSeconds+=e*sc,this.afterSnow(t),t.fragments.length}settleSand(e=600){let t=0,i=null;for(;t<e&&this.sand.pending;){t++;const s=this.sand.step();s&&(i=i?Tn(i,s):s)}if(i){const s=this.support.afterEdit(i);for(const a of s.fragments)this.launch(a);const r=this.refresh(s.changed?Tn(i,s.changed):i,!0);for(const[a,o,c]of fn(r,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Ct(a,o,c));this.scheduleSave()}return t}stepRegrowth(e){if(!this.regrowth)return;this.playSeconds+=Math.min(e,.1);const t=this.regrowth.step(this.field,this.playSeconds,this.body.pos,this.animalRng);for(const i of t){const s=this.support.afterEdit(i);for(const a of s.fragments)this.launch(a);this.sandOn&&this.sand.wake(i),this.snowOn&&this.snow.wake(i);const r=this.refresh(s.changed?Tn(i,s.changed):i,!0);for(const[a,o,c]of fn(r,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Ct(a,o,c));this.scheduleSave()}}seedAnimals(){this.animalRng=Jo((this.cfg.seed^2577)>>>0);const e=this.world?.animals,t=e?[...e]:[],i=this.cfg.chunksX*this.cfg.chunksZ,s=o=>t.some(c=>c.kind===o);let r=!1;s("goat")||(t.push(...rh(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(2,Math.round(i/8)),this.animalRng,[xs,vs])),r=!0),s("penguin")||(t.push(...Dx(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(3,Math.round(i/10)),this.animalRng,[Ks,Bi])),r=!0),s("fish")||(t.push(...Rx(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(5,Math.round(i/6)),this.animalRng)),r=!0),s("cat")||(t.push(...rh(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(1,Math.round(i/32)),this.animalRng,[xs,vs],"cat")),r=!0),this.animals=t.map(o=>Ax(this.field,o,this.nextAnimalId++)),r&&(this.animalsDirty=!0);const a=[["goat",_c],["penguin",wc],["fish",Ec],["cat",Tc]];for(const[o,c]of a)for(let l=0;l<mx;l++)this.pool.skin(o,l,c).then(h=>this.renderer.setSkin(o,l,h))}stepAnimals(e){if(!this.animalsOn||!this.animals.length)return;const t=this.animals.length;bx(this.field,this.animals,Math.min(e,.05),this.body.pos,this.animalRng);for(const s of this.animals)this.renderer.placeAnimal(s.id,s.kind,wx(s),s.body.pos,s.yaw,s.pitch);t&&(this.animalsDirty=!0);const i=this.lastNow;if(this.animalsDirty&&i-this.lastAnimalSave>8e3){this.lastAnimalSave=i,this.animalsDirty=!1;const s=this.animals.map(sh);this.world&&(this.world.animals=s),ch(this.cfg.seed,s)}}pick(e){if(e.kind==="animal"){const s=this.animals.find(r=>r.id===e.id)?.kind??"animal";this.animals=this.animals.filter(r=>r.id!==e.id),this.renderer.removeAnimal(e.id),this.animalsDirty=!0,this.hud.say(`${s} removed`),this.pickTarget=null;return}const{c:t,size:i}=this.pickBox(e);this.applyEdit({op:"sub",shape:"cube",size:i,mat:e.mat,x:t[0],y:t[1],z:t[2],pick:!0}),this.hud.say(`${Et[e.mat]?.name??"light"} removed`),this.pickTarget=null}pickBox(e){const[t,i,s]=e.cell,r=[(t+.5)*R,(i+.5)*R,(s+.5)*R];if(!ht(e.mat))return{c:r,size:R};const a=Math.max(R,ni[this.brush.sizeIndex]);return{c:this.brush.snap?[Math.floor(r[0]/a)*a+a/2,Math.floor(r[1]/a)*a+a/2,Math.floor(r[2]/a)*a+a/2]:r,size:a}}selectSlot(e){if(e===this.brush.matIndex&&!this.handEmpty){this.handEmpty=!0,this.hud.setSelected(-1),this.renderer.setHandItem(0),this.hud.say("empty hand");return}this.handEmpty=!1,this.brush.matIndex=e,this.hud.setSelected(e),this.syncShapeToMaterial(),this.renderer.setHandItem(pn[e].id)}syncShapeToMaterial(){Vn(pn[this.brush.matIndex].id)&&(this.brush.shape="cube",this.brush.snap=!0)}injectAll(){const e=he/_t;for(let t=0;t<this.cfg.chunksX;t++)for(let i=0;i<this.cfg.chunksY;i++)for(let s=0;s<this.cfg.chunksZ;s++)Tr(this.field,this.gi,t,i,s,e,this.sun);this.lightSweeps++,this.giDirty=!0}lightTexels(e,t,i){const s=this.gi,r=s.texel,a=he/_t,o=e/r-.5,c=t/r-.5,l=i/r-.5,h=Math.floor(o),f=Math.floor(c),d=Math.floor(l),u=o-h,g=c-f,v=l-d,m=[];for(let p=0;p<=1;p++)for(let A=0;A<=1;A++)for(let x=0;x<=1;x++){const y=h+p,E=f+A,_=d+x;if(y<0||E<0||_<0||y>=s.sx||E>=s.sy||_>=s.sz)continue;const w=(p?u:1-u)*(A?g:1-g)*(x?v:1-v);w<.001||m.push({o:s.index(y,E,_),chunk:Ct(Math.floor(y/a),Math.floor(E/a),Math.floor(_/a)),w})}return m}extraLights(e){let t;for(const i of this.lights.values())if(i.chunks.has(e))for(const s of this.lightTexels(i.x,i.y,i.z)){if(s.chunk!==e)continue;t??=new Map;const r=t.get(s.o);r?(r[0]+=i.r*s.w,r[1]+=i.g*s.w,r[2]+=i.b*s.w,r[3]=Math.max(r[3],i.kind)):t.set(s.o,[i.r*s.w,i.g*s.w,i.b*s.w,i.kind])}return t}setLight(e,t,i,s,r,a,o,c){const l=this.lights.get(e);if(l&&Math.hypot(l.x-t,l.y-i,l.z-s)<this.gi.texel/6&&l.r===r&&l.kind===c||l&&this.lastNow-l.at<30)return;const h=new Set;for(const d of this.lightTexels(t,i,s))h.add(d.chunk);const f=new Set(h);if(l)for(const d of l.chunks)f.add(d);this.lights.set(e,{x:t,y:i,z:s,r,g:a,b:o,kind:c,chunks:h,at:this.lastNow}),this.relightNow(f)}clearLight(e){const t=this.lights.get(e);t&&(this.lights.delete(e),this.relightNow(t.chunks))}relightNow(e){const t=he/_t;for(const i of e){const[s,r,a]=zs(i);Tr(this.field,this.gi,s,r,a,t,this.sun,this.extraLights(i)),this.lightDirty.delete(i)}this.giDirty=!0}updateLights(){const e=new Set,t=pn[this.brush.matIndex],i=this.renderer.handWorld();if(i&&t.emissive&&!this.handEmpty){const s=.25*(ht(t.id)?$o:1);this.setLight("hand",i.x,i.y,i.z,t.emissive[0]*s,t.emissive[1]*s,t.emissive[2]*s,ht(t.id)?1:0),e.add("hand")}for(const s of this.falling)s.cooking||s.frag.items.forEach((r,a)=>{const o=Et[r.mat];if(!o?.emissive)return;const c=_u(s.frag,r),l=`body:${s.id}:${a}`,h=ht(r.mat)?$o:1;this.setLight(l,c[0],c[1],c[2],o.emissive[0]*h,o.emissive[1]*h,o.emissive[2]*h,ht(r.mat)?1:0),e.add(l)});for(const s of this.lights.keys())e.has(s)||this.clearLight(s)}lightStep(e){this.updateLights();const t=this.opts.test?12:2.5,i=performance.now(),s=he/_t,r=this.cfg.chunksX*this.cfg.chunksY*this.cfg.chunksZ;let a=0;for(const o of this.lightDirty){const[c,l,h]=zs(o);if(Tr(this.field,this.gi,c,l,h,s,this.sun,this.extraLights(o)),this.lightDirty.delete(o),a++,performance.now()-i>t)break}for(;performance.now()-i<t;){const o=this.lightRR,c=Math.floor(o/(this.cfg.chunksY*this.cfg.chunksZ)),l=Math.floor(o/this.cfg.chunksZ)%this.cfg.chunksY,h=o%this.cfg.chunksZ;Tr(this.field,this.gi,c,l,h,s,this.sun),this.lightRR=(o+1)%r,this.lightRR===0&&this.lightSweeps++,a++}a>0&&(this.giDirty=!0),this.giDirty&&e-this.lastGiUpload>(this.opts.test?30:150)&&(this.renderer.giTex.upload(),this.renderer.giUploaded(),this.giDirty=!1,this.lastGiUpload=e)}wantedLevel(e,t,i,s){const r=he*R,a=this.renderer.camera.position,o=Math.hypot((e+.5)*r-a.x,(t+.5)*r-a.y,(i+.5)*r-a.z);return Jx(o,s,this.quality)}updateLod(e){const t=()=>{for(const[i,s]of this.chunks){const[r,a,o]=zs(i),c=this.wantedLevel(r,a,o,s.level),l=this.scatterFor(r,a,o,s.scatter);(c!==s.wanted||l!==s.wantedScatter||e||s.level<0)&&(s.wanted=c,s.wantedScatter=l,(s.level!==c||s.scatter!==l||s.level<0)&&this.requestMesh(r,a,o,e?null:this.curBatch))}};e?t():this.batched(t),this.pool.reprioritize(i=>this.priority(i.cx,i.cy,i.cz))}scatterFor(e,t,i,s){if(this.foliage<=0)return 0;const r=he*R;return Math.hypot((e+.5)*r-this.body.pos[0],(t+.5)*r-this.body.pos[1],(i+.5)*r-this.body.pos[2])<ra+(s>0?Du:0)?this.foliage:0}priority(e,t,i){const s=he*R;return Math.hypot((e+.5)*s-this.body.pos[0],(t+.5)*s-this.body.pos[1],(i+.5)*s-this.body.pos[2])}curBatch=null;batches=new Set;batched(e){const t=this.curBatch,i={pending:0,swaps:[],t0:performance.now(),flushed:!1};this.curBatch=i;try{e()}finally{this.curBatch=t}i.pending>0&&this.batches.add(i)}flushBatch(e){e.flushed=!0,this.batches.delete(e);const t=e.swaps;e.swaps=[];for(const i of t)i()}flushStaleBatches(e){for(const t of this.batches)e-t.t0>IS&&this.flushBatch(t)}requestMesh(e,t,i,s=this.curBatch,r=!1){const a=Ct(e,t,i),o=this.chunks.get(a);if(o.inflight){o.dirty=!0,s&&!s.flushed&&!o.nextBatch&&(s.pending++,o.nextBatch=s);return}s&&!r&&s.pending++,o.inflight=!0,o.dirty=!1;const c=2,l=he+1+2*c,h=this.field.extract(e*he-c,t*he-c,i*he-c,l,l,l),f=o.wanted,d=o.wantedScatter,u=$x(f,this.quality);this.pool.submit({cx:e,cy:t,cz:i,ox:h.ox,oy:h.oy,oz:h.oz,n:l,density:h.density,material:h.material,hard:h.hard,sub:h.sub,levels:f,scatter:d,morphAt:u},this.priority(e,t,i)).then(g=>{const v=()=>{o.inflight=!1,o.level=g.levels,o.scatter=d,o.version++,o.triangles=g.vertexCount/3,this.renderer.setChunk(e,t,i,{positions:g.positions,normals:g.normals,mats:g.mats,bary:g.bary,face:g.face,morph:g.morph,emitters:g.emitters,scatter:g.scatter,vertexCount:g.vertexCount});const m=o.nextBatch;o.nextBatch=null,(o.dirty||o.wanted!==o.level||o.wantedScatter!==o.scatter)&&this.requestMesh(e,t,i,m,m!==null)};if(!s||s.flushed){v();return}s.swaps.push(v),--s.pending<=0&&this.flushBatch(s)})}get pendingMeshes(){let e=0;for(const t of this.chunks.values())(t.inflight||t.level<0)&&e++;return e}applyEdit(e,t=!0){const i=e.op==="add"?Et[e.mat]?.spawn:void 0;if(i){if(!this.animalsOn){this.hud.say("animals are off");return}if(wu(i)){const s=this.field.waterAt(e.x,e.y+.3,e.z)?e.y+.3:this.field.waterAt(e.x,e.y-.3,e.z)?e.y-.3:NaN;if(Number.isNaN(s)){this.hud.say("a fish needs water");return}this.animals.push(rc(this.field,i,e.x,e.z,Math.floor(this.animalRng()*1e9),this.nextAnimalId++,s,this.input.yaw+Math.PI))}else this.animals.push(rc(this.field,i,e.x,e.z,Math.floor(this.animalRng()*1e9),this.nextAnimalId++,void 0,this.input.yaw+Math.PI));this.animalsDirty=!0;return}if(this.undryNear(Gr(e,this.field)),Mv(e)&&!this.opts.test){this.anims.push({e,t0:performance.now(),record:t}),this.stepEdit(e,co(.001));return}if(e.op==="smooth"&&!this.opts.test){const s=t?this.preImages(e):[],r=Gr(e,this.field),a=this.copyDensity(r),o=ks(this.field,e),c=this.copyDensity(r);this.writeDensity(r,a,c,0),this.anims.push({e,t0:performance.now(),record:t,lerp:{b:o,pre:a,post:c,preImages:s}}),this.refresh(o);return}this.finishEdit(e,t)}preImages(e){const t=[];for(const[i,s,r]of fn(Gr(e,this.field),this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))t.push(ro(this.field,i,s,r));return t}copyDensity(e){const t=this.field,i=new Float32Array((e.x1-e.x0+1)*(e.y1-e.y0+1)*(e.z1-e.z0+1));let s=0;for(let r=e.x0;r<=e.x1;r++)for(let a=e.y0;a<=e.y1;a++)for(let o=e.z0;o<=e.z1;o++)i[s++]=t.density[t.index(r,a,o)];return i}writeDensity(e,t,i,s){const r=this.field;let a=0;for(let o=e.x0;o<=e.x1;o++)for(let c=e.y0;c<=e.y1;c++)for(let l=e.z0;l<=e.z1;l++,a++)r.density[r.index(o,c,l)]=t[a]+(i[a]-t[a])*s}refresh(e,t=!1){const{removed:i,plan:s}=Ou(this.field,e,this.cfg.seaLevel);if(i){this.waterDirty=!0,e=Tn(e,i);const r=Math.max(.5,(i.x1-i.x0)*R*.5),a=Math.max(.5,(i.z1-i.z0)*R*.5);this.renderer.water.splash((i.x0+i.x1)*.5*R,(i.z0+i.z1)*.5*R,Math.hypot(r,a),-.02*Math.min(4,Math.hypot(r,a)))}if(s)if(s.cells.length<=6){const r=cc(this.field,s,s.cells.length);r&&(this.waterDirty=!0,e=Tn(e,r))}else this.floods.push(s);return this.batched(()=>{for(const[r,a,o]of Za(e,he,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))if(this.requestMesh(r,a,o),this.lightDirty.add(Ct(r,a,o)),t)for(let c=a-1;c>=0;c--)this.lightDirty.add(Ct(r,c,o))}),e}stepEdit(e,t){this.refresh(ks(this.field,e,t))}finishEdit(e,t){const i=t?this.preImages(e):[],s=ks(this.field,e);this.commitEdit(e,t,i,s)}editLoose(e,t){const i=this.falling.find(r=>r.id===e);if(!i)return;if(t.op==="add"&&Vn(t.mat)){this.hud.say("blocks need solid ground");return}i.blend&&this.undry(i);const s=jv(i.frag,t);this.renderer.removeFragment(e),this.falling=this.falling.filter(r=>r.id!==e);for(const r of s)this.launch(r)}undry(e){const t=e.blend;if(!t)return;nx(this.field,t.box,t.pre),this.refresh(t.box,!1),e.blend=void 0,this.renderer.fadeFragment(e.id,1);const i=e.frag;i.settled=!1,i.rest=0,i.age=0}undryNear(e){for(const t of this.falling){if(!t.blend)continue;const i=t.blend.box;i.x0>e.x1+rs||i.x1<e.x0-rs||i.y0>e.y1+rs||i.y1<e.y0-rs||i.z0>e.z1+rs||i.z1<e.z0-rs||this.undry(t)}}launch(e){const t=this.nextFragId++;this.falling.push({frag:e,id:t}),this.pool.frag(e.nx,e.ny,e.nz,e.density.slice(),e.material.slice(),e.hard.slice(),e.sub.slice(),this.foliage).then(i=>{this.falling.some(s=>s.id===t)&&this.renderer.setFragment(t,i,e.com,e.pos,e.q,e.texOrigin)})}lastBodySave=0;bodiesSaved=!0;stepFalling(e){const t=this.falling.filter(r=>!r.cooking&&!r.blend);if(t.length&&(this.bodiesSaved=!1),!this.bodiesSaved&&this.lastNow-this.lastBodySave>2e3&&(this.lastBodySave=this.lastNow,t.length||(this.bodiesSaved=!0),no(this.cfg.seed,t.map(r=>eh(r.frag)))),!this.falling.length)return;const i=[],s=this.lastNow;for(const r of this.falling){const a=r.frag;if(r.cooking){if(r.cooking.keys.every((f,d)=>{const u=this.chunks.get(f);return u.version>r.cooking.versions[d]&&!u.inflight})){this.renderer.removeFragment(r.id);continue}i.push(r);continue}if(r.blend){const h=Math.min(1,(s-r.blend.t0)/PS),f=h*h*(3-2*h);if(this.renderer.fadeFragment(r.id,h<.55?1:Math.max(.08,1-(h-.55)/.45)),h>=1){if(!r.blend.final){r.blend.final=!0,eo(this.field,a,r.blend.box,r.blend.pre,0,0);const d=$l(this.field,a),u=this.support.afterEdit(d);for(const m of u.fragments)this.launch(m);this.sandOn&&this.sand.wake(u.changed?Tn(d,u.changed):d),this.snowOn&&this.snow.wake(u.changed?Tn(d,u.changed):d);const g=this.refresh(u.changed?Tn(d,u.changed):d,!0),v=Za(g,he,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([m,p,A])=>Ct(m,p,A));r.cooking={keys:v,versions:v.map(m=>this.chunks.get(m).version)};for(const[m,p,A]of fn(g,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Ct(m,p,A));this.scheduleSave()}i.push(r);continue}if(s-r.blend.lastStep>LS){r.blend.lastStep=s;const d=BS*(1-f),u=US*(1-f)+.02;eo(this.field,a,r.blend.box,r.blend.pre,d,u),this.refresh(r.blend.box,!1)}i.push(r);continue}const o=a.pos[1]-a.radius>this.cfg.seaLevel,c=Math.max(1,Math.ceil(e/(1/120)));for(let h=0;h<c&&!a.settled;h++)$v(this.field,a,e/c,this.fallSpeed);if(o&&a.pos[1]-a.radius<=this.cfg.seaLevel&&this.field.waterAt(a.pos[0],this.cfg.seaLevel-R*.5,a.pos[2])&&this.renderer.water.splash(a.pos[0],a.pos[2],Math.max(.6,a.radius),-.05*Math.min(6,a.solid.length/12)),this.renderer.moveFragment(r.id,a.pos,a.q),!a.settled){i.push(r);continue}const l=ex(this.field,a);r.blend={box:l,pre:tx(this.field,l),t0:s,lastStep:-1e9,final:!1},i.push(r)}this.falling=i}commitEdit(e,t,i,s){if(s=this.refresh(s,!0),t){this.edits.push(e),this.undoStack.push(i),this.undoStack.length>24&&this.undoStack.shift();for(const[o,c,l]of fn(s,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Ct(o,c,l));this.scheduleSave()}const r=e.size*.5+R;Math.abs(e.y-this.cfg.seaLevel)<r+.5&&this.field.waterAt(e.x,this.cfg.seaLevel-R*.5,e.z)&&this.renderer.water.splash(e.x,e.z,r,-.05*Math.min(3,e.size));const a=this.support.afterEdit(s);if(a.held&&this.hud.say("too vast to fall: it stands"),this.sandOn&&(this.sand.wake(s),a.changed&&this.sand.wake(a.changed)),this.snowOn&&(this.snow.wake(s),a.changed&&this.snow.wake(a.changed)),a.changed){this.refresh(a.changed,!0);for(const[o,c,l]of fn(a.changed,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Ct(o,c,l));this.scheduleSave()}for(const o of a.fragments)this.launch(o)}brushTarget(e){const t=this.hit;if(!t)return null;const i=this.effectiveSize(e)*.5,s=t.normal;let r;const o=e==="add"&&Vn(pn[this.brush.matIndex].id)||t.hard?.5:.6;if(e==="add")r=[t.point[0]+s[0]*i*o,t.point[1]+s[1]*i*o,t.point[2]+s[2]*i*o];else if(e==="sub"){const l=Math.min(i*.4,.06);r=[t.point[0]-s[0]*l,t.point[1]-s[1]*l,t.point[2]-s[2]*l]}else r=[t.point[0],t.point[1],t.point[2]];if(this.brush.snap&&(e!=="sub"||this.brush.shape!=="sphere")){const l=this.effectiveSize(e);r=[Math.floor(r[0]/l)*l+l/2,Math.floor(r[1]/l)*l+l/2,Math.floor(r[2]/l)*l+l/2]}return r}facingDir(){const e=-Math.sin(this.input.yaw),t=-Math.cos(this.input.yaw);let i=0,s=-1/0;for(let r=0;r<4;r++){const a=e*qr[r][0]+t*qr[r][2];a>s&&(s=a,i=r)}return i}effectiveSize(e){const t=pn[this.brush.matIndex].id;return e==="add"&&Vn(t)&&!ht(t)?.5:ni[this.brush.sizeIndex]}doEdit(e){if(e==="add"&&this.handEmpty)return;const t=this.brushTarget(e);if(!t)return;if(e==="add"&&pn[this.brush.matIndex].spawn&&this.hitBody!==null){this.hud.say("not on a falling thing");return}if(e!=="add"&&this.hit?.hard&&this.hitBody===null){const a=this.hit,o=[a.point[0]-a.normal[0]*.25,a.point[1]-a.normal[1]*.25,a.point[2]-a.normal[2]*.25];if(Hs(this.field,Math.floor(o[0]/R),Math.floor(o[1]/R),Math.floor(o[2]/R))){this.hud.say("the prime anchor holds the world");return}}const i=pn[this.brush.matIndex].id,s=e==="add"&&Vn(i)&&!ht(i),r={op:e,shape:s?"cube":this.brush.shape,size:this.effectiveSize(e),mat:i,x:t[0],y:t[1],z:t[2]};if((r.shape==="ramp"||r.shape==="wall"||r.shape==="roof")&&(r.dir=this.facingDir()),this.hitBody!==null){this.editLoose(this.hitBody,r);return}this.applyEdit(r)}lastNow=0;frame(e){this.lastNow=e;const t=this.lastFrame?(e-this.lastFrame)/1e3:1/60;this.lastFrame=e;const i=Math.min(t,.05),s=this.input,r=this.touch;s.hit("CapsLock")&&!this.opts.test&&!r.enabled&&!this.hud.overlayVisible&&(s.freeMouse=!s.freeMouse,s.freeMouse?(document.pointerLockElement&&document.exitPointerLock(),this.hud.say("free mouse · Caps Lock to look again")):(this.hud.say("mouse look"),s.requestLock()));const a=s.locked||s.freeMouse&&!this.hud.overlayVisible||this.opts.test||r.enabled&&!this.hud.overlayVisible;if(a){for(let B=0;B<_h.length&&B<pn.length;B++)s.hit(_h[B])&&this.selectSlot(B);s.hit("Escape")&&(this.touch.enabled||s.freeMouse)&&this.showMenu(),s.wheel!==0&&(this.brush.sizeIndex=Math.max(0,Math.min(ni.length-1,this.brush.sizeIndex-s.wheel))),s.hit("KeyQ")&&(this.brush.shape=Rh(this.brush.shape)),s.hit("Tab")&&(this.brush.op=oo[(oo.indexOf(this.brush.op)+1)%oo.length],this.hud.say(`tool: ${this.brush.op==="sub"?"remove":this.brush.op}`)),s.down("ArrowLeft")&&(s.yaw+=Ch*i),s.down("ArrowRight")&&(s.yaw-=Ch*i),s.down("ArrowUp")&&(s.pitch=Math.min(1.55,s.pitch+Dh*i)),s.down("ArrowDown")&&(s.pitch=Math.max(-1.55,s.pitch-Dh*i)),s.hit("KeyG")&&(this.brush.snap=!this.brush.snap,this.hud.say(this.brush.snap?"grid snap on":"grid snap off")),s.hit("KeyF")&&(this.body.fly=!this.body.fly,this.touch.setFly(this.body.fly),this.hud.say(this.body.fly?"flying":"walking")),s.hit("KeyP")&&(this.timePaused=!this.timePaused,this.hud.say(this.timePaused?"time paused":"time flowing")),s.hit("Comma")&&(this.time=(this.time-.5+24)%24),s.hit("Period")&&(this.time=(this.time+.5)%24),s.hit("KeyZ")&&this.edits.length&&this.undo()}r.enabled&&a&&(s.yaw-=r.lookDX*.005,s.pitch=Math.max(-1.55,Math.min(1.55,s.pitch-r.lookDY*.005)),r.tapped("tb-fly")&&(this.body.fly=!this.body.fly,r.setFly(this.body.fly),this.hud.say(this.body.fly?"flying":"walking")),r.tapped("tb-size-down")&&(this.brush.sizeIndex=Math.max(0,this.brush.sizeIndex-1)),r.tapped("tb-size-up")&&(this.brush.sizeIndex=Math.min(ni.length-1,this.brush.sizeIndex+1)),r.tapped("tb-shape")&&(this.brush.shape=Rh(this.brush.shape)),r.tapped("tb-snap")&&(this.brush.snap=!this.brush.snap,this.hud.say(this.brush.snap?"grid snap on":"grid snap off")),r.tapped("tb-undo")&&this.edits.length&&this.undo(),r.tapped("tb-menu")&&this.showMenu()),!this.timePaused&&!this.opts.test&&(this.time=(this.time+this.timeRate*i)%24),this.sun=ql(this.time),this.renderer.setSun(this.sun);const o=s.yaw,c=-Math.sin(o),l=-Math.cos(o),h=Math.cos(o),f=-Math.sin(o);let d=0,u=0,g=0;a&&(s.down("KeyW")&&(d+=c,u+=l),s.down("KeyS")&&(d-=c,u-=l),s.down("KeyD")&&(d+=h,u+=f),s.down("KeyA")&&(d-=h,u-=f),r.enabled&&(d+=c*r.moveY+h*r.moveX,u+=l*r.moveY+f*r.moveX),(this.body.fly||this.body.swim)&&((s.down("Space")||r.jump)&&(g+=1),(s.down("ShiftLeft")||s.down("ShiftRight")||s.down("KeyC")||r.duck)&&(g-=1))),a&&!this.body.fly&&!this.body.swim?((s.hit("KeyC")||r.tapped("tb-duck"))&&(this.crouchLatch=!this.crouchLatch),(s.hit("Space")||r.tapped("tb-jump"))&&(this.crouchLatch=!1)):this.crouchLatch=!1,this.crouch=this.crouchLatch,this.body.crouch=this.crouch,r.setDuckLit(this.crouch);const v=Math.max(1,Math.hypot(d,u)),m=s.down("ShiftLeft")||s.down("ShiftRight"),p=this.body.swim,A=this.body.fly?m?40:18:p?m?4.2:2.6:this.crouch?1.8:m?8.5:5.2;Cc(this.field,this.body,{wishX:d/v*A,wishZ:u/v*A,wishY:g*(this.body.fly?m?28:16:p?3:0),jump:a&&!p&&(s.down("Space")||r.jump),dt:i});const x=this.renderer.camera;this.eye+=((this.crouch?Cv:ci)-this.eye)*Math.min(1,i*14),this.slosh+=((this.body.swim?1:0)-this.slosh)*Math.min(1,i*2);const y=this.slosh*Math.sin(e*.0021)*.06,E=this.slosh*Math.sin(e*.0016+1.3)*.02;x.position.set(this.body.pos[0],this.body.pos[1]+this.eye+y,this.body.pos[2]),x.rotation.set(s.pitch,o,E,"YXZ");const _=this.field.waterAt(x.position.x,x.position.y,x.position.z);if(_!==this.renderer.underwater&&this.renderer.setUnderwater(_,this.sun),this.floods.length){const B=[];for(const U of this.floods){U.carry+=qy(U)*i;const N=Math.floor(U.carry);U.carry-=N;const X=cc(this.field,U,N);if(X){this.waterDirty=!0;for(const[J,ae,xe]of fn(X,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Ct(J,ae,xe))}U.done<U.cells.length?B.push(U):this.scheduleSave()}this.floods=B}this.waterDirty&&(e-this.lastWaterBuild>90||!this.floods.length)&&(this.waterDirty=!1,this.lastWaterBuild=e,this.renderer.water.rebuild(this.field));const w=[],T=this.body.pos,M=this.cfg.seaLevel;T[1]<M&&T[1]+ci>M&&this.field.waterAt(T[0],M-R*.5,T[2])&&w.push([T[0],T[2],.42,Math.min(4,Math.hypot(this.body.vel[0],this.body.vel[1],this.body.vel[2]))]),this.stepFalling(i),this.stepAnimals(i),this.stepRegrowth(i),this.stepSand(i),this.stepSnow(i);for(const B of this.falling){const U=B.frag;U.pos[1]-U.radius<M&&U.pos[1]+U.radius>M&&this.field.waterAt(U.pos[0],M-R*.5,U.pos[2])&&w.push([U.pos[0],U.pos[2],Math.max(.4,U.radius*.8),Math.min(6,Math.hypot(U.vel[0],U.vel[1],U.vel[2])*1.5)])}this.renderer.water.setObstacles(w);const S=new k(0,0,-1).applyEuler(x.rotation);this.hit=_v(this.field,[x.position.x,x.position.y,x.position.z],[S.x,S.y,S.z],48),this.hitBody=null;for(const B of this.falling){if(B.cooking)continue;const U=this.hit?this.hit.distance:48,N=B.frag,X=N.pos[0]-x.position.x,J=N.pos[1]-x.position.y,ae=N.pos[2]-x.position.z,xe=X*S.x+J*S.y+ae*S.z;if(xe<-N.radius||xe>U+N.radius)continue;const Be=X-S.x*xe,ze=J-S.y*xe,Pe=ae-S.z*xe;if(Be*Be+ze*ze+Pe*Pe>N.radius*N.radius)continue;const Q=Kv(N,[x.position.x,x.position.y,x.position.z],[S.x,S.y,S.z],U);Q&&(!this.hit||Q.distance<this.hit.distance)&&(this.hit=Q,this.hitBody=B.id)}if(this.pickTarget=null,this.primeAim=!1,this.hit&&this.hit.hard&&this.hitBody===null&&Et[this.hit.material]?.emissive){const B=this.hit.point,U=this.hit.normal,N=[Math.floor((B[0]-U[0]*.02)/R),Math.floor((B[1]-U[1]*.02)/R),Math.floor((B[2]-U[2]*.02)/R)];Hs(this.field,N[0],N[1],N[2])?this.primeAim=!0:this.field.getHard(N[0],N[1],N[2])===this.hit.material&&(this.pickTarget={kind:"light",cell:N,mat:this.hit.material})}if(this.animalsOn){const B=this.hit?this.hit.distance:48;let U=1/0,N=-1;for(const X of this.animals){const J=Ix(X,[x.position.x,x.position.y,x.position.z],[S.x,S.y,S.z],B);J!==null&&J<U&&(U=J,N=X.id)}N>=0&&(this.pickTarget={kind:"animal",id:N},this.hitBody=null)}if(r.setDig(this.pickTarget?"remove":"dig"),this.pickTarget?.kind==="light"){const{c:B,size:U}=this.pickBox(this.pickTarget);this.renderer.setCursor(B[0],B[1],B[2],U*.5,[U*.5,U*.5,U*.5])}else if(this.pickTarget?.kind==="animal"){const B=this.animals.find(U=>U.id===this.pickTarget.id);B&&this.renderer.setCursor(B.body.pos[0],B.body.pos[1]+.45,B.body.pos[2],.55,[.6,.5,.6])}else if(this.hit){const B=s.mouseDown[0]||r.dig?"sub":r.heldOp??this.brush.op,U=this.effectiveSize(B)*.5,N=this.brushTarget(B),X=this.brush.shape;if(X==="sphere"&&U>=.3)this.renderer.setCursor(N[0],N[1],N[2],U,null);else if(X==="slab")this.renderer.setCursor(N[0],N[1]-U+U/3,N[2],U,[U,U/3,U]);else if(X==="wall"){const J=qr[this.facingDir()],ae=Math.min(U*2/3,R)*.5;this.renderer.setCursor(N[0]-J[0]*(U-ae),N[1],N[2]-J[2]*(U-ae),U,[J[0]!==0?ae:U,U,J[2]!==0?ae:U])}else this.renderer.setCursor(N[0],N[1],N[2],U,[U,U,U])}else this.renderer.setCursor(0,0,0,0,null);if(a){const B=e-this.lastEdit>(this.brush.sizeIndex>=2?260:150);this.pickTarget&&(s.mouseClick[0]||s.hit("KeyM")||r.tapped("tb-dig"))?(this.pick(this.pickTarget),this.lastEdit=e):this.pickTarget&&(s.mouseDown[0]||s.down("KeyM")||r.dig)||(s.mouseClick[0]||s.hit("KeyM")||(s.mouseDown[0]||s.down("KeyM")||r.dig)&&B?(this.doEdit("sub"),this.lastEdit=e):s.mouseClick[2]||s.hit("KeyE")||(s.mouseDown[2]||s.down("KeyE"))&&B?(this.doEdit(this.brush.op),this.lastEdit=e):r.heldOp&&B&&(this.doEdit(r.heldOp),this.lastEdit=e))}if(this.anims.length){const B=[];for(const U of this.anims){const N=(e-U.t0)/this.editMs;if(U.lerp){const{b:X,pre:J,post:ae,preImages:xe}=U.lerp,Be=Gr(U.e,this.field);N>=1?(this.writeDensity(Be,J,ae,1),this.commitEdit(U.e,U.record,xe,X)):(this.writeDensity(Be,J,ae,co(N)),this.refresh(X),B.push(U))}else N>=1?this.finishEdit(U.e,U.record):(this.stepEdit(U.e,co(N)),B.push(U))}this.anims=B}this.flushStaleBatches(e),this.lightStep(e),e-this.lastLod>400&&(this.updateLod(!1),this.lastLod=e),this.renderer.render(e/1e3),this.frames++,e-this.fpsT>500&&(this.fps=this.frames*1e3/(e-this.fpsT),this.frames=0,this.fpsT=e);const C=this.brush;this.hud.setStatus(r.enabled?`${this.handEmpty?"empty hand":pn[C.matIndex].name} · ${C.shape} ${ni[C.sizeIndex]<.5?"⅙":ni[C.sizeIndex]} m · ${C.snap?"snap":"free"} · ${this.body.fly?"fly":this.body.swim?"swim":this.crouch?"duck":"walk"}`:`${this.handEmpty?"empty hand":pn[C.matIndex].name} · ${C.shape} ${ni[C.sizeIndex]<.5?"⅙":ni[C.sizeIndex]} m · tool: ${C.op==="sub"?"remove":C.op} · ${C.snap?"snap":"free"} · ${this.body.fly?"fly":this.body.swim?"swim":this.crouch?"duck":"walk"}${this.input.freeMouse?" · free mouse":""}${this.pickTarget?` · LMB removes the ${this.pickTarget.kind==="animal"?this.animals.find(B=>B.id===this.pickTarget.id)?.kind??"animal":Et[this.pickTarget.mat]?.name}`:""}${this.primeAim?" · the prime anchor holds the world":""}`);const I=Math.floor(this.time),L=Math.floor((this.time-I)*60);this.hud.setClock(`${String(I).padStart(2,"0")}:${String(L).padStart(2,"0")}${this.timePaused?" ⏸":""}`,this.time);const z=this.hit,G=z?` · aim ${this.hitBody!==null?"body":z.hard?"block":"field"} ${Et[z.material]?.name??z.material} @${z.distance.toFixed(1)} m`:" · aim none";this.hud.setDebug(`${this.fps.toFixed(0)} fps · ${(this.renderer.triangles/1e3).toFixed(0)}k tris · ${this.renderer.chunkCount} chunks · ${this.renderer.flames.count} flames · ${(this.renderer.scatter.count/1e3).toFixed(1)}k scatter · mesh q ${this.pool.queued} · ${this.renderer.fallingCount} falling · ${this.animals.length} animals · ${this.body.pos.map(B=>B.toFixed(1)).join(", ")}${G}`),e-this.lastHash>1e3&&(this.lastHash=e,this.writeHash()),s.flush(),r.flush(),this.ready=!0}stateString(){const e=this.body.pos;return[e[0],e[1],e[2],this.input.yaw,this.input.pitch,this.time].map(t=>+t.toFixed(2)).join(",")}writeHash(){try{history.replaceState(null,"",location.pathname+location.search+"#v="+this.stateString())}catch{}}shareLink(){const e=new URLSearchParams(location.search);return e.set("seed",String(this.cfg.seed)),e.set("quality",this.quality),location.origin+location.pathname+"?"+e.toString()+"#v="+this.stateString()}scheduleSave(){clearTimeout(this.saveTimer),this.saveTimer=window.setTimeout(()=>void this.saveDirty(),600)}saveFailed=!1;async saveDirty(){if(!this.dirtySlabs.size)return;const e=[];for(const i of this.dirtySlabs){const[s,r,a]=zs(i);e.push(ro(this.field,s,r,a))}this.dirtySlabs.clear();const t=await lh(this.cfg.seed,e);!t&&!this.saveFailed&&(this.saveFailed=!0,this.hud.say("save failed — this browser refused to store the world (full? private?)",6e3)),t&&(this.saveFailed=!1)}flushNow(){clearTimeout(this.saveTimer);for(const t of this.falling)if(t.blend&&!t.blend.final){t.blend.final=!0,eo(this.field,t.frag,t.blend.box,t.blend.pre,0,0);const i=$l(this.field,t.frag);for(const[s,r,a]of fn(i,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Ct(s,r,a));t.cooking={keys:[],versions:[]}}const e=this.falling.filter(t=>!t.cooking&&!t.blend).map(t=>eh(t.frag));no(this.cfg.seed,e),ch(this.cfg.seed,this.animals.map(sh)),this.saveDirty()}settleLoose(){const e=this.support.dropLoose();for(const t of e.fragments)this.launch(t);if(e.changed){for(const[t,i,s]of fn(e.changed,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(Ct(t,i,s));this.scheduleSave()}e.fragments.length&&this.hud.say(`${e.fragments.length} loose thing${e.fragments.length===1?"":"s"} had no anchor and fell`),e.held&&this.hud.say(`${e.held} thing${e.held===1?"":"s"} too vast to fall stand${e.held===1?"s":""} without an anchor`)}resumeBodies(){const e=this.world?.bodies;if(e?.length){for(const t of e)try{this.launch(rx(t))}catch{}this.world.bodies=[],no(this.cfg.seed,[])}}undo(){const e=this.undoStack.pop();if(!e){this.hud.say("nothing to undo");return}for(const t of this.falling)t.blend&&this.undry(t);this.edits.pop();for(const t of e){Eh(this.field,t),this.support.afterEdit({x0:t.cx*he,y0:t.cy*he,z0:t.cz*he,x1:t.cx*he+he,y1:t.cy*he+he,z1:t.cz*he+he}),this.sandOn&&this.sand.wake({x0:t.cx*he,y0:t.cy*he,z0:t.cz*he,x1:t.cx*he+he,y1:t.cy*he+he,z1:t.cz*he+he}),this.snowOn&&this.snow.wake({x0:t.cx*he,y0:t.cy*he,z0:t.cz*he,x1:t.cx*he+he,y1:t.cy*he+he,z1:t.cz*he+he});const i=Ct(t.cx,t.cy,t.cz);this.dirtySlabs.add(i);for(const[s,r,a]of Za({x0:t.cx*he,y0:t.cy*he,z0:t.cz*he,x1:t.cx*he+he,y1:t.cy*he+he,z1:t.cz*he+he},he,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.requestMesh(s,r,a),this.lightDirty.add(Ct(s,r,a))}this.waterDirty=!0,this.scheduleSave(),this.hud.say("undo")}setView(e,t,i,s,r){this.body.pos[0]=e,this.body.pos[1]=t-ci,this.body.pos[2]=i,this.body.vel[0]=this.body.vel[1]=this.body.vel[2]=0,this.body.fly=!0,this.input.yaw=s,this.input.pitch=r,this.lastLod=0}setTime(e){this.time=e}}const bh=140,oo=["add","sub","smooth","paint"],Ch=2.4,Dh=1.7,PS=2600,rs=6,LS=160,BS=.45,US=.4;function co(n){const e=1-Math.min(1,Math.max(0,n));return 1-e*e*e}function Rh(n){return n==="cube"?"slab":n==="slab"?"wall":n==="wall"?"roof":n==="roof"?"ramp":n==="ramp"?"sphere":"cube"}function zs(n){const e=n%1024,t=Math.floor(n/1024)%1024;return[Math.floor(n/1048576),t,e]}function si(){return new Promise(n=>requestAnimationFrame(()=>n()))}function Gr(n,e){const t=n.size*.5+2;return{x0:Math.max(0,Math.floor((n.x-t)/R)),y0:Math.max(0,Math.floor((n.y-t)/R)),z0:Math.max(0,Math.floor((n.z-t)/R)),x1:Math.min(e.nx-1,Math.ceil((n.x+t)/R)),y1:Math.min(e.ny-1,Math.ceil((n.y+t)/R)),z1:Math.min(e.nz-1,Math.ceil((n.z+t)/R))}}function Tn(n,e){return{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}}function NS(n){const e=/#v=([-\d.,]+)/.exec(n);if(!e)return;const t=e[1].split(",").map(Number);return t.length>=5&&t.every(i=>Number.isFinite(i))?t:void 0}async function FS(){const n=new URLSearchParams(location.search),e=Hu(),t=n.get("test")==="1";n.get("debug")==="1"&&document.body.classList.add("debug");const i=n.get("seed")??n.get("world"),s=i!==null?Gu(i):e.seed??1337,r=n.get("quality")||e.quality||"medium",a={seed:s,quality:r,test:t,chunks:(await Xx(s))?.chunks??(n.get("chunks")?Math.max(2,Math.min(24,Number(n.get("chunks")))):void 0),time:n.get("time")?Number(n.get("time")):void 0,cheapGi:n.get("gi")==="cheap"?!0:n.get("gi")==="full"?!1:void 0,giMode:n.get("gi")==="cone"?"cone":n.get("gi")==="sh"?"sh":void 0,post:n.has("post")?Math.max(0,Math.min(2,Number(n.get("post")))):void 0,volumetric:n.get("vol")==="0"?!1:void 0,caustic:n.get("caustic")==="0"?!1:void 0,iceDebug:n.has("icedebug")?Number(n.get("icedebug")):void 0,shader:["full","lite","basic"].find(f=>f===n.get("shader")),giDiv:n.has("gidiv")?Math.max(1,Math.min(4,Number(n.get("gidiv")))):void 0,view:NS(location.hash),foliage:n.has("foliage")?Math.max(0,Math.min(8,Number(n.get("foliage")))):e.foliage,fall:n.has("fall")?Math.max(1,Math.min(60,Number(n.get("fall")))):e.fall,animals:n.has("animals")?n.get("animals")!=="0":e.animals,sand:n.has("sand")?n.get("sand")!=="0":e.sand,snow:n.has("snow")?n.get("snow")!=="0":e.snow,edit:n.has("edit")?Math.max(60,Math.min(2e3,Number(n.get("edit")))):e.edit};bn({seed:s,quality:r});const o=document.getElementById("view"),c=new ES;window.addEventListener("error",f=>c.showError("error: "+(f.message??"").slice(0,160)));const l=await Uc.create(o,a,c);c.hideLoading(),t||l.showMenu(),window.__splinecraft={game:l,ready:()=>l.ready&&l.pendingMeshes===0,setView:l.setView.bind(l),setTime:l.setTime.bind(l),edit:l.applyEdit.bind(l),ground:(f,d)=>ys(l.field,f,d),state:()=>l.stateString()};const h=f=>{l.frame(f),requestAnimationFrame(h)};requestAnimationFrame(h)}FS().catch(n=>{console.error(n);const e=document.getElementById("loading-text");e&&(e.textContent="failed to start: "+(n instanceof Error?n.message:String(n)))});
