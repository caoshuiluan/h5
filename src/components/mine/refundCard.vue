<template>
  <div class="refund">
    <p class="refundCHeader lineBottom">
      <span class="rcHeaderLeft">
        <b>应还款日：</b>
        <b>{{refundData.shouldPayDay}}</b>
      </span>
      <span class="rcHeaderRight">
        <b>银行交易日：</b>
        <b>{{refundData.bankTradeDay}}</b>
      </span>
    </p>
    <Row class="refundCContent">
      <img class="cornerImg" src="@img/normal.png" v-if="refundData.repayStatus==1">
      <img class="cornerImg" src="@img/ovverTime2.png" v-if="refundData.repayStatus==3">
      <img class="cornerImg" src="@img/overTime.png" v-if="refundData.repayStatus==2">
      <Col span="8">
        <p>应还金额：</p>
        <p>￥{{refundData.shouldAmount}}</p>
      </Col>
      <Col span="8">
        <p>实还金额：</p>
        <p>￥{{refundData.actualAmount}}</p>
      </Col>
      <Col span="8">
        <p>逾期金额：</p>
        <p>￥{{refundData.overdateAmount}}</p>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  props: ["refundData"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.refund {
  margin-top: 11px;
  background-color: #ffffff;
}
.refundCHeader {
  padding: 16px 9.5px;
  display: flow-root;
}
.rcHeaderLeft {
  float: left;
}
.rcHeaderRight {
  float: right;
}
.rcHeaderLeft b:nth-child(1),
.rcHeaderRight b:nth-child(1) {
  font-size: 14px;
  font-weight: normal;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #333333;
}
.rcHeaderLeft b:nth-child(2),
.rcHeaderRight b:nth-child(2) {
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.3px;
  color: #999999;
  padding-right: 20px;
}
.refundCContent {
  text-align: center;
  padding-top: 14px;
  padding-bottom: 13.5px;
}
.cornerImg {
  width: 45.5px;
  height: 43.5px;
  position: absolute;
  top: -54px;
  right: 0;
}
</style>
