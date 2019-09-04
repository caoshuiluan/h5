<template>
 <div>
    <div class="head">
    <div class="page">贷款</div>
       <div class="order-display">华安保险已为您承保借款金额累计：12000元</div>
      <ul class="threeParts">
        <li>
          <p class="left-one">最近还款日</p>
          <p class="right-one">2019.08.15</p>
        </li>
        <li>
          <p class="left-two">需还款额</p>
          <p class="right-two">¥2000</p>
        </li>
        <li>
          <p class="left-three">共计贷款</p>
          <p class="right-three">10笔</p>
        </li>
      </ul>
    </div> 
      <div class="Letter-prompt">请注意按时还款，逾期超过1天将会按照规定上报征信</div> 
    <div class="btn-group">
      <input type="button" value="我的还款" @click="calculationMore" class="My-repayment">
      <input type="button" value="提前结清" @click="calculationTo" class="My-repayment-clean">
      <input type="button" value="延长还息期" @click="calculationTo" class="My-repayment-longtime">
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
  Regression() {},
  calculationMore() {}
};
</script>

<style scoped>
.head {
  width: 375px;
  height: 189px;
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
.order-display {
  height: 23px;
	font-family: PingFangSC-Medium;
	font-size: 15px;
	line-height: 15px;
	letter-spacing: 0px;
	color: #ffffff;
  margin-left:10.5px;
  
}
/* 头部下红色提示字 */
.Letter-prompt {
  width: 375px;
	height: 26px;
  line-height: 26px;
	background-color: #2487ff;
	opacity: 0.5;
	font-family: PingFangSC-Regular;
	font-size: 13px;
	letter-spacing: 0px;
	color: #fb3333;
  padding-left:21px;

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
.left-one,
.left-two,
.left-three {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  line-height: 16.9px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.5;
}
.right-one,
.right-two,
.right-three {
  font-family: PingFangSC-Semibold;
  font-size: 15px;
  line-height: 16.9px;
  letter-spacing: 0px;
  color: #ffffff;
}
.threeParts {
  display: inline;
}
.threeParts li {
  display: inline-block;
  width: 32%;
  padding: 14px 1%;
  text-align: center;
  margin-top: 35px;
}
.threeParts li:nth-child(1),
.threeParts li:nth-child(2) {
  border-right: 1px solid rgba(244, 244, 244, 0.3);
}
.threeParts p {
  font-size: 12.1px;
  line-height: 16.9px;
  letter-spacing: 0px;
  color: #ffffff;
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
  opacity: 0.5;
}
.cardItem1 {
  width: 124px;
  height: 60px;
  border: none;
  float: left;
  text-align: center;
  line-height: 60px;
  opacity: 0.5;
}

.cardRow {
  position: absolute;
  width: 375px;
  height: 60px;
  margin-top: 42px;
  border: none;
  overflow: hidden;
}
.pay-btm {
  width: 375px;
  height: 79px;
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


.btn-group {
  width: 375px;
  height: 74px;
  background-color: #f4f4f4;
  text-align: center;
  line-height: 78px;
  overflow: hidden;
}
.My-repayment {
  width: 113px;
  height: 44px;
  background-color: #2487ff;
  border-radius: 4px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.9px;
  color: #ffffff;
  border: none;
}
.My-repayment-clean {
  width: 113px;
  height: 44px;
  background-color: #2487ff;
  border-radius: 4px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.9px;
  color: #ffffff;
  border: none;
  margin: 0px 6px 0px 6px;
}
.My-repayment-longtime {
  width: 113px;
  height: 44px;
  background-color: #2487ff;
  border-radius: 4px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.9px;
  color: #ffffff;
  border: none;
}
.headerRow{
    width: 355px;
    overflow:hidden ;
    background-color: #ffffff;
	  border-radius: 5px;
    vertical-align: middle;
    margin:10px;
    height: 58px;   
    /* line-height: 58px;   */
    padding: 12px 10px;
}
.Headline{
    vertical-align: middle;
    margin-left:10px;
}
.Headline>div {
  display: inline-block;
  vertical-align: top;
}
/* 下拉框头部宽高 */
.head{
    width: 355px;
	  height: 35px;
    border-bottom: 1px solid gainsboro;
    line-height: 35px;
    position: relative;
}
</style>
