require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/short_video/components/goodsList/index"],{"299d":function(t,e,i){},"2a15":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r}));var r={uniPopup:function(){return i.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(i.bind(null,"fc40"))}},s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.goodList,(function(e,i){var r=t.__get_orig(e),s=e.store_name.length>=32?e.store_name.slice(0,32):null;return{$orig:r,g0:s}})));t.$mp.data=Object.assign({},{$root:{l0:i}})},o=[]},"3a6f8":function(t,e,i){"use strict";var r=i("299d"),s=i.n(r);s.a},"927c":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i("26cb"),s=i("5f9b"),o=i("a212"),a=i("78a2"),c=function(){i.e("pages/short_video/components/productWindow/index").then(function(){return resolve(i("0215"))}.bind(null,i)).catch(i.oe)},n={components:{productWindow:c},computed:(0,r.mapGetters)(["cartNum"]),props:{Width:{type:Number,default:0},Height:{type:Number,default:0}},data:function(){return{windowWidth:0,imgHost:s.HTTP_REQUEST_URL,num:1.15,goodList:[],videoID:0,attr:{cartAttr:!1,productAttr:[],productSelect:{}},storeInfo:{},productValue:[],is_vip:0,attrTxt:"请选择",attrValue:"",news:1,id:0,count:0,limit:20,page:1,loadend:!1,deliveryType:1,storeId:0}},created:function(){this.windowWidth=t.getSystemInfoSync().windowWidth,this.videoID=t.getStorageSync("videoID")},mounted:function(){},methods:{goDetails:function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})},closeScrollview:function(){this.$refs.pinglunGoods.close()},goCart:function(t){this.news=0,this.getGoodsDetails(t)},goBuy:function(t){this.news=1,this.getGoodsDetails(t)},goCat:function(){var e=this,i=e.productValue[this.attrValue];if(e.attr.productAttr.length&&void 0===i)return t.showToast({title:"产品库存不足，请选择其它属性",icon:"none",duration:2e3});if(e.attr.productSelect.cart_num<=0)return e.attr.productSelect.cart_num=1,t.showToast({title:"请先选择属性",icon:"none",duration:2e3});var r={productId:e.id,cartNum:e.attr.productSelect.cart_num,new:e.news,uniqueId:void 0!==e.attr.productSelect?e.attr.productSelect.unique:""};(0,a.postCartAdd)(r).then((function(i){if(e.news)t.navigateTo({url:"/pages/goods/order_confirm/index?new=1&cartId="+i.data.cartId+"&delivery_type="+e.deliveryType+"&store_id="+e.storeId});else{var r=parseInt(e.cartNum)+parseInt(e.attr.productSelect.cart_num);e.$store.commit("indexData/setCartNum",r>99?"..":r+""),t.showToast({title:"添加购物车成功",icon:"none",duration:2e3}),e.$refs.pinglunGoods.close()}})).catch((function(e){return t.showToast({title:e,icon:"none",duration:2e3})}))},goIncart:function(){t.switchTab({url:"/pages/order_addcart/order_addcart"})},getGoodsDetails:function(e){var i=this;this.id=e.id,t.showLoading({title:"加载中",mask:!0});var r=this;(0,a.getProductDetail)(e.product_id).then((function(e){t.hideLoading(),i.$refs.pinglunGoods.open("bottom");var s=e.data.storeInfo;r.$set(r,"storeInfo",s),r.$set(r.attr,"cartAttr",!0),r.$set(r.attr,"productAttr",e.data.productAttr),r.$set(r,"productValue",e.data.productValue),r.$set(r,"is_vip",e.data.storeInfo.is_vip);var o=e.data.storeInfo.delivery_type.sort((function(t,e){return t-e}));r.$set(r,"deliveryType",o[0]||1);var a=1==e.data.storeInfo.type?e.data.storeInfo.relation_id:0;r.$set(r,"storeId",a),r.DefaultSelect()})).catch((function(e){t.hideLoading()}))},DefaultSelect:function(){var t=this.attr.productAttr,e=[],i=[];for(var r in this.productValue)if(this.productValue[r].stock>0){e=this.attr.productAttr.length?r.split(","):[];break}i=!e.length&&this.attr.productAttr.length?Object.keys(this.productValue)[0].split(","):e;for(var s=0;s<t.length;s++)this.$set(t[s],"index",i[s]);var o=this.productValue[i.join(",")];o&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",o.image),this.$set(this.attr.productSelect,"price",o.price),this.$set(this.attr.productSelect,"stock",o.stock),this.$set(this.attr.productSelect,"unique",o.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",i.join(",")),this.$set(this.attr.productSelect,"vip_price",o.vip_price),this.$set(this,"attrTxt","已选择")):!o&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")):o||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},ChangeAttr:function(t){var e=this.productValue[t];this.$set(this,"selectSku",e),e&&e.stock>=0?(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"stock",e.stock),this.$set(this.attr.productSelect,"unique",e.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",e.vip_price),this.$set(this,"attrValue",t),this.$set(this,"attrTxt","已选择")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(void 0!==e||this.attr.productAttr.length||(e=this.attr.productSelect),void 0!==e){var i=e.stock||0,r=this.attr.productSelect;t?(r.cart_num++,r.cart_num>i&&(this.$set(this.attr.productSelect,"cart_num",i||1),this.$set(this,"cart_num",i||1))):(r.cart_num--,r.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)))}},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},productList:function(e,i){var r=this;this.videoID=e;var s=e;i&&(this.page=1,this.goodList=[]),(0,o.videoProduct)(s,{limit:this.limit,page:this.page}).then((function(t){var e=t.data.list,i=e.length<r.limit;r.goodList=r.goodList.concat(e),r.loadend=i,r.page=r.page+1,r.count=t.data.count})).catch((function(e){return t.showToast({title:e,icon:"none",duration:2e3})}))},scrolltolower:function(){this.productList(this.videoID)},closeGoods:function(){this.$emit("myevent")}}};e.default=n}).call(this,i("543d")["default"])},b949:function(t,e,i){"use strict";i.r(e);var r=i("927c"),s=i.n(r);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=s.a},e7ab:function(t,e,i){"use strict";i.r(e);var r=i("2a15"),s=i("b949");for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("3a6f8");var a,c=i("f0c5"),n=Object(c["a"])(s["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=n.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/short_video/components/goodsList/index-create-component',
    {
        'pages/short_video/components/goodsList/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e7ab"))
        })
    },
    [['pages/short_video/components/goodsList/index-create-component']]
]);
