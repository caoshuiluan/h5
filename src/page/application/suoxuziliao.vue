<template>
  <div>
    <apply-steps :stepNow='4' :stepNameArr='stepNameArr'></apply-steps>
    <div class="box-one"></div>
    <div class="content">
      <div class="guardianInformation">
        <span>
          <img src="../../assets/images/zhuzhuang2x.png" alt class="bg-left">
        </span>
        <span class="needInto">所需材料</span>
      </div>
      <div class="needInformation" v-for="(item,index) in dataList" :key="'informationList'+index">
        <i>
          <img src="../../assets/images/spot (2).png" class="img-left">
        </i>
        <span class="describe">{{item.describe}}</span>
        <i class="img-right">
          <img src="../../assets/images/confirm-btn.png" alt class="img-right">
        </i>
      </div>
    </div>
    <div class="box-one"></div>
    <div class="content-last">
      <div class="put-information">
        <span>
          <img src="../../assets/images/zhuzhuang2x.png" alt class="img-left-two">
        </span>
        <span class="put-title">资料上传</span>
      </div>
      <div class="name-ph" v-for="(item,index) in dataList" :key="index">
        <div class="spot-bank-car">
          <img class="point" src="../../assets/images/spot (2).png" alt>
          <span class="bank-car-face">{{item.describe}}</span>
        </div>
        <div class="box  ">
          <div class="beijing">
            <div  class="camera"><img class="camera-img" src="../../assets/images/takephotos2x.png" alt=""></div>
          </div>
        </div>
        <div class="btn">
          <input type="button" value="请拍摄银行卡正面" class="put-btn">
        </div>
      </div>
      <div class="next">
        <input type="button" value="下一步" class="next-btn">
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
  data() {
    return {
      stepNameArr:"",
      
      dataList: [
        {
          imgSrc: "../../assets/images/spot (2).png",
          describe: "学生证/录取通知书"
        },
        {
          imgSrc: "../../assets/images/spot (2).png",
          describe: "人证合照"
        },
        {
          imgSrc: "../../assets/images/spot (2).png",
          describe: "银行卡正面"
        },
        {
          imgSrc: "../../assets/images/spot (2).png",
          describe: "收款账户信息凭证"
        }
      ],
      informationList: [
        {
          imgSrc: "../../assets/images/spot (2).png",
          describe: "学生证/录取通知书",
          imgSrc: "../../assets/images/confirm.png"
        },
        {
          imgSrc: "../../assets/images/spot (2).png",
          describe: "人证合照",
          imgSrc: "../../assets/images/confirm.png"
        },
        {
          imgSrc: "../../assets/images/spot (2).png",
          describe: "银行卡正面",
          imgSrc: "../../assets/images/confirm.png"
        },
        {
          imgSrc: "../../assets/images/spot (2).png",
          describe: "收款账户信息凭证",
          imgSrc: "../../assets/images/confirm.png"
        }
      ]
    };
  },
  methods: {
    next() {}
  }
};
</script>
<style  scoped>
.box-one {
  width: 100%;
  height: 10px;
  background: #f4f4f4;
}
.needInto,
.put-title {
  font-size: 16px;
  background-color: #ffffff;
  font-weight: bold;
}
.bg-left {
  width: 3.5px;
  height: 13px;
  margin-left: 10px;
}
.img-left-two {
  width: 3.5px;
  height: 13px;
  margin-left: 10px;
}
.img-left {
  width: 9px;
  height: 9px;
  background-size: 100%;
  float: left;
}
.describe {
  font-family: PingFangSC-Medium;
  font-size: 13px;
  color: #999999;
  padding-left: 10px;
  margin-top: -5px;
}
.img-right {
  width: 13px;
  height: 13px;
  float: right;
}
.img-left,
.describe,
.img-right {
  display: inline-block;
  vertical-align: middle;
}
.guardianInformation,
.put-information {
  height: 50px;
  line-height: 50px;
}
/* 证件照信息 */
.needInformation {
  height: 35px;
  margin-left: 25px;
  margin-right: 25px;
  overflow: hidden;
}
.spot-bank-car {
  height: 42px;
  line-height: 42px;
  margin-left: 25px;
 text-align: center;
}
/* 相机左上角小圆点 */
.point {
  width: 9px;
  height: 9px;
}
.bank-car-face {
  padding: 5px;
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

.next{
  text-align: center;
  margin-top: 30px;
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
}
</style>

