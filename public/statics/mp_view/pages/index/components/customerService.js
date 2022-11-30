(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/customerService"],{"34e9":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement;t._self._c},a=[]},7593:function(t,n,e){"use strict";e.r(n);var o=e("851d"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},7700:function(t,n,e){"use strict";var o=e("d286"),i=e.n(o);i.a},"851d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"customerService",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{routineContact:this.dataConfig.routine_contact_type,logoConfig:this.dataConfig.logoConfig.url,topConfig:this.dataConfig.topConfig.val?this.dataConfig.topConfig.val>=80?"80%":this.dataConfig.topConfig.val+"%":"30%"}},created:function(){},methods:{setTouchMove:function(t){var n=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(n.topConfig=t.touches[0].clientY+"px")}}};n.default=o},b5a1:function(t,n,e){"use strict";e.r(n);var o=e("34e9"),i=e("7593");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("7700");var u,c=e("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=r.exports},d286:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/customerService-create-component',
    {
        'pages/index/components/customerService-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b5a1"))
        })
    },
    [['pages/index/components/customerService-create-component']]
]);
