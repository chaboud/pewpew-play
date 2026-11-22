(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="180",cf=0,wl=1,hf=2,uh=1,dh=2,Yn=3,ui=0,sn=1,en=2,hi=0,ls=1,Ja=2,bl=3,Sl=4,ff=5,Ri=100,uf=101,df=102,pf=103,mf=104,gf=200,xf=201,vf=202,_f=203,Qa=204,eo=205,yf=206,Mf=207,wf=208,bf=209,Sf=210,Ef=211,Af=212,Tf=213,Rf=214,to=0,no=1,io=2,us=3,so=4,ro=5,ao=6,oo=7,el=0,Cf=1,Lf=2,fi=0,Pf=1,Df=2,If=3,ph=4,Uf=5,Ff=6,Nf=7,mh=300,ds=301,ps=302,lo=303,co=304,Zr=306,ho=1e3,Li=1001,fo=1002,tn=1003,zf=1004,cr=1005,fn=1006,na=1007,Kn=1008,Bn=1009,gh=1010,xh=1011,Xs=1012,tl=1013,di=1014,Dn=1015,Fi=1016,nl=1017,il=1018,$s=1020,vh=35902,_h=35899,yh=1021,Mh=1022,un=1023,Ys=1026,Ks=1027,cs=1028,sl=1029,wh=1030,rl=1031,al=1033,Hr=33776,Gr=33777,Vr=33778,Wr=33779,uo=35840,po=35841,mo=35842,go=35843,xo=36196,vo=37492,_o=37496,yo=37808,Mo=37809,wo=37810,bo=37811,So=37812,Eo=37813,Ao=37814,To=37815,Ro=37816,Co=37817,Lo=37818,Po=37819,Do=37820,Io=37821,Uo=36492,Fo=36494,No=36495,zo=36283,Oo=36284,ko=36285,Bo=36286,Of=3200,bh=3201,ol=0,kf=1,Ln="",Qt="srgb",ms="srgb-linear",Yr="linear",wt="srgb",Bi=7680,El=519,Bf=512,Hf=513,Gf=514,Sh=515,Vf=516,Wf=517,qf=518,Xf=519,Al=35044,gs=35048,Tl="300 es",On=2e3,Kr=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ia=Math.PI/180,Ho=180/Math.PI;function ar(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function $f(i,e){return(i%e+e)%e}function sa(i,e,t){return(1-t)*i+t*e}function Ls(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const u=r[a+0],d=r[a+1],g=r[a+2],m=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(f!==m||l!==u||c!==d||h!==g){let x=1-o;const p=l*u+c*d+h*g+f*m,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),M=Math.atan2(E,p*y);x=Math.sin(x*M)/E,o=Math.sin(o*M)/E}const v=o*y;if(l=l*x+u*v,c=c*x+d*v,h=h*x+g*v,f=f*x+m*v,x===1-o){const E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-o*d,e[t+2]=c*g+h*d+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new B,Rl=new Bt;class rt{constructor(e,t,n,s,r,a,o,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],m=s[0],x=s[3],p=s[6],y=s[1],_=s[4],v=s[7],E=s[2],M=s[5],T=s[8];return r[0]=a*m+o*y+l*E,r[3]=a*x+o*_+l*M,r[6]=a*p+o*v+l*T,r[1]=c*m+h*y+f*E,r[4]=c*x+h*_+f*M,r[7]=c*p+h*v+f*T,r[2]=u*m+d*y+g*E,r[5]=u*x+d*_+g*M,r[8]=u*p+d*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=t*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(s*c-h*n)*m,e[2]=(o*n-s*a)*m,e[3]=u*m,e[4]=(h*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new rt;function Eh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yf(){const i=js("canvas");return i.style.display="block",i}const Cl={};function Zs(i){i in Cl||(Cl[i]=!0,console.warn(i))}function Kf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ll=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jf(){const i={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===wt&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ms]:{primaries:e,whitePoint:n,transfer:Yr,toXYZ:Ll,fromXYZ:Pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Ll,fromXYZ:Pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}const mt=jf();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hi;class Zf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hi===void 0&&(Hi=js("canvas")),Hi.width=e.width,Hi.height=e.height;const s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jf=0;class ll{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oa(s[a].image)):r.push(oa(s[a]))}else r=oa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qf=0;const la=new B;class $t extends ws{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=Li,s=Li,r=fn,a=Kn,o=un,l=Bn,c=$t.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=ar(),this.name="",this.source=new ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(la).x}get height(){return this.source.getSize(la).y}get depth(){return this.source.getSize(la).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ho:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ho:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=mh;$t.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],m=l[2],x=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-m)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+m)<.1&&Math.abs(g+x)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(d+1)/2,E=(p+1)/2,M=(h+u)/4,T=(f+m)/4,D=(g+x)/4;return _>v&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=M/n,r=T/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=D/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=D/r),this.set(n,s,r,t),this}let y=Math.sqrt((x-g)*(x-g)+(f-m)*(f-m)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(x-g)/y,this.y=(f-m)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eu extends ws{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new $t(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ll(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends eu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ah extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tu extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),fr.subVectors(this.max,Ps),Gi.subVectors(e.a,Ps),Vi.subVectors(e.b,Ps),Wi.subVectors(e.c,Ps),Qn.subVectors(Vi,Gi),ei.subVectors(Wi,Vi),vi.subVectors(Gi,Wi);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-vi.z,vi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,vi.z,0,-vi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-vi.y,vi.x,0];return!ca(t,Gi,Vi,Wi,fr)||(t=[1,0,0,0,1,0,0,0,1],!ca(t,Gi,Vi,Wi,fr))?!1:(ur.crossVectors(Qn,ei),t=[ur.x,ur.y,ur.z],ca(t,Gi,Vi,Wi,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gn=[new B,new B,new B,new B,new B,new B,new B,new B],An=new B,hr=new Oi,Gi=new B,Vi=new B,Wi=new B,Qn=new B,ei=new B,vi=new B,Ps=new B,fr=new B,ur=new B,_i=new B;function ca(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){_i.fromArray(i,r);const o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const nu=new Oi,Ds=new B,ha=new B;class pi{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(ha)),this.expandByPoint(Ds.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vn=new B,fa=new B,dr=new B,ti=new B,ua=new B,pr=new B,da=new B;class iu{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fa.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(fa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(dr),o=ti.dot(this.direction),l=-ti.dot(dr),c=ti.lengthSq(),h=Math.abs(1-a*a);let f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const m=1/h;f*=m,u*=m,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(fa).addScaledVector(dr,u),d}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,s,r){ua.subVectors(t,e),pr.subVectors(n,e),da.crossVectors(ua,pr);let a=this.direction.dot(da),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,e);const l=o*this.direction.dot(pr.crossVectors(ti,pr));if(l<0)return null;const c=o*this.direction.dot(ua.cross(ti));if(c<0||l+c>a)return null;const h=-o*ti.dot(da);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,g,m,x){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,g,m,x)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,g,m,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=m,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,d=a*f,g=o*h,m=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-m*c,t[9]=-o*l,t[2]=m-u*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,g=c*h,m=c*f;t[0]=u+m*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=m+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,g=c*h,m=c*f;t[0]=u-m*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=m-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,g=o*h,m=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+m,t[1]=l*f,t[5]=m*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,g=o*l,m=o*c;t[0]=l*h,t[4]=m-u*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-m*f}else if(e.order==="XZY"){const u=a*l,d=a*c,g=o*l,m=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+m,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=m*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(su,e,ru)}lookAt(e,t,n){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ni.crossVectors(n,dn),ni.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ni.crossVectors(n,dn)),ni.normalize(),mr.crossVectors(dn,ni),s[0]=ni.x,s[4]=mr.x,s[8]=dn.x,s[1]=ni.y,s[5]=mr.y,s[9]=dn.y,s[2]=ni.z,s[6]=mr.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],m=n[6],x=n[10],p=n[14],y=n[3],_=n[7],v=n[11],E=n[15],M=s[0],T=s[4],D=s[8],w=s[12],b=s[1],A=s[5],U=s[9],L=s[13],G=s[2],z=s[6],N=s[10],I=s[14],R=s[3],W=s[7],P=s[11],H=s[15];return r[0]=a*M+o*b+l*G+c*R,r[4]=a*T+o*A+l*z+c*W,r[8]=a*D+o*U+l*N+c*P,r[12]=a*w+o*L+l*I+c*H,r[1]=h*M+f*b+u*G+d*R,r[5]=h*T+f*A+u*z+d*W,r[9]=h*D+f*U+u*N+d*P,r[13]=h*w+f*L+u*I+d*H,r[2]=g*M+m*b+x*G+p*R,r[6]=g*T+m*A+x*z+p*W,r[10]=g*D+m*U+x*N+p*P,r[14]=g*w+m*L+x*I+p*H,r[3]=y*M+_*b+v*G+E*R,r[7]=y*T+_*A+v*z+E*W,r[11]=y*D+_*U+v*N+E*P,r[15]=y*w+_*L+v*I+E*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],m=e[7],x=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*o*u+n*c*u+s*o*d-n*l*d)+m*(+t*l*d-t*c*u+r*a*u-s*a*d+s*c*h-r*l*h)+x*(+t*c*f-t*o*d-r*a*f+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-t*l*f+t*o*u+s*a*f-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],m=e[13],x=e[14],p=e[15],y=f*x*c-m*u*c+m*l*d-o*x*d-f*l*p+o*u*p,_=g*u*c-h*x*c-g*l*d+a*x*d+h*l*p-a*u*p,v=h*m*c-g*f*c+g*o*d-a*m*d-h*o*p+a*f*p,E=g*f*l-h*m*l-g*o*u+a*m*u+h*o*x-a*f*x,M=t*y+n*_+s*v+r*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=y*T,e[1]=(m*u*r-f*x*r-m*s*d+n*x*d+f*s*p-n*u*p)*T,e[2]=(o*x*r-m*l*r+m*s*c-n*x*c-o*s*p+n*l*p)*T,e[3]=(f*l*r-o*u*r-f*s*c+n*u*c+o*s*d-n*l*d)*T,e[4]=_*T,e[5]=(h*x*r-g*u*r+g*s*d-t*x*d-h*s*p+t*u*p)*T,e[6]=(g*l*r-a*x*r-g*s*c+t*x*c+a*s*p-t*l*p)*T,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*d+t*l*d)*T,e[8]=v*T,e[9]=(g*f*r-h*m*r-g*n*d+t*m*d+h*n*p-t*f*p)*T,e[10]=(a*m*r-g*o*r+g*n*c-t*m*c-a*n*p+t*o*p)*T,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*d-t*o*d)*T,e[12]=E*T,e[13]=(h*m*s-g*f*s+g*n*u-t*m*u-h*n*x+t*f*x)*T,e[14]=(g*o*s-a*m*s-g*n*l+t*m*l+a*n*x-t*o*x)*T,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*u+t*o*u)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,m=a*h,x=a*f,p=o*f,y=l*c,_=l*h,v=l*f,E=n.x,M=n.y,T=n.z;return s[0]=(1-(m+p))*E,s[1]=(d+v)*E,s[2]=(g-_)*E,s[3]=0,s[4]=(d-v)*M,s[5]=(1-(u+p))*M,s[6]=(x+y)*M,s[7]=0,s[8]=(g+_)*T,s[9]=(x-y)*T,s[10]=(1-(u+m))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=qi.set(s[0],s[1],s[2]).length();const a=qi.set(s[4],s[5],s[6]).length(),o=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);const c=1/r,h=1/a,f=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,t.setFromRotationMatrix(Tn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=On,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let g,m;if(l)g=r/(a-r),m=a*r/(a-r);else if(o===On)g=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Kr)g=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,m;if(l)g=1/(a-r),m=a/(a-r);else if(o===On)g=-2/(a-r),m=-(a+r)/(a-r);else if(o===Kr)g=-1/(a-r),m=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new B,Tn=new vt,su=new B(0,0,0),ru=new B(1,1,1),ni=new B,mr=new B,dn=new B,Dl=new vt,Il=new Bt;class En{constructor(e=0,t=0,n=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Il.setFromEuler(this),this.setFromQuaternion(Il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let au=0;const Ul=new B,Xi=new Bt,Wn=new vt,gr=new B,Is=new B,ou=new B,lu=new Bt,Fl=new B(1,0,0),Nl=new B(0,1,0),zl=new B(0,0,1),Ol={type:"added"},cu={type:"removed"},$i={type:"childadded",child:null},pa={type:"childremoved",child:null};class Yt extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new B,t=new En,n=new Bt,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new rt}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(Nl,e)}rotateZ(e){return this.rotateOnAxis(zl,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(Nl,e)}translateZ(e){return this.translateOnAxis(zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gr.copy(e):gr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Is,gr,this.up):Wn.lookAt(gr,Is,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ol),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cu),pa.child=e,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ol),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,ou),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new B(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new B,qn=new B,ma=new B,Xn=new B,Yi=new B,Ki=new B,kl=new B,ga=new B,xa=new B,va=new B,_a=new ht,ya=new ht,Ma=new ht;class Pn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),qn.subVectors(n,t),ma.subVectors(e,t);const a=Rn.dot(Rn),o=Rn.dot(qn),l=Rn.dot(ma),c=qn.dot(qn),h=qn.dot(ma),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return _a.setScalar(0),ya.setScalar(0),Ma.setScalar(0),_a.fromBufferAttribute(e,t),ya.fromBufferAttribute(e,n),Ma.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(_a,r.x),a.addScaledVector(ya,r.y),a.addScaledVector(Ma,r.z),a}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),qn.subVectors(e,t),Rn.cross(qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Rn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Yi.subVectors(s,n),Ki.subVectors(r,n),ga.subVectors(e,n);const l=Yi.dot(ga),c=Ki.dot(ga);if(l<=0&&c<=0)return t.copy(n);xa.subVectors(e,s);const h=Yi.dot(xa),f=Ki.dot(xa);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Yi,a);va.subVectors(e,r);const d=Yi.dot(va),g=Ki.dot(va);if(g>=0&&d<=g)return t.copy(r);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ki,o);const x=h*g-d*f;if(x<=0&&f-h>=0&&d-g>=0)return kl.subVectors(r,s),o=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(kl,o);const p=1/(x+m+u);return a=m*p,o=u*p,t.copy(n).addScaledVector(Yi,a).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},xr={h:0,s:0,l:0};function wa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=$f(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wa(a,r,e+1/3),this.g=wa(a,r,e),this.b=wa(a,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=Rh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return mt.workingToColorSpace(Jt.copy(this),e),Math.round(lt(Jt.r*255,0,255))*65536+Math.round(lt(Jt.g*255,0,255))*256+Math.round(lt(Jt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Jt.copy(this),t);const n=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Qt){mt.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,s=Jt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(xr);const n=sa(ii.h,xr.h,t),s=sa(ii.s,xr.s,t),r=sa(ii.l,xr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new qe;qe.NAMES=Rh;let hu=0;class bs extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=ls,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=eo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qa&&(n.blendSrc=this.blendSrc),this.blendDst!==eo&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ss extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new B,vr=new $e;let fu=0;class ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Al,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Al&&(e.usage=this.usage),e}}class xs extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cl extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uu=0;const yn=new vt,ba=new Yt,ji=new B,pn=new Oi,Us=new Oi,Wt=new B;class bt extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eh(e)?cl:xs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(pn.min,Us.min),pn.expandByPoint(Wt),Wt.addVectors(pn.max,Us.max),pn.expandByPoint(Wt)):(pn.expandByPoint(Us.min),pn.expandByPoint(Us.max))}pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(e,c),Wt.add(ji)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new B,l[D]=new B;const c=new B,h=new B,f=new B,u=new $e,d=new $e,g=new $e,m=new B,x=new B;function p(D,w,b){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,b),u.fromBufferAttribute(r,D),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(A),x.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(A),o[D].add(m),o[w].add(m),o[b].add(m),l[D].add(x),l[w].add(x),l[b].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,w=y.length;D<w;++D){const b=y[D],A=b.start,U=b.count;for(let L=A,G=A+U;L<G;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const _=new B,v=new B,E=new B,M=new B;function T(D){E.fromBufferAttribute(s,D),M.copy(E);const w=o[D];_.copy(w),_.sub(E.multiplyScalar(E.dot(w))).normalize(),v.crossVectors(M,w);const A=v.dot(l[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,A)}for(let D=0,w=y.length;D<w;++D){const b=y[D],A=b.start,U=b.count;for(let L=A,G=A+U;L<G;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(e)for(let u=0,d=e.count;u<d;u+=3){const g=e.getX(u+0),m=e.getX(u+1),x=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,x),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let m=0,x=l.length;m<x;m++){o.isInterleavedBufferAttribute?d=l[m]*o.data.stride+o.offset:d=l[m]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new ut(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new vt,yi=new iu,_r=new pi,Hl=new B,yr=new B,Mr=new B,wr=new B,Sa=new B,br=new B,Gl=new B,Sr=new B;class xt extends Yt{constructor(e=new bt,t=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Sa.fromBufferAttribute(f,e),a?br.addScaledVector(Sa,h):br.addScaledVector(Sa.sub(t),h))}t.add(br)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(_r.containsPoint(yi.origin)===!1&&(yi.intersectSphere(_r,Hl)===null||yi.origin.distanceToSquared(Hl)>(e.far-e.near)**2))&&(Bl.copy(r).invert(),yi.copy(e.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,m=u.length;g<m;g++){const x=u[g],p=a[x.materialIndex],y=Math.max(x.start,d.start),_=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,E=_;v<E;v+=3){const M=o.getX(v),T=o.getX(v+1),D=o.getX(v+2);s=Er(this,p,e,n,c,h,f,M,T,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let x=g,p=m;x<p;x+=3){const y=o.getX(x),_=o.getX(x+1),v=o.getX(x+2);s=Er(this,a,e,n,c,h,f,y,_,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,m=u.length;g<m;g++){const x=u[g],p=a[x.materialIndex],y=Math.max(x.start,d.start),_=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,E=_;v<E;v+=3){const M=v,T=v+1,D=v+2;s=Er(this,p,e,n,c,h,f,M,T,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let x=g,p=m;x<p;x+=3){const y=x,_=x+1,v=x+2;s=Er(this,a,e,n,c,h,f,y,_,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function du(i,e,t,n,s,r,a,o){let l;if(e.side===sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ui,o),l===null)return null;Sr.copy(o),Sr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sr);return c<t.near||c>t.far?null:{distance:c,point:Sr.clone(),object:i}}function Er(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,yr),i.getVertexPosition(l,Mr),i.getVertexPosition(c,wr);const h=du(i,e,t,n,yr,Mr,wr,Gl);if(h){const f=new B;Pn.getBarycoord(Gl,yr,Mr,wr,f),s&&(h.uv=Pn.getInterpolatedAttribute(s,o,l,c,f,new $e)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,o,l,c,f,new $e)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new B,materialIndex:0};Pn.getNormal(yr,Mr,wr,u.normal),h.face=u,h.barycoord=f}return h}class gi extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(f,2));function g(m,x,p,y,_,v,E,M,T,D,w){const b=v/T,A=E/D,U=v/2,L=E/2,G=M/2,z=T+1,N=D+1;let I=0,R=0;const W=new B;for(let P=0;P<N;P++){const H=P*A-L;for(let J=0;J<z;J++){const he=J*b-U;W[m]=he*y,W[x]=H*_,W[p]=G,c.push(W.x,W.y,W.z),W[m]=0,W[x]=0,W[p]=M>0?1:-1,h.push(W.x,W.y,W.z),f.push(J/T),f.push(1-P/D),I+=1}}for(let P=0;P<D;P++)for(let H=0;H<T;H++){const J=u+H+z*P,he=u+H+z*(P+1),se=u+(H+1)+z*(P+1),Q=u+(H+1)+z*P;l.push(J,he,Q),l.push(he,se,Q),R+=6}o.addGroup(d,R,w),d+=R,u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function nn(i){const e={};for(let t=0;t<i.length;t++){const n=vs(i[t]);for(const s in n)e[s]=n[s]}return e}function pu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ch(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const mu={clone:vs,merge:nn};var gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=pu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lh extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new B,Vl=new $e,Wl=new $e;class Sn extends Lh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Vl,Wl),t.subVectors(Wl,Vl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,Ji=1;class vu extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(Zi,Ji,e,t);s.layers=this.layers,this.add(s);const r=new Sn(Zi,Ji,e,t);r.layers=this.layers,this.add(r);const a=new Sn(Zi,Ji,e,t);a.layers=this.layers,this.add(a);const o=new Sn(Zi,Ji,e,t);o.layers=this.layers,this.add(o);const l=new Sn(Zi,Ji,e,t);l.layers=this.layers,this.add(l);const c=new Sn(Zi,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ph extends $t{constructor(e=[],t=ds,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _u extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ph(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:hi});r.uniforms.tEquirect.value=t;const a=new xt(s,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=fn),new vu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Ft extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yu={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const x=t.getJointPose(m,n),p=this._getHandJoint(c,m);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new hl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Go extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _s extends $t{constructor(e=null,t=1,n=1,s,r,a,o,l,c=tn,h=tn,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn extends ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qi=new vt,ql=new vt,Ar=[],Xl=new Oi,Mu=new vt,Fs=new xt,Ns=new pi;class Ni extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),Xl.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Xl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),Ns.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),e.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),ql.multiplyMatrices(n,Qi),Fs.matrixWorld=ql,Fs.raycast(e,Ar);for(let a=0,o=Ar.length;a<o;a++){const l=Ar[a];l.instanceId=r,l.object=this,t.push(l)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new kn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _s(new Float32Array(s*this.count),s,this.count,cs,Dn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Aa=new B,wu=new B,bu=new rt;class Ai{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Aa.subVectors(n,t).cross(wu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bu.getNormalMatrix(e),s=this.coplanarPoint(Aa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new pi,Su=new $e(.5,.5),Tr=new B;class Jr{constructor(e=new Ai,t=new Ai,n=new Ai,s=new Ai,r=new Ai,a=new Ai){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],m=r[9],x=r[10],p=r[11],y=r[12],_=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-a,d-h,p-g,E-y).normalize(),s[1].setComponents(c+a,d+h,p+g,E+y).normalize(),s[2].setComponents(c+o,d+f,p+m,E+_).normalize(),s[3].setComponents(c-o,d-f,p-m,E-_).normalize(),n)s[4].setComponents(l,u,x,v).normalize(),s[5].setComponents(c-l,d-u,p-x,E-v).normalize();else if(s[4].setComponents(c-l,d-u,p-x,E-v).normalize(),t===On)s[5].setComponents(c+l,d+u,p+x,E+v).normalize();else if(t===Kr)s[5].setComponents(l,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=Su.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Tr.x=s.normal.x>0?e.max.x:e.min.x,Tr.y=s.normal.y>0?e.max.y:e.min.y,Tr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eu extends $t{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fl extends $t{constructor(e,t,n=di,s,r,a,o=tn,l=tn,c,h=Ys,f=1){if(h!==Ys&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ll(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dh extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qr extends bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const m=[],x=n/2;let p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(d,2));function y(){const v=new B,E=new B;let M=0;const T=(t-e)/n;for(let D=0;D<=r;D++){const w=[],b=D/r,A=b*(t-e)+e;for(let U=0;U<=s;U++){const L=U/s,G=L*l+o,z=Math.sin(G),N=Math.cos(G);E.x=A*z,E.y=-b*n+x,E.z=A*N,f.push(E.x,E.y,E.z),v.set(z,T,N).normalize(),u.push(v.x,v.y,v.z),d.push(L,1-b),w.push(g++)}m.push(w)}for(let D=0;D<s;D++)for(let w=0;w<r;w++){const b=m[w][D],A=m[w+1][D],U=m[w+1][D+1],L=m[w][D+1];(e>0||w!==0)&&(h.push(b,A,L),M+=3),(t>0||w!==r-1)&&(h.push(A,U,L),M+=3)}c.addGroup(p,M,0),p+=M}function _(v){const E=g,M=new $e,T=new B;let D=0;const w=v===!0?e:t,b=v===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,x*b,0),u.push(0,b,0),d.push(.5,.5),g++;const A=g;for(let U=0;U<=s;U++){const G=U/s*l+o,z=Math.cos(G),N=Math.sin(G);T.x=w*N,T.y=x*b,T.z=w*z,f.push(T.x,T.y,T.z),u.push(0,b,0),M.x=z*.5+.5,M.y=N*.5*b+.5,d.push(M.x,M.y),g++}for(let U=0;U<s;U++){const L=E+U,G=A+U;v===!0?h.push(G,G+1,L):h.push(G+1,G,L),D+=3}c.addGroup(p,D,v===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}function Au(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Ih(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Pu(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let h=-1/0,f=-1/0;for(let u=t;u<s;u+=t){const d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Js(r,a,t,o,l,c,0),a}function Ih(i,e,t,n,s){let r;if(s===Gu(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=$l(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=$l(a/n|0,i[a],i[a+1],r);return r&&ys(r,r.next)&&(er(r),r=r.next),r}function zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ys(t,t.next)||Ct(t.prev,t,t.next)===0)){if(er(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Js(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Nu(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Ru(i,n,s,r):Tu(i)){e.push(l.i,i.i,c.i),er(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Cu(zi(i),e),Js(i,e,t,n,s,r,2)):a===2&&Lu(i,e,t,n,s,r):Js(zi(i),e,t,n,s,r,1);break}}}function Tu(i){const e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Vs(s,o,r,l,a,c,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ru(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Ct(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),m=Math.max(o,l,c),x=Math.max(h,f,u),p=Vo(d,g,e,t,n),y=Vo(m,x,e,t,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=x&&_!==s&&_!==a&&Vs(o,h,l,f,c,u,_.x,_.y)&&Ct(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=m&&v.y>=g&&v.y<=x&&v!==s&&v!==a&&Vs(o,h,l,f,c,u,v.x,v.y)&&Ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=x&&_!==s&&_!==a&&Vs(o,h,l,f,c,u,_.x,_.y)&&Ct(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=m&&v.y>=g&&v.y<=x&&v!==s&&v!==a&&Vs(o,h,l,f,c,u,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Cu(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ys(n,s)&&Fh(n,t,t.next,s)&&Qs(n,s)&&Qs(s,n)&&(e.push(n.i,t.i,s.i),er(t),er(t.next),t=i=s),t=t.next}while(t!==i);return zi(t)}function Lu(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ku(a,o)){let l=Nh(a,o);a=zi(a,a.next),l=zi(l,l.next),Js(a,e,t,n,s,r,0),Js(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Pu(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Ih(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ou(c))}s.sort(Du);for(let r=0;r<s.length;r++)t=Iu(s[r],t);return t}function Du(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Iu(i,e){const t=Uu(i,e);if(!t)return e;const n=Nh(t,i);return zi(n,n.next),zi(t,t.next)}function Uu(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(ys(i,t))return t;do{if(ys(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Uh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);Qs(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Fu(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Fu(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function Nu(i,e,t,n){let s=i;do s.z===0&&(s.z=Vo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,zu(s)}function zu(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Vo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ou(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Uh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Vs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Uh(i,e,t,n,s,r,a,o)}function ku(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Bu(i,e)&&(Qs(i,e)&&Qs(e,i)&&Hu(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||ys(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ys(i,e){return i.x===e.x&&i.y===e.y}function Fh(i,e,t,n){const s=Cr(Ct(i,e,t)),r=Cr(Ct(i,e,n)),a=Cr(Ct(t,n,i)),o=Cr(Ct(t,n,e));return!!(s!==r&&a!==o||s===0&&Rr(i,t,e)||r===0&&Rr(i,n,e)||a===0&&Rr(t,i,n)||o===0&&Rr(t,e,n))}function Rr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Cr(i){return i>0?1:i<0?-1:0}function Bu(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Fh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qs(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function Hu(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Nh(i,e){const t=Wo(i.i,i.x,i.y),n=Wo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function $l(i,e,t,n){const s=Wo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gu(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Vu{static triangulate(e,t,n=2){return Au(e,t,n)}}class tr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return tr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Yl(e),Kl(n,e);let a=e.length;t.forEach(Yl);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Kl(n,t[l]);const o=Vu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Yl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Kl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ea extends bt{constructor(e=[new $e(0,-.5),new $e(.5,0),new $e(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=lt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,f=new B,u=new $e,d=new B,g=new B,m=new B;let x=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-x,d.z=p*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-x,d.z=p*0,g.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(g)}for(let y=0;y<=t;y++){const _=n+y*h*s,v=Math.sin(_),E=Math.cos(_);for(let M=0;M<=e.length-1;M++){f.x=e[M].x*v,f.y=e[M].y,f.z=e[M].x*E,a.push(f.x,f.y,f.z),u.x=y/t,u.y=M/(e.length-1),o.push(u.x,u.y);const T=l[3*M+0]*v,D=l[3*M+1],w=l[3*M+0]*E;c.push(T,D,w)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const v=_+y*e.length,E=v,M=v+e.length,T=v+e.length+1,D=v+1;r.push(E,M,D),r.push(T,D,M)}this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("uv",new ct(o,2)),this.setAttribute("normal",new ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.points,e.segments,e.phiStart,e.phiLength)}}class mi extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],g=[],m=[],x=[];for(let p=0;p<h;p++){const y=p*u-a;for(let _=0;_<c;_++){const v=_*f-r;g.push(v,-y,0),m.push(0,0,1),x.push(_/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const _=y+c*p,v=y+c*(p+1),E=y+1+c*(p+1),M=y+1+c*p;d.push(_,v,M),d.push(v,E,M)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(m,3)),this.setAttribute("uv",new ct(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.widthSegments,e.heightSegments)}}class ul extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new B,u=new B,d=[],g=[],m=[],x=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const M=E/t;f.x=-e*Math.cos(s+M*r)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(s+M*r)*Math.sin(a+_*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),m.push(u.x,u.y,u.z),x.push(M+v,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=h[p][y+1],v=h[p][y],E=h[p+1][y],M=h[p+1][y+1];(p!==0||a>0)&&d.push(_,v,M),(p!==n-1||l<Math.PI)&&d.push(v,E,M)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(m,3)),this.setAttribute("uv",new ct(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dl extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new B,f=new B,u=new B;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const m=g/s*r,x=d/n*Math.PI*2;f.x=(e+t*Math.cos(x))*Math.cos(m),f.y=(e+t*Math.cos(x))*Math.sin(m),f.z=t*Math.sin(x),o.push(f.x,f.y,f.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const m=(s+1)*d+g-1,x=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(m,x,y),a.push(x,p,y)}this.setIndex(a),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Es extends bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zh extends Es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xn extends bs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oh extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wu extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ta={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qu{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Xu=new qu;class pl{constructor(e){this.manager=e!==void 0?e:Xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}pl.DEFAULT_MATERIAL_NAME="__DEFAULT";const es=new WeakMap;class $u extends pl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ta.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=es.get(a);f===void 0&&(f=[],es.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=js("img");function l(){h(),t&&t(this);const f=es.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}es.delete(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),Ta.remove(`image:${e}`);const u=es.get(this)||[];for(let d=0;d<u.length;d++){const g=u[d];g.onError&&g.onError(f)}es.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ta.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class kh extends pl{constructor(e){super(e)}load(e,t,n,s){const r=new $t,a=new $u(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Bh extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Yu extends Bh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ra=new vt,jl=new B,Zl=new B;class Ku{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jl.setFromMatrixPosition(e.matrixWorld),t.position.copy(jl),Zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zl),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ml extends Lh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ju extends Ku{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zu extends Bh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new ju}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hh extends bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ju extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Jl(i,e,t,n){const s=Qu(n);switch(t){case yh:return i*e;case cs:return i*e/s.components*s.byteLength;case sl:return i*e/s.components*s.byteLength;case wh:return i*e*2/s.components*s.byteLength;case rl:return i*e*2/s.components*s.byteLength;case Mh:return i*e*3/s.components*s.byteLength;case un:return i*e*4/s.components*s.byteLength;case al:return i*e*4/s.components*s.byteLength;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:case go:return Math.max(i,16)*Math.max(e,8)/4;case uo:case mo:return Math.max(i,8)*Math.max(e,8)/2;case xo:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case To:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Uo:case Fo:case No:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zo:case Oo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ko:case Bo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qu(i){switch(i){case Bn:case gh:return{byteLength:1,components:1};case Xs:case xh:case Fi:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case di:case tl:case Dn:return{byteLength:4,components:1};case vh:case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ed(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],m=f[d];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++u,f[u]=m)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const m=f[d];i.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nd=`#ifdef USE_ALPHAHASH
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
#endif`,id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,od=`#ifdef USE_AOMAP
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
#endif`,ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cd=`#ifdef USE_BATCHING
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
#endif`,hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pd=`#ifdef USE_IRIDESCENCE
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
#endif`,md=`#ifdef USE_BUMPMAP
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sd=`#define PI 3.141592653589793
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
} // validated`,Ed=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ad=`vec3 transformedNormal = objectNormal;
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
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
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
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xd=`uniform bool receiveShadow;
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
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
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
#endif`,Qd=`struct PhysicalMaterial {
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
}`,ep=`
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hp=`#if defined( USE_POINTS_UV )
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
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bp=`#ifdef USE_NORMALMAP
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
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kp=`float getShadowMask() {
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
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t0=`uniform sampler2D t2D;
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`#include <common>
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
}`,o0=`#if DEPTH_PACKING == 3200
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
}`,l0=`#define DISTANCE
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
}`,c0=`#define DISTANCE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`uniform float scale;
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
}`,d0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#define LAMBERT
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
}`,x0=`#define LAMBERT
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
}`,v0=`#define MATCAP
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
}`,_0=`#define MATCAP
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
}`,y0=`#define NORMAL
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
}`,M0=`#define NORMAL
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
}`,w0=`#define PHONG
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
}`,b0=`#define PHONG
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
}`,S0=`#define STANDARD
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
}`,E0=`#define STANDARD
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
}`,A0=`#define TOON
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
}`,T0=`#define TOON
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
}`,R0=`uniform float size;
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
}`,C0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,P0=`uniform vec3 color;
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
}`,D0=`uniform float rotation;
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
}`,I0=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:td,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:ad,aomap_fragment:od,aomap_pars_fragment:ld,batching_pars_vertex:cd,batching_vertex:hd,begin_vertex:fd,beginnormal_vertex:ud,bsdfs:dd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:xd,clipping_planes_pars_vertex:vd,clipping_planes_vertex:_d,color_fragment:yd,color_pars_fragment:Md,color_pars_vertex:wd,color_vertex:bd,common:Sd,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:Ad,displacementmap_pars_vertex:Td,displacementmap_vertex:Rd,emissivemap_fragment:Cd,emissivemap_pars_fragment:Ld,colorspace_fragment:Pd,colorspace_pars_fragment:Dd,envmap_fragment:Id,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Fd,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:$d,envmap_vertex:zd,fog_vertex:Od,fog_pars_vertex:kd,fog_fragment:Bd,fog_pars_fragment:Hd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:qd,lights_pars_begin:Xd,lights_toon_fragment:Yd,lights_toon_pars_fragment:Kd,lights_phong_fragment:jd,lights_phong_pars_fragment:Zd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:ep,lights_fragment_maps:tp,lights_fragment_end:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:ap,map_fragment:op,map_pars_fragment:lp,map_particle_fragment:cp,map_particle_pars_fragment:hp,metalnessmap_fragment:fp,metalnessmap_pars_fragment:up,morphinstance_vertex:dp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:xp,normal_fragment_begin:vp,normal_fragment_maps:_p,normal_pars_fragment:yp,normal_pars_vertex:Mp,normal_vertex:wp,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Tp,opaque_fragment:Rp,packing:Cp,premultiplied_alpha_fragment:Lp,project_vertex:Pp,dithering_fragment:Dp,dithering_pars_fragment:Ip,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:zp,shadowmap_vertex:Op,shadowmask_pars_fragment:kp,skinbase_vertex:Bp,skinning_pars_vertex:Hp,skinning_vertex:Gp,skinnormal_vertex:Vp,specularmap_fragment:Wp,specularmap_pars_fragment:qp,tonemapping_fragment:Xp,tonemapping_pars_fragment:$p,transmission_fragment:Yp,transmission_pars_fragment:Kp,uv_pars_fragment:jp,uv_pars_vertex:Zp,uv_vertex:Jp,worldpos_vertex:Qp,background_vert:e0,background_frag:t0,backgroundCube_vert:n0,backgroundCube_frag:i0,cube_vert:s0,cube_frag:r0,depth_vert:a0,depth_frag:o0,distanceRGBA_vert:l0,distanceRGBA_frag:c0,equirect_vert:h0,equirect_frag:f0,linedashed_vert:u0,linedashed_frag:d0,meshbasic_vert:p0,meshbasic_frag:m0,meshlambert_vert:g0,meshlambert_frag:x0,meshmatcap_vert:v0,meshmatcap_frag:_0,meshnormal_vert:y0,meshnormal_frag:M0,meshphong_vert:w0,meshphong_frag:b0,meshphysical_vert:S0,meshphysical_frag:E0,meshtoon_vert:A0,meshtoon_frag:T0,points_vert:R0,points_frag:C0,shadow_vert:L0,shadow_frag:P0,sprite_vert:D0,sprite_frag:I0},Pe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},zn={basic:{uniforms:nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:nn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:nn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:nn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:nn([Pe.points,Pe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:nn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:nn([Pe.common,Pe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:nn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:nn([Pe.sprite,Pe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:nn([Pe.common,Pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:nn([Pe.lights,Pe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};zn.physical={uniforms:nn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Lr={r:0,b:0,g:0},wi=new En,U0=new vt;function F0(i,e,t,n,s,r,a){const o=new qe(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function m(_){let v=!1;const E=g(_);E===null?p(o,l):E&&E.isColor&&(p(E,1),v=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===Zr)?(h===void 0&&(h=new xt(new gi(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:vs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),wi.copy(v.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(wi)),h.material.toneMapped=mt.getTransfer(E.colorSpace)!==wt,(f!==E||u!==E.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=E,u=E.version,d=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new xt(new mi(2,2),new vn({name:"BackgroundMaterial",uniforms:vs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=mt.getTransfer(E.colorSpace)!==wt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||u!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,u=E.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(Lr,Ch(i)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,v,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:m,addToRenderList:x,dispose:y}}function N0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(b,A,U,L,G){let z=!1;const N=f(L,U,A);r!==N&&(r=N,c(r.object)),z=d(b,L,U,G),z&&g(b,L,U,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,v(b,A,U,L),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function f(b,A,U){const L=U.wireframe===!0;let G=n[b.id];G===void 0&&(G={},n[b.id]=G);let z=G[A.id];z===void 0&&(z={},G[A.id]=z);let N=z[L];return N===void 0&&(N=u(l()),z[L]=N),N}function u(b){const A=[],U=[],L=[];for(let G=0;G<t;G++)A[G]=0,U[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:L,object:b,attributes:{},index:null}}function d(b,A,U,L){const G=r.attributes,z=A.attributes;let N=0;const I=U.getAttributes();for(const R in I)if(I[R].location>=0){const P=G[R];let H=z[R];if(H===void 0&&(R==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),R==="instanceColor"&&b.instanceColor&&(H=b.instanceColor)),P===void 0||P.attribute!==H||H&&P.data!==H.data)return!0;N++}return r.attributesNum!==N||r.index!==L}function g(b,A,U,L){const G={},z=A.attributes;let N=0;const I=U.getAttributes();for(const R in I)if(I[R].location>=0){let P=z[R];P===void 0&&(R==="instanceMatrix"&&b.instanceMatrix&&(P=b.instanceMatrix),R==="instanceColor"&&b.instanceColor&&(P=b.instanceColor));const H={};H.attribute=P,P&&P.data&&(H.data=P.data),G[R]=H,N++}r.attributes=G,r.attributesNum=N,r.index=L}function m(){const b=r.newAttributes;for(let A=0,U=b.length;A<U;A++)b[A]=0}function x(b){p(b,0)}function p(b,A){const U=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;U[b]=1,L[b]===0&&(i.enableVertexAttribArray(b),L[b]=1),G[b]!==A&&(i.vertexAttribDivisor(b,A),G[b]=A)}function y(){const b=r.newAttributes,A=r.enabledAttributes;for(let U=0,L=A.length;U<L;U++)A[U]!==b[U]&&(i.disableVertexAttribArray(U),A[U]=0)}function _(b,A,U,L,G,z,N){N===!0?i.vertexAttribIPointer(b,A,U,G,z):i.vertexAttribPointer(b,A,U,L,G,z)}function v(b,A,U,L){m();const G=L.attributes,z=U.getAttributes(),N=A.defaultAttributeValues;for(const I in z){const R=z[I];if(R.location>=0){let W=G[I];if(W===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(W=b.instanceColor)),W!==void 0){const P=W.normalized,H=W.itemSize,J=e.get(W);if(J===void 0)continue;const he=J.buffer,se=J.type,Q=J.bytesPerElement,q=se===i.INT||se===i.UNSIGNED_INT||W.gpuType===tl;if(W.isInterleavedBufferAttribute){const K=W.data,ue=K.stride,_e=W.offset;if(K.isInstancedInterleavedBuffer){for(let Ee=0;Ee<R.locationSize;Ee++)p(R.location+Ee,K.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ee=0;Ee<R.locationSize;Ee++)x(R.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,he);for(let Ee=0;Ee<R.locationSize;Ee++)_(R.location+Ee,H/R.locationSize,se,P,ue*Q,(_e+H/R.locationSize*Ee)*Q,q)}else{if(W.isInstancedBufferAttribute){for(let K=0;K<R.locationSize;K++)p(R.location+K,W.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let K=0;K<R.locationSize;K++)x(R.location+K);i.bindBuffer(i.ARRAY_BUFFER,he);for(let K=0;K<R.locationSize;K++)_(R.location+K,H/R.locationSize,se,P,H*Q,H/R.locationSize*K*Q,q)}}else if(N!==void 0){const P=N[I];if(P!==void 0)switch(P.length){case 2:i.vertexAttrib2fv(R.location,P);break;case 3:i.vertexAttrib3fv(R.location,P);break;case 4:i.vertexAttrib4fv(R.location,P);break;default:i.vertexAttrib1fv(R.location,P)}}}}y()}function E(){D();for(const b in n){const A=n[b];for(const U in A){const L=A[U];for(const G in L)h(L[G].object),delete L[G];delete A[U]}delete n[b]}}function M(b){if(n[b.id]===void 0)return;const A=n[b.id];for(const U in A){const L=A[U];for(const G in L)h(L[G].object),delete L[G];delete A[U]}delete n[b.id]}function T(b){for(const A in n){const U=n[A];if(U[b.id]===void 0)continue;const L=U[b.id];for(const G in L)h(L[G].object),delete L[G];delete U[b.id]}}function D(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:x,disableUnusedAttributes:y}}function z0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];t.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let m=0;m<f;m++)g+=h[m]*u[m];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function O0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const D=T===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Bn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Dn&&!D)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:E,maxSamples:M}}function k0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ai,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,m=f.clipIntersection,x=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!x)r?h(null):c();else{const y=r?0:n,_=y*4;let v=p.clippingState||null;l.value=v,v=h(g,u,_,d);for(let E=0;E!==_;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){const m=f!==null?f.length:0;let x=null;if(m!==0){if(x=l.value,g!==!0||x===null){const p=d+m*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,v=d;_!==m;++_,v+=4)a.copy(f[_]).applyMatrix4(y,o),a.normal.toArray(x,v),x[v+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,x}}function B0(i){let e=new WeakMap;function t(a,o){return o===lo?a.mapping=ds:o===co&&(a.mapping=ps),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===lo||o===co)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _u(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const as=4,Ql=[.125,.215,.35,.446,.526,.582],Ci=20,Ca=new ml,ec=new qe;let La=null,Pa=0,Da=0,Ia=!1;const Ti=(1+Math.sqrt(5))/2,ts=1/Ti,tc=[new B(-Ti,ts,0),new B(Ti,ts,0),new B(-ts,0,Ti),new B(ts,0,Ti),new B(0,Ti,-ts),new B(0,Ti,ts),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],H0=new B;class qo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=H0}=r;La=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Pa,Da),this._renderer.xr.enabled=Ia,e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Fi,format:un,colorSpace:ms,depthBuffer:!1},s=nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G0(r)),this._blurMaterial=V0(r,e,t)}return s}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,s,r){const l=new Sn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(ec),f.toneMapping=fi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const m=new Ss({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),x=new xt(new gi,m);let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(ec),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const E=this._cubeSize;Pr(s,v*E,_>2?E:0,E,E),f.setRenderTarget(s),p&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ds||e.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Pr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tc[(s-r-1)%tc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new xt(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ci-1),m=r/g,x=isFinite(r)?1+Math.floor(h*m):Ci;x>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ci}`);const p=[];let y=0;for(let T=0;T<Ci;++T){const D=T/m,w=Math.exp(-D*D/2);p.push(w),T===0?y+=w:T<x&&(y+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const v=this._sizeLods[s],E=3*v*(s>_-as?s-_+as:0),M=4*(this._cubeSize-v);Pr(t,E,M,3*v,2*v),l.setRenderTarget(t),l.render(f,Ca)}}function G0(i){const e=[],t=[],n=[];let s=i;const r=i-as+1+Ql.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-as?l=Ql[a-i+as-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,m=3,x=2,p=1,y=new Float32Array(m*g*d),_=new Float32Array(x*g*d),v=new Float32Array(p*g*d);for(let M=0;M<d;M++){const T=M%3*2/3-1,D=M>2?0:-1,w=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];y.set(w,m*g*M),_.set(u,x*g*M);const b=[M,M,M,M,M,M];v.set(b,p*g*M)}const E=new bt;E.setAttribute("position",new ut(y,m)),E.setAttribute("uv",new ut(_,x)),E.setAttribute("faceIndex",new ut(v,p)),e.push(E),s>as&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nc(i,e,t){const n=new Jn(i,e,t);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function V0(i,e,t){const n=new Float32Array(Ci),s=new B(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ic(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function sc(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}function W0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===lo||l===co,h=l===ds||l===ps;if(c||h){let f=e.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new qo(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new qo(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function q0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function X0(i,e,t,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,g=f.attributes.position;let m=0;if(d!==null){const y=d.array;m=d.version;for(let _=0,v=y.length;_<v;_+=3){const E=y[_+0],M=y[_+1],T=y[_+2];u.push(E,M,M,T,T,E)}}else if(g!==void 0){const y=g.array;m=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){const E=_+0,M=_+1,T=_+2;u.push(E,M,M,T,T,E)}}else return;const x=new(Eh(u)?cl:xs)(u,1);x.version=m;const p=r.get(f);p&&e.remove(p),r.set(f,x)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function $0(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,u*a,g),t.update(d,n,g))}function h(u,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,g);let x=0;for(let p=0;p<g;p++)x+=d[p];t.update(x,n,1)}function f(u,d,g,m){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<u.length;p++)c(u[p]/a,d[p],m[p]);else{x.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,m,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*m[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Y0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function K0(i,e,t){const n=new WeakMap,s=new ht;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;d===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let v=o.attributes.position.count*_,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const M=new Float32Array(v*E*4*f),T=new Ah(M,v,E,f);T.type=Dn,T.needsUpdate=!0;const D=_*4;for(let b=0;b<f;b++){const A=x[b],U=p[b],L=y[b],G=v*E*4*b;for(let z=0;z<A.count;z++){const N=z*D;d===!0&&(s.fromBufferAttribute(A,z),M[G+N+0]=s.x,M[G+N+1]=s.y,M[G+N+2]=s.z,M[G+N+3]=0),g===!0&&(s.fromBufferAttribute(U,z),M[G+N+4]=s.x,M[G+N+5]=s.y,M[G+N+6]=s.z,M[G+N+7]=0),m===!0&&(s.fromBufferAttribute(L,z),M[G+N+8]=s.x,M[G+N+9]=s.y,M[G+N+10]=s.z,M[G+N+11]=L.itemSize===4?s.w:1)}}u={count:f,texture:T,size:new $e(v,E)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function j0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Vh=new $t,rc=new fl(1,1),Wh=new Ah,qh=new tu,Xh=new Ph,ac=[],oc=[],lc=new Float32Array(16),cc=new Float32Array(9),hc=new Float32Array(4);function As(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ac[s];if(r===void 0&&(r=new Float32Array(s),ac[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ta(i,e){let t=oc[e];t===void 0&&(t=new Int32Array(e),oc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Z0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function Q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;hc.set(n),i.uniformMatrix2fv(this.addr,!1,hc),Gt(t,n)}}function nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;cc.set(n),i.uniformMatrix3fv(this.addr,!1,cc),Gt(t,n)}}function im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;lc.set(n),i.uniformMatrix4fv(this.addr,!1,lc),Gt(t,n)}}function sm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function lm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function um(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rc.compareFunction=Sh,r=rc):r=Vh,t.setTexture2D(e||r,s)}function dm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qh,s)}function pm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xh,s)}function mm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wh,s)}function gm(i){switch(i){case 5126:return Z0;case 35664:return J0;case 35665:return Q0;case 35666:return em;case 35674:return tm;case 35675:return nm;case 35676:return im;case 5124:case 35670:return sm;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return om;case 5125:return lm;case 36294:return cm;case 36295:return hm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}function xm(i,e){i.uniform1fv(this.addr,e)}function vm(i,e){const t=As(e,this.size,2);i.uniform2fv(this.addr,t)}function _m(i,e){const t=As(e,this.size,3);i.uniform3fv(this.addr,t)}function ym(i,e){const t=As(e,this.size,4);i.uniform4fv(this.addr,t)}function Mm(i,e){const t=As(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wm(i,e){const t=As(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bm(i,e){const t=As(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sm(i,e){i.uniform1iv(this.addr,e)}function Em(i,e){i.uniform2iv(this.addr,e)}function Am(i,e){i.uniform3iv(this.addr,e)}function Tm(i,e){i.uniform4iv(this.addr,e)}function Rm(i,e){i.uniform1uiv(this.addr,e)}function Cm(i,e){i.uniform2uiv(this.addr,e)}function Lm(i,e){i.uniform3uiv(this.addr,e)}function Pm(i,e){i.uniform4uiv(this.addr,e)}function Dm(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Vh,r[a])}function Im(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qh,r[a])}function Um(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xh,r[a])}function Fm(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wh,r[a])}function Nm(i){switch(i){case 5126:return xm;case 35664:return vm;case 35665:return _m;case 35666:return ym;case 35674:return Mm;case 35675:return wm;case 35676:return bm;case 5124:case 35670:return Sm;case 35667:case 35671:return Em;case 35668:case 35672:return Am;case 35669:case 35673:return Tm;case 5125:return Rm;case 36294:return Cm;case 36295:return Lm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Fm}}class zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gm(t.type)}}class Om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nm(t.type)}}class km{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function fc(i,e){i.seq.push(e),i.map[e.id]=e}function Bm(i,e,t){const n=i.name,s=n.length;for(Ua.lastIndex=0;;){const r=Ua.exec(n),a=Ua.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fc(t,c===void 0?new zm(o,i,e):new Om(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new km(o),fc(t,f)),t=f}}}class qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Bm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function uc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Hm=37297;let Gm=0;function Vm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const dc=new rt;function Wm(i){mt._getMatrix(dc,mt.workingColorSpace,i);const e=`mat3( ${dc.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case Yr:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function pc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Vm(i.getShaderSource(e),o)}else return r}function qm(i,e){const t=Wm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xm(i,e){let t;switch(e){case Pf:t="Linear";break;case Df:t="Reinhard";break;case If:t="Cineon";break;case ph:t="ACESFilmic";break;case Ff:t="AgX";break;case Nf:t="Neutral";break;case Uf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dr=new B;function $m(){mt.getLuminanceCoefficients(Dr);const i=Dr.x.toFixed(4),e=Dr.y.toFixed(4),t=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function Km(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ws(i){return i!==""}function mc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(i){return i.replace(Zm,Qm)}const Jm=new Map;function Qm(i,e){let t=st[e];if(t===void 0){const n=Jm.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xo(t)}const eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(eg,tg)}function tg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ng(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function ig(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case ps:e="ENVMAP_TYPE_CUBE";break;case Zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function rg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case el:e="ENVMAP_BLENDING_MULTIPLY";break;case Cf:e="ENVMAP_BLENDING_MIX";break;case Lf:e="ENVMAP_BLENDING_ADD";break}return e}function ag(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function og(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ng(t),c=ig(t),h=sg(t),f=rg(t),u=ag(t),d=Ym(t),g=Km(r),m=s.createProgram();let x,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(x=[vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?st.tonemapping_pars_fragment:"",t.toneMapping!==fi?Xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,qm("linearToOutputTexel",t.outputColorSpace),$m(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),a=Xo(a),a=mc(a,t),a=gc(a,t),o=Xo(o),o=mc(o,t),o=gc(o,t),a=xc(a),o=xc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+x+a,v=y+p+o,E=uc(s,s.VERTEX_SHADER,_),M=uc(s,s.FRAGMENT_SHADER,v);s.attachShader(m,E),s.attachShader(m,M),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(A){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(m)||"",L=s.getShaderInfoLog(E)||"",G=s.getShaderInfoLog(M)||"",z=U.trim(),N=L.trim(),I=G.trim();let R=!0,W=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(R=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,M);else{const P=pc(s,E,"vertex"),H=pc(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+P+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||I==="")&&(W=!1);W&&(A.diagnostics={runnable:R,programLog:z,vertexShader:{log:N,prefix:x},fragmentShader:{log:I,prefix:p}})}s.deleteShader(E),s.deleteShader(M),D=new qr(s,m),w=jm(s,m)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(m,Hm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=M,this}let lg=0;class cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hg(e),t.set(e,n)),n}}class hg{constructor(e){this.id=lg++,this.code=e,this.usedTimes=0}}function fg(i,e,t,n,s,r,a){const o=new Th,l=new cg,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w){return c.add(w),w===0?"uv":`uv${w}`}function x(w,b,A,U,L){const G=U.fog,z=L.geometry,N=w.isMeshStandardMaterial?U.environment:null,I=(w.isMeshStandardMaterial?t:e).get(w.envMap||N),R=I&&I.mapping===Zr?I.image.height:null,W=g[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const P=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,H=P!==void 0?P.length:0;let J=0;z.morphAttributes.position!==void 0&&(J=1),z.morphAttributes.normal!==void 0&&(J=2),z.morphAttributes.color!==void 0&&(J=3);let he,se,Q,q;if(W){const it=zn[W];he=it.vertexShader,se=it.fragmentShader}else he=w.vertexShader,se=w.fragmentShader,l.update(w),Q=l.getVertexShaderID(w),q=l.getFragmentShaderID(w);const K=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),_e=L.isInstancedMesh===!0,Ee=L.isBatchedMesh===!0,Ue=!!w.map,Ge=!!w.matcap,O=!!I,me=!!w.aoMap,De=!!w.lightMap,Re=!!w.bumpMap,Me=!!w.normalMap,ze=!!w.displacementMap,Le=!!w.emissiveMap,Xe=!!w.metalnessMap,Je=!!w.roughnessMap,Ye=w.anisotropy>0,F=w.clearcoat>0,S=w.dispersion>0,X=w.iridescence>0,ae=w.sheen>0,le=w.transmission>0,ce=Ye&&!!w.anisotropyMap,ke=F&&!!w.clearcoatMap,ve=F&&!!w.clearcoatNormalMap,Fe=F&&!!w.clearcoatRoughnessMap,Ne=X&&!!w.iridescenceMap,re=X&&!!w.iridescenceThicknessMap,k=ae&&!!w.sheenColorMap,Z=ae&&!!w.sheenRoughnessMap,ie=!!w.specularMap,oe=!!w.specularColorMap,we=!!w.specularIntensityMap,V=le&&!!w.transmissionMap,j=le&&!!w.thicknessMap,te=!!w.gradientMap,ge=!!w.alphaMap,pe=w.alphaTest>0,fe=!!w.alphaHash,Ce=!!w.extensions;let Te=fi;w.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Te=i.toneMapping);const Ke={shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:he,fragmentShader:se,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&L._colorsTexture!==null,instancing:_e,instancingColor:_e&&L.instanceColor!==null,instancingMorph:_e&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ms,alphaToCoverage:!!w.alphaToCoverage,map:Ue,matcap:Ge,envMap:O,envMapMode:O&&I.mapping,envMapCubeUVHeight:R,aoMap:me,lightMap:De,bumpMap:Re,normalMap:Me,displacementMap:u&&ze,emissiveMap:Le,normalMapObjectSpace:Me&&w.normalMapType===kf,normalMapTangentSpace:Me&&w.normalMapType===ol,metalnessMap:Xe,roughnessMap:Je,anisotropy:Ye,anisotropyMap:ce,clearcoat:F,clearcoatMap:ke,clearcoatNormalMap:ve,clearcoatRoughnessMap:Fe,dispersion:S,iridescence:X,iridescenceMap:Ne,iridescenceThicknessMap:re,sheen:ae,sheenColorMap:k,sheenRoughnessMap:Z,specularMap:ie,specularColorMap:oe,specularIntensityMap:we,transmission:le,transmissionMap:V,thicknessMap:j,gradientMap:te,opaque:w.transparent===!1&&w.blending===ls&&w.alphaToCoverage===!1,alphaMap:ge,alphaTest:pe,alphaHash:fe,combine:w.combine,mapUv:Ue&&m(w.map.channel),aoMapUv:me&&m(w.aoMap.channel),lightMapUv:De&&m(w.lightMap.channel),bumpMapUv:Re&&m(w.bumpMap.channel),normalMapUv:Me&&m(w.normalMap.channel),displacementMapUv:ze&&m(w.displacementMap.channel),emissiveMapUv:Le&&m(w.emissiveMap.channel),metalnessMapUv:Xe&&m(w.metalnessMap.channel),roughnessMapUv:Je&&m(w.roughnessMap.channel),anisotropyMapUv:ce&&m(w.anisotropyMap.channel),clearcoatMapUv:ke&&m(w.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&m(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&m(w.iridescenceMap.channel),iridescenceThicknessMapUv:re&&m(w.iridescenceThicknessMap.channel),sheenColorMapUv:k&&m(w.sheenColorMap.channel),sheenRoughnessMapUv:Z&&m(w.sheenRoughnessMap.channel),specularMapUv:ie&&m(w.specularMap.channel),specularColorMapUv:oe&&m(w.specularColorMap.channel),specularIntensityMapUv:we&&m(w.specularIntensityMap.channel),transmissionMapUv:V&&m(w.transmissionMap.channel),thicknessMapUv:j&&m(w.thicknessMap.channel),alphaMapUv:ge&&m(w.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Me||Ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Ue||ge),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ue,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ue&&w.map.isVideoTexture===!0&&mt.getTransfer(w.map.colorSpace)===wt,decodeVideoTextureEmissive:Le&&w.emissiveMap.isVideoTexture===!0&&mt.getTransfer(w.emissiveMap.colorSpace)===wt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===en,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ce&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&w.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function p(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const A in w.defines)b.push(A),b.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(y(b,w),_(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function _(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const b=g[w.type];let A;if(b){const U=zn[b];A=mu.clone(U.uniforms)}else A=w.uniforms;return A}function E(w,b){let A;for(let U=0,L=h.length;U<L;U++){const G=h[U];if(G.cacheKey===b){A=G,++A.usedTimes;break}}return A===void 0&&(A=new og(i,b,w,r),h.push(A)),A}function M(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function T(w){l.remove(w)}function D(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:D}}function ug(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function dg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _c(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,u,d,g,m,x){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:m,group:x},i[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=m,p.group=x),e++,p}function o(f,u,d,g,m,x){const p=a(f,u,d,g,m,x);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,u,d,g,m,x){const p=a(f,u,d,g,m,x);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||dg),n.length>1&&n.sort(u||_c),s.length>1&&s.sort(u||_c)}function h(){for(let f=e,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function pg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new yc,i.set(n,[a])):s>=r.length?(a=new yc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function mg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new qe};break;case"SpotLight":t={position:new B,direction:new B,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function gg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xg=0;function vg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _g(i){const e=new mg,t=gg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new vt,a=new vt;function o(c){let h=0,f=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,m=0,x=0,p=0,y=0,_=0,v=0,E=0,M=0,T=0;c.sort(vg);for(let w=0,b=c.length;w<b;w++){const A=c[w],U=A.color,L=A.intensity,G=A.distance,z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=U.r*L,f+=U.g*L,u+=U.b*L;else if(A.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(A.sh.coefficients[N],L);T++}else if(A.isDirectionalLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const I=A.shadow,R=t.get(A);R.shadowIntensity=I.intensity,R.shadowBias=I.bias,R.shadowNormalBias=I.normalBias,R.shadowRadius=I.radius,R.shadowMapSize=I.mapSize,n.directionalShadow[d]=R,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=A.shadow.matrix,y++}n.directional[d]=N,d++}else if(A.isSpotLight){const N=e.get(A);N.position.setFromMatrixPosition(A.matrixWorld),N.color.copy(U).multiplyScalar(L),N.distance=G,N.coneCos=Math.cos(A.angle),N.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),N.decay=A.decay,n.spot[m]=N;const I=A.shadow;if(A.map&&(n.spotLightMap[E]=A.map,E++,I.updateMatrices(A),A.castShadow&&M++),n.spotLightMatrix[m]=I.matrix,A.castShadow){const R=t.get(A);R.shadowIntensity=I.intensity,R.shadowBias=I.bias,R.shadowNormalBias=I.normalBias,R.shadowRadius=I.radius,R.shadowMapSize=I.mapSize,n.spotShadow[m]=R,n.spotShadowMap[m]=z,v++}m++}else if(A.isRectAreaLight){const N=e.get(A);N.color.copy(U).multiplyScalar(L),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),n.rectArea[x]=N,x++}else if(A.isPointLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),N.distance=A.distance,N.decay=A.decay,A.castShadow){const I=A.shadow,R=t.get(A);R.shadowIntensity=I.intensity,R.shadowBias=I.bias,R.shadowNormalBias=I.normalBias,R.shadowRadius=I.radius,R.shadowMapSize=I.mapSize,R.shadowCameraNear=I.camera.near,R.shadowCameraFar=I.camera.far,n.pointShadow[g]=R,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=A.shadow.matrix,_++}n.point[g]=N,g++}else if(A.isHemisphereLight){const N=e.get(A);N.skyColor.copy(A.color).multiplyScalar(L),N.groundColor.copy(A.groundColor).multiplyScalar(L),n.hemi[p]=N,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==m||D.rectAreaLength!==x||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==_||D.numSpotShadows!==v||D.numSpotMaps!==E||D.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=x,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,D.directionalLength=d,D.pointLength=g,D.spotLength=m,D.rectAreaLength=x,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=_,D.numSpotShadows=v,D.numSpotMaps=E,D.numLightProbes=T,n.version=xg++)}function l(c,h){let f=0,u=0,d=0,g=0,m=0;const x=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const _=c[p];if(_.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),f++}else if(_.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),d++}else if(_.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),a.identity(),r.copy(_.matrixWorld),r.premultiply(x),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),u++}else if(_.isHemisphereLight){const v=n.hemi[m];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(x),m++}}}return{setup:o,setupView:l,state:n}}function Mc(i){const e=new _g(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function yg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Mc(i),e.set(s,[o])):r>=a.length?(o=new Mc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
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
}`;function bg(i,e,t){let n=new Jr;const s=new $e,r=new $e,a=new ht,o=new Oh({depthPacking:bh}),l=new Wu,c={},h=t.maxTextureSize,f={[ui]:sn,[sn]:ui,[en]:en},u=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Mg,fragmentShader:wg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new xt(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let p=this.type;this.render=function(M,T,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;const w=i.getRenderTarget(),b=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),U=i.state;U.setBlending(hi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=p!==Yn&&this.type===Yn,G=p===Yn&&this.type!==Yn;for(let z=0,N=M.length;z<N;z++){const I=M[z],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;s.copy(R.mapSize);const W=R.getFrameExtents();if(s.multiply(W),r.copy(R.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,R.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,R.mapSize.y=r.y)),R.map===null||L===!0||G===!0){const H=this.type!==Yn?{minFilter:tn,magFilter:tn}:{};R.map!==null&&R.map.dispose(),R.map=new Jn(s.x,s.y,H),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}i.setRenderTarget(R.map),i.clear();const P=R.getViewportCount();for(let H=0;H<P;H++){const J=R.getViewport(H);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),U.viewport(a),R.updateMatrices(I,H),n=R.getFrustum(),v(T,D,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===Yn&&y(R,D),R.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(w,b,A)};function y(M,T){const D=e.update(m);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Jn(s.x,s.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,D,u,m,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,D,d,m,null)}function _(M,T,D,w){let b=null;const A=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)b=A;else if(b=D.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const U=b.uuid,L=T.uuid;let G=c[U];G===void 0&&(G={},c[U]=G);let z=G[L];z===void 0&&(z=b.clone(),G[L]=z,T.addEventListener("dispose",E)),b=z}if(b.visible=T.visible,b.wireframe=T.wireframe,w===Yn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:f[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=i.properties.get(b);U.light=D}return b}function v(M,T,D,w,b){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Yn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);const L=e.update(M),G=M.material;if(Array.isArray(G)){const z=L.groups;for(let N=0,I=z.length;N<I;N++){const R=z[N],W=G[R.materialIndex];if(W&&W.visible){const P=_(M,W,w,b);M.onBeforeShadow(i,M,T,D,L,P,R),i.renderBufferDirect(D,null,L,P,M,R),M.onAfterShadow(i,M,T,D,L,P,R)}}}else if(G.visible){const z=_(M,G,w,b);M.onBeforeShadow(i,M,T,D,L,z,null),i.renderBufferDirect(D,null,L,z,M,null),M.onAfterShadow(i,M,T,D,L,z,null)}}const U=M.children;for(let L=0,G=U.length;L<G;L++)v(U[L],T,D,w,b)}function E(M){M.target.removeEventListener("dispose",E);for(const D in c){const w=c[D],b=M.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const Sg={[to]:no,[io]:ao,[so]:oo,[us]:ro,[no]:to,[ao]:io,[oo]:so,[ro]:us};function Eg(i,e){function t(){let V=!1;const j=new ht;let te=null;const ge=new ht(0,0,0,0);return{setMask:function(pe){te!==pe&&!V&&(i.colorMask(pe,pe,pe,pe),te=pe)},setLocked:function(pe){V=pe},setClear:function(pe,fe,Ce,Te,Ke){Ke===!0&&(pe*=Te,fe*=Te,Ce*=Te),j.set(pe,fe,Ce,Te),ge.equals(j)===!1&&(i.clearColor(pe,fe,Ce,Te),ge.copy(j))},reset:function(){V=!1,te=null,ge.set(-1,0,0,0)}}}function n(){let V=!1,j=!1,te=null,ge=null,pe=null;return{setReversed:function(fe){if(j!==fe){const Ce=e.get("EXT_clip_control");fe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),j=fe;const Te=pe;pe=null,this.setClear(Te)}},getReversed:function(){return j},setTest:function(fe){fe?K(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(fe){te!==fe&&!V&&(i.depthMask(fe),te=fe)},setFunc:function(fe){if(j&&(fe=Sg[fe]),ge!==fe){switch(fe){case to:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case so:i.depthFunc(i.EQUAL);break;case ro:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=fe}},setLocked:function(fe){V=fe},setClear:function(fe){pe!==fe&&(j&&(fe=1-fe),i.clearDepth(fe),pe=fe)},reset:function(){V=!1,te=null,ge=null,pe=null,j=!1}}}function s(){let V=!1,j=null,te=null,ge=null,pe=null,fe=null,Ce=null,Te=null,Ke=null;return{setTest:function(it){V||(it?K(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(it){j!==it&&!V&&(i.stencilMask(it),j=it)},setFunc:function(it,dt,_t){(te!==it||ge!==dt||pe!==_t)&&(i.stencilFunc(it,dt,_t),te=it,ge=dt,pe=_t)},setOp:function(it,dt,_t){(fe!==it||Ce!==dt||Te!==_t)&&(i.stencilOp(it,dt,_t),fe=it,Ce=dt,Te=_t)},setLocked:function(it){V=it},setClear:function(it){Ke!==it&&(i.clearStencil(it),Ke=it)},reset:function(){V=!1,j=null,te=null,ge=null,pe=null,fe=null,Ce=null,Te=null,Ke=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],g=null,m=!1,x=null,p=null,y=null,_=null,v=null,E=null,M=null,T=new qe(0,0,0),D=0,w=!1,b=null,A=null,U=null,L=null,G=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const R=i.getParameter(i.VERSION);R.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(R)[1]),N=I>=1):R.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),N=I>=2);let W=null,P={};const H=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),he=new ht().fromArray(H),se=new ht().fromArray(J);function Q(V,j,te,ge){const pe=new Uint8Array(4),fe=i.createTexture();i.bindTexture(V,fe),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<te;Ce++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(j+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return fe}const q={};q[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(us),Re(!1),Me(wl),K(i.CULL_FACE),me(hi);function K(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function ue(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function _e(V,j){return f[V]!==j?(i.bindFramebuffer(V,j),f[V]=j,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=j),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Ee(V,j){let te=d,ge=!1;if(V){te=u.get(j),te===void 0&&(te=[],u.set(j,te));const pe=V.textures;if(te.length!==pe.length||te[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ce=pe.length;fe<Ce;fe++)te[fe]=i.COLOR_ATTACHMENT0+fe;te.length=pe.length,ge=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,ge=!0);ge&&i.drawBuffers(te)}function Ue(V){return g!==V?(i.useProgram(V),g=V,!0):!1}const Ge={[Ri]:i.FUNC_ADD,[uf]:i.FUNC_SUBTRACT,[df]:i.FUNC_REVERSE_SUBTRACT};Ge[pf]=i.MIN,Ge[mf]=i.MAX;const O={[gf]:i.ZERO,[xf]:i.ONE,[vf]:i.SRC_COLOR,[Qa]:i.SRC_ALPHA,[Sf]:i.SRC_ALPHA_SATURATE,[wf]:i.DST_COLOR,[yf]:i.DST_ALPHA,[_f]:i.ONE_MINUS_SRC_COLOR,[eo]:i.ONE_MINUS_SRC_ALPHA,[bf]:i.ONE_MINUS_DST_COLOR,[Mf]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[Af]:i.ONE_MINUS_CONSTANT_COLOR,[Tf]:i.CONSTANT_ALPHA,[Rf]:i.ONE_MINUS_CONSTANT_ALPHA};function me(V,j,te,ge,pe,fe,Ce,Te,Ke,it){if(V===hi){m===!0&&(ue(i.BLEND),m=!1);return}if(m===!1&&(K(i.BLEND),m=!0),V!==ff){if(V!==x||it!==w){if((p!==Ri||v!==Ri)&&(i.blendEquation(i.FUNC_ADD),p=Ri,v=Ri),it)switch(V){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFunc(i.ONE,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}y=null,_=null,E=null,M=null,T.set(0,0,0),D=0,x=V,w=it}return}pe=pe||j,fe=fe||te,Ce=Ce||ge,(j!==p||pe!==v)&&(i.blendEquationSeparate(Ge[j],Ge[pe]),p=j,v=pe),(te!==y||ge!==_||fe!==E||Ce!==M)&&(i.blendFuncSeparate(O[te],O[ge],O[fe],O[Ce]),y=te,_=ge,E=fe,M=Ce),(Te.equals(T)===!1||Ke!==D)&&(i.blendColor(Te.r,Te.g,Te.b,Ke),T.copy(Te),D=Ke),x=V,w=!1}function De(V,j){V.side===en?ue(i.CULL_FACE):K(i.CULL_FACE);let te=V.side===sn;j&&(te=!te),Re(te),V.blending===ls&&V.transparent===!1?me(hi):me(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const ge=V.stencilWrite;o.setTest(ge),ge&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Le(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(V){b!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),b=V)}function Me(V){V!==cf?(K(i.CULL_FACE),V!==A&&(V===wl?i.cullFace(i.BACK):V===hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),A=V}function ze(V){V!==U&&(N&&i.lineWidth(V),U=V)}function Le(V,j,te){V?(K(i.POLYGON_OFFSET_FILL),(L!==j||G!==te)&&(i.polygonOffset(j,te),L=j,G=te)):ue(i.POLYGON_OFFSET_FILL)}function Xe(V){V?K(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function Je(V){V===void 0&&(V=i.TEXTURE0+z-1),W!==V&&(i.activeTexture(V),W=V)}function Ye(V,j,te){te===void 0&&(W===null?te=i.TEXTURE0+z-1:te=W);let ge=P[te];ge===void 0&&(ge={type:void 0,texture:void 0},P[te]=ge),(ge.type!==V||ge.texture!==j)&&(W!==te&&(i.activeTexture(te),W=te),i.bindTexture(V,j||q[V]),ge.type=V,ge.texture=j)}function F(){const V=P[W];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function k(V){he.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),he.copy(V))}function Z(V){se.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),se.copy(V))}function ie(V,j){let te=c.get(j);te===void 0&&(te=new WeakMap,c.set(j,te));let ge=te.get(V);ge===void 0&&(ge=i.getUniformBlockIndex(j,V.name),te.set(V,ge))}function oe(V,j){const ge=c.get(j).get(V);l.get(j)!==ge&&(i.uniformBlockBinding(j,ge,V.__bindingPointIndex),l.set(j,ge))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},W=null,P={},f={},u=new WeakMap,d=[],g=null,m=!1,x=null,p=null,y=null,_=null,v=null,E=null,M=null,T=new qe(0,0,0),D=0,w=!1,b=null,A=null,U=null,L=null,G=null,he.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ue,bindFramebuffer:_e,drawBuffers:Ee,useProgram:Ue,setBlending:me,setMaterial:De,setFlipSided:Re,setCullFace:Me,setLineWidth:ze,setPolygonOffset:Le,setScissorTest:Xe,activeTexture:Je,bindTexture:Ye,unbindTexture:F,compressedTexImage2D:S,compressedTexImage3D:X,texImage2D:Ne,texImage3D:re,updateUBOMapping:ie,uniformBlockBinding:oe,texStorage2D:ve,texStorage3D:Fe,texSubImage2D:ae,texSubImage3D:le,compressedTexSubImage2D:ce,compressedTexSubImage3D:ke,scissor:k,viewport:Z,reset:we}}function Ag(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,S){return d?new OffscreenCanvas(F,S):js("canvas")}function m(F,S,X){let ae=1;const le=Ye(F);if((le.width>X||le.height>X)&&(ae=X/Math.max(le.width,le.height)),ae<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ce=Math.floor(ae*le.width),ke=Math.floor(ae*le.height);f===void 0&&(f=g(ce,ke));const ve=S?g(ce,ke):f;return ve.width=ce,ve.height=ke,ve.getContext("2d").drawImage(F,0,0,ce,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ce+"x"+ke+")."),ve}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),F;return F}function x(F){return F.generateMipmaps}function p(F){i.generateMipmap(F)}function y(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(F,S,X,ae,le=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ce=S;if(S===i.RED&&(X===i.FLOAT&&(ce=i.R32F),X===i.HALF_FLOAT&&(ce=i.R16F),X===i.UNSIGNED_BYTE&&(ce=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.R8UI),X===i.UNSIGNED_SHORT&&(ce=i.R16UI),X===i.UNSIGNED_INT&&(ce=i.R32UI),X===i.BYTE&&(ce=i.R8I),X===i.SHORT&&(ce=i.R16I),X===i.INT&&(ce=i.R32I)),S===i.RG&&(X===i.FLOAT&&(ce=i.RG32F),X===i.HALF_FLOAT&&(ce=i.RG16F),X===i.UNSIGNED_BYTE&&(ce=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RG8UI),X===i.UNSIGNED_SHORT&&(ce=i.RG16UI),X===i.UNSIGNED_INT&&(ce=i.RG32UI),X===i.BYTE&&(ce=i.RG8I),X===i.SHORT&&(ce=i.RG16I),X===i.INT&&(ce=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),X===i.UNSIGNED_INT&&(ce=i.RGB32UI),X===i.BYTE&&(ce=i.RGB8I),X===i.SHORT&&(ce=i.RGB16I),X===i.INT&&(ce=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),X===i.UNSIGNED_INT&&(ce=i.RGBA32UI),X===i.BYTE&&(ce=i.RGBA8I),X===i.SHORT&&(ce=i.RGBA16I),X===i.INT&&(ce=i.RGBA32I)),S===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),S===i.RGBA){const ke=le?Yr:mt.getTransfer(ae);X===i.FLOAT&&(ce=i.RGBA32F),X===i.HALF_FLOAT&&(ce=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ce=ke===wt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function v(F,S){let X;return F?S===null||S===di||S===$s?X=i.DEPTH24_STENCIL8:S===Dn?X=i.DEPTH32F_STENCIL8:S===Xs&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===di||S===$s?X=i.DEPTH_COMPONENT24:S===Dn?X=i.DEPTH_COMPONENT32F:S===Xs&&(X=i.DEPTH_COMPONENT16),X}function E(F,S){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==tn&&F.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?S.mipmaps.length:1}function M(F){const S=F.target;S.removeEventListener("dispose",M),D(S),S.isVideoTexture&&h.delete(S)}function T(F){const S=F.target;S.removeEventListener("dispose",T),b(S)}function D(F){const S=n.get(F);if(S.__webglInit===void 0)return;const X=F.source,ae=u.get(X);if(ae){const le=ae[S.__cacheKey];le.usedTimes--,le.usedTimes===0&&w(F),Object.keys(ae).length===0&&u.delete(X)}n.remove(F)}function w(F){const S=n.get(F);i.deleteTexture(S.__webglTexture);const X=F.source,ae=u.get(X);delete ae[S.__cacheKey],a.memory.textures--}function b(F){const S=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(S.__webglFramebuffer[ae]))for(let le=0;le<S.__webglFramebuffer[ae].length;le++)i.deleteFramebuffer(S.__webglFramebuffer[ae][le]);else i.deleteFramebuffer(S.__webglFramebuffer[ae]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ae])}else{if(Array.isArray(S.__webglFramebuffer))for(let ae=0;ae<S.__webglFramebuffer.length;ae++)i.deleteFramebuffer(S.__webglFramebuffer[ae]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ae=0;ae<S.__webglColorRenderbuffer.length;ae++)S.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ae]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=F.textures;for(let ae=0,le=X.length;ae<le;ae++){const ce=n.get(X[ae]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(X[ae])}n.remove(F)}let A=0;function U(){A=0}function L(){const F=A;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),A+=1,F}function G(F){const S=[];return S.push(F.wrapS),S.push(F.wrapT),S.push(F.wrapR||0),S.push(F.magFilter),S.push(F.minFilter),S.push(F.anisotropy),S.push(F.internalFormat),S.push(F.format),S.push(F.type),S.push(F.generateMipmaps),S.push(F.premultiplyAlpha),S.push(F.flipY),S.push(F.unpackAlignment),S.push(F.colorSpace),S.join()}function z(F,S){const X=n.get(F);if(F.isVideoTexture&&Xe(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&X.__version!==F.version){const ae=F.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(X,F,S);return}}else F.isExternalTexture&&(X.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function N(F,S){const X=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&X.__version!==F.version){q(X,F,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function I(F,S){const X=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&X.__version!==F.version){q(X,F,S);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function R(F,S){const X=n.get(F);if(F.version>0&&X.__version!==F.version){K(X,F,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const W={[ho]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[fo]:i.MIRRORED_REPEAT},P={[tn]:i.NEAREST,[zf]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},H={[Bf]:i.NEVER,[Xf]:i.ALWAYS,[Hf]:i.LESS,[Sh]:i.LEQUAL,[Gf]:i.EQUAL,[qf]:i.GEQUAL,[Vf]:i.GREATER,[Wf]:i.NOTEQUAL};function J(F,S){if(S.type===Dn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===na||S.magFilter===cr||S.magFilter===Kn||S.minFilter===fn||S.minFilter===na||S.minFilter===cr||S.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,W[S.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,W[S.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,W[S.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,P[S.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,P[S.minFilter]),S.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,H[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==cr&&S.minFilter!==Kn||S.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function he(F,S){let X=!1;F.__webglInit===void 0&&(F.__webglInit=!0,S.addEventListener("dispose",M));const ae=S.source;let le=u.get(ae);le===void 0&&(le={},u.set(ae,le));const ce=G(S);if(ce!==F.__cacheKey){le[ce]===void 0&&(le[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),le[ce].usedTimes++;const ke=le[F.__cacheKey];ke!==void 0&&(le[F.__cacheKey].usedTimes--,ke.usedTimes===0&&w(S)),F.__cacheKey=ce,F.__webglTexture=le[ce].texture}return X}function se(F,S,X){return Math.floor(Math.floor(F/X)/S)}function Q(F,S,X,ae){const ce=F.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,X,ae,S.data);else{ce.sort((re,k)=>re.start-k.start);let ke=0;for(let re=1;re<ce.length;re++){const k=ce[ke],Z=ce[re],ie=k.start+k.count,oe=se(Z.start,S.width,4),we=se(k.start,S.width,4);Z.start<=ie+1&&oe===we&&se(Z.start+Z.count-1,S.width,4)===oe?k.count=Math.max(k.count,Z.start+Z.count-k.start):(++ke,ce[ke]=Z)}ce.length=ke+1;const ve=i.getParameter(i.UNPACK_ROW_LENGTH),Fe=i.getParameter(i.UNPACK_SKIP_PIXELS),Ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let re=0,k=ce.length;re<k;re++){const Z=ce[re],ie=Math.floor(Z.start/4),oe=Math.ceil(Z.count/4),we=ie%S.width,V=Math.floor(ie/S.width),j=oe,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,we,V,j,te,X,ae,S.data)}F.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ve),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function q(F,S,X){let ae=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=i.TEXTURE_3D);const le=he(F,S),ce=S.source;t.bindTexture(ae,F.__webglTexture,i.TEXTURE0+X);const ke=n.get(ce);if(ce.version!==ke.__version||le===!0){t.activeTexture(i.TEXTURE0+X);const ve=mt.getPrimaries(mt.workingColorSpace),Fe=S.colorSpace===Ln?null:mt.getPrimaries(S.colorSpace),Ne=S.colorSpace===Ln||ve===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let re=m(S.image,!1,s.maxTextureSize);re=Je(S,re);const k=r.convert(S.format,S.colorSpace),Z=r.convert(S.type);let ie=_(S.internalFormat,k,Z,S.colorSpace,S.isVideoTexture);J(ae,S);let oe;const we=S.mipmaps,V=S.isVideoTexture!==!0,j=ke.__version===void 0||le===!0,te=ce.dataReady,ge=E(S,re);if(S.isDepthTexture)ie=v(S.format===Ks,S.type),j&&(V?t.texStorage2D(i.TEXTURE_2D,1,ie,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,ie,re.width,re.height,0,k,Z,null));else if(S.isDataTexture)if(we.length>0){V&&j&&t.texStorage2D(i.TEXTURE_2D,ge,ie,we[0].width,we[0].height);for(let pe=0,fe=we.length;pe<fe;pe++)oe=we[pe],V?te&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,oe.width,oe.height,k,Z,oe.data):t.texImage2D(i.TEXTURE_2D,pe,ie,oe.width,oe.height,0,k,Z,oe.data);S.generateMipmaps=!1}else V?(j&&t.texStorage2D(i.TEXTURE_2D,ge,ie,re.width,re.height),te&&Q(S,re,k,Z)):t.texImage2D(i.TEXTURE_2D,0,ie,re.width,re.height,0,k,Z,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){V&&j&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,ie,we[0].width,we[0].height,re.depth);for(let pe=0,fe=we.length;pe<fe;pe++)if(oe=we[pe],S.format!==un)if(k!==null)if(V){if(te)if(S.layerUpdates.size>0){const Ce=Jl(oe.width,oe.height,S.format,S.type);for(const Te of S.layerUpdates){const Ke=oe.data.subarray(Te*Ce/oe.data.BYTES_PER_ELEMENT,(Te+1)*Ce/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Te,oe.width,oe.height,1,k,Ke)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,oe.width,oe.height,re.depth,k,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,ie,oe.width,oe.height,re.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,oe.width,oe.height,re.depth,k,Z,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,ie,oe.width,oe.height,re.depth,0,k,Z,oe.data)}else{V&&j&&t.texStorage2D(i.TEXTURE_2D,ge,ie,we[0].width,we[0].height);for(let pe=0,fe=we.length;pe<fe;pe++)oe=we[pe],S.format!==un?k!==null?V?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,oe.width,oe.height,k,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,ie,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?te&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,oe.width,oe.height,k,Z,oe.data):t.texImage2D(i.TEXTURE_2D,pe,ie,oe.width,oe.height,0,k,Z,oe.data)}else if(S.isDataArrayTexture)if(V){if(j&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,ie,re.width,re.height,re.depth),te)if(S.layerUpdates.size>0){const pe=Jl(re.width,re.height,S.format,S.type);for(const fe of S.layerUpdates){const Ce=re.data.subarray(fe*pe/re.data.BYTES_PER_ELEMENT,(fe+1)*pe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,re.width,re.height,1,k,Z,Ce)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,k,Z,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,re.width,re.height,re.depth,0,k,Z,re.data);else if(S.isData3DTexture)V?(j&&t.texStorage3D(i.TEXTURE_3D,ge,ie,re.width,re.height,re.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,k,Z,re.data)):t.texImage3D(i.TEXTURE_3D,0,ie,re.width,re.height,re.depth,0,k,Z,re.data);else if(S.isFramebufferTexture){if(j)if(V)t.texStorage2D(i.TEXTURE_2D,ge,ie,re.width,re.height);else{let pe=re.width,fe=re.height;for(let Ce=0;Ce<ge;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,ie,pe,fe,0,k,Z,null),pe>>=1,fe>>=1}}else if(we.length>0){if(V&&j){const pe=Ye(we[0]);t.texStorage2D(i.TEXTURE_2D,ge,ie,pe.width,pe.height)}for(let pe=0,fe=we.length;pe<fe;pe++)oe=we[pe],V?te&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,k,Z,oe):t.texImage2D(i.TEXTURE_2D,pe,ie,k,Z,oe);S.generateMipmaps=!1}else if(V){if(j){const pe=Ye(re);t.texStorage2D(i.TEXTURE_2D,ge,ie,pe.width,pe.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,k,Z,re)}else t.texImage2D(i.TEXTURE_2D,0,ie,k,Z,re);x(S)&&p(ae),ke.__version=ce.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function K(F,S,X){if(S.image.length!==6)return;const ae=he(F,S),le=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+X);const ce=n.get(le);if(le.version!==ce.__version||ae===!0){t.activeTexture(i.TEXTURE0+X);const ke=mt.getPrimaries(mt.workingColorSpace),ve=S.colorSpace===Ln?null:mt.getPrimaries(S.colorSpace),Fe=S.colorSpace===Ln||ke===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ne=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,k=[];for(let fe=0;fe<6;fe++)!Ne&&!re?k[fe]=m(S.image[fe],!0,s.maxCubemapSize):k[fe]=re?S.image[fe].image:S.image[fe],k[fe]=Je(S,k[fe]);const Z=k[0],ie=r.convert(S.format,S.colorSpace),oe=r.convert(S.type),we=_(S.internalFormat,ie,oe,S.colorSpace),V=S.isVideoTexture!==!0,j=ce.__version===void 0||ae===!0,te=le.dataReady;let ge=E(S,Z);J(i.TEXTURE_CUBE_MAP,S);let pe;if(Ne){V&&j&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,we,Z.width,Z.height);for(let fe=0;fe<6;fe++){pe=k[fe].mipmaps;for(let Ce=0;Ce<pe.length;Ce++){const Te=pe[Ce];S.format!==un?ie!==null?V?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce,0,0,Te.width,Te.height,ie,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce,we,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce,0,0,Te.width,Te.height,ie,oe,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce,we,Te.width,Te.height,0,ie,oe,Te.data)}}}else{if(pe=S.mipmaps,V&&j){pe.length>0&&ge++;const fe=Ye(k[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,we,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(re){V?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,k[fe].width,k[fe].height,ie,oe,k[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,we,k[fe].width,k[fe].height,0,ie,oe,k[fe].data);for(let Ce=0;Ce<pe.length;Ce++){const Ke=pe[Ce].image[fe].image;V?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce+1,0,0,Ke.width,Ke.height,ie,oe,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce+1,we,Ke.width,Ke.height,0,ie,oe,Ke.data)}}else{V?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ie,oe,k[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,we,ie,oe,k[fe]);for(let Ce=0;Ce<pe.length;Ce++){const Te=pe[Ce];V?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce+1,0,0,ie,oe,Te.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce+1,we,ie,oe,Te.image[fe])}}}x(S)&&p(i.TEXTURE_CUBE_MAP),ce.__version=le.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function ue(F,S,X,ae,le,ce){const ke=r.convert(X.format,X.colorSpace),ve=r.convert(X.type),Fe=_(X.internalFormat,ke,ve,X.colorSpace),Ne=n.get(S),re=n.get(X);if(re.__renderTarget=S,!Ne.__hasExternalTextures){const k=Math.max(1,S.width>>ce),Z=Math.max(1,S.height>>ce);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,ce,Fe,k,Z,S.depth,0,ke,ve,null):t.texImage2D(le,ce,Fe,k,Z,0,ke,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Le(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,le,re.__webglTexture,0,ze(S)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,le,re.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(F,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,F),S.depthBuffer){const ae=S.depthTexture,le=ae&&ae.isDepthTexture?ae.type:null,ce=v(S.stencilBuffer,le),ke=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=ze(S);Le(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,ce,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ce,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ce,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,F)}else{const ae=S.textures;for(let le=0;le<ae.length;le++){const ce=ae[le],ke=r.convert(ce.format,ce.colorSpace),ve=r.convert(ce.type),Fe=_(ce.internalFormat,ke,ve,ce.colorSpace),Ne=ze(S);X&&Le(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Fe,S.width,S.height):Le(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Fe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Fe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(F,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=n.get(S.depthTexture);ae.__renderTarget=S,(!ae.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const le=ae.__webglTexture,ce=ze(S);if(S.depthTexture.format===Ys)Le(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(S.depthTexture.format===Ks)Le(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ue(F){const S=n.get(F),X=F.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==F.depthTexture){const ae=F.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ae){const le=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ae.removeEventListener("dispose",le)};ae.addEventListener("dispose",le),S.__depthDisposeCallback=le}S.__boundDepthTexture=ae}if(F.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const ae=F.texture.mipmaps;ae&&ae.length>0?Ee(S.__webglFramebuffer[0],F):Ee(S.__webglFramebuffer,F)}else if(X){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]===void 0)S.__webglDepthbuffer[ae]=i.createRenderbuffer(),_e(S.__webglDepthbuffer[ae],F,!1);else{const le=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ce)}}else{const ae=F.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),_e(S.__webglDepthbuffer,F,!1);else{const le=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(F,S,X){const ae=n.get(F);S!==void 0&&ue(ae.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ue(F)}function O(F){const S=F.texture,X=n.get(F),ae=n.get(S);F.addEventListener("dispose",T);const le=F.textures,ce=F.isWebGLCubeRenderTarget===!0,ke=le.length>1;if(ke||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=S.version,a.memory.textures++),ce){X.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[ve]=[];for(let Fe=0;Fe<S.mipmaps.length;Fe++)X.__webglFramebuffer[ve][Fe]=i.createFramebuffer()}else X.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)X.__webglFramebuffer[ve]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ke)for(let ve=0,Fe=le.length;ve<Fe;ve++){const Ne=n.get(le[ve]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&Le(F)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const Fe=le[ve];X.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ve]);const Ne=r.convert(Fe.format,Fe.colorSpace),re=r.convert(Fe.type),k=_(Fe.internalFormat,Ne,re,Fe.colorSpace,F.isXRRenderTarget===!0),Z=ze(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,k,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,X.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(X.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),J(i.TEXTURE_CUBE_MAP,S);for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0)for(let Fe=0;Fe<S.mipmaps.length;Fe++)ue(X.__webglFramebuffer[ve][Fe],F,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe);else ue(X.__webglFramebuffer[ve],F,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let ve=0,Fe=le.length;ve<Fe;ve++){const Ne=le[ve],re=n.get(Ne);let k=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(k=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(k,re.__webglTexture),J(k,Ne),ue(X.__webglFramebuffer,F,Ne,i.COLOR_ATTACHMENT0+ve,k,0),x(Ne)&&p(k)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ve=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ae.__webglTexture),J(ve,S),S.mipmaps&&S.mipmaps.length>0)for(let Fe=0;Fe<S.mipmaps.length;Fe++)ue(X.__webglFramebuffer[Fe],F,S,i.COLOR_ATTACHMENT0,ve,Fe);else ue(X.__webglFramebuffer,F,S,i.COLOR_ATTACHMENT0,ve,0);x(S)&&p(ve),t.unbindTexture()}F.depthBuffer&&Ue(F)}function me(F){const S=F.textures;for(let X=0,ae=S.length;X<ae;X++){const le=S[X];if(x(le)){const ce=y(F),ke=n.get(le).__webglTexture;t.bindTexture(ce,ke),p(ce),t.unbindTexture()}}}const De=[],Re=[];function Me(F){if(F.samples>0){if(Le(F)===!1){const S=F.textures,X=F.width,ae=F.height;let le=i.COLOR_BUFFER_BIT;const ce=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(F),ve=S.length>1;if(ve)for(let Ne=0;Ne<S.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const Fe=F.texture.mipmaps;Fe&&Fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ne=0;Ne<S.length;Ne++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ne]);const re=n.get(S[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,X,ae,0,0,X,ae,le,i.NEAREST),l===!0&&(De.length=0,Re.length=0,De.push(i.COLOR_ATTACHMENT0+Ne),F.depthBuffer&&F.resolveDepthBuffer===!1&&(De.push(ce),Re.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Ne=0;Ne<S.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ne]);const re=n.get(S[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const S=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ze(F){return Math.min(s.maxSamples,F.samples)}function Le(F){const S=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Xe(F){const S=a.render.frame;h.get(F)!==S&&(h.set(F,S),F.update())}function Je(F,S){const X=F.colorSpace,ae=F.format,le=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||X!==ms&&X!==Ln&&(mt.getTransfer(X)===wt?(ae!==un||le!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function Ye(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=I,this.setTextureCube=R,this.rebindTextures=Ge,this.setupRenderTarget=O,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Le}function Tg(i,e){function t(n,s=Ln){let r;const a=mt.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_h)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gh)return i.BYTE;if(n===xh)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Fi)return i.HALF_FLOAT;if(n===yh)return i.ALPHA;if(n===Mh)return i.RGB;if(n===un)return i.RGBA;if(n===Ys)return i.DEPTH_COMPONENT;if(n===Ks)return i.DEPTH_STENCIL;if(n===cs)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===wh)return i.RG;if(n===rl)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===Hr||n===Gr||n===Vr||n===Wr)if(a===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uo||n===po||n===mo||n===go)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===vo||n===_o)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xo||n===vo)return a===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_o)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yo||n===Mo||n===wo||n===bo||n===So||n===Eo||n===Ao||n===To||n===Ro||n===Co||n===Lo||n===Po||n===Do||n===Io)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yo)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mo)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bo)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eo)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===To)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lo)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Po)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Do)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uo||n===Fo||n===No)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Uo)return a===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zo||n===Oo||n===ko||n===Bo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`;class Lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Dh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vn({vertexShader:Rg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pg extends ws{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const m=typeof XRWebGLBinding<"u",x=new Lg,p={},y=t.getContextAttributes();let _=null,v=null;const E=[],M=[],T=new $e;let D=null;const w=new Sn;w.viewport=new ht;const b=new Sn;b.viewport=new ht;const A=[w,b],U=new Ju;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=E[q];return K===void 0&&(K=new Ea,E[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=E[q];return K===void 0&&(K=new Ea,E[q]=K),K.getGripSpace()},this.getHand=function(q){let K=E[q];return K===void 0&&(K=new Ea,E[q]=K),K.getHandSpace()};function z(q){const K=M.indexOf(q.inputSource);if(K===-1)return;const ue=E[K];ue!==void 0&&(ue.update(q.inputSource,q.frame,c||a),ue.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",I);for(let q=0;q<E.length;q++){const K=M[q];K!==null&&(M[q]=null,E[q].disconnect(K))}L=null,G=null,x.reset();for(const q in p)delete p[q];e.setRenderTarget(_),d=null,u=null,f=null,s=null,v=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&m&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",N),s.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(T),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,_e=null,Ee=null;y.depth&&(Ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=y.stencil?Ks:Ys,_e=y.stencil?$s:di);const Ue={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ue),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Jn(u.textureWidth,u.textureHeight,{format:un,type:Bn,depthTexture:new fl(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Jn(d.framebufferWidth,d.framebufferHeight,{format:un,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function I(q){for(let K=0;K<q.removed.length;K++){const ue=q.removed[K],_e=M.indexOf(ue);_e>=0&&(M[_e]=null,E[_e].disconnect(ue))}for(let K=0;K<q.added.length;K++){const ue=q.added[K];let _e=M.indexOf(ue);if(_e===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=M.length){M.push(ue),_e=Ue;break}else if(M[Ue]===null){M[Ue]=ue,_e=Ue;break}if(_e===-1)break}const Ee=E[_e];Ee&&Ee.connect(ue)}}const R=new B,W=new B;function P(q,K,ue){R.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(ue.matrixWorld);const _e=R.distanceTo(W),Ee=K.projectionMatrix.elements,Ue=ue.projectionMatrix.elements,Ge=Ee[14]/(Ee[10]-1),O=Ee[14]/(Ee[10]+1),me=(Ee[9]+1)/Ee[5],De=(Ee[9]-1)/Ee[5],Re=(Ee[8]-1)/Ee[0],Me=(Ue[8]+1)/Ue[0],ze=Ge*Re,Le=Ge*Me,Xe=_e/(-Re+Me),Je=Xe*-Re;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Je),q.translateZ(Xe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ye=Ge+Xe,F=O+Xe,S=ze-Je,X=Le+(_e-Je),ae=me*O/F*Ye,le=De*O/F*Ye;q.projectionMatrix.makePerspective(S,X,ae,le,Ye,F),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function H(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let K=q.near,ue=q.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),U.near=b.near=w.near=K,U.far=b.far=w.far=ue,(L!==U.near||G!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),L=U.near,G=U.far),U.layers.mask=q.layers.mask|6,w.layers.mask=U.layers.mask&3,b.layers.mask=U.layers.mask&5;const _e=q.parent,Ee=U.cameras;H(U,_e);for(let Ue=0;Ue<Ee.length;Ue++)H(Ee[Ue],_e);Ee.length===2?P(U,w,b):U.projectionMatrix.copy(w.projectionMatrix),J(q,U,_e)};function J(q,K,ue){ue===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ue.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ho*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(U)},this.getCameraTexture=function(q){return p[q]};let he=null;function se(q,K){if(h=K.getViewerPose(c||a),g=K,h!==null){const ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let _e=!1;ue.length!==U.cameras.length&&(U.cameras.length=0,_e=!0);for(let O=0;O<ue.length;O++){const me=ue[O];let De=null;if(d!==null)De=d.getViewport(me);else{const Me=f.getViewSubImage(u,me);De=Me.viewport,O===0&&(e.setRenderTargetTextures(v,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(v))}let Re=A[O];Re===void 0&&(Re=new Sn,Re.layers.enable(O),Re.viewport=new ht,A[O]=Re),Re.matrix.fromArray(me.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(me.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(De.x,De.y,De.width,De.height),O===0&&(U.matrix.copy(Re.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),_e===!0&&U.cameras.push(Re)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){f=n.getBinding();const O=f.getDepthInformation(ue[0]);O&&O.isValid&&O.texture&&x.init(O,s.renderState)}if(Ee&&Ee.includes("camera-access")&&m){e.state.unbindTexture(),f=n.getBinding();for(let O=0;O<ue.length;O++){const me=ue[O].camera;if(me){let De=p[me];De||(De=new Dh,p[me]=De);const Re=f.getCameraImage(me);De.sourceTexture=Re}}}}for(let ue=0;ue<E.length;ue++){const _e=M[ue],Ee=E[ue];_e!==null&&Ee!==void 0&&Ee.update(_e,K,c||a)}he&&he(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Q=new Gh;Q.setAnimationLoop(se),this.setAnimationLoop=function(q){he=q},this.dispose=function(){}}}const bi=new En,Dg=new vt;function Ig(i,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Ch(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),f(x,p)):p.isMeshPhongMaterial?(r(x,p),h(x,p)):p.isMeshStandardMaterial?(r(x,p),u(x,p),p.isMeshPhysicalMaterial&&d(x,p,v)):p.isMeshMatcapMaterial?(r(x,p),g(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),m(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?l(x,p,y,_):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===sn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===sn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,v=y.envMapRotation;_&&(x.envMap.value=_,bi.copy(v),bi.x*=-1,bi.y*=-1,bi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),x.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(bi)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,y,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=_*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function f(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function u(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,y){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,p){p.matcap&&(x.matcap.value=p.matcap)}function m(x,p){const y=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ug(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",x));const E=_.program;n.updateUBOMapping(y,E);const M=e.render.frame;r[y.id]!==M&&(u(y),r[y.id]=M)}function h(y){const _=f();y.__bindingPointIndex=_;const v=i.createBuffer(),E=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const _=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,T=v.length;M<T;M++){const D=Array.isArray(v[M])?v[M]:[v[M]];for(let w=0,b=D.length;w<b;w++){const A=D[w];if(d(A,M,w,E)===!0){const U=A.__offset,L=Array.isArray(A.value)?A.value:[A.value];let G=0;for(let z=0;z<L.length;z++){const N=L[z],I=m(N);typeof N=="number"||typeof N=="boolean"?(A.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,U+G,A.__data)):N.isMatrix3?(A.__data[0]=N.elements[0],A.__data[1]=N.elements[1],A.__data[2]=N.elements[2],A.__data[3]=0,A.__data[4]=N.elements[3],A.__data[5]=N.elements[4],A.__data[6]=N.elements[5],A.__data[7]=0,A.__data[8]=N.elements[6],A.__data[9]=N.elements[7],A.__data[10]=N.elements[8],A.__data[11]=0):(N.toArray(A.__data,G),G+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,v,E){const M=y.value,T=_+"_"+v;if(E[T]===void 0)return typeof M=="number"||typeof M=="boolean"?E[T]=M:E[T]=M.clone(),!0;{const D=E[T];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return E[T]=M,!0}else if(D.equals(M)===!1)return D.copy(M),!0}return!1}function g(y){const _=y.uniforms;let v=0;const E=16;for(let T=0,D=_.length;T<D;T++){const w=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,A=w.length;b<A;b++){const U=w[b],L=Array.isArray(U.value)?U.value:[U.value];for(let G=0,z=L.length;G<z;G++){const N=L[G],I=m(N),R=v%E,W=R%I.boundary,P=R+W;v+=W,P!==0&&E-P<I.storage&&(v+=E-P),U.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=I.storage}}}const M=v%E;return M>0&&(v+=E-M),y.__size=v,y.__cache={},this}function m(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function x(y){const _=y.target;_.removeEventListener("dispose",x);const v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Fg{constructor(e={}){const{canvas:t=Yf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),m=new Int32Array(4);let x=null,p=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Qt;let M=0,T=0,D=null,w=-1,b=null;const A=new ht,U=new ht;let L=null;const G=new qe(0);let z=0,N=t.width,I=t.height,R=1,W=null,P=null;const H=new ht(0,0,N,I),J=new ht(0,0,N,I);let he=!1;const se=new Jr;let Q=!1,q=!1;const K=new vt,ue=new B,_e=new ht,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function Ge(){return D===null?R:1}let O=n;function me(C,$){return t.getContext(C,$)}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),O===null){const $="webgl2";if(O=me($,C),O===null)throw me($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let De,Re,Me,ze,Le,Xe,Je,Ye,F,S,X,ae,le,ce,ke,ve,Fe,Ne,re,k,Z,ie,oe,we;function V(){De=new q0(O),De.init(),ie=new Tg(O,De),Re=new O0(O,De,e,ie),Me=new Eg(O,De),Re.reversedDepthBuffer&&u&&Me.buffers.depth.setReversed(!0),ze=new Y0(O),Le=new ug,Xe=new Ag(O,De,Me,Le,Re,ie,ze),Je=new B0(v),Ye=new W0(v),F=new ed(O),oe=new N0(O,F),S=new X0(O,F,ze,oe),X=new j0(O,S,F,ze),re=new K0(O,Re,Xe),ve=new k0(Le),ae=new fg(v,Je,Ye,De,Re,oe,ve),le=new Ig(v,Le),ce=new pg,ke=new yg(De),Ne=new F0(v,Je,Ye,Me,X,d,l),Fe=new bg(v,X,Re),we=new Ug(O,ze,Re,Me),k=new z0(O,De,ze),Z=new $0(O,De,ze),ze.programs=ae.programs,v.capabilities=Re,v.extensions=De,v.properties=Le,v.renderLists=ce,v.shadowMap=Fe,v.state=Me,v.info=ze}V();const j=new Pg(v,O);this.xr=j,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=De.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=De.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(C){C!==void 0&&(R=C,this.setSize(N,I,!1))},this.getSize=function(C){return C.set(N,I)},this.setSize=function(C,$,ne=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,I=$,t.width=Math.floor(C*R),t.height=Math.floor($*R),ne===!0&&(t.style.width=C+"px",t.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(N*R,I*R).floor()},this.setDrawingBufferSize=function(C,$,ne){N=C,I=$,R=ne,t.width=Math.floor(C*ne),t.height=Math.floor($*ne),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(H)},this.setViewport=function(C,$,ne,ee){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,$,ne,ee),Me.viewport(A.copy(H).multiplyScalar(R).round())},this.getScissor=function(C){return C.copy(J)},this.setScissor=function(C,$,ne,ee){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,$,ne,ee),Me.scissor(U.copy(J).multiplyScalar(R).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(C){Me.setScissorTest(he=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){P=C},this.getClearColor=function(C){return C.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,ne=!0){let ee=0;if(C){let Y=!1;if(D!==null){const xe=D.texture.format;Y=xe===al||xe===rl||xe===sl}if(Y){const xe=D.texture.type,de=xe===Bn||xe===di||xe===Xs||xe===$s||xe===nl||xe===il,Ae=Ne.getClearColor(),ye=Ne.getClearAlpha(),Ie=Ae.r,Be=Ae.g,be=Ae.b;de?(g[0]=Ie,g[1]=Be,g[2]=be,g[3]=ye,O.clearBufferuiv(O.COLOR,0,g)):(m[0]=Ie,m[1]=Be,m[2]=be,m[3]=ye,O.clearBufferiv(O.COLOR,0,m))}else ee|=O.COLOR_BUFFER_BIT}$&&(ee|=O.DEPTH_BUFFER_BIT),ne&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ne.dispose(),ce.dispose(),ke.dispose(),Le.dispose(),Je.dispose(),Ye.dispose(),X.dispose(),oe.dispose(),we.dispose(),ae.dispose(),j.dispose(),j.removeEventListener("sessionstart",_t),j.removeEventListener("sessionend",at),Qe.stop()};function te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=ze.autoReset,$=Fe.enabled,ne=Fe.autoUpdate,ee=Fe.needsUpdate,Y=Fe.type;V(),ze.autoReset=C,Fe.enabled=$,Fe.autoUpdate=ne,Fe.needsUpdate=ee,Fe.type=Y}function pe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function fe(C){const $=C.target;$.removeEventListener("dispose",fe),Ce($)}function Ce(C){Te(C),Le.remove(C)}function Te(C){const $=Le.get(C).programs;$!==void 0&&($.forEach(function(ne){ae.releaseProgram(ne)}),C.isShaderMaterial&&ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,ne,ee,Y,xe){$===null&&($=Ee);const de=Y.isMesh&&Y.matrixWorld.determinant()<0,Ae=_n(C,$,ne,ee,Y);Me.setMaterial(ee,de);let ye=ne.index,Ie=1;if(ee.wireframe===!0){if(ye=S.getWireframeAttribute(ne),ye===void 0)return;Ie=2}const Be=ne.drawRange,be=ne.attributes.position;let Ve=Be.start*Ie,He=(Be.start+Be.count)*Ie;xe!==null&&(Ve=Math.max(Ve,xe.start*Ie),He=Math.min(He,(xe.start+xe.count)*Ie)),ye!==null?(Ve=Math.max(Ve,0),He=Math.min(He,ye.count)):be!=null&&(Ve=Math.max(Ve,0),He=Math.min(He,be.count));const tt=He-Ve;if(tt<0||tt===1/0)return;oe.setup(Y,ee,Ae,ne,ye);let Ze,nt=k;if(ye!==null&&(Ze=F.get(ye),nt=Z,nt.setIndex(Ze)),Y.isMesh)ee.wireframe===!0?(Me.setLineWidth(ee.wireframeLinewidth*Ge()),nt.setMode(O.LINES)):nt.setMode(O.TRIANGLES);else if(Y.isLine){let Oe=ee.linewidth;Oe===void 0&&(Oe=1),Me.setLineWidth(Oe*Ge()),Y.isLineSegments?nt.setMode(O.LINES):Y.isLineLoop?nt.setMode(O.LINE_LOOP):nt.setMode(O.LINE_STRIP)}else Y.isPoints?nt.setMode(O.POINTS):Y.isSprite&&nt.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))nt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Oe=Y._multiDrawStarts,ft=Y._multiDrawCounts,et=Y._multiDrawCount,Tt=ye?F.get(ye).bytesPerElement:1,Kt=Le.get(ee).currentProgram.getUniforms();for(let Rt=0;Rt<et;Rt++)Kt.setValue(O,"_gl_DrawID",Rt),nt.render(Oe[Rt]/Tt,ft[Rt])}else if(Y.isInstancedMesh)nt.renderInstances(Ve,tt,Y.count);else if(ne.isInstancedBufferGeometry){const Oe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,ft=Math.min(ne.instanceCount,Oe);nt.renderInstances(Ve,tt,ft)}else nt.render(Ve,tt)};function Ke(C,$,ne){C.transparent===!0&&C.side===en&&C.forceSinglePass===!1?(C.side=sn,C.needsUpdate=!0,qt(C,$,ne),C.side=ui,C.needsUpdate=!0,qt(C,$,ne),C.side=en):qt(C,$,ne)}this.compile=function(C,$,ne=null){ne===null&&(ne=C),p=ke.get(ne),p.init($),_.push(p),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),C!==ne&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const ee=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const xe=Y.material;if(xe)if(Array.isArray(xe))for(let de=0;de<xe.length;de++){const Ae=xe[de];Ke(Ae,ne,Y),ee.add(Ae)}else Ke(xe,ne,Y),ee.add(xe)}),p=_.pop(),ee},this.compileAsync=function(C,$,ne=null){const ee=this.compile(C,$,ne);return new Promise(Y=>{function xe(){if(ee.forEach(function(de){Le.get(de).currentProgram.isReady()&&ee.delete(de)}),ee.size===0){Y(C);return}setTimeout(xe,10)}De.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let it=null;function dt(C){it&&it(C)}function _t(){Qe.stop()}function at(){Qe.start()}const Qe=new Gh;Qe.setAnimationLoop(dt),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(C){it=C,j.setAnimationLoop(C),C===null?Qe.stop():Qe.start()},j.addEventListener("sessionstart",_t),j.addEventListener("sessionend",at),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera($),$=j.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,$,D),p=ke.get(C,_.length),p.init($),_.push(p),K.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),se.setFromProjectionMatrix(K,On,$.reversedDepth),q=this.localClippingEnabled,Q=ve.init(this.clippingPlanes,q),x=ce.get(C,y.length),x.init(),y.push(x),j.enabled===!0&&j.isPresenting===!0){const xe=v.xr.getDepthSensingMesh();xe!==null&&Lt(xe,$,-1/0,v.sortObjects)}Lt(C,$,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(W,P),Ue=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ue&&Ne.addToRenderList(x,C),this.info.render.frame++,Q===!0&&ve.beginShadows();const ne=p.state.shadowsArray;Fe.render(ne,C,$),Q===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=x.opaque,Y=x.transmissive;if(p.setupLights(),$.isArrayCamera){const xe=$.cameras;if(Y.length>0)for(let de=0,Ae=xe.length;de<Ae;de++){const ye=xe[de];Nt(ee,Y,C,ye)}Ue&&Ne.render(C);for(let de=0,Ae=xe.length;de<Ae;de++){const ye=xe[de];St(x,C,ye,ye.viewport)}}else Y.length>0&&Nt(ee,Y,C,$),Ue&&Ne.render(C),St(x,C,$);D!==null&&T===0&&(Xe.updateMultisampleRenderTarget(D),Xe.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(v,C,$),oe.resetDefaultState(),w=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],Q===!0&&ve.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?x=y[y.length-1]:x=null};function Lt(C,$,ne,ee){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||se.intersectsSprite(C)){ee&&_e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(K);const de=X.update(C),Ae=C.material;Ae.visible&&x.push(C,de,Ae,ne,_e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||se.intersectsObject(C))){const de=X.update(C),Ae=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_e.copy(C.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),_e.copy(de.boundingSphere.center)),_e.applyMatrix4(C.matrixWorld).applyMatrix4(K)),Array.isArray(Ae)){const ye=de.groups;for(let Ie=0,Be=ye.length;Ie<Be;Ie++){const be=ye[Ie],Ve=Ae[be.materialIndex];Ve&&Ve.visible&&x.push(C,de,Ve,ne,_e.z,be)}}else Ae.visible&&x.push(C,de,Ae,ne,_e.z,null)}}const xe=C.children;for(let de=0,Ae=xe.length;de<Ae;de++)Lt(xe[de],$,ne,ee)}function St(C,$,ne,ee){const Y=C.opaque,xe=C.transmissive,de=C.transparent;p.setupLightsView(ne),Q===!0&&ve.setGlobalState(v.clippingPlanes,ne),ee&&Me.viewport(A.copy(ee)),Y.length>0&&At(Y,$,ne),xe.length>0&&At(xe,$,ne),de.length>0&&At(de,$,ne),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Nt(C,$,ne,ee){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new Jn(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Fi:Bn,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const xe=p.state.transmissionRenderTarget[ee.id],de=ee.viewport||A;xe.setSize(de.z*v.transmissionResolutionScale,de.w*v.transmissionResolutionScale);const Ae=v.getRenderTarget(),ye=v.getActiveCubeFace(),Ie=v.getActiveMipmapLevel();v.setRenderTarget(xe),v.getClearColor(G),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),Ue&&Ne.render(ne);const Be=v.toneMapping;v.toneMapping=fi;const be=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),Q===!0&&ve.setGlobalState(v.clippingPlanes,ee),At(C,ne,ee),Xe.updateMultisampleRenderTarget(xe),Xe.updateRenderTargetMipmap(xe),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let He=0,tt=$.length;He<tt;He++){const Ze=$[He],nt=Ze.object,Oe=Ze.geometry,ft=Ze.material,et=Ze.group;if(ft.side===en&&nt.layers.test(ee.layers)){const Tt=ft.side;ft.side=sn,ft.needsUpdate=!0,rn(nt,ne,ee,Oe,ft,et),ft.side=Tt,ft.needsUpdate=!0,Ve=!0}}Ve===!0&&(Xe.updateMultisampleRenderTarget(xe),Xe.updateRenderTargetMipmap(xe))}v.setRenderTarget(Ae,ye,Ie),v.setClearColor(G,z),be!==void 0&&(ee.viewport=be),v.toneMapping=Be}function At(C,$,ne){const ee=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,xe=C.length;Y<xe;Y++){const de=C[Y],Ae=de.object,ye=de.geometry,Ie=de.group;let Be=de.material;Be.allowOverride===!0&&ee!==null&&(Be=ee),Ae.layers.test(ne.layers)&&rn(Ae,$,ne,ye,Be,Ie)}}function rn(C,$,ne,ee,Y,xe){C.onBeforeRender(v,$,ne,ee,Y,xe),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(v,$,ne,ee,C,xe),Y.transparent===!0&&Y.side===en&&Y.forceSinglePass===!1?(Y.side=sn,Y.needsUpdate=!0,v.renderBufferDirect(ne,$,ee,Y,C,xe),Y.side=ui,Y.needsUpdate=!0,v.renderBufferDirect(ne,$,ee,Y,C,xe),Y.side=en):v.renderBufferDirect(ne,$,ee,Y,C,xe),C.onAfterRender(v,$,ne,ee,Y,xe)}function qt(C,$,ne){$.isScene!==!0&&($=Ee);const ee=Le.get(C),Y=p.state.lights,xe=p.state.shadowsArray,de=Y.state.version,Ae=ae.getParameters(C,Y.state,xe,$,ne),ye=ae.getProgramCacheKey(Ae);let Ie=ee.programs;ee.environment=C.isMeshStandardMaterial?$.environment:null,ee.fog=$.fog,ee.envMap=(C.isMeshStandardMaterial?Ye:Je).get(C.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,Ie===void 0&&(C.addEventListener("dispose",fe),Ie=new Map,ee.programs=Ie);let Be=Ie.get(ye);if(Be!==void 0){if(ee.currentProgram===Be&&ee.lightsStateVersion===de)return on(C,Ae),Be}else Ae.uniforms=ae.getUniforms(C),C.onBeforeCompile(Ae,v),Be=ae.acquireProgram(Ae,ye),Ie.set(ye,Be),ee.uniforms=Ae.uniforms;const be=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(be.clippingPlanes=ve.uniform),on(C,Ae),ee.needsLights=lr(C),ee.lightsStateVersion=de,ee.needsLights&&(be.ambientLightColor.value=Y.state.ambient,be.lightProbe.value=Y.state.probe,be.directionalLights.value=Y.state.directional,be.directionalLightShadows.value=Y.state.directionalShadow,be.spotLights.value=Y.state.spot,be.spotLightShadows.value=Y.state.spotShadow,be.rectAreaLights.value=Y.state.rectArea,be.ltc_1.value=Y.state.rectAreaLTC1,be.ltc_2.value=Y.state.rectAreaLTC2,be.pointLights.value=Y.state.point,be.pointLightShadows.value=Y.state.pointShadow,be.hemisphereLights.value=Y.state.hemi,be.directionalShadowMap.value=Y.state.directionalShadowMap,be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,be.spotShadowMap.value=Y.state.spotShadowMap,be.spotLightMatrix.value=Y.state.spotLightMatrix,be.spotLightMap.value=Y.state.spotLightMap,be.pointShadowMap.value=Y.state.pointShadowMap,be.pointShadowMatrix.value=Y.state.pointShadowMatrix),ee.currentProgram=Be,ee.uniformsList=null,Be}function an(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=qr.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function on(C,$){const ne=Le.get(C);ne.outputColorSpace=$.outputColorSpace,ne.batching=$.batching,ne.batchingColor=$.batchingColor,ne.instancing=$.instancing,ne.instancingColor=$.instancingColor,ne.instancingMorph=$.instancingMorph,ne.skinning=$.skinning,ne.morphTargets=$.morphTargets,ne.morphNormals=$.morphNormals,ne.morphColors=$.morphColors,ne.morphTargetsCount=$.morphTargetsCount,ne.numClippingPlanes=$.numClippingPlanes,ne.numIntersection=$.numClipIntersection,ne.vertexAlphas=$.vertexAlphas,ne.vertexTangents=$.vertexTangents,ne.toneMapping=$.toneMapping}function _n(C,$,ne,ee,Y){$.isScene!==!0&&($=Ee),Xe.resetTextureUnits();const xe=$.fog,de=ee.isMeshStandardMaterial?$.environment:null,Ae=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ms,ye=(ee.isMeshStandardMaterial?Ye:Je).get(ee.envMap||de),Ie=ee.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Be=!!ne.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),be=!!ne.morphAttributes.position,Ve=!!ne.morphAttributes.normal,He=!!ne.morphAttributes.color;let tt=fi;ee.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(tt=v.toneMapping);const Ze=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,nt=Ze!==void 0?Ze.length:0,Oe=Le.get(ee),ft=p.state.lights;if(Q===!0&&(q===!0||C!==b)){const zt=C===b&&ee.id===w;ve.setState(ee,C,zt)}let et=!1;ee.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ft.state.version||Oe.outputColorSpace!==Ae||Y.isBatchedMesh&&Oe.batching===!1||!Y.isBatchedMesh&&Oe.batching===!0||Y.isBatchedMesh&&Oe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Oe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Oe.instancing===!1||!Y.isInstancedMesh&&Oe.instancing===!0||Y.isSkinnedMesh&&Oe.skinning===!1||!Y.isSkinnedMesh&&Oe.skinning===!0||Y.isInstancedMesh&&Oe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Oe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Oe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Oe.instancingMorph===!1&&Y.morphTexture!==null||Oe.envMap!==ye||ee.fog===!0&&Oe.fog!==xe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ve.numPlanes||Oe.numIntersection!==ve.numIntersection)||Oe.vertexAlphas!==Ie||Oe.vertexTangents!==Be||Oe.morphTargets!==be||Oe.morphNormals!==Ve||Oe.morphColors!==He||Oe.toneMapping!==tt||Oe.morphTargetsCount!==nt)&&(et=!0):(et=!0,Oe.__version=ee.version);let Tt=Oe.currentProgram;et===!0&&(Tt=qt(ee,$,Y));let Kt=!1,Rt=!1,Hn=!1;const gt=Tt.getUniforms(),jt=Oe.uniforms;if(Me.useProgram(Tt.program)&&(Kt=!0,Rt=!0,Hn=!0),ee.id!==w&&(w=ee.id,Rt=!0),Kt||b!==C){Me.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),gt.setValue(O,"projectionMatrix",C.projectionMatrix),gt.setValue(O,"viewMatrix",C.matrixWorldInverse);const Vt=gt.map.cameraPosition;Vt!==void 0&&Vt.setValue(O,ue.setFromMatrixPosition(C.matrixWorld)),Re.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&gt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Rt=!0,Hn=!0)}if(Y.isSkinnedMesh){gt.setOptional(O,Y,"bindMatrix"),gt.setOptional(O,Y,"bindMatrixInverse");const zt=Y.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),gt.setValue(O,"boneTexture",zt.boneTexture,Xe))}Y.isBatchedMesh&&(gt.setOptional(O,Y,"batchingTexture"),gt.setValue(O,"batchingTexture",Y._matricesTexture,Xe),gt.setOptional(O,Y,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",Y._indirectTexture,Xe),gt.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",Y._colorsTexture,Xe));const Dt=ne.morphAttributes;if((Dt.position!==void 0||Dt.normal!==void 0||Dt.color!==void 0)&&re.update(Y,ne,Tt),(Rt||Oe.receiveShadow!==Y.receiveShadow)&&(Oe.receiveShadow=Y.receiveShadow,gt.setValue(O,"receiveShadow",Y.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(jt.envMap.value=ye,jt.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&$.environment!==null&&(jt.envMapIntensity.value=$.environmentIntensity),Rt&&(gt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&or(jt,Hn),xe&&ee.fog===!0&&le.refreshFogUniforms(jt,xe),le.refreshMaterialUniforms(jt,ee,R,I,p.state.transmissionRenderTarget[C.id]),qr.upload(O,an(Oe),jt,Xe)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(qr.upload(O,an(Oe),jt,Xe),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&gt.setValue(O,"center",Y.center),gt.setValue(O,"modelViewMatrix",Y.modelViewMatrix),gt.setValue(O,"normalMatrix",Y.normalMatrix),gt.setValue(O,"modelMatrix",Y.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const zt=ee.uniformsGroups;for(let Vt=0,xi=zt.length;Vt<xi;Vt++){const Un=zt[Vt];we.update(Un,Tt),we.bind(Un,Tt)}}return Tt}function or(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function lr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,$,ne){const ee=Le.get(C);ee.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Le.get(C.texture).__webglTexture=$,Le.get(C.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ne,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const ne=Le.get(C);ne.__webglFramebuffer=$,ne.__useDefaultFramebuffer=$===void 0};const Ts=O.createFramebuffer();this.setRenderTarget=function(C,$=0,ne=0){D=C,M=$,T=ne;let ee=!0,Y=null,xe=!1,de=!1;if(C){const ye=Le.get(C);if(ye.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(O.FRAMEBUFFER,null),ee=!1;else if(ye.__webglFramebuffer===void 0)Xe.setupRenderTarget(C);else if(ye.__hasExternalTextures)Xe.rebindTextures(C,Le.get(C.texture).__webglTexture,Le.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const be=C.depthTexture;if(ye.__boundDepthTexture!==be){if(be!==null&&Le.has(be)&&(C.width!==be.image.width||C.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(C)}}const Ie=C.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(de=!0);const Be=Le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[$])?Y=Be[$][ne]:Y=Be[$],xe=!0):C.samples>0&&Xe.useMultisampledRTT(C)===!1?Y=Le.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?Y=Be[ne]:Y=Be,A.copy(C.viewport),U.copy(C.scissor),L=C.scissorTest}else A.copy(H).multiplyScalar(R).floor(),U.copy(J).multiplyScalar(R).floor(),L=he;if(ne!==0&&(Y=Ts),Me.bindFramebuffer(O.FRAMEBUFFER,Y)&&ee&&Me.drawBuffers(C,Y),Me.viewport(A),Me.scissor(U),Me.setScissorTest(L),xe){const ye=Le.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye.__webglTexture,ne)}else if(de){const ye=$;for(let Ie=0;Ie<C.textures.length;Ie++){const Be=Le.get(C.textures[Ie]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ie,Be.__webglTexture,ne,ye)}}else if(C!==null&&ne!==0){const ye=Le.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ye.__webglTexture,ne)}w=-1},this.readRenderTargetPixels=function(C,$,ne,ee,Y,xe,de,Ae=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){Me.bindFramebuffer(O.FRAMEBUFFER,ye);try{const Ie=C.textures[Ae],Be=Ie.format,be=Ie.type;if(!Re.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ee&&ne>=0&&ne<=C.height-Y&&(C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ae),O.readPixels($,ne,ee,Y,ie.convert(Be),ie.convert(be),xe))}finally{const Ie=D!==null?Le.get(D).__webglFramebuffer:null;Me.bindFramebuffer(O.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(C,$,ne,ee,Y,xe,de,Ae=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye)if($>=0&&$<=C.width-ee&&ne>=0&&ne<=C.height-Y){Me.bindFramebuffer(O.FRAMEBUFFER,ye);const Ie=C.textures[Ae],Be=Ie.format,be=Ie.type;if(!Re.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ve),O.bufferData(O.PIXEL_PACK_BUFFER,xe.byteLength,O.STREAM_READ),C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ae),O.readPixels($,ne,ee,Y,ie.convert(Be),ie.convert(be),0);const He=D!==null?Le.get(D).__webglFramebuffer:null;Me.bindFramebuffer(O.FRAMEBUFFER,He);const tt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Kf(O,tt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ve),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xe),O.deleteBuffer(Ve),O.deleteSync(tt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,ne=0){const ee=Math.pow(2,-ne),Y=Math.floor(C.image.width*ee),xe=Math.floor(C.image.height*ee),de=$!==null?$.x:0,Ae=$!==null?$.y:0;Xe.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,ne,0,0,de,Ae,Y,xe),Me.unbindTexture()};const Rs=O.createFramebuffer(),Cs=O.createFramebuffer();this.copyTextureToTexture=function(C,$,ne=null,ee=null,Y=0,xe=null){xe===null&&(Y!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=Y,Y=0):xe=0);let de,Ae,ye,Ie,Be,be,Ve,He,tt;const Ze=C.isCompressedTexture?C.mipmaps[xe]:C.image;if(ne!==null)de=ne.max.x-ne.min.x,Ae=ne.max.y-ne.min.y,ye=ne.isBox3?ne.max.z-ne.min.z:1,Ie=ne.min.x,Be=ne.min.y,be=ne.isBox3?ne.min.z:0;else{const Dt=Math.pow(2,-Y);de=Math.floor(Ze.width*Dt),Ae=Math.floor(Ze.height*Dt),C.isDataArrayTexture?ye=Ze.depth:C.isData3DTexture?ye=Math.floor(Ze.depth*Dt):ye=1,Ie=0,Be=0,be=0}ee!==null?(Ve=ee.x,He=ee.y,tt=ee.z):(Ve=0,He=0,tt=0);const nt=ie.convert($.format),Oe=ie.convert($.type);let ft;$.isData3DTexture?(Xe.setTexture3D($,0),ft=O.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Xe.setTexture2DArray($,0),ft=O.TEXTURE_2D_ARRAY):(Xe.setTexture2D($,0),ft=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment);const et=O.getParameter(O.UNPACK_ROW_LENGTH),Tt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Kt=O.getParameter(O.UNPACK_SKIP_PIXELS),Rt=O.getParameter(O.UNPACK_SKIP_ROWS),Hn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ze.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ze.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ie),O.pixelStorei(O.UNPACK_SKIP_ROWS,Be),O.pixelStorei(O.UNPACK_SKIP_IMAGES,be);const gt=C.isDataArrayTexture||C.isData3DTexture,jt=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const Dt=Le.get(C),zt=Le.get($),Vt=Le.get(Dt.__renderTarget),xi=Le.get(zt.__renderTarget);Me.bindFramebuffer(O.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Un=0;Un<ye;Un++)gt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get(C).__webglTexture,Y,be+Un),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get($).__webglTexture,xe,tt+Un)),O.blitFramebuffer(Ie,Be,de,Ae,Ve,He,de,Ae,O.DEPTH_BUFFER_BIT,O.NEAREST);Me.bindFramebuffer(O.READ_FRAMEBUFFER,null),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||Le.has(C)){const Dt=Le.get(C),zt=Le.get($);Me.bindFramebuffer(O.READ_FRAMEBUFFER,Rs),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,Cs);for(let Vt=0;Vt<ye;Vt++)gt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.__webglTexture,Y,be+Vt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Dt.__webglTexture,Y),jt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,zt.__webglTexture,xe,tt+Vt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,zt.__webglTexture,xe),Y!==0?O.blitFramebuffer(Ie,Be,de,Ae,Ve,He,de,Ae,O.COLOR_BUFFER_BIT,O.NEAREST):jt?O.copyTexSubImage3D(ft,xe,Ve,He,tt+Vt,Ie,Be,de,Ae):O.copyTexSubImage2D(ft,xe,Ve,He,Ie,Be,de,Ae);Me.bindFramebuffer(O.READ_FRAMEBUFFER,null),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else jt?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(ft,xe,Ve,He,tt,de,Ae,ye,nt,Oe,Ze.data):$.isCompressedArrayTexture?O.compressedTexSubImage3D(ft,xe,Ve,He,tt,de,Ae,ye,nt,Ze.data):O.texSubImage3D(ft,xe,Ve,He,tt,de,Ae,ye,nt,Oe,Ze):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xe,Ve,He,de,Ae,nt,Oe,Ze.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xe,Ve,He,Ze.width,Ze.height,nt,Ze.data):O.texSubImage2D(O.TEXTURE_2D,xe,Ve,He,de,Ae,nt,Oe,Ze);O.pixelStorei(O.UNPACK_ROW_LENGTH,et),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Kt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Rt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Hn),xe===0&&$.generateMipmaps&&O.generateMipmap(ft),Me.unbindTexture()},this.initRenderTarget=function(C){Le.get(C).__webglFramebuffer===void 0&&Xe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Xe.setTextureCube(C,0):C.isData3DTexture?Xe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Xe.setTexture2DArray(C,0):Xe.setTexture2D(C,0),Me.unbindTexture()},this.resetState=function(){M=0,T=0,D=null,Me.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const Se={POS:0,ROT:3,VEL:7,SPEED:13,RPM:14,GEAR:15,WHEELS:18,WHEEL_STRIDE:8,W_LENGTH:0,W_ANGLE:1,W_SPIN:2,W_SLIP:4,W_SLIP_TAN:5,W_GROUNDED:6,W_STEER:7,CRUSH:50,POWER:54,DAMAGE:56,FLOOD:58,DROWNED:59,HOLDS:61,WHEELS_OFF:62,SOFT_AWAKE:63},cn={BLOW:1,SNAPPED:2,GLASS:3,SPLASH:4,HORN:5,WRECK:6,CAME_OFF:7,PANEL:8,FELL:9},nr=17,Mt={ID:0,WHAT:1,WHICH:2,STATE:3,POS:4,ROT:7,HALF:11,VEL:14},Ut={BODIES:0,AWAKE:1,WALLS:2,WALL_COLLIDERS:3,PIECES:4,PARTS:5,BROKEN:6,FALLEN:7,PLANNED:10,PARTITIONS:11,HELD:12,THINGS:13,ARMED:14,OWN:15};function wc(i){const e=new TextDecoder,t=[];for(let n=0;n<i.p2p_room_kind_count();n++)t.push(e.decode(new Uint8Array(i.memory.buffer,i.p2p_room_kind_name(n),i.p2p_room_kind_name_len(n))));return t}function bc(i){const e=new TextDecoder,t=[];for(let n=0;n<i.p2p_kind_count();n++)t.push(e.decode(new Uint8Array(i.memory.buffer,i.p2p_kind_name(n),i.p2p_kind_name_len(n))));return t}function Sc(i){const e=i.p2p_rubble_stride();if(e!==nr)throw new Error(`the sim core reports a piece of rubble in ${e} floats and this page reads ${nr}: they are from different builds`);const t=new TextDecoder,n=[];for(let s=0;s<i.p2p_panel_kind_count();s++)n.push(t.decode(new Uint8Array(i.memory.buffer,i.p2p_panel_kind_name(s),i.p2p_panel_kind_name_len(s))));return n}function Fa(i){const e=new TextDecoder,t=new Map;for(let n=0;n<i.p2p_kind_count();n++){const s=e.decode(new Uint8Array(i.memory.buffer,i.p2p_kind_name(n),i.p2p_kind_name_len(n)));t.set(s,{name:s,half:[i.p2p_kind_half(n,0),i.p2p_kind_half(n,1),i.p2p_kind_half(n,2)]})}return t}const ir=13,Pt={INDEX:0,POS:1,ROT:4,SPEED:8,LOOK:9,FLAGS:10,KIND:11,CURVE:12},zs={BRAKING:1,HORN:2,WRECK:4,LEFT:8,RIGHT:16};function Ng(i){const e=i.p2p_traffic_stride();if(e!==ir)throw new Error(`the sim core reports a car of traffic in ${e} floats and this page reads ${ir}: they are from different builds`);const t=new TextDecoder,n=[];for(let s=0;s<i.p2p_vehicle_count();s++)n.push({index:s,name:t.decode(new Uint8Array(i.memory.buffer,i.p2p_vehicle_name(s),i.p2p_vehicle_name_len(s))),half:[i.p2p_vehicle_half(s,0),i.p2p_vehicle_half(s,1),i.p2p_vehicle_half(s,2)],clearance:i.p2p_vehicle_half(s,3)});return n}const xl=i=>BigInt.asUintN(64,i).toString(16).padStart(16,"0");async function zg(i){const e=await fetch(i);if(!e.ok)throw new Error(`the sim core did not load (${e.status})`);const{instance:t}=await WebAssembly.instantiate(await e.arrayBuffer(),{});return t.exports}function Og(i){const e=(s,r)=>new TextDecoder().decode(new Uint8Array(i.memory.buffer,s,r)),t=[];for(let s=0;s<i.p2p_param_count();s++)t.push(e(i.p2p_param_name(s),i.p2p_param_name_len(s)));const n=[];for(let s=0;s<i.p2p_car_count();s++)n.push({index:s,name:e(i.p2p_car_name(s),i.p2p_car_name_len(s)),says:e(i.p2p_car_says(s),i.p2p_car_says_len(s)),param:r=>i.p2p_car_param(s,t.indexOf(r))});return n}const Os=new Float32Array(0);class Ec{constructor(e,t,n=1,s=0){this.core=e;const r=e.p2p_alloc(t.length);if(new Uint8Array(e.memory.buffer,r,t.length).set(t),this.ptr=e.p2p_new_car(n>>>0,0,r,t.length,s),e.p2p_free(r,t.length),!this.ptr)throw new Error("the sim core refused the world file");this.tickRate=e.p2p_tick_rate(),this.len=e.p2p_state_len()}tickRate;ptr;len;place(e,t,n){this.core.p2p_place(this.ptr,e,t,n)}placeAt(e,t,n,s){this.core.p2p_place_at(this.ptr,e,t,n,s)}step(e){this.core.p2p_step(this.ptr,e.steer,e.throttle,e.brake,e.handbrake)}read(e){e.set(new Float32Array(this.core.memory.buffer,this.core.p2p_state(this.ptr),this.len))}get stateLength(){return this.len}get tick(){return this.core.p2p_tick(this.ptr)}digest(){return xl(this.core.p2p_digest(this.ptr))}drop(){this.ptr&&this.core.p2p_drop(this.ptr),this.ptr=0}movedProps(){const e=this.core.p2p_props_drain(this.ptr);return e?new Float32Array(this.core.memory.buffer,this.core.p2p_props_ptr(this.ptr),e*8).slice():Os}traffic(){const e=this.core.p2p_traffic_drain(this.ptr);return{count:e,cars:e?new Float32Array(this.core.memory.buffer,this.core.p2p_traffic_ptr(this.ptr),e*ir):Os}}setSoft(e){this.core.p2p_soft_set(this.ptr,e?1:0)}softBuilt(){const e=this.core.p2p_soft_drain(this.ptr);if(!e)return null;const t=new Float32Array(e*3),n=new Int16Array(e);for(let s=0;s<e;s++){for(let r=0;r<3;r++)t[s*3+r]=this.core.p2p_soft_built(this.ptr,s,r);n[s]=this.core.p2p_soft_built(this.ptr,s,3)}return{rest:t,kind:n}}softNow(){const e=this.core.p2p_soft_drain(this.ptr),t=this.core.p2p_loose_count(this.ptr);return{nodes:e?new Float32Array(this.core.memory.buffer,this.core.p2p_soft_ptr(this.ptr),e*3).slice():Os,loose:t?new Float32Array(this.core.memory.buffer,this.core.p2p_loose_ptr(this.ptr),t*8).slice():Os}}get panelCount(){return this.core.p2p_panel_count(this.ptr)}panel(e){const t=this.core.p2p_panel(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,t,11);return{index:e,x0:n[0],z0:n[1],x1:n[2],z1:n[3],foot:n[4],holeTop:n[5],top:n[6],building:n[7],kind:n[8],state:n[9],role:n[10]}}rubble(){const e=this.core.p2p_rubble_drain(this.ptr);return e?new Float32Array(this.core.memory.buffer,this.core.p2p_rubble_ptr(this.ptr),e*nr).slice():Os}inside(e){const t=this.core.p2p_inside(this.ptr,e);if(!t)return null;const n=new Float32Array(this.core.memory.buffer,this.core.p2p_inside_ptr(this.ptr),t),s={arche:n[0],made:n[5]===1,held:n[6]===1,walls:n[7],rooms:[],parts:[],doors:[],items:[]};let r=8;for(let a=0;a<n[1];a++,r+=9)s.rooms.push({quad:[[n[r],n[r+1]],[n[r+2],n[r+3]],[n[r+4],n[r+5]],[n[r+6],n[r+7]]],kind:n[r+8]});for(let a=0;a<n[2];a++,r+=5)s.parts.push({ax:n[r],az:n[r+1],bx:n[r+2],bz:n[r+3],kind:n[r+4]});for(let a=0;a<n[3];a++,r+=1)s.doors.push(n[r]);for(let a=0;a<n[4];a++,r+=6)s.items.push({kind:n[r],x:n[r+1],y:n[r+2],z:n[r+3],yaw:n[r+4],state:n[r+5]});return s}get propsBase(){return this.core.p2p_props_base(this.ptr)}propOrigin(e){const t=this.core.p2p_prop_origin(this.ptr,e,0);return t<0?null:{b:t,i:this.core.p2p_prop_origin(this.ptr,e,1),kind:this.core.p2p_prop_origin(this.ptr,e,2)}}count(e){return this.core.p2p_count(this.ptr,e)}wantTraffic(e){this.core.p2p_traffic_want(this.ptr,e)}events(){const e=this.core.p2p_events_drain(this.ptr);if(!e)return[];const t=new Float32Array(this.core.memory.buffer,this.core.p2p_events_ptr(this.ptr),e*3),n=[];for(let s=0;s<e;s++)n.push({what:t[s*3],a:t[s*3+1],b:t[s*3+2]});return n}params(){const e=this.core,t=new TextDecoder,n=[],s=(r,a)=>t.decode(new Uint8Array(e.memory.buffer,r,a));for(let r=0;r<e.p2p_param_count();r++)n.push({index:r,name:s(e.p2p_param_name(r),e.p2p_param_name_len(r)),doc:s(e.p2p_param_doc(r),e.p2p_param_doc_len(r)),default:e.p2p_param_default(r)});return n}param(e){return this.core.p2p_param_get(this.ptr,e)}setParam(e,t){this.core.p2p_param_set(this.ptr,e,t)}}let $h="mid";function kg(i){$h=i}function vl(){return $h}const ci=new B(-.72,.46,.52).normalize(),Ac=new $e(-ci.x/ci.y,-ci.z/ci.y),fs=i=>{const e=i.toFixed(5);return e.includes(".")?e:`${e}.0`},Yh={far:1200},ki=`
#ifndef P2P_LOOK
#define P2P_LOOK
const vec3 P2P_SUN = vec3(${fs(ci.x)}, ${fs(ci.y)}, ${fs(ci.z)});
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
`;let Tc=!1;function Bg(){if(Tc)return;Tc=!0;const i=st;i.fog_pars_vertex=`
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
  ${ki}
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
		return mix( 1.0, shadow, shadowIntensity * ( 1.0 - smoothstep( 0.80, 0.98, max( p2pEdge.x, p2pEdge.y ) ) ) );${e.slice(t+43)}`}let $o=null;function Hg(i){$o=i}function Pi(){if(!$o)throw new Error("the ground is built before what stands on it: buildGround first");return $o}const Kh=128;let Ir=null;function Gg(i){if(Ir)return Ir;const[e,t,n,s]=i.box,r=2048,a=r/(n-e),o=r/(s-t),l=document.createElement("canvas");l.width=r,l.height=r;const c=l.getContext("2d");c.fillStyle="#000",c.fillRect(0,0,r,r),c.globalCompositeOperation="lighten";const h=g=>(g-e)*a,f=g=>(g-t)*o,u=g=>`rgb(${Math.round(Math.min(1,g/Kh)*255)},0,0)`;for(const g of i.buildings){const m=g.r,x=g.y1-g.y0;if(m.length<4||x<2)continue;let p=0;for(let E=0;E+1<m.length;E++)p+=m[E][0]*m[E+1][1]-m[E+1][0]*m[E][1];const y=p>0?1:-1,_=Ac.x*x,v=Ac.y*x;for(let E=0;E+1<m.length;E++){const[M,T]=m[E],[D,w]=m[E+1],b=Math.hypot(D-M,w-T);if(b<.05)continue;const A=(w-T)/b*y,U=-(D-M)/b*y,L=A*_+U*v;if(L<=.5)continue;const G=c.createLinearGradient(h(M),f(T),h(M+A*L),f(T+U*L));G.addColorStop(0,u(x)),G.addColorStop(1,"#000"),c.fillStyle=G,c.beginPath(),c.moveTo(h(M),f(T)),c.lineTo(h(D),f(w)),c.lineTo(h(D+_),f(w+v)),c.lineTo(h(M+_),f(T+v)),c.closePath(),c.fill()}c.fillStyle=u(x),c.beginPath(),m.forEach(([E,M],T)=>{T===0?c.moveTo(h(E),f(M)):c.lineTo(h(E),f(M))}),c.closePath(),c.fill()}c.shadowColor="rgb(0,255,0)",c.shadowBlur=5,c.fillStyle="rgb(0,255,0)";for(const g of i.buildings)g.r.length<4||(c.beginPath(),g.r.forEach(([m,x],p)=>{p===0?c.moveTo(h(m),f(x)):c.lineTo(h(m),f(x))}),c.closePath(),c.fill());const d=new Eu(l);return d.flipY=!1,d.colorSpace=Ln,d.generateMipmaps=!0,d.minFilter=Kn,d.magFilter=fn,d.anisotropy=4,Ir={texture:d,box:new ht(e,t,1/(n-e),1/(s-t))},Ir}let Ur=null;function Vg(i){if(Ur)return Ur;let e=1/0,t=1/0,n=-1/0,s=-1/0;for(const d of i.ways??[])if(d.k==="tunnel")for(const g of d.p)e=Math.min(e,g[0]-20),t=Math.min(t,g[2]-20),n=Math.max(n,g[0]+20),s=Math.max(s,g[2]+20);e===1/0&&(e=0,t=0,n=1,s=1);const r=Math.max(1,Math.ceil((n-e)/1.5)),a=Math.max(1,Math.ceil((s-t)/1.5)),o=r/(n-e),l=a/(s-t),c=(i.ground.min??0)-10,h=new Uint8Array(r*a*4),f=d=>Math.max(1,Math.min(255,Math.round((d-c)*2)));for(const d of i.ways??[]){if(d.k!=="tunnel")continue;const g=d.clear??5.6,m=d.half+.6;for(let x=0;x+1<d.p.length;x++){const p=d.p[x],y=d.p[x+1],_=y[0]-p[0],v=y[2]-p[2],E=_*_+v*v||1,M=Math.floor((Math.min(p[0],y[0])-m-e)*o),T=Math.ceil((Math.max(p[0],y[0])+m-e)*o),D=Math.floor((Math.min(p[2],y[2])-m-t)*l),w=Math.ceil((Math.max(p[2],y[2])+m-t)*l);for(let b=Math.max(0,D);b<=Math.min(a-1,w);b++)for(let A=Math.max(0,M);A<=Math.min(r-1,T);A++){const U=e+(A+.5)/o,L=t+(b+.5)/l,G=Math.min(1,Math.max(0,((U-p[0])*_+(L-p[2])*v)/E));if(Math.hypot(p[0]+_*G-U,p[2]+v*G-L)>m)continue;const z=p[1]+(y[1]-p[1])*G,N=(b*r+A)*4;h[N]=f(z),h[N+1]=Math.max(h[N+1],f(z+g)),h[N+3]=255}}}const u=new _s(h,r,a,un);return u.minFilter=u.magFilter=tn,u.generateMipmaps=!1,u.needsUpdate=!0,Ur={texture:u,box:new ht(e,t,o/r,l/a),base:c},Ur}function Zn(i,e,t){const n=Gg(e),s=Vg(e);return i.onBeforeCompile=r=>{r.uniforms.uShade={value:n.texture},r.uniforms.uShadeBox={value:n.box},r.uniforms.uTubes={value:s.texture},r.uniforms.uTubesBox={value:s.box},Object.assign(r.uniforms,t.uniforms??{}),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorld;
${t.vertexPars??""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
${t.vertex??""}`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWorld;
        uniform sampler2D uShade; uniform vec4 uShadeBox;
        uniform sampler2D uTubes; uniform vec4 uTubesBox;
        ${ki}
        // x: metres of shade standing over the ground at (x, z); y: how closed in by walls, 0 to 1
        vec2 p2pShade( vec2 xz ) {
          vec2 uv = ( xz - uShadeBox.xy ) * uShadeBox.zw;
          vec4 t = texture2D( uShade, uv );
          // past the map's edge there is nothing to cast shade: do not smear the last row outward
          float inside = step( 0.0, uv.x ) * step( uv.x, 1.0 ) * step( 0.0, uv.y ) * step( uv.y, 1.0 );
          return vec2( t.r * ${fs(Kh)}, t.g ) * inside;
        }
        ${t.fragmentPars??""}`).replace("#include <color_fragment>",`#include <color_fragment>
        ${t.tube===!1?"":`{
          // inside a tunnel's tube, over its floor and under its roof: not drawn (the hill's ground at a portal)
          vec2 tuv = ( vWorld.xz - uTubesBox.xy ) * uTubesBox.zw;
          vec4 tb = texture2D( uTubes, tuv );
          if ( tb.a > 0.5 && tuv.x > 0.0 && tuv.x < 1.0 && tuv.y > 0.0 && tuv.y < 1.0 ) {
            float floorY = tb.r * 127.5 + ${fs(s.base)}, roofY = tb.g * 127.5 + ${fs(s.base)};
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
        float p2pLit = clamp( dot( reflectedLight.directDiffuse, vec3( 0.3333 ) ) / max( dot( diffuseColor.rgb, vec3( 0.3333 ) ), 0.02 ) / 1.15, 0.0, 1.0 );`).replace("#include <envmap_fragment>",t.final??"")},i.customProgramCacheKey=()=>t.key,i}const Wg=i=>i>=0&&i<=6,Cn=4,qg=[{size:[.62,.42,.05],color:5988195},{size:[.6,.46,.52],color:2895152},{size:[.24,.19,.17],color:1118740},{size:[.38,.38,.05],color:1381655,round:!0},{size:[1.3,.22,.32],color:1776670},{size:[.5,.75,.55],color:2762276},{size:[.5,.75,.55],color:2762276},{size:[.7,.24,.5],color:1579291}];class Xg{constructor(e,t,n,s,r,a){this.body=e,this.group=n,this.world=s,this.wheel=r,this.wheelMaterial=a;const o=e.geometry.getAttribute("position");this.base=Float32Array.from(o.array),this.nodes0=t.rest;const l=t.kind.length,c=o.count;this.ties=new Int16Array(c*Cn).fill(-1),this.weights=new Float32Array(c*Cn),this.panelOf=new Uint8Array(c);const h=[];for(let d=0;d<l;d++)Wg(t.kind[d])&&h.push(d);const f=(d,g,m,x)=>{const p=t.rest[d*3]-g,y=t.rest[d*3+1]-m,_=t.rest[d*3+2]-x;return p*p+y*y+_*_};for(let d=0;d<c;d++){const g=this.base[d*3],m=this.base[d*3+1],x=this.base[d*3+2];let p=h[0],y=1/0;for(const M of h){const T=f(M,g,m,x);T<y&&(y=T,p=M)}const _=t.kind[p];this.panelOf[d]=_;const v=h.filter(M=>t.kind[M]===_).map(M=>[M,f(M,g,m,x)]).sort((M,T)=>M[1]-T[1]).slice(0,Cn);let E=0;for(const[M,[T,D]]of v.entries()){const w=1/(D+.01);this.ties[d*Cn+M]=T,this.weights[d*Cn+M]=w,E+=w}for(let M=0;M<Cn;M++)this.weights[d*Cn+M]/=E||1}const u=e.geometry.getIndex();for(let d=1;d<=6;d++){const g=[];for(let y=0;y<u.count;y+=3){const _=u.getX(y),v=u.getX(y+1),E=u.getX(y+2);this.panelOf[_]===d&&this.panelOf[v]===d&&this.panelOf[E]===d&&g.push(_,v,E)}if(!g.length)continue;const m=new B;let x=0;for(let y=0;y<l;y++)t.kind[y]===d&&(m.x+=t.rest[y*3],m.y+=t.rest[y*3+1],m.z+=t.rest[y*3+2],x++);m.divideScalar(Math.max(1,x));const p=new bt;for(const y of Object.keys(e.geometry.attributes)){const _=e.geometry.getAttribute(y),v=_.itemSize,E=new Float32Array(g.length*v);g.forEach((M,T)=>{for(let D=0;D<v;D++)E[T*v+D]=_.getComponent(M,D)-(y==="position"?m.getComponent(D):0)}),p.setAttribute(y,new ut(E,v))}p.computeVertexNormals(),this.pieces.set(d,{geo:p,centre:m})}this.partBase=[...t.kind].findIndex(d=>d>=20),qg.forEach((d,g)=>{const m=d.round?new dl(d.size[0]/2,.025,6,16):new gi(...d.size),x=new xt(m,new Es({color:d.color,roughness:.6,metalness:g===1||g===0?.6:.1}));d.round&&(x.rotation.x=-.35),x.castShadow=!1,n.add(x),this.parts.push(x)}),this.apply(t.rest,0)}ties;weights;panelOf;base;nodes0;parts=[];partBase;pieces=new Map;loose=new Map;apply(e,t,n){const s=this.body.geometry.getAttribute("position"),r=s.array;for(let o=0;o<s.count;o++){const l=this.panelOf[o];if(l&&(t>>2*l&3)===2){const u=this.ties[o*Cn];r[o*3]=e[u*3],r[o*3+1]=e[u*3+1],r[o*3+2]=e[u*3+2];continue}let c=this.base[o*3],h=this.base[o*3+1],f=this.base[o*3+2];for(let u=0;u<Cn;u++){const d=this.ties[o*Cn+u],g=this.weights[o*Cn+u];d<0||(c+=(e[d*3]-this.nodes0[d*3])*g,h+=(e[d*3+1]-this.nodes0[d*3+1])*g,f+=(e[d*3+2]-this.nodes0[d*3+2])*g)}r[o*3]=c,r[o*3+1]=h,r[o*3+2]=f}s.needsUpdate=!0,this.body.geometry.computeVertexNormals(),this.body.geometry.computeBoundingSphere(),this.parts.forEach((o,l)=>{const c=this.partBase+l;o.position.set(e[c*3],e[c*3+1],e[c*3+2])});const a=new Set;for(let o=0;n&&o+7<n.length;o+=8){const l=n[o];a.add(l);let c=this.loose.get(l);if(!c){if(l>=10)c=new xt(this.wheel,this.wheelMaterial);else{const h=this.pieces.get(l);if(!h)continue;c=new xt(h.geo,this.body.material)}c.castShadow=!0,c.name=l>=10?"a wheel off the car":"a panel off the car",this.world.add(c),this.loose.set(l,c)}c.position.set(n[o+1],n[o+2],n[o+3]),c.quaternion.set(n[o+4],n[o+5],n[o+6],n[o+7])}for(const[o,l]of this.loose)a.has(o)||(this.world.remove(l),this.loose.delete(o))}dispose(){for(const t of this.loose.values())this.world.remove(t);this.loose.clear();for(const t of this.parts)this.group.remove(t),t.geometry.dispose();for(const t of this.pieces.values())t.geo.dispose();const e=this.body.geometry.getAttribute("position");e.array.set(this.base),e.needsUpdate=!0,this.body.geometry.computeVertexNormals()}}const Si=128,$g=2.2,$n=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},_l={name:"Sorrento",paint:10227467,screenFoot:-.86,screenHead:-.08,backHead:.72,backFoot:1.68,nose:.13,belt:.38,roof:.845},Rc=-.17,jh=.085,Cc=1.25,Yg=`
  attribute vec4 carA; attribute vec4 carB; varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN;
  uniform vec4 uCrush; uniform float uWide; uniform float uSoft; varying float vDent;`,Kg=`
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
    transformed.z += uCrush.x * nose * uneven * ${Cc.toFixed(2)} * shove;
    transformed.z -= uCrush.y * tail * uneven * ${Cc.toFixed(2)} * shove;
    // a side gives less than an end: the wheels stay where the sim has them, and the skin must not go in past them
    transformed.x += min(0.2, uCrush.z * 0.5) * left * uneven * shove;
    transformed.x -= min(0.2, uCrush.w * 0.5) * right * uneven * shove;
    // a crushed bonnet or boot lid buckles upward
    transformed.y += (uCrush.x * nose * nose + uCrush.y * tail * tail) * 0.35 * lump * step(0.12, position.y) * shove;
    // not in proportion: a light blow must show, and a heavy one has nowhere further to go
    vDent = pow(clamp((uCrush.x * nose + uCrush.y * tail + uCrush.z * left + uCrush.w * right) * 4.0, 0.0, 1.0), 0.65);
  }`,jg=`
  uniform float uBrake; uniform float uReverse; uniform vec4 uCrush; varying float vDent;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN;
  ${ki}`,Zg=i=>{const e=i.screenFoot,t=i.screenHead,n=i.backHead,s=i.backFoot,r=(i.screenHead+i.backHead)/2+.02,a=Math.min(i.glassTo??99,i.backFoot-.42),o=i.belt;return`
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
    float lip = p2pLine(vCarB.z - ${jh.toFixed(3)} + 0.02, 0.022, fwidth(vCarB.z)) * side * step(q.y, 0.3);
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
  }`},Jg=`
  roughnessFactor = mix(mix(roughnessFactor, 0.62, carTrim), 0.05, carGlass);
  metalnessFactor = mix(mix(metalnessFactor, 0.0, carTrim), 0.85, carGlass);
  roughnessFactor = mix(roughnessFactor, 0.85, max(carScuff, carGlass * carCrack));
  metalnessFactor = mix(metalnessFactor, 0.15, carGlass * carCrack);`,Qg=`
  normal = normalize(mix(normal, normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition))), vDent * 0.9));`,ex="varying vec3 vLocal;",tx=`
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
  }`,nx=`
  roughnessFactor = mix(0.9, 0.28, wheelMetal);
  metalnessFactor = mix(0.0, 0.9, wheelMetal);`;function Lc(i,e,t,n,s,r,a,o,l="",c=""){return i.onBeforeCompile=h=>{Object.assign(h.uniforms,t),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
${n}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${s}`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
${r}`).replace("#include <color_fragment>",`#include <color_fragment>
${a}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${o}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${l}`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
${c}`)},i.customProgramCacheKey=()=>e,i}class ix{constructor(e,t=null,n=_l){this.shape=e,this.look=n;const s=(e.axleFront+e.axleRear)/2+(e.overhang??.85),r=e.halfTrack+.12,a=Lc(new zh({color:n.paint,metalness:.35,roughness:.34,clearcoat:1,clearcoatRoughness:.06,envMap:t,envMapIntensity:.75}),`p2p-car-body-${n.name}`,this.lamps,Yg,Kg,jg,Zg(n),Jg,"totalEmissiveRadiance += carLamp;",Qg);this.lamps.uWide.value=r;const o=new xt(this.body(s,r),a);o.castShadow=!0,o.receiveShadow=!0,this.group.add(o),this.bodyMesh=o;const l=Lc(new Es({color:16777215,envMap:t,envMapIntensity:.6}),"p2p-car-wheel",{uRadius:{value:e.wheelRadius}},"varying vec3 vLocal;","vLocal = position;",`uniform float uRadius; ${ex}`,tx,nx),c=e.wheelRadius,h=.12,f=[[0,.02],[c*.64,.105],[c*.72,h],[c*.93,h],[c,h*.72],[c,-h*.72],[c*.93,-h],[c*.72,-h],[c*.64,-.105],[0,-.02]].map(([y,_])=>new $e(y,_)),u=new ea(f,20).rotateZ(-Math.PI/2);{const y=u.getAttribute("position"),_=u.index,v=new B,E=new B,M=new B;for(let T=0;T<_.count;T+=3)if(v.fromBufferAttribute(y,_.getX(T)),E.fromBufferAttribute(y,_.getX(T+1)),M.fromBufferAttribute(y,_.getX(T+2)),E.clone().sub(v).cross(M.clone().sub(v)).dot(v.add(E).add(M))<0){const w=_.getX(T+1);_.setX(T+1,_.getX(T+2)),_.setX(T+2,w)}}u.computeVertexNormals(),this.tyre=u,this.tyreMaterial=l;for(let y=0;y<4;y++){const _=new Ft,v=new xt(u,l);v.castShadow=!0,_.add(v),this.group.add(_),this.wheels.push(_),this.spinners.push(v)}const d=new Hh,g=new mi(1,1);d.setIndex(g.index),d.setAttribute("position",g.getAttribute("position")),d.setAttribute("uv",g.getAttribute("uv"));const m=new Float32Array(Si*3),x=new Float32Array(Si*3).fill(1);d.setAttribute("aAt",new kn(m,3)),d.setAttribute("aLife",new kn(x,3)),d.instanceCount=Si;const p=new xt(d,new vn({transparent:!0,depthWrite:!1,vertexShader:`
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
        }`}));p.frustumCulled=!1,p.name="smoke",this.loose.add(p),this.puffs={life:x,at:m,vel:new Float32Array(Si*3),geo:d,next:0,owed:0}}group=new Ft;wheels=[];spinners=[];loose=new Ft;lamps={uBrake:{value:0},uReverse:{value:0},uCrush:{value:new ht},uWide:{value:1},uSoft:{value:0}};bodyMesh;tyre;tyreMaterial;skin=null;puffs;nose=new B;was=new B;patch=new B;rubber=[0,0,0,0];smoke(e,t){const n=e[Se.POWER],s=this.puffs,r=Math.min(1,Math.max(0,(.93-n)/.5));this.nose.set(0,.42,-this.shape.axleFront+.25).applyQuaternion(this.group.quaternion).add(this.group.position);const a=t>0?(this.nose.x-this.was.x)/t:0,o=t>0?(this.nose.y-this.was.y)/t:0,l=t>0?(this.nose.z-this.was.z)/t:0,c=Math.hypot(a,o,l)>120;this.was.copy(this.nose);for(let f=0;f<Si;f++){if(s.life[f*3]>=1)continue;s.life[f*3]=c?1:Math.min(1,s.life[f*3]+t/$g);const u=Math.exp(-2.5*t);s.vel[f*3]=s.vel[f*3]*u,s.vel[f*3+2]=s.vel[f*3+2]*u,s.at[f*3]=s.at[f*3]+s.vel[f*3]*t,s.at[f*3+1]=s.at[f*3+1]+s.vel[f*3+1]*t,s.at[f*3+2]=s.at[f*3+2]+s.vel[f*3+2]*t}const h=(f,u,d,g,m,x)=>{const p=s.next;s.next=(s.next+1)%Si,s.at[p*3]=f+(Math.random()-.5)*.5,s.at[p*3+1]=u,s.at[p*3+2]=d+(Math.random()-.5)*.5,s.vel[p*3]=a*g+(Math.random()-.5)*.6,s.vel[p*3+1]=m*(.6+Math.random()*.6),s.vel[p*3+2]=l*g+(Math.random()-.5)*.6,s.life[p*3]=.001,s.life[p*3+1]=Math.random(),s.life[p*3+2]=x};for(s.owed=r>0&&!c?s.owed+t*(2+16*r):0;s.owed>=1;)s.owed-=1,h(this.nose.x,this.nose.y,this.nose.z,.35,1.5,Math.min(1,r*1.6)*(.7+.3*Math.random()));for(let f=0;f<4;f++){const u=Se.WHEELS+f*Se.WHEEL_STRIDE,d=Math.abs(e[u+Se.W_SPIN]*this.shape.wheelRadius-e[Se.SPEED]),g=Math.abs(e[u+Se.W_SLIP_TAN])>.3?Math.abs(e[u+Se.W_SLIP_TAN])*Math.abs(e[Se.SPEED]):0,m=e[u+Se.W_GROUNDED]>.5?Math.max(d-4,g-4):0;if(this.rubber[f]=m>0&&!c?this.rubber[f]+t*Math.min(22,4+m*1.6):0,!(this.rubber[f]<1))for(this.patch.set(f%2===0?-this.shape.halfTrack:this.shape.halfTrack,-e[u+Se.W_LENGTH]-this.shape.wheelRadius+.1,f<2?-this.shape.axleFront:this.shape.axleRear).applyQuaternion(this.group.quaternion).add(this.group.position);this.rubber[f]>=1;)this.rubber[f]=this.rubber[f]-1,h(this.patch.x,this.patch.y,this.patch.z,.1,.9,0)}s.geo.getAttribute("aAt").needsUpdate=!0,s.geo.getAttribute("aLife").needsUpdate=!0}body(e,t){const n=this.shape,s=this.look,r=s.screenFoot,a=s.screenHead,o=s.backHead,l=s.backFoot,c=[];for(let A=-e;A<=e+1e-6;A+=e/18)c.push(A);const h=[],f=[],u=[],d=[],g=19,m=A=>Math.min(Math.abs(A+n.axleFront),Math.abs(A-n.axleRear)),x=A=>{const U=A/e,L=Math.abs(U),G=t*(.8+.2*Math.sqrt(Math.max(0,1-Math.pow(L,5))))*(1-.1*$n(.82,1,L)),z=A<0?s.nose+(s.belt-s.nose)*$n(-e,r,A):s.belt+.03*$n(.3,.75,U)-.07*$n(.86,1,U),N=A<a?$n(r,a,A):A<o?1:1-$n(o,l,A),I=.035*(1-$n(.85,1,L)),R=z+I+(s.roof-z-I)*N*(1-.04*$n(o-.6,o,A)),W=N>.02?1:0,P=G*(.93-.2*Math.min(1,N*1.6)),H=n.wheelRadius+jh,J=m(A),he=-.37+.1*$n(.86,1,L),se=J<H?Math.max(he,Rc+Math.sqrt(H*H-J*J)):he,Q=se+.085,q=Math.max(Q+.04,z-.26),K=[[G*.8,se,0,1],[G*.965,Q,0,1],[G,q,0,0],[G*.99,z-.07,0,0],[G*.93,z,0,0],[P+(G*.93-P)*.42,z+(R-z)*.5,.5,0],[P,R-(R-z)*.06,.94,0],[P*.72,R,1,0],[P*.36,R+I*.5,1,0]],ue=[],_e=[],Ee=[0,0,0,0,0,0,1,.5,.15];ue.push([0,se]),_e.push([0,0,W,1]),K.forEach(([Ge,O,me,De],Re)=>{ue.push([Ge,O]),_e.push([me,Ee[Re],W,De])}),ue.push([0,R+I*.6]),_e.push([1,0,W,0]);for(let Ge=K.length-1;Ge>=0;Ge--){const[O,me,De,Re]=K[Ge];ue.push([-O,me]),_e.push([De,Ee[Ge],W,Re])}const Ue=[(A-r)/(a-r),(A-o)/(l-o),0,e];return{p:ue,a:_e,b:Ue}},p=c.map(x);p.forEach((A,U)=>{const L=c[U];A.p.forEach(([G,z],N)=>{h.push(G,z,L),f.push(...A.a[N]),u.push(A.b[0],A.b[1],Math.hypot(m(L),z-Rc)-n.wheelRadius,A.b[3])})});const y=(A,U)=>A*(g+1)+(U%(g+1)+(g+1))%(g+1);if(p[0].p.length!==g+1)throw new Error("the car body ring has changed its count");const _=new B,v=new B,E=new B,M=new B,T=new B,D=(A,U,L,G,z,N)=>{v.fromArray(h,A*3),E.fromArray(h,U*3),M.fromArray(h,L*3),T.subVectors(E,v).cross(M.clone().sub(v)),!(T.lengthSq()<1e-12)&&(_.copy(v).add(E).add(M).multiplyScalar(1/3),T.dot(_.sub(new B(G,z,N)))>=0?d.push(A,U,L):d.push(A,L,U))};for(let A=0;A+1<p.length;A++){const U=(c[A]+c[A+1])/2;for(let L=0;L<=g;L++){const G=y(A,L),z=y(A,L+1),N=y(A+1,L+1),I=y(A+1,L);D(G,z,N,0,.1,U),D(G,N,I,0,.1,U)}}for(const A of[0,p.length-1]){const U=c[A],L=A===0?U+1:U-1,G=h.length/3,z=p[A].p.map(R=>R[1]),N=(Math.min(...z)+Math.max(...z))/2;h.push(0,N,U),f.push(0,0,0,0),u.push(9,9,9,e);const I=h.length/3;p[A].p.forEach(([R,W],P)=>{h.push(R,W,U),f.push(0,0,0,p[A].a[P][3]),u.push(9,9,9,e)});for(let R=0;R<=g;R++)D(G,I+R,I+(R+1)%(g+1),0,N,L)}const w=A=>{const U=A*(t+.07),L=s.belt+.04,G=r+.42,z=.085,N=.05,I=.07,R=h.length/3;for(const P of[-1,1])for(const H of[-1,1])for(const J of[-1,1])h.push(U+P*z,L+H*N,G+J*I*(H>0?.7:1)),f.push(0,0,0,1),u.push(9,9,9,e);const W=(P,H,J,he)=>{D(R+P,R+H,R+J,U,L,G),D(R+P,R+J,R+he,U,L,G)};W(0,1,3,2),W(4,5,7,6),W(0,1,5,4),W(2,3,7,6),W(0,2,6,4),W(1,3,7,5)};w(-1),w(1);const b=new bt;return b.setAttribute("position",new ct(h,3)),b.setAttribute("carA",new ct(f,4)),b.setAttribute("carB",new ct(u,4)),b.setIndex(d),b.computeVertexNormals(),b.computeBoundingSphere(),b}useSoft(e){this.skin?.dispose(),this.skin=e?new Xg(this.bodyMesh,e,this.group,this.loose,this.tyre,this.tyreMaterial):null,this.lamps.uSoft.value=e?1:0}soft(e,t,n){this.skin&&e.length&&this.skin.apply(e,t,n)}splash(e){const t=this.puffs,n=Math.min(1,e/25),s=Math.round(14+26*n);for(let r=0;r<s;r++){const a=t.next;t.next=(t.next+1)%Si;const o=Math.random()*Math.PI*2,l=.8+Math.random()*1.6,c=1.5+Math.random()*(3+6*n);t.at[a*3]=this.group.position.x+Math.cos(o)*l,t.at[a*3+1]=this.group.position.y+.2,t.at[a*3+2]=this.group.position.z+Math.sin(o)*l,t.vel[a*3]=Math.cos(o)*c,t.vel[a*3+1]=2.5+Math.random()*(3+5*n),t.vel[a*3+2]=Math.sin(o)*c,t.life[a*3]=.001,t.life[a*3+1]=Math.random(),t.life[a*3+2]=0}}update(e,t,n=0){this.group.position.set(e[Se.POS],e[Se.POS+1],e[Se.POS+2]),this.group.quaternion.set(e[Se.ROT],e[Se.ROT+1],e[Se.ROT+2],e[Se.ROT+3]).normalize();const s=this.shape,r=this.skin?Math.max(0,e[Se.WHEELS_OFF]):0;for(let a=0;a<4;a++){const o=Se.WHEELS+a*Se.WHEEL_STRIDE,l=this.wheels[a];l.visible=!(r>>a&1),l.position.set(a%2===0?-s.halfTrack:s.halfTrack,-e[o+Se.W_LENGTH],a<2?-s.axleFront:s.axleRear),l.rotation.y=-e[o+Se.W_STEER],this.spinners[a].rotation.x=-e[o+Se.W_ANGLE]}this.lamps.uBrake.value=t?1:0,this.lamps.uReverse.value=e[Se.GEAR]<0?1:0,this.lamps.uCrush.value.set(e[Se.CRUSH],e[Se.CRUSH+1],e[Se.CRUSH+2],e[Se.CRUSH+3]),this.smoke(e,n)}}const sx=[_l,{name:"Pico",paint:14263572,screenFoot:-.78,screenHead:-.18,backHead:1.22,backFoot:1.78,nose:.2,belt:.42,roof:.915},{name:"Brannan",paint:12734476,screenFoot:-.5,screenHead:.22,backHead:.98,backFoot:1.85,nose:.2,belt:.41,roof:.815},{name:"Tamalpais",paint:1395358,screenFoot:-.8,screenHead:-.08,backHead:.9,backFoot:1.62,nose:.16,belt:.41,roof:.895},{name:"Hauler",paint:14605008,screenFoot:-2,screenHead:-1.5,backHead:2.38,backFoot:2.5,nose:.6,belt:.72,roof:1.565,glassTo:-.75},{name:"Marauder",paint:1447706,screenFoot:-.45,screenHead:.25,backHead:.95,backFoot:1.8,nose:.22,belt:.43,roof:.815},{name:"Bulwark",paint:4869973,screenFoot:-.95,screenHead:-.5,backHead:.75,backFoot:.95,nose:.62,belt:.78,roof:1.365}],rx=i=>sx.find(e=>e.name===i)??{..._l,name:i};class ax{nx;nz;cell;x0;z0;h;constructor(e){const t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint32(4,!0);if(t.getUint32(0,!0)!==1464873552||n<1||n>7)throw new Error(`not a world file this build reads (version ${n})`);this.nx=t.getUint32(8,!0),this.nz=t.getUint32(12,!0),this.cell=t.getFloat32(16,!0),this.x0=t.getFloat32(20,!0),this.z0=t.getFloat32(24,!0);const s=t.getFloat32(28,!0);this.h=new Float32Array(this.nx*this.nz);for(let r=0;r<this.h.length;r++)this.h[r]=s+t.getInt16(32+r*2,!0)*.01}ways=[];setWays(e){this.ways=e}onWay(e,t,n,s){const r=e.p[t],a=e.p[t+1],o=a[0]-r[0],l=a[2]-r[2],c=o*o+l*l;if(c<1e-6)return null;const h=Math.sqrt(c),f=((n-r[0])*o+(s-r[2])*l)/c,u=.8/h;if(f<(t===0?0:-u)||f>(t+2===e.p.length?1:1+u))return null;const d=r[0]+o*f-n,g=r[2]+l*f-s;if(d*d+g*g>e.half*e.half)return null;const m=Math.min(1,Math.max(0,f));return r[1]+(a[1]-r[1])*m}surface(e,t,n){const s=this.at(e,t),r=n+.35;let a=-1/0,o=!1;for(const l of this.ways)for(let c=0;c+1<l.p.length;c++){const h=this.onWay(l,c,e,t);h!==null&&(l.k==="tunnel"&&n<h+(l.clear??5.6)&&(o=!0),h<=r&&h>a&&(a=h))}return!o&&s<=r&&s>a&&(a=s),a===-1/0?s:a}tunnel(e,t,n){for(const s of this.ways)if(s.k==="tunnel")for(let r=0;r+1<s.p.length;r++){const a=this.onWay(s,r,e,n);if(a!==null&&t>a-2&&t<a+(s.clear??5.6)+.5)return{floor:a,roof:a+(s.clear??5.6),way:s,si:r}}return null}deckOver(e,t,n){let s=1/0;for(const r of this.ways)if(r.k==="deck")for(let a=0;a+1<r.p.length;a++){const o=this.onWay(r,a,e,t);o!==null&&o-1.2>n&&o-1.2<s&&(s=o-1.2)}return s}at(e,t){const n=Math.min(this.nx-1.001,Math.max(0,(e-this.x0)/this.cell)),s=Math.min(this.nz-1.001,Math.max(0,(t-this.z0)/this.cell)),r=Math.floor(n),a=Math.floor(s),o=n-r,l=s-a,c=a*this.nx+r,h=this.h;return(h[c]*(1-o)+h[c+1]*o)*(1-l)+(h[c+this.nx]*(1-o)+h[c+this.nx+1]*o)*l}}async function ox(i){const e=await fetch(i);if(!e.ok)throw new Error(`${i}: ${e.status}`);return new Uint8Array(await e.arrayBuffer())}const lx=1464873552,cx=7;function hx(i){const e=new DataView(i.buffer,i.byteOffset,i.byteLength);if(e.getUint32(0,!0)!==lx)throw new Error("not a world file");const t=e.getUint32(8,!0),n=e.getUint32(12,!0),s=e.getFloat32(16,!0),r=e.getFloat32(20,!0),a=e.getFloat32(24,!0),o=e.getFloat32(28,!0),l=new Float32Array(t*n);for(let h=0;h<l.length;h++)l[h]=o+e.getInt16(32+h*2,!0)*.01;return{nx:t,nz:n,cell:s,x0:r,z0:a,h:l,at:(h,f)=>{const u=Math.min(t-1.001,Math.max(0,(h-r)/s)),d=Math.min(n-1.001,Math.max(0,(f-a)/s)),g=Math.floor(u),m=Math.floor(d),x=u-g,p=d-m,y=m*t+g;return(l[y]*(1-x)+l[y+1]*x)*(1-p)+(l[y+t]*(1-x)+l[y+t+1]*x)*p}}}const fx=2e3,Fr=500,ux=4;function dx(i,e=fx){const n=111320*Math.cos(i.lat*Math.PI/180),s=Math.round(i.lat*111320/Fr)*Fr/111320,r=Math.round(i.lon*n/Fr)*Fr/n,a=e/2/111320,o=e/2/n;return{key:`at_${s.toFixed(4)}_${r.toFixed(4)}_${e}_m${ux}b${cx}`,centre:{lon:r,lat:s},bbox:[r-o,s-a,r+o,s+a]}}const px=/^(motorway|trunk|primary|secondary|tertiary|residential|unclassified)$/,mx=(i,e,t)=>{let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const[a,o]=i[s],[l,c]=i[r];o>t!=c>t&&e<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n};function gx(i,e,t,n,s){const[r,a,o,l]=i.box,c=48,h=new Map;i.buildings.forEach((m,x)=>{if(m.m)return;let p=1/0,y=-1/0,_=1/0,v=-1/0;for(const[E,M]of m.r)p=Math.min(p,E),y=Math.max(y,E),_=Math.min(_,M),v=Math.max(v,M);for(let E=Math.floor(p/c);E<=Math.floor(y/c);E++)for(let M=Math.floor(_/c);M<=Math.floor(v/c);M++){const T=`${E}_${M}`;(h.get(T)??h.set(T,[]).get(T)).push(x)}});const f=(m,x)=>(h.get(`${Math.floor(m/c)}_${Math.floor(x/c)}`)??[]).some(p=>mx(i.buildings[p].r,m,x)),u=(m,x,p,y)=>{if(!(m>r+30&&m<o-30&&x>a+30&&x<l-30))return!1;for(const _ of[-3,0,3])for(const v of[-1.2,1.2]){const E=m+p*_-y*v,M=x+y*_+p*v;if(f(E,M)||e(E,M)<t+.2)return!1}return!0};let d=null;for(const m of i.roads)if(!(!px.test(m.c)||m.b))for(let x=0;x+1<m.p.length;x++){const[p,y]=m.p[x],[_,v]=m.p[x+1],E=_-p,M=v-y,T=Math.hypot(E,M);if(T<12)continue;const D=Math.max(5/T,Math.min(1-5/T,((n-p)*E+(s-y)*M)/(T*T))),w=p+E*D,b=y+M*D,A=Math.hypot(w-n,b-s);d&&A>=d.d||u(w,b,E/T,M/T)&&(d={d:A,qx:w,qz:b,dx:E,dz:M,c:m.c})}if(!d)return null;const g=m=>Math.round(m*10)/10;return{x:g(d.qx),z:g(d.qz),heading:Math.round(Math.atan2(d.dx,-d.dz)*1e3)/1e3,road:d.c,off:g(d.d)}}const Pc=6378137,Na=Math.PI/180;function xx(i,e){const t=Math.cos(i.lat*Na);return{x:(e.lon-i.lon)*Na*Pc*t,y:(e.lat-i.lat)*Na*Pc}}function Zh(i){const e=/^\s*(-?\d{1,2}(?:\.\d+)?)\s*,\s*(-?\d{1,3}(?:\.\d+)?)\s*$/.exec(i.get("at")??"");if(!e)return null;const t=Number(e[1]),n=Number(e[2]);return Math.abs(t)>85||Math.abs(n)>180?null:{lat:t,lon:n,label:i.get("place")||`${t.toFixed(5)}, ${n.toFixed(5)}`}}function Yo(i){const e=new URLSearchParams(location.search);e.delete("at"),e.delete("place"),e.delete("start"),e.delete("world"),i&&(e.set("at",`${i.lat.toFixed(5)},${i.lon.toFixed(5)}`),e.set("place",i.label.split(",").slice(0,2).join(",").slice(0,60)));const t=e.toString();return`${location.pathname}${t?`?${t}`:""}`}const vx=/^\s*(-?\d{1,2}(?:\.\d+)?)\s*[,\s]\s*(-?\d{1,3}(?:\.\d+)?)\s*$/;let Dc=0;async function _x(i){const e=vx.exec(i);if(e){const r=Number(e[1]),a=Number(e[2]);if(Math.abs(r)<=85&&Math.abs(a)<=180)return[{label:`${r.toFixed(5)}, ${a.toFixed(5)}`,lat:r,lon:a}]}const t=Dc+1100-Date.now();t>0&&await new Promise(r=>setTimeout(r,t)),Dc=Date.now();const n=await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&q=${encodeURIComponent(i)}`,{headers:{Accept:"application/json"}});if(!n.ok)throw new Error(`the address search answered ${n.status}`);return(await n.json()).map(r=>({label:r.display_name,lat:Number(r.lat),lon:Number(r.lon)})).filter(r=>Number.isFinite(r.lat)&&Number.isFinite(r.lon)&&Math.abs(r.lat)<=85)}const yx="p2p-squares",sr="squares",Mx=6;function Jh(){return new Promise((i,e)=>{const t=indexedDB.open(yx,1);t.onupgradeneeded=()=>{t.result.createObjectStore(sr,{keyPath:"key"})},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error??new Error("IndexedDB refused"))})}const Qh=i=>new Promise((e,t)=>{i.onsuccess=()=>e(i.result),i.onerror=()=>t(i.error)});async function wx(i){try{const e=await Jh(),t=await Qh(e.transaction(sr).objectStore(sr).get(i));return e.close(),t??null}catch{return null}}async function Ic(i){try{const e=await Jh(),t=e.transaction(sr,"readwrite"),n=t.objectStore(sr);n.put(i);const s=await Qh(n.getAll());for(const r of s.sort((a,o)=>o.used-a.used).slice(Mx))n.delete(r.key);return await new Promise((r,a)=>{t.oncomplete=()=>r(),t.onerror=()=>a(t.error),t.onabort=()=>a(t.error)}),e.close(),!0}catch(e){return console.warn("the square was made and not kept:",e),!1}}async function bx(i,e,t){const n=dx(i),s=Sx().has("remake")?null:await wx(n.key);if(s){t("a square made here before");const o=JSON.parse(s.page),l=new Uint8Array(s.blob),c=o.from.at;if(!c||Math.abs(c.lat-i.lat)>2e-4||Math.abs(c.lon-i.lon)>2e-4){const h=xx(n.centre,i),f=hx(l),u=gx(o,f.at,o.ground.sea??-1/0,h.x,-h.y);u&&(o.starts=[{label:i.label,...u}])}return o.starts[0]&&(o.starts[0].label=i.label),Ic({...s,used:Date.now()}),{blob:l,page:o,mask:{...s.kinds,data:new Uint8Array(s.kinds.data)},kept:!0,seconds:null}}const r=await new Promise((o,l)=>{const c=new Worker(new URL(""+new URL("worker-DlgQgiZ-.js",import.meta.url).href,import.meta.url),{type:"module"});c.onmessage=h=>{const f=h.data;"step"in f?t(f.step):"done"in f?(c.terminate(),o(f.done)):(c.terminate(),l(new Error(f.error)))},c.onerror=h=>{c.terminate(),l(new Error(`the worker that makes a square failed: ${h.message||"it could not be started"}`))},c.postMessage({lat:i.lat,lon:i.lon,label:i.label,kinds:e})});t("keeping the square on this device");const a=await Ic({key:r.key,used:Date.now(),blob:r.blob.slice(0),page:r.page,kinds:{...r.kinds,data:r.kinds.data.slice(0)}});return{blob:new Uint8Array(r.blob),page:JSON.parse(r.page),mask:{...r.kinds,data:new Uint8Array(r.kinds.data)},kept:a,seconds:r.seconds}}const Sx=()=>new URLSearchParams(location.search),Ex=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Ax=`
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
  }`,Tx=`
  uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 texel;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tSrc, vUv).rgb * 0.25;
    c += (texture2D(tSrc, vUv + vec2(texel.x, 0.0)).rgb + texture2D(tSrc, vUv - vec2(texel.x, 0.0)).rgb + texture2D(tSrc, vUv + vec2(0.0, texel.y)).rgb + texture2D(tSrc, vUv - vec2(0.0, texel.y)).rgb) * 0.125;
    c += (texture2D(tSrc, vUv + texel).rgb + texture2D(tSrc, vUv - texel).rgb + texture2D(tSrc, vUv + vec2(texel.x, -texel.y)).rgb + texture2D(tSrc, vUv + vec2(-texel.x, texel.y)).rgb) * 0.0625;
    gl_FragColor = vec4(c + texture2D(tAdd, vUv).rgb, 1.0);
  }`,Rx=`
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
  }`;class Uc{constructor(e,t,n){this.renderer=e,this.quality=t;const s=t==="high";this.target=new Jn(4,4,{type:Fi,samples:n,depthBuffer:!0}),s&&(this.target.depthTexture=new fl(4,4),this.target.depthTexture.type=di);const r=()=>new Jn(4,4,{type:Fi,depthBuffer:!1,minFilter:fn,magFilter:fn});for(let l=0;l<3;l++)this.mips.push(r());for(let l=0;l<2;l++)this.ups.push(r());const a=(l,c,h={})=>new vn({vertexShader:Ex,fragmentShader:l,uniforms:c,defines:h,depthTest:!1,depthWrite:!1,toneMapped:!1});this.down=a(Ax,{tSrc:{value:null},texel:{value:new $e},knee:{value:0}}),this.up=a(Tx,{tSrc:{value:null},tAdd:{value:null},texel:{value:new $e}}),this.final=a(Rx,{tScene:{value:this.target.texture},tBloom:{value:null},tDepth:{value:this.target.depthTexture??null},bloom:{value:t==="high"?.085:.07},exposure:{value:1},time:{value:0},size:{value:new $e},ao:{value:.75},nearFar:{value:new $e(.3,6e3)}},s?{USE_AO:""}:{});const o=new bt;o.setAttribute("position",new ct([-1,-1,0,3,-1,0,-1,3,0],3)),o.setAttribute("uv",new ct([0,0,2,0,0,2],2)),this.quad=new xt(o,this.down),this.quad.frustumCulled=!1,this.scene.add(this.quad)}scene=new Go;camera=new ml(-1,1,1,-1,0,1);quad;target;mips=[];ups=[];down;up;final;size=new $e;frame=0;static samples(e){if(!e.capabilities.isWebGL2)return-1;const t=e.getContext();if(!(t.getExtension("EXT_color_buffer_half_float")||t.getExtension("EXT_color_buffer_float")))return-1;const n=a=>{const o=t.createFramebuffer(),l=t.createRenderbuffer(),c=t.createTexture();t.bindFramebuffer(t.FRAMEBUFFER,o),a?(t.bindRenderbuffer(t.RENDERBUFFER,l),t.renderbufferStorageMultisample(t.RENDERBUFFER,4,t.RGBA16F,8,8),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,l)):(t.bindTexture(t.TEXTURE_2D,c),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,8,8,0,t.RGBA,t.HALF_FLOAT,null),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,c,0));const h=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE&&t.getError()===t.NO_ERROR;return t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.bindTexture(t.TEXTURE_2D,null),t.deleteFramebuffer(o),t.deleteRenderbuffer(l),t.deleteTexture(c),h};for(;t.getError()!==t.NO_ERROR;);const s=n(!1),r=s&&n(!0);return e.resetState(),s?r?4:0:-1}fit(){const e=this.renderer.getDrawingBufferSize(new $e);if(e.equals(this.size))return;this.size.copy(e),this.target.setSize(e.x,e.y);let t=e.x,n=e.y;this.mips.forEach((s,r)=>{const a=r===0?4:2;t=Math.max(2,Math.round(t/a)),n=Math.max(2,Math.round(n/a)),s.setSize(t,n)}),this.ups[0].setSize(this.mips[1].width,this.mips[1].height),this.ups[1].setSize(this.mips[0].width,this.mips[0].height),this.final.uniforms.size.value.copy(e)}pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera)}render(e,t){this.fit();const n=this.renderer;n.setRenderTarget(this.target),n.render(e,t);const s=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1;const r=this.down.uniforms,a=this.up.uniforms;let o=this.target.texture,l=this.size.x,c=this.size.y;this.mips.forEach((f,u)=>{r.tSrc.value=o,r.texel.value.set(1/l,1/c).multiplyScalar(u===0?2:1),r.knee.value=u===0?1:0,this.pass(this.down,f),o=f.texture,l=f.width,c=f.height}),a.tSrc.value=this.mips[2].texture,a.tAdd.value=this.mips[1].texture,a.texel.value.set(1/this.mips[2].width,1/this.mips[2].height),this.pass(this.up,this.ups[0]),a.tSrc.value=this.ups[0].texture,a.tAdd.value=this.mips[0].texture,a.texel.value.set(1/this.ups[0].width,1/this.ups[0].height),this.pass(this.up,this.ups[1]);const h=this.final.uniforms;h.tBloom.value=this.ups[1].texture,h.exposure.value=n.toneMappingExposure,h.time.value=this.frame++%240/240,h.nearFar.value.set(t.near,t.far),this.pass(this.final,null),n.shadowMap.autoUpdate=s}get name(){return this.quality}}function Cx(i){const e=i.has("test"),t=i.get("q"),n=t==="low"||t==="high"?t:"mid";return kg(n),{dpr:Math.min(Number(i.get("dpr")??(e?1:n==="low"?1.5:2)),window.devicePixelRatio||1),shadows:i.get("shadows")?i.get("shadows")!=="0":!e,far:Number(i.get("far")??1200),quality:n}}const Lx=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,Px=`
  uniform float eyeY;
  varying vec3 vDir;
  ${ki}
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
  }`,Fc=7e3;class Dx{constructor(e,t){this.knobs=t,Bg(),Yh.far=t.far;const n=t.quality;if(this.renderer=new Fg({canvas:e,antialias:n==="low",powerPreference:"high-performance"}),this.renderer.setPixelRatio(t.dpr),this.renderer.outputColorSpace=Qt,this.renderer.toneMapping=ph,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=t.shadows,this.renderer.shadowMap.type=dh,this.renderer.info.autoReset=!1,n!=="low"){const c=Uc.samples(this.renderer);c>=0&&(this.post=new Uc(this.renderer,n,c))}const s=new vn({vertexShader:Lx,fragmentShader:Px,side:sn,depthWrite:!1,fog:!1,uniforms:{eyeY:{value:0}},defines:{CLOUDS:""}});this.skyUniforms=s.uniforms,this.sky=new xt(new ul(1,32,16),s),this.sky.frustumCulled=!1,this.sky.renderOrder=-1;const r=new qo(this.renderer),a=new Go;a.add(this.sky),this.reflections=r.fromScene(a,0,.1,10).texture,r.dispose(),this.sky.scale.setScalar(Fc*.9),this.scene.add(this.sky),this.scene.fog=new hl(10466511,1/(t.far*1.4)),this.scene.add(new Yu(12899306,11771271,2.9)),this.square=n==="low"?260:210,this.mapSize=n==="low"?1024:2048,this.sun.castShadow=t.shadows,this.sun.shadow.mapSize.set(this.mapSize,this.mapSize);const o=this.sun.shadow.camera,l=this.square/2;o.left=-l,o.right=l,o.top=l,o.bottom=-l,o.near=10,o.far=760,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.45,this.sun.shadow.radius=1.6,this.scene.add(this.sun,this.sun.target)}renderer;scene=new Go;sun=new Zu(16767405,4.3);reflections;sky;skyUniforms;post=null;ahead=new B;square;mapSize;resize(e){const t=window.innerWidth,n=window.innerHeight;this.renderer.setSize(t,n,!1),e.aspect=t/n,e.far=Fc,e.updateProjectionMatrix()}follow(e,t){this.sky.position.copy(t),this.skyUniforms.eyeY.value=t.y,this.ahead.set(e.x-t.x,0,e.z-t.z);const n=this.ahead.length();n>.5?this.ahead.multiplyScalar(this.square*.3/n):this.ahead.set(0,0,0);const s=this.square/this.mapSize,r=Math.round((e.x+this.ahead.x)/s)*s,a=Math.round((e.z+this.ahead.z)/s)*s;this.sun.target.position.set(r,e.y,a),this.sun.position.copy(this.sun.target.position).addScaledVector(ci,380),this.sun.target.updateMatrixWorld()}draw(e){this.renderer.info.reset();for(const t of this.scene.children)t.userData.tend?.(e.position);this.post?this.post.render(this.scene,e):this.renderer.render(this.scene,e)}}const os=`?v=${encodeURIComponent("11d1463 2026-11-22 06:41Z".split(" ")[0])}`,Nc={canon:[.075,.15,.034],pull:.65,soft:!0,second:[.19,.145,.095],patch:.8,patchSize:4.8,patchAt:.8,fine:[24,24],fineAmp:.8,mid:5,midAmp:.55,lean:[1.25,1,.5],coarse:.24,stain:[1.1,1.05,.86]},zc={canon:[.175,.175,.18],pull:.62,second:[.12,.12,.125],patch:.7,patchSize:9,patchAt:.66,fine:[11,11],fineAmp:.3,mid:2,midAmp:.12,coarse:.14,stain:[.88,.88,.88],crack:.5,gloss:.4},qs=[{canon:[0,0,0],pull:0,fine:[1,1],fineAmp:0,mid:1,midAmp:0,coarse:0,stain:[1,1,1]},Nc,{canon:[.045,.085,.03],pull:.55,soft:!0,second:[.105,.075,.05],patch:.9,patchSize:1.8,patchAt:.6,fine:[41,41],fineAmp:.5,mid:13,midAmp:.7,lean:[.9,1,.7],coarse:.5,stain:[1.25,1.1,.8]},{canon:[.5,.41,.27],pull:.65,soft:!0,second:[.36,.29,.19],patch:.5,patchSize:3,patchAt:.62,fine:[19,19],fineAmp:.34,mid:3.1,midAmp:.34,coarse:.2,stain:[.85,.85,.85]},{canon:[.2,.155,.1],pull:.6,soft:!0,second:[.085,.13,.04],patch:.7,patchSize:2.2,patchAt:.6,fine:[43,43],fineAmp:.4,mid:9,midAmp:.35,coarse:.25,stain:[.8,.8,.8]},{canon:[.2,.195,.185],pull:.7,second:[.12,.12,.11],patch:.5,patchSize:1.5,patchAt:.6,fine:[17,17],fineAmp:.4,mid:3.3,midAmp:.3,coarse:.3,stain:[.8,.8,.8],cell:[.9,.6],stagger:1,tone:.8,joint:.03,jointDark:.6,crown:.3},{canon:[.07,.36,.44],pull:.9,fine:[1,1],fineAmp:0,mid:2.1,midAmp:.5,coarse:.1,stain:[1,1,1],gloss:1,cell:[.25,.25],joint:.006,jointDark:.2},{canon:[.37,.35,.31],pull:.6,second:[.2,.16,.11],patch:.45,patchSize:1.4,patchAt:.64,fine:[9,9],fineAmp:.24,mid:31,midAmp:.2,coarse:.18,stain:[.8,.8,.78],crack:.5,gloss:.18},zc,{canon:[0,0,0],pull:0,fine:[21,21],fineAmp:.14,mid:3,midAmp:.06,coarse:.1,stain:[.92,.92,.92],crack:.25,gloss:.3},{canon:[.42,.4,.355],pull:.6,second:[.24,.22,.19],patch:.4,patchSize:2.5,patchAt:.72,fine:[9,9],fineAmp:.22,mid:3,midAmp:.1,coarse:.11,stain:[.86,.85,.82],crack:.4,gloss:.22,cell:[1.83,1.83],tone:.2,joint:.009,jointDark:.45},{canon:[.36,.33,.29],pull:.42,second:[.24,.22,.2],patch:.35,patchSize:3,patchAt:.72,fine:[14,14],fineAmp:.2,mid:3,midAmp:.1,coarse:.14,stain:[.84,.84,.84],gloss:.3,cell:[.6,.3],stagger:.5,tone:.25,joint:.006,jointDark:.5},{...zc,second:[.09,.09,.095],patch:.5,patchSize:1.4,patchAt:.74,cell:[2.6,17],joint:.05,jointDark:-.9,gate:5.2/17},{canon:[.21,.145,.1],pull:.7,second:[.12,.09,.07],patch:.5,patchSize:4,patchAt:.62,fine:[2.2,85],fineAmp:.34,mid:6,midAmp:.1,coarse:.1,stain:[.78,.78,.76],gloss:.12,cell:[4.2,.19],stagger:1,tone:.42,joint:.005,jointDark:.8,crown:.3},{...Nc,patch:0,stain:[1.1,1.05,.9],cell:[6,4e3],tone:.12}];function Ix(i){const e=new Uint8Array(768),t=new qe;for(let n=0;n<256;n++){const s=n>=30?Math.min(qs.length-1,10+Math.floor((n-30)/45)):Math.min(n,9);s===0?t.copy(i):s===9?t.setRGB(.1,.2,.17):t.setRGB(...qs[s].canon),t.convertLinearToSRGB(),e.set([Math.round(t.r*255),Math.round(t.g*255),Math.round(t.b*255)],n*3)}return e}const bn={turned:30,steps:45,firstTurnedRow:10,deckRow:13,shoreRow:5},za=8;function Ux(){const i=new Float32Array(qs.length*za*4);qs.forEach((t,n)=>{const s=t.cell??[1,1];i.set([...t.canon,t.pull+(t.soft?2:0),...t.second??[0,0,0],t.patch??0,...t.fine,t.fineAmp,1/(t.patchSize??1),t.mid,t.midAmp,t.coarse,t.patchAt??2,...t.lean??[1,1,1],t.gloss??0,...t.stain,t.crack??0,...s,t.stagger??0,t.tone??0,t.joint??.001,t.jointDark??0,t.gate??1,t.crown??0],n*za*4)});const e=new _s(i,za,qs.length,un,Dn);return e.minFilter=e.magFilter=tn,e.generateMipmaps=!1,e.colorSpace=Ln,e.needsUpdate=!0,e}const Fx=`
  uniform sampler2D uKinds, uLooks; uniform vec4 uKindsBox; uniform vec2 uKindsSize; uniform float uKindsOn, uSea, uFlat;
  float p2pFade(float fw, float a, float b) { return 1.0 - smoothstep(a, b, fw); }
  // a byte of the mask: its row in the looks, and the angle it is laid at
  int p2pRow(float id) { return id >= ${bn.turned}.0 ? ${bn.firstTurnedRow} + int((id - ${bn.turned}.0) / ${bn.steps}.0) : min(int(id), ${bn.firstTurnedRow-1}); }
  float p2pAngle(float id) {
    float o = max(id - ${bn.turned}.0, 0.0), slot = floor(o / ${bn.steps}.0);
    return (o - slot * ${bn.steps}.0) / ${bn.steps}.0 * (slot < 1.5 ? 1.5707963 : 3.1415927);
  }
  float p2pKind(ivec2 i) { return floor(texelFetch(uKinds, i, 0).r * 255.0 + 0.5); }
  vec4 p2pLook(int column, int row) { return texelFetch(uLooks, ivec2(column, row), 0); }
`,Nx=(i,e,t)=>`
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
    float deck = dot(share, vec4(equal(rows, ivec4(${bn.deckRow}))));
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
    float none = float(id < 0.5), deck = float(p2pRow(id) == ${bn.deckRow});
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
    float bank = float(row == ${bn.shoreRow}), up = vWorld.y - uSea;
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
  }`,Nr=64,zx=3,Ox=i=>`vec3(${i.r.toFixed(4)}, ${i.g.toFixed(4)}, ${i.b.toFixed(4)})`,Ko=new qe(1456202),ef=`
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
  }`,kx=`
  {
    vec3 toEye = normalize(cameraPosition - vWorld);
    float glare = pow(max(dot(reflect(-toEye, vec3(0.0, 1.0, 0.0)), P2P_SUN), 0.0), 7.0) * pow(1.0 - max(toEye.y, 0.0), 2.0);
    outgoingLight += vec3(1.0, 0.88, 0.72) * glare * p2pLit * p2pGloss;
  }
  if (p2pWet > 0.0) {
    ${ef}
    outgoingLight = mix(outgoingLight, p2pSea, p2pWet);
  }`;function Bx(i,e){const t=new Uint32Array(400);for(const s of i.h){const r=Math.round((s-e)*100);r>10&&r<400&&t[r]++}let n=0;for(let s=1;s<400;s++)t[s]>t[n]&&(n=s);return t[n]>i.h.length/50?e+n/100:-1/0}function Hx(i){const e=Math.ceil(i.width/2),t=Math.ceil(i.height/2),n=new Uint8Array(e*t*4),s=Ix(Ko);for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=i.data[Math.min(i.height-1,(t-1-a)*2)*i.width+Math.min(i.width-1,o*2)],c=(a*e+o)*4;n[c]=s[l*3],n[c+1]=s[l*3+1],n[c+2]=s[l*3+2],n[c+3]=255}const r=new _s(n,e,t,un);return r.colorSpace=Qt,r.generateMipmaps=!0,r.minFilter=Kn,r.magFilter=fn,r.needsUpdate=!0,r}function Gx(i,e,t,n=null){const{nx:s,nz:r,cell:a,x0:o,z0:l,h:c}=i;Hg(i);const[h,f,u,d]=e.box;!t&&n&&(t=Hx(n));const g=new Ft,m=[],x=vl(),p=x==="low",y=e.ground.water+.6,_=new _s(new Uint8Array([0]),1,1,cs);_.needsUpdate=!0;const v={uKinds:{value:_},uLooks:{value:Ux()},uKindsBox:{value:new ht(0,0,1,1)},uKindsSize:{value:new $e(1,1)},uKindsOn:{value:0},uSea:{value:y},uFlat:{value:e.ground.flat??Math.max(Bx(i,e.ground.water),y-1)}},E=Zn(new xn({map:t,color:t?16777215:7304296}),e,{key:`p2p-ground-${x}`,uniforms:v,fragmentPars:Fx,color:Nx(!p,x==="high",Ox(Ko)),final:kx}),M=(I,R,W)=>{I.format=cs,I.colorSpace=Ln,I.minFilter=I.magFilter=tn,I.generateMipmaps=!1,I.flipY=!1,v.uKinds.value=I,v.uKindsBox.value.set(h,f,R/(u-h),W/(d-f)),v.uKindsSize.value.set(R,W),v.uKindsOn.value=1};let T;if(n){const I=new _s(n.data,n.width,n.height,cs);I.unpackAlignment=1,I.needsUpdate=!0,M(I,n.width,n.height),T=Promise.resolve()}else T=new kh().loadAsync(`./world/${e.name}.kinds.png${os}`).then(I=>{const{width:R,height:W}=I.image;M(I,R,W)},()=>{console.warn(`no kind mask for ${e.name}: the ground is the photograph alone`)});const D=e.photo??(n?{x0:h,z0:f,w:u-h,d:d-f}:null),w=(I,R)=>c[Math.min(r-1,Math.max(0,R))*s+Math.min(s-1,Math.max(0,I))],b=(I,R,W,P,H,J)=>{const he=Math.ceil(W/H),se=Math.ceil(P/H),Q=new Float32Array((he+1)*(se+1)*3),q=new Float32Array(Q.length),K=new Float32Array((he+1)*(se+1)*2);let ue=0,_e=0;for(let Ue=0;Ue<=se;Ue++)for(let Ge=0;Ge<=he;Ge++){const O=Math.min(I+W,I+Ge*H),me=Math.min(R+P,R+Ue*H),De=o+O*a,Re=l+me*a;Q[ue]=De,Q[ue+1]=w(O,me)-J,Q[ue+2]=Re;const Me=(w(O+1,me)-w(O-1,me))/(2*a),ze=(w(O,me+1)-w(O,me-1))/(2*a),Le=1/Math.hypot(Me,1,ze);q[ue]=-Me*Le,q[ue+1]=Le,q[ue+2]=-ze*Le,ue+=3,D&&(K[_e]=(De-D.x0)/D.w,K[_e+1]=1-(Re-D.z0)/D.d),_e+=2}const Ee=new bt;return Ee.setAttribute("position",new ut(Q,3)),Ee.setAttribute("normal",new ut(q,3)),Ee.setAttribute("uv",new ut(K,2)),Ee.computeBoundingSphere(),Ee},A=(I,R,W)=>{const P=[];for(let H=0;H<R;H+=W)for(let J=0;J<I;J+=W){const he=Math.min(I,J+W),se=Math.min(R,H+W),Q=H*(I+1)+J,q=H*(I+1)+he,K=se*(I+1)+J,ue=se*(I+1)+he;P.push(Q,K,q,q,K,ue)}return P};for(let I=0;I<r-1;I+=Nr)for(let R=0;R<s-1;R+=Nr){const W=Math.min(Nr,s-1-R),P=Math.min(Nr,r-1-I),H=b(R,I,W,P,1,0),J=[];for(const he of[1,2,4,8]){const se=new bt;se.setAttribute("position",H.getAttribute("position")),se.setAttribute("normal",H.getAttribute("normal")),se.setAttribute("uv",H.getAttribute("uv")),se.setIndex(new xs(A(W,P,he),1)),se.boundingSphere=H.boundingSphere;const Q=new xt(se,E);Q.receiveShadow=!0,Q.matrixAutoUpdate=!1,Q.visible=he===8,g.add(Q),J.push(Q)}m.push({x:o+(R+W/2)*a,z:l+(I+P/2)*a,hx:W*a/2,hz:P*a/2,levels:J})}const U=16,L=Math.ceil(Math.max(s,r)/3/U)*U;for(let I=0;I<r-1;I+=L)for(let R=0;R<s-1;R+=L){const W=Math.min(L,s-1-R),P=Math.min(L,r-1-I),H=b(R,I,W,P,U,zx),J=Math.ceil(W/U),he=Math.ceil(P/U);H.setIndex(new xs(A(J,he,1),1));const se=new xt(H,E);se.receiveShadow=!0,se.matrixAutoUpdate=!1,g.add(se)}const G=Zn(new xn({color:Ko}),e,{key:"p2p-bay",light:"",final:`
      {
        ${ef}
        outgoingLight = p2pSea;
        // West of the map, and south of it as far east as the waterfront, there is city and not water.
        // Nothing is known of it here: the plane takes a city's mottled grey there, and the air does the rest.
        float land = max(step(vWorld.x, uEdge.x), step(uEdge.y, vWorld.z) * step(vWorld.x, uEdge.z));
        vec2 blocks = floor(vWorld.xz / 90.0);
        vec3 town = vec3(0.30, 0.29, 0.27) * (0.75 + 0.5 * p2pHash(blocks)) * (0.8 + 0.4 * p2pNoise(vWorld.xz * 0.05));
        town *= 1.0 - 0.35 * max(p2pLine(fract(vWorld.x / 90.0) * 90.0 - 45.0, 6.0, 1.0), p2pLine(fract(vWorld.z / 90.0) * 90.0 - 45.0, 6.0, 1.0));
        outgoingLight = mix(outgoingLight, town, land);
      }`,uniforms:{uEdge:{value:e.ground.around==="town"?new B(1e9,-1e9,1e9):new B(e.box[0],e.box[3],1100)}},fragmentPars:"uniform vec3 uEdge;"}),z=new xt(new mi(4e4,4e4),G);return z.rotation.x=-Math.PI/2,z.position.y=y,z.updateMatrixWorld(),g.add(z),{group:g,update:I=>{for(const R of m){const W=Math.hypot(Math.max(0,Math.abs(R.x-I.x)-R.hx),Math.max(0,Math.abs(R.z-I.z)-R.hz)),P=W<12?0:W<150?1:W<480?2:3,H=W<Yh.far;for(let J=0;J<4;J++)R.levels[J].visible=H&&J===P}},ready:T}}class ks{a=new Float32Array(1024);length=0;push(...e){if(this.length+e.length>this.a.length){const t=new Float32Array(Math.max(this.a.length*2,this.length+e.length));t.set(this.a.subarray(0,this.length)),this.a=t}for(let t=0;t<e.length;t++)this.a[this.length++]=e[t]}done(){return this.a.slice(0,this.length)}view(){return this.a.subarray(0,this.length)}}class Di{constructor(e,t=0,n=0){this.cellSize=e,this.auxSize=t,this.extSize=n}bins=new Map;bin(e,t){const n=`${Math.floor(e/this.cellSize)}_${Math.floor(t/this.cellSize)}`;let s=this.bins.get(n);return s||(s={pos:new ks,nor:new ks,col:new ks,aux:new ks,ext:new ks,idx:[],late:[],box:[]},this.bins.set(n,s)),s}build(e,t={}){const n=new Ft;for(const s of this.bins.values()){if(!s.idx.length&&!s.late.length&&!s.box.length)continue;const r=new bt,a=s.pos.length/3;r.setAttribute("position",new ut(s.pos.done(),3));const o=s.nor.view(),l=s.col.view(),c=new Int8Array(o.length),h=new Uint8Array(l.length);for(let g=0;g<c.length;g++)c[g]=Math.round(Math.max(-1,Math.min(1,o[g]))*127);for(let g=0;g<h.length;g++)h[g]=Math.round(Math.max(0,Math.min(1,l[g]))*255);if(r.setAttribute("normal",new ut(c,3,!0)),r.setAttribute("color",new ut(h,3,!0)),this.auxSize&&r.setAttribute("aux",new ut(s.aux.done(),this.auxSize)),this.extSize&&r.setAttribute("ext",new ut(s.ext.done(),this.extSize)),this.auxSize&&s.aux.length!==a*this.auxSize)throw new Error("a batch has a short aux buffer");if(this.extSize&&s.ext.length!==a*this.extSize)throw new Error("a batch has a short ext buffer");const f=s.late.length>0||s.box.length>0,u=f?[...s.late,...s.idx,...s.box]:s.idx;r.setIndex(a>65535?new cl(u,1):new xs(u,1)),r.computeBoundingSphere(),r.computeBoundingBox();const d=new xt(r,e);d.castShadow=!!t.cast,d.receiveShadow=!!t.receive,d.matrixAutoUpdate=!1,f&&(d.userData.near=[0,s.late.length+s.idx.length],d.userData.far=[s.late.length,s.idx.length+s.box.length]),s.mesh=d,n.add(d)}return this.bins.clear(),n}}function yl(i,e,t,n,s,r,a,o,l,c){return i.pos.push(e,t,n),i.nor.push(s,r,a),i.col.push(o,l,c),i.pos.length/3-1}function Ml(i){const e=new qe(i);return[e.r,e.g,e.b]}function yt(i){let e=Math.imul(i+1,2654435761);return e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,(e>>>0)/4294967296}const ns=Ml(8092540),Bs=Ml(12170667),Oc=Ml(16777215),Vx=/^(motorway|trunk|primary|secondary|tertiary|residential|unclassified|living_street|service)$/;function Wx(i){return{at(e,t){let n=1/0,s=i.p[0][1];for(let r=0;r+1<i.p.length;r++){const a=i.p[r],o=i.p[r+1],l=o[0]-a[0],c=o[2]-a[2],h=l*l+c*c||1,f=Math.min(1,Math.max(0,((e-a[0])*l+(t-a[2])*c)/h)),u=Math.hypot(a[0]+l*f-e,a[2]+c*f-t);u<n&&(n=u,s=a[1]+(o[1]-a[1])*f)}return s}}}function Hs(i,e,t=[]){const n=[];let s=0;for(let a=0;a+1<i.length;a++){const[o,l]=i[a],[c,h]=i[a+1],f=Math.hypot(c-o,h-l);if(f<.01)continue;const u=Math.max(1,Math.ceil(f/e));for(let d=n.length===0?0:1;d<=u;d++)n.push({x:o+(c-o)*d/u,z:l+(h-l)*d/u,dx:(c-o)/f,dz:(h-l)/f,s:s+f*d/u,j:0,must:d===u});s+=f}n.length&&(n[0].must=!0);for(let a=1;a+1<n.length;a++){const o=n[a-1],l=n[a+1],c=l.x-o.x,h=l.z-o.z,f=Math.hypot(c,h);f>.01&&(n[a].dx=c/f,n[a].dz=h/f)}if(!t.length||n.length<2)return n;const r=[];for(const[a,o]of t)r.push(a-.8,a,o,o+.8);for(const a of r){if(a<=.05||a>=s-.05)continue;let o=0;for(;o+1<n.length&&n[o+1].s<a;)o++;const l=n[o],c=n[o+1];if(a-l.s<.05||c.s-a<.05)continue;const h=(a-l.s)/(c.s-l.s),f=l.dx+(c.dx-l.dx)*h,u=l.dz+(c.dz-l.dz)*h,d=Math.hypot(f,u)||1;n.splice(o+1,0,{x:l.x+(c.x-l.x)*h,z:l.z+(c.z-l.z)*h,dx:f/d,dz:u/d,s:a,j:0,must:!0})}for(const a of n)for(const[o,l]of t)a.s>=o-.01&&a.s<=l+.01&&(a.j=1,a.must=!0);return n}function zr(i,e,t,n=.055,s=54){if(i.length<3)return i;const r=i.map(l=>[e.at(l.x,l.z),e.at(l.x+l.dz*t,l.z-l.dx*t),e.at(l.x-l.dz*t,l.z+l.dx*t)]),a=[i[0]];let o=0;for(;o<i.length-1;){let l=o+1;for(let c=o+2;c<i.length;c++){const h=i[o],f=i[c];if(f.s-h.s>s||i[c-1].must)break;let u=Math.abs(h.dx*f.dz-h.dz*f.dx)<.012;for(let d=o+1;u&&d<c;d++){const g=(i[d].s-h.s)/(f.s-h.s);for(let m=0;m<3;m++)if(Math.abs(r[d][m]-(r[o][m]+(r[c][m]-r[o][m])*g))>n){u=!1;break}}if(!u)break;l=c}a.push(i[l]),o=l}return a}function Fn(i,e,t,n,s,r,a,o,l,c,h){if(t.length<2)return;let f=1;for(const d of t){const g=m=>e.at(d.x+d.dz*m,d.z-d.dx*m);if(Math.abs(g((n+s)/2)-(g(n)+g(s))/2)>.045){f=Math.max(1,Math.ceil(Math.abs(s-n)/6));break}}const u=[];for(const d of t){const g=d.dz,m=-d.dx,x=[];for(let p=0;p<=f;p++){const y=n+(s-n)*p/f,_=d.x+g*y,v=d.z+m*y;x.push(yl(i,_,e.at(_,v)+r,v,0,1,0,a[0],a[1],a[2])),i.aux.push(o(y),d.s,l,h??d.j),i.ext.push(c[0],c[1],c[2])}u.push(x)}for(let d=0;d+1<u.length;d++)for(let g=0;g<f;g++){const m=u[d][g],x=u[d][g+1],p=u[d+1][g],y=u[d+1][g+1];i.idx.push(m,p,x,x,p,y)}}const Ui=760,Xr=170,Ms=330,Oa=`
  attribute vec4 aux; attribute vec3 ext;
  varying vec4 vAux; flat varying vec3 vExt;`,ka="vAux = aux; vExt = ext;",Ba=`
  varying vec4 vAux; flat varying vec3 vExt;
  // paint wears: where this is 0 it has gone
  float chipLike(vec2 rc) { return smoothstep(0.16, 0.5, p2pNoise(rc * vec2(7.0, 1.3) + 5.0) + 0.22); }`,tf=`
  float p2pFar = length(vWorld.xz - cameraPosition.xz);
  if (p2pFar > ${(Ui-Xr).toFixed(1)} && p2pHash(gl_FragCoord.xy) < (p2pFar - ${(Ui-Xr).toFixed(1)}) / ${Xr.toFixed(1)}) discard;`,kc=i=>`
  {
    vec3 toEye = normalize(cameraPosition - vWorld);
    float glare = pow(max(dot(reflect(-toEye, vec3(0.0, 1.0, 0.0)), P2P_SUN), 0.0), 7.0) * pow(1.0 - max(toEye.y, 0.0), 2.0);
    outgoingLight += vec3(1.0, 0.88, 0.72) * glare * p2pLit * ${i};
  }`,qx=`
  {
    // every derivative is taken here, outside any branch
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    ${tf}
    vec2 rc = vAux.xy;
    float halfW = vAux.z, junction = vAux.w, lanes = floor(vExt.x + 0.5), oneWay = step(0.5, vExt.y), seed = vExt.z;
    float near = 1.0 - smoothstep(${(Ms*.6).toFixed(1)}, ${Ms.toFixed(1)}, p2pFar);
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
  }`,Xx=`
  {
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    ${tf}
    // across: metres in from the kerb; a plaza (ext.x = 1) has no kerb
    float across = vAux.x, along = vAux.y, wide = vAux.z, plaza = step(0.5, vExt.x), seed = vExt.z;
    float near = 1.0 - smoothstep(${(Ms*.5).toFixed(1)}, ${(Ms*.9).toFixed(1)}, p2pFar);
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
  }`,$x=`
  {
    float fwA = fwidth(vAux.x), fwL = fwidth(vAux.y), fwW = max(fwidth(vWorld.x), fwidth(vWorld.z));
    float p2pFar = length(vWorld.xz - cameraPosition.xz);
    float kind = floor(vExt.x + 0.5), seed = vExt.y;
    float near = 1.0 - smoothstep(${(Ms*.6).toFixed(1)}, ${Ms.toFixed(1)}, p2pFar);
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
    diffuseColor.a = a * (1.0 - smoothstep(${(Ui-Xr-60).toFixed(1)}, ${(Ui-60).toFixed(1)}, p2pFar)) * (kind < 0.5 ? near : 1.0);
  }`;function Yx(i,e){const t=new Ft,n=new Di(400,4,3),s=new Di(400,4,3),r=new Di(400,4,3),a=_=>`${_[0]}_${_[1]}`,o=new Map,l=e.roads.filter(_=>!_.b&&(Vx.test(_.c)||_.c==="pedestrian")),c=_=>_==="service"||_==="living_street";for(const _ of l)_.c!=="pedestrian"&&_.p.forEach((v,E)=>{const M=o.get(a(v))??{n:0,major:0,half:0},T=E===0||E===_.p.length-1?1:2;M.n+=T,c(_.c)||(M.major+=T,M.half=Math.max(M.half,_.w/2)),o.set(a(v),M)});l.forEach((_,v)=>{const E=yt(v),M=_.w/2,T=c(_.c);if(_.c==="pedestrian"){const z=zr(Hs(_.p,6),i,M),N=z[z.length>>1];z.length>1&&Fn(s.bin(N.x,N.z),i,z,-M,M,.05+E*.012,Bs,I=>I+M,_.w,[1,0,E]);return}const D=[];let w=0;_.p.forEach((z,N)=>{N>0&&(w+=Math.hypot(z[0]-_.p[N-1][0],z[1]-_.p[N-1][1]));const I=o.get(a(z));if(T?I.n>=3:I.major>=3){const R=Math.max(I.half,M)+5.2;D.push([w-R,w+R])}});const b=zr(Hs(_.p,6,D),i,M+(_.s??0));if(b.length<2)return;const A=b[b.length>>1],U=.86+.3*yt(v+4001),L=(yt(v+911)-.5)*.05,G=[ns[0]*U*(1+L),ns[1]*U,ns[2]*U*(1-L)];if(Fn(n.bin(A.x,A.z),i,b,-M,M,.07+E*.012,G,z=>z,M,[T?1:_.l??1,_.o||T?1:0,E]),_.s){const z=.92+.16*yt(v+77),N=[Bs[0]*z,Bs[1]*z,Bs[2]*z];Fn(s.bin(A.x,A.z),i,b,M,M+_.s,.05+E*.012,N,I=>I-M,_.s,[0,0,E]),Fn(s.bin(A.x,A.z),i,b,-M-_.s,-M,.05+E*.012,N,I=>-I-M,_.s,[0,1,E])}}),(e.ways??[]).forEach((_,v)=>{const E=Wx(_),M=yt(v+5003),T=_.p.map(G=>[G[0],G[2]]),D=Hs(T,6);if(D.length<2)return;const w=D[D.length>>1];if(_.c==="pedestrian"){Fn(s.bin(w.x,w.z),E,D,-_.half+.3,_.half-.3,.03,Bs,G=>G+_.half,_.half*2,[1,0,M]);return}const b=_.w/2,A=.8+.2*yt(v+6007),U=[ns[0]*A,ns[1]*A,ns[2]*A];Fn(n.bin(w.x,w.z),E,D,-b,b,.1,U,G=>G,b,[_.l??1,_.o?1:0,M]);const L=_.half-b-.05;if(L>.2){const G=[.62,.61,.58];Fn(s.bin(w.x,w.z),E,D,b,b+L,.08,G,z=>z-b,L,[0,0,M]),Fn(s.bin(w.x,w.z),E,D,-b-L,-b,.08,G,z=>-z-b,L,[0,1,M])}}),e.lines.forEach((_,v)=>{if(_.k==="crosswalk"){const E=zr(Hs(_.p,3),i,3.3,.02);if(E.length<2)return;const M=E[E.length-1].s,T=E[E.length>>1];Fn(r.bin(T.x,T.z),i,E,-3.3,3.3,.105,Oc,D=>D,M,[0,yt(v+20011),0],0)}else if(_.k==="rail"){const E=zr(Hs(_.p,4),i,2,.03);if(E.length<2)return;const M=E[E.length>>1];Fn(r.bin(M.x,M.z),i,E,-2,2,.095,Oc,T=>T,0,[1,yt(v+733),0],0)}});const h=(_,v)=>(_.polygonOffset=!0,_.polygonOffsetFactor=v,_.polygonOffsetUnits=v*2,_),f=h(Zn(new xn({vertexColors:!0}),e,{key:"p2p-road",vertexPars:Oa,vertex:ka,fragmentPars:Ba,color:qx,final:kc("0.50")}),-3),u=h(Zn(new xn({vertexColors:!0}),e,{key:"p2p-walk",vertexPars:Oa,vertex:ka,fragmentPars:Ba,color:Xx,final:kc("0.22")}),-2),d=h(Zn(new xn({vertexColors:!0,transparent:!0,depthWrite:!1}),e,{key:"p2p-over",vertexPars:Oa,vertex:ka,fragmentPars:Ba,color:$x,final:`
      {
        vec3 toEye = normalize(cameraPosition - vWorld);
        vec3 r = reflect(-toEye, vec3(0.0, 1.0, 0.0));
        float fres = 0.25 + 0.75 * pow(1.0 - max(toEye.y, 0.0), 4.0);
        outgoingLight = mix(outgoingLight, p2pSky(r) * 0.8 + vec3(1.0, 0.85, 0.65) * pow(max(dot(r, P2P_SUN), 0.0), 30.0) * 2.0 * p2pLit, p2pGloss * fres);
      }`}),-5),g=n.build(f,{receive:!0}),m=s.build(u,{receive:!0}),x=r.build(d,{receive:!0});for(const _ of x.children)_.renderOrder=2;t.add(m,g,x);const p=(_,v,E)=>{for(const M of _){const T=M.geometry.boundingSphere;M.visible=Math.hypot(T.center.x-v.x,T.center.z-v.z)-T.radius<E}};return{group:t,update:_=>{p(g.children,_,Ui),p(m.children,_,Ui),p(x.children,_,Ui-60)}}}const Mn=1,Kx=3.2,jx=2.4;function Zx(i){const e=i.length;return i.map((t,n)=>{const s=i[Math.max(0,n-1)],r=i[Math.min(e-1,n+1)];let a=r[0]-s[0],o=r[2]-s[2];const l=Math.hypot(a,o)||1e-6;a/=l,o/=l;let c=o,h=-a;if(n>0&&n<e-1){const f=i[n-1],u=i[n],d=u[0]-f[0],g=u[2]-f[2],m=Math.hypot(d,g)||1e-6,x=Math.max(.5,c*(g/m)+h*(-d/m));c/=x,h/=x}return[c,h]})}function Ha(i,e,t,n,s){return i.some((r,a)=>{if(a===e)return!1;for(let o=0;o+1<r.p.length;o++){const l=r.p[o],c=r.p[o+1],h=c[0]-l[0],f=c[2]-l[2],u=h*h+f*f;if(u<1e-6)continue;const d=Math.sqrt(u),g=((t-l[0])*h+(s-l[2])*f)/u,m=.8/d;if(g<(o===0?0:-m)||g>(o+2===r.p.length?1:1+m)||Math.hypot(l[0]+h*g-t,l[2]+f*g-s)>r.half)continue;const x=l[1]+(c[1]-l[1])*Math.min(1,Math.max(0,g));if(Math.abs(x-n)<1.5)return!0}return!1})}class Bc{pos=[];col=[];aux=[];idx=[];quad(e,t,n,s,r,a,o=[[0,0],[0,0],[0,0],[0,0]]){const l=this.pos.length/3;for(const[_,v]of[e,t,n,s].entries())this.pos.push(v[0],v[1],v[2]),this.col.push(...r),this.aux.push(o[_][0],o[_][1]);const c=t[0]-e[0],h=t[1]-e[1],f=t[2]-e[2],u=n[0]-e[0],d=n[1]-e[1],g=n[2]-e[2],m=h*g-f*d,x=f*u-c*g,p=c*d-h*u;m*(a[0]-e[0])+x*(a[1]-e[1])+p*(a[2]-e[2])>=0?this.idx.push(l,l+1,l+2,l,l+2,l+3):this.idx.push(l,l+2,l+1,l,l+3,l+2)}geometry(){const e=new bt;return e.setAttribute("position",new ct(this.pos,3)),e.setAttribute("color",new ct(this.col,3)),e.setAttribute("aWay",new ct(this.aux,2)),e.setIndex(this.idx),e.computeVertexNormals(),e.computeBoundingSphere(),e}}const is=[.66,.645,.61],Jx=[.42,.41,.39],Ei=[.74,.73,.7];function Qx(i,e){const t=i.ways??[],n=new Ft,s=new Bc,r=new Bc;t.forEach((l,c)=>{const h=Zx(l.p),f=(m,x,p)=>{const y=l.p[m];return[y[0]+h[m][0]*l.half*x,y[1]+p,y[2]+h[m][1]*l.half*x]},u=(m,x)=>[l.p[m][0],l.p[m][1]+x,l.p[m][2]];if(l.k==="deck"){for(let m=0;m+1<l.p.length;m++){for(const x of[1,-1]){const p=f(m,x*3,-.6);s.quad(f(m,x,-1.2),f(m+1,x,-1.2),f(m+1,x,.02),f(m,x,.02),is,p)}s.quad(f(m,1,-1.2),f(m+1,1,-1.2),f(m+1,-1,-1.2),f(m,-1,-1.2),Jx,u(m,-1.2-5));for(const x of[1,-1]){const p=f(m,x*.98,0),y=f(m+1,x*.98,0),_=[(p[0]+y[0])/2,(p[1]+y[1])/2,(p[2]+y[2])/2];if(Ha(t,c,_[0],_[1],_[2])||Ha(t,c,p[0],p[1],p[2])&&Ha(t,c,y[0],y[1],y[2]))continue;const v=(M,T,D)=>f(M,x*(1-T/l.half),D),E=u(m,1.5);s.quad(v(m,0,0),v(m+1,0,0),v(m+1,0,Mn),v(m,0,Mn),Ei,f(m,x*2,.5)),s.quad(v(m,0,Mn),v(m+1,0,Mn),v(m+1,.18,Mn),v(m,.18,Mn),Ei,u(m,10)),s.quad(v(m,.18,Mn),v(m+1,.18,Mn),v(m+1,.3,.32),v(m,.3,.32),Ei,E),s.quad(v(m,.3,.32),v(m+1,.3,.32),v(m+1,.42,.02),v(m,.42,.02),Ei,E)}}for(const[m,x]of[[0,l.shut[0]],[l.p.length-1,l.shut[1]]]){const p=m===0?1:l.p.length-2,y=[2*l.p[m][0]-l.p[p][0],l.p[m][1],2*l.p[m][2]-l.p[p][2]];x?(s.quad(f(m,1,-1.2),f(m,-1,-1.2),f(m,-1,Mn),f(m,1,Mn),Ei,y),s.quad(f(m,1,-1.2),f(m,-1,-1.2),f(m,-1,Mn),f(m,1,Mn),Ei,l.p[p])):l.p[m][1]-e.at(l.p[m][0],l.p[m][2])>1.5&&s.quad(f(m,1,-1.2),f(m,-1,-1.2),f(m,-1,0),f(m,1,0),is,y)}return}const d=l.clear??5.6;let g=0;for(let m=0;m+1<l.p.length;m++){const x=Math.hypot(l.p[m+1][0]-l.p[m][0],l.p[m+1][2]-l.p[m][2]),p=u(m,d*.5);for(const y of[1,-1])r.quad(f(m,y,-.25),f(m+1,y,-.25),f(m+1,y,d),f(m,y,d),[.78,.77,.72],p,[[g,0],[g+x,0],[g+x,1],[g,1]]);r.quad(f(m,1,d),f(m+1,1,d),f(m+1,-1,d),f(m,-1,d),[.3,.3,.31],p,[[g,2],[g+x,2],[g+x,3],[g,3]]),g+=x}for(const m of[0,l.p.length-1]){const x=m===0?1:l.p.length-2,p=[2*l.p[m][0]-l.p[x][0],l.p[m][1]+2,2*l.p[m][2]-l.p[x][2]];let y=l.p[m][1]+d+jx;for(let D=0;D<Math.min(4,l.p.length);D++){const w=l.p[m===0?D:l.p.length-1-D];y=Math.max(y,e.at(w[0],w[2])+.5)}const _=y,v=(l.half+Kx)/l.half,E=(D,w)=>f(m,D,w);s.quad(E(1,-.3),E(v,-.3),E(v,_-l.p[m][1]),E(1,_-l.p[m][1]),is,p),s.quad(E(-1,-.3),E(-v,-.3),E(-v,_-l.p[m][1]),E(-1,_-l.p[m][1]),is,p),s.quad(E(1,d),E(-1,d),E(-1,_-l.p[m][1]),E(1,_-l.p[m][1]),is,p);const M=[l.p[x][0],0,l.p[x][2]],T=(D,w)=>[D[0]+(M[0]-l.p[m][0])*w,D[1],D[2]+(M[2]-l.p[m][2])*w];s.quad(E(v,_-l.p[m][1]),E(-v,_-l.p[m][1]),T(E(-v,_-l.p[m][1]),.25),T(E(v,_-l.p[m][1]),.25),Ei,[l.p[m][0],_+10,l.p[m][2]])}});for(const l of i.piers??[]){const c=l.ax*l.a,h=l.az*l.a,f=-l.az*l.c,u=l.ax*l.c,d=.82,g=[[-1,-d],[-d,-1],[d,-1],[1,-d],[1,d],[d,1],[-d,1],[-1,d]].map(([m,x])=>[l.x+c*m+f*x,l.z+h*m+u*x]);for(let m=0;m<g.length;m++){const x=g[m],p=g[(m+1)%g.length],y=(x[0]+p[0])/2*2-l.x,_=(x[1]+p[1])/2*2-l.z;s.quad([x[0],l.y0,x[1]],[p[0],l.y0,p[1]],[p[0],l.y1,p[1]],[x[0],l.y1,x[1]],is,[y,(l.y0+l.y1)/2,_])}}const a=Zn(new xn({vertexColors:!0}),i,{key:"p2p-structure",color:`
      {
        float streak = p2pNoise(vec2(vWorld.x * 0.9 + vWorld.z * 0.7, vWorld.y * 0.08)) * p2pNoise(vec2(vWorld.x * 3.1 - vWorld.z * 2.3, vWorld.y * 0.4));
        diffuseColor.rgb *= 0.86 + 0.22 * p2pNoise(vWorld.xz * 0.35 + vWorld.y * 0.2) - 0.18 * streak;
      }`}),o=new xt(s.geometry(),a);if(o.castShadow=!0,o.receiveShadow=!0,o.name="decks and piers",n.add(o),r.pos.length){const l=new vn({vertexColors:!0,vertexShader:`
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
        }`}),c=new xt(r.geometry(),l);c.name="tunnels",n.add(c)}return n.name="structures",{group:n,count:{decks:t.filter(l=>l.k==="deck").length,tunnels:t.filter(l=>l.k==="tunnel").length,piers:i.piers?.length??0}}}const $r=3.2;function ev(i){const e=new Map;for(const t of i.fronts??[])e.set(t.b*4096+t.e,t);return(t,n)=>e.get(t*4096+n)}const Hc=360,Ga=1.6;class tv{constructor(e,t){this.page=e;const n=e.fronts??[],s=new mi(1,1),r=new Es({color:2372412,metalness:.85,roughness:.08,envMap:t,envMapIntensity:1.2,transparent:!0,opacity:.5,side:en,depthWrite:!1}),a=new Map;n.forEach((h,f)=>{const u=`${Math.floor(h.p0[0]/400)}_${Math.floor(h.p0[1]/400)}`;let d=a.get(u);d||a.set(u,d=[]),d.push(f)});const o=new Bt,l=new B,c=new B;for(const h of a.values()){const f=new Ni(s,r,h.length);h.forEach((u,d)=>{const g=n[u],m=Math.hypot(g.p1[0]-g.p0[0],g.p1[1]-g.p0[1]);o.setFromUnitVectors(new B(0,0,1),new B(g.n[0],0,g.n[1]));const x=Math.min(g.y,Pi().at(g.p0[0],g.p0[1]),Pi().at(g.p1[0],g.p1[1])),p=g.y+$r-x;c.set((g.p0[0]+g.p1[0])/2+g.n[0]*.04,x+p/2,(g.p0[1]+g.p1[1])/2+g.n[1]*.04),f.setMatrixAt(d,this.m.compose(c,o,l.set(m,p,1))),this.glass[u]={mesh:f,slot:d}}),f.instanceMatrix.needsUpdate=!0,f.computeBoundingSphere(),f.matrixAutoUpdate=!1,this.group.add(f),this.cells.push({mesh:f,x:f.boundingSphere.center.x,z:f.boundingSphere.center.z})}this.shards=new Ni(new mi(1,1),new Ss({color:13625070,transparent:!0,opacity:.75,side:en,depthWrite:!1}),Hc),this.shards.count=0,this.shards.frustumCulled=!1,this.group.add(this.shards)}group=new Ft;glass=[];cells=[];shards;live=[];broken=new Set;m=new vt;raze(e){}shatter(e,t){const n=this.page.fronts?.[e],s=this.glass[e];if(!n||!s||this.broken.has(e))return;this.broken.add(e),s.mesh.getMatrixAt(s.slot,this.m),s.mesh.setMatrixAt(s.slot,this.m.makeScale(0,0,0)),s.mesh.instanceMatrix.needsUpdate=!0;const r=Math.hypot(n.p1[0]-n.p0[0],n.p1[1]-n.p0[1]);for(let a=0;a<90&&this.live.length<Hc;a++){const o=Math.random(),l=Math.random()*$r,c=-(.25+Math.random()*.6)*Math.min(18,t);this.live.push({p:new B(n.p0[0]+(n.p1[0]-n.p0[0])*o,n.y+l,n.p0[1]+(n.p1[1]-n.p0[1])*o),v:new B(n.n[0]*c+(Math.random()-.5)*4,1+Math.random()*3,n.n[1]*c+(Math.random()-.5)*4),spin:new B(Math.random()*12-6,Math.random()*12-6,Math.random()*12-6),rot:new En(Math.random()*6,Math.random()*6,0),age:0,size:.08+Math.random()*.22+(r>8?.05:0)})}}reset(){const e=this.page.fronts??[],t=new Bt,n=new B,s=new B;for(const r of this.broken){const a=e[r],o=this.glass[r],l=Math.hypot(a.p1[0]-a.p0[0],a.p1[1]-a.p0[1]);t.setFromUnitVectors(new B(0,0,1),new B(a.n[0],0,a.n[1]));const c=Math.min(a.y,Pi().at(a.p0[0],a.p0[1]),Pi().at(a.p1[0],a.p1[1])),h=a.y+$r-c;s.set((a.p0[0]+a.p1[0])/2+a.n[0]*.04,c+h/2,(a.p0[1]+a.p1[1])/2+a.n[1]*.04),o.mesh.setMatrixAt(o.slot,this.m.compose(s,t,n.set(l,h,1))),o.mesh.instanceMatrix.needsUpdate=!0}this.broken.clear(),this.live.length=0,this.shards.count=0}update(e,t){for(const r of this.cells)r.mesh.visible=Math.hypot(r.x-t.x,r.z-t.z)<700;if(!this.live.length&&!this.shards.count)return;const n=new Bt,s=new B;this.live=this.live.filter(r=>(r.age+=e)<Ga),this.live.forEach((r,a)=>{r.v.y-=9.81*e,r.p.addScaledVector(r.v,e);const o=this.floorAt(r.p);r.p.y<o&&(r.p.y=o,r.v.set(r.v.x*.4,0,r.v.z*.4),r.spin.multiplyScalar(.2)),r.rot.x+=r.spin.x*e,r.rot.y+=r.spin.y*e,r.rot.z+=r.spin.z*e;const l=Math.min(1,(Ga-r.age)/(Ga/3));this.shards.setMatrixAt(a,this.m.compose(r.p,n.setFromEuler(r.rot),s.setScalar(r.size*l)))}),this.shards.count=this.live.length,this.shards.instanceMatrix.needsUpdate=!0}floorAt(e){let t=-1e9;for(const n of this.broken){const s=this.page.fronts[n];Math.abs(s.p0[0]-e.x)<30&&Math.abs(s.p0[1]-e.z)<30&&(t=Math.max(t,s.y+.05))}return t}}function nf(i,e,t,n){if(!n.length)return[[0,i,e,t]];const s=new Set([0,i]);for(const o of n)s.add(Math.max(0,Math.min(i,o.u0))),s.add(Math.max(0,Math.min(i,o.u1)));const r=[...s].sort((o,l)=>o-l),a=[];for(let o=0;o+1<r.length;o++){const l=r[o],c=r[o+1],h=(l+c)/2;if(c-l<.02)continue;let f=e;for(const d of n)h>d.u0&&h<d.u1&&(f=Math.max(f,d.y));if(t-f<.08)continue;const u=a[a.length-1];u&&Math.abs(u[1]-l)<1e-6&&Math.abs(u[2]-f)<1e-6?u[1]=c:a.push([l,c,f,t])}return a}function sf(i,e,t,n,s){const r=Math.hypot(t-i,n-e),a=[];if(r<.05)return a;const o=(t-i)/r,l=(n-e)/r;for(const c of s){const h=(c.x0+c.x1)/2-i,f=(c.z0+c.z1)/2-e,u=h*o+f*l;if(Math.abs(-h*l+f*o)>.25||u<-.1||u>r+.1)continue;const d=(c.x0-i)*o+(c.z0-e)*l,g=(c.x1-i)*o+(c.z1-e)*l;a.push({u0:Math.min(d,g),u1:Math.max(d,g),y:c.y})}return a}function Gc(i,e,t){const n=i.geometry.getAttribute("position"),s=n.array,r=s.slice(e*3,t*3);for(let a=e;a<t;a++)s[a*3]=s[e*3],s[a*3+1]=s[e*3+1],s[a*3+2]=s[e*3+2];return n.addUpdateRange(e*3,(t-e)*3),n.needsUpdate=!0,r}function Vc(i,e,t){const n=i.geometry.getAttribute("position");n.array.set(t,e*3),n.addUpdateRange(e*3,t.length),n.needsUpdate=!0}const nv=`
  attribute vec4 aux; attribute vec4 ext;
  varying vec4 vAux; flat varying vec4 vExt; varying vec3 vWallN;`,iv="vAux = aux; vExt = ext; vWallN = normal;",sv=`
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
  }`,rv=`
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
  }`,av="normal = normalize( mat3( viewMatrix ) * p2pN );",ov=`
  {
    vec2 sh = p2pShade(vWorld.xz + normalize(vWallN.xz + vec2(1e-5)) * 3.2);
    float inShade = smoothstep(-2.0, 2.0, sh.x - p2pUp) * smoothstep(0.2, 1.2, sh.x);
    reflectedLight.directDiffuse *= mix(1.0 - inShade, 1.0, p2pNear);
    reflectedLight.indirectDiffuse *= mix(0.78, 1.0, smoothstep(0.0, 22.0, p2pUp));
  }`,lv=`
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
  outgoingLight += p2pGlow;`,je={ROOF:-1,VICTORIAN:0,STUCCO:1,MASONRY:2,OFFICE:3,GLASS:4,PRECAST:5,SHED:6,AWNING:8,CORNICE:9,ROOFBOX:10,SIGN:11},oi={PLAIN:0,SHOP:1,GARAGE:2,LOBBY:3},cv=[15855074,15525590,15260864,15986662,14867920,14672863,15327951,14277846,15788244,15130834,13226944,12570072,14929860,15392686,13620940,14207412,12175055,15322032,13352914,12900556,9084853,11122586,12153690,7314583,5662074,8093554,13607834,14267482],hv=[15722972,15327696,15920868,14998731,14602938,15131610,14277074,15787730,15061944,14080731,15260102,13617597,14730414,13226692,14469542],fv=[9194042,10115652,8011826,12887420,12162923,14273972,13616558,10263188,11578272,11037007,14075554],uv=[12433581,11117980,13223096,9407106,5920338,11906460],dv=[5595242,3752522,7109766,9085098,2896440,5200984],pv=[14209732,13617336,14867920,12564648,14076856],mv=[11577496,10133664,12760476,9277324,10720387],Wc=[8003356,2051386,1914199,2829102,13214247,9059090,4861022,14275264,1006691],Va=(i,e)=>i[Math.min(i.length-1,Math.floor(e*i.length))],gv=170,xv=200,vv=[{x:67,z:-136,high:260,shape:"pyramid",style:je.PRECAST,color:14472904},{x:-28,z:212,high:237,style:je.OFFICE,color:5980216}];class _v{cells=new Map;size=40;constructor(e){for(const t of e.roads){if(t.b)continue;const n=/^(primary|secondary|tertiary|trunk)$/.test(t.c)?1:/^(residential|unclassified|living_street|pedestrian)$/.test(t.c)?2:t.c==="service"?3:0;if(n)for(let s=0;s+1<t.p.length;s++){const[r,a]=t.p[s],[o,l]=t.p[s+1],c={ax:r,az:a,bx:o,bz:l,reach:t.w/2+(t.s??0),kind:n},h=Math.floor(Math.min(r,o)/this.size),f=Math.floor(Math.max(r,o)/this.size),u=Math.floor(Math.min(a,l)/this.size),d=Math.floor(Math.max(a,l)/this.size);for(let g=h;g<=f;g++)for(let m=u;m<=d;m++){const x=`${g}_${m}`;let p=this.cells.get(x);p||(p=[],this.cells.set(x,p)),p.push(c)}}}}facing(e,t,n,s){let r=0,a=1/0;const o=Math.floor(e/this.size),l=Math.floor(t/this.size);for(let c=o-1;c<=o+1;c++)for(let h=l-1;h<=l+1;h++)for(const f of this.cells.get(`${c}_${h}`)??[]){const u=f.bx-f.ax,d=f.bz-f.az,g=u*u+d*d,m=g>0?Math.max(0,Math.min(1,((e-f.ax)*u+(t-f.az)*d)/g)):0,x=f.ax+u*m-e,p=f.az+d*m-t,y=Math.hypot(x,p);if(y>f.reach+7||x*n+p*s<y*.6)continue;const _=y+(f.kind===3?12:0);_<a&&(a=_,r=f.kind)}return r}}function kt(i,e,t,n,s,r,a){const o=i.pos.length/3;for(let y=0;y<4;y++)yl(i,t[y][0],t[y][1],t[y][2],n[0],n[1],n[2],s.r,s.g,s.b),i.aux.push(...r[y]),i.ext.push(...a);const[l,c,h]=[t[0],t[1],t[2]],f=c[0]-l[0],u=c[1]-l[1],d=c[2]-l[2],g=h[0]-l[0],m=h[1]-l[1],x=h[2]-l[2];(u*x-d*m)*n[0]+(d*g-f*x)*n[1]+(f*m-u*g)*n[2]>=0?e.push(o,o+1,o+2,o,o+2,o+3):e.push(o,o+2,o+1,o,o+3,o+2)}function yv(i,e,t){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const[a,o]=i[s],[l,c]=i[r];o>t!=c>t&&e<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n}function Mv(i){const e=Pi(),t=new _v(i),n=ev(i),s=new Di(400,4,4),r=new Di(400,4,4),a={walls:0,roofs:0,cornices:0,bays:0,awnings:0,signs:0,boxes:0},o=new qe,l=new qe,c=new qe,h=new qe,f={},u=i.buildings.length,d=new Array(u).fill(null),g=new Array(u).fill(null),m=new Int32Array(u*4),x=new Float32Array(u*6),p=(P,H,J,he,se)=>{const Q=P.r;if(Q.length<4)return;let q=0,K=0,ue=0,_e=1/0,Ee=0;const Ue=[];for(let re=0;re+1<Q.length;re++){const[k,Z]=Q[re],[ie,oe]=Q[re+1];q+=k,K+=Z,ue+=k*oe-ie*Z;const we=e.at(k,Z);Ue.push(we),_e=Math.min(_e,we),Ee+=we}Ue.push(Ue[0]);const Ge=Q.length-1;q/=Ge,K/=Ge;const O=Math.abs(ue)/2,me=P.y1,De=me-P.y0,Re=Ee/Ge,[Me,ze]=J(q,K),Le=De>=15||O>=700||!!he,Xe=Le?Me.idx:Me.late,Je=ue>0?1:-1,Ye=[];let F=!1,S=!1;for(let re=0;re+1<Q.length;re++){const[k,Z]=Q[re],[ie,oe]=Q[re+1],we=Math.hypot(ie-k,oe-Z);if(we<2.2){Ye.push(0);continue}const V=(oe-Z)/we*Je,j=-(ie-k)/we*Je,te=t.facing((k+ie)/2,(Z+oe)/2,V,j);Ye.push(te),te===1?F=!0:te===2&&(S=!0)}const X=yt(H*3+1),ae=vv.find(re=>Math.hypot(re.x-q,re.z-K)<30&&Math.abs(re.high-De)<12);let le;ae?.style!=null?le=ae.style:De>=45?le=X<.36?je.GLASS:X<.62?je.OFFICE:X<.88||De>110?je.PRECAST:je.MASONRY:De>=20?le=F||O>700?X<.48?je.MASONRY:X<.74?je.OFFICE:X<.88?je.PRECAST:je.STUCCO:X<.55?je.STUCCO:X<.8?je.MASONRY:je.PRECAST:O>1400&&De<11?le=je.SHED:F&&!S?le=X<.5?je.MASONRY:X<.82?je.STUCCO:je.VICTORIAN:O<=460?le=X<.55?je.VICTORIAN:X<.92?je.STUCCO:je.MASONRY:le=X<.62?je.STUCCO:X<.9?je.MASONRY:je.VICTORIAN,he||(f[le]=(f[le]??0)+1);const ce=le===je.OFFICE||le===je.GLASS||le===je.PRECAST,ke=yt(H*3+2),ve=yt(H*3+3);o.setHex(ae?.color??Va(le===je.VICTORIAN?cv:le===je.STUCCO?hv:le===je.MASONRY?fv:le===je.OFFICE?uv:le===je.GLASS?dv:le===je.PRECAST?pv:mv,ke)),o.offsetHSL((yt(H+5003)-.5)*.02,0,(yt(H+7919)-.5)*.07),le===je.VICTORIAN?l.setHex(15328988):l.copy(o).lerp(h.setHex(14209215),.45);const Fe=le+ve*.98,Ne=P.m?P.y0+P.m:_e-1.5;if(ae?.shape==="pyramid")wv(Me,Me.idx,Q,Je,q,K,Ne,me,Re,o,Fe,Ue);else for(let re=0;re+1<Q.length;re++){let[k,Z]=Q[re],[ie,oe]=Q[re+1],we=Ue[re],V=Ue[re+1];const j=Math.hypot(ie-k,oe-Z);if(j<.05)continue;const te=(oe-Z)/j*Je,ge=-(ie-k)/j*Je;Je>0&&([k,ie]=[ie,k],[Z,oe]=[oe,Z],[we,V]=[V,we]);const pe=Ye[re],fe=pe===1||pe===2,Ce=ce?oi.LOBBY:le===je.SHED?oi.PLAIN:pe===1?oi.SHOP:pe===2?oi.GARAGE:oi.PLAIN,Te=(V-we)/j,Ke=[Fe,(fe?1:0)+2*Ce,Te,Re],it=n(H,re),dt=he?sf(k,Z,ie,oe,he):[];if(it){const de=Math.hypot(it.p0[0]-k,it.p0[1]-Z),Ae=Math.hypot(it.p1[0]-k,it.p1[1]-Z);dt.push({u0:Math.min(de,Ae),u1:Math.max(de,Ae),y:it.y+$r})}const _t=nf(j,Ne,me,dt),at=(ie-k)/j,Qe=(oe-Z)/j;se&&se.push(ie,Ne,oe,k,Ne,Z,k,me,Z,ie,Ne,oe,k,me,Z,ie,me,oe);for(const[de,Ae,ye,Ie]of _t){if(Ae-de<.02||Ie-ye<.02)continue;const Be=we+Te*de,be=we+Te*Ae;kt(Me,Xe,[[k+at*de,ye,Z+Qe*de],[k+at*Ae,ye,Z+Qe*Ae],[k+at*Ae,Ie,Z+Qe*Ae],[k+at*de,Ie,Z+Qe*de]],[te,0,ge],o,[[de,Be,j,me],[Ae,be,j,me],[Ae,be,j,me],[de,Be,j,me]],Ke),he||(a.walls+=2)}if(!fe||j<4||De>40||ce||le===je.SHED)continue;const Lt=le===je.VICTORIAN?.42:.3,St=le===je.MASONRY?.7:.5,Nt=me-St+.12,At=me+.12,rn=te*Lt,qt=ge*Lt,an=(ie-k)/j,on=(oe-Z)/j,_n=[je.CORNICE+ve*.98,0,0,Re],or=[k,Nt,Z],lr=[ie,Nt,oe],Ts=[k+rn,Nt,Z+qt],Rs=[ie+rn,Nt,oe+qt],Cs=[k+rn,At,Z+qt],C=[ie+rn,At,oe+qt],$=[k,At,Z],ne=[ie,At,oe],ee=de=>[[0,de,j,me],[j,de,j,me],[j,de+1,j,me],[0,de+1,j,me]];if(kt(ze,ze.idx,[Ts,Rs,C,Cs],[te,0,ge],l,ee(0),_n),kt(ze,ze.idx,[or,lr,Rs,Ts],[0,-1,0],l,ee(2),_n),kt(ze,ze.idx,[Cs,C,ne,$],[0,1,0],l,ee(4),_n),a.cornices+=6,Ye[(re+(Je>0?1:Ge-1))%Ge]===1||Ye[(re+(Je>0?1:Ge-1))%Ge]===2||(kt(ze,ze.idx,[or,Ts,Cs,$],[-an,0,-on],l,ee(0),_n),a.cornices+=2),Ye[(re+(Je>0?Ge-1:1))%Ge]===1||Ye[(re+(Je>0?Ge-1:1))%Ge]===2||(kt(ze,ze.idx,[lr,Rs,C,ne],[an,0,on],l,ee(0),_n),a.cornices+=2),le<=je.STUCCO&&j>=4.4){const de=Math.max(1,Math.floor(j/7.6+.5)),Ae=j/de,ye=Ae/7.6,Ie=le===je.VICTORIAN?1.05:.75,Be=Ce===oi.SHOP?4.15:2.75,be=(He,tt,Ze)=>[k+an*He+te*tt,Ze,Z+on*He+ge*tt],Ve=[Fe,1+2*Ce+16,Te,Re];for(let He=0;He<de;He++){const tt=He*Ae,Ze=we+Te*(He+.5)*Ae,nt=Ze+Be,Oe=me-Ie;if(Oe-nt<2.2)continue;const ft=tt+.7*ye,et=tt+1.45*ye,Tt=tt+3.55*ye,Kt=tt+4.3*ye,Rt=Math.min(.7,.6*ye),Hn=(gt,jt,Dt,zt)=>{const Vt=Dt-gt,xi=zt-jt,Un=Math.hypot(Vt,xi),of=(te*Vt-an*xi)/Un,lf=(ge*Vt-on*xi)/Un;kt(ze,ze.idx,[be(gt,jt,nt),be(Dt,zt,nt),be(Dt,zt,Oe),be(gt,jt,Oe)],[of,0,lf],o,[[gt,we+Te*gt,j,me],[Dt,we+Te*Dt,j,me],[Dt,we+Te*Dt,j,me],[gt,we+Te*gt,j,me]],Ve)};Hn(ft,0,et,Rt),Hn(et,Rt,Tt,Rt),Hn(Tt,Rt,Kt,0),kt(ze,ze.idx,[be(ft,0,Oe+.25),be(et,Rt,Oe),be(Tt,Rt,Oe),be(Kt,0,Oe+.25)],[te*.38,.92,ge*.38],l,ee(4),_n),kt(ze,ze.idx,[be(ft,0,nt),be(et,Rt,nt),be(Tt,Rt,nt),be(Kt,0,nt)],[0,-1,0],l,ee(2),_n),a.bays+=10}}if(Ce!==oi.SHOP||j<4)continue;const Y=Math.max(1,Math.floor(j/5.5+.5)),xe=j/Y;for(let de=0;de<Y;de++){if(yt(H*131+re*17+de)>.5)continue;h.setHex(Va(Wc,yt(H*57+re*5+de+9)));const ye=de*xe+.3,Ie=(de+1)*xe-.3,Be=we+Te*(de+.5)*xe,be=1+.5*yt(H+de*7+13),Ve=Be+3.05,He=Be+2.5,tt=He-.24,Ze=(Tt,Kt,Rt)=>[k+an*Tt+te*Kt,Rt,Z+on*Tt+ge*Kt],nt=[je.AWNING+yt(H+de*3+1)*.98,0,0,Re],Oe=be/Math.hypot(be,Ve-He),ft=(Ve-He)/Math.hypot(be,Ve-He),et=(Tt,Kt)=>[[ye,Tt,j,me],[Ie,Tt,j,me],[Ie,Kt,j,me],[ye,Kt,j,me]];kt(ze,ze.idx,[Ze(ye,be,He),Ze(Ie,be,He),Ze(Ie,.02,Ve),Ze(ye,.02,Ve)],[te*ft,Oe,ge*ft],h,et(0,1),nt),kt(ze,ze.idx,[Ze(ye,be,tt),Ze(Ie,be,tt),Ze(Ie,be,He),Ze(ye,be,He)],[te,0,ge],h,et(2,3),nt),kt(ze,ze.idx,[Ze(ye,be,He-.02),Ze(Ie,be,He-.02),Ze(Ie,.02,Ve-.02),Ze(ye,.02,Ve-.02)],[-te*ft,-Oe,-ge*ft],h,et(4,5),nt),a.awnings+=6}for(let de=0;de<Y;de++){if(yt(H*173+re*29+de+5)>.42||De<6.5)continue;h.setHex(Va(Wc,yt(H*61+re*3+de+2)));const Ae=we+Te*(de+.5)*xe,ye=de*xe+.16,Ie=Math.min(me-Ae-4.2,1.4+1.5*yt(H+de*11+3));if(Ie<1)continue;const Be=Ae+3.5,be=Be+Ie,Ve=.18,He=.18+.62+.25*yt(H+de*5),tt=(Oe,ft,et)=>[k+an*(ye+et)+te*Oe,ft,Z+on*(ye+et)+ge*Oe],Ze=[je.SIGN+yt(H+de*13+7)*.98,0,0,Re],nt=[[0,0,He-Ve,Ie],[He-Ve,0,He-Ve,Ie],[He-Ve,Ie,He-Ve,Ie],[0,Ie,He-Ve,Ie]];kt(ze,ze.idx,[tt(Ve,Be,.03),tt(He,Be,.03),tt(He,be,.03),tt(Ve,be,.03)],[an,0,on],h,nt,Ze),kt(ze,ze.idx,[tt(Ve,Be,-.03),tt(He,Be,-.03),tt(He,be,-.03),tt(Ve,be,-.03)],[-an,0,-on],h,nt,Ze),a.signs+=4}}if(P.col!=null?c.setHex(P.col,Qt):c.copy(o).multiplyScalar(.62),he||x.set([o.r,o.g,o.b,c.r,c.g,c.b],H*6),!Le&&!he){let re=1,k=0,Z=0;for(let dt=0;dt+1<Q.length;dt++){const _t=Q[dt+1][0]-Q[dt][0],at=Q[dt+1][1]-Q[dt][1],Qe=Math.hypot(_t,at);Qe>Z&&(Z=Qe,re=_t/Qe,k=at/Qe)}let ie=1/0,oe=-1/0,we=1/0,V=-1/0;for(const[dt,_t]of Q){const at=dt*re+_t*k,Qe=-dt*k+_t*re;ie=Math.min(ie,at),oe=Math.max(oe,at),we=Math.min(we,Qe),V=Math.max(V,Qe)}const j=Math.sqrt(Math.min(1,O/Math.max(1,(oe-ie)*(V-we)))),te=(ie+oe)/2,ge=(we+V)/2,pe=(oe-ie)/2*j,fe=(V-we)/2*j,Ce=(dt,_t)=>{const at=te+dt*pe,Qe=ge+_t*fe;return[at*re-Qe*k,at*k+Qe*re]},Te=[Ce(-1,-1),Ce(1,-1),Ce(1,1),Ce(-1,1)],Ke=(Te[0][0]+Te[2][0])/2,it=(Te[0][1]+Te[2][1])/2;for(let dt=0;dt<4;dt++){const[_t,at]=Te[dt],[Qe,Lt]=Te[(dt+1)%4],St=Math.hypot(Qe-_t,Lt-at);if(St<.05)continue;let Nt=(Lt-at)/St,At=-(Qe-_t)/St;Nt*((_t+Qe)/2-Ke)+At*((at+Lt)/2-it)<0&&(Nt=-Nt,At=-At);const rn=(Qe-_t)*At-(Lt-at)*Nt<0,[qt,an,on,_n]=rn?[Qe,Lt,_t,at]:[_t,at,Qe,Lt];kt(Me,Me.box,[[qt,Ne,an],[on,Ne,_n],[on,me,_n],[qt,me,an]],[Nt,0,At],o,[[0,Re,St,me],[St,Re,St,me],[St,Re,St,me],[0,Re,St,me]],[Fe,1,0,Re])}kt(Me,Me.box,[[Te[0][0],me,Te[0][1]],[Te[1][0],me,Te[1][1]],[Te[2][0],me,Te[2][1]],[Te[3][0],me,Te[3][1]]],[0,1,0],c,[[0,0,0,me],[0,0,0,me],[0,0,0,me],[0,0,0,me]],[je.ROOF+ve*.98,0,0,Re])}if(ae?.shape!=="pyramid"){const re=Q.slice(0,-1).map(([Z,ie])=>new $e(Z,ie)),k=Me.pos.length/3;for(const Z of re)yl(Me,Z.x,me,Z.y,0,1,0,c.r,c.g,c.b),Me.aux.push(0,0,0,me),Me.ext.push(je.ROOF+ve*.98,0,0,Re);for(const Z of tr.triangulateShape(re,[])){const ie=re[Z[0]],oe=re[Z[1]],we=re[Z[2]],V=(oe.y-ie.y)*(we.x-ie.x)-(oe.x-ie.x)*(we.y-ie.y);if(V>=0?Xe.push(k+Z[0],k+Z[1],k+Z[2]):Xe.push(k+Z[0],k+Z[2],k+Z[1]),he||a.roofs++,se)for(const j of V>=0?[Z[0],Z[2],Z[1]]:[Z[0],Z[1],Z[2]])se.push(re[j].x,me-.06,re[j].y)}if(De>=11&&O>=220){const Z=De>=45?2:1;for(let ie=0;ie<Z;ie++){const oe=Math.sqrt(O),we=Math.min(oe*.42,3+oe*.22*(.5+yt(H*7+ie))),V=Math.min(oe*.42,3+oe*.18*(.5+yt(H*11+ie))),j=q+(yt(H*13+ie)-.5)*oe*.35,te=K+(yt(H*17+ie)-.5)*oe*.35,ge=De>=45?4+5*yt(H*19+ie):2.2+1.6*yt(H*19+ie);let pe=1,fe=0,Ce=0;for(let at=0;at+1<Q.length;at++){const Qe=Q[at+1][0]-Q[at][0],Lt=Q[at+1][1]-Q[at][1],St=Math.hypot(Qe,Lt);St>Ce&&(Ce=St,pe=Qe/St,fe=Lt/St)}const Te=(at,Qe)=>[j+pe*we/2*at-fe*V/2*Qe,te+fe*we/2*at+pe*V/2*Qe],Ke=[Te(-1,-1),Te(1,-1),Te(1,1),Te(-1,1)];if(!Ke.every(([at,Qe])=>yv(Q,at,Qe)))continue;h.copy(c).lerp(l.clone().multiplyScalar(.8),.5);const it=[je.ROOFBOX+yt(H+ie)*.98,0,0,Re],dt=De>=45?Me:ze,_t=dt.idx;he||(a.boxes+=10);for(let at=0;at<4;at++){const[Qe,Lt]=Ke[at],[St,Nt]=Ke[(at+1)%4],At=Math.hypot(St-Qe,Nt-Lt);let rn=(Nt-Lt)/At,qt=-(St-Qe)/At;rn*((Qe+St)/2-j)+qt*((Lt+Nt)/2-te)<0&&(rn=-rn,qt=-qt),kt(dt,_t,[[Qe,me,Lt],[St,me,Nt],[St,me+ge,Nt],[Qe,me+ge,Lt]],[rn,0,qt],h,[[0,0,At,me],[At,0,At,me],[At,ge,At,me],[0,ge,At,me]],it)}kt(dt,_t,[[Ke[0][0],me+ge,Ke[0][1]],[Ke[1][0],me+ge,Ke[1][1]],[Ke[2][0],me+ge,Ke[2][1]],[Ke[3][0],me+ge,Ke[3][1]]],[0,1,0],c,[[0,0,0,me],[0,0,0,me],[0,0,0,me],[0,0,0,me]],[je.ROOF+ve*.98,0,0,Re])}}}};i.buildings.forEach((P,H)=>{p(P,H,(J,he)=>{const se=s.bin(J,he),Q=r.bin(J,he);return d[H]=se,g[H]=Q,m[H*4]=se.pos.length/3,m[H*4+2]=Q.pos.length/3,[se,Q]},null,null),d[H]&&(m[H*4+1]=d[H].pos.length/3,m[H*4+3]=g[H].pos.length/3)});const y=Zn(new xn({vertexColors:!0}),i,{key:"p2p-city-walls",vertexPars:nv,vertex:iv,fragmentPars:sv,color:rv,normal:av,light:ov,final:lv}),_=new Ft,v=s.build(y,{cast:!0,receive:!0}),E=r.build(y,{cast:vl()==="high",receive:!0});_.add(v,E),_.userData.styles=f,_.userData.triangles=a;const M=v.children.map(P=>{const H=P.geometry,J=H.index.array,he=([q,K])=>{const ue=new bt;for(const _e of Object.keys(H.attributes))ue.setAttribute(_e,H.getAttribute(_e));return ue.setIndex(new ut(J.subarray(q,q+K),1)),ue.boundingSphere=H.boundingSphere,ue.boundingBox=H.boundingBox,ue},se=P.userData.near?he(P.userData.near):H,Q=P.userData.far?he(P.userData.far):H;return P.geometry=se,{m:P,near:se,far:Q}}),T=E.children,D=(P,H)=>{const J=P.geometry.boundingSphere;return Math.hypot(J.center.x-H.x,J.center.z-H.z)-J.radius};_.userData.tend=P=>{for(const H of M)H.m.geometry=D(H.m,P)>xv?H.far:H.near;for(const H of T)H.visible=D(H,P)<gv};const w=new Ft;w.name="broken buildings",_.add(w);const b=new Ss({color:1052430}),A=new Map,U=new Map,L=new Set,G=P=>{if(A.has(P)||!d[P])return;const[H,J,he,se]=[m[P*4],m[P*4+1],m[P*4+2],m[P*4+3]],Q=d[P].mesh,q=g[P].mesh;A.set(P,{main:Q&&J>H?Gc(Q,H,J):null,fine:q&&se>he?Gc(q,he,se):null})},z=P=>{const H=U.get(P);H&&(w.remove(H),H.traverse(J=>{const he=J;he.isMesh&&he.geometry.dispose()}),U.delete(P))};return{group:_,breach:(P,H)=>{const J=i.buildings[P];if(!J||L.has(P)||!d[P])return;G(P),z(P);const he=new Di(1e9,4,4),se=new Di(1e9,4,4),Q=[];p(J,P,()=>[he.bin(0,0),se.bin(0,0)],H,Q);const q=new Ft;q.add(he.build(y,{cast:!0,receive:!0}),se.build(y,{receive:!0}));const K=new bt;K.setAttribute("position",new ut(new Float32Array(Q),3));const ue=new xt(K,b);ue.matrixAutoUpdate=!1,q.add(ue),w.add(q),U.set(P,q)},raze:P=>{G(P),z(P),L.add(P)},reset:()=>{for(const[P,H]of A)H.main&&Vc(d[P].mesh,m[P*4],H.main),H.fine&&Vc(g[P].mesh,m[P*4+2],H.fine);A.clear(),L.clear();for(const P of[...U.keys()])z(P)},colors:P=>({wall:[x[P*6],x[P*6+1],x[P*6+2]],roof:[x[P*6+3],x[P*6+4],x[P*6+5]]}),broken:()=>({breached:U.size,razed:L.size})}}function wv(i,e,t,n,s,r,a,o,l,c,h,f){for(let d=0;d+1<t.length;d++){let[g,m]=t[d],[x,p]=t[d+1],y=f[d],_=f[d+1];const v=Math.hypot(x-g,p-m);if(v<.05)continue;const E=(p-m)/v*n,M=-(x-g)/v*n;n>0&&([g,x]=[x,g],[m,p]=[p,m],[y,_]=[_,y]);const T=Math.abs((s-(g+x)/2)*E+(r-(m+p)/2)*M),D=o-l,w=Math.hypot(T,D),b=[E*D/w,T/w,M*D/w],A=(L,G)=>{const z=L<=0?a:l+D*L,N=Math.max(0,L),I=g+(x-g)*G,R=m+(p-m)*G;return[I+(s-I)*N,z,R+(r-R)*N]},U=[h,1+2*oi.LOBBY+8,0,l];for(let L=-1;L<10;L++){const G=L/10,z=(L+1)/10,N=v*(1-Math.max(0,G)),I=v*(1-z),R=(y+_)/2;kt(i,e,[A(G,0),A(G,1),A(z,1),A(z,0)],b,c,[[v/2-N/2,R,v,o],[v/2+N/2,R,v,o],[v/2+I/2,R,v,o],[v/2-I/2,R,v,o]],U)}}}function bv(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new bt;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=qc(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let m=0;m<a[h].length;++m)d.push(a[h][m][u]);const g=qc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function qc(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new ut(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<t;g++){const m=h.getComponent(u,g);o.setComponent(u+f,g,m)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}const pt=(i,e)=>[i[0]+e[0],i[1]+e[1],i[2]+e[2]],In=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],ot=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],Ii=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],gn=i=>{const e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]};function Sv(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const jo=i=>{const e=i()*2-1,t=i()*Math.PI*2,n=Math.sqrt(1-e*e);return[n*Math.cos(t),e,n*Math.sin(t)]};function rf(i){const e=gn(Ii(i,Math.abs(i[1])<.95?[0,1,0]:[1,0,0]));return[e,Ii(i,e)]}class Ev{pos=[];nor=[];col=[];leaf=[];idx=[];v(e,t,n,s,r,a,o){return this.pos.push(...e),this.nor.push(...t),this.col.push(n.r,n.g,n.b),this.leaf.push(s,r,a,o),this.pos.length/3-1}limb(e,t,n,s,r,a,o=0){const l=gn(In(t,e)),[c,h]=rf(l),f=Math.hypot(...In(t,e)),u=this.pos.length/3;for(let d=0;d<=r;d++){const g=d/r*Math.PI*2,m=pt(ot(c,Math.cos(g)),ot(h,Math.sin(g)));this.v(pt(e,ot(m,n)),m,a,d/r,o,1,-1),this.v(pt(t,ot(m,s)),m,a,d/r,o+f,1,-1)}for(let d=0;d<r;d++){const g=u+d*2;this.idx.push(g,g+2,g+1,g+1,g+2,g+3)}}quad(e,t,n,s,r,a,o){const l=this.v(e,s,r,0,0,a,o),c=this.v(pt(e,t),s,r,1,0,a,o),h=this.v(pt(e,n),s,r,0,1,a,o),f=this.v(pt(pt(e,t),n),s,r,1,1,a,o);this.idx.push(l,c,f,l,f,h)}strip(e,t,n,s,r,a,o){const l=this.pos.length/3;e.forEach((c,h)=>{const f=h/(e.length-1);this.v(In(c,ot(n[h],t[h])),s[h],r,0,f,a[h],o),this.v(pt(c,ot(n[h],t[h])),s[h],r,1,f,a[h],o)});for(let c=0;c+1<e.length;c++){const h=l+c*2;this.idx.push(h,h+1,h+3,h,h+3,h+2)}}geometry(){const e=new bt;return e.setAttribute("position",new ct(this.pos,3)),e.setAttribute("normal",new ct(this.nor,3)),e.setAttribute("color",new ct(this.col,3)),e.setAttribute("aLeaf",new ct(this.leaf,4)),e.setIndex(this.idx),e.computeBoundingSphere(),e}}function Or(i,e,t,n,s,r,a,o=0,l=0){const c=t.map(u=>u.r[0]*u.r[1]*u.r[2]),h=c.reduce((u,d)=>u+d,0),f=u=>{let d=e()*h,g=0;for(;g<t.length-1&&d>c[g];)d-=c[g],g++;const m=t[g],x=jo(e),p=u?.25+.2*e():.62+.38*Math.sqrt(e()),y=pt(m.c,[x[0]*m.r[0]*p,x[1]*m.r[1]*p,x[2]*m.r[2]*p]),_=gn([x[0]/m.r[0],x[1]/m.r[1],x[2]/m.r[2]]),v=In(y,n.c),E=gn([v[0]/n.r[0]**2,v[1]/n.r[1]**2,v[2]/n.r[2]**2]),M=gn(pt(pt(_,ot(jo(e),.55)),[0,o,0])),[T,D]=rf(M),w=e()*Math.PI*2,b=pt(ot(T,Math.cos(w)),ot(D,Math.sin(w))),A=Ii(M,b),U=r*(u?1.4:.95+.4*e()),L=Math.hypot(v[0]/n.r[0],v[1]/n.r[1],v[2]/n.r[2]),G=(u?.5:.6+.4*Math.min(1,p*L)**1.4)*(.8+.2*(E[1]*.5+.5)),z=gn(pt(pt(pt(ot(_,.55),ot(E,.45)),ot(M,.2)),[0,.25,0]));i.quad(In(In(y,ot(b,U/2)),ot(A,U/2)),ot(b,U),ot(A,U),z,a[Math.floor(e()*a.length)],G,e()*.999)};for(let u=0;u<s;u++)f(!1);for(let u=0;u<l;u++)f(!0)}function kr(i,e,t,n,s,r,a,o){const l=pt(ot(pt(t,n),.5),[(e()-.5)*.6,.3+e()*.4,(e()-.5)*.6]),c=(s+r)/2;i.limb(t,l,s,c,a,o),i.limb(l,n,c,r,a,o,Math.hypot(...In(l,t)))}const mn=i=>new qe(i),ss=[{name:"plane",leaf:10,bark:1,leaves:[6257974,7047739,5665839],trunk:10262136,trunkHalf:.24,lobes:7,lobeDepth:.16,palm:0,build(i,e,t){const n=mn(this.trunk),s=[.15,3.1,.05];i.limb([0,0,0],s,.3,.22,7,n),i.limb(s,[.1,6.6,0],.22,.07,6,n,3.1);const r={c:[0,7.4,0],r:[4,3.4,4]},a=[{c:[0,7.6,0],r:[3,2.6,3]}];for(let o=0;o<4;o++){const l=o*1.62+e()*.6,c=1.9+e()*.6;a.push({c:[Math.cos(l)*c,6.2+e()*2.4,Math.sin(l)*c],r:[1.9+e()*.4,1.7+e()*.3,1.9+e()*.4]})}for(const o of a.slice(1))if(kr(i,e,s,ot(o.c,.85),.16,.07,5,n),t>=1)for(let l=0;l<2;l++)i.limb(ot(o.c,.85),pt(o.c,ot(jo(e),1.4)),.06,.025,3,n);Or(i,e,a,r,Math.round(46*t),2.4/Math.sqrt(t),this.leaves.map(mn),0,5)}},{name:"ficus",leaf:11,bark:0,leaves:[3428906,2967589,3824174],trunk:8223346,trunkHalf:.2,lobes:9,lobeDepth:.08,palm:0,build(i,e,t){const n=mn(this.trunk),s=[0,2.1,0];i.limb([0,0,0],s,.24,.2,7,n),i.limb(s,[0,4.4,0],.2,.06,6,n,2.1);const r={c:[0,4.9,0],r:[3.5,2.6,3.5]},a=[{c:[0,5,0],r:[3.1,2.3,3.1]}];for(let o=0;o<4;o++){const l=o*1.57+e()*.5;a.push({c:[Math.cos(l)*1.8,4.4+e()*1.2,Math.sin(l)*1.8],r:[1.7,1.4,1.7]})}for(const o of a.slice(1))kr(i,e,s,ot(o.c,.7),.13,.06,5,n);Or(i,e,a,r,Math.round(52*t),2/Math.sqrt(t),this.leaves.map(mn),0,6)}},{name:"cypress",leaf:12,bark:0,leaves:[2835760,3362611,2572331],trunk:6115656,trunkHalf:.38,lobes:5,lobeDepth:.22,palm:0,build(i,e,t){const n=mn(this.trunk),s=[.5,2.4,.2];i.limb([0,0,0],s,.48,.38,8,n),i.limb(s,[.7,5.2,.2],.38,.12,7,n,2.4);const r=[];for(let o=0;o<4;o++){const l=o*1.9+e()*.7,c=o===0?.5:2.4+e()*1.2;r.push({c:[Math.cos(l)*c+.6,6+o*1.3+e()*.8,Math.sin(l)*c],r:[3.2-o*.25,1.15,3-o*.2]})}const a={c:[.6,8.2,0],r:[5,3.2,4.6]};for(const o of r)kr(i,e,s,In(o.c,[0,.7,0]),.24,.1,5,n);Or(i,e,r,a,Math.round(48*t),2.7/Math.sqrt(t),this.leaves.map(mn),1.1,5)}},{name:"eucalyptus",leaf:13,bark:4,leaves:[7308391,8097644,6584412],trunk:13616819,trunkHalf:.3,lobes:4,lobeDepth:.3,palm:0,build(i,e,t){const n=mn(this.trunk),s=[.3,8.5,-.2];i.limb([0,0,0],[.1,4.5,0],.4,.33,7,n),i.limb([.1,4.5,0],s,.33,.26,7,n,4.5),i.limb(s,[.4,13,-.3],.26,.08,6,n,8.5);const r=[];for(let o=0;o<5;o++){const l=o*1.26+e()*.5,c=o===0?.4:2+e()*1.4;r.push({c:[Math.cos(l)*c,11.5+e()*4.5,Math.sin(l)*c],r:[2.1+e()*.5,1.9+e()*.5,2.1+e()*.5]})}for(const o of r)kr(i,e,s,In(o.c,[0,.8,0]),.17,.06,5,n);Or(i,e,r,{c:[0,13.5,0],r:[4,4,4]},Math.round(42*t),2.1/Math.sqrt(t),this.leaves.map(mn),-.3,3)}},{name:"fan-palm",leaf:14,bark:2,leaves:[6126138,6784063],trunk:8154460,trunkHalf:.2,lobes:11,lobeDepth:.42,palm:1,build(i,e,t){const n=mn(this.trunk),s=[.35,0,.1],r=pt([0,15,0],s);i.limb([0,0,0],pt([0,7,0],ot(s,.25)),.27,.2,6,n),i.limb(pt([0,7,0],ot(s,.25)),r,.2,.17,6,n,7);const a=mn(9270870),o=Math.round(16*t),l=Math.round(10*t),c=2.3/Math.sqrt(t);for(let f=0;f<l;f++){const u=f*2.4+e()*.4,d=[Math.cos(u),0,Math.sin(u)],g=gn(pt(ot(d,.28),[0,-1,0])),m=Ii(g,d),x=pt(pt(r,[0,-.4,0]),ot(d,.2));i.quad(In(x,ot(m,c*.4)),ot(m,c*.8),ot(g,c*1.1),gn(pt(d,[0,-.2,0])),a,.6,e()*.999)}const h=this.leaves.map(mn);for(let f=0;f<o;f++){const u=f*2.39996,d=1.25-f/o*1.45,g=[Math.cos(u),0,Math.sin(u)],m=gn(pt(ot(g,Math.cos(d)),[0,Math.sin(d),0])),x=gn(Ii(m,[0,1,0])),p=Ii(x,m),y=pt(r,ot(m,.25));i.quad(In(y,ot(x,c/2)),ot(x,c),ot(m,c*1.05),gn(pt(ot(m,.6),pt(ot(p,.3),[0,.4,0]))),h[f%h.length],.75+.25*Math.max(0,Math.sin(d)),e()*.999)}}},{name:"canary-palm",leaf:15,bark:3,leaves:[5599290,6257472,5006899],trunk:7298117,trunkHalf:.36,lobes:13,lobeDepth:.5,palm:1,build(i,e,t){const n=mn(this.trunk);i.limb([0,0,0],[.05,4.5,0],.42,.37,9,n),i.limb([.05,4.5,0],[.1,8.4,0],.37,.35,9,n,4.5),i.limb([.1,8.4,0],[.1,9.4,0],.48,.38,9,n,8.4);const s=[.1,9.3,0],r=this.leaves.map(mn),a=Math.round(24*t),o=t>=1?5:3;for(let l=0;l<a;l++){const c=l*2.39996+e()*.2,h=1.15-l/a*1.35+(e()-.5)*.15,f=5.2+e()*.8,u=[Math.cos(c),0,Math.sin(c)],d=gn(Ii(u,[0,1,0])),g=[],m=[],x=[],p=[],y=[];for(let _=0;_<=o;_++){const v=_/o*f,E=v*Math.cos(h),M=v*Math.sin(h)-.055*v*v;g.push(pt(s,pt(ot(u,E+.2),[0,M,0]))),m.push(.75*Math.max(.08,Math.sin(Math.PI*Math.min(1,_/o*1.1))**.6)*(1-.2*(_/o))),x.push(d),p.push(gn(pt([0,1,0],ot(u,.9+_/o)))),y.push(.55+.45*Math.min(1,_/o*1.6)*(.75+.25*Math.max(0,Math.sin(h))))}i.strip(g,m,x,p,r[l%r.length],y,e()*.999)}}}];function Av(i,e,t){const n=new Ev;i.build(n,Sv(t),e);const s=n.geometry();let r=0,a=0,o=1/0,l=0;for(let c=0;c<n.pos.length/3;c++){const h=n.pos[c*3],f=n.pos[c*3+1],u=n.pos[c*3+2];a=Math.max(a,f),n.leaf[c*4+3]>=0&&(r=Math.max(r,Math.hypot(h,u)),o=Math.min(o,f),l=Math.max(l,f))}return{geo:s,width:r*2,height:a,crownLo:o,crownHi:l}}const Wa=`
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
`,qa=`
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
`,Xc=`
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
}`,Tv={low:[38,58],mid:[70,100],high:[100,140]},Rv=820,$c=950,Yc=16,Cv={low:.6,mid:1,high:1.35},Kc=200;function li(i,e,t){let n=Math.imul(Math.round(i*10)^668265261,73856093)^Math.imul(Math.round(e*10)+t*2654435761,19349663);return n=Math.imul(n^n>>>15,2246822507),n=Math.imul(n^n>>>13,3266489909),((n^n>>>16)>>>0)/4294967296}function Lv(i,e){const t=i.r?Math.min(2.3,Math.max(.6,i.r/2.6)):1,n=(.8+.4*li(i.x,i.z,1))*t,s=n*(.88+.24*li(i.x,i.z,2));return e.set(s,n,s)}const Pv={wood:[10,0,45,45,0,0],park:[30,10,25,15,8,12],plaza:[45,25,0,0,15,15],avenue:[40,15,0,0,15,30],street:[40,40,0,0,12,8],yard:[30,25,15,10,15,5]},jc={wood:"wood",park:"park",grass:"park",garden:"park",playground:"park",pool:"park",plaza:"plaza",pier:"plaza",parking:"street"};function Dv(i,e){const t=i.props,n=new Uint8Array(e.length),s=i.areas.filter(l=>jc[l.k]).map(l=>{let c=1/0,h=1/0,f=-1/0,u=-1/0;for(const[d,g]of l.r)c=Math.min(c,d),h=Math.min(h,g),f=Math.max(f,d),u=Math.max(u,g);return{a:l,x0:c,z0:h,x1:f,z1:u}}),r=(l,c,h)=>{let f=!1;for(let u=0,d=l.length-1;u<l.length;d=u++){const[g,m]=l[u],[x,p]=l[d];m>h!=p>h&&c<(x-g)*(h-m)/(p-m)+g&&(f=!f)}return f},a=50,o=new Map;for(const l of i.roads){if(l.b||l.c==="pedestrian")continue;const c=l.c==="trunk"||l.c==="primary";for(let h=0;h+1<l.p.length;h++){const[f,u]=l.p[h],[d,g]=l.p[h+1],m=l.w/2+10;for(let x=Math.floor((Math.min(f,d)-m)/a);x<=Math.floor((Math.max(f,d)+m)/a);x++)for(let p=Math.floor((Math.min(u,g)-m)/a);p<=Math.floor((Math.max(u,g)+m)/a);p++){const y=`${x}_${p}`;let _=o.get(y);_||o.set(y,_=[]),_.push([f,u,d,g,l.w,c])}}}return e.forEach((l,c)=>{const h=t[l];let f="";for(const x of s)if(h.x>=x.x0&&h.x<=x.x1&&h.z>=x.z0&&h.z<=x.z1&&r(x.a.r,h.x,h.z)){f=jc[x.a.k];break}if(!f){let x=1/0,p=!1;for(const[y,_,v,E,M,T]of o.get(`${Math.floor(h.x/a)}_${Math.floor(h.z/a)}`)??[]){const D=v-y,w=E-_,b=D*D+w*w||1,A=Math.max(0,Math.min(1,((h.x-y)*D+(h.z-_)*w)/b)),U=Math.hypot(h.x-y-D*A,h.z-_-w*A)-M/2;U<x&&(x=U,p=T)}f=x<8?p?"avenue":"street":"yard"}const u=Pv[f],d=u.reduce((x,p)=>x+p,0);let g=li(h.x,h.z,3)*d,m=0;for(;m<u.length-1&&g>=u[m];)g-=u[m],m++;n[c]=m}),n}function Iv(i,e,t){const n=typeof location>"u"?null:new URLSearchParams(location.search).get("treelod"),s=vl(),[r,a]=n==="near"?[220,240]:n==="far"?[-2,-1]:Tv[s],o=new Ft;o.name="trees";const l=i.props,c=Dv(i,e),h=new Map;e.forEach((N,I)=>h.set(N,I));const f={};for(const N of c)f[ss[N].name]=(f[ss[N].name]??0)+1;const u=new Float32Array(e.length*4);e.forEach((N,I)=>{const R=l[N];u[I*4]=li(R.x,R.z,4),u[I*4+1]=(li(R.x,R.z,5)-.5)*1.4,u[I*4+2]=.84+.32*li(R.x,R.z,6),u[I*4+3]=c[I]===0&&li(R.x,R.z,7)<.25?.2+.45*li(R.x,R.z,8):0});const d={uTime:{value:0},uEye:{value:new B(1e9,0,0)},uWind:{value:new B(.92,0,.38).normalize()},uFade:{value:new ht(r,a,Rv,$c)}},g=ss.map((N,I)=>Av(N,Cv[s],101+I*7919)),m=ss.map((N,I)=>{const R=Math.max(1,Math.min(2500,c.filter(Q=>Q===I).length)),W=g[I].geo.clone(),P=new kn(new Float32Array(R*4),4).setUsage(gs);W.setAttribute("aTree",P);const H=`#define TREE_LEAF ${N.leaf}
#define TREE_BARK ${N.bark}
`,J=Zn(new xn({vertexColors:!0,side:en,alphaToCoverage:!0}),i,{key:`tree-near-${N.name}`,uniforms:d,vertexPars:`${H}attribute vec4 aLeaf;
${Wa}
varying vec4 vLeaf; varying vec3 vTint; varying float vFade; varying float vFoot;`,vertex:`
        vFade = smoothstep(uFade.x, uFade.y, treeDist());
        vFoot = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).y;
        vLeaf = aLeaf; vTint = aTree.yzw;
        transformed = treeSway(transformed, aLeaf.w);
        vWorld = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`,fragmentPars:`${H}${qa}
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
#endif`,light:Xc}),he=new Oh({depthPacking:bh,side:en});he.onBeforeCompile=Q=>{Object.assign(Q.uniforms,d),Q.vertexShader=Q.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aLeaf;
${Wa}
varying vec4 vLeaf; varying float vFade;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFade = smoothstep(uFade.x, uFade.y, treeDist()); vLeaf = aLeaf; transformed = treeSway(transformed, aLeaf.w);`),Q.fragmentShader=Q.fragmentShader.replace("#include <common>",`#include <common>
${H}${ki}
${qa}
varying vec4 vLeaf; varying float vFade;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
          if (treeIgn(gl_FragCoord.xy) < vFade || (vLeaf.w >= -0.5 && treeLeaf(vLeaf.xy, vLeaf.w).x < 0.0)) discard;`)},he.customProgramCacheKey=()=>`tree-depth-${N.name}`;const se=new Ni(W,J,R);return se.instanceMatrix.setUsage(gs),se.count=0,se.customDepthMaterial=he,se.castShadow=!0,se.receiveShadow=!0,se.matrixAutoUpdate=!1,se.name=`tree near ${N.name}`,se.boundingSphere=new pi(new B,1),o.add(se),{mesh:se,tree:P,slots:[]}}),x=new Map,p=ss.map((N,I)=>{const R=g[I];return{a:new ht(R.width,R.height,R.crownLo,R.crownHi),b:new ht(N.trunkHalf,N.lobes,N.lobeDepth,N.palm),leaf:Uv(R.geo,!0),bark:new qe(N.trunk)}}),y={...d,uFarA:{value:p.map(N=>N.a)},uFarB:{value:p.map(N=>N.b)},uFarLeaf:{value:p.map(N=>N.leaf)},uFarBark:{value:p.map(N=>N.bark)}},_=Zn(new xn({side:en,alphaToCoverage:!0}),i,{key:"tree-far",uniforms:y,vertexPars:`${Wa}
      #define NS ${ss.length}
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
${qa}
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
    }`,light:Xc}),v=new ct([-.5,0,0,.5,0,0,.5,1,0,-.5,1,0],3),E=new ct([0,0,1,0,0,1,0,0,1,0,0,1],3),M=new xs([0,1,2,0,2,3],1),T=Math.max(...g.map(N=>Math.max(N.height,N.width)))*1.5,D=new Map;e.forEach((N,I)=>{const R=l[N],W=`${Math.floor(R.x/Kc)}_${Math.floor(R.z/Kc)}`;let P=D.get(W);P||D.set(W,P=[]),P.push(I)});const w=new Map,b=[];for(const N of D.values()){const I=new bt;I.setAttribute("position",v),I.setAttribute("normal",E),I.setIndex(M);const R=new Float32Array(N.length*4),W=new Float32Array(N.length),P=new Ni(I,_,N.length);let H=1/0,J=1/0,he=-1/0,se=-1/0;N.forEach((_e,Ee)=>{const Ue=e[_e],Ge=l[Ue];R.set(u.subarray(_e*4,_e*4+4),Ee*4),W[Ee]=c[_e],P.setMatrixAt(Ee,t(Ue)),w.set(Ue,{mesh:P,slot:Ee}),H=Math.min(H,Ge.x),J=Math.min(J,Ge.z),he=Math.max(he,Ge.x),se=Math.max(se,Ge.z)}),I.setAttribute("aTree",new kn(R,4)),I.setAttribute("aSpec",new kn(W,1)),P.instanceMatrix.needsUpdate=!0;const Q=(H+he)/2,q=(J+se)/2,K=Math.hypot(he-H,se-J)/2+T+10;let ue=0;for(const _e of N)ue+=t(e[_e]).elements[13];P.boundingSphere=new pi(new B(Q,ue/N.length,q),K),P.castShadow=!1,P.receiveShadow=!0,P.matrixAutoUpdate=!1,P.name="tree far",o.add(P),b.push({mesh:P,x:Q,z:q,r:K,members:N})}const A=new $e(1e9,1e9),U=a+Yc,L=N=>{A.set(N.x,N.z),x.clear();for(const I of m)I.slots.length=0;for(const I of b)if(!(Math.hypot(I.x-N.x,I.z-N.z)-I.r+T+10>U))for(const R of I.members){const W=e[R],P=l[W];if(Math.hypot(P.x-N.x,P.z-N.z)>U+10)continue;const H=c[R],J=m[H];if(J.slots.length>=J.mesh.instanceMatrix.count)continue;const he=J.slots.length;J.slots.push(R),J.mesh.setMatrixAt(he,t(W)),J.tree.array.set(u.subarray(R*4,R*4+4),he*4),x.set(W,{s:H,slot:he})}for(const I of m)I.mesh.count=I.slots.length,I.mesh.instanceMatrix.needsUpdate=!0,I.tree.needsUpdate=!0,I.mesh.boundingSphere.center.set(N.x,N.y,N.z),I.mesh.boundingSphere.radius=U+T+20};return{group:o,species:f,update:(N,I)=>{d.uEye.value.copy(N),d.uTime.value=I,Math.hypot(N.x-A.x,N.z-A.y)>Yc&&L(N);for(const R of b){const W=Math.hypot(R.x-N.x,R.z-N.z);R.mesh.visible=W-R.r<$c&&W+R.r>r}},redraw:N=>{const I=t(N),R=w.get(N);R&&(R.mesh.setMatrixAt(R.slot,I),R.mesh.instanceMatrix.needsUpdate=!0);const W=x.get(N);if(W){const P=m[W.s];P.mesh.setMatrixAt(W.slot,I),P.mesh.instanceMatrix.needsUpdate=!0}},has:N=>h.has(N)}}function Uv(i,e){const t=i.getAttribute("color"),n=i.getAttribute("aLeaf");let s=0,r=0,a=0,o=0;for(let l=0;l<t.count;l++){if(n.getW(l)>=0!==e)continue;const c=.4+n.getZ(l)*.6;s+=t.getX(l)*c,r+=t.getY(l)*c,a+=t.getZ(l)*c,o++}return o?new qe(s/o,r/o,a/o):new qe(5204794)}function af(i,e){const t=new qe(e),n=i.getAttribute("position").count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new ut(s,3)),i.index?i.toNonIndexed():i}const We=(i,e,t,n,s,r,a)=>af(new gi(i,e,t).translate(n,s,r),a),hn=(i,e,t,n=0,s=0)=>af(new Qr(i,i,e,6).translate(n,e/2,s),t),Xt=i=>bv(i.map(e=>(e.deleteAttribute("uv"),e))),rr={lamp:()=>Xt([hn(.09,8,4869456),We(1.6,.12,.2,.7,7.9,0,4869456),We(.5,.14,.26,1.4,7.8,0,15262408)]),signal:()=>Xt([hn(.1,5.2,3948354),We(.34,1,.3,0,4.6,.2,1908513),We(.2,.2,.05,0,4.9,.36,13123630)]),stop:()=>Xt([hn(.04,2.4,9080208),We(.7,.7,.05,0,2.5,0,12068381)]),hydrant:()=>Xt([hn(.14,.7,15197404),We(.44,.14,.14,0,.45,0,15197404)]),bench:()=>Xt([We(1.7,.08,.5,0,.45,0,7032631),We(1.7,.5,.07,0,.72,-.24,7032631),We(.08,.45,.5,-.75,.22,0,3356218),We(.08,.45,.5,.75,.22,0,3356218)]),bin:()=>hn(.3,.95,3494463),bollard:()=>hn(.12,.9,5593180),post_box:()=>We(.55,1.15,.55,0,.58,0,3100550),bus_stop:()=>Xt([We(3.2,.1,1.5,0,2.5,0,5659488),We(3.2,2.2,.06,0,1.3,-.7,9675949),hn(.06,2.5,5659488,-1.5,.7),hn(.06,2.5,5659488,1.5,.7)]),bike_rack:()=>Xt([hn(.03,.85,9212052,-.35,0),hn(.03,.85,9212052,.35,0),We(.76,.06,.06,0,.85,0,9212052)]),table:()=>Xt([We(1.4,.06,.8,0,.73,0,10119999),We(.07,.7,.07,-.6,.35,-.32,5913892),We(.07,.7,.07,.6,.35,-.32,5913892),We(.07,.7,.07,-.6,.35,.32,5913892),We(.07,.7,.07,.6,.35,.32,5913892)]),chair:()=>Xt([We(.42,.05,.42,0,.44,0,11880506),We(.42,.42,.05,0,.64,-.19,11880506),We(.36,.42,.36,0,.21,0,3816512)]),sofa:()=>Xt([We(2,.42,.9,0,.21,0,6258060),We(2,.4,.22,0,.6,-.34,5665151),We(.2,.22,.9,-.9,.53,0,5665151),We(.2,.22,.9,.9,.53,0,5665151)]),shelf:()=>Xt([We(1.2,1.8,.06,0,.9,-.17,8088149),We(1.2,.05,.4,0,.3,0,13616040),We(1.2,.05,.4,0,.9,0,13616040),We(1.2,.05,.4,0,1.5,0,13616040),We(.9,.22,.3,0,.44,0,13134396),We(.8,.22,.3,.1,1.04,0,6986319)]),floor_lamp:()=>Xt([hn(.025,1.4,2894894),We(.26,.04,.26,0,.02,0,2894894),We(.26,.24,.26,0,1.48,0,15852472)]),crate:()=>We(.6,.5,.6,0,.25,0,12159566),counter:()=>Xt([We(1.8,.98,.58,0,.49,0,4864556),We(1.8,.06,.64,0,1.01,0,14275264),We(1.72,.7,.03,0,.5,.3,7033920),We(.3,.22,.26,.55,1.15,-.05,2763824)]),stool:()=>Xt([hn(.03,.7,2894894),We(.3,.03,.3,0,.015,0,2894894),We(.34,.06,.34,0,.71,0,9063218)]),rack:()=>Xt([hn(.02,1.5,10132898,-.66,0),hn(.02,1.5,10132898,.66,0),We(1.36,.03,.03,0,1.48,0,10132898),We(1.36,.03,.44,0,.02,0,10132898),We(.3,.9,.36,-.48,.98,0,3099243),We(.3,.8,.4,-.16,1.03,0,11880506),We(.3,.95,.34,.16,.955,0,14274488),We(.3,.75,.38,.48,1.055,0,4156242)]),desk:()=>Xt([We(1.5,.05,.76,0,.73,0,13220250),We(.05,.71,.7,-.7,.355,0,6119267),We(.05,.71,.7,.7,.355,0,6119267),We(1.36,.4,.03,0,.5,.33,6119267),We(.42,.28,.04,.3,.92,-.1,1842722)])};rr.bed=()=>Xt([We(1.6,.3,2,0,.15,0,5916214),We(1.56,.2,1.96,0,.4,0,15328472),We(1.56,.07,1.3,0,.53,.3,8229800),We(1,.1,.4,0,.55,-.72,16052712),We(1.6,.56,.06,0,.28,-.98,5916214)]);const Zc=new Map;function Fv(i){if(!rr[i])return null;let e=Zc.get(i);return e||(e=rr[i](),Zc.set(i,e)),e}const Nv=new Set(["bed","table","chair","sofa","shelf","floor_lamp","crate","counter","stool","rack","desk"]),zv=320,Ov=170,Jc=240;function kv(i,e,t){const n=new Ft,s=new xn({vertexColors:!0}),r=e.props,a={},o=[],l=new Map,c=new Map,h=(I,R)=>`${Math.floor(I.x/R)}_${Math.floor(I.z/R)}`;r.forEach((I,R)=>{if(I.k==="tree"){a.tree=(a.tree??0)+1,o.push(R);return}if(!rr[I.k])return;a[I.k]=(a[I.k]??0)+1;const[W,P]=Nv.has(I.k)?[c,120]:[l,400],H=h(I,P);let J=W.get(H);J||(J=[],W.set(H,J)),J.push(R)});const f=new vt,u=new Bt,d=new B,g=new B,m=new B(0,1,0),x=new B,p=new B,y=new Map,_=I=>t.get(I.k)?.half[1]??0,v=I=>{const R=r[I],W=y.get(I);return R.k==="tree"?Lv(R,d):d.set(1,1,1),W?(u.set(W[3],W[4],W[5],W[6]),g.set(0,-_(R),0).applyQuaternion(u).add(x.set(W[0],W[1],W[2])),f.compose(g,u,d)):f.compose(g.set(R.x,i.at(R.x,R.z),R.z),u.setFromAxisAngle(m,R.a),d)},E=Iv(e,o,v);n.add(E.group);const M=new Map,T=I=>{let R=M.get(I);return R||(R=rr[I](),M.set(I,R)),R},D=new Map,w=(I,R,W,P)=>{const H=T(r[I].k),J=H.getAttribute("position"),he=H.getAttribute("normal"),se=v(I),Q=u.clone();for(let q=0;q<J.count;q++){x.fromBufferAttribute(J,q).applyMatrix4(se),p.fromBufferAttribute(he,q).applyQuaternion(Q);const K=(P+q)*3;R[K]=x.x,R[K+1]=x.y,R[K+2]=x.z,W[K]=p.x,W[K+1]=p.y,W[K+2]=p.z}},b=(I,R)=>{let W=0;for(const K of I)W+=T(r[K].k).getAttribute("position").count;const P=new Float32Array(W*3),H=new Float32Array(W*3),J=new Float32Array(W*3),he=new bt,se=new xt(he,s);let Q=0;for(const K of I){const ue=T(r[K].k).getAttribute("color");w(K,P,H,Q),J.set(ue.array,Q*3),D.set(K,{mesh:se,start:Q}),Q+=ue.count}he.setAttribute("position",new ut(P,3).setUsage(gs)),he.setAttribute("normal",new ut(H,3).setUsage(gs)),he.setAttribute("color",new ut(J,3)),he.computeBoundingSphere(),he.boundingSphere.radius+=40,se.matrixAutoUpdate=!1,n.add(se);const q=he.boundingSphere;return{mesh:se,x:q.center.x,z:q.center.z,r:q.radius,far:R}},A=[...l.values()].map(I=>b(I,zv)),U=[...c.values()].map(I=>{let R=0,W=0;for(const P of I)R+=r[P].x,W+=r[P].z;return{list:I,x:R/I.length,z:W/I.length,baked:null}}),L=I=>{E.update(I,performance.now()/1e3);for(const R of A)R.mesh.visible=Math.max(0,Math.hypot(R.x-I.x,R.z-I.z)-R.r+40)<R.far;for(const R of U){const W=Math.hypot(R.x-I.x,R.z-I.z);if(!R.baked&&W<Ov)R.baked=b(R.list,Jc);else if(R.baked&&W>Jc){n.remove(R.baked.mesh),R.baked.mesh.geometry.dispose();for(const P of R.list)D.delete(P);R.baked=null}}},G=I=>{if(E.has(I)){E.redraw(I);return}const R=D.get(I);if(!R)return;const W=R.mesh.geometry.getAttribute("position"),P=R.mesh.geometry.getAttribute("normal"),H=T(r[I].k).getAttribute("position").count;w(I,W.array,P.array,R.start),W.addUpdateRange(R.start*3,H*3),P.addUpdateRange(R.start*3,H*3),W.needsUpdate=!0,P.needsUpdate=!0};return{group:n,counts:a,update:L,apply:I=>{for(let R=0;R+8<=I.length;R+=8){const W=I[R];if(!r[W])continue;let P=y.get(W);P||(P=new Float32Array(7),y.set(W,P)),P.set(I.subarray(R+1,R+8)),G(W)}},reset:()=>{const I=[...y.keys()];y.clear();for(const R of I)G(R)}}}const Xa=420,Qc=240,$a=220,Bv={timber:null,stud:14209732,brick:9194042,block:11117980,glazing:10470607,stone:12170150,drywall:14868180,door:14276300},Hv={timber:13287327,stud:14473420,brick:11565666,block:12170668,glazing:13951718,stone:12894132,drywall:15131354,door:14210248};class Gv{constructor(e,t,n,s,r=()=>{}){this.city=e,this.fronts=t,this.insides=n,this.kinds=s,this.ringOf=r;const a=new gi(2,2,2),o=a.getAttribute("position").count,l=new Float32Array(o*3),c=a.getAttribute("normal");for(let u=0;u<o;u++){const d=c.getY(u)>.5?.62:c.getY(u)<-.5?.45:1;l[u*3]=d,l[u*3+1]=d,l[u*3+2]=d}a.setAttribute("color",new ut(l,3));const h=(u,d)=>{const g=new Ni(a,new xn({vertexColors:!0}),u);for(let m=0;m<u;m++)g.setMatrixAt(m,this.m.makeScale(0,0,0)),g.setColorAt(m,this.c.setHex(16777215));return g.count=u,g.frustumCulled=!1,g.castShadow=!0,g.receiveShadow=!0,g.name=d,this.group.add(g),g};this.pieces=h(Xa,"wall pieces"),this.parts=h(Qc,"fallen buildings"),this.parts.visible=!1;const f=new Hh;f.setAttribute("position",new ut(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),f.setIndex([0,1,2,0,2,3]),this.dustAt=new kn(new Float32Array($a*4),4),this.dustLook=new kn(new Float32Array($a*4),4),f.setAttribute("at",this.dustAt),f.setAttribute("look",this.dustLook),f.instanceCount=0,this.dust=new xt(f,new vn({transparent:!0,depthWrite:!1,vertexShader:`
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
        }`})),this.dust.frustumCulled=!1,this.dust.name="dust",this.dust.renderOrder=5,this.group.add(this.dust)}group=new Ft;pieces;parts;pieceAt=new Map;partAt=new Map;partMesh=new Map;partMaterial=new xn({vertexColors:!0});pieceSlot=new Array(Xa).fill(null);partSlot=new Array(Qc).fill(null);clock=0;holes=new Map;dirty=new Set;puffs=[];dust;dustAt;dustLook;m=new vt;c=new qe;seen={panels:0,fell:0};gaveWay(e,t){this.seen.panels++;const n=this.holes.get(e.building)??[];n.push({x0:e.x0,z0:e.z0,x1:e.x1,z1:e.z1,y:e.holeTop}),this.holes.set(e.building,n),this.dirty.add(e.building);const s=this.kinds[e.kind]??"timber",r=Hv[s]??13617336,a=Pi().at((e.x0+e.x1)/2,(e.z0+e.z1)/2),o=s==="glazing"?3:7;for(let l=0;l<o;l++){const c=Math.random();this.puff(e.x0+(e.x1-e.x0)*c,a+.3+Math.random()*2.4,e.z0+(e.z1-e.z0)*c,(Math.random()-.5)*(1+t*.12),.4+Math.random(),(Math.random()-.5)*(1+t*.12),.7+Math.random()*.9,1.4+Math.random()*1.4,r,.5)}}fell(e,t){this.seen.fell++,this.dirty.delete(e),this.holes.delete(e),this.city.raze(e),this.fronts.raze(e),this.insides.raze(e);const n=this.city.colors(e).wall,s=this.c.setRGB(n[0],n[1],n[2]).lerp(new qe(13617336),.6).getHex();for(let r=0;r<60;r++){const a=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*t.r,l=1.5+Math.random()*3.5;this.puff(t.x+Math.cos(a)*o,t.y+Math.random()*Math.min(5,t.high),t.z+Math.sin(a)*o,Math.cos(a)*l,.6+Math.random()*1.6,Math.sin(a)*l,2+Math.random()*2.5,2.6+Math.random()*2.4,s,.55)}}puff(e,t,n,s,r,a,o,l,c,h){this.puffs.length>=$a&&this.puffs.shift(),this.puffs.push({p:new B(e,t,n),v:new B(s,r,a),age:0,life:l,size:o,grow:.9+Math.random()*.8,tint:new qe(c),alpha:h})}partGeometry(e,t,n,s,r){const a=[],o=[],l=[],c=[],h=(A,U,L)=>{const G=a.length/3;for(const z of A)a.push(z[0],z[1],z[2]),o.push(U[0],U[1],U[2]),l.push(L[0],L[1],L[2]);c.push(G,G+1,G+2,G,G+2,G+3)},[f,u,d]=[e.x,e.y,e.z],g=(A,U)=>[A[0]*U,A[1]*U,A[2]*U],m=A=>{const U=new qe(A);return[U.r,U.g,U.b]},x=m(2042419),p=g(t,1.25).map(A=>Math.min(1,A)),y=m(1841431),_=m(11051669),v=m(13617595),E=[[d,(A,U,L)=>[f+L,U,-A],[1,0,0]],[d,(A,U,L)=>[-f-L,U,A],[-1,0,0]],[f,(A,U,L)=>[A,U,d+L],[0,0,1]],[f,(A,U,L)=>[-A,U,-d-L],[0,0,-1]]],M=Math.max(1,Math.round(2*u/3.1)),T=2*u/M;E.forEach(([A,U,L],G)=>{const z=(N,I,R,W,P,H)=>h([U(N,R,P),U(I,R,P),U(I,W,P),U(N,W,P)],L,H);if(s[G]){z(-A,A,-u,u,0,t),z(-A,A,u-.3,u,.03,p);const N=Math.max(1,Math.round(2*A/2.6)),I=2*A/N;if(T>2.2)for(let R=0;R<M;R++)for(let W=0;W<N;W++){const P=-A+(W+.5)*I,H=-u+R*T+T*.3,J=Math.min(1.2,I*.5),he=Math.min(1.5,T*.5);z(P-J/2-.07,P+J/2+.07,H-.07,H+he+.07,.015,p),z(P-J/2,P+J/2,H,H+he,.03,x)}}else{z(-A,A,-u,u,0,y);for(let I=0;I<=M;I++){const R=Math.min(u-.24,Math.max(-u,-u+I*T-.12));z(-A,A,R,R+.24,.02,_)}const N=Math.max(1,Math.round(2*A/4.2));for(let I=1;I<N;I++){const R=-A+2*A*I/N+((r*13+G*7+I*3)%5-2)*.15;z(R-.07,R+.07,-u,u,.02,v)}}}),h([[-f,u,d],[f,u,d],[f,u,-d],[-f,u,-d]],[0,1,0],n);const D=g(n,.7),w=Math.min(.3,f*.3,d*.3);for(const[A,U,L,G]of[[-f,f,d-w,d],[-f,f,-d,-d+w],[-f,-f+w,-d,d],[f-w,f,-d,d]])h([[A,u+.02,G],[U,u+.02,G],[U,u+.02,L],[A,u+.02,L]],[0,1,0],D);h([[-f,-u,-d],[f,-u,-d],[f,-u,d],[-f,-u,d]],[0,-1,0],y);const b=new bt;return b.setAttribute("position",new ut(new Float32Array(a),3)),b.setAttribute("normal",new ut(new Float32Array(o),3)),b.setAttribute("color",new ut(new Float32Array(l),3)),b.setIndex(c),b}partOf(e,t,n,s,r){let a=this.partMesh.get(e);if(a)return a;const o=this.ringOf(t),l=this.city.colors(t),c=(u,d)=>{let g=!1;if(o)for(let m=0,x=o.length-1;m<o.length;x=m++){const[p,y]=o[m],[_,v]=o[x];y>d!=v>d&&u<(_-p)*(d-y)/(v-y)+p&&(g=!g)}return g},h=new B,f=[[r.x+.7,0],[-r.x-.7,0],[0,r.z+.7],[0,-r.z-.7]].map(([u,d])=>(h.set(u,0,d).applyQuaternion(s).add(n),!o||!c(h.x,h.z)));return a=new xt(this.partGeometry(r,l.wall,l.roof,f,e),this.partMaterial),a.castShadow=!0,a.receiveShadow=!0,a.name="fallen part",this.group.add(a),this.partMesh.set(e,a),a}apply(e,t){for(let n=0;n+nr<=e.length;n+=nr){const s=e[n+Mt.ID],r=e[n+Mt.WHAT]===1,a=e[n+Mt.STATE]===1;if(r){const d=new B(e[n+Mt.POS],e[n+Mt.POS+1],e[n+Mt.POS+2]),g=new Bt(e[n+Mt.ROT],e[n+Mt.ROT+1],e[n+Mt.ROT+2],e[n+Mt.ROT+3]),m=this.partOf(s,e[n+Mt.WHICH],d,g,new B(e[n+Mt.HALF],e[n+Mt.HALF+1],e[n+Mt.HALF+2]));m.position.copy(d),m.quaternion.copy(g);continue}const o=r?this.parts:this.pieces,l=r?this.partAt:this.pieceAt,c=r?this.partSlot:this.pieceSlot;let h=l.get(s);if(h===void 0){if(h=c.findIndex(g=>!g),h<0){let g=1/0;c.forEach((m,x)=>{m&&!m.v&&m.born<g&&(g=m.born,h=x)}),h<0&&(h=0),l.delete(c[h].id)}const d=e[n+Mt.WHICH];if(r){const g=this.city.colors(d).wall;this.c.setRGB(g[0],g[1],g[2])}else{const g=t(d),m=this.kinds[g?.kind??0]??"timber",x=Bv[m];if(x==null){const p=this.city.colors(g?.building??0).wall;this.c.setRGB(p[0],p[1],p[2])}else this.c.setHex(x)}o.setColorAt(h,this.c),o.instanceColor.needsUpdate=!0,c[h]={id:s,at:new B,q:new Bt,half:new B,v:null,born:this.clock},l.set(s,h)}const f=c[h];f.at.set(e[n+Mt.POS],e[n+Mt.POS+1],e[n+Mt.POS+2]),f.q.set(e[n+Mt.ROT],e[n+Mt.ROT+1],e[n+Mt.ROT+2],e[n+Mt.ROT+3]),f.half.set(e[n+Mt.HALF],e[n+Mt.HALF+1],e[n+Mt.HALF+2]);const u=new B(e[n+Mt.VEL],e[n+Mt.VEL+1],e[n+Mt.VEL+2]);f.v=a&&!r&&u.lengthSq()>.6?u:null,o.setMatrixAt(h,this.m.compose(f.at,f.q,f.half)),o.instanceMatrix.needsUpdate=!0}}update(e){this.clock+=e;for(const r of this.dirty){const a=this.holes.get(r)??[];this.city.breach(r,a),this.insides.breach(r,a)}this.dirty.clear();let t=!1;for(let r=0;r<Xa;r++){const a=this.pieceSlot[r];if(!a?.v)continue;a.v.y-=9.81*e,a.at.addScaledVector(a.v,e);const o=Pi().at(a.at.x,a.at.z)+Math.min(a.half.x,a.half.y,a.half.z);a.at.y<=o&&(a.at.y=o,a.q.setFromAxisAngle(new B(1,0,0),Math.PI/2),a.v=null),this.pieces.setMatrixAt(r,this.m.compose(a.at,a.q,a.half)),t=!0}if(t&&(this.pieces.instanceMatrix.needsUpdate=!0),!this.puffs.length&&!this.dust.geometry.instanceCount)return;this.puffs=this.puffs.filter(r=>(r.age+=e)<r.life);const n=this.dustAt.array,s=this.dustLook.array;this.puffs.forEach((r,a)=>{r.v.multiplyScalar(Math.max(0,1-1.6*e)),r.v.y+=.25*e,r.p.addScaledVector(r.v,e);const o=r.age/r.life;n.set([r.p.x,r.p.y,r.p.z,r.size*(1+r.grow*o*2)],a*4),s.set([r.tint.r,r.tint.g,r.tint.b,r.alpha*Math.min(1,o*8)*(1-o)*(1-o)],a*4)}),this.dust.geometry.instanceCount=this.puffs.length,this.dustAt.needsUpdate=!0,this.dustLook.needsUpdate=!0}reset(){this.holes.clear(),this.dirty.clear(),this.city.reset();for(const[e,t,n]of[[this.pieces,this.pieceSlot,this.pieceAt],[this.parts,this.partSlot,this.partAt]]){for(let s=0;s<t.length;s++)t[s]&&e.setMatrixAt(s,this.m.makeScale(0,0,0)),t[s]=null;n.clear(),e.instanceMatrix.needsUpdate=!0}for(const e of this.partMesh.values())this.group.remove(e),e.geometry.dispose();this.partMesh.clear(),this.puffs.length=0,this.dust.geometry.instanceCount=0,this.seen.panels=0,this.seen.fell=0}counts(){return{pieces:this.pieceAt.size,parts:this.partMesh.size,puffs:this.puffs.length,...this.city.broken()}}}const eh={furniture:{wall:14273976,floor:9071178},cafe:{wall:13219738,floor:6115656},grocer:{wall:14672854,floor:10132628},restaurant:{wall:12159082,floor:4864560},bar:{wall:4865850,floor:3024418},shop:{wall:15131354,floor:11049606},bank:{wall:14078920,floor:8223346},hotel:{wall:13351066,floor:7028536},salon:{wall:15259862,floor:9407882},clinic:{wall:15002606,floor:10465460},gallery:{wall:15790058,floor:8026744},studio:{wall:14341836,floor:9072466},office:{wall:13619924,floor:6251624},room:{wall:14472904,floor:8219477},hall:{wall:14209990,floor:7301728},garage:{wall:12170926,floor:7105642},living:{wall:14866111,floor:9136711},bedroom:{wall:14015458,floor:10126440},kitchen:{wall:15262930,floor:12170146},store:{wall:13223354,floor:7828330},lobby:{wall:14275782,floor:9340792},core:{wall:9408396,floor:5000266},floor:{wall:12565682,floor:8026226},shed:{wall:11116428,floor:6971992},workroom:{wall:14672092,floor:7172984}},Vv=3.5,Wv=110,qv=160,Ya=2,Gs=900;function th(i,e,t){const n=r=>(t[0]-e[0])*(r[1]-e[1])-(t[1]-e[1])*(r[0]-e[0]),s=[];for(let r=0;r<i.length;r++){const a=i[r],o=i[(r+1)%i.length],l=n(a),c=n(o);if(l>=0&&s.push(a),l>=0!=c>=0){const h=l/(l-c);s.push([a[0]+(o[0]-a[0])*h,a[1]+(o[1]-a[1])*h])}}return s}class Xv{constructor(e,t,n,s,r,a,o){this.page=e,this.ground=t,this.ask=n,this.originOf=s,this.kindNames=r,this.kinds=a,this.rooms=o;for(const l of e.fronts??[])this.show(l.b);this.group.name="insides"}group=new Ft;built=new Map;holes=new Map;razed=new Set;shown=new Set;fronted=new Map;mid=new Map;pools=new Map;strays=new Map;origin=new Map;material=new Ss({vertexColors:!0,side:en});m=new vt;q=new Bt;t=new B;s=new B(1,1,1);up=new B(0,1,0);middle(e){let t=this.mid.get(e);if(!t){const n=this.page.buildings[e].r;let s=0,r=0;for(const[a,o]of n)s+=a,r+=o;t=[s/n.length,r/n.length],this.mid.set(e,t)}return t}show(e){if(!this.page.buildings[e]||this.shown.has(e))return;this.shown.add(e);const[t,n]=this.middle(e),s=`${Math.floor(t/96)}_${Math.floor(n/96)}`;let r=this.fronted.get(s);r||this.fronted.set(s,r=[]),r.push(e)}pool(e){let t=this.pools.get(e);if(t)return t;const n=Fv(e);if(!n)return null;const s=new Ni(n,new xn({vertexColors:!0}),Gs);for(let r=0;r<Gs;r++)s.setMatrixAt(r,this.m.makeScale(0,0,0));return s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!0,s.name=`inside ${e}`,this.group.add(s),t={mesh:s,free:Array.from({length:Gs},(r,a)=>Gs-1-a),halfUp:this.kinds.get(e)?.half[1]??0},this.pools.set(e,t),t}place(e,t,n){const s=t.plan.items[n],r=this.kindNames[s.kind]??"",a=this.pool(r);if(!a)return;const o=this.strays.get(`${e}:${n}`);let l=t.slots.get(n);if(!l){const c=a.free.pop();if(c===void 0)return;l={kind:r,slot:c},t.slots.set(n,l)}o?(this.q.set(o[3],o[4],o[5],o[6]),this.t.set(0,-a.halfUp,0).applyQuaternion(this.q),this.t.x+=o[0],this.t.y+=o[1],this.t.z+=o[2]):(this.q.setFromAxisAngle(this.up,s.yaw),this.t.set(s.x,s.y,s.z)),a.mesh.setMatrixAt(l.slot,this.m.compose(this.t,this.q,this.s)),a.mesh.instanceMatrix.needsUpdate=!0}drop(e){const t=this.built.get(e);if(t){this.group.remove(t.mesh),t.mesh.geometry.dispose();for(const{kind:n,slot:s}of t.slots.values()){const r=this.pools.get(n);r.mesh.setMatrixAt(s,this.m.makeScale(0,0,0)),r.mesh.instanceMatrix.needsUpdate=!0,r.free.push(s)}this.built.delete(e)}}build(e){this.drop(e);const t=this.ask(e),n=this.page.buildings[e];if(!t||!n||this.razed.has(e))return!1;const s=this.ground,r=this.holes.get(e)??[],a=(M,T)=>Math.min(s.at(M,T)+Vv,n.y1-.1),o=[],l=[],c=[],h=new qe,f=(M,T,D,w,b)=>(h.setHex(w),o.push(M,T,D),l.push(h.r*b,h.g*b,h.b*b),o.length/3-1),u=n.r.slice(0,-1),d=M=>eh[this.rooms[M]??"room"]??eh.room;for(const M of t.rooms){let T=u;const D=(M.quad[0][0]+M.quad[2][0])/2,w=(M.quad[0][1]+M.quad[2][1])/2,b=M.quad,A=(b[1][0]-b[0][0])*(w-b[0][1])-(b[1][1]-b[0][1])*(D-b[0][0])>=0;for(let z=0;z<4&&T.length>=3;z++)T=A?th(T,b[z],b[(z+1)%4]):th(T,b[(z+1)%4],b[z]);if(T.length<3)continue;const U=T.map(([z,N])=>new $e(z,N)),L=d(M.kind).floor,G=(z,N,I,R)=>{const W=Math.hypot(N[0]-z[0],N[1]-z[1]),P=Math.hypot(I[0]-N[0],I[1]-N[1]),H=Math.hypot(z[0]-I[0],z[1]-I[1]),J=Math.max(W,P,H);if(J>4&&R<7){if(J===W){const se=[(z[0]+N[0])/2,(z[1]+N[1])/2];G(z,se,I,R+1),G(se,N,I,R+1)}else if(J===P){const se=[(N[0]+I[0])/2,(N[1]+I[1])/2];G(z,N,se,R+1),G(z,se,I,R+1)}else{const se=[(I[0]+z[0])/2,(I[1]+z[1])/2];G(z,N,se,R+1),G(se,N,I,R+1)}return}const he=[z,N,I].map(([se,Q])=>f(se,s.at(se,Q)+.09,Q,L,.92));c.push(he[0],he[1],he[2])};for(const z of tr.triangulateShape(U,[]))G(T[z[0]],T[z[1]],T[z[2]],0)}const g=(M,T,D,w,b,A)=>{const U=Math.hypot(D-M,w-T);if(U<.05)return;const L=s.at(M,T),G=s.at(D,w);for(const[z,N,I]of nf(U,-1e6,1e6,sf(M,T,D,w,r))){const R=(P,H)=>{const J=P/U,he=L+(G-L)*J,se=M+(D-M)*J,Q=T+(w-T)*J;return f(se,H?he+.05:a(se,Q),Q,b,A*(H?1:.72))};if(I>-1e5)continue;const W=[R(z,!0),R(N,!0),R(N,!1),R(z,!1)];c.push(W[0],W[1],W[2],W[0],W[2],W[3])}},m=d(t.rooms[0]?.kind??0).wall;for(const M of t.parts)g(M.ax,M.az,M.bx,M.bz,14605008,.95);let x=0,p=0;for(const[M,T]of u)x+=M,p+=T;x/=u.length,p/=u.length;const y=(this.page.fronts??[]).filter(M=>M.b===e);for(let M=0;M<u.length;M++){const[T,D]=u[M],[w,b]=u[(M+1)%u.length],A=Math.hypot(w-T,b-D);if(A<.05)continue;let U=-(b-D)/A,L=(w-T)/A;U*(x-T)+L*(p-D)<0&&(U=-U,L=-L);const G=y.find(N=>N.e===M),z=.06;if(!G){g(T+U*z,D+L*z,w+U*z,b+L*z,m,.86);continue}g(T+U*z,D+L*z,G.p0[0]+U*z,G.p0[1]+L*z,m,.86),g(G.p1[0]+U*z,G.p1[1]+L*z,w+U*z,b+L*z,m,.86)}{const M=u.map(([D,w])=>new $e(D,w)),T=o.length/3;for(const[D,w]of u)f(D,a(D,w),w,m,.6);for(const D of tr.triangulateShape(M,[]))c.push(T+D[0],T+D[1],T+D[2])}const _=new bt;_.setAttribute("position",new ut(new Float32Array(o),3)),_.setAttribute("color",new ut(new Float32Array(l),3)),_.setIndex(c),_.computeBoundingSphere();const v=new xt(_,this.material);v.matrixAutoUpdate=!1,v.name="inside",this.group.add(v);const E={mesh:v,plan:t,slots:new Map,holes:r};return this.built.set(e,E),t.items.forEach((M,T)=>{(M.state!==2||this.strays.has(`${e}:${T}`))&&this.place(e,E,T)}),!0}update(e){for(const[r]of this.built){const[a,o]=this.middle(r);Math.hypot(a-e.x,o-e.z)>qv&&this.drop(r)}let t=0;const n=Math.floor(e.x/96),s=Math.floor(e.z/96);for(let r=-2;r<=2&&t<Ya;r++)for(let a=-2;a<=2&&t<Ya;a++)for(const o of this.fronted.get(`${n+r}_${s+a}`)??[]){if(this.built.has(o)||this.razed.has(o))continue;const[l,c]=this.middle(o);if(!(Math.hypot(l-e.x,c-e.z)>Wv)&&this.build(o)&&++t>=Ya)break}}breach(e,t){this.razed.has(e)||(this.holes.set(e,t),this.show(e),this.build(e))}raze(e){this.razed.add(e);const t=this.built.get(e);if(!t)return;const n=new Map;for(const[s,r]of t.slots)this.strays.has(`${e}:${s}`)&&n.set(s,r);for(const s of n.keys())t.slots.delete(s);this.drop(e);for(const[s,r]of n)this.orphans.set(`${e}:${s}`,r)}orphans=new Map;apply(e,t){for(let n=0;n+8<=e.length;n+=8){const s=e[n];if(s<t)continue;let r=this.origin.get(s);if(r===void 0){const f=this.originOf(s);r=f?{b:f.b,i:f.i,kind:this.kindNames[f.kind]??""}:null,this.origin.set(s,r)}if(!r)continue;const a=`${r.b}:${r.i}`;let o=this.strays.get(a);o||(o=new Float32Array(7),this.strays.set(a,o)),o.set(e.subarray(n+1,n+8));const l=this.built.get(r.b);if(l){this.place(r.b,l,r.i);continue}const c=this.orphans.get(a),h=this.pool(r.kind);c&&h&&(this.q.set(o[3],o[4],o[5],o[6]),this.t.set(0,-h.halfUp,0).applyQuaternion(this.q),this.t.x+=o[0],this.t.y+=o[1],this.t.z+=o[2],h.mesh.setMatrixAt(c.slot,this.m.compose(this.t,this.q,this.s)),h.mesh.instanceMatrix.needsUpdate=!0)}}reset(){for(const e of[...this.built.keys()])this.drop(e);for(const[,e]of this.orphans){const t=this.pools.get(e.kind);t.mesh.setMatrixAt(e.slot,this.m.makeScale(0,0,0)),t.mesh.instanceMatrix.needsUpdate=!0,t.free.push(e.slot)}this.orphans.clear(),this.holes.clear(),this.razed.clear(),this.strays.clear(),this.origin.clear()}drawn(e){if(!this.built.has(e)&&!this.build(e))return null;const t=this.built.get(e),n=[...t.slots.entries()].map(([s,r])=>(this.pools.get(r.kind).mesh.getMatrixAt(r.slot,this.m),this.t.setFromMatrixPosition(this.m),{kind:r.kind,x:this.t.x,z:this.t.z,stray:this.strays.has(`${e}:${s}`)}));return{rooms:t.plan.rooms.map(s=>this.rooms[s.kind]??"?"),parts:t.plan.parts.map(s=>[s.ax,s.az,s.bx,s.bz]),items:n,triangles:t.mesh.geometry.index.count/3}}counts(){let e=0;for(const t of this.pools.values())e+=Gs-t.free.length;return{built:this.built.size,things:e}}}const nh={compact:{wheel:.3,axles:[.78,3.28],tyre:[.2,.2],nose:.66,belt:.95,tail:.98,screen:[1.2,1.88],back:[3.3,3.95],floor:.24,round:1,tumble:.2,head:[.66,.78],rear:[.82,.98],headX:[.52,.9],rearX:[.6,.93]},saloon:{wheel:.32,axles:[.95,3.78],tyre:[.22,.22],nose:.66,belt:.98,tail:1.02,screen:[1.5,2.25],back:[3.4,4.08],floor:.24,round:1,tumble:.21,head:[.66,.77],rear:[.84,.97],headX:[.5,.9],rearX:[.55,.93]},hatch:{wheel:.31,axles:[.9,3.55],tyre:[.21,.21],nose:.66,belt:.98,tail:1,screen:[1.32,2.05],back:[4.05,4.33],floor:.24,round:1,tumble:.17,head:[.66,.77],rear:[.9,1.12],headX:[.5,.9],rearX:[.7,.95]},suv:{wheel:.37,axles:[.98,3.8],tyre:[.25,.25],nose:.9,belt:1.13,tail:1.15,screen:[1.38,2.08],back:[4.3,4.66],floor:.42,round:.85,tumble:.16,head:[.88,.99],rear:[1.02,1.2],headX:[.48,.9],rearX:[.68,.95]},pickup:{wheel:.4,axles:[1.05,4.5],tyre:[.27,.27],nose:1.02,belt:1.24,tail:1.24,screen:[1.62,2.28],back:[3.1,3.18],bed:3.32,floor:.48,round:.55,tumble:.12,head:[.98,1.12],rear:[.92,1.22],headX:[.5,.92],rearX:[.86,.98]},van:{wheel:.36,axles:[.98,4.25],tyre:[.24,.26],nose:.98,belt:1.18,screen:[.75,1.5],back:[5.16,5.22],side:[.9,2.25],floor:.4,round:.45,tumble:.05,head:[.92,1.06],rear:[.62,1.4],headX:[.5,.9],rearX:[.88,.98]},truck:{wheel:.48,axles:[1.15,5.6],tyre:[.3,.52],nose:1.25,belt:1.5,screen:[.32,.72],back:[2.05,2.1],side:[.55,1.75],box:2.25,cab:.92,floor:.62,round:.25,tumble:.04,head:[.82,.98],rear:[.62,.82],headX:[.55,.88],rearX:[.8,.97],livery:"truck"},taxi:{wheel:.32,axles:[.95,3.8],tyre:[.22,.22],nose:.68,belt:.99,tail:1.03,screen:[1.52,2.27],back:[3.42,4.1],floor:.24,round:1,tumble:.21,head:[.68,.79],rear:[.85,.98],headX:[.5,.9],rearX:[.55,.93],livery:"taxi"},bus:{wheel:.5,axles:[2.65,8.95],tyre:[.3,.52],nose:1.05,belt:1.12,screen:[.02,.22],back:[11.82,11.97],side:[.35,11.55],pillars:1.45,floor:.34,round:.3,tumble:.03,head:[.42,.62],rear:[.55,.95],headX:[.62,.9],rearX:[.8,.96],livery:"bus"}},$v=i=>nh[i]??nh.saloon,ri=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Yv={taxi:1,bus:2,truck:3},ai=22;function ih(i,e,t,n){const[s,r,a]=i.half,o=a*2,l=r*2,c=-(r+i.clearance),[h,f]=e.screen,[u,d]=e.back,g=l-.02,m=[0,o,h,f,u,d,...e.axles.flatMap(P=>n?[P-e.wheel-.06,P,P+e.wheel+.06]:[P])];e.box!==void 0&&m.push(e.box-.05,e.box),e.bed!==void 0&&m.push(e.bed-.04,e.bed);const x=Math.max(6,Math.round(o/t));for(let P=1;P<x;P++)m.push(o*P/x);const p=[...new Set(m.filter(P=>P>=0&&P<=o).map(P=>Math.round(P*1e3)/1e3))].sort((P,H)=>P-H).filter((P,H,J)=>H===0||P-J[H-1]>.025),y=[],_=[],v=[],E=[],M=P=>Math.min(Math.abs(P-e.axles[0]),Math.abs(P-e.axles[1])),T=P=>{const H=(P-a)/a,J=Math.abs(H),he=e.box!==void 0&&P>=e.box,se=e.box!==void 0&&!he?e.cab??1:1,Q=s*se*(1-.11*e.round*ri(.78,1,J))*(1-.03*ri(.95,1,J));let q=P<h?e.nose+(e.belt-e.nose)*Math.pow(ri(0,h,P),.7):P>d?(e.tail??e.belt)-.06*e.round*ri(.9,1,H):e.belt,K=P<f?ri(h,f,P):P<u?1:1-ri(u,d,P),ue=q+((e.box!==void 0?Math.min(g,e.belt+1.15):g)-q)*K,_e=K>.02?1:0;he&&(q=g-.05,ue=g,K=0,_e=0);const Ee=.035*e.round*(1-ri(.85,1,J))*(he?0:1),Ue=Q*(.97-(he?0:e.tumble)*Math.min(1,K*1.6)),Ge=e.wheel+.07,O=M(P),me=e.floor+.08*e.round*ri(.86,1,J),De=O<Ge?Math.max(me,e.wheel+Math.sqrt(Ge*Ge-O*O)):me,Re=Math.min(De+.08,q-.1),Me=he?Re+.12:Math.max(Re+.04,q-.28),ze=Ye=>Ye+c,Le=[[Q*.84,De,0,0,1],[Q*.975,Re,0,0,1],[Q*.978,Re+.012,0,0,0],[Q,Me,0,0,0],[Q*.995,q-.07,0,0,0],[Q*.97,q,0,0,0],[Ue+(Q*.97-Ue)*.42,q+(ue-q)*.5,.5,0,0],[Ue,ue-(ue-q)*.06,.94,1,0],[Ue*.72,ue,1,.5,0],[Ue*.36,ue+Ee*.5,1,.15,0]],Xe=[],Je=[];Xe.push([0,ze(De)]),Je.push([0,0,_e,1]);for(const[Ye,F,S,X,ae]of Le)Xe.push([Ye,ze(F)]),Je.push([S,X,_e,ae]);Xe.push([0,ze(ue+Ee*.6)]),Je.push([1,0,_e,0]);for(let Ye=Le.length-1;Ye>=0;Ye--){const[F,S,X,ae,le]=Le[Ye];Xe.push([-F,ze(S)]),Je.push([X,ae,_e,le])}return{p:Xe,a:Je}},D=p.map(T);if(D[0].p.length!==ai)throw new Error("the traffic body ring has changed its count");D.forEach((P,H)=>{const J=p[H],he=J-a;P.p.forEach(([se,Q],q)=>{y.push(se,Q,he),_.push(...P.a[q]),v.push((J-h)/(f-h),(J-u)/(d-u),Math.hypot(M(J),Q-c-e.wheel)-e.wheel,0)})});const w=new B,b=new B,A=new B,U=new B,L=new B,G=new B,z=(P,H,J,he,se,Q)=>{b.fromArray(y,P*3),A.fromArray(y,H*3),U.fromArray(y,J*3),L.subVectors(A,b).cross(G.subVectors(U,b)),!(L.lengthSq()<1e-12)&&(w.copy(b).add(A).add(U).multiplyScalar(1/3),L.dot(w.sub(G.set(he,se,Q)))>=0?E.push(P,H,J):E.push(P,J,H))},N=(P,H)=>P*ai+(H%ai+ai)%ai,I=c+l*.4;for(let P=0;P+1<D.length;P++){const H=(p[P]+p[P+1])/2-a;for(let J=0;J<ai;J++){const he=N(P,J),se=N(P,J+1),Q=N(P+1,J+1),q=N(P+1,J);z(he,se,Q,0,I,H),z(he,Q,q,0,I,H)}}for(const P of[0,D.length-1]){const H=p[P]-a,J=P===0?H+1:H-1,he=D[P].p.map(K=>K[1]),se=(Math.min(...he)+Math.max(...he))/2,Q=y.length/3;y.push(0,se,H),_.push(0,0,0,0),v.push(9,9,9,0);const q=y.length/3;D[P].p.forEach(([K,ue])=>{y.push(K,ue,H),_.push(0,0,0,0),v.push(9,9,9,0)});for(let K=0;K<ai;K++)z(Q,q+K,q+(K+1)%ai,0,se,J)}const R=(P,H,J,he,se,Q,q,K=1)=>{const ue=y.length/3;for(const Ee of[-1,1])for(const Ue of[-1,1])for(const Ge of[-1,1])y.push(P+Ee*he*(Ue>0?K:1),H+Ue*se,J+Ge*Q*(Ue>0?K:1)),_.push(0,0,0,q),v.push(9,9,9,0);const _e=(Ee,Ue,Ge,O)=>{z(ue+Ee,ue+Ue,ue+Ge,P,H,J),z(ue+Ee,ue+Ge,ue+O,P,H,J)};_e(0,1,3,2),_e(4,5,7,6),_e(0,1,5,4),_e(2,3,7,6),_e(0,2,6,4),_e(1,3,7,5)};if(n){const P=e.box!==void 0||e.livery==="bus";for(const H of[-1,1]){const J=h+(P?.15:.42),he=s*(e.cab??1);P?R(H*(he+.16),c+e.belt+.55,J-a,.04,.24,.1,1):R(H*(he+.06),c+e.belt+.04,J-a,.085,.05,.07,1)}}e.livery==="taxi"&&R(0,c+l+.13,(f+u)/2-a-.1,.36,.11,.13,2,.85);const W=new bt;return W.setAttribute("position",new ct(y,3)),W.setAttribute("carA",new ct(_,4)),W.setAttribute("carB",new ct(v,4)),W.setIndex(E),W.computeVertexNormals(),W.computeBoundingSphere(),W}function Kv(i,e){const[t,n,s]=i.half,r=-(n+i.clearance),a=h=>h-s,o=h=>h+r,l=e.side??[e.screen[0]+.4,Math.min(e.back[1]-.42,e.bed??99)],c=e.pillars?-99:(e.screen[1]+e.back[0])/2+.02;return{uGlass:{value:new ht(a(e.screen[0]),a(e.screen[1]),a(e.back[0]),a(e.back[1]))},uSide:{value:new ht(a(l[0]),a(l[1]),c===-99?-99:a(c),e.pillars??0)},uLampY:{value:new ht(o(e.head[0]),o(e.head[1]),o(e.rear[0]),o(e.rear[1]))},uLampX:{value:new ht(e.headX[0]*t,e.headX[1]*t,e.rearX[0]*t,e.rearX[1]*t)},uShape:{value:new ht(s,t,e.livery?Yv[e.livery]:0,e.box!==void 0?a(e.box):e.bed!==void 0?a(e.bed):99)},uLevels:{value:new ht(o(e.belt),o(e.floor),o(n*2-.02),e.bed!==void 0?1:0)}}}const jv=`
  attribute vec4 carA; attribute vec4 carB; attribute vec4 aState;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN; varying vec4 vState;
  uniform vec4 uShape;
  ${ki}`,Zv=`
  vCarA = carA; vCarB = carB; vLocal = position; vLocalN = normal; vState = aState;
  if (aState.w > 0.5) {
    float ends = smoothstep(uShape.x * 0.45, uShape.x, abs(position.z));
    float lump = p2pNoise(position.xz * 3.1 + position.y * 2.3 + aState.w * 7.0) - 0.5;
    transformed -= normalize(vec3(position.x, 0.3 * position.y, position.z) + 1e-4) * (0.06 + 0.22 * ends) * (0.6 + lump);
  }`,Jv=`
  uniform vec4 uGlass; uniform vec4 uSide; uniform vec4 uLampY; uniform vec4 uLampX; uniform vec4 uShape; uniform vec4 uLevels;
  varying vec4 vCarA; varying vec4 vCarB; varying vec3 vLocal; varying vec3 vLocalN; varying vec4 vState;`,Qv=`
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
  }`,e_=`
  roughnessFactor = mix(mix(roughnessFactor, 0.6, vTrim), 0.05, vGlass);
  metalnessFactor = mix(mix(metalnessFactor, 0.0, vTrim), 0.85, vGlass);
  if (vState.w > 0.5) { roughnessFactor = max(roughnessFactor, 0.7); metalnessFactor *= 0.4; }`;function sh(i,e,t){const n=t?new zh({color:16777215,metalness:.3,roughness:.38,clearcoat:1,clearcoatRoughness:.08,envMap:e,envMapIntensity:.8}):new Es({color:16777215,metalness:.3,roughness:.4,envMap:e,envMapIntensity:.7});return n.onBeforeCompile=s=>{Object.assign(s.uniforms,i),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
${jv}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${Zv}`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${Jv}
${ki}`).replace("#include <color_fragment>",`#include <color_fragment>
${Qv}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${e_}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vLamp;`)},n.customProgramCacheKey=()=>t?"p2p-traffic-body-near":"p2p-traffic-body-far",n}const t_=`
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
  }`;function rh(i,e=!1){const t=(e?[[0,.3],[.9,.5],[1,.3],[1,-.3],[.9,-.5],[0,-.3]]:[[0,.1],[.64,.44],[.72,.5],[.93,.5],[1,.36],[1,-.36],[.93,-.5],[.72,-.5],[.64,-.44],[0,-.1]]).map(([h,f])=>new $e(h,f)),n=new ea(t,i).rotateZ(-Math.PI/2),s=n.getAttribute("position"),r=n.index,a=new B,o=new B,l=new B,c=new B;for(let h=0;h<r.count;h+=3)if(a.fromBufferAttribute(s,r.getX(h)),o.fromBufferAttribute(s,r.getX(h+1)),l.fromBufferAttribute(s,r.getX(h+2)),c.subVectors(o,a).cross(l.clone().sub(a)),c.dot(a.add(o).add(l))<0){const f=r.getX(h+1);r.setX(h+1,r.getX(h+2)),r.setX(h+2,f)}return n.deleteAttribute("uv"),n.computeVertexNormals(),n}function n_(i){const e=new Es({color:16777215,roughness:.85,envMap:i,envMapIntensity:.6});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLocal = position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <color_fragment>",`#include <color_fragment>
${t_}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
roughnessFactor = mix(0.9, 0.28, wheelMetal); metalnessFactor = mix(0.0, 0.9, wheelMetal);`)},e.customProgramCacheKey=()=>"p2p-traffic-wheel",e}const Zo=[[15263972,23],[855568,19],[6053990,9],[3816770,7],[11120049,14],[2306639,7],[3105704,3],[9376784,6],[11740702,2],[3099194,2],[9075296,2],[7023130,1],[13208082,1],[14078660,4]],i_=Zo.reduce((i,[,e])=>i+e,0),ah=[2051724,11544092,2846271,13791770],oh=[15263972,15263972,11740702,2306639,2846271,14263572];function s_(i,e,t){const n=(i>>>4)%1e3;if(e==="taxi")return t.setHex(15906565).offsetHSL(0,0,((i&15)-7.5)*.004);if(e==="bus")return t.setHex(ah[n%ah.length]);if(e==="truck")return t.setHex(oh[n%oh.length]);if(e==="van"&&n<550)return t.setHex(15527661);let s=n/1e3*i_;for(const[r,a]of Zo)if(s-=a,s<0)return t.setHex(r).offsetHSL(0,0,((i&15)-7.5)*.003);return t.setHex(Zo[0][0])}const rs=200,r_=55,a_=110;class jr{group=new Ft;kinds=[];wheels;m=new vt;w=new vt;q=new Bt;p=new B;s=new B;one=new B(1,1,1);c=new qe;steer=new Bt;spin=new Bt;wq=new Bt;wp=new B;static X=new B(1,0,0);static Y=new B(0,1,0);rolled=new Map;at=new Map;clock=0;frames=0;constructor(e,t=null){const n=(r,a,o,l,c=!0)=>{const h=new kn(new Float32Array(o*4),4).setUsage(gs);r.setAttribute("aState",h);const f=new Ni(r,a,o);return f.count=0,f.castShadow=l,f.receiveShadow=!0,c&&f.setColorAt(0,this.c.setHex(16777215)),f.instanceMatrix.setUsage(gs),this.group.add(f),{mesh:f,state:h,count:0}};for(const r of e){const a=$v(r.name),o=Kv(r,a),l=n(ih(r,a,.17,!0),sh(o,t,!0),rs,!0),c=n(ih(r,a,1,!1),sh(o,t,!1),rs,!0);l.mesh.name=`traffic ${r.name}`,c.mesh.name=`traffic ${r.name} far`,this.kinds.push({kind:r,lines:a,near:l,far:c,wheelbase:a.axles[1]-a.axles[0]})}const s=n_(t);this.wheels=[n(rh(14),s,rs*4,!1,!1),n(rh(7,!0),s,rs*4,!1,!1)],this.wheels[0].mesh.name="traffic wheels",this.wheels[1].mesh.name="traffic wheels far",this.group.name="traffic"}update(e,t,n,s){this.clock+=n,this.frames++;const r=this.clock%.8<.4?1:0,a=Math.min(t,rs);for(const c of this.kinds)c.near.count=0,c.far.count=0;for(const c of this.wheels)c.count=0;const o=new Set;this.at.clear();for(let c=0;c<a;c++){const h=c*ir,f=e[h+Pt.INDEX],u=e[h+Pt.FLAGS],d=e[h+Pt.SPEED],g=this.kinds[e[h+Pt.KIND]]??this.kinds[1]??this.kinds[0];if(!g)break;this.p.set(e[h+Pt.POS],e[h+Pt.POS+1],e[h+Pt.POS+2]),this.q.set(e[h+Pt.ROT],e[h+Pt.ROT+1],e[h+Pt.ROT+2],e[h+Pt.ROT+3]),this.m.compose(this.p,this.q,this.one);const m=this.p.distanceTo(s),x=m<r_,p=x?g.near:g.far,y=p.count++;p.mesh.setMatrixAt(y,this.m),p.mesh.setColorAt(y,s_(e[h+Pt.LOOK],g.kind.name,this.c));const _=u&zs.WRECK?1:0;p.state.setXYZW(y,u&zs.BRAKING?1:0,_?0:u&zs.LEFT?r:0,_?0:u&zs.RIGHT?r:0,_);const v=g.lines,[E,M,T]=g.kind.half,D=-(M+g.kind.clearance),w=(this.rolled.get(f)??0)+(_?0:d*n/v.wheel);this.rolled.set(f,w%(Math.PI*2)),o.add(f);const b=_?0:Math.max(-.6,Math.min(.6,Math.atan(g.wheelbase*e[h+Pt.CURVE]))),A=x?this.wheels[0]:this.wheels[1];this.spin.setFromAxisAngle(jr.X,-w);for(let U=0;U<(m<a_?2:0);U++){const L=v.tyre[U],G=v.axles[U]-T;this.steer.setFromAxisAngle(jr.Y,U===0?-b:0),this.wq.copy(this.steer).multiply(this.spin);for(const z of[-1,1]){if(A.count>=rs*4)break;this.wp.set(z*(E*(v.cab!==void 0&&U===0?v.cab:1)-L/2-.03),D+v.wheel,G),this.w.compose(this.wp,this.wq,this.s.set(L,v.wheel,v.wheel)),A.mesh.setMatrixAt(A.count++,this.w.premultiply(this.m))}}this.at.set(f,this.p.clone())}for(const c of this.rolled.keys())o.has(c)||this.rolled.delete(c);const l=this.frames<=3;for(const c of[...this.kinds.flatMap(h=>[h.near,h.far]),...this.wheels]){const h=c.mesh;l&&c.count===0&&h.setMatrixAt(c.count++,this.w.makeTranslation(0,-1e4,0)),h.count=c.count,h.visible=l||c.count>0,h.frustumCulled=!l,h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),c.state.needsUpdate=!0,c.count>0&&!l&&h.computeBoundingSphere()}}static HORN=zs.HORN}const Ka=["chase","hood","high"];class o_{constructor(e,t=-1/0){this.ground=e,this.sea=t}camera=new Sn(62,1,.3,2600);mode="chase";dir=new B(0,0,-1);eye=new B;look=new B;fresh=!0;next(){return this.mode=Ka[(Ka.indexOf(this.mode)+1)%Ka.length],this.fresh=!0,this.mode}cut(){this.fresh=!0}update(e,t){const n=new B(e[Se.POS],e[Se.POS+1],e[Se.POS+2]),s=new Bt(e[Se.ROT],e[Se.ROT+1],e[Se.ROT+2],e[Se.ROT+3]).normalize(),r=new B(0,0,-1).applyQuaternion(s),a=new B(e[Se.VEL],0,e[Se.VEL+2]),o=a.length();if(this.mode==="hood"){this.camera.position.copy(n).add(new B(0,.95,-.9).applyQuaternion(s)),this.camera.quaternion.copy(s),this.camera.fov=72,this.camera.updateProjectionMatrix();return}const l=r.clone().setY(0);l.lengthSq()<1e-6?l.copy(this.dir):l.normalize();const c=l.clone(),h=e[Se.SPEED];h>4&&o>4&&c.lerp(a.clone().divideScalar(o),Math.min(.75,(h-4)/12)).normalize();const f=this.fresh?1:1-Math.exp(-t*4.5);this.dir.lerp(c,f).setY(0).normalize();const u=this.mode==="high",d=u?16:6.4+Math.min(2.2,o*.035),g=u?22:2.35,m=n.clone().addScaledVector(this.dir,-d).add(new B(0,g,0)),x=this.ground.tunnel(n.x,n.y,n.z);if(x){const v=x.way,E=v.p[x.si],M=v.p[x.si+1],T=M[0]-E[0],D=M[2]-E[2],w=Math.hypot(T,D)||1,b=T/w,A=D/w,U=m.x-E[0],L=m.z-E[2],G=U*b+L*A,z=Math.max(-v.half+.8,Math.min(v.half-.8,-U*A+L*b));m.x=E[0]+b*G-A*z,m.z=E[2]+A*G+b*z;const N=(this.ground.tunnel(m.x,n.y,m.z)?.roof??x.roof)-.45;m.y=Math.min(m.y,N),m.y=Math.max(m.y,x.floor+.9)}else{m.y=Math.max(m.y,this.ground.surface(m.x,m.z,n.y+1.5)+.9,this.sea+.7);const v=this.ground.deckOver(m.x,m.z,n.y+.5);v<1/0&&(m.y=Math.min(m.y,v-.4))}const p=n.clone().addScaledVector(this.dir,u?6:5).add(new B(0,u?0:1,0)),y=this.fresh?1:1-Math.exp(-t*9);this.eye.lerp(m,y),this.look.lerp(p,this.fresh?1:1-Math.exp(-t*14)),this.fresh=!1,this.camera.position.copy(this.eye),this.camera.lookAt(this.look);const _=60+Math.min(14,o*.28);Math.abs(_-this.camera.fov)>.05&&(this.camera.fov=_,this.camera.updateProjectionMatrix())}}const lh=80,Br=26;function ch(i,e){try{i.setPointerCapture(e)}catch{}}class l_{constructor(e){this.root=e,window.addEventListener("keydown",l=>{l.repeat||(this.keys.add(l.code),this.onKey(l.code),(l.code.startsWith("Arrow")||l.code==="Space")&&l.preventDefault())}),window.addEventListener("keyup",l=>this.keys.delete(l.code));const t=()=>{this.keys.clear(),this.wheel=null,this.pedals.clear(),this.paint()};window.addEventListener("blur",t),document.addEventListener("visibilitychange",()=>{document.hidden&&t()});const n=e.querySelector("#wheel");n.addEventListener("pointerdown",l=>{this.wheel={id:l.pointerId,x0:l.clientX,value:0},ch(n,l.pointerId),this.paint()}),n.addEventListener("pointermove",l=>{this.wheel?.id===l.pointerId&&(this.wheel.value=Math.max(-1,Math.min(1,(l.clientX-this.wheel.x0)/lh)),this.paint())});const s=l=>{this.wheel?.id===l.pointerId&&(this.wheel=null,this.paint())};for(const l of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(l,s);const r=e.querySelector("#gas"),a=e.querySelector("#brake"),o=(l,c)=>{if(!l)return!1;const h=l.getBoundingClientRect();return c.clientX>h.left-Br&&c.clientX<h.right+Br&&c.clientY>h.top-Br&&c.clientY<h.bottom+Br};for(const l of e.querySelectorAll("[data-pedal]")){const c=l.dataset.pedal,h=u=>{if(c==="hand")return["hand"];const d=[];return o(r,u)&&d.push("gas"),o(a,u)&&d.push("brake"),d.length?d:[c]};l.addEventListener("pointerdown",u=>{this.pedals.set(u.pointerId,h(u)),ch(l,u.pointerId),this.paint(),u.preventDefault()}),l.addEventListener("pointermove",u=>{this.pedals.has(u.pointerId)&&(this.pedals.set(u.pointerId,h(u)),this.paint())});const f=u=>{this.pedals.delete(u.pointerId)&&this.paint()};for(const u of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(u,f)}}keys=new Set;keySteer=0;wheel=null;pedals=new Map;override=null;onKey=()=>{};held(e){for(const t of this.pedals.values())if(t.includes(e))return!0;return!1}paint(){for(const t of this.root.querySelectorAll("[data-pedal]"))t.classList.toggle("down",this.held(t.dataset.pedal));const e=this.root.querySelector("#wheel-knob");e&&(e.style.opacity=this.wheel?"1":"0",e.style.transform=`translateX(${(this.wheel?.value??0)*lh}px)`,this.wheel&&(e.style.left=`${this.wheel.x0}px`))}sample(e){if(this.override)return this.override;const t=this.keys,n=t.has("ArrowLeft")||t.has("KeyA"),r=(t.has("ArrowRight")||t.has("KeyD")?1:0)-(n?1:0),a=(r===0?6:3.5)*e;this.keySteer+=Math.max(-a,Math.min(a,r-this.keySteer));const o=this.wheel?this.wheel.value:this.keySteer,l=t.has("ArrowUp")||t.has("KeyW")||this.held("gas"),c=t.has("ArrowDown")||t.has("KeyS")||this.held("brake"),h=t.has("Space")||this.held("hand");return{steer:Math.round(o*1e3),throttle:l?1e3:0,brake:c?1e3:0,handbrake:h?1:0}}}class c_{ctx=null;engine=null;skid=null;wind=null;noise=null;enabled=!0;start(){if(this.ctx){this.ctx.resume();return}const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=this.ctx=new e,n=t.createGain();n.gain.value=.5,n.connect(t.destination);const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=500,s.Q.value=1.2;const r=t.createGain();r.gain.value=0;const a=t.createOscillator();a.type="sawtooth";const o=t.createOscillator();o.type="square";const l=t.createGain();l.gain.value=.5,a.connect(s),o.connect(l).connect(s),s.connect(r).connect(n),a.start(),o.start(),this.engine={a,b:o,filter:s,gain:r};const c=t.createBuffer(1,t.sampleRate*2,t.sampleRate),h=c.getChannelData(0);for(let u=0;u<h.length;u++)h[u]=Math.random()*2-1;this.noise=c;const f=(u,d,g)=>{const m=t.createBufferSource();m.buffer=c,m.loop=!0;const x=t.createBiquadFilter();x.type=u,x.frequency.value=d,x.Q.value=g;const p=t.createGain();return p.gain.value=0,m.connect(x).connect(p).connect(n),m.start(),p};this.skid=f("bandpass",1700,2.5),this.wind=f("lowpass",500,.5)}burst(e,t,n,s){const r=this.ctx;if(!r||!this.noise||!this.enabled)return;const a=r.createBufferSource();a.buffer=this.noise;const o=r.createBiquadFilter();o.type=e,o.frequency.value=t,o.Q.value=.8;const l=r.createGain(),c=r.currentTime;l.gain.setValueAtTime(Math.min(1,n),c),l.gain.exponentialRampToValueAtTime(.001,c+s),a.connect(o).connect(l).connect(r.destination),a.start(c,Math.random()*1.5,s+.05)}splash(e){const t=Math.min(1,e/25);this.burst("lowpass",180,.5,.3+.4*t),this.burst("bandpass",1400,.9+t*.8,.2+.35*t),this.burst("highpass",3500,.6+t*.6,.12+.2*t)}horn(e){if(!this.ctx||!this.enabled||e>120)return;const t=this.ctx.currentTime,n=this.ctx.createGain(),s=.16/(1+e*e/400);n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(s,t+.02),n.gain.setValueAtTime(s,t+.5),n.gain.linearRampToValueAtTime(0,t+.58),n.connect(this.ctx.destination);for(const r of[392,494]){const a=this.ctx.createOscillator();a.type="sawtooth",a.frequency.value=r,a.connect(n),a.start(t),a.stop(t+.6)}}thump(e){this.burst("lowpass",260+e*20,.25+e*.06,.25+Math.min(.5,e*.03)),this.burst("bandpass",2400,e*.03,.18)}glass(){this.burst("highpass",3200,.5,.7),this.burst("bandpass",6500,.35,.4)}update(e,t){const n=this.ctx;if(!n||!this.engine||!this.skid||!this.wind)return;const s=n.currentTime,r=this.enabled?1:0,a=e[Se.RPM],o=a/60*2;this.engine.a.frequency.setTargetAtTime(o,s,.03),this.engine.b.frequency.setTargetAtTime(o*.5,s,.03),this.engine.filter.frequency.setTargetAtTime(300+a*.25+t*1400,s,.05),this.engine.gain.gain.setTargetAtTime(r*(.1+.16*t+a/7200*.08),s,.05);let l=0;for(let h=0;h<4;h++){const f=Se.WHEELS+h*Se.WHEEL_STRIDE;e[f+Se.W_GROUNDED]&&(l=Math.max(l,Math.abs(e[f+Se.W_SLIP])/.1-1.2,Math.abs(e[f+Se.W_SLIP_TAN])/.14-1.2))}const c=Math.hypot(e[Se.VEL],e[Se.VEL+2]);this.skid.gain.setTargetAtTime(r*Math.min(.35,Math.max(0,l)*.2)*Math.min(1,c/4),s,.04),this.wind.gain.setTargetAtTime(r*Math.min(.3,c*c/9e3),s,.2)}}const Et=i=>document.getElementById(i);class h_{speed=Et("speed");gear=Et("gear");rpm=Et("rpm").firstElementChild;time=Et("time");place=Et("place");toastEl=Et("toast");menu=Et("menu");hurt=Et("hurt");lastHurt=-1;toastTimer=0;lastKmh=-1;lastGear="";lastTime="";constructor(e,t){Et("stamp").textContent=`${e} · ${t}`,Et("b-menu").addEventListener("click",()=>this.toggleMenu()),document.addEventListener("pointerdown",n=>{this.menu.classList.contains("open")&&!this.menu.contains(n.target)&&n.target!==Et("b-menu")&&this.toggleMenu(!1)})}toggleMenu(e){this.menu.classList.toggle("open",e??!this.menu.classList.contains("open"))}on(e,t){Et(e).addEventListener("click",t)}mark(e,t){Et(e).classList.toggle("on",t)}starts(e,t){const n=Et("starts");e.forEach((s,r)=>{const a=document.createElement("button");a.textContent=s,a.addEventListener("click",()=>{t(r),this.toggleMenu(!1)}),n.appendChild(a)})}cars(e,t,n){const s=Et("cars");e.forEach((r,a)=>{const o=document.createElement("button"),l=document.createElement("b");l.textContent=r.name;const c=document.createElement("small");c.textContent=r.says,o.append(l,c),o.classList.toggle("on",a===t),o.addEventListener("click",()=>{n(a),this.toggleMenu(!1)}),s.appendChild(o)})}pickedCar(e){[...Et("cars").children].forEach((t,n)=>t.classList.toggle("on",n===e))}setPlace(e){this.place.textContent=e}report(e){Et("report").textContent=e}loading(e){Et("loading-step").textContent=e}loadingNote(e){Et("loading-note").textContent=e}anywhere(e,t,n){const s=Et("place-q"),r=Et("place-go"),a=Et("place-found"),o=Et("place-home");for(const c of["keydown","keyup","keypress"])s.addEventListener(c,h=>h.stopPropagation());o.style.display=e?"":"none",o.addEventListener("click",n);const l=async()=>{const c=s.value.trim();if(c){a.textContent="asking…";try{const h=await t(c);a.textContent=h.length?"":"nothing found by that name";for(const f of h){const u=document.createElement("button");u.textContent=f.label,u.addEventListener("click",()=>{a.textContent="going…",f.go()}),a.appendChild(u)}}catch(h){a.textContent=`the search failed: ${h instanceof Error?h.message:String(h)}`}}};r.addEventListener("click",()=>void l()),s.addEventListener("keydown",c=>{c.key==="Enter"&&l()})}loaded(){Et("loading").remove()}fail(e){const t=Et("loading-step");t.className="err",t.textContent=e}toast(e,t=2200){this.toastEl.textContent=e,this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove("show"),t)}update(e,t,n){const s=Math.round(Math.abs(e[Se.SPEED])*3.6);s!==this.lastKmh&&(this.speed.firstChild.textContent=String(s),this.lastKmh=s);const r=e[Se.GEAR]<0?"R":String(e[Se.GEAR]);r!==this.lastGear&&(this.gear.textContent=r,this.lastGear=r);const a=Math.min(1,e[Se.RPM]/7200);this.rpm.style.width=`${(a*100).toFixed(0)}%`,this.rpm.classList.toggle("red",a>.9);const o=e[Se.DROWNED]>.5?1e3:Math.round(e[Se.DAMAGE]*100);o!==this.lastHurt&&(this.hurt.textContent=o===1e3?"engine flooded":o?`damage ${o}%  ·  engine ${Math.round(e[Se.POWER]*100)}%`:"",this.lastHurt=o);const l=Math.floor(t/60),c=`${n?"▶ ":""}${l}:${(t-l*60).toFixed(1).padStart(4,"0")}`;c!==this.lastTime&&(this.time.textContent=c,this.lastTime=c)}}const wn=128,f_=132,u_=20,d_=8,p_=70,Ot={land:"#171c23",water:"#1c3a52",green:"#1e3828",paved:"#222831",pier:"#2a2f37",building:"#2e3540",minor:"#525b68",street:"#8d97a5",main:"#e6dfcb",path:"#4d6a55",car:"#ff5a3c",target:"#ffd23c",ink:"#f2f0ea",rim:"rgba(242,240,234,.35)"},m_=new Set(["park","grass","garden","wood","pitch","playground"]),g_=new Set(["water","pool"]);function x_(i){return/^(secondary|primary|trunk|motorway)$/.test(i)?2:/^(residential|unclassified|tertiary)$/.test(i)?1:0}class v_{constructor(e,t){this.page=e,this.places=e.starts.map(u=>({x:u.x,z:u.z,label:u.label.split(",")[0]}));const n=(u,d)=>(Math.floor(u/wn)+512)*4096+Math.floor(d/wn)+512,s=(u,d,g)=>{let m=1/0,x=-1/0,p=1/0,y=-1/0;for(const[_,v]of g)m=Math.min(m,_),x=Math.max(x,_),p=Math.min(p,v),y=Math.max(y,v);for(let _=Math.floor(m/wn);_<=Math.floor(x/wn);_++)for(let v=Math.floor(p/wn);v<=Math.floor(y/wn);v++){const E=n(_*wn,v*wn);let M=this.cells.get(E);M||(M={roads:[],buildings:[],areas:[],lines:[]},this.cells.set(E,M)),M[u].push(d)}};this.roads=[...e.roads,...(e.ways??[]).filter(u=>u.k==="tunnel").map(u=>({c:u.c,w:u.w,p:u.p.map(d=>[d[0],d[2]])}))],this.roads.forEach((u,d)=>s("roads",d,u.p)),e.buildings.forEach((u,d)=>s("buildings",d,u.r)),e.areas.forEach((u,d)=>s("areas",d,u.r)),e.lines.forEach((u,d)=>{(u.k==="path"||u.k==="steps")&&s("lines",d,u.p)}),this.stamp={roads:new Uint32Array(this.roads.length),buildings:new Uint32Array(e.buildings.length),areas:new Uint32Array(e.areas.length),lines:new Uint32Array(e.lines.length)};const r=12,a=Math.ceil((e.box[2]-e.box[0])/r),o=Math.ceil((e.box[3]-e.box[1])/r);this.water=document.createElement("canvas"),this.water.width=a,this.water.height=o;const l=this.water.getContext("2d"),c=l.createImageData(a,o);for(let u=0;u<o;u++)for(let d=0;d<a;d++){const g=t.at(e.box[0]+(d+.5)*r,e.box[1]+(u+.5)*r)<=e.ground.water+.6,m=(u*a+d)*4;c.data[m]=28,c.data[m+1]=58,c.data[m+2]=82,c.data[m+3]=g?255:0}l.putImageData(c,0,0);const h=u=>document.getElementById(u);this.mini=h("mini"),this.mini.width=this.mini.height=Math.round(f_*this.dpr),this.miniCtx=this.mini.getContext("2d"),this.panel=h("map"),this.big=this.panel.querySelector("canvas"),this.bigCtx=this.big.getContext("2d"),this.still=document.createElement("canvas"),this.stillCtx=this.still.getContext("2d"),this.mini.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),this.toggle()}),h("map-close").addEventListener("click",()=>this.toggle(!1)),h("map-in").addEventListener("click",()=>this.setZoom(this.zoom*2)),h("map-out").addEventListener("click",()=>this.setZoom(this.zoom/2)),h("map-clear").addEventListener("click",()=>this.setTarget(null));let f=null;this.big.addEventListener("pointerdown",u=>{f={x:u.clientX,y:u.clientY}}),this.big.addEventListener("pointerup",u=>{if(!f||Math.hypot(u.clientX-f.x,u.clientY-f.y)>12){f=null;return}f=null;const d=this.big.getBoundingClientRect(),g=this.mapView();this.tap((u.clientX-d.left-d.width/2)/(g.scale/this.dpr)+g.cx,(u.clientY-d.top-d.height/2)/(g.scale/this.dpr)+g.cz)}),window.addEventListener("resize",()=>{this.stillView=null})}target=null;onTarget=()=>{};cells=new Map;stamp={roads:new Uint32Array(0),buildings:new Uint32Array(0),areas:new Uint32Array(0),lines:new Uint32Array(0)};pass=0;water;mini;miniCtx;panel;big;bigCtx;still;stillCtx;stillView=null;zoom=1;sinceMini=1;sinceMap=1;reach=180;car={x:0,z:0,heading:0,speed:0};dpr=Math.min(2,window.devicePixelRatio||1);places;roads;get open(){return this.panel.classList.contains("open")}toggle(e){this.panel.classList.toggle("open",e??!this.open),this.stillView=null,this.sinceMap=1}setZoom(e){this.zoom=Math.max(1,Math.min(8,e)),this.stillView=null,this.sinceMap=1}setTarget(e){this.target=e,this.sinceMini=this.sinceMap=1,this.onTarget(e)}tap(e,t){const n=Math.max(p_,14/(this.mapView().scale/this.dpr));for(const o of this.places)if(Math.hypot(o.x-e,o.z-t)<n*.5)return this.setTarget({...o}),this.target;let s=1/0,r=0,a=0;for(const o of this.near("roads",e,t,n)){const l=this.roads[o].p;for(let c=0;c+1<l.length;c++){const[h,f]=l[c],[u,d]=l[c+1],g=u-h,m=d-f,x=g*g+m*m,p=x>0?Math.max(0,Math.min(1,((e-h)*g+(t-f)*m)/x)):0,y=Math.hypot(h+g*p-e,f+m*p-t);y<s&&(s=y,r=h+g*p,a=f+m*p)}}return s>n?null:(this.setTarget({x:r,z:a,label:"the pin"}),this.target)}update(e,t,n,s,r){this.car={x:e,z:t,heading:n,speed:s};const a=150+Math.min(170,Math.abs(s)*4.5);this.reach+=(a-this.reach)*Math.min(1,r*1.5),this.sinceMini+=r,this.sinceMap+=r,this.sinceMini>=1/u_&&(this.sinceMini=0,this.drawMini()),this.open&&this.sinceMap>=1/d_&&(this.sinceMap=0,this.drawMap())}near(e,t,n,s){const r=[],a=this.stamp[e],o=++this.pass;for(let l=Math.floor((t-s)/wn);l<=Math.floor((t+s)/wn);l++)for(let c=Math.floor((n-s)/wn);c<=Math.floor((n+s)/wn);c++){const h=this.cells.get((l+512)*4096+c+512);if(h)for(const f of h[e])a[f]!==o&&(a[f]=o,r.push(f))}return r}paint(e,t,n,s,r,a){const o=this.page;e.setTransform(1,0,0,1,0,0),e.fillStyle=Ot.land,e.fillRect(0,0,t,n),e.translate(t/2+s.ox,n/2+s.oy),e.rotate(s.rot),e.scale(s.scale,s.scale),e.translate(-s.cx,-s.cz),e.imageSmoothingEnabled=!0,e.drawImage(this.water,o.box[0],o.box[1],o.box[2]-o.box[0],o.box[3]-o.box[1]);const l=u=>{e.moveTo(u[0][0],u[0][1]);for(let d=1;d<u.length;d++)e.lineTo(u[d][0],u[d][1]);e.closePath()},c=u=>{e.moveTo(u[0][0],u[0][1]);for(let d=1;d<u.length;d++)e.lineTo(u[d][0],u[d][1])},h=this.near("areas",s.cx,s.cz,r);for(const[u,d]of[[g=>m_.has(g),Ot.green],[g=>g_.has(g),Ot.water],[g=>g==="pier",Ot.pier],[g=>g==="plaza"||g==="parking",Ot.paved]]){e.beginPath();for(const g of h){const m=o.areas[g];u(m.k)&&m.r.length>2&&l(m.r)}e.fillStyle=d,e.fill()}if(s.scale>.1){e.beginPath();for(const u of this.near("buildings",s.cx,s.cz,r)){const d=o.buildings[u];d.r.length>3&&l(d.r)}e.fillStyle=Ot.building,e.fill()}if(e.lineCap="round",e.lineJoin="round",a){e.beginPath();for(const u of this.near("lines",s.cx,s.cz,r))c(o.lines[u].p);e.strokeStyle=Ot.path,e.lineWidth=Math.max(1.2*this.dpr/s.scale,1.5),e.setLineDash([4,4]),e.stroke(),e.setLineDash([])}const f=this.near("roads",s.cx,s.cz,r);for(const[u,d,g]of[[0,Ot.minor,.8],[1,Ot.street,1.3],[2,Ot.main,2.2]]){if(u===0&&s.scale<.2*this.dpr)continue;e.beginPath();let m=4;for(const x of f){const p=this.roads[x];x_(p.c)===u&&(c(p.p),m=Math.max(m,p.w))}e.strokeStyle=d,e.lineWidth=Math.max(g*this.dpr/s.scale,u===2?Math.min(m,14)*.8:u===1?7:3.5),e.stroke()}e.setTransform(1,0,0,1,0,0)}toScreen(e,t,n,s,r){const a=(s-e.cx)*e.scale,o=(r-e.cz)*e.scale,l=Math.cos(e.rot),c=Math.sin(e.rot);return[t/2+e.ox+a*l-o*c,n/2+e.oy+a*c+o*l]}arrow(e,t,n,s,r){e.save(),e.translate(t,n),e.rotate(s),e.beginPath(),e.moveTo(0,-r),e.lineTo(r*.72,r*.8),e.lineTo(0,r*.4),e.lineTo(-r*.72,r*.8),e.closePath(),e.fillStyle=Ot.car,e.strokeStyle="#fff",e.lineWidth=Math.max(1,r*.16),e.fill(),e.stroke(),e.restore()}drawMini(){const e=this.miniCtx,t=this.mini.width,n=this.dpr,s=t/2,r={cx:this.car.x,cz:this.car.z,scale:s*.86/this.reach,rot:-this.car.heading,ox:0,oy:s*.22};if(e.save(),e.beginPath(),e.arc(s,s,s,0,Math.PI*2),e.clip(),this.paint(e,t,t,r,this.reach*1.7,!0),this.target){const[l,c]=this.toScreen(r,t,t,this.target.x,this.target.z),h=l-s,f=c-s,u=Math.hypot(h,f),d=s-9*n,g=Math.hypot(this.target.x-this.car.x,this.target.z-this.car.z);if(e.fillStyle=Ot.target,e.strokeStyle="#1a1a1a",e.lineWidth=1.5*n,u<=d)e.beginPath(),e.arc(l,c,5*n,0,Math.PI*2),e.fill(),e.stroke();else{const m=h/u,x=f/u,p=s+m*d,y=s+x*d,_=7*n;e.beginPath(),e.moveTo(p+m*_,y+x*_),e.lineTo(p-m*_*.5-x*_*.8,y-x*_*.5+m*_*.8),e.lineTo(p-m*_*.5+x*_*.8,y-x*_*.5-m*_*.8),e.closePath(),e.fill(),e.stroke(),e.font=`600 ${10*n}px system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle";const v=g>=1e3?`${(g/1e3).toFixed(1)} km`:`${Math.round(g/10)*10} m`,E=s+m*(d-20*n),M=s+x*(d-20*n);e.lineWidth=3*n,e.strokeStyle="rgba(10,12,16,.85)",e.strokeText(v,E,M),e.fillStyle=Ot.target,e.fillText(v,E,M)}}this.arrow(e,s,s+r.oy,0,7.5*n),e.restore(),e.beginPath(),e.arc(s,s,s-n,0,Math.PI*2),e.strokeStyle=Ot.rim,e.lineWidth=2*n,e.stroke();const a=s+Math.sin(r.rot)*(s-9*n),o=s-Math.cos(r.rot)*(s-9*n);e.font=`700 ${10*n}px system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.lineWidth=3*n,e.strokeStyle="rgba(10,12,16,.85)",e.strokeText("N",a,o),e.fillStyle=Ot.ink,e.fillText("N",a,o)}mapView(){const e=this.big.width||1,t=this.big.height||1,n=this.page.box,s=Math.min(e/(n[2]-n[0]),t/(n[3]-n[1]))*.98;return this.zoom<=1?{cx:(n[0]+n[2])/2,cz:(n[1]+n[3])/2,scale:s,rot:0,ox:0,oy:0}:{cx:this.car.x,cz:this.car.z,scale:s*this.zoom,rot:0,ox:0,oy:0}}drawMap(){const e=this.big.getBoundingClientRect(),t=Math.round(e.width*this.dpr),n=Math.round(e.height*this.dpr);if(t<8||n<8)return;(this.big.width!==t||this.big.height!==n)&&(this.big.width=t,this.big.height=n,this.stillView=null);const s=this.mapView(),r=this.bigCtx,a=Math.round(40*this.dpr),o=this.stillView;(!o||o.scale!==s.scale||Math.abs((s.cx-o.cx)*s.scale)>a*.8||Math.abs((s.cz-o.cz)*s.scale)>a*.8)&&(this.still.width=t+a*2,this.still.height=n+a*2,this.paint(this.stillCtx,this.still.width,this.still.height,s,Math.hypot(this.still.width,this.still.height)/2/s.scale,s.scale>.45*this.dpr),this.stillView={...s});const l=this.stillView;r.setTransform(1,0,0,1,0,0),r.drawImage(this.still,Math.round(-a-(s.cx-l.cx)*s.scale),Math.round(-a-(s.cz-l.cz)*s.scale));const c=this.dpr;r.font=`600 ${11*c}px system-ui, sans-serif`,r.textBaseline="middle",r.textAlign="left";for(const u of this.places){const[d,g]=this.toScreen(s,t,n,u.x,u.z);r.beginPath(),r.arc(d,g,4*c,0,Math.PI*2),r.fillStyle=Ot.ink,r.fill(),r.lineWidth=3*c,r.strokeStyle="rgba(10,12,16,.85)",r.strokeText(u.label,d+8*c,g),r.fillStyle=Ot.ink,r.fillText(u.label,d+8*c,g)}if(this.target){const[u,d]=this.toScreen(s,t,n,this.target.x,this.target.z);r.beginPath(),r.arc(u,d,9*c,0,Math.PI*2),r.strokeStyle=Ot.target,r.lineWidth=3*c,r.stroke(),r.beginPath(),r.arc(u,d,3.5*c,0,Math.PI*2),r.fillStyle=Ot.target,r.fill()}const[h,f]=this.toScreen(s,t,n,this.car.x,this.car.z);this.arrow(r,h,f,this.car.heading,9*c)}probe(){return{open:this.open,zoom:this.zoom,target:this.target,reach:this.reach}}}const Nn=new URLSearchParams(location.search),__=Nn.has("test"),ja=Nn.get("world")??"sf",hh=1,Jo=()=>new Promise(i=>requestAnimationFrame(()=>i())),y_=14;async function M_(){const i=new h_("11d1463 2026-11-22 06:41Z","");let e=null;const t=async k=>{i.loading(k),await Jo()};await t("the sim core");const n=await zg(`./core/p2p_core.wasm${os}`),s=["p2p_new_car","p2p_kind_count","p2p_car_count","p2p_traffic_drain","p2p_traffic_stride","p2p_vehicle_count","p2p_events_drain","p2p_panel","p2p_rubble_drain","p2p_count","p2p_inside","p2p_prop_origin"].filter(k=>typeof n[k]!="function");if(s.length)throw new Error(`this page (${"11d1463 2026-11-22 06:41Z".split(" ")[0]}) was given a sim core from another build (it has no ${s.join(", ")}). Reload; if that does not cure it, clear this site's data.`);const r=Zh(Nn);let a,o,l=null;if(r){i.loadingNote("making this place on this device, from open map data"),await t(`the place: ${r.label}`);const k=await bx(r,[...Fa(n).keys()],Z=>i.loading(Z));({blob:a,page:o,mask:l}=k),e={seconds:k.seconds,kept:k.kept}}else await t("the city"),[a,o]=await Promise.all([ox(`./world/${ja}.p2pw${os}`),fetch(`./world/${ja}.json${os}`).then(k=>{if(!k.ok)throw new Error(`world ${ja}: ${k.status}`);return k.json()})]);const c=new ax(a);c.setWays(o.ways??[]);const h=o.from.flat?"the ground here is level: no source of heights covers this place":"";document.getElementById("stamp").textContent=r?`11d1463 2026-11-22 06:41Z · ${r.label}: made on this device from Overture Maps ${o.from.release}${h?` · ${h}`:""} · ${o.attribution}`:`11d1463 2026-11-22 06:41Z · ${o.name} from ${o.from.repo} ${o.from.sha} · ${o.attribution}`;const f=Cx(Nn),u=new Dx(document.getElementById("view"),f),d=new o_(c,o.ground.sea??-1/0);await t("the ground");let g=null;o.photo&&(g=await new kh().loadAsync(`./world/${o.photo.file}${os}`),g.colorSpace=Qt,g.anisotropy=Math.min(8,u.renderer.capabilities.getMaxAnisotropy()));const m=Gx(c,o,g,l);await m.ready,m.group.name="ground",u.scene.add(m.group),await t("the streets");const x=Yx(c,o);x.group.name="streets",u.scene.add(x.group),await t("the bridges and tunnels");const p=Qx(o,c);u.scene.add(p.group),await t("the buildings");const y=Mv(o);y.group.name="buildings",u.scene.add(y.group),await t("what stands along the streets");const _=kv(c,o,Fa(n));_.group.name="props",u.scene.add(_.group);const v=new tv(o,u.reflections);v.group.name="shopfronts",u.scene.add(v.group);const E=new Xv(o,c,k=>L.inside(k),k=>L.propOrigin(k),bc(n),Fa(n),wc(n));u.scene.add(E.group);const M=new Gv(y,v,E,Sc(n),k=>o.buildings[k]?.r);M.group.name="rubble",u.scene.add(M.group),await t("the car");const T=Og(n),D=(()=>{try{return localStorage.getItem("p2p.car")}catch{return null}})();let w=Math.min(T.length-1,Math.max(0,Math.floor(Number(Nn.get("car")??D??0))||0));const b=Math.max(0,Math.min(120,Math.floor(Number(Nn.get("traffic")??36))||0)),A=(()=>{try{return localStorage.getItem("p2p.soft")}catch{return null}})();let U=(Nn.get("soft")??A??"1")!=="0",L=new Ec(n,a,hh,w);L.wantTraffic(b);const G=k=>{const Z=T[k],ie=new ix({halfTrack:Z.param("HALF_TRACK"),axleFront:Z.param("AXLE_FRONT"),axleRear:Z.param("AXLE_REAR"),wheelRadius:Z.param("WHEEL_RADIUS"),overhang:Z.param("OVERHANG")},u.reflections,{...rx(Z.name),roof:Z.param("CABIN_TOP")+.015});return ie.group.name="car",ie.loose.name="car smoke",u.scene.add(ie.group,ie.loose),ie};let z=G(w),N=!1;const I=Ng(n),R=new jr(I,u.reflections);u.scene.add(R.group);const W=new l_(document.body),P=new c_,H=1/L.tickRate,J=L.stateLength,he=new Float32Array(J),se=new Float32Array(J),Q=new Float32Array(J);let q={start:0,car:w,inputs:[],ticks:0,digest:""},K=null,ue={throttle:0,brake:0};const _e=k=>{const Z=performance.now();L.drop(),L=new Ec(n,a,hh,w),L.wantTraffic(b),L.setSoft(U);const ie=o.starts[k]??o.starts[0];return L.place(ie.x,ie.z,ie.heading),z.useSoft(U?L.softBuilt():null),N=!1,L.read(se),he.set(se),q={start:k,car:w,inputs:[],ticks:0,digest:""},_.reset(),v.reset(),M.reset(),E.reset(),De=0,d.cut(),i.setPlace(ie.label),performance.now()-Z},Ee=k=>{if(!(k===w||!T[k])){w=k;try{localStorage.setItem("p2p.car",String(k))}catch{}u.scene.remove(z.group,z.loose),z.group.traverse(Z=>{const ie=Z;ie.isMesh&&ie.geometry.dispose()}),z=G(k),K=null,_e(q.start),i.pickedCar(k),i.toast(`${T[k].name}: ${T[k].says}`,3200)}},Ue=(k=q.start)=>{K=null;const Z=_e(k);i.toast(`restart in ${Z.toFixed(0)} ms`,1200)},Ge=()=>{if(K||q.ticks===0){i.toast("drive first, then replay it");return}const k={...q,inputs:q.inputs.slice(),digest:L.digest()};_e(k.start),K={of:k,at:0},i.toast(`replaying ${k.ticks} ticks from their inputs`)},O=()=>{if(!K)return;const{of:k}=K,Z=L.digest(),ie=Z===k.digest;i.report(`replay of ${k.ticks} ticks (${(k.ticks*H).toFixed(1)} s)
driven:   ${k.digest}
replayed: ${Z}
${ie?"SAME: the run is its inputs":"DIFFERENT: this is a bug, please send this text"}`),i.toast(ie?"replay ended where the drive did, to the bit":"replay DIFFERS from the drive",4e3),i.toggleMenu(!0),q={...k,inputs:k.inputs.slice()},K=null},me=[0,0,0,0];let De=0;const Re=()=>{let k;if(K){const Z=K.at*4,ie=K.of.inputs;k={steer:ie[Z],throttle:ie[Z+1],brake:ie[Z+2],handbrake:ie[Z+3]},K.at++}else k=W.sample(H);q.inputs.push(k.steer,k.throttle,k.brake,k.handbrake),he.set(se),L.step(k),L.read(se),q.ticks++,ue=k,K&&K.at>=K.of.ticks&&O()};i.starts(o.starts.map(k=>k.label),k=>Ue(k)),i.cars(T.map(k=>({name:k.name,says:k.says})),w,Ee),i.anywhere(r?.label??null,async k=>(await _x(k)).map(ie=>({label:ie.label,go:()=>location.assign(Yo(ie))})),()=>location.assign(Yo(null))),i.on("b-restart",()=>Ue()),i.on("b-camera",()=>i.toast(`camera: ${d.next()}`,900)),i.on("b-replay",()=>{i.toggleMenu(!1),Ge()}),i.on("b-sound",()=>{P.enabled=!P.enabled,i.mark("b-sound",P.enabled)}),i.mark("b-soft",U),i.on("b-soft",()=>{U=!U;try{localStorage.setItem("p2p.soft",U?"1":"0")}catch{}i.mark("b-soft",U),K=null,_e(q.start),i.toast(U?"soft-body damage: the body bends, panels come off, the engine takes it":"damage as four dents",2600)}),i.on("b-check",()=>void b_(n,i));let Me=Nn.has("prof"),ze=0,Le=null,Xe=null,Je=null;i.on("b-frames",()=>{Me=!Me,i.mark("b-frames",Me),Me||i.report("")}),i.mark("b-frames",Me);const Ye=new v_(o,c),F=new xt(new Qr(2.2,2.2,160,20,1,!0).translate(0,80,0),new Ss({color:16765500,transparent:!0,opacity:.4,blending:Ja,depthWrite:!1,side:en,fog:!1}));F.name="target",F.visible=!1,F.frustumCulled=!1,u.scene.add(F);let S=0;Ye.onTarget=k=>{F.visible=!!k,k&&(F.position.set(k.x,c.at(k.x,k.z),k.z),S=q.ticks,i.toast(`target: ${k.label}`,1400))},W.onKey=k=>{k==="KeyN"?Ye.toggle():k==="Escape"?Ye.toggle(!1):k==="KeyR"?Ue():k==="KeyC"?d.next():k==="KeyM"?i.toggleMenu():k==="KeyP"&&Ge()},window.addEventListener("pointerdown",()=>P.start(),{passive:!0}),window.addEventListener("keydown",()=>P.start()),window.addEventListener("resize",()=>u.resize(d.camera)),u.resize(d.camera),_e(Number(Nn.get("start")??0)),i.loaded(),h&&i.toast(h,5e3);const X=[],ae=[];let le=performance.now(),ce=0;const ke=new B,ve=k=>{const Z=Math.min(.1,(k-le)/1e3);le=k,De+=Z;const ie=performance.now();let oe=0;for(;De>=H&&oe<12;)Re(),De-=H,oe++;oe===12&&(De=0);const we=performance.now()-ie;if(oe){const j=L.movedProps();me[0]=(me[0]??0)+j.length/8,_.apply(j),E.apply(j,L.propsBase),M.apply(L.rubble(),te=>L.panel(te));for(const te of L.events())if(me[te.what]=(me[te.what]??0)+1,te.what===cn.BLOW)P.thump(te.b);else if(te.what===cn.GLASS)P.glass(),v.shatter(te.a,te.b);else if(te.what===cn.SNAPPED)P.thump(te.b*.4);else if(te.what===cn.HORN){const ge=R.at.get(te.a);ge&&P.horn(Math.hypot(ge.x-se[Se.POS],ge.z-se[Se.POS+2]))}else if(te.what===cn.WRECK)P.thump(te.b*.6);else if(te.what===cn.SPLASH)P.splash(te.a),z.splash(te.a),i.toast("in the bay",1600);else if(te.what===cn.PANEL){const ge=L.panel(te.a);ge&&(M.gaveWay(ge,te.b),P.thump(Math.min(9,2+te.b*.2)))}else if(te.what===cn.FELL){const ge=o.buildings[te.a];if(ge){let pe=0,fe=0;for(const[Te,Ke]of ge.r)pe+=Te,fe+=Ke;pe/=ge.r.length,fe/=ge.r.length;let Ce=0;for(const[Te,Ke]of ge.r)Ce=Math.max(Ce,Math.hypot(Te-pe,Ke-fe));M.fell(te.a,{x:pe,z:fe,r:Ce,y:ge.y0,high:ge.y1-ge.y0})}P.thump(9),i.toast("a building came down",2200)}else te.what===cn.CAME_OFF&&(P.thump(4),i.toast(te.a>=10?"a wheel came off":`the ${["","bonnet","boot lid","front bumper","rear bumper","left door","right door"][te.a]??"panel"} came off`,1800))}const V=De/H;for(let j=0;j<J;j++)Q[j]=he[j]+(se[j]-he[j])*V;for(let j=0;j<4;j++){const te=Se.WHEELS+j*Se.WHEEL_STRIDE+Se.W_ANGLE;Math.abs(se[te]-he[te])>3&&(Q[te]=se[te])}if(Le){for(let j=0;j<4;j++)Q[Se.CRUSH+j]=Le[j];Q[Se.POWER]=Le[4]}if(U&&oe){const j=se[Se.SOFT_AWAKE]>.5;if(j||N){const te=L.softNow();z.soft(te.nodes,se[Se.HOLDS],te.loose),N=j||te.loose.length>0}}if(z.update(Q,ue.brake>0&&se[Se.GEAR]>0,Z),d.update(Q,Z),Xe){const j=new B(Q[Se.POS],Q[Se.POS+1],Q[Se.POS+2]),te=new Bt(Q[Se.ROT],Q[Se.ROT+1],Q[Se.ROT+2],Q[Se.ROT+3]).normalize();d.camera.position.set(...Xe).applyQuaternion(te).add(j),d.camera.lookAt(j.x,j.y+.2,j.z),d.camera.fov=50,d.camera.updateProjectionMatrix()}Je&&(d.camera.position.set(Je[0][0],Je[0][1],Je[0][2]),d.camera.lookAt(Je[1][0],Je[1][1],Je[1][2]),d.camera.fov=62,d.camera.updateProjectionMatrix()),m.update(d.camera.position),_.update(d.camera.position),x.update(d.camera.position),v.update(Z,d.camera.position),E.update(d.camera.position),M.update(Z);{const j=L.traffic();R.update(j.cars,j.count,Z,d.camera.position)}ke.set(Q[Se.POS],Q[Se.POS+1],Q[Se.POS+2]),u.follow(ke,d.camera.position),P.update(se,ue.throttle/1e3),i.update(se,q.ticks*H,!!K),se[Se.DROWNED]>.5&&se[Se.FLOOD]>.98&&Math.abs(se[Se.SPEED])<.6?(ze+=Z,ze>3.5&&!K&&(ze=0,Ue(),i.toast("sunk. back on the road",2400))):ze=0;{const j=new Bt(Q[Se.ROT],Q[Se.ROT+1],Q[Se.ROT+2],Q[Se.ROT+3]).normalize(),te=new B(0,0,-1).applyQuaternion(j);Ye.update(Q[Se.POS],Q[Se.POS+2],Math.atan2(te.x,-te.z),Q[Se.SPEED],Z);const ge=Ye.target;if(ge&&Math.hypot(ge.x-Q[Se.POS],ge.z-Q[Se.POS+2])<y_){q.ticks<S&&(S=0);const pe=(q.ticks-S)*H;i.toast(`there: ${ge.label}, ${Math.floor(pe/60)}:${(pe%60).toFixed(1).padStart(4,"0")} from setting it`,3200),Ye.setTarget(null)}}if(u.draw(d.camera),X.push(Z*1e3),ae.push(we),X.length>600&&(X.shift(),ae.shift()),ce+=Z,Me&&ce>1){ce=0;const j=M.counts();i.report(`${fh(X,ae,u,d.camera,_.counts)}
walls: ${L.count(Ut.WALLS)} stood as ${L.count(Ut.WALL_COLLIDERS)} slabs; ${L.count(Ut.BROKEN)} panels gone, ${L.count(Ut.FALLEN)} buildings down; bodies ${L.count(Ut.AWAKE)} awake of ${L.count(Ut.BODIES)}; drawn ${j.pieces} pieces, ${j.parts} parts, ${j.breached} buildings with holes`)}requestAnimationFrame(ve)};requestAnimationFrame(ve);let Fe=null,Ne=0,re=null;__&&(window.__p2p={ready:!0,page:o,made:e,scene:u.scene,state:()=>Array.from(se),tick:()=>q.ticks,digest:()=>L.digest(),drive:k=>{W.override=k},advance:k=>{for(let Z=0;Z<k;Z++)Re()},restart:Ue,startReplay:Ge,place:(k,Z,ie)=>{L.place(k,Z,ie),L.read(se),he.set(se),d.cut()},placeAt:(k,Z,ie,oe)=>{L.placeAt(k,Z,ie,oe),L.read(se),he.set(se),d.cut()},seen:()=>({moved:me[0],blows:me[cn.BLOW],snapped:me[cn.SNAPPED],glass:me[cn.GLASS],panels:me[cn.PANEL]??0,fell:me[cn.FELL]??0}),panel:k=>L.panel(k),panelCount:()=>L.panelCount,panelsOf:k=>{(!Fe||re!==L)&&(Fe=new Map,Ne=0,re=L);for(let Z=Ne;Z<L.panelCount;Z++){const ie=L.panel(Z);let oe=Fe.get(ie.building);oe||Fe.set(ie.building,oe=[]),oe.push(Z)}return Ne=L.panelCount,(Fe.get(k)??[]).map(Z=>L.panel(Z))},panelKinds:()=>Sc(n),inside:k=>L.inside(k),insideDrawn:k=>E.drawn(k),roomKinds:()=>wc(n),propKindNames:()=>bc(n),insides:()=>({sim:{planned:L.count(Ut.PLANNED),partitions:L.count(Ut.PARTITIONS),held:L.count(Ut.HELD),things:L.count(Ut.THINGS),armed:L.count(Ut.ARMED),own:L.count(Ut.OWN)},drawn:E.counts()}),propOrigin:k=>L.propOrigin(k),propsBase:()=>L.propsBase,walls:()=>({sim:{bodies:L.count(Ut.BODIES),awake:L.count(Ut.AWAKE),walls:L.count(Ut.WALLS),colliders:L.count(Ut.WALL_COLLIDERS),pieces:L.count(Ut.PIECES),parts:L.count(Ut.PARTS),broken:L.count(Ut.BROKEN),fallen:L.count(Ut.FALLEN)},drawn:M.counts()}),replaying:()=>!!K,camera:k=>{d.mode=k,d.cut()},cars:()=>T.map(k=>k.name),car:k=>Ee(k),traffic:()=>{const k=L.traffic(),Z=[];for(let ie=0;ie<k.count;ie++){const oe=ie*ir,we=k.cars;Z.push({i:we[oe+Pt.INDEX],x:we[oe+Pt.POS],y:we[oe+Pt.POS+1],z:we[oe+Pt.POS+2],speed:we[oe+Pt.SPEED],flags:we[oe+Pt.FLAGS],kind:we[oe+Pt.KIND],name:I[we[oe+Pt.KIND]]?.name??"?",curve:we[oe+Pt.CURVE]})}return Z},map:{toggle:k=>Ye.toggle(k),zoom:k=>Ye.setZoom(k),tap:(k,Z)=>Ye.tap(k,Z),clear:()=>Ye.setTarget(null),state:()=>Ye.probe()},show:k=>{Le=k},look:k=>{Xe=k},view:(k,Z)=>{Je=k&&Z?[k,Z]:null},ground:(k,Z)=>c.at(k,Z),selftest:k=>xl(n.p2p_selftest(k)),frames:()=>fh(X,ae,u,d.camera,_.counts),info:()=>({calls:u.renderer.info.render.calls,triangles:u.renderer.info.render.triangles})})}function Za(i,e){return i[Math.min(i.length-1,Math.floor(i.length*e))]??0}function w_(i,e){const t=new Jr().setFromProjectionMatrix(new vt().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)),n=new pi,s=[];for(const r of i.scene.children){if(!r.name)continue;let a=0,o=0;r.traverseVisible(l=>{const c=l;if(!c.isMesh)return;const h=l,f=h.isInstancedMesh?h.boundingSphere:c.geometry.boundingSphere;if(f&&(n.copy(f).applyMatrix4(c.matrixWorld),!t.intersectsSphere(n)))return;const u=c.geometry,d=(u.index?u.index.count:u.getAttribute("position").count)/3;a+=d*(h.isInstancedMesh?h.count:1),o++}),s.push(`${r.name} ${Math.round(a/1e3)}k/${o}`)}return s.join(", ")}function fh(i,e,t,n,s){const r=[...i].sort((c,h)=>c-h),a=[...e].sort((c,h)=>c-h),o=t.renderer.info.render,l=t.renderer.getDrawingBufferSize(new $e);return[`frames (last ${i.length}): median ${Za(r,.5).toFixed(1)} ms, 95th ${Za(r,.95).toFixed(1)}, worst ${(r[r.length-1]??0).toFixed(1)}`,`sim a frame: median ${Za(a,.5).toFixed(2)} ms, worst ${(a[a.length-1]??0).toFixed(2)}`,`drawn: ${o.triangles.toLocaleString()} triangles in ${o.calls} calls (shadow pass included), ${l.x} x ${l.y} px (dpr ${t.knobs.dpr}), shadows ${t.knobs.shadows?"on":"off"}`,`in view, thousand triangles / meshes: ${w_(t,n)}`,`props: ${Object.entries(s).map(([c,h])=>`${h} ${c}`).join(", ")}`,navigator.userAgent].join(`
`)}async function b_(i,e){e.report("running the reference drive…"),await Jo(),await Jo();let t=null;try{const l=await fetch(`./core/selftest.json${os}`);l.ok&&(t=await l.json())}catch{}const n=t?.ticks??12e3,s=performance.now(),r=xl(i.p2p_selftest(n)),a=performance.now()-s,o=t?r===t.digest?"SAME as the build machine: this device runs the same race":"DIFFERENT from the build machine: please send this text":"no reference digest shipped with this build";e.report([`reference drive, ${n} ticks (${(n/i.p2p_tick_rate()).toFixed(0)} s of driving)`,`this device: ${r}`,`reference:   ${t?.digest??"none"}${t?` (${t.made})`:""}`,o,`${a.toFixed(0)} ms: ${(a/n*1e3).toFixed(1)} µs a tick, one car, world build included`,navigator.userAgent].join(`
`))}M_().catch(i=>{console.error(i);const e=document.getElementById("loading-step");if(e){if(e.className="err",e.textContent=`could not start: ${i instanceof Error?i.message:String(i)}`,Zh(Nn)){const t=document.createElement("a");t.href=Yo(null),t.textContent="back to San Francisco",t.style.cssText="color:#f2f0ea;pointer-events:auto",e.after(t)}}else document.body.insertAdjacentHTML("beforeend",`<div style="position:fixed;inset:auto 8px 8px 8px;z-index:99;background:#400;color:#fff;padding:8px;border-radius:8px">${String(i)}</div>`)});
