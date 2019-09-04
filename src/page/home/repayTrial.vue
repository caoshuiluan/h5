<template>
  <div>
    <div class="trialPart">
      <p class="subTitleFont">借多少</p>
      <p class="selectCount">{{borrowNum}}元</p>
      <Row class="verticalMiddle">
        <Col span="2" class="numTip">0</Col>
        <Col span="18">
          <Slider
            class="trialSlider"
            v-model="borrowNum"
            :min="0"
            :max="2200"
            :tip-format="hideFormat"
            :step="100"
          ></Slider>
        </Col>
        <Col span="4" class="numTip">2200</Col>
      </Row>
      <Row class="selectEducation">
        <Col span="8" class="selectItem horizenCenter">
          <Select v-model="education" size="small" style="width:84px">
            <Option
              v-for="item in educationList"
              :value="item.value"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </Col>
        <Col span="8" class="selectItem horizenCenter">
          <Select v-model="educationTime" size="small" style="width:84px">
            <Option
              v-for="item in educationSystemList"
              :value="item.value"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </Col>
        <Col span="8" class="selectItem horizenCenter">
          <Select v-model="educationLevel" size="small" style="width:84px">
            <Option
              v-for="item in educationList"
              :value="item.value"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </Col>
      </Row>
    </div>
    <div class="trialDetails">
      <p>
        <span class="detailTitle">1-44期(还息期)</span>
        <span class="detailResult">￥55.2/期</span>
      </p>
      <p>
        <span class="detailTitle">45-120期(还本期)</span>
        <span class="detailResult">￥55.2/期</span>
      </p>
      <p>
        <span class="detailTitle">借款期数</span>
        <span class="detailResult">120期</span>
      </p>
      <p>
        <span class="detailTitle">借款总金额</span>
        <span class="detailResult">¥10000</span>
      </p>
      <p>
        <span class="detailTitle">保费：</span>
        <span class="detailResult">¥950</span>
      </p>
    </div>
    <div class="horizenCenter">
      <Button class="caculateBtn activeAgreeBtn" size="large" long>测算</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      borrowNum: 1000,
      educationList: [
        { label: "研究生", value: "1" },
        { label: "本科", value: "2" },
        { label: "专科", value: "3" },
        { label: "高中", value: "4" }
      ],
      educationSystemList: [
        { label: "六年", value: "1" },
        { label: "四年", value: "2" },
        { label: "三年", value: "3" }
      ],
      educationLevelList: [
        { label: "2018级", value: "1" },
        { label: "2017级", value: "2" },
        { label: "2016级", value: "3" },
        { label: "2015级", value: "4" },
        { label: "2014级", value: "5" },
        { label: "2013级", value: "6" }
      ],
      education: "2",
      educationTime: "2",
      educationLevel: "4"
    };
  },
  methods: {
    hideFormat() {
      return null;
    }
  }
};
</script>

<style scoped>
.trialPart {
  padding: 11px;
}
.numTip {
  text-align: center;
  font-size: 18px;
  line-height: 21.2px;
  letter-spacing: -0.9px;
  color: #999999;
}
.selectEducation {
  margin-top: 28px;
}
.selectCount {
  font-size: 33px;
  line-height: 21.2px;
  letter-spacing: -1.6px;
  color: #333333;
  text-align: center;
  margin: 10.5px;
}
.trialDetails {
  border-top: 10px solid #e8eaec;
  padding: 15.5px;
  margin-top: 24.5px;
}
.trialDetails p {
  margin-bottom: 19.5px;
  font-size: 13px;
  letter-spacing: 0px;
}
.detailTitle {
  color: #333333;
}
.detailResult {
  color: #999999;
  float: right;
}
.caculateBtn {
  width: 275px;
  font-size: 18px;
}
</style>
