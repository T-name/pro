(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_combination_details/index"],{"43f6":function(t,e,o){},5719:function(t,e,o){"use strict";var i=o("43f6"),r=o.n(i);r.a},7507:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return i}));var i={jyfParser:function(){return Promise.all([o.e("common/vendor"),o.e("components/jyf-parser/jyf-parser")]).then(o.bind(null,"217b"))}},r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.storeInfo.brand_name&&t.storeInfo.brand_name.trim()),i=t.attribute.productAttr.length&&t.skuArr.length>1?t.skuArr.slice(0,4):null;t._isMounted||(t.e0=function(e){t.H5ShareBox=!1}),t.$mp.data=Object.assign({},{$root:{g0:o,l0:i}})},n=[]},"7bda":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o("26cb"),r=o("d5f7"),n=o("3995"),s=o("78a2"),a=o("ace8"),u=(o("99c8"),o("5f9b")),c=h(o("a29e")),l=o("9357");function h(t){return t&&t.__esModule?t:{default:t}}var d=getApp(),p=t.getSystemInfoSync().statusBarHeight+"px",f=function(){Promise.all([o.e("common/vendor"),o.e("components/zb-code/zb-code")]).then(function(){return resolve(o("0657"))}.bind(null,o)).catch(o.oe)},m=function(){o.e("components/productConSwiper/index").then(function(){return resolve(o("4550"))}.bind(null,o)).catch(o.oe)},g=function(){Promise.all([o.e("common/vendor"),o.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(o("217b"))}.bind(null,o)).catch(o.oe)},b=function(){o.e("components/productWindow/index").then(function(){return resolve(o("82c0"))}.bind(null,o)).catch(o.oe)},S=function(){Promise.all([o.e("common/vendor"),o.e("components/userEvaluation/index")]).then(function(){return resolve(o("56cf"))}.bind(null,o)).catch(o.oe)},v=function(){o.e("components/countDown/index").then(function(){return resolve(o("00a7"))}.bind(null,o)).catch(o.oe)},$=function(){o.e("components/kefuIcon/index").then(function(){return resolve(o("2004"))}.bind(null,o)).catch(o.oe)},_=function(){o.e("components/cusPreviewImg/index").then(function(){return resolve(o("17d4"))}.bind(null,o)).catch(o.oe)},I=function(){o.e("components/homeList/index").then(function(){return resolve(o("8164"))}.bind(null,o)).catch(o.oe)},C={components:{zbCode:f,productConSwiper:m,kefuIcon:$,"jyf-parser":g,"product-window":b,userEvaluation:S,countDown:v,cusPreviewImg:_,homeList:I},computed:(0,i.mapGetters)({isLogin:"isLogin",userData:"userInfo"}),mixins:[c.default],data:function(){return{showSkeleton:!0,isNodes:0,dataShow:0,navH:"",id:0,userInfo:{},itemNew:[],indicatorDots:!1,circular:!0,autoplay:!0,interval:3e3,duration:500,attribute:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],isOpen:!1,attr:"请选择",attrValue:"",AllIndex:2,maxAllIndex:0,replyChance:"",limitNum:1,timeer:null,iSplus:!1,navList:["商品","评价","详情"],opacity:0,scrollY:0,topArr:[],toView:"",height:0,heightArr:[],lock:!1,scrollTop:0,storeInfo:{brand_name:""},pink_ok_sum:0,pink:[],replyCount:0,reply:[],imgUrls:[],sharePacket:"",tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"},posters:!1,weixinStatus:!1,posterImageStatus:!1,canvasStatus:!1,storeImage:"",PromotionCode:"",posterImage:"",posterbackgd:"/static/images/posterbackgd.png",navActive:0,actionSheetHidden:!1,attrTxt:"",cart_num:"",isAuto:!1,isShowAuth:!1,AllIndexDefault:0,homeTop:20,returnShow:!0,H5ShareBox:!1,routineContact:0,siteName:"",themeColor:"",fontColor:"",skuArr:[],codeShow:!1,cid:"1",codeVal:"",size:200,unit:"upx",background:"#FFF",foreground:"#000",pdground:"#000",codeIcon:"",iconsize:40,lv:3,onval:!0,loadMake:!0,base64Show:0,shareQrcode:0,followCode:"",selectSku:{},currentPage:!1,sysHeight:p,imgHost:u.HTTP_REQUEST_URL}},watch:{isLogin:{handler:function(t,e){t&&this.combinationDetail()},deep:!0}},onLoad:function(e){var o=this,i=this,n=getCurrentPages();if(i.returnShow=1!==n.length,this.$nextTick((function(){var e=t.getMenuButtonBoundingClientRect(),i=t.createSelectorQuery().in(o);i.select("#home").boundingClientRect((function(t){o.homeTop=2*e.top+e.height-t.height})).exec()})),this.navH=d.globalData.navHeight,t.getSystemInfo({success:function(t){i.height=t.windowHeight}}),e.scene){var s=this.$util.getUrlParams(decodeURIComponent(e.scene));s.id&&(e.id=s.id),s.pid&&(d.globalData.spid=s.pid)}if(!e.id&&!e.scene)return this.$util.Tips({title:"缺少参数无法查看商品"},{tab:3,url:1});if(e.hasOwnProperty("id"))this.id=e.id,e.pid&&(d.globalData.spid=e.pid),this.isLogin&&e.id?(i.downloadFilePromotionCode(),this.combinationDetail()):(this.$Cache.set("login_back_url","/pages/activity/goods_combination_details/index?id=".concat(e.id)),(0,r.toLogin)());else try{var a=t.getStorageSync("comGoodsId");""!=a&&(this.id=a,this.combinationDetail())}catch(c){t.showToast({title:"参数错误",icon:"none",duration:1e3,mask:!0})}this.colorData();var u=[{themeColor:"#1DB0FC",fontColor:"#FD502F"},{themeColor:"#42CA4D",fontColor:"#FF7600"},{themeColor:"#e93323",fontColor:"#e93323"},{themeColor:"#FF448F",fontColor:"#FF448F"},{themeColor:"#FE5C2D",fontColor:"#FE5C2D"}];setTimeout((function(){switch(o.colorNum){case 1:o.themeColor=u[0].themeColor,o.fontColor=u[0].fontColor;break;case 2:o.themeColor=u[1].themeColor,o.fontColor=u[1].fontColor;break;case 3:o.themeColor=u[2].themeColor,o.fontColor=u[2].fontColor;break;case 4:o.themeColor=u[3].themeColor,o.fontColor=u[3].fontColor;break;case 5:o.themeColor=u[4].themeColor,o.fontColor=u[4].fontColor;break;default:o.themeColor=u[2].themeColor,o.fontColor=u[2].fontColor;break}}),1)},onReady:function(){this.isNodes++},onShow:function(){t.removeStorageSync("form_type_cart")},methods:{moreNav:function(){this.currentPage=!this.currentPage},showImg:function(t){this.$refs.cusPreviewImg.open(this.selectSku.suk)},changeSwitch:function(t){var e=this,o=this.skuArr[t];this.$set(this,"selectSku",o);var i=o.suk.split(",");i.forEach((function(t,o){e.$set(e.attribute.productAttr[o],"index",i[o])})),o&&(this.$set(this.attribute.productSelect,"image",o.image),this.$set(this.attribute.productSelect,"price",o.price),this.$set(this.attribute.productSelect,"stock",o.stock),this.$set(this.attribute.productSelect,"unique",o.unique),this.$set(this.attribute.productSelect,"cart_num",1),this.$set(this.attribute.productSelect,"quota",o.quota),this.$set(this.attribute.productSelect,"quota_show",o.quota_show),this.$set(this,"attrValue",o.suk),this.attrTxt="已选择")},qrR:function(t){},getpreviewImage:function(){if(this.posterImage){var e=[];e.push(this.posterImage),t.previewImage({urls:e,current:this.posterImage})}else his.$util.Tips({title:"您的海报尚未生成"})},showAll:function(){this.AllIndexDefault=this.AllIndex,this.AllIndex=this.pink.length},hideAll:function(){this.AllIndex=this.AllIndexDefault},authColse:function(t){this.isShowAuth=t},iptCartNum:function(t){this.$set(this.attribute.productSelect,"cart_num",t),this.$set(this,"cart_num",t)},returns:function(){return t.navigateBack({delta:1})},combinationDetail:function(){var e=this,o=e.id;(0,n.getCombinationDetail)(o).then((function(o){for(var i in e.dataShow=1,t.setNavigationBarTitle({title:o.data.storeInfo.title.substring(0,16)}),e.imgUrls=o.data.storeInfo.images,e.storeInfo=o.data.storeInfo,e.storeInfo.description=e.storeInfo.description.replace(/<img/gi,'<img style="max-width:100%;height:auto;float:left;display:block" '),e.attribute.productSelect.num=o.data.storeInfo.num,e.pink=o.data.pink,e.pindAll=o.data.pindAll,e.reply=o.data.reply?[o.data.reply]:[],e.replyCount=o.data.replyCount,e.itemNew=o.data.pink_ok_list,e.pink_ok_sum=o.data.pink_ok_sum,e.replyChance=o.data.replyChance,e.attribute.productAttr=o.data.productAttr,e.productValue=o.data.productValue,e.shareQrcode=o.data.share_qrcode,o.data.productValue){var r=o.data.productValue[i];e.skuArr.push(r)}e.selectSku=e.skuArr[0],e.routineContact=Number(o.data.routine_contact_type),e.siteName=o.data.site_name;var n=["商品","详情"];o.data.replyCount&&n.splice(1,0,"评价"),e.$set(e,"navList",n),e.downloadFilestoreImage(),e.DefaultSelect(),setTimeout((function(){e.infoScroll()}),500),setTimeout((function(){e.showSkeleton=!1}),300)})).catch((function(t){e.$util.Tips({title:t},{tab:3})}))},DefaultSelect:function(){var t=this,e=t.attribute.productAttr,o=[];for(var i in this.productValue)if(this.productValue[i].quota>0){o=this.attribute.productAttr.length?i.split(","):[];break}for(var r=0;r<e.length;r++)this.$set(e[r],"index",o[r]);var n=t.productValue[o.join(",")];n&&e.length?(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",n.image),t.$set(t.attribute.productSelect,"price",n.price),t.$set(t.attribute.productSelect,"stock",n.stock),t.$set(t.attribute.productSelect,"unique",n.unique),t.$set(t.attribute.productSelect,"quota",n.quota),t.$set(t.attribute.productSelect,"quota_show",n.quota_show),t.$set(t.attribute.productSelect,"product_stock",n.product_stock),t.$set(t.attribute.productSelect,"cart_num",1),t.$set(t,"attrValue",o.join(",")),t.attrValue=o.join(",")):!n&&e.length?(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",t.storeInfo.image),t.$set(t.attribute.productSelect,"price",t.storeInfo.price),t.$set(t.attribute.productSelect,"quota",0),t.$set(t.attribute.productSelect,"quota_show",0),t.$set(t.attribute.productSelect,"product_stock",0),t.$set(t.attribute.productSelect,"stock",0),t.$set(t.attribute.productSelect,"unique",""),t.$set(t.attribute.productSelect,"cart_num",0),t.$set(t,"attrValue",""),t.$set(t,"attrTxt","请选择")):n||e.length||(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",t.storeInfo.image),t.$set(t.attribute.productSelect,"price",t.storeInfo.price),t.$set(t.attribute.productSelect,"stock",t.storeInfo.stock),t.$set(t.attribute.productSelect,"quota",0),t.$set(t.attribute.productSelect,"product_stock",0),t.$set(t.attribute.productSelect,"unique",t.storeInfo.unique||""),t.$set(t.attribute.productSelect,"cart_num",1),t.$set(t,"attrValue",""),t.$set(t,"attrTxt","请选择"))},infoScroll:function(){for(var e=this,o=[],i=[],r=0;r<e.navList.length;r++){var n=t.createSelectorQuery().in(this),s="#past"+r;this.replyCount||1!=r||(s="#past2"),n.select(s).boundingClientRect(),n.exec((function(t){var r=t[0].top,n=t[0].height;o.push(r),i.push(n),e.topArr=o,e.heightArr=i}))}},selecAttr:function(){this.currentPage=!1,this.attribute.cartAttr=!0},onMyEvent:function(){this.$set(this.attribute,"cartAttr",!1),this.$set(this,"isOpen",!1)},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(this.cart_num&&(e.cart_num=this.cart_num,this.attribute.productSelect.cart_num=this.cart_num),void 0!==e||this.attribute.productAttr.length||(e=this.attribute.productSelect),void 0!==e){e.stock,e.quota_show;var o=e.quota||0,i=e.product_stock||0,r=this.attribute.productSelect,n=this.storeInfo.num||0;if(void 0==e.cart_num&&(e.cart_num=1),t){r.cart_num++;var s=[];s.push(n),s.push(o),s.push(i);var a=Math.min.apply(null,s);r.cart_num>=a&&(this.$set(this.attribute.productSelect,"cart_num",a||1),this.$set(this,"cart_num",a||1)),this.$set(this,"cart_num",r.cart_num),this.$set(this.attribute.productSelect,"cart_num",r.cart_num)}else r.cart_num--,r.cart_num<1&&(this.$set(this.attribute.productSelect,"cart_num",1),this.$set(this,"cart_num",1)),this.$set(this,"cart_num",r.cart_num),this.$set(this.attribute.productSelect,"cart_num",r.cart_num)}},attrVal:function(t){this.attribute.productAttr[t.indexw].index=this.attribute.productAttr[t.indexw].attr_values[t.indexn]},ChangeAttr:function(t){this.$set(this,"cart_num",1);var e=this.productValue[t];this.$set(this,"selectSku",e),e?(this.$set(this.attribute.productSelect,"image",e.image),this.$set(this.attribute.productSelect,"price",e.price),this.$set(this.attribute.productSelect,"stock",e.stock),this.$set(this.attribute.productSelect,"unique",e.unique),this.$set(this.attribute.productSelect,"cart_num",1),this.$set(this.attribute.productSelect,"quota",e.quota),this.$set(this.attribute.productSelect,"quota_show",e.quota_show),this.$set(this,"attrValue",t),this.attrTxt="已选择"):(this.$set(this.attribute.productSelect,"image",this.storeInfo.image),this.$set(this.attribute.productSelect,"price",this.storeInfo.price),this.$set(this.attribute.productSelect,"stock",0),this.$set(this.attribute.productSelect,"unique",""),this.$set(this.attribute.productSelect,"cart_num",0),this.$set(this.attribute.productSelect,"quota",0),this.$set(this.attribute.productSelect,"quota_show",0),this.$set(this,"attrValue",""),this.attrTxt="已选择")},goProduct:(0,l.Debounce)((function(){t.navigateTo({url:"/pages/goods_details/index?id="+this.storeInfo.product_id})})),goCat:function(){var e=this;e.currentPage=!1;var o=this.productValue[this.attrValue];if(this.isOpen?this.attribute.cartAttr=!0:this.attribute.cartAttr=!this.attribute.cartAttr,!0===this.attribute.cartAttr&&0==this.isOpen)return this.isOpen=!0;if(this.attribute.productAttr.length&&void 0===o&&1==this.isOpen)return e.$util.Tips({title:"请选择属性"});var i={productId:e.storeInfo.product_id,secKillId:0,bargainId:0,combinationId:e.id,cartNum:e.cart_num,uniqueId:void 0!==o?o.unique:"",is_new:1};(0,s.postCartAdd)(i).then((function(o){e.isOpen=!1,t.navigateTo({url:"/pages/goods/order_confirm/index?new=1&cartId="+o.data.cartId})})).catch((function(e){t.showToast({title:e,icon:"none"})}))},setCollect:(0,l.Debounce)((function(){var t=this;this.storeInfo.userCollect?(0,s.collectDel)(this.storeInfo.product_id).then((function(e){t.storeInfo.userCollect=!t.storeInfo.userCollect})):(0,s.collectAdd)(this.storeInfo.product_id).then((function(e){t.storeInfo.userCollect=!t.storeInfo.userCollect}))})),listenerActionSheet:function(){this.currentPage=!1,0==this.isLogin?(0,r.toLogin)():(this.posters=!0,this.goPoster())},posterImageClose:function(){this.posterImageStatus=!1,this.posters=!1},setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},downloadFilestoreImage:function(){var e=this;t.downloadFile({url:e.setDomain(e.storeInfo.image),success:function(t){e.storeImage=t.tempFilePath,e.base64Show=1},fail:function(){return e.$util.Tips({title:""})}})},downloadFilePromotionCode:function(e){var o=this;(0,n.scombinationCode)(o.id).then((function(i){t.downloadFile({url:o.setDomain(i.data.code),success:function(t){o.$set(o,"isDown",!1),"function"==typeof e?e&&e(t.tempFilePath):o.$set(o,"PromotionCode",t.tempFilePath)},fail:function(){o.$set(o,"isDown",!1),o.$set(o,"PromotionCode","")}})})).catch((function(t){o.$set(o,"isDown",!1),o.$set(o,"PromotionCode","")}))},getImageBase64:function(t){var e=this;(0,a.imageBase64)(e.storeImage,e.followCode).then((function(o){e.storeImage=o.data.image,t&&(e.PromotionCode=o.data.code),e.base64Show=1})).catch((function(){}))},goPoster:function(){var e=this;e.$set(e,"canvasStatus",!0);var o=[e.posterbackgd,e.storeImage,e.PromotionCode];return""!=e.PromotionCode||e.isDown?e.isDown?e.$util.Tips({title:"正在下载海报,请稍后再试！"},(function(){e.posters=!1})):void t.getImageInfo({src:e.PromotionCode,fail:function(t){return e.$util.Tips({title:"小程序二维码需要发布正式版后才能获取到"})},success:function(){""==o[2]?e.downloadFilePromotionCode((function(t){if(o[2]=t,""==o[2])return e.$util.Tips({title:"海报二维码生成失败！"});e.$nextTick((function(){e.$util.PosterCanvas(e.fontColor,e.themeColor,e.siteName,o,e.storeInfo.title,e.storeInfo.price,e.storeInfo.product_price,(function(t){e.$set(e,"posterImage",t),e.$set(e,"posterImageStatus",!0),e.$set(e,"canvasStatus",!1),e.$set(e,"actionSheetHidden",!e.actionSheetHidden)}))}))})):e.$nextTick((function(){e.$util.PosterCanvas(e.fontColor,e.themeColor,e.siteName,o,e.storeInfo.title,e.storeInfo.price,e.storeInfo.product_price,(function(t){e.$set(e,"posterImage",t),e.$set(e,"posterImageStatus",!0),e.$set(e,"canvasStatus",!1),e.$set(e,"actionSheetHidden",!e.actionSheetHidden)}))}))}}):e.$util.Tips({title:"小程序二维码需要发布正式版后才能获取到"},(function(){e.posters=!1}))},savePosterPath:function(){var e=this;t.getSetting({success:function(o){o.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}}):t.authorize({scope:"scope.writePhotosAlbum",success:function(){t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}})}})}})},scroll:function(t){var e=this,o=t.detail.scrollTop,i=o/200;if(i=i>1?1:i,e.opacity=i,e.scrollY=o,e.currentPage=!1,e.lock)e.lock=!1;else for(var r=0;r<e.topArr.length;r++)if(o<e.topArr[r]-d.globalData.navHeight/2+e.heightArr[r]){e.navActive=r;break}},tap:function(t,e){var o=t.id,i=(e=e,this);this.replyCount||"past1"!=o||(o="past2"),this.toView=o,this.navActive=e,this.lock=!0,this.scrollTop=e>0?i.topArr[e]-d.globalData.navHeight/2:i.topArr[e]}},onShareAppMessage:function(){return{title:this.storeInfo.title,path:d.globalData.openPages,imageUrl:this.storeInfo.image}},onShareTimeline:function(){return{title:this.storeInfo.title,path:d.globalData.openPages,imageUrl:this.storeInfo.image}}};e.default=C}).call(this,o("543d")["default"])},a08d:function(t,e,o){"use strict";o.r(e);var i=o("7507"),r=o("d6b3");for(var n in r)"default"!==n&&function(t){o.d(e,t,(function(){return r[t]}))}(n);o("5719");var s,a=o("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=u.exports},cb3d:function(t,e,o){"use strict";(function(t){o("8824");i(o("66fd"));var e=i(o("a08d"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=o,t(e.default)}).call(this,o("543d")["createPage"])},d6b3:function(t,e,o){"use strict";o.r(e);var i=o("7bda"),r=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a}},[["cb3d","common/runtime","common/vendor"]]]);