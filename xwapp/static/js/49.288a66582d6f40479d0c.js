webpackJsonp([49],{VHpD:function(t,e){},anj9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contractFont"},[e("p",{domProps:{innerHTML:this._s(this.data)}},[this._v(this._s(this.data))])])},staticRenderFns:[]};var s=n("VU/8")({data:function(){return{data:"您的账户已于2018年02月27日还款成功，还款金额12000元，当前剩余可借额度为10000元",type:this.$route.query.type}},created:function(){1==this.type&&this.getUserContact()},methods:{getUserContact:function(){var t=this;this.$ajaxs.getSysInfo({infoType:1}).then(function(e){var n=t.$commonMethods.getResultByCode(e.code);!0===n?t.data=e.data.accountProtocol:"none"==n?t.$Message.warning(n):t.$Message.warning(e.message)},function(t){})}}},a,!1,function(t){n("VHpD")},"data-v-10d0968f",null);e.default=s.exports}});
//# sourceMappingURL=49.288a66582d6f40479d0c.js.map