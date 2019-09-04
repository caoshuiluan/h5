<template>
  <div class="container">
    <div class="box-one"></div>

    <div class="content">
      <div style="font-size:16px; text-align: left;margin-left:16px; height:50px">
        <b>贷款信息</b>
      </div>
      <div class="purpose">
        <span class="leftOne">借款用途</span>
        <span class="rightOne">{{111}}元</span>
      </div>
      <div class="good-amount">
        <span class="leftTwo">申请金额</span>
        <span class="rightTwo">
          <input type="text" placeholder="请输入整数位的贷款金额" class="amount-input">
        </span>
      </div>
       <div class="purpose">
        <span class="leftNight">我的我的</span>
         <Select v-model="model2"  class="app">
            <Option v-for="item in schoolSystem" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
      </div>
      <div class="purpose">
        <span class="leftThree">高校收款账号名</span>
         <Select v-model="model2"  class="app">
            <Option  v-for="item in schoolSystem" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
      </div>
      <div class="purpose">
        <span class="leftFour">高校收款账号</span>
        <span class="righFour" >{{111}}元</span>
      </div>
      <div class="Choice">
        <span class="leftFive">开户名</span>
        <span class="rightFive">
        <RadioGroup v-model="selectRadio">
          <Radio label="是">
            <span>是</span>
          </Radio>
          <Radio label="否">
            <span>否</span>
          </Radio>
        </RadioGroup>
        <span >自主缴费</span>
        </span>
      </div>
      <div class="premium">
        <span class="leftSix">保费</span>
        <span class="rightSix">{{555}}元</span>
      </div>
      <div class="Loan-amount">
        <span class="leftSeven">借款金额</span>
        <span class="rightSeven">{{666}}元</span>
      </div>
      <div class="box-two"></div>
      <div class="content">
        <div style="font-size:16px; text-align: left;margin-left:16px; height:50px">
          <b>银行卡信息</b>
        </div>
        <div class="Loan-amount">
          <span class="leftEight">放款银行</span>
          <span class="rightEight">{{99999}}元</span>
        </div>
        <div class="bank-car">
          <img
            src="../../assets/images/bankUser.png" alt>
        </div>
        <div style="text-align: right; margin-right:10px">
            <span class="bank-car-right">贷款发放及还款卡</span>
            <a href="" calss="change-bank-car">更换绑定></a>
        </div>

        <!-- <input type="hidden" id="picIndex" value="0">
        <div id="image-list" class="row image-list">
          < <input id="upload_image" type="file" name="image" accept="image/*" /> -->
          <!-- <div class="image-item space" onclick="showActionSheet()">
            <div class="image-up"></div>
          </div>
        </div> --> 
      </div>
      <div class="nextTo">
        <input type="button" value="下一步" @click="next" class="next-btn">
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "applicationT",
  data() {
    return {
      111: "",
      222: "",
      car: "",
      radio: "",
      111111: "",
      next: "",
      model2:"",
      selectRadio:"",
      schoolSystem:[
                    {
                      label:"中国银行",
                      value:"中国银行"
                    }
      ]
    };
  },
  methods: { showActionSheet() {} }
};
</script>
<style !important>
   
*{padding: 0;margin:0}
/* 主体样式 */
html,
body,
#app {
    width: 100%;
}
.container {
    width: 375px;
    height: 1014px;
}
/* 中间信息带出部分 */
/* .content {
    width: 375px;
    height: 481px;
    background-color: #ffffff;
} */
.box-one {
    width: 100%;
    height: 10px;
    background: #f4f4f4;
}
.box-two {
    width: 100%;
    height: 10px;
    background: #f4f4f4;
}
/* 高校下拉框选择 */
.choice-school {
    width: 223px;
    height: 42px;
    background-color: #ededed;
    opacity: 0.4;
}
.app,.rightTwo{
    margin-right: -30px
}

element.style {
    width: 223px;
    height: 42px;
    background-color: #ededed;
    opacity: 0.4;
}
/* 金额输入框 */
.amount-input {
    width: 223px;
    height: 42px;
    background-color: #ededed;
    opacity: 0.4;
    float: right;
    margin-right: 30px;
}
/* 增加银行卡背景 */
.add-car {
    width: 225px;
    height: 152px;
    background-color: #ededed;
    margin: 10px 40px;
    margin: 0 auto;
    text-align: center;
}
/* 增加银行卡按钮 */
.add-bank-car {
    width: 146px;
    height: 96px;
    text-align: center;
    margin-top: 34px;
}
.purpose,.good-size,.good-amount,.Choice,.premium,.Loan-amount {
    height: 50px;
    text-align: center;
}
.leftOne,.leftTwo,.leftThree,.leftFour,.leftFive,.leftSix,.leftSeven,.leftEight,.leftNight,.bank-car-right {
    position: absolute;
    left: 16px;
    font-weight: bold;
}
.rightOne,.rightTwo,.righFour,.rightFive,.rightSix,.rightSeven,.rightEight,.change-bank-car,.app{
   position: absolute;
   right: 16px;
   margin-top: -10px;
     
}

.Bank-card {
    height: 30px;
    position: absolute;
    left: 16px;
    font-weight: bold;
}
.nextTo {
    text-align: center;
}
.next-btn {
    width: 275px;
    height: 40px;
    background-color: #2487ff;
    border-radius: 5px;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 1px;
    color: #ffffff;
    border: none;
    margin: 0 auto;
}
.content {
    width: 375px;
    height: 320px;
    background: #ffffff;
}
.leftOne {
    float: left;
}
.purpose.leftOne {
    float: left;
}
.rightThree{
    width: 223px;
    height: 42px;
    background-color: #ededed;
    opacity: 0.4;
}
 .app.ivu-select-single .ivu-select-selection {
    width: 5.946667rem;
    height: 1.12rem;
    background-color: #ededed;
    position: absolute;
    border: none;
}

.app.ivu-select-single .ivu-select-selection {
    width: 5.946667rem;
    height: 1.12rem;
    background-color: #ededed;
    position: absolute;
    border: none;
    right: 0.5rem;
    }
.app.ivu-select-visible .ivu-select-selection {
  border-color: #ededed;
  box-shadow: unset;
}
.ivu-select-selection-focused, .ivu-select-selection:hover {
  border-color: #ededed;
}
.app .ivu-select-arrow {
  width:0;
  height:0;
  border-width:5px 5px 0;
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
</style>