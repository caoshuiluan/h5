<template>
  <div class="myBankCards">
    <div>
      <l-bankCard v-bind:bankCard="bankCard"></l-bankCard>
    </div>
    <p class="cardDescrib">
      <b>贷款发放及还款卡</b>
      <b>更换绑定》</b>
    </p>
  </div>
</template>

<script>
import lBankCard from "@C/mine/bankCard";
export default {
  data() {
    return {
      bankCard: [{ name: "邮政银行", type: "储蓄卡", number: "5678" }]
    };
  },
  components: {
    lBankCard
  },
  created(){
    this.getBankCardInfo();
  },
  methods:{
    getBankCardInfo(){
      this.$ajaxs.getBankInfo([]).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.bankCard=res.data;
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
.myBankCards {
  padding: 20px 0px;
}
.cardDescrib {
  padding: 22.5px 16px;
}
.cardDescrib b {
  font-size: 14px;
  letter-spacing: 0px;
  font-weight: normal;
}
.cardDescrib b:nth-child(1) {
  color: #333333;
}
.cardDescrib b:nth-child(2) {
  float: right;
  color: #2487ff;
}
</style>
