<template>
  <div class="grayBackground">
    <div class="infoItem">
      <p class="rowTitle">基础信息</p>
      <table class="detailTable">
        <tbody>
          <tr>
            <td>借款用途</td>
            <td>生活费</td>
          </tr>
          <tr>
            <td>放款时间</td>
            <td>2018.09.05</td>
          </tr>
          <tr>
            <td>放款金额(元)</td>
            <td>¥2000</td>
          </tr>
          <tr>
            <td>还款日</td>
            <td>每月20号</td>
          </tr>
          <tr>
            <td>首次还款日</td>
            <td>2018.09.20</td>
          </tr>
          <tr>
            <td>预估月还息额(元)</td>
            <td>¥6-8</td>
          </tr>
          <tr>
            <td>首次还本日</td>
            <td>2023.07.20</td>
          </tr>
          <tr>
            <td>预估月还本付息额(元)</td>
            <td>¥30-35</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="infoItem">
      <p class="rowTitle">合同文本</p>
      <Row v-for="(contract,index) in contractList" :key="index" class="contractData lineBottom">
        <Col span="22">
          <p>{{contract.name}}</p>
        </Col>
        <Col span="2" class="backPart">
          <img src="../../assets/images/backGray.png">
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contractList: [
        { name: "《借款合同》" },
        { name: "《申请表》" },
        { name: "《投保单》" }
      ]
    };
  }
};
</script>

<style scoped>
.rowTitle {
  border-left: solid 3.5px #2487ff;
  padding-left: 8px;
  font-size: 16px;
  font-weight: normal;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
}
.infoItem {
  background-color: #ffffff;
  padding: 16.5px 15px;
  margin-top: 10px;
}
.detailTable {
  background-color: #f8f8f8;
  margin: 14px 0px;
  width: 100%;
  text-align: center;
}
.detailTable tr td {
  border-bottom: #ededed solid 1px;
  padding: 12px 0px;
}
.detailTable tr:last-child td {
  border-bottom: none;
}
.detailTable tr td:nth-child(1) {
  text-align: left;
  padding-left: 16.5px;
  font-size: 13px;
  letter-spacing: 0px;
  color: #333333;
}
.detailTable tr td:nth-child(2) {
  text-align: right;
  padding-right: 16.5px;
  font-size: 13px;
  letter-spacing: 0px;
  color: #999999;
  border-left: #ededed solid 1px;
}
</style>
