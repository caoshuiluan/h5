<template>
  <div class="noticeDetail">
    <p class="title">{{content.templateTitle}}</p>
    <span class="noticeContent" v-html="content.templateContent">{{content.templateContent}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: []
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      //getNoticeDetail
      let params = { id: this.$route.query.noticeItem};
      this.$ajaxs.getNoticeDetail(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
              this.content=res.data;
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
.noticeDetail {
  padding: 21px;
}
.title {
  font-size: 16px;
  color: #333333;
  text-align: center;
  margin-bottom: 35px;
}
.noticeContent {
  font-size: 13px;
  color: #999999;
  line-height: 160%;
}
</style>
