<template>
  <div class="fixBody">
    <div class="goodPic lineBottom">
      <img src="../../assets/images/goodsPic.png">
    </div>
    <Row class="basicInfo lineBottom5">
      <p>¥2000</p>
      <p>荣耀9i 4GB+64GB 幻夜黑 移动联通电信4G全面屏手机 双卡双待</p>
    </Row>
    <Row class="lineBottom5 detailSelectItem" @click.native="buySelect=true">
      <Col class="itemTitle" span="2">
        <p>已选</p>
      </Col>
      <Col span="20" class="itemContent">
        <p>幻夜黑，全网通(4GB+64GB)，1件</p>
      </Col>
      <Col span="2">
        <p>></p>
      </Col>
    </Row>
    <Row class="lineBottom5 detailSelectItem" @click.native="buySelect=true">
      <Col class="itemTitle" span="2">
        <p>送至</p>
      </Col>
      <Col span="20" class="itemContent">
        <p>
          <Icon type="ios-pin" class="location" color="#2487ff"/>广东省深圳市福田区福华一路117号华安保险大厦
        </p>
      </Col>
      <Col span="2">
        <p>></p>
      </Col>
    </Row>
    <Row class="lineBottom5 detailSelectItem">
      <Col class="itemTitle" span="2">
        <p>说明</p>
      </Col>
      <Col span="22" class="itemContent">
        <ul class="itemDescribList">
          <li>
            <span class="myDot"></span>正品保证
          </li>
          <li>
            <span class="myDot"></span>支持分期
          </li>
          <li>
            <span class="myDot"></span>不支持7天无理由退款
          </li>
          <li>
            <span class="myDot"></span>在校期仅还利息
          </li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Drawer class="buyDrawer" title :closable="false" v-model="buySelect">
        <Row>
          <Col span="6" class="drawerImg">
            <img src="../../assets/images/goodsPic.png">
          </Col>
          <Col span="16" class="drawerBasiceData">
            <p>2200</p>
            <p>月分期：¥25 - ¥100</p>
          </Col>
          <Col span="2" class="drawerCloseImg" @click.native="buySelect=false">
            <img src="../../assets/images/cancel.png">
          </Col>
        </Row>
        <Row class="selectSection" v-for="(setting,index) in goodsDetails" :key="index">
          <p class="settingName">{{setting.name}}</p>
          <ul class="selectDetailItem">
            <li v-for="(config,index2) in setting.valueList" :key="index2">
              <p>{{config.itemName}}</p>
              <p class="subContentP" v-if="config.subContent">{{config.subContent}}</p>
            </li>
          </ul>
        </Row>
        <Row class="confirmPart">
          <Button
            class="activeAgreeBtn confirmBtn"
            size="large"
            long
            @click.native="buySelect=false"
          >确定</Button>
        </Row>
      </Drawer>
    </Row>
    <Row class="applyBtnPart">
      <Button class="applyBtn activeAgreeBtn" size="large" long>立即申请</Button>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buySelect: false,
      goodsDetails: [
        {
          name: "颜色",
          valueList: [
            { itemName: "幻夜黑", subContent: "", value: "1" },
            { itemName: "魅海蓝", subContent: "", value: "2" },
            { itemName: "梦幻紫", subContent: "", value: "3" },
            { itemName: "碧玉青", subContent: "", value: "4" }
          ]
        },
        {
          name: "型号",
          valueList: [
            { itemName: "全网通(4GB 6GB)", subContent: "", value: "1" },
            { itemName: "全网通(4GB 128GB)", subContent: "", value: "2" }
          ]
        },
        {
          name: "可选分期",
          valueList: [
            {
              itemName: "120期(无手续费)",
              subContent: "还息期：¥10  还本付息期：¥150",
              value: "1"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.goodPic {
  width: 100%;
  display: flex;
  justify-content: center;
}
.basicInfo {
  padding: 12.5px 15.5px;
}
.basicInfo p:nth-child(1),
.drawerBasiceData p:nth-child(1) {
  font-size: 18px;
  letter-spacing: 0px;
  color: #fb3333;
}
.basicInfo p:nth-child(2) {
  font-size: 15px;
  line-height: 19.9px;
  letter-spacing: 0px;
  color: #333333;
}
.detailSelectItem {
  padding: 15px 16px;
}
.lineBottom5:nth-child(5) {
  border: none;
}
.itemTitle,
.drawerBasiceData p:nth-child(2) {
  font-size: 14px;
  letter-spacing: 0px;
  color: #999999;
  opacity: 0.5;
}
.itemContent {
  font-size: 14px;
  line-height: 19.9px;
  letter-spacing: 0px;
  color: #333333;
  padding: 0px 25.5px;
}
.itemDescribList,
.selectDetailItem {
  list-style: none;
}
.itemDescribList li {
  float: left;
  font-size: 12px;
  line-height: 19.9px;
  letter-spacing: 0px;
  color: #333333;
}
.itemDescribList .myDot {
  background: #2487ff;
  border: #2487ff;
}
.applyBtnPart {
  position: absolute;
  bottom: 27px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
}
.applyBtn {
  width: 275px;
  height: 44px;
  background-color: #2487ff;
  border-radius: 5px;
  font-size: 18px;
}
.drawerImg img,
.drawerBasiceData {
  height: 82.5px;
}
.drawerBasiceData p {
  position: absolute;
  bottom: 0px;
}
.drawerBasiceData p:nth-child(1) {
  margin-bottom: 26.5px;
}
.selectSection {
  padding: 8px 15px;
}
.settingName {
  font-size: 14px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #333333;
}
.selectDetailItem li {
  float: left;
  border-radius: 13px;
  padding: 6px 10px;
  margin-left: 25.5px;
  background-color: #f5f5f5;
  border-radius: 13px;
  color: #333333;
  /* background-color: #2487ff;

  border: solid 1px #2487ff; */
}
.selectDetailItem li:nth-child(1) {
  margin-left: 0px;
}
.confirmPart {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
.confirmBtn {
  width: 275px;
  height: 44px;
}
.subContentP {
  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.3px;
  color: #666666;
}
</style>
