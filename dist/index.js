"use strict";var q=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var j=q(function(F,l){
var s=8;function g(n,e,f,u,a){var o,t,i,r;if(n<=0)return u;if(f===1&&a===1){if(i=n%s,i>0)for(r=0;r<i;r++)u[r]=e[r];if(n<s)return u;for(r=i;r<n;r+=s)u[r]=e[r],u[r+1]=e[r+1],u[r+2]=e[r+2],u[r+3]=e[r+3],u[r+4]=e[r+4],u[r+5]=e[r+5],u[r+6]=e[r+6],u[r+7]=e[r+7];return u}for(f<0?o=(1-n)*f:o=0,a<0?t=(1-n)*a:t=0,r=0;r<n;r++)u[t]=e[o],o+=f,t+=a;return u}l.exports=g
});var R=q(function(G,M){
var c=8;function h(n,e,f,u,a,o,t){var i,r,p,v;if(n<=0)return a;if(i=u,r=t,f===1&&o===1){if(p=n%c,p>0)for(v=0;v<p;v++)a[r]=e[i],i+=f,r+=o;if(n<c)return a;for(v=p;v<n;v+=c)a[r]=e[i],a[r+1]=e[i+1],a[r+2]=e[i+2],a[r+3]=e[i+3],a[r+4]=e[i+4],a[r+5]=e[i+5],a[r+6]=e[i+6],a[r+7]=e[i+7],i+=c,r+=c;return a}for(v=0;v<n;v++)a[r]=e[i],i+=f,r+=o;return a}M.exports=h
});var O=q(function(H,E){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=j(),w=R();k(_,"ndarray",w);E.exports=_
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=O(),m,b=A(z(__dirname,"./native.js"));B(b)?m=C:m=b;module.exports=m;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
