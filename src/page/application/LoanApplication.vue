<template>
 <div  class="container">
   
        <div class="middle" style="width:100%;">
         <div class="status">
      <div class="status_line clearfix">
        <div class="line"></div>
        <div class="statusflex status_x">
          <span :class="{ 'on': isA}"></span>
        </div>
        <div class="statusflex status_t" ref="twoNav">
           <span :class="{'on': isB}"></span>
        </div>
        <div class="statusflex status_b">
           <span :class="{'on': isC}"></span>
        </div>
        <div class="statusflex status_h">
           <span :class="{'on': isD}"></span>
        </div>
        <div class="statusflex status_f">
          <span :class="{'on': isE}"></span>
        </div>
    </div>
      <div class="status_name clearfix">
        <div class="statusflex status_x">
          <p>就读高校</p>
        </div>
        <div class="statusflex">
          <p>个人信息</p>
        </div>
        <div class="statusflex">
          <p>联系人信息</p>
        </div>
        <div class="statusflex">
          <p>贷款信息</p>
        </div>
        <div class="statusflex status_f">
          <p>上传影像</p>
        </div>
      </div>
      </div>
    </div> 
    <div class="box-one"></div>
    
    <div class="content">
      <div style="font-size:16px; text-align: left;margin-left:16px; height:50px"><b>货代信息</b></div>
    <div class="purpose">
      <span class='leftOne' >借款用途</span>
       <span class='rightOne' >{{111}}元</span>
    </div>
  <div class="good-size">
      <span class='leftTwo'>商品型号</span>
       <span class='rightTwo' >{{222}}元</span>
  </div>
  <div class='good-amount'>
      <span class='leftThree'>商品金额</span>
       <span class='right-Three' >{{333}}元</span>
  </div>
  <div class='Choice'>
      <span class='leftFour'>是否代扣保费</span>
       <RadioGroup v-model="radio">
        <Radio label="是">
            <span>是</span>
        </Radio>
        <Radio label="否">
            <span>否</span>
        </Radio>
    </RadioGroup> 
       <span class='rightFour' >{{444}}元</span>
  </div>
    <div class='premium'>
      <span class='leftFive'>保费</span>
       <span class='rightFive' >{{555}}元</span>
  </div> 
  <div class='Loan-amount'>
      <span class='leftSix'>借款金额1</span>
       <span class='rightSix' >{{666}}元</span>
  </div>    
  <div class="box-two"></div>
   <div class="content">
     <div style="font-size:16px; text-align: left;margin-left:16px; height:50px" ><b>银行卡信息</b></div>
    
    <div class='Loan-amount'>
      <span class='leftSix'>放款银行</span>
       <span class='rightSix' >{{99999}}元</span> 
     </div>
       <div class="add-car">
         <img src="../../assets/images/添加银行卡@2x.png" alt="" class="add-bank-car" @click="showActionSheet()">
       </div >
       <div style="text-align: right; margin-right:10px">
         <span style="color:red;text-align:right;">注：请提供本人名下借记卡</span>
       </div>
       
       <input type="hidden" id="picIndex" value="0">
        <div id='image-list' class="row image-list">
                	<!-- <input id="upload_image" type="file" name="image" accept="image/*" /> -->
        <div class="image-item space" onclick="showActionSheet()">
        <div class="image-up"></div>
        </div>
     </div>
   </div>
    <div class="nextTo">
      <input type="button"  value="下一步" @click="next" class="next-btn">
    </div>
  </div> 
  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
</template>
<script>
export default {
    name:"LoanApplication",
     data(){
    return{
      111:"",
      222:"",
      333:"",
      444:"",
      555:"",
      666:"" ,
      car:'',
      radio:"1"
    }
  },
    props: {
    isA:{
       type: Boolean,
       default: true
       
    },
    isB:{
       type: Boolean,
       default: false
    },
    isC:{
       type: Boolean,
       default: false
    },
    isD:{
       type: Boolean,
       default: false
    },
    isE:{
       type: Boolean,
       default: false
     }
   },
   methods:{
     radio(){

     },
     next(){
       this.$router.push('/enter')

     },
     //图片显示
       showPics(url,name){    	   
    	 //根据路径读取到文件 
           plus.io.resolveLocalFileSystemURL(url,function(entry){
        	   entry.file( function(file){
        		   var fileReader = new plus.io.FileReader();
        		   fileReader.readAsDataURL(file);
                   	   fileReader.onloadend = function(e) {
                	       var picUrl = e.target.result.toString();
                	       var picIndex = $("#picIndex").val();
	               		var nowIndex = parseInt(picIndex)+1;
	               		$("#picIndex").val(nowIndex);
	               		var html = '';
	               		html += '<div class="image-item " id="item'+nowIndex+'">';
	               		html += '<div class="image-close" onclick="delPic('+nowIndex+')">X</div>';
	               		html += '<div><img src="'+picUrl+'" class="upload_img" style="width:100%;height:100%;"/></div>';
	               		html += '</div>';
	               		html += $("#image-list").html();
	               		$("#image-list").html(html); 
                   	}
        	   });
          }); 
       },
     	//压缩图片  
      compressImage(url,filename){  
           var name="_doc/upload/"+filename;
           plus.zip.compressImage({  
                   src:url,//src: (String 类型 )压缩转换原始图片的路径  
                   dst:name,//压缩转换目标图片的路径  
                   quality:40,//quality: (Number 类型 )压缩图片的质量.取值范围为1-100  
                   overwrite:true//overwrite: (Boolean 类型 )覆盖生成新文件  
               },  
               function(zip) {
            	   //页面显示图片
            	   showPics(zip.target,name);
               },function(error) {  
                   plus.nativeUI.toast("压缩图片失败，请稍候再试");  
           });  
       } ,
      
     	//调用手机摄像头并拍照
        getImage() {  
           var cmr = plus.camera.getCamera();  
           cmr.captureImage(function(p) {  
               plus.io.resolveLocalFileSystemURL(p, function(entry) {  
                   compressImage(entry.toLocalURL(),entry.name);  
               }, function(e) {  
                   plus.nativeUI.toast("读取拍照文件错误：" + e.message);  
               });  
           }, function(e) {  
           }, {  
               filter: 'image' 
           });  
       },

       //从相册选择照片
    galleryImgs() {  
    	    plus.gallery.pick(function(e) {  
    	    	var name = e.substr(e.lastIndexOf('/') + 1);
    	       compressImage(e,name);
    	    }, function(e) {  
    	    }, {  
    	        filter: "image"  
    	    });  
    	},
       
       //点击事件，弹出选择摄像头和相册的选项
    	showActionSheet() {  
    	    var bts = [{  
    	        title: "拍照"  
    	    }, {  
    	        title: "从相册选择"  
    	    }];  
    	    plus.nativeUI.actionSheet({  
    	            cancel: "取消",  
    	            buttons: bts  
    	        },  
    	        function(e) {  
    	            if (e.index == 1) {  
    	                getImage();  
    	            } else if (e.index == 2) {  
    	                galleryImgs();  
    	            }  
    	        }  
    	    );  
    	}
   }
}

</script>

<style scoped>
*{padding: 0;margin:0}
/* 主体样式 */
html,body,#app{
width: 100%
}
.container{
  width:375px;
  height: 904px;
}
.content{
  width:100%;
}
.middle{
  height: 64px;
  background: #2487ff;
  font-size: 12px;
  color: #fdfdff;
  text-align: center;
  }
.box-one{
  width: 100%;
  height: 10px;
  background: #f4f4f4;
}
.box-two{
  width: 100%;
  height: 10px;
  background: #f4f4f4;
}
/* 增加银行卡背景 */
.add-car{
  width: 225px;
  height: 152px;
  background-color: #ededed;
  margin: 10px 40px;
  margin: 0 auto;
  text-align: center;
}
/* 增加银行卡按钮 */
.add-bank-car{
  width: 146px;
	height: 96px;
  text-align: center;
  margin-top:34px;
} 
.purpose,.good-size,.good-amount,.Choice,.premium,.Loan-amount{
  height: 50px;
  text-align: center
}
.leftOne,.leftTwo,.leftThree,.leftFour,.leftFive,.leftSix{
  position: absolute;
  left: 16px;
  font-weight:bold;
}
.Bank-card{
  height: 30px;
  position: absolute;
  left: 16px;
  font-weight:bold;
}
.nextTo{
  text-align: center;
}
.next-btn{
  width: 275px;
  height:40px;
  background-color: #2487ff;
  border-radius: 1px;
  font-size: 18px;
	line-height:30px;
	letter-spacing: 1px;
	color: #ffffff;
  border:none;
  margin:0 auto;
}
.status{
  height:26px /* 60/23.4375 */;
  width:98%;
  padding:2px /* 20/23.4375 */ 5% 0px 5%;
  }

.status_line,.status_name{
  text-align: center; 
  position:relative;
 
  }
.line{
  width: 96%;
  height:1px /* 5/23.4375 */;
  border-radius:1px;
  background-color:#ffffff;
  position:absolute;
  z-index:1;
  top:.213333rem /* 5/23.4375 */;
  }
.statusflex{
  width:21%;
  float: left;
  position:relative;
  z-index:2;
  height: 1px /* 15/23.4375 */;
  }
.status_name p{
  font-size:5px /* 12/23.4375 */;
  text-align: center;
  }
.statusflex span{
  display:none;
  background-color:#ffffff;
  border-radius: 100%;
  height:6px/* 15/23.4375 */;
  width:6px /* 15/23.4375 */;
  text-align: center;
  margin:0 auto;
  position:relative
}
.statusflex span:before{
  content:"";
  background: #fff;
  border-radius: 100%;
  display:block;
  width:5px /* 11/23.4375 */;
  height:5px /* 11/23.4375 */;
  position:absolute;
  top:1px /* 2/23.4375 */;
  left:1px/* 2/23.4375 */;
}
.statusflex span:after{
  content:"";
  background: #ffffff;
  border-radius: 100%;
  display:block;
  width:3px /* 7/23.4375 */;
  height:3px /* 7/23.4375 */;
  position:absolute;
  top:2px/* 4/23.4375 */;
  left:2px/* 4/23.4375 */;
}
.status_x{
  width: 16.5%;
}
.status_f{
  width: 16.5%;
}
.status_x span{
  text-align: left;
  margin:0;
}
.status_x p{
  text-align: left;
}
.status_x .jt{
  margin:0
}
.status_f span{
  float: right;
}
.status_f p{
  text-align: right;
}
.status_f .jt{
  float: right;
}
.statusflex .on{
  display:block
}
.status_x p.on{
  color: #ffffff;
}
.statusflex span.on{
  display:block
}
.content{
  width: 375px;
  height:320px;
  background: #ffffff; 
}
.leftOne{
  float: left;
}
.purpose.leftOne{
  float: left;
}
</style>

