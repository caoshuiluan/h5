<template>
  <div class="contactPage">
    <p class="contactTitle">
      <b class="guessTitle">猜你问题</b>
      <b class="changeTitle" @click.stop="changeQuestions()">
        换一换
        <img src="@img/change.png">
      </b>
    </p>
    <Row>
      <p
        @click.stop="getQuestDetail(quest.problemId)"
        class="questions lineBottom"
        v-for="(quest,index) in questionList"
        :key="index"
      >{{quest.problemTitle}}</p>
    </Row>
    <Drawer class="buyDrawer" title :closable="false" v-model="buySelect">
      <Row class="lineBottom">
        <Col span="22" class="drawerBasiceData">
          <p>{{answerContent.problemTitle}}</p>
        </Col>
        <Col span="2" class="drawerCloseImg" @click.native="buySelect=false">
          <img src="../../assets/images/cancel.png">
        </Col>
      </Row>
      <Row v-html="answerContent.problemAnswer" class="answerRow">{{answerContent.problemAnswer}}</Row>
      <Row class="isUseful">
        <Col class="userItem" span="12">
          <p class="useTip1">是否对您有帮助：</p>
        </Col>
        <Col class="userItem" span="6">
          <p class="useTip2" @click="setUseful('true')">
            <img src="@img/useful.png">&nbsp;&nbsp;有用
          </p>
        </Col>
        <Col class="userItem" span="6">
          <p class="useTip2" @click="setUseful('false')">
            <img src="@img/useness.png">&nbsp;&nbsp;没用
          </p>
        </Col>
      </Row>
    </Drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      buySelect: false,
      questionList: [{ problemTitle: "可以延期还款吗？" }],
      answerContent: {},
      guid: this.$commonMethods.getGuid(),
      questionId: ""
    };
  },
  created() {
    this.changeQuestions();
  },
  methods: {
    //更换问题
    changeQuestions() {
      let params = { page: this.page, size: 1 };
      this.$ajaxs.getQuestionList(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.questionList = res.data.list;
            this.page++;
            if (this.page > res.data.pages) {
              this.page = 1;
            }
          } else {
            this.$Message.warning(returnStr);
          }
        },
        err => {
          //添加错误连接提示
        }
      );
    },
    getQuestDetail(id) {
      console.log(id + "问题查看");
      this.buySelect = true;
      this.getQuestionDetail(id);
      this.questionId = id;
    },
    getQuestionDetail(qId) {
      let params = { id: qId };
      this.$ajaxs.getAnswer(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.answerContent = res.data;
          } else {
            this.$Message.warning(returnStr);
          }
        },
        err => {
          //添加错误连接提示
        }
      );
    },
    setUseful(isUse) {
      let params = {
        result: isUse,
        id: this.questionId,
        mobileModel: this.guid
      };
      this.$ajaxs.setEstimate(params).then(
        res => {
          let returnStr = this.$commonMethods.getResultByCode(res.code);
          if (returnStr === true) {
            this.$Message.success("感谢您对我们的评价！");
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
.contactPage {
  z-index: 1;
}

.contactTitle {
  padding: 16.5px 13.5px;
}
.guessTitle {
  font-size: 16px;
  font-weight: normal;
  line-height: 15px;
  letter-spacing: 0px;
  color: #333333;
  text-align: left;
}
.changeTitle {
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #2487ff;
  float: right;
  display: flex;
  align-items: center;
}
.changeTitle img {
  width: 15px;
  height: 13px;
}
.questions {
  padding: 16.5px 15px;
  font-size: 14px;
  font-weight: normal;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #999999;
}
.drawerBasiceData p {
  font-size: 14px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #333333;
}
.answerRow {
  padding: 12px 0px;
}
.isUseful {
  border-top: solid 1px #ededed;
  height: 47px;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0px 15px;
}
.userItem img {
  width: 23px;
  height: 23px;
}
.userItem p {
  display: flex;
  align-items: center;
}
.useTip1 {
  font-size: 13px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #999999;
  opacity: 0.5;
}
.useTip2 {
  font-size: 13px;
  line-height: 21.2px;
  letter-spacing: -0.3px;
  color: #333333;
}
</style>
