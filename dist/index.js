"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=v(function(E,s){
var g=require('@stdlib/assert-is-collection/dist'),n=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function w(r,e,u,h){var i,a;if(!g(r))throw new TypeError(t('1YRAh',r));if(!n(e))throw new TypeError(t('1YR2H',e));if(!n(u))throw new TypeError(t('1YR3N',u));for(i=r.length,a=0;a<i&&e(r[a],a,r);)u.call(h,r[a],a,r),a+=1,i=r.length;return r}s.exports=w
});var f=m();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
