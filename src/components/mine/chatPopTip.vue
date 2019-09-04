<template>
  <!-- <div class="chatPopTip" :class="chat.resp!=''?'userRight':'serviceLeft'">
    <div
      class="popTipChat"
      v-if="chat.resp!=''"
      :class="chat.resp!=''?'userChat':'serviceChat'"
    >
      <p v-if="chat.resp!=''">
        {{chat.content[0].req}}
        <i class="arrow-right"></i>
      </p>
      <p v-else>
        <i class="arrow-left"></i>
        {{chat.resp}}
      </p>
    </div>
    <div v-else></div>
  </div>-->
  <!-- <div>
    <div class="serviceLeft" v-if="chat.resp!==''&&chat.resp!=undefined">
      <div class="popTipChat serviceChat">
        <p>
          <i class="arrow-left"></i>
          {{chat.resp}}
        </p>
      </div>
    </div>
    <div class="chatPopTip userRight" v-else>
      <div class :class="chat.reqType=='0'?'popTipChat userChat':'serviceLeft'">
        <p v-if="chat.reqType=='0'">
          {{chat.req}}
          <i class="arrow-right"></i>
        </p>
        <div v-else class="imgPart">
          <img class="imgStyle" :src="chat.req">
        </div>
      </div>
    </div>
  </div>-->
  <div>
    <div class="chatPopTip userRight">
      <div :class="chat.reqType=='0'?'popTipChat userChat':''">
        <p v-if="chat.reqType=='0'">
          {{chat.req}}
          <i class="arrow-right"></i>
        </p>
        <div v-else class="imgPart">
          <img class="imgStyle" :src="chat.req">
        </div>
      </div>
    </div>
    <div class="chatPopTip serviceLeft" v-if="chat.resp!=''&&chat.resp!=undefined">
      <div class="popTipChat serviceChat">
        <p>
          <i class="arrow-left"></i>
          {{chat.resp}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["chat"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.chat, this.chat.resp, this.chat.resp !== "");
  }
};
</script>

<style scoped>
.popTipChat {
  width: 161.5px;
  border-radius: 3px;
  font-size: 13px;
  line-height: 15.1px;
  letter-spacing: -0.3px;
  padding: 6px 10.5px;
  margin-bottom: 19px;
}
.imgPart {
  padding: 6px 15px;
  margin-bottom: 19px;
}
.popTipChat p {
  display: flex;
  align-items: center;
}
.userRight {
  display: flex;
  justify-content: flex-end;
}
.serviceLeft {
  display: flex;
  justify-content: flex-start;
}
.userChat {
  color: #ffffff;
  background-color: #2487ff;
  margin-right: 15px;
}
.serviceChat {
  color: #333333;
  background-color: #ffffff;
  margin-left: 15px;
}
.arrow-right {
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  border-color: transparent;
  border-style: solid;
  right: 8px;
  border-width: 7px 0 7px 7px;
  border-left-color: #2487ff;
}
.arrow-left {
  display: block;
  width: 0;
  height: 0;
  position: relative;
  border-color: transparent;
  border-style: solid;
  left: -17px;
  border-width: 7px 7px 7px 0px;
  border-right-color: #ffffff;
}
.imgStyle {
  height: 50px;
  width: 50px;
}
.imgPart {
}
</style>
