<template> 
<div class="container">
      <mt-header class="head" fixed title="签署文件" >
          <mt-button slot="left" icon="back" ></mt-button> 
      </mt-header>
      <div class="middle">
        <div class="middle-file"> <b>请看以下文件</b></div>
          <a href="" class="contract">《借款合同》</a>
        </div>
           <div  class="" style="border:0.5px solid #ededed;"></div>
      <div class="Agreement"> 
          <a href="">或《补充协议》</a>
      </div>
      <div  class="" style="border:0.5px solid #ededed;"></div>
      <div>
      <div class="read-agreement" v-show="!hidden"  @click="comfirmOrBack" >
          <span><img src="../assets/images/确认按钮.png" alt="" class="confirm-btn" ></span>
          <span  class="comfirm-Agreement">我已知悉并阅读上述文件</span>
      </div>
      <div class="read-agreement" v-show="hidden"  @click="comfirmOrBack" >
          <span><img src="../assets/images/确认按钮@2x.png"></span>
          <span  class="comfirm-Agreement-gray">我已知悉并阅读上述文件</span>
      </div>
      </div>
      <div class="btn-group">  
         <input type="button" class="btn-no-choice" value="暂不签署">
         <input type="button" class="btn-choice" value="同意签署">
     </div>
  </div>    
</template>
<script>
  export default {
     name:"SignPaper",
     data(){  
       return{
          hidden:false,
          
         }
      },
      methods:{
        comfirmOrBack(){

        }
      }
  }
</script>
<style>
*{padding: 0;margin:0}
  .container{
    width: 100%;
    height: 100%;
  }
   /* 头部样式 */
   .head{
   width: 100%;
   height: 6.35rem;
   font-size:1.8rem; 
   }
  .middle{
    width: 100%;
    height: 9rem;
    text-align: left;
    line-height: 5rem;
    clear: both;
    /* letter-spacing:0.4rem；   */
   }
  .middle-file{
    font-size:1.6rem;
    margin-left:1.7rem;
   }
  .contract{
    font-size: 1.41rem;
    margin-left:1.7rem;
    text-align: center;
   }
  .Agreement{
    width: 100%;
    height: 4.55rem;
    text-align: left;
    font-size: 1.41rem;
    margin-left:1.7rem;
    line-height: 4.55rem;
   }
  .read-agreement{
    width: 100%;
    height: 4.55rem;
    text-align: left;
    font-size: 1.5rem;
    margin-left:1.7rem;
    line-height: 4.55rem;
  }
  .btn-group{
    width: 100%;
    height:3rem ;
    margin-top: 4rem;
  }
  .btn-no-choice{
    width: 10em;
    height: 4.45rem;
    border-radius: 2.25rem;
    background: #2487ff;
    font-size: 1.6rem;
    color: #ffffff;
    border: none;
  }
  .btn-choice{
    width: 10em;
    height: 4.45rem;
    border-radius: 2.25rem;
    background: #2487ff;
    font-size: 1.6rem;
    color: #ffffff;
    border: none;
  }
  .comfirm-Agreement-gray{
  color: grey;
  }

  
</style>