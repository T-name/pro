(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_seckill/index"],{"0e1d":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},3235:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("3995"),a=c(i("a29e")),o=i("5f9b");function c(t){return t&&t.__esModule?t:{default:t}}var l=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("d878"))}.bind(null,i)).catch(i.oe)},s={components:{home:l},mixins:[a.default],data:function(){return{topImage:"",seckillList:[],timeList:[],active:5,scrollLeft:0,interval:0,status:1,countDownHour:"00",countDownMinute:"00",countDownSecond:"00",page:1,limit:8,loading:!1,loadend:!1,pageloading:!1,intoindex:"",imgHost:o.HTTP_REQUEST_URL}},onLoad:function(){this.getSeckillConfig()},onShow:function(){t.removeStorageSync("form_type_cart")},methods:{getSeckillConfig:function(){var t=this;(0,n.getSeckillIndexTime)().then((function(e){t.topImage=e.data.lovely,t.timeList=e.data.seckillTime,t.active=e.data.seckillTimeIndex,t.$nextTick((function(){t.intoindex="sort"+e.data.seckillTimeIndex})),t.timeList.length&&(t.scrollLeft=100*(t.active-1.37),setTimeout((function(){t.loading=!0}),2e3),t.seckillList=[],t.page=1,t.status=t.timeList[t.active].status,t.getSeckillList())}))},getSeckillList:function(){var t=this,e={page:t.page,limit:t.limit};t.loadend||t.pageloading||(this.pageloading=!0,(0,n.getSeckillList)(t.timeList[t.active].id,e).then((function(e){var i=e.data,n=i.length<t.limit;t.page++,t.seckillList=t.seckillList.concat(i),t.page=t.page,t.pageloading=!1,t.loadend=n})).catch((function(e){t.pageloading=!1})))},settimeList:function(t,e){var i=this;this.active=e,i.interval&&(clearInterval(i.interval),i.interval=null),i.interval=0,i.countDownHour="00",i.countDownMinute="00",i.countDownSecond="00",i.status=i.timeList[i.active].status,i.loadend=!1,i.page=1,i.seckillList=[],i.getSeckillList()},goDetails:function(e){t.navigateTo({url:"/pages/activity/goods_seckill_details/index?id="+e.id+"&time="+this.timeList[this.active].stop+"&status="+this.status})}},onReachBottom:function(){this.getSeckillList()}};e.default=s}).call(this,i("543d")["default"])},8237:function(t,e,i){"use strict";var n=i("b9c3"),a=i.n(n);a.a},"9bb6":function(t,e,i){"use strict";i.r(e);var n=i("3235"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},a3dd:function(t,e,i){"use strict";i.r(e);var n=i("0e1d"),a=i("9bb6");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("8237");var c,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=s.exports},b9c3:function(t,e,i){},cbaa:function(t,e,i){"use strict";(function(t){i("8824");n(i("66fd"));var e=n(i("a3dd"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])}},[["cbaa","common/runtime","common/vendor"]]]);