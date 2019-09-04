/**
 * Created by cong on 2018/5/7.
 */
import Vue from 'vue'


/**
 * 格式化保留小数点后两位
 */
Vue.filter('moneyAddZero',money=>{
  let value=Math.round(parseFloat(money)*100)/100;
let xsd=value.toString().split(".");
if(xsd.length==1){
  value=value.toString()+".00";
  return value;
}
if(xsd.length>1){
  if(xsd[1].length<2){
    value=value.toString()+"0";
  }
  return value;
}
});

/**
 * 隐藏部分数据 仅显示前4位和后4位
 */
Vue.filter('numHide',(value,type)=>{
   let num1=value.substring(0,type);
   let num2=value.substring(value.length-type,value.length);
    return num1+"****"+num2;
});

/**
 * 隐藏部分数据 仅显示前4位和后4位
 */
Vue.filter('dateToWeek',value=>{
  let dateObject = new Date(value);
  let week= dateObject.getDay();
  if(week===0){
    return "周日";
  }
  if(week===1){
   return "周一";
  }
  if(week===2){
    return "周二";
  }
  if(week===3){
    return "周三";
  }
  if(week===4){
    return "周四";
  }
  if(week===5){
    return "周五";
  }
  if(week===6){
    return "周六";
  }
  return  null;
});

/**
 * 拿到创建时间转成已过去几分钟
 */
Vue.filter('formerlyTime',dateStr=>{


    var publishTime = Date.parse(dateStr.replace(/-/gi,"/"))/1000,
      d_seconds,
      d_minutes,
      d_hours,
      d_days,
      timeNow = parseInt(new Date().getTime()/1000),
      d,

      date = new Date(publishTime*1000),
      Y = date.getFullYear(),
      M = date.getMonth() + 1,
      D = date.getDate(),
      H = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds();
    //小于10的在前面补0
    if (M < 10) {
      M = '0' + M;
    }
    if (D < 10) {
      D = '0' + D;
    }
    if (H < 10) {
      H = '0' + H;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s;
    }

    d = timeNow - publishTime;
    d_days = parseInt(d/86400);
    d_hours = parseInt(d/3600);
    d_minutes = parseInt(d/60);
    d_seconds = parseInt(d);

    if(d_days > 0 ){
      return d_days + '天前';
    }else if(d_days <= 0 && d_hours > 0){
      return d_hours + '小时前';
    }else if(d_hours <= 0 && d_minutes > 0){
      return d_minutes + '分钟前';
    }else if (d_seconds < 60) {
      if (d_seconds <= 0) {
        return '刚刚发表';
      }else {
        return d_seconds + '秒前';
      }
    }
});

/**
 * 数据格式化  除以10
 */
Vue.filter('dividedTen',value=>{
  if(value!=null && value>0)
{
  return Number(value)/10
}
return  null;
});

/**
 * 数据为空 显示0
 */
Vue.filter('myZero',value=>{
  if(value!=null && value.length >0 ){
    return value;
}
    return  0;
});
/**
 * 格式化日期
 * @param date
 * @param type
 * @returns {string}
 */
Vue.filter('format',(value,type)=>{
  let date = new Date(value);
  if(value ==null || value.length<=0 ){
    return value;
  }
  let mat={};
  //检查是不是两位数字，不足补全
  function check(str){
    str=str.toString();
    if(str.length<2){
      str='0'+ str;
    }
    return str;
  }
  mat.Ms=date.getMonth()+1;//月份记得加1
  mat.H=date.getHours();
  mat.s=date.getSeconds();
  mat.m=date.getMinutes();
  mat.Y=date.getFullYear();
  mat.D=date.getDate();
  mat.H=check(mat.H);
  mat.M=check(mat.Ms);
  mat.D=check(mat.D);
  mat.s=check(mat.s);
  mat.m=check(mat.m);
  if(type === 2){
    return mat.Y+"-"+mat.M;
  }else if(type === 3){
    return mat.Y+"年 "+mat.Ms+'月';
  }else if(type === 4){
    return mat.Y+"-"+mat.M+"-"+mat.D;
  }else if(type === 5){
    return mat.M+"-"+mat.D+" "+mat.H+":"+mat.m;
  }else if(type === 6){
   return mat.Y+"/"+mat.M+"/"+mat.D;
  }else if(type === 7){
    return mat.Y+"."+mat.M+"."+mat.D;
  }else if(type === 8){
    return mat.M+"."+mat.D;
  }else {
    return mat.Y+"-"+mat.M+"-"+mat.D+" "+mat.H+":"+mat.m;
  }
});

Vue.filter('formatDare',function formatDate1(val) {
  if (val !== null) {
    let year = val.substring(0,4);
    let mon = val.substring(4,6);
    let day = val.substring(6,8);
    let hh = val.substring(8,10);
    let mm = val.substring(10,12);
    let ss = val.substring(12,14);
    return year+"-"+mon+"-"+day+" "+hh+":"+mm+":"+ss;
  }
});
