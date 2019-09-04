<template>
  <div class="grayBackground settleLoan">
    <div>
      <p class="topLine"></p>
      <div class="settledDetail">
        <p class="settleTips">请认真核对以下信息</p>
        <p class="selectLoanP">
          <b>结清笔数</b>
          <b>{{settledResult.itemCount}}笔</b>
        </p>
        <p class="selectLoanP">
          <b>结清本金</b>
          <b>¥{{settledResult.settledPrcpAmount}}</b>
        </p>
        <p class="selectLoanP">
          <b>应还利息</b>
          <b>¥{{settledResult.irtAmount}}</b>
        </p>
        <p class="selectLoanP">
          <b>欠款金额</b>
          <b>¥{{settledResult.overdueAmount}}</b>
        </p>
        <p class="selectLoanP">
          <b>结清总金额</b>
          <b>¥{{settledResult.totalAmount}}</b>
        </p>
        <p class="selectLoanP">
          <b>还款账户</b>
          <span class="info">
            <i>{{settledResult.cardCode}}</i>
            <b>更换></b>
          </span>
        </p>
        <p class="selectLoanP">
          说明：申请提交后系统将立即从指定卡中足额扣除，请
          确保您的账户余额充足。
        </p>
      </div>
      <div class="horizenCenter">
        <Button class="payBtn activeAgreeBtn" size="large" long @click="paySelect()">确认无误，发起扣款</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectRows: this.$store.state.selectRow,
      settledResult: {}
    };
  },
  created() {
    this.getTrailSettledInfo();
  },
  methods: {
    //获取试算结果
    getTrailSettledInfo() {
      //getTrialResult
      let params = { json: JSON.stringify(this.selectRows) };
      this.$ajaxs.getTrialResult(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.settledResult = res.data;
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
    //扣款
    paySelect() {
      //payEarlier
      console.log("hello");
      let params = {
        json: JSON.stringify(this.selectRows),
        overdueAmount: this.settledResult.overdueAmount,
        settledPrcpAmount: this.settledResult.settledPrcpAmount,
        irtAmount: this.settledResult.itemCount,
        cardCode: this.settledResult.cardCode
      };
      this.$ajaxs.payEarlier(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            console.log(res);
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
.settleLoan {
  padding: 5px 19px;
}
.topLine {
  width: 100%;
  height: 10px;
  background-color: #c3c3c3;
  border-radius: 2.5px;
}
.settledDetail {
  margin: -5px 10px;
  background-color: #ffffff;
  box-shadow: 0px 1.5px 10.5px 4.5px rgba(153, 153, 153, 0.1);
  padding: 12px 20px;
}
.settleTips {
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
}
.payBtn {
  width: 275px;
  background-color: #2487ff;
  border-radius: 5px;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.9px;
  color: #ffffff;
  margin-top: 65px;
}
</style>
