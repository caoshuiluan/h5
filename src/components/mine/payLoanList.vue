<template>
  <div class="loanList">
    <div class="LoanSetectSummary">
      <p class="summaryTitle">请选择需要结清的贷款(可多选)</p>
      <p class="selectSum" v-show="summaryData.count">
        预计还款金额：
        <b class="activeFont">¥{{summaryData.cost}}</b>&nbsp;笔数：
        <b class="activeFont">{{summaryData.count}}笔</b>
      </p>
    </div>
    <div class="contentRow">
      <Table
        :columns="tbHeaders"
        :data="payLoanList.items"
        class="loanTable"
        @on-selection-change="changeSelect"
      >
      </Table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["payLoanList"],
  data() {
    return {
      summaryData: { count: 0, cost: 0 },
      tbHeaders: [
        {
          type: "selection",
          width: 20,
          align: "center"
        },
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
      ],
      selectRows: []
    };
  },
  watch:{
    selectRows(val){
      console.log(val);
      this.$emit('selectRowsFromChild',val)
    }
  },
  methods: {
    changeSelect(val) {
      this.selectRows = val;
      this.summaryData.count = val.length;
      if (val.length > 0) {
        let selectSum = 0;
        val.forEach(e => {
          selectSum += parseInt(e.overdateAmount);
        });
        this.summaryData.cost = selectSum;
      }
    }
  }
};
</script>

<style scoped>
</style>
