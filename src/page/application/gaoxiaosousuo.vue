<template>
    <div   >
      <div class="header" > 
       <span class="backIcon" @click="goback()">
       <img src="../../assets/images/back.png" alt="返回"></span>
       <span class="input-seach"><Input search placeholder="请输入搜索高校名字"  /></span>
        <span class="seach-input">搜索</span>
  </div>
   <div>
            <p
                class="questions lineBottom"
                v-for="(quest,index) in questionList"
                :key="index"
            >{{quest.content}}</p>
        </div>
  </div>
</template>>
<script>
export default {
  data(){
      return{
        hasBack:"",
        calculationMore:"",
        Regression:"",
        calculationTo:"",
        questionList: [
        { content: "深圳大学（南山校区）" },
        { content: "湖南大学" },
        { content: "中南大学" },
        { content: "哈尔滨理工大学（威海分校）" },
        { content: "湘潭大学" },
      ]
      }
  } ,
  methods:{
       goback() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/xwapp/enter" });
        return false;
      }
      else {
        this.$router.go(-1);
      }
    }
  } 
}
</script>
<style >
.header {
  height: 45px;
  line-height: 45px;
  background-color: #2487ff;
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 15px;
  position: fixed;
  width: 100%;
  margin-top: -45px;
}

.backIcon img {
  vertical-align: middle;
  height: 20px;
}
.backIcon b {
  font-size: 15px;
  letter-spacing: 0px;
  color: #ffffff;
}

.backIcon img {
  /* vertical-align: middle; */
  height: 20px;
  float: left;
  
}
.backIcon b {
  font-size: 15px;
  letter-spacing: 0px;
  color: #ffffff;


}
.ivu-input-icon {
    width: 0.853333rem;
    height: 0.853333rem;
    line-height: 0.853333rem;
    font-size: 0.426667rem;
    text-align: center;
    color: #808695;
    position: absolute;
    left: 0px;
    left: -2;
    z-index: 3;
} 
.ivu-input {
    display: inline-block;
    width: 277px;
    height: 0.853333rem;
    line-height: 1.5;
    padding: 0.106667rem 0.186667rem;
    font-size: 0.32rem;
    border: 0.026667rem solid #dcdee2;
    border-radius: 15px;
    color: #515a6e;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    text-align: center;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
}
/*     
.seach-school{
	font-family: PingFangSC-Medium;
	font-size: 14px;
	line-height: 2.9px;
	letter-spacing: 1.1px;
	color: #ffffff;
  float: right;
  margin-top: -20px;
 
} */
 .questions {
    padding: 11px 15px;
    font-size: 14px;
    font-weight: normal;
    line-height: 21.2px;
    letter-spacing: -0.3px;
    color: #999999;
} 
.input-seach{
	font-family: PingFangSC-Medium;
	font-size: 14px;
	line-height: 2.9px;
	letter-spacing: 1.1px;
	color: #ffffff;
}
</style>
