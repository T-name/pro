require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_coupon/index"],{"0ed0":function(t,n,o){"use strict";var e=o("51cc"),i=o.n(e);i.a},"188f2":function(t,n,o){"use strict";var e=o("39f51"),i=o.n(e);i.a},2270:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=o("53c2"),i=o("d5f7"),s=o("26cb"),u=c(o("a29e")),a=o("5f9b");function c(t){return t&&t.__esModule?t:{default:t}}var d=function(){Promise.all([o.e("common/vendor"),o.e("components/home/index")]).then(function(){return resolve(o("d878"))}.bind(null,o)).catch(o.oe)},r={components:{home:d},mixins:[u.default],data:function(){return{couponsList:[],loading:!1,isAuto:!1,isShowAuth:!1,navOn:1,page:1,limit:15,finished:!1,imgHost:a.HTTP_REQUEST_URL}},computed:(0,s.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&this.getUseCoupons()},deep:!0}},onLoad:function(){this.isLogin?this.getUseCoupons():(0,i.toLogin)()},onShow:function(){t.removeStorageSync("form_type_cart")},onReachBottom:function(){this.getUseCoupons()},methods:{onNav:function(t){this.navOn=t,this.couponsList=[],this.page=1,this.finished=!1,this.getUseCoupons()},useCoupon:function(n){var o="";if(0==n.category_id&&""==n.product_id&&(o="/pages/goods/goods_list/index?title=默认"),0!=n.category_id&&(o=1==n.category_type?"/pages/goods/goods_list/index?cid="+n.category_id+"&title="+n.category_name:"/pages/goods/goods_list/index?sid="+n.category_id+"&title="+n.category_name),""!=n.product_id){var e=n.product_id.split(","),i=e.length;o=1==i?"/pages/goods_details/index?id="+n.product_id:"/pages/goods/goods_list/index?productId="+n.product_id+"&title=默认"}t.navigateTo({url:o})},onLoadFun:function(){this.getUseCoupons()},authColse:function(t){this.isShowAuth=t},getUseCoupons:function(){var n=this;n.loading||n.finished||(n.loading=!0,t.showLoading({title:"正在加载…"}),(0,e.getUserCoupons)(this.navOn,{page:this.page,limit:this.limit}).then((function(o){n.loading=!1,t.hideLoading(),n.couponsList=n.couponsList.concat(o.data),n.finished=o.data.length<n.limit,n.page+=1})).catch((function(o){n.loading=!1,t.showToast({title:o,icon:"none"})})))}}};n.default=r}).call(this,o("543d")["default"])},"39f51":function(t,n,o){},"3a6f":function(t,n,o){"use strict";o.r(n);var e=o("3f92"),i=o("b84b");for(var s in i)"default"!==s&&function(t){o.d(n,t,(function(){return i[t]}))}(s);o("188f2"),o("0ed0");var u,a=o("f0c5"),c=Object(a["a"])(i["default"],e["b"],e["c"],!1,null,"0e88679b",null,!1,e["a"],u);n["default"]=c.exports},"3f92":function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return s})),o.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,o=(t._self._c,t.couponsList.length?t.__map(t.couponsList,(function(n,o){var e=t.__get_orig(n),i=1!=n.coupon_type?parseFloat(n.coupon_price):null;return{$orig:e,m0:i}})):null);t.$mp.data=Object.assign({},{$root:{l0:o}})},s=[]},"51cc":function(t,n,o){},5473:function(t,n,o){"use strict";(function(t){o("8824");e(o("66fd"));var n=e(o("3a6f"));function e(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=o,t(n.default)}).call(this,o("543d")["createPage"])},b84b:function(t,n,o){"use strict";o.r(n);var e=o("2270"),i=o.n(e);for(var s in e)"default"!==s&&function(t){o.d(n,t,(function(){return e[t]}))}(s);n["default"]=i.a}},[["5473","common/runtime","common/vendor"]]]);