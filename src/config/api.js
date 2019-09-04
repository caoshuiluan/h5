import { getByToken, postParams, post, get } from './interacts'
import { DATA_URL } from './config'

export default {
    /**我的模块 */
    // 我的申请
    getApplicationList(params) {
        return postParams(DATA_URL + "init/loan/queryApply", params);
    },
    //获取贷款列表
    getLoanList(params) {
        return postParams(DATA_URL + "init/loan/queryLoan", params);
    },
    //获取问题列表
    getQuestionList(params) {
        return get(DATA_URL + "init/systems/commonProblem", params);
    },
    //获取问题内容
    getAnswer(params) {
        return get(DATA_URL + "init/systems/problemContent", params);
    },
    //我的客服-点赞差评接口
    setEstimate(params) {
        return postParams(DATA_URL + "init/systems/helpResult", params);
    },
    //通过旧密码更改密码
    changePWDByOld(params) {
        return postParams(DATA_URL + "init/accounts/updatePassword", params);
    },
    // 发送手机验证码无需手机号
    sendPhoneCode(params) {
        return getByToken(DATA_URL + "init/externals/sendMobileCodeByToken", params);
    },
    //获取意见反馈列表
    getFeedBackList(params) {
        return getByToken(DATA_URL + "init/systems/selectFeedback", params);
    },
    //发送消息
    sendOpinion(params) {
        return postParams(DATA_URL + "init/systems/insertFeedback", params);
    },
    //我的还款列表
    getRefundList(params) {
        return postParams(DATA_URL + "init/loan/querySettledAccount", params);
    },
    //我的结清列表
    getRefundSettledList(params) {
        return postParams(DATA_URL + "init/loan/settledAccountCheck", params);
    },
    //结清试算
    getTrialResult(params) {
        return postParams(DATA_URL + "init/loan/settledAccountTrial", params);
    },
    //提前结清
    payEarlier(params) {
        return postParams(DATA_URL + "init/loan/settledAccountSubmit", params);
    },
    //发送意见
    sendMessage(params) {
        return postParams(DATA_URL + "init/systems/insertFeedback", params);
    },
    //获取还款明细
    getRefundDetail(params) {
        return postParams(DATA_URL + "init/loan/repaymentPlan", params);
    },
    //获取消息通知列表
    getNoticeList(params) {
        return get(DATA_URL + "init/systems/noticeMess", params);
    },
    //获取消息内容
    getNoticeDetail(params) {
        return get(DATA_URL + "init/systems/noticeMessContent", params);
    },
    //获取资讯列表
    getNewsList(params) {
        return get(DATA_URL + "init/systems/msgInfo", params);
    },
    //获取资讯详情
    getNewsDetails(params) {
        return get(DATA_URL + "init/systems/msgContent", params);
    },
    //获取省份列表
    getProvinces(params) {
        return get(DATA_URL + "init/commons/selectAllProv", params)
    },
    //获取商品列表
    getGoodsList(params) {
        return get(DATA_URL + "init/goods/selectBrandAllLowGoods", params);
    },
    //获取选择区间
    getSelectItems(params) {
        return get(DATA_URL + "init/goods/selectGoodsTypeAndBrand", params);
    },
    //银行卡信息
    getBankInfo(params) {
        return getByToken(DATA_URL + "init/commons/selectBankCard", params);
    },
    //获取系统信息
    getSysInfo(params) {
        return get(DATA_URL + "init/systems/getSysInfo", params);
    },
    //登录
    login(params) {
        return postParams(DATA_URL + "init/accounts/login", params);
    },
    //查询用户监护人或紧急联系人信息
    selectContactsMsg(params) {
        return getByToken(DATA_URL + "init/accounts/selectContactsMsg", params);
    },
    //添加用户监护人或紧急联系人信息
    addContactsMsg(params) {
        return postParams(DATA_URL + "init/accounts/insertContactsMsg", params);
    },
}

