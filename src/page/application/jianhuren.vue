<template>
    <div  class="container">
        <apply-steps :stepNow='3' :stepNameArr='stepNameArr'></apply-steps>
        <div class="box-one"></div>
    <div class="content">
            <div style="font-size:16px; text-align: left;margin-left:16px; height:50px">
            <b>父母/监护人信息</b>
        </div>
        <div class='peple-name'>
            <span class='name'>姓名</span>
            <span class='put-name' ><input type="text" placeholder="请输入父母监护人姓名" class="amount-input"></span>
        </div>
        <div class='cellphone'>
            <span class='phoneNumber'>手机号</span>
            <span class='put-phoneNumber' ><input type="text" placeholder="请输入手机号码" class="amount-input"></span>
        </div>
        <div class='relationship'>
            <span class='relationshipTo'>与申请人关系</span>
             <Select v-model="model2" style="width:200px" class="app">
            <Option v-for="item in relationship"  :value="item.value" :key="item.value">{{ item.label }}</Option>
           </Select>
        </div>
    </div>
    <div class="box-one"></div>
    <div class="content-last">
       <div style="font-size:16px; text-align: left;margin-left:16px; height:50px">
            <b>紧急联系人信息</b>
        </div>
        <div class='peple-name'>
            <span class='name'>姓名</span>
            <span class='put-name' ><input type="text" placeholder="请输入紧急联系人姓名" class="amount-input"></span>
        </div>
        <div class='cellphone'>
            <span class='phoneNumber'>手机号</span>
            <span class='put-phoneNumber' ><input type="text" placeholder="请输入手机号" class="amount-input"></span>
        </div>
        <div class='relationship'>
            <span class='relationshipTo'>与申请人关系</span>
             <Select v-model="c" style="width:200px" class="app">
            <Option v-for="item in relationship"  :value="item.value" :key="item.value">{{ item.label }}</Option>
           </Select>
        </div>
        <div class="nextTo">
        <input type="button" value="下一步" @click="next" class="next-btn">
      </div>

    </div>

    </div>
</template>
<script>
 import applySteps from "@C/applyLoan/applySteps";
export default {
    components:{
        applySteps
      },
    data(){
        return{
         model2:"",
         stepNameArr:"",
       
     relationship: [
                    {
                        value: '父母',
                        label: '父母'
                    },
                    {
                        value: '兄妹',
                        label: '兄妹'
                    },
                    {
                        value: '姐妹',
                        label: '姐妹'
                    },
                    
                ]
        }
    },
    methods:{
          next(){
            this.$router.push({
          path: "/application/LoanApplicationNext"
        })
      },
    }
}
</script>
<style>
.container{
    width: 375px;
    height: 717.5px;
}
.content{
    width: 375px;
	height: 215px;
	background-color: #ffffff;
}
.content-last{
    width: 375px;
	height: 324.5px;
	
}
.name,.phoneNumber,.relationshipTo{
    font-size: 13px;
    color: #333333;
    position: absolute;
    left: 16px;
    font-size: 13px;
    font-weight:bold;
}
.peple-name,.cellphone,.relationship{
    height: 50px;
    text-align: center;
    vertical-align: middle;
    line-height: 50px;

}
/* 姓名电话输入框 */
.put-name,.put-phoneNumber{
    width: 223px;
	height: 42px;
	background-color:#ededed;
	opacity: 0.4;
    position: absolute;
    right: 30px;
    border: none;
    
}
/* input框样式 */
.button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    width: 223px;
    height: 42px;
    background-color: #ededed;
    border: none;
    text-align: center;
}
.app{
    margin-top: -40px;
}

.box-one{
    width: 100%;
    height: 10px;
    background: #f4f4f4;
}
.app.ivu-select-visible .ivu-select-selection {
    border-color: #ededed;
    box-shadow: unset;
}
.ivu-select-selection-focused, .ivu-select-selection:hover {
    border-color: #ededed;
}
.app .ivu-select-arrow {
    width:0;
    height:0;
    border-width:5px 5px 0;
    border-style:solid;
    border-color:#000 transparent transparent;
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
.nextTo{
    text-align: center;
}
/* 下一步按钮样式 */
.next-btn{
    width: 275px;
	height: 44px;
	border-radius: 5px;
    background: #2487ff;
    border-radius:5px;
    font-size: 16px;
    color:#ffffff;
    border:none;
    margin-top:50px;
    margin-left: 18px;
   
}

</style>


