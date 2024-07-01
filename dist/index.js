"use strict";var p=function(u,e){return function(){return e||u((e={exports:{}}).exports,e),e.exports}};var q=p(function(D,m){
var f=8;function O(u,e,v,c,r,o,t){var a,i,s,n;if(u<=0)return r;if(a=c,i=t,v===1&&o===1){if(s=u%f,s>0)for(n=0;n<s;n++)r[i]=e[a],a+=v,i+=o;if(u<f)return r;for(n=s;n<u;n+=f)r[i]=e[a],r[i+1]=e[a+1],r[i+2]=e[a+2],r[i+3]=e[a+3],r[i+4]=e[a+4],r[i+5]=e[a+5],r[i+6]=e[a+6],r[i+7]=e[a+7],a+=f,i+=f;return r}for(n=0;n<u;n++)r[i]=e[a],a+=v,i+=o;return r}m.exports=O
});var R=p(function(F,j){
var b=q();function g(u,e,v,c,r){var o,t;return u<=0?c:(v<0?o=(1-u)*v:o=0,r<0?t=(1-u)*r:t=0,b(u,e,v,o,c,r,t))}j.exports=g
});var E=p(function(G,d){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),k=q();h(_,"ndarray",k);d.exports=_
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=E(),l,M=z(w(__dirname,"./native.js"));A(M)?l=B:l=M;module.exports=l;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
