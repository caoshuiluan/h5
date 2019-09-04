<template>
  <div class="loanPart">
    <Row class="modifyTabs lineBottom">
      <div class="tabBottom" :class="'activeItemBttom'+type"></div>
      <Col
        span="8"
        class="tabItem horizenCenter"
        :class="type==1?'activeItem':''"
        @click.native="toTab(1)"
      >
        <p>我的申请</p>
      </Col>
      <Col
        span="8"
        class="tabItem horizenCenter"
        :class="type==2?'activeItem':''"
        @click.native="toTab(2)"
      >
        <p>我的贷款</p>
      </Col>
      <Col
        span="8"
        class="tabItem horizenCenter"
        :class="type==3?'activeItem':''"
        @click.native="toTab(3)"
      >
        <p>我的还款</p>
      </Col>
    </Row>
    <div v-if="type==1">
      <div v-for="(loan,index) in loanList" :key="index" class="loanCards">
        <l-Card v-bind:cardData="loan"></l-Card>
      </div>
      <p class="bottomTip">以上是近半年申请记录</p>
      <div class="horizenCenter">
        <Button class="historyBtn activeAgreeBtn" size="large" long @click="toHistory()">查看历史纪录</Button>
      </div>
    </div>
    <div v-if="type==2">
      <div v-if="loanStatus==1">
        <div class="summaryInfo">
          <p class="sumP">
            总计贷款金额
            <b>(已向您发放{{loanRow.loanSize}}笔贷款)</b>
          </p>
          <p class="countNum">¥{{loanRow.loanAmtTot}}</p>
          <div>
            <Button class="activeAgreeBtn settledbtn" size="large" @click="getSettledLoan()">我要结清</Button>
          </div>
        </div>
        <div v-for="(singleLoan,lIndex) in loanRow.loanDatas" :key="lIndex">
          <l-row v-bind:loanRow="singleLoan"></l-row>
        </div>
      </div>
      <div v-if="loanStatus===2" class="payLoanList">
        <div>
          <c-payLoan v-bind:payLoanList="payLoanList" @selectRowsFromChild="getSelects"></c-payLoan>
        </div>
        <p class="bottomTip">说明：拟结清金额请以试算后的金额为准!</p>
        <div class="horizenCenter">
          <Button
            class="historyBtn activeAgreeBtn toTrailBtn"
            size="large"
            long
            @click="trailSettled()"
          >试算</Button>
        </div>
      </div>
    </div>
    <div v-if="type==3">
      <div>
        <l-refund v-bind:refundData="refundData"></l-refund>
      </div>
    </div>
    <Drawer class="buyDrawer" title :closable="false" v-model="loanDrawer">
      <div>
        <Row>
          <Col span="2" class="drawerCloseImg" style="float:right;">
            <img @click="loanDrawer=false" src="../../assets/images/cancel.png">
          </Col>
        </Row>
        <p class="selectLoanP">
          <b>笔数</b>
          <b>{{trailResult.itemCount}}笔</b>
        </p>
        <p class="selectLoanP">
          <b>待结清本金</b>
          <b>¥{{trailResult.settledPrcpAmount}}</b>
        </p>
        <p class="selectLoanP">
          <b>应还利息</b>
          <b>¥{{trailResult.irtAmount}}</b>
        </p>
        <p class="selectLoanP">
          <b>欠款金额</b>
          <b>¥{{trailResult.overdueAmount}}</b>
        </p>
        <p class="selectLoanP">
          <b>合计</b>
          <b>¥{{trailResult.totalAmount}}</b>
        </p>
        <p class="selectLoanP">请确保您的账户余额充足！</p>
        <Row class="confirmPart">
          <Button
            class="activeAgreeBtn confirmBtn"
            size="large"
            long
            @click.native="confirmSettled()"
          >确认结清</Button>
        </Row>
        <!-- <Col span="6" class="drawerImg">
            <img src="../../assets/images/goodsPic.png">
          </Col>
          <Col span="16" class="drawerBasiceData">
            <p>2200</p>
            <p>月分期：¥25 - ¥100</p>
          </Col>
          <Col span="2" class="drawerCloseImg" @click.native="buySelect=false">
            <img src="../../assets/images/cancel.png">
          </Col>
        </Row>
        <Row class="selectSection" v-for="(setting,index) in goodsDetails" :key="index">
          <p class="settingName">{{setting.name}}</p>
          <ul class="selectDetailItem">
            <li v-for="(config,index2) in setting.valueList" :key="index2">{{config.itemName}}</li>
          </ul>
        </Row>
        <Row class="confirmPart">
          <Button
            class="activeAgreeBtn confirmBtn"
            size="large"
            long
            @click.native="buySelect=false"
        >确定</Button>-->
      </div>
    </Drawer>
  </div>
</template>

<script>
import lCard from "@C/mine/loanCard";
import lRow from "@C/mine/loadRow";
import lRefund from "@C/mine/refundData";
import cPayLoan from "@C/mine/payLoanList";
export default {
  data() {
    return {
      type: 1,
      loanStatus: 1,
      loanDrawer: false,
      trailResult: {},
      refundData: {
        date: "2018.12.20",
        cost: 235.3,
        list: [
          { date: "2018.09.05", cost: "¥2000", left: "¥2000", debt: 100.2 },
          { date: "2018.09.05", cost: "¥2000", left: "¥2000", debt: 100.2 },
          { date: "2018.09.05", cost: "¥2000", left: "¥2000", debt: 100.2 }
        ]
      },
      payLoanList: [
        { date: "2018.09.05", cost: "¥2000", left: "¥2000", debt: 100.2 },
        { date: "2018.09.05", cost: "¥2000", left: "¥2000", debt: 100.2 },
        { date: "2018.09.05", cost: "¥2000", left: "¥2000", debt: 100.2 }
      ],
      loanRow: {
        loanDatas: [
          {
            loanName: "培训费",
            perData: [
              {
                trainNme: "驾驶培训",
                voucAmt: "7000",
                voucStatusNme: "未结清",
                voucTm: "2018-03-09"
              }
            ],
            itemsCount: 1,
            perLoanAmt: "7000"
          }
        ],
        loanAmtTot: "12000",
        loanSize: 5
      },
      loanList: [
        {
          loanName: "生活费贷款",
          cornerStatus: 1,
          applyDate: "2019.03.07",
          applyAmt: 5000,
          bankName: "中国邮政储蓄银行",
          rejectMsg: "资料不全，请补充资料"
        }
      ],
      selectRows: []
    };
  },
  components: {
    lCard,
    lRow,
    cPayLoan,
    lRefund
  },
  created() {
    this.getApplicationList();
    this.getLonList();
    this.getRefundList();
  },
  methods: {
    getSelects(val) {
      this.selectRows = val;
    },
    //获取申请数据
    getApplicationList() {
      this.$ajaxs.getApplicationList({}).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.loanList = res.data;
          } else {
            this.$Message.warning(returnStr);
          }
        },
        err => {
          //添加错误连接提示
        }
      );
    },
    //获取贷款列表
    getLonList() {
      this.$ajaxs.getLoanList({}).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.loanRow = res.data;
          } else {
            if (returnStr == "none") {
              this.$Message.warning(returnStr);
              returnStr;
            } else {
              this.$Message.warning(res.message);
            }
          }
        },
        err => {
          //添加错误连接提示
        }
      );
    },
    getRefundList() {
      this.$ajaxs.getRefundList().then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.refundData = res.data;
          } else {
            if (returnStr == "none") {
              this.$Message.warning(returnStr);
              returnStr;
            } else {
              this.$Message.warning(res.message);
            }
          }
        },
        err => {
          //添加错误连接提示
        }
      );
    },
    //获取结清列表
    getSettledLoanList() {
      this.$ajaxs.getRefundSettledList().then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.payLoanList = res.data;
          } else {
            if (returnStr == "none") {
              this.$Message.warning(returnStr);
              returnStr;
            } else {
              this.$Message.warning(res.message);
            }
          }
        },
        err => {
          //添加错误连接提示
        }
      );
    },
    getSettledLoan() {
      this.loanStatus = 2;
      this.getSettledLoanList();
    },
    toTab(num) {
      this.type = num;
      this.loanStatus = 1;
    },
    toHistory() {
      this.$router.push({
        path: "/mine/applicationHistory"
      });
    },
    confirmSettled() {
      this.loanDrawer = false;
      this.$store.state.selectRow=this.selectRows;
      this.$router.push({
        path: "/mine/settledLoan"
      });
    },
    //试算
    trailSettled() {
      // console.log("haha",this.selectRows);
      this.getTrailSettledInfo();
    },
    //获取试算结果
    getTrailSettledInfo() {
      //getTrialResult
      let params = { json: JSON.stringify(this.selectRows) };
      this.$ajaxs.getTrialResult(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            console.log(res);
            this.loanDrawer = true;
            this.trailResult = res.data;
          } else {
            if (returnStr == "none") {
              this.$Message.warning(returnStr);
              returnStr;
            } else {
              this.$Message.warning(res.message);
            }
          }
        },
        err => {
          //添加错误连接提示
        }
      );
    }
  }
};
</script>

<style scoped>
.modifyTabs {
  background-color: #ffffff;
}
.loanPart {
  background: #f5f5f5;
  position: fixed;
  bottom: 0px;
  top: 45px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.modifyTabs .tabBottom {
  width: 39px;
  transform: translate3d(100%, 0px, 0px);
}
.activeItemBttom2 {
  transform: translate3d(425%, 0px, 0px) !important;
}
.activeItemBttom3 {
  transform: translate3d(750%, 0px, 0px) !important;
}
.loanCards {
  margin: 10px 10px 0px;
}
.bottomTip {
  color: #2487ff;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0px;
  padding: 6px 11px;
}
.historyBtn {
  width: 275px;
  background-color: #2487ff;
  border-radius: 5px;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.9px;
  color: #ffffff;
  margin-bottom: 10.5px;
}
.summaryInfo {
  background: #ffffff;
  padding: 15.5px 20px 27px;
  text-align: center;
}
.sumP {
  font-size: 13px;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 37.5px;
}
.sumP b {
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #999999;
}
.payLoanList .sumP {
  margin-bottom: 0px;
}
.countNum {
  font-size: 30px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 25px;
}
.settledbtn {
  width: 85px;
  background-color: #2487ff;
  border-radius: 5px;
}
.toTrailBtn {
  margin-top: 80px;
}
</style>
