<template>
  <div class="contactPart">
    <Row class="contactRow lineBottom">
      <Col span="6" class="userImg">
        <img :src="require('@img/hotLine.png')">
      </Col>
      <Col span="16" class="userStatus">
        <p>客服热线（9556）</p>
      </Col>
      <Col span="2" class="userArrow">
        <img :src="require('@img/backGray.png')">
      </Col>
    </Row>
    <Row class="contactRow lineBottom">
      <Col span="6" class="userImg">
        <img :src="require('@img/wechat.png')">
      </Col>
      <Col span="16" class="userStatus">
        <p>客服热线（9556）</p>
      </Col>
      <Col span="2" class="userArrow">
        <img :src="require('@img/backGray.png')">
      </Col>
    </Row>
    <Row class="contactRow lineBottom">
      <Col span="6" class="userImg">
        <img :src="require('@img/qq.png')">
      </Col>
      <Col span="16" class="userStatus">
        <p>客服热线（9556）</p>
      </Col>
      <Col span="2" class="userArrow">
        <img :src="require('@img/backGray.png')">
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.contactRow {
  display: flex;
  align-items: center;
  padding: 15px;
}
.userArrow img {
  width: 7px;
  height: 12.5px;
}
.contactRow:nth-child(1) .userImg img {
  width: 17px;
  height: 17px;
}
.contactRow:nth-child(2) .userImg img {
  width: 19px;
  height: 15px;
}
.contactRow:nth-child(3) .userImg img {
  width: 15px;
  height: 18px;
}
.userImg p {
  font-size: 14px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #333333;
}
</style>
