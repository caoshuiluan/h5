<template>
  <div>
    <p class="tipsWord">请看以下文件</p>
    <div v-for="(file,index) in fileList" :key="index">
      <p class="fileTitle">
        <router-link to="/index">{{file.title}}</router-link>
      </p>
      <hr class="lineSpace">
    </div>
    <p class="readSelect" @click="isConfirm=!isConfirm">
      <i class="confirmIcon" :class="isConfirm?'confirmActive':''"/> 我已知悉并阅读上述文件
    </p>
    <div class="btns">
      <Button class="inActiveBtn" size="large" type="default" :class="isConfirm?'activeBtn':''">暂不签署</Button>
      <Button class="inActiveBtn" size="large" type="default" :class="isConfirm?'activeBtn':''">同意签署</Button>
    </div>
    <Modal v-model="noticeModal" width="320">
      <p slot="header">电子签署重要事项告知</p>
      <span class="noticeContent">
        <p>&nbsp;&nbsp; 《华安商业助学贷款履约保证保险投保单》 、《华安征信授权书》、《借款合同》、《中国某某银行征信授权书》</p>
        <p>&nbsp;&nbsp; 《华安商业助学贷款履约保证保险投保单》 、《华安征信授权书》、《借款合同》、《中国某某银行征信授权书》</p>
        <p>&nbsp;&nbsp; 《华安商业助学贷款履约保证保险投保单》 、《华安征信授权书》、《借款合同》、《中国某某银行征信授权书》</p>
        <p>&nbsp;&nbsp; 《华安商业助学贷款履约保证保险投保单》 、《华安征信授权书》、《借款合同》、《中国某某银行征信授权书》</p>
        <p>&nbsp;&nbsp; 《华安商业助学贷款履约保证保险投保单》 、《华安征信授权书》、《借款合同》、《中国某某银行征信授权书》</p>
        <p>&nbsp;&nbsp; 《华安商业助学贷款履约保证保险投保单》 、《华安征信授权书》、《借款合同》、《中国某某银行征信授权书》</p>
      </span>
      <div slot="footer" class="noticeFooter">
        <p class="titleFont">将要签署的法律文件</p>
        <p class="lawFiles linkFont">
          <span v-for="(fileTitle,index) in fileList" :key="index">{{fileTitle.title}}</span>
        </p>
        <Button
          class="agreeBtn"
          size="large"
          :class="canClick?'activeAgreeBtn':''"
          long
          @click="agreeNotice"
          :disabled="!canClick"
        >
          我已阅读并同意
          <span v-if="!canClick">
            (
            <b>{{counter}}S</b>
            )
          </span>，去签署
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticeModal: true,
      fileList: [
        { title: "《华安商业助学贷款履约保证保险投保单》" },
        { title: "《华安征信授权书》" },
        { title: "《借款合同》" },
        { title: "《中国某某银行征信授权书》" }
      ],
      isConfirm: false,
      counter: 5,
      canClick: true
    };
  },
  created() {
    this.countDown();
  },
  methods: {
    agreeNotice() {
      this.noticeModal=false;
    },
    countDown() {
      if (!this.canClick) return;
      this.canClick = false;
      let clock = window.setInterval(() => {
        this.counter--;
        if (this.counter < 0) {
          window.clearInterval(clock);
          this.counter = 5;
          this.canClick = true;
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.tipsWord {
  font-size: 16px;
  color: #333333;
  padding: 12.5px;
}
.fileTitle {
  padding: 12.5px;
  font-size: 14px;
  color: #2487ff;
}
.confirmIcon {
  width: 13px;
  height: 13px;
  background: url(../../assets/images/confirmIcon_gray.png);
  background-size: 100%;
  display: inline-block;
}
.confirmActive {
  background: url(../../assets/images/confirm-btn.png);
  background-size: 100%;
}
.readSelect {
  padding: 12.5px;
  font-size: 15px;
  color: #999999;
}
.btns {
  position: relative;
  margin-top: 100px;
  padding: 12.5px;
}
.inActiveBtn:nth-child(2) {
  float: right;
}
.inActiveBtn,
.ivu-btn[disabled]:active {
  width: 152px;
  height: 44.5px;
  background-color: #999999;
  color: #ffffff;
  border-radius: 22.1px 22.1px 22.1px 22.1px;
  opacity: 0.5;
  font-size: 18px;
}
.activeBtn {
  background-color: #2487ff;
  color: #ffffff;
  opacity: 1;
}
.noticeFooter {
  text-align: left;
}
.lawFiles {
  margin-bottom: 14px;
}
.noticeFooter .titleFont {
  margin-bottom: 11.5px;
}
.agreeBtn b {
  color: #2487ff;
  font-size: 19px;
}
</style>
