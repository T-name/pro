require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_info/index"],{"0be1":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var r=function(){var t=this,i=t.$createElement;t._self._c},a=[]},"460f":function(t,i,e){"use strict";e.r(i);var n=e("0be1"),r=e("4de1");for(var a in r)"default"!==a&&function(t){e.d(i,t,(function(){return r[t]}))}(a);e("e96d");var o,s=e("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"6fd90898",null,!1,n["a"],o);i["default"]=u.exports},"4de1":function(t,i,e){"use strict";e.r(i);var n=e("aff5"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=r.a},"7de1":function(t,i,e){"use strict";(function(t){e("8824");n(e("66fd"));var i=n(e("460f"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("543d")["createPage"])},aff5:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("99c8"),r=e("53c2"),a=e("d5f7"),o=e("26cb"),s=(u(e("3013")),u(e("a29e")));function u(t){return t&&t.__esModule?t:{default:t}}var c={components:{},mixins:[s.default],data:function(){return{userInfo:{},loginType:"h5",userIndex:0,switchUserInfo:[],isAuto:!1,isShowAuth:!1,canvasWidth:"",canvasHeight:"",canvasStatus:!1,district:[],multiArray:[],multiIndex:[0,0,0],valueRegion:[0,0,0],region:["省","市","区"],mp_is_new:this.$Cache.get("MP_VERSION_ISNEW")||!1}},computed:(0,o.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,i){t&&this.getUserInfo()},deep:!0}},onLoad:function(){this.isLogin?this.getUserInfo():(0,a.toLogin)()},onShow:function(){t.removeStorageSync("form_type_cart")},methods:{addressList:function(){this.getCityList()},getCityList:function(){var t=this,i=this;(0,r.getCity)().then((function(e){t.district=e.data,i.initialize()}))},initialize:function(){var t=this,i=[],e=[],n=[];if(t.district.length){var r=t.district[0].c||[],a=r.length&&r[0].c||[];t.district.forEach((function(t){i.push(t.n)})),r.forEach((function(t){e.push(t.n)})),a.forEach((function(t){n.push(t.n)})),this.multiArray=[i,e,n]}},bindRegionChange:function(t,i){var e=this.multiIndex,n=this.district[e[0]]||{c:[]},r=n.c[e[1]]||{v:0},a=this.multiArray,o=t.detail.value;this.region=[a[0][o[0]],a[1][o[1]],a[2][o[2]]],this.userInfo.register_extend_info[i].value=r.v,this.userInfo.register_extend_info[i].province=this.region[0],this.userInfo.register_extend_info[i].city=this.region[1],this.userInfo.register_extend_info[i].district=this.region[2],this.valueRegion=[0,0,0],this.initialize()},bindMultiPickerColumnChange:function(t){var i=this,e=t.detail.column,n=t.detail.value,r=this.district[n]||{c:[]},a=i.multiArray,o=i.multiIndex;switch(o[e]=n,e){case 0:var s=r.c[0]||{c:[]};a[1]=r.c.map((function(t){return t.n})),a[2]=s.c.map((function(t){return t.n}));break;case 1:var u=i.district[o[0]].c[o[1]].c||[];a[2]=u.map((function(t){return t.n}));break;case 2:break}this.$set(this.multiArray,0,a[0]),this.$set(this.multiArray,1,a[1]),this.$set(this.multiArray,2,a[2]),this.multiIndex=o},radioChange:function(t,i){this.userInfo.register_extend_info[i].value=t.detail.value},bindDateChange:function(t,i){this.userInfo.register_extend_info[i].value=t.target.value},onLoadFun:function(){this.getUserInfo()},authColse:function(t){this.isShowAuth=t},Setting:function(){t.openSetting({success:function(t){}})},switchAccounts:function(i){var e=this,n=this.switchUserInfo[i],o=this;return o.userIndex=i,o.switchUserInfo.length<=1||(void 0===n?o.$util.Tips({title:"切换的账号不存在"}):void("h5"===n.user_type?(t.showLoading({title:"正在切换中"}),(0,r.switchH5Login)().then((function(i){t.hideLoading(),o.$store.commit("LOGIN",{token:i.data.token,time:e.$Cache.strTotime(i.data.expires_time)-e.$Cache.time()}),o.getUserInfo()})).catch((function(i){return t.hideLoading(),o.$util.Tips({title:i})}))):(o.$store.commit("LOGOUT"),t.showLoading({title:"正在切换中"}),(0,a.toLogin)())))},outLogin:function(){var i=this;"h5"==i.loginType&&t.showModal({title:"提示",content:"确认退出登录?",success:function(e){e.confirm?(0,n.getLogout)().then((function(e){i.$store.commit("LOGOUT"),t.reLaunch({url:"/pages/index/index"})})).catch((function(t){})):e.cancel}})},getUserInfo:function(){var t=this;(0,n.getUserInfo)().then((function(i){i.data.register_extend_info.forEach((function(t){"radio"==t.format?t.value="0":(t.value="","address"==t.format&&(t.province="",t.city="",t.district=""))})),i.data.register_extend_info.forEach((function(e){i.data.extend_info.forEach((function(i){if(e.info===i.info&&(e.value=i.value,"address"==e.format)){var n=[i.province,i.city,i.district];t.$set(t,"region",n)}}))})),t.$set(t,"userInfo",i.data);for(var e=i.data.switchUserInfo||[],n=0;n<e.length;n++)e[n].uid==t.userInfo.uid&&(t.userIndex=n);t.$set(t,"switchUserInfo",e)}))},onChooseAvatar:function(t){var i=this,e=t.detail.avatarUrl;this.$util.uploadImgs("upload/image",e,(function(t){i.userInfo.avatar=t.data.url}),(function(t){}))},uploadpic:function(){var t=this,i=this;this.canvasStatus=!0,i.$util.uploadImageChange("upload/image",(function(e){var n=i.switchUserInfo[i.userIndex];i.userInfo.avatar=e.data.url,i.switchUserInfo[i.userIndex]=n,i.$set(i,"switchUserInfo",i.switchUserInfo),t.canvasStatus=!1}),(function(i){t.canvasStatus=!1}),(function(i){t.canvasWidth=i.w,t.canvasHeight=i.h}))},formSubmit:function(t){var i=this,e=t.detail.value;i.switchUserInfo[i.userIndex];if(!e.nickname)return i.$util.Tips({title:"用户姓名不能为空"});e.avatar=this.userInfo.avatar;for(var r=0;r<i.userInfo.register_extend_info.length;r++){var a=i.userInfo.register_extend_info[r];if(a.required||a.value){if(("date"===a.format||"address"===a.format)&&!a.value)return i.$util.Tips({title:"".concat(a.tip)});if("text"===a.format&&!a.value.trim())return i.$util.Tips({title:"".concat(a.tip)});if("num"===a.format&&a.value<=0)return i.$util.Tips({title:"".concat(a.tip)});if("mail"===a.format&&!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(a.value))return i.$util.Tips({title:"".concat(a.tip)});if("phone"===a.format&&!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(a.value))return i.$util.Tips({title:"".concat(a.tip)});if("id"===a.format&&!/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/i.test(a.value))return i.$util.Tips({title:"".concat(a.tip)})}}e.extend_info=i.userInfo.register_extend_info,(0,n.userEdit)(e).then((function(t){return i.$util.Tips({title:t.msg,icon:"success"},{tab:3,url:1})})).catch((function(t){return i.$util.Tips({title:t||"保存失败，您并没有修改"},{tab:3,url:1})}))}}};i.default=c}).call(this,e("543d")["default"])},c0f6:function(t,i,e){},e96d:function(t,i,e){"use strict";var n=e("c0f6"),r=e.n(n);r.a}},[["7de1","common/runtime","common/vendor"]]]);