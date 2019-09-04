<template>
<div class="container">
         
      <div class="middle">
        <br>
        <div class="mui-input-row">
            <input type="text" v-model="checkPhone" @click="delPhone" class="mui-input-checkPhone"  :delPhone="delPhone" placeholder="请输入手机号" @change="phoneNumber">
            <!-- <span><img src="../assets/images//删除.png" alt="" class="del-icon" ></span> -->
        </div>
         <div class="mui-input-row" v-show="hidden">
            <input type="password" v-model="password" @focus='openOrClose' class="mui-input-password" placeholder="请输入6位字符、数字+字母+下划线、至少两项"/>
            <!-- <span><img src="../assets/images/闭眼.png" alt="" class="password-close-eye" ></span>   -->
        </div>
        <div class="mui-input-row" v-show='!hidden'>
            <input type="text" v-model="password" class="mui-input-password-open"  @blur='openOrClose' placeholder="请输入6位字符、数字+字母+下划线、至少两项"/>
            <!-- <span><img src="../assets/images/睁眼.png" alt="" class="password-open-eye" @click='openOrClose'></span>    -->
        </div>
        <div class="Agreement">
          <span><img src="../../assets/images/confirm-btn.png" alt="" class="confirm-btn"></span>
          <span  class="comfirm-Agreement">同意协议<a href="">《协议》</a></span>
        </div>
      </div>
        <div class="mui-button-row">
            <input type="button" class="mui-btn-primary" value="登入"  @click="loginTo" >
        </div>
    <a href=""></a>
        <div class="links">
      <router-link class="left"  tag="div" to="loginPage" ><a href="">立即注册账号</a></router-link>
      <span for="" class="right"><a href="">忘记密码？</a><router-link  tag="div" to="verification">短信登入</router-link></span>
    </div>
</div>
</template>
<script>
import axios from "axios"
export default {
    name:"Enter",
    data () {
      return {
          checkPhone: "",
          disabled:false,
          password:"",
          hidden:true,
        }
      },
        methods:{
      loginTo(){
        this.$router.push({
          path: "/home/repayment"
        })
      },
          // 密码栏小眼睛密码显隐
           openOrClose(){
        this.hidden=!this.hidden;
         },
          // 手机号码清楚
            delPhone(){
            this.checkPhone=""
        },
          // 手机号码输入验证
          phoneNumber(){
            if(this.checkPhone===""){
              console.log('1,号码不能为空')
              this.errors={
                checkPhone:"请输入手机号码"
              };
              return false
            }else if((/^1[34578]\d{9}$/.test(this.checkPhone) && this.checkPhone.length === 11)){
              console.log('2,号码正确')
              this.errors={};
              return true
            }else{
              console.log('3，号码错误')
              this.errors={
               checkPhone:"请输入正确的手机号"
              }
            }
        },
      //  密码输入验证
          passwordNum(){
            if(this.password ===""){
            console.log('1,密码不能为空')
            this.errors={
              password:"请输入密码"
            };
            return false;
              }else {if((/^[a-zA-Z0-9_-]{6,16}$/.test(this.password) && this.password.length === 6)){
                  console.log('2,号码正确')
                  this.errors={
                  };
                  // return ture
                }else{
                  console.log('3,请输入正确的密码')
                  this.errors={
                    password:"密码至少6位,由大小写字母和数字,-,_组成"
                  }
                }
             }
           },
           loginTo(){
             this.$router.push('/')
           }
        }
      }
</script>
<style>
*{padding: 0;margin:0}
/* 主体样式 */
   .container{
     width: 100%;
     height: 100%;
   }
   /* 头部样式 */
  
   .middle{
   width: 375px;
   height: 200px;
   }
   /* 手机号码输入框样式 */
   .mui-input-checkPhone{
     border:none;
     border-bottom:1px solid #ededed;
     width: 96%;
     height: 66px;
     outline: none;
     vertical-align: middle;
     background: url('../../assets/images/cancel.png')   no-repeat right center;
     background-size: 18px 18px;
     margin-left: 10px;
   }
   .left{
     color: #2487ff;
   }
   /* 密码输入框样式 */
   .mui-input-password{
     border:none;
     border-bottom:1px solid #ededed;
     width: 96%;
     height:66px;
     outline: none;
     vertical-align: middle;
     background: url('../../assets/images/close-eye.png')no-repeat right center;
     background-size: 20px 10px;
     margin-left: 10px;
   }
   .mui-input-password-open{
     border:none;
     border-bottom:0.05rem solid #ededed;
     width: 96%;
     height: 66px;
     outline: none;
     vertical-align: middle;
     background: url('../../assets/images/open-eye.png')no-repeat right center;
     background-size: 20px 10px;
     margin-left: 10px;
   }
   /* 登入按钮样式 */
   .mui-btn-primary{
     width:90%;
     height:30px;
     background: #2487ff;
     border-radius:5px;
     font-size: 16px;
     color:#ffffff;
     border:none;
     margin-top:50px;
     margin-left: 18px;
     
   }
  .links{
     margin-top: 1.8rem;
   }
   /* 立即注册账号按钮样式 */
  .left{
    float: left;
    margin-left:3px;
    color: #999999;
    font-size: 13px;
    margin-left: 14px;
  }
  /* 忘记密码短信登入样式 */
  .right{
    float: right;
    margin-right:5px;
    color: #2487ff;
    font-size: 13px;
    margin-right: 10px;
    display: inline;
  }
   /* 密码栏隐藏密码图标 */
  .password-close-eye{
    width: 22px;
    height: 16px;
  }
  /* 密码栏显示密码图标 */
  .password-open-eye{
    width: 22px;
    height: 16px;
  }
  .eye-icon {
    width: 22px;
    height: 16px;
    position: absolute;
    bottom:8px;
    right:10px ;

  }
  /* 密码栏删除按钮图片 */
   .del-icon {
    position: absolute;
    width: 15px;
    height: 15px;
    right: 25px;
  }
  /* 删除按钮图片按钮样式 */
   .eye-icon{
    width: 22px;
    height: 16px;
    position: absolute;
    /* bottom: 39.8rem; */
    right: 20px;
   }
   .password-close-eye{
    width: 22px;
    height: 16px;
    position: absolute;
    top:15.5px;
    right:15px ;
  }
  /* 密码栏显示密码图标 */
  .password-open-eye{
    width: 22px;
    height: 16px;
    position: absolute;
    top:15.5px;
    right:15px ;
  }
  .comfirm-btn{
    width: 6px;
    height: 6px;
    float: left;
    position: absolute;
    left:16px;
    top: 5px;
  }
  .Agreement{
    height:50px;
    width:100% ;
    position:absolute;
    left:5px;
    overflow:hidden;
    text-align: left;
  }
  /* 确认协议字号 */
  .comfirm-Agreement{
  font-size: 15px;
}
</style>
