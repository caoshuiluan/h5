<template>
  <div class="container">
    <div class="Information-bar">
      <div class="page">贷款</div>
      <div class="Order-display">
        <div class="order-info">
          <span class="Order-line">您当前订单：1231231283812</span>
          <span class="Order-number">
            <input type="button" value="退回修改" class="pay-btn" @click="Regression">
            <span class="arrow-right arrow-box">
              <b class="right">
                <i class="right-arrow1"></i>
                <i class="right-arrow2"></i>
              </b>
            </span>
          </span>

          <div class="Loan-type">生活费贷款</div>
        </div>
        <Row class="cardRow">
          <Col span="8" class="cardItem">
            <p class="Loan-day">申请日期</p>
            <p class="Loan-date">2019.02.15</p>
          </Col>
          <Col span="8" class="cardItem">
            <p class="payAmount">申请金额</p>
            <p class="payAmountAll">¥2000</p>
          </Col>
          <Col span="8" class="cardItem1">
            <p class="repayment">退回原因</p>
            <p class="payDate">影像资料不清晰</p>
          </Col>
        </Row>
      </div>
      <div class="btn-group">
        <input type="button" value="更多贷款记录" @click="calculationMore" class="My-repayment-more">
        <input type="button" value="我的还款" @click="calculationTo" class="My-repayment">
      </div>
      <div class="contactPage">
        <p class="contactTitle">
          <b class="guessTitle">您可能需要</b>
          <b class="changeTitle" @click.native="changeQuestion()">
            换一换
            <img src="../../assets/images/change.png" alt>
          </b>
        </p>
        <div>
          <p
            class="questions lineBottom"
            v-for="(quest,index) in questionList"
            :key="index"
          >{{quest.content}}</p>
        </div>
      </div>
      <div class="pay-btm">
        <div class="Tips">——中国邮政储蓄银行提供贷款·华安保险全额承保"——</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calculationMore: "",
      Regression: "",
      calculationTo: "",
      questionList: [
        { content: "可以延期还款吗？" },
        { content: "怎么提前还款？" },
        { content: "提前还款利息怎么算？" },
        { content: "逾期会有什么影响？" },
        { content: "如何申请商品分期贷款？" }
      ]
    };
  },
  methods: {
    //更换问题
    changeQuestion() {}
  },
  Regression() {}
};
</script>

<style scoped>
/* 头部以下蓝色部分 */
.Information-bar {
  width: 375px;
  height: 207px;
  background-image: url("../../assets/images/headerBack.png");
  background-size: 100%;
  margin-top: -45px;
}
.page {
  width: 375px;
  height: 76px;
  text-align: center;
  line-height: 76px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  letter-spacing: 0px;
  color: #ffffff;
}

/* 头部右边返回修改 */
.pay-btn {
  width: 101.5px;
  height: 34px;
  background-color: #ffffff;
  border-radius: 17px 0px 0px 17px;
  border: none;
  float: right;
  font-family: PingFangSC-Semibold;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #2487ff;
}
/* 我的还款下面提示语 */
.Tips {
  font-family: PingFangSC-Regular;
  font-size: 13px;
  letter-spacing: 0px;
  color: #999999;
  opacity: 0.5;
  padding-top: 25px;
}

.Order-display {
  margin-left: 10.5px;
}
.contactTitle {
  padding: 16.5px 13.5px;
}
.guessTitle {
  font-size: 16px;
  font-weight: normal;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
  text-align: left;
}
.changeTitle {
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #2487ff;
  float: right;
  display: flex;
  align-items: center;
}
.changeTitle img {
  width: 15px;
  height: 13px;
}
.questions {
  padding: 11px 15px;
  font-size: 14px;
  font-weight: normal;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #999999;
}
.cardItem {
  width: 124px;
  height: 60px;
  border: none;
  border-right: 1px solid #ededed;
  float: left;
  text-align: center;
  line-height: 60px;
}
.cardItem1 {
  width: 124px;
  height: 60px;
  border: none;
  float: left;
  text-align: center;
  line-height: 60px;
}

.cardRow {
  position: absolute;
  width: 375px;
  height: 60px;
  margin-top: 32px;
  border: none;
  overflow: hidden;
}

.pay-btm {
  width: 375px;
  height: 71px;
  background-color: #f4f4f4;
  text-align: center;
}

/* 画头部右边箭头 */
.box {
  width: 100px;
  height: 500px;
  margin: 0 auto;
  background: white;
}

.arrow-box {
  width: 30px;
  height: 30px;
  margin: 20px auto;
  position: relative;
}
/*右箭头*/

.right {
  width: 20px;
  height: 20px;
  position: absolute;
  right: -162px;
  top: 0px;
}

.right-arrow1,
.right-arrow2 {
  width: 0;
  height: 0;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  border-top: 8px transparent dashed;
  border-right: 12px transparent dashed;
  border-bottom: 8px transparent dashed;
  border-left: 8px white solid;
  overflow: hidden;
}

.right-arrow1 {
  left: 1px;
  border-left: 10px #2487ff solid;
}

.right-arrow2 {
  border-left: 10px white solid;
}
.btn-group {
  width: 375px;
  height: 71px;
  background-color: #f4f4f4;
  margin-top: 92px;
  text-align: center;
  line-height: 76px;
  overflow: hidden;
}
.My-repayment-more {
  width: 130px;
  height: 44px;
  background-color: #2487ff;
  border-radius: 8px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  line-height: 44px;
  letter-spacing: 1.8px;
  color: #ffffff;
  border: none;
  margin-right: 43px;
}
.My-repayment {
  width: 113px;
  height: 44px;
  background-color: #2487ff;
  border-radius: 8px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  line-height: 44px;
  letter-spacing: 1.8px;
  color: #ffffff;
  border: none;
}
.Loan-type,
.Order-line {
  height: 30px;
  font-family: PingFangSC-Medium;
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 0px;
  color: #ffffff;
}
.order-info {
  height: 40px;
}
/* 放款日期、放款金额、还款日期 */
.Loan-day,
.payAmount,
.repayment {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.5;
}
.Loan-date,
.payAmountAll,
.payDate {
  font-family: PingFangSC-Semibold;
  font-size: 15px;
  line-height: 33.8px;
  letter-spacing: 0px;
  color: #ffffff;
}
</style>
