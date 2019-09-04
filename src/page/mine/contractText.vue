<template>
  <div class="contractText">
    <p class="title">合同文本</p>
    <Row v-for="(contract,index) in contractList" :key="index" class="contractData lineBottom">
      <Col span="22">
        <p>{{contract.name}}</p>
      </Col>
      <Col span="2" class="backPart">
        <img src="../../assets/images/backGray.png">
      </Col>
    </Row>
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
.title {
  margin: 0px 16px;
}

.backPart {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
