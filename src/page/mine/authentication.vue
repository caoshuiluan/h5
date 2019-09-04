<template>
  <div>
    <div class="uploadMain">
      <p class="infoTip">资料上传</p>
      <div class="horizenCenter uploadItem">
        <v-upload></v-upload>
      </div>
      <div class="horizenCenter uploadItem">
        <v-upload></v-upload>
      </div>
    </div>
    <div class="concernPart">
      <p class="infoTip">确认信息</p>
      <Row class="infoRow">
        <Col span="8">
          <p>姓名</p>
        </Col>
        <Col span="16" class="inputItem">
          <!-- <Input v-model="selfInfo.name" placeholder="请输入你的姓名"/> -->
          <p>Crystal</p>
        </Col>
      </Row>
      <Row class="infoRow">
        <Col span="8">
          <p>身份证号码</p>
        </Col>
        <Col span="16" class="inputItem">
          <p>4345564765786978908</p>
          <!-- <Input v-model="selfInfo.name" placeholder="请输入正确的身份证号码"/> -->
        </Col>
      </Row>
      <Row class="infoRow">
        <Col span="8">
          <p>性别</p>
        </Col>
        <Col span="16" class="inputItem">
          <p>女</p>
          <!-- <Input v-model="selfInfo.name" placeholder="请输入你的性别"/> -->
        </Col>
      </Row>
      <Row class="infoRow">
        <Col span="8">
          <p>民族</p>
        </Col>
        <Col span="16" class="inputItem">
          <!-- <Input v-model="selfInfo.name" placeholder="请输入你所属的民族"/> -->
          <p>汉</p>
        </Col>
      </Row>
      <Row class="infoRow">
        <Col span="8">
          <p>户籍地址</p>
        </Col>
        <Col span="16" class="inputItem">
          <!-- <Input v-model="selfInfo.name" placeholder="请输入你的户籍地址"/> -->
          <p>深圳市布吉阳光花园</p>
        </Col>
      </Row>
      <Row class="infoRow">
        <Col span="8">
          <p>身份证有效期</p>
        </Col>
        <Col span="16" class="inputItem">
          <!-- <Input v-model="selfInfo.name" placeholder="请选输入你的身份证有效期"/> -->
          <p>2019-12-21</p>
        </Col>
      </Row>
      <div class="horizenCenter">
        <Button class="nextBtn activeAgreeBtn" size="large" long>完成</Button>
      </div>
    </div>
  </div>
</template>

<script>
import vUpload from "@C/mine/upload";
export default {
  data() {
    return {
      selfInfo: {
        name: ""
      }
    };
  },
  components: { vUpload }
};
</script>

<style scoped>
.uploadMain {
  padding: 5px 12px 0px;
  border-top: solid 12px #ededed;
  border-bottom: solid 12px #ededed;
}
.infoTip {
  border-left: solid 3.5px #2487ff;
  padding-left: 11.5px;
  font-size: 16.1px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 25px;
}
.uploadItem {
  margin-bottom: 36.5px;
}
.concernPart {
  padding: 5px 12px 38px;
}
.infoRow {
  padding: 13.5px 8.5px;
  display: flex;
  align-items: center;
}
.infoRow p {
  font-size: 13.1px;
  letter-spacing: 0px;
  color: #333333;
}
.nextBtn {
  width: 277.5px;
  height: 44.5px;
  border-radius: 5px;
  border: none;
  margin-top: 21.5px;
}
.inputItem p {
  font-size: 13.1px;
  letter-spacing: 0px;
  color: #999999;
  text-align: right;
}
</style>
<style>
.infoRow input {
  height: 42.5px;
  background-color: #ededed;
  border: none;
  padding-left: 25px;
}
</style>

