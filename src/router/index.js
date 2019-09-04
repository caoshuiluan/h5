import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "history",
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/index/index.html", redirect: "/home" },

    {
      path: "/index",
      name: "index",
      component: resolve => require(["@P/index/index.vue"], resolve)
    },
    {
      path: "/login/enter",
      name: "enter",
      component: resolve => require(["@P/login/enter.vue"], resolve)
    },
    {
      path: "/login/LoginPage",
      name: "LoginPage",
      component: resolve => require(["@P/login/LoginPage.vue"], resolve)
    },
    {
      path: "/home",
      name: "home",
      component: resolve => require(["@P/home/home.vue"], resolve)
    },
    {
      path: "/application/applicationT",
      name: "applicationT",
      component: resolve => require(["@P/application/applicationT.vue"], resolve)
    },
    {
      path: "/application/loanApplication",
      name: "loanApplication",
      component: resolve => require(["@P/application/loanApplication.vue"], resolve)
    },
    {
      path: "/application/loanApplicationNext",
      name: "loanApplicationNext",
      component: resolve => require(["@P/application/loanApplicationNext.vue"], resolve)
    },
    {
      path: "/application/applicationF",
      name: "applicationF",
      component: resolve => require(["@P/application/applicationF.vue"], resolve)
    },
    //created by Crystal 2019/3/15
    //还款试算
    {
      path: "/home/repayment",
      name: "repay",
      component: resolve => require(["@P/home/repayTrial.vue"], resolve)
    },
    //申请指南
    {
      path: "/home/applicationGuide",
      name: "applicationGuide",
      component: resolve => require(["@P/home/applicationGuide.vue"], resolve)
    },
    //商品列表
    {
      path: "/goods/goodsList",
      name: "goodsList",
      component: resolve => require(["@P/goods/goodsList.vue"], resolve)
    },
    //商品详情
    {
      path: "/goods/goodsDetail",
      name: "goodsDetail",
      component: resolve => require(["@P/goods/goodsDetail.vue"], resolve)
    },
    //合同文本
    {
      path: "/mine/contractText",
      name: "contractText",
      component: resolve => require(["@P/mine/contractText.vue"], resolve)
    },
    //个人信息
    {
      path: "/mine/selfInfo",
      name: "selfInfo",
      component: resolve => require(["@P/mine/selfInfo.vue"], resolve)
    },
    //add by Crystal 2019/3/13
    //信息资讯
    {
      path: "/newsConsultation/list",
      name: "NewConsultationList",
      component: resolve => require(["@P/xinxizixun/NewsConsultationList.vue"], resolve)
    },
    //咨询详情
    {
      path: "/newsConsultation/details",
      name: "NewsDetails",
      component: resolve => require(["@P/xinxizixun/NewsDetails.vue"], resolve)
    },
    //消息通知列表
    {
      path: "/notice/List",
      name: "noticeList",
      component: resolve => require(["@P/notice/noticeList.vue"], resolve)
    },
    //消息通知详情
    {
      path: "/notice/details",
      name: "noticeDetails",
      component: resolve => require(["@P/notice/noticeDetail.vue"], resolve)
    },
    //created by Crystal 2019/3/14
    //首页
    // {
    //   path: "/home",
    //   name: "home",
    //   component: resolve => require(["@P/home/home.vue"], resolve)
    // },
    //签署文件
    {
      path: "/sign/signFile",
      name: "signFile",
      component: resolve => require(["@P/sign/signFile.vue"], resolve)
    },
    //贷款申请
    {
      path: "/application/applicationS",
      name: "applicationS",
      component: resolve => require(["@P/application/applicationS.vue"], resolve)
    },
    //贷款申请中监护人页面
    {
      path: "/application/jianhuren",
      name: "jianhuren",
      component: resolve => require(["@P/application/jianhuren.vue"], resolve)
    },
    //贷款申请中信息确认页面
    {
      path: "/application/xinxiqueren",
      name: "xinxiqueren",
      component: resolve => require(["@P/application/xinxiqueren.vue"], resolve)
    },
    //贷款申请收款账户信息
    {
      path: "/application/addNewAccount",
      name: "addNewAccount",
      component: resolve => require(["@P/application/addNewAccount.vue"], resolve)
    },
    //贷款申请所需资料
    {
      path: "/application/suoxuziliao",
      name: "suoxuziliao",
      component: resolve => require(["@P/application/suoxuziliao.vue"], resolve)
    },
    //贷款申请添加联系人页面
    {
      path: "/application/lianxiren",
      name: "lianxiren",
      component: resolve => require(["@P/application/lianxiren.vue"], resolve)
    },
    //贷款申请紧急联系人信息输入页面
    {
      path: "/application/information",
      name: "information",
      component: resolve => require(["@P/application/information.vue"], resolve)
    },
    //贷款申请监护人信息输入页面
    {
      path: "/application/guardian",
      name: "guardian",
      component: resolve => require(["@P/application/guardian.vue"], resolve)
    },
    {
      path: "/application/gaoxiaosousuo",
      name: "gaoxiaosousuo",
      component: resolve => require(["@P/application/gaoxiaosousuo.vue"], resolve)
    },
    //实名认证
    {
      path: "/mine/authentication",
      name: "authentication",
      component: resolve => require(["@P/mine/authentication.vue"], resolve)
    },
    //个人中心
    {
      path: "/mine",
      name: "personal",
      component: resolve => require(["@P/mine/personal.vue"], resolve)
    },
    //设置
    {
      path: "/mine/setting",
      name: "setting",
      component: resolve => require(["@P/mine/setting.vue"], resolve)
    },
    {
      path: "/mine/authentication",
      name: "authentication",
      component: resolve => require(["@P/mine/authentication.vue"], resolve)
    },
    {
      path: "/xudai/RenewalLoanInformation",
      name: "RenewalLoanInformation",
      component: resolve => require(["@P/xudai/RenewalLoanInformation.vue"], resolve)
    },
    {
      path: "/xudai/RenewalAmount",
      name: "RenewalAmount",
      component: resolve => require(["@P/xudai/RenewalAmount.vue"], resolve)
    },
    {
      path: "/xudai/RenewalAccount",
      name: "RenewalAccount",
      component: resolve => require(["@P/xudai/RenewalAccount.vue"], resolve)
    },
    {
      path: "/xuejirenzheng/StudentStatusCertification",
      name: "StudentStatusCertification",
      component: resolve => require(["@P/xuejirenzheng/StudentStatusCertification.vue"], resolve)
    },
    {
      path: "/xudai/addAccount",
      name: "addAccount",
      component: resolve => require(["@P/xudai/addAccount.vue"], resolve)
    },
    {
      path: "/xudai/ExtensionOfApplication",
      name: "ExtensionOfApplication",
      component: resolve => require(["@P/xudai/ExtensionOfApplication.vue"], resolve)
    },
    {
      path: "/daikuandingdan/loan",
      name: "loan",
      component: resolve => require(["@P/daikuandingdan/loan.vue"], resolve)
    },
    //安全中心
    {
      path: "/mine/security",
      name: "security",
      component: resolve => require(["@P/mine/security.vue"], resolve)
    },
    //修改手机号或邮箱
    {
      path: "/mine/modifyPhoneEmail",
      name: "modifyInfo",
      component: resolve => require(["@P/mine/modifyPhoneEmail.vue"], resolve)
    },
    //修改密码
    {
      path: "/mine/modifyPWD",
      name: "modifyPWD",
      component: resolve => require(["@P/mine/modifyPWD.vue"], resolve)
    },
    //我的客服
    {
      path: "/mine/mineService",
      name: "mineService",
      component: resolve => require(["@P/mine/mineContact.vue"], resolve)
    },
    //联系客服
    {
      path: "/mine/contactService",
      name: "contactService",
      component: resolve => require(["@P/mine/contactService.vue"], resolve)
    },
    //意见反馈
    {
      path: "/mine/feedBack",
      name: "feedBack",
      component: resolve => require(["@P/mine/feedBack.vue"], resolve)
    },
    //我的贷款
    {
      path: "/mine/loan",
      name: "myLoan",
      component: resolve => require(["@P/mine/loan.vue"], resolve)
    },
    //我的申请历史纪录
    {
      path: "/mine/applicationHistory",
      name: "applicationHistory",
      component: resolve => require(["@P/mine/applicationHistory.vue"], resolve)
    },
    //提前结清
    {
      path: "/mine/settledLoan",
      name: "settledLoan",
      component: resolve => require(["@P/mine/settledLoan.vue"], resolve)
    },
    //贷款详情
    {
      path: "/mine/loanDetail",
      name: "loanDetail",
      component: resolve => require(["@P/mine/loanDetail.vue"], resolve)
    },
    //借款合同
    {
      path: "/mine/lendingContract",
      name: "lendingContract",
      component: resolve => require(["@P/mine/lendingContract.vue"], resolve)
    },
    //还款明细
    {
      path: "/mine/refundDetail",
      name: "refundDetail",
      component: resolve => require(["@P/mine/refundDetail.vue"], resolve)
    },
    //我的银行卡
    {
      path: "/mine/bankCards",
      name: "bankCards",
      component: resolve => require(["@P/mine/bankCards.vue"], resolve)
    },
    //我的银行卡
    {
      path: "/daikuandingdan/order1",
      name: "order1",
      component: resolve => require(["@P/daikuandingdan/order1.vue"], resolve)
    },
    //我的银行卡
    {
      path: "/daikuandingdan/OrderDetails",
      name: "OrderDetails",
      component: resolve => require(["@P/daikuandingdan/OrderDetails.vue"], resolve)
    },
    {
      path: "/daikuandingdan/loanOrderNeed",
      name: "loanOrderNeed",
      component: resolve => require(["@P/daikuandingdan/loanOrderNeed.vue"], resolve)
    },
    {
      path: "/daikuandingdan/EarlyRepayment",
      name: "EarlyRepayment",
      component: resolve => require(["@P/daikuandingdan/EarlyRepayment.vue"], resolve)
    },
    {
      path: "/login/Verification",
      name: "Verification",
      component: resolve => require(["@P/login/Verification.vue"], resolve)
    },
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name
      ? next({
        name: from.name
      })
      : next("/xwapp/index");
  } else {
    next(); //如果匹配到正确跳转
  }
});
export default router;
