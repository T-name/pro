require('./common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/points_mall/integral_goods_list"],{"0f23":function(t,e,i){"use strict";i.r(e);var o=i("3f1b"),s=i("b4ec");for(var r in s)"default"!==r&&function(t){i.d(e,t,(function(){return s[t]}))}(r);i("dd91");var n,c=i("f0c5"),a=Object(c["a"])(s["default"],o["b"],o["c"],!1,null,"1a54904c",null,!1,o["a"],n);e["default"]=a.exports},"246d":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("78a2"),s=i("3995"),r=i("26cb"),n=i("7a16"),c=h(i("a29e")),a=i("5f9b");function h(t){return t&&t.__esModule?t:{default:t}}var d=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("d878"))}.bind(null,i)).catch(i.oe)},u=function(){Promise.all([i.e("common/vendor"),i.e("components/recommend/index")]).then(function(){return resolve(i("6019"))}.bind(null,i)).catch(i.oe)},l={computed:(0,r.mapGetters)(["uid"]),components:{recommend:u,home:d},mixins:[c.default],data:function(){return{productList:[],is_switch:!0,where:{store_name:"",priceOrder:"",salesOrder:"",page:1,limit:20},price:0,stock:0,nows:!1,loadend:!1,loading:!1,loadTitle:"加载更多",title:"",hostProduct:[],hotPage:1,hotLimit:10,hotScroll:!1,imgHost:a.HTTP_REQUEST_URL}},onLoad:function(t){this.where.cid=t.cid||0,this.$set(this.where,"sid",t.sid||0),this.title=t.title||"",this.$set(this.where,"store_name",t.searchValue||""),this.get_product_list(),this.get_host_product()},onShow:function(){t.removeStorageSync("form_type_cart")},methods:{godDetail:function(e){(0,n.goShopDetail)(e,this.uid).then((function(i){t.navigateTo({url:"/pages/points_mall/integral_goods_details?id=".concat(e.id)})}))},Changswitch:function(){var t=this;t.is_switch=!t.is_switch},searchSubmit:function(t){var e=this;e.$set(e.where,"store_name",t.detail.value),e.loadend=!1,e.$set(e.where,"page",1),this.get_product_list(!0)},get_host_product:function(){var t=this;t.hotScroll||(0,o.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))},set_where:function(t){switch(t){case 1:this.where={store_name:"",priceOrder:"",salesOrder:"",page:1,limit:20},this.price=0,this.stock=0;break;case 2:0==this.price?this.price=1:1==this.price?this.price=2:2==this.price&&(this.price=0),this.stock=0;break;case 3:0==this.stock?this.stock=1:1==this.stock?this.stock=2:2==this.stock&&(this.stock=0),this.price=0;break;case 4:this.nows=!this.nows;break}this.loadend=!1,this.$set(this.where,"page",1),this.get_product_list(!0)},setWhere:function(){0==this.price?this.where.priceOrder="":1==this.price?this.where.priceOrder="asc":2==this.price&&(this.where.priceOrder="desc"),0==this.stock?this.where.salesOrder="":1==this.stock?this.where.salesOrder="asc":2==this.stock&&(this.where.salesOrder="desc"),this.where.news=this.nows?1:0},get_product_list:function(t){var e=this;e.setWhere(),e.loadend||e.loading||(!0===t&&e.$set(e,"productList",[]),e.loading=!0,e.loadTitle="",(0,s.getStoreIntegralList)(e.where).then((function(t){var i=t.data,o=e.$util.SplitArray(i,e.productList),s=i.length<e.where.limit;e.loadend=s,e.loading=!1,e.loadTitle=s?"没有更多内容啦~":"加载更多",e.$set(e,"productList",o),e.$set(e.where,"page",e.where.page+1)})).catch((function(t){e.loading=!1,e.loadTitle="加载更多"})))}},onPullDownRefresh:function(){},onReachBottom:function(){this.productList.length>0?this.get_product_list():this.get_host_product()}};e.default=l}).call(this,i("543d")["default"])},"3f1b":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var s=function(){var t=this,e=t.$createElement;t._self._c},r=[]},6648:function(t,e,i){"use strict";(function(t){i("8824");o(i("66fd"));var e=o(i("0f23"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},8435:function(t,e,i){},b4ec:function(t,e,i){"use strict";i.r(e);var o=i("246d"),s=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e["default"]=s.a},dd91:function(t,e,i){"use strict";var o=i("8435"),s=i.n(o);s.a}},[["6648","common/runtime","common/vendor"]]]);