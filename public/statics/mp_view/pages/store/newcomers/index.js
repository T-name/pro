(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/store/newcomers/index"],{"02b0":function(t,n,o){"use strict";o.r(n);var e=o("d54f"),i=o("647f");for(var a in i)"default"!==a&&function(t){o.d(n,t,(function(){return i[t]}))}(a);o("43f0");var r,u=o("f0c5"),c=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);n["default"]=c.exports},"43f0":function(t,n,o){"use strict";var e=o("ef26"),i=o.n(e);i.a},"647f":function(t,n,o){"use strict";o.r(n);var e=o("cd26"),i=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,(function(){return e[t]}))}(a);n["default"]=i.a},7746:function(t,n,o){"use strict";(function(t){o("8824");e(o("66fd"));var n=e(o("02b0"));function e(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=o,t(n.default)}).call(this,o("543d")["createPage"])},cd26:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a(o("a29e")),i=o("d863");function a(t){return t&&t.__esModule?t:{default:t}}var r=function(){o.e("components/countDown/index").then(function(){return resolve(o("00a7"))}.bind(null,o)).catch(o.oe)},u={mixins:[e.default],components:{countDown:r},data:function(){return{info:{},newList:[],loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:9}},onLoad:function(){this.getNewcomerInfo(),this.productList()},onReady:function(){},onShow:function(){},methods:{goDetail:function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id,"&fromPage='newVip'")})},goRule:function(n){t.setStorageSync("infos",this.info.newcomer_agreement),t.navigateTo({url:"/pages/store/ruleInfo/index"})},getNewcomerInfo:function(){var t=this;(0,i.newcomerInfo)().then((function(n){n.data.last_time=parseInt(n.data.last_time),t.info=n.data})).catch((function(n){t.$util.Tips({title:n})}))},productList:function(){var t=this,n=this;n.loading||n.loadend||(n.loading=!0,n.loadTitle="",(0,i.newcomerList)({page:n.page,limit:n.limit}).then((function(t){var o=t.data,e=o.length<n.limit;n.newList=n.$util.SplitArray(o,n.newList),n.$set(n,"newList",n.newList),n.loadend=e,n.loadTitle=e?"没有更多内容啦~":"加载更多",n.page=n.page+1,n.loading=!1})).catch((function(o){n.loading=!1,n.loadTitle="加载更多",t.$util.Tips({title:o})})))},goGoodList:function(){t.navigateTo({url:"/pages/goods/goods_list/index"})}},onReachBottom:function(){this.productList()}};n.default=u}).call(this,o("543d")["default"])},d54f:function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,o=(t._self._c,parseFloat(t.info.first_order_discount)/10||10),e=t.info.register_give_coupon&&t.info.register_give_coupon.length?t.__map(t.info.register_give_coupon,(function(n,o){var e=t.__get_orig(n),i=1==n.coupon_type?n.coupon_price.toString().split("."):null,a=n.coupon_price.toString().split(".").length>1&&1==n.coupon_type,r=a?n.coupon_price.toString().split("."):null,u=2==n.coupon_type?parseFloat(n.coupon_price):null;return{$orig:e,g0:i,g1:a,g2:r,m1:u}})):null,i=parseFloat(t.info.first_order_discount)/10||10,a=parseFloat(t.info.first_order_discount)/10||10;t.$mp.data=Object.assign({},{$root:{m0:o,l0:e,m2:i,m3:a}})},a=[]},ef26:function(t,n,o){}},[["7746","common/runtime","common/vendor"]]]);