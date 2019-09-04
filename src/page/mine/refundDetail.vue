<template>
  <div>
    <div class="refundHeader">
      <div class="headerCard">
        <p class="cardTopTitle">借据信息：{{detaisData.voucNo}}</p>
        <b class="tagTips">生活费</b>
        <img class="cornerImg" src="@img/refundIcon.png">
        <Row class="cardRow">
          <Col span="8" class="cardItem">
            <p>贷款金额</p>
            <p class="itemValue">¥{{detaisData.voucAmt}}</p>
          </Col>
          <Col span="8" class="cardItem">
            <p>贷款余额</p>
            <p class="itemValue">¥{{detaisData.loanBalance}}</p>
          </Col>
          <Col span="8" class="cardItem">
            <p>应还金额</p>
            <p class="itemValue">¥{{detaisData.shouldAmount}}</p>
          </Col>
        </Row>
        <Row class="cardRow">
          <Col span="8" class="cardItem">
            <p>实还金额</p>
            <p class="itemValue">¥{{detaisData.actualAmount}}</p>
          </Col>
          <Col span="8" class="cardItem">
            <p>还款状态</p>
            <p class="itemValue" v-if="detaisData.repayStatus==1">正常</p>
            <p class="itemValue warningFont" v-else>{{detaisData.repayStatus==2?'超期':'逾期'}}</p>
          </Col>
          <Col span="8" class="cardItem">
            <p>逾期金额</p>
            <p class="itemValue warningFont">¥{{detaisData.overdateAmount}}</p>
          </Col>
        </Row>
      </div>
      <img class="headerBottom" src="@img/envlope.png">
    </div>
    <div class="yearTabs">
      <Tabs value="detailTab0" class="detailTabs">
        <TabPane
          :label="details.year"
          :name="'detailTab'+index"
          v-for="(details,index) in detaisData.years"
          :key="index"
        >
          <div v-for="(singleCard,index2) in details.months" :key="'card'+index2">
            <l-cards v-bind:refundData="singleCard"></l-cards>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import lCards from "@C/mine/refundCard";
export default {
  data() {
    return {
      detaisData: [
        {
          year: "2014",
          list: [
            {
              rDate: "2018.05.02",
              eDate: "2018.05.02",
              pay: 30,
              refund: 30,
              overTime: 30,
              type: 1
            },
            {
              rDate: "2018.05.02",
              eDate: "2018.05.02",
              pay: 30,
              refund: 30,
              overTime: 30,
              type: 2
            },
            {
              rDate: "2018.05.02",
              eDate: "2018.05.02",
              pay: 30,
              refund: 30,
              overTime: 30,
              type: 3
            },
            {
              rDate: "2018.05.02",
              eDate: "2018.05.02",
              pay: 30,
              refund: 30,
              overTime: 30,
              type: 1
            },
            {
              rDate: "2018.05.02",
              eDate: "2018.05.02",
              pay: 30,
              refund: 30,
              overTime: 30,
              type: 2
            },
            {
              rDate: "2018.05.02",
              eDate: "2018.05.02",
              pay: 30,
              refund: 30,
              overTime: 30,
              type: 3
            }
          ]
        },
        {
          year: "2015",
          list: [
            {
              rDate: "2018.05.02",
              eDate: "2018.05.02",
              pay: 30,
              refund: 30,
              overTime: 30,
              type: 2
            }
          ]
        },
        {
          year: "2016",
          list: [
            {
              rDate: "2018.05.02",
              eDate: "2018.05.02",
              pay: 30,
              refund: 30,
              overTime: 30,
              type: 2
            }
          ]
        },
        {
          year: "2017",
          list: [
            {
              rDate: "2018.05.02",
              eDate: "2018.05.02",
              pay: 30,
              refund: 30,
              overTime: 30,
              type: 1
            }
          ]
        },
        {
          year: "2018",
          list: [
            {
              rDate: "2018.05.02",
              eDate: "2018.05.02",
              pay: 30,
              refund: 30,
              overTime: 30
            }
          ]
        },
        {
          year: "2019",
          list: [
            {
              rDate: "2018.05.02",
              eDate: "2018.05.02",
              pay: 30,
              refund: 30,
              overTime: 30
            }
          ]
        },
        {
          year: "2020",
          list: [
            {
              rDate: "2018.05.02",
              eDate: "2018.05.02",
              pay: 30,
              refund: 30,
              overTime: 30
            }
          ]
        }
      ],
      params: this.$route.query
    };
  },
  created() {
    this.getRefundDetail();
  },
  components: {
    lCards
  },
  methods: {
    //获取还款明细
    getRefundDetail() {
      let params = { cId: this.params.cId, voucNo: this.params.voucNo };
      this.$ajaxs.getRefundDetail(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.detaisData = res.data;
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
.refundHeader {
  position: relative;
  background-image: url("../../assets/images/headerBack.png");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 245px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.headerCard {
  width: 345px;
  height: 196px;
  background-color: #ffffff;
  box-shadow: 0px 1px 11.8px 1.8px rgba(8, 79, 165, 0.3);
  border-radius: 10.5px;
  padding: 12px 12.5px;
}
.headerBottom {
  height: 120px;
  position: absolute;
  bottom: 0;
  position: absolute;
  bottom: -10px;
}
.cornerImg {
  width: 128px;
  height: 130.5px;
  position: absolute;
  top: 0;
  right: 0;
}
.tagTips {
  background-color: #2487ff;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 15px;
  letter-spacing: 0px;
  color: #ffffff;
  padding: 7px 17.5px;
  border-top-left-radius: 14.5px;
  border-bottom-left-radius: 14.5px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.cardTopTitle {
  font-size: 14px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #333333;
}
.cardItem p:nth-child(1) {
  font-size: 16px;
  line-height: 16.9px;
  letter-spacing: 0px;
  color: #333333;
  opacity: 0.5;
}
.itemValue {
  font-size: 15px;
  line-height: 16.9px;
  letter-spacing: 0px;
  color: #333333;
}
.cardRow {
  margin-top: 20px;
  text-align: center;
}
.cardRow p:nth-child(2) {
  margin-top: 6px;
}
.warningFont {
  color: #fb3333;
}
.yearTabs {
  margin-top: 10px;
}
</style>
