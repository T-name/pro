require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/components/areaWindow/index"],{"11a3":function(e,t,s){"use strict";var r;s.d(t,"b",(function(){return n})),s.d(t,"c",(function(){return i})),s.d(t,"a",(function(){return r}));var n=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"1a12":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s("53c2");function n(e){return c(e)||d(e)||o(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return a(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?a(e,t):void 0}}function d(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return a(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r}var l={},u={props:{display:{type:Boolean,default:!0},address:{type:Array,default:[]}},data:function(){return{active:0,addressList:[],selectedArr:[],selectedIndex:-1,is_loading:!1,old:{scrollTop:0},scrollTop:0}},computed:{activeId:function(){return-1==this.selectedIndex?0:this.selectedArr[this.selectedIndex].id},showMore:function(){return!this.selectedArr.length||this.selectedArr[this.selectedArr.length-1].hasOwnProperty("children")}},watch:{address:function(e){this.selectedArr=e?n(e):[]},display:function(e){e?this.loadAddress(0):(this.addressList=[],this.selectedArr=this.address?n(this.address):[],this.selectedIndex=-1,this.is_loading=!1)}},mounted:function(){this.loadAddress(0)},methods:{change:function(e,t){this.selectedIndex!=t&&(-1===e&&(e=this.selectedArr.length?this.selectedArr[this.selectedArr.length-1].id:0),this.selectedIndex=t,this.loadAddress(e))},loadAddress:function(e){var t=this;l[e]?this.addressList=l[e]:(this.is_loading=!0,(0,r.getCityData)(e).then((function(s){t.is_loading=!1,l[e]=s.data,t.addressList=s.data})),this.goTop())},selected:function(e){this.is_loading||(this.selectedIndex>-1?(this.selectedArr.splice(this.selectedIndex+1,999),this.selectedArr[this.selectedIndex]=e,this.selectedIndex=-1):e.pid?this.selectedArr.push(e):this.selectedArr=[e],e.hasOwnProperty("children")?this.loadAddress(e.id):(this.$emit("submit",n(this.selectedArr)),this.$emit("changeClose")),this.goTop())},close:function(){this.$emit("changeClose")},scroll:function(e){this.old.scrollTop=e.detail.scrollTop},goTop:function(e){var t=this;this.scrollTop=this.old.scrollTop,this.$nextTick((function(){t.scrollTop=0}))}}};t.default=u},"244c":function(e,t,s){},"2e3f":function(e,t,s){"use strict";var r=s("244c"),n=s.n(r);n.a},"47f1":function(e,t,s){"use strict";s.r(t);var r=s("1a12"),n=s.n(r);for(var i in r)"default"!==i&&function(e){s.d(t,e,(function(){return r[e]}))}(i);t["default"]=n.a},c087:function(e,t,s){"use strict";s.r(t);var r=s("11a3"),n=s("47f1");for(var i in n)"default"!==i&&function(e){s.d(t,e,(function(){return n[e]}))}(i);s("2e3f");var o,d=s("f0c5"),c=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"6d2a1c27",null,!1,r["a"],o);t["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/users/components/areaWindow/index-create-component',
    {
        'pages/users/components/areaWindow/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c087"))
        })
    },
    [['pages/users/components/areaWindow/index-create-component']]
]);