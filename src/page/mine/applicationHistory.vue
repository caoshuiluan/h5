<template>
  <div class="grayBackground">
    <div v-for="(loan,index) in loanList" :key="index" class="loanCards">
      <l-Card v-bind:cardData="loan"></l-Card>
    </div>
  </div>
</template>

<script>
import lCard from "@C/mine/loanCard";
export default {
  data() {
    return {
      page:1,
      loanList: [
        {
          loanName: "生活费贷款",
          cornerStatus: 1,
          applyDate: "2019.03.07",
          applyAmt: 5000,
          bankName: "中国邮政储蓄银行",
          rejectMsg: "资料不全，请补充资料"
        }
      ]
    };
  },
  components: {
    lCard
  },
  created(){
    this.getApplicationList({});
  },
  methods:{
    //获取申请数据
    getApplicationList(params){
      this.$ajaxs.getApplicationList(params).then(
        res => {
          let returnStr=this.$commonMethods.getResultByCode(res.code);
          if(returnStr===true){
            this.loanList=res.data;
          }else{
            this.$Message.warning(returnStr);
          }
        },
        err => {
          //添加错误连接提示
        })
    }
  }
};
</script>

<style scoped>
.loanCards {
  margin: 10px 10px 0px;
}
</style>
