<template>
  <div class="grayBackground">
    <Row class="logisticsHeader">
      <Col span="6">
        <img class="smallImg" src="@img/goodsPic.png">
      </Col>
      <Col span="18">
        <p>{{logisticsList.status}}</p>
        <p>{{logisticsList.delivery}}:{{logisticsList.deliveryNo}}</p>
        <p>客服电话:{{logisticsList.serviceNum}}</p>
        <p>{{logisticsList.name}}:{{logisticsList.phone}}</p>
      </Col>
    </Row>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logisticsList: {
        status: "已签收",
        delivery: "顺丰快递",
        deliveryNo: "4546448558888",
        serviceNum: "95500",
        name: "张三",
        phone: "13587232020",
        isFinished: 1,
        list: []
      }
    };
  }
};
</script>

<style scoped>
.logisticsHeader {
  background-color: #ffffff;
  width: 100%;
  padding: 15px;
}
.smallImg {
  width: 64px;
  height: 64px;
}
</style>
