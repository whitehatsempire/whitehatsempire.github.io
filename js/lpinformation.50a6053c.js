(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lpinformation"],{b112:function(t,n,i){"use strict";i.r(n);var o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"information"},[i("div",{staticClass:"holdCurrency"},[i("span",[t._v(t._s(t.$t("lpinformation.text1"))+" "+t._s(t.Allinformation.lp_holder_count))]),i("span",{staticClass:"amount"},[t._v(t._s(t.$t("lpinformation.text2"))+" "+t._s(t.Allinformation.lp_total_supply>0?t.Allinformation.lp_total_supply.toFixed(4):0))])]),i("div",{staticClass:"holdCurrency"},[i("span",[t._v(t._s(t.$t("lpinformation.text3")))]),i("div",[i("span",{staticClass:"amount"},[t._v(t._s(t.lpProportion)+"%")]),i("el-progress",{attrs:{percentage:t.lpProportion,"show-text":!1,"stroke-width":19}})],1)]),i("div",{staticClass:"TOP10"},[i("span",[t._v(t._s(t.$t("lpinformation.text4")))]),t._l(this.Allinformation.lp_holders,(function(n){return i("div",{key:n,staticClass:"list"},[i("span",[t._v(t._s(n.address))]),i("span",[t._v(t._s(n.balance)+"（"+t._s(n.percent)+"%）")])])}))],2)])},s=[],r=(i("96cf"),i("1da1")),e={data:function(){return{input:"",list:[],lpProportion:0,lp_holder_count:0,lp_total_supply:0}},props:{Allinformation:{type:String,require:!0},lpProportion:{type:String,require:!0}},computed:{},created:function(){this.$contracts&&this.init()},methods:{init:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}},a=e,l=a,p=(i("c5fc"),i("2877")),c=Object(p["a"])(l,o,s,!1,null,"68ffbcd2",null);n["default"]=c.exports},c5fc:function(t,n,i){"use strict";i("ca40")},ca40:function(t,n,i){}}]);