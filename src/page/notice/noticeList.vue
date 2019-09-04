<template>
  <div class="notice">
    <div
      class="noticeList"
      v-for="(notice,index) in noticeList"
      :key="index"
      @click="getNotice(notice)"
    >
      <p class="noticeTime">{{notice.date}}&nbsp;{{notice.time}}</p>
      <div class="noticeContent">
        <p class="wordEllipsis">{{notice.messTitle}}</p>
        <!-- <span class="wordEllipsis noticeDetials"v-html="notice.description">{{notice.templateId}}</span> -->
        <span class="wordEllipsis noticeDetials">{{notice.templateId}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticeList: [
        {
          time: "10:05",
          title: "贷款申请已提交，合同待签订",
          description:
            "您的账户已于2018年02月27日还款成功，还款金额12000元，当前剩余可借额度为10000元"
        },
        {
          time: "昨天14:13",
          title: "贷款申请已拒绝",
          description:
            "您的贷款申请已拒绝，拒绝原因为***(个人信用不符合审核要求。)"
        },
        {
          time: "2-25   10:05",
          title: "审核通过，待收货确认",
          description:
            "您的商品分期借款申请已审批通过，我们将尽快为您邮寄商品。"
        }
      ]
    };
  },
  created() {
    this.getNoticeList();
  },
  methods: {
    getNotice(notice) {
      // console.log(notice);
      this.$router.push({
        path: "/notice/details?noticeItem="+notice.templateId
      });
    },
    getNoticeList() {
      let params = { type: 0 };
      this.$ajaxs.getNoticeList(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            //  console.log(res);
            this.noticeList = res.data;
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
.notice {
  background-color: #f4f4f4;
  position: absolute;
  height: 100%;
  width: 100%;
}
.noticeList {
  padding: 18px;
}
.noticeTime {
  text-align: center;
  font-size: 13px;
  color: #999999;
}
.noticeContent {
  padding: 16px;
  background: #ffffff;
  margin-top: 20px;
}
.noticeContent p {
  font-size: 16px;
  color: #333333;
  -webkit-line-clamp: 1;
  margin-bottom: 10px;
}
.noticeContent span {
  font-size: 13px;
  color: #999999;
  line-height: 150%;
  -webkit-line-clamp: 2;
}
</style>
<style>
.noticeDetials a {
  color: #2487ff;
  text-decoration: none;
}
</style>

