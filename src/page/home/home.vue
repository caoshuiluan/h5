<template>
  <div class="home">
    <div class="headerRow">
      <!-- <b>{{provinceName}}&nbsp;&nbsp;&nbsp;</b>
      <img class="arrowDown" src="../assets/images/back.png" alt="选择地区">-->
      <Select v-model="provinceName" class="provinceSelect">
        <Option v-for="item in provinceList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <a class="historyIcon">
        <img src="../../assets/images/notice.png" alt="历史">
      </a>
    </div>
    <div class="mainPart2">
      <div class="headerPart">
        <ul class="bg-bubbles">
          <li v-for="(item, index) in bubbles" :key="index"></li>
        </ul>
        <p-chart v-bind:pieData="pieChartData"></p-chart>
        <hr class="lineSpace">
        <ul class="threeParts">
          <li>
            <p>月利率：0.45%</p>
            <p>在校期仅还息</p>
          </li>
          <li>
            <p>每年8月1日分配</p>
            <p>当年额度</p>
          </li>
          <li>
            <p>10年分期、支持随</p>
            <p>时结清、按日计息</p>
          </li>
        </ul>
      </div>
      <Row class="twoTab">
        <Col span="12" class="twoParts" @click.native="toPage(1)">
          <img class="trialImg" src="../../assets/images/repayTrail.png">
          <b>还款试算</b>
        </Col>
        <Col span="12" class="twoParts" @click.native="toPage(2)">
          <img class="guideImg" src="../../assets/images/applicationGuide.png">
          <b>申请指南</b>
        </Col>
      </Row>
      <div>
        <Carousel
          v-model="carouselValue"
          :autoplay="setting.autoplay"
          :autoplay-speed="setting.autoplaySpeed"
          :dots="setting.dots"
          :radius-dot="setting.radiusDot"
          :trigger="setting.trigger"
          :arrow="setting.arrow"
          class="homeCarousel"
        >
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../../assets/images/bannerHome1.png">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../../assets/images/bannerHome2.png">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../../assets/images/bannerHome3.png">
            </div>
          </CarouselItem>
        </Carousel>
      </div>
      <div class="classifyPart">
        <p class="homeSubtltle">产品推荐</p>
        <div class="classifyContent">
          <Row>
            <Col span="11" class="classifyItem">
              <Row class="classifyDetail">
                <Col span="14" class="classifyDetailItem">
                  <p>学费</p>
                  <p>最高额度12000元/学年</p>
                </Col>
                <Col span="10" class="classifyDetailItem">
                  <img src="../../assets/images/buildingHome.png">
                </Col>
              </Row>
            </Col>
            <Col span="11" class="classifyItem">
              <Row class="classifyDetail">
                <Col span="14" class="classifyDetailItem">
                  <p>创业资金</p>
                  <p>最高额度5000元/在校期</p>
                </Col>
                <Col span="10" class="classifyDetailItem">
                  <img src="../../assets/images/lockHome.png">
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div class="classifyContent">
          <Row>
            <Col span="11" class="classifyItem">
              <Row class="classifyDetail">
                <Col span="14" class="classifyDetailItem">
                  <p>生活费</p>
                  <p>最高额度7200元/学年</p>
                </Col>
                <Col span="10" class="classifyDetailItem">
                  <img src="../../assets/images/foodHome.png">
                </Col>
              </Row>
            </Col>
            <Col span="11" class="classifyItem">
              <Row class="classifyDetail">
                <Col span="14" class="classifyDetailItem">
                  <p>培训费</p>
                  <p>最高额度22000元/学年</p>
                </Col>
                <Col span="10" class="classifyDetailItem">
                  <img src="../../assets/images/trainingHome.png">
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div class="classifyContent">
          <Row>
            <Col span="11" class="classifyItem">
              <Row class="classifyDetail">
                <Col span="14" class="classifyDetailItem">
                  <p>商品分期</p>
                  <p>最高额度6000元/两学年</p>
                </Col>
                <Col span="10" class="classifyDetailItem">
                  <img src="../../assets/images/giftHome.png">
                </Col>
              </Row>
            </Col>
            <Col span="11" class="classifyItem moreInfo">
              <Row class="classifyDetail">
                <p>更多产品</p>
                <p>敬请期待</p>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div class="infoQury">
        <Row>
          <Col span="8" class="infoQuryItem">
            <img src="../../assets/images/readHome.png">
          </Col>
          <Col span="14" class="infoQuryItem">
            <ul>
              <li>【信息资讯】商业助学贷款政策指南。</li>
              <li>【信息资讯】征信管理办法。</li>
            </ul>
          </Col>
          <Col span="2" class="infoQuryItem">
            <router-link to="/newsConsultation/list" class="queryArrow">&gt;</router-link>
          </Col>
        </Row>
      </div>
      <div class="bottomTips">
        <p>中国邮政储蓄银行提供贷款·华安保险全额承保</p>
      </div>
    </div>
  </div>
</template>

<script>
import pChart from "@C/home/pieChart";
export default {
  data() {
    return {
      conf: "",
      provinceName: "310000",
      provinceList: [],
      pieChartData: { cData: 2200, maxData: 2200 },
      bubbles: [],
      carouselValue: 0,
      //轮播属性设置
      setting: {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: "inside",
        radiusDot: false,
        trigger: "click",
        arrow: "never"
        //arrow:"always"
      }
    };
  },
  mounted() {
    // this.conf = navigator.userAgent;
    this.getProvinces();
    this.$commonMethods.setLStorage("provinceId","310000");
  },
  watch:{
    provinceName(val){
      this.$commonMethods.setLStorage("provinceId",val);
    }
  },
  methods: {
    getProvinces() {
      //getProvinces
      this.$ajaxs.getProvinces({}).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.provinceList = [];
            res.data.forEach(e => {
              this.provinceList.push({
                label: e.cPlaceProve,
                value: e.cPlaceCde
              });
            });
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
    toPage(num) {
      if (num === 1) {
        this.$router.push({
          path: "/home/repayment"
        });
      } else {
        this.$router.push({
          path: "/home/applicationGuide"
        });
      }
    }
  },
  created() {
    this.bubbles.length = 3;
    this.$store.state.footerSelect = 1;
  },
  components: {
    pChart
  }
};
</script>

<style scoped>
.mainPart {
  position: relative;
  top: 0px;
}
.headerPart {
  /* height: 230px; */
  width: 100%;
  background-color: #2487ff;
  position: fixed;
  z-index: -1;
  position: relative;
}
.headerRow {
  height: 35px;
  padding: 10px 15px;
  position: relative;
  z-index: 9;
}
.mainPart2 {
  position: relative;
  top: -35px;
}
.backIcon img {
  vertical-align: middle;
  height: 20px;
}
.backIcon b {
  font-size: 15px;
  letter-spacing: 0px;
  color: #ffffff;
}
.provinceSelect {
  width: 88px;
}
.historyIcon {
  display: inline;
  float: right;
  margin-top: 5px;
}
.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
.bg-bubbles li {
  position: absolute;
  bottom: -160px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: linear-gradient(0deg, #24ceff 0%, #46cdff 100%);
  list-style: none;
  animation: square 50s infinite;
  transition-timing-function: linear;
  top: 10px;
  z-index: -1;
}
.bg-bubbles li:nth-child(1) {
  top: 50px;
  right: -80px;
  width: 80px;
  height: 80px;
  animation-delay: 2s;
  animation-duration: 17s;
}
.bg-bubbles li:nth-child(2) {
  top: 90px;
  right: -126px;
  width: 126px;
  height: 126px;
  animation-duration: 18s;
}
.bg-bubbles li:nth-child(3) {
  top: 35px;
  right: -38px;
  width: 38px;
  height: 38px;
  animation-delay: 5s;
  animation-duration: 18s;
}

@keyframes square {
  0% {
    opacity: 0.1;
    transform: translateX(0px) translateY(-10px) rotate(45deg);
  }
  55% {
    opacity: 0.2;
    transform: translateX(-400px) translateY(-20px) rotate(90deg);
  }
  50% {
    opacity: 0.3;
    transform: translateX(-600px) translateY(-30px) rotate(135deg);
  }
  100% {
    opacity: 0.4;
    transform: translateX(0px) translateY(-40px) rotate(45deg);
  }
}
.threeParts {
  display: inline;
}
.threeParts li {
  display: inline-block;
  width: 32%;
  padding: 14px 1%;
  text-align: center;
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
.trialImg {
  width: 30.5px;
  height: 33.5px;
}
.guideImg {
  width: 30px;
  height: 34px;
}
.twoTab {
  padding: 0px 0px 20px 0px;
  text-align: center;
}
.twoParts {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  top: 0px;
  border-bottom: solid 5px #f4f4f4;
}
.twoParts:nth-child(2) {
  border-left: solid 1px rgb(153, 153, 153, 0.1);
}
.twoParts b {
  font-size: 13px;
  letter-spacing: 0px;
  color: #333333;
  margin-left: 5px;
}
.homeCarousel img {
  height: 86px;
}
.homeCarousel,
.classifyPart,
.infoQury {
  border-bottom: solid 0.133333rem #f4f4f4;
}
.classifyPart {
  padding: 12px;
}
.homeSubtltle {
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
  border-left: solid 3.5px #2487ff;
  padding: 0px 11.5px;
}
.classifyContent {
  margin: 16.5px 0px 11px;
}
.classifyContent .classifyItem:nth-child(1) {
  float: left;
}
.classifyContent .classifyItem:nth-child(2) {
  float: right;
}
.classifyItem {
  background-color: #ffffff;
  box-shadow: 0px 0.5px 10.9px 3.1px rgba(153, 153, 153, 0.2);
  border-radius: 4px;
  padding: 16px 13px;
  height: 80px;
}
.classifyItem img {
  width: 45px;
  height: 45px;
}
.classifyDetail .classifyDetailItem:nth-child(1) {
  text-align: left;
}
.classifyDetail .classifyDetailItem:nth-child(2) {
  display: flex;
  justify-content: center;
}
.classifyDetailItem p:nth-child(1),
.moreInfo p {
  font-size: 18px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 7.5px;
}
.classifyDetailItem p:nth-child(2) {
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #999999;
}
.moreInfo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.infoQury {
  padding: 10.5px 5px;
}
.infoQuryItem img {
  width: 73.5px;
  height: 46px;
}
.infoQuryItem {
  height: 46px;
  display: flex;
  align-items: center;
}
.infoQuryItem:nth-child(2),
.queryArrow {
  font-size: 11.8px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
}
.infoQuryItem:nth-child(3) {
  position: relative;
  justify-content: center;
  height: 46px;
  font-weight: bolder;
  color: #999999;
}
.bottomTips {
  margin-bottom: 19px;
  padding: 22.5px 0px;
  text-align: center;
  font-size: 13px;
  letter-spacing: 0px;
  color: #999999;
  opacity: 0.5;
}
</style>
