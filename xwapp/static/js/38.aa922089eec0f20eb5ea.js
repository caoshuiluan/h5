webpackJsonp([38],{C8XI:function(t,e){},G5tM:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Row",{staticClass:"selectEducation"},[o("Col",{staticClass:"selectItem",attrs:{span:"8"}},[o("Select",{staticStyle:{width:"84px"},attrs:{size:"small"},model:{value:t.goodsType,callback:function(e){t.goodsType=e},expression:"goodsType"}},t._l(t.goodsTypeList,function(e){return o("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1),t._v(" "),o("Col",{staticClass:"selectItem",attrs:{span:"8"}},[o("Select",{staticStyle:{width:"84px"},attrs:{size:"small"},model:{value:t.goodsBrand,callback:function(e){t.goodsBrand=e},expression:"goodsBrand"}},t._l(t.goodsBranList,function(e){return o("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1),t._v(" "),o("Col",{staticClass:"selectItem",attrs:{span:"8"}},[o("Select",{staticStyle:{width:"84px"},attrs:{size:"small"},model:{value:t.goodsMoney,callback:function(e){t.goodsMoney=e},expression:"goodsMoney"}},t._l(t.goodsMoneyList,function(e){return o("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)],1),t._v(" "),t._l(t.goodsList,function(e,s){return o("Row",{key:s,staticClass:"goodsList",nativeOn:{click:function(o){t.toGoodsDetail(e)}}},[o("Col",{staticClass:"listContent",attrs:{span:"6"}},[o("img",{attrs:{src:e.goodsPricute}})]),t._v(" "),o("Col",{staticClass:"listContent",attrs:{span:"18"}},[o("p",[t._v(t._s(e.goodsName)+" "+t._s(e.goodsDescribe))]),t._v(" "),o("p",[t._v("¥"+t._s(e.goodsSellingPrice))]),t._v(" "),o("p",[t._v("月分期："+t._s(e.interrestsMoney)+"~"+t._s(e.capitalMoney))])])],1)})],2)},staticRenderFns:[]};var n=o("VU/8")({data:function(){return{goodsType:"0",goodsBrand:"0",goodsMoney:"0",goodsTypeList:[],goodsBranList:[{label:"华为",value:"0"},{label:"苹果",value:"1"}],goodsMoneyList:[{label:"2K~8K",value:"1"}],goodsList:[{title:"荣耀9i 4GB+64GB 幻夜黑 移动联通电信4G前面屏手机 双卡双待",money:2200,monthCount:"¥25 - ¥100"},{title:"荣耀9i 4GB+64GB 幻夜黑 移动联通电信4G前面屏手机 双卡双待",money:2100,monthCount:"¥25 - ¥100"}],province:this.$commonMethods.getLStorage("provinceId")}},created:function(){this.$store.state.footerSelect=3,this.getSelectItems(),this.getGoodsList()},watch:{goodsType:function(){this.getGoodsList()},goodsBrand:function(){this.getGoodsList()},goodsMoney:function(){this.getGoodsList()}},methods:{toGoodsDetail:function(t){this.$router.push({path:"/goods/goodsDetail"})},getSelectItems:function(){var t=this,e={cPlaceCde:this.province};this.$ajaxs.getSelectItems(e).then(function(e){var o=t.$commonMethods.getResultByCode(e.code);!0===o?(t.goodsTypeList=e.data.goodsType.map(function(t){return{label:t.cDictNme,value:t.cDictCde}}),t.goodsMoneyList=e.data.gsPriceSection.map(function(t){return{label:t.cDictNme,value:t.cDictCde}}),t.goodsBranList=e.data.goodsBrand.map(function(t){return{label:t.cDictNme,value:t.cDictCde}})):"none"==o?t.$Message.warning(o):t.$Message.warning(e.message)},function(t){})},getGoodsList:function(){var t=this,e={goodsType:this.goodsType,goodsBrand:this.goodsBrand,gsPriceSection:this.goodsMoney,cPlaceCde:this.province};this.$ajaxs.getGoodsList(e).then(function(e){var o=t.$commonMethods.getResultByCode(e.code);!0===o?t.goodsList=e.data.list:"none"==o?t.$Message.warning(o):t.$Message.warning(e.message)},function(t){})}}},s,!1,function(t){o("C8XI")},"data-v-58a1f80c",null);e.default=n.exports}});
//# sourceMappingURL=38.aa922089eec0f20eb5ea.js.map