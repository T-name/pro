(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/seckill"],{"146f":function(t,i,n){"use strict";n.r(i);var o=n("b63e"),e=n("afbd");for(var a in e)"default"!==a&&function(t){n.d(i,t,(function(){return e[t]}))}(a);n("f5769");var l,c=n("f0c5"),r=Object(c["a"])(e["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],l);i["default"]=r.exports},"254c":function(t,i,n){},"338e":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n("3995"),e=function(){n.e("components/countDown/index").then(function(){return resolve(n("00a7"))}.bind(null,n)).catch(n.oe)},a={name:"seckill",components:{countDown:e},props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{datatime:"",spikeList:[],countDownColor:this.dataConfig.countDownColor.color[0].item,themeColor:this.dataConfig.themeColor.color[0].item,numberConfig:this.dataConfig.numberConfig.val,lrConfig:this.dataConfig.lrConfig.val,mbConfig:this.dataConfig.mbConfig.val,imgUrl:this.dataConfig.imgConfig.url,priceShow:this.dataConfig.priceShow.val,discountShow:this.dataConfig.discountShow.val,titleShow:this.dataConfig.titleShow.val,seckillShow:this.dataConfig.seckillShow.val,conStyle:this.dataConfig.conStyle.type,prConfig:this.dataConfig.prConfig.val,bgColor:this.dataConfig.bgColor.color[0].item,fontColor:this.dataConfig.fontColor.color[0].item,titleColor:this.dataConfig.titleColor.color[0].item}},created:function(){},mounted:function(){this.getSeckillIndexTime()},methods:{getSeckillIndexTime:function(){var t=this,i=this.$config.LIMIT,n={page:1,limit:this.numberConfig>=i?i:this.numberConfig,type:"index"};(0,o.getSeckillIndexTime)().then((function(i){if(-1!==i.data.seckillTimeIndex){t.datatime=i.data.seckillTime[i.data.seckillTimeIndex].stop;var e=i.data.seckillTime[i.data.seckillTimeIndex].id;(0,o.getSeckillList)(e,n).then((function(i){var n=i.data;n.forEach((function(i){var n=0;i.price>0&&i.ot_price>0&&(n=(parseFloat(i.price)/parseFloat(i.ot_price)).toFixed(2)),i.discountNum=t.$util.$h.Mul(n,10)})),t.spikeList=n}))}}))}}};i.default=a},afbd:function(t,i,n){"use strict";n.r(i);var o=n("338e"),e=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(i,t,(function(){return o[t]}))}(a);i["default"]=e.a},b63e:function(t,i,n){"use strict";var o;n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return o}));var e=function(){var t=this,i=t.$createElement;t._self._c},a=[]},f5769:function(t,i,n){"use strict";var o=n("254c"),e=n.n(o);e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/seckill-create-component',
    {
        'pages/index/components/seckill-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("146f"))
        })
    },
    [['pages/index/components/seckill-create-component']]
]);
