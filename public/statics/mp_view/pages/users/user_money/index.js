require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_money/index"],{"0928":function(t,e,n){"use strict";n.r(e);var o=n("f0a7"),i=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=i.a},"21e1":function(t,e,n){"use strict";n.r(e);var o=n("8efe"),i=n("0928");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("c50b");var u,r=n("f0c5"),a=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"3ddb4278",null,!1,o["a"],u);e["default"]=a.exports},"8ee6":function(t,e,n){"use strict";(function(t){n("8824");o(n("66fd"));var e=o(n("21e1"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"8efe":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},c=[]},a768:function(t,e,n){},c50b:function(t,e,n){"use strict";var o=n("a768"),i=n.n(o);i.a},f0a7:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("78a2"),i=n("aed8"),c=n("99c8"),u=n("d5f7"),r=n("26cb"),a=s(n("a29e"));function s(t){return t&&t.__esModule?t:{default:t}}var f=function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("6019"))}.bind(null,n)).catch(n.oe)},h=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("d878"))}.bind(null,n)).catch(n.oe)},d={components:{recommend:f,home:h},mixins:[a.default],data:function(){return{userInfo:{},hostProduct:[],isClose:!1,recharge_switch:0,activity:{},isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getUserInfo(),this.get_host_product(),this.get_activity())},deep:!0}},onLoad:function(){this.isLogin?(this.getUserInfo(),this.get_host_product(),this.get_activity()):(0,u.toLogin)()},onShow:function(){t.removeStorageSync("form_type_cart")},methods:{onLoadFun:function(){this.getUserInfo(),this.get_host_product(),this.get_activity()},authColse:function(t){this.isShowAuth=t},openSubscribe:function(e){t.showLoading({title:"正在加载"}),(0,i.openRechargeSubscribe)().then((function(n){t.hideLoading(),t.navigateTo({url:e})})).catch((function(){t.hideLoading()}))},getUserInfo:function(){var t=this;(0,c.getUserInfo)().then((function(e){t.$set(t,"userInfo",e.data),t.recharge_switch=e.data.recharge_switch}))},get_activity:function(){var t=this;(0,c.userActivity)().then((function(e){t.$set(t,"activity",e.data)}))},get_host_product:function(){var t=this;t.hotScroll||(0,o.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))}},onReachBottom:function(){this.get_host_product()}};e.default=d}).call(this,n("543d")["default"])}},[["8ee6","common/runtime","common/vendor"]]]);