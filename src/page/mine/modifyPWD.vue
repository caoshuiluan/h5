<template>
  <div>
    <Row class="modifyTabs lineBottom">
      <div class="tabBottom" :class="type==2?'activeItemBttom':''"></div>
      <Col
        span="12"
        class="tabItem horizenCenter"
        :class="type==1?'activeItem':''"
        @click.native="toTab(1)"
      >
        <p>使用原密码修改</p>
      </Col>
      <Col
        span="12"
        class="tabItem horizenCenter"
        :class="type==2?'activeItem':''"
        @click.native="toTab(2)"
      >
        <p>使用短信验证码修改</p>
      </Col>
    </Row>
    <div class="formPart">
      <Form
        ref="formValidate1"
        :model="modifyByOriginForm"
        :rules="ruleValidate"
        class="submitForm"
        v-show="type==1"
      >
        <FormItem prop="originPWD" class="formItem">
          <Input v-model="modifyByOriginForm.originPWD" placeholder="请输入初始密码"></Input>
          <img
            class="clearInfo"
            src="@img/cancel.png"
            @click="clearInput(1)"
            v-if="modifyByOriginForm.originPWD"
          >
        </FormItem>
        <FormItem prop="newPWD" class="formItem">
          <Input
            v-model="modifyByOriginForm.newPWD"
            placeholder="请输入6位字符的密码，数字+字母+下划线，至少两项"
            :type="isOpen?'password':'text'"
          ></Input>
          <img class="clearInfo eyes" v-if="isOpen" src="@img/close-eye.png" @click="clearInput(2)">
          <img
            class="clearInfo eyes openEyes"
            v-else
            src="@img/open-eye.png"
            @click="clearInput(4)"
          >
        </FormItem>
        <FormItem prop="confirmPWD" class="formItem">
          <Input v-model="modifyByOriginForm.confirmPWD" placeholder="请再次输入新密码" type="password"></Input>
          <img
            class="clearInfo"
            src="@img/cancel.png"
            @click="clearInput(3)"
            v-if="modifyByOriginForm.confirmPWD"
          >
        </FormItem>
      </Form>
      <Form
        ref="formValidate2"
        :model="modifyByPhoneForm"
        :rules="ruleValidate2"
        class="submitForm"
        v-show="type==2"
      >
        <FormItem prop="validCode" class="formItem">
          <Input v-model="modifyByPhoneForm.validCode" placeholder="请输入短信验证码"></Input>
          <span :class="isSending?'isSending':''" class="getCode" @click="getCode()" type="default">
            <span v-show="isSending">{{counter}}S</span>
            <span v-show="!isSending">{{sendTip}}</span>
          </span>
        </FormItem>
        <FormItem prop="newPWD" class="formItem">
          <Input
            v-model="modifyByPhoneForm.newPWD"
            placeholder="请输入6位字符的密码，数字+字母+下划线，至少两项"
            :type="isOpen?'password':'text'"
          ></Input>
          <img class="clearInfo eyes" v-if="isOpen" src="@img/close-eye.png" @click="clearInput(2)">
          <img
            class="clearInfo eyes openEyes"
            v-else
            src="@img/open-eye.png"
            @click="clearInput(4)"
          >
        </FormItem>
        <FormItem prop="confirmPWD" class="formItem">
          <Input v-model="modifyByPhoneForm.confirmPWD" placeholder="请再次输入新密码" type="password"></Input>
          <img
            class="clearInfo"
            src="@img/cancel.png"
            @click="clearInput(5)"
            v-if="modifyByPhoneForm.confirmPWD"
          >
        </FormItem>
      </Form>
    </div>
    <div class="horizenCenter">
      <Button class="confirmModify activeAgreeBtn" size="large" long @click="handleSubmit()">确认修改</Button>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";
let Base64 = require("js-base64").Base64;
export default {
  data() {
    let NewPWDExp = /^(?=.*[a-zA-Z0-9].*)(?=.*[a-zA-Z\\W].*)(?=.*[0-9\\W].*).{6}$/;

    const validateNewPWD = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("新密码不能为空"));
      }
      if (!NewPWDExp.test(value)) {
        return callback(
          new Error("请输入6位字符的密码，数字+字母+下划线，至少两项")
        );
      } else {
        callback();
      }
    };
    const validateConfirmPWD = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请再次输入密码"));
      }
      if (this.type == 1) {
        if (value.trim() != this.modifyByOriginForm.newPWD.trim()) {
          return callback(new Error("两次输入的密码不一样"));
        } else {
          callback();
        }
      } else {
        if (value.trim() != this.modifyByPhoneForm.newPWD.trim()) {
          return callback(new Error("两次输入的密码不一样"));
        } else {
          callback();
        }
      }
    };
    return {
      type: 1,
      isOpen: false,
      counter: 60,
      isSending: false,
      sendTip: "获取验证码",
      modifyByOriginForm: { originPWD: "", newPWD: "", confirmPWD: "" },
      modifyByPhoneForm: { validCode: "", newPWD: "", confirmPWD: "" },
      ruleValidate: {
        originPWD: [
          {
            required: true,
            message: "初始密码不能为空",
            trigger: "blur"
          }
        ],
        newPWD: [{ validator: validateNewPWD, trigger: "blur" }],
        confirmPWD: [{ validator: validateConfirmPWD, trigger: "blur" }]
      },
      ruleValidate2: {
        validCode: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          }
        ],
        newPWD: [{ validator: validateNewPWD, trigger: "blur" }],
        confirmPWD: [{ validator: validateConfirmPWD, trigger: "blur" }]
      }
    };
  },
  mounted() {
  },
  methods: {
    toTab(type) {
      this.type = type;
      let name = "";
      if (this.$refs["formValidate2"]) {
        this.$refs["formValidate2"].resetFields();
      }
      if (this.$refs["formValidate1"]) {
        this.$refs["formValidate1"].resetFields();
      }
    },
    getCode() {
      if (!this.isSending) {
        this.$ajaxs.sendPhoneCode({}).then(
          res => {
            let returnStr = this.$commonMethods.getResultByCode(res.code);
            if (returnStr === true) {
              this.$Message.success("已发送短信，请查收！");
              this.isSending = true;
              this.countDown();
            } else {
              this.$Message.warning(returnStr);
            }
          },
          err => {
            //添加错误连接提示
          }
        );
      }
    },
    countDown() {
      let clock = window.setInterval(() => {
        this.counter--;
        if (this.counter < 0) {
          window.clearInterval(clock);
          this.counter = 60;
          this.isSending = false;
          this.sendTip = "重新发送";
        }
      }, 1000);
    },
    clearInput(num) {
      switch (num) {
        case 1:
          this.modifyByOriginForm.originPWD = "";
          break;
        case 2:
          this.isOpen = !this.isOpen;
          break;
        case 4:
          this.isOpen = !this.isOpen;
          break;
        case 3:
          this.modifyByOriginForm.confirmPWD = "";
          break;
        case 5:
          this.modifyByPhoneForm.confirmPWD = "";
          break;
      }
    },
    handleSubmit() {
      let name = "";
      let params;
      if (this.type == 1) {
        name = "formValidate1";
        this.$refs[name].validate(valid => {
          if (valid) {
            params = {
              oldPassword: md5.base64(this.modifyByOriginForm.originPWD),
              newPassword: md5.base64(this.modifyByOriginForm.newPWD)
            };
            this.$ajaxs.changePWDByOld(params).then(
              res => {
                let returnStr = this.$commonMethods.getResultByCode(res.code);
                if (returnStr === true) {
                  this.$Message.success("修改密码成功！");
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
            this.$refs[name].resetFields();
          }
        });
      } else {
        name = "formValidate2";
        this.$refs[name].validate(valid => {
          if (valid) {
            this.$Message.success("Success!");
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.formPart {
  margin-top: 16.5px;
}
.clearInfo,
.getCode {
  right: 16.5px;
}
.getCode {
  background: #2487ff;
  color: #ffffff;
  padding: 2px 5px;
  border-radius: 5px;
}
.eyes {
  width: 22px;
  height: 8.5px;
}
.openEyes {
  width: 22px;
  height: 12px;
}
.isSending {
  background-color: #999999 !important;
}
</style>
<style>
.formItem .ivu-form-item-content {
  padding: 0 16.5px;
}
.formItem .ivu-form-item-error-tip {
  left: 22px !important;
}
</style>


