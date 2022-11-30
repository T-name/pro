(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/recommend/index"],{"414e":function(t,n,e){"use strict";e.r(n);var u=e("b677"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=a.a},6019:function(t,n,e){"use strict";e.r(n);var u=e("ad50"),a=e("414e");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("e33d");var o,c=e("f0c5"),i=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,"cb721c04",null,!1,u["a"],o);n["default"]=i.exports},6501:function(t,n,e){},ad50:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},r=[]},b677:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),a=e("7a16"),r=o(e("a29e"));function o(t){return t&&t.__esModule?t:{default:t}}var c={computed:(0,u.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[r.default],data:function(){return{}},methods:{goDetail:function(n){(0,a.goShopDetail)(n,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}}};n.default=c}).call(this,e("543d")["default"])},e33d:function(t,n,e){"use strict";var u=e("6501"),a=e.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/recommend/index-create-component',
    {
        'components/recommend/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6019"))
        })
    },
    [['components/recommend/index-create-component']]
]);
