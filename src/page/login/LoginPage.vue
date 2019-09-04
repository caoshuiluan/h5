<template>
  <div>
    <div class="formPart">
      <Form
        ref="formValidate2"
        :model="modifyByPhoneForm"
        :rules="ruleValidate2"
        class="submitForm"
      >
        <FormItem prop="confirmPWD" class="formItem">
          <Input v-model="modifyByPhoneForm.phoneNumber" placeholder="请输入手机号" type="text"></Input>
        </FormItem>
        <FormItem prop="newPWD" class="formItem">
          <Input
            v-model="modifyByPhoneForm.newPWD"
            placeholder="请输入6位字符的密码，数字+字母+下划线，至少两项"
            :type="isOpen?'password':'text'"
          ></Input>
          <img
            class="clearInfo eyes"
            :src="isOpen?require('@img/close-eye.png'):require('@img/open-eye.png')"
            @click="clearInput(2)"
          >
        </FormItem>
        <FormItem prop="validCode" class="formItem">
          <Input v-model="modifyByPhoneForm.validCode" placeholder="请输入短信验证码"></Input>
          <span :class="isSending?'isSending':''" class="getCode" @click="getCode()" type="default">
            <span v-show="isSending">{{counter}}S</span>
            <span v-show="!isSending">{{sendTip}}</span>
          </span>
        </FormItem>
      </Form>
    </div>

    <div class="Agreement">
      <img src="@img/确认按钮.png" alt class="confirm-btn">
      <span class="comfirm-Agreement">我已阅读并已同意
        <a href>《注册用户协议》</a>
      </span>
    </div>
    <div class="horizenCenter">
      <Button class="confirmModify activeAgreeBtn" size="large" long @click="handleSubmit()">立即注册</Button>
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
        return callback(new Error("密码不能为空"));
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
        return callback(new Error("请输入手机号"));
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
  created() {},
  mounted() {
    console.log(this.pwdCode());
  },
  methods: {
    pwdCode(data) {
      data = data || {};
      let sortData = "";
      let timestamp = new Date().getTime();
      data.timestamp = timestamp;
      //按对象属性进行排序
      let objkeys = Object.keys(data).sort();
      objkeys.forEach(val => {
        sortData += val + "=" + data[val];
      });
      //拼接字符串，并md5加密
      let sign = md5(
        sortData + "*Haxb_*Cnmobi_*20170807_*XinBao-SignSecret_*By5Hirson"
      );
      //return { sign, timestamp };
      return sign;
    },
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
  padding-top: 16.5px;
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
  height: 12px;
}
.openEyes {
  width: 22px;
  height: 12px;
}
.isSending {
  background-color: #999999 !important;
}
.Agreement {
  height: 50px;
  width: 100%;
  padding: 0 10px;
}
/* 确认协议字号 */
.comfirm-Agreement {
  font-size: 13px;
  position: relative;
}
.confirm-btn {
  width: 13px;
  height: 13px;
  position: relative;
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


