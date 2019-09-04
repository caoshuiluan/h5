<template>
  <div>
    <div class="headerImg">
      <img src="../../assets/images/example2.jpg">
    </div>
    <div class="detailContent" v-html="content.referContent">
      {{content.referContent}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      content:{}
    }
  },
  created(){
    this.getNewsDetial();
  },
  methods:{
    getNewsDetial(){
      let params = { id: this.$route.query.id};
      this.$ajaxs.getNewsDetails(params).then(
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
.mainPart {
  position: relative;
  top: 0px;
}
.headerImg {
  position: absolute;
  top: 0px;
  z-index: -1;
  height: 155px;
}
.headerImg img {
  height: 155px;
  width: 100%;
}
.detailContent {
  position: absolute;
  top: 160px;
  padding: 0.2rem;
  font-size: 13px;
}
</style>
