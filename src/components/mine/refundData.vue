<template>
  <div class="refund">
    <div class="LoanSetectSummary">
      <p class="summaryTitle">
        您本月需还款：
        <b class="activeFont">¥{{refundData.voucAmtTot}}</b>
      </p>
      <p class="selectSum">
        您最近一个还款日：
        <b class="activeFont">{{refundData.payDay}}</b>
      </p>
    </div>
    <div class="contentRow">
      <Table
        :columns="tbHeaders"
        :data="refundData.loans"
        class="loanTable"
        @on-row-click="rowClick"
      ></Table>
    </div>
    <Row class="listSummary">
      <Col span="6" class="listSumItem">
        <p>累计</p>
      </Col>
      <Col span="6" class="listSumItem">
        <p>¥{{refundData.voucAmtTot}}</p>
      </Col>
      <Col span="6" class="listSumItem">
        <p>¥{{refundData.delayPrcpAmountTot}}</p>
      </Col>
      <Col span="6" class="listSumItem">
        <p>¥{{refundData.overdateAmountTot}}</p>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  props: ["refundData"],
  data() {
    return {
      tbHeaders: [
        {
          title: "放款时间",
          key: "voucTm",
          align: "center"
        },
        {
          title: "放款金额",
          key: "voucAmt",
          align: "center"
        },
        {
          title: "剩余本金",
          key: "delayPrcpAmount",
          align: "center"
        },
        {
          title: "欠款金额",
          key: "overdateAmount",
          align: "center"
        }
      ]
    };
  },
  methods: {
    rowClick(data, index, event) {
      // console.log(data);
      this.$router.push({
        path: "/mine/refundDetail?cId=" + data.cId + "&voucNo=" + data.voucNo
      });
    }
  }
};
</script>

<style scoped>
.refund {
  margin-top: 11px;
  background-color: #ffffff;
}
.LoanSetectSummary {
  padding: 19px 0px;
}
.listSummary {
  background-color: #ffffff;
  box-shadow: 0px 1.5px 10px 0px rgba(153, 153, 153, 0.2);
  border-radius: 5px;
  margin-top: 35px;
  border-top: solid 1px #ededed;
}
.listSumItem {
  padding: 24.5px 10px;
  text-align: center;
  border-bottom: solid 1px #ededed;
}
.listSumItem {
  border-right: solid 1px #ededed;
  margin-bottom: 50px;
}
</style>
