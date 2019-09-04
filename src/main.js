// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
// import 'mint-ui/lib/style.css'
import 'lib-flexible/flexible.js'
//import '@/axios'//ajax请求配置
import '@/libs/filter'
import store from './vuex/store'
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
import App from './App'
import fetch from './config/api'
import commonMethods from './config/config'
Vue.use(iView);


// import {
//   Loadmore,
//   MessageBox,
//   Toast,
//   Indicator,
//   InfiniteScroll,
//   Actionsheet,
//   Picker,
//   Checklist,
//   DatetimePicker
// } from 'mint-ui'
import pinyin from 'js-pinyin'
import echarts from 'echarts' // 引入echarts
import 'babel-polyfill'
import Es6Promise from 'es6-promise'

require('es6-promise').polyfill()
Es6Promise.polyfill()
// 引入mui-ui
// Vue.use(mui)

//引入Mint-UI
// Vue.prototype.$message = MessageBox;
// Vue.prototype.$toast = Toast;
// Vue.prototype.$indicator = Indicator;
// Vue.use(InfiniteScroll);
// Vue.component(Actionsheet.name, Actionsheet);
// Vue.component(Picker.name, Picker);
// Vue.component(DatetimePicker.name, DatetimePicker);
// Vue.component(Checklist.name, Checklist);
// Vue.component(Loadmore.name, Loadmore);
Vue.prototype.$echarts = echarts
Vue.prototype.$ajaxs = fetch
Vue.prototype.$commonMethods=commonMethods
Vue.use(scroll)

Vue.prototype.Global = {

}

//全局混入方法
Vue.mixin({
  methods: {
    /**
     * 提示
     * @param value - 传入文本
     * @param position - 弹框位置
     * @param time - 显示时间，默认1.5秒
     * @param callback 时间结束后的回调
     */
    toast(value, position, time, callback) {//封装mintUiToast
      this.$toast({
        message: value,
        position: position ? position : 'middle',
        duration: time ? time : 1500
      });
      // 等待时间后执行回调
      if (callback) {
        callback()
      }
    },

    // 清除数组
    clearArrayData(list) {
      return list.splice(0, list.length);
    },

    // 重置页面数据（不刷新） 需要传递指针
    resetData(that) {
      Object.assign(that.$data, that.$options.data())
    },

  }
});
/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
Vue.Cancel = [];
router.beforeEach((to, from, next) => {
  while (Vue.Cancel.length > 0) {
    Vue.Cancel.shift()('cancel');
  }
  next(); //如果匹配到正确跳转
});

