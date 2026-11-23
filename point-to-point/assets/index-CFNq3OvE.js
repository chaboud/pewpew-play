(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="180",Pf=0,Bl=1,Df=2,Uh=1,Nh=2,ri=3,Si=0,wn=1,ln=2,Mi=0,vs=1,po=2,Hl=3,Gl=4,If=5,zi=100,Ff=101,Uf=102,Nf=103,zf=104,Of=200,kf=201,Bf=202,Hf=203,mo=204,go=205,Gf=206,Vf=207,Wf=208,qf=209,Xf=210,$f=211,Yf=212,Kf=213,jf=214,xo=0,vo=1,_o=2,Ms=3,yo=4,wo=5,Mo=6,bo=7,xl=0,Zf=1,Jf=2,bi=0,Qf=1,eu=2,tu=3,zh=4,nu=5,iu=6,su=7,Oh=300,bs=301,Ss=302,So=303,Eo=304,oa=306,Ao=1e3,ki=1001,To=1002,un=1003,ru=1004,xr=1005,En=1006,ga=1007,oi=1008,Zn=1009,kh=1010,Bh=1011,ir=1012,vl=1013,Ei=1014,Nn=1015,Vi=1016,_l=1017,yl=1018,sr=1020,Hh=35902,Gh=35899,Vh=1021,Wh=1022,yn=1023,rr=1026,ar=1027,_s=1028,wl=1029,qh=1030,Ml=1031,bl=1033,Kr=33776,jr=33777,Zr=33778,Jr=33779,Ro=35840,Co=35841,Lo=35842,Po=35843,Do=36196,Io=37492,Fo=37496,Uo=37808,No=37809,zo=37810,Oo=37811,ko=37812,Bo=37813,Ho=37814,Go=37815,Vo=37816,Wo=37817,qo=37818,Xo=37819,$o=37820,Yo=37821,Ko=36492,jo=36494,Zo=36495,Jo=36283,Qo=36284,el=36285,tl=36286,au=3200,Xh=3201,Sl=0,ou=1,Vn="",fn="srgb",Es="srgb-linear",sa="linear",Bt="srgb",ji=7680,Vl=519,lu=512,cu=513,hu=514,$h=515,fu=516,uu=517,du=518,pu=519,Wl=35044,As=35048,ql="300 es",Kn=2e3,ra=2001;class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xa=Math.PI/180,nl=180/Math.PI;function gr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function mu(i,e){return(i%e+e)%e}function va(i,e,t){return(1-t)*i+t*e}function zs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],m=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(u!==m||l!==f||c!==d||h!==g){let x=1-o;const p=l*f+c*d+h*g+u*m,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),M=Math.atan2(E,p*y);x=Math.sin(x*M)/E,o=Math.sin(o*M)/E}const v=o*y;if(l=l*x+f*v,c=c*x+d*v,h=h*x+g*v,u=u*x+m*v,x===1-o){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new O,Xl=new Qt;class vt{constructor(e,t,n,s,r,a,o,l,c){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],m=s[0],x=s[3],p=s[6],y=s[1],_=s[4],v=s[7],E=s[2],M=s[5],R=s[8];return r[0]=a*m+o*y+l*E,r[3]=a*x+o*_+l*M,r[6]=a*p+o*v+l*R,r[1]=c*m+h*y+u*E,r[4]=c*x+h*_+u*M,r[7]=c*p+h*v+u*R,r[2]=f*m+d*y+g*E,r[5]=f*x+d*_+g*M,r[8]=f*p+d*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(s*c-h*n)*m,e[2]=(o*n-s*a)*m,e[3]=f*m,e[4]=(h*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new vt;function Yh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gu(){const i=or("canvas");return i.style.display="block",i}const $l={};function lr(i){i in $l||($l[i]=!0,console.warn(i))}function xu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Yl=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vu(){const i={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Bt&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Bt&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Es]:{primaries:e,whitePoint:n,transfer:sa,toXYZ:Yl,fromXYZ:Kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:Bt,toXYZ:Yl,fromXYZ:Kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}const Dt=vu();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class _u{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zi===void 0&&(Zi=or("canvas")),Zi.width=e.width,Zi.height=e.height;const s=Zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yu=0;class El{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wa(s[a].image)):r.push(wa(s[a]))}else r=wa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_u.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wu=0;const Ma=new O;class dn extends Is{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=ki,s=ki,r=En,a=oi,o=yn,l=Zn,c=dn.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=gr(),this.name="",this.source=new El(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ao:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ao:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Oh;dn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,s=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],m=l[2],x=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(g+x)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(d+1)/2,E=(p+1)/2,M=(h+f)/4,R=(u+m)/4,P=(g+x)/4;return _>v&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=M/n,r=R/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=P/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=P/r),this.set(n,s,r,t),this}let y=Math.sqrt((x-g)*(x-g)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(x-g)/y,this.y=(u-m)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mu extends Is{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new dn(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new El(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Mu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kh extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bu extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),_r.subVectors(this.max,Os),Ji.subVectors(e.a,Os),Qi.subVectors(e.b,Os),es.subVectors(e.c,Os),ui.subVectors(Qi,Ji),di.subVectors(es,Qi),Ri.subVectors(Ji,es);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ri.z,Ri.y,ui.z,0,-ui.x,di.z,0,-di.x,Ri.z,0,-Ri.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ri.y,Ri.x,0];return!ba(t,Ji,Qi,es,_r)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,Ji,Qi,es,_r))?!1:(yr.crossVectors(ui,di),t=[yr.x,yr.y,yr.z],ba(t,Ji,Qi,es,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qn=[new O,new O,new O,new O,new O,new O,new O,new O],kn=new O,vr=new $i,Ji=new O,Qi=new O,es=new O,ui=new O,di=new O,Ri=new O,Os=new O,_r=new O,yr=new O,Ci=new O;function ba(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Su=new $i,ks=new O,Sa=new O;class fi{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Su.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Sa)),this.expandByPoint(ks.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ei=new O,Ea=new O,wr=new O,pi=new O,Aa=new O,Mr=new O,Ta=new O;class Eu{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ea.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Ea);const r=e.distanceTo(t)*.5,a=-this.direction.dot(wr),o=pi.dot(this.direction),l=-pi.dot(wr),c=pi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const m=1/h;u*=m,f*=m,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ea).addScaledVector(wr,f),d}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,s,r){Aa.subVectors(t,e),Mr.subVectors(n,e),Ta.crossVectors(Aa,Mr);let a=this.direction.dot(Ta),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,e);const l=o*this.direction.dot(Mr.crossVectors(pi,Mr));if(l<0)return null;const c=o*this.direction.dot(Aa.cross(pi));if(c<0||l+c>a)return null;const h=-o*pi.dot(Ta);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,s,r,a,o,l,c,h,u,f,d,g,m,x){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,m,x)}set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,m,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=m,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-m*c,t[9]=-o*l,t[2]=m-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,m=c*u;t[0]=f+m*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=m+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,m=c*u;t[0]=f-m*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=m-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,m=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+m,t[1]=l*u,t[5]=m*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,m=o*c;t[0]=l*h,t[4]=m-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-m*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+m,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Au,e,Tu)}lookAt(e,t,n){const s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),mi.crossVectors(n,An),mi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),mi.crossVectors(n,An)),mi.normalize(),br.crossVectors(An,mi),s[0]=mi.x,s[4]=br.x,s[8]=An.x,s[1]=mi.y,s[5]=br.y,s[9]=An.y,s[2]=mi.z,s[6]=br.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],m=n[6],x=n[10],p=n[14],y=n[3],_=n[7],v=n[11],E=n[15],M=s[0],R=s[4],P=s[8],w=s[12],b=s[1],U=s[5],N=s[9],L=s[13],k=s[2],z=s[6],F=s[10],I=s[14],D=s[3],V=s[7],B=s[11],ee=s[15];return r[0]=a*M+o*b+l*k+c*D,r[4]=a*R+o*U+l*z+c*V,r[8]=a*P+o*N+l*F+c*B,r[12]=a*w+o*L+l*I+c*ee,r[1]=h*M+u*b+f*k+d*D,r[5]=h*R+u*U+f*z+d*V,r[9]=h*P+u*N+f*F+d*B,r[13]=h*w+u*L+f*I+d*ee,r[2]=g*M+m*b+x*k+p*D,r[6]=g*R+m*U+x*z+p*V,r[10]=g*P+m*N+x*F+p*B,r[14]=g*w+m*L+x*I+p*ee,r[3]=y*M+_*b+v*k+E*D,r[7]=y*R+_*U+v*z+E*V,r[11]=y*P+_*N+v*F+E*B,r[15]=y*w+_*L+v*I+E*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],m=e[7],x=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+m*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+x*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],m=e[13],x=e[14],p=e[15],y=u*x*c-m*f*c+m*l*d-o*x*d-u*l*p+o*f*p,_=g*f*c-h*x*c-g*l*d+a*x*d+h*l*p-a*f*p,v=h*m*c-g*u*c+g*o*d-a*m*d-h*o*p+a*u*p,E=g*u*l-h*m*l-g*o*f+a*m*f+h*o*x-a*u*x,M=t*y+n*_+s*v+r*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/M;return e[0]=y*R,e[1]=(m*f*r-u*x*r-m*s*d+n*x*d+u*s*p-n*f*p)*R,e[2]=(o*x*r-m*l*r+m*s*c-n*x*c-o*s*p+n*l*p)*R,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*R,e[4]=_*R,e[5]=(h*x*r-g*f*r+g*s*d-t*x*d-h*s*p+t*f*p)*R,e[6]=(g*l*r-a*x*r-g*s*c+t*x*c+a*s*p-t*l*p)*R,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*R,e[8]=v*R,e[9]=(g*u*r-h*m*r-g*n*d+t*m*d+h*n*p-t*u*p)*R,e[10]=(a*m*r-g*o*r+g*n*c-t*m*c-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*R,e[12]=E*R,e[13]=(h*m*s-g*u*s+g*n*f-t*m*f-h*n*x+t*u*x)*R,e[14]=(g*o*s-a*m*s-g*n*l+t*m*l+a*n*x-t*o*x)*R,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,m=a*h,x=a*u,p=o*u,y=l*c,_=l*h,v=l*u,E=n.x,M=n.y,R=n.z;return s[0]=(1-(m+p))*E,s[1]=(d+v)*E,s[2]=(g-_)*E,s[3]=0,s[4]=(d-v)*M,s[5]=(1-(f+p))*M,s[6]=(x+y)*M,s[7]=0,s[8]=(g+_)*R,s[9]=(x-y)*R,s[10]=(1-(f+m))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const a=ts.set(s[4],s[5],s[6]).length(),o=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bn.copy(this);const c=1/r,h=1/a,u=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,t.setFromRotationMatrix(Bn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Kn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let g,m;if(l)g=r/(a-r),m=a*r/(a-r);else if(o===Kn)g=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===ra)g=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Kn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,m;if(l)g=1/(a-r),m=a/(a-r);else if(o===Kn)g=-2/(a-r),m=-(a+r)/(a-r);else if(o===ra)g=-1/(a-r),m=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ts=new O,Bn=new It,Au=new O(0,0,0),Tu=new O(1,1,1),mi=new O,br=new O,An=new O,jl=new It,Zl=new Qt;class On{constructor(e=0,t=0,n=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ru=0;const Jl=new O,ns=new Qt,ti=new It,Sr=new O,Bs=new O,Cu=new O,Lu=new Qt,Ql=new O(1,0,0),ec=new O(0,1,0),tc=new O(0,0,1),nc={type:"added"},Pu={type:"removed"},is={type:"childadded",child:null},Ra={type:"childremoved",child:null};class pn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new O,t=new On,n=new Qt,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new vt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Bs,Sr,this.up):ti.lookAt(Sr,Bs,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(ti),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nc),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pu),Ra.child=e,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nc),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Cu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}pn.DEFAULT_UP=new O(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new O,ni=new O,Ca=new O,ii=new O,ss=new O,rs=new O,ic=new O,La=new O,Pa=new O,Da=new O,Ia=new Et,Fa=new Et,Ua=new Et;class Wn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),ni.subVectors(n,t),Ca.subVectors(e,t);const a=Hn.dot(Hn),o=Hn.dot(ni),l=Hn.dot(Ca),c=ni.dot(ni),h=ni.dot(Ca),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ia.setScalar(0),Fa.setScalar(0),Ua.setScalar(0),Ia.fromBufferAttribute(e,t),Fa.fromBufferAttribute(e,n),Ua.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ia,r.x),a.addScaledVector(Fa,r.y),a.addScaledVector(Ua,r.z),a}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),ni.subVectors(e,t),Hn.cross(ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Hn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ss.subVectors(s,n),rs.subVectors(r,n),La.subVectors(e,n);const l=ss.dot(La),c=rs.dot(La);if(l<=0&&c<=0)return t.copy(n);Pa.subVectors(e,s);const h=ss.dot(Pa),u=rs.dot(Pa);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ss,a);Da.subVectors(e,r);const d=ss.dot(Da),g=rs.dot(Da);if(g>=0&&d<=g)return t.copy(r);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(rs,o);const x=h*g-d*u;if(x<=0&&u-h>=0&&d-g>=0)return ic.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(ic,o);const p=1/(x+m+f);return a=m*p,o=f*p,t.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Na(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Dt.workingColorSpace){if(e=mu(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Na(a,r,e+1/3),this.g=Na(a,r,e),this.b=Na(a,r,e-1/3)}return Dt.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const n=Zh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Dt.workingToColorSpace(gn.copy(this),e),Math.round(St(gn.r*255,0,255))*65536+Math.round(St(gn.g*255,0,255))*256+Math.round(St(gn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.workingToColorSpace(gn.copy(this),t);const n=gn.r,s=gn.g,r=gn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Dt.workingColorSpace){return Dt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=fn){Dt.workingToColorSpace(gn.copy(this),e);const t=gn.r,n=gn.g,s=gn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Er);const n=va(gi.h,Er.h,t),s=va(gi.s,Er.s,t),r=va(gi.l,Er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Qe;Qe.NAMES=Zh;let Du=0;class Fs extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=vs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=go,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mo&&(n.blendSrc=this.blendSrc),this.blendDst!==go&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Us extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new O,Ar=new rt;let Iu=0;class dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array),s=bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array),s=bn(s,this.array),r=bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),e}}class Ts extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Al extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fu=0;const Pn=new It,za=new pn,as=new O,Tn=new $i,Hs=new $i,on=new O;class Nt extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yh(e)?Al:Ts)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Tn.min,Hs.min),Tn.expandByPoint(on),on.addVectors(Tn.max,Hs.max),Tn.expandByPoint(on)):(Tn.expandByPoint(Hs.min),Tn.expandByPoint(Hs.max))}Tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)on.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(e,c),on.add(as)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new O,l[P]=new O;const c=new O,h=new O,u=new O,f=new rt,d=new rt,g=new rt,m=new O,x=new O;function p(P,w,b){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(U),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(U),o[P].add(m),o[w].add(m),o[b].add(m),l[P].add(x),l[w].add(x),l[b].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,w=y.length;P<w;++P){const b=y[P],U=b.start,N=b.count;for(let L=U,k=U+N;L<k;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const _=new O,v=new O,E=new O,M=new O;function R(P){E.fromBufferAttribute(s,P),M.copy(E);const w=o[P];_.copy(w),_.sub(E.multiplyScalar(E.dot(w))).normalize(),v.crossVectors(M,w);const U=v.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,U)}for(let P=0,w=y.length;P<w;++P){const b=y[P],U=b.start,N=b.count;for(let L=U,k=U+N;L<k;L+=3)R(e.getX(L+0)),R(e.getX(L+1)),R(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),m=e.getX(f+1),x=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,x),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let m=0,x=l.length;m<x;m++){o.isInterleavedBufferAttribute?d=l[m]*o.data.stride+o.offset:d=l[m]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new dt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new It,Li=new Eu,Tr=new fi,rc=new O,Rr=new O,Cr=new O,Lr=new O,Oa=new O,Pr=new O,ac=new O,Dr=new O;class Ct extends pn{constructor(e=new Nt,t=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Oa.fromBufferAttribute(u,e),a?Pr.addScaledVector(Oa,h):Pr.addScaledVector(Oa.sub(t),h))}t.add(Pr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(Tr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Tr,rc)===null||Li.origin.distanceToSquared(rc)>(e.far-e.near)**2))&&(sc.copy(r).invert(),Li.copy(e.ray).applyMatrix4(sc),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,m=f.length;g<m;g++){const x=f[g],p=a[x.materialIndex],y=Math.max(x.start,d.start),_=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,E=_;v<E;v+=3){const M=o.getX(v),R=o.getX(v+1),P=o.getX(v+2);s=Ir(this,p,e,n,c,h,u,M,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let x=g,p=m;x<p;x+=3){const y=o.getX(x),_=o.getX(x+1),v=o.getX(x+2);s=Ir(this,a,e,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,m=f.length;g<m;g++){const x=f[g],p=a[x.materialIndex],y=Math.max(x.start,d.start),_=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,E=_;v<E;v+=3){const M=v,R=v+1,P=v+2;s=Ir(this,p,e,n,c,h,u,M,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let x=g,p=m;x<p;x+=3){const y=x,_=x+1,v=x+2;s=Ir(this,a,e,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Uu(i,e,t,n,s,r,a,o){let l;if(e.side===wn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Si,o),l===null)return null;Dr.copy(o),Dr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:i}}function Ir(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Rr),i.getVertexPosition(l,Cr),i.getVertexPosition(c,Lr);const h=Uu(i,e,t,n,Rr,Cr,Lr,ac);if(h){const u=new O;Wn.getBarycoord(ac,Rr,Cr,Lr,u),s&&(h.uv=Wn.getInterpolatedAttribute(s,o,l,c,u,new rt)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,o,l,c,u,new rt)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};Wn.getNormal(Rr,Cr,Lr,f.normal),h.face=f,h.barycoord=u}return h}class Yi extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(u,2));function g(m,x,p,y,_,v,E,M,R,P,w){const b=v/R,U=E/P,N=v/2,L=E/2,k=M/2,z=R+1,F=P+1;let I=0,D=0;const V=new O;for(let B=0;B<F;B++){const ee=B*U-L;for(let ne=0;ne<z;ne++){const we=ne*b-N;V[m]=we*y,V[x]=ee*_,V[p]=k,c.push(V.x,V.y,V.z),V[m]=0,V[x]=0,V[p]=M>0?1:-1,h.push(V.x,V.y,V.z),u.push(ne/R),u.push(1-B/P),I+=1}}for(let B=0;B<P;B++)for(let ee=0;ee<R;ee++){const ne=f+ee+z*B,we=f+ee+z*(B+1),_e=f+(ee+1)+z*(B+1),Te=f+(ee+1)+z*B;l.push(ne,we,Te),l.push(we,_e,Te),D+=6}o.addGroup(d,D,w),d+=D,f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function _n(i){const e={};for(let t=0;t<i.length;t++){const n=Rs(i[t]);for(const s in n)e[s]=n[s]}return e}function Nu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const zu={clone:Rs,merge:_n};var Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Nu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qh extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new O,oc=new rt,lc=new rt;class Un extends Qh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,oc,lc),t.subVectors(lc,oc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const os=-90,ls=1;class Bu extends pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Un(os,ls,e,t);s.layers=this.layers,this.add(s);const r=new Un(os,ls,e,t);r.layers=this.layers,this.add(r);const a=new Un(os,ls,e,t);a.layers=this.layers,this.add(a);const o=new Un(os,ls,e,t);o.layers=this.layers,this.add(o);const l=new Un(os,ls,e,t);l.layers=this.layers,this.add(l);const c=new Un(os,ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ef extends dn{constructor(e=[],t=bs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hu extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ef(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yi(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:Mi});r.uniforms.tEquirect.value=t;const a=new Ct(s,r),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=En),new Bu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class en extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gu={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const x=t.getJointPose(m,n),p=this._getHandJoint(c,m);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=t}clone(){return new Tl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class il extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wi extends dn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=un,h=un,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn extends dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new It,cc=new It,Fr=[],hc=new $i,Vu=new It,Gs=new Ct,Vs=new fi;class qi extends Ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),hc.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(hc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),Vs.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),cc.multiplyMatrices(n,cs),Gs.matrixWorld=cc,Gs.raycast(e,Fr);for(let a=0,o=Fr.length;a<o;a++){const l=Fr[a];l.instanceId=r,l.object=this,t.push(l)}Fr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wi(new Float32Array(s*this.count),s,this.count,_s,Nn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ba=new O,Wu=new O,qu=new vt;class Ui{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ba.subVectors(n,t).cross(Wu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qu.getNormalMatrix(e),s=this.coplanarPoint(Ba).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new fi,Xu=new rt(.5,.5),Ur=new O;class la{constructor(e=new Ui,t=new Ui,n=new Ui,s=new Ui,r=new Ui,a=new Ui){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],m=r[9],x=r[10],p=r[11],y=r[12],_=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-a,d-h,p-g,E-y).normalize(),s[1].setComponents(c+a,d+h,p+g,E+y).normalize(),s[2].setComponents(c+o,d+u,p+m,E+_).normalize(),s[3].setComponents(c-o,d-u,p-m,E-_).normalize(),n)s[4].setComponents(l,f,x,v).normalize(),s[5].setComponents(c-l,d-f,p-x,E-v).normalize();else if(s[4].setComponents(c-l,d-f,p-x,E-v).normalize(),t===Kn)s[5].setComponents(c+l,d+f,p+x,E+v).normalize();else if(t===ra)s[5].setComponents(l,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=Xu.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ur.x=s.normal.x>0?e.max.x:e.min.x,Ur.y=s.normal.y>0?e.max.y:e.min.y,Ur.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $u extends dn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rl extends dn{constructor(e,t,n=Ei,s,r,a,o=un,l=un,c,h=rr,u=1){if(h!==rr&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new El(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tf extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ca extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const m=[],x=n/2;let p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(d,2));function y(){const v=new O,E=new O;let M=0;const R=(t-e)/n;for(let P=0;P<=r;P++){const w=[],b=P/r,U=b*(t-e)+e;for(let N=0;N<=s;N++){const L=N/s,k=L*l+o,z=Math.sin(k),F=Math.cos(k);E.x=U*z,E.y=-b*n+x,E.z=U*F,u.push(E.x,E.y,E.z),v.set(z,R,F).normalize(),f.push(v.x,v.y,v.z),d.push(L,1-b),w.push(g++)}m.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){const b=m[w][P],U=m[w+1][P],N=m[w+1][P+1],L=m[w][P+1];(e>0||w!==0)&&(h.push(b,U,L),M+=3),(t>0||w!==r-1)&&(h.push(U,N,L),M+=3)}c.addGroup(p,M,0),p+=M}function _(v){const E=g,M=new rt,R=new O;let P=0;const w=v===!0?e:t,b=v===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,x*b,0),f.push(0,b,0),d.push(.5,.5),g++;const U=g;for(let N=0;N<=s;N++){const k=N/s*l+o,z=Math.cos(k),F=Math.sin(k);R.x=w*F,R.y=x*b,R.z=w*z,u.push(R.x,R.y,R.z),f.push(0,b,0),M.x=z*.5+.5,M.y=F*.5*b+.5,d.push(M.x,M.y),g++}for(let N=0;N<s;N++){const L=E+N,k=U+N;v===!0?h.push(k,k+1,L):h.push(k+1,k,L),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}function Yu(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=nf(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Qu(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){const d=i[f],g=i[f+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return cr(r,a,t,o,l,c,0),a}function nf(i,e,t,n,s){let r;if(s===hd(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=fc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=fc(a/n|0,i[a],i[a+1],r);return r&&Cs(r,r.next)&&(fr(r),r=r.next),r}function Xi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Cs(t,t.next)||Yt(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function cr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&sd(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?ju(i,n,s,r):Ku(i)){e.push(l.i,i.i,c.i),fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Zu(Xi(i),e),cr(i,e,t,n,s,r,2)):a===2&&Ju(i,e,t,n,s,r):cr(Xi(i),e,t,n,s,r,1);break}}}function Ku(i){const e=i.prev,t=i,n=i.next;if(Yt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Js(s,o,r,l,a,c,g.x,g.y)&&Yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ju(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Yt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),g=Math.min(h,u,f),m=Math.max(o,l,c),x=Math.max(h,u,f),p=sl(d,g,e,t,n),y=sl(m,x,e,t,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=x&&_!==s&&_!==a&&Js(o,h,l,u,c,f,_.x,_.y)&&Yt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=m&&v.y>=g&&v.y<=x&&v!==s&&v!==a&&Js(o,h,l,u,c,f,v.x,v.y)&&Yt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=x&&_!==s&&_!==a&&Js(o,h,l,u,c,f,_.x,_.y)&&Yt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=m&&v.y>=g&&v.y<=x&&v!==s&&v!==a&&Js(o,h,l,u,c,f,v.x,v.y)&&Yt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Zu(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Cs(n,s)&&rf(n,t,t.next,s)&&hr(n,s)&&hr(s,n)&&(e.push(n.i,t.i,s.i),fr(t),fr(t.next),t=i=s),t=t.next}while(t!==i);return Xi(t)}function Ju(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&od(a,o)){let l=af(a,o);a=Xi(a,a.next),l=Xi(l,l.next),cr(a,e,t,n,s,r,0),cr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Qu(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=nf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ad(c))}s.sort(ed);for(let r=0;r<s.length;r++)t=td(s[r],t);return t}function ed(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function td(i,e){const t=nd(i,e);if(!t)return e;const n=af(t,i);return Xi(n,n.next),Xi(t,t.next)}function nd(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Cs(i,t))return t;do{if(Cs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&sf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);hr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&id(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function id(i,e){return Yt(i.prev,i,e.prev)<0&&Yt(e.next,i,i.next)<0}function sd(i,e,t,n){let s=i;do s.z===0&&(s.z=sl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rd(s)}function rd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function sl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ad(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Js(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&sf(i,e,t,n,s,r,a,o)}function od(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ld(i,e)&&(hr(i,e)&&hr(e,i)&&cd(i,e)&&(Yt(i.prev,i,e.prev)||Yt(i,e.prev,e))||Cs(i,e)&&Yt(i.prev,i,i.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Cs(i,e){return i.x===e.x&&i.y===e.y}function rf(i,e,t,n){const s=zr(Yt(i,e,t)),r=zr(Yt(i,e,n)),a=zr(Yt(t,n,i)),o=zr(Yt(t,n,e));return!!(s!==r&&a!==o||s===0&&Nr(i,t,e)||r===0&&Nr(i,n,e)||a===0&&Nr(t,i,n)||o===0&&Nr(t,e,n))}function Nr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function zr(i){return i>0?1:i<0?-1:0}function ld(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&rf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function hr(i,e){return Yt(i.prev,i,i.next)<0?Yt(i,e,i.next)>=0&&Yt(i,i.prev,e)>=0:Yt(i,e,i.prev)<0||Yt(i,i.next,e)<0}function cd(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function af(i,e){const t=rl(i.i,i.x,i.y),n=rl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function fc(i,e,t,n){const s=rl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hd(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class fd{static triangulate(e,t,n=2){return Yu(e,t,n)}}class Ls{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Ls.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];uc(e),dc(n,e);let a=e.length;t.forEach(uc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,dc(n,t[l]);const o=fd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function uc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function dc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ha extends Nt{constructor(e=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=St(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new O,f=new rt,d=new O,g=new O,m=new O;let x=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-x,d.z=p*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-x,d.z=p*0,g.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(g)}for(let y=0;y<=t;y++){const _=n+y*h*s,v=Math.sin(_),E=Math.cos(_);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*v,u.y=e[M].y,u.z=e[M].x*E,a.push(u.x,u.y,u.z),f.x=y/t,f.y=M/(e.length-1),o.push(f.x,f.y);const R=l[3*M+0]*v,P=l[3*M+1],w=l[3*M+0]*E;c.push(R,P,w)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const v=_+y*e.length,E=v,M=v+e.length,R=v+e.length+1,P=v+1;r.push(E,M,P),r.push(R,P,M)}this.setIndex(r),this.setAttribute("position",new Rt(a,3)),this.setAttribute("uv",new Rt(o,2)),this.setAttribute("normal",new Rt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.points,e.segments,e.phiStart,e.phiLength)}}class Ai extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],m=[],x=[];for(let p=0;p<h;p++){const y=p*f-a;for(let _=0;_<c;_++){const v=_*u-r;g.push(v,-y,0),m.push(0,0,1),x.push(_/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const _=y+c*p,v=y+c*(p+1),E=y+1+c*(p+1),M=y+1+c*p;d.push(_,v,M),d.push(v,E,M)}this.setIndex(d),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(m,3)),this.setAttribute("uv",new Rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cl extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new O,f=new O,d=[],g=[],m=[],x=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const M=E/t;u.x=-e*Math.cos(s+M*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+M*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),x.push(M+v,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=h[p][y+1],v=h[p][y],E=h[p+1][y],M=h[p+1][y+1];(p!==0||a>0)&&d.push(_,v,M),(p!==n-1||l<Math.PI)&&d.push(v,E,M)}this.setIndex(d),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(m,3)),this.setAttribute("uv",new Rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ll extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new O,u=new O,f=new O;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const m=g/s*r,x=d/n*Math.PI*2;u.x=(e+t*Math.cos(x))*Math.cos(m),u.y=(e+t*Math.cos(x))*Math.sin(m),u.z=t*Math.sin(x),o.push(u.x,u.y,u.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const m=(s+1)*d+g-1,x=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(m,x,y),a.push(x,p,y)}this.setIndex(a),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ps extends Fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class of extends Ps{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zn extends Fs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lf extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ud extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ha={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class dd{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const pd=new dd;class Pl{constructor(e){this.manager=e!==void 0?e:pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";const hs=new WeakMap;class md extends Pl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ha.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=hs.get(a);u===void 0&&(u=[],hs.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=or("img");function l(){h(),t&&t(this);const u=hs.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}hs.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ha.remove(`image:${e}`);const f=hs.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(u)}hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ha.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class cf extends Pl{constructor(e){super(e)}load(e,t,n,s){const r=new dn,a=new md(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class hf extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class gd extends hf{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ga=new It,pc=new O,mc=new O;class xd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(pc),mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mc),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dl extends Qh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vd extends xd{constructor(){super(new Dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _d extends hf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new vd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ff extends Nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class yd extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function gc(i,e,t,n){const s=wd(n);switch(t){case Vh:return i*e;case _s:return i*e/s.components*s.byteLength;case wl:return i*e/s.components*s.byteLength;case qh:return i*e*2/s.components*s.byteLength;case Ml:return i*e*2/s.components*s.byteLength;case Wh:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case bl:return i*e*4/s.components*s.byteLength;case Kr:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:case Po:return Math.max(i,16)*Math.max(e,8)/4;case Ro:case Lo:return Math.max(i,8)*Math.max(e,8)/2;case Do:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ko:case jo:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jo:case Qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wd(i){switch(i){case Zn:case kh:return{byteLength:1,components:1};case ir:case Bh:case Vi:return{byteLength:2,components:1};case _l:case yl:return{byteLength:2,components:4};case Ei:case vl:case Nn:return{byteLength:4,components:1};case Hh:case Gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Md(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],m=u[d];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++f,u[f]=m)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const m=u[d];i.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sd=`#ifdef USE_ALPHAHASH
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
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cd=`#ifdef USE_AOMAP
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
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pd=`#ifdef USE_BATCHING
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
#endif`,Dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nd=`#ifdef USE_IRIDESCENCE
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
#endif`,zd=`#ifdef USE_BUMPMAP
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xd=`#define PI 3.141592653589793
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
} // validated`,$d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hp=`#ifdef USE_GRADIENTMAP
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
}`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pp=`uniform bool receiveShadow;
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
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yp=`PhysicalMaterial material;
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
}`,Mp=`
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
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
#endif`,Dp=`#if defined( USE_POINTS_UV )
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
#endif`,Ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Np=`#if defined( USE_MORPHCOLORS )
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
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
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
#endif`,Xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o0=`float getShadowMask() {
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
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,h0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`#include <common>
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
}`,C0=`#if DEPTH_PACKING == 3200
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
}`,L0=`#define DISTANCE
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
}`,P0=`#define DISTANCE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
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
}`,U0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,z0=`uniform vec3 diffuse;
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
}`,O0=`#define LAMBERT
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
}`,k0=`#define LAMBERT
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
}`,B0=`#define MATCAP
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
}`,H0=`#define MATCAP
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
}`,G0=`#define NORMAL
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
}`,V0=`#define NORMAL
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
}`,W0=`#define PHONG
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
}`,q0=`#define PHONG
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
}`,X0=`#define STANDARD
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
}`,$0=`#define STANDARD
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
}`,Y0=`#define TOON
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
}`,K0=`#define TOON
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
}`,j0=`uniform float size;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,Q0=`uniform vec3 color;
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
}`,em=`uniform float rotation;
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
}`,tm=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:bd,alphahash_pars_fragment:Sd,alphamap_fragment:Ed,alphamap_pars_fragment:Ad,alphatest_fragment:Td,alphatest_pars_fragment:Rd,aomap_fragment:Cd,aomap_pars_fragment:Ld,batching_pars_vertex:Pd,batching_vertex:Dd,begin_vertex:Id,beginnormal_vertex:Fd,bsdfs:Ud,iridescence_fragment:Nd,bumpmap_pars_fragment:zd,clipping_planes_fragment:Od,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:Hd,color_fragment:Gd,color_pars_fragment:Vd,color_pars_vertex:Wd,color_vertex:qd,common:Xd,cube_uv_reflection_fragment:$d,defaultnormal_vertex:Yd,displacementmap_pars_vertex:Kd,displacementmap_vertex:jd,emissivemap_fragment:Zd,emissivemap_pars_fragment:Jd,colorspace_fragment:Qd,colorspace_pars_fragment:ep,envmap_fragment:tp,envmap_common_pars_fragment:np,envmap_pars_fragment:ip,envmap_pars_vertex:sp,envmap_physical_pars_fragment:mp,envmap_vertex:rp,fog_vertex:ap,fog_pars_vertex:op,fog_fragment:lp,fog_pars_fragment:cp,gradientmap_pars_fragment:hp,lightmap_pars_fragment:fp,lights_lambert_fragment:up,lights_lambert_pars_fragment:dp,lights_pars_begin:pp,lights_toon_fragment:gp,lights_toon_pars_fragment:xp,lights_phong_fragment:vp,lights_phong_pars_fragment:_p,lights_physical_fragment:yp,lights_physical_pars_fragment:wp,lights_fragment_begin:Mp,lights_fragment_maps:bp,lights_fragment_end:Sp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Rp,map_fragment:Cp,map_pars_fragment:Lp,map_particle_fragment:Pp,map_particle_pars_fragment:Dp,metalnessmap_fragment:Ip,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Up,morphcolor_vertex:Np,morphnormal_vertex:zp,morphtarget_pars_vertex:Op,morphtarget_vertex:kp,normal_fragment_begin:Bp,normal_fragment_maps:Hp,normal_pars_fragment:Gp,normal_pars_vertex:Vp,normal_vertex:Wp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Xp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:Kp,opaque_fragment:jp,packing:Zp,premultiplied_alpha_fragment:Jp,project_vertex:Qp,dithering_fragment:e0,dithering_pars_fragment:t0,roughnessmap_fragment:n0,roughnessmap_pars_fragment:i0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:r0,shadowmap_vertex:a0,shadowmask_pars_fragment:o0,skinbase_vertex:l0,skinning_pars_vertex:c0,skinning_vertex:h0,skinnormal_vertex:f0,specularmap_fragment:u0,specularmap_pars_fragment:d0,tonemapping_fragment:p0,tonemapping_pars_fragment:m0,transmission_fragment:g0,transmission_pars_fragment:x0,uv_pars_fragment:v0,uv_pars_vertex:_0,uv_vertex:y0,worldpos_vertex:w0,background_vert:M0,background_frag:b0,backgroundCube_vert:S0,backgroundCube_frag:E0,cube_vert:A0,cube_frag:T0,depth_vert:R0,depth_frag:C0,distanceRGBA_vert:L0,distanceRGBA_frag:P0,equirect_vert:D0,equirect_frag:I0,linedashed_vert:F0,linedashed_frag:U0,meshbasic_vert:N0,meshbasic_frag:z0,meshlambert_vert:O0,meshlambert_frag:k0,meshmatcap_vert:B0,meshmatcap_frag:H0,meshnormal_vert:G0,meshnormal_frag:V0,meshphong_vert:W0,meshphong_frag:q0,meshphysical_vert:X0,meshphysical_frag:$0,meshtoon_vert:Y0,meshtoon_frag:K0,points_vert:j0,points_frag:Z0,shadow_vert:J0,shadow_frag:Q0,sprite_vert:em,sprite_frag:tm},Oe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Yn={basic:{uniforms:_n([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:_n([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:_n([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:_n([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:_n([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:_n([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:_n([Oe.points,Oe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:_n([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:_n([Oe.common,Oe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:_n([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:_n([Oe.sprite,Oe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:_n([Oe.common,Oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:_n([Oe.lights,Oe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Yn.physical={uniforms:_n([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Or={r:0,b:0,g:0},Di=new On,nm=new It;function im(i,e,t,n,s,r,a){const o=new Qe(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function m(_){let v=!1;const E=g(_);E===null?p(o,l):E&&E.isColor&&(p(E,1),v=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===oa)?(h===void 0&&(h=new Ct(new Yi(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Rs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Di.copy(v.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nm.makeRotationFromEuler(Di)),h.material.toneMapped=Dt.getTransfer(E.colorSpace)!==Bt,(u!==E||f!==E.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ct(new Ai(2,2),new Ln({name:"BackgroundMaterial",uniforms:Rs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Dt.getTransfer(E.colorSpace)!==Bt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(Or,Jh(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,v,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:m,addToRenderList:x,dispose:y}}function sm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(b,U,N,L,k){let z=!1;const F=u(L,N,U);r!==F&&(r=F,c(r.object)),z=d(b,L,N,k),z&&g(b,L,N,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,v(b,U,N,L),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,U,N){const L=N.wireframe===!0;let k=n[b.id];k===void 0&&(k={},n[b.id]=k);let z=k[U.id];z===void 0&&(z={},k[U.id]=z);let F=z[L];return F===void 0&&(F=f(l()),z[L]=F),F}function f(b){const U=[],N=[],L=[];for(let k=0;k<t;k++)U[k]=0,N[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:L,object:b,attributes:{},index:null}}function d(b,U,N,L){const k=r.attributes,z=U.attributes;let F=0;const I=N.getAttributes();for(const D in I)if(I[D].location>=0){const B=k[D];let ee=z[D];if(ee===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),B===void 0||B.attribute!==ee||ee&&B.data!==ee.data)return!0;F++}return r.attributesNum!==F||r.index!==L}function g(b,U,N,L){const k={},z=U.attributes;let F=0;const I=N.getAttributes();for(const D in I)if(I[D].location>=0){let B=z[D];B===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(B=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(B=b.instanceColor));const ee={};ee.attribute=B,B&&B.data&&(ee.data=B.data),k[D]=ee,F++}r.attributes=k,r.attributesNum=F,r.index=L}function m(){const b=r.newAttributes;for(let U=0,N=b.length;U<N;U++)b[U]=0}function x(b){p(b,0)}function p(b,U){const N=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;N[b]=1,L[b]===0&&(i.enableVertexAttribArray(b),L[b]=1),k[b]!==U&&(i.vertexAttribDivisor(b,U),k[b]=U)}function y(){const b=r.newAttributes,U=r.enabledAttributes;for(let N=0,L=U.length;N<L;N++)U[N]!==b[N]&&(i.disableVertexAttribArray(N),U[N]=0)}function _(b,U,N,L,k,z,F){F===!0?i.vertexAttribIPointer(b,U,N,k,z):i.vertexAttribPointer(b,U,N,L,k,z)}function v(b,U,N,L){m();const k=L.attributes,z=N.getAttributes(),F=U.defaultAttributeValues;for(const I in z){const D=z[I];if(D.location>=0){let V=k[I];if(V===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(V=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(V=b.instanceColor)),V!==void 0){const B=V.normalized,ee=V.itemSize,ne=e.get(V);if(ne===void 0)continue;const we=ne.buffer,_e=ne.type,Te=ne.bytesPerElement,Y=_e===i.INT||_e===i.UNSIGNED_INT||V.gpuType===vl;if(V.isInterleavedBufferAttribute){const te=V.data,ve=te.stride,K=V.offset;if(te.isInstancedInterleavedBuffer){for(let ie=0;ie<D.locationSize;ie++)p(D.location+ie,te.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ie=0;ie<D.locationSize;ie++)x(D.location+ie);i.bindBuffer(i.ARRAY_BUFFER,we);for(let ie=0;ie<D.locationSize;ie++)_(D.location+ie,ee/D.locationSize,_e,B,ve*Te,(K+ee/D.locationSize*ie)*Te,Y)}else{if(V.isInstancedBufferAttribute){for(let te=0;te<D.locationSize;te++)p(D.location+te,V.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let te=0;te<D.locationSize;te++)x(D.location+te);i.bindBuffer(i.ARRAY_BUFFER,we);for(let te=0;te<D.locationSize;te++)_(D.location+te,ee/D.locationSize,_e,B,ee*Te,ee/D.locationSize*te*Te,Y)}}else if(F!==void 0){const B=F[I];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(D.location,B);break;case 3:i.vertexAttrib3fv(D.location,B);break;case 4:i.vertexAttrib4fv(D.location,B);break;default:i.vertexAttrib1fv(D.location,B)}}}}y()}function E(){P();for(const b in n){const U=n[b];for(const N in U){const L=U[N];for(const k in L)h(L[k].object),delete L[k];delete U[N]}delete n[b]}}function M(b){if(n[b.id]===void 0)return;const U=n[b.id];for(const N in U){const L=U[N];for(const k in L)h(L[k].object),delete L[k];delete U[N]}delete n[b.id]}function R(b){for(const U in n){const N=n[U];if(N[b.id]===void 0)continue;const L=N[b.id];for(const k in L)h(L[k].object),delete L[k];delete N[b.id]}}function P(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:m,enableAttribute:x,disableUnusedAttributes:y}}function rm(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let m=0;m<u;m++)g+=h[m]*f[m];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function am(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==yn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Zn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Nn&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:E,maxSamples:M}}function om(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ui,o=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,m=u.clipIntersection,x=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!x)r?h(null):c();else{const y=r?0:n,_=y*4;let v=p.clippingState||null;l.value=v,v=h(g,f,_,d);for(let E=0;E!==_;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const m=u!==null?u.length:0;let x=null;if(m!==0){if(x=l.value,g!==!0||x===null){const p=d+m*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,v=d;_!==m;++_,v+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(x,v),x[v+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,x}}function lm(i){let e=new WeakMap;function t(a,o){return o===So?a.mapping=bs:o===Eo&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===So||o===Eo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hu(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const gs=4,xc=[.125,.215,.35,.446,.526,.582],Oi=20,Va=new Dl,vc=new Qe;let Wa=null,qa=0,Xa=0,$a=!1;const Ni=(1+Math.sqrt(5))/2,fs=1/Ni,_c=[new O(-Ni,fs,0),new O(Ni,fs,0),new O(-fs,0,Ni),new O(fs,0,Ni),new O(0,Ni,-fs),new O(0,Ni,fs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],cm=new O;class al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=cm}=r;Wa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa,qa,Xa),this._renderer.xr.enabled=$a,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Vi,format:yn,colorSpace:Es,depthBuffer:!1},s=yc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hm(r)),this._blurMaterial=fm(r,e,t)}return s}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,s,r){const l=new Un(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vc),u.toneMapping=bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const m=new Us({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),x=new Ct(new Yi,m);let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(vc),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const E=this._cubeSize;kr(s,v*E,_>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(x,l),u.render(e,l)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===bs||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_c[(s-r-1)%_c.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ct(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),m=r/g,x=isFinite(r)?1+Math.floor(h*m):Oi;x>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Oi}`);const p=[];let y=0;for(let R=0;R<Oi;++R){const P=R/m,w=Math.exp(-P*P/2);p.push(w),R===0?y+=w:R<x&&(y+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const v=this._sizeLods[s],E=3*v*(s>_-gs?s-_+gs:0),M=4*(this._cubeSize-v);kr(t,E,M,3*v,2*v),l.setRenderTarget(t),l.render(u,Va)}}function hm(i){const e=[],t=[],n=[];let s=i;const r=i-gs+1+xc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-gs?l=xc[a-i+gs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,m=3,x=2,p=1,y=new Float32Array(m*g*d),_=new Float32Array(x*g*d),v=new Float32Array(p*g*d);for(let M=0;M<d;M++){const R=M%3*2/3-1,P=M>2?0:-1,w=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];y.set(w,m*g*M),_.set(f,x*g*M);const b=[M,M,M,M,M,M];v.set(b,p*g*M)}const E=new Nt;E.setAttribute("position",new dt(y,m)),E.setAttribute("uv",new dt(_,x)),E.setAttribute("faceIndex",new dt(v,p)),e.push(E),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yc(i,e,t){const n=new hi(i,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function fm(i,e,t){const n=new Float32Array(Oi),s=new O(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function wc(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Mc(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Il(){return`

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
	`}function um(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===So||l===Eo,h=l===bs||l===Ss;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new al(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new al(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function dm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pm(i,e,t,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let m=0;if(d!==null){const y=d.array;m=d.version;for(let _=0,v=y.length;_<v;_+=3){const E=y[_+0],M=y[_+1],R=y[_+2];f.push(E,M,M,R,R,E)}}else if(g!==void 0){const y=g.array;m=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){const E=_+0,M=_+1,R=_+2;f.push(E,M,M,R,R,E)}}else return;const x=new(Yh(f)?Al:Ts)(f,1);x.version=m;const p=r.get(u);p&&e.remove(p),r.set(u,x)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function mm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let x=0;for(let p=0;p<g;p++)x+=d[p];t.update(x,n,1)}function u(f,d,g,m){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],m[p]);else{x.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,m,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*m[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function gm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function xm(i,e,t){const n=new WeakMap,s=new Et;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;d===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let v=o.attributes.position.count*_,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const M=new Float32Array(v*E*4*u),R=new Kh(M,v,E,u);R.type=Nn,R.needsUpdate=!0;const P=_*4;for(let b=0;b<u;b++){const U=x[b],N=p[b],L=y[b],k=v*E*4*b;for(let z=0;z<U.count;z++){const F=z*P;d===!0&&(s.fromBufferAttribute(U,z),M[k+F+0]=s.x,M[k+F+1]=s.y,M[k+F+2]=s.z,M[k+F+3]=0),g===!0&&(s.fromBufferAttribute(N,z),M[k+F+4]=s.x,M[k+F+5]=s.y,M[k+F+6]=s.z,M[k+F+7]=0),m===!0&&(s.fromBufferAttribute(L,z),M[k+F+8]=s.x,M[k+F+9]=s.y,M[k+F+10]=s.z,M[k+F+11]=L.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new rt(v,E)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function vm(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const df=new dn,bc=new Rl(1,1),pf=new Kh,mf=new bu,gf=new ef,Sc=[],Ec=[],Ac=new Float32Array(16),Tc=new Float32Array(9),Rc=new Float32Array(4);function Ns(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Sc[s];if(r===void 0&&(r=new Float32Array(s),Sc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fa(i,e){let t=Ec[e];t===void 0&&(t=new Int32Array(e),Ec[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Rc.set(n),i.uniformMatrix2fv(this.addr,!1,Rc),rn(t,n)}}function Sm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Tc.set(n),i.uniformMatrix3fv(this.addr,!1,Tc),rn(t,n)}}function Em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Ac.set(n),i.uniformMatrix4fv(this.addr,!1,Ac),rn(t,n)}}function Am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Lm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function Fm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bc.compareFunction=$h,r=bc):r=df,t.setTexture2D(e||r,s)}function Um(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||mf,s)}function Nm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||gf,s)}function zm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pf,s)}function Om(i){switch(i){case 5126:return _m;case 35664:return ym;case 35665:return wm;case 35666:return Mm;case 35674:return bm;case 35675:return Sm;case 35676:return Em;case 5124:case 35670:return Am;case 35667:case 35671:return Tm;case 35668:case 35672:return Rm;case 35669:case 35673:return Cm;case 5125:return Lm;case 36294:return Pm;case 36295:return Dm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return zm}}function km(i,e){i.uniform1fv(this.addr,e)}function Bm(i,e){const t=Ns(e,this.size,2);i.uniform2fv(this.addr,t)}function Hm(i,e){const t=Ns(e,this.size,3);i.uniform3fv(this.addr,t)}function Gm(i,e){const t=Ns(e,this.size,4);i.uniform4fv(this.addr,t)}function Vm(i,e){const t=Ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wm(i,e){const t=Ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qm(i,e){const t=Ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xm(i,e){i.uniform1iv(this.addr,e)}function $m(i,e){i.uniform2iv(this.addr,e)}function Ym(i,e){i.uniform3iv(this.addr,e)}function Km(i,e){i.uniform4iv(this.addr,e)}function jm(i,e){i.uniform1uiv(this.addr,e)}function Zm(i,e){i.uniform2uiv(this.addr,e)}function Jm(i,e){i.uniform3uiv(this.addr,e)}function Qm(i,e){i.uniform4uiv(this.addr,e)}function eg(i,e,t){const n=this.cache,s=e.length,r=fa(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||df,r[a])}function tg(i,e,t){const n=this.cache,s=e.length,r=fa(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||mf,r[a])}function ng(i,e,t){const n=this.cache,s=e.length,r=fa(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||gf,r[a])}function ig(i,e,t){const n=this.cache,s=e.length,r=fa(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||pf,r[a])}function sg(i){switch(i){case 5126:return km;case 35664:return Bm;case 35665:return Hm;case 35666:return Gm;case 35674:return Vm;case 35675:return Wm;case 35676:return qm;case 5124:case 35670:return Xm;case 35667:case 35671:return $m;case 35668:case 35672:return Ym;case 35669:case 35673:return Km;case 5125:return jm;case 36294:return Zm;case 36295:return Jm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}class rg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Om(t.type)}}class ag{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sg(t.type)}}class og{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function Cc(i,e){i.seq.push(e),i.map[e.id]=e}function lg(i,e,t){const n=i.name,s=n.length;for(Ya.lastIndex=0;;){const r=Ya.exec(n),a=Ya.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cc(t,c===void 0?new rg(o,i,e):new ag(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new og(o),Cc(t,u)),t=u}}}class Qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);lg(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Lc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cg=37297;let hg=0;function fg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Pc=new vt;function ug(i){Dt._getMatrix(Pc,Dt.workingColorSpace,i);const e=`mat3( ${Pc.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(i)){case sa:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+fg(i.getShaderSource(e),o)}else return r}function dg(i,e){const t=ug(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pg(i,e){let t;switch(e){case Qf:t="Linear";break;case eu:t="Reinhard";break;case tu:t="Cineon";break;case zh:t="ACESFilmic";break;case iu:t="AgX";break;case su:t="Neutral";break;case nu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Br=new O;function mg(){Dt.getLuminanceCoefficients(Br);const i=Br.x.toFixed(4),e=Br.y.toFixed(4),t=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function xg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qs(i){return i!==""}function Ic(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _g=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(i){return i.replace(_g,wg)}const yg=new Map;function wg(i,e){let t=xt[e];if(t===void 0){const n=yg.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ol(t)}const Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(i){return i.replace(Mg,bg)}function bg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Sg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Eg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ss:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ag(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function Tg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xl:e="ENVMAP_BLENDING_MULTIPLY";break;case Zf:e="ENVMAP_BLENDING_MIX";break;case Jf:e="ENVMAP_BLENDING_ADD";break}return e}function Rg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Sg(t),c=Eg(t),h=Ag(t),u=Tg(t),f=Rg(t),d=gg(t),g=xg(r),m=s.createProgram();let x,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(x=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?xt.tonemapping_pars_fragment:"",t.toneMapping!==bi?pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,dg("linearToOutputTexel",t.outputColorSpace),mg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),a=ol(a),a=Ic(a,t),a=Fc(a,t),o=ol(o),o=Ic(o,t),o=Fc(o,t),a=Uc(a),o=Uc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+x+a,v=y+p+o,E=Lc(s,s.VERTEX_SHADER,_),M=Lc(s,s.FRAGMENT_SHADER,v);s.attachShader(m,E),s.attachShader(m,M),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function R(U){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(m)||"",L=s.getShaderInfoLog(E)||"",k=s.getShaderInfoLog(M)||"",z=N.trim(),F=L.trim(),I=k.trim();let D=!0,V=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,M);else{const B=Dc(s,E,"vertex"),ee=Dc(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+B+`
`+ee)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||I==="")&&(V=!1);V&&(U.diagnostics={runnable:D,programLog:z,vertexShader:{log:F,prefix:x},fragmentShader:{log:I,prefix:p}})}s.deleteShader(E),s.deleteShader(M),P=new Qr(s,m),w=vg(s,m)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(m,cg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=M,this}let Lg=0;class Pg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dg(e),t.set(e,n)),n}}class Dg{constructor(e){this.id=Lg++,this.code=e,this.usedTimes=0}}function Ig(i,e,t,n,s,r,a){const o=new jh,l=new Pg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w){return c.add(w),w===0?"uv":`uv${w}`}function x(w,b,U,N,L){const k=N.fog,z=L.geometry,F=w.isMeshStandardMaterial?N.environment:null,I=(w.isMeshStandardMaterial?t:e).get(w.envMap||F),D=I&&I.mapping===oa?I.image.height:null,V=g[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const B=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ee=B!==void 0?B.length:0;let ne=0;z.morphAttributes.position!==void 0&&(ne=1),z.morphAttributes.normal!==void 0&&(ne=2),z.morphAttributes.color!==void 0&&(ne=3);let we,_e,Te,Y;if(V){const Ye=Yn[V];we=Ye.vertexShader,_e=Ye.fragmentShader}else we=w.vertexShader,_e=w.fragmentShader,l.update(w),Te=l.getVertexShaderID(w),Y=l.getFragmentShaderID(w);const te=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),K=L.isInstancedMesh===!0,ie=L.isBatchedMesh===!0,xe=!!w.map,$=!!w.matcap,A=!!I,ce=!!w.aoMap,J=!!w.lightMap,re=!!w.bumpMap,he=!!w.normalMap,be=!!w.displacementMap,me=!!w.emissiveMap,Fe=!!w.metalnessMap,st=!!w.roughnessMap,at=w.anisotropy>0,C=w.clearcoat>0,S=w.dispersion>0,W=w.iridescence>0,se=w.sheen>0,ue=w.transmission>0,ae=at&&!!w.anisotropyMap,Ge=C&&!!w.clearcoatMap,Me=C&&!!w.clearcoatNormalMap,ze=C&&!!w.clearcoatRoughnessMap,Ce=W&&!!w.iridescenceMap,ge=W&&!!w.iridescenceThicknessMap,Ee=se&&!!w.sheenColorMap,je=se&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,pe=!!w.specularColorMap,et=!!w.specularIntensityMap,G=ue&&!!w.transmissionMap,le=ue&&!!w.thicknessMap,fe=!!w.gradientMap,de=!!w.alphaMap,oe=w.alphaTest>0,Q=!!w.alphaHash,Le=!!w.extensions;let Ne=bi;w.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const ke={shaderID:V,shaderType:w.type,shaderName:w.name,vertexShader:we,fragmentShader:_e,defines:w.defines,customVertexShaderID:Te,customFragmentShaderID:Y,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:ie,batchingColor:ie&&L._colorsTexture!==null,instancing:K,instancingColor:K&&L.instanceColor!==null,instancingMorph:K&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Es,alphaToCoverage:!!w.alphaToCoverage,map:xe,matcap:$,envMap:A,envMapMode:A&&I.mapping,envMapCubeUVHeight:D,aoMap:ce,lightMap:J,bumpMap:re,normalMap:he,displacementMap:f&&be,emissiveMap:me,normalMapObjectSpace:he&&w.normalMapType===ou,normalMapTangentSpace:he&&w.normalMapType===Sl,metalnessMap:Fe,roughnessMap:st,anisotropy:at,anisotropyMap:ae,clearcoat:C,clearcoatMap:Ge,clearcoatNormalMap:Me,clearcoatRoughnessMap:ze,dispersion:S,iridescence:W,iridescenceMap:Ce,iridescenceThicknessMap:ge,sheen:se,sheenColorMap:Ee,sheenRoughnessMap:je,specularMap:Ie,specularColorMap:pe,specularIntensityMap:et,transmission:ue,transmissionMap:G,thicknessMap:le,gradientMap:fe,opaque:w.transparent===!1&&w.blending===vs&&w.alphaToCoverage===!1,alphaMap:de,alphaTest:oe,alphaHash:Q,combine:w.combine,mapUv:xe&&m(w.map.channel),aoMapUv:ce&&m(w.aoMap.channel),lightMapUv:J&&m(w.lightMap.channel),bumpMapUv:re&&m(w.bumpMap.channel),normalMapUv:he&&m(w.normalMap.channel),displacementMapUv:be&&m(w.displacementMap.channel),emissiveMapUv:me&&m(w.emissiveMap.channel),metalnessMapUv:Fe&&m(w.metalnessMap.channel),roughnessMapUv:st&&m(w.roughnessMap.channel),anisotropyMapUv:ae&&m(w.anisotropyMap.channel),clearcoatMapUv:Ge&&m(w.clearcoatMap.channel),clearcoatNormalMapUv:Me&&m(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&m(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(w.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&m(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(w.sheenColorMap.channel),sheenRoughnessMapUv:je&&m(w.sheenRoughnessMap.channel),specularMapUv:Ie&&m(w.specularMap.channel),specularColorMapUv:pe&&m(w.specularColorMap.channel),specularIntensityMapUv:et&&m(w.specularIntensityMap.channel),transmissionMapUv:G&&m(w.transmissionMap.channel),thicknessMapUv:le&&m(w.thicknessMap.channel),alphaMapUv:de&&m(w.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(he||at),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(xe||de),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:xe&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===Bt,decodeVideoTextureEmissive:me&&w.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(w.emissiveMap.colorSpace)===Bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ln,flipSided:w.side===wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Le&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&w.extensions.multiDraw===!0||ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function p(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)b.push(U),b.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(y(b,w),_(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function _(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const b=g[w.type];let U;if(b){const N=Yn[b];U=zu.clone(N.uniforms)}else U=w.uniforms;return U}function E(w,b){let U;for(let N=0,L=h.length;N<L;N++){const k=h[N];if(k.cacheKey===b){U=k,++U.usedTimes;break}}return U===void 0&&(U=new Cg(i,b,w,r),h.push(U)),U}function M(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function R(w){l.remove(w)}function P(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:M,releaseShaderCache:R,programs:h,dispose:P}}function Fg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ug(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,d,g,m,x){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:m,group:x},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=m,p.group=x),e++,p}function o(u,f,d,g,m,x){const p=a(u,f,d,g,m,x);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,m,x){const p=a(u,f,d,g,m,x);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||Ug),n.length>1&&n.sort(f||zc),s.length>1&&s.sort(f||zc)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Ng(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Oc,i.set(n,[a])):s>=r.length?(a=new Oc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function zg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Qe};break;case"SpotLight":t={position:new O,direction:new O,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function Og(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let kg=0;function Bg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hg(i){const e=new zg,t=Og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new It,a=new It;function o(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,m=0,x=0,p=0,y=0,_=0,v=0,E=0,M=0,R=0;c.sort(Bg);for(let w=0,b=c.length;w<b;w++){const U=c[w],N=U.color,L=U.intensity,k=U.distance,z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=N.r*L,u+=N.g*L,f+=N.b*L;else if(U.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(U.sh.coefficients[F],L);R++}else if(U.isDirectionalLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const I=U.shadow,D=t.get(U);D.shadowIntensity=I.intensity,D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,n.directionalShadow[d]=D,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=U.shadow.matrix,y++}n.directional[d]=F,d++}else if(U.isSpotLight){const F=e.get(U);F.position.setFromMatrixPosition(U.matrixWorld),F.color.copy(N).multiplyScalar(L),F.distance=k,F.coneCos=Math.cos(U.angle),F.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),F.decay=U.decay,n.spot[m]=F;const I=U.shadow;if(U.map&&(n.spotLightMap[E]=U.map,E++,I.updateMatrices(U),U.castShadow&&M++),n.spotLightMatrix[m]=I.matrix,U.castShadow){const D=t.get(U);D.shadowIntensity=I.intensity,D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,n.spotShadow[m]=D,n.spotShadowMap[m]=z,v++}m++}else if(U.isRectAreaLight){const F=e.get(U);F.color.copy(N).multiplyScalar(L),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),n.rectArea[x]=F,x++}else if(U.isPointLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),F.distance=U.distance,F.decay=U.decay,U.castShadow){const I=U.shadow,D=t.get(U);D.shadowIntensity=I.intensity,D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,D.shadowCameraNear=I.camera.near,D.shadowCameraFar=I.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=U.shadow.matrix,_++}n.point[g]=F,g++}else if(U.isHemisphereLight){const F=e.get(U);F.skyColor.copy(U.color).multiplyScalar(L),F.groundColor.copy(U.groundColor).multiplyScalar(L),n.hemi[p]=F,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==m||P.rectAreaLength!==x||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==_||P.numSpotShadows!==v||P.numSpotMaps!==E||P.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=x,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=R,P.directionalLength=d,P.pointLength=g,P.spotLength=m,P.rectAreaLength=x,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=_,P.numSpotShadows=v,P.numSpotMaps=E,P.numLightProbes=R,n.version=kg++)}function l(c,h){let u=0,f=0,d=0,g=0,m=0;const x=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const _=c[p];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),u++}else if(_.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),d++}else if(_.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),a.identity(),r.copy(_.matrixWorld),r.premultiply(x),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),f++}else if(_.isHemisphereLight){const v=n.hemi[m];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(x),m++}}}return{setup:o,setupView:l,state:n}}function kc(i){const e=new Hg(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Gg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new kc(i),e.set(s,[o])):r>=a.length?(o=new kc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wg=`uniform sampler2D shadow_pass;
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
}`;function qg(i,e,t){let n=new la;const s=new rt,r=new rt,a=new Et,o=new lf({depthPacking:Xh}),l=new ud,c={},h=t.maxTextureSize,u={[Si]:wn,[wn]:Si,[ln]:ln},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Vg,fragmentShader:Wg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ct(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let p=this.type;this.render=function(M,R,P){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;const w=i.getRenderTarget(),b=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Mi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const L=p!==ri&&this.type===ri,k=p===ri&&this.type!==ri;for(let z=0,F=M.length;z<F;z++){const I=M[z],D=I.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const V=D.getFrameExtents();if(s.multiply(V),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,D.mapSize.y=r.y)),D.map===null||L===!0||k===!0){const ee=this.type!==ri?{minFilter:un,magFilter:un}:{};D.map!==null&&D.map.dispose(),D.map=new hi(s.x,s.y,ee),D.map.texture.name=I.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const B=D.getViewportCount();for(let ee=0;ee<B;ee++){const ne=D.getViewport(ee);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),N.viewport(a),D.updateMatrices(I,ee),n=D.getFrustum(),v(R,P,D.camera,I,this.type)}D.isPointLightShadow!==!0&&this.type===ri&&y(D,P),D.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(w,b,U)};function y(M,R){const P=e.update(m);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new hi(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(R,null,P,f,m,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(R,null,P,d,m,null)}function _(M,R,P,w){let b=null;const U=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0)b=U;else if(b=P.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=b.uuid,L=R.uuid;let k=c[N];k===void 0&&(k={},c[N]=k);let z=k[L];z===void 0&&(z=b.clone(),k[L]=z,R.addEventListener("dispose",E)),b=z}if(b.visible=R.visible,b.wireframe=R.wireframe,w===ri?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=i.properties.get(b);N.light=P}return b}function v(M,R,P,w,b){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===ri)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);const L=e.update(M),k=M.material;if(Array.isArray(k)){const z=L.groups;for(let F=0,I=z.length;F<I;F++){const D=z[F],V=k[D.materialIndex];if(V&&V.visible){const B=_(M,V,w,b);M.onBeforeShadow(i,M,R,P,L,B,D),i.renderBufferDirect(P,null,L,B,M,D),M.onAfterShadow(i,M,R,P,L,B,D)}}}else if(k.visible){const z=_(M,k,w,b);M.onBeforeShadow(i,M,R,P,L,z,null),i.renderBufferDirect(P,null,L,z,M,null),M.onAfterShadow(i,M,R,P,L,z,null)}}const N=M.children;for(let L=0,k=N.length;L<k;L++)v(N[L],R,P,w,b)}function E(M){M.target.removeEventListener("dispose",E);for(const P in c){const w=c[P],b=M.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const Xg={[xo]:vo,[_o]:Mo,[yo]:bo,[Ms]:wo,[vo]:xo,[Mo]:_o,[bo]:yo,[wo]:Ms};function $g(i,e){function t(){let G=!1;const le=new Et;let fe=null;const de=new Et(0,0,0,0);return{setMask:function(oe){fe!==oe&&!G&&(i.colorMask(oe,oe,oe,oe),fe=oe)},setLocked:function(oe){G=oe},setClear:function(oe,Q,Le,Ne,ke){ke===!0&&(oe*=Ne,Q*=Ne,Le*=Ne),le.set(oe,Q,Le,Ne),de.equals(le)===!1&&(i.clearColor(oe,Q,Le,Ne),de.copy(le))},reset:function(){G=!1,fe=null,de.set(-1,0,0,0)}}}function n(){let G=!1,le=!1,fe=null,de=null,oe=null;return{setReversed:function(Q){if(le!==Q){const Le=e.get("EXT_clip_control");Q?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),le=Q;const Ne=oe;oe=null,this.setClear(Ne)}},getReversed:function(){return le},setTest:function(Q){Q?te(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(Q){fe!==Q&&!G&&(i.depthMask(Q),fe=Q)},setFunc:function(Q){if(le&&(Q=Xg[Q]),de!==Q){switch(Q){case xo:i.depthFunc(i.NEVER);break;case vo:i.depthFunc(i.ALWAYS);break;case _o:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case Mo:i.depthFunc(i.GREATER);break;case bo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Q}},setLocked:function(Q){G=Q},setClear:function(Q){oe!==Q&&(le&&(Q=1-Q),i.clearDepth(Q),oe=Q)},reset:function(){G=!1,fe=null,de=null,oe=null,le=!1}}}function s(){let G=!1,le=null,fe=null,de=null,oe=null,Q=null,Le=null,Ne=null,ke=null;return{setTest:function(Ye){G||(Ye?te(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Ye){le!==Ye&&!G&&(i.stencilMask(Ye),le=Ye)},setFunc:function(Ye,H,ye){(fe!==Ye||de!==H||oe!==ye)&&(i.stencilFunc(Ye,H,ye),fe=Ye,de=H,oe=ye)},setOp:function(Ye,H,ye){(Q!==Ye||Le!==H||Ne!==ye)&&(i.stencilOp(Ye,H,ye),Q=Ye,Le=H,Ne=ye)},setLocked:function(Ye){G=Ye},setClear:function(Ye){ke!==Ye&&(i.clearStencil(Ye),ke=Ye)},reset:function(){G=!1,le=null,fe=null,de=null,oe=null,Q=null,Le=null,Ne=null,ke=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,m=!1,x=null,p=null,y=null,_=null,v=null,E=null,M=null,R=new Qe(0,0,0),P=0,w=!1,b=null,U=null,N=null,L=null,k=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,I=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(D)[1]),F=I>=1):D.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),F=I>=2);let V=null,B={};const ee=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),we=new Et().fromArray(ee),_e=new Et().fromArray(ne);function Te(G,le,fe,de){const oe=new Uint8Array(4),Q=i.createTexture();i.bindTexture(G,Q),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<fe;Le++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(le+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return Q}const Y={};Y[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(Ms),re(!1),he(Bl),te(i.CULL_FACE),ce(Mi);function te(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function ve(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function K(G,le){return u[G]!==le?(i.bindFramebuffer(G,le),u[G]=le,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function ie(G,le){let fe=d,de=!1;if(G){fe=f.get(le),fe===void 0&&(fe=[],f.set(le,fe));const oe=G.textures;if(fe.length!==oe.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Le=oe.length;Q<Le;Q++)fe[Q]=i.COLOR_ATTACHMENT0+Q;fe.length=oe.length,de=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,de=!0);de&&i.drawBuffers(fe)}function xe(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const $={[zi]:i.FUNC_ADD,[Ff]:i.FUNC_SUBTRACT,[Uf]:i.FUNC_REVERSE_SUBTRACT};$[Nf]=i.MIN,$[zf]=i.MAX;const A={[Of]:i.ZERO,[kf]:i.ONE,[Bf]:i.SRC_COLOR,[mo]:i.SRC_ALPHA,[Xf]:i.SRC_ALPHA_SATURATE,[Wf]:i.DST_COLOR,[Gf]:i.DST_ALPHA,[Hf]:i.ONE_MINUS_SRC_COLOR,[go]:i.ONE_MINUS_SRC_ALPHA,[qf]:i.ONE_MINUS_DST_COLOR,[Vf]:i.ONE_MINUS_DST_ALPHA,[$f]:i.CONSTANT_COLOR,[Yf]:i.ONE_MINUS_CONSTANT_COLOR,[Kf]:i.CONSTANT_ALPHA,[jf]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(G,le,fe,de,oe,Q,Le,Ne,ke,Ye){if(G===Mi){m===!0&&(ve(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),G!==If){if(G!==x||Ye!==w){if((p!==zi||v!==zi)&&(i.blendEquation(i.FUNC_ADD),p=zi,v=zi),Ye)switch(G){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFunc(i.ONE,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,_=null,E=null,M=null,R.set(0,0,0),P=0,x=G,w=Ye}return}oe=oe||le,Q=Q||fe,Le=Le||de,(le!==p||oe!==v)&&(i.blendEquationSeparate($[le],$[oe]),p=le,v=oe),(fe!==y||de!==_||Q!==E||Le!==M)&&(i.blendFuncSeparate(A[fe],A[de],A[Q],A[Le]),y=fe,_=de,E=Q,M=Le),(Ne.equals(R)===!1||ke!==P)&&(i.blendColor(Ne.r,Ne.g,Ne.b,ke),R.copy(Ne),P=ke),x=G,w=!1}function J(G,le){G.side===ln?ve(i.CULL_FACE):te(i.CULL_FACE);let fe=G.side===wn;le&&(fe=!fe),re(fe),G.blending===vs&&G.transparent===!1?ce(Mi):ce(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const de=G.stencilWrite;o.setTest(de),de&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),me(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(G){b!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),b=G)}function he(G){G!==Pf?(te(i.CULL_FACE),G!==U&&(G===Bl?i.cullFace(i.BACK):G===Df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),U=G}function be(G){G!==N&&(F&&i.lineWidth(G),N=G)}function me(G,le,fe){G?(te(i.POLYGON_OFFSET_FILL),(L!==le||k!==fe)&&(i.polygonOffset(le,fe),L=le,k=fe)):ve(i.POLYGON_OFFSET_FILL)}function Fe(G){G?te(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function st(G){G===void 0&&(G=i.TEXTURE0+z-1),V!==G&&(i.activeTexture(G),V=G)}function at(G,le,fe){fe===void 0&&(V===null?fe=i.TEXTURE0+z-1:fe=V);let de=B[fe];de===void 0&&(de={type:void 0,texture:void 0},B[fe]=de),(de.type!==G||de.texture!==le)&&(V!==fe&&(i.activeTexture(fe),V=fe),i.bindTexture(G,le||Y[G]),de.type=G,de.texture=le)}function C(){const G=B[V];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(G){we.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),we.copy(G))}function je(G){_e.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),_e.copy(G))}function Ie(G,le){let fe=c.get(le);fe===void 0&&(fe=new WeakMap,c.set(le,fe));let de=fe.get(G);de===void 0&&(de=i.getUniformBlockIndex(le,G.name),fe.set(G,de))}function pe(G,le){const de=c.get(le).get(G);l.get(le)!==de&&(i.uniformBlockBinding(le,de,G.__bindingPointIndex),l.set(le,de))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},V=null,B={},u={},f=new WeakMap,d=[],g=null,m=!1,x=null,p=null,y=null,_=null,v=null,E=null,M=null,R=new Qe(0,0,0),P=0,w=!1,b=null,U=null,N=null,L=null,k=null,we.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ve,bindFramebuffer:K,drawBuffers:ie,useProgram:xe,setBlending:ce,setMaterial:J,setFlipSided:re,setCullFace:he,setLineWidth:be,setPolygonOffset:me,setScissorTest:Fe,activeTexture:st,bindTexture:at,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:W,texImage2D:Ce,texImage3D:ge,updateUBOMapping:Ie,uniformBlockBinding:pe,texStorage2D:Me,texStorage3D:ze,texSubImage2D:se,texSubImage3D:ue,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ge,scissor:Ee,viewport:je,reset:et}}function Yg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return d?new OffscreenCanvas(C,S):or("canvas")}function m(C,S,W){let se=1;const ue=at(C);if((ue.width>W||ue.height>W)&&(se=W/Math.max(ue.width,ue.height)),se<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ae=Math.floor(se*ue.width),Ge=Math.floor(se*ue.height);u===void 0&&(u=g(ae,Ge));const Me=S?g(ae,Ge):u;return Me.width=ae,Me.height=Ge,Me.getContext("2d").drawImage(C,0,0,ae,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ae+"x"+Ge+")."),Me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),C;return C}function x(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,S,W,se,ue=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=S;if(S===i.RED&&(W===i.FLOAT&&(ae=i.R32F),W===i.HALF_FLOAT&&(ae=i.R16F),W===i.UNSIGNED_BYTE&&(ae=i.R8)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ae=i.R8UI),W===i.UNSIGNED_SHORT&&(ae=i.R16UI),W===i.UNSIGNED_INT&&(ae=i.R32UI),W===i.BYTE&&(ae=i.R8I),W===i.SHORT&&(ae=i.R16I),W===i.INT&&(ae=i.R32I)),S===i.RG&&(W===i.FLOAT&&(ae=i.RG32F),W===i.HALF_FLOAT&&(ae=i.RG16F),W===i.UNSIGNED_BYTE&&(ae=i.RG8)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ae=i.RG8UI),W===i.UNSIGNED_SHORT&&(ae=i.RG16UI),W===i.UNSIGNED_INT&&(ae=i.RG32UI),W===i.BYTE&&(ae=i.RG8I),W===i.SHORT&&(ae=i.RG16I),W===i.INT&&(ae=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),W===i.UNSIGNED_INT&&(ae=i.RGB32UI),W===i.BYTE&&(ae=i.RGB8I),W===i.SHORT&&(ae=i.RGB16I),W===i.INT&&(ae=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),W===i.UNSIGNED_INT&&(ae=i.RGBA32UI),W===i.BYTE&&(ae=i.RGBA8I),W===i.SHORT&&(ae=i.RGBA16I),W===i.INT&&(ae=i.RGBA32I)),S===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),S===i.RGBA){const Ge=ue?sa:Dt.getTransfer(se);W===i.FLOAT&&(ae=i.RGBA32F),W===i.HALF_FLOAT&&(ae=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ae=Ge===Bt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function v(C,S){let W;return C?S===null||S===Ei||S===sr?W=i.DEPTH24_STENCIL8:S===Nn?W=i.DEPTH32F_STENCIL8:S===ir&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ei||S===sr?W=i.DEPTH_COMPONENT24:S===Nn?W=i.DEPTH_COMPONENT32F:S===ir&&(W=i.DEPTH_COMPONENT16),W}function E(C,S){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==En?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function M(C){const S=C.target;S.removeEventListener("dispose",M),P(S),S.isVideoTexture&&h.delete(S)}function R(C){const S=C.target;S.removeEventListener("dispose",R),b(S)}function P(C){const S=n.get(C);if(S.__webglInit===void 0)return;const W=C.source,se=f.get(W);if(se){const ue=se[S.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&w(C),Object.keys(se).length===0&&f.delete(W)}n.remove(C)}function w(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const W=C.source,se=f.get(W);delete se[S.__cacheKey],a.memory.textures--}function b(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(S.__webglFramebuffer[se]))for(let ue=0;ue<S.__webglFramebuffer[se].length;ue++)i.deleteFramebuffer(S.__webglFramebuffer[se][ue]);else i.deleteFramebuffer(S.__webglFramebuffer[se]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[se])}else{if(Array.isArray(S.__webglFramebuffer))for(let se=0;se<S.__webglFramebuffer.length;se++)i.deleteFramebuffer(S.__webglFramebuffer[se]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let se=0;se<S.__webglColorRenderbuffer.length;se++)S.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[se]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=C.textures;for(let se=0,ue=W.length;se<ue;se++){const ae=n.get(W[se]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(W[se])}n.remove(C)}let U=0;function N(){U=0}function L(){const C=U;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function k(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function z(C,S){const W=n.get(C);if(C.isVideoTexture&&Fe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){const se=C.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(W,C,S);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function F(C,S){const W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){Y(W,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function I(C,S){const W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){Y(W,C,S);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function D(C,S){const W=n.get(C);if(C.version>0&&W.__version!==C.version){te(W,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}const V={[Ao]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[To]:i.MIRRORED_REPEAT},B={[un]:i.NEAREST,[ru]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},ee={[lu]:i.NEVER,[pu]:i.ALWAYS,[cu]:i.LESS,[$h]:i.LEQUAL,[hu]:i.EQUAL,[du]:i.GEQUAL,[fu]:i.GREATER,[uu]:i.NOTEQUAL};function ne(C,S){if(S.type===Nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===En||S.magFilter===ga||S.magFilter===xr||S.magFilter===oi||S.minFilter===En||S.minFilter===ga||S.minFilter===xr||S.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,V[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,V[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,V[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,B[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,B[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ee[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===un||S.minFilter!==xr&&S.minFilter!==oi||S.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function we(C,S){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",M));const se=S.source;let ue=f.get(se);ue===void 0&&(ue={},f.set(se,ue));const ae=k(S);if(ae!==C.__cacheKey){ue[ae]===void 0&&(ue[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ue[ae].usedTimes++;const Ge=ue[C.__cacheKey];Ge!==void 0&&(ue[C.__cacheKey].usedTimes--,Ge.usedTimes===0&&w(S)),C.__cacheKey=ae,C.__webglTexture=ue[ae].texture}return W}function _e(C,S,W){return Math.floor(Math.floor(C/W)/S)}function Te(C,S,W,se){const ae=C.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,W,se,S.data);else{ae.sort((ge,Ee)=>ge.start-Ee.start);let Ge=0;for(let ge=1;ge<ae.length;ge++){const Ee=ae[Ge],je=ae[ge],Ie=Ee.start+Ee.count,pe=_e(je.start,S.width,4),et=_e(Ee.start,S.width,4);je.start<=Ie+1&&pe===et&&_e(je.start+je.count-1,S.width,4)===pe?Ee.count=Math.max(Ee.count,je.start+je.count-Ee.start):(++Ge,ae[Ge]=je)}ae.length=Ge+1;const Me=i.getParameter(i.UNPACK_ROW_LENGTH),ze=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ge=0,Ee=ae.length;ge<Ee;ge++){const je=ae[ge],Ie=Math.floor(je.start/4),pe=Math.ceil(je.count/4),et=Ie%S.width,G=Math.floor(Ie/S.width),le=pe,fe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,et),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,et,G,le,fe,W,se,S.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Me),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function Y(C,S,W){let se=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=i.TEXTURE_3D);const ue=we(C,S),ae=S.source;t.bindTexture(se,C.__webglTexture,i.TEXTURE0+W);const Ge=n.get(ae);if(ae.version!==Ge.__version||ue===!0){t.activeTexture(i.TEXTURE0+W);const Me=Dt.getPrimaries(Dt.workingColorSpace),ze=S.colorSpace===Vn?null:Dt.getPrimaries(S.colorSpace),Ce=S.colorSpace===Vn||Me===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ge=m(S.image,!1,s.maxTextureSize);ge=st(S,ge);const Ee=r.convert(S.format,S.colorSpace),je=r.convert(S.type);let Ie=_(S.internalFormat,Ee,je,S.colorSpace,S.isVideoTexture);ne(se,S);let pe;const et=S.mipmaps,G=S.isVideoTexture!==!0,le=Ge.__version===void 0||ue===!0,fe=ae.dataReady,de=E(S,ge);if(S.isDepthTexture)Ie=v(S.format===ar,S.type),le&&(G?t.texStorage2D(i.TEXTURE_2D,1,Ie,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ge.width,ge.height,0,Ee,je,null));else if(S.isDataTexture)if(et.length>0){G&&le&&t.texStorage2D(i.TEXTURE_2D,de,Ie,et[0].width,et[0].height);for(let oe=0,Q=et.length;oe<Q;oe++)pe=et[oe],G?fe&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,pe.width,pe.height,Ee,je,pe.data):t.texImage2D(i.TEXTURE_2D,oe,Ie,pe.width,pe.height,0,Ee,je,pe.data);S.generateMipmaps=!1}else G?(le&&t.texStorage2D(i.TEXTURE_2D,de,Ie,ge.width,ge.height),fe&&Te(S,ge,Ee,je)):t.texImage2D(i.TEXTURE_2D,0,Ie,ge.width,ge.height,0,Ee,je,ge.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){G&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ie,et[0].width,et[0].height,ge.depth);for(let oe=0,Q=et.length;oe<Q;oe++)if(pe=et[oe],S.format!==yn)if(Ee!==null)if(G){if(fe)if(S.layerUpdates.size>0){const Le=gc(pe.width,pe.height,S.format,S.type);for(const Ne of S.layerUpdates){const ke=pe.data.subarray(Ne*Le/pe.data.BYTES_PER_ELEMENT,(Ne+1)*Le/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Ne,pe.width,pe.height,1,Ee,ke)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,pe.width,pe.height,ge.depth,Ee,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Ie,pe.width,pe.height,ge.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,pe.width,pe.height,ge.depth,Ee,je,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Ie,pe.width,pe.height,ge.depth,0,Ee,je,pe.data)}else{G&&le&&t.texStorage2D(i.TEXTURE_2D,de,Ie,et[0].width,et[0].height);for(let oe=0,Q=et.length;oe<Q;oe++)pe=et[oe],S.format!==yn?Ee!==null?G?fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,pe.width,pe.height,Ee,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Ie,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?fe&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,pe.width,pe.height,Ee,je,pe.data):t.texImage2D(i.TEXTURE_2D,oe,Ie,pe.width,pe.height,0,Ee,je,pe.data)}else if(S.isDataArrayTexture)if(G){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ie,ge.width,ge.height,ge.depth),fe)if(S.layerUpdates.size>0){const oe=gc(ge.width,ge.height,S.format,S.type);for(const Q of S.layerUpdates){const Le=ge.data.subarray(Q*oe/ge.data.BYTES_PER_ELEMENT,(Q+1)*oe/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ge.width,ge.height,1,Ee,je,Le)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ee,je,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ge.width,ge.height,ge.depth,0,Ee,je,ge.data);else if(S.isData3DTexture)G?(le&&t.texStorage3D(i.TEXTURE_3D,de,Ie,ge.width,ge.height,ge.depth),fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ee,je,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ge.width,ge.height,ge.depth,0,Ee,je,ge.data);else if(S.isFramebufferTexture){if(le)if(G)t.texStorage2D(i.TEXTURE_2D,de,Ie,ge.width,ge.height);else{let oe=ge.width,Q=ge.height;for(let Le=0;Le<de;Le++)t.texImage2D(i.TEXTURE_2D,Le,Ie,oe,Q,0,Ee,je,null),oe>>=1,Q>>=1}}else if(et.length>0){if(G&&le){const oe=at(et[0]);t.texStorage2D(i.TEXTURE_2D,de,Ie,oe.width,oe.height)}for(let oe=0,Q=et.length;oe<Q;oe++)pe=et[oe],G?fe&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ee,je,pe):t.texImage2D(i.TEXTURE_2D,oe,Ie,Ee,je,pe);S.generateMipmaps=!1}else if(G){if(le){const oe=at(ge);t.texStorage2D(i.TEXTURE_2D,de,Ie,oe.width,oe.height)}fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,je,ge)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Ee,je,ge);x(S)&&p(se),Ge.__version=ae.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function te(C,S,W){if(S.image.length!==6)return;const se=we(C,S),ue=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+W);const ae=n.get(ue);if(ue.version!==ae.__version||se===!0){t.activeTexture(i.TEXTURE0+W);const Ge=Dt.getPrimaries(Dt.workingColorSpace),Me=S.colorSpace===Vn?null:Dt.getPrimaries(S.colorSpace),ze=S.colorSpace===Vn||Ge===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ce=S.isCompressedTexture||S.image[0].isCompressedTexture,ge=S.image[0]&&S.image[0].isDataTexture,Ee=[];for(let Q=0;Q<6;Q++)!Ce&&!ge?Ee[Q]=m(S.image[Q],!0,s.maxCubemapSize):Ee[Q]=ge?S.image[Q].image:S.image[Q],Ee[Q]=st(S,Ee[Q]);const je=Ee[0],Ie=r.convert(S.format,S.colorSpace),pe=r.convert(S.type),et=_(S.internalFormat,Ie,pe,S.colorSpace),G=S.isVideoTexture!==!0,le=ae.__version===void 0||se===!0,fe=ue.dataReady;let de=E(S,je);ne(i.TEXTURE_CUBE_MAP,S);let oe;if(Ce){G&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,et,je.width,je.height);for(let Q=0;Q<6;Q++){oe=Ee[Q].mipmaps;for(let Le=0;Le<oe.length;Le++){const Ne=oe[Le];S.format!==yn?Ie!==null?G?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Le,0,0,Ne.width,Ne.height,Ie,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Le,et,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Le,0,0,Ne.width,Ne.height,Ie,pe,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Le,et,Ne.width,Ne.height,0,Ie,pe,Ne.data)}}}else{if(oe=S.mipmaps,G&&le){oe.length>0&&de++;const Q=at(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,et,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ge){G?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ee[Q].width,Ee[Q].height,Ie,pe,Ee[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,et,Ee[Q].width,Ee[Q].height,0,Ie,pe,Ee[Q].data);for(let Le=0;Le<oe.length;Le++){const ke=oe[Le].image[Q].image;G?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Le+1,0,0,ke.width,ke.height,Ie,pe,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Le+1,et,ke.width,ke.height,0,Ie,pe,ke.data)}}else{G?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ie,pe,Ee[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,et,Ie,pe,Ee[Q]);for(let Le=0;Le<oe.length;Le++){const Ne=oe[Le];G?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Le+1,0,0,Ie,pe,Ne.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Le+1,et,Ie,pe,Ne.image[Q])}}}x(S)&&p(i.TEXTURE_CUBE_MAP),ae.__version=ue.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ve(C,S,W,se,ue,ae){const Ge=r.convert(W.format,W.colorSpace),Me=r.convert(W.type),ze=_(W.internalFormat,Ge,Me,W.colorSpace),Ce=n.get(S),ge=n.get(W);if(ge.__renderTarget=S,!Ce.__hasExternalTextures){const Ee=Math.max(1,S.width>>ae),je=Math.max(1,S.height>>ae);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,ae,ze,Ee,je,S.depth,0,Ge,Me,null):t.texImage2D(ue,ae,ze,Ee,je,0,Ge,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),me(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ue,ge.__webglTexture,0,be(S)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ue,ge.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function K(C,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const se=S.depthTexture,ue=se&&se.isDepthTexture?se.type:null,ae=v(S.stencilBuffer,ue),Ge=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=be(S);me(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ae,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ae,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ae,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,C)}else{const se=S.textures;for(let ue=0;ue<se.length;ue++){const ae=se[ue],Ge=r.convert(ae.format,ae.colorSpace),Me=r.convert(ae.type),ze=_(ae.internalFormat,Ge,Me,ae.colorSpace),Ce=be(S);W&&me(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ze,S.width,S.height):me(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,ze,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ze,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ie(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(S.depthTexture);se.__renderTarget=S,(!se.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const ue=se.__webglTexture,ae=be(S);if(S.depthTexture.format===rr)me(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(S.depthTexture.format===ar)me(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function xe(C){const S=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const se=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){const ue=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",ue)};se.addEventListener("dispose",ue),S.__depthDisposeCallback=ue}S.__boundDepthTexture=se}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const se=C.texture.mipmaps;se&&se.length>0?ie(S.__webglFramebuffer[0],C):ie(S.__webglFramebuffer,C)}else if(W){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=i.createRenderbuffer(),K(S.__webglDepthbuffer[se],C,!1);else{const ue=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,ae)}}else{const se=C.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),K(S.__webglDepthbuffer,C,!1);else{const ue=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $(C,S,W){const se=n.get(C);S!==void 0&&ve(se.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&xe(C)}function A(C){const S=C.texture,W=n.get(C),se=n.get(S);C.addEventListener("dispose",R);const ue=C.textures,ae=C.isWebGLCubeRenderTarget===!0,Ge=ue.length>1;if(Ge||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=S.version,a.memory.textures++),ae){W.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[Me]=[];for(let ze=0;ze<S.mipmaps.length;ze++)W.__webglFramebuffer[Me][ze]=i.createFramebuffer()}else W.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)W.__webglFramebuffer[Me]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let Me=0,ze=ue.length;Me<ze;Me++){const Ce=n.get(ue[Me]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&me(C)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Me=0;Me<ue.length;Me++){const ze=ue[Me];W.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Me]);const Ce=r.convert(ze.format,ze.colorSpace),ge=r.convert(ze.type),Ee=_(ze.internalFormat,Ce,ge,ze.colorSpace,C.isXRRenderTarget===!0),je=be(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Ee,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,W.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),K(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),ne(i.TEXTURE_CUBE_MAP,S);for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0)for(let ze=0;ze<S.mipmaps.length;ze++)ve(W.__webglFramebuffer[Me][ze],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ze);else ve(W.__webglFramebuffer[Me],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);x(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Me=0,ze=ue.length;Me<ze;Me++){const Ce=ue[Me],ge=n.get(Ce);let Ee=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ee=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ge.__webglTexture),ne(Ee,Ce),ve(W.__webglFramebuffer,C,Ce,i.COLOR_ATTACHMENT0+Me,Ee,0),x(Ce)&&p(Ee)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,se.__webglTexture),ne(Me,S),S.mipmaps&&S.mipmaps.length>0)for(let ze=0;ze<S.mipmaps.length;ze++)ve(W.__webglFramebuffer[ze],C,S,i.COLOR_ATTACHMENT0,Me,ze);else ve(W.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,Me,0);x(S)&&p(Me),t.unbindTexture()}C.depthBuffer&&xe(C)}function ce(C){const S=C.textures;for(let W=0,se=S.length;W<se;W++){const ue=S[W];if(x(ue)){const ae=y(C),Ge=n.get(ue).__webglTexture;t.bindTexture(ae,Ge),p(ae),t.unbindTexture()}}}const J=[],re=[];function he(C){if(C.samples>0){if(me(C)===!1){const S=C.textures,W=C.width,se=C.height;let ue=i.COLOR_BUFFER_BIT;const ae=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(C),Me=S.length>1;if(Me)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const ze=C.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ce]);const ge=n.get(S[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,W,se,0,0,W,se,ue,i.NEAREST),l===!0&&(J.length=0,re.length=0,J.push(i.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.resolveDepthBuffer===!1&&(J.push(ae),re.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ce]);const ge=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function be(C){return Math.min(s.maxSamples,C.samples)}function me(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Fe(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function st(C,S){const W=C.colorSpace,se=C.format,ue=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Es&&W!==Vn&&(Dt.getTransfer(W)===Bt?(se!==yn||ue!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function at(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=D,this.rebindTextures=$,this.setupRenderTarget=A,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=me}function Kg(i,e){function t(n,s=Vn){let r;const a=Dt.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kh)return i.BYTE;if(n===Bh)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===Vh)return i.ALPHA;if(n===Wh)return i.RGB;if(n===yn)return i.RGBA;if(n===rr)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===_s)return i.RED;if(n===wl)return i.RED_INTEGER;if(n===qh)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===Kr||n===jr||n===Zr||n===Jr)if(a===Bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ro||n===Co||n===Lo||n===Po)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do||n===Io||n===Fo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Do||n===Io)return a===Bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uo||n===No||n===zo||n===Oo||n===ko||n===Bo||n===Ho||n===Go||n===Vo||n===Wo||n===qo||n===Xo||n===$o||n===Yo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===No)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===jo||n===Zo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return a===Bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===Qo||n===el||n===tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zg=`
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

}`;class Jg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new tf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:jg,fragmentShader:Zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qg extends Is{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const m=typeof XRWebGLBinding<"u",x=new Jg,p={},y=t.getContextAttributes();let _=null,v=null;const E=[],M=[],R=new rt;let P=null;const w=new Un;w.viewport=new Et;const b=new Un;b.viewport=new Et;const U=[w,b],N=new yd;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=E[Y];return te===void 0&&(te=new ka,E[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=E[Y];return te===void 0&&(te=new ka,E[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=E[Y];return te===void 0&&(te=new ka,E[Y]=te),te.getHandSpace()};function z(Y){const te=M.indexOf(Y.inputSource);if(te===-1)return;const ve=E[te];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,c||a),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",I);for(let Y=0;Y<E.length;Y++){const te=M[Y];te!==null&&(M[Y]=null,E[Y].disconnect(te))}L=null,k=null,x.reset();for(const Y in p)delete p[Y];e.setRenderTarget(_),d=null,f=null,u=null,s=null,v=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",F),s.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,K=null,ie=null;y.depth&&(ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=y.stencil?ar:rr,K=y.stencil?sr:Ei);const xe={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new hi(f.textureWidth,f.textureHeight,{format:yn,type:Zn,depthTexture:new Rl(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new hi(d.framebufferWidth,d.framebufferHeight,{format:yn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function I(Y){for(let te=0;te<Y.removed.length;te++){const ve=Y.removed[te],K=M.indexOf(ve);K>=0&&(M[K]=null,E[K].disconnect(ve))}for(let te=0;te<Y.added.length;te++){const ve=Y.added[te];let K=M.indexOf(ve);if(K===-1){for(let xe=0;xe<E.length;xe++)if(xe>=M.length){M.push(ve),K=xe;break}else if(M[xe]===null){M[xe]=ve,K=xe;break}if(K===-1)break}const ie=E[K];ie&&ie.connect(ve)}}const D=new O,V=new O;function B(Y,te,ve){D.setFromMatrixPosition(te.matrixWorld),V.setFromMatrixPosition(ve.matrixWorld);const K=D.distanceTo(V),ie=te.projectionMatrix.elements,xe=ve.projectionMatrix.elements,$=ie[14]/(ie[10]-1),A=ie[14]/(ie[10]+1),ce=(ie[9]+1)/ie[5],J=(ie[9]-1)/ie[5],re=(ie[8]-1)/ie[0],he=(xe[8]+1)/xe[0],be=$*re,me=$*he,Fe=K/(-re+he),st=Fe*-re;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(st),Y.translateZ(Fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ie[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const at=$+Fe,C=A+Fe,S=be-st,W=me+(K-st),se=ce*A/C*at,ue=J*A/C*at;Y.projectionMatrix.makePerspective(S,W,se,ue,at,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ee(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let te=Y.near,ve=Y.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),N.near=b.near=w.near=te,N.far=b.far=w.far=ve,(L!==N.near||k!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,k=N.far),N.layers.mask=Y.layers.mask|6,w.layers.mask=N.layers.mask&3,b.layers.mask=N.layers.mask&5;const K=Y.parent,ie=N.cameras;ee(N,K);for(let xe=0;xe<ie.length;xe++)ee(ie[xe],K);ie.length===2?B(N,w,b):N.projectionMatrix.copy(w.projectionMatrix),ne(Y,N,K)};function ne(Y,te,ve){ve===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=nl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(N)},this.getCameraTexture=function(Y){return p[Y]};let we=null;function _e(Y,te){if(h=te.getViewerPose(c||a),g=te,h!==null){const ve=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let K=!1;ve.length!==N.cameras.length&&(N.cameras.length=0,K=!0);for(let A=0;A<ve.length;A++){const ce=ve[A];let J=null;if(d!==null)J=d.getViewport(ce);else{const he=u.getViewSubImage(f,ce);J=he.viewport,A===0&&(e.setRenderTargetTextures(v,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(v))}let re=U[A];re===void 0&&(re=new Un,re.layers.enable(A),re.viewport=new Et,U[A]=re),re.matrix.fromArray(ce.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ce.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(J.x,J.y,J.width,J.height),A===0&&(N.matrix.copy(re.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),K===!0&&N.cameras.push(re)}const ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){u=n.getBinding();const A=u.getDepthInformation(ve[0]);A&&A.isValid&&A.texture&&x.init(A,s.renderState)}if(ie&&ie.includes("camera-access")&&m){e.state.unbindTexture(),u=n.getBinding();for(let A=0;A<ve.length;A++){const ce=ve[A].camera;if(ce){let J=p[ce];J||(J=new tf,p[ce]=J);const re=u.getCameraImage(ce);J.sourceTexture=re}}}}for(let ve=0;ve<E.length;ve++){const K=M[ve],ie=E[ve];K!==null&&ie!==void 0&&ie.update(K,te,c||a)}we&&we(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Te=new uf;Te.setAnimationLoop(_e),this.setAnimationLoop=function(Y){we=Y},this.dispose=function(){}}}const Ii=new On,ex=new It;function tx(i,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Jh(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),u(x,p)):p.isMeshPhongMaterial?(r(x,p),h(x,p)):p.isMeshStandardMaterial?(r(x,p),f(x,p),p.isMeshPhysicalMaterial&&d(x,p,v)):p.isMeshMatcapMaterial?(r(x,p),g(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),m(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?l(x,p,y,_):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===wn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===wn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,v=y.envMapRotation;_&&(x.envMap.value=_,Ii.copy(v),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),x.envMapRotation.value.setFromMatrix4(ex.makeRotationFromEuler(Ii)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,y,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=_*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function f(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,y){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,p){p.matcap&&(x.matcap.value=p.matcap)}function m(x,p){const y=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",x));const E=_.program;n.updateUBOMapping(y,E);const M=e.render.frame;r[y.id]!==M&&(f(y),r[y.id]=M)}function h(y){const _=u();y.__bindingPointIndex=_;const v=i.createBuffer(),E=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,R=v.length;M<R;M++){const P=Array.isArray(v[M])?v[M]:[v[M]];for(let w=0,b=P.length;w<b;w++){const U=P[w];if(d(U,M,w,E)===!0){const N=U.__offset,L=Array.isArray(U.value)?U.value:[U.value];let k=0;for(let z=0;z<L.length;z++){const F=L[z],I=m(F);typeof F=="number"||typeof F=="boolean"?(U.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,N+k,U.__data)):F.isMatrix3?(U.__data[0]=F.elements[0],U.__data[1]=F.elements[1],U.__data[2]=F.elements[2],U.__data[3]=0,U.__data[4]=F.elements[3],U.__data[5]=F.elements[4],U.__data[6]=F.elements[5],U.__data[7]=0,U.__data[8]=F.elements[6],U.__data[9]=F.elements[7],U.__data[10]=F.elements[8],U.__data[11]=0):(F.toArray(U.__data,k),k+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,v,E){const M=y.value,R=_+"_"+v;if(E[R]===void 0)return typeof M=="number"||typeof M=="boolean"?E[R]=M:E[R]=M.clone(),!0;{const P=E[R];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return E[R]=M,!0}else if(P.equals(M)===!1)return P.copy(M),!0}return!1}function g(y){const _=y.uniforms;let v=0;const E=16;for(let R=0,P=_.length;R<P;R++){const w=Array.isArray(_[R])?_[R]:[_[R]];for(let b=0,U=w.length;b<U;b++){const N=w[b],L=Array.isArray(N.value)?N.value:[N.value];for(let k=0,z=L.length;k<z;k++){const F=L[k],I=m(F),D=v%E,V=D%I.boundary,B=D+V;v+=V,B!==0&&E-B<I.storage&&(v+=E-B),N.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=I.storage}}}const M=v%E;return M>0&&(v+=E-M),y.__size=v,y.__cache={},this}function m(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function x(y){const _=y.target;_.removeEventListener("dispose",x);const v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ix{constructor(e={}){const{canvas:t=gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),m=new Int32Array(4);let x=null,p=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=fn;let M=0,R=0,P=null,w=-1,b=null;const U=new Et,N=new Et;let L=null;const k=new Qe(0);let z=0,F=t.width,I=t.height,D=1,V=null,B=null;const ee=new Et(0,0,F,I),ne=new Et(0,0,F,I);let we=!1;const _e=new la;let Te=!1,Y=!1;const te=new It,ve=new O,K=new Et,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function $(){return P===null?D:1}let A=n;function ce(T,q){return t.getContext(T,q)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gl}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",oe,!1),A===null){const q="webgl2";if(A=ce(q,T),A===null)throw ce(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let J,re,he,be,me,Fe,st,at,C,S,W,se,ue,ae,Ge,Me,ze,Ce,ge,Ee,je,Ie,pe,et;function G(){J=new dm(A),J.init(),Ie=new Kg(A,J),re=new am(A,J,e,Ie),he=new $g(A,J),re.reversedDepthBuffer&&f&&he.buffers.depth.setReversed(!0),be=new gm(A),me=new Fg,Fe=new Yg(A,J,he,me,re,Ie,be),st=new lm(v),at=new um(v),C=new Md(A),pe=new sm(A,C),S=new pm(A,C,be,pe),W=new vm(A,S,C,be),ge=new xm(A,re,Fe),Me=new om(me),se=new Ig(v,st,at,J,re,pe,Me),ue=new tx(v,me),ae=new Ng,Ge=new Gg(J),Ce=new im(v,st,at,he,W,d,l),ze=new qg(v,W,re),et=new nx(A,be,re,he),Ee=new rm(A,J,be),je=new mm(A,J,be),be.programs=se.programs,v.capabilities=re,v.extensions=J,v.properties=me,v.renderLists=ae,v.shadowMap=ze,v.state=he,v.info=be}G();const le=new Qg(v,A);this.xr=le,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const T=J.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=J.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(T){T!==void 0&&(D=T,this.setSize(F,I,!1))},this.getSize=function(T){return T.set(F,I)},this.setSize=function(T,q,j=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,I=q,t.width=Math.floor(T*D),t.height=Math.floor(q*D),j===!0&&(t.style.width=T+"px",t.style.height=q+"px"),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(F*D,I*D).floor()},this.setDrawingBufferSize=function(T,q,j){F=T,I=q,D=j,t.width=Math.floor(T*j),t.height=Math.floor(q*j),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(ee)},this.setViewport=function(T,q,j,Z){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,q,j,Z),he.viewport(U.copy(ee).multiplyScalar(D).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,q,j,Z){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,q,j,Z),he.scissor(N.copy(ne).multiplyScalar(D).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(T){he.setScissorTest(we=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){B=T},this.getClearColor=function(T){return T.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,j=!0){let Z=0;if(T){let X=!1;if(P!==null){const Re=P.texture.format;X=Re===bl||Re===Ml||Re===wl}if(X){const Re=P.texture.type,Ue=Re===Zn||Re===Ei||Re===ir||Re===sr||Re===_l||Re===yl,Ve=Ce.getClearColor(),He=Ce.getClearAlpha(),Je=Ve.r,ot=Ve.g,qe=Ve.b;Ue?(g[0]=Je,g[1]=ot,g[2]=qe,g[3]=He,A.clearBufferuiv(A.COLOR,0,g)):(m[0]=Je,m[1]=ot,m[2]=qe,m[3]=He,A.clearBufferiv(A.COLOR,0,m))}else Z|=A.COLOR_BUFFER_BIT}q&&(Z|=A.DEPTH_BUFFER_BIT),j&&(Z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Ce.dispose(),ae.dispose(),Ge.dispose(),me.dispose(),st.dispose(),at.dispose(),W.dispose(),pe.dispose(),et.dispose(),se.dispose(),le.dispose(),le.removeEventListener("sessionstart",ye),le.removeEventListener("sessionend",We),Ke.stop()};function fe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=be.autoReset,q=ze.enabled,j=ze.autoUpdate,Z=ze.needsUpdate,X=ze.type;G(),be.autoReset=T,ze.enabled=q,ze.autoUpdate=j,ze.needsUpdate=Z,ze.type=X}function oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Q(T){const q=T.target;q.removeEventListener("dispose",Q),Le(q)}function Le(T){Ne(T),me.remove(T)}function Ne(T){const q=me.get(T).programs;q!==void 0&&(q.forEach(function(j){se.releaseProgram(j)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,j,Z,X,Re){q===null&&(q=ie);const Ue=X.isMesh&&X.matrixWorld.determinant()<0,Ve=_t(T,q,j,Z,X);he.setMaterial(Z,Ue);let He=j.index,Je=1;if(Z.wireframe===!0){if(He=S.getWireframeAttribute(j),He===void 0)return;Je=2}const ot=j.drawRange,qe=j.attributes.position;let ut=ot.start*Je,At=(ot.start+ot.count)*Je;Re!==null&&(ut=Math.max(ut,Re.start*Je),At=Math.min(At,(Re.start+Re.count)*Je)),He!==null?(ut=Math.max(ut,0),At=Math.min(At,He.count)):qe!=null&&(ut=Math.max(ut,0),At=Math.min(At,qe.count));const Ut=At-ut;if(Ut<0||Ut===1/0)return;pe.setup(X,Z,Ve,j,He);let zt,Tt=Ee;if(He!==null&&(zt=C.get(He),Tt=je,Tt.setIndex(zt)),X.isMesh)Z.wireframe===!0?(he.setLineWidth(Z.wireframeLinewidth*$()),Tt.setMode(A.LINES)):Tt.setMode(A.TRIANGLES);else if(X.isLine){let $e=Z.linewidth;$e===void 0&&($e=1),he.setLineWidth($e*$()),X.isLineSegments?Tt.setMode(A.LINES):X.isLineLoop?Tt.setMode(A.LINE_LOOP):Tt.setMode(A.LINE_STRIP)}else X.isPoints?Tt.setMode(A.POINTS):X.isSprite&&Tt.setMode(A.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Tt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const $e=X._multiDrawStarts,Ze=X._multiDrawCounts,ct=X._multiDrawCount,pt=He?C.get(He).bytesPerElement:1,Lt=me.get(Z).currentProgram.getUniforms();for(let yt=0;yt<ct;yt++)Lt.setValue(A,"_gl_DrawID",yt),Tt.render($e[yt]/pt,Ze[yt])}else if(X.isInstancedMesh)Tt.renderInstances(ut,Ut,X.count);else if(j.isInstancedBufferGeometry){const $e=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ze=Math.min(j.instanceCount,$e);Tt.renderInstances(ut,Ut,Ze)}else Tt.render(ut,Ut)};function ke(T,q,j){T.transparent===!0&&T.side===ln&&T.forceSinglePass===!1?(T.side=wn,T.needsUpdate=!0,Pe(T,q,j),T.side=Si,T.needsUpdate=!0,Pe(T,q,j),T.side=ln):Pe(T,q,j)}this.compile=function(T,q,j=null){j===null&&(j=T),p=Ge.get(j),p.init(q),_.push(p),j.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),T!==j&&T.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const Z=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Re=X.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){const Ve=Re[Ue];ke(Ve,j,X),Z.add(Ve)}else ke(Re,j,X),Z.add(Re)}),p=_.pop(),Z},this.compileAsync=function(T,q,j=null){const Z=this.compile(T,q,j);return new Promise(X=>{function Re(){if(Z.forEach(function(Ue){me.get(Ue).currentProgram.isReady()&&Z.delete(Ue)}),Z.size===0){X(T);return}setTimeout(Re,10)}J.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Ye=null;function H(T){Ye&&Ye(T)}function ye(){Ke.stop()}function We(){Ke.start()}const Ke=new uf;Ke.setAnimationLoop(H),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(T){Ye=T,le.setAnimationLoop(T),T===null?Ke.stop():Ke.start()},le.addEventListener("sessionstart",ye),le.addEventListener("sessionend",We),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(q),q=le.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,q,P),p=Ge.get(T,_.length),p.init(q),_.push(p),te.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),_e.setFromProjectionMatrix(te,Kn,q.reversedDepth),Y=this.localClippingEnabled,Te=Me.init(this.clippingPlanes,Y),x=ae.get(T,y.length),x.init(),y.push(x),le.enabled===!0&&le.isPresenting===!0){const Re=v.xr.getDepthSensingMesh();Re!==null&&nt(Re,q,-1/0,v.sortObjects)}nt(T,q,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(V,B),xe=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,xe&&Ce.addToRenderList(x,T),this.info.render.frame++,Te===!0&&Me.beginShadows();const j=p.state.shadowsArray;ze.render(j,T,q),Te===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=x.opaque,X=x.transmissive;if(p.setupLights(),q.isArrayCamera){const Re=q.cameras;if(X.length>0)for(let Ue=0,Ve=Re.length;Ue<Ve;Ue++){const He=Re[Ue];lt(Z,X,T,He)}xe&&Ce.render(T);for(let Ue=0,Ve=Re.length;Ue<Ve;Ue++){const He=Re[Ue];wt(x,T,He,He.viewport)}}else X.length>0&&lt(Z,X,T,q),xe&&Ce.render(T),wt(x,T,q);P!==null&&R===0&&(Fe.updateMultisampleRenderTarget(P),Fe.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(v,T,q),pe.resetDefaultState(),w=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],Te===!0&&Me.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?x=y[y.length-1]:x=null};function nt(T,q,j,Z){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||_e.intersectsSprite(T)){Z&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(te);const Ue=W.update(T),Ve=T.material;Ve.visible&&x.push(T,Ue,Ve,j,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||_e.intersectsObject(T))){const Ue=W.update(T),Ve=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),K.copy(T.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),K.copy(Ue.boundingSphere.center)),K.applyMatrix4(T.matrixWorld).applyMatrix4(te)),Array.isArray(Ve)){const He=Ue.groups;for(let Je=0,ot=He.length;Je<ot;Je++){const qe=He[Je],ut=Ve[qe.materialIndex];ut&&ut.visible&&x.push(T,Ue,ut,j,K.z,qe)}}else Ve.visible&&x.push(T,Ue,Ve,j,K.z,null)}}const Re=T.children;for(let Ue=0,Ve=Re.length;Ue<Ve;Ue++)nt(Re[Ue],q,j,Z)}function wt(T,q,j,Z){const X=T.opaque,Re=T.transmissive,Ue=T.transparent;p.setupLightsView(j),Te===!0&&Me.setGlobalState(v.clippingPlanes,j),Z&&he.viewport(U.copy(Z)),X.length>0&&De(X,q,j),Re.length>0&&De(Re,q,j),Ue.length>0&&De(Ue,q,j),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function lt(T,q,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new hi(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Vi:Zn,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Re=p.state.transmissionRenderTarget[Z.id],Ue=Z.viewport||U;Re.setSize(Ue.z*v.transmissionResolutionScale,Ue.w*v.transmissionResolutionScale);const Ve=v.getRenderTarget(),He=v.getActiveCubeFace(),Je=v.getActiveMipmapLevel();v.setRenderTarget(Re),v.getClearColor(k),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),xe&&Ce.render(j);const ot=v.toneMapping;v.toneMapping=bi;const qe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),Te===!0&&Me.setGlobalState(v.clippingPlanes,Z),De(T,j,Z),Fe.updateMultisampleRenderTarget(Re),Fe.updateRenderTargetMipmap(Re),J.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let At=0,Ut=q.length;At<Ut;At++){const zt=q[At],Tt=zt.object,$e=zt.geometry,Ze=zt.material,ct=zt.group;if(Ze.side===ln&&Tt.layers.test(Z.layers)){const pt=Ze.side;Ze.side=wn,Ze.needsUpdate=!0,Ae(Tt,j,Z,$e,Ze,ct),Ze.side=pt,Ze.needsUpdate=!0,ut=!0}}ut===!0&&(Fe.updateMultisampleRenderTarget(Re),Fe.updateRenderTargetMipmap(Re))}v.setRenderTarget(Ve,He,Je),v.setClearColor(k,z),qe!==void 0&&(Z.viewport=qe),v.toneMapping=ot}function De(T,q,j){const Z=q.isScene===!0?q.overrideMaterial:null;for(let X=0,Re=T.length;X<Re;X++){const Ue=T[X],Ve=Ue.object,He=Ue.geometry,Je=Ue.group;let ot=Ue.material;ot.allowOverride===!0&&Z!==null&&(ot=Z),Ve.layers.test(j.layers)&&Ae(Ve,q,j,He,ot,Je)}}function Ae(T,q,j,Z,X,Re){T.onBeforeRender(v,q,j,Z,X,Re),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(v,q,j,Z,T,Re),X.transparent===!0&&X.side===ln&&X.forceSinglePass===!1?(X.side=wn,X.needsUpdate=!0,v.renderBufferDirect(j,q,Z,X,T,Re),X.side=Si,X.needsUpdate=!0,v.renderBufferDirect(j,q,Z,X,T,Re),X.side=ln):v.renderBufferDirect(j,q,Z,X,T,Re),T.onAfterRender(v,q,j,Z,X,Re)}function Pe(T,q,j){q.isScene!==!0&&(q=ie);const Z=me.get(T),X=p.state.lights,Re=p.state.shadowsArray,Ue=X.state.version,Ve=se.getParameters(T,X.state,Re,q,j),He=se.getProgramCacheKey(Ve);let Je=Z.programs;Z.environment=T.isMeshStandardMaterial?q.environment:null,Z.fog=q.fog,Z.envMap=(T.isMeshStandardMaterial?at:st).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,Je===void 0&&(T.addEventListener("dispose",Q),Je=new Map,Z.programs=Je);let ot=Je.get(He);if(ot!==void 0){if(Z.currentProgram===ot&&Z.lightsStateVersion===Ue)return ft(T,Ve),ot}else Ve.uniforms=se.getUniforms(T),T.onBeforeCompile(Ve,v),ot=se.acquireProgram(Ve,He),Je.set(He,ot),Z.uniforms=Ve.uniforms;const qe=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qe.clippingPlanes=Me.uniform),ft(T,Ve),Z.needsLights=Ft(T),Z.lightsStateVersion=Ue,Z.needsLights&&(qe.ambientLightColor.value=X.state.ambient,qe.lightProbe.value=X.state.probe,qe.directionalLights.value=X.state.directional,qe.directionalLightShadows.value=X.state.directionalShadow,qe.spotLights.value=X.state.spot,qe.spotLightShadows.value=X.state.spotShadow,qe.rectAreaLights.value=X.state.rectArea,qe.ltc_1.value=X.state.rectAreaLTC1,qe.ltc_2.value=X.state.rectAreaLTC2,qe.pointLights.value=X.state.point,qe.pointLightShadows.value=X.state.pointShadow,qe.hemisphereLights.value=X.state.hemi,qe.directionalShadowMap.value=X.state.directionalShadowMap,qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,qe.spotShadowMap.value=X.state.spotShadowMap,qe.spotLightMatrix.value=X.state.spotLightMatrix,qe.spotLightMap.value=X.state.spotLightMap,qe.pointShadowMap.value=X.state.pointShadowMap,qe.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=ot,Z.uniformsList=null,ot}function Xe(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=Qr.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function ft(T,q){const j=me.get(T);j.outputColorSpace=q.outputColorSpace,j.batching=q.batching,j.batchingColor=q.batchingColor,j.instancing=q.instancing,j.instancingColor=q.instancingColor,j.instancingMorph=q.instancingMorph,j.skinning=q.skinning,j.morphTargets=q.morphTargets,j.morphNormals=q.morphNormals,j.morphColors=q.morphColors,j.morphTargetsCount=q.morphTargetsCount,j.numClippingPlanes=q.numClippingPlanes,j.numIntersection=q.numClipIntersection,j.vertexAlphas=q.vertexAlphas,j.vertexTangents=q.vertexTangents,j.toneMapping=q.toneMapping}function _t(T,q,j,Z,X){q.isScene!==!0&&(q=ie),Fe.resetTextureUnits();const Re=q.fog,Ue=Z.isMeshStandardMaterial?q.environment:null,Ve=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Es,He=(Z.isMeshStandardMaterial?at:st).get(Z.envMap||Ue),Je=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ot=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),qe=!!j.morphAttributes.position,ut=!!j.morphAttributes.normal,At=!!j.morphAttributes.color;let Ut=bi;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ut=v.toneMapping);const zt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Tt=zt!==void 0?zt.length:0,$e=me.get(Z),Ze=p.state.lights;if(Te===!0&&(Y===!0||T!==b)){const gt=T===b&&Z.id===w;Me.setState(Z,T,gt)}let ct=!1;Z.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ze.state.version||$e.outputColorSpace!==Ve||X.isBatchedMesh&&$e.batching===!1||!X.isBatchedMesh&&$e.batching===!0||X.isBatchedMesh&&$e.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&$e.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&$e.instancing===!1||!X.isInstancedMesh&&$e.instancing===!0||X.isSkinnedMesh&&$e.skinning===!1||!X.isSkinnedMesh&&$e.skinning===!0||X.isInstancedMesh&&$e.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&$e.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&$e.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&$e.instancingMorph===!1&&X.morphTexture!==null||$e.envMap!==He||Z.fog===!0&&$e.fog!==Re||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Me.numPlanes||$e.numIntersection!==Me.numIntersection)||$e.vertexAlphas!==Je||$e.vertexTangents!==ot||$e.morphTargets!==qe||$e.morphNormals!==ut||$e.morphColors!==At||$e.toneMapping!==Ut||$e.morphTargetsCount!==Tt)&&(ct=!0):(ct=!0,$e.__version=Z.version);let pt=$e.currentProgram;ct===!0&&(pt=Pe(Z,q,X));let Lt=!1,yt=!1,ht=!1;const Be=pt.getUniforms(),it=$e.uniforms;if(he.useProgram(pt.program)&&(Lt=!0,yt=!0,ht=!0),Z.id!==w&&(w=Z.id,yt=!0),Lt||b!==T){he.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Be.setValue(A,"projectionMatrix",T.projectionMatrix),Be.setValue(A,"viewMatrix",T.matrixWorldInverse);const Gt=Be.map.cameraPosition;Gt!==void 0&&Gt.setValue(A,ve.setFromMatrixPosition(T.matrixWorld)),re.logarithmicDepthBuffer&&Be.setValue(A,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Be.setValue(A,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,yt=!0,ht=!0)}if(X.isSkinnedMesh){Be.setOptional(A,X,"bindMatrix"),Be.setOptional(A,X,"bindMatrixInverse");const gt=X.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),Be.setValue(A,"boneTexture",gt.boneTexture,Fe))}X.isBatchedMesh&&(Be.setOptional(A,X,"batchingTexture"),Be.setValue(A,"batchingTexture",X._matricesTexture,Fe),Be.setOptional(A,X,"batchingIdTexture"),Be.setValue(A,"batchingIdTexture",X._indirectTexture,Fe),Be.setOptional(A,X,"batchingColorTexture"),X._colorsTexture!==null&&Be.setValue(A,"batchingColorTexture",X._colorsTexture,Fe));const mt=j.morphAttributes;if((mt.position!==void 0||mt.normal!==void 0||mt.color!==void 0)&&ge.update(X,j,pt),(yt||$e.receiveShadow!==X.receiveShadow)&&($e.receiveShadow=X.receiveShadow,Be.setValue(A,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(it.envMap.value=He,it.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&q.environment!==null&&(it.envMapIntensity.value=q.environmentIntensity),yt&&(Be.setValue(A,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&Mt(it,ht),Re&&Z.fog===!0&&ue.refreshFogUniforms(it,Re),ue.refreshMaterialUniforms(it,Z,D,I,p.state.transmissionRenderTarget[T.id]),Qr.upload(A,Xe($e),it,Fe)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Qr.upload(A,Xe($e),it,Fe),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Be.setValue(A,"center",X.center),Be.setValue(A,"modelViewMatrix",X.modelViewMatrix),Be.setValue(A,"normalMatrix",X.normalMatrix),Be.setValue(A,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const gt=Z.uniformsGroups;for(let Gt=0,Mn=gt.length;Gt<Mn;Gt++){const qt=gt[Gt];et.update(qt,pt),et.bind(qt,pt)}}return pt}function Mt(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Ft(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,q,j){const Z=me.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),me.get(T.texture).__webglTexture=q,me.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const j=me.get(T);j.__webglFramebuffer=q,j.__useDefaultFramebuffer=q===void 0};const Wt=A.createFramebuffer();this.setRenderTarget=function(T,q=0,j=0){P=T,M=q,R=j;let Z=!0,X=null,Re=!1,Ue=!1;if(T){const He=me.get(T);if(He.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(A.FRAMEBUFFER,null),Z=!1;else if(He.__webglFramebuffer===void 0)Fe.setupRenderTarget(T);else if(He.__hasExternalTextures)Fe.rebindTextures(T,me.get(T.texture).__webglTexture,me.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const qe=T.depthTexture;if(He.__boundDepthTexture!==qe){if(qe!==null&&me.has(qe)&&(T.width!==qe.image.width||T.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(T)}}const Je=T.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ue=!0);const ot=me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ot[q])?X=ot[q][j]:X=ot[q],Re=!0):T.samples>0&&Fe.useMultisampledRTT(T)===!1?X=me.get(T).__webglMultisampledFramebuffer:Array.isArray(ot)?X=ot[j]:X=ot,U.copy(T.viewport),N.copy(T.scissor),L=T.scissorTest}else U.copy(ee).multiplyScalar(D).floor(),N.copy(ne).multiplyScalar(D).floor(),L=we;if(j!==0&&(X=Wt),he.bindFramebuffer(A.FRAMEBUFFER,X)&&Z&&he.drawBuffers(T,X),he.viewport(U),he.scissor(N),he.setScissorTest(L),Re){const He=me.get(T.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+q,He.__webglTexture,j)}else if(Ue){const He=q;for(let Je=0;Je<T.textures.length;Je++){const ot=me.get(T.textures[Je]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Je,ot.__webglTexture,j,He)}}else if(T!==null&&j!==0){const He=me.get(T.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,He.__webglTexture,j)}w=-1},this.readRenderTargetPixels=function(T,q,j,Z,X,Re,Ue,Ve=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(He=He[Ue]),He){he.bindFramebuffer(A.FRAMEBUFFER,He);try{const Je=T.textures[Ve],ot=Je.format,qe=Je.type;if(!re.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-Z&&j>=0&&j<=T.height-X&&(T.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ve),A.readPixels(q,j,Z,X,Ie.convert(ot),Ie.convert(qe),Re))}finally{const Je=P!==null?me.get(P).__webglFramebuffer:null;he.bindFramebuffer(A.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(T,q,j,Z,X,Re,Ue,Ve=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(He=He[Ue]),He)if(q>=0&&q<=T.width-Z&&j>=0&&j<=T.height-X){he.bindFramebuffer(A.FRAMEBUFFER,He);const Je=T.textures[Ve],ot=Je.format,qe=Je.type;if(!re.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ut),A.bufferData(A.PIXEL_PACK_BUFFER,Re.byteLength,A.STREAM_READ),T.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ve),A.readPixels(q,j,Z,X,Ie.convert(ot),Ie.convert(qe),0);const At=P!==null?me.get(P).__webglFramebuffer:null;he.bindFramebuffer(A.FRAMEBUFFER,At);const Ut=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await xu(A,Ut,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ut),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Re),A.deleteBuffer(ut),A.deleteSync(Ut),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,j=0){const Z=Math.pow(2,-j),X=Math.floor(T.image.width*Z),Re=Math.floor(T.image.height*Z),Ue=q!==null?q.x:0,Ve=q!==null?q.y:0;Fe.setTexture2D(T,0),A.copyTexSubImage2D(A.TEXTURE_2D,j,0,0,Ue,Ve,X,Re),he.unbindTexture()};const Ht=A.createFramebuffer(),tn=A.createFramebuffer();this.copyTextureToTexture=function(T,q,j=null,Z=null,X=0,Re=null){Re===null&&(X!==0?(lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=X,X=0):Re=0);let Ue,Ve,He,Je,ot,qe,ut,At,Ut;const zt=T.isCompressedTexture?T.mipmaps[Re]:T.image;if(j!==null)Ue=j.max.x-j.min.x,Ve=j.max.y-j.min.y,He=j.isBox3?j.max.z-j.min.z:1,Je=j.min.x,ot=j.min.y,qe=j.isBox3?j.min.z:0;else{const mt=Math.pow(2,-X);Ue=Math.floor(zt.width*mt),Ve=Math.floor(zt.height*mt),T.isDataArrayTexture?He=zt.depth:T.isData3DTexture?He=Math.floor(zt.depth*mt):He=1,Je=0,ot=0,qe=0}Z!==null?(ut=Z.x,At=Z.y,Ut=Z.z):(ut=0,At=0,Ut=0);const Tt=Ie.convert(q.format),$e=Ie.convert(q.type);let Ze;q.isData3DTexture?(Fe.setTexture3D(q,0),Ze=A.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Fe.setTexture2DArray(q,0),Ze=A.TEXTURE_2D_ARRAY):(Fe.setTexture2D(q,0),Ze=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,q.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,q.unpackAlignment);const ct=A.getParameter(A.UNPACK_ROW_LENGTH),pt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Lt=A.getParameter(A.UNPACK_SKIP_PIXELS),yt=A.getParameter(A.UNPACK_SKIP_ROWS),ht=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,zt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,zt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Je),A.pixelStorei(A.UNPACK_SKIP_ROWS,ot),A.pixelStorei(A.UNPACK_SKIP_IMAGES,qe);const Be=T.isDataArrayTexture||T.isData3DTexture,it=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const mt=me.get(T),gt=me.get(q),Gt=me.get(mt.__renderTarget),Mn=me.get(gt.__renderTarget);he.bindFramebuffer(A.READ_FRAMEBUFFER,Gt.__webglFramebuffer),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let qt=0;qt<He;qt++)Be&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.get(T).__webglTexture,X,qe+qt),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.get(q).__webglTexture,Re,Ut+qt)),A.blitFramebuffer(Je,ot,Ue,Ve,ut,At,Ue,Ve,A.DEPTH_BUFFER_BIT,A.NEAREST);he.bindFramebuffer(A.READ_FRAMEBUFFER,null),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||me.has(T)){const mt=me.get(T),gt=me.get(q);he.bindFramebuffer(A.READ_FRAMEBUFFER,Ht),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,tn);for(let Gt=0;Gt<He;Gt++)Be?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,mt.__webglTexture,X,qe+Gt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,mt.__webglTexture,X),it?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,gt.__webglTexture,Re,Ut+Gt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,gt.__webglTexture,Re),X!==0?A.blitFramebuffer(Je,ot,Ue,Ve,ut,At,Ue,Ve,A.COLOR_BUFFER_BIT,A.NEAREST):it?A.copyTexSubImage3D(Ze,Re,ut,At,Ut+Gt,Je,ot,Ue,Ve):A.copyTexSubImage2D(Ze,Re,ut,At,Je,ot,Ue,Ve);he.bindFramebuffer(A.READ_FRAMEBUFFER,null),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else it?T.isDataTexture||T.isData3DTexture?A.texSubImage3D(Ze,Re,ut,At,Ut,Ue,Ve,He,Tt,$e,zt.data):q.isCompressedArrayTexture?A.compressedTexSubImage3D(Ze,Re,ut,At,Ut,Ue,Ve,He,Tt,zt.data):A.texSubImage3D(Ze,Re,ut,At,Ut,Ue,Ve,He,Tt,$e,zt):T.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Re,ut,At,Ue,Ve,Tt,$e,zt.data):T.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Re,ut,At,zt.width,zt.height,Tt,zt.data):A.texSubImage2D(A.TEXTURE_2D,Re,ut,At,Ue,Ve,Tt,$e,zt);A.pixelStorei(A.UNPACK_ROW_LENGTH,ct),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,pt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Lt),A.pixelStorei(A.UNPACK_SKIP_ROWS,yt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ht),Re===0&&q.generateMipmaps&&A.generateMipmap(Ze),he.unbindTexture()},this.initRenderTarget=function(T){me.get(T).__webglFramebuffer===void 0&&Fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Fe.setTextureCube(T,0):T.isData3DTexture?Fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Fe.setTexture2DArray(T,0):Fe.setTexture2D(T,0),he.unbindTexture()},this.resetState=function(){M=0,R=0,P=null,he.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}const Se={POS:0,ROT:3,VEL:7,SPEED:13,RPM:14,GEAR:15,WHEELS:18,WHEEL_STRIDE:8,W_LENGTH:0,W_ANGLE:1,W_SPIN:2,W_SLIP:4,W_SLIP_TAN:5,W_GROUNDED:6,W_STEER:7,CRUSH:50,POWER:54,DAMAGE:56,FLOOD:58,DROWNED:59,HOLDS:61,WHEELS_OFF:62,SOFT_AWAKE:63,GLASS:70,THINGS_OFF:71,THINGS_GONE:72,FIXINGS:73,EXPLODED:64,WEAR:66},$t={BLOW:1,SNAPPED:2,GLASS:3,SPLASH:4,HORN:5,WRECK:6,CAME_OFF:7,PANEL:8,FELL:9,EXPLODED:10,FIXING:11,PANE:12,THING:13},Bc=["shell","bonnet","boot lid","front bumper","rear bumper","left door","right door","left wing","right wing"],sx=["radiator","engine","battery","steering column","dash","left seat","right seat","tank","exhaust"];function Hc(i,e){const t=i.p2p_strength_says(e,1),n=i.p2p_strength_says(e,2);return{times:i.p2p_strength_says(e,0),cap:t>0?t:null,boom:n>=0?n:null,hero:i.p2p_strength_says(e,3)>.5}}function rx(i){return{real:i.p2p_strength_says(0,4),ordinary:i.p2p_strength_says(0,5)}}const ur=17,Vt={ID:0,WHAT:1,WHICH:2,STATE:3,POS:4,ROT:7,HALF:11,VEL:14},Jt={BODIES:0,AWAKE:1,WALLS:2,WALL_COLLIDERS:3,PIECES:4,PARTS:5,BROKEN:6,FALLEN:7,PLANNED:10,PARTITIONS:11,HELD:12,THINGS:13,ARMED:14,OWN:15},ax=21;function Gc(i){const e=new TextDecoder,t=[];for(let n=0;n<i.p2p_room_kind_count();n++)t.push(e.decode(new Uint8Array(i.memory.buffer,i.p2p_room_kind_name(n),i.p2p_room_kind_name_len(n))));return t}function Vc(i){const e=new TextDecoder,t=[];for(let n=0;n<i.p2p_kind_count();n++)t.push(e.decode(new Uint8Array(i.memory.buffer,i.p2p_kind_name(n),i.p2p_kind_name_len(n))));return t}function Ka(i){const e=i.p2p_rubble_stride();if(e!==ur)throw new Error(`the sim core reports a piece of rubble in ${e} floats and this page reads ${ur}: they are from different builds`);const t=new TextDecoder,n=[];for(let s=0;s<i.p2p_panel_kind_count();s++)n.push(t.decode(new Uint8Array(i.memory.buffer,i.p2p_panel_kind_name(s),i.p2p_panel_kind_name_len(s))));return n}function ja(i){const e=new TextDecoder,t=new Map;for(let n=0;n<i.p2p_kind_count();n++){const s=e.decode(new Uint8Array(i.memory.buffer,i.p2p_kind_name(n),i.p2p_kind_name_len(n)));t.set(s,{name:s,half:[i.p2p_kind_half(n,0),i.p2p_kind_half(n,1),i.p2p_kind_half(n,2)]})}return t}const dr=13,jt={INDEX:0,POS:1,ROT:4,SPEED:8,LOOK:9,FLAGS:10,KIND:11,CURVE:12},Ws={BRAKING:1,HORN:2,WRECK:4,LEFT:8,RIGHT:16};function ox(i){const e=i.p2p_traffic_stride();if(e!==dr)throw new Error(`the sim core reports a car of traffic in ${e} floats and this page reads ${dr}: they are from different builds`);const t=new TextDecoder,n=[];for(let s=0;s<i.p2p_vehicle_count();s++)n.push({index:s,name:t.decode(new Uint8Array(i.memory.buffer,i.p2p_vehicle_name(s),i.p2p_vehicle_name_len(s))),half:[i.p2p_vehicle_half(s,0),i.p2p_vehicle_half(s,1),i.p2p_vehicle_half(s,2)],clearance:i.p2p_vehicle_half(s,3)});return n}const Fl=i=>BigInt.asUintN(64,i).toString(16).padStart(16,"0");async function lx(i){const e=await fetch(i);if(!e.ok)throw new Error(`the sim core did not load (${e.status})`);const{instance:t}=await WebAssembly.instantiate(await e.arrayBuffer(),{});return t.exports}function cx(i){const e=(s,r)=>new TextDecoder().decode(new Uint8Array(i.memory.buffer,s,r)),t=[];for(let s=0;s<i.p2p_param_count();s++)t.push(e(i.p2p_param_name(s),i.p2p_param_name_len(s)));const n=[];for(let s=0;s<i.p2p_car_count();s++)n.push({index:s,name:e(i.p2p_car_name(s),i.p2p_car_name_len(s)),says:e(i.p2p_car_says(s),i.p2p_car_says_len(s)),param:r=>i.p2p_car_param(s,t.indexOf(r))});return n}const qs=new Float32Array(0);class Wc{constructor(e,t,n=1,s=0){this.core=e;const r=e.p2p_alloc(t.length);if(new Uint8Array(e.memory.buffer,r,t.length).set(t),this.ptr=e.p2p_new_car(n>>>0,0,r,t.length,s),e.p2p_free(r,t.length),!this.ptr)throw new Error("the sim core refused the world file");this.tickRate=e.p2p_tick_rate(),this.len=e.p2p_state_len()}tickRate;ptr;len;place(e,t,n){this.core.p2p_place(this.ptr,e,t,n)}placeAt(e,t,n,s){this.core.p2p_place_at(this.ptr,e,t,n,s)}step(e){this.core.p2p_step(this.ptr,e.steer,e.throttle,e.brake,e.handbrake)}read(e){e.set(new Float32Array(this.core.memory.buffer,this.core.p2p_state(this.ptr),this.len))}get stateLength(){return this.len}get tick(){return this.core.p2p_tick(this.ptr)}digest(){return Fl(this.core.p2p_digest(this.ptr))}drop(){this.ptr&&this.core.p2p_drop(this.ptr),this.ptr=0}movedProps(){const e=this.core.p2p_props_drain(this.ptr);return e?new Float32Array(this.core.memory.buffer,this.core.p2p_props_ptr(this.ptr),e*8).slice():qs}traffic(){const e=this.core.p2p_traffic_drain(this.ptr);return{count:e,cars:e?new Float32Array(this.core.memory.buffer,this.core.p2p_traffic_ptr(this.ptr),e*dr):qs}}setSoft(e){this.core.p2p_soft_set(this.ptr,e?1:0)}setStrength(e){this.core.p2p_strength_set(this.ptr,Math.max(0,Math.min(100,Math.round(e))))}softBuilt(){const e=this.core.p2p_soft_drain(this.ptr);if(!e)return null;const t=new Float32Array(e*3),n=new Int16Array(e);for(let a=0;a<e;a++){for(let o=0;o<3;o++)t[a*3+o]=this.core.p2p_soft_built(this.ptr,a,o);n[a]=this.core.p2p_soft_built(this.ptr,a,3)}const s=a=>this.core.p2p_soft_info(this.ptr,a),r=[];for(let a=0;a<s(7);a++)r.push({first:this.core.p2p_soft_thing(a,0),count:this.core.p2p_soft_thing(a,1),leaves:this.core.p2p_soft_thing(a,2)>0});return{rest:t,kind:n,frameCount:s(0),frame:s(1),hubs:s(2),parts:s(3),sheets:s(5),ring:s(8),stations:s(9),things:r}}fixings(e){const t=this.core.p2p_soft_fixings(this.ptr,e);return{held:t&255,built:t>>8}}shove(e,t){this.core.p2p_shove(this.ptr,e,t)}softNow(){const e=this.core.p2p_soft_drain(this.ptr),t=this.core.p2p_loose_count(this.ptr);return{nodes:e?new Float32Array(this.core.memory.buffer,this.core.p2p_soft_ptr(this.ptr),e*3).slice():qs,loose:t?new Float32Array(this.core.memory.buffer,this.core.p2p_loose_ptr(this.ptr),t*8).slice():qs}}get panelCount(){return this.core.p2p_panel_count(this.ptr)}panel(e){const t=this.core.p2p_panel(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,t,11);return{index:e,x0:n[0],z0:n[1],x1:n[2],z1:n[3],foot:n[4],holeTop:n[5],top:n[6],building:n[7],kind:n[8],state:n[9],role:n[10]}}rubble(){const e=this.core.p2p_rubble_drain(this.ptr);return e?new Float32Array(this.core.memory.buffer,this.core.p2p_rubble_ptr(this.ptr),e*ur).slice():qs}inside(e){const t=this.core.p2p_inside(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,this.core.p2p_inside_ptr(this.ptr),t),s={arche:n[0],made:n[5]===1,held:n[6]===1,walls:n[7],rooms:[],parts:[],doors:[],items:[]};let r=8;for(let a=0;a<n[1];a++,r+=9)s.rooms.push({quad:[[n[r],n[r+1]],[n[r+2],n[r+3]],[n[r+4],n[r+5]],[n[r+6],n[r+7]]],kind:n[r+8]});for(let a=0;a<n[2];a++,r+=5)s.parts.push({ax:n[r],az:n[r+1],bx:n[r+2],bz:n[r+3],kind:n[r+4]});for(let a=0;a<n[3];a++,r+=1)s.doors.push(n[r]);for(let a=0;a<n[4];a++,r+=6)s.items.push({kind:n[r],x:n[r+1],y:n[r+2],z:n[r+3],yaw:n[r+4],state:n[r+5]});return s}face(e){const t=this.core.p2p_face(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,this.core.p2p_face_ptr(this.ptr),t),s={arche:n[0],cls:n[1],front:n[3]?[n[4],n[5],n[6],n[7]]:null,walls:[]};for(let r=0,a=8;r<n[2];r++,a+=ax)s.walls.push({x0:n[a],z0:n[a+1],x1:n[a+2],z1:n[a+3],role:n[a+4],first:n[a+5],count:n[a+6],bay:n[a+7],pier:n[a+8],every:n[a+9],kind:n[a+10],door:n[a+11],doorWhat:n[a+12],d0:n[a+13],d1:n[a+14],l0:n[a+15],l1:n[a+16],door2:n[a+17],door2What:n[a+18],e0:n[a+19],e1:n[a+20]});return s}fallen(e){const t=this.core.p2p_fallen(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,this.core.p2p_fallen_ptr(this.ptr),t),s={mid:[n[0],n[1]],axis:[n[2],n[3]],shrink:n[4],parts:[]};for(let r=6;r+8<=t;r+=8)s.parts.push({id:n[r],x:n[r+1],y:n[r+2],z:n[r+3],yaw:n[r+4],hx:n[r+5],hy:n[r+6],hz:n[r+7]});return s}get propsBase(){return this.core.p2p_props_base(this.ptr)}propOrigin(e){const t=this.core.p2p_prop_origin(this.ptr,e,0);return t<0?null:{b:t,i:this.core.p2p_prop_origin(this.ptr,e,1),kind:this.core.p2p_prop_origin(this.ptr,e,2)}}count(e){return this.core.p2p_count(this.ptr,e)}wantTraffic(e){this.core.p2p_traffic_want(this.ptr,e)}events(){const e=this.core.p2p_events_drain(this.ptr);if(!e)return[];const t=new Float32Array(this.core.memory.buffer,this.core.p2p_events_ptr(this.ptr),e*3),n=[];for(let s=0;s<e;s++)n.push({what:t[s*3],a:t[s*3+1],b:t[s*3+2]});return n}params(){const e=this.core,t=new TextDecoder,n=[],s=(r,a)=>t.decode(new Uint8Array(e.memory.buffer,r,a));for(let r=0;r<e.p2p_param_count();r++)n.push({index:r,name:s(e.p2p_param_name(r),e.p2p_param_name_len(r)),doc:s(e.p2p_param_doc(r),e.p2p_param_doc_len(r)),default:e.p2p_param_default(r)});return n}param(e){return this.core.p2p_param_get(this.ptr,e)}setParam(e,t){this.core.p2p_param_set(this.ptr,e,t)}}let xf="mid";function hx(i){xf=i}function Ul(){return xf}const wi=new O(-.72,.46,.52).normalize(),qc=new rt(-wi.x/wi.y,-wi.z/wi.y),ws=i=>{const e=i.toFixed(5);return e.includes(".")?e:`${e}.0`},vf={far:1200},Ki=`
#ifndef P2P_LOOK
#define P2P_LOOK
const vec3 P2P_SUN = vec3(${ws(wi.x)}, ${ws(wi.y)}, ${ws(wi.z)});
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
`;let Xc=!1;function fx(){if(Xc)return;Xc=!0;const i=xt;i.fog_pars_vertex=`
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
		return mix( 1.0, shadow, shadowIntensity * ( 1.0 - smoothstep( 0.80, 0.98, max( p2pEdge.x, p2pEdge.y ) ) ) );${e.slice(t+43)}`}let ll=null;function ux(i){ll=i}function Bi(){if(!ll)throw new Error("the ground is built before what stands on it: buildGround first");return ll}const _f=128;let Hr=null;function dx(i){if(Hr)return Hr;const[e,t,n,s]=i.box,r=2048,a=r/(n-e),o=r/(s-t),l=document.createElement("canvas");l.width=r,l.height=r;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#000",c.fillRect(0,0,r,r),c.globalCompositeOperation="lighten";const h=m=>(m-e)*a,u=m=>(m-t)*o,f=m=>`rgb(${Math.round(Math.min(1,m/_f)*255)},0,0)`;for(const m of i.buildings){const x=m.r,p=m.y1-m.y0;if(x.length<4||p<2)continue;let y=0;for(let M=0;M+1<x.length;M++)y+=x[M][0]*x[M+1][1]-x[M+1][0]*x[M][1];const _=y>0?1:-1,v=qc.x*p,E=qc.y*p;for(let M=0;M+1<x.length;M++){const[R,P]=x[M],[w,b]=x[M+1],U=Math.hypot(w-R,b-P);if(U<.05)continue;const N=(b-P)/U*_,L=-(w-R)/U*_,k=N*v+L*E;if(k<=.5)continue;const z=c.createLinearGradient(h(R),u(P),h(R+N*k),u(P+L*k));z.addColorStop(0,f(p)),z.addColorStop(1,"#000"),c.fillStyle=z,c.beginPath(),c.moveTo(h(R),u(P)),c.lineTo(h(w),u(b)),c.lineTo(h(w+v),u(b+E)),c.lineTo(h(R+v),u(P+E)),c.closePath(),c.fill()}c.fillStyle=f(p),c.beginPath(),x.forEach(([M,R],P)=>{P===0?c.moveTo(h(M),u(R)):c.lineTo(h(M),u(R))}),c.closePath(),c.fill()}c.fillStyle="rgb(0,255,0)";for(const m of i.buildings)m.r.length<4||(c.beginPath(),m.r.forEach(([x,p],y)=>{y===0?c.moveTo(h(x),u(p)):c.lineTo(h(x),u(p))}),c.closePath(),c.fill());const d=c.getImageData(0,0,r,r);px(d.data,r),c.putImageData(d,0,0);const g=new $u(l);return g.flipY=!1,g.colorSpace=Vn,g.generateMipmaps=!0,g.minFilter=oi,g.magFilter=En,g.anisotropy=4,Hr={texture:g,box:new Et(e,t,1/(n-e),1/(s-t))},Hr}function px(i,e){let s=new Float32Array(e*e),r=new Float32Array(e*e);for(let o=0;o<e*e;o++)s[o]=i[o*4+1];const a=(o,l,c,h)=>{for(let u=0;u<e;u++){const f=u*h;let d=0;for(let g=-2;g<=2;g++)d+=o[f+Math.min(e-1,Math.max(0,g))*c];for(let g=0;g<e;g++)l[f+g*c]=d/5,d+=o[f+Math.min(e-1,g+2+1)*c]-o[f+Math.max(0,g-2)*c]}};for(let o=0;o<3;o++)a(s,r,1,e),[s,r]=[r,s];for(let o=0;o<3;o++)a(s,r,e,1),[s,r]=[r,s];for(let o=0;o<e*e;o++)i[o*4+1]=Math.max(i[o*4+1],s[o])}let Gr=null;function mx(i){if(Gr)return Gr;let e=1/0,t=1/0,n=-1/0,s=-1/0;for(const d of i.ways??[])if(d.k==="tunnel")for(const g of d.p)e=Math.min(e,g[0]-20),t=Math.min(t,g[2]-20),n=Math.max(n,g[0]+20),s=Math.max(s,g[2]+20);e===1/0&&(e=0,t=0,n=1,s=1);const r=Math.max(1,Math.ceil((n-e)/1.5)),a=Math.max(1,Math.ceil((s-t)/1.5)),o=r/(n-e),l=a/(s-t),c=(i.ground.min??0)-10,h=new Uint8Array(r*a*4),u=d=>Math.max(1,Math.min(255,Math.round((d-c)*2)));for(const d of i.ways??[]){if(d.k!=="tunnel")continue;const g=d.clear??5.6,m=d.half+.6;for(let x=0;x+1<d.p.length;x++){const p=d.p[x],y=d.p[x+1],_=y[0]-p[0],v=y[2]-p[2],E=_*_+v*v||1,M=Math.floor((Math.min(p[0],y[0])-m-e)*o),R=Math.ceil((Math.max(p[0],y[0])+m-e)*o),P=Math.floor((Math.min(p[2],y[2])-m-t)*l),w=Math.ceil((Math.max(p[2],y[2])+m-t)*l);for(let b=Math.max(0,P);b<=Math.min(a-1,w);b++)for(let U=Math.max(0,M);U<=Math.min(r-1,R);U++){const N=e+(U+.5)/o,L=t+(b+.5)/l,k=Math.min(1,Math.max(0,((N-p[0])*_+(L-p[2])*v)/E));if(Math.hypot(p[0]+_*k-N,p[2]+v*k-L)>m)continue;const z=p[1]+(y[1]-p[1])*k,F=(b*r+U)*4;h[F]=u(z),h[F+1]=Math.max(h[F+1],u(z+g)),h[F+3]=255}}}const f=new Wi(h,r,a,yn);return f.minFilter=f.magFilter=un,f.generateMipmaps=!1,f.needsUpdate=!0,Gr={texture:f,box:new Et(e,t,o/r,l/a),base:c},Gr}function ci(i,e,t){const n=dx(e),s=mx(e);return i.onBeforeCompile=r=>{r.uniforms.uShade={value:n.texture},r.uniforms.uShadeBox={value:n.box},r.uniforms.uTubes={value:s.texture},r.uniforms.uTubesBox={value:s.box},Object.assign(r.uniforms,t.uniforms??{}),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
          return vec2( t.r * ${ws(_f)}, t.g ) * inside;
        }
        ${t.fragmentPars??""}`).replace("#include <color_fragment>",`#include <color_fragment>
        ${t.tube===!1?"":`{
          // inside a tunnel's tube, over its floor and under its roof: not drawn (the hill's ground at a portal)
          vec2 tuv = ( vWorld.xz - uTubesBox.xy ) * uTubesBox.zw;
          vec4 tb = texture2D( uTubes, tuv );
          if ( tb.a > 0.5 && tuv.x > 0.0 && tuv.x < 1.0 && tuv.y > 0.0 && tuv.y < 1.0 ) {
            float floorY = tb.r * 127.5 + ${ws(s.base)}, roofY = tb.g * 127.5 + ${ws(s.base)};
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
        float p2pLit = clamp( dot( reflectedLight.directDiffuse, vec3( 0.3333 ) ) / max( dot( diffuseColor.rgb, vec3( 0.3333 ) ), 0.02 ) / 1.15, 0.0, 1.0 );`).replace("#include <envmap_fragment>",t.final??"")},i.customProgramCacheKey=()=>t.key,i}class gx{constructor(e,t,n){this.built=e,this.material=n,this.rest=e.rest;const s=e.ring,r=e.stations,a=(L,k)=>L*s+k,[o,l,c,h]=[0,2,4,6],u=new Qe(t),f=[.05+u.r*.3,.05+u.g*.3,.05+u.b*.3],d=[.035,.036,.04],g=[.5,.52,.54],m=[.11,.115,.125],x=L=>e.rest[L*3],p=L=>e.rest[L*3+2],y=Math.max(Math.abs(p(a(0,0))),Math.abs(p(a(r-1,0)))),_=(L,k=.06,z=0,F=0)=>{const I=Math.floor(L/s),D=L<s*r?I===0?1:I===r-1?-1:0:0,V=Math.min(1,Math.max(0,(Math.abs(p(L))/y-.7)/.3)),B=V*V*(3-2*V);return{a:L,off:[-Math.sign(x(L))*(k+.17*B),z,F+D*.1]}};for(const[L,k]of[[0,3],[6,r-1]])for(let z=L;z<k;z++)for(const F of[0,1])this.quad(_(a(z,o+F)),_(a(z,l+F)),_(a(z+1,l+F)),_(a(z+1,o+F)),f),this.quad(_(a(z,l+F)),_(a(z,c+F),.02,-.035),_(a(z+1,c+F),.02,-.035),_(a(z+1,l+F)),f);for(let L=0;L+1<r;L++)this.quad(_(a(L,o),.02,.025),_(a(L,o+1),.02,.025),_(a(L+1,o+1),.02,.025),_(a(L+1,o),.02,.025),d);this.quad(_(a(3,o),.03,0,-.03),_(a(3,o+1),.03,0,-.03),_(a(3,l+1),.03,0,-.03),_(a(3,l),.03,0,-.03),f),this.quad(_(a(3,l),.03,0,-.03),_(a(3,l+1),.03,0,-.03),_(a(3,c+1),.02,-.03,-.03),_(a(3,c),.02,-.03,-.03),f),this.quad(_(a(6,o),.03,0,.03),_(a(6,o+1),.03,0,.03),_(a(6,l+1),.03,-.04,.03),_(a(6,l),.03,-.04,.03),d);for(const[L,k]of[[0,.07],[r-1,-.07]])this.bar({a:a(L,l),off:[.26,-.1,k*1.6]},{a:a(L,l+1),off:[-.26,-.1,k*1.6]},.035,.055,g),this.bar({a:a(L,o),off:[.28,.06,k*1.6]},{a:a(L,o+1),off:[-.28,.06,k*1.6]},.025,.03,m);this.bar({a:a(0,c),off:[.02,-.05,.08]},{a:a(0,h),off:[0,-.07,.08]},.03,.02,f),this.bar({a:a(0,h),off:[0,-.07,.08]},{a:a(0,c+1),off:[-.02,-.05,.08]},.03,.02,f);for(let L=0;L+1<e.frameCount/2;L++)for(const k of[0,1])this.bar({a:e.frame+L*2+k,off:[0,0,0]},{a:e.frame+(L+1)*2+k,off:[0,0,0]},.045,.055,m);for(const L of[0,1]){const k=e.hubs+L,z=L;let F=a(1,c+z);for(let V=0;V<=3;V++)Math.abs(p(a(V,c+z))-p(k))<Math.abs(p(F)-p(k))&&(F=a(V,c+z));const I=Math.sign(x(k)),D=I*(Math.abs(x(F))-.1)-x(F);this.bar({a:k,off:[-I*.2,.12,0]},{a:F,off:[D,-.06,p(k)-p(F)]},.085,.085,f)}const v=L=>e.parts+L,E=L=>e.rest[L*3+1],M=Math.min(.21,E(a(0,h))-.07-E(v(0))),R=-.26,P=(M+R)/2,w=(M-R)/2;this.slab(v(0),v(1),.05,w,.022,[.33,.35,.37],0,-.05,P),this.slab(v(0),v(1),-.06,w-.03,.012,[.03,.03,.032],0,.04,P),this.box(v(2),[0,-.06,0],[.27,.16,.26],[.1,.103,.11],1),this.box(v(2),[0,-.25,.02],[.2,.05,.2],[.05,.05,.055],1),this.box(v(2),[0,.13,0],[.25,.04,.24],[.2,.205,.215],1),this.box(v(2),[-.06,.19,0],[.13,.025,.22],[.045,.045,.05],1);for(const L of[-.165,-.055,.055,.165])this.bar({a:v(2),off:[.08,.2,L]},{a:v(2),off:[.25,.14,L]},.028,.022,[.34,.345,.36],1);this.box(v(2),[.27,.12,0],[.04,.05,.23],[.3,.305,.32],1),this.box(v(2),[-.12,.225,-.12],[.028,.012,.028],[.55,.42,.04],1),this.box(v(2),[-.2,0,-.29],[.06,.06,.035],[.26,.265,.28],1),this.box(v(2),[.05,-.12,-.285],[.085,.085,.02],[.03,.03,.032],1),this.box(v(2),[-.33,.1,.12],[.1,.085,.14],[.028,.028,.03],1),this.box(v(3),[0,0,0],[.18,.15,.2],[.3,.31,.32],1),this.bar({a:v(2),off:[0,-.05,.2]},{a:v(3),off:[0,0,-.15]},.14,.12,[.22,.225,.235],1),this.box(v(4),[0,0,0],[.12,.095,.085],[.025,.026,.03],2),this.box(v(4),[-.07,.105,0],[.018,.012,.018],[.5,.06,.04],2),this.box(v(4),[.07,.105,0],[.018,.012,.018],[.08,.1,.35],2);{const L=new Ll(.18,.022,6,14).rotateX(-.35).toNonIndexed(),k=L.getAttribute("position");for(let z=0;z<k.count;z++)this.vert({a:v(5),off:[k.getX(z),k.getY(z),k.getZ(z)]},[.02,.02,.022],3);L.dispose(),this.bar({a:v(5),off:[0,0,0]},{a:v(6),off:[x(v(5))-x(v(6)),0,.05]},.022,.022,[.05,.05,.055],3),this.bar({a:v(5),off:[-.16,0,0]},{a:v(5),off:[.16,0,0]},.02,.012,[.02,.02,.022],3)}this.box(v(6),[0,-.07,.06],[.65,.1,.15],[.045,.046,.05],4),this.box(v(6),[-.36,.05,.12],[.16,.03,.08],[.03,.03,.033],4);for(const[L,k]of[[7,5],[8,6]])this.box(v(L),[0,-.12,0],[.24,.07,.25],[.1,.09,.085],k),this.box(v(L),[0,.2,.24],[.23,.32,.06],[.115,.1,.095],k),this.box(v(L),[0,.58,.25],[.11,.08,.045],[.1,.09,.085],k);this.box(v(9),[0,0,0],[.35,.11,.25],[.06,.062,.066],7);const b=[.2,.15,.115];this.bar({a:v(3),off:[x(v(10))-x(v(3)),-.16,.1]},{a:v(10),off:[0,0,0]},.032,.032,b,8),this.bar({a:v(10),off:[0,0,0]},{a:v(11),off:[0,0,-.26]},.032,.032,b,8),this.box(v(11),[0,0,0],[.13,.075,.26],[.27,.24,.21],8),this.bar({a:v(11),off:[.04,-.01,.26]},{a:v(11),off:[.04,-.01,.43]},.03,.03,[.36,.36,.37],8);const U=this.a.length;this.bindA=Int16Array.from(this.a),this.bindB=Int16Array.from(this.b),this.bindT=Float32Array.from(this.t),this.offs=Float32Array.from(this.off),this.thingOf=Int8Array.from(this.thing);const N=new Nt;N.setAttribute("position",new dt(new Float32Array(U*3),3)),N.setAttribute("color",new dt(Float32Array.from(this.col),3)),this.mesh=new Ct(N,this.material),this.mesh.name="under the car's panels",this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.receiveShadow=!0,this.a=[],this.b=[],this.t=[],this.off=[],this.col=[],this.thing=[],this.apply(e.rest,0)}mesh;a=[];b=[];t=[];off=[];col=[];thing=[];bindA;bindB;bindT;offs;thingOf;rest;vert(e,t,n=-1){this.a.push(e.a),this.b.push(e.b??e.a),this.t.push(e.t??0),this.off.push(...e.off),this.col.push(...t),this.thing.push(n)}tri(e,t,n,s,r=-1){this.vert(e,s,r),this.vert(t,s,r),this.vert(n,s,r)}quad(e,t,n,s,r,a=-1){this.tri(e,t,n,r,a),this.tri(e,n,s,r,a)}hull(e,t,n){const s=r=>[t[0]*r,t[1]*r,t[2]*r];this.quad(e[0],e[1],e[2],e[3],s(.85),n),this.quad(e[4],e[5],e[6],e[7],s(.85),n);for(let r=0;r<4;r++)this.quad(e[r],e[(r+1)%4],e[4+(r+1)%4],e[4+r],s(r%2?1.12:.95),n)}box(e,t,n,s,r=-1){const a=[];for(const o of[-1,1])for(const[l,c]of[[-1,-1],[1,-1],[1,1],[-1,1]])a.push({a:e,off:[t[0]+l*n[0],t[1]+c*n[1],t[2]+o*n[2]]});this.hull(a,s,r)}bar(e,t,n,s,r,a=-1){const o=g=>[this.rest[g.a*3]+g.off[0],this.rest[g.a*3+1]+g.off[1],this.rest[g.a*3+2]+g.off[2]],[l,c]=[o(e),o(t)],h=new O(c[0]-l[0],c[1]-l[1],c[2]-l[2]).normalize(),u=Math.abs(h.y)>.9?new O(1,0,0):new O(-h.z,0,h.x).normalize(),f=new O().crossVectors(h,u).normalize(),d=[];for(const g of[e,t])for(const[m,x]of[[-1,-1],[1,-1],[1,1],[-1,1]])d.push({a:g.a,off:[g.off[0]+u.x*m*n+f.x*x*s,g.off[1]+u.y*m*n+f.y*x*s,g.off[2]+u.z*m*n+f.z*x*s]});this.hull(d,r,a)}slab(e,t,n,s,r,a,o,l=-.05,c=0){const h=[];for(const[u,f]of[[e,1],[t,-1]])for(const[d,g]of[[-1,-1],[1,-1],[1,1],[-1,1]])h.push({a:u,off:[f*l,c+g*s,-n+d*r]});this.hull(h,a,o)}place(e,t,n,s,r){const a=this.bindA[e],o=this.bindB[e],l=this.bindT[e];for(let c=0;c<3;c++)n[s+c]=t[a*3+c]+(t[o*3+c]-t[a*3+c])*l+this.offs[e*3+c]-(r?r.getComponent(c):0)}apply(e,t){const n=this.mesh.geometry.getAttribute("position"),s=n.array;for(let r=0;r<this.bindA.length;r++){const a=this.thingOf[r];if(a>=0&&t>>a&1){const o=this.bindA[r];s[r*3]=e[o*3],s[r*3+1]=e[o*3+1],s[r*3+2]=e[o*3+2];continue}this.place(r,e,s,r*3)}n.needsUpdate=!0}piece(e,t){const n=this.built.things[e];if(!n)return null;const s=new O;for(let h=0;h<n.count;h++){const u=this.built.parts+n.first+h;s.x+=t[u*3]/n.count,s.y+=t[u*3+1]/n.count,s.z+=t[u*3+2]/n.count}const r=[];for(let h=0;h<this.thingOf.length;h++)this.thingOf[h]===e&&r.push(h);if(!r.length)return null;const a=new Float32Array(r.length*3),o=new Float32Array(r.length*3),l=this.mesh.geometry.getAttribute("color").array;r.forEach((h,u)=>{this.place(h,t,a,u*3,s),o.set(l.subarray(h*3,h*3+3),u*3)});const c=new Nt;return c.setAttribute("position",new dt(a,3)),c.setAttribute("color",new dt(o,3)),c.computeBoundingSphere(),c}where(e,t,n){const s=this.built.things[e];if(n.set(0,0,0),!s)return n;for(let r=0;r<s.count;r++){const a=this.built.parts+s.first+r;n.x+=t[a*3]/s.count,n.y+=t[a*3+1]/s.count,n.z+=t[a*3+2]/s.count}return n}get triangles(){return this.bindA.length/3}dispose(){this.mesh.geometry.dispose()}}const xn=4;function ea(i,e,t,n,s){const r=s??new Float32Array(t*3);r.fill(0);for(let a=0;a+2<e.length;a+=3){const o=i[a*3],l=i[a*3+1],c=i[a*3+2],h=i[a*3+3]-o,u=i[a*3+4]-l,f=i[a*3+5]-c,d=i[a*3+6]-o,g=i[a*3+7]-l,m=i[a*3+8]-c,x=u*m-f*g,p=f*d-h*m,y=h*g-u*d;for(let _=0;_<3;_++){const v=e[a+_]*3;r[v]=r[v]+x,r[v+1]=r[v+1]+p,r[v+2]=r[v+2]+y}}for(let a=0;a<t*3;a+=3){const o=r[a],l=r[a+1],c=r[a+2],h=1/(Math.sqrt(o*o+l*l+c*c)||1);r[a]=o*h,r[a+1]=l*h,r[a+2]=c*h}for(let a=0;a<e.length;a++){const o=e[a]*3;n[a*3]=r[o],n[a*3+1]=r[o+1],n[a*3+2]=r[o+2]}}class xx{constructor(e,t,n,s,r,a,o,l,c){this.body=e,this.cut=t,this.built=n,this.group=s,this.world=r,this.wheel=a,this.wheelMaterial=o;const h=e.geometry.getAttribute("position");this.base=Float32Array.from(h.array),this.nodes0=n.rest,this.now=Float32Array.from(n.rest),this.sum=new Float32Array(t.groups*3),this.lead=new Int32Array(t.groups).fill(-1),this.at=new Float32Array(t.groups*3);for(let x=0;x<t.group.length;x++)this.lead[t.group[x]]<0&&(this.lead[t.group[x]]=x);e.geometry.boundingSphere=new fi(new O(0,.3,0),4.5);const u=n.kind.length,f=h.count;this.ties=new Int16Array(f*xn).fill(-1),this.weights=new Float32Array(f*xn);const d=Array.from({length:9},()=>[]);for(let x=0;x<u;x++){const p=n.kind[x];p>=0&&p<=8&&d[p].push(x)}const g=(x,p,y,_)=>{const v=n.rest[x*3]-p,E=n.rest[x*3+1]-y,M=n.rest[x*3+2]-_;return v*v+E*E+M*M},m=new Map;for(let x=0;x<f;x++){const p=t.group[x],y=m.get(p);if(y!==void 0){for(let w=0;w<xn;w++)this.ties[x*xn+w]=this.ties[y*xn+w],this.weights[x*xn+w]=this.weights[y*xn+w];continue}m.set(p,x);const _=this.base[x*3],v=this.base[x*3+1],E=this.base[x*3+2],R=(d[t.panel[x]].length?d[t.panel[x]]:d[0]).map(w=>[w,g(w,_,v,E)]).sort((w,b)=>w[1]-b[1]).slice(0,xn);let P=0;for(const[w,[b,U]]of R.entries()){const N=1/(U+.01);this.ties[x*xn+w]=b,this.weights[x*xn+w]=N,P+=N}for(let w=0;w<xn;w++)this.weights[x*xn+w]/=P||1}this.under=new gx(n,l,c),s.add(this.under.mesh),this.apply(n.rest,0,void 0,0)}ties;weights;base;nodes0;sum;lead;at;under;loose=new Map;made=[];now;skinned(e,t,n,s){let r=this.base[e*3],a=this.base[e*3+1],o=this.base[e*3+2];for(let l=0;l<xn;l++){const c=this.ties[e*xn+l],h=this.weights[e*xn+l];c<0||(r+=(t[c*3]-this.nodes0[c*3])*h,a+=(t[c*3+1]-this.nodes0[c*3+1])*h,o+=(t[c*3+2]-this.nodes0[c*3+2])*h)}n[s]=r,n[s+1]=a,n[s+2]=o}apply(e,t,n,s){this.now=e;const r=this.body.geometry.getAttribute("position"),a=r.array,o=this.cut.panel,l=this.cut.group,c=this.at;for(let f=0;f<this.lead.length;f++){const d=this.lead[f],g=o[d];if(g&&(t>>2*g&3)===2){const m=this.ties[d*xn];c[f*3]=e[m*3],c[f*3+1]=e[m*3+1],c[f*3+2]=e[m*3+2];continue}this.skinned(d,e,c,f*3)}for(let f=0;f<r.count;f++){const d=l[f]*3;a[f*3]=c[d],a[f*3+1]=c[d+1],a[f*3+2]=c[d+2]}r.needsUpdate=!0;const h=this.body.geometry.getAttribute("normal");ea(a,l,this.cut.groups,h.array,this.sum),h.needsUpdate=!0,this.under.apply(e,s);const u=new Set;for(let f=0;n&&f+7<n.length;f+=8){const d=n[f];u.add(d);let g=this.loose.get(d);if(!g){const m=this.piece(d,e);if(!m)continue;g=m,this.world.add(g),this.loose.set(d,g)}g.position.set(n[f+1],n[f+2],n[f+3]),g.quaternion.set(n[f+4],n[f+5],n[f+6],n[f+7])}for(const[f,d]of this.loose)u.has(f)||(this.world.remove(d),this.loose.delete(f))}piece(e,t){let n;if(e>=20){const s=this.under.piece(e-20,t);if(!s)return null;this.made.push(s),n=new Ct(s,this.under.material),n.name="a thing from under the panels, off the car"}else if(e>=10)n=new Ct(this.wheel,this.wheelMaterial),n.name="a wheel off the car";else{const s=[];for(let f=0;f<this.cut.panel.length;f++)this.cut.panel[f]===e&&s.push(f);if(!s.length)return null;const r=[0,0,0];let a=0;for(let f=0;f<this.built.kind.length;f++)if(this.built.kind[f]===e){for(let d=0;d<3;d++)r[d]=r[d]+t[f*3+d];a++}for(let f=0;f<3;f++)r[f]=r[f]/Math.max(1,a);const o=new Nt,l=this.body.geometry;for(const f of Object.keys(l.attributes)){const d=l.getAttribute(f),g=d.itemSize,m=new Float32Array(s.length*g);s.forEach((x,p)=>{for(let y=0;y<g;y++)m[p*g+y]=d.getComponent(x,y)}),o.setAttribute(f,new dt(m,g))}const c=o.getAttribute("position").array,h=new Int32Array(s.length),u=new Map;s.forEach((f,d)=>{this.skinned(f,t,c,d*3);for(let m=0;m<3;m++)c[d*3+m]=c[d*3+m]-r[m];const g=this.cut.group[f];u.has(g)||u.set(g,u.size),h[d]=u.get(g)}),ea(c,h,u.size,o.getAttribute("normal").array),o.computeBoundingSphere(),this.made.push(o),n=new Ct(o,this.body.material),n.name="a panel off the car"}return n.castShadow=!0,n}hub(e,t){const n=(this.built.hubs+e)*3;return t.set(this.now[n]-this.nodes0[n],this.now[n+1]-this.nodes0[n+1],this.now[n+2]-this.nodes0[n+2])}where(e,t){if(e>=20)return this.under.where(e-20,this.now,t);t.set(0,0,0);let n=0;for(let s=0;s<this.built.kind.length;s++)this.built.kind[s]===e&&(t.x+=this.now[s*3],t.y+=this.now[s*3+1],t.z+=this.now[s*3+2],n++);return t.multiplyScalar(1/Math.max(1,n))}counts(){const e=new Array(9).fill(0);for(let t=0;t<this.cut.panel.length;t+=3)e[this.cut.panel[t]]=e[this.cut.panel[t]]+1;return{skin:e,under:this.under.triangles,loose:[...this.loose.keys()].sort((t,n)=>t-n)}}dispose(){for(const n of this.loose.values())this.world.remove(n);this.loose.clear();for(const n of this.made)n.dispose();this.group.remove(this.under.mesh),this.under.dispose();const e=this.body.geometry.getAttribute("position");e.array.set(this.base),e.needsUpdate=!0;const t=this.body.geometry.getAttribute("normal");ea(this.base,this.cut.group,this.cut.groups,t.array,this.sum),t.needsUpdate=!0,this.body.geometry.computeBoundingSphere()}}const Xn=256,vx=2.2,$c=3,Yc=4,_x=5,si=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Nl={name:"Sorrento",paint:10227467,screenFoot:-.86,screenHead:-.08,backHead:.72,backFoot:1.68,nose:.13,belt:.38,roof:.845},Kc=-.17,cl=.085,jc=1.25,yx=`
  attribute vec4 carA; attribute vec4 carB; attribute vec3 carC; attribute vec3 carP; attribute vec3 carN;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN; varying vec3 vEdge;
  uniform vec4 uCrush; uniform vec4 uWear; uniform float uWide; uniform float uSoft; varying float vDent; varying float vWear;`,wx=`
  // (where a point of the skin was built, and which way it faced: the pattern is laid out there, wherever the metal has gone)
  vCarA = carA; vCarB = carB; vLocal = carP; vLocalN = carN; vEdge = carC;
  {
    float hl = carB.w;
    float nose = smoothstep(-hl + 1.0, -hl, carP.z), tail = smoothstep(hl - 0.9, hl, carP.z);
    float low = 1.0 - smoothstep(0.38, 0.8, carP.y);
    float left = smoothstep(-uWide * 0.45, -uWide, carP.x) * low, right = smoothstep(uWide * 0.45, uWide, carP.x) * low;
    float lump = 0.5 + 0.5 * sin(carP.x * 9.0 + carP.y * 7.0) * sin(carP.z * 11.0 + carP.y * 5.0);
    float uneven = 0.6 + 0.4 * lump;
    // with a soft body the skin is already where its masses put it (carsoft.ts): only the paint wears the crush
    float shove = 1.0 - uSoft;
    transformed.z += uCrush.x * nose * uneven * ${jc.toFixed(2)} * shove;
    transformed.z -= uCrush.y * tail * uneven * ${jc.toFixed(2)} * shove;
    // a side gives less than an end: the wheels stay where the sim has them, and the skin must not go in past them
    transformed.x += min(0.2, uCrush.z * 0.5) * left * uneven * shove;
    transformed.x -= min(0.2, uCrush.w * 0.5) * right * uneven * shove;
    // a crushed bonnet or boot lid buckles upward
    transformed.y += (uCrush.x * nose * nose + uCrush.y * tail * tail) * 0.35 * lump * step(0.12, carP.y) * shove;
    // not in proportion: a light blow must show, and a heavy one has nowhere further to go
    vDent = pow(clamp((uCrush.x * nose + uCrush.y * tail + uCrush.z * left + uCrush.w * right) * 4.0, 0.0, 1.0), 0.65);
    // the paint wears by the deeper of the two: how far the metal went in, and how hard it was hit
    vec4 worn = max(uCrush, uWear);
    vWear = pow(clamp((worn.x * nose + worn.y * tail + worn.z * left + worn.w * right) * 4.0, 0.0, 1.0), 0.65);
  }`,Mx=`
  uniform float uBrake; uniform float uReverse; uniform vec4 uCrush; uniform vec4 uWear; uniform float uBurnt; varying float vDent; varying float vWear;
  uniform vec4 uGlass; uniform float uSoft;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN; varying vec3 vEdge;
  ${Ki}`,bx=i=>{const e=i.screenFoot,t=i.screenHead,n=i.backHead,s=i.backFoot,r=(i.screenHead+i.backHead)/2+.02,a=Math.min(i.glassTo??99,i.backFoot-.42),o=i.belt;return`
  float carGlass = 0.0, carTrim = 0.0, carScuff = 0.0, carCrack = 0.0, carInside = gl_FrontFacing ? 0.0 : 1.0; vec3 carLamp = vec3(0.0);
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
    float lip = p2pLine(vCarB.z - ${cl.toFixed(3)} + 0.02, 0.022, fwidth(vCarB.z)) * side * step(q.y, 0.3);
    float grille = step(q.z, -halfLen + 0.2) * p2pSpan(abs(q.x), -1.0, 0.52, fx) * p2pSpan(q.y, -0.30, -0.10, fy);
    float waist = side * cabin * p2pSpan(up, 0.09, 0.13, ff);
    carTrim = max(max(vCarA.w, lip), max(grille, waist));
    // shut lines: wherever two panels meet (each point of a triangle knows how far it is from such an edge of it)
    float seam = min(vEdge.x, min(vEdge.y, vEdge.z));
    float shut = p2pLine(seam, 0.007, fwidth(seam));
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
    // The glass: with a soft body the sim says of each pane whether it is whole, cracked or gone (uGlass: the
    // windscreen, the back window, the left side's, the right's); a pane that has gone is not drawn, and what is
    // in the car shows. Cracked: a web from where the blow came through. (With no soft body, by how hard that side was hit.)
    {
      vec4 hit = max(uCrush, uWear);
      float pane = side > 0.5 ? (q.x < 0.0 ? hit.z : hit.w) : (q.z < 0.3 ? hit.x : hit.y);
      float said = side > 0.5 ? (q.x < 0.0 ? uGlass.z : uGlass.w) : (q.z < 0.3 ? uGlass.x : uGlass.y);
      // (a ragged rim of it stays in the frame)
      if (said > 1.5 && carGlass > 0.4 + 0.5 * p2pNoise(q.zy * 31.0 + q.x * 23.0)) discard;
      float cracked = mix(smoothstep(0.16, 0.3, pane), step(0.5, said), uSoft);
      pane = mix(pane, max(pane, 0.3 * step(0.5, said)), uSoft);
      vec2 p = side > 0.5 ? vec2(q.z - 0.55, q.y - 0.58) : (q.z < 0.3 ? vec2(q.x + 0.22, q.z + 0.52) : vec2(q.x - 0.18, q.z - 1.2));
      float rad = length(p), sector = atan(p.y, p.x) * 11.0 / 6.2831853, sid = floor(sector);
      float spoke = p2pLine(fract(sector) - 0.5 + (p2pHash1(sid + 2.0) - 0.5) * 0.5, 0.035, fwidth(sector));
      float rings = rad * 7.0 + p2pHash1(sid + 9.0);
      float web = max(spoke, 0.7 * p2pLine(fract(rings) - 0.5, 0.07, fwidth(rings)) * step(0.06, rad));
      carCrack = web * cracked * (1.0 - smoothstep(0.25, 0.25 + 2.2 * pane, rad));
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
    // the inside of the skin: bare pressed metal in primer, a little of the paint's colour in it; no lamp, no trim
    {
      vec3 inner = mix(vec3(0.075, 0.078, 0.082), diffuseColor.rgb, 0.12) * (0.8 + 0.4 * p2pNoise(q.xz * 6.0 + q.y * 9.0));
      diffuseColor.rgb = mix(diffuseColor.rgb, inner, carInside * (1.0 - carGlass));
      carLamp *= 1.0 - carInside; carTrim *= 1.0 - carInside;
      carScuff = max(carScuff, carInside * (1.0 - carGlass));
    }
    // burnt out (the car blew up): paint, trim and glass alike are soot over scaled metal, and no lamp is lit
    {
      float soot = 0.55 + 0.45 * p2pFbm(q.xz * 5.0 + q.y * 7.0);
      vec3 scale = mix(vec3(0.035, 0.031, 0.029), vec3(0.2, 0.11, 0.06), smoothstep(0.45, 0.85, p2pFbm(q.zy * 11.0 + q.x * 3.0)));
      diffuseColor.rgb = mix(diffuseColor.rgb, scale * soot, uBurnt);
      carLamp *= 1.0 - uBurnt;
      carGlass *= 1.0 - uBurnt; carTrim *= 1.0 - uBurnt;
      carScuff = max(carScuff, uBurnt);
    }
  }`},Sx=`
  roughnessFactor = mix(mix(roughnessFactor, 0.62, carTrim), 0.05, carGlass);
  metalnessFactor = mix(mix(metalnessFactor, 0.0, carTrim), 0.85, carGlass);
  roughnessFactor = mix(roughnessFactor, 0.85, max(carScuff, carGlass * carCrack));
  metalnessFactor = mix(metalnessFactor, 0.15, carGlass * carCrack);`,Ex=`
  #ifdef USE_CLEARCOAT
    material.clearcoat *= 1.0 - carInside;
  #endif`,Ax=`
  normal = normalize(mix(normal, normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition))), vDent * 0.9));`,Tx="varying vec3 vLocal; uniform float uBurnt;",Rx=`
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
  }`,Cx=`
  roughnessFactor = mix(0.9, 0.28, wheelMetal);
  metalnessFactor = mix(0.0, 0.9, wheelMetal);`;function Zc(i,e,t,n,s,r,a,o,l="",c="",h=""){return i.onBeforeCompile=u=>{Object.assign(u.uniforms,t),u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
${n}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${s}`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
${r}`).replace("#include <color_fragment>",`#include <color_fragment>
${a}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${o}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${l}`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
${c}`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
${h}`)},i.customProgramCacheKey=()=>e,i}class Lx{constructor(e,t=null,n=Nl){this.shape=e,this.look=n;const s=(e.axleFront+e.axleRear)/2+(e.overhang??.85),r=e.halfTrack+.12,a=Zc(new of({color:n.paint,metalness:.35,roughness:.34,clearcoat:1,clearcoatRoughness:.06,envMap:t,envMapIntensity:.75,side:ln}),`p2p-car-body-${n.name}`,this.lamps,yx,wx,Mx,bx(n),Sx,"totalEmissiveRadiance += carLamp;",Ax,Ex);this.lamps.uWide.value=r,this.paint=a;const o=this.body(s,r);this.cut=o.cut;const l=new Ct(o.geo,a);l.castShadow=!0,l.receiveShadow=!0,this.group.add(l),this.bodyMesh=l,this.underMaterial=new Ps({vertexColors:!0,flatShading:!0,roughness:.62,metalness:.35,side:ln,envMap:t,envMapIntensity:.35});{const _=new Nt;_.setAttribute("position",new dt(new Float32Array(9),3)),_.setAttribute("color",new dt(new Float32Array(9),3));const v=new Ct(_,this.underMaterial);v.frustumCulled=!1,v.name="under the panels: kept warm",this.group.add(v)}const c=Zc(new Ps({color:16777215,envMap:t,envMapIntensity:.6}),"p2p-car-wheel",{uRadius:{value:e.wheelRadius},uBurnt:this.lamps.uBurnt},"varying vec3 vLocal;","vLocal = position;",`uniform float uRadius; ${Tx}`,Rx,Cx),h=e.wheelRadius,u=.12,f=[[0,.02],[h*.64,.105],[h*.72,u],[h*.93,u],[h,u*.72],[h,-u*.72],[h*.93,-u],[h*.72,-u],[h*.64,-.105],[0,-.02]].map(([_,v])=>new rt(_,v)),d=new ha(f,20).rotateZ(-Math.PI/2);{const _=d.getAttribute("position"),v=d.index,E=new O,M=new O,R=new O;for(let P=0;P<v.count;P+=3)if(E.fromBufferAttribute(_,v.getX(P)),M.fromBufferAttribute(_,v.getX(P+1)),R.fromBufferAttribute(_,v.getX(P+2)),M.clone().sub(E).cross(R.clone().sub(E)).dot(E.add(M).add(R))<0){const b=v.getX(P+1);v.setX(P+1,v.getX(P+2)),v.setX(P+2,b)}}d.computeVertexNormals(),this.tyre=d,this.tyreMaterial=c;for(let _=0;_<4;_++){const v=new en,E=new Ct(d,c);E.castShadow=!0,v.add(E),this.group.add(v),this.wheels.push(v),this.spinners.push(E)}const g=new ff,m=new Ai(1,1);g.setIndex(m.index),g.setAttribute("position",m.getAttribute("position")),g.setAttribute("uv",m.getAttribute("uv"));const x=new Float32Array(Xn*3),p=new Float32Array(Xn*3).fill(1);g.setAttribute("aAt",new jn(x,3)),g.setAttribute("aLife",new jn(p,3)),g.instanceCount=Xn;const y=new Ct(g,new Ln({transparent:!0,depthWrite:!1,vertexShader:`
        attribute vec3 aAt; attribute vec3 aLife; varying vec2 vUv; varying vec3 vLife;
        void main() {
          vUv = uv; vLife = aLife;
          // smoke swells as it ages, and fire is bigger; a chip, a spark or a crumb of glass is small and stays so
          float bit = step(2.5, aLife.z);
          float size = mix((0.35 + 1.9 * aLife.x) * (0.8 + 0.4 * aLife.y) * (1.0 + 0.7 * step(1.5, aLife.z)), 0.035 + 0.06 * aLife.y, bit) * step(aLife.x, 0.999);
          vec4 mv = viewMatrix * vec4(aAt, 1.0);
          mv.xy += position.xy * size;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec2 vUv; varying vec3 vLife;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          float bit = step(2.5, vLife.z), fire = step(1.5, vLife.z) * (1.0 - bit), black = min(vLife.z, 1.0);
          float a = (1.0 - smoothstep(0.25, 1.0, r)) * smoothstep(0.0, 0.08, vLife.x) * (1.0 - vLife.x) * mix(mix(0.32, 0.6, black), 0.95, fire);
          // a bit is a small hard thing: all there until it is gone
          a = mix(a, step(max(abs(vUv.x - 0.5), abs(vUv.y - 0.5) * (0.6 + vLife.y)), 0.38) * step(vLife.x, 0.97), bit);
          if (a < 0.004) discard;
          // what burns is white-hot, then orange, then the black smoke it leaves
          vec3 flame = mix(mix(vec3(3.4, 2.5, 1.0), vec3(2.3, 0.7, 0.08), smoothstep(0.03, 0.4, vLife.x)), vec3(0.035), smoothstep(0.4, 0.8, vLife.x));
          // a chip is dark, a spark is white-hot and cools as it falls, a crumb of glass is pale
          vec3 chip = mix(vec3(0.05, 0.048, 0.045), mix(vec3(3.6, 2.6, 1.1), vec3(1.6, 0.4, 0.05), vLife.x), step(3.5, vLife.z) * step(vLife.z, 4.5));
          chip = mix(chip, vec3(0.62, 0.72, 0.74), step(4.5, vLife.z));
          gl_FragColor = vec4(mix(mix(mix(vec3(0.74, 0.75, 0.76), vec3(0.05), black), flame, fire), chip, bit), a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}));y.frustumCulled=!1,y.name="smoke",this.loose.add(y),this.puffs={life:p,at:x,vel:new Float32Array(Xn*3),geo:g,next:0,owed:0}}group=new en;wheels=[];spinners=[];loose=new en;lamps={uBrake:{value:0},uReverse:{value:0},uCrush:{value:new Et},uWear:{value:new Et},uBurnt:{value:0},uWide:{value:1},uSoft:{value:0},uGlass:{value:new Et}};blown=!1;burnt=0;paint;bodyMesh;tyre;tyreMaterial;skin=null;cut;underMaterial;spot=new O;puffs;nose=new O;carried=new O;spot2=new O;was=new O;patch=new O;rubber=[0,0,0,0];smoke(e,t){const n=e[Se.POWER],s=this.puffs,r=Math.min(1,Math.max(0,(.93-n)/.5));this.nose.set(0,.42,-this.shape.axleFront+.25).applyQuaternion(this.group.quaternion).add(this.group.position);const a=t>0?(this.nose.x-this.was.x)/t:0,o=t>0?(this.nose.y-this.was.y)/t:0,l=t>0?(this.nose.z-this.was.z)/t:0,c=Math.hypot(a,o,l)>120;this.was.copy(this.nose),c?this.carried.set(0,0,0):this.carried.set(a,o,l);for(let d=0;d<Xn;d++){if(s.life[d*3]>=1)continue;const g=s.life[d*3+2]>2.5;s.life[d*3]=c?1:Math.min(1,s.life[d*3]+t/(g?1.1:vx));const m=Math.exp(-(g?.6:2.5)*t);g&&(s.vel[d*3+1]=s.vel[d*3+1]-9.8*t),s.vel[d*3]=s.vel[d*3]*m,s.vel[d*3+2]=s.vel[d*3+2]*m,s.at[d*3]=s.at[d*3]+s.vel[d*3]*t,s.at[d*3+1]=s.at[d*3+1]+s.vel[d*3+1]*t,s.at[d*3+2]=s.at[d*3+2]+s.vel[d*3+2]*t}const h=(d,g,m,x,p,y)=>{const _=s.next;s.next=(s.next+1)%Xn,s.at[_*3]=d+(Math.random()-.5)*.5,s.at[_*3+1]=g,s.at[_*3+2]=m+(Math.random()-.5)*.5,s.vel[_*3]=a*x+(Math.random()-.5)*.6,s.vel[_*3+1]=p*(.6+Math.random()*.6),s.vel[_*3+2]=l*x+(Math.random()-.5)*.6,s.life[_*3]=.001,s.life[_*3+1]=Math.random(),s.life[_*3+2]=y};s.owed=r>0&&!c?s.owed+t*(2+16*r):0;const u=this.blown?this.group.position:this.nose,f=this.blown?.5:0;for(;s.owed>=1;){s.owed-=1;const d=this.blown&&Math.random()<.4;h(u.x+(d?(Math.random()-.5)*1.6:0),u.y+f*Math.random(),u.z+(d?(Math.random()-.5)*1.6:0),.35,d?2.4:1.5,d?2:Math.min(1,r*1.6)*(.7+.3*Math.random()))}for(let d=0;d<4;d++){const g=Se.WHEELS+d*Se.WHEEL_STRIDE,m=Math.abs(e[g+Se.W_SPIN]*this.shape.wheelRadius-e[Se.SPEED]),x=Math.abs(e[g+Se.W_SLIP_TAN])>.3?Math.abs(e[g+Se.W_SLIP_TAN])*Math.abs(e[Se.SPEED]):0,p=e[g+Se.W_GROUNDED]>.5?Math.max(m-4,x-4):0;if(this.rubber[d]=p>0&&!c?this.rubber[d]+t*Math.min(22,4+p*1.6):0,!(this.rubber[d]<1))for(this.patch.set(d%2===0?-this.shape.halfTrack:this.shape.halfTrack,-e[g+Se.W_LENGTH]-this.shape.wheelRadius+.1,d<2?-this.shape.axleFront:this.shape.axleRear).applyQuaternion(this.group.quaternion).add(this.group.position);this.rubber[d]>=1;)this.rubber[d]=this.rubber[d]-1,h(this.patch.x,this.patch.y,this.patch.z,.1,.9,0)}s.geo.getAttribute("aAt").needsUpdate=!0,s.geo.getAttribute("aLife").needsUpdate=!0}body(e,t){const n=this.shape,s=this.look,r=s.screenFoot,a=s.screenHead,o=s.backHead,l=s.backFoot,c=Math.max(r+.26,-n.axleFront+n.wheelRadius+cl+.1),h={bumperF:-e+.22,bonnet0:-e+.1,bonnet1:r-.16,door0:c,door1:Math.min((a+o)/2+.12,c+1.35),boot0:l+.06,boot1:e-.1,bumperR:e-.22},u=h.bonnet1>h.bonnet0+.2,f=h.boot1>h.boot0+.2,d=Object.values(h).filter(K=>K>-e+.03&&K<e-.03),g=[...d];for(let K=-e;K<=e+1e-6;K+=e/18)d.every(ie=>Math.abs(ie-K)>.045)&&g.push(K);g.sort((K,ie)=>K-ie);const m=[],x=[],p=[],y=[],_=19,v=K=>Math.min(Math.abs(K+n.axleFront),Math.abs(K-n.axleRear)),E=K=>{const ie=K/e,xe=Math.abs(ie),$=t*(.8+.2*Math.sqrt(Math.max(0,1-Math.pow(xe,5))))*(1-.1*si(.82,1,xe)),A=K<0?s.nose+(s.belt-s.nose)*si(-e,r,K):s.belt+.03*si(.3,.75,ie)-.07*si(.86,1,ie),ce=K<a?si(r,a,K):K<o?1:1-si(o,l,K),J=.035*(1-si(.85,1,xe)),re=A+J+(s.roof-A-J)*ce*(1-.04*si(o-.6,o,K)),he=ce>.02?1:0,be=$*(.93-.2*Math.min(1,ce*1.6)),me=n.wheelRadius+cl,Fe=v(K),st=-.37+.1*si(.86,1,xe),at=Fe<me?Math.max(st,Kc+Math.sqrt(me*me-Fe*Fe)):st,C=at+.085,S=Math.max(C+.04,A-.26),W=[[$*.8,at,0,1],[$*.965,C,0,1],[$,S,0,0],[$*.99,A-.07,0,0],[$*.93,A,0,0],[be+($*.93-be)*.42,A+(re-A)*.5,.5,0],[be,re-(re-A)*.06,.94,0],[be*.72,re,1,0],[be*.36,re+J*.5,1,0]],se=[],ue=[],ae=[0,0,0,0,0,0,1,.5,.15];se.push([0,at]),ue.push([0,0,he,1]),W.forEach(([Me,ze,Ce,ge],Ee)=>{se.push([Me,ze]),ue.push([Ce,ae[Ee],he,ge])}),se.push([0,re+J*.6]),ue.push([1,0,he,0]);for(let Me=W.length-1;Me>=0;Me--){const[ze,Ce,ge,Ee]=W[Me];se.push([-ze,Ce]),ue.push([ge,ae[Me],he,Ee])}const Ge=[(K-r)/(a-r),(K-o)/(l-o),0,e];return{p:se,a:ue,b:Ge}},M=g.map(E);M.forEach((K,ie)=>{const xe=g[ie];K.p.forEach(([$,A],ce)=>{m.push($,A,xe),x.push(...K.a[ce]),p.push(K.b[0],K.b[1],Math.hypot(v(xe),A-Kc)-n.wheelRadius,K.b[3])})});const R=(K,ie)=>K*(_+1)+(ie%(_+1)+(_+1))%(_+1);if(M[0].p.length!==_+1)throw new Error("the car body ring has changed its count");const P=new O,w=new O,b=new O,U=new O,N=new O,L=(K,ie,xe,$,A,ce,J)=>{w.fromArray(m,K*3),b.fromArray(m,ie*3),U.fromArray(m,xe*3),N.subVectors(b,w).cross(U.clone().sub(w)),!(N.lengthSq()<1e-12)&&(P.copy(w).add(b).add(U).multiplyScalar(1/3),N.dot(P.sub(new O($,A,ce)))>=0?y.push(K,ie,xe,J):y.push(K,xe,ie,J))},k=(K,ie)=>{const xe=Math.min(ie,_-ie),$=ie>_/2;return xe<=2&&K<h.bumperF?3:xe<=2&&K>h.bumperR?4:xe>=6&&u&&K>h.bonnet0&&K<h.bonnet1?1:xe>=6&&f&&K>h.boot0&&K<h.boot1?2:xe>=2&&xe<=6&&K>h.door0&&K<h.door1?$?5:6:xe>=2&&xe<=5&&K>h.bumperF&&K<h.door0?$?7:8:0};for(let K=0;K+1<M.length;K++){const ie=(g[K]+g[K+1])/2;for(let xe=0;xe<=_;xe++){const $=R(K,xe),A=R(K,xe+1),ce=R(K+1,xe+1),J=R(K+1,xe),re=k(ie,xe);L($,A,ce,0,.1,ie,re),L($,ce,J,0,.1,ie,re)}}for(const K of[0,M.length-1]){const ie=g[K],xe=K===0?ie+1:ie-1,$=M[K].p.map(J=>J[1]),A=(Math.min(...$)+Math.max(...$))/2,ce=m.length/3;M[K].p.forEach(([J,re],he)=>{m.push(J,re,ie),x.push(0,0,0,M[K].a[he][3]),p.push(9,9,9,e)});for(let J=0;J<(_+1)/2;J++){const re=ce+J,he=ce+J+1,be=ce+(_+1-J)%(_+1),me=ce+_-J,Fe=J<=2?K===0?3:4:0;me===he?L(re,he,be,0,A,xe,Fe):(L(re,he,me,0,A,xe,Fe),be!==re&&L(re,me,be,0,A,xe,Fe))}}const z=K=>{const ie=K*(t+.07),xe=s.belt+.04,$=r+.42,A=.085,ce=.05,J=.07,re=m.length/3,he=$>h.door0&&$<h.door1?K<0?5:6:0;for(const me of[-1,1])for(const Fe of[-1,1])for(const st of[-1,1])m.push(ie+me*A,xe+Fe*ce,$+st*J*(Fe>0?.7:1)),x.push(0,0,0,1),p.push(9,9,9,e);const be=(me,Fe,st,at)=>{L(re+me,re+Fe,re+st,ie,xe,$,he),L(re+me,re+st,re+at,ie,xe,$,he)};be(0,1,3,2),be(4,5,7,6),be(0,1,5,4),be(2,3,7,6),be(0,2,6,4),be(1,3,7,5)};z(-1),z(1);const F=y.length/4*3,I=new Float32Array(F*3),D=new Float32Array(F*4),V=new Float32Array(F*4),B=new Float32Array(F*3).fill(10),ee=new Uint8Array(F),ne=new Int32Array(F),we=new Map,_e=K=>`${Math.round(m[K*3]*2e3)},${Math.round(m[K*3+1]*2e3)},${Math.round(m[K*3+2]*2e3)}`,Te=(K,ie)=>{const xe=_e(K),$=_e(ie);return xe<$?`${xe}|${$}`:`${$}|${xe}`},Y=new Map;for(let K=0;K<y.length;K+=4)for(let ie=0;ie<3;ie++){const xe=Te(y[K+(ie+1)%3],y[K+(ie+2)%3]),$=Y.get(xe);$?$.push(y[K+3]):Y.set(xe,[y[K+3]])}for(let K=0,ie=0;K<y.length;K+=4){const xe=y[K+3];for(let $=0;$<3;$++,ie++){const A=y[K+$];I.set(m.slice(A*3,A*3+3),ie*3),D.set(x.slice(A*4,A*4+4),ie*4),V.set(p.slice(A*4,A*4+4),ie*4),ee[ie]=xe;const ce=A*16+xe;we.has(ce)||we.set(ce,we.size),ne[ie]=we.get(ce)}for(let $=0;$<3;$++){const A=y[K+($+1)%3],ce=y[K+($+2)%3],J=y[K+$];if(!Y.get(Te(A,ce)).some(be=>be!==xe))continue;w.fromArray(m,A*3),b.fromArray(m,ce*3),U.fromArray(m,J*3);const re=b.clone().sub(w),he=U.clone().sub(w).cross(re).length()/Math.max(1e-6,re.length());for(let be=0;be<3;be++)B[(ie-3+be)*3+$]=be===$?he:0}}const te=new Float32Array(F*3);ea(I,ne,we.size,te);const ve=new Nt;return ve.setAttribute("position",new dt(I,3)),ve.setAttribute("normal",new dt(te,3)),ve.setAttribute("carA",new dt(D,4)),ve.setAttribute("carB",new dt(V,4)),ve.setAttribute("carC",new dt(B,3)),ve.setAttribute("carP",new dt(Float32Array.from(I),3)),ve.setAttribute("carN",new dt(Float32Array.from(te),3)),ve.computeBoundingSphere(),{geo:ve,cut:{panel:ee,group:ne,groups:we.size}}}useSoft(e){this.skin?.dispose(),this.skin=e?new xx(this.bodyMesh,this.cut,e,this.group,this.loose,this.tyre,this.tyreMaterial,this.look.paint,this.underMaterial):null,this.lamps.uSoft.value=e?1:0}soft(e,t,n,s){this.skin&&e.length&&this.skin.apply(e,t,n,s)}drawn(){return this.skin?.counts()??null}bits(e,t,n,s){const r=this.puffs,a=this.spot.copy(e).applyQuaternion(this.group.quaternion).add(this.group.position);for(let o=0;o<n;o++){const l=r.next;r.next=(r.next+1)%Xn;const c=Math.random()*Math.PI*2,h=s*(.3+Math.random());r.at[l*3]=a.x+(Math.random()-.5)*.3,r.at[l*3+1]=a.y+(Math.random()-.5)*.2,r.at[l*3+2]=a.z+(Math.random()-.5)*.3,r.vel[l*3]=Math.cos(c)*h+this.carried.x*.7,r.vel[l*3+1]=1+Math.random()*s*.8,r.vel[l*3+2]=Math.sin(c)*h+this.carried.z*.7,r.life[l*3]=.001+Math.random()*.2,r.life[l*3+1]=Math.random(),r.life[l*3+2]=t}}gush(e,t,n){const s=this.puffs,r=this.spot.copy(e).applyQuaternion(this.group.quaternion).add(this.group.position);for(let a=0;a<n;a++){const o=s.next;s.next=(s.next+1)%Xn,s.at[o*3]=r.x+(Math.random()-.5)*.5,s.at[o*3+1]=r.y+Math.random()*.3,s.at[o*3+2]=r.z+(Math.random()-.5)*.5,s.vel[o*3]=this.carried.x*.4+(Math.random()-.5)*1.5,s.vel[o*3+1]=1.5+Math.random()*2.5,s.vel[o*3+2]=this.carried.z*.4+(Math.random()-.5)*1.5,s.life[o*3]=.001+Math.random()*.15,s.life[o*3+1]=Math.random(),s.life[o*3+2]=t}}fixingGave(e){this.skin&&(this.skin.where(e,this.spot2),this.bits(this.spot2,$c,5,2.5),this.bits(this.spot2,Yc,4,3.5))}paneGone(e){if(!this.skin)return;const t=this.lamps.uWide.value,n=this.look,s=this.spot2;e===0?s.set(0,(n.belt+n.roof)/2,(n.screenFoot+n.screenHead)/2):e===1?s.set(0,(n.belt+n.roof)/2,(n.backHead+n.backFoot)/2):s.set((e===2?-1:1)*t*.9,(n.belt+n.roof)/2,(n.screenHead+n.backHead)/2),this.bits(s,_x,26,3)}thingOff(e,t){if(!this.skin)return;const n=this.skin.where(20+e,this.spot2);e===0?this.gush(n,0,t?3:6):e===1||e===7?this.gush(n,.9,8):e===2&&this.bits(n,Yc,14,4),this.bits(n,$c,6,2.5)}fireball(){const e=this.puffs,t=this.group.position;for(let n=0;n<56;n++){const s=e.next;e.next=(e.next+1)%Xn;const r=Math.random()*Math.PI*2,a=Math.random(),o=Math.cbrt(Math.random())*1.7,l=1+Math.random()*5;e.at[s*3]=t.x+Math.cos(r)*o*(1-a*.5),e.at[s*3+1]=t.y+.2+a*1.6,e.at[s*3+2]=t.z+Math.sin(r)*o*(1-a*.5),e.vel[s*3]=Math.cos(r)*l,e.vel[s*3+1]=1.5+Math.random()*6,e.vel[s*3+2]=Math.sin(r)*l,e.life[s*3]=.001+Math.random()*.12,e.life[s*3+1]=Math.random(),e.life[s*3+2]=2}}splash(e){const t=this.puffs,n=Math.min(1,e/25),s=Math.round(14+26*n);for(let r=0;r<s;r++){const a=t.next;t.next=(t.next+1)%Xn;const o=Math.random()*Math.PI*2,l=.8+Math.random()*1.6,c=1.5+Math.random()*(3+6*n);t.at[a*3]=this.group.position.x+Math.cos(o)*l,t.at[a*3+1]=this.group.position.y+.2,t.at[a*3+2]=this.group.position.z+Math.sin(o)*l,t.vel[a*3]=Math.cos(o)*c,t.vel[a*3+1]=2.5+Math.random()*(3+5*n),t.vel[a*3+2]=Math.sin(o)*c,t.life[a*3]=.001,t.life[a*3+1]=Math.random(),t.life[a*3+2]=0}}update(e,t,n=0){this.group.position.set(e[Se.POS],e[Se.POS+1],e[Se.POS+2]),this.group.quaternion.set(e[Se.ROT],e[Se.ROT+1],e[Se.ROT+2],e[Se.ROT+3]).normalize();const s=this.shape,r=this.skin?Math.max(0,e[Se.WHEELS_OFF]):0;for(let l=0;l<4;l++){const c=Se.WHEELS+l*Se.WHEEL_STRIDE,h=this.wheels[l];if(h.visible=!(r>>l&1),h.position.set(l%2===0?-s.halfTrack:s.halfTrack,-e[c+Se.W_LENGTH],l<2?-s.axleFront:s.axleRear),this.skin){const u=this.skin.hub(l,this.spot);h.position.x+=u.x,h.position.z+=u.z}h.rotation.y=-e[c+Se.W_STEER],this.spinners[l].rotation.x=-e[c+Se.W_ANGLE]}this.lamps.uBrake.value=t?1:0,this.lamps.uReverse.value=e[Se.GEAR]<0?1:0,this.lamps.uCrush.value.set(e[Se.CRUSH],e[Se.CRUSH+1],e[Se.CRUSH+2],e[Se.CRUSH+3]),this.lamps.uWear.value.set(e[Se.WEAR],e[Se.WEAR+1],e[Se.WEAR+2],e[Se.WEAR+3]);const a=this.skin?e[Se.GLASS]:0;this.lamps.uGlass.value.set(a&3,a>>2&3,a>>4&3,a>>6&3);const o=e[Se.EXPLODED]>.5;o&&!this.blown&&this.fireball(),this.blown=o,this.burnt=o?Math.min(1,this.burnt+n/.5):0,this.lamps.uBurnt.value=this.burnt,this.paint.clearcoat=1-.97*this.burnt,this.underMaterial.color.setScalar(1-.85*this.burnt),this.smoke(e,n)}}const Px=[Nl,{name:"Pico",paint:14263572,screenFoot:-.78,screenHead:-.18,backHead:1.22,backFoot:1.78,nose:.2,belt:.42,roof:.915},{name:"Brannan",paint:12734476,screenFoot:-.5,screenHead:.22,backHead:.98,backFoot:1.85,nose:.2,belt:.41,roof:.815},{name:"Tamalpais",paint:1395358,screenFoot:-.8,screenHead:-.08,backHead:.9,backFoot:1.62,nose:.16,belt:.41,roof:.895},{name:"Hauler",paint:14605008,screenFoot:-2,screenHead:-1.5,backHead:2.38,backFoot:2.5,nose:.6,belt:.72,roof:1.565,glassTo:-.75},{name:"Marauder",paint:1447706,screenFoot:-.45,screenHead:.25,backHead:.95,backFoot:1.8,nose:.22,belt:.43,roof:.815},{name:"Bulwark",paint:4869973,screenFoot:-.95,screenHead:-.5,backHead:.75,backFoot:.95,nose:.62,belt:.78,roof:1.365}],Dx=i=>Px.find(e=>e.name===i)??{...Nl,name:i};class Ix{nx;nz;cell;x0;z0;h;constructor(e){const t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint32(4,!0);if(t.getUint32(0,!0)!==1464873552||n<1||n>8)throw new Error(`not a world file this build reads (version ${n})`);this.nx=t.getUint32(8,!0),this.nz=t.getUint32(12,!0),this.cell=t.getFloat32(16,!0),this.x0=t.getFloat32(20,!0),this.z0=t.getFloat32(24,!0);const s=t.getFloat32(28,!0);this.h=new Float32Array(this.nx*this.nz);for(let r=0;r<this.h.length;r++)this.h[r]=s+t.getInt16(32+r*2,!0)*.01}ways=[];setWays(e){this.ways=e}onWay(e,t,n,s){const r=e.p[t],a=e.p[t+1],o=a[0]-r[0],l=a[2]-r[2],c=o*o+l*l;if(c<1e-6)return null;const h=Math.sqrt(c),u=((n-r[0])*o+(s-r[2])*l)/c,f=.8/h;if(u<(t===0?0:-f)||u>(t+2===e.p.length?1:1+f))return null;const d=r[0]+o*u-n,g=r[2]+l*u-s;if(d*d+g*g>e.half*e.half)return null;const m=Math.min(1,Math.max(0,u));return r[1]+(a[1]-r[1])*m}surface(e,t,n){const s=this.at(e,t),r=n+.35;let a=-1/0,o=!1;for(const l of this.ways)for(let c=0;c+1<l.p.length;c++){const h=this.onWay(l,c,e,t);h!==null&&(l.k==="tunnel"&&n<h+(l.clear??5.6)&&(o=!0),h<=r&&h>a&&(a=h))}return!o&&s<=r&&s>a&&(a=s),a===-1/0?s:a}tunnel(e,t,n){for(const s of this.ways)if(s.k==="tunnel")for(let r=0;r+1<s.p.length;r++){const a=this.onWay(s,r,e,n);if(a!==null&&t>a-2&&t<a+(s.clear??5.6)+.5)return{floor:a,roof:a+(s.clear??5.6),way:s,si:r}}return null}deckOver(e,t,n){let s=1/0;for(const r of this.ways)if(r.k==="deck")for(let a=0;a+1<r.p.length;a++){const o=this.onWay(r,a,e,t);o!==null&&o-1.2>n&&o-1.2<s&&(s=o-1.2)}return s}at(e,t){const n=Math.min(this.nx-1.001,Math.max(0,(e-this.x0)/this.cell)),s=Math.min(this.nz-1.001,Math.max(0,(t-this.z0)/this.cell)),r=Math.floor(n),a=Math.floor(s),o=n-r,l=s-a,c=a*this.nx+r,h=this.h;return(h[c]*(1-o)+h[c+1]*o)*(1-l)+(h[c+this.nx]*(1-o)+h[c+this.nx+1]*o)*l}}async function Fx(i){const e=await fetch(i);if(!e.ok)throw new Error(`${i}: ${e.status}`);return new Uint8Array(await e.arrayBuffer())}const Ux=1464873552,Nx=8;function zx(i){const e=new DataView(i.buffer,i.byteOffset,i.byteLength);if(e.getUint32(0,!0)!==Ux)throw new Error("not a world file");const t=e.getUint32(8,!0),n=e.getUint32(12,!0),s=e.getFloat32(16,!0),r=e.getFloat32(20,!0),a=e.getFloat32(24,!0),o=e.getFloat32(28,!0),l=new Float32Array(t*n);for(let h=0;h<l.length;h++)l[h]=o+e.getInt16(32+h*2,!0)*.01;return{nx:t,nz:n,cell:s,x0:r,z0:a,h:l,at:(h,u)=>{const f=Math.min(t-1.001,Math.max(0,(h-r)/s)),d=Math.min(n-1.001,Math.max(0,(u-a)/s)),g=Math.floor(f),m=Math.floor(d),x=f-g,p=d-m,y=m*t+g;return(l[y]*(1-x)+l[y+1]*x)*(1-p)+(l[y+t]*(1-x)+l[y+t+1]*x)*p}}}const Ox=2e3,Vr=500,kx=5;function Bx(i,e=Ox){const n=111320*Math.cos(i.lat*Math.PI/180),s=Math.round(i.lat*111320/Vr)*Vr/111320,r=Math.round(i.lon*n/Vr)*Vr/n,a=e/2/111320,o=e/2/n;return{key:`at_${s.toFixed(4)}_${r.toFixed(4)}_${e}_m${kx}b${Nx}`,centre:{lon:r,lat:s},bbox:[r-o,s-a,r+o,s+a]}}const Hx=/^(motorway|trunk|primary|secondary|tertiary|residential|unclassified)$/,Gx=(i,e,t)=>{let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const[a,o]=i[s],[l,c]=i[r];o>t!=c>t&&e<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n};function Vx(i,e,t,n,s){const[r,a,o,l]=i.box,c=48,h=new Map;i.buildings.forEach((m,x)=>{if(m.m)return;let p=1/0,y=-1/0,_=1/0,v=-1/0;for(const[E,M]of m.r)p=Math.min(p,E),y=Math.max(y,E),_=Math.min(_,M),v=Math.max(v,M);for(let E=Math.floor(p/c);E<=Math.floor(y/c);E++)for(let M=Math.floor(_/c);M<=Math.floor(v/c);M++){const R=`${E}_${M}`;(h.get(R)??h.set(R,[]).get(R)).push(x)}});const u=(m,x)=>(h.get(`${Math.floor(m/c)}_${Math.floor(x/c)}`)??[]).some(p=>Gx(i.buildings[p].r,m,x)),f=(m,x,p,y)=>{if(!(m>r+30&&m<o-30&&x>a+30&&x<l-30))return!1;for(const _ of[-3,0,3])for(const v of[-1.2,1.2]){const E=m+p*_-y*v,M=x+y*_+p*v;if(u(E,M)||e(E,M)<t+.2)return!1}return!0};let d=null;for(const m of i.roads)if(!(!Hx.test(m.c)||m.b))for(let x=0;x+1<m.p.length;x++){const[p,y]=m.p[x],[_,v]=m.p[x+1],E=_-p,M=v-y,R=Math.hypot(E,M);if(R<12)continue;const P=Math.max(5/R,Math.min(1-5/R,((n-p)*E+(s-y)*M)/(R*R))),w=p+E*P,b=y+M*P,U=Math.hypot(w-n,b-s);d&&U>=d.d||f(w,b,E/R,M/R)&&(d={d:U,qx:w,qz:b,dx:E,dz:M,c:m.c})}if(!d)return null;const g=m=>Math.round(m*10)/10;return{x:g(d.qx),z:g(d.qz),heading:Math.round(Math.atan2(d.dx,-d.dz)*1e3)/1e3,road:d.c,off:g(d.d)}}const Jc=6378137,Za=Math.PI/180;function Wx(i,e){const t=Math.cos(i.lat*Za);return{x:(e.lon-i.lon)*Za*Jc*t,y:(e.lat-i.lat)*Za*Jc}}function yf(i){const e=/^\s*(-?\d{1,2}(?:\.\d+)?)\s*,\s*(-?\d{1,3}(?:\.\d+)?)\s*$/.exec(i.get("at")??"");if(!e)return null;const t=Number(e[1]),n=Number(e[2]);return Math.abs(t)>85||Math.abs(n)>180?null:{lat:t,lon:n,label:i.get("place")||`${t.toFixed(5)}, ${n.toFixed(5)}`}}function hl(i){const e=new URLSearchParams(location.search);e.delete("at"),e.delete("place"),e.delete("start"),e.delete("world"),i&&(e.set("at",`${i.lat.toFixed(5)},${i.lon.toFixed(5)}`),e.set("place",i.label.split(",").slice(0,2).join(",").slice(0,60)));const t=e.toString();return`${location.pathname}${t?`?${t}`:""}`}const qx=/^\s*(-?\d{1,2}(?:\.\d+)?)\s*[,\s]\s*(-?\d{1,3}(?:\.\d+)?)\s*$/;let Qc=0;async function Xx(i){const e=qx.exec(i);if(e){const r=Number(e[1]),a=Number(e[2]);if(Math.abs(r)<=85&&Math.abs(a)<=180)return[{label:`${r.toFixed(5)}, ${a.toFixed(5)}`,lat:r,lon:a}]}const t=Qc+1100-Date.now();t>0&&await new Promise(r=>setTimeout(r,t)),Qc=Date.now();const n=await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&q=${encodeURIComponent(i)}`,{headers:{Accept:"application/json"}});if(!n.ok)throw new Error(`the address search answered ${n.status}`);return(await n.json()).map(r=>({label:r.display_name,lat:Number(r.lat),lon:Number(r.lon)})).filter(r=>Number.isFinite(r.lat)&&Number.isFinite(r.lon)&&Math.abs(r.lat)<=85)}const $x="p2p-squares",pr="squares",Yx=6;function wf(){return new Promise((i,e)=>{const t=indexedDB.open($x,1);t.onupgradeneeded=()=>{t.result.createObjectStore(pr,{keyPath:"key"})},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error??new Error("IndexedDB refused"))})}const Mf=i=>new Promise((e,t)=>{i.onsuccess=()=>e(i.result),i.onerror=()=>t(i.error)});async function Kx(i){try{const e=await wf(),t=await Mf(e.transaction(pr).objectStore(pr).get(i));return e.close(),t??null}catch{return null}}async function eh(i){try{const e=await wf(),t=e.transaction(pr,"readwrite"),n=t.objectStore(pr);n.put(i);const s=await Mf(n.getAll());for(const r of s.sort((a,o)=>o.used-a.used).slice(Yx))n.delete(r.key);return await new Promise((r,a)=>{t.oncomplete=()=>r(),t.onerror=()=>a(t.error),t.onabort=()=>a(t.error)}),e.close(),!0}catch(e){return console.warn("the square was made and not kept:",e),!1}}async function jx(i,e,t){const n=Bx(i),s=Zx().has("remake")?null:await Kx(n.key);if(s){t("a square made here before");const o=JSON.parse(s.page),l=new Uint8Array(s.blob),c=o.from.at;if(!c||Math.abs(c.lat-i.lat)>2e-4||Math.abs(c.lon-i.lon)>2e-4){const h=Wx(n.centre,i),u=zx(l),f=Vx(o,u.at,o.ground.sea??-1/0,h.x,-h.y);f&&(o.starts=[{label:i.label,...f}])}return o.starts[0]&&(o.starts[0].label=i.label),eh({...s,used:Date.now()}),{blob:l,page:o,mask:{...s.kinds,data:new Uint8Array(s.kinds.data)},kept:!0,seconds:null}}const r=await new Promise((o,l)=>{const c=new Worker(new URL(""+new URL("worker-DOQDnaDz.js",import.meta.url).href,import.meta.url),{type:"module"});c.onmessage=h=>{const u=h.data;"step"in u?t(u.step):"done"in u?(c.terminate(),o(u.done)):(c.terminate(),l(new Error(u.error)))},c.onerror=h=>{c.terminate(),l(new Error(`the worker that makes a square failed: ${h.message||"it could not be started"}`))},c.postMessage({lat:i.lat,lon:i.lon,label:i.label,kinds:e})});t("keeping the square on this device");const a=await eh({key:r.key,used:Date.now(),blob:r.blob.slice(0),page:r.page,kinds:{...r.kinds,data:r.kinds.data.slice(0)}});return{blob:new Uint8Array(r.blob),page:JSON.parse(r.page),mask:{...r.kinds,data:new Uint8Array(r.kinds.data)},kept:a,seconds:r.seconds}}const Zx=()=>new URLSearchParams(location.search),Jx=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Qx=`
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
  }`,ev=`
  uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 texel;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tSrc, vUv).rgb * 0.25;
    c += (texture2D(tSrc, vUv + vec2(texel.x, 0.0)).rgb + texture2D(tSrc, vUv - vec2(texel.x, 0.0)).rgb + texture2D(tSrc, vUv + vec2(0.0, texel.y)).rgb + texture2D(tSrc, vUv - vec2(0.0, texel.y)).rgb) * 0.125;
    c += (texture2D(tSrc, vUv + texel).rgb + texture2D(tSrc, vUv - texel).rgb + texture2D(tSrc, vUv + vec2(texel.x, -texel.y)).rgb + texture2D(tSrc, vUv + vec2(-texel.x, texel.y)).rgb) * 0.0625;
    gl_FragColor = vec4(c + texture2D(tAdd, vUv).rgb, 1.0);
  }`,tv=`
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
  }`;class th{constructor(e,t,n){this.renderer=e,this.quality=t;const s=t==="high";this.target=new hi(4,4,{type:Vi,samples:n,depthBuffer:!0}),s&&(this.target.depthTexture=new Rl(4,4),this.target.depthTexture.type=Ei);const r=()=>new hi(4,4,{type:Vi,depthBuffer:!1,minFilter:En,magFilter:En});for(let l=0;l<3;l++)this.mips.push(r());for(let l=0;l<2;l++)this.ups.push(r());const a=(l,c,h={})=>new Ln({vertexShader:Jx,fragmentShader:l,uniforms:c,defines:h,depthTest:!1,depthWrite:!1,toneMapped:!1});this.down=a(Qx,{tSrc:{value:null},texel:{value:new rt},knee:{value:0}}),this.up=a(ev,{tSrc:{value:null},tAdd:{value:null},texel:{value:new rt}}),this.final=a(tv,{tScene:{value:this.target.texture},tBloom:{value:null},tDepth:{value:this.target.depthTexture??null},bloom:{value:t==="high"?.085:.07},exposure:{value:1},time:{value:0},size:{value:new rt},ao:{value:.75},nearFar:{value:new rt(.3,6e3)}},s?{USE_AO:""}:{});const o=new Nt;o.setAttribute("position",new Rt([-1,-1,0,3,-1,0,-1,3,0],3)),o.setAttribute("uv",new Rt([0,0,2,0,0,2],2)),this.quad=new Ct(o,this.down),this.quad.frustumCulled=!1,this.scene.add(this.quad)}scene=new il;camera=new Dl(-1,1,1,-1,0,1);quad;target;mips=[];ups=[];down;up;final;size=new rt;frame=0;static samples(e){if(!e.capabilities.isWebGL2)return-1;const t=e.getContext();if(!(t.getExtension("EXT_color_buffer_half_float")||t.getExtension("EXT_color_buffer_float")))return-1;const n=a=>{const o=t.createFramebuffer(),l=t.createRenderbuffer(),c=t.createTexture();t.bindFramebuffer(t.FRAMEBUFFER,o),a?(t.bindRenderbuffer(t.RENDERBUFFER,l),t.renderbufferStorageMultisample(t.RENDERBUFFER,4,t.RGBA16F,8,8),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,l)):(t.bindTexture(t.TEXTURE_2D,c),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,8,8,0,t.RGBA,t.HALF_FLOAT,null),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,c,0));const h=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE&&t.getError()===t.NO_ERROR;return t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.bindTexture(t.TEXTURE_2D,null),t.deleteFramebuffer(o),t.deleteRenderbuffer(l),t.deleteTexture(c),h};for(;t.getError()!==t.NO_ERROR;);const s=n(!1),r=s&&n(!0);return e.resetState(),s?r?4:0:-1}fit(){const e=this.renderer.getDrawingBufferSize(new rt);if(e.equals(this.size))return;this.size.copy(e),this.target.setSize(e.x,e.y);let t=e.x,n=e.y;this.mips.forEach((s,r)=>{const a=r===0?4:2;t=Math.max(2,Math.round(t/a)),n=Math.max(2,Math.round(n/a)),s.setSize(t,n)}),this.ups[0].setSize(this.mips[1].width,this.mips[1].height),this.ups[1].setSize(this.mips[0].width,this.mips[0].height),this.final.uniforms.size.value.copy(e)}pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera)}render(e,t){this.fit();const n=this.renderer;n.setRenderTarget(this.target),n.render(e,t);const s=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1;const r=this.down.uniforms,a=this.up.uniforms;let o=this.target.texture,l=this.size.x,c=this.size.y;this.mips.forEach((u,f)=>{r.tSrc.value=o,r.texel.value.set(1/l,1/c).multiplyScalar(f===0?2:1),r.knee.value=f===0?1:0,this.pass(this.down,u),o=u.texture,l=u.width,c=u.height}),a.tSrc.value=this.mips[2].texture,a.tAdd.value=this.mips[1].texture,a.texel.value.set(1/this.mips[2].width,1/this.mips[2].height),this.pass(this.up,this.ups[0]),a.tSrc.value=this.ups[0].texture,a.tAdd.value=this.mips[0].texture,a.texel.value.set(1/this.ups[0].width,1/this.ups[0].height),this.pass(this.up,this.ups[1]);const h=this.final.uniforms;h.tBloom.value=this.ups[1].texture,h.exposure.value=n.toneMappingExposure,h.time.value=this.frame++%240/240,h.nearFar.value.set(t.near,t.far),this.pass(this.final,null),n.shadowMap.autoUpdate=s}get name(){return this.quality}}function nv(i){const e=i.has("test"),t=i.get("q"),n=t==="low"||t==="high"?t:"mid";return hx(n),{dpr:Math.min(Number(i.get("dpr")??(e?1:n==="low"?1.5:2)),window.devicePixelRatio||1),shadows:i.get("shadows")?i.get("shadows")!=="0":!e,far:Number(i.get("far")??1200),quality:n}}const iv=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,sv=`
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
  }`,nh=7e3;class rv{constructor(e,t){this.knobs=t,fx(),vf.far=t.far;const n=t.quality;if(this.renderer=new ix({canvas:e,antialias:n==="low",powerPreference:"high-performance"}),this.renderer.setPixelRatio(t.dpr),this.renderer.outputColorSpace=fn,this.renderer.toneMapping=zh,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=t.shadows,this.renderer.shadowMap.type=Nh,this.renderer.info.autoReset=!1,n!=="low"){const c=th.samples(this.renderer);c>=0&&(this.post=new th(this.renderer,n,c))}const s=new Ln({vertexShader:iv,fragmentShader:sv,side:wn,depthWrite:!1,fog:!1,uniforms:{eyeY:{value:0}},defines:{CLOUDS:""}});this.skyUniforms=s.uniforms,this.sky=new Ct(new Cl(1,32,16),s),this.sky.frustumCulled=!1,this.sky.renderOrder=-1;const r=new al(this.renderer),a=new il;a.add(this.sky),this.reflections=r.fromScene(a,0,.1,10).texture,r.dispose(),this.sky.scale.setScalar(nh*.9),this.scene.add(this.sky),this.scene.fog=new Tl(10466511,1/(t.far*1.4)),this.scene.add(new gd(12899306,11771271,2.9)),this.square=n==="low"?260:210,this.mapSize=n==="low"?1024:2048,this.sun.castShadow=t.shadows,this.sun.shadow.mapSize.set(this.mapSize,this.mapSize);const o=this.sun.shadow.camera,l=this.square/2;o.left=-l,o.right=l,o.top=l,o.bottom=-l,o.near=10,o.far=760,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.45,this.sun.shadow.radius=1.6,this.scene.add(this.sun,this.sun.target)}renderer;scene=new il;sun=new _d(16767405,4.3);reflections;sky;skyUniforms;post=null;ahead=new O;square;mapSize;resize(e){const t=window.innerWidth,n=window.innerHeight;this.renderer.setSize(t,n,!1),e.aspect=t/n,e.far=nh,e.updateProjectionMatrix()}follow(e,t){this.sky.position.copy(t),this.skyUniforms.eyeY.value=t.y,this.ahead.set(e.x-t.x,0,e.z-t.z);const n=this.ahead.length();n>.5?this.ahead.multiplyScalar(this.square*.3/n):this.ahead.set(0,0,0);const s=this.square/this.mapSize,r=Math.round((e.x+this.ahead.x)/s)*s,a=Math.round((e.z+this.ahead.z)/s)*s;this.sun.target.position.set(r,e.y,a),this.sun.position.copy(this.sun.target.position).addScaledVector(wi,380),this.sun.target.updateMatrixWorld()}draw(e){this.renderer.info.reset();for(const t of this.scene.children)t.userData.tend?.(e.position);this.post?this.post.render(this.scene,e):this.renderer.render(this.scene,e)}}const xs=`?v=${encodeURIComponent("e81d8cf 2026-11-23 04:15Z".split(" ")[0])}`,ih={canon:[.075,.15,.034],pull:.65,soft:!0,second:[.19,.145,.095],patch:.8,patchSize:4.8,patchAt:.8,fine:[24,24],fineAmp:.8,mid:5,midAmp:.55,lean:[1.25,1,.5],coarse:.24,stain:[1.1,1.05,.86]},sh={canon:[.175,.175,.18],pull:.62,second:[.12,.12,.125],patch:.7,patchSize:9,patchAt:.66,fine:[11,11],fineAmp:.3,mid:2,midAmp:.12,coarse:.14,stain:[.88,.88,.88],crack:.5,gloss:.4},er=[{canon:[0,0,0],pull:0,fine:[1,1],fineAmp:0,mid:1,midAmp:0,coarse:0,stain:[1,1,1]},ih,{canon:[.045,.085,.03],pull:.55,soft:!0,second:[.105,.075,.05],patch:.9,patchSize:1.8,patchAt:.6,fine:[41,41],fineAmp:.5,mid:13,midAmp:.7,lean:[.9,1,.7],coarse:.5,stain:[1.25,1.1,.8]},{canon:[.5,.41,.27],pull:.65,soft:!0,second:[.36,.29,.19],patch:.5,patchSize:3,patchAt:.62,fine:[19,19],fineAmp:.34,mid:3.1,midAmp:.34,coarse:.2,stain:[.85,.85,.85]},{canon:[.2,.155,.1],pull:.6,soft:!0,second:[.085,.13,.04],patch:.7,patchSize:2.2,patchAt:.6,fine:[43,43],fineAmp:.4,mid:9,midAmp:.35,coarse:.25,stain:[.8,.8,.8]},{canon:[.2,.195,.185],pull:.7,second:[.12,.12,.11],patch:.5,patchSize:1.5,patchAt:.6,fine:[17,17],fineAmp:.4,mid:3.3,midAmp:.3,coarse:.3,stain:[.8,.8,.8],cell:[.9,.6],stagger:1,tone:.8,joint:.03,jointDark:.6,crown:.3},{canon:[.07,.36,.44],pull:.9,fine:[1,1],fineAmp:0,mid:2.1,midAmp:.5,coarse:.1,stain:[1,1,1],gloss:1,cell:[.25,.25],joint:.006,jointDark:.2},{canon:[.37,.35,.31],pull:.6,second:[.2,.16,.11],patch:.45,patchSize:1.4,patchAt:.64,fine:[9,9],fineAmp:.24,mid:31,midAmp:.2,coarse:.18,stain:[.8,.8,.78],crack:.5,gloss:.18},sh,{canon:[0,0,0],pull:0,fine:[21,21],fineAmp:.14,mid:3,midAmp:.06,coarse:.1,stain:[.92,.92,.92],crack:.25,gloss:.3},{canon:[.42,.4,.355],pull:.6,second:[.24,.22,.19],patch:.4,patchSize:2.5,patchAt:.72,fine:[9,9],fineAmp:.22,mid:3,midAmp:.1,coarse:.11,stain:[.86,.85,.82],crack:.4,gloss:.22,cell:[1.83,1.83],tone:.2,joint:.009,jointDark:.45},{canon:[.36,.33,.29],pull:.42,second:[.24,.22,.2],patch:.35,patchSize:3,patchAt:.72,fine:[14,14],fineAmp:.2,mid:3,midAmp:.1,coarse:.14,stain:[.84,.84,.84],gloss:.3,cell:[.6,.3],stagger:.5,tone:.25,joint:.006,jointDark:.5},{...sh,second:[.09,.09,.095],patch:.5,patchSize:1.4,patchAt:.74,cell:[2.6,17],joint:.05,jointDark:-.9,gate:5.2/17},{canon:[.21,.145,.1],pull:.7,second:[.12,.09,.07],patch:.5,patchSize:4,patchAt:.62,fine:[2.2,85],fineAmp:.34,mid:6,midAmp:.1,coarse:.1,stain:[.78,.78,.76],gloss:.12,cell:[4.2,.19],stagger:1,tone:.42,joint:.005,jointDark:.8,crown:.3},{...ih,patch:0,stain:[1.1,1.05,.9],cell:[6,4e3],tone:.12}];function av(i){const e=new Uint8Array(768),t=new Qe;for(let n=0;n<256;n++){const s=n>=30?Math.min(er.length-1,10+Math.floor((n-30)/45)):Math.min(n,9);s===0?t.copy(i):s===9?t.setRGB(.1,.2,.17):t.setRGB(...er[s].canon),t.convertLinearToSRGB(),e.set([Math.round(t.r*255),Math.round(t.g*255),Math.round(t.b*255)],n*3)}return e}const Fn={turned:30,steps:45,firstTurnedRow:10,deckRow:13,shoreRow:5},Ja=8;function ov(){const i=new Float32Array(er.length*Ja*4);er.forEach((t,n)=>{const s=t.cell??[1,1];i.set([...t.canon,t.pull+(t.soft?2:0),...t.second??[0,0,0],t.patch??0,...t.fine,t.fineAmp,1/(t.patchSize??1),t.mid,t.midAmp,t.coarse,t.patchAt??2,...t.lean??[1,1,1],t.gloss??0,...t.stain,t.crack??0,...s,t.stagger??0,t.tone??0,t.joint??.001,t.jointDark??0,t.gate??1,t.crown??0],n*Ja*4)});const e=new Wi(i,Ja,er.length,yn,Nn);return e.minFilter=e.magFilter=un,e.generateMipmaps=!1,e.colorSpace=Vn,e.needsUpdate=!0,e}const lv=`
  uniform sampler2D uKinds, uLooks; uniform vec4 uKindsBox; uniform vec2 uKindsSize; uniform float uKindsOn, uSea, uFlat;
  float p2pFade(float fw, float a, float b) { return 1.0 - smoothstep(a, b, fw); }
  // a byte of the mask: its row in the looks, and the angle it is laid at
  int p2pRow(float id) { return id >= ${Fn.turned}.0 ? ${Fn.firstTurnedRow} + int((id - ${Fn.turned}.0) / ${Fn.steps}.0) : min(int(id), ${Fn.firstTurnedRow-1}); }
  float p2pAngle(float id) {
    float o = max(id - ${Fn.turned}.0, 0.0), slot = floor(o / ${Fn.steps}.0);
    return (o - slot * ${Fn.steps}.0) / ${Fn.steps}.0 * (slot < 1.5 ? 1.5707963 : 3.1415927);
  }
  float p2pKind(ivec2 i) { return floor(texelFetch(uKinds, i, 0).r * 255.0 + 0.5); }
  vec4 p2pLook(int column, int row) { return texelFetch(uLooks, ivec2(column, row), 0); }
`,cv=(i,e,t)=>`
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
    float deck = dot(share, vec4(equal(rows, ivec4(${Fn.deckRow}))));
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
    float none = float(id < 0.5), deck = float(p2pRow(id) == ${Fn.deckRow});
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
    float bank = float(row == ${Fn.shoreRow}), up = vWorld.y - uSea;
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
  }`,Wr=64,hv=3,fv=i=>`vec3(${i.r.toFixed(4)}, ${i.g.toFixed(4)}, ${i.b.toFixed(4)})`,fl=new Qe(1456202),bf=`
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
  }`,uv=`
  {
    vec3 toEye = normalize(cameraPosition - vWorld);
    float glare = pow(max(dot(reflect(-toEye, vec3(0.0, 1.0, 0.0)), P2P_SUN), 0.0), 7.0) * pow(1.0 - max(toEye.y, 0.0), 2.0);
    outgoingLight += vec3(1.0, 0.88, 0.72) * glare * p2pLit * p2pGloss;
  }
  if (p2pWet > 0.0) {
    ${bf}
    outgoingLight = mix(outgoingLight, p2pSea, p2pWet);
  }`;function dv(i,e){const t=new Uint32Array(400);for(const s of i.h){const r=Math.round((s-e)*100);r>10&&r<400&&t[r]++}let n=0;for(let s=1;s<400;s++)t[s]>t[n]&&(n=s);return t[n]>i.h.length/50?e+n/100:-1/0}function pv(i){const e=Math.ceil(i.width/2),t=Math.ceil(i.height/2),n=new Uint8Array(e*t*4),s=av(fl);for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=i.data[Math.min(i.height-1,(t-1-a)*2)*i.width+Math.min(i.width-1,o*2)],c=(a*e+o)*4;n[c]=s[l*3],n[c+1]=s[l*3+1],n[c+2]=s[l*3+2],n[c+3]=255}const r=new Wi(n,e,t,yn);return r.colorSpace=fn,r.generateMipmaps=!0,r.minFilter=oi,r.magFilter=En,r.needsUpdate=!0,r}function mv(i,e,t,n=null){const{nx:s,nz:r,cell:a,x0:o,z0:l,h:c}=i;ux(i);const[h,u,f,d]=e.box;!t&&n&&(t=pv(n));const g=new en,m=[],x=Ul(),p=x==="low",y=e.ground.water+.6,_=new Wi(new Uint8Array([0]),1,1,_s);_.needsUpdate=!0;const v={uKinds:{value:_},uLooks:{value:ov()},uKindsBox:{value:new Et(0,0,1,1)},uKindsSize:{value:new rt(1,1)},uKindsOn:{value:0},uSea:{value:y},uFlat:{value:e.ground.flat??Math.max(dv(i,e.ground.water),y-1)}},E=ci(new zn({map:t,color:t?16777215:7304296}),e,{key:`p2p-ground-${x}`,uniforms:v,fragmentPars:lv,color:cv(!p,x==="high",fv(fl)),final:uv}),M=(I,D,V)=>{I.format=_s,I.colorSpace=Vn,I.minFilter=I.magFilter=un,I.generateMipmaps=!1,I.flipY=!1,v.uKinds.value=I,v.uKindsBox.value.set(h,u,D/(f-h),V/(d-u)),v.uKindsSize.value.set(D,V),v.uKindsOn.value=1};let R;if(n){const I=new Wi(n.data,n.width,n.height,_s);I.unpackAlignment=1,I.needsUpdate=!0,M(I,n.width,n.height),R=Promise.resolve()}else R=new cf().loadAsync(`./world/${e.name}.kinds.png${xs}`).then(I=>{const{width:D,height:V}=I.image;M(I,D,V)},()=>{console.warn(`no kind mask for ${e.name}: the ground is the photograph alone`)});const P=e.photo??(n?{x0:h,z0:u,w:f-h,d:d-u}:null),w=(I,D)=>c[Math.min(r-1,Math.max(0,D))*s+Math.min(s-1,Math.max(0,I))],b=(I,D,V,B,ee,ne)=>{const we=Math.ceil(V/ee),_e=Math.ceil(B/ee),Te=new Float32Array((we+1)*(_e+1)*3),Y=new Float32Array(Te.length),te=new Float32Array((we+1)*(_e+1)*2);let ve=0,K=0;for(let xe=0;xe<=_e;xe++)for(let $=0;$<=we;$++){const A=Math.min(I+V,I+$*ee),ce=Math.min(D+B,D+xe*ee),J=o+A*a,re=l+ce*a;Te[ve]=J,Te[ve+1]=w(A,ce)-ne,Te[ve+2]=re;const he=(w(A+1,ce)-w(A-1,ce))/(2*a),be=(w(A,ce+1)-w(A,ce-1))/(2*a),me=1/Math.hypot(he,1,be);Y[ve]=-he*me,Y[ve+1]=me,Y[ve+2]=-be*me,ve+=3,P&&(te[K]=(J-P.x0)/P.w,te[K+1]=1-(re-P.z0)/P.d),K+=2}const ie=new Nt;return ie.setAttribute("position",new dt(Te,3)),ie.setAttribute("normal",new dt(Y,3)),ie.setAttribute("uv",new dt(te,2)),ie.computeBoundingSphere(),ie},U=(I,D,V)=>{const B=[];for(let ee=0;ee<D;ee+=V)for(let ne=0;ne<I;ne+=V){const we=Math.min(I,ne+V),_e=Math.min(D,ee+V),Te=ee*(I+1)+ne,Y=ee*(I+1)+we,te=_e*(I+1)+ne,ve=_e*(I+1)+we;B.push(Te,te,Y,Y,te,ve)}return B};for(let I=0;I<r-1;I+=Wr)for(let D=0;D<s-1;D+=Wr){const V=Math.min(Wr,s-1-D),B=Math.min(Wr,r-1-I),ee=b(D,I,V,B,1,0),ne=[];for(const we of[1,2,4,8]){const _e=new Nt;_e.setAttribute("position",ee.getAttribute("position")),_e.setAttribute("normal",ee.getAttribute("normal")),_e.setAttribute("uv",ee.getAttribute("uv")),_e.setIndex(new Ts(U(V,B,we),1)),_e.boundingSphere=ee.boundingSphere;const Te=new Ct(_e,E);Te.receiveShadow=!0,Te.matrixAutoUpdate=!1,Te.visible=we===8,g.add(Te),ne.push(Te)}m.push({x:o+(D+V/2)*a,z:l+(I+B/2)*a,hx:V*a/2,hz:B*a/2,levels:ne})}const N=16,L=Math.ceil(Math.max(s,r)/3/N)*N;for(let I=0;I<r-1;I+=L)for(let D=0;D<s-1;D+=L){const V=Math.min(L,s-1-D),B=Math.min(L,r-1-I),ee=b(D,I,V,B,N,hv),ne=Math.ceil(V/N),we=Math.ceil(B/N);ee.setIndex(new Ts(U(ne,we,1),1));const _e=new Ct(ee,E);_e.receiveShadow=!0,_e.matrixAutoUpdate=!1,g.add(_e)}const k=ci(new zn({color:fl}),e,{key:"p2p-bay",light:"",final:`
      {
        ${bf}
        outgoingLight = p2pSea;
        // West of the map, and south of it as far east as the waterfront, there is city and not water.
        // Nothing is known of it here: the plane takes a city's mottled grey there, and the air does the rest.
        float land = max(step(vWorld.x, uEdge.x), step(uEdge.y, vWorld.z) * step(vWorld.x, uEdge.z));
        vec2 blocks = floor(vWorld.xz / 90.0);
        vec3 town = vec3(0.30, 0.29, 0.27) * (0.75 + 0.5 * p2pHash(blocks)) * (0.8 + 0.4 * p2pNoise(vWorld.xz * 0.05));
        town *= 1.0 - 0.35 * max(p2pLine(fract(vWorld.x / 90.0) * 90.0 - 45.0, 6.0, 1.0), p2pLine(fract(vWorld.z / 90.0) * 90.0 - 45.0, 6.0, 1.0));
        outgoingLight = mix(outgoingLight, town, land);
      }`,uniforms:{uEdge:{value:e.ground.around==="town"?new O(1e9,-1e9,1e9):new O(e.box[0],e.box[3],1100)}},fragmentPars:"uniform vec3 uEdge;"}),z=new Ct(new Ai(4e4,4e4),k);return z.rotation.x=-Math.PI/2,z.position.y=y,z.updateMatrixWorld(),g.add(z),{group:g,update:I=>{for(const D of m){const V=Math.hypot(Math.max(0,Math.abs(D.x-I.x)-D.hx),Math.max(0,Math.abs(D.z-I.z)-D.hz)),B=V<12?0:V<150?1:V<480?2:3,ee=V<vf.far;for(let ne=0;ne<4;ne++)D.levels[ne].visible=ee&&ne===B}},ready:R}}function kt(i){let e=Math.imul(i+1,2654435761);return e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,(e>>>0)/4294967296}class Xs{a=new Float32Array(1024);length=0;push(...e){if(this.length+e.length>this.a.length){const t=new Float32Array(Math.max(this.a.length*2,this.length+e.length));t.set(this.a.subarray(0,this.length)),this.a=t}for(let t=0;t<e.length;t++)this.a[this.length++]=e[t]}done(){return this.a.slice(0,this.length)}view(){return this.a.subarray(0,this.length)}}class ai{constructor(e,t=0,n=0){this.cellSize=e,this.auxSize=t,this.extSize=n}bins=new Map;bin(e,t){const n=`${Math.floor(e/this.cellSize)}_${Math.floor(t/this.cellSize)}`;let s=this.bins.get(n);return s||(s={pos:new Xs,nor:new Xs,col:new Xs,aux:new Xs,ext:new Xs,idx:[],late:[],box:[]},this.bins.set(n,s)),s}build(e,t={}){const n=new en;for(const s of this.bins.values()){if(!s.idx.length&&!s.late.length&&!s.box.length)continue;const r=new Nt,a=s.pos.length/3;r.setAttribute("position",new dt(s.pos.done(),3));const o=s.nor.view(),l=s.col.view(),c=new Int8Array(o.length),h=new Uint8Array(l.length);for(let g=0;g<c.length;g++)c[g]=Math.round(Math.max(-1,Math.min(1,o[g]))*127);for(let g=0;g<h.length;g++)h[g]=Math.round(Math.max(0,Math.min(1,l[g]))*255);if(r.setAttribute("normal",new dt(c,3,!0)),r.setAttribute("color",new dt(h,3,!0)),this.auxSize&&r.setAttribute("aux",new dt(s.aux.done(),this.auxSize)),this.extSize&&r.setAttribute("ext",new dt(s.ext.done(),this.extSize)),this.auxSize&&s.aux.length!==a*this.auxSize)throw new Error("a batch has a short aux buffer");if(this.extSize&&s.ext.length!==a*this.extSize)throw new Error("a batch has a short ext buffer");const u=s.late.length>0||s.box.length>0,f=u?[...s.late,...s.idx,...s.box]:s.idx;r.setIndex(a>65535?new Al(f,1):new Ts(f,1)),r.computeBoundingSphere(),r.computeBoundingBox();const d=new Ct(r,e);d.castShadow=!!t.cast,d.receiveShadow=!!t.receive,d.matrixAutoUpdate=!1,u&&(d.userData.near=[0,s.late.length+s.idx.length],d.userData.far=[s.late.length,s.idx.length+s.box.length]),s.mesh=d,n.add(d)}return this.bins.clear(),n}}function tr(i,e,t,n,s,r,a,o,l,c){return i.pos.push(e,t,n),i.nor.push(s,r,a),i.col.push(o,l,c),i.pos.length/3-1}function zl(i){const e=new Qe(i);return[e.r,e.g,e.b]}const us=zl(8092540),$s=zl(12170667),rh=zl(16777215),gv=/^(motorway|trunk|primary|secondary|tertiary|residential|unclassified|living_street|service)$/;function xv(i){return{at(e,t){let n=1/0,s=i.p[0][1];for(let r=0;r+1<i.p.length;r++){const a=i.p[r],o=i.p[r+1],l=o[0]-a[0],c=o[2]-a[2],h=l*l+c*c||1,u=Math.min(1,Math.max(0,((e-a[0])*l+(t-a[2])*c)/h)),f=Math.hypot(a[0]+l*u-e,a[2]+c*u-t);f<n&&(n=f,s=a[1]+(o[1]-a[1])*u)}return s}}}function Ys(i,e,t=[]){const n=[];let s=0;for(let a=0;a+1<i.length;a++){const[o,l]=i[a],[c,h]=i[a+1],u=Math.hypot(c-o,h-l);if(u<.01)continue;const f=Math.max(1,Math.ceil(u/e));for(let d=n.length===0?0:1;d<=f;d++)n.push({x:o+(c-o)*d/f,z:l+(h-l)*d/f,dx:(c-o)/u,dz:(h-l)/u,s:s+u*d/f,j:0,must:d===f});s+=u}n.length&&(n[0].must=!0);for(let a=1;a+1<n.length;a++){const o=n[a-1],l=n[a+1],c=l.x-o.x,h=l.z-o.z,u=Math.hypot(c,h);u>.01&&(n[a].dx=c/u,n[a].dz=h/u)}if(!t.length||n.length<2)return n;const r=[];for(const[a,o]of t)r.push(a-.8,a,o,o+.8);for(const a of r){if(a<=.05||a>=s-.05)continue;let o=0;for(;o+1<n.length&&n[o+1].s<a;)o++;const l=n[o],c=n[o+1];if(a-l.s<.05||c.s-a<.05)continue;const h=(a-l.s)/(c.s-l.s),u=l.dx+(c.dx-l.dx)*h,f=l.dz+(c.dz-l.dz)*h,d=Math.hypot(u,f)||1;n.splice(o+1,0,{x:l.x+(c.x-l.x)*h,z:l.z+(c.z-l.z)*h,dx:u/d,dz:f/d,s:a,j:0,must:!0})}for(const a of n)for(const[o,l]of t)a.s>=o-.01&&a.s<=l+.01&&(a.j=1,a.must=!0);return n}function qr(i,e,t,n=.055,s=54){if(i.length<3)return i;const r=i.map(l=>[e.at(l.x,l.z),e.at(l.x+l.dz*t,l.z-l.dx*t),e.at(l.x-l.dz*t,l.z+l.dx*t)]),a=[i[0]];let o=0;for(;o<i.length-1;){let l=o+1;for(let c=o+2;c<i.length;c++){const h=i[o],u=i[c];if(u.s-h.s>s||i[c-1].must)break;let f=Math.abs(h.dx*u.dz-h.dz*u.dx)<.012;for(let d=o+1;f&&d<c;d++){const g=(i[d].s-h.s)/(u.s-h.s);for(let m=0;m<3;m++)if(Math.abs(r[d][m]-(r[o][m]+(r[c][m]-r[o][m])*g))>n){f=!1;break}}if(!f)break;l=c}a.push(i[l]),o=l}return a}function $n(i,e,t,n,s,r,a,o,l,c,h){if(t.length<2)return;let u=1;for(const d of t){const g=m=>e.at(d.x+d.dz*m,d.z-d.dx*m);if(Math.abs(g((n+s)/2)-(g(n)+g(s))/2)>.045){u=Math.max(1,Math.ceil(Math.abs(s-n)/6));break}}const f=[];for(const d of t){const g=d.dz,m=-d.dx,x=[];for(let p=0;p<=u;p++){const y=n+(s-n)*p/u,_=d.x+g*y,v=d.z+m*y;x.push(tr(i,_,e.at(_,v)+r,v,0,1,0,a[0],a[1],a[2])),i.aux.push(o(y),d.s,l,h??d.j),i.ext.push(c[0],c[1],c[2])}f.push(x)}for(let d=0;d+1<f.length;d++)for(let g=0;g<u;g++){const m=f[d][g],x=f[d][g+1],p=f[d+1][g],y=f[d+1][g+1];i.idx.push(m,p,x,x,p,y)}}const Gi=760,ta=170,Ds=330,Qa=`
  attribute vec4 aux; attribute vec3 ext;
  varying vec4 vAux; flat varying vec3 vExt;`,eo="vAux = aux; vExt = ext;",to=`
  varying vec4 vAux; flat varying vec3 vExt;
  // paint wears: where this is 0 it has gone
  float chipLike(vec2 rc) { return smoothstep(0.16, 0.5, p2pNoise(rc * vec2(7.0, 1.3) + 5.0) + 0.22); }`,Sf=`
  float p2pFar = length(vWorld.xz - cameraPosition.xz);
  if (p2pFar > ${(Gi-ta).toFixed(1)} && p2pHash(gl_FragCoord.xy) < (p2pFar - ${(Gi-ta).toFixed(1)}) / ${ta.toFixed(1)}) discard;`,ah=i=>`
  {
    vec3 toEye = normalize(cameraPosition - vWorld);
    float glare = pow(max(dot(reflect(-toEye, vec3(0.0, 1.0, 0.0)), P2P_SUN), 0.0), 7.0) * pow(1.0 - max(toEye.y, 0.0), 2.0);
    outgoingLight += vec3(1.0, 0.88, 0.72) * glare * p2pLit * ${i};
  }`,vv=`
  {
    // every derivative is taken here, outside any branch
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    ${Sf}
    vec2 rc = vAux.xy;
    float halfW = vAux.z, junction = vAux.w, lanes = floor(vExt.x + 0.5), oneWay = step(0.5, vExt.y), seed = vExt.z;
    float near = 1.0 - smoothstep(${(Ds*.6).toFixed(1)}, ${Ds.toFixed(1)}, p2pFar);
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
  }`,_v=`
  {
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    ${Sf}
    // across: metres in from the kerb; a plaza (ext.x = 1) has no kerb
    float across = vAux.x, along = vAux.y, wide = vAux.z, plaza = step(0.5, vExt.x), seed = vExt.z;
    float near = 1.0 - smoothstep(${(Ds*.5).toFixed(1)}, ${(Ds*.9).toFixed(1)}, p2pFar);
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
  }`,yv=`
  {
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    float p2pFar = length(vWorld.xz - cameraPosition.xz);
    float kind = floor(vExt.x + 0.5), seed = vExt.y;
    float near = 1.0 - smoothstep(${(Ds*.6).toFixed(1)}, ${Ds.toFixed(1)}, p2pFar);
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
    diffuseColor.a = a * (1.0 - smoothstep(${(Gi-ta-60).toFixed(1)}, ${(Gi-60).toFixed(1)}, p2pFar)) * (kind < 0.5 ? near : 1.0);
  }`;function wv(i,e){const t=new en,n=new ai(400,4,3),s=new ai(400,4,3),r=new ai(400,4,3),a=_=>`${_[0]}_${_[1]}`,o=new Map,l=e.roads.filter(_=>!_.b&&(gv.test(_.c)||_.c==="pedestrian")),c=_=>_==="service"||_==="living_street";for(const _ of l)_.c!=="pedestrian"&&_.p.forEach((v,E)=>{const M=o.get(a(v))??{n:0,major:0,half:0},R=E===0||E===_.p.length-1?1:2;M.n+=R,c(_.c)||(M.major+=R,M.half=Math.max(M.half,_.w/2)),o.set(a(v),M)});l.forEach((_,v)=>{const E=kt(v),M=_.w/2,R=c(_.c);if(_.c==="pedestrian"){const z=qr(Ys(_.p,6),i,M),F=z[z.length>>1];z.length>1&&$n(s.bin(F.x,F.z),i,z,-M,M,.05+E*.012,$s,I=>I+M,_.w,[1,0,E]);return}const P=[];let w=0;_.p.forEach((z,F)=>{F>0&&(w+=Math.hypot(z[0]-_.p[F-1][0],z[1]-_.p[F-1][1]));const I=o.get(a(z));if(R?I.n>=3:I.major>=3){const D=Math.max(I.half,M)+5.2;P.push([w-D,w+D])}});const b=qr(Ys(_.p,6,P),i,M+(_.s??0));if(b.length<2)return;const U=b[b.length>>1],N=.86+.3*kt(v+4001),L=(kt(v+911)-.5)*.05,k=[us[0]*N*(1+L),us[1]*N,us[2]*N*(1-L)];if($n(n.bin(U.x,U.z),i,b,-M,M,.07+E*.012,k,z=>z,M,[R?1:_.l??1,_.o||R?1:0,E]),_.s){const z=.92+.16*kt(v+77),F=[$s[0]*z,$s[1]*z,$s[2]*z];$n(s.bin(U.x,U.z),i,b,M,M+_.s,.05+E*.012,F,I=>I-M,_.s,[0,0,E]),$n(s.bin(U.x,U.z),i,b,-M-_.s,-M,.05+E*.012,F,I=>-I-M,_.s,[0,1,E])}}),(e.ways??[]).forEach((_,v)=>{const E=xv(_),M=kt(v+5003),R=_.p.map(k=>[k[0],k[2]]),P=Ys(R,6);if(P.length<2)return;const w=P[P.length>>1];if(_.c==="pedestrian"){$n(s.bin(w.x,w.z),E,P,-_.half+.3,_.half-.3,.03,$s,k=>k+_.half,_.half*2,[1,0,M]);return}const b=_.w/2,U=.8+.2*kt(v+6007),N=[us[0]*U,us[1]*U,us[2]*U];$n(n.bin(w.x,w.z),E,P,-b,b,.1,N,k=>k,b,[_.l??1,_.o?1:0,M]);const L=_.half-b-.05;if(L>.2){const k=[.62,.61,.58];$n(s.bin(w.x,w.z),E,P,b,b+L,.08,k,z=>z-b,L,[0,0,M]),$n(s.bin(w.x,w.z),E,P,-b-L,-b,.08,k,z=>-z-b,L,[0,1,M])}}),e.lines.forEach((_,v)=>{if(_.k==="crosswalk"){const E=qr(Ys(_.p,3),i,3.3,.02);if(E.length<2)return;const M=E[E.length-1].s,R=E[E.length>>1];$n(r.bin(R.x,R.z),i,E,-3.3,3.3,.105,rh,P=>P,M,[0,kt(v+20011),0],0)}else if(_.k==="rail"){const E=qr(Ys(_.p,4),i,2,.03);if(E.length<2)return;const M=E[E.length>>1];$n(r.bin(M.x,M.z),i,E,-2,2,.095,rh,R=>R,0,[1,kt(v+733),0],0)}});const h=(_,v)=>(_.polygonOffset=!0,_.polygonOffsetFactor=v,_.polygonOffsetUnits=v*2,_),u=h(ci(new zn({vertexColors:!0}),e,{key:"p2p-road",vertexPars:Qa,vertex:eo,fragmentPars:to,color:vv,final:ah("0.50")}),-3),f=h(ci(new zn({vertexColors:!0}),e,{key:"p2p-walk",vertexPars:Qa,vertex:eo,fragmentPars:to,color:_v,final:ah("0.22")}),-2),d=h(ci(new zn({vertexColors:!0,transparent:!0,depthWrite:!1}),e,{key:"p2p-over",vertexPars:Qa,vertex:eo,fragmentPars:to,color:yv,final:`
      {
        vec3 toEye = normalize(cameraPosition - vWorld);
        vec3 r = reflect(-toEye, vec3(0.0, 1.0, 0.0));
        float fres = 0.25 + 0.75 * pow(1.0 - max(toEye.y, 0.0), 4.0);
        outgoingLight = mix(outgoingLight, p2pSky(r) * 0.8 + vec3(1.0, 0.85, 0.65) * pow(max(dot(r, P2P_SUN), 0.0), 30.0) * 2.0 * p2pLit, p2pGloss * fres);
      }`}),-5),g=n.build(u,{receive:!0}),m=s.build(f,{receive:!0}),x=r.build(d,{receive:!0});for(const _ of x.children)_.renderOrder=2;t.add(m,g,x);const p=(_,v,E)=>{for(const M of _){const R=M.geometry.boundingSphere;M.visible=Math.hypot(R.center.x-v.x,R.center.z-v.z)-R.radius<E}};return{group:t,update:_=>{p(g.children,_,Gi),p(m.children,_,Gi),p(x.children,_,Gi-60)}}}const Dn=1,Mv=3.2,bv=2.4;function Sv(i){const e=i.length;return i.map((t,n)=>{const s=i[Math.max(0,n-1)],r=i[Math.min(e-1,n+1)];let a=r[0]-s[0],o=r[2]-s[2];const l=Math.hypot(a,o)||1e-6;a/=l,o/=l;let c=o,h=-a;if(n>0&&n<e-1){const u=i[n-1],f=i[n],d=f[0]-u[0],g=f[2]-u[2],m=Math.hypot(d,g)||1e-6,x=Math.max(.5,c*(g/m)+h*(-d/m));c/=x,h/=x}return[c,h]})}function no(i,e,t,n,s){return i.some((r,a)=>{if(a===e)return!1;for(let o=0;o+1<r.p.length;o++){const l=r.p[o],c=r.p[o+1],h=c[0]-l[0],u=c[2]-l[2],f=h*h+u*u;if(f<1e-6)continue;const d=Math.sqrt(f),g=((t-l[0])*h+(s-l[2])*u)/f,m=.8/d;if(g<(o===0?0:-m)||g>(o+2===r.p.length?1:1+m)||Math.hypot(l[0]+h*g-t,l[2]+u*g-s)>r.half)continue;const x=l[1]+(c[1]-l[1])*Math.min(1,Math.max(0,g));if(Math.abs(x-n)<1.5)return!0}return!1})}class oh{pos=[];col=[];aux=[];idx=[];quad(e,t,n,s,r,a,o=[[0,0],[0,0],[0,0],[0,0]]){const l=this.pos.length/3;for(const[_,v]of[e,t,n,s].entries())this.pos.push(v[0],v[1],v[2]),this.col.push(...r),this.aux.push(o[_][0],o[_][1]);const c=t[0]-e[0],h=t[1]-e[1],u=t[2]-e[2],f=n[0]-e[0],d=n[1]-e[1],g=n[2]-e[2],m=h*g-u*d,x=u*f-c*g,p=c*d-h*f;m*(a[0]-e[0])+x*(a[1]-e[1])+p*(a[2]-e[2])>=0?this.idx.push(l,l+1,l+2,l,l+2,l+3):this.idx.push(l,l+2,l+1,l,l+3,l+2)}geometry(){const e=new Nt;return e.setAttribute("position",new Rt(this.pos,3)),e.setAttribute("color",new Rt(this.col,3)),e.setAttribute("aWay",new Rt(this.aux,2)),e.setIndex(this.idx),e.computeVertexNormals(),e.computeBoundingSphere(),e}}const ds=[.66,.645,.61],Ev=[.42,.41,.39],Fi=[.74,.73,.7];function Av(i,e){const t=i.ways??[],n=new en,s=new oh,r=new oh;t.forEach((l,c)=>{const h=Sv(l.p),u=(m,x,p)=>{const y=l.p[m];return[y[0]+h[m][0]*l.half*x,y[1]+p,y[2]+h[m][1]*l.half*x]},f=(m,x)=>[l.p[m][0],l.p[m][1]+x,l.p[m][2]];if(l.k==="deck"){for(let m=0;m+1<l.p.length;m++){for(const x of[1,-1]){const p=u(m,x*3,-.6);s.quad(u(m,x,-1.2),u(m+1,x,-1.2),u(m+1,x,.02),u(m,x,.02),ds,p)}s.quad(u(m,1,-1.2),u(m+1,1,-1.2),u(m+1,-1,-1.2),u(m,-1,-1.2),Ev,f(m,-1.2-5));for(const x of[1,-1]){const p=u(m,x*.98,0),y=u(m+1,x*.98,0),_=[(p[0]+y[0])/2,(p[1]+y[1])/2,(p[2]+y[2])/2];if(no(t,c,_[0],_[1],_[2])||no(t,c,p[0],p[1],p[2])&&no(t,c,y[0],y[1],y[2]))continue;const v=(M,R,P)=>u(M,x*(1-R/l.half),P),E=f(m,1.5);s.quad(v(m,0,0),v(m+1,0,0),v(m+1,0,Dn),v(m,0,Dn),Fi,u(m,x*2,.5)),s.quad(v(m,0,Dn),v(m+1,0,Dn),v(m+1,.18,Dn),v(m,.18,Dn),Fi,f(m,10)),s.quad(v(m,.18,Dn),v(m+1,.18,Dn),v(m+1,.3,.32),v(m,.3,.32),Fi,E),s.quad(v(m,.3,.32),v(m+1,.3,.32),v(m+1,.42,.02),v(m,.42,.02),Fi,E)}}for(const[m,x]of[[0,l.shut[0]],[l.p.length-1,l.shut[1]]]){const p=m===0?1:l.p.length-2,y=[2*l.p[m][0]-l.p[p][0],l.p[m][1],2*l.p[m][2]-l.p[p][2]];x?(s.quad(u(m,1,-1.2),u(m,-1,-1.2),u(m,-1,Dn),u(m,1,Dn),Fi,y),s.quad(u(m,1,-1.2),u(m,-1,-1.2),u(m,-1,Dn),u(m,1,Dn),Fi,l.p[p])):l.p[m][1]-e.at(l.p[m][0],l.p[m][2])>1.5&&s.quad(u(m,1,-1.2),u(m,-1,-1.2),u(m,-1,0),u(m,1,0),ds,y)}return}const d=l.clear??5.6;let g=0;for(let m=0;m+1<l.p.length;m++){const x=Math.hypot(l.p[m+1][0]-l.p[m][0],l.p[m+1][2]-l.p[m][2]),p=f(m,d*.5);for(const y of[1,-1])r.quad(u(m,y,-.25),u(m+1,y,-.25),u(m+1,y,d),u(m,y,d),[.78,.77,.72],p,[[g,0],[g+x,0],[g+x,1],[g,1]]);r.quad(u(m,1,d),u(m+1,1,d),u(m+1,-1,d),u(m,-1,d),[.3,.3,.31],p,[[g,2],[g+x,2],[g+x,3],[g,3]]),g+=x}for(const m of[0,l.p.length-1]){const x=m===0?1:l.p.length-2,p=[2*l.p[m][0]-l.p[x][0],l.p[m][1]+2,2*l.p[m][2]-l.p[x][2]];let y=l.p[m][1]+d+bv;for(let P=0;P<Math.min(4,l.p.length);P++){const w=l.p[m===0?P:l.p.length-1-P];y=Math.max(y,e.at(w[0],w[2])+.5)}const _=y,v=(l.half+Mv)/l.half,E=(P,w)=>u(m,P,w);s.quad(E(1,-.3),E(v,-.3),E(v,_-l.p[m][1]),E(1,_-l.p[m][1]),ds,p),s.quad(E(-1,-.3),E(-v,-.3),E(-v,_-l.p[m][1]),E(-1,_-l.p[m][1]),ds,p),s.quad(E(1,d),E(-1,d),E(-1,_-l.p[m][1]),E(1,_-l.p[m][1]),ds,p);const M=[l.p[x][0],0,l.p[x][2]],R=(P,w)=>[P[0]+(M[0]-l.p[m][0])*w,P[1],P[2]+(M[2]-l.p[m][2])*w];s.quad(E(v,_-l.p[m][1]),E(-v,_-l.p[m][1]),R(E(-v,_-l.p[m][1]),.25),R(E(v,_-l.p[m][1]),.25),Fi,[l.p[m][0],_+10,l.p[m][2]])}});for(const l of i.piers??[]){const c=l.ax*l.a,h=l.az*l.a,u=-l.az*l.c,f=l.ax*l.c,d=.82,g=[[-1,-d],[-d,-1],[d,-1],[1,-d],[1,d],[d,1],[-d,1],[-1,d]].map(([m,x])=>[l.x+c*m+u*x,l.z+h*m+f*x]);for(let m=0;m<g.length;m++){const x=g[m],p=g[(m+1)%g.length],y=(x[0]+p[0])/2*2-l.x,_=(x[1]+p[1])/2*2-l.z;s.quad([x[0],l.y0,x[1]],[p[0],l.y0,p[1]],[p[0],l.y1,p[1]],[x[0],l.y1,x[1]],ds,[y,(l.y0+l.y1)/2,_])}}const a=ci(new zn({vertexColors:!0}),i,{key:"p2p-structure",color:`
      {
        float streak = p2pNoise(vec2(vWorld.x * 0.9 + vWorld.z * 0.7, vWorld.y * 0.08)) * p2pNoise(vec2(vWorld.x * 3.1 - vWorld.z * 2.3, vWorld.y * 0.4));
        diffuseColor.rgb *= 0.86 + 0.22 * p2pNoise(vWorld.xz * 0.35 + vWorld.y * 0.2) - 0.18 * streak;
      }`}),o=new Ct(s.geometry(),a);if(o.castShadow=!0,o.receiveShadow=!0,o.name="decks and piers",n.add(o),r.pos.length){const l=new Ln({vertexColors:!0,vertexShader:`
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
        }`}),c=new Ct(r.geometry(),l);c.name="tunnels",n.add(c)}return n.name="structures",{group:n,count:{decks:t.filter(l=>l.k==="deck").length,tunnels:t.filter(l=>l.k==="tunnel").length,piers:i.piers?.length??0}}}const na=3.2;function Tv(i){const e=new Map;for(const t of i.fronts??[])e.set(t.b*4096+t.e,t);return(t,n)=>e.get(t*4096+n)}const lh=360,io=1.6;class Rv{constructor(e,t){this.page=e;const n=e.fronts??[],s=new Ai(1,1),r=new Ps({color:2372412,metalness:.85,roughness:.08,envMap:t,envMapIntensity:1.2,transparent:!0,opacity:.5,side:ln,depthWrite:!1}),a=new Map;n.forEach((h,u)=>{const f=`${Math.floor(h.p0[0]/400)}_${Math.floor(h.p0[1]/400)}`;let d=a.get(f);d||a.set(f,d=[]),d.push(u)});const o=new Qt,l=new O,c=new O;for(const h of a.values()){const u=new qi(s,r,h.length);h.forEach((f,d)=>{const g=n[f],m=Math.hypot(g.p1[0]-g.p0[0],g.p1[1]-g.p0[1]);o.setFromUnitVectors(new O(0,0,1),new O(g.n[0],0,g.n[1]));const x=Math.min(g.y,Bi().at(g.p0[0],g.p0[1]),Bi().at(g.p1[0],g.p1[1])),p=g.y+na-x;c.set((g.p0[0]+g.p1[0])/2+g.n[0]*.04,x+p/2,(g.p0[1]+g.p1[1])/2+g.n[1]*.04),u.setMatrixAt(d,this.m.compose(c,o,l.set(m,p,1))),this.glass[f]={mesh:u,slot:d}}),u.instanceMatrix.needsUpdate=!0,u.computeBoundingSphere(),u.matrixAutoUpdate=!1,this.group.add(u),this.cells.push({mesh:u,x:u.boundingSphere.center.x,z:u.boundingSphere.center.z})}this.shards=new qi(new Ai(1,1),new Us({color:13625070,transparent:!0,opacity:.75,side:ln,depthWrite:!1}),lh),this.shards.count=0,this.shards.frustumCulled=!1,this.group.add(this.shards)}group=new en;glass=[];cells=[];shards;live=[];broken=new Set;m=new It;raze(e){}shatter(e,t){const n=this.page.fronts?.[e],s=this.glass[e];if(!n||!s||this.broken.has(e))return;this.broken.add(e),s.mesh.getMatrixAt(s.slot,this.m),s.mesh.setMatrixAt(s.slot,this.m.makeScale(0,0,0)),s.mesh.instanceMatrix.needsUpdate=!0;const r=Math.hypot(n.p1[0]-n.p0[0],n.p1[1]-n.p0[1]);for(let a=0;a<90&&this.live.length<lh;a++){const o=Math.random(),l=Math.random()*na,c=-(.25+Math.random()*.6)*Math.min(18,t);this.live.push({p:new O(n.p0[0]+(n.p1[0]-n.p0[0])*o,n.y+l,n.p0[1]+(n.p1[1]-n.p0[1])*o),v:new O(n.n[0]*c+(Math.random()-.5)*4,1+Math.random()*3,n.n[1]*c+(Math.random()-.5)*4),spin:new O(Math.random()*12-6,Math.random()*12-6,Math.random()*12-6),rot:new On(Math.random()*6,Math.random()*6,0),age:0,size:.08+Math.random()*.22+(r>8?.05:0)})}}reset(){const e=this.page.fronts??[],t=new Qt,n=new O,s=new O;for(const r of this.broken){const a=e[r],o=this.glass[r],l=Math.hypot(a.p1[0]-a.p0[0],a.p1[1]-a.p0[1]);t.setFromUnitVectors(new O(0,0,1),new O(a.n[0],0,a.n[1]));const c=Math.min(a.y,Bi().at(a.p0[0],a.p0[1]),Bi().at(a.p1[0],a.p1[1])),h=a.y+na-c;s.set((a.p0[0]+a.p1[0])/2+a.n[0]*.04,c+h/2,(a.p0[1]+a.p1[1])/2+a.n[1]*.04),o.mesh.setMatrixAt(o.slot,this.m.compose(s,t,n.set(l,h,1))),o.mesh.instanceMatrix.needsUpdate=!0}this.broken.clear(),this.live.length=0,this.shards.count=0}update(e,t){for(const r of this.cells)r.mesh.visible=Math.hypot(r.x-t.x,r.z-t.z)<700;if(!this.live.length&&!this.shards.count)return;const n=new Qt,s=new O;this.live=this.live.filter(r=>(r.age+=e)<io),this.live.forEach((r,a)=>{r.v.y-=9.81*e,r.p.addScaledVector(r.v,e);const o=this.floorAt(r.p);r.p.y<o&&(r.p.y=o,r.v.set(r.v.x*.4,0,r.v.z*.4),r.spin.multiplyScalar(.2)),r.rot.x+=r.spin.x*e,r.rot.y+=r.spin.y*e,r.rot.z+=r.spin.z*e;const l=Math.min(1,(io-r.age)/(io/3));this.shards.setMatrixAt(a,this.m.compose(r.p,n.setFromEuler(r.rot),s.setScalar(r.size*l)))}),this.shards.count=this.live.length,this.shards.instanceMatrix.needsUpdate=!0}floorAt(e){let t=-1e9;for(const n of this.broken){const s=this.page.fronts[n];Math.abs(s.p0[0]-e.x)<30&&Math.abs(s.p0[1]-e.z)<30&&(t=Math.max(t,s.y+.05))}return t}}const Ks=12,ia={WALL:0,GLAZING:1,PIER:2},Ol={HEADER:9};function Cv(i,e,t,n){const s=[];for(let r=0;r+1<i.length;r++)s.push([]);if(!t)return s;for(const r of t.walls){let a=-1,o=.3,l=0,c=0;for(let _=0;_+1<i.length;_++){let[v,E]=i[_],[M,R]=i[_+1];const P=Math.hypot(M-v,R-E);if(P<.05)continue;e>0&&([v,M]=[M,v],[E,R]=[R,E]);const w=(M-v)/P,b=(R-E)/P,U=(F,I)=>Math.abs(-(F-v)*b+(I-E)*w),N=(F,I)=>(F-v)*w+(I-E)*b,L=Math.max(U(r.x0,r.z0),U(r.x1,r.z1)),k=N(r.x0,r.z0),z=N(r.x1,r.z1);L<o&&Math.min(k,z)>-.3&&Math.max(k,z)<P+.3&&(o=L,a=_,l=k,c=z)}if(a<0)continue;const h=c>=l?1:-1,u=n[r.kind]??"",f=(_,v)=>{const E=l+h*_,M=l+h*v;return[Math.min(E,M),Math.max(E,M)]},[d,g]=r.door>=0?f(r.d0,r.d1):[0,0],[m,x]=r.l1>r.l0?f(r.l0,r.l1):[0,0],[p,y]=r.door2>=0?f(r.e0,r.e1):[0,0];s[a].push({u0:Math.min(l,c),u1:Math.max(l,c),r0:l,r1:c,wall:r,d0:d,d1:g,door:r.door>=0?r.doorWhat:0,e0:p,e1:y,door2:r.door2>=0?r.door2What:0,l0:m,l1:x,bay:u==="glazing"?ia.GLAZING:u==="pier"||u==="column"||u==="lintel"?ia.PIER:ia.WALL,dress:r.role===1?Ol.HEADER:t.arche+1})}for(const r of s)r.sort((a,o)=>a.u0-o.u0);return s}function Lv(i){const[e,t]=i.door2?[i.e0,i.e1]:[i.l0,i.l1],n=Math.abs(i.r1-i.r0),s=i.dress===Ol.HEADER;return[i.r0,i.r1,s?n/Math.max(1,Math.round(n/3)):i.wall.bay,s?0:i.wall.pier,i.d0,i.d1,i.door+8*i.door2,i.wall.every,e,t,i.bay,i.dress]}const Pv=7.6,Dv=(i,e,t)=>i<=1&&e&&t>=4.4;function Iv(i,e,t,n){const s=[];if(e=Math.max(e,.3),n=Math.max(n,1),t>.01){const r=n*e+t,a=Math.max(1,Math.floor((i-t)/r+.5));for(let o=0;o<a;o++){const l=o*r+t+n*e*.5;s.push({a:o*r,b:o*r+t,pier:!0,k:o*n,lot:l});for(let c=0;c<n;c++)s.push({a:o*r+t+c*e,b:o*r+t+(c+1)*e,pier:!1,k:o*n+c,lot:l})}s.push({a:a*r,b:i,pier:!0,k:a*n,lot:(a-1)*r+t+n*e*.5})}else{const r=Math.max(1,Math.floor(i/e+.5)),a=Math.max(1,Math.floor(Pv/e+.5));for(let o=0;o<r;o++){const l=Math.floor(o/a);s.push({a:o*e,b:o===r-1?i:(o+1)*e,pier:!1,k:o,lot:.5*(l*a*e+Math.min((l+1)*a*e,i))})}}return s}function Fv(i,e,t,n,s){return s?[{a:0,b:i,pier:!1,k:0,lot:i/2}]:Iv(i,e,t,n)}function Uv(i){const e=.04*i,t=.27*i;return{b0:e,b1:t,b2:i-t,b3:i-e,deep:Math.min(.6,.2*i)}}const Nv=(i,e)=>i%2===0&&e>=2.2,ul={VICTORIAN:0,STUCCO:1,MASONRY:2,OFFICE:3,GLASS:4,PRECAST:5,SHED:6},zv=[{x:67,z:-136,high:260,shape:"pyramid",style:ul.PRECAST,color:14472904},{x:-28,z:212,high:237,style:ul.OFFICE,color:5980216}];class Ov{cells=new Map;size=40;constructor(e){for(const t of e.roads){if(t.b)continue;const n=/^(primary|secondary|tertiary|trunk)$/.test(t.c)?1:/^(residential|unclassified|living_street|pedestrian)$/.test(t.c)?2:t.c==="service"?3:0;if(n)for(let s=0;s+1<t.p.length;s++){const[r,a]=t.p[s],[o,l]=t.p[s+1],c={ax:r,az:a,bx:o,bz:l,reach:t.w/2+(t.s??0),kind:n},h=Math.floor(Math.min(r,o)/this.size),u=Math.floor(Math.max(r,o)/this.size),f=Math.floor(Math.min(a,l)/this.size),d=Math.floor(Math.max(a,l)/this.size);for(let g=h;g<=u;g++)for(let m=f;m<=d;m++){const x=`${g}_${m}`;let p=this.cells.get(x);p||(p=[],this.cells.set(x,p)),p.push(c)}}}}facing(e,t,n,s){let r=0,a=1/0;const o=Math.floor(e/this.size),l=Math.floor(t/this.size);for(let c=o-1;c<=o+1;c++)for(let h=l-1;h<=l+1;h++)for(const u of this.cells.get(`${c}_${h}`)??[]){const f=u.bx-u.ax,d=u.bz-u.az,g=f*f+d*d,m=g>0?Math.max(0,Math.min(1,((e-u.ax)*f+(t-u.az)*d)/g)):0,x=u.ax+f*m-e,p=u.az+d*m-t,y=Math.hypot(x,p);if(y>u.reach+7||x*n+p*s<y*.6)continue;const _=y+(u.kind===3?12:0);_<a&&(a=_,r=u.kind)}return r}}function kv(i,e,t){const n=[];let s=!1,r=!1;for(let a=0;a+1<e.length;a++){const[o,l]=e[a],[c,h]=e[a+1],u=Math.hypot(c-o,h-l);if(u<2.2){n.push(0);continue}const f=(h-l)/u*t,d=-(c-o)/u*t,g=i.facing((o+c)/2,(l+h)/2,f,d);n.push(g),g===1?s=!0:g===2&&(r=!0)}return{faces:n,commercial:s,residential:r}}function Bv(i,e,t,n,s,r,a){const o=ul,l=kt(i*3+1),c=zv.find(u=>Math.hypot(u.x-e,u.z-t)<30&&Math.abs(u.high-n)<12);let h;return c?.style!=null?h=c.style:n>=45?h=l<.36?o.GLASS:l<.62?o.OFFICE:l<.88||n>110?o.PRECAST:o.MASONRY:n>=20?h=r||s>700?l<.48?o.MASONRY:l<.74?o.OFFICE:l<.88?o.PRECAST:o.STUCCO:l<.55?o.STUCCO:l<.8?o.MASONRY:o.PRECAST:s>1400&&n<11?h=o.SHED:r&&!a?h=l<.5?o.MASONRY:l<.82?o.STUCCO:o.VICTORIAN:s<=460?h=l<.55?o.VICTORIAN:l<.92?o.STUCCO:o.MASONRY:h=l<.62?o.STUCCO:l<.9?o.MASONRY:o.VICTORIAN,{style:h,mark:c}}function Ef(i,e,t,n){if(!n.length)return[[0,i,e,t]];const s=new Set([0,i]);for(const o of n)s.add(Math.max(0,Math.min(i,o.u0))),s.add(Math.max(0,Math.min(i,o.u1)));const r=[...s].sort((o,l)=>o-l),a=[];for(let o=0;o+1<r.length;o++){const l=r[o],c=r[o+1],h=(l+c)/2;if(c-l<.02)continue;let u=e;for(const d of n)h>d.u0&&h<d.u1&&(u=Math.max(u,d.y));if(t-u<.08)continue;const f=a[a.length-1];f&&Math.abs(f[1]-l)<1e-6&&Math.abs(f[2]-u)<1e-6?f[1]=c:a.push([l,c,u,t])}return a}function Af(i,e,t,n,s){const r=Math.hypot(t-i,n-e),a=[];if(r<.05)return a;const o=(t-i)/r,l=(n-e)/r;for(const c of s){const h=(c.x0+c.x1)/2-i,u=(c.z0+c.z1)/2-e,f=h*o+u*l;if(Math.abs(-h*l+u*o)>.25||f<-.1||f>r+.1)continue;const d=(c.x0-i)*o+(c.z0-e)*l,g=(c.x1-i)*o+(c.z1-e)*l;a.push({u0:Math.min(d,g),u1:Math.max(d,g),y:c.y})}return a}function ch(i,e,t){const n=i.geometry.getAttribute("position"),s=n.array,r=s.slice(e*3,t*3);for(let a=e;a<t;a++)s[a*3]=s[e*3],s[a*3+1]=s[e*3+1],s[a*3+2]=s[e*3+2];return n.addUpdateRange(e*3,(t-e)*3),n.needsUpdate=!0,r}function hh(i,e,t){const n=i.geometry.getAttribute("position");n.array.set(t,e*3),n.addUpdateRange(e*3,t.length),n.needsUpdate=!0}const nr=512,Hv=`
  attribute vec4 aux; attribute vec4 ext;
  varying vec4 vAux; flat varying vec4 vExt; varying vec3 vWallN;
  #ifdef P2P_BORN
    varying vec3 vBorn; varying vec3 vEyeBorn; flat varying mat3 vTurn;
  #endif`,Gv=`
  vAux = aux; vExt = ext; vWallN = normal;
  #ifdef P2P_BORN
    // where this was built (its mesh is in the building's own place; the model matrix is where it has fallen to)
    vBorn = position;
    vTurn = mat3( modelMatrix );
    vEyeBorn = transpose( vTurn ) * ( cameraPosition - modelMatrix[ 3 ].xyz );
  #endif`,Vv=`
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
  }`,fh=`
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
  }`,Wv=`
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
          ${fh}
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
            ${fh}
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
  #endif`,qv="normal = normalize( mat3( viewMatrix ) * P2P_TURN( p2pN ) );",Xv=`
  {
    vec2 sh = p2pShade(vWorld.xz + normalize(P2P_TURN(vWallN).xz + vec2(1e-5)) * 3.2);
    float inShade = smoothstep(-2.0, 2.0, sh.x - p2pUp) * smoothstep(0.2, 1.2, sh.x);
    reflectedLight.directDiffuse *= mix(1.0 - inShade, 1.0, p2pNear);
    reflectedLight.indirectDiffuse *= mix(0.78, 1.0, smoothstep(0.0, 22.0, p2pUp));
  }`,$v=`
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
  if (p2pMark > 0.5) outgoingLight = vec3(1.0, 0.0, 1.0);`,Xt={ROOF:-1,VICTORIAN:0,STUCCO:1,MASONRY:2,OFFICE:3,GLASS:4,PRECAST:5,SHED:6,AWNING:8,CORNICE:9,ROOFBOX:10,SIGN:11,CUT:12},js={PLAIN:0,SHOP:1},Yv=[15855074,15525590,15260864,15986662,14867920,14672863,15327951,14277846,15788244,15130834,13226944,12570072,14929860,15392686,13620940,14207412,12175055,15322032,13352914,12900556,9084853,11122586,12153690,7314583,5662074,8093554,13607834,14267482],Kv=[15722972,15327696,15920868,14998731,14602938,15131610,14277074,15787730,15061944,14080731,15260102,13617597,14730414,13226692,14469542],jv=[9194042,10115652,8011826,12887420,12162923,14273972,13616558,10263188,11578272,11037007,14075554],Zv=[12433581,11117980,13223096,9407106,5920338,11906460],Jv=[5595242,3752522,7109766,9085098,2896440,5200984],Qv=[14209732,13617336,14867920,12564648,14076856],e1=[11577496,10133664,12760476,9277324,10720387],uh=[8003356,2051386,1914199,2829102,13214247,9059090,4861022,14275264,1006691],so=(i,e)=>i[Math.min(i.length-1,Math.floor(e*i.length))],t1=170,n1=200;function Kt(i,e,t,n,s,r,a){const o=i.pos.length/3;for(let y=0;y<4;y++)tr(i,t[y][0],t[y][1],t[y][2],n[0],n[1],n[2],s.r,s.g,s.b),i.aux.push(...r[y]),i.ext.push(...a);const[l,c,h]=[t[0],t[1],t[2]],u=c[0]-l[0],f=c[1]-l[1],d=c[2]-l[2],g=h[0]-l[0],m=h[1]-l[1],x=h[2]-l[2];(f*x-d*m)*n[0]+(d*g-u*x)*n[1]+(u*m-f*g)*n[2]>=0?e.push(o,o+1,o+2,o,o+2,o+3):e.push(o,o+2,o+1,o,o+3,o+2)}function dh(i,e,t){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const[a,o]=i[s],[l,c]=i[r];o>t!=c>t&&e<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n}function i1(i,e,t){const n=Bi(),s=new Ov(i),r=Tv(i);let a=new Float32Array(Ks*4096),o=1;const l=new Array(i.buildings.length).fill(null),c={value:null},h={value:0},u=($,A,ce)=>{let J=l[$];return J||(J=Cv(A,ce,e($),t).map(re=>re.map(he=>{if(c.value)return{u0:he.u0,u1:he.u1,idx:0};if((o+1)*Ks>a.length){const be=new Float32Array(a.length*2);be.set(a),a=be}return a.set(Lv(he),o*Ks),{u0:he.u0,u1:he.u1,idx:o++}})),l[$]=J,J)},f=new ai(400,4,4),d=new ai(400,4,4),g={walls:0,roofs:0,cornices:0,bays:0,awnings:0,signs:0,boxes:0},m=new Qe,x=new Qe,p=new Qe,y=new Qe,_={},v=i.buildings.length,E=new Array(v).fill(null),M=new Array(v).fill(null),R=new Int32Array(v*4),P=new Float32Array(v*6),w=($,A,ce)=>{const J=$.r;if(J.length<4)return null;let re=0,he=0,be=0,me=1/0,Fe=0;const st=[];for(let G=0;G+1<J.length;G++){const[le,fe]=J[G],[de,oe]=J[G+1];re+=le,he+=fe,be+=le*oe-de*fe;const Q=n.at(le,fe);st.push(Q),me=Math.min(me,Q),Fe+=Q}st.push(st[0]);const at=J.length-1;re/=at,he/=at;const C=Math.abs(be)/2,S=$.y1,W=S-$.y0,se=Fe/at,ue=be>0?1:-1,ae=u(A,J,ue),{faces:Ge,commercial:Me,residential:ze}=kv(s,J,ue),{style:Ce,mark:ge}=Bv(A,re,he,W,C,Me,ze);ce&&(_[Ce]=(_[Ce]??0)+1);const Ee=Ce===Xt.OFFICE||Ce===Xt.GLASS||Ce===Xt.PRECAST,je=kt(A*3+2),Ie=kt(A*3+3);m.setHex(ge?.color??so(Ce===Xt.VICTORIAN?Yv:Ce===Xt.STUCCO?Kv:Ce===Xt.MASONRY?jv:Ce===Xt.OFFICE?Zv:Ce===Xt.GLASS?Jv:Ce===Xt.PRECAST?Qv:e1,je)),m.offsetHSL((kt(A+5003)-.5)*.02,0,(kt(A+7919)-.5)*.07),Ce===Xt.VICTORIAN?x.setHex(15328988):x.copy(m).lerp(y.setHex(14209215),.45);const pe=Ce+Ie*.98,et=$.m?$.y0+$.m:me-1.5;return{ring:J,corners:at,cx:re,cz:he,size:C,top:S,high:W,datum:se,g:st,out:ue,core:ae,faces:Ge,style:Ce,tower:Ee,seed:Ie,code:pe,foot:et,mark:ge}},b=($,A,ce,J,re)=>{const he=w($,A,!J);if(!he)return;const{ring:be,corners:me,cx:Fe,cz:st,size:at,top:C,high:S,datum:W,g:se,out:ue,core:ae,faces:Ge,style:Me,tower:ze,seed:Ce,code:ge,foot:Ee,mark:je}=he,[Ie,pe]=ce(Fe,st),et=S>=15||at>=700||!!J,G=et?Ie.idx:Ie.late;if(je?.shape==="pyramid")s1(Ie,Ie.idx,be,ue,Fe,st,Ee,C,W,m,ge,se,le=>ae[le]?.[0]?.idx??0);else for(let le=0;le+1<be.length;le++){let[fe,de]=be[le],[oe,Q]=be[le+1],Le=se[le],Ne=se[le+1];const ke=Math.hypot(oe-fe,Q-de);if(ke<.05)continue;const Ye=(Q-de)/ke*ue,H=-(oe-fe)/ke*ue;ue>0&&([fe,oe]=[oe,fe],[de,Q]=[Q,de],[Le,Ne]=[Ne,Le]);const ye=Ge[le],We=ye===1||ye===2,Ke=r(A,le),nt=Ke?js.SHOP:js.PLAIN,wt=(Ne-Le)/ke,lt=(We?1:0)+2*nt,De=ae[le]??[],Ae=J?Af(fe,de,oe,Q,J):[];if(Ke){const Ze=Math.hypot(Ke.p0[0]-fe,Ke.p0[1]-de),ct=Math.hypot(Ke.p1[0]-fe,Ke.p1[1]-de);Ae.push({u0:Math.min(Ze,ct),u1:Math.max(Ze,ct),y:Ke.y+na})}const Pe=Ef(ke,Ee,C,Ae),Xe=(oe-fe)/ke,ft=(Q-de)/ke;re&&re.push(oe,Ee,Q,fe,Ee,de,fe,C,de,oe,Ee,Q,fe,C,de,oe,C,Q);for(const[Ze,ct,pt,Lt]of Pe)if(!(ct-Ze<.02||Lt-pt<.02))for(let yt=0;yt<Math.max(1,De.length);yt++){const ht=yt===0?Ze:Math.max(Ze,(De[yt-1].u1+De[yt].u0)/2),Be=yt+1>=De.length?ct:Math.min(ct,(De[yt].u1+De[yt+1].u0)/2);if(Be-ht<.02)continue;const it=Le+wt*ht,mt=Le+wt*Be;Kt(Ie,G,[[fe+Xe*ht,pt,de+ft*ht],[fe+Xe*Be,pt,de+ft*Be],[fe+Xe*Be,Lt,de+ft*Be],[fe+Xe*ht,Lt,de+ft*ht]],[Ye,0,H],m,[[ht,it,ke,C],[Be,mt,ke,C],[Be,mt,ke,C],[ht,it,ke,C]],[ge,lt+32*(De[yt]?.idx??0),wt,W]),J||(g.walls+=2)}if(!We||ke<4||S>40||ze||Me===Xt.SHED)continue;const _t=Me===Xt.VICTORIAN?.42:.3,Mt=Me===Xt.MASONRY?.7:.5,Ft=C-Mt+.12,Wt=C+.12,Ht=Ye*_t,tn=H*_t,T=(oe-fe)/ke,q=(Q-de)/ke,j=[Xt.CORNICE+Ce*.98,0,0,W],Z=[fe,Ft,de],X=[oe,Ft,Q],Re=[fe+Ht,Ft,de+tn],Ue=[oe+Ht,Ft,Q+tn],Ve=[fe+Ht,Wt,de+tn],He=[oe+Ht,Wt,Q+tn],Je=[fe,Wt,de],ot=[oe,Wt,Q],qe=Ze=>[[0,Ze,ke,C],[ke,Ze,ke,C],[ke,Ze+1,ke,C],[0,Ze+1,ke,C]];if(Kt(pe,pe.idx,[Re,Ue,He,Ve],[Ye,0,H],x,qe(0),j),Kt(pe,pe.idx,[Z,X,Ue,Re],[0,-1,0],x,qe(2),j),Kt(pe,pe.idx,[Ve,He,ot,Je],[0,1,0],x,qe(4),j),g.cornices+=6,Ge[(le+(ue>0?1:me-1))%me]===1||Ge[(le+(ue>0?1:me-1))%me]===2||(Kt(pe,pe.idx,[Z,Re,Ve,Je],[-T,0,-q],x,qe(0),j),g.cornices+=2),Ge[(le+(ue>0?me-1:1))%me]===1||Ge[(le+(ue>0?me-1:1))%me]===2||(Kt(pe,pe.idx,[X,Ue,He,ot],[T,0,q],x,qe(0),j),g.cornices+=2),Dv(Me,!0,ke)){const Ze=Me===Xt.VICTORIAN?1.05:.75,ct=nt===js.SHOP?4.15:2.75,pt=(ht,Be,it)=>[fe+T*ht+Ye*Be,it,de+q*ht+H*Be],Lt=[],yt=c.value?.image.data??a;for(const ht of De){if(!ht.idx)continue;const Be=ht.idx*Ks,it=yt[Be],mt=yt[Be+1],gt=Math.abs(mt-it),Gt=mt>=it?1:-1,Mn=yt[Be+11]===Ol.HEADER;for(const qt of Fv(gt,yt[Be+2],Mn?0:yt[Be+3],yt[Be+7],!Mn&&yt[Be+10]===ia.PIER)){const cn=qt.b-qt.a;if(qt.pier||!Nv(qt.k,cn))continue;const an=Math.min(it+Gt*qt.a,it+Gt*qt.b),vn=Uv(cn);Lt.push({b0:an+vn.b0,b1:an+vn.b1,b2:an+vn.b2,b3:an+vn.b3,deep:vn.deep,gl:Le+wt*(it+Gt*qt.lot),idx:ht.idx})}}if(!De.some(ht=>ht.idx)){const ht=Math.max(1,Math.floor(ke/7.6+.5)),Be=ke/ht,it=Be/7.6;for(let mt=0;mt<ht;mt++)Lt.push({b0:mt*Be+.7*it,b1:mt*Be+1.45*it,b2:mt*Be+3.55*it,b3:mt*Be+4.3*it,deep:Math.min(.7,.6*it),gl:Le+wt*(mt+.5)*Be,idx:0})}for(const{b0:ht,b1:Be,b2:it,b3:mt,deep:gt,gl:Gt,idx:Mn}of Lt){const qt=[ge,1+2*nt+16+32*Mn,wt,W],cn=Gt+ct,an=C-Ze;if(an-cn<2.2)continue;const vn=(Jn,ua,Ti,da)=>{const pa=Ti-Jn,ma=da-ua,kl=Math.hypot(pa,ma),Cf=(Ye*pa-T*ma)/kl,Lf=(H*pa-q*ma)/kl;Kt(pe,pe.idx,[pt(Jn,ua,cn),pt(Ti,da,cn),pt(Ti,da,an),pt(Jn,ua,an)],[Cf,0,Lf],m,[[Jn,Le+wt*Jn,ke,C],[Ti,Le+wt*Ti,ke,C],[Ti,Le+wt*Ti,ke,C],[Jn,Le+wt*Jn,ke,C]],qt)};vn(ht,0,Be,gt),vn(Be,gt,it,gt),vn(it,gt,mt,0),Kt(pe,pe.idx,[pt(ht,0,an+.25),pt(Be,gt,an),pt(it,gt,an),pt(mt,0,an+.25)],[Ye*.38,.92,H*.38],x,qe(4),j),Kt(pe,pe.idx,[pt(ht,0,cn),pt(Be,gt,cn),pt(it,gt,cn),pt(mt,0,cn)],[0,-1,0],x,qe(2),j),g.bays+=10}}if(!Ke||ke<4)continue;const ut=Math.hypot(Ke.p0[0]-fe,Ke.p0[1]-de),At=Math.hypot(Ke.p1[0]-fe,Ke.p1[1]-de),Ut=Math.min(ut,At),zt=Math.abs(At-ut),Tt=Math.max(1,Math.floor(zt/5.5+.5)),$e=zt/Tt;for(let Ze=0;Ze<Tt;Ze++){if(kt(A*131+le*17+Ze)>.5)continue;y.setHex(so(uh,kt(A*57+le*5+Ze+9)));const pt=Ut+Ze*$e+.3,Lt=Ut+(Ze+1)*$e-.3,yt=Le+wt*(Ut+(Ze+.5)*$e),ht=1+.5*kt(A+Ze*7+13),Be=yt+3.05,it=yt+2.5,mt=it-.24,gt=(an,vn,Jn)=>[fe+T*an+Ye*vn,Jn,de+q*an+H*vn],Gt=[Xt.AWNING+kt(A+Ze*3+1)*.98,0,0,W],Mn=ht/Math.hypot(ht,Be-it),qt=(Be-it)/Math.hypot(ht,Be-it),cn=(an,vn)=>[[pt,an,ke,C],[Lt,an,ke,C],[Lt,vn,ke,C],[pt,vn,ke,C]];Kt(pe,pe.idx,[gt(pt,ht,it),gt(Lt,ht,it),gt(Lt,.02,Be),gt(pt,.02,Be)],[Ye*qt,Mn,H*qt],y,cn(0,1),Gt),Kt(pe,pe.idx,[gt(pt,ht,mt),gt(Lt,ht,mt),gt(Lt,ht,it),gt(pt,ht,it)],[Ye,0,H],y,cn(2,3),Gt),Kt(pe,pe.idx,[gt(pt,ht,it-.02),gt(Lt,ht,it-.02),gt(Lt,.02,Be-.02),gt(pt,.02,Be-.02)],[-Ye*qt,-Mn,-H*qt],y,cn(4,5),Gt),g.awnings+=6}for(let Ze=0;Ze<Tt;Ze++){if(kt(A*173+le*29+Ze+5)>.42||S<6.5)continue;y.setHex(so(uh,kt(A*61+le*3+Ze+2)));const ct=Le+wt*(Ut+(Ze+.5)*$e),pt=Ut+Ze*$e+.16,Lt=Math.min(C-ct-4.2,1.4+1.5*kt(A+Ze*11+3));if(Lt<1)continue;const yt=ct+3.5,ht=yt+Lt,Be=.18,it=.18+.62+.25*kt(A+Ze*5),mt=(Mn,qt,cn)=>[fe+T*(pt+cn)+Ye*Mn,qt,de+q*(pt+cn)+H*Mn],gt=[Xt.SIGN+kt(A+Ze*13+7)*.98,0,0,W],Gt=[[0,0,it-Be,Lt],[it-Be,0,it-Be,Lt],[it-Be,Lt,it-Be,Lt],[0,Lt,it-Be,Lt]];Kt(pe,pe.idx,[mt(Be,yt,.03),mt(it,yt,.03),mt(it,ht,.03),mt(Be,ht,.03)],[T,0,q],y,Gt,gt),Kt(pe,pe.idx,[mt(Be,yt,-.03),mt(it,yt,-.03),mt(it,ht,-.03),mt(Be,ht,-.03)],[-T,0,-q],y,Gt,gt),g.signs+=4}}if($.col!=null?p.setHex($.col,fn):p.copy(m).multiplyScalar(.62),J||P.set([m.r,m.g,m.b,p.r,p.g,p.b],A*6),!et&&!J){let le=1,fe=0,de=0;for(let De=0;De+1<be.length;De++){const Ae=be[De+1][0]-be[De][0],Pe=be[De+1][1]-be[De][1],Xe=Math.hypot(Ae,Pe);Xe>de&&(de=Xe,le=Ae/Xe,fe=Pe/Xe)}let oe=1/0,Q=-1/0,Le=1/0,Ne=-1/0;for(const[De,Ae]of be){const Pe=De*le+Ae*fe,Xe=-De*fe+Ae*le;oe=Math.min(oe,Pe),Q=Math.max(Q,Pe),Le=Math.min(Le,Xe),Ne=Math.max(Ne,Xe)}const ke=Math.sqrt(Math.min(1,at/Math.max(1,(Q-oe)*(Ne-Le)))),Ye=(oe+Q)/2,H=(Le+Ne)/2,ye=(Q-oe)/2*ke,We=(Ne-Le)/2*ke,Ke=(De,Ae)=>{const Pe=Ye+De*ye,Xe=H+Ae*We;return[Pe*le-Xe*fe,Pe*fe+Xe*le]},nt=[Ke(-1,-1),Ke(1,-1),Ke(1,1),Ke(-1,1)],wt=(nt[0][0]+nt[2][0])/2,lt=(nt[0][1]+nt[2][1])/2;for(let De=0;De<4;De++){const[Ae,Pe]=nt[De],[Xe,ft]=nt[(De+1)%4],_t=Math.hypot(Xe-Ae,ft-Pe);if(_t<.05)continue;let Mt=(ft-Pe)/_t,Ft=-(Xe-Ae)/_t;Mt*((Ae+Xe)/2-wt)+Ft*((Pe+ft)/2-lt)<0&&(Mt=-Mt,Ft=-Ft);const Wt=(Xe-Ae)*Ft-(ft-Pe)*Mt<0,[Ht,tn,T,q]=Wt?[Xe,ft,Ae,Pe]:[Ae,Pe,Xe,ft];Kt(Ie,Ie.box,[[Ht,Ee,tn],[T,Ee,q],[T,C,q],[Ht,C,tn]],[Mt,0,Ft],m,[[0,W,_t,C],[_t,W,_t,C],[_t,W,_t,C],[0,W,_t,C]],[ge,1,0,W])}Kt(Ie,Ie.box,[[nt[0][0],C,nt[0][1]],[nt[1][0],C,nt[1][1]],[nt[2][0],C,nt[2][1]],[nt[3][0],C,nt[3][1]]],[0,1,0],p,[[0,0,0,C],[0,0,0,C],[0,0,0,C],[0,0,0,C]],[Xt.ROOF+Ce*.98,0,0,W])}if(je?.shape!=="pyramid"){const le=be.slice(0,-1).map(([de,oe])=>new rt(de,oe)),fe=Ie.pos.length/3;for(const de of le)tr(Ie,de.x,C,de.y,0,1,0,p.r,p.g,p.b),Ie.aux.push(0,0,0,C),Ie.ext.push(Xt.ROOF+Ce*.98,0,0,W);for(const de of Ls.triangulateShape(le,[])){const oe=le[de[0]],Q=le[de[1]],Le=le[de[2]],Ne=(Q.y-oe.y)*(Le.x-oe.x)-(Q.x-oe.x)*(Le.y-oe.y);if(Ne>=0?G.push(fe+de[0],fe+de[1],fe+de[2]):G.push(fe+de[0],fe+de[2],fe+de[1]),J||g.roofs++,re)for(const ke of Ne>=0?[de[0],de[2],de[1]]:[de[0],de[1],de[2]])re.push(le[ke].x,C-.06,le[ke].y)}if(S>=11&&at>=220){const de=S>=45?2:1;for(let oe=0;oe<de;oe++){const Q=Math.sqrt(at),Le=Math.min(Q*.42,3+Q*.22*(.5+kt(A*7+oe))),Ne=Math.min(Q*.42,3+Q*.18*(.5+kt(A*11+oe))),ke=Fe+(kt(A*13+oe)-.5)*Q*.35,Ye=st+(kt(A*17+oe)-.5)*Q*.35,H=S>=45?4+5*kt(A*19+oe):2.2+1.6*kt(A*19+oe);let ye=1,We=0,Ke=0;for(let Pe=0;Pe+1<be.length;Pe++){const Xe=be[Pe+1][0]-be[Pe][0],ft=be[Pe+1][1]-be[Pe][1],_t=Math.hypot(Xe,ft);_t>Ke&&(Ke=_t,ye=Xe/_t,We=ft/_t)}const nt=(Pe,Xe)=>[ke+ye*Le/2*Pe-We*Ne/2*Xe,Ye+We*Le/2*Pe+ye*Ne/2*Xe],wt=[nt(-1,-1),nt(1,-1),nt(1,1),nt(-1,1)];if(!wt.every(([Pe,Xe])=>dh(be,Pe,Xe)))continue;y.copy(p).lerp(x.clone().multiplyScalar(.8),.5);const lt=[Xt.ROOFBOX+kt(A+oe)*.98,0,0,W],De=S>=45?Ie:pe,Ae=De.idx;J||(g.boxes+=10);for(let Pe=0;Pe<4;Pe++){const[Xe,ft]=wt[Pe],[_t,Mt]=wt[(Pe+1)%4],Ft=Math.hypot(_t-Xe,Mt-ft);let Wt=(Mt-ft)/Ft,Ht=-(_t-Xe)/Ft;Wt*((Xe+_t)/2-ke)+Ht*((ft+Mt)/2-Ye)<0&&(Wt=-Wt,Ht=-Ht),Kt(De,Ae,[[Xe,C,ft],[_t,C,Mt],[_t,C+H,Mt],[Xe,C+H,ft]],[Wt,0,Ht],y,[[0,0,Ft,C],[Ft,0,Ft,C],[Ft,H,Ft,C],[0,H,Ft,C]],lt)}Kt(De,Ae,[[wt[0][0],C+H,wt[0][1]],[wt[1][0],C+H,wt[1][1]],[wt[2][0],C+H,wt[2][1]],[wt[3][0],C+H,wt[3][1]]],[0,1,0],p,[[0,0,0,C],[0,0,0,C],[0,0,0,C],[0,0,0,C]],[Xt.ROOF+Ce*.98,0,0,W])}}}};i.buildings.forEach(($,A)=>{b($,A,(ce,J)=>{const re=f.bin(ce,J),he=d.bin(ce,J);return E[A]=re,M[A]=he,R[A*4]=re.pos.length/3,R[A*4+2]=he.pos.length/3,[re,he]},null,null),E[A]&&(R[A*4+1]=E[A].pos.length/3,R[A*4+3]=M[A].pos.length/3)});{const $=Math.max(1,Math.ceil(o/nr)),A=new Float32Array(nr*3*4*$);A.set(a.subarray(0,o*Ks));const ce=new Wi(A,nr*3,$,yn,Nn);ce.minFilter=ce.magFilter=un,ce.generateMipmaps=!1,ce.needsUpdate=!0,c.value=ce,a=new Float32Array(0)}const U=($,A)=>{const ce=new zn({vertexColors:!0});return ce.name=A?"fallen walls":"walls",A&&(ce.defines={P2P_BORN:""}),ci(ce,i,{key:$,uniforms:{uFace:c,uMark:h},vertexPars:Hv,vertex:Gv,fragmentPars:Vv,color:Wv,normal:qv,light:Xv,final:$v})},N=U("p2p-city-walls",!1),L=U("p2p-city-born",!0),k=new en;{const $=new ai(1e9,4,4),A=$.bin(0,0);Kt(A,A.idx,[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],[0,1,0],m,[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],[Xt.ROOF,0,0,0]);const ce=$.build(L,{cast:!0,receive:!0});for(const J of ce.children)J.frustumCulled=!1;ce.name="the fallen façade, warm",k.add(ce)}const z=f.build(N,{cast:!0,receive:!0}),F=d.build(N,{cast:Ul()==="high",receive:!0});k.add(z,F),k.userData.styles=_,k.userData.triangles=g;const I=z.children.map($=>{const A=$.geometry,ce=A.index.array,J=([be,me])=>{const Fe=new Nt;for(const st of Object.keys(A.attributes))Fe.setAttribute(st,A.getAttribute(st));return Fe.setIndex(new dt(ce.subarray(be,be+me),1)),Fe.boundingSphere=A.boundingSphere,Fe.boundingBox=A.boundingBox,Fe},re=$.userData.near?J($.userData.near):A,he=$.userData.far?J($.userData.far):A;return $.geometry=re,{m:$,near:re,far:he}}),D=F.children,V=($,A)=>{const ce=$.geometry.boundingSphere;return Math.hypot(ce.center.x-A.x,ce.center.z-A.z)-ce.radius};k.userData.tend=$=>{for(const A of I)A.m.geometry=V(A.m,$)>n1?A.far:A.near;for(const A of D)A.visible=V(A,$)<t1};const B=new en;B.name="broken buildings",k.add(B);const ee=new Us({color:1052430});ee.name="the dark behind a hole";{const $=new Nt;$.setAttribute("position",new dt(new Float32Array(9),3));const A=new Ct($,ee);A.frustumCulled=!1,A.matrixAutoUpdate=!1,B.add(A)}const ne=new Map,we=new Map,_e=new Set,Te=$=>{if(ne.has($)||!E[$])return;const[A,ce,J,re]=[R[$*4],R[$*4+1],R[$*4+2],R[$*4+3]],he=E[$].mesh,be=M[$].mesh;ne.set($,{main:he&&ce>A?ch(he,A,ce):null,fine:be&&re>J?ch(be,J,re):null})},Y=$=>{const A=we.get($);A&&(B.remove(A),A.traverse(ce=>{const J=ce;J.isMesh&&J.geometry.dispose()}),we.delete($))};return{group:k,breach:($,A)=>{const ce=i.buildings[$];if(!ce||_e.has($)||!E[$])return;Te($),Y($);const J=new ai(1e9,4,4),re=new ai(1e9,4,4),he=[];b(ce,$,()=>[J.bin(0,0),re.bin(0,0)],A,he);const be=new en;be.add(J.build(N,{cast:!0,receive:!0}),re.build(N,{receive:!0}));const me=new Nt;me.setAttribute("position",new dt(new Float32Array(he),3));const Fe=new Ct(me,ee);Fe.matrixAutoUpdate=!1,be.add(Fe),B.add(be),we.set($,be)},raze:$=>{Te($),Y($),_e.add($)},reset:()=>{for(const[$,A]of ne)A.main&&hh(E[$].mesh,R[$*4],A.main),A.fine&&hh(M[$].mesh,R[$*4+2],A.fine);ne.clear(),_e.clear();for(const $ of[...we.keys()])Y($)},colors:$=>({wall:[P[$*6],P[$*6+1],P[$*6+2]],roof:[P[$*6+3],P[$*6+4],P[$*6+5]]}),broken:()=>({breached:we.size,razed:_e.size}),mark:$=>{h.value=$},part:($,A,ce)=>{const J=i.buildings[$],re=A.parts.find(Ae=>Ae.id===ce),he=J&&re?w(J,$,!1):null;if(!J||!re||!he)return null;const{ring:be,top:me,datum:Fe,g:st,out:at,core:C,faces:S,seed:W,code:se}=he,ue=m.clone(),ae=J.col!=null?new Qe().setHex(J.col,fn):m.clone().multiplyScalar(.62),Ge=new Qe(1,1,1),[Me,ze]=A.mid,[Ce,ge]=A.axis,Ee=Math.max(.2,A.shrink),je=(Ae,Pe)=>[(Ae-Me)*Ce+(Pe-ze)*ge,-(Ae-Me)*ge+(Pe-ze)*Ce],Ie=(Ae,Pe)=>[Me+Ee*(Ae*Ce-Pe*ge),ze+Ee*(Ae*ge+Pe*Ce)],pe=(Ae,Pe)=>[Me+Ae*Ce-Pe*ge,ze+Ae*ge+Pe*Ce],[et,G]=je(re.x,re.z),le=(re.hx+.08)/Ee+.03,fe=(re.hz+.08)/Ee+.03,de=et/Ee-le,oe=et/Ee+le,Q=G/Ee-fe,Le=G/Ee+fe;let Ne=[];for(let Ae=0;Ae+1<be.length;Ae++){const[Pe,Xe]=je(be[Ae][0],be[Ae][1]);Ne.push({a:Pe,b:Xe,e:Ae})}const ke=[Ae=>Ae.a-de,Ae=>oe-Ae.a,Ae=>Ae.b-Q,Ae=>Le-Ae.b];for(const Ae of ke){const Pe=[];for(let Xe=0;Xe<Ne.length;Xe++){const ft=Ne[Xe],_t=Ne[(Xe+1)%Ne.length],Mt=Ae(ft),Ft=Ae(_t),Wt=()=>{const Ht=Mt/(Mt-Ft);return{a:ft.a+(_t.a-ft.a)*Ht,b:ft.b+(_t.b-ft.b)*Ht}};Mt>=0&&Ft>=0?Pe.push(ft):Mt>=0?(Pe.push(ft),Pe.push({...Wt(),e:-1})):Ft>=0&&Pe.push({...Wt(),e:ft.e})}if(Ne=Pe,Ne.length<3)return null}const Ye=re.y-re.hy,H=re.y+re.hy,ye=new ai(1e9,4,4),We=ye.bin(0,0),Ke=[Xt.CUT+W*.98,0,0,Fe];for(let Ae=0;Ae<Ne.length;Ae++){const Pe=Ne[Ae],Xe=Ne[(Ae+1)%Ne.length],[ft,_t]=Ie(Pe.a,Pe.b),[Mt,Ft]=Ie(Xe.a,Xe.b),Wt=Math.hypot(Mt-ft,Ft-_t);if(!(Wt<.03))if(Pe.e>=0){let[Ht,tn]=be[Pe.e],[T,q]=be[Pe.e+1],j=st[Pe.e],Z=st[Pe.e+1];const X=Math.hypot(T-Ht,q-tn);if(X<.05)continue;const Re=(q-tn)/X*at,Ue=-(T-Ht)/X*at;at>0&&([Ht,T]=[T,Ht],[tn,q]=[q,tn],[j,Z]=[Z,j]);const Ve=(T-Ht)/X,He=(q-tn)/X,Je=(Z-j)/X,ot=($e,Ze)=>{const[ct,pt]=pe($e,Ze);return(ct-Ht)*Ve+(pt-tn)*He},qe=ot(Pe.a,Pe.b),ut=ot(Xe.a,Xe.b),At=(qe+ut)/2,Ut=S[Pe.e],zt=(Ut===1||Ut===2?1:0)+2*(r($,Pe.e)?js.SHOP:js.PLAIN),Tt=(C[Pe.e]??[]).find($e=>At>=$e.u0&&At<=$e.u1)?.idx??0;Kt(We,We.idx,[[ft,Ye,_t],[Mt,Ye,Ft],[Mt,H,Ft],[ft,H,_t]],[Re,0,Ue],ue,[[qe,j+Je*qe,X,me],[ut,j+Je*ut,X,me],[ut,j+Je*ut,X,me],[qe,j+Je*qe,X,me]],[se,zt+32*Tt,Je,Fe])}else{const Ht=Xe.a-Pe.a,tn=Xe.b-Pe.b,T=Math.hypot(Ht,tn),q=(Pe.a+Xe.a)/2,j=(Pe.b+Xe.b)/2;let Z=-tn/T,X=Ht/T;(et/Ee-q)*Z+(G/Ee-j)*X<0&&(Z=-Z,X=-X);const[Re,Ue]=pe(q+Z*.15,j+X*.15);if(!dh(be,Re,Ue))continue;const Ve=-(Z*Ce-X*ge),He=-(Z*ge+X*Ce);Kt(We,We.idx,[[ft,Ye,_t],[Mt,Ye,Ft],[Mt,H,Ft],[ft,H,_t]],[Ve,0,He],Ge,[[0,Ye,Wt,me],[Wt,Ye,Wt,me],[Wt,Ye,Wt,me],[0,Ye,Wt,me]],Ke)}}const nt=Ne.map(Ae=>{const[Pe,Xe]=Ie(Ae.a,Ae.b);return new rt(Pe,Xe)}),wt=We.pos.length/3;for(const Ae of nt)tr(We,Ae.x,H,Ae.y,0,1,0,ae.r,ae.g,ae.b),We.aux.push(0,0,0,me),We.ext.push(Xt.ROOF+W*.98,0,0,Fe);for(const Ae of nt)tr(We,Ae.x,Ye,Ae.y,0,-1,0,1,1,1),We.aux.push(0,Ye,0,me),We.ext.push(...Ke);for(const Ae of Ls.triangulateShape(nt,[])){const Pe=nt[Ae[0]],Xe=nt[Ae[1]],ft=nt[Ae[2]],Mt=(Xe.y-Pe.y)*(ft.x-Pe.x)-(Xe.x-Pe.x)*(ft.y-Pe.y)>=0?[Ae[0],Ae[1],Ae[2]]:[Ae[0],Ae[2],Ae[1]];We.idx.push(wt+Mt[0],wt+Mt[1],wt+Mt[2],wt+nt.length+Mt[0],wt+nt.length+Mt[2],wt+nt.length+Mt[1])}const lt=ye.build(L,{cast:!0,receive:!0}).children[0];if(!lt)return null;lt.name="fallen part";const De=new It().compose(new O(re.x,re.y,re.z),new Qt().setFromAxisAngle(new O(0,1,0),re.yaw),new O(1,1,1)).invert();return{mesh:lt,unborn:De}},faces:()=>({walls:o-1,bytes:c.value.image.data.byteLength})}}function s1(i,e,t,n,s,r,a,o,l,c,h,u,f){for(let g=0;g+1<t.length;g++){let[m,x]=t[g],[p,y]=t[g+1],_=u[g],v=u[g+1];const E=Math.hypot(p-m,y-x);if(E<.05)continue;const M=(y-x)/E*n,R=-(p-m)/E*n;n>0&&([m,p]=[p,m],[x,y]=[y,x],[_,v]=[v,_]);const P=Math.abs((s-(m+p)/2)*M+(r-(x+y)/2)*R),w=o-l,b=Math.hypot(P,w),U=[M*w/b,P/b,R*w/b],N=(k,z)=>{const F=k<=0?a:l+w*k,I=Math.max(0,k),D=m+(p-m)*z,V=x+(y-x)*z;return[D+(s-D)*I,F,V+(r-V)*I]},L=[h,9+32*f(g),0,l];for(let k=-1;k<10;k++){const z=k/10,F=(k+1)/10,I=E*(1-Math.max(0,z)),D=E*(1-F),V=(_+v)/2;Kt(i,e,[N(z,0),N(z,1),N(F,1),N(F,0)],U,c,[[E/2-I/2,V,E,o],[E/2+I/2,V,E,o],[E/2+D/2,V,E,o],[E/2-D/2,V,E,o]],L)}}}function r1(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Nt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=ph(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let m=0;m<a[h].length;++m)d.push(a[h][m][f]);const g=ph(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ph(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new dt(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const m=h.getComponent(f,g);o.setComponent(f+u,g,m)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}const Pt=(i,e)=>[i[0]+e[0],i[1]+e[1],i[2]+e[2]],qn=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],bt=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],Hi=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],Cn=i=>{const e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]};function a1(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const dl=i=>{const e=i()*2-1,t=i()*Math.PI*2,n=Math.sqrt(1-e*e);return[n*Math.cos(t),e,n*Math.sin(t)]};function Tf(i){const e=Cn(Hi(i,Math.abs(i[1])<.95?[0,1,0]:[1,0,0]));return[e,Hi(i,e)]}class o1{pos=[];nor=[];col=[];leaf=[];idx=[];v(e,t,n,s,r,a,o){return this.pos.push(...e),this.nor.push(...t),this.col.push(n.r,n.g,n.b),this.leaf.push(s,r,a,o),this.pos.length/3-1}limb(e,t,n,s,r,a,o=0){const l=Cn(qn(t,e)),[c,h]=Tf(l),u=Math.hypot(...qn(t,e)),f=this.pos.length/3;for(let d=0;d<=r;d++){const g=d/r*Math.PI*2,m=Pt(bt(c,Math.cos(g)),bt(h,Math.sin(g)));this.v(Pt(e,bt(m,n)),m,a,d/r,o,1,-1),this.v(Pt(t,bt(m,s)),m,a,d/r,o+u,1,-1)}for(let d=0;d<r;d++){const g=f+d*2;this.idx.push(g,g+2,g+1,g+1,g+2,g+3)}}quad(e,t,n,s,r,a,o){const l=this.v(e,s,r,0,0,a,o),c=this.v(Pt(e,t),s,r,1,0,a,o),h=this.v(Pt(e,n),s,r,0,1,a,o),u=this.v(Pt(Pt(e,t),n),s,r,1,1,a,o);this.idx.push(l,c,u,l,u,h)}strip(e,t,n,s,r,a,o){const l=this.pos.length/3;e.forEach((c,h)=>{const u=h/(e.length-1);this.v(qn(c,bt(n[h],t[h])),s[h],r,0,u,a[h],o),this.v(Pt(c,bt(n[h],t[h])),s[h],r,1,u,a[h],o)});for(let c=0;c+1<e.length;c++){const h=l+c*2;this.idx.push(h,h+1,h+3,h,h+3,h+2)}}geometry(){const e=new Nt;return e.setAttribute("position",new Rt(this.pos,3)),e.setAttribute("normal",new Rt(this.nor,3)),e.setAttribute("color",new Rt(this.col,3)),e.setAttribute("aLeaf",new Rt(this.leaf,4)),e.setIndex(this.idx),e.computeBoundingSphere(),e}}function Xr(i,e,t,n,s,r,a,o=0,l=0){const c=t.map(f=>f.r[0]*f.r[1]*f.r[2]),h=c.reduce((f,d)=>f+d,0),u=f=>{let d=e()*h,g=0;for(;g<t.length-1&&d>c[g];)d-=c[g],g++;const m=t[g],x=dl(e),p=f?.25+.2*e():.62+.38*Math.sqrt(e()),y=Pt(m.c,[x[0]*m.r[0]*p,x[1]*m.r[1]*p,x[2]*m.r[2]*p]),_=Cn([x[0]/m.r[0],x[1]/m.r[1],x[2]/m.r[2]]),v=qn(y,n.c),E=Cn([v[0]/n.r[0]**2,v[1]/n.r[1]**2,v[2]/n.r[2]**2]),M=Cn(Pt(Pt(_,bt(dl(e),.55)),[0,o,0])),[R,P]=Tf(M),w=e()*Math.PI*2,b=Pt(bt(R,Math.cos(w)),bt(P,Math.sin(w))),U=Hi(M,b),N=r*(f?1.4:.95+.4*e()),L=Math.hypot(v[0]/n.r[0],v[1]/n.r[1],v[2]/n.r[2]),k=(f?.5:.6+.4*Math.min(1,p*L)**1.4)*(.8+.2*(E[1]*.5+.5)),z=Cn(Pt(Pt(Pt(bt(_,.55),bt(E,.45)),bt(M,.2)),[0,.25,0]));i.quad(qn(qn(y,bt(b,N/2)),bt(U,N/2)),bt(b,N),bt(U,N),z,a[Math.floor(e()*a.length)],k,e()*.999)};for(let f=0;f<s;f++)u(!1);for(let f=0;f<l;f++)u(!0)}function $r(i,e,t,n,s,r,a,o){const l=Pt(bt(Pt(t,n),.5),[(e()-.5)*.6,.3+e()*.4,(e()-.5)*.6]),c=(s+r)/2;i.limb(t,l,s,c,a,o),i.limb(l,n,c,r,a,o,Math.hypot(...qn(l,t)))}const Rn=i=>new Qe(i),ps=[{name:"plane",leaf:10,bark:1,leaves:[6257974,7047739,5665839],trunk:10262136,trunkHalf:.24,lobes:7,lobeDepth:.16,palm:0,build(i,e,t){const n=Rn(this.trunk),s=[.15,3.1,.05];i.limb([0,0,0],s,.3,.22,7,n),i.limb(s,[.1,6.6,0],.22,.07,6,n,3.1);const r={c:[0,7.4,0],r:[4,3.4,4]},a=[{c:[0,7.6,0],r:[3,2.6,3]}];for(let o=0;o<4;o++){const l=o*1.62+e()*.6,c=1.9+e()*.6;a.push({c:[Math.cos(l)*c,6.2+e()*2.4,Math.sin(l)*c],r:[1.9+e()*.4,1.7+e()*.3,1.9+e()*.4]})}for(const o of a.slice(1))if($r(i,e,s,bt(o.c,.85),.16,.07,5,n),t>=1)for(let l=0;l<2;l++)i.limb(bt(o.c,.85),Pt(o.c,bt(dl(e),1.4)),.06,.025,3,n);Xr(i,e,a,r,Math.round(46*t),2.4/Math.sqrt(t),this.leaves.map(Rn),0,5)}},{name:"ficus",leaf:11,bark:0,leaves:[3428906,2967589,3824174],trunk:8223346,trunkHalf:.2,lobes:9,lobeDepth:.08,palm:0,build(i,e,t){const n=Rn(this.trunk),s=[0,2.1,0];i.limb([0,0,0],s,.24,.2,7,n),i.limb(s,[0,4.4,0],.2,.06,6,n,2.1);const r={c:[0,4.9,0],r:[3.5,2.6,3.5]},a=[{c:[0,5,0],r:[3.1,2.3,3.1]}];for(let o=0;o<4;o++){const l=o*1.57+e()*.5;a.push({c:[Math.cos(l)*1.8,4.4+e()*1.2,Math.sin(l)*1.8],r:[1.7,1.4,1.7]})}for(const o of a.slice(1))$r(i,e,s,bt(o.c,.7),.13,.06,5,n);Xr(i,e,a,r,Math.round(52*t),2/Math.sqrt(t),this.leaves.map(Rn),0,6)}},{name:"cypress",leaf:12,bark:0,leaves:[2835760,3362611,2572331],trunk:6115656,trunkHalf:.38,lobes:5,lobeDepth:.22,palm:0,build(i,e,t){const n=Rn(this.trunk),s=[.5,2.4,.2];i.limb([0,0,0],s,.48,.38,8,n),i.limb(s,[.7,5.2,.2],.38,.12,7,n,2.4);const r=[];for(let o=0;o<4;o++){const l=o*1.9+e()*.7,c=o===0?.5:2.4+e()*1.2;r.push({c:[Math.cos(l)*c+.6,6+o*1.3+e()*.8,Math.sin(l)*c],r:[3.2-o*.25,1.15,3-o*.2]})}const a={c:[.6,8.2,0],r:[5,3.2,4.6]};for(const o of r)$r(i,e,s,qn(o.c,[0,.7,0]),.24,.1,5,n);Xr(i,e,r,a,Math.round(48*t),2.7/Math.sqrt(t),this.leaves.map(Rn),1.1,5)}},{name:"eucalyptus",leaf:13,bark:4,leaves:[7308391,8097644,6584412],trunk:13616819,trunkHalf:.3,lobes:4,lobeDepth:.3,palm:0,build(i,e,t){const n=Rn(this.trunk),s=[.3,8.5,-.2];i.limb([0,0,0],[.1,4.5,0],.4,.33,7,n),i.limb([.1,4.5,0],s,.33,.26,7,n,4.5),i.limb(s,[.4,13,-.3],.26,.08,6,n,8.5);const r=[];for(let o=0;o<5;o++){const l=o*1.26+e()*.5,c=o===0?.4:2+e()*1.4;r.push({c:[Math.cos(l)*c,11.5+e()*4.5,Math.sin(l)*c],r:[2.1+e()*.5,1.9+e()*.5,2.1+e()*.5]})}for(const o of r)$r(i,e,s,qn(o.c,[0,.8,0]),.17,.06,5,n);Xr(i,e,r,{c:[0,13.5,0],r:[4,4,4]},Math.round(42*t),2.1/Math.sqrt(t),this.leaves.map(Rn),-.3,3)}},{name:"fan-palm",leaf:14,bark:2,leaves:[6126138,6784063],trunk:8154460,trunkHalf:.2,lobes:11,lobeDepth:.42,palm:1,build(i,e,t){const n=Rn(this.trunk),s=[.35,0,.1],r=Pt([0,15,0],s);i.limb([0,0,0],Pt([0,7,0],bt(s,.25)),.27,.2,6,n),i.limb(Pt([0,7,0],bt(s,.25)),r,.2,.17,6,n,7);const a=Rn(9270870),o=Math.round(16*t),l=Math.round(10*t),c=2.3/Math.sqrt(t);for(let u=0;u<l;u++){const f=u*2.4+e()*.4,d=[Math.cos(f),0,Math.sin(f)],g=Cn(Pt(bt(d,.28),[0,-1,0])),m=Hi(g,d),x=Pt(Pt(r,[0,-.4,0]),bt(d,.2));i.quad(qn(x,bt(m,c*.4)),bt(m,c*.8),bt(g,c*1.1),Cn(Pt(d,[0,-.2,0])),a,.6,e()*.999)}const h=this.leaves.map(Rn);for(let u=0;u<o;u++){const f=u*2.39996,d=1.25-u/o*1.45,g=[Math.cos(f),0,Math.sin(f)],m=Cn(Pt(bt(g,Math.cos(d)),[0,Math.sin(d),0])),x=Cn(Hi(m,[0,1,0])),p=Hi(x,m),y=Pt(r,bt(m,.25));i.quad(qn(y,bt(x,c/2)),bt(x,c),bt(m,c*1.05),Cn(Pt(bt(m,.6),Pt(bt(p,.3),[0,.4,0]))),h[u%h.length],.75+.25*Math.max(0,Math.sin(d)),e()*.999)}}},{name:"canary-palm",leaf:15,bark:3,leaves:[5599290,6257472,5006899],trunk:7298117,trunkHalf:.36,lobes:13,lobeDepth:.5,palm:1,build(i,e,t){const n=Rn(this.trunk);i.limb([0,0,0],[.05,4.5,0],.42,.37,9,n),i.limb([.05,4.5,0],[.1,8.4,0],.37,.35,9,n,4.5),i.limb([.1,8.4,0],[.1,9.4,0],.48,.38,9,n,8.4);const s=[.1,9.3,0],r=this.leaves.map(Rn),a=Math.round(24*t),o=t>=1?5:3;for(let l=0;l<a;l++){const c=l*2.39996+e()*.2,h=1.15-l/a*1.35+(e()-.5)*.15,u=5.2+e()*.8,f=[Math.cos(c),0,Math.sin(c)],d=Cn(Hi(f,[0,1,0])),g=[],m=[],x=[],p=[],y=[];for(let _=0;_<=o;_++){const v=_/o*u,E=v*Math.cos(h),M=v*Math.sin(h)-.055*v*v;g.push(Pt(s,Pt(bt(f,E+.2),[0,M,0]))),m.push(.75*Math.max(.08,Math.sin(Math.PI*Math.min(1,_/o*1.1))**.6)*(1-.2*(_/o))),x.push(d),p.push(Cn(Pt([0,1,0],bt(f,.9+_/o)))),y.push(.55+.45*Math.min(1,_/o*1.6)*(.75+.25*Math.max(0,Math.sin(h))))}i.strip(g,m,x,p,r[l%r.length],y,e()*.999)}}}];function l1(i,e,t){const n=new o1;i.build(n,a1(t),e);const s=n.geometry();let r=0,a=0,o=1/0,l=0;for(let c=0;c<n.pos.length/3;c++){const h=n.pos[c*3],u=n.pos[c*3+1],f=n.pos[c*3+2];a=Math.max(a,u),n.leaf[c*4+3]>=0&&(r=Math.max(r,Math.hypot(h,f)),o=Math.min(o,u),l=Math.max(l,u))}return{geo:s,width:r*2,height:a,crownLo:o,crownHi:l}}const ro=`
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
`,ao=`
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
`,mh=`
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
}`,c1={low:[38,58],mid:[70,100],high:[100,140]},h1=820,gh=950,xh=16,f1={low:.6,mid:1,high:1.35},vh=200;function yi(i,e,t){let n=Math.imul(Math.round(i*10)^668265261,73856093)^Math.imul(Math.round(e*10)+t*2654435761,19349663);return n=Math.imul(n^n>>>15,2246822507),n=Math.imul(n^n>>>13,3266489909),((n^n>>>16)>>>0)/4294967296}function u1(i,e){const t=i.r?Math.min(2.3,Math.max(.6,i.r/2.6)):1,n=(.8+.4*yi(i.x,i.z,1))*t,s=n*(.88+.24*yi(i.x,i.z,2));return e.set(s,n,s)}const d1={wood:[10,0,45,45,0,0],park:[30,10,25,15,8,12],plaza:[45,25,0,0,15,15],avenue:[40,15,0,0,15,30],street:[40,40,0,0,12,8],yard:[30,25,15,10,15,5]},_h={wood:"wood",park:"park",grass:"park",garden:"park",playground:"park",pool:"park",plaza:"plaza",pier:"plaza",parking:"street"};function p1(i,e){const t=i.props,n=new Uint8Array(e.length),s=i.areas.filter(l=>_h[l.k]).map(l=>{let c=1/0,h=1/0,u=-1/0,f=-1/0;for(const[d,g]of l.r)c=Math.min(c,d),h=Math.min(h,g),u=Math.max(u,d),f=Math.max(f,g);return{a:l,x0:c,z0:h,x1:u,z1:f}}),r=(l,c,h)=>{let u=!1;for(let f=0,d=l.length-1;f<l.length;d=f++){const[g,m]=l[f],[x,p]=l[d];m>h!=p>h&&c<(x-g)*(h-m)/(p-m)+g&&(u=!u)}return u},a=50,o=new Map;for(const l of i.roads){if(l.b||l.c==="pedestrian")continue;const c=l.c==="trunk"||l.c==="primary";for(let h=0;h+1<l.p.length;h++){const[u,f]=l.p[h],[d,g]=l.p[h+1],m=l.w/2+10;for(let x=Math.floor((Math.min(u,d)-m)/a);x<=Math.floor((Math.max(u,d)+m)/a);x++)for(let p=Math.floor((Math.min(f,g)-m)/a);p<=Math.floor((Math.max(f,g)+m)/a);p++){const y=`${x}_${p}`;let _=o.get(y);_||o.set(y,_=[]),_.push([u,f,d,g,l.w,c])}}}return e.forEach((l,c)=>{const h=t[l];let u="";for(const x of s)if(h.x>=x.x0&&h.x<=x.x1&&h.z>=x.z0&&h.z<=x.z1&&r(x.a.r,h.x,h.z)){u=_h[x.a.k];break}if(!u){let x=1/0,p=!1;for(const[y,_,v,E,M,R]of o.get(`${Math.floor(h.x/a)}_${Math.floor(h.z/a)}`)??[]){const P=v-y,w=E-_,b=P*P+w*w||1,U=Math.max(0,Math.min(1,((h.x-y)*P+(h.z-_)*w)/b)),N=Math.hypot(h.x-y-P*U,h.z-_-w*U)-M/2;N<x&&(x=N,p=R)}u=x<8?p?"avenue":"street":"yard"}const f=d1[u],d=f.reduce((x,p)=>x+p,0);let g=yi(h.x,h.z,3)*d,m=0;for(;m<f.length-1&&g>=f[m];)g-=f[m],m++;n[c]=m}),n}function m1(i,e,t){const n=typeof location>"u"?null:new URLSearchParams(location.search).get("treelod"),s=Ul(),[r,a]=n==="near"?[220,240]:n==="far"?[-2,-1]:c1[s],o=new en;o.name="trees";const l=i.props,c=p1(i,e),h=new Map;e.forEach((F,I)=>h.set(F,I));const u={};for(const F of c)u[ps[F].name]=(u[ps[F].name]??0)+1;const f=new Float32Array(e.length*4);e.forEach((F,I)=>{const D=l[F];f[I*4]=yi(D.x,D.z,4),f[I*4+1]=(yi(D.x,D.z,5)-.5)*1.4,f[I*4+2]=.84+.32*yi(D.x,D.z,6),f[I*4+3]=c[I]===0&&yi(D.x,D.z,7)<.25?.2+.45*yi(D.x,D.z,8):0});const d={uTime:{value:0},uEye:{value:new O(1e9,0,0)},uWind:{value:new O(.92,0,.38).normalize()},uFade:{value:new Et(r,a,h1,gh)}},g=ps.map((F,I)=>l1(F,f1[s],101+I*7919)),m=ps.map((F,I)=>{const D=Math.max(1,Math.min(2500,c.filter(Te=>Te===I).length)),V=g[I].geo.clone(),B=new jn(new Float32Array(D*4),4).setUsage(As);V.setAttribute("aTree",B);const ee=`#define TREE_LEAF ${F.leaf}
#define TREE_BARK ${F.bark}
`,ne=ci(new zn({vertexColors:!0,side:ln,alphaToCoverage:!0}),i,{key:`tree-near-${F.name}`,uniforms:d,vertexPars:`${ee}attribute vec4 aLeaf;
${ro}
varying vec4 vLeaf; varying vec3 vTint; varying float vFade; varying float vFoot;`,vertex:`
        vFade = smoothstep(uFade.x, uFade.y, treeDist());
        vFoot = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).y;
        vLeaf = aLeaf; vTint = aTree.yzw;
        transformed = treeSway(transformed, aLeaf.w);
        vWorld = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`,fragmentPars:`${ee}${ao}
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
#endif`,light:mh}),we=new lf({depthPacking:Xh,side:ln});we.onBeforeCompile=Te=>{Object.assign(Te.uniforms,d),Te.vertexShader=Te.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aLeaf;
${ro}
varying vec4 vLeaf; varying float vFade;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFade = smoothstep(uFade.x, uFade.y, treeDist()); vLeaf = aLeaf; transformed = treeSway(transformed, aLeaf.w);`),Te.fragmentShader=Te.fragmentShader.replace("#include <common>",`#include <common>
${ee}${Ki}
${ao}
varying vec4 vLeaf; varying float vFade;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
          if (treeIgn(gl_FragCoord.xy) < vFade || (vLeaf.w >= -0.5 && treeLeaf(vLeaf.xy, vLeaf.w).x < 0.0)) discard;`)},we.customProgramCacheKey=()=>`tree-depth-${F.name}`;const _e=new qi(V,ne,D);return _e.instanceMatrix.setUsage(As),_e.count=0,_e.customDepthMaterial=we,_e.castShadow=!0,_e.receiveShadow=!0,_e.matrixAutoUpdate=!1,_e.name=`tree near ${F.name}`,_e.boundingSphere=new fi(new O,1),o.add(_e),{mesh:_e,tree:B,slots:[]}}),x=new Map,p=ps.map((F,I)=>{const D=g[I];return{a:new Et(D.width,D.height,D.crownLo,D.crownHi),b:new Et(F.trunkHalf,F.lobes,F.lobeDepth,F.palm),leaf:g1(D.geo,!0),bark:new Qe(F.trunk)}}),y={...d,uFarA:{value:p.map(F=>F.a)},uFarB:{value:p.map(F=>F.b)},uFarLeaf:{value:p.map(F=>F.leaf)},uFarBark:{value:p.map(F=>F.bark)}},_=ci(new zn({side:ln,alphaToCoverage:!0}),i,{key:"tree-far",uniforms:y,vertexPars:`${ro}
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
${ao}
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
    }`,light:mh}),v=new Rt([-.5,0,0,.5,0,0,.5,1,0,-.5,1,0],3),E=new Rt([0,0,1,0,0,1,0,0,1,0,0,1],3),M=new Ts([0,1,2,0,2,3],1),R=Math.max(...g.map(F=>Math.max(F.height,F.width)))*1.5,P=new Map;e.forEach((F,I)=>{const D=l[F],V=`${Math.floor(D.x/vh)}_${Math.floor(D.z/vh)}`;let B=P.get(V);B||P.set(V,B=[]),B.push(I)});const w=new Map,b=[];for(const F of P.values()){const I=new Nt;I.setAttribute("position",v),I.setAttribute("normal",E),I.setIndex(M);const D=new Float32Array(F.length*4),V=new Float32Array(F.length),B=new qi(I,_,F.length);let ee=1/0,ne=1/0,we=-1/0,_e=-1/0;F.forEach((K,ie)=>{const xe=e[K],$=l[xe];D.set(f.subarray(K*4,K*4+4),ie*4),V[ie]=c[K],B.setMatrixAt(ie,t(xe)),w.set(xe,{mesh:B,slot:ie}),ee=Math.min(ee,$.x),ne=Math.min(ne,$.z),we=Math.max(we,$.x),_e=Math.max(_e,$.z)}),I.setAttribute("aTree",new jn(D,4)),I.setAttribute("aSpec",new jn(V,1)),B.instanceMatrix.needsUpdate=!0;const Te=(ee+we)/2,Y=(ne+_e)/2,te=Math.hypot(we-ee,_e-ne)/2+R+10;let ve=0;for(const K of F)ve+=t(e[K]).elements[13];B.boundingSphere=new fi(new O(Te,ve/F.length,Y),te),B.castShadow=!1,B.receiveShadow=!0,B.matrixAutoUpdate=!1,B.name="tree far",o.add(B),b.push({mesh:B,x:Te,z:Y,r:te,members:F})}const U=new rt(1e9,1e9),N=a+xh,L=F=>{U.set(F.x,F.z),x.clear();for(const I of m)I.slots.length=0;for(const I of b)if(!(Math.hypot(I.x-F.x,I.z-F.z)-I.r+R+10>N))for(const D of I.members){const V=e[D],B=l[V];if(Math.hypot(B.x-F.x,B.z-F.z)>N+10)continue;const ee=c[D],ne=m[ee];if(ne.slots.length>=ne.mesh.instanceMatrix.count)continue;const we=ne.slots.length;ne.slots.push(D),ne.mesh.setMatrixAt(we,t(V)),ne.tree.array.set(f.subarray(D*4,D*4+4),we*4),x.set(V,{s:ee,slot:we})}for(const I of m)I.mesh.count=I.slots.length,I.mesh.instanceMatrix.needsUpdate=!0,I.tree.needsUpdate=!0,I.mesh.boundingSphere.center.set(F.x,F.y,F.z),I.mesh.boundingSphere.radius=N+R+20};return{group:o,species:u,update:(F,I)=>{d.uEye.value.copy(F),d.uTime.value=I,Math.hypot(F.x-U.x,F.z-U.y)>xh&&L(F);for(const D of b){const V=Math.hypot(D.x-F.x,D.z-F.z);D.mesh.visible=V-D.r<gh&&V+D.r>r}},redraw:F=>{const I=t(F),D=w.get(F);D&&(D.mesh.setMatrixAt(D.slot,I),D.mesh.instanceMatrix.needsUpdate=!0);const V=x.get(F);if(V){const B=m[V.s];B.mesh.setMatrixAt(V.slot,I),B.mesh.instanceMatrix.needsUpdate=!0}},has:F=>h.has(F)}}function g1(i,e){const t=i.getAttribute("color"),n=i.getAttribute("aLeaf");let s=0,r=0,a=0,o=0;for(let l=0;l<t.count;l++){if(n.getW(l)>=0!==e)continue;const c=.4+n.getZ(l)*.6;s+=t.getX(l)*c,r+=t.getY(l)*c,a+=t.getZ(l)*c,o++}return o?new Qe(s/o,r/o,a/o):new Qe(5204794)}function Rf(i,e){const t=new Qe(e),n=i.getAttribute("position").count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new dt(s,3)),i.index?i.toNonIndexed():i}const tt=(i,e,t,n,s,r,a)=>Rf(new Yi(i,e,t).translate(n,s,r),a),Sn=(i,e,t,n=0,s=0)=>Rf(new ca(i,i,e,6).translate(n,e/2,s),t),hn=i=>r1(i.map(e=>(e.deleteAttribute("uv"),e))),mr={lamp:()=>hn([Sn(.09,8,4869456),tt(1.6,.12,.2,.7,7.9,0,4869456),tt(.5,.14,.26,1.4,7.8,0,15262408)]),signal:()=>hn([Sn(.1,5.2,3948354),tt(.34,1,.3,0,4.6,.2,1908513),tt(.2,.2,.05,0,4.9,.36,13123630)]),stop:()=>hn([Sn(.04,2.4,9080208),tt(.7,.7,.05,0,2.5,0,12068381)]),hydrant:()=>hn([Sn(.14,.7,15197404),tt(.44,.14,.14,0,.45,0,15197404)]),bench:()=>hn([tt(1.7,.08,.5,0,.45,0,7032631),tt(1.7,.5,.07,0,.72,-.24,7032631),tt(.08,.45,.5,-.75,.22,0,3356218),tt(.08,.45,.5,.75,.22,0,3356218)]),bin:()=>Sn(.3,.95,3494463),bollard:()=>Sn(.12,.9,5593180),post_box:()=>tt(.55,1.15,.55,0,.58,0,3100550),bus_stop:()=>hn([tt(3.2,.1,1.5,0,2.5,0,5659488),tt(3.2,2.2,.06,0,1.3,-.7,9675949),Sn(.06,2.5,5659488,-1.5,.7),Sn(.06,2.5,5659488,1.5,.7)]),bike_rack:()=>hn([Sn(.03,.85,9212052,-.35,0),Sn(.03,.85,9212052,.35,0),tt(.76,.06,.06,0,.85,0,9212052)]),table:()=>hn([tt(1.4,.06,.8,0,.73,0,10119999),tt(.07,.7,.07,-.6,.35,-.32,5913892),tt(.07,.7,.07,.6,.35,-.32,5913892),tt(.07,.7,.07,-.6,.35,.32,5913892),tt(.07,.7,.07,.6,.35,.32,5913892)]),chair:()=>hn([tt(.42,.05,.42,0,.44,0,11880506),tt(.42,.42,.05,0,.64,-.19,11880506),tt(.36,.42,.36,0,.21,0,3816512)]),sofa:()=>hn([tt(2,.42,.9,0,.21,0,6258060),tt(2,.4,.22,0,.6,-.34,5665151),tt(.2,.22,.9,-.9,.53,0,5665151),tt(.2,.22,.9,.9,.53,0,5665151)]),shelf:()=>hn([tt(1.2,1.8,.06,0,.9,-.17,8088149),tt(1.2,.05,.4,0,.3,0,13616040),tt(1.2,.05,.4,0,.9,0,13616040),tt(1.2,.05,.4,0,1.5,0,13616040),tt(.9,.22,.3,0,.44,0,13134396),tt(.8,.22,.3,.1,1.04,0,6986319)]),floor_lamp:()=>hn([Sn(.025,1.4,2894894),tt(.26,.04,.26,0,.02,0,2894894),tt(.26,.24,.26,0,1.48,0,15852472)]),crate:()=>tt(.6,.5,.6,0,.25,0,12159566),counter:()=>hn([tt(1.8,.98,.58,0,.49,0,4864556),tt(1.8,.06,.64,0,1.01,0,14275264),tt(1.72,.7,.03,0,.5,.3,7033920),tt(.3,.22,.26,.55,1.15,-.05,2763824)]),stool:()=>hn([Sn(.03,.7,2894894),tt(.3,.03,.3,0,.015,0,2894894),tt(.34,.06,.34,0,.71,0,9063218)]),rack:()=>hn([Sn(.02,1.5,10132898,-.66,0),Sn(.02,1.5,10132898,.66,0),tt(1.36,.03,.03,0,1.48,0,10132898),tt(1.36,.03,.44,0,.02,0,10132898),tt(.3,.9,.36,-.48,.98,0,3099243),tt(.3,.8,.4,-.16,1.03,0,11880506),tt(.3,.95,.34,.16,.955,0,14274488),tt(.3,.75,.38,.48,1.055,0,4156242)]),desk:()=>hn([tt(1.5,.05,.76,0,.73,0,13220250),tt(.05,.71,.7,-.7,.355,0,6119267),tt(.05,.71,.7,.7,.355,0,6119267),tt(1.36,.4,.03,0,.5,.33,6119267),tt(.42,.28,.04,.3,.92,-.1,1842722)])};mr.bed=()=>hn([tt(1.6,.3,2,0,.15,0,5916214),tt(1.56,.2,1.96,0,.4,0,15328472),tt(1.56,.07,1.3,0,.53,.3,8229800),tt(1,.1,.4,0,.55,-.72,16052712),tt(1.6,.56,.06,0,.28,-.98,5916214)]);const yh=new Map;function x1(i){if(!mr[i])return null;let e=yh.get(i);return e||(e=mr[i](),yh.set(i,e)),e}const v1=new Set(["bed","table","chair","sofa","shelf","floor_lamp","crate","counter","stool","rack","desk"]),_1=320,y1=170,wh=240;function w1(i,e,t){const n=new en,s=new zn({vertexColors:!0}),r=e.props,a={},o=[],l=new Map,c=new Map,h=(I,D)=>`${Math.floor(I.x/D)}_${Math.floor(I.z/D)}`;r.forEach((I,D)=>{if(I.k==="tree"){a.tree=(a.tree??0)+1,o.push(D);return}if(!mr[I.k])return;a[I.k]=(a[I.k]??0)+1;const[V,B]=v1.has(I.k)?[c,120]:[l,400],ee=h(I,B);let ne=V.get(ee);ne||(ne=[],V.set(ee,ne)),ne.push(D)});const u=new It,f=new Qt,d=new O,g=new O,m=new O(0,1,0),x=new O,p=new O,y=new Map,_=I=>t.get(I.k)?.half[1]??0,v=I=>{const D=r[I],V=y.get(I);return D.k==="tree"?u1(D,d):d.set(1,1,1),V?(f.set(V[3],V[4],V[5],V[6]),g.set(0,-_(D),0).applyQuaternion(f).add(x.set(V[0],V[1],V[2])),u.compose(g,f,d)):u.compose(g.set(D.x,i.at(D.x,D.z),D.z),f.setFromAxisAngle(m,D.a),d)},E=m1(e,o,v);n.add(E.group);const M=new Map,R=I=>{let D=M.get(I);return D||(D=mr[I](),M.set(I,D)),D},P=new Map,w=(I,D,V,B)=>{const ee=R(r[I].k),ne=ee.getAttribute("position"),we=ee.getAttribute("normal"),_e=v(I),Te=f.clone();for(let Y=0;Y<ne.count;Y++){x.fromBufferAttribute(ne,Y).applyMatrix4(_e),p.fromBufferAttribute(we,Y).applyQuaternion(Te);const te=(B+Y)*3;D[te]=x.x,D[te+1]=x.y,D[te+2]=x.z,V[te]=p.x,V[te+1]=p.y,V[te+2]=p.z}},b=(I,D)=>{let V=0;for(const te of I)V+=R(r[te].k).getAttribute("position").count;const B=new Float32Array(V*3),ee=new Float32Array(V*3),ne=new Float32Array(V*3),we=new Nt,_e=new Ct(we,s);let Te=0;for(const te of I){const ve=R(r[te].k).getAttribute("color");w(te,B,ee,Te),ne.set(ve.array,Te*3),P.set(te,{mesh:_e,start:Te}),Te+=ve.count}we.setAttribute("position",new dt(B,3).setUsage(As)),we.setAttribute("normal",new dt(ee,3).setUsage(As)),we.setAttribute("color",new dt(ne,3)),we.computeBoundingSphere(),we.boundingSphere.radius+=40,_e.matrixAutoUpdate=!1,n.add(_e);const Y=we.boundingSphere;return{mesh:_e,x:Y.center.x,z:Y.center.z,r:Y.radius,far:D}},U=[...l.values()].map(I=>b(I,_1)),N=[...c.values()].map(I=>{let D=0,V=0;for(const B of I)D+=r[B].x,V+=r[B].z;return{list:I,x:D/I.length,z:V/I.length,baked:null}}),L=I=>{E.update(I,performance.now()/1e3);for(const D of U)D.mesh.visible=Math.max(0,Math.hypot(D.x-I.x,D.z-I.z)-D.r+40)<D.far;for(const D of N){const V=Math.hypot(D.x-I.x,D.z-I.z);if(!D.baked&&V<y1)D.baked=b(D.list,wh);else if(D.baked&&V>wh){n.remove(D.baked.mesh),D.baked.mesh.geometry.dispose();for(const B of D.list)P.delete(B);D.baked=null}}},k=I=>{if(E.has(I)){E.redraw(I);return}const D=P.get(I);if(!D)return;const V=D.mesh.geometry.getAttribute("position"),B=D.mesh.geometry.getAttribute("normal"),ee=R(r[I].k).getAttribute("position").count;w(I,V.array,B.array,D.start),V.addUpdateRange(D.start*3,ee*3),B.addUpdateRange(D.start*3,ee*3),V.needsUpdate=!0,B.needsUpdate=!0};return{group:n,counts:a,update:L,apply:I=>{for(let D=0;D+8<=I.length;D+=8){const V=I[D];if(!r[V])continue;let B=y.get(V);B||(B=new Float32Array(7),y.set(V,B)),B.set(I.subarray(D+1,D+8)),k(V)}},reset:()=>{const I=[...y.keys()];y.clear();for(const D of I)k(D)}}}const oo=420,Mh=240,lo=220,M1={timber:null,stud:14209732,brick:9194042,block:11117980,glazing:10470607,stone:12170150,drywall:14868180,door:14276300},b1={timber:13287327,stud:14473420,brick:11565666,block:12170668,glazing:13951718,stone:12894132,drywall:15131354,door:14210248};class S1{constructor(e,t,n,s,r=()=>null){this.city=e,this.fronts=t,this.insides=n,this.kinds=s,this.fallenOf=r;const a=new Yi(2,2,2),o=a.getAttribute("position").count,l=new Float32Array(o*3),c=a.getAttribute("normal");for(let f=0;f<o;f++){const d=c.getY(f)>.5?.62:c.getY(f)<-.5?.45:1;l[f*3]=d,l[f*3+1]=d,l[f*3+2]=d}a.setAttribute("color",new dt(l,3));const h=(f,d)=>{const g=new qi(a,new zn({vertexColors:!0}),f);for(let m=0;m<f;m++)g.setMatrixAt(m,this.m.makeScale(0,0,0)),g.setColorAt(m,this.c.setHex(16777215));return g.count=f,g.frustumCulled=!1,g.castShadow=!0,g.receiveShadow=!0,g.name=d,this.group.add(g),g};this.pieces=h(oo,"wall pieces"),this.parts=h(Mh,"fallen buildings"),this.parts.visible=!1;const u=new ff;u.setAttribute("position",new dt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),u.setIndex([0,1,2,0,2,3]),this.dustAt=new jn(new Float32Array(lo*4),4),this.dustLook=new jn(new Float32Array(lo*4),4),u.setAttribute("at",this.dustAt),u.setAttribute("look",this.dustLook),u.instanceCount=0,this.dust=new Ct(u,new Ln({transparent:!0,depthWrite:!1,vertexShader:`
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
        }`})),this.dust.frustumCulled=!1,this.dust.name="dust",this.dust.renderOrder=5,this.group.add(this.dust)}group=new en;pieces;parts;pieceAt=new Map;partAt=new Map;partMesh=new Map;ONE=new O(1,1,1);pieceSlot=new Array(oo).fill(null);partSlot=new Array(Mh).fill(null);clock=0;holes=new Map;dirty=new Set;puffs=[];dust;dustAt;dustLook;m=new It;c=new Qe;seen={panels:0,fell:0};gaveWay(e,t){this.seen.panels++;const n=this.holes.get(e.building)??[];n.push({x0:e.x0,z0:e.z0,x1:e.x1,z1:e.z1,y:e.holeTop}),this.holes.set(e.building,n),this.dirty.add(e.building);const s=this.kinds[e.kind]??"timber",r=b1[s]??13617336,a=Bi().at((e.x0+e.x1)/2,(e.z0+e.z1)/2),o=s==="glazing"?3:7;for(let l=0;l<o;l++){const c=Math.random();this.puff(e.x0+(e.x1-e.x0)*c,a+.3+Math.random()*2.4,e.z0+(e.z1-e.z0)*c,(Math.random()-.5)*(1+t*.12),.4+Math.random(),(Math.random()-.5)*(1+t*.12),.7+Math.random()*.9,1.4+Math.random()*1.4,r,.5)}}fell(e,t){this.seen.fell++,this.dirty.delete(e),this.holes.delete(e),this.city.raze(e),this.fronts.raze(e),this.insides.raze(e);const n=this.city.colors(e).wall,s=this.c.setRGB(n[0],n[1],n[2]).lerp(new Qe(13617336),.6).getHex();for(let r=0;r<60;r++){const a=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*t.r,l=1.5+Math.random()*3.5;this.puff(t.x+Math.cos(a)*o,t.y+Math.random()*Math.min(5,t.high),t.z+Math.sin(a)*o,Math.cos(a)*l,.6+Math.random()*1.6,Math.sin(a)*l,2+Math.random()*2.5,2.6+Math.random()*2.4,s,.55)}}puff(e,t,n,s,r,a,o,l,c,h){this.puffs.length>=lo&&this.puffs.shift(),this.puffs.push({p:new O(e,t,n),v:new O(s,r,a),age:0,life:l,size:o,grow:.9+Math.random()*.8,tint:new Qe(c),alpha:h})}partOf(e,t){let n=this.partMesh.get(e);if(n!==void 0)return n;const s=this.fallenOf(t);return n=s?this.city.part(t,s,e):null,n&&this.group.add(n.mesh),this.partMesh.set(e,n),n}apply(e,t){for(let n=0;n+ur<=e.length;n+=ur){const s=e[n+Vt.ID],r=e[n+Vt.WHAT]===1,a=e[n+Vt.STATE]===1;if(r){const d=new O(e[n+Vt.POS],e[n+Vt.POS+1],e[n+Vt.POS+2]),g=new Qt(e[n+Vt.ROT],e[n+Vt.ROT+1],e[n+Vt.ROT+2],e[n+Vt.ROT+3]),m=this.partOf(s,e[n+Vt.WHICH]);m&&(m.mesh.matrix.compose(d,g,this.ONE).multiply(m.unborn),m.mesh.matrixWorldNeedsUpdate=!0);continue}const o=r?this.parts:this.pieces,l=r?this.partAt:this.pieceAt,c=r?this.partSlot:this.pieceSlot;let h=l.get(s);if(h===void 0){if(h=c.findIndex(g=>!g),h<0){let g=1/0;c.forEach((m,x)=>{m&&!m.v&&m.born<g&&(g=m.born,h=x)}),h<0&&(h=0),l.delete(c[h].id)}const d=e[n+Vt.WHICH];if(r){const g=this.city.colors(d).wall;this.c.setRGB(g[0],g[1],g[2])}else{const g=t(d),m=this.kinds[g?.kind??0]??"timber",x=M1[m];if(x==null){const p=this.city.colors(g?.building??0).wall;this.c.setRGB(p[0],p[1],p[2])}else this.c.setHex(x)}o.setColorAt(h,this.c),o.instanceColor.needsUpdate=!0,c[h]={id:s,at:new O,q:new Qt,half:new O,v:null,born:this.clock},l.set(s,h)}const u=c[h];u.at.set(e[n+Vt.POS],e[n+Vt.POS+1],e[n+Vt.POS+2]),u.q.set(e[n+Vt.ROT],e[n+Vt.ROT+1],e[n+Vt.ROT+2],e[n+Vt.ROT+3]),u.half.set(e[n+Vt.HALF],e[n+Vt.HALF+1],e[n+Vt.HALF+2]);const f=new O(e[n+Vt.VEL],e[n+Vt.VEL+1],e[n+Vt.VEL+2]);u.v=a&&!r&&f.lengthSq()>.6?f:null,o.setMatrixAt(h,this.m.compose(u.at,u.q,u.half)),o.instanceMatrix.needsUpdate=!0}}update(e){this.clock+=e;for(const r of this.dirty){const a=this.holes.get(r)??[];this.city.breach(r,a),this.insides.breach(r,a)}this.dirty.clear();let t=!1;for(let r=0;r<oo;r++){const a=this.pieceSlot[r];if(!a?.v)continue;a.v.y-=9.81*e,a.at.addScaledVector(a.v,e);const o=Bi().at(a.at.x,a.at.z)+Math.min(a.half.x,a.half.y,a.half.z);a.at.y<=o&&(a.at.y=o,a.q.setFromAxisAngle(new O(1,0,0),Math.PI/2),a.v=null),this.pieces.setMatrixAt(r,this.m.compose(a.at,a.q,a.half)),t=!0}if(t&&(this.pieces.instanceMatrix.needsUpdate=!0),!this.puffs.length&&!this.dust.geometry.instanceCount)return;this.puffs=this.puffs.filter(r=>(r.age+=e)<r.life);const n=this.dustAt.array,s=this.dustLook.array;this.puffs.forEach((r,a)=>{r.v.multiplyScalar(Math.max(0,1-1.6*e)),r.v.y+=.25*e,r.p.addScaledVector(r.v,e);const o=r.age/r.life;n.set([r.p.x,r.p.y,r.p.z,r.size*(1+r.grow*o*2)],a*4),s.set([r.tint.r,r.tint.g,r.tint.b,r.alpha*Math.min(1,o*8)*(1-o)*(1-o)],a*4)}),this.dust.geometry.instanceCount=this.puffs.length,this.dustAt.needsUpdate=!0,this.dustLook.needsUpdate=!0}reset(){this.holes.clear(),this.dirty.clear(),this.city.reset();for(const[e,t,n]of[[this.pieces,this.pieceSlot,this.pieceAt],[this.parts,this.partSlot,this.partAt]]){for(let s=0;s<t.length;s++)t[s]&&e.setMatrixAt(s,this.m.makeScale(0,0,0)),t[s]=null;n.clear(),e.instanceMatrix.needsUpdate=!0}for(const e of this.partMesh.values())e&&(this.group.remove(e.mesh),e.mesh.geometry.dispose());this.partMesh.clear(),this.puffs.length=0,this.dust.geometry.instanceCount=0,this.seen.panels=0,this.seen.fell=0}counts(){return{pieces:this.pieceAt.size,parts:[...this.partMesh.values()].filter(e=>e).length,puffs:this.puffs.length,...this.city.broken()}}}const bh={furniture:{wall:14273976,floor:9071178},cafe:{wall:13219738,floor:6115656},grocer:{wall:14672854,floor:10132628},restaurant:{wall:12159082,floor:4864560},bar:{wall:4865850,floor:3024418},shop:{wall:15131354,floor:11049606},bank:{wall:14078920,floor:8223346},hotel:{wall:13351066,floor:7028536},salon:{wall:15259862,floor:9407882},clinic:{wall:15002606,floor:10465460},gallery:{wall:15790058,floor:8026744},studio:{wall:14341836,floor:9072466},office:{wall:13619924,floor:6251624},room:{wall:14472904,floor:8219477},hall:{wall:14209990,floor:7301728},garage:{wall:12170926,floor:7105642},living:{wall:14866111,floor:9136711},bedroom:{wall:14015458,floor:10126440},kitchen:{wall:15262930,floor:12170146},store:{wall:13223354,floor:7828330},lobby:{wall:14275782,floor:9340792},core:{wall:9408396,floor:5000266},floor:{wall:12565682,floor:8026226},shed:{wall:11116428,floor:6971992},workroom:{wall:14672092,floor:7172984},nave:{wall:15130572,floor:6965814},concourse:{wall:14079180,floor:9078912},open:{wall:12105390,floor:7828847}},E1=3.5,A1=110,T1=160,co=2,Zs=900;function Sh(i,e,t){const n=r=>(t[0]-e[0])*(r[1]-e[1])-(t[1]-e[1])*(r[0]-e[0]),s=[];for(let r=0;r<i.length;r++){const a=i[r],o=i[(r+1)%i.length],l=n(a),c=n(o);if(l>=0&&s.push(a),l>=0!=c>=0){const h=l/(l-c);s.push([a[0]+(o[0]-a[0])*h,a[1]+(o[1]-a[1])*h])}}return s}class R1{constructor(e,t,n,s,r,a,o){this.page=e,this.ground=t,this.ask=n,this.originOf=s,this.kindNames=r,this.kinds=a,this.rooms=o;for(const l of e.fronts??[])this.show(l.b);this.group.name="insides"}group=new en;built=new Map;holes=new Map;razed=new Set;shown=new Set;fronted=new Map;mid=new Map;pools=new Map;strays=new Map;origin=new Map;material=new Us({vertexColors:!0,side:ln});m=new It;q=new Qt;t=new O;s=new O(1,1,1);up=new O(0,1,0);middle(e){let t=this.mid.get(e);if(!t){const n=this.page.buildings[e].r;let s=0,r=0;for(const[a,o]of n)s+=a,r+=o;t=[s/n.length,r/n.length],this.mid.set(e,t)}return t}show(e){if(!this.page.buildings[e]||this.shown.has(e))return;this.shown.add(e);const[t,n]=this.middle(e),s=`${Math.floor(t/96)}_${Math.floor(n/96)}`;let r=this.fronted.get(s);r||this.fronted.set(s,r=[]),r.push(e)}pool(e){let t=this.pools.get(e);if(t)return t;const n=x1(e);if(!n)return null;const s=new qi(n,new zn({vertexColors:!0}),Zs);for(let r=0;r<Zs;r++)s.setMatrixAt(r,this.m.makeScale(0,0,0));return s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!0,s.name=`inside ${e}`,this.group.add(s),t={mesh:s,free:Array.from({length:Zs},(r,a)=>Zs-1-a),halfUp:this.kinds.get(e)?.half[1]??0},this.pools.set(e,t),t}place(e,t,n){const s=t.plan.items[n],r=this.kindNames[s.kind]??"",a=this.pool(r);if(!a)return;const o=this.strays.get(`${e}:${n}`);let l=t.slots.get(n);if(!l){const c=a.free.pop();if(c===void 0)return;l={kind:r,slot:c},t.slots.set(n,l)}o?(this.q.set(o[3],o[4],o[5],o[6]),this.t.set(0,-a.halfUp,0).applyQuaternion(this.q),this.t.x+=o[0],this.t.y+=o[1],this.t.z+=o[2]):(this.q.setFromAxisAngle(this.up,s.yaw),this.t.set(s.x,s.y,s.z)),a.mesh.setMatrixAt(l.slot,this.m.compose(this.t,this.q,this.s)),a.mesh.instanceMatrix.needsUpdate=!0}drop(e){const t=this.built.get(e);if(t){this.group.remove(t.mesh),t.mesh.geometry.dispose();for(const{kind:n,slot:s}of t.slots.values()){const r=this.pools.get(n);r.mesh.setMatrixAt(s,this.m.makeScale(0,0,0)),r.mesh.instanceMatrix.needsUpdate=!0,r.free.push(s)}this.built.delete(e)}}build(e){this.drop(e);const t=this.ask(e),n=this.page.buildings[e];if(!t||!n||this.razed.has(e))return!1;const s=this.ground,r=this.holes.get(e)??[],a=(M,R)=>Math.min(s.at(M,R)+E1,n.y1-.1),o=[],l=[],c=[],h=new Qe,u=(M,R,P,w,b)=>(h.setHex(w),o.push(M,R,P),l.push(h.r*b,h.g*b,h.b*b),o.length/3-1),f=n.r.slice(0,-1),d=M=>bh[this.rooms[M]??"room"]??bh.room;for(const M of t.rooms){let R=f;const P=(M.quad[0][0]+M.quad[2][0])/2,w=(M.quad[0][1]+M.quad[2][1])/2,b=M.quad,U=(b[1][0]-b[0][0])*(w-b[0][1])-(b[1][1]-b[0][1])*(P-b[0][0])>=0;for(let z=0;z<4&&R.length>=3;z++)R=U?Sh(R,b[z],b[(z+1)%4]):Sh(R,b[(z+1)%4],b[z]);if(R.length<3)continue;const N=R.map(([z,F])=>new rt(z,F)),L=d(M.kind).floor,k=(z,F,I,D)=>{const V=Math.hypot(F[0]-z[0],F[1]-z[1]),B=Math.hypot(I[0]-F[0],I[1]-F[1]),ee=Math.hypot(z[0]-I[0],z[1]-I[1]),ne=Math.max(V,B,ee);if(ne>4&&D<7){if(ne===V){const _e=[(z[0]+F[0])/2,(z[1]+F[1])/2];k(z,_e,I,D+1),k(_e,F,I,D+1)}else if(ne===B){const _e=[(F[0]+I[0])/2,(F[1]+I[1])/2];k(z,F,_e,D+1),k(z,_e,I,D+1)}else{const _e=[(I[0]+z[0])/2,(I[1]+z[1])/2];k(z,F,_e,D+1),k(_e,F,I,D+1)}return}const we=[z,F,I].map(([_e,Te])=>u(_e,s.at(_e,Te)+.09,Te,L,.92));c.push(we[0],we[1],we[2])};for(const z of Ls.triangulateShape(N,[]))k(R[z[0]],R[z[1]],R[z[2]],0)}const g=(M,R,P,w,b,U)=>{const N=Math.hypot(P-M,w-R);if(N<.05)return;const L=s.at(M,R),k=s.at(P,w);for(const[z,F,I]of Ef(N,-1e6,1e6,Af(M,R,P,w,r))){const D=(B,ee)=>{const ne=B/N,we=L+(k-L)*ne,_e=M+(P-M)*ne,Te=R+(w-R)*ne;return u(_e,ee?we+.05:a(_e,Te),Te,b,U*(ee?1:.72))};if(I>-1e5)continue;const V=[D(z,!0),D(F,!0),D(F,!1),D(z,!1)];c.push(V[0],V[1],V[2],V[0],V[2],V[3])}},m=d(t.rooms[0]?.kind??0).wall;for(const M of t.parts)g(M.ax,M.az,M.bx,M.bz,14605008,.95);let x=0,p=0;for(const[M,R]of f)x+=M,p+=R;x/=f.length,p/=f.length;const y=(this.page.fronts??[]).filter(M=>M.b===e);for(let M=0;M<f.length;M++){const[R,P]=f[M],[w,b]=f[(M+1)%f.length],U=Math.hypot(w-R,b-P);if(U<.05)continue;let N=-(b-P)/U,L=(w-R)/U;N*(x-R)+L*(p-P)<0&&(N=-N,L=-L);const k=y.find(F=>F.e===M),z=.06;if(!k){g(R+N*z,P+L*z,w+N*z,b+L*z,m,.86);continue}g(R+N*z,P+L*z,k.p0[0]+N*z,k.p0[1]+L*z,m,.86),g(k.p1[0]+N*z,k.p1[1]+L*z,w+N*z,b+L*z,m,.86)}{const M=f.map(([P,w])=>new rt(P,w)),R=o.length/3;for(const[P,w]of f)u(P,a(P,w),w,m,.6);for(const P of Ls.triangulateShape(M,[]))c.push(R+P[0],R+P[1],R+P[2])}const _=new Nt;_.setAttribute("position",new dt(new Float32Array(o),3)),_.setAttribute("color",new dt(new Float32Array(l),3)),_.setIndex(c),_.computeBoundingSphere();const v=new Ct(_,this.material);v.matrixAutoUpdate=!1,v.name="inside",this.group.add(v);const E={mesh:v,plan:t,slots:new Map,holes:r};return this.built.set(e,E),t.items.forEach((M,R)=>{(M.state!==2||this.strays.has(`${e}:${R}`))&&this.place(e,E,R)}),!0}update(e){for(const[r]of this.built){const[a,o]=this.middle(r);Math.hypot(a-e.x,o-e.z)>T1&&this.drop(r)}let t=0;const n=Math.floor(e.x/96),s=Math.floor(e.z/96);for(let r=-2;r<=2&&t<co;r++)for(let a=-2;a<=2&&t<co;a++)for(const o of this.fronted.get(`${n+r}_${s+a}`)??[]){if(this.built.has(o)||this.razed.has(o))continue;const[l,c]=this.middle(o);if(!(Math.hypot(l-e.x,c-e.z)>A1)&&this.build(o)&&++t>=co)break}}breach(e,t){this.razed.has(e)||(this.holes.set(e,t),this.show(e),this.build(e))}raze(e){this.razed.add(e);const t=this.built.get(e);if(!t)return;const n=new Map;for(const[s,r]of t.slots)this.strays.has(`${e}:${s}`)&&n.set(s,r);for(const s of n.keys())t.slots.delete(s);this.drop(e);for(const[s,r]of n)this.orphans.set(`${e}:${s}`,r)}orphans=new Map;apply(e,t){for(let n=0;n+8<=e.length;n+=8){const s=e[n];if(s<t)continue;let r=this.origin.get(s);if(r===void 0){const u=this.originOf(s);r=u?{b:u.b,i:u.i,kind:this.kindNames[u.kind]??""}:null,this.origin.set(s,r)}if(!r)continue;const a=`${r.b}:${r.i}`;let o=this.strays.get(a);o||(o=new Float32Array(7),this.strays.set(a,o)),o.set(e.subarray(n+1,n+8));const l=this.built.get(r.b);if(l){this.place(r.b,l,r.i);continue}const c=this.orphans.get(a),h=this.pool(r.kind);c&&h&&(this.q.set(o[3],o[4],o[5],o[6]),this.t.set(0,-h.halfUp,0).applyQuaternion(this.q),this.t.x+=o[0],this.t.y+=o[1],this.t.z+=o[2],h.mesh.setMatrixAt(c.slot,this.m.compose(this.t,this.q,this.s)),h.mesh.instanceMatrix.needsUpdate=!0)}}reset(){for(const e of[...this.built.keys()])this.drop(e);for(const[,e]of this.orphans){const t=this.pools.get(e.kind);t.mesh.setMatrixAt(e.slot,this.m.makeScale(0,0,0)),t.mesh.instanceMatrix.needsUpdate=!0,t.free.push(e.slot)}this.orphans.clear(),this.holes.clear(),this.razed.clear(),this.strays.clear(),this.origin.clear()}drawn(e){if(!this.built.has(e)&&!this.build(e))return null;const t=this.built.get(e),n=[...t.slots.entries()].map(([s,r])=>(this.pools.get(r.kind).mesh.getMatrixAt(r.slot,this.m),this.t.setFromMatrixPosition(this.m),{kind:r.kind,x:this.t.x,z:this.t.z,stray:this.strays.has(`${e}:${s}`)}));return{rooms:t.plan.rooms.map(s=>this.rooms[s.kind]??"?"),parts:t.plan.parts.map(s=>[s.ax,s.az,s.bx,s.bz]),items:n,triangles:t.mesh.geometry.index.count/3}}counts(){let e=0;for(const t of this.pools.values())e+=Zs-t.free.length;return{built:this.built.size,things:e}}}const Eh={compact:{wheel:.3,axles:[.78,3.28],tyre:[.2,.2],nose:.66,belt:.95,tail:.98,screen:[1.2,1.88],back:[3.3,3.95],floor:.24,round:1,tumble:.2,head:[.66,.78],rear:[.82,.98],headX:[.52,.9],rearX:[.6,.93]},saloon:{wheel:.32,axles:[.95,3.78],tyre:[.22,.22],nose:.66,belt:.98,tail:1.02,screen:[1.5,2.25],back:[3.4,4.08],floor:.24,round:1,tumble:.21,head:[.66,.77],rear:[.84,.97],headX:[.5,.9],rearX:[.55,.93]},hatch:{wheel:.31,axles:[.9,3.55],tyre:[.21,.21],nose:.66,belt:.98,tail:1,screen:[1.32,2.05],back:[4.05,4.33],floor:.24,round:1,tumble:.17,head:[.66,.77],rear:[.9,1.12],headX:[.5,.9],rearX:[.7,.95]},suv:{wheel:.37,axles:[.98,3.8],tyre:[.25,.25],nose:.9,belt:1.13,tail:1.15,screen:[1.38,2.08],back:[4.3,4.66],floor:.42,round:.85,tumble:.16,head:[.88,.99],rear:[1.02,1.2],headX:[.48,.9],rearX:[.68,.95]},pickup:{wheel:.4,axles:[1.05,4.5],tyre:[.27,.27],nose:1.02,belt:1.24,tail:1.24,screen:[1.62,2.28],back:[3.1,3.18],bed:3.32,floor:.48,round:.55,tumble:.12,head:[.98,1.12],rear:[.92,1.22],headX:[.5,.92],rearX:[.86,.98]},van:{wheel:.36,axles:[.98,4.25],tyre:[.24,.26],nose:.98,belt:1.18,screen:[.75,1.5],back:[5.16,5.22],side:[.9,2.25],floor:.4,round:.45,tumble:.05,head:[.92,1.06],rear:[.62,1.4],headX:[.5,.9],rearX:[.88,.98]},truck:{wheel:.48,axles:[1.15,5.6],tyre:[.3,.52],nose:1.25,belt:1.5,screen:[.32,.72],back:[2.05,2.1],side:[.55,1.75],box:2.25,cab:.92,floor:.62,round:.25,tumble:.04,head:[.82,.98],rear:[.62,.82],headX:[.55,.88],rearX:[.8,.97],livery:"truck"},taxi:{wheel:.32,axles:[.95,3.8],tyre:[.22,.22],nose:.68,belt:.99,tail:1.03,screen:[1.52,2.27],back:[3.42,4.1],floor:.24,round:1,tumble:.21,head:[.68,.79],rear:[.85,.98],headX:[.5,.9],rearX:[.55,.93],livery:"taxi"},bus:{wheel:.5,axles:[2.65,8.95],tyre:[.3,.52],nose:1.05,belt:1.12,screen:[.02,.22],back:[11.82,11.97],side:[.35,11.55],pillars:1.45,floor:.34,round:.3,tumble:.03,head:[.42,.62],rear:[.55,.95],headX:[.62,.9],rearX:[.8,.96],livery:"bus"}},C1=i=>Eh[i]??Eh.saloon,vi=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},L1={taxi:1,bus:2,truck:3},_i=22;function Ah(i,e,t,n){const[s,r,a]=i.half,o=a*2,l=r*2,c=-(r+i.clearance),[h,u]=e.screen,[f,d]=e.back,g=l-.02,m=[0,o,h,u,f,d,...e.axles.flatMap(B=>n?[B-e.wheel-.06,B,B+e.wheel+.06]:[B])];e.box!==void 0&&m.push(e.box-.05,e.box),e.bed!==void 0&&m.push(e.bed-.04,e.bed);const x=Math.max(6,Math.round(o/t));for(let B=1;B<x;B++)m.push(o*B/x);const p=[...new Set(m.filter(B=>B>=0&&B<=o).map(B=>Math.round(B*1e3)/1e3))].sort((B,ee)=>B-ee).filter((B,ee,ne)=>ee===0||B-ne[ee-1]>.025),y=[],_=[],v=[],E=[],M=B=>Math.min(Math.abs(B-e.axles[0]),Math.abs(B-e.axles[1])),R=B=>{const ee=(B-a)/a,ne=Math.abs(ee),we=e.box!==void 0&&B>=e.box,_e=e.box!==void 0&&!we?e.cab??1:1,Te=s*_e*(1-.11*e.round*vi(.78,1,ne))*(1-.03*vi(.95,1,ne));let Y=B<h?e.nose+(e.belt-e.nose)*Math.pow(vi(0,h,B),.7):B>d?(e.tail??e.belt)-.06*e.round*vi(.9,1,ee):e.belt,te=B<u?vi(h,u,B):B<f?1:1-vi(f,d,B),ve=Y+((e.box!==void 0?Math.min(g,e.belt+1.15):g)-Y)*te,K=te>.02?1:0;we&&(Y=g-.05,ve=g,te=0,K=0);const ie=.035*e.round*(1-vi(.85,1,ne))*(we?0:1),xe=Te*(.97-(we?0:e.tumble)*Math.min(1,te*1.6)),$=e.wheel+.07,A=M(B),ce=e.floor+.08*e.round*vi(.86,1,ne),J=A<$?Math.max(ce,e.wheel+Math.sqrt($*$-A*A)):ce,re=Math.min(J+.08,Y-.1),he=we?re+.12:Math.max(re+.04,Y-.28),be=at=>at+c,me=[[Te*.84,J,0,0,1],[Te*.975,re,0,0,1],[Te*.978,re+.012,0,0,0],[Te,he,0,0,0],[Te*.995,Y-.07,0,0,0],[Te*.97,Y,0,0,0],[xe+(Te*.97-xe)*.42,Y+(ve-Y)*.5,.5,0,0],[xe,ve-(ve-Y)*.06,.94,1,0],[xe*.72,ve,1,.5,0],[xe*.36,ve+ie*.5,1,.15,0]],Fe=[],st=[];Fe.push([0,be(J)]),st.push([0,0,K,1]);for(const[at,C,S,W,se]of me)Fe.push([at,be(C)]),st.push([S,W,K,se]);Fe.push([0,be(ve+ie*.6)]),st.push([1,0,K,0]);for(let at=me.length-1;at>=0;at--){const[C,S,W,se,ue]=me[at];Fe.push([-C,be(S)]),st.push([W,se,K,ue])}return{p:Fe,a:st}},P=p.map(R);if(P[0].p.length!==_i)throw new Error("the traffic body ring has changed its count");P.forEach((B,ee)=>{const ne=p[ee],we=ne-a;B.p.forEach(([_e,Te],Y)=>{y.push(_e,Te,we),_.push(...B.a[Y]),v.push((ne-h)/(u-h),(ne-f)/(d-f),Math.hypot(M(ne),Te-c-e.wheel)-e.wheel,0)})});const w=new O,b=new O,U=new O,N=new O,L=new O,k=new O,z=(B,ee,ne,we,_e,Te)=>{b.fromArray(y,B*3),U.fromArray(y,ee*3),N.fromArray(y,ne*3),L.subVectors(U,b).cross(k.subVectors(N,b)),!(L.lengthSq()<1e-12)&&(w.copy(b).add(U).add(N).multiplyScalar(1/3),L.dot(w.sub(k.set(we,_e,Te)))>=0?E.push(B,ee,ne):E.push(B,ne,ee))},F=(B,ee)=>B*_i+(ee%_i+_i)%_i,I=c+l*.4;for(let B=0;B+1<P.length;B++){const ee=(p[B]+p[B+1])/2-a;for(let ne=0;ne<_i;ne++){const we=F(B,ne),_e=F(B,ne+1),Te=F(B+1,ne+1),Y=F(B+1,ne);z(we,_e,Te,0,I,ee),z(we,Te,Y,0,I,ee)}}for(const B of[0,P.length-1]){const ee=p[B]-a,ne=B===0?ee+1:ee-1,we=P[B].p.map(te=>te[1]),_e=(Math.min(...we)+Math.max(...we))/2,Te=y.length/3;y.push(0,_e,ee),_.push(0,0,0,0),v.push(9,9,9,0);const Y=y.length/3;P[B].p.forEach(([te,ve])=>{y.push(te,ve,ee),_.push(0,0,0,0),v.push(9,9,9,0)});for(let te=0;te<_i;te++)z(Te,Y+te,Y+(te+1)%_i,0,_e,ne)}const D=(B,ee,ne,we,_e,Te,Y,te=1)=>{const ve=y.length/3;for(const ie of[-1,1])for(const xe of[-1,1])for(const $ of[-1,1])y.push(B+ie*we*(xe>0?te:1),ee+xe*_e,ne+$*Te*(xe>0?te:1)),_.push(0,0,0,Y),v.push(9,9,9,0);const K=(ie,xe,$,A)=>{z(ve+ie,ve+xe,ve+$,B,ee,ne),z(ve+ie,ve+$,ve+A,B,ee,ne)};K(0,1,3,2),K(4,5,7,6),K(0,1,5,4),K(2,3,7,6),K(0,2,6,4),K(1,3,7,5)};if(n){const B=e.box!==void 0||e.livery==="bus";for(const ee of[-1,1]){const ne=h+(B?.15:.42),we=s*(e.cab??1);B?D(ee*(we+.16),c+e.belt+.55,ne-a,.04,.24,.1,1):D(ee*(we+.06),c+e.belt+.04,ne-a,.085,.05,.07,1)}}e.livery==="taxi"&&D(0,c+l+.13,(u+f)/2-a-.1,.36,.11,.13,2,.85);const V=new Nt;return V.setAttribute("position",new Rt(y,3)),V.setAttribute("carA",new Rt(_,4)),V.setAttribute("carB",new Rt(v,4)),V.setIndex(E),V.computeVertexNormals(),V.computeBoundingSphere(),V}function P1(i,e){const[t,n,s]=i.half,r=-(n+i.clearance),a=h=>h-s,o=h=>h+r,l=e.side??[e.screen[0]+.4,Math.min(e.back[1]-.42,e.bed??99)],c=e.pillars?-99:(e.screen[1]+e.back[0])/2+.02;return{uGlass:{value:new Et(a(e.screen[0]),a(e.screen[1]),a(e.back[0]),a(e.back[1]))},uSide:{value:new Et(a(l[0]),a(l[1]),c===-99?-99:a(c),e.pillars??0)},uLampY:{value:new Et(o(e.head[0]),o(e.head[1]),o(e.rear[0]),o(e.rear[1]))},uLampX:{value:new Et(e.headX[0]*t,e.headX[1]*t,e.rearX[0]*t,e.rearX[1]*t)},uShape:{value:new Et(s,t,e.livery?L1[e.livery]:0,e.box!==void 0?a(e.box):e.bed!==void 0?a(e.bed):99)},uLevels:{value:new Et(o(e.belt),o(e.floor),o(n*2-.02),e.bed!==void 0?1:0)}}}const D1=`
  attribute vec4 carA; attribute vec4 carB; attribute vec4 aState;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN; varying vec4 vState;
  uniform vec4 uShape;
  ${Ki}`,I1=`
  vCarA = carA; vCarB = carB; vLocal = position; vLocalN = normal; vState = aState;
  if (aState.w > 0.5) {
    float ends = smoothstep(uShape.x * 0.45, uShape.x, abs(position.z));
    float lump = p2pNoise(position.xz * 3.1 + position.y * 2.3 + aState.w * 7.0) - 0.5;
    transformed -= normalize(vec3(position.x, 0.3 * position.y, position.z) + 1e-4) * (0.06 + 0.22 * ends) * (0.6 + lump);
  }`,F1=`
  uniform vec4 uGlass; uniform vec4 uSide; uniform vec4 uLampY; uniform vec4 uLampX; uniform vec4 uShape; uniform vec4 uLevels;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN; varying vec4 vState;`,U1=`
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
  }`,N1=`
  roughnessFactor = mix(mix(roughnessFactor, 0.6, vTrim), 0.05, vGlass);
  metalnessFactor = mix(mix(metalnessFactor, 0.0, vTrim), 0.85, vGlass);
  if (vState.w > 0.5) { roughnessFactor = max(roughnessFactor, 0.7); metalnessFactor *= 0.4; }`;function Th(i,e,t){const n=t?new of({color:16777215,metalness:.3,roughness:.38,clearcoat:1,clearcoatRoughness:.08,envMap:e,envMapIntensity:.8}):new Ps({color:16777215,metalness:.3,roughness:.4,envMap:e,envMapIntensity:.7});return n.onBeforeCompile=s=>{Object.assign(s.uniforms,i),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
${D1}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${I1}`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${F1}
${Ki}`).replace("#include <color_fragment>",`#include <color_fragment>
${U1}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${N1}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vLamp;`)},n.customProgramCacheKey=()=>t?"p2p-traffic-body-near":"p2p-traffic-body-far",n}const z1=`
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
  }`;function Rh(i,e=!1){const t=(e?[[0,.3],[.9,.5],[1,.3],[1,-.3],[.9,-.5],[0,-.3]]:[[0,.1],[.64,.44],[.72,.5],[.93,.5],[1,.36],[1,-.36],[.93,-.5],[.72,-.5],[.64,-.44],[0,-.1]]).map(([h,u])=>new rt(h,u)),n=new ha(t,i).rotateZ(-Math.PI/2),s=n.getAttribute("position"),r=n.index,a=new O,o=new O,l=new O,c=new O;for(let h=0;h<r.count;h+=3)if(a.fromBufferAttribute(s,r.getX(h)),o.fromBufferAttribute(s,r.getX(h+1)),l.fromBufferAttribute(s,r.getX(h+2)),c.subVectors(o,a).cross(l.clone().sub(a)),c.dot(a.add(o).add(l))<0){const u=r.getX(h+1);r.setX(h+1,r.getX(h+2)),r.setX(h+2,u)}return n.deleteAttribute("uv"),n.computeVertexNormals(),n}function O1(i){const e=new Ps({color:16777215,roughness:.85,envMap:i,envMapIntensity:.6});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLocal = position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <color_fragment>",`#include <color_fragment>
${z1}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
roughnessFactor = mix(0.9, 0.28, wheelMetal); metalnessFactor = mix(0.0, 0.9, wheelMetal);`)},e.customProgramCacheKey=()=>"p2p-traffic-wheel",e}const pl=[[15263972,23],[855568,19],[6053990,9],[3816770,7],[11120049,14],[2306639,7],[3105704,3],[9376784,6],[11740702,2],[3099194,2],[9075296,2],[7023130,1],[13208082,1],[14078660,4]],k1=pl.reduce((i,[,e])=>i+e,0),Ch=[2051724,11544092,2846271,13791770],Lh=[15263972,15263972,11740702,2306639,2846271,14263572];function B1(i,e,t){const n=(i>>>4)%1e3;if(e==="taxi")return t.setHex(15906565).offsetHSL(0,0,((i&15)-7.5)*.004);if(e==="bus")return t.setHex(Ch[n%Ch.length]);if(e==="truck")return t.setHex(Lh[n%Lh.length]);if(e==="van"&&n<550)return t.setHex(15527661);let s=n/1e3*k1;for(const[r,a]of pl)if(s-=a,s<0)return t.setHex(r).offsetHSL(0,0,((i&15)-7.5)*.003);return t.setHex(pl[0][0])}const ms=200,H1=55,G1=110;class aa{group=new en;kinds=[];wheels;m=new It;w=new It;q=new Qt;p=new O;s=new O;one=new O(1,1,1);c=new Qe;steer=new Qt;spin=new Qt;wq=new Qt;wp=new O;static X=new O(1,0,0);static Y=new O(0,1,0);rolled=new Map;at=new Map;clock=0;frames=0;constructor(e,t=null){const n=(r,a,o,l,c=!0)=>{const h=new jn(new Float32Array(o*4),4).setUsage(As);r.setAttribute("aState",h);const u=new qi(r,a,o);return u.count=0,u.castShadow=l,u.receiveShadow=!0,c&&u.setColorAt(0,this.c.setHex(16777215)),u.instanceMatrix.setUsage(As),this.group.add(u),{mesh:u,state:h,count:0}};for(const r of e){const a=C1(r.name),o=P1(r,a),l=n(Ah(r,a,.17,!0),Th(o,t,!0),ms,!0),c=n(Ah(r,a,1,!1),Th(o,t,!1),ms,!0);l.mesh.name=`traffic ${r.name}`,c.mesh.name=`traffic ${r.name} far`,this.kinds.push({kind:r,lines:a,near:l,far:c,wheelbase:a.axles[1]-a.axles[0]})}const s=O1(t);this.wheels=[n(Rh(14),s,ms*4,!1,!1),n(Rh(7,!0),s,ms*4,!1,!1)],this.wheels[0].mesh.name="traffic wheels",this.wheels[1].mesh.name="traffic wheels far",this.group.name="traffic"}update(e,t,n,s){this.clock+=n,this.frames++;const r=this.clock%.8<.4?1:0,a=Math.min(t,ms);for(const c of this.kinds)c.near.count=0,c.far.count=0;for(const c of this.wheels)c.count=0;const o=new Set;this.at.clear();for(let c=0;c<a;c++){const h=c*dr,u=e[h+jt.INDEX],f=e[h+jt.FLAGS],d=e[h+jt.SPEED],g=this.kinds[e[h+jt.KIND]]??this.kinds[1]??this.kinds[0];if(!g)break;this.p.set(e[h+jt.POS],e[h+jt.POS+1],e[h+jt.POS+2]),this.q.set(e[h+jt.ROT],e[h+jt.ROT+1],e[h+jt.ROT+2],e[h+jt.ROT+3]),this.m.compose(this.p,this.q,this.one);const m=this.p.distanceTo(s),x=m<H1,p=x?g.near:g.far,y=p.count++;p.mesh.setMatrixAt(y,this.m),p.mesh.setColorAt(y,B1(e[h+jt.LOOK],g.kind.name,this.c));const _=f&Ws.WRECK?1:0;p.state.setXYZW(y,f&Ws.BRAKING?1:0,_?0:f&Ws.LEFT?r:0,_?0:f&Ws.RIGHT?r:0,_);const v=g.lines,[E,M,R]=g.kind.half,P=-(M+g.kind.clearance),w=(this.rolled.get(u)??0)+(_?0:d*n/v.wheel);this.rolled.set(u,w%(Math.PI*2)),o.add(u);const b=_?0:Math.max(-.6,Math.min(.6,Math.atan(g.wheelbase*e[h+jt.CURVE]))),U=x?this.wheels[0]:this.wheels[1];this.spin.setFromAxisAngle(aa.X,-w);for(let N=0;N<(m<G1?2:0);N++){const L=v.tyre[N],k=v.axles[N]-R;this.steer.setFromAxisAngle(aa.Y,N===0?-b:0),this.wq.copy(this.steer).multiply(this.spin);for(const z of[-1,1]){if(U.count>=ms*4)break;this.wp.set(z*(E*(v.cab!==void 0&&N===0?v.cab:1)-L/2-.03),P+v.wheel,k),this.w.compose(this.wp,this.wq,this.s.set(L,v.wheel,v.wheel)),U.mesh.setMatrixAt(U.count++,this.w.premultiply(this.m))}}this.at.set(u,this.p.clone())}for(const c of this.rolled.keys())o.has(c)||this.rolled.delete(c);const l=this.frames<=3;for(const c of[...this.kinds.flatMap(h=>[h.near,h.far]),...this.wheels]){const h=c.mesh;l&&c.count===0&&h.setMatrixAt(c.count++,this.w.makeTranslation(0,-1e4,0)),h.count=c.count,h.visible=l||c.count>0,h.frustumCulled=!l,h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),c.state.needsUpdate=!0,c.count>0&&!l&&h.computeBoundingSphere()}}static HORN=Ws.HORN}const ho=["chase","hood","high"];class V1{constructor(e,t=-1/0){this.ground=e,this.sea=t}camera=new Un(62,1,.3,2600);mode="chase";dir=new O(0,0,-1);eye=new O;look=new O;fresh=!0;next(){return this.mode=ho[(ho.indexOf(this.mode)+1)%ho.length],this.fresh=!0,this.mode}cut(){this.fresh=!0}update(e,t){const n=new O(e[Se.POS],e[Se.POS+1],e[Se.POS+2]),s=new Qt(e[Se.ROT],e[Se.ROT+1],e[Se.ROT+2],e[Se.ROT+3]).normalize(),r=new O(0,0,-1).applyQuaternion(s),a=new O(e[Se.VEL],0,e[Se.VEL+2]),o=a.length();if(this.mode==="hood"){this.camera.position.copy(n).add(new O(0,.95,-.9).applyQuaternion(s)),this.camera.quaternion.copy(s),this.camera.fov=72,this.camera.updateProjectionMatrix();return}const l=r.clone().setY(0);l.lengthSq()<1e-6?l.copy(this.dir):l.normalize();const c=l.clone(),h=e[Se.SPEED];h>4&&o>4&&c.lerp(a.clone().divideScalar(o),Math.min(.75,(h-4)/12)).normalize();const u=this.fresh?1:1-Math.exp(-t*4.5);this.dir.lerp(c,u).setY(0).normalize();const f=this.mode==="high",d=f?16:6.4+Math.min(2.2,o*.035),g=f?22:2.35,m=n.clone().addScaledVector(this.dir,-d).add(new O(0,g,0)),x=this.ground.tunnel(n.x,n.y,n.z);if(x){const v=x.way,E=v.p[x.si],M=v.p[x.si+1],R=M[0]-E[0],P=M[2]-E[2],w=Math.hypot(R,P)||1,b=R/w,U=P/w,N=m.x-E[0],L=m.z-E[2],k=N*b+L*U,z=Math.max(-v.half+.8,Math.min(v.half-.8,-N*U+L*b));m.x=E[0]+b*k-U*z,m.z=E[2]+U*k+b*z;const F=(this.ground.tunnel(m.x,n.y,m.z)?.roof??x.roof)-.45;m.y=Math.min(m.y,F),m.y=Math.max(m.y,x.floor+.9)}else{m.y=Math.max(m.y,this.ground.surface(m.x,m.z,n.y+1.5)+.9,this.sea+.7);const v=this.ground.deckOver(m.x,m.z,n.y+.5);v<1/0&&(m.y=Math.min(m.y,v-.4))}const p=n.clone().addScaledVector(this.dir,f?6:5).add(new O(0,f?0:1,0)),y=this.fresh?1:1-Math.exp(-t*9);this.eye.lerp(m,y),this.look.lerp(p,this.fresh?1:1-Math.exp(-t*14)),this.fresh=!1,this.camera.position.copy(this.eye),this.camera.lookAt(this.look);const _=60+Math.min(14,o*.28);Math.abs(_-this.camera.fov)>.05&&(this.camera.fov=_,this.camera.updateProjectionMatrix())}}const Ph=80,Yr=26;function Dh(i,e){try{i.setPointerCapture(e)}catch{}}class W1{constructor(e){this.root=e,window.addEventListener("keydown",l=>{l.repeat||(this.keys.add(l.code),this.onKey(l.code),(l.code.startsWith("Arrow")||l.code==="Space")&&l.preventDefault())}),window.addEventListener("keyup",l=>this.keys.delete(l.code));const t=()=>{this.keys.clear(),this.wheel=null,this.pedals.clear(),this.paint()};window.addEventListener("blur",t),document.addEventListener("visibilitychange",()=>{document.hidden&&t()});const n=e.querySelector("#wheel");n.addEventListener("pointerdown",l=>{this.wheel={id:l.pointerId,x0:l.clientX,value:0},Dh(n,l.pointerId),this.paint()}),n.addEventListener("pointermove",l=>{this.wheel?.id===l.pointerId&&(this.wheel.value=Math.max(-1,Math.min(1,(l.clientX-this.wheel.x0)/Ph)),this.paint())});const s=l=>{this.wheel?.id===l.pointerId&&(this.wheel=null,this.paint())};for(const l of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(l,s);const r=e.querySelector("#gas"),a=e.querySelector("#brake"),o=(l,c)=>{if(!l)return!1;const h=l.getBoundingClientRect();return c.clientX>h.left-Yr&&c.clientX<h.right+Yr&&c.clientY>h.top-Yr&&c.clientY<h.bottom+Yr};for(const l of e.querySelectorAll("[data-pedal]")){const c=l.dataset.pedal,h=f=>{if(c==="hand")return["hand"];const d=[];return o(r,f)&&d.push("gas"),o(a,f)&&d.push("brake"),d.length?d:[c]};l.addEventListener("pointerdown",f=>{this.pedals.set(f.pointerId,h(f)),Dh(l,f.pointerId),this.paint(),f.preventDefault()}),l.addEventListener("pointermove",f=>{this.pedals.has(f.pointerId)&&(this.pedals.set(f.pointerId,h(f)),this.paint())});const u=f=>{this.pedals.delete(f.pointerId)&&this.paint()};for(const f of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(f,u)}}keys=new Set;keySteer=0;wheel=null;pedals=new Map;override=null;onKey=()=>{};held(e){for(const t of this.pedals.values())if(t.includes(e))return!0;return!1}paint(){for(const t of this.root.querySelectorAll("[data-pedal]"))t.classList.toggle("down",this.held(t.dataset.pedal));const e=this.root.querySelector("#wheel-knob");e&&(e.style.opacity=this.wheel?"1":"0",e.style.transform=`translateX(${(this.wheel?.value??0)*Ph}px)`,this.wheel&&(e.style.left=`${this.wheel.x0}px`))}sample(e){if(this.override)return this.override;const t=this.keys,n=t.has("ArrowLeft")||t.has("KeyA"),r=(t.has("ArrowRight")||t.has("KeyD")?1:0)-(n?1:0),a=(r===0?6:3.5)*e;this.keySteer+=Math.max(-a,Math.min(a,r-this.keySteer));const o=this.wheel?this.wheel.value:this.keySteer,l=t.has("ArrowUp")||t.has("KeyW")||this.held("gas"),c=t.has("ArrowDown")||t.has("KeyS")||this.held("brake"),h=t.has("Space")||this.held("hand");return{steer:Math.round(o*1e3),throttle:l?1e3:0,brake:c?1e3:0,handbrake:h?1:0}}}class q1{ctx=null;engine=null;skid=null;wind=null;noise=null;enabled=!0;start(){if(this.ctx){this.ctx.resume();return}const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=this.ctx=new e,n=t.createGain();n.gain.value=.5,n.connect(t.destination);const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=500,s.Q.value=1.2;const r=t.createGain();r.gain.value=0;const a=t.createOscillator();a.type="sawtooth";const o=t.createOscillator();o.type="square";const l=t.createGain();l.gain.value=.5,a.connect(s),o.connect(l).connect(s),s.connect(r).connect(n),a.start(),o.start(),this.engine={a,b:o,filter:s,gain:r};const c=t.createBuffer(1,t.sampleRate*2,t.sampleRate),h=c.getChannelData(0);for(let f=0;f<h.length;f++)h[f]=Math.random()*2-1;this.noise=c;const u=(f,d,g)=>{const m=t.createBufferSource();m.buffer=c,m.loop=!0;const x=t.createBiquadFilter();x.type=f,x.frequency.value=d,x.Q.value=g;const p=t.createGain();return p.gain.value=0,m.connect(x).connect(p).connect(n),m.start(),p};this.skid=u("bandpass",1700,2.5),this.wind=u("lowpass",500,.5)}burst(e,t,n,s){const r=this.ctx;if(!r||!this.noise||!this.enabled)return;const a=r.createBufferSource();a.buffer=this.noise;const o=r.createBiquadFilter();o.type=e,o.frequency.value=t,o.Q.value=.8;const l=r.createGain(),c=r.currentTime;l.gain.setValueAtTime(Math.min(1,n),c),l.gain.exponentialRampToValueAtTime(.001,c+s),a.connect(o).connect(l).connect(r.destination),a.start(c,Math.random()*1.5,s+.05)}splash(e){const t=Math.min(1,e/25);this.burst("lowpass",180,.5,.3+.4*t),this.burst("bandpass",1400,.9+t*.8,.2+.35*t),this.burst("highpass",3500,.6+t*.6,.12+.2*t)}horn(e){if(!this.ctx||!this.enabled||e>120)return;const t=this.ctx.currentTime,n=this.ctx.createGain(),s=.16/(1+e*e/400);n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(s,t+.02),n.gain.setValueAtTime(s,t+.5),n.gain.linearRampToValueAtTime(0,t+.58),n.connect(this.ctx.destination);for(const r of[392,494]){const a=this.ctx.createOscillator();a.type="sawtooth",a.frequency.value=r,a.connect(n),a.start(t),a.stop(t+.6)}}thump(e){this.burst("lowpass",260+e*20,.25+e*.06,.25+Math.min(.5,e*.03)),this.burst("bandpass",2400,e*.03,.18)}boom(){this.burst("lowpass",95,1.6,1.4),this.burst("lowpass",420,1.1,.5),this.burst("bandpass",1800,.7,.35),this.burst("highpass",3200,.35,.9)}glass(){this.burst("highpass",3200,.5,.7),this.burst("bandpass",6500,.35,.4)}update(e,t){const n=this.ctx;if(!n||!this.engine||!this.skid||!this.wind)return;const s=n.currentTime,r=this.enabled?1:0,a=e[Se.RPM],o=a/60*2;this.engine.a.frequency.setTargetAtTime(o,s,.03),this.engine.b.frequency.setTargetAtTime(o*.5,s,.03),this.engine.filter.frequency.setTargetAtTime(300+a*.25+t*1400,s,.05),this.engine.gain.gain.setTargetAtTime(r*(.1+.16*t+a/7200*.08),s,.05);let l=0;for(let h=0;h<4;h++){const u=Se.WHEELS+h*Se.WHEEL_STRIDE;e[u+Se.W_GROUNDED]&&(l=Math.max(l,Math.abs(e[u+Se.W_SLIP])/.1-1.2,Math.abs(e[u+Se.W_SLIP_TAN])/.14-1.2))}const c=Math.hypot(e[Se.VEL],e[Se.VEL+2]);this.skid.gain.setTargetAtTime(r*Math.min(.35,Math.max(0,l)*.2)*Math.min(1,c/4),s,.04),this.wind.gain.setTargetAtTime(r*Math.min(.3,c*c/9e3),s,.2)}}const Ot=i=>document.getElementById(i);class X1{speed=Ot("speed");gear=Ot("gear");rpm=Ot("rpm").firstElementChild;time=Ot("time");place=Ot("place");toastEl=Ot("toast");menu=Ot("menu");hurt=Ot("hurt");lastHurt=-1;toastTimer=0;lastKmh=-1;lastGear="";lastTime="";constructor(e,t){Ot("stamp").textContent=`${e} · ${t}`,Ot("b-menu").addEventListener("click",()=>this.toggleMenu()),document.addEventListener("pointerdown",n=>{this.menu.classList.contains("open")&&!this.menu.contains(n.target)&&n.target!==Ot("b-menu")&&this.toggleMenu(!1)})}toggleMenu(e){this.menu.classList.toggle("open",e??!this.menu.classList.contains("open"))}on(e,t){Ot(e).addEventListener("click",t)}mark(e,t){Ot(e).classList.toggle("on",t)}starts(e,t){const n=Ot("starts");e.forEach((s,r)=>{const a=document.createElement("button");a.textContent=s,a.addEventListener("click",()=>{t(r),this.toggleMenu(!1)}),n.appendChild(a)})}cars(e,t,n){const s=Ot("cars");e.forEach((r,a)=>{const o=document.createElement("button"),l=document.createElement("b");l.textContent=r.name;const c=document.createElement("small");c.textContent=r.says,o.append(l,c),o.classList.toggle("on",a===t),o.addEventListener("click",()=>{n(a),this.toggleMenu(!1)}),s.appendChild(o)})}strength(e,t,n,s){const r=Ot("strength"),a=Ot("strength-says");this.strengthSays=t,r.value=String(e),a.textContent=t(e);for(const o of["keydown","keyup","keypress"])r.addEventListener(o,l=>l.stopPropagation());r.addEventListener("input",()=>{a.textContent=t(Number(r.value))}),r.addEventListener("change",()=>{r.blur(),n(Number(r.value))}),Ot("strength-own").addEventListener("click",s)}strengthSays=()=>"";setStrength(e){Ot("strength").value=String(e),Ot("strength-says").textContent=this.strengthSays(e)}pickedCar(e){[...Ot("cars").children].forEach((t,n)=>t.classList.toggle("on",n===e))}setPlace(e){this.place.textContent=e}report(e){Ot("report").textContent=e}loading(e){Ot("loading-step").textContent=e}loadingNote(e){Ot("loading-note").textContent=e}anywhere(e,t,n){const s=Ot("place-q"),r=Ot("place-go"),a=Ot("place-found"),o=Ot("place-home");for(const c of["keydown","keyup","keypress"])s.addEventListener(c,h=>h.stopPropagation());o.style.display=e?"":"none",o.addEventListener("click",n);const l=async()=>{const c=s.value.trim();if(c){a.textContent="asking…";try{const h=await t(c);a.textContent=h.length?"":"nothing found by that name";for(const u of h){const f=document.createElement("button");f.textContent=u.label,f.addEventListener("click",()=>{a.textContent="going…",u.go()}),a.appendChild(f)}}catch(h){a.textContent=`the search failed: ${h instanceof Error?h.message:String(h)}`}}};r.addEventListener("click",()=>void l()),s.addEventListener("keydown",c=>{c.key==="Enter"&&l()})}loaded(){Ot("loading").remove()}fail(e){const t=Ot("loading-step");t.className="err",t.textContent=e}toast(e,t=2200){this.toastEl.textContent=e,this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove("show"),t)}update(e,t,n){const s=Math.round(Math.abs(e[Se.SPEED])*3.6);s!==this.lastKmh&&(this.speed.firstChild.textContent=String(s),this.lastKmh=s);const r=e[Se.GEAR]<0?"R":String(e[Se.GEAR]);r!==this.lastGear&&(this.gear.textContent=r,this.lastGear=r);const a=Math.min(1,e[Se.RPM]/7200);this.rpm.style.width=`${(a*100).toFixed(0)}%`,this.rpm.classList.toggle("red",a>.9);const o=e[Se.EXPLODED]>.5?2e3:e[Se.DROWNED]>.5?1e3:Math.round(e[Se.DAMAGE]*100);o!==this.lastHurt&&(this.hurt.textContent=o===2e3?"blown up":o===1e3?"engine flooded":o?`damage ${o}%  ·  engine ${Math.round(e[Se.POWER]*100)}%`:"",this.lastHurt=o);const l=Math.floor(t/60),c=`${n?"▶ ":""}${l}:${(t-l*60).toFixed(1).padStart(4,"0")}`;c!==this.lastTime&&(this.time.textContent=c,this.lastTime=c)}}const In=128,$1=132,Y1=20,K1=8,j1=70,nn={land:"#171c23",water:"#1c3a52",green:"#1e3828",paved:"#222831",pier:"#2a2f37",building:"#2e3540",minor:"#525b68",street:"#8d97a5",main:"#e6dfcb",path:"#4d6a55",car:"#ff5a3c",target:"#ffd23c",ink:"#f2f0ea",rim:"rgba(242,240,234,.35)"},Z1=new Set(["park","grass","garden","wood","pitch","playground"]),J1=new Set(["water","pool"]);function Q1(i){return/^(secondary|primary|trunk|motorway)$/.test(i)?2:/^(residential|unclassified|tertiary)$/.test(i)?1:0}class e_{constructor(e,t){this.page=e,this.places=e.starts.map(f=>({x:f.x,z:f.z,label:f.label.split(",")[0]}));const n=(f,d)=>(Math.floor(f/In)+512)*4096+Math.floor(d/In)+512,s=(f,d,g)=>{let m=1/0,x=-1/0,p=1/0,y=-1/0;for(const[_,v]of g)m=Math.min(m,_),x=Math.max(x,_),p=Math.min(p,v),y=Math.max(y,v);for(let _=Math.floor(m/In);_<=Math.floor(x/In);_++)for(let v=Math.floor(p/In);v<=Math.floor(y/In);v++){const E=n(_*In,v*In);let M=this.cells.get(E);M||(M={roads:[],buildings:[],areas:[],lines:[]},this.cells.set(E,M)),M[f].push(d)}};this.roads=[...e.roads,...(e.ways??[]).filter(f=>f.k==="tunnel").map(f=>({c:f.c,w:f.w,p:f.p.map(d=>[d[0],d[2]])}))],this.roads.forEach((f,d)=>s("roads",d,f.p)),e.buildings.forEach((f,d)=>s("buildings",d,f.r)),e.areas.forEach((f,d)=>s("areas",d,f.r)),e.lines.forEach((f,d)=>{(f.k==="path"||f.k==="steps")&&s("lines",d,f.p)}),this.stamp={roads:new Uint32Array(this.roads.length),buildings:new Uint32Array(e.buildings.length),areas:new Uint32Array(e.areas.length),lines:new Uint32Array(e.lines.length)};const r=12,a=Math.ceil((e.box[2]-e.box[0])/r),o=Math.ceil((e.box[3]-e.box[1])/r);this.water=document.createElement("canvas"),this.water.width=a,this.water.height=o;const l=this.water.getContext("2d"),c=l.createImageData(a,o);for(let f=0;f<o;f++)for(let d=0;d<a;d++){const g=t.at(e.box[0]+(d+.5)*r,e.box[1]+(f+.5)*r)<=e.ground.water+.6,m=(f*a+d)*4;c.data[m]=28,c.data[m+1]=58,c.data[m+2]=82,c.data[m+3]=g?255:0}l.putImageData(c,0,0);const h=f=>document.getElementById(f);this.mini=h("mini"),this.mini.width=this.mini.height=Math.round($1*this.dpr),this.miniCtx=this.mini.getContext("2d"),this.panel=h("map"),this.big=this.panel.querySelector("canvas"),this.bigCtx=this.big.getContext("2d"),this.still=document.createElement("canvas"),this.stillCtx=this.still.getContext("2d"),this.mini.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),this.toggle()}),h("map-close").addEventListener("click",()=>this.toggle(!1)),h("map-in").addEventListener("click",()=>this.setZoom(this.zoom*2)),h("map-out").addEventListener("click",()=>this.setZoom(this.zoom/2)),h("map-clear").addEventListener("click",()=>this.setTarget(null));let u=null;this.big.addEventListener("pointerdown",f=>{u={x:f.clientX,y:f.clientY}}),this.big.addEventListener("pointerup",f=>{if(!u||Math.hypot(f.clientX-u.x,f.clientY-u.y)>12){u=null;return}u=null;const d=this.big.getBoundingClientRect(),g=this.mapView();this.tap((f.clientX-d.left-d.width/2)/(g.scale/this.dpr)+g.cx,(f.clientY-d.top-d.height/2)/(g.scale/this.dpr)+g.cz)}),window.addEventListener("resize",()=>{this.stillView=null})}target=null;onTarget=()=>{};cells=new Map;stamp={roads:new Uint32Array(0),buildings:new Uint32Array(0),areas:new Uint32Array(0),lines:new Uint32Array(0)};pass=0;water;mini;miniCtx;panel;big;bigCtx;still;stillCtx;stillView=null;zoom=1;sinceMini=1;sinceMap=1;reach=180;car={x:0,z:0,heading:0,speed:0};dpr=Math.min(2,window.devicePixelRatio||1);places;roads;get open(){return this.panel.classList.contains("open")}toggle(e){this.panel.classList.toggle("open",e??!this.open),this.stillView=null,this.sinceMap=1}setZoom(e){this.zoom=Math.max(1,Math.min(8,e)),this.stillView=null,this.sinceMap=1}setTarget(e){this.target=e,this.sinceMini=this.sinceMap=1,this.onTarget(e)}tap(e,t){const n=Math.max(j1,14/(this.mapView().scale/this.dpr));for(const o of this.places)if(Math.hypot(o.x-e,o.z-t)<n*.5)return this.setTarget({...o}),this.target;let s=1/0,r=0,a=0;for(const o of this.near("roads",e,t,n)){const l=this.roads[o].p;for(let c=0;c+1<l.length;c++){const[h,u]=l[c],[f,d]=l[c+1],g=f-h,m=d-u,x=g*g+m*m,p=x>0?Math.max(0,Math.min(1,((e-h)*g+(t-u)*m)/x)):0,y=Math.hypot(h+g*p-e,u+m*p-t);y<s&&(s=y,r=h+g*p,a=u+m*p)}}return s>n?null:(this.setTarget({x:r,z:a,label:"the pin"}),this.target)}update(e,t,n,s,r){this.car={x:e,z:t,heading:n,speed:s};const a=150+Math.min(170,Math.abs(s)*4.5);this.reach+=(a-this.reach)*Math.min(1,r*1.5),this.sinceMini+=r,this.sinceMap+=r,this.sinceMini>=1/Y1&&(this.sinceMini=0,this.drawMini()),this.open&&this.sinceMap>=1/K1&&(this.sinceMap=0,this.drawMap())}near(e,t,n,s){const r=[],a=this.stamp[e],o=++this.pass;for(let l=Math.floor((t-s)/In);l<=Math.floor((t+s)/In);l++)for(let c=Math.floor((n-s)/In);c<=Math.floor((n+s)/In);c++){const h=this.cells.get((l+512)*4096+c+512);if(h)for(const u of h[e])a[u]!==o&&(a[u]=o,r.push(u))}return r}paint(e,t,n,s,r,a){const o=this.page;e.setTransform(1,0,0,1,0,0),e.fillStyle=nn.land,e.fillRect(0,0,t,n),e.translate(t/2+s.ox,n/2+s.oy),e.rotate(s.rot),e.scale(s.scale,s.scale),e.translate(-s.cx,-s.cz),e.imageSmoothingEnabled=!0,e.drawImage(this.water,o.box[0],o.box[1],o.box[2]-o.box[0],o.box[3]-o.box[1]);const l=f=>{e.moveTo(f[0][0],f[0][1]);for(let d=1;d<f.length;d++)e.lineTo(f[d][0],f[d][1]);e.closePath()},c=f=>{e.moveTo(f[0][0],f[0][1]);for(let d=1;d<f.length;d++)e.lineTo(f[d][0],f[d][1])},h=this.near("areas",s.cx,s.cz,r);for(const[f,d]of[[g=>Z1.has(g),nn.green],[g=>J1.has(g),nn.water],[g=>g==="pier",nn.pier],[g=>g==="plaza"||g==="parking",nn.paved]]){e.beginPath();for(const g of h){const m=o.areas[g];f(m.k)&&m.r.length>2&&l(m.r)}e.fillStyle=d,e.fill()}if(s.scale>.1){e.beginPath();for(const f of this.near("buildings",s.cx,s.cz,r)){const d=o.buildings[f];d.r.length>3&&l(d.r)}e.fillStyle=nn.building,e.fill()}if(e.lineCap="round",e.lineJoin="round",a){e.beginPath();for(const f of this.near("lines",s.cx,s.cz,r))c(o.lines[f].p);e.strokeStyle=nn.path,e.lineWidth=Math.max(1.2*this.dpr/s.scale,1.5),e.setLineDash([4,4]),e.stroke(),e.setLineDash([])}const u=this.near("roads",s.cx,s.cz,r);for(const[f,d,g]of[[0,nn.minor,.8],[1,nn.street,1.3],[2,nn.main,2.2]]){if(f===0&&s.scale<.2*this.dpr)continue;e.beginPath();let m=4;for(const x of u){const p=this.roads[x];Q1(p.c)===f&&(c(p.p),m=Math.max(m,p.w))}e.strokeStyle=d,e.lineWidth=Math.max(g*this.dpr/s.scale,f===2?Math.min(m,14)*.8:f===1?7:3.5),e.stroke()}e.setTransform(1,0,0,1,0,0)}toScreen(e,t,n,s,r){const a=(s-e.cx)*e.scale,o=(r-e.cz)*e.scale,l=Math.cos(e.rot),c=Math.sin(e.rot);return[t/2+e.ox+a*l-o*c,n/2+e.oy+a*c+o*l]}arrow(e,t,n,s,r){e.save(),e.translate(t,n),e.rotate(s),e.beginPath(),e.moveTo(0,-r),e.lineTo(r*.72,r*.8),e.lineTo(0,r*.4),e.lineTo(-r*.72,r*.8),e.closePath(),e.fillStyle=nn.car,e.strokeStyle="#fff",e.lineWidth=Math.max(1,r*.16),e.fill(),e.stroke(),e.restore()}drawMini(){const e=this.miniCtx,t=this.mini.width,n=this.dpr,s=t/2,r={cx:this.car.x,cz:this.car.z,scale:s*.86/this.reach,rot:-this.car.heading,ox:0,oy:s*.22};if(e.save(),e.beginPath(),e.arc(s,s,s,0,Math.PI*2),e.clip(),this.paint(e,t,t,r,this.reach*1.7,!0),this.target){const[l,c]=this.toScreen(r,t,t,this.target.x,this.target.z),h=l-s,u=c-s,f=Math.hypot(h,u),d=s-9*n,g=Math.hypot(this.target.x-this.car.x,this.target.z-this.car.z);if(e.fillStyle=nn.target,e.strokeStyle="#1a1a1a",e.lineWidth=1.5*n,f<=d)e.beginPath(),e.arc(l,c,5*n,0,Math.PI*2),e.fill(),e.stroke();else{const m=h/f,x=u/f,p=s+m*d,y=s+x*d,_=7*n;e.beginPath(),e.moveTo(p+m*_,y+x*_),e.lineTo(p-m*_*.5-x*_*.8,y-x*_*.5+m*_*.8),e.lineTo(p-m*_*.5+x*_*.8,y-x*_*.5-m*_*.8),e.closePath(),e.fill(),e.stroke(),e.font=`600 ${10*n}px system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle";const v=g>=1e3?`${(g/1e3).toFixed(1)} km`:`${Math.round(g/10)*10} m`,E=s+m*(d-20*n),M=s+x*(d-20*n);e.lineWidth=3*n,e.strokeStyle="rgba(10,12,16,.85)",e.strokeText(v,E,M),e.fillStyle=nn.target,e.fillText(v,E,M)}}this.arrow(e,s,s+r.oy,0,7.5*n),e.restore(),e.beginPath(),e.arc(s,s,s-n,0,Math.PI*2),e.strokeStyle=nn.rim,e.lineWidth=2*n,e.stroke();const a=s+Math.sin(r.rot)*(s-9*n),o=s-Math.cos(r.rot)*(s-9*n);e.font=`700 ${10*n}px system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.lineWidth=3*n,e.strokeStyle="rgba(10,12,16,.85)",e.strokeText("N",a,o),e.fillStyle=nn.ink,e.fillText("N",a,o)}mapView(){const e=this.big.width||1,t=this.big.height||1,n=this.page.box,s=Math.min(e/(n[2]-n[0]),t/(n[3]-n[1]))*.98;return this.zoom<=1?{cx:(n[0]+n[2])/2,cz:(n[1]+n[3])/2,scale:s,rot:0,ox:0,oy:0}:{cx:this.car.x,cz:this.car.z,scale:s*this.zoom,rot:0,ox:0,oy:0}}drawMap(){const e=this.big.getBoundingClientRect(),t=Math.round(e.width*this.dpr),n=Math.round(e.height*this.dpr);if(t<8||n<8)return;(this.big.width!==t||this.big.height!==n)&&(this.big.width=t,this.big.height=n,this.stillView=null);const s=this.mapView(),r=this.bigCtx,a=Math.round(40*this.dpr),o=this.stillView;(!o||o.scale!==s.scale||Math.abs((s.cx-o.cx)*s.scale)>a*.8||Math.abs((s.cz-o.cz)*s.scale)>a*.8)&&(this.still.width=t+a*2,this.still.height=n+a*2,this.paint(this.stillCtx,this.still.width,this.still.height,s,Math.hypot(this.still.width,this.still.height)/2/s.scale,s.scale>.45*this.dpr),this.stillView={...s});const l=this.stillView;r.setTransform(1,0,0,1,0,0),r.drawImage(this.still,Math.round(-a-(s.cx-l.cx)*s.scale),Math.round(-a-(s.cz-l.cz)*s.scale));const c=this.dpr;r.font=`600 ${11*c}px system-ui, sans-serif`,r.textBaseline="middle",r.textAlign="left";for(const f of this.places){const[d,g]=this.toScreen(s,t,n,f.x,f.z);r.beginPath(),r.arc(d,g,4*c,0,Math.PI*2),r.fillStyle=nn.ink,r.fill(),r.lineWidth=3*c,r.strokeStyle="rgba(10,12,16,.85)",r.strokeText(f.label,d+8*c,g),r.fillStyle=nn.ink,r.fillText(f.label,d+8*c,g)}if(this.target){const[f,d]=this.toScreen(s,t,n,this.target.x,this.target.z);r.beginPath(),r.arc(f,d,9*c,0,Math.PI*2),r.strokeStyle=nn.target,r.lineWidth=3*c,r.stroke(),r.beginPath(),r.arc(f,d,3.5*c,0,Math.PI*2),r.fillStyle=nn.target,r.fill()}const[h,u]=this.toScreen(s,t,n,this.car.x,this.car.z);this.arrow(r,h,u,this.car.heading,9*c)}probe(){return{open:this.open,zoom:this.zoom,target:this.target,reach:this.reach}}}const Gn=new URLSearchParams(location.search),t_=Gn.has("test"),fo=Gn.get("world")??"sf",Ih=1,ml=()=>new Promise(i=>requestAnimationFrame(()=>i())),n_=14;async function i_(){const i=new X1("e81d8cf 2026-11-23 04:15Z","");let e=null;const t=async H=>{i.loading(H),await ml()};await t("the sim core");const n=await lx(`./core/p2p_core.wasm${xs}`),s=["p2p_new_car","p2p_kind_count","p2p_car_count","p2p_traffic_drain","p2p_traffic_stride","p2p_vehicle_count","p2p_events_drain","p2p_panel","p2p_rubble_drain","p2p_count","p2p_inside","p2p_prop_origin","p2p_strength_set","p2p_strength_says"].filter(H=>typeof n[H]!="function");if(s.length)throw new Error(`this page (${"e81d8cf 2026-11-23 04:15Z".split(" ")[0]}) was given a sim core from another build (it has no ${s.join(", ")}). Reload; if that does not cure it, clear this site's data.`);const r=yf(Gn);let a,o,l=null;if(r){i.loadingNote("making this place on this device, from open map data"),await t(`the place: ${r.label}`);const H=await jx(r,[...ja(n).keys()],ye=>i.loading(ye));({blob:a,page:o,mask:l}=H),e={seconds:H.seconds,kept:H.kept}}else await t("the city"),[a,o]=await Promise.all([Fx(`./world/${fo}.p2pw${xs}`),fetch(`./world/${fo}.json${xs}`).then(H=>{if(!H.ok)throw new Error(`world ${fo}: ${H.status}`);return H.json()})]);const c=new Ix(a);c.setWays(o.ways??[]);const h=o.from.flat?"the ground here is level: no source of heights covers this place":"";document.getElementById("stamp").textContent=r?`e81d8cf 2026-11-23 04:15Z · ${r.label}: made on this device from Overture Maps ${o.from.release}${h?` · ${h}`:""} · ${o.attribution}`:`e81d8cf 2026-11-23 04:15Z · ${o.name} from ${o.from.repo} ${o.from.sha} · ${o.attribution}`;const u=nv(Gn),f=new rv(document.getElementById("view"),u),d=new V1(c,o.ground.sea??-1/0);await t("the ground");let g=null;o.photo&&(g=await new cf().loadAsync(`./world/${o.photo.file}${xs}`),g.colorSpace=fn,g.anisotropy=Math.min(8,f.renderer.capabilities.getMaxAnisotropy()));const m=mv(c,o,g,l);await m.ready,m.group.name="ground",f.scene.add(m.group),await t("the streets");const x=wv(c,o);x.group.name="streets",f.scene.add(x.group),await t("the bridges and tunnels");const p=Av(o,c);f.scene.add(p.group),await t("the sim");const y=cx(n),_=(()=>{try{return localStorage.getItem("p2p.car")}catch{return null}})();let v=Math.min(y.length-1,Math.max(0,Math.floor(Number(Gn.get("car")??_??0))||0));const E=Math.max(0,Math.min(120,Math.floor(Number(Gn.get("traffic")??36))||0)),M=(()=>{try{return localStorage.getItem("p2p.soft")}catch{return null}})();let R=(Gn.get("soft")??M??"1")!=="0";const P=H=>Math.max(0,Math.min(100,Math.round(y[H].param("STRENGTH")))),w=()=>{try{const H=/^(\d+):(\d+)$/.exec(localStorage.getItem("p2p.strength")??"");return H&&Number(H[1])===v?Math.min(100,Number(H[2])):null}catch{return null}},b=()=>{try{localStorage.setItem("p2p.strength",`${v}:${N}`)}catch{}},U=Gn.get("strength");let N=U!==null&&Number.isFinite(Number(U))?Math.max(0,Math.min(100,Math.round(Number(U)))):w()??P(v),L=new Wc(n,a,Ih,v);L.wantTraffic(E),await t("the buildings");const k=performance.now(),z=i1(o,H=>L.face(H),Ka(n)),F=performance.now()-k;z.group.name="buildings",f.scene.add(z.group),await t("what stands along the streets");const I=w1(c,o,ja(n));I.group.name="props",f.scene.add(I.group);const D=new Rv(o,f.reflections);D.group.name="shopfronts",f.scene.add(D.group);const V=new R1(o,c,H=>L.inside(H),H=>L.propOrigin(H),Vc(n),ja(n),Gc(n));f.scene.add(V.group);const B=new S1(z,D,V,Ka(n),H=>L.fallen(H));B.group.name="rubble",f.scene.add(B.group),await t("the car");const ee=H=>{const ye=y[H],We=new Lx({halfTrack:ye.param("HALF_TRACK"),axleFront:ye.param("AXLE_FRONT"),axleRear:ye.param("AXLE_REAR"),wheelRadius:ye.param("WHEEL_RADIUS"),overhang:ye.param("OVERHANG")},f.reflections,{...Dx(ye.name),roof:ye.param("CABIN_TOP")+.015});return We.group.name="car",We.loose.name="car smoke",f.scene.add(We.group,We.loose),We};let ne=ee(v),we=!1;const _e={frames:0,ms:0,worst:0};let Te=0,Y=!1;const te=ox(n),ve=new aa(te,f.reflections);f.scene.add(ve.group);const K=new W1(document.body),ie=new q1,xe=1/L.tickRate,$=L.stateLength,A=new Float32Array($),ce=new Float32Array($),J=new Float32Array($);let re={start:0,car:v,strength:N,inputs:[],ticks:0,digest:""},he=null,be={throttle:0,brake:0};const me=H=>{const ye=performance.now();L.drop(),L=new Wc(n,a,Ih,v),L.wantTraffic(E),L.setSoft(R),L.setStrength(N);const We=o.starts[H]??o.starts[0];return L.place(We.x,We.z,We.heading),ne.useSoft(R?L.softBuilt():null),we=!1,L.read(ce),A.set(ce),re={start:H,car:v,strength:N,inputs:[],ticks:0,digest:""},Te=0,I.reset(),D.reset(),B.reset(),V.reset(),W=0,d.cut(),i.setPlace(We.label),performance.now()-ye},Fe=H=>{if(!(H===v||!y[H])){v=H;try{localStorage.setItem("p2p.car",String(H))}catch{}f.scene.remove(ne.group,ne.loose),ne.group.traverse(ye=>{const We=ye;We.isMesh&&We.geometry.dispose()}),ne=ee(H),he=null,N=P(H),b(),i.setStrength(N),me(re.start),i.pickedCar(H),i.toast(`${y[H].name}: ${y[H].says}`,3200)}},st=(H=re.start)=>{he=null;const ye=me(H);i.toast(`restart in ${ye.toFixed(0)} ms`,1200)},at=()=>{if(he||re.ticks===0){i.toast("drive first, then replay it");return}const H={...re,inputs:re.inputs.slice(),digest:L.digest()};N!==H.strength&&(N=H.strength,i.setStrength(N)),me(H.start),he={of:H,at:0},i.toast(`replaying ${H.ticks} ticks from their inputs`)},C=()=>{if(!he)return;const{of:H}=he,ye=L.digest(),We=ye===H.digest;i.report(`replay of ${H.ticks} ticks (${(H.ticks*xe).toFixed(1)} s)
driven:   ${H.digest}
replayed: ${ye}
${We?"SAME: the run is its inputs":"DIFFERENT: this is a bug, please send this text"}`),i.toast(We?"replay ended where the drive did, to the bit":"replay DIFFERS from the drive",4e3),i.toggleMenu(!0),re={...H,inputs:H.inputs.slice()},he=null},S=[0,0,0,0];let W=0,se=!1,ue=0;const ae=()=>{let H;if(he){const ye=he.at*4,We=he.of.inputs;H={steer:We[ye],throttle:We[ye+1],brake:We[ye+2],handbrake:We[ye+3]},he.at++}else H=K.sample(xe);re.inputs.push(H.steer,H.throttle,H.brake,H.handbrake),A.set(ce),L.step(H),L.read(ce),re.ticks++,be=H,he&&he.at>=he.of.ticks&&C()};i.starts(o.starts.map(H=>H.label),H=>st(H)),i.cars(y.map(H=>({name:H.name,says:H.says})),v,Fe);const Ge=rx(n),Me=H=>{const ye=Hc(n,H),We=H===P(v)?` (the ${y[v].name}'s own)`:"";if(ye.boom!==null&&ye.boom<.5)return`${H}: blows up at the slightest contact${We}`;if(ye.hero)return`${H}: hero. All but indestructible: a blow scuffs and dents it and costs it nothing${We}`;const Ke=ye.times>=1?ye.times.toFixed(1):ye.times.toFixed(2);let nt=H===Ge.real?`${H}: as strong as a real car`:`${H}: ${Ke}× as strong as a real car`;return ye.boom!==null&&(nt+=`; blows up in a hit of ${Math.max(1,Math.round(ye.boom*3.6))} km/h`),ye.cap!==null&&(nt+=`; armoured, no dent deeper than ${Math.round(ye.cap*100)} cm`),nt+We},ze=H=>{H=Math.max(0,Math.min(100,Math.round(H))),i.setStrength(H),H!==N&&(N=H,b(),he=null,me(re.start),i.toast(`strength ${Me(H)}`,2600))};i.strength(N,Me,ze,()=>ze(P(v))),i.anywhere(r?.label??null,async H=>(await Xx(H)).map(We=>({label:We.label,go:()=>location.assign(hl(We))})),()=>location.assign(hl(null))),i.on("b-restart",()=>st()),i.on("b-camera",()=>i.toast(`camera: ${d.next()}`,900)),i.on("b-replay",()=>{i.toggleMenu(!1),at()}),i.on("b-sound",()=>{ie.enabled=!ie.enabled,i.mark("b-sound",ie.enabled)}),i.mark("b-soft",R),i.on("b-soft",()=>{R=!R;try{localStorage.setItem("p2p.soft",R?"1":"0")}catch{}i.mark("b-soft",R),he=null,me(re.start),i.toast(R?"soft-body damage: the body bends, panels come off, the engine takes it":"damage as four dents",2600)}),i.on("b-check",()=>void r_(n,i));let Ce=Gn.has("prof"),ge=0,Ee=null,je=null,Ie=null;i.on("b-frames",()=>{Ce=!Ce,i.mark("b-frames",Ce),Ce||i.report("")}),i.mark("b-frames",Ce);const pe=new e_(o,c),et=new Ct(new ca(2.2,2.2,160,20,1,!0).translate(0,80,0),new Us({color:16765500,transparent:!0,opacity:.4,blending:po,depthWrite:!1,side:ln,fog:!1}));et.name="target",et.visible=!1,et.frustumCulled=!1,f.scene.add(et);let G=0;pe.onTarget=H=>{et.visible=!!H,H&&(et.position.set(H.x,c.at(H.x,H.z),H.z),G=re.ticks,i.toast(`target: ${H.label}`,1400))},K.onKey=H=>{H==="KeyN"?pe.toggle():H==="Escape"?pe.toggle(!1):H==="KeyR"?st():H==="KeyC"?d.next():H==="KeyM"?i.toggleMenu():H==="KeyP"&&at()},window.addEventListener("pointerdown",()=>ie.start(),{passive:!0}),window.addEventListener("keydown",()=>ie.start()),window.addEventListener("resize",()=>f.resize(d.camera)),f.resize(d.camera),me(Number(Gn.get("start")??0)),i.loaded(),h&&i.toast(h,5e3);const le=[],fe=[];let de=performance.now(),oe=0;const Q=new O,Le=H=>{const ye=se?ue*xe:Math.min(.1,(H-de)/1e3);de=H,se?W=0:W+=ye;const We=performance.now();let Ke=0;for(;W>=xe&&Ke<12;)ae(),W-=xe,Ke++;Ke===12&&(W=0),se&&(Ke=ue,W=xe),ue=0;const nt=performance.now()-We;if(Ke){const lt=L.movedProps();S[0]=(S[0]??0)+lt.length/8,I.apply(lt),V.apply(lt,L.propsBase),B.apply(L.rubble(),De=>L.panel(De));for(const De of L.events())if(S[De.what]=(S[De.what]??0)+1,De.what===$t.BLOW)ie.thump(De.b);else if(De.what===$t.GLASS)ie.glass(),D.shatter(De.a,De.b);else if(De.what===$t.SNAPPED)ie.thump(De.b*.4);else if(De.what===$t.HORN){const Ae=ve.at.get(De.a);Ae&&ie.horn(Math.hypot(Ae.x-ce[Se.POS],Ae.z-ce[Se.POS+2]))}else if(De.what===$t.WRECK)ie.thump(De.b*.6);else if(De.what===$t.SPLASH)ie.splash(De.a),ne.splash(De.a),i.toast("in the bay",1600);else if(De.what===$t.PANEL){const Ae=L.panel(De.a);Ae&&(B.gaveWay(Ae,De.b),ie.thump(Math.min(9,2+De.b*.2)))}else if(De.what===$t.FELL){const Ae=o.buildings[De.a];if(Ae){let Pe=0,Xe=0;for(const[_t,Mt]of Ae.r)Pe+=_t,Xe+=Mt;Pe/=Ae.r.length,Xe/=Ae.r.length;let ft=0;for(const[_t,Mt]of Ae.r)ft=Math.max(ft,Math.hypot(_t-Pe,Mt-Xe));B.fell(De.a,{x:Pe,z:Xe,r:ft,y:Ae.y0,high:Ae.y1-Ae.y0})}ie.thump(9),i.toast("a building came down",2200)}else De.what===$t.EXPLODED?(ie.boom(),i.toast("the car blew up",2600)):De.what===$t.CAME_OFF&&ce[Se.EXPLODED]<.5?(ie.thump(4),i.toast(De.a>=10?"a wheel came off":`the ${Bc[De.a]??"panel"} came off`,1800)):ce[Se.EXPLODED]>.5||(De.what===$t.FIXING?(ie.thump(1.2),ne.fixingGave(De.a)):De.what===$t.PANE?De.b>=2&&(ie.glass(),ne.paneGone(De.a)):De.what===$t.THING&&(ie.thump(De.b>=2?3:2),ne.thingOff(De.a,De.b>=2),De.b>=2&&i.toast(`the ${sx[De.a]??"thing"} fell out`,1800)))}const wt=W/xe;for(let lt=0;lt<$;lt++)J[lt]=A[lt]+(ce[lt]-A[lt])*wt;for(let lt=0;lt<4;lt++){const De=Se.WHEELS+lt*Se.WHEEL_STRIDE+Se.W_ANGLE;Math.abs(ce[De]-A[De])>3&&(J[De]=ce[De])}if(Ee){for(let lt=0;lt<4;lt++)J[Se.CRUSH+lt]=Ee[lt];J[Se.POWER]=Ee[4]}if(R&&Ke){const lt=ce[Se.SOFT_AWAKE]>.5;if(lt||we){const De=performance.now(),Ae=L.softNow();ne.soft(Ae.nodes,ce[Se.HOLDS],Ae.loose,ce[Se.THINGS_GONE]),we=lt||Ae.loose.length>0;const Pe=performance.now()-De;_e.frames++,_e.ms+=Pe,_e.worst=Math.max(_e.worst,Pe)}}if(ne.update(J,be.brake>0&&ce[Se.GEAR]>0,ye),d.update(J,ye),je){const lt=new O(J[Se.POS],J[Se.POS+1],J[Se.POS+2]),De=new Qt(J[Se.ROT],J[Se.ROT+1],J[Se.ROT+2],J[Se.ROT+3]).normalize();d.camera.position.set(...je).applyQuaternion(De).add(lt),d.camera.lookAt(lt.x,lt.y+.2,lt.z),d.camera.fov=50,d.camera.updateProjectionMatrix()}Ie&&(d.camera.position.set(Ie[0][0],Ie[0][1],Ie[0][2]),d.camera.lookAt(Ie[1][0],Ie[1][1],Ie[1][2]),d.camera.fov=62,d.camera.updateProjectionMatrix()),m.update(d.camera.position),I.update(d.camera.position),x.update(d.camera.position),D.update(ye,d.camera.position),V.update(d.camera.position),B.update(ye);{const lt=L.traffic();ve.update(lt.cars,lt.count,ye,d.camera.position)}Q.set(J[Se.POS],J[Se.POS+1],J[Se.POS+2]),f.follow(Q,d.camera.position),ie.update(ce,be.throttle/1e3),i.update(ce,re.ticks*xe,!!he),ce[Se.DROWNED]>.5&&ce[Se.FLOOD]>.98&&Math.abs(ce[Se.SPEED])<.6?(ge+=ye,ge>3.5&&!he&&(ge=0,st(),i.toast("sunk. back on the road",2400))):ge=0,ce[Se.EXPLODED]>.5&&(Te+=ye,Te>5&&!he&&!Y&&(st(),i.toast("blown up. back on the road",2400)));{const lt=new Qt(J[Se.ROT],J[Se.ROT+1],J[Se.ROT+2],J[Se.ROT+3]).normalize(),De=new O(0,0,-1).applyQuaternion(lt);pe.update(J[Se.POS],J[Se.POS+2],Math.atan2(De.x,-De.z),J[Se.SPEED],ye);const Ae=pe.target;if(Ae&&Math.hypot(Ae.x-J[Se.POS],Ae.z-J[Se.POS+2])<n_){re.ticks<G&&(G=0);const Pe=(re.ticks-G)*xe;i.toast(`there: ${Ae.label}, ${Math.floor(Pe/60)}:${(Pe%60).toFixed(1).padStart(4,"0")} from setting it`,3200),pe.setTarget(null)}}if(f.draw(d.camera),le.push(ye*1e3),fe.push(nt),le.length>600&&(le.shift(),fe.shift()),oe+=ye,Ce&&oe>1){oe=0;const lt=B.counts();i.report(`${Fh(le,fe,f,d.camera,I.counts)}
walls: ${L.count(Jt.WALLS)} stood as ${L.count(Jt.WALL_COLLIDERS)} slabs; ${L.count(Jt.BROKEN)} panels gone, ${L.count(Jt.FALLEN)} buildings down; bodies ${L.count(Jt.AWAKE)} awake of ${L.count(Jt.BODIES)}; drawn ${lt.pieces} pieces, ${lt.parts} parts, ${lt.breached} buildings with holes`)}requestAnimationFrame(Le)};requestAnimationFrame(Le);let Ne=null,ke=0,Ye=null;t_&&(window.__p2p={ready:!0,page:o,made:e,scene:f.scene,state:()=>Array.from(ce),tick:()=>re.ticks,digest:()=>L.digest(),drive:H=>{K.override=H},advance:H=>{for(let ye=0;ye<H;ye++)ae();ue+=H},freeze:H=>{se=H},restart:st,startReplay:at,place:(H,ye,We)=>{L.place(H,ye,We),L.read(ce),A.set(ce),d.cut()},placeAt:(H,ye,We,Ke)=>{L.placeAt(H,ye,We,Ke),L.read(ce),A.set(ce),d.cut()},seen:()=>({moved:S[0],blows:S[$t.BLOW],snapped:S[$t.SNAPPED],glass:S[$t.GLASS],panels:S[$t.PANEL]??0,fell:S[$t.FELL]??0,cameOff:S[$t.CAME_OFF]??0,exploded:S[$t.EXPLODED]??0}),panel:H=>L.panel(H),panelCount:()=>L.panelCount,panelsOf:H=>{(!Ne||Ye!==L)&&(Ne=new Map,ke=0,Ye=L);for(let ye=ke;ye<L.panelCount;ye++){const We=L.panel(ye);let Ke=Ne.get(We.building);Ke||Ne.set(We.building,Ke=[]),Ke.push(ye)}return ke=L.panelCount,(Ne.get(H)??[]).map(ye=>L.panel(ye))},panelKinds:()=>Ka(n),inside:H=>L.inside(H),insideDrawn:H=>V.drawn(H),roomKinds:()=>Gc(n),propKindNames:()=>Vc(n),insides:()=>({sim:{planned:L.count(Jt.PLANNED),partitions:L.count(Jt.PARTITIONS),held:L.count(Jt.HELD),things:L.count(Jt.THINGS),armed:L.count(Jt.ARMED),own:L.count(Jt.OWN)},drawn:V.counts()}),propOrigin:H=>L.propOrigin(H),propsBase:()=>L.propsBase,walls:()=>({sim:{bodies:L.count(Jt.BODIES),awake:L.count(Jt.AWAKE),walls:L.count(Jt.WALLS),colliders:L.count(Jt.WALL_COLLIDERS),pieces:L.count(Jt.PIECES),parts:L.count(Jt.PARTS),broken:L.count(Jt.BROKEN),fallen:L.count(Jt.FALLEN)},drawn:B.counts()}),replaying:()=>!!he,camera:H=>{d.mode=H,d.cut()},cars:()=>y.map(H=>H.name),car:H=>Fe(H),strength:()=>N,strengthOwn:H=>P(H),strengthSays:H=>Hc(n,H),setStrength:H=>ze(H),body:()=>({fixings:Bc.map((H,ye)=>({name:H,...ye?L.fixings(ye):{held:0,built:0}})).slice(1),holds:ce[Se.HOLDS],glass:ce[Se.GLASS],thingsOff:ce[Se.THINGS_OFF],thingsGone:ce[Se.THINGS_GONE],held:ce[Se.FIXINGS],wheelsOff:ce[Se.WHEELS_OFF],drawn:ne.drawn(),said:{fixings:S[$t.FIXING]??0,panes:S[$t.PANE]??0,things:S[$t.THING]??0},skinning:{..._e}}),shove:(H,ye)=>{L.shove(H,ye)},holdBlown:H=>{Y=H},traffic:()=>{const H=L.traffic(),ye=[];for(let We=0;We<H.count;We++){const Ke=We*dr,nt=H.cars;ye.push({i:nt[Ke+jt.INDEX],x:nt[Ke+jt.POS],y:nt[Ke+jt.POS+1],z:nt[Ke+jt.POS+2],speed:nt[Ke+jt.SPEED],flags:nt[Ke+jt.FLAGS],kind:nt[Ke+jt.KIND],name:te[nt[Ke+jt.KIND]]?.name??"?",curve:nt[Ke+jt.CURVE]})}return ye},map:{toggle:H=>pe.toggle(H),zoom:H=>pe.setZoom(H),tap:(H,ye)=>pe.tap(H,ye),clear:()=>pe.setTarget(null),state:()=>pe.probe()},show:H=>{Ee=H},look:H=>{je=H},view:(H,ye)=>{Ie=H&&ye?[H,ye]:null},ground:(H,ye)=>c.at(H,ye),selftest:H=>Fl(n.p2p_selftest(H)),frames:()=>Fh(le,fe,f,d.camera,I.counts),info:()=>({calls:f.renderer.info.render.calls,triangles:f.renderer.info.render.triangles}),programs:()=>(f.renderer.info.programs??[]).map(H=>{const ye=H;return ye.name?`${ye.type} (${ye.name})`:ye.type}),face:H=>L.face(H),mark:H=>z.mark(H),faces:()=>({...z.faces(),buildMs:F}),project:(H,ye,We)=>{const Ke=new O(H,ye,We).project(d.camera);if(Ke.z<-1||Ke.z>1)return null;const nt=f.renderer.domElement;return[(Ke.x*.5+.5)*nt.clientWidth,(.5-Ke.y*.5)*nt.clientHeight]}})}function uo(i,e){return i[Math.min(i.length-1,Math.floor(i.length*e))]??0}function s_(i,e){const t=new la().setFromProjectionMatrix(new It().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)),n=new fi,s=[];for(const r of i.scene.children){if(!r.name)continue;let a=0,o=0;r.traverseVisible(l=>{const c=l;if(!c.isMesh)return;const h=l,u=h.isInstancedMesh?h.boundingSphere:c.geometry.boundingSphere;if(u&&(n.copy(u).applyMatrix4(c.matrixWorld),!t.intersectsSphere(n)))return;const f=c.geometry,d=(f.index?f.index.count:f.getAttribute("position").count)/3;a+=d*(h.isInstancedMesh?h.count:1),o++}),s.push(`${r.name} ${Math.round(a/1e3)}k/${o}`)}return s.join(", ")}function Fh(i,e,t,n,s){const r=[...i].sort((c,h)=>c-h),a=[...e].sort((c,h)=>c-h),o=t.renderer.info.render,l=t.renderer.getDrawingBufferSize(new rt);return[`frames (last ${i.length}): median ${uo(r,.5).toFixed(1)} ms, 95th ${uo(r,.95).toFixed(1)}, worst ${(r[r.length-1]??0).toFixed(1)}`,`sim a frame: median ${uo(a,.5).toFixed(2)} ms, worst ${(a[a.length-1]??0).toFixed(2)}`,`drawn: ${o.triangles.toLocaleString()} triangles in ${o.calls} calls (shadow pass included), ${l.x} x ${l.y} px (dpr ${t.knobs.dpr}), shadows ${t.knobs.shadows?"on":"off"}`,`in view, thousand triangles / meshes: ${s_(t,n)}`,`props: ${Object.entries(s).map(([c,h])=>`${h} ${c}`).join(", ")}`,navigator.userAgent].join(`
`)}async function r_(i,e){e.report("running the reference drive…"),await ml(),await ml();let t=null;try{const l=await fetch(`./core/selftest.json${xs}`);l.ok&&(t=await l.json())}catch{}const n=t?.ticks??12e3,s=performance.now(),r=Fl(i.p2p_selftest(n)),a=performance.now()-s,o=t?r===t.digest?"SAME as the build machine: this device runs the same race":"DIFFERENT from the build machine: please send this text":"no reference digest shipped with this build";e.report([`reference drive, ${n} ticks (${(n/i.p2p_tick_rate()).toFixed(0)} s of driving)`,`this device: ${r}`,`reference:   ${t?.digest??"none"}${t?` (${t.made})`:""}`,o,`${a.toFixed(0)} ms: ${(a/n*1e3).toFixed(1)} µs a tick, one car, world build included`,navigator.userAgent].join(`
`))}i_().catch(i=>{console.error(i);const e=document.getElementById("loading-step");if(e){if(e.className="err",e.textContent=`could not start: ${i instanceof Error?i.message:String(i)}`,yf(Gn)){const t=document.createElement("a");t.href=hl(null),t.textContent="back to San Francisco",t.style.cssText="color:#f2f0ea;pointer-events:auto",e.after(t)}}else document.body.insertAdjacentHTML("beforeend",`<div style="position:fixed;inset:auto 8px 8px 8px;z-index:99;background:#400;color:#fff;padding:8px;border-radius:8px">${String(i)}</div>`)});
