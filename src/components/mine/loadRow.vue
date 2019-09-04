<template>
  <div class="loanRow">
    <Row class="headerRow" :class="!arrowPosition?'bottomSpace':''">
      <Col span="14">
        <p>{{loanRow.loanName}}</p>
        <p>共{{loanRow.itemsCount}}笔&nbsp; 合计{{loanRow.perLoanAmt}}元</p>
      </Col>
      <Col span="10" class="detailBtn">
        <p @click="arrowPosition=!arrowPosition">
          查看详情
          <Icon type="md-arrow-dropdown" v-show="arrowPosition"/>
          <Icon type="md-arrow-dropup" v-show="!arrowPosition"/>
        </p>
      </Col>
    </Row>
    <div class="contentRow" v-show="arrowPosition">
      <Table
        :columns="tbHeader"
        :data="loanRow.perData"
        class="loanTable"
        :row-class-name="rowClassName"
        @on-row-click="rowClick"
      >
        <template slot-scope="{ row}" slot="type" class="loan">
          <p class="loanStatus activeType" v-if="row.type==1">{{row.voucStatusNme}}</p>
          <p class="loanStatus" v-else>{{row.voucStatusNme}}</p>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loanRow"],
  data() {
    return {
      arrowPosition: false,
      tbHeader: [
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
          title: "结清状态",
          slot: "type",
          key: "voucStatusNme",
          align: "center"
        }
      ]
    };
  },
  methods: {
    rowClassName(row, index) {
      return "grayRow";
    },
    rowClick(data, index, event) {
      this.$router.push({
        path: "/mine/loanDetail"
      });
    }
  }
};
</script>

<style scoped>
.loanRow {
  background-color: #ffffff;
  margin-top: 10px;
}
.headerRow p:nth-child(1) {
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
}
.headerRow p:nth-child(2) {
  font-size: 13px;
  letter-spacing: 0px;
  color: #999999;
  margin-top: 16.5px;
}
.headerRow {
  margin: 19px 21px;
  padding-top: 19px;
}
.contentRow {
  border-bottom: solid 1px #ededed;
  width: 100%;
}
.bottomSpace {
  padding-bottom: 15px;
}
.detailBtn {
  height: 50.5px;
  display: flex;
  align-items: center;
}
.detailBtn p {
  /* width: 105px; */
  background-color: #ffffff;
  box-shadow: 0px 1px 5px 0px rgba(36, 135, 255, 0.16);
  border-radius: 16px;
  padding: 9.5px 10px;
}
.loanStatus {
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #fb3333;
}
.activeType {
  color: #0eb025;
}
.loanTable {
  position: relative;
  width: 375px;
}
</style>
