<template>
  <div class="inputPart">
    <Form
      ref="formValidate1"
      :model="modifyPhoneForm"
      :rules="ruleValidate"
      class="submitForm"
      v-if="type=='p'"
    >
      <FormItem prop="phone" class="formItem">
        <Input v-model="modifyPhoneForm.phone" placeholder="请输入新手机号"></Input>
        <img class="clearInfo" src="@img/cancel.png" @click="clearInput(1)">
      </FormItem>
      <FormItem prop="validCode" class="formItem">
        <Input v-model="modifyPhoneForm.validCode" placeholder="请输入短信验证码"></Input>
        <Button class="activeAgreeBtn getCode" @click="handleSubmit()">获取验证码</Button>
      </FormItem>
    </Form>
    <Form
      ref="formValidate2"
      :model="modifyEmailForm"
      :rules="ruleValidate2"
      class="submitForm"
      v-else
    >
      <FormItem prop="email" class="formItem">
        <Input v-model="modifyEmailForm.email" placeholder="请输入新邮箱"></Input>
        <img class="clearInfo" src="@img/cancel.png" @click="clearInput(2)">
      </FormItem>
      <FormItem prop="validCode" class="formItem">
        <Input v-model="modifyEmailForm.validCode" placeholder="请输入邮箱验证码"></Input>
        <Button class="activeAgreeBtn getCode">获取验证码</Button>
      </FormItem>
    </Form>
    <div class="horizenCenter">
      <Button class="confirmModify activeAgreeBtn" size="large" long @click="handleSubmit()">确认修改</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let PhoneExp = /^[18][3457890]\d{9}$/;
    const validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号码不能为空"));
      }
      if (!PhoneExp.test(value)) {
        return callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    return {
      type: this.$store.modifyType,
      modifyPhoneForm: { phone: "", validCode: "" },
      modifyEmailForm: { email: "", validCode: "" },
      ruleValidate: {
        phone: [{ validator: validatePhone, trigger: "blur" }],
        validCode: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          }
        ]
      },
      ruleValidate2: {
        email: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },
          { type: "email", message: "请输入正确的邮箱", trigger: "blur" }
        ],
        validCode: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  
  mounted() {},
  methods: {
    clearInput(num) {
      if (num == 1) {
        this.modifyPhoneForm.phone = "";
      } else {
        this.modifyEmailForm.email = "";
      }
    },
    handleSubmit() {
      let name = "";
      if (this.type == "p") {
        name = "formValidate1";
      } else {
        name = "formValidate2";
      }
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<style scoped>
.inputPart {
  padding: 43px 15px;
}
</style>
