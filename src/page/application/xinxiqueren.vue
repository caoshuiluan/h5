<template>
    <div class="container">
        <apply-steps :stepNow='2' :stepNameArr='stepNameArr'></apply-steps>
        <div class="box-one"></div>
            <div class="content">
              <div style="font-size:16px; text-align: left;margin-left:16px; height:50px">
             <b>个人信息确认</b>
            </div>
              <div class="people-name">
                <span class="name">姓名</span>
                <span class="name-show">{{111}}元</span>
            </div>  
            <div class="people-car">
                <span class="carNumber">身份证号码</span>
                <span class="carNumber-show">{{111}}元</span>
            </div>
             <div class="address">
                <span class="addressTo">户籍地址</span>
                <span class="addressTo-show">{{111}}元</span>
            </div>
             <div class="term-of-validity">
                <span class="term-of-validity-car">身份证有效期</span>
                <span class="term-of-validity-car-show">{{111}}元</span>
            </div>
             <div class="cellphone">
                <span class="phoneNumber">手机号码</span>
                <span class="phoneNumber-show">{{111}}元</span>
            </div>
            </div>
        <div class="box-one"></div>
        <div>
            <div>
              <div style="font-size:16px; text-align: left;margin-left:16px; height:50px">
             <b>个人信息补录</b>
            </div>
            <div class='home-address'>
                <span class='home-addrssTo' style="margin-top:-20px;">家庭地址</span>
                <Select v-model="model2" style="width:200px" class="app" placeholder="请选择">
                   <Option v-for="item in cityList"  :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
          </div>
          <div  class="address-more">
              <span class="address-more-input"><input type="text" placeholder="请输入家庭详细地址"></span>
          </div>
           <div class=" email">
            <span class="emailUser">常用邮箱</span>
            <span class="emailTo">
                 <input type="text" placeholder="请输入常用邮箱" class="email-input">
            </span>
          </div>
          <div class="QQ">
            <span class="QQ-number">QQ号</span>
            <span class="QQ-to">
                 <input type="text" placeholder="请输入你的QQ号" class="QQ-input">
            </span>
        </div>
       <div class="WX">
            <span class="wxNumber">微信号</span>
            <span class="wxNumberTo">
                 <input type="text" placeholder="请输入整数位的贷款金额" class="wx-input">
            </span>
        </div>
        <div class="nextTo">
          <input type="button" value="下一步" @click="next" class="next-btn">
       </div>   
    </div>
    </div>
    </div>

</template>
<script>
 import applySteps from "@C/applyLoan/applySteps";
export default {
    components:{
        applySteps
      },
    data(){
        return{
            model2:"",
            stepNameArr:"",
            cityList: [
                    {
                        value: '广东',
                        label: '广东'
                    },
                    {
                        value: '湖南',
                        label: '湖南'
                    },
                   
                ],

        }
    },
    methods:{
         next(){
            this.$router.push({
          path: "/application/jianhuren"
        })
      }
    }

}
</script>
<style>
.container{
    width: 375px;
    height: 842px;
}
.content{
    width: 375px;
	height: 230px;
	background-color: #ffffff;
}
.content-last{
    width: 375px;
	height: 435px;	
}
.box-one {
    width: 100%;
    height: 10px;
    background: #f4f4f4;
}
.app{
    margin-top: -40px;
}
/* 页面上半部分姓名、电话、地址等 */
.people-name,.people-car,.address,.term-of-validity,.cellphone{
    height: 40px;
    text-align: center;
}
.name,.carNumber,.addressTo,.term-of-validity-car,.phoneNumber{
    position: absolute;
    left: 16px;
    font-weight: bold;
	font-family: PingFangSC-Medium;
	font-size: 13px;
	letter-spacing: 0px;
	color: #333333;
}
.address-more,.email,.QQ,.WX,.home-addrssTo{
    height: 60px;
    text-align: center;
    vertical-align: middle;
    line-height: 60px;
}
/* 常常用邮箱，地址，微信等字体 */
.emailUser,.home-addrssTo,.QQ-number,.wxNumber{
    position: absolute;
    left: 16px;
    font-weight: bold;
}
.address-more{
    margin-top: 30px;
}
.home-addrssTo{
    margin-top:-30px;
}
.address-more-input,.emailTo,.QQ-to,.wxNumberTo{
    width: 223px;
	height: 42px;
    position: absolute;
    right: 30px;
    border: none
}
button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    width: 223px;
    height: 42px;
    background-color: #ededed;
    border: none;
    text-align: center;
}
.app.ivu-select-visible .ivu-select-selection {
    border-color: #ededed;
    box-shadow: unset;
}
.ivu-select-selection-focused, .ivu-select-selection:hover {
    border-color: #ededed;
}
.app .ivu-select-arrow {
    width:0px;
    height:0px;
    border-width:5px 5px 0px;
    border-style:solid;
    border-color:#000 transparent transparent;
}
.app .ivu-icon-ios-arrow-down:before {
     content: "";
}
.app.ivu-select-single .ivu-select-selection {
    width: 223px;
	height: 42px;
	background-color: #ededed;
    position: absolute;
     right: 30px;
    border: none;
}
.app.ivu-select-single .ivu-select-selection .ivu-select-placeholder, .app.ivu-select-single .ivu-select-selection .ivu-select-selected-value {
    height: 42px;
    line-height: 42px;
}
.app.ivu-select .ivu-select-dropdown {
    width: 223px;
}
.nextTo{
    text-align: center;
    margin-top: 20px;
}
.next-btn{
    font-size: 18px;
    line-height:30px;
    letter-spacing: 1px;
    color: #ffffff;
    border:none;
    margin:0 auto;
    width: 275px;
	height: 44px;
	background-color: #2487ff;
	border-radius: 5px;
}

</style>


