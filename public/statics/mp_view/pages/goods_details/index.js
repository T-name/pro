(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_details/index"],{"02d0":function(t,e,o){"use strict";(function(t){o("8824");i(o("66fd"));var e=i(o("abe2"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=o,t(e.default)}).call(this,o("543d")["createPage"])},"04c9":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o("78a2"),n=o("99c8"),s=o("53c2"),r=o("79c7"),c=o("d5f7"),a=o("26cb"),u=o("ace8"),l=(o("2f2d"),p(o("e338")),o("5f9b")),d=o("9357"),h=p(o("a29e"));function p(t){return t&&t.__esModule?t:{default:t}}function f(t){return $(t)||v(t)||m(t)||g()}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t,e){if(t){if("string"===typeof t)return _(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_(t,e):void 0}}function v(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function $(t){if(Array.isArray(t))return _(t)}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,i=new Array(e);o<e;o++)i[o]=t[o];return i}var y=t.getSystemInfoSync().statusBarHeight+"px",C=function(){Promise.all([o.e("common/vendor"),o.e("components/zb-code/zb-code")]).then(function(){return resolve(o("0657"))}.bind(null,o)).catch(o.oe)},S=function(){o.e("components/countDown/index").then(function(){return resolve(o("00a7"))}.bind(null,o)).catch(o.oe)},I=function(){o.e("components/productConSwiper/index").then(function(){return resolve(o("4550"))}.bind(null,o)).catch(o.oe)},b=function(){Promise.all([o.e("common/vendor"),o.e("components/couponListWindow/index")]).then(function(){return resolve(o("717c"))}.bind(null,o)).catch(o.oe)},P=function(){o.e("components/productWindow/index").then(function(){return resolve(o("82c0"))}.bind(null,o)).catch(o.oe)},w=function(){o.e("pages/goods_details/components/ensure/index").then(function(){return resolve(o("6d6b"))}.bind(null,o)).catch(o.oe)},k=function(){o.e("pages/goods_details/components/specs/index").then(function(){return resolve(o("1e47"))}.bind(null,o)).catch(o.oe)},x=function(){o.e("pages/goods_details/components/discount/index").then(function(){return resolve(o("20a1"))}.bind(null,o)).catch(o.oe)},T=function(){Promise.all([o.e("common/vendor"),o.e("components/userEvaluation/index")]).then(function(){return resolve(o("56cf"))}.bind(null,o)).catch(o.oe)},A=function(){o.e("pages/goods_details/components/shareRedPackets/index").then(function(){return resolve(o("1637"))}.bind(null,o)).catch(o.oe)},L=function(){o.e("components/kefuIcon/index").then(function(){return resolve(o("2004"))}.bind(null,o)).catch(o.oe)},D=function(){o.e("pages/goods_details/components/discountsList/index").then(function(){return resolve(o("524d"))}.bind(null,o)).catch(o.oe)},F=function(){o.e("components/cusPreviewImg/index").then(function(){return resolve(o("17d4"))}.bind(null,o)).catch(o.oe)},N=function(){o.e("components/homeList/index").then(function(){return resolve(o("8164"))}.bind(null,o)).catch(o.oe)},H=getApp(),O={components:{zbCode:C,productConSwiper:I,couponListWindow:b,productWindow:P,userEvaluation:T,shareRedPackets:A,kefuIcon:L,discountsList:D,cusPreviewImg:F,ensure:w,specs:k,discount:x,countDown:S,homeList:N},directives:{trigger:{inserted:function(t,e){t.click()}}},mixins:[h.default],data:function(){return{showSkeleton:!0,isNodes:0,coupon:{coupon:!1,type:-1,list:[],count:[]},attrTxt:"请选择",attrValue:"",animated:!1,id:0,replyCount:0,reply:[],storeInfo:{brand_name:""},productValue:[],couponList:[],cart_num:1,isAuto:!1,isShowAuth:!1,isOpen:!1,actionSheetHidden:!0,posterImageStatus:!1,storeImage:"",PromotionCode:"",canvasStatus:!1,posterImage:"",posterbackgd:"/static/images/posterbackgd.png",sharePacket:{isState:!0},uid:0,circular:!1,autoplay:!1,interval:3e3,duration:500,clientHeight:"",good_list:[],replyChance:0,CartCount:0,isDown:!0,storeSelfMention:!0,posters:!1,weixinStatus:!1,ensureInfo:{show:!1,ensure:[],ensureTitle:""},specsInfo:{show:!1,specs:[]},discountInfo:{show:!1,discount:[]},attr:{cartAttr:!1,productAttr:[],productSelect:{}},limitInfo:{discount_price:0,price:0,discount:1,datatime:0},promotions_type:0,description:"",navActive:0,H5ShareBox:!1,activity:[],navH:"",navList:[],opacity:0,scrollY:0,topArr:[],height:0,heightArr:[],lock:!1,scrollTop:0,tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"},returnShow:!0,diff:"",is_money_level:1,is_vip:0,navbarRight:0,homeTop:20,routineContact:0,discountsData:[],siteName:"",themeColor:"",fontColor:"",showAnimate:!0,skuArr:[],codeShow:!1,cid:"1",codeVal:"",size:200,unit:"upx",background:"#FFF",foreground:"#000",pdground:"#000",codeIcon:"",iconsize:40,lv:3,onval:!0,loadMake:!0,base64Show:0,shareQrcode:0,followCode:"",selectSku:{},currentPage:!1,sysHeight:y,isShow:0,imgHost:l.HTTP_REQUEST_URL,fromType:0,cartNum:0,fromPage:"",diyProduct:{price_type:[]}}},computed:(0,a.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){1==t&&(this.getCouponList(),this.getCartCount())},deep:!0},storeInfo:{handler:function(){this.$nextTick((function(){}))},immediate:!0}},onLoad:function(e){var o=this,i=null;try{i=JSON.parse(t.getStorageSync("diyProduct"))}catch(a){}i?this.diyProduct=i:this.getdiyProduct();var n=this,s=getCurrentPages();if(n.returnShow=1!==s.length,n.navH=H.globalData.navHeight,n.id=e.id,n.isShow=e.isShow,n.promotions_type=e.promotions_type||0,n.fromType=e.fromType,n.fromPage=e.fromPage,t.getSystemInfo({success:function(e){n.height=e.windowHeight,n.navbarRight=e.windowWidth-t.getMenuButtonBoundingClientRect().left}}),e.scene){var r=n.$util.getUrlParams(decodeURIComponent(e.scene));r.id&&(e.id=r.id),r.pid&&(H.globalData.spid=r.pid)}if(!e.id)return this.showSkeleton=!1,n.$util.Tips({title:"缺少参数无法查看商品"},{tab:3,url:1});n.id=e.id,n.isLogin&&e.id&&n.downloadFilePromotionCode(),e.pid&&(H.globalData.spid=e.pid),n.getGoodsDetails(),this.colorData();var c=[{themeColor:"#1DB0FC",fontColor:"#FD502F"},{themeColor:"#42CA4D",fontColor:"#FF7600"},{themeColor:"#e93323",fontColor:"#e93323"},{themeColor:"#FF448F",fontColor:"#FF448F"},{themeColor:"#FE5C2D",fontColor:"#FE5C2D"}];setTimeout((function(){switch(o.colorNum){case 1:o.themeColor=c[0].themeColor,o.fontColor=c[0].fontColor;break;case 2:o.themeColor=c[1].themeColor,o.fontColor=c[1].fontColor;break;case 3:o.themeColor=c[2].themeColor,o.fontColor=c[2].fontColor;break;case 4:o.themeColor=c[3].themeColor,o.fontColor=c[3].fontColor;break;case 5:o.themeColor=c[4].themeColor,o.fontColor=c[4].fontColor;break;default:o.themeColor=c[2].themeColor,o.fontColor=c[2].fontColor;break}}),1)},onReady:function(){this.isNodes++,this.$nextTick((function(){var e=this,o=t.getMenuButtonBoundingClientRect(),i=t.createSelectorQuery().in(this);i.select("#home").boundingClientRect((function(t){e.homeTop=2*o.top+o.height-t.height})).exec()}))},onShow:function(){t.removeStorageSync("form_type_cart")},onShareAppMessage:function(){var t=this;return t.$set(t,"actionSheetHidden",!t.actionSheetHidden),(0,n.userShare)(),{title:t.storeInfo.store_name||"",imageUrl:t.storeInfo.image||"",path:"/pages/goods_details/index?id="+t.id+"&pid="+t.uid}},onShareTimeline:function(){var t=this;return t.$set(t,"actionSheetHidden",!t.actionSheetHidden),(0,n.userShare)(),{title:t.storeInfo.store_name||"",imageUrl:t.storeInfo.image||"",path:"/pages/goods_details/index?id="+t.id+"&pid="+t.uid}},methods:{getdiyProduct:function(){var e=this;(0,i.diyProduct)().then((function(o){e.diyProduct=o.data.product_detail,t.setStorageSync("diyProduct",JSON.stringify(o.data.product_detail))}))},seeEnsure:function(){this.ensureInfo.show=!0},seeSpecs:function(){this.specsInfo.show=!0},seeDiscount:function(){this.discountInfo.show=!0},moreNav:function(){this.currentPage=!this.currentPage},showImg:function(t){this.$refs.cusPreviewImg.open(this.selectSku.suk)},changeSwitch:function(t){var e=this,o=this.skuArr[t];this.$set(this,"selectSku",o);var i=o.suk.split(",");i.forEach((function(t,o){e.$set(e.attr.productAttr[o],"index",i[o])})),o&&(this.$set(this.attr.productSelect,"image",o.image),this.$set(this.attr.productSelect,"price",o.price),this.$set(this.attr.productSelect,"stock",o.stock),this.$set(this.attr.productSelect,"unique",o.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",o.vip_price),this.$set(this,"attrValue",o.suk),this.$set(this,"attrTxt","已选择"))},qrR:function(t){},boxStatus:function(t){this.showAnimate=t},followWX:function(){var t=this;(0,i.getProductCode)(this.id).then((function(e){t.followCode=e.data.code,t.getImageBase64(1)})).catch((function(e){t.$util.Tips({title:e})}))},getpreviewImage:function(){if(this.posterImage){var e=[];e.push(this.posterImage),t.previewImage({urls:e,current:this.posterImage})}else this.$util.Tips({title:"您的海报尚未生成"})},videoPause:function(){this.$nextTick((function(){that.infoScroll()}))},closeChange:function(){this.$set(this.sharePacket,"isState",!0)},goActivity:function(e){var o=e;"1"===o.type?t.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(o.id,"&time=").concat(o.time,"&status=1")}):"2"===o.type?t.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(o.id,"&bargain=").concat(this.uid)}):t.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(o.id)})},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},returns:function(){if(!this.isShow){if(this.fromType){var e={id:this.id,cartNum:this.cartNum},o=getCurrentPages(),i=o[o.length-2];return i.$vm.otherFun(e),t.navigateBack()}return t.navigateBack({delta:1})}t.reLaunch({url:"/pages/index/index"})},tap:function(t){var e=this;this.$set(this,"navActive",t),this.$set(this,"lock",!0),this.$set(this,"scrollTop",t>0?e.topArr[t]-H.globalData.navHeight/2:e.topArr[t])},scroll:function(t){var e=this,o=t.detail.scrollTop,i=o/200;i=i>1?1:i;var n=!(o>0);if(e.$set(e,"opacity",i),e.$set(e,"scrollY",o),e.$set(e,"showAnimate",n),e.$set(e,"currentPage",!1),e.lock)e.$set(e,"lock",!1);else for(var s=0;s<e.topArr.length;s++)if(o<e.topArr[s]-H.globalData.navHeight/2+e.heightArr[s]){e.$set(e,"navActive",s);break}},goDetail:function(e){0!=e.activity.length?e.activity&&2==e.activity.type?t.redirectTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(e.activity.id,"&bargain=").concat(this.uid)}):e.activity&&3==e.activity.type?t.redirectTo({url:"/pages/activity/goods_combination_details/index?id=".concat(e.activity.id)}):e.activity&&1==e.activity.type&&t.redirectTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(e.activity.id,"&time=").concat(e.activity.time,"&status=1")}):t.redirectTo({url:"/pages/goods_details/index?id="+e.id})},ChangCouponsClone:function(){this.$set(this.coupon,"coupon",!1)},getUserInfo:function(){var t=this;(0,n.getUserInfo)().then((function(e){t.$set(t.sharePacket,"isState",0==t.sharePacket.priceName),t.$set(t,"uid",e.data.uid),t.$set(t,"is_money_level",e.data.is_money_level)}))},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(void 0!==e||this.attr.productAttr.length||(e=this.attr.productSelect),void 0!==e){var o=e.stock||0,i=this.attr.productSelect;t?(i.cart_num++,i.cart_num>o&&(this.$set(this.attr.productSelect,"cart_num",o||1),this.$set(this,"cart_num",o||1))):(i.cart_num--,i.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)))}},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},ChangeAttr:function(t){var e=this.productValue[t];this.$set(this,"selectSku",e),e&&e.stock>=0?(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"stock",e.stock),this.$set(this.attr.productSelect,"unique",e.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",e.vip_price),this.$set(this,"attrValue",t),this.$set(this,"attrTxt","已选择")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},ChangCoupons:function(t){var e=t,o=this.$util.ArrayRemove(this.couponList,"id",e.id);this.$set(this,"couponList",o),this.getCouponList()},setClientHeight:function(){var e=this;if(e.good_list.length){var o=t.createSelectorQuery().in(this).select("#list0");o.fields({size:!0},(function(t){e.$set(e,"clientHeight",t.height+20),e.$nextTick((function(){e.infoScroll()}))})).exec()}},getGoodsList:function(){var t=this,e=this;(0,i.getProductRecommend)(e.id).then((function(o){for(var i=o.data||[],n=Math.ceil(i.length/6),s=new Array,r=0;r<n;r++){var c=i.slice(6*r,6*r+6);c.length&&s.push({list:c})}e.$set(e,"good_list",s),s.length&&t.diyProduct.is_recommend&&e.navList.splice(-1,0,"推荐"),e.$nextTick((function(){i.length&&e.setClientHeight()}))})).catch((function(e){return t.$util.Tips({title:e})}))},getGoodsCtivity:function(){var t=this,e=this;(0,i.getProductCtivity)(e.id,{promotions_type:this.promotions_type}).then((function(o){e.$set(e,"activity",o.data.activity?o.data.activity:[]),e.$set(e,"couponList",o.data.coupons),e.$set(e,"discountsData",o.data.discounts_products?o.data.discounts_products:[]);var i=o.data.promotions[0];if(e.$set(e,"promotions_type",o.data.promotions.length?i.promotions_type:0),o.data.promotions.length&&1==i.promotions_type){var n=e.$util.$h.Div(i.discount,100),s=e.$util.$h.Mul(n,t.storeInfo.price);e.$set(e.limitInfo,"price",t.storeInfo.price||0),e.$set(e.limitInfo,"datatime",i.stop_time||0),e.$set(e.limitInfo,"discount",n),e.$set(e.limitInfo,"discount_price",s)}e.$set(e.discountInfo,"discount",o.data.promotions),e.$nextTick((function(){e.infoScroll()}))})).catch((function(e){return t.$util.Tips({title:e})}))},getGoodsDetails:function(){var e=this,o=this,n="";n=o.fromPage?i.newcomerDetail:i.getProductDetail,n(o.id,{promotions_type:this.promotions_type}).then((function(i){var n=i.data.storeInfo;o.$set(o,"storeInfo",n),o.$set(o.ensureInfo,"ensure",n.ensure);var s=[];for(var r in n.ensure.forEach((function(t){s.push(t.name)})),o.$set(o.ensureInfo,"ensureTitle",s.join(" · ")),o.$set(o.specsInfo,"specs",n.specs),o.$set(o,"description",n.description),e.description=e.description.replace(/<img/gi,'<img style="max-width:100%;height:auto;float:left;display:block" '),o.$set(o,"reply",i.data.reply),o.$set(o,"replyCount",i.data.replyCount),o.$set(o,"replyChance",i.data.replyChance),o.$set(o.attr,"productAttr",i.data.productAttr),o.$set(o,"productValue",i.data.productValue),i.data.productValue){var c=i.data.productValue[r];o.skuArr.push(c)}o.skuArr.length||(o.skuArr=[{image:e.storeInfo.image,suk:e.storeInfo.store_name,price:e.storeInfo.price}]),e.$set(e,"selectSku",o.skuArr[0]),o.$set(o,"is_vip",i.data.storeInfo.is_vip),o.$set(o.sharePacket,"priceName",i.data.priceName),o.$set(o,"storeSelfMention",i.data.store_self_mention),o.$set(o,"shareQrcode",i.data.share_qrcode),o.$set(o,"routineContact",Number(i.data.routine_contact_type)),t.setNavigationBarTitle({title:n.store_name.substring(0,13)+"..."}),o.$set(o,"diff",o.$util.$h.Sub(n.price,n.vip_price)),o.siteName=i.data.site_name;var a=["商品","详情"];i.data.replyCount&&o.diyProduct.is_reply&&a.splice(1,0,"评价"),o.$set(o,"navList",a),o.isLogin&&o.getUserInfo(),setTimeout((function(){o.infoScroll()}),500),o.downloadFilestoreImage(),o.DefaultSelect(),o.getCartCount(),setTimeout((function(){e.showSkeleton=!1}),200),o.getGoodsList(),o.fromPage||o.getGoodsCtivity()})).catch((function(t){return o.$util.Tips({title:t.toString()},{tab:3,url:1})}))},infoScroll:function(){for(var e=this,o=[],i=[],n=0;n<e.navList.length;n++){var s=t.createSelectorQuery().in(this),r="#past"+n;(this.replyCount&&this.diyProduct.is_reply||e.good_list.length&&e.diyProduct.is_recommend||1!=n)&&(!this.replyCount||!this.diyProduct.is_reply||e.good_list.length&&e.diyProduct.is_recommend||2!=n)&&(this.replyCount&&this.diyProduct.is_reply||!e.good_list.length||!e.diyProduct.is_recommend||2!=n)||(r="#past3"),this.replyCount&&this.diyProduct.is_reply||!e.good_list.length||!e.diyProduct.is_recommend||1!=n||(r="#past2"),s.select(r).boundingClientRect(),s.exec((function(t){var n=t[0].top,s=t[0].height;o.push(n),i.push(s),e.$set(e,"topArr",o),e.$set(e,"heightArr",i)}))}},DefaultSelect:function(){var t=this.attr.productAttr,e=[],o=[];for(var i in this.productValue)if(this.productValue[i].stock>0){e=this.attr.productAttr.length?i.split(","):[];break}o=!e.length&&this.attr.productAttr.length?Object.keys(this.productValue)[0].split(","):e;for(var n=0;n<t.length;n++)this.$set(t[n],"index",o[n]);var s=this.productValue[o.join(",")];s&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",s.image),this.$set(this.attr.productSelect,"price",s.price),this.$set(this.attr.productSelect,"stock",s.stock),this.$set(this.attr.productSelect,"unique",s.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",o.join(",")),this.$set(this.attr.productSelect,"vip_price",s.vip_price),this.$set(this,"attrTxt","已选择")):!s&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")):s||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},getCouponList:function(t){var e=this,o={page:1,limit:20,product_id:e.id};void 0===t&&null===t||(o.type=t),(0,s.getCoupons)(o).then((function(o){if(e.$set(e.coupon,"count",o.data.count),void 0===t||null===t){var i=f(e.coupon.count),n="",s=i.findIndex((function(t){return t})),r=e.coupon.count,c=[],a=0;r.forEach((function(t,e){0===t?a=e:c.push(t)})),n=3==c.length?2:2==c.length?2===a?1:2:r.findIndex((function(t){return t===i[s]})),e.$set(e.coupon,"type",n),e.getCouponList(n)}else e.$set(e.coupon,"list",o.data.list)}))},ChangCouponsUseState:function(t){var e=this;e.coupon.list[t].is_use=!0,e.$set(e.coupon,"list",e.coupon.list),e.$set(e.coupon,"coupon",!1)},setCollect:(0,d.Debounce)((function(){if(!1===this.isLogin)(0,c.toLogin)();else{var t=this;this.storeInfo.userCollect?(0,i.collectDel)(this.storeInfo.id).then((function(e){return t.$set(t.storeInfo,"userCollect",!t.storeInfo.userCollect),t.$util.Tips({title:e.msg})})):(0,i.collectAdd)(this.storeInfo.id).then((function(e){return t.$set(t.storeInfo,"userCollect",!t.storeInfo.userCollect),t.$util.Tips({title:e.msg})}))}})),selecAttr:(0,d.Debounce)((function(){this.currentPage=!1,this.$set(this.attr,"cartAttr",!0),this.$set(this,"isOpen",!0)})),couponTap:function(){var t=this;this.currentPage=!1,!1===t.isLogin?(0,c.toLogin)():(t.getCouponList(),t.$set(t.coupon,"coupon",!0))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1),this.$set(this,"isOpen",!1)},myEnsure:function(){this.$set(this.ensureInfo,"show",!1)},mySpecs:function(){this.$set(this.specsInfo,"show",!1)},myDiscount:function(){this.$set(this.discountInfo,"show",!1)},joinCart:function(t){this.currentPage=!1,!1===this.isLogin?(0,c.toLogin)():this.goCat()},goCat:function(e){var o=this,n=o.productValue[this.attrValue];if(o.attrValue?o.attr.cartAttr=!o.isOpen:o.isOpen?o.attr.cartAttr=!0:o.attr.cartAttr=!o.attr.cartAttr,!0===o.attr.cartAttr&&!1===o.isOpen)return o.isOpen=!0;if(o.attr.productAttr.length&&void 0===n&&!0===o.isOpen)return o.$util.Tips({title:"产品库存不足，请选择其它属性"});if(o.attr.productSelect.cart_num<=0)return o.attr.productSelect.cart_num=1,o.isOpen=!1,o.$util.Tips({title:"请先选择属性"});var s={cartNum:o.attr.productSelect.cart_num,new:void 0===e?0:1,uniqueId:void 0!==o.attr.productSelect?o.attr.productSelect.unique:""};o.fromPage?(s.productId=o.storeInfo.product_id,s.newcomerId=o.id):s.productId=o.id,(0,i.postCartAdd)(s).then((function(i){o.isOpen=!1,o.attr.cartAttr=!1,e?t.navigateTo({url:"/pages/goods/order_confirm/index?new=1&cartId="+i.data.cartId}):o.$util.Tips({title:"添加购物车成功",success:function(){o.cartNum=i.data.cartNum,o.getCartCount(!0)}})})).catch((function(t){return o.isOpen=!1,o.$util.Tips({title:t})}))},getCartCount:function(t){var e=this,o=this,i=o.isLogin;i&&(0,r.getCartCounts)().then((function(i){o.CartCount=i.data.count,e.$store.commit("indexData/setCartNum",o.CartCount>99?"...":o.CartCount+""),t&&(o.animated=!0,setTimeout((function(){o.animated=!1}),500))}))},goBuy:function(t){this.currentPage=!1,!1===this.isLogin?(0,c.toLogin)():this.goCat(!0)},authColse:function(t){this.isShowAuth=t},listenerActionSheet:function(){this.currentPage=!1,!1===this.isLogin?(0,c.toLogin)():(this.posters=!0,this.goPoster())},listenerActionClose:function(){this.posters=!1},posterImageClose:function(){this.posterImageStatus=!1,this.posters=!1},setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},downloadFilestoreImage:function(){var e=this;t.downloadFile({url:e.setDomain(e.storeInfo.image),success:function(t){e.storeImage=t.tempFilePath,e.base64Show=1},fail:function(){return e.$util.Tips({title:""})}})},downloadFilePromotionCode:function(e){var o=this;(0,i.getProductCode)(o.id).then((function(i){t.downloadFile({url:o.setDomain(i.data.code),success:function(t){o.$set(o,"isDown",!1),"function"==typeof e?e&&e(t.tempFilePath):o.$set(o,"PromotionCode",t.tempFilePath)},fail:function(){o.$set(o,"isDown",!1),o.$set(o,"PromotionCode","")}})})).catch((function(t){o.$set(o,"isDown",!1),o.$set(o,"PromotionCode","")}))},getImageBase64:function(t){var e=this;(0,u.imageBase64)(e.storeImage,e.followCode).then((function(o){e.storeImage=o.data.image,t&&(e.PromotionCode=o.data.code),e.base64Show=1})).catch((function(){}))},goPoster:function(){var e=this;e.$set(e,"canvasStatus",!0);var o=[e.posterbackgd,e.storeImage,e.PromotionCode];return""!=e.PromotionCode||e.isDown?e.isDown?e.$util.Tips({title:"正在下载海报,请稍后再试！"},(function(){e.posters=!1})):void t.getImageInfo({src:e.PromotionCode,fail:function(t){return e.$util.Tips({title:"小程序二维码需要发布正式版后才能获取到"})},success:function(){""==o[2]?e.downloadFilePromotionCode((function(t){if(o[2]=t,""==o[2])return e.$util.Tips({title:"海报二维码生成失败！"});e.$nextTick((function(){e.$util.PosterCanvas(e.fontColor,e.themeColor,e.siteName,o,e.storeInfo.store_name,e.storeInfo.price,e.storeInfo.ot_price,(function(t){e.$set(e,"posterImage",t),e.$set(e,"posterImageStatus",!0),e.$set(e,"canvasStatus",!1),e.$set(e,"actionSheetHidden",!e.actionSheetHidden)}))}))})):e.$nextTick((function(){e.$util.PosterCanvas(e.fontColor,e.themeColor,e.siteName,o,e.storeInfo.store_name,e.storeInfo.price,e.storeInfo.ot_price,(function(t){e.$set(e,"posterImage",t),e.$set(e,"posterImageStatus",!0),e.$set(e,"canvasStatus",!1),e.$set(e,"actionSheetHidden",!e.actionSheetHidden)}))}))}}):e.$util.Tips({title:"小程序二维码需要发布正式版后才能获取到"},(function(){e.posters=!1}))},copyCommand:function(){wx.navigateToMiniProgram&&wx.navigateToMiniProgram({appId:"wxb036cafe2994d7d0",path:"/publish/ugc-publish/ugc-publish",extraData:{productInfo:{title:this.storeInfo.store_name,path:"/pages/goods_details/index?id="+this.storeInfo.id,thumbUrl:this.storeInfo.image}}})},savePosterPath:function(){var e=this;t.getSetting({success:function(o){o.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}}):t.authorize({scope:"scope.writePhotosAlbum",success:function(){t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}})}})}})},tabCouponType:function(t){this.$set(this.coupon,"type",t),this.getCouponList(t)},goDiscounts:function(){t.navigateTo({url:"/pages/goods_details/discountsGoodsList?id="+this.id})}}};e.default=O}).call(this,o("543d")["default"])},4951:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return s})),o.d(e,"a",(function(){return i}));var i={jyfParser:function(){return Promise.all([o.e("common/vendor"),o.e("components/jyf-parser/jyf-parser")]).then(o.bind(null,"217b"))}},n=function(){var t=this,e=t.$createElement,o=(t._self._c,1==t.promotions_type?t.limitInfo.discount_price.toString().split("."):null),i=1==t.promotions_type?t.limitInfo.discount_price.toString().split("."):null,n=1==t.promotions_type&&i.length>1?t.limitInfo.discount_price.toString().split("."):null,s=1!=t.promotions_type?t.storeInfo.vip_price&&t.storeInfo.vip_price>0&&1==t.storeInfo.is_vip&&-1!=t.diyProduct.price_type.indexOf("1"):null,r=1!=t.promotions_type?t.storeInfo.vip_price&&t.storeInfo.vip_price>0&&1==t.storeInfo.is_vip&&-1!=t.diyProduct.price_type.indexOf("1"):null,c=1!=t.promotions_type?t.storeInfo.level_name&&-1!=t.diyProduct.price_type.indexOf("2"):null,a=t.diyProduct.is_name?t.storeInfo.brand_name&&t.storeInfo.brand_name.trim()&&t.diyProduct.is_brand:null,u=t.couponList.length&&t.diyProduct.is_coupon?t.__map(t.couponList,(function(e,o){var i=t.__get_orig(e),n=o<2&&2==e.coupon_type?parseFloat(e.coupon_price):null;return{$orig:i,m0:n}})):null,l=t.attr.productAttr.length&&t.diyProduct.is_sku&&t.skuArr.length>1&&2==t.diyProduct.sku_style?t.skuArr.slice(0,4):null,d=parseFloat(t.CartCount),h=parseInt(t.id);t._isMounted||(t.e0=function(e){t.H5ShareBox=!1}),t.$mp.data=Object.assign({},{$root:{g0:o,g1:i,g2:n,g3:s,g4:r,g5:c,g6:a,l0:u,l1:l,m1:d,m2:h}})},s=[]},ab03:function(t,e,o){},abe2:function(t,e,o){"use strict";o.r(e);var i=o("4951"),n=o("e669");for(var s in n)"default"!==s&&function(t){o.d(e,t,(function(){return n[t]}))}(s);o("d1c5");var r,c=o("f0c5"),a=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=a.exports},d1c5:function(t,e,o){"use strict";var i=o("ab03"),n=o.n(i);n.a},e669:function(t,e,o){"use strict";o.r(e);var i=o("04c9"),n=o.n(i);for(var s in i)"default"!==s&&function(t){o.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a}},[["02d0","common/runtime","common/vendor"]]]);