<template>
  <div id="app">
    <v-header></v-header>
    <router-view class="mainPart"></router-view>
    <v-footer></v-footer>
  </div>
</template>


<script>
import vHeader from "@C/common/header";
import vFooter from "@C/common/footer";

export default {
  name: "App",
  components: { vHeader, vFooter },
  data() {
    return {};
  },
  watch: {
    "$route.name"(newRouter) {}
  },
  computed: {},
  methods: {}
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
body {
  font-family: "PingFangSC-Medium," Helvetica Neue "," Helvetica "," PingFang SC
    "," Hiragino Sans GB "," Microsoft YaHei "," \5fae\8f6f\96c5\9ed1
    ",Arial,sans-serif" !important;
}
.wordEllipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.mainPart {
  position: relative;
  top: 45px;
}
.lineSpace {
  display: flex;
  width: 100%;
  border: solid rgba(244, 244, 244, 0.3) 0.5px;
}
.lineBottom {
  border-bottom: solid 1px #ededed;
}
.lineBottom5 {
  border-bottom: solid 10px #ededed;
}
.myDot {
  border: solid 2px #ffa72a;
  width: 9px;
  height: 9px;
  border-radius: 9px;
  background: #ffa72a;
  display: inline-block;
  margin: 0 9px;
}
.fixBody {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.horizenCenter {
  margin: 0 auto;
}
/* 模态框 */
.ivu-modal-content {
  border-radius: 14.4px;
}
.ivu-modal-header {
  background-color: #2487ff;
  border-radius: 14.4px 14.4px 0px 0px;
  border: #2487ff;
  text-align: center;
}
.ivu-modal-header p {
  color: #ffffff;
  font-size: 16px;
}
.ivu-modal-body {
  margin: 7.5px;
  background-color: #ededed;
  font-size: 14.1px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #999999;
  height: 252px;
  overflow-y: auto;
}
.ivu-modal-footer {
  border: none;
}
/* 字体 */
.titleFont {
  font-size: 14.1px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #333333;
}
.subTitleFont {
  font-size: 18px;
  line-height: 21.2px;
  letter-spacing: -1.8px;
  color: #111111;
}
.linkFont {
  font-size: 14.1px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #2487ff;
}
.panelWorld {
  background-color: #ffffff;
  box-shadow: 0px 1.5px 10px 0px rgba(153, 153, 153, 0.2);
  border-radius: 8px;
  margin: 14px;
  padding: 18.5px;
}
.panelWorld p {
  text-align: left;
  font-size: 14px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #333333;
}
.titlePanel {
  margin: 14px;
  padding: 18.5px 0;
  width: 347px;
  background-color: #ffffff;
  box-shadow: 0px 1.5px 10px 0px rgba(153, 153, 153, 0.2);
  border-radius: 8px;
}
/* 首页省份选择框 */
.provinceSelect .ivu-select-arrow {
  color: #ffffff;
}
.provinceSelect .ivu-select-selected-value {
  font-size: 15px !important;
  letter-spacing: 0px;
  color: #ffffff;
}
.provinceSelect .ivu-select-selection {
  background-color: #2487ff;
  border: none;
}
.verticalMiddle {
  display: flex;
  align-items: center;
}
.horizenCenter {
  display: flex;
  justify-content: center;
}
/* 滑动条样式 */
.trialSlider .ivu-slider-button-wrap {
  width: 13.5px;
  height: 13.5px;
  top: -8px;
}
.trialSlider .ivu-slider-button {
  width: 27px;
  height: 27px;
  border: 2px solid #ffffff;
  box-shadow: 0px 2px 10.5px 0px rgba(0, 0, 0, 0.12);
}
.trialSlider .ivu-slider-bar,
.trialSlider .ivu-slider-wrap {
  height: 14px;
  border-radius: 7px;
}
.trialSlider .ivu-slider-bar {
  background-image: linear-gradient(
      78deg,
      #57c9fe 0%,
      #3ba4ff 50%,
      #2487ff 100%
    ),
    linear-gradient(#ffbc3c, #ffbc3c) !important;
  background-blend-mode: normal, normal;
}
.trialSlider .ivu-slider-wrap {
  background-image: linear-gradient(
      180deg,
      rgba(74, 187, 255, 0.28) 0%,
      rgba(63, 145, 254, 0.28) 40%,
      rgba(52, 103, 252, 0.28) 100%
    ),
    linear-gradient(#f0f0f0, #f0f0f0) !important;
}
.trialSlider .ivu-slider-button:hover {
  transform: scale(1);
}
/* 教育下拉框 */
.selectEducation .ivu-select-selection,
.selectEducation .ivu-select-selected-value {
  height: 32px !important;
  line-height: 32px !important;
  border-radius: 16px !important;
  text-align: center;
  border: #ffff !important;
  box-shadow: 0px 1px 5px 0px rgba(36, 135, 255, 0.16);
}
/*首页走马灯*/
.homeCarousel li button {
  width: 6.5px;
  height: 6px;
  background-color: #2487ff;
  border-radius: 3px;
}
.homeCarousel li.ivu-carousel-active > button {
  width: 18px;
}
/* 商品详情参数选择 */
.buyDrawer .ivu-drawer-right {
  width: 100% !important;
  height: 375px !important;
  bottom: 0 !important;
  top: auto;
}
.drawerCloseImg img {
  width: 24.5px;
  height: 24.5px;
}
/* 上传组件 */
.uploadComponent {
  height: 100%;
}
.uploadComponent .ivu-upload-drag {
  border: none;
  background: none;
}
/* form样式 */
.formItem {
  border-bottom: solid 1px #ededed;
}
.submitForm .ivu-input {
  border: none;
  font-size: 13px;
  letter-spacing: 0px;
  color: #999999;
}
.submitForm .ivu-input:hover,
.submitForm .ivu-form-item-error .ivu-input:focus,
.submitForm .ivu-input:focus {
  border: none;
  box-shadow: 0 0 0 0rem rgba(237, 64, 20, 0.2);
}
.submitForm .ivu-input-wrapper {
  height: 42px;
}
/* 输入样式 */
.formItem {
  height: 43px;
}
.clearInfo {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 7.5px;
  right: 0px;
}
.confirmModify {
  width: 275px;
  height: 44px;
  border-radius: 5px;
  border: none;
  margin-top: 58px;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.9px;
  color: #ffffff !important;
}
.getCode {
  position: absolute;
  right: 0;
  top: 0px;
  font-size: 13px;
  letter-spacing: 0px;
  color: #ffffff;
}
/* tab的样式 */
.modifyTabs {
  height: 47.5px;
  display: flex;
  align-items: center;
}
.modifyTabs .tabItem {
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #999999;
}
.modifyTabs .activeItem {
  color: #333333;
}
.modifyTabs .tabItem p {
  display: flex;
  align-items: center;
}
.modifyTabs .tabBottom {
  height: 3px;
  box-sizing: border-box;
  border-radius: 1.5px;
  background-color: #2d8cf0;
  position: absolute;
  left: 0;
  bottom: 1px;
  z-index: 1;
  transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  visibility: visible;
  width: 94.5px;
  transform: translate3d(50%, 0px, 0px);
}
.modifyTabs .activeItemBttom {
  transform: translate3d(250%, 0px, 0px);
}
/* 我的贷款详情表格 */
.loanTable,
.loanTable .ivu-table-wrapper,
.loanTable tr,
.loanTable td {
  border: none !important;
}
.loanTable .ivu-table-header span {
  font-size: 13px;
  letter-spacing: 0px;
  color: #333333;
  font-weight: normal;
}
.loanTable .ivu-table-tbody span {
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #999999;
}
.ivu-table tbody .ivu-table-cell {
  background-color: #ededed;
  padding: 5.5px 5px;
}
.loanTable thead th {
  background: #ffffff;
  border-top: solid 1px #ededed;
}
.loanTable thead .ivu-table-cell-with-selection {
  display: none;
}
.loanTable td .ivu-checkbox-inner {
  border-radius: 50%;
}
.grayBackground {
  background: #f5f5f5;
  position: fixed;
  bottom: 0;
  top: 1.2rem;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
/* 贷款文字内容 */
.selectLoanP {
  margin-bottom: 20px;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #fb3333;
}
.selectLoanP b:nth-child(1) {
  font-size: 14px;
  font-weight: normal;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #333333;
}
.selectLoanP b:nth-child(2) {
  font-size: 13px;
  font-weight: normal;
  color: #2487ff;
  float: right;
}
.selectLoanP i {
  font-size: 13px;
  font-style: normal;
  color: #999999;
}
.selectLoanP .info {
  float: right;
}
/* 合同行 */
.contractText {
  padding: 20.5px 0px;
}
.contractText .title {
  font-size: 16.1px;
}
.contractData {
  padding: 16px;
}
.contractData p {
  font-size: 14.1px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #2487ff;
}
.contractData img {
  width: 7.5px;
  height: 12.5px;
}
.summaryTitle {
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
}
.LoanSetectSummary {
  padding: 39px 0px;
  background: #ffffff;
  text-align: center;
}
.selectSum {
  font-size: 13px;
  letter-spacing: 0px;
  color: #999999;
  margin-top: 16px;
}
.activeFont {
  color: #2487ff;
}
/* 还款明细 */
.detailTabs .ivu-tabs-bar {
  margin-bottom: 0px;
}
.detailTabs .ivu-tabs-tabpane {
  padding: 10px;
  background-color: #f4f4f4;
  overflow-y: scroll;
  overflow-x: hidden;
}
.detailTabs .ivu-tabs-content-animated {
  position: fixed;
  bottom: 0px;
  width: 100%;
  top: 335px;
  z-index: -1;
}
/* 提示泡泡 */
.headerPopTips .ivu-poptip-body {
  padding: 0px;
}
.headerPopTips .ivu-poptip-body-content p {
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #333333;
  padding: 8.5px 0px;
}
/* 意见输入框 */
.questInput .ivu-input {
  border: none;
  font-size: 14px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  height: 37.5px;
}
.agreeBtn {
  height: 44.5px;
  background-color: rgba(153, 153, 153, 0.5);
  border-radius: 22.1px;
  font-size: 18.1px;
  color: #ffffff;
}
.activeAgreeBtn {
  background-color: #2487ff;
  color: #ffffff;
  opacity: 1;
  border: none;
}
.activeAgreeBtn .ivu-btn.active,
.activeAgreeBtn .ivu-btn:active,
.activeAgreeBtn .ivu-btn:hover,
.activeAgreeBtn .ivu-btn:not([disabled]):hover,
.activeAgreeBtn .ivu-btn:not([disabled]):active {
  background-color: #2487ff !important;
  color: #ffffff;
}
.isSending {
  background-color: #999999 !important;
}
.isSending .ivu-btn.active,
.isSending .ivu-btn:active,
.isSending .ivu-btn:hover,
.isSending .ivu-btn:not([disabled]):hover,
.isSending .ivu-btn:not([disabled]):active {
  background-color: #2487ff !important;
  color: #ffffff;
}
</style>
