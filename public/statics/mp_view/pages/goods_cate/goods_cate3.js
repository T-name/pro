(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_cate/goods_cate3"],{8559:function(t,e,i){"use strict";i.r(e);var r=i("c99e"),a=i.n(r);for(var s in r)"default"!==s&&function(t){i.d(e,t,(function(){return r[t]}))}(s);e["default"]=a.a},b5e3:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},s=[]},c99e:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i("78a2"),a=i("79c7"),s=i("26cb"),c=i("7a16"),n=i("d5f7");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){h(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d=t.getSystemInfoSync().statusBarHeight+"px",l=function(){i.e("components/productWindow/index").then(function(){return resolve(i("82c0"))}.bind(null,i)).catch(i.oe)},p=function(){i.e("components/goodClass/index").then(function(){return resolve(i("6b9a"))}.bind(null,i)).catch(i.oe)},f=function(){i.e("components/cartList/index").then(function(){return resolve(i("ae6c"))}.bind(null,i)).catch(i.oe)},g={computed:u(u({},(0,s.mapState)({cartNum:function(t){return t.indexData.cartNum}})),(0,s.mapGetters)(["isLogin","uid","cartNum"])),components:{productWindow:l,goodClass:p,cartList:f},props:{isFooter:{type:Boolean,default:!1}},data:function(){return{marTop:0,sysHeight:d,categoryList:[],navActive:0,categoryTitle:"",categoryErList:[],tabLeft:0,isWidth:0,tabClick:0,iSlong:!0,tempArr:[],loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:10,cid:0,sid:0,isAuto:!1,isShowAuth:!1,attr:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],attrValue:"",storeName:"",id:0,cartData:{cartList:[],iScart:!1},totalPrice:0,lengthCart:0,is_vip:0,cart_num:0,storeInfo:{}}},mounted:function(){var e=this;e.lengthCart=e.cartData.cartList,t.getSystemInfo({success:function(t){e.isWidth=t.windowWidth/5}})},methods:{updateFun:function(t){t.cartNum&&this.tempArr.forEach((function(e){e.id==t.id&&(e.cart_num=t.cartNum)}))},getMarTop:function(){var e=this,i=this;setTimeout((function(){var r=t.createSelectorQuery().in(e).select(".mp-header");r.boundingClientRect((function(t){i.marTop=t.height})).exec()}),100)},subOrder:function(){var e=this,i=e.cartData.cartList,r=[];if(!i.length)return e.$util.Tips({title:"请选择产品"});i.forEach((function(t){t.attrStatus&&t.status&&r.push(t.id)})),t.navigateTo({url:"/pages/goods/order_confirm/index?cartId="+r.join(",")}),e.cartData.iScart=!1},getTotalPrice:function(){var t=this,e=t.cartData.cartList,i=0;e.forEach((function(e){e.attrStatus&&e.status&&(i=t.$util.$h.Add(i,t.$util.$h.Mul(e.cart_num,e.truePrice)))})),t.$set(t,"totalPrice",i)},ChangeSubDel:function(t){var e=this,i=e.cartData.cartList,r=[];i.forEach((function(t){r.push(t.id)})),(0,a.cartDel)(r.join(",")).then((function(t){e.$set(e.cartData,"cartList",[]),e.cartData.iScart=!1,e.totalPrice=0,e.page=1,e.loadend=!1,e.tempArr=[],e.productslist(),e.getCartNum()}))},ChangeOneDel:function(t,e){var i=this,r=i.cartData.cartList;(0,a.cartDel)(t.toString()).then((function(t){r.splice(e,1),r.length||(i.cartData.iScart=!1,i.page=1,i.loadend=!1,i.tempArr=[],i.productslist()),i.getCartNum()}))},getCartList:function(t){var e=this;(0,a.vcartList)().then((function(i){e.$set(e.cartData,"cartList",i.data),i.data.length?e.$set(e.cartData,"iScart",!t&&!e.cartData.iScart):e.$set(e.cartData,"iScart",!1),e.getTotalPrice()}))},closeList:function(t){this.$set(this.cartData,"iScart",t)},getCartNum:function(){var t=this;(0,a.getCartCounts)().then((function(e){t.$store.commit("indexData/setCartNum",e.data.count>99?"..":e.data.count)}))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1)},DefaultSelect:function(){var t=this.attr.productAttr,e=[];for(var i in this.productValue)if(this.productValue[i].stock>0){e=this.attr.productAttr.length?i.split(","):[];break}for(var r=0;r<t.length;r++)this.$set(t[r],"index",e[r]);var a=this.productValue[e.join(",")];a&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeName),this.$set(this.attr.productSelect,"image",a.image),this.$set(this.attr.productSelect,"price",a.price),this.$set(this.attr.productSelect,"stock",a.stock),this.$set(this.attr.productSelect,"unique",a.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",a.vip_price),this.$set(this,"attrValue",e.join(","))):!a&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeName),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price)):a||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeName),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",""),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price))},ChangeAttr:function(t){var e=this.productValue[t];e&&e.stock>0?(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"stock",e.stock),this.$set(this.attr.productSelect,"unique",e.unique),this.$set(this.attr.productSelect,"vip_price",e.vip_price),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",t)):e&&0==e.stock?(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"vip_price",e.vip_price),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue","")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""))},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},onLoadFun:function(){},productslist:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="",(0,r.getProductslist)({page:t.page,limit:t.limit,type:1,cid:t.cid,sid:t.sid}).then((function(e){var i=e.data,r=i.length<t.limit;t.tempArr=t.$util.SplitArray(i,t.tempArr),t.$set(t,"tempArr",t.tempArr),t.loading=!1,t.loadend=r,t.loadTitle=r?"没有更多内容啦~":"加载更多",t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))},goCartDan:function(t,e){this.isLogin?(this.tempArr[e].cart_num=1,this.$set(this,"tempArr",this.tempArr),this.goCat(0,t.id,1)):this.getIsLogin()},ChangeCartNumDan:function(t,e,i){var r=this.tempArr[e],a=this.tempArr[e].stock;this.ChangeCartNum(t,r,a,0,i.id)},ChangeCartNumDuo:function(t){var e=this.productValue[this.attrValue];if(void 0!==e||this.attr.productAttr.length||(e=this.attr.productSelect),void 0!==e){var i=e.stock||0,r=this.attr.productSelect;this.ChangeCartNum(t,r,i,1,this.id)}},ChangeCartList:function(t,e){var i=this.cartData.cartList,r=i[e],a=i[e].trueStock;this.ChangeCartNum(t,r,a,0,r.product_id,e,1),i.length||(this.cartData.iScart=!1,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist())},ChangeCartNum:function(t,e,i,r,a,s,c){if(t){if(e.cart_num++,e.cart_num>i)return r?(this.$set(this.attr.productSelect,"cart_num",i||1),this.$set(this,"cart_num",i||1)):(e.cart_num=i||0,this.$set(this,"tempArr",this.tempArr),this.$set(this.cartData,"cartList",this.cartData.cartList)),this.$util.Tips({title:"该产品没有更多库存了"});r||(c?(this.goCat(0,a,1,1,e.product_attr_unique),this.getTotalPrice()):this.goCat(0,a,1))}else e.cart_num--,0==e.cart_num&&(this.cartData.cartList.splice(s,1),r&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1))),e.cart_num<0?r?(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)):(e.cart_num=0,this.$set(this,"tempArr",this.tempArr),this.$set(this.cartData,"cartList",this.cartData.cartList)):r||(c?(this.goCat(0,a,0,1,e.product_attr_unique),this.getTotalPrice()):this.goCat(0,a,0));this.tempArr.forEach((function(t){t.id==a&&(t.cart_num=e.cart_num)}))},goCatNum:function(){this.goCat(1,this.id,1)},goCat:function(t,e,i,a,s){var c=this;if(t){var n=c.productValue[this.attrValue];if(c.attr.productAttr.length&&void 0===n)return c.$util.Tips({title:"产品库存不足，请选择其它属性"})}var o={product_id:e,num:t?c.attr.productSelect.cart_num:1,type:i,unique:t?c.attr.productSelect.unique:a?s:""};(0,r.postCartNum)(o).then((function(e){t&&(c.attr.cartAttr=!1,c.$util.Tips({title:"添加购物车成功"}),c.tempArr.forEach((function(t,e){if(t.id==c.id){var i=c.attr.productSelect.stock,r=parseInt(t.cart_num)+parseInt(c.attr.productSelect.cart_num);t.cart_num=r>i?i:r}}))),c.getCartNum(),a||c.getCartList(1)})).catch((function(t){return c.$util.Tips({title:t})}))},goCartDuo:function(e){this.isLogin?(t.showLoading({title:"加载中"}),this.storeName=e.store_name,this.getAttrs(e.id),this.$set(this,"id",e.id),this.$set(this.attr,"cartAttr",!0)):this.getIsLogin()},getIsLogin:function(){(0,n.toLogin)()},getAttrs:function(e){var i=this;(0,r.getAttr)(e,0).then((function(e){t.hideLoading(),i.$set(i.attr,"productAttr",e.data.productAttr),i.$set(i,"productValue",e.data.productValue),i.$set(i,"is_vip",e.data.storeInfo.is_vip),i.$set(i,"storeInfo",e.data.storeInfo),i.DefaultSelect()}))},goDetail:function(e){(0,c.goShopDetail)(e,this.uid).then((function(i){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id,"&fromType=1")})}))},openTap:function(){this.iSlong=!1},closeTap:function(){this.iSlong=!0},getAllCategory:function(){var t=this;(0,r.getCategoryList)().then((function(e){var i=e.data;i.forEach((function(t){t.children.unshift({id:0,cate_name:"全部"})})),t.categoryTitle=i[0].cate_name,t.cid=i[0].id,t.sid=0,t.navActive=0,t.tabClick=0,t.categoryList=i,t.categoryErList=e.data[0].children?e.data[0].children:[],t.page=1,t.loadend=!1,t.tempArr=[],t.productslist()}))},tapNav:function(e,i){t.pageScrollTo({duration:0,scrollTop:0});var r=this.categoryList[e];this.navActive=e,this.categoryTitle=r.cate_name,this.categoryErList=i.children?i.children:[],this.tabClick=0,this.tabLeft=0,this.cid=r.id,this.sid=0,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()},longClick:function(t){this.categoryErList.length>3&&(this.tabLeft=(t-1)*(this.isWidth+6)),this.tabClick=t,this.iSlong=!0,this.sid=this.categoryErList[t].id,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()}},onReachBottom:function(){this.productslist()}};e.default=g}).call(this,i("543d")["default"])},cfe5:function(t,e,i){"use strict";i.r(e);var r=i("b5e3"),a=i("8559");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("db30");var c,n=i("f0c5"),o=Object(n["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);e["default"]=o.exports},da4e:function(t,e,i){},db30:function(t,e,i){"use strict";var r=i("da4e"),a=i.n(r);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/goods_cate/goods_cate3-create-component',
    {
        'pages/goods_cate/goods_cate3-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("cfe5"))
        })
    },
    [['pages/goods_cate/goods_cate3-create-component']]
]);
