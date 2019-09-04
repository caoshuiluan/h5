<template>
  <div class="header" :class="isClarity?'clarity':''" v-if="hasHeader">
    <div class="myMask" v-show="popTipVisible"></div>
    <a class="backIcon" @click="goback()" v-if="hasBack">
      <img src="../../assets/images/back.png" alt="返回">
    </a>
    <a class="backIcon" @click="goback()" v-if="grayBack">
      <img src="../../assets/images/backCircle.png" class="transformBack" alt="返回">
    </a>
    <div class="title">{{title}}</div>
    <a class="historyIcon" v-if="hasHistory">
      <img src="../../assets/images/history.png" alt="历史">
    </a>
    <a class="historyIcon" v-if="hasNotice">
      <img src="../../assets/images/notice.png" alt="历史">
    </a>
    <a class="historyIcon" v-if="seach">
      <img src="../../assets/images/search.png" alt="搜索">
    </a>
    <Poptip
      placement="bottom-end"
      width="96.5"
      v-if="more"
      class="headerPopTips"
      v-model="popTipVisible"
    >
      <a class="historyIcon moreIcon">
        <img src="../../assets/images/more.png" alt="搜索">
      </a>
      <div slot="content">
        <p class="lineBottom" @click.stop="toPage(2)">联系客服</p>
        <p @click.stop="toPage(3)">意见反馈</p>
      </div>
    </Poptip>
    <a class="University" v-if="University">请输入搜索高校名字</a>
  </div>
</template>

<script>
export default {
  name: "v-header",
  data() {
    return {
      title: "",
      hasHistory: true,
      isClarity: false,
      hasHeader: true,
      hasNotice: false,
      hasBack: true,
      seach: false,
      University: false,
      grayBack: false,
      more: false,
      popTipVisible: false
    };
  },
  props: ["headerTitle"],
  watch: {
    $route(newRouter) {
      Object.assign(this.$data, this.$options.data());
      //console.log(newRouter);
      // if (/index/.test(newRouter)) {
      //   this.title = "首页";
      // }
      switch (newRouter.name) {
        case "index":
          this.title = "首页";
          break;
        case "NewConsultationList":
          this.title = "信息资讯";
          break;
        case "NewsDetails":
          this.title = "";
          this.hasHistory = false;
          this.isClarity = true;
          break;
        case "noticeList":
          this.title = "消息通知";
          break;
        case "noticeDetails":
          this.title = "消息通知";
          break;
        case "home":
          this.hasHeader = false;
          break;
        case "personal":
          this.hasHeader = false;
          break;
        case "enter":
          this.title = "登入";
          this.hasBack = true;
          break;
        case "Verification":
          s;
          this.title = "登入";
          this.hasBack = true;
          break;
        case "LoginPage":
          this.title = "登入";
          this.hasBack = true;
          break;
        case "applicationT":
          this.title = "贷款申请";
          break;
        case "loanApplication":
          this.title = "贷款申请";
          break;
        case "loanApplicationNext":
          this.title = "贷款申请";
          break;
        case "applicationF":
          this.title = "贷款申请";
          break;
        case "signFile":
          this.title = "签署文件";
          this.hasHistory = false;
          break;
        case "repay":
          this.title = "还款试算";
          this.hasHistory = false;
          break;
        case "applicationGuide":
          this.title = "申请指南";
          this.hasHistory = false;
          this.isClarity = true;
          break;
        case "applicationS":
          this.title = "贷款申请";
          break;
        case "jianhuren":
          this.title = "贷款申请";
          break;
        case "xinxiqueren":
          this.title = "贷款申请";
          break;
        case "addNewAccount":
          this.title = "贷款申请";
          break;
        case "goodsList":
          this.title = "商品";
          this.hasHistory = false;
          this.hasBack = false;
          break;
        case "goodsDetail":
          // this.title = "商品详情";
          this.hasHistory = false;
          this.isClarity = true;
          this.grayBack = true;
          break;
        case "contractText":
          this.title = "我的合同";
          this.hasHistory = false;
          break;
        case "selfInfo":
          this.title = "个人信息";
          this.hasHistory = false;
          break;
        case "authentication":
          this.title = "实名认证";
          this.hasHistory = false;
          break;
        case "lianxiren":
          this.title = "贷款申请";
          this.hasHistory = false;
          break;
        case "information":
          this.title = "联系人信息";
          this.hasHistory = false;
          break;
        case "suoxuziliao":
          this.title = "贷款申请";
          this.hasHistory = false;
          break;
        case "guardian":
          this.title = "联系人信息";
          break;
        case "setting":
          this.title = "设置";
          this.hasHistory = false;
          break;
        case "security":
          this.title = "安全中心";
          this.hasHistory = false;
          break;
        case "modifyInfo":
          this.hasHistory = false;
          if (newRouter.query) {
            if (newRouter.query.type == "p") {
              this.title = "修改绑定手机号";
              return;
            }
            if (newRouter.query.type == "e") {
              this.title = "修改安全邮箱";
              return;
            } else {
              this.title = "修改绑定手机号";
              this.$store.modifyType = "p";
              return;
            }
          } else {
            this.title = "修改绑定手机号";
            this.$store.modifyType = "p";
            return;
          }
          break;
        case "modifyPWD":
          this.title = "修改密码";
          this.hasHistory = false;
          break;
        case "myLoan":
          this.title = "我的贷款";
          this.hasHistory = false;
          break;
        case "applicationHistory":
          this.title = "我的申请历史记录";
          this.hasHistory = false;
          break;
        case "settledLoan":
          this.title = "提前结清";
          this.hasHistory = false;
          break;
        case "loanDetail":
          this.title = "贷款详情";
          this.hasHistory = false;
          break;
        case "lendingContract":
          if (newRouter.query.type == 1) {
            this.title = "用户服务协议";
          } else {
            this.title = "借款合同";
          }
          this.hasHistory = false;
          break;
        case "refundDetail":
          this.title = "还款明细";
          this.hasHistory = false;
          break;
        case "bankCards":
          this.title = "我的银行卡";
          this.hasHistory = false;
          break;
        case "gaoxiaosousuo":
          this.hasHistory = false;
          this.University = true;
          break;
        case "loan":
          this.title = "贷款";
          this.hasHistory = false;
          this.hasBack = false;
          break;
        case "OrderDetails":
          this.title = "贷款";
          this.hasHeader = false;
          break;
        case "addAccount":
          this.title = "新增收款账户";
          this.hasHistory = false;
          this.hasBack = true;
          break;
        case "EarlyRepayment":
          this.hasHeader = false;
          break;
        case "order":
          this.title = "贷款";
          this.hasHistory = false;
          this.hasBack = false;
          break;
        case "gaoxiaosousuo":
          this.hasHeader = false;
          break;
        case "loanOrderNeed":
          this.hasHeader = false;
          break;
        case "contactService":
          this.title = "联系客服";
          this.hasHistory = false;
          break;
        case "mineService":
          this.title = "我的客服";
          this.hasHistory = false;
          this.hasBack = true;
          this.more = true;
          break;
        case "feedBack":
          this.title = "意见反馈";
          this.hasHistory = false;
          break;
           case "order1":
          this.hasHeader = false;
          break;
          
        default:
          this.title = "未知页";
      }
    }
  },
  methods: {
    goback() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/xwapp/enter" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    toPage(num) {
      let pathStr = "";
      switch (num) {
        case 1:
          pathStr = "/notice/List";
          break;
        case 2:
          pathStr = "/mine/contactService";
          break;
        case 3:
          pathStr = "/mine/feedBack";
          break;
        case 4:
          pathStr = "";
          break;
      }
      console.log(pathStr);
      if (pathStr) {
        this.$router.push({
          path: pathStr
        });
      }
    }
  },
  created() {}
};
</script>

<style>
.header {
  height: 45px;
  line-height: 45px;
  background-color: #2487ff;
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 15px;
  position: fixed;
  width: 100%;
  z-index: 22;
  top: 0;
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
.historyIcon {
  display: flex;
  justify-content: flex-end;
}
.historyIcon img {
  vertical-align: middle;
  height: 20px;
}
.clarity {
  background-color: #ffffff; /* IE6和部分IE7内核的浏览器(如QQ浏览器)下颜色被覆盖 */
  background-color: rgba(255, 255, 255, 0);
}
.title {
  margin: 0 auto;
}
.arrowDown {
  transform: rotate(-90deg);
}

.University {
  width: 277px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 15px;
  margin: -20px auto;
  text-align: center;
  font-size: 14px;
  line-height: 2.9px;
  letter-spacing: -0.1px;
  color: #999999;
  opacity: 0.5;
}
.moreIcon img {
  width: 26px;
  height: 6.5px;
  z-index: 2;
}
.myMask {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #000000;
  opacity: 0.7;
  width: 100%;
}
.transformBack {
  transform: rotateX("180");
}
</style>

