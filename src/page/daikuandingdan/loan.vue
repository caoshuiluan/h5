<template>
    <div class="container">
        <div class="header-title"> 贷款 </div>
        <div  class="Information-bar">
            <div >您可能需要（您可以申请）：</div>
        </div>

        <div class="loanRow" v-show="!isShowBuldingHome">
            <div class="headerRow" >
                <div class="icon-left buldingHome"></div>
                <div class="name-box">
                    <div class="project-text">学费</div>
                    <div class="introduce-text" >{{Tuition}}</div> 
                </div>
                <div class="icon-right">
                  <Icon @click="isShowBuldingHome=!isShowBuldingHome"  type="md-arrow-dropdown" v-show="!isShowBuldingHome"/>
                </div>
            </div>
        </div>
        <div class="down-box"  v-show="isShowBuldingHome">
            <div class="head">
                <img src="../../assets/images/zhuzhuang2x.png" alt="" class="img-left">
                <span class="Title">学费</span>
                <span>({{Tuition}})</span>
                <Icon type="md-arrow-dropup" @click="isShowBuldingHome=!isShowBuldingHome" class="icon-up-btn"/>
            </div>
            <div class="Characteristic">申请条件及特点</div>
            <Row class="info-box"  >
                <Col span="12" v-for='(item,index) in dataList' :key='index' class="face">
                    <span class="img"><img src="../../assets/images/bluespot.png" alt="" class="point-img"></span>
                    <span class="describe">{{item.describe}}</span>
                </Col>
                <Col span="12" class="face"  v-for='(item,index) in dataList1' :key='"f"+index'> 
                  <span class="img"><img src="../../assets/images/bluespot.png" alt="" class="point-img"></span>
                    <span class="describe">{{item.describe}}</span>    
                </Col>
            </Row>
            <div class="nextTo">
                <input type="button"  value="测算" @click="calculationTo" class="calculation">
                <input type="button"  value="立即申请" @click="applicationTo" class="application">
            </div> 
        </div>

        <div class="loanRow" v-show="!isShowLockHome">
            <div class="headerRow" >
                <div class="icon-left lockHome"></div>
                <div class="name-box">
                    <div class="project-text">创业基金</div>
                    <div class="introduce-text" >{{VentureCapital}}</div> 
                </div>
                <div class="icon-right">
                  <Icon @click="isShowLockHome=!isShowLockHome"  type="md-arrow-dropdown" v-show="!isShowLockHome"/>
                </div>
            </div>
        </div>
        <div class="down-box "  v-show="isShowLockHome">
            <div class="head">
                <i><img src="../../assets/images/zhuzhuang2x.png" alt="" class="img-left"></i>
                <span class="Title">创业基金</span>
                <span>({{VentureCapital}})</span>
                <Icon type="md-arrow-dropup" @click="isShowLockHome=!isShowLockHome" class="icon-up-btn"/>
            </div>
            <div class="Characteristic">申请条件及特点</div>
            <Row class="info-box" >
                <Col span="12" v-for='(item,index) in dataList' :key='"a"+index' class='face'>
                    <span class="img"><img src="../../assets/images/bluespot.png" alt="" class="point-img"></span>
                    <span class="describe">{{item.describe}}</span>
                </Col>
                <Col span="12" class="face"  v-for='(item,index) in CharacteristicList1' :key='"a1"+index'> 
                  <span class="img"><img src="../../assets/images/bluespot.png" alt="" class="point-img"></span>
                    <span class="describe">{{item.describe}}</span>    
                </Col>
            </Row>
            <div class="nextTo">
                <input type="button"  value="测算" @click="calculationTo" class="calculation">
                <input type="button"  value="立即申请" @click="applicationTo" class="application">
            </div> 
        </div>

        <div class="loanRow" v-show="!isShowFoodHome">
            <div class="headerRow" >
                <div class="icon-left foodHome"></div>
                <div class="name-box">
                    <div class="project-text">生活费</div>
                    <div class="introduce-text" >{{VentureCapital}}</div> 
                </div>
                <div class="icon-right">
                  <Icon @click="isShowFoodHome=!isShowFoodHome"  type="md-arrow-dropdown" v-show="!isShowFoodHome"/>
                </div>
            </div>
        </div>
        <div class="down-box"  v-show="isShowFoodHome">
            <div class="head">
                <i><img src="../../assets/images/zhuzhuang2x.png" alt="" class="img-left"></i>
                <span class="Title">生活费</span>
                <span>({{LivingExpenses}})</span>
                <Icon type="md-arrow-dropup" @click="isShowFoodHome=!isShowFoodHome" class="icon-up-btn"/>
            </div>
            <div class="Characteristic">申请条件及特点</div>
            <Row class="info-box"  >
                <Col span="12" v-for='(item,index) in dataList' :key='"b"+index' class='face'>
                    <span class="img"><img src="../../assets/images/bluespot.png" alt="" class="point-img"></span>
                    <span class="describe">{{item.describe}}</span>
                </Col>
                <Col span="12" class='face'  v-for='(item,index) in CharacteristicList1' :key='"b1"+index'> 
                  <span class="img"><img src="../../assets/images/bluespot.png" alt="" class="point-img"></span>
                    <span class="describe">{{item.describe}}</span>    
                </Col>
            </Row>
            <div class="nextTo">
                <input type="button"  value="测算" @click="calculationTo" class="calculation">
                <input type="button"  value="立即申请" @click="applicationTo" class="application">
            </div> 
        </div>

        <div class="loanRow" v-show="!isShowTrainingHome">
            <div class="headerRow" >
                <div class="icon-left trainingHome"></div>
                <div class="name-box">
                    <div class="project-text">培训费</div>
                    <div class="introduce-text" >{{Tuition}}</div> 
                </div>
                <div class="icon-right">
                  <Icon @click="isShowTrainingHome=!isShowTrainingHome"  type="md-arrow-dropdown" v-show="!isShowTrainingHome"/>
                </div>
            </div>
        </div>
        <div class="down-box"  v-show="isShowTrainingHome">
            <div class="head">
                <i><img src="../../assets/images/zhuzhuang2x.png" alt="" class="img-left"></i>
                <span class="Title">培训费</span>
                <span>({{Train}})</span>
                <Icon type="md-arrow-dropup" @click="isShowTrainingHome=!isShowTrainingHome" class="icon-up-btn"/>
            </div>
            <div class="Characteristic">申请条件及特点</div>
            <Row class="info-box" >
                <Col span="12" v-for='(item,index) in dataList' :key='"c"+index' class='face'>
                    <span class="img"><img src="../../assets/images/bluespot.png" alt="" class="point-img"></span>
                    <span class="describe">{{item.describe}}</span>
                </Col>
                <Col span="12" class='face'  v-for='(item,index) in CharacteristicList1' :key='"c1"+index'> 
                    <span class="img"><img src="../../assets/images/bluespot.png" alt="" class="point-img"></span>
                    <span class="describe">{{item.describe}}</span>    
                </Col>
            </Row>
            <div class="nextTo">
                <input type="button"  value="测算" @click="calculationTo" class="calculation">
                <input type="button"  value="立即申请" @click="applicationTo" class="application">
            </div> 
        </div>
        
        <div class="loanRow" v-show="!isShowGiftHome">
            <div class="headerRow" >
                <div class="icon-left giftHome"></div>
                <div class="name-box">
                    <div class="project-text">商品分期</div>
                    <div class="introduce-text" >{{Tuition}}</div> 
                </div>
                <div class="icon-right">
                  <Icon @click="isShowGiftHome=!isShowGiftHome"  type="md-arrow-dropdown" v-show="!isShowGiftHome"/>
                </div>
            </div>
        </div>
        <div class="down-box"  v-show="isShowGiftHome">
            <div class="head">
                <i><img src="../../assets/images/zhuzhuang2x.png" alt="" class="img-left"></i>
                <span class="Title">商品分S期</span>
                <span>({{CommodityStaging}})</span>
                <Icon type="md-arrow-dropup" @click="isShowGiftHome=!isShowGiftHome" class="icon-up-btn"/>
            </div>
            <div class="Characteristic">申请条件及特点</div>
            <Row class="info-box"  >
                <Col span="12" v-for='(item,index) in dataList' :key='"d"+index' class='face'>
                    <span class="img"><img src="../../assets/images/bluespot.png" alt="" class="point-img"></span>
                    <span class="describe">{{item.describe}}</span>
                </Col>
                <Col span="12" class='face'  v-for='(item,index) in dataList' :key='"d1"+index'> 
                    <span class="img"><i><img src="../../assets/images/bluespot.png" alt="" class="point-img"></i></span>
                    <span class="describe">{{item.describe}}</span>    
                </Col>
            </Row>
            <div class="nextTo">
                <input type="button"  value="测算" @click="calculationTo" class="calculation">
                <input type="button"  value="立即申请" @click="applicationTo" class="application">
            </div> 
        </div>   
    </div> 
</template>
<script>
    export default{
        data(){
            return{
                dataList1:"",
                CharacteristicList1:"",
                describe:"",
                isShowBuldingHome: false,
                isShowLockHome: false,
                isShowFoodHome: false,
                isShowTrainingHome: false,
                isShowGiftHome: false,  
                value1: '1',
                Tuition:"剩余额度15000元/学年",
                VentureCapital:"剩余额度5000元/在校期",
                LivingExpenses:"剩余额度5200元/学年",
                Train:"剩余额度20000元/学年",
                CommodityStaging:"剩余额度6000元/两学年",
                dataList:[
                    {
                        imageSrc:"../../assets/images/bluespot.png",
                        describe:"在校大学生(18-28周岁）"
                    },
                    {
                        imageSrc:"../../assets/images/bluespot.png",
                        describe:"发放至学校账户"
                    },
                     {
                        imgSrc:"../../assets/images/bluespot.png",
                        describe:"最高可承保额15000元/学年"
                    },
                     {
                        imageSrc:"../../assets/images/bluespot.png",
                        describe:"每学年可申请一笔"
                    },    
                ],
            }
        },
        methods:{
            calculationTo(){

            },
        applicationTo(){

        }
       }
     }
</script>
<style>
/* 页面订单知识部分 */
.Information-bar{
	font-family: PingFangSC-Medium;
	font-size: 15px;
	line-height: 15px;
	letter-spacing: 0px;
	color: #ffffff;
    width: 375px;
	height: 20px;
  padding: 0 10px;
	/* background-color: #2487ff; */
}
.container{
    background-color: #f4f4f4;
    top: 0;
    background-image: url("../../assets/images/headerBack.png");
    background-size: 100% 200px;
    background-repeat: no-repeat;
}
.header-title {
    font-size: 18px;
    color: #fff;
    text-align: center;
    height: 60px;
    line-height: 60px;
}
.head .icon-up-btn {
    position: absolute;
    top: 10px;
    right: 10px;
}
/* 页面上左图标 */
.left-img{
    width: 34px;
    /* float: left; */
    /* margin-left:10px; */
}
/* 每种费用类型 */
.headerRow{
    width: 355px;
    overflow:hidden ;
    background-color: #ffffff;
	  border-radius: 5px;
    vertical-align: middle;
    margin:10px;
    height: 58px;   
    /* line-height: 58px;   */
    padding: 12px 10px;
}
.Headline{
    vertical-align: middle;
    margin-left:10px;
}
.Headline>div {
  display: inline-block;
  vertical-align: top;
}
/* 下拉框头部宽高 */
.head{
    width: 355px;
	  height: 35px;
    border-bottom: 1px solid gainsboro;
    line-height: 35px;
    position: relative;
}
.project{
	font-family: PingFangSC-Semibold;
	font-size: 16px;
	line-height: 15px;
	letter-spacing: 0px;
	color: #333333;
  font-weight: bold;
    text-align: left;
    margin-left: 10px;
}
.introduce{
    text-align: left;
    margin-left: 10px;
}
.detailBtn{
    /* height: 2rem; */
    /* float: right; */
}
.ivu-icon {
    display: inline-block;
    font-family: Ionicons;
    speak: none;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    text-rendering: auto;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    vertical-align: middle;
    margin-right:10px;
    position: absolute;
    right: 20px;
    top:10px;
}
.face{
    height: 30px;
    float: right;
}
/* 下拉框里左边一小竖杠 */
.img-left{
    width: 3.5px;
	height: 13px;
    margin-left: 10px;
} 
/* .下拉框标题 */
.Title{
	font-family: PingFangSC-Semibold;
	font-size: 16px;
	line-height: 15px;
	letter-spacing: 0px;
	color: #333333;
}
.Characteristic,.point-img{
    margin-left: 10px;
    
}
.Characteristic{
	height: 30px;
	font-family: PingFangSC-Regular;
	font-size: 14px;;
	line-height: 30px;
	letter-spacing: -0.3px;
	color: #333333;
}
.point-img{
    width: 9px;
	height: 9px;
}
.down-box{
    width: 355px;
	min-height: 172px;
	background-color: #ffffff;
	box-shadow: 0px 1.5px 10px 0px 
	rgba(153, 153, 153, 0.2);
	border-radius: 5px;
    margin-left: 10px;
    margin-bottom: 10px;
}
.calculation{
  width: 85px;
	height: 31.5px;
	border-radius: 15.8px;
	border: solid 1.5px #2487ff;
	font-family: PingFangSC-Semibold;
	font-size: 13px;
	line-height: 18px;
	color: #2487ff;
  background: #fff;
  margin-right: 20px;
   
}
.application{
    width: 85px;
	height: 31.5px;
	background-color: #2487ff;
	border-radius: 15.8px;
    border:none;
	font-family: PingFangSC-Semibold;
	font-size: 13px;
	line-height: 18px;
	color: #ffffff;
  margin-left: 20px;
    
}
.btn-group{
    
    overflow: hidden;
    margin: 0px 60px 0px 60px;
}
.headerRow>div {
  display: inline-block;
  vertical-align: top;
  height: 34px;
}
.icon-left {
  height: 34px;
  width: 34px;
  margin-right: 10px;
}
.buldingHome {
  background-image: url("../../assets/images/buildingHome.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.lockHome {
  background-image: url("../../assets/images/lockHome.png");
  background-size: 100%;
  background-repeat: no-repeat;
} 
.foodHome {
  background-image: url("../../assets/images/foodHome.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.trainingHome { 
  background-image: url("../../assets/images/trainingHome.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.giftHome {
  background-image: url("../../assets/images/giftHome.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.name-box {
  position: relative;
  width: 200px;
}
.name-box div {
  /* position: absolute; */
  height: 17px;
}
.project-text {
  font-weight: bold;
  font-size: 14px;
  color: #333333;
}
.icon-right {
  position: absolute;
  right: 0px;
  width: 12px;
  height: 12px;
}
.nextTo {
  text-align: center;
}
</style>
