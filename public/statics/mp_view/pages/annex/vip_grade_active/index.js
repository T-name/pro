(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/annex/vip_grade_active/index"],{"3f2c":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement;t._self._c},r=[]},4525:function(t,i,e){"use strict";e.r(i);var n=e("8268"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},"65eb":function(t,i,e){},"690a":function(t,i,e){"use strict";var n=e("65eb"),a=e.n(n);a.a},8268:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("99c8"),a=e("53c2"),r=e("5f9b"),u=function(){Promise.all([e.e("common/vendor"),e.e("components/ewcomerPop/index")]).then(function(){return resolve(e("daf5"))}.bind(null,e)).catch(e.oe)},o={components:{ewcomerPop:u},data:function(){return{imgHost:r.HTTP_REQUEST_URL,list:[],district:[],multiArray:[],multiIndex:[0,0,0],valueRegion:[0,0,0],region:["省","市","区"],comerGift:{},isComerGift:!1}},onLoad:function(){this.getInfo()},onReady:function(){},onShow:function(){},methods:{comerPop:function(){this.isComerGift=!1,t.navigateTo({url:"/pages/annex/vip_grade/index"})},activate:function(){for(var t=this,i=this,e=0;e<i.list.length;e++){var a=i.list[e];if(a.required||a.value){if(("date"===a.format||"address"===a.format)&&!a.value)return i.$util.Tips({title:"".concat(a.tip)});if("text"===a.format&&!a.value.trim())return i.$util.Tips({title:"".concat(a.tip)});if("num"===a.format&&a.value<=0)return i.$util.Tips({title:"".concat(a.tip)});if("mail"===a.format&&!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(a.value))return i.$util.Tips({title:"".concat(a.tip)});if("phone"===a.format&&!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(a.value))return i.$util.Tips({title:"".concat(a.tip)});if("id"===a.format&&!/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/i.test(a.value))return i.$util.Tips({title:"".concat(a.tip)})}}(0,n.levelActivate)(this.list).then((function(i){t.isComerGift=!0,i.data["register_give_integral"]=i.data.level_give_integral,i.data["register_give_money"]=i.data.level_give_money,i.data["register_give_coupon"]=i.data.level_give_coupon,i.data["coupon_count"]=i.data.level_give_coupon.length,t.comerGift=i.data})).catch((function(i){return t.$util.Tips({title:i})}))},addressList:function(){this.getCityList()},getCityList:function(){var t=this,i=this;(0,a.getCity)().then((function(e){t.district=e.data,i.initialize()}))},initialize:function(){var t=this,i=[],e=[],n=[];if(t.district.length){var a=t.district[0].c||[],r=a.length&&a[0].c||[];t.district.forEach((function(t){i.push(t.n)})),a.forEach((function(t){e.push(t.n)})),r.forEach((function(t){n.push(t.n)})),this.multiArray=[i,e,n]}},bindRegionChange:function(t,i){var e=this.multiIndex,n=this.district[e[0]]||{c:[]},a=n.c[e[1]]||{v:0},r=this.multiArray,u=t.detail.value;this.region=[r[0][u[0]],r[1][u[1]],r[2][u[2]]],this.list[i].value=a.v,this.valueRegion=[0,0,0],this.initialize()},bindMultiPickerColumnChange:function(t){var i=this,e=t.detail.column,n=t.detail.value,a=this.district[n]||{c:[]},r=i.multiArray,u=i.multiIndex;switch(u[e]=n,e){case 0:var o=a.c[0]||{c:[]};r[1]=a.c.map((function(t){return t.n})),r[2]=o.c.map((function(t){return t.n}));break;case 1:var c=i.district[u[0]].c[u[1]].c||[];r[2]=c.map((function(t){return t.n}));break;case 2:break}this.$set(this.multiArray,0,r[0]),this.$set(this.multiArray,1,r[1]),this.$set(this.multiArray,2,r[2]),this.multiIndex=u},radioChange:function(t,i){this.list[i].value=t.detail.value},bindDateChange:function(t,i){this.list[i].value=t.target.value},getInfo:function(){var t=this;(0,n.levelInfo)().then((function(i){i.data.forEach((function(t){"radio"==t.format?t.value="0":t.value=""})),t.list=i.data})).catch((function(i){t.$util.Tips({title:i})}))}},onReachBottom:function(){}};i.default=o}).call(this,e("543d")["default"])},e02a:function(t,i,e){"use strict";e.r(i);var n=e("3f2c"),a=e("4525");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("690a");var u,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);i["default"]=c.exports},f858:function(t,i,e){"use strict";(function(t){e("8824");n(e("66fd"));var i=n(e("e02a"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("543d")["createPage"])}},[["f858","common/runtime","common/vendor"]]]);