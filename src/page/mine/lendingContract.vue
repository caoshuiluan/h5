<template>
  <div class="contractFont">
    <p v-html="data">{{data}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:
        "您的账户已于2018年02月27日还款成功，还款金额12000元，当前剩余可借额度为10000元",
      type: this.$route.query.type
    };
  },
  created() {
    if(this.type==1){
      this.getUserContact();
    }
  },
  methods: {
    //获取
    getUserContact() {
      let params = { infoType: 1 };
      this.$ajaxs.getSysInfo(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.data = res.data.accountProtocol;
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
.contractFont {
  padding: 22px 21px;
}
.contractFont p {
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 21.2px;
  letter-spacing: -0.6px;
  color: #999999;
}
</style>
