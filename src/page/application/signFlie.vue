<template>   
<div class="center">
   <mt-header class="head" fixed title="文件签署" >
      <mt-button slot="left" icon="back" ></mt-button> 
  </mt-header> 
  <div>
  <div class="flie-one">
     <a href="">《华安商业助学贷款履约保证保险投保单》</a>
  </div>
  <div style="border:1px solid #ededed">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  </div>
  <div class="flie-two">
      <a href="">《华安征信授权书》</a>
  </div>
  <div style="border:1px solid #ededed"></div>
  <div class="flie-three">
     <a href="">《借款合同》</a>
  </div>
  <div style="border:1px solid #ededed"></div>
  <div class="flie-four">
      <a href="">《中国某某银行征信授权书》</a>
  </div>
  <div style="border:1px solid #ededed"></div>
   <div  class="Agreement">
      <div class="read-agreement" v-show="!hidden"  @click="comfirmOrBack" >
          <span><img src="../assets/images/确认按钮.png" alt="" class="confirm-btn" ></span>
          <span  class="comfirm-Agreement">我已知悉并阅读上述文件</span>
      </div>
      <div class="read-agreement" v-show="hidden"  @click="comfirmOrBack" >
          <span><img src="../assets/images/确认按钮@2x.png"></span>
          <span  class="comfirm-Agreement-gray">我已知悉并阅读上述文件</span>
      </div>
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
      name:"signFlie", 
       data(){  
       return{
          hidden:false,
          
         }
      }, 
      methods:{
         comfirmOrBack(){}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}
</script>
<style >
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
   .center{
    width: 96%;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
   }
.flie-one,.flie-two,.flie-three,.flie-four{
    width: 96%;
    height: 3rem; 
    text-align: left;
    line-height:3rem;
    font-size: 1.41rem;
    margin-left: 1.6rem;
    /* position: absolute;
    left:1.6rem;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */
   }
.flie-one{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       width: 100%;
    width: 96%;
    height: 3rem;
    text-align: center;
    margin-top: 8rem;
    text-align: left;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
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
  .Agreement{
    font-size: 1.5rem;
    margin-left: 1.6rem;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  }
  .read-agreement{
    width: 100%;
    height: 4.55rem;
    text-align: left;
    font-size: 1.5rem;
    /* margin-left:1.7rem; */
    line-height: 4.55rem;
  }
</style>
