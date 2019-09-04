<template>
  <div class="setting">
    <Row class="settingRow lineBottom" @click.native="toPage(1)">
      <Col span="4" class="settingIcon">
        <img class="Icon1" src="../../assets/images/security.png">
      </Col>
      <Col span="18">
        <p>安全中心</p>
      </Col>
      <Col span="2" class="toArrow">
        <img src="../../assets/images/backGray.png">
      </Col>
    </Row>
    <Row class="settingRow lineBottom" @click.native="toPage(2)">
      <Col span="4" class="settingIcon">
        <img class="Icon2" src="../../assets/images/brand.png">
      </Col>
      <Col span="18">
        <p>用户服务协议</p>
      </Col>
      <Col span="2" class="toArrow">
        <img src="../../assets/images/backGray.png">
      </Col>
    </Row>
    <Row class="settingRow lineBottom" @click.native="toPage(3)">
      <Col span="4" class="settingIcon">
        <img class="Icon3" src="../../assets/images/agreement.png">
      </Col>
      <Col span="18">
        <p>版本信息</p>
      </Col>
      <Col span="2" class="toArrow">
        <p>v1.0.0</p>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toPage(num) {
      let pathStr = "";
      switch (num) {
        case 1:
          pathStr = "/mine/security";
          break;
        case 2:
          pathStr = "/mine/lendingContract?type=1";
          break;
        case 3:
          pathStr = "";
          break;
      }
      if (pathStr) {
        this.$router.push({
          path: pathStr
        });
      }
    }
  }
};
</script>

<style scoped>
.settingRow {
  height: 44px;
  padding: 13.5px 16px;
}
.settingRow,
.toArrow {
  display: flex;
  align-items: center;
}
.Icon1 {
  width: 15px;
  height: 18px;
}
.Icon3,
.Icon2 {
  width: 17px;
  height: 17px;
}
.toArrow img {
  width: 7px;
  height: 12.5px;
}
.toArrow {
  justify-content: center;
}
.settingRow p {
  font-size: 14px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #333333;
}
.toArrow p {
  font-size: 13px;
  letter-spacing: 0px;
  color: #999999;
}
</style>

