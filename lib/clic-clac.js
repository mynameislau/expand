!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["clic-clac"]=e():t["clic-clac"]=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=10)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(16),o=n(21);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=e||document;return Array.prototype.slice.call(n.querySelectorAll(t))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.isOrContains=function(t,e){return t===e||t.contains(e)},e.updateState=function(t,e,n){t.getAttribute(e)!==n&&t.setAttribute(e,n)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";n(11),n(12)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addExpand=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(5)),o=n(6),a={},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,o.updateState)(t,"data-initial-state",e?"true":"false")},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.controllerElements.forEach(function(n){(0,o.updateState)(n,"aria-pressed",t.expanded?"true":"false"),u(n,e)}),(0,o.updateState)(t.controlledElement,"aria-expanded",t.expanded?"true":"false"),u(t.controlledElement,e),window.requestAnimationFrame&&window.requestAnimationFrame(function(){window.dispatchEvent(new Event("resize"))})},c=function(t){var e=t.controlledID;!1===t.expanded&&(t.controlledElement.setAttribute("id",""),window.requestAnimationFrame(function(){t.controlledElement.setAttribute("id",e)}))},l=function(t){t.expanded=!t.expanded,i(t),c(t)},f=function(t,e){t.controllerElements.push(e),e.setAttribute("aria-controls",t.controlledID)},s=function(t){try{window.document.querySelector(":target")===t.controlledElement&&l(t)}catch(t){}},d=function(t){var e=t.getAttribute("data-controls"),n=window.document.getElementById(e),r="true"===t.getAttribute("data-expand-default-state"),a=n.getAttribute("role"),u={controllerElements:[],controlledElement:n,controlledID:e,defaultState:r,expanded:r},c=u.controllerElements;return u.controlledElement.setAttribute("role",a||"region"),window.document.documentElement.addEventListener("click",function(t){c.reduce(function(e,n){return(0,o.isOrContains)(n,t.target)?n:e},null)&&l(u)}),i(u,!0),f(u,t),i(u,!1),s(u),u},b=e.addExpand=function(t){var e=t.getAttribute("data-controls");a[e]?f(a[e],t):a[e]=d(t)};(0,r.default)("[data-expand]").forEach(b)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setMultiselectable=e.setKeepOneTabSelected=e.addTablist=void 0,n(13);var r=function(t){return t&&t.__esModule?t:{default:t}}(n(5)),o=n(6),a=[],u=function(t,e){return t.tabs.filter(function(t){return t!==e&&t.selected&&t.tabPanelID!==e.tabPanelID}).length>0},i=function(t,e){return t.tabPanelID===e},c=function(t,e){var n=!t.selected,r=!1===n&&!u(e,t)&&e.keepOneTabSelected,o=e.tabs.filter(function(e){return i(e,t.tabPanelID)});r||e.tabs.forEach(function(t){var r=o.includes(t);!r&&!e.multiselectable&&(t.selected=!1),r&&(t.selected=n)})},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,o.updateState)(t,"data-initial-state",e?"true":"false")},f=function(t,e){return t.reduce(function(t,n){return(0,o.isOrContains)(n,e)?n:t},null)},s=function(t,e){return t.reduce(function(t,n){return(0,o.isOrContains)(n.tabElement,e)?n:t},null)},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.tabs.some(function(t){return t.selected});(0,o.updateState)(t.tablistElement,"aria-multiselectable",t.multiselectable?"true":"false"),(0,o.updateState)(t.tablistElement,"data-has-selected-tab",n?"true":"false"),t.tabs.forEach(function(t){var r=t.selected?"true":"false";(0,o.updateState)(t.tabPanelElement,"aria-expanded",r),(0,o.updateState)(t.tabElement,"aria-selected",r),(0,o.updateState)(t.tabPanelElement,"data-tablist-has-tab-selected",n?"true":"false"),l(t.tabPanelElement,e),l(t.tabElement,e),t.tabPanelElement.className=t.tabPanelElement.className,t.tabElement.className=t.tabElement.className})},b=function(t){t.tabs.forEach(function(t){t.selected=!1}),d(t)},p=function(t,e){return t+" "+e},m=function(t){t.tabElement.setAttribute("role","tab"),t.tabElement.setAttribute("id",t.tabID),t.tabElement.setAttribute("aria-controls",t.tabPanelID),t.tabPanelElement.setAttribute("aria-labelledby",t.tabID),t.tabPanelElement.setAttribute("role","tabpanel")},v=function(t,e,n){return function(r){var o=f(t,r.target),a=f(n,r.target),u=s(e.tabs,r.target),i=null!==o,l=null!==a,p=!i&&!l;i&&(c(u,e),d(e)),p&&"deselect"===e.clickOutside&&b(e)}},E=function(t){t.tablistElement.setAttribute("id",t.tablistID),t.tablistElement.setAttribute("role","tablist"),t.tablistElement.setAttribute("aria-multiselectable",t.multiselectable?"true":"false"),t.tablistElement.setAttribute("aria-owns",t.tabs.map(function(t){return t.tabID}).reduce(p))},y=function(t){E(t),t.tabs.forEach(m);var e=t.tabs.map(function(t){return t.tabElement}),n=t.tabs.map(function(t){return t.tabPanelElement});window.document.body.addEventListener("click",v(e,t,n));var r=0===t.tabs.filter(function(t){return t.selected}).length;return t.keepOneTabSelected&&r&&c(t.tabs[0],t),d(t,!0),t},x=function(t,e,n){var r="true"===t.getAttribute("data-expand-default-state"),o=r,a=t.getAttribute("data-tab-for");return{tabElement:t,tabPanelElement:window.document.getElementById(a),defaultState:o,tablistID:e,tabID:t.getAttribute("id")||e+"-tab-"+n,tabPanelID:a,selected:r}},h=function(t){var e=t.getAttribute("data-tablist")||t.getAttribute("id"),n=(0,r.default)('[data-owner="'+e+'"]').map(function(t,n){return x(t,e,n)});return{tablistID:e,tabs:n,updateHash:!1,keepOneTabSelected:"true"===t.getAttribute("data-at-least-one"),multiselectable:"true"===t.getAttribute("data-multiselectable"),tablistElement:t,clickOutside:t.getAttribute("data-click-outside")}},g=function(t){return a.reduce(function(e,n){return n.tablistID===t?n:e},null)},w=e.addTablist=function(t){a.push(y(h(t)))};e.setKeepOneTabSelected=function(t,e){var n=g(t);n.keepOneTabSelected=e,d(n)},e.setMultiselectable=function(t,e){var n=g(t);n.multiselectable=e,d(n)};(0,r.default)("[data-tablist]").forEach(w)},function(t,e,n){n(14),t.exports=n(1).Array.includes},function(t,e,n){"use strict";var r=n(15),o=n(26)(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(33)("includes")},function(t,e,n){var r=n(0),o=n(1),a=n(2),u=n(22),i=n(24),c=function(t,e,n){var l,f,s,d,b=t&c.F,p=t&c.G,m=t&c.S,v=t&c.P,E=t&c.B,y=p?r:m?r[e]||(r[e]={}):(r[e]||{}).prototype,x=p?o:o[e]||(o[e]={}),h=x.prototype||(x.prototype={});p&&(n=e);for(l in n)s=((f=!b&&y&&void 0!==y[l])?y:n)[l],d=E&&f?i(s,r):v&&"function"==typeof s?i(Function.call,s):s,y&&u(y,l,s,t&c.U),x[l]!=s&&a(x,l,d),v&&h[l]!=s&&(h[l]=s)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(17),o=n(18),a=n(20),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(4)&&!n(7)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(3),o=n(0).document,a=r(o)&&r(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(0),o=n(2),a=n(23),u=n(8)("src"),i=Function.toString,c=(""+i).split("toString");n(1).inspectSource=function(t){return i.call(t)},(t.exports=function(t,e,n,i){var l="function"==typeof n;l&&(a(n,"name")||o(n,"name",e)),t[e]!==n&&(l&&(a(n,u)||o(n,u,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=n:i?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||i.call(this)})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(25);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(27),o=n(31),a=n(32);t.exports=function(t){return function(e,n,u){var i,c=r(e),l=o(c.length),f=a(u,l);if(t&&n!=n){for(;l>f;)if((i=c[f++])!=i)return!0}else for(;l>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(28),o=n(30);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(29);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(9),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(9),o=Math.max,a=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):a(t,e)}},function(t,e,n){var r=n(34)("unscopables"),o=Array.prototype;void 0==o[r]&&n(2)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,e,n){var r=n(35)("wks"),o=n(8),a=n(0).Symbol,u="function"==typeof a;(t.exports=function(t){return r[t]||(r[t]=u&&a[t]||(u?a:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}}])});
//# sourceMappingURL=clic-clac.js.map