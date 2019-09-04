<template>
  <div>
    <div class="newsList" v-for="(news,index) in newsList" :key="index" @click="newsDetail(news)">
      <div class="leftInfo">
        <p class="wordEllipsis newsTitle">{{news.referTitle}}</p>
        <span class="wordEllipsis newsDescrib">{{news.referId}}</span>
        <p class="newsTime">{{news.time}}</p>
      </div>
      <div class="rightImage">
        <!-- <img :src="news.imageSrc" alt=""> -->
        <img src="../../assets/images/example.jpg">
      </div>
      <hr class="lineSpace"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          title: "商业助学贷款政策指南",
          describe:
            "商业贷款助学指南商业贷款助学指南商业贷款助学指南商业贷款助学指南商业贷贷款助学指南商业贷款助学指南商业贷贷款助学指南商业贷款助学指南商业贷贷款助学指南商业贷款助学指南商业贷",
          time: "02-25  10:05",
          imageSrc: "../../assets/images/example.jpg"
        },
        {
          title: "商业助学贷款政策指南",
          describe:
            "商业贷款助学指南商业贷款助学指南商业贷款助学指南商业贷款助学指南商业贷贷款助学指南商业贷款助学指南商业贷贷款助学指南商业贷款助学指南商业贷贷款助学指南商业贷款助学指南商业贷",
          time: "02-25  10:05",
          imageSrc: "../../assets/images/example.jpg"
        }
      ]
    };
  },
  created(){
    this.getNewsList();
  },
  methods: {
    newsDetail(news) {
      this.$router.push({
        path: "/newsConsultation/details?id="+news.referId
      });
    },
    getNewsList(){
      let params = { type: 0 };
      this.$ajaxs.getNewsList(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.newsList = res.data;
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
  }
};
</script>

<style scoped>
.newsList {
  padding: 0.2rem;
}
.leftInfo,
.rightImage {
  display: inline-block;
}
.leftInfo {
  float: left;
  width: 69%;
}
.rightImage {
  float: right;
  width: 29%;
  height: 40px;
}
.newsTitle {
  -webkit-line-clamp: 1;
  color: #333333;
  margin-bottom: 10px;
  font-size: 16px;
}
.newsDescrib {
  -webkit-line-clamp: 2;
  color: #999999;
  margin-bottom: 8px;
  line-height: 150%;
  font-size: 13px;
}
.newsTime {
  color: #cccccc;
  margin-bottom: 10px;
  font-size: 12px;
}
.rightImage img {
  position: relative;
  width: 100%;
}
</style>

