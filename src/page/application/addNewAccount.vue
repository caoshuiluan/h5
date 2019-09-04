<template>
    <div class="container">
        <div class="box-one"></div>
            <div class="content">
              <div style="font-size:16px; text-align: left;margin-left:16px; height:50px">
             <b>收款账户信息</b>
            </div>
            <div class="account">
            <span class="account-name">高校收款账户名</span>
            <span class="account-name-input">
                 <input type="text" placeholder="请输入高校收款账户名" class="QQ-input">
            </span>
        </div>
        <div class="accountN">
            <span class="account-number">高校收款账号</span>
            <span class="account-number-input">
                 <input type="text" placeholder="请输入高校账户" class="QQ-input">
            </span>
        </div>
        <div class="bank">
            <span class="bank-name">开户行</span>
            <span class="bank-name-input">
                 <input type="text" placeholder="请选择高校开户行" class="bank-input">
            </span>
        </div>
    </div>
    <div class="box-one"></div>
    <div class="content-last">
     <div style="font-size:16px; text-align: left;margin-left:16px; height:50px">
        <b>资料上传</b>
    </div>
    <div class="bank-face">
        <div class="circle"></div>
        <span class="bank-car-face" style="float: left; margin-left:10px;margin-top: -2px;">银行卡正面</span>
        <span></span> 
    </div>
    <div class="box">
        <div class="beijing">
            <div class="camera">
            </div>
        </div>
   </div>
   <div class="btn">
         <input type="button"  value="请拍摄银行卡正面"  class="put-btn">
   </div>
    <div class="nextTo">
      <input type="button"  value="下一步" @click="next" class="next-btn">
    </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        next(){

        }
    }
}
</script>
<style scoped>
.container{
    width: 375px;
	height: 667px;
    
}
.content{
    width: 377.5px;
	height: 217px;
}
.content-last{
    width: 375px;
	height: 365.5px;
}
.account,.accountN,.bank{
    height: 50px;
    text-align: center;
}
.account-name,.account-number,.bank-name{
    font-size: 13px;
    color: #333333;
    position: absolute;
    left: 16px;
    font-size: 13px;
    font-weight:bold;
}
/* 银行卡正面和小圆点 */
.bank-face{
    width: 375px;
    height: 42px;
    vertical-align: middle;
    overflow: hidden;
    text-align: center;
}
.box-one {
    width: 100%;
    height: 10px;
    background: #f4f4f4;
}
/* 账户名，收款账户input */
.account-name-input,.account-number-input,.bank-name-input{
    width: 223px;
	height: 42px;
    position: absolute;
    right: 30px;
    border: none;
}
/* 账户名，收款账户input  */
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
 .bank-input{
    background: url("../../assets/images/search.png") no-repeat right center;
    background-size: 18px 18px;
    background-color: #ededed;
    border: none;
 }
 .box{
    width: 278px;
    height: 166px;
    margin: 10px 40px;
    margin: 0 auto;
    text-align: center;
 }
 /* 小圆型 */
 .circle{
    width:10px;
    height:10px;
    background-color:gray;
    border-radius:50%; /* 图形的半径 */
    margin-left: 16px;
    float: left;
}

 .beijing{
     width: 275px;
     height: 166px;
     background-color: #ededed;
	 border-radius: 8.1px; 
     text-align: center;
     margin: auto;
 }
 .camera{
     width:186px;
     height: 101px;
     background:url('../../assets/images/tackphotosx2.png') no-repeat center center ;
     background-size: 100% auto;
     margin: auto;
     margin-top:10px;
     
 }
 .btn{
    text-align: center;
    margin-top: -40px;  
 }
 .put-btn{
    width: 275px;
    height:40px;
    background-color: #2487ff;
    border-radius: 0px 0px 5px 5px;
    font-size: 16px;
    line-height:30px;
    letter-spacing: 1px;
    color: #ffffff;
    border:none;
    margin:0 auto;
 }
 .nextTo{
    text-align: center;
    margin-top: 20px;
}
 .next-btn{
    width: 275px;
    height:40px;
    background-color: #2487ff;
    border-radius: 5px;
    font-size: 18px;
    line-height:30px;
    letter-spacing: 1px;
    color: #ffffff;
    border:none;
    margin:0 auto;
}    
 .app.ivu-select-single .ivu-select-selection {
    width: 5.946667rem;
    height: 1.12rem;
    background-color: #ededed;
    position: absolute;
    right: 0.rem;
    border: none;
}
.QQ-input,.bank-input{
    text-align: left;
    padding-left:25px;
    padding-right:-25px;
	font-family: PingFangSC-Medium;
	font-size: 13.1px;
	letter-spacing: 0px;
	color: #999999;
	opacity: 0.5;
}
</style>


