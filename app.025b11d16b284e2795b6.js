webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),a=r(o),u=n(30),i=r(u),f=n(163),c=r(f);i["default"].render(a["default"].createElement(c["default"],null),document.getElementById("app"))},163:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c),s=n(164),d=r(s),v=n(166),p=r(v),y=function(e){function t(e){a(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.addNote=function(){n.setState({notes:[].concat(o(n.state.notes),[{id:d["default"].v4(),task:"New task"}])})},n.state={notes:[{id:d["default"].v4(),task:"Learn React"},{id:d["default"].v4(),task:"Do laundry"}]},n}return i(t,e),f(t,[{key:"render",value:function(){var e=this.state.notes;return l["default"].createElement("div",null,l["default"].createElement("button",{onClick:this.addNote},"+"),l["default"].createElement(p["default"],{notes:e}))}}]),t}(l["default"].Component);t["default"]=y},164:function(e,t,n){function r(e,t,n){var r=t&&n||0,o=0;for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){o<16&&(t[r+o++]=c[e])});o<16;)t[r+o++]=0;return t}function o(e,t){var n=t||0,r=f;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}function a(e,t,n){var r=t&&n||0,a=t||[];e=e||{};var u=void 0!==e.clockseq?e.clockseq:v,i=void 0!==e.msecs?e.msecs:(new Date).getTime(),f=void 0!==e.nsecs?e.nsecs:y+1,c=i-p+(f-y)/1e4;if(c<0&&void 0===e.clockseq&&(u=u+1&16383),(c<0||i>p)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=i,y=f,v=u,i+=122192928e5;var l=(1e4*(268435455&i)+f)%4294967296;a[r++]=l>>>24&255,a[r++]=l>>>16&255,a[r++]=l>>>8&255,a[r++]=255&l;var s=i/4294967296*1e4&268435455;a[r++]=s>>>8&255,a[r++]=255&s,a[r++]=s>>>24&15|16,a[r++]=s>>>16&255,a[r++]=u>>>8|128,a[r++]=255&u;for(var m=e.node||d,b=0;b<6;b++)a[r+b]=m[b];return t?t:o(a)}function u(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var a=e.random||(e.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var u=0;u<16;u++)t[r+u]=a[u];return t||o(a)}for(var i=n(165),f=[],c={},l=0;l<256;l++)f[l]=(l+256).toString(16).substr(1),c[f[l]]=l;var s=i(),d=[1|s[0],s[1],s[2],s[3],s[4],s[5]],v=16383&(s[6]<<8|s[7]),p=0,y=0,m=u;m.v1=a,m.v4=u,m.parse=r,m.unparse=o,e.exports=m},165:function(e,t){(function(t){var n,r=t.crypto||t.msCrypto;if(r&&r.getRandomValues){var o=new Uint8Array(16);n=function(){return r.getRandomValues(o),o}}if(!n){var a=new Array(16);n=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}e.exports=n}).call(t,function(){return this}())},166:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t["default"]=function(e){var t=e.notes;return a["default"].createElement("ul",null,t.map(function(e){return a["default"].createElement("li",{key:e.id},e.task)}))}}});
//# sourceMappingURL=app.025b11d16b284e2795b6.js.map