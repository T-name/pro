(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/menus"],{3893:function(t,e,n){"use strict";n.r(e);var i=n("bd00"),a=n("882b");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("61b5");var u,r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=s.exports},"389c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"menus",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{interval:3e3,duration:500,menus:this.dataConfig.menuConfig.list||[],titleColor:this.dataConfig.titleColor.color[0].item,mbConfig:this.dataConfig.mbConfig.val,rowsNum:this.dataConfig.rowsNum.type,number:this.dataConfig.number.type,isMany:this.dataConfig.tabConfig.tabVal,menuStyle:this.dataConfig.menuStyle.type,docConfig:this.dataConfig.pointerStyle.type,dotColor:this.dataConfig.pointerColor.color[0].item,bgColor:this.dataConfig.bgColor.color[0].item,bgStyle:this.dataConfig.bgStyle.type,prConfig:this.dataConfig.prConfig.val,navHigh:170,menuList:[],active:0}},created:function(){},mounted:function(){var t=this;0===this.rowsNum?0===this.number?this.pageNum(6):1===this.number?this.pageNum(8):this.pageNum(10):1===this.rowsNum?0===this.number?this.pageNum(9):1===this.number?this.pageNum(12):this.pageNum(15):0===this.number?this.pageNum(12):1===this.number?this.pageNum(16):this.pageNum(20),this.$nextTick((function(){if(t.menuList.length&&t.isMany){var e=t;setTimeout((function(){e.menuHeight()}),150)}}))},methods:{bannerfun:function(t){this.active=t.detail.current},menuHeight:function(){var e=this,n=t.createSelectorQuery().in(this);n.select("#nav0").boundingClientRect((function(t){e.navHigh=t.height})).exec()},pageNum:function(t){for(var e=Math.ceil(this.menus.length/t),n=new Array,i=0;i<e;i++){var a=this.menus.slice(i*t,i*t+t);a.length&&n.push({list:a})}this.$set(this,"menuList",n)},menusTap:function(e){"/pages/short_video/appSwiper/index"!=e&&"/pages/short_video/nvueSwiper/index"!=e||(e="/pages/short_video/nvueSwiper/index"),-1!=e.indexOf("http")?t.navigateTo({url:"/pages/annex/web_view/index?url=".concat(e)}):-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(e)?t.navigateTo({url:e}):t.reLaunch({url:e})}}};e.default=n}).call(this,n("543d")["default"])},"61b5":function(t,e,n){"use strict";var i=n("94f9"),a=n.n(i);a.a},"882b":function(t,e,n){"use strict";n.r(e);var i=n("389c"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"94f9":function(t,e,n){},bd00:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/menus-create-component',
    {
        'pages/index/components/menus-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3893"))
        })
    },
    [['pages/index/components/menus-create-component']]
]);