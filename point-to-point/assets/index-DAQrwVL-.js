(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="180",Af=0,Ol=1,Tf=2,Ch=1,Lh=2,si=3,wi=0,vn=1,pn=2,yi=0,vs=1,uo=2,kl=3,Bl=4,Rf=5,Oi=100,Cf=101,Lf=102,Pf=103,Df=104,If=200,Uf=201,Ff=202,Nf=203,po=204,mo=205,zf=206,Of=207,kf=208,Bf=209,Hf=210,Gf=211,Vf=212,Wf=213,qf=214,go=0,xo=1,vo=2,ws=3,_o=4,yo=5,Mo=6,wo=7,ml=0,Xf=1,$f=2,Mi=0,Yf=1,Kf=2,jf=3,Ph=4,Zf=5,Jf=6,Qf=7,Dh=300,bs=301,Ss=302,bo=303,So=304,aa=306,Eo=1e3,Bi=1001,Ao=1002,cn=1003,eu=1004,xr=1005,bn=1006,ma=1007,ai=1008,jn=1009,Ih=1010,Uh=1011,ir=1012,gl=1013,bi=1014,Fn=1015,Wi=1016,xl=1017,vl=1018,sr=1020,Fh=35902,Nh=35899,zh=1021,Oh=1022,xn=1023,rr=1026,ar=1027,_s=1028,_l=1029,kh=1030,yl=1031,Ml=1033,Kr=33776,jr=33777,Zr=33778,Jr=33779,To=35840,Ro=35841,Co=35842,Lo=35843,Po=36196,Do=37492,Io=37496,Uo=37808,Fo=37809,No=37810,zo=37811,Oo=37812,ko=37813,Bo=37814,Ho=37815,Go=37816,Vo=37817,Wo=37818,qo=37819,Xo=37820,$o=37821,Yo=36492,Ko=36494,jo=36495,Zo=36283,Jo=36284,Qo=36285,el=36286,tu=3200,Bh=3201,wl=0,nu=1,Gn="",ln="srgb",Es="srgb-linear",ia="linear",Ft="srgb",ji=7680,Hl=519,iu=512,su=513,ru=514,Hh=515,au=516,ou=517,lu=518,cu=519,Gl=35044,As=35048,Vl="300 es",Yn=2e3,sa=2001;class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ga=Math.PI/180,tl=180/Math.PI;function gr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function hu(i,e){return(i%e+e)%e}function xa(i,e,t){return(1-t)*i+t*e}function zs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const u=r[a+0],d=r[a+1],g=r[a+2],m=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(f!==m||l!==u||c!==d||h!==g){let x=1-o;const p=l*u+c*d+h*g+f*m,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),M=Math.atan2(E,p*y);x=Math.sin(x*M)/E,o=Math.sin(o*M)/E}const v=o*y;if(l=l*x+u*v,c=c*x+d*v,h=h*x+g*v,f=f*x+m*v,x===1-o){const E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-o*d,e[t+2]=c*g+h*d+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new z,Wl=new Zt;class ft{constructor(e,t,n,s,r,a,o,l,c){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],m=s[0],x=s[3],p=s[6],y=s[1],_=s[4],v=s[7],E=s[2],M=s[5],T=s[8];return r[0]=a*m+o*y+l*E,r[3]=a*x+o*_+l*M,r[6]=a*p+o*v+l*T,r[1]=c*m+h*y+f*E,r[4]=c*x+h*_+f*M,r[7]=c*p+h*v+f*T,r[2]=u*m+d*y+g*E,r[5]=u*x+d*_+g*M,r[8]=u*p+d*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=t*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(s*c-h*n)*m,e[2]=(o*n-s*a)*m,e[3]=u*m,e[4]=(h*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new ft;function Gh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fu(){const i=or("canvas");return i.style.display="block",i}const ql={};function lr(i){i in ql||(ql[i]=!0,console.warn(i))}function uu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Xl=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function du(){const i={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ft&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ft&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Es]:{primaries:e,whitePoint:n,transfer:ia,toXYZ:Xl,fromXYZ:$l,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:n,transfer:Ft,toXYZ:Xl,fromXYZ:$l,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}const At=du();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class pu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zi===void 0&&(Zi=or("canvas")),Zi.width=e.width,Zi.height=e.height;const s=Zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mu=0;class bl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ya(s[a].image)):r.push(ya(s[a]))}else r=ya(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gu=0;const Ma=new z;class hn extends Ds{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=Bi,s=Bi,r=bn,a=ai,o=xn,l=jn,c=hn.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=gr(),this.name="",this.source=new bl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eo:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eo:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Dh;hn.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,s=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],m=l[2],x=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-m)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+m)<.1&&Math.abs(g+x)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(d+1)/2,E=(p+1)/2,M=(h+u)/4,T=(f+m)/4,A=(g+x)/4;return _>v&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=M/n,r=T/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=A/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=A/r),this.set(n,s,r,t),this}let y=Math.sqrt((x-g)*(x-g)+(f-m)*(f-m)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(x-g)/y,this.y=(f-m)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xu extends Ds{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new hn(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new bl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends xu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vh extends hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vu extends hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),_r.subVectors(this.max,Os),Ji.subVectors(e.a,Os),Qi.subVectors(e.b,Os),es.subVectors(e.c,Os),hi.subVectors(Qi,Ji),fi.subVectors(es,Qi),Ri.subVectors(Ji,es);let t=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Ri.z,Ri.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Ri.z,0,-Ri.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Ri.y,Ri.x,0];return!wa(t,Ji,Qi,es,_r)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,Ji,Qi,es,_r))?!1:(yr.crossVectors(hi,fi),t=[yr.x,yr.y,yr.z],wa(t,Ji,Qi,es,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new z,new z,new z,new z,new z,new z,new z,new z],On=new z,vr=new Yi,Ji=new z,Qi=new z,es=new z,hi=new z,fi=new z,Ri=new z,Os=new z,_r=new z,yr=new z,Ci=new z;function wa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const _u=new Yi,ks=new z,ba=new z;class Si{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_u.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(ba)),this.expandByPoint(ks.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qn=new z,Sa=new z,Mr=new z,ui=new z,Ea=new z,wr=new z,Aa=new z;class yu{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sa.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Sa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Mr),o=ui.dot(this.direction),l=-ui.dot(Mr),c=ui.lengthSq(),h=Math.abs(1-a*a);let f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const m=1/h;f*=m,u*=m,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Sa).addScaledVector(Mr,u),d}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,s,r){Ea.subVectors(t,e),wr.subVectors(n,e),Aa.crossVectors(Ea,wr);let a=this.direction.dot(Aa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);const l=o*this.direction.dot(wr.crossVectors(ui,wr));if(l<0)return null;const c=o*this.direction.dot(Ea.cross(ui));if(c<0||l+c>a)return null;const h=-o*ui.dot(Aa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,g,m,x){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,g,m,x)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,g,m,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=m,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,d=a*f,g=o*h,m=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-m*c,t[9]=-o*l,t[2]=m-u*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,g=c*h,m=c*f;t[0]=u+m*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=m+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,g=c*h,m=c*f;t[0]=u-m*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=m-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,g=o*h,m=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+m,t[1]=l*f,t[5]=m*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,g=o*l,m=o*c;t[0]=l*h,t[4]=m-u*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-m*f}else if(e.order==="XZY"){const u=a*l,d=a*c,g=o*l,m=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+m,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=m*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mu,e,wu)}lookAt(e,t,n){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),di.crossVectors(n,Sn),di.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),di.crossVectors(n,Sn)),di.normalize(),br.crossVectors(Sn,di),s[0]=di.x,s[4]=br.x,s[8]=Sn.x,s[1]=di.y,s[5]=br.y,s[9]=Sn.y,s[2]=di.z,s[6]=br.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],m=n[6],x=n[10],p=n[14],y=n[3],_=n[7],v=n[11],E=n[15],M=s[0],T=s[4],A=s[8],b=s[12],w=s[1],D=s[5],F=s[9],B=s[13],k=s[2],N=s[6],U=s[10],I=s[14],P=s[3],V=s[7],H=s[11],ee=s[15];return r[0]=a*M+o*w+l*k+c*P,r[4]=a*T+o*D+l*N+c*V,r[8]=a*A+o*F+l*U+c*H,r[12]=a*b+o*B+l*I+c*ee,r[1]=h*M+f*w+u*k+d*P,r[5]=h*T+f*D+u*N+d*V,r[9]=h*A+f*F+u*U+d*H,r[13]=h*b+f*B+u*I+d*ee,r[2]=g*M+m*w+x*k+p*P,r[6]=g*T+m*D+x*N+p*V,r[10]=g*A+m*F+x*U+p*H,r[14]=g*b+m*B+x*I+p*ee,r[3]=y*M+_*w+v*k+E*P,r[7]=y*T+_*D+v*N+E*V,r[11]=y*A+_*F+v*U+E*H,r[15]=y*b+_*B+v*I+E*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],m=e[7],x=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*o*u+n*c*u+s*o*d-n*l*d)+m*(+t*l*d-t*c*u+r*a*u-s*a*d+s*c*h-r*l*h)+x*(+t*c*f-t*o*d-r*a*f+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-t*l*f+t*o*u+s*a*f-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],m=e[13],x=e[14],p=e[15],y=f*x*c-m*u*c+m*l*d-o*x*d-f*l*p+o*u*p,_=g*u*c-h*x*c-g*l*d+a*x*d+h*l*p-a*u*p,v=h*m*c-g*f*c+g*o*d-a*m*d-h*o*p+a*f*p,E=g*f*l-h*m*l-g*o*u+a*m*u+h*o*x-a*f*x,M=t*y+n*_+s*v+r*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=y*T,e[1]=(m*u*r-f*x*r-m*s*d+n*x*d+f*s*p-n*u*p)*T,e[2]=(o*x*r-m*l*r+m*s*c-n*x*c-o*s*p+n*l*p)*T,e[3]=(f*l*r-o*u*r-f*s*c+n*u*c+o*s*d-n*l*d)*T,e[4]=_*T,e[5]=(h*x*r-g*u*r+g*s*d-t*x*d-h*s*p+t*u*p)*T,e[6]=(g*l*r-a*x*r-g*s*c+t*x*c+a*s*p-t*l*p)*T,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*d+t*l*d)*T,e[8]=v*T,e[9]=(g*f*r-h*m*r-g*n*d+t*m*d+h*n*p-t*f*p)*T,e[10]=(a*m*r-g*o*r+g*n*c-t*m*c-a*n*p+t*o*p)*T,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*d-t*o*d)*T,e[12]=E*T,e[13]=(h*m*s-g*f*s+g*n*u-t*m*u-h*n*x+t*f*x)*T,e[14]=(g*o*s-a*m*s-g*n*l+t*m*l+a*n*x-t*o*x)*T,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*u+t*o*u)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,m=a*h,x=a*f,p=o*f,y=l*c,_=l*h,v=l*f,E=n.x,M=n.y,T=n.z;return s[0]=(1-(m+p))*E,s[1]=(d+v)*E,s[2]=(g-_)*E,s[3]=0,s[4]=(d-v)*M,s[5]=(1-(u+p))*M,s[6]=(x+y)*M,s[7]=0,s[8]=(g+_)*T,s[9]=(x-y)*T,s[10]=(1-(u+m))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const a=ts.set(s[4],s[5],s[6]).length(),o=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);const c=1/r,h=1/a,f=1/o;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,t.setFromRotationMatrix(kn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Yn,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let g,m;if(l)g=r/(a-r),m=a*r/(a-r);else if(o===Yn)g=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===sa)g=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Yn,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,m;if(l)g=1/(a-r),m=a/(a-r);else if(o===Yn)g=-2/(a-r),m=-(a+r)/(a-r);else if(o===sa)g=-1/(a-r),m=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ts=new z,kn=new Rt,Mu=new z(0,0,0),wu=new z(1,1,1),di=new z,br=new z,Sn=new z,Yl=new Rt,Kl=new Zt;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bu=0;const jl=new z,ns=new Zt,ei=new Rt,Sr=new z,Bs=new z,Su=new z,Eu=new Zt,Zl=new z(1,0,0),Jl=new z(0,1,0),Ql=new z(0,0,1),ec={type:"added"},Au={type:"removed"},is={type:"childadded",child:null},Ta={type:"childremoved",child:null};class fn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new z,t=new zn,n=new Zt,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new ft}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(Ql,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(Ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Bs,Sr,this.up):ei.lookAt(Sr,Bs,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(ei),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ec),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Au),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ec),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Su),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Eu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}fn.DEFAULT_UP=new z(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new z,ti=new z,Ra=new z,ni=new z,ss=new z,rs=new z,tc=new z,Ca=new z,La=new z,Pa=new z,Da=new yt,Ia=new yt,Ua=new yt;class Vn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),ti.subVectors(n,t),Ra.subVectors(e,t);const a=Bn.dot(Bn),o=Bn.dot(ti),l=Bn.dot(Ra),c=ti.dot(ti),h=ti.dot(Ra),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Da.setScalar(0),Ia.setScalar(0),Ua.setScalar(0),Da.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),Ua.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Da,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(Ua,r.z),a}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),ti.subVectors(e,t),Bn.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Bn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Vn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ss.subVectors(s,n),rs.subVectors(r,n),Ca.subVectors(e,n);const l=ss.dot(Ca),c=rs.dot(Ca);if(l<=0&&c<=0)return t.copy(n);La.subVectors(e,s);const h=ss.dot(La),f=rs.dot(La);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ss,a);Pa.subVectors(e,r);const d=ss.dot(Pa),g=rs.dot(Pa);if(g>=0&&d<=g)return t.copy(r);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(rs,o);const x=h*g-d*f;if(x<=0&&f-h>=0&&d-g>=0)return tc.subVectors(r,s),o=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(tc,o);const p=1/(x+m+u);return a=m*p,o=u*p,t.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Fa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=At.workingColorSpace){if(e=hu(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fa(a,r,e+1/3),this.g=Fa(a,r,e),this.b=Fa(a,r,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const n=qh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return At.workingToColorSpace(dn.copy(this),e),Math.round(gt(dn.r*255,0,255))*65536+Math.round(gt(dn.g*255,0,255))*256+Math.round(gt(dn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(dn.copy(this),t);const n=dn.r,s=dn.g,r=dn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=ln){At.workingToColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,s=dn.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Er);const n=xa(pi.h,Er.h,t),s=xa(pi.s,Er.s,t),r=xa(pi.l,Er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new je;je.NAMES=qh;let Tu=0;class Is extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=vs,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==po&&(n.blendSrc=this.blendSrc),this.blendDst!==mo&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Us extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new z,Ar=new Je;let Ru=0;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ru++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}}class Ts extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sl extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _t extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cu=0;const Ln=new Rt,Na=new fn,as=new z,En=new Yi,Hs=new Yi,rn=new z;class Nt extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gh(e)?Sl:Ts)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(En.min,Hs.min),En.expandByPoint(rn),rn.addVectors(En.max,Hs.max),En.expandByPoint(rn)):(En.expandByPoint(Hs.min),En.expandByPoint(Hs.max))}En.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(rn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rn.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(e,c),rn.add(as)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new z,l[A]=new z;const c=new z,h=new z,f=new z,u=new Je,d=new Je,g=new Je,m=new z,x=new z;function p(A,b,w){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,w),u.fromBufferAttribute(r,A),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,w),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),x.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),o[A].add(m),o[b].add(m),o[w].add(m),l[A].add(x),l[b].add(x),l[w].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,b=y.length;A<b;++A){const w=y[A],D=w.start,F=w.count;for(let B=D,k=D+F;B<k;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new z,v=new z,E=new z,M=new z;function T(A){E.fromBufferAttribute(s,A),M.copy(E);const b=o[A];_.copy(b),_.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(M,b);const D=v.dot(l[A])<0?-1:1;a.setXYZW(A,_.x,_.y,_.z,D)}for(let A=0,b=y.length;A<b;++A){const w=y[A],D=w.start,F=w.count;for(let B=D,k=D+F;B<k;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,h=new z,f=new z;if(e)for(let u=0,d=e.count;u<d;u+=3){const g=e.getX(u+0),m=e.getX(u+1),x=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,x),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let m=0,x=l.length;m<x;m++){o.isInterleavedBufferAttribute?d=l[m]*o.data.stride+o.offset:d=l[m]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new Tt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new Rt,Li=new yu,Tr=new Si,ic=new z,Rr=new z,Cr=new z,Lr=new z,za=new z,Pr=new z,sc=new z,Dr=new z;class Dt extends fn{constructor(e=new Nt,t=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(za.fromBufferAttribute(f,e),a?Pr.addScaledVector(za,h):Pr.addScaledVector(za.sub(t),h))}t.add(Pr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(Tr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Tr,ic)===null||Li.origin.distanceToSquared(ic)>(e.far-e.near)**2))&&(nc.copy(r).invert(),Li.copy(e.ray).applyMatrix4(nc),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,m=u.length;g<m;g++){const x=u[g],p=a[x.materialIndex],y=Math.max(x.start,d.start),_=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,E=_;v<E;v+=3){const M=o.getX(v),T=o.getX(v+1),A=o.getX(v+2);s=Ir(this,p,e,n,c,h,f,M,T,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let x=g,p=m;x<p;x+=3){const y=o.getX(x),_=o.getX(x+1),v=o.getX(x+2);s=Ir(this,a,e,n,c,h,f,y,_,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,m=u.length;g<m;g++){const x=u[g],p=a[x.materialIndex],y=Math.max(x.start,d.start),_=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,E=_;v<E;v+=3){const M=v,T=v+1,A=v+2;s=Ir(this,p,e,n,c,h,f,M,T,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let x=g,p=m;x<p;x+=3){const y=x,_=x+1,v=x+2;s=Ir(this,a,e,n,c,h,f,y,_,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Lu(i,e,t,n,s,r,a,o){let l;if(e.side===vn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===wi,o),l===null)return null;Dr.copy(o),Dr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:i}}function Ir(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Rr),i.getVertexPosition(l,Cr),i.getVertexPosition(c,Lr);const h=Lu(i,e,t,n,Rr,Cr,Lr,sc);if(h){const f=new z;Vn.getBarycoord(sc,Rr,Cr,Lr,f),s&&(h.uv=Vn.getInterpolatedAttribute(s,o,l,c,f,new Je)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,o,l,c,f,new Je)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,l,c,f,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new z,materialIndex:0};Vn.getNormal(Rr,Cr,Lr,u.normal),h.face=u,h.barycoord=f}return h}class Ai extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(f,2));function g(m,x,p,y,_,v,E,M,T,A,b){const w=v/T,D=E/A,F=v/2,B=E/2,k=M/2,N=T+1,U=A+1;let I=0,P=0;const V=new z;for(let H=0;H<U;H++){const ee=H*D-B;for(let ne=0;ne<N;ne++){const ue=ne*w-F;V[m]=ue*y,V[x]=ee*_,V[p]=k,c.push(V.x,V.y,V.z),V[m]=0,V[x]=0,V[p]=M>0?1:-1,h.push(V.x,V.y,V.z),f.push(ne/T),f.push(1-H/A),I+=1}}for(let H=0;H<A;H++)for(let ee=0;ee<T;ee++){const ne=u+ee+N*H,ue=u+ee+N*(H+1),de=u+(ee+1)+N*(H+1),pe=u+(ee+1)+N*H;l.push(ne,ue,pe),l.push(ue,de,pe),P+=6}o.addGroup(d,P,b),d+=P,u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function gn(i){const e={};for(let t=0;t<i.length;t++){const n=Rs(i[t]);for(const s in n)e[s]=n[s]}return e}function Pu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Du={clone:Rs,merge:gn};var Iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iu,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Pu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $h extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new z,rc=new Je,ac=new Je;class Un extends $h{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,rc,ac),t.subVectors(ac,rc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ga*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const os=-90,ls=1;class Fu extends fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Un(os,ls,e,t);s.layers=this.layers,this.add(s);const r=new Un(os,ls,e,t);r.layers=this.layers,this.add(r);const a=new Un(os,ls,e,t);a.layers=this.layers,this.add(a);const o=new Un(os,ls,e,t);o.layers=this.layers,this.add(o);const l=new Un(os,ls,e,t);l.layers=this.layers,this.add(l);const c=new Un(os,ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yh extends hn{constructor(e=[],t=bs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nu extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ai(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:yi});r.uniforms.tEquirect.value=t;const a=new Dt(s,r),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=bn),new Fu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Jt extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zu={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const x=t.getJointPose(m,n),p=this._getHandJoint(c,m);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class El{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new El(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nl extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qi extends hn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=cn,h=cn,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn extends Tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new Rt,oc=new Rt,Ur=[],lc=new Yi,Ou=new Rt,Gs=new Dt,Vs=new Si;class Xi extends Dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ou)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),lc.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(lc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),Vs.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),oc.multiplyMatrices(n,cs),Gs.matrixWorld=oc,Gs.raycast(e,Ur);for(let a=0,o=Ur.length;a<o;a++){const l=Ur[a];l.instanceId=r,l.object=this,t.push(l)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Kn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qi(new Float32Array(s*this.count),s,this.count,_s,Fn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ka=new z,ku=new z,Bu=new ft;class Ni{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ka.subVectors(n,t).cross(ku.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bu.getNormalMatrix(e),s=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Si,Hu=new Je(.5,.5),Fr=new z;class oa{constructor(e=new Ni,t=new Ni,n=new Ni,s=new Ni,r=new Ni,a=new Ni){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],m=r[9],x=r[10],p=r[11],y=r[12],_=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-a,d-h,p-g,E-y).normalize(),s[1].setComponents(c+a,d+h,p+g,E+y).normalize(),s[2].setComponents(c+o,d+f,p+m,E+_).normalize(),s[3].setComponents(c-o,d-f,p-m,E-_).normalize(),n)s[4].setComponents(l,u,x,v).normalize(),s[5].setComponents(c-l,d-u,p-x,E-v).normalize();else if(s[4].setComponents(c-l,d-u,p-x,E-v).normalize(),t===Yn)s[5].setComponents(c+l,d+u,p+x,E+v).normalize();else if(t===sa)s[5].setComponents(l,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=Hu.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gu extends hn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Al extends hn{constructor(e,t,n=bi,s,r,a,o=cn,l=cn,c,h=rr,f=1){if(h!==rr&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kh extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class la extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const m=[],x=n/2;let p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new _t(f,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2));function y(){const v=new z,E=new z;let M=0;const T=(t-e)/n;for(let A=0;A<=r;A++){const b=[],w=A/r,D=w*(t-e)+e;for(let F=0;F<=s;F++){const B=F/s,k=B*l+o,N=Math.sin(k),U=Math.cos(k);E.x=D*N,E.y=-w*n+x,E.z=D*U,f.push(E.x,E.y,E.z),v.set(N,T,U).normalize(),u.push(v.x,v.y,v.z),d.push(B,1-w),b.push(g++)}m.push(b)}for(let A=0;A<s;A++)for(let b=0;b<r;b++){const w=m[b][A],D=m[b+1][A],F=m[b+1][A+1],B=m[b][A+1];(e>0||b!==0)&&(h.push(w,D,B),M+=3),(t>0||b!==r-1)&&(h.push(D,F,B),M+=3)}c.addGroup(p,M,0),p+=M}function _(v){const E=g,M=new Je,T=new z;let A=0;const b=v===!0?e:t,w=v===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,x*w,0),u.push(0,w,0),d.push(.5,.5),g++;const D=g;for(let F=0;F<=s;F++){const k=F/s*l+o,N=Math.cos(k),U=Math.sin(k);T.x=b*U,T.y=x*w,T.z=b*N,f.push(T.x,T.y,T.z),u.push(0,w,0),M.x=N*.5+.5,M.y=U*.5*w+.5,d.push(M.x,M.y),g++}for(let F=0;F<s;F++){const B=E+F,k=D+F;v===!0?h.push(k,k+1,B):h.push(k+1,k,B),A+=3}c.addGroup(p,A,v===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}function Vu(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=jh(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Yu(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let h=-1/0,f=-1/0;for(let u=t;u<s;u+=t){const d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return cr(r,a,t,o,l,c,0),a}function jh(i,e,t,n,s){let r;if(s===rd(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=cc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=cc(a/n|0,i[a],i[a+1],r);return r&&Cs(r,r.next)&&(fr(r),r=r.next),r}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Cs(t,t.next)||qt(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function cr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Qu(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?qu(i,n,s,r):Wu(i)){e.push(l.i,i.i,c.i),fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Xu($i(i),e),cr(i,e,t,n,s,r,2)):a===2&&$u(i,e,t,n,s,r):cr($i(i),e,t,n,s,r,1);break}}}function Wu(i){const e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Js(s,o,r,l,a,c,g.x,g.y)&&qt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qu(i,e,t,n){const s=i.prev,r=i,a=i.next;if(qt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),m=Math.max(o,l,c),x=Math.max(h,f,u),p=il(d,g,e,t,n),y=il(m,x,e,t,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=x&&_!==s&&_!==a&&Js(o,h,l,f,c,u,_.x,_.y)&&qt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=m&&v.y>=g&&v.y<=x&&v!==s&&v!==a&&Js(o,h,l,f,c,u,v.x,v.y)&&qt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=x&&_!==s&&_!==a&&Js(o,h,l,f,c,u,_.x,_.y)&&qt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=m&&v.y>=g&&v.y<=x&&v!==s&&v!==a&&Js(o,h,l,f,c,u,v.x,v.y)&&qt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Xu(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Cs(n,s)&&Jh(n,t,t.next,s)&&hr(n,s)&&hr(s,n)&&(e.push(n.i,t.i,s.i),fr(t),fr(t.next),t=i=s),t=t.next}while(t!==i);return $i(t)}function $u(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&nd(a,o)){let l=Qh(a,o);a=$i(a,a.next),l=$i(l,l.next),cr(a,e,t,n,s,r,0),cr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Yu(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=jh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(td(c))}s.sort(Ku);for(let r=0;r<s.length;r++)t=ju(s[r],t);return t}function Ku(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ju(i,e){const t=Zu(i,e);if(!t)return e;const n=Qh(t,i);return $i(n,n.next),$i(t,t.next)}function Zu(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Cs(i,t))return t;do{if(Cs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Zh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);hr(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Ju(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Ju(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function Qu(i,e,t,n){let s=i;do s.z===0&&(s.z=il(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ed(s)}function ed(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function il(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function td(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Zh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Js(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Zh(i,e,t,n,s,r,a,o)}function nd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!id(i,e)&&(hr(i,e)&&hr(e,i)&&sd(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||Cs(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Cs(i,e){return i.x===e.x&&i.y===e.y}function Jh(i,e,t,n){const s=zr(qt(i,e,t)),r=zr(qt(i,e,n)),a=zr(qt(t,n,i)),o=zr(qt(t,n,e));return!!(s!==r&&a!==o||s===0&&Nr(i,t,e)||r===0&&Nr(i,n,e)||a===0&&Nr(t,i,n)||o===0&&Nr(t,e,n))}function Nr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function zr(i){return i>0?1:i<0?-1:0}function id(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Jh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function hr(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function sd(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Qh(i,e){const t=sl(i.i,i.x,i.y),n=sl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cc(i,e,t,n){const s=sl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rd(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ad{static triangulate(e,t,n=2){return Vu(e,t,n)}}class Ls{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Ls.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];hc(e),fc(n,e);let a=e.length;t.forEach(hc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,fc(n,t[l]);const o=ad.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function hc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function fc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ca extends Nt{constructor(e=[new Je(0,-.5),new Je(.5,0),new Je(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=gt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,f=new z,u=new Je,d=new z,g=new z,m=new z;let x=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-x,d.z=p*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-x,d.z=p*0,g.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(g)}for(let y=0;y<=t;y++){const _=n+y*h*s,v=Math.sin(_),E=Math.cos(_);for(let M=0;M<=e.length-1;M++){f.x=e[M].x*v,f.y=e[M].y,f.z=e[M].x*E,a.push(f.x,f.y,f.z),u.x=y/t,u.y=M/(e.length-1),o.push(u.x,u.y);const T=l[3*M+0]*v,A=l[3*M+1],b=l[3*M+0]*E;c.push(T,A,b)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const v=_+y*e.length,E=v,M=v+e.length,T=v+e.length+1,A=v+1;r.push(E,M,A),r.push(T,A,M)}this.setIndex(r),this.setAttribute("position",new _t(a,3)),this.setAttribute("uv",new _t(o,2)),this.setAttribute("normal",new _t(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.points,e.segments,e.phiStart,e.phiLength)}}class Ei extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],g=[],m=[],x=[];for(let p=0;p<h;p++){const y=p*u-a;for(let _=0;_<c;_++){const v=_*f-r;g.push(v,-y,0),m.push(0,0,1),x.push(_/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const _=y+c*p,v=y+c*(p+1),E=y+1+c*(p+1),M=y+1+c*p;d.push(_,v,M),d.push(v,E,M)}this.setIndex(d),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(m,3)),this.setAttribute("uv",new _t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tl extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new z,u=new z,d=[],g=[],m=[],x=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const M=E/t;f.x=-e*Math.cos(s+M*r)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(s+M*r)*Math.sin(a+_*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),m.push(u.x,u.y,u.z),x.push(M+v,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=h[p][y+1],v=h[p][y],E=h[p+1][y],M=h[p+1][y+1];(p!==0||a>0)&&d.push(_,v,M),(p!==n-1||l<Math.PI)&&d.push(v,E,M)}this.setIndex(d),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(m,3)),this.setAttribute("uv",new _t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rl extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new z,f=new z,u=new z;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const m=g/s*r,x=d/n*Math.PI*2;f.x=(e+t*Math.cos(x))*Math.cos(m),f.y=(e+t*Math.cos(x))*Math.sin(m),f.z=t*Math.sin(x),o.push(f.x,f.y,f.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const m=(s+1)*d+g-1,x=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(m,x,y),a.push(x,p,y)}this.setIndex(a),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Fs extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ef extends Fs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Nn extends Is{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tf extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class od extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ba={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ld{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const cd=new ld;class Cl{constructor(e){this.manager=e!==void 0?e:cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";const hs=new WeakMap;class hd extends Cl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ba.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=hs.get(a);f===void 0&&(f=[],hs.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=or("img");function l(){h(),t&&t(this);const f=hs.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}hs.delete(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),Ba.remove(`image:${e}`);const u=hs.get(this)||[];for(let d=0;d<u.length;d++){const g=u[d];g.onError&&g.onError(f)}hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ba.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class nf extends Cl{constructor(e){super(e)}load(e,t,n,s){const r=new hn,a=new hd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class sf extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class fd extends sf{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ha=new Rt,uc=new z,dc=new z;class ud{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uc.setFromMatrixPosition(e.matrixWorld),t.position.copy(uc),dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dc),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ll extends $h{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dd extends ud{constructor(){super(new Ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pd extends sf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new dd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rf extends Nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class md extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function pc(i,e,t,n){const s=gd(n);switch(t){case zh:return i*e;case _s:return i*e/s.components*s.byteLength;case _l:return i*e/s.components*s.byteLength;case kh:return i*e*2/s.components*s.byteLength;case yl:return i*e*2/s.components*s.byteLength;case Oh:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case Ml:return i*e*4/s.components*s.byteLength;case Kr:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:case Lo:return Math.max(i,16)*Math.max(e,8)/4;case To:case Co:return Math.max(i,8)*Math.max(e,8)/2;case Po:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yo:case Ko:case jo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qo:case el:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gd(i){switch(i){case jn:case Ih:return{byteLength:1,components:1};case ir:case Uh:case Wi:return{byteLength:2,components:1};case xl:case vl:return{byteLength:2,components:4};case bi:case gl:case Fn:return{byteLength:4,components:1};case Fh:case Nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function af(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xd(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],m=f[d];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++u,f[u]=m)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const m=f[d];i.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vd=`#ifdef USE_ALPHAHASH
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
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
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
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ad=`#ifdef USE_BATCHING
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
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
} // validated`,Pd=`#ifdef USE_IRIDESCENCE
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
#endif`,Dd=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hd=`#define PI 3.141592653589793
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
} // validated`,Gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rp=`#ifdef USE_GRADIENTMAP
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
}`,ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cp=`uniform bool receiveShadow;
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
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
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
#endif`,gp=`struct PhysicalMaterial {
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
}`,xp=`
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tp=`#if defined( USE_POINTS_UV )
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
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
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
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v0=`uniform sampler2D t2D;
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`#include <common>
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
}`,E0=`#define DISTANCE
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
}`,A0=`#define DISTANCE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
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
}`,L0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,D0=`uniform vec3 diffuse;
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
}`,U0=`#define LAMBERT
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
}`,F0=`#define MATCAP
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
}`,N0=`#define MATCAP
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
}`,z0=`#define NORMAL
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
}`,O0=`#define NORMAL
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
}`,k0=`#define PHONG
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
}`,B0=`#define PHONG
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
}`,H0=`#define STANDARD
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
}`,G0=`#define STANDARD
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
}`,V0=`#define TOON
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
}`,W0=`#define TOON
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
}`,q0=`uniform float size;
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
}`,X0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,K0=`uniform float rotation;
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
}`,j0=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:vd,alphahash_pars_fragment:_d,alphamap_fragment:yd,alphamap_pars_fragment:Md,alphatest_fragment:wd,alphatest_pars_fragment:bd,aomap_fragment:Sd,aomap_pars_fragment:Ed,batching_pars_vertex:Ad,batching_vertex:Td,begin_vertex:Rd,beginnormal_vertex:Cd,bsdfs:Ld,iridescence_fragment:Pd,bumpmap_pars_fragment:Dd,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Nd,color_fragment:zd,color_pars_fragment:Od,color_pars_vertex:kd,color_vertex:Bd,common:Hd,cube_uv_reflection_fragment:Gd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Wd,displacementmap_vertex:qd,emissivemap_fragment:Xd,emissivemap_pars_fragment:$d,colorspace_fragment:Yd,colorspace_pars_fragment:Kd,envmap_fragment:jd,envmap_common_pars_fragment:Zd,envmap_pars_fragment:Jd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:hp,envmap_vertex:ep,fog_vertex:tp,fog_pars_vertex:np,fog_fragment:ip,fog_pars_fragment:sp,gradientmap_pars_fragment:rp,lightmap_pars_fragment:ap,lights_lambert_fragment:op,lights_lambert_pars_fragment:lp,lights_pars_begin:cp,lights_toon_fragment:fp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:xp,lights_fragment_maps:vp,lights_fragment_end:_p,logdepthbuf_fragment:yp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:bp,map_fragment:Sp,map_pars_fragment:Ep,map_particle_fragment:Ap,map_particle_pars_fragment:Tp,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Cp,morphinstance_vertex:Lp,morphcolor_vertex:Pp,morphnormal_vertex:Dp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Up,normal_fragment_begin:Fp,normal_fragment_maps:Np,normal_pars_fragment:zp,normal_pars_vertex:Op,normal_vertex:kp,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Wp,opaque_fragment:qp,packing:Xp,premultiplied_alpha_fragment:$p,project_vertex:Yp,dithering_fragment:Kp,dithering_pars_fragment:jp,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:e0,shadowmap_vertex:t0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:s0,skinning_vertex:r0,skinnormal_vertex:a0,specularmap_fragment:o0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:h0,transmission_fragment:f0,transmission_pars_fragment:u0,uv_pars_fragment:d0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:x0,background_frag:v0,backgroundCube_vert:_0,backgroundCube_frag:y0,cube_vert:M0,cube_frag:w0,depth_vert:b0,depth_frag:S0,distanceRGBA_vert:E0,distanceRGBA_frag:A0,equirect_vert:T0,equirect_frag:R0,linedashed_vert:C0,linedashed_frag:L0,meshbasic_vert:P0,meshbasic_frag:D0,meshlambert_vert:I0,meshlambert_frag:U0,meshmatcap_vert:F0,meshmatcap_frag:N0,meshnormal_vert:z0,meshnormal_frag:O0,meshphong_vert:k0,meshphong_frag:B0,meshphysical_vert:H0,meshphysical_frag:G0,meshtoon_vert:V0,meshtoon_frag:W0,points_vert:q0,points_frag:X0,shadow_vert:$0,shadow_frag:Y0,sprite_vert:K0,sprite_frag:j0},Ie={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},$n={basic:{uniforms:gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:gn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:gn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:gn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:gn([Ie.points,Ie.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:gn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:gn([Ie.common,Ie.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:gn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:gn([Ie.sprite,Ie.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:gn([Ie.common,Ie.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:gn([Ie.lights,Ie.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};$n.physical={uniforms:gn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Or={r:0,b:0,g:0},Di=new zn,Z0=new Rt;function J0(i,e,t,n,s,r,a){const o=new je(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function m(_){let v=!1;const E=g(_);E===null?p(o,l):E&&E.isColor&&(p(E,1),v=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===aa)?(h===void 0&&(h=new Dt(new Ai(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Rs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Di.copy(v.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(Di)),h.material.toneMapped=At.getTransfer(E.colorSpace)!==Ft,(f!==E||u!==E.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=E,u=E.version,d=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Dt(new Ei(2,2),new Rn({name:"BackgroundMaterial",uniforms:Rs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=At.getTransfer(E.colorSpace)!==Ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||u!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,u=E.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(Or,Xh(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,v,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:m,addToRenderList:x,dispose:y}}function Q0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(w,D,F,B,k){let N=!1;const U=f(B,F,D);r!==U&&(r=U,c(r.object)),N=d(w,B,F,k),N&&g(w,B,F,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,v(w,D,F,B),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function f(w,D,F){const B=F.wireframe===!0;let k=n[w.id];k===void 0&&(k={},n[w.id]=k);let N=k[D.id];N===void 0&&(N={},k[D.id]=N);let U=N[B];return U===void 0&&(U=u(l()),N[B]=U),U}function u(w){const D=[],F=[],B=[];for(let k=0;k<t;k++)D[k]=0,F[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:B,object:w,attributes:{},index:null}}function d(w,D,F,B){const k=r.attributes,N=D.attributes;let U=0;const I=F.getAttributes();for(const P in I)if(I[P].location>=0){const H=k[P];let ee=N[P];if(ee===void 0&&(P==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),P==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor)),H===void 0||H.attribute!==ee||ee&&H.data!==ee.data)return!0;U++}return r.attributesNum!==U||r.index!==B}function g(w,D,F,B){const k={},N=D.attributes;let U=0;const I=F.getAttributes();for(const P in I)if(I[P].location>=0){let H=N[P];H===void 0&&(P==="instanceMatrix"&&w.instanceMatrix&&(H=w.instanceMatrix),P==="instanceColor"&&w.instanceColor&&(H=w.instanceColor));const ee={};ee.attribute=H,H&&H.data&&(ee.data=H.data),k[P]=ee,U++}r.attributes=k,r.attributesNum=U,r.index=B}function m(){const w=r.newAttributes;for(let D=0,F=w.length;D<F;D++)w[D]=0}function x(w){p(w,0)}function p(w,D){const F=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;F[w]=1,B[w]===0&&(i.enableVertexAttribArray(w),B[w]=1),k[w]!==D&&(i.vertexAttribDivisor(w,D),k[w]=D)}function y(){const w=r.newAttributes,D=r.enabledAttributes;for(let F=0,B=D.length;F<B;F++)D[F]!==w[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function _(w,D,F,B,k,N,U){U===!0?i.vertexAttribIPointer(w,D,F,k,N):i.vertexAttribPointer(w,D,F,B,k,N)}function v(w,D,F,B){m();const k=B.attributes,N=F.getAttributes(),U=D.defaultAttributeValues;for(const I in N){const P=N[I];if(P.location>=0){let V=k[I];if(V===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(V=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(V=w.instanceColor)),V!==void 0){const H=V.normalized,ee=V.itemSize,ne=e.get(V);if(ne===void 0)continue;const ue=ne.buffer,de=ne.type,pe=ne.bytesPerElement,$=de===i.INT||de===i.UNSIGNED_INT||V.gpuType===gl;if(V.isInterleavedBufferAttribute){const j=V.data,ce=j.stride,we=V.offset;if(j.isInstancedInterleavedBuffer){for(let Ae=0;Ae<P.locationSize;Ae++)p(P.location+Ae,j.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ae=0;Ae<P.locationSize;Ae++)x(P.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let Ae=0;Ae<P.locationSize;Ae++)_(P.location+Ae,ee/P.locationSize,de,H,ce*pe,(we+ee/P.locationSize*Ae)*pe,$)}else{if(V.isInstancedBufferAttribute){for(let j=0;j<P.locationSize;j++)p(P.location+j,V.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let j=0;j<P.locationSize;j++)x(P.location+j);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let j=0;j<P.locationSize;j++)_(P.location+j,ee/P.locationSize,de,H,ee*pe,ee/P.locationSize*j*pe,$)}}else if(U!==void 0){const H=U[I];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(P.location,H);break;case 3:i.vertexAttrib3fv(P.location,H);break;case 4:i.vertexAttrib4fv(P.location,H);break;default:i.vertexAttrib1fv(P.location,H)}}}}y()}function E(){A();for(const w in n){const D=n[w];for(const F in D){const B=D[F];for(const k in B)h(B[k].object),delete B[k];delete D[F]}delete n[w]}}function M(w){if(n[w.id]===void 0)return;const D=n[w.id];for(const F in D){const B=D[F];for(const k in B)h(B[k].object),delete B[k];delete D[F]}delete n[w.id]}function T(w){for(const D in n){const F=n[D];if(F[w.id]===void 0)continue;const B=F[w.id];for(const k in B)h(B[k].object),delete B[k];delete F[w.id]}}function A(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:x,disableUnusedAttributes:y}}function em(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];t.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let m=0;m<f;m++)g+=h[m]*u[m];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const A=T===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==jn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fn&&!A)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:E,maxSamples:M}}function nm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ni,o=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,m=f.clipIntersection,x=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!x)r?h(null):c();else{const y=r?0:n,_=y*4;let v=p.clippingState||null;l.value=v,v=h(g,u,_,d);for(let E=0;E!==_;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){const m=f!==null?f.length:0;let x=null;if(m!==0){if(x=l.value,g!==!0||x===null){const p=d+m*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,v=d;_!==m;++_,v+=4)a.copy(f[_]).applyMatrix4(y,o),a.normal.toArray(x,v),x[v+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,x}}function im(i){let e=new WeakMap;function t(a,o){return o===bo?a.mapping=bs:o===So&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bo||o===So)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Nu(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const gs=4,mc=[.125,.215,.35,.446,.526,.582],ki=20,Ga=new Ll,gc=new je;let Va=null,Wa=0,qa=0,Xa=!1;const zi=(1+Math.sqrt(5))/2,fs=1/zi,xc=[new z(-zi,fs,0),new z(zi,fs,0),new z(-fs,0,zi),new z(fs,0,zi),new z(0,zi,-fs),new z(0,zi,fs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],sm=new z;class rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=sm}=r;Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va,Wa,qa),this._renderer.xr.enabled=Xa,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Wi,format:xn,colorSpace:Es,depthBuffer:!1},s=vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rm(r)),this._blurMaterial=am(r,e,t)}return s}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,n,s,r){const l=new Un(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(gc),f.toneMapping=Mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const m=new Us({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),x=new Dt(new Ai,m);let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(gc),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const E=this._cubeSize;kr(s,v*E,_>2?E:0,E,E),f.setRenderTarget(s),p&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===bs||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ga)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xc[(s-r-1)%xc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Dt(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ki-1),m=r/g,x=isFinite(r)?1+Math.floor(h*m):ki;x>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ki}`);const p=[];let y=0;for(let T=0;T<ki;++T){const A=T/m,b=Math.exp(-A*A/2);p.push(b),T===0?y+=b:T<x&&(y+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const v=this._sizeLods[s],E=3*v*(s>_-gs?s-_+gs:0),M=4*(this._cubeSize-v);kr(t,E,M,3*v,2*v),l.setRenderTarget(t),l.render(f,Ga)}}function rm(i){const e=[],t=[],n=[];let s=i;const r=i-gs+1+mc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-gs?l=mc[a-i+gs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,m=3,x=2,p=1,y=new Float32Array(m*g*d),_=new Float32Array(x*g*d),v=new Float32Array(p*g*d);for(let M=0;M<d;M++){const T=M%3*2/3-1,A=M>2?0:-1,b=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];y.set(b,m*g*M),_.set(u,x*g*M);const w=[M,M,M,M,M,M];v.set(w,p*g*M)}const E=new Nt;E.setAttribute("position",new Tt(y,m)),E.setAttribute("uv",new Tt(_,x)),E.setAttribute("faceIndex",new Tt(v,p)),e.push(E),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vc(i,e,t){const n=new ci(i,e,t);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function am(i,e,t){const n=new Float32Array(ki),s=new z(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function _c(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function yc(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Pl(){return`

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
	`}function om(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===bo||l===So,h=l===bs||l===Ss;if(c||h){let f=e.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new rl(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new rl(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function lm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cm(i,e,t,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,g=f.attributes.position;let m=0;if(d!==null){const y=d.array;m=d.version;for(let _=0,v=y.length;_<v;_+=3){const E=y[_+0],M=y[_+1],T=y[_+2];u.push(E,M,M,T,T,E)}}else if(g!==void 0){const y=g.array;m=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){const E=_+0,M=_+1,T=_+2;u.push(E,M,M,T,T,E)}}else return;const x=new(Gh(u)?Sl:Ts)(u,1);x.version=m;const p=r.get(f);p&&e.remove(p),r.set(f,x)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function hm(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,u*a,g),t.update(d,n,g))}function h(u,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,g);let x=0;for(let p=0;p<g;p++)x+=d[p];t.update(x,n,1)}function f(u,d,g,m){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<u.length;p++)c(u[p]/a,d[p],m[p]);else{x.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,m,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*m[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function fm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function um(i,e,t){const n=new WeakMap,s=new yt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let b=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;d===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let v=o.attributes.position.count*_,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const M=new Float32Array(v*E*4*f),T=new Vh(M,v,E,f);T.type=Fn,T.needsUpdate=!0;const A=_*4;for(let w=0;w<f;w++){const D=x[w],F=p[w],B=y[w],k=v*E*4*w;for(let N=0;N<D.count;N++){const U=N*A;d===!0&&(s.fromBufferAttribute(D,N),M[k+U+0]=s.x,M[k+U+1]=s.y,M[k+U+2]=s.z,M[k+U+3]=0),g===!0&&(s.fromBufferAttribute(F,N),M[k+U+4]=s.x,M[k+U+5]=s.y,M[k+U+6]=s.z,M[k+U+7]=0),m===!0&&(s.fromBufferAttribute(B,N),M[k+U+8]=s.x,M[k+U+9]=s.y,M[k+U+10]=s.z,M[k+U+11]=B.itemSize===4?s.w:1)}}u={count:f,texture:T,size:new Je(v,E)},n.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function dm(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const of=new hn,Mc=new Al(1,1),lf=new Vh,cf=new vu,hf=new Yh,wc=[],bc=[],Sc=new Float32Array(16),Ec=new Float32Array(9),Ac=new Float32Array(4);function Ns(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=wc[s];if(r===void 0&&(r=new Float32Array(s),wc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ha(i,e){let t=bc[e];t===void 0&&(t=new Int32Array(e),bc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Ac.set(n),i.uniformMatrix2fv(this.addr,!1,Ac),nn(t,n)}}function _m(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Ec.set(n),i.uniformMatrix3fv(this.addr,!1,Ec),nn(t,n)}}function ym(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Sc.set(n),i.uniformMatrix4fv(this.addr,!1,Sc),nn(t,n)}}function Mm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function Em(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function Cm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mc.compareFunction=Hh,r=Mc):r=of,t.setTexture2D(e||r,s)}function Lm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||cf,s)}function Pm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hf,s)}function Dm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lf,s)}function Im(i){switch(i){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return xm;case 35674:return vm;case 35675:return _m;case 35676:return ym;case 5124:case 35670:return Mm;case 35667:case 35671:return wm;case 35668:case 35672:return bm;case 35669:case 35673:return Sm;case 5125:return Em;case 36294:return Am;case 36295:return Tm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Dm}}function Um(i,e){i.uniform1fv(this.addr,e)}function Fm(i,e){const t=Ns(e,this.size,2);i.uniform2fv(this.addr,t)}function Nm(i,e){const t=Ns(e,this.size,3);i.uniform3fv(this.addr,t)}function zm(i,e){const t=Ns(e,this.size,4);i.uniform4fv(this.addr,t)}function Om(i,e){const t=Ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function km(i,e){const t=Ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bm(i,e){const t=Ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hm(i,e){i.uniform1iv(this.addr,e)}function Gm(i,e){i.uniform2iv(this.addr,e)}function Vm(i,e){i.uniform3iv(this.addr,e)}function Wm(i,e){i.uniform4iv(this.addr,e)}function qm(i,e){i.uniform1uiv(this.addr,e)}function Xm(i,e){i.uniform2uiv(this.addr,e)}function $m(i,e){i.uniform3uiv(this.addr,e)}function Ym(i,e){i.uniform4uiv(this.addr,e)}function Km(i,e,t){const n=this.cache,s=e.length,r=ha(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||of,r[a])}function jm(i,e,t){const n=this.cache,s=e.length,r=ha(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||cf,r[a])}function Zm(i,e,t){const n=this.cache,s=e.length,r=ha(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||hf,r[a])}function Jm(i,e,t){const n=this.cache,s=e.length,r=ha(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||lf,r[a])}function Qm(i){switch(i){case 5126:return Um;case 35664:return Fm;case 35665:return Nm;case 35666:return zm;case 35674:return Om;case 35675:return km;case 35676:return Bm;case 5124:case 35670:return Hm;case 35667:case 35671:return Gm;case 35668:case 35672:return Vm;case 35669:case 35673:return Wm;case 5125:return qm;case 36294:return Xm;case 36295:return $m;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}class eg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Im(t.type)}}class tg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qm(t.type)}}class ng{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Tc(i,e){i.seq.push(e),i.map[e.id]=e}function ig(i,e,t){const n=i.name,s=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),a=$a.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Tc(t,c===void 0?new eg(o,i,e):new tg(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new ng(o),Tc(t,f)),t=f}}}class Qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ig(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Rc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const sg=37297;let rg=0;function ag(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Cc=new ft;function og(i){At._getMatrix(Cc,At.workingColorSpace,i);const e=`mat3( ${Cc.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(i)){case ia:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ag(i.getShaderSource(e),o)}else return r}function lg(i,e){const t=og(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cg(i,e){let t;switch(e){case Yf:t="Linear";break;case Kf:t="Reinhard";break;case jf:t="Cineon";break;case Ph:t="ACESFilmic";break;case Jf:t="AgX";break;case Qf:t="Neutral";break;case Zf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Br=new z;function hg(){At.getLuminanceCoefficients(Br);const i=Br.x.toFixed(4),e=Br.y.toFixed(4),t=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function ug(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qs(i){return i!==""}function Pc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(i){return i.replace(pg,gg)}const mg=new Map;function gg(i,e){let t=ht[e];if(t===void 0){const n=mg.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}const xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(i){return i.replace(xg,vg)}function vg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function _g(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function yg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ss:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function wg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ml:e="ENVMAP_BLENDING_MULTIPLY";break;case Xf:e="ENVMAP_BLENDING_MIX";break;case $f:e="ENVMAP_BLENDING_ADD";break}return e}function bg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=_g(t),c=yg(t),h=Mg(t),f=wg(t),u=bg(t),d=fg(t),g=ug(r),m=s.createProgram();let x,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(x=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?ht.tonemapping_pars_fragment:"",t.toneMapping!==Mi?cg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,lg("linearToOutputTexel",t.outputColorSpace),hg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),a=al(a),a=Pc(a,t),a=Dc(a,t),o=al(o),o=Pc(o,t),o=Dc(o,t),a=Ic(a),o=Ic(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+x+a,v=y+p+o,E=Rc(s,s.VERTEX_SHADER,_),M=Rc(s,s.FRAGMENT_SHADER,v);s.attachShader(m,E),s.attachShader(m,M),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(D){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(m)||"",B=s.getShaderInfoLog(E)||"",k=s.getShaderInfoLog(M)||"",N=F.trim(),U=B.trim(),I=k.trim();let P=!0,V=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(P=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,M);else{const H=Lc(s,E,"vertex"),ee=Lc(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+H+`
`+ee)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||I==="")&&(V=!1);V&&(D.diagnostics={runnable:P,programLog:N,vertexShader:{log:U,prefix:x},fragmentShader:{log:I,prefix:p}})}s.deleteShader(E),s.deleteShader(M),A=new Qr(s,m),b=dg(s,m)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(m,sg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=M,this}let Eg=0;class Ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tg(e),t.set(e,n)),n}}class Tg{constructor(e){this.id=Eg++,this.code=e,this.usedTimes=0}}function Rg(i,e,t,n,s,r,a){const o=new Wh,l=new Ag,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return c.add(b),b===0?"uv":`uv${b}`}function x(b,w,D,F,B){const k=F.fog,N=B.geometry,U=b.isMeshStandardMaterial?F.environment:null,I=(b.isMeshStandardMaterial?t:e).get(b.envMap||U),P=I&&I.mapping===aa?I.image.height:null,V=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const H=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=H!==void 0?H.length:0;let ne=0;N.morphAttributes.position!==void 0&&(ne=1),N.morphAttributes.normal!==void 0&&(ne=2),N.morphAttributes.color!==void 0&&(ne=3);let ue,de,pe,$;if(V){const Ve=$n[V];ue=Ve.vertexShader,de=Ve.fragmentShader}else ue=b.vertexShader,de=b.fragmentShader,l.update(b),pe=l.getVertexShaderID(b),$=l.getFragmentShaderID(b);const j=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,Ae=B.isBatchedMesh===!0,Ge=!!b.map,ae=!!b.matcap,L=!!I,Te=!!b.aoMap,me=!!b.lightMap,fe=!!b.bumpMap,xe=!!b.normalMap,Le=!!b.displacementMap,ge=!!b.emissiveMap,ze=!!b.metalnessMap,st=!!b.roughnessMap,et=b.anisotropy>0,C=b.clearcoat>0,S=b.dispersion>0,X=b.iridescence>0,re=b.sheen>0,le=b.transmission>0,se=et&&!!b.anisotropyMap,ke=C&&!!b.clearcoatMap,ve=C&&!!b.clearcoatNormalMap,Oe=C&&!!b.clearcoatRoughnessMap,Se=X&&!!b.iridescenceMap,he=X&&!!b.iridescenceThicknessMap,ye=re&&!!b.sheenColorMap,Xe=re&&!!b.sheenRoughnessMap,G=!!b.specularMap,K=!!b.specularColorMap,be=!!b.specularIntensityMap,O=le&&!!b.transmissionMap,ie=le&&!!b.thicknessMap,oe=!!b.gradientMap,Q=!!b.alphaMap,Y=b.alphaTest>0,Z=!!b.alphaHash,Me=!!b.extensions;let Pe=Mi;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const Ue={shaderID:V,shaderType:b.type,shaderName:b.name,vertexShader:ue,fragmentShader:de,defines:b.defines,customVertexShaderID:pe,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Es,alphaToCoverage:!!b.alphaToCoverage,map:Ge,matcap:ae,envMap:L,envMapMode:L&&I.mapping,envMapCubeUVHeight:P,aoMap:Te,lightMap:me,bumpMap:fe,normalMap:xe,displacementMap:u&&Le,emissiveMap:ge,normalMapObjectSpace:xe&&b.normalMapType===nu,normalMapTangentSpace:xe&&b.normalMapType===wl,metalnessMap:ze,roughnessMap:st,anisotropy:et,anisotropyMap:se,clearcoat:C,clearcoatMap:ke,clearcoatNormalMap:ve,clearcoatRoughnessMap:Oe,dispersion:S,iridescence:X,iridescenceMap:Se,iridescenceThicknessMap:he,sheen:re,sheenColorMap:ye,sheenRoughnessMap:Xe,specularMap:G,specularColorMap:K,specularIntensityMap:be,transmission:le,transmissionMap:O,thicknessMap:ie,gradientMap:oe,opaque:b.transparent===!1&&b.blending===vs&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:Y,alphaHash:Z,combine:b.combine,mapUv:Ge&&m(b.map.channel),aoMapUv:Te&&m(b.aoMap.channel),lightMapUv:me&&m(b.lightMap.channel),bumpMapUv:fe&&m(b.bumpMap.channel),normalMapUv:xe&&m(b.normalMap.channel),displacementMapUv:Le&&m(b.displacementMap.channel),emissiveMapUv:ge&&m(b.emissiveMap.channel),metalnessMapUv:ze&&m(b.metalnessMap.channel),roughnessMapUv:st&&m(b.roughnessMap.channel),anisotropyMapUv:se&&m(b.anisotropyMap.channel),clearcoatMapUv:ke&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&m(b.sheenRoughnessMap.channel),specularMapUv:G&&m(b.specularMap.channel),specularColorMapUv:K&&m(b.specularColorMap.channel),specularIntensityMapUv:be&&m(b.specularIntensityMap.channel),transmissionMapUv:O&&m(b.transmissionMap.channel),thicknessMapUv:ie&&m(b.thicknessMap.channel),alphaMapUv:Q&&m(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xe||et),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!N.attributes.uv&&(Ge||Q),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:B.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ge&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===Ft,decodeVideoTextureEmissive:ge&&b.emissiveMap.isVideoTexture===!0&&At.getTransfer(b.emissiveMap.colorSpace)===Ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pn,flipSided:b.side===vn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Me&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&b.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function p(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)w.push(D),w.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(y(w,b),_(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function y(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),w.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const w=g[b.type];let D;if(w){const F=$n[w];D=Du.clone(F.uniforms)}else D=b.uniforms;return D}function E(b,w){let D;for(let F=0,B=h.length;F<B;F++){const k=h[F];if(k.cacheKey===w){D=k,++D.usedTimes;break}}return D===void 0&&(D=new Sg(i,w,b,r),h.push(D)),D}function M(b){if(--b.usedTimes===0){const w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),b.destroy()}}function T(b){l.remove(b)}function A(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:A}}function Cg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Lg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,u,d,g,m,x){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:m,group:x},i[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=m,p.group=x),e++,p}function o(f,u,d,g,m,x){const p=a(f,u,d,g,m,x);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,u,d,g,m,x){const p=a(f,u,d,g,m,x);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||Lg),n.length>1&&n.sort(u||Fc),s.length>1&&s.sort(u||Fc)}function h(){for(let f=e,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Pg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Nc,i.set(n,[a])):s>=r.length?(a=new Nc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new je};break;case"SpotLight":t={position:new z,direction:new z,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Ig(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ug=0;function Fg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ng(i){const e=new Dg,t=Ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,r=new Rt,a=new Rt;function o(c){let h=0,f=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,m=0,x=0,p=0,y=0,_=0,v=0,E=0,M=0,T=0;c.sort(Fg);for(let b=0,w=c.length;b<w;b++){const D=c[b],F=D.color,B=D.intensity,k=D.distance,N=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*B,f+=F.g*B,u+=F.b*B;else if(D.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(D.sh.coefficients[U],B);T++}else if(D.isDirectionalLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const I=D.shadow,P=t.get(D);P.shadowIntensity=I.intensity,P.shadowBias=I.bias,P.shadowNormalBias=I.normalBias,P.shadowRadius=I.radius,P.shadowMapSize=I.mapSize,n.directionalShadow[d]=P,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=D.shadow.matrix,y++}n.directional[d]=U,d++}else if(D.isSpotLight){const U=e.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(F).multiplyScalar(B),U.distance=k,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,n.spot[m]=U;const I=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,I.updateMatrices(D),D.castShadow&&M++),n.spotLightMatrix[m]=I.matrix,D.castShadow){const P=t.get(D);P.shadowIntensity=I.intensity,P.shadowBias=I.bias,P.shadowNormalBias=I.normalBias,P.shadowRadius=I.radius,P.shadowMapSize=I.mapSize,n.spotShadow[m]=P,n.spotShadowMap[m]=N,v++}m++}else if(D.isRectAreaLight){const U=e.get(D);U.color.copy(F).multiplyScalar(B),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),n.rectArea[x]=U,x++}else if(D.isPointLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){const I=D.shadow,P=t.get(D);P.shadowIntensity=I.intensity,P.shadowBias=I.bias,P.shadowNormalBias=I.normalBias,P.shadowRadius=I.radius,P.shadowMapSize=I.mapSize,P.shadowCameraNear=I.camera.near,P.shadowCameraFar=I.camera.far,n.pointShadow[g]=P,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=D.shadow.matrix,_++}n.point[g]=U,g++}else if(D.isHemisphereLight){const U=e.get(D);U.skyColor.copy(D.color).multiplyScalar(B),U.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[p]=U,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==m||A.rectAreaLength!==x||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==_||A.numSpotShadows!==v||A.numSpotMaps!==E||A.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=x,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,A.directionalLength=d,A.pointLength=g,A.spotLength=m,A.rectAreaLength=x,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=_,A.numSpotShadows=v,A.numSpotMaps=E,A.numLightProbes=T,n.version=Ug++)}function l(c,h){let f=0,u=0,d=0,g=0,m=0;const x=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const _=c[p];if(_.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),f++}else if(_.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),d++}else if(_.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),a.identity(),r.copy(_.matrixWorld),r.premultiply(x),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),u++}else if(_.isHemisphereLight){const v=n.hemi[m];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(x),m++}}}return{setup:o,setupView:l,state:n}}function zc(i){const e=new Ng(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function zg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new zc(i),e.set(s,[o])):r>=a.length?(o=new zc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kg=`uniform sampler2D shadow_pass;
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
}`;function Bg(i,e,t){let n=new oa;const s=new Je,r=new Je,a=new yt,o=new tf({depthPacking:Bh}),l=new od,c={},h=t.maxTextureSize,f={[wi]:vn,[vn]:wi,[pn]:pn},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Og,fragmentShader:kg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Dt(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let p=this.type;this.render=function(M,T,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;const b=i.getRenderTarget(),w=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(yi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==si&&this.type===si,k=p===si&&this.type!==si;for(let N=0,U=M.length;N<U;N++){const I=M[N],P=I.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);const V=P.getFrameExtents();if(s.multiply(V),r.copy(P.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,P.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,P.mapSize.y=r.y)),P.map===null||B===!0||k===!0){const ee=this.type!==si?{minFilter:cn,magFilter:cn}:{};P.map!==null&&P.map.dispose(),P.map=new ci(s.x,s.y,ee),P.map.texture.name=I.name+".shadowMap",P.camera.updateProjectionMatrix()}i.setRenderTarget(P.map),i.clear();const H=P.getViewportCount();for(let ee=0;ee<H;ee++){const ne=P.getViewport(ee);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),F.viewport(a),P.updateMatrices(I,ee),n=P.getFrustum(),v(T,A,P.camera,I,this.type)}P.isPointLightShadow!==!0&&this.type===si&&y(P,A),P.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(b,w,D)};function y(M,T){const A=e.update(m);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ci(s.x,s.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,A,u,m,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,A,d,m,null)}function _(M,T,A,b){let w=null;const D=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)w=D;else if(w=A.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const F=w.uuid,B=T.uuid;let k=c[F];k===void 0&&(k={},c[F]=k);let N=k[B];N===void 0&&(N=w.clone(),k[B]=N,T.addEventListener("dispose",E)),w=N}if(w.visible=T.visible,w.wireframe=T.wireframe,b===si?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:f[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,A.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=i.properties.get(w);F.light=A}return w}function v(M,T,A,b,w){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===si)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const B=e.update(M),k=M.material;if(Array.isArray(k)){const N=B.groups;for(let U=0,I=N.length;U<I;U++){const P=N[U],V=k[P.materialIndex];if(V&&V.visible){const H=_(M,V,b,w);M.onBeforeShadow(i,M,T,A,B,H,P),i.renderBufferDirect(A,null,B,H,M,P),M.onAfterShadow(i,M,T,A,B,H,P)}}}else if(k.visible){const N=_(M,k,b,w);M.onBeforeShadow(i,M,T,A,B,N,null),i.renderBufferDirect(A,null,B,N,M,null),M.onAfterShadow(i,M,T,A,B,N,null)}}const F=M.children;for(let B=0,k=F.length;B<k;B++)v(F[B],T,A,b,w)}function E(M){M.target.removeEventListener("dispose",E);for(const A in c){const b=c[A],w=M.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const Hg={[go]:xo,[vo]:Mo,[_o]:wo,[ws]:yo,[xo]:go,[Mo]:vo,[wo]:_o,[yo]:ws};function Gg(i,e){function t(){let O=!1;const ie=new yt;let oe=null;const Q=new yt(0,0,0,0);return{setMask:function(Y){oe!==Y&&!O&&(i.colorMask(Y,Y,Y,Y),oe=Y)},setLocked:function(Y){O=Y},setClear:function(Y,Z,Me,Pe,Ue){Ue===!0&&(Y*=Pe,Z*=Pe,Me*=Pe),ie.set(Y,Z,Me,Pe),Q.equals(ie)===!1&&(i.clearColor(Y,Z,Me,Pe),Q.copy(ie))},reset:function(){O=!1,oe=null,Q.set(-1,0,0,0)}}}function n(){let O=!1,ie=!1,oe=null,Q=null,Y=null;return{setReversed:function(Z){if(ie!==Z){const Me=e.get("EXT_clip_control");Z?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ie=Z;const Pe=Y;Y=null,this.setClear(Pe)}},getReversed:function(){return ie},setTest:function(Z){Z?j(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(Z){oe!==Z&&!O&&(i.depthMask(Z),oe=Z)},setFunc:function(Z){if(ie&&(Z=Hg[Z]),Q!==Z){switch(Z){case go:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case _o:i.depthFunc(i.EQUAL);break;case yo:i.depthFunc(i.GEQUAL);break;case Mo:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=Z}},setLocked:function(Z){O=Z},setClear:function(Z){Y!==Z&&(ie&&(Z=1-Z),i.clearDepth(Z),Y=Z)},reset:function(){O=!1,oe=null,Q=null,Y=null,ie=!1}}}function s(){let O=!1,ie=null,oe=null,Q=null,Y=null,Z=null,Me=null,Pe=null,Ue=null;return{setTest:function(Ve){O||(Ve?j(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(Ve){ie!==Ve&&!O&&(i.stencilMask(Ve),ie=Ve)},setFunc:function(Ve,at,Xt){(oe!==Ve||Q!==at||Y!==Xt)&&(i.stencilFunc(Ve,at,Xt),oe=Ve,Q=at,Y=Xt)},setOp:function(Ve,at,Xt){(Z!==Ve||Me!==at||Pe!==Xt)&&(i.stencilOp(Ve,at,Xt),Z=Ve,Me=at,Pe=Xt)},setLocked:function(Ve){O=Ve},setClear:function(Ve){Ue!==Ve&&(i.clearStencil(Ve),Ue=Ve)},reset:function(){O=!1,ie=null,oe=null,Q=null,Y=null,Z=null,Me=null,Pe=null,Ue=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],g=null,m=!1,x=null,p=null,y=null,_=null,v=null,E=null,M=null,T=new je(0,0,0),A=0,b=!1,w=null,D=null,F=null,B=null,k=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,I=0;const P=i.getParameter(i.VERSION);P.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(P)[1]),U=I>=1):P.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),U=I>=2);let V=null,H={};const ee=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ue=new yt().fromArray(ee),de=new yt().fromArray(ne);function pe(O,ie,oe,Q){const Y=new Uint8Array(4),Z=i.createTexture();i.bindTexture(O,Z),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<oe;Me++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,Y):i.texImage2D(ie+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Y);return Z}const $={};$[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(ws),fe(!1),xe(Ol),j(i.CULL_FACE),Te(yi);function j(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ce(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function we(O,ie){return f[O]!==ie?(i.bindFramebuffer(O,ie),f[O]=ie,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ie),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ae(O,ie){let oe=d,Q=!1;if(O){oe=u.get(ie),oe===void 0&&(oe=[],u.set(ie,oe));const Y=O.textures;if(oe.length!==Y.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Me=Y.length;Z<Me;Z++)oe[Z]=i.COLOR_ATTACHMENT0+Z;oe.length=Y.length,Q=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,Q=!0);Q&&i.drawBuffers(oe)}function Ge(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const ae={[Oi]:i.FUNC_ADD,[Cf]:i.FUNC_SUBTRACT,[Lf]:i.FUNC_REVERSE_SUBTRACT};ae[Pf]=i.MIN,ae[Df]=i.MAX;const L={[If]:i.ZERO,[Uf]:i.ONE,[Ff]:i.SRC_COLOR,[po]:i.SRC_ALPHA,[Hf]:i.SRC_ALPHA_SATURATE,[kf]:i.DST_COLOR,[zf]:i.DST_ALPHA,[Nf]:i.ONE_MINUS_SRC_COLOR,[mo]:i.ONE_MINUS_SRC_ALPHA,[Bf]:i.ONE_MINUS_DST_COLOR,[Of]:i.ONE_MINUS_DST_ALPHA,[Gf]:i.CONSTANT_COLOR,[Vf]:i.ONE_MINUS_CONSTANT_COLOR,[Wf]:i.CONSTANT_ALPHA,[qf]:i.ONE_MINUS_CONSTANT_ALPHA};function Te(O,ie,oe,Q,Y,Z,Me,Pe,Ue,Ve){if(O===yi){m===!0&&(ce(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),O!==Rf){if(O!==x||Ve!==b){if((p!==Oi||v!==Oi)&&(i.blendEquation(i.FUNC_ADD),p=Oi,v=Oi),Ve)switch(O){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.ONE,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,_=null,E=null,M=null,T.set(0,0,0),A=0,x=O,b=Ve}return}Y=Y||ie,Z=Z||oe,Me=Me||Q,(ie!==p||Y!==v)&&(i.blendEquationSeparate(ae[ie],ae[Y]),p=ie,v=Y),(oe!==y||Q!==_||Z!==E||Me!==M)&&(i.blendFuncSeparate(L[oe],L[Q],L[Z],L[Me]),y=oe,_=Q,E=Z,M=Me),(Pe.equals(T)===!1||Ue!==A)&&(i.blendColor(Pe.r,Pe.g,Pe.b,Ue),T.copy(Pe),A=Ue),x=O,b=!1}function me(O,ie){O.side===pn?ce(i.CULL_FACE):j(i.CULL_FACE);let oe=O.side===vn;ie&&(oe=!oe),fe(oe),O.blending===vs&&O.transparent===!1?Te(yi):Te(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Q=O.stencilWrite;o.setTest(Q),Q&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ge(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(O){w!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),w=O)}function xe(O){O!==Af?(j(i.CULL_FACE),O!==D&&(O===Ol?i.cullFace(i.BACK):O===Tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),D=O}function Le(O){O!==F&&(U&&i.lineWidth(O),F=O)}function ge(O,ie,oe){O?(j(i.POLYGON_OFFSET_FILL),(B!==ie||k!==oe)&&(i.polygonOffset(ie,oe),B=ie,k=oe)):ce(i.POLYGON_OFFSET_FILL)}function ze(O){O?j(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function st(O){O===void 0&&(O=i.TEXTURE0+N-1),V!==O&&(i.activeTexture(O),V=O)}function et(O,ie,oe){oe===void 0&&(V===null?oe=i.TEXTURE0+N-1:oe=V);let Q=H[oe];Q===void 0&&(Q={type:void 0,texture:void 0},H[oe]=Q),(Q.type!==O||Q.texture!==ie)&&(V!==oe&&(i.activeTexture(oe),V=oe),i.bindTexture(O,ie||$[O]),Q.type=O,Q.texture=ie)}function C(){const O=H[V];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(O){ue.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ue.copy(O))}function Xe(O){de.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),de.copy(O))}function G(O,ie){let oe=c.get(ie);oe===void 0&&(oe=new WeakMap,c.set(ie,oe));let Q=oe.get(O);Q===void 0&&(Q=i.getUniformBlockIndex(ie,O.name),oe.set(O,Q))}function K(O,ie){const Q=c.get(ie).get(O);l.get(ie)!==Q&&(i.uniformBlockBinding(ie,Q,O.__bindingPointIndex),l.set(ie,Q))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},V=null,H={},f={},u=new WeakMap,d=[],g=null,m=!1,x=null,p=null,y=null,_=null,v=null,E=null,M=null,T=new je(0,0,0),A=0,b=!1,w=null,D=null,F=null,B=null,k=null,ue.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ce,bindFramebuffer:we,drawBuffers:Ae,useProgram:Ge,setBlending:Te,setMaterial:me,setFlipSided:fe,setCullFace:xe,setLineWidth:Le,setPolygonOffset:ge,setScissorTest:ze,activeTexture:st,bindTexture:et,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:X,texImage2D:Se,texImage3D:he,updateUBOMapping:G,uniformBlockBinding:K,texStorage2D:ve,texStorage3D:Oe,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:se,compressedTexSubImage3D:ke,scissor:ye,viewport:Xe,reset:be}}function Vg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return d?new OffscreenCanvas(C,S):or("canvas")}function m(C,S,X){let re=1;const le=et(C);if((le.width>X||le.height>X)&&(re=X/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(re*le.width),ke=Math.floor(re*le.height);f===void 0&&(f=g(se,ke));const ve=S?g(se,ke):f;return ve.width=se,ve.height=ke,ve.getContext("2d").drawImage(C,0,0,se,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+se+"x"+ke+")."),ve}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),C;return C}function x(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,S,X,re,le=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=S;if(S===i.RED&&(X===i.FLOAT&&(se=i.R32F),X===i.HALF_FLOAT&&(se=i.R16F),X===i.UNSIGNED_BYTE&&(se=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.R8UI),X===i.UNSIGNED_SHORT&&(se=i.R16UI),X===i.UNSIGNED_INT&&(se=i.R32UI),X===i.BYTE&&(se=i.R8I),X===i.SHORT&&(se=i.R16I),X===i.INT&&(se=i.R32I)),S===i.RG&&(X===i.FLOAT&&(se=i.RG32F),X===i.HALF_FLOAT&&(se=i.RG16F),X===i.UNSIGNED_BYTE&&(se=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RG8UI),X===i.UNSIGNED_SHORT&&(se=i.RG16UI),X===i.UNSIGNED_INT&&(se=i.RG32UI),X===i.BYTE&&(se=i.RG8I),X===i.SHORT&&(se=i.RG16I),X===i.INT&&(se=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RGB8UI),X===i.UNSIGNED_SHORT&&(se=i.RGB16UI),X===i.UNSIGNED_INT&&(se=i.RGB32UI),X===i.BYTE&&(se=i.RGB8I),X===i.SHORT&&(se=i.RGB16I),X===i.INT&&(se=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),X===i.UNSIGNED_INT&&(se=i.RGBA32UI),X===i.BYTE&&(se=i.RGBA8I),X===i.SHORT&&(se=i.RGBA16I),X===i.INT&&(se=i.RGBA32I)),S===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),S===i.RGBA){const ke=le?ia:At.getTransfer(re);X===i.FLOAT&&(se=i.RGBA32F),X===i.HALF_FLOAT&&(se=i.RGBA16F),X===i.UNSIGNED_BYTE&&(se=ke===Ft?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function v(C,S){let X;return C?S===null||S===bi||S===sr?X=i.DEPTH24_STENCIL8:S===Fn?X=i.DEPTH32F_STENCIL8:S===ir&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===bi||S===sr?X=i.DEPTH_COMPONENT24:S===Fn?X=i.DEPTH_COMPONENT32F:S===ir&&(X=i.DEPTH_COMPONENT16),X}function E(C,S){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function M(C){const S=C.target;S.removeEventListener("dispose",M),A(S),S.isVideoTexture&&h.delete(S)}function T(C){const S=C.target;S.removeEventListener("dispose",T),w(S)}function A(C){const S=n.get(C);if(S.__webglInit===void 0)return;const X=C.source,re=u.get(X);if(re){const le=re[S.__cacheKey];le.usedTimes--,le.usedTimes===0&&b(C),Object.keys(re).length===0&&u.delete(X)}n.remove(C)}function b(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const X=C.source,re=u.get(X);delete re[S.__cacheKey],a.memory.textures--}function w(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let le=0;le<S.__webglFramebuffer[re].length;le++)i.deleteFramebuffer(S.__webglFramebuffer[re][le]);else i.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)i.deleteFramebuffer(S.__webglFramebuffer[re]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=C.textures;for(let re=0,le=X.length;re<le;re++){const se=n.get(X[re]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(X[re])}n.remove(C)}let D=0;function F(){D=0}function B(){const C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function k(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function N(C,S){const X=n.get(C);if(C.isVideoTexture&&ze(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(X,C,S);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function U(C,S){const X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){$(X,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function I(C,S){const X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){$(X,C,S);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function P(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){j(X,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const V={[Eo]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[Ao]:i.MIRRORED_REPEAT},H={[cn]:i.NEAREST,[eu]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},ee={[iu]:i.NEVER,[cu]:i.ALWAYS,[su]:i.LESS,[Hh]:i.LEQUAL,[ru]:i.EQUAL,[lu]:i.GEQUAL,[au]:i.GREATER,[ou]:i.NOTEQUAL};function ne(C,S){if(S.type===Fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===bn||S.magFilter===ma||S.magFilter===xr||S.magFilter===ai||S.minFilter===bn||S.minFilter===ma||S.minFilter===xr||S.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,V[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,V[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,V[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,H[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,H[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ee[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===cn||S.minFilter!==xr&&S.minFilter!==ai||S.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ue(C,S){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",M));const re=S.source;let le=u.get(re);le===void 0&&(le={},u.set(re,le));const se=k(S);if(se!==C.__cacheKey){le[se]===void 0&&(le[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),le[se].usedTimes++;const ke=le[C.__cacheKey];ke!==void 0&&(le[C.__cacheKey].usedTimes--,ke.usedTimes===0&&b(S)),C.__cacheKey=se,C.__webglTexture=le[se].texture}return X}function de(C,S,X){return Math.floor(Math.floor(C/X)/S)}function pe(C,S,X,re){const se=C.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,X,re,S.data);else{se.sort((he,ye)=>he.start-ye.start);let ke=0;for(let he=1;he<se.length;he++){const ye=se[ke],Xe=se[he],G=ye.start+ye.count,K=de(Xe.start,S.width,4),be=de(ye.start,S.width,4);Xe.start<=G+1&&K===be&&de(Xe.start+Xe.count-1,S.width,4)===K?ye.count=Math.max(ye.count,Xe.start+Xe.count-ye.start):(++ke,se[ke]=Xe)}se.length=ke+1;const ve=i.getParameter(i.UNPACK_ROW_LENGTH),Oe=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let he=0,ye=se.length;he<ye;he++){const Xe=se[he],G=Math.floor(Xe.start/4),K=Math.ceil(Xe.count/4),be=G%S.width,O=Math.floor(G/S.width),ie=K,oe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,be,O,ie,oe,X,re,S.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ve),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function $(C,S,X){let re=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=i.TEXTURE_3D);const le=ue(C,S),se=S.source;t.bindTexture(re,C.__webglTexture,i.TEXTURE0+X);const ke=n.get(se);if(se.version!==ke.__version||le===!0){t.activeTexture(i.TEXTURE0+X);const ve=At.getPrimaries(At.workingColorSpace),Oe=S.colorSpace===Gn?null:At.getPrimaries(S.colorSpace),Se=S.colorSpace===Gn||ve===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let he=m(S.image,!1,s.maxTextureSize);he=st(S,he);const ye=r.convert(S.format,S.colorSpace),Xe=r.convert(S.type);let G=_(S.internalFormat,ye,Xe,S.colorSpace,S.isVideoTexture);ne(re,S);let K;const be=S.mipmaps,O=S.isVideoTexture!==!0,ie=ke.__version===void 0||le===!0,oe=se.dataReady,Q=E(S,he);if(S.isDepthTexture)G=v(S.format===ar,S.type),ie&&(O?t.texStorage2D(i.TEXTURE_2D,1,G,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,G,he.width,he.height,0,ye,Xe,null));else if(S.isDataTexture)if(be.length>0){O&&ie&&t.texStorage2D(i.TEXTURE_2D,Q,G,be[0].width,be[0].height);for(let Y=0,Z=be.length;Y<Z;Y++)K=be[Y],O?oe&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,K.width,K.height,ye,Xe,K.data):t.texImage2D(i.TEXTURE_2D,Y,G,K.width,K.height,0,ye,Xe,K.data);S.generateMipmaps=!1}else O?(ie&&t.texStorage2D(i.TEXTURE_2D,Q,G,he.width,he.height),oe&&pe(S,he,ye,Xe)):t.texImage2D(i.TEXTURE_2D,0,G,he.width,he.height,0,ye,Xe,he.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Q,G,be[0].width,be[0].height,he.depth);for(let Y=0,Z=be.length;Y<Z;Y++)if(K=be[Y],S.format!==xn)if(ye!==null)if(O){if(oe)if(S.layerUpdates.size>0){const Me=pc(K.width,K.height,S.format,S.type);for(const Pe of S.layerUpdates){const Ue=K.data.subarray(Pe*Me/K.data.BYTES_PER_ELEMENT,(Pe+1)*Me/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,Pe,K.width,K.height,1,ye,Ue)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,K.width,K.height,he.depth,ye,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,G,K.width,K.height,he.depth,0,K.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,K.width,K.height,he.depth,ye,Xe,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,G,K.width,K.height,he.depth,0,ye,Xe,K.data)}else{O&&ie&&t.texStorage2D(i.TEXTURE_2D,Q,G,be[0].width,be[0].height);for(let Y=0,Z=be.length;Y<Z;Y++)K=be[Y],S.format!==xn?ye!==null?O?oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,K.width,K.height,ye,K.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,G,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?oe&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,K.width,K.height,ye,Xe,K.data):t.texImage2D(i.TEXTURE_2D,Y,G,K.width,K.height,0,ye,Xe,K.data)}else if(S.isDataArrayTexture)if(O){if(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Q,G,he.width,he.height,he.depth),oe)if(S.layerUpdates.size>0){const Y=pc(he.width,he.height,S.format,S.type);for(const Z of S.layerUpdates){const Me=he.data.subarray(Z*Y/he.data.BYTES_PER_ELEMENT,(Z+1)*Y/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,he.width,he.height,1,ye,Xe,Me)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ye,Xe,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,G,he.width,he.height,he.depth,0,ye,Xe,he.data);else if(S.isData3DTexture)O?(ie&&t.texStorage3D(i.TEXTURE_3D,Q,G,he.width,he.height,he.depth),oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ye,Xe,he.data)):t.texImage3D(i.TEXTURE_3D,0,G,he.width,he.height,he.depth,0,ye,Xe,he.data);else if(S.isFramebufferTexture){if(ie)if(O)t.texStorage2D(i.TEXTURE_2D,Q,G,he.width,he.height);else{let Y=he.width,Z=he.height;for(let Me=0;Me<Q;Me++)t.texImage2D(i.TEXTURE_2D,Me,G,Y,Z,0,ye,Xe,null),Y>>=1,Z>>=1}}else if(be.length>0){if(O&&ie){const Y=et(be[0]);t.texStorage2D(i.TEXTURE_2D,Q,G,Y.width,Y.height)}for(let Y=0,Z=be.length;Y<Z;Y++)K=be[Y],O?oe&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ye,Xe,K):t.texImage2D(i.TEXTURE_2D,Y,G,ye,Xe,K);S.generateMipmaps=!1}else if(O){if(ie){const Y=et(he);t.texStorage2D(i.TEXTURE_2D,Q,G,Y.width,Y.height)}oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Xe,he)}else t.texImage2D(i.TEXTURE_2D,0,G,ye,Xe,he);x(S)&&p(re),ke.__version=se.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function j(C,S,X){if(S.image.length!==6)return;const re=ue(C,S),le=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+X);const se=n.get(le);if(le.version!==se.__version||re===!0){t.activeTexture(i.TEXTURE0+X);const ke=At.getPrimaries(At.workingColorSpace),ve=S.colorSpace===Gn?null:At.getPrimaries(S.colorSpace),Oe=S.colorSpace===Gn||ke===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,he=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let Z=0;Z<6;Z++)!Se&&!he?ye[Z]=m(S.image[Z],!0,s.maxCubemapSize):ye[Z]=he?S.image[Z].image:S.image[Z],ye[Z]=st(S,ye[Z]);const Xe=ye[0],G=r.convert(S.format,S.colorSpace),K=r.convert(S.type),be=_(S.internalFormat,G,K,S.colorSpace),O=S.isVideoTexture!==!0,ie=se.__version===void 0||re===!0,oe=le.dataReady;let Q=E(S,Xe);ne(i.TEXTURE_CUBE_MAP,S);let Y;if(Se){O&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Q,be,Xe.width,Xe.height);for(let Z=0;Z<6;Z++){Y=ye[Z].mipmaps;for(let Me=0;Me<Y.length;Me++){const Pe=Y[Me];S.format!==xn?G!==null?O?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,0,0,Pe.width,Pe.height,G,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,be,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,0,0,Pe.width,Pe.height,G,K,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,be,Pe.width,Pe.height,0,G,K,Pe.data)}}}else{if(Y=S.mipmaps,O&&ie){Y.length>0&&Q++;const Z=et(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Q,be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(he){O?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ye[Z].width,ye[Z].height,G,K,ye[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,be,ye[Z].width,ye[Z].height,0,G,K,ye[Z].data);for(let Me=0;Me<Y.length;Me++){const Ue=Y[Me].image[Z].image;O?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,0,0,Ue.width,Ue.height,G,K,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,be,Ue.width,Ue.height,0,G,K,Ue.data)}}else{O?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,G,K,ye[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,be,G,K,ye[Z]);for(let Me=0;Me<Y.length;Me++){const Pe=Y[Me];O?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,0,0,G,K,Pe.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,be,G,K,Pe.image[Z])}}}x(S)&&p(i.TEXTURE_CUBE_MAP),se.__version=le.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ce(C,S,X,re,le,se){const ke=r.convert(X.format,X.colorSpace),ve=r.convert(X.type),Oe=_(X.internalFormat,ke,ve,X.colorSpace),Se=n.get(S),he=n.get(X);if(he.__renderTarget=S,!Se.__hasExternalTextures){const ye=Math.max(1,S.width>>se),Xe=Math.max(1,S.height>>se);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,se,Oe,ye,Xe,S.depth,0,ke,ve,null):t.texImage2D(le,se,Oe,ye,Xe,0,ke,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ge(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,le,he.__webglTexture,0,Le(S)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,le,he.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(C,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const re=S.depthTexture,le=re&&re.isDepthTexture?re.type:null,se=v(S.stencilBuffer,le),ke=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=Le(S);ge(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,se,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,se,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,C)}else{const re=S.textures;for(let le=0;le<re.length;le++){const se=re[le],ke=r.convert(se.format,se.colorSpace),ve=r.convert(se.type),Oe=_(se.internalFormat,ke,ve,se.colorSpace),Se=Le(S);X&&ge(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Oe,S.width,S.height):ge(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,Oe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(S.depthTexture);re.__renderTarget=S,(!re.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);const le=re.__webglTexture,se=Le(S);if(S.depthTexture.format===rr)ge(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(S.depthTexture.format===ar)ge(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ge(C){const S=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const re=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){const le=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",le)};re.addEventListener("dispose",le),S.__depthDisposeCallback=le}S.__boundDepthTexture=re}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const re=C.texture.mipmaps;re&&re.length>0?Ae(S.__webglFramebuffer[0],C):Ae(S.__webglFramebuffer,C)}else if(X){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=i.createRenderbuffer(),we(S.__webglDepthbuffer[re],C,!1);else{const le=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,se)}}else{const re=C.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),we(S.__webglDepthbuffer,C,!1);else{const le=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(C,S,X){const re=n.get(C);S!==void 0&&ce(re.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ge(C)}function L(C){const S=C.texture,X=n.get(C),re=n.get(S);C.addEventListener("dispose",T);const le=C.textures,se=C.isWebGLCubeRenderTarget===!0,ke=le.length>1;if(ke||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=S.version,a.memory.textures++),se){X.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[ve]=[];for(let Oe=0;Oe<S.mipmaps.length;Oe++)X.__webglFramebuffer[ve][Oe]=i.createFramebuffer()}else X.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)X.__webglFramebuffer[ve]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ke)for(let ve=0,Oe=le.length;ve<Oe;ve++){const Se=n.get(le[ve]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&ge(C)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const Oe=le[ve];X.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ve]);const Se=r.convert(Oe.format,Oe.colorSpace),he=r.convert(Oe.type),ye=_(Oe.internalFormat,Se,he,Oe.colorSpace,C.isXRRenderTarget===!0),Xe=Le(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,ye,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,X.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),we(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),ne(i.TEXTURE_CUBE_MAP,S);for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0)for(let Oe=0;Oe<S.mipmaps.length;Oe++)ce(X.__webglFramebuffer[ve][Oe],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe);else ce(X.__webglFramebuffer[ve],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let ve=0,Oe=le.length;ve<Oe;ve++){const Se=le[ve],he=n.get(Se);let ye=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,he.__webglTexture),ne(ye,Se),ce(X.__webglFramebuffer,C,Se,i.COLOR_ATTACHMENT0+ve,ye,0),x(Se)&&p(ye)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,re.__webglTexture),ne(ve,S),S.mipmaps&&S.mipmaps.length>0)for(let Oe=0;Oe<S.mipmaps.length;Oe++)ce(X.__webglFramebuffer[Oe],C,S,i.COLOR_ATTACHMENT0,ve,Oe);else ce(X.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ve,0);x(S)&&p(ve),t.unbindTexture()}C.depthBuffer&&Ge(C)}function Te(C){const S=C.textures;for(let X=0,re=S.length;X<re;X++){const le=S[X];if(x(le)){const se=y(C),ke=n.get(le).__webglTexture;t.bindTexture(se,ke),p(se),t.unbindTexture()}}}const me=[],fe=[];function xe(C){if(C.samples>0){if(ge(C)===!1){const S=C.textures,X=C.width,re=C.height;let le=i.COLOR_BUFFER_BIT;const se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(C),ve=S.length>1;if(ve)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const Oe=C.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Se]);const he=n.get(S[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,X,re,0,0,X,re,le,i.NEAREST),l===!0&&(me.length=0,fe.length=0,me.push(i.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(me.push(se),fe.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Se]);const he=n.get(S[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Le(C){return Math.min(s.maxSamples,C.samples)}function ge(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ze(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function st(C,S){const X=C.colorSpace,re=C.format,le=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Es&&X!==Gn&&(At.getTransfer(X)===Ft?(re!==xn||le!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=N,this.setTexture2DArray=U,this.setTexture3D=I,this.setTextureCube=P,this.rebindTextures=ae,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ge}function Wg(i,e){function t(n,s=Gn){let r;const a=At.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ih)return i.BYTE;if(n===Uh)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===zh)return i.ALPHA;if(n===Oh)return i.RGB;if(n===xn)return i.RGBA;if(n===rr)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===_s)return i.RED;if(n===_l)return i.RED_INTEGER;if(n===kh)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===Kr||n===jr||n===Zr||n===Jr)if(a===Ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===Ro||n===Co||n===Lo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Do||n===Io)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Do)return a===Ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Io)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uo||n===Fo||n===No||n===zo||n===Oo||n===ko||n===Bo||n===Ho||n===Go||n===Vo||n===Wo||n===qo||n===Xo||n===$o)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===No)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ko)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bo)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ho)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Go)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vo)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wo)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xo)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===Ko||n===jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yo)return a===Ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zo||n===Jo||n===Qo||n===el)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xg=`
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

}`;class $g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Kh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:qg,fragmentShader:Xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yg extends Ds{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const m=typeof XRWebGLBinding<"u",x=new $g,p={},y=t.getContextAttributes();let _=null,v=null;const E=[],M=[],T=new Je;let A=null;const b=new Un;b.viewport=new yt;const w=new Un;w.viewport=new yt;const D=[b,w],F=new md;let B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let j=E[$];return j===void 0&&(j=new Oa,E[$]=j),j.getTargetRaySpace()},this.getControllerGrip=function($){let j=E[$];return j===void 0&&(j=new Oa,E[$]=j),j.getGripSpace()},this.getHand=function($){let j=E[$];return j===void 0&&(j=new Oa,E[$]=j),j.getHandSpace()};function N($){const j=M.indexOf($.inputSource);if(j===-1)return;const ce=E[j];ce!==void 0&&(ce.update($.inputSource,$.frame,c||a),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",I);for(let $=0;$<E.length;$++){const j=M[$];j!==null&&(M[$]=null,E[$].disconnect(j))}B=null,k=null,x.reset();for(const $ in p)delete p[$];e.setRenderTarget(_),d=null,u=null,f=null,s=null,v=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&m&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,we=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=y.stencil?ar:rr,we=y.stencil?sr:bi);const Ge={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ge),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new ci(u.textureWidth,u.textureHeight,{format:xn,type:jn,depthTexture:new Al(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ci(d.framebufferWidth,d.framebufferHeight,{format:xn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function I($){for(let j=0;j<$.removed.length;j++){const ce=$.removed[j],we=M.indexOf(ce);we>=0&&(M[we]=null,E[we].disconnect(ce))}for(let j=0;j<$.added.length;j++){const ce=$.added[j];let we=M.indexOf(ce);if(we===-1){for(let Ge=0;Ge<E.length;Ge++)if(Ge>=M.length){M.push(ce),we=Ge;break}else if(M[Ge]===null){M[Ge]=ce,we=Ge;break}if(we===-1)break}const Ae=E[we];Ae&&Ae.connect(ce)}}const P=new z,V=new z;function H($,j,ce){P.setFromMatrixPosition(j.matrixWorld),V.setFromMatrixPosition(ce.matrixWorld);const we=P.distanceTo(V),Ae=j.projectionMatrix.elements,Ge=ce.projectionMatrix.elements,ae=Ae[14]/(Ae[10]-1),L=Ae[14]/(Ae[10]+1),Te=(Ae[9]+1)/Ae[5],me=(Ae[9]-1)/Ae[5],fe=(Ae[8]-1)/Ae[0],xe=(Ge[8]+1)/Ge[0],Le=ae*fe,ge=ae*xe,ze=we/(-fe+xe),st=ze*-fe;if(j.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(st),$.translateZ(ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const et=ae+ze,C=L+ze,S=Le-st,X=ge+(we-st),re=Te*L/C*et,le=me*L/C*et;$.projectionMatrix.makePerspective(S,X,re,le,et,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ee($,j){j===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(j.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let j=$.near,ce=$.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),F.near=w.near=b.near=j,F.far=w.far=b.far=ce,(B!==F.near||k!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,k=F.far),F.layers.mask=$.layers.mask|6,b.layers.mask=F.layers.mask&3,w.layers.mask=F.layers.mask&5;const we=$.parent,Ae=F.cameras;ee(F,we);for(let Ge=0;Ge<Ae.length;Ge++)ee(Ae[Ge],we);Ae.length===2?H(F,b,w):F.projectionMatrix.copy(b.projectionMatrix),ne($,F,we)};function ne($,j,ce){ce===null?$.matrix.copy(j.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(j.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=tl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function($){return p[$]};let ue=null;function de($,j){if(h=j.getViewerPose(c||a),g=j,h!==null){const ce=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let we=!1;ce.length!==F.cameras.length&&(F.cameras.length=0,we=!0);for(let L=0;L<ce.length;L++){const Te=ce[L];let me=null;if(d!==null)me=d.getViewport(Te);else{const xe=f.getViewSubImage(u,Te);me=xe.viewport,L===0&&(e.setRenderTargetTextures(v,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(v))}let fe=D[L];fe===void 0&&(fe=new Un,fe.layers.enable(L),fe.viewport=new yt,D[L]=fe),fe.matrix.fromArray(Te.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Te.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(me.x,me.y,me.width,me.height),L===0&&(F.matrix.copy(fe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),we===!0&&F.cameras.push(fe)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){f=n.getBinding();const L=f.getDepthInformation(ce[0]);L&&L.isValid&&L.texture&&x.init(L,s.renderState)}if(Ae&&Ae.includes("camera-access")&&m){e.state.unbindTexture(),f=n.getBinding();for(let L=0;L<ce.length;L++){const Te=ce[L].camera;if(Te){let me=p[Te];me||(me=new Kh,p[Te]=me);const fe=f.getCameraImage(Te);me.sourceTexture=fe}}}}for(let ce=0;ce<E.length;ce++){const we=M[ce],Ae=E[ce];we!==null&&Ae!==void 0&&Ae.update(we,j,c||a)}ue&&ue($,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const pe=new af;pe.setAnimationLoop(de),this.setAnimationLoop=function($){ue=$},this.dispose=function(){}}}const Ii=new zn,Kg=new Rt;function jg(i,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Xh(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),f(x,p)):p.isMeshPhongMaterial?(r(x,p),h(x,p)):p.isMeshStandardMaterial?(r(x,p),u(x,p),p.isMeshPhysicalMaterial&&d(x,p,v)):p.isMeshMatcapMaterial?(r(x,p),g(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),m(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?l(x,p,y,_):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===vn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===vn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,v=y.envMapRotation;_&&(x.envMap.value=_,Ii.copy(v),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),x.envMapRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(Ii)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,y,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=_*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function f(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function u(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,y){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,p){p.matcap&&(x.matcap.value=p.matcap)}function m(x,p){const y=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",x));const E=_.program;n.updateUBOMapping(y,E);const M=e.render.frame;r[y.id]!==M&&(u(y),r[y.id]=M)}function h(y){const _=f();y.__bindingPointIndex=_;const v=i.createBuffer(),E=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const _=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,T=v.length;M<T;M++){const A=Array.isArray(v[M])?v[M]:[v[M]];for(let b=0,w=A.length;b<w;b++){const D=A[b];if(d(D,M,b,E)===!0){const F=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let N=0;N<B.length;N++){const U=B[N],I=m(U);typeof U=="number"||typeof U=="boolean"?(D.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,F+k,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=0,D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=0,D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=0):(U.toArray(D.__data,k),k+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,v,E){const M=y.value,T=_+"_"+v;if(E[T]===void 0)return typeof M=="number"||typeof M=="boolean"?E[T]=M:E[T]=M.clone(),!0;{const A=E[T];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return E[T]=M,!0}else if(A.equals(M)===!1)return A.copy(M),!0}return!1}function g(y){const _=y.uniforms;let v=0;const E=16;for(let T=0,A=_.length;T<A;T++){const b=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,D=b.length;w<D;w++){const F=b[w],B=Array.isArray(F.value)?F.value:[F.value];for(let k=0,N=B.length;k<N;k++){const U=B[k],I=m(U),P=v%E,V=P%I.boundary,H=P+V;v+=V,H!==0&&E-H<I.storage&&(v+=E-H),F.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=I.storage}}}const M=v%E;return M>0&&(v+=E-M),y.__size=v,y.__cache={},this}function m(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function x(y){const _=y.target;_.removeEventListener("dispose",x);const v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Jg{constructor(e={}){const{canvas:t=fu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),m=new Int32Array(4);let x=null,p=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=ln;let M=0,T=0,A=null,b=-1,w=null;const D=new yt,F=new yt;let B=null;const k=new je(0);let N=0,U=t.width,I=t.height,P=1,V=null,H=null;const ee=new yt(0,0,U,I),ne=new yt(0,0,U,I);let ue=!1;const de=new oa;let pe=!1,$=!1;const j=new Rt,ce=new z,we=new yt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function ae(){return A===null?P:1}let L=n;function Te(R,W){return t.getContext(R,W)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pl}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",Y,!1),L===null){const W="webgl2";if(L=Te(W,R),L===null)throw Te(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let me,fe,xe,Le,ge,ze,st,et,C,S,X,re,le,se,ke,ve,Oe,Se,he,ye,Xe,G,K,be;function O(){me=new lm(L),me.init(),G=new Wg(L,me),fe=new tm(L,me,e,G),xe=new Gg(L,me),fe.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),Le=new fm(L),ge=new Cg,ze=new Vg(L,me,xe,ge,fe,G,Le),st=new im(v),et=new om(v),C=new xd(L),K=new Q0(L,C),S=new cm(L,C,Le,K),X=new dm(L,S,C,Le),he=new um(L,fe,ze),ve=new nm(ge),re=new Rg(v,st,et,me,fe,K,ve),le=new jg(v,ge),se=new Pg,ke=new zg(me),Se=new J0(v,st,et,xe,X,d,l),Oe=new Bg(v,X,fe),be=new Zg(L,Le,fe,xe),ye=new em(L,me,Le),Xe=new hm(L,me,Le),Le.programs=re.programs,v.capabilities=fe,v.extensions=me,v.properties=ge,v.renderLists=se,v.shadowMap=Oe,v.state=xe,v.info=Le}O();const ie=new Yg(v,L);this.xr=ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(R){R!==void 0&&(P=R,this.setSize(U,I,!1))},this.getSize=function(R){return R.set(U,I)},this.setSize=function(R,W,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,I=W,t.width=Math.floor(R*P),t.height=Math.floor(W*P),J===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(U*P,I*P).floor()},this.setDrawingBufferSize=function(R,W,J){U=R,I=W,P=J,t.width=Math.floor(R*J),t.height=Math.floor(W*J),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,W,J,te){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,W,J,te),xe.viewport(D.copy(ee).multiplyScalar(P).round())},this.getScissor=function(R){return R.copy(ne)},this.setScissor=function(R,W,J,te){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,W,J,te),xe.scissor(F.copy(ne).multiplyScalar(P).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(R){xe.setScissorTest(ue=R)},this.setOpaqueSort=function(R){V=R},this.setTransparentSort=function(R){H=R},this.getClearColor=function(R){return R.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,J=!0){let te=0;if(R){let q=!1;if(A!==null){const _e=A.texture.format;q=_e===Ml||_e===yl||_e===_l}if(q){const _e=A.texture.type,Ce=_e===jn||_e===bi||_e===ir||_e===sr||_e===xl||_e===vl,Be=Se.getClearColor(),Ne=Se.getClearAlpha(),Ye=Be.r,Qe=Be.g,He=Be.b;Ce?(g[0]=Ye,g[1]=Qe,g[2]=He,g[3]=Ne,L.clearBufferuiv(L.COLOR,0,g)):(m[0]=Ye,m[1]=Qe,m[2]=He,m[3]=Ne,L.clearBufferiv(L.COLOR,0,m))}else te|=L.COLOR_BUFFER_BIT}W&&(te|=L.DEPTH_BUFFER_BIT),J&&(te|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),Se.dispose(),se.dispose(),ke.dispose(),ge.dispose(),st.dispose(),et.dispose(),X.dispose(),K.dispose(),be.dispose(),re.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Xt),ie.removeEventListener("sessionend",Ht),Ct.stop()};function oe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=Le.autoReset,W=Oe.enabled,J=Oe.autoUpdate,te=Oe.needsUpdate,q=Oe.type;O(),Le.autoReset=R,Oe.enabled=W,Oe.autoUpdate=J,Oe.needsUpdate=te,Oe.type=q}function Y(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Z(R){const W=R.target;W.removeEventListener("dispose",Z),Me(W)}function Me(R){Pe(R),ge.remove(R)}function Pe(R){const W=ge.get(R).programs;W!==void 0&&(W.forEach(function(J){re.releaseProgram(J)}),R.isShaderMaterial&&re.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,J,te,q,_e){W===null&&(W=Ae);const Ce=q.isMesh&&q.matrixWorld.determinant()<0,Be=vt(R,W,J,te,q);xe.setMaterial(te,Ce);let Ne=J.index,Ye=1;if(te.wireframe===!0){if(Ne=S.getWireframeAttribute(J),Ne===void 0)return;Ye=2}const Qe=J.drawRange,He=J.attributes.position;let it=Qe.start*Ye,Mt=(Qe.start+Qe.count)*Ye;_e!==null&&(it=Math.max(it,_e.start*Ye),Mt=Math.min(Mt,(_e.start+_e.count)*Ye)),Ne!==null?(it=Math.max(it,0),Mt=Math.min(Mt,Ne.count)):He!=null&&(it=Math.max(it,0),Mt=Math.min(Mt,He.count));const Pt=Mt-it;if(Pt<0||Pt===1/0)return;K.setup(q,te,Be,J,Ne);let It,bt=ye;if(Ne!==null&&(It=C.get(Ne),bt=Xe,bt.setIndex(It)),q.isMesh)te.wireframe===!0?(xe.setLineWidth(te.wireframeLinewidth*ae()),bt.setMode(L.LINES)):bt.setMode(L.TRIANGLES);else if(q.isLine){let We=te.linewidth;We===void 0&&(We=1),xe.setLineWidth(We*ae()),q.isLineSegments?bt.setMode(L.LINES):q.isLineLoop?bt.setMode(L.LINE_LOOP):bt.setMode(L.LINE_STRIP)}else q.isPoints?bt.setMode(L.POINTS):q.isSprite&&bt.setMode(L.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const We=q._multiDrawStarts,$e=q._multiDrawCounts,tt=q._multiDrawCount,rt=Ne?C.get(Ne).bytesPerElement:1,St=ge.get(te).currentProgram.getUniforms();for(let ut=0;ut<tt;ut++)St.setValue(L,"_gl_DrawID",ut),bt.render(We[ut]/rt,$e[ut])}else if(q.isInstancedMesh)bt.renderInstances(it,Pt,q.count);else if(J.isInstancedBufferGeometry){const We=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,$e=Math.min(J.instanceCount,We);bt.renderInstances(it,Pt,$e)}else bt.render(it,Pt)};function Ue(R,W,J){R.transparent===!0&&R.side===pn&&R.forceSinglePass===!1?(R.side=vn,R.needsUpdate=!0,Re(R,W,J),R.side=wi,R.needsUpdate=!0,Re(R,W,J),R.side=pn):Re(R,W,J)}this.compile=function(R,W,J=null){J===null&&(J=R),p=ke.get(J),p.init(W),_.push(p),J.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),R!==J&&R.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const te=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const _e=q.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){const Be=_e[Ce];Ue(Be,J,q),te.add(Be)}else Ue(_e,J,q),te.add(_e)}),p=_.pop(),te},this.compileAsync=function(R,W,J=null){const te=this.compile(R,W,J);return new Promise(q=>{function _e(){if(te.forEach(function(Ce){ge.get(Ce).currentProgram.isReady()&&te.delete(Ce)}),te.size===0){q(R);return}setTimeout(_e,10)}me.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ve=null;function at(R){Ve&&Ve(R)}function Xt(){Ct.stop()}function Ht(){Ct.start()}const Ct=new af;Ct.setAnimationLoop(at),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(R){Ve=R,ie.setAnimationLoop(R),R===null?Ct.stop():Ct.start()},ie.addEventListener("sessionstart",Xt),ie.addEventListener("sessionend",Ht),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(W),W=ie.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,W,A),p=ke.get(R,_.length),p.init(W),_.push(p),j.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),de.setFromProjectionMatrix(j,Yn,W.reversedDepth),$=this.localClippingEnabled,pe=ve.init(this.clippingPlanes,$),x=se.get(R,y.length),x.init(),y.push(x),ie.enabled===!0&&ie.isPresenting===!0){const _e=v.xr.getDepthSensingMesh();_e!==null&&dt(_e,W,-1/0,v.sortObjects)}dt(R,W,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(V,H),Ge=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ge&&Se.addToRenderList(x,R),this.info.render.frame++,pe===!0&&ve.beginShadows();const J=p.state.shadowsArray;Oe.render(J,R,W),pe===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=x.opaque,q=x.transmissive;if(p.setupLights(),W.isArrayCamera){const _e=W.cameras;if(q.length>0)for(let Ce=0,Be=_e.length;Ce<Be;Ce++){const Ne=_e[Ce];Cn(te,q,R,Ne)}Ge&&Se.render(R);for(let Ce=0,Be=_e.length;Ce<Be;Ce++){const Ne=_e[Ce];xt(x,R,Ne,Ne.viewport)}}else q.length>0&&Cn(te,q,R,W),Ge&&Se.render(R),xt(x,R,W);A!==null&&T===0&&(ze.updateMultisampleRenderTarget(A),ze.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(v,R,W),K.resetDefaultState(),b=-1,w=null,_.pop(),_.length>0?(p=_[_.length-1],pe===!0&&ve.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?x=y[y.length-1]:x=null};function dt(R,W,J,te){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||de.intersectsSprite(R)){te&&we.setFromMatrixPosition(R.matrixWorld).applyMatrix4(j);const Ce=X.update(R),Be=R.material;Be.visible&&x.push(R,Ce,Be,J,we.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||de.intersectsObject(R))){const Ce=X.update(R),Be=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),we.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),we.copy(Ce.boundingSphere.center)),we.applyMatrix4(R.matrixWorld).applyMatrix4(j)),Array.isArray(Be)){const Ne=Ce.groups;for(let Ye=0,Qe=Ne.length;Ye<Qe;Ye++){const He=Ne[Ye],it=Be[He.materialIndex];it&&it.visible&&x.push(R,Ce,it,J,we.z,He)}}else Be.visible&&x.push(R,Ce,Be,J,we.z,null)}}const _e=R.children;for(let Ce=0,Be=_e.length;Ce<Be;Ce++)dt(_e[Ce],W,J,te)}function xt(R,W,J,te){const q=R.opaque,_e=R.transmissive,Ce=R.transparent;p.setupLightsView(J),pe===!0&&ve.setGlobalState(v.clippingPlanes,J),te&&xe.viewport(D.copy(te)),q.length>0&&pt(q,W,J),_e.length>0&&pt(_e,W,J),Ce.length>0&&pt(Ce,W,J),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Cn(R,W,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[te.id]===void 0&&(p.state.transmissionRenderTarget[te.id]=new ci(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Wi:jn,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const _e=p.state.transmissionRenderTarget[te.id],Ce=te.viewport||D;_e.setSize(Ce.z*v.transmissionResolutionScale,Ce.w*v.transmissionResolutionScale);const Be=v.getRenderTarget(),Ne=v.getActiveCubeFace(),Ye=v.getActiveMipmapLevel();v.setRenderTarget(_e),v.getClearColor(k),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),Ge&&Se.render(J);const Qe=v.toneMapping;v.toneMapping=Mi;const He=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),p.setupLightsView(te),pe===!0&&ve.setGlobalState(v.clippingPlanes,te),pt(R,J,te),ze.updateMultisampleRenderTarget(_e),ze.updateRenderTargetMipmap(_e),me.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Mt=0,Pt=W.length;Mt<Pt;Mt++){const It=W[Mt],bt=It.object,We=It.geometry,$e=It.material,tt=It.group;if($e.side===pn&&bt.layers.test(te.layers)){const rt=$e.side;$e.side=vn,$e.needsUpdate=!0,De(bt,J,te,We,$e,tt),$e.side=rt,$e.needsUpdate=!0,it=!0}}it===!0&&(ze.updateMultisampleRenderTarget(_e),ze.updateRenderTargetMipmap(_e))}v.setRenderTarget(Be,Ne,Ye),v.setClearColor(k,N),He!==void 0&&(te.viewport=He),v.toneMapping=Qe}function pt(R,W,J){const te=W.isScene===!0?W.overrideMaterial:null;for(let q=0,_e=R.length;q<_e;q++){const Ce=R[q],Be=Ce.object,Ne=Ce.geometry,Ye=Ce.group;let Qe=Ce.material;Qe.allowOverride===!0&&te!==null&&(Qe=te),Be.layers.test(J.layers)&&De(Be,W,J,Ne,Qe,Ye)}}function De(R,W,J,te,q,_e){R.onBeforeRender(v,W,J,te,q,_e),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(v,W,J,te,R,_e),q.transparent===!0&&q.side===pn&&q.forceSinglePass===!1?(q.side=vn,q.needsUpdate=!0,v.renderBufferDirect(J,W,te,q,R,_e),q.side=wi,q.needsUpdate=!0,v.renderBufferDirect(J,W,te,q,R,_e),q.side=pn):v.renderBufferDirect(J,W,te,q,R,_e),R.onAfterRender(v,W,J,te,q,_e)}function Re(R,W,J){W.isScene!==!0&&(W=Ae);const te=ge.get(R),q=p.state.lights,_e=p.state.shadowsArray,Ce=q.state.version,Be=re.getParameters(R,q.state,_e,W,J),Ne=re.getProgramCacheKey(Be);let Ye=te.programs;te.environment=R.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(R.isMeshStandardMaterial?et:st).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Ye===void 0&&(R.addEventListener("dispose",Z),Ye=new Map,te.programs=Ye);let Qe=Ye.get(Ne);if(Qe!==void 0){if(te.currentProgram===Qe&&te.lightsStateVersion===Ce)return ct(R,Be),Qe}else Be.uniforms=re.getUniforms(R),R.onBeforeCompile(Be,v),Qe=re.acquireProgram(Be,Ne),Ye.set(Ne,Qe),te.uniforms=Be.uniforms;const He=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=ve.uniform),ct(R,Be),te.needsLights=Lt(R),te.lightsStateVersion=Ce,te.needsLights&&(He.ambientLightColor.value=q.state.ambient,He.lightProbe.value=q.state.probe,He.directionalLights.value=q.state.directional,He.directionalLightShadows.value=q.state.directionalShadow,He.spotLights.value=q.state.spot,He.spotLightShadows.value=q.state.spotShadow,He.rectAreaLights.value=q.state.rectArea,He.ltc_1.value=q.state.rectAreaLTC1,He.ltc_2.value=q.state.rectAreaLTC2,He.pointLights.value=q.state.point,He.pointLightShadows.value=q.state.pointShadow,He.hemisphereLights.value=q.state.hemi,He.directionalShadowMap.value=q.state.directionalShadowMap,He.directionalShadowMatrix.value=q.state.directionalShadowMatrix,He.spotShadowMap.value=q.state.spotShadowMap,He.spotLightMatrix.value=q.state.spotLightMatrix,He.spotLightMap.value=q.state.spotLightMap,He.pointShadowMap.value=q.state.pointShadowMap,He.pointShadowMatrix.value=q.state.pointShadowMatrix),te.currentProgram=Qe,te.uniformsList=null,Qe}function qe(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Qr.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function ct(R,W){const J=ge.get(R);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function vt(R,W,J,te,q){W.isScene!==!0&&(W=Ae),ze.resetTextureUnits();const _e=W.fog,Ce=te.isMeshStandardMaterial?W.environment:null,Be=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Es,Ne=(te.isMeshStandardMaterial?et:st).get(te.envMap||Ce),Ye=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),He=!!J.morphAttributes.position,it=!!J.morphAttributes.normal,Mt=!!J.morphAttributes.color;let Pt=Mi;te.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const It=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,bt=It!==void 0?It.length:0,We=ge.get(te),$e=p.state.lights;if(pe===!0&&($===!0||R!==w)){const lt=R===w&&te.id===b;ve.setState(te,R,lt)}let tt=!1;te.version===We.__version?(We.needsLights&&We.lightsStateVersion!==$e.state.version||We.outputColorSpace!==Be||q.isBatchedMesh&&We.batching===!1||!q.isBatchedMesh&&We.batching===!0||q.isBatchedMesh&&We.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&We.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&We.instancing===!1||!q.isInstancedMesh&&We.instancing===!0||q.isSkinnedMesh&&We.skinning===!1||!q.isSkinnedMesh&&We.skinning===!0||q.isInstancedMesh&&We.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&We.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&We.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&We.instancingMorph===!1&&q.morphTexture!==null||We.envMap!==Ne||te.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ve.numPlanes||We.numIntersection!==ve.numIntersection)||We.vertexAlphas!==Ye||We.vertexTangents!==Qe||We.morphTargets!==He||We.morphNormals!==it||We.morphColors!==Mt||We.toneMapping!==Pt||We.morphTargetsCount!==bt)&&(tt=!0):(tt=!0,We.__version=te.version);let rt=We.currentProgram;tt===!0&&(rt=Re(te,W,q));let St=!1,ut=!1,nt=!1;const Fe=rt.getUniforms(),Ze=We.uniforms;if(xe.useProgram(rt.program)&&(St=!0,ut=!0,nt=!0),te.id!==b&&(b=te.id,ut=!0),St||w!==R){xe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Fe.setValue(L,"projectionMatrix",R.projectionMatrix),Fe.setValue(L,"viewMatrix",R.matrixWorldInverse);const Ot=Fe.map.cameraPosition;Ot!==void 0&&Ot.setValue(L,ce.setFromMatrixPosition(R.matrixWorld)),fe.logarithmicDepthBuffer&&Fe.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Fe.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,ut=!0,nt=!0)}if(q.isSkinnedMesh){Fe.setOptional(L,q,"bindMatrix"),Fe.setOptional(L,q,"bindMatrixInverse");const lt=q.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),Fe.setValue(L,"boneTexture",lt.boneTexture,ze))}q.isBatchedMesh&&(Fe.setOptional(L,q,"batchingTexture"),Fe.setValue(L,"batchingTexture",q._matricesTexture,ze),Fe.setOptional(L,q,"batchingIdTexture"),Fe.setValue(L,"batchingIdTexture",q._indirectTexture,ze),Fe.setOptional(L,q,"batchingColorTexture"),q._colorsTexture!==null&&Fe.setValue(L,"batchingColorTexture",q._colorsTexture,ze));const ot=J.morphAttributes;if((ot.position!==void 0||ot.normal!==void 0||ot.color!==void 0)&&he.update(q,J,rt),(ut||We.receiveShadow!==q.receiveShadow)&&(We.receiveShadow=q.receiveShadow,Fe.setValue(L,"receiveShadow",q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Ze.envMap.value=Ne,Ze.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&W.environment!==null&&(Ze.envMapIntensity.value=W.environmentIntensity),ut&&(Fe.setValue(L,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&wt(Ze,nt),_e&&te.fog===!0&&le.refreshFogUniforms(Ze,_e),le.refreshMaterialUniforms(Ze,te,P,I,p.state.transmissionRenderTarget[R.id]),Qr.upload(L,qe(We),Ze,ze)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Qr.upload(L,qe(We),Ze,ze),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Fe.setValue(L,"center",q.center),Fe.setValue(L,"modelViewMatrix",q.modelViewMatrix),Fe.setValue(L,"normalMatrix",q.normalMatrix),Fe.setValue(L,"modelMatrix",q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const lt=te.uniformsGroups;for(let Ot=0,_n=lt.length;Ot<_n;Ot++){const Vt=lt[Ot];be.update(Vt,rt),be.bind(Vt,rt)}}return rt}function wt(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Lt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,W,J){const te=ge.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ge.get(R.texture).__webglTexture=W,ge.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:J,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const J=ge.get(R);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0};const Gt=L.createFramebuffer();this.setRenderTarget=function(R,W=0,J=0){A=R,M=W,T=J;let te=!0,q=null,_e=!1,Ce=!1;if(R){const Ne=ge.get(R);if(Ne.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(L.FRAMEBUFFER,null),te=!1;else if(Ne.__webglFramebuffer===void 0)ze.setupRenderTarget(R);else if(Ne.__hasExternalTextures)ze.rebindTextures(R,ge.get(R.texture).__webglTexture,ge.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const He=R.depthTexture;if(Ne.__boundDepthTexture!==He){if(He!==null&&ge.has(He)&&(R.width!==He.image.width||R.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(R)}}const Ye=R.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ce=!0);const Qe=ge.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?q=Qe[W][J]:q=Qe[W],_e=!0):R.samples>0&&ze.useMultisampledRTT(R)===!1?q=ge.get(R).__webglMultisampledFramebuffer:Array.isArray(Qe)?q=Qe[J]:q=Qe,D.copy(R.viewport),F.copy(R.scissor),B=R.scissorTest}else D.copy(ee).multiplyScalar(P).floor(),F.copy(ne).multiplyScalar(P).floor(),B=ue;if(J!==0&&(q=Gt),xe.bindFramebuffer(L.FRAMEBUFFER,q)&&te&&xe.drawBuffers(R,q),xe.viewport(D),xe.scissor(F),xe.setScissorTest(B),_e){const Ne=ge.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ne.__webglTexture,J)}else if(Ce){const Ne=W;for(let Ye=0;Ye<R.textures.length;Ye++){const Qe=ge.get(R.textures[Ye]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ye,Qe.__webglTexture,J,Ne)}}else if(R!==null&&J!==0){const Ne=ge.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ne.__webglTexture,J)}b=-1},this.readRenderTargetPixels=function(R,W,J,te,q,_e,Ce,Be=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){xe.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const Ye=R.textures[Be],Qe=Ye.format,He=Ye.type;if(!fe.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-te&&J>=0&&J<=R.height-q&&(R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Be),L.readPixels(W,J,te,q,G.convert(Qe),G.convert(He),_e))}finally{const Ye=A!==null?ge.get(A).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(R,W,J,te,q,_e,Ce,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne)if(W>=0&&W<=R.width-te&&J>=0&&J<=R.height-q){xe.bindFramebuffer(L.FRAMEBUFFER,Ne);const Ye=R.textures[Be],Qe=Ye.format,He=Ye.type;if(!fe.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,it),L.bufferData(L.PIXEL_PACK_BUFFER,_e.byteLength,L.STREAM_READ),R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Be),L.readPixels(W,J,te,q,G.convert(Qe),G.convert(He),0);const Mt=A!==null?ge.get(A).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,Mt);const Pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await uu(L,Pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,it),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_e),L.deleteBuffer(it),L.deleteSync(Pt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,J=0){const te=Math.pow(2,-J),q=Math.floor(R.image.width*te),_e=Math.floor(R.image.height*te),Ce=W!==null?W.x:0,Be=W!==null?W.y:0;ze.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,Ce,Be,q,_e),xe.unbindTexture()};const zt=L.createFramebuffer(),Qt=L.createFramebuffer();this.copyTextureToTexture=function(R,W,J=null,te=null,q=0,_e=null){_e===null&&(q!==0?(lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=q,q=0):_e=0);let Ce,Be,Ne,Ye,Qe,He,it,Mt,Pt;const It=R.isCompressedTexture?R.mipmaps[_e]:R.image;if(J!==null)Ce=J.max.x-J.min.x,Be=J.max.y-J.min.y,Ne=J.isBox3?J.max.z-J.min.z:1,Ye=J.min.x,Qe=J.min.y,He=J.isBox3?J.min.z:0;else{const ot=Math.pow(2,-q);Ce=Math.floor(It.width*ot),Be=Math.floor(It.height*ot),R.isDataArrayTexture?Ne=It.depth:R.isData3DTexture?Ne=Math.floor(It.depth*ot):Ne=1,Ye=0,Qe=0,He=0}te!==null?(it=te.x,Mt=te.y,Pt=te.z):(it=0,Mt=0,Pt=0);const bt=G.convert(W.format),We=G.convert(W.type);let $e;W.isData3DTexture?(ze.setTexture3D(W,0),$e=L.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ze.setTexture2DArray(W,0),$e=L.TEXTURE_2D_ARRAY):(ze.setTexture2D(W,0),$e=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);const tt=L.getParameter(L.UNPACK_ROW_LENGTH),rt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),St=L.getParameter(L.UNPACK_SKIP_PIXELS),ut=L.getParameter(L.UNPACK_SKIP_ROWS),nt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,He);const Fe=R.isDataArrayTexture||R.isData3DTexture,Ze=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const ot=ge.get(R),lt=ge.get(W),Ot=ge.get(ot.__renderTarget),_n=ge.get(lt.__renderTarget);xe.bindFramebuffer(L.READ_FRAMEBUFFER,Ot.__webglFramebuffer),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let Vt=0;Vt<Ne;Vt++)Fe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ge.get(R).__webglTexture,q,He+Vt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ge.get(W).__webglTexture,_e,Pt+Vt)),L.blitFramebuffer(Ye,Qe,Ce,Be,it,Mt,Ce,Be,L.DEPTH_BUFFER_BIT,L.NEAREST);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||ge.has(R)){const ot=ge.get(R),lt=ge.get(W);xe.bindFramebuffer(L.READ_FRAMEBUFFER,zt),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qt);for(let Ot=0;Ot<Ne;Ot++)Fe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ot.__webglTexture,q,He+Ot):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ot.__webglTexture,q),Ze?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,lt.__webglTexture,_e,Pt+Ot):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,lt.__webglTexture,_e),q!==0?L.blitFramebuffer(Ye,Qe,Ce,Be,it,Mt,Ce,Be,L.COLOR_BUFFER_BIT,L.NEAREST):Ze?L.copyTexSubImage3D($e,_e,it,Mt,Pt+Ot,Ye,Qe,Ce,Be):L.copyTexSubImage2D($e,_e,it,Mt,Ye,Qe,Ce,Be);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ze?R.isDataTexture||R.isData3DTexture?L.texSubImage3D($e,_e,it,Mt,Pt,Ce,Be,Ne,bt,We,It.data):W.isCompressedArrayTexture?L.compressedTexSubImage3D($e,_e,it,Mt,Pt,Ce,Be,Ne,bt,It.data):L.texSubImage3D($e,_e,it,Mt,Pt,Ce,Be,Ne,bt,We,It):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_e,it,Mt,Ce,Be,bt,We,It.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_e,it,Mt,It.width,It.height,bt,It.data):L.texSubImage2D(L.TEXTURE_2D,_e,it,Mt,Ce,Be,bt,We,It);L.pixelStorei(L.UNPACK_ROW_LENGTH,tt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,St),L.pixelStorei(L.UNPACK_SKIP_ROWS,ut),L.pixelStorei(L.UNPACK_SKIP_IMAGES,nt),_e===0&&W.generateMipmaps&&L.generateMipmap($e),xe.unbindTexture()},this.initRenderTarget=function(R){ge.get(R).__webglFramebuffer===void 0&&ze.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ze.setTextureCube(R,0):R.isData3DTexture?ze.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ze.setTexture2DArray(R,0):ze.setTexture2D(R,0),xe.unbindTexture()},this.resetState=function(){M=0,T=0,A=null,xe.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}const Ee={POS:0,ROT:3,VEL:7,SPEED:13,RPM:14,GEAR:15,WHEELS:18,WHEEL_STRIDE:8,W_LENGTH:0,W_ANGLE:1,W_SPIN:2,W_SLIP:4,W_SLIP_TAN:5,W_GROUNDED:6,W_STEER:7,CRUSH:50,POWER:54,DAMAGE:56,FLOOD:58,DROWNED:59,HOLDS:61,WHEELS_OFF:62,SOFT_AWAKE:63},Mn={BLOW:1,SNAPPED:2,GLASS:3,SPLASH:4,HORN:5,WRECK:6,CAME_OFF:7,PANEL:8,FELL:9},ur=17,kt={ID:0,WHAT:1,WHICH:2,STATE:3,POS:4,ROT:7,HALF:11,VEL:14},jt={BODIES:0,AWAKE:1,WALLS:2,WALL_COLLIDERS:3,PIECES:4,PARTS:5,BROKEN:6,FALLEN:7,PLANNED:10,PARTITIONS:11,HELD:12,THINGS:13,ARMED:14,OWN:15},Qg=21;function Oc(i){const e=new TextDecoder,t=[];for(let n=0;n<i.p2p_room_kind_count();n++)t.push(e.decode(new Uint8Array(i.memory.buffer,i.p2p_room_kind_name(n),i.p2p_room_kind_name_len(n))));return t}function kc(i){const e=new TextDecoder,t=[];for(let n=0;n<i.p2p_kind_count();n++)t.push(e.decode(new Uint8Array(i.memory.buffer,i.p2p_kind_name(n),i.p2p_kind_name_len(n))));return t}function Ya(i){const e=i.p2p_rubble_stride();if(e!==ur)throw new Error(`the sim core reports a piece of rubble in ${e} floats and this page reads ${ur}: they are from different builds`);const t=new TextDecoder,n=[];for(let s=0;s<i.p2p_panel_kind_count();s++)n.push(t.decode(new Uint8Array(i.memory.buffer,i.p2p_panel_kind_name(s),i.p2p_panel_kind_name_len(s))));return n}function Ka(i){const e=new TextDecoder,t=new Map;for(let n=0;n<i.p2p_kind_count();n++){const s=e.decode(new Uint8Array(i.memory.buffer,i.p2p_kind_name(n),i.p2p_kind_name_len(n)));t.set(s,{name:s,half:[i.p2p_kind_half(n,0),i.p2p_kind_half(n,1),i.p2p_kind_half(n,2)]})}return t}const dr=13,Yt={INDEX:0,POS:1,ROT:4,SPEED:8,LOOK:9,FLAGS:10,KIND:11,CURVE:12},Ws={BRAKING:1,HORN:2,WRECK:4,LEFT:8,RIGHT:16};function ex(i){const e=i.p2p_traffic_stride();if(e!==dr)throw new Error(`the sim core reports a car of traffic in ${e} floats and this page reads ${dr}: they are from different builds`);const t=new TextDecoder,n=[];for(let s=0;s<i.p2p_vehicle_count();s++)n.push({index:s,name:t.decode(new Uint8Array(i.memory.buffer,i.p2p_vehicle_name(s),i.p2p_vehicle_name_len(s))),half:[i.p2p_vehicle_half(s,0),i.p2p_vehicle_half(s,1),i.p2p_vehicle_half(s,2)],clearance:i.p2p_vehicle_half(s,3)});return n}const Dl=i=>BigInt.asUintN(64,i).toString(16).padStart(16,"0");async function tx(i){const e=await fetch(i);if(!e.ok)throw new Error(`the sim core did not load (${e.status})`);const{instance:t}=await WebAssembly.instantiate(await e.arrayBuffer(),{});return t.exports}function nx(i){const e=(s,r)=>new TextDecoder().decode(new Uint8Array(i.memory.buffer,s,r)),t=[];for(let s=0;s<i.p2p_param_count();s++)t.push(e(i.p2p_param_name(s),i.p2p_param_name_len(s)));const n=[];for(let s=0;s<i.p2p_car_count();s++)n.push({index:s,name:e(i.p2p_car_name(s),i.p2p_car_name_len(s)),says:e(i.p2p_car_says(s),i.p2p_car_says_len(s)),param:r=>i.p2p_car_param(s,t.indexOf(r))});return n}const qs=new Float32Array(0);class Bc{constructor(e,t,n=1,s=0){this.core=e;const r=e.p2p_alloc(t.length);if(new Uint8Array(e.memory.buffer,r,t.length).set(t),this.ptr=e.p2p_new_car(n>>>0,0,r,t.length,s),e.p2p_free(r,t.length),!this.ptr)throw new Error("the sim core refused the world file");this.tickRate=e.p2p_tick_rate(),this.len=e.p2p_state_len()}tickRate;ptr;len;place(e,t,n){this.core.p2p_place(this.ptr,e,t,n)}placeAt(e,t,n,s){this.core.p2p_place_at(this.ptr,e,t,n,s)}step(e){this.core.p2p_step(this.ptr,e.steer,e.throttle,e.brake,e.handbrake)}read(e){e.set(new Float32Array(this.core.memory.buffer,this.core.p2p_state(this.ptr),this.len))}get stateLength(){return this.len}get tick(){return this.core.p2p_tick(this.ptr)}digest(){return Dl(this.core.p2p_digest(this.ptr))}drop(){this.ptr&&this.core.p2p_drop(this.ptr),this.ptr=0}movedProps(){const e=this.core.p2p_props_drain(this.ptr);return e?new Float32Array(this.core.memory.buffer,this.core.p2p_props_ptr(this.ptr),e*8).slice():qs}traffic(){const e=this.core.p2p_traffic_drain(this.ptr);return{count:e,cars:e?new Float32Array(this.core.memory.buffer,this.core.p2p_traffic_ptr(this.ptr),e*dr):qs}}setSoft(e){this.core.p2p_soft_set(this.ptr,e?1:0)}softBuilt(){const e=this.core.p2p_soft_drain(this.ptr);if(!e)return null;const t=new Float32Array(e*3),n=new Int16Array(e);for(let s=0;s<e;s++){for(let r=0;r<3;r++)t[s*3+r]=this.core.p2p_soft_built(this.ptr,s,r);n[s]=this.core.p2p_soft_built(this.ptr,s,3)}return{rest:t,kind:n}}softNow(){const e=this.core.p2p_soft_drain(this.ptr),t=this.core.p2p_loose_count(this.ptr);return{nodes:e?new Float32Array(this.core.memory.buffer,this.core.p2p_soft_ptr(this.ptr),e*3).slice():qs,loose:t?new Float32Array(this.core.memory.buffer,this.core.p2p_loose_ptr(this.ptr),t*8).slice():qs}}get panelCount(){return this.core.p2p_panel_count(this.ptr)}panel(e){const t=this.core.p2p_panel(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,t,11);return{index:e,x0:n[0],z0:n[1],x1:n[2],z1:n[3],foot:n[4],holeTop:n[5],top:n[6],building:n[7],kind:n[8],state:n[9],role:n[10]}}rubble(){const e=this.core.p2p_rubble_drain(this.ptr);return e?new Float32Array(this.core.memory.buffer,this.core.p2p_rubble_ptr(this.ptr),e*ur).slice():qs}inside(e){const t=this.core.p2p_inside(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,this.core.p2p_inside_ptr(this.ptr),t),s={arche:n[0],made:n[5]===1,held:n[6]===1,walls:n[7],rooms:[],parts:[],doors:[],items:[]};let r=8;for(let a=0;a<n[1];a++,r+=9)s.rooms.push({quad:[[n[r],n[r+1]],[n[r+2],n[r+3]],[n[r+4],n[r+5]],[n[r+6],n[r+7]]],kind:n[r+8]});for(let a=0;a<n[2];a++,r+=5)s.parts.push({ax:n[r],az:n[r+1],bx:n[r+2],bz:n[r+3],kind:n[r+4]});for(let a=0;a<n[3];a++,r+=1)s.doors.push(n[r]);for(let a=0;a<n[4];a++,r+=6)s.items.push({kind:n[r],x:n[r+1],y:n[r+2],z:n[r+3],yaw:n[r+4],state:n[r+5]});return s}face(e){const t=this.core.p2p_face(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,this.core.p2p_face_ptr(this.ptr),t),s={arche:n[0],cls:n[1],front:n[3]?[n[4],n[5],n[6],n[7]]:null,walls:[]};for(let r=0,a=8;r<n[2];r++,a+=Qg)s.walls.push({x0:n[a],z0:n[a+1],x1:n[a+2],z1:n[a+3],role:n[a+4],first:n[a+5],count:n[a+6],bay:n[a+7],pier:n[a+8],every:n[a+9],kind:n[a+10],door:n[a+11],doorWhat:n[a+12],d0:n[a+13],d1:n[a+14],l0:n[a+15],l1:n[a+16],door2:n[a+17],door2What:n[a+18],e0:n[a+19],e1:n[a+20]});return s}fallen(e){const t=this.core.p2p_fallen(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,this.core.p2p_fallen_ptr(this.ptr),t),s={mid:[n[0],n[1]],axis:[n[2],n[3]],shrink:n[4],parts:[]};for(let r=6;r+8<=t;r+=8)s.parts.push({id:n[r],x:n[r+1],y:n[r+2],z:n[r+3],yaw:n[r+4],hx:n[r+5],hy:n[r+6],hz:n[r+7]});return s}get propsBase(){return this.core.p2p_props_base(this.ptr)}propOrigin(e){const t=this.core.p2p_prop_origin(this.ptr,e,0);return t<0?null:{b:t,i:this.core.p2p_prop_origin(this.ptr,e,1),kind:this.core.p2p_prop_origin(this.ptr,e,2)}}count(e){return this.core.p2p_count(this.ptr,e)}wantTraffic(e){this.core.p2p_traffic_want(this.ptr,e)}events(){const e=this.core.p2p_events_drain(this.ptr);if(!e)return[];const t=new Float32Array(this.core.memory.buffer,this.core.p2p_events_ptr(this.ptr),e*3),n=[];for(let s=0;s<e;s++)n.push({what:t[s*3],a:t[s*3+1],b:t[s*3+2]});return n}params(){const e=this.core,t=new TextDecoder,n=[],s=(r,a)=>t.decode(new Uint8Array(e.memory.buffer,r,a));for(let r=0;r<e.p2p_param_count();r++)n.push({index:r,name:s(e.p2p_param_name(r),e.p2p_param_name_len(r)),doc:s(e.p2p_param_doc(r),e.p2p_param_doc_len(r)),default:e.p2p_param_default(r)});return n}param(e){return this.core.p2p_param_get(this.ptr,e)}setParam(e,t){this.core.p2p_param_set(this.ptr,e,t)}}let ff="mid";function ix(i){ff=i}function Il(){return ff}const _i=new z(-.72,.46,.52).normalize(),Hc=new Je(-_i.x/_i.y,-_i.z/_i.y),Ms=i=>{const e=i.toFixed(5);return e.includes(".")?e:`${e}.0`},uf={far:1200},Ki=`
#ifndef P2P_LOOK
#define P2P_LOOK
const vec3 P2P_SUN = vec3(${Ms(_i.x)}, ${Ms(_i.y)}, ${Ms(_i.z)});
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
`;let Gc=!1;function sx(){if(Gc)return;Gc=!0;const i=ht;i.fog_pars_vertex=`
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
		return mix( 1.0, shadow, shadowIntensity * ( 1.0 - smoothstep( 0.80, 0.98, max( p2pEdge.x, p2pEdge.y ) ) ) );${e.slice(t+43)}`}let ol=null;function rx(i){ol=i}function Hi(){if(!ol)throw new Error("the ground is built before what stands on it: buildGround first");return ol}const df=128;let Hr=null;function ax(i){if(Hr)return Hr;const[e,t,n,s]=i.box,r=2048,a=r/(n-e),o=r/(s-t),l=document.createElement("canvas");l.width=r,l.height=r;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#000",c.fillRect(0,0,r,r),c.globalCompositeOperation="lighten";const h=m=>(m-e)*a,f=m=>(m-t)*o,u=m=>`rgb(${Math.round(Math.min(1,m/df)*255)},0,0)`;for(const m of i.buildings){const x=m.r,p=m.y1-m.y0;if(x.length<4||p<2)continue;let y=0;for(let M=0;M+1<x.length;M++)y+=x[M][0]*x[M+1][1]-x[M+1][0]*x[M][1];const _=y>0?1:-1,v=Hc.x*p,E=Hc.y*p;for(let M=0;M+1<x.length;M++){const[T,A]=x[M],[b,w]=x[M+1],D=Math.hypot(b-T,w-A);if(D<.05)continue;const F=(w-A)/D*_,B=-(b-T)/D*_,k=F*v+B*E;if(k<=.5)continue;const N=c.createLinearGradient(h(T),f(A),h(T+F*k),f(A+B*k));N.addColorStop(0,u(p)),N.addColorStop(1,"#000"),c.fillStyle=N,c.beginPath(),c.moveTo(h(T),f(A)),c.lineTo(h(b),f(w)),c.lineTo(h(b+v),f(w+E)),c.lineTo(h(T+v),f(A+E)),c.closePath(),c.fill()}c.fillStyle=u(p),c.beginPath(),x.forEach(([M,T],A)=>{A===0?c.moveTo(h(M),f(T)):c.lineTo(h(M),f(T))}),c.closePath(),c.fill()}c.fillStyle="rgb(0,255,0)";for(const m of i.buildings)m.r.length<4||(c.beginPath(),m.r.forEach(([x,p],y)=>{y===0?c.moveTo(h(x),f(p)):c.lineTo(h(x),f(p))}),c.closePath(),c.fill());const d=c.getImageData(0,0,r,r);ox(d.data,r),c.putImageData(d,0,0);const g=new Gu(l);return g.flipY=!1,g.colorSpace=Gn,g.generateMipmaps=!0,g.minFilter=ai,g.magFilter=bn,g.anisotropy=4,Hr={texture:g,box:new yt(e,t,1/(n-e),1/(s-t))},Hr}function ox(i,e){let s=new Float32Array(e*e),r=new Float32Array(e*e);for(let o=0;o<e*e;o++)s[o]=i[o*4+1];const a=(o,l,c,h)=>{for(let f=0;f<e;f++){const u=f*h;let d=0;for(let g=-2;g<=2;g++)d+=o[u+Math.min(e-1,Math.max(0,g))*c];for(let g=0;g<e;g++)l[u+g*c]=d/5,d+=o[u+Math.min(e-1,g+2+1)*c]-o[u+Math.max(0,g-2)*c]}};for(let o=0;o<3;o++)a(s,r,1,e),[s,r]=[r,s];for(let o=0;o<3;o++)a(s,r,e,1),[s,r]=[r,s];for(let o=0;o<e*e;o++)i[o*4+1]=Math.max(i[o*4+1],s[o])}let Gr=null;function lx(i){if(Gr)return Gr;let e=1/0,t=1/0,n=-1/0,s=-1/0;for(const d of i.ways??[])if(d.k==="tunnel")for(const g of d.p)e=Math.min(e,g[0]-20),t=Math.min(t,g[2]-20),n=Math.max(n,g[0]+20),s=Math.max(s,g[2]+20);e===1/0&&(e=0,t=0,n=1,s=1);const r=Math.max(1,Math.ceil((n-e)/1.5)),a=Math.max(1,Math.ceil((s-t)/1.5)),o=r/(n-e),l=a/(s-t),c=(i.ground.min??0)-10,h=new Uint8Array(r*a*4),f=d=>Math.max(1,Math.min(255,Math.round((d-c)*2)));for(const d of i.ways??[]){if(d.k!=="tunnel")continue;const g=d.clear??5.6,m=d.half+.6;for(let x=0;x+1<d.p.length;x++){const p=d.p[x],y=d.p[x+1],_=y[0]-p[0],v=y[2]-p[2],E=_*_+v*v||1,M=Math.floor((Math.min(p[0],y[0])-m-e)*o),T=Math.ceil((Math.max(p[0],y[0])+m-e)*o),A=Math.floor((Math.min(p[2],y[2])-m-t)*l),b=Math.ceil((Math.max(p[2],y[2])+m-t)*l);for(let w=Math.max(0,A);w<=Math.min(a-1,b);w++)for(let D=Math.max(0,M);D<=Math.min(r-1,T);D++){const F=e+(D+.5)/o,B=t+(w+.5)/l,k=Math.min(1,Math.max(0,((F-p[0])*_+(B-p[2])*v)/E));if(Math.hypot(p[0]+_*k-F,p[2]+v*k-B)>m)continue;const N=p[1]+(y[1]-p[1])*k,U=(w*r+D)*4;h[U]=f(N),h[U+1]=Math.max(h[U+1],f(N+g)),h[U+3]=255}}}const u=new qi(h,r,a,xn);return u.minFilter=u.magFilter=cn,u.generateMipmaps=!1,u.needsUpdate=!0,Gr={texture:u,box:new yt(e,t,o/r,l/a),base:c},Gr}function li(i,e,t){const n=ax(e),s=lx(e);return i.onBeforeCompile=r=>{r.uniforms.uShade={value:n.texture},r.uniforms.uShadeBox={value:n.box},r.uniforms.uTubes={value:s.texture},r.uniforms.uTubesBox={value:s.box},Object.assign(r.uniforms,t.uniforms??{}),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
          return vec2( t.r * ${Ms(df)}, t.g ) * inside;
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
        float p2pLit = clamp( dot( reflectedLight.directDiffuse, vec3( 0.3333 ) ) / max( dot( diffuseColor.rgb, vec3( 0.3333 ) ), 0.02 ) / 1.15, 0.0, 1.0 );`).replace("#include <envmap_fragment>",t.final??"")},i.customProgramCacheKey=()=>t.key,i}const cx=i=>i>=0&&i<=6,Hn=4,hx=[{size:[.62,.42,.05],color:5988195},{size:[.6,.46,.52],color:2895152},{size:[.24,.19,.17],color:1118740},{size:[.38,.38,.05],color:1381655,round:!0},{size:[1.3,.22,.32],color:1776670},{size:[.5,.75,.55],color:2762276},{size:[.5,.75,.55],color:2762276},{size:[.7,.24,.5],color:1579291}];class fx{constructor(e,t,n,s,r,a){this.body=e,this.group=n,this.world=s,this.wheel=r,this.wheelMaterial=a;const o=e.geometry.getAttribute("position");this.base=Float32Array.from(o.array),this.nodes0=t.rest;const l=t.kind.length,c=o.count;this.ties=new Int16Array(c*Hn).fill(-1),this.weights=new Float32Array(c*Hn),this.panelOf=new Uint8Array(c);const h=[];for(let d=0;d<l;d++)cx(t.kind[d])&&h.push(d);const f=(d,g,m,x)=>{const p=t.rest[d*3]-g,y=t.rest[d*3+1]-m,_=t.rest[d*3+2]-x;return p*p+y*y+_*_};for(let d=0;d<c;d++){const g=this.base[d*3],m=this.base[d*3+1],x=this.base[d*3+2];let p=h[0],y=1/0;for(const M of h){const T=f(M,g,m,x);T<y&&(y=T,p=M)}const _=t.kind[p];this.panelOf[d]=_;const v=h.filter(M=>t.kind[M]===_).map(M=>[M,f(M,g,m,x)]).sort((M,T)=>M[1]-T[1]).slice(0,Hn);let E=0;for(const[M,[T,A]]of v.entries()){const b=1/(A+.01);this.ties[d*Hn+M]=T,this.weights[d*Hn+M]=b,E+=b}for(let M=0;M<Hn;M++)this.weights[d*Hn+M]/=E||1}const u=e.geometry.getIndex();for(let d=1;d<=6;d++){const g=[];for(let y=0;y<u.count;y+=3){const _=u.getX(y),v=u.getX(y+1),E=u.getX(y+2);this.panelOf[_]===d&&this.panelOf[v]===d&&this.panelOf[E]===d&&g.push(_,v,E)}if(!g.length)continue;const m=new z;let x=0;for(let y=0;y<l;y++)t.kind[y]===d&&(m.x+=t.rest[y*3],m.y+=t.rest[y*3+1],m.z+=t.rest[y*3+2],x++);m.divideScalar(Math.max(1,x));const p=new Nt;for(const y of Object.keys(e.geometry.attributes)){const _=e.geometry.getAttribute(y),v=_.itemSize,E=new Float32Array(g.length*v);g.forEach((M,T)=>{for(let A=0;A<v;A++)E[T*v+A]=_.getComponent(M,A)-(y==="position"?m.getComponent(A):0)}),p.setAttribute(y,new Tt(E,v))}p.computeVertexNormals(),this.pieces.set(d,{geo:p,centre:m})}this.partBase=[...t.kind].findIndex(d=>d>=20),hx.forEach((d,g)=>{const m=d.round?new Rl(d.size[0]/2,.025,6,16):new Ai(...d.size),x=new Dt(m,new Fs({color:d.color,roughness:.6,metalness:g===1||g===0?.6:.1}));d.round&&(x.rotation.x=-.35),x.castShadow=!1,n.add(x),this.parts.push(x)}),this.apply(t.rest,0)}ties;weights;panelOf;base;nodes0;parts=[];partBase;pieces=new Map;loose=new Map;apply(e,t,n){const s=this.body.geometry.getAttribute("position"),r=s.array;for(let o=0;o<s.count;o++){const l=this.panelOf[o];if(l&&(t>>2*l&3)===2){const u=this.ties[o*Hn];r[o*3]=e[u*3],r[o*3+1]=e[u*3+1],r[o*3+2]=e[u*3+2];continue}let c=this.base[o*3],h=this.base[o*3+1],f=this.base[o*3+2];for(let u=0;u<Hn;u++){const d=this.ties[o*Hn+u],g=this.weights[o*Hn+u];d<0||(c+=(e[d*3]-this.nodes0[d*3])*g,h+=(e[d*3+1]-this.nodes0[d*3+1])*g,f+=(e[d*3+2]-this.nodes0[d*3+2])*g)}r[o*3]=c,r[o*3+1]=h,r[o*3+2]=f}s.needsUpdate=!0,this.body.geometry.computeVertexNormals(),this.body.geometry.computeBoundingSphere(),this.parts.forEach((o,l)=>{const c=this.partBase+l;o.position.set(e[c*3],e[c*3+1],e[c*3+2])});const a=new Set;for(let o=0;n&&o+7<n.length;o+=8){const l=n[o];a.add(l);let c=this.loose.get(l);if(!c){if(l>=10)c=new Dt(this.wheel,this.wheelMaterial);else{const h=this.pieces.get(l);if(!h)continue;c=new Dt(h.geo,this.body.material)}c.castShadow=!0,c.name=l>=10?"a wheel off the car":"a panel off the car",this.world.add(c),this.loose.set(l,c)}c.position.set(n[o+1],n[o+2],n[o+3]),c.quaternion.set(n[o+4],n[o+5],n[o+6],n[o+7])}for(const[o,l]of this.loose)a.has(o)||(this.world.remove(l),this.loose.delete(o))}dispose(){for(const t of this.loose.values())this.world.remove(t);this.loose.clear();for(const t of this.parts)this.group.remove(t),t.geometry.dispose();for(const t of this.pieces.values())t.geo.dispose();const e=this.body.geometry.getAttribute("position");e.array.set(this.base),e.needsUpdate=!0,this.body.geometry.computeVertexNormals()}}const Ui=128,ux=2.2,ii=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Ul={name:"Sorrento",paint:10227467,screenFoot:-.86,screenHead:-.08,backHead:.72,backFoot:1.68,nose:.13,belt:.38,roof:.845},Vc=-.17,pf=.085,Wc=1.25,dx=`
  attribute vec4 carA; attribute vec4 carB; varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN;
  uniform vec4 uCrush; uniform float uWide; uniform float uSoft; varying float vDent;`,px=`
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
    transformed.z += uCrush.x * nose * uneven * ${Wc.toFixed(2)} * shove;
    transformed.z -= uCrush.y * tail * uneven * ${Wc.toFixed(2)} * shove;
    // a side gives less than an end: the wheels stay where the sim has them, and the skin must not go in past them
    transformed.x += min(0.2, uCrush.z * 0.5) * left * uneven * shove;
    transformed.x -= min(0.2, uCrush.w * 0.5) * right * uneven * shove;
    // a crushed bonnet or boot lid buckles upward
    transformed.y += (uCrush.x * nose * nose + uCrush.y * tail * tail) * 0.35 * lump * step(0.12, position.y) * shove;
    // not in proportion: a light blow must show, and a heavy one has nowhere further to go
    vDent = pow(clamp((uCrush.x * nose + uCrush.y * tail + uCrush.z * left + uCrush.w * right) * 4.0, 0.0, 1.0), 0.65);
  }`,mx=`
  uniform float uBrake; uniform float uReverse; uniform vec4 uCrush; varying float vDent;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN;
  ${Ki}`,gx=i=>{const e=i.screenFoot,t=i.screenHead,n=i.backHead,s=i.backFoot,r=(i.screenHead+i.backHead)/2+.02,a=Math.min(i.glassTo??99,i.backFoot-.42),o=i.belt;return`
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
    float lip = p2pLine(vCarB.z - ${pf.toFixed(3)} + 0.02, 0.022, fwidth(vCarB.z)) * side * step(q.y, 0.3);
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
  }`},xx=`
  roughnessFactor = mix(mix(roughnessFactor, 0.62, carTrim), 0.05, carGlass);
  metalnessFactor = mix(mix(metalnessFactor, 0.0, carTrim), 0.85, carGlass);
  roughnessFactor = mix(roughnessFactor, 0.85, max(carScuff, carGlass * carCrack));
  metalnessFactor = mix(metalnessFactor, 0.15, carGlass * carCrack);`,vx=`
  normal = normalize(mix(normal, normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition))), vDent * 0.9));`,_x="varying vec3 vLocal;",yx=`
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
  }`,Mx=`
  roughnessFactor = mix(0.9, 0.28, wheelMetal);
  metalnessFactor = mix(0.0, 0.9, wheelMetal);`;function qc(i,e,t,n,s,r,a,o,l="",c=""){return i.onBeforeCompile=h=>{Object.assign(h.uniforms,t),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
${n}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${s}`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
${r}`).replace("#include <color_fragment>",`#include <color_fragment>
${a}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${o}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${l}`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
${c}`)},i.customProgramCacheKey=()=>e,i}class wx{constructor(e,t=null,n=Ul){this.shape=e,this.look=n;const s=(e.axleFront+e.axleRear)/2+(e.overhang??.85),r=e.halfTrack+.12,a=qc(new ef({color:n.paint,metalness:.35,roughness:.34,clearcoat:1,clearcoatRoughness:.06,envMap:t,envMapIntensity:.75}),`p2p-car-body-${n.name}`,this.lamps,dx,px,mx,gx(n),xx,"totalEmissiveRadiance += carLamp;",vx);this.lamps.uWide.value=r;const o=new Dt(this.body(s,r),a);o.castShadow=!0,o.receiveShadow=!0,this.group.add(o),this.bodyMesh=o;const l=qc(new Fs({color:16777215,envMap:t,envMapIntensity:.6}),"p2p-car-wheel",{uRadius:{value:e.wheelRadius}},"varying vec3 vLocal;","vLocal = position;",`uniform float uRadius; ${_x}`,yx,Mx),c=e.wheelRadius,h=.12,f=[[0,.02],[c*.64,.105],[c*.72,h],[c*.93,h],[c,h*.72],[c,-h*.72],[c*.93,-h],[c*.72,-h],[c*.64,-.105],[0,-.02]].map(([y,_])=>new Je(y,_)),u=new ca(f,20).rotateZ(-Math.PI/2);{const y=u.getAttribute("position"),_=u.index,v=new z,E=new z,M=new z;for(let T=0;T<_.count;T+=3)if(v.fromBufferAttribute(y,_.getX(T)),E.fromBufferAttribute(y,_.getX(T+1)),M.fromBufferAttribute(y,_.getX(T+2)),E.clone().sub(v).cross(M.clone().sub(v)).dot(v.add(E).add(M))<0){const b=_.getX(T+1);_.setX(T+1,_.getX(T+2)),_.setX(T+2,b)}}u.computeVertexNormals(),this.tyre=u,this.tyreMaterial=l;for(let y=0;y<4;y++){const _=new Jt,v=new Dt(u,l);v.castShadow=!0,_.add(v),this.group.add(_),this.wheels.push(_),this.spinners.push(v)}const d=new rf,g=new Ei(1,1);d.setIndex(g.index),d.setAttribute("position",g.getAttribute("position")),d.setAttribute("uv",g.getAttribute("uv"));const m=new Float32Array(Ui*3),x=new Float32Array(Ui*3).fill(1);d.setAttribute("aAt",new Kn(m,3)),d.setAttribute("aLife",new Kn(x,3)),d.instanceCount=Ui;const p=new Dt(d,new Rn({transparent:!0,depthWrite:!1,vertexShader:`
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
        }`}));p.frustumCulled=!1,p.name="smoke",this.loose.add(p),this.puffs={life:x,at:m,vel:new Float32Array(Ui*3),geo:d,next:0,owed:0}}group=new Jt;wheels=[];spinners=[];loose=new Jt;lamps={uBrake:{value:0},uReverse:{value:0},uCrush:{value:new yt},uWide:{value:1},uSoft:{value:0}};bodyMesh;tyre;tyreMaterial;skin=null;puffs;nose=new z;was=new z;patch=new z;rubber=[0,0,0,0];smoke(e,t){const n=e[Ee.POWER],s=this.puffs,r=Math.min(1,Math.max(0,(.93-n)/.5));this.nose.set(0,.42,-this.shape.axleFront+.25).applyQuaternion(this.group.quaternion).add(this.group.position);const a=t>0?(this.nose.x-this.was.x)/t:0,o=t>0?(this.nose.y-this.was.y)/t:0,l=t>0?(this.nose.z-this.was.z)/t:0,c=Math.hypot(a,o,l)>120;this.was.copy(this.nose);for(let f=0;f<Ui;f++){if(s.life[f*3]>=1)continue;s.life[f*3]=c?1:Math.min(1,s.life[f*3]+t/ux);const u=Math.exp(-2.5*t);s.vel[f*3]=s.vel[f*3]*u,s.vel[f*3+2]=s.vel[f*3+2]*u,s.at[f*3]=s.at[f*3]+s.vel[f*3]*t,s.at[f*3+1]=s.at[f*3+1]+s.vel[f*3+1]*t,s.at[f*3+2]=s.at[f*3+2]+s.vel[f*3+2]*t}const h=(f,u,d,g,m,x)=>{const p=s.next;s.next=(s.next+1)%Ui,s.at[p*3]=f+(Math.random()-.5)*.5,s.at[p*3+1]=u,s.at[p*3+2]=d+(Math.random()-.5)*.5,s.vel[p*3]=a*g+(Math.random()-.5)*.6,s.vel[p*3+1]=m*(.6+Math.random()*.6),s.vel[p*3+2]=l*g+(Math.random()-.5)*.6,s.life[p*3]=.001,s.life[p*3+1]=Math.random(),s.life[p*3+2]=x};for(s.owed=r>0&&!c?s.owed+t*(2+16*r):0;s.owed>=1;)s.owed-=1,h(this.nose.x,this.nose.y,this.nose.z,.35,1.5,Math.min(1,r*1.6)*(.7+.3*Math.random()));for(let f=0;f<4;f++){const u=Ee.WHEELS+f*Ee.WHEEL_STRIDE,d=Math.abs(e[u+Ee.W_SPIN]*this.shape.wheelRadius-e[Ee.SPEED]),g=Math.abs(e[u+Ee.W_SLIP_TAN])>.3?Math.abs(e[u+Ee.W_SLIP_TAN])*Math.abs(e[Ee.SPEED]):0,m=e[u+Ee.W_GROUNDED]>.5?Math.max(d-4,g-4):0;if(this.rubber[f]=m>0&&!c?this.rubber[f]+t*Math.min(22,4+m*1.6):0,!(this.rubber[f]<1))for(this.patch.set(f%2===0?-this.shape.halfTrack:this.shape.halfTrack,-e[u+Ee.W_LENGTH]-this.shape.wheelRadius+.1,f<2?-this.shape.axleFront:this.shape.axleRear).applyQuaternion(this.group.quaternion).add(this.group.position);this.rubber[f]>=1;)this.rubber[f]=this.rubber[f]-1,h(this.patch.x,this.patch.y,this.patch.z,.1,.9,0)}s.geo.getAttribute("aAt").needsUpdate=!0,s.geo.getAttribute("aLife").needsUpdate=!0}body(e,t){const n=this.shape,s=this.look,r=s.screenFoot,a=s.screenHead,o=s.backHead,l=s.backFoot,c=[];for(let D=-e;D<=e+1e-6;D+=e/18)c.push(D);const h=[],f=[],u=[],d=[],g=19,m=D=>Math.min(Math.abs(D+n.axleFront),Math.abs(D-n.axleRear)),x=D=>{const F=D/e,B=Math.abs(F),k=t*(.8+.2*Math.sqrt(Math.max(0,1-Math.pow(B,5))))*(1-.1*ii(.82,1,B)),N=D<0?s.nose+(s.belt-s.nose)*ii(-e,r,D):s.belt+.03*ii(.3,.75,F)-.07*ii(.86,1,F),U=D<a?ii(r,a,D):D<o?1:1-ii(o,l,D),I=.035*(1-ii(.85,1,B)),P=N+I+(s.roof-N-I)*U*(1-.04*ii(o-.6,o,D)),V=U>.02?1:0,H=k*(.93-.2*Math.min(1,U*1.6)),ee=n.wheelRadius+pf,ne=m(D),ue=-.37+.1*ii(.86,1,B),de=ne<ee?Math.max(ue,Vc+Math.sqrt(ee*ee-ne*ne)):ue,pe=de+.085,$=Math.max(pe+.04,N-.26),j=[[k*.8,de,0,1],[k*.965,pe,0,1],[k,$,0,0],[k*.99,N-.07,0,0],[k*.93,N,0,0],[H+(k*.93-H)*.42,N+(P-N)*.5,.5,0],[H,P-(P-N)*.06,.94,0],[H*.72,P,1,0],[H*.36,P+I*.5,1,0]],ce=[],we=[],Ae=[0,0,0,0,0,0,1,.5,.15];ce.push([0,de]),we.push([0,0,V,1]),j.forEach(([ae,L,Te,me],fe)=>{ce.push([ae,L]),we.push([Te,Ae[fe],V,me])}),ce.push([0,P+I*.6]),we.push([1,0,V,0]);for(let ae=j.length-1;ae>=0;ae--){const[L,Te,me,fe]=j[ae];ce.push([-L,Te]),we.push([me,Ae[ae],V,fe])}const Ge=[(D-r)/(a-r),(D-o)/(l-o),0,e];return{p:ce,a:we,b:Ge}},p=c.map(x);p.forEach((D,F)=>{const B=c[F];D.p.forEach(([k,N],U)=>{h.push(k,N,B),f.push(...D.a[U]),u.push(D.b[0],D.b[1],Math.hypot(m(B),N-Vc)-n.wheelRadius,D.b[3])})});const y=(D,F)=>D*(g+1)+(F%(g+1)+(g+1))%(g+1);if(p[0].p.length!==g+1)throw new Error("the car body ring has changed its count");const _=new z,v=new z,E=new z,M=new z,T=new z,A=(D,F,B,k,N,U)=>{v.fromArray(h,D*3),E.fromArray(h,F*3),M.fromArray(h,B*3),T.subVectors(E,v).cross(M.clone().sub(v)),!(T.lengthSq()<1e-12)&&(_.copy(v).add(E).add(M).multiplyScalar(1/3),T.dot(_.sub(new z(k,N,U)))>=0?d.push(D,F,B):d.push(D,B,F))};for(let D=0;D+1<p.length;D++){const F=(c[D]+c[D+1])/2;for(let B=0;B<=g;B++){const k=y(D,B),N=y(D,B+1),U=y(D+1,B+1),I=y(D+1,B);A(k,N,U,0,.1,F),A(k,U,I,0,.1,F)}}for(const D of[0,p.length-1]){const F=c[D],B=D===0?F+1:F-1,k=h.length/3,N=p[D].p.map(P=>P[1]),U=(Math.min(...N)+Math.max(...N))/2;h.push(0,U,F),f.push(0,0,0,0),u.push(9,9,9,e);const I=h.length/3;p[D].p.forEach(([P,V],H)=>{h.push(P,V,F),f.push(0,0,0,p[D].a[H][3]),u.push(9,9,9,e)});for(let P=0;P<=g;P++)A(k,I+P,I+(P+1)%(g+1),0,U,B)}const b=D=>{const F=D*(t+.07),B=s.belt+.04,k=r+.42,N=.085,U=.05,I=.07,P=h.length/3;for(const H of[-1,1])for(const ee of[-1,1])for(const ne of[-1,1])h.push(F+H*N,B+ee*U,k+ne*I*(ee>0?.7:1)),f.push(0,0,0,1),u.push(9,9,9,e);const V=(H,ee,ne,ue)=>{A(P+H,P+ee,P+ne,F,B,k),A(P+H,P+ne,P+ue,F,B,k)};V(0,1,3,2),V(4,5,7,6),V(0,1,5,4),V(2,3,7,6),V(0,2,6,4),V(1,3,7,5)};b(-1),b(1);const w=new Nt;return w.setAttribute("position",new _t(h,3)),w.setAttribute("carA",new _t(f,4)),w.setAttribute("carB",new _t(u,4)),w.setIndex(d),w.computeVertexNormals(),w.computeBoundingSphere(),w}useSoft(e){this.skin?.dispose(),this.skin=e?new fx(this.bodyMesh,e,this.group,this.loose,this.tyre,this.tyreMaterial):null,this.lamps.uSoft.value=e?1:0}soft(e,t,n){this.skin&&e.length&&this.skin.apply(e,t,n)}splash(e){const t=this.puffs,n=Math.min(1,e/25),s=Math.round(14+26*n);for(let r=0;r<s;r++){const a=t.next;t.next=(t.next+1)%Ui;const o=Math.random()*Math.PI*2,l=.8+Math.random()*1.6,c=1.5+Math.random()*(3+6*n);t.at[a*3]=this.group.position.x+Math.cos(o)*l,t.at[a*3+1]=this.group.position.y+.2,t.at[a*3+2]=this.group.position.z+Math.sin(o)*l,t.vel[a*3]=Math.cos(o)*c,t.vel[a*3+1]=2.5+Math.random()*(3+5*n),t.vel[a*3+2]=Math.sin(o)*c,t.life[a*3]=.001,t.life[a*3+1]=Math.random(),t.life[a*3+2]=0}}update(e,t,n=0){this.group.position.set(e[Ee.POS],e[Ee.POS+1],e[Ee.POS+2]),this.group.quaternion.set(e[Ee.ROT],e[Ee.ROT+1],e[Ee.ROT+2],e[Ee.ROT+3]).normalize();const s=this.shape,r=this.skin?Math.max(0,e[Ee.WHEELS_OFF]):0;for(let a=0;a<4;a++){const o=Ee.WHEELS+a*Ee.WHEEL_STRIDE,l=this.wheels[a];l.visible=!(r>>a&1),l.position.set(a%2===0?-s.halfTrack:s.halfTrack,-e[o+Ee.W_LENGTH],a<2?-s.axleFront:s.axleRear),l.rotation.y=-e[o+Ee.W_STEER],this.spinners[a].rotation.x=-e[o+Ee.W_ANGLE]}this.lamps.uBrake.value=t?1:0,this.lamps.uReverse.value=e[Ee.GEAR]<0?1:0,this.lamps.uCrush.value.set(e[Ee.CRUSH],e[Ee.CRUSH+1],e[Ee.CRUSH+2],e[Ee.CRUSH+3]),this.smoke(e,n)}}const bx=[Ul,{name:"Pico",paint:14263572,screenFoot:-.78,screenHead:-.18,backHead:1.22,backFoot:1.78,nose:.2,belt:.42,roof:.915},{name:"Brannan",paint:12734476,screenFoot:-.5,screenHead:.22,backHead:.98,backFoot:1.85,nose:.2,belt:.41,roof:.815},{name:"Tamalpais",paint:1395358,screenFoot:-.8,screenHead:-.08,backHead:.9,backFoot:1.62,nose:.16,belt:.41,roof:.895},{name:"Hauler",paint:14605008,screenFoot:-2,screenHead:-1.5,backHead:2.38,backFoot:2.5,nose:.6,belt:.72,roof:1.565,glassTo:-.75},{name:"Marauder",paint:1447706,screenFoot:-.45,screenHead:.25,backHead:.95,backFoot:1.8,nose:.22,belt:.43,roof:.815},{name:"Bulwark",paint:4869973,screenFoot:-.95,screenHead:-.5,backHead:.75,backFoot:.95,nose:.62,belt:.78,roof:1.365}],Sx=i=>bx.find(e=>e.name===i)??{...Ul,name:i};class Ex{nx;nz;cell;x0;z0;h;constructor(e){const t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint32(4,!0);if(t.getUint32(0,!0)!==1464873552||n<1||n>8)throw new Error(`not a world file this build reads (version ${n})`);this.nx=t.getUint32(8,!0),this.nz=t.getUint32(12,!0),this.cell=t.getFloat32(16,!0),this.x0=t.getFloat32(20,!0),this.z0=t.getFloat32(24,!0);const s=t.getFloat32(28,!0);this.h=new Float32Array(this.nx*this.nz);for(let r=0;r<this.h.length;r++)this.h[r]=s+t.getInt16(32+r*2,!0)*.01}ways=[];setWays(e){this.ways=e}onWay(e,t,n,s){const r=e.p[t],a=e.p[t+1],o=a[0]-r[0],l=a[2]-r[2],c=o*o+l*l;if(c<1e-6)return null;const h=Math.sqrt(c),f=((n-r[0])*o+(s-r[2])*l)/c,u=.8/h;if(f<(t===0?0:-u)||f>(t+2===e.p.length?1:1+u))return null;const d=r[0]+o*f-n,g=r[2]+l*f-s;if(d*d+g*g>e.half*e.half)return null;const m=Math.min(1,Math.max(0,f));return r[1]+(a[1]-r[1])*m}surface(e,t,n){const s=this.at(e,t),r=n+.35;let a=-1/0,o=!1;for(const l of this.ways)for(let c=0;c+1<l.p.length;c++){const h=this.onWay(l,c,e,t);h!==null&&(l.k==="tunnel"&&n<h+(l.clear??5.6)&&(o=!0),h<=r&&h>a&&(a=h))}return!o&&s<=r&&s>a&&(a=s),a===-1/0?s:a}tunnel(e,t,n){for(const s of this.ways)if(s.k==="tunnel")for(let r=0;r+1<s.p.length;r++){const a=this.onWay(s,r,e,n);if(a!==null&&t>a-2&&t<a+(s.clear??5.6)+.5)return{floor:a,roof:a+(s.clear??5.6),way:s,si:r}}return null}deckOver(e,t,n){let s=1/0;for(const r of this.ways)if(r.k==="deck")for(let a=0;a+1<r.p.length;a++){const o=this.onWay(r,a,e,t);o!==null&&o-1.2>n&&o-1.2<s&&(s=o-1.2)}return s}at(e,t){const n=Math.min(this.nx-1.001,Math.max(0,(e-this.x0)/this.cell)),s=Math.min(this.nz-1.001,Math.max(0,(t-this.z0)/this.cell)),r=Math.floor(n),a=Math.floor(s),o=n-r,l=s-a,c=a*this.nx+r,h=this.h;return(h[c]*(1-o)+h[c+1]*o)*(1-l)+(h[c+this.nx]*(1-o)+h[c+this.nx+1]*o)*l}}async function Ax(i){const e=await fetch(i);if(!e.ok)throw new Error(`${i}: ${e.status}`);return new Uint8Array(await e.arrayBuffer())}const Tx=1464873552,Rx=8;function Cx(i){const e=new DataView(i.buffer,i.byteOffset,i.byteLength);if(e.getUint32(0,!0)!==Tx)throw new Error("not a world file");const t=e.getUint32(8,!0),n=e.getUint32(12,!0),s=e.getFloat32(16,!0),r=e.getFloat32(20,!0),a=e.getFloat32(24,!0),o=e.getFloat32(28,!0),l=new Float32Array(t*n);for(let h=0;h<l.length;h++)l[h]=o+e.getInt16(32+h*2,!0)*.01;return{nx:t,nz:n,cell:s,x0:r,z0:a,h:l,at:(h,f)=>{const u=Math.min(t-1.001,Math.max(0,(h-r)/s)),d=Math.min(n-1.001,Math.max(0,(f-a)/s)),g=Math.floor(u),m=Math.floor(d),x=u-g,p=d-m,y=m*t+g;return(l[y]*(1-x)+l[y+1]*x)*(1-p)+(l[y+t]*(1-x)+l[y+t+1]*x)*p}}}const Lx=2e3,Vr=500,Px=5;function Dx(i,e=Lx){const n=111320*Math.cos(i.lat*Math.PI/180),s=Math.round(i.lat*111320/Vr)*Vr/111320,r=Math.round(i.lon*n/Vr)*Vr/n,a=e/2/111320,o=e/2/n;return{key:`at_${s.toFixed(4)}_${r.toFixed(4)}_${e}_m${Px}b${Rx}`,centre:{lon:r,lat:s},bbox:[r-o,s-a,r+o,s+a]}}const Ix=/^(motorway|trunk|primary|secondary|tertiary|residential|unclassified)$/,Ux=(i,e,t)=>{let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const[a,o]=i[s],[l,c]=i[r];o>t!=c>t&&e<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n};function Fx(i,e,t,n,s){const[r,a,o,l]=i.box,c=48,h=new Map;i.buildings.forEach((m,x)=>{if(m.m)return;let p=1/0,y=-1/0,_=1/0,v=-1/0;for(const[E,M]of m.r)p=Math.min(p,E),y=Math.max(y,E),_=Math.min(_,M),v=Math.max(v,M);for(let E=Math.floor(p/c);E<=Math.floor(y/c);E++)for(let M=Math.floor(_/c);M<=Math.floor(v/c);M++){const T=`${E}_${M}`;(h.get(T)??h.set(T,[]).get(T)).push(x)}});const f=(m,x)=>(h.get(`${Math.floor(m/c)}_${Math.floor(x/c)}`)??[]).some(p=>Ux(i.buildings[p].r,m,x)),u=(m,x,p,y)=>{if(!(m>r+30&&m<o-30&&x>a+30&&x<l-30))return!1;for(const _ of[-3,0,3])for(const v of[-1.2,1.2]){const E=m+p*_-y*v,M=x+y*_+p*v;if(f(E,M)||e(E,M)<t+.2)return!1}return!0};let d=null;for(const m of i.roads)if(!(!Ix.test(m.c)||m.b))for(let x=0;x+1<m.p.length;x++){const[p,y]=m.p[x],[_,v]=m.p[x+1],E=_-p,M=v-y,T=Math.hypot(E,M);if(T<12)continue;const A=Math.max(5/T,Math.min(1-5/T,((n-p)*E+(s-y)*M)/(T*T))),b=p+E*A,w=y+M*A,D=Math.hypot(b-n,w-s);d&&D>=d.d||u(b,w,E/T,M/T)&&(d={d:D,qx:b,qz:w,dx:E,dz:M,c:m.c})}if(!d)return null;const g=m=>Math.round(m*10)/10;return{x:g(d.qx),z:g(d.qz),heading:Math.round(Math.atan2(d.dx,-d.dz)*1e3)/1e3,road:d.c,off:g(d.d)}}const Xc=6378137,ja=Math.PI/180;function Nx(i,e){const t=Math.cos(i.lat*ja);return{x:(e.lon-i.lon)*ja*Xc*t,y:(e.lat-i.lat)*ja*Xc}}function mf(i){const e=/^\s*(-?\d{1,2}(?:\.\d+)?)\s*,\s*(-?\d{1,3}(?:\.\d+)?)\s*$/.exec(i.get("at")??"");if(!e)return null;const t=Number(e[1]),n=Number(e[2]);return Math.abs(t)>85||Math.abs(n)>180?null:{lat:t,lon:n,label:i.get("place")||`${t.toFixed(5)}, ${n.toFixed(5)}`}}function ll(i){const e=new URLSearchParams(location.search);e.delete("at"),e.delete("place"),e.delete("start"),e.delete("world"),i&&(e.set("at",`${i.lat.toFixed(5)},${i.lon.toFixed(5)}`),e.set("place",i.label.split(",").slice(0,2).join(",").slice(0,60)));const t=e.toString();return`${location.pathname}${t?`?${t}`:""}`}const zx=/^\s*(-?\d{1,2}(?:\.\d+)?)\s*[,\s]\s*(-?\d{1,3}(?:\.\d+)?)\s*$/;let $c=0;async function Ox(i){const e=zx.exec(i);if(e){const r=Number(e[1]),a=Number(e[2]);if(Math.abs(r)<=85&&Math.abs(a)<=180)return[{label:`${r.toFixed(5)}, ${a.toFixed(5)}`,lat:r,lon:a}]}const t=$c+1100-Date.now();t>0&&await new Promise(r=>setTimeout(r,t)),$c=Date.now();const n=await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&q=${encodeURIComponent(i)}`,{headers:{Accept:"application/json"}});if(!n.ok)throw new Error(`the address search answered ${n.status}`);return(await n.json()).map(r=>({label:r.display_name,lat:Number(r.lat),lon:Number(r.lon)})).filter(r=>Number.isFinite(r.lat)&&Number.isFinite(r.lon)&&Math.abs(r.lat)<=85)}const kx="p2p-squares",pr="squares",Bx=6;function gf(){return new Promise((i,e)=>{const t=indexedDB.open(kx,1);t.onupgradeneeded=()=>{t.result.createObjectStore(pr,{keyPath:"key"})},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error??new Error("IndexedDB refused"))})}const xf=i=>new Promise((e,t)=>{i.onsuccess=()=>e(i.result),i.onerror=()=>t(i.error)});async function Hx(i){try{const e=await gf(),t=await xf(e.transaction(pr).objectStore(pr).get(i));return e.close(),t??null}catch{return null}}async function Yc(i){try{const e=await gf(),t=e.transaction(pr,"readwrite"),n=t.objectStore(pr);n.put(i);const s=await xf(n.getAll());for(const r of s.sort((a,o)=>o.used-a.used).slice(Bx))n.delete(r.key);return await new Promise((r,a)=>{t.oncomplete=()=>r(),t.onerror=()=>a(t.error),t.onabort=()=>a(t.error)}),e.close(),!0}catch(e){return console.warn("the square was made and not kept:",e),!1}}async function Gx(i,e,t){const n=Dx(i),s=Vx().has("remake")?null:await Hx(n.key);if(s){t("a square made here before");const o=JSON.parse(s.page),l=new Uint8Array(s.blob),c=o.from.at;if(!c||Math.abs(c.lat-i.lat)>2e-4||Math.abs(c.lon-i.lon)>2e-4){const h=Nx(n.centre,i),f=Cx(l),u=Fx(o,f.at,o.ground.sea??-1/0,h.x,-h.y);u&&(o.starts=[{label:i.label,...u}])}return o.starts[0]&&(o.starts[0].label=i.label),Yc({...s,used:Date.now()}),{blob:l,page:o,mask:{...s.kinds,data:new Uint8Array(s.kinds.data)},kept:!0,seconds:null}}const r=await new Promise((o,l)=>{const c=new Worker(new URL(""+new URL("worker-DOQDnaDz.js",import.meta.url).href,import.meta.url),{type:"module"});c.onmessage=h=>{const f=h.data;"step"in f?t(f.step):"done"in f?(c.terminate(),o(f.done)):(c.terminate(),l(new Error(f.error)))},c.onerror=h=>{c.terminate(),l(new Error(`the worker that makes a square failed: ${h.message||"it could not be started"}`))},c.postMessage({lat:i.lat,lon:i.lon,label:i.label,kinds:e})});t("keeping the square on this device");const a=await Yc({key:r.key,used:Date.now(),blob:r.blob.slice(0),page:r.page,kinds:{...r.kinds,data:r.kinds.data.slice(0)}});return{blob:new Uint8Array(r.blob),page:JSON.parse(r.page),mask:{...r.kinds,data:new Uint8Array(r.kinds.data)},kept:a,seconds:r.seconds}}const Vx=()=>new URLSearchParams(location.search),Wx=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,qx=`
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
  }`,Xx=`
  uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 texel;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tSrc, vUv).rgb * 0.25;
    c += (texture2D(tSrc, vUv + vec2(texel.x, 0.0)).rgb + texture2D(tSrc, vUv - vec2(texel.x, 0.0)).rgb + texture2D(tSrc, vUv + vec2(0.0, texel.y)).rgb + texture2D(tSrc, vUv - vec2(0.0, texel.y)).rgb) * 0.125;
    c += (texture2D(tSrc, vUv + texel).rgb + texture2D(tSrc, vUv - texel).rgb + texture2D(tSrc, vUv + vec2(texel.x, -texel.y)).rgb + texture2D(tSrc, vUv + vec2(-texel.x, texel.y)).rgb) * 0.0625;
    gl_FragColor = vec4(c + texture2D(tAdd, vUv).rgb, 1.0);
  }`,$x=`
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
  }`;class Kc{constructor(e,t,n){this.renderer=e,this.quality=t;const s=t==="high";this.target=new ci(4,4,{type:Wi,samples:n,depthBuffer:!0}),s&&(this.target.depthTexture=new Al(4,4),this.target.depthTexture.type=bi);const r=()=>new ci(4,4,{type:Wi,depthBuffer:!1,minFilter:bn,magFilter:bn});for(let l=0;l<3;l++)this.mips.push(r());for(let l=0;l<2;l++)this.ups.push(r());const a=(l,c,h={})=>new Rn({vertexShader:Wx,fragmentShader:l,uniforms:c,defines:h,depthTest:!1,depthWrite:!1,toneMapped:!1});this.down=a(qx,{tSrc:{value:null},texel:{value:new Je},knee:{value:0}}),this.up=a(Xx,{tSrc:{value:null},tAdd:{value:null},texel:{value:new Je}}),this.final=a($x,{tScene:{value:this.target.texture},tBloom:{value:null},tDepth:{value:this.target.depthTexture??null},bloom:{value:t==="high"?.085:.07},exposure:{value:1},time:{value:0},size:{value:new Je},ao:{value:.75},nearFar:{value:new Je(.3,6e3)}},s?{USE_AO:""}:{});const o=new Nt;o.setAttribute("position",new _t([-1,-1,0,3,-1,0,-1,3,0],3)),o.setAttribute("uv",new _t([0,0,2,0,0,2],2)),this.quad=new Dt(o,this.down),this.quad.frustumCulled=!1,this.scene.add(this.quad)}scene=new nl;camera=new Ll(-1,1,1,-1,0,1);quad;target;mips=[];ups=[];down;up;final;size=new Je;frame=0;static samples(e){if(!e.capabilities.isWebGL2)return-1;const t=e.getContext();if(!(t.getExtension("EXT_color_buffer_half_float")||t.getExtension("EXT_color_buffer_float")))return-1;const n=a=>{const o=t.createFramebuffer(),l=t.createRenderbuffer(),c=t.createTexture();t.bindFramebuffer(t.FRAMEBUFFER,o),a?(t.bindRenderbuffer(t.RENDERBUFFER,l),t.renderbufferStorageMultisample(t.RENDERBUFFER,4,t.RGBA16F,8,8),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,l)):(t.bindTexture(t.TEXTURE_2D,c),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,8,8,0,t.RGBA,t.HALF_FLOAT,null),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,c,0));const h=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE&&t.getError()===t.NO_ERROR;return t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.bindTexture(t.TEXTURE_2D,null),t.deleteFramebuffer(o),t.deleteRenderbuffer(l),t.deleteTexture(c),h};for(;t.getError()!==t.NO_ERROR;);const s=n(!1),r=s&&n(!0);return e.resetState(),s?r?4:0:-1}fit(){const e=this.renderer.getDrawingBufferSize(new Je);if(e.equals(this.size))return;this.size.copy(e),this.target.setSize(e.x,e.y);let t=e.x,n=e.y;this.mips.forEach((s,r)=>{const a=r===0?4:2;t=Math.max(2,Math.round(t/a)),n=Math.max(2,Math.round(n/a)),s.setSize(t,n)}),this.ups[0].setSize(this.mips[1].width,this.mips[1].height),this.ups[1].setSize(this.mips[0].width,this.mips[0].height),this.final.uniforms.size.value.copy(e)}pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera)}render(e,t){this.fit();const n=this.renderer;n.setRenderTarget(this.target),n.render(e,t);const s=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1;const r=this.down.uniforms,a=this.up.uniforms;let o=this.target.texture,l=this.size.x,c=this.size.y;this.mips.forEach((f,u)=>{r.tSrc.value=o,r.texel.value.set(1/l,1/c).multiplyScalar(u===0?2:1),r.knee.value=u===0?1:0,this.pass(this.down,f),o=f.texture,l=f.width,c=f.height}),a.tSrc.value=this.mips[2].texture,a.tAdd.value=this.mips[1].texture,a.texel.value.set(1/this.mips[2].width,1/this.mips[2].height),this.pass(this.up,this.ups[0]),a.tSrc.value=this.ups[0].texture,a.tAdd.value=this.mips[0].texture,a.texel.value.set(1/this.ups[0].width,1/this.ups[0].height),this.pass(this.up,this.ups[1]);const h=this.final.uniforms;h.tBloom.value=this.ups[1].texture,h.exposure.value=n.toneMappingExposure,h.time.value=this.frame++%240/240,h.nearFar.value.set(t.near,t.far),this.pass(this.final,null),n.shadowMap.autoUpdate=s}get name(){return this.quality}}function Yx(i){const e=i.has("test"),t=i.get("q"),n=t==="low"||t==="high"?t:"mid";return ix(n),{dpr:Math.min(Number(i.get("dpr")??(e?1:n==="low"?1.5:2)),window.devicePixelRatio||1),shadows:i.get("shadows")?i.get("shadows")!=="0":!e,far:Number(i.get("far")??1200),quality:n}}const Kx=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,jx=`
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
  }`,jc=7e3;class Zx{constructor(e,t){this.knobs=t,sx(),uf.far=t.far;const n=t.quality;if(this.renderer=new Jg({canvas:e,antialias:n==="low",powerPreference:"high-performance"}),this.renderer.setPixelRatio(t.dpr),this.renderer.outputColorSpace=ln,this.renderer.toneMapping=Ph,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=t.shadows,this.renderer.shadowMap.type=Lh,this.renderer.info.autoReset=!1,n!=="low"){const c=Kc.samples(this.renderer);c>=0&&(this.post=new Kc(this.renderer,n,c))}const s=new Rn({vertexShader:Kx,fragmentShader:jx,side:vn,depthWrite:!1,fog:!1,uniforms:{eyeY:{value:0}},defines:{CLOUDS:""}});this.skyUniforms=s.uniforms,this.sky=new Dt(new Tl(1,32,16),s),this.sky.frustumCulled=!1,this.sky.renderOrder=-1;const r=new rl(this.renderer),a=new nl;a.add(this.sky),this.reflections=r.fromScene(a,0,.1,10).texture,r.dispose(),this.sky.scale.setScalar(jc*.9),this.scene.add(this.sky),this.scene.fog=new El(10466511,1/(t.far*1.4)),this.scene.add(new fd(12899306,11771271,2.9)),this.square=n==="low"?260:210,this.mapSize=n==="low"?1024:2048,this.sun.castShadow=t.shadows,this.sun.shadow.mapSize.set(this.mapSize,this.mapSize);const o=this.sun.shadow.camera,l=this.square/2;o.left=-l,o.right=l,o.top=l,o.bottom=-l,o.near=10,o.far=760,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.45,this.sun.shadow.radius=1.6,this.scene.add(this.sun,this.sun.target)}renderer;scene=new nl;sun=new pd(16767405,4.3);reflections;sky;skyUniforms;post=null;ahead=new z;square;mapSize;resize(e){const t=window.innerWidth,n=window.innerHeight;this.renderer.setSize(t,n,!1),e.aspect=t/n,e.far=jc,e.updateProjectionMatrix()}follow(e,t){this.sky.position.copy(t),this.skyUniforms.eyeY.value=t.y,this.ahead.set(e.x-t.x,0,e.z-t.z);const n=this.ahead.length();n>.5?this.ahead.multiplyScalar(this.square*.3/n):this.ahead.set(0,0,0);const s=this.square/this.mapSize,r=Math.round((e.x+this.ahead.x)/s)*s,a=Math.round((e.z+this.ahead.z)/s)*s;this.sun.target.position.set(r,e.y,a),this.sun.position.copy(this.sun.target.position).addScaledVector(_i,380),this.sun.target.updateMatrixWorld()}draw(e){this.renderer.info.reset();for(const t of this.scene.children)t.userData.tend?.(e.position);this.post?this.post.render(this.scene,e):this.renderer.render(this.scene,e)}}const xs=`?v=${encodeURIComponent("588b3e0 2026-11-23 01:01Z".split(" ")[0])}`,Zc={canon:[.075,.15,.034],pull:.65,soft:!0,second:[.19,.145,.095],patch:.8,patchSize:4.8,patchAt:.8,fine:[24,24],fineAmp:.8,mid:5,midAmp:.55,lean:[1.25,1,.5],coarse:.24,stain:[1.1,1.05,.86]},Jc={canon:[.175,.175,.18],pull:.62,second:[.12,.12,.125],patch:.7,patchSize:9,patchAt:.66,fine:[11,11],fineAmp:.3,mid:2,midAmp:.12,coarse:.14,stain:[.88,.88,.88],crack:.5,gloss:.4},er=[{canon:[0,0,0],pull:0,fine:[1,1],fineAmp:0,mid:1,midAmp:0,coarse:0,stain:[1,1,1]},Zc,{canon:[.045,.085,.03],pull:.55,soft:!0,second:[.105,.075,.05],patch:.9,patchSize:1.8,patchAt:.6,fine:[41,41],fineAmp:.5,mid:13,midAmp:.7,lean:[.9,1,.7],coarse:.5,stain:[1.25,1.1,.8]},{canon:[.5,.41,.27],pull:.65,soft:!0,second:[.36,.29,.19],patch:.5,patchSize:3,patchAt:.62,fine:[19,19],fineAmp:.34,mid:3.1,midAmp:.34,coarse:.2,stain:[.85,.85,.85]},{canon:[.2,.155,.1],pull:.6,soft:!0,second:[.085,.13,.04],patch:.7,patchSize:2.2,patchAt:.6,fine:[43,43],fineAmp:.4,mid:9,midAmp:.35,coarse:.25,stain:[.8,.8,.8]},{canon:[.2,.195,.185],pull:.7,second:[.12,.12,.11],patch:.5,patchSize:1.5,patchAt:.6,fine:[17,17],fineAmp:.4,mid:3.3,midAmp:.3,coarse:.3,stain:[.8,.8,.8],cell:[.9,.6],stagger:1,tone:.8,joint:.03,jointDark:.6,crown:.3},{canon:[.07,.36,.44],pull:.9,fine:[1,1],fineAmp:0,mid:2.1,midAmp:.5,coarse:.1,stain:[1,1,1],gloss:1,cell:[.25,.25],joint:.006,jointDark:.2},{canon:[.37,.35,.31],pull:.6,second:[.2,.16,.11],patch:.45,patchSize:1.4,patchAt:.64,fine:[9,9],fineAmp:.24,mid:31,midAmp:.2,coarse:.18,stain:[.8,.8,.78],crack:.5,gloss:.18},Jc,{canon:[0,0,0],pull:0,fine:[21,21],fineAmp:.14,mid:3,midAmp:.06,coarse:.1,stain:[.92,.92,.92],crack:.25,gloss:.3},{canon:[.42,.4,.355],pull:.6,second:[.24,.22,.19],patch:.4,patchSize:2.5,patchAt:.72,fine:[9,9],fineAmp:.22,mid:3,midAmp:.1,coarse:.11,stain:[.86,.85,.82],crack:.4,gloss:.22,cell:[1.83,1.83],tone:.2,joint:.009,jointDark:.45},{canon:[.36,.33,.29],pull:.42,second:[.24,.22,.2],patch:.35,patchSize:3,patchAt:.72,fine:[14,14],fineAmp:.2,mid:3,midAmp:.1,coarse:.14,stain:[.84,.84,.84],gloss:.3,cell:[.6,.3],stagger:.5,tone:.25,joint:.006,jointDark:.5},{...Jc,second:[.09,.09,.095],patch:.5,patchSize:1.4,patchAt:.74,cell:[2.6,17],joint:.05,jointDark:-.9,gate:5.2/17},{canon:[.21,.145,.1],pull:.7,second:[.12,.09,.07],patch:.5,patchSize:4,patchAt:.62,fine:[2.2,85],fineAmp:.34,mid:6,midAmp:.1,coarse:.1,stain:[.78,.78,.76],gloss:.12,cell:[4.2,.19],stagger:1,tone:.42,joint:.005,jointDark:.8,crown:.3},{...Zc,patch:0,stain:[1.1,1.05,.9],cell:[6,4e3],tone:.12}];function Jx(i){const e=new Uint8Array(768),t=new je;for(let n=0;n<256;n++){const s=n>=30?Math.min(er.length-1,10+Math.floor((n-30)/45)):Math.min(n,9);s===0?t.copy(i):s===9?t.setRGB(.1,.2,.17):t.setRGB(...er[s].canon),t.convertLinearToSRGB(),e.set([Math.round(t.r*255),Math.round(t.g*255),Math.round(t.b*255)],n*3)}return e}const In={turned:30,steps:45,firstTurnedRow:10,deckRow:13,shoreRow:5},Za=8;function Qx(){const i=new Float32Array(er.length*Za*4);er.forEach((t,n)=>{const s=t.cell??[1,1];i.set([...t.canon,t.pull+(t.soft?2:0),...t.second??[0,0,0],t.patch??0,...t.fine,t.fineAmp,1/(t.patchSize??1),t.mid,t.midAmp,t.coarse,t.patchAt??2,...t.lean??[1,1,1],t.gloss??0,...t.stain,t.crack??0,...s,t.stagger??0,t.tone??0,t.joint??.001,t.jointDark??0,t.gate??1,t.crown??0],n*Za*4)});const e=new qi(i,Za,er.length,xn,Fn);return e.minFilter=e.magFilter=cn,e.generateMipmaps=!1,e.colorSpace=Gn,e.needsUpdate=!0,e}const ev=`
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
`,tv=(i,e,t)=>`
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
  }`,Wr=64,nv=3,iv=i=>`vec3(${i.r.toFixed(4)}, ${i.g.toFixed(4)}, ${i.b.toFixed(4)})`,cl=new je(1456202),vf=`
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
  }`,sv=`
  {
    vec3 toEye = normalize(cameraPosition - vWorld);
    float glare = pow(max(dot(reflect(-toEye, vec3(0.0, 1.0, 0.0)), P2P_SUN), 0.0), 7.0) * pow(1.0 - max(toEye.y, 0.0), 2.0);
    outgoingLight += vec3(1.0, 0.88, 0.72) * glare * p2pLit * p2pGloss;
  }
  if (p2pWet > 0.0) {
    ${vf}
    outgoingLight = mix(outgoingLight, p2pSea, p2pWet);
  }`;function rv(i,e){const t=new Uint32Array(400);for(const s of i.h){const r=Math.round((s-e)*100);r>10&&r<400&&t[r]++}let n=0;for(let s=1;s<400;s++)t[s]>t[n]&&(n=s);return t[n]>i.h.length/50?e+n/100:-1/0}function av(i){const e=Math.ceil(i.width/2),t=Math.ceil(i.height/2),n=new Uint8Array(e*t*4),s=Jx(cl);for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=i.data[Math.min(i.height-1,(t-1-a)*2)*i.width+Math.min(i.width-1,o*2)],c=(a*e+o)*4;n[c]=s[l*3],n[c+1]=s[l*3+1],n[c+2]=s[l*3+2],n[c+3]=255}const r=new qi(n,e,t,xn);return r.colorSpace=ln,r.generateMipmaps=!0,r.minFilter=ai,r.magFilter=bn,r.needsUpdate=!0,r}function ov(i,e,t,n=null){const{nx:s,nz:r,cell:a,x0:o,z0:l,h:c}=i;rx(i);const[h,f,u,d]=e.box;!t&&n&&(t=av(n));const g=new Jt,m=[],x=Il(),p=x==="low",y=e.ground.water+.6,_=new qi(new Uint8Array([0]),1,1,_s);_.needsUpdate=!0;const v={uKinds:{value:_},uLooks:{value:Qx()},uKindsBox:{value:new yt(0,0,1,1)},uKindsSize:{value:new Je(1,1)},uKindsOn:{value:0},uSea:{value:y},uFlat:{value:e.ground.flat??Math.max(rv(i,e.ground.water),y-1)}},E=li(new Nn({map:t,color:t?16777215:7304296}),e,{key:`p2p-ground-${x}`,uniforms:v,fragmentPars:ev,color:tv(!p,x==="high",iv(cl)),final:sv}),M=(I,P,V)=>{I.format=_s,I.colorSpace=Gn,I.minFilter=I.magFilter=cn,I.generateMipmaps=!1,I.flipY=!1,v.uKinds.value=I,v.uKindsBox.value.set(h,f,P/(u-h),V/(d-f)),v.uKindsSize.value.set(P,V),v.uKindsOn.value=1};let T;if(n){const I=new qi(n.data,n.width,n.height,_s);I.unpackAlignment=1,I.needsUpdate=!0,M(I,n.width,n.height),T=Promise.resolve()}else T=new nf().loadAsync(`./world/${e.name}.kinds.png${xs}`).then(I=>{const{width:P,height:V}=I.image;M(I,P,V)},()=>{console.warn(`no kind mask for ${e.name}: the ground is the photograph alone`)});const A=e.photo??(n?{x0:h,z0:f,w:u-h,d:d-f}:null),b=(I,P)=>c[Math.min(r-1,Math.max(0,P))*s+Math.min(s-1,Math.max(0,I))],w=(I,P,V,H,ee,ne)=>{const ue=Math.ceil(V/ee),de=Math.ceil(H/ee),pe=new Float32Array((ue+1)*(de+1)*3),$=new Float32Array(pe.length),j=new Float32Array((ue+1)*(de+1)*2);let ce=0,we=0;for(let Ge=0;Ge<=de;Ge++)for(let ae=0;ae<=ue;ae++){const L=Math.min(I+V,I+ae*ee),Te=Math.min(P+H,P+Ge*ee),me=o+L*a,fe=l+Te*a;pe[ce]=me,pe[ce+1]=b(L,Te)-ne,pe[ce+2]=fe;const xe=(b(L+1,Te)-b(L-1,Te))/(2*a),Le=(b(L,Te+1)-b(L,Te-1))/(2*a),ge=1/Math.hypot(xe,1,Le);$[ce]=-xe*ge,$[ce+1]=ge,$[ce+2]=-Le*ge,ce+=3,A&&(j[we]=(me-A.x0)/A.w,j[we+1]=1-(fe-A.z0)/A.d),we+=2}const Ae=new Nt;return Ae.setAttribute("position",new Tt(pe,3)),Ae.setAttribute("normal",new Tt($,3)),Ae.setAttribute("uv",new Tt(j,2)),Ae.computeBoundingSphere(),Ae},D=(I,P,V)=>{const H=[];for(let ee=0;ee<P;ee+=V)for(let ne=0;ne<I;ne+=V){const ue=Math.min(I,ne+V),de=Math.min(P,ee+V),pe=ee*(I+1)+ne,$=ee*(I+1)+ue,j=de*(I+1)+ne,ce=de*(I+1)+ue;H.push(pe,j,$,$,j,ce)}return H};for(let I=0;I<r-1;I+=Wr)for(let P=0;P<s-1;P+=Wr){const V=Math.min(Wr,s-1-P),H=Math.min(Wr,r-1-I),ee=w(P,I,V,H,1,0),ne=[];for(const ue of[1,2,4,8]){const de=new Nt;de.setAttribute("position",ee.getAttribute("position")),de.setAttribute("normal",ee.getAttribute("normal")),de.setAttribute("uv",ee.getAttribute("uv")),de.setIndex(new Ts(D(V,H,ue),1)),de.boundingSphere=ee.boundingSphere;const pe=new Dt(de,E);pe.receiveShadow=!0,pe.matrixAutoUpdate=!1,pe.visible=ue===8,g.add(pe),ne.push(pe)}m.push({x:o+(P+V/2)*a,z:l+(I+H/2)*a,hx:V*a/2,hz:H*a/2,levels:ne})}const F=16,B=Math.ceil(Math.max(s,r)/3/F)*F;for(let I=0;I<r-1;I+=B)for(let P=0;P<s-1;P+=B){const V=Math.min(B,s-1-P),H=Math.min(B,r-1-I),ee=w(P,I,V,H,F,nv),ne=Math.ceil(V/F),ue=Math.ceil(H/F);ee.setIndex(new Ts(D(ne,ue,1),1));const de=new Dt(ee,E);de.receiveShadow=!0,de.matrixAutoUpdate=!1,g.add(de)}const k=li(new Nn({color:cl}),e,{key:"p2p-bay",light:"",final:`
      {
        ${vf}
        outgoingLight = p2pSea;
        // West of the map, and south of it as far east as the waterfront, there is city and not water.
        // Nothing is known of it here: the plane takes a city's mottled grey there, and the air does the rest.
        float land = max(step(vWorld.x, uEdge.x), step(uEdge.y, vWorld.z) * step(vWorld.x, uEdge.z));
        vec2 blocks = floor(vWorld.xz / 90.0);
        vec3 town = vec3(0.30, 0.29, 0.27) * (0.75 + 0.5 * p2pHash(blocks)) * (0.8 + 0.4 * p2pNoise(vWorld.xz * 0.05));
        town *= 1.0 - 0.35 * max(p2pLine(fract(vWorld.x / 90.0) * 90.0 - 45.0, 6.0, 1.0), p2pLine(fract(vWorld.z / 90.0) * 90.0 - 45.0, 6.0, 1.0));
        outgoingLight = mix(outgoingLight, town, land);
      }`,uniforms:{uEdge:{value:e.ground.around==="town"?new z(1e9,-1e9,1e9):new z(e.box[0],e.box[3],1100)}},fragmentPars:"uniform vec3 uEdge;"}),N=new Dt(new Ei(4e4,4e4),k);return N.rotation.x=-Math.PI/2,N.position.y=y,N.updateMatrixWorld(),g.add(N),{group:g,update:I=>{for(const P of m){const V=Math.hypot(Math.max(0,Math.abs(P.x-I.x)-P.hx),Math.max(0,Math.abs(P.z-I.z)-P.hz)),H=V<12?0:V<150?1:V<480?2:3,ee=V<uf.far;for(let ne=0;ne<4;ne++)P.levels[ne].visible=ee&&ne===H}},ready:T}}function Ut(i){let e=Math.imul(i+1,2654435761);return e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,(e>>>0)/4294967296}class Xs{a=new Float32Array(1024);length=0;push(...e){if(this.length+e.length>this.a.length){const t=new Float32Array(Math.max(this.a.length*2,this.length+e.length));t.set(this.a.subarray(0,this.length)),this.a=t}for(let t=0;t<e.length;t++)this.a[this.length++]=e[t]}done(){return this.a.slice(0,this.length)}view(){return this.a.subarray(0,this.length)}}class ri{constructor(e,t=0,n=0){this.cellSize=e,this.auxSize=t,this.extSize=n}bins=new Map;bin(e,t){const n=`${Math.floor(e/this.cellSize)}_${Math.floor(t/this.cellSize)}`;let s=this.bins.get(n);return s||(s={pos:new Xs,nor:new Xs,col:new Xs,aux:new Xs,ext:new Xs,idx:[],late:[],box:[]},this.bins.set(n,s)),s}build(e,t={}){const n=new Jt;for(const s of this.bins.values()){if(!s.idx.length&&!s.late.length&&!s.box.length)continue;const r=new Nt,a=s.pos.length/3;r.setAttribute("position",new Tt(s.pos.done(),3));const o=s.nor.view(),l=s.col.view(),c=new Int8Array(o.length),h=new Uint8Array(l.length);for(let g=0;g<c.length;g++)c[g]=Math.round(Math.max(-1,Math.min(1,o[g]))*127);for(let g=0;g<h.length;g++)h[g]=Math.round(Math.max(0,Math.min(1,l[g]))*255);if(r.setAttribute("normal",new Tt(c,3,!0)),r.setAttribute("color",new Tt(h,3,!0)),this.auxSize&&r.setAttribute("aux",new Tt(s.aux.done(),this.auxSize)),this.extSize&&r.setAttribute("ext",new Tt(s.ext.done(),this.extSize)),this.auxSize&&s.aux.length!==a*this.auxSize)throw new Error("a batch has a short aux buffer");if(this.extSize&&s.ext.length!==a*this.extSize)throw new Error("a batch has a short ext buffer");const f=s.late.length>0||s.box.length>0,u=f?[...s.late,...s.idx,...s.box]:s.idx;r.setIndex(a>65535?new Sl(u,1):new Ts(u,1)),r.computeBoundingSphere(),r.computeBoundingBox();const d=new Dt(r,e);d.castShadow=!!t.cast,d.receiveShadow=!!t.receive,d.matrixAutoUpdate=!1,f&&(d.userData.near=[0,s.late.length+s.idx.length],d.userData.far=[s.late.length,s.idx.length+s.box.length]),s.mesh=d,n.add(d)}return this.bins.clear(),n}}function tr(i,e,t,n,s,r,a,o,l,c){return i.pos.push(e,t,n),i.nor.push(s,r,a),i.col.push(o,l,c),i.pos.length/3-1}function Fl(i){const e=new je(i);return[e.r,e.g,e.b]}const us=Fl(8092540),$s=Fl(12170667),Qc=Fl(16777215),lv=/^(motorway|trunk|primary|secondary|tertiary|residential|unclassified|living_street|service)$/;function cv(i){return{at(e,t){let n=1/0,s=i.p[0][1];for(let r=0;r+1<i.p.length;r++){const a=i.p[r],o=i.p[r+1],l=o[0]-a[0],c=o[2]-a[2],h=l*l+c*c||1,f=Math.min(1,Math.max(0,((e-a[0])*l+(t-a[2])*c)/h)),u=Math.hypot(a[0]+l*f-e,a[2]+c*f-t);u<n&&(n=u,s=a[1]+(o[1]-a[1])*f)}return s}}}function Ys(i,e,t=[]){const n=[];let s=0;for(let a=0;a+1<i.length;a++){const[o,l]=i[a],[c,h]=i[a+1],f=Math.hypot(c-o,h-l);if(f<.01)continue;const u=Math.max(1,Math.ceil(f/e));for(let d=n.length===0?0:1;d<=u;d++)n.push({x:o+(c-o)*d/u,z:l+(h-l)*d/u,dx:(c-o)/f,dz:(h-l)/f,s:s+f*d/u,j:0,must:d===u});s+=f}n.length&&(n[0].must=!0);for(let a=1;a+1<n.length;a++){const o=n[a-1],l=n[a+1],c=l.x-o.x,h=l.z-o.z,f=Math.hypot(c,h);f>.01&&(n[a].dx=c/f,n[a].dz=h/f)}if(!t.length||n.length<2)return n;const r=[];for(const[a,o]of t)r.push(a-.8,a,o,o+.8);for(const a of r){if(a<=.05||a>=s-.05)continue;let o=0;for(;o+1<n.length&&n[o+1].s<a;)o++;const l=n[o],c=n[o+1];if(a-l.s<.05||c.s-a<.05)continue;const h=(a-l.s)/(c.s-l.s),f=l.dx+(c.dx-l.dx)*h,u=l.dz+(c.dz-l.dz)*h,d=Math.hypot(f,u)||1;n.splice(o+1,0,{x:l.x+(c.x-l.x)*h,z:l.z+(c.z-l.z)*h,dx:f/d,dz:u/d,s:a,j:0,must:!0})}for(const a of n)for(const[o,l]of t)a.s>=o-.01&&a.s<=l+.01&&(a.j=1,a.must=!0);return n}function qr(i,e,t,n=.055,s=54){if(i.length<3)return i;const r=i.map(l=>[e.at(l.x,l.z),e.at(l.x+l.dz*t,l.z-l.dx*t),e.at(l.x-l.dz*t,l.z+l.dx*t)]),a=[i[0]];let o=0;for(;o<i.length-1;){let l=o+1;for(let c=o+2;c<i.length;c++){const h=i[o],f=i[c];if(f.s-h.s>s||i[c-1].must)break;let u=Math.abs(h.dx*f.dz-h.dz*f.dx)<.012;for(let d=o+1;u&&d<c;d++){const g=(i[d].s-h.s)/(f.s-h.s);for(let m=0;m<3;m++)if(Math.abs(r[d][m]-(r[o][m]+(r[c][m]-r[o][m])*g))>n){u=!1;break}}if(!u)break;l=c}a.push(i[l]),o=l}return a}function qn(i,e,t,n,s,r,a,o,l,c,h){if(t.length<2)return;let f=1;for(const d of t){const g=m=>e.at(d.x+d.dz*m,d.z-d.dx*m);if(Math.abs(g((n+s)/2)-(g(n)+g(s))/2)>.045){f=Math.max(1,Math.ceil(Math.abs(s-n)/6));break}}const u=[];for(const d of t){const g=d.dz,m=-d.dx,x=[];for(let p=0;p<=f;p++){const y=n+(s-n)*p/f,_=d.x+g*y,v=d.z+m*y;x.push(tr(i,_,e.at(_,v)+r,v,0,1,0,a[0],a[1],a[2])),i.aux.push(o(y),d.s,l,h??d.j),i.ext.push(c[0],c[1],c[2])}u.push(x)}for(let d=0;d+1<u.length;d++)for(let g=0;g<f;g++){const m=u[d][g],x=u[d][g+1],p=u[d+1][g],y=u[d+1][g+1];i.idx.push(m,p,x,x,p,y)}}const Vi=760,ea=170,Ps=330,Ja=`
  attribute vec4 aux; attribute vec3 ext;
  varying vec4 vAux; flat varying vec3 vExt;`,Qa="vAux = aux; vExt = ext;",eo=`
  varying vec4 vAux; flat varying vec3 vExt;
  // paint wears: where this is 0 it has gone
  float chipLike(vec2 rc) { return smoothstep(0.16, 0.5, p2pNoise(rc * vec2(7.0, 1.3) + 5.0) + 0.22); }`,_f=`
  float p2pFar = length(vWorld.xz - cameraPosition.xz);
  if (p2pFar > ${(Vi-ea).toFixed(1)} && p2pHash(gl_FragCoord.xy) < (p2pFar - ${(Vi-ea).toFixed(1)}) / ${ea.toFixed(1)}) discard;`,eh=i=>`
  {
    vec3 toEye = normalize(cameraPosition - vWorld);
    float glare = pow(max(dot(reflect(-toEye, vec3(0.0, 1.0, 0.0)), P2P_SUN), 0.0), 7.0) * pow(1.0 - max(toEye.y, 0.0), 2.0);
    outgoingLight += vec3(1.0, 0.88, 0.72) * glare * p2pLit * ${i};
  }`,hv=`
  {
    // every derivative is taken here, outside any branch
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    ${_f}
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
  }`,fv=`
  {
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    ${_f}
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
  }`,uv=`
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
  }`;function dv(i,e){const t=new Jt,n=new ri(400,4,3),s=new ri(400,4,3),r=new ri(400,4,3),a=_=>`${_[0]}_${_[1]}`,o=new Map,l=e.roads.filter(_=>!_.b&&(lv.test(_.c)||_.c==="pedestrian")),c=_=>_==="service"||_==="living_street";for(const _ of l)_.c!=="pedestrian"&&_.p.forEach((v,E)=>{const M=o.get(a(v))??{n:0,major:0,half:0},T=E===0||E===_.p.length-1?1:2;M.n+=T,c(_.c)||(M.major+=T,M.half=Math.max(M.half,_.w/2)),o.set(a(v),M)});l.forEach((_,v)=>{const E=Ut(v),M=_.w/2,T=c(_.c);if(_.c==="pedestrian"){const N=qr(Ys(_.p,6),i,M),U=N[N.length>>1];N.length>1&&qn(s.bin(U.x,U.z),i,N,-M,M,.05+E*.012,$s,I=>I+M,_.w,[1,0,E]);return}const A=[];let b=0;_.p.forEach((N,U)=>{U>0&&(b+=Math.hypot(N[0]-_.p[U-1][0],N[1]-_.p[U-1][1]));const I=o.get(a(N));if(T?I.n>=3:I.major>=3){const P=Math.max(I.half,M)+5.2;A.push([b-P,b+P])}});const w=qr(Ys(_.p,6,A),i,M+(_.s??0));if(w.length<2)return;const D=w[w.length>>1],F=.86+.3*Ut(v+4001),B=(Ut(v+911)-.5)*.05,k=[us[0]*F*(1+B),us[1]*F,us[2]*F*(1-B)];if(qn(n.bin(D.x,D.z),i,w,-M,M,.07+E*.012,k,N=>N,M,[T?1:_.l??1,_.o||T?1:0,E]),_.s){const N=.92+.16*Ut(v+77),U=[$s[0]*N,$s[1]*N,$s[2]*N];qn(s.bin(D.x,D.z),i,w,M,M+_.s,.05+E*.012,U,I=>I-M,_.s,[0,0,E]),qn(s.bin(D.x,D.z),i,w,-M-_.s,-M,.05+E*.012,U,I=>-I-M,_.s,[0,1,E])}}),(e.ways??[]).forEach((_,v)=>{const E=cv(_),M=Ut(v+5003),T=_.p.map(k=>[k[0],k[2]]),A=Ys(T,6);if(A.length<2)return;const b=A[A.length>>1];if(_.c==="pedestrian"){qn(s.bin(b.x,b.z),E,A,-_.half+.3,_.half-.3,.03,$s,k=>k+_.half,_.half*2,[1,0,M]);return}const w=_.w/2,D=.8+.2*Ut(v+6007),F=[us[0]*D,us[1]*D,us[2]*D];qn(n.bin(b.x,b.z),E,A,-w,w,.1,F,k=>k,w,[_.l??1,_.o?1:0,M]);const B=_.half-w-.05;if(B>.2){const k=[.62,.61,.58];qn(s.bin(b.x,b.z),E,A,w,w+B,.08,k,N=>N-w,B,[0,0,M]),qn(s.bin(b.x,b.z),E,A,-w-B,-w,.08,k,N=>-N-w,B,[0,1,M])}}),e.lines.forEach((_,v)=>{if(_.k==="crosswalk"){const E=qr(Ys(_.p,3),i,3.3,.02);if(E.length<2)return;const M=E[E.length-1].s,T=E[E.length>>1];qn(r.bin(T.x,T.z),i,E,-3.3,3.3,.105,Qc,A=>A,M,[0,Ut(v+20011),0],0)}else if(_.k==="rail"){const E=qr(Ys(_.p,4),i,2,.03);if(E.length<2)return;const M=E[E.length>>1];qn(r.bin(M.x,M.z),i,E,-2,2,.095,Qc,T=>T,0,[1,Ut(v+733),0],0)}});const h=(_,v)=>(_.polygonOffset=!0,_.polygonOffsetFactor=v,_.polygonOffsetUnits=v*2,_),f=h(li(new Nn({vertexColors:!0}),e,{key:"p2p-road",vertexPars:Ja,vertex:Qa,fragmentPars:eo,color:hv,final:eh("0.50")}),-3),u=h(li(new Nn({vertexColors:!0}),e,{key:"p2p-walk",vertexPars:Ja,vertex:Qa,fragmentPars:eo,color:fv,final:eh("0.22")}),-2),d=h(li(new Nn({vertexColors:!0,transparent:!0,depthWrite:!1}),e,{key:"p2p-over",vertexPars:Ja,vertex:Qa,fragmentPars:eo,color:uv,final:`
      {
        vec3 toEye = normalize(cameraPosition - vWorld);
        vec3 r = reflect(-toEye, vec3(0.0, 1.0, 0.0));
        float fres = 0.25 + 0.75 * pow(1.0 - max(toEye.y, 0.0), 4.0);
        outgoingLight = mix(outgoingLight, p2pSky(r) * 0.8 + vec3(1.0, 0.85, 0.65) * pow(max(dot(r, P2P_SUN), 0.0), 30.0) * 2.0 * p2pLit, p2pGloss * fres);
      }`}),-5),g=n.build(f,{receive:!0}),m=s.build(u,{receive:!0}),x=r.build(d,{receive:!0});for(const _ of x.children)_.renderOrder=2;t.add(m,g,x);const p=(_,v,E)=>{for(const M of _){const T=M.geometry.boundingSphere;M.visible=Math.hypot(T.center.x-v.x,T.center.z-v.z)-T.radius<E}};return{group:t,update:_=>{p(g.children,_,Vi),p(m.children,_,Vi),p(x.children,_,Vi-60)}}}const Pn=1,pv=3.2,mv=2.4;function gv(i){const e=i.length;return i.map((t,n)=>{const s=i[Math.max(0,n-1)],r=i[Math.min(e-1,n+1)];let a=r[0]-s[0],o=r[2]-s[2];const l=Math.hypot(a,o)||1e-6;a/=l,o/=l;let c=o,h=-a;if(n>0&&n<e-1){const f=i[n-1],u=i[n],d=u[0]-f[0],g=u[2]-f[2],m=Math.hypot(d,g)||1e-6,x=Math.max(.5,c*(g/m)+h*(-d/m));c/=x,h/=x}return[c,h]})}function to(i,e,t,n,s){return i.some((r,a)=>{if(a===e)return!1;for(let o=0;o+1<r.p.length;o++){const l=r.p[o],c=r.p[o+1],h=c[0]-l[0],f=c[2]-l[2],u=h*h+f*f;if(u<1e-6)continue;const d=Math.sqrt(u),g=((t-l[0])*h+(s-l[2])*f)/u,m=.8/d;if(g<(o===0?0:-m)||g>(o+2===r.p.length?1:1+m)||Math.hypot(l[0]+h*g-t,l[2]+f*g-s)>r.half)continue;const x=l[1]+(c[1]-l[1])*Math.min(1,Math.max(0,g));if(Math.abs(x-n)<1.5)return!0}return!1})}class th{pos=[];col=[];aux=[];idx=[];quad(e,t,n,s,r,a,o=[[0,0],[0,0],[0,0],[0,0]]){const l=this.pos.length/3;for(const[_,v]of[e,t,n,s].entries())this.pos.push(v[0],v[1],v[2]),this.col.push(...r),this.aux.push(o[_][0],o[_][1]);const c=t[0]-e[0],h=t[1]-e[1],f=t[2]-e[2],u=n[0]-e[0],d=n[1]-e[1],g=n[2]-e[2],m=h*g-f*d,x=f*u-c*g,p=c*d-h*u;m*(a[0]-e[0])+x*(a[1]-e[1])+p*(a[2]-e[2])>=0?this.idx.push(l,l+1,l+2,l,l+2,l+3):this.idx.push(l,l+2,l+1,l,l+3,l+2)}geometry(){const e=new Nt;return e.setAttribute("position",new _t(this.pos,3)),e.setAttribute("color",new _t(this.col,3)),e.setAttribute("aWay",new _t(this.aux,2)),e.setIndex(this.idx),e.computeVertexNormals(),e.computeBoundingSphere(),e}}const ds=[.66,.645,.61],xv=[.42,.41,.39],Fi=[.74,.73,.7];function vv(i,e){const t=i.ways??[],n=new Jt,s=new th,r=new th;t.forEach((l,c)=>{const h=gv(l.p),f=(m,x,p)=>{const y=l.p[m];return[y[0]+h[m][0]*l.half*x,y[1]+p,y[2]+h[m][1]*l.half*x]},u=(m,x)=>[l.p[m][0],l.p[m][1]+x,l.p[m][2]];if(l.k==="deck"){for(let m=0;m+1<l.p.length;m++){for(const x of[1,-1]){const p=f(m,x*3,-.6);s.quad(f(m,x,-1.2),f(m+1,x,-1.2),f(m+1,x,.02),f(m,x,.02),ds,p)}s.quad(f(m,1,-1.2),f(m+1,1,-1.2),f(m+1,-1,-1.2),f(m,-1,-1.2),xv,u(m,-1.2-5));for(const x of[1,-1]){const p=f(m,x*.98,0),y=f(m+1,x*.98,0),_=[(p[0]+y[0])/2,(p[1]+y[1])/2,(p[2]+y[2])/2];if(to(t,c,_[0],_[1],_[2])||to(t,c,p[0],p[1],p[2])&&to(t,c,y[0],y[1],y[2]))continue;const v=(M,T,A)=>f(M,x*(1-T/l.half),A),E=u(m,1.5);s.quad(v(m,0,0),v(m+1,0,0),v(m+1,0,Pn),v(m,0,Pn),Fi,f(m,x*2,.5)),s.quad(v(m,0,Pn),v(m+1,0,Pn),v(m+1,.18,Pn),v(m,.18,Pn),Fi,u(m,10)),s.quad(v(m,.18,Pn),v(m+1,.18,Pn),v(m+1,.3,.32),v(m,.3,.32),Fi,E),s.quad(v(m,.3,.32),v(m+1,.3,.32),v(m+1,.42,.02),v(m,.42,.02),Fi,E)}}for(const[m,x]of[[0,l.shut[0]],[l.p.length-1,l.shut[1]]]){const p=m===0?1:l.p.length-2,y=[2*l.p[m][0]-l.p[p][0],l.p[m][1],2*l.p[m][2]-l.p[p][2]];x?(s.quad(f(m,1,-1.2),f(m,-1,-1.2),f(m,-1,Pn),f(m,1,Pn),Fi,y),s.quad(f(m,1,-1.2),f(m,-1,-1.2),f(m,-1,Pn),f(m,1,Pn),Fi,l.p[p])):l.p[m][1]-e.at(l.p[m][0],l.p[m][2])>1.5&&s.quad(f(m,1,-1.2),f(m,-1,-1.2),f(m,-1,0),f(m,1,0),ds,y)}return}const d=l.clear??5.6;let g=0;for(let m=0;m+1<l.p.length;m++){const x=Math.hypot(l.p[m+1][0]-l.p[m][0],l.p[m+1][2]-l.p[m][2]),p=u(m,d*.5);for(const y of[1,-1])r.quad(f(m,y,-.25),f(m+1,y,-.25),f(m+1,y,d),f(m,y,d),[.78,.77,.72],p,[[g,0],[g+x,0],[g+x,1],[g,1]]);r.quad(f(m,1,d),f(m+1,1,d),f(m+1,-1,d),f(m,-1,d),[.3,.3,.31],p,[[g,2],[g+x,2],[g+x,3],[g,3]]),g+=x}for(const m of[0,l.p.length-1]){const x=m===0?1:l.p.length-2,p=[2*l.p[m][0]-l.p[x][0],l.p[m][1]+2,2*l.p[m][2]-l.p[x][2]];let y=l.p[m][1]+d+mv;for(let A=0;A<Math.min(4,l.p.length);A++){const b=l.p[m===0?A:l.p.length-1-A];y=Math.max(y,e.at(b[0],b[2])+.5)}const _=y,v=(l.half+pv)/l.half,E=(A,b)=>f(m,A,b);s.quad(E(1,-.3),E(v,-.3),E(v,_-l.p[m][1]),E(1,_-l.p[m][1]),ds,p),s.quad(E(-1,-.3),E(-v,-.3),E(-v,_-l.p[m][1]),E(-1,_-l.p[m][1]),ds,p),s.quad(E(1,d),E(-1,d),E(-1,_-l.p[m][1]),E(1,_-l.p[m][1]),ds,p);const M=[l.p[x][0],0,l.p[x][2]],T=(A,b)=>[A[0]+(M[0]-l.p[m][0])*b,A[1],A[2]+(M[2]-l.p[m][2])*b];s.quad(E(v,_-l.p[m][1]),E(-v,_-l.p[m][1]),T(E(-v,_-l.p[m][1]),.25),T(E(v,_-l.p[m][1]),.25),Fi,[l.p[m][0],_+10,l.p[m][2]])}});for(const l of i.piers??[]){const c=l.ax*l.a,h=l.az*l.a,f=-l.az*l.c,u=l.ax*l.c,d=.82,g=[[-1,-d],[-d,-1],[d,-1],[1,-d],[1,d],[d,1],[-d,1],[-1,d]].map(([m,x])=>[l.x+c*m+f*x,l.z+h*m+u*x]);for(let m=0;m<g.length;m++){const x=g[m],p=g[(m+1)%g.length],y=(x[0]+p[0])/2*2-l.x,_=(x[1]+p[1])/2*2-l.z;s.quad([x[0],l.y0,x[1]],[p[0],l.y0,p[1]],[p[0],l.y1,p[1]],[x[0],l.y1,x[1]],ds,[y,(l.y0+l.y1)/2,_])}}const a=li(new Nn({vertexColors:!0}),i,{key:"p2p-structure",color:`
      {
        float streak = p2pNoise(vec2(vWorld.x * 0.9 + vWorld.z * 0.7, vWorld.y * 0.08)) * p2pNoise(vec2(vWorld.x * 3.1 - vWorld.z * 2.3, vWorld.y * 0.4));
        diffuseColor.rgb *= 0.86 + 0.22 * p2pNoise(vWorld.xz * 0.35 + vWorld.y * 0.2) - 0.18 * streak;
      }`}),o=new Dt(s.geometry(),a);if(o.castShadow=!0,o.receiveShadow=!0,o.name="decks and piers",n.add(o),r.pos.length){const l=new Rn({vertexColors:!0,vertexShader:`
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
        }`}),c=new Dt(r.geometry(),l);c.name="tunnels",n.add(c)}return n.name="structures",{group:n,count:{decks:t.filter(l=>l.k==="deck").length,tunnels:t.filter(l=>l.k==="tunnel").length,piers:i.piers?.length??0}}}const ta=3.2;function _v(i){const e=new Map;for(const t of i.fronts??[])e.set(t.b*4096+t.e,t);return(t,n)=>e.get(t*4096+n)}const nh=360,no=1.6;class yv{constructor(e,t){this.page=e;const n=e.fronts??[],s=new Ei(1,1),r=new Fs({color:2372412,metalness:.85,roughness:.08,envMap:t,envMapIntensity:1.2,transparent:!0,opacity:.5,side:pn,depthWrite:!1}),a=new Map;n.forEach((h,f)=>{const u=`${Math.floor(h.p0[0]/400)}_${Math.floor(h.p0[1]/400)}`;let d=a.get(u);d||a.set(u,d=[]),d.push(f)});const o=new Zt,l=new z,c=new z;for(const h of a.values()){const f=new Xi(s,r,h.length);h.forEach((u,d)=>{const g=n[u],m=Math.hypot(g.p1[0]-g.p0[0],g.p1[1]-g.p0[1]);o.setFromUnitVectors(new z(0,0,1),new z(g.n[0],0,g.n[1]));const x=Math.min(g.y,Hi().at(g.p0[0],g.p0[1]),Hi().at(g.p1[0],g.p1[1])),p=g.y+ta-x;c.set((g.p0[0]+g.p1[0])/2+g.n[0]*.04,x+p/2,(g.p0[1]+g.p1[1])/2+g.n[1]*.04),f.setMatrixAt(d,this.m.compose(c,o,l.set(m,p,1))),this.glass[u]={mesh:f,slot:d}}),f.instanceMatrix.needsUpdate=!0,f.computeBoundingSphere(),f.matrixAutoUpdate=!1,this.group.add(f),this.cells.push({mesh:f,x:f.boundingSphere.center.x,z:f.boundingSphere.center.z})}this.shards=new Xi(new Ei(1,1),new Us({color:13625070,transparent:!0,opacity:.75,side:pn,depthWrite:!1}),nh),this.shards.count=0,this.shards.frustumCulled=!1,this.group.add(this.shards)}group=new Jt;glass=[];cells=[];shards;live=[];broken=new Set;m=new Rt;raze(e){}shatter(e,t){const n=this.page.fronts?.[e],s=this.glass[e];if(!n||!s||this.broken.has(e))return;this.broken.add(e),s.mesh.getMatrixAt(s.slot,this.m),s.mesh.setMatrixAt(s.slot,this.m.makeScale(0,0,0)),s.mesh.instanceMatrix.needsUpdate=!0;const r=Math.hypot(n.p1[0]-n.p0[0],n.p1[1]-n.p0[1]);for(let a=0;a<90&&this.live.length<nh;a++){const o=Math.random(),l=Math.random()*ta,c=-(.25+Math.random()*.6)*Math.min(18,t);this.live.push({p:new z(n.p0[0]+(n.p1[0]-n.p0[0])*o,n.y+l,n.p0[1]+(n.p1[1]-n.p0[1])*o),v:new z(n.n[0]*c+(Math.random()-.5)*4,1+Math.random()*3,n.n[1]*c+(Math.random()-.5)*4),spin:new z(Math.random()*12-6,Math.random()*12-6,Math.random()*12-6),rot:new zn(Math.random()*6,Math.random()*6,0),age:0,size:.08+Math.random()*.22+(r>8?.05:0)})}}reset(){const e=this.page.fronts??[],t=new Zt,n=new z,s=new z;for(const r of this.broken){const a=e[r],o=this.glass[r],l=Math.hypot(a.p1[0]-a.p0[0],a.p1[1]-a.p0[1]);t.setFromUnitVectors(new z(0,0,1),new z(a.n[0],0,a.n[1]));const c=Math.min(a.y,Hi().at(a.p0[0],a.p0[1]),Hi().at(a.p1[0],a.p1[1])),h=a.y+ta-c;s.set((a.p0[0]+a.p1[0])/2+a.n[0]*.04,c+h/2,(a.p0[1]+a.p1[1])/2+a.n[1]*.04),o.mesh.setMatrixAt(o.slot,this.m.compose(s,t,n.set(l,h,1))),o.mesh.instanceMatrix.needsUpdate=!0}this.broken.clear(),this.live.length=0,this.shards.count=0}update(e,t){for(const r of this.cells)r.mesh.visible=Math.hypot(r.x-t.x,r.z-t.z)<700;if(!this.live.length&&!this.shards.count)return;const n=new Zt,s=new z;this.live=this.live.filter(r=>(r.age+=e)<no),this.live.forEach((r,a)=>{r.v.y-=9.81*e,r.p.addScaledVector(r.v,e);const o=this.floorAt(r.p);r.p.y<o&&(r.p.y=o,r.v.set(r.v.x*.4,0,r.v.z*.4),r.spin.multiplyScalar(.2)),r.rot.x+=r.spin.x*e,r.rot.y+=r.spin.y*e,r.rot.z+=r.spin.z*e;const l=Math.min(1,(no-r.age)/(no/3));this.shards.setMatrixAt(a,this.m.compose(r.p,n.setFromEuler(r.rot),s.setScalar(r.size*l)))}),this.shards.count=this.live.length,this.shards.instanceMatrix.needsUpdate=!0}floorAt(e){let t=-1e9;for(const n of this.broken){const s=this.page.fronts[n];Math.abs(s.p0[0]-e.x)<30&&Math.abs(s.p0[1]-e.z)<30&&(t=Math.max(t,s.y+.05))}return t}}const Ks=12,na={WALL:0,GLAZING:1,PIER:2},Nl={HEADER:9};function Mv(i,e,t,n){const s=[];for(let r=0;r+1<i.length;r++)s.push([]);if(!t)return s;for(const r of t.walls){let a=-1,o=.3,l=0,c=0;for(let _=0;_+1<i.length;_++){let[v,E]=i[_],[M,T]=i[_+1];const A=Math.hypot(M-v,T-E);if(A<.05)continue;e>0&&([v,M]=[M,v],[E,T]=[T,E]);const b=(M-v)/A,w=(T-E)/A,D=(U,I)=>Math.abs(-(U-v)*w+(I-E)*b),F=(U,I)=>(U-v)*b+(I-E)*w,B=Math.max(D(r.x0,r.z0),D(r.x1,r.z1)),k=F(r.x0,r.z0),N=F(r.x1,r.z1);B<o&&Math.min(k,N)>-.3&&Math.max(k,N)<A+.3&&(o=B,a=_,l=k,c=N)}if(a<0)continue;const h=c>=l?1:-1,f=n[r.kind]??"",u=(_,v)=>{const E=l+h*_,M=l+h*v;return[Math.min(E,M),Math.max(E,M)]},[d,g]=r.door>=0?u(r.d0,r.d1):[0,0],[m,x]=r.l1>r.l0?u(r.l0,r.l1):[0,0],[p,y]=r.door2>=0?u(r.e0,r.e1):[0,0];s[a].push({u0:Math.min(l,c),u1:Math.max(l,c),r0:l,r1:c,wall:r,d0:d,d1:g,door:r.door>=0?r.doorWhat:0,e0:p,e1:y,door2:r.door2>=0?r.door2What:0,l0:m,l1:x,bay:f==="glazing"?na.GLAZING:f==="pier"||f==="column"||f==="lintel"?na.PIER:na.WALL,dress:r.role===1?Nl.HEADER:t.arche+1})}for(const r of s)r.sort((a,o)=>a.u0-o.u0);return s}function wv(i){const[e,t]=i.door2?[i.e0,i.e1]:[i.l0,i.l1],n=Math.abs(i.r1-i.r0),s=i.dress===Nl.HEADER;return[i.r0,i.r1,s?n/Math.max(1,Math.round(n/3)):i.wall.bay,s?0:i.wall.pier,i.d0,i.d1,i.door+8*i.door2,i.wall.every,e,t,i.bay,i.dress]}const bv=7.6,Sv=(i,e,t)=>i<=1&&e&&t>=4.4;function Ev(i,e,t,n){const s=[];if(e=Math.max(e,.3),n=Math.max(n,1),t>.01){const r=n*e+t,a=Math.max(1,Math.floor((i-t)/r+.5));for(let o=0;o<a;o++){const l=o*r+t+n*e*.5;s.push({a:o*r,b:o*r+t,pier:!0,k:o*n,lot:l});for(let c=0;c<n;c++)s.push({a:o*r+t+c*e,b:o*r+t+(c+1)*e,pier:!1,k:o*n+c,lot:l})}s.push({a:a*r,b:i,pier:!0,k:a*n,lot:(a-1)*r+t+n*e*.5})}else{const r=Math.max(1,Math.floor(i/e+.5)),a=Math.max(1,Math.floor(bv/e+.5));for(let o=0;o<r;o++){const l=Math.floor(o/a);s.push({a:o*e,b:o===r-1?i:(o+1)*e,pier:!1,k:o,lot:.5*(l*a*e+Math.min((l+1)*a*e,i))})}}return s}function Av(i,e,t,n,s){return s?[{a:0,b:i,pier:!1,k:0,lot:i/2}]:Ev(i,e,t,n)}function Tv(i){const e=.04*i,t=.27*i;return{b0:e,b1:t,b2:i-t,b3:i-e,deep:Math.min(.6,.2*i)}}const Rv=(i,e)=>i%2===0&&e>=2.2,hl={VICTORIAN:0,STUCCO:1,MASONRY:2,OFFICE:3,GLASS:4,PRECAST:5,SHED:6},Cv=[{x:67,z:-136,high:260,shape:"pyramid",style:hl.PRECAST,color:14472904},{x:-28,z:212,high:237,style:hl.OFFICE,color:5980216}];class Lv{cells=new Map;size=40;constructor(e){for(const t of e.roads){if(t.b)continue;const n=/^(primary|secondary|tertiary|trunk)$/.test(t.c)?1:/^(residential|unclassified|living_street|pedestrian)$/.test(t.c)?2:t.c==="service"?3:0;if(n)for(let s=0;s+1<t.p.length;s++){const[r,a]=t.p[s],[o,l]=t.p[s+1],c={ax:r,az:a,bx:o,bz:l,reach:t.w/2+(t.s??0),kind:n},h=Math.floor(Math.min(r,o)/this.size),f=Math.floor(Math.max(r,o)/this.size),u=Math.floor(Math.min(a,l)/this.size),d=Math.floor(Math.max(a,l)/this.size);for(let g=h;g<=f;g++)for(let m=u;m<=d;m++){const x=`${g}_${m}`;let p=this.cells.get(x);p||(p=[],this.cells.set(x,p)),p.push(c)}}}}facing(e,t,n,s){let r=0,a=1/0;const o=Math.floor(e/this.size),l=Math.floor(t/this.size);for(let c=o-1;c<=o+1;c++)for(let h=l-1;h<=l+1;h++)for(const f of this.cells.get(`${c}_${h}`)??[]){const u=f.bx-f.ax,d=f.bz-f.az,g=u*u+d*d,m=g>0?Math.max(0,Math.min(1,((e-f.ax)*u+(t-f.az)*d)/g)):0,x=f.ax+u*m-e,p=f.az+d*m-t,y=Math.hypot(x,p);if(y>f.reach+7||x*n+p*s<y*.6)continue;const _=y+(f.kind===3?12:0);_<a&&(a=_,r=f.kind)}return r}}function Pv(i,e,t){const n=[];let s=!1,r=!1;for(let a=0;a+1<e.length;a++){const[o,l]=e[a],[c,h]=e[a+1],f=Math.hypot(c-o,h-l);if(f<2.2){n.push(0);continue}const u=(h-l)/f*t,d=-(c-o)/f*t,g=i.facing((o+c)/2,(l+h)/2,u,d);n.push(g),g===1?s=!0:g===2&&(r=!0)}return{faces:n,commercial:s,residential:r}}function Dv(i,e,t,n,s,r,a){const o=hl,l=Ut(i*3+1),c=Cv.find(f=>Math.hypot(f.x-e,f.z-t)<30&&Math.abs(f.high-n)<12);let h;return c?.style!=null?h=c.style:n>=45?h=l<.36?o.GLASS:l<.62?o.OFFICE:l<.88||n>110?o.PRECAST:o.MASONRY:n>=20?h=r||s>700?l<.48?o.MASONRY:l<.74?o.OFFICE:l<.88?o.PRECAST:o.STUCCO:l<.55?o.STUCCO:l<.8?o.MASONRY:o.PRECAST:s>1400&&n<11?h=o.SHED:r&&!a?h=l<.5?o.MASONRY:l<.82?o.STUCCO:o.VICTORIAN:s<=460?h=l<.55?o.VICTORIAN:l<.92?o.STUCCO:o.MASONRY:h=l<.62?o.STUCCO:l<.9?o.MASONRY:o.VICTORIAN,{style:h,mark:c}}function yf(i,e,t,n){if(!n.length)return[[0,i,e,t]];const s=new Set([0,i]);for(const o of n)s.add(Math.max(0,Math.min(i,o.u0))),s.add(Math.max(0,Math.min(i,o.u1)));const r=[...s].sort((o,l)=>o-l),a=[];for(let o=0;o+1<r.length;o++){const l=r[o],c=r[o+1],h=(l+c)/2;if(c-l<.02)continue;let f=e;for(const d of n)h>d.u0&&h<d.u1&&(f=Math.max(f,d.y));if(t-f<.08)continue;const u=a[a.length-1];u&&Math.abs(u[1]-l)<1e-6&&Math.abs(u[2]-f)<1e-6?u[1]=c:a.push([l,c,f,t])}return a}function Mf(i,e,t,n,s){const r=Math.hypot(t-i,n-e),a=[];if(r<.05)return a;const o=(t-i)/r,l=(n-e)/r;for(const c of s){const h=(c.x0+c.x1)/2-i,f=(c.z0+c.z1)/2-e,u=h*o+f*l;if(Math.abs(-h*l+f*o)>.25||u<-.1||u>r+.1)continue;const d=(c.x0-i)*o+(c.z0-e)*l,g=(c.x1-i)*o+(c.z1-e)*l;a.push({u0:Math.min(d,g),u1:Math.max(d,g),y:c.y})}return a}function ih(i,e,t){const n=i.geometry.getAttribute("position"),s=n.array,r=s.slice(e*3,t*3);for(let a=e;a<t;a++)s[a*3]=s[e*3],s[a*3+1]=s[e*3+1],s[a*3+2]=s[e*3+2];return n.addUpdateRange(e*3,(t-e)*3),n.needsUpdate=!0,r}function sh(i,e,t){const n=i.geometry.getAttribute("position");n.array.set(t,e*3),n.addUpdateRange(e*3,t.length),n.needsUpdate=!0}const nr=512,Iv=`
  attribute vec4 aux; attribute vec4 ext;
  varying vec4 vAux; flat varying vec4 vExt; varying vec3 vWallN;
  #ifdef P2P_BORN
    varying vec3 vBorn; varying vec3 vEyeBorn; flat varying mat3 vTurn;
  #endif`,Uv=`
  vAux = aux; vExt = ext; vWallN = normal;
  #ifdef P2P_BORN
    // where this was built (its mesh is in the building's own place; the model matrix is where it has fallen to)
    vBorn = position;
    vTurn = mat3( modelMatrix );
    vEyeBorn = transpose( vTurn ) * ( cameraPosition - modelMatrix[ 3 ].xyz );
  #endif`,Fv=`
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
  }`,rh=`
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
  }`,Nv=`
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
          ${rh}
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
            ${rh}
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
  #endif`,zv="normal = normalize( mat3( viewMatrix ) * P2P_TURN( p2pN ) );",Ov=`
  {
    vec2 sh = p2pShade(vWorld.xz + normalize(P2P_TURN(vWallN).xz + vec2(1e-5)) * 3.2);
    float inShade = smoothstep(-2.0, 2.0, sh.x - p2pUp) * smoothstep(0.2, 1.2, sh.x);
    reflectedLight.directDiffuse *= mix(1.0 - inShade, 1.0, p2pNear);
    reflectedLight.indirectDiffuse *= mix(0.78, 1.0, smoothstep(0.0, 22.0, p2pUp));
  }`,kv=`
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
  if (p2pMark > 0.5) outgoingLight = vec3(1.0, 0.0, 1.0);`,Wt={ROOF:-1,VICTORIAN:0,STUCCO:1,MASONRY:2,OFFICE:3,GLASS:4,PRECAST:5,SHED:6,AWNING:8,CORNICE:9,ROOFBOX:10,SIGN:11,CUT:12},js={PLAIN:0,SHOP:1},Bv=[15855074,15525590,15260864,15986662,14867920,14672863,15327951,14277846,15788244,15130834,13226944,12570072,14929860,15392686,13620940,14207412,12175055,15322032,13352914,12900556,9084853,11122586,12153690,7314583,5662074,8093554,13607834,14267482],Hv=[15722972,15327696,15920868,14998731,14602938,15131610,14277074,15787730,15061944,14080731,15260102,13617597,14730414,13226692,14469542],Gv=[9194042,10115652,8011826,12887420,12162923,14273972,13616558,10263188,11578272,11037007,14075554],Vv=[12433581,11117980,13223096,9407106,5920338,11906460],Wv=[5595242,3752522,7109766,9085098,2896440,5200984],qv=[14209732,13617336,14867920,12564648,14076856],Xv=[11577496,10133664,12760476,9277324,10720387],ah=[8003356,2051386,1914199,2829102,13214247,9059090,4861022,14275264,1006691],io=(i,e)=>i[Math.min(i.length-1,Math.floor(e*i.length))],$v=170,Yv=200;function $t(i,e,t,n,s,r,a){const o=i.pos.length/3;for(let y=0;y<4;y++)tr(i,t[y][0],t[y][1],t[y][2],n[0],n[1],n[2],s.r,s.g,s.b),i.aux.push(...r[y]),i.ext.push(...a);const[l,c,h]=[t[0],t[1],t[2]],f=c[0]-l[0],u=c[1]-l[1],d=c[2]-l[2],g=h[0]-l[0],m=h[1]-l[1],x=h[2]-l[2];(u*x-d*m)*n[0]+(d*g-f*x)*n[1]+(f*m-u*g)*n[2]>=0?e.push(o,o+1,o+2,o,o+2,o+3):e.push(o,o+2,o+1,o,o+3,o+2)}function oh(i,e,t){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const[a,o]=i[s],[l,c]=i[r];o>t!=c>t&&e<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n}function Kv(i,e,t){const n=Hi(),s=new Lv(i),r=_v(i);let a=new Float32Array(Ks*4096),o=1;const l=new Array(i.buildings.length).fill(null),c={value:null},h={value:0},f=(ae,L,Te)=>{let me=l[ae];return me||(me=Mv(L,Te,e(ae),t).map(fe=>fe.map(xe=>{if(c.value)return{u0:xe.u0,u1:xe.u1,idx:0};if((o+1)*Ks>a.length){const Le=new Float32Array(a.length*2);Le.set(a),a=Le}return a.set(wv(xe),o*Ks),{u0:xe.u0,u1:xe.u1,idx:o++}})),l[ae]=me,me)},u=new ri(400,4,4),d=new ri(400,4,4),g={walls:0,roofs:0,cornices:0,bays:0,awnings:0,signs:0,boxes:0},m=new je,x=new je,p=new je,y=new je,_={},v=i.buildings.length,E=new Array(v).fill(null),M=new Array(v).fill(null),T=new Int32Array(v*4),A=new Float32Array(v*6),b=(ae,L,Te)=>{const me=ae.r;if(me.length<4)return null;let fe=0,xe=0,Le=0,ge=1/0,ze=0;const st=[];for(let O=0;O+1<me.length;O++){const[ie,oe]=me[O],[Q,Y]=me[O+1];fe+=ie,xe+=oe,Le+=ie*Y-Q*oe;const Z=n.at(ie,oe);st.push(Z),ge=Math.min(ge,Z),ze+=Z}st.push(st[0]);const et=me.length-1;fe/=et,xe/=et;const C=Math.abs(Le)/2,S=ae.y1,X=S-ae.y0,re=ze/et,le=Le>0?1:-1,se=f(L,me,le),{faces:ke,commercial:ve,residential:Oe}=Pv(s,me,le),{style:Se,mark:he}=Dv(L,fe,xe,X,C,ve,Oe);Te&&(_[Se]=(_[Se]??0)+1);const ye=Se===Wt.OFFICE||Se===Wt.GLASS||Se===Wt.PRECAST,Xe=Ut(L*3+2),G=Ut(L*3+3);m.setHex(he?.color??io(Se===Wt.VICTORIAN?Bv:Se===Wt.STUCCO?Hv:Se===Wt.MASONRY?Gv:Se===Wt.OFFICE?Vv:Se===Wt.GLASS?Wv:Se===Wt.PRECAST?qv:Xv,Xe)),m.offsetHSL((Ut(L+5003)-.5)*.02,0,(Ut(L+7919)-.5)*.07),Se===Wt.VICTORIAN?x.setHex(15328988):x.copy(m).lerp(y.setHex(14209215),.45);const K=Se+G*.98,be=ae.m?ae.y0+ae.m:ge-1.5;return{ring:me,corners:et,cx:fe,cz:xe,size:C,top:S,high:X,datum:re,g:st,out:le,core:se,faces:ke,style:Se,tower:ye,seed:G,code:K,foot:be,mark:he}},w=(ae,L,Te,me,fe)=>{const xe=b(ae,L,!me);if(!xe)return;const{ring:Le,corners:ge,cx:ze,cz:st,size:et,top:C,high:S,datum:X,g:re,out:le,core:se,faces:ke,style:ve,tower:Oe,seed:Se,code:he,foot:ye,mark:Xe}=xe,[G,K]=Te(ze,st),be=S>=15||et>=700||!!me,O=be?G.idx:G.late;if(Xe?.shape==="pyramid")jv(G,G.idx,Le,le,ze,st,ye,C,X,m,he,re,ie=>se[ie]?.[0]?.idx??0);else for(let ie=0;ie+1<Le.length;ie++){let[oe,Q]=Le[ie],[Y,Z]=Le[ie+1],Me=re[ie],Pe=re[ie+1];const Ue=Math.hypot(Y-oe,Z-Q);if(Ue<.05)continue;const Ve=(Z-Q)/Ue*le,at=-(Y-oe)/Ue*le;le>0&&([oe,Y]=[Y,oe],[Q,Z]=[Z,Q],[Me,Pe]=[Pe,Me]);const Xt=ke[ie],Ht=Xt===1||Xt===2,Ct=r(L,ie),dt=Ct?js.SHOP:js.PLAIN,xt=(Pe-Me)/Ue,Cn=(Ht?1:0)+2*dt,pt=se[ie]??[],De=me?Mf(oe,Q,Y,Z,me):[];if(Ct){const $e=Math.hypot(Ct.p0[0]-oe,Ct.p0[1]-Q),tt=Math.hypot(Ct.p1[0]-oe,Ct.p1[1]-Q);De.push({u0:Math.min($e,tt),u1:Math.max($e,tt),y:Ct.y+ta})}const Re=yf(Ue,ye,C,De),qe=(Y-oe)/Ue,ct=(Z-Q)/Ue;fe&&fe.push(Y,ye,Z,oe,ye,Q,oe,C,Q,Y,ye,Z,oe,C,Q,Y,C,Z);for(const[$e,tt,rt,St]of Re)if(!(tt-$e<.02||St-rt<.02))for(let ut=0;ut<Math.max(1,pt.length);ut++){const nt=ut===0?$e:Math.max($e,(pt[ut-1].u1+pt[ut].u0)/2),Fe=ut+1>=pt.length?tt:Math.min(tt,(pt[ut].u1+pt[ut+1].u0)/2);if(Fe-nt<.02)continue;const Ze=Me+xt*nt,ot=Me+xt*Fe;$t(G,O,[[oe+qe*nt,rt,Q+ct*nt],[oe+qe*Fe,rt,Q+ct*Fe],[oe+qe*Fe,St,Q+ct*Fe],[oe+qe*nt,St,Q+ct*nt]],[Ve,0,at],m,[[nt,Ze,Ue,C],[Fe,ot,Ue,C],[Fe,ot,Ue,C],[nt,Ze,Ue,C]],[he,Cn+32*(pt[ut]?.idx??0),xt,X]),me||(g.walls+=2)}if(!Ht||Ue<4||S>40||Oe||ve===Wt.SHED)continue;const vt=ve===Wt.VICTORIAN?.42:.3,wt=ve===Wt.MASONRY?.7:.5,Lt=C-wt+.12,Gt=C+.12,zt=Ve*vt,Qt=at*vt,R=(Y-oe)/Ue,W=(Z-Q)/Ue,J=[Wt.CORNICE+Se*.98,0,0,X],te=[oe,Lt,Q],q=[Y,Lt,Z],_e=[oe+zt,Lt,Q+Qt],Ce=[Y+zt,Lt,Z+Qt],Be=[oe+zt,Gt,Q+Qt],Ne=[Y+zt,Gt,Z+Qt],Ye=[oe,Gt,Q],Qe=[Y,Gt,Z],He=$e=>[[0,$e,Ue,C],[Ue,$e,Ue,C],[Ue,$e+1,Ue,C],[0,$e+1,Ue,C]];if($t(K,K.idx,[_e,Ce,Ne,Be],[Ve,0,at],x,He(0),J),$t(K,K.idx,[te,q,Ce,_e],[0,-1,0],x,He(2),J),$t(K,K.idx,[Be,Ne,Qe,Ye],[0,1,0],x,He(4),J),g.cornices+=6,ke[(ie+(le>0?1:ge-1))%ge]===1||ke[(ie+(le>0?1:ge-1))%ge]===2||($t(K,K.idx,[te,_e,Be,Ye],[-R,0,-W],x,He(0),J),g.cornices+=2),ke[(ie+(le>0?ge-1:1))%ge]===1||ke[(ie+(le>0?ge-1:1))%ge]===2||($t(K,K.idx,[q,Ce,Ne,Qe],[R,0,W],x,He(0),J),g.cornices+=2),Sv(ve,!0,Ue)){const $e=ve===Wt.VICTORIAN?1.05:.75,tt=dt===js.SHOP?4.15:2.75,rt=(nt,Fe,Ze)=>[oe+R*nt+Ve*Fe,Ze,Q+W*nt+at*Fe],St=[],ut=c.value?.image.data??a;for(const nt of pt){if(!nt.idx)continue;const Fe=nt.idx*Ks,Ze=ut[Fe],ot=ut[Fe+1],lt=Math.abs(ot-Ze),Ot=ot>=Ze?1:-1,_n=ut[Fe+11]===Nl.HEADER;for(const Vt of Av(lt,ut[Fe+2],_n?0:ut[Fe+3],ut[Fe+7],!_n&&ut[Fe+10]===na.PIER)){const an=Vt.b-Vt.a;if(Vt.pier||!Rv(Vt.k,an))continue;const sn=Math.min(Ze+Ot*Vt.a,Ze+Ot*Vt.b),mn=Tv(an);St.push({b0:sn+mn.b0,b1:sn+mn.b1,b2:sn+mn.b2,b3:sn+mn.b3,deep:mn.deep,gl:Me+xt*(Ze+Ot*Vt.lot),idx:nt.idx})}}if(!pt.some(nt=>nt.idx)){const nt=Math.max(1,Math.floor(Ue/7.6+.5)),Fe=Ue/nt,Ze=Fe/7.6;for(let ot=0;ot<nt;ot++)St.push({b0:ot*Fe+.7*Ze,b1:ot*Fe+1.45*Ze,b2:ot*Fe+3.55*Ze,b3:ot*Fe+4.3*Ze,deep:Math.min(.7,.6*Ze),gl:Me+xt*(ot+.5)*Fe,idx:0})}for(const{b0:nt,b1:Fe,b2:Ze,b3:ot,deep:lt,gl:Ot,idx:_n}of St){const Vt=[he,1+2*dt+16+32*_n,xt,X],an=Ot+tt,sn=C-$e;if(sn-an<2.2)continue;const mn=(Zn,fa,Ti,ua)=>{const da=Ti-Zn,pa=ua-fa,zl=Math.hypot(da,pa),Sf=(Ve*da-R*pa)/zl,Ef=(at*da-W*pa)/zl;$t(K,K.idx,[rt(Zn,fa,an),rt(Ti,ua,an),rt(Ti,ua,sn),rt(Zn,fa,sn)],[Sf,0,Ef],m,[[Zn,Me+xt*Zn,Ue,C],[Ti,Me+xt*Ti,Ue,C],[Ti,Me+xt*Ti,Ue,C],[Zn,Me+xt*Zn,Ue,C]],Vt)};mn(nt,0,Fe,lt),mn(Fe,lt,Ze,lt),mn(Ze,lt,ot,0),$t(K,K.idx,[rt(nt,0,sn+.25),rt(Fe,lt,sn),rt(Ze,lt,sn),rt(ot,0,sn+.25)],[Ve*.38,.92,at*.38],x,He(4),J),$t(K,K.idx,[rt(nt,0,an),rt(Fe,lt,an),rt(Ze,lt,an),rt(ot,0,an)],[0,-1,0],x,He(2),J),g.bays+=10}}if(!Ct||Ue<4)continue;const it=Math.hypot(Ct.p0[0]-oe,Ct.p0[1]-Q),Mt=Math.hypot(Ct.p1[0]-oe,Ct.p1[1]-Q),Pt=Math.min(it,Mt),It=Math.abs(Mt-it),bt=Math.max(1,Math.floor(It/5.5+.5)),We=It/bt;for(let $e=0;$e<bt;$e++){if(Ut(L*131+ie*17+$e)>.5)continue;y.setHex(io(ah,Ut(L*57+ie*5+$e+9)));const rt=Pt+$e*We+.3,St=Pt+($e+1)*We-.3,ut=Me+xt*(Pt+($e+.5)*We),nt=1+.5*Ut(L+$e*7+13),Fe=ut+3.05,Ze=ut+2.5,ot=Ze-.24,lt=(sn,mn,Zn)=>[oe+R*sn+Ve*mn,Zn,Q+W*sn+at*mn],Ot=[Wt.AWNING+Ut(L+$e*3+1)*.98,0,0,X],_n=nt/Math.hypot(nt,Fe-Ze),Vt=(Fe-Ze)/Math.hypot(nt,Fe-Ze),an=(sn,mn)=>[[rt,sn,Ue,C],[St,sn,Ue,C],[St,mn,Ue,C],[rt,mn,Ue,C]];$t(K,K.idx,[lt(rt,nt,Ze),lt(St,nt,Ze),lt(St,.02,Fe),lt(rt,.02,Fe)],[Ve*Vt,_n,at*Vt],y,an(0,1),Ot),$t(K,K.idx,[lt(rt,nt,ot),lt(St,nt,ot),lt(St,nt,Ze),lt(rt,nt,Ze)],[Ve,0,at],y,an(2,3),Ot),$t(K,K.idx,[lt(rt,nt,Ze-.02),lt(St,nt,Ze-.02),lt(St,.02,Fe-.02),lt(rt,.02,Fe-.02)],[-Ve*Vt,-_n,-at*Vt],y,an(4,5),Ot),g.awnings+=6}for(let $e=0;$e<bt;$e++){if(Ut(L*173+ie*29+$e+5)>.42||S<6.5)continue;y.setHex(io(ah,Ut(L*61+ie*3+$e+2)));const tt=Me+xt*(Pt+($e+.5)*We),rt=Pt+$e*We+.16,St=Math.min(C-tt-4.2,1.4+1.5*Ut(L+$e*11+3));if(St<1)continue;const ut=tt+3.5,nt=ut+St,Fe=.18,Ze=.18+.62+.25*Ut(L+$e*5),ot=(_n,Vt,an)=>[oe+R*(rt+an)+Ve*_n,Vt,Q+W*(rt+an)+at*_n],lt=[Wt.SIGN+Ut(L+$e*13+7)*.98,0,0,X],Ot=[[0,0,Ze-Fe,St],[Ze-Fe,0,Ze-Fe,St],[Ze-Fe,St,Ze-Fe,St],[0,St,Ze-Fe,St]];$t(K,K.idx,[ot(Fe,ut,.03),ot(Ze,ut,.03),ot(Ze,nt,.03),ot(Fe,nt,.03)],[R,0,W],y,Ot,lt),$t(K,K.idx,[ot(Fe,ut,-.03),ot(Ze,ut,-.03),ot(Ze,nt,-.03),ot(Fe,nt,-.03)],[-R,0,-W],y,Ot,lt),g.signs+=4}}if(ae.col!=null?p.setHex(ae.col,ln):p.copy(m).multiplyScalar(.62),me||A.set([m.r,m.g,m.b,p.r,p.g,p.b],L*6),!be&&!me){let ie=1,oe=0,Q=0;for(let pt=0;pt+1<Le.length;pt++){const De=Le[pt+1][0]-Le[pt][0],Re=Le[pt+1][1]-Le[pt][1],qe=Math.hypot(De,Re);qe>Q&&(Q=qe,ie=De/qe,oe=Re/qe)}let Y=1/0,Z=-1/0,Me=1/0,Pe=-1/0;for(const[pt,De]of Le){const Re=pt*ie+De*oe,qe=-pt*oe+De*ie;Y=Math.min(Y,Re),Z=Math.max(Z,Re),Me=Math.min(Me,qe),Pe=Math.max(Pe,qe)}const Ue=Math.sqrt(Math.min(1,et/Math.max(1,(Z-Y)*(Pe-Me)))),Ve=(Y+Z)/2,at=(Me+Pe)/2,Xt=(Z-Y)/2*Ue,Ht=(Pe-Me)/2*Ue,Ct=(pt,De)=>{const Re=Ve+pt*Xt,qe=at+De*Ht;return[Re*ie-qe*oe,Re*oe+qe*ie]},dt=[Ct(-1,-1),Ct(1,-1),Ct(1,1),Ct(-1,1)],xt=(dt[0][0]+dt[2][0])/2,Cn=(dt[0][1]+dt[2][1])/2;for(let pt=0;pt<4;pt++){const[De,Re]=dt[pt],[qe,ct]=dt[(pt+1)%4],vt=Math.hypot(qe-De,ct-Re);if(vt<.05)continue;let wt=(ct-Re)/vt,Lt=-(qe-De)/vt;wt*((De+qe)/2-xt)+Lt*((Re+ct)/2-Cn)<0&&(wt=-wt,Lt=-Lt);const Gt=(qe-De)*Lt-(ct-Re)*wt<0,[zt,Qt,R,W]=Gt?[qe,ct,De,Re]:[De,Re,qe,ct];$t(G,G.box,[[zt,ye,Qt],[R,ye,W],[R,C,W],[zt,C,Qt]],[wt,0,Lt],m,[[0,X,vt,C],[vt,X,vt,C],[vt,X,vt,C],[0,X,vt,C]],[he,1,0,X])}$t(G,G.box,[[dt[0][0],C,dt[0][1]],[dt[1][0],C,dt[1][1]],[dt[2][0],C,dt[2][1]],[dt[3][0],C,dt[3][1]]],[0,1,0],p,[[0,0,0,C],[0,0,0,C],[0,0,0,C],[0,0,0,C]],[Wt.ROOF+Se*.98,0,0,X])}if(Xe?.shape!=="pyramid"){const ie=Le.slice(0,-1).map(([Q,Y])=>new Je(Q,Y)),oe=G.pos.length/3;for(const Q of ie)tr(G,Q.x,C,Q.y,0,1,0,p.r,p.g,p.b),G.aux.push(0,0,0,C),G.ext.push(Wt.ROOF+Se*.98,0,0,X);for(const Q of Ls.triangulateShape(ie,[])){const Y=ie[Q[0]],Z=ie[Q[1]],Me=ie[Q[2]],Pe=(Z.y-Y.y)*(Me.x-Y.x)-(Z.x-Y.x)*(Me.y-Y.y);if(Pe>=0?O.push(oe+Q[0],oe+Q[1],oe+Q[2]):O.push(oe+Q[0],oe+Q[2],oe+Q[1]),me||g.roofs++,fe)for(const Ue of Pe>=0?[Q[0],Q[2],Q[1]]:[Q[0],Q[1],Q[2]])fe.push(ie[Ue].x,C-.06,ie[Ue].y)}if(S>=11&&et>=220){const Q=S>=45?2:1;for(let Y=0;Y<Q;Y++){const Z=Math.sqrt(et),Me=Math.min(Z*.42,3+Z*.22*(.5+Ut(L*7+Y))),Pe=Math.min(Z*.42,3+Z*.18*(.5+Ut(L*11+Y))),Ue=ze+(Ut(L*13+Y)-.5)*Z*.35,Ve=st+(Ut(L*17+Y)-.5)*Z*.35,at=S>=45?4+5*Ut(L*19+Y):2.2+1.6*Ut(L*19+Y);let Xt=1,Ht=0,Ct=0;for(let Re=0;Re+1<Le.length;Re++){const qe=Le[Re+1][0]-Le[Re][0],ct=Le[Re+1][1]-Le[Re][1],vt=Math.hypot(qe,ct);vt>Ct&&(Ct=vt,Xt=qe/vt,Ht=ct/vt)}const dt=(Re,qe)=>[Ue+Xt*Me/2*Re-Ht*Pe/2*qe,Ve+Ht*Me/2*Re+Xt*Pe/2*qe],xt=[dt(-1,-1),dt(1,-1),dt(1,1),dt(-1,1)];if(!xt.every(([Re,qe])=>oh(Le,Re,qe)))continue;y.copy(p).lerp(x.clone().multiplyScalar(.8),.5);const Cn=[Wt.ROOFBOX+Ut(L+Y)*.98,0,0,X],pt=S>=45?G:K,De=pt.idx;me||(g.boxes+=10);for(let Re=0;Re<4;Re++){const[qe,ct]=xt[Re],[vt,wt]=xt[(Re+1)%4],Lt=Math.hypot(vt-qe,wt-ct);let Gt=(wt-ct)/Lt,zt=-(vt-qe)/Lt;Gt*((qe+vt)/2-Ue)+zt*((ct+wt)/2-Ve)<0&&(Gt=-Gt,zt=-zt),$t(pt,De,[[qe,C,ct],[vt,C,wt],[vt,C+at,wt],[qe,C+at,ct]],[Gt,0,zt],y,[[0,0,Lt,C],[Lt,0,Lt,C],[Lt,at,Lt,C],[0,at,Lt,C]],Cn)}$t(pt,De,[[xt[0][0],C+at,xt[0][1]],[xt[1][0],C+at,xt[1][1]],[xt[2][0],C+at,xt[2][1]],[xt[3][0],C+at,xt[3][1]]],[0,1,0],p,[[0,0,0,C],[0,0,0,C],[0,0,0,C],[0,0,0,C]],[Wt.ROOF+Se*.98,0,0,X])}}}};i.buildings.forEach((ae,L)=>{w(ae,L,(Te,me)=>{const fe=u.bin(Te,me),xe=d.bin(Te,me);return E[L]=fe,M[L]=xe,T[L*4]=fe.pos.length/3,T[L*4+2]=xe.pos.length/3,[fe,xe]},null,null),E[L]&&(T[L*4+1]=E[L].pos.length/3,T[L*4+3]=M[L].pos.length/3)});{const ae=Math.max(1,Math.ceil(o/nr)),L=new Float32Array(nr*3*4*ae);L.set(a.subarray(0,o*Ks));const Te=new qi(L,nr*3,ae,xn,Fn);Te.minFilter=Te.magFilter=cn,Te.generateMipmaps=!1,Te.needsUpdate=!0,c.value=Te,a=new Float32Array(0)}const D=(ae,L)=>{const Te=new Nn({vertexColors:!0});return Te.name=L?"fallen walls":"walls",L&&(Te.defines={P2P_BORN:""}),li(Te,i,{key:ae,uniforms:{uFace:c,uMark:h},vertexPars:Iv,vertex:Uv,fragmentPars:Fv,color:Nv,normal:zv,light:Ov,final:kv})},F=D("p2p-city-walls",!1),B=D("p2p-city-born",!0),k=new Jt;{const ae=new ri(1e9,4,4),L=ae.bin(0,0);$t(L,L.idx,[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],[0,1,0],m,[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],[Wt.ROOF,0,0,0]);const Te=ae.build(B,{cast:!0,receive:!0});for(const me of Te.children)me.frustumCulled=!1;Te.name="the fallen façade, warm",k.add(Te)}const N=u.build(F,{cast:!0,receive:!0}),U=d.build(F,{cast:Il()==="high",receive:!0});k.add(N,U),k.userData.styles=_,k.userData.triangles=g;const I=N.children.map(ae=>{const L=ae.geometry,Te=L.index.array,me=([Le,ge])=>{const ze=new Nt;for(const st of Object.keys(L.attributes))ze.setAttribute(st,L.getAttribute(st));return ze.setIndex(new Tt(Te.subarray(Le,Le+ge),1)),ze.boundingSphere=L.boundingSphere,ze.boundingBox=L.boundingBox,ze},fe=ae.userData.near?me(ae.userData.near):L,xe=ae.userData.far?me(ae.userData.far):L;return ae.geometry=fe,{m:ae,near:fe,far:xe}}),P=U.children,V=(ae,L)=>{const Te=ae.geometry.boundingSphere;return Math.hypot(Te.center.x-L.x,Te.center.z-L.z)-Te.radius};k.userData.tend=ae=>{for(const L of I)L.m.geometry=V(L.m,ae)>Yv?L.far:L.near;for(const L of P)L.visible=V(L,ae)<$v};const H=new Jt;H.name="broken buildings",k.add(H);const ee=new Us({color:1052430});ee.name="the dark behind a hole";{const ae=new Nt;ae.setAttribute("position",new Tt(new Float32Array(9),3));const L=new Dt(ae,ee);L.frustumCulled=!1,L.matrixAutoUpdate=!1,H.add(L)}const ne=new Map,ue=new Map,de=new Set,pe=ae=>{if(ne.has(ae)||!E[ae])return;const[L,Te,me,fe]=[T[ae*4],T[ae*4+1],T[ae*4+2],T[ae*4+3]],xe=E[ae].mesh,Le=M[ae].mesh;ne.set(ae,{main:xe&&Te>L?ih(xe,L,Te):null,fine:Le&&fe>me?ih(Le,me,fe):null})},$=ae=>{const L=ue.get(ae);L&&(H.remove(L),L.traverse(Te=>{const me=Te;me.isMesh&&me.geometry.dispose()}),ue.delete(ae))};return{group:k,breach:(ae,L)=>{const Te=i.buildings[ae];if(!Te||de.has(ae)||!E[ae])return;pe(ae),$(ae);const me=new ri(1e9,4,4),fe=new ri(1e9,4,4),xe=[];w(Te,ae,()=>[me.bin(0,0),fe.bin(0,0)],L,xe);const Le=new Jt;Le.add(me.build(F,{cast:!0,receive:!0}),fe.build(F,{receive:!0}));const ge=new Nt;ge.setAttribute("position",new Tt(new Float32Array(xe),3));const ze=new Dt(ge,ee);ze.matrixAutoUpdate=!1,Le.add(ze),H.add(Le),ue.set(ae,Le)},raze:ae=>{pe(ae),$(ae),de.add(ae)},reset:()=>{for(const[ae,L]of ne)L.main&&sh(E[ae].mesh,T[ae*4],L.main),L.fine&&sh(M[ae].mesh,T[ae*4+2],L.fine);ne.clear(),de.clear();for(const ae of[...ue.keys()])$(ae)},colors:ae=>({wall:[A[ae*6],A[ae*6+1],A[ae*6+2]],roof:[A[ae*6+3],A[ae*6+4],A[ae*6+5]]}),broken:()=>({breached:ue.size,razed:de.size}),mark:ae=>{h.value=ae},part:(ae,L,Te)=>{const me=i.buildings[ae],fe=L.parts.find(De=>De.id===Te),xe=me&&fe?b(me,ae,!1):null;if(!me||!fe||!xe)return null;const{ring:Le,top:ge,datum:ze,g:st,out:et,core:C,faces:S,seed:X,code:re}=xe,le=m.clone(),se=me.col!=null?new je().setHex(me.col,ln):m.clone().multiplyScalar(.62),ke=new je(1,1,1),[ve,Oe]=L.mid,[Se,he]=L.axis,ye=Math.max(.2,L.shrink),Xe=(De,Re)=>[(De-ve)*Se+(Re-Oe)*he,-(De-ve)*he+(Re-Oe)*Se],G=(De,Re)=>[ve+ye*(De*Se-Re*he),Oe+ye*(De*he+Re*Se)],K=(De,Re)=>[ve+De*Se-Re*he,Oe+De*he+Re*Se],[be,O]=Xe(fe.x,fe.z),ie=(fe.hx+.08)/ye+.03,oe=(fe.hz+.08)/ye+.03,Q=be/ye-ie,Y=be/ye+ie,Z=O/ye-oe,Me=O/ye+oe;let Pe=[];for(let De=0;De+1<Le.length;De++){const[Re,qe]=Xe(Le[De][0],Le[De][1]);Pe.push({a:Re,b:qe,e:De})}const Ue=[De=>De.a-Q,De=>Y-De.a,De=>De.b-Z,De=>Me-De.b];for(const De of Ue){const Re=[];for(let qe=0;qe<Pe.length;qe++){const ct=Pe[qe],vt=Pe[(qe+1)%Pe.length],wt=De(ct),Lt=De(vt),Gt=()=>{const zt=wt/(wt-Lt);return{a:ct.a+(vt.a-ct.a)*zt,b:ct.b+(vt.b-ct.b)*zt}};wt>=0&&Lt>=0?Re.push(ct):wt>=0?(Re.push(ct),Re.push({...Gt(),e:-1})):Lt>=0&&Re.push({...Gt(),e:ct.e})}if(Pe=Re,Pe.length<3)return null}const Ve=fe.y-fe.hy,at=fe.y+fe.hy,Xt=new ri(1e9,4,4),Ht=Xt.bin(0,0),Ct=[Wt.CUT+X*.98,0,0,ze];for(let De=0;De<Pe.length;De++){const Re=Pe[De],qe=Pe[(De+1)%Pe.length],[ct,vt]=G(Re.a,Re.b),[wt,Lt]=G(qe.a,qe.b),Gt=Math.hypot(wt-ct,Lt-vt);if(!(Gt<.03))if(Re.e>=0){let[zt,Qt]=Le[Re.e],[R,W]=Le[Re.e+1],J=st[Re.e],te=st[Re.e+1];const q=Math.hypot(R-zt,W-Qt);if(q<.05)continue;const _e=(W-Qt)/q*et,Ce=-(R-zt)/q*et;et>0&&([zt,R]=[R,zt],[Qt,W]=[W,Qt],[J,te]=[te,J]);const Be=(R-zt)/q,Ne=(W-Qt)/q,Ye=(te-J)/q,Qe=(We,$e)=>{const[tt,rt]=K(We,$e);return(tt-zt)*Be+(rt-Qt)*Ne},He=Qe(Re.a,Re.b),it=Qe(qe.a,qe.b),Mt=(He+it)/2,Pt=S[Re.e],It=(Pt===1||Pt===2?1:0)+2*(r(ae,Re.e)?js.SHOP:js.PLAIN),bt=(C[Re.e]??[]).find(We=>Mt>=We.u0&&Mt<=We.u1)?.idx??0;$t(Ht,Ht.idx,[[ct,Ve,vt],[wt,Ve,Lt],[wt,at,Lt],[ct,at,vt]],[_e,0,Ce],le,[[He,J+Ye*He,q,ge],[it,J+Ye*it,q,ge],[it,J+Ye*it,q,ge],[He,J+Ye*He,q,ge]],[re,It+32*bt,Ye,ze])}else{const zt=qe.a-Re.a,Qt=qe.b-Re.b,R=Math.hypot(zt,Qt),W=(Re.a+qe.a)/2,J=(Re.b+qe.b)/2;let te=-Qt/R,q=zt/R;(be/ye-W)*te+(O/ye-J)*q<0&&(te=-te,q=-q);const[_e,Ce]=K(W+te*.15,J+q*.15);if(!oh(Le,_e,Ce))continue;const Be=-(te*Se-q*he),Ne=-(te*he+q*Se);$t(Ht,Ht.idx,[[ct,Ve,vt],[wt,Ve,Lt],[wt,at,Lt],[ct,at,vt]],[Be,0,Ne],ke,[[0,Ve,Gt,ge],[Gt,Ve,Gt,ge],[Gt,Ve,Gt,ge],[0,Ve,Gt,ge]],Ct)}}const dt=Pe.map(De=>{const[Re,qe]=G(De.a,De.b);return new Je(Re,qe)}),xt=Ht.pos.length/3;for(const De of dt)tr(Ht,De.x,at,De.y,0,1,0,se.r,se.g,se.b),Ht.aux.push(0,0,0,ge),Ht.ext.push(Wt.ROOF+X*.98,0,0,ze);for(const De of dt)tr(Ht,De.x,Ve,De.y,0,-1,0,1,1,1),Ht.aux.push(0,Ve,0,ge),Ht.ext.push(...Ct);for(const De of Ls.triangulateShape(dt,[])){const Re=dt[De[0]],qe=dt[De[1]],ct=dt[De[2]],wt=(qe.y-Re.y)*(ct.x-Re.x)-(qe.x-Re.x)*(ct.y-Re.y)>=0?[De[0],De[1],De[2]]:[De[0],De[2],De[1]];Ht.idx.push(xt+wt[0],xt+wt[1],xt+wt[2],xt+dt.length+wt[0],xt+dt.length+wt[2],xt+dt.length+wt[1])}const Cn=Xt.build(B,{cast:!0,receive:!0}).children[0];if(!Cn)return null;Cn.name="fallen part";const pt=new Rt().compose(new z(fe.x,fe.y,fe.z),new Zt().setFromAxisAngle(new z(0,1,0),fe.yaw),new z(1,1,1)).invert();return{mesh:Cn,unborn:pt}},faces:()=>({walls:o-1,bytes:c.value.image.data.byteLength})}}function jv(i,e,t,n,s,r,a,o,l,c,h,f,u){for(let g=0;g+1<t.length;g++){let[m,x]=t[g],[p,y]=t[g+1],_=f[g],v=f[g+1];const E=Math.hypot(p-m,y-x);if(E<.05)continue;const M=(y-x)/E*n,T=-(p-m)/E*n;n>0&&([m,p]=[p,m],[x,y]=[y,x],[_,v]=[v,_]);const A=Math.abs((s-(m+p)/2)*M+(r-(x+y)/2)*T),b=o-l,w=Math.hypot(A,b),D=[M*b/w,A/w,T*b/w],F=(k,N)=>{const U=k<=0?a:l+b*k,I=Math.max(0,k),P=m+(p-m)*N,V=x+(y-x)*N;return[P+(s-P)*I,U,V+(r-V)*I]},B=[h,9+32*u(g),0,l];for(let k=-1;k<10;k++){const N=k/10,U=(k+1)/10,I=E*(1-Math.max(0,N)),P=E*(1-U),V=(_+v)/2;$t(i,e,[F(N,0),F(N,1),F(U,1),F(U,0)],D,c,[[E/2-I/2,V,E,o],[E/2+I/2,V,E,o],[E/2+P/2,V,E,o],[E/2-P/2,V,E,o]],B)}}}function Zv(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Nt;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=lh(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let m=0;m<a[h].length;++m)d.push(a[h][m][u]);const g=lh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function lh(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Tt(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<t;g++){const m=h.getComponent(u,g);o.setComponent(u+f,g,m)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}const Et=(i,e)=>[i[0]+e[0],i[1]+e[1],i[2]+e[2]],Wn=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],mt=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],Gi=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],Tn=i=>{const e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]};function Jv(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const fl=i=>{const e=i()*2-1,t=i()*Math.PI*2,n=Math.sqrt(1-e*e);return[n*Math.cos(t),e,n*Math.sin(t)]};function wf(i){const e=Tn(Gi(i,Math.abs(i[1])<.95?[0,1,0]:[1,0,0]));return[e,Gi(i,e)]}class Qv{pos=[];nor=[];col=[];leaf=[];idx=[];v(e,t,n,s,r,a,o){return this.pos.push(...e),this.nor.push(...t),this.col.push(n.r,n.g,n.b),this.leaf.push(s,r,a,o),this.pos.length/3-1}limb(e,t,n,s,r,a,o=0){const l=Tn(Wn(t,e)),[c,h]=wf(l),f=Math.hypot(...Wn(t,e)),u=this.pos.length/3;for(let d=0;d<=r;d++){const g=d/r*Math.PI*2,m=Et(mt(c,Math.cos(g)),mt(h,Math.sin(g)));this.v(Et(e,mt(m,n)),m,a,d/r,o,1,-1),this.v(Et(t,mt(m,s)),m,a,d/r,o+f,1,-1)}for(let d=0;d<r;d++){const g=u+d*2;this.idx.push(g,g+2,g+1,g+1,g+2,g+3)}}quad(e,t,n,s,r,a,o){const l=this.v(e,s,r,0,0,a,o),c=this.v(Et(e,t),s,r,1,0,a,o),h=this.v(Et(e,n),s,r,0,1,a,o),f=this.v(Et(Et(e,t),n),s,r,1,1,a,o);this.idx.push(l,c,f,l,f,h)}strip(e,t,n,s,r,a,o){const l=this.pos.length/3;e.forEach((c,h)=>{const f=h/(e.length-1);this.v(Wn(c,mt(n[h],t[h])),s[h],r,0,f,a[h],o),this.v(Et(c,mt(n[h],t[h])),s[h],r,1,f,a[h],o)});for(let c=0;c+1<e.length;c++){const h=l+c*2;this.idx.push(h,h+1,h+3,h,h+3,h+2)}}geometry(){const e=new Nt;return e.setAttribute("position",new _t(this.pos,3)),e.setAttribute("normal",new _t(this.nor,3)),e.setAttribute("color",new _t(this.col,3)),e.setAttribute("aLeaf",new _t(this.leaf,4)),e.setIndex(this.idx),e.computeBoundingSphere(),e}}function Xr(i,e,t,n,s,r,a,o=0,l=0){const c=t.map(u=>u.r[0]*u.r[1]*u.r[2]),h=c.reduce((u,d)=>u+d,0),f=u=>{let d=e()*h,g=0;for(;g<t.length-1&&d>c[g];)d-=c[g],g++;const m=t[g],x=fl(e),p=u?.25+.2*e():.62+.38*Math.sqrt(e()),y=Et(m.c,[x[0]*m.r[0]*p,x[1]*m.r[1]*p,x[2]*m.r[2]*p]),_=Tn([x[0]/m.r[0],x[1]/m.r[1],x[2]/m.r[2]]),v=Wn(y,n.c),E=Tn([v[0]/n.r[0]**2,v[1]/n.r[1]**2,v[2]/n.r[2]**2]),M=Tn(Et(Et(_,mt(fl(e),.55)),[0,o,0])),[T,A]=wf(M),b=e()*Math.PI*2,w=Et(mt(T,Math.cos(b)),mt(A,Math.sin(b))),D=Gi(M,w),F=r*(u?1.4:.95+.4*e()),B=Math.hypot(v[0]/n.r[0],v[1]/n.r[1],v[2]/n.r[2]),k=(u?.5:.6+.4*Math.min(1,p*B)**1.4)*(.8+.2*(E[1]*.5+.5)),N=Tn(Et(Et(Et(mt(_,.55),mt(E,.45)),mt(M,.2)),[0,.25,0]));i.quad(Wn(Wn(y,mt(w,F/2)),mt(D,F/2)),mt(w,F),mt(D,F),N,a[Math.floor(e()*a.length)],k,e()*.999)};for(let u=0;u<s;u++)f(!1);for(let u=0;u<l;u++)f(!0)}function $r(i,e,t,n,s,r,a,o){const l=Et(mt(Et(t,n),.5),[(e()-.5)*.6,.3+e()*.4,(e()-.5)*.6]),c=(s+r)/2;i.limb(t,l,s,c,a,o),i.limb(l,n,c,r,a,o,Math.hypot(...Wn(l,t)))}const An=i=>new je(i),ps=[{name:"plane",leaf:10,bark:1,leaves:[6257974,7047739,5665839],trunk:10262136,trunkHalf:.24,lobes:7,lobeDepth:.16,palm:0,build(i,e,t){const n=An(this.trunk),s=[.15,3.1,.05];i.limb([0,0,0],s,.3,.22,7,n),i.limb(s,[.1,6.6,0],.22,.07,6,n,3.1);const r={c:[0,7.4,0],r:[4,3.4,4]},a=[{c:[0,7.6,0],r:[3,2.6,3]}];for(let o=0;o<4;o++){const l=o*1.62+e()*.6,c=1.9+e()*.6;a.push({c:[Math.cos(l)*c,6.2+e()*2.4,Math.sin(l)*c],r:[1.9+e()*.4,1.7+e()*.3,1.9+e()*.4]})}for(const o of a.slice(1))if($r(i,e,s,mt(o.c,.85),.16,.07,5,n),t>=1)for(let l=0;l<2;l++)i.limb(mt(o.c,.85),Et(o.c,mt(fl(e),1.4)),.06,.025,3,n);Xr(i,e,a,r,Math.round(46*t),2.4/Math.sqrt(t),this.leaves.map(An),0,5)}},{name:"ficus",leaf:11,bark:0,leaves:[3428906,2967589,3824174],trunk:8223346,trunkHalf:.2,lobes:9,lobeDepth:.08,palm:0,build(i,e,t){const n=An(this.trunk),s=[0,2.1,0];i.limb([0,0,0],s,.24,.2,7,n),i.limb(s,[0,4.4,0],.2,.06,6,n,2.1);const r={c:[0,4.9,0],r:[3.5,2.6,3.5]},a=[{c:[0,5,0],r:[3.1,2.3,3.1]}];for(let o=0;o<4;o++){const l=o*1.57+e()*.5;a.push({c:[Math.cos(l)*1.8,4.4+e()*1.2,Math.sin(l)*1.8],r:[1.7,1.4,1.7]})}for(const o of a.slice(1))$r(i,e,s,mt(o.c,.7),.13,.06,5,n);Xr(i,e,a,r,Math.round(52*t),2/Math.sqrt(t),this.leaves.map(An),0,6)}},{name:"cypress",leaf:12,bark:0,leaves:[2835760,3362611,2572331],trunk:6115656,trunkHalf:.38,lobes:5,lobeDepth:.22,palm:0,build(i,e,t){const n=An(this.trunk),s=[.5,2.4,.2];i.limb([0,0,0],s,.48,.38,8,n),i.limb(s,[.7,5.2,.2],.38,.12,7,n,2.4);const r=[];for(let o=0;o<4;o++){const l=o*1.9+e()*.7,c=o===0?.5:2.4+e()*1.2;r.push({c:[Math.cos(l)*c+.6,6+o*1.3+e()*.8,Math.sin(l)*c],r:[3.2-o*.25,1.15,3-o*.2]})}const a={c:[.6,8.2,0],r:[5,3.2,4.6]};for(const o of r)$r(i,e,s,Wn(o.c,[0,.7,0]),.24,.1,5,n);Xr(i,e,r,a,Math.round(48*t),2.7/Math.sqrt(t),this.leaves.map(An),1.1,5)}},{name:"eucalyptus",leaf:13,bark:4,leaves:[7308391,8097644,6584412],trunk:13616819,trunkHalf:.3,lobes:4,lobeDepth:.3,palm:0,build(i,e,t){const n=An(this.trunk),s=[.3,8.5,-.2];i.limb([0,0,0],[.1,4.5,0],.4,.33,7,n),i.limb([.1,4.5,0],s,.33,.26,7,n,4.5),i.limb(s,[.4,13,-.3],.26,.08,6,n,8.5);const r=[];for(let o=0;o<5;o++){const l=o*1.26+e()*.5,c=o===0?.4:2+e()*1.4;r.push({c:[Math.cos(l)*c,11.5+e()*4.5,Math.sin(l)*c],r:[2.1+e()*.5,1.9+e()*.5,2.1+e()*.5]})}for(const o of r)$r(i,e,s,Wn(o.c,[0,.8,0]),.17,.06,5,n);Xr(i,e,r,{c:[0,13.5,0],r:[4,4,4]},Math.round(42*t),2.1/Math.sqrt(t),this.leaves.map(An),-.3,3)}},{name:"fan-palm",leaf:14,bark:2,leaves:[6126138,6784063],trunk:8154460,trunkHalf:.2,lobes:11,lobeDepth:.42,palm:1,build(i,e,t){const n=An(this.trunk),s=[.35,0,.1],r=Et([0,15,0],s);i.limb([0,0,0],Et([0,7,0],mt(s,.25)),.27,.2,6,n),i.limb(Et([0,7,0],mt(s,.25)),r,.2,.17,6,n,7);const a=An(9270870),o=Math.round(16*t),l=Math.round(10*t),c=2.3/Math.sqrt(t);for(let f=0;f<l;f++){const u=f*2.4+e()*.4,d=[Math.cos(u),0,Math.sin(u)],g=Tn(Et(mt(d,.28),[0,-1,0])),m=Gi(g,d),x=Et(Et(r,[0,-.4,0]),mt(d,.2));i.quad(Wn(x,mt(m,c*.4)),mt(m,c*.8),mt(g,c*1.1),Tn(Et(d,[0,-.2,0])),a,.6,e()*.999)}const h=this.leaves.map(An);for(let f=0;f<o;f++){const u=f*2.39996,d=1.25-f/o*1.45,g=[Math.cos(u),0,Math.sin(u)],m=Tn(Et(mt(g,Math.cos(d)),[0,Math.sin(d),0])),x=Tn(Gi(m,[0,1,0])),p=Gi(x,m),y=Et(r,mt(m,.25));i.quad(Wn(y,mt(x,c/2)),mt(x,c),mt(m,c*1.05),Tn(Et(mt(m,.6),Et(mt(p,.3),[0,.4,0]))),h[f%h.length],.75+.25*Math.max(0,Math.sin(d)),e()*.999)}}},{name:"canary-palm",leaf:15,bark:3,leaves:[5599290,6257472,5006899],trunk:7298117,trunkHalf:.36,lobes:13,lobeDepth:.5,palm:1,build(i,e,t){const n=An(this.trunk);i.limb([0,0,0],[.05,4.5,0],.42,.37,9,n),i.limb([.05,4.5,0],[.1,8.4,0],.37,.35,9,n,4.5),i.limb([.1,8.4,0],[.1,9.4,0],.48,.38,9,n,8.4);const s=[.1,9.3,0],r=this.leaves.map(An),a=Math.round(24*t),o=t>=1?5:3;for(let l=0;l<a;l++){const c=l*2.39996+e()*.2,h=1.15-l/a*1.35+(e()-.5)*.15,f=5.2+e()*.8,u=[Math.cos(c),0,Math.sin(c)],d=Tn(Gi(u,[0,1,0])),g=[],m=[],x=[],p=[],y=[];for(let _=0;_<=o;_++){const v=_/o*f,E=v*Math.cos(h),M=v*Math.sin(h)-.055*v*v;g.push(Et(s,Et(mt(u,E+.2),[0,M,0]))),m.push(.75*Math.max(.08,Math.sin(Math.PI*Math.min(1,_/o*1.1))**.6)*(1-.2*(_/o))),x.push(d),p.push(Tn(Et([0,1,0],mt(u,.9+_/o)))),y.push(.55+.45*Math.min(1,_/o*1.6)*(.75+.25*Math.max(0,Math.sin(h))))}i.strip(g,m,x,p,r[l%r.length],y,e()*.999)}}}];function e1(i,e,t){const n=new Qv;i.build(n,Jv(t),e);const s=n.geometry();let r=0,a=0,o=1/0,l=0;for(let c=0;c<n.pos.length/3;c++){const h=n.pos[c*3],f=n.pos[c*3+1],u=n.pos[c*3+2];a=Math.max(a,f),n.leaf[c*4+3]>=0&&(r=Math.max(r,Math.hypot(h,u)),o=Math.min(o,f),l=Math.max(l,f))}return{geo:s,width:r*2,height:a,crownLo:o,crownHi:l}}const so=`
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
`,ch=`
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
}`,t1={low:[38,58],mid:[70,100],high:[100,140]},n1=820,hh=950,fh=16,i1={low:.6,mid:1,high:1.35},uh=200;function vi(i,e,t){let n=Math.imul(Math.round(i*10)^668265261,73856093)^Math.imul(Math.round(e*10)+t*2654435761,19349663);return n=Math.imul(n^n>>>15,2246822507),n=Math.imul(n^n>>>13,3266489909),((n^n>>>16)>>>0)/4294967296}function s1(i,e){const t=i.r?Math.min(2.3,Math.max(.6,i.r/2.6)):1,n=(.8+.4*vi(i.x,i.z,1))*t,s=n*(.88+.24*vi(i.x,i.z,2));return e.set(s,n,s)}const r1={wood:[10,0,45,45,0,0],park:[30,10,25,15,8,12],plaza:[45,25,0,0,15,15],avenue:[40,15,0,0,15,30],street:[40,40,0,0,12,8],yard:[30,25,15,10,15,5]},dh={wood:"wood",park:"park",grass:"park",garden:"park",playground:"park",pool:"park",plaza:"plaza",pier:"plaza",parking:"street"};function a1(i,e){const t=i.props,n=new Uint8Array(e.length),s=i.areas.filter(l=>dh[l.k]).map(l=>{let c=1/0,h=1/0,f=-1/0,u=-1/0;for(const[d,g]of l.r)c=Math.min(c,d),h=Math.min(h,g),f=Math.max(f,d),u=Math.max(u,g);return{a:l,x0:c,z0:h,x1:f,z1:u}}),r=(l,c,h)=>{let f=!1;for(let u=0,d=l.length-1;u<l.length;d=u++){const[g,m]=l[u],[x,p]=l[d];m>h!=p>h&&c<(x-g)*(h-m)/(p-m)+g&&(f=!f)}return f},a=50,o=new Map;for(const l of i.roads){if(l.b||l.c==="pedestrian")continue;const c=l.c==="trunk"||l.c==="primary";for(let h=0;h+1<l.p.length;h++){const[f,u]=l.p[h],[d,g]=l.p[h+1],m=l.w/2+10;for(let x=Math.floor((Math.min(f,d)-m)/a);x<=Math.floor((Math.max(f,d)+m)/a);x++)for(let p=Math.floor((Math.min(u,g)-m)/a);p<=Math.floor((Math.max(u,g)+m)/a);p++){const y=`${x}_${p}`;let _=o.get(y);_||o.set(y,_=[]),_.push([f,u,d,g,l.w,c])}}}return e.forEach((l,c)=>{const h=t[l];let f="";for(const x of s)if(h.x>=x.x0&&h.x<=x.x1&&h.z>=x.z0&&h.z<=x.z1&&r(x.a.r,h.x,h.z)){f=dh[x.a.k];break}if(!f){let x=1/0,p=!1;for(const[y,_,v,E,M,T]of o.get(`${Math.floor(h.x/a)}_${Math.floor(h.z/a)}`)??[]){const A=v-y,b=E-_,w=A*A+b*b||1,D=Math.max(0,Math.min(1,((h.x-y)*A+(h.z-_)*b)/w)),F=Math.hypot(h.x-y-A*D,h.z-_-b*D)-M/2;F<x&&(x=F,p=T)}f=x<8?p?"avenue":"street":"yard"}const u=r1[f],d=u.reduce((x,p)=>x+p,0);let g=vi(h.x,h.z,3)*d,m=0;for(;m<u.length-1&&g>=u[m];)g-=u[m],m++;n[c]=m}),n}function o1(i,e,t){const n=typeof location>"u"?null:new URLSearchParams(location.search).get("treelod"),s=Il(),[r,a]=n==="near"?[220,240]:n==="far"?[-2,-1]:t1[s],o=new Jt;o.name="trees";const l=i.props,c=a1(i,e),h=new Map;e.forEach((U,I)=>h.set(U,I));const f={};for(const U of c)f[ps[U].name]=(f[ps[U].name]??0)+1;const u=new Float32Array(e.length*4);e.forEach((U,I)=>{const P=l[U];u[I*4]=vi(P.x,P.z,4),u[I*4+1]=(vi(P.x,P.z,5)-.5)*1.4,u[I*4+2]=.84+.32*vi(P.x,P.z,6),u[I*4+3]=c[I]===0&&vi(P.x,P.z,7)<.25?.2+.45*vi(P.x,P.z,8):0});const d={uTime:{value:0},uEye:{value:new z(1e9,0,0)},uWind:{value:new z(.92,0,.38).normalize()},uFade:{value:new yt(r,a,n1,hh)}},g=ps.map((U,I)=>e1(U,i1[s],101+I*7919)),m=ps.map((U,I)=>{const P=Math.max(1,Math.min(2500,c.filter(pe=>pe===I).length)),V=g[I].geo.clone(),H=new Kn(new Float32Array(P*4),4).setUsage(As);V.setAttribute("aTree",H);const ee=`#define TREE_LEAF ${U.leaf}
#define TREE_BARK ${U.bark}
`,ne=li(new Nn({vertexColors:!0,side:pn,alphaToCoverage:!0}),i,{key:`tree-near-${U.name}`,uniforms:d,vertexPars:`${ee}attribute vec4 aLeaf;
${so}
varying vec4 vLeaf; varying vec3 vTint; varying float vFade; varying float vFoot;`,vertex:`
        vFade = smoothstep(uFade.x, uFade.y, treeDist());
        vFoot = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).y;
        vLeaf = aLeaf; vTint = aTree.yzw;
        transformed = treeSway(transformed, aLeaf.w);
        vWorld = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`,fragmentPars:`${ee}${ro}
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
#endif`,light:ch}),ue=new tf({depthPacking:Bh,side:pn});ue.onBeforeCompile=pe=>{Object.assign(pe.uniforms,d),pe.vertexShader=pe.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aLeaf;
${so}
varying vec4 vLeaf; varying float vFade;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFade = smoothstep(uFade.x, uFade.y, treeDist()); vLeaf = aLeaf; transformed = treeSway(transformed, aLeaf.w);`),pe.fragmentShader=pe.fragmentShader.replace("#include <common>",`#include <common>
${ee}${Ki}
${ro}
varying vec4 vLeaf; varying float vFade;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
          if (treeIgn(gl_FragCoord.xy) < vFade || (vLeaf.w >= -0.5 && treeLeaf(vLeaf.xy, vLeaf.w).x < 0.0)) discard;`)},ue.customProgramCacheKey=()=>`tree-depth-${U.name}`;const de=new Xi(V,ne,P);return de.instanceMatrix.setUsage(As),de.count=0,de.customDepthMaterial=ue,de.castShadow=!0,de.receiveShadow=!0,de.matrixAutoUpdate=!1,de.name=`tree near ${U.name}`,de.boundingSphere=new Si(new z,1),o.add(de),{mesh:de,tree:H,slots:[]}}),x=new Map,p=ps.map((U,I)=>{const P=g[I];return{a:new yt(P.width,P.height,P.crownLo,P.crownHi),b:new yt(U.trunkHalf,U.lobes,U.lobeDepth,U.palm),leaf:l1(P.geo,!0),bark:new je(U.trunk)}}),y={...d,uFarA:{value:p.map(U=>U.a)},uFarB:{value:p.map(U=>U.b)},uFarLeaf:{value:p.map(U=>U.leaf)},uFarBark:{value:p.map(U=>U.bark)}},_=li(new Nn({side:pn,alphaToCoverage:!0}),i,{key:"tree-far",uniforms:y,vertexPars:`${so}
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
    }`,light:ch}),v=new _t([-.5,0,0,.5,0,0,.5,1,0,-.5,1,0],3),E=new _t([0,0,1,0,0,1,0,0,1,0,0,1],3),M=new Ts([0,1,2,0,2,3],1),T=Math.max(...g.map(U=>Math.max(U.height,U.width)))*1.5,A=new Map;e.forEach((U,I)=>{const P=l[U],V=`${Math.floor(P.x/uh)}_${Math.floor(P.z/uh)}`;let H=A.get(V);H||A.set(V,H=[]),H.push(I)});const b=new Map,w=[];for(const U of A.values()){const I=new Nt;I.setAttribute("position",v),I.setAttribute("normal",E),I.setIndex(M);const P=new Float32Array(U.length*4),V=new Float32Array(U.length),H=new Xi(I,_,U.length);let ee=1/0,ne=1/0,ue=-1/0,de=-1/0;U.forEach((we,Ae)=>{const Ge=e[we],ae=l[Ge];P.set(u.subarray(we*4,we*4+4),Ae*4),V[Ae]=c[we],H.setMatrixAt(Ae,t(Ge)),b.set(Ge,{mesh:H,slot:Ae}),ee=Math.min(ee,ae.x),ne=Math.min(ne,ae.z),ue=Math.max(ue,ae.x),de=Math.max(de,ae.z)}),I.setAttribute("aTree",new Kn(P,4)),I.setAttribute("aSpec",new Kn(V,1)),H.instanceMatrix.needsUpdate=!0;const pe=(ee+ue)/2,$=(ne+de)/2,j=Math.hypot(ue-ee,de-ne)/2+T+10;let ce=0;for(const we of U)ce+=t(e[we]).elements[13];H.boundingSphere=new Si(new z(pe,ce/U.length,$),j),H.castShadow=!1,H.receiveShadow=!0,H.matrixAutoUpdate=!1,H.name="tree far",o.add(H),w.push({mesh:H,x:pe,z:$,r:j,members:U})}const D=new Je(1e9,1e9),F=a+fh,B=U=>{D.set(U.x,U.z),x.clear();for(const I of m)I.slots.length=0;for(const I of w)if(!(Math.hypot(I.x-U.x,I.z-U.z)-I.r+T+10>F))for(const P of I.members){const V=e[P],H=l[V];if(Math.hypot(H.x-U.x,H.z-U.z)>F+10)continue;const ee=c[P],ne=m[ee];if(ne.slots.length>=ne.mesh.instanceMatrix.count)continue;const ue=ne.slots.length;ne.slots.push(P),ne.mesh.setMatrixAt(ue,t(V)),ne.tree.array.set(u.subarray(P*4,P*4+4),ue*4),x.set(V,{s:ee,slot:ue})}for(const I of m)I.mesh.count=I.slots.length,I.mesh.instanceMatrix.needsUpdate=!0,I.tree.needsUpdate=!0,I.mesh.boundingSphere.center.set(U.x,U.y,U.z),I.mesh.boundingSphere.radius=F+T+20};return{group:o,species:f,update:(U,I)=>{d.uEye.value.copy(U),d.uTime.value=I,Math.hypot(U.x-D.x,U.z-D.y)>fh&&B(U);for(const P of w){const V=Math.hypot(P.x-U.x,P.z-U.z);P.mesh.visible=V-P.r<hh&&V+P.r>r}},redraw:U=>{const I=t(U),P=b.get(U);P&&(P.mesh.setMatrixAt(P.slot,I),P.mesh.instanceMatrix.needsUpdate=!0);const V=x.get(U);if(V){const H=m[V.s];H.mesh.setMatrixAt(V.slot,I),H.mesh.instanceMatrix.needsUpdate=!0}},has:U=>h.has(U)}}function l1(i,e){const t=i.getAttribute("color"),n=i.getAttribute("aLeaf");let s=0,r=0,a=0,o=0;for(let l=0;l<t.count;l++){if(n.getW(l)>=0!==e)continue;const c=.4+n.getZ(l)*.6;s+=t.getX(l)*c,r+=t.getY(l)*c,a+=t.getZ(l)*c,o++}return o?new je(s/o,r/o,a/o):new je(5204794)}function bf(i,e){const t=new je(e),n=i.getAttribute("position").count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new Tt(s,3)),i.index?i.toNonIndexed():i}const Ke=(i,e,t,n,s,r,a)=>bf(new Ai(i,e,t).translate(n,s,r),a),wn=(i,e,t,n=0,s=0)=>bf(new la(i,i,e,6).translate(n,e/2,s),t),on=i=>Zv(i.map(e=>(e.deleteAttribute("uv"),e))),mr={lamp:()=>on([wn(.09,8,4869456),Ke(1.6,.12,.2,.7,7.9,0,4869456),Ke(.5,.14,.26,1.4,7.8,0,15262408)]),signal:()=>on([wn(.1,5.2,3948354),Ke(.34,1,.3,0,4.6,.2,1908513),Ke(.2,.2,.05,0,4.9,.36,13123630)]),stop:()=>on([wn(.04,2.4,9080208),Ke(.7,.7,.05,0,2.5,0,12068381)]),hydrant:()=>on([wn(.14,.7,15197404),Ke(.44,.14,.14,0,.45,0,15197404)]),bench:()=>on([Ke(1.7,.08,.5,0,.45,0,7032631),Ke(1.7,.5,.07,0,.72,-.24,7032631),Ke(.08,.45,.5,-.75,.22,0,3356218),Ke(.08,.45,.5,.75,.22,0,3356218)]),bin:()=>wn(.3,.95,3494463),bollard:()=>wn(.12,.9,5593180),post_box:()=>Ke(.55,1.15,.55,0,.58,0,3100550),bus_stop:()=>on([Ke(3.2,.1,1.5,0,2.5,0,5659488),Ke(3.2,2.2,.06,0,1.3,-.7,9675949),wn(.06,2.5,5659488,-1.5,.7),wn(.06,2.5,5659488,1.5,.7)]),bike_rack:()=>on([wn(.03,.85,9212052,-.35,0),wn(.03,.85,9212052,.35,0),Ke(.76,.06,.06,0,.85,0,9212052)]),table:()=>on([Ke(1.4,.06,.8,0,.73,0,10119999),Ke(.07,.7,.07,-.6,.35,-.32,5913892),Ke(.07,.7,.07,.6,.35,-.32,5913892),Ke(.07,.7,.07,-.6,.35,.32,5913892),Ke(.07,.7,.07,.6,.35,.32,5913892)]),chair:()=>on([Ke(.42,.05,.42,0,.44,0,11880506),Ke(.42,.42,.05,0,.64,-.19,11880506),Ke(.36,.42,.36,0,.21,0,3816512)]),sofa:()=>on([Ke(2,.42,.9,0,.21,0,6258060),Ke(2,.4,.22,0,.6,-.34,5665151),Ke(.2,.22,.9,-.9,.53,0,5665151),Ke(.2,.22,.9,.9,.53,0,5665151)]),shelf:()=>on([Ke(1.2,1.8,.06,0,.9,-.17,8088149),Ke(1.2,.05,.4,0,.3,0,13616040),Ke(1.2,.05,.4,0,.9,0,13616040),Ke(1.2,.05,.4,0,1.5,0,13616040),Ke(.9,.22,.3,0,.44,0,13134396),Ke(.8,.22,.3,.1,1.04,0,6986319)]),floor_lamp:()=>on([wn(.025,1.4,2894894),Ke(.26,.04,.26,0,.02,0,2894894),Ke(.26,.24,.26,0,1.48,0,15852472)]),crate:()=>Ke(.6,.5,.6,0,.25,0,12159566),counter:()=>on([Ke(1.8,.98,.58,0,.49,0,4864556),Ke(1.8,.06,.64,0,1.01,0,14275264),Ke(1.72,.7,.03,0,.5,.3,7033920),Ke(.3,.22,.26,.55,1.15,-.05,2763824)]),stool:()=>on([wn(.03,.7,2894894),Ke(.3,.03,.3,0,.015,0,2894894),Ke(.34,.06,.34,0,.71,0,9063218)]),rack:()=>on([wn(.02,1.5,10132898,-.66,0),wn(.02,1.5,10132898,.66,0),Ke(1.36,.03,.03,0,1.48,0,10132898),Ke(1.36,.03,.44,0,.02,0,10132898),Ke(.3,.9,.36,-.48,.98,0,3099243),Ke(.3,.8,.4,-.16,1.03,0,11880506),Ke(.3,.95,.34,.16,.955,0,14274488),Ke(.3,.75,.38,.48,1.055,0,4156242)]),desk:()=>on([Ke(1.5,.05,.76,0,.73,0,13220250),Ke(.05,.71,.7,-.7,.355,0,6119267),Ke(.05,.71,.7,.7,.355,0,6119267),Ke(1.36,.4,.03,0,.5,.33,6119267),Ke(.42,.28,.04,.3,.92,-.1,1842722)])};mr.bed=()=>on([Ke(1.6,.3,2,0,.15,0,5916214),Ke(1.56,.2,1.96,0,.4,0,15328472),Ke(1.56,.07,1.3,0,.53,.3,8229800),Ke(1,.1,.4,0,.55,-.72,16052712),Ke(1.6,.56,.06,0,.28,-.98,5916214)]);const ph=new Map;function c1(i){if(!mr[i])return null;let e=ph.get(i);return e||(e=mr[i](),ph.set(i,e)),e}const h1=new Set(["bed","table","chair","sofa","shelf","floor_lamp","crate","counter","stool","rack","desk"]),f1=320,u1=170,mh=240;function d1(i,e,t){const n=new Jt,s=new Nn({vertexColors:!0}),r=e.props,a={},o=[],l=new Map,c=new Map,h=(I,P)=>`${Math.floor(I.x/P)}_${Math.floor(I.z/P)}`;r.forEach((I,P)=>{if(I.k==="tree"){a.tree=(a.tree??0)+1,o.push(P);return}if(!mr[I.k])return;a[I.k]=(a[I.k]??0)+1;const[V,H]=h1.has(I.k)?[c,120]:[l,400],ee=h(I,H);let ne=V.get(ee);ne||(ne=[],V.set(ee,ne)),ne.push(P)});const f=new Rt,u=new Zt,d=new z,g=new z,m=new z(0,1,0),x=new z,p=new z,y=new Map,_=I=>t.get(I.k)?.half[1]??0,v=I=>{const P=r[I],V=y.get(I);return P.k==="tree"?s1(P,d):d.set(1,1,1),V?(u.set(V[3],V[4],V[5],V[6]),g.set(0,-_(P),0).applyQuaternion(u).add(x.set(V[0],V[1],V[2])),f.compose(g,u,d)):f.compose(g.set(P.x,i.at(P.x,P.z),P.z),u.setFromAxisAngle(m,P.a),d)},E=o1(e,o,v);n.add(E.group);const M=new Map,T=I=>{let P=M.get(I);return P||(P=mr[I](),M.set(I,P)),P},A=new Map,b=(I,P,V,H)=>{const ee=T(r[I].k),ne=ee.getAttribute("position"),ue=ee.getAttribute("normal"),de=v(I),pe=u.clone();for(let $=0;$<ne.count;$++){x.fromBufferAttribute(ne,$).applyMatrix4(de),p.fromBufferAttribute(ue,$).applyQuaternion(pe);const j=(H+$)*3;P[j]=x.x,P[j+1]=x.y,P[j+2]=x.z,V[j]=p.x,V[j+1]=p.y,V[j+2]=p.z}},w=(I,P)=>{let V=0;for(const j of I)V+=T(r[j].k).getAttribute("position").count;const H=new Float32Array(V*3),ee=new Float32Array(V*3),ne=new Float32Array(V*3),ue=new Nt,de=new Dt(ue,s);let pe=0;for(const j of I){const ce=T(r[j].k).getAttribute("color");b(j,H,ee,pe),ne.set(ce.array,pe*3),A.set(j,{mesh:de,start:pe}),pe+=ce.count}ue.setAttribute("position",new Tt(H,3).setUsage(As)),ue.setAttribute("normal",new Tt(ee,3).setUsage(As)),ue.setAttribute("color",new Tt(ne,3)),ue.computeBoundingSphere(),ue.boundingSphere.radius+=40,de.matrixAutoUpdate=!1,n.add(de);const $=ue.boundingSphere;return{mesh:de,x:$.center.x,z:$.center.z,r:$.radius,far:P}},D=[...l.values()].map(I=>w(I,f1)),F=[...c.values()].map(I=>{let P=0,V=0;for(const H of I)P+=r[H].x,V+=r[H].z;return{list:I,x:P/I.length,z:V/I.length,baked:null}}),B=I=>{E.update(I,performance.now()/1e3);for(const P of D)P.mesh.visible=Math.max(0,Math.hypot(P.x-I.x,P.z-I.z)-P.r+40)<P.far;for(const P of F){const V=Math.hypot(P.x-I.x,P.z-I.z);if(!P.baked&&V<u1)P.baked=w(P.list,mh);else if(P.baked&&V>mh){n.remove(P.baked.mesh),P.baked.mesh.geometry.dispose();for(const H of P.list)A.delete(H);P.baked=null}}},k=I=>{if(E.has(I)){E.redraw(I);return}const P=A.get(I);if(!P)return;const V=P.mesh.geometry.getAttribute("position"),H=P.mesh.geometry.getAttribute("normal"),ee=T(r[I].k).getAttribute("position").count;b(I,V.array,H.array,P.start),V.addUpdateRange(P.start*3,ee*3),H.addUpdateRange(P.start*3,ee*3),V.needsUpdate=!0,H.needsUpdate=!0};return{group:n,counts:a,update:B,apply:I=>{for(let P=0;P+8<=I.length;P+=8){const V=I[P];if(!r[V])continue;let H=y.get(V);H||(H=new Float32Array(7),y.set(V,H)),H.set(I.subarray(P+1,P+8)),k(V)}},reset:()=>{const I=[...y.keys()];y.clear();for(const P of I)k(P)}}}const ao=420,gh=240,oo=220,p1={timber:null,stud:14209732,brick:9194042,block:11117980,glazing:10470607,stone:12170150,drywall:14868180,door:14276300},m1={timber:13287327,stud:14473420,brick:11565666,block:12170668,glazing:13951718,stone:12894132,drywall:15131354,door:14210248};class g1{constructor(e,t,n,s,r=()=>null){this.city=e,this.fronts=t,this.insides=n,this.kinds=s,this.fallenOf=r;const a=new Ai(2,2,2),o=a.getAttribute("position").count,l=new Float32Array(o*3),c=a.getAttribute("normal");for(let u=0;u<o;u++){const d=c.getY(u)>.5?.62:c.getY(u)<-.5?.45:1;l[u*3]=d,l[u*3+1]=d,l[u*3+2]=d}a.setAttribute("color",new Tt(l,3));const h=(u,d)=>{const g=new Xi(a,new Nn({vertexColors:!0}),u);for(let m=0;m<u;m++)g.setMatrixAt(m,this.m.makeScale(0,0,0)),g.setColorAt(m,this.c.setHex(16777215));return g.count=u,g.frustumCulled=!1,g.castShadow=!0,g.receiveShadow=!0,g.name=d,this.group.add(g),g};this.pieces=h(ao,"wall pieces"),this.parts=h(gh,"fallen buildings"),this.parts.visible=!1;const f=new rf;f.setAttribute("position",new Tt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),f.setIndex([0,1,2,0,2,3]),this.dustAt=new Kn(new Float32Array(oo*4),4),this.dustLook=new Kn(new Float32Array(oo*4),4),f.setAttribute("at",this.dustAt),f.setAttribute("look",this.dustLook),f.instanceCount=0,this.dust=new Dt(f,new Rn({transparent:!0,depthWrite:!1,vertexShader:`
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
        }`})),this.dust.frustumCulled=!1,this.dust.name="dust",this.dust.renderOrder=5,this.group.add(this.dust)}group=new Jt;pieces;parts;pieceAt=new Map;partAt=new Map;partMesh=new Map;ONE=new z(1,1,1);pieceSlot=new Array(ao).fill(null);partSlot=new Array(gh).fill(null);clock=0;holes=new Map;dirty=new Set;puffs=[];dust;dustAt;dustLook;m=new Rt;c=new je;seen={panels:0,fell:0};gaveWay(e,t){this.seen.panels++;const n=this.holes.get(e.building)??[];n.push({x0:e.x0,z0:e.z0,x1:e.x1,z1:e.z1,y:e.holeTop}),this.holes.set(e.building,n),this.dirty.add(e.building);const s=this.kinds[e.kind]??"timber",r=m1[s]??13617336,a=Hi().at((e.x0+e.x1)/2,(e.z0+e.z1)/2),o=s==="glazing"?3:7;for(let l=0;l<o;l++){const c=Math.random();this.puff(e.x0+(e.x1-e.x0)*c,a+.3+Math.random()*2.4,e.z0+(e.z1-e.z0)*c,(Math.random()-.5)*(1+t*.12),.4+Math.random(),(Math.random()-.5)*(1+t*.12),.7+Math.random()*.9,1.4+Math.random()*1.4,r,.5)}}fell(e,t){this.seen.fell++,this.dirty.delete(e),this.holes.delete(e),this.city.raze(e),this.fronts.raze(e),this.insides.raze(e);const n=this.city.colors(e).wall,s=this.c.setRGB(n[0],n[1],n[2]).lerp(new je(13617336),.6).getHex();for(let r=0;r<60;r++){const a=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*t.r,l=1.5+Math.random()*3.5;this.puff(t.x+Math.cos(a)*o,t.y+Math.random()*Math.min(5,t.high),t.z+Math.sin(a)*o,Math.cos(a)*l,.6+Math.random()*1.6,Math.sin(a)*l,2+Math.random()*2.5,2.6+Math.random()*2.4,s,.55)}}puff(e,t,n,s,r,a,o,l,c,h){this.puffs.length>=oo&&this.puffs.shift(),this.puffs.push({p:new z(e,t,n),v:new z(s,r,a),age:0,life:l,size:o,grow:.9+Math.random()*.8,tint:new je(c),alpha:h})}partOf(e,t){let n=this.partMesh.get(e);if(n!==void 0)return n;const s=this.fallenOf(t);return n=s?this.city.part(t,s,e):null,n&&this.group.add(n.mesh),this.partMesh.set(e,n),n}apply(e,t){for(let n=0;n+ur<=e.length;n+=ur){const s=e[n+kt.ID],r=e[n+kt.WHAT]===1,a=e[n+kt.STATE]===1;if(r){const d=new z(e[n+kt.POS],e[n+kt.POS+1],e[n+kt.POS+2]),g=new Zt(e[n+kt.ROT],e[n+kt.ROT+1],e[n+kt.ROT+2],e[n+kt.ROT+3]),m=this.partOf(s,e[n+kt.WHICH]);m&&(m.mesh.matrix.compose(d,g,this.ONE).multiply(m.unborn),m.mesh.matrixWorldNeedsUpdate=!0);continue}const o=r?this.parts:this.pieces,l=r?this.partAt:this.pieceAt,c=r?this.partSlot:this.pieceSlot;let h=l.get(s);if(h===void 0){if(h=c.findIndex(g=>!g),h<0){let g=1/0;c.forEach((m,x)=>{m&&!m.v&&m.born<g&&(g=m.born,h=x)}),h<0&&(h=0),l.delete(c[h].id)}const d=e[n+kt.WHICH];if(r){const g=this.city.colors(d).wall;this.c.setRGB(g[0],g[1],g[2])}else{const g=t(d),m=this.kinds[g?.kind??0]??"timber",x=p1[m];if(x==null){const p=this.city.colors(g?.building??0).wall;this.c.setRGB(p[0],p[1],p[2])}else this.c.setHex(x)}o.setColorAt(h,this.c),o.instanceColor.needsUpdate=!0,c[h]={id:s,at:new z,q:new Zt,half:new z,v:null,born:this.clock},l.set(s,h)}const f=c[h];f.at.set(e[n+kt.POS],e[n+kt.POS+1],e[n+kt.POS+2]),f.q.set(e[n+kt.ROT],e[n+kt.ROT+1],e[n+kt.ROT+2],e[n+kt.ROT+3]),f.half.set(e[n+kt.HALF],e[n+kt.HALF+1],e[n+kt.HALF+2]);const u=new z(e[n+kt.VEL],e[n+kt.VEL+1],e[n+kt.VEL+2]);f.v=a&&!r&&u.lengthSq()>.6?u:null,o.setMatrixAt(h,this.m.compose(f.at,f.q,f.half)),o.instanceMatrix.needsUpdate=!0}}update(e){this.clock+=e;for(const r of this.dirty){const a=this.holes.get(r)??[];this.city.breach(r,a),this.insides.breach(r,a)}this.dirty.clear();let t=!1;for(let r=0;r<ao;r++){const a=this.pieceSlot[r];if(!a?.v)continue;a.v.y-=9.81*e,a.at.addScaledVector(a.v,e);const o=Hi().at(a.at.x,a.at.z)+Math.min(a.half.x,a.half.y,a.half.z);a.at.y<=o&&(a.at.y=o,a.q.setFromAxisAngle(new z(1,0,0),Math.PI/2),a.v=null),this.pieces.setMatrixAt(r,this.m.compose(a.at,a.q,a.half)),t=!0}if(t&&(this.pieces.instanceMatrix.needsUpdate=!0),!this.puffs.length&&!this.dust.geometry.instanceCount)return;this.puffs=this.puffs.filter(r=>(r.age+=e)<r.life);const n=this.dustAt.array,s=this.dustLook.array;this.puffs.forEach((r,a)=>{r.v.multiplyScalar(Math.max(0,1-1.6*e)),r.v.y+=.25*e,r.p.addScaledVector(r.v,e);const o=r.age/r.life;n.set([r.p.x,r.p.y,r.p.z,r.size*(1+r.grow*o*2)],a*4),s.set([r.tint.r,r.tint.g,r.tint.b,r.alpha*Math.min(1,o*8)*(1-o)*(1-o)],a*4)}),this.dust.geometry.instanceCount=this.puffs.length,this.dustAt.needsUpdate=!0,this.dustLook.needsUpdate=!0}reset(){this.holes.clear(),this.dirty.clear(),this.city.reset();for(const[e,t,n]of[[this.pieces,this.pieceSlot,this.pieceAt],[this.parts,this.partSlot,this.partAt]]){for(let s=0;s<t.length;s++)t[s]&&e.setMatrixAt(s,this.m.makeScale(0,0,0)),t[s]=null;n.clear(),e.instanceMatrix.needsUpdate=!0}for(const e of this.partMesh.values())e&&(this.group.remove(e.mesh),e.mesh.geometry.dispose());this.partMesh.clear(),this.puffs.length=0,this.dust.geometry.instanceCount=0,this.seen.panels=0,this.seen.fell=0}counts(){return{pieces:this.pieceAt.size,parts:[...this.partMesh.values()].filter(e=>e).length,puffs:this.puffs.length,...this.city.broken()}}}const xh={furniture:{wall:14273976,floor:9071178},cafe:{wall:13219738,floor:6115656},grocer:{wall:14672854,floor:10132628},restaurant:{wall:12159082,floor:4864560},bar:{wall:4865850,floor:3024418},shop:{wall:15131354,floor:11049606},bank:{wall:14078920,floor:8223346},hotel:{wall:13351066,floor:7028536},salon:{wall:15259862,floor:9407882},clinic:{wall:15002606,floor:10465460},gallery:{wall:15790058,floor:8026744},studio:{wall:14341836,floor:9072466},office:{wall:13619924,floor:6251624},room:{wall:14472904,floor:8219477},hall:{wall:14209990,floor:7301728},garage:{wall:12170926,floor:7105642},living:{wall:14866111,floor:9136711},bedroom:{wall:14015458,floor:10126440},kitchen:{wall:15262930,floor:12170146},store:{wall:13223354,floor:7828330},lobby:{wall:14275782,floor:9340792},core:{wall:9408396,floor:5000266},floor:{wall:12565682,floor:8026226},shed:{wall:11116428,floor:6971992},workroom:{wall:14672092,floor:7172984},nave:{wall:15130572,floor:6965814},concourse:{wall:14079180,floor:9078912},open:{wall:12105390,floor:7828847}},x1=3.5,v1=110,_1=160,lo=2,Zs=900;function vh(i,e,t){const n=r=>(t[0]-e[0])*(r[1]-e[1])-(t[1]-e[1])*(r[0]-e[0]),s=[];for(let r=0;r<i.length;r++){const a=i[r],o=i[(r+1)%i.length],l=n(a),c=n(o);if(l>=0&&s.push(a),l>=0!=c>=0){const h=l/(l-c);s.push([a[0]+(o[0]-a[0])*h,a[1]+(o[1]-a[1])*h])}}return s}class y1{constructor(e,t,n,s,r,a,o){this.page=e,this.ground=t,this.ask=n,this.originOf=s,this.kindNames=r,this.kinds=a,this.rooms=o;for(const l of e.fronts??[])this.show(l.b);this.group.name="insides"}group=new Jt;built=new Map;holes=new Map;razed=new Set;shown=new Set;fronted=new Map;mid=new Map;pools=new Map;strays=new Map;origin=new Map;material=new Us({vertexColors:!0,side:pn});m=new Rt;q=new Zt;t=new z;s=new z(1,1,1);up=new z(0,1,0);middle(e){let t=this.mid.get(e);if(!t){const n=this.page.buildings[e].r;let s=0,r=0;for(const[a,o]of n)s+=a,r+=o;t=[s/n.length,r/n.length],this.mid.set(e,t)}return t}show(e){if(!this.page.buildings[e]||this.shown.has(e))return;this.shown.add(e);const[t,n]=this.middle(e),s=`${Math.floor(t/96)}_${Math.floor(n/96)}`;let r=this.fronted.get(s);r||this.fronted.set(s,r=[]),r.push(e)}pool(e){let t=this.pools.get(e);if(t)return t;const n=c1(e);if(!n)return null;const s=new Xi(n,new Nn({vertexColors:!0}),Zs);for(let r=0;r<Zs;r++)s.setMatrixAt(r,this.m.makeScale(0,0,0));return s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!0,s.name=`inside ${e}`,this.group.add(s),t={mesh:s,free:Array.from({length:Zs},(r,a)=>Zs-1-a),halfUp:this.kinds.get(e)?.half[1]??0},this.pools.set(e,t),t}place(e,t,n){const s=t.plan.items[n],r=this.kindNames[s.kind]??"",a=this.pool(r);if(!a)return;const o=this.strays.get(`${e}:${n}`);let l=t.slots.get(n);if(!l){const c=a.free.pop();if(c===void 0)return;l={kind:r,slot:c},t.slots.set(n,l)}o?(this.q.set(o[3],o[4],o[5],o[6]),this.t.set(0,-a.halfUp,0).applyQuaternion(this.q),this.t.x+=o[0],this.t.y+=o[1],this.t.z+=o[2]):(this.q.setFromAxisAngle(this.up,s.yaw),this.t.set(s.x,s.y,s.z)),a.mesh.setMatrixAt(l.slot,this.m.compose(this.t,this.q,this.s)),a.mesh.instanceMatrix.needsUpdate=!0}drop(e){const t=this.built.get(e);if(t){this.group.remove(t.mesh),t.mesh.geometry.dispose();for(const{kind:n,slot:s}of t.slots.values()){const r=this.pools.get(n);r.mesh.setMatrixAt(s,this.m.makeScale(0,0,0)),r.mesh.instanceMatrix.needsUpdate=!0,r.free.push(s)}this.built.delete(e)}}build(e){this.drop(e);const t=this.ask(e),n=this.page.buildings[e];if(!t||!n||this.razed.has(e))return!1;const s=this.ground,r=this.holes.get(e)??[],a=(M,T)=>Math.min(s.at(M,T)+x1,n.y1-.1),o=[],l=[],c=[],h=new je,f=(M,T,A,b,w)=>(h.setHex(b),o.push(M,T,A),l.push(h.r*w,h.g*w,h.b*w),o.length/3-1),u=n.r.slice(0,-1),d=M=>xh[this.rooms[M]??"room"]??xh.room;for(const M of t.rooms){let T=u;const A=(M.quad[0][0]+M.quad[2][0])/2,b=(M.quad[0][1]+M.quad[2][1])/2,w=M.quad,D=(w[1][0]-w[0][0])*(b-w[0][1])-(w[1][1]-w[0][1])*(A-w[0][0])>=0;for(let N=0;N<4&&T.length>=3;N++)T=D?vh(T,w[N],w[(N+1)%4]):vh(T,w[(N+1)%4],w[N]);if(T.length<3)continue;const F=T.map(([N,U])=>new Je(N,U)),B=d(M.kind).floor,k=(N,U,I,P)=>{const V=Math.hypot(U[0]-N[0],U[1]-N[1]),H=Math.hypot(I[0]-U[0],I[1]-U[1]),ee=Math.hypot(N[0]-I[0],N[1]-I[1]),ne=Math.max(V,H,ee);if(ne>4&&P<7){if(ne===V){const de=[(N[0]+U[0])/2,(N[1]+U[1])/2];k(N,de,I,P+1),k(de,U,I,P+1)}else if(ne===H){const de=[(U[0]+I[0])/2,(U[1]+I[1])/2];k(N,U,de,P+1),k(N,de,I,P+1)}else{const de=[(I[0]+N[0])/2,(I[1]+N[1])/2];k(N,U,de,P+1),k(de,U,I,P+1)}return}const ue=[N,U,I].map(([de,pe])=>f(de,s.at(de,pe)+.09,pe,B,.92));c.push(ue[0],ue[1],ue[2])};for(const N of Ls.triangulateShape(F,[]))k(T[N[0]],T[N[1]],T[N[2]],0)}const g=(M,T,A,b,w,D)=>{const F=Math.hypot(A-M,b-T);if(F<.05)return;const B=s.at(M,T),k=s.at(A,b);for(const[N,U,I]of yf(F,-1e6,1e6,Mf(M,T,A,b,r))){const P=(H,ee)=>{const ne=H/F,ue=B+(k-B)*ne,de=M+(A-M)*ne,pe=T+(b-T)*ne;return f(de,ee?ue+.05:a(de,pe),pe,w,D*(ee?1:.72))};if(I>-1e5)continue;const V=[P(N,!0),P(U,!0),P(U,!1),P(N,!1)];c.push(V[0],V[1],V[2],V[0],V[2],V[3])}},m=d(t.rooms[0]?.kind??0).wall;for(const M of t.parts)g(M.ax,M.az,M.bx,M.bz,14605008,.95);let x=0,p=0;for(const[M,T]of u)x+=M,p+=T;x/=u.length,p/=u.length;const y=(this.page.fronts??[]).filter(M=>M.b===e);for(let M=0;M<u.length;M++){const[T,A]=u[M],[b,w]=u[(M+1)%u.length],D=Math.hypot(b-T,w-A);if(D<.05)continue;let F=-(w-A)/D,B=(b-T)/D;F*(x-T)+B*(p-A)<0&&(F=-F,B=-B);const k=y.find(U=>U.e===M),N=.06;if(!k){g(T+F*N,A+B*N,b+F*N,w+B*N,m,.86);continue}g(T+F*N,A+B*N,k.p0[0]+F*N,k.p0[1]+B*N,m,.86),g(k.p1[0]+F*N,k.p1[1]+B*N,b+F*N,w+B*N,m,.86)}{const M=u.map(([A,b])=>new Je(A,b)),T=o.length/3;for(const[A,b]of u)f(A,a(A,b),b,m,.6);for(const A of Ls.triangulateShape(M,[]))c.push(T+A[0],T+A[1],T+A[2])}const _=new Nt;_.setAttribute("position",new Tt(new Float32Array(o),3)),_.setAttribute("color",new Tt(new Float32Array(l),3)),_.setIndex(c),_.computeBoundingSphere();const v=new Dt(_,this.material);v.matrixAutoUpdate=!1,v.name="inside",this.group.add(v);const E={mesh:v,plan:t,slots:new Map,holes:r};return this.built.set(e,E),t.items.forEach((M,T)=>{(M.state!==2||this.strays.has(`${e}:${T}`))&&this.place(e,E,T)}),!0}update(e){for(const[r]of this.built){const[a,o]=this.middle(r);Math.hypot(a-e.x,o-e.z)>_1&&this.drop(r)}let t=0;const n=Math.floor(e.x/96),s=Math.floor(e.z/96);for(let r=-2;r<=2&&t<lo;r++)for(let a=-2;a<=2&&t<lo;a++)for(const o of this.fronted.get(`${n+r}_${s+a}`)??[]){if(this.built.has(o)||this.razed.has(o))continue;const[l,c]=this.middle(o);if(!(Math.hypot(l-e.x,c-e.z)>v1)&&this.build(o)&&++t>=lo)break}}breach(e,t){this.razed.has(e)||(this.holes.set(e,t),this.show(e),this.build(e))}raze(e){this.razed.add(e);const t=this.built.get(e);if(!t)return;const n=new Map;for(const[s,r]of t.slots)this.strays.has(`${e}:${s}`)&&n.set(s,r);for(const s of n.keys())t.slots.delete(s);this.drop(e);for(const[s,r]of n)this.orphans.set(`${e}:${s}`,r)}orphans=new Map;apply(e,t){for(let n=0;n+8<=e.length;n+=8){const s=e[n];if(s<t)continue;let r=this.origin.get(s);if(r===void 0){const f=this.originOf(s);r=f?{b:f.b,i:f.i,kind:this.kindNames[f.kind]??""}:null,this.origin.set(s,r)}if(!r)continue;const a=`${r.b}:${r.i}`;let o=this.strays.get(a);o||(o=new Float32Array(7),this.strays.set(a,o)),o.set(e.subarray(n+1,n+8));const l=this.built.get(r.b);if(l){this.place(r.b,l,r.i);continue}const c=this.orphans.get(a),h=this.pool(r.kind);c&&h&&(this.q.set(o[3],o[4],o[5],o[6]),this.t.set(0,-h.halfUp,0).applyQuaternion(this.q),this.t.x+=o[0],this.t.y+=o[1],this.t.z+=o[2],h.mesh.setMatrixAt(c.slot,this.m.compose(this.t,this.q,this.s)),h.mesh.instanceMatrix.needsUpdate=!0)}}reset(){for(const e of[...this.built.keys()])this.drop(e);for(const[,e]of this.orphans){const t=this.pools.get(e.kind);t.mesh.setMatrixAt(e.slot,this.m.makeScale(0,0,0)),t.mesh.instanceMatrix.needsUpdate=!0,t.free.push(e.slot)}this.orphans.clear(),this.holes.clear(),this.razed.clear(),this.strays.clear(),this.origin.clear()}drawn(e){if(!this.built.has(e)&&!this.build(e))return null;const t=this.built.get(e),n=[...t.slots.entries()].map(([s,r])=>(this.pools.get(r.kind).mesh.getMatrixAt(r.slot,this.m),this.t.setFromMatrixPosition(this.m),{kind:r.kind,x:this.t.x,z:this.t.z,stray:this.strays.has(`${e}:${s}`)}));return{rooms:t.plan.rooms.map(s=>this.rooms[s.kind]??"?"),parts:t.plan.parts.map(s=>[s.ax,s.az,s.bx,s.bz]),items:n,triangles:t.mesh.geometry.index.count/3}}counts(){let e=0;for(const t of this.pools.values())e+=Zs-t.free.length;return{built:this.built.size,things:e}}}const _h={compact:{wheel:.3,axles:[.78,3.28],tyre:[.2,.2],nose:.66,belt:.95,tail:.98,screen:[1.2,1.88],back:[3.3,3.95],floor:.24,round:1,tumble:.2,head:[.66,.78],rear:[.82,.98],headX:[.52,.9],rearX:[.6,.93]},saloon:{wheel:.32,axles:[.95,3.78],tyre:[.22,.22],nose:.66,belt:.98,tail:1.02,screen:[1.5,2.25],back:[3.4,4.08],floor:.24,round:1,tumble:.21,head:[.66,.77],rear:[.84,.97],headX:[.5,.9],rearX:[.55,.93]},hatch:{wheel:.31,axles:[.9,3.55],tyre:[.21,.21],nose:.66,belt:.98,tail:1,screen:[1.32,2.05],back:[4.05,4.33],floor:.24,round:1,tumble:.17,head:[.66,.77],rear:[.9,1.12],headX:[.5,.9],rearX:[.7,.95]},suv:{wheel:.37,axles:[.98,3.8],tyre:[.25,.25],nose:.9,belt:1.13,tail:1.15,screen:[1.38,2.08],back:[4.3,4.66],floor:.42,round:.85,tumble:.16,head:[.88,.99],rear:[1.02,1.2],headX:[.48,.9],rearX:[.68,.95]},pickup:{wheel:.4,axles:[1.05,4.5],tyre:[.27,.27],nose:1.02,belt:1.24,tail:1.24,screen:[1.62,2.28],back:[3.1,3.18],bed:3.32,floor:.48,round:.55,tumble:.12,head:[.98,1.12],rear:[.92,1.22],headX:[.5,.92],rearX:[.86,.98]},van:{wheel:.36,axles:[.98,4.25],tyre:[.24,.26],nose:.98,belt:1.18,screen:[.75,1.5],back:[5.16,5.22],side:[.9,2.25],floor:.4,round:.45,tumble:.05,head:[.92,1.06],rear:[.62,1.4],headX:[.5,.9],rearX:[.88,.98]},truck:{wheel:.48,axles:[1.15,5.6],tyre:[.3,.52],nose:1.25,belt:1.5,screen:[.32,.72],back:[2.05,2.1],side:[.55,1.75],box:2.25,cab:.92,floor:.62,round:.25,tumble:.04,head:[.82,.98],rear:[.62,.82],headX:[.55,.88],rearX:[.8,.97],livery:"truck"},taxi:{wheel:.32,axles:[.95,3.8],tyre:[.22,.22],nose:.68,belt:.99,tail:1.03,screen:[1.52,2.27],back:[3.42,4.1],floor:.24,round:1,tumble:.21,head:[.68,.79],rear:[.85,.98],headX:[.5,.9],rearX:[.55,.93],livery:"taxi"},bus:{wheel:.5,axles:[2.65,8.95],tyre:[.3,.52],nose:1.05,belt:1.12,screen:[.02,.22],back:[11.82,11.97],side:[.35,11.55],pillars:1.45,floor:.34,round:.3,tumble:.03,head:[.42,.62],rear:[.55,.95],headX:[.62,.9],rearX:[.8,.96],livery:"bus"}},M1=i=>_h[i]??_h.saloon,gi=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},w1={taxi:1,bus:2,truck:3},xi=22;function yh(i,e,t,n){const[s,r,a]=i.half,o=a*2,l=r*2,c=-(r+i.clearance),[h,f]=e.screen,[u,d]=e.back,g=l-.02,m=[0,o,h,f,u,d,...e.axles.flatMap(H=>n?[H-e.wheel-.06,H,H+e.wheel+.06]:[H])];e.box!==void 0&&m.push(e.box-.05,e.box),e.bed!==void 0&&m.push(e.bed-.04,e.bed);const x=Math.max(6,Math.round(o/t));for(let H=1;H<x;H++)m.push(o*H/x);const p=[...new Set(m.filter(H=>H>=0&&H<=o).map(H=>Math.round(H*1e3)/1e3))].sort((H,ee)=>H-ee).filter((H,ee,ne)=>ee===0||H-ne[ee-1]>.025),y=[],_=[],v=[],E=[],M=H=>Math.min(Math.abs(H-e.axles[0]),Math.abs(H-e.axles[1])),T=H=>{const ee=(H-a)/a,ne=Math.abs(ee),ue=e.box!==void 0&&H>=e.box,de=e.box!==void 0&&!ue?e.cab??1:1,pe=s*de*(1-.11*e.round*gi(.78,1,ne))*(1-.03*gi(.95,1,ne));let $=H<h?e.nose+(e.belt-e.nose)*Math.pow(gi(0,h,H),.7):H>d?(e.tail??e.belt)-.06*e.round*gi(.9,1,ee):e.belt,j=H<f?gi(h,f,H):H<u?1:1-gi(u,d,H),ce=$+((e.box!==void 0?Math.min(g,e.belt+1.15):g)-$)*j,we=j>.02?1:0;ue&&($=g-.05,ce=g,j=0,we=0);const Ae=.035*e.round*(1-gi(.85,1,ne))*(ue?0:1),Ge=pe*(.97-(ue?0:e.tumble)*Math.min(1,j*1.6)),ae=e.wheel+.07,L=M(H),Te=e.floor+.08*e.round*gi(.86,1,ne),me=L<ae?Math.max(Te,e.wheel+Math.sqrt(ae*ae-L*L)):Te,fe=Math.min(me+.08,$-.1),xe=ue?fe+.12:Math.max(fe+.04,$-.28),Le=et=>et+c,ge=[[pe*.84,me,0,0,1],[pe*.975,fe,0,0,1],[pe*.978,fe+.012,0,0,0],[pe,xe,0,0,0],[pe*.995,$-.07,0,0,0],[pe*.97,$,0,0,0],[Ge+(pe*.97-Ge)*.42,$+(ce-$)*.5,.5,0,0],[Ge,ce-(ce-$)*.06,.94,1,0],[Ge*.72,ce,1,.5,0],[Ge*.36,ce+Ae*.5,1,.15,0]],ze=[],st=[];ze.push([0,Le(me)]),st.push([0,0,we,1]);for(const[et,C,S,X,re]of ge)ze.push([et,Le(C)]),st.push([S,X,we,re]);ze.push([0,Le(ce+Ae*.6)]),st.push([1,0,we,0]);for(let et=ge.length-1;et>=0;et--){const[C,S,X,re,le]=ge[et];ze.push([-C,Le(S)]),st.push([X,re,we,le])}return{p:ze,a:st}},A=p.map(T);if(A[0].p.length!==xi)throw new Error("the traffic body ring has changed its count");A.forEach((H,ee)=>{const ne=p[ee],ue=ne-a;H.p.forEach(([de,pe],$)=>{y.push(de,pe,ue),_.push(...H.a[$]),v.push((ne-h)/(f-h),(ne-u)/(d-u),Math.hypot(M(ne),pe-c-e.wheel)-e.wheel,0)})});const b=new z,w=new z,D=new z,F=new z,B=new z,k=new z,N=(H,ee,ne,ue,de,pe)=>{w.fromArray(y,H*3),D.fromArray(y,ee*3),F.fromArray(y,ne*3),B.subVectors(D,w).cross(k.subVectors(F,w)),!(B.lengthSq()<1e-12)&&(b.copy(w).add(D).add(F).multiplyScalar(1/3),B.dot(b.sub(k.set(ue,de,pe)))>=0?E.push(H,ee,ne):E.push(H,ne,ee))},U=(H,ee)=>H*xi+(ee%xi+xi)%xi,I=c+l*.4;for(let H=0;H+1<A.length;H++){const ee=(p[H]+p[H+1])/2-a;for(let ne=0;ne<xi;ne++){const ue=U(H,ne),de=U(H,ne+1),pe=U(H+1,ne+1),$=U(H+1,ne);N(ue,de,pe,0,I,ee),N(ue,pe,$,0,I,ee)}}for(const H of[0,A.length-1]){const ee=p[H]-a,ne=H===0?ee+1:ee-1,ue=A[H].p.map(j=>j[1]),de=(Math.min(...ue)+Math.max(...ue))/2,pe=y.length/3;y.push(0,de,ee),_.push(0,0,0,0),v.push(9,9,9,0);const $=y.length/3;A[H].p.forEach(([j,ce])=>{y.push(j,ce,ee),_.push(0,0,0,0),v.push(9,9,9,0)});for(let j=0;j<xi;j++)N(pe,$+j,$+(j+1)%xi,0,de,ne)}const P=(H,ee,ne,ue,de,pe,$,j=1)=>{const ce=y.length/3;for(const Ae of[-1,1])for(const Ge of[-1,1])for(const ae of[-1,1])y.push(H+Ae*ue*(Ge>0?j:1),ee+Ge*de,ne+ae*pe*(Ge>0?j:1)),_.push(0,0,0,$),v.push(9,9,9,0);const we=(Ae,Ge,ae,L)=>{N(ce+Ae,ce+Ge,ce+ae,H,ee,ne),N(ce+Ae,ce+ae,ce+L,H,ee,ne)};we(0,1,3,2),we(4,5,7,6),we(0,1,5,4),we(2,3,7,6),we(0,2,6,4),we(1,3,7,5)};if(n){const H=e.box!==void 0||e.livery==="bus";for(const ee of[-1,1]){const ne=h+(H?.15:.42),ue=s*(e.cab??1);H?P(ee*(ue+.16),c+e.belt+.55,ne-a,.04,.24,.1,1):P(ee*(ue+.06),c+e.belt+.04,ne-a,.085,.05,.07,1)}}e.livery==="taxi"&&P(0,c+l+.13,(f+u)/2-a-.1,.36,.11,.13,2,.85);const V=new Nt;return V.setAttribute("position",new _t(y,3)),V.setAttribute("carA",new _t(_,4)),V.setAttribute("carB",new _t(v,4)),V.setIndex(E),V.computeVertexNormals(),V.computeBoundingSphere(),V}function b1(i,e){const[t,n,s]=i.half,r=-(n+i.clearance),a=h=>h-s,o=h=>h+r,l=e.side??[e.screen[0]+.4,Math.min(e.back[1]-.42,e.bed??99)],c=e.pillars?-99:(e.screen[1]+e.back[0])/2+.02;return{uGlass:{value:new yt(a(e.screen[0]),a(e.screen[1]),a(e.back[0]),a(e.back[1]))},uSide:{value:new yt(a(l[0]),a(l[1]),c===-99?-99:a(c),e.pillars??0)},uLampY:{value:new yt(o(e.head[0]),o(e.head[1]),o(e.rear[0]),o(e.rear[1]))},uLampX:{value:new yt(e.headX[0]*t,e.headX[1]*t,e.rearX[0]*t,e.rearX[1]*t)},uShape:{value:new yt(s,t,e.livery?w1[e.livery]:0,e.box!==void 0?a(e.box):e.bed!==void 0?a(e.bed):99)},uLevels:{value:new yt(o(e.belt),o(e.floor),o(n*2-.02),e.bed!==void 0?1:0)}}}const S1=`
  attribute vec4 carA; attribute vec4 carB; attribute vec4 aState;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN; varying vec4 vState;
  uniform vec4 uShape;
  ${Ki}`,E1=`
  vCarA = carA; vCarB = carB; vLocal = position; vLocalN = normal; vState = aState;
  if (aState.w > 0.5) {
    float ends = smoothstep(uShape.x * 0.45, uShape.x, abs(position.z));
    float lump = p2pNoise(position.xz * 3.1 + position.y * 2.3 + aState.w * 7.0) - 0.5;
    transformed -= normalize(vec3(position.x, 0.3 * position.y, position.z) + 1e-4) * (0.06 + 0.22 * ends) * (0.6 + lump);
  }`,A1=`
  uniform vec4 uGlass; uniform vec4 uSide; uniform vec4 uLampY; uniform vec4 uLampX; uniform vec4 uShape; uniform vec4 uLevels;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN; varying vec4 vState;`,T1=`
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
  }`,R1=`
  roughnessFactor = mix(mix(roughnessFactor, 0.6, vTrim), 0.05, vGlass);
  metalnessFactor = mix(mix(metalnessFactor, 0.0, vTrim), 0.85, vGlass);
  if (vState.w > 0.5) { roughnessFactor = max(roughnessFactor, 0.7); metalnessFactor *= 0.4; }`;function Mh(i,e,t){const n=t?new ef({color:16777215,metalness:.3,roughness:.38,clearcoat:1,clearcoatRoughness:.08,envMap:e,envMapIntensity:.8}):new Fs({color:16777215,metalness:.3,roughness:.4,envMap:e,envMapIntensity:.7});return n.onBeforeCompile=s=>{Object.assign(s.uniforms,i),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
${S1}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${E1}`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${A1}
${Ki}`).replace("#include <color_fragment>",`#include <color_fragment>
${T1}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${R1}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vLamp;`)},n.customProgramCacheKey=()=>t?"p2p-traffic-body-near":"p2p-traffic-body-far",n}const C1=`
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
  }`;function wh(i,e=!1){const t=(e?[[0,.3],[.9,.5],[1,.3],[1,-.3],[.9,-.5],[0,-.3]]:[[0,.1],[.64,.44],[.72,.5],[.93,.5],[1,.36],[1,-.36],[.93,-.5],[.72,-.5],[.64,-.44],[0,-.1]]).map(([h,f])=>new Je(h,f)),n=new ca(t,i).rotateZ(-Math.PI/2),s=n.getAttribute("position"),r=n.index,a=new z,o=new z,l=new z,c=new z;for(let h=0;h<r.count;h+=3)if(a.fromBufferAttribute(s,r.getX(h)),o.fromBufferAttribute(s,r.getX(h+1)),l.fromBufferAttribute(s,r.getX(h+2)),c.subVectors(o,a).cross(l.clone().sub(a)),c.dot(a.add(o).add(l))<0){const f=r.getX(h+1);r.setX(h+1,r.getX(h+2)),r.setX(h+2,f)}return n.deleteAttribute("uv"),n.computeVertexNormals(),n}function L1(i){const e=new Fs({color:16777215,roughness:.85,envMap:i,envMapIntensity:.6});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLocal = position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <color_fragment>",`#include <color_fragment>
${C1}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
roughnessFactor = mix(0.9, 0.28, wheelMetal); metalnessFactor = mix(0.0, 0.9, wheelMetal);`)},e.customProgramCacheKey=()=>"p2p-traffic-wheel",e}const ul=[[15263972,23],[855568,19],[6053990,9],[3816770,7],[11120049,14],[2306639,7],[3105704,3],[9376784,6],[11740702,2],[3099194,2],[9075296,2],[7023130,1],[13208082,1],[14078660,4]],P1=ul.reduce((i,[,e])=>i+e,0),bh=[2051724,11544092,2846271,13791770],Sh=[15263972,15263972,11740702,2306639,2846271,14263572];function D1(i,e,t){const n=(i>>>4)%1e3;if(e==="taxi")return t.setHex(15906565).offsetHSL(0,0,((i&15)-7.5)*.004);if(e==="bus")return t.setHex(bh[n%bh.length]);if(e==="truck")return t.setHex(Sh[n%Sh.length]);if(e==="van"&&n<550)return t.setHex(15527661);let s=n/1e3*P1;for(const[r,a]of ul)if(s-=a,s<0)return t.setHex(r).offsetHSL(0,0,((i&15)-7.5)*.003);return t.setHex(ul[0][0])}const ms=200,I1=55,U1=110;class ra{group=new Jt;kinds=[];wheels;m=new Rt;w=new Rt;q=new Zt;p=new z;s=new z;one=new z(1,1,1);c=new je;steer=new Zt;spin=new Zt;wq=new Zt;wp=new z;static X=new z(1,0,0);static Y=new z(0,1,0);rolled=new Map;at=new Map;clock=0;frames=0;constructor(e,t=null){const n=(r,a,o,l,c=!0)=>{const h=new Kn(new Float32Array(o*4),4).setUsage(As);r.setAttribute("aState",h);const f=new Xi(r,a,o);return f.count=0,f.castShadow=l,f.receiveShadow=!0,c&&f.setColorAt(0,this.c.setHex(16777215)),f.instanceMatrix.setUsage(As),this.group.add(f),{mesh:f,state:h,count:0}};for(const r of e){const a=M1(r.name),o=b1(r,a),l=n(yh(r,a,.17,!0),Mh(o,t,!0),ms,!0),c=n(yh(r,a,1,!1),Mh(o,t,!1),ms,!0);l.mesh.name=`traffic ${r.name}`,c.mesh.name=`traffic ${r.name} far`,this.kinds.push({kind:r,lines:a,near:l,far:c,wheelbase:a.axles[1]-a.axles[0]})}const s=L1(t);this.wheels=[n(wh(14),s,ms*4,!1,!1),n(wh(7,!0),s,ms*4,!1,!1)],this.wheels[0].mesh.name="traffic wheels",this.wheels[1].mesh.name="traffic wheels far",this.group.name="traffic"}update(e,t,n,s){this.clock+=n,this.frames++;const r=this.clock%.8<.4?1:0,a=Math.min(t,ms);for(const c of this.kinds)c.near.count=0,c.far.count=0;for(const c of this.wheels)c.count=0;const o=new Set;this.at.clear();for(let c=0;c<a;c++){const h=c*dr,f=e[h+Yt.INDEX],u=e[h+Yt.FLAGS],d=e[h+Yt.SPEED],g=this.kinds[e[h+Yt.KIND]]??this.kinds[1]??this.kinds[0];if(!g)break;this.p.set(e[h+Yt.POS],e[h+Yt.POS+1],e[h+Yt.POS+2]),this.q.set(e[h+Yt.ROT],e[h+Yt.ROT+1],e[h+Yt.ROT+2],e[h+Yt.ROT+3]),this.m.compose(this.p,this.q,this.one);const m=this.p.distanceTo(s),x=m<I1,p=x?g.near:g.far,y=p.count++;p.mesh.setMatrixAt(y,this.m),p.mesh.setColorAt(y,D1(e[h+Yt.LOOK],g.kind.name,this.c));const _=u&Ws.WRECK?1:0;p.state.setXYZW(y,u&Ws.BRAKING?1:0,_?0:u&Ws.LEFT?r:0,_?0:u&Ws.RIGHT?r:0,_);const v=g.lines,[E,M,T]=g.kind.half,A=-(M+g.kind.clearance),b=(this.rolled.get(f)??0)+(_?0:d*n/v.wheel);this.rolled.set(f,b%(Math.PI*2)),o.add(f);const w=_?0:Math.max(-.6,Math.min(.6,Math.atan(g.wheelbase*e[h+Yt.CURVE]))),D=x?this.wheels[0]:this.wheels[1];this.spin.setFromAxisAngle(ra.X,-b);for(let F=0;F<(m<U1?2:0);F++){const B=v.tyre[F],k=v.axles[F]-T;this.steer.setFromAxisAngle(ra.Y,F===0?-w:0),this.wq.copy(this.steer).multiply(this.spin);for(const N of[-1,1]){if(D.count>=ms*4)break;this.wp.set(N*(E*(v.cab!==void 0&&F===0?v.cab:1)-B/2-.03),A+v.wheel,k),this.w.compose(this.wp,this.wq,this.s.set(B,v.wheel,v.wheel)),D.mesh.setMatrixAt(D.count++,this.w.premultiply(this.m))}}this.at.set(f,this.p.clone())}for(const c of this.rolled.keys())o.has(c)||this.rolled.delete(c);const l=this.frames<=3;for(const c of[...this.kinds.flatMap(h=>[h.near,h.far]),...this.wheels]){const h=c.mesh;l&&c.count===0&&h.setMatrixAt(c.count++,this.w.makeTranslation(0,-1e4,0)),h.count=c.count,h.visible=l||c.count>0,h.frustumCulled=!l,h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),c.state.needsUpdate=!0,c.count>0&&!l&&h.computeBoundingSphere()}}static HORN=Ws.HORN}const co=["chase","hood","high"];class F1{constructor(e,t=-1/0){this.ground=e,this.sea=t}camera=new Un(62,1,.3,2600);mode="chase";dir=new z(0,0,-1);eye=new z;look=new z;fresh=!0;next(){return this.mode=co[(co.indexOf(this.mode)+1)%co.length],this.fresh=!0,this.mode}cut(){this.fresh=!0}update(e,t){const n=new z(e[Ee.POS],e[Ee.POS+1],e[Ee.POS+2]),s=new Zt(e[Ee.ROT],e[Ee.ROT+1],e[Ee.ROT+2],e[Ee.ROT+3]).normalize(),r=new z(0,0,-1).applyQuaternion(s),a=new z(e[Ee.VEL],0,e[Ee.VEL+2]),o=a.length();if(this.mode==="hood"){this.camera.position.copy(n).add(new z(0,.95,-.9).applyQuaternion(s)),this.camera.quaternion.copy(s),this.camera.fov=72,this.camera.updateProjectionMatrix();return}const l=r.clone().setY(0);l.lengthSq()<1e-6?l.copy(this.dir):l.normalize();const c=l.clone(),h=e[Ee.SPEED];h>4&&o>4&&c.lerp(a.clone().divideScalar(o),Math.min(.75,(h-4)/12)).normalize();const f=this.fresh?1:1-Math.exp(-t*4.5);this.dir.lerp(c,f).setY(0).normalize();const u=this.mode==="high",d=u?16:6.4+Math.min(2.2,o*.035),g=u?22:2.35,m=n.clone().addScaledVector(this.dir,-d).add(new z(0,g,0)),x=this.ground.tunnel(n.x,n.y,n.z);if(x){const v=x.way,E=v.p[x.si],M=v.p[x.si+1],T=M[0]-E[0],A=M[2]-E[2],b=Math.hypot(T,A)||1,w=T/b,D=A/b,F=m.x-E[0],B=m.z-E[2],k=F*w+B*D,N=Math.max(-v.half+.8,Math.min(v.half-.8,-F*D+B*w));m.x=E[0]+w*k-D*N,m.z=E[2]+D*k+w*N;const U=(this.ground.tunnel(m.x,n.y,m.z)?.roof??x.roof)-.45;m.y=Math.min(m.y,U),m.y=Math.max(m.y,x.floor+.9)}else{m.y=Math.max(m.y,this.ground.surface(m.x,m.z,n.y+1.5)+.9,this.sea+.7);const v=this.ground.deckOver(m.x,m.z,n.y+.5);v<1/0&&(m.y=Math.min(m.y,v-.4))}const p=n.clone().addScaledVector(this.dir,u?6:5).add(new z(0,u?0:1,0)),y=this.fresh?1:1-Math.exp(-t*9);this.eye.lerp(m,y),this.look.lerp(p,this.fresh?1:1-Math.exp(-t*14)),this.fresh=!1,this.camera.position.copy(this.eye),this.camera.lookAt(this.look);const _=60+Math.min(14,o*.28);Math.abs(_-this.camera.fov)>.05&&(this.camera.fov=_,this.camera.updateProjectionMatrix())}}const Eh=80,Yr=26;function Ah(i,e){try{i.setPointerCapture(e)}catch{}}class N1{constructor(e){this.root=e,window.addEventListener("keydown",l=>{l.repeat||(this.keys.add(l.code),this.onKey(l.code),(l.code.startsWith("Arrow")||l.code==="Space")&&l.preventDefault())}),window.addEventListener("keyup",l=>this.keys.delete(l.code));const t=()=>{this.keys.clear(),this.wheel=null,this.pedals.clear(),this.paint()};window.addEventListener("blur",t),document.addEventListener("visibilitychange",()=>{document.hidden&&t()});const n=e.querySelector("#wheel");n.addEventListener("pointerdown",l=>{this.wheel={id:l.pointerId,x0:l.clientX,value:0},Ah(n,l.pointerId),this.paint()}),n.addEventListener("pointermove",l=>{this.wheel?.id===l.pointerId&&(this.wheel.value=Math.max(-1,Math.min(1,(l.clientX-this.wheel.x0)/Eh)),this.paint())});const s=l=>{this.wheel?.id===l.pointerId&&(this.wheel=null,this.paint())};for(const l of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(l,s);const r=e.querySelector("#gas"),a=e.querySelector("#brake"),o=(l,c)=>{if(!l)return!1;const h=l.getBoundingClientRect();return c.clientX>h.left-Yr&&c.clientX<h.right+Yr&&c.clientY>h.top-Yr&&c.clientY<h.bottom+Yr};for(const l of e.querySelectorAll("[data-pedal]")){const c=l.dataset.pedal,h=u=>{if(c==="hand")return["hand"];const d=[];return o(r,u)&&d.push("gas"),o(a,u)&&d.push("brake"),d.length?d:[c]};l.addEventListener("pointerdown",u=>{this.pedals.set(u.pointerId,h(u)),Ah(l,u.pointerId),this.paint(),u.preventDefault()}),l.addEventListener("pointermove",u=>{this.pedals.has(u.pointerId)&&(this.pedals.set(u.pointerId,h(u)),this.paint())});const f=u=>{this.pedals.delete(u.pointerId)&&this.paint()};for(const u of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(u,f)}}keys=new Set;keySteer=0;wheel=null;pedals=new Map;override=null;onKey=()=>{};held(e){for(const t of this.pedals.values())if(t.includes(e))return!0;return!1}paint(){for(const t of this.root.querySelectorAll("[data-pedal]"))t.classList.toggle("down",this.held(t.dataset.pedal));const e=this.root.querySelector("#wheel-knob");e&&(e.style.opacity=this.wheel?"1":"0",e.style.transform=`translateX(${(this.wheel?.value??0)*Eh}px)`,this.wheel&&(e.style.left=`${this.wheel.x0}px`))}sample(e){if(this.override)return this.override;const t=this.keys,n=t.has("ArrowLeft")||t.has("KeyA"),r=(t.has("ArrowRight")||t.has("KeyD")?1:0)-(n?1:0),a=(r===0?6:3.5)*e;this.keySteer+=Math.max(-a,Math.min(a,r-this.keySteer));const o=this.wheel?this.wheel.value:this.keySteer,l=t.has("ArrowUp")||t.has("KeyW")||this.held("gas"),c=t.has("ArrowDown")||t.has("KeyS")||this.held("brake"),h=t.has("Space")||this.held("hand");return{steer:Math.round(o*1e3),throttle:l?1e3:0,brake:c?1e3:0,handbrake:h?1:0}}}class z1{ctx=null;engine=null;skid=null;wind=null;noise=null;enabled=!0;start(){if(this.ctx){this.ctx.resume();return}const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=this.ctx=new e,n=t.createGain();n.gain.value=.5,n.connect(t.destination);const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=500,s.Q.value=1.2;const r=t.createGain();r.gain.value=0;const a=t.createOscillator();a.type="sawtooth";const o=t.createOscillator();o.type="square";const l=t.createGain();l.gain.value=.5,a.connect(s),o.connect(l).connect(s),s.connect(r).connect(n),a.start(),o.start(),this.engine={a,b:o,filter:s,gain:r};const c=t.createBuffer(1,t.sampleRate*2,t.sampleRate),h=c.getChannelData(0);for(let u=0;u<h.length;u++)h[u]=Math.random()*2-1;this.noise=c;const f=(u,d,g)=>{const m=t.createBufferSource();m.buffer=c,m.loop=!0;const x=t.createBiquadFilter();x.type=u,x.frequency.value=d,x.Q.value=g;const p=t.createGain();return p.gain.value=0,m.connect(x).connect(p).connect(n),m.start(),p};this.skid=f("bandpass",1700,2.5),this.wind=f("lowpass",500,.5)}burst(e,t,n,s){const r=this.ctx;if(!r||!this.noise||!this.enabled)return;const a=r.createBufferSource();a.buffer=this.noise;const o=r.createBiquadFilter();o.type=e,o.frequency.value=t,o.Q.value=.8;const l=r.createGain(),c=r.currentTime;l.gain.setValueAtTime(Math.min(1,n),c),l.gain.exponentialRampToValueAtTime(.001,c+s),a.connect(o).connect(l).connect(r.destination),a.start(c,Math.random()*1.5,s+.05)}splash(e){const t=Math.min(1,e/25);this.burst("lowpass",180,.5,.3+.4*t),this.burst("bandpass",1400,.9+t*.8,.2+.35*t),this.burst("highpass",3500,.6+t*.6,.12+.2*t)}horn(e){if(!this.ctx||!this.enabled||e>120)return;const t=this.ctx.currentTime,n=this.ctx.createGain(),s=.16/(1+e*e/400);n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(s,t+.02),n.gain.setValueAtTime(s,t+.5),n.gain.linearRampToValueAtTime(0,t+.58),n.connect(this.ctx.destination);for(const r of[392,494]){const a=this.ctx.createOscillator();a.type="sawtooth",a.frequency.value=r,a.connect(n),a.start(t),a.stop(t+.6)}}thump(e){this.burst("lowpass",260+e*20,.25+e*.06,.25+Math.min(.5,e*.03)),this.burst("bandpass",2400,e*.03,.18)}glass(){this.burst("highpass",3200,.5,.7),this.burst("bandpass",6500,.35,.4)}update(e,t){const n=this.ctx;if(!n||!this.engine||!this.skid||!this.wind)return;const s=n.currentTime,r=this.enabled?1:0,a=e[Ee.RPM],o=a/60*2;this.engine.a.frequency.setTargetAtTime(o,s,.03),this.engine.b.frequency.setTargetAtTime(o*.5,s,.03),this.engine.filter.frequency.setTargetAtTime(300+a*.25+t*1400,s,.05),this.engine.gain.gain.setTargetAtTime(r*(.1+.16*t+a/7200*.08),s,.05);let l=0;for(let h=0;h<4;h++){const f=Ee.WHEELS+h*Ee.WHEEL_STRIDE;e[f+Ee.W_GROUNDED]&&(l=Math.max(l,Math.abs(e[f+Ee.W_SLIP])/.1-1.2,Math.abs(e[f+Ee.W_SLIP_TAN])/.14-1.2))}const c=Math.hypot(e[Ee.VEL],e[Ee.VEL+2]);this.skid.gain.setTargetAtTime(r*Math.min(.35,Math.max(0,l)*.2)*Math.min(1,c/4),s,.04),this.wind.gain.setTargetAtTime(r*Math.min(.3,c*c/9e3),s,.2)}}const Bt=i=>document.getElementById(i);class O1{speed=Bt("speed");gear=Bt("gear");rpm=Bt("rpm").firstElementChild;time=Bt("time");place=Bt("place");toastEl=Bt("toast");menu=Bt("menu");hurt=Bt("hurt");lastHurt=-1;toastTimer=0;lastKmh=-1;lastGear="";lastTime="";constructor(e,t){Bt("stamp").textContent=`${e} · ${t}`,Bt("b-menu").addEventListener("click",()=>this.toggleMenu()),document.addEventListener("pointerdown",n=>{this.menu.classList.contains("open")&&!this.menu.contains(n.target)&&n.target!==Bt("b-menu")&&this.toggleMenu(!1)})}toggleMenu(e){this.menu.classList.toggle("open",e??!this.menu.classList.contains("open"))}on(e,t){Bt(e).addEventListener("click",t)}mark(e,t){Bt(e).classList.toggle("on",t)}starts(e,t){const n=Bt("starts");e.forEach((s,r)=>{const a=document.createElement("button");a.textContent=s,a.addEventListener("click",()=>{t(r),this.toggleMenu(!1)}),n.appendChild(a)})}cars(e,t,n){const s=Bt("cars");e.forEach((r,a)=>{const o=document.createElement("button"),l=document.createElement("b");l.textContent=r.name;const c=document.createElement("small");c.textContent=r.says,o.append(l,c),o.classList.toggle("on",a===t),o.addEventListener("click",()=>{n(a),this.toggleMenu(!1)}),s.appendChild(o)})}pickedCar(e){[...Bt("cars").children].forEach((t,n)=>t.classList.toggle("on",n===e))}setPlace(e){this.place.textContent=e}report(e){Bt("report").textContent=e}loading(e){Bt("loading-step").textContent=e}loadingNote(e){Bt("loading-note").textContent=e}anywhere(e,t,n){const s=Bt("place-q"),r=Bt("place-go"),a=Bt("place-found"),o=Bt("place-home");for(const c of["keydown","keyup","keypress"])s.addEventListener(c,h=>h.stopPropagation());o.style.display=e?"":"none",o.addEventListener("click",n);const l=async()=>{const c=s.value.trim();if(c){a.textContent="asking…";try{const h=await t(c);a.textContent=h.length?"":"nothing found by that name";for(const f of h){const u=document.createElement("button");u.textContent=f.label,u.addEventListener("click",()=>{a.textContent="going…",f.go()}),a.appendChild(u)}}catch(h){a.textContent=`the search failed: ${h instanceof Error?h.message:String(h)}`}}};r.addEventListener("click",()=>void l()),s.addEventListener("keydown",c=>{c.key==="Enter"&&l()})}loaded(){Bt("loading").remove()}fail(e){const t=Bt("loading-step");t.className="err",t.textContent=e}toast(e,t=2200){this.toastEl.textContent=e,this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove("show"),t)}update(e,t,n){const s=Math.round(Math.abs(e[Ee.SPEED])*3.6);s!==this.lastKmh&&(this.speed.firstChild.textContent=String(s),this.lastKmh=s);const r=e[Ee.GEAR]<0?"R":String(e[Ee.GEAR]);r!==this.lastGear&&(this.gear.textContent=r,this.lastGear=r);const a=Math.min(1,e[Ee.RPM]/7200);this.rpm.style.width=`${(a*100).toFixed(0)}%`,this.rpm.classList.toggle("red",a>.9);const o=e[Ee.DROWNED]>.5?1e3:Math.round(e[Ee.DAMAGE]*100);o!==this.lastHurt&&(this.hurt.textContent=o===1e3?"engine flooded":o?`damage ${o}%  ·  engine ${Math.round(e[Ee.POWER]*100)}%`:"",this.lastHurt=o);const l=Math.floor(t/60),c=`${n?"▶ ":""}${l}:${(t-l*60).toFixed(1).padStart(4,"0")}`;c!==this.lastTime&&(this.time.textContent=c,this.lastTime=c)}}const Dn=128,k1=132,B1=20,H1=8,G1=70,en={land:"#171c23",water:"#1c3a52",green:"#1e3828",paved:"#222831",pier:"#2a2f37",building:"#2e3540",minor:"#525b68",street:"#8d97a5",main:"#e6dfcb",path:"#4d6a55",car:"#ff5a3c",target:"#ffd23c",ink:"#f2f0ea",rim:"rgba(242,240,234,.35)"},V1=new Set(["park","grass","garden","wood","pitch","playground"]),W1=new Set(["water","pool"]);function q1(i){return/^(secondary|primary|trunk|motorway)$/.test(i)?2:/^(residential|unclassified|tertiary)$/.test(i)?1:0}class X1{constructor(e,t){this.page=e,this.places=e.starts.map(u=>({x:u.x,z:u.z,label:u.label.split(",")[0]}));const n=(u,d)=>(Math.floor(u/Dn)+512)*4096+Math.floor(d/Dn)+512,s=(u,d,g)=>{let m=1/0,x=-1/0,p=1/0,y=-1/0;for(const[_,v]of g)m=Math.min(m,_),x=Math.max(x,_),p=Math.min(p,v),y=Math.max(y,v);for(let _=Math.floor(m/Dn);_<=Math.floor(x/Dn);_++)for(let v=Math.floor(p/Dn);v<=Math.floor(y/Dn);v++){const E=n(_*Dn,v*Dn);let M=this.cells.get(E);M||(M={roads:[],buildings:[],areas:[],lines:[]},this.cells.set(E,M)),M[u].push(d)}};this.roads=[...e.roads,...(e.ways??[]).filter(u=>u.k==="tunnel").map(u=>({c:u.c,w:u.w,p:u.p.map(d=>[d[0],d[2]])}))],this.roads.forEach((u,d)=>s("roads",d,u.p)),e.buildings.forEach((u,d)=>s("buildings",d,u.r)),e.areas.forEach((u,d)=>s("areas",d,u.r)),e.lines.forEach((u,d)=>{(u.k==="path"||u.k==="steps")&&s("lines",d,u.p)}),this.stamp={roads:new Uint32Array(this.roads.length),buildings:new Uint32Array(e.buildings.length),areas:new Uint32Array(e.areas.length),lines:new Uint32Array(e.lines.length)};const r=12,a=Math.ceil((e.box[2]-e.box[0])/r),o=Math.ceil((e.box[3]-e.box[1])/r);this.water=document.createElement("canvas"),this.water.width=a,this.water.height=o;const l=this.water.getContext("2d"),c=l.createImageData(a,o);for(let u=0;u<o;u++)for(let d=0;d<a;d++){const g=t.at(e.box[0]+(d+.5)*r,e.box[1]+(u+.5)*r)<=e.ground.water+.6,m=(u*a+d)*4;c.data[m]=28,c.data[m+1]=58,c.data[m+2]=82,c.data[m+3]=g?255:0}l.putImageData(c,0,0);const h=u=>document.getElementById(u);this.mini=h("mini"),this.mini.width=this.mini.height=Math.round(k1*this.dpr),this.miniCtx=this.mini.getContext("2d"),this.panel=h("map"),this.big=this.panel.querySelector("canvas"),this.bigCtx=this.big.getContext("2d"),this.still=document.createElement("canvas"),this.stillCtx=this.still.getContext("2d"),this.mini.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),this.toggle()}),h("map-close").addEventListener("click",()=>this.toggle(!1)),h("map-in").addEventListener("click",()=>this.setZoom(this.zoom*2)),h("map-out").addEventListener("click",()=>this.setZoom(this.zoom/2)),h("map-clear").addEventListener("click",()=>this.setTarget(null));let f=null;this.big.addEventListener("pointerdown",u=>{f={x:u.clientX,y:u.clientY}}),this.big.addEventListener("pointerup",u=>{if(!f||Math.hypot(u.clientX-f.x,u.clientY-f.y)>12){f=null;return}f=null;const d=this.big.getBoundingClientRect(),g=this.mapView();this.tap((u.clientX-d.left-d.width/2)/(g.scale/this.dpr)+g.cx,(u.clientY-d.top-d.height/2)/(g.scale/this.dpr)+g.cz)}),window.addEventListener("resize",()=>{this.stillView=null})}target=null;onTarget=()=>{};cells=new Map;stamp={roads:new Uint32Array(0),buildings:new Uint32Array(0),areas:new Uint32Array(0),lines:new Uint32Array(0)};pass=0;water;mini;miniCtx;panel;big;bigCtx;still;stillCtx;stillView=null;zoom=1;sinceMini=1;sinceMap=1;reach=180;car={x:0,z:0,heading:0,speed:0};dpr=Math.min(2,window.devicePixelRatio||1);places;roads;get open(){return this.panel.classList.contains("open")}toggle(e){this.panel.classList.toggle("open",e??!this.open),this.stillView=null,this.sinceMap=1}setZoom(e){this.zoom=Math.max(1,Math.min(8,e)),this.stillView=null,this.sinceMap=1}setTarget(e){this.target=e,this.sinceMini=this.sinceMap=1,this.onTarget(e)}tap(e,t){const n=Math.max(G1,14/(this.mapView().scale/this.dpr));for(const o of this.places)if(Math.hypot(o.x-e,o.z-t)<n*.5)return this.setTarget({...o}),this.target;let s=1/0,r=0,a=0;for(const o of this.near("roads",e,t,n)){const l=this.roads[o].p;for(let c=0;c+1<l.length;c++){const[h,f]=l[c],[u,d]=l[c+1],g=u-h,m=d-f,x=g*g+m*m,p=x>0?Math.max(0,Math.min(1,((e-h)*g+(t-f)*m)/x)):0,y=Math.hypot(h+g*p-e,f+m*p-t);y<s&&(s=y,r=h+g*p,a=f+m*p)}}return s>n?null:(this.setTarget({x:r,z:a,label:"the pin"}),this.target)}update(e,t,n,s,r){this.car={x:e,z:t,heading:n,speed:s};const a=150+Math.min(170,Math.abs(s)*4.5);this.reach+=(a-this.reach)*Math.min(1,r*1.5),this.sinceMini+=r,this.sinceMap+=r,this.sinceMini>=1/B1&&(this.sinceMini=0,this.drawMini()),this.open&&this.sinceMap>=1/H1&&(this.sinceMap=0,this.drawMap())}near(e,t,n,s){const r=[],a=this.stamp[e],o=++this.pass;for(let l=Math.floor((t-s)/Dn);l<=Math.floor((t+s)/Dn);l++)for(let c=Math.floor((n-s)/Dn);c<=Math.floor((n+s)/Dn);c++){const h=this.cells.get((l+512)*4096+c+512);if(h)for(const f of h[e])a[f]!==o&&(a[f]=o,r.push(f))}return r}paint(e,t,n,s,r,a){const o=this.page;e.setTransform(1,0,0,1,0,0),e.fillStyle=en.land,e.fillRect(0,0,t,n),e.translate(t/2+s.ox,n/2+s.oy),e.rotate(s.rot),e.scale(s.scale,s.scale),e.translate(-s.cx,-s.cz),e.imageSmoothingEnabled=!0,e.drawImage(this.water,o.box[0],o.box[1],o.box[2]-o.box[0],o.box[3]-o.box[1]);const l=u=>{e.moveTo(u[0][0],u[0][1]);for(let d=1;d<u.length;d++)e.lineTo(u[d][0],u[d][1]);e.closePath()},c=u=>{e.moveTo(u[0][0],u[0][1]);for(let d=1;d<u.length;d++)e.lineTo(u[d][0],u[d][1])},h=this.near("areas",s.cx,s.cz,r);for(const[u,d]of[[g=>V1.has(g),en.green],[g=>W1.has(g),en.water],[g=>g==="pier",en.pier],[g=>g==="plaza"||g==="parking",en.paved]]){e.beginPath();for(const g of h){const m=o.areas[g];u(m.k)&&m.r.length>2&&l(m.r)}e.fillStyle=d,e.fill()}if(s.scale>.1){e.beginPath();for(const u of this.near("buildings",s.cx,s.cz,r)){const d=o.buildings[u];d.r.length>3&&l(d.r)}e.fillStyle=en.building,e.fill()}if(e.lineCap="round",e.lineJoin="round",a){e.beginPath();for(const u of this.near("lines",s.cx,s.cz,r))c(o.lines[u].p);e.strokeStyle=en.path,e.lineWidth=Math.max(1.2*this.dpr/s.scale,1.5),e.setLineDash([4,4]),e.stroke(),e.setLineDash([])}const f=this.near("roads",s.cx,s.cz,r);for(const[u,d,g]of[[0,en.minor,.8],[1,en.street,1.3],[2,en.main,2.2]]){if(u===0&&s.scale<.2*this.dpr)continue;e.beginPath();let m=4;for(const x of f){const p=this.roads[x];q1(p.c)===u&&(c(p.p),m=Math.max(m,p.w))}e.strokeStyle=d,e.lineWidth=Math.max(g*this.dpr/s.scale,u===2?Math.min(m,14)*.8:u===1?7:3.5),e.stroke()}e.setTransform(1,0,0,1,0,0)}toScreen(e,t,n,s,r){const a=(s-e.cx)*e.scale,o=(r-e.cz)*e.scale,l=Math.cos(e.rot),c=Math.sin(e.rot);return[t/2+e.ox+a*l-o*c,n/2+e.oy+a*c+o*l]}arrow(e,t,n,s,r){e.save(),e.translate(t,n),e.rotate(s),e.beginPath(),e.moveTo(0,-r),e.lineTo(r*.72,r*.8),e.lineTo(0,r*.4),e.lineTo(-r*.72,r*.8),e.closePath(),e.fillStyle=en.car,e.strokeStyle="#fff",e.lineWidth=Math.max(1,r*.16),e.fill(),e.stroke(),e.restore()}drawMini(){const e=this.miniCtx,t=this.mini.width,n=this.dpr,s=t/2,r={cx:this.car.x,cz:this.car.z,scale:s*.86/this.reach,rot:-this.car.heading,ox:0,oy:s*.22};if(e.save(),e.beginPath(),e.arc(s,s,s,0,Math.PI*2),e.clip(),this.paint(e,t,t,r,this.reach*1.7,!0),this.target){const[l,c]=this.toScreen(r,t,t,this.target.x,this.target.z),h=l-s,f=c-s,u=Math.hypot(h,f),d=s-9*n,g=Math.hypot(this.target.x-this.car.x,this.target.z-this.car.z);if(e.fillStyle=en.target,e.strokeStyle="#1a1a1a",e.lineWidth=1.5*n,u<=d)e.beginPath(),e.arc(l,c,5*n,0,Math.PI*2),e.fill(),e.stroke();else{const m=h/u,x=f/u,p=s+m*d,y=s+x*d,_=7*n;e.beginPath(),e.moveTo(p+m*_,y+x*_),e.lineTo(p-m*_*.5-x*_*.8,y-x*_*.5+m*_*.8),e.lineTo(p-m*_*.5+x*_*.8,y-x*_*.5-m*_*.8),e.closePath(),e.fill(),e.stroke(),e.font=`600 ${10*n}px system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle";const v=g>=1e3?`${(g/1e3).toFixed(1)} km`:`${Math.round(g/10)*10} m`,E=s+m*(d-20*n),M=s+x*(d-20*n);e.lineWidth=3*n,e.strokeStyle="rgba(10,12,16,.85)",e.strokeText(v,E,M),e.fillStyle=en.target,e.fillText(v,E,M)}}this.arrow(e,s,s+r.oy,0,7.5*n),e.restore(),e.beginPath(),e.arc(s,s,s-n,0,Math.PI*2),e.strokeStyle=en.rim,e.lineWidth=2*n,e.stroke();const a=s+Math.sin(r.rot)*(s-9*n),o=s-Math.cos(r.rot)*(s-9*n);e.font=`700 ${10*n}px system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.lineWidth=3*n,e.strokeStyle="rgba(10,12,16,.85)",e.strokeText("N",a,o),e.fillStyle=en.ink,e.fillText("N",a,o)}mapView(){const e=this.big.width||1,t=this.big.height||1,n=this.page.box,s=Math.min(e/(n[2]-n[0]),t/(n[3]-n[1]))*.98;return this.zoom<=1?{cx:(n[0]+n[2])/2,cz:(n[1]+n[3])/2,scale:s,rot:0,ox:0,oy:0}:{cx:this.car.x,cz:this.car.z,scale:s*this.zoom,rot:0,ox:0,oy:0}}drawMap(){const e=this.big.getBoundingClientRect(),t=Math.round(e.width*this.dpr),n=Math.round(e.height*this.dpr);if(t<8||n<8)return;(this.big.width!==t||this.big.height!==n)&&(this.big.width=t,this.big.height=n,this.stillView=null);const s=this.mapView(),r=this.bigCtx,a=Math.round(40*this.dpr),o=this.stillView;(!o||o.scale!==s.scale||Math.abs((s.cx-o.cx)*s.scale)>a*.8||Math.abs((s.cz-o.cz)*s.scale)>a*.8)&&(this.still.width=t+a*2,this.still.height=n+a*2,this.paint(this.stillCtx,this.still.width,this.still.height,s,Math.hypot(this.still.width,this.still.height)/2/s.scale,s.scale>.45*this.dpr),this.stillView={...s});const l=this.stillView;r.setTransform(1,0,0,1,0,0),r.drawImage(this.still,Math.round(-a-(s.cx-l.cx)*s.scale),Math.round(-a-(s.cz-l.cz)*s.scale));const c=this.dpr;r.font=`600 ${11*c}px system-ui, sans-serif`,r.textBaseline="middle",r.textAlign="left";for(const u of this.places){const[d,g]=this.toScreen(s,t,n,u.x,u.z);r.beginPath(),r.arc(d,g,4*c,0,Math.PI*2),r.fillStyle=en.ink,r.fill(),r.lineWidth=3*c,r.strokeStyle="rgba(10,12,16,.85)",r.strokeText(u.label,d+8*c,g),r.fillStyle=en.ink,r.fillText(u.label,d+8*c,g)}if(this.target){const[u,d]=this.toScreen(s,t,n,this.target.x,this.target.z);r.beginPath(),r.arc(u,d,9*c,0,Math.PI*2),r.strokeStyle=en.target,r.lineWidth=3*c,r.stroke(),r.beginPath(),r.arc(u,d,3.5*c,0,Math.PI*2),r.fillStyle=en.target,r.fill()}const[h,f]=this.toScreen(s,t,n,this.car.x,this.car.z);this.arrow(r,h,f,this.car.heading,9*c)}probe(){return{open:this.open,zoom:this.zoom,target:this.target,reach:this.reach}}}const Xn=new URLSearchParams(location.search),$1=Xn.has("test"),ho=Xn.get("world")??"sf",Th=1,dl=()=>new Promise(i=>requestAnimationFrame(()=>i())),Y1=14;async function K1(){const i=new O1("588b3e0 2026-11-23 01:01Z","");let e=null;const t=async G=>{i.loading(G),await dl()};await t("the sim core");const n=await tx(`./core/p2p_core.wasm${xs}`),s=["p2p_new_car","p2p_kind_count","p2p_car_count","p2p_traffic_drain","p2p_traffic_stride","p2p_vehicle_count","p2p_events_drain","p2p_panel","p2p_rubble_drain","p2p_count","p2p_inside","p2p_prop_origin"].filter(G=>typeof n[G]!="function");if(s.length)throw new Error(`this page (${"588b3e0 2026-11-23 01:01Z".split(" ")[0]}) was given a sim core from another build (it has no ${s.join(", ")}). Reload; if that does not cure it, clear this site's data.`);const r=mf(Xn);let a,o,l=null;if(r){i.loadingNote("making this place on this device, from open map data"),await t(`the place: ${r.label}`);const G=await Gx(r,[...Ka(n).keys()],K=>i.loading(K));({blob:a,page:o,mask:l}=G),e={seconds:G.seconds,kept:G.kept}}else await t("the city"),[a,o]=await Promise.all([Ax(`./world/${ho}.p2pw${xs}`),fetch(`./world/${ho}.json${xs}`).then(G=>{if(!G.ok)throw new Error(`world ${ho}: ${G.status}`);return G.json()})]);const c=new Ex(a);c.setWays(o.ways??[]);const h=o.from.flat?"the ground here is level: no source of heights covers this place":"";document.getElementById("stamp").textContent=r?`588b3e0 2026-11-23 01:01Z · ${r.label}: made on this device from Overture Maps ${o.from.release}${h?` · ${h}`:""} · ${o.attribution}`:`588b3e0 2026-11-23 01:01Z · ${o.name} from ${o.from.repo} ${o.from.sha} · ${o.attribution}`;const f=Yx(Xn),u=new Zx(document.getElementById("view"),f),d=new F1(c,o.ground.sea??-1/0);await t("the ground");let g=null;o.photo&&(g=await new nf().loadAsync(`./world/${o.photo.file}${xs}`),g.colorSpace=ln,g.anisotropy=Math.min(8,u.renderer.capabilities.getMaxAnisotropy()));const m=ov(c,o,g,l);await m.ready,m.group.name="ground",u.scene.add(m.group),await t("the streets");const x=dv(c,o);x.group.name="streets",u.scene.add(x.group),await t("the bridges and tunnels");const p=vv(o,c);u.scene.add(p.group),await t("the sim");const y=nx(n),_=(()=>{try{return localStorage.getItem("p2p.car")}catch{return null}})();let v=Math.min(y.length-1,Math.max(0,Math.floor(Number(Xn.get("car")??_??0))||0));const E=Math.max(0,Math.min(120,Math.floor(Number(Xn.get("traffic")??36))||0)),M=(()=>{try{return localStorage.getItem("p2p.soft")}catch{return null}})();let T=(Xn.get("soft")??M??"1")!=="0",A=new Bc(n,a,Th,v);A.wantTraffic(E),await t("the buildings");const b=performance.now(),w=Kv(o,G=>A.face(G),Ya(n)),D=performance.now()-b;w.group.name="buildings",u.scene.add(w.group),await t("what stands along the streets");const F=d1(c,o,Ka(n));F.group.name="props",u.scene.add(F.group);const B=new yv(o,u.reflections);B.group.name="shopfronts",u.scene.add(B.group);const k=new y1(o,c,G=>A.inside(G),G=>A.propOrigin(G),kc(n),Ka(n),Oc(n));u.scene.add(k.group);const N=new g1(w,B,k,Ya(n),G=>A.fallen(G));N.group.name="rubble",u.scene.add(N.group),await t("the car");const U=G=>{const K=y[G],be=new wx({halfTrack:K.param("HALF_TRACK"),axleFront:K.param("AXLE_FRONT"),axleRear:K.param("AXLE_REAR"),wheelRadius:K.param("WHEEL_RADIUS"),overhang:K.param("OVERHANG")},u.reflections,{...Sx(K.name),roof:K.param("CABIN_TOP")+.015});return be.group.name="car",be.loose.name="car smoke",u.scene.add(be.group,be.loose),be};let I=U(v),P=!1;const V=ex(n),H=new ra(V,u.reflections);u.scene.add(H.group);const ee=new N1(document.body),ne=new z1,ue=1/A.tickRate,de=A.stateLength,pe=new Float32Array(de),$=new Float32Array(de),j=new Float32Array(de);let ce={start:0,car:v,inputs:[],ticks:0,digest:""},we=null,Ae={throttle:0,brake:0};const Ge=G=>{const K=performance.now();A.drop(),A=new Bc(n,a,Th,v),A.wantTraffic(E),A.setSoft(T);const be=o.starts[G]??o.starts[0];return A.place(be.x,be.z,be.heading),I.useSoft(T?A.softBuilt():null),P=!1,A.read($),pe.set($),ce={start:G,car:v,inputs:[],ticks:0,digest:""},F.reset(),B.reset(),N.reset(),k.reset(),xe=0,d.cut(),i.setPlace(be.label),performance.now()-K},ae=G=>{if(!(G===v||!y[G])){v=G;try{localStorage.setItem("p2p.car",String(G))}catch{}u.scene.remove(I.group,I.loose),I.group.traverse(K=>{const be=K;be.isMesh&&be.geometry.dispose()}),I=U(G),we=null,Ge(ce.start),i.pickedCar(G),i.toast(`${y[G].name}: ${y[G].says}`,3200)}},L=(G=ce.start)=>{we=null;const K=Ge(G);i.toast(`restart in ${K.toFixed(0)} ms`,1200)},Te=()=>{if(we||ce.ticks===0){i.toast("drive first, then replay it");return}const G={...ce,inputs:ce.inputs.slice(),digest:A.digest()};Ge(G.start),we={of:G,at:0},i.toast(`replaying ${G.ticks} ticks from their inputs`)},me=()=>{if(!we)return;const{of:G}=we,K=A.digest(),be=K===G.digest;i.report(`replay of ${G.ticks} ticks (${(G.ticks*ue).toFixed(1)} s)
driven:   ${G.digest}
replayed: ${K}
${be?"SAME: the run is its inputs":"DIFFERENT: this is a bug, please send this text"}`),i.toast(be?"replay ended where the drive did, to the bit":"replay DIFFERS from the drive",4e3),i.toggleMenu(!0),ce={...G,inputs:G.inputs.slice()},we=null},fe=[0,0,0,0];let xe=0;const Le=()=>{let G;if(we){const K=we.at*4,be=we.of.inputs;G={steer:be[K],throttle:be[K+1],brake:be[K+2],handbrake:be[K+3]},we.at++}else G=ee.sample(ue);ce.inputs.push(G.steer,G.throttle,G.brake,G.handbrake),pe.set($),A.step(G),A.read($),ce.ticks++,Ae=G,we&&we.at>=we.of.ticks&&me()};i.starts(o.starts.map(G=>G.label),G=>L(G)),i.cars(y.map(G=>({name:G.name,says:G.says})),v,ae),i.anywhere(r?.label??null,async G=>(await Ox(G)).map(be=>({label:be.label,go:()=>location.assign(ll(be))})),()=>location.assign(ll(null))),i.on("b-restart",()=>L()),i.on("b-camera",()=>i.toast(`camera: ${d.next()}`,900)),i.on("b-replay",()=>{i.toggleMenu(!1),Te()}),i.on("b-sound",()=>{ne.enabled=!ne.enabled,i.mark("b-sound",ne.enabled)}),i.mark("b-soft",T),i.on("b-soft",()=>{T=!T;try{localStorage.setItem("p2p.soft",T?"1":"0")}catch{}i.mark("b-soft",T),we=null,Ge(ce.start),i.toast(T?"soft-body damage: the body bends, panels come off, the engine takes it":"damage as four dents",2600)}),i.on("b-check",()=>void Z1(n,i));let ge=Xn.has("prof"),ze=0,st=null,et=null,C=null;i.on("b-frames",()=>{ge=!ge,i.mark("b-frames",ge),ge||i.report("")}),i.mark("b-frames",ge);const S=new X1(o,c),X=new Dt(new la(2.2,2.2,160,20,1,!0).translate(0,80,0),new Us({color:16765500,transparent:!0,opacity:.4,blending:uo,depthWrite:!1,side:pn,fog:!1}));X.name="target",X.visible=!1,X.frustumCulled=!1,u.scene.add(X);let re=0;S.onTarget=G=>{X.visible=!!G,G&&(X.position.set(G.x,c.at(G.x,G.z),G.z),re=ce.ticks,i.toast(`target: ${G.label}`,1400))},ee.onKey=G=>{G==="KeyN"?S.toggle():G==="Escape"?S.toggle(!1):G==="KeyR"?L():G==="KeyC"?d.next():G==="KeyM"?i.toggleMenu():G==="KeyP"&&Te()},window.addEventListener("pointerdown",()=>ne.start(),{passive:!0}),window.addEventListener("keydown",()=>ne.start()),window.addEventListener("resize",()=>u.resize(d.camera)),u.resize(d.camera),Ge(Number(Xn.get("start")??0)),i.loaded(),h&&i.toast(h,5e3);const le=[],se=[];let ke=performance.now(),ve=0;const Oe=new z,Se=G=>{const K=Math.min(.1,(G-ke)/1e3);ke=G,xe+=K;const be=performance.now();let O=0;for(;xe>=ue&&O<12;)Le(),xe-=ue,O++;O===12&&(xe=0);const ie=performance.now()-be;if(O){const Q=A.movedProps();fe[0]=(fe[0]??0)+Q.length/8,F.apply(Q),k.apply(Q,A.propsBase),N.apply(A.rubble(),Y=>A.panel(Y));for(const Y of A.events())if(fe[Y.what]=(fe[Y.what]??0)+1,Y.what===Mn.BLOW)ne.thump(Y.b);else if(Y.what===Mn.GLASS)ne.glass(),B.shatter(Y.a,Y.b);else if(Y.what===Mn.SNAPPED)ne.thump(Y.b*.4);else if(Y.what===Mn.HORN){const Z=H.at.get(Y.a);Z&&ne.horn(Math.hypot(Z.x-$[Ee.POS],Z.z-$[Ee.POS+2]))}else if(Y.what===Mn.WRECK)ne.thump(Y.b*.6);else if(Y.what===Mn.SPLASH)ne.splash(Y.a),I.splash(Y.a),i.toast("in the bay",1600);else if(Y.what===Mn.PANEL){const Z=A.panel(Y.a);Z&&(N.gaveWay(Z,Y.b),ne.thump(Math.min(9,2+Y.b*.2)))}else if(Y.what===Mn.FELL){const Z=o.buildings[Y.a];if(Z){let Me=0,Pe=0;for(const[Ve,at]of Z.r)Me+=Ve,Pe+=at;Me/=Z.r.length,Pe/=Z.r.length;let Ue=0;for(const[Ve,at]of Z.r)Ue=Math.max(Ue,Math.hypot(Ve-Me,at-Pe));N.fell(Y.a,{x:Me,z:Pe,r:Ue,y:Z.y0,high:Z.y1-Z.y0})}ne.thump(9),i.toast("a building came down",2200)}else Y.what===Mn.CAME_OFF&&(ne.thump(4),i.toast(Y.a>=10?"a wheel came off":`the ${["","bonnet","boot lid","front bumper","rear bumper","left door","right door"][Y.a]??"panel"} came off`,1800))}const oe=xe/ue;for(let Q=0;Q<de;Q++)j[Q]=pe[Q]+($[Q]-pe[Q])*oe;for(let Q=0;Q<4;Q++){const Y=Ee.WHEELS+Q*Ee.WHEEL_STRIDE+Ee.W_ANGLE;Math.abs($[Y]-pe[Y])>3&&(j[Y]=$[Y])}if(st){for(let Q=0;Q<4;Q++)j[Ee.CRUSH+Q]=st[Q];j[Ee.POWER]=st[4]}if(T&&O){const Q=$[Ee.SOFT_AWAKE]>.5;if(Q||P){const Y=A.softNow();I.soft(Y.nodes,$[Ee.HOLDS],Y.loose),P=Q||Y.loose.length>0}}if(I.update(j,Ae.brake>0&&$[Ee.GEAR]>0,K),d.update(j,K),et){const Q=new z(j[Ee.POS],j[Ee.POS+1],j[Ee.POS+2]),Y=new Zt(j[Ee.ROT],j[Ee.ROT+1],j[Ee.ROT+2],j[Ee.ROT+3]).normalize();d.camera.position.set(...et).applyQuaternion(Y).add(Q),d.camera.lookAt(Q.x,Q.y+.2,Q.z),d.camera.fov=50,d.camera.updateProjectionMatrix()}C&&(d.camera.position.set(C[0][0],C[0][1],C[0][2]),d.camera.lookAt(C[1][0],C[1][1],C[1][2]),d.camera.fov=62,d.camera.updateProjectionMatrix()),m.update(d.camera.position),F.update(d.camera.position),x.update(d.camera.position),B.update(K,d.camera.position),k.update(d.camera.position),N.update(K);{const Q=A.traffic();H.update(Q.cars,Q.count,K,d.camera.position)}Oe.set(j[Ee.POS],j[Ee.POS+1],j[Ee.POS+2]),u.follow(Oe,d.camera.position),ne.update($,Ae.throttle/1e3),i.update($,ce.ticks*ue,!!we),$[Ee.DROWNED]>.5&&$[Ee.FLOOD]>.98&&Math.abs($[Ee.SPEED])<.6?(ze+=K,ze>3.5&&!we&&(ze=0,L(),i.toast("sunk. back on the road",2400))):ze=0;{const Q=new Zt(j[Ee.ROT],j[Ee.ROT+1],j[Ee.ROT+2],j[Ee.ROT+3]).normalize(),Y=new z(0,0,-1).applyQuaternion(Q);S.update(j[Ee.POS],j[Ee.POS+2],Math.atan2(Y.x,-Y.z),j[Ee.SPEED],K);const Z=S.target;if(Z&&Math.hypot(Z.x-j[Ee.POS],Z.z-j[Ee.POS+2])<Y1){ce.ticks<re&&(re=0);const Me=(ce.ticks-re)*ue;i.toast(`there: ${Z.label}, ${Math.floor(Me/60)}:${(Me%60).toFixed(1).padStart(4,"0")} from setting it`,3200),S.setTarget(null)}}if(u.draw(d.camera),le.push(K*1e3),se.push(ie),le.length>600&&(le.shift(),se.shift()),ve+=K,ge&&ve>1){ve=0;const Q=N.counts();i.report(`${Rh(le,se,u,d.camera,F.counts)}
walls: ${A.count(jt.WALLS)} stood as ${A.count(jt.WALL_COLLIDERS)} slabs; ${A.count(jt.BROKEN)} panels gone, ${A.count(jt.FALLEN)} buildings down; bodies ${A.count(jt.AWAKE)} awake of ${A.count(jt.BODIES)}; drawn ${Q.pieces} pieces, ${Q.parts} parts, ${Q.breached} buildings with holes`)}requestAnimationFrame(Se)};requestAnimationFrame(Se);let he=null,ye=0,Xe=null;$1&&(window.__p2p={ready:!0,page:o,made:e,scene:u.scene,state:()=>Array.from($),tick:()=>ce.ticks,digest:()=>A.digest(),drive:G=>{ee.override=G},advance:G=>{for(let K=0;K<G;K++)Le()},restart:L,startReplay:Te,place:(G,K,be)=>{A.place(G,K,be),A.read($),pe.set($),d.cut()},placeAt:(G,K,be,O)=>{A.placeAt(G,K,be,O),A.read($),pe.set($),d.cut()},seen:()=>({moved:fe[0],blows:fe[Mn.BLOW],snapped:fe[Mn.SNAPPED],glass:fe[Mn.GLASS],panels:fe[Mn.PANEL]??0,fell:fe[Mn.FELL]??0}),panel:G=>A.panel(G),panelCount:()=>A.panelCount,panelsOf:G=>{(!he||Xe!==A)&&(he=new Map,ye=0,Xe=A);for(let K=ye;K<A.panelCount;K++){const be=A.panel(K);let O=he.get(be.building);O||he.set(be.building,O=[]),O.push(K)}return ye=A.panelCount,(he.get(G)??[]).map(K=>A.panel(K))},panelKinds:()=>Ya(n),inside:G=>A.inside(G),insideDrawn:G=>k.drawn(G),roomKinds:()=>Oc(n),propKindNames:()=>kc(n),insides:()=>({sim:{planned:A.count(jt.PLANNED),partitions:A.count(jt.PARTITIONS),held:A.count(jt.HELD),things:A.count(jt.THINGS),armed:A.count(jt.ARMED),own:A.count(jt.OWN)},drawn:k.counts()}),propOrigin:G=>A.propOrigin(G),propsBase:()=>A.propsBase,walls:()=>({sim:{bodies:A.count(jt.BODIES),awake:A.count(jt.AWAKE),walls:A.count(jt.WALLS),colliders:A.count(jt.WALL_COLLIDERS),pieces:A.count(jt.PIECES),parts:A.count(jt.PARTS),broken:A.count(jt.BROKEN),fallen:A.count(jt.FALLEN)},drawn:N.counts()}),replaying:()=>!!we,camera:G=>{d.mode=G,d.cut()},cars:()=>y.map(G=>G.name),car:G=>ae(G),traffic:()=>{const G=A.traffic(),K=[];for(let be=0;be<G.count;be++){const O=be*dr,ie=G.cars;K.push({i:ie[O+Yt.INDEX],x:ie[O+Yt.POS],y:ie[O+Yt.POS+1],z:ie[O+Yt.POS+2],speed:ie[O+Yt.SPEED],flags:ie[O+Yt.FLAGS],kind:ie[O+Yt.KIND],name:V[ie[O+Yt.KIND]]?.name??"?",curve:ie[O+Yt.CURVE]})}return K},map:{toggle:G=>S.toggle(G),zoom:G=>S.setZoom(G),tap:(G,K)=>S.tap(G,K),clear:()=>S.setTarget(null),state:()=>S.probe()},show:G=>{st=G},look:G=>{et=G},view:(G,K)=>{C=G&&K?[G,K]:null},ground:(G,K)=>c.at(G,K),selftest:G=>Dl(n.p2p_selftest(G)),frames:()=>Rh(le,se,u,d.camera,F.counts),info:()=>({calls:u.renderer.info.render.calls,triangles:u.renderer.info.render.triangles}),programs:()=>(u.renderer.info.programs??[]).map(G=>{const K=G;return K.name?`${K.type} (${K.name})`:K.type}),face:G=>A.face(G),mark:G=>w.mark(G),faces:()=>({...w.faces(),buildMs:D}),project:(G,K,be)=>{const O=new z(G,K,be).project(d.camera);if(O.z<-1||O.z>1)return null;const ie=u.renderer.domElement;return[(O.x*.5+.5)*ie.clientWidth,(.5-O.y*.5)*ie.clientHeight]}})}function fo(i,e){return i[Math.min(i.length-1,Math.floor(i.length*e))]??0}function j1(i,e){const t=new oa().setFromProjectionMatrix(new Rt().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)),n=new Si,s=[];for(const r of i.scene.children){if(!r.name)continue;let a=0,o=0;r.traverseVisible(l=>{const c=l;if(!c.isMesh)return;const h=l,f=h.isInstancedMesh?h.boundingSphere:c.geometry.boundingSphere;if(f&&(n.copy(f).applyMatrix4(c.matrixWorld),!t.intersectsSphere(n)))return;const u=c.geometry,d=(u.index?u.index.count:u.getAttribute("position").count)/3;a+=d*(h.isInstancedMesh?h.count:1),o++}),s.push(`${r.name} ${Math.round(a/1e3)}k/${o}`)}return s.join(", ")}function Rh(i,e,t,n,s){const r=[...i].sort((c,h)=>c-h),a=[...e].sort((c,h)=>c-h),o=t.renderer.info.render,l=t.renderer.getDrawingBufferSize(new Je);return[`frames (last ${i.length}): median ${fo(r,.5).toFixed(1)} ms, 95th ${fo(r,.95).toFixed(1)}, worst ${(r[r.length-1]??0).toFixed(1)}`,`sim a frame: median ${fo(a,.5).toFixed(2)} ms, worst ${(a[a.length-1]??0).toFixed(2)}`,`drawn: ${o.triangles.toLocaleString()} triangles in ${o.calls} calls (shadow pass included), ${l.x} x ${l.y} px (dpr ${t.knobs.dpr}), shadows ${t.knobs.shadows?"on":"off"}`,`in view, thousand triangles / meshes: ${j1(t,n)}`,`props: ${Object.entries(s).map(([c,h])=>`${h} ${c}`).join(", ")}`,navigator.userAgent].join(`
`)}async function Z1(i,e){e.report("running the reference drive…"),await dl(),await dl();let t=null;try{const l=await fetch(`./core/selftest.json${xs}`);l.ok&&(t=await l.json())}catch{}const n=t?.ticks??12e3,s=performance.now(),r=Dl(i.p2p_selftest(n)),a=performance.now()-s,o=t?r===t.digest?"SAME as the build machine: this device runs the same race":"DIFFERENT from the build machine: please send this text":"no reference digest shipped with this build";e.report([`reference drive, ${n} ticks (${(n/i.p2p_tick_rate()).toFixed(0)} s of driving)`,`this device: ${r}`,`reference:   ${t?.digest??"none"}${t?` (${t.made})`:""}`,o,`${a.toFixed(0)} ms: ${(a/n*1e3).toFixed(1)} µs a tick, one car, world build included`,navigator.userAgent].join(`
`))}K1().catch(i=>{console.error(i);const e=document.getElementById("loading-step");if(e){if(e.className="err",e.textContent=`could not start: ${i instanceof Error?i.message:String(i)}`,mf(Xn)){const t=document.createElement("a");t.href=ll(null),t.textContent="back to San Francisco",t.style.cssText="color:#f2f0ea;pointer-events:auto",e.after(t)}}else document.body.insertAdjacentHTML("beforeend",`<div style="position:fixed;inset:auto 8px 8px 8px;z-index:99;background:#400;color:#fff;padding:8px;border-radius:8px">${String(i)}</div>`)});
