<template>
    <div>
    <div class="box-one"></div>
        <div class="content">
        <div class="info-box">
          <i ><img src="../../assets/images/zhuzhuang2x.png" alt="" class="img-left"></i>
          <span class="loan-info"><b>请完成学籍认证</b></span>
        </div>
       <div class="account">
        <span class="leftTwo">学信网账号</span>
        <span class="rightTwo">
          <input type="text" placeholder="请输入你的学信网账号" class="amount-input">
        </span>
      </div>
       <div class="password">
        <span class="leftThree">学信网密码</span>
        <span class="rightThree">
          <input type="text" placeholder="请输入你的学信网密码" class="amount-input">
        </span>
      </div>
    </div>
    <div class="content-last">
        <p class="Validation-tips">为顺利完成贷款申请操作，我司需对您的学籍信息进
行校验，请根据界面提示录入您在学信网注册的账号及密
码信息。</p>
        <div class="nextTo">
      <input type="button"  value="授权查询" @click="accredit" class="accredit-btn">
    </div>
    </div>
    </div>
</template>
<script
    export default{
        data(){
            return{
                click:""
            }
        },
        methods:{
            accredit(){
            this.$router.push({
            path: "/home/repayment"
        });
            }
        }
    }
</script>
<style>
.container{
    width: 375px;
	height: 667px;
}
.content{
    width: 375px;
	height: 181px;
}
.box-one {
    width: 100%;
    height: 10px;
    background: #f4f4f4;
}
.info-box{
    margin-top:10px;
    height: 42px;
    font-size: 16px;
    background-color: #ffffff;
    font-weight: bold;
    font-family: PingFangSC-Semibo
}
.img-left{
    width: 3.5px;
    height: 13px;
    margin-left: 10px;
}
/* 验证提示 */
.Validation-tips{
    text-indent: 2em;
    margin:0px 25px 0px 25px;
    padding-top:8px;
	font-family: PingFangSC-Regular;
	font-size: 13px;
	line-height: 18px;
	letter-spacing: 0px;
	color: #fb3333;
}
/* 金额输入框 */
.amount-input {
    width: 223px;
    height: 42px;
    background-color: #ededed;
    opacity: 0.4;
    float: right;
    margin-right: 0.6rem;
    margin-top: -10px;
}
.leftTwo,.leftThree {
    position: absolute;
    left: 16px;
    font-weight: bold;
}
.rightTwo,.rightThree{
    position: absolute;
    right: 21px;
    font-weight:bold;
}
.account,.password{
    height: 56px;
}
.content-last{
    width: 375px;
    height: 422px;
    background-color: #f4f4f4;
    
}
.nextTo {
    text-align: center;
   
}
.accredit-btn{
    width: 275px;
    height: 44px;
    background-color: #2487ff;
    border-radius: 5px;
    font-size: 18px;
    color: #ffffff;
    border: none;
    margin: 0 auto;
    margin-top: 86px;
}
</style>
