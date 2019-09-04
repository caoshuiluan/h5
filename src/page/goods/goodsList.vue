<template>
  <div>
    <Row class="selectEducation">
      <Col span="8" class="selectItem">
        <Select v-model="goodsType" size="small" style="width:84px">
          <Option
            v-for="item in goodsTypeList"
            :value="item.value"
            :key="item.value"
          >{{ item.label }}</Option>
        </Select>
      </Col>
      <Col span="8" class="selectItem">
        <Select v-model="goodsBrand" size="small" style="width:84px">
          <Option
            v-for="item in goodsBranList"
            :value="item.value"
            :key="item.value"
          >{{ item.label }}</Option>
        </Select>
      </Col>
      <Col span="8" class="selectItem">
        <Select v-model="goodsMoney" size="small" style="width:84px">
          <Option
            v-for="item in goodsMoneyList"
            :value="item.value"
            :key="item.value"
          >{{ item.label }}</Option>
        </Select>
      </Col>
    </Row>
    <Row
      class="goodsList"
      v-for="(good,index) in goodsList"
      :key="index"
      @click.native="toGoodsDetail(good)"
    >
      <Col span="6" class="listContent">
        <img :src="good.goodsPricute">
      </Col>
      <Col span="18" class="listContent">
        <p>{{good.goodsName}} {{good.goodsDescribe}}</p>
        <p>¥{{good.goodsSellingPrice}}</p>
        <p>月分期：{{good.interrestsMoney}}~{{good.capitalMoney}}</p>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsType: "0",
      goodsBrand: "0",
      goodsMoney: "0",
      goodsTypeList: [],
      goodsBranList: [
        { label: "华为", value: "0" },
        { label: "苹果", value: "1" }
      ],
      goodsMoneyList: [{ label: "2K~8K", value: "1" }],
      goodsList: [
        {
          title: "荣耀9i 4GB+64GB 幻夜黑 移动联通电信4G前面屏手机 双卡双待",
          money: 2200,
          monthCount: "¥25 - ¥100"
        },
        {
          title: "荣耀9i 4GB+64GB 幻夜黑 移动联通电信4G前面屏手机 双卡双待",
          money: 2100,
          monthCount: "¥25 - ¥100"
        }
      ],
      province:this.$commonMethods.getLStorage("provinceId")
    };
  },
  created() {
    this.$store.state.footerSelect = 3;
    this.getSelectItems();
    this.getGoodsList();
  },
  watch:{
    goodsType(){
      this.getGoodsList();
    },
    goodsBrand(){
      this.getGoodsList();
    },
    goodsMoney(){
      this.getGoodsList();
    },
  },
  methods: {
    toGoodsDetail(goods) {
      this.$router.push({
        path: "/goods/goodsDetail"
      });
    },
    getSelectItems() {
      //this.$commonMethods.setLStorage("provinceId",val);
      //getSelectItems
      let params = { cPlaceCde: this.province };
      this.$ajaxs.getSelectItems(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.goodsTypeList = res.data.goodsType.map(function(item) {
              return { label: item.cDictNme, value: item.cDictCde };
            });
            this.goodsMoneyList = res.data.gsPriceSection.map(function(item) {
              return { label: item.cDictNme, value: item.cDictCde };
            });
            this.goodsBranList = res.data.goodsBrand.map(function(item) {
              return { label: item.cDictNme, value: item.cDictCde };
            });
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
    getGoodsList() {
      //getGoodsList
      let params = {goodsType:this.goodsType,goodsBrand:this.goodsBrand,gsPriceSection:this.goodsMoney,cPlaceCde: this.province};
      this.$ajaxs.getGoodsList(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.goodsList=res.data.list;
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
.selectEducation {
  padding: 16.5px 20px;
  text-align: center;
}
.selectEducation,
.goodsList {
  border-bottom: solid 1px #ededed;
}
.goodsList {
  padding: 16.5px 19px;
}
.listContent img {
  width: 93.5px;
  height: 110px;
  max-width: 100%;
}
.goodsList .listContent:nth-child(2) {
  padding: 0px 11.5px;
}
.listContent {
  height: 112.5px;
}
.listContent p:nth-child(1) {
  font-size: 15px;
  line-height: 19.9px;
  letter-spacing: 0px;
  color: #333333;
}
.listContent p:nth-child(2) {
  font-size: 18px;
  letter-spacing: 0px;
  color: #fb3333;
  position: absolute;
  bottom: 26.5px;
}
.listContent p:nth-child(3) {
  font-size: 14px;
  letter-spacing: 0px;
  color: #999999;
  position: absolute;
  bottom: 0px;
}
</style>
