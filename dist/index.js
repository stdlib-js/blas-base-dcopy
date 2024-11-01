"use strict";var q=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var p=q(function(F,m){
var o=8;function b(u,r,n,f,e,v,s){var a,i,c,t;if(u<=0)return e;if(a=f,i=s,n===1&&v===1){if(c=u%o,c>0)for(t=0;t<c;t++)e[i]=r[a],a+=n,i+=v;if(u<o)return e;for(t=c;t<u;t+=o)e[i]=r[a],e[i+1]=r[a+1],e[i+2]=r[a+2],e[i+3]=r[a+3],e[i+4]=r[a+4],e[i+5]=r[a+5],e[i+6]=r[a+6],e[i+7]=r[a+7],a+=o,i+=o;return e}for(t=0;t<u;t++)e[i]=r[a],a+=n,i+=v;return e}m.exports=b
});var R=q(function(G,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),g=p();function h(u,r,n,f,e){var v,s;return u<=0?f:(v=j(u,n),s=j(u,e),g(u,r,n,v,f,e,s))}l.exports=h
});var M=q(function(H,E){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),w=p();k(_,"ndarray",w);E.exports=_
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=M(),d,O=A(z(__dirname,"./native.js"));B(O)?d=C:d=O;module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
