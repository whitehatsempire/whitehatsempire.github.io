(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tokenInfo"],{"077d":function(t,a,i){t.exports=i.p+"img/Danger.465918ee.svg"},"1e84":function(t,a,i){"use strict";i("1f2e")},"1f07":function(t,a,i){"use strict";i("b0c0")},"1f2e":function(t,a,i){},"216c":function(t,a,i){t.exports=i.p+"img/warn.a6485a93.svg"},"2afd":function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"information"},[i("div",{staticClass:"holdCurrency"},[i("span",[t._v("持币地址数")]),i("span",{staticClass:"amount"},[t._v(t._s(t.Allinformation.holder_count))])]),i("div",{staticClass:"holdCurrency"},[i("span",[t._v("TOP 10 持币占比")]),i("div",[i("span",{staticClass:"amount"},[t._v(t._s(t.Allinformation.Proportion>0?t.Allinformation.Proportion.toFixed(2):t.Allinformation.Proportion)+"%")]),i("el-progress",{attrs:{percentage:t.Allinformation.Proportion,"show-text":!1,"stroke-width":19}})],1)]),i("div",{staticClass:"TOP10"},[i("span",[t._v("TOP 10 持币明细")]),t._l(t.Allinformation.holders,(function(a){return i("div",{key:a,staticClass:"list"},[i("span",[t._v(t._s(a.address))]),i("span",[t._v(t._s(a.balance)+"（"+t._s(a.percent)+"%）")])])}))],2)])},s=[],r=(i("96cf"),i("1da1")),e={data:function(){return{input:"",list:[],Proportion:0,holder_count:0}},props:{Allinformation:{type:String,require:!0}},computed:{},created:function(){this.$contracts&&this.init()},methods:{init:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}},o=e,l=o,c=(i("1f07"),i("2877")),m=Object(c["a"])(l,n,s,!1,null,"78e67cee",null);a["default"]=m.exports},"379f":function(t,a,i){},5237:function(t,a,i){t.exports=i.p+"img/correct.18801e89.svg"},"8aab":function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"Evaluation"},[n("div",[n("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:t.Allinformation.Stars,callback:function(a){t.$set(t.Allinformation,"Stars",a)},expression:"Allinformation.Stars"}}),n("div",{staticClass:"Level"},[n("span",[t._v("安全等级")]),t.Allinformation.Stars<=1.5?n("span",[t._v("存在危险")]):t.Allinformation.Stars<4.2?n("span",[t._v("可能存在危险")]):n("span",[t._v("看起来没有问题")])]),n("div",{staticClass:"hint"},[n("div",[n("img",{attrs:{src:i("216c"),alt:""}}),n("span",[t._v("安全提示")]),n("span",[t._v(t._s(t.Allinformation.WarnCountlist))])]),n("div",[n("img",{attrs:{src:i("077d"),alt:""}}),n("span",[t._v("危险警告")]),n("span",[t._v(t._s(t.Allinformation.DangerCountlist))])])]),n("span",{staticClass:"Suggest"},[t._v("*检测结果仅代表链上数据分析值，不作为任何投资建议或担保")])],1)])},s=[],r=(i("96cf"),i("1da1")),e={props:{Allinformation:{type:String,require:!0}},data:function(){return{value:5}},created:function(){this.$contracts&&this.init()},methods:{init:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.value=(t.Allinformation.WarnCountlist+t.Allinformation.DangerCountlist)/16*100*.05,console.log(t.value),console.log(t.Allinformation.WarnCountlist),t.address=t.$address;case 4:case"end":return a.stop()}}),a)})))()}}},o=e,l=o,c=(i("1e84"),i("2877")),m=Object(c["a"])(l,n,s,!1,null,"2b86cd76",null);a["default"]=m.exports},9611:function(t,a,i){"use strict";i("379f")},"9db4":function(t,a,i){"use strict";i("eed6")},b0c0:function(t,a,i){},b112:function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"information"},[i("div",{staticClass:"holdCurrency"},[i("span",[t._v("LP持币地址数 "+t._s(t.Allinformation.lp_holder_count))]),i("span",{staticClass:"amount"},[t._v("总量: "+t._s(t.Allinformation.lp_total_supply>0?t.Allinformation.lp_total_supply.toFixed(4):0))])]),i("div",{staticClass:"holdCurrency"},[i("span",[t._v("LP锁仓占比")]),i("div",[i("span",{staticClass:"amount"},[t._v(t._s(t.lpProportion)+"%")]),i("el-progress",{attrs:{percentage:t.lpProportion,"show-text":!1,"stroke-width":19}})],1)]),i("div",{staticClass:"TOP10"},[i("span",[t._v("TOP 10 持币明细")]),t._l(this.Allinformation.lp_holders,(function(a){return i("div",{key:a,staticClass:"list"},[i("span",[t._v(t._s(a.address))]),i("span",[t._v(t._s(a.balance)+"（"+t._s(a.percent)+"%）")])])}))],2)])},s=[],r=(i("96cf"),i("1da1")),e={data:function(){return{input:"",list:[],lpProportion:0,lp_holder_count:0,lp_total_supply:0}},props:{Allinformation:{type:String,require:!0},lpProportion:{type:String,require:!0}},computed:{},created:function(){this.$contracts&&this.init()},methods:{init:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}},o=e,l=o,c=(i("9db4"),i("2877")),m=Object(c["a"])(l,n,s,!1,null,"810e0b42",null);a["default"]=m.exports},bffd:function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"Report"},[t._m(0),n("div",{staticClass:"taxrate"},[n("div",[n("span",[t._v("买入税率")]),n("span",[t._v(t._s(t.Allinformation.buy_tax)+"%")])]),n("div",[n("span",[t._v("卖出税率")]),n("span",[t._v(t._s(t.Allinformation.sell_tax)+"%")])])]),n("div",{staticClass:"content"},[n("div",[0==t.Allinformation.is_honeypot?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.is_honeypot?n("img",{attrs:{src:i("216c"),alt:""}}):n("img",{attrs:{src:i("077d"),alt:""}}),n("span",[t._v("这看上去不像是貔貅")])]),n("div",[0==t.Allinformation.slippage_modifiable?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.slippage_modifiable?n("img",{attrs:{src:i("216c"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("交易税率不可修改")])]),n("div",[0==t.Allinformation.transfer_pausable?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.transfer_pausable?n("img",{attrs:{src:i("077d"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("交易不可暂停")])]),n("div",[0==t.Allinformation.is_blacklisted?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.is_blacklisted?n("img",{attrs:{src:i("216c"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("没有黑名单功能")])]),n("div",[0==t.Allinformation.is_whitelisted?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.is_whitelisted?n("img",{attrs:{src:i("216c"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("没有白名单功能")])]),n("div",[0==t.Allinformation.is_anti_whale?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.is_anti_whale?n("img",{attrs:{src:i("216c"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("没有防巨鲸功能")])]),n("div",[0==t.Allinformation.trading_cooldown?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.trading_cooldown?n("img",{attrs:{src:i("216c"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("没有交易冷却")])]),n("div",[0==t.Allinformation.personal_slippage_modifiable?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.personal_slippage_modifiable?n("img",{attrs:{src:i("216c"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("没有针对个人设置滑点")])])]),t._m(1),n("div",{staticClass:"content content1"},[n("div",[0==t.Allinformation.is_open_source?n("img",{attrs:{src:i("077d"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("开源")])]),n("div",[0==t.Allinformation.isLock?n("img",{attrs:{src:i("216c"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),0==t.Allinformation.isLock?n("span",[t._v("未检测到池子加锁")]):n("span",[t._v("检测到池子已加锁")])]),n("div",[0==t.Allinformation.owner_change_balance?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.owner_change_balance?n("img",{attrs:{src:i("216c"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("所有者可以篡改余额")])]),n("div",[0==t.Allinformation.hidden_owner?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.hidden_owner?n("img",{attrs:{src:i("216c"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("有隐藏的owner")])]),n("div",[0==t.Allinformation.is_mintable?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.is_mintable?n("img",{attrs:{src:i("216c"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("可增发，存在恶意发行砸盘的可能")])]),n("div",[n("img",{directives:[{name:"show",rawName:"v-show",value:1==t.Allinformation.isowner_address,expression:"Allinformation.isowner_address ==true"}],attrs:{src:i("216c"),alt:""}}),n("img",{directives:[{name:"show",rawName:"v-show",value:0==t.Allinformation.isowner_address,expression:"Allinformation.isowner_address ==false"}],attrs:{src:i("5237"),alt:""}}),n("span",{directives:[{name:"show",rawName:"v-show",value:1==t.Allinformation.isowner_address,expression:"Allinformation.isowner_address ==true"}]},[t._v("未抛弃管理员权限")]),n("span",{directives:[{name:"show",rawName:"v-show",value:0==t.Allinformation.isowner_address,expression:"Allinformation.isowner_address ==false"}]},[t._v("已抛弃管理员权限")])]),n("div",[0==t.Allinformation.is_proxy?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.is_proxy?n("img",{attrs:{src:i("077d"),alt:""}}):t._e(),0==t.Allinformation.is_proxy?n("span",[t._v("没有代理合约")]):1==t.Allinformation.is_proxy?n("span",[t._v("是代理合约，可能存在替换危险")]):t._e()]),n("div",[0==t.Allinformation.can_take_back_ownership?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.can_take_back_ownership?n("img",{attrs:{src:i("216c"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("没有取回所有权")])]),n("div",[0==t.Allinformation.selfdestruct?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.selfdestruct?n("img",{attrs:{src:i("216c"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("不可自毁合约")])]),n("div",[0==t.Allinformation.external_call?n("img",{attrs:{src:i("5237"),alt:""}}):1==t.Allinformation.external_call?n("img",{attrs:{src:i("077d"),alt:""}}):n("img",{attrs:{src:i("5237"),alt:""}}),n("span",[t._v("不存在外部方法")])])])])},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"safetyreport"},[i("span",[t._v("交易安全报告")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"safetyreport"},[i("span",[t._v("合约安全报告")])])}],r=(i("96cf"),i("1da1")),e={data:function(){return{input:""}},props:{Allinformation:{type:String,require:!0}},computed:{},created:function(){this.$contracts&&this.init()},methods:{init:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.address=t.$address;case 1:case"end":return a.stop()}}),a)})))()}}},o=e,l=o,c=(i("9611"),i("2877")),m=Object(c["a"])(l,n,s,!1,null,"8f5ad8b8",null);a["default"]=m.exports},eed6:function(t,a,i){}}]);