require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/short_video/components/douyin-scrollview/douyin-scrollview"],{1511:function(i,t,e){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;h(e("4553")),h(e("ca3c"));var n=e("5f9b"),s=e("a212"),o=e("26cb");function h(i){return i&&i.__esModule?i:{default:i}}var a={computed:(0,o.mapGetters)(["uid"]),data:function(){return{replyList:[],num:1.15,plHeight:0,value:"",autoHeight:!1,borderRadius:50,lineheight:0,percent:1,show:!0,emojiHeight:0,emojiheight:0,emojihi:0,cursorSpacing:20,autoFocus:!1,isopen:!1,isToShow:!1,adjustPosition:!0,placeholder:"说点什么呗~",disabled:!1,current:1,emojilist:[],nowTimeEmojiList:[],sinaEmojilist:[],currentNum:4.4,likeImage:[],nowImage:[],gifAndpngList:[],gifAndpnglist:[],searchGIFValue:"",isSearcopen:!1,GifList:[],isShowImage:!1,imageURL:"",platform:"",systemVerson:"",ischangepinlun:!0,pinlunList:[],pinlunListX:[],pinlun_list:[],isSend:!0,userID:"",update:!0,huifuUser:"",gethuifuUser:"",gethuifuUserID:"",huifuindex:-1,iszhangkai:!1,imgHost:n.HTTP_REQUEST_URL,limit:10,page:1,pages:1,videoIDs:0,parentNum:0}},name:"douyin-scrollview",props:{Width:{type:Number,default:0},Height:{type:Number,default:0},pinlunNum:{type:Number,default:0},videoID:{type:Number,default:0}},watch:{searchGIFValue:function(i){if(this.isopen=!1,""!==i){for(var t=[],e=0;e<this.gifAndpngList.length;e++)-1!==this.gifAndpngList[e].name.indexOf(i)&&t.push(this.gifAndpngList[e]);this.GifList=t}},value:function(i){""==i?(this.autoHeight=!1,""!==this.imageURL?this.percent=.9:this.percent=1):(this.autoHeight=!0,this.percent=.9)},imageURL:function(i){""!==i?this.percent=.9:""==this.value&&(this.percent=1)},lineheight:function(i,t){Math.abs(i)<30?this.borderRadius=50:this.borderRadius=10}},created:function(){this.isToShow=!1;var t=i.getSystemInfoSync().model;this.platform=i.getSystemInfoSync().platform,this.emojiHeight=0,"ios"!=i.getSystemInfoSync().platform||"iPhone6"===t&&"iPhone6s"===t&&"iPhone7"===t&&"iPhone8"===t?this.num=1.15:this.num=1.25,this.windowHeight=i.getSystemInfoSync().screenHeight,this.emojiHeight=this.windowHeight/2.1,this.adjustPosition=!0,this.plHeight=this.Height-this.Height/this.num,""!==this.imageURL&&(this.percent=.9),this.likeImage=i.getStorageSync("likeImage"),this.nowImage=i.getStorageSync("nowImage"),this.nowTimeEmojiList=i.getStorageSync("nowTimeEmojiList")},methods:{getnewpinlun:function(t,e){var n=this;this.videoIDs=t;var o=t;e&&(this.pages=1,this.pinlunList=[]),(0,s.commentList)(o,{limit:this.limit,page:this.pages}).then((function(i){n.pages=n.pages+1,n.pinlunList=n.pinlunList.concat(i.data)})).catch((function(t){return i.showToast({title:t,icon:"none",duration:2e3})}))},sendSMS:function(){var t=this;this.isSend=!1,i.showLoading({title:"正在发送..."});var e=this.parentNum?0:this.pinlunList[this.huifuindex].id,n={id:this.videoIDs,pid:e,content:this.value};(0,s.markeComment)(n).then((function(e){i.hideLoading(),t.$emit("pinlunFun",t.pinlunNum+1,t.videoIDs),t.value="",t.imageURL="",t.$refs.openPinglun.close(),t.isSend=!0,t.pages=1,t.pinlunList=[],t.getnewpinlun(t.videoIDs)})).catch((function(t){return i.showToast({title:t,icon:"none",duration:2e3})}))},tolike:function(t,e){var n=this;(0,s.replyCommentLike)("like",t.id).then((function(i){n.pinlunList[e].is_like=!n.pinlunList[e].is_like;var s=n.pinlunList[e];t.is_like?s.like_num+=1:s.like_num-=1})).catch((function(t){return i.showToast({title:t,icon:"none",duration:2e3})}))},tosonlike:function(t,e,n){var o=this;(0,s.replyCommentLike)("like",n.id).then((function(i){o.pinlunList[t].reply[e].is_like=!o.pinlunList[t].reply[e].is_like;var s=o.pinlunList[t].reply[e];n.is_like?s.like_num+=1:s.like_num-=1})).catch((function(t){return i.showToast({title:t,icon:"none",duration:2e3})}))},zhangkai:function(t,e){var n=this;void 0!=e.isShow&&"undefined"!=e.isShow||(this.page=1),(0,s.replyCommentList)(e.id,{limit:this.limit,page:this.page}).then((function(i){n.page=n.page+1,e.reply=e.reply.concat(i.data),e.reply.length&&(e.isShow=!0),n.$set(n,"pinlunList",n.pinlunList)})).catch((function(t){return i.showToast({title:t,icon:"none",duration:2e3})}))},scrolltolower:function(){this.getnewpinlun(this.videoIDs)},shouqi:function(i){this.page=1,i.reply=[],i.isShow=!1,this.$set(this,"pinlunList",this.pinlunList)},deletesonpinlun:function(i,t){},addlikeImage:function(){i.showModal({title:"⏰演示项目提醒⏰",content:"请前往 douyin-scrollview.nvue组件\naddlikeImage()函数进行配置",success:function(){}})},sonhuifu:function(t,e){this.huifuUser=i.getStorageSync("user").username,this.gethuifuUser=this.pinlunList[t].sonPinlun[e].username,this.gethuifuUserID=this.pinlunList[t].sonPinlun[e].userID,this.placeholder="回复："+this.gethuifuUser,this.huifuindex=t,this.openPinglun()},huifu:function(i){this.parentNum=0,this.placeholder="回复："+this.pinlunList[i].nickname,this.huifuindex=i,this.openPinglun()},clicknowImage:function(i){this.imageURL=this.nowImage[i],this.isShowImage=!0},selectGIF:function(t){if(this.imageURL=this.GifList[t].url,this.isShowImage=!0,this.searchGIFValue="",this.$refs.searchEmoji.close(),0==i.getStorageSync("nowImage").length)this.nowImage=[],this.nowImage.push(this.imageURL),i.setStorageSync("nowImage",this.nowImage);else{this.nowImage=i.getStorageSync("nowImage");for(var e=!0,n=0;n<this.nowImage.length;n++)this.imageURL==this.nowImage[n]&&(e=!1);e&&this.nowImage.push(this.imageURL),i.setStorageSync("nowImage",this.nowImage)}},deleteimageURL:function(){this.imageURL="",this.isShowImage=!1},clickGIF:function(t){if(this.imageURL=this.gifAndpnglist[t].url,this.isShowImage=!0,0==i.getStorageSync("nowImage").length)this.nowImage=[],this.nowImage.push(this.imageURL),i.setStorageSync("nowImage",this.nowImage);else{this.nowImage=i.getStorageSync("nowImage");for(var e=!0,n=0;n<this.nowImage.length;n++)this.imageURL==this.nowImage[n]&&(e=!1);e&&this.nowImage.push(this.imageURL),i.setStorageSync("nowImage",this.nowImage)}},clearSearchValue:function(){this.searchGIFValue=""},blurGIF:function(){this.windowHeight=i.getSystemInfoSync().screenHeight,this.emojiHeight=this.windowHeight/2.1,""==this.searchGIFValue&&this.$refs.searchEmoji.close()},searchGIF:function(){var t=this;this.emojiHeight=0,"ios"==i.getSystemInfoSync().platform?this.$refs.searchEmoji.open("bottom"):setTimeout((function(){t.$refs.searchEmoji.open("bottom")}),500)},deletenowImage:function(t){for(var e=[],n=0;n<this.nowImage.length;n++)this.nowImage[n]!==this.nowImage[t]&&e.push(this.nowImage[n]);this.nowImage=e,i.setStorageSync("nowImage",this.nowImage)},clickLikeImage:function(t){if(0==i.getStorageSync("nowImage").length)this.nowImage=[],this.nowImage.push(this.likeImage[t]),i.setStorageSync("nowImage",this.nowImage);else{this.nowImage=i.getStorageSync("nowImage");for(var e=!0,n=0;n<this.nowImage.length;n++)this.likeImage[t]==this.nowImage[n]&&(e=!1);e&&this.nowImage.push(this.likeImage[t]),i.setStorageSync("nowImage",this.nowImage)}},deleteImage:function(t){var e=this;i.showModal({title:"确定删除？",success:function(n){n.confirm&&i.removeSavedFile({filePath:e.likeImage[t],success:function(){for(var n=[],s=0;s<e.likeImage.length;s++)e.likeImage[s]!==e.likeImage[t]&&n.push(e.likeImage[s]);for(var o=[],h=0;h<e.nowImage.length;h++)e.nowImage[h]!==e.likeImage[t]&&o.push(e.nowImage[h]);e.nowImage=o,i.setStorageSync("nowImage",e.nowImage),e.likeImage=n,i.setStorageSync("likeImage",e.likeImage)}})}})},qingkonGIF:function(){var t=this;i.showModal({title:"确定清空？",success:function(e){e.confirm&&(t.nowImage=[],i.removeStorageSync("nowImage"))}})},searchGIFChange:function(i){},change:function(t){this.isToShow=!1,1==t.show?(this.show=!1,this.getGif()):(i.hideKeyboard(),this.show=!0,this.autoFocus=!0,this.isopen=!1,this.current=1,this.currentNum=4.4,this.isShowImage=!1,this.cursorSpacing=20,this.placeholder="说点什么呗~")},closeSheet:function(){this.$emit("closeScrollview")},movehandle:function(){},movesearch:function(){},parentPinglun:function(){this.parentNum=1,this.openPinglun()},openPinglun:function(){this.$refs.openPinglun.open("bottom")},linechange:function(i){this.lineheight=i.detail.height},keyboardheightchange:function(){},blur:function(){},clickTextarea:function(){this.isopen=!1,this.disabled=!1,this.emojiHeight=0},focus:function(){var i=this;this.isopen=!1,this.emojiHeight=0,setTimeout((function(){setTimeout((function(){i.isToShow=!1,""!==i.imageURL&&(i.isShowImage=!0)}),1500)}),20)},toemoji:function(){var t=this;0==this.isopen?(this.windowHeight=i.getSystemInfoSync().screenHeight,this.emojiHeight=this.windowHeight/2.1,this.disabled=!0,setTimeout((function(){t.isopen=!0,t.isToShow=!0}),500)):(this.isShowImage=!1,this.isToShow=!1,this.isopen=!1,this.disabled=!1,this.emojiHeight=0,""!==this.imageURL&&setTimeout((function(){t.isShowImage=!0}),1300))},undo:function(){if(""!==this.value){for(var i="",t=0;t<this.value.length-1;t++)i+=this.value[t];this.value=i}},timeEmoji:function(){this.currentNum=1,this.current=0},nowEmoji:function(){this.currentNum=4.3,this.current=1},likeEmoji:function(){this.currentNum=7.6,this.current=2},gifEmoji:function(){this.currentNum=11,this.current=3},qingkon:function(){var t=this;i.showModal({title:"确定清空？",success:function(e){e.confirm&&(t.nowTimeEmojiList=[],i.removeStorageSync("nowTimeEmojiList"))}})},clicknowTimeEmoji:function(i){var t=this.nowTimeEmojiList[i].alt;this.value+=t},clickEmoji:function(t){var e=this.emojilist[t].alt;if(this.value+=e,0==i.getStorageSync("nowTimeEmojiList").length)this.nowTimeEmojiList=[],this.nowTimeEmojiList.push(this.emojilist[t]),i.setStorageSync("nowTimeEmojiList",this.nowTimeEmojiList);else{this.nowTimeEmojiList=i.getStorageSync("nowTimeEmojiList");for(var n=!0,s=0;s<this.nowTimeEmojiList.length;s++)this.emojilist[t].alt==this.nowTimeEmojiList[s].alt&&(n=!1);n&&this.nowTimeEmojiList.push(this.emojilist[t]),i.setStorageSync("nowTimeEmojiList",this.nowTimeEmojiList)}},clicksinaEmoji:function(i){},currentChange:function(i){var t=i.detail.current+1;switch(t){case 1:this.currentNum=1;break;case 2:this.currentNum=4.3;break;case 3:this.currentNum=7.6;break;case 4:this.currentNum=11;break;default:break}},getGif:function(){for(var i=[],t=0;t<15;t++){var e=Math.round(Math.random()*this.gifAndpngList.length);i.push(this.gifAndpngList[e])}this.gifAndpnglist=i},scrolltolowerGIF:function(){for(var i=0;i<15;i++){var t=Math.round(Math.random()*this.gifAndpngList.length);this.gifAndpnglist.push(this.gifAndpngList[t])}}}};t.default=a}).call(this,e("543d")["default"])},"4c65":function(i,t,e){"use strict";var n=e("560b"),s=e.n(n);s.a},"560b":function(i,t,e){},"71e9":function(i,t,e){"use strict";e.r(t);var n=e("cd05"),s=e("bf19");for(var o in s)"default"!==o&&function(i){e.d(t,i,(function(){return s[i]}))}(o);e("4c65");var h,a=e("f0c5"),u=Object(a["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],h);t["default"]=u.exports},bf19:function(i,t,e){"use strict";e.r(t);var n=e("1511"),s=e.n(n);for(var o in n)"default"!==o&&function(i){e.d(t,i,(function(){return n[i]}))}(o);t["default"]=s.a},cd05:function(i,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return n}));var n={uniPopup:function(){return e.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(e.bind(null,"fc40"))}},s=function(){var i=this,t=i.$createElement;i._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/short_video/components/douyin-scrollview/douyin-scrollview-create-component',
    {
        'pages/short_video/components/douyin-scrollview/douyin-scrollview-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("71e9"))
        })
    },
    [['pages/short_video/components/douyin-scrollview/douyin-scrollview-create-component']]
]);
