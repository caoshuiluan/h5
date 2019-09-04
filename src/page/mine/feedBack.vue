<template>
  <div class="grayBackground">
    <div class="chatPart">
      <div class="chatItem" v-for="(item,index) in historyChatList" :key="index">
        <p class="chatDate" v-if="item.time">{{item.time}}</p>
        <p class="chatDate" v-else>今天</p>
        <m-feedBack
          v-bind:chat="singleChat"
          v-for="(singleChat,index2) in item.content"
          :key="'chat'+index2"
        ></m-feedBack>
      </div>
    </div>
    <div class="enterPart questInput">
      <Input v-model="questInput" placeholder="请填写你的反馈意见....." :maxlength="1000"/>
      <img class="sendIcon" src="@img/sendGray.png" v-if="questInput==''" >
      <img class="sendIcon inputSendIcon" src="@img/sendBlue.png" v-else @click="sendMes()">
    </div>
  </div>
</template>

<script>
import mFeedBack from "@C/mine/chatPopTip";
export default {
  data() {
    return {
      questInput: "",
      historyChatList: []
    };
  },
  components: {
    mFeedBack
  },
  created() {
    this.getContent();
  },
  methods: {
    //sendOpinion
    getContent() {
      this.$ajaxs.getFeedBackList({}).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.historyChatList = res.data.list;
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
    },
    sendMes(){
      let params={content:this.questInput,contentType:"0"};
      this.$ajaxs.sendMessage(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
          //  this.$Message.success(res.message);
            this.questInput="";
            this.getContent();
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
  }
};
</script>

<style scoped>
.chatItem {
}
.chatDate {
  text-align: center;
  margin-bottom: 15.5px;
  font-size: 13px;
  line-height: 21.2px;
  letter-spacing: -0.6px;
  color: #999999;
}
.questInput {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
.sendIcon {
  position: absolute;
  right: 6px;
  bottom: 6px;
  height: 25px;
}
.inputSendIcon {
  bottom: 8px;
  transform: rotate(0deg);
}
</style>
