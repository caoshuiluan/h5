<template>
  <div>
    <div class="box-one"></div>
    <div class="content">
        <div id="guardianInformation" >
            <span class="bg-left"></span>
            <span class="wordEllipsis newsTitle">父母/监护人信息</span>
            <span class="bg-right" @click="addGuardianInformation()"></span>
        </div>
        <div class="name-phone" v-for="(news,index) in guardianList" :key="'guardianList'+index" >
            <span class="wordEllipsis newsName">{{news.cRelaNme}}({{news.cRelaClient}})</span>
            <p class="phone">{{news.cRelaPhone}}</p>
        </div>
    </div>
    <div class="box-one"></div>
    <div class="content-last">
        <div id="emergencyContact">
          <span class="bg-left-two"></span>
          <span class="wordEllipsis newsTitle">紧急联系人信息</span>
          <span class="bg-right-two" @click="addEmergencyContact()"></span>
        </div>
        <div class="name-phone" v-for="(item,index) in informationlist" :key="index" >
          <span class="wordEllipsis newsName">{{item.cRelaNme}}{{item.cRelaClient}}</span>
          <p class="phone">{{item.cRelaPhone}}</p>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  data() {
    return {
      guardianList: [],
      informationlist: []
    };
  },
  methods: {
    addGuardianInformation(){
      // console.log(news);
        this.$router.push({
          path:"/application/guardian",
        })
    },
    addEmergencyContact(){
      //  console.log(news);
        this.$router.push({
          path:"/application/information",
        })
    },
    selectContactsMsg(){
      const that=this
      this.$ajaxs.selectContactsMsg().then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            let data=res.data
            data.forEach(function (item,index) {
              console.log(item.cRelaType);
              if(item.cRelaType=="1"){
                that.guardianList.push(item)
              }else if(item.cRelaType=="2"){
                that.informationlist.push(item)
              }
            })
          } else {
            if (returnStr == "none") {
              this.$Message.warning(returnStr);
              returnStr;
            } else {
              this.$Message.warning(res.message);
            }
          }
        },
        err => {
          //添加错误连接提示
        }
      );
    }
  },
  created(){
    this.selectContactsMsg()
  }
};
</script>
<style scoped>
#guardianInformation,#emergencyContact{
  height: 50px;
  display: block;
  text-align: left;
  line-height: 50px;
}
.newsTitle{
  font-size: 16px;
  font-weight:bold;
  padding-left: 3px;
}
.name-phone{
  height: 40px;
  margin-left:10px;
  padding: 0 10px;
  margin-right:10px;
  overflow:hidden;
  background-color: #ededed;
  line-height:40px;
  margin-bottom: 10px;
}
.newsName{
  float: left;
}
.phone{
  float: right;
}
.bg-left{
  background: url('../../assets/images/zhuzhuang2x.png')no-repeat ;
  width: 3.5px;
  height: 13px;
  background-size: 100%;
  float: left;
  margin-top: 18px;
  margin-left:10px;
}
.bg-right{
  /* background: url('../../assets/images/tianjialianxirenx2.png')no-repeat right ; */
  width: 12px;
  height: 12px;
  /* background-size: 100%; */
  float: right;
  margin-top: -33px;
  margin-right: 20px;
}
.bg-left-two{
  background: url('../../assets/images/zhuzhuang2x.png')no-repeat ;
  width: 3.5px;
  height: 13px;
  background-size: 100%;
  float: left;
  margin-top: 20px;
  margin-left:10px;
}
.bg-right-two{
  background: url('../../assets/images/tianjialianxirenx2.png')no-repeat right ;
  width: 14px;
  height: 14px;
  background-size: 100%;
  float: right;
  margin-top: -33px;
  margin-right: 20px;
}
.box{
  width: 223px;
  height: 42px;
  background-color: #ededed;
}

  /* float: left; */
/* } */
/* .phone{ */
  /* float: right; */
/* } */

.box-one {
  width: 100%;
  height: 10px;
  background: #f4f4f4;
}

</style>
