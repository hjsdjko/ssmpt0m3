(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tiwenxinxi/add-or-update"],{2144:function(e,n,t){},"45dd":function(e,n,t){"use strict";var r=t("2144"),i=t.n(r);i.a},"4bfc":function(e,n,t){"use strict";t.r(n);var r=t("a261"),i=t("b445");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("45dd");var o,u=t("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"5d7e2447",null,!1,r["a"],o);n["default"]=c.exports},6437:function(e,n,t){"use strict";(function(e){t("793d");r(t("66fd"));var n=r(t("4bfc"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},a261:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"fac0"))}},i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},b445:function(e,n,t){"use strict";t.r(n);var r=t("d59a"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a},d59a:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,i,a,o){try{var u=e[a](o),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(r,i)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function u(e){a(o,r,i,u,c,"next",e)}function c(e){a(o,r,i,u,c,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("fac0"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{bianhao:this.getUUID(),biaoti:"",gonghao:"",jiaoshixingming:"",tiwenneirong:"",tiwenshijian:"",xuehao:"",xueshengxingming:"",userid:""},gonghaoOptions:[],gonghaoIndex:0,user:{},ro:{bianhao:!1,biaoti:!1,gonghao:!1,jiaoshixingming:!1,tiwenneirong:!1,tiwenshijian:!1,xuehao:!1,xueshengxingming:!1,userid:!1}}},components:{wPicker:u},computed:{},onLoad:function(n){var t=this;return o(r.default.mark((function i(){var a,o,u,c;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.ruleForm.tiwenshijian=t.$utils.getCurDateTime(),a=e.getStorageSync("nowTable"),i.next=4,t.$api.session(a);case 4:return o=i.sent,t.user=o.data,t.ruleForm.xuehao=t.user.xuehao,t.ruleForm.xueshengxingming=t.user.xueshengxingming,i.next=10,t.$api.option("jiaoshi","gonghao",{});case 10:if(o=i.sent,t.gonghaoOptions=o.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=20;break}return t.ruleForm.id=n.id,i.next=18,t.$api.info("tiwenxinxi",t.ruleForm.id);case 18:o=i.sent,t.ruleForm=o.data;case 20:if(!n.cross){i.next=63;break}u=e.getStorageSync("crossObj"),i.t0=r.default.keys(u);case 23:if((i.t1=i.t0()).done){i.next=63;break}if(c=i.t1.value,"bianhao"!=c){i.next=29;break}return t.ruleForm.bianhao=u[c],t.ro.bianhao=!0,i.abrupt("continue",23);case 29:if("biaoti"!=c){i.next=33;break}return t.ruleForm.biaoti=u[c],t.ro.biaoti=!0,i.abrupt("continue",23);case 33:if("gonghao"!=c){i.next=37;break}return t.ruleForm.gonghao=u[c],t.ro.gonghao=!0,i.abrupt("continue",23);case 37:if("jiaoshixingming"!=c){i.next=41;break}return t.ruleForm.jiaoshixingming=u[c],t.ro.jiaoshixingming=!0,i.abrupt("continue",23);case 41:if("tiwenneirong"!=c){i.next=45;break}return t.ruleForm.tiwenneirong=u[c],t.ro.tiwenneirong=!0,i.abrupt("continue",23);case 45:if("tiwenshijian"!=c){i.next=49;break}return t.ruleForm.tiwenshijian=u[c],t.ro.tiwenshijian=!0,i.abrupt("continue",23);case 49:if("xuehao"!=c){i.next=53;break}return t.ruleForm.xuehao=u[c],t.ro.xuehao=!0,i.abrupt("continue",23);case 53:if("xueshengxingming"!=c){i.next=57;break}return t.ruleForm.xueshengxingming=u[c],t.ro.xueshengxingming=!0,i.abrupt("continue",23);case 57:if("userid"!=c){i.next=61;break}return t.ruleForm.userid=u[c],t.ro.userid=!0,i.abrupt("continue",23);case 61:i.next=23;break;case 63:t.styleChange();case 64:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},gonghaoChange:function(e){var n=this;return o(r.default.mark((function t(){var i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.gonghaoIndex=e.target.value,n.ruleForm.gonghao=n.gonghaoOptions[n.gonghaoIndex],t.next=4,n.$api.follow("jiaoshi","gonghao",{columnValue:n.ruleForm.gonghao});case 4:i=t.sent,i.data.jiaoshixingming&&(n.ruleForm.jiaoshixingming=i.data.jiaoshixingming);case 6:case"end":return t.stop()}}),t)})))()},tiwenshijianConfirm:function(e){console.log(e),this.ruleForm.tiwenshijian=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return o(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.bianhao){n.next=3;break}return e.$utils.msg("编号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.biaoti){n.next=6;break}return e.$utils.msg("标题不能为空"),n.abrupt("return");case 6:if(!e.ruleForm.id){n.next=11;break}return n.next=9,e.$api.update("tiwenxinxi",e.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,e.$api.add("tiwenxinxi",e.ruleForm);case 13:e.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])}},[["6437","common/runtime","common/vendor"]]]);