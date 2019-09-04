<template>
  <div class="container">
    <apply-steps :stepNow='1' :stepNameArr='stepNameArr'></apply-steps>
    <div class="box-one"></div>

    <div class="middle">
      <div class="title"><b>就读高校信息</b></div>
      <div class="colleges">
        <span class="leftTwo">就读高校</span>
        <span><Input class="rightTwo" placeholder="请选择就读高校名称"/></span>
      </div>
      <div class="collegesAdress">
        <span class='leftThree'>就读高校地址1</span>
        <span class='rigthThree'>{{daichu}}</span>
      </div>
    </div>
    <div class="box-one"></div>
    <div class="last">

      <div class="title" style="font-size:16px; text-align: left;margin-left:16px; height:40px"><b>就读高校信息补录</b></div>
      <div class='year'>
        <span class='lfetFour'>入学年份</span>
        <Select v-model="model1" style="width:200px" class="app">
          <DatePicker type="datetime" placeholder="请选择入学年份" style="width: 200px"></DatePicker>
        </Select>
      </div>
      <div class='education'>
        <span class='leftFive'>攻读学历</span>
        <Select v-model="model1" style="width:200px" class="app">
          <Option v-for="item in educationList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class='schoolSystem'>
        <span class='leftSix'>学制</span>
        <Select v-model="model2" style="width:200px" class="app">
          <Option v-for="item in schoolSystem" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class='graduationYear' style="overflow: hidden">
        <span class='leftSeven'>毕业年份</span>
        <span style="float: right; margin-right:32px;">{{}}</span>
      </div>
      <div class='school'>
        <span class='leftEight'>学院</span>
        <span class='rightEight'><input type="text" placeholder="大一可暂不填写" class="amount-input"></span>
      </div>
      <div class='major'>
        <span class='leftNine'>专业</span>
        <span class='rightNine'><input type="text" placeholder="请输入整数位的贷款金额" class="amount-input"></span>
      </div>
      <div class='studentNumber'>
        <span class='leftTen'>学号</span>
        <span class='rightTen'><input type="text" placeholder="请输入整数位的贷款金额" class="amount-input"></span>
      </div>

      <div class="nextTo">
        <input type="button" value="下一步" @click="next" class="next-btn">
      </div>
    </div>
  </div>
</template>
<script>
  import applySteps from "@C/applyLoan/applySteps";

  export default {
     components: {
        applySteps
      },
    data() {
      
      return {
        model1: "",
        model2: "",
        daichu: "自动带出",

        educationList: [
          {
            value: '高中',
            label: '高中'
          },
          {
            value: '大专',
            label: '大专'
          },
          {
            value: '本科',
            label: '本科'
          },
          {
            value: '研究生',
            label: '研究生'
          },
          {
            value: '博士',
            label: '博士'
          },
          {
            value: '博士后',
            label: '博士后'
          }
        ],
        model1: '',

        schoolSystem: [
          {
            value: '三年',
            label: '三年'
          },
          {
            value: '四年',
            label: '四年'
          },
          {
            value: '五年',
            label: '五年'
          },
        ],
        options1: {
          shortcuts: [
            {
              text: 'Today',
              value() {
                return new Date();
              },
              onClick: (picker) => {
                this.$Message.info('Click today');
              }
            },
            {
              text: 'Yesterday',
              value() {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                return date;
              },
              onClick: (picker) => {
                this.$Message.info('Click yesterday');
              }
            },
            {
              text: 'One week',
              value() {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                return date;
              },
              onClick: (picker) => {
                this.$Message.info('Click a week ago');
              }
            }
          ]
        },
        stepNameArr:['就读高校','个人信息','联系人信息','贷款信息','上传影像']
      }
    },
      methods: {
        next(){
            this.$router.push({
          path: "/application/xinxiqueren"
        })
      },
     
  }
  }
</script>
<style>
  * {
    padding: 0;
    margin: 0
  }

  /* 主体样式 */
  html, body, #app {
    width: 100%
  }

  .container {
    width: 375px;
    height: 532px;
  }

  /* 商品收货信息一大块样式 */
  .content {
    width: 375px;
    height: 166px;
  }

  .middle {
    width: 375px;
    height: 155px;
  }

  .last {
    width: 375px;
    height: 532px;
  }

  .box-one {
    width: 100%;
    height: 10px;
    background: #f4f4f4;
  }

  /* 就读高校信息 */
  .title {
    font-size: 16px;
    text-align: left;
    margin-left: 16px;
    height: 40px
  }

  .colleges, .collegesAdress, .year, .education, .schoolSystem, .school, .graduationYear, .major, .studentNumber {
    height: 50px;
    text-align: center;
    vertical-align: middle;
    line-height: 50px;

  }

  .leftTwo, .leftThree, .lfetFour, .leftFive, .leftSix, .leftSeven, .leftEight, .leftNine, .leftTen {
    font-size: 13px;
    color: #333333;
    position: absolute;
    left: 16px;
    font-size: 13px;
    font-weight: bold;

  }

  .app {
    margin-top: -30px
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

  .nextTo {
    text-align: center;
    margin-top: 20px;
  }

  .next-btn {
    width: 275px;
    height: 40px;
    background-color: #2487ff;
    border-radius: 1px;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
    border: none;
    margin: 0 auto;
  }

  .rightTwo {
    position: relative;
    vertical-align: middle;
    margin-left: 40px;
    width: 223px;
    height: 25px;
    background: url("../../assets/images/search.png") no-repeat right center color #2487ff;
    background-size: 18px 18px;
    margin-left: 2.4rem;
  }

  /* input输入框样式 */
  .rightEight, .rightNine, .rightTen {
    width: 223px;
    height: 42px;
    background-color: #ededed;
    opacity: 0.4;
    position: absolute;
    right: 30px;
    border: none
  }

  .app.ivu-select-visible .ivu-select-selection {
    border-color: #ededed;
    box-shadow: unset;
  }

  .ivu-select-selection-focused, .ivu-select-selection:hover {
    border-color: #ededed;
  }

  .app .ivu-select-arrow {
    width: 0;
    height: 0;
    border-width: 5px 5px 0;
    border-style: solid;
    border-color: #000 transparent transparent;
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

