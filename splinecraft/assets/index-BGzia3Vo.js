(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _i="180",Ou=0,el=1,zu=2,wc=1,Tc=2,Ln=3,En=0,Tt=1,Ht=2,Ct=0,Qi=1,gr=2,tl=3,nl=4,ku=5,pi=100,Hu=101,Gu=102,Vu=103,Wu=104,Xu=200,Yu=201,Qu=202,qu=203,ba=204,Ca=205,Ku=206,ju=207,Zu=208,Ju=209,$u=210,eh=211,th=212,nh=213,ih=214,Da=0,vr=1,Ra=2,ji=3,Ia=4,Pa=5,La=6,Ba=7,bc=0,sh=1,rh=2,Bn=0,ah=1,oh=2,lh=3,ch=4,uh=5,hh=6,dh=7,Cc=300,Zi=301,Ji=302,Ua=303,Fa=304,Tr=306,_s=1e3,An=1001,Na=1002,yt=1003,fh=1004,Ps=1005,et=1006,Or=1007,Sn=1008,vt=1009,Dc=1010,Rc=1011,ys=1012,yo=1013,vi=1014,cn=1015,Tn=1016,Eo=1017,wo=1018,$i=1020,Ic=35902,Pc=35899,Lc=1021,Bc=1022,Ut=1023,Es=1026,es=1027,xi=1028,To=1029,bo=1030,Co=1031,Do=1033,hr=33776,dr=33777,fr=33778,pr=33779,Oa=35840,za=35841,ka=35842,Ha=35843,Ga=36196,Va=37492,Wa=37496,Xa=37808,Ya=37809,Qa=37810,qa=37811,Ka=37812,ja=37813,Za=37814,Ja=37815,$a=37816,eo=37817,to=37818,no=37819,io=37820,so=37821,ro=36492,ao=36494,oo=36495,lo=36283,co=36284,uo=36285,ho=36286,gn=3200,ph=3201,Ro=0,mh=1,sn="",nt="srgb",Zn="srgb-linear",xr="linear",rt="srgb",bi=7680,il=519,gh=512,vh=513,xh=514,Uc=515,Mh=516,Ah=517,Sh=518,_h=519,sl=35044,Mr="300 es",_n=2e3,Ar=2001;class On{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zr=Math.PI/180,fo=180/Math.PI;function bs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function yh(n,e){return(n%e+e)%e}function kr(n,e,t){return(1-t)*n+t*e}function as(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==f||l!==d||u!==g){let m=1-o;const p=c*f+l*d+u*g+h*v,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),E=Math.atan2(C,p*M);m=Math.sin(m*E)/C,o=Math.sin(o*E)/C}const A=o*M;if(c=c*m+f*A,l=l*m+d*A,u=u*m+g*A,h=h*m+v*A,m===1-o){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-o*d,e[t+2]=l*g+u*d+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),h=o(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hr.copy(this).projectOnVector(e),this.sub(Hr)}reflect(e){return this.sub(Hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new N,rl=new Mi;class Ve{constructor(e,t,i,s,r,a,o,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],M=s[1],x=s[4],A=s[7],C=s[2],E=s[5],w=s[8];return r[0]=a*v+o*M+c*C,r[3]=a*m+o*x+c*E,r[6]=a*p+o*A+c*w,r[1]=l*v+u*M+h*C,r[4]=l*m+u*x+h*E,r[7]=l*p+u*A+h*w,r[2]=f*v+d*M+g*C,r[5]=f*m+d*x+g*E,r[8]=f*p+d*A+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*l-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gr.makeScale(e,t)),this}rotate(e){return this.premultiply(Gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new Ve;function Fc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Eh(){const n=Sr("canvas");return n.style.display="block",n}const al={};function ws(n){n in al||(al[n]=!0,console.warn(n))}function wh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const ol=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ll=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Th(){const n={enabled:!0,workingColorSpace:Zn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===sn?xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ws("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ws("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zn]:{primaries:e,whitePoint:i,transfer:xr,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nt},outputColorSpaceConfig:{drawingBufferColorSpace:nt}},[nt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nt}}}),n}const Je=Th();function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ci;class bh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ci===void 0&&(Ci=Sr("canvas")),Ci.width=e.width,Ci.height=e.height;const s=Ci.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ci}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Un(t[i]/255)*255):t[i]=Un(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ch=0;class Io{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vr(s[a].image)):r.push(Vr(s[a]))}else r=Vr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Vr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dh=0;const Wr=new N;class Dt extends On{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=An,s=An,r=et,a=Sn,o=Ut,c=vt,l=Dt.DEFAULT_ANISOTROPY,u=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=bs(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wr).x}get height(){return this.source.getSize(Wr).y}get depth(){return this.source.getSize(Wr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Cc;Dt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,A=(d+1)/2,C=(p+1)/2,E=(u+f)/4,w=(h+v)/4,b=(g+m)/4;return x>A&&x>C?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=E/i,r=w/i):A>C?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=E/s,r=b/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=w/r,s=b/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-v)/M,this.z=(f-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rh extends On{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Dt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Io(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pt extends Rh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Po extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _r extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ih extends pt{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new _r(null,e,t,i),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class yi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ls.copy(i.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),Bs.subVectors(this.max,os),Di.subVectors(e.a,os),Ri.subVectors(e.b,os),Ii.subVectors(e.c,os),kn.subVectors(Ri,Di),Hn.subVectors(Ii,Ri),ni.subVectors(Di,Ii);let t=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ni.z,ni.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ni.z,0,-ni.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ni.y,ni.x,0];return!Xr(t,Di,Ri,Ii,Bs)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,Di,Ri,Ii,Bs))?!1:(Us.crossVectors(kn,Hn),t=[Us.x,Us.y,Us.z],Xr(t,Di,Ri,Ii,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new N,new N,new N,new N,new N,new N,new N,new N],hn=new N,Ls=new yi,Di=new N,Ri=new N,Ii=new N,kn=new N,Hn=new N,ni=new N,os=new N,Bs=new N,Us=new N,ii=new N;function Xr(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ii.fromArray(n,r);const o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),c=e.dot(ii),l=t.dot(ii),u=i.dot(ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ph=new yi,ls=new N,Yr=new N;class Ei{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ph.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ls,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(Yr)),this.expandByPoint(ls.copy(e.center).sub(Yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Dn=new N,Qr=new N,Fs=new N,Gn=new N,qr=new N,Ns=new N,Kr=new N;class Nc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Qr.copy(e).add(t).multiplyScalar(.5),Fs.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Qr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Fs),o=Gn.dot(this.direction),c=-Gn.dot(Fs),l=Gn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Qr).addScaledVector(Fs,f),d}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const i=Dn.dot(this.direction),s=Dn.dot(Dn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,i,s,r){qr.subVectors(t,e),Ns.subVectors(i,e),Kr.crossVectors(qr,Ns);let a=this.direction.dot(Kr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const c=o*this.direction.dot(Ns.crossVectors(Gn,Ns));if(c<0)return null;const l=o*this.direction.dot(qr.cross(Gn));if(l<0||c+l>a)return null;const u=-o*Gn.dot(Kr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,s,r,a,o,c,l,u,h,f,d,g,v,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,h,f,d,g,v,m)}set(e,t,i,s,r,a,o,c,l,u,h,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,v=l*h;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,v=l*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lh,e,Bh)}lookAt(e,t,i){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Vn.crossVectors(i,$t),Vn.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Vn.crossVectors(i,$t)),Vn.normalize(),Os.crossVectors($t,Vn),s[0]=Vn.x,s[4]=Os.x,s[8]=$t.x,s[1]=Vn.y,s[5]=Os.y,s[9]=$t.y,s[2]=Vn.z,s[6]=Os.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],x=i[7],A=i[11],C=i[15],E=s[0],w=s[4],b=s[8],S=s[12],_=s[1],D=s[5],U=s[9],L=s[13],B=s[2],O=s[6],k=s[10],Y=s[14],H=s[3],Z=s[7],re=s[11],ce=s[15];return r[0]=a*E+o*_+c*B+l*H,r[4]=a*w+o*D+c*O+l*Z,r[8]=a*b+o*U+c*k+l*re,r[12]=a*S+o*L+c*Y+l*ce,r[1]=u*E+h*_+f*B+d*H,r[5]=u*w+h*D+f*O+d*Z,r[9]=u*b+h*U+f*k+d*re,r[13]=u*S+h*L+f*Y+d*ce,r[2]=g*E+v*_+m*B+p*H,r[6]=g*w+v*D+m*O+p*Z,r[10]=g*b+v*U+m*k+p*re,r[14]=g*S+v*L+m*Y+p*ce,r[3]=M*E+x*_+A*B+C*H,r[7]=M*w+x*D+A*O+C*Z,r[11]=M*b+x*U+A*k+C*re,r[15]=M*S+x*L+A*Y+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*o*f+i*l*f+s*o*d-i*c*d)+v*(+t*c*d-t*l*f+r*a*f-s*a*d+s*l*u-r*c*u)+m*(+t*l*h-t*o*d-r*a*h+i*a*d+r*o*u-i*l*u)+p*(-s*o*u-t*c*h+t*o*f+s*a*h-i*a*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=h*m*l-v*f*l+v*c*d-o*m*d-h*c*p+o*f*p,x=g*f*l-u*m*l-g*c*d+a*m*d+u*c*p-a*f*p,A=u*v*l-g*h*l+g*o*d-a*v*d-u*o*p+a*h*p,C=g*h*c-u*v*c-g*o*f+a*v*f+u*o*m-a*h*m,E=t*M+i*x+s*A+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=M*w,e[1]=(v*f*r-h*m*r-v*s*d+i*m*d+h*s*p-i*f*p)*w,e[2]=(o*m*r-v*c*r+v*s*l-i*m*l-o*s*p+i*c*p)*w,e[3]=(h*c*r-o*f*r-h*s*l+i*f*l+o*s*d-i*c*d)*w,e[4]=x*w,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*w,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*w,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*d+t*c*d)*w,e[8]=A*w,e[9]=(g*h*r-u*v*r-g*i*d+t*v*d+u*i*p-t*h*p)*w,e[10]=(a*v*r-g*o*r+g*i*l-t*v*l-a*i*p+t*o*p)*w,e[11]=(u*o*r-a*h*r-u*i*l+t*h*l+a*i*d-t*o*d)*w,e[12]=C*w,e[13]=(u*v*s-g*h*s+g*i*f-t*v*f-u*i*m+t*h*m)*w,e[14]=(g*o*s-a*v*s-g*i*c+t*v*c+a*i*m-t*o*m)*w,e[15]=(a*h*s-u*o*s+u*i*c-t*h*c-a*i*f+t*o*f)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,g=r*h,v=a*u,m=a*h,p=o*h,M=c*l,x=c*u,A=c*h,C=i.x,E=i.y,w=i.z;return s[0]=(1-(v+p))*C,s[1]=(d+A)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(d-A)*E,s[5]=(1-(f+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+x)*w,s[9]=(m-M)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const l=1/r,u=1/a,h=1/o;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,t.setFromRotationMatrix(dn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=_n,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===_n)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ar)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=_n,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===_n)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ar)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pi=new N,dn=new je,Lh=new N(0,0,0),Bh=new N(1,1,1),Vn=new N,Os=new N,$t=new N,cl=new je,ul=new Mi;class wn{constructor(e=0,t=0,i=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ul.setFromEuler(this),this.setFromQuaternion(ul,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Oc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uh=0;const hl=new N,Li=new Mi,Rn=new je,zs=new N,cs=new N,Fh=new N,Nh=new Mi,dl=new N(1,0,0),fl=new N(0,1,0),pl=new N(0,0,1),ml={type:"added"},Oh={type:"removed"},Bi={type:"childadded",child:null},jr={type:"childremoved",child:null};class Ft extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new N,t=new wn,i=new Mi,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ve}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(dl,e)}rotateY(e){return this.rotateOnAxis(fl,e)}rotateZ(e){return this.rotateOnAxis(pl,e)}translateOnAxis(e,t){return hl.copy(e).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dl,e)}translateY(e){return this.translateOnAxis(fl,e)}translateZ(e){return this.translateOnAxis(pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zs.copy(e):zs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(cs,zs,this.up):Rn.lookAt(zs,cs,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Rn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ml),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oh),jr.child=e,this.dispatchEvent(jr),jr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ml),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,Fh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Nh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ft.DEFAULT_UP=new N(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new N,In=new N,Zr=new N,Pn=new N,Ui=new N,Fi=new N,gl=new N,Jr=new N,$r=new N,ea=new N,ta=new ht,na=new ht,ia=new ht;class pn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fn.subVectors(e,t),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){fn.subVectors(s,t),In.subVectors(i,t),Zr.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(In),c=fn.dot(Zr),l=In.dot(In),u=In.dot(Zr),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pn.x),c.addScaledVector(a,Pn.y),c.addScaledVector(o,Pn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,i),ia.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ta,r.x),a.addScaledVector(na,r.y),a.addScaledVector(ia,r.z),a}static isFrontFacing(e,t,i,s){return fn.subVectors(i,t),In.subVectors(e,t),fn.cross(In).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),fn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ui.subVectors(s,i),Fi.subVectors(r,i),Jr.subVectors(e,i);const c=Ui.dot(Jr),l=Fi.dot(Jr);if(c<=0&&l<=0)return t.copy(i);$r.subVectors(e,s);const u=Ui.dot($r),h=Fi.dot($r);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Ui,a);ea.subVectors(e,r);const d=Ui.dot(ea),g=Fi.dot(ea);if(g>=0&&d<=g)return t.copy(r);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Fi,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return gl.subVectors(r,s),o=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(gl,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(i).addScaledVector(Ui,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function sa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=yh(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=sa(a,r,e+1/3),this.g=sa(a,r,e),this.b=sa(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=nt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){const i=zc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return Je.workingToColorSpace(kt.copy(this),e),Math.round(qe(kt.r*255,0,255))*65536+Math.round(qe(kt.g*255,0,255))*256+Math.round(qe(kt.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(kt.copy(this),t);const i=kt.r,s=kt.g,r=kt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=nt){Je.workingToColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,s=kt.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(ks);const i=kr(Wn.h,ks.h,t),s=kr(Wn.s,ks.s,t),r=kr(Wn.l,ks.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ye;Ye.NAMES=zc;let zh=0;class zn extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=Qi,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=Ca,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==En&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ba&&(i.blendSrc=this.blendSrc),this.blendDst!==Ca&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==il&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kc extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new N,Hs=new Ae;let kh=0;class lt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sl,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=as(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=as(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=as(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=as(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=as(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}}class Hc extends lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gc extends lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mn extends lt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hh=0;const on=new je,ra=new Ft,Ni=new N,en=new yi,us=new yi,Lt=new N;class Gt extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fc(e)?Gc:Hc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(en.min,us.min),en.expandByPoint(Lt),Lt.addVectors(en.max,us.max),en.expandByPoint(Lt)):(en.expandByPoint(us.min),en.expandByPoint(us.max))}en.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Lt.fromBufferAttribute(o,l),c&&(Ni.fromBufferAttribute(e,l),Lt.add(Ni)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let b=0;b<i.count;b++)o[b]=new N,c[b]=new N;const l=new N,u=new N,h=new N,f=new Ae,d=new Ae,g=new Ae,v=new N,m=new N;function p(b,S,_){l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,_),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,_),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[b].add(v),o[S].add(v),o[_].add(v),c[b].add(m),c[S].add(m),c[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let b=0,S=M.length;b<S;++b){const _=M[b],D=_.start,U=_.count;for(let L=D,B=D+U;L<B;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const x=new N,A=new N,C=new N,E=new N;function w(b){C.fromBufferAttribute(s,b),E.copy(C);const S=o[b];x.copy(S),x.sub(C.multiplyScalar(C.dot(S))).normalize(),A.crossVectors(E,S);const D=A.dot(c[b])<0?-1:1;a.setXYZW(b,x.x,x.y,x.z,D)}for(let b=0,S=M.length;b<S;++b){const _=M[b],D=_.start,U=_.count;for(let L=D,B=D+U;L<B;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new lt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new je,si=new Nc,Gs=new Ei,xl=new N,Vs=new N,Ws=new N,Xs=new N,aa=new N,Ys=new N,Ml=new N,Qs=new N;class wt extends Ft{constructor(e=new Gt,t=new kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ys.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(aa.fromBufferAttribute(h,e),a?Ys.addScaledVector(aa,u):Ys.addScaledVector(aa.sub(t),u))}t.add(Ys)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(r),si.copy(e.ray).recast(e.near),!(Gs.containsPoint(si.origin)===!1&&(si.intersectSphere(Gs,xl)===null||si.origin.distanceToSquared(xl)>(e.far-e.near)**2))&&(vl.copy(r).invert(),si.copy(e.ray).applyMatrix4(vl),!(i.boundingBox!==null&&si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let A=M,C=x;A<C;A+=3){const E=o.getX(A),w=o.getX(A+1),b=o.getX(A+2);s=qs(this,p,e,i,l,u,h,E,w,b),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const M=o.getX(m),x=o.getX(m+1),A=o.getX(m+2);s=qs(this,a,e,i,l,u,h,M,x,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let A=M,C=x;A<C;A+=3){const E=A,w=A+1,b=A+2;s=qs(this,p,e,i,l,u,h,E,w,b),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const M=m,x=m+1,A=m+2;s=qs(this,a,e,i,l,u,h,M,x,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Gh(n,e,t,i,s,r,a,o){let c;if(e.side===Tt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===En,o),c===null)return null;Qs.copy(o),Qs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Qs);return l<t.near||l>t.far?null:{distance:l,point:Qs.clone(),object:n}}function qs(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Vs),n.getVertexPosition(c,Ws),n.getVertexPosition(l,Xs);const u=Gh(n,e,t,i,Vs,Ws,Xs,Ml);if(u){const h=new N;pn.getBarycoord(Ml,Vs,Ws,Xs,h),s&&(u.uv=pn.getInterpolatedAttribute(s,o,c,l,h,new Ae)),r&&(u.uv1=pn.getInterpolatedAttribute(r,o,c,l,h,new Ae)),a&&(u.normal=pn.getInterpolatedAttribute(a,o,c,l,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new N,materialIndex:0};pn.getNormal(Vs,Ws,Xs,f.normal),u.face=f,u.barycoord=h}return u}class Cs extends Gt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new mn(l,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(h,2));function g(v,m,p,M,x,A,C,E,w,b,S){const _=A/w,D=C/b,U=A/2,L=C/2,B=E/2,O=w+1,k=b+1;let Y=0,H=0;const Z=new N;for(let re=0;re<k;re++){const ce=re*D-L;for(let De=0;De<O;De++){const Be=De*_-U;Z[v]=Be*M,Z[m]=ce*x,Z[p]=B,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[p]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(De/w),h.push(1-re/b),Y+=1}}for(let re=0;re<b;re++)for(let ce=0;ce<w;ce++){const De=f+ce+O*re,Be=f+ce+O*(re+1),ze=f+(ce+1)+O*(re+1),ye=f+(ce+1)+O*re;c.push(De,Be,ye),c.push(Be,ze,ye),H+=6}o.addGroup(d,H,S),d+=H,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=ts(n[t]);for(const s in i)e[s]=i[s]}return e}function Vh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Wh={clone:ts,merge:Wt};var Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dt extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=Vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wc extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new N,Al=new Ae,Sl=new Ae;class Xt extends Wc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Al,Sl),t.subVectors(Sl,Al)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,zi=1;class Qh extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(Oi,zi,e,t);s.layers=this.layers,this.add(s);const r=new Xt(Oi,zi,e,t);r.layers=this.layers,this.add(r);const a=new Xt(Oi,zi,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Oi,zi,e,t);o.layers=this.layers,this.add(o);const c=new Xt(Oi,zi,e,t);c.layers=this.layers,this.add(c);const l=new Xt(Oi,zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===_n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Xc extends Dt{constructor(e=[],t=Zi,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qh extends pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Xc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cs(5,5,5),r=new dt({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tt,blending:Ct});r.uniforms.tEquirect.value=t;const a=new wt(s,r),o=t.minFilter;return t.minFilter===Sn&&(t.minFilter=et),new Qh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class Xi extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kh={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Lo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new Lo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ns extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yr extends Dt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=yt,u=yt,h,f){super(null,a,o,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki extends lt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ki=new je,_l=new je,Ks=[],yl=new yi,jh=new je,hs=new wt,ds=new Ei;class Zh extends wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ki(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,jh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ki),yl.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(yl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ki),ds.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(i),e.ray.intersectsSphere(ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ki),_l.multiplyMatrices(i,ki),hs.matrixWorld=_l,hs.raycast(e,Ks);for(let a=0,o=Ks.length;a<o;a++){const c=Ks[a];c.instanceId=r,c.object=this,t.push(c)}Ks.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new yr(new Float32Array(s*this.count),s,this.count,xi,cn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const la=new N,Jh=new N,$h=new Ve;class qn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=la.subVectors(i,t).cross(Jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(la),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$h.getNormalMatrix(e),s=this.coplanarPoint(la).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Ei,ed=new Ae(.5,.5),js=new N;class br{constructor(e=new qn,t=new qn,i=new qn,s=new qn,r=new qn,a=new qn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_n,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],x=r[13],A=r[14],C=r[15];if(s[0].setComponents(l-a,d-u,p-g,C-M).normalize(),s[1].setComponents(l+a,d+u,p+g,C+M).normalize(),s[2].setComponents(l+o,d+h,p+v,C+x).normalize(),s[3].setComponents(l-o,d-h,p-v,C-x).normalize(),i)s[4].setComponents(c,f,m,A).normalize(),s[5].setComponents(l-c,d-f,p-m,C-A).normalize();else if(s[4].setComponents(l-c,d-f,p-m,C-A).normalize(),t===_n)s[5].setComponents(l+c,d+f,p+m,C+A).normalize();else if(t===Ar)s[5].setComponents(c,f,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);const t=ed.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(js.x=s.normal.x>0?e.max.x:e.min.x,js.y=s.normal.y>0?e.max.y:e.min.y,js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class td extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const El=new je,po=new Nc,Zs=new Ei,Js=new N;class nd extends Ft{constructor(e=new Gt,t=new td){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(s),Zs.radius+=r,e.ray.intersectsSphere(Zs)===!1)return;El.copy(s).invert(),po.copy(e.ray).applyMatrix4(El);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=l.getX(g);Js.fromBufferAttribute(h,m),wl(Js,m,c,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,v=d;g<v;g++)Js.fromBufferAttribute(h,g),wl(Js,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wl(n,e,t,i,s,r,a){const o=po.distanceSqToPoint(n);if(o<t){const c=new N;po.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Bo extends Dt{constructor(e,t,i=vi,s,r,a,o=yt,c=yt,l,u=Es,h=1){if(u!==Es&&u!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yc extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nn extends Gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,h=e/o,f=t/c,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const M=p*f-a;for(let x=0;x<l;x++){const A=x*h-r;g.push(A,-M,0),v.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const x=M+l*p,A=M+l*(p+1),C=M+1+l*(p+1),E=M+1+l*p;d.push(x,A,E),d.push(A,C,E)}this.setIndex(d),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Uo extends Gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new N,f=new N,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const M=[],x=p/i;let A=0;p===0&&a===0?A=.5/t:p===i&&c===Math.PI&&(A=-.5/t);for(let C=0;C<=t;C++){const E=C/t;h.x=-e*Math.cos(s+E*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(s+E*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(E+A,1-x),M.push(l++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const x=u[p][M+1],A=u[p][M],C=u[p+1][M],E=u[p+1][M+1];(p!==0||a>0)&&d.push(x,A,E),(p!==i-1||c<Math.PI)&&d.push(A,C,E)}this.setIndex(d),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tl extends dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qc extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ro,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class id extends zn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ro,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class sd extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rd extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ad{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}class qc extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ca=new je,bl=new N,Cl=new N;class od{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=vt,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(bl),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ds extends Wc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ld extends od{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cd extends qc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new ld}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ud extends qc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hd extends Gt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class dd extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class le{constructor(e){this.value=e}clone(){return new le(this.value.clone===void 0?this.value:this.value.clone())}}function Dl(n,e,t,i){const s=fd(i);switch(t){case Lc:return n*e;case xi:return n*e/s.components*s.byteLength;case To:return n*e/s.components*s.byteLength;case bo:return n*e*2/s.components*s.byteLength;case Co:return n*e*2/s.components*s.byteLength;case Bc:return n*e*3/s.components*s.byteLength;case Ut:return n*e*4/s.components*s.byteLength;case Do:return n*e*4/s.components*s.byteLength;case hr:case dr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fr:case pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case za:case Ha:return Math.max(n,16)*Math.max(e,8)/4;case Oa:case ka:return Math.max(n,8)*Math.max(e,8)/2;case Ga:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Za:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $a:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case no:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case io:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case so:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ro:case ao:case oo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lo:case co:return Math.ceil(n/4)*Math.ceil(e/4)*8;case uo:case ho:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fd(n){switch(n){case vt:case Dc:return{byteLength:1,components:1};case ys:case Rc:case Tn:return{byteLength:2,components:1};case Eo:case wo:return{byteLength:2,components:4};case vi:case yo:case cn:return{byteLength:4,components:1};case Ic:case Pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_i}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_i);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kc(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function pd(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gd=`#ifdef USE_ALPHAHASH
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
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ad=`#ifdef USE_ALPHATEST
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
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yd=`#ifdef USE_BATCHING
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
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nf=`#ifdef USE_GRADIENTMAP
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
}`,sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,of=`uniform bool receiveShadow;
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
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ff=`PhysicalMaterial material;
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
#endif`,pf=`struct PhysicalMaterial {
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
}`,mf=`
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
#endif`,gf=`#if defined( RE_IndirectDiffuse )
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
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wf=`#if defined( USE_POINTS_UV )
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
#endif`,Tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
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
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Of=`#ifdef USE_NORMALMAP
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
#endif`,zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ep=`float getShadowMask() {
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
}`,tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`#include <common>
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
}`,_p=`#if DEPTH_PACKING == 3200
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
}`,yp=`#define DISTANCE
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
}`,Ep=`#define DISTANCE
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Dp=`#include <common>
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Pp=`#define LAMBERT
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
}`,Lp=`#define MATCAP
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
}`,Bp=`#define MATCAP
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
}`,Up=`#define NORMAL
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
}`,Fp=`#define NORMAL
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
}`,Np=`#define PHONG
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
}`,Op=`#define PHONG
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
}`,zp=`#define STANDARD
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
}`,kp=`#define STANDARD
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
}`,Hp=`#define TOON
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
}`,Gp=`#define TOON
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
}`,Vp=`uniform float size;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,Yp=`uniform vec3 color;
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
}`,Qp=`uniform float rotation;
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
}`,qp=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:md,alphahash_pars_fragment:gd,alphamap_fragment:vd,alphamap_pars_fragment:xd,alphatest_fragment:Md,alphatest_pars_fragment:Ad,aomap_fragment:Sd,aomap_pars_fragment:_d,batching_pars_vertex:yd,batching_vertex:Ed,begin_vertex:wd,beginnormal_vertex:Td,bsdfs:bd,iridescence_fragment:Cd,bumpmap_pars_fragment:Dd,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Ld,color_fragment:Bd,color_pars_fragment:Ud,color_pars_vertex:Fd,color_vertex:Nd,common:Od,cube_uv_reflection_fragment:zd,defaultnormal_vertex:kd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Gd,emissivemap_fragment:Vd,emissivemap_pars_fragment:Wd,colorspace_fragment:Xd,colorspace_pars_fragment:Yd,envmap_fragment:Qd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Kd,envmap_pars_vertex:jd,envmap_physical_pars_fragment:lf,envmap_vertex:Zd,fog_vertex:Jd,fog_pars_vertex:$d,fog_fragment:ef,fog_pars_fragment:tf,gradientmap_pars_fragment:nf,lightmap_pars_fragment:sf,lights_lambert_fragment:rf,lights_lambert_pars_fragment:af,lights_pars_begin:of,lights_toon_fragment:cf,lights_toon_pars_fragment:uf,lights_phong_fragment:hf,lights_phong_pars_fragment:df,lights_physical_fragment:ff,lights_physical_pars_fragment:pf,lights_fragment_begin:mf,lights_fragment_maps:gf,lights_fragment_end:vf,logdepthbuf_fragment:xf,logdepthbuf_pars_fragment:Mf,logdepthbuf_pars_vertex:Af,logdepthbuf_vertex:Sf,map_fragment:_f,map_pars_fragment:yf,map_particle_fragment:Ef,map_particle_pars_fragment:wf,metalnessmap_fragment:Tf,metalnessmap_pars_fragment:bf,morphinstance_vertex:Cf,morphcolor_vertex:Df,morphnormal_vertex:Rf,morphtarget_pars_vertex:If,morphtarget_vertex:Pf,normal_fragment_begin:Lf,normal_fragment_maps:Bf,normal_pars_fragment:Uf,normal_pars_vertex:Ff,normal_vertex:Nf,normalmap_pars_fragment:Of,clearcoat_normal_fragment_begin:zf,clearcoat_normal_fragment_maps:kf,clearcoat_pars_fragment:Hf,iridescence_pars_fragment:Gf,opaque_fragment:Vf,packing:Wf,premultiplied_alpha_fragment:Xf,project_vertex:Yf,dithering_fragment:Qf,dithering_pars_fragment:qf,roughnessmap_fragment:Kf,roughnessmap_pars_fragment:jf,shadowmap_pars_fragment:Zf,shadowmap_pars_vertex:Jf,shadowmap_vertex:$f,shadowmask_pars_fragment:ep,skinbase_vertex:tp,skinning_pars_vertex:np,skinning_vertex:ip,skinnormal_vertex:sp,specularmap_fragment:rp,specularmap_pars_fragment:ap,tonemapping_fragment:op,tonemapping_pars_fragment:lp,transmission_fragment:cp,transmission_pars_fragment:up,uv_pars_fragment:hp,uv_pars_vertex:dp,uv_vertex:fp,worldpos_vertex:pp,background_vert:mp,background_frag:gp,backgroundCube_vert:vp,backgroundCube_frag:xp,cube_vert:Mp,cube_frag:Ap,depth_vert:Sp,depth_frag:_p,distanceRGBA_vert:yp,distanceRGBA_frag:Ep,equirect_vert:wp,equirect_frag:Tp,linedashed_vert:bp,linedashed_frag:Cp,meshbasic_vert:Dp,meshbasic_frag:Rp,meshlambert_vert:Ip,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Bp,meshnormal_vert:Up,meshnormal_frag:Fp,meshphong_vert:Np,meshphong_frag:Op,meshphysical_vert:zp,meshphysical_frag:kp,meshtoon_vert:Hp,meshtoon_frag:Gp,points_vert:Vp,points_frag:Wp,shadow_vert:Xp,shadow_frag:Yp,sprite_vert:Qp,sprite_frag:qp},he={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Mn={basic:{uniforms:Wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Wt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Wt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Wt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Wt([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Wt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Wt([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Wt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Wt([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Wt([he.common,he.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Wt([he.lights,he.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Mn.physical={uniforms:Wt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const $s={r:0,b:0,g:0},ai=new wn,Kp=new je;function jp(n,e,t,i,s,r,a){const o=new Ye(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(x){let A=x.isScene===!0?x.background:null;return A&&A.isTexture&&(A=(x.backgroundBlurriness>0?t:e).get(A)),A}function v(x){let A=!1;const C=g(x);C===null?p(o,c):C&&C.isColor&&(p(C,1),A=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,A){const C=g(A);C&&(C.isCubeTexture||C.mapping===Tr)?(u===void 0&&(u=new wt(new Cs(1,1,1),new dt({name:"BackgroundCubeMaterial",uniforms:ts(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ai.copy(A.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(ai)),u.material.toneMapped=Je.getTransfer(C.colorSpace)!==rt,(h!==C||f!==C.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new wt(new Nn(2,2),new dt({name:"BackgroundMaterial",uniforms:ts(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Je.getTransfer(C.colorSpace)!==rt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=C,f=C.version,d=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,A){x.getRGB($s,Vc(n)),i.buffers.color.setClear($s.r,$s.g,$s.b,A,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,A=1){o.set(x),c=A,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:v,addToRenderList:m,dispose:M}}function Zp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(_,D,U,L,B){let O=!1;const k=h(L,U,D);r!==k&&(r=k,l(r.object)),O=d(_,L,U,B),O&&g(_,L,U,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,A(_,D,U,L),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,D,U){const L=U.wireframe===!0;let B=i[_.id];B===void 0&&(B={},i[_.id]=B);let O=B[D.id];O===void 0&&(O={},B[D.id]=O);let k=O[L];return k===void 0&&(k=f(c()),O[L]=k),k}function f(_){const D=[],U=[],L=[];for(let B=0;B<t;B++)D[B]=0,U[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:L,object:_,attributes:{},index:null}}function d(_,D,U,L){const B=r.attributes,O=D.attributes;let k=0;const Y=U.getAttributes();for(const H in Y)if(Y[H].location>=0){const re=B[H];let ce=O[H];if(ce===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function g(_,D,U,L){const B={},O=D.attributes;let k=0;const Y=U.getAttributes();for(const H in Y)if(Y[H].location>=0){let re=O[H];re===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(re=_.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),B[H]=ce,k++}r.attributes=B,r.attributesNum=k,r.index=L}function v(){const _=r.newAttributes;for(let D=0,U=_.length;D<U;D++)_[D]=0}function m(_){p(_,0)}function p(_,D){const U=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;U[_]=1,L[_]===0&&(n.enableVertexAttribArray(_),L[_]=1),B[_]!==D&&(n.vertexAttribDivisor(_,D),B[_]=D)}function M(){const _=r.newAttributes,D=r.enabledAttributes;for(let U=0,L=D.length;U<L;U++)D[U]!==_[U]&&(n.disableVertexAttribArray(U),D[U]=0)}function x(_,D,U,L,B,O,k){k===!0?n.vertexAttribIPointer(_,D,U,B,O):n.vertexAttribPointer(_,D,U,L,B,O)}function A(_,D,U,L){v();const B=L.attributes,O=U.getAttributes(),k=D.defaultAttributeValues;for(const Y in O){const H=O[Y];if(H.location>=0){let Z=B[Y];if(Z===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),Z!==void 0){const re=Z.normalized,ce=Z.itemSize,De=e.get(Z);if(De===void 0)continue;const Be=De.buffer,ze=De.type,ye=De.bytesPerElement,Q=ze===n.INT||ze===n.UNSIGNED_INT||Z.gpuType===yo;if(Z.isInterleavedBufferAttribute){const K=Z.data,ne=K.stride,Ce=Z.offset;if(K.isInstancedInterleavedBuffer){for(let xe=0;xe<H.locationSize;xe++)p(H.location+xe,K.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xe=0;xe<H.locationSize;xe++)m(H.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let xe=0;xe<H.locationSize;xe++)x(H.location+xe,ce/H.locationSize,ze,re,ne*ye,(Ce+ce/H.locationSize*xe)*ye,Q)}else{if(Z.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)p(H.location+K,Z.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let K=0;K<H.locationSize;K++)m(H.location+K);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let K=0;K<H.locationSize;K++)x(H.location+K,ce/H.locationSize,ze,re,ce*ye,ce/H.locationSize*K*ye,Q)}}else if(k!==void 0){const re=k[Y];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(H.location,re);break;case 3:n.vertexAttrib3fv(H.location,re);break;case 4:n.vertexAttrib4fv(H.location,re);break;default:n.vertexAttrib1fv(H.location,re)}}}}M()}function C(){b();for(const _ in i){const D=i[_];for(const U in D){const L=D[U];for(const B in L)u(L[B].object),delete L[B];delete D[U]}delete i[_]}}function E(_){if(i[_.id]===void 0)return;const D=i[_.id];for(const U in D){const L=D[U];for(const B in L)u(L[B].object),delete L[B];delete D[U]}delete i[_.id]}function w(_){for(const D in i){const U=i[D];if(U[_.id]===void 0)continue;const L=U[_.id];for(const B in L)u(L[B].object),delete L[B];delete U[_.id]}}function b(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Jp(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $p(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Ut&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const b=w===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vt&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==cn&&!b)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:A,vertexTextures:C,maxSamples:E}}function em(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new qn,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const M=r?0:i,x=M*4;let A=p.clippingState||null;c.value=A,A=u(g,f,x,d);for(let C=0;C!==x;++C)A[C]=t[C];p.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,A=d;x!==v;++x,A+=4)a.copy(h[x]).applyMatrix4(M,o),a.normal.toArray(m,A),m[A+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function tm(n){let e=new WeakMap;function t(a,o){return o===Ua?a.mapping=Zi:o===Fa&&(a.mapping=Ji),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ua||o===Fa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new qh(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Yi=4,Rl=[.125,.215,.35,.446,.526,.582],mi=20,ua=new Ds,Il=new Ye;let ha=null,da=0,fa=0,pa=!1;const di=(1+Math.sqrt(5))/2,Hi=1/di,Pl=[new N(-di,Hi,0),new N(di,Hi,0),new N(-Hi,0,di),new N(Hi,0,di),new N(0,di,-Hi),new N(0,di,Hi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],nm=new N;class Ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=nm}=r;ha=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ha,da,fa),this._renderer.xr.enabled=pa,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ha=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:et,minFilter:et,generateMipmaps:!1,type:Tn,format:Ut,colorSpace:Zn,depthBuffer:!1},s=Bl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=im(r)),this._blurMaterial=sm(r,e,t)}return s}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,i,s,r){const c=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Il),h.toneMapping=Bn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const v=new kc({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),m=new wt(new Cs,v);let p=!1;const M=e.background;M?M.isColor&&(v.color.copy(M),e.background=null,p=!0):(v.color.copy(Il),p=!0);for(let x=0;x<6;x++){const A=x%3;A===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[x],r.y,r.z)):A===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[x]));const C=this._cubeSize;er(s,A*C,x>2?C:0,C,C),h.setRenderTarget(s),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Zi||e.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;er(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pl[(s-r-1)%Pl.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new wt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*mi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):mi;m>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const p=[];let M=0;for(let w=0;w<mi;++w){const b=w/v,S=Math.exp(-b*b/2);p.push(S),w===0?M+=S:w<m&&(M+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const A=this._sizeLods[s],C=3*A*(s>x-Yi?s-x+Yi:0),E=4*(this._cubeSize-A);er(t,C,E,3*A,2*A),c.setRenderTarget(t),c.render(h,ua)}}function im(n){const e=[],t=[],i=[];let s=n;const r=n-Yi+1+Rl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>n-Yi?c=Rl[a-n+Yi-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*d),x=new Float32Array(m*g*d),A=new Float32Array(p*g*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,b=E>2?0:-1,S=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];M.set(S,v*g*E),x.set(f,m*g*E);const _=[E,E,E,E,E,E];A.set(_,p*g*E)}const C=new Gt;C.setAttribute("position",new lt(M,v)),C.setAttribute("uv",new lt(x,m)),C.setAttribute("faceIndex",new lt(A,p)),e.push(C),s>Yi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bl(n,e,t){const i=new pt(n,e,t);return i.texture.mapping=Tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function er(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sm(n,e,t){const i=new Float32Array(mi),s=new N(0,1,0);return new dt({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Ct,depthTest:!1,depthWrite:!1})}function Ul(){return new dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Ct,depthTest:!1,depthWrite:!1})}function Fl(){return new dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ct,depthTest:!1,depthWrite:!1})}function Fo(){return`

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
	`}function rm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ua||c===Fa,u=c===Zi||c===Ji;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ll(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Ll(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function am(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ws("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function om(n,e,t,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const M=d.array;v=d.version;for(let x=0,A=M.length;x<A;x+=3){const C=M[x+0],E=M[x+1],w=M[x+2];f.push(C,E,E,w,w,C)}}else if(g!==void 0){const M=g.array;v=g.version;for(let x=0,A=M.length/3-1;x<A;x+=3){const C=x+0,E=x+1,w=x+2;f.push(C,E,E,w,w,C)}}else return;const m=new(Fc(f)?Gc:Hc)(f,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function lm(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*a,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*v[M];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function um(n,e,t){const i=new WeakMap,s=new ht;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let S=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let A=o.attributes.position.count*x,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*C*4*h),w=new Po(E,A,C,h);w.type=cn,w.needsUpdate=!0;const b=x*4;for(let _=0;_<h;_++){const D=m[_],U=p[_],L=M[_],B=A*C*4*_;for(let O=0;O<D.count;O++){const k=O*b;d===!0&&(s.fromBufferAttribute(D,O),E[B+k+0]=s.x,E[B+k+1]=s.y,E[B+k+2]=s.z,E[B+k+3]=0),g===!0&&(s.fromBufferAttribute(U,O),E[B+k+4]=s.x,E[B+k+5]=s.y,E[B+k+6]=s.z,E[B+k+7]=0),v===!0&&(s.fromBufferAttribute(L,O),E[B+k+8]=s.x,E[B+k+9]=s.y,E[B+k+10]=s.z,E[B+k+11]=L.itemSize===4?s.w:1)}}f={count:h,texture:w,size:new Ae(A,C)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];const g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function hm(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const jc=new Dt,Nl=new Bo(1,1),Zc=new Po,Jc=new _r,$c=new Xc,Ol=[],zl=[],kl=new Float32Array(16),Hl=new Float32Array(9),Gl=new Float32Array(4);function is(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ol[s];if(r===void 0&&(r=new Float32Array(s),Ol[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cr(n,e){let t=zl[e];t===void 0&&(t=new Int32Array(e),zl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function gm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,i))return;Gl.set(i),n.uniformMatrix2fv(this.addr,!1,Gl),It(t,i)}}function vm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,i))return;Hl.set(i),n.uniformMatrix3fv(this.addr,!1,Hl),It(t,i)}}function xm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,i))return;kl.set(i),n.uniformMatrix4fv(this.addr,!1,kl),It(t,i)}}function Mm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function Sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function _m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function ym(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Em(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function Tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function bm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Nl.compareFunction=Uc,r=Nl):r=jc,t.setTexture2D(e||r,s)}function Cm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Jc,s)}function Dm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||$c,s)}function Rm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zc,s)}function Im(n){switch(n){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return vm;case 35676:return xm;case 5124:case 35670:return Mm;case 35667:case 35671:return Am;case 35668:case 35672:return Sm;case 35669:case 35673:return _m;case 5125:return ym;case 36294:return Em;case 36295:return wm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Rm}}function Pm(n,e){n.uniform1fv(this.addr,e)}function Lm(n,e){const t=is(e,this.size,2);n.uniform2fv(this.addr,t)}function Bm(n,e){const t=is(e,this.size,3);n.uniform3fv(this.addr,t)}function Um(n,e){const t=is(e,this.size,4);n.uniform4fv(this.addr,t)}function Fm(n,e){const t=is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nm(n,e){const t=is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Om(n,e){const t=is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zm(n,e){n.uniform1iv(this.addr,e)}function km(n,e){n.uniform2iv(this.addr,e)}function Hm(n,e){n.uniform3iv(this.addr,e)}function Gm(n,e){n.uniform4iv(this.addr,e)}function Vm(n,e){n.uniform1uiv(this.addr,e)}function Wm(n,e){n.uniform2uiv(this.addr,e)}function Xm(n,e){n.uniform3uiv(this.addr,e)}function Ym(n,e){n.uniform4uiv(this.addr,e)}function Qm(n,e,t){const i=this.cache,s=e.length,r=Cr(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||jc,r[a])}function qm(n,e,t){const i=this.cache,s=e.length,r=Cr(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Jc,r[a])}function Km(n,e,t){const i=this.cache,s=e.length,r=Cr(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||$c,r[a])}function jm(n,e,t){const i=this.cache,s=e.length,r=Cr(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Zc,r[a])}function Zm(n){switch(n){case 5126:return Pm;case 35664:return Lm;case 35665:return Bm;case 35666:return Um;case 35674:return Fm;case 35675:return Nm;case 35676:return Om;case 5124:case 35670:return zm;case 35667:case 35671:return km;case 35668:case 35672:return Hm;case 35669:case 35673:return Gm;case 5125:return Vm;case 36294:return Wm;case 36295:return Xm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return jm}}class Jm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Im(t.type)}}class $m{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zm(t.type)}}class eg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Vl(n,e){n.seq.push(e),n.map[e.id]=e}function tg(n,e,t){const i=n.name,s=i.length;for(ma.lastIndex=0;;){const r=ma.exec(i),a=ma.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Vl(t,l===void 0?new Jm(o,n,e):new $m(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new eg(o),Vl(t,h)),t=h}}}class mr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);tg(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Wl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ng=37297;let ig=0;function sg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Xl=new Ve;function rg(n){Je._getMatrix(Xl,Je.workingColorSpace,n);const e=`mat3( ${Xl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case xr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+sg(n.getShaderSource(e),o)}else return r}function ag(n,e){const t=rg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function og(n,e){let t;switch(e){case ah:t="Linear";break;case oh:t="Reinhard";break;case lh:t="Cineon";break;case ch:t="ACESFilmic";break;case hh:t="AgX";break;case dh:t="Neutral";break;case uh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tr=new N;function lg(){Je.getLuminanceCoefficients(tr);const n=tr.x.toFixed(4),e=tr.y.toFixed(4),t=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function ug(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ms(n){return n!==""}function Ql(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ql(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function mo(n){return n.replace(dg,pg)}const fg=new Map;function pg(n,e){let t=We[e];if(t===void 0){const i=fg.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mo(t)}const mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(n){return n.replace(mg,gg)}function gg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function vg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function xg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zi:case Ji:e="ENVMAP_TYPE_CUBE";break;case Tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function Ag(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bc:e="ENVMAP_BLENDING_MULTIPLY";break;case sh:e="ENVMAP_BLENDING_MIX";break;case rh:e="ENVMAP_BLENDING_ADD";break}return e}function Sg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function _g(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=vg(t),l=xg(t),u=Mg(t),h=Ag(t),f=Sg(t),d=cg(t),g=ug(r),v=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),p.length>0&&(p+=`
`)):(m=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),p=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?We.tonemapping_pars_fragment:"",t.toneMapping!==Bn?og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,ag("linearToOutputTexel",t.outputColorSpace),lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=mo(a),a=Ql(a,t),a=ql(a,t),o=mo(o),o=Ql(o,t),o=ql(o,t),a=Kl(a),o=Kl(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Mr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+a,A=M+p+o,C=Wl(s,s.VERTEX_SHADER,x),E=Wl(s,s.FRAGMENT_SHADER,A);s.attachShader(v,C),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(D){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(C)||"",B=s.getShaderInfoLog(E)||"",O=U.trim(),k=L.trim(),Y=B.trim();let H=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,C,E);else{const re=Yl(s,C,"vertex"),ce=Yl(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+re+`
`+ce)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||Y==="")&&(Z=!1);Z&&(D.diagnostics={runnable:H,programLog:O,vertexShader:{log:k,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(C),s.deleteShader(E),b=new mr(s,v),S=hg(s,v)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,ng)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ig++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=E,this}let yg=0;class Eg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wg(e),t.set(e,i)),i}}class wg{constructor(e){this.id=yg++,this.code=e,this.usedTimes=0}}function Tg(n,e,t,i,s,r,a){const o=new Oc,c=new Eg,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,_,D,U,L){const B=U.fog,O=L.geometry,k=S.isMeshStandardMaterial?U.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),H=Y&&Y.mapping===Tr?Y.image.height:null,Z=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const re=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ce=re!==void 0?re.length:0;let De=0;O.morphAttributes.position!==void 0&&(De=1),O.morphAttributes.normal!==void 0&&(De=2),O.morphAttributes.color!==void 0&&(De=3);let Be,ze,ye,Q;if(Z){const tt=Mn[Z];Be=tt.vertexShader,ze=tt.fragmentShader}else Be=S.vertexShader,ze=S.fragmentShader,c.update(S),ye=c.getVertexShaderID(S),Q=c.getFragmentShaderID(S);const K=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),Ce=L.isInstancedMesh===!0,xe=L.isBatchedMesh===!0,ke=!!S.map,Pt=!!S.matcap,I=!!Y,it=!!S.aoMap,Oe=!!S.lightMap,Ie=!!S.bumpMap,ge=!!S.normalMap,Ke=!!S.displacementMap,ue=!!S.emissiveMap,Fe=!!S.metalnessMap,mt=!!S.roughnessMap,at=S.anisotropy>0,R=S.clearcoat>0,y=S.dispersion>0,V=S.iridescence>0,j=S.sheen>0,$=S.transmission>0,q=at&&!!S.anisotropyMap,be=R&&!!S.clearcoatMap,ae=R&&!!S.clearcoatNormalMap,_e=R&&!!S.clearcoatRoughnessMap,Ee=V&&!!S.iridescenceMap,ie=V&&!!S.iridescenceThicknessMap,pe=j&&!!S.sheenColorMap,Ue=j&&!!S.sheenRoughnessMap,we=!!S.specularMap,de=!!S.specularColorMap,Ge=!!S.specularIntensityMap,F=$&&!!S.transmissionMap,se=$&&!!S.thicknessMap,oe=!!S.gradientMap,ve=!!S.alphaMap,ee=S.alphaTest>0,J=!!S.alphaHash,Se=!!S.extensions;let He=Bn;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(He=n.toneMapping);const ft={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:Be,fragmentShader:ze,defines:S.defines,customVertexShaderID:ye,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:xe,batchingColor:xe&&L._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&L.instanceColor!==null,instancingMorph:Ce&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Zn,alphaToCoverage:!!S.alphaToCoverage,map:ke,matcap:Pt,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:H,aoMap:it,lightMap:Oe,bumpMap:Ie,normalMap:ge,displacementMap:f&&Ke,emissiveMap:ue,normalMapObjectSpace:ge&&S.normalMapType===mh,normalMapTangentSpace:ge&&S.normalMapType===Ro,metalnessMap:Fe,roughnessMap:mt,anisotropy:at,anisotropyMap:q,clearcoat:R,clearcoatMap:be,clearcoatNormalMap:ae,clearcoatRoughnessMap:_e,dispersion:y,iridescence:V,iridescenceMap:Ee,iridescenceThicknessMap:ie,sheen:j,sheenColorMap:pe,sheenRoughnessMap:Ue,specularMap:we,specularColorMap:de,specularIntensityMap:Ge,transmission:$,transmissionMap:F,thicknessMap:se,gradientMap:oe,opaque:S.transparent===!1&&S.blending===Qi&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:ee,alphaHash:J,combine:S.combine,mapUv:ke&&v(S.map.channel),aoMapUv:it&&v(S.aoMap.channel),lightMapUv:Oe&&v(S.lightMap.channel),bumpMapUv:Ie&&v(S.bumpMap.channel),normalMapUv:ge&&v(S.normalMap.channel),displacementMapUv:Ke&&v(S.displacementMap.channel),emissiveMapUv:ue&&v(S.emissiveMap.channel),metalnessMapUv:Fe&&v(S.metalnessMap.channel),roughnessMapUv:mt&&v(S.roughnessMap.channel),anisotropyMapUv:q&&v(S.anisotropyMap.channel),clearcoatMapUv:be&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(S.sheenRoughnessMap.channel),specularMapUv:we&&v(S.specularMap.channel),specularColorMapUv:de&&v(S.specularColorMap.channel),specularIntensityMapUv:Ge&&v(S.specularIntensityMap.channel),transmissionMapUv:F&&v(S.transmissionMap.channel),thicknessMapUv:se&&v(S.thicknessMap.channel),alphaMapUv:ve&&v(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ge||at),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(ke||ve),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ne,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:De,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:ke&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ht,flipSided:S.side===Tt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function p(S){const _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)_.push(D),_.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(M(_,S),x(_,S),_.push(n.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function M(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function x(S,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),S.push(o.mask)}function A(S){const _=g[S.type];let D;if(_){const U=Mn[_];D=Wh.clone(U.uniforms)}else D=S.uniforms;return D}function C(S,_){let D;for(let U=0,L=u.length;U<L;U++){const B=u[U];if(B.cacheKey===_){D=B,++D.usedTimes;break}}return D===void 0&&(D=new _g(n,_,S,r),u.push(D)),D}function E(S){if(--S.usedTimes===0){const _=u.indexOf(S);u[_]=u[u.length-1],u.pop(),S.destroy()}}function w(S){c.remove(S)}function b(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:C,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:b}}function bg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Cg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,f,d,g,v,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||Cg),i.length>1&&i.sort(f||Zl),s.length>1&&s.sort(f||Zl)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Dg(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Jl,n.set(i,[a])):s>=r.length?(a=new Jl,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ye};break;case"SpotLight":t={position:new N,direction:new N,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Ig(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Pg=0;function Lg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bg(n){const e=new Rg,t=Ig(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const s=new N,r=new je,a=new je;function o(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,M=0,x=0,A=0,C=0,E=0,w=0;l.sort(Lg);for(let S=0,_=l.length;S<_;S++){const D=l[S],U=D.color,L=D.intensity,B=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*L,h+=U.g*L,f+=U.b*L;else if(D.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],L);w++}else if(D.isDirectionalLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,H=t.get(D);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=O,i.directionalShadowMatrix[d]=D.shadow.matrix,M++}i.directional[d]=k,d++}else if(D.isSpotLight){const k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(U).multiplyScalar(L),k.distance=B,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[v]=k;const Y=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,Y.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[v]=Y.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=O,A++}v++}else if(D.isRectAreaLight){const k=e.get(D);k.color.copy(U).multiplyScalar(L),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=k,m++}else if(D.isPointLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){const Y=D.shadow,H=t.get(D);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=k,g++}else if(D.isHemisphereLight){const k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(L),k.groundColor.copy(D.groundColor).multiplyScalar(L),i.hemi[p]=k,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==d||b.pointLength!==g||b.spotLength!==v||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==M||b.numPointShadows!==x||b.numSpotShadows!==A||b.numSpotMaps!==C||b.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=A+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,b.directionalLength=d,b.pointLength=g,b.spotLength=v,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=M,b.numPointShadows=x,b.numSpotShadows=A,b.numSpotMaps=C,b.numLightProbes=w,i.version=Pg++)}function c(l,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(x.isSpotLight){const A=i.spot[d];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const A=i.hemi[v];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function $l(n){const e=new Bg(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Ug(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new $l(n),e.set(s,[o])):r>=a.length?(o=new $l(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
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
}`;function Og(n,e,t){let i=new br;const s=new Ae,r=new Ae,a=new ht,o=new sd({depthPacking:ph}),c=new rd,l={},u=t.maxTextureSize,h={[En]:Tt,[Tt]:En,[Ht]:Ht},f=new dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Fg,fragmentShader:Ng}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new wt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let p=this.type;this.render=function(E,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=n.getRenderTarget(),_=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ct),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=p!==Ln&&this.type===Ln,B=p===Ln&&this.type!==Ln;for(let O=0,k=E.length;O<k;O++){const Y=E[O],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const Z=H.getFrameExtents();if(s.multiply(Z),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,H.mapSize.y=r.y)),H.map===null||L===!0||B===!0){const ce=this.type!==Ln?{minFilter:yt,magFilter:yt}:{};H.map!==null&&H.map.dispose(),H.map=new pt(s.x,s.y,ce),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const re=H.getViewportCount();for(let ce=0;ce<re;ce++){const De=H.getViewport(ce);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),U.viewport(a),H.updateMatrices(Y,ce),i=H.getFrustum(),A(w,b,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Ln&&M(H,b),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,_,D)};function M(E,w){const b=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new pt(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,b,f,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,b,d,v,null)}function x(E,w,b,S){let _=null;const D=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)_=D;else if(_=b.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=_.uuid,L=w.uuid;let B=l[U];B===void 0&&(B={},l[U]=B);let O=B[L];O===void 0&&(O=_.clone(),B[L]=O,w.addEventListener("dispose",C)),_=O}if(_.visible=w.visible,_.wireframe=w.wireframe,S===Ln?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:h[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,b.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const U=n.properties.get(_);U.light=b}return _}function A(E,w,b,S,_){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Ln)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const L=e.update(E),B=E.material;if(Array.isArray(B)){const O=L.groups;for(let k=0,Y=O.length;k<Y;k++){const H=O[k],Z=B[H.materialIndex];if(Z&&Z.visible){const re=x(E,Z,S,_);E.onBeforeShadow(n,E,w,b,L,re,H),n.renderBufferDirect(b,null,L,re,E,H),E.onAfterShadow(n,E,w,b,L,re,H)}}}else if(B.visible){const O=x(E,B,S,_);E.onBeforeShadow(n,E,w,b,L,O,null),n.renderBufferDirect(b,null,L,O,E,null),E.onAfterShadow(n,E,w,b,L,O,null)}}const U=E.children;for(let L=0,B=U.length;L<B;L++)A(U[L],w,b,S,_)}function C(E){E.target.removeEventListener("dispose",C);for(const b in l){const S=l[b],_=E.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}const zg={[Da]:vr,[Ra]:La,[Ia]:Ba,[ji]:Pa,[vr]:Da,[La]:Ra,[Ba]:Ia,[Pa]:ji};function kg(n,e){function t(){let F=!1;const se=new ht;let oe=null;const ve=new ht(0,0,0,0);return{setMask:function(ee){oe!==ee&&!F&&(n.colorMask(ee,ee,ee,ee),oe=ee)},setLocked:function(ee){F=ee},setClear:function(ee,J,Se,He,ft){ft===!0&&(ee*=He,J*=He,Se*=He),se.set(ee,J,Se,He),ve.equals(se)===!1&&(n.clearColor(ee,J,Se,He),ve.copy(se))},reset:function(){F=!1,oe=null,ve.set(-1,0,0,0)}}}function i(){let F=!1,se=!1,oe=null,ve=null,ee=null;return{setReversed:function(J){if(se!==J){const Se=e.get("EXT_clip_control");J?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),se=J;const He=ee;ee=null,this.setClear(He)}},getReversed:function(){return se},setTest:function(J){J?K(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(J){oe!==J&&!F&&(n.depthMask(J),oe=J)},setFunc:function(J){if(se&&(J=zg[J]),ve!==J){switch(J){case Da:n.depthFunc(n.NEVER);break;case vr:n.depthFunc(n.ALWAYS);break;case Ra:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case Ia:n.depthFunc(n.EQUAL);break;case Pa:n.depthFunc(n.GEQUAL);break;case La:n.depthFunc(n.GREATER);break;case Ba:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=J}},setLocked:function(J){F=J},setClear:function(J){ee!==J&&(se&&(J=1-J),n.clearDepth(J),ee=J)},reset:function(){F=!1,oe=null,ve=null,ee=null,se=!1}}}function s(){let F=!1,se=null,oe=null,ve=null,ee=null,J=null,Se=null,He=null,ft=null;return{setTest:function(tt){F||(tt?K(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(tt){se!==tt&&!F&&(n.stencilMask(tt),se=tt)},setFunc:function(tt,bn,vn){(oe!==tt||ve!==bn||ee!==vn)&&(n.stencilFunc(tt,bn,vn),oe=tt,ve=bn,ee=vn)},setOp:function(tt,bn,vn){(J!==tt||Se!==bn||He!==vn)&&(n.stencilOp(tt,bn,vn),J=tt,Se=bn,He=vn)},setLocked:function(tt){F=tt},setClear:function(tt){ft!==tt&&(n.clearStencil(tt),ft=tt)},reset:function(){F=!1,se=null,oe=null,ve=null,ee=null,J=null,Se=null,He=null,ft=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,M=null,x=null,A=null,C=null,E=null,w=new Ye(0,0,0),b=0,S=!1,_=null,D=null,U=null,L=null,B=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Y=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=Y>=2);let Z=null,re={};const ce=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),Be=new ht().fromArray(ce),ze=new ht().fromArray(De);function ye(F,se,oe,ve){const ee=new Uint8Array(4),J=n.createTexture();n.bindTexture(F,J),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<oe;Se++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(se+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return J}const Q={};Q[n.TEXTURE_2D]=ye(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(n.DEPTH_TEST),a.setFunc(ji),Ie(!1),ge(el),K(n.CULL_FACE),it(Ct);function K(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ne(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ce(F,se){return h[F]!==se?(n.bindFramebuffer(F,se),h[F]=se,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=se),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=se),!0):!1}function xe(F,se){let oe=d,ve=!1;if(F){oe=f.get(se),oe===void 0&&(oe=[],f.set(se,oe));const ee=F.textures;if(oe.length!==ee.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Se=ee.length;J<Se;J++)oe[J]=n.COLOR_ATTACHMENT0+J;oe.length=ee.length,ve=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,ve=!0);ve&&n.drawBuffers(oe)}function ke(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const Pt={[pi]:n.FUNC_ADD,[Hu]:n.FUNC_SUBTRACT,[Gu]:n.FUNC_REVERSE_SUBTRACT};Pt[Vu]=n.MIN,Pt[Wu]=n.MAX;const I={[Xu]:n.ZERO,[Yu]:n.ONE,[Qu]:n.SRC_COLOR,[ba]:n.SRC_ALPHA,[$u]:n.SRC_ALPHA_SATURATE,[Zu]:n.DST_COLOR,[Ku]:n.DST_ALPHA,[qu]:n.ONE_MINUS_SRC_COLOR,[Ca]:n.ONE_MINUS_SRC_ALPHA,[Ju]:n.ONE_MINUS_DST_COLOR,[ju]:n.ONE_MINUS_DST_ALPHA,[eh]:n.CONSTANT_COLOR,[th]:n.ONE_MINUS_CONSTANT_COLOR,[nh]:n.CONSTANT_ALPHA,[ih]:n.ONE_MINUS_CONSTANT_ALPHA};function it(F,se,oe,ve,ee,J,Se,He,ft,tt){if(F===Ct){v===!0&&(ne(n.BLEND),v=!1);return}if(v===!1&&(K(n.BLEND),v=!0),F!==ku){if(F!==m||tt!==S){if((p!==pi||A!==pi)&&(n.blendEquation(n.FUNC_ADD),p=pi,A=pi),tt)switch(F){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gr:n.blendFunc(n.ONE,n.ONE);break;case tl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,x=null,C=null,E=null,w.set(0,0,0),b=0,m=F,S=tt}return}ee=ee||se,J=J||oe,Se=Se||ve,(se!==p||ee!==A)&&(n.blendEquationSeparate(Pt[se],Pt[ee]),p=se,A=ee),(oe!==M||ve!==x||J!==C||Se!==E)&&(n.blendFuncSeparate(I[oe],I[ve],I[J],I[Se]),M=oe,x=ve,C=J,E=Se),(He.equals(w)===!1||ft!==b)&&(n.blendColor(He.r,He.g,He.b,ft),w.copy(He),b=ft),m=F,S=!1}function Oe(F,se){F.side===Ht?ne(n.CULL_FACE):K(n.CULL_FACE);let oe=F.side===Tt;se&&(oe=!oe),Ie(oe),F.blending===Qi&&F.transparent===!1?it(Ct):it(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const ve=F.stencilWrite;o.setTest(ve),ve&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(F){_!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),_=F)}function ge(F){F!==Ou?(K(n.CULL_FACE),F!==D&&(F===el?n.cullFace(n.BACK):F===zu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),D=F}function Ke(F){F!==U&&(k&&n.lineWidth(F),U=F)}function ue(F,se,oe){F?(K(n.POLYGON_OFFSET_FILL),(L!==se||B!==oe)&&(n.polygonOffset(se,oe),L=se,B=oe)):ne(n.POLYGON_OFFSET_FILL)}function Fe(F){F?K(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function mt(F){F===void 0&&(F=n.TEXTURE0+O-1),Z!==F&&(n.activeTexture(F),Z=F)}function at(F,se,oe){oe===void 0&&(Z===null?oe=n.TEXTURE0+O-1:oe=Z);let ve=re[oe];ve===void 0&&(ve={type:void 0,texture:void 0},re[oe]=ve),(ve.type!==F||ve.texture!==se)&&(Z!==oe&&(n.activeTexture(oe),Z=oe),n.bindTexture(F,se||Q[F]),ve.type=F,ve.texture=se)}function R(){const F=re[Z];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(F){Be.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Be.copy(F))}function Ue(F){ze.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ze.copy(F))}function we(F,se){let oe=l.get(se);oe===void 0&&(oe=new WeakMap,l.set(se,oe));let ve=oe.get(F);ve===void 0&&(ve=n.getUniformBlockIndex(se,F.name),oe.set(F,ve))}function de(F,se){const ve=l.get(se).get(F);c.get(se)!==ve&&(n.uniformBlockBinding(se,ve,F.__bindingPointIndex),c.set(se,ve))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,re={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,M=null,x=null,A=null,C=null,E=null,w=new Ye(0,0,0),b=0,S=!1,_=null,D=null,U=null,L=null,B=null,Be.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ne,bindFramebuffer:Ce,drawBuffers:xe,useProgram:ke,setBlending:it,setMaterial:Oe,setFlipSided:Ie,setCullFace:ge,setLineWidth:Ke,setPolygonOffset:ue,setScissorTest:Fe,activeTexture:mt,bindTexture:at,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:V,texImage2D:Ee,texImage3D:ie,updateUBOMapping:we,uniformBlockBinding:de,texStorage2D:ae,texStorage3D:_e,texSubImage2D:j,texSubImage3D:$,compressedTexSubImage2D:q,compressedTexSubImage3D:be,scissor:pe,viewport:Ue,reset:Ge}}function Hg(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ae,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return d?new OffscreenCanvas(R,y):Sr("canvas")}function v(R,y,V){let j=1;const $=at(R);if(($.width>V||$.height>V)&&(j=V/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(j*$.width),be=Math.floor(j*$.height);h===void 0&&(h=g(q,be));const ae=y?g(q,be):h;return ae.width=q,ae.height=be,ae.getContext("2d").drawImage(R,0,0,q,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+be+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,y,V,j,$=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=y;if(y===n.RED&&(V===n.FLOAT&&(q=n.R32F),V===n.HALF_FLOAT&&(q=n.R16F),V===n.UNSIGNED_BYTE&&(q=n.R8)),y===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.R8UI),V===n.UNSIGNED_SHORT&&(q=n.R16UI),V===n.UNSIGNED_INT&&(q=n.R32UI),V===n.BYTE&&(q=n.R8I),V===n.SHORT&&(q=n.R16I),V===n.INT&&(q=n.R32I)),y===n.RG&&(V===n.FLOAT&&(q=n.RG32F),V===n.HALF_FLOAT&&(q=n.RG16F),V===n.UNSIGNED_BYTE&&(q=n.RG8)),y===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RG8UI),V===n.UNSIGNED_SHORT&&(q=n.RG16UI),V===n.UNSIGNED_INT&&(q=n.RG32UI),V===n.BYTE&&(q=n.RG8I),V===n.SHORT&&(q=n.RG16I),V===n.INT&&(q=n.RG32I)),y===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(q=n.RGB16UI),V===n.UNSIGNED_INT&&(q=n.RGB32UI),V===n.BYTE&&(q=n.RGB8I),V===n.SHORT&&(q=n.RGB16I),V===n.INT&&(q=n.RGB32I)),y===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),V===n.UNSIGNED_INT&&(q=n.RGBA32UI),V===n.BYTE&&(q=n.RGBA8I),V===n.SHORT&&(q=n.RGBA16I),V===n.INT&&(q=n.RGBA32I)),y===n.RGB&&(V===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),y===n.RGBA){const be=$?xr:Je.getTransfer(j);V===n.FLOAT&&(q=n.RGBA32F),V===n.HALF_FLOAT&&(q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(q=be===rt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function A(R,y){let V;return R?y===null||y===vi||y===$i?V=n.DEPTH24_STENCIL8:y===cn?V=n.DEPTH32F_STENCIL8:y===ys&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===vi||y===$i?V=n.DEPTH_COMPONENT24:y===cn?V=n.DEPTH_COMPONENT32F:y===ys&&(V=n.DEPTH_COMPONENT16),V}function C(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==yt&&R.minFilter!==et?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function E(R){const y=R.target;y.removeEventListener("dispose",E),b(y),y.isVideoTexture&&u.delete(y)}function w(R){const y=R.target;y.removeEventListener("dispose",w),_(y)}function b(R){const y=i.get(R);if(y.__webglInit===void 0)return;const V=R.source,j=f.get(V);if(j){const $=j[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(R),Object.keys(j).length===0&&f.delete(V)}i.remove(R)}function S(R){const y=i.get(R);n.deleteTexture(y.__webglTexture);const V=R.source,j=f.get(V);delete j[y.__cacheKey],a.memory.textures--}function _(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let $=0;$<y.__webglFramebuffer[j].length;$++)n.deleteFramebuffer(y.__webglFramebuffer[j][$]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=R.textures;for(let j=0,$=V.length;j<$;j++){const q=i.get(V[j]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(V[j])}i.remove(R)}let D=0;function U(){D=0}function L(){const R=D;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function B(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function O(R,y){const V=i.get(R);if(R.isVideoTexture&&Fe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,R,y);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+y)}function k(R,y){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Q(V,R,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+y)}function Y(R,y){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Q(V,R,y);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+y)}function H(R,y){const V=i.get(R);if(R.version>0&&V.__version!==R.version){K(V,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+y)}const Z={[_s]:n.REPEAT,[An]:n.CLAMP_TO_EDGE,[Na]:n.MIRRORED_REPEAT},re={[yt]:n.NEAREST,[fh]:n.NEAREST_MIPMAP_NEAREST,[Ps]:n.NEAREST_MIPMAP_LINEAR,[et]:n.LINEAR,[Or]:n.LINEAR_MIPMAP_NEAREST,[Sn]:n.LINEAR_MIPMAP_LINEAR},ce={[gh]:n.NEVER,[_h]:n.ALWAYS,[vh]:n.LESS,[Uc]:n.LEQUAL,[xh]:n.EQUAL,[Sh]:n.GEQUAL,[Mh]:n.GREATER,[Ah]:n.NOTEQUAL};function De(R,y){if(y.type===cn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===et||y.magFilter===Or||y.magFilter===Ps||y.magFilter===Sn||y.minFilter===et||y.minFilter===Or||y.minFilter===Ps||y.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Z[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Z[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Z[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,re[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,re[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===yt||y.minFilter!==Ps&&y.minFilter!==Sn||y.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Be(R,y){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",E));const j=y.source;let $=f.get(j);$===void 0&&($={},f.set(j,$));const q=B(y);if(q!==R.__cacheKey){$[q]===void 0&&($[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),$[q].usedTimes++;const be=$[R.__cacheKey];be!==void 0&&($[R.__cacheKey].usedTimes--,be.usedTimes===0&&S(y)),R.__cacheKey=q,R.__webglTexture=$[q].texture}return V}function ze(R,y,V){return Math.floor(Math.floor(R/V)/y)}function ye(R,y,V,j){const q=R.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,V,j,y.data);else{q.sort((ie,pe)=>ie.start-pe.start);let be=0;for(let ie=1;ie<q.length;ie++){const pe=q[be],Ue=q[ie],we=pe.start+pe.count,de=ze(Ue.start,y.width,4),Ge=ze(pe.start,y.width,4);Ue.start<=we+1&&de===Ge&&ze(Ue.start+Ue.count-1,y.width,4)===de?pe.count=Math.max(pe.count,Ue.start+Ue.count-pe.start):(++be,q[be]=Ue)}q.length=be+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),_e=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ie=0,pe=q.length;ie<pe;ie++){const Ue=q[ie],we=Math.floor(Ue.start/4),de=Math.ceil(Ue.count/4),Ge=we%y.width,F=Math.floor(we/y.width),se=de,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ge,F,se,oe,V,j,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function Q(R,y,V){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);const $=Be(R,y),q=y.source;t.bindTexture(j,R.__webglTexture,n.TEXTURE0+V);const be=i.get(q);if(q.version!==be.__version||$===!0){t.activeTexture(n.TEXTURE0+V);const ae=Je.getPrimaries(Je.workingColorSpace),_e=y.colorSpace===sn?null:Je.getPrimaries(y.colorSpace),Ee=y.colorSpace===sn||ae===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ie=v(y.image,!1,s.maxTextureSize);ie=mt(y,ie);const pe=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type);let we=x(y.internalFormat,pe,Ue,y.colorSpace,y.isVideoTexture);De(j,y);let de;const Ge=y.mipmaps,F=y.isVideoTexture!==!0,se=be.__version===void 0||$===!0,oe=q.dataReady,ve=C(y,ie);if(y.isDepthTexture)we=A(y.format===es,y.type),se&&(F?t.texStorage2D(n.TEXTURE_2D,1,we,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,we,ie.width,ie.height,0,pe,Ue,null));else if(y.isDataTexture)if(Ge.length>0){F&&se&&t.texStorage2D(n.TEXTURE_2D,ve,we,Ge[0].width,Ge[0].height);for(let ee=0,J=Ge.length;ee<J;ee++)de=Ge[ee],F?oe&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,de.width,de.height,pe,Ue,de.data):t.texImage2D(n.TEXTURE_2D,ee,we,de.width,de.height,0,pe,Ue,de.data);y.generateMipmaps=!1}else F?(se&&t.texStorage2D(n.TEXTURE_2D,ve,we,ie.width,ie.height),oe&&ye(y,ie,pe,Ue)):t.texImage2D(n.TEXTURE_2D,0,we,ie.width,ie.height,0,pe,Ue,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,we,Ge[0].width,Ge[0].height,ie.depth);for(let ee=0,J=Ge.length;ee<J;ee++)if(de=Ge[ee],y.format!==Ut)if(pe!==null)if(F){if(oe)if(y.layerUpdates.size>0){const Se=Dl(de.width,de.height,y.format,y.type);for(const He of y.layerUpdates){const ft=de.data.subarray(He*Se/de.data.BYTES_PER_ELEMENT,(He+1)*Se/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,He,de.width,de.height,1,pe,ft)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,ie.depth,pe,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,we,de.width,de.height,ie.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,ie.depth,pe,Ue,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,we,de.width,de.height,ie.depth,0,pe,Ue,de.data)}else{F&&se&&t.texStorage2D(n.TEXTURE_2D,ve,we,Ge[0].width,Ge[0].height);for(let ee=0,J=Ge.length;ee<J;ee++)de=Ge[ee],y.format!==Ut?pe!==null?F?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,we,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?oe&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,de.width,de.height,pe,Ue,de.data):t.texImage2D(n.TEXTURE_2D,ee,we,de.width,de.height,0,pe,Ue,de.data)}else if(y.isDataArrayTexture)if(F){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,we,ie.width,ie.height,ie.depth),oe)if(y.layerUpdates.size>0){const ee=Dl(ie.width,ie.height,y.format,y.type);for(const J of y.layerUpdates){const Se=ie.data.subarray(J*ee/ie.data.BYTES_PER_ELEMENT,(J+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,pe,Ue,Se)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ue,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ie.width,ie.height,ie.depth,0,pe,Ue,ie.data);else if(y.isData3DTexture)F?(se&&t.texStorage3D(n.TEXTURE_3D,ve,we,ie.width,ie.height,ie.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ue,ie.data)):t.texImage3D(n.TEXTURE_3D,0,we,ie.width,ie.height,ie.depth,0,pe,Ue,ie.data);else if(y.isFramebufferTexture){if(se)if(F)t.texStorage2D(n.TEXTURE_2D,ve,we,ie.width,ie.height);else{let ee=ie.width,J=ie.height;for(let Se=0;Se<ve;Se++)t.texImage2D(n.TEXTURE_2D,Se,we,ee,J,0,pe,Ue,null),ee>>=1,J>>=1}}else if(Ge.length>0){if(F&&se){const ee=at(Ge[0]);t.texStorage2D(n.TEXTURE_2D,ve,we,ee.width,ee.height)}for(let ee=0,J=Ge.length;ee<J;ee++)de=Ge[ee],F?oe&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,pe,Ue,de):t.texImage2D(n.TEXTURE_2D,ee,we,pe,Ue,de);y.generateMipmaps=!1}else if(F){if(se){const ee=at(ie);t.texStorage2D(n.TEXTURE_2D,ve,we,ee.width,ee.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Ue,ie)}else t.texImage2D(n.TEXTURE_2D,0,we,pe,Ue,ie);m(y)&&p(j),be.__version=q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function K(R,y,V){if(y.image.length!==6)return;const j=Be(R,y),$=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);const q=i.get($);if($.version!==q.__version||j===!0){t.activeTexture(n.TEXTURE0+V);const be=Je.getPrimaries(Je.workingColorSpace),ae=y.colorSpace===sn?null:Je.getPrimaries(y.colorSpace),_e=y.colorSpace===sn||be===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let J=0;J<6;J++)!Ee&&!ie?pe[J]=v(y.image[J],!0,s.maxCubemapSize):pe[J]=ie?y.image[J].image:y.image[J],pe[J]=mt(y,pe[J]);const Ue=pe[0],we=r.convert(y.format,y.colorSpace),de=r.convert(y.type),Ge=x(y.internalFormat,we,de,y.colorSpace),F=y.isVideoTexture!==!0,se=q.__version===void 0||j===!0,oe=$.dataReady;let ve=C(y,Ue);De(n.TEXTURE_CUBE_MAP,y);let ee;if(Ee){F&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ge,Ue.width,Ue.height);for(let J=0;J<6;J++){ee=pe[J].mipmaps;for(let Se=0;Se<ee.length;Se++){const He=ee[Se];y.format!==Ut?we!==null?F?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,He.width,He.height,we,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Ge,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,He.width,He.height,we,de,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Ge,He.width,He.height,0,we,de,He.data)}}}else{if(ee=y.mipmaps,F&&se){ee.length>0&&ve++;const J=at(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ge,J.width,J.height)}for(let J=0;J<6;J++)if(ie){F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pe[J].width,pe[J].height,we,de,pe[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,pe[J].width,pe[J].height,0,we,de,pe[J].data);for(let Se=0;Se<ee.length;Se++){const ft=ee[Se].image[J].image;F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,ft.width,ft.height,we,de,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Ge,ft.width,ft.height,0,we,de,ft.data)}}else{F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,we,de,pe[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,we,de,pe[J]);for(let Se=0;Se<ee.length;Se++){const He=ee[Se];F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,we,de,He.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Ge,we,de,He.image[J])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),q.__version=$.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ne(R,y,V,j,$,q){const be=r.convert(V.format,V.colorSpace),ae=r.convert(V.type),_e=x(V.internalFormat,be,ae,V.colorSpace),Ee=i.get(y),ie=i.get(V);if(ie.__renderTarget=y,!Ee.__hasExternalTextures){const pe=Math.max(1,y.width>>q),Ue=Math.max(1,y.height>>q);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,q,_e,pe,Ue,y.depth,0,be,ae,null):t.texImage2D($,q,_e,pe,Ue,0,be,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ue(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,$,ie.__webglTexture,0,Ke(y)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,$,ie.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(R,y,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){const j=y.depthTexture,$=j&&j.isDepthTexture?j.type:null,q=A(y.stencilBuffer,$),be=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Ke(y);ue(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,q,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,q,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,q,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,R)}else{const j=y.textures;for(let $=0;$<j.length;$++){const q=j[$],be=r.convert(q.format,q.colorSpace),ae=r.convert(q.type),_e=x(q.internalFormat,be,ae,q.colorSpace),Ee=Ke(y);V&&ue(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,_e,y.width,y.height):ue(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,_e,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,_e,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),O(y.depthTexture,0);const $=j.__webglTexture,q=Ke(y);if(y.depthTexture.format===Es)ue(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(y.depthTexture.format===es)ue(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ke(R){const y=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",$)};j.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=j}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const j=R.texture.mipmaps;j&&j.length>0?xe(y.__webglFramebuffer[0],R):xe(y.__webglFramebuffer,R)}else if(V){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),Ce(y.__webglDepthbuffer[j],R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,q)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ce(y.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(R,y,V){const j=i.get(R);y!==void 0&&ne(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&ke(R)}function I(R){const y=R.texture,V=i.get(R),j=i.get(y);R.addEventListener("dispose",w);const $=R.textures,q=R.isWebGLCubeRenderTarget===!0,be=$.length>1;if(be||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,a.memory.textures++),q){V.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ae]=[];for(let _e=0;_e<y.mipmaps.length;_e++)V.__webglFramebuffer[ae][_e]=n.createFramebuffer()}else V.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)V.__webglFramebuffer[ae]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(be)for(let ae=0,_e=$.length;ae<_e;ae++){const Ee=i.get($[ae]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ue(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ae=0;ae<$.length;ae++){const _e=$[ae];V.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ae]);const Ee=r.convert(_e.format,_e.colorSpace),ie=r.convert(_e.type),pe=x(_e.internalFormat,Ee,ie,_e.colorSpace,R.isXRRenderTarget===!0),Ue=Ke(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,pe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,V.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),De(n.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)ne(V.__webglFramebuffer[ae][_e],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e);else ne(V.__webglFramebuffer[ae],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ae=0,_e=$.length;ae<_e;ae++){const Ee=$[ae],ie=i.get(Ee);let pe=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ie.__webglTexture),De(pe,Ee),ne(V.__webglFramebuffer,R,Ee,n.COLOR_ATTACHMENT0+ae,pe,0),m(Ee)&&p(pe)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),De(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)ne(V.__webglFramebuffer[_e],R,y,n.COLOR_ATTACHMENT0,ae,_e);else ne(V.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,ae,0);m(y)&&p(ae),t.unbindTexture()}R.depthBuffer&&ke(R)}function it(R){const y=R.textures;for(let V=0,j=y.length;V<j;V++){const $=y[V];if(m($)){const q=M(R),be=i.get($).__webglTexture;t.bindTexture(q,be),p(q),t.unbindTexture()}}}const Oe=[],Ie=[];function ge(R){if(R.samples>0){if(ue(R)===!1){const y=R.textures,V=R.width,j=R.height;let $=n.COLOR_BUFFER_BIT;const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(R),ae=y.length>1;if(ae)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const _e=R.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);const ie=i.get(y[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,V,j,0,0,V,j,$,n.NEAREST),c===!0&&(Oe.length=0,Ie.length=0,Oe.push(n.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Oe.push(q),Ie.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ie)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);const ie=i.get(y[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ke(R){return Math.min(s.maxSamples,R.samples)}function ue(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Fe(R){const y=a.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function mt(R,y){const V=R.colorSpace,j=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Zn&&V!==sn&&(Je.getTransfer(V)===rt?(j!==Ut||$!==vt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Pt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ue}function Gg(n,e){function t(i,s=sn){let r;const a=Je.getTransfer(s);if(i===vt)return n.UNSIGNED_BYTE;if(i===Eo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ic)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dc)return n.BYTE;if(i===Rc)return n.SHORT;if(i===ys)return n.UNSIGNED_SHORT;if(i===yo)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===cn)return n.FLOAT;if(i===Tn)return n.HALF_FLOAT;if(i===Lc)return n.ALPHA;if(i===Bc)return n.RGB;if(i===Ut)return n.RGBA;if(i===Es)return n.DEPTH_COMPONENT;if(i===es)return n.DEPTH_STENCIL;if(i===xi)return n.RED;if(i===To)return n.RED_INTEGER;if(i===bo)return n.RG;if(i===Co)return n.RG_INTEGER;if(i===Do)return n.RGBA_INTEGER;if(i===hr||i===dr||i===fr||i===pr)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oa||i===za||i===ka||i===Ha)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ga||i===Va||i===Wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ga||i===Va)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xa||i===Ya||i===Qa||i===qa||i===Ka||i===ja||i===Za||i===Ja||i===$a||i===eo||i===to||i===no||i===io||i===so)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ya)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ka)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ja)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Za)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ja)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$a)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===to)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===no)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===io)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===so)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ro||i===ao||i===oo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ro)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lo||i===co||i===uo||i===ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$i?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wg=`
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

}`;class Xg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Yc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new dt({vertexShader:Vg,fragmentShader:Wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yg extends On{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Xg,p={},M=t.getContextAttributes();let x=null,A=null;const C=[],E=[],w=new Ae;let b=null;const S=new Xt;S.viewport=new ht;const _=new Xt;_.viewport=new ht;const D=[S,_],U=new dd;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let K=C[Q];return K===void 0&&(K=new oa,C[Q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Q){let K=C[Q];return K===void 0&&(K=new oa,C[Q]=K),K.getGripSpace()},this.getHand=function(Q){let K=C[Q];return K===void 0&&(K=new oa,C[Q]=K),K.getHandSpace()};function O(Q){const K=E.indexOf(Q.inputSource);if(K===-1)return;const ne=C[K];ne!==void 0&&(ne.update(Q.inputSource,Q.frame,l||a),ne.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<C.length;Q++){const K=E[Q];K!==null&&(E[Q]=null,C[Q].disconnect(K))}L=null,B=null,m.reset();for(const Q in p)delete p[Q];e.setRenderTarget(x),d=null,f=null,h=null,s=null,A=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Ce=null,xe=null;M.depth&&(xe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=M.stencil?es:Es,Ce=M.stencil?$i:vi);const ke={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new pt(f.textureWidth,f.textureHeight,{format:Ut,type:vt,depthTexture:new Bo(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new pt(d.framebufferWidth,d.framebufferHeight,{format:Ut,type:vt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(Q){for(let K=0;K<Q.removed.length;K++){const ne=Q.removed[K],Ce=E.indexOf(ne);Ce>=0&&(E[Ce]=null,C[Ce].disconnect(ne))}for(let K=0;K<Q.added.length;K++){const ne=Q.added[K];let Ce=E.indexOf(ne);if(Ce===-1){for(let ke=0;ke<C.length;ke++)if(ke>=E.length){E.push(ne),Ce=ke;break}else if(E[ke]===null){E[ke]=ne,Ce=ke;break}if(Ce===-1)break}const xe=C[Ce];xe&&xe.connect(ne)}}const H=new N,Z=new N;function re(Q,K,ne){H.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(ne.matrixWorld);const Ce=H.distanceTo(Z),xe=K.projectionMatrix.elements,ke=ne.projectionMatrix.elements,Pt=xe[14]/(xe[10]-1),I=xe[14]/(xe[10]+1),it=(xe[9]+1)/xe[5],Oe=(xe[9]-1)/xe[5],Ie=(xe[8]-1)/xe[0],ge=(ke[8]+1)/ke[0],Ke=Pt*Ie,ue=Pt*ge,Fe=Ce/(-Ie+ge),mt=Fe*-Ie;if(K.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(mt),Q.translateZ(Fe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),xe[10]===-1)Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const at=Pt+Fe,R=I+Fe,y=Ke-mt,V=ue+(Ce-mt),j=it*I/R*at,$=Oe*I/R*at;Q.projectionMatrix.makePerspective(y,V,j,$,at,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ce(Q,K){K===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(K.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let K=Q.near,ne=Q.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),U.near=_.near=S.near=K,U.far=_.far=S.far=ne,(L!==U.near||B!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),L=U.near,B=U.far),U.layers.mask=Q.layers.mask|6,S.layers.mask=U.layers.mask&3,_.layers.mask=U.layers.mask&5;const Ce=Q.parent,xe=U.cameras;ce(U,Ce);for(let ke=0;ke<xe.length;ke++)ce(xe[ke],Ce);xe.length===2?re(U,S,_):U.projectionMatrix.copy(S.projectionMatrix),De(Q,U,Ce)};function De(Q,K,ne){ne===null?Q.matrix.copy(K.matrixWorld):(Q.matrix.copy(ne.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(K.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=fo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Q){return p[Q]};let Be=null;function ze(Q,K){if(u=K.getViewerPose(l||a),g=K,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let Ce=!1;ne.length!==U.cameras.length&&(U.cameras.length=0,Ce=!0);for(let I=0;I<ne.length;I++){const it=ne[I];let Oe=null;if(d!==null)Oe=d.getViewport(it);else{const ge=h.getViewSubImage(f,it);Oe=ge.viewport,I===0&&(e.setRenderTargetTextures(A,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(A))}let Ie=D[I];Ie===void 0&&(Ie=new Xt,Ie.layers.enable(I),Ie.viewport=new ht,D[I]=Ie),Ie.matrix.fromArray(it.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(it.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),I===0&&(U.matrix.copy(Ie.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ce===!0&&U.cameras.push(Ie)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const I=h.getDepthInformation(ne[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let I=0;I<ne.length;I++){const it=ne[I].camera;if(it){let Oe=p[it];Oe||(Oe=new Yc,p[it]=Oe);const Ie=h.getCameraImage(it);Oe.sourceTexture=Ie}}}}for(let ne=0;ne<C.length;ne++){const Ce=E[ne],xe=C[ne];Ce!==null&&xe!==void 0&&xe.update(Ce,K,l||a)}Be&&Be(Q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const ye=new Kc;ye.setAnimationLoop(ze),this.setAnimationLoop=function(Q){Be=Q},this.dispose=function(){}}}const oi=new wn,Qg=new je;function qg(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,A=M.envMapRotation;x&&(m.envMap.value=x,oi.copy(A),oi.x*=-1,oi.y*=-1,oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(oi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Kg(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const A=x.program;i.uniformBlockBinding(M,A)}function l(M,x){let A=s[M.id];A===void 0&&(g(M),A=u(M),s[M.id]=A,M.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(M,C);const E=e.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function u(M){const x=h();M.__bindingPointIndex=x;const A=n.createBuffer(),C=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,A),A}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=s[M.id],A=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,w=A.length;E<w;E++){const b=Array.isArray(A[E])?A[E]:[A[E]];for(let S=0,_=b.length;S<_;S++){const D=b[S];if(d(D,E,S,C)===!0){const U=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let O=0;O<L.length;O++){const k=L[O],Y=v(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,U+B,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,B),B+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,x,A,C){const E=M.value,w=x+"_"+A;if(C[w]===void 0)return typeof E=="number"||typeof E=="boolean"?C[w]=E:C[w]=E.clone(),!0;{const b=C[w];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return C[w]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function g(M){const x=M.uniforms;let A=0;const C=16;for(let w=0,b=x.length;w<b;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let _=0,D=S.length;_<D;_++){const U=S[_],L=Array.isArray(U.value)?U.value:[U.value];for(let B=0,O=L.length;B<O;B++){const k=L[B],Y=v(k),H=A%C,Z=H%Y.boundary,re=H+Z;A+=Z,re!==0&&C-re<Y.storage&&(A+=C-re),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=A,A+=Y.storage}}}const E=A%C;return E>0&&(A+=C-E),M.__size=A,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const A=a.indexOf(x.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class jg{constructor(e={}){const{canvas:t=Eh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1;this._outputColorSpace=nt;let E=0,w=0,b=null,S=-1,_=null;const D=new ht,U=new ht;let L=null;const B=new Ye(0);let O=0,k=t.width,Y=t.height,H=1,Z=null,re=null;const ce=new ht(0,0,k,Y),De=new ht(0,0,k,Y);let Be=!1;const ze=new br;let ye=!1,Q=!1;const K=new je,ne=new N,Ce=new ht,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Pt(){return b===null?H:1}let I=i;function it(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_i}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ee,!1),I===null){const z="webgl2";if(I=it(z,T),I===null)throw it(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Oe,Ie,ge,Ke,ue,Fe,mt,at,R,y,V,j,$,q,be,ae,_e,Ee,ie,pe,Ue,we,de,Ge;function F(){Oe=new am(I),Oe.init(),we=new Gg(I,Oe),Ie=new $p(I,Oe,e,we),ge=new kg(I,Oe),Ie.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),Ke=new cm(I),ue=new bg,Fe=new Hg(I,Oe,ge,ue,Ie,we,Ke),mt=new tm(A),at=new rm(A),R=new pd(I),de=new Zp(I,R),y=new om(I,R,Ke,de),V=new hm(I,y,R,Ke),ie=new um(I,Ie,Fe),ae=new em(ue),j=new Tg(A,mt,at,Oe,Ie,de,ae),$=new qg(A,ue),q=new Dg,be=new Ug(Oe),Ee=new jp(A,mt,at,ge,V,d,c),_e=new Og(A,V,Ie),Ge=new Kg(I,Ke,Ie,ge),pe=new Jp(I,Oe,Ke),Ue=new lm(I,Oe,Ke),Ke.programs=j.programs,A.capabilities=Ie,A.extensions=Oe,A.properties=ue,A.renderLists=q,A.shadowMap=_e,A.state=ge,A.info=Ke}F();const se=new Yg(A,I);this.xr=se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(k,Y,!1))},this.getSize=function(T){return T.set(k,Y)},this.setSize=function(T,z,W=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,Y=z,t.width=Math.floor(T*H),t.height=Math.floor(z*H),W===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(k*H,Y*H).floor()},this.setDrawingBufferSize=function(T,z,W){k=T,Y=z,H=W,t.width=Math.floor(T*W),t.height=Math.floor(z*W),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(ce)},this.setViewport=function(T,z,W,X){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,z,W,X),ge.viewport(D.copy(ce).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(De)},this.setScissor=function(T,z,W,X){T.isVector4?De.set(T.x,T.y,T.z,T.w):De.set(T,z,W,X),ge.scissor(U.copy(De).multiplyScalar(H).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(T){ge.setScissorTest(Be=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,W=!0){let X=0;if(T){let G=!1;if(b!==null){const te=b.texture.format;G=te===Do||te===Co||te===To}if(G){const te=b.texture.type,fe=te===vt||te===vi||te===ys||te===$i||te===Eo||te===wo,Me=Ee.getClearColor(),me=Ee.getClearAlpha(),Le=Me.r,Ne=Me.g,Re=Me.b;fe?(g[0]=Le,g[1]=Ne,g[2]=Re,g[3]=me,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Le,v[1]=Ne,v[2]=Re,v[3]=me,I.clearBufferiv(I.COLOR,0,v))}else X|=I.COLOR_BUFFER_BIT}z&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Ee.dispose(),q.dispose(),be.dispose(),ue.dispose(),mt.dispose(),at.dispose(),V.dispose(),de.dispose(),Ge.dispose(),j.dispose(),se.dispose(),se.removeEventListener("sessionstart",vn),se.removeEventListener("sessionend",qo),ei.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=Ke.autoReset,z=_e.enabled,W=_e.autoUpdate,X=_e.needsUpdate,G=_e.type;F(),Ke.autoReset=T,_e.enabled=z,_e.autoUpdate=W,_e.needsUpdate=X,_e.type=G}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function J(T){const z=T.target;z.removeEventListener("dispose",J),Se(z)}function Se(T){He(T),ue.remove(T)}function He(T){const z=ue.get(T).programs;z!==void 0&&(z.forEach(function(W){j.releaseProgram(W)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,W,X,G,te){z===null&&(z=xe);const fe=G.isMesh&&G.matrixWorld.determinant()<0,Me=Pu(T,z,W,X,G);ge.setMaterial(X,fe);let me=W.index,Le=1;if(X.wireframe===!0){if(me=y.getWireframeAttribute(W),me===void 0)return;Le=2}const Ne=W.drawRange,Re=W.attributes.position;let Qe=Ne.start*Le,st=(Ne.start+Ne.count)*Le;te!==null&&(Qe=Math.max(Qe,te.start*Le),st=Math.min(st,(te.start+te.count)*Le)),me!==null?(Qe=Math.max(Qe,0),st=Math.min(st,me.count)):Re!=null&&(Qe=Math.max(Qe,0),st=Math.min(st,Re.count));const St=st-Qe;if(St<0||St===1/0)return;de.setup(G,X,Me,W,me);let gt,ot=pe;if(me!==null&&(gt=R.get(me),ot=Ue,ot.setIndex(gt)),G.isMesh)X.wireframe===!0?(ge.setLineWidth(X.wireframeLinewidth*Pt()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(G.isLine){let Pe=X.linewidth;Pe===void 0&&(Pe=1),ge.setLineWidth(Pe*Pt()),G.isLineSegments?ot.setMode(I.LINES):G.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else G.isPoints?ot.setMode(I.POINTS):G.isSprite&&ot.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ws("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Pe=G._multiDrawStarts,Mt=G._multiDrawCounts,Ze=G._multiDrawCount,Zt=me?R.get(me).bytesPerElement:1,Ti=ue.get(X).currentProgram.getUniforms();for(let Jt=0;Jt<Ze;Jt++)Ti.setValue(I,"_gl_DrawID",Jt),ot.render(Pe[Jt]/Zt,Mt[Jt])}else if(G.isInstancedMesh)ot.renderInstances(Qe,St,G.count);else if(W.isInstancedBufferGeometry){const Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Mt=Math.min(W.instanceCount,Pe);ot.renderInstances(Qe,St,Mt)}else ot.render(Qe,St)};function ft(T,z,W){T.transparent===!0&&T.side===Ht&&T.forceSinglePass===!1?(T.side=Tt,T.needsUpdate=!0,Is(T,z,W),T.side=En,T.needsUpdate=!0,Is(T,z,W),T.side=Ht):Is(T,z,W)}this.compile=function(T,z,W=null){W===null&&(W=T),p=be.get(W),p.init(z),x.push(p),W.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==W&&T.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const X=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const te=G.material;if(te)if(Array.isArray(te))for(let fe=0;fe<te.length;fe++){const Me=te[fe];ft(Me,W,G),X.add(Me)}else ft(te,W,G),X.add(te)}),p=x.pop(),X},this.compileAsync=function(T,z,W=null){const X=this.compile(T,z,W);return new Promise(G=>{function te(){if(X.forEach(function(fe){ue.get(fe).currentProgram.isReady()&&X.delete(fe)}),X.size===0){G(T);return}setTimeout(te,10)}Oe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let tt=null;function bn(T){tt&&tt(T)}function vn(){ei.stop()}function qo(){ei.start()}const ei=new Kc;ei.setAnimationLoop(bn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(T){tt=T,se.setAnimationLoop(T),T===null?ei.stop():ei.start()},se.addEventListener("sessionstart",vn),se.addEventListener("sessionend",qo),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(z),z=se.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,z,b),p=be.get(T,x.length),p.init(z),x.push(p),K.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ze.setFromProjectionMatrix(K,_n,z.reversedDepth),Q=this.localClippingEnabled,ye=ae.init(this.clippingPlanes,Q),m=q.get(T,M.length),m.init(),M.push(m),se.enabled===!0&&se.isPresenting===!0){const te=A.xr.getDepthSensingMesh();te!==null&&Fr(te,z,-1/0,A.sortObjects)}Fr(T,z,0,A.sortObjects),m.finish(),A.sortObjects===!0&&m.sort(Z,re),ke=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ke&&Ee.addToRenderList(m,T),this.info.render.frame++,ye===!0&&ae.beginShadows();const W=p.state.shadowsArray;_e.render(W,T,z),ye===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,G=m.transmissive;if(p.setupLights(),z.isArrayCamera){const te=z.cameras;if(G.length>0)for(let fe=0,Me=te.length;fe<Me;fe++){const me=te[fe];jo(X,G,T,me)}ke&&Ee.render(T);for(let fe=0,Me=te.length;fe<Me;fe++){const me=te[fe];Ko(m,T,me,me.viewport)}}else G.length>0&&jo(X,G,T,z),ke&&Ee.render(T),Ko(m,T,z);b!==null&&w===0&&(Fe.updateMultisampleRenderTarget(b),Fe.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(A,T,z),de.resetDefaultState(),S=-1,_=null,x.pop(),x.length>0?(p=x[x.length-1],ye===!0&&ae.setGlobalState(A.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Fr(T,z,W,X){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ze.intersectsSprite(T)){X&&Ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(K);const fe=V.update(T),Me=T.material;Me.visible&&m.push(T,fe,Me,W,Ce.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ze.intersectsObject(T))){const fe=V.update(T),Me=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ce.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ce.copy(fe.boundingSphere.center)),Ce.applyMatrix4(T.matrixWorld).applyMatrix4(K)),Array.isArray(Me)){const me=fe.groups;for(let Le=0,Ne=me.length;Le<Ne;Le++){const Re=me[Le],Qe=Me[Re.materialIndex];Qe&&Qe.visible&&m.push(T,fe,Qe,W,Ce.z,Re)}}else Me.visible&&m.push(T,fe,Me,W,Ce.z,null)}}const te=T.children;for(let fe=0,Me=te.length;fe<Me;fe++)Fr(te[fe],z,W,X)}function Ko(T,z,W,X){const G=T.opaque,te=T.transmissive,fe=T.transparent;p.setupLightsView(W),ye===!0&&ae.setGlobalState(A.clippingPlanes,W),X&&ge.viewport(D.copy(X)),G.length>0&&Rs(G,z,W),te.length>0&&Rs(te,z,W),fe.length>0&&Rs(fe,z,W),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function jo(T,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new pt(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Tn:vt,minFilter:Sn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const te=p.state.transmissionRenderTarget[X.id],fe=X.viewport||D;te.setSize(fe.z*A.transmissionResolutionScale,fe.w*A.transmissionResolutionScale);const Me=A.getRenderTarget(),me=A.getActiveCubeFace(),Le=A.getActiveMipmapLevel();A.setRenderTarget(te),A.getClearColor(B),O=A.getClearAlpha(),O<1&&A.setClearColor(16777215,.5),A.clear(),ke&&Ee.render(W);const Ne=A.toneMapping;A.toneMapping=Bn;const Re=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ye===!0&&ae.setGlobalState(A.clippingPlanes,X),Rs(T,W,X),Fe.updateMultisampleRenderTarget(te),Fe.updateRenderTargetMipmap(te),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let st=0,St=z.length;st<St;st++){const gt=z[st],ot=gt.object,Pe=gt.geometry,Mt=gt.material,Ze=gt.group;if(Mt.side===Ht&&ot.layers.test(X.layers)){const Zt=Mt.side;Mt.side=Tt,Mt.needsUpdate=!0,Zo(ot,W,X,Pe,Mt,Ze),Mt.side=Zt,Mt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Fe.updateMultisampleRenderTarget(te),Fe.updateRenderTargetMipmap(te))}A.setRenderTarget(Me,me,Le),A.setClearColor(B,O),Re!==void 0&&(X.viewport=Re),A.toneMapping=Ne}function Rs(T,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let G=0,te=T.length;G<te;G++){const fe=T[G],Me=fe.object,me=fe.geometry,Le=fe.group;let Ne=fe.material;Ne.allowOverride===!0&&X!==null&&(Ne=X),Me.layers.test(W.layers)&&Zo(Me,z,W,me,Ne,Le)}}function Zo(T,z,W,X,G,te){T.onBeforeRender(A,z,W,X,G,te),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(A,z,W,X,T,te),G.transparent===!0&&G.side===Ht&&G.forceSinglePass===!1?(G.side=Tt,G.needsUpdate=!0,A.renderBufferDirect(W,z,X,G,T,te),G.side=En,G.needsUpdate=!0,A.renderBufferDirect(W,z,X,G,T,te),G.side=Ht):A.renderBufferDirect(W,z,X,G,T,te),T.onAfterRender(A,z,W,X,G,te)}function Is(T,z,W){z.isScene!==!0&&(z=xe);const X=ue.get(T),G=p.state.lights,te=p.state.shadowsArray,fe=G.state.version,Me=j.getParameters(T,G.state,te,z,W),me=j.getProgramCacheKey(Me);let Le=X.programs;X.environment=T.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(T.isMeshStandardMaterial?at:mt).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",J),Le=new Map,X.programs=Le);let Ne=Le.get(me);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===fe)return $o(T,Me),Ne}else Me.uniforms=j.getUniforms(T),T.onBeforeCompile(Me,A),Ne=j.acquireProgram(Me,me),Le.set(me,Ne),X.uniforms=Me.uniforms;const Re=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=ae.uniform),$o(T,Me),X.needsLights=Bu(T),X.lightsStateVersion=fe,X.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMap.value=G.state.directionalShadowMap,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotShadowMap.value=G.state.spotShadowMap,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMap.value=G.state.pointShadowMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Ne,X.uniformsList=null,Ne}function Jo(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=mr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function $o(T,z){const W=ue.get(T);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Pu(T,z,W,X,G){z.isScene!==!0&&(z=xe),Fe.resetTextureUnits();const te=z.fog,fe=X.isMeshStandardMaterial?z.environment:null,Me=b===null?A.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Zn,me=(X.isMeshStandardMaterial?at:mt).get(X.envMap||fe),Le=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!W.morphAttributes.position,Qe=!!W.morphAttributes.normal,st=!!W.morphAttributes.color;let St=Bn;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(St=A.toneMapping);const gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ot=gt!==void 0?gt.length:0,Pe=ue.get(X),Mt=p.state.lights;if(ye===!0&&(Q===!0||T!==_)){const Vt=T===_&&X.id===S;ae.setState(X,T,Vt)}let Ze=!1;X.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Mt.state.version||Pe.outputColorSpace!==Me||G.isBatchedMesh&&Pe.batching===!1||!G.isBatchedMesh&&Pe.batching===!0||G.isBatchedMesh&&Pe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Pe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Pe.instancing===!1||!G.isInstancedMesh&&Pe.instancing===!0||G.isSkinnedMesh&&Pe.skinning===!1||!G.isSkinnedMesh&&Pe.skinning===!0||G.isInstancedMesh&&Pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pe.instancingMorph===!1&&G.morphTexture!==null||Pe.envMap!==me||X.fog===!0&&Pe.fog!==te||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ae.numPlanes||Pe.numIntersection!==ae.numIntersection)||Pe.vertexAlphas!==Le||Pe.vertexTangents!==Ne||Pe.morphTargets!==Re||Pe.morphNormals!==Qe||Pe.morphColors!==st||Pe.toneMapping!==St||Pe.morphTargetsCount!==ot)&&(Ze=!0):(Ze=!0,Pe.__version=X.version);let Zt=Pe.currentProgram;Ze===!0&&(Zt=Is(X,z,G));let Ti=!1,Jt=!1,rs=!1;const At=Zt.getUniforms(),rn=Pe.uniforms;if(ge.useProgram(Zt.program)&&(Ti=!0,Jt=!0,rs=!0),X.id!==S&&(S=X.id,Jt=!0),Ti||_!==T){ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),At.setValue(I,"projectionMatrix",T.projectionMatrix),At.setValue(I,"viewMatrix",T.matrixWorldInverse);const Yt=At.map.cameraPosition;Yt!==void 0&&Yt.setValue(I,ne.setFromMatrixPosition(T.matrixWorld)),Ie.logarithmicDepthBuffer&&At.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&At.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),_!==T&&(_=T,Jt=!0,rs=!0)}if(G.isSkinnedMesh){At.setOptional(I,G,"bindMatrix"),At.setOptional(I,G,"bindMatrixInverse");const Vt=G.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),At.setValue(I,"boneTexture",Vt.boneTexture,Fe))}G.isBatchedMesh&&(At.setOptional(I,G,"batchingTexture"),At.setValue(I,"batchingTexture",G._matricesTexture,Fe),At.setOptional(I,G,"batchingIdTexture"),At.setValue(I,"batchingIdTexture",G._indirectTexture,Fe),At.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&At.setValue(I,"batchingColorTexture",G._colorsTexture,Fe));const an=W.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&ie.update(G,W,Zt),(Jt||Pe.receiveShadow!==G.receiveShadow)&&(Pe.receiveShadow=G.receiveShadow,At.setValue(I,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(rn.envMap.value=me,rn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(rn.envMapIntensity.value=z.environmentIntensity),Jt&&(At.setValue(I,"toneMappingExposure",A.toneMappingExposure),Pe.needsLights&&Lu(rn,rs),te&&X.fog===!0&&$.refreshFogUniforms(rn,te),$.refreshMaterialUniforms(rn,X,H,Y,p.state.transmissionRenderTarget[T.id]),mr.upload(I,Jo(Pe),rn,Fe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(mr.upload(I,Jo(Pe),rn,Fe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&At.setValue(I,"center",G.center),At.setValue(I,"modelViewMatrix",G.modelViewMatrix),At.setValue(I,"normalMatrix",G.normalMatrix),At.setValue(I,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Vt=X.uniformsGroups;for(let Yt=0,Nr=Vt.length;Yt<Nr;Yt++){const ti=Vt[Yt];Ge.update(ti,Zt),Ge.bind(ti,Zt)}}return Zt}function Lu(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Bu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,z,W){const X=ue.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ue.get(T.texture).__webglTexture=z,ue.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const W=ue.get(T);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Uu=I.createFramebuffer();this.setRenderTarget=function(T,z=0,W=0){b=T,E=z,w=W;let X=!0,G=null,te=!1,fe=!1;if(T){const me=ue.get(T);if(me.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(me.__webglFramebuffer===void 0)Fe.setupRenderTarget(T);else if(me.__hasExternalTextures)Fe.rebindTextures(T,ue.get(T.texture).__webglTexture,ue.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Re=T.depthTexture;if(me.__boundDepthTexture!==Re){if(Re!==null&&ue.has(Re)&&(T.width!==Re.image.width||T.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(T)}}const Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);const Ne=ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[z])?G=Ne[z][W]:G=Ne[z],te=!0):T.samples>0&&Fe.useMultisampledRTT(T)===!1?G=ue.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[W]:G=Ne,D.copy(T.viewport),U.copy(T.scissor),L=T.scissorTest}else D.copy(ce).multiplyScalar(H).floor(),U.copy(De).multiplyScalar(H).floor(),L=Be;if(W!==0&&(G=Uu),ge.bindFramebuffer(I.FRAMEBUFFER,G)&&X&&ge.drawBuffers(T,G),ge.viewport(D),ge.scissor(U),ge.setScissorTest(L),te){const me=ue.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,me.__webglTexture,W)}else if(fe){const me=z;for(let Le=0;Le<T.textures.length;Le++){const Ne=ue.get(T.textures[Le]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,W,me)}}else if(T!==null&&W!==0){const me=ue.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(T,z,W,X,G,te,fe,Me=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){ge.bindFramebuffer(I.FRAMEBUFFER,me);try{const Le=T.textures[Me],Ne=Le.format,Re=Le.type;if(!Ie.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-X&&W>=0&&W<=T.height-G&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me),I.readPixels(z,W,X,G,we.convert(Ne),we.convert(Re),te))}finally{const Le=b!==null?ue.get(b).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,z,W,X,G,te,fe,Me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(z>=0&&z<=T.width-X&&W>=0&&W<=T.height-G){ge.bindFramebuffer(I.FRAMEBUFFER,me);const Le=T.textures[Me],Ne=Le.format,Re=Le.type;if(!Ie.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.bufferData(I.PIXEL_PACK_BUFFER,te.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me),I.readPixels(z,W,X,G,we.convert(Ne),we.convert(Re),0);const st=b!==null?ue.get(b).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,st);const St=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wh(I,St,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,te),I.deleteBuffer(Qe),I.deleteSync(St),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,W=0){const X=Math.pow(2,-W),G=Math.floor(T.image.width*X),te=Math.floor(T.image.height*X),fe=z!==null?z.x:0,Me=z!==null?z.y:0;Fe.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,fe,Me,G,te),ge.unbindTexture()};const Fu=I.createFramebuffer(),Nu=I.createFramebuffer();this.copyTextureToTexture=function(T,z,W=null,X=null,G=0,te=null){te===null&&(G!==0?(ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=G,G=0):te=0);let fe,Me,me,Le,Ne,Re,Qe,st,St;const gt=T.isCompressedTexture?T.mipmaps[te]:T.image;if(W!==null)fe=W.max.x-W.min.x,Me=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Ne=W.min.y,Re=W.isBox3?W.min.z:0;else{const an=Math.pow(2,-G);fe=Math.floor(gt.width*an),Me=Math.floor(gt.height*an),T.isDataArrayTexture?me=gt.depth:T.isData3DTexture?me=Math.floor(gt.depth*an):me=1,Le=0,Ne=0,Re=0}X!==null?(Qe=X.x,st=X.y,St=X.z):(Qe=0,st=0,St=0);const ot=we.convert(z.format),Pe=we.convert(z.type);let Mt;z.isData3DTexture?(Fe.setTexture3D(z,0),Mt=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Fe.setTexture2DArray(z,0),Mt=I.TEXTURE_2D_ARRAY):(Fe.setTexture2D(z,0),Mt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const Ze=I.getParameter(I.UNPACK_ROW_LENGTH),Zt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ti=I.getParameter(I.UNPACK_SKIP_PIXELS),Jt=I.getParameter(I.UNPACK_SKIP_ROWS),rs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Re);const At=T.isDataArrayTexture||T.isData3DTexture,rn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const an=ue.get(T),Vt=ue.get(z),Yt=ue.get(an.__renderTarget),Nr=ue.get(Vt.__renderTarget);ge.bindFramebuffer(I.READ_FRAMEBUFFER,Yt.__webglFramebuffer),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let ti=0;ti<me;ti++)At&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ue.get(T).__webglTexture,G,Re+ti),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ue.get(z).__webglTexture,te,St+ti)),I.blitFramebuffer(Le,Ne,fe,Me,Qe,st,fe,Me,I.DEPTH_BUFFER_BIT,I.NEAREST);ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||ue.has(T)){const an=ue.get(T),Vt=ue.get(z);ge.bindFramebuffer(I.READ_FRAMEBUFFER,Fu),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,Nu);for(let Yt=0;Yt<me;Yt++)At?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,an.__webglTexture,G,Re+Yt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,an.__webglTexture,G),rn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.__webglTexture,te,St+Yt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Vt.__webglTexture,te),G!==0?I.blitFramebuffer(Le,Ne,fe,Me,Qe,st,fe,Me,I.COLOR_BUFFER_BIT,I.NEAREST):rn?I.copyTexSubImage3D(Mt,te,Qe,st,St+Yt,Le,Ne,fe,Me):I.copyTexSubImage2D(Mt,te,Qe,st,Le,Ne,fe,Me);ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else rn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Mt,te,Qe,st,St,fe,Me,me,ot,Pe,gt.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,te,Qe,st,St,fe,Me,me,ot,gt.data):I.texSubImage3D(Mt,te,Qe,st,St,fe,Me,me,ot,Pe,gt):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,te,Qe,st,fe,Me,ot,Pe,gt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,te,Qe,st,gt.width,gt.height,ot,gt.data):I.texSubImage2D(I.TEXTURE_2D,te,Qe,st,fe,Me,ot,Pe,gt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ze),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Zt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ti),I.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,rs),te===0&&z.generateMipmaps&&I.generateMipmap(Mt),ge.unbindTexture()},this.initRenderTarget=function(T){ue.get(T).__webglFramebuffer===void 0&&Fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Fe.setTextureCube(T,0):T.isData3DTexture?Fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Fe.setTexture2DArray(T,0):Fe.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){E=0,w=0,b=null,ge.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const P=.5,Te=32,_t=2,ct=4,ec={seed:1337,chunksX:8,chunksY:4,chunksZ:8,seaLevel:22};function nn(n,e,t){return(n*1024+e)*1024+t}const Zg=0,Ts=1,Dr=2,Rr=3,Er=4,Ir=5,No=6,Oo=7,eu=8,tu=9,nu=10,iu=11,su=12,ru=13,au=14,ou=15,lu=16,un=[{id:Zg,name:"air",albedo:[0,0,0],roughness:1,metalness:0,pattern:"stone",scale:1,placeable:!1,hard:!1},{id:Ts,name:"stone",albedo:[.42,.41,.4],roughness:.85,metalness:0,pattern:"stone",scale:3,placeable:!0,hard:!1},{id:Dr,name:"dirt",albedo:[.3,.21,.14],roughness:.95,metalness:0,pattern:"dirt",scale:2,placeable:!0,hard:!1},{id:Rr,name:"grass",albedo:[.22,.38,.12],roughness:.9,metalness:0,pattern:"grass",scale:2,placeable:!0,hard:!1},{id:Er,name:"sand",albedo:[.76,.66,.48],roughness:.9,metalness:0,pattern:"sand",scale:1.5,placeable:!0,hard:!1},{id:Ir,name:"snow",albedo:[.92,.94,.97],roughness:.6,metalness:0,pattern:"snow",scale:2,placeable:!0,hard:!1},{id:No,name:"wood",albedo:[.4,.26,.14],roughness:.8,metalness:0,pattern:"wood",scale:1,placeable:!0,hard:!1},{id:Oo,name:"leaves",albedo:[.16,.34,.1],roughness:.8,metalness:0,pattern:"leaves",scale:1,placeable:!0,hard:!1},{id:eu,name:"brick",albedo:[.56,.26,.18],roughness:.8,metalness:0,pattern:"clay",scale:1,placeable:!0,hard:!0},{id:tu,name:"marble",albedo:[.85,.84,.82],roughness:.25,metalness:0,pattern:"marble",scale:2.5,placeable:!0,hard:!0},{id:nu,name:"obsidian",albedo:[.06,.05,.08],roughness:.15,metalness:.1,pattern:"obsidian",scale:2,placeable:!0,hard:!0},{id:iu,name:"lantern",albedo:[.9,.75,.5],roughness:.5,metalness:0,pattern:"glow",scale:1,emissive:[1.7,1.15,.5],placeable:!0,hard:!0},{id:su,name:"moss",albedo:[.2,.3,.12],roughness:.95,metalness:0,pattern:"moss",scale:1.5,placeable:!0,hard:!1},{id:ru,name:"planks",albedo:[.55,.38,.2],roughness:.7,metalness:0,pattern:"planks",scale:1,placeable:!0,hard:!0},{id:au,name:"cobble",albedo:[.45,.44,.42],roughness:.9,metalness:0,pattern:"cobble",scale:1,placeable:!0,hard:!0},{id:ou,name:"torch",albedo:[.3,.2,.1],roughness:.85,metalness:0,pattern:"torch",scale:.5,emissive:[20,10,3.1],placeable:!0,hard:!0,solid:!1},{id:lu,name:"lamp",albedo:[.25,.25,.28],roughness:.5,metalness:.3,pattern:"obsidian",scale:.5,emissive:[16,15.5,12.8],placeable:!0,hard:!0,solid:!1}],Jg=[Ts,Dr,Rr,Er,No,Oo,eu,ru,au,tu,nu,ou,lu,iu,Ir,su],Vi=Jg.map(n=>un[n]);un.length;function Kn(n){return un[n]?.hard??!1}function Nt(n){const e=un[n];return!!e&&e.hard&&e.solid!==!1}const Fn=134217727,Bt=3;function cu(n){let e=0;for(;n;)n&=n-1,e++;return e}class Pr{ox;oy;oz;nx;ny;nz;density;material;hard;sub;water;sy;sx;constructor(e,t,i,s=0,r=0,a=0,o,c,l,u,h){this.nx=e,this.ny=t,this.nz=i,this.ox=s,this.oy=r,this.oz=a,this.sy=i,this.sx=t*i,this.density=o??new Float32Array(e*t*i).fill(-ct),this.material=c??new Uint8Array(e*t*i),this.hard=l??new Uint8Array(e*t*i),this.sub=u??new Uint32Array(e*t*i),this.water=h??new Uint8Array(e*t*i)}waterAt(e,t,i){const s=Math.floor(e/P),r=Math.floor(t/P),a=Math.floor(i/P);return this.inBounds(s,r,a)?this.water[this.index(s,r,a)]!==0:!1}subMask(e,t,i){if(!this.inBounds(e,t,i))return 0;const s=this.index(e,t,i);if(this.hard[s]===0)return 0;const r=this.sub[s];return r===0?Fn:r}subOccupied(e,t,i,s,r,a){return(this.subMask(e,t,i)&1<<s+3*(r+3*a))!==0}solidFraction(e,t,i){const s=this.subMask(e,t,i);return s===0?0:s===Fn?1:cu(s)/27}hardOccupiedAt(e,t,i){const s=Math.floor(e/P),r=Math.floor(t/P),a=Math.floor(i/P),o=this.subMask(s,r,a);if(o===0)return!1;if(o===Fn)return!0;const c=Math.min(2,Math.floor((e/P-s)*3)),l=Math.min(2,Math.floor((t/P-r)*3)),u=Math.min(2,Math.floor((i/P-a)*3));return(o&1<<c+3*(l+3*u))!==0}getHard(e,t,i){return this.inBounds(e,t,i)?this.hard[this.index(e,t,i)]:0}setHard(e,t,i,s){this.inBounds(e,t,i)&&(this.hard[this.index(e,t,i)]=s)}hardAt(e,t,i){return this.getHard(Math.floor(e/P),Math.floor(t/P),Math.floor(i/P))}solidAt(e,t,i){return Nt(this.hardAt(e,t,i))&&this.hardOccupiedAt(e,t,i)||this.sampleNearest(e,t,i)>0}index(e,t,i){return(e-this.ox)*this.sx+(t-this.oy)*this.sy+(i-this.oz)}inBounds(e,t,i){return e>=this.ox&&t>=this.oy&&i>=this.oz&&e<this.ox+this.nx&&t<this.oy+this.ny&&i<this.oz+this.nz}get(e,t,i){return this.inBounds(e,t,i)?this.density[this.index(e,t,i)]:-ct}getMaterial(e,t,i){return this.inBounds(e,t,i)?this.material[this.index(e,t,i)]:0}set(e,t,i,s,r){if(!this.inBounds(e,t,i))return;const a=this.index(e,t,i);this.density[a]=s<-ct?-ct:s>ct?ct:s,r!==void 0&&(this.material[a]=r)}sample(e,t,i){const s=e/P-this.ox,r=t/P-this.oy,a=i/P-this.oz;let o=Math.floor(s),c=Math.floor(r),l=Math.floor(a),u=s-o,h=r-c,f=a-l;o<0?(o=0,u=0):o>=this.nx-1&&(o=this.nx-2,u=1),c<0?(c=0,h=0):c>=this.ny-1&&(c=this.ny-2,h=1),l<0?(l=0,f=0):l>=this.nz-1&&(l=this.nz-2,f=1);const d=this.density,g=this.sx,v=this.sy,m=o*g+c*v+l,p=d[m]+(d[m+g]-d[m])*u,M=d[m+1]+(d[m+g+1]-d[m+1])*u,x=d[m+v]+(d[m+g+v]-d[m+v])*u,A=d[m+v+1]+(d[m+g+v+1]-d[m+v+1])*u,C=p+(x-p)*h,E=M+(A-M)*h;return C+(E-C)*f}sampleNearest(e,t,i){const s=Math.round(e/P),r=Math.round(t/P),a=Math.round(i/P);return this.get(s,r,a)}gradient(e,t,i,s=[0,0,0],r=P*.5){return s[0]=this.sample(e+r,t,i)-this.sample(e-r,t,i),s[1]=this.sample(e,t+r,i)-this.sample(e,t-r,i),s[2]=this.sample(e,t,i+r)-this.sample(e,t,i-r),s}materialAt(e,t,i){const s=Math.floor(e/P),r=Math.floor(t/P),a=Math.floor(i/P);let o=-1/0,c=0;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=this.get(s+l,r+u,a+h);f>o&&(o=f,c=this.getMaterial(s+l,r+u,a+h))}return c}extract(e,t,i,s,r,a){const o=new Pr(s,r,a,e,t,i),c=o.density,l=o.material;for(let u=0;u<s;u++){const h=e+u,f=h>=this.ox&&h<this.ox+this.nx;for(let d=0;d<r;d++){const g=t+d,v=g>=this.oy&&g<this.oy+this.ny,m=u*r*a+d*a;if(!f||!v)continue;const p=Math.max(i,this.oz),M=Math.min(i+a,this.oz+this.nz);if(M<=p)continue;const x=this.index(h,g,p),A=M-p;c.set(this.density.subarray(x,x+A),m+(p-i)),l.set(this.material.subarray(x,x+A),m+(p-i)),o.hard.set(this.hard.subarray(x,x+A),m+(p-i)),o.sub.set(this.sub.subarray(x,x+A),m+(p-i)),o.water.set(this.water.subarray(x,x+A),m+(p-i))}}return o}get sizeX(){return(this.nx-1)*P}get sizeY(){return(this.ny-1)*P}get sizeZ(){return(this.nz-1)*P}}function $g(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ga(n,e,t){let i=Math.imul(n|0,668265261)^Math.imul(e|0,374761393)^Math.imul(t|0,2654435761);return i=Math.imul(i^i>>>15,2246822507),i=Math.imul(i^i>>>13,3266489909),((i^i>>>16)>>>0)/4294967296}const li=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],e0=.5*(Math.sqrt(3)-1),fs=(3-Math.sqrt(3))/6,t0=1/3,xn=1/6;class tc{perm=new Uint8Array(512);permMod12=new Uint8Array(512);constructor(e){const t=new Uint8Array(256);for(let s=0;s<256;s++)t[s]=s;const i=$g(e);for(let s=255;s>0;s--){const r=Math.floor(i()*(s+1)),a=t[s];t[s]=t[r],t[r]=a}for(let s=0;s<512;s++)this.perm[s]=t[s&255],this.permMod12[s]=this.perm[s]%12}noise2(e,t){const i=this.perm,s=this.permMod12;let r=0,a=0,o=0;const c=(e+t)*e0,l=Math.floor(e+c),u=Math.floor(t+c),h=(l+u)*fs,f=e-(l-h),d=t-(u-h);let g,v;f>d?(g=1,v=0):(g=0,v=1);const m=f-g+fs,p=d-v+fs,M=f-1+2*fs,x=d-1+2*fs,A=l&255,C=u&255,E=s[A+i[C]],w=s[A+g+i[C+v]],b=s[A+1+i[C+1]];let S=.5-f*f-d*d;if(S>=0){S*=S;const U=li[E];r=S*S*(U[0]*f+U[1]*d)}let _=.5-m*m-p*p;if(_>=0){_*=_;const U=li[w];a=_*_*(U[0]*m+U[1]*p)}let D=.5-M*M-x*x;if(D>=0){D*=D;const U=li[b];o=D*D*(U[0]*M+U[1]*x)}return 70*(r+a+o)}noise3(e,t,i){const s=this.perm,r=this.permMod12;let a=0,o=0,c=0,l=0;const u=(e+t+i)*t0,h=Math.floor(e+u),f=Math.floor(t+u),d=Math.floor(i+u),g=(h+f+d)*xn,v=e-(h-g),m=t-(f-g),p=i-(d-g);let M,x,A,C,E,w;v>=m?m>=p?(M=1,x=0,A=0,C=1,E=1,w=0):v>=p?(M=1,x=0,A=0,C=1,E=0,w=1):(M=0,x=0,A=1,C=1,E=0,w=1):m<p?(M=0,x=0,A=1,C=0,E=1,w=1):v<p?(M=0,x=1,A=0,C=0,E=1,w=1):(M=0,x=1,A=0,C=1,E=1,w=0);const b=v-M+xn,S=m-x+xn,_=p-A+xn,D=v-C+2*xn,U=m-E+2*xn,L=p-w+2*xn,B=v-1+3*xn,O=m-1+3*xn,k=p-1+3*xn,Y=h&255,H=f&255,Z=d&255,re=r[Y+s[H+s[Z]]],ce=r[Y+M+s[H+x+s[Z+A]]],De=r[Y+C+s[H+E+s[Z+w]]],Be=r[Y+1+s[H+1+s[Z+1]]];let ze=.6-v*v-m*m-p*p;if(ze>=0){ze*=ze;const ne=li[re];a=ze*ze*(ne[0]*v+ne[1]*m+ne[2]*p)}let ye=.6-b*b-S*S-_*_;if(ye>=0){ye*=ye;const ne=li[ce];o=ye*ye*(ne[0]*b+ne[1]*S+ne[2]*_)}let Q=.6-D*D-U*U-L*L;if(Q>=0){Q*=Q;const ne=li[De];c=Q*Q*(ne[0]*D+ne[1]*U+ne[2]*L)}let K=.6-B*B-O*O-k*k;if(K>=0){K*=K;const ne=li[Be];l=K*K*(ne[0]*B+ne[1]*O+ne[2]*k)}return 32*(a+o+c+l)}fbm2(e,t,i,s=2,r=.5){let a=0,o=1,c=1,l=0;for(let u=0;u<i;u++)a+=o*this.noise2(e*c,t*c),l+=o,o*=r,c*=s;return a/l}fbm3(e,t,i,s,r=2,a=.5){let o=0,c=1,l=1,u=0;for(let h=0;h<s;h++)o+=c*this.noise3(e*l,t*l,i*l),u+=c,c*=a,l*=r;return o/u}ridged2(e,t,i){let s=0,r=.5,a=1,o=1;for(let c=0;c<i;c++){let l=1-Math.abs(this.noise2(e*a,t*a));l*=l*o,o=Math.min(1,Math.max(0,l*2)),s+=l*r,r*=.5,a*=2}return Math.min(1,s)}}class n0{constructor(e){this.cfg=e,this.n=new tc(e.seed),this.n2=new tc(e.seed^1540483477)}n;n2;height(e,t){const i=this.n,s=i.fbm2(e/260,t/260,4),r=nc(-.15,.55,s),a=i.ridged2(e/110+31.7,t/110-12.3,4),o=i.fbm2(e/34+7.1,t/34+3.3,3),c=i.fbm2(e/9,t/9,2);let l=this.cfg.seaLevel+4+s*12;return l+=Math.pow(a,1.6)*30*r,l+=o*4+c*.8,l}heightInfo(e,t){const i=this.height(e,t),s=.75,r=(this.height(e+s,t)-this.height(e-s,t))/(2*s),a=(this.height(e,t+s)-this.height(e,t-s))/(2*s);return{height:i,slope:Math.hypot(r,a)}}generate(e,t=!0){const{nx:i,ny:s,nz:r}=e,a=this.n,o=this.n2,c=this.cfg.seaLevel,l=14;for(let u=0;u<i;u++){const h=(e.ox+u)*P;for(let f=0;f<r;f++){const d=(e.oz+f)*P,{height:g,slope:v}=this.heightInfo(h,d),m=50+a.noise2(h/40,d/40)*3,p=v>1+a.noise2(h/6,d/6)*.25;for(let M=0;M<s;M++){const x=(e.oy+M)*P;let A=g-x;if(Math.abs(A)<l){const b=a.fbm3(h/22,x/22,d/22,3);if(A+=b*(1.5+Math.min(v,2)*2),x<g-3&&x>3){const S=o.noise3(h/24,x/16,d/24),_=o.noise3(h/24+71.3,x/16+11.9,d/24-40.1),U=(Math.sqrt(S*S+_*_)-.11)*18,L=nc(g-3,g-8,x),B=U+(1-L)*100;B<A&&(A=B)}}A=A>ct?ct:A<-ct?-ct:A,e.oy+M>=this.cfg.chunksY*Te&&(A=-ct);const C=g-x;let E;x>m&&C<3?E=Ir:p&&C<6?E=Ts:C<1.2?E=x<c+1.5?Er:Rr:C<4.5?E=x<c+1?Er:Dr:E=Ts;const w=e.index(e.ox+u,e.oy+M,e.oz+f);e.density[w]=A,e.material[w]=E}}}t&&this.plantTrees(e)}plantTrees(e){const t=this.cfg.seaLevel,i=this.n;for(let s=4;s<e.sizeX-4;s+=2)for(let r=4;r<e.sizeZ-4;r+=2){const a=ga(s,r,this.cfg.seed),o=i.fbm2(s/70+200,r/70+200,2);if(a>.045+o*.06)continue;const{height:c,slope:l}=this.heightInfo(s,r);if(c<t+2.5||l>.7||c>46)continue;let u=-1;for(let d=Math.min(e.sizeY-8,c+3);d>t;d-=P)if(e.sample(s,d,r)>0){u=d;break}if(u<0)continue;const h=3.5+ga(s+17,r+5,this.cfg.seed)*3,f=2+ga(s+3,r+29,this.cfg.seed)*1.2;this.stampSphereUnion(e,s,u+h+f*.5,r,f,Oo,.6),this.stampCylinderUnion(e,s,u-.5,r,h+f*.6,.42,No)}}stampSphereUnion(e,t,i,s,r,a,o){const c=Math.floor((t-r-1)/P),l=Math.ceil((t+r+1)/P),u=Math.floor((i-r-1)/P),h=Math.ceil((i+r+1)/P),f=Math.floor((s-r-1)/P),d=Math.ceil((s+r+1)/P);for(let g=c;g<=l;g++)for(let v=u;v<=h;v++)for(let m=f;m<=d;m++){if(!e.inBounds(g,v,m))continue;const p=g*P,M=v*P,x=m*P,A=Math.hypot(p-t,(M-i)*1.15,x-s),C=o*this.n2.noise3(p*1.3,M*1.3,x*1.3),E=r-A+C,w=e.index(g,v,m);E>e.density[w]&&(e.density[w]=Math.min(E,ct)),E>-P&&(e.material[w]=a)}}stampCylinderUnion(e,t,i,s,r,a,o){const c=Math.floor((t-a-1)/P),l=Math.ceil((t+a+1)/P),u=Math.floor((s-a-1)/P),h=Math.ceil((s+a+1)/P),f=Math.floor(i/P),d=Math.ceil((i+r)/P);for(let g=c;g<=l;g++)for(let v=f;v<=d;v++)for(let m=u;m<=h;m++){if(!e.inBounds(g,v,m))continue;const p=g*P,M=v*P,x=m*P,A=a-Math.hypot(p-t,x-s),C=Math.min(M-i,i+r-M),E=Math.min(A,C),w=e.index(g,v,m);E>e.density[w]&&(e.density[w]=Math.min(E,ct)),E>-P*.6&&(e.material[w]=o)}}}function nc(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const zo=2,ps=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],ic=(n,e)=>[n[0]*e,n[1]*e,n[2]*e];function nr(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function sc(n){const e=(n-6)/24*Math.PI*2,t=Math.cos(e),i=Math.sin(e),s=Math.hypot(t,i,.35);let r=[t/s,i/s,.35/s];const a=r[1],o=nr(-.08,.18,a),c=1-nr(.02,.35,a),l=ps([1,.98,.94],[1,.5,.22],c),u=3*Math.pow(nr(-.02,.25,a),.8);let h=ic(l,u);const f=[.1,.26,.64],d=[.46,.6,.8],g=[.95,.45,.18],v=[.01,.014,.032],m=[.022,.028,.05];let p=ps(d,g,c*.85),M=f;M=ps(v,M,o),p=ps(m,p,o);const x=ic(ps(M,p,.5),.9);if(a<0){const A=nr(0,-.12,a)*.28;r=[-r[0],-r[1],r[2]],r[1]>.05?h=[.55*A,.65*A,.95*A]:h=[0,0,0]}return{dir:r,sun:h,zenith:M,horizon:p,ambient:x,daylight:o}}class i0{sx;sy;sz;data;normals;constructor(e){this.sx=Math.ceil((e.nx-1)/_t),this.sy=Math.ceil((e.ny-1)/_t),this.sz=Math.ceil((e.nz-1)/_t),this.data=new Uint8Array(this.sx*this.sy*this.sz*4),this.normals=new Uint8Array(this.sx*this.sy*this.sz*4)}index(e,t,i){return(e+this.sx*(t+this.sy*i))*4}get texel(){return _t*P}}const ci=[0,0,0];function va(n,e,t,i,s,r,a){const o=e.texel,c=t*r,l=i*r,u=s*r,h=e.data,f=255/zo,d=a.dir,g=d[1]>0,v=n.sizeY,m=e.normals,p=tn(s0*255);for(let M=u;M<u+r&&M<e.sz;M++)for(let x=c;x<c+r&&x<e.sx;x++){const A=(x+.5)*o,C=(M+.5)*o;let E=rc(n,A,(l+r)*o,C,v);for(let w=Math.min(l+r,e.sy)-1;w>=l;w--){const b=e.index(x,w,M);let S=0,_=-1/0,D=0,U=0,L=0,B=0,O=0;const k=x*_t,Y=w*_t,H=M*_t;for(let ue=0;ue<_t;ue++)for(let Fe=0;Fe<_t;Fe++)for(let mt=0;mt<_t;mt++){const at=n.getHard(k+ue,Y+Fe,H+mt);if(at!==0&&!Nt(at)){const y=un[at].emissive;y&&(L+=y[0],B+=y[1],O+=y[2]);continue}if(at!==0){const y=n.solidFraction(k+ue,Y+Fe,H+mt);S+=y,y>0&&(U++,D=at);continue}const R=n.get(k+ue,Y+Fe,H+mt);R>0&&(S++,R>_&&U===0&&(_=R,D=n.getMaterial(k+ue,Y+Fe,H+mt)))}const Z=_t*_t*_t,re=S/Z;let ce=S>0&&S<Z-1e-6;if(S>=Z-1e-6&&(ce=!ln(n,k-1,Y,H)||!ln(n,k+_t,Y,H)||!ln(n,k,Y-1,H)||!ln(n,k,Y+_t,H)||!ln(n,k,Y,H-1)||!ln(n,k,Y,H+_t)),S>0&&(E=!1),!ce&&L+B+O>0){h[b]=tn(L/fi*f),h[b+1]=tn(B/fi*f),h[b+2]=tn(O/fi*f),h[b+3]=Math.round(re*255),m[b]=128,m[b+1]=128,m[b+2]=128,m[b+3]=255;continue}if(!ce){S===0&&E?(h[b]=0,h[b+1]=0,h[b+2]=0,h[b+3]=0,m[b]=128,m[b+1]=0,m[b+2]=128,m[b+3]=p):(h[b]=0,h[b+1]=0,h[b+2]=0,h[b+3]=Math.round(re*255),m[b]=128,m[b+1]=255,m[b+2]=128,m[b+3]=0);continue}const De=(x+.5)*o,Be=(w+.5)*o,ze=(M+.5)*o;let ye=0,Q=1,K=0;if(U===0){n.gradient(De,Be,ze,ci,o*.5);const ue=Math.hypot(ci[0],ci[1],ci[2]);ue>1e-5&&(ye=-ci[0]/ue,Q=-ci[1]/ue,K=-ci[2]/ue)}else{ye=(ln(n,k-1,Y,H)?0:-1)+(ln(n,k+_t,Y,H)?0:1),Q=(ln(n,k,Y-1,H)?0:-1)+(ln(n,k,Y+_t,H)?0:1),K=(ln(n,k,Y,H-1)?0:-1)+(ln(n,k,Y,H+_t)?0:1);const ue=Math.hypot(ye,Q,K);ue>0?(ye/=ue,Q/=ue,K/=ue):Q=1}const ne=un[D]??un[1],Ce=ne.albedo;let xe=0;const ke=ye*d[0]+Q*d[1]+K*d[2];g&&ke>0&&r0(n,De+ye*o*.75,Be+Q*o*.75,ze+K*o*.75,d,v)&&(xe=ke);const Pt=rc(n,De+ye*o*.6,Be+Q*o*.6,ze+K*o*.6,v),I=(.5+.5*Q)*(Pt?1:.06),it=1/Math.PI;let Oe=Ce[0]*(a.sun[0]*xe*it+a.ambient[0]*I),Ie=Ce[1]*(a.sun[1]*xe*it+a.ambient[1]*I),ge=Ce[2]*(a.sun[2]*xe*it+a.ambient[2]*I);ne.emissive&&(Oe+=ne.emissive[0],Ie+=ne.emissive[1],ge+=ne.emissive[2]);const Ke=Math.max(re,.25);if(L+B+O>0){h[b]=tn((Oe*Ke+L)/fi*f),h[b+1]=tn((Ie*Ke+B)/fi*f),h[b+2]=tn((ge*Ke+O)/fi*f),h[b+3]=Math.round(Ke*255),m[b]=128,m[b+1]=128,m[b+2]=128,m[b+3]=255;continue}h[b]=tn(Oe*Ke*f),h[b+1]=tn(Ie*Ke*f),h[b+2]=tn(ge*Ke*f),h[b+3]=Math.round(Ke*255),m[b]=tn((ye*.5+.5)*255),m[b+1]=tn((Q*.5+.5)*255),m[b+2]=tn((K*.5+.5)*255),m[b+3]=0}}}const s0=.7,fi=24;function ln(n,e,t,i){return n.getHard(e,t,i)!==0||n.get(e,t,i)>0}function tn(n){return n<=0?0:n>=255?255:Math.round(n)}function r0(n,e,t,i,s,r){const a=P,o=s[0]*a,c=s[1]*a,l=s[2]*a;for(let u=0;u<400;u++){if(e+=o,t+=c,i+=l,t>r||t<0||e<0||i<0||e>n.sizeX||i>n.sizeZ)return!0;if(n.solidAt(e,t,i))return!1}return!0}function rc(n,e,t,i,s){for(let r=t;r<=s;r+=P*2)if(n.solidAt(e,r,i))return!1;return!0}const ui=[P/Bt,.5,1,2,4],go=[[1,0,0],[0,0,1],[-1,0,0],[0,0,-1]];function ir(n,e,t,i,s=P*.2,r=1){const a=n.size*.5*r,o=e-n.x,c=t-n.y,l=i-n.z;if(n.shape==="sphere")return a-Math.sqrt(o*o+c*c+l*l);const u=Math.max(Math.abs(o),Math.abs(c),Math.abs(l)),h=a-u+s;if(n.shape==="cube")return h;const f=n.y-a;if(n.shape==="slab"){const v=n.size/(2*Bt)*r,m=n.y-n.size*.5+n.size/(2*Bt),p=n.size*.5*r;return Math.min(p-Math.max(Math.abs(o),Math.abs(l)),v-Math.abs(t-m))+s}const d=go[(n.dir??0)&3],g=(e-n.x)*d[0]+(i-n.z)*d[2]+a;return Math.min(h,g-(t-f)+P/Bt*.5)}function As(n,e,t=1){const i=e.size*.5+P*1.5,s=Math.max(0,Math.floor((e.x-i)/P)),r=Math.min(n.nx-1,Math.ceil((e.x+i)/P)),a=Math.max(0,Math.floor((e.y-i)/P)),o=Math.min(n.ny-1,Math.ceil((e.y+i)/P)),c=Math.max(0,Math.floor((e.z-i)/P)),l=Math.min(n.nz-1,Math.ceil((e.z+i)/P)),u=n.density,h=n.material;if(e.op==="smooth"){const d=u.slice();for(let g=s;g<=r;g++)for(let v=a;v<=o;v++)for(let m=c;m<=l;m++){const p=ir(e,g*P,v*P,m*P);if(p<0)continue;let M=0,x=0;for(let E=-1;E<=1;E++)for(let w=-1;w<=1;w++)for(let b=-1;b<=1;b++){const S=g+E,_=v+w,D=m+b;n.inBounds(S,_,D)&&(M+=d[n.index(S,_,D)],x++)}const A=Math.min(1,p/P),C=n.index(g,v,m);u[C]=u[C]*(1-A)+M/x*A}return{x0:s,y0:a,z0:c,x1:r,y1:o,z1:l}}const f=Kn(e.mat);if(e.op==="sub"||e.op==="add"&&f&&Nt(e.mat)){for(let d=s;d<r;d++)for(let g=a;g<o;g++)for(let v=c;v<l;v++){let m=0;for(let x=0;x<Bt;x++)for(let A=0;A<Bt;A++)for(let C=0;C<Bt;C++)ir(e,(d+(C+.5)/Bt)*P,(g+(A+.5)/Bt)*P,(v+(x+.5)/Bt)*P,0,t)>0&&(m|=1<<C+3*(A+3*x));if(m===0)continue;const p=n.index(d,g,v),M=n.subMask(d,g,v);if(e.op==="sub"){if(M===0||!Nt(n.hard[p])){n.hard[p]!==0&&!Nt(n.hard[p])&&(n.hard[p]=0,n.sub[p]=0);continue}const x=M&~m;x===0?(n.hard[p]=0,n.sub[p]=0):n.sub[p]=x===Fn?0:x}else{const x=(Nt(n.hard[p])?M:0)|m;n.hard[p]=e.mat,n.sub[p]=x===Fn?0:x}}if(e.op==="add")return{x0:s,y0:a,z0:c,x1:r,y1:o,z1:l}}if(e.op==="add"&&f&&!Nt(e.mat)){const d=Math.floor(e.x/P),g=Math.floor(e.y/P),v=Math.floor(e.z/P);return n.setHard(d,g,v,e.mat),n.sub[n.index(d,g,v)]=0,{x0:Math.max(0,d-1),y0:Math.max(0,g-1),z0:Math.max(0,v-1),x1:Math.min(n.nx-1,d+2),y1:Math.min(n.ny-1,g+2),z1:Math.min(n.nz-1,v+2)}}if(e.op==="paint")for(let d=s;d<r;d++)for(let g=a;g<o;g++)for(let v=c;v<l;v++){if(ir(e,(d+.5)*P,(g+.5)*P,(v+.5)*P)<=0)continue;const p=n.index(d,g,v);n.hard[p]!==0&&f&&Nt(e.mat)&&Nt(n.hard[p])&&(n.hard[p]=e.mat)}if((e.op==="add"||e.op==="sub")&&e.size<P){const d=e.op==="add"?1:-1,g=Math.floor(e.x/P),v=Math.floor(e.y/P),m=Math.floor(e.z/P);for(let p=g;p<=g+1;p++)for(let M=v;M<=v+1;M++)for(let x=m;x<=m+1;x++){if(!n.inBounds(p,M,x))continue;const A=Math.hypot(p*P-e.x,M*P-e.y,x*P-e.z),C=Math.max(0,1-A/P),E=n.index(p,M,x);d>0&&M>=n.ny-1||(u[E]=Math.max(-ct,Math.min(ct,u[E]+d*.45*C)),d>0&&u[E]>-P&&(h[E]=e.mat))}return{x0:Math.max(0,g-1),y0:Math.max(0,v-1),z0:Math.max(0,m-1),x1:Math.min(n.nx-1,g+2),y1:Math.min(n.ny-1,v+2),z1:Math.min(n.nz-1,m+2)}}for(let d=s;d<=r;d++)for(let g=a;g<=o;g++)for(let v=c;v<=l;v++){const m=ir(e,d*P,g*P,v*P,P*.2,t),p=n.index(d,g,v);if(e.op==="add"){if(g>=n.ny-1)continue;m>u[p]&&(u[p]=Math.min(m,ct)),m>-P&&(h[p]=e.mat)}else if(e.op==="sub"){const M=-m;M<u[p]&&(u[p]=Math.max(M,-ct))}else e.op==="paint"&&m>-P&&(h[p]=e.mat)}return{x0:s,y0:a,z0:c,x1:r,y1:o,z1:l}}function xa(n,e,t,i,s){const r=[],a=c=>Math.max(0,Math.floor((c-2)/e)),o=(c,l)=>Math.min(l-1,Math.floor((c+1)/e));for(let c=a(n.x0);c<=o(n.x1,t);c++)for(let l=a(n.y0);l<=o(n.y1,i);l++)for(let u=a(n.z0);u<=o(n.z1,s);u++)r.push([c,l,u]);return r}function a0(n){return!(n.op!=="add"&&n.op!=="sub"||n.size<P||n.op==="add"&&Kn(n.mat)&&!Nt(n.mat))}function o0(n){const e=JSON.parse(n),t=[];for(const i of e){if(!Array.isArray(i)||i.length!==7&&i.length!==8)continue;const[s,r,a,o,c,l,u,h]=i;if(!["add","sub","paint","smooth"].includes(s)||!["sphere","cube","slab","ramp"].includes(r))continue;const f={op:s,shape:r,size:+a,mat:+o,x:+c,y:+l,z:+u};h!==void 0&&(f.dir=+h&3),t.push(f)}return t}const l0=8208|1<<22;function uu(n,e,t,i=64,s=.12){const[r,a,o]=e,[c,l,u]=t,h=(m,p,M)=>!(m<0||p<0||M<0||m>n.sizeX||p>n.sizeY||M>n.sizeZ);let f=h(r,a,o),d=f?n.sample(r,a,o):-1,g=d>0,v=0;for(let m=s;m<=i;m+=s){const p=r+c*m,M=a+l*m,x=o+u*m;let A;if(h(p,M,x))f=!0,A=n.sample(p,M,x);else{if(f)return null;A=-1}if(g)A<=0&&(g=!1);else if(A>0){let C=v,E=m;for(let L=0;L<8;L++){const B=.5*(C+E);n.sample(r+c*B,a+l*B,o+u*B)>0?E=B:C=B}const w=.5*(C+E),b=r+c*w,S=a+l*w,_=o+u*w,D=n.gradient(b,S,_),U=Math.hypot(D[0],D[1],D[2])||1;return{point:[b,S,_],normal:[-D[0]/U,-D[1]/U,-D[2]/U],distance:w,material:n.materialAt(b,S,_),hard:!1}}d=A,v=m}return null}function c0(n,e,t,i=64){const[s,r,a]=e,[o,c,l]=t;let u=Math.floor(s/P),h=Math.floor(r/P),f=Math.floor(a/P);const d=o>0?1:-1,g=c>0?1:-1,v=l>0?1:-1,m=o!==0?Math.abs(P/o):1/0,p=c!==0?Math.abs(P/c):1/0,M=l!==0?Math.abs(P/l):1/0,x=(_,D,U,L)=>U===0?1/0:(L>0?(D+1)*P-_:_-D*P)/Math.abs(U);let A=x(s,u,o,d),C=x(r,h,c,g),E=x(a,f,l,v),w=n.getHard(u,h,f)!==0,b=0,S=-1;for(let _=0;_<1024;_++){if(b>i)return null;const D=n.getHard(u,h,f);if(D!==0&&!w&&S>=0){const U=Nt(D)?n.subMask(u,h,f):l0;if(U===Fn){const k=S===0?[-d,0,0]:S===1?[0,-g,0]:[0,0,-v];return{point:[s+o*b,r+c*b,a+l*b],normal:k,distance:b,material:D,hard:!0}}const L=Math.min(A,C,E),B=P/24;let O=-1;for(let k=b+B*.5;k<L;k+=B){const Y=s+o*k,H=r+c*k,Z=a+l*k,re=Y/P-u,ce=H/P-h,De=Z/P-f,Be=Math.min(2,Math.max(0,Math.floor(re*3))),ze=Math.min(2,Math.max(0,Math.floor(ce*3))),ye=Math.min(2,Math.max(0,Math.floor(De*3))),Q=Be+3*(ze+3*ye);if(U&1<<Q){let K;if(O<0)K=S===0?[-d,0,0]:S===1?[0,-g,0]:[0,0,-v];else{const ne=O%3,Ce=Math.floor(O/3)%3;K=ne!==Be?[-d,0,0]:Ce!==ze?[0,-g,0]:[0,0,-v]}return{point:[Y,H,Z],normal:K,distance:k,material:D,hard:!0}}O=Q}}if(D===0&&(w=!1),A<C&&A<E?(b=A,A+=m,u+=d,S=0):C<E?(b=C,C+=p,h+=g,S=1):(b=E,E+=M,f+=v,S=2),(u<0||h<0||f<0||u>=n.nx-1||h>=n.ny-1||f>=n.nz-1)&&b>1)return null}return null}function u0(n,e,t,i=64){const s=c0(n,e,t,i),r=uu(n,e,t,s?s.distance:i);return r&&(!s||r.distance<s.distance)?r:s}const gi=.12,ms=.62,h0=26,d0=5.5,vo=1.75,jn=1.62,f0=22,p0=8,xo=[.2,1.25],hu=[.15],m0=.3,g0=.27,du=[jn-.12],v0=1/120;function x0(n,e,t){return{pos:[n,e,t],vel:[0,0,0],onGround:!1,fly:!1}}function M0(n,e,t){let i=t.dt;for(;i>1e-6;){const s=Math.min(v0,i);i-=s,A0(n,e,t,s)}}const Kt=[0,0,0];function A0(n,e,t,i){const s=e.vel;if(e.fly){const c=1-Math.exp(-i*28);s[0]+=(t.wishX-s[0])*c,s[1]+=(t.wishY-s[1])*c,s[2]+=(t.wishZ-s[2])*c}else{const c=e.onGround?14:4,l=1-Math.exp(-i*c);s[0]+=(t.wishX-s[0])*l,s[2]+=(t.wishZ-s[2])*l,s[1]-=f0*i,t.jump&&e.onGround&&(s[1]=p0,e.onGround=!1),s[1]<-40&&(s[1]=-40)}let r=!1;e.pos[0]+=s[0]*i,Ma(n,e,0)&&(s[0]=0),e.pos[1]+=s[1]*i,Ma(n,e,1)&&(s[1]<0&&(r=!0),s[1]=0),e.pos[2]+=s[2]*i,Ma(n,e,2)&&(s[2]=0),S0(n,e),_0(n,e,i),r&&(e.onGround=!0);const a=gi+.05;e.pos[0]=Math.min(n.sizeX-a,Math.max(a,e.pos[0])),e.pos[2]=Math.min(n.sizeZ-a,Math.max(a,e.pos[2]));const o=e.fly?.5-jn+.6:.5;e.pos[1]<o&&(e.pos[1]=o,s[1]<0&&(s[1]=0),e.onGround=!e.fly),e.pos[1]>n.sizeY-vo&&(e.pos[1]=n.sizeY-vo,s[1]>0&&(s[1]=0))}function S0(n,e){let t=!1;for(let i=0;i<4;i++){let s=!1;for(const r of e.fly?du:e.crouch?hu:xo){const a=e.pos[0],o=e.pos[1]+r,c=e.pos[2],l=-n.sample(a,o,c);if(l>=gi)continue;n.gradient(a,o,c,Kt);let u=Math.hypot(Kt[0],Kt[1],Kt[2]),h,f,d;u<1e-4?(h=0,f=1,d=0):(h=-Kt[0]/u,f=-Kt[1]/u,d=-Kt[2]/u);const g=Math.min(gi-l,.35);if(f>.55&&!e.fly)e.pos[1]+=Math.min(g/f,.4),e.vel[1]<0&&(e.vel[1]=0),t=!0;else{e.pos[0]+=h*g,e.pos[1]+=f*g,e.pos[2]+=d*g;const v=e.vel[0]*h+e.vel[1]*f+e.vel[2]*d;v<0&&(e.vel[0]-=v*h,e.vel[1]-=v*f,e.vel[2]-=v*d)}s=!0}if(!s)break}!t&&!e.fly&&-n.sample(e.pos[0],e.pos[1]+xo[0]-.06,e.pos[2])<gi&&e.vel[1]<=.01&&(t=!0),e.onGround=t}function _0(n,e,t){const i=e.fly?du[0]:e.crouch?hu[0]:xo[1],s=e.pos[0],r=e.pos[1]+i,a=e.pos[2];let o=-n.sample(s,r,a),c=0,l=0,u=0;if(o<ms){n.gradient(s,r,a,Kt);const m=Math.hypot(Kt[0],Kt[1],Kt[2]);m<1e-4?o=1/0:(c=-Kt[0]/m,l=-Kt[1]/m,u=-Kt[2]/m)}const h=y0(n,s,r,a,ms);if(h&&h[0]<o&&(o=h[0],c=h[1],l=h[2],u=h[3]),o>=ms||o<gi-.2||!e.fly&&l>.6)return;const f=Math.min(1,(ms-Math.max(o,gi))/(ms-gi)),d=e.vel,g=Math.exp(-t*d0*f*(e.fly?.3:1));d[0]*=g,d[2]*=g,e.fly&&(d[1]*=g);const v=h0*f*t;d[0]+=c*v,e.fly&&(d[1]+=l*v),d[2]+=u*v}function y0(n,e,t,i,s){const r=[Math.floor((e-s)/P),Math.floor((t-s)/P),Math.floor((i-s)/P)],a=[Math.floor((e+s)/P),Math.floor((t+s)/P),Math.floor((i+s)/P)];let o=s,c=0,l=1,u=0,h=!1;const f=P/Bt,d=(g,v,m,p)=>{const M=Math.max(g,Math.min(e,g+p)),x=Math.max(v,Math.min(t,v+p)),A=Math.max(m,Math.min(i,m+p)),C=e-M,E=t-x,w=i-A,b=Math.hypot(C,E,w);b>=o||(o=b,h=!0,b>1e-5?(c=C/b,l=E/b,u=w/b):(c=0,l=1,u=0))};for(let g=r[0];g<=a[0];g++)for(let v=r[1];v<=a[1];v++)for(let m=r[2];m<=a[2];m++){if(!Nt(n.getHard(g,v,m)))continue;const p=n.subMask(g,v,m);if(p===Fn){d(g*P,v*P,m*P,P);continue}for(let M=0;M<Bt;M++)for(let x=0;x<Bt;x++)for(let A=0;A<Bt;A++)p&1<<A+3*(x+3*M)&&d(g*P+A*f,v*P+x*f,m*P+M*f,f)}return h?[o,c,l,u]:null}const sr=.12;function Ma(n,e,t){const i=e.fly?jn-.3:0,s=e.fly?jn+.15:e.crouch?m0:vo,r=[e.pos[0]-sr,e.pos[1]+i,e.pos[2]-sr],a=[e.pos[0]+sr,e.pos[1]+s,e.pos[2]+sr],o=r.map(h=>Math.floor(h/P)),c=a.map(h=>Math.floor((h-1e-4)/P)),l=t===1?e.pos[1]+(i+s)*.5:e.pos[t],u=(h,f)=>{for(let d=0;d<3;d++)if(f[d]<=r[d]||h[d]>=a[d])return!1;return l<(h[t]+f[t])*.5?e.pos[t]-=a[t]-h[t]+1e-4:e.pos[t]+=f[t]-r[t]+1e-4,!0};for(let h=o[0];h<=c[0];h++)for(let f=o[1];f<=c[1];f++)for(let d=o[2];d<=c[2];d++){if(!Nt(n.getHard(h,f,d)))continue;const g=n.subMask(h,f,d);if(g===Fn){if(u([h*P,f*P,d*P],[(h+1)*P,(f+1)*P,(d+1)*P]))return!0;continue}const v=P/Bt;for(let m=0;m<Bt;m++)for(let p=0;p<Bt;p++)for(let M=0;M<Bt;M++){if(!(g&1<<M+3*(p+3*m)))continue;const x=[h*P+M*v,f*P+p*v,d*P+m*v];if(u(x,[x[0]+v,x[1]+v,x[2]+v]))return!0}}return!1}function fu(n,e,t){for(let i=n.sizeY-1;i>0;i-=.25)if(n.sample(e,i,t)>0||Nt(n.hardAt(e,i,t))&&n.hardOccupiedAt(e,i,t))return i+.25;return 1}/**
 * postprocessing v6.39.2 build Sun Jun 28 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var E0=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Gt;return t.setAttribute("position",new lt(n,3)),t.setAttribute("uv",new lt(e,2)),t})(),Ot=class Mo{static get fullscreenGeometry(){return E0}constructor(e="Pass",t=new ns,i=new Ds){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new wt(Mo.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new ns),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=gn){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof pt||t instanceof zn||t instanceof Dt||t instanceof Mo)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},w0=class extends Ot{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){const r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},T0=`#ifdef COLOR_WRITE
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
}`,ko="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Ho=class extends dt{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new le(null),depthBuffer:new le(null),channelWeights:new le(null),opacity:new le(1)},blending:Ct,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:T0,vertexShader:ko}),this.depthFunc=vr}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},pu=class extends Ot{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new Ho,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new pt(1,1,{minFilter:et,magFilter:et,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==vt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===nt&&(this.renderTarget.texture.colorSpace=nt))}},ac=new Ye,Go=class extends Ot{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),c=r!==null,l=a>=0;c?(n.getClearColor(ac),n.setClearColor(r,l?a:o)):l&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),c?n.setClearColor(ac,o):l&&n.setClearAlpha(o)}},b0=class extends Ot{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new Go(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){const r=n.getContext(),a=n.state.buffers,o=this.scene,c=this.camera,l=this.clearPass,u=this.inverted?0:1,h=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,u,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?l.render(n,null):(l.render(n,e),l.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,c)):(n.setRenderTarget(e),n.render(o,c),n.setRenderTarget(t),n.render(o,c)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},Aa=1/1e3,C0=1e3,D0=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*Aa}get fixedDelta(){return this._fixedDelta*Aa}set fixedDelta(n){this._fixedDelta=n*C0}get elapsed(){return this._elapsed*Aa}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},R0=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new pu,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new D0,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples}set multisampling(n){const e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new Ae),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===vt&&n.outputColorSpace===nt&&(this.inputBuffer.texture.colorSpace=nt,this.outputBuffer.texture.colorSpace=nt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=this.inputBuffer,e=new Bo;this.depthTexture=e,n.stencilBuffer?(e.format=es,e.type=$i):e.type=cn;const t=e.clone();return t.name="EffectComposer.StableDepth",this.depthRenderTarget=new pt(n.width,n.height,{depthBuffer:!0,stencilBuffer:n.stencilBuffer,depthTexture:t}),t}blitDepthBuffer(n){const e=this.renderer,t=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(t);const r=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,o=n.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){const s=this.renderer,r=s===null?new Ae:s.getDrawingBufferSize(new Ae),a={minFilter:et,magFilter:et,stencilBuffer:e,depthBuffer:n,type:t},o=new pt(r.width,r.height,a);return i>0&&(o.samples=i),t===vt&&s!==null&&s.outputColorSpace===nt&&(o.texture.colorSpace=nt),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new Ae),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(s.width,s.height),n.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(n of t)n.setDepthTexture(o)}else{const o=this.depthRenderTarget.depthTexture;n.setDepthTexture(o)}}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(o,c)=>o||c.needsDepthTexture;if(!e.reduce(r,!1)){const o=this.depthRenderTarget.depthTexture;n.getDepthTexture()===o&&n.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,r,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(i.depthTexture=this.depthTexture,s.depthTexture=null,o.render(e,i,s,n,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){t.renderToScreen=o.renderToScreen;const c=e.getContext(),l=e.state.buffers.stencil;l.setFunc(c.NOTEQUAL,1,4294967295),t.render(e,i,s,n,a),l.setFunc(c.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof b0?a=!0:o instanceof w0&&(a=!1)}}setSize(n,e,t){const i=this.renderer,s=i.getSize(new Ae);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);const r=i.getDrawingBufferSize(new Ae);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Ot.fullscreenGeometry.dispose()}},yn={NONE:0,DEPTH:1,CONVOLUTION:2},$e={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},I0=class{constructor(){this.shaderParts=new Map([[$e.FRAGMENT_HEAD,null],[$e.FRAGMENT_MAIN_UV,null],[$e.FRAGMENT_MAIN_IMAGE,null],[$e.VERTEX_HEAD,null],[$e.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=yn.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Zn}},Sa=!1,oc=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Ht:t=this.materialsFlatShadedDoubleSide;break;case Tt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Ht:t=this.materialsDoubleSide;break;case Tt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof dt))return n.clone();const e=n.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const i=n.clone();for(const s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=En;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Tt,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Ht,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Tt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Ht,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,Sa){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Sa}static set workaroundEnabled(n){Sa=n}},Yn=-1,bt=class extends On{constructor(n=null,e=Yn,t=Yn,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new Ae(1,1),this.preferredSize=new Ae(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new Ae,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Yn?t.width=e.width:e.height!==Yn?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Yn?t.height=e.height:e.width!==Yn?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Yn),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Yn}},Xe={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},P0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",L0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",B0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",U0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",F0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",N0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",O0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",z0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",k0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",H0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",G0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",V0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",W0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",X0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Y0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Q0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",q0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",K0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",j0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Z0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",J0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$0="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ev="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",tv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",av="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ov="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",lv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uv=new Map([[Xe.ADD,P0],[Xe.ALPHA,L0],[Xe.AVERAGE,B0],[Xe.COLOR,U0],[Xe.COLOR_BURN,F0],[Xe.COLOR_DODGE,N0],[Xe.DARKEN,O0],[Xe.DIFFERENCE,z0],[Xe.DIVIDE,k0],[Xe.DST,null],[Xe.EXCLUSION,H0],[Xe.HARD_LIGHT,G0],[Xe.HARD_MIX,V0],[Xe.HUE,W0],[Xe.INVERT,X0],[Xe.INVERT_RGB,Y0],[Xe.LIGHTEN,Q0],[Xe.LINEAR_BURN,q0],[Xe.LINEAR_DODGE,K0],[Xe.LINEAR_LIGHT,j0],[Xe.LUMINOSITY,Z0],[Xe.MULTIPLY,J0],[Xe.NEGATION,$0],[Xe.NORMAL,ev],[Xe.OVERLAY,tv],[Xe.PIN_LIGHT,nv],[Xe.REFLECT,iv],[Xe.SATURATION,sv],[Xe.SCREEN,rv],[Xe.SOFT_LIGHT,av],[Xe.SRC,ov],[Xe.SUBTRACT,lv],[Xe.VIVID_LIGHT,cv]]),hv=class extends On{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new le(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return uv.get(this.blendFunction)}},ss=class extends On{constructor(n,e,{attributes:t=yn.NONE,blendFunction:i=Xe.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new hv(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=Zn,this._outputColorSpace=sn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=gn){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof pt||e instanceof zn||e instanceof Dt||e instanceof Ot)&&this[n].dispose()}}},Vo={MEDIUM:2,LARGE:3},dv=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,fv="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",pv=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],mv=class extends dt{constructor(n=new ht){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new le(null),texelSize:new le(new ht),scale:new le(1),kernel:new le(0)},blending:Ct,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:dv,vertexShader:fv}),this.setTexelSize(n.x,n.y),this.kernelSize=Vo.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return pv[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},gv=class extends Ot{constructor({kernelSize:n=Vo.MEDIUM,resolutionScale:e=.5,width:t=bt.AUTO_SIZE,height:i=bt.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new pt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new bt(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new mv,this._blurMaterial.kernelSize=n,this.copyMaterial=new Ho}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.renderTargetA,c=this.renderTargetB,l=this.blurMaterial,u=l.kernelSequence;let h=e;this.fullscreenMaterial=l;for(let f=0,d=u.length;f<d;++f){const g=(f&1)===0?o:c;l.kernel=u[f],l.inputBuffer=h.texture,n.setRenderTarget(g),n.render(r,a),h=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==vt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===nt&&(this.renderTargetA.texture.colorSpace=nt,this.renderTargetB.texture.colorSpace=nt))}static get AUTO_SIZE(){return bt.AUTO_SIZE}},vv=`#include <common>
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
}`,xv=class extends dt{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:_i.replace(/\D+/g,"")},uniforms:{inputBuffer:new le(null),threshold:new le(0),smoothing:new le(1),range:new le(null)},blending:Ct,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:vv,vertexShader:ko}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},mu=class extends Ot{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=bt.AUTO_SIZE,height:r=bt.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new xv(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new pt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const c=this.resolution=new bt(this,a,o,i);c.addEventListener("change",l=>this.setSize(c.baseWidth,c.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==vt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Mv=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,Av="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",Sv=class extends dt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new le(null),texelSize:new le(new Ae)},blending:Ct,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Mv,vertexShader:Av})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},_v=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,yv="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",Ev=class extends dt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new le(null),supportBuffer:new le(null),texelSize:new le(new Ae),radius:new le(.85)},blending:Ct,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:_v,vertexShader:yv})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},wv=class extends Ot{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new pt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new Sv,this.upsamplingMaterial=new Ev,this.resolution=new Ae}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){const{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:c}=this,{downsamplingMipmaps:l,upsamplingMipmaps:u}=this;let h=e;this.fullscreenMaterial=o;for(let f=0,d=l.length;f<d;++f){const g=l[f];o.setSize(h.width,h.height),o.inputBuffer=h.texture,n.setRenderTarget(g),n.render(r,a),h=g}this.fullscreenMaterial=c;for(let f=u.length-1;f>=0;--f){const d=u[f];c.setSize(h.width,h.height),c.inputBuffer=h.texture,c.supportBuffer=l[f].texture,n.setRenderTarget(d),n.render(r,a),h=d}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of i)s.texture.type=t;if(t!==vt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===nt)for(const s of i)s.texture.colorSpace=nt}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},Tv=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,bv=class extends ss{constructor({blendFunction:n=Xe.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=Vo.LARGE,resolutionScale:c=.5,width:l=bt.AUTO_SIZE,height:u=bt.AUTO_SIZE,resolutionX:h=l,resolutionY:f=u}={}){super("BloomEffect",Tv,{blendFunction:n,uniforms:new Map([["map",new le(null)],["intensity",new le(s)]])}),this.renderTarget=new pt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new gv({kernelSize:o}),this.luminancePass=new mu({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new wv,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const d=this.resolution=new bt(this,h,f,c);d.addEventListener("change",g=>this.setSize(d.baseWidth,d.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===nt&&(this.renderTarget.texture.colorSpace=nt))}},Ao=class extends Ot{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,s){const r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==vt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}};function Cv(n,e,t){const i=new Map([[xi,1],[bo,2],[Ut,4]]);let s;if(i.has(e)||console.error("Invalid noise texture format"),t===vt){s=new Uint8Array(n*i.get(e));for(let r=0,a=s.length;r<a;++r)s[r]=Math.random()*255+.5}else{s=new Float32Array(n*i.get(e));for(let r=0,a=s.length;r<a;++r)s[r]=Math.random()}return s}var Dv=class extends yr{constructor(n,e,t=xi,i=vt){super(Cv(n*e,t,i),n,e,t,i),this.needsUpdate=!0}},gu=class extends Ot{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Go,this.overrideMaterialManager=t===null?null:new oc(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new oc(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.selection,c=a.layers.mask,l=r.background,u=n.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,a):n.render(r,a),a.layers.mask=c,r.background=l,n.shadowMap.autoUpdate=u}},vu={COLOR:2},Rv={DISABLED:0},gs={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},qt={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},vs={DEFAULT:0,ESKIL:1},Iv=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
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
}`,Pv=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,Lv=class extends dt{constructor(n=new Ae,e=vu.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:_i.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new le(null),depthBuffer:new le(null),predicationBuffer:new le(null),texelSize:new le(n)},blending:Ct,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Iv,vertexShader:Pv}),this.edgeDetectionMode=e}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=gn){this.depthBuffer=n,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(n){this.defines.EDGE_DETECTION_MODE=n.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(n){this.edgeDetectionMode=n}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(n){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=n.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(n){this.localContrastAdaptationFactor=n}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(n){this.defines.EDGE_THRESHOLD=n.toFixed("6"),this.defines.DEPTH_THRESHOLD=(n*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(n){this.edgeDetectionThreshold=n}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(n){this.defines.PREDICATION_MODE=n.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(n){this.predicationMode=n}set predicationBuffer(n){this.uniforms.predicationBuffer.value=n}setPredicationBuffer(n){this.uniforms.predicationBuffer.value=n}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(n){this.defines.PREDICATION_THRESHOLD=n.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(n){this.predicationThreshold=n}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(n){this.defines.PREDICATION_SCALE=n.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(n){this.predicationScale=n}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(n){this.defines.PREDICATION_STRENGTH=n.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(n){this.predicationStrength=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},Bv=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
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
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,Uv="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",Fv=class extends dt{constructor(n=new Ae,e=new Ae){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new le(null),searchTexture:new le(null),areaTexture:new le(null),resolution:new le(e),texelSize:new le(n)},blending:Ct,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Bv,vertexShader:Uv})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(n){this.uniforms.searchTexture.value=n}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(n){this.uniforms.areaTexture.value=n}setLookupTextures(n,e){this.searchTexture=n,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(n){const e=Math.min(Math.max(n,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(n){this.orthogonalSearchSteps=n}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(n){const e=Math.min(Math.max(n,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(n){this.diagonalSearchSteps=n}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(n){n?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(n){this.diagonalDetection=n}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(n){const e=Math.min(Math.max(n,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(n){this.cornerRounding=n}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(n){n?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(n){this.cornerDetection=n}setSize(n,e){const t=this.uniforms;t.texelSize.value.set(1/n,1/e),t.resolution.value.set(n,e)}},lc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",cc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAIwCAYAAAABNmBHAAAgAElEQVR4Xuy9CbhlV1ktOvbpq09DkiIkUBI6kxASIH0DlAQiIK1wRfSJTx+i4JX7vKIigs8HXpXvqVcvrcC9agQ7IDTSSWgqCQQliDRBJKkkhDSkqVPNqVOnP+8b//rH3P+eZ+199tlznVTlvVrft7+1T7OaueZY42/m37QALKNk2wHg1pITlB17mC+Pp11W3X/LHyT32vhg48/5SOv+PnwpsHA70JoGlueB1iKApeqzvOzn44GatTB76Xzhd7suBR7+WWADgDEAwwCG/L54b/poDLrHuvvm70Z2Avhsc+PVcxscBU8F8C8ADg5+ipIjD/PlGwfgju8B924E5seARUfLsiNmqQW0IjL8+7L2NYD/7COBzfcCm+aB8SVgdAkYIRCXKyDax4EdAanL5PuNPllNvXDlAHwFgP8AcC2AhRIoDXbsYb48dl5WkVFTE3LGDcC9m4CZCWBuFFgeAZaGAYJQQCRqDHT+McJrVb8zwATUXH02MHYfMHEIGFsAxgjApQqACYQORjtd/B7Axt/z79sC0+cMPgjjlwPwVwHcA+DfAHzTxcVgWBroqMN8+cYBeM71wH0TwKExYHYUWCIAHYRLTlkCYgcIBcAgU/n3qy8GRu4HRgnAOWBkERhddPAJhGJDBxkvw7cqimr+zFM/ZLnZF64cgL8BYD+AWwB8x/dlWuWagHiYL984AJ/0RWBy1AE4AizyM1yxYAcTigW55xMbAkxEiwEdkJ/ZCQxPAiOHgBECcKEC4TBZcKkSv+mTieNcNPNC26mLNsj45QD8LQDTAO4GcJt/7iw2bfoG4WG+vAGwm9ExiEg69zpg/wgwPQLMjgALzn4E4aIzoJjQ9g4024uygkj+pyuAoX0VAIfngOH5NgCHMhAm8Sv2y3XDZeBhNIp8OzJE8OsBzAKYBHAXgDt8/4O+MVT0j4f58o0D8Pxrgf3DwMwIMEPQEYRkNwfgsuuDZLskip0No0gWMD/9HGDoADAkAC4Aw/wsAgZAgs2Z0ABI0GU6IVmKv+f28KDnHxkA/G0A8y6G73N9kOCjXnh/Ebb6OvgwX75xAF5wLTA1VIHPADgMLDj4yIA5AAm6aCUnv4oz46eeDwxNAUMzwJAz4BABSNDFTwSfg7DDKHE23MG5PqIY8A1u/dINs9dBdy8AgnGPM2NfUBrsnw7z5RsH4IXXAAcJviFgluAbygBINnSLWOAjGxJ4pgOKDV0v/OSLKp8iGXBovhLBBOCQM2ACoTOhnYrAdItYbCij5JFzRyIAqRccAnDAQUjg6UNQ7hsMXP0cRQAexss3DsCLCECCLwCQzMcPwUi2MwAScAKbfnY/YRLFQ8DHX+IAJAMSfDkAF13kLvleIjhjQQHxUVS3jjgGpKeeNzYVQEjgUS8k+PghONdhIwAP4+XXBYCHKIJbwJyDTgaIAdCBJx3Q2M8tYAHP9m4df/ylQOsQ0JqtRLCx30K1wtLBggScQOgsKBGcWHAJeOwRC0BSM1mQIKRbhh+Bj98JQP6t4U0APEyXXxcAEnxkQAFwoVUxID9kvQg+c1C7vidRbIDkc24B//hTQGumDcCWA5DgMxASdNIFBUI5pCML8v8API5zfEQx4BudgqiczviSnJhQwCP4BMCGl+wO8+U7AJi/W4O4YS6+pmK/2ciADsAOBhTIIiAJnPB7AvNjP+0AnANaYkAHX2JBAc+tYaJXOqBZv24Vc386XW5dtkHGW+4HFAJonpOe+YYQZAShgKjv3PNvPQaxVoI8zJdfFwASfPzMUwS3Kt1v0UFIlos6oDFdAGFcliMAP/ryAEAGNwQRnDOgLbdlIEwrIs6AZ/QgkMMHQF6ZAKQcJAsSYPwIeAIk9wJgoPK1gi7+PwF4GC/fOAAvIQPSs0URTPBJ/Pp3GSEGRHfBCIQ0xowBtUbcAj7ys5X4Jfu1HIAGQrIgQRXEsAFQIORDFhiDY/rMHmrU4QUgR08AkgUjCAW6CD6CkwBsAIQC4GG6fPMA3OXiNzCg2I9gNCMksmAAoemDzoimFwL48M85AKkiuQVMAAp8CYRRDAt8GQiJ67N6GJODAXAHlsGguscA2AJg1IPGYmxOpBxFWkRN9LsATgIwXnNs/v/5z/9XCf8BO3YAtxbc/46/KDt+5+ea1Yku2VUxHz/z0v24FwMGK1gWsK2OUUxHHdCBeRUB6OxHABr4ZICIBd0QWSF+XRdMTAjgCdTrG9cBNwE4F8CpDkICyYLGsuhFt6zs+gISwUen8zEAjgMw4cfx2H6O/90yAFo84Cbg4ID3/9TfLTt+5+ebnRABkODjx0SwPi5ec/FrYpmqSAxM8Dn60CsqAFI6GfhqAMiDE/gokmvEr0C4PgDkBQm40wE8zMFEUDKEVoxIMLl/KS73mE7H9d+vcKHQQcjwW0Yu9nP8m8sAmOIBuWY6wP2/4s0ezjjg8TuvaR6ABJ70vxUApGrm7EbGE+i472BAB+WHfqHS/eoAaEwY2E9+wLSXTqhI7CXgnB6LCoOJ4BiST+hTnG0HcCwAglCx3ARoZEVFXnBPp/O/A/hXACc7CPs9/i1lAOyIB+RDX+P9/+pbQjjjAMfv/PL6AFDs1wFAgs/9fgKfgdE/ZEpuiQlbwAde6QAMBgiRmsSwA9BY0JfjovGRDBMH4TlcXGhcBOc6HkF0gjPhZgchxTLZMAci/04W/B6Ab3t09EPXcPyflgFwRTwgJ2MN9/8bf5qFM67x+B/aW4XQz42FeL0YrRyikztUFw0704mf9kXgxhOAqc3AAsPyRxxQCs/PdXOFY0W1KHy3QIUGtx+6vdnx1vsB+dsTncm2AogglFgVEAlUWrOMB2RyEmMCGQ/Y7/HvKns6tfGAnJQ+r/9b76oJZ1zD8WdyQjYBh8aBhVEHjELouQ8ukQ7VRSCJAALwkr+sALhnGzDD3JAJYJHg9uhoi4bx8ytkWUtvHT/7+Zc4dw1uZ3612fH2dkQf7yxIEEockwkJQn4IQoq8unhAhmPRKKFx0uv4K8ueTs94wD7u//VX9ghn7OP4c+4G7h8HpseB+dF2AKlFLwuAIZ8jD6NPrOhAffmfA9/ZBuzZCkyRWSeqBCWyoYGQ5yQrBpDbum/ME1HoPo0XEkSD2zlfbna8q6+EUJcTCxKEtHL5EQjP6BEPyIgYAZBvYt3xHyx7OqvGA65y/7/9wVXCGVc5/sl7qxD66dEqiYgRzAqhN1A4CBNAAlDyAFI+iZ9/N3DLJuC+jcDUBmCWyUnOrmTYCMIOkNclLg0B8/RsNLg9+UvNjnd1APLmmQpFHyEBROuWACQT8nN+H/GAvY7/VNnT6SsesMf13/CpahGnZzhjj+PPmwX2MYdDIfQexWyBAwEUOQDrRDN/98p3A7dvAO6fAA5sqHJDBEAyoUVGkwEd6HR12XU4kwzfl6fCXTZzjy57vvnR513X7Hj7AyDvggAUi9EyFgiZqNxPQF6345nOWbD1HQ/Y5fpvuLa/2+82/vNHgAPDFQDnhoF5j2C2qBWCI8bw1eRw5CL5l94L3DEOTI4DB8Y9OWmsEu/zBJ3rgsaybqBob/7A4C7jtWcooRrczr+u2fH2D0AOQgAUCxKEP7aGgLy64+m6KdjWFA9Yc/03/Osa4glrjr+AupqHz1sEs0cxG0BC9HIePLoit9eNkVf9L+DuUWByDJgaq4ybGYLPAWgiXmLedUE7dwC7saL7CqfPKXi4NYdaykCD410bAHlDEsNiwZ9wAPYbkJcfz6T2gm3N8YDZ9d/wHxUA+739fPwXPrSKYGb+BuP3jAFDElFH9HIWwbzCIGkBr/or4J4RYO8oMOW6ZVcAuvi1Cgoha04BCwT5gfMKHm7NoRde2+x41w5A3hQZkADk5+cGiAeMx3+/7AENFA8Yrv/G71cAXFM4Yzj+otOAaQLQA0gZxaIIZtMDFTigKJV8H9Iq6aZ59ZXAvSPAvpEKgBTtBODcSCWCZeRYtpzrmLyeGNCAyFl1v+Hei8qeb370Rdc2O97BAMi7EgB/2QG41nhAHU9LuWAbOB7Qr//GPRUA13r7Gv9FZwIMoVcEswEwfDoimEP0shKKtIphaZQAXv1+YM+wA3DEdcvRKkGJADQQEsQuhi1Tjt95vBsh5nx2IO59SsHDrTmUOStNjndwAAqEry0IyCMICkOyiuIBNwBvPFQQT7gBuPjc9oRYAIHyOEL4vIFEYVNaOou5vCGE/tV/A0wOVcnpzI47NOri3QFIBpSeaSDUdYLOSWvYImSGgftpJDa4MWJbAGxivGUA5MAOc0Be6eVLj7/4Mk+hzCOYPYpZDBiNkLh+G/M3yFyv/ltgL3W3YQfgcFUhgRY2PwY+Z7/EhAR1SFyXCOb57r28QfQBsJQBMn5D4y0HYLPje9Cd7RIC0PM3EiMofF4gVCBp1P840ix/gyz56r+vAMjk9Gl375iB4+CzveuZdLkkEPJ8ZEfX/6R73vOjzT5Si9hucLxHAVg4PwJgRwh9CKOXK8YA4ZEqKZXSQWh5P+5AftXfA/uGKvYjCKn72cctbFrZNECka5L5CPwIPtMH3TVz17MLB5gdLgA2Nd6jACycHwLQxFEUSR5ASvARDB0h9AQb9bXIgCGk6lUfAPYTgEPAITKgg1BObk58srTJgG58WMkWMaAbQQT1nc8rHGANAJsc71EAFs4PAagQestgC1lsBJ4BMCSOK6dDUcwqqaFiQr/0QeAAAdjy+jBiQQeeMSBZT3nCPUDIa9z+/MIB1gCwyfEeBWDh/BCAeQSzgkjFfGLBBD5nxQ4DxN0wv3hVxX5TBGDwL5obxvVA5YqYL5BeMLd66YYxJpRB0gK+96LCAdYAsMnxHgVg4fwIgMrhUPKQ2C+Bz0PmBTqBMQehAbDlIjj4F80KJguSVZ0FuXpjoCOgXawLjALhbT9eOMAuAGxqvEcBWDg/l1IE05Ed0ygZnyHdz0VwCqEPIfNyx0QQvvLDFQCp+8nfZk5und8tXwIgWcHSNX0N2CJmnAl3v6RwgNnhl17T7HiPArBwfghAS7mV/hey2JS9FvM3BLpUUi1YwDRMXvkRYJoAlAh2l0dcZ04s6JUTDIjyBcrl4yDc/dLCAdYAsMnxHgVg4fxwKVwJgGEJNmWtxpQMpX9on2eRhVA+O56AjMfnP+e3Xvf3NwG4xIPTleiY55bpGh6UbafNU0l0z0p+5Jh5HqYJ6b51nP6XP8cx12XNHQVgIQB/bFPVg2OC7Q+WgVFWng/FvtWLI06uWh5oguKEcXVS/9sEAF//VGD7t4ETDgJbF4CNi8CGZWBs2fPL/H6Vwp2KEtVk4fJ+v/EIYPN9wKa5qu+IncfPwXHVZe/aOL3EbwS7xv8A1rQvnO0j8PArTgTGZ4BxFv9mIxhOCGsv+0OPYDRghcLfkWkEuq0+G00x4OtfDGz+d2DbHmDLjL8si8AYP/7CGIAiEEMTG92zXqSbH+d9R2aA0XnvO+JjthiIrOVDHHPOkBrzUQAWAPsZp3oPDpa/Xag6EVkLBK+5rAnJC3/nYk/APD704WiEAV8OTHwX2LQH2DgFbJgFNrBhjd8r79deGoEwsllgNBOzy8CdjweG9wBj08AIAci2D6HafmyAk4/Z7SJ72hGYRwFYAMDLTwOGp4FRFgD3HhzqRGQiyeurqOdG6r0Rm8IEZjzRlkiqCWoEgK8Axm4BJu4HJhyAbFhDxmbDGnZO4j0SgLGDkpibgEq66TJw/1nA0F5gdLpq+zDqFfd5LMeWqu5HNST0uJOIllg+qgMWgI+HPv0xwLA3gWHpW2sC441gCECbmKziaGrnUdMO4aHeh6MxAP4SMHI7ML4HGD8AjHvHJGNAgpDgY/ck3stipRemvVhc+uASMPUEYGh/9dIRgGx8Y+MNbR/00uVtH0wEx94j/v0oAxaA8Ed+GBieAYZZg5kADC0QWGOFzGJlcGPzl1BxNLXD8sk4xftwNAbA/wwM3wGMUmxOOQBnHXzetIYvibonmSiuYTNjriVg7glAiwBk0fNZH6+PmX9P6kfNmCXGpftJ7TgKwBIAnln14BAAYxMYm5C6RjCyCoOyr0qkD/c+HI0B8DXA8N3AyCQwesD1VQKH7EcASm1Q+y4CkN9pUKiVF5nLvy+fBbTUd8QBaH1HvNBROiZvfsNnrF4kcvPwpdsBLBeU18Nf7AB23Dp4ecHC8oBgUlJJecLS+7+WOpE3gbE+HKw+yoevCYkMGKqPJrdEKARutaFYRs1fiEZ0wP8CDN8LDO8FRqYq3W10pgKgfYLaYCzootgA6KXaTA90y374TKB1sBozy77xHFZ536utRgAmEaw6g5kUSFZwSXnA330qsOlfgHMPDlZesLA8IOjoLypPWHj/11EnCiVwkz7kAExtsGraYUWdSDX5TmsagL8KDBGA7Bd30JsW0oWivnEOQNP7yGTSBR101AlZSUtGyfgZDkCWY1HnJdcBVe6325hTvelg2CQjZNDygG/2An0j1wKnL6y9vGBheUC8prQ8YeH9X39OVQSc7Mc6fCaKvAeHdCIVf4yMYCynTpX+nb97NJmlSQb8r8DQHm9YOFUZTKOzoXGhs6AxF0HIexcLBvWBuiHN8s2ne98R3qc6L4Vyb2oBVjfm9MIFHbjDCh6kPOBbQoG+oW8CO5bWVl6wsDwgfr20PGHh/X/1iaEIuDcCTIW/1Q4rFv8OnYiW3c+W2iKwUjKbyjQNwL1uuR6sAEgDgq1brXOmV81PxhNB6DUDBSYzQJwFtz623XcktX1Q1VWKaTF/zZhVazBVYA1tX5MazsGvobwe/jQr0Ne6BTh5uf/ygoXlAfG60vKEhff/rSe1i4DnTWDUACY1guFTDqLYdCBvf6DJYSMYATBfOx1kLfj1v1axH10nQ3Sd0GUkBnTfpemtBJgseIKQAHLQcVxa2TnuMW0Aqui5es8xBIegVdVVE8VhzHnLh65WMB9An+X18K6aAn2tO4ETl6vqbKuVFywsDwhevqg8YeH93/Rk70JE90nowxZbIJjvS3WYNSGUwGHJTpPxwwcbBuBrgRYBeKACn7VtpdUu/c0NJxO9BIxcKu4TTODzbkonPLoaL0vyUQRb2y8HsL1ckfWzMeuFi40Qezqi+yiPhyt7FOjr6/gCFwgP7Xb5vssTFt7/nQRg6MGRWmDRoeyTlpgw68GRTwgZgo1gGmXAX6/8dtaylSKY/koyID9BhzML3q1gAos2AcOrZYSoq/pJp1VtODRm9Z3LS/7WjVkvXOzEtOpKyGrlAT+4SoG+VY8vBGCvy/dVnrDw/vee65NBJiAjBIVcAJQjOm+DkCZEeiGAMw6sAwDZsJrAdhFM9rPGhd4904Co5oVuCZPV6kD40Ec6+9W8dBTBsfdc3nkpvnB82fp2RPcs79dHgb51LA9ofsDV6vut5/3PnxcAmLVBiDqgevDaJLkYrpuQxzcNwN8AWgIgRbB8loEBzXDwl4cGiDGft58SCOWGedgjvOJ+bPvgRkiuA+ZjzhnQQOiFNVbloa7l/fos0LdO5QENgEXlCfs8Qbf7HyMA3QVjYihYhLENgjX9y/qwxQmRU/asfd0ZcLU2CHVGyusJQLKfVi98CS12T5f7iECkHpsMkAhCF8+nshWH2I/jXsOYO144GV/9ApAIrS3vt4YCfetQHtAA2G+/4PW4/2PPbzMgmUMi2NoeSCRxIt2/FvuxWURIWCXg357gfTjEDNIHnTRXRCpH5ugKwGl3HpMBXQc0v6WLYVm/5limj04rG762K2uYY9jBkr9+rI03NL5ZbczS/dJ+LQyoga4o77fGAn0NlwdMAOy3vl/T938KAcj121z8Bn+Y9eWQJRz8Y6kNagDh2ey5EvxjxQD8TWdAuneCCO4An1vw5vdzQMmdktwq7pLZQR+dM34+ZumAxvY1Y04uqOAJ6FsExzeto7zfAAX6GiwPaLWR1lrfr8n7f/Rl3QGzmsis+/uO71V9OFgP2gpPhgr7TGRqRUT6dyvr4aIs/pm/2zVUNbBSv6G8e5pEv0Cvec7Po7+bTtjlBRlkvAMBkDeQyvsNWKCvofKACYBrre/X1P0/oWEAnnFD1YdjhtXxR73mX10FfCHHE9pVWcGAI/S0gKsfA2y+twrFZw6Hxf/F0Pk8Ri/kpGSnMuDx5T0iACgQHioo0NdAecBUHW6QdsV2/cL7v/Cyqr5gnc42CCOcfX1VIZ/V8We9IDmTzVXwPDJiXuKXPxtDBma8+lzP4WAgKkPxCUAPE4v5GzEuMX0PYJPLhB6FJsc7MAMmkVxaYC/K9gG+F1++8AQ7Gwbgk78I7GFpXgIwFiRXOwaJZPUbiR0yCUDRk+cHf+YpwMj9HgfI8ClGPyvsSiH0WSKRuYlitLb/zHM/JOSs5C/YIC9cMQDZr/dwxgOW9gtGYUBi0wA8l304vDQvAchilFbpIBQhZ7Ejq6ZQ0/Yhil8y4j89Axie9DAsD6FX9HOK3QtROTFkviN83kG4felIY8DCeLrSeMDSfsEovAECUFsTjHD+tcB+tkFgcXKvBRir7qtFl9owmO4Xy/1G3bAFfPrZHorFNWBFwHjQAFctIghj2kBarw06If/+MM9ZqTN6DgsDojCerjQesLRfMApvoGkAWh8Ob/tgAPSKWCp8ngNQtadjmTdltvNvn3peFYhgQQgh+iUmEaUAUoXM1yRLmWuFLaE9Z+XIAWBhPF1pPGBpv2AU3kDTALzwmqo6qtVh9kJErAudABia38TC5wJgS2xIhAwBn3yhByL4EhzXfRXxYsDTJ4IvrNN2JFMxZcBzVo4cABbG05XGA5b2C0bhDTQNQLZBYH1AVsQSAAU+imI1obHyblnjG/kJk3U8BHz8xVUQAhnQIl5CyNgKAGp5LKSSCoAySh5Jj79vTagcxUaIBeRNe79g9gq+DXig4wGzy+PONfT7RWFA4noAkGXZVAhcBckJQgNgrLiaNb3paIDo1vHHX+oA9LQBi4DxJcOUPJUnTgU2NJUyROs8irGARxQAC+PpCtsFd40H/AEf0gMQkLgeACT41PiGoLOKqyrJq3K/Ya9mNyr5FusN/uPLPIeDa8Bc+w3rtyl4VFHaMZc3i9RWBM9jjzgAFsbTFbYLRmm/YBTeQNMAtD4cBKDXBTQGdAB2MGBo8SCLmEuS1AFVAJ3A/NhPt0PoCcA8bSDG76XI7aySg6JYuGfKwJHFgH0E5B3ueMCe/Y4L+xVHAOZ+9EHcEgQgwbeiEYx6jwTdz4qfu7EhEJqxGqruf/RnHIAEnxgwBM0aC8aUAYWNBRCmoIll4HTqO122QcZbrgMWxtMVtgvuOx6wa7/jwhtoGoDWh4MBJ16WN4lfr8AqI0TVV1O1fa9BbQzovkAy4Ed+NgCQUSxZCFWvCOaOFREXyUwZOPIA2GdA3uGOB6wPaOz+QPv5S+MA3OXiN9aclghW+d3IgupBF2pPqxcxGenDPxfSRh2ASiKKiVP2PaZScvAKoA0VDc6cOlIB2GdA3uGOB1zR77iwX/F6AFB9ONSOQW0frA50sILVcckWJyIDSgwPAVcJgFbYuZ3FJvAlEHbJ3IsgJLGedeBIA+AAAXmHOx6wo99xYb/i9QKg2iAIfDJEJHqj4SExbEty0gkdhB/6P9oZbBZIGiKYVb9GKaN50lRHBLOvhDxh/5EKwDUG5B3ueMB2QGM/grb7/6wHAPNGMAY+GSGUjC52VX2f2CD4+HO0gqkZfegXKgBaHkcWtS0AWii9xG1ImrLlN5XR8L8fmQD05BVrmEENmpYSP9QX+KHiqj2/82+HqqDWwnbBRfGATdzAegGwru2DpRq7Mzq2fpAf0Nq0Rl2wBXzglZ4yUAPAmDSVWDBPHQjLcgTqOZ6zUvdKHh4ruDCerox/Dnu7YqwXAC1NI/QcEQuK6WK/kdgCTGC0PYAP/KIDMBgglq+hIkrOfsaCviLSofcJgJ5AdM7kkSaCj/HqQKVIGvD4swF8bcBjmzjsaQ2H5D/6acBd9wALB4DFWWB5AVherMp4GKIYEOp7+26UF0aSfT/xYuDG7wDjrIpAERytXf2vajj7ueryQXSFl10K/ON3gIWDwCLvjfGB8Z54O+Ee4ve6513uB2R1yzsqC+twbC8HcNVhfAeaBuDP/TvwtS3A/ePAIfYFVlPq2HHTuyulZCTlhbjhETF5yxTQGgPGhoHhIWC4VSXGD3n0tLkMHXHxu+YyB+MlPwDuZs5K6FlsbCzdVO9DuKfkHM8AEkP7B8fOkwDcD+B7np42+JkGOvKdAL4E4K8P0zvQdET0b14D3DgB3D0B7B8HZka9WzrD88N6sFm+YcUjrn7E1ZDvMtF9DBgeAYaHgSGB0PNHCD4BLwLRsByAyX/ij0/dDUxuqlIG5hix7eFhvLcOVUAtyPSydAFmOQNe6EYGV/9ZESiKgIEgtbaD/gHALQC4ovY5r5KwtjOU/XfTAHzzLuCmIeDuMWDvKHBwpMoN0WQzNtAaYSs0K4ZlOSAjGG9kPjCBRwZ0ABKEBJexYAZEAU3A7Oi1BeDym4EDnjQ1TwCGWMW8MXcKks0YOyZNlQOQjcgYIUHllEzYQ0ktm+r6oz8G4F4AXwXwRd8/kO9A0wB8y65KmPxgGJgcqYJTKYpTv2CCzyddQJRDOjKivn+Deh8BF8BnwBtaCUA+YYEyAU8h+c6Az9gNHHRmrgOgmDA3jHQ+iWupCeUAvNSrA9HNwqx+muk9nJVNg/CTfrmbAPwbgK8D+PcHkIibjob5o13A3XypWsAkG1cPA9PDFQDZM1id0i1KxsWfOrKnAFXlifCFFMMRcASigOcs2MGAIfE9iWXplS6On7UbmPaUUTXQrgsVMzcRj5Folg2V5ayUA5BWYKwOxKUafnosWjcJwk+7W5F2EKvlE3xcXaNYfiCYsGkA/smuqug6hcleAnAImPbO6YwRpMgjCAVAm/yQmKTv5hNsAf/i7SyNBSl2a8Qv/4/M1yF+BZSYlNQCnnVrpbC+mToAACAASURBVJcaI7sOSEY2NpaDXLqpR+vE/OVksDgImgGgghHoYJbTWc7oJtFWc65/cg2AYvh2ALsB3AzgVv95nS/f4QdsIkT9T3cBrGtITWZfC5hqtQHInsEGQn3UDDvEDEY/ICf7SxMOrAg8T+c00JGkvHGd2DABUYZIAONzCUDppCFhSukCBsLQrFtZe/IixYQpSyEoJoqnuPWrVRAubQh83HNlZB23z7j1ywmj6CIIqUPxw2Xeu9bx2jx10wz4Z7sqTYZaDD8EIDuoE3hMVEphWg66JIp90k0sBxBcy+iPIIaT1RtEsHS/yIAqw+VSNPWQfe5tlVEk8auXgVa5BUsEJuT5uoliAbE5AGotmIAjCPnR9xDG3TQernYAUupTdBGEFMf83OkApHG+XlvTAPwfuyrgSZOhas3u6cwTsUBVn2gTwyFMi8wjHZAA1M9fYGHDULJD1m8Cpa8fRxDad+l+Ykf/3XNvd11U+qiL39SxXevSsshdDFvgbI1O2AwAtRZMZzTBRuDFjxe1Xg8QEIB8yyj5yYIUxfQIkfkIRnmHCM712JoG4FsdgHHp3ACoMH2G6jM4lWzoQarSvwQ6MSB/vporVaFkh+mCLlpVR8Z+dqDZLoDOpHSiQeAFDkBjPrlgCHgCUaFifg67H/9uYjn4Ai1vpTERTAASBaoQJBAKeNqHlL6mwPDZYAOROag/EYRkPX34MwHIvzW9rQcA+TLpI22G7EcQKlJGsYIJhC6ClUMiXfBTbFUQAej6nPS/OuAl9pOOqIc2BLzg++3VmWgIEUz82cRuCAtLIHQQm0gO52uOAb22sC3JEWgRfPpZf2sQBQIgLydPEIFGwPEj8MlF2bSbsulghLftqsCXq9HGgHysznrGgi5qzTUTFH8FLhAUn3hIJwCN0HLncw37qaF2zoYvuKNivmQIuUNc7GvWt6sHNs26twA6vhyq8NEMAHlyntFrDCcQehyaPTl+FwAbXDcmAKMRThakEk8Q8kPg8SPL0qzLBl+A9QCgR6uZGs3vfHz8TtBZvkgGQrEPBVAUg2Sij50QAOjiVKI3saADJRm7dSLYWfSFDkCem/dhZeMy9pPY5QvSDYQyUJoDIK8qMezh3wY6fSL49PcGgCAA8pScJLIgAUYQEmz8RPA17StvGoBv39W24eREiBoNQSgWNI1HBkdgxJSw1AI+dFIbgOYmkjimQ1r6XXC3rAbCHycAgytohf8vsB/r2KRaRq7zpZ+D37HMX0s3DDcCUGLYaw53MJ4YUODzusqlGCQAOQCejuxA8UULUkxIwAmMAp8Wa3qkN/R9W+sBwOhIEPjk5SLr8HeKFbTQfb77csPIMHGl/4MPbReslPhNe4+MiTpi9AFGV4nI7MfvagNQLh/pfrYnDAS8aJQ42A2w4em2cAyWQUuJVQTGWLs1uL7DG9J1RjhA+jvYk4t3KXeMqijpzrud4At9z3XtP16yGfjKZmCGooYh1tZzvv8xXPFl4PoJYC97k9FlwZWD+Azi/deMZWeP13eQCGEyoERudChIjbb3mJYwH7V0QIKuCwj/gfMj0asn2I0FXRSHXfL/iRkNgLyeVj8ccMY//J1fyxzTAXT2+xoQViKYD/1hDqLxPiYxTgSvQrphphG97tz4Slqafnj7uk1kIQDZrvWTw8B3jwEW+RLxPgSiCERdPwPR7+wCPg/gulFgfruDkOMQkFc5x84e708JAMmCuRNBXi4TIg5CGRzGiBGE/D4E/C2r2vcAYJoify62i0aJSMhB+2IHoNwu0fkcjQ85pu3ack5nIBREqneYFyWLkAXIJHESe00Cyx5QyeL6F/tyEcDcrOW2n7fX8df0mME+/vQ/PQjhoy3gzo3AISYf80MQaQx1peH9wb7v2mrtmCBkIMMejp3jIJD1MsaxaMZ8v5N/67INAsB3BAYU4JL4DSo1J15AFPAEwuQHZJzkKfUAtOHLJSOQRWndBYQvCQA01cfnNopfsaCJaD2baBn79QjSTiOEP1EcawIpkq2kegBTNgHWEpOKF8Uwq2NRFPM4AqCf46/rA2U9/uVDvurB01zvAJpiiwOl3fEeciCGF+Ij11f+QkbSfMPfIzqw57mEFZ9Dl3Ps5HXWAYByHJAJKV7N+s0cCQQhwSlfm4lGZ0KB8C/rABgZUS6ZHITBSEhCowUYAAksF7cStWREyxRwtuPpOlgw+5s9sq6OaIJIIlUgEhA1edoTgHxa9HVw5jibZNF+j/9yGQA/7pbujZ4bwv2+cWB6tFo0NzYnkxFA+cvEAo43VBoEo2e+48EMXEOmD9F6xhCE8RwZEJ80VblKvDlmzwicfqy93/o+8K8TwB2jVSgW138FrJQTXBNlnJgmrjZwanow9CBP/rL9wF0jwAGWDtFyoN9PHutnIHT05mPXz93dMGQAPniJsjiBXiTbxDZFMF9NLUPQxKR5qezz1Y6/YZDH0D6GkdAkYJIvRalAdHAMmPZoYhb6NhDWvEyf/ma737CXN7R1ZC7hUbPgcFgqt/ZZjADnM1xqEVhYBpb4CUk5UsL7jQvj///5buDrLeCOEeD+YQchYwG9VIfyg1NaZszFiCH6DkRGLze5/dgk8IMWcMCjdCiCzR8od1B8OTwvJM8JEShFut1fzMhi+eRJr6LI7hYP2M/xVLwKNoZjUTwRMAQQmYyhWGQxsSADOflZ4kukj7PhZ75bETjBpkAGahMkcrGgwhsXeCyBHBj1wmOBQwvAwqKzoFeRV8ZaerjKYAuirmPY/o9X7q5Cyr7fAvYMAftCPGAEoYlBiVtFwLjtp2U4irj7yOANbi+crHyrfCbTquJV44O0F1FrwQGIMZFqdQDyP/gGSZ8TC0ZRRsOlVzzgasd/u+zpMByLehAfCgMQCDyGZJHFCCgLZ2f8mgI5qauEcVx9e5vACTgCTwEMWr5TdIpWKJb5MvrnoocDswvAPAG4VLGg6UKeqmi4iuDz4er30oX0FP7u5moMvIf7W8B+jwlUNAzFnlZCIhvGFRCeWzrgXSSIBreXTFZSgVLHAp4UHOFuociEEsn2PJwl/XEk0dzfSojeerFg1IOo5BKAveIBex1P67lgUzgWQaJwLAKRH04i14ItgDKEtGsRnWx49b2Vkk9wUefTGrKCF7R0JxZMqxN8cmPAxWcAcxGABKEAKPA5u9lEaAbCmKMI+sDN1X3z+ro24wEZFc0VEE64ABgT180PF9ZdBcDb6JpqcPtPk+1ACbmKjJnllwyuILunEAWjZHkBsrsRUnfD0qEiC5IJfyisgMhzWhcP2O14Ro4WbASgAMQJ48SJwchmBCDFa8qpyBbSP7OvU4PQ0p2W7+LSnSJUFOrI4V7w5IoBTQQTfJ6oTSYk2mQcpGRyH2syGjIF6EM3V/fM++C1CfwUExhCsmzCaQT43lZC3e1hBpEHh36XEqrB7Scmq5dV0XZxmV8WuDFzAF9iwhow9seAGoBcGtKjqAc+1l9rLb/1igesO55ysmCrC8ei6IxRMAKTWNBi6Xw98xNTFUi0jEcmpYgRAPhddpVi9OIEPP5cYD4CcLkCooHPwaW9kV+iwWrQHT8uA1fd3F7DFvgUHUP2k8jTiogAqLoxFpDgbMj9jXSuN7i9dLIdaxzBp5XVBMIMgFEnFAPKT9qPd6A9BIGI7MfPmf4U+40HzI8nWgq2PBxL4FEkjKJixGRRFyQQPzzd1iAUzCAQas1YOmAEoFjwkecDC/PAwhKw6CxIkCXwOdVJLxTobMjBdyIgfvimNvNJ7Evf4jWtdnRYD1YNGVuG93VWuWs4Jf+mlZCCZxwP/cnJ6mXVKk2+tK8lQQVHRTGc64SDAZB3Ey3JcxyACkToJx4wHl+YwqloGDICmYmTFgMQFBET8yyYzyAG/AfWX8mCGQg0BTRoHwt9KVaPE/HQ890AIfgWK+CRAaMRYnVdxHbhdY8Wslw1V93UDsmPIj9GxgiAioRRMIJNvoti+SW/Ikd0gwAU8+XxJcbGITJPDvI6XdCFREFSknTB83xka40H1PGF9dnycCxFwygkK0bASJQSVAbAYeD98xUAe5U3jKIwBosSgNsuABYogl3/IwgFPrOIg1Xc4ZrpAsSrvruykl2ucykapkMMh4CExD5DwJfWAYAxwk4MKPAJgOIjGSEGwuCakRhemw6Yv0UUwRf7L00L9pnsNx6Qx4feY4O8pDEcixOjsoTKKpMYjSFYYjOC8Eq3Wnnr0YYS+0Tmi2HysrPGLqwASNYzBnT2Mz2QD91laxLB0gs12GAh81cf/o/OcHyJ+qj0S/zxnhUZbSyYWaL8+Rq2S29wowiWkJPan4MvgrDDGAlRe7KIywDIgR3meEDWg9HbJgApNTkXo8o0i7oVgxnEgFr8F7jEdnU5GvqfJQKQKyEOPlsNIQvyvupAGHS/Okv4qv9oh+PHxMLk8ggBCRxvAmEN+AiEzz2iQfQBeNmkh4K52hJBKOaNe/FSLobLRXCz43rQnu2yi9oMSMDxs2jo8303ERz1wsCGZECF4kd3DwEYYwJjhoNlQrgIjlYodbBPrwMAZfEmyzcIv27gs6XDzC/IR1DOgA9a6DRz4wZAsZ+LYXvQYsHoD4ziOFklna6YD3+nnU6dZ7bGDAcBUImIAmEUw/zbJ1i/scGNDJiLXmle3RhQ+l/aq57gUQCWzwwBKPeLsZ/LFrGg/ShRXAe64Ajkv30kALAjF8R11Dy3K7KRwJcsUTaqWScARou3w/INVnCH+A36n8RvM3nB5XP4oD6DATBYwGb5ajlOLOh6X8JaBKRG77+7ygGYp1bn+V25/01AzBnwQ1ypanD7KWfA1QDYC3zJIj7KgOUzc9nFbetX/r+O5biwNhyX5uSEDr5o0xsJwLp8/m4A7GaJUv/j3/5+HQFYJ3oFPPkho/hNeqBcMkcB2BAA6XrxmMBkfFAci/m0JpwzXw0TXvXtzrz+PKc/Ml/ugzM9MDqCAbz/keVjjGcQA/YLvjoguo1mRslRI6RwfsiA5nqhL5D6nscF8gfTdfxpS+/hLzvWfzMQCoB1Fq/8b3VWaPIDZqsRV64DALsZHVHs1gEvsqFAeBSApQC8pHK90Oql4UEAyvCwNeGcBXNLOPMLftgZsI75ouUr9ousp2TEyIJ/sU4AzC1e+WIFshyAHPZREVwItrrD3wGAhibTYBhxVpe/xePyrNBuWaoNp3DgFwC81O+RAepK/a5Lfe51jxr7JwA83nPXYgq1asl0yX5N48+f4VEGLATlK1vAo5YB1gBSRmsM+NFE57lcfPD5pPFWCJImtyvGgGfOAacBYO59zFglgHgPefZsXV6/gPXBYeC0RVgyJNOGYuJjPka9eHWgjL9bWzhWk0/n/wPn+k8bgFNmgYcsVflZnBRmIShtJM/m7JGibGBoOIIez9wKPP4AcNpylfbNlGfdI+9NjBjz8JVzppckZuJ+dBw4aQ44drk6j1LIY9JkPD7P4s2lwVEGLHwJnncscNIh4Nh5YMsSsHm5ndOu1BGFThJ8/K6JrZtoslST2+XHA6ftB05ZAE5crgAups5TfaL6EF+UyIif3gAcOwtsXep82eIYY9JkXpMgMp/AeZQBC2b8OduBYw8C2+aALQvARgJwGZhY7swEzbNa88IRvAVO1qkF91J36DNOBE7eD2yfB45fqphLnevzdGeBKBfL8UX5/CZgyyyweRHYsFwxYHzRNK6oetSBMDLjUQAWTPqPngpsnQK2zgKbCMAlYMMSME4ALrcnR6JYQIwsoUnjpDRstOLy7cBJB4CHUGwuAtuW2nUDVH1EFUhycSwWjGD64mZg0xywcaECoI0z5P3X5P6nWlHdgHgUgAUAfOYOYMtBYNMssHEe2LgITBCADkIzSJZXpCOnIg25uPrhgnupO/TyhwLHHwSOmwW2LVSik2pCrDsQskzNIBGIpBdGI+VfNgMb5oENCxX4yPRjPj4xaJ0+WGeEHRXBDUz2Mx4FbDoIbJypADixUAFwzAFI8KUJChMV2SUaAGc1cE/xFJef3FYRti64nkqWDrqqEhbrsm5zvZCdPCd8nHzJOLZuABRz9hTHZwPL7LnLnoNMIY2VyaKcjtZLHOAbNgNPngKe4BacfGF1pnydD+hphQ/8XV5UiEueLGnDN1tWXj/3/4cTwAUzwGPcRcFJiDpPt3FLmf5vjwE2HAQ2zPrEzDv7OQg5OSM+ScYQy5Xbo8465u/ZfLTJ7fKHAdumKxVh8wKwealSE6inEoSy2MWCdbUHIghv3AqMzwHji9VLZuDzD8cXxxWZs5c7apmW0fMBnIHKn5X7d6I5npvRz94O7LgXuGIReJSb+Xl1tzqflybwRwqf9i97BQRWomWJQ7oZVFtJoqDX/b/oGODsvcBTATB9gsfGqmzdjtVz+G+PAyamgYmZCoDjFE2anCVg1CeJwOMnTRB/DmUINVkkgia3y08BtkwDW+YqAFJFMD1VAAw6XG61R31O9/fdrcDYPDDmY0zjc1UjivBuAMx1QdMB+WAYXU8dhEU16dOSkppbcHFSrng8MHwnsGMPcN5ypURHp2xMIa7zDz2z8Gn/kVe0YomO0wEwBYKujL7v/zHA6C3AxfOVh58g5AsZxx4fZM7sf3h6BcDxWWeGBZ+cMEFiwGEHHRnDzun7ONHs/djkRgBunql0VDOSHIDU3cxSD4aEajhFXS4H4S1bgVGN0V8we7E0Fh9jVDG6Obr1LJMRwn+kOCaTEYT0dsfqZHXl/p7PrLi9wIY7gO0H2yAgCAWCWCowKrYE8nMLn/a7PQn9X7zIJPPkCcK+758y7x7guNsB6l98gZjLLYet3Ay5n0sv4R+fCYxPA2MOwLEAQLIDPyP8uBg2cRYmzFweAYilKkn+OC8/Fdh0CNhEA4nGA40kd6FES13WLO8v1qHKAfh9B+DoYjU2Ak/js/8NAIwg7OUb7LCC+WAfB4CpBJoIiTRNRmS1l13kqWh3Adv2A8cdqqp1MB+aIOSxWv6pq5D2kkIAvt8rF7BLJksN/jMqfa7v+7/Ak4B3A6ceqpasKMq5akAmlLWY37t8ZW97PDB2qALg2BxgAFwANEGcnI5JcrDZRPlkaXL4u1KJUAfAjbTQ59x6dSvdLPXAgGYshZWR6JIRaXB/NwFI8C1WwLMXzMeSwLfcXuKrA2G+wrLCDcN/IIg4ERRn0qvyySAQX6mG1XuA4fuAbTOVwktRRr2MLCoQyvEZ/UY/WwjAj3jtFJZkU79g1ghkgEBf98+0Umb/3A2M3lkBl/fOcdMok2EjkZyv8773LAfgHDDKjwNwxEUw9yailpwdxBAEYhBbAuGzG3aKkQEJwAkCkOCjlb7Y6SYyf2UwlAS+vKYnAXjfNmDEX7DEfA5CjUcsnzvbu1nDtUMmCDkRZEEyGdlAk6G6lQTSa6m0MP6HuY73AxNTlcJLZ6WOJYC5/CNxLpHMgdKIKNl69Qvu6/75AjHOiTU87gKOOViJb748BKCWrnK/maTA+58AjM0Ao7PA6Lx/xBAupoYDC9okBRAmPdBZ47lNA/DhwMRsxX7mPgl+SrmK5EaRNRslXFQ9CKB9DkADn79cZtkHFkysJ103eBbqlh97DpmTQTYgk9VNxu+xYbXKU3lhFoJPOgdFGY+lPkgQxokkgF9Xgj4AvfoFs84eX4Ke9x9fIC+tRfDxvvniif358sSir2LCj5wNjBKAc8CIi2AxxLCzIAGY9L7AhGIKgpATw4l8wToB0JjPrfTkp+SLQbHrOqm5jNyajS6VCMIpApDAWwQ4LrGgXqzIfnq5cv0vN0ZXHTInME5GBNLb1DGdOYQsI7AfGKFjlgqve8wJwG4T+fuFAFytXzCLb+VgWnH/fIGYfc46Hs7iHC8ZkPcdXx4VfVXJw8+cA4wIgM6AHSLKWZCTESfLfg7WsIyRF3ckiRQ+HACXkwHptyP4KHrpJvKVGnOhRF9eBF9wE0mUEogz2wC+WGI/vVxiQQIxAs9+rmHA6E1YFYB8DJwQMZl0OrLZ++i7sfT8zroYHLS9df4RACWKxSZvLXzG/fQLZqk2gqn2/vUCUQ9UZaM9wDaPeSPrC4A5C1KV+NITKwCS/SiCR/jRBDlLmP7nHynsxno1IPwJSyRpbiMADXzuPDYfZfBTEoAmcuVQdiaW0zwXwQsCYDYmMaDA1wG8TBSvaoR0G77EcGSET6hjOvVApfRPAUN0zjr45JzVcSqiTxD+VeGzXku/4Nr7JwDJOkxFIwt6j6+RqUrlkO4bXzp1gCAAv04AzgLDDsBhKugLFUvQUhTwCEKbnKCw14HwJ9cDgGQ9WegRgDI8XEcVEDvAl7lVlglAgi+I4CR+Zf1mLGgMmDFhBGFfDCicRJFERviSABjLS7FC0MFKMU+07wOPE0kGvaoQgGvtF9z1/iODkwn3VWoEXxres5ib9xx1wZufBAwLgAQexbAD0JiQwJOuJBA68/H3Zhk6+3CifqqwWNMKN8wjKgbk6gWJgC+FMaBb5vJVmsUbV2vCqo3cRWZcCIACoax53+ulkqNd7iqOcU1WcC9cxEm5kQBUdZ+sTnSL/jEtTWngi21jhJNJBivZBukXvOL+yYBkcOqxKjJ4AGgxzMrBVwdAMmHrZOAYF2l6y/mwV6xD17zmWo6MbRyeWtOHwxJ91IIhr6rqZS70DPPLXDVUrfBwzHKr1EUp6/h0T/6L/GcCqslt4IhoTcwdAqDSs7I60WQH6R329pHuFyuXDJmEjuOSbdB+wSvuP5bGUjmsA5XoUvcvBXKKAQnApUdXwah0b8jXR2YzJTsC0ZHB33FL+2yiX3h/1YeD1fFZGT81g/H6yqkVa9YEpqMhTADle8erHA6t7Mh6j4ZBXdBGjFyO4CSIm9wGBiBvgqxwIAJQlXIyEJLyI/i0SkAG/FbhaEr6BXfcv+5dLKhCg4z1C1HEBJ8+BODQGZXfk/quAZC6ketAZEQCTWAU8PIJt0fgwHzZvVWNaKqi7JLOmtDWFy42g1FxH/XfqGkII0C+a0tnDkfsGxQjn3VPsk7tXmuy+Xp0JhtoJosAaFcUAJUYKiYJxcqHqKAH9rPlG2cMrmCUbMX9guMLpGTcCMKDlZGhMK8IPnPIn1X5PA2AwegwEEYmDGBMjOI5whGQP3NPBT7VJlRNaKvF4t2IWHbDErtDlSk1p4lJ7/zd246tglGZryIfrFhQ7pU8WCAX0ZENG+57U14Z4YrCeLrSxXdev6TfLwrbxT7znMrfKQXfHLQCnyvmRIv0Q3430ezMmL98P393G3wqz6am1NYzzoGn+svqRmTAU2citctqAX/2EI8F9ACEmLHXLZGoFxtSl2xyK2bAYwrj6Xr12+1noL/jUTCD9vvFrn6u0v1/nvGkaoVBAQi0eummMAuXQHMWJAA7gCixG8U0gFfcXdlBKk4Z6zELgAJfZEKrxpC1xOIl/+Sk7jkcdYlSco90y9+gK6vJrRiADD0piad7RuFo3udNCgft94vCdrGXn+tujgV3QAcHLcFnroelivHkchEL8ue0uQ74S3eubAITS3IQhKkMRjBMokgWG3L//2z3VSnP4VDgQWxUEEUxAZFHL0eR3HDfm3IRbDHkBfF0zy4EIKNhSvr9goGEBdvTz/MIYQLQdVsTwRTFDj5jQmdArRDYJQNDSs961R3tPhx5NXoVgoxleHnarjohgLec3D2HI492yQNvIwvqO9fJm9zKGbAwnu6FhaP5pFuMg/b7tTbpBdvTz68cz/zI8azVj8iAHTqgmFHXDUB89R2dtaC7tUGw4kDOgFb0R2wYRDGZ8g9O8aU4XwPOczhiwGlMjqqLWiFYGu570wADFsbTvaxg8nkow7E8nM/atfKzln6/1mS4YHv6BQ4+Z0BbqHcd0NwwYbVD3+1yWhXJxPBrbq8AqE/XApSqAxiBV2MZ/54DMOZwKE00rnDUWcR5KiV/brjtSAMALIyn+/mCyeehjIYp6fdrvVELth8RAClyHXxmhPi6r1m8FM0ucgk8+y4RHC1kAK/5XgW+2hZYofafWcPq1B5AqDqEYsQ3nepR2gqhV2yiol1COkD0C+aOaoGx4aL7DQCwMJ7uVwomn4fm7VrX2u/XAlELth+5sHPtN+l/Ap6sX2dCsZ/phZkIJgv9l++1wbcq+2WFv2NXIjNKAPzuw7MUAV8DTuynFIEsQy83RgTAhiv+NgBABaQOGE/3mwWTLwAqHnaQfr9GnwUbARgDNBUlkpzQboyYCyYDYdILdf0l4NduW9kGoa4geNdazLElKoA3Prx7DofiETtC6XvE7hGEzJlpcis3Qgrj6d5UOJoYDcMglrX2+y0NPtl5UZUjkfx/Hqbecoe0OZzdF1gHQrln9Bhee4s3f3Zxm4MvAk9VSFdUIw0i+Q2PaBtISiBSSFgCYMjMW00MP7pwvvLDmwFgQTzdHxcOSGvBg/b7ZRZByWYAlOERluKM3Ra9CKWc0q73dTBhMFT4ZwIw9l5Lrpes+HjeBiGCUOKXeuBvPcKTiEIOR0f+RhDBMYi0Lhea4GTaa5NbOQAVDzhgPB1La5RssV3rIP1+7yy5OAADoAchEHBkFbKfGRpiweAPtMs5IFNokyOGk/7rAYC9OhBFwNXVY1at5tftCBHaWVS2AJdEcEinrDNC+Lumiyc1B8AB4+muLARAXTDCWvr93lR4/Z0Xt6ODFQkj8WtumEwHTKDLQejAfN3uds/dfjoQdatGLxb8jQBAYz6/boxiFgAVudzNIc2/s3xLk1szAORoB4yn+2DhaATAGJCtbpkCYq9+v4V+aBgAQ4i66XtaC85YkDog/zdZvzUgfN1N7a633Xqv6fe9msDIHfNaB6Ay2JRE1AHAEDIfI5nzZCLeN4Nbm9yaA+CA8XSsul6yqV0rJ2WQfr+splCyCYBR/HJyKX4phs0PKBZ0lqOYTpvniAiUAmAd+HKjo1cvDjHgr+3wPJQsVCymUZrPMuRsRBDG4AQCsunyJtFGHwAAIABJREFUcc0BUJlxQoH62q8ST8cggpKNAFRGwCD9fkuvbwAkyGgJE3C+Nz1P1q9/T3F1EZBxvZh50s6AEYC5yyUHXt5/Q8zI5/KrAmAIkkipkyGPYwXz1aRT8v5ZO6jJrRyAvKOvNXlLazsXs9bo/ztc29Pohgotp5J49Rcj/pzfIwGS//3OM4CNd1dpntQpFUmjEH4LYIgnyn/OLjL8FeDGhwJbNgFjI8DIEDA8BAy1PFK7FSKf43cNKrvHx+8C/vmxwMgmYHgEaA35J0StpvvzL/nP8RbLAfhyT207TChgDRiu/ZL9DsfWNABvYzbhCDBKoBAk/pEobGWTqp819hzQ1/0k0PoaMDEJbJjxVZFgDad0SaUO5LksWVj+XScDmw5UEUDJ6U4d0nVbC91S3ovfVHp5al64cgC+k7mZAP768KCA0WD3A/ieLz090CDceVmlAuhBljLgrfcAw6PAyDAwPFwBkCAbItM4a/FiNtERjBl76W9ffD2AbwJDdwFj+6syImRXrd5Y2FjIYcnzWPLEqnsfC0zsr6qBMQmfIDR/pyJ6xMhKyMrSDiKD2xja6TADTt0/AGAs1KcAUCFrOLF6tbtiRVFavT/wuMCa7MfVTlH098YBeBcwNAIMEYAUlS4uBULOmK3LCnwOPANlEIOSoF9+C4DvVoWXhvdWZVOYqWgi3vOXDUQhgieB0EElViMYJ08HxqeqnG8D4IIDkAzo51DKQQJvBKUmKACzbM4+5hUivwrgiwC4LzvjmgCh6nBcgiMTcv9Abo0D8E6g5eCjfpUA6AxoQIzgi8ALmWwC4z//DxcPPwBak8DQFDB8yJPpPZHeGCyC0KN5DFCByfh9/+OAsekKgEzCTwD047X0SCPM1IYQjCv2E/MJoGVwUUQoPboq0MdqkWVn7RtDDMahB4g+P6qhXFpjVtkDtRGA2nKjos7IyOyHFUbIrXe0FXsTuzIYfNb4O2M3ATGIYQOmPn6hG6gi3eUkQQAeAIYOAUOzALMVh2pAlESqGFBAXAYOMQVjxll03iO/yYKRAT0FQXkwZkjp1pz51LO2XAT3KtD3AIAwj4Wg05kfiuUHYlsXAJLVnP0INLM0OYFx78AzcRySeTsw2AJueI+Dj2Fne4EWKz5MA0MzDkCCkAByUWqsJzarEanzj2zXwjEGFHuGY+pYsMojzZL1G9EBexXou339IRBrC3lJGmNDuSHX+w7WC4Cm6wWxm8DngLTImgC8pBcGBuTXf/1fXnyTugnFwxTQOgi0CECyIFlsvvJfEnh0mhsYI/s5uxFYi1xZof7oOqSAawwYjRGBzYGXbtWXaCIrlvHUagX6SP/ruMVYCEbEqECXAMjfree2HgA0ESur1/0vtnNwGSsG0RsZME20/+/XWH6Mugk/yngPAGy5GDYALjiIHIgRUIrsZjM7Ax+BSx1S4pfffQVIep8dL7dMDsTGjJB+CvQxTHmdtrw4l0CovFruC2NOe975egDQsCXRK/eK634JhBK90q2C7I1i+Gt0jxF40k1cPJAB7UP2m3MGJAAFQrGei9iUTH9yBUDTHfU3B5+BOIKQ43BWtNtPcWIOzEZE8FoK9K0DCGNxLi3FqaKA9gTgeoFwPQAoI0OulWT11oEwiFz7cwbErzNxWtEYBB+VY76Vh4DWrH8IOoGQ7Ocg1CqMRLPltmxvs1/SHaP4dcAJePYyyUCRIzrTB8tE8FoL9DUMwl61kQQ87Rmy2PS2rgB0a1ci18RudEJH57OsY02y/+83/sZdBKr4FXQTApBvprGgQCg9UEAM+h9F6ugJDkC3gJPBEvRGrYoYCBX9IxEcS5K4i6cZAHIw8oXQ4mLBb35YH5d7OekadtTV1UZSjaEIPH4nQzYNwgjAHNwDuWGYpZc7lzPfX1cQur5oBorfzDf+zi0yVTuSkuxBI2Q+PhQDIUEnMLo1TBCZLufGw/ixbQa0KB8CTODjPohdY78IQmfDjmW7Yo/doAX6GqIiAtDHaYswSmeMubV81kp11L6hy2PdAcgblfslOKC1IiKRmyRxZgV/8++DS8BFrxXi5Hd/U6MeSKdqEsEKhpBRsgRMbAtuG4KU/+9ry5brzP/lPVMv1EPOQegharrVcgZUhVHFxNPcp9VFtlOWkL437C0WABWypFRGsV0sb5Hn2zYBwvUGoKl10v1knDgo0y7XA8Pfv0UACnjaK33Co9gJQAOe64FkNvtZAHQdjz9v2Nz2GSa3jYej2W3KGuZ9ixGdIVSoKT13B2s5AHkGheST6qn0erHv5AIgAAU+LVfw/wq3CEAV7clBKDDGZG9/5oVXx/oyYARczcqH5GyH8eFplTawFvAtrtXLGpNrQDGbejupB3omlIHQGc/ErzOcGSRs8zrhAbbuL1Tco/JfbLlNwHOmi2kIcs3owbdwNpYtynDQhsFcgvuG9/YapGFvYX22zZcAU0/GwA2LJ/4AmGF9mwEbBu98Y3cMF+uAGQCj2HVp3BbPuo3IlqxAy5wHAq4OfARmEBXGfNIBa0BIsG0ecwC67merHgRpZLwocrWaovuTxew/V0txJQ2DWeae3WAGbdhb2DB4+wRw7w5g8Qpv88liyGtoWHzMi4C9fAEHbBi8kwUKu2xNAdBxaGBLbJdZux1LwAGECYAEm6wyfpelJrEgFnRDxESwgyUxIUsVMwjVy5AYO0bG89Auu1/5BF38KqjBHlUAYXsteNCGwTeWNuwtk4JMkrlzGNizA1hm69g1Nix+zDOBW0aBeRZZGqBh8M4emfWNADDT+zqMjQyESdQFHfDbZECCLRgdHeCTe8CBaKJY1rDnBRCIAuGW4TYAZeFG8ZuMkGiQ1IEwGCJtHZBmy1obBsvVMnDD3jIAerti3LEBOMjGcOpa3WfD4ic9t6oveDtLfw7QMHjnH6wPAybW6yaG4+8D4HIQfvtDIVtLejpBFsVvUI7NIBHw3DUjRzL3rDVtsYPOkAScuX3coNDynT2VYJCkn+PjqvUD8hVbS8NgjphGxcANe8sAGNoVY/824BCBtIaGxRe8pLKZdpMkTvXiJ2toGHzSNHDPScAyq3er4qPyGaNc7JCRXWLT2TjwGmCOeQashq6+qSpZmp8vojQpheF58ncdZVjLnjWPHr4VWKTKxrHGUqq97qXu3jp0wPy+eEC/DYNZsZAO6IEb9pY9lNCuGPcNV830ZmkM9dmw+OKfbdcXvJMPdY0Ng0/7GnDXKcDMccBS7MwdKz8KCAKQIgY0MWGCtr4TOHAasMwOkTqf6unyuLykfd254nkb7qsw/iVg7jhgmSX31Vpd9yRHeLx+zRhjEGRbB6wDYT8NdymyubzDzCCGfpMJWfSRYfr9HP/aMgBm7YoxNQHMbQHm+ID6aFh8yS93tAvGQb7da2gYfPoXgbtPAqaPA+a3AEubgGU1RM6B060fgkRoCzj+TcD+04CFE4BldZdRc4/YxlxgjJMewSiwN1zWfsOngdljq3EmY08vm5i/7j5yIMqpvupKyGoNg9lngYosl9wY/0dZdrMzYl8Ne8sAWNOu2MA3zw/F2CoNiy99XbvftrcLriz6PhsGn3U9cM9xMODObQYWCMANwPJ49UliuW6SaqqBn/gGYP8pwPyJwNIxwDK76ahDeN6uXYCuYyABkEza4LbpY5WEWdSLxjF26/dQB0SJ6r4ByAN6NQxmkWcqrnQ00x1DEDJFjR8CcNWGvWVPp6ZdMQ6OVOCb3wAscPJ6NCy+7PerkP5Q3tBY1PrT9tEw+JwbgPu2AlNbgVkCcCOwtAFYcgAuiwWlM/XqDjMEbP9t4MB2YO54YJFMo/5gHIcALV1TRZ17FXOhPtvgtvkqf9H4kvHDlyKK4l6VzvVSBF22uwjOb7pbw+CfcwBSkyeFEHAUx/yw9JTyEbo27C17Ol3aFWNuAlgIn9QxO2tYfNlbK6MvaxeMRYquvL9rTcPgJ30TuH8LcHAzMOugX3QALo21WXBZLEHwRF1OgHS2eOgbgIPHA7PHAezNu7QFWFZ7JnXJ5rnqxHEulvlzwyVNN3+wern5Yovl7SXLGwvn4riLWO4fgMRJXcPd/+pmOymELEhRzBxJAo9gVL4kwVnbsLccgHEpWi3epocCAMeBRU5eTcPiy/6qtl0wpvhA+2gYfO7NwOQm4OBGYGaDs+5ExYDGgqP+ccAkINaVpB8GTv4d4OBxwNw2YGFrxYCmV0YxLNYheCXau7EhV3ga3Lb8g4+R45uoGLADgHWqhsBXA8K1AZADyRvuvtkBSArh+i9DsQhCOtf0UUgW/7aiYW/Z0+nRrhizoxXwFhyAi5y4rGHxU66qAFhT3rDSIVdpGHzencDejcDBDcDsBDBP1uX1CMJRwFiQIBzxieL3KIY1YW5MPOxNwLRb8gs0aghAss1GZ1O+SFHsdRPt0i/PLHu++dFb/x4mXfhcbWxhfCtYMFr/uWvKxfDaAcg7ipPCvFOVpuo3HrCjYW/ZA+rRrti6TS6MVQ+L4NPH2nx698GnXF0BsKa8Iab4dFZpGHz+JLBvApieqAA4J8CPOQuOBBAOV0CUYbIskRkAecrvAdNbXc/aDCxSpyT4CEIyTgRgneiLIp3nP6fs+a4A4N8B8/48CUC+ZGJA29fpuLmxJW+5h5kNFg2jiWHSi0r0Uv4pCoZsxw8DUfnhd4Vk0XGdGvaWPaBV2hVjdjgA0BlpkQ/K9bmn/HOVqtClvKEBqlfD4AtmgP3jDsBxB6DA7tdbcvYzJvQJkii2n4NOeMpbgJktbYPGACiF3wFoEx1ZMNe/4jnPLXu+KwD4t/5SO/iMBcXuesHylyACMBPDgzGg7opM8mEHIGdwrfGA1rC37AH10a64Yr4APvvOSdwEPOVbKxu+K2pdKRTmdI3dqkPPVgbSTBGAY8AsATjWniBdx0QxJylOFCcr6HBiw1P/CDgU3EgEIMW52M8YkLolQRddIN1AyKWiBretf9MJQN6HsaCPxe4rvgDdHOcOxDIAcmDFDXvLnk4f7Yqt63gEIB/Yoj+4p9xaAbBHeUPM8qF2aRh84QQwNQYcGgdmx4C50WqCFngNsgSvQ+Dxu4MuiawhwIAXVk1O+e/A7CZgThY1dcno1nHL2oDIyZULpBsAFTBZ9pjT0QQgn2V6ufRicS8QRgbs5ZYpEsENDejBfpoLrwAOjgIzZMBRZ0AHoUC+SOA56xJwNlEyTFw5FxBPeWvlzpnbANCdQ1eSGTRybMuydgMggVBsKmtYoC6Mt8znZxsZMLzAxoAOvsh+ydDqtXx4FIDl8L/omQ7A0QqA82S/ERdTI22mNfaTuBIIxR4BhKe+y61punQC+MytI/Zz/c9EuvyBeetLAfGZ5WOMZ9j2/gqABB1fMLsHAVBqhfTcyH5d9MByEdzs+B50Z7voGZX+NzNSsd8cwUcG5ASRKYbdHRNYwhhDIHRgGmO0gFP+HJh15jOXjnyKblVT5Cbfoq+yJOszF8P8+VnNPlICkMAzds/YLxlYznrJwIpO6egTPMqA5ZNDAB6iCCYAyYBcBqTRQ0e4630SxZyQJQIvMJ8mSeLrYe+p/GzGfnTpEIBy6US/out+K1wg+brs88rHmDOgAVCMnrEfxxMte1Mt6j7u9zzKgIXzczEBOJIB0BnCJoqgIfDEhM58SWzJEPGJe9hfVH42un/Mfxl9bgSiBySIBWnAJBDGEDAB8QWFA8wO3/a+wH4+rg4RLPYLul8tCI8CsJmJMQAOuwFC9qMI9g9Z0CxhZz65K0wfFBPqu7PEyVdWAOTHVlTcpxhXHZLz1w0ZA6EDLhkCskRf0sw4dRYC0PQ/vVSRAYPo7QCdj7GqVOSMeBSAzUzMxZcDMwLgcKX/zbv45SQlHXDIgagJc+bjZBqAWhUoH/Y+B2D0J7rFa6LYDRmzomsAaOeKqxEvbWacHQB08JkRIteSXiSBLYJOLB+X4xrzAzY7vgfd2S4RAKkDDgPzNEAIxMASSWF38WsgkuXLyXTRSRCe/DduSZMBMwe6ObTd8JBj24Aot07uDObPP9XsIzUGFPs5+JJ/M6oT4buxHv9X7BeY8KgOWDg/Z58GTC9Xq5FxTXOw9c3Cm6k5fPcjgbHbgAlvVG2tH1T3Oavoq6BlniZ+12n5u/2sDbOvasqoFg8x2Lnbcd1GdhSAhXN+7qMrAC4sA8sORJ6yHwD28z+Ft4fdv8UyqUDrDmCEBcpZ39kLS6aq9l4D2rLb/KYsFTPWdfbvh86vQu2s1K/K+zIjTsXIVQ9a59Egs4Y6sZfIA/EcSp/jEXv8BWcAhxaA+SVgSQAkGAMICcwVlNLlqTc9Gbv/HAA7MrL4+f1VlXwrUq7SvCoyGcrrWpGhuur2fNGYwM8YT67hT3s1LaZvqn5MLM0bzmHMmIFSgdFNj/mIBct63NhFZwEzDsBFgpDPeanNgATfCtGsX9TIKwNrg9tuVkhlng7TI/YArX1VkXKrEe1l2SynN1RCsFJsqnQv3UIMxhwIRjU5AGN9QUteVz3BUAvahuNgjC3HxLAND7nBp/cgONXF5wCz8xUDGgCjKPbvevlzcKUHH2ag6cnYzepYBB9Zi2FxDJdjoXJv1WDFiLJ6MKqKZUzoQFTfj2HmwTKcTpVWvcxHKm6kKgoORAEvVclPD6NdzLXpMT8IYNPcLV7yJGB2AVhYrAC4SNA5AxKM9ryDPE5fs6eeVKWGZ2M3S3MQfEyJUKV8L1ZpJXpVJ9pLilmlAxWkVJHKwIhjjD9TtVXVm1HdOy/pJiaMFRWM+bo0rWl4yM1N7oPhTJecC8wRgAttBjQWdBBGESwgSiV0Pb9DRgu0TY19N+M1mRKh8niqFx3rRDsLqjgl9yaGXT80vcL1wnE252PAZCzAHQCoiqoW3yYWFIt664fUpKaREr1NPakH6XkuOQ+YDwy4FMSwgU8GSRSz0UJx3Vx/5vFNbrs/EiLRY+v4ACITww6iJEodQKwBIyBRv9vwhKzUW6z66TUGEwhDS3ezqusAyNxnJn8xa1KRPSFts9YfFB/QDZcAm78CnDBT5U8rCqjfc3yh8Gn/hGd/MsKf1+QzYJ4891Jye13iy1cAE9cDJ+6FpYrEkidxDN3OtXR+FwBGMezoMmxJLOumAuD4J4rxJrfdH/XCoLGFVKiUbw+LAPQqWWaMMLrd6/+JycSIm85w9lOpt1j1MwAwFTiqAWEUxeYH5ENn/jInUVHeMXQ/f/jRePvCa4DhTwLHfBc4frGqqaNJzLPw6iZxV+HTplFGvZrXZT45N39+HW3TujlZv8D6fp8HRq8Dts9XIOR5YtakgBgdrrrt5Qsq8Ssd0BhQ4HMwmVitAWHAY/LbLDQNQDaTVJ8Q6W4qVB51OOqDZDPVB3TLOBepW5jmqaLbec3jGgBGMSxvvemDYkQ9GoKF1ShUCSKCqBeQrvmfVZPC1keBjXcCmw911tTJ8q5XgOLaQgA+x/OdWA2EGZ98gbjleTHdQHQN+2iwls3nK3/Zhj3VeQhovYzdxmArSwQgDRA3QiSCJUrTnjfl4KozRCSCCeYmt90EoJJbVCk/1+FiCwFZxLk4dRfLFia6x8LbYkD9v9cXtLG6+O4AYQRfrgPygVIcqyhTXcWFOJH8fh3rz7EKwnUArq8mcGwK2MCC1i7WY7Zenh56feHT/jE3yliE4TZncd636gPFCKWavGhcRx2J+cvs9MlSw0Ty3cCm+c7n0G0MExdW4BMIbTXE9UCynvyCCX+Ovm4gbByA/xisVgJPpXrzLj4EoRJjJIZrWHArS9iprK+KcefgiyB0XVKGjOmCmW9xhRVMUSyRFnNeFGEdI2q+/HFXclkp9WsAbgTG9wGj08CI64WxRk/OTDcUAvBHXSLQxcVCDMQSWbzv+1e7WVbz+k5w2tJtsbcCYV6WJY7hmAsDA7r1Sz3OgOgoM+KTOJbcjSI5yGIaNE1uuwlAAU/MF+tF5/0sIghVLdVdM2S0bSzHx2Mi+FTxXf8X925NC4BycK8QwfmgVX1LlcFiykEMcL2BndJJ7aQfijKfxLGDwAhByM7aC5U4qwPzNwufNnNuOH4VZaCPlPo2AahqFqoPVFc14ga2m+WEEL0cAz9kdPrOmMu8r1o/rTsXz7f9oswFs+jO6LAqkvC3Ggg5Fg6mwW03CUI6X12h8lyfcz3QHqr3DIl64DbqaQKc9mI87QXACD6vpJqY0EVxz2CEyCI5eMSGX2e7VtI5J4yTRyZhscrvt1nQuivOAaNLlYESwcySgiVbr37Bfd0/u31yEgg2FVaiPCeVOguqAfGov0iR0R9JABJ0bnwk9nMxw+fOh55EbgRhzozrBUA1polN9CLwok5HEEUQBjFMQB7D+j656PW+IrJ8O/bBCo4sGFdGejqiyYCx3mKe9/JtTiBvmI5OFiTisg9LtJFF7gZGDrUbHKs79+hyu5hSaUvh1foFr3r/6vZJCiXgCDwVVFJ7MVmRLsrGltuFCc68yFdACMDAflwR4QM3HPoKgIExt4gz42SuaQb8hBOE2oZmlu+KFlKR3QSssMJxDPWbbjpfLoJrxG8CYT8MKGZSVTCxYFTIb84nkCxCIPLDiby30gXFghaF4c2ReR466Uu2fvoFr3r/fKAEFxvpqMcd9yonIrkuK5LLV7MVCM+/uDJCyIC2J8a0z1iwqyESgMl15Sa33QKgmtPEBnp11mwuXgO70Ud4DHWzfgDYC3zBEOk7HlA6XKyHQzb8HgGoCSQLqsxorIy1Bxie7Wx0rFaf+wr9Xv32C+56/7HbJ5VHtRYT+GJrsehHcya57PyKAQk6+vBkBZPpjPEExlwU59awg3C24W6KBsC6tqHR+MidyVG3i3rdAnAsH2T093XT+zLr197MTA80h3SfsZP2UqpCrPQ46oF317VrpeiKXTJ9MhMLkgGdCacKG/mupV9w1/vnwyGgCDCKWzJe3lqsyzLWZWe6/kc/oKzgKH4jC7oolhdC4jiuzM0WPo+cPQ2AsX1obFCTO5Jzn566PwbReiwnfTWjI4KvDoh1juh+aT+WKSYD3i8Aql2rJk+VsVQly5kkddv2FvHT61icqO7Fr71/IkLNXOi0FQjV0046oBy6wZ922Q95ICqDEaL4XWw3COcf9Mw73DFB9AqE6wZAAS8XuzGQIDKf+oVkqxt00ttAc+YT0PJ9qRFSB8xoye5Xu1ZVeCSgCLbYLVNswoncHxoeLwCzBGjBNki/4BX3z9lXgUCyIIGmhova83cRgO5Te9yLgP3MfmsBS8xs8/U67ePQOqy9umBUruDchqo8sHSd3PMfT5ifo+ack8eFHI6QEcnT5GvdOnVdXof+ptJ+BVPWceiaRHA8Us/nkACo8mzqlqmWrbFDppT5A5UIZm7CPA2Vgm3QfsEd909kKIqB1qJAKCBG8ZstZz3xHOAAiwmpDIdng1maZQAkZzsHZ537YfQrwNyxoQ+HakrnS0h1mUA1C96TdJTmORyhC3oeqdwROi+GDhkFI6bYNrcNDEDeAkXwQizPRpmnIs3OdqZPSaRFUcbchHlgie6agq2kX7Dd/+d8lUJVXuUzk8ERmS+2vfd4uvN2VOV5rSwb0y3JhgIh9wJeN3YMQCIgR78Q+nDEVYBYZUrUpbXFnM7COSdf7N4IPvtDnT2BY/h8Chh10MXQeYGS+7GGjaQiABpuNIFiECnzdWJMIUHcazLptC7YivsF8/7FgLFMqpiQL5TuNbKfA/DC46rqqAbAwIKWK+timRUBEiNGsOQsyQm+Gpjd4n046hbT84KPuYjOmHHyp92gcgDS2OoIuVIeh/xyUkaVwyEWdLrewHE3uBUDcKIwnq40HpDXL+n3CzbaKdguel5VnFJl2awaghLQBTzteZ0cjLq2A2n0M6EPh2pC57Wg41poLzZsAZNso0Hw6eVR/J8bF9YjWGmVCpGKwQLBRCcrbiSxNLgVAxCF8XSl8YDHHFPW7xeFBRwv/rGqOKUBkODzqgdWPYAM53vTASMQu4Bx9J+69OHIF+N71F1O1gUB+AsBfFqKC+4Wi4BWX+CYgOTAU36wdMVNVKka3MoBWBhPxyiuko3xkSX9fvGMkqsDlzzHC1N6SQ4DoINOe7KelWWTheziObeKCdARApD1AdVnRH048gKUAmAEYi6Oh4DJV4VoGDWqjq4XLbO5o1jBoimEPhPJmwu9FvnTLgdgYTwd2wyXbMyRKen3i2eXXB245FlVYUpVxUpGiLtmGBlrTEhVUwV8dEkVKAq3MHJ1uzRbRx+OOgDWFX6MsXJU/36lJoEoA2AKvw8+uwTEDIBbStdOs8ddDsDCeDom7ZdszBIs6fcL9ror2C75US9IxJJsEsHdGFBil4yYuUwknofJgF4XcEUfjrz+X7fKo4EJJ//PkMORO6FrVjQMeL5kJhZMMXzLwNZCt1nzDFgYT8cQwpLt4hDON0i/X7ys5OrAJVe0S/ISgFY7j9ZvnQ7I3+lyqpYaL98CWp/N+nDkZdhi6bW8An1kP3fRTLKVWlwF6RZCH2L4zDDR0k1IqeTNb2OQSYNbOQMWxtMxeqtkY6I+ny9VEz6btfb7xc+XXB249AoXv85+tIBVgJJ6n4lf6oV+mfjdDJNMH0wAVFX90GMk1f5TxlS3Fggh92DyN0IORy5665KIfCktsl+K3VsGtpVOWOMiuDCerlSnjQ2rB+n3C+pIBdulz8wqonrNPLKgwKaC5B3s53qhXVq6oDNg6sOhqvqhEr3V2VNLBjmnSSNdrOLJ1zkAu6VPRjFcFz4fXDJ8i45hG94Gt3IGjOFYA8TTlQZ/qGH1oP1+8ZtlT1MAtHK8mQg25zOZUSCLIliWcbw8wfW5Ln04ssqnHX04euiCk6/3de66MPpuAQVZAEFkw2MKFw6a1wEL4+lSBvmAOMhD8vkOkFX77feLNw14YT/ssmc4A6oOdHBEkwXlgjH2k4Nal6wB4fIuX9LzZjAmorNeHMo5Tc0OewHwDTUh9HXxfGJsYkAbAAAgAElEQVS/uvCpoAcew6zBBrdyBlQwwoDxdLZWXLDFkHyF8xGE/fb7xR8XXByAAVC1oB18HQYIT+8uGfP75SCUs1o64he8v4j6cIQ+IqkPhxrBCHjdjBH6AblQkAeY1ondukSiELmsUPpjbyp7XuvDgAXxdNZVvWCLIfmKg6Bbhrjup98v3lVwcQLw8gqA5v9zC9jErutltg8gMxDWWMBaMVkmANWFyEV6R0uH2I1IzW7ypbkQOTP5f2ch9KsFkwp0kQlDAOmxzHpscGuGAQvi6VD4RgmAg/b7xZVlT5MATNXwqQc6KGwf2U2uGV2uzg3D4ua7fDnPwZcKgIdq9GaIBPZb0YdD7hgyIFWMXiH0eQ5vXS5HcMkc++9lz2t9GLAgns7KxxZsCkgdtN8vWD+vYDMAUpcja7lOR9eLVcIP4tcuob/3AOHCdW02VTX62ApB4Mv1v24gnPy9HiH03fJ366KYHYTHsgBBg1s5AxbG0+HLZaOp65i+ln6/YM5EwdYBwGj1cmUkE7+8THLNdAHhwrUOXtcrO/pwhF4cct2oN68BMDCfmsJM/n6PEPoYPp8bH3kCkbtjji2tJJA962YAWBBPZ0WBCrbYsFoOf9pDAiENk179fkuvf9nTXewKcBSjsn7ldonWbgQpx+26otaLIwAlfi2QQSJY3Yjy5i9dmsFM/oEDMM/Z7Uf0RiYUA7J+ToNbOQC3e0WBBm9qLad6HICG1ZK1XB5PoxnuOOIcxSXe/Of8xHV/P+FpwN47gKUpYHmuSve0pKZgCKSq5wqniWE1WZz/xouBm74KTMwBI17lVBXwtWSs+8/vL45Ff3vhpcAnvwos8d48DZX3M2hx9XIAnu0IIO0chu35AOgLL0yuG/jOmwbg028G/mNz1YWdETbm4I5BrFlov+EtD2wIo7l+Atg8D2xY7iw3V5diEqO54mnj6XdMAYcU+6gon7A3NSO2qFjlyZYDkAX6uD5Iam44YaUfVNDNxaJcLIPXcGGpfi6PnZdVD1wPspQBX/wl4OaNwN6Jqg+xwrxslcVFuYJblehkcYYZGPS3L20BxueBcS8nwg5H5kZkx6TQSbXFZcCQKadx5Cz5mPurAFxrRaa17pAR2PFC+ElSHKQ/0QjQcgCyGyM9v3SnsDBRJgL6msWCf6IfWeUJac8UFlpY8500DcCfvgb43hiwZwyYVhd2D/VSrKGAmIDnBkiafEcN9cprHgKMzgNjS1V7rRjRlceyrqif6KAkMgXIM+6tAnDl+zSL36O9+U8p9jGHQo285/2XA/AnXeNnKAorDXH/AILwbSvLEz6Ql2+cAf/3XcCdw8DkKHBwpOpFbE2wadzIdyh3jjNQirYWEwYq+/zJwMh8pf+xKNSwM6DZMmzNRRbM2K+2Ii6TlFrAWfd5V3i/F7IgT2LBF5LbIdkqxLPWvtzlAGQ3RpU3Y7AiixMxLOUB2t7pKQ8M0qCTnp8HkojJgNqaMEJesQv4AR3Iw8DB4QqAs+6SWRiqgJgY0HVDAdBA4Ba4xN7ndlSFAAjAYX4IPO5dBDMAdS2i+Jx7XTf1eEdTDfgAQnR34p/wQkRmjNAoByDT/ugFphXAmjAEn8qaPQAgZCs0lSckCNmVigEbFMsPBBE3DcBX7gLuawH7hoAD7EM8DMw48AhATrjtQwiXoqkTEwWd7LOneXNCbz6Tiq/TInb2M8ZzIFrTQbGiy92oGz7pXl/7jvdAJnb2470IbB3T77Sai+hyAP5voTqW6sKwFAc/TAdc5+3dvcsTrvPVYSK4SQb8xV3+6IaAqSHg0FDVh3iOIFTIFxtit9orL5Z/LD1Q4s+B8OnHVuXwhhdd5DoLGsgCCJ04q66X/Ju/vSaeAxDPvbdtmdtKDV90gVEPIl/xySkviOhmAEjrlzSkwj40SlQZYZ39I+8JBMx8mZryhOsKwqYB+KpdVSDFvhYwPVR9BD7uyX4SwRS59nNI+bRck/DzJ05v12M0nY8fAk8iWL5BB5qASPGRCi8EVjzv3mqpkC9ACrrwhKukB67GhpqRRowQMqCiYbj8oOoHeUWpdYIBAUj8c8WjrjyhNIJ1unzjDPjqXdUjJAAP8TMEzLYq9uOHICQALe/EwWe+QgddAqCzzD8+vgIgg0qp+5nYjaDzCgjmnCYone0klqP4JSgvvK+6LoFPoFMlkPGh+0rPWta4RHTNJJQz4M8EAGoNTPVU8opS64CC9zoAWTFChcq7lCdch6s3L4J/2QFIEBKA1P9mHIBmhPh3Ai354RyAAmWsR/PRs6vOR8Z8FMPS97yxtIlYgVB/I7jC0rIKSfLXF1EEB+BFFjQ3jCLA49OWsRTTEPzvzQEwry7VrZ5KwzAQAPssT9jw1dcHgCrORQCS/bgn+1HsCYQSveaHkzvGv1scgU/6R55Y1YIxhvOm1EZekQWl8wVDxJgwc88QiJc6AKX/meHDawX9z16M/Em7bO8Q08GBP/jEkAEVjMBoAFWXUjRA3KtNwOBXW3EkAZhrALktpC6lKtTV4OU7RHB+3kHWgv/zrnYZl2kCkF4uF8MGQGc+MqEYUCA0n1tkwxbw4ScHAHr71Q7W4++c8czwcBAmHVB/c7Bcek9b3FuwbdD/kjGWgzJjQ3thGmVA3jhfOyU+RxB6FamOFp8NrhsTgLy8Cpzm5QlVptAU+6CiNgXCaIQ0BcDYV8b0P4pi30vfIxD5+w72C9aliegW8MHzqrmh/meuFhYi0pKbs6D9fsh/n1XFMrYMbPgUByCZz6J+uEknDA9AornWFRb01WZEsACoHhOqyC7wdetT0QAK2KqOb5MCUvPyhLE0oQxzqaYNXL5xBvyVXe12vByLADjXAvgxBvSPGFGMIjCmJbEW8HfntxtQmxT0cmxp9UPAdKAZ1upA6EB7qgDo6oCUxXRtPVSpAwJpnUhuxAqWCCYK1MBExZljY5S8SYr+pxAFAuBayhNG26jw8usCQLX0SAAkwwcAEngyQizaXoziIli+Oe7/9kJvNk1LmBMe9ECO3XRB7aPeF0EYHNVPdT8gj016YBcWtBfBVYJuz7mF7VgGY/pO8f5WdQ1/7U67nIKNS7j0wIbDPFZsyNHHY7od/xdlEHj8CcC3TgCWHgGAPSxiSdt4312u/8SPAl8/Dlh4pDeZW2PD4J1c9+uyDaIDkgEJQKnTfG/N8nUAmu5HUnMW5ARbPfEuIHy/ACjRK7FL5pOR4RaxgTHofKl8r/S1ZWBnAGDKefbn3AFIPRPXB7sFiVQimKVgGdl5ooNwLQ1/1U+DQGSXQ9r5Evy1q9rZbP1lGQDZsPpzI8APHgXgod7qUx11YtBbFzC+/C+BL7SAWwhgdoLkONSLqy5oLogYft3ZI1F7EAC+phsAnekokhP4HIzml/PvthQWmPB9LJ7jxkcSr14jWj4/0wFlgJD5eoDw6fe4DzAYPHokWhHJZ3TFSkn4h7YOSOBwEtiMTv1aY0uktFYTmI2/43EMQmCuAJmUE0gmVD8EFdPpdnxhVhqzDr8F4NMtYM9Jfg98EVTeNu9Q2OFZBX7vr9vtgm/lcezczZ61ZNN8DCvilYCdPXqNDQpAlfGTKm0M6AA0PTAyoMSx64cRfPQHXsniOTI+fEWDFGp+Qb9BeySRBV2kpl0QxxGAlHDmkI56X6z+EP7UDYSdRgh/IouwIZ36lHabBE0GJ0r10Rgb/xA/tt/j/6aMAf+7R4CxzuBXWRGULwBfIrY6UNfpvLae7n0I+LO/reoLMqiVMbW38oUhkNkQIzZO7tIweGePcmWlAFTjAYHPVGwXxWoLYblEDkLuTT8MDPhXLJ4jALpaJB+ggU6xfgJknT7IKXIQXh4Y0FZCog+wxiUTwSkXUbSMV1rB/A31OXWuFpPUda/mRHKi1e6U+hA7Zq7l+A+UAfDtHg/LrptkQpZ727cRWOL9542Pa3rOvuOqagUltgtmJM08j4/PILbIDKz6w5PAHsbraTnMGdZWIwIzxIfeK0rn578J3LAVuH8CODRahV/FFQ/1IumIvXP1QudNfyNT8oVqcHviPcBd48A0g2RDuoDqHdb2SalZAdG9dnfDkAE0gXnH5ijWCDbKCq5/MRiV0QD8HgHQ63jG0hdsLGxA3x9Bw1Asli7hO3BwApgng/Gjvq01IHrXJ7q3Cz7E++YziF2rs1ZLZ+8H9jJsSoECWXj6igmR87aLgfbGq4GvbgLu2gjsHwdmCEIPSI1h+SkCRjpfUC3iNWcpoRrcnrYbuGsUOMBo7QBCxSTG/igxVcBIVGPWM1h1JYQPnyKNExGZMDIJ9b66eEBGxPDY1Y5nv+GCjfGAxD+DDpiawphABWZPjwNzNLAEIH4XCH0M7/5c93bBfI8Yk2cgVAdvdT10ifDkBWC/r9lGH51NhIsnsWHOfPmEUKT94WeAG8eAO8aAfWPAwVEHISNQlKQUglJjJExqC+H6Nq93kOpUg9szbwLuHa66QzFWkaFieXxi6hgVHOMCYGRuJ+5V4jYJIDKI9KlsAvFDq8QDrnb8NWVPh9EwdFkQ79TlSMIsN0Mi5s9MoOGno4U6f3YAvefL7Y7rvdoFLxOANSA8f7xSgWmd0kCQbmZ6mTLEnJ0UqWLhUkxlrBn6n3wWuGkYuGukCsufGq2iojnRFpafsU7MDxErJuZhYCsJosHtWTcBe1oeq+hxigJgXBrMmTBPnJKLrr+VED54ibHYvZos8sO+DNcrHrDX8YVVyglAKud0LtMjFPtNMz6QLDY7VomLJd671AEH4Xu+3g7nWq28ISvX58/hguOBg8vtFQvV/hEzxfqOevuTfpjri8vAWz8L3NYCfjBc6ZYHmBcitnFd06pxyb8W4gPlgonBqffTtdTg9pybqiVNBssyUsdUD7eGO9amnf3sXtxQipl7Wg/sD4A8AwHIyZMYky50Tp/xgN2OL8y051qw2hXzwRCEdT2nmck1RxHG+w5jeO9NFQBpR6ldMIMXlFWgVndqF2dVFsJzuOgRwMElB6DcI6rznemD0RnbwQiSRS3g7Z+tVIl7PC9kahiYZm6IizuLigliT/VoUog+p8P9l3wJ7qGEanB77k3VczroUToWLCsABud4ypaLCUoxf9i/9w9ADiICULrQRWuIB6w7nuZrwaZwLBGwClSqSyz3AhHbaRGEFGOmC44D72UVgjW2C2Z4lIF4ArjodODQcqUGqAxfcpG4mJVuVqcL5tbs2z/veV0tYK/nhTAqesYNHdO5PCJZos+WuzxHJIViuXFyJxupNLg976ZK2lizUKodilGUgzyGhokF8yw5Mf+qRkjdjfuDtwkkm7DTkNaBaQ2ox1q3eMD8+B6O3H6em8Kx1Ccx9ptWl9iYIUAAWrI3I3nHgPdOtsO5eOuxXXBdj0V1vOL/so3Cxef60tlSpYwveKf0pAu6ohfdJ8k4CUqgvr5jV6VGTBKALeCAh+VbZLTnh5gu6D44A6H8cVlkNK95O1WkBrfn31R5HSy+JCwPplAxRegE/2T+AloGncNmbQyogUQx/KwB4gHj8YWNTwRAOW0FIIIndoqNkTAxz/bd09XDGLBdMM6/pLKi5whAX60gCK2ujxzEAqGL2pQ1Jis5AJEAFHvTujYAKjRf+SEugm1d2COQLU/DAwQ44caEw8AtZzSIPgAvuKkdrWMM6M7xCMBoiBn4YpCE2NCfxWAA5MEuwvCCEICwlnhAHV+YORfDsWJGgPpMKwg1b9QpFnzHbD2BK2JGul9s8KkYW17vLALQRTCBpzXZpS4gtCXXMAkduuAy8E7PijPWprXJ5CR38ygw1fJDohh2BlRAgq2OeN7uTWc1D0AFNtmL54ESBsCaJcLkDajxj5ZXRiCIGA0waDwgjy8sk5+HY+X9ppUbJSCp6TnFCMXwny1WAFQ8rUAc2wUrRL6mXTAefWnFfnz3FpbagQKLAqAzoZjAKkkpXkNO5GCEvOMLFXOnnC4xIKOjnQGNdWSM+GqHQGd7JSsxUf+JzQLwhTdV4je1nQvr1MkPGtlf9yP2Dy+gAqZ6rQytfvdHSDxgLwBF8AmAYjHWluEDiKGMiqOVvtejXTBOuRSYJwDJAARgZAGWL9Nk+IM3SzgTydE4eec1nZHbtDaNAf1Dpd/SMx2END6kD0oXtFhBXmcY+OY6AFChnKnzl7NfdMR3qCAae2B+VVMYXASvDs3/X/zHJZcB84vuiqABEo0QPnhnwqQLyRURmZBPytnwHde0M1vN2lR6picoKULaxHDIEdHkW2iWg4/7b5zb7DSQAVd0/griV2JYojfpwRGEYsGBrOBmx/OgP5sAKANkcbFzNWTRnX/GSGImMYH/LYlk+gGvdT+bW+SWH+Ig1GqL5QeTtR2EYj5LVHfjw/ZDwL8yJ6TB7UU3VVoTjTYxYDK+Ivv7dzNAZIxpZSiU8jjKgIWTcykZkBawDBBnQdMr5QeTKI5iWCB09AmEb7+ucnOQ/aTPWn6wuzyS4u+R0Ob6CUGqJpIDA97AdqINbgRgBJ69CG4Jp6q/ckjXqB/RKla4WpkO2ODgHoynigA0JiLwaNiEt95YQKJ4FRC+7brKzRH9jZbN6iJYuSHm9I5iOAOhHNJfZkh+gxsBKPbLu3+JgaWDdojhMO5kkDWSlNTg4B6MpyIAjf3IggJgMD4MCARjFMU9QCgAykhSKnUCYHB9JB0wy5aTRUxmup4h+Q1uAmDs+hpXgFLnB6ULONOn5xACNJqxghsc3IPxVBGAiQG9aLeilWUJW1FvVXEN0TKp1C6At19TMSCBpz1dHtT/JH7N9yaxp6QkF73KBxYIr10nAMproB44qQGTj6sjUrtOFPtLeFQHLES9AdDFrq1E6M13MaxVCTNAXNFThIylLcor40zxtgDAPKuVwDMrOKw+SBTbtR2MND7sZwC7Qvm4wqHa4T/uIrhb+7n0EgbQdTijoyg+agWXT8llDsAFWr/B8qP1K7bT0pvtVwHhW6+t2C/m8svvZlawi2CKe37nhFtapkDnILRqBQA+v04AjMyn79EIkXO/DnzyCBwVweX4wxs9B4rRZgyPVFqykgDd+5JSpBU5r0vHyHz+jsc3ub0KABsZMCyQgeExKyFPVIz3lmcM6OfPAGCADYPE67Jfs6h7G0o+xvi7oyK4cLZfOgpsXwC2Lq9MwuuVERonKn4nSJrcXnQKcM7dwMMXgYcsVxkSebJgzOWPqdB1ad2f3gpsnwK2LXWeR9m3danUIV1lBSCPArBwtp+7DThuBti6UDWDmWA/DvXk8LRptfPtNUlihYZTOPCi04GH3wFsnwGOW6iAs5n3GeJJ+KLoE+9VDClQ8R6vOQHYegDYwuY3S6H/iJ8jb11ck0q9Qhoc9QMWgPBZJwFbpoFN88DGRWBiqQIgWyJY3lPozaGJ1KTEPh36zpTkJrcXPRE44S7g+Cng2DlgyyKwaclfFoIwvCwx9Zn3Q1DmIPx/2/sSaMuusszvjfXq1ZRUElJkKsBEGQyYhJCBSkUqAW1tsBdpuxEVaBzowXZqe1g90G2LotjQdmMjKqtBxQERdAWUAkUlZNBGkQRNyIAEMAkxpFKpqjfUG3t9//m/c/+737njPq9uVeqcte66b7jnnn32/s6///3v//++Tz0dmD0KzC4DM6vAFpd/0L3Gh6yTDgnvLwKzAWDGiH/ThcC2OWDrErB1pRgQisIQhAa+AED+HEEY6uNLyrRnZLSl6tSbrgLOeBQ44yiw8ziwfaV4UGbdegmA5QMTLFlqsfn7XecDW+eAmePAltXiXnkuZSBkRcm4UGXtU2uo3xsAZgz6y54JzMwDWzkgBOAqMMVBCSAUObh8QuN/CiTgcWAuyWhL1amvvBbY+VgxbW477paa7gIBqCnUrbUBiQuhAKDUot13IbBlDtiyBEyvtO5VDxvvVfxW/JkWNFrCeK8NAGsY7BsvKQC4hQCkJNaKy2LRIsg6SJ3IQSe1onKKC2CsOYMeN+0Dtj0ObDsGbFsEZmWp5S74g2Ir2uA22BScAJGA+dJFwPQ8ML0ETAUAkgDTPq9zdK/+sMWpPF19NxYwA4g3PtsHxAE4SQC6FdSgmGWRRIJLZJll8EGKjHiX1jwaN10HzD4BbD0GzC4WrsKMW2pNobZoCu6CLCDfCTqzgg6sr+wFphaAKQfgZHKvpRSYg7HN5XCL2AbAZwPrZGaj6ippXhgn0kqmU1woxnHedg5AATuWHig2FE1uVRwoxoX+Wcbg89S3AqCKPONcCi8oPtVP+9++G3j+oSK2xRBFDElUxbTS+3nvc4FpDsjxllXQoJg8FgdCQoGJJTTicLcQ6vPL6wbg9cDM4cJv27oAzFA5ky9/UOSvmg8oP86n0dICBn25JwjARWDSAUgBHN6vfdbv10AbARh8X91vDM2ss+NvAECKPVLCsHoyUgRqrlbnRwB933OBc+4DXrIC0IEmiLnE75di8HsyAcjzWUVGUi6uICMpVwwJVMXdeOk3XAxc+Hng+vV2esAYw+sWoP31r3eLcLwQBeQUrEHh4Jo2h4vDmJPuAyMLGAeEn7uqbgB+I7DlSWBGCwe31Gb9aL20kGDb/EGRxY6WTz8f2wtM8l4pgL1SgM8esHCvsuylME4nn9cfQLtldg6TZ0kUKorAfij23vAPCmqp3fcCl60XFINid1PlZrf41/dnApB6wSQjutUfIDJR8CGIQOwWEH7DywpKrWc8CFzqRLHkVYrB2jS2FQH5vkuBycXCAlIUUAAkCM2iRBA6+ARCe7DjYmQduLYTleiQ/XTTS4DpI+6nLhZW2nzVCEBaMLd+soIGqjD1ampdugiYWCpeBKA9bBJC9ActAk8LES26SqsftInLZ44dQif4Igdhym5WLrPDyuYH/7HTCNwDnPko8LXrBccjQaioe6BiKad3+QY/MGTH6rS3OBvCnQDuAIyqhiDkQ9RX+29yE3on8IwjxQPI8zkTiApGU3oVkD/4fGDieAuAdMw5MFQjEgg1DYsUku+a3uI0TGBfV7PotwHwaOEmbHEATvuDIutni6UAQoFRIFRYhfe/dhEw7tbe9Of0Si1g8HkrwRcevDajz07gIJ7n05rYyWIpb4ya/7vv8PRdFpj/LXDmkQLAnA4jCCOlTBRN/rFMAJKgkkVHpGUjySSBSFeg7/azqk8EgbSEq8UDRACLKDXSyaQ7Br//DcA4LSCtwnKhTEkQcmAIQhtM+Uaajl0uS9NatITXWzpzfcdNB4DpY+6nBgDaCtanYLN6fCj4u1ay0QIqtML/EYC61wSA9tAJeP6eWsAoDysFpg1eB0HIQRCIIkVeCqQf/05P3WCB+UPA+CPAzvmCaFWDKEuYcl1yMN+Y2dckqGTeHPEvvWDSNhOAfbefX0A6rS8CUw8X9066bFIfdqMHJID++DJgLACQumyc3gyAEYRRKFCLD1eu5ODLF6QvXedx0w3A1BwwxdAJLTXjd8seQnGrZ9bPFxLyA7WIKON63tYtCQBN/sv9QPm6BkLp0vl9t/m6ietR6fbyBA4gnXtORwRRpNnTtPpW6gWLH83lKqcOFTEnDiKtoHwy8RNFhrefyeztbnrBfbWfgttsP+kIyO32ELD1cHHvInrlvWs6TsnB7qAUlg/suFtAWkE55zYQ0QpqcALoNCXTEt7A3KoaDwGQfqoAOEUBa7fUbKctltwCajVbxvSiyvoasM0BaBKwwdKb9fN7NfcqBWGiSWykWXER0umeacUEonQgCKRfIgDFjya5yq8Wfsfs8dYgiuMxgpAg/vnMzu6mF0z6Zj5APdvPQec0TEosnvQosGOhaLuIYvnwEYSithE52F1XFAA0p5yigD4otCqygFKnpHUpLYP0OcKURYv6Mj4MNR433QhM0gL6QongawOg+6rl9CswKoSkEIxPyTsuAPigCYBmAXVfYcVf+n0SRYw6dP1YwNgHsgSajiJP429RrpWOM6cxDiJB6NINM4w7LbUGMQUwB/M9mZ3dSy+YVG0EoBiDBST5ddZ+PkCsAiIlQZDa3LVatJ0WXG2PbL98AB+4omB3oP/HgTUhmGgBfRqWf2TTrUSjExDSP/qWzQDgfAFAWyzR8rkFtDAKX75jo6nUguZxZ8NByHbvvqBQ36T1swcsBaBAGGRg40Ir+rt9WUDhQ5ZAU7Es2e9LLzglqHRxNkbeuW+oQRRls5jaMjnK0a9ecNf2R4LAwO829kQB3LTtEYQPUwzQAWgW0AGo8AQH0ljp/V17pm0KRcEifGuNOnocO1rACQbKPXhs8TtNwVr5uh+n6Zf3wDgu29g2FdMtOc8B6PdpFj08ZFrplw+ZA5FTvAQQ0/BT36FPDkRqBT9Jag7xYlQItY0f88j78sZzCcKPZlrAQfSCK9uvB4h577SCotUiEJ8opq8IQFl/PUBPEoBLxbRE62LSqG4dFB8r5bHcOtiOQSqT5T7RKzYDgJx+BUCCTxZQCwhaQc9oKcEnEBKknj5FsJ1LAPo9xoWWPWDy+6IIoqbeaO0VA+zHB0zxIQDKkn1GgtXiRxMIAx0Vn0Db+lkuFjLRCt5WEwD71Qvu2H5OfekD5FaciQay/GIbFgBXriwAyGmJADR1ck3DwTE3TQ4B0LetzBJErTYAr2BBSI3HTS8tLKBZPo/fWQDZp197Z3scjGb5BDp/L3+njMweB6B83Gj9wj3atOsPWin9WgXCFlVO/3ctf4iD8XkBkH5USlAZlNPZAQqARr5vxu1yjmH0givbX0UQKI63o0Wun/xHuR8E4VnPK5JQLd4VNttTBvK2uoiKOUf/f+GjwMNBh0NMV6J0c0NpcRv7mrYv3kh8/uHxYp+bVpwLp3R7sts2YzouSq3KGa+q7+x7Co4nazAerRKsVlV1QitF59dyyFZaYY0HMu9mWL3gtvZXMbymBIFMZ1ov2h0B+LTLisxgW+Eq5uU92iZ72ud9vvR+4JFp4NjkRh2ONi0OB1/UBCkvEYRhfuNs4OmhhiPKnFQlx6aAjMnSXJUAACAASURBVPjmz1w41nnwO4cCIBvBwZgTAOUHRq3gyDExD4zRGVYEnpm5LqmQc0M5esFt7acFl0SlHiBxuTkYxxdaihUC4QVXFu5FCUD5QtJl85sjGA0ziQxqeu/fem+hw0F2fLLQGxFlYMRvo7v1WmIVtpt1DFkXvOR7LwJ2HSkyoZmEypoVVe8p7b6qEMnidGG/Vl/L2aPOIwuA1pAIQE3DAmFa4j9f7CPaFpCHKujr5xzZesGdHqAqKz5X+FLRAl58le+jui+kTBALMcgZ73CDBkpN2/7+bfcWOhwUyCEAjQTcAVhKdjkPc2RajewKyu/n1//qJcA2uhBMRGXQOcn9U6JIOjXHQqSYOsVoQp1HNgAvz8yny80H5PVz9H6RqVd849WtXQ/zA0Ow2ayGLJ474L0G79vvbulwkJi8BGCg4S01SKqofoNvSIC+5zkhFUupV8rUTpJN06KpaBkFQm5M1HlkA3AyM5/u9Zl38zrk6f0iU6/4hmscgK5ISUtCTowyDqb7UxwsqFJW3fo/vbuIBJEZ1YRgyHwQKNi0KEl1OKTCZJdxtPDn//v8ooaDaVgqFyiTD2IKfcjZS4Fo+7g+HXOPv84jG4DIzKfLzQf8KVfI/FNKrQ6h94tfz+vOA9cGAAbrpylY2SDlVTTt+uCnV3/V3a7DQQAysJAwobZJgUXi78Qayhd812WeiOAZzEyUiAkHMeu5BF5FwZQAWLPwknkLQy9CrPMy8+lIHZFzvN3T+YbV+8X7c64OHHix74V6zIxB+RJ0wQ+UU992tYoFy3fcXcTDxQkoPsCUhFIczKVCegSg5B8A/PILN9ZwxBSxtiKiUAOi7JW0dLTustF8AGbm0/1o3vjjnSGdj+lYlGwdRO8XN+c1wABIoHk6k61yuSCJITq3jDY9Vx0BqK++uwAfX6JkI/hME0SC1EGguiQ+isqcQRLrF6/0jO2w+6FMnZhyZYsQ1W50qOHgPX1NXndtODsfgMwHzMin+0+ZN0S9YOllMzWfLwKQSS396P3iY3kNOLDPM1y065H4gOW3p4uTDkB8zWdb7FgbdDhEgJkCUDRvogTmd/vPv3BVAUBuvylNzAAYi4hisVQnEHoIqWblrxqm4Mx8ujfljT+YjsWBYgIOc0oJPsq1slCpH71fKybJOEoAuuVTRSCnYlmU6P/Z4iSJEcbLv+Yu9/1EAh7JKEXDKxq4ChUiKymRbwjgHdcUWTARgLYXHSr2LOU+BV7MVwzxwOfkOWybYAGZD5iRT0edjpxD6VhcOQ6j94tP51wdOHBdMeXa9OqWRcmWXA1XLUIUH6zyCwlAs3z+YBkfs1u+VIejJEF3ckrjI9T0y/aMA2+/tgAg08VURKT8vbKMUgAMIGzzAcOi5HknHQAz8+l+MW/829KxhtH7tTz+jIMAJPCYMULAWd6fvi+EY9ouoZBM/Kx/4LUBgFLgNC5o16FrE8JJVJgkiFhaQQBv3+dVbMrWVsC8UxFRkjjaVsW2DtRdOJ/vAyohVYK7A+bTvTdj8HlqTMcaRu/XxHkzjgNkIOWuDr8jnYYDKDutgpUhra0uAlAyCCUAK8BXcjBXgLCk/h0D/hcByDxFAdAzoFUqUBYRJTUcMWdPP7ONL6i5bLQeALJRQ+bT/W7G4AuAOXq/lsGdcRgAY+glLkYclJVTsa6ptCX3uQjAKINQstFrAZKIwWxQIhIJuovB/Nx+r2LzFCwlj8Y0evl/MYk0kieVtcvrwGUnHQCVjjVkPl3mItQsIPuElx9G79dOzDgMgGkAWlNyBJn8xKprBRC+zgEo4LWRgcdVcOCjjlNvmx84DrzNAahaFZWLygKWxUNibIhTcPD9BMLLa65bzreAMSGVoXvJ/Cgh1WUfO+XTZS5CDYDs9GH1fnOrIDcAkABTTDCCLYK0Cwi/586WcKJUiEpC8CCBYDsiiSplqUIUmOjf+o2tIiKVUJbgU5uSWl4DWwX4+PcXnrQATBNS+8yny1yEopdcay+930y5YhgAg+9n2OoUeI5TdQer+32fdhmGoOBZanBo+g1yEKU4dYgFSvqB//vZBIBt9RshkTbW8ZZZ2hUgvDL3iU3uux4LSBM0ZD7dPRnTH08VAIfV+2XAOucQAMuVcKfFSD/+IAABsEoGwYAoHZIKEEYxRIHwLS8pUuhjFVs6/ZZhIVWyxVKBBIRXnbQATBNS+8ynI4tBzkEACv+chlUVIKE/5cRGsWmlKfIzudc3APLQSlg3E2OCyVRc1kpU3DgBmKoQsWtlBcswjPu+nfTYtBL+GQdgOf16GCZW6pXlBCqWSgqJypoOAFfXXDifbwFJLvi5HAjlnUsiIe6AjOp4iQNQHRlT2PlgJCUbbc2s+v/hFwFb/q7gm6HlYpBbmTV2sscQyy/qFBj2v0/cAdz/HGD7NDA1AUyOOU+1CwWOewNjKj6/O03F1/WuugW4/XJgfBoYmwDGdH7IxB5kLPIB+I8AfNwZgga5ck2fJbEm8V9zNWPfrasbgMuPAcuseJ8Exsb9FdBhA+7gaQNKB6TfcgCYug+YJT+g89aoBDMmIMScP12uTKj13uDv8zsKig/uJ1uQOsnojm3qB5P5ACRBH3OhPuzzRN9DV88HqQLEWPJnvTy5nm/t/1s4BcuSpRZtGAu4fi+wtBVYEyccrYwn6hF8/FkJp9bKxAKVFsn/d8urgbHPA9NPOEOWl4+2cfoFHhfVrJTZPKHSj5daOtup6JyCpPx8rHWRVQ7WOlrYCMx8AHIzlxkALPD9c0VB+x/A3E/+E2fUYHXdF7KTGwdvTd0AHP9r4PgWYG0KWBdfsBdsMPfPrKKsoL9XAVLAvO2fFylCE4cKliyrDVZNcGS1CqEYhWFiAZV+XntaURdTLmpCEbpchTYLqi6NrkMCzLzt5Xc4HwyJmmkJ+Z73jQOh4NWeDUZiK1K08f0EXt7CMHVawIk7gaVpYJUA9LI1Ao8bzKX1cytoFtFfpdCIWz7rgzHgth8u0oPGDwETc8CEMySUzFaikgtlpW1Ta8JqNba7lVljSRgW+Q6ZP/57WQvj6fydBjXfAjKbgEvMLwWCvhNoipgNpnQshlS4IGFWzIk6ylWwAz93ETLxGWB5ClidLABoIOS7pmGfG+33YAG5mND0G8F4678vkiPJczNOAC4UyQm2N8w94kirFlfIAl7i402d6dbPWWAtrsjOFiuCvAJZOQE0pHTFsckHYDeCvhNgipQNxoAz8/8IPr5nbvH2jd+6AThJAE4AqwTdZKEBLDoDgU4+YVkPHIBoPwareOt/BkDexsMFAFnbzNJYm0IDnVwbt4uyur1kwL7Tp+iZM/08WT9Rc7DHUmuYTr/x+6o4ovvu9fjBbgR9JyA+omwwxvZI5ULg6ZW7y9FPf9QNwKm/CgCcKABovh8ByVy/UCtJq2f+X1yYJPGU27lIZLbuEWDsWBHesZeDz4iURLUWa1TE47LqK12fZmd3OXidFctqm92KatVs1jAEsNv6sdymaa2g8+xUL4I+Pn2beCgbLGWHI/h8G3oTr45iK86POlbBU9yKI/AcfLR+ouQwH9BfmmbLlTHboOnZ/T9+5vaf8FUaAThXsFOQ45mUcgZCWTAxe0UQ+urYMO1/37GtxQmoLCBtRSp30LrDp2SFdzYMgk/R+VNwvwR9mwQDsaspGSfJgYDYNTbp8psCQFJxEIBkQjDrxt8dXCUIY+COH5MVFPi8SOn2n/QYLZ9Gp0cxANIP5IvAkzVzxivRydnKNzBa8fddM84b6AFyAriMF2pajk9kYIeoClXmA3AQgr5NQEHMBqMVFMNaIOayNRL/vhlH3RZwmhbQQUcAasrVVGz4EtjCu/3dfb/ID3PbT7uKAZ/MhcIC0vqRTo4W0IBIEAmEtFwCYqjW03bcmdwBYeoWgetUbrR8snrloiR2drpACf+rD4D9EvTVjIJu7HBV+781X752Czj9lwUZkTEgcPoNPp5Nv4oBRhCG6dd+1DkMz1JIhR1BAHJ7zwqO3fIRRM5tmDK5CoQKsSgOeBYBKFZULTqcB9r6Ni5KYmd3WKDUA0BlhNLM8EbT1QBXBU72aI5ZjUcVOxz7WLkQ8d37vsart/uA6RcPsxNSAtAXHDYNC1AEpf9s01kKwuBwGU7HgVt/1jtD1e60fgQigSe/j5bQp+KYpGB+H62jT7P8/ZypBIC8Dhcx8eY9wF015abhmnoAyJ5WSrKeNgKO9SHxnT/LSasJBim5lRjWBEIVeROInKL1qunybRawLgASdEy74qjaNNzJCgqEEYzBGvK0297mAFSHEIB6ebKDgc8J1ksmV8t29f1en6L5v6cxIK5iK6Xne/5jCTiFcTqVn/r/tWDPWwXnEPTVgIKUHU7ljASawKefIwDpMdRxRB+wFgD+RREDJABpwSzz2c0LfxczVjkVKwaYgtBBezu3SvX08d39P5uO3QKahXMQciourZRAGKZWar/YZ1xXRPe8wQr2AUK7TvbOVTZBXx4MBECRnConUBSFEXT6mf/TK+/qmzAF/0UBOPqBZYF52HrTFCw2LH5G8UCzJEko5nZqmRnPh/uCXmpnVpDTsIPPwKApOaSA2QLDLSHf97iPx0tpISLfz7bl4iFfsUsnj+HZWEeOYDCDnDmCvZkEgedcCjxGseIhBYt3vx049HwMLRh8gA9gh2MoH9ABqKJzxf0McO7XlSAU4HzhYYFq+5D7hwBu/98OQLlIBCKnW39SlXNY+nqeiq2dkQg+gnGPb9/ZpT0lq6MV5D96gLCwgDmCwbdnCvZmCgY/dxy47xxg5SWuUjigYPHFbwA+fyGwfr2rXrMvPB+vp3L3GHCgi9JOHQCkRVPppeUBigXLFymyejYTB4YsgfA20ofRAlYB0FfAlvQqP0/TsX5PLOB5DNu471cmIwiBaRww/F01J+mz2pqChxUMZvpJlmBv3iTocsW4dzewfhkGFix+2febXDAeJO/YEILBB7pU1g8LQFo98QASVGYNQ6DZfEG3fnEqrgLhbf/HV15anbkFNCvohWSl9XPQ2XTM/2s3I4DwPIZwBEDfgitH0Ek6N6x+u/iD7T4g/YdBBYPpWHEaHlqwNw+AQa4Yj54JrJO+aQDB4pt+oCAyYvOPEIQDCgYfeF/9U3AbAMX7ItAlVtAspKZdz5SOlvA2pstxjES3wJ+92NgAGK2gwi78QoVfEhBeQACqNNP1RdoA18kKdgDhxkUI/zKIYDCnqyzB3jwAJnLFOEIW7QEEi1/1Y21ywVglCAcQDD5/Efj7M4CVrZ5AKlkhxeQUaxBI4nvFzxf8IfCVC4HV7cC6ZEX5nen3VX1vAGLZq8ysrvHY+QBwbGfI2E6JpLvdX+ksthpUvQrmX/sVDGZVUJZgb17vJHLFeGQcmCdVb5+Cxd/5xjZ6QzzMLOQBBIOfTV2Ps4HFHQ7CLQUQmUrV0rgKJMsCjsxGAqTn/hzw0EXA4tnAyg5gbTYBorKkUyLnkB9YVhTxu+kT13iccwtwdBewPAus+b2ar9xJAafqfgMQO4dh+J9+BHe5gqZZZzYok1JJUcpaR6bp93P+W/N6p0KuGIemgEWKgPQhWPxdP7NBLhiHKYHUp2DwpZ8rLOD8tmJQVplOLxAqmbRKC6EDYC7/CeCRPcCx3cDSrsISrs04CPm9ArZk55UvKAspYLqPaPdR4/H0g8DRHcDyVr/X6VabLHk2PhjpPVZY7d5xwF6CwS9y/4LbbVyQsEKIufGiKe0p2JvXOx3kinF0GjhOQY+oNRtljji9TQPf/fOV9IZY4Gq4D8Hgy/4W+Oo2YG5bUUy04vUcLCqSJVRWszJbNgxSmMau+q/Ao2cBR88EjtOqbgNWWaTkIFz3YiWrF4nAjtN0nBZrJnU+/8PA3CxwfMYB6LUra3oglL0tps6wlVha5rLiqd9AdDfB4Je6U0s/0BXTDYh80Sr2FOzNA2AXuWIszABL1JaKWq1R+nwGeM17OsoFY5XTVw/B4Cv+Djg0C8xvLYqJCECzgsxmZlq9T8e0XGUyaUizavPtxoFr/zvw2BnA0Z3A8e2FVV3x6c4sqwObckeyhiXAowUSADhD1XhceDMwx37lvU4XxVN2n3rJIocygkr/Vbs7fe+EdBLcfaXXQ3IPWIrpBB6XlnwpR76jYG9e7/SQKzarxM7qJFj8mg8UarMV9IZ4gvNDD8HgKx8HDs8A8zMFAFnPYQPDl0Co2g4fpDZLqKCxT0/7fhJ4fCdwbFvhRiwRgJruCOwUgCpeCvUjZmEFxhfk9W969kW/B8xvKQqnVgg+B6CB0MsI7P70AHgmd2n1NQ0rv7FvALIlVYK73MnQCDLThSGZoDpuP7uCeuX5n8zroB5yxThGnQ0CgyBMxY63Aq/5aBHG6EBviDlOLV0Eg1+0AByZLgbl+HRxnZXJoqqttA4ODovlJZVuSjTQFtq+NwNPbHMAzramdVpVs6wEoPtdNg37wJfvsYiJP9NFqvHY+7vAwjSwxAeNxVO8T6aNVRRRlT6hHrJ0Ovaw0WDJCKng7g86APvNB9wg2JvXO33IFWOBgn8EIf2nRLD4tbe1+AU7yAWbZeskGHwVdd2mgAUCcNKnJgLQrZ/V9/Jnn5JUYmnAE3hCmv3+t8AWQfSzyPK/POOgJgDdsgqA5nfJAvLdLV+bz0kK4RqPZ3wQWJxyAPqDVhZQyQr7gyaXI9axWCFVAGLvRUhV46PgLnUWBs0HbBPszeudPuWKsTRZAJDTo8l8ui/42juL5veQC7ZpsEow+OrZQlqVVuH4FLA8WVyDAOTAmHUQCAWQkOlsQAwDt/9/AE8SgPQpNa07+AhAA6HLXbb5Xr4IaAMfv/eGvP5NzyYA7UGjBWTWjh40v9fSyscHLtaxhJWxFVsNNAXH1khw983+DYPmA5aCvXkdNIBccemfceooAfhAAcA+6A2xLuAGucxrzgKOMexDfV9OwbS2BB/BEoqLSrBoYGgJ3E8qLcIEsP/ngCPuUy7S13L3wb6PU56/m/Xj4Ps0TKCXQA6AXuNeZY3HMz5QANAeND1kwcKXlj6wOZQ+b7R+Pi0PD0DeFAfk590CKg8qncfoFzIRVWVqfFfBhgn25vXOAHLFWCDbvPstBsJZ4LUPt+jdesgFg+qVptWq11bg2gtgfuLiRAAgQeg+oEmsOujsXb5SsAoCIN/3vx04OlNM6Yv0tdx1MKvK7/TFjVmeCD4HQQQhf159eV7/pmc/kwCcKABoeYvR0oept7SEoZQ0Tr1lPuPQFlAtO0nyAcWhpzw/FSjFzGjLx+RGvxzoSeC1hwsA9klvaFN5FAy+9mJgnhaQ0qqagglADo4c9AhCDpJPl5ZommQ8738HcGw6AJBW1VecZv0cePwOY0/wl1lAD/WUCx0mMlDLr8bjmb+Dwp3x4nkDYbD0thIO5aNtfmDi/xGEeRawxhs7Vb/q2huABQJwAlhyy2cC0xoggjAAUCWWAkksOiIY978TmOOqeqqwqAx3WGhHK06n7TDwOcAV/iipPAKjwgrZm2o8nkUA0gKmAHTrp+o9MTrEYvq44o9pZIOtgmu8mafCV72YAKT/RwAy5OPOuVlAAk9Oule6xQRTWUKlWtkU/IvAHAHti5oIwDK841ZPFtCmdr0U8PaC9hVultd4CIC8P2Ztt/m5/qC11TJXlJDGGpfGAmYODgFoCxACkLpuWh3KCgqE8gNVZK4KtxgjJAB/2X1Krao1rfN7CWZf3LSBT4uAEIyWBVpipL7GgwA0AW25GbGENBTRx3rm1M2w39mmrFVwjTd1Kn+VAZALEE5LtIDyMWUBvbLNLGHgd5H/V07BDp7r3uU+Jadgn3ptxekA5MBri0/Wp4wzBjDbCnkMWMqVpE8GJwLQqvfc0pqbkVj5aNk7gbCxgJno30cAjntowtXNaZ1suvSKNhsYTcVKmw9F5xGE+94dfEoP+JYhD/8OC8eIPUsUHokVVKB78XszbzAF4Pvd//PCKVGIpOAr78mn4DZOm8YC1jco+w6EFTDDPJqeCEBZBa5GffVbhmQ8DtZW5TYOvPhXip0GTuu22lTMLSw+aAVl9QhEWjurI/aQiLJkTMLsX9R3r/ymZ73fp1+37OU9hunXSkdl7T3QrhKCtlCM59k2i5CMMSIAGdqxEIwrmptzTsCEut5yilKoJLAcxCq3fe8tLCDBFwO+tKjyuxSCMdYEXoeDrHcHvu0tTwLzmwHA4N/Gh6zNCqqeOSxC2lb8tQSiMwbuqXIqAcjFh2JjBKGJyShQG6ygVbfJegULWBYcMR3rvb6oCRaQwFPgl1M5rR7/JtBZOIZWx/0+s4QeY5z/1/X2tFnAxPpFELaVkdLN8MWGVr4pCBsfMHN8bmTKfCjZ0Ncp456/x58zLzfw6Qf3ABd8pUgEYmqk5bGyek06IQl1bkXScnlN/u8L24Gdx1qVq91KQvrpgwaAAw9p+wnXPw1YjyWMGtDo2ASOFGMU7SIEUzdYD34vMPmXwLbHgdkFYAtlGiim6DpxJtvq9LtlVr/aWKEB8pUXAOOPAFPzwBTZ9r04vdQ9Ts4pAZ3cd+yHxgfMAOH+vcA69/9Uxijmz/AerYpdar1lNSMYzV+vWY/34I8DY58Gph8Bpo8A04vAFEFIknIHohGVR62QhFRSYjQE6qFri2z3iaPAhHNNlxKwArI0Q1IAxwfReacbC5gBPp66/5ICgLKCtqnsrKKlrFZUFPKOr7osMTtdsxzqQRZ93Q1MPARMPllohUxRqkEK6gShOP0S+dY2hlRv99y+ovRi7IiTnTvLqmg6xDPYpqAUgRgsoR7MxgJmgHD/c4E1FXu7FRRbvEgd7evXWlbPpp9EgUjiJpwe6zwOMlvpAWCMVusJYPIYMOlSDZRpoGiNxKzbdIQlXONMWJbGtw4svdgz3El47nzTRvPrrKptAJT6ZrzfintvAJgx4vsvdQvIXK5VYF3sUZxmJUvgA1FOvwF8spKyBtM1y6EepI4LqVMedbEaTp0EIKdPKh5FqYYqSxgo2jgFr13j6XXHnOiSZOeBVSvyC8qC2r05FVvVw9cAMAOA178AWPMp2LJaaekiCPXExwHw660n1oB/niGQazwOkkSepbJ/72I1x4CJ+cJ6lYI1riccrVicUuVSmIW82pkwnHHVOKbFsOozQGkFkwewnBES37ABYMaAX39ZAUCCb82nIlo+40p2gNnvsoKunxH1xGwA/LOzdQOQJPIuHzV2GBg7Cow7AI0l33XfjOsv6oVodes6ISbBsAZMX+kJxU56KY7pkmFVhOciuvTzSt05v0+ryuT/9gDrZNe4wPMsI7VJP3GcP7gUOOdvgL1rRYJ0ZI5IV3hV4/wrGYPPU3/AiRhYusy2K7mU999P+z90ObD7LuBZK0Xdkeq9NSX2+o4HLwfWlopFCC0fgciBMtAFC8CGrYXVoVjnU2G7rTXrzh4kfRzLY1kyGwBoeiGcPiXb5eAzdXWnazPCSScb4j3xfmav8Cx2p50lAMW0VXINitCogl2r9H2dcctWwQxQsn6ZTBbMNtcgdKIbiZj51VcBk38CXPxoQcfCUg8pjcYgZScw/momACnXyr4leBhs5QaBTHpf7X8dMPYJYO8XgAv9e8QJlAZZq8D4xSuANYKPJQn0AR2AHKy1MACKe9nfFI6IEqduEWoHIJ9wlsVKLekoMCa9EAegSTYQeM4TXco2SEMkAHEbBZoj4bbYtdyCVrFqGXgTSxgXYTZeHLi9AMjEQRCVUXP/n4KUaaT8vVTi+Rtg7GPAuYcAWlMCgUVkQfJ2Q12yBvPXMwHImhDWwf81imsTiLSEvHZkr+jY/p9CQRD4p8DOBwteItai05qn31FFdfLlFxYWgCDUIkRkj/TxbCEi/89jfPZ3X2VqYSJQbmUNQY3HQT7hbv2sLoerVwKQHNEEoCsm8R4MhPRjXUGzVEIKIoY7yaEYuY4dgGb5RXruoSgtSCLLarkICQ9f6QNykGjFdjsIBaI4kGlt8W+Rg5g0HJ8qAp47nihAzFpuWtPIMBZJlASILvR6fQ0DCVbJCkJOJCqnk4pGpb99tZ8MopyiKDX7WWDiwYKXiEQOehCrgKh+eJQ+EQHo1Lby/zRlyf8TIbf9XS5ftIb8I92YugH4ay2pLusorl7dAoonWtMwQSTdOFuQSLTGHyIC8kxSIQuA4hwU2WUAoO4/grBcDbsfWElSzg+JCoYDoEGM1ixSkHzgF/wG7y8sIa3J7JPAGWuFJSQIaU01iJHUiYP4e33BrPOHmG/JMaOfTZVYRhwGav87vWKPJ9/rSH4IOGO5sITqg/ggxXs4TOaBAECbeoOsgfl+DrQShFqcEIhyyt0MbMusEkx76iAZXKM8BvXiZAGlF+KaIbaadYpem4aDgpJZQz6YJABV5VcHAJZ0v4FxX6KG5UpYs0KnqjhRuagEVgPglYAl9ciHf8mdUrJh0Qx9vkDBzBywfbkYQIGwahA/kglATsHsDzKA0BATiPyZ4NEDwIeoa/uFYKKXL2f24nQoIgd9R3yQCMTFqwIAfdBWI7+yB5ZLECYLETd85YJl+2YAUNosLIel/xYlu4Jsl6bhNhD6it4WJCvA2Zc4Gxo73RcgJeOqFmGR6rcChLYACyGojmEYdj59KnZ+tIQRhH9IvWA2hiREjDeRI9Cly7fMF3EtWRFawhQIf5IJwE56wdTIYdt7tp9ys1K8JnoJvod9Wn682PNkP4hUy1ndWgstAtBDMLYN5/6PAc5DGNoF4SrZfN+4+IhT8jqwg2Cp8ThIJ5vfSWBXAVCrWN9SMxDK+skaOvhoAc8me654pmUB3f0wyt+E8FyRAGmPlOEoiSD2qgvmAKoOm52fAuiTDHSyIRxx+lI0QxxADubfF5vffMmSajrWlP7nmZ3dSy+4r/ZzAUEHnQ8R70HsXlK+PgJsW68G4XYGZj0EY2EYATCAT6tAhmE0DXcC4faapcwMgAIfLb0kuzT9Qmw5uwAAIABJREFUSi+EfeALkSrpBovbrQDnkm8wAo8/E3i+CCsZ98NCpAp8cUekZyBavI4ET/TnaAk/RQCyAXy6uNSPA0i+wMeB6ePA5HFgZq2wpNGK3FUDAHmv3fSCe7afX8CB4UNEEOolVi/3obastNwJ9cO5BOBKEQMsAcifHWzRAigWWAlCn5K2bQYAOe1KMjTIR2kRUhKVS7IrLia0v+3xwHMZMCbYNP0KfG79zAqK5DxOvyEuWu6VD5KSHy2YAEQAfpaRdl5UkuUctIpBnCIIl4psD03FtIIP1ADAlBuJM47EqqUX3LX9kSBQcuuyftK78xUkHyQ+RLqHZ3Fv1KcgLj5kAQ1s0Qo6IA1nHhNLQzA8ZxvBXuNx8DcS5UYpNnoYxsCnUIqvZo0F3wPTMa7Hv53HOJVbS/l+5bumX7d+5WLE44hxIRJB2NMCqj9ixwuE90svWCaIA6bAp959EKeWChAyA0PTOV2unGMQveCO7bfqHbcS4rJR7Ewqnw5AWhLuImg2uFQAXAVs8RGmntW4+g2hB3P79L/EJ9zGvqrxOPibiVihAOgrWQOf/EBfBcsPNBBqW9Hv6zzGqFzmoXz3B9AePgXiq6bgiv4YOB9QHS8AfpkAFMMjrWAcQA0iO9XJiQyAnos2vV7ESHOOQfWCO7Zf7F40mZFQScRKAYBaSU6vAVcTgN7xXHiUFpDTMK2dFh56912BTiDcvpkATIXzCL4g3WXTZ4jpGfjoF/oihL+fx+0yWUABLwIwtYKKIabgCzHQvi2ggBKn0McEQDaKT5cGkIOo6SuyYzEfjQB0EM5nZgAPoxe8of3sgSqCQM3jkdFLvpRvR13+7UVRuhUFSavNO6otwp88ZZ3+t4M6HLtch6OT9AG/q9cmtf//gV1JDYcnQ2zY6/YakfSrU+Pg1M45NqPt3IEtoM7WFHokyrWKkooglCMWLYjiUXMtK3g8Uzd1WL3gDe3vRRCoUEYCwGtYFxxqgA2E/jI20F5hhmQod98BHNnlxOTig1aGiDanO21yV4DygWuB8YeB6fnC9WEtiKVVKeE0ZGiXWczeJoWMIig5a9V5DA1ANoKDeDylZ9NSXxyAsiKawrQqmCv2HVf5e8aRoxfc1n7xs+khItAUvojvyWryxVcWJZksVSyZoQRA3dcAoHzax4Gj2wtu6FVKM7gMgti02jbV476oUJJs1j/AbA1mQ3Pm8eTRsoZDtR+xZKCiEKmMXTIeXHPGdhYArX8FwG4DGMEnAHIK4yvT58nWC2b73cexaZgWWaEKgU1gjNbPP7PvOYGsUSBkv3hBtmRWNzxjTk9RWktvxp6POj0vARjY9sWkFel8RWxegjIF4RjwAOnZWMPBTGjqvHmszxJOBUD3xyznL2bqROvoP3N3q84jG4C7M/PpcvMBef0cvV9k6hXv+2Yno5QfGArRbaCC0mWv2YtF3ecerNDhkNZIIsXQRv5dlTtGADJSz2gEE1EJQM//026HdIEZLC8B6A0tk0g1Ja8DuzJdphS82QBEZj5dbj7gxZN5er/IZI+67pscgE7QaDOUMyC0Wb8+gXjuR4F5J6YsaXnFhBoAGEVvUhb60jISgCQnoh/OLBgvIrL8v7DdFkEYM5dtNg97tvz5zJqzdfIBmJlPl5sP+DJP5xtW7xffnzeh7H+Z+3+RpkyWT1YxuURJYVtx6T0fCTocouQV85VkHRIGegEuEv/YKpkA/JceVmL8kv6t5/9pu62tfiPWcFQVEa0DZ9WcLJEPwMx8uvfnjT9IgZyj94t/ldeA/S9tMaGa9SNdmsIxbvVscVJ1GScoMt4UPwhAsmMZ0aXzQBsvdGRBjQz0FUpEJRAJQOq4KAnBdz+sfiPJ3bOYn8fsykyVWMfiN3BOzckS+QDMzKe7OW/88aqQzsfE5kH1fvGjeQ0wADodmVGwOeiMsUqHrGOnS4UFy9P/wAEojkEnI+IqOIJQNLgpCXhcmLAtD/D+kgQE235L93tj+YBqgTX9BiCeW/NedT4AmQ+YkU/3sbzxBymQuZhm8g1T+QbV+wWFdjKO/Te2mEFNlCb6gPF708VJ1TXHgKd91GnZpDfi1k/gM2vqU3DUnCuBmNQe3P9vw6pe229KOvB0K1k+ZS+rnrfM2AlA3JMZtah/EZKZT3drxuDz1O/yxAwu9JgJxr3lQfR+8aa8Buy/wdWQZAVl+ZzCrG3q9c/YrkmHy3IRYryAAqAkEBIlopJxNNUbER+fA/H+/+AAdP9PmS9dazicJybm7mlB8nR2dI1HvgVkOlZGPt2nM29GCamcGZjAwlQ+vvrV+8X/zGsAAUiLVPp/wd+zaTMFWw+/kAA0GQQnpCw5mDsAMIrcRB5mC/+MAffTwgfwKY2KfmCZ6ZIkUShrxXxBX4yYaV8Hzmcn13jUA8CMfDqWYeQcSkhVOl8U6uxH7xekrsg49h8oiCENgC5TUG5vKxxT8f2aRtOtcAKQ1s8soPuOVUIwpchNlEEIOyNSIrrvv3hwnckWIZPZsnbcDyzTpvg3lU8mpZQqozyfK74aj3wAKh1LgrsD5tMxiz/nkGD1sHq/YNFOxkEAcuW7oqmXlisuQOT7VV2jwi/kTgj1RkoZhBje8Z83SCAEEJZW0C3gff8tADCt4VASaWIBK0HI9q8BF5yUAMzIp8tNx5Jg9bB6v/jdDPSRns0BWIZeUitIo9IhHmhXTvzCPQddccnZ76U1V/IvC4SBCFyg26DFNg7c++Mhhb6qiCikT7WVUmr6lYn2nRKyrdZ51GMBlZIc07GUBdMjny6XCiUmpA6j94vMZbgBMFo552pu27PXAqXTyAUQcitOQjAm9xX0N9pIwIPmSCmH5QuPqER0L4kDYgp9zOUL6fYxkbZcFceyAreAF3GlV+NRDwAz8uksnT3jiILVSmpWNlhMze+k94vMZfgGAPJeHDjpCrgM01Tdry9OzvmYAzAqLVWIwEShwzbRwwSEn+MqP6bQK5tZlWyhjCCCsC19Xv7gOnBRbgp7cu/5AOyVjqVMmA75dJZ9nHF0yohWNlhMxKnS+0XmMtwAmFq4imnYbrEqNJPc+9kfd62RKh0On8qV9hXZ9askEPgAfI56ziocUgVbzGT28lEtRMoKtg7lBHtznfZNA+CQ+XQWM8k4uglWK/NLYKzS+8U9GReXD0g/Tyvh4Ne17Yb4Zbr6g6y7/aNWcoPpjKRTsJIags5IJwkEAv6en05S6GUBfRWsUExZyVZVQCQwrgN7Wfdd41GPBczIp8ODeXfTSbBa6YYxlY8/p3q/udc3C+jTbtvqt2oadnB2m4oNgMn0W0p+hYWHWbwg9yU/0Kb9EIy+5y2hiCit4UgKyTeAkN8Valk4Le/ldlONRz4AWWBRM6fdIPfHstw/G+SE5rMnVQ/kA5AkLHS0ak7V7reXfhgACaBqDtD3e/nmc5k9kA/A80JReq+U38zGVp3ObJo/BvAOD3dtwiWar9zEHsgHIGlFubqSx7+Jja36anLLcDvvgwA+NDpDfILv+qlzuXwAXuSjrkKemlO2e3U1uWUYnL8dwB/5e2apca9LNv+vsQfyAUheX4VguB+mzIsaG9ntqxhF4Xbe3QD+n7/uHLAW9wQ1tblMRQ/UA0CaHC7plXEh+q4T0OWcfhleYTSHBK0EH/mi+fcRuKQn4I6fWpeoB4AevCz3HOOm9yb3F5mBlZBNclYCj1aRfyfrbgPCTR6AzK+vD4CyglX7jpmN7HY66d1E0ctdIrEEE4wEIMlam+Pk7YF6AMj7EwAVbU82vTerCwhAXopJN9zVI+AYrOeULLZgErY2x8nZA/kAJGWr0naUWdFpy2cT+oCWjpdjLFxE5UzYIBBpEUX5nLnlvAktb76SPVAfAOUHpiAMm96bsVtCAMaKALICMyxDq6cXfycA+b/mOLl6oF4AiqBRIEzBp7/X2Af0+fi1XIioMIlAI+AIPIGPmeROWV3j1Zuvyu2B+gHoFfZiDS2lC0LiY52WUADkQoTTMH1BFSYRdHoRfKSu5v9qrizMHYPT+vx6ARhSuDcAzzmDo5ZGHT1PAKYMwQxME2jiSo/gEwBrrq+u41ZOy++oD4BaCcsXTPiSI3ey8s4KGoG8QwCMFM+0ggQhLR0BF19SXuD/ayakz7uR0/TsMcxg3SjfqWNA0hsrga/ojaq/8WPcC+YIk4Ke4CMSuB2XVht1Oj8zIfXlU8BtU8DhmYRXWdfrdF1fgr3+S8At48CD04DVjXQSDO70PTUnaJ5uOCwsIIFHSSFy1pKPWCDsZxCpw8UVgKSPxLXM937OzxxAljzcPAbcswU4Qh4V3UN8mKoeKm/bu78IfKJQa8VD48CylHQiL3O3/qg5Rf30BKACMtJXjXKQcfBSK8Dfqc3KVCwuN2VFGRnm/yKZtq4Re5ifyQQgM2A+BeB3GHaZBo5MAIue0l7Kt3cC4xhw+5eL7TuCkJk1jBtyerbUfYG5ExjZ/pqrxE5fAOrOq5SmowVIrRp1IyT2R6+fg0bgVYG4CsyZe2UsaiOGKXr4Sfp9k8CxCYAFSKyvXeY1o1BxQux91yMtfsHPutgnnyUuUvhc0ZsgUXib+nVkq6+ZKaABIHsgVZnuwD9sVo66rrR4ImdhLGSQ8zPL/JgBQxeU1ouWkO9PTgDzbgmXxrzMkatl3keivfG5x4r4IRcz5BfkO5vEZ0kgpIfBZ8yKjlL17syy0tMNcOn9dl4Fy6dLFabj1Mpvow9Ify+I4Nlo9Xt+ZqU9VdJpqZh4QDDyxUyYOYJwHDg+DhgI/WUVZl7aSEt93+GO9Ia2iuZKOfA7lhp9JpvAVy61w2mOwO5hmCgMHC1H9O24gu6UD9jP+ZmbtLRaSsei9SL4XDPbAEh/kGQ/pSUcc0lbApFWb67lQUhpVnLBsoKqqZclFMmUtrxPcwxl3X7vOCAtYLSCcugFQmqhdssH7HU+RznjiOlYXA8wqkOfkItTAom+oKygca4ES8jY+N3z7fSG4hfUtp3ihUHruVSsFy1iRvNP+1N7A5BdJACmVpAgZPhGOyCigEjlPLudn7kvFtOxuB4g6OjD8UWLRkCZFRwrLCEXJQQhp2K+37lQeBCRX1A7KPQto1prFEmSYn2mB9EAsO+kYfk8KQhZF8yjVz5gp/MztyOUjiW9bCUhEBhKRCCgSis45uQ/PhX/xfFWMgOnWu2gxB0TF/o0kEZ/kCDM1Ts+3RHYnwVUL6XhDFrAswfIB6w6P1MrTulY0sum1VICglKwCEACqvQFCUK3gHcsFQCM/ILayqP1k9JshVqrncMalOYYvgcGAyCvIwuod8YBJQmZpmGJeyRwkGw4n8jJOJQNw3idLFhMRNB0SgASTJyKoy/4ieXCeFfJBUeV2SoAclFyR0bbm1OHTUiN0/DTAwD7zQeM52dqj8VsGEkVE2jKetG7AEhQ0frJAv6RC0trC1skl+IWlNinGLbSaZg7Mc0xfA8MbgF1LQV1z08A2G8+oM7PVF9Ms2GUE0gQyp+Lwu2yagLgR9ZaYpkSypQ6a6Q2DCqzpkvietXIFdoZfuieGmcOD0DeP0HEbBhNwYPmA/L8zJQsATAKnguEqS+XTqkE4YfWWwCUFZTksYAYwZfIBeN9Tw0cjOwu8gDIZqsoSSvhEeQDiiGYFoyWiSDRypWgi69UP5sc5fIcquSCNeXqe2X9ZAHfM7Khe2pcOB+AT41+aO5iRD3QAHBEHd9ctuiBBoANEkbaAw0AR9r9zcUbADYYGGkPNAAcafc3F28A2GBgpD3QAHCk3d9cvAFgg4GR9kADwJF2f3PxBoANBkbaAw0AR9r9zcUbADYYGGkPNAAcafc3F28A2GBgpD3QAHCk3d9cfOxqYJ2au9RdPtdp/khoEOlglDYT39V1PzQFXLsMXAlgt9PCxJKPbufyf8/KHIPfBPAZABf79Xc5XQ0ZQ1Q7360NbxoHrlsDvs5ZRsgo0une06by6X1mZvtP99PNAp4F4LsBXA5gjw8EGTeqaGF4QhzQF80CX7cAvGIdeDYAfhdZ2sTKUcVrpE7nd31N5gj8e2dIo2osk7NZpMdK0Z19tv+bJ4F9K8D1ACj8yfNSikHeg+5Z969m57Y/8/ZP+dPLKZhP/rcA+AYAF7g1oRUhEMUzFMt6eSJfX78b2DkPfM0i8GIAX+uWlAMppreUUErn8p2gzTl+2flg/sDbTkvIOik+CP20//mzwAXzwDcCuNTPJeFXpEpM6QEjIHm/zTF8D7T5gATYNQCe69aAloRTGulfBESBSYNyxR5g/Bhw7hKwZwl4vk9LnM5JmsBzUyDGAX3B8G23Mz/g9BuUa/0IiutfMkj7zwKmngAuXSvOpUvAWYBtF4BTnspIj/O8zPaf7qdvWITw6eZA0JLQEhKEGgxZhUj/dz3NzSKwbR44exnYvVKcy+mM5Km0JhxInUtrGkmzCPicg3W5LMGkQiZZTm9xS9Z3+4m2o8C5c4X15pTKW2Lb+fCx7WLtjYxzqiql29Icw/dA5SqYf6RTTilg+lYCIXmICKQ4IK9wxfSJY8AZK8CuFWDnanEua9ZTAMsaCog3Dt92O/MvnRGBtGwkqKRmMEkqCaa+2k+0LQDTh4rP88UHj74kF1WaATo9QHQ7mmP4HugYhtEKj4PB6ZQ+FS0hQahpldPya1kXTOqNY8DscgG+HavAttUCvBxInitrkgL4lcO33c7spBdM3kAuSnq2nx9gQfAh4JyVwvrxwel2z3p4aMlzH6DM2z/lT+8aB+Q/OT4EEqckWQSBkGD6EQKQnDCLwBSnYgcf32fXioGUFawC4esyu7CXXnDP9tOCsyD4KLB1rmgvX7zfbu2WG/Jtme0/3U/vKxBNAMoi0KcjkATCN3HOEr3UAjDrwOP71rXixYEkeKMFlSX8ocwR6KUXTJ7AaNE2tF8WfA4Ye7Kw1mwvX/yZn+eKnvcrfzC6IK/ObP/pfnpfAGQnySoISBqUXyAASS1AK0JfagWYcRDOrAF66TxZQU7jBOEbM0egH71gcgXSFZAV54NQtj9YcNIpbONCyh8Ygi8CVospApDuB63g92W2/3Q/vW8AsqM4gLIKBBIH8bcJwMCNMX68BTqBb8s6sGWtsIA6jwDk662ZI9CvXjA5A6NVa2t/IAicnC/aGV+8T74IQPm/AmGuBc+8/VP+9IEAyLslAKMV/LgAyIUInfnjwPQqMOOgI/DstQ5Mr7UAqMF8V2YXDqoXXNl+EQQ6N9v29aKdesUpWJZbAPyPme0/3U8fGIDssDid/pUASCvCaXgJmFguAEfgEXT27gDkuwaUg/nbmSMwjF7whvbLhSDL5TwwvdRqo9oqHzACkCB8U2b7T/fThwIgO01T1IMCoAZxGRhbKoAXQUcQTjkI+a4B5e5FzjGsXvCG9gdqrLGFYrpVG/UuHzBOw2/LaXxzbh43DKeoJwlAHqLndSs4udoCoIBHQE45EPk3DuitmYOQoxdctp8+rFwIWsGFYiFFoLGNchcEQC6e+OJC5J2Z7T/dTx/aApYdJ37AyJK/DIwvFxYvWr0IwEn/H1Opco5sveDUhSAAF4HJpQJkWixp6k2n4IYfMGf0amDHev2I8+l4/UbvNw8Eozw72wJePOJ8und7EkKj9ztKGA1/7WwATo44n45pWI3e7/AAGPWZ2QBkYHCU+XTMfGGQmYIxjd7vqOE0+PXzATjifDrKtTZ6v4MP/MlyRj4AR5xPF+VaqZLJF1UzKdPV6P2eLDDr3I58AI44n07ZMARbo/d78gMubWE+AEecT8e9YOn2Uheu0fs9tUCYD8AR59MpG6bR+z21gKfW1gNAz4geRT5dTEZo9H5PPRDmAzBmRM8BJzqfLiYjSKKr0fs9dYBYDwBHmE9XtRfMsIz04aQZ1+j9npygrA+Akqs8wfl0BCCTWRq935MTYL1aVQ8Ao1zlAnAi8+kEQGZTNXq/vYb75Pt/fQAcUT5dBGCj93vyAaxXi+oDoFLyT3A+3Rcavd9eY3xS/z8fgCQX/LPR3SOzkon55jg1eyAfgD8M4NcAPD6aDmBtB1e4NMDNcer1QD4AbwbwxwDe4UvRE9wHZG1gNSXDLlwLNcep1QP5APxzzwj9IIAPnXhT5ORc5EYCA9HNcWr1QD4AmRH6FQBMTSZZH98ZmD5Bh5g1FopiNns1x6nTA/kAvAfAEwDudnI+EvQxPfkEzYfaCXRSBluQMB7YHKdGD+QDsBNBH/9+AkAobqTADGK7Inw1x8nfA/kA7EXQt8kgrGAGMfBxZ5Cv5ji5eyAfgL0I+r68uR0QmUFoBQU8vfNvzXHy9kA9AORoMw7CdGQCjoUZDwL4kv/+8OZ1gJhBIjGDgMh3vTavBc035/RAPgD7JegjODfhiMwgoqeJwNPPTaB6Ezq/hq+sB4AcXeXEP+ZhGVo9vRimIQD5v5oPAZCupgDI9wg8/qz/1Xz55usyeyAfgMMQ9GU2Op4eAchpOIJQQEz/VuPlm6/K7IH6AMjgGzdl6QtyX5jWjpQFevF3lq3xf6yhrOlIAUgQCojR8gmE+l9Nl2++JrMH6gEgR5UA5KYsc+AZmCbQCDi+IvgEQMob1XBEAHIajgBMLV+0kCdws6aGu3zqfkV9AGTwjftg3JRVVRAtHQEXX/wbAcoXP5d5CID8GoJKvqDAloKOoIz/y7x8c3pmD4zhaqwjRzCYyQg5gr2ZgsFTLweWr8XQgsXjbwLWrnNtMlKgNoLBmZAa7PTCAuYIBlMvlWQswwr2UlUw45jdDSx8HbD+Ctd+HVCwePKbgJV9aASDM8Yg59TWFDysYPBtmYK91IbNOHaPA/M7gUXKXA4hWDz79cA8+W0aweCMURj+1HYfcBjBYO54MMY3tGDv8I3nmWSHOzYOLJ0LLPGXAQWLz3oB8MQUsEa16kYwOG8whjh74yJkUMFgbsNlCfYO0epwissVY34bsHw2sEIRkAEEi/dcU0SP5qhF1ggG5w3GEGdXr4L5134Fg4kAjuDQgr1DtDqcUmZETwArZwAru4BVqsv0KVh8/o3F4v0QXZBGMDhvMIY4u3MYhv95Zh+Cu1xBcxuOU/HfeDIq5cv7FuwdotXhlCBXjOXZAnyrO4BV6in0IVh8wStLuWCsUAyvEQzOG5ABz+4eB+R/ewnu/kOP/3G/l4kJTERlljQtIot2e53/IwO2OPl4FLtcnCqAp9cahT56CBZf+LpSLhhz1N5qBIPzBmTAs/sLRHcTDKbiNHdBGGymOC/3hglEvgjAnoK9A7Y4+XgiV4zVWYDAs/etxaubYPFFP1QkLtCIP8neaASD8wZkwLP7AyC/tJNg8L/xLNBu+YBdBXsHbHEFAINcMVamgdWZAoRrfPdXm8KitLdmgYveWAq+2y7iMqfuRjA4b1AGOLt/APJLqwSD3+y5T1yI0AoSbAxMMzGV1o8/My2ro2DvAK2t+GgiV4zj4+3AIwDXtwBrVJeuECze+9aW4Dut4PxkIhYsdetGMDhvoDqcPRgA+SWp4O4veQ5Uv/mAGwR78+6rQq4Yq9PAOi2fA4/vBkKudKVU7VZw77uKvWFuZbtcMNb5v0YwOG9g+jx7cADyi6Pg7gccgIxlcA5TKhaD01yYKBmVFpBZMfx/m2Bvny3t8LGqoqTliZbVI+gMgHwnMAnCIFi897cLAAZ6QyzFzzSCwXkD1OPs4QDIL5XgLmk5JHk/SD5gKdibd38VcsVYGmuBTaAzEHLHgyCcaokB7/1IkUET5IKxwF5pBIPzBqbPs4cHIC/AaeqvPL9pmHxAE+zts6VdLCD/lcgVY3UyWD0Bj1ZwqgCggXA7sPfWAoAJvaEtZBrB4Lyx6efsPADyCtmCvf00s/NnOsgVY3m8BTRZPZuGBUACdArY+5lWDqGmYbIrLHEx0ggG5w1OH2fnA7CPizQfaXqgUw80AGywMdIeaAA40u5vLt4AsMHASHugAeBIu7+5eAPABgMj7YEGgCPt/ubiDQAbDIy0BxoAjrT7m4s3AGwwMNIeaAA40u5vLt4AsMHASHugAeBIu7+5eAPABgMj7YEGgCPt/ubiDQAbDIy0B8ZYNMbkX+ZekpuIiOQrPar+xs889HJg6jZg5jAwvVZ8B+ll9PlO5/Fc/o+ECjnHfi8zYfkvM5ulmp4qJXVqx5deD4zfAkw/CGxdAZgoHfuh131QkaI5hu8Bs4Ds8B0AWLnIRGCBsFfn87JffDMwdjOw5R5g8giwZa34jnQQUwDo99wBfJ4TM7COiNdlaj2rA/jeV/vfDeATAP4UGH8I2Lrc6gc+SHqY4oMZ74VSKM0xfA+UUzB/oBUUCKMl6zSQ/PsXqZD5KQC/A0w/DEwcAcYXgYnVwppwADuBkefnCim90FmBWXwnK87Uen53BI8sbuwqaz9p5UgnQhBS+ZN1zE8Ak0utviCwq8DI8/nx5hi+Bzb4gJzKZE1SEFZZgS9/2pWR/gTAJ4HJQ8DEMWB8ARhfBsaWCwDquwQKvvNgHXvOcYVbPFJPkw+dDxC/W1Y4tWDpw/Rlgo4lo1T4/KxTihDNpJwj3/UiMLXemprjffC7eWpzDN8DlYsQDiKtVxzEqoHkyX9HRizW+nIgaQnvAiaeBCbmC0s4tgSMu2rMePAR9X252jXklaTFU108K0MHav/nvJ6ZxVVk9OI7GR2IZoGQNc/HgbHgIwqILIVujuF7oOMqWFawCoRxkfEIB5CWgkREBCNf9wMTc8A4QciBWyoGz16rwNgaML5eWKpctYZL3N+TWLX0gvtuP0HHk2n16JDyxXmVhfU0qywbJbr5GSuXKxA/sV5Y9UYWdnjwyS3qKKgarWA69Wg6fjQOIK0HadnIjPVFB+AiME4AuiUkCFnESyCSkmAuU7Cjm15wX+2X2ifBRn9A8mKcW2UFjULVQcgVDl80u40SYh763FfvquhLCxitoBYUsoJfjXKttByMq9CKcHn4sPuCbgXNJwyWkECcz5Q376UX3LNncZyQAAADEklEQVT9fFgIJs6lBBwtn3Tt6FpIz4RWnuQxPh2XIGzm4CwQ9hWIFgBTK0gQHiIAJddKq0ELQh+KL1qUR4MvSEsoENIKrgALHNiMox+94K7tl9qnnMio8MSf6SNwGpYVjCDk/Ju7isq496fCqX0BkDeqlWwKwic1gAQSpzGREnFgREz01eALLvvq2Kfi45m6cf3qBXdsfxRbJMho8dimqOhEK8cXQRr9QVpvPoDNMXQP9A3ACELFxPh+jACkP0fLIKFCCRRqKuPUdqjlC9o07JZwKVNHeBC94DQcZO0XAAkmgotAk9QYrR9f/BvByYfMSATDVMzwTXMM3QMDAVAgVHCZ7/MaQK4QZUHiNCbBQlqUw74YCb7gcmYkelC9YFlwvVv7RRAorTuBkECU9asCID9/x9B935zYzyKkqpfiNHxcA0gLQgvBAaPVkCqm3h2AtC5m/RyEqzw/4xhGL3hD++MmslgqCbgUfLKAcRrmTlBzDN0DA1tAXUlWcDm1IOIIJAjlT/Fd05lbFQFwjdtgGcewesFt7Rc/Gx8iWjUCjGCT1YvWT1MwgUqrf3NG45tTbcu0aximWx9xENcEQHGbcYAEwtSXSqY0gnCdgeuMI0cvuGx/FUGgFhwEYrR80QckWN+X0fjm1DwAWv8RgJFilJZBznz0pQg+AZAAlVWh1GvGka0XzB0cCQi30aSGVa9AF62fLOB7MhrfnJoPwPER59Px+o3e76mL5Kwp2G57xPl0kxc3er+nLvyKtLmhfUC78RHn081ONnq/pzcAR5xPR9mRRu/31IVgvgUccT4dNaobvd/TGYAjzqejumqj93s6A3DE+XRUg2VSCjdaGr3fUw+I+VPwiPPpqJjO8J1Nw43e7ymHwHoAKMFd7QErAeEE5NNJMb3R+z3lsGcNzgfgiPPpomJ6o/d76oGwPgCOKJ8uKqY3er+nKwBHmE+noqRG7/fUA199U/AI8+kEwEbv93QHoEhZTnA+nYqSGr3fBoAtaiqBUImdm5hPJwA2er+nKwBHnE+X1gUzSbnR+z11wPj/AeCpPDD3t7rvAAAAAElFTkSuQmCC",Nv="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",Ov="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",zv=class extends ss{constructor({blendFunction:n=Xe.SRC,preset:e=gs.MEDIUM,edgeDetectionMode:t=vu.COLOR,predicationMode:i=Rv.DISABLED}={}){super("SMAAEffect",Nv,{vertexShader:Ov,blendFunction:n,attributes:yn.CONVOLUTION|yn.DEPTH,uniforms:new Map([["weightMap",new le(null)]])});let s,r;arguments.length>1&&(s=arguments[0],r=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(t=arguments[3])),this.renderTargetEdges=new pt(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new Go(!0,!1,!1),this.clearPass.overrideClearColor=new Ye(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new Ao(new Lv),this.edgeDetectionMaterial.edgeDetectionMode=t,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new Ao(new Fv);const a=new ad;a.onLoad=()=>{const o=new Dt(s);o.name="SMAA.Search",o.magFilter=yt,o.minFilter=yt,o.generateMipmaps=!1,o.needsUpdate=!0,o.flipY=!0,this.weightsMaterial.searchTexture=o;const c=new Dt(r);c.name="SMAA.Area",c.magFilter=et,c.minFilter=et,c.generateMipmaps=!1,c.needsUpdate=!0,c.flipY=!1,this.weightsMaterial.areaTexture=c,this.dispatchEvent({type:"load"})},a.itemStart("search"),a.itemStart("area"),s!==void 0&&r!==void 0?(a.itemEnd("search"),a.itemEnd("area")):typeof Image<"u"&&(s=new Image,r=new Image,s.addEventListener("load",()=>a.itemEnd("search")),r.addEventListener("load",()=>a.itemEnd("area")),s.src=lc,r.src=cc),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(n){this.edgeDetectionMaterial.edgeDetectionThreshold=n}setOrthogonalSearchSteps(n){this.weightsMaterial.orthogonalSearchSteps=n}applyPreset(n){const e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(n){case gs.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case gs.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case gs.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case gs.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(n,e=gn){this.edgeDetectionMaterial.depthBuffer=n,this.edgeDetectionMaterial.depthPacking=e}update(n,e,t){this.clearPass.render(n,this.renderTargetEdges),this.edgeDetectionPass.render(n,e,this.renderTargetEdges),this.weightsPass.render(n,this.renderTargetEdges,this.renderTargetWeights)}setSize(n,e){this.edgeDetectionMaterial.setSize(n,e),this.weightsMaterial.setSize(n,e),this.renderTargetEdges.setSize(n,e),this.renderTargetWeights.setSize(n,e)}dispose(){const{searchTexture:n,areaTexture:e}=this.weightsMaterial;n!==null&&e!==null&&(n.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return lc}static get areaImageDataURL(){return cc}};function rr(n,e,t){return n*(e-t)-e}function ar(n,e,t){return Math.min(Math.max((n+e)/(e-t),0),1)}var kv=`#include <common>
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
}gl_FragColor.r=ao;}`,Hv="uniform vec2 noiseScale;varying vec2 vUv;varying vec2 vUv2;void main(){vUv=position.xy*0.5+0.5;vUv2=vUv*noiseScale;gl_Position=vec4(position.xy,1.0,1.0);}",Gv=class extends dt{constructor(n){super({name:"SSAOMaterial",defines:{SAMPLES_INT:"0",INV_SAMPLES_FLOAT:"0.0",SPIRAL_TURNS:"0.0",RADIUS:"1.0",RADIUS_SQ:"1.0",DISTANCE_SCALING:"1",DEPTH_PACKING:"0"},uniforms:{depthBuffer:new le(null),normalBuffer:new le(null),normalDepthBuffer:new le(null),noiseTexture:new le(null),inverseProjectionMatrix:new le(new je),projectionMatrix:new le(new je),texelSize:new le(new Ae),cameraNearFar:new le(new Ae),distanceCutoff:new le(new Ae),proximityCutoff:new le(new Ae),noiseScale:new le(new Ae),minRadiusScale:new le(.33),intensity:new le(1),fade:new le(.01),bias:new le(0)},blending:Ct,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:kv,vertexShader:Hv}),this.copyCameraSettings(n),this.resolution=new Ae,this.r=1}get near(){return this.uniforms.cameraNearFar.value.x}get far(){return this.uniforms.cameraNearFar.value.y}set normalDepthBuffer(n){this.uniforms.normalDepthBuffer.value=n,n!==null?this.defines.NORMAL_DEPTH="1":delete this.defines.NORMAL_DEPTH,this.needsUpdate=!0}setNormalDepthBuffer(n){this.normalDepthBuffer=n}set normalBuffer(n){this.uniforms.normalBuffer.value=n}setNormalBuffer(n){this.uniforms.normalBuffer.value=n}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=gn){this.depthBuffer=n,this.depthPacking=e}set noiseTexture(n){this.uniforms.noiseTexture.value=n}setNoiseTexture(n){this.uniforms.noiseTexture.value=n}get samples(){return Number(this.defines.SAMPLES_INT)}set samples(n){this.defines.SAMPLES_INT=n.toFixed(0),this.defines.INV_SAMPLES_FLOAT=(1/n).toFixed(9),this.needsUpdate=!0}getSamples(){return this.samples}setSamples(n){this.samples=n}get rings(){return Number(this.defines.SPIRAL_TURNS)}set rings(n){this.defines.SPIRAL_TURNS=n.toFixed(1),this.needsUpdate=!0}getRings(){return this.rings}setRings(n){this.rings=n}get intensity(){return this.uniforms.intensity.value}set intensity(n){this.uniforms.intensity.value=n,this.defines.LEGACY_INTENSITY===void 0&&(this.defines.LEGACY_INTENSITY="1",this.needsUpdate=!0)}getIntensity(){return this.uniforms.intensity.value}setIntensity(n){this.uniforms.intensity.value=n}get fade(){return this.uniforms.fade.value}set fade(n){this.uniforms.fade.value=n}getFade(){return this.uniforms.fade.value}setFade(n){this.uniforms.fade.value=n}get bias(){return this.uniforms.bias.value}set bias(n){this.uniforms.bias.value=n}getBias(){return this.uniforms.bias.value}setBias(n){this.uniforms.bias.value=n}get minRadiusScale(){return this.uniforms.minRadiusScale.value}set minRadiusScale(n){this.uniforms.minRadiusScale.value=n}getMinRadiusScale(){return this.uniforms.minRadiusScale.value}setMinRadiusScale(n){this.uniforms.minRadiusScale.value=n}updateRadius(){const n=this.r*this.resolution.height;this.defines.RADIUS=n.toFixed(11),this.defines.RADIUS_SQ=(n*n).toFixed(11),this.needsUpdate=!0}get radius(){return this.r}set radius(n){this.r=Math.min(Math.max(n,1e-6),1),this.updateRadius()}getRadius(){return this.radius}setRadius(n){this.radius=n}get distanceScaling(){return!0}set distanceScaling(n){}isDistanceScalingEnabled(){return this.distanceScaling}setDistanceScalingEnabled(n){this.distanceScaling=n}get distanceThreshold(){return this.uniforms.distanceCutoff.value.x}set distanceThreshold(n){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.distanceFalloff,0),1))}get worldDistanceThreshold(){return-rr(this.distanceThreshold,this.near,this.far)}set worldDistanceThreshold(n){this.distanceThreshold=ar(-n,this.near,this.far)}get distanceFalloff(){return this.uniforms.distanceCutoff.value.y-this.distanceThreshold}set distanceFalloff(n){this.uniforms.distanceCutoff.value.y=Math.min(Math.max(this.distanceThreshold+n,0),1)}get worldDistanceFalloff(){return-rr(this.distanceFalloff,this.near,this.far)}set worldDistanceFalloff(n){this.distanceFalloff=ar(-n,this.near,this.far)}setDistanceCutoff(n,e){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}get proximityThreshold(){return this.uniforms.proximityCutoff.value.x}set proximityThreshold(n){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.proximityFalloff,0),1))}get worldProximityThreshold(){return-rr(this.proximityThreshold,this.near,this.far)}set worldProximityThreshold(n){this.proximityThreshold=ar(-n,this.near,this.far)}get proximityFalloff(){return this.uniforms.proximityCutoff.value.y-this.proximityThreshold}set proximityFalloff(n){this.uniforms.proximityCutoff.value.y=Math.min(Math.max(this.proximityThreshold+n,0),1)}get worldProximityFalloff(){return-rr(this.proximityFalloff,this.near,this.far)}set worldProximityFalloff(n){this.proximityFalloff=ar(-n,this.near,this.far)}setProximityCutoff(n,e){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNearFar.value.set(n.near,n.far),this.uniforms.projectionMatrix.value.copy(n.projectionMatrix),this.uniforms.inverseProjectionMatrix.value.copy(n.projectionMatrix).invert(),n instanceof Xt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms,i=t.noiseTexture.value;i!==null&&t.noiseScale.value.set(n/i.image.width,e/i.image.height),t.texelSize.value.set(1/n,1/e),this.resolution.set(n,e),this.updateRadius()}},Vv=`#include <packing>
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
gl_FragColor=vec4(n[index],d[index]);}`,Wv="uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}",Xv=class extends dt{constructor(){super({name:"DepthDownsamplingMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new le(null),normalBuffer:new le(null),texelSize:new le(new Ae)},blending:Ct,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Vv,vertexShader:Wv})}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=gn){this.depthBuffer=n,this.depthPacking=e}set normalBuffer(n){this.uniforms.normalBuffer.value=n,n!==null?this.defines.DOWNSAMPLE_NORMALS="1":delete this.defines.DOWNSAMPLE_NORMALS,this.needsUpdate=!0}setNormalBuffer(n){this.normalBuffer=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},Yv=class extends Ot{constructor({normalBuffer:n=null,resolutionScale:e=.5,width:t=bt.AUTO_SIZE,height:i=bt.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("DepthDownsamplingPass");const a=new Xv;a.normalBuffer=n,this.fullscreenMaterial=a,this.needsDepthTexture=!0,this.needsSwap=!1,this.renderTarget=new pt(1,1,{minFilter:yt,magFilter:yt,depthBuffer:!1,type:cn}),this.renderTarget.texture.name="DepthDownsamplingPass.Target",this.renderTarget.texture.generateMipmaps=!1;const o=this.resolution=new bt(this,s,r,e);o.addEventListener("change",c=>this.setSize(o.baseWidth,o.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}setDepthTexture(n,e=gn){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e}render(n,e,t,i,s){n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.fullscreenMaterial.setSize(n,e)}initialize(n,e,t){const i=n.getContext();if(!(i.getExtension("EXT_color_buffer_float")||i.getExtension("EXT_color_buffer_half_float")))throw new Error("Rendering to float texture is not supported.")}},Qv=`uniform lowp sampler2D aoBuffer;uniform float luminanceInfluence;uniform float intensity;
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
}`,uc=64,qv=class extends ss{constructor(n,e,{blendFunction:t=Xe.MULTIPLY,samples:i=9,rings:s=7,normalDepthBuffer:r=null,depthAwareUpsampling:a=!0,worldDistanceThreshold:o,worldDistanceFalloff:c,worldProximityThreshold:l,worldProximityFalloff:u,distanceThreshold:h=.97,distanceFalloff:f=.03,rangeThreshold:d=5e-4,rangeFalloff:g=.001,minRadiusScale:v=.1,luminanceInfluence:m=.7,radius:p=.1825,intensity:M=1,bias:x=.025,fade:A=.01,color:C=null,resolutionScale:E=1,width:w=bt.AUTO_SIZE,height:b=bt.AUTO_SIZE,resolutionX:S=w,resolutionY:_=b}={}){super("SSAOEffect",Qv,{blendFunction:t,attributes:yn.DEPTH,defines:new Map([["THRESHOLD","0.997"]]),uniforms:new Map([["aoBuffer",new le(null)],["normalDepthBuffer",new le(r)],["luminanceInfluence",new le(m)],["color",new le(null)],["intensity",new le(M)],["scale",new le(0)]])}),this.renderTarget=new pt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="AO.Target",this.uniforms.get("aoBuffer").value=this.renderTarget.texture;const D=this.resolution=new bt(this,S,_,E);D.addEventListener("change",B=>this.setSize(D.baseWidth,D.baseHeight)),this.camera=n,this.depthDownsamplingPass=new Yv({normalBuffer:e,resolutionScale:E}),this.depthDownsamplingPass.enabled=r===null,this.ssaoPass=new Ao(new Gv(n));const U=new Dv(uc,uc,Ut);U.wrapS=U.wrapT=_s;const L=this.ssaoMaterial;L.normalBuffer=e,L.noiseTexture=U,L.minRadiusScale=v,L.samples=i,L.radius=p,L.rings=s,L.fade=A,L.bias=x,L.distanceThreshold=h,L.distanceFalloff=f,L.proximityThreshold=d,L.proximityFalloff=g,o!==void 0&&(L.worldDistanceThreshold=o),c!==void 0&&(L.worldDistanceFalloff=c),l!==void 0&&(L.worldProximityThreshold=l),u!==void 0&&(L.worldProximityFalloff=u),r!==null&&(this.ssaoMaterial.normalDepthBuffer=r,this.defines.set("NORMAL_DEPTH","1")),this.depthAwareUpsampling=a,this.color=C}set mainCamera(n){this.camera=n,this.ssaoMaterial.copyCameraSettings(n)}get normalBuffer(){return this.ssaoMaterial.normalBuffer}set normalBuffer(n){this.ssaoMaterial.normalBuffer=n,this.depthDownsamplingPass.fullscreenMaterial.normalBuffer=n}getResolution(){return this.resolution}get ssaoMaterial(){return this.ssaoPass.fullscreenMaterial}getSSAOMaterial(){return this.ssaoMaterial}get samples(){return this.ssaoMaterial.samples}set samples(n){this.ssaoMaterial.samples=n}get rings(){return this.ssaoMaterial.rings}set rings(n){this.ssaoMaterial.rings=n}get radius(){return this.ssaoMaterial.radius}set radius(n){this.ssaoMaterial.radius=n}get depthAwareUpsampling(){return this.defines.has("DEPTH_AWARE_UPSAMPLING")}set depthAwareUpsampling(n){this.depthAwareUpsampling!==n&&(n?this.defines.set("DEPTH_AWARE_UPSAMPLING","1"):this.defines.delete("DEPTH_AWARE_UPSAMPLING"),this.setChanged())}isDepthAwareUpsamplingEnabled(){return this.depthAwareUpsampling}setDepthAwareUpsamplingEnabled(n){this.depthAwareUpsampling=n}get distanceScaling(){return!0}set distanceScaling(n){}get color(){return this.uniforms.get("color").value}set color(n){const e=this.uniforms,t=this.defines;n!==null?t.has("COLORIZE")?e.get("color").value.set(n):(t.set("COLORIZE","1"),e.get("color").value=new Ye(n),this.setChanged()):t.has("COLORIZE")&&(t.delete("COLORIZE"),e.get("color").value=null,this.setChanged())}get luminanceInfluence(){return this.uniforms.get("luminanceInfluence").value}set luminanceInfluence(n){this.uniforms.get("luminanceInfluence").value=n}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getColor(){return this.color}setColor(n){this.color=n}setDistanceCutoff(n,e){this.ssaoMaterial.distanceThreshold=n,this.ssaoMaterial.distanceFalloff=e}setProximityCutoff(n,e){this.ssaoMaterial.proximityThreshold=n,this.ssaoMaterial.proximityFalloff=e}setDepthTexture(n,e=gn){this.depthDownsamplingPass.setDepthTexture(n,e),this.ssaoMaterial.depthBuffer=n,this.ssaoMaterial.depthPacking=e}update(n,e,t){const i=this.renderTarget;this.depthDownsamplingPass.enabled&&this.depthDownsamplingPass.render(n),this.ssaoPass.render(n,null,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.ssaoMaterial.copyCameraSettings(this.camera),this.ssaoMaterial.setSize(i,s),this.renderTarget.setSize(i,s),this.depthDownsamplingPass.resolution.scale=t.scale,this.depthDownsamplingPass.setSize(n,e)}initialize(n,e,t){try{let i=this.uniforms.get("normalDepthBuffer").value;i===null&&(this.depthDownsamplingPass.initialize(n,e,t),i=this.depthDownsamplingPass.texture,this.uniforms.get("normalDepthBuffer").value=i,this.ssaoMaterial.normalDepthBuffer=i,this.defines.set("NORMAL_DEPTH","1"))}catch{this.depthDownsamplingPass.enabled=!1}}},Kv=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,jv=class extends dt{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new le(null),luminanceBuffer1:new le(null),minLuminance:new le(.01),deltaTime:new le(0),tau:new le(1)},extensions:{shaderTextureLOD:!0},blending:Ct,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Kv,vertexShader:ko})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},Zv=class extends Ot{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new jv,this.needsSwap=!1,this.renderTargetPrevious=new pt(1,1,{minFilter:yt,magFilter:yt,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new pu(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,s){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},Jv=`#include <tonemapping_pars_fragment>
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
}`,$v=class extends ss{constructor({blendFunction:n=Xe.SRC,adaptive:e=!1,mode:t=e?qt.REINHARD2_ADAPTIVE:qt.AGX,resolution:i=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:c=1,adaptationRate:l=1}={}){super("ToneMappingEffect",Jv,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new le(null)],["maxLuminance",new le(s)],["whitePoint",new le(r)],["middleGrey",new le(a)],["averageLuminance",new le(c)]])}),this.renderTargetLuminance=new pt(1,1,{minFilter:Sn,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new mu({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new Zv(this.luminancePass.texture,{minLuminance:o,adaptationRate:l}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;const t=_i.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case qt.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case qt.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case qt.CINEON:case qt.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case qt.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case qt.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case qt.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===qt.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){const e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===qt.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?qt.REINHARD2_ADAPTIVE:qt.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}},ex=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,tx=class extends ss{constructor({blendFunction:n,eskil:e=!1,technique:t=e?vs.ESKIL:vs.DEFAULT,offset:i=.5,darkness:s=.5}={}){super("VignetteEffect",ex,{blendFunction:n,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new le(i)],["darkness",new le(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(n){this.technique!==n&&(this.defines.set("VIGNETTE_TECHNIQUE",n.toFixed(0)),this.setChanged())}get eskil(){return this.technique===vs.ESKIL}set eskil(n){this.technique=n?vs.ESKIL:vs.DEFAULT}getTechnique(){return this.technique}setTechnique(n){this.technique=n}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}get darkness(){return this.uniforms.get("darkness").value}set darkness(n){this.uniforms.get("darkness").value=n}getDarkness(){return this.darkness}setDarkness(n){this.darkness=n}},nx=`#include <common>
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
}`,ix="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",sx=class extends dt{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:_i.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new le(null),depthBuffer:new le(null),resolution:new le(new Ae),texelSize:new le(new Ae),cameraNear:new le(.3),cameraFar:new le(1e3),aspect:new le(1),time:new le(0)},blending:Ct,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=gn){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=nx.replace($e.FRAGMENT_HEAD,n.get($e.FRAGMENT_HEAD)||"").replace($e.FRAGMENT_MAIN_UV,n.get($e.FRAGMENT_MAIN_UV)||"").replace($e.FRAGMENT_MAIN_IMAGE,n.get($e.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=ix.replace($e.VERTEX_HEAD,n.get($e.VERTEX_HEAD)||"").replace($e.VERTEX_MAIN_SUPPORT,n.get($e.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Xt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return $e}};function hc(n,e,t){for(const i of e){const s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function rx(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader();const r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&yn.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,c=t.shaderParts;let l=c.get($e.FRAGMENT_HEAD)||"",u=c.get($e.FRAGMENT_MAIN_UV)||"",h=c.get($e.FRAGMENT_MAIN_IMAGE)||"",f=c.get($e.VERTEX_HEAD)||"",d=c.get($e.VERTEX_MAIN_SUPPORT)||"";const g=new Set,v=new Set;if(a&&(u+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const M=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);d+=`	${n}MainSupport(`,d+=M?`vUv);
`:`);
`;for(const x of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const A of x[1].split(/\s*,\s*/))t.varyings.add(A),g.add(A),v.add(A);for(const x of s.matchAll(o))v.add(x[1])}for(const M of i.matchAll(o))v.add(M[1]);for(const M of e.defines.keys())v.add(M.replace(/\([\w\s,]*\)/g,""));for(const M of e.uniforms.keys())v.add(M);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((M,x)=>t.uniforms.set(n+x.charAt(0).toUpperCase()+x.slice(1),M)),e.defines.forEach((M,x)=>t.defines.set(n+x.charAt(0).toUpperCase()+x.slice(1),M));const m=new Map([["fragment",i],["vertex",s]]);hc(n,v,t.defines),hc(n,v,m),i=m.get("fragment"),s=m.get("vertex");const p=e.blendMode;if(t.blendModes.set(p.blendFunction,p),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(h+=e.inputColorSpace===nt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==sn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const M=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${n}MainImage(color0, UV, `,(t.attributes&yn.DEPTH)!==0&&M.test(i)&&(h+="depth, ",t.readDepth=!0),h+=`color1);
	`;const x=n+"BlendOpacity";t.uniforms.set(x,p.opacity),h+=`color0 = blend${p.blendFunction}(color0, color1, ${x});

	`,l+=`uniform float ${x};

`}if(l+=i+`
`,s!==null&&(f+=s+`
`),c.set($e.FRAGMENT_HEAD,l),c.set($e.FRAGMENT_MAIN_UV,u),c.set($e.FRAGMENT_MAIN_IMAGE,h),c.set($e.VERTEX_HEAD,f),c.set($e.VERTEX_MAIN_SUPPORT,d),e.extensions!==null)for(const M of e.extensions)t.extensions.add(M)}}var dc=class extends Ot{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new sx(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new I0;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===Xe.DST)n.attributes|=a.getAttributes()&yn.DEPTH;else{if((n.attributes&a.getAttributes()&yn.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);rx("e"+e++,a,n)}let t=n.shaderParts.get($e.FRAGMENT_HEAD),i=n.shaderParts.get($e.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get($e.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of n.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(n.attributes&yn.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===nt&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set($e.FRAGMENT_HEAD,t),n.shaderParts.set($e.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set($e.FRAGMENT_MAIN_UV,s);for(const[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=gn){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(const r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==vt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}},ax=class extends Ot{constructor(n,e,{renderTarget:t,resolutionScale:i=1,width:s=bt.AUTO_SIZE,height:r=bt.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new gu(n,e,new id);const c=this.renderPass;c.ignoreBackground=!0,c.skipShadowMapUpdate=!0;const l=c.getClearPass();l.overrideClearColor=new Ye(7829503),l.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new pt(1,1,{minFilter:yt,magFilter:yt}),this.renderTarget.texture.name="NormalPass.Target");const u=this.resolution=new bt(this,a,o,i);u.addEventListener("change",h=>this.setSize(u.baseWidth,u.baseHeight))}set mainScene(n){this.renderPass.mainScene=n}set mainCamera(n){this.renderPass.mainCamera=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.renderToScreen?null:this.renderTarget;this.renderPass.render(n,r,r)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}};class ox{constructor(e){this.volume=e;const t=new _r(e.data,e.sx,e.sy,e.sz);t.format=Ut,t.type=vt,t.colorSpace=sn,t.minFilter=Sn,t.magFilter=et,t.wrapS=t.wrapT=t.wrapR=An,t.generateMipmaps=!0,t.unpackAlignment=1,t.needsUpdate=!0,this.texture=t;const i=new _r(e.normals,e.sx,e.sy,e.sz);i.format=Ut,i.type=vt,i.colorSpace=sn,i.minFilter=et,i.magFilter=et,i.generateMipmaps=!1,i.wrapS=i.wrapT=i.wrapR=An,i.unpackAlignment=1,i.needsUpdate=!0,this.normalTexture=i,this.size=new N(e.sx*e.texel,e.sy*e.texel,e.sz*e.texel)}texture;normalTexture;size;upload(){this.texture.needsUpdate=!0,this.normalTexture.needsUpdate=!0}}const lx=new Nn(2,2),xu=`
  precision highp float;
  precision highp sampler3D;
  // L1 SH: Y00 = 0.282095, Y1 = 0.488603 * (y, z, x)
  float shEval(vec4 c, vec3 d) { return c.x * 0.282095 + 0.488603 * (c.y * d.y + c.z * d.z + c.w * d.x); }
  vec4 cosLobe(vec3 d) { return vec4(0.886227, 1.023328 * d.y, 1.023328 * d.z, 1.023328 * d.x); }
`,cx=xu+`
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
`,ux=xu+`
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
`;class hx{constructor(e,t,i=1){this.gl=e,this.gi=t;const s=t.volume;this.size=new N(Math.ceil(s.sx/i),Math.ceil(s.sy/i),Math.ceil(s.sz/i)),this.worldSize=t.size.clone();const r=()=>{const a=new Ih(this.size.x,this.size.y,this.size.z,{type:Tn,format:Ut,minFilter:et,magFilter:et,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});return a.texture.wrapS=a.texture.wrapT=a.texture.wrapR=An,a};for(let a=0;a<3;a++)this.seed.push(r()),this.ping.push(r()),this.pong.push(r());this.injectMat=new Tl({glslVersion:Mr,vertexShader:"in vec3 position; void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:cx,uniforms:{uDirect:{value:t.texture},uNormal:{value:null},uSrcSize:{value:new N(s.sx,s.sy,s.sz)},uDstSize:{value:this.size.clone()},uLayer:{value:0},uDecode:{value:2},uChannel:{value:0},uSkyAmbient:{value:new N(.3,.4,.6)},uTime:{value:0},uBoost:{value:8}},depthTest:!1,depthWrite:!1}),this.propMat=new Tl({glslVersion:Mr,vertexShader:"in vec3 position; void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:ux,uniforms:{uPrev:{value:null},uSeed:{value:null},uDirect:{value:t.texture},uDstSize:{value:this.size.clone()},uLayer:{value:0},uGain:{value:this.gain}},depthTest:!1,depthWrite:!1}),this.quad=new wt(lx,this.injectMat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}size;worldSize;seed=[];ping=[];pong=[];injectMat;propMat;quad;cam=new Ds(-1,1,1,-1,0,1);scene=new ns;iterations=0;gain=.58;setSources(e,t){this.injectMat.uniforms.uNormal.value=e,this.injectMat.uniforms.uDecode.value=t}setBoost(e){this.injectMat.uniforms.uBoost.value=e}setSky(e){this.injectMat.uniforms.uSkyAmbient.value.set(...e)}get textures(){return[this.ping[0].texture,this.ping[1].texture,this.ping[2].texture]}runLayers(e,t,i){this.quad.material=e;for(let s=0;s<3;s++){i(s);for(let r=0;r<this.size.z;r++)e.uniforms.uLayer.value=r,this.gl.setRenderTarget(t[s],r),this.gl.render(this.scene,this.cam)}this.gl.setRenderTarget(null)}inject(e){this.injectMat.uniforms.uTime.value=e,this.runLayers(this.injectMat,this.seed,t=>{this.injectMat.uniforms.uChannel.value=t})}step(e=1){for(let t=0;t<e;t++){this.propMat.uniforms.uGain.value=this.gain,this.runLayers(this.propMat,this.pong,s=>{this.propMat.uniforms.uPrev.value=this.ping[s].texture,this.propMat.uniforms.uSeed.value=this.seed[s].texture});const i=this.ping;this.ping=this.pong,this.pong=i,this.iterations++}}dispose(){for(const e of[...this.seed,...this.ping,...this.pong])e.dispose()}}const or=un.length,Mu=`
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
        uniform sampler3D uSh2;`,Au=`
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
`;function dx(n){return{uGi:n.uGi,uGiSize:n.uGiSize,uGiTexel:n.uGiTexel,uGiDecode:n.uGiDecode,uGiStrength:n.uGiStrength,uSkyZenith:n.uSkyZenith,uSkyHorizon:n.uSkyHorizon,uSkySunColor:n.uSkySunColor,uSunDir:n.uSunDir,uDaylight:n.uDaylight,uSh0:n.uSh0,uSh1:n.uSh1,uSh2:n.uSh2}}const Su=(n,e)=>({SC_CONES:n?4:6,SC_STEPS:n?14:28,SC_SPEC:n?0:1,SC_GI_SH:e==="sh"?1:0});function _a(n,e,t=!1,i="sh",s="full",r){const a=new Float32Array(or),o=new Float32Array(or*3),c=new Float32Array(or*3);for(const f of un)a[f.id]=f.scale,c[f.id*3]=f.albedo[0],c[f.id*3+1]=f.albedo[1],c[f.id*3+2]=f.albedo[2],f.emissive&&(o[f.id*3]=f.emissive[0],o[f.id*3+1]=f.emissive[1],o[f.id*3+2]=f.emissive[2]);const l=r?{...r,uTexLocal:{value:1},uTexOrigin:{value:new N},uFade:{value:1}}:{uAlbedo:{value:n.albedo},uNormal:{value:n.normal},uMatScale:{value:a},uMatEmissive:{value:o},uMatAlbedo:{value:c},uGi:{value:e.texture},uGiSize:{value:e.size.clone()},uGiTexel:{value:e.volume.texel},uGiDecode:{value:zo},uGiStrength:{value:1},uSkyZenith:{value:new N(.2,.36,.72)},uSkyHorizon:{value:new N(.6,.7,.82)},uSkySunColor:{value:new N(1,1,1)},uSunDir:{value:new N(0,1,0)},uTime:{value:0},uDaylight:{value:1},uSh0:{value:null},uSh1:{value:null},uSh2:{value:null},uCursor:{value:new ht(0,0,0,0)},uCursorShape:{value:0},uCursorExt:{value:new N(.5,.5,.5)},uTexLocal:{value:0},uTexOrigin:{value:new N},uFade:{value:1}},u=new Qc({color:16777215,roughness:1,metalness:0,side:En}),h=Su(t,i);return s!=="full"&&(h.SC_SPEC=0),u.defines={SC_MATERIALS:or,SC_GRASS:Rr,SC_DIRT:Dr,SC_SNOW:Ir,SC_STONE:Ts,SC_LITE:s==="full"?0:1,SC_BASIC:s==="basic"?1:0,...h},u.name="terrain-"+s,u.onBeforeCompile=f=>{Object.assign(f.uniforms,l),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
        attribute vec3 aMats;
        attribute vec3 aBary;
        attribute vec4 aFace;
        varying vec4 vFace;
        varying vec3 vWorldPos;
        varying vec3 vTexPos;
        uniform float uTexLocal;
        uniform vec3 uTexOrigin;
        varying vec3 vWorldNormal;
        flat varying vec3 vMats;
        varying vec3 vBary;`).replace("#include <begin_vertex>",`#include <begin_vertex>
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
        ${Mu}
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
        ${Au}
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
        }`)},u.onBeforeCompile=(f=>(d,g)=>{f(d,g),d.fragmentShader=d.fragmentShader.replace("#include <dithering_fragment>",`
      #include <dithering_fragment>
      // belt and braces: a NaN here becomes a black bloom blob three passes later
      if (any(isnan(gl_FragColor.rgb)) || any(isinf(gl_FragColor.rgb))) gl_FragColor.rgb = vec3(0.0);`),d.fragmentShader=d.fragmentShader.replace("#include <fog_fragment>",`
      #ifdef USE_FOG
        // aerial perspective: distance fog that brightens toward the sun
        vec3 vd = normalize(vWorldPos - cameraPosition);
        float sunAmt = pow(max(dot(vd, uSunDir), 0.0), 6.0) * uDaylight;
        vec3 fogCol = fogColor + uSkySunColor * 0.06 * sunAmt;
        float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, fogCol, fogFactor);
      #endif`)})(u.onBeforeCompile),u.customProgramCacheKey=()=>"splinecraft-terrain-v11-"+s+"-"+(t?"cheap":"full")+"-"+i,{material:u,uniforms:l}}class fx{mesh;uniforms={uSunDir:{value:new N(0,1,0)},uSunColor:{value:new N(1,1,1)},uZenith:{value:new N(.2,.36,.72)},uHorizon:{value:new N(.6,.7,.82)},uDaylight:{value:1},uTime:{value:0},uCloud:{value:.55}};constructor(){const e=new dt({uniforms:this.uniforms,side:Tt,depthWrite:!1,fog:!1,vertexShader:`
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
        }`});this.mesh=new wt(new Uo(1,32,16),e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.mesh.scale.setScalar(900)}}const Lr=n=>Math.round(n/P);function Ai(n,e,t,i){if(e<0||t<0||i<0||e>=n.nx-1||t>=n.ny-1||i>=n.nz-1)return!1;const s=n.index(e,t,i),r=n.hard[s];if(r!==0&&Nt(r)){const u=n.sub[s]===0?Fn:n.sub[s];if(cu(u)>13)return!1}const a=n.density,o=n.ny*n.nz,c=n.nz;let l=0;return a[s]>0&&l++,a[s+1]>0&&l++,a[s+c]>0&&l++,a[s+c+1]>0&&l++,a[s+o]>0&&l++,a[s+o+1]>0&&l++,a[s+o+c]>0&&l++,a[s+o+c+1]>0&&l++,l<6}function px(n,e,t,i){for(let s=t+1;s<n.ny-1;s++)if(!Ai(n,e,s,i))return!1;return!0}function mx(n,e){n.water.fill(0);const t=Lr(e),i=[],s=n.water,r=Math.min(t-1,n.ny-2);if(r<0)return 0;for(let a=0;a<n.nx-1;a++)for(let o=0;o<n.nz-1;o++)if(Ai(n,a,r,o)&&px(n,a,r,o)){const c=n.index(a,r,o);s[c]||(s[c]=1,i.push(a,r,o))}return xx(n,i,t)}function gx(n,e,t,i=!0){const s=_u(n,e,t);if(!s.plan||!i)return s.removed;const r=So(n,s.plan,s.plan.cells.length);return r?Wo(s.removed,r):s.removed}function _u(n,e,t){const i=Lr(t),s=n.water,r=Math.max(0,e.x0-1),a=Math.max(0,e.y0-1),o=Math.max(0,e.z0-1),c=Math.min(n.nx-2,e.x1),l=Math.min(n.ny-2,e.y1,i-1),u=Math.min(n.nz-2,e.z1);let h=null;const f=[],d=new Set;for(let E=r;E<=c;E++)for(let w=a;w<=l;w++)for(let b=o;b<=u;b++){const S=n.index(E,w,b),_=Ai(n,E,w,b);if(s[S]&&!_){s[S]=0,h=Wo(h,{x0:E,y0:w,z0:b,x1:E+1,y1:w+1,z1:b+1});continue}_&&!s[S]&&(E>0&&s[S-n.nz*n.ny]!==0||E<n.nx-2&&s[S+n.nz*n.ny]!==0||w>0&&s[S-n.nz]!==0||w<i-1&&s[S+n.nz]!==0||b>0&&s[S-1]!==0||b<n.nz-2&&s[S+1]!==0)&&!d.has(S)&&(d.add(S),f.push(E,w,b,0))}if(!f.length)return{removed:h,plan:null};const g=[],v=f.slice(),m=n.ny*n.nz,p=n.nz;let M=0;for(;M<v.length;){const E=v[M],w=v[M+1],b=v[M+2],S=v[M+3];M+=4;const _=n.index(E,w,b);g.push(_,w,S);const D=(U,L,B,O)=>{L>=i||s[O]||d.has(O)||Ai(n,U,L,B)&&(d.add(O),v.push(U,L,B,S+1))};E>0&&D(E-1,w,b,_-m),E<n.nx-2&&D(E+1,w,b,_+m),w>0&&D(E,w-1,b,_-p),w<i-1&&D(E,w+1,b,_+p),b>0&&D(E,w,b-1,_-1),b<n.nz-2&&D(E,w,b+1,_+1)}const x=g.length/3,A=new Int32Array(x);for(let E=0;E<x;E++)A[E]=E;A.sort((E,w)=>g[E*3+1]-g[w*3+1]||g[E*3+2]-g[w*3+2]);const C=new Int32Array(x);for(let E=0;E<x;E++)C[E]=g[A[E]*3];return{removed:h,plan:{cells:C,done:0,contacts:f.length/4,carry:0}}}function So(n,e,t){const i=Math.min(e.cells.length,e.done+Math.max(0,Math.floor(t)));if(i<=e.done)return null;let s=null;const r=n.ny*n.nz,a=n.nz;for(let o=e.done;o<i;o++){const c=e.cells[o];if(!Ai(n,Math.floor(c/r),Math.floor(c/a)%n.ny,c%n.nz))continue;n.water[c]=1;const l=Math.floor(c/r),u=Math.floor(c/a)%n.ny,h=c%n.nz;s=Wo(s,{x0:l,y0:u,z0:h,x1:l+1,y1:u+1,z1:h+1})}return e.done=i,s}function vx(n){return Math.max(36,n.contacts*30)}function Wo(n,e){return n?{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}:e}function xx(n,e,t,i){const s=n.water;let r=0;const a=n.ny*n.nz,o=n.nz;for(;e.length;){const c=e.pop(),l=e.pop(),u=e.pop(),h=n.index(u,l,c),f=(d,g,v,m)=>{s[m]||g>=t||Ai(n,d,g,v)&&(s[m]=1,r++,e.push(d,g,v))};u>0&&f(u-1,l,c,h-a),u<n.nx-2&&f(u+1,l,c,h+a),l>0&&f(u,l-1,c,h-o),l<t-1&&f(u,l+1,c,h+o),c>0&&f(u,l,c-1,h-1),c<n.nz-2&&f(u,l,c+1,h+1)}return r}const Mx=512,Ax=un.length;un.length+1;function Sx(n){const e=(t,i)=>{const s=new Po(t,n.size,n.size,n.layers);return s.format=Ut,s.type=vt,s.colorSpace=i?nt:sn,s.wrapS=s.wrapT=_s,s.minFilter=Sn,s.magFilter=et,s.generateMipmaps=!0,s.anisotropy=8,s.needsUpdate=!0,s};return{albedo:e(n.albedo,!0),normal:e(n.normal,!1),swatches:n.swatches}}const wr=16,Ss=8,_x=`
  precision highp float;
  uniform sampler2D uPrev, uMask;
  uniform vec2 uTexel, uWorld;
  uniform float uK, uDamp, uN;
  uniform vec4 uImp[${wr}];
  uniform vec4 uObs[${Ss}];
  uniform float uNObs;
  varying vec2 vUv;
  // 1 where water can move: the shore mask, minus any moving body sitting on this texel
  float open(vec2 uv, vec2 p) {
    float m = texture2D(uMask, uv).r;
    for (int i = 0; i < ${Ss}; i++) {
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
    for (int i = 0; i < ${wr}; i++) {
      if (float(i) >= uN) break;
      vec4 im = uImp[i];
      float d2 = dot(p - im.xy, p - im.xy);
      v += im.w * exp(-d2 / (im.z * im.z));
    }
    // a moving body pushes the water at its rim, in proportion to its speed
    for (int i = 0; i < ${Ss}; i++) {
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
  }`;class yx{constructor(e,t,i,s){this.worldX=e,this.worldZ=t,this.level=s;const r=Math.max(16,Math.round(e*i)),a=Math.max(16,Math.round(t*i)),o=()=>new pt(r,a,{type:Tn,format:Ut,minFilter:et,magFilter:et,depthBuffer:!1,stencilBuffer:!1});this.rts=[o(),o()],this.mask=new yr(new Uint8Array(4),1,1,xi,vt),this.mask.minFilter=et,this.mask.magFilter=et,this.mask.needsUpdate=!0,this.mat=new dt({vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:_x,uniforms:{uPrev:{value:null},uMask:{value:this.mask},uTexel:{value:new Ae(1/r,1/a)},uWorld:{value:new Ae(e,t)},uK:{value:.06},uDamp:{value:.992},uN:{value:0},uImp:{value:Array.from({length:wr},()=>new ht)},uObs:{value:Array.from({length:Ss},()=>new ht)},uNObs:{value:0}},depthTest:!1,depthWrite:!1}),this.scene.add(new wt(new Nn(2,2),this.mat))}rts;cur=0;mat;scene=new ns;cam=new Ds(-1,1,1,-1,0,1);mask;pending=[];acc=0;get texture(){return this.rts[this.cur].texture}get maskTexture(){return this.mask}get texelSize(){return this.mat.uniforms.uTexel.value}setMask(e){const t=Lr(this.level),i=Math.min(t-1,e.ny-2),s=e.nx-1,r=e.nz-1,a=new Uint8Array(s*r);if(i>=0)for(let o=0;o<r;o++)for(let c=0;c<s;c++)a[o*s+c]=e.water[e.index(c,i,o)]?255:0;this.mask.dispose(),this.mask=new yr(a,s,r,xi,vt),this.mask.minFilter=et,this.mask.magFilter=et,this.mask.needsUpdate=!0,this.mat.uniforms.uMask.value=this.mask}setObstacles(e){const t=this.mat.uniforms,i=Math.min(Ss,e.length);for(let s=0;s<i;s++)t.uObs.value[s].set(e[s][0],e[s][1],e[s][2],e[s][3]);t.uNObs.value=i}splash(e,t,i,s){this.pending.push(e,t,Math.max(.15,i),s)}step(e,t){this.acc=Math.min(this.acc+t,3/60);const i=this.mat.uniforms;let s=!0;for(;this.acc>=1/60;){this.acc-=1/60;const r=s?Math.min(wr,this.pending.length/4):0;for(let c=0;c<r;c++)i.uImp.value[c].set(this.pending[c*4],this.pending[c*4+1],this.pending[c*4+2],this.pending[c*4+3]);i.uN.value=r,i.uPrev.value=this.rts[this.cur].texture;const a=1-this.cur,o=e.getRenderTarget();e.setRenderTarget(this.rts[a]),e.render(this.scene,this.cam),e.setRenderTarget(o),this.cur=a,s=!1}s||(this.pending.length=0)}}const Ex=`
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
  }`,wx=`
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
  }`;class Tx extends Ot{constructor(e,t,i,s,r,a,o,c){super("WaterPass"),this.worldScene=e,this.cam=t,this.level=i,this.sim=new yx(a,o,c,i),this.uniforms.uWorldSize.value.set(a,o),this.uniforms.uWaveTexel.value.copy(this.sim.texelSize),this.needsDepthTexture=!0,this.needsSwap=!1,this.uniforms.uNormal.value=s,this.uniforms.uNear.value=t.near,this.uniforms.uFar.value=t.far,this.clip=new qn(new N(0,1,0),-i+.02),this.refl=r?new pt(1,1,{type:Tn,depthBuffer:!0,minFilter:et,magFilter:et}):null,this.uniforms.uReflect.value=r?1:0,this.refl&&(this.uniforms.uReflTex.value=this.refl.texture);const l=new dt({uniforms:this.uniforms,vertexShader:Ex,fragmentShader:wx,depthTest:!1,depthWrite:!1,side:Ht,transparent:!1});this.mesh=new wt(new Gt,l),this.mesh.frustumCulled=!1,this.waterScene.add(this.mesh),this.fullscreenMaterial=this.copy}mesh;uniforms={uNormal:{value:null},uSceneColor:{value:null},uSceneDepth:{value:null},uReflTex:{value:null},uReflMatrix:{value:new je},uLayer:{value:Ax},uTime:{value:0},uNear:{value:.08},uFar:{value:1200},uReflect:{value:0},uUnder:{value:0},uResolution:{value:new Ae(1,1)},uSunDir:{value:new N(0,1,0)},uSunColor:{value:new N(1,1,1)},uZenith:{value:new N(.2,.36,.72)},uHorizon:{value:new N(.6,.7,.82)},uAmbient:{value:new N(.3,.4,.6)},fogColor:{value:new Ye},fogDensity:{value:.006},uWave:{value:null},uWaveMask:{value:null},uWorldSize:{value:new Ae(1,1)},uWaveTexel:{value:new Ae(1,1)}};waterScene=new ns;copy=new Ho;refl;mirror=new Xt;clip;sim;lastTime=-1;frustum=new br;hasWater=!1;area=0;rebuild(e){const t=Lr(this.level),i=Math.min(t-1,e.ny-2),s=[],r=[],a=new Map,o=(u,h,f)=>{const d=(u*1024+f)*1024+h;let g=a.get(d);return g===void 0&&(g=s.length/3,a.set(d,g),s.push(u*P,h*P,f*P)),g};let c=0;if(i>=0){const u=e.water,h=e.nx-1,f=e.nz-1,d=e.nz,g=new Map,v=(m,p,M)=>(m*1024+M)*1024+p;for(let m=0;m<h;m++)for(let p=0;p<f;p++)for(let M=i;M>=0;M--){const x=e.index(m,M,p);if(!(!u[x]||!(M===i||!u[x+d]&&Ai(e,m,M+1,p)))){c++;for(let C=-1;C<=1;C++)for(let E=-1;E<=1;E++){const w=m+C,b=p+E;w>=0&&b>=0&&w<h&&b<f&&g.set(v(w,M,b),1)}}}for(const m of g.keys()){const p=m%1024,M=Math.floor(m/1024)%1024,x=Math.floor(m/(1024*1024)),A=o(x,p+1,M),C=o(x+1,p+1,M),E=o(x+1,p+1,M+1),w=o(x,p+1,M+1);r.push(A,C,E,A,E,w)}}const l=new Gt;l.setAttribute("position",new mn(s,3)),l.setIndex(r),l.computeBoundingBox(),l.boundingBox&&(l.boundingBox.min.y-=.5,l.boundingBox.max.y+=.5),this.mesh.geometry.dispose(),this.mesh.geometry=l,this.hasWater=s.length>0,this.needsSwap=this.hasWater,this.area=c*P*P,this.sim.setMask(e),this.uniforms.uWaveMask.value=this.sim.maskTexture}setObstacles(e){this.sim.setObstacles(e)}splash(e,t,i,s){this.sim.splash(e,t,i,s)}setUnderwater(e){this.uniforms.uUnder.value=e?1:0}dispose(){}setDepthTexture(e){this.uniforms.uSceneDepth.value=e}setSize(e,t){this.uniforms.uResolution.value.set(e,t),this.refl?.setSize(Math.max(1,Math.floor(e*.5)),Math.max(1,Math.floor(t*.5)))}render(e,t,i){if(!this.hasWater||!t||!i)return;const s=this.uniforms.uTime.value,r=this.lastTime<0?1/60:Math.min(.1,Math.max(0,s-this.lastTime));this.lastTime=s,this.sim.step(e,r),this.uniforms.uWave.value=this.sim.texture;const a=this.mesh.geometry.boundingBox;this.frustum.setFromProjectionMatrix(new je().multiplyMatrices(this.cam.projectionMatrix,this.cam.matrixWorldInverse));const o=!a||this.frustum.intersectsBox(a),c=this.uniforms;if(c.uNear.value=this.cam.near,c.uFar.value=this.cam.far,o&&this.refl&&c.uUnder.value<.5&&this.cam.position.y>this.level){this.setupMirror();const u=e.clippingPlanes,h=e.autoClear;e.clippingPlanes=[this.clip],e.autoClear=!0,e.setRenderTarget(this.refl),e.render(this.worldScene,this.mirror),e.clippingPlanes=u,e.autoClear=h}if(this.copy.inputBuffer=t.texture,e.setRenderTarget(i),e.render(this.scene,this.camera),!o)return;c.uSceneColor.value=t.texture;const l=e.autoClear;e.autoClear=!1,e.render(this.waterScene,this.cam),e.autoClear=l}setupMirror(){const e=this.cam,t=this.mirror,i=new N(0,1,0),s=new N(0,this.level,0),r=new N().setFromMatrixPosition(e.matrixWorld),a=r.clone().sub(s);a.reflect(i).negate().add(s);const o=new je().extractRotation(e.matrixWorld),c=new N(0,0,-1).applyMatrix4(o).add(r),l=s.clone().sub(c);l.reflect(i).negate().add(s),t.position.copy(a),t.up.set(0,1,0).applyMatrix4(o).reflect(i),t.lookAt(l),t.near=e.near,t.far=e.far,t.updateMatrixWorld(),t.projectionMatrix.copy(e.projectionMatrix),this.uniforms.uReflMatrix.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(t.projectionMatrix).multiply(t.matrixWorldInverse)}}const bx=`
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
  }`,Cx=`
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
  }`;class Dx{constructor(e){this.scene=e,this.material=new dt({uniforms:{uTime:{value:0}},vertexShader:bx,fragmentShader:Cx,transparent:!0,depthWrite:!1,blending:gr,side:Ht}),this.geo=new Nn(1,1),this.geo.translate(.5,.5,0)}material;meshes=new Map;geo;set(e,t){const i=this.meshes.get(e);i&&(this.scene.remove(i),i.geometry.dispose(),this.meshes.delete(e));const s=t.length/4;if(s===0)return;const r=new hd;r.index=this.geo.index,r.attributes.position=this.geo.attributes.position,r.attributes.uv=this.geo.attributes.uv,r.instanceCount=s;const a=new Float32Array(s*3),o=new Float32Array(s),c=new Float32Array(s);for(let u=0;u<s;u++)a[u*3]=t[u*4],a[u*3+1]=t[u*4+1],a[u*3+2]=t[u*4+2],c[u]=t[u*4+3],o[u]=((a[u*3]*7.31+a[u*3+2]*3.17+a[u*3+1])%1+1)%1;r.setAttribute("aOffset",new Ki(a,3)),r.setAttribute("aSeed",new Ki(o,1)),r.setAttribute("aKind",new Ki(c,1));const l=new wt(r,this.material);l.frustumCulled=!1,l.renderOrder=20,this.scene.add(l),this.meshes.set(e,l)}update(e){this.material.uniforms.uTime.value=e}get count(){let e=0;for(const t of this.meshes.values())e+=t.geometry.instanceCount;return e}}const lr=1,fc=2,cr=8,Rx=`
  uniform float uTime;
  attribute float aSeed;
  varying float vSeed;
  varying vec2 vUv2;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;
`;function pc(n,e,t,i){const s=new Qc({color:16777215,roughness:.85,metalness:0,side:Ht,alphaTest:.5}),r={...dx(e),uTime:{value:0}};return s.defines={...Su(t,i),SC_KIND:n},s.onBeforeCompile=a=>{Object.assign(a.uniforms,r),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
`+Rx).replace("#include <begin_vertex>",`
        vec3 transformed = vec3(position);
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
        ${Mu}
        uniform float uTime;
        varying float vSeed;
        varying vec2 vUv2;
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
        ${Au}`).replace("#include <map_fragment>",`
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
        if (any(isnan(gl_FragColor.rgb)) || any(isinf(gl_FragColor.rgb))) gl_FragColor.rgb = vec3(0.0);`)},s.customProgramCacheKey=()=>`splinecraft-scatter-v2-${n}-${t}-${i}`,s.__uniforms=r,s}class Ix{constructor(e,t,i,s,r=1){this.scene=e,this.density=r,this.grassMat=pc(lr,t,i,s),this.leafMat=pc(fc,t,i,s),this.bladeGeo=new Nn(.09,.55,1,3),this.bladeGeo.translate(0,.275,0),this.leafGeo=new Nn(.75,.75)}grassMat;leafMat;bladeGeo;leafGeo;meshes=new Map;dummy=new Ft;density=1;count=0;set(e,t,i=this.scene){const s=this.meshes.get(e);if(s){for(const d of s)d.parent?.remove(d),d.geometry.dispose(),this.count-=d.count;this.meshes.delete(e)}const r=t.length/cr;if(r===0)return;let a=0,o=0;for(let d=0;d<r;d++)t[d*cr+7]===lr?a++:o++;const c=d=>this.density>=1||t[d*cr+6]<this.density,l=(d,g,v,m)=>{if(g===0)return null;const p=v.clone(),M=new Zh(p,m,g),x=new Float32Array(g);let A=0;const C=new N(0,1,0),E=new N,w=new Mi;for(let b=0;b<r;b++){const S=b*cr;if(t[S+7]!==d||!c(b))continue;const _=t[S+6];if(this.dummy.position.set(t[S],t[S+1],t[S+2]),E.set(t[S+3],t[S+4],t[S+5]),d===lr){this.dummy.quaternion.setFromAxisAngle(C,_*Math.PI*2);const D=.7+_*.7;this.dummy.scale.set(D,D,D)}else{w.setFromUnitVectors(new N(0,0,1),E),this.dummy.quaternion.copy(w).multiply(new Mi().setFromAxisAngle(new N(0,0,1),_*Math.PI*2)),this.dummy.position.addScaledVector(E,.12+_*.15);const D=.75+_*.6;this.dummy.scale.set(D,D,D)}this.dummy.updateMatrix(),M.setMatrixAt(A,this.dummy.matrix),x[A]=_,A++}return M.count=A,p.setAttribute("aSeed",new Ki(x,1)),M.receiveShadow=!0,M.castShadow=!1,M.frustumCulled=!1,i.add(M),this.count+=A,M},u=[],h=l(lr,a,this.bladeGeo,this.grassMat);h&&u.push(h);const f=l(fc,o,this.leafGeo,this.leafMat);f&&u.push(f),u.length&&this.meshes.set(e,u)}update(e){for(const t of[this.grassMat,this.leafMat])t.__uniforms.uTime.value=e}setVisible(e){for(const t of this.meshes.values())for(const i of t)i.visible=e}}const Px=`
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
  }`,Lx=`
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
  }`;class Bx{constructor(e,t){this.scene=e,this.material=new dt({uniforms:{uTime:{value:0},uPixelRatio:{value:t},uNight:{value:0}},vertexShader:Px,fragmentShader:Lx,transparent:!0,depthWrite:!1,blending:gr})}material;clouds=new Map;count=0;set(e,t,i,s,r){const a=this.clouds.get(e);a&&(this.scene.remove(a),a.geometry.dispose(),this.count-=a.geometry.getAttribute("aOrigin").count,this.clouds.delete(e));const o=14;let c=0;for(let x=0;x<t.length/4;x++)t[x*4+3]<.5&&c++;const l=c*o,u=i.length/s;let h=0;for(let x=0;x<u;x++)i[x*s+6]<r&&h++;const f=l+h;if(f===0)return;const d=new Float32Array(f*3),g=new Float32Array(f),v=new Float32Array(f);let m=0;for(let x=0;x<t.length/4;x++)for(let A=0;A<o&&!(t[x*4+3]>=.5);A++)d[m*3]=t[x*4],d[m*3+1]=t[x*4+1]+.1,d[m*3+2]=t[x*4+2],g[m]=(x*.618+A*.137)%1,v[m]=0,m++;for(let x=0;x<u;x++){const A=x*s;i[A+6]>=r||(d[m*3]=i[A],d[m*3+1]=i[A+1]+.5,d[m*3+2]=i[A+2],g[m]=i[A+6]/r,v[m]=1,m++)}const p=new Gt;p.setAttribute("position",new lt(new Float32Array(f*3),3)),p.setAttribute("aOrigin",new lt(d,3)),p.setAttribute("aSeed",new lt(g,1)),p.setAttribute("aKind",new lt(v,1));const M=new nd(p,this.material);M.frustumCulled=!1,M.renderOrder=21,this.scene.add(M),this.clouds.set(e,M),this.count+=f}update(e,t){this.material.uniforms.uTime.value=e,this.material.uniforms.uNight.value=1-t}}const Ux=`
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
  }`;class Fx extends Ot{constructor(e,t,i,s=16){super("VolumetricPass"),this.cam=e,this.sun=t,this.needsDepthTexture=!0,this.needsSwap=!1,this.target=new pt(1,1,{type:Tn,depthBuffer:!1,minFilter:et,magFilter:et}),this.mat=new dt({vertexShader:"varying vec2 vUv; void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:Ux,uniforms:{depthBuffer:{value:null},shadowMap:{value:null},shadowMatrix:{value:new je},invProjection:{value:new je},invView:{value:new je},cameraPos:{value:new N},uSunDir:i.uSunDir,uSunColor:i.uSkySunColor,uSkyAmbient:{value:new N(.3,.4,.6)},uDaylight:i.uDaylight,uSeaLevel:{value:22},uDensity:{value:.0085},uLocal:{value:.5},uTime:{value:0},uGiSize:i.uGiSize,uSh0:i.uSh0,uSh1:i.uSh1,uSh2:i.uSh2,uSteps:{value:s}},depthTest:!1,depthWrite:!1}),this.fullscreenMaterial=this.mat}target;mat;scale=.5;get uniforms(){return this.mat.uniforms}setDepthTexture(e){this.mat.uniforms.depthBuffer.value=e}setSize(e,t){this.target.setSize(Math.max(1,Math.floor(e*this.scale)),Math.max(1,Math.floor(t*this.scale)))}render(e){const t=this.mat.uniforms;t.shadowMap.value=this.sun.shadow.map?.texture??null,t.shadowMatrix.value.copy(this.sun.shadow.matrix),t.invProjection.value.copy(this.cam.projectionMatrixInverse),t.invView.value.copy(this.cam.matrixWorld),t.cameraPos.value.copy(this.cam.position),t.shadowMap.value&&(e.setRenderTarget(this.target),e.render(this.scene,this.camera))}}class Nx extends ss{constructor(e){super("VolumetricEffect",`
      uniform sampler2D volTex;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 v = texture2D(volTex, uv);
        outputColor = vec4(inputColor.rgb * v.a + v.rgb, inputColor.a);
      }`,{blendFunction:Xe.NORMAL,uniforms:new Map([["volTex",new le(e.texture)]])})}}class Ox{gl;scene=new ns;camera;sun;ambient;sky;water;flames;scatter;particles;volumetric=null;textures;giTex;terrain;uniforms;variant="full";shaderError="";onShaderError=null;opts;fog;chunks=new Map;worldCenter;worldRadius;triangles=0;underwater=!1;composer=null;volumetricSteps=16;propagation=null;giDirty=!1;postTier=1;seaLevel;constructor(e,t,i,s,r){this.seaLevel=s,this.opts=r,this.variant=r.variant??"full",this.gl=new jg({canvas:e,antialias:r.antialias,powerPreference:"high-performance"}),this.gl.toneMapping=Bn,this.gl.toneMappingExposure=.9,this.gl.outputColorSpace=nt,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=Tc,this.gl.setPixelRatio(Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.camera=new Xt(72,1,.08,1200),this.worldCenter=new N(t.sizeX/2,t.sizeY/2,t.sizeZ/2),this.worldRadius=Math.hypot(t.sizeX,t.sizeY,t.sizeZ)/2,this.fog=new Lo(10466248,.0032),this.scene.fog=this.fog,this.textures=r.textures,this.giTex=new ox(i);const a=_a(this.textures,this.giTex,r.cheapGi,r.giMode,this.variant);this.terrain=a.material,this.uniforms=a.uniforms,this.gl.debug.onShaderError=(l,u,h,f)=>{const d=l.getProgramInfoLog(u)??"",g=l.getShaderInfoLog(f)??"",v=l.getShaderInfoLog(h)??"",m=(g||v||d).split(`
`).find(M=>/error/i.test(M))??(g||v||d).slice(0,160),p=this.gl.info.programs?.length??0;this.shaderError=`shader error (${p} programs): ${m.slice(0,200)}`,console.error("[splinecraft] shader error",{vsLog:v,fsLog:g,log:d}),this.onShaderError?.(this.shaderError),/terrain/.test(this.terrain.name)&&this.variant!=="basic"&&this.stepDownVariant()},this.sun=new cd(16777215,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(r.shadowMapSize,r.shadowMapSize);const o=this.worldRadius*.85,c=this.sun.shadow.camera;if(c.left=-o,c.right=o,c.top=o,c.bottom=-o,c.near=1,c.far=this.worldRadius*4,c.updateProjectionMatrix(),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.06,this.sun.shadow.radius=2,this.sun.target.position.copy(this.worldCenter),this.scene.add(this.sun,this.sun.target),this.ambient=new ud(16777215,.02),this.scene.add(this.ambient),this.sky=new fx,this.scene.add(this.sky.mesh),this.water=new Tx(this.scene,this.camera,s,this.textures.normal,r.reflection,t.sizeX,t.sizeZ,r.reflection?4:2),this.gl.shadowMap.autoUpdate=!1,this.flames=new Dx(this.scene),this.scatter=new Ix(this.scene,this.uniforms,r.cheapGi,r.giMode,r.scatterDensity),this.particles=new Bx(this.scene,Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.volumetricSteps=r.volumetricSteps,r.giMode==="sh"){const l=new hx(this.gl,this.giTex,r.giDiv);l.setSources(this.giTex.normalTexture,zo),l.setBoost(fi);const[u,h,f]=l.textures;this.uniforms.uSh0.value=u,this.uniforms.uSh1.value=h,this.uniforms.uSh2.value=f,this.propagation=l}this.setPost(r.post),this.resize()}giUploaded(){this.giDirty=!0}stepDownVariant(){const e=this.variant==="full"?"lite":"basic";this.variant=e;const t=_a(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,e);for(const s of Object.keys(t.uniforms))t.uniforms[s]=this.uniforms[s];const i=this.terrain;this.terrain=t.material;for(const s of this.chunks.values())s.material=this.terrain;i.dispose(),this.onShaderError?.(`terrain material stepped down to '${e}'`)}setPost(e){this.postTier=e,this.composer?.dispose();const t=new R0(this.gl,{frameBufferType:Tn});t.addPass(new gu(this.scene,this.camera)),t.addPass(this.water);const i=[];if(this.volumetric=null,e>=2&&this.volumetricSteps>0){const s=new Fx(this.camera,this.sun,this.uniforms,this.volumetricSteps);s.uniforms.uSeaLevel.value=this.seaLevel,t.addPass(s),i.push(new Nx(s.target)),this.volumetric=s}if(e>=2){const s=new ax(this.scene,this.camera),r=s.render.bind(s);s.render=(...a)=>{const o=this.sky.mesh.visible;this.sky.mesh.visible=!1;const c=this.flames.material.visible;this.flames.material.visible=!1;const l=this.particles.material.visible;this.particles.material.visible=!1,r(...a),this.sky.mesh.visible=o,this.flames.material.visible=c,this.particles.material.visible=l},t.addPass(s),i.push(new qv(this.camera,s.texture,{samples:12,rings:5,radius:.04,intensity:1.6,luminanceInfluence:.6,resolutionScale:.5,bias:.02,distanceThreshold:.6,distanceFalloff:.1}))}e>=1&&(i.push(new bv({luminanceThreshold:.85,luminanceSmoothing:.3,intensity:.55,mipmapBlur:!0,radius:.7})),i.push(new tx({darkness:.32,offset:.28}))),i.push(new $v({mode:qt.ACES_FILMIC})),t.addPass(new dc(this.camera,...i)),e>=2&&t.addPass(new dc(this.camera,new zv)),this.composer=t,this.resize()}resize(){const e=window.innerWidth,t=window.innerHeight;this.gl.setSize(e,t,!1),this.composer?.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setSun(e){const t=new N(...e.dir);this.sun.position.copy(this.worldCenter).addScaledVector(t,this.worldRadius*2);const i=Math.max(e.sun[0],e.sun[1],e.sun[2],1e-4);this.sun.color.setRGB(e.sun[0]/i,e.sun[1]/i,e.sun[2]/i),this.sun.intensity=i,this.sun.visible=i>.01;const s=this.uniforms;s.uSunDir.value.copy(t),s.uSkyZenith.value.set(...e.zenith),s.uSkyHorizon.value.set(...e.horizon),s.uSkySunColor.value.set(...e.sun),s.uDaylight.value=e.daylight,this.propagation?.setSky(e.ambient),this.volumetric&&this.volumetric.uniforms.uSkyAmbient.value.set(...e.ambient);const r=this.sky.uniforms;r.uSunDir.value.copy(t),r.uSunColor.value.set(e.sun[0]/3,e.sun[1]/3,e.sun[2]/3),r.uZenith.value.set(...e.zenith),r.uHorizon.value.set(...e.horizon),r.uDaylight.value=e.daylight;const a=this.water.uniforms;a.uSunDir.value.copy(t),a.uSunColor.value.set(...e.sun),a.uZenith.value.set(...e.zenith),a.uHorizon.value.set(...e.horizon),a.uAmbient.value.set(...e.ambient),this.ambient.intensity=.015+.02*e.daylight,this.underwater||(this.fog.color.setRGB(e.horizon[0],e.horizon[1],e.horizon[2]),this.fog.density=.0032),this.water.uniforms.fogColor.value.copy(this.fog.color),this.water.uniforms.fogDensity.value=this.fog.density}setUnderwater(e,t){this.underwater=e,e?(this.fog.color.setRGB(.03*(.3+t.daylight),.12*(.3+t.daylight),.16*(.3+t.daylight)),this.fog.density=.06):(this.fog.color.setRGB(t.horizon[0],t.horizon[1],t.horizon[2]),this.fog.density=.0032),this.water.uniforms.fogColor.value.copy(this.fog.color),this.water.uniforms.fogDensity.value=this.fog.density,this.water.setUnderwater(e)}setChunk(e,t,i,s){const r=nn(e,t,i),a=this.chunks.get(r);if(a&&(this.triangles-=a.geometry.getAttribute("position").count/3,this.scene.remove(a),a.geometry.dispose(),this.chunks.delete(r)),this.flames.set(r,s.emitters),this.scatter.set(r,s.scatter),this.particles.set(r,s.emitters,s.scatter,8,.012),s.vertexCount===0)return;const o=new Gt;o.setAttribute("position",new lt(s.positions,3)),o.setAttribute("normal",new lt(s.normals,3)),o.setAttribute("aMats",new lt(s.mats,3,!1)),o.setAttribute("aBary",new lt(s.bary,3)),o.setAttribute("aFace",new lt(s.face,4));const c=Te*P;o.boundingSphere=new Ei(new N((e+.5)*c,(t+.5)*c,(i+.5)*c),c*.9);const l=new wt(o,this.terrain);l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l),this.chunks.set(r,l),this.triangles+=s.vertexCount/3}fragments=new Map;setFragment(e,t,i,s,r,a){if(this.removeFragment(e),t.vertexCount===0)return;const o=new Gt;o.setAttribute("position",new lt(t.positions,3)),o.setAttribute("normal",new lt(t.normals,3)),o.setAttribute("aMats",new lt(t.mats,3,!1)),o.setAttribute("aBary",new lt(t.bary,3)),o.setAttribute("aFace",new lt(t.face,4)),o.computeBoundingSphere();const c=_a(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);c.uniforms.uTexLocal.value=1,c.uniforms.uTexOrigin.value.set(a[0],a[1],a[2]);const l=new wt(o,c.material);l.castShadow=!0,l.receiveShadow=!0;const u=new Xi;u.userData.body=c;const h=new Xi;h.position.set(-i[0],-i[1],-i[2]),h.add(l),u.add(h),u.position.set(s[0],s[1],s[2]),u.quaternion.set(r[0],r[1],r[2],r[3]),this.scene.add(u),this.fragments.set(e,u),this.scatter.set(-e,t.scatter,h)}moveFragment(e,t,i){const s=this.fragments.get(e);s&&(s.position.set(t[0],t[1],t[2]),s.quaternion.set(i[0],i[1],i[2],i[3]))}fadeFragment(e,t){const i=this.fragments.get(e);if(!i)return;const s=i.userData.body;s.uniforms.uFade.value=Math.max(0,Math.min(1,t)),s.material.polygonOffset=t<1,s.material.polygonOffsetFactor=-1,s.material.polygonOffsetUnits=-2}removeFragment(e){const t=this.fragments.get(e);t&&(this.scatter.set(-e,new Float32Array(0)),this.scene.remove(t),t.traverse(i=>{i instanceof wt&&i.geometry.dispose()}),t.userData.body.material.dispose(),this.fragments.delete(e))}get fallingCount(){return this.fragments.size}setCursor(e,t,i,s,r){this.uniforms.uCursor.value.set(e,t,i,s),this.uniforms.uCursorShape.value=r?1:0,r&&this.uniforms.uCursorExt.value.set(r[0],r[1],r[2])}render(e){if(this.uniforms.uTime.value=e,this.water.uniforms.uTime.value=e,this.flames.update(e),this.scatter.update(e),this.particles.update(e,this.uniforms.uDaylight.value),this.sky.uniforms.uTime.value=e,this.volumetric&&(this.volumetric.uniforms.uTime.value=e),this.sky.mesh.position.copy(this.camera.position),this.propagation){this.propagation.inject(e),this.giDirty?(this.giDirty=!1,this.propagation.step(this.propagation.iterations===0?12:2)):this.propagation.step(1);const[t,i,s]=this.propagation.textures;this.uniforms.uSh0.value=t,this.uniforms.uSh1.value=i,this.uniforms.uSh2.value=s}this.gl.shadowMap.needsUpdate=!0,this.composer?this.composer.render():this.gl.render(this.scene,this.camera)}get chunkCount(){return this.chunks.size}}class zx{workers=[];idle=[];queue=[];inflight=new Map;nextId=1;constructor(e){for(let t=0;t<e;t++){const i=new Worker(new URL(""+new URL("mesh.worker-CjVASJy3.js",import.meta.url).href,import.meta.url),{type:"module"});i.onmessage=s=>{const r=this.inflight.get(i);this.inflight.delete(i),this.idle.push(i),r?.resolve(s.data),this.pump()},i.onerror=s=>console.error("worker error",s),this.workers.push(i),this.idle.push(i)}}get size(){return this.workers.length}get queued(){return this.queue.length+this.inflight.size}submit(e,t){const i={...e,kind:"mesh",id:this.nextId++};return this.enqueue(i,[i.density.buffer,i.material.buffer,i.hard.buffer,i.sub.buffer],t)}gen(e,t,i,s,r){return this.enqueue({kind:"gen",id:this.nextId++,cx:e,cy:t,cz:i,cfg:s},[],r)}frag(e,t,i,s,r,a){return this.enqueue({kind:"frag",id:this.nextId++,nx:e,ny:t,nz:i,density:s,material:r,scatter:a},[s.buffer,r.buffer],-2)}textures(e){return this.enqueue({kind:"textures",id:this.nextId++,size:e},[],-1)}enqueue(e,t,i){return new Promise(s=>{this.queue.push({job:e,transfer:t,priority:i,resolve:s}),this.pump()})}reprioritize(e){for(const t of this.queue)t.job.kind==="mesh"&&(t.priority=e(t.job))}pump(){for(;this.idle.length&&this.queue.length;){let e=0;for(let s=1;s<this.queue.length;s++)this.queue[s].priority<this.queue[e].priority&&(e=s);const t=this.queue.splice(e,1)[0],i=this.idle.pop();this.inflight.set(i,t),i.postMessage(t.job,t.transfer)}}}class kx{constructor(e){this.canvas=e,window.addEventListener("keydown",t=>{t.repeat||(this.keys.add(t.code),this.pressed.add(t.code),["Space","Tab","KeyQ"].includes(t.code)&&this.locked&&t.preventDefault())}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseDown=[!1,!1,!1]}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===e,this.locked||(this.mouseDown=[!1,!1,!1])}),e.addEventListener("mousemove",t=>{if(!this.locked)return;this.yaw-=t.movementX*this.sens,this.pitch-=t.movementY*this.sens;const i=Math.PI/2-.01;this.pitch=Math.max(-i,Math.min(i,this.pitch))}),e.addEventListener("mousedown",t=>{this.locked&&(t.preventDefault(),t.button<3&&(this.mouseDown[t.button]=!0,this.mouseClick[t.button]=!0))}),window.addEventListener("mouseup",t=>{t.button<3&&(this.mouseDown[t.button]=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("wheel",t=>{this.locked&&(t.preventDefault(),this.wheel+=Math.sign(t.deltaY))},{passive:!1})}keys=new Set;pressed=new Set;yaw=0;pitch=0;wheel=0;mouseDown=[!1,!1,!1];mouseClick=[!1,!1,!1];locked=!1;sens=.0022;requestLock(){this.canvas.requestPointerLock?.()}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}flush(){this.pressed.clear(),this.mouseClick=[!1,!1,!1],this.wheel=0}}class Hx{root;hotbar;slots=[];status;clock;debug;toast;toastTimer=0;overlay;loading;loadingBar;loadingText;lastStatus="";lastDebug="";onNewWorld=null;onResetEdits=null;onLoadWorld=null;onRenameWorld=null;onDeleteWorld=null;onQuality=null;onFoliage=null;onFall=null;onResume=null;onSelectSlot=null;onTime=null;onTimeFlow=null;onCopyLink=null;onMenu=null;errorEl=null;timeSliders=[];dragging=!1;constructor(){this.root=document.getElementById("hud"),this.hotbar=document.getElementById("hotbar"),this.status=document.getElementById("status"),this.clock=document.getElementById("clock"),this.debug=document.getElementById("debug"),this.toast=document.getElementById("toast"),this.overlay=document.getElementById("overlay"),this.loading=document.getElementById("loading"),this.loadingBar=document.getElementById("loading-bar"),this.loadingText=document.getElementById("loading-text"),document.getElementById("btn-play").addEventListener("click",()=>this.onResume?.()),document.getElementById("btn-new").addEventListener("click",()=>{const e=document.getElementById("seed-input").value.trim(),t=e===""?Math.floor(Math.random()*1e9):yu(e),i=document.getElementById("size-select");this.onNewWorld?.(t,i?Number(i.value):8)}),document.getElementById("btn-reset").addEventListener("click",()=>{confirm("Erase every edit in this world? The terrain regenerates from its seed.")&&this.onResetEdits?.()});for(const e of["time-slider","time-slider-menu"]){const t=document.getElementById(e);t&&(this.timeSliders.push(t),t.addEventListener("input",()=>{this.dragging=!0,this.onTime?.(Number(t.value))}),t.addEventListener("change",()=>{this.dragging=!1}))}document.getElementById("time-flow")?.addEventListener("click",()=>this.onTimeFlow?.()),document.getElementById("btn-copy")?.addEventListener("click",()=>this.onCopyLink?.()),document.getElementById("gear")?.addEventListener("click",()=>this.onMenu?.()),this.errorEl=document.getElementById("error-strip"),this.errorEl?.addEventListener("click",()=>{this.errorEl&&(this.errorEl.hidden=!0)}),document.getElementById("fall-select")?.addEventListener("change",e=>{this.onFall?.(Number(e.target.value))}),document.getElementById("foliage-select")?.addEventListener("change",e=>{this.onFoliage?.(Number(e.target.value))}),document.getElementById("quality-select").addEventListener("change",e=>{this.onQuality?.(e.target.value)})}setLoading(e,t){this.loading.hidden=!1,this.loadingBar.style.width=`${Math.round(e*100)}%`,this.loadingText.textContent=t}hideLoading(){this.loading.hidden=!0}showOverlay(e,t,i=1,s=7){const r=document.getElementById("fall-select");r&&(r.value=String(s),r.value!==String(s)&&(r.value="7")),this.overlay.hidden=!1,this.root.classList.add("dim"),document.getElementById("seed-label").textContent=String(e),document.getElementById("quality-select").value=t;const a=document.getElementById("foliage-select");a&&(a.value=String(i),a.value!==String(i)&&(a.value="1"))}hideOverlay(){this.overlay.hidden=!0,this.root.classList.remove("dim")}renderWorlds(e,t){const i=document.getElementById("worlds");if(!i)return;i.innerHTML="";const s=[...e].sort((r,a)=>r.seed===t?-1:a.seed===t?1:a.updatedAt-r.updatedAt);for(const r of s){const a=document.createElement("div");a.className="world"+(r.seed===t?" current":"");const o=document.createElement("button");o.className="wname",o.textContent=r.name,o.title=r.seed===t?"this world":"load this world",o.addEventListener("click",()=>this.onLoadWorld?.(r.seed));const c=document.createElement("span");c.className="wmeta",c.textContent=`seed ${r.seed} · ${(r.chunks??8)*16} m${r.seed===t?" · playing":r.updatedAt?" · "+Vx(r.updatedAt):""}`;const l=document.createElement("button");l.className="wbtn",l.textContent="✎",l.title="rename",l.addEventListener("click",()=>{const h=prompt("World name",r.name);h!==null&&this.onRenameWorld?.(r.seed,h)});const u=document.createElement("button");u.className="wbtn",u.textContent="✕",u.title="delete this world and its edits",u.addEventListener("click",()=>{confirm(`Delete "${r.name}" and every edit in it?`)&&this.onDeleteWorld?.(r.seed)}),a.append(o,c,l,u),i.appendChild(a)}if(!s.length){const r=document.createElement("div");r.className="wmeta",r.textContent="no saved worlds yet",i.appendChild(r)}}get overlayVisible(){return!this.overlay.hidden}buildHotbar(e){this.hotbar.innerHTML="",this.slots=[],Vi.forEach((t,i)=>{const s=document.createElement("div");s.className="slot";const r=document.createElement("canvas");r.width=16,r.height=16;const a=r.getContext("2d"),o=a.createImageData(16,16),c=e.swatches[t.id];for(let h=0;h<256;h++)o.data[h*4]=c[h*3],o.data[h*4+1]=c[h*3+1],o.data[h*4+2]=c[h*3+2],o.data[h*4+3]=255;a.putImageData(o,0,0);const l=document.createElement("span");l.className="key",l.textContent=Gx[i]??"";const u=document.createElement("span");u.className="name",u.textContent=t.name,s.append(r,l,u),s.addEventListener("pointerdown",h=>{h.preventDefault(),this.onSelectSlot?.(i)}),this.hotbar.appendChild(s),this.slots.push(s)})}setSelected(e){this.slots.forEach((t,i)=>t.classList.toggle("sel",i===e))}setStatus(e){e!==this.lastStatus&&(this.status.textContent=e,this.lastStatus=e)}setClock(e,t){this.clock.textContent=e;const i=document.getElementById("time-label");if(i&&(i.textContent=e),t!==void 0&&!this.dragging)for(const s of this.timeSliders)s.value=t.toFixed(2)}setDebug(e){e!==this.lastDebug&&(this.debug.textContent=e,this.lastDebug=e)}showError(e){this.errorEl&&(this.errorEl.textContent=e,this.errorEl.hidden=!1)}say(e,t=1800){this.toast.textContent=e,this.toast.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toast.classList.remove("show"),t)}}const Gx=["1","2","3","4","5","6","7","8","9","0","-","=","[","]","\\"],mc=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","BracketLeft","BracketRight","Backslash"];function yu(n){if(/^\d+$/.test(n))return Number(n)>>>0;let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Vx(n){const e=(Date.now()-n)/1e3;return e<90?"just now":e<5400?`${Math.round(e/60)} min ago`:e<172800?`${Math.round(e/3600)} h ago`:`${Math.round(e/86400)} d ago`}class Wx{constructor(e){if(this.layer=e,this.stickEl=document.getElementById("stick"),this.thumbEl=document.getElementById("stick-thumb"),this.enabled=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,!this.enabled)return;document.body.classList.add("touch"),e.addEventListener("pointerdown",s=>{s.target.closest("button, .slot")||(s.preventDefault(),e.setPointerCapture(s.pointerId),s.clientX<window.innerWidth*.45&&this.stickId<0?(this.stickId=s.pointerId,this.stickOrigin=[s.clientX,s.clientY],this.stickEl.style.left=`${s.clientX-60}px`,this.stickEl.style.top=`${s.clientY-60}px`,this.stickEl.classList.add("active"),this.thumbEl.style.transform="translate(0,0)"):this.lookId<0&&(this.lookId=s.pointerId,this.lookLast=[s.clientX,s.clientY]))}),e.addEventListener("pointermove",s=>{if(s.pointerId===this.stickId){const r=s.clientX-this.stickOrigin[0],a=s.clientY-this.stickOrigin[1],o=50,c=Math.hypot(r,a),l=c>o?o/c:1;this.moveX=r*l/o,this.moveY=-(a*l)/o,this.thumbEl.style.transform=`translate(${r*l}px, ${a*l}px)`}else s.pointerId===this.lookId&&(this.lookDX+=s.clientX-this.lookLast[0],this.lookDY+=s.clientY-this.lookLast[1],this.lookLast=[s.clientX,s.clientY])});const t=s=>{s.pointerId===this.stickId?(this.stickId=-1,this.moveX=0,this.moveY=0,this.stickEl.classList.remove("active")):s.pointerId===this.lookId&&(this.lookId=-1)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t);const i=(s,r)=>{const a=document.getElementById(s);a.addEventListener("pointerdown",c=>{c.preventDefault(),a.setPointerCapture(c.pointerId),r(!0),a.classList.add("down")});const o=()=>{r(!1),a.classList.remove("down")};a.addEventListener("pointerup",o),a.addEventListener("pointercancel",o)};i("tb-jump",s=>this.jump=s),i("tb-duck",s=>this.duck=s),i("tb-dig",s=>this.dig=s),i("tb-add",s=>this.add=s),i("tb-smooth",s=>this.smooth=s),i("tb-paint",s=>this.paint=s);for(const s of["tb-fly","tb-size-down","tb-size-up","tb-shape","tb-snap","tb-menu","tb-undo"])document.getElementById(s)?.addEventListener("pointerdown",a=>{a.preventDefault(),this.taps.add(s)})}enabled=!1;moveX=0;moveY=0;lookDX=0;lookDY=0;jump=!1;dig=!1;add=!1;smooth=!1;paint=!1;duck=!1;taps=new Set;stickId=-1;lookId=-1;stickOrigin=[0,0];lookLast=[0,0];stickEl;thumbEl;tapped(e){return this.taps.has(e)}get heldOp(){return this.add?"add":this.smooth?"smooth":this.paint?"paint":null}setFly(e){const t=document.getElementById("tb-duck");t&&(t.textContent=e?"down":"duck");const i=document.getElementById("tb-jump");i&&(i.textContent=e?"up":"jump");const s=document.getElementById("tb-fly");s&&(s.textContent=e?"walk":"fly")}flush(){this.lookDX=0,this.lookDY=0,this.taps.clear()}}const Br="splinecraft.v1.";function Xx(n){try{const e=localStorage.getItem(Br+"world."+n);return e?o0(e):[]}catch{return[]}}function gc(n){try{localStorage.removeItem(Br+"world."+n)}catch{}}function Eu(){try{const n=localStorage.getItem(Br+"settings");return n?JSON.parse(n):{}}catch{return{}}}function Wi(n){try{localStorage.setItem(Br+"settings",JSON.stringify({...Eu(),...n}))}catch{}}const wu=4096;function ya(n,e,t,i){const s=Te+1,r=new Int16Array(s*s*s),a=new Uint8Array(s*s*s),o=new Uint8Array(s*s*s),c=new Uint32Array(s*s*s),l=new Uint8Array(s*s*s);let u=!1,h=!1,f=0;for(let d=0;d<s;d++)for(let g=0;g<s;g++)for(let v=0;v<s;v++,f++){const m=e*Te+d,p=t*Te+g,M=i*Te+v;if(!n.inBounds(m,p,M))continue;const x=n.index(m,p,M);r[f]=Math.round(Math.max(-ct,Math.min(ct,n.density[x]))*wu),a[f]=n.material[x],o[f]=n.hard[x],c[f]=n.sub[x],c[f]!==0&&(u=!0),l[f]=n.water[x],l[f]!==0&&(h=!0)}return{cx:e,cy:t,cz:i,n:s,density:r,material:a,hard:o,sub:u?c:null,water:h?l:null}}function vc(n,e){const t=e.n;let i=0;for(let s=0;s<t;s++)for(let r=0;r<t;r++)for(let a=0;a<t;a++,i++){const o=e.cx*Te+s,c=e.cy*Te+r,l=e.cz*Te+a;if(!n.inBounds(o,c,l))continue;const u=n.index(o,c,l);n.density[u]=e.density[i]/wu,n.material[u]=e.material[i],n.hard[u]=e.hard[i],n.sub[u]=e.sub?e.sub[i]:0,e.water!==void 0&&(n.water[u]=e.water?e.water[i]:0)}}function Gi(n,e,t,i){const s=[],r=o=>Math.max(0,Math.floor((o-1)/Te)),a=(o,c)=>Math.min(c-1,Math.floor(o/Te));for(let o=r(n.x0);o<=a(n.x1,e);o++)for(let c=r(n.y0);c<=a(n.y1,t);c++)for(let l=r(n.z0);l<=a(n.z1,i);l++)s.push([o,c,l]);return s}const Yx="splinecraft",Jn="chunks",jt="worlds",Si=n=>String(n);function wi(){return new Promise(n=>{try{const e=indexedDB.open(Yx,2);e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(Jn)||t.createObjectStore(Jn),t.objectStoreNames.contains(jt)||t.createObjectStore(jt,{keyPath:"id"})},e.onsuccess=()=>n(e.result),e.onerror=()=>n(null),e.onblocked=()=>n(null)}catch{n(null)}})}const Qx=(n,e,t,i)=>`${n}/${e},${t},${i}`,Tu=n=>IDBKeyRange.bound(`${n}/`,`${n}/￿`);async function qx(n){const e=await wi();return e?new Promise(t=>{const i=[],s=e.transaction(Jn,"readonly"),r=s.objectStore(Jn).openCursor(Tu(Si(n)));r.onsuccess=()=>{const a=r.result;if(!a){t(i);return}const o=a.value;o&&o.density&&o.material&&o.hard&&i.push(o),a.continue()},r.onerror=()=>t(i),s.onerror=()=>t(i)}):[]}async function xc(n,e){const t=await wi();t&&await new Promise(i=>{const s=t.transaction([Jn,jt],"readwrite"),r=s.objectStore(Jn),a=Si(n);for(const l of e)r.put(l,Qx(a,l.cx,l.cy,l.cz));const o=s.objectStore(jt),c=o.get(a);c.onsuccess=()=>{const l=c.result??{id:a,name:Xo(n),seed:n,createdAt:Date.now(),updatedAt:0,edited:0};o.put({...l,updatedAt:Date.now(),edited:(l.edited??0)+e.length})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}const Xo=n=>`World ${n}`;async function Kx(){const n=await wi();return n?new Promise(e=>{const t=n.transaction(jt,"readonly"),i=t.objectStore(jt).getAll();i.onsuccess=()=>e((i.result??[]).sort((s,r)=>r.updatedAt-s.updatedAt)),i.onerror=()=>e([]),t.onerror=()=>e([])}):[]}async function jx(n){const e=await wi();return e?new Promise(t=>{const i=e.transaction(jt,"readonly"),s=i.objectStore(jt).get(Si(n));s.onsuccess=()=>t(s.result??null),s.onerror=()=>t(null),i.onerror=()=>t(null)}):null}async function Zx(n,e){const t=await wi();return t?new Promise(i=>{const s=t.transaction(jt,"readwrite"),r=s.objectStore(jt),a=Si(n),o=r.get(a);let c=null;o.onsuccess=()=>{const l=o.result??{id:a,name:Xo(n),seed:n,createdAt:Date.now(),updatedAt:0,edited:0,chunks:e};c={...l,chunks:l.chunks??e,updatedAt:Date.now()},r.put(c)},s.oncomplete=()=>i(c),s.onerror=()=>i(null),s.onabort=()=>i(null)}):null}async function Jx(n,e){const t=await wi();t&&await new Promise(i=>{const s=t.transaction(jt,"readwrite"),r=s.objectStore(jt),a=Si(n),o=r.get(a);o.onsuccess=()=>{const c=o.result??{id:a,name:e,seed:n,createdAt:Date.now(),updatedAt:Date.now(),edited:0};r.put({...c,name:e.trim()||Xo(n)})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}async function Mc(n){const e=await wi();e&&await new Promise(t=>{const i=e.transaction([Jn,jt],"readwrite");i.objectStore(Jn).delete(Tu(Si(n))),i.objectStore(jt).delete(Si(n)),i.oncomplete=()=>t(),i.onerror=()=>t(),i.onabort=()=>t()})}const Yo=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],bu=2,$x=7,eM=9.8,tM=.6,nM=.45,iM=14;function sM(n,e){return n?{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}:e}function Cu(n,e,t,i,s,r,a,o){const c=n.density,l=n.material,u=new Float32Array(r*a*o).fill(-ct),h=new Uint8Array(r*a*o),f=[],d=new Set;for(const[M,x,A]of e)d.add(n.index(M,x,A));for(let M=0;M<r;M++)for(let x=0;x<a;x++)for(let A=0;A<o;A++){const C=t+M,E=i+x,w=s+A;if(!n.inBounds(C,E,w))continue;const b=n.index(C,E,w),S=(M*a+x)*o+A;d.has(b)?(u[S]=c[b],h[S]=l[b],f.push([M,x,A])):c[b]<=0?(u[S]=c[b],h[S]=l[b]):(u[S]=-P*.5,h[S]=l[b])}for(const[M,x,A]of e)c[n.index(M,x,A)]=-ct;const g=[0,0,0];for(const[M,x,A]of f)g[0]+=M,g[1]+=x,g[2]+=A;g[0]=g[0]/f.length*P,g[1]=g[1]/f.length*P,g[2]=g[2]/f.length*P;const v=(M,x,A)=>M<0||x<0||A<0||M>=r||x>=a||A>=o?-1:u[(M*a+x)*o+A],m=[];let p=0;for(const[M,x,A]of f){const C=M*P-g[0],E=x*P-g[1],w=A*P-g[2];p=Math.max(p,Math.hypot(C,E,w));let b=!1;for(const[S,_,D]of Yo)if(v(M+S,x+_,A+D)<=0){b=!0;break}b&&m.push([C,E,w])}return{ox:t,oy:i,oz:s,nx:r,ny:a,nz:o,density:u,material:h,solid:f,contacts:m,com:g,radius:Math.max(p,P),pos:[t*P+g[0],i*P+g[1],s*P+g[2]],q:[0,0,0,1],vel:[0,0,0],ang:[0,0,0],rest:0,age:0,settled:!1,touching:!1,texOrigin:[t*P,i*P,s*P]}}function Du(n){return new Pr(n.nx,n.ny,n.nz,0,0,0,n.density,n.material)}function _o(n,e,t=[0,0,0]){return ut[0]=e[0]-n.pos[0],ut[1]=e[1]-n.pos[1],ut[2]=e[2]-n.pos[2],$n(Ur(n.q),ut,t),t[0]+=n.com[0],t[1]+=n.com[1],t[2]+=n.com[2],t}function Ru(n,e,t=[0,0,0]){return ut[0]=e[0]-n.com[0],ut[1]=e[1]-n.com[1],ut[2]=e[2]-n.com[2],$n(n.q,ut,t),t[0]+=n.pos[0],t[1]+=n.pos[1],t[2]+=n.pos[2],t}function rM(n,e,t,i){const s=Ur(n.q),r=_o(n,e),a=[0,0,0];$n(s,t,a);const o=uu(Du(n),r,a,i,.08);if(!o)return null;const c=Ru(n,o.point),l=[0,0,0];return $n(n.q,o.normal,l),{point:c,normal:l,distance:o.distance,material:o.material,hard:!1}}function aM(n,e,t,i,s,r,a){const o=Math.min(0,e),c=Math.min(0,t),l=Math.min(0,i),u=Math.max(n.nx-1,s),h=Math.max(n.ny-1,r),f=Math.max(n.nz-1,a);if(o===0&&c===0&&l===0&&u===n.nx-1&&h===n.ny-1&&f===n.nz-1)return;const d=u-o+1,g=h-c+1,v=f-l+1,m=new Float32Array(d*g*v).fill(-ct),p=new Uint8Array(d*g*v);for(let M=0;M<n.nx;M++)for(let x=0;x<n.ny;x++)for(let A=0;A<n.nz;A++){const C=(M*n.ny+x)*n.nz+A,E=((M-o)*g+(x-c))*v+(A-l);m[E]=n.density[C],p[E]=n.material[C]}n.density=m,n.material=p,n.nx=d,n.ny=g,n.nz=v,n.com[0]-=o*P,n.com[1]-=c*P,n.com[2]-=l*P,n.texOrigin[0]+=o*P,n.texOrigin[1]+=c*P,n.texOrigin[2]+=l*P,n.ox+=o,n.oy+=c,n.oz+=l}function oM(n){const{nx:e,ny:t,nz:i}=n,s=(u,h,f)=>u<0||h<0||f<0||u>=e||h>=t||f>=i?-1:n.density[(u*t+h)*i+f],r=[];for(let u=0;u<e;u++)for(let h=0;h<t;h++)for(let f=0;f<i;f++)s(u,h,f)>0&&r.push([u,h,f]);if(n.solid=r,!r.length){n.contacts=[];return}const a=[0,0,0];for(const[u,h,f]of r)a[0]+=u,a[1]+=h,a[2]+=f;a[0]=a[0]/r.length*P,a[1]=a[1]/r.length*P,a[2]=a[2]/r.length*P;const o=[a[0]-n.com[0],a[1]-n.com[1],a[2]-n.com[2]];$n(n.q,o,ut),n.pos[0]+=ut[0],n.pos[1]+=ut[1],n.pos[2]+=ut[2],n.com=a;const c=[];let l=0;for(const[u,h,f]of r){const d=u*P-a[0],g=h*P-a[1],v=f*P-a[2];l=Math.max(l,Math.hypot(d,g,v));let m=!1;for(const[p,M,x]of Yo)if(s(u+p,h+M,f+x)<=0){m=!0;break}m&&c.push([d,g,v])}n.contacts=c,n.radius=Math.max(l,P),n.rest=0,n.settled=!1}function lM(n,e){if(e.op==="add"&&Kn(e.mat))return[n];const t=_o(n,[e.x,e.y,e.z]),i=e.size*.5+P*2;e.op==="add"&&aM(n,Math.floor((t[0]-i)/P),Math.floor((t[1]-i)/P),Math.floor((t[2]-i)/P),Math.ceil((t[0]+i)/P),Math.ceil((t[1]+i)/P),Math.ceil((t[2]+i)/P));const s=_o(n,[e.x,e.y,e.z]),r={...e,x:s[0],y:s[1],z:s[2]},a=Du(n);As(a,r);const{nx:o,ny:c,nz:l}=n,u=n.density,h=new Uint8Array(o*c*l),f=[];for(let g=0;g<o;g++)for(let v=0;v<c;v++)for(let m=0;m<l;m++){const p=(g*c+v)*l+m;if(u[p]<=0||h[p])continue;const M=[],x=[g,v,m];for(h[p]=1;x.length;){const A=x.pop(),C=x.pop(),E=x.pop();M.push([E,C,A]);for(const[w,b,S]of Yo){const _=E+w,D=C+b,U=A+S;if(_<0||D<0||U<0||_>=o||D>=c||U>=l)continue;const L=(_*c+D)*l+U;u[L]<=0||h[L]||(h[L]=1,x.push(_,D,U))}}if(M.length<=bu){for(const[A,C,E]of M)u[(A*c+C)*l+E]=-ct;continue}f.push(M)}if(f.length===0)return[];if(f.length===1)return oM(n),[n];const d=[];for(const g of f){let v=1/0,m=1/0,p=1/0,M=-1/0,x=-1/0,A=-1/0;for(const[w,b,S]of g)v=Math.min(v,w),m=Math.min(m,b),p=Math.min(p,S),M=Math.max(M,w),x=Math.max(x,b),A=Math.max(A,S);const C=Cu(a,g,v-1,m-1,p-1,M-v+3,x-m+3,A-p+3),E=Ru(n,C.pos);C.pos=E,C.q=[n.q[0],n.q[1],n.q[2],n.q[3]],C.vel=[n.vel[0],n.vel[1],n.vel[2]],C.ang=[n.ang[0],n.ang[1],n.ang[2]],C.texOrigin=[n.texOrigin[0]+(v-1)*P,n.texOrigin[1]+(m-1)*P,n.texOrigin[2]+(p-1)*P],d.push(C)}return d}function $n(n,e,t){const[i,s,r,a]=n,[o,c,l]=e,u=a*o+s*l-r*c,h=a*c+r*o-i*l,f=a*l+i*c-s*o,d=-i*o-s*c-r*l;return t[0]=u*a+d*-i+h*-r-f*-s,t[1]=h*a+d*-s+f*-i-u*-r,t[2]=f*a+d*-r+u*-s-h*-i,t}function Ur(n){return[-n[0],-n[1],-n[2],n[3]]}function cM(n,e,t){const[i,s,r]=e,[a,o,c,l]=n,u=.5*t*(i*l+s*c-r*o),h=.5*t*(s*l+r*a-i*c),f=.5*t*(r*l+i*o-s*a),d=.5*t*(-i*a-s*o-r*c);let g=a+u,v=o+h,m=c+f,p=l+d;const M=Math.hypot(g,v,m,p)||1;n[0]=g/M,n[1]=v/M,n[2]=m/M,n[3]=p/M}const ut=[0,0,0],hi=[0,0,0];function uM(n,e,t,i=$x){if(e.settled)return;e.age+=t;const s=e.vel,r=e.ang;s[1]-=eM*t;const a=Math.hypot(s[0],s[1],s[2]);if(a>i){const m=i/a;s[0]*=m,s[1]*=m,s[2]*=m}e.pos[0]+=s[0]*t,e.pos[1]+=s[1]*t,e.pos[2]+=s[2]*t,cM(e.q,r,t);const o=1,c=1/(.4*e.radius*e.radius);let l=0,u=0,h=0,f=0;e.touching=!1;for(const m of e.contacts){$n(e.q,m,ut);const p=e.pos[0]+ut[0],M=e.pos[1]+ut[1],x=e.pos[2]+ut[2];let A,C=0,E=1,w=0;if(M<0)A=-M;else{const O=n.sample(p,M,x),k=n.hardAt(p,M,x)!==0&&n.hardOccupiedAt(p,M,x);if(O<=0&&!k)continue;A=k?Math.max(O,.12):O,n.gradient(p,M,x,hi);const Y=Math.hypot(hi[0],hi[1],hi[2]);Y>1e-4&&!k&&(C=-hi[0]/Y,E=-hi[1]/Y,w=-hi[2]/Y)}A=Math.min(A,.5),e.touching=!0;const b=ut[0],S=ut[1],_=ut[2],D=s[0]+(r[1]*_-r[2]*S),U=s[1]+(r[2]*b-r[0]*_),L=s[2]+(r[0]*S-r[1]*b),B=D*C+U*E+L*w;if(B<0){const O=S*w-_*E,k=_*C-b*w,Y=b*E-S*C,H=o+c*(O*O+k*k+Y*Y),Z=-1.12*B/H;s[0]+=Z*C*o,s[1]+=Z*E*o,s[2]+=Z*w*o,r[0]+=c*O*Z,r[1]+=c*k*Z,r[2]+=c*Y*Z;const re=D-B*C,ce=U-B*E,De=L-B*w,Be=Math.hypot(re,ce,De);if(Be>1e-4){const ze=re/Be,ye=ce/Be,Q=De/Be,K=S*Q-_*ye,ne=_*ze-b*Q,Ce=b*ye-S*ze,xe=o+c*(K*K+ne*ne+Ce*Ce),ke=Math.min(Be/xe,tM*Z);s[0]-=ke*ze*o,s[1]-=ke*ye*o,s[2]-=ke*Q*o,r[0]-=c*K*ke,r[1]-=c*ne*ke,r[2]-=c*Ce*ke}}l+=C*A,u+=E*A,h+=w*A,f++}f>0&&(e.pos[0]+=l/f*1.05,e.pos[1]+=u/f*1.05,e.pos[2]+=h/f*1.05);const d=Math.exp(-t*(f>0?.9:.05));s[0]*=d,s[2]*=d,f>0&&(s[1]*=d);const g=Math.exp(-t*(f>0?1.1:.3));r[0]*=g,r[1]*=g,r[2]*=g,e.pos[0]=Math.min(n.sizeX-e.radius,Math.max(e.radius,e.pos[0])),e.pos[2]=Math.min(n.sizeZ-e.radius,Math.max(e.radius,e.pos[2]));const v=f>0&&Math.hypot(s[0],s[1],s[2])<.25&&Math.hypot(r[0],r[1],r[2])<.35;e.rest=v?e.rest+t:0,(e.rest>nM||e.age>iM)&&(e.settled=!0)}function Iu(n,e,t,i){const s=e/P,r=t/P,a=i/P,o=Math.floor(s),c=Math.floor(r),l=Math.floor(a);if(o<0||c<0||l<0||o>=n.nx-1||c>=n.ny-1||l>=n.nz-1)return-ct;const u=s-o,h=r-c,f=a-l,d=(A,C,E)=>n.density[(A*n.ny+C)*n.nz+E],g=d(o,c,l)+(d(o+1,c,l)-d(o,c,l))*u,v=d(o,c,l+1)+(d(o+1,c,l+1)-d(o,c,l+1))*u,m=d(o,c+1,l)+(d(o+1,c+1,l)-d(o,c+1,l))*u,p=d(o,c+1,l+1)+(d(o+1,c+1,l+1)-d(o,c+1,l+1))*u,M=g+(m-g)*h,x=v+(p-v)*h;return M+(x-M)*f}function hM(n,e){const t=e.radius+P*2;return{x0:Math.max(0,Math.floor((e.pos[0]-t)/P)),y0:Math.max(0,Math.floor((e.pos[1]-t)/P)),z0:Math.max(0,Math.floor((e.pos[2]-t)/P)),x1:Math.min(n.nx-1,Math.ceil((e.pos[0]+t)/P)),y1:Math.min(n.ny-1,Math.ceil((e.pos[1]+t)/P)),z1:Math.min(n.nz-1,Math.ceil((e.pos[2]+t)/P))}}function dM(n,e){const t=(e.x1-e.x0+1)*(e.y1-e.y0+1)*(e.z1-e.z0+1),i=new Float32Array(t),s=new Uint8Array(t);let r=0;for(let a=e.x0;a<=e.x1;a++)for(let o=e.y0;o<=e.y1;o++)for(let c=e.z0;c<=e.z1;c++,r++){const l=n.index(a,o,c);i[r]=n.density[l],s[r]=n.material[l]}return{d:i,m:s}}function fM(n,e,t){if(t<=1e-6)return Math.max(n,e);const i=Math.max(0,Math.min(1,.5+.5*(e-n)/t));return n+(e-n)*i+t*i*(1-i)}function Ac(n,e,t,i,s,r){const a=n.density,o=n.material,c=Ur(e.q),l=[0,0,0];let u=0;for(let h=t.x0;h<=t.x1;h++)for(let f=t.y0;f<=t.y1;f++)for(let d=t.z0;d<=t.z1;d++,u++){const g=n.index(h,f,d);ut[0]=h*P-e.pos[0],ut[1]=f*P-e.pos[1],ut[2]=d*P-e.pos[2],$n(c,ut,l);const v=l[0]+e.com[0],m=l[1]+e.com[1],p=l[2]+e.com[2],M=Iu(e,v,m,p)-s,x=i.d[u];if(f>=n.ny-1||M<=-P){a[g]=x,o[g]=i.m[u];continue}const A=Math.min(ct,fM(x,M,r));if(a[g]=A,M>x&&M>0){const C=Math.min(e.nx-1,Math.max(0,Math.round(v/P))),E=Math.min(e.ny-1,Math.max(0,Math.round(m/P))),w=Math.min(e.nz-1,Math.max(0,Math.round(p/P)));o[g]=e.material[(C*e.ny+E)*e.nz+w]||i.m[u]}else o[g]=i.m[u]}}function pM(n,e){const t=n.density,i=n.material,s=e.radius+P,r=Math.max(0,Math.floor((e.pos[0]-s)/P)),a=Math.min(n.nx-1,Math.ceil((e.pos[0]+s)/P)),o=Math.max(0,Math.floor((e.pos[1]-s)/P)),c=Math.min(n.ny-1,Math.ceil((e.pos[1]+s)/P)),l=Math.max(0,Math.floor((e.pos[2]-s)/P)),u=Math.min(n.nz-1,Math.ceil((e.pos[2]+s)/P)),h=Ur(e.q),f=[0,0,0];let d=null;for(let v=r;v<=a;v++)for(let m=o;m<=c;m++)for(let p=l;p<=u;p++){ut[0]=v*P-e.pos[0],ut[1]=m*P-e.pos[1],ut[2]=p*P-e.pos[2],$n(h,ut,f);const M=f[0]+e.com[0],x=f[1]+e.com[1],A=f[2]+e.com[2],C=Iu(e,M,x,A);if(C<=-P)continue;const E=n.index(v,m,p);if(C>t[E]&&m<n.ny-1){if(t[E]=Math.min(C,ct),C>0){const w=Math.min(e.nx-1,Math.max(0,Math.round(M/P))),b=Math.min(e.ny-1,Math.max(0,Math.round(x/P))),S=Math.min(e.nz-1,Math.max(0,Math.round(A/P)));i[E]=e.material[(w*e.ny+b)*e.nz+S]||i[E]}d=sM(d,{x0:v-1,y0:m-1,z0:p-1,x1:v+1,y1:m+1,z1:p+1})}}const g=d??{x0:r,y0:o,z0:l,x1:a,y1:c,z1:u};return{x0:Math.max(0,g.x0),y0:Math.max(0,g.y0),z0:Math.max(0,g.z0),x1:Math.min(n.nx-1,g.x1),y1:Math.min(n.ny-1,g.y1),z1:Math.min(n.nz-1,g.z1)}}const xs=7,xt=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Sc=[1,0,3,2,5,4];function mM(n,e,t,i){return n.getHard(e,t-1,i)!==0||n.getHard(e-1,t-1,i)!==0||n.getHard(e,t-1,i-1)!==0||n.getHard(e-1,t-1,i-1)!==0}class gM{constructor(e){this.field=e,this.parent=new Uint8Array(e.nx*e.ny*e.nz),this.sx=e.ny*e.nz,this.sy=e.nz}parent;sx;sy;isRoot(e,t,i){return t===0||mM(this.field,e,t,i)}build(){const e=this.field,t=e.density,i=this.parent;i.fill(0);let s=[];for(let r=0;r<e.nx;r++)for(let a=0;a<e.ny;a++)for(let o=0;o<e.nz;o++){const c=e.index(r,a,o);t[c]>0&&this.isRoot(r,a,o)&&(i[c]=xs,s.push(c))}this.grow(s)}grow(e){const t=this.field,i=t.density,s=this.parent,r=this.sx,a=this.sy;let o=0;for(;o<e.length;){const c=e[o++],l=Math.floor(c/r),u=Math.floor(c/a)%t.ny,h=c%t.nz;for(let f=0;f<6;f++){const d=l+xt[f][0],g=u+xt[f][1],v=h+xt[f][2];if(d<0||g<0||v<0||d>=t.nx||g>=t.ny||v>=t.nz)continue;const m=c+xt[f][0]*r+xt[f][1]*a+xt[f][2];s[m]!==0||i[m]<=0||(s[m]=Sc[f]+1,e.push(m))}o>65536&&o*2>e.length&&(e=e.slice(o),o=0)}}afterEdit(e){const t=this.field,i=t.density,s=this.parent,r=this.sx,a=this.sy,o=Math.max(0,e.x0-1),c=Math.max(0,e.y0-1),l=Math.max(0,e.z0-1),u=Math.min(t.nx-1,e.x1+1),h=Math.min(t.ny-1,e.y1+1),f=Math.min(t.nz-1,e.z1+1),d=[],g=[];for(let w=o;w<=u;w++)for(let b=c;b<=h;b++)for(let S=l;S<=f;S++){const _=t.index(w,b,S);if(i[_]<=0){s[_]!==0&&(s[_]=0,d.push(_));continue}s[_]===xs&&!this.isRoot(w,b,S)?(s[_]=0,d.push(_),g.push(_)):s[_]===0?g.push(_):s[_]!==xs&&this.isRoot(w,b,S)&&(s[_]=xs)}const v=[];let m=0;const p=d.slice();for(;m<p.length;){const w=p[m++],b=Math.floor(w/r),S=Math.floor(w/a)%t.ny,_=w%t.nz;for(let D=0;D<6;D++){const U=b+xt[D][0],L=S+xt[D][1],B=_+xt[D][2];if(U<0||L<0||B<0||U>=t.nx||L>=t.ny||B>=t.nz)continue;const O=w+xt[D][0]*r+xt[D][1]*a+xt[D][2];i[O]<=0||s[O]!==Sc[D]+1||(s[O]=0,v.push(O),p.push(O))}}const M=g.concat(v),x=[];for(const w of M){const b=Math.floor(w/r),S=Math.floor(w/a)%t.ny,_=w%t.nz;s[w]===0&&i[w]>0&&this.isRoot(b,S,_)&&(s[w]=xs,x.push(w))}for(const w of M){if(s[w]!==0||i[w]<=0)continue;const b=Math.floor(w/r),S=Math.floor(w/a)%t.ny,_=w%t.nz;for(let D=0;D<6;D++){const U=b+xt[D][0],L=S+xt[D][1],B=_+xt[D][2];if(U<0||L<0||B<0||U>=t.nx||L>=t.ny||B>=t.nz)continue;const O=w+xt[D][0]*r+xt[D][1]*a+xt[D][2];if(i[O]>0&&s[O]!==0){s[w]=D+1,x.push(w);break}}}this.grow(x);const A=[];let C=null;const E=new Set;for(const w of M){if(s[w]!==0||i[w]<=0||E.has(w))continue;const b=[],S=[w];for(E.add(w);S.length;){const Y=S.pop(),H=Math.floor(Y/r),Z=Math.floor(Y/a)%t.ny,re=Y%t.nz;b.push([H,Z,re]);for(let ce=0;ce<6;ce++){const De=H+xt[ce][0],Be=Z+xt[ce][1],ze=re+xt[ce][2];if(De<0||Be<0||ze<0||De>=t.nx||Be>=t.ny||ze>=t.nz)continue;const ye=Y+xt[ce][0]*r+xt[ce][1]*a+xt[ce][2];i[ye]<=0||s[ye]!==0||E.has(ye)||(E.add(ye),S.push(ye))}}let _=1/0,D=1/0,U=1/0,L=-1/0,B=-1/0,O=-1/0;for(const[Y,H,Z]of b)_=Math.min(_,Y),D=Math.min(D,H),U=Math.min(U,Z),L=Math.max(L,Y),B=Math.max(B,H),O=Math.max(O,Z);const k={x0:Math.max(0,_-1),y0:Math.max(0,D-1),z0:Math.max(0,U-1),x1:Math.min(t.nx-1,L+1),y1:Math.min(t.ny-1,B+1),z1:Math.min(t.nz-1,O+1)};if(C=C?{x0:Math.min(C.x0,k.x0),y0:Math.min(C.y0,k.y0),z0:Math.min(C.z0,k.z0),x1:Math.max(C.x1,k.x1),y1:Math.max(C.y1,k.y1),z1:Math.max(C.z1,k.z1)}:k,b.length<=bu){for(const[Y,H,Z]of b)i[t.index(Y,H,Z)]=-ct;continue}A.push(Cu(t,b,_-1,D-1,U-1,L-_+3,B-D+3,O-U+3))}return{fragments:A,changed:C}}countUnsupported(){const e=this.field.density,t=this.parent;let i=0;for(let s=0;s<e.length;s++)e[s]>0&&t[s]===0&&i++;return i}}const _c=40,vM=72,yc=10;class Qo{cfg;field;gi;renderer;pool;bootLog="";world;input;touch;hud;body;edits;quality;time;timeRate=1/90;timePaused=!1;sun;brush={shape:"cube",sizeIndex:2,op:"add",matIndex:0,snap:!0};chunks=new Map;lightDirty=new Set;lightRR=0;giDirty=!1;lastGiUpload=0;lastLod=0;lastEdit=0;saveTimer=0;dirtySlabs=new Set;undoStack=[];fps=0;frames=0;fpsT=0;lastFrame=0;lastHash=0;anims=[];waterDirty=!1;lastWaterBuild=0;floods=[];crouch=!1;eye=jn;foliage=1;falling=[];fallSpeed=7;support;nextFragId=1;opts;lightSweeps=0;ready=!1;hit=null;hitBody=null;constructor(e,t,i,s,r,a,o,c,l){this.pool=o,this.world=l,this.opts=t,this.cfg=s,this.field=i,this.edits=r,this.hud=a,this.quality=t.quality,this.foliage=t.foliage??(this.touchEnabledGuess()?.5:1),this.fallSpeed=t.fall??7,this.time=t.time??10.5,this.sun=sc(this.time),this.gi=new i0(i),this.support=new gM(i),this.touch=new Wx(document.getElementById("touch"));const u=this.touch.enabled||/Mobi|Android/i.test(navigator.userAgent);this.renderer=new Ox(e,i,this.gi,s.seaLevel,{textures:c,shadowMapSize:t.test||u?2048:4096,antialias:!t.test,cheapGi:t.cheapGi??u,maxPixelRatio:u?1.5:2,post:t.post??(t.quality==="low"?1:2),giMode:t.giMode??"sh",giDiv:t.giDiv??(u?2:1),scatterDensity:1,volumetricSteps:t.volumetric===!1||t.quality==="low"?0:u?8:16,reflection:!u,variant:t.shader}),this.renderer.onShaderError=d=>this.hud.showError(d),window.addEventListener("error",d=>this.hud.showError("error: "+(d.message??"").slice(0,160))),window.addEventListener("unhandledrejection",d=>this.hud.showError("rejection: "+String(d.reason).slice(0,160))),this.input=new kx(e);const h=i.sizeX/2,f=i.sizeZ/2;if(this.body=x0(h,fu(i,h,f)+.2,f),this.input.yaw=Math.PI*.25,this.touch.setFly(!1),t.view&&t.view.length>=5){const d=t.view;this.body.pos[0]=d[0],this.body.pos[1]=d[1],this.body.pos[2]=d[2],this.input.yaw=d[3],this.input.pitch=d[4],d.length>=6&&(this.time=d[5],this.timePaused=!0),this.body.fly=!0}for(let d=0;d<s.chunksX;d++)for(let g=0;g<s.chunksY;g++)for(let v=0;v<s.chunksZ;v++)this.chunks.set(nn(d,g,v),{level:-1,wanted:0,inflight:!1,dirty:!1,triangles:0,version:0,scatter:0,wantedScatter:0});this.hud.buildHotbar(this.renderer.textures),this.hud.setSelected(0),this.hud.onFall=d=>{this.fallSpeed=d,Wi({fall:d}),this.hud.say(`fall speed ${d} m/s`)},this.hud.onFoliage=d=>{this.foliage=d,Wi({foliage:d}),this.updateLod(!1),this.hud.say(`foliage ×${d}`)},this.hud.onQuality=d=>{this.quality=d,Wi({quality:d}),this.lastLod=0,this.renderer.setPost(d==="low"?1:2)},this.hud.onResetEdits=()=>{gc(this.cfg.seed),Mc(this.cfg.seed).then(()=>location.reload())},this.hud.onNewWorld=(d,g)=>{Wi({seed:d}),location.href=location.pathname+"?seed="+d+(g?"&chunks="+g:"")},this.hud.onLoadWorld=d=>{if(d===this.cfg.seed){this.resume();return}Wi({seed:d}),location.href=location.pathname+"?seed="+d},this.hud.onRenameWorld=(d,g)=>{Jx(d,g).then(()=>this.refreshWorlds()),d===this.cfg.seed&&this.world&&(this.world.name=g)},this.hud.onDeleteWorld=d=>{if(d===this.cfg.seed){this.hud.onResetEdits?.();return}Mc(d).then(()=>this.refreshWorlds())},this.hud.onResume=()=>this.resume(),this.hud.onMenu=()=>{document.pointerLockElement&&document.exitPointerLock(),this.showMenu()},this.hud.onCopyLink=()=>{const d=this.shareLink();navigator.clipboard?.writeText(d).then(()=>this.hud.say("link copied"),()=>this.hud.say(d,6e3))},this.hud.onTime=d=>{this.time=d,this.timePaused=!0},this.hud.onTimeFlow=()=>{this.timePaused=!this.timePaused,this.hud.say(this.timePaused?"time paused":"time flowing")},this.hud.onSelectSlot=d=>{this.brush.matIndex=d,this.hud.setSelected(d),this.syncShapeToMaterial()},e.addEventListener("click",()=>{this.hud.overlayVisible||this.input.requestLock()}),document.addEventListener("pointerlockchange",()=>{!this.input.locked&&!t.test&&!this.touch.enabled&&this.showMenu()}),window.addEventListener("resize",()=>this.renderer.resize())}touchEnabledGuess(){return"ontouchstart"in window||/Mobi|Android/i.test(navigator.userAgent)}static async create(e,t,i){const s=t.chunks??ec.chunksX,r={...ec,seed:t.seed,chunksX:s,chunksZ:s},a=new zx(t.test?2:Math.max(1,Math.min(6,(navigator.hardwareConcurrency||4)-1))),o=performance.now(),c=[],l=w=>c.push(`${w} ${(performance.now()-o).toFixed(0)}`);i.setLoading(.02,"shaping terrain");const u=a.textures(Mx),h=Zx(r.seed,s),f=qx(r.seed),d=new Pr(r.chunksX*Te+1,r.chunksY*Te+1,r.chunksZ*Te+1),g=r.chunksX*r.chunksY*r.chunksZ;let v=0;const m=Te+1,p=[];for(let w=0;w<r.chunksX;w++)for(let b=0;b<r.chunksY;b++)for(let S=0;S<r.chunksZ;S++)p.push(a.gen(w,b,S,r,b*8+Math.abs(w-r.chunksX/2)+Math.abs(S-r.chunksZ/2)).then(_=>{for(let D=0;D<m;D++)for(let U=0;U<m;U++){const L=(D*m+U)*m,B=d.index(w*Te+D,b*Te+U,S*Te);d.density.set(_.density.subarray(L,L+m),B),d.material.set(_.material.subarray(L,L+m),B)}v++,((v&7)===0||v===g)&&i.setLoading(.02+.28*(v/g),`shaping terrain · ${v} / ${g}`)}));await Promise.all(p),l("terrain"),i.setLoading(.3,"planting trees"),await Qn(),new n0(r).plantTrees(d),l("trees"),mx(d,r.seaLevel),l("water");const M=Sx(await u),x=await h;l("textures"),i.setLoading(.35,"loading your world"),await Qn();const A=await f;for(const w of A)vc(d,w);for(const w of A)w.water===void 0&&gx(d,{x0:w.cx*Te,y0:w.cy*Te,z0:w.cz*Te,x1:w.cx*Te+Te,y1:w.cy*Te+Te,z1:w.cz*Te+Te},r.seaLevel);const C=[];if(A.length===0){const w=Xx(r.seed);if(w.length){i.setLoading(.4,`converting ${w.length} old edits`),await Qn();const b=new Set;for(let _=0;_<w.length;_++){const D=As(d,w[_]);for(const[U,L,B]of Gi(D,r.chunksX,r.chunksY,r.chunksZ))b.add(nn(U,L,B));(_&31)===31&&(i.setLoading(.4+.05*(_/w.length),`converting ${_+1} / ${w.length} old edits`),await Qn())}const S=[];for(const _ of b){const[D,U,L]=ur(_);S.push(ya(d,D,U,L))}await xc(r.seed,S),gc(r.seed)}}i.setLoading(.45,"painting materials"),await Qn(),l("slabs");const E=new Qo(e,t,d,r,C,i,a,M,x);return E.renderer.water.rebuild(d),l("renderer"),i.setLoading(.6,"finding what stands on what"),await Qn(),E.support.build(),l("support"),i.setLoading(.7,"lighting the world"),await Qn(),E.injectAll(),E.renderer.giTex.upload(),E.renderer.giUploaded(),E.renderer.setSun(E.sun),l("light"),i.setLoading(.8,"meshing chunks"),await Qn(),E.updateLod(!0),l("lod"),E.bootLog=c.join(" · "),E}resume(){this.hud.hideOverlay(),!this.opts.test&&!this.touch.enabled&&this.input.requestLock()}showMenu(){this.hud.showOverlay(this.cfg.seed,this.quality,this.foliage,this.fallSpeed),this.refreshWorlds()}async refreshWorlds(){const e=await Kx();this.world&&!e.some(t=>t.id===this.world.id)&&e.unshift(this.world),this.hud.renderWorlds(e,this.cfg.seed)}syncShapeToMaterial(){Kn(Vi[this.brush.matIndex].id)&&(this.brush.shape="cube",this.brush.snap=!0)}injectAll(){const e=Te/_t;for(let t=0;t<this.cfg.chunksX;t++)for(let i=0;i<this.cfg.chunksY;i++)for(let s=0;s<this.cfg.chunksZ;s++)va(this.field,this.gi,t,i,s,e,this.sun);this.lightSweeps++,this.giDirty=!0}lightStep(e){const t=this.opts.test?12:2.5,i=performance.now(),s=Te/_t,r=this.cfg.chunksX*this.cfg.chunksY*this.cfg.chunksZ;let a=0;for(const o of this.lightDirty){const[c,l,u]=ur(o);if(va(this.field,this.gi,c,l,u,s,this.sun),this.lightDirty.delete(o),a++,performance.now()-i>t)break}for(;performance.now()-i<t;){const o=this.lightRR,c=Math.floor(o/(this.cfg.chunksY*this.cfg.chunksZ)),l=Math.floor(o/this.cfg.chunksZ)%this.cfg.chunksY,u=o%this.cfg.chunksZ;va(this.field,this.gi,c,l,u,s,this.sun),this.lightRR=(o+1)%r,this.lightRR===0&&this.lightSweeps++,a++}a>0&&(this.giDirty=!0),this.giDirty&&e-this.lastGiUpload>(this.opts.test?30:150)&&(this.renderer.giTex.upload(),this.renderer.giUploaded(),this.giDirty=!1,this.lastGiUpload=e)}wantedLevel(e,t,i,s){const r=Te*P,a=(e+.5)*r-this.body.pos[0],o=(t+.5)*r-this.body.pos[1],c=(i+.5)*r-this.body.pos[2],l=Math.hypot(a,o,c),u=h=>s>=h?yc:0;return this.quality==="low"?0:this.quality==="medium"?l<_c+u(1)?1:0:l<22+u(2)?2:l<vM+u(1)?1:0}updateLod(e){for(const[t,i]of this.chunks){const[s,r,a]=ur(t),o=this.wantedLevel(s,r,a,i.level),c=this.scatterFor(s,r,a,i.scatter);(o!==i.wanted||c!==i.wantedScatter||e||i.level<0)&&(i.wanted=o,i.wantedScatter=c,(i.level!==o||i.scatter!==c||i.level<0)&&this.requestMesh(s,r,a))}this.pool.reprioritize(t=>this.priority(t.cx,t.cy,t.cz))}scatterFor(e,t,i,s){if(this.foliage<=0)return 0;const r=Te*P;return Math.hypot((e+.5)*r-this.body.pos[0],(t+.5)*r-this.body.pos[1],(i+.5)*r-this.body.pos[2])<_c+(s>0?yc:0)?this.foliage:0}priority(e,t,i){const s=Te*P;return Math.hypot((e+.5)*s-this.body.pos[0],(t+.5)*s-this.body.pos[1],(i+.5)*s-this.body.pos[2])}requestMesh(e,t,i){const s=nn(e,t,i),r=this.chunks.get(s);if(r.inflight){r.dirty=!0;return}r.inflight=!0,r.dirty=!1;const a=2,o=Te+1+2*a,c=this.field.extract(e*Te-a,t*Te-a,i*Te-a,o,o,o),l=r.wanted,u=r.wantedScatter;this.pool.submit({cx:e,cy:t,cz:i,ox:c.ox,oy:c.oy,oz:c.oz,n:o,density:c.density,material:c.material,hard:c.hard,sub:c.sub,levels:l,scatter:u},this.priority(e,t,i)).then(h=>{r.inflight=!1,r.level=h.levels,r.scatter=u,r.version++,r.triangles=h.vertexCount/3,this.renderer.setChunk(e,t,i,{positions:h.positions,normals:h.normals,mats:h.mats,bary:h.bary,face:h.face,emitters:h.emitters,scatter:h.scatter,vertexCount:h.vertexCount}),(r.dirty||r.wanted!==r.level||r.wantedScatter!==r.scatter)&&this.requestMesh(e,t,i)})}get pendingMeshes(){let e=0;for(const t of this.chunks.values())(t.inflight||t.level<0)&&e++;return e}applyEdit(e,t=!0){if(a0(e)&&!this.opts.test){this.anims.push({e,t0:performance.now(),record:t}),this.stepEdit(e,Ea(.001));return}if(e.op==="smooth"&&!this.opts.test){const i=t?this.preImages(e):[],s=wa(e,this.field),r=this.copyDensity(s),a=As(this.field,e),o=this.copyDensity(s);this.writeDensity(s,r,o,0),this.anims.push({e,t0:performance.now(),record:t,lerp:{b:a,pre:r,post:o,preImages:i}}),this.refresh(a);return}this.finishEdit(e,t)}preImages(e){const t=[];for(const[i,s,r]of Gi(wa(e,this.field),this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))t.push(ya(this.field,i,s,r));return t}copyDensity(e){const t=this.field,i=new Float32Array((e.x1-e.x0+1)*(e.y1-e.y0+1)*(e.z1-e.z0+1));let s=0;for(let r=e.x0;r<=e.x1;r++)for(let a=e.y0;a<=e.y1;a++)for(let o=e.z0;o<=e.z1;o++)i[s++]=t.density[t.index(r,a,o)];return i}writeDensity(e,t,i,s){const r=this.field;let a=0;for(let o=e.x0;o<=e.x1;o++)for(let c=e.y0;c<=e.y1;c++)for(let l=e.z0;l<=e.z1;l++,a++)r.density[r.index(o,c,l)]=t[a]+(i[a]-t[a])*s}refresh(e,t=!1){const{removed:i,plan:s}=_u(this.field,e,this.cfg.seaLevel);if(i){this.waterDirty=!0,e=Ta(e,i);const r=Math.max(.5,(i.x1-i.x0)*P*.5),a=Math.max(.5,(i.z1-i.z0)*P*.5);this.renderer.water.splash((i.x0+i.x1)*.5*P,(i.z0+i.z1)*.5*P,Math.hypot(r,a),-.02*Math.min(4,Math.hypot(r,a)))}if(s)if(s.cells.length<=6){const r=So(this.field,s,s.cells.length);r&&(this.waterDirty=!0,e=Ta(e,r))}else this.floods.push(s);for(const[r,a,o]of xa(e,Te,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))if(this.requestMesh(r,a,o),this.lightDirty.add(nn(r,a,o)),t)for(let c=a-1;c>=0;c--)this.lightDirty.add(nn(r,c,o));return e}stepEdit(e,t){this.refresh(As(this.field,e,t))}finishEdit(e,t){const i=t?this.preImages(e):[],s=As(this.field,e);this.commitEdit(e,t,i,s)}editLoose(e,t){const i=this.falling.find(r=>r.id===e);if(!i)return;if(t.op==="add"&&Kn(t.mat)){this.hud.say("blocks need solid ground");return}const s=lM(i.frag,t);this.renderer.removeFragment(e),this.falling=this.falling.filter(r=>r.id!==e);for(const r of s)this.launch(r)}launch(e){const t=this.nextFragId++;this.falling.push({frag:e,id:t}),this.pool.frag(e.nx,e.ny,e.nz,e.density.slice(),e.material.slice(),this.foliage).then(i=>{this.falling.some(s=>s.id===t)&&this.renderer.setFragment(t,i,e.com,e.pos,e.q,e.texOrigin)})}stepFalling(e){if(!this.falling.length)return;const t=[],i=this.lastNow;for(const s of this.falling){const r=s.frag;if(s.cooking){if(s.cooking.keys.every((u,h)=>{const f=this.chunks.get(u);return f.version>s.cooking.versions[h]&&!f.inflight})){this.renderer.removeFragment(s.id);continue}t.push(s);continue}if(s.blend){const l=Math.min(1,(i-s.blend.t0)/MM),u=l*l*(3-2*l);if(this.renderer.fadeFragment(s.id,l<.55?1:Math.max(.08,1-(l-.55)/.45)),l>=1){if(!s.blend.final){s.blend.final=!0,Ac(this.field,r,s.blend.box,s.blend.pre,0,0);const h=pM(this.field,r),f=this.support.afterEdit(h);for(const v of f.fragments)this.launch(v);const d=this.refresh(f.changed?Ta(h,f.changed):h,!0),g=xa(d,Te,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([v,m,p])=>nn(v,m,p));s.cooking={keys:g,versions:g.map(v=>this.chunks.get(v).version)};for(const[v,m,p]of Gi(d,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nn(v,m,p));this.scheduleSave()}t.push(s);continue}if(i-s.blend.lastStep>AM){s.blend.lastStep=i;const h=SM*(1-u),f=_M*(1-u)+.02;Ac(this.field,r,s.blend.box,s.blend.pre,h,f),this.refresh(s.blend.box,!1)}t.push(s);continue}const a=r.pos[1]-r.radius>this.cfg.seaLevel,o=Math.max(1,Math.ceil(e/(1/120)));for(let l=0;l<o&&!r.settled;l++)uM(this.field,r,e/o,this.fallSpeed);if(a&&r.pos[1]-r.radius<=this.cfg.seaLevel&&this.field.waterAt(r.pos[0],this.cfg.seaLevel-P*.5,r.pos[2])&&this.renderer.water.splash(r.pos[0],r.pos[2],Math.max(.6,r.radius),-.05*Math.min(6,r.solid.length/12)),this.renderer.moveFragment(s.id,r.pos,r.q),!r.settled){t.push(s);continue}const c=hM(this.field,r);s.blend={box:c,pre:dM(this.field,c),t0:i,lastStep:-1e9,final:!1},t.push(s)}this.falling=t}commitEdit(e,t,i,s){if(s=this.refresh(s,!0),t){this.edits.push(e),this.undoStack.push(i),this.undoStack.length>24&&this.undoStack.shift();for(const[o,c,l]of Gi(s,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nn(o,c,l));this.scheduleSave()}const r=e.size*.5+P;Math.abs(e.y-this.cfg.seaLevel)<r+.5&&this.field.waterAt(e.x,this.cfg.seaLevel-P*.5,e.z)&&this.renderer.water.splash(e.x,e.z,r,-.05*Math.min(3,e.size));const a=this.support.afterEdit(s);if(a.changed){this.refresh(a.changed,!0);for(const[o,c,l]of Gi(a.changed,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nn(o,c,l));this.scheduleSave()}for(const o of a.fragments)this.launch(o)}brushTarget(e){const t=this.hit;if(!t)return null;const i=this.effectiveSize(e)*.5,s=t.normal;let r;const a=e==="add"&&Kn(Vi[this.brush.matIndex].id),o=a||t.hard?.5:.6;if(e==="add")r=[t.point[0]+s[0]*i*o,t.point[1]+s[1]*i*o,t.point[2]+s[2]*i*o];else if(e==="sub"){const l=Math.min(i*.4,.06);r=[t.point[0]-s[0]*l,t.point[1]-s[1]*l,t.point[2]-s[2]*l]}else r=[t.point[0],t.point[1],t.point[2]];if(this.brush.snap&&(e!=="sub"||this.brush.shape!=="sphere")||a){const l=this.effectiveSize(e);r=[Math.floor(r[0]/l)*l+l/2,Math.floor(r[1]/l)*l+l/2,Math.floor(r[2]/l)*l+l/2]}return r}facingDir(){const e=-Math.sin(this.input.yaw),t=-Math.cos(this.input.yaw);let i=0,s=-1/0;for(let r=0;r<4;r++){const a=e*go[r][0]+t*go[r][2];a>s&&(s=a,i=r)}return i}effectiveSize(e){const t=Vi[this.brush.matIndex].id;return e==="add"&&Kn(t)&&!Nt(t)?.5:ui[this.brush.sizeIndex]}doEdit(e){const t=this.brushTarget(e);if(!t)return;const i=Vi[this.brush.matIndex].id,s=e==="add"&&Kn(i)&&!Nt(i),r={op:e,shape:s?"cube":this.brush.shape,size:this.effectiveSize(e),mat:i,x:t[0],y:t[1],z:t[2]};if(r.shape==="ramp"&&(r.dir=this.facingDir()),this.hitBody!==null){this.editLoose(this.hitBody,r);return}this.applyEdit(r)}lastNow=0;frame(e){this.lastNow=e;const t=this.lastFrame?(e-this.lastFrame)/1e3:1/60;this.lastFrame=e;const i=Math.min(t,.05),s=this.input,r=this.touch,a=s.locked||this.opts.test||r.enabled&&!this.hud.overlayVisible;if(a){for(let L=0;L<mc.length&&L<Vi.length;L++)s.hit(mc[L])&&(this.brush.matIndex=L,this.hud.setSelected(L),this.syncShapeToMaterial());s.hit("Escape")&&this.touch.enabled&&this.hud.showOverlay(this.cfg.seed,this.quality),s.wheel!==0&&(this.brush.sizeIndex=Math.max(0,Math.min(ui.length-1,this.brush.sizeIndex-s.wheel))),s.hit("KeyQ")&&(this.brush.shape=Ec(this.brush.shape)),s.hit("Tab")&&(this.brush.op=this.brush.op==="add"?"paint":this.brush.op==="paint"?"smooth":"add"),s.hit("KeyG")&&(this.brush.snap=!this.brush.snap,this.hud.say(this.brush.snap?"grid snap on":"grid snap off")),s.hit("KeyF")&&(this.body.fly=!this.body.fly,this.touch.setFly(this.body.fly),this.hud.say(this.body.fly?"flying":"walking")),s.hit("KeyP")&&(this.timePaused=!this.timePaused,this.hud.say(this.timePaused?"time paused":"time flowing")),s.hit("Comma")&&(this.time=(this.time-.5+24)%24),s.hit("Period")&&(this.time=(this.time+.5)%24),s.hit("KeyZ")&&this.edits.length&&this.undo()}r.enabled&&a&&(s.yaw-=r.lookDX*.005,s.pitch=Math.max(-1.55,Math.min(1.55,s.pitch-r.lookDY*.005)),r.tapped("tb-fly")&&(this.body.fly=!this.body.fly,r.setFly(this.body.fly),this.hud.say(this.body.fly?"flying":"walking")),r.tapped("tb-size-down")&&(this.brush.sizeIndex=Math.max(0,this.brush.sizeIndex-1)),r.tapped("tb-size-up")&&(this.brush.sizeIndex=Math.min(ui.length-1,this.brush.sizeIndex+1)),r.tapped("tb-shape")&&(this.brush.shape=Ec(this.brush.shape)),r.tapped("tb-snap")&&(this.brush.snap=!this.brush.snap,this.hud.say(this.brush.snap?"grid snap on":"grid snap off")),r.tapped("tb-undo")&&this.edits.length&&this.undo(),r.tapped("tb-menu")&&this.showMenu()),!this.timePaused&&!this.opts.test&&(this.time=(this.time+this.timeRate*i)%24),this.sun=sc(this.time),this.renderer.setSun(this.sun);const o=s.yaw,c=-Math.sin(o),l=-Math.cos(o),u=Math.cos(o),h=-Math.sin(o);let f=0,d=0,g=0;a&&(s.down("KeyW")&&(f+=c,d+=l),s.down("KeyS")&&(f-=c,d-=l),s.down("KeyD")&&(f+=u,d+=h),s.down("KeyA")&&(f-=u,d-=h),r.enabled&&(f+=c*r.moveY+u*r.moveX,d+=l*r.moveY+h*r.moveX),this.body.fly&&((s.down("Space")||r.jump)&&(g+=1),(s.down("ShiftLeft")||s.down("ShiftRight")||s.down("KeyC")||r.duck)&&(g-=1))),this.crouch=!this.body.fly&&a&&(r.duck||s.down("KeyC")),this.body.crouch=this.crouch;const v=Math.max(1,Math.hypot(f,d)),m=s.down("ShiftLeft")||s.down("ShiftRight"),p=this.body.fly?m?40:18:this.crouch?1.8:m?8.5:5.2;M0(this.field,this.body,{wishX:f/v*p,wishZ:d/v*p,wishY:g*(this.body.fly?m?28:16:0),jump:a&&(s.down("Space")||r.jump),dt:i});const M=this.renderer.camera;this.eye+=((this.crouch?g0:jn)-this.eye)*Math.min(1,i*14),M.position.set(this.body.pos[0],this.body.pos[1]+this.eye,this.body.pos[2]),M.rotation.set(s.pitch,o,0,"YXZ");const x=this.field.waterAt(M.position.x,M.position.y,M.position.z);if(x!==this.renderer.underwater&&this.renderer.setUnderwater(x,this.sun),this.floods.length){const L=[];for(const B of this.floods){B.carry+=vx(B)*i;const O=Math.floor(B.carry);B.carry-=O;const k=So(this.field,B,O);if(k){this.waterDirty=!0;for(const[Y,H,Z]of Gi(k,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nn(Y,H,Z))}B.done<B.cells.length?L.push(B):this.scheduleSave()}this.floods=L}this.waterDirty&&(e-this.lastWaterBuild>90||!this.floods.length)&&(this.waterDirty=!1,this.lastWaterBuild=e,this.renderer.water.rebuild(this.field));const A=[],C=this.body.pos,E=this.cfg.seaLevel;C[1]<E&&C[1]+jn>E&&this.field.waterAt(C[0],E-P*.5,C[2])&&A.push([C[0],C[2],.42,Math.min(4,Math.hypot(this.body.vel[0],this.body.vel[1],this.body.vel[2]))]),this.stepFalling(i);for(const L of this.falling){const B=L.frag;B.pos[1]-B.radius<E&&B.pos[1]+B.radius>E&&this.field.waterAt(B.pos[0],E-P*.5,B.pos[2])&&A.push([B.pos[0],B.pos[2],Math.max(.4,B.radius*.8),Math.min(6,Math.hypot(B.vel[0],B.vel[1],B.vel[2])*1.5)])}this.renderer.water.setObstacles(A);const w=new N(0,0,-1).applyEuler(M.rotation);this.hit=u0(this.field,[M.position.x,M.position.y,M.position.z],[w.x,w.y,w.z],48),this.hitBody=null;for(const L of this.falling){if(L.cooking||L.blend)continue;const B=this.hit?this.hit.distance:48,O=L.frag,k=O.pos[0]-M.position.x,Y=O.pos[1]-M.position.y,H=O.pos[2]-M.position.z,Z=k*w.x+Y*w.y+H*w.z;if(Z<-O.radius||Z>B+O.radius)continue;const re=k-w.x*Z,ce=Y-w.y*Z,De=H-w.z*Z;if(re*re+ce*ce+De*De>O.radius*O.radius)continue;const Be=rM(O,[M.position.x,M.position.y,M.position.z],[w.x,w.y,w.z],B);Be&&(!this.hit||Be.distance<this.hit.distance)&&(this.hit=Be,this.hitBody=L.id)}if(this.hit){const L=s.mouseDown[0]||r.dig?"sub":r.heldOp??this.brush.op,B=this.effectiveSize(L)*.5,O=this.brushTarget(L),k=this.brush.shape;k==="sphere"&&B>=.3?this.renderer.setCursor(O[0],O[1],O[2],B,null):k==="slab"?this.renderer.setCursor(O[0],O[1]-B+B/3,O[2],B,[B,B/3,B]):this.renderer.setCursor(O[0],O[1],O[2],B,[B,B,B])}else this.renderer.setCursor(0,0,0,0,null);if(a){const L=e-this.lastEdit>(this.brush.sizeIndex>=2?260:150);s.mouseClick[0]||(s.mouseDown[0]||r.dig)&&L?(this.doEdit("sub"),this.lastEdit=e):s.mouseClick[2]||s.mouseDown[2]&&L?(this.doEdit(this.brush.op),this.lastEdit=e):r.heldOp&&L&&(this.doEdit(r.heldOp),this.lastEdit=e)}if(this.anims.length){const L=[];for(const B of this.anims){const O=(e-B.t0)/xM;if(B.lerp){const{b:k,pre:Y,post:H,preImages:Z}=B.lerp,re=wa(B.e,this.field);O>=1?(this.writeDensity(re,Y,H,1),this.commitEdit(B.e,B.record,Z,k)):(this.writeDensity(re,Y,H,Ea(O)),this.refresh(k),L.push(B))}else O>=1?this.finishEdit(B.e,B.record):(this.stepEdit(B.e,Ea(O)),L.push(B))}this.anims=L}this.lightStep(e),e-this.lastLod>400&&(this.updateLod(!1),this.lastLod=e),this.renderer.render(e/1e3),this.frames++,e-this.fpsT>500&&(this.fps=this.frames*1e3/(e-this.fpsT),this.frames=0,this.fpsT=e);const b=this.brush;this.hud.setStatus(r.enabled?`${b.shape} ${ui[b.sizeIndex]<.5?"⅙":ui[b.sizeIndex]} m · ${b.snap?"snap":"free"} · ${this.body.fly?"fly":this.crouch?"duck":"walk"}`:`${b.shape} ${ui[b.sizeIndex]<.5?"⅙":ui[b.sizeIndex]} m · RMB: ${b.op} · ${b.snap?"snap":"free"} · ${this.body.fly?"fly":this.crouch?"duck":"walk"}`);const S=Math.floor(this.time),_=Math.floor((this.time-S)*60);this.hud.setClock(`${String(S).padStart(2,"0")}:${String(_).padStart(2,"0")}${this.timePaused?" ⏸":""}`,this.time);const D=this.hit,U=D?` · aim ${this.hitBody!==null?"body":D.hard?"block":"field"} ${un[D.material]?.name??D.material} @${D.distance.toFixed(1)} m`:" · aim none";this.hud.setDebug(`${this.fps.toFixed(0)} fps · ${(this.renderer.triangles/1e3).toFixed(0)}k tris · ${this.renderer.chunkCount} chunks · ${this.renderer.flames.count} flames · ${(this.renderer.scatter.count/1e3).toFixed(1)}k scatter · mesh q ${this.pool.queued} · ${this.renderer.fallingCount} falling · ${this.body.pos.map(L=>L.toFixed(1)).join(", ")}${U}`),e-this.lastHash>1e3&&(this.lastHash=e,this.writeHash()),s.flush(),r.flush(),this.ready=!0}stateString(){const e=this.body.pos;return[e[0],e[1],e[2],this.input.yaw,this.input.pitch,this.time].map(t=>+t.toFixed(2)).join(",")}writeHash(){try{history.replaceState(null,"",location.pathname+location.search+"#v="+this.stateString())}catch{}}shareLink(){const e=new URLSearchParams(location.search);return e.set("seed",String(this.cfg.seed)),e.set("quality",this.quality),location.origin+location.pathname+"?"+e.toString()+"#v="+this.stateString()}scheduleSave(){clearTimeout(this.saveTimer),this.saveTimer=window.setTimeout(()=>{const e=[];for(const t of this.dirtySlabs){const[i,s,r]=ur(t);e.push(ya(this.field,i,s,r))}this.dirtySlabs.clear(),xc(this.cfg.seed,e)},600)}undo(){const e=this.undoStack.pop();if(!e){this.hud.say("nothing to undo");return}this.edits.pop();for(const t of e){vc(this.field,t),this.support.afterEdit({x0:t.cx*Te,y0:t.cy*Te,z0:t.cz*Te,x1:t.cx*Te+Te,y1:t.cy*Te+Te,z1:t.cz*Te+Te});const i=nn(t.cx,t.cy,t.cz);this.dirtySlabs.add(i);for(const[s,r,a]of xa({x0:t.cx*Te,y0:t.cy*Te,z0:t.cz*Te,x1:t.cx*Te+Te,y1:t.cy*Te+Te,z1:t.cz*Te+Te},Te,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.requestMesh(s,r,a),this.lightDirty.add(nn(s,r,a))}this.waterDirty=!0,this.scheduleSave(),this.hud.say("undo")}setView(e,t,i,s,r){this.body.pos[0]=e,this.body.pos[1]=t-jn,this.body.pos[2]=i,this.body.vel[0]=this.body.vel[1]=this.body.vel[2]=0,this.body.fly=!0,this.input.yaw=s,this.input.pitch=r,this.lastLod=0}setTime(e){this.time=e}}const xM=140,MM=2600,AM=160,SM=.45,_M=.4;function Ea(n){const e=1-Math.min(1,Math.max(0,n));return 1-e*e*e}function Ec(n){return n==="cube"?"slab":n==="slab"?"ramp":n==="ramp"?"sphere":"cube"}function ur(n){const e=n%1024,t=Math.floor(n/1024)%1024;return[Math.floor(n/1048576),t,e]}function Qn(){return new Promise(n=>requestAnimationFrame(()=>n()))}function wa(n,e){const t=n.size*.5+2;return{x0:Math.max(0,Math.floor((n.x-t)/P)),y0:Math.max(0,Math.floor((n.y-t)/P)),z0:Math.max(0,Math.floor((n.z-t)/P)),x1:Math.min(e.nx-1,Math.ceil((n.x+t)/P)),y1:Math.min(e.ny-1,Math.ceil((n.y+t)/P)),z1:Math.min(e.nz-1,Math.ceil((n.z+t)/P))}}function Ta(n,e){return{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}}function yM(n){const e=/#v=([-\d.,]+)/.exec(n);if(!e)return;const t=e[1].split(",").map(Number);return t.length>=5&&t.every(i=>Number.isFinite(i))?t:void 0}async function EM(){const n=new URLSearchParams(location.search),e=Eu(),t=n.get("test")==="1";n.get("debug")==="1"&&document.body.classList.add("debug");const i=n.get("seed")??n.get("world"),s=i!==null?yu(i):e.seed??1337,r=n.get("quality")||e.quality||"medium",a={seed:s,quality:r,test:t,chunks:(await jx(s))?.chunks??(n.get("chunks")?Math.max(2,Math.min(24,Number(n.get("chunks")))):void 0),time:n.get("time")?Number(n.get("time")):void 0,cheapGi:n.get("gi")==="cheap"?!0:n.get("gi")==="full"?!1:void 0,giMode:n.get("gi")==="cone"?"cone":n.get("gi")==="sh"?"sh":void 0,post:n.has("post")?Math.max(0,Math.min(2,Number(n.get("post")))):void 0,volumetric:n.get("vol")==="0"?!1:void 0,shader:["full","lite","basic"].find(h=>h===n.get("shader")),giDiv:n.has("gidiv")?Math.max(1,Math.min(4,Number(n.get("gidiv")))):void 0,view:yM(location.hash),foliage:n.has("foliage")?Math.max(0,Math.min(8,Number(n.get("foliage")))):e.foliage,fall:n.has("fall")?Math.max(1,Math.min(60,Number(n.get("fall")))):e.fall};Wi({seed:s,quality:r});const o=document.getElementById("view"),c=new Hx;window.addEventListener("error",h=>c.showError("error: "+(h.message??"").slice(0,160)));const l=await Qo.create(o,a,c);c.hideLoading(),t||l.showMenu(),window.__splinecraft={game:l,ready:()=>l.ready&&l.pendingMeshes===0,setView:l.setView.bind(l),setTime:l.setTime.bind(l),edit:l.applyEdit.bind(l),ground:(h,f)=>fu(l.field,h,f),state:()=>l.stateString()};const u=h=>{l.frame(h),requestAnimationFrame(u)};requestAnimationFrame(u)}EM().catch(n=>{console.error(n);const e=document.getElementById("loading-text");e&&(e.textContent="failed to start: "+(n instanceof Error?n.message:String(n)))});
