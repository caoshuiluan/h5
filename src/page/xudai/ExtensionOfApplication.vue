<template>
    <div>
        <div class="box-one"></div>
     <div class="info-box">
          <i ><img src="../../assets/images/zhuzhuang2x.png" alt="" class="img-left"></i>
          <span class="loan-info"><b>就读高校信息</b></span>
          </div>
      <div class='university'>
        <span class='leftOne'>就读高校</span>
        <span class="rightOne">
            <Input search placeholder="请选择就读高校名称"  class="school-input"/>
        </span> 
    </div>
    <div class="colleges-address">
        <span class="leftTwo">就读高校地址</span>
        <span class="rightTwo">{{111}}元</span>
      </div>
      <!-- <div class="box-one"></div>
    <div class="info-box">
          <i ><img src="../../assets/images/zhuzhuang2x.png" alt="" class="img-left"></i>
          <span class="loan-info"><b>就读高校信息补录</b></span>
    </div> -->
    <div class="college">
        <span class="leftThree">学院</span>
        <span class="rightThree">
          <input type="text" placeholder="请输入整数位的贷款金额" class="amount-input">
        </span>
      </div>
      <div class="major">
        <span class="leftFour">专业</span>
        <span class="rightFour">
          <input type="text" placeholder="请输入整数位的贷款金额" class="amount-input">
        </span>
      </div>
        <div class='education'>
            <span class='leftFive'>攻读学历</span>
            <span class="rightFive">
             <Select v-model="model2" style="width:200px" class="app">
            <Option v-for="item in schoolSystem" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          </span>
        </div>
          <div class='educationalSystem'>
            <span class='leftSix'>学制</span>
            <span class="rightSix">
             <Select v-model="model2" style="width:200px" class="app">
            <Option v-for="item in schoolSystem" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          </span>
        </div>
        <div class="graduationYear">
        <span class="leftSeven">毕业年份</span>
        <span class="rightSeven">{{111}}元</span>
      </div>
         <div class="box-one"></div>
    <div class="info-box">
          <i ><img src="../../assets/images/zhuzhuang2x.png" alt="" class="img-left"></i>
          <span class="loan-info"><b>资料上传</b></span>
    </div>
    <div  class="spot-bank-car">
        <img class="point" src="../../assets/images/spot (2).png" alt>
        <span class="bank-car-face" style="float: left; margin-left:10px;margin-top: -2px;">录取通知书正面</span> 
    </div>
    <div class="box">
        <div class="beijing">
            <div class="camera">
                <img src="../../assets/images/takephotos2x.png" alt="" class="camera-img">
        </div>
      </div>
     
   <div class="btn">
         <input type="button"  value="请拍摄录取通知书正面"  class="put-btn">
   </div>
   </div>
    <div class="box">
        <div class="beijing">
            <div class="camera">
                <img src="../../assets/images/takephotos2x.png" alt="" class="camera-img">
        </div>
      </div>
   <div class="btn">
         <input type="button"  value="请拍摄录取通知书反面"  class="put-btn">
   </div>
   </div>
   <div class="nextTo">
      <input type="button"  value="下一步" @click="next" class="next-btn">
    </div>
</div>
</template>
<script>
 export default {
        data () {
            return {
              model1:"",
              model2:"",
              next:"",
              daichu:"自动带出",

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
    schoolSystem:[
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
               }
            }
        }
</script>
<style >
.info-box{
    margin-top:10px;
    height: 42px;
    font-size: 16px;
    background-color: #ffffff;
    font-weight: bold;
    font-family: PingFangSC-Semibo
}
.university,.colleges-address,.college,.major,.education,.educationalSystem,.graduationYear{
    height: 50px;
    vertical-align: middle;
}
.bank-face{
    height: 50px;
    vertical-align:center;
}
.box-one{
    width: 100%;
    height: 10px;
    background: #f4f4f4;
}
.img-left{
    width: 3.5px;
    height: 13px;
    margin-left: 10px;
}
/* 学习搜索框 */
.school-input{
    width: 223px;
    height: 42px;
    background-color: #ededed;
    opacity: 0.4;
}
/* 输入框 */
.amount-input{
    width: 223px;
    height: 42px;
    background-color: #ededed;
    opacity: 0.4;
}
.ivu-input {
    display: inline-block;
    width: 223px;
    height: 42px;
    line-height: 42px;
    /* padding: 0.106667rem 0.186667rem; */
    font-size: 0.32rem;
    border-radius: 0.106667rem;
    color: #515a6e;
    background-color:#ededed;
    position: relative;
    cursor: text;
    border: none;
}
.ivu-input-with-suffix {
    padding-right: 21px;
    background: #ededed;
}
.leftOne,.leftTwo,.leftThree,.leftFour,.leftFive,.leftSix,.leftSeven{
    position: absolute;
    left: 21px;
    font-weight:bold;
}
.rightOne,.rightTwo,.rightThree,.rightFour,.rightFive,.rightSix{
    position: absolute;
    right: 21px;
    font-weight:bold;
    margin-top:-15px;
}
.rightSeven{
    position: absolute;
    right: 21px;
    font-weight:bold;
    
}
.spot-bank-car {
    display: flex;
    display: inline-block;
    margin-left: 25px;
    height: 42px;
    vertical-align:middle; 
    overflow: hidden;
}
/* 相机左上角小圆点 */
.point {
    width: 9px;
    height: 9px;
    float: left;
    vertical-align:middle; 
}
.bank-car-face {
    padding: 5px;
    vertical-align:middle; 
}
.beijing {
    width: 275px;
    height: 165px;
    background-color: #ededed;
    margin: 0px auto;
}
.camera{
    display: flex;
}
.camera-img {
    width: 166px;
    height: 100px;
    margin: 0 auto;
    margin-top: 20px;
}
.box {
   height: 196px;

}
.btn {
    text-align: center;
    margin-top: -30px;
}
.put-btn {
    width: 275px;
    height: 30px;
    background-color: #2487ff;
    border-radius: 0px 0px 5px 5px;
    border: none;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    letter-spacing: 0px;
    color: #ffffff;
    line-height: 30px;
    margin: 0px auto;
}
.nextTo{
    height: 50px;
    text-align: center;
}
.next-btn {
    width: 275px;
    height: 44px;
    background-color: #2487ff;
    border-radius: 8px;
    font-family: PingFangSC-Medium;
    font-size: 18px;
    line-height: 44px;
    color: #ffffff;
    border:none;
    margin-bottom: 30px;
    margin: 0px auto;
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
/* 下拉框 */
.app.ivu-select-visible .ivu-select-selection {
    border-color: #ededed;
    box-shadow: unset;
}
/* 下拉框 */
.ivu-select-selection-focused, .ivu-select-selection:hover {
   border-color: #ededed;
}
/* 下拉框 */
.app .ivu-select-arrow {
    width:0;
    height:0;
    border-width:5px 5px 0;
    border-style:solid;
    border-color:#000 transparent transparent;
}
/* 下拉框 */
.app .ivu-icon-ios-arrow-down:before {
    content: "";
}
/* 下拉框 */
.app.ivu-select-single .ivu-select-selection {
    width: 223px;
    height: 42px;
    background-color: #ededed;
    position: absolute;
    right: 0px;
    border: none;
}
/* 下拉框 */
.app.ivu-select-single .ivu-select-selection .ivu-select-placeholder, .app.ivu-select-single .ivu-select-selection .ivu-select-selected-value {
    height: 42px;
    line-height: 42px;
}
/* 下拉框 */
.app.ivu-select .ivu-select-dropdown {
    width: 223px;
}

</style>


