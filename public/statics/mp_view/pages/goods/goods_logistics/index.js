require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods_logistics/index"],{"0d7e":function(t,e,n){"use strict";var o=n("c445"),r=n.n(o);r.a},"570f":function(t,e,n){"use strict";n.r(e);var o=n("d6e5"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},"79d4":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},b4e9:function(t,e,n){"use strict";n.r(e);var o=n("79d4"),r=n("570f");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("0d7e");var s,u=n("f0c5"),c=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"4e6e26bf",null,!1,o["a"],s);e["default"]=c.exports},c445:function(t,e,n){},c4aa:function(t,e,n){"use strict";(function(t){n("8824");o(n("66fd"));var e=o(n("b4e9"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},d6e5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("79c7"),r=n("78a2"),i=(c(n("e338")),n("d5f7")),s=n("26cb"),u=c(n("a29e"));function c(t){return t&&t.__esModule?t:{default:t}}var d=function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("6019"))}.bind(null,n)).catch(n.oe)},a={components:{recommend:d},mixins:[u.default],data:function(){return{orderId:"",type:"",product:[],orderInfo:{},expressList:[],hostProduct:[]}},computed:(0,s.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getExpress(),this.get_host_product())},deep:!0}},onLoad:function(t){if(!t.orderId)return this.$util.Tips({title:"缺少订单号"});"undefined"==typeof t.type?this.type="":this.type=t.type,this.orderId=t.orderId,this.isLogin?(this.getExpress(),this.get_host_product()):(0,i.toLogin)()},onReady:function(){},onShow:function(){t.removeStorageSync("form_type_cart")},methods:{onLoadFun:function(){this.getExpress(),this.get_host_product()},copyOrderId:function(){t.setClipboardData({data:this.orderInfo.delivery_id})},getExpress:function(){var t=this,e=this;(0,o.express)(e.orderId,this.type).then((function(t){var n=t.data.express.result||{};e.$set(e,"product",t.data.order.cartInfo||[]),e.$set(e,"orderInfo",t.data.order),e.$set(e,"expressList",n.list||[])})).catch((function(e){t.$util.Tips({title:e})}))},get_host_product:function(){var t=this;(0,r.getProductHot)().then((function(e){t.$set(t,"hostProduct",e.data)}))}}};e.default=a}).call(this,n("543d")["default"])}},[["c4aa","common/runtime","common/vendor"]]]);