<template>
<div class="container">
 <div class="box-one"></div>
      <div class="info-box">
          <i ><img src="../../assets/images/zhuzhuang2x.png" alt="" class="img-left"></i>
          <span class="loan-info"><b>货代信息</b></span>
          </div>
<div class="content">
    <div class="purpose">
      <span class='leftOne' >借款用途</span>
       <span class='rightOne' >{{111}}元</span>
    </div>
  <div class="good-size">
      <span class='leftTwo'>商品型号</span>
       <span class='rightTwo' >{{222}}元</span>
  </div>
  <div class='good-amount'>
      <span class='leftThree'>商品金额</span>
       <span class='right-Three' >{{333}}元</span>
  </div>
  <div class='Choice'>
      <span class='leftFour'>是否代扣保费</span>
      <div class="rightFour">
       <RadioGroup v-model="radio">
        <Radio label="是">
            <span>是</span>
        </Radio>
        <Radio label="否">
            <span>否</span>
        </Radio>
    </RadioGroup> 
       <span  >自主交费</span>
    </div>
  </div>
    <div class='premium'>
      <span class='leftFive'>保费</span>
       <span class='rightFive' >{{555}}元</span>
  </div> 
  <div class='Loan-amount'>
      <span class='leftSix'>借款金额1</span>
       <span class='rightSix' >{{666}}元</span>
  </div>  
</div>
  <div class="box-one"></div>
     <div class="car-info" >
         <i ><img src="../../assets/images/zhuzhuang2x.png" alt="" class="img-left"></i>
         <span class="bank-car"><b>银行卡信息</b></span>
     </div>
 <div class="last-content">
    <div class='Loan-bank'>
      <span class='leftSix'>放款银行</span>
       <span class='rightSix' >中国邮政储蓄银行</span> 
     </div>
       <div class="Originalcard">
         <img src="../..//assets/images/agricultureBank.png" alt="" class="add-bank-car" >
       </div >
       <div >
         <span class="DesignatedCard">贷款发放及归还指定卡 </span>
         <a href="" class="change-car">更换绑定></a>
       </div>
       
       <input type="hidden" id="picIndex" value="0">
        <div id='image-list' class="row image-list">
                	<!-- <input id="upload_image" type="file" name="image" accept="image/*" /> -->
        <div class="image-item space" onclick="showActionSheet()">
        <div class="image-up"></div>
        </div>
     </div>
   
    <div class="nextTo">
      <input type="button"  value="下一步" @click="next" class="next-btn">
    </div>
  </div> 
  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
</template>
<script>
    export default{
        data(){
            return{
                usageOfLoan:"",
                CommodityModel:"",
                CommodityAmount:"",
                premium:"",
                LoanAmount:"",
                LendingBank:"",
                radio:"",
                next:""
            }
        }
    }
</script>
<style  scoped>
.container{
  width: 100%;
  height: 806.5px;
}
.box-one{
  width: 100%;
  height: 10px;
  background: #f4f4f4;
}
.info-box,
.car-info{
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
.loan-info,.bank-car{
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  letter-spacing: 0px;
  color: #333333;  
}
.content,.last-content{
  margin:0px 16px 0px 16px;
}
.purpose,.good-size,.good-amount,.Choice,.premium,.Loan-amount{
  height: 50px;
  text-align: center
}
.leftOne,.leftTwo,.leftThree,.leftFour,.leftFive,.leftSix,.DesignatedCard{
  position: absolute;
  left: 21px;
  font-weight:bold;
}
.rightOne,.rightTwo,.right-Three,.rightFour,.rightFive,.rightSix
,.rightSeven,.change-car{
  position: absolute;
  right: 21px;
  font-weight:bold;
}
.Originalcard{
  margin: 21px 40px;
  margin: 0 auto;
}
/* 增加银行卡按钮 */
.add-bank-car{
  width: 344px;
  height: 113px;;
  text-align: center;
  margin-top:34px;
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
.nextTo{
  margin-top: 60px;
  text-align: center;
}
.next-btn{
  width: 275px;
  height:44px;
  background-color: #2487ff;
  border-radius: 5px;
  font-size: 18px;
  line-height:30px;
  letter-spacing: 1px;
  color: #ffffff;
  border:none;
  margin:0 auto;
}
.rightSix{
	font-family: PingFangSC-Medium;
	font-size: 13px;
	letter-spacing: 0px;
	color: #2487ff;
}
</style>


