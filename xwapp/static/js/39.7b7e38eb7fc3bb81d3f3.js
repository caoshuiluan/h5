webpackJsonp([39],{H4Hf:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={data:function(){return{noticeModal:!0,fileList:[{title:"《华安商业助学贷款履约保证保险投保单》"},{title:"《华安征信授权书》"},{title:"《借款合同》"},{title:"《中国某某银行征信授权书》"}],isConfirm:!1,counter:5,canClick:!0}},created:function(){this.countDown()},methods:{agreeNotice:function(){this.noticeModal=!1},countDown:function(){var t=this;if(this.canClick){this.canClick=!1;var i=window.setInterval(function(){t.counter--,t.counter<0&&(window.clearInterval(i),t.counter=5,t.canClick=!0)},1e3)}}}},s={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("p",{staticClass:"tipsWord"},[t._v("请看以下文件")]),t._v(" "),t._l(t.fileList,function(i,e){return n("div",{key:e},[n("p",{staticClass:"fileTitle"},[n("router-link",{attrs:{to:"/index"}},[t._v(t._s(i.title))])],1),t._v(" "),n("hr",{staticClass:"lineSpace"})])}),t._v(" "),n("p",{staticClass:"readSelect",on:{click:function(i){t.isConfirm=!t.isConfirm}}},[n("i",{staticClass:"confirmIcon",class:t.isConfirm?"confirmActive":""}),t._v(" 我已知悉并阅读上述文件\n  ")]),t._v(" "),n("div",{staticClass:"btns"},[n("Button",{staticClass:"inActiveBtn",class:t.isConfirm?"activeBtn":"",attrs:{size:"large",type:"default"}},[t._v("暂不签署")]),t._v(" "),n("Button",{staticClass:"inActiveBtn",class:t.isConfirm?"activeBtn":"",attrs:{size:"large",type:"default"}},[t._v("同意签署")])],1),t._v(" "),n("Modal",{attrs:{width:"320"},model:{value:t.noticeModal,callback:function(i){t.noticeModal=i},expression:"noticeModal"}},[n("p",{attrs:{slot:"header"},slot:"header"},[t._v("电子签署重要事项告知")]),t._v(" "),n("span",{staticClass:"noticeContent"},[n("p",[t._v("   《华安商业助学贷款履约保证保险投保单》 、《华安征信授权书》、《借款合同》、《中国某某银行征信授权书》")]),t._v(" "),n("p",[t._v("   《华安商业助学贷款履约保证保险投保单》 、《华安征信授权书》、《借款合同》、《中国某某银行征信授权书》")]),t._v(" "),n("p",[t._v("   《华安商业助学贷款履约保证保险投保单》 、《华安征信授权书》、《借款合同》、《中国某某银行征信授权书》")]),t._v(" "),n("p",[t._v("   《华安商业助学贷款履约保证保险投保单》 、《华安征信授权书》、《借款合同》、《中国某某银行征信授权书》")]),t._v(" "),n("p",[t._v("   《华安商业助学贷款履约保证保险投保单》 、《华安征信授权书》、《借款合同》、《中国某某银行征信授权书》")]),t._v(" "),n("p",[t._v("   《华安商业助学贷款履约保证保险投保单》 、《华安征信授权书》、《借款合同》、《中国某某银行征信授权书》")])]),t._v(" "),n("div",{staticClass:"noticeFooter",attrs:{slot:"footer"},slot:"footer"},[n("p",{staticClass:"titleFont"},[t._v("将要签署的法律文件")]),t._v(" "),n("p",{staticClass:"lawFiles linkFont"},t._l(t.fileList,function(i,e){return n("span",{key:e},[t._v(t._s(i.title))])})),t._v(" "),n("Button",{staticClass:"agreeBtn",class:t.canClick?"activeAgreeBtn":"",attrs:{size:"large",long:"",disabled:!t.canClick},on:{click:t.agreeNotice}},[t._v("\n        我已阅读并同意\n        "),t.canClick?t._e():n("span",[t._v("\n          (\n          "),n("b",[t._v(t._s(t.counter)+"S")]),t._v("\n          )\n        ")]),t._v("，去签署\n      ")])],1)])],2)},staticRenderFns:[]};var a=n("VU/8")(e,s,!1,function(t){n("pqKr")},"data-v-569d02d0",null);i.default=a.exports},pqKr:function(t,i){}});
//# sourceMappingURL=39.7b7e38eb7fc3bb81d3f3.js.map