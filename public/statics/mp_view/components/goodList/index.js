(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/goodList/index"],{2974:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),a=e("7a16"),o={computed:(0,u.mapGetters)(["uid"]),props:{status:{type:Number,default:0},bastList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(n){var e=this;(0,a.goPage)().then((function(u){(0,a.goShopDetail)(n,e.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}))}}};n.default=o}).call(this,e("543d")["default"])},5081:function(t,n,e){"use strict";e.r(n);var u=e("e670"),a=e("84979");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("c564");var i,r=e("f0c5"),c=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,"4da8aaaf",null,!1,u["a"],i);n["default"]=c.exports},84979:function(t,n,e){"use strict";e.r(n);var u=e("2974"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=a.a},c564:function(t,n,e){"use strict";var u=e("ffb3"),a=e.n(u);a.a},e670:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},ffb3:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/goodList/index-create-component',
    {
        'components/goodList/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5081"))
        })
    },
    [['components/goodList/index-create-component']]
]);
