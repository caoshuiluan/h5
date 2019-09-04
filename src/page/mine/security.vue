<template>
  <div>
    <Row class="securityRow lineBottom" @click.native="toPage(1)">
      <Col span="22">
        <p>更换密码</p>
      </Col>
      <Col span="2">
        <img src="../../assets/images/backGray.png">
      </Col>
    </Row>
    <Row class="securityRow lineBottom" @click.native="toPage(2)">
      <Col span="22">
        <p>更换绑定手机号码</p>
      </Col>
      <Col span="2">
        <img src="../../assets/images/backGray.png">
      </Col>
    </Row>
    <Row class="securityRow lineBottom" @click.native="toPage(3)">
      <Col span="22">
        <p>更换邮箱地址</p>
      </Col>
      <Col span="2">
        <img src="../../assets/images/backGray.png">
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
          pathStr = "/mine/modifyPWD";
          break;
        case 2:
          pathStr = "/mine/modifyPhoneEmail?type=P";
          break;
        case 3:
          pathStr = "/mine/modifyPhoneEmail?type=e";
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
.securityRow {
  padding: 15px 16.5px;
  height: 44px;
}
.securityRow p {
  font-size: 14px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #333333;
}
.securityRow img {
  width: 7px;
  height: 12.5px;
}
</style>
