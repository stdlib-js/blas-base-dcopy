// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";var n=8;function e(r,e,t,f,i,a,o){var u,d,s,l;if(r<=0)return i;if(u=f,d=o,1===t&&1===a){if((s=r%n)>0)for(l=0;l<s;l++)i[d]=e[u],u+=t,d+=a;if(r<n)return i;for(l=s;l<r;l+=n)i[d]=e[u],i[d+1]=e[u+1],i[d+2]=e[u+2],i[d+3]=e[u+3],i[d+4]=e[u+4],i[d+5]=e[u+5],i[d+6]=e[u+6],i[d+7]=e[u+7],u+=n,d+=n;return i}for(l=0;l<r;l++)i[d]=e[u],u+=t,d+=a;return i}function t(r,n,t,f,i){return r<=0?f:e(r,n,t,t<0?(1-r)*t:0,f,i,i<0?(1-r)*i:0)}r(t,"ndarray",e);export{t as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
