<template>
 <div  class="container">
       <apply-steps :stepNow='4' :stepNameArr='stepNameArr'></apply-steps>
    <div class="box-one"></div>
    
    <div class="content">
      <div style="font-size:16px; text-align: left;margin-left:16px; height:50px"><b>货代信息</b></div>
    <div class="purpose">
      <span class='leftOne' >借款用途</span>
       <span class='rightOne' >{{111}}元</span>
    </div>
  <div class='good-amount'>
      <span class='leftThree'>商品金额</span>
       <span class='right-Three' ><input type="text" placeholder="请输入整数位的贷款金额" class="amount-input"></span>
  </div>
  <div class='Choice'>
      <span class='leftFour'>是否代扣保费</span>
       <RadioGroup v-model="radio">
        <Radio label="是">
            <span>是</span>
        </Radio>
        <Radio label="否">
            <span>否</span>
        </Radio>
    </RadioGroup>
      <span class='rightFour' >{{444}}元</span>
  </div>
    <div class='premium'>
      <span class='leftFive'>保费</span>
       <span class='rightFive' >{{555}}元</span>
  </div>
  <div class='Loan-amount'>
      <span class='leftSix'>借款金额</span>
       <span class='rightSix' >{{666}}元</span>
  </div>    
  <div class="box-two"></div>
   <div class="content">
     <div style="font-size:16px; text-align: left;margin-left:16px; height:50px"><b>银行卡信息</b></div>
    <div class='Loan-amount'>
      <span class='leftSix'>放款银行</span>
       <span class='rightSix' >{{99999}}元</span>
     </div>
       <div class="add-car">
         <img src="../../assets/images/添加银行卡@2x.png" alt="" class="add-bank-car" @click="showActionSheet()">
       </div>
       <div style="text-align: right; margin-right:10px">
         <span style="color:red;text-align:right;">注：请提供本人名下借记卡</span>
       </div>
       
       <input type="hidden" id="picIndex" value="0">
        <div id='image-list' class="row image-list">
                	<!-- <input id="upload_image" type="file" name="image" accept="image/*" /> -->
        <div class="image-item space" onclick="showActionSheet()">
        <div class="image-up"></div>
        </div>
     </div>
   </div>
    <div class="nextTo">
      <input type="button"  value="下一步" @click="next" class="next-btn">
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
      111:"",
      222:"",
      car:'',
      radio:"1",
      stepNameArr:"",

    }
  },
  methods:{
    next(){
         this.$router.push({
          path: "/application/suoxuziliao"
        })
    }
  }
}
 </script>
   <style scoped>
   
   
*{padding: 0;margin:0}
/* 主体样式 */
html,body,#app{
width: 100%
}
.container{
  width:375px;
  height: 833px;
}
.content{
  width:100%;
}
.middle{
  height: 64px;
  background: #2487ff;
  font-size: 12px;
  color: #fdfdff;
  text-align: center;
  }
.box-one{
  width: 100%;
  height: 10px;
  background: #f4f4f4;
}
.box-two{
  width: 100%;
  height: 10px;
  background: #f4f4f4;
}
/* 金额输入框 */
.amount-input{
  width: 223px;
	height: 42px;
	background-color: #ededed;
	opacity: 0.4;
  float: right;
  margin-right: 20px;
   
}
/* 增加银行卡背景 */
.add-car{
  width: 225px;
  height: 152px;
  background-color: #ededed;
  margin: 10px 40px;
  margin: 0 auto;
  text-align: center;
}
/* 增加银行卡按钮 */
.add-bank-car{
  width: 146px;
	height: 96px;
  text-align: center;
  margin-top:34px;
} 
.purpose,.good-size,.good-amount,.Choice,.premium,.Loan-amount{
  height: 50px;
  text-align: center;
  overflow: hidden;
}
.leftOne,.leftTwo,.leftThree,.leftFour,.leftFive,.leftSix{
  position: absolute;
  left: 16px;
  font-weight:bold;
}

.Bank-card{
  height: 30px;
  position: absolute;
  left: 16px;
  font-weight:bold;
}
.nextTo{
  text-align: center;
}
.next-btn{
  width: 275px;
  height:40px;
  background-color: #2487ff;
  border-radius: 1px;
  font-size: 18px;
	line-height:30px;
	letter-spacing: 1px;
	color: #ffffff;
  border:none;
  margin:0 auto;
}
.content{
  width: 375px;
  height:320px;
  background: #ffffff; 
}
.leftOne{
  float: left;
}
.purpose.leftOne{
  float: left;
}
.right-Three{
 margin: auto;
}
</style>