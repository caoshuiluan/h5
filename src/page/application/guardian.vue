<template>
  <div class="c">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <div class="box-one"></div>
      <div class="content">
        <div class="Guardian">
          <span class="bg-left"></span>
          <span class="guardianList"><b>父母/监护人信息</b></span>
        </div>
        <div class='name'>
          <Row>
            <Col span="6">
            <span class='full-name'>姓名</span>
            </Col>
            <Col span="18">
            <FormItem prop="user" class='put-name'>
              <Input type="text" v-model="formInline.user" placeholder="Username" class="name-input">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
              </span>
            </FormItem>
            </Col>
          </Row>
        </div>
        <div class='phone'>
          <span class='phone-number'>手机号码</span>
          <!--<span class='put-phone-number'><input type="text" v-model="phoneInput" placeholder="请输入手机号码"-->
                                                <!--class="phone-input"></span>-->

          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password" class="name-input">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </div>
        <div class='relation'>
          <span class='relationship'>与联系人关系</span>
          <Select v-model="model2" style="width:200px" class="app">
            <Option v-for="item in relationshipItem " :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
      <FormItem>
        <Button type="primary" class="save-btn" @click="handleSubmit('formInline')">保存</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        model2: "",
        relationshipItem: [
          {
            value: '父母',
            label: '父母'
          },
          {
            value: '姐妹',
            label: '姐妹'
          },
          {
            value: '兄弟',
            label: '兄弟'
          },
          {
            value: '师生',
            label: '师生'
          },
        ],
        nameInput: null,
        phoneInput: null,
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            {required: true, message: 'Please fill in the user name', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Please fill in the password.', trigger: 'blur'},
            {type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      save() {
        if (!this.nameInput) {
          this.$Message.warning('请输入姓名');
          return
        }
        if (!this.phoneInput) {
          this.$Message.warning('请输入手机号码');
          return
        }
//        this.$router.push('/lianxiren')
      }

    }

  }
</script>
<style scoped>
  .guardianList {
    font-size: 16px;
  }

  .container {
    width: 375px;
    height: 667px;
  }

  .content {
    width: 375px;
    height: 249px;
    background-color: #ffffff;
    margin-top: 10px;
  }

  .content-last {
    width: 375px;
    height: 344px;
    background-color: #f4f4f4;
  }

  .bg-left {
    width: 3.5px;
    height: 13px;
    background: url('../../assets/images/zhuzhuang2x.png') no-repeat;
    float: left;
    margin: 2px 5px 0 10px;
    background-size: 100%;
  }

  .Guardian {
    width: 375px;
    height: 50px;
    overflow: hidden;
    padding-top: 10px;
    vertical-align: middle;
  }

  .app {
    position: absolute;
    right: 30px;
    text-align: left;
  }

  .informationlist {
    font-size: 16px;
    letter-spacing: 0px;
    color: #333333;
    margin-left: -10px;
    text-align: left;
    margin-left: 5px;
    height: 50px;
  }

  .name, .phone, .relation {
    position: relative;
    height: 50px;
    line-height: 50px;
    text-align: center;
    vertical-align: middle;
  }

  .full-name, .phone-number, .relationship {
    font-size: 13px;
    letter-spacing: 0px;
    color: #333333;
    font-weight: bold;
    margin-top: 10px;
  }

  /* 姓名和电话输入框 */
  .name-input, .phone-input {
    width: 223px;
    padding-left: 10px;
    border: none;
    text-align: left;
    float: right;
  }

  /* 姓名和电话输入框 */
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    width: 223px;
    height: 42px;
    background-color: #ededed;
    border: none;
    text-align: center;
  }

  .app.ivu-select-visible .ivu-select-selection {
    border-color: #ededed;
    box-shadow: unset;
  }

  .ivu-select-selection-focused, .ivu-select-selection:hover {
    border-color: #ededed;
  }

  .app .ivu-select-arrow {
    width: 0;
    height: 0;
    border-width: 5px 5px 0;
    border-style: solid;
    border-color: #000 transparent transparent;
  }

  .app .ivu-icon-ios-arrow-down:before {
    content: "";
  }

  .app.ivu-select-single .ivu-select-selection {
    width: 223px;
    height: 42px;
    background-color: #ededed;
    position: absolute;
    right: 30px;
    border: none;
  }

  .app.ivu-select-single .ivu-select-selection .ivu-select-placeholder, .app.ivu-select-single .ivu-select-selection .ivu-select-selected-value {
    height: 42px;
    line-height: 42px;
  }

  .app.ivu-select .ivu-select-dropdown {
    width: 223px;
  }

  .save {
    text-align: center;
  }

  .save-btn {
    width: 275px;
    height: 44px;
    background-color: #2487ff;
    border-radius: 5px;
    font-size: 18px;
    line-height: 44px;
    letter-spacing: 1px;
    color: #ffffff;
    border: none;
    margin: 0 auto;
    margin-top: 102px;
  }


</style>

