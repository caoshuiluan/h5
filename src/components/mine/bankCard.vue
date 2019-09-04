<template>
  <div class="bankComponent">
    <div class="bankRow">
      <div class="fontPosition">
        <p class="activeCardFont">{{bankCard.bankName}}</p>
        <p class="opacityFont">{{bankCard.type}}</p>
        <p>
          <b class="opacityFont">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;</b>
          <b class="activeCardFont">{{bankCard.cardCode}}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bankCard"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.bankComponent {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bankRow {
  background-image: url("../../assets/images/agricultureBank.png");
  background-size: 100%;
  background-repeat: no-repeat;
  width: 344px;
  height: 113px;
}
.activeCardFont {
  font-size: 16px;
  line-height: 21.2px;
  letter-spacing: 0px;
  font-weight: normal;
  color: #ffffff;
}
.opacityFont {
  font-size: 13px;
  line-height: 21.2px;
  letter-spacing: 0px;
  font-weight: normal;
  color: #ffffff;
  opacity: 0.6;
}
.fontPosition {
  margin-left: 72px;
  margin-top: 17.5px;
}
.fontPosition p:nth-child(2) {
  margin-bottom: 24.5px;
}
</style>
