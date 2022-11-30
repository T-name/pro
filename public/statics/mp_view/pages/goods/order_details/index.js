require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/order_details/index"],{"11ca":function(e,t,n){"use strict";n.r(t);var i=n("674d"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},"498d":function(e,t,n){"use strict";var i=n("5934"),o=n.n(i);o.a},5934:function(e,t,n){},"674d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("79c7"),o=n("aed8"),r=n("99c8"),s=(d(n("e338")),n("d5f7")),a=n("26cb"),c=d(n("a29e"));function d(e){return e&&e.__esModule?e:{default:e}}var u=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("d878"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/payment/index").then(function(){return resolve(n("fb96"))}.bind(null,n)).catch(n.oe)},f=function(){Promise.all([n.e("common/vendor"),n.e("components/orderGoods/index")]).then(function(){return resolve(n("7325"))}.bind(null,n)).catch(n.oe)},_=function(){n.e("components/customForm/index").then(function(){return resolve(n("cd04"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("pages/goods/components/invoicePicker/index").then(function(){return resolve(n("74a09"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("pages/goods/components/invoiceModal/index").then(function(){return resolve(n("e879"))}.bind(null,n)).catch(n.oe)},v={components:{payment:l,home:u,invoicePicker:p,invoiceModal:h,orderGoods:f,customForm:_},mixins:[c.default],data:function(){return{giveData:{give_integral:0,give_coupon:[]},giveCartInfo:[],config:{qrc:{code:"",size:300,level:4,bgColor:"#FFFFFF",border:{color:["#eee","#eee"],lineWidth:3},color:["#333","#333"]}},order_id:"",evaluate:0,cartInfo:[],pid:0,split:[],orderInfo:{system_store:{},_status:{}},system_store:{},isGoodsReturn:!1,status:{},refund_close:!1,isClose:!1,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"使用微信快捷支付",payStatus:!0},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"当前可用余额：",number:0,payStatus:!0}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1,routineContact:0,express_num:"",invoice_func:!1,invoiceData:{},invoice_id:0,invChecked:"",moreBtn:!1,invShow:!1,aleartStatus:!1,special_invoice:!1,invList:[],userInfo:{},isReturen:""}},computed:(0,a.mapGetters)(["isLogin"]),onLoad:function(e){e.order_id&&(this.$set(this,"order_id",e.order_id),this.isReturen=e.isReturen),e.invoice_id&&(this.invoice_id=e.invoice_id)},onShow:function(){e.removeStorageSync("form_type_cart"),this.isLogin?(this.getOrderInfo(),this.getUserInfo()):(0,s.toLogin)()},onHide:function(){this.isClose=!0},onReady:function(){},methods:{getpreviewImage:function(t,n){e.previewImage({urls:n?this.orderInfo.refund_img:this.orderInfo.refund_goods_img,current:n?this.orderInfo.refund_img[t]:this.orderInfo.refund_goods_img[t]})},cancelRefundOrder:function(t){var n=this;e.showModal({title:"取消申请",content:"您确认放弃此次申请吗?",success:function(e){e.confirm&&(0,i.cancelRefundOrder)(n.order_id).then((function(e){return n.$util.Tips({title:"操作成功",icon:"success"},{tab:4,url:"/pages/users/user_return_list/index"})})).catch((function(e){return n.$util.Tips({title:e})}))}})},refundInput:function(){e.navigateTo({url:"/pages/goods/order_refund_goods/index?orderId="+this.order_id})},goGoodCall:function(){var e="/pages/extension/customer_list/chat?orderId=".concat(this.order_id,"&isReturen=").concat(this.isReturen);this.$util.getCustomer(this.userInfo,e)},openSubcribe:function(t){var n=t;e.showLoading({title:"正在加载"}),(0,o.openOrderRefundSubscribe)().then((function(t){e.hideLoading(),e.navigateTo({url:n})})).catch((function(){e.hideLoading()}))},onChangeFun:function(e){var t=e,n=t.action||null,i=void 0!=t.value?t.value:null;n&&this[n]&&this[n](i)},makePhone:function(){e.makePhoneCall({phoneNumber:this.system_store.phone})},showMaoLocation:function(){if(!this.system_store.latitude||!this.system_store.longitude)return this.$util.Tips({title:"缺少经纬度信息无法查看地图！"});e.openLocation({latitude:parseFloat(this.system_store.latitude),longitude:parseFloat(this.system_store.longitude),scale:8,name:this.system_store.name,address:this.system_store.address+this.system_store.detailed_address,success:function(){}})},payClose:function(){this.pay_close=!1},pay_open:function(){this.pay_close=!0,this.pay_order_id=this.orderInfo.order_id,this.totalPrice=this.orderInfo.pay_price},pay_complete:function(){this.pay_close=!1,this.pay_order_id="",e.navigateTo({url:"/pages/goods/order_pay_status/index?order_id="+this.orderInfo.order_id+"&msg=支付成功&type=3&totalPrice="+this.totalPrice}),this.getOrderInfo()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},getUserInfo:function(){var e=this;(0,r.getUserInfo)().then((function(t){e.userInfo=t.data,e.payMode[1].number=t.data.now_money,e.$set(e,"payMode",e.payMode)}))},getOrderInfo:function(){var t=this,n=this;e.showLoading({title:"正在加载中"});var o="";o=n.isReturen?(0,i.getRefundOrderDetail)(this.order_id):(0,i.getOrderDetail)(this.order_id),o.then((function(i){var o=i.data._status._type;e.hideLoading(),n.giveData.give_coupon=i.data.give_coupon,n.giveData.give_integral=i.data.give_integral,n.$set(n,"orderInfo",i.data),n.$set(n,"pid",i.data.pid),n.$set(n,"split",i.data.split),n.$set(n,"evaluate",3==o?3:0),n.$set(n,"system_store",i.data.system_store),n.$set(n,"invoiceData",i.data.invoice),n.invoiceData&&(n.invoiceData.pay_price=i.data.pay_price),n.$set(n,"invoice_func",i.data.invoice_func),n.$set(n,"special_invoice",i.data.special_invoice),n.$set(n,"routineContact",Number(i.data.routine_contact_type));var r=i.data.cartInfo,s=[],a=[];r.forEach((function(e){1==e.is_gift?a.push(e):s.push(e)})),n.$set(n,"cartInfo",s),n.$set(n,"giveCartInfo",a),t.$nextTick((function(){n.config.qrc.code=n.orderInfo.verify_code})),0!=t.orderInfo.refund_status?t.isGoodsReturn=!0:t.isReturen=0,n.invoice_id&&!n.invoiceData&&(n.invChecked=n.invoice_id||"",t.invoiceApply()),n.payMode.map((function(e){"weixin"==e.value&&(e.payStatus=!!i.data.pay_weixin_open),"alipay"==e.value&&(e.payStatus=!!i.data.ali_pay_status),"yue"==e.value&&(e.payStatus=1==i.data.yue_pay_status)})),n.getOrderStatus()})).catch((function(t){e.hideLoading(),403==t.status?e.navigateTo({url:"/pages/goods/order_list/index"}):n.$util.Tips({title:t},"/pages/goods/order_list/index")}))},invCancel:function(){this.invChecked="",this.invTitle="不开发票",this.invShow=!1},invSub:function(t){var n=this;this.invChecked=t;var i={order_id:this.order_id,invoice_id:this.invChecked};(0,r.makeUpinvoice)(i).then((function(t){e.showToast({title:"申请成功",icon:"success"}),n.invShow=!1,n.aleartStatus=!0,n.getOrderInfo()})).catch((function(t){e.showToast({title:t,icon:"none"})}))},invClose:function(){this.invShow=!1,this.getInvoiceList()},invoiceApply:function(){this.getInvoiceList(),this.moreBtn=!1,this.invShow=!0},aleartStatusChange:function(){this.moreBtn=!1,this.aleartStatus=!0},getInvoiceList:function(){var t=this;e.showLoading({title:"正在加载…"}),(0,r.invoiceList)().then((function(n){e.hideLoading(),t.invList=n.data.map((function(e){return e.id=e.id.toString(),e}));var i=t.invList.find((function(e){return e.id==t.invChecked}));if(i){var o="";o+=1===i.header_type?"个人":"企业",o+=1===i.type?"普通":"专用",o+="发票",t.invTitle=o}})).catch((function(t){e.showToast({title:t,icon:"none"})}))},more:function(){this.moreBtn=!this.moreBtn},copy:function(){e.setClipboardData({data:this.orderInfo.order_id})},copyKm:function(){e.setClipboardData({data:this.orderInfo.virtual_info})},copyAddress:function(){e.setClipboardData({data:this.orderInfo._status.refund_name+this.orderInfo._status.refund_phone+this.orderInfo._status.refund_address,success:function(){e.Tips({title:"复制成功",icon:"success"})}})},goTel:function(){e.makePhoneCall({phoneNumber:this.orderInfo.delivery_id})},getOrderStatus:function(){var e=this.orderInfo||{},t=e._status||{_type:0},n={},i=parseInt(t._type),o=e.delivery_type,r=e.seckill_id?parseInt(e.seckill_id):0,s=e.bargain_id?parseInt(e.bargain_id):0,a=e.discount_id?parseInt(e.discount_id):0,c=e.combination_id?parseInt(e.combination_id):0;n={type:9==i?-9:i,class_status:0},1==i&&c>0&&(n.class_status=1),2==i&&"express"==o&&(n.class_status=2),2==i&&(n.class_status=3),4!=i&&0!=i||(n.class_status=4),r||s||c||a||e.type||3!=i&&4!=i||(n.class_status=5),this.$set(this,"status",n)},goJoinPink:function(){e.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+this.orderInfo.pink_id})},goOrderConfirm:function(){var t=this;(0,i.orderAgain)(t.orderInfo.order_id).then((function(t){return e.navigateTo({url:"/pages/goods/order_confirm/index?new=1&cartId="+t.data.cateId})}))},confirmOrder:function(t){var n=this;e.showModal({title:"确认收货",content:"为保障权益，请收到货确认无误后，再确认收货",success:function(e){e.confirm&&(0,i.orderTake)(t||n.order_id).then((function(e){return n.$util.Tips({title:"操作成功",icon:"success"},(function(){n.getOrderInfo()}))})).catch((function(e){return n.$util.Tips({title:e})}))}})},delOrder:function(){var t=this;e.showModal({title:"删除订单",content:"确定删除该订单",success:function(e){if(e.confirm)(t.isReturen?i.refundOrderDel:i.orderDel)(t.order_id).then((function(e){return-2==t.status.type?t.$util.Tips({title:"删除成功",icon:"success"},{tab:5,url:"/pages/users/user_return_list/index"}):t.$util.Tips({title:"删除成功",icon:"success"},{tab:5,url:"/pages/goods/order_list/index"})})).catch((function(e){return t.$util.Tips({title:e})}));else if(e.cancel)return t.$util.Tips({title:"已取消"})}})},cancelOrder:function(){var t=this;e.showModal({title:"提示",content:"确认取消该订单?",success:function(n){n.confirm?(0,i.orderCancel)(t.orderInfo.order_id).then((function(t){var n=getCurrentPages(),i=n[n.length-3].$page.fullPath;e.reLaunch({url:i})})).catch((function(){t.getDetail()})):n.cancel}})}}};t.default=v}).call(this,n("543d")["default"])},"7c1b":function(e,t,n){},"8f12":function(e,t,n){"use strict";n.r(t);var i=n("ea7d"),o=n("11ca");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("498d"),n("e7ba");var s,a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"7dd3a4e4",null,!1,i["a"],s);t["default"]=c.exports},e7ba:function(e,t,n){"use strict";var i=n("7c1b"),o=n.n(i);o.a},ea7d:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={wQrcode:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/wmf-code/components/w-qrcode/index")]).then(n.bind(null,"eba6"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,[4,5].includes(e.orderInfo.refund_type)),i=[4,5].includes(e.orderInfo.refund_type),o=Number(e.orderInfo.id),r=Number(e.orderInfo.paid),s=(parseFloat(e.orderInfo.total_price)+parseFloat(e.orderInfo.vip_true_price)).toFixed(2),a=e.orderInfo.pay_postage>0?parseFloat(e.orderInfo.pay_postage).toFixed(2):null,c=e.orderInfo.vip_true_price>0?parseFloat(e.orderInfo.vip_true_price).toFixed(2):null,d=e.orderInfo.coupon_id?parseFloat(e.orderInfo.coupon_price).toFixed(2):null,u=e.orderInfo.use_integral>0?parseFloat(e.orderInfo.deduction_price).toFixed(2):null,l=e.__map(e.orderInfo.promotions_detail,(function(t,n){var i=e.__get_orig(t),o=parseFloat(t.promotions_price),r=o?parseFloat(t.promotions_price).toFixed(2):null;return{$orig:i,m2:o,g7:r}})),f=parseFloat(e.orderInfo.pay_price).toFixed(2),_=0==e.isGoodsReturn||9==e.status.type||e.orderInfo.refund_type||e.orderInfo.is_apply_refund?[1,2,4].includes(e.orderInfo.refund_type)&&!e.orderInfo.is_cancel:null;e._isMounted||(e.e0=function(t){e.refund_close=!1},e.e1=function(t){e.aleartStatus=!1},e.e2=function(t){e.aleartStatus=!1},e.e3=function(t){e.moreBtn=!1}),e.$mp.data=Object.assign({},{$root:{g0:n,g1:i,m0:o,m1:r,g2:s,g3:a,g4:c,g5:d,g6:u,l0:l,g8:f,g9:_}})},r=[]},fc18:function(e,t,n){"use strict";(function(e){n("8824");i(n("66fd"));var t=i(n("8f12"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["fc18","common/runtime","common/vendor"]]]);