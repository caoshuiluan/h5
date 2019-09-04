<template>
  <div class="personalCenter">
    <div class="personalHeader">
      <Row class="noticeIcon">
        <img src="../../assets/images/notice.png" alt="历史" @click="toPage(8)">
      </Row>
      <Row>
        <Col span="6" class="userImg">
          <img :src="require('@img/userImg.png')">
        </Col>
        <Col :span="isLogin?'12':'16'" class="userStatus">
          <p>登陆/注册</p>
        </Col>
        <Col span="4" v-show="isLogin" class="authenType">
          <p class="isAuthen" v-if="isAuthen">已实名</p>
          <p class="inAuthen" @click.stop="toPage(9)" v-else>未认证</p>
        </Col>
        <Col span="2" class="userArrow">
          <img :src="require('@img/back.png')">
        </Col>
      </Row>
    </div>
    <Row class="personalTab">
      <Col span="8" class="tabItem">
        <img :src="require('@img/infoUser.png')">
        <p>常用信息</p>
      </Col>
      <Col span="8" class="tabItem" @click.native="toPage(6)">
        <img :src="require('@img/bankUser.png')">
        <p>我的银行卡</p>
      </Col>
      <Col span="8" class="tabItem" @click.native="toPage(7)">
        <img :src="require('@img/fileUser.png')">
        <p>我的合同</p>
      </Col>
    </Row>
    <div class="personalRow">
      <Row class="infoRow lineBottom" @click.native="toPage(1)">
        <Col span="3" class="infoItem">
          <img :src="require('@img/moneyUser.png')">
        </Col>
        <Col span="19" class="infoItem">
          <p>我的贷款</p>
        </Col>
        <Col span="2" class="infoItem">
          <img :src="require('@img/backGray.png')">
        </Col>
      </Row>
      <Row class="infoRow lineBottom" @click.native="toPage(2)">
        <Col span="3" class="infoItem">
          <img :src="require('@img/maleUser.png')">
        </Col>
        <Col span="19" class="infoItem">
          <p>我的客服</p>
        </Col>
        <Col span="2" class="infoItem">
          <img :src="require('@img/backGray.png')">
        </Col>
      </Row>
      <Row class="infoRow lineBottom" @click.native="toPage(3)">
        <Col span="3" class="infoItem">
          <img :src="require('@img/buildingUser.png')">
        </Col>
        <Col span="19" class="infoItem">
          <p>关于我们</p>
        </Col>
        <Col span="2" class="infoItem">
          <img :src="require('@img/backGray.png')">
        </Col>
      </Row>
      <Row class="infoRow lineBottom" @click.native="toPage(4)">
        <Col span="3" class="infoItem">
          <img :src="require('@img/shareUser.png')">
        </Col>
        <Col span="19" class="infoItem">
          <p>推荐好友</p>
        </Col>
        <Col span="2" class="infoItem">
          <img :src="require('@img/backGray.png')">
        </Col>
      </Row>
      <Row class="infoRow lineBottom" @click.native="toPage(5)">
        <Col span="3" class="infoItem">
          <img :src="require('@img/settingUser.png')">
        </Col>
        <Col span="19" class="infoItem">
          <p>设置</p>
        </Col>
        <Col span="2" class="infoItem">
          <img :src="require('@img/backGray.png')">
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      isAuthen: false
    };
  },
  created() {
    this.$store.state.footerSelect = 4;
  },
  methods: {
    toPage(num) {
      let pathStr = "";
      switch (num) {
        case 1:
          pathStr = "/mine/loan";
          break;
        case 2:
          pathStr = "/mine/mineService";
          break;
        case 3:
          pathStr = "";
          break;
        case 4:
          pathStr = "";
          break;
        case 5:
          pathStr = "/mine/setting";
          break;
        case 6:
          pathStr = "/mine/bankCards";
          break;
        case 7:
          pathStr = "/mine/contractText";
          break;
        case 8:
          pathStr = "/notice/List";
          break;
        case 9:
          pathStr = "/mine/authentication";
          break;
      }
      if (pathStr) {
        this.$router.push({
          path: pathStr
        });
      }
    }
  }
};
</script>

<style scoped>
.personalCenter {
  background: #ededed;
  top: 0px;
  bottom: 0;
  position: fixed;
  width: 100%;
  /* overflow-y: scroll;
  overflow-x: hidden; */
}
.noticeIcon {
  margin-bottom: 11.5px;
  width: 100%;
}
.noticeIcon img {
  width: 20px;
  height: 18px;
  float: right;
  margin-right: -14px;
}
.personalHeader {
  height: 172.5px;
  background-color: #2487ff;
  padding: 11.5px 29px;
}
.userImg,
.userStatus,
.userArrow,
.authenType {
  display: flex;
  align-items: center;
  height: 70px;
}
.userImg img {
  width: 70px;
  height: 70px;
}
.userStatus {
  padding-left: 22px;
}
.userStatus p {
  font-size: 23px;
  letter-spacing: 0px;
  color: #ffffff;
}
.userArrow img {
  transform: rotate(180deg);
  width: 12px;
  height: 21px;
}
.personalTab {
  height: 75px;
  background-color: #ffffff;
  box-shadow: 0px 1.5px 16.5px 1.1px rgba(205, 205, 205, 0.41);
  border-radius: 2.5px;
  margin: -37.5px 16px;
  display: flex;
  align-items: center;
}
.tabItem {
  text-align: center;
}
.tabItem:nth-child(1) img {
  width: 27px;
  height: 23.5px;
}
.tabItem:nth-child(2) img {
  width: 28.5px;
  height: 21.5px;
}
.tabItem:nth-child(3) img {
  width: 21.5px;
  height: 27px;
}
.personalRow {
  margin-top: 54.5px;
}
.infoItem:nth-child(1) img {
  width: 23.5px;
  height: 23.5px;
}
.infoItem:nth-child(3) img {
  width: 7px;
  height: 12.5px;
}
.infoRow {
  height: 55px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 27px;
}
.infoRow .infoItem:nth-child(2) {
  font-size: 14px;
  line-height: 21.2px;
  letter-spacing: 0.2px;
  color: #333333;
}
.infoRow:nth-child(3) {
  margin-top: 10px;
}
.infoRow:nth-child(5) {
  margin-bottom: 89px;
}
.isAuthen,
.inAuthen {
  background-color: #ffffff;
  border-radius: 3px;
  font-size: 14px;
  letter-spacing: 0px;
  color: #2487ff;
  padding: 3px;
}
.inAuthen {
  color: #fb3333;
}
</style>

