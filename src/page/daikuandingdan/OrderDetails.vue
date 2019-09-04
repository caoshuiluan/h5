<template>
  <div class="container">
    <div class="Information-bar">
        <div class="page">贷款</div>
      <div class="Order-display">
        <div class="order-info">
          <span class="Order">您当前订单：1231231283812</span>
          <span class="Order-number">
            <input type="button" value="已放款" class="pay-btn">
          </span>
        </div>
        <div class="Loan-type">生活费贷款</div>
        <div class="Loan-phase">
          <span class="Repayment-Period">您当前处于还息期，每月还款额约：</span>
          <span>10元/月</span>
        </div>
      </div>
      <ul class="threeParts">
        <li>
          <p class="left-one">放款日期</p>
          <p class="right-one">2019.08.15</p>
        </li>
        <li>
          <p class="left-two">放款金额</p>
          <p class="right-two">¥2000</p>
        </li>
        <li>
          <p class="left-three">还款日</p>
          <p class="right-three">每月5号</p>
        </li>
      </ul>
    </div>
    <div class="payment-coupon">请注意按时还款，逾期超过1天将会按照规定上报征.</div>
    <div class="btn-group">
      <input type="button" value="更多贷款记录" @click="calculationMore" class="My-repayment-more">
      <input type="button" value="我的还款" @click="calculationTo" class="My-repayment">
      <div class="you-need">您可能需要(您可以申请):</div>
    </div>

    <div class="loanRow">
      <Row class="headerRow" :class="!arrowPosition?'bottomSpace':''">
        <Col span="14" class="Headline">
          <div style="float: left; height: 100%">
            <span>
              <img src="../../assets/images/buildingHome.png" alt class="left-img">
            </span>
          </div>
          <div style="float: left;padding-top: 7%;">
            <p class="project">
              <b>学费</b>
            </p>
            <p class="introduce">{{Tuition}}</p>
            <div class="icon-right">
                  <Icon @click="isShowBuldingHome=!isShowBuldingHome"  type="md-arrow-dropdown" v-show="!isShowBuldingHome"/>
                </div>
          </div>
        </Col>
        <Col span="9" class="detailBtn" style="float: right;">
          <p @click="arrowPosition=!arrowPosition" class="btn-Arrow">
            <Icon type="md-arrow-dropdown" v-show="arrowPosition"/>
            <Icon type="md-arrow-dropup" v-show="!arrowPosition"/>
          </p>
        </Col>
      </Row>
    </div>
    <div class="down-box" v-show="arrowPosition">
      <div class="head">
        <i>
          <img src="../../assets/images/zhuzhuang2x.png" alt class="img-left">
        </i>
        <span class="Title">
          <b>学费</b>
        </span>
        <span>({{Tuition}})</span>
      </div>
      <div class="Characteristic">申请条件及特点</div>
      <Row class="info-box">
        <Col span="12" v-for="(item,index) in dataList" :key="index" class="face">
          <span class="img">
            <img src="../../assets/images/bluespot.png" alt class="point-img">
          </span>
          <span class="describe">{{item.describe}}</span>
        </Col>
        <Col span="12" class="face" v-for="(item,index) in dataList1" :key="'y'+ index">
          <span class="img">
            <img src="../../assets/images/bluespot.png" alt class="point-img">
          </span>
          <span class="describe">{{item.describe}}</span>
        </Col>
      </Row>
      <div class="nextTo">
        <input type="button" value="测算" @click="calculationTo" class="calculation">
        <input type="button" value="立即申请" @click="applicationTo" class="application">
      </div>
    </div>
    <div class="loanRow">
      <Row class="headerRow" :class="!arrowPosition1?'bottomSpace':''">
        <Col span="14" class="Headline">
          <div style="float: left; height: 100%">
            <span>
              <img src="../../assets/images/lockHome.png" alt class="left-img">
            </span>
          </div>
          <div style="float: left;padding-top: 7%;">
            <p class="project">
              <b>创业基金</b>
            </p>
            <p class="introduce">{{VentureCapital}}</p>
          </div>
        </Col>
        <Col span="9" class="detailBtn" style="float: right;">
          <p @click="arrowPosition1=!arrowPosition1" class="btn-Arrow">
            <Icon type="md-arrow-dropdown" v-show="arrowPosition1"/>
            <Icon type="md-arrow-dropup" v-show="!arrowPosition1"/>
          </p>
        </Col>
      </Row>
    </div>
    <div class="down-box" v-show="arrowPosition1">
      <div class="head">
        <i>
          <img src="../../assets/images/zhuzhuang2x.png" alt class="img-left">
        </i>
        <span class="Title">
          <b>创业基金</b>
        </span>
        <span>({{VentureCapital}})</span>
      </div>
      <div class="Characteristic">申请条件及特点</div>
      <Row class="info-box">
        <Col span="12" v-for="(item,index) in dataList" :key="'a'+index" class="face">
          <span class="img">
            <img src="../../assets/images/bluespot.png" alt class="point-img">
          </span>
          <span class="describe">{{item.describe}}</span>
        </Col>
        <Col span="12" class="face" v-for="(item,index) in CharacteristicList1" :key="'a1'+index">
          <span class="img">
            <img src="../../assets/images/bluespot.png" alt class="point-img">
          </span>
          <span class="describe">{{item.describe}}</span>
        </Col>
      </Row>
      <div class="nextTo">
        <input type="button" value="测算" @click="calculationTo" class="calculation">
        <input type="button" value="立即申请" @click="applicationTo" class="application">
      </div>
    </div>

    <div class="loanRow">
      <Row class="headerRow" :class="!arrowPosition2?'bottomSpace':''">
        <Col span="14" class="Headline">
          <div style="float: left; height: 100%">
            <span>
              <img src="../../assets/images/foodHome.png" alt class="left-img">
            </span>
          </div>
          <div style="float: left;padding-top: 7%;">
            <p class="project">
              <b>生活费</b>
            </p>
            <p class="introduce">{{VentureCapital}}</p>
          </div>
        </Col>
        <Col span="9" class="detailBtn" style="float: right;">
          <p @click="arrowPosition2=!arrowPosition2" class="btn-Arrow">
            <Icon type="md-arrow-dropdown" v-show="arrowPosition2"/>
            <Icon type="md-arrow-dropup" v-show="!arrowPosition2"/>
          </p>
        </Col>
      </Row>
    </div>
    <div class="down-box" v-show="arrowPosition2">
      <div class="head">
        <i>
          <img src="../../assets/images/zhuzhuang2x.png" alt class="img-left">
        </i>
        <span class="Title">
          <b>生活费</b>
        </span>
        <span>({{LivingExpenses}})</span>
      </div>
      <div class="Characteristic">申请条件及特点</div>
      <Row class="info-box">
        <Col span="12" v-for="(item,index) in dataList" :key="'b'+index" class="face">
          <span class="img">
            <img src="../../assets/images/bluespot.png" alt class="point-img">
          </span>
          <span class="describe">{{item.describe}}</span>
        </Col>
        <Col span="12" class="face" v-for="(item,index) in CharacteristicList1" :key="'b1'+index">
          <span class="img">
            <img src="../../assets/images/bluespot.png" alt class="point-img">
          </span>
          <span class="describe">{{item.describe}}</span>
        </Col>
      </Row>
      <div class="nextTo">
        <input type="button" value="测算" @click="calculationTo" class="calculation">
        <input type="button" value="立即申请" @click="applicationTo" class="application">
      </div>
    </div>

    <div class="loanRow">
      <Row class="headerRow" :class="!arrowPosition3?'bottomSpace':''">
        <Col span="14" class="Headline">
          <div style="float: left; height: 100%">
            <span>
              <img src="../../assets/images/trainingHome.png" alt class="left-img">
            </span>
          </div>
          <div style="float: left;padding-top: 7%;">
            <p class="project">
              <b>培训费</b>
            </p>
            <p class="introduce">{{VentureCapital}}</p>
          </div>
        </Col>
        <Col span="9" class="detailBtn" style="float: right;">
          <p @click="arrowPosition3=!arrowPosition3" class="btn-Arrow">
            <Icon type="md-arrow-dropdown" v-show="arrowPosition3"/>
            <Icon type="md-arrow-dropup" v-show="!arrowPosition3"/>
          </p>
        </Col>
      </Row>
    </div>
    <div class="down-box" v-show="arrowPosition4">
      <div class="head">
        <i>
          <img src="../../assets/images/zhuzhuang2x.png" alt class="img-left">
        </i>
        <span class="Title">
          <b>培训费</b>
        </span>
        <span>({{Train}})</span>
      </div>
      <div class="Characteristic">申请条件及特点</div>
      <Row class="info-box">
        <Col span="12" v-for="(item,index) in dataList" :key="'c'+index" class="face">
          <span class="img">
            <img src="../../assets/images/bluespot.png" alt class="point-img">
          </span>
          <span class="describe">{{item.describe}}</span>
        </Col>
        <Col span="12" class="face" v-for="(item,index) in CharacteristicList1" :key="'c1'+index">
          <span class="img">
            <img src="../../assets/images/bluespot.png" alt class="point-img">
          </span>
          <span class="describe">{{item.describe}}</span>
        </Col>
      </Row>
      <div class="nextTo">
        <input type="button" value="测算" @click="calculationTo" class="calculation">
        <input type="button" value="立即申请" @click="applicationTo" class="application">
      </div>
    </div>

    <div class="loanRow">
      <Row class="headerRow" :class="!arrowPosition4?'bottomSpace':''">
        <Col span="14" class="Headline">
          <div style="float: left; height: 100%">
            <span>
              <img src="../../assets/images/giftHome.png" alt class="left-img">
            </span>
          </div>
          <div style="float: left;padding-top: 7%;">
            <p class="project">
              <b>商品分期</b>
            </p>
            <p class="introduce">{{VentureCapital}}</p>
          </div>
        </Col>
        <Col span="9" class="detailBtn" style="float: right;">
          <p @click="arrowPosition4=!arrowPosition4" class="btn-Arrow">
            <Icon type="md-arrow-dropdown" v-show="arrowPosition4"/>
            <Icon type="md-arrow-dropup" v-show="!arrowPosition4"/>
          </p>
        </Col>
      </Row>
    </div>
    <div class="down-box" v-show="arrowPosition4">
      <div class="head">
        <i>
          <img src="../../assets/images/zhuzhuang2x.png" alt class="img-left">
        </i>
        <span class="Title">
          <b>商品分期</b>
        </span>
        <span>({{CommodityStaging}})</span>
      </div>
      <div class="Characteristic">申请条件及特点</div>
      <Row class="info-box">
        <Col span="12" v-for="(item,index) in dataList" :key="'d'+index" class="face">
          <span class="img">
            <img src="../../assets/images/bluespot.png" alt class="point-img">
          </span>
          <span class="describe">{{item.describe}}</span>
        </Col>
        <Col span="12" class="face" v-for="(item,index) in dataList1" :key="'d1'+index">
          <span class="img">
            <i>
              <img src="../../assets/images/bluespot.png" alt class="point-img">
            </i>
          </span>
          <span class="describe">{{item.describe}}</span>
        </Col>
      </Row>
      <div class="btn-group">
        <input type="button" value="测算" @click="calculationTo" class="calculation">
        <input type="button" value="立即申请" @click="applicationTo" class="application">
      </div>
    </div>
    <div class="pay-btm">——中国邮政储蓄银行提供贷款·华安保险全额承保——</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      calculationMore: "",
      goods: "",
      dataList1: "",
      CharacteristicList1: "",
      describe: "",
      arrowPosition: false,
      arrowPosition1: false,
      arrowPosition2: false,
      arrowPosition3: false,
      arrowPosition4: false,
      value1: "1",
      Tuition: "剩余额度15000元/学年",
      VentureCapital: "剩余额度5000元/在校期",
      LivingExpenses: "剩余额度5200元/学年",
      Train: "剩余额度20000元/学年",
      CommodityStaging: "剩余额度6000元/两学年",
      dataList: [
        {
          imageSrc: "../../assets/images/bluespot.png",
          describe: "在校大学生(18-28周岁）"
        },
        {
          imageSrc: "../../assets/images/bluespot.png",
          describe: "发放至学校账户"
        },
        {
          imgSrc: "../../assets/images/bluespot.png",
          describe: "最高可承保额15000元/学年"
        },
        {
          imageSrc: "../../assets/images/bluespot.png",
          describe: "每学年可申请一笔"
        }
      ],
      orderList: [
        {
          orderNumber: "您当前订单：1231231283812",
          type: "生活费贷款",
          phase: "您当前处于还息期，每月还款额约：10元/月"
        }
      ]
    };
  },
  methods: {
    calculationTo() {},
    applicationTo() {}
  }
};
</script>
<style>
.container {
  width: 375px;
  height: 775px;
}
/* 页面订单知识部分 */
.Information-bar {
  width: 375px;
  height: 224px;
  background-image: url('../../assets/images/headerBack.png');
  background-size:100%;
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
.pay-btn {
  width: 68.5px;
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
.info-box{
    
}
.order-info,
.Loan-type,
.Loan-phase {
  height: 30px;
  line-height: 30px;
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
}
.container {
  background-color: #f4f4f4;
}
.cardRow {
  overflow: hidden;
}
.left-one,
.left-two,
.left-three,
.Repayment-Period {
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
  font-size: 14px;
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
  margin-top: 10px;
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

.cardRow {
  position: absolute;
  margin-top: 10px;
  width: 375px;
  height: 60px;
  margin-top: 30px;
  border: none;
}
/* 还款提示语 */
.payment-coupon {
  width: 375px;
  background: #2487ff;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  letter-spacing: 0px;
  color: #fb3333;
  padding-left: 21px;
  opacity: 0.5;
}
.Information-bar {
  font-family: PingFangSC-Medium;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #ffffff;
}
/* 页面上左图标 */
.left-img {
  width: 33px;
  height: 33px;
  float: left;
  margin-left: 10px;
}
/* 每种费用类型 */
.headerRow {
  width: 355px;
  height: 58px;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 5px;
  vertical-align: middle;
  margin: 10px;
}
.Headline {
  vertical-align: middle;
  margin-left: 10px;
}
/* 下拉框头部宽高 */
.head {
  width: 355px;
  height: 35px;
  border-bottom: 1px solid gainsboro;
  line-height: 35px;
}
.project {
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
  text-align: left;
  margin-left: 10px;
}
.introduce {
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
}
.left-img {
  margin-top: 11px;
}
.detailBtn {
  height: 30px;
  float: right;
}
.introduce {
  margin-top: -1px;
}
.ivu-icon {
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: middle;
  margin-top: 16%;
  float: right;
  margin-right: 10px;
}
.detailBtn {
  overflow: hidden;
}
/* 下拉框里左边一小竖杠 */
.img-left {
  width: 3.5px;
  height: 13px;
  margin-left: 10px;
}
/* .下拉框标题 */
.Title {
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
}
.Characteristic,
.point-img {
  margin-left: 10px;
}
.Characteristic {
  height: 30px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: -0.3px;
  color: #333333;
}
.point-img {
  width: 9px;
  height: 9px;
}
.down-box {
  width: 355px;
  height: 172px;
  background-color: #ffffff;
  box-shadow: 0px 1.5px 10px 0px rgba(153, 153, 153, 0.2);
  border-radius: 5px;
  margin-left: 10px;
  position: relative;
  top: -100%;
  left: 0;
}
.calculation {
  width: 85px;
  height: 31.5px;
  border-radius: 15.8px;
  border: solid 1.5px #2487ff;
  font-family: PingFangSC-Semibold;
  font-size: 13px;
  line-height: 18px;
  color: #2487ff;
  float: left;
  margin-left: 60px;
}
.application {
  width: 85px;
  height: 31.5px;
  background-color: #2487ff;
  border-radius: 15.8px;
  border: none;
  font-family: PingFangSC-Semibold;
  font-size: 13px;
  line-height: 18px;
  color: #ffffff;
  float: right;
  margin-right: 60px;
}
.btn-group {
  width: 375px;
  height: 80px;
  background-color: #f4f4f4;
  margin-top: 15px;
  overflow: hidden;
}
.My-repayment-more {
  width: 130px;
  height: 44px;
  background-color: #2487ff;
  border-radius: 4px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.9px;
  color: #ffffff;
  border: none;
  margin: 0px 23px 0px 43px;
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
  margin-left: 20px;
}
.you-need {
  font-family: PingFangSC-Medium;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
  margin-top: 15px;
  margin-left: 10.5px;
}
.pay-btm {
  width: 375px;
  background-color: #f4f4f4;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  letter-spacing: 0px;
  color: #999999;
  opacity: 0.5;
  margin: auto;
}
.Order,
.Loan-type,
.Repayment-Period,
.Order-number {
  margin-left: 11px;
}
</style>
