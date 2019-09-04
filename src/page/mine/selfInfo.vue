<template>
  <div>
    <p v-for="(item,index) in dataList" :key="index" class="infoItem">
      <span>{{item.itemName}}</span>
      <span class="grayMore">
        <b>{{item.itemValue}}</b>
        <img class="moreBtn" src="../../assets/images/backGray.png">
      </span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        { itemName: "登录手机号", itemValue: "135****1231" },
        { itemName: "姓名", itemValue: "张**" },
        { itemName: "性别", itemValue: "女" },
        { itemName: "民族", itemValue: "汉族" },
        { itemName: "就读高校", itemValue: "福建师范大学" },
        { itemName: "高校所在省", itemValue: "福建省" },
        { itemName: "身份证号", itemValue: "404***********1212" },
        {
          itemName: "户籍地址",
          itemValue: "广东省深圳市福田区幸福小区2栋2020室"
        },
        { itemName: "身份证有效期", itemValue: "2015.03.07-2025.03.07" }
      ]
    };
  }
};
</script>

<style scoped>
.moreBtn {
  width: 7.5px;
  height: 12.5px;
}
.infoItem {
  padding: 15px 17px;
}
.infoItem span:nth-child(1) {
  font-size: 14px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #333333;
}
.infoItem span:nth-child(2) {
  float: right;
  display: flex;
  align-items: center;
  font-size: 13px;
  letter-spacing: 0px;
  color: #999999;
}
.moreBtn {
  margin-left: 22.5px;
}
</style>
