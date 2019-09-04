<template>
  <div class="loanCard">
    <img class="cornerImg" v-if="cardData.cornerStatus==2" src="@img/lending.png">
    <img class="cornerImg" v-if="cardData.cornerStatus==1" src="@img/refuse.png">
    <img class="cornerImg" v-if="cardData.cornerStatus==3" src="@img/cancleCorner.png">
    <!-- 删除完成状态2019/3/22 -->
    <!-- <img class="cornerImg" v-if="cardData.type==4" src="@img/completed.png"> -->
    <p class="lineBottom lCardHeader">
      <b>{{cardData.loanName}}</b>
      <b v-if="cardData.rejectMsg">{{cardData.rejectMsg}}</b>
    </p>
    <Row class="lCardContent">
      <Col span="18">
        <p class="subTitle">
          申请日期：
          <b>{{cardData.applyDate}}</b>
        </p>
        <p class="subTitle">
          申请金额：
          <b>￥{{cardData.applyAmt}}</b>
        </p>
        <p class="subTitle">{{cardData.bankName}}</p>
      </Col>
      <Col span="6" class="applyBtn">
        <Button
          class="activeAgreeBtn cardBtn"
          size="large"
          v-if="cardData.type==4"
          @click="toPage(1)"
        >查看物流</Button>
        <Button class="activeAgreeBtn cardBtn" size="large" v-else>继续申请</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  props: ["cardData"],
  data() {
    return {
      
    };
  },
  methods: {
    toPage(num) {
      if (num == 1) {
        this.$router.push({
          path: "/mine/logistics"
        });
      }else{}
    }
  }
};
</script>

<style scoped>
.loanCard {
  height: 166.5px;
  background-color: #ffffff;
  box-shadow: 0px 1.5px 10px 0px rgba(153, 153, 153, 0.2);
  border-radius: 5px;
}
.lCardHeader {
  padding: 11px 15px;
}
.lCardContent {
  padding: 2px 27px;
}
.lCardHeader b:nth-child(1) {
  border-left: solid 3.5px #2487ff;
  padding-left: 8px;
  font-size: 16px;
  font-weight: normal;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
}
.lCardHeader b:nth-child(2) {
  border-radius: 2.5px;
  border: solid 1px #2487ff;
  font-size: 13px;
  letter-spacing: 0px;
  color: #2487ff;
  padding: 4px 9.5px;
  margin-left: 9px;
}
.lCardContent p {
  margin-top: 14.5px;
}
.subTitle {
  font-size: 14px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #333333;
}

.subTitle b {
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #999999;
}
.applyBtn {
  height: 106.5px;
  display: flex;
  align-items: center;
}
.cornerImg {
  width: 45.5px;
  height: 43.5px;
  float: right;
}
.cardBtn {
  width: 85px;
  background-color: #2487ff;
  border-radius: 15.8px;
}
</style>
