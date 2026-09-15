(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vi="180",Sf=0,nc=1,Af=2,tu=1,nu=2,jn=3,kn=0,Bt=1,Wt=2,zt=0,Fi=1,ua=2,ic=3,sc=4,_f=5,Ui=100,Ef=101,Tf=102,bf=103,Cf=104,Df=200,Rf=201,If=202,Pf=203,_o=204,Eo=205,Lf=206,Bf=207,Uf=208,zf=209,Ff=210,Nf=211,Of=212,kf=213,Gf=214,To=0,fa=1,bo=2,Ms=3,Co=4,Do=5,Ro=6,Io=7,iu=0,Hf=1,Vf=2,$n=0,Wf=1,Xf=2,Yf=3,qf=4,Qf=5,Kf=6,Zf=7,su=300,ys=301,ws=302,Po=303,Lo=304,Ea=306,nr=1e3,Bn=1001,Bo=1002,At=1003,jf=1004,pr=1005,at=1006,La=1007,Un=1008,_t=1009,ru=1010,au=1011,ir=1012,Al=1013,Oi=1014,on=1015,Dn=1016,_l=1017,El=1018,Ss=1020,ou=35902,lu=35899,cu=1021,hu=1022,Gt=1023,sr=1026,As=1027,Mi=1028,Tl=1029,bl=1030,Cl=1031,Dl=1033,na=33776,ia=33777,sa=33778,ra=33779,Uo=35840,zo=35841,Fo=35842,No=35843,Oo=36196,ko=37492,Go=37496,Ho=37808,Vo=37809,Wo=37810,Xo=37811,Yo=37812,qo=37813,Qo=37814,Ko=37815,Zo=37816,jo=37817,Jo=37818,$o=37819,el=37820,tl=37821,nl=36492,il=36494,sl=36495,rl=36283,al=36284,ol=36285,ll=36286,Rn=3200,uu=3201,Rl=0,Jf=1,pn="",lt="srgb",yi="srgb-linear",da="linear",dt="srgb",Qi=7680,rc=519,$f=512,ed=513,td=514,fu=515,nd=516,id=517,sd=518,rd=519,ac=35044,pa="300 es",zn=2e3,ma=2001;class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ba=Math.PI/180,cl=180/Math.PI;function hr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function ad(n,e){return(n%e+e)%e}function Ua(n,e,t){return(1-t)*n+t*e}function Ps(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ki{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const u=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(f!==v||l!==u||c!==d||h!==m){let g=1-o;const p=l*u+c*d+h*m+f*v,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const S=Math.sqrt(M),E=Math.atan2(S,p*x);g=Math.sin(g*E)/S,o=Math.sin(o*E)/S}const y=o*x;if(l=l*g+u*y,c=c*g+d*y,h=h*g+m*y,f=f*g+v*y,g===1-o){const S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-o*d,e[t+2]=c*m+h*d+o*u-l*f,e[t+3]=h*m-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new V,oc=new ki;class Ye{constructor(e,t,i,s,r,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],v=s[0],g=s[3],p=s[6],x=s[1],M=s[4],y=s[7],S=s[2],E=s[5],D=s[8];return r[0]=a*v+o*x+l*S,r[3]=a*g+o*M+l*E,r[6]=a*p+o*y+l*D,r[1]=c*v+h*x+f*S,r[4]=c*g+h*M+f*E,r[7]=c*p+h*y+f*D,r[2]=u*v+d*x+m*S,r[5]=u*g+d*M+m*E,r[8]=u*p+d*y+m*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=t*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=f*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new Ye;function du(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function od(){const n=ga("canvas");return n.style.display="block",n}const lc={};function rr(n){n in lc||(lc[n]=!0,console.warn(n))}function ld(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const cc=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cd(){const n={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pn?da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[yi]:{primaries:e,whitePoint:i,transfer:da,toXYZ:cc,fromXYZ:hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:lt},outputColorSpaceConfig:{drawingBufferColorSpace:lt}},[lt]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:cc,fromXYZ:hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:lt}}}),n}const it=cd();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ki;class hd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ki===void 0&&(Ki=ga("canvas")),Ki.width=e.width,Ki.height=e.height;const s=Ki.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ki}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ga("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ei(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ei(t[i]/255)*255):t[i]=ei(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ud=0;class Il{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Na(s[a].image)):r.push(Na(s[a]))}else r=Na(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fd=0;const Oa=new V;class Ft extends ti{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Bn,s=Bn,r=at,a=Un,o=Gt,l=_t,c=Ft.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=hr(),this.name="",this.source=new Il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oa).x}get height(){return this.source.getSize(Oa).y}get depth(){return this.source.getSize(Oa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nr:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nr:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=su;Ft.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(d+1)/2,S=(p+1)/2,E=(h+u)/4,D=(f+v)/4,C=(m+g)/4;return M>y&&M>S?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=D/i):y>S?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=C/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=D/r,s=C/r),this.set(i,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(f-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dd extends ti{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:at,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Ft(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:at,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Il(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ht extends dd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pl extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class va extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pd extends ht{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new va(null,e,t,i),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class Wi{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mr.copy(i.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),gr.subVectors(this.max,Ls),Zi.subVectors(e.a,Ls),ji.subVectors(e.b,Ls),Ji.subVectors(e.c,Ls),ii.subVectors(ji,Zi),si.subVectors(Ji,ji),_i.subVectors(Zi,Ji);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-_i.z,_i.y,ii.z,0,-ii.x,si.z,0,-si.x,_i.z,0,-_i.x,-ii.y,ii.x,0,-si.y,si.x,0,-_i.y,_i.x,0];return!ka(t,Zi,ji,Ji,gr)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,Zi,ji,Ji,gr))?!1:(vr.crossVectors(ii,si),t=[vr.x,vr.y,vr.z],ka(t,Zi,ji,Ji,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new V,new V,new V,new V,new V,new V,new V,new V],Sn=new V,mr=new Wi,Zi=new V,ji=new V,Ji=new V,ii=new V,si=new V,_i=new V,Ls=new V,gr=new V,vr=new V,Ei=new V;function ka(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ei.fromArray(n,r);const o=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),h=i.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const md=new Wi,Bs=new V,Ga=new V;class Si{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):md.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Bs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Ga)),this.expandByPoint(Bs.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new V,Ha=new V,xr=new V,ri=new V,Va=new V,Mr=new V,Wa=new V;class pu{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ha.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Ha);const r=e.distanceTo(t)*.5,a=-this.direction.dot(xr),o=ri.dot(this.direction),l=-ri.dot(xr),c=ri.lengthSq(),h=Math.abs(1-a*a);let f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ha).addScaledVector(xr,u),d}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,r){Va.subVectors(t,e),Mr.subVectors(i,e),Wa.crossVectors(Va,Mr);let a=this.direction.dot(Wa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const l=o*this.direction.dot(Mr.crossVectors(ri,Mr));if(l<0)return null;const c=o*this.direction.dot(Va.cross(ri));if(c<0||l+c>a)return null;const h=-o*ri.dot(Wa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,i,s,r,a,o,l,c,h,f,u,d,m,v,g){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,f,u,d,m,v,g)}set(e,t,i,s,r,a,o,l,c,h,f,u,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),a=1/$i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,d=a*f,m=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,m=c*h,v=c*f;t[0]=u+v*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,m=c*h,v=c*f;t[0]=u-v*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,m=o*h,v=o*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-u*f,t[8]=m*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-v*f}else if(e.order==="XZY"){const u=a*l,d=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=a*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,vd)}lookAt(e,t,i){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),ai.crossVectors(i,hn),ai.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),ai.crossVectors(i,hn)),ai.normalize(),yr.crossVectors(hn,ai),s[0]=ai.x,s[4]=yr.x,s[8]=hn.x,s[1]=ai.y,s[5]=yr.y,s[9]=hn.y,s[2]=ai.z,s[6]=yr.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],v=i[6],g=i[10],p=i[14],x=i[3],M=i[7],y=i[11],S=i[15],E=s[0],D=s[4],C=s[8],A=s[12],w=s[1],_=s[5],I=s[9],z=s[13],F=s[2],O=s[6],P=s[10],L=s[14],U=s[3],W=s[7],Q=s[11],j=s[15];return r[0]=a*E+o*w+l*F+c*U,r[4]=a*D+o*_+l*O+c*W,r[8]=a*C+o*I+l*P+c*Q,r[12]=a*A+o*z+l*L+c*j,r[1]=h*E+f*w+u*F+d*U,r[5]=h*D+f*_+u*O+d*W,r[9]=h*C+f*I+u*P+d*Q,r[13]=h*A+f*z+u*L+d*j,r[2]=m*E+v*w+g*F+p*U,r[6]=m*D+v*_+g*O+p*W,r[10]=m*C+v*I+g*P+p*Q,r[14]=m*A+v*z+g*L+p*j,r[3]=x*E+M*w+y*F+S*U,r[7]=x*D+M*_+y*O+S*W,r[11]=x*C+M*I+y*P+S*Q,r[15]=x*A+M*z+y*L+S*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*l*f-s*c*f-r*o*u+i*c*u+s*o*d-i*l*d)+v*(+t*l*d-t*c*u+r*a*u-s*a*d+s*c*h-r*l*h)+g*(+t*c*f-t*o*d-r*a*f+i*a*d+r*o*h-i*c*h)+p*(-s*o*h-t*l*f+t*o*u+s*a*f-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],x=f*g*c-v*u*c+v*l*d-o*g*d-f*l*p+o*u*p,M=m*u*c-h*g*c-m*l*d+a*g*d+h*l*p-a*u*p,y=h*v*c-m*f*c+m*o*d-a*v*d-h*o*p+a*f*p,S=m*f*l-h*v*l-m*o*u+a*v*u+h*o*g-a*f*g,E=t*x+i*M+s*y+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/E;return e[0]=x*D,e[1]=(v*u*r-f*g*r-v*s*d+i*g*d+f*s*p-i*u*p)*D,e[2]=(o*g*r-v*l*r+v*s*c-i*g*c-o*s*p+i*l*p)*D,e[3]=(f*l*r-o*u*r-f*s*c+i*u*c+o*s*d-i*l*d)*D,e[4]=M*D,e[5]=(h*g*r-m*u*r+m*s*d-t*g*d-h*s*p+t*u*p)*D,e[6]=(m*l*r-a*g*r-m*s*c+t*g*c+a*s*p-t*l*p)*D,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*d+t*l*d)*D,e[8]=y*D,e[9]=(m*f*r-h*v*r-m*i*d+t*v*d+h*i*p-t*f*p)*D,e[10]=(a*v*r-m*o*r+m*i*c-t*v*c-a*i*p+t*o*p)*D,e[11]=(h*o*r-a*f*r-h*i*c+t*f*c+a*i*d-t*o*d)*D,e[12]=S*D,e[13]=(h*v*s-m*f*s+m*i*u-t*v*u-h*i*g+t*f*g)*D,e[14]=(m*o*s-a*v*s-m*i*l+t*v*l+a*i*g-t*o*g)*D,e[15]=(a*f*s-h*o*s+h*i*l-t*f*l-a*i*u+t*o*u)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,v=a*h,g=a*f,p=o*f,x=l*c,M=l*h,y=l*f,S=i.x,E=i.y,D=i.z;return s[0]=(1-(v+p))*S,s[1]=(d+y)*S,s[2]=(m-M)*S,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(u+p))*E,s[6]=(g+x)*E,s[7]=0,s[8]=(m+M)*D,s[9]=(g-x)*D,s[10]=(1-(u+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const a=$i.set(s[4],s[5],s[6]).length(),o=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);const c=1/r,h=1/a,f=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,t.setFromRotationMatrix(An),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=zn,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===zn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ma)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=zn,l=!1){const c=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s);let m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===zn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===ma)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $i=new V,An=new Ze,gd=new V(0,0,0),vd=new V(1,1,1),ai=new V,yr=new V,hn=new V,uc=new Ze,fc=new ki;class Gn{constructor(e=0,t=0,i=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fc.setFromEuler(this),this.setFromQuaternion(fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xd=0;const dc=new V,es=new ki,qn=new Ze,wr=new V,Us=new V,Md=new V,yd=new ki,pc=new V(1,0,0),mc=new V(0,1,0),gc=new V(0,0,1),vc={type:"added"},wd={type:"removed"},ts={type:"childadded",child:null},Xa={type:"childremoved",child:null};class Ht extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new V,t=new Gn,i=new ki,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Ye}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(pc,e)}rotateY(e){return this.rotateOnAxis(mc,e)}rotateZ(e){return this.rotateOnAxis(gc,e)}translateOnAxis(e,t){return dc.copy(e).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pc,e)}translateY(e){return this.translateOnAxis(mc,e)}translateZ(e){return this.translateOnAxis(gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wr.copy(e):wr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Us,wr,this.up):qn.lookAt(wr,Us,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(qn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vc),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wd),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vc),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,Md),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new V(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new V,Qn=new V,Ya=new V,Kn=new V,ns=new V,is=new V,xc=new V,qa=new V,Qa=new V,Ka=new V,Za=new Mt,ja=new Mt,Ja=new Mt;class Tn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_n.subVectors(s,t),Qn.subVectors(i,t),Ya.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(Qn),l=_n.dot(Ya),c=Qn.dot(Qn),h=Qn.dot(Ya),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Za.setScalar(0),ja.setScalar(0),Ja.setScalar(0),Za.fromBufferAttribute(e,t),ja.fromBufferAttribute(e,i),Ja.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Za,r.x),a.addScaledVector(ja,r.y),a.addScaledVector(Ja,r.z),a}static isFrontFacing(e,t,i,s){return _n.subVectors(i,t),Qn.subVectors(e,t),_n.cross(Qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),_n.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ns.subVectors(s,i),is.subVectors(r,i),qa.subVectors(e,i);const l=ns.dot(qa),c=is.dot(qa);if(l<=0&&c<=0)return t.copy(i);Qa.subVectors(e,s);const h=ns.dot(Qa),f=is.dot(Qa);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ns,a);Ka.subVectors(e,r);const d=ns.dot(Ka),m=is.dot(Ka);if(m>=0&&d<=m)return t.copy(r);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(is,o);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return xc.subVectors(r,s),o=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(xc,o);const p=1/(g+v+u);return a=v*p,o=u*p,t.copy(i).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function $a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=ad(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=$a(a,r,e+1/3),this.g=$a(a,r,e),this.b=$a(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=lt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){const i=gu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return it.workingToColorSpace(qt.copy(this),e),Math.round(je(qt.r*255,0,255))*65536+Math.round(je(qt.g*255,0,255))*256+Math.round(je(qt.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(qt.copy(this),t);const i=qt.r,s=qt.g,r=qt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=lt){it.workingToColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,s=qt.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Sr);const i=Ua(oi.h,Sr.h,t),s=Ua(oi.s,Sr.s,t),r=Ua(oi.l,Sr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new qe;qe.NAMES=gu;let Sd=0;class ni extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=Fi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=Eo,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(i.blending=this.blending),this.side!==kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_o&&(i.blendSrc=this.blendSrc),this.blendDst!==Eo&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vu extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new V,Ar=new Ce;let Ad=0;class Ge{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ad++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ac,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),e}}class xu extends Ge{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mu extends Ge{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends Ge{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _d=0;const xn=new Ze,eo=new Ht,ss=new V,un=new Wi,zs=new Wi,kt=new V;class Xt extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(du(e)?Mu:xu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(un.min,zs.min),un.expandByPoint(kt),kt.addVectors(un.max,zs.max),un.expandByPoint(kt)):(un.expandByPoint(zs.min),un.expandByPoint(zs.max))}un.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)kt.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(e,c),kt.add(ss)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new V,l[C]=new V;const c=new V,h=new V,f=new V,u=new Ce,d=new Ce,m=new Ce,v=new V,g=new V;function p(C,A,w){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,A),f.fromBufferAttribute(i,w),u.fromBufferAttribute(r,C),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,w),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const _=1/(d.x*m.y-m.x*d.y);isFinite(_)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(_),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(_),o[C].add(v),o[A].add(v),o[w].add(v),l[C].add(g),l[A].add(g),l[w].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,A=x.length;C<A;++C){const w=x[C],_=w.start,I=w.count;for(let z=_,F=_+I;z<F;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const M=new V,y=new V,S=new V,E=new V;function D(C){S.fromBufferAttribute(s,C),E.copy(S);const A=o[C];M.copy(A),M.sub(S.multiplyScalar(S.dot(A))).normalize(),y.crossVectors(E,A);const _=y.dot(l[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,_)}for(let C=0,A=x.length;C<A;++C){const w=x[C],_=w.start,I=w.count;for(let z=_,F=_+I;z<F;z+=3)D(e.getX(z+0)),D(e.getX(z+1)),D(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ge(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,h=new V,f=new V;if(e)for(let u=0,d=e.count;u<d;u+=3){const m=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new Ge(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new Ze,Ti=new pu,_r=new Si,yc=new V,Er=new V,Tr=new V,br=new V,to=new V,Cr=new V,wc=new V,Dr=new V;class wt extends Ht{constructor(e=new Xt,t=new vu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(to.fromBufferAttribute(f,e),a?Cr.addScaledVector(to,h):Cr.addScaledVector(to.sub(t),h))}t.add(Cr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(_r.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(_r,yc)===null||Ti.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(Mc.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(Mc),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,S=M;y<S;y+=3){const E=o.getX(y),D=o.getX(y+1),C=o.getX(y+2);s=Rr(this,p,e,i,c,h,f,E,D,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const x=o.getX(g),M=o.getX(g+1),y=o.getX(g+2);s=Rr(this,a,e,i,c,h,f,x,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,S=M;y<S;y+=3){const E=y,D=y+1,C=y+2;s=Rr(this,p,e,i,c,h,f,E,D,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const x=g,M=g+1,y=g+2;s=Rr(this,a,e,i,c,h,f,x,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Ed(n,e,t,i,s,r,a,o){let l;if(e.side===Bt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===kn,o),l===null)return null;Dr.copy(o),Dr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:n}}function Rr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Er),n.getVertexPosition(l,Tr),n.getVertexPosition(c,br);const h=Ed(n,e,t,i,Er,Tr,br,wc);if(h){const f=new V;Tn.getBarycoord(wc,Er,Tr,br,f),s&&(h.uv=Tn.getInterpolatedAttribute(s,o,l,c,f,new Ce)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,o,l,c,f,new Ce)),a&&(h.normal=Tn.getInterpolatedAttribute(a,o,l,c,f,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new V,materialIndex:0};Tn.getNormal(Er,Tr,br,u.normal),h.face=u,h.barycoord=f}return h}class Gi extends Xt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(h,3)),this.setAttribute("uv",new Nn(f,2));function m(v,g,p,x,M,y,S,E,D,C,A){const w=y/D,_=S/C,I=y/2,z=S/2,F=E/2,O=D+1,P=C+1;let L=0,U=0;const W=new V;for(let Q=0;Q<P;Q++){const j=Q*_-z;for(let ue=0;ue<O;ue++){const Ae=ue*w-I;W[v]=Ae*x,W[g]=j*M,W[p]=F,c.push(W.x,W.y,W.z),W[v]=0,W[g]=0,W[p]=E>0?1:-1,h.push(W.x,W.y,W.z),f.push(ue/D),f.push(1-Q/C),L+=1}}for(let Q=0;Q<C;Q++)for(let j=0;j<D;j++){const ue=u+j+O*Q,Ae=u+j+O*(Q+1),_e=u+(j+1)+O*(Q+1),we=u+(j+1)+O*Q;l.push(ue,Ae,we),l.push(Ae,_e,we),U+=6}o.addGroup(d,U,A),d+=U,u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=_s(n[t]);for(const s in i)e[s]=i[s]}return e}function Td(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const bd={clone:_s,merge:Jt};var Cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ot extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cd,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wu extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new V,Sc=new Ce,Ac=new Ce;class $t extends wu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Sc,Ac),t.subVectors(Ac,Sc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,as=1;class Rd extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $t(rs,as,e,t);s.layers=this.layers,this.add(s);const r=new $t(rs,as,e,t);r.layers=this.layers,this.add(r);const a=new $t(rs,as,e,t);a.layers=this.layers,this.add(a);const o=new $t(rs,as,e,t);o.layers=this.layers,this.add(o);const l=new $t(rs,as,e,t);l.layers=this.layers,this.add(l);const c=new $t(rs,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Su extends Ft{constructor(e=[],t=ys,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Id extends ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Su(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gi(5,5,5),r=new ot({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:zt});r.uniforms.tEquirect.value=t;const a=new wt(s,r),o=t.minFilter;return t.minFilter===Un&&(t.minFilter=at),new Rd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class gi extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pd={type:"move"};class no{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ll{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new Ll(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hi extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xa extends Ft{constructor(e=null,t=1,i=1,s,r,a,o,l,c=At,h=At,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi extends Ge{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new Ze,_c=new Ze,Ir=[],Ec=new Wi,Ld=new Ze,Fs=new wt,Ns=new Si;class Bd extends wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ld)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,os),Ec.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Ec)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,os),Ns.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(i),e.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),_c.multiplyMatrices(i,os),Fs.matrixWorld=_c,Fs.raycast(e,Ir);for(let a=0,o=Ir.length;a<o;a++){const l=Ir[a];l.instanceId=r,l.object=this,t.push(l)}Ir.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new xa(new Float32Array(s*this.count),s,this.count,Mi,on));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const io=new V,Ud=new V,zd=new Ye;class pi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=io.subVectors(i,t).cross(Ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(io),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zd.getNormalMatrix(e),s=this.coplanarPoint(io).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Si,Fd=new Ce(.5,.5),Pr=new V;class ur{constructor(e=new pi,t=new pi,i=new pi,s=new pi,r=new pi,a=new pi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],x=r[12],M=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-a,d-h,p-m,S-x).normalize(),s[1].setComponents(c+a,d+h,p+m,S+x).normalize(),s[2].setComponents(c+o,d+f,p+v,S+M).normalize(),s[3].setComponents(c-o,d-f,p-v,S-M).normalize(),i)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,d-u,p-g,S-y).normalize();else if(s[4].setComponents(c-l,d-u,p-g,S-y).normalize(),t===zn)s[5].setComponents(c+l,d+u,p+g,S+y).normalize();else if(t===ma)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=Fd.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Pr.x=s.normal.x>0?e.max.x:e.min.x,Pr.y=s.normal.y>0?e.max.y:e.min.y,Pr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nd extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tc=new Ze,hl=new pu,Lr=new Si,Br=new V;class Au extends Ht{constructor(e=new Xt,t=new Nd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,e.ray.intersectsSphere(Lr)===!1)return;Tc.copy(s).invert(),hl.copy(e.ray).applyMatrix4(Tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=u,v=d;m<v;m++){const g=c.getX(m);Br.fromBufferAttribute(f,g),bc(Br,g,l,s,e,t,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=u,v=d;m<v;m++)Br.fromBufferAttribute(f,m),bc(Br,m,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bc(n,e,t,i,s,r,a){const o=hl.distanceSqToPoint(n);if(o<t){const l=new V;hl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ta extends Ft{constructor(e,t,i=Oi,s,r,a,o=At,l=At,c,h=sr,f=1){if(h!==sr&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Il(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _u extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hn extends Xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const x=p*u-a;for(let M=0;M<c;M++){const y=M*f-r;m.push(y,-x,0),v.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const M=x+c*p,y=x+c*(p+1),S=x+1+c*(p+1),E=x+1+c*p;d.push(M,y,E),d.push(y,S,E)}this.setIndex(d),this.setAttribute("position",new Nn(m,3)),this.setAttribute("normal",new Nn(v,3)),this.setAttribute("uv",new Nn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bl extends Xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new V,u=new V,d=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){const x=[],M=p/i;let y=0;p===0&&a===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const E=S/t;f.x=-e*Math.cos(s+E*r)*Math.sin(a+M*o),f.y=e*Math.cos(a+M*o),f.z=e*Math.sin(s+E*r)*Math.sin(a+M*o),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),g.push(E+y,1-M),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const M=h[p][x+1],y=h[p][x],S=h[p+1][x],E=h[p+1][x+1];(p!==0||a>0)&&d.push(M,y,E),(p!==i-1||l<Math.PI)&&d.push(y,S,E)}this.setIndex(d),this.setAttribute("position",new Nn(m,3)),this.setAttribute("normal",new Nn(v,3)),this.setAttribute("uv",new Nn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cc extends ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ma extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Od extends ni{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Eu extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kd extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gd{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}class Tu extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const so=new Ze,Dc=new V,Rc=new V;class Hd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=_t,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dc),Rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rc),t.updateMatrixWorld(),so.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(so)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ds extends wu{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vd extends Hd{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wd extends Tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Vd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xd extends Tu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yd extends Xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class qd extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class xe{constructor(e){this.value=e}clone(){return new xe(this.value.clone===void 0?this.value:this.value.clone())}}function Ic(n,e,t,i){const s=Qd(i);switch(t){case cu:return n*e;case Mi:return n*e/s.components*s.byteLength;case Tl:return n*e/s.components*s.byteLength;case bl:return n*e*2/s.components*s.byteLength;case Cl:return n*e*2/s.components*s.byteLength;case hu:return n*e*3/s.components*s.byteLength;case Gt:return n*e*4/s.components*s.byteLength;case Dl:return n*e*4/s.components*s.byteLength;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zo:case No:return Math.max(n,16)*Math.max(e,8)/4;case Uo:case Fo:return Math.max(n,8)*Math.max(e,8)/2;case Oo:case ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $o:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case nl:case il:case sl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rl:case al:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ol:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qd(n){switch(n){case _t:case ru:return{byteLength:1,components:1};case ir:case au:case Dn:return{byteLength:2,components:1};case _l:case El:return{byteLength:2,components:4};case Oi:case Al:case on:return{byteLength:4,components:1};case ou:case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vi);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bu(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Kd(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const v=f[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mp=`#define PI 3.141592653589793
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
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
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
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
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
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
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
#endif`,Qp=`struct PhysicalMaterial {
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
}`,Kp=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bm=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
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
}`,n0=`#if DEPTH_PACKING == 3200
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
}`,i0=`#define DISTANCE
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
}`,s0=`#define DISTANCE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#define LAMBERT
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
}`,f0=`#define LAMBERT
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
}`,d0=`#define MATCAP
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
}`,p0=`#define MATCAP
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
}`,m0=`#define NORMAL
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
}`,g0=`#define NORMAL
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
}`,v0=`#define PHONG
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
}`,x0=`#define PHONG
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
}`,M0=`#define STANDARD
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
}`,y0=`#define STANDARD
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
}`,w0=`#define TOON
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
}`,S0=`#define TOON
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
}`,A0=`uniform float size;
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
}`,_0=`uniform vec3 diffuse;
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
}`,E0=`#include <common>
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
}`,T0=`uniform vec3 color;
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
}`,b0=`uniform float rotation;
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
}`,C0=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Zd,alphahash_pars_fragment:jd,alphamap_fragment:Jd,alphamap_pars_fragment:$d,alphatest_fragment:ep,alphatest_pars_fragment:tp,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:ap,beginnormal_vertex:op,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:vp,color_vertex:xp,common:Mp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:wp,displacementmap_pars_vertex:Sp,displacementmap_vertex:Ap,emissivemap_fragment:_p,emissivemap_pars_fragment:Ep,colorspace_fragment:Tp,colorspace_pars_fragment:bp,envmap_fragment:Cp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Rp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Hp,envmap_vertex:Pp,fog_vertex:Lp,fog_pars_vertex:Bp,fog_fragment:Up,fog_pars_fragment:zp,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:Np,lights_lambert_fragment:Op,lights_lambert_pars_fragment:kp,lights_pars_begin:Gp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:Yp,lights_physical_fragment:qp,lights_physical_pars_fragment:Qp,lights_fragment_begin:Kp,lights_fragment_maps:Zp,lights_fragment_end:jp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:tm,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:am,metalnessmap_pars_fragment:om,morphinstance_vertex:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:fm,normal_fragment_begin:dm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:vm,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Sm,opaque_fragment:Am,packing:_m,premultiplied_alpha_fragment:Em,project_vertex:Tm,dithering_fragment:bm,dithering_pars_fragment:Cm,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Pm,shadowmap_vertex:Lm,shadowmask_pars_fragment:Bm,skinbase_vertex:Um,skinning_pars_vertex:zm,skinning_vertex:Fm,skinnormal_vertex:Nm,specularmap_fragment:Om,specularmap_pars_fragment:km,tonemapping_fragment:Gm,tonemapping_pars_fragment:Hm,transmission_fragment:Vm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:Ym,uv_vertex:qm,worldpos_vertex:Qm,background_vert:Km,background_frag:Zm,backgroundCube_vert:jm,backgroundCube_frag:Jm,cube_vert:$m,cube_frag:e0,depth_vert:t0,depth_frag:n0,distanceRGBA_vert:i0,distanceRGBA_frag:s0,equirect_vert:r0,equirect_frag:a0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:f0,meshmatcap_vert:d0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:v0,meshphong_frag:x0,meshphysical_vert:M0,meshphysical_frag:y0,meshtoon_vert:w0,meshtoon_frag:S0,points_vert:A0,points_frag:_0,shadow_vert:E0,shadow_frag:T0,sprite_vert:b0,sprite_frag:C0},ye={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Ln={basic:{uniforms:Jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Jt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Jt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Jt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Jt([ye.points,ye.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Jt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Jt([ye.common,ye.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Jt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Jt([ye.sprite,ye.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Jt([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Jt([ye.lights,ye.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Ln.physical={uniforms:Jt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ur={r:0,b:0,g:0},Ci=new Gn,D0=new Ze;function R0(n,e,t,i,s,r,a){const o=new qe(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function v(M){let y=!1;const S=m(M);S===null?p(o,l):S&&S.isColor&&(p(S,1),y=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,y){const S=m(y);S&&(S.isCubeTexture||S.mapping===Ea)?(h===void 0&&(h=new wt(new Gi(1,1,1),new ot({name:"BackgroundCubeMaterial",uniforms:_s(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,D,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(y.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(D0.makeRotationFromEuler(Ci)),h.material.toneMapped=it.getTransfer(S.colorSpace)!==dt,(f!==S||u!==S.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=S,u=S.version,d=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new wt(new Hn(2,2),new ot({name:"BackgroundMaterial",uniforms:_s(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=it.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||u!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,u=S.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Ur,yu(n)),i.buffers.color.setClear(Ur.r,Ur.g,Ur.b,y,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:v,addToRenderList:g,dispose:x}}function I0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(w,_,I,z,F){let O=!1;const P=f(z,I,_);r!==P&&(r=P,c(r.object)),O=d(w,z,I,F),O&&m(w,z,I,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,y(w,_,I,z),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function h(w){return n.deleteVertexArray(w)}function f(w,_,I){const z=I.wireframe===!0;let F=i[w.id];F===void 0&&(F={},i[w.id]=F);let O=F[_.id];O===void 0&&(O={},F[_.id]=O);let P=O[z];return P===void 0&&(P=u(l()),O[z]=P),P}function u(w){const _=[],I=[],z=[];for(let F=0;F<t;F++)_[F]=0,I[F]=0,z[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:I,attributeDivisors:z,object:w,attributes:{},index:null}}function d(w,_,I,z){const F=r.attributes,O=_.attributes;let P=0;const L=I.getAttributes();for(const U in L)if(L[U].location>=0){const Q=F[U];let j=O[U];if(j===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(j=w.instanceColor)),Q===void 0||Q.attribute!==j||j&&Q.data!==j.data)return!0;P++}return r.attributesNum!==P||r.index!==z}function m(w,_,I,z){const F={},O=_.attributes;let P=0;const L=I.getAttributes();for(const U in L)if(L[U].location>=0){let Q=O[U];Q===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor));const j={};j.attribute=Q,Q&&Q.data&&(j.data=Q.data),F[U]=j,P++}r.attributes=F,r.attributesNum=P,r.index=z}function v(){const w=r.newAttributes;for(let _=0,I=w.length;_<I;_++)w[_]=0}function g(w){p(w,0)}function p(w,_){const I=r.newAttributes,z=r.enabledAttributes,F=r.attributeDivisors;I[w]=1,z[w]===0&&(n.enableVertexAttribArray(w),z[w]=1),F[w]!==_&&(n.vertexAttribDivisor(w,_),F[w]=_)}function x(){const w=r.newAttributes,_=r.enabledAttributes;for(let I=0,z=_.length;I<z;I++)_[I]!==w[I]&&(n.disableVertexAttribArray(I),_[I]=0)}function M(w,_,I,z,F,O,P){P===!0?n.vertexAttribIPointer(w,_,I,F,O):n.vertexAttribPointer(w,_,I,z,F,O)}function y(w,_,I,z){v();const F=z.attributes,O=I.getAttributes(),P=_.defaultAttributeValues;for(const L in O){const U=O[L];if(U.location>=0){let W=F[L];if(W===void 0&&(L==="instanceMatrix"&&w.instanceMatrix&&(W=w.instanceMatrix),L==="instanceColor"&&w.instanceColor&&(W=w.instanceColor)),W!==void 0){const Q=W.normalized,j=W.itemSize,ue=e.get(W);if(ue===void 0)continue;const Ae=ue.buffer,_e=ue.type,we=ue.bytesPerElement,K=_e===n.INT||_e===n.UNSIGNED_INT||W.gpuType===Al;if(W.isInterleavedBufferAttribute){const ne=W.data,fe=ne.stride,Be=W.offset;if(ne.isInstancedInterleavedBuffer){for(let Te=0;Te<U.locationSize;Te++)p(U.location+Te,ne.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Te=0;Te<U.locationSize;Te++)g(U.location+Te);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let Te=0;Te<U.locationSize;Te++)M(U.location+Te,j/U.locationSize,_e,Q,fe*we,(Be+j/U.locationSize*Te)*we,K)}else{if(W.isInstancedBufferAttribute){for(let ne=0;ne<U.locationSize;ne++)p(U.location+ne,W.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ne=0;ne<U.locationSize;ne++)g(U.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let ne=0;ne<U.locationSize;ne++)M(U.location+ne,j/U.locationSize,_e,Q,j*we,j/U.locationSize*ne*we,K)}}else if(P!==void 0){const Q=P[L];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(U.location,Q);break;case 3:n.vertexAttrib3fv(U.location,Q);break;case 4:n.vertexAttrib4fv(U.location,Q);break;default:n.vertexAttrib1fv(U.location,Q)}}}}x()}function S(){C();for(const w in i){const _=i[w];for(const I in _){const z=_[I];for(const F in z)h(z[F].object),delete z[F];delete _[I]}delete i[w]}}function E(w){if(i[w.id]===void 0)return;const _=i[w.id];for(const I in _){const z=_[I];for(const F in z)h(z[F].object),delete z[F];delete _[I]}delete i[w.id]}function D(w){for(const _ in i){const I=i[_];if(I[w.id]===void 0)continue;const z=I[w.id];for(const F in z)h(z[F].object),delete z[F];delete I[w.id]}}function C(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function P0(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];t.update(d,i,1)}function l(c,h,f,u){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=h[v]*u[v];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function L0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Gt&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const C=D===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==_t&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==on&&!C)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:S,maxSamples:E}}function B0(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new pi,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const x=r?0:i,M=x*4;let y=p.clippingState||null;l.value=y,y=h(m,u,M,d);for(let S=0;S!==M;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,m){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=d+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=d;M!==v;++M,y+=4)a.copy(f[M]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function U0(n){let e=new WeakMap;function t(a,o){return o===Po?a.mapping=ys:o===Lo&&(a.mapping=ws),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Po||o===Lo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Id(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ms=4,Pc=[.125,.215,.35,.446,.526,.582],zi=20,ro=new Ds,Lc=new qe;let ao=null,oo=0,lo=0,co=!1;const Li=(1+Math.sqrt(5))/2,ls=1/Li,Bc=[new V(-Li,ls,0),new V(Li,ls,0),new V(-ls,0,Li),new V(ls,0,Li),new V(0,Li,-ls),new V(0,Li,ls),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],z0=new V;class Uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=z0}=r;ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ao,oo,lo),this._renderer.xr.enabled=co,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:at,minFilter:at,generateMipmaps:!1,type:Dn,format:Gt,colorSpace:yi,depthBuffer:!1},s=zc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F0(r)),this._blurMaterial=N0(r,e,t)}return s}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,i,s,r){const l=new $t(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Lc),f.toneMapping=$n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const v=new vu({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new wt(new Gi,v);let p=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,p=!0):(v.color.copy(Lc),p=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const S=this._cubeSize;zr(s,y*S,M>2?S:0,S,S),f.setRenderTarget(s),p&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=u,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ys||e.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;zr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ro)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bc[(s-r-1)%Bc.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new wt(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*zi-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):zi;g>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zi}`);const p=[];let x=0;for(let D=0;D<zi;++D){const C=D/v,A=Math.exp(-C*C/2);p.push(A),D===0?x+=A:D<g&&(x+=2*A)}for(let D=0;D<p.length;D++)p[D]=p[D]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=m,u.mipInt.value=M-i;const y=this._sizeLods[s],S=3*y*(s>M-ms?s-M+ms:0),E=4*(this._cubeSize-y);zr(t,S,E,3*y,2*y),l.setRenderTarget(t),l.render(f,ro)}}function F0(n){const e=[],t=[],i=[];let s=n;const r=n-ms+1+Pc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-ms?l=Pc[a-n+ms-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*d),M=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let E=0;E<d;E++){const D=E%3*2/3-1,C=E>2?0:-1,A=[D,C,0,D+2/3,C,0,D+2/3,C+1,0,D,C,0,D+2/3,C+1,0,D,C+1,0];x.set(A,v*m*E),M.set(u,g*m*E);const w=[E,E,E,E,E,E];y.set(w,p*m*E)}const S=new Xt;S.setAttribute("position",new Ge(x,v)),S.setAttribute("uv",new Ge(M,g)),S.setAttribute("faceIndex",new Ge(y,p)),e.push(S),s>ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zc(n,e,t){const i=new ht(n,e,t);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function N0(n,e,t){const i=new Float32Array(zi),s=new V(0,1,0);return new ot({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Fc(){return new ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Nc(){return new ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Ul(){return`

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
	`}function O0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Po||l===Lo,h=l===ys||l===ws;if(c||h){let f=e.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Uc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Uc(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function k0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&rr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function G0(n,e,t,i){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)e.update(u[d],n.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,m=f.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let M=0,y=x.length;M<y;M+=3){const S=x[M+0],E=x[M+1],D=x[M+2];u.push(S,E,E,D,D,S)}}else if(m!==void 0){const x=m.array;v=m.version;for(let M=0,y=x.length/3-1;M<y;M+=3){const S=M+0,E=M+1,D=M+2;u.push(S,E,E,D,D,S)}}else return;const g=new(du(u)?Mu:xu)(u,1);g.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function H0(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function c(u,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,u*a,m),t.update(d,i,m))}function h(u,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,i,1)}function f(u,d,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/a,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,v,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*v[x];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function V0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function W0(n,e,t){const i=new WeakMap,s=new Mt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let A=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;d===!0&&(M=1),m===!0&&(M=2),v===!0&&(M=3);let y=o.attributes.position.count*M,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*S*4*f),D=new Pl(E,y,S,f);D.type=on,D.needsUpdate=!0;const C=M*4;for(let w=0;w<f;w++){const _=g[w],I=p[w],z=x[w],F=y*S*4*w;for(let O=0;O<_.count;O++){const P=O*C;d===!0&&(s.fromBufferAttribute(_,O),E[F+P+0]=s.x,E[F+P+1]=s.y,E[F+P+2]=s.z,E[F+P+3]=0),m===!0&&(s.fromBufferAttribute(I,O),E[F+P+4]=s.x,E[F+P+5]=s.y,E[F+P+6]=s.z,E[F+P+7]=0),v===!0&&(s.fromBufferAttribute(z,O),E[F+P+8]=s.x,E[F+P+9]=s.y,E[F+P+10]=s.z,E[F+P+11]=z.itemSize===4?s.w:1)}}u={count:f,texture:D,size:new Ce(y,S)},i.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function X0(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Cu=new Ft,Oc=new Ta(1,1),Du=new Pl,Ru=new va,Iu=new Su,kc=[],Gc=[],Hc=new Float32Array(16),Vc=new Float32Array(9),Wc=new Float32Array(4);function Rs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=kc[s];if(r===void 0&&(r=new Float32Array(s),kc[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ba(n,e){let t=Gc[e];t===void 0&&(t=new Int32Array(e),Gc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Y0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function Q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function K0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function Z0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;Wc.set(i),n.uniformMatrix2fv(this.addr,!1,Wc),Ot(t,i)}}function j0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;Vc.set(i),n.uniformMatrix3fv(this.addr,!1,Vc),Ot(t,i)}}function J0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;Hc.set(i),n.uniformMatrix4fv(this.addr,!1,Hc),Ot(t,i)}}function $0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function ig(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function og(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Oc.compareFunction=fu,r=Oc):r=Cu,t.setTexture2D(e||r,s)}function lg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ru,s)}function cg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Iu,s)}function hg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Du,s)}function ug(n){switch(n){case 5126:return Y0;case 35664:return q0;case 35665:return Q0;case 35666:return K0;case 35674:return Z0;case 35675:return j0;case 35676:return J0;case 5124:case 35670:return $0;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}function fg(n,e){n.uniform1fv(this.addr,e)}function dg(n,e){const t=Rs(e,this.size,2);n.uniform2fv(this.addr,t)}function pg(n,e){const t=Rs(e,this.size,3);n.uniform3fv(this.addr,t)}function mg(n,e){const t=Rs(e,this.size,4);n.uniform4fv(this.addr,t)}function gg(n,e){const t=Rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vg(n,e){const t=Rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xg(n,e){const t=Rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Mg(n,e){n.uniform1iv(this.addr,e)}function yg(n,e){n.uniform2iv(this.addr,e)}function wg(n,e){n.uniform3iv(this.addr,e)}function Sg(n,e){n.uniform4iv(this.addr,e)}function Ag(n,e){n.uniform1uiv(this.addr,e)}function _g(n,e){n.uniform2uiv(this.addr,e)}function Eg(n,e){n.uniform3uiv(this.addr,e)}function Tg(n,e){n.uniform4uiv(this.addr,e)}function bg(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Cu,r[a])}function Cg(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ru,r[a])}function Dg(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Iu,r[a])}function Rg(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Du,r[a])}function Ig(n){switch(n){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return vg;case 35676:return xg;case 5124:case 35670:return Mg;case 35667:case 35671:return yg;case 35668:case 35672:return wg;case 35669:case 35673:return Sg;case 5125:return Ag;case 36294:return _g;case 36295:return Eg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Rg}}class Pg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ug(t.type)}}class Lg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ig(t.type)}}class Bg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function Xc(n,e){n.seq.push(e),n.map[e.id]=e}function Ug(n,e,t){const i=n.name,s=i.length;for(ho.lastIndex=0;;){const r=ho.exec(i),a=ho.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xc(t,c===void 0?new Pg(o,n,e):new Lg(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Bg(o),Xc(t,f)),t=f}}}class aa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ug(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Yc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zg=37297;let Fg=0;function Ng(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const qc=new Ye;function Og(n){it._getMatrix(qc,it.workingColorSpace,n);const e=`mat3( ${qc.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case da:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ng(n.getShaderSource(e),o)}else return r}function kg(n,e){const t=Og(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gg(n,e){let t;switch(e){case Wf:t="Linear";break;case Xf:t="Reinhard";break;case Yf:t="Cineon";break;case qf:t="ACESFilmic";break;case Kf:t="AgX";break;case Zf:t="Neutral";break;case Qf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fr=new V;function Hg(){it.getLuminanceCoefficients(Fr);const n=Fr.x.toFixed(4),e=Fr.y.toFixed(4),t=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Wg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ks(n){return n!==""}function Kc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(n){return n.replace(Yg,Qg)}const qg=new Map;function Qg(n,e){let t=We[e];if(t===void 0){const i=qg.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ul(t)}const Kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(n){return n.replace(Kg,Zg)}function Zg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function jg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===tu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ys:case ws:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $g(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function ev(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case iu:e="ENVMAP_BLENDING_MULTIPLY";break;case Hf:e="ENVMAP_BLENDING_MIX";break;case Vf:e="ENVMAP_BLENDING_ADD";break}return e}function tv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function nv(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=jg(t),c=Jg(t),h=$g(t),f=ev(t),u=tv(t),d=Vg(t),m=Wg(r),v=s.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(g=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?We.tonemapping_pars_fragment:"",t.toneMapping!==$n?Gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,kg("linearToOutputTexel",t.outputColorSpace),Hg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=ul(a),a=Kc(a,t),a=Zc(a,t),o=ul(o),o=Kc(o,t),o=Zc(o,t),a=jc(a),o=jc(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+g+a,y=x+p+o,S=Yc(s,s.VERTEX_SHADER,M),E=Yc(s,s.FRAGMENT_SHADER,y);s.attachShader(v,S),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function D(_){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(S)||"",F=s.getShaderInfoLog(E)||"",O=I.trim(),P=z.trim(),L=F.trim();let U=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,S,E);else{const Q=Qc(s,S,"vertex"),j=Qc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+_.name+`
Material Type: `+_.type+`

Program Info Log: `+O+`
`+Q+`
`+j)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(P===""||L==="")&&(W=!1);W&&(_.diagnostics={runnable:U,programLog:O,vertexShader:{log:P,prefix:g},fragmentShader:{log:L,prefix:p}})}s.deleteShader(S),s.deleteShader(E),C=new aa(s,v),A=Xg(s,v)}let C;this.getUniforms=function(){return C===void 0&&D(this),C};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,zg)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}let iv=0;class sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rv(e),t.set(e,i)),i}}class rv{constructor(e){this.id=iv++,this.code=e,this.usedTimes=0}}function av(n,e,t,i,s,r,a){const o=new mu,l=new sv,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A){return c.add(A),A===0?"uv":`uv${A}`}function g(A,w,_,I,z){const F=I.fog,O=z.geometry,P=A.isMeshStandardMaterial?I.environment:null,L=(A.isMeshStandardMaterial?t:e).get(A.envMap||P),U=L&&L.mapping===Ea?L.image.height:null,W=m[A.type];A.precision!==null&&(d=s.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,j=Q!==void 0?Q.length:0;let ue=0;O.morphAttributes.position!==void 0&&(ue=1),O.morphAttributes.normal!==void 0&&(ue=2),O.morphAttributes.color!==void 0&&(ue=3);let Ae,_e,we,K;if(W){const Je=Ln[W];Ae=Je.vertexShader,_e=Je.fragmentShader}else Ae=A.vertexShader,_e=A.fragmentShader,l.update(A),we=l.getVertexShaderID(A),K=l.getFragmentShaderID(A);const ne=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Be=z.isInstancedMesh===!0,Te=z.isBatchedMesh===!0,Ue=!!A.map,ut=!!A.matcap,N=!!L,et=!!A.aoMap,Fe=!!A.lightMap,Ne=!!A.bumpMap,Re=!!A.normalMap,Qe=!!A.displacementMap,be=!!A.emissiveMap,He=!!A.metalnessMap,yt=!!A.roughnessMap,mt=A.anisotropy>0,B=A.clearcoat>0,T=A.dispersion>0,q=A.iridescence>0,ee=A.sheen>0,G=A.transmission>0,H=mt&&!!A.anisotropyMap,$=B&&!!A.clearcoatMap,te=B&&!!A.clearcoatNormalMap,ce=B&&!!A.clearcoatRoughnessMap,de=q&&!!A.iridescenceMap,oe=q&&!!A.iridescenceThicknessMap,me=ee&&!!A.sheenColorMap,Me=ee&&!!A.sheenRoughnessMap,ge=!!A.specularMap,ae=!!A.specularColorMap,Ie=!!A.specularIntensityMap,k=G&&!!A.transmissionMap,he=G&&!!A.thicknessMap,le=!!A.gradientMap,ve=!!A.alphaMap,re=A.alphaTest>0,ie=!!A.alphaHash,Ee=!!A.extensions;let Le=$n;A.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Le=n.toneMapping);const ct={shaderID:W,shaderType:A.type,shaderName:A.name,vertexShader:Ae,fragmentShader:_e,defines:A.defines,customVertexShaderID:we,customFragmentShaderID:K,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:Te,batchingColor:Te&&z._colorsTexture!==null,instancing:Be,instancingColor:Be&&z.instanceColor!==null,instancingMorph:Be&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:yi,alphaToCoverage:!!A.alphaToCoverage,map:Ue,matcap:ut,envMap:N,envMapMode:N&&L.mapping,envMapCubeUVHeight:U,aoMap:et,lightMap:Fe,bumpMap:Ne,normalMap:Re,displacementMap:u&&Qe,emissiveMap:be,normalMapObjectSpace:Re&&A.normalMapType===Jf,normalMapTangentSpace:Re&&A.normalMapType===Rl,metalnessMap:He,roughnessMap:yt,anisotropy:mt,anisotropyMap:H,clearcoat:B,clearcoatMap:$,clearcoatNormalMap:te,clearcoatRoughnessMap:ce,dispersion:T,iridescence:q,iridescenceMap:de,iridescenceThicknessMap:oe,sheen:ee,sheenColorMap:me,sheenRoughnessMap:Me,specularMap:ge,specularColorMap:ae,specularIntensityMap:Ie,transmission:G,transmissionMap:k,thicknessMap:he,gradientMap:le,opaque:A.transparent===!1&&A.blending===Fi&&A.alphaToCoverage===!1,alphaMap:ve,alphaTest:re,alphaHash:ie,combine:A.combine,mapUv:Ue&&v(A.map.channel),aoMapUv:et&&v(A.aoMap.channel),lightMapUv:Fe&&v(A.lightMap.channel),bumpMapUv:Ne&&v(A.bumpMap.channel),normalMapUv:Re&&v(A.normalMap.channel),displacementMapUv:Qe&&v(A.displacementMap.channel),emissiveMapUv:be&&v(A.emissiveMap.channel),metalnessMapUv:He&&v(A.metalnessMap.channel),roughnessMapUv:yt&&v(A.roughnessMap.channel),anisotropyMapUv:H&&v(A.anisotropyMap.channel),clearcoatMapUv:$&&v(A.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(A.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(A.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&v(A.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(A.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(A.sheenRoughnessMap.channel),specularMapUv:ge&&v(A.specularMap.channel),specularColorMapUv:ae&&v(A.specularColorMap.channel),specularIntensityMapUv:Ie&&v(A.specularIntensityMap.channel),transmissionMapUv:k&&v(A.transmissionMap.channel),thicknessMapUv:he&&v(A.thicknessMap.channel),alphaMapUv:ve&&v(A.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Re||mt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!O.attributes.uv&&(Ue||ve),fog:!!F,useFog:A.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&_.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ue&&A.map.isVideoTexture===!0&&it.getTransfer(A.map.colorSpace)===dt,decodeVideoTextureEmissive:be&&A.emissiveMap.isVideoTexture===!0&&it.getTransfer(A.emissiveMap.colorSpace)===dt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Wt,flipSided:A.side===Bt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ee&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&A.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function p(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const _ in A.defines)w.push(_),w.push(A.defines[_]);return A.isRawShaderMaterial===!1&&(x(w,A),M(w,A),w.push(n.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function x(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function M(A,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),w.gradientMap&&o.enable(22),A.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),A.push(o.mask)}function y(A){const w=m[A.type];let _;if(w){const I=Ln[w];_=bd.clone(I.uniforms)}else _=A.uniforms;return _}function S(A,w){let _;for(let I=0,z=h.length;I<z;I++){const F=h[I];if(F.cacheKey===w){_=F,++_.usedTimes;break}}return _===void 0&&(_=new nv(n,w,A,r),h.push(_)),_}function E(A){if(--A.usedTimes===0){const w=h.indexOf(A);h[w]=h[h.length-1],h.pop(),A.destroy()}}function D(A){l.remove(A)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:E,releaseShaderCache:D,programs:h,dispose:C}}function ov(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function lv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $c(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function eh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,u,d,m,v,g){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:v,group:g},n[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=v,p.group=g),e++,p}function o(f,u,d,m,v,g){const p=a(f,u,d,m,v,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,u,d,m,v,g){const p=a(f,u,d,m,v,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||lv),i.length>1&&i.sort(u||$c),s.length>1&&s.sort(u||$c)}function h(){for(let f=e,u=n.length;f<u;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function cv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new eh,n.set(i,[a])):s>=r.length?(a=new eh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function hv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new qe};break;case"SpotLight":t={position:new V,direction:new V,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function uv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fv=0;function dv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pv(n){const e=new hv,t=uv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new Ze,a=new Ze;function o(c){let h=0,f=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,x=0,M=0,y=0,S=0,E=0,D=0;c.sort(dv);for(let A=0,w=c.length;A<w;A++){const _=c[A],I=_.color,z=_.intensity,F=_.distance,O=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)h+=I.r*z,f+=I.g*z,u+=I.b*z;else if(_.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(_.sh.coefficients[P],z);D++}else if(_.isDirectionalLight){const P=e.get(_);if(P.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){const L=_.shadow,U=t.get(_);U.shadowIntensity=L.intensity,U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,i.directionalShadow[d]=U,i.directionalShadowMap[d]=O,i.directionalShadowMatrix[d]=_.shadow.matrix,x++}i.directional[d]=P,d++}else if(_.isSpotLight){const P=e.get(_);P.position.setFromMatrixPosition(_.matrixWorld),P.color.copy(I).multiplyScalar(z),P.distance=F,P.coneCos=Math.cos(_.angle),P.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),P.decay=_.decay,i.spot[v]=P;const L=_.shadow;if(_.map&&(i.spotLightMap[S]=_.map,S++,L.updateMatrices(_),_.castShadow&&E++),i.spotLightMatrix[v]=L.matrix,_.castShadow){const U=t.get(_);U.shadowIntensity=L.intensity,U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=O,y++}v++}else if(_.isRectAreaLight){const P=e.get(_);P.color.copy(I).multiplyScalar(z),P.halfWidth.set(_.width*.5,0,0),P.halfHeight.set(0,_.height*.5,0),i.rectArea[g]=P,g++}else if(_.isPointLight){const P=e.get(_);if(P.color.copy(_.color).multiplyScalar(_.intensity),P.distance=_.distance,P.decay=_.decay,_.castShadow){const L=_.shadow,U=t.get(_);U.shadowIntensity=L.intensity,U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,U.shadowCameraNear=L.camera.near,U.shadowCameraFar=L.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=O,i.pointShadowMatrix[m]=_.shadow.matrix,M++}i.point[m]=P,m++}else if(_.isHemisphereLight){const P=e.get(_);P.skyColor.copy(_.color).multiplyScalar(z),P.groundColor.copy(_.groundColor).multiplyScalar(z),i.hemi[p]=P,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const C=i.hash;(C.directionalLength!==d||C.pointLength!==m||C.spotLength!==v||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==y||C.numSpotMaps!==S||C.numLightProbes!==D)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+S-E,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=D,C.directionalLength=d,C.pointLength=m,C.spotLength=v,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=y,C.numSpotMaps=S,C.numLightProbes=D,i.version=fv++)}function l(c,h){let f=0,u=0,d=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(M.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function th(n){const e=new pv(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function mv(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new th(n),e.set(s,[o])):r>=a.length?(o=new th(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
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
}`;function xv(n,e,t){let i=new ur;const s=new Ce,r=new Ce,a=new Mt,o=new Eu({depthPacking:uu}),l=new kd,c={},h=t.maxTextureSize,f={[kn]:Bt,[Bt]:kn,[Wt]:Wt},u=new ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:gv,fragmentShader:vv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new Xt;m.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new wt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let p=this.type;this.render=function(E,D,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const A=n.getRenderTarget(),w=n.getActiveCubeFace(),_=n.getActiveMipmapLevel(),I=n.state;I.setBlending(zt),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=p!==jn&&this.type===jn,F=p===jn&&this.type!==jn;for(let O=0,P=E.length;O<P;O++){const L=E[O],U=L.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const W=U.getFrameExtents();if(s.multiply(W),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,U.mapSize.y=r.y)),U.map===null||z===!0||F===!0){const j=this.type!==jn?{minFilter:At,magFilter:At}:{};U.map!==null&&U.map.dispose(),U.map=new ht(s.x,s.y,j),U.map.texture.name=L.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const Q=U.getViewportCount();for(let j=0;j<Q;j++){const ue=U.getViewport(j);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),I.viewport(a),U.updateMatrices(L,j),i=U.getFrustum(),y(D,C,U.camera,L,this.type)}U.isPointLightShadow!==!0&&this.type===jn&&x(U,C),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(A,w,_)};function x(E,D){const C=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ht(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(D,null,C,u,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(D,null,C,d,v,null)}function M(E,D,C,A){let w=null;const _=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(_!==void 0)w=_;else if(w=C.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const I=w.uuid,z=D.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let O=F[z];O===void 0&&(O=w.clone(),F[z]=O,D.addEventListener("dispose",S)),w=O}if(w.visible=D.visible,w.wireframe=D.wireframe,A===jn?w.side=D.shadowSide!==null?D.shadowSide:D.side:w.side=D.shadowSide!==null?D.shadowSide:f[D.side],w.alphaMap=D.alphaMap,w.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,w.map=D.map,w.clipShadows=D.clipShadows,w.clippingPlanes=D.clippingPlanes,w.clipIntersection=D.clipIntersection,w.displacementMap=D.displacementMap,w.displacementScale=D.displacementScale,w.displacementBias=D.displacementBias,w.wireframeLinewidth=D.wireframeLinewidth,w.linewidth=D.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const I=n.properties.get(w);I.light=C}return w}function y(E,D,C,A,w){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===jn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const z=e.update(E),F=E.material;if(Array.isArray(F)){const O=z.groups;for(let P=0,L=O.length;P<L;P++){const U=O[P],W=F[U.materialIndex];if(W&&W.visible){const Q=M(E,W,A,w);E.onBeforeShadow(n,E,D,C,z,Q,U),n.renderBufferDirect(C,null,z,Q,E,U),E.onAfterShadow(n,E,D,C,z,Q,U)}}}else if(F.visible){const O=M(E,F,A,w);E.onBeforeShadow(n,E,D,C,z,O,null),n.renderBufferDirect(C,null,z,O,E,null),E.onAfterShadow(n,E,D,C,z,O,null)}}const I=E.children;for(let z=0,F=I.length;z<F;z++)y(I[z],D,C,A,w)}function S(E){E.target.removeEventListener("dispose",S);for(const C in c){const A=c[C],w=E.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const Mv={[To]:fa,[bo]:Ro,[Co]:Io,[Ms]:Do,[fa]:To,[Ro]:bo,[Io]:Co,[Do]:Ms};function yv(n,e){function t(){let k=!1;const he=new Mt;let le=null;const ve=new Mt(0,0,0,0);return{setMask:function(re){le!==re&&!k&&(n.colorMask(re,re,re,re),le=re)},setLocked:function(re){k=re},setClear:function(re,ie,Ee,Le,ct){ct===!0&&(re*=Le,ie*=Le,Ee*=Le),he.set(re,ie,Ee,Le),ve.equals(he)===!1&&(n.clearColor(re,ie,Ee,Le),ve.copy(he))},reset:function(){k=!1,le=null,ve.set(-1,0,0,0)}}}function i(){let k=!1,he=!1,le=null,ve=null,re=null;return{setReversed:function(ie){if(he!==ie){const Ee=e.get("EXT_clip_control");ie?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),he=ie;const Le=re;re=null,this.setClear(Le)}},getReversed:function(){return he},setTest:function(ie){ie?ne(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(ie){le!==ie&&!k&&(n.depthMask(ie),le=ie)},setFunc:function(ie){if(he&&(ie=Mv[ie]),ve!==ie){switch(ie){case To:n.depthFunc(n.NEVER);break;case fa:n.depthFunc(n.ALWAYS);break;case bo:n.depthFunc(n.LESS);break;case Ms:n.depthFunc(n.LEQUAL);break;case Co:n.depthFunc(n.EQUAL);break;case Do:n.depthFunc(n.GEQUAL);break;case Ro:n.depthFunc(n.GREATER);break;case Io:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=ie}},setLocked:function(ie){k=ie},setClear:function(ie){re!==ie&&(he&&(ie=1-ie),n.clearDepth(ie),re=ie)},reset:function(){k=!1,le=null,ve=null,re=null,he=!1}}}function s(){let k=!1,he=null,le=null,ve=null,re=null,ie=null,Ee=null,Le=null,ct=null;return{setTest:function(Je){k||(Je?ne(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Je){he!==Je&&!k&&(n.stencilMask(Je),he=Je)},setFunc:function(Je,mn,Lt){(le!==Je||ve!==mn||re!==Lt)&&(n.stencilFunc(Je,mn,Lt),le=Je,ve=mn,re=Lt)},setOp:function(Je,mn,Lt){(ie!==Je||Ee!==mn||Le!==Lt)&&(n.stencilOp(Je,mn,Lt),ie=Je,Ee=mn,Le=Lt)},setLocked:function(Je){k=Je},setClear:function(Je){ct!==Je&&(n.clearStencil(Je),ct=Je)},reset:function(){k=!1,he=null,le=null,ve=null,re=null,ie=null,Ee=null,Le=null,ct=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],m=null,v=!1,g=null,p=null,x=null,M=null,y=null,S=null,E=null,D=new qe(0,0,0),C=0,A=!1,w=null,_=null,I=null,z=null,F=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,L=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(U)[1]),P=L>=1):U.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),P=L>=2);let W=null,Q={};const j=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),Ae=new Mt().fromArray(j),_e=new Mt().fromArray(ue);function we(k,he,le,ve){const re=new Uint8Array(4),ie=n.createTexture();n.bindTexture(k,ie),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<le;Ee++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(he+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return ie}const K={};K[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(Ms),Ne(!1),Re(nc),ne(n.CULL_FACE),et(zt);function ne(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function fe(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function Be(k,he){return f[k]!==he?(n.bindFramebuffer(k,he),f[k]=he,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=he),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Te(k,he){let le=d,ve=!1;if(k){le=u.get(he),le===void 0&&(le=[],u.set(he,le));const re=k.textures;if(le.length!==re.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Ee=re.length;ie<Ee;ie++)le[ie]=n.COLOR_ATTACHMENT0+ie;le.length=re.length,ve=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,ve=!0);ve&&n.drawBuffers(le)}function Ue(k){return m!==k?(n.useProgram(k),m=k,!0):!1}const ut={[Ui]:n.FUNC_ADD,[Ef]:n.FUNC_SUBTRACT,[Tf]:n.FUNC_REVERSE_SUBTRACT};ut[bf]=n.MIN,ut[Cf]=n.MAX;const N={[Df]:n.ZERO,[Rf]:n.ONE,[If]:n.SRC_COLOR,[_o]:n.SRC_ALPHA,[Ff]:n.SRC_ALPHA_SATURATE,[Uf]:n.DST_COLOR,[Lf]:n.DST_ALPHA,[Pf]:n.ONE_MINUS_SRC_COLOR,[Eo]:n.ONE_MINUS_SRC_ALPHA,[zf]:n.ONE_MINUS_DST_COLOR,[Bf]:n.ONE_MINUS_DST_ALPHA,[Nf]:n.CONSTANT_COLOR,[Of]:n.ONE_MINUS_CONSTANT_COLOR,[kf]:n.CONSTANT_ALPHA,[Gf]:n.ONE_MINUS_CONSTANT_ALPHA};function et(k,he,le,ve,re,ie,Ee,Le,ct,Je){if(k===zt){v===!0&&(fe(n.BLEND),v=!1);return}if(v===!1&&(ne(n.BLEND),v=!0),k!==_f){if(k!==g||Je!==A){if((p!==Ui||y!==Ui)&&(n.blendEquation(n.FUNC_ADD),p=Ui,y=Ui),Je)switch(k){case Fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ua:n.blendFunc(n.ONE,n.ONE);break;case ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ua:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ic:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,M=null,S=null,E=null,D.set(0,0,0),C=0,g=k,A=Je}return}re=re||he,ie=ie||le,Ee=Ee||ve,(he!==p||re!==y)&&(n.blendEquationSeparate(ut[he],ut[re]),p=he,y=re),(le!==x||ve!==M||ie!==S||Ee!==E)&&(n.blendFuncSeparate(N[le],N[ve],N[ie],N[Ee]),x=le,M=ve,S=ie,E=Ee),(Le.equals(D)===!1||ct!==C)&&(n.blendColor(Le.r,Le.g,Le.b,ct),D.copy(Le),C=ct),g=k,A=!1}function Fe(k,he){k.side===Wt?fe(n.CULL_FACE):ne(n.CULL_FACE);let le=k.side===Bt;he&&(le=!le),Ne(le),k.blending===Fi&&k.transparent===!1?et(zt):et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const ve=k.stencilWrite;o.setTest(ve),ve&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),be(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(k){w!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),w=k)}function Re(k){k!==Sf?(ne(n.CULL_FACE),k!==_&&(k===nc?n.cullFace(n.BACK):k===Af?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),_=k}function Qe(k){k!==I&&(P&&n.lineWidth(k),I=k)}function be(k,he,le){k?(ne(n.POLYGON_OFFSET_FILL),(z!==he||F!==le)&&(n.polygonOffset(he,le),z=he,F=le)):fe(n.POLYGON_OFFSET_FILL)}function He(k){k?ne(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function yt(k){k===void 0&&(k=n.TEXTURE0+O-1),W!==k&&(n.activeTexture(k),W=k)}function mt(k,he,le){le===void 0&&(W===null?le=n.TEXTURE0+O-1:le=W);let ve=Q[le];ve===void 0&&(ve={type:void 0,texture:void 0},Q[le]=ve),(ve.type!==k||ve.texture!==he)&&(W!==le&&(n.activeTexture(le),W=le),n.bindTexture(k,he||K[k]),ve.type=k,ve.texture=he)}function B(){const k=Q[W];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function G(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(k){Ae.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Ae.copy(k))}function Me(k){_e.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),_e.copy(k))}function ge(k,he){let le=c.get(he);le===void 0&&(le=new WeakMap,c.set(he,le));let ve=le.get(k);ve===void 0&&(ve=n.getUniformBlockIndex(he,k.name),le.set(k,ve))}function ae(k,he){const ve=c.get(he).get(k);l.get(he)!==ve&&(n.uniformBlockBinding(he,ve,k.__bindingPointIndex),l.set(he,ve))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},W=null,Q={},f={},u=new WeakMap,d=[],m=null,v=!1,g=null,p=null,x=null,M=null,y=null,S=null,E=null,D=new qe(0,0,0),C=0,A=!1,w=null,_=null,I=null,z=null,F=null,Ae.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:fe,bindFramebuffer:Be,drawBuffers:Te,useProgram:Ue,setBlending:et,setMaterial:Fe,setFlipSided:Ne,setCullFace:Re,setLineWidth:Qe,setPolygonOffset:be,setScissorTest:He,activeTexture:yt,bindTexture:mt,unbindTexture:B,compressedTexImage2D:T,compressedTexImage3D:q,texImage2D:de,texImage3D:oe,updateUBOMapping:ge,uniformBlockBinding:ae,texStorage2D:te,texStorage3D:ce,texSubImage2D:ee,texSubImage3D:G,compressedTexSubImage2D:H,compressedTexSubImage3D:$,scissor:me,viewport:Me,reset:Ie}}function wv(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(B,T){return d?new OffscreenCanvas(B,T):ga("canvas")}function v(B,T,q){let ee=1;const G=mt(B);if((G.width>q||G.height>q)&&(ee=q/Math.max(G.width,G.height)),ee<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const H=Math.floor(ee*G.width),$=Math.floor(ee*G.height);f===void 0&&(f=m(H,$));const te=T?m(H,$):f;return te.width=H,te.height=$,te.getContext("2d").drawImage(B,0,0,H,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+H+"x"+$+")."),te}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),B;return B}function g(B){return B.generateMipmaps}function p(B){n.generateMipmap(B)}function x(B){return B.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?n.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(B,T,q,ee,G=!1){if(B!==null){if(n[B]!==void 0)return n[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let H=T;if(T===n.RED&&(q===n.FLOAT&&(H=n.R32F),q===n.HALF_FLOAT&&(H=n.R16F),q===n.UNSIGNED_BYTE&&(H=n.R8)),T===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(H=n.R8UI),q===n.UNSIGNED_SHORT&&(H=n.R16UI),q===n.UNSIGNED_INT&&(H=n.R32UI),q===n.BYTE&&(H=n.R8I),q===n.SHORT&&(H=n.R16I),q===n.INT&&(H=n.R32I)),T===n.RG&&(q===n.FLOAT&&(H=n.RG32F),q===n.HALF_FLOAT&&(H=n.RG16F),q===n.UNSIGNED_BYTE&&(H=n.RG8)),T===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(H=n.RG8UI),q===n.UNSIGNED_SHORT&&(H=n.RG16UI),q===n.UNSIGNED_INT&&(H=n.RG32UI),q===n.BYTE&&(H=n.RG8I),q===n.SHORT&&(H=n.RG16I),q===n.INT&&(H=n.RG32I)),T===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(H=n.RGB8UI),q===n.UNSIGNED_SHORT&&(H=n.RGB16UI),q===n.UNSIGNED_INT&&(H=n.RGB32UI),q===n.BYTE&&(H=n.RGB8I),q===n.SHORT&&(H=n.RGB16I),q===n.INT&&(H=n.RGB32I)),T===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),q===n.UNSIGNED_INT&&(H=n.RGBA32UI),q===n.BYTE&&(H=n.RGBA8I),q===n.SHORT&&(H=n.RGBA16I),q===n.INT&&(H=n.RGBA32I)),T===n.RGB&&(q===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),T===n.RGBA){const $=G?da:it.getTransfer(ee);q===n.FLOAT&&(H=n.RGBA32F),q===n.HALF_FLOAT&&(H=n.RGBA16F),q===n.UNSIGNED_BYTE&&(H=$===dt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function y(B,T){let q;return B?T===null||T===Oi||T===Ss?q=n.DEPTH24_STENCIL8:T===on?q=n.DEPTH32F_STENCIL8:T===ir&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Oi||T===Ss?q=n.DEPTH_COMPONENT24:T===on?q=n.DEPTH_COMPONENT32F:T===ir&&(q=n.DEPTH_COMPONENT16),q}function S(B,T){return g(B)===!0||B.isFramebufferTexture&&B.minFilter!==At&&B.minFilter!==at?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function E(B){const T=B.target;T.removeEventListener("dispose",E),C(T),T.isVideoTexture&&h.delete(T)}function D(B){const T=B.target;T.removeEventListener("dispose",D),w(T)}function C(B){const T=i.get(B);if(T.__webglInit===void 0)return;const q=B.source,ee=u.get(q);if(ee){const G=ee[T.__cacheKey];G.usedTimes--,G.usedTimes===0&&A(B),Object.keys(ee).length===0&&u.delete(q)}i.remove(B)}function A(B){const T=i.get(B);n.deleteTexture(T.__webglTexture);const q=B.source,ee=u.get(q);delete ee[T.__cacheKey],a.memory.textures--}function w(B){const T=i.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),i.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let G=0;G<T.__webglFramebuffer[ee].length;G++)n.deleteFramebuffer(T.__webglFramebuffer[ee][G]);else n.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[ee]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=B.textures;for(let ee=0,G=q.length;ee<G;ee++){const H=i.get(q[ee]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(q[ee])}i.remove(B)}let _=0;function I(){_=0}function z(){const B=_;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),_+=1,B}function F(B){const T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function O(B,T){const q=i.get(B);if(B.isVideoTexture&&He(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&q.__version!==B.version){const ee=B.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(q,B,T);return}}else B.isExternalTexture&&(q.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+T)}function P(B,T){const q=i.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&q.__version!==B.version){K(q,B,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+T)}function L(B,T){const q=i.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&q.__version!==B.version){K(q,B,T);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+T)}function U(B,T){const q=i.get(B);if(B.version>0&&q.__version!==B.version){ne(q,B,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+T)}const W={[nr]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},Q={[At]:n.NEAREST,[jf]:n.NEAREST_MIPMAP_NEAREST,[pr]:n.NEAREST_MIPMAP_LINEAR,[at]:n.LINEAR,[La]:n.LINEAR_MIPMAP_NEAREST,[Un]:n.LINEAR_MIPMAP_LINEAR},j={[$f]:n.NEVER,[rd]:n.ALWAYS,[ed]:n.LESS,[fu]:n.LEQUAL,[td]:n.EQUAL,[sd]:n.GEQUAL,[nd]:n.GREATER,[id]:n.NOTEQUAL};function ue(B,T){if(T.type===on&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===at||T.magFilter===La||T.magFilter===pr||T.magFilter===Un||T.minFilter===at||T.minFilter===La||T.minFilter===pr||T.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(B,n.TEXTURE_WRAP_S,W[T.wrapS]),n.texParameteri(B,n.TEXTURE_WRAP_T,W[T.wrapT]),(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)&&n.texParameteri(B,n.TEXTURE_WRAP_R,W[T.wrapR]),n.texParameteri(B,n.TEXTURE_MAG_FILTER,Q[T.magFilter]),n.texParameteri(B,n.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(n.texParameteri(B,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(B,n.TEXTURE_COMPARE_FUNC,j[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===At||T.minFilter!==pr&&T.minFilter!==Un||T.type===on&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(B,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ae(B,T){let q=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",E));const ee=T.source;let G=u.get(ee);G===void 0&&(G={},u.set(ee,G));const H=F(T);if(H!==B.__cacheKey){G[H]===void 0&&(G[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),G[H].usedTimes++;const $=G[B.__cacheKey];$!==void 0&&(G[B.__cacheKey].usedTimes--,$.usedTimes===0&&A(T)),B.__cacheKey=H,B.__webglTexture=G[H].texture}return q}function _e(B,T,q){return Math.floor(Math.floor(B/q)/T)}function we(B,T,q,ee){const H=B.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,q,ee,T.data);else{H.sort((oe,me)=>oe.start-me.start);let $=0;for(let oe=1;oe<H.length;oe++){const me=H[$],Me=H[oe],ge=me.start+me.count,ae=_e(Me.start,T.width,4),Ie=_e(me.start,T.width,4);Me.start<=ge+1&&ae===Ie&&_e(Me.start+Me.count-1,T.width,4)===ae?me.count=Math.max(me.count,Me.start+Me.count-me.start):(++$,H[$]=Me)}H.length=$+1;const te=n.getParameter(n.UNPACK_ROW_LENGTH),ce=n.getParameter(n.UNPACK_SKIP_PIXELS),de=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let oe=0,me=H.length;oe<me;oe++){const Me=H[oe],ge=Math.floor(Me.start/4),ae=Math.ceil(Me.count/4),Ie=ge%T.width,k=Math.floor(ge/T.width),he=ae,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,Ie,k,he,le,q,ee,T.data)}B.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,te),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function K(B,T,q){let ee=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=n.TEXTURE_3D);const G=Ae(B,T),H=T.source;t.bindTexture(ee,B.__webglTexture,n.TEXTURE0+q);const $=i.get(H);if(H.version!==$.__version||G===!0){t.activeTexture(n.TEXTURE0+q);const te=it.getPrimaries(it.workingColorSpace),ce=T.colorSpace===pn?null:it.getPrimaries(T.colorSpace),de=T.colorSpace===pn||te===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let oe=v(T.image,!1,s.maxTextureSize);oe=yt(T,oe);const me=r.convert(T.format,T.colorSpace),Me=r.convert(T.type);let ge=M(T.internalFormat,me,Me,T.colorSpace,T.isVideoTexture);ue(ee,T);let ae;const Ie=T.mipmaps,k=T.isVideoTexture!==!0,he=$.__version===void 0||G===!0,le=H.dataReady,ve=S(T,oe);if(T.isDepthTexture)ge=y(T.format===As,T.type),he&&(k?t.texStorage2D(n.TEXTURE_2D,1,ge,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,ge,oe.width,oe.height,0,me,Me,null));else if(T.isDataTexture)if(Ie.length>0){k&&he&&t.texStorage2D(n.TEXTURE_2D,ve,ge,Ie[0].width,Ie[0].height);for(let re=0,ie=Ie.length;re<ie;re++)ae=Ie[re],k?le&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ae.width,ae.height,me,Me,ae.data):t.texImage2D(n.TEXTURE_2D,re,ge,ae.width,ae.height,0,me,Me,ae.data);T.generateMipmaps=!1}else k?(he&&t.texStorage2D(n.TEXTURE_2D,ve,ge,oe.width,oe.height),le&&we(T,oe,me,Me)):t.texImage2D(n.TEXTURE_2D,0,ge,oe.width,oe.height,0,me,Me,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,ge,Ie[0].width,Ie[0].height,oe.depth);for(let re=0,ie=Ie.length;re<ie;re++)if(ae=Ie[re],T.format!==Gt)if(me!==null)if(k){if(le)if(T.layerUpdates.size>0){const Ee=Ic(ae.width,ae.height,T.format,T.type);for(const Le of T.layerUpdates){const ct=ae.data.subarray(Le*Ee/ae.data.BYTES_PER_ELEMENT,(Le+1)*Ee/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Le,ae.width,ae.height,1,me,ct)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ae.width,ae.height,oe.depth,me,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,ge,ae.width,ae.height,oe.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ae.width,ae.height,oe.depth,me,Me,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,ge,ae.width,ae.height,oe.depth,0,me,Me,ae.data)}else{k&&he&&t.texStorage2D(n.TEXTURE_2D,ve,ge,Ie[0].width,Ie[0].height);for(let re=0,ie=Ie.length;re<ie;re++)ae=Ie[re],T.format!==Gt?me!==null?k?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ae.width,ae.height,me,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,re,ge,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?le&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ae.width,ae.height,me,Me,ae.data):t.texImage2D(n.TEXTURE_2D,re,ge,ae.width,ae.height,0,me,Me,ae.data)}else if(T.isDataArrayTexture)if(k){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,ge,oe.width,oe.height,oe.depth),le)if(T.layerUpdates.size>0){const re=Ic(oe.width,oe.height,T.format,T.type);for(const ie of T.layerUpdates){const Ee=oe.data.subarray(ie*re/oe.data.BYTES_PER_ELEMENT,(ie+1)*re/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,oe.width,oe.height,1,me,Me,Ee)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Me,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,oe.width,oe.height,oe.depth,0,me,Me,oe.data);else if(T.isData3DTexture)k?(he&&t.texStorage3D(n.TEXTURE_3D,ve,ge,oe.width,oe.height,oe.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Me,oe.data)):t.texImage3D(n.TEXTURE_3D,0,ge,oe.width,oe.height,oe.depth,0,me,Me,oe.data);else if(T.isFramebufferTexture){if(he)if(k)t.texStorage2D(n.TEXTURE_2D,ve,ge,oe.width,oe.height);else{let re=oe.width,ie=oe.height;for(let Ee=0;Ee<ve;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,ge,re,ie,0,me,Me,null),re>>=1,ie>>=1}}else if(Ie.length>0){if(k&&he){const re=mt(Ie[0]);t.texStorage2D(n.TEXTURE_2D,ve,ge,re.width,re.height)}for(let re=0,ie=Ie.length;re<ie;re++)ae=Ie[re],k?le&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,me,Me,ae):t.texImage2D(n.TEXTURE_2D,re,ge,me,Me,ae);T.generateMipmaps=!1}else if(k){if(he){const re=mt(oe);t.texStorage2D(n.TEXTURE_2D,ve,ge,re.width,re.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Me,oe)}else t.texImage2D(n.TEXTURE_2D,0,ge,me,Me,oe);g(T)&&p(ee),$.__version=H.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function ne(B,T,q){if(T.image.length!==6)return;const ee=Ae(B,T),G=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+q);const H=i.get(G);if(G.version!==H.__version||ee===!0){t.activeTexture(n.TEXTURE0+q);const $=it.getPrimaries(it.workingColorSpace),te=T.colorSpace===pn?null:it.getPrimaries(T.colorSpace),ce=T.colorSpace===pn||$===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const de=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!de&&!oe?me[ie]=v(T.image[ie],!0,s.maxCubemapSize):me[ie]=oe?T.image[ie].image:T.image[ie],me[ie]=yt(T,me[ie]);const Me=me[0],ge=r.convert(T.format,T.colorSpace),ae=r.convert(T.type),Ie=M(T.internalFormat,ge,ae,T.colorSpace),k=T.isVideoTexture!==!0,he=H.__version===void 0||ee===!0,le=G.dataReady;let ve=S(T,Me);ue(n.TEXTURE_CUBE_MAP,T);let re;if(de){k&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ie,Me.width,Me.height);for(let ie=0;ie<6;ie++){re=me[ie].mipmaps;for(let Ee=0;Ee<re.length;Ee++){const Le=re[Ee];T.format!==Gt?ge!==null?k?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,Le.width,Le.height,ge,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,Ie,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,Le.width,Le.height,ge,ae,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,Ie,Le.width,Le.height,0,ge,ae,Le.data)}}}else{if(re=T.mipmaps,k&&he){re.length>0&&ve++;const ie=mt(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ie,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(oe){k?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,ge,ae,me[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ie,me[ie].width,me[ie].height,0,ge,ae,me[ie].data);for(let Ee=0;Ee<re.length;Ee++){const ct=re[Ee].image[ie].image;k?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,ct.width,ct.height,ge,ae,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,Ie,ct.width,ct.height,0,ge,ae,ct.data)}}else{k?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge,ae,me[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ie,ge,ae,me[ie]);for(let Ee=0;Ee<re.length;Ee++){const Le=re[Ee];k?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,ge,ae,Le.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,Ie,ge,ae,Le.image[ie])}}}g(T)&&p(n.TEXTURE_CUBE_MAP),H.__version=G.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function fe(B,T,q,ee,G,H){const $=r.convert(q.format,q.colorSpace),te=r.convert(q.type),ce=M(q.internalFormat,$,te,q.colorSpace),de=i.get(T),oe=i.get(q);if(oe.__renderTarget=T,!de.__hasExternalTextures){const me=Math.max(1,T.width>>H),Me=Math.max(1,T.height>>H);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,H,ce,me,Me,T.depth,0,$,te,null):t.texImage2D(G,H,ce,me,Me,0,$,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,B),be(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,G,oe.__webglTexture,0,Qe(T)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,G,oe.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(B,T,q){if(n.bindRenderbuffer(n.RENDERBUFFER,B),T.depthBuffer){const ee=T.depthTexture,G=ee&&ee.isDepthTexture?ee.type:null,H=y(T.stencilBuffer,G),$=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=Qe(T);be(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,H,T.width,T.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,H,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,H,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,B)}else{const ee=T.textures;for(let G=0;G<ee.length;G++){const H=ee[G],$=r.convert(H.format,H.colorSpace),te=r.convert(H.type),ce=M(H.internalFormat,$,te,H.colorSpace),de=Qe(T);q&&be(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,ce,T.width,T.height):be(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,ce,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ce,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(B,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(T.depthTexture);ee.__renderTarget=T,(!ee.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const G=ee.__webglTexture,H=Qe(T);if(T.depthTexture.format===sr)be(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(T.depthTexture.format===As)be(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Ue(B){const T=i.get(B),q=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){const ee=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ee){const G=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ee.removeEventListener("dispose",G)};ee.addEventListener("dispose",G),T.__depthDisposeCallback=G}T.__boundDepthTexture=ee}if(B.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const ee=B.texture.mipmaps;ee&&ee.length>0?Te(T.__webglFramebuffer[0],B):Te(T.__webglFramebuffer,B)}else if(q){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]===void 0)T.__webglDepthbuffer[ee]=n.createRenderbuffer(),Be(T.__webglDepthbuffer[ee],B,!1);else{const G=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=T.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,H)}}else{const ee=B.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Be(T.__webglDepthbuffer,B,!1);else{const G=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(B,T,q){const ee=i.get(B);T!==void 0&&fe(ee.__webglFramebuffer,B,B.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Ue(B)}function N(B){const T=B.texture,q=i.get(B),ee=i.get(T);B.addEventListener("dispose",D);const G=B.textures,H=B.isWebGLCubeRenderTarget===!0,$=G.length>1;if($||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=T.version,a.memory.textures++),H){q.__webglFramebuffer=[];for(let te=0;te<6;te++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[te]=[];for(let ce=0;ce<T.mipmaps.length;ce++)q.__webglFramebuffer[te][ce]=n.createFramebuffer()}else q.__webglFramebuffer[te]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let te=0;te<T.mipmaps.length;te++)q.__webglFramebuffer[te]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if($)for(let te=0,ce=G.length;te<ce;te++){const de=i.get(G[te]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}if(B.samples>0&&be(B)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let te=0;te<G.length;te++){const ce=G[te];q.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[te]);const de=r.convert(ce.format,ce.colorSpace),oe=r.convert(ce.type),me=M(ce.internalFormat,de,oe,ce.colorSpace,B.isXRRenderTarget===!0),Me=Qe(B);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,me,B.width,B.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,q.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),B.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(q.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ue(n.TEXTURE_CUBE_MAP,T);for(let te=0;te<6;te++)if(T.mipmaps&&T.mipmaps.length>0)for(let ce=0;ce<T.mipmaps.length;ce++)fe(q.__webglFramebuffer[te][ce],B,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce);else fe(q.__webglFramebuffer[te],B,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);g(T)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){for(let te=0,ce=G.length;te<ce;te++){const de=G[te],oe=i.get(de);let me=n.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(me=B.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,oe.__webglTexture),ue(me,de),fe(q.__webglFramebuffer,B,de,n.COLOR_ATTACHMENT0+te,me,0),g(de)&&p(me)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(te=B.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,ee.__webglTexture),ue(te,T),T.mipmaps&&T.mipmaps.length>0)for(let ce=0;ce<T.mipmaps.length;ce++)fe(q.__webglFramebuffer[ce],B,T,n.COLOR_ATTACHMENT0,te,ce);else fe(q.__webglFramebuffer,B,T,n.COLOR_ATTACHMENT0,te,0);g(T)&&p(te),t.unbindTexture()}B.depthBuffer&&Ue(B)}function et(B){const T=B.textures;for(let q=0,ee=T.length;q<ee;q++){const G=T[q];if(g(G)){const H=x(B),$=i.get(G).__webglTexture;t.bindTexture(H,$),p(H),t.unbindTexture()}}}const Fe=[],Ne=[];function Re(B){if(B.samples>0){if(be(B)===!1){const T=B.textures,q=B.width,ee=B.height;let G=n.COLOR_BUFFER_BIT;const H=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=i.get(B),te=T.length>1;if(te)for(let de=0;de<T.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer);const ce=B.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let de=0;de<T.length;de++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$.__webglColorRenderbuffer[de]);const oe=i.get(T[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,q,ee,0,0,q,ee,G,n.NEAREST),l===!0&&(Fe.length=0,Ne.length=0,Fe.push(n.COLOR_ATTACHMENT0+de),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Fe.push(H),Ne.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let de=0;de<T.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,$.__webglColorRenderbuffer[de]);const oe=i.get(T[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){const T=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Qe(B){return Math.min(s.maxSamples,B.samples)}function be(B){const T=i.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function He(B){const T=a.render.frame;h.get(B)!==T&&(h.set(B,T),B.update())}function yt(B,T){const q=B.colorSpace,ee=B.format,G=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||q!==yi&&q!==pn&&(it.getTransfer(q)===dt?(ee!==Gt||G!==_t)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function mt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=O,this.setTexture2DArray=P,this.setTexture3D=L,this.setTextureCube=U,this.rebindTextures=ut,this.setupRenderTarget=N,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=be}function Sv(n,e){function t(i,s=pn){let r;const a=it.getTransfer(s);if(i===_t)return n.UNSIGNED_BYTE;if(i===_l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===El)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ou)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ru)return n.BYTE;if(i===au)return n.SHORT;if(i===ir)return n.UNSIGNED_SHORT;if(i===Al)return n.INT;if(i===Oi)return n.UNSIGNED_INT;if(i===on)return n.FLOAT;if(i===Dn)return n.HALF_FLOAT;if(i===cu)return n.ALPHA;if(i===hu)return n.RGB;if(i===Gt)return n.RGBA;if(i===sr)return n.DEPTH_COMPONENT;if(i===As)return n.DEPTH_STENCIL;if(i===Mi)return n.RED;if(i===Tl)return n.RED_INTEGER;if(i===bl)return n.RG;if(i===Cl)return n.RG_INTEGER;if(i===Dl)return n.RGBA_INTEGER;if(i===na||i===ia||i===sa||i===ra)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uo||i===zo||i===Fo||i===No)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===No)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oo||i===ko||i===Go)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Oo||i===ko)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Go)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ho||i===Vo||i===Wo||i===Xo||i===Yo||i===qo||i===Qo||i===Ko||i===Zo||i===jo||i===Jo||i===$o||i===el||i===tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ho)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ko)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$o)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===el)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nl||i===il||i===sl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===nl)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rl||i===al||i===ol||i===ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_v=`
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

}`;class Ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new _u(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ot({vertexShader:Av,fragmentShader:_v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Hn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tv extends ti{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",g=new Ev,p={},x=t.getContextAttributes();let M=null,y=null;const S=[],E=[],D=new Ce;let C=null;const A=new $t;A.viewport=new Mt;const w=new $t;w.viewport=new Mt;const _=[A,w],I=new qd;let z=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=S[K];return ne===void 0&&(ne=new no,S[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=S[K];return ne===void 0&&(ne=new no,S[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=S[K];return ne===void 0&&(ne=new no,S[K]=ne),ne.getHandSpace()};function O(K){const ne=E.indexOf(K.inputSource);if(ne===-1)return;const fe=S[ne];fe!==void 0&&(fe.update(K.inputSource,K.frame,c||a),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function P(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",L);for(let K=0;K<S.length;K++){const ne=E[K];ne!==null&&(E[K]=null,S[K].disconnect(ne))}z=null,F=null,g.reset();for(const K in p)delete p[K];e.setRenderTarget(M),d=null,u=null,f=null,s=null,y=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",P),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Be=null,Te=null;x.depth&&(Te=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?As:sr,Be=x.stencil?Ss:Oi);const Ue={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ue),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new ht(u.textureWidth,u.textureHeight,{format:Gt,type:_t,depthTexture:new Ta(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ht(d.framebufferWidth,d.framebufferHeight,{format:Gt,type:_t,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),we.setContext(s),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function L(K){for(let ne=0;ne<K.removed.length;ne++){const fe=K.removed[ne],Be=E.indexOf(fe);Be>=0&&(E[Be]=null,S[Be].disconnect(fe))}for(let ne=0;ne<K.added.length;ne++){const fe=K.added[ne];let Be=E.indexOf(fe);if(Be===-1){for(let Ue=0;Ue<S.length;Ue++)if(Ue>=E.length){E.push(fe),Be=Ue;break}else if(E[Ue]===null){E[Ue]=fe,Be=Ue;break}if(Be===-1)break}const Te=S[Be];Te&&Te.connect(fe)}}const U=new V,W=new V;function Q(K,ne,fe){U.setFromMatrixPosition(ne.matrixWorld),W.setFromMatrixPosition(fe.matrixWorld);const Be=U.distanceTo(W),Te=ne.projectionMatrix.elements,Ue=fe.projectionMatrix.elements,ut=Te[14]/(Te[10]-1),N=Te[14]/(Te[10]+1),et=(Te[9]+1)/Te[5],Fe=(Te[9]-1)/Te[5],Ne=(Te[8]-1)/Te[0],Re=(Ue[8]+1)/Ue[0],Qe=ut*Ne,be=ut*Re,He=Be/(-Ne+Re),yt=He*-Ne;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(yt),K.translateZ(He),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const mt=ut+He,B=N+He,T=Qe-yt,q=be+(Be-yt),ee=et*N/B*mt,G=Fe*N/B*mt;K.projectionMatrix.makePerspective(T,q,ee,G,mt,B),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function j(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ne=K.near,fe=K.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),I.near=w.near=A.near=ne,I.far=w.far=A.far=fe,(z!==I.near||F!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,F=I.far),I.layers.mask=K.layers.mask|6,A.layers.mask=I.layers.mask&3,w.layers.mask=I.layers.mask&5;const Be=K.parent,Te=I.cameras;j(I,Be);for(let Ue=0;Ue<Te.length;Ue++)j(Te[Ue],Be);Te.length===2?Q(I,A,w):I.projectionMatrix.copy(A.projectionMatrix),ue(K,I,Be)};function ue(K,ne,fe){fe===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=cl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(K){return p[K]};let Ae=null;function _e(K,ne){if(h=ne.getViewerPose(c||a),m=ne,h!==null){const fe=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Be=!1;fe.length!==I.cameras.length&&(I.cameras.length=0,Be=!0);for(let N=0;N<fe.length;N++){const et=fe[N];let Fe=null;if(d!==null)Fe=d.getViewport(et);else{const Re=f.getViewSubImage(u,et);Fe=Re.viewport,N===0&&(e.setRenderTargetTextures(y,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(y))}let Ne=_[N];Ne===void 0&&(Ne=new $t,Ne.layers.enable(N),Ne.viewport=new Mt,_[N]=Ne),Ne.matrix.fromArray(et.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(et.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),N===0&&(I.matrix.copy(Ne.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Be===!0&&I.cameras.push(Ne)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const N=f.getDepthInformation(fe[0]);N&&N.isValid&&N.texture&&g.init(N,s.renderState)}if(Te&&Te.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let N=0;N<fe.length;N++){const et=fe[N].camera;if(et){let Fe=p[et];Fe||(Fe=new _u,p[et]=Fe);const Ne=f.getCameraImage(et);Fe.sourceTexture=Ne}}}}for(let fe=0;fe<S.length;fe++){const Be=E[fe],Te=S[fe];Be!==null&&Te!==void 0&&Te.update(Be,ne,c||a)}Ae&&Ae(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),m=null}const we=new bu;we.setAnimationLoop(_e),this.setAnimationLoop=function(K){Ae=K},this.dispose=function(){}}}const Di=new Gn,bv=new Ze;function Cv(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,yu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Bt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Bt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,y=x.envMapRotation;M&&(g.envMap.value=M,Di.copy(y),Di.x*=-1,Di.y*=-1,Di.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),g.envMapRotation.value.setFromMatrix4(bv.makeRotationFromEuler(Di)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Dv(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const y=M.program;i.uniformBlockBinding(x,y)}function c(x,M){let y=s[x.id];y===void 0&&(m(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",g));const S=M.program;i.updateUBOMapping(x,S);const E=e.render.frame;r[x.id]!==E&&(u(x),r[x.id]=E)}function h(x){const M=f();x.__bindingPointIndex=M;const y=n.createBuffer(),S=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=s[x.id],y=x.uniforms,S=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let E=0,D=y.length;E<D;E++){const C=Array.isArray(y[E])?y[E]:[y[E]];for(let A=0,w=C.length;A<w;A++){const _=C[A];if(d(_,E,A,S)===!0){const I=_.__offset,z=Array.isArray(_.value)?_.value:[_.value];let F=0;for(let O=0;O<z.length;O++){const P=z[O],L=v(P);typeof P=="number"||typeof P=="boolean"?(_.__data[0]=P,n.bufferSubData(n.UNIFORM_BUFFER,I+F,_.__data)):P.isMatrix3?(_.__data[0]=P.elements[0],_.__data[1]=P.elements[1],_.__data[2]=P.elements[2],_.__data[3]=0,_.__data[4]=P.elements[3],_.__data[5]=P.elements[4],_.__data[6]=P.elements[5],_.__data[7]=0,_.__data[8]=P.elements[6],_.__data[9]=P.elements[7],_.__data[10]=P.elements[8],_.__data[11]=0):(P.toArray(_.__data,F),F+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,_.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,M,y,S){const E=x.value,D=M+"_"+y;if(S[D]===void 0)return typeof E=="number"||typeof E=="boolean"?S[D]=E:S[D]=E.clone(),!0;{const C=S[D];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return S[D]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function m(x){const M=x.uniforms;let y=0;const S=16;for(let D=0,C=M.length;D<C;D++){const A=Array.isArray(M[D])?M[D]:[M[D]];for(let w=0,_=A.length;w<_;w++){const I=A[w],z=Array.isArray(I.value)?I.value:[I.value];for(let F=0,O=z.length;F<O;F++){const P=z[F],L=v(P),U=y%S,W=U%L.boundary,Q=U+W;y+=W,Q!==0&&S-Q<L.storage&&(y+=S-Q),I.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=L.storage}}}const E=y%S;return E>0&&(y+=S-E),x.__size=y,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function g(x){const M=x.target;M.removeEventListener("dispose",g);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Rv{constructor(e={}){const{canvas:t=od(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const x=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let S=!1;this._outputColorSpace=lt;let E=0,D=0,C=null,A=-1,w=null;const _=new Mt,I=new Mt;let z=null;const F=new qe(0);let O=0,P=t.width,L=t.height,U=1,W=null,Q=null;const j=new Mt(0,0,P,L),ue=new Mt(0,0,P,L);let Ae=!1;const _e=new ur;let we=!1,K=!1;const ne=new Ze,fe=new V,Be=new Mt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function ut(){return C===null?U:1}let N=i;function et(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vi}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",re,!1),N===null){const X="webgl2";if(N=et(X,R),N===null)throw et(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Fe,Ne,Re,Qe,be,He,yt,mt,B,T,q,ee,G,H,$,te,ce,de,oe,me,Me,ge,ae,Ie;function k(){Fe=new k0(N),Fe.init(),ge=new Sv(N,Fe),Ne=new L0(N,Fe,e,ge),Re=new yv(N,Fe),Ne.reversedDepthBuffer&&u&&Re.buffers.depth.setReversed(!0),Qe=new V0(N),be=new ov,He=new wv(N,Fe,Re,be,Ne,ge,Qe),yt=new U0(y),mt=new O0(y),B=new Kd(N),ae=new I0(N,B),T=new G0(N,B,Qe,ae),q=new X0(N,T,B,Qe),oe=new W0(N,Ne,He),te=new B0(be),ee=new av(y,yt,mt,Fe,Ne,ae,te),G=new Cv(y,be),H=new cv,$=new mv(Fe),de=new R0(y,yt,mt,Re,q,d,l),ce=new xv(y,q,Ne),Ie=new Dv(N,Qe,Ne,Re),me=new P0(N,Fe,Qe),Me=new H0(N,Fe,Qe),Qe.programs=ee.programs,y.capabilities=Ne,y.extensions=Fe,y.properties=be,y.renderLists=H,y.shadowMap=ce,y.state=Re,y.info=Qe}k();const he=new Tv(y,N);this.xr=he,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(R){R!==void 0&&(U=R,this.setSize(P,L,!1))},this.getSize=function(R){return R.set(P,L)},this.setSize=function(R,X,Z=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,L=X,t.width=Math.floor(R*U),t.height=Math.floor(X*U),Z===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(P*U,L*U).floor()},this.setDrawingBufferSize=function(R,X,Z){P=R,L=X,U=Z,t.width=Math.floor(R*Z),t.height=Math.floor(X*Z),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(j)},this.setViewport=function(R,X,Z,J){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,X,Z,J),Re.viewport(_.copy(j).multiplyScalar(U).round())},this.getScissor=function(R){return R.copy(ue)},this.setScissor=function(R,X,Z,J){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,X,Z,J),Re.scissor(I.copy(ue).multiplyScalar(U).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(R){Re.setScissorTest(Ae=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,Z=!0){let J=0;if(R){let Y=!1;if(C!==null){const pe=C.texture.format;Y=pe===Dl||pe===Cl||pe===Tl}if(Y){const pe=C.texture.type,Se=pe===_t||pe===Oi||pe===ir||pe===Ss||pe===_l||pe===El,Pe=de.getClearColor(),De=de.getClearAlpha(),ke=Pe.r,Ve=Pe.g,ze=Pe.b;Se?(m[0]=ke,m[1]=Ve,m[2]=ze,m[3]=De,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=ke,v[1]=Ve,v[2]=ze,v[3]=De,N.clearBufferiv(N.COLOR,0,v))}else J|=N.COLOR_BUFFER_BIT}X&&(J|=N.DEPTH_BUFFER_BIT),Z&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",re,!1),de.dispose(),H.dispose(),$.dispose(),be.dispose(),yt.dispose(),mt.dispose(),q.dispose(),ae.dispose(),Ie.dispose(),ee.dispose(),he.dispose(),he.removeEventListener("sessionstart",Lt),he.removeEventListener("sessionend",In),wn.stop()};function le(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=Qe.autoReset,X=ce.enabled,Z=ce.autoUpdate,J=ce.needsUpdate,Y=ce.type;k(),Qe.autoReset=R,ce.enabled=X,ce.autoUpdate=Z,ce.needsUpdate=J,ce.type=Y}function re(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const X=R.target;X.removeEventListener("dispose",ie),Ee(X)}function Ee(R){Le(R),be.remove(R)}function Le(R){const X=be.get(R).programs;X!==void 0&&(X.forEach(function(Z){ee.releaseProgram(Z)}),R.isShaderMaterial&&ee.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,Z,J,Y,pe){X===null&&(X=Te);const Se=Y.isMesh&&Y.matrixWorld.determinant()<0,Pe=gf(R,X,Z,J,Y);Re.setMaterial(J,Se);let De=Z.index,ke=1;if(J.wireframe===!0){if(De=T.getWireframeAttribute(Z),De===void 0)return;ke=2}const Ve=Z.drawRange,ze=Z.attributes.position;let Ke=Ve.start*ke,ft=(Ve.start+Ve.count)*ke;pe!==null&&(Ke=Math.max(Ke,pe.start*ke),ft=Math.min(ft,(pe.start+pe.count)*ke)),De!==null?(Ke=Math.max(Ke,0),ft=Math.min(ft,De.count)):ze!=null&&(Ke=Math.max(Ke,0),ft=Math.min(ft,ze.count));const Ct=ft-Ke;if(Ct<0||Ct===1/0)return;ae.setup(Y,J,Pe,Z,De);let St,gt=me;if(De!==null&&(St=B.get(De),gt=Me,gt.setIndex(St)),Y.isMesh)J.wireframe===!0?(Re.setLineWidth(J.wireframeLinewidth*ut()),gt.setMode(N.LINES)):gt.setMode(N.TRIANGLES);else if(Y.isLine){let Oe=J.linewidth;Oe===void 0&&(Oe=1),Re.setLineWidth(Oe*ut()),Y.isLineSegments?gt.setMode(N.LINES):Y.isLineLoop?gt.setMode(N.LINE_LOOP):gt.setMode(N.LINE_STRIP)}else Y.isPoints?gt.setMode(N.POINTS):Y.isSprite&&gt.setMode(N.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))gt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Oe=Y._multiDrawStarts,Et=Y._multiDrawCounts,tt=Y._multiDrawCount,ln=De?B.get(De).bytesPerElement:1,qi=be.get(J).currentProgram.getUniforms();for(let cn=0;cn<tt;cn++)qi.setValue(N,"_gl_DrawID",cn),gt.render(Oe[cn]/ln,Et[cn])}else if(Y.isInstancedMesh)gt.renderInstances(Ke,Ct,Y.count);else if(Z.isInstancedBufferGeometry){const Oe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Et=Math.min(Z.instanceCount,Oe);gt.renderInstances(Ke,Ct,Et)}else gt.render(Ke,Ct)};function ct(R,X,Z){R.transparent===!0&&R.side===Wt&&R.forceSinglePass===!1?(R.side=Bt,R.needsUpdate=!0,dr(R,X,Z),R.side=kn,R.needsUpdate=!0,dr(R,X,Z),R.side=Wt):dr(R,X,Z)}this.compile=function(R,X,Z=null){Z===null&&(Z=R),p=$.get(Z),p.init(X),M.push(p),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),R!==Z&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const J=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const pe=Y.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const Pe=pe[Se];ct(Pe,Z,Y),J.add(Pe)}else ct(pe,Z,Y),J.add(pe)}),p=M.pop(),J},this.compileAsync=function(R,X,Z=null){const J=this.compile(R,X,Z);return new Promise(Y=>{function pe(){if(J.forEach(function(Se){be.get(Se).currentProgram.isReady()&&J.delete(Se)}),J.size===0){Y(R);return}setTimeout(pe,10)}Fe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Je=null;function mn(R){Je&&Je(R)}function Lt(){wn.stop()}function In(){wn.start()}const wn=new bu;wn.setAnimationLoop(mn),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(R){Je=R,he.setAnimationLoop(R),R===null?wn.stop():wn.start()},he.addEventListener("sessionstart",Lt),he.addEventListener("sessionend",In),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(X),X=he.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,X,C),p=$.get(R,M.length),p.init(X),M.push(p),ne.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),_e.setFromProjectionMatrix(ne,zn,X.reversedDepth),K=this.localClippingEnabled,we=te.init(this.clippingPlanes,K),g=H.get(R,x.length),g.init(),x.push(g),he.enabled===!0&&he.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&Yi(pe,X,-1/0,y.sortObjects)}Yi(R,X,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(W,Q),Ue=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ue&&de.addToRenderList(g,R),this.info.render.frame++,we===!0&&te.beginShadows();const Z=p.state.shadowsArray;ce.render(Z,R,X),we===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,Y=g.transmissive;if(p.setupLights(),X.isArrayCamera){const pe=X.cameras;if(Y.length>0)for(let Se=0,Pe=pe.length;Se<Pe;Se++){const De=pe[Se];Jl(J,Y,R,De)}Ue&&de.render(R);for(let Se=0,Pe=pe.length;Se<Pe;Se++){const De=pe[Se];jl(g,R,De,De.viewport)}}else Y.length>0&&Jl(J,Y,R,X),Ue&&de.render(R),jl(g,R,X);C!==null&&D===0&&(He.updateMultisampleRenderTarget(C),He.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(y,R,X),ae.resetDefaultState(),A=-1,w=null,M.pop(),M.length>0?(p=M[M.length-1],we===!0&&te.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Yi(R,X,Z,J){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||_e.intersectsSprite(R)){J&&Be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ne);const Se=q.update(R),Pe=R.material;Pe.visible&&g.push(R,Se,Pe,Z,Be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||_e.intersectsObject(R))){const Se=q.update(R),Pe=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Be.copy(R.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Be.copy(Se.boundingSphere.center)),Be.applyMatrix4(R.matrixWorld).applyMatrix4(ne)),Array.isArray(Pe)){const De=Se.groups;for(let ke=0,Ve=De.length;ke<Ve;ke++){const ze=De[ke],Ke=Pe[ze.materialIndex];Ke&&Ke.visible&&g.push(R,Se,Ke,Z,Be.z,ze)}}else Pe.visible&&g.push(R,Se,Pe,Z,Be.z,null)}}const pe=R.children;for(let Se=0,Pe=pe.length;Se<Pe;Se++)Yi(pe[Se],X,Z,J)}function jl(R,X,Z,J){const Y=R.opaque,pe=R.transmissive,Se=R.transparent;p.setupLightsView(Z),we===!0&&te.setGlobalState(y.clippingPlanes,Z),J&&Re.viewport(_.copy(J)),Y.length>0&&fr(Y,X,Z),pe.length>0&&fr(pe,X,Z),Se.length>0&&fr(Se,X,Z),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Jl(R,X,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new ht(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Dn:_t,minFilter:Un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const pe=p.state.transmissionRenderTarget[J.id],Se=J.viewport||_;pe.setSize(Se.z*y.transmissionResolutionScale,Se.w*y.transmissionResolutionScale);const Pe=y.getRenderTarget(),De=y.getActiveCubeFace(),ke=y.getActiveMipmapLevel();y.setRenderTarget(pe),y.getClearColor(F),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),Ue&&de.render(Z);const Ve=y.toneMapping;y.toneMapping=$n;const ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),we===!0&&te.setGlobalState(y.clippingPlanes,J),fr(R,Z,J),He.updateMultisampleRenderTarget(pe),He.updateRenderTargetMipmap(pe),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ft=0,Ct=X.length;ft<Ct;ft++){const St=X[ft],gt=St.object,Oe=St.geometry,Et=St.material,tt=St.group;if(Et.side===Wt&&gt.layers.test(J.layers)){const ln=Et.side;Et.side=Bt,Et.needsUpdate=!0,$l(gt,Z,J,Oe,Et,tt),Et.side=ln,Et.needsUpdate=!0,Ke=!0}}Ke===!0&&(He.updateMultisampleRenderTarget(pe),He.updateRenderTargetMipmap(pe))}y.setRenderTarget(Pe,De,ke),y.setClearColor(F,O),ze!==void 0&&(J.viewport=ze),y.toneMapping=Ve}function fr(R,X,Z){const J=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,pe=R.length;Y<pe;Y++){const Se=R[Y],Pe=Se.object,De=Se.geometry,ke=Se.group;let Ve=Se.material;Ve.allowOverride===!0&&J!==null&&(Ve=J),Pe.layers.test(Z.layers)&&$l(Pe,X,Z,De,Ve,ke)}}function $l(R,X,Z,J,Y,pe){R.onBeforeRender(y,X,Z,J,Y,pe),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(y,X,Z,J,R,pe),Y.transparent===!0&&Y.side===Wt&&Y.forceSinglePass===!1?(Y.side=Bt,Y.needsUpdate=!0,y.renderBufferDirect(Z,X,J,Y,R,pe),Y.side=kn,Y.needsUpdate=!0,y.renderBufferDirect(Z,X,J,Y,R,pe),Y.side=Wt):y.renderBufferDirect(Z,X,J,Y,R,pe),R.onAfterRender(y,X,Z,J,Y,pe)}function dr(R,X,Z){X.isScene!==!0&&(X=Te);const J=be.get(R),Y=p.state.lights,pe=p.state.shadowsArray,Se=Y.state.version,Pe=ee.getParameters(R,Y.state,pe,X,Z),De=ee.getProgramCacheKey(Pe);let ke=J.programs;J.environment=R.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(R.isMeshStandardMaterial?mt:yt).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,ke===void 0&&(R.addEventListener("dispose",ie),ke=new Map,J.programs=ke);let Ve=ke.get(De);if(Ve!==void 0){if(J.currentProgram===Ve&&J.lightsStateVersion===Se)return tc(R,Pe),Ve}else Pe.uniforms=ee.getUniforms(R),R.onBeforeCompile(Pe,y),Ve=ee.acquireProgram(Pe,De),ke.set(De,Ve),J.uniforms=Pe.uniforms;const ze=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=te.uniform),tc(R,Pe),J.needsLights=xf(R),J.lightsStateVersion=Se,J.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMap.value=Y.state.directionalShadowMap,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotShadowMap.value=Y.state.spotShadowMap,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMap.value=Y.state.pointShadowMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Ve,J.uniformsList=null,Ve}function ec(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=aa.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function tc(R,X){const Z=be.get(R);Z.outputColorSpace=X.outputColorSpace,Z.batching=X.batching,Z.batchingColor=X.batchingColor,Z.instancing=X.instancing,Z.instancingColor=X.instancingColor,Z.instancingMorph=X.instancingMorph,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function gf(R,X,Z,J,Y){X.isScene!==!0&&(X=Te),He.resetTextureUnits();const pe=X.fog,Se=J.isMeshStandardMaterial?X.environment:null,Pe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:yi,De=(J.isMeshStandardMaterial?mt:yt).get(J.envMap||Se),ke=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ze=!!Z.morphAttributes.position,Ke=!!Z.morphAttributes.normal,ft=!!Z.morphAttributes.color;let Ct=$n;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ct=y.toneMapping);const St=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,gt=St!==void 0?St.length:0,Oe=be.get(J),Et=p.state.lights;if(we===!0&&(K===!0||R!==w)){const Kt=R===w&&J.id===A;te.setState(J,R,Kt)}let tt=!1;J.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Et.state.version||Oe.outputColorSpace!==Pe||Y.isBatchedMesh&&Oe.batching===!1||!Y.isBatchedMesh&&Oe.batching===!0||Y.isBatchedMesh&&Oe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Oe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Oe.instancing===!1||!Y.isInstancedMesh&&Oe.instancing===!0||Y.isSkinnedMesh&&Oe.skinning===!1||!Y.isSkinnedMesh&&Oe.skinning===!0||Y.isInstancedMesh&&Oe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Oe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Oe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Oe.instancingMorph===!1&&Y.morphTexture!==null||Oe.envMap!==De||J.fog===!0&&Oe.fog!==pe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==te.numPlanes||Oe.numIntersection!==te.numIntersection)||Oe.vertexAlphas!==ke||Oe.vertexTangents!==Ve||Oe.morphTargets!==ze||Oe.morphNormals!==Ke||Oe.morphColors!==ft||Oe.toneMapping!==Ct||Oe.morphTargetsCount!==gt)&&(tt=!0):(tt=!0,Oe.__version=J.version);let ln=Oe.currentProgram;tt===!0&&(ln=dr(J,X,Y));let qi=!1,cn=!1,Is=!1;const Tt=ln.getUniforms(),gn=Oe.uniforms;if(Re.useProgram(ln.program)&&(qi=!0,cn=!0,Is=!0),J.id!==A&&(A=J.id,cn=!0),qi||w!==R){Re.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Tt.setValue(N,"projectionMatrix",R.projectionMatrix),Tt.setValue(N,"viewMatrix",R.matrixWorldInverse);const tn=Tt.map.cameraPosition;tn!==void 0&&tn.setValue(N,fe.setFromMatrixPosition(R.matrixWorld)),Ne.logarithmicDepthBuffer&&Tt.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Tt.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,cn=!0,Is=!0)}if(Y.isSkinnedMesh){Tt.setOptional(N,Y,"bindMatrix"),Tt.setOptional(N,Y,"bindMatrixInverse");const Kt=Y.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Tt.setValue(N,"boneTexture",Kt.boneTexture,He))}Y.isBatchedMesh&&(Tt.setOptional(N,Y,"batchingTexture"),Tt.setValue(N,"batchingTexture",Y._matricesTexture,He),Tt.setOptional(N,Y,"batchingIdTexture"),Tt.setValue(N,"batchingIdTexture",Y._indirectTexture,He),Tt.setOptional(N,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Tt.setValue(N,"batchingColorTexture",Y._colorsTexture,He));const vn=Z.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&oe.update(Y,Z,ln),(cn||Oe.receiveShadow!==Y.receiveShadow)&&(Oe.receiveShadow=Y.receiveShadow,Tt.setValue(N,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(gn.envMap.value=De,gn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(gn.envMapIntensity.value=X.environmentIntensity),cn&&(Tt.setValue(N,"toneMappingExposure",y.toneMappingExposure),Oe.needsLights&&vf(gn,Is),pe&&J.fog===!0&&G.refreshFogUniforms(gn,pe),G.refreshMaterialUniforms(gn,J,U,L,p.state.transmissionRenderTarget[R.id]),aa.upload(N,ec(Oe),gn,He)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(aa.upload(N,ec(Oe),gn,He),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Tt.setValue(N,"center",Y.center),Tt.setValue(N,"modelViewMatrix",Y.modelViewMatrix),Tt.setValue(N,"normalMatrix",Y.normalMatrix),Tt.setValue(N,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Kt=J.uniformsGroups;for(let tn=0,Pa=Kt.length;tn<Pa;tn++){const Ai=Kt[tn];Ie.update(Ai,ln),Ie.bind(Ai,ln)}}return ln}function vf(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function xf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,X,Z){const J=be.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),be.get(R.texture).__webglTexture=X,be.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const Z=be.get(R);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0};const Mf=N.createFramebuffer();this.setRenderTarget=function(R,X=0,Z=0){C=R,E=X,D=Z;let J=!0,Y=null,pe=!1,Se=!1;if(R){const De=be.get(R);if(De.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(N.FRAMEBUFFER,null),J=!1;else if(De.__webglFramebuffer===void 0)He.setupRenderTarget(R);else if(De.__hasExternalTextures)He.rebindTextures(R,be.get(R.texture).__webglTexture,be.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ze=R.depthTexture;if(De.__boundDepthTexture!==ze){if(ze!==null&&be.has(ze)&&(R.width!==ze.image.width||R.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Se=!0);const Ve=be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[X])?Y=Ve[X][Z]:Y=Ve[X],pe=!0):R.samples>0&&He.useMultisampledRTT(R)===!1?Y=be.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?Y=Ve[Z]:Y=Ve,_.copy(R.viewport),I.copy(R.scissor),z=R.scissorTest}else _.copy(j).multiplyScalar(U).floor(),I.copy(ue).multiplyScalar(U).floor(),z=Ae;if(Z!==0&&(Y=Mf),Re.bindFramebuffer(N.FRAMEBUFFER,Y)&&J&&Re.drawBuffers(R,Y),Re.viewport(_),Re.scissor(I),Re.setScissorTest(z),pe){const De=be.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+X,De.__webglTexture,Z)}else if(Se){const De=X;for(let ke=0;ke<R.textures.length;ke++){const Ve=be.get(R.textures[ke]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ke,Ve.__webglTexture,Z,De)}}else if(R!==null&&Z!==0){const De=be.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,De.__webglTexture,Z)}A=-1},this.readRenderTargetPixels=function(R,X,Z,J,Y,pe,Se,Pe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Se!==void 0&&(De=De[Se]),De){Re.bindFramebuffer(N.FRAMEBUFFER,De);try{const ke=R.textures[Pe],Ve=ke.format,ze=ke.type;if(!Ne.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-J&&Z>=0&&Z<=R.height-Y&&(R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pe),N.readPixels(X,Z,J,Y,ge.convert(Ve),ge.convert(ze),pe))}finally{const ke=C!==null?be.get(C).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(R,X,Z,J,Y,pe,Se,Pe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Se!==void 0&&(De=De[Se]),De)if(X>=0&&X<=R.width-J&&Z>=0&&Z<=R.height-Y){Re.bindFramebuffer(N.FRAMEBUFFER,De);const ke=R.textures[Pe],Ve=ke.format,ze=ke.type;if(!Ne.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ke),N.bufferData(N.PIXEL_PACK_BUFFER,pe.byteLength,N.STREAM_READ),R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pe),N.readPixels(X,Z,J,Y,ge.convert(Ve),ge.convert(ze),0);const ft=C!==null?be.get(C).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,ft);const Ct=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ld(N,Ct,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ke),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pe),N.deleteBuffer(Ke),N.deleteSync(Ct),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,Z=0){const J=Math.pow(2,-Z),Y=Math.floor(R.image.width*J),pe=Math.floor(R.image.height*J),Se=X!==null?X.x:0,Pe=X!==null?X.y:0;He.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,Se,Pe,Y,pe),Re.unbindTexture()};const yf=N.createFramebuffer(),wf=N.createFramebuffer();this.copyTextureToTexture=function(R,X,Z=null,J=null,Y=0,pe=null){pe===null&&(Y!==0?(rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=Y,Y=0):pe=0);let Se,Pe,De,ke,Ve,ze,Ke,ft,Ct;const St=R.isCompressedTexture?R.mipmaps[pe]:R.image;if(Z!==null)Se=Z.max.x-Z.min.x,Pe=Z.max.y-Z.min.y,De=Z.isBox3?Z.max.z-Z.min.z:1,ke=Z.min.x,Ve=Z.min.y,ze=Z.isBox3?Z.min.z:0;else{const vn=Math.pow(2,-Y);Se=Math.floor(St.width*vn),Pe=Math.floor(St.height*vn),R.isDataArrayTexture?De=St.depth:R.isData3DTexture?De=Math.floor(St.depth*vn):De=1,ke=0,Ve=0,ze=0}J!==null?(Ke=J.x,ft=J.y,Ct=J.z):(Ke=0,ft=0,Ct=0);const gt=ge.convert(X.format),Oe=ge.convert(X.type);let Et;X.isData3DTexture?(He.setTexture3D(X,0),Et=N.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(He.setTexture2DArray(X,0),Et=N.TEXTURE_2D_ARRAY):(He.setTexture2D(X,0),Et=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const tt=N.getParameter(N.UNPACK_ROW_LENGTH),ln=N.getParameter(N.UNPACK_IMAGE_HEIGHT),qi=N.getParameter(N.UNPACK_SKIP_PIXELS),cn=N.getParameter(N.UNPACK_SKIP_ROWS),Is=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,St.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ke),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ze);const Tt=R.isDataArrayTexture||R.isData3DTexture,gn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const vn=be.get(R),Kt=be.get(X),tn=be.get(vn.__renderTarget),Pa=be.get(Kt.__renderTarget);Re.bindFramebuffer(N.READ_FRAMEBUFFER,tn.__webglFramebuffer),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,Pa.__webglFramebuffer);for(let Ai=0;Ai<De;Ai++)Tt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(R).__webglTexture,Y,ze+Ai),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(X).__webglTexture,pe,Ct+Ai)),N.blitFramebuffer(ke,Ve,Se,Pe,Ke,ft,Se,Pe,N.DEPTH_BUFFER_BIT,N.NEAREST);Re.bindFramebuffer(N.READ_FRAMEBUFFER,null),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||be.has(R)){const vn=be.get(R),Kt=be.get(X);Re.bindFramebuffer(N.READ_FRAMEBUFFER,yf),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,wf);for(let tn=0;tn<De;tn++)Tt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vn.__webglTexture,Y,ze+tn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,vn.__webglTexture,Y),gn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Kt.__webglTexture,pe,Ct+tn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Kt.__webglTexture,pe),Y!==0?N.blitFramebuffer(ke,Ve,Se,Pe,Ke,ft,Se,Pe,N.COLOR_BUFFER_BIT,N.NEAREST):gn?N.copyTexSubImage3D(Et,pe,Ke,ft,Ct+tn,ke,Ve,Se,Pe):N.copyTexSubImage2D(Et,pe,Ke,ft,ke,Ve,Se,Pe);Re.bindFramebuffer(N.READ_FRAMEBUFFER,null),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else gn?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Et,pe,Ke,ft,Ct,Se,Pe,De,gt,Oe,St.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(Et,pe,Ke,ft,Ct,Se,Pe,De,gt,St.data):N.texSubImage3D(Et,pe,Ke,ft,Ct,Se,Pe,De,gt,Oe,St):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pe,Ke,ft,Se,Pe,gt,Oe,St.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pe,Ke,ft,St.width,St.height,gt,St.data):N.texSubImage2D(N.TEXTURE_2D,pe,Ke,ft,Se,Pe,gt,Oe,St);N.pixelStorei(N.UNPACK_ROW_LENGTH,tt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ln),N.pixelStorei(N.UNPACK_SKIP_PIXELS,qi),N.pixelStorei(N.UNPACK_SKIP_ROWS,cn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Is),pe===0&&X.generateMipmaps&&N.generateMipmap(Et),Re.unbindTexture()},this.initRenderTarget=function(R){be.get(R).__webglFramebuffer===void 0&&He.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?He.setTextureCube(R,0):R.isData3DTexture?He.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?He.setTexture2DArray(R,0):He.setTexture2D(R,0),Re.unbindTexture()},this.resetState=function(){E=0,D=0,C=null,Re.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const b=.5,se=32,bt=2,rt=4,vt=128,nh={seed:1337,chunksX:8,chunksY:4,chunksZ:8,seaLevel:22};function nt(n,e,t){return(n*1024+e)*1024+t}const Iv=0,ar=1,Es=2,Ts=3,or=4,Fn=5,mi=6,gs=7,Pu=8,Lu=9,Bu=10,Uu=11,zu=12,Fu=13,Nu=14,Ou=15,zl=16,Fl=17,bs=18,Nl=19,Pv=20,Ol=21,Lv=22,kl=23,Bv=24,bn=25,ya=26,Gl=27,Dt=[{id:Iv,name:"air",albedo:[0,0,0],roughness:1,metalness:0,pattern:"stone",scale:1,placeable:!1,hard:!1},{id:ar,name:"stone",albedo:[.42,.41,.4],roughness:.85,metalness:0,pattern:"stone",scale:3,placeable:!0,hard:!1},{id:Es,name:"dirt",albedo:[.3,.21,.14],roughness:.95,metalness:0,pattern:"dirt",scale:2,placeable:!0,hard:!1},{id:Ts,name:"grass",albedo:[.22,.38,.12],roughness:.9,metalness:0,pattern:"grass",scale:2,placeable:!0,hard:!1},{id:or,name:"sand",albedo:[.76,.66,.48],roughness:.9,metalness:0,pattern:"sand",scale:1.5,placeable:!0,hard:!1,repose:34},{id:Fn,name:"snow",albedo:[.92,.94,.97],roughness:.6,metalness:0,pattern:"snow",scale:2,placeable:!0,hard:!1},{id:mi,name:"wood",albedo:[.4,.26,.14],roughness:.8,metalness:0,pattern:"wood",scale:1,placeable:!0,hard:!1},{id:gs,name:"leaves",albedo:[.16,.34,.1],roughness:.8,metalness:0,pattern:"leaves",scale:1,placeable:!0,hard:!1},{id:Pu,name:"brick",albedo:[.56,.26,.18],roughness:.8,metalness:0,pattern:"clay",scale:1,placeable:!0,hard:!0},{id:Lu,name:"marble",albedo:[.93,.92,.9],roughness:.32,metalness:0,pattern:"marble",scale:2.5,placeable:!0,hard:!1},{id:Bu,name:"obsidian",albedo:[.02,.02,.03],roughness:.08,metalness:.05,pattern:"obsidian",scale:2,placeable:!0,hard:!1},{id:Uu,name:"lantern",albedo:[.9,.75,.5],roughness:.5,metalness:0,pattern:"glow",scale:1,emissive:[1.7,1.15,.5],placeable:!0,hard:!0},{id:zu,name:"moss",albedo:[.2,.3,.12],roughness:.95,metalness:0,pattern:"moss",scale:1.5,placeable:!0,hard:!1},{id:Fu,name:"planks",albedo:[.55,.38,.2],roughness:.7,metalness:0,pattern:"planks",scale:1,placeable:!0,hard:!0},{id:Nu,name:"cobble",albedo:[.45,.44,.42],roughness:.9,metalness:0,pattern:"cobble",scale:1,placeable:!0,hard:!0},{id:Ou,name:"torch",albedo:[.3,.2,.1],roughness:.85,metalness:0,pattern:"torch",scale:.5,emissive:[20,10,3.1],placeable:!0,hard:!0,solid:!1},{id:zl,name:"lamp",albedo:[.25,.25,.28],roughness:.5,metalness:.3,pattern:"obsidian",scale:.5,emissive:[16,15.5,12.8],placeable:!0,hard:!0,solid:!1},{id:Fl,name:"goat",albedo:[.62,.55,.44],roughness:.95,metalness:0,pattern:"fur",scale:.35,placeable:!0,hard:!1,spawn:"goat"},{id:bs,name:"anchor",albedo:[.2,.07,.34],roughness:.35,metalness:.1,pattern:"anchor",scale:1,emissive:[.1,.03,.22],placeable:!0,hard:!0},{id:Nl,name:"penguin",albedo:[.07,.07,.09],roughness:.8,metalness:0,pattern:"fur",scale:.3,placeable:!0,hard:!1,spawn:"penguin"},{id:Pv,name:"plumage",albedo:[.92,.91,.86],roughness:.75,metalness:0,pattern:"fur",scale:.3,placeable:!1,hard:!1},{id:Ol,name:"fish",albedo:[.88,.42,.1],roughness:.35,metalness:.1,pattern:"scales",scale:.25,placeable:!0,hard:!1,spawn:"fish"},{id:Lv,name:"fin",albedo:[.95,.62,.22],roughness:.3,metalness:.05,pattern:"scales",scale:.15,placeable:!1,hard:!1},{id:kl,name:"cat",albedo:[.42,.38,.35],roughness:.95,metalness:0,pattern:"fur",scale:.3,placeable:!0,hard:!1,spawn:"cat"},{id:Bv,name:"muzzle",albedo:[.85,.82,.78],roughness:.95,metalness:0,pattern:"fur",scale:.3,placeable:!1,hard:!1},{id:bn,name:"ice",albedo:[.8,.9,.97],roughness:.1,metalness:0,pattern:"ice",scale:2,placeable:!0,hard:!1},{id:ya,name:"water",albedo:[.16,.38,.62],roughness:.1,metalness:0,pattern:"water",scale:1,placeable:!0,hard:!1},{id:Gl,name:"sponge",albedo:[.86,.78,.3],roughness:.9,metalness:0,pattern:"sand",scale:1,placeable:!0,hard:!1}],Uv=[ar,Es,Ts,or,mi,gs,Pu,Fu,Nu,Lu,Bu,bn,ya,Gl,Ou,zl,Uu,Fn,zu,Fl,Nl,Ol,kl,bs],fn=Uv.map(n=>Dt[n]);Dt.length;function Jn(n){return Dt[n]?.hard??!1}function pt(n){const e=Dt[n];return!!e&&e.hard&&e.solid!==!1}const en=134217727,It=3;function ku(n){let e=0;for(;n;)n&=n-1,e++;return e}class Ca{ox;oy;oz;nx;ny;nz;density;material;hard;sub;water;sy;sx;constructor(e,t,i,s=0,r=0,a=0,o,l,c,h,f){this.nx=e,this.ny=t,this.nz=i,this.ox=s,this.oy=r,this.oz=a,this.sy=i,this.sx=t*i,this.density=o??new Float32Array(e*t*i).fill(-rt),this.material=l??new Uint8Array(e*t*i),this.hard=c??new Uint8Array(e*t*i),this.sub=h??new Uint32Array(e*t*i),this.water=f??new Uint8Array(e*t*i)}waterAt(e,t,i){const s=Math.floor(e/b),r=Math.floor(t/b),a=Math.floor(i/b);if(!this.inBounds(s,r,a))return!1;const o=this.water[this.index(s,r,a)];return o===0?!1:t-r*b<=Math.min(o,vt)/vt*b}subMask(e,t,i){if(!this.inBounds(e,t,i))return 0;const s=this.index(e,t,i);if(this.hard[s]===0)return 0;const r=this.sub[s];return r===0?en:r}subOccupied(e,t,i,s,r,a){return(this.subMask(e,t,i)&1<<s+3*(r+3*a))!==0}solidFraction(e,t,i){const s=this.subMask(e,t,i);return s===0?0:s===en?1:ku(s)/27}hardOccupiedAt(e,t,i){const s=Math.floor(e/b),r=Math.floor(t/b),a=Math.floor(i/b),o=this.subMask(s,r,a);if(o===0)return!1;if(o===en)return!0;const l=Math.min(2,Math.floor((e/b-s)*3)),c=Math.min(2,Math.floor((t/b-r)*3)),h=Math.min(2,Math.floor((i/b-a)*3));return(o&1<<l+3*(c+3*h))!==0}getHard(e,t,i){return this.inBounds(e,t,i)?this.hard[this.index(e,t,i)]:0}setHard(e,t,i,s){this.inBounds(e,t,i)&&(this.hard[this.index(e,t,i)]=s)}hardAt(e,t,i){return this.getHard(Math.floor(e/b),Math.floor(t/b),Math.floor(i/b))}solidAt(e,t,i){return pt(this.hardAt(e,t,i))&&this.hardOccupiedAt(e,t,i)||this.sampleNearest(e,t,i)>0}index(e,t,i){return(e-this.ox)*this.sx+(t-this.oy)*this.sy+(i-this.oz)}inBounds(e,t,i){return e>=this.ox&&t>=this.oy&&i>=this.oz&&e<this.ox+this.nx&&t<this.oy+this.ny&&i<this.oz+this.nz}get(e,t,i){return this.inBounds(e,t,i)?this.density[this.index(e,t,i)]:-rt}getMaterial(e,t,i){return this.inBounds(e,t,i)?this.material[this.index(e,t,i)]:0}set(e,t,i,s,r){if(!this.inBounds(e,t,i))return;const a=this.index(e,t,i);this.density[a]=s<-rt?-rt:s>rt?rt:s,r!==void 0&&(this.material[a]=r)}sample(e,t,i){const s=e/b-this.ox,r=t/b-this.oy,a=i/b-this.oz;let o=Math.floor(s),l=Math.floor(r),c=Math.floor(a),h=s-o,f=r-l,u=a-c;o<0?(o=0,h=0):o>=this.nx-1&&(o=this.nx-2,h=1),l<0?(l=0,f=0):l>=this.ny-1&&(l=this.ny-2,f=1),c<0?(c=0,u=0):c>=this.nz-1&&(c=this.nz-2,u=1);const d=this.density,m=this.sx,v=this.sy,g=o*m+l*v+c,p=d[g]+(d[g+m]-d[g])*h,x=d[g+1]+(d[g+m+1]-d[g+1])*h,M=d[g+v]+(d[g+m+v]-d[g+v])*h,y=d[g+v+1]+(d[g+m+v+1]-d[g+v+1])*h,S=p+(M-p)*f,E=x+(y-x)*f;return S+(E-S)*u}sampleNearest(e,t,i){const s=Math.round(e/b),r=Math.round(t/b),a=Math.round(i/b);return this.get(s,r,a)}gradient(e,t,i,s=[0,0,0],r=b*.5){return s[0]=this.sample(e+r,t,i)-this.sample(e-r,t,i),s[1]=this.sample(e,t+r,i)-this.sample(e,t-r,i),s[2]=this.sample(e,t,i+r)-this.sample(e,t,i-r),s}materialAt(e,t,i){const s=Math.floor(e/b),r=Math.floor(t/b),a=Math.floor(i/b);let o=-1/0,l=0;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let f=0;f<=1;f++){const u=this.get(s+c,r+h,a+f);u>o&&(o=u,l=this.getMaterial(s+c,r+h,a+f))}return l}extract(e,t,i,s,r,a){const o=new Ca(s,r,a,e,t,i),l=o.density,c=o.material;for(let h=0;h<s;h++){const f=e+h,u=f>=this.ox&&f<this.ox+this.nx;for(let d=0;d<r;d++){const m=t+d,v=m>=this.oy&&m<this.oy+this.ny,g=h*r*a+d*a;if(!u||!v)continue;const p=Math.max(i,this.oz),x=Math.min(i+a,this.oz+this.nz);if(x<=p)continue;const M=this.index(f,m,p),y=x-p;l.set(this.density.subarray(M,M+y),g+(p-i)),c.set(this.material.subarray(M,M+y),g+(p-i)),o.hard.set(this.hard.subarray(M,M+y),g+(p-i)),o.sub.set(this.sub.subarray(M,M+y),g+(p-i)),o.water.set(this.water.subarray(M,M+y),g+(p-i))}}return o}get sizeX(){return(this.nx-1)*b}get sizeY(){return(this.ny-1)*b}get sizeZ(){return(this.nz-1)*b}}const zv=2;function Gu(n){const e=Math.round(zv/b),t=Math.floor((n.nx-1)/2)-(e>>1),i=Math.floor((n.nz-1)/2)-(e>>1);return{x0:t,y0:0,z0:i,x1:t+e,y1:e,z1:i+e}}function er(n,e,t,i){const s=Gu(n);return e>=s.x0&&e<s.x1&&t>=s.y0&&t<s.y1&&i>=s.z0&&i<s.z1}function Fv(n){const e=Gu(n);let t=0;for(let i=e.x0;i<e.x1;i++)for(let s=e.y0;s<e.y1;s++)for(let r=e.z0;r<e.z1;r++){const a=n.index(i,s,r);n.hard[a]===bs&&n.sub[a]===0||(n.hard[a]=bs,n.sub[a]=0,t++)}return t}function fl(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function uo(n,e,t){let i=Math.imul(n|0,668265261)^Math.imul(e|0,374761393)^Math.imul(t|0,2654435761);return i=Math.imul(i^i>>>15,2246822507),i=Math.imul(i^i>>>13,3266489909),((i^i>>>16)>>>0)/4294967296}const Ri=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],Nv=.5*(Math.sqrt(3)-1),Os=(3-Math.sqrt(3))/6,Ov=1/3,Pn=1/6;class ih{perm=new Uint8Array(512);permMod12=new Uint8Array(512);constructor(e){const t=new Uint8Array(256);for(let s=0;s<256;s++)t[s]=s;const i=fl(e);for(let s=255;s>0;s--){const r=Math.floor(i()*(s+1)),a=t[s];t[s]=t[r],t[r]=a}for(let s=0;s<512;s++)this.perm[s]=t[s&255],this.permMod12[s]=this.perm[s]%12}noise2(e,t){const i=this.perm,s=this.permMod12;let r=0,a=0,o=0;const l=(e+t)*Nv,c=Math.floor(e+l),h=Math.floor(t+l),f=(c+h)*Os,u=e-(c-f),d=t-(h-f);let m,v;u>d?(m=1,v=0):(m=0,v=1);const g=u-m+Os,p=d-v+Os,x=u-1+2*Os,M=d-1+2*Os,y=c&255,S=h&255,E=s[y+i[S]],D=s[y+m+i[S+v]],C=s[y+1+i[S+1]];let A=.5-u*u-d*d;if(A>=0){A*=A;const I=Ri[E];r=A*A*(I[0]*u+I[1]*d)}let w=.5-g*g-p*p;if(w>=0){w*=w;const I=Ri[D];a=w*w*(I[0]*g+I[1]*p)}let _=.5-x*x-M*M;if(_>=0){_*=_;const I=Ri[C];o=_*_*(I[0]*x+I[1]*M)}return 70*(r+a+o)}noise3(e,t,i){const s=this.perm,r=this.permMod12;let a=0,o=0,l=0,c=0;const h=(e+t+i)*Ov,f=Math.floor(e+h),u=Math.floor(t+h),d=Math.floor(i+h),m=(f+u+d)*Pn,v=e-(f-m),g=t-(u-m),p=i-(d-m);let x,M,y,S,E,D;v>=g?g>=p?(x=1,M=0,y=0,S=1,E=1,D=0):v>=p?(x=1,M=0,y=0,S=1,E=0,D=1):(x=0,M=0,y=1,S=1,E=0,D=1):g<p?(x=0,M=0,y=1,S=0,E=1,D=1):v<p?(x=0,M=1,y=0,S=0,E=1,D=1):(x=0,M=1,y=0,S=1,E=1,D=0);const C=v-x+Pn,A=g-M+Pn,w=p-y+Pn,_=v-S+2*Pn,I=g-E+2*Pn,z=p-D+2*Pn,F=v-1+3*Pn,O=g-1+3*Pn,P=p-1+3*Pn,L=f&255,U=u&255,W=d&255,Q=r[L+s[U+s[W]]],j=r[L+x+s[U+M+s[W+y]]],ue=r[L+S+s[U+E+s[W+D]]],Ae=r[L+1+s[U+1+s[W+1]]];let _e=.6-v*v-g*g-p*p;if(_e>=0){_e*=_e;const fe=Ri[Q];a=_e*_e*(fe[0]*v+fe[1]*g+fe[2]*p)}let we=.6-C*C-A*A-w*w;if(we>=0){we*=we;const fe=Ri[j];o=we*we*(fe[0]*C+fe[1]*A+fe[2]*w)}let K=.6-_*_-I*I-z*z;if(K>=0){K*=K;const fe=Ri[ue];l=K*K*(fe[0]*_+fe[1]*I+fe[2]*z)}let ne=.6-F*F-O*O-P*P;if(ne>=0){ne*=ne;const fe=Ri[Ae];c=ne*ne*(fe[0]*F+fe[1]*O+fe[2]*P)}return 32*(a+o+l+c)}fbm2(e,t,i,s=2,r=.5){let a=0,o=1,l=1,c=0;for(let h=0;h<i;h++)a+=o*this.noise2(e*l,t*l),c+=o,o*=r,l*=s;return a/c}fbm3(e,t,i,s,r=2,a=.5){let o=0,l=1,c=1,h=0;for(let f=0;f<s;f++)o+=l*this.noise3(e*c,t*c,i*c),h+=l,l*=a,c*=r;return o/h}ridged2(e,t,i){let s=0,r=.5,a=1,o=1;for(let l=0;l<i;l++){let c=1-Math.abs(this.noise2(e*a,t*a));c*=c*o,o=Math.min(1,Math.max(0,c*2)),s+=c*r,r*=.5,a*=2}return Math.min(1,s)}}class sh{constructor(e){this.cfg=e,this.n=new ih(e.seed),this.n2=new ih(e.seed^1540483477)}n;n2;height(e,t){const i=this.n,s=i.fbm2(e/260,t/260,4),r=rh(-.15,.55,s),a=i.ridged2(e/110+31.7,t/110-12.3,4),o=i.fbm2(e/34+7.1,t/34+3.3,3),l=i.fbm2(e/9,t/9,2);let c=this.cfg.seaLevel+4+s*12;return c+=Math.pow(a,1.6)*30*r,c+=o*4+l*.8,c}heightInfo(e,t){const i=this.height(e,t),s=.75,r=(this.height(e+s,t)-this.height(e-s,t))/(2*s),a=(this.height(e,t+s)-this.height(e,t-s))/(2*s);return{height:i,slope:Math.hypot(r,a)}}generate(e,t=!0){const{nx:i,ny:s,nz:r}=e,a=this.n,o=this.n2,l=this.cfg.seaLevel,c=14;for(let h=0;h<i;h++){const f=(e.ox+h)*b;for(let u=0;u<r;u++){const d=(e.oz+u)*b,{height:m,slope:v}=this.heightInfo(f,d),g=50+a.noise2(f/40,d/40)*3,p=v>1+a.noise2(f/6,d/6)*.25;for(let x=0;x<s;x++){const M=(e.oy+x)*b;let y=m-M;if(Math.abs(y)<c){const C=a.fbm3(f/22,M/22,d/22,3);if(y+=C*(1.5+Math.min(v,2)*2),M<m-3&&M>3){const A=o.noise3(f/24,M/16,d/24),w=o.noise3(f/24+71.3,M/16+11.9,d/24-40.1),I=(Math.sqrt(A*A+w*w)-.11)*18,z=rh(m-3,m-8,M),F=I+(1-z)*100;F<y&&(y=F)}}y=y>rt?rt:y<-rt?-rt:y,e.oy+x>=this.cfg.chunksY*se&&(y=-rt);const S=m-M;let E;M>g&&S<3?E=Fn:p&&S<6?E=ar:S<1.2?E=M<l+1.5?or:Ts:S<4.5?E=M<l+1?or:Es:E=ar;const D=e.index(e.ox+h,e.oy+x,e.oz+u);e.density[D]=y,e.material[D]=E}}}t&&this.plantTrees(e)}treeSites(e,t){const i=this.cfg.seaLevel,s=[];for(let r=4;r<e-4;r+=2)for(let a=4;a<t-4;a+=2){const o=uo(r,a,this.cfg.seed),l=this.n.fbm2(r/70+200,a/70+200,2);if(o>.045+l*.06)continue;const{height:c,slope:h}=this.heightInfo(r,a);c<i+2.5||h>.7||c>46||s.push({x:r,z:a,trunkH:3.5+uo(r+17,a+5,this.cfg.seed)*3,canopyR:2+uo(r+3,a+29,this.cfg.seed)*1.2})}return s}siteGround(e,t){return this.groundAt(e,t.x,t.z,this.heightInfo(t.x,t.z).height+3)}groundAt(e,t,i,s){const r=Math.floor(t/b),a=Math.floor(i/b);for(let o=Math.min(e.sizeY-1.5,s);o>this.cfg.seaLevel;o-=b){if(e.sample(t,o,i)<=0)continue;const l=e.getMaterial(r,Math.floor(o/b),a);if(!(l===mi||l===gs))return o}return-1}plantTreeAt(e,t,i=1,s=this.siteGround(e,t)){if(s<0)return null;const r=t.trunkH*i,a=t.canopyR*(.3+.7*i);this.stampSphereUnion(e,t.x,s+r+a*.5,t.z,a,gs,.6*i),this.stampCylinderUnion(e,t.x,s-.5,t.z,r+a*.6,.42*(.6+.4*i),mi);const o=a+1.5;return{x0:Math.max(0,Math.floor((t.x-o)/b)),y0:Math.max(0,Math.floor((s-1)/b)),z0:Math.max(0,Math.floor((t.z-o)/b)),x1:Math.min(e.nx-1,Math.ceil((t.x+o)/b)),y1:Math.min(e.ny-1,Math.ceil((s+r+a*1.5+1)/b)),z1:Math.min(e.nz-1,Math.ceil((t.z+o)/b))}}plantTrees(e){for(const t of this.treeSites(e.sizeX,e.sizeZ))this.plantTreeAt(e,t,1)}treeGrowth(e,t,i){if(i<0)return 0;const s=Math.floor(t.x/b),r=Math.floor(t.z/b),a=Math.max(0,Math.floor((i-.5)/b)),o=Math.min(e.ny-1,Math.ceil((i+1)/b)),l=Math.min(e.ny-1,Math.ceil((i+t.trunkH+t.canopyR*1.5+1)/b));let c=!1,h=i,f=i;for(let m=a;m<=l;m++)for(let v=0;v<=1;v++)for(let g=0;g<=1;g++){const p=s+v,x=r+g;if(!e.inBounds(p,m,x))continue;const M=e.index(p,m,x);if(e.density[M]<=0)continue;const y=e.material[M];y===mi&&m<=o&&(c=!0),y===mi&&(h=Math.max(h,m*b)),(y===mi||y===gs)&&(f=Math.max(f,m*b))}if(!c)return 0;const u=Math.min(1,Math.max(0,h-i)/(t.trunkH+t.canopyR*.6)),d=Math.min(1,Math.max(0,f-i)/(t.trunkH+t.canopyR*1.5));return u>=.7&&d>=.85?Math.max(u,.9):u}siteFree(e,t,i){if(i<0||i<this.cfg.seaLevel+1)return!1;const s=Math.floor(t.x/b),r=Math.floor(t.z/b);if(e.hardAt(t.x,i-.2,t.z)!==0||e.waterAt(t.x,i+.3,t.z))return!1;for(let a=i+.6;a<i+t.trunkH+1;a+=b){if(e.hardAt(t.x,a,t.z)!==0)return!1;if(e.sample(t.x,a,t.z)>0){const o=e.getMaterial(s,Math.floor(a/b),r);if(o!==mi&&o!==gs)return!1}}return!0}stampSphereUnion(e,t,i,s,r,a,o){const l=Math.floor((t-r-1)/b),c=Math.ceil((t+r+1)/b),h=Math.floor((i-r-1)/b),f=Math.ceil((i+r+1)/b),u=Math.floor((s-r-1)/b),d=Math.ceil((s+r+1)/b);for(let m=l;m<=c;m++)for(let v=h;v<=f;v++)for(let g=u;g<=d;g++){if(!e.inBounds(m,v,g))continue;const p=m*b,x=v*b,M=g*b,y=Math.hypot(p-t,(x-i)*1.15,M-s),S=o*this.n2.noise3(p*1.3,x*1.3,M*1.3),E=r-y+S,D=e.index(m,v,g);E>e.density[D]&&(e.density[D]=Math.min(E,rt)),E>-b&&(e.material[D]=a)}}stampCylinderUnion(e,t,i,s,r,a,o,l=i+.5){const c=Math.floor((t-a-1)/b),h=Math.ceil((t+a+1)/b),f=Math.floor((s-a-1)/b),u=Math.ceil((s+a+1)/b),d=Math.floor(i/b),m=Math.ceil((i+r)/b);for(let v=c;v<=h;v++)for(let g=d;g<=m;g++)for(let p=f;p<=u;p++){if(!e.inBounds(v,g,p))continue;const x=v*b,M=g*b,y=p*b,S=a-Math.hypot(x-t,y-s),E=Math.min(M-i,i+r-M),D=Math.min(S,E),C=e.index(v,g,p);D>e.density[C]&&(e.density[C]=Math.min(D,rt)),D>-b*.6&&M>=l-1e-6&&(e.material[C]=o)}}}function rh(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const Hl=2,ks=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],ah=(n,e)=>[n[0]*e,n[1]*e,n[2]*e];function Nr(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function oh(n){const e=(n-6)/24*Math.PI*2,t=Math.cos(e),i=Math.sin(e),s=Math.hypot(t,i,.35);let r=[t/s,i/s,.35/s];const a=r[1],o=Nr(-.08,.18,a),l=1-Nr(.02,.35,a),c=ks([1,.98,.94],[1,.5,.22],l),h=3*Math.pow(Nr(-.02,.25,a),.8);let f=ah(c,h);const u=[.1,.26,.64],d=[.46,.6,.8],m=[.95,.45,.18],v=[.01,.014,.032],g=[.022,.028,.05];let p=ks(d,m,l*.85),x=u;x=ks(v,x,o),p=ks(g,p,o);const M=ah(ks(x,p,.5),.9);if(a<0){const y=Nr(0,-.12,a)*.28;r=[-r[0],-r[1],r[2]],r[1]>.05?f=[.55*y,.65*y,.95*y]:f=[0,0,0]}return{dir:r,sun:f,zenith:x,horizon:p,ambient:M,daylight:o}}class kv{sx;sy;sz;data;target;normals;pending=new Map;constructor(e){this.sx=Math.ceil((e.nx-1)/bt),this.sy=Math.ceil((e.ny-1)/bt),this.sz=Math.ceil((e.nz-1)/bt),this.data=new Uint8Array(this.sx*this.sy*this.sz*4),this.target=new Uint8Array(this.sx*this.sy*this.sz*4),this.normals=new Uint8Array(this.sx*this.sy*this.sz*4)}index(e,t,i){return(e+this.sx*(t+this.sy*i))*4}snap(e,t,i,s){this.region(e,t,i,s,r=>{this.data[r]=this.target[r],this.data[r+1]=this.target[r+1],this.data[r+2]=this.target[r+2],this.data[r+3]=this.target[r+3]})}easeStep(e){for(const[t,[i,s,r,a]]of this.pending){let o=!1;this.region(i,s,r,a,l=>{for(let c=0;c<4;c++){const h=this.data[l+c],f=this.target[l+c],u=f-h;if(u===0)continue;if(Math.abs(u)<=1){this.data[l+c]=f;continue}o=!0;let d=Math.round(u*e);d===0&&(d=u>0?1:-1),this.data[l+c]=h+d}}),o||this.pending.delete(t)}return this.pending.size}region(e,t,i,s,r){const a=e*s,o=t*s,l=i*s;for(let c=l;c<Math.min(l+s,this.sz);c++)for(let h=o;h<Math.min(o+s,this.sy);h++)for(let f=a;f<Math.min(a+s,this.sx);f++)r(this.index(f,h,c))}get texel(){return bt*b}}const Ii=[0,0,0];function Or(n,e,t,i,s,r,a,o,l=!1){const c=e.texel,h=t*r,f=i*r,u=s*r,d=e.target,m=255/Hl,v=a.dir,g=v[1]>0,p=n.sizeY,x=e.normals,M=Qt(Gv*255);for(let S=u;S<u+r&&S<e.sz;S++)for(let E=h;E<h+r&&E<e.sx;E++){const D=(E+.5)*c,C=(S+.5)*c;let A=lh(n,D,(f+r)*c,C,p);for(let w=Math.min(f+r,e.sy)-1;w>=f;w--){const _=e.index(E,w,S);let I=0,z=-1/0,F=0,O=0,P=0,L=0,U=0;const W=E*bt,Q=w*bt,j=S*bt;for(let T=0;T<bt;T++)for(let q=0;q<bt;q++)for(let ee=0;ee<bt;ee++){const G=n.getHard(W+T,Q+q,j+ee);if(G!==0&&!pt(G)){const $=Dt[G].emissive;$&&(P+=$[0],L+=$[1],U+=$[2]);continue}if(G!==0){const $=n.solidFraction(W+T,Q+q,j+ee);I+=$,$>0&&(O++,F=G);continue}const H=n.get(W+T,Q+q,j+ee);H>0&&(I++,H>z&&O===0&&(z=H,F=n.getMaterial(W+T,Q+q,j+ee)))}const ue=o?.get(_);let Ae;ue&&(ue[3]===1?Ae=ue:(P+=ue[0],L+=ue[1],U+=ue[2]));const _e=bt*bt*bt,we=I/_e;let K=I>0&&I<_e-1e-6;if(I>=_e-1e-6&&(K=!Mn(n,W-1,Q,j)||!Mn(n,W+bt,Q,j)||!Mn(n,W,Q-1,j)||!Mn(n,W,Q+bt,j)||!Mn(n,W,Q,j-1)||!Mn(n,W,Q,j+bt)),I>0&&(A=!1),!K&&Ae){d[_]=Qt(Ae[0]*m),d[_+1]=Qt(Ae[1]*m),d[_+2]=Qt(Ae[2]*m),d[_+3]=Math.round(we*255),x[_]=128,x[_+1]=255,x[_+2]=128,x[_+3]=0;continue}if(!K&&P+L+U>0){d[_]=Qt(P/Bi*m),d[_+1]=Qt(L/Bi*m),d[_+2]=Qt(U/Bi*m),d[_+3]=Math.round(we*255),x[_]=128,x[_+1]=128,x[_+2]=128,x[_+3]=255;continue}if(!K){I===0&&A?(d[_]=0,d[_+1]=0,d[_+2]=0,d[_+3]=0,x[_]=128,x[_+1]=0,x[_+2]=128,x[_+3]=M):(d[_]=0,d[_+1]=0,d[_+2]=0,d[_+3]=Math.round(we*255),x[_]=128,x[_+1]=255,x[_+2]=128,x[_+3]=0);continue}const ne=(E+.5)*c,fe=(w+.5)*c,Be=(S+.5)*c;let Te=0,Ue=1,ut=0;if(O===0){n.gradient(ne,fe,Be,Ii,c*.5);const T=Math.hypot(Ii[0],Ii[1],Ii[2]);T>1e-5&&(Te=-Ii[0]/T,Ue=-Ii[1]/T,ut=-Ii[2]/T)}else{Te=(Mn(n,W-1,Q,j)?0:-1)+(Mn(n,W+bt,Q,j)?0:1),Ue=(Mn(n,W,Q-1,j)?0:-1)+(Mn(n,W,Q+bt,j)?0:1),ut=(Mn(n,W,Q,j-1)?0:-1)+(Mn(n,W,Q,j+bt)?0:1);const T=Math.hypot(Te,Ue,ut);T>0?(Te/=T,Ue/=T,ut/=T):Ue=1}const N=Dt[F]??Dt[1],et=N.albedo;let Fe=0;const Ne=Te*v[0]+Ue*v[1]+ut*v[2];g&&Ne>0&&Hv(n,ne+Te*c*.75,fe+Ue*c*.75,Be+ut*c*.75,v,p)&&(Fe=Ne);const Re=lh(n,ne+Te*c*.6,fe+Ue*c*.6,Be+ut*c*.6,p),Qe=(.5+.5*Ue)*(Re?1:.06),be=1/Math.PI;let He=et[0]*(a.sun[0]*Fe*be+a.ambient[0]*Qe),yt=et[1]*(a.sun[1]*Fe*be+a.ambient[1]*Qe),mt=et[2]*(a.sun[2]*Fe*be+a.ambient[2]*Qe);N.emissive&&(He+=N.emissive[0],yt+=N.emissive[1],mt+=N.emissive[2]);const B=Math.max(we,dl);if(P+L+U>0){d[_]=Qt((He*B+P)/Bi*m),d[_+1]=Qt((yt*B+L)/Bi*m),d[_+2]=Qt((mt*B+U)/Bi*m),d[_+3]=Math.round(B*255),x[_]=128,x[_+1]=128,x[_+2]=128,x[_+3]=255;continue}d[_]=Qt(He*B*m),d[_+1]=Qt(yt*B*m),d[_+2]=Qt(mt*B*m),d[_+3]=Math.round(B*255),x[_]=Qt((Te*.5+.5)*255),x[_+1]=Qt((Ue*.5+.5)*255),x[_+2]=Qt((ut*.5+.5)*255),x[_+3]=0}}const y=(t*1024+i)*1024+s;l?e.pending.set(y,[t,i,s,r]):(e.pending.delete(y),e.snap(t,i,s,r))}const dl=.25,Gv=.7,Bi=24;function Mn(n,e,t,i){return n.getHard(e,t,i)!==0||n.get(e,t,i)>0}function Qt(n){return n<=0?0:n>=255?255:Math.round(n)}function Hv(n,e,t,i,s,r){const a=b,o=s[0]*a,l=s[1]*a,c=s[2]*a;for(let h=0;h<400;h++){if(e+=o,t+=l,i+=c,t>r||t<0||e<0||i<0||e>n.sizeX||i>n.sizeZ)return!0;if(n.solidAt(e,t,i))return!1}return!0}function lh(n,e,t,i,s){for(let r=t;r<=s;r+=b*2)if(n.solidAt(e,r,i))return!1;return!0}const ci=[b/It,.5,1,2,4,6,8],oa=[[1,0,0],[0,0,1],[-1,0,0],[0,0,-1]];function kr(n,e,t,i,s=b*.2,r=1){const a=n.size*.5*r,o=e-n.x,l=t-n.y,c=i-n.z;if(n.shape==="sphere")return a-Math.sqrt(o*o+l*l+c*c);const h=Math.max(Math.abs(o),Math.abs(l),Math.abs(c)),f=a-h+s;if(n.shape==="cube")return f;const u=n.y-a;if(n.shape==="slab"){const v=n.size/(2*It)*r,g=n.y-n.size*.5+n.size/(2*It),p=n.size*.5*r;return Math.min(p-Math.max(Math.abs(o),Math.abs(c)),v-Math.abs(t-g))+s}const d=oa[(n.dir??0)&3];if(n.shape==="wall"){const v=n.size*.5,g=(e-n.x)*d[0]+(i-n.z)*d[2]+v,p=Math.min(n.size/It,b),x=(e-n.x)*d[2]-(i-n.z)*d[0];return Math.min(p*.5*r-Math.abs(g-p*.5),a-Math.abs(x),a-Math.abs(l))+s}const m=(e-n.x)*d[0]+(i-n.z)*d[2]+a;if(n.shape==="roof"){const v=(e-n.x)*d[2]-(i-n.z)*d[0],g=.75,p=t-u-(a-Math.abs(v))*g,x=Math.abs(p)/Math.sqrt(1+g*g),M=Math.min(n.size/It,b)*r;return Math.min(f,M*.5-x+s)}return Math.min(f,m-(t-u)+b/It*.5)}function Zs(n,e,t=1){const i=e.size*.5+b*1.5,s=Math.max(0,Math.floor((e.x-i)/b)),r=Math.min(n.nx-1,Math.ceil((e.x+i)/b)),a=Math.max(0,Math.floor((e.y-i)/b)),o=Math.min(n.ny-1,Math.ceil((e.y+i)/b)),l=Math.max(0,Math.floor((e.z-i)/b)),c=Math.min(n.nz-1,Math.ceil((e.z+i)/b)),h=n.density,f=n.material;if(e.op==="smooth"){const d=h.slice();for(let m=s;m<=r;m++)for(let v=a;v<=o;v++)for(let g=l;g<=c;g++){const p=kr(e,m*b,v*b,g*b);if(p<0)continue;let x=0,M=0;for(let E=-1;E<=1;E++)for(let D=-1;D<=1;D++)for(let C=-1;C<=1;C++){const A=m+E,w=v+D,_=g+C;n.inBounds(A,w,_)&&(x+=d[n.index(A,w,_)],M++)}const y=Math.min(1,p/b),S=n.index(m,v,g);h[S]=h[S]*(1-y)+x/M*y}return{x0:s,y0:a,z0:l,x1:r,y1:o,z1:c}}if(e.pick){const d=Math.max(e.size,b)*.5,m=Math.max(0,Math.ceil((e.x-d)/b-.5)),v=Math.min(n.nx-2,Math.ceil((e.x+d)/b-.5)-1),g=Math.max(0,Math.ceil((e.y-d)/b-.5)),p=Math.min(n.ny-2,Math.ceil((e.y+d)/b-.5)-1),x=Math.max(0,Math.ceil((e.z-d)/b-.5)),M=Math.min(n.nz-2,Math.ceil((e.z+d)/b-.5)-1);for(let y=m;y<=v;y++)for(let S=g;S<=p;S++)for(let E=x;E<=M;E++){if(er(n,y,S,E))continue;const D=n.index(y,S,E);n.hard[D]===0||e.mat!==0&&n.hard[D]!==e.mat||(n.hard[D]=0,n.sub[D]=0)}return{x0:Math.max(0,m-1),y0:Math.max(0,g-1),z0:Math.max(0,x-1),x1:Math.min(n.nx-1,v+2),y1:Math.min(n.ny-1,p+2),z1:Math.min(n.nz-1,M+2)}}const u=Jn(e.mat);if(e.op==="sub"||e.op==="add"&&u&&pt(e.mat)){for(let d=s;d<r;d++)for(let m=a;m<o;m++)for(let v=l;v<c;v++){let g=0;for(let M=0;M<It;M++)for(let y=0;y<It;y++)for(let S=0;S<It;S++)kr(e,(d+(S+.5)/It)*b,(m+(y+.5)/It)*b,(v+(M+.5)/It)*b,0,t)>0&&(g|=1<<S+3*(y+3*M));if(g===0||er(n,d,m,v))continue;const p=n.index(d,m,v),x=n.subMask(d,m,v);if(e.op==="sub"){if(x===0||!pt(n.hard[p])){n.hard[p]!==0&&!pt(n.hard[p])&&(n.hard[p]=0,n.sub[p]=0);continue}const M=x&~g;M===0?(n.hard[p]=0,n.sub[p]=0):n.sub[p]=M===en?0:M}else{const M=(pt(n.hard[p])?x:0)|g;n.hard[p]=e.mat,n.sub[p]=M===en?0:M}}if(e.op==="add")return{x0:s,y0:a,z0:l,x1:r,y1:o,z1:c}}if(e.op==="add"&&u&&!pt(e.mat)){const d=Math.floor(e.x/b),m=Math.floor(e.y/b),v=Math.floor(e.z/b);return n.setHard(d,m,v,e.mat),n.sub[n.index(d,m,v)]=0,{x0:Math.max(0,d-1),y0:Math.max(0,m-1),z0:Math.max(0,v-1),x1:Math.min(n.nx-1,d+2),y1:Math.min(n.ny-1,m+2),z1:Math.min(n.nz-1,v+2)}}if(e.op==="paint")for(let d=s;d<r;d++)for(let m=a;m<o;m++)for(let v=l;v<c;v++){if(kr(e,(d+.5)*b,(m+.5)*b,(v+.5)*b)<=0||er(n,d,m,v))continue;const p=n.index(d,m,v);n.hard[p]!==0&&u&&pt(e.mat)&&pt(n.hard[p])&&(n.hard[p]=e.mat)}if((e.op==="add"||e.op==="sub")&&e.size<b){const d=e.op==="add"?1:-1,m=Math.floor(e.x/b),v=Math.floor(e.y/b),g=Math.floor(e.z/b);for(let p=m;p<=m+1;p++)for(let x=v;x<=v+1;x++)for(let M=g;M<=g+1;M++){if(!n.inBounds(p,x,M))continue;const y=Math.hypot(p*b-e.x,x*b-e.y,M*b-e.z),S=Math.max(0,1-y/b),E=n.index(p,x,M);d>0&&x>=n.ny-1||(h[E]=Math.max(-rt,Math.min(rt,h[E]+d*.45*S)),d>0&&h[E]>-b&&(f[E]=e.mat))}return{x0:Math.max(0,m-1),y0:Math.max(0,v-1),z0:Math.max(0,g-1),x1:Math.min(n.nx-1,m+2),y1:Math.min(n.ny-1,v+2),z1:Math.min(n.nz-1,g+2)}}for(let d=s;d<=r;d++)for(let m=a;m<=o;m++)for(let v=l;v<=c;v++){const g=kr(e,d*b,m*b,v*b,b*.2,t),p=n.index(d,m,v);if(e.op==="add"){if(m>=n.ny-1)continue;g>h[p]&&(h[p]=Math.min(g,rt)),g>-b&&(f[p]=e.mat)}else if(e.op==="sub"){const x=-g;x<h[p]&&(h[p]=Math.max(x,-rt))}else e.op==="paint"&&g>-b&&(f[p]=e.mat)}return{x0:s,y0:a,z0:l,x1:r,y1:o,z1:c}}function Zn(n,e,t,i,s){const r=[],a=l=>Math.max(0,Math.floor((l-2)/e)),o=(l,c)=>Math.min(c-1,Math.floor((l+1)/e));for(let l=a(n.x0);l<=o(n.x1,t);l++)for(let c=a(n.y0);c<=o(n.y1,i);c++)for(let h=a(n.z0);h<=o(n.z1,s);h++)r.push([l,c,h]);return r}function Vv(n){return!(n.pick||n.op!=="add"&&n.op!=="sub"||n.size<b||n.op==="add"&&Jn(n.mat)&&!pt(n.mat))}function Wv(n){const e=JSON.parse(n),t=[];for(const i of e){if(!Array.isArray(i)||i.length<7||i.length>9)continue;const[s,r,a,o,l,c,h,f,u]=i;if(!["add","sub","paint","smooth"].includes(s)||!["sphere","cube","slab","ramp","wall","roof"].includes(r))continue;const d={op:s,shape:r,size:+a,mat:+o,x:+l,y:+c,z:+h};u!==void 0&&+u&1?d.pick=!0:f!==void 0&&(d.dir=+f&3),t.push(d)}return t}const Xv=8208|1<<22;function Hu(n,e,t,i=64,s=.12){const[r,a,o]=e,[l,c,h]=t,f=(g,p,x)=>!(g<0||p<0||x<0||g>n.sizeX||p>n.sizeY||x>n.sizeZ);let u=f(r,a,o),d=u?n.sample(r,a,o):-1,m=d>0,v=0;for(let g=s;g<=i;g+=s){const p=r+l*g,x=a+c*g,M=o+h*g;let y;if(f(p,x,M))u=!0,y=n.sample(p,x,M);else{if(u)return null;y=-1}if(m)y<=0&&(m=!1);else if(y>0){let S=v,E=g;for(let z=0;z<8;z++){const F=.5*(S+E);n.sample(r+l*F,a+c*F,o+h*F)>0?E=F:S=F}const D=.5*(S+E),C=r+l*D,A=a+c*D,w=o+h*D,_=n.gradient(C,A,w),I=Math.hypot(_[0],_[1],_[2])||1;return{point:[C,A,w],normal:[-_[0]/I,-_[1]/I,-_[2]/I],distance:D,material:n.materialAt(C,A,w),hard:!1}}d=y,v=g}return null}function Yv(n,e,t,i=64){const[s,r,a]=e,[o,l,c]=t;let h=Math.floor(s/b),f=Math.floor(r/b),u=Math.floor(a/b);const d=o>0?1:-1,m=l>0?1:-1,v=c>0?1:-1,g=o!==0?Math.abs(b/o):1/0,p=l!==0?Math.abs(b/l):1/0,x=c!==0?Math.abs(b/c):1/0,M=(w,_,I,z)=>I===0?1/0:(z>0?(_+1)*b-w:w-_*b)/Math.abs(I);let y=M(s,h,o,d),S=M(r,f,l,m),E=M(a,u,c,v),D=n.getHard(h,f,u)!==0,C=0,A=-1;for(let w=0;w<1024;w++){if(C>i)return null;const _=n.getHard(h,f,u);if(_!==0&&!D&&A>=0){const I=pt(_)?n.subMask(h,f,u):Xv;if(I===en){const P=A===0?[-d,0,0]:A===1?[0,-m,0]:[0,0,-v];return{point:[s+o*C,r+l*C,a+c*C],normal:P,distance:C,material:_,hard:!0}}const z=Math.min(y,S,E),F=b/24;let O=-1;for(let P=C+F*.5;P<z;P+=F){const L=s+o*P,U=r+l*P,W=a+c*P,Q=L/b-h,j=U/b-f,ue=W/b-u,Ae=Math.min(2,Math.max(0,Math.floor(Q*3))),_e=Math.min(2,Math.max(0,Math.floor(j*3))),we=Math.min(2,Math.max(0,Math.floor(ue*3))),K=Ae+3*(_e+3*we);if(I&1<<K){let ne;if(O<0)ne=A===0?[-d,0,0]:A===1?[0,-m,0]:[0,0,-v];else{const fe=O%3,Be=Math.floor(O/3)%3;ne=fe!==Ae?[-d,0,0]:Be!==_e?[0,-m,0]:[0,0,-v]}return{point:[L,U,W],normal:ne,distance:P,material:_,hard:!0}}O=K}}if(_===0&&(D=!1),y<S&&y<E?(C=y,y+=g,h+=d,A=0):S<E?(C=S,S+=p,f+=m,A=1):(C=E,E+=x,u+=v,A=2),(h<0||f<0||u<0||h>=n.nx-1||f>=n.ny-1||u>=n.nz-1)&&C>1)return null}return null}function qv(n,e,t,i=64){const s=Yv(n,e,t,i),r=Hu(n,e,t,s?s.distance:i);return r&&(!s||r.distance<s.distance)?r:s}function Qv(n,e,t,i=64,s=.12){const[r,a,o]=e,[l,c,h]=t;let f=n.waterAt(r,a,o);for(let u=s;u<=i;u+=s){const d=r+l*u,m=a+c*u,v=o+h*u,g=n.waterAt(d,m,v);if(g&&!f)return{point:[d,m,v],distance:u,cell:[Math.floor(d/b),Math.floor(m/b),Math.floor(v/b)]};f=g}return null}const Ni=.12,Gs=.62,Kv=26,Zv=5.5,pl=1.75,vi=1.62,ch=22,jv=9.2,Gr=.6,ml=[.2,1.25],Vu=[.15],Jv=.3,$v=.27,Wu=[vi-.12],e1=1/120,t1=.78,n1=8,i1=5,hh=[.15,.55,.95,1.35,1.7],s1=.95;function Xu(n,e,t){return{pos:[n,e,t],vel:[0,0,0],onGround:!1,fly:!1}}function Vl(n,e,t){let i=t.dt;for(;i>1e-6;){const s=Math.min(e1,i);i-=s,a1(n,e,t,s)}}const an=[0,0,0];function r1(n,e){let t=0;for(const i of hh)n.waterAt(e.pos[0],e.pos[1]+i,e.pos[2])&&t++;return t/hh.length}function a1(n,e,t,i){const s=e.vel,r=e.fly?0:r1(n,e);if(e.swim=!e.fly&&r>0&&n.waterAt(e.pos[0],e.pos[1]+(e.crouch?.25:s1),e.pos[2]),e.fly){const v=1-Math.exp(-i*28);s[0]+=(t.wishX-s[0])*v,s[1]+=(t.wishY-s[1])*v,s[2]+=(t.wishZ-s[2])*v}else if(e.swim){const v=1-Math.exp(-i*i1);s[0]+=(t.wishX-s[0])*v,s[2]+=(t.wishZ-s[2])*v;const g=r>=.99?0:ch*(r/t1-1),p=t.jump?Math.max(t.wishY,2.5):t.wishY;s[1]+=(g+(p-s[1])*n1)*i,e.onGround=!1}else{const v=e.onGround?14:4,g=1-Math.exp(-i*v);s[0]+=(t.wishX-s[0])*g,s[2]+=(t.wishZ-s[2])*g,s[1]-=ch*i,t.jump&&e.onGround&&(s[1]=jv,e.onGround=!1),s[1]<-40&&(s[1]=-40)}let a=!1;const o=e.pos[0],l=e.pos[1],c=e.pos[2],h=s[0],f=s[2],u=e.onGround;if(e.pos[0]+=s[0]*i,cs(n,e,0)&&(s[0]=0),e.pos[1]+=s[1]*i,cs(n,e,1)&&(s[1]<0&&(a=!0),s[1]=0),e.pos[2]+=s[2]*i,cs(n,e,2)&&(s[2]=0),fo(n,e),a&&(e.onGround=!0),!e.fly&&!e.swim&&u){const v=Math.hypot(h,f)*i,g=Math.hypot(e.pos[0]-o,e.pos[2]-c);if(v>1e-5&&g<v*.6){const p=e.pos[0],x=e.pos[1],M=e.pos[2],y=s[0],S=s[1],E=s[2],D=()=>{e.pos[0]=p,e.pos[1]=x,e.pos[2]=M,s[0]=y,s[1]=S,s[2]=E};if(e.pos[0]=o,e.pos[1]=l+Gr,e.pos[2]=c,s[0]=h,s[2]=f,e.pos[0]+=h*i,cs(n,e,0)&&(s[0]=0),e.pos[2]+=f*i,cs(n,e,2)&&(s[2]=0),fo(n,e),Math.hypot(e.pos[0]-o,e.pos[2]-c)<g+v*.3||e.pos[1]>l+Gr+.05)D();else{let A=!1;for(let w=0;w<8&&!A;w++){e.pos[1]-=Gr/8,cs(n,e,1)&&(A=!0);const _=e.pos[1];fo(n,e),(e.onGround||e.pos[1]>_+1e-6)&&(A=!0)}!A||e.pos[1]>l+Gr+.001||e.pos[1]<l-.001?D():(s[1]<0&&(s[1]=0),e.onGround=!0)}}}o1(n,e,i);const d=Ni+.05;e.pos[0]=Math.min(n.sizeX-d,Math.max(d,e.pos[0])),e.pos[2]=Math.min(n.sizeZ-d,Math.max(d,e.pos[2]));const m=e.fly?.5-vi+.6:.5;e.pos[1]<m&&(e.pos[1]=m,s[1]<0&&(s[1]=0),e.onGround=!e.fly),e.pos[1]>n.sizeY-pl&&(e.pos[1]=n.sizeY-pl,s[1]>0&&(s[1]=0))}function fo(n,e){let t=!1;for(let i=0;i<4;i++){let s=!1;for(const r of e.fly?Wu:e.crouch?Vu:ml){const a=e.pos[0],o=e.pos[1]+r,l=e.pos[2],c=-n.sample(a,o,l);if(c>=Ni)continue;n.gradient(a,o,l,an);let h=Math.hypot(an[0],an[1],an[2]),f,u,d;h<1e-4?(f=0,u=1,d=0):(f=-an[0]/h,u=-an[1]/h,d=-an[2]/h);const m=Math.min(Ni-c,.35);if(u>.55&&!e.fly)e.pos[1]+=Math.min(m/u,.4),e.vel[1]<0&&(e.vel[1]=0),t=!0;else{e.pos[0]+=f*m,e.pos[1]+=u*m,e.pos[2]+=d*m;const v=e.vel[0]*f+e.vel[1]*u+e.vel[2]*d;v<0&&(e.vel[0]-=v*f,e.vel[1]-=v*u,e.vel[2]-=v*d)}s=!0}if(!s)break}!t&&!e.fly&&-n.sample(e.pos[0],e.pos[1]+ml[0]-.06,e.pos[2])<Ni&&e.vel[1]<=.01&&(t=!0),e.onGround=t}function o1(n,e,t){const i=e.fly?Wu[0]:e.crouch?Vu[0]:ml[1],s=e.pos[0],r=e.pos[1]+i,a=e.pos[2];let o=-n.sample(s,r,a),l=0,c=0,h=0;if(o<Gs){n.gradient(s,r,a,an);const g=Math.hypot(an[0],an[1],an[2]);g<1e-4?o=1/0:(l=-an[0]/g,c=-an[1]/g,h=-an[2]/g)}const f=l1(n,s,r,a,Gs);if(f&&f[0]<o&&(o=f[0],l=f[1],c=f[2],h=f[3]),o>=Gs||o<Ni-.2||!e.fly&&c>.6)return;const u=Math.min(1,(Gs-Math.max(o,Ni))/(Gs-Ni)),d=e.vel,m=Math.exp(-t*Zv*u*(e.fly?.3:1));d[0]*=m,d[2]*=m,e.fly&&(d[1]*=m);const v=Kv*u*t;d[0]+=l*v,e.fly&&(d[1]+=c*v),d[2]+=h*v}function l1(n,e,t,i,s){const r=[Math.floor((e-s)/b),Math.floor((t-s)/b),Math.floor((i-s)/b)],a=[Math.floor((e+s)/b),Math.floor((t+s)/b),Math.floor((i+s)/b)];let o=s,l=0,c=1,h=0,f=!1;const u=b/It,d=(m,v,g,p)=>{const x=Math.max(m,Math.min(e,m+p)),M=Math.max(v,Math.min(t,v+p)),y=Math.max(g,Math.min(i,g+p)),S=e-x,E=t-M,D=i-y,C=Math.hypot(S,E,D);C>=o||(o=C,f=!0,C>1e-5?(l=S/C,c=E/C,h=D/C):(l=0,c=1,h=0))};for(let m=r[0];m<=a[0];m++)for(let v=r[1];v<=a[1];v++)for(let g=r[2];g<=a[2];g++){if(!pt(n.getHard(m,v,g)))continue;const p=n.subMask(m,v,g);if(p===en){d(m*b,v*b,g*b,b);continue}for(let x=0;x<It;x++)for(let M=0;M<It;M++)for(let y=0;y<It;y++)p&1<<y+3*(M+3*x)&&d(m*b+y*u,v*b+M*u,g*b+x*u,u)}return f?[o,l,c,h]:null}const Hr=.12;function cs(n,e,t){const i=e.fly?vi-.3:0,s=e.fly?vi+.15:e.crouch?Jv:pl,r=[e.pos[0]-Hr,e.pos[1]+i,e.pos[2]-Hr],a=[e.pos[0]+Hr,e.pos[1]+s,e.pos[2]+Hr],o=r.map(f=>Math.floor(f/b)),l=a.map(f=>Math.floor((f-1e-4)/b)),c=t===1?e.pos[1]+(i+s)*.5:e.pos[t],h=(f,u)=>{for(let d=0;d<3;d++)if(u[d]<=r[d]||f[d]>=a[d])return!1;return c<(f[t]+u[t])*.5?e.pos[t]-=a[t]-f[t]+1e-4:e.pos[t]+=u[t]-r[t]+1e-4,!0};for(let f=o[0];f<=l[0];f++)for(let u=o[1];u<=l[1];u++)for(let d=o[2];d<=l[2];d++){if(!pt(n.getHard(f,u,d)))continue;const m=n.subMask(f,u,d);if(m===en){if(h([f*b,u*b,d*b],[(f+1)*b,(u+1)*b,(d+1)*b]))return!0;continue}const v=b/It;for(let g=0;g<It;g++)for(let p=0;p<It;p++)for(let x=0;x<It;x++){if(!(m&1<<x+3*(p+3*g)))continue;const M=[f*b+x*v,u*b+p*v,d*b+g*v];if(h(M,[M[0]+v,M[1]+v,M[2]+v]))return!0}}return!1}function Cs(n,e,t){for(let i=n.sizeY-1;i>0;i-=.25)if(n.sample(e,i,t)>0||pt(n.hardAt(e,i,t))&&n.hardOccupiedAt(e,i,t))return i+.25;return 1}function c1(n){let e=0;const{nx:t,ny:i,nz:s}=n;for(let r=0;r<t-1;r++)for(let a=0;a<i-1;a++)for(let o=0;o<s-1;o++){const l=n.index(r,a,o),c=n.hard[l];if(c===0||Jn(c))continue;const h=n.sub[l]===0?en:n.sub[l];for(let f=0;f<=1;f++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){const m=1<<f*2+3*(u*2+3*(d*2));if(!(h&m))continue;const v=n.index(r+f,a+u,o+d);n.density[v]<=0&&(n.density[v]=rt*.5,n.material[v]=c)}n.hard[l]=0,n.sub[l]=0,e++}return e}function wa(n,e,t){if(!n||n.r<=0)return!0;const i=e+.5-n.x,s=t+.5-n.z;return i*i+s*s<=n.r*n.r}function uh(n,e,t,i){if(!n||n.r<=0)return!0;const s=e+.5-n.x,r=t+.5-n.y,a=i+.5-n.z;return s*s+r*r+a*a<=n.r*n.r}const po=60,h1=.08,u1=3e3,fh=4,Vr=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]];function f1(n){return Dt[n]?.repose!==void 0}function d1(n,e){const t=Math.floor((n+(la(n*3+1,e*7+2)<.5?0:1))/3),i=Math.floor((e+(la(n*5+3,e*11+4)<.5?0:1))/3);return Math.floor(la(t,i)*3)%3}function la(n,e){let t=n*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}const p1=.05,m1=10,g1=6,v1=1,x1=.1;class dh{constructor(e,t,i={}){this.field=e,this.seaLevel=t,this.opts=i}queue=[];queued=new Set;parkedCols=[];get rate(){return this.opts.rate??h1}tick=0;get passes(){return this.tick}landed=[];energy=new Map;gran(e){const t=this.field.material[e];return this.opts.material!==void 0?t===this.opts.material&&(!this.opts.loose||this.opts.loose[e]!==0):f1(t)}reposeOf(e){return this.opts.repose??Dt[e]?.repose??po}get pending(){return this.queue.length}get parked(){return this.parkedCols.length}bubbleSort(e){const t=this.field.nz;if(!e||e.r<=0){this.parkedCols.length&&(this.queue.push(...this.parkedCols),this.parkedCols=[]);return}const i=[];for(const r of this.parkedCols)wa(e,Math.floor(r/t),r%t)?this.queue.push(r):i.push(r);const s=[];for(const r of this.queue)wa(e,Math.floor(r/t),r%t)?s.push(r):i.push(r);this.queue=s,this.parkedCols=i}wake(e){const t=this.field;for(let i=Math.max(0,e.x0-1);i<=Math.min(t.nx-1,e.x1+1);i++)for(let s=Math.max(0,e.z0-1);s<=Math.min(t.nz-1,e.z1+1);s++)this.wakeColumn(i,s)}wakeColumn(e,t){const i=e*this.field.nz+t;this.queued.has(i)||(this.queued.add(i),this.queue.push(i))}wakeAround(e,t){const i=this.field;this.wakeColumn(e,t);for(const[s,r]of Vr){const a=e+s,o=t+r;a>=0&&o>=0&&a<i.nx&&o<i.nz&&this.wakeColumn(a,o)}}clear(){this.queue=[],this.parkedCols=[],this.queued.clear(),this.energy.clear()}hardAt(e,t,i){const s=this.field,r=s.hard;for(let a=Math.max(0,e-1);a<=Math.min(s.nx-2,e);a++)for(let o=Math.max(0,i-1);o<=Math.min(s.nz-2,i);o++)for(let l=Math.max(0,t-1);l<=Math.min(s.ny-2,t);l++)if(pt(r[s.index(a,l,o)]))return!0;return!1}top(e,t){const i=this.field,s=i.density;for(let r=i.ny-1;r>=0;r--){const a=i.index(e,r,t);if(s[a]>0){let o=r;if(r+1<i.ny){const c=s[a],h=s[i.index(e,r+1,t)];h<=0&&(o=r+c/(c-h))}const l=o*b<this.seaLevel+.3||i.water[a]!==0||r+1<i.ny&&i.water[i.index(e,r+1,t)]!==0;return{h:o,sand:this.gran(a),wet:l,y:r}}if(this.hardAt(e,r,t))return{h:r,sand:!1,wet:r*b<this.seaLevel+.3,y:r}}return{h:0,sand:!1,wet:!1,y:0}}intervals(e,t,i,s){const r=this.field,a=r.density,o=[];let l=NaN;const c=h=>a[r.index(e,h,t)];c(i)>0&&(l=i-c(i)/b);for(let h=i;h<s;h++){const f=c(h),u=c(h+1);f>0&&u<=0?(o.push(l,h+f/(f-u)),l=NaN):f<=0&&u>0&&(l=h+f/(f-u))}return Number.isNaN(l)||o.push(l,s+Math.max(0,c(s))/b),o}rewrite(e,t,i,s,r,a){const o=this.field,l=o.density,c=o.material,h=[];for(let m=0;m<r.length;m+=2){let v=r[m]<=0?-1:r[m],g=r[m+1];if(g<=v+1e-6)continue;const p=g-v,x=h.length?h[h.length-1]:-1/0;if(v>x&&Math.floor(v)<Math.ceil(x)&&(v=x,g=x+p),v<=x+1e-6){h[h.length-1]=x+p;continue}if(Math.ceil(v)>Math.floor(g)&&v>0){const M=(v+g)*.5,y=Math.round(M);if(v+=y-M,g+=y-M,v<=x+1e-6){h[h.length-1]=x+p;continue}}h.push(v,g)}const f=[],u=m=>{const v=l[o.index(e,m,t)],g=l[o.index(e,m+1,t)];return v>0!=g>0?m+v/(v-g):null};for(let m=i-1;m>=0;m--){const v=u(m);if(v!==null){f.push(v);break}}for(let m=s;m<o.ny-1;m++){const v=u(m);if(v!==null){f.push(v);break}}const d=new Float32Array(s-i+1);for(let m=i;m<=s;m++){let v=!1,g=1/0;for(let p=0;p<h.length;p+=2){const x=h[p],M=h[p+1];m>=x&&m<=M&&(v=!0),g=Math.min(g,Math.abs(m-x),Math.abs(m-M))}for(const p of f)g=Math.min(g,Math.abs(m-p));d[m-i]=(v?1:-1)*Math.min(g*b,rt)}for(let m=0;m<h.length;m+=2){const v=h[m],g=h[m+1],p=Math.ceil(v),x=Math.floor(g);if(p!==x||p-1<i||p+1>s||v<=0)continue;const M=-d[p-1-i]/b,y=-d[p+1-i]/b;if(!(M>0)||!(y>0))continue;const S=g-v;let E=1e-4,D=64;for(let C=0;C<24;C++){const A=(E+D)*.5;1+A/(A+y)-M/(M+A)<S?E=A:D=A}d[p-i]=Math.min((E+D)*.5*b,rt)}for(let m=i;m<=s;m++){const v=o.index(e,m,t),g=l[v],p=d[m-i];g<=0&&p>0&&(c[v]=a,this.opts.loose&&(this.opts.loose[v]=1)),l[v]=p}}slope(e,t){const i=e.wet?Math.max(po,this.reposeOf(t)):this.reposeOf(t);return Math.tan(i*Math.PI/180)}wetAt(e,t,i){const s=this.field,r=Math.max(0,Math.min(s.ny-1,Math.floor(t)));return t*b<this.seaLevel+.3||s.water[s.index(e,r,i)]!==0||r+1<s.ny&&s.water[s.index(e,r+1,i)]!==0}step(e=null){const t=this.field,i=t.material;this.bubbleSort(e);const s=Math.min(u1,this.queue.length);if(!s)return null;const r=this.queue.splice(0,s);for(const v of r)this.queued.delete(v);this.tick++,this.landed=[];const a=this.opts.loose!==void 0,o=new Map,l=(v,g)=>{const p=v*t.nz+g;let x=o.get(p);return x||(x=this.intervals(v,g,0,t.ny-2),o.set(p,x)),x},c=new Map,h=(v,g,p,x)=>{let M=c.get(v);M||(M=new Map,c.set(v,M));const y=M.get(g);y?(y[0]+=p,p>0&&y[1]===0&&(y[1]=x)):M.set(g,[p,x])};let f=null;const u=(v,g,p,x)=>{f=f?{x0:Math.min(f.x0,v),y0:Math.min(f.y0,g),z0:Math.min(f.z0,x),x1:Math.max(f.x1,v),y1:Math.max(f.y1,p),z1:Math.max(f.z1,x)}:{x0:v,y0:g,z0:x,x1:v,y1:p,z1:x}},d=new Map;for(const v of r){const g=Math.floor(v/t.nz),p=v%t.nz,x=l(g,p);if(a&&this.tick%(d1(g,p)%Math.max(1,Math.round(this.opts.clumps??3))+1)!==0){this.wakeColumn(g,p);continue}const M=a?this.energy.get(v)??0:0;for(let y=0;y<x.length;y+=2){const S=x[y+1],E=Math.min(t.ny-2,Math.floor(S)),D=t.index(g,E,p),C=i[D];if(!this.gran(D))continue;const A=Math.tan((this.wetAt(g,S,p)?Math.max(po,this.reposeOf(C)):this.reposeOf(C))*Math.PI/180);let w=0;const _=[];for(const[P,L,U]of Vr){const W=g+P,Q=p+L;if(W<0||Q<0||W>=t.nx||Q>=t.nz)continue;const j=l(W,Q);let ue=0;for(let _e=j.length-2;_e>=0;_e-=2)if(j[_e]<=S+.5){ue=j[_e+1];break}const Ae=(S-ue)*b-A*U*b;Ae<=p1||(_.push([W*t.nz+Q,Math.floor(ue),Ae*.5]),w+=Ae*.5)}if(a){let P=0,L=0;const U=[];for(const[Q,j]of Vr){const ue=g+Q,Ae=p+j;if(ue<0||Ae<0||ue>=t.nx||Ae>=t.nz)continue;const _e=l(ue,Ae);let we=0;for(let K=_e.length-2;K>=0;K-=2)if(_e[K]<=S+.5){we=_e[K+1];break}P+=we,L++,we<S-.05&&U.push([ue*t.nz+Ae,Math.floor(we),S-we])}const W=L?S-P/L-(this.opts.crown??v1):0;if(W>x1&&U.length){const Q=W*.3*b/U.length;for(const[j,ue]of U)_.push([j,ue,Q]),w+=Q}}if(!_.length)continue;const I=(S-x[y])*b,z=(a?this.rate*(.7+.6*la(g*13+5,p*17+9)):this.rate)*(M>0?this.opts.impact??g1:1),F=Math.min(1,z/w,I/w)/b;let O=0;for(const[P,L,U]of _){const W=U*F;h(P,L,W,C),O+=W,M>1&&d.set(P,Math.max(d.get(P)??0,M-1))}h(v,Math.floor(S),-O,C)}}if(a){for(const[v,g]of this.energy)g<=1?this.energy.delete(v):this.energy.set(v,g-1);for(const[v,g]of d)this.energy.set(v,Math.max(this.energy.get(v)??0,g)),this.wakeColumn(Math.floor(v/t.nz),v%t.nz)}for(const[v,g]of c)for(const[p,[x,M]]of g){if(Math.abs(x)<1e-4)continue;const y=Math.floor(v/t.nz),S=v%t.nz,E=Math.max(0,Math.floor(p+Math.min(0,x))-fh),D=Math.min(t.ny-2,Math.ceil(p+1+Math.max(0,x))+fh),C=this.intervals(y,S,E,D);let A=-1,w=1/0;for(let z=1;z<C.length;z+=2){const F=Math.abs(C[z]-p-.5);F<w&&F<=1.01&&(w=F,A=z)}if(A>=0)C[A]+=x,C[A]<=C[A-1]+1e-6&&C.splice(A-1,2);else if(x>0)C.push(p,p+x),C.sort((z,F)=>z-F);else continue;const _=t.index(y,Math.min(t.ny-2,p),S),I=i[_];this.rewrite(y,S,E,D,C,this.gran(_)?I:M||this.sandFrom(y,S,c,i)),u(y,E,D,S),this.wakeAround(y,S)}for(const v of r){const g=Math.floor(v/t.nz),p=v%t.nz,x=this.intervals(g,p,0,t.ny-2);for(let M=2;M<x.length;M+=2){const y=x[M],S=x[M+1],E=x[M-1],D=y-E;if(D<=.02)continue;const C=Math.ceil(y);if(C>t.ny-2||!this.gran(t.index(g,C,p))||this.hardAt(g,Math.floor(y),p))continue;let A=C;for(;A+1<=Math.floor(S)&&this.gran(t.index(g,A+1,p));)A++;const w=A+1<=Math.floor(S)?A+.5:S,_=Math.min(1,D),I=x.slice(0,M);I.push(y-_,w-_),w<S&&I.push(w,S);for(let O=M+2;O<x.length;O++)I.push(x[O]);const z=Math.max(0,Math.floor(y-_)-1),F=Math.min(t.ny-2,Math.ceil(S)+1);if(this.rewrite(g,p,z,F,I,i[t.index(g,C,p)]),this.opts.moved){const O=Math.max(1,Math.round(_)),P=this.opts.moved;for(let L=Math.max(0,Math.ceil(y-_));L<=Math.min(t.ny-1,Math.floor(w-_)+1);L++){const U=t.index(g,L,p);P[U]=Math.min(127,P[U]+O)}}D-_<1+1e-6&&(this.landed.push(g,Math.round(y-_),p),a&&this.energy.set(v,m1)),u(g,z,F,p),this.wakeAround(g,p);break}}if(!f)return null;const m=f;return{x0:Math.max(0,m.x0-1),y0:Math.max(0,m.y0-1),z0:Math.max(0,m.z0-1),x1:Math.min(t.nx-1,m.x1+1),y1:Math.min(t.ny-1,m.y1+1),z1:Math.min(t.nz-1,m.z1+1)}}sandFrom(e,t,i,s){const r=this.field;let a=0,o=0;for(const[l,c]of Vr){const h=e+l,f=t+c;if(h<0||f<0||h>=r.nx||f>=r.nz)continue;const u=i.get(h*r.nz+f);if(u){for(const[d,[m]]of u)if(m<a){const v=r.index(h,Math.min(r.ny-2,d),f);this.gran(v)&&(a=m,o=s[v])}}}if(o)return o;if(this.opts.material!==void 0)return this.opts.material;for(const l of Dt)if(l.repose!==void 0)return l.id;return 0}settle(e=2e3){let t=0;for(;t<e&&this.queue.length;)t++,this.step();return t}}const M1=3,y1=.7,w1=2,Hs=6,ph=6,S1=.5,A1=.05,_1=2e3,mh=32,E1=0,T1=4;function gh(n,e,t){return Math.floor((n+(t&1))/e)}const vh=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function Sa(n,e){let t=n*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),(t^t>>>16)>>>0}function xh(n,e){return(Sa(n>>1,e>>1)&1)+((Sa(n,e)>>>3)%3===0?1:0)}class b1{constructor(e,t,i={reach:M1,creep:y1,calve:E1,slab:ph}){this.field=e,this.loose=t,this.opts=i}queue=[];queued=new Set;parkedCols=[];fuses=new Map;get pending(){return this.queue.length}get parked(){return this.parkedCols.length}bubbleSort(e){const t=this.field.nz;if(!e||e.r<=0){this.parkedCols.length&&(this.queue.push(...this.parkedCols),this.parkedCols=[]);return}const i=[];for(const r of this.parkedCols)wa(e,Math.floor(r/t),r%t)?this.queue.push(r):i.push(r);const s=[];for(const r of this.queue)wa(e,Math.floor(r/t),r%t)?s.push(r):i.push(r);this.queue=s,this.parkedCols=i}wake(e){const t=this.field,i=this.opts.reach+1;for(let s=Math.max(0,e.x0-i);s<=Math.min(t.nx-1,e.x1+i);s++)for(let r=Math.max(0,e.z0-i);r<=Math.min(t.nz-1,e.z1+i);r++)this.wakeColumn(s,r)}wakeColumn(e,t){const i=e*this.field.nz+t;this.queued.has(i)||(this.queued.add(i),this.queue.push(i))}clear(){this.queue=[],this.parkedCols=[],this.queued.clear(),this.fuses.clear()}coords(e){const t=this.field,i=e%t.nz,s=(e-i)/t.nz,r=s%t.ny;return[(s-r)/t.ny,r,i]}isPacked(e){return this.field.density[e]>0&&this.field.material[e]===Fn&&this.loose[e]===0}groundUnder(e,t,i){const s=this.field;for(let r=1;r<=w1;r++){const a=t-r;if(a<0)return!0;const o=s.index(e,a,i);if(s.density[o]>0)return s.material[o]!==Fn;for(let l=Math.max(0,e-1);l<=Math.min(s.nx-2,e);l++)for(let c=Math.max(0,i-1);c<=Math.min(s.nz-2,i);c++)if(pt(s.hard[s.index(l,a,c)]))return!0}return!1}step(e,t=null){const i=this.field;if(this.bubbleSort(t),this.queue.length===0)return{loosened:0,changed:null};const s=i.nz,r=this.queue[0],a=Math.floor(r/s),o=r%s,l=[],c=[];for(const I of this.queue){const z=Math.floor(I/s),F=I%s;l.length<_1&&Math.abs(z-a)<=mh&&Math.abs(F-o)<=mh?l.push(I):c.push(I)}this.queue=c;for(const I of l)this.queued.delete(I);let h=1/0,f=-1/0,u=1/0,d=-1/0;for(const I of l){const z=Math.floor(I/i.nz),F=I%i.nz;h=Math.min(h,z),f=Math.max(f,z),u=Math.min(u,F),d=Math.max(d,F)}const m=Math.max(1,Math.round(this.opts.reach)),v=Math.max(1,m-1),g=m+1;h=Math.max(0,h-g),u=Math.max(0,u-g),f=Math.min(i.nx-1,f+g),d=Math.min(i.nz-1,d+g);const p={loosened:0,changed:null};this.opts.calve>0&&this.calve(l,e,p);const x=new Set,M=[];for(let I=h;I<=f;I++)for(let z=u;z<=d;z++){let F=!1;for(let O=0;O<i.ny;O++){const P=i.index(I,O,z);if(!this.isPacked(P)){F=!1;continue}F||this.groundUnder(I,O,z)?(x.add(P),F=!0):(M.push(P),F=!1)}}if(M.length===0)return p;const y=new Map,S=new Set(M),E=(I,z,F)=>I>=h&&I<=f&&F>=u&&F<=d&&z>=0&&z<i.ny;let D=[];for(const I of x){const[z,F,O]=this.coords(I);for(const[P,L]of[[1,0],[-1,0],[0,1],[0,-1]]){if(!E(z+P,F,O+L))continue;const U=i.index(z+P,F,O+L);S.has(U)&&!y.has(U)&&(y.set(U,1),D.push(U))}}let C=1;for(;D.length;){for(let z=0;z<D.length;z++){const[F,O,P]=this.coords(D[z]);for(const L of[1,-1]){let U=O+L;for(;U>=0&&U<i.ny;){const W=i.index(F,U,P);if(!S.has(W)||y.has(W))break;y.set(W,C),D.push(W),U+=L}}}const I=[];for(const z of D){const[F,O,P]=this.coords(z);for(const[L,U]of[[1,0],[-1,0],[0,1],[0,-1]]){if(!E(F+L,O,P+U))continue;const W=i.index(F+L,O,P+U);S.has(W)&&!y.has(W)&&(y.set(W,C+1),I.push(W))}}D=I,C++}const A=new Set;for(const I of M){const z=y.get(I);if(z===void 0)continue;const[F,,O]=this.coords(I);z>=v+xh(F,O)&&A.add(I)}const w=new Set,_=new Set;for(const I of A){if(w.has(I))continue;const z=[I];w.add(I);let F=0;for(let P=0;P<z.length;P++){const L=z[P];F=Math.max(F,y.get(L));const[U,W,Q]=this.coords(L);for(const[j,ue,Ae]of vh){const _e=U+j,we=W+ue,K=Q+Ae;if(!E(_e,we,K))continue;const ne=i.index(_e,we,K);A.has(ne)&&!w.has(ne)&&(w.add(ne),z.push(ne))}}if(F<m||z.length<Hs)continue;const O=this.pieces(z,y);O.sort((P,L)=>L.far-P.far||P.key-L.key);for(let P=0;P<O.length;P++){const L=O[P];_.add(L.key);const U=this.fuses.get(L.key);if(U===void 0){this.fuses.set(L.key,e+this.opts.creep*(1+S1*P)),this.rewake(L.corners);continue}if(e<U){this.rewake(L.corners);continue}this.fuses.delete(L.key),this.loosen(L.corners,p)}}for(const I of Array.from(this.fuses.keys())){if(I>=1073741824||_.has(I)||w.has(I))continue;const[z,,F]=this.coords(I);z>=h&&z<=f&&F>=u&&F<=d&&this.fuses.delete(I)}return p}calve(e,t,i){const s=this.field,r=s.density,a=Math.round(this.opts.calve),o=(c,h)=>{for(let f=s.ny-1;f>=0;f--)if(r[s.index(c,f,h)]>0)return f;return-1},l=[];for(const c of e){const h=Math.floor(c/s.nz),f=c%s.nz;let u=-1;for(let x=s.ny-1;x>=0;x--){const M=s.index(h,x,f);if(r[M]>0){this.isPacked(M)&&(u=x);break}}if(u<0)continue;let d=u;for(;d>0&&this.isPacked(s.index(h,d-1,f));)d--;let m=u;for(let x=1;x<=T1;x++)for(const[M,y]of[[1,0],[-1,0],[0,1],[0,-1]]){const S=h+M*x,E=f+y*x;S<0||E<0||S>=s.nx||E>=s.nz||(m=Math.min(m,o(S,E)))}if(m=Math.max(m,d),u-m<a)continue;const v=1073741824+c,g=this.fuses.get(v);if(g===void 0){this.fuses.set(v,t+this.opts.creep*2),this.wakeColumn(h,f);continue}if(t<g){this.wakeColumn(h,f);continue}const p=m+Math.round(a*.6)+xh(h,f);for(let x=p;x<=u;x++){const M=s.index(h,x,f);this.isPacked(M)&&l.push(M)}this.fuses.delete(v)}if(l.length>=Hs)this.loosen(l,i);else for(const c of l);}pieces(e,t){const i=this.field,s=Math.round(this.opts.slab??ph),r=new Map,a=new Map;for(const l of e){const[c,,h]=this.coords(l),f=s>0?gh(c,s,Sa(c*3+1,h*7+2))*65536+gh(h,s,Sa(c*5+3,h*11+4)):0;r.set(l,f);const u=a.get(f);u?u.push(l):a.set(f,[l])}if(s>0){let l=!0;for(;l;){l=!1;for(const[c,h]of a){if(h.length>=Hs)continue;let f=-1;for(const u of h){const[d,m,v]=this.coords(u);for(const[g,p,x]of vh){const M=d+g,y=m+p,S=v+x;if(M<0||y<0||S<0||M>=i.nx||y>=i.ny||S>=i.nz)continue;const E=r.get(i.index(M,y,S));if(E!==void 0&&E!==c&&a.get(E).length>=Hs){f=E;break}}if(f>=0)break}if(!(f<0)){for(const u of h)r.set(u,f);a.get(f).push(...h),a.delete(c),l=!0;break}}}}const o=[];for(const l of a.values()){if(l.length<Hs)continue;let c=1/0,h=0;for(const f of l)c=Math.min(c,f),h=Math.max(h,t.get(f)??0);o.push({key:c,corners:l,far:h})}return o}rewake(e){for(const t of e){const[i,,s]=this.coords(t);this.wakeColumn(i,s)}}loosen(e,t){const i=this.field;let s=1/0,r=1/0,a=1/0,o=-1/0,l=-1/0,c=-1/0;for(const f of e){this.loose[f]=1;const[u,d,m]=this.coords(f);s=Math.min(s,u),r=Math.min(r,d),a=Math.min(a,m),o=Math.max(o,u),l=Math.max(l,d),c=Math.max(c,m)}t.loosened+=e.length;const h={x0:Math.max(0,s-1),y0:Math.max(0,r-1),z0:Math.max(0,a-1),x1:Math.min(i.nx-1,o+1),y1:Math.min(i.ny-1,l+1),z1:Math.min(i.nz-1,c+1)};t.changed=t.changed?{x0:Math.min(t.changed.x0,h.x0),y0:Math.min(t.changed.y0,h.y0),z0:Math.min(t.changed.z0,h.z0),x1:Math.max(t.changed.x1,h.x1),y1:Math.max(t.changed.y1,h.y1),z1:Math.max(t.changed.z1,h.z1)}:h,this.wake(h)}settle(e=200,t=0){const i={loosened:0,changed:null};let s=t,r=0;for(;r<e&&this.queue.length;){r++;const a=this.step(s);i.loosened+=a.loosened,a.changed&&(i.changed=i.changed?{x0:Math.min(i.changed.x0,a.changed.x0),y0:Math.min(i.changed.y0,a.changed.y0),z0:Math.min(i.changed.z0,a.changed.z0),x1:Math.max(i.changed.x1,a.changed.x1),y1:Math.max(i.changed.y1,a.changed.y1),z1:Math.max(i.changed.z1,a.changed.z1)}:a.changed),s+=this.opts.creep*2+.01}return i}}function C1(n,e){let t=0;const i=Math.max(1,Math.round(e))+1;for(let s=0;s<n.length;s++){const r=n[s];r!==0&&(r>=i?(n[s]=0,t++):r<255&&(n[s]=r+1))}return t}const js={sandRepose:34,sandRate:.08,sandHz:20,snowReach:1.5,snowCreep:.7,snowCalve:0,snowRepose:55,snowSlumpRate:.15,snowSlumpHz:10,snowClumps:3,snowCrown:.5,snowPack:10,snowSlab:3,snowImpact:6,pourRate:6,waterHz:20,waterSmooth:.3,tween:.45,caustics:1,profile:0,bubble:48},ca=[{key:"sandRepose",label:"sand angle",min:15,max:60,step:1,unit:"°",group:"sand"},{key:"sandRate",label:"sand rate",min:.02,max:.4,step:.01,unit:" m/pass",group:"sand"},{key:"sandHz",label:"sand cadence",min:2,max:40,step:1,unit:" /s",group:"sand"},{key:"snowReach",label:"cornice reach",min:.5,max:4,step:.5,unit:" m",group:"snow"},{key:"snowCreep",label:"cornice creep",min:0,max:3,step:.1,unit:" s",group:"snow"},{key:"snowCalve",label:"calving height",min:0,max:16,step:.5,unit:" m",group:"snow"},{key:"snowRepose",label:"loose snow angle",min:30,max:80,step:1,unit:"°",group:"snow"},{key:"snowSlumpRate",label:"loose snow rate",min:.02,max:.5,step:.01,unit:" m/pass",group:"snow"},{key:"snowSlumpHz",label:"loose snow cadence",min:2,max:40,step:1,unit:" /s",group:"snow"},{key:"snowClumps",label:"landing clumps",min:1,max:3,step:1,unit:"",group:"snow"},{key:"snowCrown",label:"mound crown",min:.25,max:2,step:.25,unit:" m",group:"snow"},{key:"snowPack",label:"snow packs after",min:1,max:60,step:1,unit:" min",group:"snow"},{key:"snowSlab",label:"slab size",min:0,max:8,step:.5,unit:" m",group:"snow"},{key:"snowImpact",label:"landing splash",min:1,max:12,step:1,unit:"×",group:"snow"},{key:"pourRate",label:"pour rate",min:1,max:40,step:1,unit:" cells/s",group:"water"},{key:"waterHz",label:"flow cadence",min:5,max:40,step:1,unit:" /s",group:"water"},{key:"waterSmooth",label:"surface smoothing",min:0,max:1,step:.05,unit:" s",group:"water"},{key:"tween",label:"mesh tween, at most",min:0,max:1.5,step:.05,unit:" s",group:"render"},{key:"caustics",label:"ice caustics",min:0,max:1,step:1,unit:"",group:"render"},{key:"profile",label:"profile overlay",min:0,max:1,step:1,unit:"",group:"render"},{key:"bubble",label:"physics bubble",min:0,max:128,step:8,unit:" m",group:"physics"}];function D1(n){const e={...js};if(!n)return e;for(const t of ca){const i=n[t.key];typeof i=="number"&&Number.isFinite(i)&&(e[t.key]=Math.min(t.max,Math.max(t.min,i)))}return e}const R1=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),mo=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),lr=8,I1=lr,Mh=lr+1,P1=lr+2,L1={length:1.25,height:.95,width:.5},B1={goat:L1,penguin:{length:.45,height:.66,width:.4},fish:{length:.5,height:.3,width:.25,centred:!0},cat:{length:.8,height:.42,width:.3}},U1={walk:1.4,run:4.2,turn:2.6,flee:4.5,calm:10,probe:1,cliff:1.6,wall:.75,grazeOdds:.35},z1={walk:.8,run:2.2,turn:2.2,flee:3.2,calm:8,probe:.7,cliff:1,wall:.5,grazeOdds:.3},F1={walk:1.1,run:3.6,turn:4,flee:0,calm:0,probe:.8,cliff:1.4,wall:.6,grazeOdds:0},En={swim:.7,dash:2.6,turn:3,flee:3.5,calm:7,probe:.6,school:6,close:2.2},Wr=2.2,yh=12,N1=15,wh=20;function Yu(n){return n==="fish"}function gl(n,e,t,i,s,r,a,o=0){const l=a??Cs(n,t,i),c=Xu(t,Yu(e)?l:l+.05,i);return c.crouch=!0,{id:r,kind:e,body:c,yaw:o,yawTarget:o,pitch:0,pitchTarget:0,seed:s,phase:0,mood:"wander",timer:0,speed:0,bored:0,detour:0}}function Sh(n){return{kind:n.kind,x:n.body.pos[0],y:n.body.pos[1],z:n.body.pos[2],yaw:n.yaw,seed:n.seed}}function O1(n,e,t){return gl(n,e.kind,e.x,e.z,e.seed,t,e.y,e.yaw)}function k1(n,e,t,i){for(let s=t+1.2;s>t-3;s-=.15)if(n.sample(e,s,i)>0||n.solidAt(e,s,i))return s+.15;return null}function G1(n){if(n.kind==="cat"){if(n.mood==="rest"||n.mood==="graze")return Mh}else if(n.mood==="graze")return Mh;return n.mood==="flop"?Math.floor(n.phase%1*lr):n.speed<(n.kind==="fish"?.15:.2)?I1:Math.floor(n.phase%1*lr)}function qu(n,e,t){let i=n.yawTarget-n.yaw;i=Math.atan2(Math.sin(i),Math.cos(i));const s=e*t;return n.yaw+=Math.max(-s,Math.min(s,i)),i}function H1(n,e,t,i,s,r,a,o,l){const c=e.body.pos,h=c[0]-s[0],f=c[2]-s[2],u=Math.hypot(h,f);if(e.kind==="cat"?(e.bored=Math.max(0,e.bored-i),e.detour=Math.max(0,e.detour-i),e.bored<=0&&u<yh&&e.mood!=="follow"&&u>Wr&&(e.mood="follow",e.timer=N1,e.detour=0),e.mood==="follow"?(e.detour<=0&&(e.yawTarget=Math.atan2(h,f)),u<Wr?(e.mood="rest",e.timer=4+r()*6):(e.timer<=0||u>yh*1.5)&&(e.mood="wander",e.timer=2+r()*3,e.bored=wh)):e.mood==="rest"&&u<Wr&&(e.yawTarget=Math.atan2(h,f))):(u<t.flee&&e.mood!=="flee"&&(e.mood="flee",e.timer=2+r()*2),e.mood==="flee"&&(e.yawTarget=Math.atan2(-h,-f),u>t.calm&&e.timer<=0&&(e.mood="wander",e.timer=1+r()*3))),e.timer-=i,e.timer<=0&&e.mood!=="flee"&&e.mood!=="follow"){const y=r();e.mood==="rest"&&e.kind==="cat"&&e.bored<=0&&u<Wr?(e.timer=3+r()*4,e.bored=e.timer>6?wh:0):y<.45?(e.mood="wander",e.timer=2+r()*5,e.yawTarget=e.yaw+(r()-.5)*Math.PI,e.kind==="cat"&&(e.bored=Math.max(e.bored,3))):y<.45+t.grazeOdds?(e.mood="graze",e.timer=2+r()*4,a.push({kind:"graze",x:c[0],y:c[1],z:c[2]})):(e.mood="rest",e.timer=3+r()*5)}const d=y=>{const S=-Math.sin(y),E=-Math.cos(y),D=c[0]+S*t.probe,C=c[2]+E*t.probe;if(D<2||C<2||D>o-2||C>l-2)return!1;const A=k1(n,D,c[1],C);return!(A===null||c[1]-A>t.cliff||A-c[1]>t.wall||n.waterAt(D,A-.1,C)||n.waterAt(D,A+.3,C))},m=e.mood==="flee"?t.run:e.mood==="follow"?u>7?t.run:t.walk:e.mood==="wander"?t.walk:0;if(m>0&&!d(e.yawTarget))if(e.mood==="follow"){const y=r()<.5?1:-1;let S=!1;for(const E of[.7,1.4,2.1])for(const D of[y,-y])!S&&d(e.yawTarget+E*D)&&(e.yawTarget+=E*D,e.detour=.7,S=!0);S||(e.mood="wander",e.timer=2,e.bored=6)}else e.yawTarget+=(r()<.5?1:-1)*(Math.PI*.5+r()*.5),e.mood==="wander"&&(e.timer=Math.max(e.timer,1.5));const v=qu(e,t.turn,i),g=Math.max(0,Math.cos(v)),p=m*(.3+.7*g);e.speed+=(p-e.speed)*Math.min(1,i*6);const x=-Math.sin(e.yaw)*e.speed,M=-Math.cos(e.yaw)*e.speed;Vl(n,e.body,{wishX:x,wishZ:M,wishY:0,jump:!1,dt:i}),e.phase+=e.speed/t.walk*i*(e.kind==="penguin"?1.8:1.3)}function vs(n,e,t,i){return n.waterAt(e,t,i)&&!n.solidAt(e,t,i)}function V1(n,e,t,i,s,r,a,o){const l=e.body.pos;if(!n.waterAt(l[0],l[1],l[2])){e.mood!=="flop"&&(e.mood="flop",e.timer=0),e.speed=0,e.pitch=0,e.body.fly=!1,Vl(n,e.body,{wishX:0,wishZ:0,wishY:0,jump:!1,dt:i}),e.timer-=i,e.timer<=0&&(e.timer=.6+r()*2,e.yaw+=(r()-.5)*1.5),e.phase+=i*(e.timer<.3?6:.5);return}e.mood==="flop"&&(e.mood="wander",e.timer=0);const c=l[0]-s[0],h=l[1]-s[1]-1.2,f=l[2]-s[2],u=Math.hypot(c,h,f);if(u<En.flee&&e.mood!=="flee"&&(e.mood="flee",e.timer=1.5+r()*1.5),e.mood==="flee"&&(e.yawTarget=Math.atan2(-c,-f),e.pitchTarget=Math.max(-.5,Math.min(.5,Math.atan2(h,Math.hypot(c,f))*.5)),u>En.calm&&e.timer<=0&&(e.mood="wander",e.timer=1+r()*3)),e.timer-=i,e.timer<=0&&e.mood!=="flee"&&(r()<.6?(e.mood="wander",e.timer=2+r()*5,e.yawTarget=e.yaw+(r()-.5)*Math.PI,e.pitchTarget=(r()-.5)*.5):(e.mood="rest",e.timer=2+r()*4,e.pitchTarget=0),e.mood==="wander")){let w=0,_=0,I=0,z=0;for(const F of t){if(F===e||F.kind!==e.kind)continue;Math.hypot(F.body.pos[0]-l[0],F.body.pos[1]-l[1],F.body.pos[2]-l[2])<En.school&&(w+=F.body.pos[0],_+=F.body.pos[1],I+=F.body.pos[2],z++)}if(z){w/=z,_/=z,I/=z;const F=Math.hypot(w-l[0],I-l[2]);F>En.close&&(e.yawTarget=Math.atan2(-(w-l[0]),-(I-l[2]))+(r()-.5)*.6,e.pitchTarget=Math.max(-.4,Math.min(.4,Math.atan2(_-l[1],F))))}}vs(n,l[0],l[1]+.35,l[2])||(e.pitchTarget=Math.min(e.pitchTarget,-.35)),vs(n,l[0],l[1]-.35,l[2])||(e.pitchTarget=Math.max(e.pitchTarget,.35));const d=e.mood==="flee"?En.dash:e.mood==="wander"?En.swim:.1,m=-Math.sin(e.yawTarget)*Math.cos(e.pitchTarget),v=Math.sin(e.pitchTarget),g=-Math.cos(e.yawTarget)*Math.cos(e.pitchTarget),p=l[0]+m*En.probe,x=l[1]+v*En.probe,M=l[2]+g*En.probe;(p<2||M<2||p>a-2||M>o-2||!vs(n,p,x,M))&&(e.yawTarget+=(r()<.5?1:-1)*(Math.PI*.5+r()*.6),e.mood==="wander"&&(e.timer=Math.max(e.timer,1)));const y=qu(e,En.turn,i);e.pitch+=Math.max(-1.5*i,Math.min(1.5*i,e.pitchTarget-e.pitch));const S=Math.max(0,Math.cos(y));e.speed+=(d*(.3+.7*S)-e.speed)*Math.min(1,i*4);const E=-Math.sin(e.yaw)*Math.cos(e.pitch)*e.speed*i,D=Math.sin(e.pitch)*e.speed*i,C=-Math.cos(e.yaw)*Math.cos(e.pitch)*e.speed*i;vs(n,l[0]+E,l[1]+D,l[2]+C)?(l[0]+=E,l[1]+=D,l[2]+=C):(e.speed*=.5,e.yawTarget+=(r()<.5?1:-1)*1.2),e.phase+=(.6+e.speed/En.swim)*i*1.4}function W1(n,e,t,i,s){const r=[],a=(n.nx-1)*b,o=(n.nz-1)*b;for(const l of e)l.kind==="fish"?V1(n,l,e,t,i,s,a,o):H1(n,l,l.kind==="goat"?U1:l.kind==="penguin"?z1:F1,t,i,s,r,a,o);return r}function Ah(n,e,t,i,s,r,a="goat"){const o=[],l=(n.nx-1)*b,c=(n.nz-1)*b;let h=0;for(;o.length<i&&h++<i*60;){const f=4+s()*(l-8),u=4+s()*(c-8),d=Cs(n,f,u);if(d<e+.5)continue;const m=n.getMaterial(Math.floor(f/b),Math.floor((d-.2)/b),Math.floor(u/b));r.includes(m)&&o.push({kind:a,x:f,y:d,z:u,yaw:s()*Math.PI*2,seed:Math.floor(s()*1e9)^t})}return o}function X1(n,e,t,i,s){for(let r=0;r<8;r++){const a=r/8*Math.PI*2;for(const o of[s*.5,s])if(n.waterAt(e+Math.cos(a)*o,i-.25,t+Math.sin(a)*o))return!0}return!1}function Y1(n,e,t,i,s,r){const a=[],o=(n.nx-1)*b,l=(n.nz-1)*b;let c=null;for(let f=0;f<400&&!c;f++){const u=4+s()*(o-8),d=4+s()*(l-8),m=Cs(n,u,d);if(m<e+.1||m>e+4)continue;const v=n.getMaterial(Math.floor(u/b),Math.floor((m-.2)/b),Math.floor(d/b));!r.includes(v)||!X1(n,u,d,e,5)||(c=[u,d])}if(!c)return a;let h=0;for(;a.length<i&&h++<i*40;){const f=c[0]+(s()-.5)*10,u=c[1]+(s()-.5)*10;if(f<3||u<3||f>o-3||u>l-3)continue;const d=Cs(n,f,u);d<e+.1||d>e+5||n.waterAt(f,d-.1,u)||n.waterAt(f,d+.3,u)||a.push({kind:"penguin",x:f,y:d,z:u,yaw:s()*Math.PI*2,seed:Math.floor(s()*1e9)^t})}return a}function _h(n,e,t,i){let s=0;for(;s<30&&vs(n,e,i-.25-s,t);)s+=.25;return s}function q1(n,e,t,i,s){const r=[],a=(n.nx-1)*b,o=(n.nz-1)*b;let l=null;for(let h=0;h<400&&!l;h++){const f=4+s()*(a-8),u=4+s()*(o-8);_h(n,f,u,e)>=1.5&&(l=[f,u])}if(!l)return r;let c=0;for(;r.length<i&&c++<i*40;){const h=l[0]+(s()-.5)*6,f=l[1]+(s()-.5)*6;if(h<3||f<3||h>a-3||f>o-3)continue;const u=_h(n,h,f,e);if(u<.9)continue;const d=e-.4-s()*(u-.7);vs(n,h,d,f)&&r.push({kind:"fish",x:h,y:d,z:f,yaw:s()*Math.PI*2,seed:Math.floor(s()*1e9)^t})}return r}function Q1(n,e,t,i){const s=n.body.pos,r=B1[n.kind],a=r.width*.5+.1,o=r.centred?s[1]-r.height*.5:s[1],l=o+Math.min(a,r.height*.5),c=o+Math.max(r.height-a,r.height*.5);let h=null;for(let f=0;f<=6;f++){const u=l+(c-l)*f/6,d=s[0]-e[0],m=u-e[1],v=s[2]-e[2],g=d*t[0]+m*t[1]+v*t[2];if(g<0||g>i)continue;const p=d-t[0]*g,x=m-t[1]*g,M=v-t[2]*g;p*p+x*x+M*M<=a*a&&(h===null||g<h)&&(h=g-a*.5)}return h}const K1=120,Eh=80,Z1=12,j1=24,J1=5,Xr=[.3,.62,1];class $1{constructor(e,t,i){this.gen=e,this.sites=e.treeSites(t,i),this.state=this.sites.map(()=>({next:-1,stage:-1}))}sites;state;cursor=0;lastCheck=-1/0;stageOf(e){return Math.max(0,this.state[e].stage)}get standingCount(){return this.state.filter(e=>e.stage>=Xr.length).length}step(e,t,i,s){const r=[];if(t-this.lastCheck<J1||!this.sites.length)return r;this.lastCheck=t;for(let a=0;a<j1&&a<this.sites.length;a++){const o=this.cursor;this.cursor=(this.cursor+1)%this.sites.length;const l=this.sites[o],c=this.state[o],h=this.gen.siteGround(e,l),f=this.gen.treeGrowth(e,l,h);if(c.stage>=Xr.length&&f>0)continue;if(f>=.85){c.stage=Xr.length,c.next=-1;continue}const u=f<=0?0:f<.5?1:2;if(c.stage!==u||c.next<0){c.stage=u,c.next=t+(u===0?K1:Eh)*(.7+s()*.6);continue}if(t<c.next||Math.hypot(l.x-i[0],l.z-i[2])<Z1)continue;if(!this.gen.siteFree(e,l,h)){c.next=t+60;continue}const d=this.gen.plantTreeAt(e,l,Xr[u],h);d&&r.push(d),c.stage=u+1,c.next=t+Eh*(.7+s()*.6)}return r}}const ex="splinecraft",wi="chunks",Pt="worlds",Vn=n=>String(n);async function Th(n,e){const t=await Wn();t&&await new Promise(i=>{const s=t.transaction(Pt,"readwrite"),r=s.objectStore(Pt),a=Vn(n),o=r.get(a);o.onsuccess=()=>{const l=o.result;l&&r.put({...l,animals:e,updatedAt:Date.now()})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}function Wn(){return new Promise(n=>{try{const e=indexedDB.open(ex,2);e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(wi)||t.createObjectStore(wi),t.objectStoreNames.contains(Pt)||t.createObjectStore(Pt,{keyPath:"id"})},e.onsuccess=()=>n(e.result),e.onerror=()=>n(null),e.onblocked=()=>n(null)}catch{n(null)}})}const tx=(n,e,t,i)=>`${n}/${e},${t},${i}`,Qu=n=>IDBKeyRange.bound(`${n}/`,`${n}/￿`);async function nx(n){if(typeof CompressionStream>"u")return{deflated:!1,blob:n};try{const e=new CompressionStream("deflate-raw"),t=e.writable.getWriter();return t.write(n),t.close(),{deflated:!0,blob:new Uint8Array(await new Response(e.readable).arrayBuffer())}}catch{return{deflated:!1,blob:n}}}async function ix(n,e){if(!e)return n;const t=new DecompressionStream("deflate-raw"),i=t.writable.getWriter();return i.write(n),i.close(),new Uint8Array(await new Response(t.readable).arrayBuffer())}async function sx(n){const e=n.n*n.n*n.n,t=n.sub!==null,i=n.water!==null&&n.water!==void 0,s=new Uint8Array(e*2+e+e+(t?e*4:0)+(i?e:0));let r=0;s.set(new Uint8Array(n.density.buffer,n.density.byteOffset,e*2),r),r+=e*2,s.set(n.material,r),r+=e,s.set(n.hard,r),r+=e,t&&(s.set(new Uint8Array(n.sub.buffer,n.sub.byteOffset,e*4),r),r+=e*4),i&&(s.set(n.water,r),r+=e);const{deflated:a,blob:o}=await nx(s);return{v:2,cx:n.cx,cy:n.cy,cz:n.cz,n:n.n,deflated:a,hasSub:t,hasWater:i,blob:o}}async function rx(n){const e=n.n*n.n*n.n,t=await ix(n.blob,n.deflated);let i=0;const s=new Int16Array(t.slice(i,i+e*2).buffer);i+=e*2;const r=t.slice(i,i+e);i+=e;const a=t.slice(i,i+e);i+=e;let o=null;n.hasSub&&(o=new Uint32Array(t.slice(i,i+e*4).buffer),i+=e*4);let l=null;return n.hasWater&&(l=t.slice(i,i+e),i+=e),{cx:n.cx,cy:n.cy,cz:n.cz,n:n.n,density:s,material:r,hard:a,sub:o,water:l}}async function ax(n){const e=await Wn();if(!e)return[];const t=await new Promise(s=>{const r=[],a=e.transaction(wi,"readonly"),o=a.objectStore(wi).openCursor(Qu(Vn(n)));o.onsuccess=()=>{const l=o.result;if(!l){s(r);return}r.push(l.value),l.continue()},o.onerror=()=>s(r),a.onerror=()=>s(r)}),i=[];for(const s of t){const r=s;if(r&&r.v===2&&r.blob)try{i.push(await rx(r))}catch{}else r&&r.density&&r.material&&r.hard&&i.push(r)}return i}async function bh(n,e){const t=await Wn();if(!t)return!1;const i=await Promise.all(e.map(sx));return new Promise(s=>{const r=t.transaction([wi,Pt],"readwrite"),a=r.objectStore(wi),o=Vn(n);for(const h of i)a.put(h,tx(o,h.cx,h.cy,h.cz));const l=r.objectStore(Pt),c=l.get(o);c.onsuccess=()=>{const h=c.result??{id:o,name:Wl(n),seed:n,createdAt:Date.now(),updatedAt:0,edited:0};l.put({...h,updatedAt:Date.now(),edited:(h.edited??0)+e.length})},r.oncomplete=()=>s(!0),r.onerror=()=>s(!1),r.onabort=()=>s(!1)})}async function go(n,e){const t=await Wn();t&&await new Promise(i=>{const s=t.transaction(Pt,"readwrite"),r=s.objectStore(Pt),a=Vn(n),o=r.get(a);o.onsuccess=()=>{const l=o.result;l&&r.put({...l,sources:e,updatedAt:Date.now()})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}async function vo(n,e){const t=await Wn();return t?new Promise(i=>{const s=t.transaction(Pt,"readwrite"),r=s.objectStore(Pt),a=Vn(n),o=r.get(a);o.onsuccess=()=>{const l=o.result;l&&r.put({...l,bodies:e,updatedAt:Date.now()})},s.oncomplete=()=>i(!0),s.onerror=()=>i(!1),s.onabort=()=>i(!1)}):!1}const Wl=n=>`World ${n}`;async function ox(){const n=await Wn();return n?new Promise(e=>{const t=n.transaction(Pt,"readonly"),i=t.objectStore(Pt).getAll();i.onsuccess=()=>e((i.result??[]).sort((s,r)=>r.updatedAt-s.updatedAt)),i.onerror=()=>e([]),t.onerror=()=>e([])}):[]}async function lx(n){const e=await Wn();return e?new Promise(t=>{const i=e.transaction(Pt,"readonly"),s=i.objectStore(Pt).get(Vn(n));s.onsuccess=()=>t(s.result??null),s.onerror=()=>t(null),i.onerror=()=>t(null)}):null}async function cx(n,e){const t=await Wn();return t?new Promise(i=>{const s=t.transaction(Pt,"readwrite"),r=s.objectStore(Pt),a=Vn(n),o=r.get(a);let l=null;o.onsuccess=()=>{const c=o.result??{id:a,name:Wl(n),seed:n,createdAt:Date.now(),updatedAt:0,edited:0,chunks:e};l={...c,chunks:c.chunks??e,updatedAt:Date.now()},r.put(l)},s.oncomplete=()=>i(l),s.onerror=()=>i(null),s.onabort=()=>i(null)}):null}async function hx(n,e){const t=await Wn();t&&await new Promise(i=>{const s=t.transaction(Pt,"readwrite"),r=s.objectStore(Pt),a=Vn(n),o=r.get(a);o.onsuccess=()=>{const l=o.result??{id:a,name:e,seed:n,createdAt:Date.now(),updatedAt:Date.now(),edited:0};r.put({...l,name:e.trim()||Wl(n)})},s.oncomplete=()=>i(),s.onerror=()=>i(),s.onabort=()=>i()})}async function Ch(n){const e=await Wn();e&&await new Promise(t=>{const i=e.transaction([wi,Pt],"readwrite");i.objectStore(wi).delete(Qu(Vn(n))),i.objectStore(Pt).delete(Vn(n)),i.oncomplete=()=>t(),i.onerror=()=>t(),i.onabort=()=>t()})}const Aa=40,Ku=72,Zu=30,ju=10,ux=10,fx=se*b*Math.sqrt(3)/2,dx=2;function px(n,e){return e==="low"||n<=0?1/0:e==="medium"?n===1?Aa:-1/0:n===1?Ku:n===2?Zu:-1/0}function mx(n,e,t){if(t==="low")return 0;const i=s=>e>=s?ju:0;return t==="medium"?n<Aa+i(1)?1:0:n<Zu+i(2)?2:n<Ku+i(1)?1:0}function gx(n,e){if(n<=0)return 0;const t=px(n,e);return Number.isFinite(t)?Math.max(1,t-fx-dx):0}/**
 * postprocessing v6.39.2 build Sun Jun 28 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var vx=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Xt;return t.setAttribute("position",new Ge(n,3)),t.setAttribute("uv",new Ge(e,2)),t})(),Vt=class vl{static get fullscreenGeometry(){return vx}constructor(e="Pass",t=new Hi,i=new Ds){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new wt(vl.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Hi),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Rn){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof ht||t instanceof ni||t instanceof Ft||t instanceof vl)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},xx=class extends Vt{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){const r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},Mx=`#ifdef COLOR_WRITE
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
}`,Xl="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Ju=class extends ot{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new xe(null),depthBuffer:new xe(null),channelWeights:new xe(null),opacity:new xe(1)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Mx,vertexShader:Xl}),this.depthFunc=fa}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},$u=class extends Vt{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new Ju,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new ht(1,1,{minFilter:at,magFilter:at,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==_t?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===lt&&(this.renderTarget.texture.colorSpace=lt))}},Dh=new qe,Yl=class extends Vt{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),l=r!==null,c=a>=0;l?(n.getClearColor(Dh),n.setClearColor(r,c?a:o)):c&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),l?n.setClearColor(Dh,o):c&&n.setClearAlpha(o)}},yx=class extends Vt{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new Yl(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){const r=n.getContext(),a=n.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,h=this.inverted?0:1,f=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,h,4294967295),a.stencil.setClear(f),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(n,null):(c.render(n,e),c.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,l)):(n.setRenderTarget(e),n.render(o,l),n.setRenderTarget(t),n.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},xo=1/1e3,wx=1e3,Sx=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*xo}get fixedDelta(){return this._fixedDelta*xo}set fixedDelta(n){this._fixedDelta=n*wx}get elapsed(){return this._elapsed*xo}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Ax=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new $u,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new Sx,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples}set multisampling(n){const e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new Ce),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===_t&&n.outputColorSpace===lt&&(this.inputBuffer.texture.colorSpace=lt,this.outputBuffer.texture.colorSpace=lt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=this.inputBuffer,e=new Ta;this.depthTexture=e,n.stencilBuffer?(e.format=As,e.type=Ss):e.type=on;const t=e.clone();return t.name="EffectComposer.StableDepth",this.depthRenderTarget=new ht(n.width,n.height,{depthBuffer:!0,stencilBuffer:n.stencilBuffer,depthTexture:t}),t}blitDepthBuffer(n){const e=this.renderer,t=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(t);const r=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,o=n.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){const s=this.renderer,r=s===null?new Ce:s.getDrawingBufferSize(new Ce),a={minFilter:at,magFilter:at,stencilBuffer:e,depthBuffer:n,type:t},o=new ht(r.width,r.height,a);return i>0&&(o.samples=i),t===_t&&s!==null&&s.outputColorSpace===lt&&(o.texture.colorSpace=lt),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new Ce),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(s.width,s.height),n.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(n of t)n.setDepthTexture(o)}else{const o=this.depthRenderTarget.depthTexture;n.setDepthTexture(o)}}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(o,l)=>o||l.needsDepthTexture;if(!e.reduce(r,!1)){const o=this.depthRenderTarget.depthTexture;n.getDepthTexture()===o&&n.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,r,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(i.depthTexture=this.depthTexture,s.depthTexture=null,o.render(e,i,s,n,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){t.renderToScreen=o.renderToScreen;const l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),t.render(e,i,s,n,a),c.setFunc(l.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof yx?a=!0:o instanceof xx&&(a=!1)}}setSize(n,e,t){const i=this.renderer,s=i.getSize(new Ce);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);const r=i.getDrawingBufferSize(new Ce);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Vt.fullscreenGeometry.dispose()}},On={NONE:0,DEPTH:1,CONVOLUTION:2},st={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},_x=class{constructor(){this.shaderParts=new Map([[st.FRAGMENT_HEAD,null],[st.FRAGMENT_MAIN_UV,null],[st.FRAGMENT_MAIN_IMAGE,null],[st.VERTEX_HEAD,null],[st.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=On.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=yi}},Mo=!1,Rh=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Wt:t=this.materialsFlatShadedDoubleSide;break;case Bt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Wt:t=this.materialsDoubleSide;break;case Bt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof ot))return n.clone();const e=n.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const i=n.clone();for(const s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=kn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Bt,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Wt,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Bt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Wt,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,Mo){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Mo}static set workaroundEnabled(n){Mo=n}},hi=-1,Ut=class extends ti{constructor(n=null,e=hi,t=hi,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new Ce(1,1),this.preferredSize=new Ce(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new Ce,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==hi?t.width=e.width:e.height!==hi?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==hi?t.height=e.height:e.width!==hi?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(hi),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return hi}},Xe={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Ex="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Tx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",bx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Dx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Rx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ix="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Px="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Lx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ux="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ox="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Qx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Kx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Jx="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$x="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",eM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",tM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iM=new Map([[Xe.ADD,Ex],[Xe.ALPHA,Tx],[Xe.AVERAGE,bx],[Xe.COLOR,Cx],[Xe.COLOR_BURN,Dx],[Xe.COLOR_DODGE,Rx],[Xe.DARKEN,Ix],[Xe.DIFFERENCE,Px],[Xe.DIVIDE,Lx],[Xe.DST,null],[Xe.EXCLUSION,Bx],[Xe.HARD_LIGHT,Ux],[Xe.HARD_MIX,zx],[Xe.HUE,Fx],[Xe.INVERT,Nx],[Xe.INVERT_RGB,Ox],[Xe.LIGHTEN,kx],[Xe.LINEAR_BURN,Gx],[Xe.LINEAR_DODGE,Hx],[Xe.LINEAR_LIGHT,Vx],[Xe.LUMINOSITY,Wx],[Xe.MULTIPLY,Xx],[Xe.NEGATION,Yx],[Xe.NORMAL,qx],[Xe.OVERLAY,Qx],[Xe.PIN_LIGHT,Kx],[Xe.REFLECT,Zx],[Xe.SATURATION,jx],[Xe.SCREEN,Jx],[Xe.SOFT_LIGHT,$x],[Xe.SRC,eM],[Xe.SUBTRACT,tM],[Xe.VIVID_LIGHT,nM]]),sM=class extends ti{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new xe(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return iM.get(this.blendFunction)}},Xi=class extends ti{constructor(n,e,{attributes:t=On.NONE,blendFunction:i=Xe.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new sM(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=yi,this._outputColorSpace=pn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=Rn){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof ht||e instanceof ni||e instanceof Ft||e instanceof Vt)&&this[n].dispose()}}},ql={MEDIUM:2,LARGE:3},rM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,aM="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",oM=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],lM=class extends ot{constructor(n=new Mt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new xe(null),texelSize:new xe(new Mt),scale:new xe(1),kernel:new xe(0)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:rM,vertexShader:aM}),this.setTexelSize(n.x,n.y),this.kernelSize=ql.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return oM[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},cM=class extends Vt{constructor({kernelSize:n=ql.MEDIUM,resolutionScale:e=.5,width:t=Ut.AUTO_SIZE,height:i=Ut.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new ht(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new Ut(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new lM,this._blurMaterial.kernelSize=n,this.copyMaterial=new Ju}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,h=c.kernelSequence;let f=e;this.fullscreenMaterial=c;for(let u=0,d=h.length;u<d;++u){const m=(u&1)===0?o:l;c.kernel=h[u],c.inputBuffer=f.texture,n.setRenderTarget(m),n.render(r,a),f=m}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=f.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==_t?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===lt&&(this.renderTargetA.texture.colorSpace=lt,this.renderTargetB.texture.colorSpace=lt))}static get AUTO_SIZE(){return Ut.AUTO_SIZE}},hM=`#include <common>
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
}`,uM=class extends ot{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Vi.replace(/\D+/g,"")},uniforms:{inputBuffer:new xe(null),threshold:new xe(0),smoothing:new xe(1),range:new xe(null)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:hM,vertexShader:Xl}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},ef=class extends Vt{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=Ut.AUTO_SIZE,height:r=Ut.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new uM(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new ht(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new Ut(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==_t&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},fM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,dM="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",pM=class extends ot{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new xe(null),texelSize:new xe(new Ce)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:fM,vertexShader:dM})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},mM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,gM="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",vM=class extends ot{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new xe(null),supportBuffer:new xe(null),texelSize:new xe(new Ce),radius:new xe(.85)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:mM,vertexShader:gM})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},xM=class extends Vt{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new ht(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new pM,this.upsamplingMaterial=new vM,this.resolution=new Ce}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){const{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:h}=this;let f=e;this.fullscreenMaterial=o;for(let u=0,d=c.length;u<d;++u){const m=c[u];o.setSize(f.width,f.height),o.inputBuffer=f.texture,n.setRenderTarget(m),n.render(r,a),f=m}this.fullscreenMaterial=l;for(let u=h.length-1;u>=0;--u){const d=h[u];l.setSize(f.width,f.height),l.inputBuffer=f.texture,l.supportBuffer=c[u].texture,n.setRenderTarget(d),n.render(r,a),f=d}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of i)s.texture.type=t;if(t!==_t)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===lt)for(const s of i)s.texture.colorSpace=lt}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},MM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,yM=class extends Xi{constructor({blendFunction:n=Xe.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=ql.LARGE,resolutionScale:l=.5,width:c=Ut.AUTO_SIZE,height:h=Ut.AUTO_SIZE,resolutionX:f=c,resolutionY:u=h}={}){super("BloomEffect",MM,{blendFunction:n,uniforms:new Map([["map",new xe(null)],["intensity",new xe(s)]])}),this.renderTarget=new ht(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new cM({kernelSize:o}),this.luminancePass=new ef({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new xM,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const d=this.resolution=new Ut(this,f,u,l);d.addEventListener("change",m=>this.setSize(d.baseWidth,d.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===lt&&(this.renderTarget.texture.colorSpace=lt))}},xl=class extends Vt{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,s){const r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==_t&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}};function wM(n,e,t){const i=new Map([[Mi,1],[bl,2],[Gt,4]]);let s;if(i.has(e)||console.error("Invalid noise texture format"),t===_t){s=new Uint8Array(n*i.get(e));for(let r=0,a=s.length;r<a;++r)s[r]=Math.random()*255+.5}else{s=new Float32Array(n*i.get(e));for(let r=0,a=s.length;r<a;++r)s[r]=Math.random()}return s}var SM=class extends xa{constructor(n,e,t=Mi,i=_t){super(wM(n*e,t,i),n,e,t,i),this.needsUpdate=!0}},tf=class extends Vt{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Yl,this.overrideMaterialManager=t===null?null:new Rh(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new Rh(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,h=n.shadowMap.autoUpdate,f=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(f),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,a):n.render(r,a),a.layers.mask=l,r.background=c,n.shadowMap.autoUpdate=h}},nf={COLOR:2},AM={DISABLED:0},Vs={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},rn={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},Ws={DEFAULT:0,ESKIL:1},_M=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
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
}`,EM=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,TM=class extends ot{constructor(n=new Ce,e=nf.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:Vi.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new xe(null),depthBuffer:new xe(null),predicationBuffer:new xe(null),texelSize:new xe(n)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:_M,vertexShader:EM}),this.edgeDetectionMode=e}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=Rn){this.depthBuffer=n,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(n){this.defines.EDGE_DETECTION_MODE=n.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(n){this.edgeDetectionMode=n}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(n){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=n.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(n){this.localContrastAdaptationFactor=n}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(n){this.defines.EDGE_THRESHOLD=n.toFixed("6"),this.defines.DEPTH_THRESHOLD=(n*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(n){this.edgeDetectionThreshold=n}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(n){this.defines.PREDICATION_MODE=n.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(n){this.predicationMode=n}set predicationBuffer(n){this.uniforms.predicationBuffer.value=n}setPredicationBuffer(n){this.uniforms.predicationBuffer.value=n}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(n){this.defines.PREDICATION_THRESHOLD=n.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(n){this.predicationThreshold=n}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(n){this.defines.PREDICATION_SCALE=n.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(n){this.predicationScale=n}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(n){this.defines.PREDICATION_STRENGTH=n.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(n){this.predicationStrength=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},bM=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
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
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,CM="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",DM=class extends ot{constructor(n=new Ce,e=new Ce){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new xe(null),searchTexture:new xe(null),areaTexture:new xe(null),resolution:new xe(e),texelSize:new xe(n)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:bM,vertexShader:CM})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(n){this.uniforms.searchTexture.value=n}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(n){this.uniforms.areaTexture.value=n}setLookupTextures(n,e){this.searchTexture=n,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(n){const e=Math.min(Math.max(n,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(n){this.orthogonalSearchSteps=n}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(n){const e=Math.min(Math.max(n,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(n){this.diagonalSearchSteps=n}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(n){n?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(n){this.diagonalDetection=n}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(n){const e=Math.min(Math.max(n,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(n){this.cornerRounding=n}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(n){n?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(n){this.cornerDetection=n}setSize(n,e){const t=this.uniforms;t.texelSize.value.set(1/n,1/e),t.resolution.value.set(n,e)}},Ih="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",Ph="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAIwCAYAAAABNmBHAAAgAElEQVR4Xuy9CbhlV1ktOvbpq09DkiIkUBI6kxASIH0DlAQiIK1wRfSJTx+i4JX7vKIigs8HXpXvqVcvrcC9agQ7IDTSSWgqCQQliDRBJKkkhDSkqVPNqVOnP+8b//rH3P+eZ+199tlznVTlvVrft7+1T7OaueZY42/m37QALKNk2wHg1pITlB17mC+Pp11W3X/LHyT32vhg48/5SOv+PnwpsHA70JoGlueB1iKApeqzvOzn44GatTB76Xzhd7suBR7+WWADgDEAwwCG/L54b/poDLrHuvvm70Z2Avhsc+PVcxscBU8F8C8ADg5+ipIjD/PlGwfgju8B924E5seARUfLsiNmqQW0IjL8+7L2NYD/7COBzfcCm+aB8SVgdAkYIRCXKyDax4EdAanL5PuNPllNvXDlAHwFgP8AcC2AhRIoDXbsYb48dl5WkVFTE3LGDcC9m4CZCWBuFFgeAZaGAYJQQCRqDHT+McJrVb8zwATUXH02MHYfMHEIGFsAxgjApQqACYQORjtd/B7Axt/z79sC0+cMPgjjlwPwVwHcA+DfAHzTxcVgWBroqMN8+cYBeM71wH0TwKExYHYUWCIAHYRLTlkCYgcIBcAgU/n3qy8GRu4HRgnAOWBkERhddPAJhGJDBxkvw7cqimr+zFM/ZLnZF64cgL8BYD+AWwB8x/dlWuWagHiYL984AJ/0RWBy1AE4AizyM1yxYAcTigW55xMbAkxEiwEdkJ/ZCQxPAiOHgBECcKEC4TBZcKkSv+mTieNcNPNC26mLNsj45QD8LQDTAO4GcJt/7iw2bfoG4WG+vAGwm9ExiEg69zpg/wgwPQLMjgALzn4E4aIzoJjQ9g4024uygkj+pyuAoX0VAIfngOH5NgCHMhAm8Sv2y3XDZeBhNIp8OzJE8OsBzAKYBHAXgDt8/4O+MVT0j4f58o0D8Pxrgf3DwMwIMEPQEYRkNwfgsuuDZLskip0No0gWMD/9HGDoADAkAC4Aw/wsAgZAgs2Z0ABI0GU6IVmKv+f28KDnHxkA/G0A8y6G73N9kOCjXnh/Ebb6OvgwX75xAF5wLTA1VIHPADgMLDj4yIA5AAm6aCUnv4oz46eeDwxNAUMzwJAz4BABSNDFTwSfg7DDKHE23MG5PqIY8A1u/dINs9dBdy8AgnGPM2NfUBrsnw7z5RsH4IXXAAcJviFgluAbygBINnSLWOAjGxJ4pgOKDV0v/OSLKp8iGXBovhLBBOCQM2ACoTOhnYrAdItYbCij5JFzRyIAqRccAnDAQUjg6UNQ7hsMXP0cRQAexss3DsCLCECCLwCQzMcPwUi2MwAScAKbfnY/YRLFQ8DHX+IAJAMSfDkAF13kLvleIjhjQQHxUVS3jjgGpKeeNzYVQEjgUS8k+PghONdhIwAP4+XXBYCHKIJbwJyDTgaIAdCBJx3Q2M8tYAHP9m4df/ylQOsQ0JqtRLCx30K1wtLBggScQOgsKBGcWHAJeOwRC0BSM1mQIKRbhh+Bj98JQP6t4U0APEyXXxcAEnxkQAFwoVUxID9kvQg+c1C7vidRbIDkc24B//hTQGumDcCWA5DgMxASdNIFBUI5pCML8v8API5zfEQx4BudgqiczviSnJhQwCP4BMCGl+wO8+U7AJi/W4O4YS6+pmK/2ciADsAOBhTIIiAJnPB7AvNjP+0AnANaYkAHX2JBAc+tYaJXOqBZv24Vc386XW5dtkHGW+4HFAJonpOe+YYQZAShgKjv3PNvPQaxVoI8zJdfFwASfPzMUwS3Kt1v0UFIlos6oDFdAGFcliMAP/ryAEAGNwQRnDOgLbdlIEwrIs6AZ/QgkMMHQF6ZAKQcJAsSYPwIeAIk9wJgoPK1gi7+PwF4GC/fOAAvIQPSs0URTPBJ/Pp3GSEGRHfBCIQ0xowBtUbcAj7ys5X4Jfu1HIAGQrIgQRXEsAFQIORDFhiDY/rMHmrU4QUgR08AkgUjCAW6CD6CkwBsAIQC4GG6fPMA3OXiNzCg2I9gNCMksmAAoemDzoimFwL48M85AKkiuQVMAAp8CYRRDAt8GQiJ67N6GJODAXAHlsGguscA2AJg1IPGYmxOpBxFWkRN9LsATgIwXnNs/v/5z/9XCf8BO3YAtxbc/46/KDt+5+ea1Yku2VUxHz/z0v24FwMGK1gWsK2OUUxHHdCBeRUB6OxHABr4ZICIBd0QWSF+XRdMTAjgCdTrG9cBNwE4F8CpDkICyYLGsuhFt6zs+gISwUen8zEAjgMw4cfx2H6O/90yAFo84Cbg4ID3/9TfLTt+5+ebnRABkODjx0SwPi5ec/FrYpmqSAxM8Dn60CsqAFI6GfhqAMiDE/gokmvEr0C4PgDkBQm40wE8zMFEUDKEVoxIMLl/KS73mE7H9d+vcKHQQcjwW0Yu9nP8m8sAmOIBuWY6wP2/4s0ezjjg8TuvaR6ABJ70vxUApGrm7EbGE+i472BAB+WHfqHS/eoAaEwY2E9+wLSXTqhI7CXgnB6LCoOJ4BiST+hTnG0HcCwAglCx3ARoZEVFXnBPp/O/A/hXACc7CPs9/i1lAOyIB+RDX+P9/+pbQjjjAMfv/PL6AFDs1wFAgs/9fgKfgdE/ZEpuiQlbwAde6QAMBgiRmsSwA9BY0JfjovGRDBMH4TlcXGhcBOc6HkF0gjPhZgchxTLZMAci/04W/B6Ab3t09EPXcPyflgFwRTwgJ2MN9/8bf5qFM67x+B/aW4XQz42FeL0YrRyikztUFw0704mf9kXgxhOAqc3AAsPyRxxQCs/PdXOFY0W1KHy3QIUGtx+6vdnx1vsB+dsTncm2AogglFgVEAlUWrOMB2RyEmMCGQ/Y7/HvKns6tfGAnJQ+r/9b76oJZ1zD8WdyQjYBh8aBhVEHjELouQ8ukQ7VRSCJAALwkr+sALhnGzDD3JAJYJHg9uhoi4bx8ytkWUtvHT/7+Zc4dw1uZ3612fH2dkQf7yxIEEockwkJQn4IQoq8unhAhmPRKKFx0uv4K8ueTs94wD7u//VX9ghn7OP4c+4G7h8HpseB+dF2AKlFLwuAIZ8jD6NPrOhAffmfA9/ZBuzZCkyRWSeqBCWyoYGQ5yQrBpDbum/ME1HoPo0XEkSD2zlfbna8q6+EUJcTCxKEtHL5EQjP6BEPyIgYAZBvYt3xHyx7OqvGA65y/7/9wVXCGVc5/sl7qxD66dEqiYgRzAqhN1A4CBNAAlDyAFI+iZ9/N3DLJuC+jcDUBmCWyUnOrmTYCMIOkNclLg0B8/RsNLg9+UvNjnd1APLmmQpFHyEBROuWACQT8nN+H/GAvY7/VNnT6SsesMf13/CpahGnZzhjj+PPmwX2MYdDIfQexWyBAwEUOQDrRDN/98p3A7dvAO6fAA5sqHJDBEAyoUVGkwEd6HR12XU4kwzfl6fCXTZzjy57vvnR513X7Hj7AyDvggAUi9EyFgiZqNxPQF6345nOWbD1HQ/Y5fpvuLa/2+82/vNHgAPDFQDnhoF5j2C2qBWCI8bw1eRw5CL5l94L3DEOTI4DB8Y9OWmsEu/zBJ3rgsaybqBob/7A4C7jtWcooRrczr+u2fH2D0AOQgAUCxKEP7aGgLy64+m6KdjWFA9Yc/03/Osa4glrjr+AupqHz1sEs0cxG0BC9HIePLoit9eNkVf9L+DuUWByDJgaq4ybGYLPAWgiXmLedUE7dwC7saL7CqfPKXi4NYdaykCD410bAHlDEsNiwZ9wAPYbkJcfz6T2gm3N8YDZ9d/wHxUA+739fPwXPrSKYGb+BuP3jAFDElFH9HIWwbzCIGkBr/or4J4RYO8oMOW6ZVcAuvi1Cgoha04BCwT5gfMKHm7NoRde2+x41w5A3hQZkADk5+cGiAeMx3+/7AENFA8Yrv/G71cAXFM4Yzj+otOAaQLQA0gZxaIIZtMDFTigKJV8H9Iq6aZ59ZXAvSPAvpEKgBTtBODcSCWCZeRYtpzrmLyeGNCAyFl1v+Hei8qeb370Rdc2O97BAMi7EgB/2QG41nhAHU9LuWAbOB7Qr//GPRUA13r7Gv9FZwIMoVcEswEwfDoimEP0shKKtIphaZQAXv1+YM+wA3DEdcvRKkGJADQQEsQuhi1Tjt95vBsh5nx2IO59SsHDrTmUOStNjndwAAqEry0IyCMICkOyiuIBNwBvPFQQT7gBuPjc9oRYAIHyOEL4vIFEYVNaOou5vCGE/tV/A0wOVcnpzI47NOri3QFIBpSeaSDUdYLOSWvYImSGgftpJDa4MWJbAGxivGUA5MAOc0Be6eVLj7/4Mk+hzCOYPYpZDBiNkLh+G/M3yFyv/ltgL3W3YQfgcFUhgRY2PwY+Z7/EhAR1SFyXCOb57r28QfQBsJQBMn5D4y0HYLPje9Cd7RIC0PM3EiMofF4gVCBp1P840ix/gyz56r+vAMjk9Gl375iB4+CzveuZdLkkEPJ8ZEfX/6R73vOjzT5Si9hucLxHAVg4PwJgRwh9CKOXK8YA4ZEqKZXSQWh5P+5AftXfA/uGKvYjCKn72cctbFrZNECka5L5CPwIPtMH3TVz17MLB5gdLgA2Nd6jACycHwLQxFEUSR5ASvARDB0h9AQb9bXIgCGk6lUfAPYTgEPAITKgg1BObk58srTJgG58WMkWMaAbQQT1nc8rHGANAJsc71EAFs4PAagQestgC1lsBJ4BMCSOK6dDUcwqqaFiQr/0QeAAAdjy+jBiQQeeMSBZT3nCPUDIa9z+/MIB1gCwyfEeBWDh/BCAeQSzgkjFfGLBBD5nxQ4DxN0wv3hVxX5TBGDwL5obxvVA5YqYL5BeMLd66YYxJpRB0gK+96LCAdYAsMnxHgVg4fwIgMrhUPKQ2C+Bz0PmBTqBMQehAbDlIjj4F80KJguSVZ0FuXpjoCOgXawLjALhbT9eOMAuAGxqvEcBWDg/l1IE05Ed0ygZnyHdz0VwCqEPIfNyx0QQvvLDFQCp+8nfZk5und8tXwIgWcHSNX0N2CJmnAl3v6RwgNnhl17T7HiPArBwfghAS7mV/hey2JS9FvM3BLpUUi1YwDRMXvkRYJoAlAh2l0dcZ04s6JUTDIjyBcrl4yDc/dLCAdYAsMnxHgVg4fxwKVwJgGEJNmWtxpQMpX9on2eRhVA+O56AjMfnP+e3Xvf3NwG4xIPTleiY55bpGh6UbafNU0l0z0p+5Jh5HqYJ6b51nP6XP8cx12XNHQVgIQB/bFPVg2OC7Q+WgVFWng/FvtWLI06uWh5oguKEcXVS/9sEAF//VGD7t4ETDgJbF4CNi8CGZWBs2fPL/H6Vwp2KEtVk4fJ+v/EIYPN9wKa5qu+IncfPwXHVZe/aOL3EbwS7xv8A1rQvnO0j8PArTgTGZ4BxFv9mIxhOCGsv+0OPYDRghcLfkWkEuq0+G00x4OtfDGz+d2DbHmDLjL8si8AYP/7CGIAiEEMTG92zXqSbH+d9R2aA0XnvO+JjthiIrOVDHHPOkBrzUQAWAPsZp3oPDpa/Xag6EVkLBK+5rAnJC3/nYk/APD704WiEAV8OTHwX2LQH2DgFbJgFNrBhjd8r79deGoEwsllgNBOzy8CdjweG9wBj08AIAci2D6HafmyAk4/Z7SJ72hGYRwFYAMDLTwOGp4FRFgD3HhzqRGQiyeurqOdG6r0Rm8IEZjzRlkiqCWoEgK8Axm4BJu4HJhyAbFhDxmbDGnZO4j0SgLGDkpibgEq66TJw/1nA0F5gdLpq+zDqFfd5LMeWqu5HNST0uJOIllg+qgMWgI+HPv0xwLA3gWHpW2sC441gCECbmKziaGrnUdMO4aHeh6MxAP4SMHI7ML4HGD8AjHvHJGNAgpDgY/ck3stipRemvVhc+uASMPUEYGh/9dIRgGx8Y+MNbR/00uVtH0wEx94j/v0oAxaA8Ed+GBieAYZZg5kADC0QWGOFzGJlcGPzl1BxNLXD8sk4xftwNAbA/wwM3wGMUmxOOQBnHXzetIYvibonmSiuYTNjriVg7glAiwBk0fNZH6+PmX9P6kfNmCXGpftJ7TgKwBIAnln14BAAYxMYm5C6RjCyCoOyr0qkD/c+HI0B8DXA8N3AyCQwesD1VQKH7EcASm1Q+y4CkN9pUKiVF5nLvy+fBbTUd8QBaH1HvNBROiZvfsNnrF4kcvPwpdsBLBeU18Nf7AB23Dp4ecHC8oBgUlJJecLS+7+WOpE3gbE+HKw+yoevCYkMGKqPJrdEKARutaFYRs1fiEZ0wP8CDN8LDO8FRqYq3W10pgKgfYLaYCzootgA6KXaTA90y374TKB1sBozy77xHFZ536utRgAmEaw6g5kUSFZwSXnA330qsOlfgHMPDlZesLA8IOjoLypPWHj/11EnCiVwkz7kAExtsGraYUWdSDX5TmsagL8KDBGA7Bd30JsW0oWivnEOQNP7yGTSBR101AlZSUtGyfgZDkCWY1HnJdcBVe6325hTvelg2CQjZNDygG/2An0j1wKnL6y9vGBheUC8prQ8YeH9X39OVQSc7Mc6fCaKvAeHdCIVf4yMYCynTpX+nb97NJmlSQb8r8DQHm9YOFUZTKOzoXGhs6AxF0HIexcLBvWBuiHN8s2ne98R3qc6L4Vyb2oBVjfm9MIFHbjDCh6kPOBbQoG+oW8CO5bWVl6wsDwgfr20PGHh/X/1iaEIuDcCTIW/1Q4rFv8OnYiW3c+W2iKwUjKbyjQNwL1uuR6sAEgDgq1brXOmV81PxhNB6DUDBSYzQJwFtz623XcktX1Q1VWKaTF/zZhVazBVYA1tX5MazsGvobwe/jQr0Ne6BTh5uf/ygoXlAfG60vKEhff/rSe1i4DnTWDUACY1guFTDqLYdCBvf6DJYSMYATBfOx1kLfj1v1axH10nQ3Sd0GUkBnTfpemtBJgseIKQAHLQcVxa2TnuMW0Aqui5es8xBIegVdVVE8VhzHnLh65WMB9An+X18K6aAn2tO4ETl6vqbKuVFywsDwhevqg8YeH93/Rk70JE90nowxZbIJjvS3WYNSGUwGHJTpPxwwcbBuBrgRYBeKACn7VtpdUu/c0NJxO9BIxcKu4TTODzbkonPLoaL0vyUQRb2y8HsL1ckfWzMeuFi40Qezqi+yiPhyt7FOjr6/gCFwgP7Xb5vssTFt7/nQRg6MGRWmDRoeyTlpgw68GRTwgZgo1gGmXAX6/8dtaylSKY/koyID9BhzML3q1gAos2AcOrZYSoq/pJp1VtODRm9Z3LS/7WjVkvXOzEtOpKyGrlAT+4SoG+VY8vBGCvy/dVnrDw/vee65NBJiAjBIVcAJQjOm+DkCZEeiGAMw6sAwDZsJrAdhFM9rPGhd4904Co5oVuCZPV6kD40Ec6+9W8dBTBsfdc3nkpvnB82fp2RPcs79dHgb51LA9ofsDV6vut5/3PnxcAmLVBiDqgevDaJLkYrpuQxzcNwN8AWgIgRbB8loEBzXDwl4cGiDGft58SCOWGedgjvOJ+bPvgRkiuA+ZjzhnQQOiFNVbloa7l/fos0LdO5QENgEXlCfs8Qbf7HyMA3QVjYihYhLENgjX9y/qwxQmRU/asfd0ZcLU2CHVGyusJQLKfVi98CS12T5f7iECkHpsMkAhCF8+nshWH2I/jXsOYO144GV/9ApAIrS3vt4YCfetQHtAA2G+/4PW4/2PPbzMgmUMi2NoeSCRxIt2/FvuxWURIWCXg357gfTjEDNIHnTRXRCpH5ugKwGl3HpMBXQc0v6WLYVm/5limj04rG762K2uYY9jBkr9+rI03NL5ZbczS/dJ+LQyoga4o77fGAn0NlwdMAOy3vl/T938KAcj121z8Bn+Y9eWQJRz8Y6kNagDh2ey5EvxjxQD8TWdAuneCCO4An1vw5vdzQMmdktwq7pLZQR+dM34+ZumAxvY1Y04uqOAJ6FsExzeto7zfAAX6GiwPaLWR1lrfr8n7f/Rl3QGzmsis+/uO71V9OFgP2gpPhgr7TGRqRUT6dyvr4aIs/pm/2zVUNbBSv6G8e5pEv0Cvec7Po7+bTtjlBRlkvAMBkDeQyvsNWKCvofKACYBrre/X1P0/oWEAnnFD1YdjhtXxR73mX10FfCHHE9pVWcGAI/S0gKsfA2y+twrFZw6Hxf/F0Pk8Ri/kpGSnMuDx5T0iACgQHioo0NdAecBUHW6QdsV2/cL7v/Cyqr5gnc42CCOcfX1VIZ/V8We9IDmTzVXwPDJiXuKXPxtDBma8+lzP4WAgKkPxCUAPE4v5GzEuMX0PYJPLhB6FJsc7MAMmkVxaYC/K9gG+F1++8AQ7Gwbgk78I7GFpXgIwFiRXOwaJZPUbiR0yCUDRk+cHf+YpwMj9HgfI8ClGPyvsSiH0WSKRuYlitLb/zHM/JOSs5C/YIC9cMQDZr/dwxgOW9gtGYUBi0wA8l304vDQvAchilFbpIBQhZ7Ejq6ZQ0/Yhil8y4j89Axie9DAsD6FX9HOK3QtROTFkviN83kG4felIY8DCeLrSeMDSfsEovAECUFsTjHD+tcB+tkFgcXKvBRir7qtFl9owmO4Xy/1G3bAFfPrZHorFNWBFwHjQAFctIghj2kBarw06If/+MM9ZqTN6DgsDojCerjQesLRfMApvoGkAWh8Ob/tgAPSKWCp8ngNQtadjmTdltvNvn3peFYhgQQgh+iUmEaUAUoXM1yRLmWuFLaE9Z+XIAWBhPF1pPGBpv2AU3kDTALzwmqo6qtVh9kJErAudABia38TC5wJgS2xIhAwBn3yhByL4EhzXfRXxYsDTJ4IvrNN2JFMxZcBzVo4cABbG05XGA5b2C0bhDTQNQLZBYH1AVsQSAAU+imI1obHyblnjG/kJk3U8BHz8xVUQAhnQIl5CyNgKAGp5LKSSCoAySh5Jj79vTagcxUaIBeRNe79g9gq+DXig4wGzy+PONfT7RWFA4noAkGXZVAhcBckJQgNgrLiaNb3paIDo1vHHX+oA9LQBi4DxJcOUPJUnTgU2NJUyROs8irGARxQAC+PpCtsFd40H/AEf0gMQkLgeACT41PiGoLOKqyrJq3K/Ya9mNyr5FusN/uPLPIeDa8Bc+w3rtyl4VFHaMZc3i9RWBM9jjzgAFsbTFbYLRmm/YBTeQNMAtD4cBKDXBTQGdAB2MGBo8SCLmEuS1AFVAJ3A/NhPt0PoCcA8bSDG76XI7aySg6JYuGfKwJHFgH0E5B3ueMCe/Y4L+xVHAOZ+9EHcEgQgwbeiEYx6jwTdz4qfu7EhEJqxGqruf/RnHIAEnxgwBM0aC8aUAYWNBRCmoIll4HTqO122QcZbrgMWxtMVtgvuOx6wa7/jwhtoGoDWh4MBJ16WN4lfr8AqI0TVV1O1fa9BbQzovkAy4Ed+NgCQUSxZCFWvCOaOFREXyUwZOPIA2GdA3uGOB6wPaOz+QPv5S+MA3OXiN9aclghW+d3IgupBF2pPqxcxGenDPxfSRh2ASiKKiVP2PaZScvAKoA0VDc6cOlIB2GdA3uGOB1zR77iwX/F6AFB9ONSOQW0frA50sILVcckWJyIDSgwPAVcJgFbYuZ3FJvAlEHbJ3IsgJLGedeBIA+AAAXmHOx6wo99xYb/i9QKg2iAIfDJEJHqj4SExbEty0gkdhB/6P9oZbBZIGiKYVb9GKaN50lRHBLOvhDxh/5EKwDUG5B3ueMB2QGM/grb7/6wHAPNGMAY+GSGUjC52VX2f2CD4+HO0gqkZfegXKgBaHkcWtS0AWii9xG1ImrLlN5XR8L8fmQD05BVrmEENmpYSP9QX+KHiqj2/82+HqqDWwnbBRfGATdzAegGwru2DpRq7Mzq2fpAf0Nq0Rl2wBXzglZ4yUAPAmDSVWDBPHQjLcgTqOZ6zUvdKHh4ruDCerox/Dnu7YqwXAC1NI/QcEQuK6WK/kdgCTGC0PYAP/KIDMBgglq+hIkrOfsaCviLSofcJgJ5AdM7kkSaCj/HqQKVIGvD4swF8bcBjmzjsaQ2H5D/6acBd9wALB4DFWWB5AVherMp4GKIYEOp7+26UF0aSfT/xYuDG7wDjrIpAERytXf2vajj7ueryQXSFl10K/ON3gIWDwCLvjfGB8Z54O+Ee4ve6513uB2R1yzsqC+twbC8HcNVhfAeaBuDP/TvwtS3A/ePAIfYFVlPq2HHTuyulZCTlhbjhETF5yxTQGgPGhoHhIWC4VSXGD3n0tLkMHXHxu+YyB+MlPwDuZs5K6FlsbCzdVO9DuKfkHM8AEkP7B8fOkwDcD+B7np42+JkGOvKdAL4E4K8P0zvQdET0b14D3DgB3D0B7B8HZka9WzrD88N6sFm+YcUjrn7E1ZDvMtF9DBgeAYaHgSGB0PNHCD4BLwLRsByAyX/ij0/dDUxuqlIG5hix7eFhvLcOVUAtyPSydAFmOQNe6EYGV/9ZESiKgIEgtbaD/gHALQC4ovY5r5KwtjOU/XfTAHzzLuCmIeDuMWDvKHBwpMoN0WQzNtAaYSs0K4ZlOSAjGG9kPjCBRwZ0ABKEBJexYAZEAU3A7Oi1BeDym4EDnjQ1TwCGWMW8MXcKks0YOyZNlQOQjcgYIUHllEzYQ0ktm+r6oz8G4F4AXwXwRd8/kO9A0wB8y65KmPxgGJgcqYJTKYpTv2CCzyddQJRDOjKivn+Deh8BF8BnwBtaCUA+YYEyAU8h+c6Az9gNHHRmrgOgmDA3jHQ+iWupCeUAvNSrA9HNwqx+muk9nJVNg/CTfrmbAPwbgK8D+PcHkIibjob5o13A3XypWsAkG1cPA9PDFQDZM1id0i1KxsWfOrKnAFXlifCFFMMRcASigOcs2MGAIfE9iWXplS6On7UbmPaUUTXQrgsVMzcRj5Folg2V5ayUA5BWYKwOxKUafnosWjcJwk+7W5F2EKvlE3xcXaNYfiCYsGkA/smuqug6hcleAnAImPbO6YwRpMgjCAVAm/yQmKTv5hNsAf/i7SyNBSl2a8Qv/4/M1yF+BZSYlNQCnnVrpbC+mToAACAASURBVJcaI7sOSEY2NpaDXLqpR+vE/OVksDgImgGgghHoYJbTWc7oJtFWc65/cg2AYvh2ALsB3AzgVv95nS/f4QdsIkT9T3cBrGtITWZfC5hqtQHInsEGQn3UDDvEDEY/ICf7SxMOrAg8T+c00JGkvHGd2DABUYZIAONzCUDppCFhSukCBsLQrFtZe/IixYQpSyEoJoqnuPWrVRAubQh83HNlZB23z7j1ywmj6CIIqUPxw2Xeu9bx2jx10wz4Z7sqTYZaDD8EIDuoE3hMVEphWg66JIp90k0sBxBcy+iPIIaT1RtEsHS/yIAqw+VSNPWQfe5tlVEk8auXgVa5BUsEJuT5uoliAbE5AGotmIAjCPnR9xDG3TQernYAUupTdBGEFMf83OkApHG+XlvTAPwfuyrgSZOhas3u6cwTsUBVn2gTwyFMi8wjHZAA1M9fYGHDULJD1m8Cpa8fRxDad+l+Ykf/3XNvd11U+qiL39SxXevSsshdDFvgbI1O2AwAtRZMZzTBRuDFjxe1Xg8QEIB8yyj5yYIUxfQIkfkIRnmHCM712JoG4FsdgHHp3ACoMH2G6jM4lWzoQarSvwQ6MSB/vporVaFkh+mCLlpVR8Z+dqDZLoDOpHSiQeAFDkBjPrlgCHgCUaFifg67H/9uYjn4Ai1vpTERTAASBaoQJBAKeNqHlL6mwPDZYAOROag/EYRkPX34MwHIvzW9rQcA+TLpI22G7EcQKlJGsYIJhC6ClUMiXfBTbFUQAej6nPS/OuAl9pOOqIc2BLzg++3VmWgIEUz82cRuCAtLIHQQm0gO52uOAb22sC3JEWgRfPpZf2sQBQIgLydPEIFGwPEj8MlF2bSbsulghLftqsCXq9HGgHysznrGgi5qzTUTFH8FLhAUn3hIJwCN0HLncw37qaF2zoYvuKNivmQIuUNc7GvWt6sHNs26twA6vhyq8NEMAHlyntFrDCcQehyaPTl+FwAbXDcmAKMRThakEk8Q8kPg8SPL0qzLBl+A9QCgR6uZGs3vfHz8TtBZvkgGQrEPBVAUg2Sij50QAOjiVKI3saADJRm7dSLYWfSFDkCem/dhZeMy9pPY5QvSDYQyUJoDIK8qMezh3wY6fSL49PcGgCAA8pScJLIgAUYQEmz8RPA17StvGoBv39W24eREiBoNQSgWNI1HBkdgxJSw1AI+dFIbgOYmkjimQ1r6XXC3rAbCHycAgytohf8vsB/r2KRaRq7zpZ+D37HMX0s3DDcCUGLYaw53MJ4YUODzusqlGCQAOQCejuxA8UULUkxIwAmMAp8Wa3qkN/R9W+sBwOhIEPjk5SLr8HeKFbTQfb77csPIMHGl/4MPbReslPhNe4+MiTpi9AFGV4nI7MfvagNQLh/pfrYnDAS8aJQ42A2w4em2cAyWQUuJVQTGWLs1uL7DG9J1RjhA+jvYk4t3KXeMqijpzrud4At9z3XtP16yGfjKZmCGooYh1tZzvv8xXPFl4PoJYC97k9FlwZWD+Azi/deMZWeP13eQCGEyoERudChIjbb3mJYwH7V0QIKuCwj/gfMj0asn2I0FXRSHXfL/iRkNgLyeVj8ccMY//J1fyxzTAXT2+xoQViKYD/1hDqLxPiYxTgSvQrphphG97tz4Slqafnj7uk1kIQDZrvWTw8B3jwEW+RLxPgSiCERdPwPR7+wCPg/gulFgfruDkOMQkFc5x84e708JAMmCuRNBXi4TIg5CGRzGiBGE/D4E/C2r2vcAYJoify62i0aJSMhB+2IHoNwu0fkcjQ85pu3ack5nIBREqneYFyWLkAXIJHESe00Cyx5QyeL6F/tyEcDcrOW2n7fX8df0mME+/vQ/PQjhoy3gzo3AISYf80MQaQx1peH9wb7v2mrtmCBkIMMejp3jIJD1MsaxaMZ8v5N/67INAsB3BAYU4JL4DSo1J15AFPAEwuQHZJzkKfUAtOHLJSOQRWndBYQvCQA01cfnNopfsaCJaD2baBn79QjSTiOEP1EcawIpkq2kegBTNgHWEpOKF8Uwq2NRFPM4AqCf46/rA2U9/uVDvurB01zvAJpiiwOl3fEeciCGF+Ij11f+QkbSfMPfIzqw57mEFZ9Dl3Ps5HXWAYByHJAJKV7N+s0cCQQhwSlfm4lGZ0KB8C/rABgZUS6ZHITBSEhCowUYAAksF7cStWREyxRwtuPpOlgw+5s9sq6OaIJIIlUgEhA1edoTgHxa9HVw5jibZNF+j/9yGQA/7pbujZ4bwv2+cWB6tFo0NzYnkxFA+cvEAo43VBoEo2e+48EMXEOmD9F6xhCE8RwZEJ80VblKvDlmzwicfqy93/o+8K8TwB2jVSgW138FrJQTXBNlnJgmrjZwanow9CBP/rL9wF0jwAGWDtFyoN9PHutnIHT05mPXz93dMGQAPniJsjiBXiTbxDZFMF9NLUPQxKR5qezz1Y6/YZDH0D6GkdAkYJIvRalAdHAMmPZoYhb6NhDWvEyf/ma737CXN7R1ZC7hUbPgcFgqt/ZZjADnM1xqEVhYBpb4CUk5UsL7jQvj///5buDrLeCOEeD+YQchYwG9VIfyg1NaZszFiCH6DkRGLze5/dgk8IMWcMCjdCiCzR8od1B8OTwvJM8JEShFut1fzMhi+eRJr6LI7hYP2M/xVLwKNoZjUTwRMAQQmYyhWGQxsSADOflZ4kukj7PhZ75bETjBpkAGahMkcrGgwhsXeCyBHBj1wmOBQwvAwqKzoFeRV8ZaerjKYAuirmPY/o9X7q5Cyr7fAvYMAftCPGAEoYlBiVtFwLjtp2U4irj7yOANbi+crHyrfCbTquJV44O0F1FrwQGIMZFqdQDyP/gGSZ8TC0ZRRsOlVzzgasd/u+zpMByLehAfCgMQCDyGZJHFCCgLZ2f8mgI5qauEcVx9e5vACTgCTwEMWr5TdIpWKJb5MvrnoocDswvAPAG4VLGg6UKeqmi4iuDz4er30oX0FP7u5moMvIf7W8B+jwlUNAzFnlZCIhvGFRCeWzrgXSSIBreXTFZSgVLHAp4UHOFuociEEsn2PJwl/XEk0dzfSojeerFg1IOo5BKAveIBex1P67lgUzgWQaJwLAKRH04i14ItgDKEtGsRnWx49b2Vkk9wUefTGrKCF7R0JxZMqxN8cmPAxWcAcxGABKEAKPA5u9lEaAbCmKMI+sDN1X3z+ro24wEZFc0VEE64ABgT180PF9ZdBcDb6JpqcPtPk+1ACbmKjJnllwyuILunEAWjZHkBsrsRUnfD0qEiC5IJfyisgMhzWhcP2O14Ro4WbASgAMQJ48SJwchmBCDFa8qpyBbSP7OvU4PQ0p2W7+LSnSJUFOrI4V7w5IoBTQQTfJ6oTSYk2mQcpGRyH2syGjIF6EM3V/fM++C1CfwUExhCsmzCaQT43lZC3e1hBpEHh36XEqrB7Scmq5dV0XZxmV8WuDFzAF9iwhow9seAGoBcGtKjqAc+1l9rLb/1igesO55ysmCrC8ei6IxRMAKTWNBi6Xw98xNTFUi0jEcmpYgRAPhddpVi9OIEPP5cYD4CcLkCooHPwaW9kV+iwWrQHT8uA1fd3F7DFvgUHUP2k8jTiogAqLoxFpDgbMj9jXSuN7i9dLIdaxzBp5XVBMIMgFEnFAPKT9qPd6A9BIGI7MfPmf4U+40HzI8nWgq2PBxL4FEkjKJixGRRFyQQPzzd1iAUzCAQas1YOmAEoFjwkecDC/PAwhKw6CxIkCXwOdVJLxTobMjBdyIgfvimNvNJ7Evf4jWtdnRYD1YNGVuG93VWuWs4Jf+mlZCCZxwP/cnJ6mXVKk2+tK8lQQVHRTGc64SDAZB3Ey3JcxyACkToJx4wHl+YwqloGDICmYmTFgMQFBET8yyYzyAG/AfWX8mCGQg0BTRoHwt9KVaPE/HQ890AIfgWK+CRAaMRYnVdxHbhdY8Wslw1V93UDsmPIj9GxgiAioRRMIJNvoti+SW/Ikd0gwAU8+XxJcbGITJPDvI6XdCFREFSknTB83xka40H1PGF9dnycCxFwygkK0bASJQSVAbAYeD98xUAe5U3jKIwBosSgNsuABYogl3/IwgFPrOIg1Xc4ZrpAsSrvruykl2ucykapkMMh4CExD5DwJfWAYAxwk4MKPAJgOIjGSEGwuCakRhemw6Yv0UUwRf7L00L9pnsNx6Qx4feY4O8pDEcixOjsoTKKpMYjSFYYjOC8Eq3Wnnr0YYS+0Tmi2HysrPGLqwASNYzBnT2Mz2QD91laxLB0gs12GAh81cf/o/OcHyJ+qj0S/zxnhUZbSyYWaL8+Rq2S29wowiWkJPan4MvgrDDGAlRe7KIywDIgR3meEDWg9HbJgApNTkXo8o0i7oVgxnEgFr8F7jEdnU5GvqfJQKQKyEOPlsNIQvyvupAGHS/Okv4qv9oh+PHxMLk8ggBCRxvAmEN+AiEzz2iQfQBeNmkh4K52hJBKOaNe/FSLobLRXCz43rQnu2yi9oMSMDxs2jo8303ERz1wsCGZECF4kd3DwEYYwJjhoNlQrgIjlYodbBPrwMAZfEmyzcIv27gs6XDzC/IR1DOgA9a6DRz4wZAsZ+LYXvQYsHoD4ziOFklna6YD3+nnU6dZ7bGDAcBUImIAmEUw/zbJ1i/scGNDJiLXmle3RhQ+l/aq57gUQCWzwwBKPeLsZ/LFrGg/ShRXAe64Ajkv30kALAjF8R11Dy3K7KRwJcsUTaqWScARou3w/INVnCH+A36n8RvM3nB5XP4oD6DATBYwGb5ajlOLOh6X8JaBKRG77+7ygGYp1bn+V25/01AzBnwQ1ypanD7KWfA1QDYC3zJIj7KgOUzc9nFbetX/r+O5biwNhyX5uSEDr5o0xsJwLp8/m4A7GaJUv/j3/5+HQFYJ3oFPPkho/hNeqBcMkcB2BAA6XrxmMBkfFAci/m0JpwzXw0TXvXtzrz+PKc/Ml/ugzM9MDqCAbz/keVjjGcQA/YLvjoguo1mRslRI6RwfsiA5nqhL5D6nscF8gfTdfxpS+/hLzvWfzMQCoB1Fq/8b3VWaPIDZqsRV64DALsZHVHs1gEvsqFAeBSApQC8pHK90Oql4UEAyvCwNeGcBXNLOPMLftgZsI75ouUr9ousp2TEyIJ/sU4AzC1e+WIFshyAHPZREVwItrrD3wGAhibTYBhxVpe/xePyrNBuWaoNp3DgFwC81O+RAepK/a5Lfe51jxr7JwA83nPXYgq1asl0yX5N48+f4VEGLATlK1vAo5YB1gBSRmsM+NFE57lcfPD5pPFWCJImtyvGgGfOAacBYO59zFglgHgPefZsXV6/gPXBYeC0RVgyJNOGYuJjPka9eHWgjL9bWzhWk0/n/wPn+k8bgFNmgYcsVflZnBRmIShtJM/m7JGibGBoOIIez9wKPP4AcNpylfbNlGfdI+9NjBjz8JVzppckZuJ+dBw4aQ44drk6j1LIY9JkPD7P4s2lwVEGLHwJnncscNIh4Nh5YMsSsHm5ndOu1BGFThJ8/K6JrZtoslST2+XHA6ftB05ZAE5crgAups5TfaL6EF+UyIif3gAcOwtsXep82eIYY9JkXpMgMp/AeZQBC2b8OduBYw8C2+aALQvARgJwGZhY7swEzbNa88IRvAVO1qkF91J36DNOBE7eD2yfB45fqphLnevzdGeBKBfL8UX5/CZgyyyweRHYsFwxYHzRNK6oetSBMDLjUQAWTPqPngpsnQK2zgKbCMAlYMMSME4ALrcnR6JYQIwsoUnjpDRstOLy7cBJB4CHUGwuAtuW2nUDVH1EFUhycSwWjGD64mZg0xywcaECoI0z5P3X5P6nWlHdgHgUgAUAfOYOYMtBYNMssHEe2LgITBCADkIzSJZXpCOnIg25uPrhgnupO/TyhwLHHwSOmwW2LVSik2pCrDsQskzNIBGIpBdGI+VfNgMb5oENCxX4yPRjPj4xaJ0+WGeEHRXBDUz2Mx4FbDoIbJypADixUAFwzAFI8KUJChMV2SUaAGc1cE/xFJef3FYRti64nkqWDrqqEhbrsm5zvZCdPCd8nHzJOLZuABRz9hTHZwPL7LnLnoNMIY2VyaKcjtZLHOAbNgNPngKe4BacfGF1pnydD+hphQ/8XV5UiEueLGnDN1tWXj/3/4cTwAUzwGPcRcFJiDpPt3FLmf5vjwE2HAQ2zPrEzDv7OQg5OSM+ScYQy5Xbo8465u/ZfLTJ7fKHAdumKxVh8wKwealSE6inEoSy2MWCdbUHIghv3AqMzwHji9VLZuDzD8cXxxWZs5c7apmW0fMBnIHKn5X7d6I5npvRz94O7LgXuGIReJSb+Xl1tzqflybwRwqf9i97BQRWomWJQ7oZVFtJoqDX/b/oGODsvcBTATB9gsfGqmzdjtVz+G+PAyamgYmZCoDjFE2anCVg1CeJwOMnTRB/DmUINVkkgia3y08BtkwDW+YqAFJFMD1VAAw6XG61R31O9/fdrcDYPDDmY0zjc1UjivBuAMx1QdMB+WAYXU8dhEU16dOSkppbcHFSrng8MHwnsGMPcN5ypURHp2xMIa7zDz2z8Gn/kVe0YomO0wEwBYKujL7v/zHA6C3AxfOVh58g5AsZxx4fZM7sf3h6BcDxWWeGBZ+cMEFiwGEHHRnDzun7ONHs/djkRgBunql0VDOSHIDU3cxSD4aEajhFXS4H4S1bgVGN0V8we7E0Fh9jVDG6Obr1LJMRwn+kOCaTEYT0dsfqZHXl/p7PrLi9wIY7gO0H2yAgCAWCWCowKrYE8nMLn/a7PQn9X7zIJPPkCcK+758y7x7guNsB6l98gZjLLYet3Ay5n0sv4R+fCYxPA2MOwLEAQLIDPyP8uBg2cRYmzFweAYilKkn+OC8/Fdh0CNhEA4nGA40kd6FES13WLO8v1qHKAfh9B+DoYjU2Ak/js/8NAIwg7OUb7LCC+WAfB4CpBJoIiTRNRmS1l13kqWh3Adv2A8cdqqp1MB+aIOSxWv6pq5D2kkIAvt8rF7BLJksN/jMqfa7v+7/Ak4B3A6ceqpasKMq5akAmlLWY37t8ZW97PDB2qALg2BxgAFwANEGcnI5JcrDZRPlkaXL4u1KJUAfAjbTQ59x6dSvdLPXAgGYshZWR6JIRaXB/NwFI8C1WwLMXzMeSwLfcXuKrA2G+wrLCDcN/IIg4ERRn0qvyySAQX6mG1XuA4fuAbTOVwktRRr2MLCoQyvEZ/UY/WwjAj3jtFJZkU79g1ghkgEBf98+0Umb/3A2M3lkBl/fOcdMok2EjkZyv8773LAfgHDDKjwNwxEUw9yailpwdxBAEYhBbAuGzG3aKkQEJwAkCkOCjlb7Y6SYyf2UwlAS+vKYnAXjfNmDEX7DEfA5CjUcsnzvbu1nDtUMmCDkRZEEyGdlAk6G6lQTSa6m0MP6HuY73AxNTlcJLZ6WOJYC5/CNxLpHMgdKIKNl69Qvu6/75AjHOiTU87gKOOViJb748BKCWrnK/maTA+58AjM0Ao7PA6Lx/xBAupoYDC9okBRAmPdBZ47lNA/DhwMRsxX7mPgl+SrmK5EaRNRslXFQ9CKB9DkADn79cZtkHFkysJ103eBbqlh97DpmTQTYgk9VNxu+xYbXKU3lhFoJPOgdFGY+lPkgQxokkgF9Xgj4AvfoFs84eX4Ke9x9fIC+tRfDxvvniif358sSir2LCj5wNjBKAc8CIi2AxxLCzIAGY9L7AhGIKgpATw4l8wToB0JjPrfTkp+SLQbHrOqm5jNyajS6VCMIpApDAWwQ4LrGgXqzIfnq5cv0vN0ZXHTInME5GBNLb1DGdOYQsI7AfGKFjlgqve8wJwG4T+fuFAFytXzCLb+VgWnH/fIGYfc46Hs7iHC8ZkPcdXx4VfVXJw8+cA4wIgM6AHSLKWZCTESfLfg7WsIyRF3ckiRQ+HACXkwHptyP4KHrpJvKVGnOhRF9eBF9wE0mUEogz2wC+WGI/vVxiQQIxAs9+rmHA6E1YFYB8DJwQMZl0OrLZ++i7sfT8zroYHLS9df4RACWKxSZvLXzG/fQLZqk2gqn2/vUCUQ9UZaM9wDaPeSPrC4A5C1KV+NITKwCS/SiCR/jRBDlLmP7nHynsxno1IPwJSyRpbiMADXzuPDYfZfBTEoAmcuVQdiaW0zwXwQsCYDYmMaDA1wG8TBSvaoR0G77EcGSET6hjOvVApfRPAUN0zjr45JzVcSqiTxD+VeGzXku/4Nr7JwDJOkxFIwt6j6+RqUrlkO4bXzp1gCAAv04AzgLDDsBhKugLFUvQUhTwCEKbnKCw14HwJ9cDgGQ9WegRgDI8XEcVEDvAl7lVlglAgi+I4CR+Zf1mLGgMmDFhBGFfDCicRJFERviSABjLS7FC0MFKMU+07wOPE0kGvaoQgGvtF9z1/iODkwn3VWoEXxres5ib9xx1wZufBAwLgAQexbAD0JiQwJOuJBA68/H3Zhk6+3CifqqwWNMKN8wjKgbk6gWJgC+FMaBb5vJVmsUbV2vCqo3cRWZcCIACoax53+ulkqNd7iqOcU1WcC9cxEm5kQBUdZ+sTnSL/jEtTWngi21jhJNJBivZBukXvOL+yYBkcOqxKjJ4AGgxzMrBVwdAMmHrZOAYF2l6y/mwV6xD17zmWo6MbRyeWtOHwxJ91IIhr6rqZS70DPPLXDVUrfBwzHKr1EUp6/h0T/6L/GcCqslt4IhoTcwdAqDSs7I60WQH6R329pHuFyuXDJmEjuOSbdB+wSvuP5bGUjmsA5XoUvcvBXKKAQnApUdXwah0b8jXR2YzJTsC0ZHB33FL+2yiX3h/1YeD1fFZGT81g/H6yqkVa9YEpqMhTADle8erHA6t7Mh6j4ZBXdBGjFyO4CSIm9wGBiBvgqxwIAJQlXIyEJLyI/i0SkAG/FbhaEr6BXfcv+5dLKhCg4z1C1HEBJ8+BODQGZXfk/quAZC6ketAZEQCTWAU8PIJt0fgwHzZvVWNaKqi7JLOmtDWFy42g1FxH/XfqGkII0C+a0tnDkfsGxQjn3VPsk7tXmuy+Xp0JhtoJosAaFcUAJUYKiYJxcqHqKAH9rPlG2cMrmCUbMX9guMLpGTcCMKDlZGhMK8IPnPIn1X5PA2AwegwEEYmDGBMjOI5whGQP3NPBT7VJlRNaKvF4t2IWHbDErtDlSk1p4lJ7/zd246tglGZryIfrFhQ7pU8WCAX0ZENG+57U14Z4YrCeLrSxXdev6TfLwrbxT7znMrfKQXfHLQCnyvmRIv0Q3430ezMmL98P393G3wqz6am1NYzzoGn+svqRmTAU2citctqAX/2EI8F9ACEmLHXLZGoFxtSl2xyK2bAYwrj6Xr12+1noL/jUTCD9vvFrn6u0v1/nvGkaoVBAQi0eummMAuXQHMWJAA7gCixG8U0gFfcXdlBKk4Z6zELgAJfZEKrxpC1xOIl/+Sk7jkcdYlSco90y9+gK6vJrRiADD0piad7RuFo3udNCgft94vCdrGXn+tujgV3QAcHLcFnroelivHkchEL8ue0uQ74S3eubAITS3IQhKkMRjBMokgWG3L//2z3VSnP4VDgQWxUEEUxAZFHL0eR3HDfm3IRbDHkBfF0zy4EIKNhSvr9goGEBdvTz/MIYQLQdVsTwRTFDj5jQmdArRDYJQNDSs961R3tPhx5NXoVgoxleHnarjohgLec3D2HI492yQNvIwvqO9fJm9zKGbAwnu6FhaP5pFuMg/b7tTbpBdvTz68cz/zI8azVj8iAHTqgmFHXDUB89R2dtaC7tUGw4kDOgFb0R2wYRDGZ8g9O8aU4XwPOczhiwGlMjqqLWiFYGu570wADFsbTvaxg8nkow7E8nM/atfKzln6/1mS4YHv6BQ4+Z0BbqHcd0NwwYbVD3+1yWhXJxPBrbq8AqE/XApSqAxiBV2MZ/54DMOZwKE00rnDUWcR5KiV/brjtSAMALIyn+/mCyeehjIYp6fdrvVELth8RAClyHXxmhPi6r1m8FM0ucgk8+y4RHC1kAK/5XgW+2hZYofafWcPq1B5AqDqEYsQ3nepR2gqhV2yiol1COkD0C+aOaoGx4aL7DQCwMJ7uVwomn4fm7VrX2u/XAlELth+5sHPtN+l/Ap6sX2dCsZ/phZkIJgv9l++1wbcq+2WFv2NXIjNKAPzuw7MUAV8DTuynFIEsQy83RgTAhiv+NgBABaQOGE/3mwWTLwAqHnaQfr9GnwUbARgDNBUlkpzQboyYCyYDYdILdf0l4NduW9kGoa4geNdazLElKoA3Prx7DofiETtC6XvE7hGEzJlpcis3Qgrj6d5UOJoYDcMglrX2+y0NPtl5UZUjkfx/Hqbecoe0OZzdF1gHQrln9Bhee4s3f3Zxm4MvAk9VSFdUIw0i+Q2PaBtISiBSSFgCYMjMW00MP7pwvvLDmwFgQTzdHxcOSGvBg/b7ZRZByWYAlOERluKM3Ra9CKWc0q73dTBhMFT4ZwIw9l5Lrpes+HjeBiGCUOKXeuBvPcKTiEIOR0f+RhDBMYi0Lhea4GTaa5NbOQAVDzhgPB1La5RssV3rIP1+7yy5OAADoAchEHBkFbKfGRpiweAPtMs5IFNokyOGk/7rAYC9OhBFwNXVY1at5tftCBHaWVS2AJdEcEinrDNC+Lumiyc1B8AB4+muLARAXTDCWvr93lR4/Z0Xt6ODFQkj8WtumEwHTKDLQejAfN3uds/dfjoQdatGLxb8jQBAYz6/boxiFgAVudzNIc2/s3xLk1szAORoB4yn+2DhaATAGJCtbpkCYq9+v4V+aBgAQ4i66XtaC85YkDog/zdZvzUgfN1N7a633Xqv6fe9msDIHfNaB6Ay2JRE1AHAEDIfI5nzZCLeN4Nbm9yaA+CA8XSsul6yqV0rJ2WQfr+splCyCYBR/HJyKX4phs0PKBZ0lqOYTpvniAiUAmAd+HKjo1cvDjHgr+3wPJQsVCymUZrPMuRsRBDG4AQCsunyJtFGHwAAIABJREFUcc0BUJlxQoH62q8ST8cggpKNAFRGwCD9fkuvbwAkyGgJE3C+Nz1P1q9/T3F1EZBxvZh50s6AEYC5yyUHXt5/Q8zI5/KrAmAIkkipkyGPYwXz1aRT8v5ZO6jJrRyAvKOvNXlLazsXs9bo/ztc29Pohgotp5J49Rcj/pzfIwGS//3OM4CNd1dpntQpFUmjEH4LYIgnyn/OLjL8FeDGhwJbNgFjI8DIEDA8BAy1PFK7FSKf43cNKrvHx+8C/vmxwMgmYHgEaA35J0StpvvzL/nP8RbLAfhyT207TChgDRiu/ZL9DsfWNABvYzbhCDBKoBAk/pEobGWTqp819hzQ1/0k0PoaMDEJbJjxVZFgDad0SaUO5LksWVj+XScDmw5UEUDJ6U4d0nVbC91S3ovfVHp5al64cgC+k7mZAP768KCA0WD3A/ieLz090CDceVmlAuhBljLgrfcAw6PAyDAwPFwBkCAbItM4a/FiNtERjBl76W9ffD2AbwJDdwFj+6syImRXrd5Y2FjIYcnzWPLEqnsfC0zsr6qBMQmfIDR/pyJ6xMhKyMrSDiKD2xja6TADTt0/AGAs1KcAUCFrOLF6tbtiRVFavT/wuMCa7MfVTlH098YBeBcwNAIMEYAUlS4uBULOmK3LCnwOPANlEIOSoF9+C4DvVoWXhvdWZVOYqWgi3vOXDUQhgieB0EElViMYJ08HxqeqnG8D4IIDkAzo51DKQQJvBKUmKACzbM4+5hUivwrgiwC4LzvjmgCh6nBcgiMTcv9Abo0D8E6g5eCjfpUA6AxoQIzgi8ALmWwC4z//DxcPPwBak8DQFDB8yJPpPZHeGCyC0KN5DFCByfh9/+OAsekKgEzCTwD047X0SCPM1IYQjCv2E/MJoGVwUUQoPboq0MdqkWVn7RtDDMahB4g+P6qhXFpjVtkDtRGA2nKjos7IyOyHFUbIrXe0FXsTuzIYfNb4O2M3ATGIYQOmPn6hG6gi3eUkQQAeAIYOAUOzALMVh2pAlESqGFBAXAYOMQVjxll03iO/yYKRAT0FQXkwZkjp1pz51LO2XAT3KtD3AIAwj4Wg05kfiuUHYlsXAJLVnP0INLM0OYFx78AzcRySeTsw2AJueI+Dj2Fne4EWKz5MA0MzDkCCkAByUWqsJzarEanzj2zXwjEGFHuGY+pYsMojzZL1G9EBexXou339IRBrC3lJGmNDuSHX+w7WC4Cm6wWxm8DngLTImgC8pBcGBuTXf/1fXnyTugnFwxTQOgi0CECyIFlsvvJfEnh0mhsYI/s5uxFYi1xZof7oOqSAawwYjRGBzYGXbtWXaCIrlvHUagX6SP/ruMVYCEbEqECXAMjfree2HgA0ESur1/0vtnNwGSsG0RsZME20/+/XWH6Mugk/yngPAGy5GDYALjiIHIgRUIrsZjM7Ax+BSx1S4pfffQVIep8dL7dMDsTGjJB+CvQxTHmdtrw4l0CovFruC2NOe975egDQsCXRK/eK634JhBK90q2C7I1i+Gt0jxF40k1cPJAB7UP2m3MGJAAFQrGei9iUTH9yBUDTHfU3B5+BOIKQ43BWtNtPcWIOzEZE8FoK9K0DCGNxLi3FqaKA9gTgeoFwPQAoI0OulWT11oEwiFz7cwbErzNxWtEYBB+VY76Vh4DWrH8IOoGQ7Ocg1CqMRLPltmxvs1/SHaP4dcAJePYyyUCRIzrTB8tE8FoL9DUMwl61kQQ87Rmy2PS2rgB0a1ci18RudEJH57OsY02y/+83/sZdBKr4FXQTApBvprGgQCg9UEAM+h9F6ugJDkC3gJPBEvRGrYoYCBX9IxEcS5K4i6cZAHIw8oXQ4mLBb35YH5d7OekadtTV1UZSjaEIPH4nQzYNwgjAHNwDuWGYpZc7lzPfX1cQur5oBorfzDf+zi0yVTuSkuxBI2Q+PhQDIUEnMLo1TBCZLufGw/ixbQa0KB8CTODjPohdY78IQmfDjmW7Yo/doAX6GqIiAtDHaYswSmeMubV81kp11L6hy2PdAcgblfslOKC1IiKRmyRxZgV/8++DS8BFrxXi5Hd/U6MeSKdqEsEKhpBRsgRMbAtuG4KU/+9ry5brzP/lPVMv1EPOQegharrVcgZUhVHFxNPcp9VFtlOWkL437C0WABWypFRGsV0sb5Hn2zYBwvUGoKl10v1knDgo0y7XA8Pfv0UACnjaK33Co9gJQAOe64FkNvtZAHQdjz9v2Nz2GSa3jYej2W3KGuZ9ixGdIVSoKT13B2s5AHkGheST6qn0erHv5AIgAAU+LVfw/wq3CEAV7clBKDDGZG9/5oVXx/oyYARczcqH5GyH8eFplTawFvAtrtXLGpNrQDGbejupB3omlIHQGc/ErzOcGSRs8zrhAbbuL1Tco/JfbLlNwHOmi2kIcs3owbdwNpYtynDQhsFcgvuG9/YapGFvYX22zZcAU0/GwA2LJ/4AmGF9mwEbBu98Y3cMF+uAGQCj2HVp3BbPuo3IlqxAy5wHAq4OfARmEBXGfNIBa0BIsG0ecwC67merHgRpZLwocrWaovuTxew/V0txJQ2DWeae3WAGbdhb2DB4+wRw7w5g8Qpv88liyGtoWHzMi4C9fAEHbBi8kwUKu2xNAdBxaGBLbJdZux1LwAGECYAEm6wyfpelJrEgFnRDxESwgyUxIUsVMwjVy5AYO0bG89Auu1/5BF38KqjBHlUAYXsteNCGwTeWNuwtk4JMkrlzGNizA1hm69g1Nix+zDOBW0aBeRZZGqBh8M4emfWNADDT+zqMjQyESdQFHfDbZECCLRgdHeCTe8CBaKJY1rDnBRCIAuGW4TYAZeFG8ZuMkGiQ1IEwGCJtHZBmy1obBsvVMnDD3jIAerti3LEBOMjGcOpa3WfD4ic9t6oveDtLfw7QMHjnH6wPAybW6yaG4+8D4HIQfvtDIVtLejpBFsVvUI7NIBHw3DUjRzL3rDVtsYPOkAScuX3coNDynT2VYJCkn+PjqvUD8hVbS8NgjphGxcANe8sAGNoVY/824BCBtIaGxRe8pLKZdpMkTvXiJ2toGHzSNHDPScAyq3er4qPyGaNc7JCRXWLT2TjwGmCOeQashq6+qSpZmp8vojQpheF58ncdZVjLnjWPHr4VWKTKxrHGUqq97qXu3jp0wPy+eEC/DYNZsZAO6IEb9pY9lNCuGPcNV830ZmkM9dmw+OKfbdcXvJMPdY0Ng0/7GnDXKcDMccBS7MwdKz8KCAKQIgY0MWGCtr4TOHAasMwOkTqf6unyuLykfd254nkb7qsw/iVg7jhgmSX31Vpd9yRHeLx+zRhjEGRbB6wDYT8NdymyubzDzCCGfpMJWfSRYfr9HP/aMgBm7YoxNQHMbQHm+ID6aFh8yS93tAvGQb7da2gYfPoXgbtPAqaPA+a3AEubgGU1RM6B060fgkRoCzj+TcD+04CFE4BldZdRc4/YxlxgjJMewSiwN1zWfsOngdljq3EmY08vm5i/7j5yIMqpvupKyGoNg9lngYosl9wY/0dZdrMzYl8Ne8sAWNOu2MA3zw/F2CoNiy99XbvftrcLriz6PhsGn3U9cM9xMODObQYWCMANwPJ49UliuW6SaqqBn/gGYP8pwPyJwNIxwDK76ahDeN6uXYCuYyABkEza4LbpY5WEWdSLxjF26/dQB0SJ6r4ByAN6NQxmkWcqrnQ00x1DEDJFjR8CcNWGvWVPp6ZdMQ6OVOCb3wAscPJ6NCy+7PerkP5Q3tBY1PrT9tEw+JwbgPu2AlNbgVkCcCOwtAFYcgAuiwWlM/XqDjMEbP9t4MB2YO54YJFMo/5gHIcALV1TRZ17FXOhPtvgtvkqf9H4kvHDlyKK4l6VzvVSBF22uwjOb7pbw+CfcwBSkyeFEHAUx/yw9JTyEbo27C17Ol3aFWNuAlgIn9QxO2tYfNlbK6MvaxeMRYquvL9rTcPgJ30TuH8LcHAzMOugX3QALo21WXBZLEHwRF1OgHS2eOgbgIPHA7PHAezNu7QFWFZ7JnXJ5rnqxHEulvlzwyVNN3+wern5Yovl7SXLGwvn4riLWO4fgMRJXcPd/+pmOymELEhRzBxJAo9gVL4kwVnbsLccgHEpWi3epocCAMeBRU5eTcPiy/6qtl0wpvhA+2gYfO7NwOQm4OBGYGaDs+5ExYDGgqP+ccAkINaVpB8GTv4d4OBxwNw2YGFrxYCmV0YxLNYheCXau7EhV3ga3Lb8g4+R45uoGLADgHWqhsBXA8K1AZADyRvuvtkBSArh+i9DsQhCOtf0UUgW/7aiYW/Z0+nRrhizoxXwFhyAi5y4rGHxU66qAFhT3rDSIVdpGHzencDejcDBDcDsBDBP1uX1CMJRwFiQIBzxieL3KIY1YW5MPOxNwLRb8gs0aghAss1GZ1O+SFHsdRPt0i/PLHu++dFb/x4mXfhcbWxhfCtYMFr/uWvKxfDaAcg7ipPCvFOVpuo3HrCjYW/ZA+rRrti6TS6MVQ+L4NPH2nx698GnXF0BsKa8Iab4dFZpGHz+JLBvApieqAA4J8CPOQuOBBAOV0CUYbIskRkAecrvAdNbXc/aDCxSpyT4CEIyTgRgneiLIp3nP6fs+a4A4N8B8/48CUC+ZGJA29fpuLmxJW+5h5kNFg2jiWHSi0r0Uv4pCoZsxw8DUfnhd4Vk0XGdGvaWPaBV2hVjdjgA0BlpkQ/K9bmn/HOVqtClvKEBqlfD4AtmgP3jDsBxB6DA7tdbcvYzJvQJkii2n4NOeMpbgJktbYPGACiF3wFoEx1ZMNe/4jnPLXu+KwD4t/5SO/iMBcXuesHylyACMBPDgzGg7opM8mEHIGdwrfGA1rC37AH10a64Yr4APvvOSdwEPOVbKxu+K2pdKRTmdI3dqkPPVgbSTBGAY8AsATjWniBdx0QxJylOFCcr6HBiw1P/CDgU3EgEIMW52M8YkLolQRddIN1AyKWiBretf9MJQN6HsaCPxe4rvgDdHOcOxDIAcmDFDXvLnk4f7Yqt63gEIB/Yoj+4p9xaAbBHeUPM8qF2aRh84QQwNQYcGgdmx4C50WqCFngNsgSvQ+Dxu4MuiawhwIAXVk1O+e/A7CZgThY1dcno1nHL2oDIyZULpBsAFTBZ9pjT0QQgn2V6ufRicS8QRgbs5ZYpEsENDejBfpoLrwAOjgIzZMBRZ0AHoUC+SOA56xJwNlEyTFw5FxBPeWvlzpnbANCdQ1eSGTRybMuydgMggVBsKmtYoC6Mt8znZxsZMLzAxoAOvsh+ydDqtXx4FIDl8L/omQ7A0QqA82S/ERdTI22mNfaTuBIIxR4BhKe+y61punQC+MytI/Zz/c9EuvyBeetLAfGZ5WOMZ9j2/gqABB1fMLsHAVBqhfTcyH5d9MByEdzs+B50Z7voGZX+NzNSsd8cwUcG5ASRKYbdHRNYwhhDIHRgGmO0gFP+HJh15jOXjnyKblVT5Cbfoq+yJOszF8P8+VnNPlICkMAzds/YLxlYznrJwIpO6egTPMqA5ZNDAB6iCCYAyYBcBqTRQ0e4630SxZyQJQIvMJ8mSeLrYe+p/GzGfnTpEIBy6US/out+K1wg+brs88rHmDOgAVCMnrEfxxMte1Mt6j7u9zzKgIXzczEBOJIB0BnCJoqgIfDEhM58SWzJEPGJe9hfVH42un/Mfxl9bgSiBySIBWnAJBDGEDAB8QWFA8wO3/a+wH4+rg4RLPYLul8tCI8CsJmJMQAOuwFC9qMI9g9Z0CxhZz65K0wfFBPqu7PEyVdWAOTHVlTcpxhXHZLz1w0ZA6EDLhkCskRf0sw4dRYC0PQ/vVSRAYPo7QCdj7GqVOSMeBSAzUzMxZcDMwLgcKX/zbv45SQlHXDIgagJc+bjZBqAWhUoH/Y+B2D0J7rFa6LYDRmzomsAaOeKqxEvbWacHQB08JkRIteSXiSBLYJOLB+X4xrzAzY7vgfd2S4RAKkDDgPzNEAIxMASSWF38WsgkuXLyXTRSRCe/DduSZMBMwe6ObTd8JBj24Aot07uDObPP9XsIzUGFPs5+JJ/M6oT4buxHv9X7BeY8KgOWDg/Z58GTC9Xq5FxTXOw9c3Cm6k5fPcjgbHbgAlvVG2tH1T3Oavoq6BlniZ+12n5u/2sDbOvasqoFg8x2Lnbcd1GdhSAhXN+7qMrAC4sA8sORJ6yHwD28z+Ft4fdv8UyqUDrDmCEBcpZ39kLS6aq9l4D2rLb/KYsFTPWdfbvh86vQu2s1K/K+zIjTsXIVQ9a59Egs4Y6sZfIA/EcSp/jEXv8BWcAhxaA+SVgSQAkGAMICcwVlNLlqTc9Gbv/HAA7MrL4+f1VlXwrUq7SvCoyGcrrWpGhuur2fNGYwM8YT67hT3s1LaZvqn5MLM0bzmHMmIFSgdFNj/mIBct63NhFZwEzDsBFgpDPeanNgATfCtGsX9TIKwNrg9tuVkhlng7TI/YArX1VkXKrEe1l2SynN1RCsFJsqnQv3UIMxhwIRjU5AGN9QUteVz3BUAvahuNgjC3HxLAND7nBp/cgONXF5wCz8xUDGgCjKPbvevlzcKUHH2ag6cnYzepYBB9Zi2FxDJdjoXJv1WDFiLJ6MKqKZUzoQFTfj2HmwTKcTpVWvcxHKm6kKgoORAEvVclPD6NdzLXpMT8IYNPcLV7yJGB2AVhYrAC4SNA5AxKM9ryDPE5fs6eeVKWGZ2M3S3MQfEyJUKV8L1ZpJXpVJ9pLilmlAxWkVJHKwIhjjD9TtVXVm1HdOy/pJiaMFRWM+bo0rWl4yM1N7oPhTJecC8wRgAttBjQWdBBGESwgSiV0Pb9DRgu0TY19N+M1mRKh8niqFx3rRDsLqjgl9yaGXT80vcL1wnE252PAZCzAHQCoiqoW3yYWFIt664fUpKaREr1NPakH6XkuOQ+YDwy4FMSwgU8GSRSz0UJx3Vx/5vFNbrs/EiLRY+v4ACITww6iJEodQKwBIyBRv9vwhKzUW6z66TUGEwhDS3ezqusAyNxnJn8xa1KRPSFts9YfFB/QDZcAm78CnDBT5U8rCqjfc3yh8Gn/hGd/MsKf1+QzYJ4891Jye13iy1cAE9cDJ+6FpYrEkidxDN3OtXR+FwBGMezoMmxJLOumAuD4J4rxJrfdH/XCoLGFVKiUbw+LAPQqWWaMMLrd6/+JycSIm85w9lOpt1j1MwAwFTiqAWEUxeYH5ENn/jInUVHeMXQ/f/jRePvCa4DhTwLHfBc4frGqqaNJzLPw6iZxV+HTplFGvZrXZT45N39+HW3TujlZv8D6fp8HRq8Dts9XIOR5YtakgBgdrrrt5Qsq8Ssd0BhQ4HMwmVitAWHAY/LbLDQNQDaTVJ8Q6W4qVB51OOqDZDPVB3TLOBepW5jmqaLbec3jGgBGMSxvvemDYkQ9GoKF1ShUCSKCqBeQrvmfVZPC1keBjXcCmw911tTJ8q5XgOLaQgA+x/OdWA2EGZ98gbjleTHdQHQN+2iwls3nK3/Zhj3VeQhovYzdxmArSwQgDRA3QiSCJUrTnjfl4KozRCSCCeYmt90EoJJbVCk/1+FiCwFZxLk4dRfLFia6x8LbYkD9v9cXtLG6+O4AYQRfrgPygVIcqyhTXcWFOJH8fh3rz7EKwnUArq8mcGwK2MCC1i7WY7Zenh56feHT/jE3yliE4TZncd636gPFCKWavGhcRx2J+cvs9MlSw0Ty3cCm+c7n0G0MExdW4BMIbTXE9UCynvyCCX+Ovm4gbByA/xisVgJPpXrzLj4EoRJjJIZrWHArS9iprK+KcefgiyB0XVKGjOmCmW9xhRVMUSyRFnNeFGEdI2q+/HFXclkp9WsAbgTG9wGj08CI64WxRk/OTDcUAvBHXSLQxcVCDMQSWbzv+1e7WVbz+k5w2tJtsbcCYV6WJY7hmAsDA7r1Sz3OgOgoM+KTOJbcjSI5yGIaNE1uuwlAAU/MF+tF5/0sIghVLdVdM2S0bSzHx2Mi+FTxXf8X925NC4BycK8QwfmgVX1LlcFiykEMcL2BndJJ7aQfijKfxLGDwAhByM7aC5U4qwPzNwufNnNuOH4VZaCPlPo2AahqFqoPVFc14ga2m+WEEL0cAz9kdPrOmMu8r1o/rTsXz7f9oswFs+jO6LAqkvC3Ggg5Fg6mwW03CUI6X12h8lyfcz3QHqr3DIl64DbqaQKc9mI87QXACD6vpJqY0EVxz2CEyCI5eMSGX2e7VtI5J4yTRyZhscrvt1nQuivOAaNLlYESwcySgiVbr37Bfd0/u31yEgg2FVaiPCeVOguqAfGov0iR0R9JABJ0bnwk9nMxw+fOh55EbgRhzozrBUA1polN9CLwok5HEEUQBjFMQB7D+j656PW+IrJ8O/bBCo4sGFdGejqiyYCx3mKe9/JtTiBvmI5OFiTisg9LtJFF7gZGDrUbHKs79+hyu5hSaUvh1foFr3r/6vZJCiXgCDwVVFJ7MVmRLsrGltuFCc68yFdACMDAflwR4QM3HPoKgIExt4gz42SuaQb8hBOE2oZmlu+KFlKR3QSssMJxDPWbbjpfLoJrxG8CYT8MKGZSVTCxYFTIb84nkCxCIPLDiby30gXFghaF4c2ReR466Uu2fvoFr3r/fKAEFxvpqMcd9yonIrkuK5LLV7MVCM+/uDJCyIC2J8a0z1iwqyESgMl15Sa33QKgmtPEBnp11mwuXgO70Ud4DHWzfgDYC3zBEOk7HlA6XKyHQzb8HgGoCSQLqsxorIy1Bxie7Wx0rFaf+wr9Xv32C+56/7HbJ5VHtRYT+GJrsehHcya57PyKAQk6+vBkBZPpjPEExlwU59awg3C24W6KBsC6tqHR+MidyVG3i3rdAnAsH2T093XT+zLr197MTA80h3SfsZP2UqpCrPQ46oF317VrpeiKXTJ9MhMLkgGdCacKG/mupV9w1/vnwyGgCDCKWzJe3lqsyzLWZWe6/kc/oKzgKH4jC7oolhdC4jiuzM0WPo+cPQ2AsX1obFCTO5Jzn566PwbReiwnfTWjI4KvDoh1juh+aT+WKSYD3i8Aql2rJk+VsVQly5kkddv2FvHT61icqO7Fr71/IkLNXOi0FQjV0046oBy6wZ922Q95ICqDEaL4XWw3COcf9Mw73DFB9AqE6wZAAS8XuzGQIDKf+oVkqxt00ttAc+YT0PJ9qRFSB8xoye5Xu1ZVeCSgCLbYLVNswoncHxoeLwCzBGjBNki/4BX3z9lXgUCyIIGmhova83cRgO5Te9yLgP3MfmsBS8xs8/U67ePQOqy9umBUruDchqo8sHSd3PMfT5ifo+ack8eFHI6QEcnT5GvdOnVdXof+ptJ+BVPWceiaRHA8Us/nkACo8mzqlqmWrbFDppT5A5UIZm7CPA2Vgm3QfsEd909kKIqB1qJAKCBG8ZstZz3xHOAAiwmpDIdng1maZQAkZzsHZ537YfQrwNyxoQ+HakrnS0h1mUA1C96TdJTmORyhC3oeqdwROi+GDhkFI6bYNrcNDEDeAkXwQizPRpmnIs3OdqZPSaRFUcbchHlgie6agq2kX7Dd/+d8lUJVXuUzk8ERmS+2vfd4uvN2VOV5rSwb0y3JhgIh9wJeN3YMQCIgR78Q+nDEVYBYZUrUpbXFnM7COSdf7N4IPvtDnT2BY/h8Chh10MXQeYGS+7GGjaQiABpuNIFiECnzdWJMIUHcazLptC7YivsF8/7FgLFMqpiQL5TuNbKfA/DC46rqqAbAwIKWK+timRUBEiNGsOQsyQm+Gpjd4n046hbT84KPuYjOmHHyp92gcgDS2OoIuVIeh/xyUkaVwyEWdLrewHE3uBUDcKIwnq40HpDXL+n3CzbaKdguel5VnFJl2awaghLQBTzteZ0cjLq2A2n0M6EPh2pC57Wg41poLzZsAZNso0Hw6eVR/J8bF9YjWGmVCpGKwQLBRCcrbiSxNLgVAxCF8XSl8YDHHFPW7xeFBRwv/rGqOKUBkODzqgdWPYAM53vTASMQu4Bx9J+69OHIF+N71F1O1gUB+AsBfFqKC+4Wi4BWX+CYgOTAU36wdMVNVKka3MoBWBhPxyiuko3xkSX9fvGMkqsDlzzHC1N6SQ4DoINOe7KelWWTheziObeKCdARApD1AdVnRH048gKUAmAEYi6Oh4DJV4VoGDWqjq4XLbO5o1jBoimEPhPJmwu9FvnTLgdgYTwd2wyXbMyRKen3i2eXXB245FlVYUpVxUpGiLtmGBlrTEhVUwV8dEkVKAq3MHJ1uzRbRx+OOgDWFX6MsXJU/36lJoEoA2AKvw8+uwTEDIBbStdOs8ddDsDCeDom7ZdszBIs6fcL9ror2C75US9IxJJsEsHdGFBil4yYuUwknofJgF4XcEUfjrz+X7fKo4EJJ//PkMORO6FrVjQMeL5kJhZMMXzLwNZCt1nzDFgYT8cQwpLt4hDON0i/X7ys5OrAJVe0S/ISgFY7j9ZvnQ7I3+lyqpYaL98CWp/N+nDkZdhi6bW8An1kP3fRTLKVWlwF6RZCH2L4zDDR0k1IqeTNb2OQSYNbOQMWxtMxeqtkY6I+ny9VEz6btfb7xc+XXB249AoXv85+tIBVgJJ6n4lf6oV+mfjdDJNMH0wAVFX90GMk1f5TxlS3Fggh92DyN0IORy5665KIfCktsl+K3VsGtpVOWOMiuDCerlSnjQ2rB+n3C+pIBdulz8wqonrNPLKgwKaC5B3s53qhXVq6oDNg6sOhqvqhEr3V2VNLBjmnSSNdrOLJ1zkAu6VPRjFcFz4fXDJ8i45hG94Gt3IGjOFYA8TTlQZ/qGH1oP1+8ZtlT1MAtHK8mQg25zOZUSCLIliWcbw8wfW5Ln04ssqnHX04euiCk6/3de66MPpuAQVZAEFkw2MKFw6a1wEL4+lSBvmAOMhD8vkOkFX77feLNw14YT/ssmc4A6oOdHBEkwXlgjH2k4Nal6wB4fIuX9LzZjAmorNeHMo5Tc0OewHwDTUh9HXxfGJsYkAbAAAgAElEQVS/uvCpoAcew6zBBrdyBlQwwoDxdLZWXLDFkHyF8xGE/fb7xR8XXByAAVC1oB18HQYIT+8uGfP75SCUs1o64he8v4j6cIQ+IqkPhxrBCHjdjBH6AblQkAeY1ondukSiELmsUPpjbyp7XuvDgAXxdNZVvWCLIfmKg6Bbhrjup98v3lVwcQLw8gqA5v9zC9jErutltg8gMxDWWMBaMVkmANWFyEV6R0uH2I1IzW7ypbkQOTP5f2ch9KsFkwp0kQlDAOmxzHpscGuGAQvi6VD4RgmAg/b7xZVlT5MATNXwqQc6KGwf2U2uGV2uzg3D4ua7fDnPwZcKgIdq9GaIBPZb0YdD7hgyIFWMXiH0eQ5vXS5HcMkc++9lz2t9GLAgns7KxxZsCkgdtN8vWD+vYDMAUpcja7lOR9eLVcIP4tcuob/3AOHCdW02VTX62ApB4Mv1v24gnPy9HiH03fJ366KYHYTHsgBBg1s5AxbG0+HLZaOp65i+ln6/YM5EwdYBwGj1cmUkE7+8THLNdAHhwrUOXtcrO/pwhF4cct2oN68BMDCfmsJM/n6PEPoYPp8bH3kCkbtjji2tJJA962YAWBBPZ0WBCrbYsFoOf9pDAiENk179fkuvf9nTXewKcBSjsn7ldonWbgQpx+26otaLIwAlfi2QQSJY3Yjy5i9dmsFM/oEDMM/Z7Uf0RiYUA7J+ToNbOQC3e0WBBm9qLad6HICG1ZK1XB5PoxnuOOIcxSXe/Of8xHV/P+FpwN47gKUpYHmuSve0pKZgCKSq5wqniWE1WZz/xouBm74KTMwBI17lVBXwtWSs+8/vL45Ff3vhpcAnvwos8d48DZX3M2hx9XIAnu0IIO0chu35AOgLL0yuG/jOmwbg028G/mNz1YWdETbm4I5BrFlov+EtD2wIo7l+Atg8D2xY7iw3V5diEqO54mnj6XdMAYcU+6gon7A3NSO2qFjlyZYDkAX6uD5Iam44YaUfVNDNxaJcLIPXcGGpfi6PnZdVD1wPspQBX/wl4OaNwN6Jqg+xwrxslcVFuYJblehkcYYZGPS3L20BxueBcS8nwg5H5kZkx6TQSbXFZcCQKadx5Cz5mPurAFxrRaa17pAR2PFC+ElSHKQ/0QjQcgCyGyM9v3SnsDBRJgL6msWCf6IfWeUJac8UFlpY8500DcCfvgb43hiwZwyYVhd2D/VSrKGAmIDnBkiafEcN9cprHgKMzgNjS1V7rRjRlceyrqif6KAkMgXIM+6tAnDl+zSL36O9+U8p9jGHQo285/2XA/AnXeNnKAorDXH/AILwbSvLEz6Ql2+cAf/3XcCdw8DkKHBwpOpFbE2wadzIdyh3jjNQirYWEwYq+/zJwMh8pf+xKNSwM6DZMmzNRRbM2K+2Ii6TlFrAWfd5V3i/F7IgT2LBF5LbIdkqxLPWvtzlAGQ3RpU3Y7AiixMxLOUB2t7pKQ8M0qCTnp8HkojJgNqaMEJesQv4AR3Iw8DB4QqAs+6SWRiqgJgY0HVDAdBA4Ba4xN7ndlSFAAjAYX4IPO5dBDMAdS2i+Jx7XTf1eEdTDfgAQnR34p/wQkRmjNAoByDT/ugFphXAmjAEn8qaPQAgZCs0lSckCNmVigEbFMsPBBE3DcBX7gLuawH7hoAD7EM8DMw48AhATrjtQwiXoqkTEwWd7LOneXNCbz6Tiq/TInb2M8ZzIFrTQbGiy92oGz7pXl/7jvdAJnb2470IbB3T77Sai+hyAP5voTqW6sKwFAc/TAdc5+3dvcsTrvPVYSK4SQb8xV3+6IaAqSHg0FDVh3iOIFTIFxtit9orL5Z/LD1Q4s+B8OnHVuXwhhdd5DoLGsgCCJ04q66X/Ju/vSaeAxDPvbdtmdtKDV90gVEPIl/xySkviOhmAEjrlzSkwj40SlQZYZ39I+8JBMx8mZryhOsKwqYB+KpdVSDFvhYwPVR9BD7uyX4SwRS59nNI+bRck/DzJ05v12M0nY8fAk8iWL5BB5qASPGRCi8EVjzv3mqpkC9ACrrwhKukB67GhpqRRowQMqCiYbj8oOoHeUWpdYIBAUj8c8WjrjyhNIJ1unzjDPjqXdUjJAAP8TMEzLYq9uOHICQALe/EwWe+QgddAqCzzD8+vgIgg0qp+5nYjaDzCgjmnCYone0klqP4JSgvvK+6LoFPoFMlkPGh+0rPWta4RHTNJJQz4M8EAGoNTPVU8opS64CC9zoAWTFChcq7lCdch6s3L4J/2QFIEBKA1P9mHIBmhPh3Ai354RyAAmWsR/PRs6vOR8Z8FMPS97yxtIlYgVB/I7jC0rIKSfLXF1EEB+BFFjQ3jCLA49OWsRTTEPzvzQEwry7VrZ5KwzAQAPssT9jw1dcHgCrORQCS/bgn+1HsCYQSveaHkzvGv1scgU/6R55Y1YIxhvOm1EZekQWl8wVDxJgwc88QiJc6AKX/meHDawX9z16M/Em7bO8Q08GBP/jEkAEVjMBoAFWXUjRA3KtNwOBXW3EkAZhrALktpC6lKtTV4OU7RHB+3kHWgv/zrnYZl2kCkF4uF8MGQGc+MqEYUCA0n1tkwxbw4ScHAHr71Q7W4++c8czwcBAmHVB/c7Bcek9b3FuwbdD/kjGWgzJjQ3thGmVA3jhfOyU+RxB6FamOFp8NrhsTgLy8Cpzm5QlVptAU+6CiNgXCaIQ0BcDYV8b0P4pi30vfIxD5+w72C9aliegW8MHzqrmh/meuFhYi0pKbs6D9fsh/n1XFMrYMbPgUByCZz6J+uEknDA9AornWFRb01WZEsACoHhOqyC7wdetT0QAK2KqOb5MCUvPyhLE0oQxzqaYNXL5xBvyVXe12vByLADjXAvgxBvSPGFGMIjCmJbEW8HfntxtQmxT0cmxp9UPAdKAZ1upA6EB7qgDo6oCUxXRtPVSpAwJpnUhuxAqWCCYK1MBExZljY5S8SYr+pxAFAuBayhNG26jw8usCQLX0SAAkwwcAEngyQizaXoziIli+Oe7/9kJvNk1LmBMe9ECO3XRB7aPeF0EYHNVPdT8gj016YBcWtBfBVYJuz7mF7VgGY/pO8f5WdQ1/7U67nIKNS7j0wIbDPFZsyNHHY7od/xdlEHj8CcC3TgCWHgGAPSxiSdt4312u/8SPAl8/Dlh4pDeZW2PD4J1c9+uyDaIDkgEJQKnTfG/N8nUAmu5HUnMW5ARbPfEuIHy/ACjRK7FL5pOR4RaxgTHofKl8r/S1ZWBnAGDKefbn3AFIPRPXB7sFiVQimKVgGdl5ooNwLQ1/1U+DQGSXQ9r5Evy1q9rZbP1lGQDZsPpzI8APHgXgod7qUx11YtBbFzC+/C+BL7SAWwhgdoLkONSLqy5oLogYft3ZI1F7EAC+phsAnekokhP4HIzml/PvthQWmPB9LJ7jxkcSr14jWj4/0wFlgJD5eoDw6fe4DzAYPHokWhHJZ3TFSkn4h7YOSOBwEtiMTv1aY0uktFYTmI2/43EMQmCuAJmUE0gmVD8EFdPpdnxhVhqzDr8F4NMtYM9Jfg98EVTeNu9Q2OFZBX7vr9vtgm/lcezczZ61ZNN8DCvilYCdPXqNDQpAlfGTKm0M6AA0PTAyoMSx64cRfPQHXsniOTI+fEWDFGp+Qb9BeySRBV2kpl0QxxGAlHDmkI56X6z+EP7UDYSdRgh/IouwIZ36lHabBE0GJ0r10Rgb/xA/tt/j/6aMAf+7R4CxzuBXWRGULwBfIrY6UNfpvLae7n0I+LO/reoLMqiVMbW38oUhkNkQIzZO7tIweGePcmWlAFTjAYHPVGwXxWoLYblEDkLuTT8MDPhXLJ4jALpaJB+ggU6xfgJknT7IKXIQXh4Y0FZCog+wxiUTwSkXUbSMV1rB/A31OXWuFpPUda/mRHKi1e6U+hA7Zq7l+A+UAfDtHg/LrptkQpZ727cRWOL9542Pa3rOvuOqagUltgtmJM08j4/PILbIDKz6w5PAHsbraTnMGdZWIwIzxIfeK0rn578J3LAVuH8CODRahV/FFQ/1IumIvXP1QudNfyNT8oVqcHviPcBd48A0g2RDuoDqHdb2SalZAdG9dnfDkAE0gXnH5ijWCDbKCq5/MRiV0QD8HgHQ63jG0hdsLGxA3x9Bw1Asli7hO3BwApgng/Gjvq01IHrXJ7q3Cz7E++YziF2rs1ZLZ+8H9jJsSoECWXj6igmR87aLgfbGq4GvbgLu2gjsHwdmCEIPSI1h+SkCRjpfUC3iNWcpoRrcnrYbuGsUOMBo7QBCxSTG/igxVcBIVGPWM1h1JYQPnyKNExGZMDIJ9b66eEBGxPDY1Y5nv+GCjfGAxD+DDpiawphABWZPjwNzNLAEIH4XCH0M7/5c93bBfI8Yk2cgVAdvdT10ifDkBWC/r9lGH51NhIsnsWHOfPmEUKT94WeAG8eAO8aAfWPAwVEHISNQlKQUglJjJExqC+H6Nq93kOpUg9szbwLuHa66QzFWkaFieXxi6hgVHOMCYGRuJ+5V4jYJIDKI9KlsAvFDq8QDrnb8NWVPh9EwdFkQ79TlSMIsN0Mi5s9MoOGno4U6f3YAvefL7Y7rvdoFLxOANSA8f7xSgWmd0kCQbmZ6mTLEnJ0UqWLhUkxlrBn6n3wWuGkYuGukCsufGq2iojnRFpafsU7MDxErJuZhYCsJosHtWTcBe1oeq+hxigJgXBrMmTBPnJKLrr+VED54ibHYvZos8sO+DNcrHrDX8YVVyglAKud0LtMjFPtNMz6QLDY7VomLJd671AEH4Xu+3g7nWq28ISvX58/hguOBg8vtFQvV/hEzxfqOevuTfpjri8vAWz8L3NYCfjBc6ZYHmBcitnFd06pxyb8W4gPlgonBqffTtdTg9pybqiVNBssyUsdUD7eGO9amnf3sXtxQipl7Wg/sD4A8AwHIyZMYky50Tp/xgN2OL8y051qw2hXzwRCEdT2nmck1RxHG+w5jeO9NFQBpR6ldMIMXlFWgVndqF2dVFsJzuOgRwMElB6DcI6rznemD0RnbwQiSRS3g7Z+tVIl7PC9kahiYZm6IizuLigliT/VoUog+p8P9l3wJ7qGEanB77k3VczroUToWLCsABud4ypaLCUoxf9i/9w9ADiICULrQRWuIB6w7nuZrwaZwLBGwClSqSyz3AhHbaRGEFGOmC44D72UVgjW2C2Z4lIF4ArjodODQcqUGqAxfcpG4mJVuVqcL5tbs2z/veV0tYK/nhTAqesYNHdO5PCJZos+WuzxHJIViuXFyJxupNLg976ZK2lizUKodilGUgzyGhokF8yw5Mf+qRkjdjfuDtwkkm7DTkNaBaQ2ox1q3eMD8+B6O3H6em8Kx1Ccx9ptWl9iYIUAAWrI3I3nHgPdOtsO5eOuxXXBdj0V1vOL/so3Cxef60tlSpYwveKf0pAu6ohfdJ8k4CUqgvr5jV6VGTBKALeCAh+VbZLTnh5gu6D44A6H8cVlkNK95O1WkBrfn31R5HSy+JCwPplAxRegE/2T+AloGncNmbQyogUQx/KwB4gHj8YWNTwRAOW0FIIIndoqNkTAxz/bd09XDGLBdMM6/pLKi5whAX60gCK2ujxzEAqGL2pQ1Jis5AJEAFHvTujYAKjRf+SEugm1d2COQLU/DAwQ44caEw8AtZzSIPgAvuKkdrWMM6M7xCMBoiBn4YpCE2NCfxWAA5MEuwvCCEICwlnhAHV+YORfDsWJGgPpMKwg1b9QpFnzHbD2BK2JGul9s8KkYW17vLALQRTCBpzXZpS4gtCXXMAkduuAy8E7PijPWprXJ5CR38ygw1fJDohh2BlRAgq2OeN7uTWc1D0AFNtmL54ESBsCaJcLkDajxj5ZXRiCIGA0waDwgjy8sk5+HY+X9ppUbJSCp6TnFCMXwny1WAFQ8rUAc2wUrRL6mXTAefWnFfnz3FpbagQKLAqAzoZjAKkkpXkNO5GCEvOMLFXOnnC4xIKOjnQGNdWSM+GqHQGd7JSsxUf+JzQLwhTdV4je1nQvr1MkPGtlf9yP2Dy+gAqZ6rQytfvdHSDxgLwBF8AmAYjHWluEDiKGMiqOVvtejXTBOuRSYJwDJAARgZAGWL9Nk+IM3SzgTydE4eec1nZHbtDaNAf1Dpd/SMx2END6kD0oXtFhBXmcY+OY6AFChnKnzl7NfdMR3qCAae2B+VVMYXASvDs3/X/zHJZcB84vuiqABEo0QPnhnwqQLyRURmZBPytnwHde0M1vN2lR6picoKULaxHDIEdHkW2iWg4/7b5zb7DSQAVd0/griV2JYojfpwRGEYsGBrOBmx/OgP5sAKANkcbFzNWTRnX/GSGImMYH/LYlk+gGvdT+bW+SWH+Ig1GqL5QeTtR2EYj5LVHfjw/ZDwL8yJ6TB7UU3VVoTjTYxYDK+Ivv7dzNAZIxpZSiU8jjKgIWTcykZkBawDBBnQdMr5QeTKI5iWCB09AmEb7+ucnOQ/aTPWn6wuzyS4u+R0Ob6CUGqJpIDA97AdqINbgRgBJ69CG4Jp6q/ckjXqB/RKla4WpkO2ODgHoynigA0JiLwaNiEt95YQKJ4FRC+7brKzRH9jZbN6iJYuSHm9I5iOAOhHNJfZkh+gxsBKPbLu3+JgaWDdojhMO5kkDWSlNTg4B6MpyIAjf3IggJgMD4MCARjFMU9QCgAykhSKnUCYHB9JB0wy5aTRUxmup4h+Q1uAmDs+hpXgFLnB6ULONOn5xACNJqxghsc3IPxVBGAiQG9aLeilWUJW1FvVXEN0TKp1C6At19TMSCBpz1dHtT/JH7N9yaxp6QkF73KBxYIr10nAMproB44qQGTj6sjUrtOFPtLeFQHLES9AdDFrq1E6M13MaxVCTNAXNFThIylLcor40zxtgDAPKuVwDMrOKw+SBTbtR2MND7sZwC7Qvm4wqHa4T/uIrhb+7n0EgbQdTijoyg+agWXT8llDsAFWr/B8qP1K7bT0pvtVwHhW6+t2C/m8svvZlawi2CKe37nhFtapkDnILRqBQA+v04AjMyn79EIkXO/DnzyCBwVweX4wxs9B4rRZgyPVFqykgDd+5JSpBU5r0vHyHz+jsc3ub0KABsZMCyQgeExKyFPVIz3lmcM6OfPAGCADYPE67Jfs6h7G0o+xvi7oyK4cLZfOgpsXwC2Lq9MwuuVERonKn4nSJrcXnQKcM7dwMMXgYcsVxkSebJgzOWPqdB1ad2f3gpsnwK2LXWeR9m3danUIV1lBSCPArBwtp+7DThuBti6UDWDmWA/DvXk8LRptfPtNUlihYZTOPCi04GH3wFsnwGOW6iAs5n3GeJJ+KLoE+9VDClQ8R6vOQHYegDYwuY3S6H/iJ8jb11ck0q9Qhoc9QMWgPBZJwFbpoFN88DGRWBiqQIgWyJY3lPozaGJ1KTEPh36zpTkJrcXPRE44S7g+Cng2DlgyyKwaclfFoIwvCwx9Zn3Q1DmIPx/2/sSaMuusszvjfXq1ZRUElJkKsBEGQyYhJCBSkUqAW1tsBdpuxEVaBzowXZqe1g90G2LotjQdmMjKqtBxQERdAWUAkUlZNBGkQRNyIAEMAkxpFKpqjfUG3t9//m/c/+737njPq9uVeqcte66b7jnnn32/s6///3v//++Tz0dmD0KzC4DM6vAFpd/0L3Gh6yTDgnvLwKzAWDGiH/ThcC2OWDrErB1pRgQisIQhAa+AED+HEEY6uNLyrRnZLSl6tSbrgLOeBQ44yiw8ziwfaV4UGbdegmA5QMTLFlqsfn7XecDW+eAmePAltXiXnkuZSBkRcm4UGXtU2uo3xsAZgz6y54JzMwDWzkgBOAqMMVBCSAUObh8QuN/CiTgcWAuyWhL1amvvBbY+VgxbW477paa7gIBqCnUrbUBiQuhAKDUot13IbBlDtiyBEyvtO5VDxvvVfxW/JkWNFrCeK8NAGsY7BsvKQC4hQCkJNaKy2LRIsg6SJ3IQSe1onKKC2CsOYMeN+0Dtj0ObDsGbFsEZmWp5S74g2Ir2uA22BScAJGA+dJFwPQ8ML0ETAUAkgDTPq9zdK/+sMWpPF19NxYwA4g3PtsHxAE4SQC6FdSgmGWRRIJLZJll8EGKjHiX1jwaN10HzD4BbD0GzC4WrsKMW2pNobZoCu6CLCDfCTqzgg6sr+wFphaAKQfgZHKvpRSYg7HN5XCL2AbAZwPrZGaj6ippXhgn0kqmU1woxnHedg5AATuWHig2FE1uVRwoxoX+Wcbg89S3AqCKPONcCi8oPtVP+9++G3j+oSK2xRBFDElUxbTS+3nvc4FpDsjxllXQoJg8FgdCQoGJJTTicLcQ6vPL6wbg9cDM4cJv27oAzFA5ky9/UOSvmg8oP86n0dICBn25JwjARWDSAUgBHN6vfdbv10AbARh8X91vDM2ss+NvAECKPVLCsHoyUgRqrlbnRwB933OBc+4DXrIC0IEmiLnE75di8HsyAcjzWUVGUi6uICMpVwwJVMXdeOk3XAxc+Hng+vV2esAYw+sWoP31r3eLcLwQBeQUrEHh4Jo2h4vDmJPuAyMLGAeEn7uqbgB+I7DlSWBGCwe31Gb9aL20kGDb/EGRxY6WTz8f2wtM8l4pgL1SgM8esHCvsuylME4nn9cfQLtldg6TZ0kUKorAfij23vAPCmqp3fcCl60XFINid1PlZrf41/dnApB6wSQjutUfIDJR8CGIQOwWEH7DywpKrWc8CFzqRLHkVYrB2jS2FQH5vkuBycXCAlIUUAAkCM2iRBA6+ARCe7DjYmQduLYTleiQ/XTTS4DpI+6nLhZW2nzVCEBaMLd+soIGqjD1ampdugiYWCpeBKA9bBJC9ActAk8LES26SqsftInLZ44dQif4Igdhym5WLrPDyuYH/7HTCNwDnPko8LXrBccjQaioe6BiKad3+QY/MGTH6rS3OBvCnQDuAIyqhiDkQ9RX+29yE3on8IwjxQPI8zkTiApGU3oVkD/4fGDieAuAdMw5MFQjEgg1DYsUku+a3uI0TGBfV7PotwHwaOEmbHEATvuDIutni6UAQoFRIFRYhfe/dhEw7tbe9Of0Si1g8HkrwRcevDajz07gIJ7n05rYyWIpb4ya/7vv8PRdFpj/LXDmkQLAnA4jCCOlTBRN/rFMAJKgkkVHpGUjySSBSFeg7/azqk8EgbSEq8UDRACLKDXSyaQ7Br//DcA4LSCtwnKhTEkQcmAIQhtM+Uaajl0uS9NatITXWzpzfcdNB4DpY+6nBgDaCtanYLN6fCj4u1ay0QIqtML/EYC61wSA9tAJeP6eWsAoDysFpg1eB0HIQRCIIkVeCqQf/05P3WCB+UPA+CPAzvmCaFWDKEuYcl1yMN+Y2dckqGTeHPEvvWDSNhOAfbefX0A6rS8CUw8X9066bFIfdqMHJID++DJgLACQumyc3gyAEYRRKFCLD1eu5ODLF6QvXedx0w3A1BwwxdAJLTXjd8seQnGrZ9bPFxLyA7WIKON63tYtCQBN/sv9QPm6BkLp0vl9t/m6ietR6fbyBA4gnXtORwRRpNnTtPpW6gWLH83lKqcOFTEnDiKtoHwy8RNFhrefyeztbnrBfbWfgttsP+kIyO32ELD1cHHvInrlvWs6TsnB7qAUlg/suFtAWkE55zYQ0QpqcALoNCXTEt7A3KoaDwGQfqoAOEUBa7fUbKctltwCajVbxvSiyvoasM0BaBKwwdKb9fN7NfcqBWGiSWykWXER0umeacUEonQgCKRfIgDFjya5yq8Wfsfs8dYgiuMxgpAg/vnMzu6mF0z6Zj5APdvPQec0TEosnvQosGOhaLuIYvnwEYSithE52F1XFAA0p5yigD4otCqygFKnpHUpLYP0OcKURYv6Mj4MNR433QhM0gL6QongawOg+6rl9CswKoSkEIxPyTsuAPigCYBmAXVfYcVf+n0SRYw6dP1YwNgHsgSajiJP429RrpWOM6cxDiJB6NINM4w7LbUGMQUwB/M9mZ3dSy+YVG0EoBiDBST5ddZ+PkCsAiIlQZDa3LVatJ0WXG2PbL98AB+4omB3oP/HgTUhmGgBfRqWf2TTrUSjExDSP/qWzQDgfAFAWyzR8rkFtDAKX75jo6nUguZxZ8NByHbvvqBQ36T1swcsBaBAGGRg40Ir+rt9WUDhQ5ZAU7Es2e9LLzglqHRxNkbeuW+oQRRls5jaMjnK0a9ecNf2R4LAwO829kQB3LTtEYQPUwzQAWgW0AGo8AQH0ljp/V17pm0KRcEifGuNOnocO1rACQbKPXhs8TtNwVr5uh+n6Zf3wDgu29g2FdMtOc8B6PdpFj08ZFrplw+ZA5FTvAQQ0/BT36FPDkRqBT9Jag7xYlQItY0f88j78sZzCcKPZlrAQfSCK9uvB4h577SCotUiEJ8opq8IQFl/PUBPEoBLxbRE62LSqG4dFB8r5bHcOtiOQSqT5T7RKzYDgJx+BUCCTxZQCwhaQc9oKcEnEBKknj5FsJ1LAPo9xoWWPWDy+6IIoqbeaO0VA+zHB0zxIQDKkn1GgtXiRxMIAx0Vn0Db+lkuFjLRCt5WEwD71Qvu2H5OfekD5FaciQay/GIbFgBXriwAyGmJADR1ck3DwTE3TQ4B0LetzBJErTYAr2BBSI3HTS8tLKBZPo/fWQDZp197Z3scjGb5BDp/L3+njMweB6B83Gj9wj3atOsPWin9WgXCFlVO/3ctf4iD8XkBkH5USlAZlNPZAQqARr5vxu1yjmH0givbX0UQKI63o0Wun/xHuR8E4VnPK5JQLd4VNttTBvK2uoiKOUf/f+GjwMNBh0NMV6J0c0NpcRv7mrYv3kh8/uHxYp+bVpwLp3R7sts2YzouSq3KGa+q7+x7Co4nazAerRKsVlV1QitF59dyyFZaYY0HMu9mWL3gtvZXMbymBIFMZ1ov2h0B+LTLisxgW+Eq5uU92iZ72ud9vvR+4JFp4NjkRh2ONi0OB1/UBCkvEYRhfuNs4OmhhiPKnFQlx6aAjMnSXJUAACAASURBVPjmz1w41nnwO4cCIBvBwZgTAOUHRq3gyDExD4zRGVYEnpm5LqmQc0M5esFt7acFl0SlHiBxuTkYxxdaihUC4QVXFu5FCUD5QtJl85sjGA0ziQxqeu/fem+hw0F2fLLQGxFlYMRvo7v1WmIVtpt1DFkXvOR7LwJ2HSkyoZmEypoVVe8p7b6qEMnidGG/Vl/L2aPOIwuA1pAIQE3DAmFa4j9f7CPaFpCHKujr5xzZesGdHqAqKz5X+FLRAl58le+jui+kTBALMcgZ73CDBkpN2/7+bfcWOhwUyCEAjQTcAVhKdjkPc2RajewKyu/n1//qJcA2uhBMRGXQOcn9U6JIOjXHQqSYOsVoQp1HNgAvz8yny80H5PVz9H6RqVd849WtXQ/zA0Ow2ayGLJ474L0G79vvbulwkJi8BGCg4S01SKqofoNvSIC+5zkhFUupV8rUTpJN06KpaBkFQm5M1HlkA3AyM5/u9Zl38zrk6f0iU6/4hmscgK5ISUtCTowyDqb7UxwsqFJW3fo/vbuIBJEZ1YRgyHwQKNi0KEl1OKTCZJdxtPDn//v8ooaDaVgqFyiTD2IKfcjZS4Fo+7g+HXOPv84jG4DIzKfLzQf8KVfI/FNKrQ6h94tfz+vOA9cGAAbrpylY2SDlVTTt+uCnV3/V3a7DQQAysJAwobZJgUXi78Qayhd812WeiOAZzEyUiAkHMeu5BF5FwZQAWLPwknkLQy9CrPMy8+lIHZFzvN3T+YbV+8X7c64OHHix74V6zIxB+RJ0wQ+UU992tYoFy3fcXcTDxQkoPsCUhFIczKVCegSg5B8A/PILN9ZwxBSxtiKiUAOi7JW0dLTustF8AGbm0/1o3vjjnSGdj+lYlGwdRO8XN+c1wABIoHk6k61yuSCJITq3jDY9Vx0BqK++uwAfX6JkI/hME0SC1EGguiQ+isqcQRLrF6/0jO2w+6FMnZhyZYsQ1W50qOHgPX1NXndtODsfgMwHzMin+0+ZN0S9YOllMzWfLwKQSS396P3iY3kNOLDPM1y065H4gOW3p4uTDkB8zWdb7FgbdDhEgJkCUDRvogTmd/vPv3BVAUBuvylNzAAYi4hisVQnEHoIqWblrxqm4Mx8ujfljT+YjsWBYgIOc0oJPsq1slCpH71fKybJOEoAuuVTRSCnYlmU6P/Z4iSJEcbLv+Yu9/1EAh7JKEXDKxq4ChUiKymRbwjgHdcUWTARgLYXHSr2LOU+BV7MVwzxwOfkOWybYAGZD5iRT0edjpxD6VhcOQ6j94tP51wdOHBdMeXa9OqWRcmWXA1XLUIUH6zyCwlAs3z+YBkfs1u+VIejJEF3ckrjI9T0y/aMA2+/tgAg08VURKT8vbKMUgAMIGzzAcOi5HknHQAz8+l+MW/829KxhtH7tTz+jIMAJPCYMULAWd6fvi+EY9ouoZBM/Kx/4LUBgFLgNC5o16FrE8JJVJgkiFhaQQBv3+dVbMrWVsC8UxFRkjjaVsW2DtRdOJ/vAyohVYK7A+bTvTdj8HlqTMcaRu/XxHkzjgNkIOWuDr8jnYYDKDutgpUhra0uAlAyCCUAK8BXcjBXgLCk/h0D/hcByDxFAdAzoFUqUBYRJTUcMWdPP7ONL6i5bLQeALJRQ+bT/W7G4AuAOXq/lsGdcRgAY+glLkYclJVTsa6ptCX3uQjAKINQstFrAZKIwWxQIhIJuovB/Nx+r2LzFCwlj8Y0evl/MYk0kieVtcvrwGUnHQCVjjVkPl3mItQsIPuElx9G79dOzDgMgGkAWlNyBJn8xKprBRC+zgEo4LWRgcdVcOCjjlNvmx84DrzNAahaFZWLygKWxUNibIhTcPD9BMLLa65bzreAMSGVoXvJ/Cgh1WUfO+XTZS5CDYDs9GH1fnOrIDcAkABTTDCCLYK0Cwi/586WcKJUiEpC8CCBYDsiiSplqUIUmOjf+o2tIiKVUJbgU5uSWl4DWwX4+PcXnrQATBNS+8yny1yEopdcay+930y5YhgAg+9n2OoUeI5TdQer+32fdhmGoOBZanBo+g1yEKU4dYgFSvqB//vZBIBt9RshkTbW8ZZZ2hUgvDL3iU3uux4LSBM0ZD7dPRnTH08VAIfV+2XAOucQAMuVcKfFSD/+IAABsEoGwYAoHZIKEEYxRIHwLS8pUuhjFVs6/ZZhIVWyxVKBBIRXnbQATBNS+8ynI4tBzkEACv+chlUVIKE/5cRGsWmlKfIzudc3APLQSlg3E2OCyVRc1kpU3DgBmKoQsWtlBcswjPu+nfTYtBL+GQdgOf16GCZW6pXlBCqWSgqJypoOAFfXXDifbwFJLvi5HAjlnUsiIe6AjOp4iQNQHRlT2PlgJCUbbc2s+v/hFwFb/q7gm6HlYpBbmTV2sscQyy/qFBj2v0/cAdz/HGD7NDA1AUyOOU+1CwWOewNjKj6/O03F1/WuugW4/XJgfBoYmwDGdH7IxB5kLPIB+I8AfNwZgga5ck2fJbEm8V9zNWPfrasbgMuPAcuseJ8Exsb9FdBhA+7gaQNKB6TfcgCYug+YJT+g89aoBDMmIMScP12uTKj13uDv8zsKig/uJ1uQOsnojm3qB5P5ACRBH3OhPuzzRN9DV88HqQLEWPJnvTy5nm/t/1s4BcuSpRZtGAu4fi+wtBVYEyccrYwn6hF8/FkJp9bKxAKVFsn/d8urgbHPA9NPOEOWl4+2cfoFHhfVrJTZPKHSj5daOtup6JyCpPx8rHWRVQ7WOlrYCMx8AHIzlxkALPD9c0VB+x/A3E/+E2fUYHXdF7KTGwdvTd0AHP9r4PgWYG0KWBdfsBdsMPfPrKKsoL9XAVLAvO2fFylCE4cKliyrDVZNcGS1CqEYhWFiAZV+XntaURdTLmpCEbpchTYLqi6NrkMCzLzt5Xc4HwyJmmkJ+Z73jQOh4NWeDUZiK1K08f0EXt7CMHVawIk7gaVpYJUA9LI1Ao8bzKX1cytoFtFfpdCIWz7rgzHgth8u0oPGDwETc8CEMySUzFaikgtlpW1Ta8JqNba7lVljSRgW+Q6ZP/57WQvj6fydBjXfAjKbgEvMLwWCvhNoipgNpnQshlS4IGFWzIk6ylWwAz93ETLxGWB5ClidLABoIOS7pmGfG+33YAG5mND0G8F4678vkiPJczNOAC4UyQm2N8w94kirFlfIAl7i402d6dbPWWAtrsjOFiuCvAJZOQE0pHTFsckHYDeCvhNgipQNxoAz8/8IPr5nbvH2jd+6AThJAE4AqwTdZKEBLDoDgU4+YVkPHIBoPwareOt/BkDexsMFAFnbzNJYm0IDnVwbt4uyur1kwL7Tp+iZM/08WT9Rc7DHUmuYTr/x+6o4ovvu9fjBbgR9JyA+omwwxvZI5ULg6ZW7y9FPf9QNwKm/CgCcKABovh8ByVy/UCtJq2f+X1yYJPGU27lIZLbuEWDsWBHesZeDz4iURLUWa1TE47LqK12fZmd3OXidFctqm92KatVs1jAEsNv6sdymaa2g8+xUL4I+Pn2beCgbLGWHI/h8G3oTr45iK86POlbBU9yKI/AcfLR+ouQwH9BfmmbLlTHboOnZ/T9+5vaf8FUaAThXsFOQ45mUcgZCWTAxe0UQ+urYMO1/37GtxQmoLCBtRSp30LrDp2SFdzYMgk/R+VNwvwR9mwQDsaspGSfJgYDYNTbp8psCQFJxEIBkQjDrxt8dXCUIY+COH5MVFPi8SOn2n/QYLZ9Gp0cxANIP5IvAkzVzxivRydnKNzBa8fddM84b6AFyAriMF2pajk9kYIeoClXmA3AQgr5NQEHMBqMVFMNaIOayNRL/vhlH3RZwmhbQQUcAasrVVGz4EtjCu/3dfb/ID3PbT7uKAZ/MhcIC0vqRTo4W0IBIEAmEtFwCYqjW03bcmdwBYeoWgetUbrR8snrloiR2drpACf+rD4D9EvTVjIJu7HBV+781X752Czj9lwUZkTEgcPoNPp5Nv4oBRhCG6dd+1DkMz1JIhR1BAHJ7zwqO3fIRRM5tmDK5CoQKsSgOeBYBKFZULTqcB9r6Ni5KYmd3WKDUA0BlhNLM8EbT1QBXBU72aI5ZjUcVOxz7WLkQ8d37vsart/uA6RcPsxNSAtAXHDYNC1AEpf9s01kKwuBwGU7HgVt/1jtD1e60fgQigSe/j5bQp+KYpGB+H62jT7P8/ZypBIC8Dhcx8eY9wF015abhmnoAyJ5WSrKeNgKO9SHxnT/LSasJBim5lRjWBEIVeROInKL1qunybRawLgASdEy74qjaNNzJCgqEEYzBGvK0297mAFSHEIB6ebKDgc8J1ksmV8t29f1en6L5v6cxIK5iK6Xne/5jCTiFcTqVn/r/tWDPWwXnEPTVgIKUHU7ljASawKefIwDpMdRxRB+wFgD+RREDJABpwSzz2c0LfxczVjkVKwaYgtBBezu3SvX08d39P5uO3QKahXMQciourZRAGKZWar/YZ1xXRPe8wQr2AUK7TvbOVTZBXx4MBECRnConUBSFEXT6mf/TK+/qmzAF/0UBOPqBZYF52HrTFCw2LH5G8UCzJEko5nZqmRnPh/uCXmpnVpDTsIPPwKApOaSA2QLDLSHf97iPx0tpISLfz7bl4iFfsUsnj+HZWEeOYDCDnDmCvZkEgedcCjxGseIhBYt3vx049HwMLRh8gA9gh2MoH9ABqKJzxf0McO7XlSAU4HzhYYFq+5D7hwBu/98OQLlIBCKnW39SlXNY+nqeiq2dkQg+gnGPb9/ZpT0lq6MV5D96gLCwgDmCwbdnCvZmCgY/dxy47xxg5SWuUjigYPHFbwA+fyGwfr2rXrMvPB+vp3L3GHCgi9JOHQCkRVPppeUBigXLFymyejYTB4YsgfA20ofRAlYB0FfAlvQqP0/TsX5PLOB5DNu471cmIwiBaRww/F01J+mz2pqChxUMZvpJlmBv3iTocsW4dzewfhkGFix+2febXDAeJO/YEILBB7pU1g8LQFo98QASVGYNQ6DZfEG3fnEqrgLhbf/HV15anbkFNCvohWSl9XPQ2XTM/2s3I4DwPIZwBEDfgitH0Ek6N6x+u/iD7T4g/YdBBYPpWHEaHlqwNw+AQa4Yj54JrJO+aQDB4pt+oCAyYvOPEIQDCgYfeF/9U3AbAMX7ItAlVtAspKZdz5SOlvA2pstxjES3wJ+92NgAGK2gwi78QoVfEhBeQACqNNP1RdoA18kKdgDhxkUI/zKIYDCnqyzB3jwAJnLFOEIW7QEEi1/1Y21ywVglCAcQDD5/Efj7M4CVrZ5AKlkhxeQUaxBI4nvFzxf8IfCVC4HV7cC6ZEX5nen3VX1vAGLZq8ysrvHY+QBwbGfI2E6JpLvdX+ksthpUvQrmX/sVDGZVUJZgb17vJHLFeGQcmCdVb5+Cxd/5xjZ6QzzMLOQBBIOfTV2Ps4HFHQ7CLQUQmUrV0rgKJMsCjsxGAqTn/hzw0EXA4tnAyg5gbTYBorKkUyLnkB9YVhTxu+kT13iccwtwdBewPAus+b2ar9xJAafqfgMQO4dh+J9+BHe5gqZZZzYok1JJUcpaR6bp93P+W/N6p0KuGIemgEWKgPQhWPxdP7NBLhiHKYHUp2DwpZ8rLOD8tmJQVplOLxAqmbRKC6EDYC7/CeCRPcCx3cDSrsISrs04CPm9ArZk55UvKAspYLqPaPdR4/H0g8DRHcDyVr/X6VabLHk2PhjpPVZY7d5xwF6CwS9y/4LbbVyQsEKIufGiKe0p2JvXOx3kinF0GjhOQY+oNRtljji9TQPf/fOV9IZY4Gq4D8Hgy/4W+Oo2YG5bUUy04vUcLCqSJVRWszJbNgxSmMau+q/Ao2cBR88EjtOqbgNWWaTkIFz3YiWrF4nAjtN0nBZrJnU+/8PA3CxwfMYB6LUra3oglL0tps6wlVha5rLiqd9AdDfB4Je6U0s/0BXTDYh80Sr2FOzNA2AXuWIszABL1JaKWq1R+nwGeM17OsoFY5XTVw/B4Cv+Djg0C8xvLYqJCECzgsxmZlq9T8e0XGUyaUizavPtxoFr/zvw2BnA0Z3A8e2FVV3x6c4sqwObckeyhiXAowUSADhD1XhceDMwx37lvU4XxVN2n3rJIocygkr/Vbs7fe+EdBLcfaXXQ3IPWIrpBB6XlnwpR76jYG9e7/SQKzarxM7qJFj8mg8UarMV9IZ4gvNDD8HgKx8HDs8A8zMFAFnPYQPDl0Co2g4fpDZLqKCxT0/7fhJ4fCdwbFvhRiwRgJruCOwUgCpeCvUjZmEFxhfk9W969kW/B8xvKQqnVgg+B6CB0MsI7P70AHgmd2n1NQ0rv7FvALIlVYK73MnQCDLThSGZoDpuP7uCeuX5n8zroB5yxThGnQ0CgyBMxY63Aq/5aBHG6EBviDlOLV0Eg1+0AByZLgbl+HRxnZXJoqqttA4ODovlJZVuSjTQFtq+NwNPbHMAzramdVpVs6wEoPtdNg37wJfvsYiJP9NFqvHY+7vAwjSwxAeNxVO8T6aNVRRRlT6hHrJ0Ovaw0WDJCKng7g86APvNB9wg2JvXO33IFWOBgn8EIf2nRLD4tbe1+AU7yAWbZeskGHwVdd2mgAUCcNKnJgLQrZ/V9/Jnn5JUYmnAE3hCmv3+t8AWQfSzyPK/POOgJgDdsgqA5nfJAvLdLV+bz0kK4RqPZ3wQWJxyAPqDVhZQyQr7gyaXI9axWCFVAGLvRUhV46PgLnUWBs0HbBPszeudPuWKsTRZAJDTo8l8ui/42juL5veQC7ZpsEow+OrZQlqVVuH4FLA8WVyDAOTAmHUQCAWQkOlsQAwDt/9/AE8SgPQpNa07+AhAA6HLXbb5Xr4IaAMfv/eGvP5NzyYA7UGjBWTWjh40v9fSyscHLtaxhJWxFVsNNAXH1khw983+DYPmA5aCvXkdNIBccemfceooAfhAAcA+6A2xLuAGucxrzgKOMexDfV9OwbS2BB/BEoqLSrBoYGgJ3E8qLcIEsP/ngCPuUy7S13L3wb6PU56/m/Xj4Ps0TKCXQA6AXuNeZY3HMz5QANAeND1kwcKXlj6wOZQ+b7R+Pi0PD0DeFAfk590CKg8qncfoFzIRVWVqfFfBhgn25vXOAHLFWCDbvPstBsJZ4LUPt+jdesgFg+qVptWq11bg2gtgfuLiRAAgQeg+oEmsOujsXb5SsAoCIN/3vx04OlNM6Yv0tdx1MKvK7/TFjVmeCD4HQQQhf159eV7/pmc/kwCcKABoeYvR0oept7SEoZQ0Tr1lPuPQFlAtO0nyAcWhpzw/FSjFzGjLx+RGvxzoSeC1hwsA9klvaFN5FAy+9mJgnhaQ0qqagglADo4c9AhCDpJPl5ZommQ8738HcGw6AJBW1VecZv0cePwOY0/wl1lAD/WUCx0mMlDLr8bjmb+Dwp3x4nkDYbD0thIO5aNtfmDi/xGEeRawxhs7Vb/q2huABQJwAlhyy2cC0xoggjAAUCWWAkksOiIY978TmOOqeqqwqAx3WGhHK06n7TDwOcAV/iipPAKjwgrZm2o8nkUA0gKmAHTrp+o9MTrEYvq44o9pZIOtgmu8mafCV72YAKT/RwAy5OPOuVlAAk9Oule6xQRTWUKlWtkU/IvAHAHti5oIwDK841ZPFtCmdr0U8PaC9hVultd4CIC8P2Ztt/m5/qC11TJXlJDGGpfGAmYODgFoCxACkLpuWh3KCgqE8gNVZK4KtxgjJAB/2X1Krao1rfN7CWZf3LSBT4uAEIyWBVpipL7GgwA0AW25GbGENBTRx3rm1M2w39mmrFVwjTd1Kn+VAZALEE5LtIDyMWUBvbLNLGHgd5H/V07BDp7r3uU+Jadgn3ptxekA5MBri0/Wp4wzBjDbCnkMWMqVpE8GJwLQqvfc0pqbkVj5aNk7gbCxgJno30cAjntowtXNaZ1suvSKNhsYTcVKmw9F5xGE+94dfEoP+JYhD/8OC8eIPUsUHokVVKB78XszbzAF4Pvd//PCKVGIpOAr78mn4DZOm8YC1jco+w6EFTDDPJqeCEBZBa5GffVbhmQ8DtZW5TYOvPhXip0GTuu22lTMLSw+aAVl9QhEWjurI/aQiLJkTMLsX9R3r/ymZ73fp1+37OU9hunXSkdl7T3QrhKCtlCM59k2i5CMMSIAGdqxEIwrmptzTsCEut5yilKoJLAcxCq3fe8tLCDBFwO+tKjyuxSCMdYEXoeDrHcHvu0tTwLzmwHA4N/Gh6zNCqqeOSxC2lb8tQSiMwbuqXIqAcjFh2JjBKGJyShQG6ygVbfJegULWBYcMR3rvb6oCRaQwFPgl1M5rR7/JtBZOIZWx/0+s4QeY5z/1/X2tFnAxPpFELaVkdLN8MWGVr4pCBsfMHN8bmTKfCjZ0Ncp456/x58zLzfw6Qf3ABd8pUgEYmqk5bGyek06IQl1bkXScnlN/u8L24Gdx1qVq91KQvrpgwaAAw9p+wnXPw1YjyWMGtDo2ASOFGMU7SIEUzdYD34vMPmXwLbHgdkFYAtlGiim6DpxJtvq9LtlVr/aWKEB8pUXAOOPAFPzwBTZ9r04vdQ9Ts4pAZ3cd+yHxgfMAOH+vcA69/9Uxijmz/AerYpdar1lNSMYzV+vWY/34I8DY58Gph8Bpo8A04vAFEFIknIHohGVR62QhFRSYjQE6qFri2z3iaPAhHNNlxKwArI0Q1IAxwfReacbC5gBPp66/5ICgLKCtqnsrKKlrFZUFPKOr7osMTtdsxzqQRZ93Q1MPARMPllohUxRqkEK6gShOP0S+dY2hlRv99y+ovRi7IiTnTvLqmg6xDPYpqAUgRgsoR7MxgJmgHD/c4E1FXu7FRRbvEgd7evXWlbPpp9EgUjiJpwe6zwOMlvpAWCMVusJYPIYMOlSDZRpoGiNxKzbdIQlXONMWJbGtw4svdgz3El47nzTRvPrrKptAJT6ZrzfintvAJgx4vsvdQvIXK5VYF3sUZxmJUvgA1FOvwF8spKyBtM1y6EepI4LqVMedbEaTp0EIKdPKh5FqYYqSxgo2jgFr13j6XXHnOiSZOeBVSvyC8qC2r05FVvVw9cAMAOA178AWPMp2LJaaekiCPXExwHw660n1oB/niGQazwOkkSepbJ/72I1x4CJ+cJ6lYI1riccrVicUuVSmIW82pkwnHHVOKbFsOozQGkFkwewnBES37ABYMaAX39ZAUCCb82nIlo+40p2gNnvsoKunxH1xGwA/LOzdQOQJPIuHzV2GBg7Cow7AI0l33XfjOsv6oVodes6ISbBsAZMX+kJxU56KY7pkmFVhOciuvTzSt05v0+ryuT/9gDrZNe4wPMsI7VJP3GcP7gUOOdvgL1rRYJ0ZI5IV3hV4/wrGYPPU3/AiRhYusy2K7mU999P+z90ObD7LuBZK0Xdkeq9NSX2+o4HLwfWlopFCC0fgciBMtAFC8CGrYXVoVjnU2G7rTXrzh4kfRzLY1kyGwBoeiGcPiXb5eAzdXWnazPCSScb4j3xfmav8Cx2p50lAMW0VXINitCogl2r9H2dcctWwQxQsn6ZTBbMNtcgdKIbiZj51VcBk38CXPxoQcfCUg8pjcYgZScw/momACnXyr4leBhs5QaBTHpf7X8dMPYJYO8XgAv9e8QJlAZZq8D4xSuANYKPJQn0AR2AHKy1MACKe9nfFI6IEqduEWoHIJ9wlsVKLekoMCa9EAegSTYQeM4TXco2SEMkAHEbBZoj4bbYtdyCVrFqGXgTSxgXYTZeHLi9AMjEQRCVUXP/n4KUaaT8vVTi+Rtg7GPAuYcAWlMCgUVkQfJ2Q12yBvPXMwHImhDWwf81imsTiLSEvHZkr+jY/p9CQRD4p8DOBwteItai05qn31FFdfLlFxYWgCDUIkRkj/TxbCEi/89jfPZ3X2VqYSJQbmUNQY3HQT7hbv2sLoerVwKQHNEEoCsm8R4MhPRjXUGzVEIKIoY7yaEYuY4dgGb5RXruoSgtSCLLarkICQ9f6QNykGjFdjsIBaI4kGlt8W+Rg5g0HJ8qAp47nihAzFpuWtPIMBZJlASILvR6fQ0DCVbJCkJOJCqnk4pGpb99tZ8MopyiKDX7WWDiwYKXiEQOehCrgKh+eJQ+EQHo1Lby/zRlyf8TIbf9XS5ftIb8I92YugH4ay2pLusorl7dAoonWtMwQSTdOFuQSLTGHyIC8kxSIQuA4hwU2WUAoO4/grBcDbsfWElSzg+JCoYDoEGM1ixSkHzgF/wG7y8sIa3J7JPAGWuFJSQIaU01iJHUiYP4e33BrPOHmG/JMaOfTZVYRhwGav87vWKPJ9/rSH4IOGO5sITqg/ggxXs4TOaBAECbeoOsgfl+DrQShFqcEIhyyt0MbMusEkx76iAZXKM8BvXiZAGlF+KaIbaadYpem4aDgpJZQz6YJABV5VcHAJZ0v4FxX6KG5UpYs0KnqjhRuagEVgPglYAl9ciHf8mdUrJh0Qx9vkDBzBywfbkYQIGwahA/kglATsHsDzKA0BATiPyZ4NEDwIeoa/uFYKKXL2f24nQoIgd9R3yQCMTFqwIAfdBWI7+yB5ZLECYLETd85YJl+2YAUNosLIel/xYlu4Jsl6bhNhD6it4WJCvA2Zc4Gxo73RcgJeOqFmGR6rcChLYACyGojmEYdj59KnZ+tIQRhH9IvWA2hiREjDeRI9Cly7fMF3EtWRFawhQIf5IJwE56wdTIYdt7tp9ys1K8JnoJvod9Wn682PNkP4hUy1ndWgstAtBDMLYN5/6PAc5DGNoF4SrZfN+4+IhT8jqwg2Cp8ThIJ5vfSWBXAVCrWN9SMxDK+skaOvhoAc8me654pmUB3f0wyt+E8FyRAGmPlOEoiSD2qgvmAKoOm52fAuiTDHSyIRxx+lI0QxxADubfF5vffMmSajrWlP7nmZ3dSy+4r/ZzAUEHnQ8R70HsXlK+PgJsW68G4XYGZj0EY2EYATCAT6tAhmE0DXcC4faapcwMgAIfLb0kuzT9Qmw5uwAAIABJREFUSi+EfeALkSrpBovbrQDnkm8wAo8/E3i+CCsZ98NCpAp8cUekZyBavI4ET/TnaAk/RQCyAXy6uNSPA0i+wMeB6ePA5HFgZq2wpNGK3FUDAHmv3fSCe7afX8CB4UNEEOolVi/3obastNwJ9cO5BOBKEQMsAcifHWzRAigWWAlCn5K2bQYAOe1KMjTIR2kRUhKVS7IrLia0v+3xwHMZMCbYNP0KfG79zAqK5DxOvyEuWu6VD5KSHy2YAEQAfpaRdl5UkuUctIpBnCIIl4psD03FtIIP1ADAlBuJM47EqqUX3LX9kSBQcuuyftK78xUkHyQ+RLqHZ3Fv1KcgLj5kAQ1s0Qo6IA1nHhNLQzA8ZxvBXuNx8DcS5UYpNnoYxsCnUIqvZo0F3wPTMa7Hv53HOJVbS/l+5bumX7d+5WLE44hxIRJB2NMCqj9ixwuE90svWCaIA6bAp959EKeWChAyA0PTOV2unGMQveCO7bfqHbcS4rJR7Ewqnw5AWhLuImg2uFQAXAVs8RGmntW4+g2hB3P79L/EJ9zGvqrxOPibiVihAOgrWQOf/EBfBcsPNBBqW9Hv6zzGqFzmoXz3B9AePgXiq6bgiv4YOB9QHS8AfpkAFMMjrWAcQA0iO9XJiQyAnos2vV7ESHOOQfWCO7Zf7F40mZFQScRKAYBaSU6vAVcTgN7xXHiUFpDTMK2dFh56912BTiDcvpkATIXzCL4g3WXTZ4jpGfjoF/oihL+fx+0yWUABLwIwtYKKIabgCzHQvi2ggBKn0McEQDaKT5cGkIOo6SuyYzEfjQB0EM5nZgAPoxe8of3sgSqCQM3jkdFLvpRvR13+7UVRuhUFSavNO6otwp88ZZ3+t4M6HLtch6OT9AG/q9cmtf//gV1JDYcnQ2zY6/YakfSrU+Pg1M45NqPt3IEtoM7WFHokyrWKkooglCMWLYjiUXMtK3g8Uzd1WL3gDe3vRRCoUEYCwGtYFxxqgA2E/jI20F5hhmQod98BHNnlxOTig1aGiDanO21yV4DygWuB8YeB6fnC9WEtiKVVKeE0ZGiXWczeJoWMIig5a9V5DA1ANoKDeDylZ9NSXxyAsiKawrQqmCv2HVf5e8aRoxfc1n7xs+khItAUvojvyWryxVcWJZksVSyZoQRA3dcAoHzax4Gj2wtu6FVKM7gMgti02jbV476oUJJs1j/AbA1mQ3Pm8eTRsoZDtR+xZKCiEKmMXTIeXHPGdhYArX8FwG4DGMEnAHIK4yvT58nWC2b73cexaZgWWaEKgU1gjNbPP7PvOYGsUSBkv3hBtmRWNzxjTk9RWktvxp6POj0vARjY9sWkFel8RWxegjIF4RjwAOnZWMPBTGjqvHmszxJOBUD3xyznL2bqROvoP3N3q84jG4C7M/PpcvMBef0cvV9k6hXv+2Yno5QfGArRbaCC0mWv2YtF3ecerNDhkNZIIsXQRv5dlTtGADJSz2gEE1EJQM//026HdIEZLC8B6A0tk0g1Ja8DuzJdphS82QBEZj5dbj7gxZN5er/IZI+67pscgE7QaDOUMyC0Wb8+gXjuR4F5J6YsaXnFhBoAGEVvUhb60jISgCQnoh/OLBgvIrL8v7DdFkEYM5dtNg97tvz5zJqzdfIBmJlPl5sP+DJP5xtW7xffnzeh7H+Z+3+RpkyWT1YxuURJYVtx6T0fCTocouQV85VkHRIGegEuEv/YKpkA/JceVmL8kv6t5/9pu62tfiPWcFQVEa0DZ9WcLJEPwMx8uvfnjT9IgZyj94t/ldeA/S9tMaGa9SNdmsIxbvVscVJ1GScoMt4UPwhAsmMZ0aXzQBsvdGRBjQz0FUpEJRAJQOq4KAnBdz+sfiPJ3bOYn8fsykyVWMfiN3BOzckS+QDMzKe7OW/88aqQzsfE5kH1fvGjeQ0wADodmVGwOeiMsUqHrGOnS4UFy9P/wAEojkEnI+IqOIJQNLgpCXhcmLAtD/D+kgQE235L93tj+YBqgTX9BiCeW/NedT4AmQ+YkU/3sbzxBymQuZhm8g1T+QbV+wWFdjKO/Te2mEFNlCb6gPF708VJ1TXHgKd91GnZpDfi1k/gM2vqU3DUnCuBmNQe3P9vw6pe229KOvB0K1k+ZS+rnrfM2AlA3JMZtah/EZKZT3drxuDz1O/yxAwu9JgJxr3lQfR+8aa8Buy/wdWQZAVl+ZzCrG3q9c/YrkmHy3IRYryAAqAkEBIlopJxNNUbER+fA/H+/+AAdP9PmS9dazicJybm7mlB8nR2dI1HvgVkOlZGPt2nM29GCamcGZjAwlQ+vvrV+8X/zGsAAUiLVPp/wd+zaTMFWw+/kAA0GQQnpCw5mDsAMIrcRB5mC/+MAffTwgfwKY2KfmCZ6ZIkUShrxXxBX4yYaV8Hzmcn13jUA8CMfDqWYeQcSkhVOl8U6uxH7xekrsg49h8oiCENgC5TUG5vKxxT8f2aRtOtcAKQ1s8soPuOVUIwpchNlEEIOyNSIrrvv3hwnckWIZPZsnbcDyzTpvg3lU8mpZQqozyfK74aj3wAKh1LgrsD5tMxiz/nkGD1sHq/YNFOxkEAcuW7oqmXlisuQOT7VV2jwi/kTgj1RkoZhBje8Z83SCAEEJZW0C3gff8tADCt4VASaWIBK0HI9q8BF5yUAMzIp8tNx5Jg9bB6v/jdDPSRns0BWIZeUitIo9IhHmhXTvzCPQddccnZ76U1V/IvC4SBCFyg26DFNg7c++Mhhb6qiCikT7WVUmr6lYn2nRKyrdZ51GMBlZIc07GUBdMjny6XCiUmpA6j94vMZbgBMFo552pu27PXAqXTyAUQcitOQjAm9xX0N9pIwIPmSCmH5QuPqER0L4kDYgp9zOUL6fYxkbZcFceyAreAF3GlV+NRDwAz8uksnT3jiILVSmpWNlhMze+k94vMZfgGAPJeHDjpCrgM01Tdry9OzvmYAzAqLVWIwEShwzbRwwSEn+MqP6bQK5tZlWyhjCCCsC19Xv7gOnBRbgp7cu/5AOyVjqVMmA75dJZ9nHF0yohWNlhMxKnS+0XmMtwAmFq4imnYbrEqNJPc+9kfd62RKh0On8qV9hXZ9askEPgAfI56ziocUgVbzGT28lEtRMoKtg7lBHtznfZNA+CQ+XQWM8k4uglWK/NLYKzS+8U9GReXD0g/Tyvh4Ne17Yb4Zbr6g6y7/aNWcoPpjKRTsJIags5IJwkEAv6en05S6GUBfRWsUExZyVZVQCQwrgN7Wfdd41GPBczIp8ODeXfTSbBa6YYxlY8/p3q/udc3C+jTbtvqt2oadnB2m4oNgMn0W0p+hYWHWbwg9yU/0Kb9EIy+5y2hiCit4UgKyTeAkN8Valk4Le/ldlONRz4AWWBRM6fdIPfHstw/G+SE5rMnVQ/kA5AkLHS0ak7V7reXfhgACaBqDtD3e/nmc5k9kA/A80JReq+U38zGVp3ObJo/BvAOD3dtwiWar9zEHsgHIGlFubqSx7+Jja36anLLcDvvgwA+NDpDfILv+qlzuXwAXuSjrkKemlO2e3U1uWUYnL8dwB/5e2apca9LNv+vsQfyAUheX4VguB+mzIsaG9ntqxhF4Xbe3QD+n7/uHLAW9wQ1tblMRQ/UA0CaHC7plXEh+q4T0OWcfhleYTSHBK0EH/mi+fcRuKQn4I6fWpeoB4AevCz3HOOm9yb3F5mBlZBNclYCj1aRfyfrbgPCTR6AzK+vD4CyglX7jpmN7HY66d1E0ctdIrEEE4wEIMlam+Pk7YF6AMj7EwAVbU82vTerCwhAXopJN9zVI+AYrOeULLZgErY2x8nZA/kAJGWr0naUWdFpy2cT+oCWjpdjLFxE5UzYIBBpEUX5nLnlvAktb76SPVAfAOUHpiAMm96bsVtCAMaKALICMyxDq6cXfycA+b/mOLl6oF4AiqBRIEzBp7/X2Af0+fi1XIioMIlAI+AIPIGPmeROWV3j1Zuvyu2B+gHoFfZiDS2lC0LiY52WUADkQoTTMH1BFSYRdHoRfKSu5v9qrizMHYPT+vx6ARhSuDcAzzmDo5ZGHT1PAKYMwQxME2jiSo/gEwBrrq+u41ZOy++oD4BaCcsXTPiSI3ey8s4KGoG8QwCMFM+0ggQhLR0BF19SXuD/ayakz7uR0/TsMcxg3SjfqWNA0hsrga/ojaq/8WPcC+YIk4Ke4CMSuB2XVht1Oj8zIfXlU8BtU8DhmYRXWdfrdF1fgr3+S8At48CD04DVjXQSDO70PTUnaJ5uOCwsIIFHSSFy1pKPWCDsZxCpw8UVgKSPxLXM937OzxxAljzcPAbcswU4Qh4V3UN8mKoeKm/bu78IfKJQa8VD48CylHQiL3O3/qg5Rf30BKACMtJXjXKQcfBSK8Dfqc3KVCwuN2VFGRnm/yKZtq4Re5ifyQQgM2A+BeB3GHaZBo5MAIue0l7Kt3cC4xhw+5eL7TuCkJk1jBtyerbUfYG5ExjZ/pqrxE5fAOrOq5SmowVIrRp1IyT2R6+fg0bgVYG4CsyZe2UsaiOGKXr4Sfp9k8CxCYAFSKyvXeY1o1BxQux91yMtfsHPutgnnyUuUvhc0ZsgUXib+nVkq6+ZKaABIHsgVZnuwD9sVo66rrR4ImdhLGSQ8zPL/JgBQxeU1ouWkO9PTgDzbgmXxrzMkatl3keivfG5x4r4IRcz5BfkO5vEZ0kgpIfBZ8yKjlL17syy0tMNcOn9dl4Fy6dLFabj1Mpvow9Ify+I4Nlo9Xt+ZqU9VdJpqZh4QDDyxUyYOYJwHDg+DhgI/WUVZl7aSEt93+GO9Ia2iuZKOfA7lhp9JpvAVy61w2mOwO5hmCgMHC1H9O24gu6UD9jP+ZmbtLRaSsei9SL4XDPbAEh/kGQ/pSUcc0lbApFWb67lQUhpVnLBsoKqqZclFMmUtrxPcwxl3X7vOCAtYLSCcugFQmqhdssH7HU+RznjiOlYXA8wqkOfkItTAom+oKygca4ES8jY+N3z7fSG4hfUtp3ihUHruVSsFy1iRvNP+1N7A5BdJACmVpAgZPhGOyCigEjlPLudn7kvFtOxuB4g6OjD8UWLRkCZFRwrLCEXJQQhp2K+37lQeBCRX1A7KPQto1prFEmSYn2mB9EAsO+kYfk8KQhZF8yjVz5gp/MztyOUjiW9bCUhEBhKRCCgSis45uQ/PhX/xfFWMgOnWu2gxB0TF/o0kEZ/kCDM1Ts+3RHYnwVUL6XhDFrAswfIB6w6P1MrTulY0sum1VICglKwCEACqvQFCUK3gHcsFQCM/ILayqP1k9JshVqrncMalOYYvgcGAyCvIwuod8YBJQmZpmGJeyRwkGw4n8jJOJQNw3idLFhMRNB0SgASTJyKoy/4ieXCeFfJBUeV2SoAclFyR0bbm1OHTUiN0/DTAwD7zQeM52dqj8VsGEkVE2jKetG7AEhQ0frJAv6RC0trC1skl+IWlNinGLbSaZg7Mc0xfA8MbgF1LQV1z08A2G8+oM7PVF9Ms2GUE0gQyp+Lwu2yagLgR9ZaYpkSypQ6a6Q2DCqzpkvietXIFdoZfuieGmcOD0DeP0HEbBhNwYPmA/L8zJQsATAKnguEqS+XTqkE4YfWWwCUFZTksYAYwZfIBeN9Tw0cjOwu8gDIZqsoSSvhEeQDiiGYFoyWiSDRypWgi69UP5sc5fIcquSCNeXqe2X9ZAHfM7Khe2pcOB+AT41+aO5iRD3QAHBEHd9ctuiBBoANEkbaAw0AR9r9zcUbADYYGGkPNAAcafc3F28A2GBgpD3QAHCk3d9cvAFgg4GR9kADwJF2f3PxBoANBkbaAw0AR9r9zcUbADYYGGkPNAAcafc3F28A2GBgpD3QAHCk3d9cfOxqYJ2au9RdPtdp/khoEOlglDYT39V1PzQFXLsMXAlgt9PCxJKPbufyf8/KHIPfBPAZABf79Xc5XQ0ZQ1Q7360NbxoHrlsDvs5ZRsgo0une06by6X1mZvtP99PNAp4F4LsBXA5gjw8EGTeqaGF4QhzQF80CX7cAvGIdeDYAfhdZ2sTKUcVrpE7nd31N5gj8e2dIo2osk7NZpMdK0Z19tv+bJ4F9K8D1ACj8yfNSikHeg+5Z969m57Y/8/ZP+dPLKZhP/rcA+AYAF7g1oRUhEMUzFMt6eSJfX78b2DkPfM0i8GIAX+uWlAMppreUUErn8p2gzTl+2flg/sDbTkvIOik+CP20//mzwAXzwDcCuNTPJeFXpEpM6QEjIHm/zTF8D7T5gATYNQCe69aAloRTGulfBESBSYNyxR5g/Bhw7hKwZwl4vk9LnM5JmsBzUyDGAX3B8G23Mz/g9BuUa/0IiutfMkj7zwKmngAuXSvOpUvAWYBtF4BTnspIj/O8zPaf7qdvWITw6eZA0JLQEhKEGgxZhUj/dz3NzSKwbR44exnYvVKcy+mM5Km0JhxInUtrGkmzCPicg3W5LMGkQiZZTm9xS9Z3+4m2o8C5c4X15pTKW2Lb+fCx7WLtjYxzqiql29Icw/dA5SqYf6RTTilg+lYCIXmICKQ4IK9wxfSJY8AZK8CuFWDnanEua9ZTAMsaCog3Dt92O/MvnRGBtGwkqKRmMEkqCaa+2k+0LQDTh4rP88UHj74kF1WaATo9QHQ7mmP4HugYhtEKj4PB6ZQ+FS0hQahpldPya1kXTOqNY8DscgG+HavAttUCvBxInitrkgL4lcO33c7spBdM3kAuSnq2nx9gQfAh4JyVwvrxwel2z3p4aMlzH6DM2z/lT+8aB+Q/OT4EEqckWQSBkGD6EQKQnDCLwBSnYgcf32fXioGUFawC4esyu7CXXnDP9tOCsyD4KLB1rmgvX7zfbu2WG/Jtme0/3U/vKxBNAMoi0KcjkATCN3HOEr3UAjDrwOP71rXixYEkeKMFlSX8ocwR6KUXTJ7AaNE2tF8WfA4Ye7Kw1mwvX/yZn+eKnvcrfzC6IK/ObP/pfnpfAGQnySoISBqUXyAASS1AK0JfagWYcRDOrAF66TxZQU7jBOEbM0egH71gcgXSFZAV54NQtj9YcNIpbONCyh8Ygi8CVospApDuB63g92W2/3Q/vW8AsqM4gLIKBBIH8bcJwMCNMX68BTqBb8s6sGWtsIA6jwDk662ZI9CvXjA5A6NVa2t/IAicnC/aGV+8T74IQPm/AmGuBc+8/VP+9IEAyLslAKMV/LgAyIUInfnjwPQqMOOgI/DstQ5Mr7UAqMF8V2YXDqoXXNl+EQQ6N9v29aKdesUpWJZbAPyPme0/3U8fGIDssDid/pUASCvCaXgJmFguAEfgEXT27gDkuwaUg/nbmSMwjF7whvbLhSDL5TwwvdRqo9oqHzACkCB8U2b7T/fThwIgO01T1IMCoAZxGRhbKoAXQUcQTjkI+a4B5e5FzjGsXvCG9gdqrLGFYrpVG/UuHzBOw2/LaXxzbh43DKeoJwlAHqLndSs4udoCoIBHQE45EPk3DuitmYOQoxdctp8+rFwIWsGFYiFFoLGNchcEQC6e+OJC5J2Z7T/dTx/aApYdJ37AyJK/DIwvFxYvWr0IwEn/H1Opco5sveDUhSAAF4HJpQJkWixp6k2n4IYfMGf0amDHev2I8+l4/UbvNw8Eozw72wJePOJ8und7EkKj9ztKGA1/7WwATo44n45pWI3e7/AAGPWZ2QBkYHCU+XTMfGGQmYIxjd7vqOE0+PXzATjifDrKtTZ6v4MP/MlyRj4AR5xPF+VaqZLJF1UzKdPV6P2eLDDr3I58AI44n07ZMARbo/d78gMubWE+AEecT8e9YOn2Uheu0fs9tUCYD8AR59MpG6bR+z21gKfW1gNAz4geRT5dTEZo9H5PPRDmAzBmRM8BJzqfLiYjSKKr0fs9dYBYDwBHmE9XtRfMsIz04aQZ1+j9npygrA+Akqs8wfl0BCCTWRq935MTYL1aVQ8Ao1zlAnAi8+kEQGZTNXq/vYb75Pt/fQAcUT5dBGCj93vyAaxXi+oDoFLyT3A+3Rcavd9eY3xS/z8fgCQX/LPR3SOzkon55jg1eyAfgD8M4NcAPD6aDmBtB1e4NMDNcer1QD4AbwbwxwDe4UvRE9wHZG1gNSXDLlwLNcep1QP5APxzzwj9IIAPnXhT5ORc5EYCA9HNcWr1QD4AmRH6FQBMTSZZH98ZmD5Bh5g1FopiNns1x6nTA/kAvAfAEwDudnI+EvQxPfkEzYfaCXRSBluQMB7YHKdGD+QDsBNBH/9+AkAobqTADGK7Inw1x8nfA/kA7EXQt8kgrGAGMfBxZ5Cv5ji5eyAfgL0I+r68uR0QmUFoBQU8vfNvzXHy9kA9AORoMw7CdGQCjoUZDwL4kv/+8OZ1gJhBIjGDgMh3vTavBc035/RAPgD7JegjODfhiMwgoqeJwNPPTaB6Ezq/hq+sB4AcXeXEP+ZhGVo9vRimIQD5v5oPAZCupgDI9wg8/qz/1Xz55usyeyAfgMMQ9GU2Op4eAchpOIJQQEz/VuPlm6/K7IH6AMjgGzdl6QtyX5jWjpQFevF3lq3xf6yhrOlIAUgQCojR8gmE+l9Nl2++JrMH6gEgR5UA5KYsc+AZmCbQCDi+IvgEQMob1XBEAHIajgBMLV+0kCdws6aGu3zqfkV9AGTwjftg3JRVVRAtHQEXX/wbAcoXP5d5CID8GoJKvqDAloKOoIz/y7x8c3pmD4zhaqwjRzCYyQg5gr2ZgsFTLweWr8XQgsXjbwLWrnNtMlKgNoLBmZAa7PTCAuYIBlMvlWQswwr2UlUw45jdDSx8HbD+Ctd+HVCwePKbgJV9aASDM8Yg59TWFDysYPBtmYK91IbNOHaPA/M7gUXKXA4hWDz79cA8+W0aweCMURj+1HYfcBjBYO54MMY3tGDv8I3nmWSHOzYOLJ0LLPGXAQWLz3oB8MQUsEa16kYwOG8whjh74yJkUMFgbsNlCfYO0epwissVY34bsHw2sEIRkAEEi/dcU0SP5qhF1ggG5w3GEGdXr4L5134Fg4kAjuDQgr1DtDqcUmZETwArZwAru4BVqsv0KVh8/o3F4v0QXZBGMDhvMIY4u3MYhv95Zh+Cu1xBcxuOU/HfeDIq5cv7FuwdotXhlCBXjOXZAnyrO4BV6in0IVh8wStLuWCsUAyvEQzOG5ABz+4eB+R/ewnu/kOP/3G/l4kJTERlljQtIot2e53/IwO2OPl4FLtcnCqAp9cahT56CBZf+LpSLhhz1N5qBIPzBmTAs/sLRHcTDKbiNHdBGGymOC/3hglEvgjAnoK9A7Y4+XgiV4zVWYDAs/etxaubYPFFP1QkLtCIP8neaASD8wZkwLP7AyC/tJNg8L/xLNBu+YBdBXsHbHEFAINcMVamgdWZAoRrfPdXm8KitLdmgYveWAq+2y7iMqfuRjA4b1AGOLt/APJLqwSD3+y5T1yI0AoSbAxMMzGV1o8/My2ro2DvAK2t+GgiV4zj4+3AIwDXtwBrVJeuECze+9aW4Dut4PxkIhYsdetGMDhvoDqcPRgA+SWp4O4veQ5Uv/mAGwR78+6rQq4Yq9PAOi2fA4/vBkKudKVU7VZw77uKvWFuZbtcMNb5v0YwOG9g+jx7cADyi6Pg7gccgIxlcA5TKhaD01yYKBmVFpBZMfx/m2Bvny3t8LGqoqTliZbVI+gMgHwnMAnCIFi897cLAAZ6QyzFzzSCwXkD1OPs4QDIL5XgLmk5JHk/SD5gKdibd38VcsVYGmuBTaAzEHLHgyCcaokB7/1IkUET5IKxwF5pBIPzBqbPs4cHIC/AaeqvPL9pmHxAE+zts6VdLCD/lcgVY3UyWD0Bj1ZwqgCggXA7sPfWAoAJvaEtZBrB4Lyx6efsPADyCtmCvf00s/NnOsgVY3m8BTRZPZuGBUACdArY+5lWDqGmYbIrLHEx0ggG5w1OH2fnA7CPizQfaXqgUw80AGywMdIeaAA40u5vLt4AsMHASHugAeBIu7+5eAPABgMj7YEGgCPt/ubiDQAbDIy0BxoAjrT7m4s3AGwwMNIeaAA40u5vLt4AsMHASHugAeBIu7+5eAPABgMj7YEGgCPt/ubiDQAbDIy0B8ZYNMbkX+ZekpuIiOQrPar+xs889HJg6jZg5jAwvVZ8B+ll9PlO5/Fc/o+ECjnHfi8zYfkvM5ulmp4qJXVqx5deD4zfAkw/CGxdAZgoHfuh131QkaI5hu8Bs4Ds8B0AWLnIRGCBsFfn87JffDMwdjOw5R5g8giwZa34jnQQUwDo99wBfJ4TM7COiNdlaj2rA/jeV/vfDeATAP4UGH8I2Lrc6gc+SHqY4oMZ74VSKM0xfA+UUzB/oBUUCKMl6zSQ/PsXqZD5KQC/A0w/DEwcAcYXgYnVwppwADuBkefnCim90FmBWXwnK87Uen53BI8sbuwqaz9p5UgnQhBS+ZN1zE8Ak0utviCwq8DI8/nx5hi+Bzb4gJzKZE1SEFZZgS9/2pWR/gTAJ4HJQ8DEMWB8ARhfBsaWCwDquwQKvvNgHXvOcYVbPFJPkw+dDxC/W1Y4tWDpw/Rlgo4lo1T4/KxTihDNpJwj3/UiMLXemprjffC7eWpzDN8DlYsQDiKtVxzEqoHkyX9HRizW+nIgaQnvAiaeBCbmC0s4tgSMu2rMePAR9X252jXklaTFU108K0MHav/nvJ6ZxVVk9OI7GR2IZoGQNc/HgbHgIwqILIVujuF7oOMqWFawCoRxkfEIB5CWgkREBCNf9wMTc8A4QciBWyoGz16rwNgaML5eWKpctYZL3N+TWLX0gvtuP0HHk2n16JDyxXmVhfU0qywbJbr5GSuXKxA/sV5Y9UYWdnjwyS3qKKgarWA69Wg6fjQOIK0HadnIjPVFB+AiME4AuiUkCFnESyCSkmAuU7Cjm15wX+2X2ifBRn9A8mKcW2UFjULVQcgVDl80u40SYh763FfvquhLCxitoBYUsoJfjXKttByMq9CKcHn4sPuCbgXNJwyWkECcz5Q376UX3LNncZyQAAADEklEQVT9fFgIJs6lBBwtn3Tt6FpIz4RWnuQxPh2XIGzm4CwQ9hWIFgBTK0gQHiIAJddKq0ELQh+KL1qUR4MvSEsoENIKrgALHNiMox+94K7tl9qnnMio8MSf6SNwGpYVjCDk/Ju7isq496fCqX0BkDeqlWwKwic1gAQSpzGREnFgREz01eALLvvq2Kfi45m6cf3qBXdsfxRbJMho8dimqOhEK8cXQRr9QVpvPoDNMXQP9A3ACELFxPh+jACkP0fLIKFCCRRqKuPUdqjlC9o07JZwKVNHeBC94DQcZO0XAAkmgotAk9QYrR9f/BvByYfMSATDVMzwTXMM3QMDAVAgVHCZ7/MaQK4QZUHiNCbBQlqUw74YCb7gcmYkelC9YFlwvVv7RRAorTuBkECU9asCID9/x9B935zYzyKkqpfiNHxcA0gLQgvBAaPVkCqm3h2AtC5m/RyEqzw/4xhGL3hD++MmslgqCbgUfLKAcRrmTlBzDN0DA1tAXUlWcDm1IOIIJAjlT/Fd05lbFQFwjdtgGcewesFt7Rc/Gx8iWjUCjGCT1YvWT1MwgUqrf3NG45tTbcu0aximWx9xENcEQHGbcYAEwtSXSqY0gnCdgeuMI0cvuGx/FUGgFhwEYrR80QckWN+X0fjm1DwAWv8RgJFilJZBznz0pQg+AZAAlVWh1GvGka0XzB0cCQi30aSGVa9AF62fLOB7MhrfnJoPwPER59Px+o3e76mL5Kwp2G57xPl0kxc3er+nLvyKtLmhfUC78RHn081ONnq/pzcAR5xPR9mRRu/31IVgvgUccT4dNaobvd/TGYAjzqejumqj93s6A3DE+XRUg2VSCjdaGr3fUw+I+VPwiPPpqJjO8J1Nw43e7ymHwHoAKMFd7QErAeEE5NNJMb3R+z3lsGcNzgfgiPPpomJ6o/d76oGwPgCOKJ8uKqY3er+nKwBHmE+noqRG7/fUA199U/AI8+kEwEbv93QHoEhZTnA+nYqSGr3fBoAtaiqBUImdm5hPJwA2er+nKwBHnE+X1gUzSbnR+z11wPj/AeCpPDD3t7rvAAAAAElFTkSuQmCC",RM="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",IM="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",PM=class extends Xi{constructor({blendFunction:n=Xe.SRC,preset:e=Vs.MEDIUM,edgeDetectionMode:t=nf.COLOR,predicationMode:i=AM.DISABLED}={}){super("SMAAEffect",RM,{vertexShader:IM,blendFunction:n,attributes:On.CONVOLUTION|On.DEPTH,uniforms:new Map([["weightMap",new xe(null)]])});let s,r;arguments.length>1&&(s=arguments[0],r=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(t=arguments[3])),this.renderTargetEdges=new ht(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new Yl(!0,!1,!1),this.clearPass.overrideClearColor=new qe(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new xl(new TM),this.edgeDetectionMaterial.edgeDetectionMode=t,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new xl(new DM);const a=new Gd;a.onLoad=()=>{const o=new Ft(s);o.name="SMAA.Search",o.magFilter=At,o.minFilter=At,o.generateMipmaps=!1,o.needsUpdate=!0,o.flipY=!0,this.weightsMaterial.searchTexture=o;const l=new Ft(r);l.name="SMAA.Area",l.magFilter=at,l.minFilter=at,l.generateMipmaps=!1,l.needsUpdate=!0,l.flipY=!1,this.weightsMaterial.areaTexture=l,this.dispatchEvent({type:"load"})},a.itemStart("search"),a.itemStart("area"),s!==void 0&&r!==void 0?(a.itemEnd("search"),a.itemEnd("area")):typeof Image<"u"&&(s=new Image,r=new Image,s.addEventListener("load",()=>a.itemEnd("search")),r.addEventListener("load",()=>a.itemEnd("area")),s.src=Ih,r.src=Ph),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(n){this.edgeDetectionMaterial.edgeDetectionThreshold=n}setOrthogonalSearchSteps(n){this.weightsMaterial.orthogonalSearchSteps=n}applyPreset(n){const e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(n){case Vs.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Vs.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Vs.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case Vs.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(n,e=Rn){this.edgeDetectionMaterial.depthBuffer=n,this.edgeDetectionMaterial.depthPacking=e}update(n,e,t){this.clearPass.render(n,this.renderTargetEdges),this.edgeDetectionPass.render(n,e,this.renderTargetEdges),this.weightsPass.render(n,this.renderTargetEdges,this.renderTargetWeights)}setSize(n,e){this.edgeDetectionMaterial.setSize(n,e),this.weightsMaterial.setSize(n,e),this.renderTargetEdges.setSize(n,e),this.renderTargetWeights.setSize(n,e)}dispose(){const{searchTexture:n,areaTexture:e}=this.weightsMaterial;n!==null&&e!==null&&(n.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return Ih}static get areaImageDataURL(){return Ph}};function Yr(n,e,t){return n*(e-t)-e}function qr(n,e,t){return Math.min(Math.max((n+e)/(e-t),0),1)}var LM=`#include <common>
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
}gl_FragColor.r=ao;}`,BM="uniform vec2 noiseScale;varying vec2 vUv;varying vec2 vUv2;void main(){vUv=position.xy*0.5+0.5;vUv2=vUv*noiseScale;gl_Position=vec4(position.xy,1.0,1.0);}",UM=class extends ot{constructor(n){super({name:"SSAOMaterial",defines:{SAMPLES_INT:"0",INV_SAMPLES_FLOAT:"0.0",SPIRAL_TURNS:"0.0",RADIUS:"1.0",RADIUS_SQ:"1.0",DISTANCE_SCALING:"1",DEPTH_PACKING:"0"},uniforms:{depthBuffer:new xe(null),normalBuffer:new xe(null),normalDepthBuffer:new xe(null),noiseTexture:new xe(null),inverseProjectionMatrix:new xe(new Ze),projectionMatrix:new xe(new Ze),texelSize:new xe(new Ce),cameraNearFar:new xe(new Ce),distanceCutoff:new xe(new Ce),proximityCutoff:new xe(new Ce),noiseScale:new xe(new Ce),minRadiusScale:new xe(.33),intensity:new xe(1),fade:new xe(.01),bias:new xe(0)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:LM,vertexShader:BM}),this.copyCameraSettings(n),this.resolution=new Ce,this.r=1}get near(){return this.uniforms.cameraNearFar.value.x}get far(){return this.uniforms.cameraNearFar.value.y}set normalDepthBuffer(n){this.uniforms.normalDepthBuffer.value=n,n!==null?this.defines.NORMAL_DEPTH="1":delete this.defines.NORMAL_DEPTH,this.needsUpdate=!0}setNormalDepthBuffer(n){this.normalDepthBuffer=n}set normalBuffer(n){this.uniforms.normalBuffer.value=n}setNormalBuffer(n){this.uniforms.normalBuffer.value=n}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=Rn){this.depthBuffer=n,this.depthPacking=e}set noiseTexture(n){this.uniforms.noiseTexture.value=n}setNoiseTexture(n){this.uniforms.noiseTexture.value=n}get samples(){return Number(this.defines.SAMPLES_INT)}set samples(n){this.defines.SAMPLES_INT=n.toFixed(0),this.defines.INV_SAMPLES_FLOAT=(1/n).toFixed(9),this.needsUpdate=!0}getSamples(){return this.samples}setSamples(n){this.samples=n}get rings(){return Number(this.defines.SPIRAL_TURNS)}set rings(n){this.defines.SPIRAL_TURNS=n.toFixed(1),this.needsUpdate=!0}getRings(){return this.rings}setRings(n){this.rings=n}get intensity(){return this.uniforms.intensity.value}set intensity(n){this.uniforms.intensity.value=n,this.defines.LEGACY_INTENSITY===void 0&&(this.defines.LEGACY_INTENSITY="1",this.needsUpdate=!0)}getIntensity(){return this.uniforms.intensity.value}setIntensity(n){this.uniforms.intensity.value=n}get fade(){return this.uniforms.fade.value}set fade(n){this.uniforms.fade.value=n}getFade(){return this.uniforms.fade.value}setFade(n){this.uniforms.fade.value=n}get bias(){return this.uniforms.bias.value}set bias(n){this.uniforms.bias.value=n}getBias(){return this.uniforms.bias.value}setBias(n){this.uniforms.bias.value=n}get minRadiusScale(){return this.uniforms.minRadiusScale.value}set minRadiusScale(n){this.uniforms.minRadiusScale.value=n}getMinRadiusScale(){return this.uniforms.minRadiusScale.value}setMinRadiusScale(n){this.uniforms.minRadiusScale.value=n}updateRadius(){const n=this.r*this.resolution.height;this.defines.RADIUS=n.toFixed(11),this.defines.RADIUS_SQ=(n*n).toFixed(11),this.needsUpdate=!0}get radius(){return this.r}set radius(n){this.r=Math.min(Math.max(n,1e-6),1),this.updateRadius()}getRadius(){return this.radius}setRadius(n){this.radius=n}get distanceScaling(){return!0}set distanceScaling(n){}isDistanceScalingEnabled(){return this.distanceScaling}setDistanceScalingEnabled(n){this.distanceScaling=n}get distanceThreshold(){return this.uniforms.distanceCutoff.value.x}set distanceThreshold(n){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.distanceFalloff,0),1))}get worldDistanceThreshold(){return-Yr(this.distanceThreshold,this.near,this.far)}set worldDistanceThreshold(n){this.distanceThreshold=qr(-n,this.near,this.far)}get distanceFalloff(){return this.uniforms.distanceCutoff.value.y-this.distanceThreshold}set distanceFalloff(n){this.uniforms.distanceCutoff.value.y=Math.min(Math.max(this.distanceThreshold+n,0),1)}get worldDistanceFalloff(){return-Yr(this.distanceFalloff,this.near,this.far)}set worldDistanceFalloff(n){this.distanceFalloff=qr(-n,this.near,this.far)}setDistanceCutoff(n,e){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}get proximityThreshold(){return this.uniforms.proximityCutoff.value.x}set proximityThreshold(n){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.proximityFalloff,0),1))}get worldProximityThreshold(){return-Yr(this.proximityThreshold,this.near,this.far)}set worldProximityThreshold(n){this.proximityThreshold=qr(-n,this.near,this.far)}get proximityFalloff(){return this.uniforms.proximityCutoff.value.y-this.proximityThreshold}set proximityFalloff(n){this.uniforms.proximityCutoff.value.y=Math.min(Math.max(this.proximityThreshold+n,0),1)}get worldProximityFalloff(){return-Yr(this.proximityFalloff,this.near,this.far)}set worldProximityFalloff(n){this.proximityFalloff=qr(-n,this.near,this.far)}setProximityCutoff(n,e){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNearFar.value.set(n.near,n.far),this.uniforms.projectionMatrix.value.copy(n.projectionMatrix),this.uniforms.inverseProjectionMatrix.value.copy(n.projectionMatrix).invert(),n instanceof $t?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms,i=t.noiseTexture.value;i!==null&&t.noiseScale.value.set(n/i.image.width,e/i.image.height),t.texelSize.value.set(1/n,1/e),this.resolution.set(n,e),this.updateRadius()}},zM=`#include <packing>
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
gl_FragColor=vec4(n[index],d[index]);}`,FM="uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}",NM=class extends ot{constructor(){super({name:"DepthDownsamplingMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new xe(null),normalBuffer:new xe(null),texelSize:new xe(new Ce)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:zM,vertexShader:FM})}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=Rn){this.depthBuffer=n,this.depthPacking=e}set normalBuffer(n){this.uniforms.normalBuffer.value=n,n!==null?this.defines.DOWNSAMPLE_NORMALS="1":delete this.defines.DOWNSAMPLE_NORMALS,this.needsUpdate=!0}setNormalBuffer(n){this.normalBuffer=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},OM=class extends Vt{constructor({normalBuffer:n=null,resolutionScale:e=.5,width:t=Ut.AUTO_SIZE,height:i=Ut.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("DepthDownsamplingPass");const a=new NM;a.normalBuffer=n,this.fullscreenMaterial=a,this.needsDepthTexture=!0,this.needsSwap=!1,this.renderTarget=new ht(1,1,{minFilter:At,magFilter:At,depthBuffer:!1,type:on}),this.renderTarget.texture.name="DepthDownsamplingPass.Target",this.renderTarget.texture.generateMipmaps=!1;const o=this.resolution=new Ut(this,s,r,e);o.addEventListener("change",l=>this.setSize(o.baseWidth,o.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}setDepthTexture(n,e=Rn){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e}render(n,e,t,i,s){n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.fullscreenMaterial.setSize(n,e)}initialize(n,e,t){const i=n.getContext();if(!(i.getExtension("EXT_color_buffer_float")||i.getExtension("EXT_color_buffer_half_float")))throw new Error("Rendering to float texture is not supported.")}},kM=`uniform lowp sampler2D aoBuffer;uniform float luminanceInfluence;uniform float intensity;
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
}`,Lh=64,GM=class extends Xi{constructor(n,e,{blendFunction:t=Xe.MULTIPLY,samples:i=9,rings:s=7,normalDepthBuffer:r=null,depthAwareUpsampling:a=!0,worldDistanceThreshold:o,worldDistanceFalloff:l,worldProximityThreshold:c,worldProximityFalloff:h,distanceThreshold:f=.97,distanceFalloff:u=.03,rangeThreshold:d=5e-4,rangeFalloff:m=.001,minRadiusScale:v=.1,luminanceInfluence:g=.7,radius:p=.1825,intensity:x=1,bias:M=.025,fade:y=.01,color:S=null,resolutionScale:E=1,width:D=Ut.AUTO_SIZE,height:C=Ut.AUTO_SIZE,resolutionX:A=D,resolutionY:w=C}={}){super("SSAOEffect",kM,{blendFunction:t,attributes:On.DEPTH,defines:new Map([["THRESHOLD","0.997"]]),uniforms:new Map([["aoBuffer",new xe(null)],["normalDepthBuffer",new xe(r)],["luminanceInfluence",new xe(g)],["color",new xe(null)],["intensity",new xe(x)],["scale",new xe(0)]])}),this.renderTarget=new ht(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="AO.Target",this.uniforms.get("aoBuffer").value=this.renderTarget.texture;const _=this.resolution=new Ut(this,A,w,E);_.addEventListener("change",F=>this.setSize(_.baseWidth,_.baseHeight)),this.camera=n,this.depthDownsamplingPass=new OM({normalBuffer:e,resolutionScale:E}),this.depthDownsamplingPass.enabled=r===null,this.ssaoPass=new xl(new UM(n));const I=new SM(Lh,Lh,Gt);I.wrapS=I.wrapT=nr;const z=this.ssaoMaterial;z.normalBuffer=e,z.noiseTexture=I,z.minRadiusScale=v,z.samples=i,z.radius=p,z.rings=s,z.fade=y,z.bias=M,z.distanceThreshold=f,z.distanceFalloff=u,z.proximityThreshold=d,z.proximityFalloff=m,o!==void 0&&(z.worldDistanceThreshold=o),l!==void 0&&(z.worldDistanceFalloff=l),c!==void 0&&(z.worldProximityThreshold=c),h!==void 0&&(z.worldProximityFalloff=h),r!==null&&(this.ssaoMaterial.normalDepthBuffer=r,this.defines.set("NORMAL_DEPTH","1")),this.depthAwareUpsampling=a,this.color=S}set mainCamera(n){this.camera=n,this.ssaoMaterial.copyCameraSettings(n)}get normalBuffer(){return this.ssaoMaterial.normalBuffer}set normalBuffer(n){this.ssaoMaterial.normalBuffer=n,this.depthDownsamplingPass.fullscreenMaterial.normalBuffer=n}getResolution(){return this.resolution}get ssaoMaterial(){return this.ssaoPass.fullscreenMaterial}getSSAOMaterial(){return this.ssaoMaterial}get samples(){return this.ssaoMaterial.samples}set samples(n){this.ssaoMaterial.samples=n}get rings(){return this.ssaoMaterial.rings}set rings(n){this.ssaoMaterial.rings=n}get radius(){return this.ssaoMaterial.radius}set radius(n){this.ssaoMaterial.radius=n}get depthAwareUpsampling(){return this.defines.has("DEPTH_AWARE_UPSAMPLING")}set depthAwareUpsampling(n){this.depthAwareUpsampling!==n&&(n?this.defines.set("DEPTH_AWARE_UPSAMPLING","1"):this.defines.delete("DEPTH_AWARE_UPSAMPLING"),this.setChanged())}isDepthAwareUpsamplingEnabled(){return this.depthAwareUpsampling}setDepthAwareUpsamplingEnabled(n){this.depthAwareUpsampling=n}get distanceScaling(){return!0}set distanceScaling(n){}get color(){return this.uniforms.get("color").value}set color(n){const e=this.uniforms,t=this.defines;n!==null?t.has("COLORIZE")?e.get("color").value.set(n):(t.set("COLORIZE","1"),e.get("color").value=new qe(n),this.setChanged()):t.has("COLORIZE")&&(t.delete("COLORIZE"),e.get("color").value=null,this.setChanged())}get luminanceInfluence(){return this.uniforms.get("luminanceInfluence").value}set luminanceInfluence(n){this.uniforms.get("luminanceInfluence").value=n}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getColor(){return this.color}setColor(n){this.color=n}setDistanceCutoff(n,e){this.ssaoMaterial.distanceThreshold=n,this.ssaoMaterial.distanceFalloff=e}setProximityCutoff(n,e){this.ssaoMaterial.proximityThreshold=n,this.ssaoMaterial.proximityFalloff=e}setDepthTexture(n,e=Rn){this.depthDownsamplingPass.setDepthTexture(n,e),this.ssaoMaterial.depthBuffer=n,this.ssaoMaterial.depthPacking=e}update(n,e,t){const i=this.renderTarget;this.depthDownsamplingPass.enabled&&this.depthDownsamplingPass.render(n),this.ssaoPass.render(n,null,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.ssaoMaterial.copyCameraSettings(this.camera),this.ssaoMaterial.setSize(i,s),this.renderTarget.setSize(i,s),this.depthDownsamplingPass.resolution.scale=t.scale,this.depthDownsamplingPass.setSize(n,e)}initialize(n,e,t){try{let i=this.uniforms.get("normalDepthBuffer").value;i===null&&(this.depthDownsamplingPass.initialize(n,e,t),i=this.depthDownsamplingPass.texture,this.uniforms.get("normalDepthBuffer").value=i,this.ssaoMaterial.normalDepthBuffer=i,this.defines.set("NORMAL_DEPTH","1"))}catch{this.depthDownsamplingPass.enabled=!1}}},HM=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,VM=class extends ot{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new xe(null),luminanceBuffer1:new xe(null),minLuminance:new xe(.01),deltaTime:new xe(0),tau:new xe(1)},extensions:{shaderTextureLOD:!0},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:HM,vertexShader:Xl})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},WM=class extends Vt{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new VM,this.needsSwap=!1,this.renderTargetPrevious=new ht(1,1,{minFilter:At,magFilter:At,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new $u(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,s){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},XM=`#include <tonemapping_pars_fragment>
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
}`,YM=class extends Xi{constructor({blendFunction:n=Xe.SRC,adaptive:e=!1,mode:t=e?rn.REINHARD2_ADAPTIVE:rn.AGX,resolution:i=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:l=1,adaptationRate:c=1}={}){super("ToneMappingEffect",XM,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new xe(null)],["maxLuminance",new xe(s)],["whitePoint",new xe(r)],["middleGrey",new xe(a)],["averageLuminance",new xe(l)]])}),this.renderTargetLuminance=new ht(1,1,{minFilter:Un,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new ef({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new WM(this.luminancePass.texture,{minLuminance:o,adaptationRate:c}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;const t=Vi.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case rn.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case rn.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case rn.CINEON:case rn.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case rn.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case rn.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case rn.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===rn.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){const e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===rn.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?rn.REINHARD2_ADAPTIVE:rn.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}},qM=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,QM=class extends Xi{constructor({blendFunction:n,eskil:e=!1,technique:t=e?Ws.ESKIL:Ws.DEFAULT,offset:i=.5,darkness:s=.5}={}){super("VignetteEffect",qM,{blendFunction:n,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new xe(i)],["darkness",new xe(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(n){this.technique!==n&&(this.defines.set("VIGNETTE_TECHNIQUE",n.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Ws.ESKIL}set eskil(n){this.technique=n?Ws.ESKIL:Ws.DEFAULT}getTechnique(){return this.technique}setTechnique(n){this.technique=n}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}get darkness(){return this.uniforms.get("darkness").value}set darkness(n){this.uniforms.get("darkness").value=n}getDarkness(){return this.darkness}setDarkness(n){this.darkness=n}},KM=`#include <common>
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
}`,ZM="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",jM=class extends ot{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Vi.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new xe(null),depthBuffer:new xe(null),resolution:new xe(new Ce),texelSize:new xe(new Ce),cameraNear:new xe(.3),cameraFar:new xe(1e3),aspect:new xe(1),time:new xe(0)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=Rn){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=KM.replace(st.FRAGMENT_HEAD,n.get(st.FRAGMENT_HEAD)||"").replace(st.FRAGMENT_MAIN_UV,n.get(st.FRAGMENT_MAIN_UV)||"").replace(st.FRAGMENT_MAIN_IMAGE,n.get(st.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=ZM.replace(st.VERTEX_HEAD,n.get(st.VERTEX_HEAD)||"").replace(st.VERTEX_MAIN_SUPPORT,n.get(st.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof $t?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return st}};function Bh(n,e,t){for(const i of e){const s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function JM(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader();const r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&On.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get(st.FRAGMENT_HEAD)||"",h=l.get(st.FRAGMENT_MAIN_UV)||"",f=l.get(st.FRAGMENT_MAIN_IMAGE)||"",u=l.get(st.VERTEX_HEAD)||"",d=l.get(st.VERTEX_MAIN_SUPPORT)||"";const m=new Set,v=new Set;if(a&&(h+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const x=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);d+=`	${n}MainSupport(`,d+=x?`vUv);
`:`);
`;for(const M of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const y of M[1].split(/\s*,\s*/))t.varyings.add(y),m.add(y),v.add(y);for(const M of s.matchAll(o))v.add(M[1])}for(const x of i.matchAll(o))v.add(x[1]);for(const x of e.defines.keys())v.add(x.replace(/\([\w\s,]*\)/g,""));for(const x of e.uniforms.keys())v.add(x);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((x,M)=>t.uniforms.set(n+M.charAt(0).toUpperCase()+M.slice(1),x)),e.defines.forEach((x,M)=>t.defines.set(n+M.charAt(0).toUpperCase()+M.slice(1),x));const g=new Map([["fragment",i],["vertex",s]]);Bh(n,v,t.defines),Bh(n,v,g),i=g.get("fragment"),s=g.get("vertex");const p=e.blendMode;if(t.blendModes.set(p.blendFunction,p),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(f+=e.inputColorSpace===lt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==pn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const x=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;f+=`${n}MainImage(color0, UV, `,(t.attributes&On.DEPTH)!==0&&x.test(i)&&(f+="depth, ",t.readDepth=!0),f+=`color1);
	`;const M=n+"BlendOpacity";t.uniforms.set(M,p.opacity),f+=`color0 = blend${p.blendFunction}(color0, color1, ${M});

	`,c+=`uniform float ${M};

`}if(c+=i+`
`,s!==null&&(u+=s+`
`),l.set(st.FRAGMENT_HEAD,c),l.set(st.FRAGMENT_MAIN_UV,h),l.set(st.FRAGMENT_MAIN_IMAGE,f),l.set(st.VERTEX_HEAD,u),l.set(st.VERTEX_MAIN_SUPPORT,d),e.extensions!==null)for(const x of e.extensions)t.extensions.add(x)}}var Uh=class extends Vt{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new jM(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new _x;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===Xe.DST)n.attributes|=a.getAttributes()&On.DEPTH;else{if((n.attributes&a.getAttributes()&On.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);JM("e"+e++,a,n)}let t=n.shaderParts.get(st.FRAGMENT_HEAD),i=n.shaderParts.get(st.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get(st.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of n.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(n.attributes&On.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===lt&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(st.FRAGMENT_HEAD,t),n.shaderParts.set(st.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(st.FRAGMENT_MAIN_UV,s);for(const[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=Rn){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(const r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==_t&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}},$M=class extends Vt{constructor(n,e,{renderTarget:t,resolutionScale:i=1,width:s=Ut.AUTO_SIZE,height:r=Ut.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new tf(n,e,new Od);const l=this.renderPass;l.ignoreBackground=!0,l.skipShadowMapUpdate=!0;const c=l.getClearPass();c.overrideClearColor=new qe(7829503),c.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new ht(1,1,{minFilter:At,magFilter:At}),this.renderTarget.texture.name="NormalPass.Target");const h=this.resolution=new Ut(this,a,o,i);h.addEventListener("change",f=>this.setSize(h.baseWidth,h.baseHeight))}set mainScene(n){this.renderPass.mainScene=n}set mainCamera(n){this.renderPass.mainCamera=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.renderToScreen?null:this.renderTarget;this.renderPass.render(n,r,r)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}};class ey{constructor(e){this.volume=e;const t=new va(e.data,e.sx,e.sy,e.sz);t.format=Gt,t.type=_t,t.colorSpace=pn,t.minFilter=Un,t.magFilter=at,t.wrapS=t.wrapT=t.wrapR=Bn,t.generateMipmaps=!0,t.unpackAlignment=1,t.needsUpdate=!0,this.texture=t;const i=new va(e.normals,e.sx,e.sy,e.sz);i.format=Gt,i.type=_t,i.colorSpace=pn,i.minFilter=at,i.magFilter=at,i.generateMipmaps=!1,i.wrapS=i.wrapT=i.wrapR=Bn,i.unpackAlignment=1,i.needsUpdate=!0,this.normalTexture=i,this.size=new V(e.sx*e.texel,e.sy*e.texel,e.sz*e.texel)}texture;normalTexture;size;upload(){this.texture.needsUpdate=!0,this.normalTexture.needsUpdate=!0}}const ty=new Hn(2,2),sf=`
  precision highp float;
  precision highp sampler3D;
  // L1 SH: Y00 = 0.282095, Y1 = 0.488603 * (y, z, x)
  float shEval(vec4 c, vec3 d) { return c.x * 0.282095 + 0.488603 * (c.y * d.y + c.z * d.z + c.w * d.x); }
  vec4 cosLobe(vec3 d) { return vec4(0.886227, 1.023328 * d.y, 1.023328 * d.z, 1.023328 * d.x); }
`,ny=sf+`
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
`,iy=sf+`
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
`;class sy{constructor(e,t,i=1){this.gl=e,this.gi=t;const s=t.volume;this.size=new V(Math.ceil(s.sx/i),Math.ceil(s.sy/i),Math.ceil(s.sz/i)),this.worldSize=t.size.clone();const r=()=>{const a=new pd(this.size.x,this.size.y,this.size.z,{type:Dn,format:Gt,minFilter:at,magFilter:at,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});return a.texture.wrapS=a.texture.wrapT=a.texture.wrapR=Bn,a};for(let a=0;a<3;a++)this.seed.push(r()),this.ping.push(r()),this.pong.push(r());this.injectMat=new Cc({glslVersion:pa,vertexShader:"in vec3 position; void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:ny,uniforms:{uDirect:{value:t.texture},uNormal:{value:null},uSrcSize:{value:new V(s.sx,s.sy,s.sz)},uDstSize:{value:this.size.clone()},uLayer:{value:0},uDecode:{value:2},uChannel:{value:0},uSkyAmbient:{value:new V(.3,.4,.6)},uTime:{value:0},uBoost:{value:8}},depthTest:!1,depthWrite:!1}),this.propMat=new Cc({glslVersion:pa,vertexShader:"in vec3 position; void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:iy,uniforms:{uPrev:{value:null},uSeed:{value:null},uDirect:{value:t.texture},uDstSize:{value:this.size.clone()},uLayer:{value:0},uGain:{value:this.gain}},depthTest:!1,depthWrite:!1}),this.quad=new wt(ty,this.injectMat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}size;worldSize;seed=[];ping=[];pong=[];injectMat;propMat;quad;cam=new Ds(-1,1,1,-1,0,1);scene=new Hi;iterations=0;gain=.58;setSources(e,t){this.injectMat.uniforms.uNormal.value=e,this.injectMat.uniforms.uDecode.value=t}setBoost(e){this.injectMat.uniforms.uBoost.value=e}setSky(e){this.injectMat.uniforms.uSkyAmbient.value.set(...e)}get textures(){return[this.ping[0].texture,this.ping[1].texture,this.ping[2].texture]}runLayers(e,t,i){this.quad.material=e;for(let s=0;s<3;s++){i(s);for(let r=0;r<this.size.z;r++)e.uniforms.uLayer.value=r,this.gl.setRenderTarget(t[s],r),this.gl.render(this.scene,this.cam)}this.gl.setRenderTarget(null)}inject(e){this.injectMat.uniforms.uTime.value=e,this.runLayers(this.injectMat,this.seed,t=>{this.injectMat.uniforms.uChannel.value=t})}step(e=1){for(let t=0;t<e;t++){this.propMat.uniforms.uGain.value=this.gain,this.runLayers(this.propMat,this.pong,s=>{this.propMat.uniforms.uPrev.value=this.ping[s].texture,this.propMat.uniforms.uSeed.value=this.seed[s].texture});const i=this.ping;this.ping=this.pong,this.pong=i,this.iterations++}}dispose(){for(const e of[...this.seed,...this.ping,...this.pong])e.dispose()}}const Qr=Dt.length,rf=`
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
        uniform sampler3D uSh2;`,af=`
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
`;function ry(n){return{uGi:n.uGi,uGiSize:n.uGiSize,uGiTexel:n.uGiTexel,uGiDecode:n.uGiDecode,uGiStrength:n.uGiStrength,uSkyZenith:n.uSkyZenith,uSkyHorizon:n.uSkyHorizon,uSkySunColor:n.uSkySunColor,uSunDir:n.uSunDir,uDaylight:n.uDaylight,uSh0:n.uSh0,uSh1:n.uSh1,uSh2:n.uSh2}}const of=(n,e)=>({SC_CONES:n?4:6,SC_STEPS:n?14:28,SC_SPEC:n?0:1,SC_GI_SH:e==="sh"?1:0});function hs(n,e,t=!1,i="sh",s="full",r){const a=new Float32Array(Qr),o=new Float32Array(Qr*3),l=new Float32Array(Qr*3);for(const u of Dt)a[u.id]=u.scale,l[u.id*3]=u.albedo[0],l[u.id*3+1]=u.albedo[1],l[u.id*3+2]=u.albedo[2],u.emissive&&(o[u.id*3]=u.emissive[0],o[u.id*3+1]=u.emissive[1],o[u.id*3+2]=u.emissive[2]);const c=r?{...r,uTexLocal:{value:1},uTexOrigin:{value:new V},uFade:{value:1},uIceMode:{value:2}}:{uAlbedo:{value:n.albedo},uNormal:{value:n.normal},uMatScale:{value:a},uMatEmissive:{value:o},uMatAlbedo:{value:l},uGi:{value:e.texture},uGiSize:{value:e.size.clone()},uGiTexel:{value:e.volume.texel},uGiDecode:{value:Hl},uGiStrength:{value:1},uSkyZenith:{value:new V(.2,.36,.72)},uSkyHorizon:{value:new V(.6,.7,.82)},uSkySunColor:{value:new V(1,1,1)},uSunDir:{value:new V(0,1,0)},uTime:{value:0},uDaylight:{value:1},uSh0:{value:null},uSh1:{value:null},uSh2:{value:null},uCursor:{value:new Mt(0,0,0,0)},uCursorShape:{value:0},uCursorExt:{value:new V(.5,.5,.5)},uTexLocal:{value:0},uTexOrigin:{value:new V},uFade:{value:1},uMorphBand:{value:ux},uFromT0:{value:-1e9},uFromDur:{value:0},uIceMode:{value:0},uSceneColor:{value:null},uSceneDepth:{value:null},uResolution:{value:new Ce(1,1)},uNear:{value:.08},uFar:{value:1200},uProjection:{value:new Ze},uIceShadow:{value:null},uIceShadowMatrix:{value:new Ze},uIceCaustic:{value:0},uIceReach:{value:56},uSeaLevel:{value:0},uIceDebug:{value:0}},h=new Ma({color:16777215,roughness:1,metalness:0,side:kn}),f=of(t,i);return s!=="full"&&(f.SC_SPEC=0),h.defines={SC_MATERIALS:Qr,SC_GRASS:Ts,SC_DIRT:Es,SC_SNOW:Fn,SC_STONE:ar,SC_ICE:bn,SC_LITE:s==="full"?0:1,SC_BASIC:s==="basic"?1:0,...f},h.name="terrain-"+s,h.onBeforeCompile=u=>{Object.assign(u.uniforms,c),u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
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
        vFace = aFace;`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
        precision highp sampler2DArray;
        precision highp sampler3D;
        uniform sampler2DArray uAlbedo;
        uniform sampler2DArray uNormal;
        uniform float uMatScale[SC_MATERIALS];
        uniform vec3 uMatEmissive[SC_MATERIALS];
        uniform vec3 uMatAlbedo[SC_MATERIALS];
        ${rf}
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
        ${af}
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
        }`)},h.onBeforeCompile=(u=>(d,m)=>{u(d,m),d.fragmentShader=d.fragmentShader.replace("#include <lights_fragment_begin>",We.lights_fragment_begin.replace("vDirectionalShadowCoord[ i ] ) : 1.0;",`vDirectionalShadowCoord[ i ] ) : 1.0;
		directLight.color *= iceCaustic(vWorldPos);`)),d.fragmentShader=d.fragmentShader.replace("#include <dithering_fragment>",`
      #include <dithering_fragment>
      // belt and braces: a NaN here becomes a black bloom blob three passes later
      if (any(isnan(gl_FragColor.rgb)) || any(isinf(gl_FragColor.rgb))) gl_FragColor.rgb = vec3(0.0);
      if (uIceDebug > 7.5 && uIceMode > 0.5 && uIceMode < 1.5) gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
      if (uIceDebug > 9.5 && uIceDebug < 10.5) gl_FragColor = vec4(iceCaustic(vWorldPos) * 0.5, 1.0);
      if (uIceDebug > 10.5) { vec4 lp = uIceShadowMatrix * vec4(vWorldPos, 1.0); vec3 c = lp.xyz / lp.w; float d = texture2D(uIceShadow, c.xy).r; gl_FragColor = vec4(c.x, c.y, (c.z - d) * 20.0 + 0.5, 1.0); }`),d.fragmentShader=d.fragmentShader.replace("#include <fog_fragment>",`
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
      #endif`)})(h.onBeforeCompile),h.customProgramCacheKey=()=>"splinecraft-terrain-v23-"+s+"-"+(t?"cheap":"full")+"-"+i,{material:h,uniforms:c}}function zh(n){const e=new Eu({depthPacking:uu});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aMats; attribute vec3 aBary; flat varying vec3 vMatsD; varying vec3 vBaryD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMatsD = aMats; vBaryD = aBary;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
flat varying vec3 vMatsD; varying vec3 vBaryD;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          int m0 = int(vMatsD.x + 0.5), m1 = int(vMatsD.y + 0.5), m2 = int(vMatsD.z + 0.5);
          vec3 bw = clamp(vBaryD, 0.0, 1.0);
          float iceW = ((m0 == ${bn} ? bw.x : 0.0) + (m1 == ${bn} ? bw.y : 0.0) + (m2 == ${bn} ? bw.z : 0.0)) / max(bw.x + bw.y + bw.z, 1e-4);
          if (${n?"iceW <= 0.5":"iceW > 0.5"}) discard;
        }`)},e.customProgramCacheKey=()=>"splinecraft-ice-depth-"+(n?"only":"none"),e}const ay=.08,oy=.45;class ly{mesh;uniforms={uSunDir:{value:new V(0,1,0)},uSunColor:{value:new V(1,1,1)},uZenith:{value:new V(.2,.36,.72)},uHorizon:{value:new V(.6,.7,.82)},uDaylight:{value:1},uTime:{value:0},uCloud:{value:.55}};constructor(){const e=new ot({uniforms:this.uniforms,side:Bt,depthWrite:!1,fog:!1,vertexShader:`
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
        }`});this.mesh=new wt(new Bl(1,32,16),e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.mesh.scale.setScalar(900)}}const Ql=n=>Math.round(n/b);function dn(n,e,t,i){if(e<0||t<0||i<0||e>=n.nx-1||t>=n.ny-1||i>=n.nz-1)return!1;const s=n.index(e,t,i),r=n.hard[s];if(r!==0&&pt(r)){const h=n.sub[s]===0?en:n.sub[s];if(ku(h)>13)return!1}const a=n.density,o=n.ny*n.nz,l=n.nz;let c=0;return a[s]>0&&c++,a[s+1]>0&&c++,a[s+l]>0&&c++,a[s+l+1]>0&&c++,a[s+o]>0&&c++,a[s+o+1]>0&&c++,a[s+o+l]>0&&c++,a[s+o+l+1]>0&&c++,c<6}function cy(n,e,t,i){for(let s=t+1;s<n.ny-1;s++)if(!dn(n,e,s,i))return!1;return!0}function lf(n,e,t){n.water.fill(0);const i=Ql(e),s=[],r=n.water,a=Math.min(i-1,n.ny-2);if(a<0)return 0;for(let o=0;o<n.nx-1;o++)for(let l=0;l<n.nz-1;l++)if(dn(n,o,a,l)&&cy(n,o,a,l)){const c=n.index(o,a,l);r[c]||(r[c]=vt,t&&(t[c]=vt),s.push(o,a,l))}return gy(n,s,i,t)}function hy(n,e,t){let i=0;for(let s=Math.max(0,e.x0);s<Math.min(n.nx-1,e.x1);s++)for(let r=Math.max(0,e.y0);r<Math.min(n.ny-1,e.y1);r++)for(let a=Math.max(0,e.z0);a<Math.min(n.nz-1,e.z1);a++){const o=n.index(s,r,a);n.water[o]&&(n.water[o]=0,i++),t&&(t[o]=0)}return i}function uy(n,e){const t=n.water.slice(),i=new Uint8Array(n.water.length);return lf(n,e,i),n.water.set(t),i}function fy(n,e,t,i,s){if(!n.inBounds(e,t,i)||!n.water[n.index(e,t,i)])return null;const r=n.water,a=n.ny*n.nz,o=n.nz,l=[e,t,i];r[n.index(e,t,i)]=0,s&&(s[n.index(e,t,i)]=0);let c={x0:e,y0:t,z0:i,x1:e+1,y1:t+1,z1:i+1},h=0;for(;l.length;){const f=l.pop(),u=l.pop(),d=l.pop();h++,c=Ml(c,{x0:d,y0:u,z0:f,x1:d+1,y1:u+1,z1:f+1});const m=n.index(d,u,f),v=(g,p,x,M)=>{r[M]&&(r[M]=0,s&&(s[M]=0),l.push(g,p,x))};d>0&&v(d-1,u,f,m-a),d<n.nx-2&&v(d+1,u,f,m+a),u>0&&v(d,u-1,f,m-o),u<n.ny-2&&v(d,u+1,f,m+o),f>0&&v(d,u,f-1,m-1),f<n.nz-2&&v(d,u,f+1,m+1);for(let g=2;g<=3;g++)if(u+g<n.ny-1&&r[m+g*o]&&!r[m+o]){v(d,u+g,f,m+g*o);break}}return{box:c,cells:h}}const Js=8,dy=2,py=8;class my{constructor(e,t,i){this.field=e,this.seaLevel=t,this.sea=i,this.motion=new Uint8Array(e.water.length)}queued=new Set;queue=[];parkedCells=[];parkedSet=new Set;sources=new Map;motion;get active(){return this.queue.length}get parked(){return this.parkedCells.length}bubbleSort(e){const t=this.field,i=t.ny*t.nz,s=t.nz,r=o=>{const l=Math.floor(o/i),c=Math.floor((o-l*i)/s);return[l,c,o-l*i-c*s]};if(!e||e.r<=0){for(const o of this.parkedCells)this.activate(o);this.parkedCells=[],this.parkedSet.clear();return}if(this.parkedCells.length){const o=[];for(const l of this.parkedCells){const[c,h,f]=r(l);uh(e,c,h,f)?(this.parkedSet.delete(l),this.activate(l)):o.push(l)}this.parkedCells=o}const a=[];for(const o of this.queue){const[l,c,h]=r(o);uh(e,l,c,h)?a.push(o):(this.queued.delete(o),this.parkedSet.has(o)||(this.parkedSet.add(o),this.parkedCells.push(o)))}this.queue=a}activate(e){!this.queued.has(e)&&!this.parkedSet.has(e)&&(this.queued.add(e),this.queue.push(e))}activateAround(e){const t=this.field,i=t.ny*t.nz,s=t.nz,r=e%s,a=(e-r)/s,o=a%t.ny,l=(a-o)/t.ny;this.activate(e),l>0&&this.activate(e-i),l<t.nx-2&&this.activate(e+i),o>0&&this.activate(e-s),o<t.ny-2&&this.activate(e+s),r>0&&this.activate(e-1),r<t.nz-2&&this.activate(e+1)}wake(e){const t=this.field,i=t.water;let s=null;const r=Math.max(0,e.x0-1),a=Math.max(0,e.y0-1),o=Math.max(0,e.z0-1),l=Math.min(t.nx-2,e.x1),c=Math.min(t.ny-2,e.y1),h=Math.min(t.nz-2,e.z1);for(let f=r;f<=l;f++)for(let u=a;u<=c;u++)for(let d=o;d<=h;d++){const m=t.index(f,u,d);i[m]&&!dn(t,f,u,d)&&(i[m]=0,this.sea[m]=0,this.sources.delete(m),s=Ml(s,{x0:f,y0:u,z0:d,x1:f+1,y1:u+1,z1:d+1})),i[m]||this.sea[m]?this.activateAround(m):dn(t,f,u,d)&&this.activate(m)}return this.fillStanding(r,a,o,l,c,h),s}fillStanding(e,t,i,s,r,a){const o=this.field,l=o.water,c=this.sea,h=o.ny*o.nz,f=o.nz,u=(p,x,M)=>p>=e&&p<=s&&x>=t&&x<=r&&M>=i&&M<=a,d=(p,x)=>x+Math.min(c[p],vt)/vt,m=new Map,v=[],g=(p,x,M,y,S)=>{if(S<=M||!u(x,M,y)||l[p]||!dn(o,x,M,y))return;const E=m.get(p);E!==void 0&&E>=S||(m.set(p,S),v.push(p))};for(let p=e;p<=s;p++)for(let x=t;x<=r;x++)for(let M=i;M<=a;M++){const y=p*h+x*f+M;if(l[y]||!dn(o,p,x,M))continue;let S=-1;p>0&&c[y-h]&&l[y-h]&&(S=Math.max(S,d(y-h,x))),p+1<o.nx-1&&c[y+h]&&l[y+h]&&(S=Math.max(S,d(y+h,x))),x>0&&c[y-f]&&l[y-f]&&(S=Math.max(S,d(y-f,x-1))),x+1<o.ny-1&&c[y+f]&&l[y+f]&&(S=Math.max(S,d(y+f,x+1))),M>0&&c[y-1]&&l[y-1]&&(S=Math.max(S,d(y-1,x))),M+1<o.nz-1&&c[y+1]&&l[y+1]&&(S=Math.max(S,d(y+1,x))),S>x&&g(y,p,x,M,S)}for(;v.length;){const p=v.pop(),x=m.get(p),M=Math.floor(p/h),y=Math.floor((p-M*h)/f),S=p-M*h-y*f;M>0&&g(p-h,M-1,y,S,x),M+1<o.nx-1&&g(p+h,M+1,y,S,x),y>0&&g(p-f,M,y-1,S,x),y+1<o.ny-1&&g(p+f,M,y+1,S,x),S>0&&g(p-1,M,y,S-1,x),S+1<o.nz-1&&g(p+1,M,y,S+1,x)}for(const[p,x]of m){const M=Math.floor(p/h),y=Math.floor((p-M*h)/f),S=Math.max(1,Math.min(vt,Math.round((x-y)*vt)));l[p]=S,c[p]=S,this.activateAround(p)}}addSource(e,t,i,s){const r=this.field.index(e,t,i);this.sources.set(r,s),this.activateAround(r)}dropDrySources(){let e=0;for(const t of Array.from(this.sources.keys()))this.field.water[t]||(this.sources.delete(t),e++);return e}step(e=null){const t=this.field,i=t.water,s=this.sea,r=t.ny*t.nz,a=t.nz;for(const[d,m]of this.sources)this.parkedSet.has(d)||(i[d]=Math.min(255,i[d]+m),this.activate(d));this.bubbleSort(e);const o=this.queue;this.queue=[],this.queued.clear(),o.sort((d,m)=>d-m);const l=new Map,c=(d,m,v)=>{v<=0||(l.set(d,(l.get(d)??0)-v),l.set(m,(l.get(m)??0)+v))},h=d=>d<=vt?d:d<2*vt+Js?(vt*vt+d*Js)/(vt+Js):(d+Js)/2;for(const d of o){let m=i[d]+(l.get(d)??0);if(m<=0)continue;const v=d%a,g=(d-v)/a,p=g%t.ny,x=(g-p)/t.ny;let M=!1;if(p>0){const S=d-a;if(dn(t,x,p-1,v)){const E=i[S]+(l.get(S)??0),D=Math.min(m,Math.max(0,Math.floor(h(m+E)-E)));D>0&&(c(d,S,D),m-=D),M=E+D<vt}}if(M||m<py)continue;const y=[];x>0&&y.push([x-1,p,v,d-r]),x<t.nx-2&&y.push([x+1,p,v,d+r]),v>0&&y.push([x,p,v-1,d-1]),v<t.nz-2&&y.push([x,p,v+1,d+1]);for(const[S,E,D,C]of y){if(!dn(t,S,E,D))continue;const A=i[C]+(l.get(C)??0);if(A>=m)continue;const w=m-A,_=Math.min(m,Math.max(w>=2?1:0,Math.floor(w/(m>vt&&A>=vt?2:4))));_>0&&(c(d,C,_),m-=_)}if(!(m<=vt)&&p<t.ny-2&&dn(t,x,p+1,v)){const S=d+a,E=i[S]+(l.get(S)??0),D=m-h(m+E),C=Math.min(m-vt,Math.max(0,D>.5?Math.max(1,Math.floor(D)):0));C>0&&c(d,S,C)}}let f=null;const u=new Set;for(const[d,m]of l){if(m===0)continue;let v=i[d]+m;if(s[d]&&(v=Math.max(v,s[d])),v<dy&&!s[d]&&(v=0),v=Math.max(0,Math.min(255,v)),v===i[d])continue;this.motion[d]=Math.min(255,Math.abs(v-i[d])*3),i[d]=v,u.add(d);const g=d%a,p=(d-g)/a,x=p%t.ny,M=(p-x)/t.ny;f=Ml(f,{x0:M,y0:x,z0:g,x1:M+1,y1:x+1,z1:g+1})}for(const d of u)this.activateAround(d);for(const d of o)!u.has(d)&&this.motion[d]>0&&(this.motion[d]=Math.floor(this.motion[d]*.6));return{changed:f,active:this.queue.length,cells:Array.from(u)}}settleTable(){const e=this.field.water,t=this.sea;let i=0;for(let s=0;s<e.length;s++)e[s]&&!t[s]&&(t[s]=e[s],i++);return i}settle(e=2e3){let t=0;for(;t<e&&this.queue.length;)t++,this.step();return t}}function Ml(n,e){return n?{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}:e}function gy(n,e,t,i){const s=n.water;let r=0;const a=n.ny*n.nz,o=n.nz;for(;e.length;){const l=e.pop(),c=e.pop(),h=e.pop(),f=n.index(h,c,l),u=(d,m,v,g)=>{s[g]||m>=t||dn(n,d,m,v)&&(s[g]=i?Math.min(255,vt+Js*Math.max(0,t-1-m)):vt,i&&(i[g]=s[g]),r++,e.push(d,m,v))};h>0&&u(h-1,c,l,f-a),h<n.nx-2&&u(h+1,c,l,f+a),c>0&&u(h,c-1,l,f-o),c<t-1&&u(h,c+1,l,f+o),l>0&&u(h,c,l-1,f-1),l<n.nz-2&&u(h,c,l+1,f+1)}return r}const ui=0,$e=2,vy=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],xy=[[0,0,0,0],[1,0,0,1],[0,1,0,0],[0,0,0,1],[0,0,1,0],[1,0,1,1],[0,1,1,0],[0,0,1,1],[0,0,0,2],[1,0,0,2],[1,1,0,2],[0,1,0,2]];let Xs=null;function My(n){if(Xs&&Xs.B===n)return Xs;const e=n*n*n;return Xs={B:n,val:new Float32Array(e),pval:new Float32Array(e),ext:new Uint8Array(e),own:new Uint8Array(e),vmap:new Int32Array(e*3),colBase:new Int32Array(n*n),colWet:new Uint8Array(n*n),near:new Uint8Array(n*n),lo:new Int16Array(n*n),hi:new Int16Array(n*n)},Xs}function yy(n,e,t,i,s){const r=[],a=n.nx-1,o=n.ny-1,l=n.nz-1,c=n.water;for(let h=e;h<Math.min(e+s,a);h++)for(let f=t;f<Math.min(t+s,o);f++){const u=n.index(h,f,0);for(let d=i;d<Math.min(i+s,l);d++)c[u+d]&&r.push(u+d)}return r}const wy={positions:new Float32Array(0),prev:new Float32Array(0),normals:new Float32Array(0),shore:new Float32Array(0),flow:new Float32Array(0),indices:new Uint32Array(0),cells:0};function Sy(n,e,t,i,s,r={}){const a=n.nx-1,o=n.ny-1,l=n.nz-1,c=n.water,h=n.ny*n.nz,f=n.nz,u=s+1+2*$e,d=My(u),m=d.val,v=r.shown?d.pval:null,g=d.ext,p=d.own,x=r.shown,M=r.flow,y=G=>Math.min(c[G],vt)/vt,S=n.density,E=G=>{let H=0;for(const $ of[0,1,h,h+1]){const te=S[G+$],ce=S[G+$+f];H+=te>0?ce>0?1:te/(te-ce):0}return H*.25},D=(G,H)=>Math.min(1,E(G)+H),C=G=>x.get(G)??0,A=d.colBase,w=d.colWet.fill(0),_=Math.max(0,$e-t),I=Math.min(u-1,o-1-t+$e),z=f,F=(G,H)=>A[G]+(t-$e+H)*z,O=(G,H)=>{const $=F(G,H),te=Math.floor($/h),ce=Math.floor(($-te*h)/f),de=$-te*h-ce*f;return dn(n,te,ce,de)};let P=0,L=u,U=-1,W=u,Q=-1,j=u,ue=-1;for(let G=0;G<u;G++){const H=e-$e+G;for(let $=0;$<u;$++){const te=i-$e+$,ce=G*u+$;if(H<0||te<0||H>=a||te>=l){A[ce]=-1;continue}A[ce]=H*h+te;let de=0,oe=u,me=-1;const Me=G>=$e&&$>=$e&&G<$e+s&&$<$e+s,ge=H*h+te+(t-$e)*f;for(let ae=_;ae<=I;ae++)c[ge+ae*f]&&(de=1,ae<oe&&(oe=ae),me=ae,Me&&ae>=$e&&ae<$e+s&&P++);de&&(w[ce]=1,G<L&&(L=G),G>U&&(U=G),$<j&&(j=$),$>ue&&(ue=$),oe<W&&(W=oe),me>Q&&(Q=me))}}if(U<0)return{...wy,cells:P};const Ae=3;L=Math.max(0,L-Ae),U=Math.min(u-1,U+Ae),j=Math.max(0,j-Ae),ue=Math.min(u-1,ue+Ae),W=Math.max(0,W-Ae),Q=Math.min(u-1,Q+Ae);const _e=d.lo,we=d.hi;for(let G=L;G<=U;G++)for(let H=j;H<=ue;H++){const $=G*u+H;_e[$]=u,we[$]=-1;const te=$*u+W;m.fill(-1,te,te+(Q-W+1)),v&&v.fill(-1,te,te+(Q-W+1)),g.fill(0,te,te+(Q-W+1)),p.fill(0,te,te+(Q-W+1))}const K=(G,H,$,te)=>{const ce=G*u,de=Math.max(_,W),oe=Math.min(I,Q);let me=de;for(;me<=oe;){if(H(F(G,me))<=0){me++;continue}const Me=me;let ge=me;for(;ge+1<=oe&&H(F(G,ge+1))>0;)ge++;const ae=D(F(G,ge),H(F(G,ge))),Ie=re=>re<_||re>I||!O(G,re);let k=Me,he=ge+ae;Me===_&&Me===0?k=-1e9:Ie(Me-1)&&(k=Ie(Me-2)?Me-2:Me-1),ge===I&&ge===u-1?he=1e9:ae>=1&&Ie(ge+1)&&(he=Ie(ge+2)?ge+3:ge+2);const le=Math.max(W,Me-2),ve=Math.min(Q,ge+2);for(let re=le;re<=ve;re++){const ie=re+.5,Ee=Math.max(-1,Math.min(1,Math.min(ie-k,he-ie))),Le=ce+re;Ee>$[Le]&&($[Le]=Ee),te&&Ee>-1&&(p[Le]=1,re<_e[G]&&(_e[G]=re),re>we[G]&&(we[G]=re))}me=ge+1}};for(let G=L;G<=U;G++)for(let H=j;H<=ue;H++){const $=G*u+H;w[$]&&K($,y,m,!0)}const ne=d.near.fill(0);for(let G=L;G<=U;G++)for(let H=j;H<=ue;H++)if(w[G*u+H])for(let $=-1;$<=1;$++)for(let te=-1;te<=1;te++){const ce=G+$,de=H+te;ce>=0&&de>=0&&ce<u&&de<u&&(ne[ce*u+de]=1)}for(let G=Math.max(1,L);G<=Math.min(u-2,U);G++)for(let H=Math.max(1,j);H<=Math.min(u-2,ue);H++){const $=G*u+H;if(!ne[$]||A[$]<0)continue;const te=$-u,ce=$+u,de=$-1,oe=$+1,me=Math.max(_,Math.min(_e[te],_e[ce],_e[de],_e[oe])),Me=Math.min(I,Math.max(we[te],we[ce],we[de],we[oe]));for(let ge=me;ge<=Me;ge++){const ae=$*u+ge;if(p[ae])continue;let Ie=-1;p[ae-u*u]&&m[ae-u*u]>Ie&&(Ie=m[ae-u*u]),p[ae+u*u]&&m[ae+u*u]>Ie&&(Ie=m[ae+u*u]),p[ae-u]&&m[ae-u]>Ie&&(Ie=m[ae-u]),p[ae+u]&&m[ae+u]>Ie&&(Ie=m[ae+u]),!(Ie<=-1||O($,ge))&&(m[ae]=Ie,g[ae]=1,ge<_e[$]&&(_e[$]=ge),ge>we[$]&&(we[$]=ge))}}if(v){for(let G=L;G<=U;G++)for(let H=j;H<=ue;H++){const $=G*u+H;ne[$]&&A[$]>=0&&K($,C,v,!1)}for(let G=Math.max(1,L);G<=Math.min(u-2,U);G++)for(let H=Math.max(1,j);H<=Math.min(u-2,ue);H++){const $=G*u+H;if(ne[$])for(let te=W;te<=Q;te++){const ce=$*u+te;if(!g[ce])continue;let de=-1;p[ce-u*u]&&v[ce-u*u]>de&&(de=v[ce-u*u]),p[ce+u*u]&&v[ce+u*u]>de&&(de=v[ce+u*u]),p[ce-u]&&v[ce-u]>de&&(de=v[ce-u]),p[ce+u]&&v[ce+u]>de&&(de=v[ce+u]),v[ce]=de}}}const fe=[],Be=[],Te=[],Ue=[],ut=[],N=[],et=d.vmap;for(let G=L;G<=U;G++)for(let H=j;H<=ue;H++){const $=(G*u+H)*u*3;et.fill(-1,$+W*3,$+(Q+1)*3)}const Fe=new Int32Array(12),Ne=[u*u,1,u],Re=(G,H)=>{H[0]=(m[G+u*u]-m[G-u*u])*.5,H[1]=(m[G+1]-m[G-1])*.5,H[2]=(m[G+u]-m[G-u])*.5},Qe=[0,0,0],be=[0,0,0],He=G=>{if(!M)return 0;const H=Math.floor(G/u),$=G%u;return A[H]<0||$<_||$>I?0:M.get(F(H,$))??0},yt=(G,H)=>G>=ui!=H>=ui,mt=(G,H)=>{const $=G*3+H;let te=et[$];if(te>=0)return te;const ce=Ne[H],de=G+ce,oe=m[G],me=m[de];let Me=(oe-ui)/(oe-me);Me>=0&&Me<=1||(Me=.5);const ge=Math.floor(G/(u*u)),ae=G%u,Ie=Math.floor(G/u)%u;let k=e-$e+ge+.5,he=t-$e+ae+.5,le=i-$e+Ie+.5;H===0?k+=Me:H===1?he+=Me:le+=Me,te=fe.length/3,fe.push(k*b,he*b,le*b),Re(G,Qe),Re(de,be);let ve=Qe[0]+(be[0]-Qe[0])*Me,re=Qe[1]+(be[1]-Qe[1])*Me,ie=Qe[2]+(be[2]-Qe[2])*Me,Ee=Math.hypot(ve,re,ie);Ee<1e-6&&(ve=0,re=1,ie=0,Ee=1),ve=-ve/Ee,re=-re/Ee,ie=-ie/Ee,Te.push(ve,re,ie);let Le=Me;if(v){const Lt=v[G],In=v[de];if(yt(Lt,In))Le=(Lt-ui)/(Lt-In);else{const wn=v[G-ce],Yi=v[de+ce];yt(wn,Lt)?Le=(wn-ui)/(wn-Lt)-1:yt(In,Yi)?Le=1+(In-ui)/(In-Yi):Lt<ui?Le=Lt>=In?0:1:Le=Lt<=In?0:1}Le>=-1&&Le<=2||(Le=Me)}let ct=e-$e+ge+.5,Je=t-$e+ae+.5,mn=i-$e+Ie+.5;return H===0?ct+=Le:H===1?Je+=Le:mn+=Le,Be.push(ct*b,Je*b,mn*b),Ue.push(g[G]||g[de]?1:0),ut.push(Math.max(He(G),He(de),(1-Math.max(re,0))*.35)),et[$]=te,te},B=Math.max(0,L-$e),T=Math.min(s-1,U-$e-1),q=Math.max(0,j-$e),ee=Math.min(s-1,ue-$e-1);for(let G=B;G<=T;G++)for(let H=q;H<=ee;H++){const $=(G+$e)*u+H+$e,te=$+u,ce=$+1,de=te+1,oe=Math.min(_e[$],_e[te],_e[ce],_e[de]),me=Math.max(we[$],we[te],we[ce],we[de]);if(me<0)continue;const Me=Math.max(0,oe-$e-1),ge=Math.min(s-1,me-$e);for(let ae=Me;ae<=ge;ae++){let Ie=0;for(let le=0;le<8;le++){const ve=vy[le];m[((G+$e+ve[0])*u+H+$e+ve[2])*u+ae+$e+ve[1]]>=ui&&(Ie|=1<<le)}const k=R1[Ie];if(k===0)continue;for(let le=0;le<12;le++){if(!(k&1<<le))continue;const ve=xy[le];Fe[le]=mt(((G+$e+ve[0])*u+H+$e+ve[2])*u+ae+$e+ve[1],ve[3])}const he=Ie*16;for(let le=0;le<16;le+=3){const ve=mo[he+le];if(ve<0)break;const re=mo[he+le+1],ie=mo[he+le+2];N.push(Fe[ve],Fe[ie],Fe[re])}}}return{positions:Float32Array.from(fe),prev:Float32Array.from(Be),normals:Float32Array.from(Te),shore:Float32Array.from(Ue),flow:Float32Array.from(ut),indices:Uint32Array.from(N),cells:P}}const Ay=512,Fh=Dt.length;Dt.length+1;function _y(n){const e=(t,i)=>{const s=new Pl(t,n.size,n.size,n.layers);return s.format=Gt,s.type=_t,s.colorSpace=i?lt:pn,s.wrapS=s.wrapT=nr,s.minFilter=Un,s.magFilter=at,s.generateMipmaps=!0,s.anisotropy=8,s.needsUpdate=!0,s};return{albedo:e(n.albedo,!0),normal:e(n.normal,!1),swatches:n.swatches}}const _a=16,tr=8,Ey=`
  precision highp float;
  uniform sampler2D uPrev, uMask;
  uniform vec2 uTexel, uWorld;
  uniform float uK, uDamp, uRest, uN;
  uniform vec4 uImp[${_a}];
  uniform vec4 uObs[${tr}];
  uniform float uNObs;
  varying vec2 vUv;
  // 1 where water can move: the shore mask, minus any moving body sitting on this texel
  float open(vec2 uv, vec2 p) {
    float m = texture2D(uMask, uv).r;
    for (int i = 0; i < ${tr}; i++) {
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
    for (int i = 0; i < ${_a}; i++) {
      if (float(i) >= uN) break;
      vec4 im = uImp[i];
      float d2 = dot(p - im.xy, p - im.xy);
      v += im.w * exp(-d2 / (im.z * im.z));
    }
    // a moving body pushes the water at its rim, in proportion to its speed — a small, bounded push:
    // this ran every step at ten times the size, and a player standing in the sea pumped the surface
    // down to the clamp and left a pit there for good (damping only ever acted on velocity)
    for (int i = 0; i < ${tr}; i++) {
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
  }`;class Ty{constructor(e,t,i,s){this.worldX=e,this.worldZ=t,this.level=s;const r=Math.max(16,Math.round(e*i)),a=Math.max(16,Math.round(t*i)),o=()=>new ht(r,a,{type:Dn,format:Gt,minFilter:at,magFilter:at,depthBuffer:!1,stencilBuffer:!1});this.rts=[o(),o()],this.mask=new xa(new Uint8Array(4),1,1,Mi,_t),this.mask.minFilter=at,this.mask.magFilter=at,this.mask.needsUpdate=!0,this.mat=new ot({vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Ey,uniforms:{uPrev:{value:null},uMask:{value:this.mask},uTexel:{value:new Ce(1/r,1/a)},uWorld:{value:new Ce(e,t)},uK:{value:.06},uDamp:{value:.988},uRest:{value:.004},uN:{value:0},uImp:{value:Array.from({length:_a},()=>new Mt)},uObs:{value:Array.from({length:tr},()=>new Mt)},uNObs:{value:0}},depthTest:!1,depthWrite:!1}),this.scene.add(new wt(new Hn(2,2),this.mat))}rts;cur=0;mat;scene=new Hi;cam=new Ds(-1,1,1,-1,0,1);mask;pending=[];acc=0;get texture(){return this.rts[this.cur].texture}get maskTexture(){return this.mask}get texelSize(){return this.mat.uniforms.uTexel.value}setMask(e){const t=Ql(this.level),i=Math.min(t-1,e.ny-2),s=e.nx-1,r=e.nz-1,a=new Uint8Array(s*r);if(i>=0)for(let o=0;o<r;o++)for(let l=0;l<s;l++)a[o*s+l]=e.water[e.index(l,i,o)]?255:0;this.mask.dispose(),this.mask=new xa(a,s,r,Mi,_t),this.mask.minFilter=at,this.mask.magFilter=at,this.mask.needsUpdate=!0,this.mat.uniforms.uMask.value=this.mask}setObstacles(e){const t=this.mat.uniforms,i=Math.min(tr,e.length);for(let s=0;s<i;s++)t.uObs.value[s].set(e[s][0],e[s][1],e[s][2],e[s][3]);t.uNObs.value=i}splash(e,t,i,s){this.pending.push(e,t,Math.max(.15,i),s)}step(e,t){this.acc=Math.min(this.acc+t,3/60);const i=this.mat.uniforms;let s=!0;for(;this.acc>=1/60;){this.acc-=1/60;const r=s?Math.min(_a,this.pending.length/4):0;for(let l=0;l<r;l++)i.uImp.value[l].set(this.pending[l*4],this.pending[l*4+1],this.pending[l*4+2],this.pending[l*4+3]);i.uN.value=r,i.uPrev.value=this.rts[this.cur].texture;const a=1-this.cur,o=e.getRenderTarget();e.setRenderTarget(this.rts[a]),e.render(this.scene,this.cam),e.setRenderTarget(o),this.cur=a,s=!1}s||(this.pending.length=0)}}const fi=3,by=.7,Cy=`
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
  }`,cf=`
  vec3 waterBody(vec3 light) { return vec3(0.02, 0.10, 0.16) * (light * 2.0 + 0.01); }
  // Seen through d metres of water: absorbed per metre (red first), blue-shifted, filled in with the body
  // colour, and dimmed for the light the water above the camera already took (uDim)
  vec3 underwaterGrade(vec3 c, float d, vec3 light, float dim) {
    vec3 absorb = exp(-d * vec3(0.55, 0.24, 0.15));
    return c * absorb * vec3(0.8, 0.92, 1.0) * dim + waterBody(light) * (1.0 - exp(-d * 0.15));
  }`,Dy=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 1.0, 1.0); }`,Ry=`
  precision highp sampler2DArray;
  #include <packing>
  uniform sampler2D inputBuffer, uSceneDepth;
  uniform sampler2DArray uNormal;
  uniform float uNear, uFar, uUnder, uDim, uLayer, uTime;
  uniform vec2 uResolution;
  uniform vec3 uLight;
  varying vec2 vUv;
  float viewZ(float ndcDepth) { return perspectiveDepthToViewZ(ndcDepth, uNear, uFar); }
  `+cf+`
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
  }`,Iy=`
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
  `+cf+`

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
  }`;function Py(n){const e=[];for(let t=0;t<n.length;t++)n[t]!==0&&e.push(t);return e}class cr extends Vt{constructor(e,t,i,s,r,a,o,l){super("WaterPass"),this.worldScene=e,this.cam=t,this.level=i,this.sim=new Ty(a,o,l,i),this.uniforms.uWorldSize.value.set(a,o),this.uniforms.uWaveTexel.value.copy(this.sim.texelSize),this.needsDepthTexture=!0,this.needsSwap=!0,this.uniforms.uNormal.value=s,this.grade.uniforms.uNormal.value=s,this.uniforms.uNear.value=t.near,this.uniforms.uFar.value=t.far,this.clip=new pi(new V(0,1,0),-i+.02),this.refl=r?new ht(1,1,{type:Dn,depthBuffer:!0,minFilter:at,magFilter:at}):null,this.uniforms.uReflect.value=r?1:0,this.refl&&(this.uniforms.uReflTex.value=this.refl.texture),this.material=new ot({uniforms:this.uniforms,vertexShader:Cy,fragmentShader:Iy,depthTest:!1,depthWrite:!1,side:Wt,transparent:!1}),this.fullscreenMaterial=this.grade}chunks=new Map;material;chunkCells=new Map;uniforms={uNormal:{value:null},uSceneColor:{value:null},uSceneDepth:{value:null},uReflTex:{value:null},uReflMatrix:{value:new Ze},uLayer:{value:Fh},uTime:{value:0},uNear:{value:.08},uFar:{value:1200},uReflect:{value:0},uUnder:{value:0},uResolution:{value:new Ce(1,1)},uSunDir:{value:new V(0,1,0)},uSunColor:{value:new V(1,1,1)},uZenith:{value:new V(.2,.36,.72)},uHorizon:{value:new V(.6,.7,.82)},uAmbient:{value:new V(.3,.4,.6)},uSh0:{value:null},uSh1:{value:null},uSh2:{value:null},uGiSize:{value:new V(1,1,1)},uGiTexel:{value:1},uGiLit:{value:0},uDim:{value:1},fogColor:{value:new qe},fogDensity:{value:.006},uWave:{value:null},uWaveMask:{value:null},uWorldSize:{value:new Ce(1,1)},uWaveTexel:{value:new Ce(1,1)}};shown=new Map;target=new Map;flowShown=new Map;glide=new Map;tracked=new Map;waterScene=new Hi;grade=new ot({uniforms:{inputBuffer:{value:null},uSceneDepth:{value:null},uNear:{value:.08},uFar:{value:1200},uUnder:{value:0},uLight:{value:new V(.3,.4,.6)},uDim:{value:1},uNormal:{value:null},uLayer:{value:Fh},uTime:{value:0},uResolution:{value:new Ce(1,1)}},vertexShader:Dy,fragmentShader:Ry,depthTest:!1,depthWrite:!1});refl;mirror=new $t;clip;sim;lastTime=-1;frustum=new ur;hasWater=!1;area=0;static chunksOf(e,t){const i=t.nx-1,s=t.ny-1,r=t.nz-1,a=Math.ceil(i/se),o=Math.ceil(s/se),l=Math.ceil(r/se),c=new Set,h=u=>Math.max(0,Math.floor((u-fi)/se)),f=(u,d)=>Math.min(d-1,Math.floor((u+fi)/se));for(let u=h(e.x0);u<=f(e.x1,a);u++)for(let d=h(e.y0);d<=f(e.y1,o);d++)for(let m=h(e.z0);m<=f(e.z1,l);m++)c.add(nt(u,d,m));return c}static chunksOfCells(e,t,i){const s=t.nx-1,r=t.ny-1,a=t.nz-1,o=Math.ceil(s/se),l=Math.ceil(r/se),c=Math.ceil(a/se),h=t.ny*t.nz,f=t.nz;for(const u of e){const d=Math.floor(u/h),m=Math.floor((u-d*h)/f),v=u-d*h-m*f,g=Math.floor(d/se),p=Math.floor(m/se),x=Math.floor(v/se),M=[g],y=[p],S=[x];d-g*se<fi&&g>0?M.push(g-1):g*se+se-d<=fi&&g+1<o&&M.push(g+1),m-p*se<fi&&p>0?y.push(p-1):p*se+se-m<=fi&&p+1<l&&y.push(p+1),v-x*se<fi&&x>0?S.push(x-1):x*se+se-v<=fi&&x+1<c&&S.push(x+1);for(const E of M)for(const D of y)for(const C of S)i.add(nt(E,D,C))}}rebuild(e,t=null,i,s=0,r=0,a=1/0){const o=e.nx-1,l=e.ny-1,c=e.nz-1,h=Math.ceil(o/se),f=Math.ceil(l/se),u=Math.ceil(c/se),d=e.water;if(!t){t=new Set;for(const S of this.chunks.keys())t.add(S);cr.chunksOfCells(Py(d),e,t)}const m=performance.now(),v=new Set,g=Math.floor(Ql(this.level)/se);let p=!1;s<=0&&(this.shown.clear(),this.target.clear(),this.glide.clear(),this.tracked.clear());const x=S=>Math.min(d[S],vt)/vt;let M=0;for(const S of t){if(M>0&&performance.now()-m>a){v.add(S);continue}M++;const E=Math.floor(S/(1024*1024)),D=Math.floor(S/1024)%1024,C=S%1024;if(E>=h||D>=f||C>=u)continue;(D===g||D===g-1)&&(p=!0);const A=E*se,w=D*se,_=C*se,I=yy(e,A,w,_,se);if(s>0){const L=this.glide.get(S),U=L&&L[1]>0?Math.min(1,Math.max(0,(r-L[0])/L[1])):1,W=this.tracked.get(S),Q=new Set;for(const j of I){const ue=x(j),Ae=this.shown.get(j);Ae===void 0?this.shown.set(j,W?0:ue):this.shown.set(j,Ae+((this.target.get(j)??ue)-Ae)*U),this.target.set(j,ue),Q.add(j)}if(W){for(const j of W)if(!Q.has(j)){const ue=(this.shown.get(j)??0)*(1-U);ue<.01?(this.shown.delete(j),this.target.delete(j)):(this.shown.set(j,ue),this.target.set(j,0),Q.add(j))}}this.tracked.set(S,Q),this.glide.set(S,[r,s])}if(i)for(const L of I){const U=Math.max(i[L]/255,(this.flowShown.get(L)??0)*by);U>.03?this.flowShown.set(L,U):this.flowShown.delete(L)}const z=Sy(e,A,w,_,se,{shown:s>0?this.shown:void 0,flow:this.flowShown});this.chunkCells.set(S,z.cells);let F=this.chunks.get(S);if(z.indices.length===0){F&&(this.waterScene.remove(F),F.geometry.dispose(),this.chunks.delete(S));continue}const O=new Xt;O.setAttribute("position",new Ge(z.positions,3)),O.setAttribute("normal",new Ge(z.normals,3)),O.setAttribute("aPrev",new Ge(z.prev,3)),O.setAttribute("aShore",new Ge(z.shore,1)),O.setAttribute("aFlow",new Ge(z.flow,1));const P=new Float32Array(z.positions.length/3*2);for(let L=0;L<P.length;L+=2)P[L]=r,P[L+1]=s;O.setAttribute("aGlide",new Ge(P,2)),O.setIndex(new Ge(z.indices,1)),O.computeBoundingBox(),O.boundingBox&&(O.boundingBox.min.y-=.5+b,O.boundingBox.max.y+=.5+b),O.computeBoundingSphere(),F?(F.geometry.dispose(),F.geometry=O):(F=new wt(O,this.material),this.waterScene.add(F),this.chunks.set(S,F))}let y=0;for(const S of this.chunkCells.values())y+=S;return this.hasWater=this.chunks.size>0,this.area=y*b*b,p&&(this.sim.setMask(e),this.uniforms.uWaveMask.value=this.sim.maskTexture),v}setObstacles(e){this.sim.setObstacles(e)}splash(e,t,i,s){this.sim.splash(e,t,i,s)}setUnderwater(e){this.uniforms.uUnder.value=e?1:0,this.grade.uniforms.uUnder.value=e?1:0}dispose(){}setDepthTexture(e){this.uniforms.uSceneDepth.value=e,this.grade.uniforms.uSceneDepth.value=e}setUnderwaterLight(e,t,i,s){this.grade.uniforms.uLight.value.set(e,t,i),this.grade.uniforms.uDim.value=s,this.uniforms.uDim.value=s}setSize(e,t){this.uniforms.uResolution.value.set(e,t),this.grade.uniforms.uResolution.value.set(e,t),this.refl?.setSize(Math.max(1,Math.floor(e*.5)),Math.max(1,Math.floor(t*.5)))}render(e,t,i){if(!t||!i)return;const s=this.uniforms.uTime.value,r=this.lastTime<0?1/60:Math.min(.1,Math.max(0,s-this.lastTime));this.lastTime=s,this.hasWater&&(this.sim.step(e,r),this.uniforms.uWave.value=this.sim.texture),this.frustum.setFromProjectionMatrix(new Ze().multiplyMatrices(this.cam.projectionMatrix,this.cam.matrixWorldInverse));let a=!1;if(this.hasWater)for(const c of this.chunks.values()){const h=c.geometry.boundingBox;if(!h||this.frustum.intersectsBox(h)){a=!0;break}}const o=this.uniforms;if(o.uNear.value=this.cam.near,o.uFar.value=this.cam.far,a&&this.refl&&o.uUnder.value<.5&&this.cam.position.y>this.level){this.setupMirror();const c=e.clippingPlanes,h=e.autoClear;e.clippingPlanes=[this.clip],e.autoClear=!0,e.setRenderTarget(this.refl),e.render(this.worldScene,this.mirror),e.clippingPlanes=c,e.autoClear=h}if(this.grade.uniforms.inputBuffer.value=t.texture,this.grade.uniforms.uTime.value=s,this.grade.uniforms.uNear.value=this.cam.near,this.grade.uniforms.uFar.value=this.cam.far,e.setRenderTarget(i),e.render(this.scene,this.camera),!a)return;o.uSceneColor.value=t.texture;const l=e.autoClear;e.autoClear=!1,e.render(this.waterScene,this.cam),e.autoClear=l}setupMirror(){const e=this.cam,t=this.mirror,i=new V(0,1,0),s=new V(0,this.level,0),r=new V().setFromMatrixPosition(e.matrixWorld),a=r.clone().sub(s);a.reflect(i).negate().add(s);const o=new Ze().extractRotation(e.matrixWorld),l=new V(0,0,-1).applyMatrix4(o).add(r),c=s.clone().sub(l);c.reflect(i).negate().add(s),t.position.copy(a),t.up.set(0,1,0).applyMatrix4(o).reflect(i),t.lookAt(c),t.near=e.near,t.far=e.far,t.updateMatrixWorld(),t.projectionMatrix.copy(e.projectionMatrix),this.uniforms.uReflMatrix.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(t.projectionMatrix).multiply(t.matrixWorldInverse)}}const $s=1,Nh="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Ly="uniform sampler2D tSrc; varying vec2 vUv; void main() { gl_FragColor = texture2D(tSrc, vUv); }",By="uniform sampler2D tSrc; varying vec2 vUv; void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).r, 0.0, 0.0, 1.0); }";class Uy extends Vt{constructor(e,t,i){super("IcePass"),this.cam=e,this.world=t,this.uniforms=i,this.needsSwap=!1,this.needsDepthTexture=!0,this.needsDepthBlit=!0,this.copyTarget=new ht(1,1,{type:Dn,depthBuffer:!1}),this.depthTarget=new ht(1,1,{type:on,format:Mi,depthBuffer:!1,minFilter:At,magFilter:At}),this.quad=new wt(new Hn(2,2),this.copyMat),this.copyScene.add(this.quad)}meshes=new Set;copyTarget;depthTarget;copyMat=new ot({uniforms:{tSrc:{value:null}},vertexShader:Nh,fragmentShader:Ly,depthTest:!1,depthWrite:!1});depthMat=new ot({uniforms:{tSrc:{value:null}},vertexShader:Nh,fragmentShader:By,depthTest:!1,depthWrite:!1});copyScene=new Hi;quad;copyCam=new Ds(-1,1,1,-1,0,1);frustum=new ur;pv=new Ze;sphere=new Si;setSize(e,t){this.copyTarget.setSize(e,t),this.depthTarget.setSize(e,t),this.uniforms.uResolution.value.set(e,t)}render(e,t){if(!t||this.meshes.size===0)return;this.pv.multiplyMatrices(this.cam.projectionMatrix,this.cam.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.pv);let i=!1;for(const o of this.meshes){const l=o.geometry.boundingSphere;if(l&&(o.updateWorldMatrix(!0,!1),this.sphere.copy(l).applyMatrix4(o.matrixWorld),this.frustum.intersectsSphere(this.sphere))){i=!0;break}}if(!i)return;this.quad.material=this.copyMat,this.copyMat.uniforms.tSrc.value=t.texture,e.setRenderTarget(this.copyTarget),e.render(this.copyScene,this.copyCam),this.quad.material=this.depthMat,this.depthMat.uniforms.tSrc.value=t.depthTexture,e.setRenderTarget(this.depthTarget),e.render(this.copyScene,this.copyCam);const s=this.uniforms;s.uSceneColor.value=this.copyTarget.texture,s.uSceneDepth.value=this.depthTarget.texture,s.uNear.value=this.cam.near,s.uFar.value=this.cam.far,s.uProjection.value.copy(this.cam.projectionMatrix),s.uResolution.value.set(t.width,t.height);const r=e.autoClear,a=this.cam.layers.mask;e.autoClear=!1,this.cam.layers.set($s),e.setRenderTarget(t),e.render(this.world,this.cam),this.cam.layers.mask=a,e.autoClear=r}dispose(){this.copyTarget.dispose(),this.depthTarget.dispose(),this.copyMat.dispose(),this.depthMat.dispose()}}const zy=`
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
  }`,Fy=`
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
  }`;class Ny{constructor(e){this.scene=e,this.material=new ot({uniforms:{uTime:{value:0}},vertexShader:zy,fragmentShader:Fy,transparent:!0,depthWrite:!1,blending:ua,side:Wt}),this.geo=new Hn(1,1),this.geo.translate(.5,.5,0)}material;meshes=new Map;geo;set(e,t){const i=this.meshes.get(e);i&&(this.scene.remove(i),i.geometry.dispose(),this.meshes.delete(e));const s=t.length/4;if(s===0)return;const r=new Yd;r.index=this.geo.index,r.attributes.position=this.geo.attributes.position,r.attributes.uv=this.geo.attributes.uv,r.instanceCount=s;const a=new Float32Array(s*3),o=new Float32Array(s),l=new Float32Array(s);for(let h=0;h<s;h++)a[h*3]=t[h*4],a[h*3+1]=t[h*4+1],a[h*3+2]=t[h*4+2],l[h]=t[h*4+3],o[h]=((a[h*3]*7.31+a[h*3+2]*3.17+a[h*3+1])%1+1)%1;r.setAttribute("aOffset",new xi(a,3)),r.setAttribute("aSeed",new xi(o,1)),r.setAttribute("aKind",new xi(l,1));const c=new wt(r,this.material);c.frustumCulled=!1,c.renderOrder=20,this.scene.add(c),this.meshes.set(e,c)}update(e){this.material.uniforms.uTime.value=e}get count(){let e=0;for(const t of this.meshes.values())e+=t.geometry.instanceCount;return e}}const Kr=1,Oh=2,us=8,Oy=`
  uniform float uTime;
  uniform float uFadeAt, uFadeBand;
  attribute float aSeed;
  attribute float aBorn;
  attribute float aDie;
  varying float vSeed;
  varying vec2 vUv2;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;
`;function kh(n,e,t,i){const s=new Ma({color:16777215,roughness:.85,metalness:0,side:Wt,alphaTest:.5}),r={...ry(e),uTime:{value:0},uFadeAt:{value:26},uFadeBand:{value:8}};return s.defines={...of(t,i),SC_KIND:n},s.onBeforeCompile=a=>{Object.assign(a.uniforms,r),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
`+Oy).replace("#include <begin_vertex>",`
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
        ${rf}
        uniform float uTime;
        varying float vSeed;
        varying vec2 vUv2;
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
        ${af}`).replace("#include <map_fragment>",`
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
        if (any(isnan(gl_FragColor.rgb)) || any(isinf(gl_FragColor.rgb))) gl_FragColor.rgb = vec3(0.0);`)},s.customProgramCacheKey=()=>`splinecraft-scatter-v2-${n}-${t}-${i}`,s.__uniforms=r,s}class ky{constructor(e,t,i,s,r=1){this.scene=e,this.density=r,this.grassMat=kh(Kr,t,i,s),this.leafMat=kh(Oh,t,i,s),this.bladeGeo=new Hn(.09,.55,1,3),this.bladeGeo.translate(0,.275,0),this.leafGeo=new Hn(.75,.75)}grassMat;leafMat;bladeGeo;leafGeo;meshes=new Map;born=new Map;retiring=[];time=0;dummy=new Ht;density=1;count=0;set(e,t,i=this.scene,s=this.time){const r=t.length/us,a=x=>this.density>=1||t[x*us+6]<this.density,o=x=>Math.round(t[x*us+6]*16777216)*3+t[x*us+7],l=new Set;for(let x=0;x<r;x++)a(x)&&l.add(o(x));const c=this.meshes.get(e);if(c){for(const x of c){const M=x.geometry.getAttribute("aDie"),y=M.array,S=x.userData.ids;for(let E=0;E<x.count;E++)y[E]=l.has(S[E])?s-1:s;M.needsUpdate=!0,this.retiring.push({mesh:x,at:s}),this.count-=x.count}this.meshes.delete(e)}const h=this.born.get(e)??new Map,f=new Map;if(r===0)return;let u=0,d=0;for(let x=0;x<r;x++)t[x*us+7]===Kr?u++:d++;const m=(x,M,y,S)=>{if(M===0)return null;const E=y.clone(),D=new Bd(E,S,M),C=new Float32Array(M),A=new Float32Array(M),w=new Float32Array(M).fill(1e9),_=new Float64Array(M);let I=0;const z=new V(0,1,0),F=new V,O=new ki;for(let P=0;P<r;P++){const L=P*us;if(t[L+7]!==x||!a(P))continue;const U=t[L+6];if(this.dummy.position.set(t[L],t[L+1],t[L+2]),F.set(t[L+3],t[L+4],t[L+5]),x===Kr){this.dummy.quaternion.setFromAxisAngle(z,U*Math.PI*2);const j=.7+U*.7;this.dummy.scale.set(j,j,j)}else{O.setFromUnitVectors(new V(0,0,1),F),this.dummy.quaternion.copy(O).multiply(new ki().setFromAxisAngle(new V(0,0,1),U*Math.PI*2)),this.dummy.position.addScaledVector(F,.12+U*.15);const j=.75+U*.6;this.dummy.scale.set(j,j,j)}this.dummy.updateMatrix(),D.setMatrixAt(I,this.dummy.matrix),C[I]=U;const W=o(P),Q=h.get(W)??s;A[I]=Q,f.set(W,Q),_[I]=W,I++}return D.count=I,D.userData.ids=_,E.setAttribute("aSeed",new xi(C,1)),E.setAttribute("aBorn",new xi(A,1)),E.setAttribute("aDie",new xi(w,1)),D.receiveShadow=!0,D.castShadow=!1,D.frustumCulled=!1,i.add(D),this.count+=I,D},v=[],g=m(Kr,u,this.bladeGeo,this.grassMat);g&&v.push(g);const p=m(Oh,d,this.leafGeo,this.leafMat);p&&v.push(p),v.length&&this.meshes.set(e,v),f.size?this.born.set(e,f):this.born.delete(e)}setFade(e,t){for(const i of[this.grassMat,this.leafMat]){const s=i.__uniforms;s.uFadeAt.value=e,s.uFadeBand.value=t}}update(e){this.time=e;for(const t of[this.grassMat,this.leafMat])t.__uniforms.uTime.value=e;if(this.retiring.length){const t=[];for(const i of this.retiring)e-i.at>.45?(i.mesh.parent?.remove(i.mesh),i.mesh.geometry.dispose()):t.push(i);this.retiring=t}}setVisible(e){for(const t of this.meshes.values())for(const i of t)i.visible=e}}const Gy=`
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
  }`,Hy=`
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
  }`;class Vy{constructor(e,t){this.scene=e,this.material=new ot({uniforms:{uTime:{value:0},uPixelRatio:{value:t},uNight:{value:0}},vertexShader:Gy,fragmentShader:Hy,transparent:!0,depthWrite:!1,blending:ua})}material;clouds=new Map;count=0;set(e,t,i,s,r){const a=this.clouds.get(e);a&&(this.scene.remove(a),a.geometry.dispose(),this.count-=a.geometry.getAttribute("aOrigin").count,this.clouds.delete(e));const o=14;let l=0;for(let M=0;M<t.length/4;M++)t[M*4+3]<.5&&l++;const c=l*o,h=i.length/s;let f=0;for(let M=0;M<h;M++)i[M*s+6]<r&&f++;const u=c+f;if(u===0)return;const d=new Float32Array(u*3),m=new Float32Array(u),v=new Float32Array(u);let g=0;for(let M=0;M<t.length/4;M++)for(let y=0;y<o&&!(t[M*4+3]>=.5);y++)d[g*3]=t[M*4],d[g*3+1]=t[M*4+1]+.1,d[g*3+2]=t[M*4+2],m[g]=(M*.618+y*.137)%1,v[g]=0,g++;for(let M=0;M<h;M++){const y=M*s;i[y+6]>=r||(d[g*3]=i[y],d[g*3+1]=i[y+1]+.5,d[g*3+2]=i[y+2],m[g]=i[y+6]/r,v[g]=1,g++)}const p=new Xt;p.setAttribute("position",new Ge(new Float32Array(u*3),3)),p.setAttribute("aOrigin",new Ge(d,3)),p.setAttribute("aSeed",new Ge(m,1)),p.setAttribute("aKind",new Ge(v,1));const x=new Au(p,this.material);x.frustumCulled=!1,x.renderOrder=21,this.scene.add(x),this.clouds.set(e,x),this.count+=u}update(e,t){this.material.uniforms.uTime.value=e,this.material.uniforms.uNight.value=1-t}}const Wy=1.1,Xy=`
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
    float t = (uTime - aBorn) / ${Wy.toFixed(2)};
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
  }`,Yy=`
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
  }`,fs=4096;class qy{material;origin=new Float32Array(fs*3);seed=new Float32Array(fs);born=new Float32Array(fs).fill(-1e6);size=new Float32Array(fs);attrs;cursor=0;dirty=!1;constructor(e,t){this.material=new ot({uniforms:{uTime:{value:0},uPixelRatio:{value:t},uLight:{value:1}},vertexShader:Xy,fragmentShader:Yy,transparent:!0,depthWrite:!1,blending:Fi});const i=new Xt;i.setAttribute("position",new Ge(new Float32Array(fs*3),3)),this.attrs={origin:new Ge(this.origin,3),seed:new Ge(this.seed,1),born:new Ge(this.born,1),size:new Ge(this.size,1)},i.setAttribute("aOrigin",this.attrs.origin),i.setAttribute("aSeed",this.attrs.seed),i.setAttribute("aBorn",this.attrs.born),i.setAttribute("aSize",this.attrs.size);const s=new Au(i,this.material);s.frustumCulled=!1,s.renderOrder=22,e.add(s)}emit(e,t,i,s,r,a){for(let o=0;o<s;o++){const l=this.cursor;this.cursor=(this.cursor+1)%fs,this.origin[l*3]=e+(Math.random()-.5)*r*.5,this.origin[l*3+1]=t+(Math.random()-.5)*r*.3,this.origin[l*3+2]=i+(Math.random()-.5)*r*.5,this.seed[l]=Math.random(),this.born[l]=a,this.size[l]=r}this.dirty=!0}update(e,t){if(this.material.uniforms.uTime.value=e,this.material.uniforms.uLight.value=.35+.65*t,this.dirty){this.dirty=!1;for(const i of Object.values(this.attrs))i.needsUpdate=!0}}}class Qy extends Xi{constructor(){super("SunStreaksEffect",`
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
      }`,{blendFunction:Xe.NORMAL,uniforms:new Map([["uSun",new xe(new Ce(.5,.5))],["uOn",new xe(0)],["uAspect",new xe(1)]])})}set(e,t,i){this.uniforms.get("uOn").value=e?1:0,this.uniforms.get("uSun").value.copy(t),this.uniforms.get("uAspect").value=i}}const Ky=`
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
  }`,Zy=`
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
  }`;class jy extends Vt{constructor(e,t,i,s=16){super("VolumetricPass"),this.cam=e,this.sun=t,this.needsDepthTexture=!0,this.needsSwap=!1,this.target=new ht(1,1,{type:Dn,depthBuffer:!1,minFilter:at,magFilter:at}),this.mat=new ot({vertexShader:"varying vec2 vUv; void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:Ky.replace("  void main() {",Zy+`
  void main() {`),uniforms:{depthBuffer:{value:null},shadowMap:{value:null},shadowMatrix:{value:new Ze},invProjection:{value:new Ze},invView:{value:new Ze},cameraPos:{value:new V},uSunDir:i.uSunDir,uSunColor:i.uSkySunColor,uSkyAmbient:{value:new V(.3,.4,.6)},uDaylight:i.uDaylight,uSeaLevel:{value:22},uDensity:{value:.0085},uLocal:{value:.5},uTime:{value:0},uUnder:{value:0},uWave:{value:null},uWorldSize:{value:new Ce(1,1)},uWaveTexel:{value:new Ce(1,1)},uGiSize:i.uGiSize,uSh0:i.uSh0,uSh1:i.uSh1,uSh2:i.uSh2,uSteps:{value:s}},depthTest:!1,depthWrite:!1}),this.fullscreenMaterial=this.mat}target;mat;scale=.5;get uniforms(){return this.mat.uniforms}setDepthTexture(e){this.mat.uniforms.depthBuffer.value=e}setSize(e,t){this.target.setSize(Math.max(1,Math.floor(e*this.scale)),Math.max(1,Math.floor(t*this.scale)))}render(e){const t=this.mat.uniforms;t.shadowMap.value=this.sun.shadow.map?.texture??null,t.shadowMatrix.value.copy(this.sun.shadow.matrix),t.invProjection.value.copy(this.cam.projectionMatrixInverse),t.invView.value.copy(this.cam.matrixWorld),t.cameraPos.value.copy(this.cam.position),t.shadowMap.value&&(e.setRenderTarget(this.target),e.render(this.scene,this.camera))}}class Jy extends Xi{constructor(e){super("VolumetricEffect",`
      uniform sampler2D volTex;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 v = texture2D(volTex, uv);
        outputColor = vec4(inputColor.rgb * v.a + v.rgb, inputColor.a);
      }`,{blendFunction:Xe.NORMAL,uniforms:new Map([["volTex",new xe(e.texture)]])})}}const $y=56;class ew{gl;scene=new Hi;camera;sun;ambient;sky;water;flames;scatter;particles;puffs;underLight=new V(.1,.15,.2);skyAmbient=[.3,.4,.6];volumetric=null;textures;giTex;terrain;uniforms;variant="full";shaderError="";onShaderError=null;opts;fog;chunks=new Map;worldCenter;worldRadius;shadowReach=1;streaks=null;sunUv=new Ce;tmpV=new V;shadowCenter=new V;sunDir=new V(0,1,0);triangles=0;underwater=!1;composer=null;volumetricSteps=16;caustics=!0;tweenMax=oy;propagation=null;giDirty=!1;postTier=1;seaLevel;constructor(e,t,i,s,r){this.seaLevel=s,this.opts=r,this.variant=r.variant??"full",this.gl=new Rv({canvas:e,antialias:r.antialias,powerPreference:"high-performance"}),this.gl.toneMapping=$n,this.gl.toneMappingExposure=.9,this.gl.outputColorSpace=lt,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=nu,this.gl.setPixelRatio(Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.camera=new $t(72,1,.08,1200),this.worldCenter=new V(t.sizeX/2,t.sizeY/2,t.sizeZ/2),this.worldRadius=Math.hypot(t.sizeX,t.sizeY,t.sizeZ)/2,this.fog=new Ll(10466248,.0032),this.scene.fog=this.fog,this.textures=r.textures,this.giTex=new ey(i);const a=hs(this.textures,this.giTex,r.cheapGi,r.giMode,this.variant);this.terrain=a.material,this.uniforms=a.uniforms,this.gl.debug.onShaderError=(c,h,f,u)=>{const d=c.getProgramInfoLog(h)??"",m=c.getShaderInfoLog(u)??"",v=c.getShaderInfoLog(f)??"",g=(m||v||d).split(`
`).find(x=>/error/i.test(x))??(m||v||d).slice(0,160),p=this.gl.info.programs?.length??0;this.shaderError=`shader error (${p} programs): ${g.slice(0,200)}`,console.error("[splinecraft] shader error",{vsLog:v,fsLog:m,log:d}),this.onShaderError?.(this.shaderError),/terrain/.test(this.terrain.name)&&this.variant!=="basic"&&this.stepDownVariant()},this.sun=new Wd(16777215,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(r.shadowMapSize,r.shadowMapSize),this.shadowReach=Math.min($y,this.worldRadius*.85);const o=this.shadowReach,l=this.sun.shadow.camera;if(l.left=-o,l.right=o,l.top=o,l.bottom=-o,l.near=1,l.far=this.worldRadius*4,l.updateProjectionMatrix(),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.04,this.sun.shadow.radius=3,this.sun.target.position.copy(this.worldCenter),this.scene.add(this.sun,this.sun.target),this.ambient=new Xd(16777215,.02),this.scene.add(this.ambient),this.sun.layers.enable($s),this.ambient.layers.enable($s),this.sky=new ly,this.scene.add(this.sky.mesh),this.water=new cr(this.scene,this.camera,s,this.textures.normal,r.reflection,t.sizeX,t.sizeZ,r.reflection?4:2),this.gl.shadowMap.autoUpdate=!1,this.flames=new Ny(this.scene),this.scatter=new ky(this.scene,this.uniforms,r.cheapGi,r.giMode,r.scatterDensity),this.particles=new Vy(this.scene,Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.puffs=new qy(this.scene,Math.min(window.devicePixelRatio,r.maxPixelRatio)),this.volumetricSteps=r.volumetricSteps,this.caustics=r.caustics,r.giMode==="sh"){const c=new sy(this.gl,this.giTex,r.giDiv);c.setSources(this.giTex.normalTexture,Hl),c.setBoost(Bi);const[h,f,u]=c.textures;this.uniforms.uSh0.value=h,this.uniforms.uSh1.value=f,this.uniforms.uSh2.value=u,this.propagation=c;const d=this.water.uniforms;d.uSh0=this.uniforms.uSh0,d.uSh1=this.uniforms.uSh1,d.uSh2=this.uniforms.uSh2,d.uGiSize=this.uniforms.uGiSize,d.uGiTexel=this.uniforms.uGiTexel,this.water.uniforms.uGiLit.value=1}this.setPost(r.post),this.resize()}giUploaded(){this.giDirty=!0}setupIce(e){for(const s of this.iceChunks.values())this.scene.remove(s),this.ice?.meshes.delete(s);this.iceChunks.clear(),this.ice?.dispose(),this.ice=null,this.iceMat?.dispose(),this.iceMat=null,this.iceUniforms=null,this.iceCastDepth?.dispose(),this.iceCastDepth=null,this.iceOnlyDepth?.dispose(),this.iceOnlyDepth=null,this.iceShadowRT?.dispose(),this.iceShadowRT=null;for(const s of this.chunks.values())s.customDepthMaterial=void 0;if(this.uniforms.uIceCaustic.value=0,!e){this.uniforms.uIceMode.value=2;return}this.uniforms.uIceMode.value=0,this.iceCastDepth=zh(!1),this.iceOnlyDepth=zh(!0);for(const s of this.chunks.values())s.customDepthMaterial=this.iceCastDepth;const t=1024;this.iceShadowRT=new ht(t,t,{depthTexture:new Ta(t,t,on),depthBuffer:!0,minFilter:At,magFilter:At}),this.uniforms.uIceShadow.value=this.iceShadowRT.depthTexture,this.uniforms.uIceReach.value=this.shadowReach,this.uniforms.uSeaLevel.value=this.seaLevel,this.uniforms.uIceDebug.value=this.opts.iceDebug;const i=hs(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);i.uniforms.uTexLocal.value=0,i.uniforms.uIceMode.value=1,this.opts.iceDebug===7&&(i.material.depthTest=!1),this.opts.iceDebug===9&&(i.material.side=Wt),this.iceMat=i.material,this.iceUniforms=i.uniforms,this.ice=new Uy(this.camera,this.scene,i.uniforms);for(const[s,r]of this.chunks)r.geometry.getAttribute("aMats").array.includes(bn)&&this.iceChunks.set(s,this.iceTwin(r.geometry,this.iceMat,this.scene))}iceTwin(e,t,i){const s=new wt(e,t);return s.layers.set($s),s.castShadow=!1,s.receiveShadow=!0,i.add(s),this.ice?.meshes.add(s),s}stepDownVariant(){const e=this.variant==="full"?"lite":"basic";this.variant=e;const t=hs(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,e);for(const s of Object.keys(t.uniforms))t.uniforms[s]=this.uniforms[s];const i=this.terrain;this.terrain=t.material;for(const s of this.chunks.values())s.material=this.terrain;i.dispose(),this.setupIce(this.ice!==null&&e!=="basic"),this.onShaderError?.(`terrain material stepped down to '${e}'`)}describe(){const e=this.gl.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),i=t?String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)):"gpu unknown",s=this.opts;return`${i.slice(0,60)} · ${e.drawingBufferWidth}×${e.drawingBufferHeight} @${this.gl.getPixelRatio().toFixed(2)} · shader ${this.variant} · post ${this.postTier} · vol ${s.volumetricSteps} · refl ${s.reflection?"on":"off"} · gi ${s.giMode}/${s.giDiv}${s.cheapGi?" cheap":""} · shadow ${s.shadowMapSize}${s.antialias?" · aa":""}`}setPost(e){this.postTier=e,this.composer?.dispose();const t=new Ax(this.gl,{frameBufferType:Dn});t.addPass(new tf(this.scene,this.camera)),this.setupIce(e>=1&&this.variant!=="basic"),this.ice&&t.addPass(this.ice),t.addPass(this.water);const i=[];if(this.volumetric=null,e>=2&&this.volumetricSteps>0){const s=new jy(this.camera,this.sun,this.uniforms,this.volumetricSteps);s.uniforms.uSeaLevel.value=this.seaLevel,t.addPass(s),i.push(new Jy(s.target)),this.volumetric=s,s.uniforms.uUnder.value=this.underwater?1:0}if(e>=2){const s=new $M(this.scene,this.camera),r=s.render.bind(s);s.render=(...a)=>{const o=this.sky.mesh.visible;this.sky.mesh.visible=!1;const l=this.flames.material.visible;this.flames.material.visible=!1;const c=this.particles.material.visible;this.particles.material.visible=!1;const h=this.puffs.material.visible;this.puffs.material.visible=!1,r(...a),this.sky.mesh.visible=o,this.flames.material.visible=l,this.particles.material.visible=c,this.puffs.material.visible=h},t.addPass(s),i.push(new GM(this.camera,s.texture,{samples:12,rings:5,radius:.04,intensity:1.6,luminanceInfluence:.6,resolutionScale:.5,bias:.02,distanceThreshold:.6,distanceFalloff:.1}))}this.streaks=null,e>=1&&(this.streaks=new Qy,i.push(this.streaks),i.push(new yM({luminanceThreshold:.85,luminanceSmoothing:.3,intensity:.55,mipmapBlur:!0,radius:.7})),i.push(new QM({darkness:.32,offset:.28}))),i.push(new YM({mode:rn.ACES_FILMIC})),t.addPass(new Uh(this.camera,...i)),e>=2&&t.addPass(new Uh(this.camera,new PM)),this.composer=t,this.resize()}resize(){const e=window.innerWidth,t=window.innerHeight;this.gl.setSize(e,t,!1),this.composer?.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setSun(e){const t=new V(...e.dir);this.sunDir.copy(t),this.placeSun();const i=Math.max(e.sun[0],e.sun[1],e.sun[2],1e-4);this.sun.color.setRGB(e.sun[0]/i,e.sun[1]/i,e.sun[2]/i),this.sun.intensity=i,this.sun.visible=i>.01;const s=this.uniforms;s.uSunDir.value.copy(t),s.uSkyZenith.value.set(...e.zenith),s.uSkyHorizon.value.set(...e.horizon),s.uSkySunColor.value.set(...e.sun),s.uDaylight.value=e.daylight,this.propagation?.setSky(e.ambient),this.volumetric&&this.volumetric.uniforms.uSkyAmbient.value.set(...e.ambient);const r=this.sky.uniforms;r.uSunDir.value.copy(t),r.uSunColor.value.set(e.sun[0]/3,e.sun[1]/3,e.sun[2]/3),r.uZenith.value.set(...e.zenith),r.uHorizon.value.set(...e.horizon),r.uDaylight.value=e.daylight;const a=this.water.uniforms;a.uSunDir.value.copy(t),a.uSunColor.value.set(...e.sun),a.uZenith.value.set(...e.zenith),a.uHorizon.value.set(...e.horizon),a.uAmbient.value.set(...e.ambient),this.skyAmbient=[e.ambient[0],e.ambient[1],e.ambient[2]],this.ambient.intensity=.015+.02*e.daylight,this.underwater||(this.fog.color.setRGB(e.horizon[0],e.horizon[1],e.horizon[2]),this.fog.density=.0032),this.water.uniforms.fogColor.value.copy(this.fog.color),this.water.uniforms.fogDensity.value=this.fog.density}placeSun(){const e=2*this.shadowReach/this.sun.shadow.mapSize.x,t=this.shadowCenter;t.copy(this.camera.position),t.x=Math.round(t.x/e)*e,t.y=Math.round(t.y/e)*e,t.z=Math.round(t.z/e)*e,this.sun.target.position.copy(t),this.sun.position.copy(t).addScaledVector(this.sunDir,this.worldRadius*2)}setUnderwater(e,t){this.underwater=e,e?(this.fog.color.setRGB(.03*(.3+t.daylight),.12*(.3+t.daylight),.16*(.3+t.daylight)),this.fog.density=.018):(this.fog.color.setRGB(t.horizon[0],t.horizon[1],t.horizon[2]),this.fog.density=.0032),this.water.uniforms.fogColor.value.copy(this.fog.color),this.water.uniforms.fogDensity.value=this.fog.density,this.water.setUnderwater(e),this.volumetric&&(this.volumetric.uniforms.uUnder.value=e?1:0)}time=0;chunkGeometry(e,t,i,s){const r=new Xt;r.setAttribute("position",new Ge(s.positions,3)),r.setAttribute("normal",new Ge(s.normals,3)),r.setAttribute("aMats",new Ge(s.mats,3,!1)),r.setAttribute("aBary",new Ge(s.bary,3)),r.setAttribute("aFace",new Ge(s.face,4)),r.setAttribute("aMorph",new Ge(s.morph,4)),r.setAttribute("aFrom",new Ge(s.from&&s.from.length===s.positions.length?s.from:s.positions,3));const a=se*b;return r.boundingSphere=new Si(new V((e+.5)*a,(t+.5)*a,(i+.5)*a),a*.9),r}pendingSwap=[];swapPending(){for(;this.pendingSwap.length;){const e=this.pendingSwap[0];let t=!0;for(const i of e.items){const s=this.chunks.get(i.key);if(s&&this.time<s.userData.fromT0+s.userData.fromDur){t=!1;break}}if(!t)return;this.pendingSwap.shift(),this.applyGroup(e.items,e.at)}}applyGroup(e,t){let i=t;for(const r of e){const a=this.lastSwap.get(r.key);a!==void 0&&a<i&&(i=a)}const s=Math.max(0,t-i);for(const r of e){const a=r.key%1024,o=Math.floor(r.key/1024)%1024,l=Math.floor(r.key/(1024*1024));this.applyChunk(l,o,a,r.rm,t,s),r.onShown?.()}}setChunk(e,t,i,s,r){const a=nt(e,t,i);if((!(!!s.from&&s.from.length===s.positions.length)||this.tweenMax<=0)&&!this.pendingSwap.some(h=>h.items.some(f=>f.key===a))){this.applyChunk(e,t,i,s,this.time,0),r?.();return}const l=this.pendingSwap[this.pendingSwap.length-1];l&&l.at===this.time?l.items.push({key:a,rm:s,onShown:r}):this.pendingSwap.push({at:this.time,items:[{key:a,rm:s,onShown:r}]})}applyChunk(e,t,i,s,r,a){const o=nt(e,t,i);this.flames.set(o,s.emitters),this.scatter.set(o,s.scatter,void 0,this.time),this.particles.set(o,s.emitters,s.scatter,8,.003);const l=this.chunks.get(o);l&&(this.triangles-=l.geometry.getAttribute("position").count/3,this.scene.remove(l),l.geometry.dispose(),this.chunks.delete(o));const c=this.iceChunks.get(o);if(c&&(this.scene.remove(c),this.ice?.meshes.delete(c),this.iceChunks.delete(o)),s.vertexCount===0)return;const h=new wt(this.chunkGeometry(e,t,i,s),this.terrain);h.castShadow=!0,h.receiveShadow=!0,this.iceCastDepth&&(h.customDepthMaterial=this.iceCastDepth);const f=!!s.from&&s.from.length===s.positions.length,u=this.lastSwap.get(o)??-1e9,d=f&&this.tweenMax>0?Math.min(this.tweenMax,Math.max(Math.min(ay,this.tweenMax),a>0?a:r-u)):0;if(this.lastSwap.set(o,r),h.userData.fromT0=this.time,h.userData.fromDur=d,h.onBeforeRender=(m,v,g,p,x)=>this.tweenClock(h,x),this.scene.add(h),this.chunks.set(o,h),this.triangles+=s.vertexCount/3,this.ice&&this.iceMat&&s.mats.includes(bn)){const m=this.iceTwin(h.geometry,this.iceMat,this.scene);m.userData.fromT0=h.userData.fromT0,m.userData.fromDur=d,m.onBeforeRender=(v,g,p,x,M)=>this.tweenClock(m,M),this.iceChunks.set(o,m)}}lastSwap=new Map;tweenClock(e,t){const i=this.uniforms,s=e.userData.fromT0??-1e9,r=e.userData.fromDur??0;i.uFromT0.value===s&&i.uFromDur.value===r||(i.uFromT0.value=s,i.uFromDur.value=r,t.uniformsNeedUpdate=!0)}fragments=new Map;setFragment(e,t,i,s,r,a){if(this.removeFragment(e),t.vertexCount===0)return;const o=new Xt;o.setAttribute("position",new Ge(t.positions,3)),o.setAttribute("normal",new Ge(t.normals,3)),o.setAttribute("aMats",new Ge(t.mats,3,!1)),o.setAttribute("aBary",new Ge(t.bary,3)),o.setAttribute("aFace",new Ge(t.face,4)),o.setAttribute("aMorph",new Ge(t.morph,4)),o.computeBoundingSphere();const l=hs(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);l.uniforms.uTexLocal.value=1,l.uniforms.uTexOrigin.value.set(a[0],a[1],a[2]);const c=new wt(o,l.material);c.castShadow=!0,c.receiveShadow=!0,this.iceCastDepth&&(c.customDepthMaterial=this.iceCastDepth);const h=new gi;h.userData.body=l;const f=new gi;if(f.position.set(-i[0],-i[1],-i[2]),f.add(c),this.ice&&t.mats.includes(bn)){l.uniforms.uIceMode.value=0;const u=hs(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);u.uniforms.uTexLocal.value=1,u.uniforms.uTexOrigin.value.set(a[0],a[1],a[2]),u.uniforms.uIceMode.value=1,this.iceUniforms&&(u.uniforms.uSceneColor=this.iceUniforms.uSceneColor,u.uniforms.uSceneDepth=this.iceUniforms.uSceneDepth,u.uniforms.uResolution=this.iceUniforms.uResolution,u.uniforms.uNear=this.iceUniforms.uNear,u.uniforms.uFar=this.iceUniforms.uFar),h.userData.iceBody=u,this.iceTwin(o,u.material,f)}h.add(f),h.position.set(s[0],s[1],s[2]),h.quaternion.set(r[0],r[1],r[2],r[3]),h.userData.emitters=t.emitters,h.userData.inner=f,this.scene.add(h),this.fragments.set(e,h),this.scatter.set(-e,t.scatter,f,this.time),this.placeBodyFlames(e,h)}placeBodyFlames(e,t){const i=t.userData.emitters;if(!i||i.length===0)return;t.updateMatrixWorld(!0);const s=t.userData.inner,r=new Float32Array(i.length),a=new V;for(let o=0;o<i.length;o+=4)a.set(i[o],i[o+1],i[o+2]),s.localToWorld(a),r[o]=a.x,r[o+1]=a.y,r[o+2]=a.z,r[o+3]=i[o+3];this.flames.set(-e,r)}moveFragment(e,t,i){const s=this.fragments.get(e);s&&(s.position.set(t[0],t[1],t[2]),s.quaternion.set(i[0],i[1],i[2],i[3]),this.placeBodyFlames(e,s))}fadeFragment(e,t){const i=this.fragments.get(e);if(!i)return;const s=i.userData.body;s.uniforms.uFade.value=Math.max(0,Math.min(1,t)),s.material.polygonOffset=t<1,s.material.polygonOffsetFactor=-1,s.material.polygonOffsetUnits=-2;const r=i.userData.iceBody;r&&(r.uniforms.uFade.value=s.uniforms.uFade.value)}removeFragment(e){const t=this.fragments.get(e);t&&(this.scatter.set(-e,new Float32Array(0)),this.flames.set(-e,new Float32Array(0)),this.scene.remove(t),t.traverse(i=>{i instanceof wt&&(i.geometry.dispose(),this.ice?.meshes.delete(i))}),t.userData.body.material.dispose(),t.userData.iceBody?.material.dispose(),this.fragments.delete(e))}get fallingCount(){return this.fragments.size}ice=null;iceMat=null;iceUniforms=null;iceChunks=new Map;iceCastDepth=null;iceOnlyDepth=null;iceShadowRT=null;skins=new Map;animals=new Map;setSkin(e,t,i){const s=new Xt;s.setAttribute("position",new Ge(i.positions,3)),s.setAttribute("normal",new Ge(i.normals,3)),s.setAttribute("aMats",new Ge(i.mats,3,!1)),s.setAttribute("aBary",new Ge(i.bary,3)),s.setAttribute("aFace",new Ge(i.face,4)),s.setAttribute("aMorph",new Ge(i.morph,4)),s.computeBoundingSphere();const r=`${e}:${t}`;this.skins.get(r)?.dispose(),this.skins.set(r,s)}get skinCount(){return this.skins.size}placeAnimal(e,t,i,s,r,a=0){const o=this.skins.get(`${t}:${i}`);if(!o)return;let l=this.animals.get(e);if(!l){const h=hs(this.textures,this.giTex,this.opts.cheapGi,this.opts.giMode,this.variant,this.uniforms);h.uniforms.uTexLocal.value=1,h.uniforms.uTexOrigin.value.set(0,0,0);const f=new wt(o,h.material);f.castShadow=!0,f.receiveShadow=!0,l=new gi,l.add(f),l.userData.body=h,l.userData.mesh=f,this.scene.add(l),this.animals.set(e,l)}const c=l.userData.mesh;c.geometry!==o&&(c.geometry=o),l.position.set(s[0],s[1],s[2]),l.rotation.set(0,r+Math.PI*.5,a,"YZX")}removeAnimal(e){const t=this.animals.get(e);t&&(this.scene.remove(t),t.userData.body.material.dispose(),this.animals.delete(e))}clearAnimals(){for(const e of[...this.animals.keys()])this.removeAnimal(e)}get animalCount(){return this.animals.size}hand=null;handKind=-1;setHandItem(e){this.camera.parent||this.scene.add(this.camera),this.hand&&(this.camera.remove(this.hand),this.hand.traverse(a=>{a instanceof wt&&(a.geometry.dispose(),a.material.dispose())}),this.hand=null),this.handKind=-1,this.flames.set(-7,new Float32Array(0));const t=Dt[e];if(!t)return;const i=new gi,s=new qe(t.albedo[0],t.albedo[1],t.albedo[2]),r=t.emissive?new qe(t.emissive[0],t.emissive[1],t.emissive[2]).multiplyScalar(.03):new qe(0,0,0);if(t.hard&&t.solid===!1){const a=new wt(new Gi(.02,.1,.02),new Ma({color:s,roughness:.8}));a.position.y=-.03,i.add(a),this.handKind=e===zl?1:0}else{const a=new wt(new Gi(.11,.11,.11),new Ma({color:s,emissive:r,roughness:t.roughness??.8,metalness:t.metalness??0,transparent:e===bn,opacity:e===bn?.55:1}));a.rotation.set(.35,-.6,.1),i.add(a)}i.position.set(.3,-.24,-.52),i.traverse(a=>{a.castShadow=!1,a.receiveShadow=!1,a.frustumCulled=!1}),this.camera.add(i),this.hand=i}handWorld(){if(!this.hand)return null;this.camera.updateMatrixWorld(!0);const e=new V(0,.06,0);return this.hand.localToWorld(e),this.handKind>=0&&this.flames.set(-7,new Float32Array([e.x,e.y,e.z,this.handKind])),e}setCursor(e,t,i,s,r){this.uniforms.uCursor.value.set(e,t,i,s),this.uniforms.uCursorShape.value=r?1:0,r&&this.uniforms.uCursorExt.value.set(r[0],r[1],r[2])}render(e){this.time=e,this.swapPending(),this.uniforms.uTime.value=e,this.water.uniforms.uTime.value=e,this.flames.update(e),this.scatter.update(e),this.particles.update(e,this.uniforms.uDaylight.value),this.puffs.update(e,this.uniforms.uDaylight.value);const t=Math.max(0,this.seaLevel-this.camera.position.y),i=Math.exp(-t*.22);if(this.underLight.set(this.skyAmbient[0]*i,this.skyAmbient[1]*i,this.skyAmbient[2]*i),this.water.setUnderwaterLight(this.underLight.x,this.underLight.y,this.underLight.z,.92*Math.exp(-t*.06)),this.streaks){const s=this.sunDir;this.tmpV.copy(s).multiplyScalar(200).add(this.camera.position).project(this.camera);const r=this.tmpV.z<1;this.sunUv.set(this.tmpV.x*.5+.5,this.tmpV.y*.5+.5);const a=this.underwater&&r&&s.y>-.05&&this.sunUv.x>-.6&&this.sunUv.x<1.6&&this.sunUv.y>-.6&&this.sunUv.y<1.6;this.streaks.set(a,this.sunUv,this.camera.aspect)}if(this.sky.uniforms.uTime.value=e,this.volumetric){const s=this.volumetric.uniforms;s.uTime.value=e,s.uWave.value=this.water.sim.texture,s.uWorldSize.value.copy(this.water.uniforms.uWorldSize.value),s.uWaveTexel.value.copy(this.water.sim.texelSize)}if(this.sky.mesh.position.copy(this.camera.position),this.propagation){this.propagation.inject(e),this.giDirty?(this.giDirty=!1,this.propagation.step(this.propagation.iterations===0?12:2)):this.propagation.step(1);const[s,r,a]=this.propagation.textures;this.uniforms.uSh0.value=s,this.uniforms.uSh1.value=r,this.uniforms.uSh2.value=a}this.placeSun(),this.renderIceShadow(),this.gl.shadowMap.needsUpdate=!0,this.composer?this.composer.render():this.gl.render(this.scene,this.camera)}renderIceShadow(){const e=this.uniforms;if(!this.caustics||!this.ice||!this.iceShadowRT||!this.iceOnlyDepth||this.ice.meshes.size===0||this.sunDir.y<.02){e.uIceCaustic.value=0;return}this.sun.updateMatrixWorld(!0),this.sun.target.updateMatrixWorld(!0),this.sun.shadow.updateMatrices(this.sun);const t=this.sun.shadow.camera,i=t.layers.mask,s=this.scene.overrideMaterial,r=this.gl.autoClear;t.layers.set($s),this.scene.overrideMaterial=this.iceOnlyDepth,this.gl.autoClear=!0,this.gl.setRenderTarget(this.iceShadowRT),this.gl.clear(!0,!0,!1),this.gl.render(this.scene,t),this.gl.setRenderTarget(null),this.scene.overrideMaterial=s,t.layers.mask=i,this.gl.autoClear=r,e.uIceShadowMatrix.value.copy(this.sun.shadow.matrix),e.uIceCaustic.value=1}get chunkCount(){return this.chunks.size}}class tw{workers=[];idle=[];queue=[];inflight=new Map;nextId=1;constructor(e){for(let t=0;t<e;t++){const i=new Worker(new URL(""+new URL("mesh.worker-C-scLa0T.js",import.meta.url).href,import.meta.url),{type:"module"});i.onmessage=s=>{const r=this.inflight.get(i);this.inflight.delete(i),this.idle.push(i),r?.resolve(s.data),this.pump()},i.onerror=s=>console.error("worker error",s),this.workers.push(i),this.idle.push(i)}}get size(){return this.workers.length}get queued(){return this.queue.length+this.inflight.size}submit(e,t){const i={...e,kind:"mesh",id:this.nextId++};return this.enqueue(i,[i.density.buffer,i.material.buffer,i.hard.buffer,i.sub.buffer],t)}gen(e,t,i,s,r){return this.enqueue({kind:"gen",id:this.nextId++,cx:e,cy:t,cz:i,cfg:s},[],r)}skin(e,t,i){return this.enqueue({kind:"skin",id:this.nextId++,animal:e,bucket:t,material:i},[],-3)}frag(e,t,i,s,r,a,o,l){return this.enqueue({kind:"frag",id:this.nextId++,nx:e,ny:t,nz:i,density:s,material:r,hard:a,sub:o,scatter:l},[s.buffer,r.buffer,a.buffer,o.buffer],-2)}textures(e){return this.enqueue({kind:"textures",id:this.nextId++,size:e},[],-1)}enqueue(e,t,i){return new Promise(s=>{this.queue.push({job:e,transfer:t,priority:i,resolve:s}),this.pump()})}reprioritize(e){for(const t of this.queue)t.job.kind==="mesh"&&(t.priority=e(t.job))}home(e){return e.kind!=="mesh"?null:this.workers[((e.cx*4096+e.cy)*4096+e.cz)%this.workers.length]}pump(){let e=!0;for(;e&&this.idle.length&&this.queue.length;){e=!1;for(let t=this.idle.length-1;t>=0;t--){const i=this.idle[t];let s=-1;for(let a=0;a<this.queue.length;a++){const o=this.home(this.queue[a].job);o!==null&&o!==i||(s<0||this.queue[a].priority<this.queue[s].priority)&&(s=a)}if(s<0)continue;const r=this.queue.splice(s,1)[0];this.idle.splice(t,1),this.inflight.set(i,r),i.postMessage(r.job,r.transfer),e=!0}}}}class nw{constructor(e){this.canvas=e,window.addEventListener("keydown",t=>{t.repeat||(this.keys.add(t.code),this.pressed.add(t.code),["Space","Tab","KeyQ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&(this.locked||this.freeMouse)&&t.preventDefault())}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseDown=[!1,!1,!1]}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===e,this.locked||(this.mouseDown=[!1,!1,!1])}),e.addEventListener("mousemove",t=>{if(this.mouseX=t.clientX,this.mouseY=t.clientY,!this.locked)return;this.yaw-=t.movementX*this.sens,this.pitch-=t.movementY*this.sens;const i=Math.PI/2-.01;this.pitch=Math.max(-i,Math.min(i,this.pitch))}),e.addEventListener("mousedown",t=>{!this.locked&&!this.freeMouse||(t.preventDefault(),t.button<3&&(this.mouseDown[t.button]=!0,this.mouseClick[t.button]=!0))}),window.addEventListener("mouseup",t=>{t.button<3&&(this.mouseDown[t.button]=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("wheel",t=>{!this.locked&&!this.freeMouse||(t.preventDefault(),this.wheel+=Math.sign(t.deltaY))},{passive:!1})}keys=new Set;pressed=new Set;yaw=0;pitch=0;wheel=0;mouseDown=[!1,!1,!1];mouseClick=[!1,!1,!1];locked=!1;freeMouse=!1;mouseX=-1;mouseY=-1;sens=.0022;requestLock(){this.canvas.requestPointerLock?.()}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}flush(){this.pressed.clear(),this.mouseClick=[!1,!1,!1],this.wheel=0}}class iw{root;hotbar;slots=[];status;clock;debug;toast;toastTimer=0;overlay;loading;loadingBar;loadingText;lastStatus="";lastDebug="";onNewWorld=null;onResetEdits=null;onLoadWorld=null;onRenameWorld=null;onDeleteWorld=null;onQuality=null;onFoliage=null;onFall=null;onEditMs=null;onAnimals=null;onSand=null;onSnow=null;onTuning=null;onTuningDefaults=null;onResume=null;onSelectSlot=null;onTime=null;onTimeFlow=null;onCopyLink=null;onMenu=null;errorEl=null;timeSliders=[];dragging=!1;constructor(){this.root=document.getElementById("hud"),this.hotbar=document.getElementById("hotbar"),this.status=document.getElementById("status"),this.clock=document.getElementById("clock"),this.debug=document.getElementById("debug"),this.toast=document.getElementById("toast"),this.overlay=document.getElementById("overlay"),this.loading=document.getElementById("loading"),this.loadingBar=document.getElementById("loading-bar"),this.loadingText=document.getElementById("loading-text"),document.getElementById("btn-play").addEventListener("click",()=>this.onResume?.()),document.getElementById("btn-new").addEventListener("click",()=>{const e=document.getElementById("seed-input").value.trim(),t=e===""?Math.floor(Math.random()*1e9):hf(e),i=document.getElementById("size-select");this.onNewWorld?.(t,i?Number(i.value):8)}),document.getElementById("btn-reset").addEventListener("click",()=>{confirm("Erase every edit in this world? The terrain regenerates from its seed.")&&this.onResetEdits?.()});for(const e of["time-slider","time-slider-menu"]){const t=document.getElementById(e);t&&(this.timeSliders.push(t),t.addEventListener("input",()=>{this.dragging=!0,this.onTime?.(Number(t.value))}),t.addEventListener("change",()=>{this.dragging=!1}))}document.getElementById("time-flow")?.addEventListener("click",()=>this.onTimeFlow?.()),document.getElementById("btn-copy")?.addEventListener("click",()=>this.onCopyLink?.()),document.getElementById("gear")?.addEventListener("click",()=>this.onMenu?.()),this.errorEl=document.getElementById("error-strip"),this.errorEl?.addEventListener("click",()=>{this.errorEl&&(this.errorEl.hidden=!0)}),this.buildTuning(),document.getElementById("btn-defaults")?.addEventListener("click",()=>this.onTuningDefaults?.()),document.getElementById("edit-slider")?.addEventListener("input",e=>{const t=Number(e.target.value);this.setEditLabel(t),this.onEditMs?.(t)}),document.getElementById("fall-select")?.addEventListener("change",e=>{this.onFall?.(Number(e.target.value))}),document.getElementById("animals-select")?.addEventListener("change",e=>{this.onAnimals?.(e.target.value==="1")}),document.getElementById("sand-select")?.addEventListener("change",e=>{this.onSand?.(e.target.value==="1")}),document.getElementById("snow-select")?.addEventListener("change",e=>{this.onSnow?.(e.target.value==="1")}),document.getElementById("foliage-select")?.addEventListener("change",e=>{this.onFoliage?.(Number(e.target.value))}),document.getElementById("quality-select").addEventListener("change",e=>{this.onQuality?.(e.target.value)})}setLoading(e,t){this.loading.hidden=!1,this.loadingBar.style.width=`${Math.round(e*100)}%`,this.loadingText.textContent=t}hideLoading(){this.loading.hidden=!0}buildTuning(){const e=document.getElementById("tuning");if(!e)return;let t="",i=null;for(const s of ca){if(s.group!==t){t=s.group;const l=document.createElement("h4");l.textContent=t,e.appendChild(l),i=document.createElement("div"),i.className="tune",e.appendChild(i)}const r=document.createElement("label");r.textContent=s.label,r.htmlFor=`tune-${s.key}`;const a=document.createElement("input");a.type="range",a.id=`tune-${s.key}`,a.min=String(s.min),a.max=String(s.max),a.step=String(s.step);const o=document.createElement("span");o.className="val",o.id=`tune-${s.key}-val`,a.addEventListener("input",()=>{const l=Number(a.value);o.textContent=this.tuneText(s.key,l),this.onTuning?.(s.key,l)}),i.append(r,a,o)}}tuneText(e,t){const i=ca.find(s=>s.key===e);return e==="caustics"||e==="profile"?t>.5?"on":"off":e==="bubble"&&t<=0?"everything":e==="snowSlab"&&t<=0?"whole":e==="snowImpact"&&t<=1?"none":`${i.step<1?t.toFixed(2).replace(/\.?0+$/,""):t}${i.unit}`}setTuning(e){for(const t of ca){const i=document.getElementById(`tune-${t.key}`),s=document.getElementById(`tune-${t.key}-val`);i&&(i.value=String(e[t.key])),s&&(s.textContent=this.tuneText(t.key,e[t.key]))}}setEditLabel(e){const t=document.getElementById("edit-label");t&&(t.textContent=`${(e/1e3).toFixed(2)} s`)}showOverlay(e,t,i=1,s=7,r=!0,a=!0,o=140,l=!0){const c=document.getElementById("edit-slider");c&&(c.value=String(o),this.setEditLabel(o));const h=document.getElementById("animals-select");h&&(h.value=r?"1":"0");const f=document.getElementById("sand-select");f&&(f.value=a?"1":"0");const u=document.getElementById("snow-select");u&&(u.value=l?"1":"0");const d=document.getElementById("fall-select");d&&(d.value=String(s),d.value!==String(s)&&(d.value="7")),this.overlay.hidden=!1,this.root.classList.add("dim"),document.getElementById("seed-label").textContent=String(e),document.getElementById("quality-select").value=t;const m=document.getElementById("foliage-select");m&&(m.value=String(i),m.value!==String(i)&&(m.value="1"))}hideOverlay(){this.overlay.hidden=!0,this.root.classList.remove("dim")}renderWorlds(e,t){const i=document.getElementById("worlds");if(!i)return;i.innerHTML="";const s=[...e].sort((r,a)=>r.seed===t?-1:a.seed===t?1:a.updatedAt-r.updatedAt);for(const r of s){const a=document.createElement("div");a.className="world"+(r.seed===t?" current":"");const o=document.createElement("button");o.className="wname",o.textContent=r.name,o.title=r.seed===t?"this world":"load this world",o.addEventListener("click",()=>this.onLoadWorld?.(r.seed));const l=document.createElement("span");l.className="wmeta",l.textContent=`seed ${r.seed} · ${(r.chunks??8)*16} m${r.seed===t?" · playing":r.updatedAt?" · "+rw(r.updatedAt):""}`;const c=document.createElement("button");c.className="wbtn",c.textContent="✎",c.title="rename",c.addEventListener("click",()=>{const f=prompt("World name",r.name);f!==null&&this.onRenameWorld?.(r.seed,f)});const h=document.createElement("button");h.className="wbtn",h.textContent="✕",h.title="delete this world and its edits",h.addEventListener("click",()=>{confirm(`Delete "${r.name}" and every edit in it?`)&&this.onDeleteWorld?.(r.seed)}),a.append(o,l,c,h),i.appendChild(a)}if(!s.length){const r=document.createElement("div");r.className="wmeta",r.textContent="no saved worlds yet",i.appendChild(r)}}get overlayVisible(){return!this.overlay.hidden}buildHotbar(e){this.hotbar.innerHTML="",this.slots=[],fn.forEach((t,i)=>{const s=document.createElement("div");s.className="slot";const r=document.createElement("canvas");r.width=16,r.height=16;const a=r.getContext("2d"),o=a.createImageData(16,16),l=e.swatches[t.id];for(let f=0;f<256;f++)o.data[f*4]=l[f*3],o.data[f*4+1]=l[f*3+1],o.data[f*4+2]=l[f*3+2],o.data[f*4+3]=255;a.putImageData(o,0,0);const c=document.createElement("span");c.className="key",c.textContent=sw[i]??"";const h=document.createElement("span");h.className="name",h.textContent=t.name,s.append(r,c,h),s.addEventListener("pointerdown",f=>{f.preventDefault(),this.onSelectSlot?.(i)}),this.hotbar.appendChild(s),this.slots.push(s)})}setSelected(e){this.slots.forEach((t,i)=>t.classList.toggle("sel",i===e))}setStatus(e){e!==this.lastStatus&&(this.status.textContent=e,this.lastStatus=e)}setClock(e,t){this.clock.textContent=e;const i=document.getElementById("time-label");if(i&&(i.textContent=e),t!==void 0&&!this.dragging)for(const s of this.timeSliders)s.value=t.toFixed(2)}setDebug(e){e!==this.lastDebug&&(this.debug.textContent=e,this.lastDebug=e)}showError(e){this.errorEl&&(this.errorEl.textContent=e,this.errorEl.hidden=!1)}say(e,t=1800){this.toast.textContent=e,this.toast.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toast.classList.remove("show"),t)}}const sw=["1","2","3","4","5","6","7","8","9","0","-","=","[","]","\\"],Gh=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","BracketLeft","BracketRight","Backslash"];function hf(n){if(/^\d+$/.test(n))return Number(n)>>>0;let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function rw(n){const e=(Date.now()-n)/1e3;return e<90?"just now":e<5400?`${Math.round(e/60)} min ago`:e<172800?`${Math.round(e/3600)} h ago`:`${Math.round(e/86400)} d ago`}class aw{constructor(e){if(this.layer=e,this.stickEl=document.getElementById("stick"),this.thumbEl=document.getElementById("stick-thumb"),this.enabled=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,this.wireButtons(),!this.enabled)return;document.body.classList.add("touch"),e.addEventListener("pointerdown",i=>{i.target.closest("button, .slot")||(i.preventDefault(),e.setPointerCapture(i.pointerId),i.clientX<window.innerWidth*.45&&this.stickId<0?(this.stickId=i.pointerId,this.stickOrigin=[i.clientX,i.clientY],this.stickEl.style.left=`${i.clientX-60}px`,this.stickEl.style.top=`${i.clientY-60}px`,this.stickEl.classList.add("active"),this.thumbEl.style.transform="translate(0,0)"):this.lookId<0&&(this.lookId=i.pointerId,this.lookLast=[i.clientX,i.clientY]))}),e.addEventListener("pointermove",i=>{if(i.pointerId===this.stickId){const s=i.clientX-this.stickOrigin[0],r=i.clientY-this.stickOrigin[1],a=50,o=Math.hypot(s,r),l=o>a?a/o:1;this.moveX=s*l/a,this.moveY=-(r*l)/a,this.thumbEl.style.transform=`translate(${s*l}px, ${r*l}px)`}else i.pointerId===this.lookId&&(this.lookDX+=i.clientX-this.lookLast[0],this.lookDY+=i.clientY-this.lookLast[1],this.lookLast=[i.clientX,i.clientY])});const t=i=>{i.pointerId===this.stickId?(this.stickId=-1,this.moveX=0,this.moveY=0,this.stickEl.classList.remove("active")):i.pointerId===this.lookId&&(this.lookId=-1)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t)}enabled=!1;moveX=0;moveY=0;lookDX=0;lookDY=0;jump=!1;dig=!1;add=!1;smooth=!1;paint=!1;duck=!1;duckLit=!1;taps=new Set;stickId=-1;lookId=-1;stickOrigin=[0,0];lookLast=[0,0];stickEl;thumbEl;wireButtons(){const e=(t,i)=>{const s=document.getElementById(t);s.addEventListener("pointerdown",a=>{a.preventDefault(),s.setPointerCapture(a.pointerId),i(!0),s.classList.add("down"),this.taps.add(t)});const r=()=>{i(!1),t==="tb-duck"&&this.duckLit||s.classList.remove("down")};s.addEventListener("pointerup",r),s.addEventListener("pointercancel",r)};e("tb-jump",t=>this.jump=t),e("tb-duck",t=>this.duck=t),e("tb-dig",t=>this.dig=t),e("tb-add",t=>this.add=t),e("tb-smooth",t=>this.smooth=t),e("tb-paint",t=>this.paint=t);for(const t of["tb-fly","tb-size-down","tb-size-up","tb-shape","tb-snap","tb-menu","tb-undo"])document.getElementById(t)?.addEventListener("pointerdown",s=>{s.preventDefault(),this.taps.add(t)})}tapped(e){return this.taps.has(e)}setDuckLit(e){if(e===this.duckLit)return;this.duckLit=e;const t=document.getElementById("tb-duck");t&&!this.duck&&t.classList.toggle("down",e)}get heldOp(){return this.add?"add":this.smooth?"smooth":this.paint?"paint":null}digLabel="dig";setDig(e){if(e===this.digLabel)return;this.digLabel=e;const t=document.getElementById("tb-dig");t&&(t.textContent=e)}setFly(e){const t=document.getElementById("tb-duck");t&&(t.textContent=e?"down":"duck");const i=document.getElementById("tb-jump");i&&(i.textContent=e?"up":"jump");const s=document.getElementById("tb-fly");s&&(s.textContent=e?"walk":"fly")}flush(){this.lookDX=0,this.lookDY=0,this.taps.clear()}}const Hh=.08,ow=2e3,lw=50,cw=240;class hw{enabled=!1;summary=null;el=null;phases=[];byName=new Map;t=0;frameStart=0;frameEma=0;frameMax=0;maxSince=0;history=[];long=[];lastDraw=0;begin(e){this.frameStart=e,this.t=e;for(const t of this.phases)t.ms=0}mark(e){const t=performance.now();let i=this.byName.get(e);i||(i={name:e,ms:0,ema:0,max:0},this.byName.set(e,i),this.phases.push(i)),i.ms+=t-this.t,this.t=t}end(e){const t=performance.now(),i=t-this.frameStart;if(t-this.maxSince>ow){this.maxSince=t,this.frameMax=0;for(const s of this.phases)s.max=0}this.frameEma+=(i-this.frameEma)*Hh,this.frameMax=Math.max(this.frameMax,i);for(const s of this.phases)s.ema+=(s.ms-s.ema)*Hh,s.max=Math.max(s.max,s.ms);if(this.history.push(i),this.history.length>cw&&this.history.shift(),i>lw){let s=this.phases[0];for(const a of this.phases)a.ms>s.ms&&(s=a);const r=e/1e3;this.long.push(`${Math.floor(r/60)}:${(r%60).toFixed(1).padStart(4,"0")}  ${i.toFixed(0)} ms  ${s.name} ${s.ms.toFixed(0)}`),this.long.length>6&&this.long.shift()}if(!this.enabled){this.el&&(this.el.remove(),this.el=null);return}t-this.lastDraw<250||(this.lastDraw=t,this.draw())}draw(){if(!this.el){const a=document.createElement("pre");a.id="profile",a.style.cssText="position:fixed;left:8px;top:84px;margin:0;padding:6px 8px;max-width:min(96vw,760px);font:11px/1.35 ui-monospace,Menlo,Consolas,monospace;color:#fff;background:rgba(0,0,0,.62);border-radius:6px;white-space:pre-wrap;pointer-events:none;z-index:5;text-shadow:0 1px 1px #000;font-variant-numeric:tabular-nums",document.body.appendChild(a),this.el=a}const e=this.history.slice().sort((a,o)=>o-a),t=e.length?e[Math.min(e.length-1,Math.floor(e.length*.01))]:0,i=this.frameEma>0?1e3/this.frameEma:0,s=[];s.push(`frame ${this.frameEma.toFixed(1)} ms avg · ${this.frameMax.toFixed(0)} max/2s · ${i.toFixed(0)} fps · 1% low ${t.toFixed(0)} ms`),s.push(this.phases.map(a=>`${a.name} ${a.ema.toFixed(1)}/${a.max.toFixed(0)}`).join(" · ")),this.summary&&s.push(...this.summary()),this.long.length&&s.push("long frames (ms · phase): "+this.long.join(" | "));const r=s.join(`
`);this.el.textContent!==r&&(this.el.textContent=r)}}const Da="splinecraft.v1.";function uw(n){try{const e=localStorage.getItem(Da+"world."+n);return e?Wv(e):[]}catch{return[]}}function Vh(n){try{localStorage.removeItem(Da+"world."+n)}catch{}}function uf(){try{const n=localStorage.getItem(Da+"settings");return n?JSON.parse(n):{}}catch{return{}}}function yn(n){try{localStorage.setItem(Da+"settings",JSON.stringify({...uf(),...n}))}catch{}}const ff=4096;function yo(n,e,t,i){const s=se+1,r=new Int16Array(s*s*s),a=new Uint8Array(s*s*s),o=new Uint8Array(s*s*s),l=new Uint32Array(s*s*s),c=new Uint8Array(s*s*s);let h=!1,f=!1,u=0;for(let d=0;d<s;d++)for(let m=0;m<s;m++)for(let v=0;v<s;v++,u++){const g=e*se+d,p=t*se+m,x=i*se+v;if(!n.inBounds(g,p,x))continue;const M=n.index(g,p,x);r[u]=Math.round(Math.max(-rt,Math.min(rt,n.density[M]))*ff),a[u]=n.material[M],o[u]=n.hard[M],l[u]=n.sub[M],l[u]!==0&&(h=!0),c[u]=n.water[M],c[u]!==0&&(f=!0)}return{cx:e,cy:t,cz:i,n:s,density:r,material:a,hard:o,sub:h?l:null,water:f?c:null}}function Wh(n,e){const t=e.n;let i=0;for(let s=0;s<t;s++)for(let r=0;r<t;r++)for(let a=0;a<t;a++,i++){const o=e.cx*se+s,l=e.cy*se+r,c=e.cz*se+a;if(!n.inBounds(o,l,c))continue;const h=n.index(o,l,c);n.density[h]=e.density[i]/ff,n.material[h]=e.material[i],n.hard[h]=e.hard[i],n.sub[h]=e.sub?e.sub[i]:0,e.water!==void 0&&(n.water[h]=e.water?e.water[i]:0)}}function Zt(n,e,t,i){const s=[],r=o=>Math.max(0,Math.floor((o-1)/se)),a=(o,l)=>Math.min(l-1,Math.floor(o/se));for(let o=r(n.x0);o<=a(n.x1,e);o++)for(let l=r(n.y0);l<=a(n.y1,t);l++)for(let c=r(n.z0);c<=a(n.z1,i);c++)s.push([o,l,c]);return s}const Kl=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],ha=2,fw=7,dw=9.8,pw=.6,mw=.45,gw=.6,vw=14;function xw(n,e){return n?{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}:e}function yl(n,e,t,i,s,r,a,o,l){const c=n.density,h=n.material,f=new Float32Array(a*o*l).fill(-rt),u=new Uint8Array(a*o*l),d=[],m=new Set;for(const[w,_,I]of e)m.add(n.index(w,_,I));for(let w=0;w<a;w++)for(let _=0;_<o;_++)for(let I=0;I<l;I++){const z=i+w,F=s+_,O=r+I;if(!n.inBounds(z,F,O))continue;const P=n.index(z,F,O),L=(w*o+_)*l+I;m.has(P)?(f[L]=c[P],u[L]=h[P],d.push([w,_,I])):c[P]<=0?(f[L]=c[P],u[L]=h[P]):(f[L]=-b*.5,u[L]=h[P])}for(const[w,_,I]of e)c[n.index(w,_,I)]=-rt;const v=new Uint8Array(a*o*l),g=new Uint32Array(a*o*l),p=[],x=new Set,M=(w,_,I)=>{if(!n.inBounds(w,_,I))return;const z=n.getHard(w,_,I);if(z===0)return;const F=n.index(w,_,I);if(x.has(F))return;x.add(F);const O=w-i,P=_-s,L=I-r;if(O<0||P<0||L<0||O>=a-1||P>=o-1||L>=l-1)return;const U=n.sub[F];v[(O*o+P)*l+L]=z,g[(O*o+P)*l+L]=U,p.push({x:O,y:P,z:L,mat:z,sub:U}),n.setHard(w,_,I,0),n.sub[F]=0};for(const[w,_,I]of t)M(w,_,I);for(const[w,_,I]of e)for(let z=-1;z<=0;z++)for(let F=-1;F<=0;F++)for(let O=-1;O<=0;O++)M(w+z,_+F,I+O);const y=d.slice();for(const w of p)if(pt(w.mat))for(let _=0;_<8;_++)y.push([w.x+(_&1),w.y+(_>>1&1),w.z+(_>>2&1)]);const S=[0,0,0];for(const[w,_,I]of y)S[0]+=w,S[1]+=_,S[2]+=I;const E=Math.max(1,y.length);S[0]=S[0]/E*b,S[1]=S[1]/E*b,S[2]=S[2]/E*b;const D=(w,_,I)=>w<0||_<0||I<0||w>=a||_>=o||I>=l?-1:f[(w*o+_)*l+I],C=[];let A=0;for(const[w,_,I]of d){const z=w*b-S[0],F=_*b-S[1],O=I*b-S[2];A=Math.max(A,Math.hypot(z,F,O));let P=!1;for(const[L,U,W]of Kl)if(D(w+L,_+U,I+W)<=0){P=!0;break}P&&C.push([z,F,O])}for(let w=d.length;w<y.length;w++){const[_,I,z]=y[w],F=_*b-S[0],O=I*b-S[1],P=z*b-S[2];A=Math.max(A,Math.hypot(F,O,P)),C.push([F,O,P])}return{ox:i,oy:s,oz:r,nx:a,ny:o,nz:l,density:f,material:u,hard:v,sub:g,items:p,solid:d,contacts:C,com:S,radius:Math.max(A,b),pos:[i*b+S[0],s*b+S[1],r*b+S[2]],q:[0,0,0,1],vel:[0,0,0],ang:[0,0,0],rest:0,age:0,settled:!1,touching:!1,texOrigin:[i*b,s*b,r*b]}}function df(n){return new Ca(n.nx,n.ny,n.nz,0,0,0,n.density,n.material,n.hard,n.sub)}function wl(n,e,t=[0,0,0]){return xt[0]=e[0]-n.pos[0],xt[1]=e[1]-n.pos[1],xt[2]=e[2]-n.pos[2],Cn(Ia(n.q),xt,t),t[0]+=n.com[0],t[1]+=n.com[1],t[2]+=n.com[2],t}function Ra(n,e,t=[0,0,0]){return xt[0]=e[0]-n.com[0],xt[1]=e[1]-n.com[1],xt[2]=e[2]-n.com[2],Cn(n.q,xt,t),t[0]+=n.pos[0],t[1]+=n.pos[1],t[2]+=n.pos[2],t}function Mw(n,e,t,i){const s=Ia(n.q),r=wl(n,e),a=[0,0,0];Cn(s,t,a);const o=Hu(df(n),r,a,i,.08);if(!o)return null;const l=Ra(n,o.point),c=[0,0,0];return Cn(n.q,o.normal,c),{point:l,normal:c,distance:o.distance,material:o.material,hard:!1}}function yw(n,e,t,i,s,r,a){const o=Math.min(0,e),l=Math.min(0,t),c=Math.min(0,i),h=Math.max(n.nx-1,s),f=Math.max(n.ny-1,r),u=Math.max(n.nz-1,a);if(o===0&&l===0&&c===0&&h===n.nx-1&&f===n.ny-1&&u===n.nz-1)return;const d=h-o+1,m=f-l+1,v=u-c+1,g=new Float32Array(d*m*v).fill(-rt),p=new Uint8Array(d*m*v),x=new Uint8Array(d*m*v),M=new Uint32Array(d*m*v);for(let y=0;y<n.nx;y++)for(let S=0;S<n.ny;S++)for(let E=0;E<n.nz;E++){const D=(y*n.ny+S)*n.nz+E,C=((y-o)*m+(S-l))*v+(E-c);g[C]=n.density[D],p[C]=n.material[D],x[C]=n.hard[D],M[C]=n.sub[D]}n.density=g,n.material=p,n.hard=x,n.sub=M,n.nx=d,n.ny=m,n.nz=v;for(const y of n.items)y.x-=o,y.y-=l,y.z-=c;n.com[0]-=o*b,n.com[1]-=l*b,n.com[2]-=c*b,n.texOrigin[0]+=o*b,n.texOrigin[1]+=l*b,n.texOrigin[2]+=c*b,n.ox+=o,n.oy+=l,n.oz+=c}function Sl(n){const{nx:e,ny:t,nz:i}=n,s=(f,u,d)=>f<0||u<0||d<0||f>=e||u>=t||d>=i?-1:n.density[(f*t+u)*i+d],r=[];for(let f=0;f<e;f++)for(let u=0;u<t;u++)for(let d=0;d<i;d++)s(f,u,d)>0&&r.push([f,u,d]);n.solid=r;const a=r.slice();for(const f of n.items)if(pt(f.mat))for(let u=0;u<8;u++)a.push([f.x+(u&1),f.y+(u>>1&1),f.z+(u>>2&1)]);if(!a.length){n.contacts=[];return}const o=[0,0,0];for(const[f,u,d]of a)o[0]+=f,o[1]+=u,o[2]+=d;o[0]=o[0]/a.length*b,o[1]=o[1]/a.length*b,o[2]=o[2]/a.length*b;const l=[o[0]-n.com[0],o[1]-n.com[1],o[2]-n.com[2]];Cn(n.q,l,xt),n.pos[0]+=xt[0],n.pos[1]+=xt[1],n.pos[2]+=xt[2],n.com=o;const c=[];let h=0;for(const[f,u,d]of r){const m=f*b-o[0],v=u*b-o[1],g=d*b-o[2];h=Math.max(h,Math.hypot(m,v,g));let p=!1;for(const[x,M,y]of Kl)if(s(f+x,u+M,d+y)<=0){p=!0;break}p&&c.push([m,v,g])}for(let f=r.length;f<a.length;f++){const[u,d,m]=a[f],v=u*b-o[0],g=d*b-o[1],p=m*b-o[2];h=Math.max(h,Math.hypot(v,g,p)),c.push([v,g,p])}n.contacts=c,n.radius=Math.max(h,b),n.rest=0,n.settled=!1}function ww(n,e){if(e.op==="add"&&Jn(e.mat))return[n];const t=wl(n,[e.x,e.y,e.z]),i=e.size*.5+b*2;e.op==="add"&&yw(n,Math.floor((t[0]-i)/b),Math.floor((t[1]-i)/b),Math.floor((t[2]-i)/b),Math.ceil((t[0]+i)/b),Math.ceil((t[1]+i)/b),Math.ceil((t[2]+i)/b));const s=wl(n,[e.x,e.y,e.z]),r={...e,x:s[0],y:s[1],z:s[2]},a=df(n);Zs(a,r),n.items=[];for(let m=0;m<n.nx-1;m++)for(let v=0;v<n.ny-1;v++)for(let g=0;g<n.nz-1;g++){const p=(m*n.ny+v)*n.nz+g;n.hard[p]!==0&&n.items.push({x:m,y:v,z:g,mat:n.hard[p],sub:n.sub[p]})}const{nx:o,ny:l,nz:c}=n,h=n.density,f=new Uint8Array(o*l*c),u=[];for(let m=0;m<o;m++)for(let v=0;v<l;v++)for(let g=0;g<c;g++){const p=(m*l+v)*c+g;if(h[p]<=0||f[p])continue;const x=[],M=[m,v,g];for(f[p]=1;M.length;){const y=M.pop(),S=M.pop(),E=M.pop();x.push([E,S,y]);for(const[D,C,A]of Kl){const w=E+D,_=S+C,I=y+A;if(w<0||_<0||I<0||w>=o||_>=l||I>=c)continue;const z=(w*l+_)*c+I;h[z]<=0||f[z]||(f[z]=1,M.push(w,_,I))}}if(x.length<=ha){for(const[y,S,E]of x)h[(y*l+S)*c+E]=-rt;continue}u.push(x)}if(u.length===0)return n.items.length?(Sl(n),[n]):[];if(u.length===1)return Sl(n),[n];const d=[];for(const m of u){let v=1/0,g=1/0,p=1/0,x=-1/0,M=-1/0,y=-1/0;for(const[D,C,A]of m)v=Math.min(v,D),g=Math.min(g,C),p=Math.min(p,A),x=Math.max(x,D),M=Math.max(M,C),y=Math.max(y,A);const S=yl(a,m,[],v-1,g-1,p-1,x-v+3,M-g+3,y-p+3),E=Ra(n,S.pos);S.pos=E,S.q=[n.q[0],n.q[1],n.q[2],n.q[3]],S.vel=[n.vel[0],n.vel[1],n.vel[2]],S.ang=[n.ang[0],n.ang[1],n.ang[2]],S.texOrigin=[n.texOrigin[0]+(v-1)*b,n.texOrigin[1]+(g-1)*b,n.texOrigin[2]+(p-1)*b],d.push(S)}return d}function Cn(n,e,t){const[i,s,r,a]=n,[o,l,c]=e,h=a*o+s*c-r*l,f=a*l+r*o-i*c,u=a*c+i*l-s*o,d=-i*o-s*l-r*c;return t[0]=h*a+d*-i+f*-r-u*-s,t[1]=f*a+d*-s+u*-i-h*-r,t[2]=u*a+d*-r+h*-s-f*-i,t}function Ia(n){return[-n[0],-n[1],-n[2],n[3]]}function Sw(n,e,t){const[i,s,r]=e,[a,o,l,c]=n,h=.5*t*(i*c+s*l-r*o),f=.5*t*(s*c+r*a-i*l),u=.5*t*(r*c+i*o-s*a),d=.5*t*(-i*a-s*o-r*l);let m=a+h,v=o+f,g=l+u,p=c+d;const x=Math.hypot(m,v,g,p)||1;n[0]=m/x,n[1]=v/x,n[2]=g/x,n[3]=p/x}const xt=[0,0,0],Pi=[0,0,0];function Aw(n,e,t,i=fw){if(e.settled)return;e.age+=t;const s=e.vel,r=e.ang;s[1]-=dw*t;const a=Math.hypot(s[0],s[1],s[2]);if(a>i){const g=i/a;s[0]*=g,s[1]*=g,s[2]*=g}e.pos[0]+=s[0]*t,e.pos[1]+=s[1]*t,e.pos[2]+=s[2]*t,Sw(e.q,r,t);const o=1,l=1/(.4*e.radius*e.radius);let c=0,h=0,f=0,u=0;e.touching=!1;for(const g of e.contacts){Cn(e.q,g,xt);const p=e.pos[0]+xt[0],x=e.pos[1]+xt[1],M=e.pos[2]+xt[2];let y,S=0,E=1,D=0;if(x<0)y=-x;else{const O=n.sample(p,x,M),P=n.hardAt(p,x,M)!==0&&n.hardOccupiedAt(p,x,M);if(O<=0&&!P)continue;y=P?Math.max(O,.12):O,n.gradient(p,x,M,Pi);const L=Math.hypot(Pi[0],Pi[1],Pi[2]);L>1e-4&&!P&&(S=-Pi[0]/L,E=-Pi[1]/L,D=-Pi[2]/L)}y=Math.min(y,.5),e.touching=!0;const C=xt[0],A=xt[1],w=xt[2],_=s[0]+(r[1]*w-r[2]*A),I=s[1]+(r[2]*C-r[0]*w),z=s[2]+(r[0]*A-r[1]*C),F=_*S+I*E+z*D;if(F<0){const O=A*D-w*E,P=w*S-C*D,L=C*E-A*S,U=o+l*(O*O+P*P+L*L),W=-1.12*F/U;s[0]+=W*S*o,s[1]+=W*E*o,s[2]+=W*D*o,r[0]+=l*O*W,r[1]+=l*P*W,r[2]+=l*L*W;const Q=_-F*S,j=I-F*E,ue=z-F*D,Ae=Math.hypot(Q,j,ue);if(Ae>1e-4){const _e=Q/Ae,we=j/Ae,K=ue/Ae,ne=A*K-w*we,fe=w*_e-C*K,Be=C*we-A*_e,Te=o+l*(ne*ne+fe*fe+Be*Be),Ue=Math.min(Ae/Te,pw*W);s[0]-=Ue*_e*o,s[1]-=Ue*we*o,s[2]-=Ue*K*o,r[0]-=l*ne*Ue,r[1]-=l*fe*Ue,r[2]-=l*Be*Ue}}c+=S*y,h+=E*y,f+=D*y,u++}u>0&&(e.pos[0]+=c/u*1.05,e.pos[1]+=h/u*1.05,e.pos[2]+=f/u*1.05);const d=Math.exp(-t*(u>0?.9:.05));s[0]*=d,s[2]*=d,u>0&&(s[1]*=d);const m=Math.exp(-t*(u>0?1.1:.3));r[0]*=m,r[1]*=m,r[2]*=m,e.pos[0]=Math.min(n.sizeX-e.radius,Math.max(e.radius,e.pos[0])),e.pos[2]=Math.min(n.sizeZ-e.radius,Math.max(e.radius,e.pos[2]));const v=u>0&&Math.hypot(s[0],s[1],s[2])<.25&&Math.hypot(r[0],r[1],r[2])<.35;e.rest=v?e.rest+t:0,(e.rest>mw&&e.age>gw||e.age>vw)&&(e.settled=!0)}function pf(n,e,t,i){const s=e/b,r=t/b,a=i/b,o=Math.floor(s),l=Math.floor(r),c=Math.floor(a);if(o<0||l<0||c<0||o>=n.nx-1||l>=n.ny-1||c>=n.nz-1)return-rt;const h=s-o,f=r-l,u=a-c,d=(y,S,E)=>n.density[(y*n.ny+S)*n.nz+E],m=d(o,l,c)+(d(o+1,l,c)-d(o,l,c))*h,v=d(o,l,c+1)+(d(o+1,l,c+1)-d(o,l,c+1))*h,g=d(o,l+1,c)+(d(o+1,l+1,c)-d(o,l+1,c))*h,p=d(o,l+1,c+1)+(d(o+1,l+1,c+1)-d(o,l+1,c+1))*h,x=m+(g-m)*f,M=v+(p-v)*f;return x+(M-x)*u}function _w(n,e){const t=e.radius+b*2;return{x0:Math.max(0,Math.floor((e.pos[0]-t)/b)),y0:Math.max(0,Math.floor((e.pos[1]-t)/b)),z0:Math.max(0,Math.floor((e.pos[2]-t)/b)),x1:Math.min(n.nx-1,Math.ceil((e.pos[0]+t)/b)),y1:Math.min(n.ny-1,Math.ceil((e.pos[1]+t)/b)),z1:Math.min(n.nz-1,Math.ceil((e.pos[2]+t)/b))}}function Ew(n,e){const t=(e.x1-e.x0+1)*(e.y1-e.y0+1)*(e.z1-e.z0+1),i=new Float32Array(t),s=new Uint8Array(t);let r=0;for(let a=e.x0;a<=e.x1;a++)for(let o=e.y0;o<=e.y1;o++)for(let l=e.z0;l<=e.z1;l++,r++){const c=n.index(a,o,l);i[r]=n.density[c],s[r]=n.material[c]}return{d:i,m:s}}function Tw(n,e,t){let i=0;for(let s=e.x0;s<=e.x1;s++)for(let r=e.y0;r<=e.y1;r++)for(let a=e.z0;a<=e.z1;a++,i++){const o=n.index(s,r,a);n.density[o]=t.d[i],n.material[o]=t.m[i]}}function bw(n,e,t){if(t<=1e-6)return Math.max(n,e);const i=Math.max(0,Math.min(1,.5+.5*(e-n)/t));return n+(e-n)*i+t*i*(1-i)}function Zr(n,e,t,i,s,r){const a=n.density,o=n.material,l=Ia(e.q),c=[0,0,0];let h=0;for(let f=t.x0;f<=t.x1;f++)for(let u=t.y0;u<=t.y1;u++)for(let d=t.z0;d<=t.z1;d++,h++){const m=n.index(f,u,d);xt[0]=f*b-e.pos[0],xt[1]=u*b-e.pos[1],xt[2]=d*b-e.pos[2],Cn(l,xt,c);const v=c[0]+e.com[0],g=c[1]+e.com[1],p=c[2]+e.com[2],x=pf(e,v,g,p)-s,M=i.d[h];if(u>=n.ny-1||x<=-b){a[m]=M,o[m]=i.m[h];continue}const y=Math.min(rt,bw(M,x,r));if(a[m]=y,x>M&&x>0){const S=Math.min(e.nx-1,Math.max(0,Math.round(v/b))),E=Math.min(e.ny-1,Math.max(0,Math.round(g/b))),D=Math.min(e.nz-1,Math.max(0,Math.round(p/b)));o[m]=e.material[(S*e.ny+E)*e.nz+D]||i.m[h]}else o[m]=i.m[h]}}function mf(n,e,t=[0,0,0]){return Ra(n,[(e.x+.5)*b,(e.y+.5)*b,(e.z+.5)*b],t)}function Xh(n,e){let t=0;e[0]=0,e[1]=0,e[2]=0;for(let i=0;i<27;i++)n&1<<i&&(e[0]+=i%3-1,e[1]+=Math.floor(i/3)%3-1,e[2]+=Math.floor(i/9)-1,t++);return t&&(e[0]/=t,e[1]/=t,e[2]/=t),t}function Cw(n,e){if(n===0||n===en)return n;const t=[Cn(e,[1,0,0],[0,0,0]),Cn(e,[0,1,0],[0,0,0]),Cn(e,[0,0,1],[0,0,0])],i=[-1,-1,-1],s=[1,1,1],r=[!1,!1,!1];for(let m=0;m<2;m++){let v=-1,g=-1,p=-1;for(let x=0;x<3;x++)if(!(i[x]>=0))for(let M=0;M<3;M++)!r[M]&&Math.abs(t[x][M])>p&&(p=Math.abs(t[x][M]),v=M,g=x);i[g]=v,s[g]=t[g][v]<0?-1:1,r[v]=!0}const a=i.indexOf(-1),o=r.indexOf(!1);i[a]=o;const l=(a+1)%3,c=(a+2)%3,h=[0,0,0],f=[0,0,0];h[i[l]]=s[l],f[i[c]]=s[c];const u=[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]];s[a]=u[o]<0?-1:1;let d=0;for(let m=0;m<27;m++)if(n&1<<m){const v=[m%3-1,Math.floor(m/3)%3-1,Math.floor(m/9)-1],g=[0,0,0];for(let p=0;p<3;p++)g[i[p]]+=s[p]*v[p];d|=1<<g[0]+1+3*(g[1]+1+3*(g[2]+1))}return d}const jr=[0,0,0],Jr=[0,0,0];function Yh(n,e){const t=n.density,i=n.material;for(const v of e.items){let g,p,x,M=0;if(pt(v.mat)){const E=v.sub||en;M=Cw(E,e.q),Xh(E,jr);const D=Ra(e,[(v.x+.5)*b+jr[0]*b/3,(v.y+.5)*b+jr[1]*b/3,(v.z+.5)*b+jr[2]*b/3]);Xh(M,Jr),g=Math.round((D[0]-Jr[0]*b/3)/b-.5),p=Math.round((D[1]-Jr[1]*b/3)/b-.5),x=Math.round((D[2]-Jr[2]*b/3)/b-.5)}else{const E=mf(e,v);g=Math.floor(E[0]/b),p=Math.floor(E[1]/b),x=Math.floor(E[2]/b)}if(!n.inBounds(g,p,x)||g>=n.nx-1||p>=n.ny-1||x>=n.nz-1)continue;const y=n.index(g,p,x),S=n.getHard(g,p,x);if(S===0)n.setHard(g,p,x,v.mat),n.sub[y]=M===en?0:M;else if(S===v.mat&&M!==0){const D=(n.sub[y]||en)|M;n.sub[y]=D===en?0:D}}const s=e.radius+b,r=Math.max(0,Math.floor((e.pos[0]-s)/b)),a=Math.min(n.nx-1,Math.ceil((e.pos[0]+s)/b)),o=Math.max(0,Math.floor((e.pos[1]-s)/b)),l=Math.min(n.ny-1,Math.ceil((e.pos[1]+s)/b)),c=Math.max(0,Math.floor((e.pos[2]-s)/b)),h=Math.min(n.nz-1,Math.ceil((e.pos[2]+s)/b)),f=Ia(e.q),u=[0,0,0];let d=null;for(let v=r;v<=a;v++)for(let g=o;g<=l;g++)for(let p=c;p<=h;p++){xt[0]=v*b-e.pos[0],xt[1]=g*b-e.pos[1],xt[2]=p*b-e.pos[2],Cn(f,xt,u);const x=u[0]+e.com[0],M=u[1]+e.com[1],y=u[2]+e.com[2],S=pf(e,x,M,y);if(S<=-b)continue;const E=n.index(v,g,p);if(S>t[E]&&g<n.ny-1){if(t[E]=Math.min(S,rt),S>0){const D=Math.min(e.nx-1,Math.max(0,Math.round(x/b))),C=Math.min(e.ny-1,Math.max(0,Math.round(M/b))),A=Math.min(e.nz-1,Math.max(0,Math.round(y/b)));i[E]=e.material[(D*e.ny+C)*e.nz+A]||i[E]}d=xw(d,{x0:v-1,y0:g-1,z0:p-1,x1:v+1,y1:g+1,z1:p+1})}}const m=d??{x0:r,y0:o,z0:c,x1:a,y1:l,z1:h};return{x0:Math.max(0,m.x0),y0:Math.max(0,m.y0),z0:Math.max(0,m.z0),x1:Math.min(n.nx-1,m.x1),y1:Math.min(n.ny-1,m.y1),z1:Math.min(n.nz-1,m.z1)}}function qh(n){return{ox:n.ox,oy:n.oy,oz:n.oz,nx:n.nx,ny:n.ny,nz:n.nz,density:Array.from(n.density,e=>+e.toFixed(4)),material:Array.from(n.material),hard:Array.from(n.hard),sub:Array.from(n.sub),items:n.items.map(e=>({...e})),pos:[...n.pos],q:[...n.q],vel:[...n.vel],ang:[...n.ang],age:n.age,texOrigin:[...n.texOrigin]}}function Dw(n){const e={ox:n.ox,oy:n.oy,oz:n.oz,nx:n.nx,ny:n.ny,nz:n.nz,density:Float32Array.from(n.density),material:Uint8Array.from(n.material),hard:Uint8Array.from(n.hard),sub:Uint32Array.from(n.sub),items:n.items.map(i=>({...i})),solid:[],contacts:[],com:[0,0,0],radius:b,pos:[...n.pos],q:[...n.q],vel:[...n.vel],ang:[...n.ang],rest:0,age:n.age,settled:!1,touching:!1,texOrigin:[...n.texOrigin]},t=[e.pos[0],e.pos[1],e.pos[2]];return Sl(e),e.pos=t,e}const Ys=7,qs=8,$r=16,ea=20,jt=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],wo=[1,0,3,2,5,4],ds=4,Qh=3e5;class Rw{constructor(e){this.field=e,this.N=e.nx*e.ny*e.nz,this.parent=new Uint8Array(this.N*2),this.sx=e.ny*e.nz,this.sy=e.nz}parent;N;sx;sy;xyz(e){const t=this.field,i=e<this.N?e:e-this.N;return[Math.floor(i/this.sx),Math.floor(i/this.sy)%t.ny,i%t.nz]}solid(e){return e<this.N?this.field.density[e]>0:pt(this.field.hard[e-this.N])}isRoot(e){return e>=this.N&&this.field.hard[e-this.N]===bs}cellIn(e,t,i){const s=this.field;return e>=0&&t>=0&&i>=0&&e<s.nx-1&&t<s.ny-1&&i<s.nz-1}cornerIn(e,t,i){const s=this.field;return e>=0&&t>=0&&i>=0&&e<s.nx&&t<s.ny&&i<s.nz}neighbours(e,t){const[i,s,r]=this.xyz(e);if(e<this.N){for(let a=0;a<6;a++){const o=i+jt[a][0],l=s+jt[a][1],c=r+jt[a][2];this.cornerIn(o,l,c)&&t(e+jt[a][0]*this.sx+jt[a][1]*this.sy+jt[a][2],wo[a]+1)}for(let a=0;a<8;a++){const o=a&1,l=a>>1&1,c=a>>2&1,h=i-o,f=s-l,u=r-c;this.cellIn(h,f,u)&&t(this.N+this.field.index(h,f,u),qs+a)}for(let a=0;a<4;a++){const o=a&1,l=a>>1&1,c=i-o,h=s+1,f=r-l;this.cellIn(c,h,f)&&t(this.N+this.field.index(c,h,f),$r+a)}}else{for(let a=0;a<6;a++){const o=i+jt[a][0],l=s+jt[a][1],c=r+jt[a][2];this.cellIn(o,l,c)&&t(e+jt[a][0]*this.sx+jt[a][1]*this.sy+jt[a][2],wo[a]+1)}for(let a=0;a<8;a++){const o=a&1,l=a>>1&1,c=a>>2&1;t(this.field.index(i+o,s+l,r+c),qs+a)}if(s>0)for(let a=0;a<4;a++){const o=a&1,l=a>>1&1;t(this.field.index(i+o,s-1,r+l),$r+a)}}}parentOf(e){const t=this.parent[e];if(t===0||t===Ys||t===ea)return-1;const[i,s,r]=this.xyz(e);if(t<qs){const h=t-1;return e+jt[h][0]*this.sx+jt[h][1]*this.sy+jt[h][2]}if(t>=$r){const h=t-$r,f=h&1,u=h>>1&1;return e<this.N?this.N+this.field.index(i-f,s+1,r-u):this.field.index(i+f,s-1,r+u)}const a=t-qs,o=a&1,l=a>>1&1,c=a>>2&1;return e<this.N?this.N+this.field.index(i-o,s-l,r-c):this.field.index(i+o,s+l,r+c)}build(){const e=this.field,t=this.parent,i=e.hard;t.fill(0);const s=[];for(let r=0;r<this.N;r++)i[r]===bs&&this.isRoot(this.N+r)&&(t[this.N+r]=Ys,s.push(this.N+r));this.grow(s)}grow(e){const t=this.parent;let i=0;for(;i<e.length;){const s=e[i++];this.neighbours(s,(r,a)=>{t[r]===0&&this.solid(r)&&(t[r]=a,e.push(r))}),i>65536&&i*2>e.length&&(e=e.slice(i),i=0)}}afterEdit(e,t=Qh){const i=this.field,s=this.parent;let r=0;const a=Math.max(0,e.x0-1),o=Math.max(0,e.y0-1),l=Math.max(0,e.z0-1),c=Math.min(i.nx-1,e.x1+1),h=Math.min(i.ny-1,e.y1+1),f=Math.min(i.nz-1,e.z1+1),u=[],d=[],m=C=>{if(!this.solid(C)){s[C]!==0&&(s[C]=0,u.push(C));return}s[C]===Ys&&!this.isRoot(C)?(s[C]=0,u.push(C),d.push(C)):s[C]===0&&d.push(C)};for(let C=a;C<=c;C++)for(let A=o;A<=h;A++)for(let w=l;w<=f;w++){const _=i.index(C,A,w);m(_),this.cellIn(C,A,w)&&m(this.N+_)}const v=[];let g=0;const p=u.slice();for(;g<p.length;){const C=p[g++];this.neighbours(C,A=>{s[A]===0||s[A]===Ys||s[A]===ea||!this.solid(A)||this.parentOf(A)!==C||(s[A]=0,v.push(A),p.push(A))})}const x=d.concat(v),M=[];for(const C of x)s[C]===0&&this.solid(C)&&this.isRoot(C)&&(s[C]=Ys,M.push(C));for(const C of x)s[C]!==0||!this.solid(C)||this.neighbours(C,(A,w)=>{s[C]!==0||!this.solid(A)||s[A]===0||(s[C]=this.reverse(C,A,w),M.push(C))});this.grow(M);const y=[];let S=null;const E=new Set,D=C=>{const{corners:A,cells:w}=this.component(C,E);let _=1/0,I=1/0,z=1/0,F=-1/0,O=-1/0,P=-1/0;for(const[U,W,Q]of A)_=Math.min(_,U),I=Math.min(I,W),z=Math.min(z,Q),F=Math.max(F,U),O=Math.max(O,W),P=Math.max(P,Q);for(const[U,W,Q]of w)_=Math.min(_,U),I=Math.min(I,W),z=Math.min(z,Q),F=Math.max(F,U+1),O=Math.max(O,W+1),P=Math.max(P,Q+1);const L={x0:Math.max(0,_-1),y0:Math.max(0,I-1),z0:Math.max(0,z-1),x1:Math.min(i.nx-1,F+1),y1:Math.min(i.ny-1,O+1),z1:Math.min(i.nz-1,P+1)};if(S=S?{x0:Math.min(S.x0,L.x0),y0:Math.min(S.y0,L.y0),z0:Math.min(S.z0,L.z0),x1:Math.max(S.x1,L.x1),y1:Math.max(S.y1,L.y1),z1:Math.max(S.z1,L.z1)}:L,w.length===0&&A.length<=ha){for(const[U,W,Q]of A)i.density[i.index(U,W,Q)]=-rt;return}if(A.length+w.length>t){this.hold(A,w),r++;return}y.push(yl(i,A,w,_-1,I-1,z-1,F-_+3,O-I+3,P-z+3))};for(const C of x)s[C]===0&&this.solid(C)&&!E.has(C)&&D(C);if(S){const C=S,A=Math.max(0,C.x0-ds),w=Math.max(0,C.y0-ds),_=Math.max(0,C.z0-ds),I=Math.min(i.nx-1,C.x1+ds),z=Math.min(i.ny-1,C.y1+ds),F=Math.min(i.nz-1,C.z1+ds);for(let O=A;O<=I;O++)for(let P=w;P<=z;P++)for(let L=_;L<=F;L++){const U=i.index(O,P,L);s[U]===0&&this.solid(U)&&!E.has(U)&&D(U);const W=this.N+U;this.cellIn(O,P,L)&&s[W]===0&&this.solid(W)&&!E.has(W)&&D(W)}}return{fragments:y,changed:S,held:r}}hold(e,t){const i=this.field,s=this.parent;for(const[r,a,o]of e)s[i.index(r,a,o)]=ea;for(const[r,a,o]of t)s[this.N+i.index(r,a,o)]=ea}reverse(e,t,i){return i<qs?wo[i-1]+1:i}component(e,t){const i=this.parent,s=[],r=[],a=[e];for(t.add(e);a.length;){const o=a.pop();(o<this.N?s:r).push(this.xyz(o)),this.neighbours(o,l=>{i[l]!==0||!this.solid(l)||t.has(l)||(t.add(l),a.push(l))})}return{corners:s,cells:r}}dropLoose(e=Qh){const t=this.field,i=this.parent,s=new Set,r=[];let a=null,o=0;for(let l=0;l<this.N*2;l++){if(i[l]!==0||!this.solid(l)||s.has(l))continue;const{corners:c,cells:h}=this.component(l,s);if(h.length===0&&c.length<=ha){for(const[x,M,y]of c)t.density[t.index(x,M,y)]=-rt;continue}if(c.length+h.length>e){this.hold(c,h),o++;continue}let f=1/0,u=1/0,d=1/0,m=-1/0,v=-1/0,g=-1/0;for(const[x,M,y]of c)f=Math.min(f,x),u=Math.min(u,M),d=Math.min(d,y),m=Math.max(m,x),v=Math.max(v,M),g=Math.max(g,y);for(const[x,M,y]of h)f=Math.min(f,x),u=Math.min(u,M),d=Math.min(d,y),m=Math.max(m,x+1),v=Math.max(v,M+1),g=Math.max(g,y+1);const p={x0:Math.max(0,f-1),y0:Math.max(0,u-1),z0:Math.max(0,d-1),x1:Math.min(t.nx-1,m+1),y1:Math.min(t.ny-1,v+1),z1:Math.min(t.nz-1,g+1)};a=a?{x0:Math.min(a.x0,p.x0),y0:Math.min(a.y0,p.y0),z0:Math.min(a.z0,p.z0),x1:Math.max(a.x1,p.x1),y1:Math.max(a.y1,p.y1),z1:Math.max(a.z1,p.z1)}:p,r.push(yl(t,c,h,f-1,u-1,d-1,m-f+3,v-u+3,g-d+3))}return{fragments:r,changed:a,held:o}}pruneSpecks(){const e=this.field,t=e.density,i=this.parent,s=new Set;let r=0;for(let a=0;a<this.N;a++){if(t[a]<=0||i[a]!==0||s.has(a))continue;const{corners:o,cells:l}=this.component(a,s);if(!(l.length||o.length>ha)){for(const[c,h,f]of o)t[e.index(c,h,f)]=-rt;r+=o.length}}return r}countUnsupported(){const e=this.parent;let t=0;for(let i=0;i<this.N*2;i++)e[i]===0&&this.solid(i)&&t++;return t}}const Iw=600;class Zl{cfg;field;gi;renderer;pool;bootLog="";world;input;touch;hud;body;edits;quality;time;timeRate=1/90;timePaused=!1;sun;brush={shape:"cube",sizeIndex:2,op:"add",matIndex:0,snap:!0};chunks=new Map;lightDirty=new Set;lastHashState="";lightRR=0;sweepSun=null;sweepDone=!1;giDirty=!1;lastGiUpload=0;lastLod=0;lastEdit=0;saveTimer=0;dirtySlabs=new Set;undoStack=[];fps=0;frames=0;fpsT=0;lastFrame=0;lastHash=0;anims=[];profiler=new hw;animalsParked=0;bubbleNow(){const e=this.tuning.bubble;if(e<=0)return null;const t=this.body.pos;return{x:t[0]/b,y:t[1]/b,z:t[2]/b,r:e/b}}waterKeys=new Set;waterLeft=new Set;waterAll=!1;lastWaterBuild=0;markWater(e){if(!e)this.waterAll=!0;else for(const t of cr.chunksOf(e,this.field))this.waterKeys.add(t)}markWaterCells(e){cr.chunksOfCells(e,this.field,this.waterKeys)}flow;sea;flowClock=0;handEmpty=!1;crouch=!1;crouchLatch=!1;eye=vi;foliage=1;falling=[];fallSpeed=7;slosh=0;editMs=Zh;lights=new Map;support;nextFragId=1;opts;lightSweeps=0;ready=!1;hit=null;hitBody=null;pickTarget=null;primeAim=!1;animals=[];regrowth=null;sand;sandOn=!0;sandClock=0;snow;snowOn=!0;snowClock=0;snowLoose;snowSlump;snowSlumpClock=0;tuning={...js};packClock=0;moved;movedBox=null;snowSeconds=0;playSeconds=0;animalsOn=!0;animalRng=fl(1);nextAnimalId=1;animalsDirty=!1;lastAnimalSave=0;constructor(e,t,i,s,r,a,o,l,c){this.pool=o,this.world=c,this.opts=t,this.cfg=s,this.field=i,this.edits=r,this.hud=a,this.quality=t.quality,this.foliage=t.foliage??(this.touchEnabledGuess()?.5:1),this.fallSpeed=t.fall??7,this.editMs=Math.max(60,Math.min(2e3,t.edit??Zh)),this.time=t.time??10.5,this.sun=oh(this.time),this.gi=new kv(i),this.support=new Rw(i),this.touch=new aw(document.getElementById("touch"));const h=this.touch.enabled||/Mobi|Android/i.test(navigator.userAgent);this.renderer=new ew(e,i,this.gi,s.seaLevel,{textures:l,shadowMapSize:t.test||h?2048:4096,antialias:!t.test,cheapGi:t.cheapGi??h,maxPixelRatio:h?1.5:2,post:t.post??(t.quality==="low"?1:2),giMode:t.giMode??"sh",giDiv:t.giDiv??(h?2:1),scatterDensity:1,volumetricSteps:t.volumetric===!1||t.quality==="low"?0:h?8:16,caustics:t.caustic!==!1,iceDebug:t.iceDebug??0,reflection:!h,variant:t.shader}),this.renderer.onShaderError=m=>this.hud.showError(m),this.profiler.summary=()=>this.profileLines(),window.addEventListener("error",m=>this.hud.showError("error: "+(m.message??"").slice(0,160))),window.addEventListener("unhandledrejection",m=>this.hud.showError("rejection: "+String(m.reason).slice(0,160))),this.input=new nw(e);const f=i.sizeX/2,u=i.sizeZ/2;if(this.body=Xu(f,Cs(i,f,u)+.2,u),this.input.yaw=Math.PI*.25,this.touch.setFly(!1),t.view&&t.view.length>=5){const m=t.view;this.body.pos[0]=m[0],this.body.pos[1]=m[1],this.body.pos[2]=m[2],this.input.yaw=m[3],this.input.pitch=m[4],m.length>=6&&(this.time=m[5],this.timePaused=!0),this.body.fly=!0}for(let m=0;m<s.chunksX;m++)for(let v=0;v<s.chunksY;v++)for(let g=0;g<s.chunksZ;g++)this.chunks.set(nt(m,v,g),{level:-1,wanted:0,inflight:!1,dirty:!1,triangles:0,version:0,shown:0,scatter:0,wantedScatter:0,nextBatch:null});this.hud.buildHotbar(this.renderer.textures),this.renderer.scatter.setFade(Aa-se*b*.9,8),this.hud.setSelected(0),this.hud.onFall=m=>{this.fallSpeed=m,yn({fall:m}),this.hud.say(`fall speed ${m} m/s`)},this.hud.onEditMs=m=>{this.editMs=Math.max(60,Math.min(2e3,m)),yn({edit:this.editMs})},this.hud.onFoliage=m=>{this.foliage=m,yn({foliage:m}),this.updateLod(!1),this.hud.say(`foliage ×${m}`)},this.animalsOn=t.animals??!0,this.sandOn=t.sand??!0,this.sand=new dh(i,s.seaLevel),this.snowOn=t.snow??!0,this.snowLoose=new Uint8Array(i.density.length),this.tuning=D1(t.tuning);const d=this.tuning;this.snow=new b1(i,this.snowLoose,{reach:Math.max(1,Math.round(d.snowReach/b)),creep:d.snowCreep,calve:Math.round(d.snowCalve/b),slab:Math.round(d.snowSlab/b)}),this.moved=new Int8Array(i.density.length),this.snowSlump=new dh(i,s.seaLevel,{material:Fn,repose:d.snowRepose,rate:d.snowSlumpRate,loose:this.snowLoose,moved:this.moved,impact:d.snowImpact}),this.sand.opts.repose=d.sandRepose,this.sand.opts.rate=d.sandRate,window.addEventListener("pagehide",()=>this.flushNow()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&this.flushNow()}),this.hud.onAnimals=m=>{this.animalsOn=m,yn({animals:m}),m||this.renderer.clearAnimals(),this.hud.say(m?"animals on":"animals off")},this.hud.onSand=m=>{this.sandOn=m,yn({sand:m}),m||this.sand.clear(),this.hud.say(m?"sand slumps":"sand holds")},this.hud.onTuning=(m,v)=>{this.tuning[m]=v,this.applyTuning(),yn({tuning:this.tuningDiff()})},this.hud.onTuningDefaults=()=>{this.tuning={...js},this.applyTuning(),this.hud.setTuning(this.tuning),yn({tuning:{}}),this.hud.say("advanced settings back to defaults")},this.applyTuning(),this.hud.onSnow=m=>{this.snowOn=m,yn({snow:m}),m||(this.snow.clear(),this.snowSlump.clear()),this.hud.say(m?"snow breaks":"snow holds")},this.hud.onQuality=m=>{this.quality=m,yn({quality:m}),this.lastLod=0,this.renderer.setPost(m==="low"?1:2)},this.hud.onResetEdits=()=>{Vh(this.cfg.seed),Ch(this.cfg.seed).then(()=>location.reload())},this.hud.onNewWorld=(m,v)=>{yn({seed:m}),location.href=location.pathname+"?seed="+m+(v?"&chunks="+v:"")},this.hud.onLoadWorld=m=>{if(m===this.cfg.seed){this.resume();return}yn({seed:m}),location.href=location.pathname+"?seed="+m},this.hud.onRenameWorld=(m,v)=>{hx(m,v).then(()=>this.refreshWorlds()),m===this.cfg.seed&&this.world&&(this.world.name=v)},this.hud.onDeleteWorld=m=>{if(m===this.cfg.seed){this.hud.onResetEdits?.();return}Ch(m).then(()=>this.refreshWorlds())},this.hud.onResume=()=>this.resume(),this.hud.onMenu=()=>{document.pointerLockElement&&document.exitPointerLock(),this.showMenu()},this.hud.onCopyLink=()=>{const m=this.shareLink();navigator.clipboard?.writeText(m).then(()=>this.hud.say("link copied"),()=>this.hud.say(m,6e3))},this.hud.onTime=m=>{this.time=m,this.timePaused=!0},this.hud.onTimeFlow=()=>{this.timePaused=!this.timePaused,this.hud.say(this.timePaused?"time paused":"time flowing")},this.hud.onSelectSlot=m=>this.selectSlot(m),this.renderer.setHandItem(fn[0].id),e.addEventListener("click",()=>{!this.hud.overlayVisible&&!this.input.freeMouse&&this.input.requestLock()}),document.addEventListener("pointerlockchange",()=>{!this.input.locked&&!t.test&&!this.touch.enabled&&!this.input.freeMouse&&this.showMenu()}),window.addEventListener("resize",()=>this.renderer.resize())}touchEnabledGuess(){return"ontouchstart"in window||/Mobi|Android/i.test(navigator.userAgent)}static async create(e,t,i){const s=t.chunks??nh.chunksX,r={...nh,seed:t.seed,chunksX:s,chunksZ:s},a=new tw(t.test?2:Math.max(1,Math.min(6,(navigator.hardwareConcurrency||4)-1))),o=performance.now(),l=[],c=C=>l.push(`${C} ${(performance.now()-o).toFixed(0)}`);i.setLoading(.02,"shaping terrain");const h=a.textures(Ay),f=cx(r.seed,s),u=ax(r.seed),d=new Ca(r.chunksX*se+1,r.chunksY*se+1,r.chunksZ*se+1),m=r.chunksX*r.chunksY*r.chunksZ;let v=0;const g=se+1,p=[];for(let C=0;C<r.chunksX;C++)for(let A=0;A<r.chunksY;A++)for(let w=0;w<r.chunksZ;w++)p.push(a.gen(C,A,w,r,A*8+Math.abs(C-r.chunksX/2)+Math.abs(w-r.chunksZ/2)).then(_=>{for(let I=0;I<g;I++)for(let z=0;z<g;z++){const F=(I*g+z)*g,O=d.index(C*se+I,A*se+z,w*se);d.density.set(_.density.subarray(F,F+g),O),d.material.set(_.material.subarray(F,F+g),O)}v++,((v&7)===0||v===m)&&i.setLoading(.02+.28*(v/m),`shaping terrain · ${v} / ${m}`)}));await Promise.all(p),c("terrain"),i.setLoading(.3,"planting trees"),await di(),new sh(r).plantTrees(d),c("trees"),lf(d,r.seaLevel),c("water");const x=_y(await h),M=await f;c("textures"),i.setLoading(.35,"loading your world"),await di();const y=await u;for(const C of y)Wh(d,C);c1(d),Fv(d);const S=uy(d,r.seaLevel);for(const C of y)if(C.water===void 0)for(let A=C.cx*se;A<C.cx*se+se;A++)for(let w=C.cy*se;w<C.cy*se+se;w++)for(let _=C.cz*se;_<C.cz*se+se;_++){const I=d.index(A,w,_);S[I]&&(d.water[I]=vt)}for(let C=0;C<d.water.length;C++)d.water[C]===1&&(d.water[C]=vt);const E=[];if(y.length===0){const C=uw(r.seed);if(C.length){i.setLoading(.4,`converting ${C.length} old edits`),await di();const A=new Set;for(let _=0;_<C.length;_++){const I=Zs(d,C[_]);for(const[z,F,O]of Zt(I,r.chunksX,r.chunksY,r.chunksZ))A.add(nt(z,F,O));(_&31)===31&&(i.setLoading(.4+.05*(_/C.length),`converting ${_+1} / ${C.length} old edits`),await di())}const w=[];for(const _ of A){const[I,z,F]=Qs(_);w.push(yo(d,I,z,F))}await bh(r.seed,w),Vh(r.seed)}}i.setLoading(.45,"painting materials"),await di(),c("slabs");const D=new Zl(e,t,d,r,E,i,a,x,M);D.renderer.water.rebuild(d),D.seedAnimals(),D.resumeBodies(),D.regrowth=new $1(new sh(r),d.sizeX,d.sizeZ),D.sea=S,D.flow=new my(d,r.seaLevel,S);for(const[C,A,w]of M?.sources??[])d.inBounds(C,A,w)&&D.flow.addSource(C,A,w,D.pourLevels());try{navigator.storage?.persist?.()}catch{}return c("renderer"),i.setLoading(.6,"finding what stands on what"),await di(),D.support.build(),D.settleLoose(),c("support"),i.setLoading(.7,"lighting the world"),await di(),D.injectAll(),D.renderer.giTex.upload(),D.renderer.giUploaded(),D.renderer.setSun(D.sun),c("light"),i.setLoading(.8,"meshing chunks"),await di(),D.updateLod(!0),c("lod"),D.bootLog=l.join(" · "),D}resume(){this.hud.hideOverlay(),!this.opts.test&&!this.touch.enabled&&this.input.requestLock()}showMenu(){this.hud.showOverlay(this.cfg.seed,this.quality,this.foliage,this.fallSpeed,this.animalsOn,this.sandOn,this.editMs,this.snowOn),this.hud.setTuning(this.tuning),this.refreshWorlds()}async refreshWorlds(){const e=await ox();this.world&&!e.some(t=>t.id===this.world.id)&&e.unshift(this.world),this.hud.renderWorlds(e,this.cfg.seed)}sandKeys=[];slumpKeys=[];moving=new Map;markMoving(e){const t=this.lastNow+Lw;for(const i of e){this.moving.set(i,t);const s=this.chunks.get(i);s&&(s.wanted=0)}}sandStepAt=0;sandTurn=0;slumpStepAt=0;slumpTurn=0;paced(e,t,i){return e>=Math.max(1/t,i*Bw)}passesDue(e,t){return Math.max(1,Math.min(Uw,Math.round(e*t)))}meshesLanded(e){return e.every(t=>!this.chunks.get(t)?.inflight)}stepSand(e){if(!this.sandOn||!this.sand.pending&&!this.sand.parked){this.sandTurn=0;return}if(this.sandClock+=Math.min(e,.1),!this.meshesLanded(this.sandKeys))return;if(this.sandStepAt){const o=(this.lastNow-this.sandStepAt)/1e3;this.sandTurn=this.sandTurn?this.sandTurn*.7+o*.3:o,this.sandStepAt=0}if(!this.paced(this.sandClock,this.tuning.sandHz,this.sandTurn))return;const t=this.passesDue(this.sandClock,this.tuning.sandHz);this.sandClock=0,this.sandStepAt=this.lastNow;let i=null;for(let o=0;o<t&&this.sand.pending;o++){const l=this.sand.step(this.bubbleNow());l&&(i=i?sn(i,l):l)}if(!i)return;const s=this.support.afterEdit(i);for(const o of s.fragments)this.launch(o);const r=s.changed?sn(i,s.changed):i;this.markMoving(Zn(r,se,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([o,l,c])=>nt(o,l,c)));const a=this.refresh(r,!0);this.sandKeys=Zn(a,se,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([o,l,c])=>nt(o,l,c));for(const[o,l,c]of Zt(a,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nt(o,l,c));this.scheduleSave()}stepSnow(e){if(!this.snowOn||!this.snow.pending&&!this.snow.parked)return;const t=Math.min(e,.1);this.snowClock+=t,this.snowSeconds+=t,this.packClock+=t,this.packClock>=60&&(this.packClock=0,C1(this.snowLoose,this.tuning.snowPack)),!(this.snowClock<A1)&&(this.snowClock=0,this.afterSnow(this.snow.step(this.snowSeconds,this.bubbleNow())))}afterSnow(e){if(e.changed&&(this.snowSlump.wake(e.changed),e.loosened>0)){const t=e.changed,i=this.renderer.time,s=Math.min(24,2+Math.floor(e.loosened/4));for(let r=0;r<s;r++)this.renderer.puffs.emit((t.x0+Math.random()*(t.x1-t.x0))*b,(t.y0+Math.random()*(t.y1-t.y0))*b,(t.z0+Math.random()*(t.z1-t.z0))*b,5,1.4,i)}}waterSlice(e,t,i,s){const r=this.field,a=new Uint8Array(s*s*s);let o=!1;for(let l=Math.max(0,e);l<Math.min(r.nx-1,e+s);l++)for(let c=Math.max(0,t);c<Math.min(r.ny-1,t+s);c++)for(let h=Math.max(0,i);h<Math.min(r.nz-1,i+s);h++)r.water[r.index(l,c,h)]&&(a[((l-e)*s+(c-t))*s+(h-i)]=1,o=!0);return o?a:void 0}wetBox=null;lastWetMesh=0;wetChanged(e){this.wetBox=this.wetBox?sn(this.wetBox,e):e}flushWet(e,t){if(!this.wetBox||!t&&e-this.lastWetMesh<2500)return;const i=this.wetBox;this.wetBox=null,this.lastWetMesh=e,this.batched(()=>{for(const[s,r,a]of Zn(i,se,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.requestMesh(s,r,a)})}movedSlice(e,t,i,s){const r=this.movedBox;if(!r||e>r.x1||t>r.y1||i>r.z1||e+s<=r.x0||t+s<=r.y0||i+s<=r.z0)return;const a=this.field,o=new Int8Array(s*s*s);let l=!1;for(let c=Math.max(0,e);c<Math.min(a.nx,e+s);c++)for(let h=Math.max(0,t);h<Math.min(a.ny,t+s);h++)for(let f=Math.max(0,i);f<Math.min(a.nz,i+s);f++){const u=this.moved[a.index(c,h,f)];u&&(o[((c-e)*s+(h-t))*s+(f-i)]=u,l=!0)}return l?o:void 0}stepSnowSlump(e){if(!this.snowOn||!this.snowSlump.pending&&!this.snowSlump.parked){this.slumpTurn=0;return}if(this.snowSlumpClock+=Math.min(e,.1),!this.meshesLanded(this.slumpKeys))return;if(this.slumpStepAt){const r=(this.lastNow-this.slumpStepAt)/1e3;this.slumpTurn=this.slumpTurn?this.slumpTurn*.7+r*.3:r,this.slumpStepAt=0}if(!this.paced(this.snowSlumpClock,this.tuning.snowSlumpHz,this.slumpTurn))return;const t=this.passesDue(this.snowSlumpClock,this.tuning.snowSlumpHz);this.snowSlumpClock=0,this.slumpStepAt=this.lastNow;let i=null;const s=[];for(let r=0;r<t&&this.snowSlump.pending;r++){const a=this.snowSlump.step(this.bubbleNow());a&&(i=i?sn(i,a):a),s.push(...this.snowSlump.landed)}this.afterSlump(i,s)}afterSlump(e,t){if(!e)return;if(t.length){const a=this.renderer.time,o=Math.max(1,Math.floor(t.length/3/24));for(let l=0;l<t.length;l+=3*o)this.renderer.puffs.emit((t[l]+.5)*b,(t[l+1]+.3)*b,(t[l+2]+.5)*b,3,.8,a)}const i=this.support.afterEdit(e);for(const a of i.fragments)this.launch(a);this.snow.wake(e),this.movedBox=e;const s=i.changed?sn(e,i.changed):e;this.markMoving(Zn(s,se,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([a,o,l])=>nt(a,o,l)));const r=this.refresh(s,!0);for(let a=e.x0;a<=e.x1;a++)for(let o=e.y0;o<=e.y1;o++)for(let l=e.z0;l<=e.z1;l++)this.moved[this.field.index(a,o,l)]=0;this.movedBox=null,this.slumpKeys=Zn(r,se,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([a,o,l])=>nt(a,o,l));for(const[a,o,l]of Zt(r,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nt(a,o,l));this.scheduleSave()}applyTuning(){const e=this.tuning;if(this.sand.opts.repose=e.sandRepose,this.sand.opts.rate=e.sandRate,this.snow.opts.reach=Math.max(1,Math.round(e.snowReach/b)),this.snow.opts.creep=e.snowCreep,this.snow.opts.calve=Math.round(e.snowCalve/b),this.snow.opts.slab=Math.round(e.snowSlab/b),this.snowSlump.opts.repose=e.snowRepose,this.snowSlump.opts.rate=e.snowSlumpRate,this.snowSlump.opts.clumps=e.snowClumps,this.snowSlump.opts.crown=e.snowCrown/b,this.snowSlump.opts.impact=e.snowImpact,this.renderer.tweenMax=e.tween,this.renderer.caustics=e.caustics>.5,this.profiler.enabled=e.profile>.5,this.flow)for(const t of this.flow.sources.keys())this.flow.sources.set(t,this.pourLevels())}tuningDiff(){const e={};for(const t of Object.keys(js))this.tuning[t]!==js[t]&&(e[t]=this.tuning[t]);return e}markLooseSnow(e,t){const i=this.field;let s=!1,r=0;for(let a=e.x0;a<=e.x1;a++)for(let o=e.y0;o<=e.y1;o++)for(let l=e.z0;l<=e.z1;l++,r++){const c=i.index(a,o,l);t.d[r]<=0&&i.density[c]>0&&i.material[c]===Fn&&(this.snowLoose[c]=1,s=!0)}return s}settleSnowSlump(e=400){let t=0,i=null;for(;t<e&&this.snowSlump.pending;){t++;const s=this.snowSlump.step();s&&(i=i?sn(i,s):s)}return this.afterSlump(i,[]),t}lastMass=-1e9;massText="";massReadout(){const e=this.field,t=e.density,i=e.material;let s=0,r=0;for(let o=0;o<t.length;o++)t[o]>0&&(s++,i[o]===Fn&&r++);let a=0;for(const o of this.falling)o.blend||(a+=o.frag.solid.length);return`mass ${s+a} (${r} snow, ${a} riding)`}settleSnow(e=200){const t=this.snow.settle(e,this.snowSeconds);return this.snowSeconds+=e*(this.tuning.snowCreep*2+.01),this.afterSnow(t),t.loosened}settleWater(e=200){let t=0,i=null;for(;t<e&&this.flow.active;){t++;const s=this.flow.step();s.changed&&(i=i?sn(i,s.changed):s.changed)}if(i){this.markWater(i),this.wetChanged(i),this.flushWet(this.lastNow,!0);for(const[s,r,a]of Zt(i,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nt(s,r,a))}return t}settleSand(e=600){let t=0,i=null;for(;t<e&&this.sand.pending;){t++;const s=this.sand.step();s&&(i=i?sn(i,s):s)}if(i){const s=this.support.afterEdit(i);for(const a of s.fragments)this.launch(a);const r=this.refresh(s.changed?sn(i,s.changed):i,!0);for(const[a,o,l]of Zt(r,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nt(a,o,l));this.scheduleSave()}return t}stepRegrowth(e){if(!this.regrowth)return;this.playSeconds+=Math.min(e,.1);const t=this.regrowth.step(this.field,this.playSeconds,this.body.pos,this.animalRng);for(const i of t){const s=this.support.afterEdit(i);for(const a of s.fragments)this.launch(a);this.sandOn&&this.sand.wake(i),this.snowOn&&this.snow.wake(i);const r=this.refresh(s.changed?sn(i,s.changed):i,!0);for(const[a,o,l]of Zt(r,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nt(a,o,l));this.scheduleSave()}}seedAnimals(){this.animalRng=fl((this.cfg.seed^2577)>>>0);const e=this.world?.animals,t=e?[...e]:[],i=this.cfg.chunksX*this.cfg.chunksZ,s=o=>t.some(l=>l.kind===o);let r=!1;s("goat")||(t.push(...Ah(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(2,Math.round(i/8)),this.animalRng,[Ts,Es])),r=!0),s("penguin")||(t.push(...Y1(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(3,Math.round(i/10)),this.animalRng,[or,Fn])),r=!0),s("fish")||(t.push(...q1(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(5,Math.round(i/6)),this.animalRng)),r=!0),s("cat")||(t.push(...Ah(this.field,this.cfg.seaLevel,this.cfg.seed,Math.max(1,Math.round(i/32)),this.animalRng,[Ts,Es],"cat")),r=!0),this.animals=t.map(o=>O1(this.field,o,this.nextAnimalId++)),r&&(this.animalsDirty=!0);const a=[["goat",Fl],["penguin",Nl],["fish",Ol],["cat",kl]];for(const[o,l]of a)for(let c=0;c<P1;c++)this.pool.skin(o,c,l).then(h=>this.renderer.setSkin(o,c,h))}stepAnimals(e){if(!this.animalsOn||!this.animals.length)return;const t=this.animals.length,i=this.tuning.bubble,s=this.body.pos,r=i>0?this.animals.filter(o=>Math.hypot(o.body.pos[0]-s[0],o.body.pos[2]-s[2])<=i):this.animals;this.animalsParked=this.animals.length-r.length,W1(this.field,r,Math.min(e,.05),this.body.pos,this.animalRng);for(const o of r)this.renderer.placeAnimal(o.id,o.kind,G1(o),o.body.pos,o.yaw,o.pitch);t&&(this.animalsDirty=!0);const a=this.lastNow;if(this.animalsDirty&&a-this.lastAnimalSave>8e3){this.lastAnimalSave=a,this.animalsDirty=!1;const o=this.animals.map(Sh);this.world&&(this.world.animals=o),Th(this.cfg.seed,o)}}pick(e){if(e.kind==="water"){const s=fy(this.field,e.cell[0],e.cell[1],e.cell[2],this.sea);if(this.pickTarget=null,!s)return;this.flow.dropDrySources()&&go(this.cfg.seed,this.sourceList()),this.flow.wake(s.box),this.markWater(s.box),this.wetChanged(s.box),this.flushWet(this.lastNow,!0),this.renderer.water.splash((e.cell[0]+.5)*b,(e.cell[2]+.5)*b,1.5,-.05);for(const[r,a,o]of Zt(s.box,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nt(r,a,o));this.scheduleSave(),this.hud.say(`${(s.cells*b*b*b).toFixed(s.cells<80?1:0)} m³ of water hoovered`);return}if(e.kind==="animal"){const s=this.animals.find(r=>r.id===e.id)?.kind??"animal";this.animals=this.animals.filter(r=>r.id!==e.id),this.renderer.removeAnimal(e.id),this.animalsDirty=!0,this.hud.say(`${s} removed`),this.pickTarget=null;return}const{c:t,size:i}=this.pickBox(e);this.applyEdit({op:"sub",shape:"cube",size:i,mat:e.mat,x:t[0],y:t[1],z:t[2],pick:!0}),this.hud.say(`${Dt[e.mat]?.name??"light"} removed`),this.pickTarget=null}pickBox(e){const[t,i,s]=e.cell,r=[(t+.5)*b,(i+.5)*b,(s+.5)*b];if(!pt(e.mat))return{c:r,size:b};const a=Math.max(b,ci[this.brush.sizeIndex]);return{c:this.brush.snap?[Math.floor(r[0]/a)*a+a/2,Math.floor(r[1]/a)*a+a/2,Math.floor(r[2]/a)*a+a/2]:r,size:a}}selectSlot(e){if(e===this.brush.matIndex&&!this.handEmpty){this.handEmpty=!0,this.hud.setSelected(-1),this.renderer.setHandItem(0),this.hud.say("empty hand");return}this.handEmpty=!1,this.brush.matIndex=e,this.hud.setSelected(e),this.syncShapeToMaterial(),this.renderer.setHandItem(fn[e].id)}syncShapeToMaterial(){Jn(fn[this.brush.matIndex].id)&&(this.brush.shape="cube",this.brush.snap=!0)}injectAll(){const e=se/bt;for(let t=0;t<this.cfg.chunksX;t++)for(let i=0;i<this.cfg.chunksY;i++)for(let s=0;s<this.cfg.chunksZ;s++)Or(this.field,this.gi,t,i,s,e,this.sun);this.lightSweeps++,this.giDirty=!0}lightTexels(e,t,i){const s=this.gi,r=s.texel,a=se/bt,o=e/r-.5,l=t/r-.5,c=i/r-.5,h=Math.floor(o),f=Math.floor(l),u=Math.floor(c),d=o-h,m=l-f,v=c-u,g=[];for(let p=0;p<=1;p++)for(let x=0;x<=1;x++)for(let M=0;M<=1;M++){const y=h+p,S=f+x,E=u+M;if(y<0||S<0||E<0||y>=s.sx||S>=s.sy||E>=s.sz)continue;const D=(p?d:1-d)*(x?m:1-m)*(M?v:1-v);D<.001||g.push({o:s.index(y,S,E),chunk:nt(Math.floor(y/a),Math.floor(S/a),Math.floor(E/a)),w:D})}return g}extraLights(e){let t;for(const i of this.lights.values())if(i.chunks.has(e))for(const s of this.lightTexels(i.x,i.y,i.z)){if(s.chunk!==e)continue;t??=new Map;const r=t.get(s.o);r?(r[0]+=i.r*s.w,r[1]+=i.g*s.w,r[2]+=i.b*s.w,r[3]=Math.max(r[3],i.kind)):t.set(s.o,[i.r*s.w,i.g*s.w,i.b*s.w,i.kind])}return t}setLight(e,t,i,s,r,a,o,l){const c=this.lights.get(e);if(c&&Math.hypot(c.x-t,c.y-i,c.z-s)<this.gi.texel/6&&c.r===r&&c.kind===l||c&&this.lastNow-c.at<30)return;const h=new Set;for(const u of this.lightTexels(t,i,s))h.add(u.chunk);const f=new Set(h);if(c)for(const u of c.chunks)f.add(u);this.lights.set(e,{x:t,y:i,z:s,r,g:a,b:o,kind:l,chunks:h,at:this.lastNow}),this.relightNow(f)}clearLight(e){const t=this.lights.get(e);t&&(this.lights.delete(e),this.relightNow(t.chunks))}relightNow(e){const t=se/bt;for(const i of e){const[s,r,a]=Qs(i);Or(this.field,this.gi,s,r,a,t,this.sun,this.extraLights(i)),this.lightDirty.delete(i)}this.giDirty=!0}updateLights(){const e=new Set,t=fn[this.brush.matIndex],i=this.renderer.handWorld();if(i&&t.emissive&&!this.handEmpty){const s=.25*(pt(t.id)?dl:1);this.setLight("hand",i.x,i.y,i.z,t.emissive[0]*s,t.emissive[1]*s,t.emissive[2]*s,pt(t.id)?1:0),e.add("hand")}for(const s of this.falling)s.cooking||s.frag.items.forEach((r,a)=>{const o=Dt[r.mat];if(!o?.emissive)return;const l=mf(s.frag,r),c=`body:${s.id}:${a}`,h=pt(r.mat)?dl:1;this.setLight(c,l[0],l[1],l[2],o.emissive[0]*h,o.emissive[1]*h,o.emissive[2]*h,pt(r.mat)?1:0),e.add(c)});for(const s of this.lights.keys())e.has(s)||this.clearLight(s)}lightStep(e){this.updateLights();const t=this.opts.test?12:2.5,i=performance.now(),s=se/bt,r=this.cfg.chunksX*this.cfg.chunksY*this.cfg.chunksZ;let a=0;for(const c of this.lightDirty){const[h,f,u]=Qs(c);if(Or(this.field,this.gi,h,f,u,s,this.sun,this.extraLights(c),!0),this.lightDirty.delete(c),a++,performance.now()-i>t)break}const o=this.sun.dir;for((!this.sweepSun||Math.hypot(o[0]-this.sweepSun[0],o[1]-this.sweepSun[1],o[2]-this.sweepSun[2])>.001)&&(this.sweepDone=!1,this.sweepSun=[o[0],o[1],o[2]]);!this.sweepDone&&performance.now()-i<t;){const c=this.lightRR,h=Math.floor(c/(this.cfg.chunksY*this.cfg.chunksZ)),f=Math.floor(c/this.cfg.chunksZ)%this.cfg.chunksY,u=c%this.cfg.chunksZ;Or(this.field,this.gi,h,f,u,s,this.sun,void 0,!0),this.lightRR=(c+1)%r,this.lightRR===0&&(this.lightSweeps++,this.sweepDone=!0),a++}if(a>0&&(this.giDirty=!0),this.giDirty&&e-this.lastGiUpload>(this.opts.test?30:150)){const c=this.gi.easeStep(this.opts.test?1:Pw);this.renderer.giTex.upload(),this.renderer.giUploaded(),this.giDirty=c>0,this.lastGiUpload=e}}wantedLevel(e,t,i,s){const r=se*b,a=this.renderer.camera.position,o=Math.hypot((e+.5)*r-a.x,(t+.5)*r-a.y,(i+.5)*r-a.z);return mx(o,s,this.quality)}updateLod(e){const t=this.lastNow;for(const[s,r]of this.moving)r<=t&&this.moving.delete(s);const i=()=>{for(const[s,r]of this.chunks){const[a,o,l]=Qs(s),c=this.moving.has(s)?0:this.wantedLevel(a,o,l,r.level),h=this.scatterFor(a,o,l,r.scatter);(c!==r.wanted||h!==r.wantedScatter||e||r.level<0)&&(r.wanted=c,r.wantedScatter=h,(r.level!==c||r.scatter!==h||r.level<0)&&this.requestMesh(a,o,l,e?null:this.curBatch))}};e?i():this.batched(i),this.pool.reprioritize(s=>this.priority(s.cx,s.cy,s.cz))}scatterFor(e,t,i,s){if(this.foliage<=0)return 0;const r=se*b;return Math.hypot((e+.5)*r-this.body.pos[0],(t+.5)*r-this.body.pos[1],(i+.5)*r-this.body.pos[2])<Aa+(s>0?ju:0)?this.foliage:0}priority(e,t,i){const s=se*b;return Math.hypot((e+.5)*s-this.body.pos[0],(t+.5)*s-this.body.pos[1],(i+.5)*s-this.body.pos[2])}curBatch=null;batches=new Set;batched(e){const t=this.curBatch,i={pending:0,swaps:[],t0:performance.now(),flushed:!1};this.curBatch=i;try{e()}finally{this.curBatch=t}i.pending>0&&this.batches.add(i)}flushBatch(e){e.flushed=!0,this.batches.delete(e);const t=e.swaps;e.swaps=[];for(const i of t)i()}flushStaleBatches(e){for(const t of this.batches)e-t.t0>Iw&&this.flushBatch(t)}requestMesh(e,t,i,s=this.curBatch,r=!1){const a=nt(e,t,i),o=this.chunks.get(a);if(o.inflight){o.dirty=!0,s&&!s.flushed&&!o.nextBatch&&(s.pending++,o.nextBatch=s);return}s&&!r&&s.pending++,o.inflight=!0,o.dirty=!1;const l=2,c=se+1+2*l,h=this.field.extract(e*se-l,t*se-l,i*se-l,c,c,c),f=o.wanted,u=o.wantedScatter,d=gx(f,this.quality),m=o.version>0&&!this.noSlide.delete(a),v=m?this.movedSlice(h.ox,h.oy,h.oz,c):void 0,g=u>0?this.waterSlice(h.ox,h.oy,h.oz,c):void 0;this.pool.submit({cx:e,cy:t,cz:i,ox:h.ox,oy:h.oy,oz:h.oz,n:c,density:h.density,material:h.material,hard:h.hard,sub:h.sub,levels:f,scatter:u,morphAt:d,from:m,moved:v,water:g},this.priority(e,t,i)).then(p=>{const x=()=>{o.inflight=!1,o.level=p.levels,o.scatter=u;const M=++o.version;o.triangles=p.vertexCount/3,this.renderer.setChunk(e,t,i,{positions:p.positions,normals:p.normals,mats:p.mats,bary:p.bary,face:p.face,morph:p.morph,from:p.from,emitters:p.emitters,scatter:p.scatter,vertexCount:p.vertexCount},()=>{o.shown<M&&(o.shown=M)});const y=o.nextBatch;o.nextBatch=null,(o.dirty||o.wanted!==o.level||o.wantedScatter!==o.scatter)&&this.requestMesh(e,t,i,y,y!==null)};if(!s||s.flushed){x();return}s.swaps.push(x),--s.pending<=0&&this.flushBatch(s)})}get pendingMeshes(){let e=0;for(const t of this.chunks.values())(t.inflight||t.level<0)&&e++;return e}applyEdit(e,t=!0){const i=e.op==="add"?Dt[e.mat]?.spawn:void 0;if(i){if(!this.animalsOn){this.hud.say("animals are off");return}if(Yu(i)){const s=this.field.waterAt(e.x,e.y+.3,e.z)?e.y+.3:this.field.waterAt(e.x,e.y-.3,e.z)?e.y-.3:NaN;if(Number.isNaN(s)){this.hud.say("a fish needs water");return}this.animals.push(gl(this.field,i,e.x,e.z,Math.floor(this.animalRng()*1e9),this.nextAnimalId++,s,this.input.yaw+Math.PI))}else this.animals.push(gl(this.field,i,e.x,e.z,Math.floor(this.animalRng()*1e9),this.nextAnimalId++,void 0,this.input.yaw+Math.PI));this.animalsDirty=!0;return}if(e.mat===ya&&e.op!=="sub"){if(e.op!=="add"){this.hud.say("water is poured, not painted");return}this.pourWater(e);return}if(e.mat===Gl&&e.op!=="sub"){if(e.op!=="add"){this.hud.say("a sponge soaks, it does not paint");return}this.sponge(e);return}if(this.undryNear(ta(e,this.field)),Vv(e)&&!this.opts.test){this.anims.push({e,t0:performance.now(),record:t}),this.stepEdit(e,Ao(.001));return}if(e.op==="smooth"&&!this.opts.test){const s=t?this.preImages(e):[],r=ta(e,this.field),a=this.copyDensity(r),o=Zs(this.field,e),l=this.copyDensity(r);this.writeDensity(r,a,l,0),this.anims.push({e,t0:performance.now(),record:t,lerp:{b:o,pre:a,post:l,preImages:s}}),this.refresh(o);return}this.finishEdit(e,t)}pourWater(e){const t=this.field;let i=Math.floor(e.x/b),s=Math.floor(e.y/b),r=Math.floor(e.z/b);for(let o=0;o<3&&t.inBounds(i,s,r)&&!dn(t,i,s,r);o++)s++;if(!t.inBounds(i,s,r)||!dn(t,i,s,r)){this.hud.say("no room for water there");return}const a=t.index(i,s,r);this.flow.sources.has(a)||(this.flow.addSource(i,s,r,this.pourLevels()),go(this.cfg.seed,this.sourceList()),this.renderer.water.splash((i+.5)*b,(r+.5)*b,.6,-.03))}sponge(e){const t=this.field,i=e.size*.5,s={x0:Math.floor((e.x-i)/b),y0:Math.floor((e.y-i)/b),z0:Math.floor((e.z-i)/b),x1:Math.ceil((e.x+i)/b),y1:Math.ceil((e.y+i)/b),z1:Math.ceil((e.z+i)/b)},r=hy(t,s,this.sea);if(!r){this.hud.say("nothing to soak up");return}this.flow.dropDrySources()&&go(this.cfg.seed,this.sourceList()),this.flow.wake(s),this.markWater(s),this.wetChanged(s),this.flushWet(this.lastNow,!0);for(const[a,o,l]of Zt(s,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nt(a,o,l));this.scheduleSave(),this.hud.say(`${(r*b*b*b).toFixed(r<80?1:0)} m³ soaked up`)}pourLevels(){return Math.max(1,Math.round(this.tuning.pourRate/this.tuning.waterHz*vt))}sourceList(){const e=this.field,t=[];for(const i of this.flow.sources.keys()){const s=i%e.nz,r=(i-s)/e.nz,a=r%e.ny;t.push([(r-a)/e.ny,a,s])}return t}preImages(e){const t=[];for(const[i,s,r]of Zt(ta(e,this.field),this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))t.push(yo(this.field,i,s,r));return t}copyDensity(e){const t=this.field,i=new Float32Array((e.x1-e.x0+1)*(e.y1-e.y0+1)*(e.z1-e.z0+1));let s=0;for(let r=e.x0;r<=e.x1;r++)for(let a=e.y0;a<=e.y1;a++)for(let o=e.z0;o<=e.z1;o++)i[s++]=t.density[t.index(r,a,o)];return i}writeDensity(e,t,i,s){const r=this.field;let a=0;for(let o=e.x0;o<=e.x1;o++)for(let l=e.y0;l<=e.y1;l++)for(let c=e.z0;c<=e.z1;c++,a++)r.density[r.index(o,l,c)]=t[a]+(i[a]-t[a])*s}noSlide=new Set;refresh(e,t=!1,i=!0){const s=this.flow.wake(e);if(this.markWater(e),s){this.markWater(s),e=sn(e,s);const r=Math.max(.5,(s.x1-s.x0)*b*.5),a=Math.max(.5,(s.z1-s.z0)*b*.5);this.renderer.water.splash((s.x0+s.x1)*.5*b,(s.z0+s.z1)*.5*b,Math.hypot(r,a),-.02*Math.min(4,Math.hypot(r,a)))}return this.batched(()=>{for(const[r,a,o]of Zn(e,se,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))if(i||this.noSlide.add(nt(r,a,o)),this.requestMesh(r,a,o),this.lightDirty.add(nt(r,a,o)),t)for(let l=a-1;l>=0;l--)this.lightDirty.add(nt(r,l,o))}),e}stepEdit(e,t){this.refresh(Zs(this.field,e,t))}finishEdit(e,t){const i=t?this.preImages(e):[],s=Zs(this.field,e);this.commitEdit(e,t,i,s)}editLoose(e,t){const i=this.falling.find(r=>r.id===e);if(!i)return;if(t.op==="add"&&Jn(t.mat)){this.hud.say("blocks need solid ground");return}i.blend&&this.undry(i);const s=ww(i.frag,t);this.renderer.removeFragment(e),this.falling=this.falling.filter(r=>r.id!==e);for(const r of s)this.launch(r)}undry(e){const t=e.blend;if(!t)return;Tw(this.field,t.box,t.pre),this.refresh(t.box,!1),e.blend=void 0,this.renderer.fadeFragment(e.id,1);const i=e.frag;i.settled=!1,i.rest=0,i.age=0}undryNear(e){for(const t of this.falling){if(!t.blend)continue;const i=t.blend.box;i.x0>e.x1+ps||i.x1<e.x0-ps||i.y0>e.y1+ps||i.y1<e.y0-ps||i.z0>e.z1+ps||i.z1<e.z0-ps||this.undry(t)}}launch(e){const t=this.nextFragId++;this.falling.push({frag:e,id:t}),this.pool.frag(e.nx,e.ny,e.nz,e.density.slice(),e.material.slice(),e.hard.slice(),e.sub.slice(),this.foliage).then(i=>{this.falling.some(s=>s.id===t)&&this.renderer.setFragment(t,i,e.com,e.pos,e.q,e.texOrigin)})}lastBodySave=0;bodiesSaved=!0;stepFalling(e){const t=this.falling.filter(r=>!r.cooking&&!r.blend);if(t.length&&(this.bodiesSaved=!1),!this.bodiesSaved&&this.lastNow-this.lastBodySave>2e3&&(this.lastBodySave=this.lastNow,t.length||(this.bodiesSaved=!0),vo(this.cfg.seed,t.map(r=>qh(r.frag)))),!this.falling.length)return;const i=[],s=this.lastNow;for(const r of this.falling){const a=r.frag;if(r.cooking){if(r.cooking.keys.every((m,v)=>{const g=this.chunks.get(m);return g.version>r.cooking.versions[v]&&!g.inflight})){this.renderer.removeFragment(r.id);continue}i.push(r);continue}if(r.blend){if(r.blend.phase==="take"){const v=r.blend.wait;v.keys.every((p,x)=>this.chunks.get(p).shown>=v.versions[x])&&(this.renderer.removeFragment(r.id),r.blend.phase="join",r.blend.t0=s,r.blend.lastStep=s),i.push(r);continue}const d=Math.min(1,(s-r.blend.t0)/zw),m=d*d*(3-2*d);if(d>=1){if(!r.blend.final){r.blend.final=!0,Zr(this.field,a,r.blend.box,r.blend.pre,0,0);const v=Yh(this.field,a),g=this.support.afterEdit(v);for(const M of g.fragments)this.launch(M);this.sandOn&&this.sand.wake(g.changed?sn(v,g.changed):v),this.snowOn&&(this.snow.wake(g.changed?sn(v,g.changed):v),this.markLooseSnow(r.blend.box,r.blend.pre)&&this.snowSlump.wake(v));const p=this.refresh(g.changed?sn(v,g.changed):v,!0),x=Zn(p,se,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([M,y,S])=>nt(M,y,S));r.cooking={keys:x,versions:x.map(M=>this.chunks.get(M).version)};for(const[M,y,S]of Zt(p,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nt(M,y,S));this.scheduleSave()}i.push(r);continue}if(s-r.blend.lastStep>Fw){r.blend.lastStep=s;const v=$h*(1-m)+.02;Zr(this.field,a,r.blend.box,r.blend.pre,0,v),this.refresh(r.blend.box,!1)}i.push(r);continue}const o=a.pos[1]-a.radius>this.cfg.seaLevel,l=Math.max(1,Math.ceil(e/(1/120)));for(let d=0;d<l&&!a.settled;d++)Aw(this.field,a,e/l,this.fallSpeed);if(o&&a.pos[1]-a.radius<=this.cfg.seaLevel&&this.field.waterAt(a.pos[0],this.cfg.seaLevel-b*.5,a.pos[2])&&this.renderer.water.splash(a.pos[0],a.pos[2],Math.max(.6,a.radius),-.05*Math.min(6,a.solid.length/12)),this.renderer.moveFragment(r.id,a.pos,a.q),!a.settled){i.push(r);continue}const c=_w(this.field,a),h=Ew(this.field,c);Zr(this.field,a,c,h,0,$h);const f=this.refresh(c,!1,!1),u=Zn(f,se,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ).map(([d,m,v])=>nt(d,m,v));r.blend={box:c,pre:h,t0:s,lastStep:s,final:!1,phase:"take",wait:{keys:u,versions:u.map(d=>{const m=this.chunks.get(d);return m.version+(m.dirty?2:1)})}},i.push(r)}this.falling=i}commitEdit(e,t,i,s){if(s=this.refresh(s,!0),t){this.edits.push(e),this.undoStack.push(i),this.undoStack.length>24&&this.undoStack.shift();for(const[o,l,c]of Zt(s,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nt(o,l,c));this.scheduleSave()}const r=e.size*.5+b;Math.abs(e.y-this.cfg.seaLevel)<r+.5&&this.field.waterAt(e.x,this.cfg.seaLevel-b*.5,e.z)&&this.renderer.water.splash(e.x,e.z,r,-.05*Math.min(3,e.size));const a=this.support.afterEdit(s);if(a.held&&this.hud.say("too vast to fall: it stands"),this.sandOn&&(this.sand.wake(s),a.changed&&this.sand.wake(a.changed)),this.snowOn&&(this.snow.wake(s),a.changed&&this.snow.wake(a.changed)),a.changed){this.refresh(a.changed,!0);for(const[o,l,c]of Zt(a.changed,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nt(o,l,c));this.scheduleSave()}for(const o of a.fragments)this.launch(o)}brushTarget(e){const t=this.hit;if(!t)return null;const i=this.effectiveSize(e)*.5,s=t.normal;let r;const o=e==="add"&&Jn(fn[this.brush.matIndex].id)||t.hard?.5:.6;if(e==="add")r=[t.point[0]+s[0]*i*o,t.point[1]+s[1]*i*o,t.point[2]+s[2]*i*o];else if(e==="sub"){const c=Math.min(i*.4,.06);r=[t.point[0]-s[0]*c,t.point[1]-s[1]*c,t.point[2]-s[2]*c]}else r=[t.point[0],t.point[1],t.point[2]];if(this.brush.snap&&(e!=="sub"||this.brush.shape!=="sphere")){const c=this.effectiveSize(e);r=[Math.floor(r[0]/c)*c+c/2,Math.floor(r[1]/c)*c+c/2,Math.floor(r[2]/c)*c+c/2]}return r}facingDir(){const e=-Math.sin(this.input.yaw),t=-Math.cos(this.input.yaw);let i=0,s=-1/0;for(let r=0;r<4;r++){const a=e*oa[r][0]+t*oa[r][2];a>s&&(s=a,i=r)}return i}effectiveSize(e){const t=fn[this.brush.matIndex].id;return e==="add"&&Jn(t)&&!pt(t)?.5:ci[this.brush.sizeIndex]}doEdit(e){if(e==="add"&&this.handEmpty)return;const t=this.brushTarget(e);if(!t)return;if(e==="add"&&fn[this.brush.matIndex].spawn&&this.hitBody!==null){this.hud.say("not on a falling thing");return}if(e!=="add"&&this.hit?.hard&&this.hitBody===null){const a=this.hit,o=[a.point[0]-a.normal[0]*.25,a.point[1]-a.normal[1]*.25,a.point[2]-a.normal[2]*.25];if(er(this.field,Math.floor(o[0]/b),Math.floor(o[1]/b),Math.floor(o[2]/b))){this.hud.say("the prime anchor holds the world");return}}const i=fn[this.brush.matIndex].id,s=e==="add"&&Jn(i)&&!pt(i),r={op:e,shape:s?"cube":this.brush.shape,size:this.effectiveSize(e),mat:i,x:t[0],y:t[1],z:t[2]};if((r.shape==="ramp"||r.shape==="wall"||r.shape==="roof")&&(r.dir=this.facingDir()),this.hitBody!==null){this.editLoose(this.hitBody,r);return}this.applyEdit(r)}lastNow=0;frame(e){this.lastNow=e,this.profiler.begin(e);const t=this.lastFrame?(e-this.lastFrame)/1e3:1/60;this.lastFrame=e;const i=Math.min(t,.05),s=this.input,r=this.touch;s.hit("CapsLock")&&!this.opts.test&&!r.enabled&&!this.hud.overlayVisible&&(s.freeMouse=!s.freeMouse,document.body.classList.toggle("freemouse",s.freeMouse),s.freeMouse?(document.pointerLockElement&&document.exitPointerLock(),this.hud.say("free mouse · point and click · Caps Lock to look again")):(this.hud.say("mouse look"),s.requestLock()));const a=s.locked||s.freeMouse&&!this.hud.overlayVisible||this.opts.test||r.enabled&&!this.hud.overlayVisible;if(a){for(let P=0;P<Gh.length&&P<fn.length;P++)s.hit(Gh[P])&&this.selectSlot(P);s.hit("Escape")&&(this.touch.enabled||s.freeMouse)&&this.showMenu(),s.wheel!==0&&(this.brush.sizeIndex=Math.max(0,Math.min(ci.length-1,this.brush.sizeIndex-s.wheel))),s.hit("KeyQ")&&(this.brush.shape=eu(this.brush.shape)),s.hit("Tab")&&(this.brush.op=So[(So.indexOf(this.brush.op)+1)%So.length],this.hud.say(`tool: ${this.brush.op==="sub"?"remove":this.brush.op}`)),s.down("ArrowLeft")&&(s.yaw+=jh*i),s.down("ArrowRight")&&(s.yaw-=jh*i),s.down("ArrowUp")&&(s.pitch=Math.min(1.55,s.pitch+Jh*i)),s.down("ArrowDown")&&(s.pitch=Math.max(-1.55,s.pitch-Jh*i)),s.hit("KeyG")&&(this.brush.snap=!this.brush.snap,this.hud.say(this.brush.snap?"grid snap on":"grid snap off")),s.hit("KeyF")&&(this.body.fly=!this.body.fly,this.touch.setFly(this.body.fly),this.hud.say(this.body.fly?"flying":"walking")),s.hit("KeyP")&&(this.timePaused=!this.timePaused,this.hud.say(this.timePaused?"time paused":"time flowing")),s.hit("Comma")&&(this.time=(this.time-.5+24)%24),s.hit("Period")&&(this.time=(this.time+.5)%24),s.hit("KeyZ")&&this.edits.length&&this.undo()}r.enabled&&a&&(s.yaw-=r.lookDX*.005,s.pitch=Math.max(-1.55,Math.min(1.55,s.pitch-r.lookDY*.005))),(r.enabled||s.freeMouse)&&a&&(r.tapped("tb-fly")&&(this.body.fly=!this.body.fly,r.setFly(this.body.fly),this.hud.say(this.body.fly?"flying":"walking")),r.tapped("tb-size-down")&&(this.brush.sizeIndex=Math.max(0,this.brush.sizeIndex-1)),r.tapped("tb-size-up")&&(this.brush.sizeIndex=Math.min(ci.length-1,this.brush.sizeIndex+1)),r.tapped("tb-shape")&&(this.brush.shape=eu(this.brush.shape)),r.tapped("tb-snap")&&(this.brush.snap=!this.brush.snap,this.hud.say(this.brush.snap?"grid snap on":"grid snap off")),r.tapped("tb-undo")&&this.edits.length&&this.undo(),r.tapped("tb-menu")&&this.showMenu()),!this.timePaused&&!this.opts.test&&(this.time=(this.time+this.timeRate*i)%24),this.sun=oh(this.time),this.renderer.setSun(this.sun);const o=s.yaw,l=-Math.sin(o),c=-Math.cos(o),h=Math.cos(o),f=-Math.sin(o);let u=0,d=0,m=0;a&&(s.down("KeyW")&&(u+=l,d+=c),s.down("KeyS")&&(u-=l,d-=c),s.down("KeyD")&&(u+=h,d+=f),s.down("KeyA")&&(u-=h,d-=f),r.enabled&&(u+=l*r.moveY+h*r.moveX,d+=c*r.moveY+f*r.moveX),(this.body.fly||this.body.swim)&&((s.down("Space")||r.jump)&&(m+=1),(s.down("ShiftLeft")||s.down("ShiftRight")||s.down("KeyC")||r.duck)&&(m-=1))),a&&!this.body.fly&&!this.body.swim?((s.hit("KeyC")||r.tapped("tb-duck"))&&(this.crouchLatch=!this.crouchLatch),(s.hit("Space")||r.tapped("tb-jump"))&&(this.crouchLatch=!1)):this.crouchLatch=!1,this.crouch=this.crouchLatch,this.body.crouch=this.crouch,r.setDuckLit(this.crouch);const v=Math.max(1,Math.hypot(u,d)),g=s.down("ShiftLeft")||s.down("ShiftRight"),p=this.body.swim,x=this.body.fly?g?40:18:p?g?4.2:2.6:this.crouch?1.8:g?8.5:5.2;Vl(this.field,this.body,{wishX:u/v*x,wishZ:d/v*x,wishY:m*(this.body.fly?g?28:16:p?3:0),jump:a&&!p&&(s.down("Space")||r.jump),dt:i});const M=this.renderer.camera;this.eye+=((this.crouch?$v:vi)-this.eye)*Math.min(1,i*14),this.slosh+=((this.body.swim?1:0)-this.slosh)*Math.min(1,i*2);const y=this.slosh*Math.sin(e*.0021)*.06,S=this.slosh*Math.sin(e*.0016+1.3)*.02;M.position.set(this.body.pos[0],this.body.pos[1]+this.eye+y,this.body.pos[2]),M.rotation.set(s.pitch,o,S,"YXZ");const E=this.field.waterAt(M.position.x,M.position.y,M.position.z);if(E!==this.renderer.underwater&&this.renderer.setUnderwater(E,this.sun),this.flow.active||this.flow.parked){this.flowClock+=Math.min(i,.1);const P=1/this.tuning.waterHz,L=this.bubbleNow();for(let U=0;U<3&&this.flowClock>=P;U++){this.flowClock-=P;const W=this.flow.step(L);if(W.changed){this.markWaterCells(W.cells),this.wetChanged(W.changed);for(const[Q,j,ue]of Zt(W.changed,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nt(Q,j,ue));this.scheduleSave()}}this.flowClock>P&&(this.flowClock=P),!this.flow.active&&!this.flow.parked&&this.flow.settleTable()}else this.flowClock=0;if(this.profiler.mark("flow"),this.flushWet(e,!this.flow.active),this.waterLeft.size)this.waterLeft=this.renderer.water.rebuild(this.field,this.waterLeft,this.flow.motion,this.tuning.waterSmooth,e/1e3,Kh);else if((this.waterAll||this.waterKeys.size)&&(e-this.lastWaterBuild>90||!this.flow.active)){const P=this.waterAll?null:this.waterKeys;this.waterAll=!1,this.waterKeys=new Set,this.lastWaterBuild=e,this.waterLeft=this.renderer.water.rebuild(this.field,P,this.flow.motion,this.tuning.waterSmooth,e/1e3,P?Kh:1/0)}this.profiler.mark("water mesh");const D=[],C=this.body.pos,A=this.cfg.seaLevel;C[1]<A&&C[1]+vi>A&&this.field.waterAt(C[0],A-b*.5,C[2])&&D.push([C[0],C[2],.42,Math.min(4,Math.hypot(this.body.vel[0],this.body.vel[1],this.body.vel[2]))]),this.profiler.mark("input"),this.stepFalling(i),this.profiler.mark("bodies"),this.stepAnimals(i),this.profiler.mark("animals"),this.stepRegrowth(i),this.stepSand(i),this.profiler.mark("sand"),this.stepSnow(i),this.stepSnowSlump(i),this.profiler.mark("snow");for(const P of this.falling){const L=P.frag;L.pos[1]-L.radius<A&&L.pos[1]+L.radius>A&&this.field.waterAt(L.pos[0],A-b*.5,L.pos[2])&&D.push([L.pos[0],L.pos[2],Math.max(.4,L.radius*.8),Math.min(6,Math.hypot(L.vel[0],L.vel[1],L.vel[2])*1.5)])}this.renderer.water.setObstacles(D);const w=new V(0,0,-1).applyEuler(M.rotation);if(s.freeMouse&&!r.enabled&&s.mouseX>=0){const P=this.input.canvas.getBoundingClientRect(),L=(s.mouseX-P.left)/Math.max(1,P.width)*2-1,U=1-(s.mouseY-P.top)/Math.max(1,P.height)*2;L>=-1&&L<=1&&U>=-1&&U<=1&&w.set(L,U,.5).unproject(M).sub(M.position).normalize()}this.hit=qv(this.field,[M.position.x,M.position.y,M.position.z],[w.x,w.y,w.z],48),this.hitBody=null;for(const P of this.falling){if(P.cooking)continue;const L=this.hit?this.hit.distance:48,U=P.frag,W=U.pos[0]-M.position.x,Q=U.pos[1]-M.position.y,j=U.pos[2]-M.position.z,ue=W*w.x+Q*w.y+j*w.z;if(ue<-U.radius||ue>L+U.radius)continue;const Ae=W-w.x*ue,_e=Q-w.y*ue,we=j-w.z*ue;if(Ae*Ae+_e*_e+we*we>U.radius*U.radius)continue;const K=Mw(U,[M.position.x,M.position.y,M.position.z],[w.x,w.y,w.z],L);K&&(!this.hit||K.distance<this.hit.distance)&&(this.hit=K,this.hitBody=P.id)}if(this.pickTarget=null,this.primeAim=!1,this.hit&&this.hit.hard&&this.hitBody===null&&Dt[this.hit.material]?.emissive){const P=this.hit.point,L=this.hit.normal,U=[Math.floor((P[0]-L[0]*.02)/b),Math.floor((P[1]-L[1]*.02)/b),Math.floor((P[2]-L[2]*.02)/b)];er(this.field,U[0],U[1],U[2])?this.primeAim=!0:this.field.getHard(U[0],U[1],U[2])===this.hit.material&&(this.pickTarget={kind:"light",cell:U,mat:this.hit.material})}if(!this.pickTarget&&fn[this.brush.matIndex].id===ya){const P=Qv(this.field,[M.position.x,M.position.y,M.position.z],[w.x,w.y,w.z],this.hit?this.hit.distance:48);P&&(this.pickTarget={kind:"water",cell:P.cell,distance:P.distance})}if(this.animalsOn){const P=this.hit?this.hit.distance:48;let L=1/0,U=-1;for(const W of this.animals){const Q=Q1(W,[M.position.x,M.position.y,M.position.z],[w.x,w.y,w.z],P);Q!==null&&Q<L&&(L=Q,U=W.id)}U>=0&&(this.pickTarget={kind:"animal",id:U},this.hitBody=null)}if(r.setDig(this.pickTarget?"remove":"dig"),this.pickTarget?.kind==="light"){const{c:P,size:L}=this.pickBox(this.pickTarget);this.renderer.setCursor(P[0],P[1],P[2],L*.5,[L*.5,L*.5,L*.5])}else if(this.pickTarget?.kind==="animal"){const P=this.animals.find(L=>L.id===this.pickTarget.id);P&&this.renderer.setCursor(P.body.pos[0],P.body.pos[1]+.45,P.body.pos[2],.55,[.6,.5,.6])}else if(this.pickTarget?.kind==="water"){const P=this.pickTarget.cell;this.renderer.setCursor((P[0]+.5)*b,(P[1]+.5)*b,(P[2]+.5)*b,.25,[.25,.25,.25])}else if(this.hit){const P=s.mouseDown[2]||r.dig?"sub":r.heldOp??this.brush.op,L=this.effectiveSize(P)*.5,U=this.brushTarget(P),W=this.brush.shape;if(W==="sphere"&&L>=.3)this.renderer.setCursor(U[0],U[1],U[2],L,null);else if(W==="slab")this.renderer.setCursor(U[0],U[1]-L+L/3,U[2],L,[L,L/3,L]);else if(W==="wall"){const Q=oa[this.facingDir()],j=Math.min(L*2/3,b)*.5;this.renderer.setCursor(U[0]-Q[0]*(L-j),U[1],U[2]-Q[2]*(L-j),L,[Q[0]!==0?j:L,L,Q[2]!==0?j:L])}else this.renderer.setCursor(U[0],U[1],U[2],L,[L,L,L])}else this.renderer.setCursor(0,0,0,0,null);if(a){const P=e-this.lastEdit>(this.brush.sizeIndex>=2?260:150);this.pickTarget&&(s.mouseClick[2]||s.hit("KeyM")||r.tapped("tb-dig"))?(this.pick(this.pickTarget),this.lastEdit=e):this.pickTarget&&(s.mouseDown[2]||s.down("KeyM")||r.dig)||(s.mouseClick[2]||s.hit("KeyM")||(s.mouseDown[2]||s.down("KeyM")||r.dig)&&P?(this.doEdit("sub"),this.lastEdit=e):s.mouseClick[0]||s.hit("KeyE")||(s.mouseDown[0]||s.down("KeyE"))&&P?(this.doEdit(this.brush.op),this.lastEdit=e):r.heldOp&&P&&(this.doEdit(r.heldOp),this.lastEdit=e))}if(this.anims.length){const P=[];for(const L of this.anims){const U=(e-L.t0)/this.editMs;if(L.lerp){const{b:W,pre:Q,post:j,preImages:ue}=L.lerp,Ae=ta(L.e,this.field);U>=1?(this.writeDensity(Ae,Q,j,1),this.commitEdit(L.e,L.record,ue,W)):(this.writeDensity(Ae,Q,j,Ao(U)),this.refresh(W),P.push(L))}else U>=1?this.finishEdit(L.e,L.record):(this.stepEdit(L.e,Ao(U)),P.push(L))}this.anims=P}this.profiler.mark("edits"),this.flushStaleBatches(e),this.lightStep(e),this.profiler.mark("light"),e-this.lastLod>400&&(this.updateLod(!1),this.lastLod=e),this.profiler.mark("lod"),this.renderer.render(e/1e3),this.profiler.mark("render"),this.frames++,e-this.fpsT>500&&(this.fps=this.frames*1e3/(e-this.fpsT),this.frames=0,this.fpsT=e);const _=this.brush;this.hud.setStatus(r.enabled?`${this.handEmpty?"empty hand":fn[_.matIndex].name} · ${_.shape} ${ci[_.sizeIndex]<.5?"⅙":ci[_.sizeIndex]} m · ${_.snap?"snap":"free"} · ${this.body.fly?"fly":this.body.swim?"swim":this.crouch?"duck":"walk"}`:`${this.handEmpty?"empty hand":fn[_.matIndex].name} · ${_.shape} ${ci[_.sizeIndex]<.5?"⅙":ci[_.sizeIndex]} m · tool: ${_.op==="sub"?"remove":_.op} · ${_.snap?"snap":"free"} · ${this.body.fly?"fly":this.body.swim?"swim":this.crouch?"duck":"walk"}${this.input.freeMouse?" · free mouse":""}${this.pickTarget?` · RMB removes the ${this.pickTarget.kind==="animal"?this.animals.find(P=>P.id===this.pickTarget.id)?.kind??"animal":this.pickTarget.kind==="water"?"water":Dt[this.pickTarget.mat]?.name}`:""}${this.primeAim?" · the prime anchor holds the world":""}`);const I=Math.floor(this.time),z=Math.floor((this.time-I)*60);this.hud.setClock(`${String(I).padStart(2,"0")}:${String(z).padStart(2,"0")}${this.timePaused?" ⏸":""}`,this.time);const F=this.hit,O=this.pickTarget?.kind==="water"?` · aim water @${this.pickTarget.distance.toFixed(1)} m`:F?` · aim ${this.hitBody!==null?"body":F.hard?"block":"field"} ${Dt[F.material]?.name??F.material} @${F.distance.toFixed(1)} m`:" · aim none";if(e-this.lastMass>2e3&&(this.lastMass=e,this.massText=this.massReadout()),this.hud.setDebug(`${this.fps.toFixed(0)} fps · ${(this.renderer.triangles/1e3).toFixed(0)}k tris · ${this.renderer.chunkCount} chunks · ${this.renderer.flames.count} flames · ${(this.renderer.scatter.count/1e3).toFixed(1)}k scatter · mesh q ${this.pool.queued} · ${this.renderer.fallingCount} falling · ${this.animals.length} animals · water ${this.flow.active} · ${this.massText} · ${this.body.pos.map(P=>P.toFixed(1)).join(", ")}${O}`),e-this.lastHash>2e3){this.lastHash=e;const P=this.stateString();P!==this.lastHashState&&(this.lastHashState=P,this.writeHash())}s.flush(),r.flush(),this.profiler.mark("hud"),this.profiler.end(e),this.ready=!0}profileLines(){const e=this.renderer,t=performance.memory,i=Object.entries(this.tuningDiff()).map(([s,r])=>`${s} ${r}`).join(", ");return[e.describe(),`quality ${this.quality} · foliage ${this.foliage} · sand ${this.sandOn?"on":"off"} · snow ${this.snowOn?"on":"off"} · animals ${this.animalsOn?"on":"off"} · edit ${this.editMs} ms · workers ${this.pool.size}${t?` · heap ${(t.usedJSHeapSize/1048576).toFixed(0)} MB`:""}`,`${e.chunkCount} chunks · ${(e.triangles/1e3).toFixed(0)}k tris · ${(e.scatter.count/1e3).toFixed(1)}k scatter · ${e.flames.count} flames · mesh q ${this.pool.queued} · falling ${e.fallingCount} · animals ${this.animals.length} (${this.animalsParked} parked) · water ${e.water.chunks.size} chunks, ${this.flow.active} active, ${this.flow.parked} parked · sand ${this.sand.pending}/${this.sand.parked} · snow ${this.snow.pending}/${this.snow.parked} · slump ${this.snowSlump.pending}/${this.snowSlump.parked}`,`bubble ${this.tuning.bubble>0?`${this.tuning.bubble} m`:"everything"} · smoothing ${this.tuning.waterSmooth} s · tuning off defaults: ${i||"none"} · at ${this.body.pos.map(s=>s.toFixed(1)).join(", ")} · ${this.body.fly?"fly":this.body.swim?"swim":"walk"} · seed ${this.cfg.seed}`]}stateString(){const e=this.body.pos;return[e[0],e[1],e[2],this.input.yaw,this.input.pitch,this.time].map(t=>+t.toFixed(2)).join(",")}writeHash(){try{history.replaceState(null,"",location.pathname+location.search+"#v="+this.stateString())}catch{}}shareLink(){const e=new URLSearchParams(location.search);return e.set("seed",String(this.cfg.seed)),e.set("quality",this.quality),location.origin+location.pathname+"?"+e.toString()+"#v="+this.stateString()}scheduleSave(){clearTimeout(this.saveTimer),this.saveTimer=window.setTimeout(()=>void this.saveDirty(),600)}saveFailed=!1;async saveDirty(){if(!this.dirtySlabs.size)return;const e=[];for(const i of this.dirtySlabs){const[s,r,a]=Qs(i);e.push(yo(this.field,s,r,a))}this.dirtySlabs.clear();const t=await bh(this.cfg.seed,e);!t&&!this.saveFailed&&(this.saveFailed=!0,this.hud.say("save failed — this browser refused to store the world (full? private?)",6e3)),t&&(this.saveFailed=!1)}flushNow(){clearTimeout(this.saveTimer);for(const t of this.falling)if(t.blend&&!t.blend.final){t.blend.final=!0,Zr(this.field,t.frag,t.blend.box,t.blend.pre,0,0);const i=Yh(this.field,t.frag);for(const[s,r,a]of Zt(i,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nt(s,r,a));t.cooking={keys:[],versions:[]}}const e=this.falling.filter(t=>!t.cooking&&!t.blend).map(t=>qh(t.frag));vo(this.cfg.seed,e),Th(this.cfg.seed,this.animals.map(Sh)),this.saveDirty()}settleLoose(){const e=this.support.dropLoose();for(const t of e.fragments)this.launch(t);if(e.changed){for(const[t,i,s]of Zt(e.changed,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.dirtySlabs.add(nt(t,i,s));this.scheduleSave()}e.fragments.length&&this.hud.say(`${e.fragments.length} loose thing${e.fragments.length===1?"":"s"} had no anchor and fell`),e.held&&this.hud.say(`${e.held} thing${e.held===1?"":"s"} too vast to fall stand${e.held===1?"s":""} without an anchor`)}resumeBodies(){const e=this.world?.bodies;if(e?.length){for(const t of e)try{this.launch(Dw(t))}catch{}this.world.bodies=[],vo(this.cfg.seed,[])}}undo(){const e=this.undoStack.pop();if(!e){this.hud.say("nothing to undo");return}for(const t of this.falling)t.blend&&this.undry(t);this.edits.pop();for(const t of e){Wh(this.field,t),this.support.afterEdit({x0:t.cx*se,y0:t.cy*se,z0:t.cz*se,x1:t.cx*se+se,y1:t.cy*se+se,z1:t.cz*se+se}),this.sandOn&&this.sand.wake({x0:t.cx*se,y0:t.cy*se,z0:t.cz*se,x1:t.cx*se+se,y1:t.cy*se+se,z1:t.cz*se+se}),this.snowOn&&this.snow.wake({x0:t.cx*se,y0:t.cy*se,z0:t.cz*se,x1:t.cx*se+se,y1:t.cy*se+se,z1:t.cz*se+se});const i=nt(t.cx,t.cy,t.cz);this.dirtySlabs.add(i);for(const[s,r,a]of Zn({x0:t.cx*se,y0:t.cy*se,z0:t.cz*se,x1:t.cx*se+se,y1:t.cy*se+se,z1:t.cz*se+se},se,this.cfg.chunksX,this.cfg.chunksY,this.cfg.chunksZ))this.requestMesh(s,r,a),this.lightDirty.add(nt(s,r,a))}this.markWater(null),this.scheduleSave(),this.hud.say("undo")}setView(e,t,i,s,r){this.body.pos[0]=e,this.body.pos[1]=t-vi,this.body.pos[2]=i,this.body.vel[0]=this.body.vel[1]=this.body.vel[2]=0,this.body.fly=!0,this.input.yaw=s,this.input.pitch=r,this.lastLod=0}setTime(e){this.time=e}}const Pw=.4,Lw=600,Bw=1.05,Uw=3,Kh=6,Zh=140,So=["add","sub","smooth","paint"],jh=2.4,Jh=1.7,zw=1200,ps=6,Fw=160,$h=.4;function Ao(n){const e=1-Math.min(1,Math.max(0,n));return 1-e*e*e}function eu(n){return n==="cube"?"slab":n==="slab"?"wall":n==="wall"?"roof":n==="roof"?"ramp":n==="ramp"?"sphere":"cube"}function Qs(n){const e=n%1024,t=Math.floor(n/1024)%1024;return[Math.floor(n/1048576),t,e]}function di(){return new Promise(n=>requestAnimationFrame(()=>n()))}function ta(n,e){const t=n.size*.5+2;return{x0:Math.max(0,Math.floor((n.x-t)/b)),y0:Math.max(0,Math.floor((n.y-t)/b)),z0:Math.max(0,Math.floor((n.z-t)/b)),x1:Math.min(e.nx-1,Math.ceil((n.x+t)/b)),y1:Math.min(e.ny-1,Math.ceil((n.y+t)/b)),z1:Math.min(e.nz-1,Math.ceil((n.z+t)/b))}}function sn(n,e){return{x0:Math.min(n.x0,e.x0),y0:Math.min(n.y0,e.y0),z0:Math.min(n.z0,e.z0),x1:Math.max(n.x1,e.x1),y1:Math.max(n.y1,e.y1),z1:Math.max(n.z1,e.z1)}}function Nw(n){const e=/#v=([-\d.,]+)/.exec(n);if(!e)return;const t=e[1].split(",").map(Number);return t.length>=5&&t.every(i=>Number.isFinite(i))?t:void 0}async function Ow(){const n=new URLSearchParams(location.search),e=uf(),t=n.get("test")==="1";n.get("debug")==="1"&&document.body.classList.add("debug");const i=n.get("seed")??n.get("world"),s=i!==null?hf(i):e.seed??1337,r=n.get("quality")||e.quality||"medium",a={seed:s,quality:r,test:t,chunks:(await lx(s))?.chunks??(n.get("chunks")?Math.max(2,Math.min(24,Number(n.get("chunks")))):void 0),time:n.get("time")?Number(n.get("time")):void 0,cheapGi:n.get("gi")==="cheap"?!0:n.get("gi")==="full"?!1:void 0,giMode:n.get("gi")==="cone"?"cone":n.get("gi")==="sh"?"sh":void 0,post:n.has("post")?Math.max(0,Math.min(2,Number(n.get("post")))):void 0,volumetric:n.get("vol")==="0"?!1:void 0,caustic:n.get("caustic")==="0"?!1:void 0,iceDebug:n.has("icedebug")?Number(n.get("icedebug")):void 0,shader:["full","lite","basic"].find(f=>f===n.get("shader")),giDiv:n.has("gidiv")?Math.max(1,Math.min(4,Number(n.get("gidiv")))):void 0,view:Nw(location.hash),foliage:n.has("foliage")?Math.max(0,Math.min(8,Number(n.get("foliage")))):e.foliage,fall:n.has("fall")?Math.max(1,Math.min(60,Number(n.get("fall")))):e.fall,animals:n.has("animals")?n.get("animals")!=="0":e.animals,sand:n.has("sand")?n.get("sand")!=="0":e.sand,snow:n.has("snow")?n.get("snow")!=="0":e.snow,tuning:e.tuning,edit:n.has("edit")?Math.max(60,Math.min(2e3,Number(n.get("edit")))):e.edit};yn({seed:s,quality:r});const o=document.getElementById("view"),l=new iw;window.addEventListener("error",f=>l.showError("error: "+(f.message??"").slice(0,160)));const c=await Zl.create(o,a,l);l.hideLoading(),t||c.showMenu(),window.__splinecraft={game:c,ready:()=>c.ready&&c.pendingMeshes===0,setView:c.setView.bind(c),setTime:c.setTime.bind(c),edit:c.applyEdit.bind(c),ground:(f,u)=>Cs(c.field,f,u),state:()=>c.stateString()};const h=f=>{c.frame(f),requestAnimationFrame(h)};requestAnimationFrame(h)}Ow().catch(n=>{console.error(n);const e=document.getElementById("loading-text");e&&(e.textContent="failed to start: "+(n instanceof Error?n.message:String(n)))});
