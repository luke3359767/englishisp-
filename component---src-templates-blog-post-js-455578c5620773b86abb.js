(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+6XX":function(t,n,e){var r=e("y1pI");t.exports=function(t){return r(this.__data__,t)>-1}},"/9aa":function(t,n,e){var r=e("NykK"),o=e("ExA7");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},"2gN3":function(t,n,e){var r=e("Kz5y")["__core-js_shared__"];t.exports=r},"3Fdi":function(t,n){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(n){}try{return t+""}catch(n){}}return""}},"44Ds":function(t,n,e){var r=e("e4Nc");function o(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var e=function(){var r=arguments,o=n?n.apply(this,r):r[0],a=e.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return e.cache=a.set(o,i)||a,i};return e.cache=new(o.Cache||r),e}o.Cache=r,t.exports=o},"4kuk":function(t,n,e){var r=e("SfRM"),o=e("Hvzi"),a=e("u8Dt"),i=e("ekgI"),c=e("JSQU");function l(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=o,l.prototype.get=a,l.prototype.has=i,l.prototype.set=c,t.exports=l},"4uTw":function(t,n,e){var r=e("Z0cm"),o=e("9ggG"),a=e("GNiM"),i=e("dt0z");t.exports=function(t,n){return r(t)?t:o(t,n)?[t]:a(i(t))}},"9Nap":function(t,n,e){var r=e("/9aa");t.exports=function(t){if("string"==typeof t||r(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},"9ggG":function(t,n,e){var r=e("Z0cm"),o=e("/9aa"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,n){if(r(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!o(t))||(i.test(t)||!a.test(t)||null!=n&&t in Object(n))}},AP2z:function(t,n,e){var r=e("nmnc"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var n=a.call(t,c),e=t[c];try{t[c]=void 0;var r=!0}catch(l){}var o=i.call(t);return r&&(n?t[c]=e:delete t[c]),o}},Cwc5:function(t,n,e){var r=e("NKxu"),o=e("Npjl");t.exports=function(t,n){var e=o(t,n);return r(e)?e:void 0}},E2jh:function(t,n,e){var r,o=e("2gN3"),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},EpBk:function(t,n){t.exports=function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}},ExA7:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},GNiM:function(t,n,e){var r=e("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(o,(function(t,e,r,o){n.push(r?o.replace(a,"$1"):e||t)})),n}));t.exports=i},GoyQ:function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},H8j4:function(t,n,e){var r=e("QkVE");t.exports=function(t,n){var e=r(this,t),o=e.size;return e.set(t,n),this.size+=e.size==o?0:1,this}},Hvzi:function(t,n){t.exports=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}},I01J:function(t,n,e){var r=e("44Ds");t.exports=function(t){var n=r(t,(function(t){return 500===e.size&&e.clear(),t})),e=n.cache;return n}},JHgL:function(t,n,e){var r=e("QkVE");t.exports=function(t){return r(this,t).get(t)}},JSQU:function(t,n,e){var r=e("YESw");t.exports=function(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=r&&void 0===n?"__lodash_hash_undefined__":n,this}},KMkd:function(t,n){t.exports=function(){this.__data__=[],this.size=0}},KfNM:function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},Kz5y:function(t,n,e){var r=e("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},NKxu:function(t,n,e){var r=e("lSCD"),o=e("E2jh"),a=e("GoyQ"),i=e("3Fdi"),c=/^\[object .+?Constructor\]$/,l=Function.prototype,p=Object.prototype,u=l.toString,s=p.hasOwnProperty,f=RegExp("^"+u.call(s).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(r(t)?f:c).test(i(t))}},Npjl:function(t,n){t.exports=function(t,n){return null==t?void 0:t[n]}},NykK:function(t,n,e){var r=e("nmnc"),o=e("AP2z"),a=e("KfNM"),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},QkVE:function(t,n,e){var r=e("EpBk");t.exports=function(t,n){var e=t.__data__;return r(n)?e["string"==typeof n?"string":"hash"]:e.map}},SfRM:function(t,n,e){var r=e("YESw");t.exports=function(){this.__data__=r?r(null):{},this.size=0}},VZoM:function(t,n,e){"use strict";var r,o=e("MUpH"),a=e("vOnD").default.h2(r||(r=Object(o.a)(["\n  color: #3e465b;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.5;\n  margin: 25px 50px 15px;\n"])));n.a=a},WFqU:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e("yLpj"))},Xi7e:function(t,n,e){var r=e("KMkd"),o=e("adU4"),a=e("tMB7"),i=e("+6XX"),c=e("Z8oC");function l(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=o,l.prototype.get=a,l.prototype.has=i,l.prototype.set=c,t.exports=l},YESw:function(t,n,e){var r=e("Cwc5")(Object,"create");t.exports=r},Z0cm:function(t,n){var e=Array.isArray;t.exports=e},Z8oC:function(t,n,e){var r=e("y1pI");t.exports=function(t,n){var e=this.__data__,o=r(e,t);return o<0?(++this.size,e.push([t,n])):e[o][1]=n,this}},ZWtO:function(t,n,e){var r=e("4uTw"),o=e("9Nap");t.exports=function(t,n){for(var e=0,a=(n=r(n,t)).length;null!=t&&e<a;)t=t[o(n[e++])];return e&&e==a?t:void 0}},adU4:function(t,n,e){var r=e("y1pI"),o=Array.prototype.splice;t.exports=function(t){var n=this.__data__,e=r(n,t);return!(e<0)&&(e==n.length-1?n.pop():o.call(n,e,1),--this.size,!0)}},dt0z:function(t,n,e){var r=e("zoYe");t.exports=function(t){return null==t?"":r(t)}},e4Nc:function(t,n,e){var r=e("fGT3"),o=e("k+1r"),a=e("JHgL"),i=e("pSRY"),c=e("H8j4");function l(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=o,l.prototype.get=a,l.prototype.has=i,l.prototype.set=c,t.exports=l},eUgh:function(t,n){t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}},ebwN:function(t,n,e){var r=e("Cwc5")(e("Kz5y"),"Map");t.exports=r},ekgI:function(t,n,e){var r=e("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;return r?void 0!==n[t]:o.call(n,t)}},fGT3:function(t,n,e){var r=e("4kuk"),o=e("Xi7e"),a=e("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},"k+1r":function(t,n,e){var r=e("QkVE");t.exports=function(t){var n=r(this,t).delete(t);return this.size-=n?1:0,n}},lSCD:function(t,n,e){var r=e("NykK"),o=e("GoyQ");t.exports=function(t){if(!o(t))return!1;var n=r(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},ljhN:function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},mwIZ:function(t,n,e){var r=e("ZWtO");t.exports=function(t,n,e){var o=null==t?void 0:r(t,n);return void 0===o?e:o}},nmnc:function(t,n,e){var r=e("Kz5y").Symbol;t.exports=r},pSRY:function(t,n,e){var r=e("QkVE");t.exports=function(t){return r(this,t).has(t)}},tMB7:function(t,n,e){var r=e("y1pI");t.exports=function(t){var n=this.__data__,e=r(n,t);return e<0?void 0:n[e][1]}},u8Dt:function(t,n,e){var r=e("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;if(r){var e=n[t];return"__lodash_hash_undefined__"===e?void 0:e}return o.call(n,t)?n[t]:void 0}},y1pI:function(t,n,e){var r=e("ljhN");t.exports=function(t,n){for(var e=t.length;e--;)if(r(t[e][0],n))return e;return-1}},yZlL:function(t,n,e){"use strict";e.r(n);var r,o,a,i,c,l=e("dI71"),p=e("TJpk"),u=e.n(p),s=e("mwIZ"),f=e.n(s),h=e("q1tI"),d=e.n(h),v=e("obyI"),x=e.n(v),g=e("3yDT"),m=e("MUpH"),y=e("vOnD"),w=y.default.article(r||(r=Object(m.a)(["\n  color: #65738c;\n  font-size: 16px;\n\n  a {\n    color: ",";\n    font-weight: 700;\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  h1 {\n    color: #3e465b;\n    font-size: 30px;\n    font-weight: 700;\n    line-height: 1.5;\n    margin: 25px 50px 15px;\n  }\n\n  h2 {\n    color: #3e465b;\n    font-size: 22px;\n    font-weight: 700;\n    line-height: 1.5;\n    margin: 25px 50px 15px;\n  }\n\n  h3 {\n    color: #3e465b;\n    font-size: 17px;\n    font-weight: 700;\n    line-height: 1.5;\n    margin: 25px 50px 15px;\n  }\n\n  h4 {\n    color: #3e465b;\n    font-weight: 700;\n    line-height: 1.5;\n    margin: 25px 50px 15px;\n  }\n\n  h5,\n  h6 {\n    color: #3e465b;\n    font-weight: 700;\n    line-height: 1.5;\n    margin: 25px 50px 15px;\n  }\n\n  p {\n    line-height: 1.7;\n    margin: 15px 50px;\n  }\n\n  blockquote {\n    border-left: 5px solid #e0e6ed;\n    line-height: 1.7;\n    margin: 15px 50px 15px 75px;\n    padding: 10px 10px 10px 15px;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  ul,\n  ol {\n    line-height: 1.7;\n    margin: 15px 0;\n    padding: 0 50px 0 100px;\n\n    p,\n    ul,\n    ol {\n      margin: 0;\n    }\n\n    ul,\n    ol {\n      padding: 0 0 0 30px;\n    }\n  }\n\n  img {\n    margin: 15px 0;\n  }\n"])),x.a.primaryColor),b=y.default.div(o||(o=Object(m.a)(["\n  h1 {\n    color: #3e465b;\n    font-size: 35px;\n    line-height: 1.5;\n    margin: 0;\n    padding: 0 30px;\n    text-align: center;\n  }\n\n  p {\n    color: #666d71;\n    display: block;\n    font-size: 1.6em;\n    margin: 0;\n    text-align: center;\n  }\n\n  span {\n    background: #9c9da3;\n    display: block;\n    margin: 50px auto;\n    height: 1px;\n    width: 150px;\n  }\n"]))),_=e("ww3E"),k=e("ZO1O"),E=e("aAma"),j=e("ZtnR"),z=y.default.div(a||(a=Object(m.a)(["\n  margin-top: 50px;\n  text-align: center;\n"]))),O=e("VZoM"),S=y.default.div(i||(i=Object(m.a)(["\n  margin-top: 50px;\n  text-align: center;\n"]))),I=y.default.a(c||(c=Object(m.a)(["\n  border: 1px solid #bfc8d2;\n  border-radius: 15px;\n  display: inline-block;\n  margin: 5px;\n  padding: 5px 15px;\n  text-decoration: none;\n\n  svg {\n    display: inline-block;\n    height: 20px;\n    stroke: #6e849c;\n    vertical-align: middle;\n    width: 20px;\n  }\n\n  &:hover {\n    border-color: #3e465b;\n  }\n"])));var N=function(t){var n=t.title,e=t.url,r=encodeURI(e),o=encodeURI(n);return d.a.createElement(S,null,d.a.createElement(O.a,null,"Share This Post"),d.a.createElement(I,{href:"https://www.facebook.com/sharer/sharer.php?u="+r,target:"_blank","aria-label":"Share on Facebook",rel:"noopener"},d.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d.a.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}))),d.a.createElement(I,{href:"https://twitter.com/intent/tweet?text="+o+"&url="+r,target:"_blank","aria-label":"Share on Twitter",rel:"noopener"},d.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))),d.a.createElement(I,{href:"https://www.linkedin.com/shareArticle?mini=true&url="+r+"&title="+o,target:"_blank","aria-label":"Share on LinkedIn",rel:"noopener"},d.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d.a.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),d.a.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),d.a.createElement("circle",{cx:"4",cy:"4",r:"2"}))),d.a.createElement(I,{href:"mailto:?subject="+o+"&body="+r,"aria-label":"Share by Email",rel:"noopener"},d.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),d.a.createElement("polyline",{points:"22,6 12,13 2,6"}))))},M=function(t){function n(){return t.apply(this,arguments)||this}return Object(l.a)(n,t),n.prototype.render=function(){var t=this.props.data.markdownRemark,n=f()(this.props,"data.site.siteMetadata.author"),e=this.props.pageContext,r=e.previous,o=e.next,a="";return"undefined"!=typeof window&&(a=window.location.href),d.a.createElement(g.a,null,d.a.createElement(E.a,null,d.a.createElement(u.a,{title:t.frontmatter.title+" | "+n,htmlAttributes:{lang:"en"}},d.a.createElement("meta",{name:"description",content:x.a.title+" | "+x.a.description})),d.a.createElement(k.a,null,d.a.createElement(b,null,t.frontmatter.featuredImage&&d.a.createElement(j.a,{sizes:t.frontmatter.featuredImage.childImageSharp.sizes}),d.a.createElement("h1",null,t.frontmatter.title),d.a.createElement("p",null,t.frontmatter.date),d.a.createElement("span",null)),d.a.createElement(w,null,d.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})),x.a.showShareButtons&&d.a.createElement(N,{url:a,title:t.frontmatter.title})),d.a.createElement(z,null,r&&d.a.createElement(_.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title),o&&d.a.createElement(_.a,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))},n}(d.a.Component);n.default=M},zoYe:function(t,n,e){var r=e("nmnc"),o=e("eUgh"),a=e("Z0cm"),i=e("/9aa"),c=r?r.prototype:void 0,l=c?c.toString:void 0;t.exports=function t(n){if("string"==typeof n)return n;if(a(n))return o(n,t)+"";if(i(n))return l?l.call(n):"";var e=n+"";return"0"==e&&1/n==-1/0?"-0":e}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-455578c5620773b86abb.js.map