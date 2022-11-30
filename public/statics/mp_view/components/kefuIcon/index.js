(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kefuIcon/index"],{2004:function(t,e,n){"use strict";n.r(e);var u=n("7078"),o=n("4821");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("fad2");var c,a=n("f0c5"),f=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);e["default"]=f.exports},4821:function(t,e,n){"use strict";n.r(e);var u=n("8187"),o=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e["default"]=o.a},7078:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}));var o=function(){var t=this,e=t.$createElement;t._self._c},r=[]},8187:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n("26cb"),o=(getApp(),{name:"kefuIcon",props:{ids:{type:Number,default:0},routineContact:{type:Number,default:0},storeInfo:{type:Object,default:function(){return{}}},goodsCon:{type:Number,default:0}},computed:(0,u.mapGetters)(["userInfo"]),data:function(){return{top:"480"}},mounted:function(){},methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<480&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},licks:function(){var t={};t="string"===typeof this.userInfo?JSON.parse(this.userInfo):this.userInfo;var e="/pages/extension/customer_list/chat?productId=".concat(this.ids);this.$util.getCustomer(t,e)}},created:function(){}});e.default=o},f3a8:function(t,e,n){},fad2:function(t,e,n){"use strict";var u=n("f3a8"),o=n.n(u);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kefuIcon/index-create-component',
    {
        'components/kefuIcon/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2004"))
        })
    },
    [['components/kefuIcon/index-create-component']]
]);
