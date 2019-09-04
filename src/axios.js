/**
 * Created by cong on 2018/5/6.
 */
import axios from "axios";
import qs from "qs";
import Vue from "vue";

let token = null;
//发送请求前的拦截器
axios.interceptors.request.use(
  config => {
   // console.log(config)
    // config.data = qs.stringify(config.data); //qs处理
    // if (token) {
    //   config.headers["token"] = token;
    // }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
const root=process.env.API_ROOT;
// axios.defaults.headers['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.timeout = 8000;
axios.defaults.baseURL = root;

//发送请求后的拦截器
axios.interceptors.response.use(
  response => {
    //对返回的数据进行一些处理
    return response.data;
  },
  function(error) {
    //对返回的错误进行一些处理
    return Promise.reject(error);
  }
);

//全局混入封装axios
Vue.mixin({
  methods: {
    $axios(url, parems, flag) {
      token = JSON.parse(localStorage.getItem("token"));
      setTimeout(() => {
        if (!flag) {
          this.$indicator.open("加载中...");
          flag = false;
        }
      }, 0);
      return new Promise(resolve => {
        this.$http
          .post(url, parems)
          .then(data => {
            setTimeout(() => {
              this.$indicator.close();
            }, 0);
            if (data.errcode >= 0) {
              resolve(data);
            } else {
              this.$toast(data.errmsg);
              if(data.errmsg.includes('登录超时')){
                let that=this
                setTimeout(function () {
                  that.$router.push('/xwapp/login')
                },2300)
              }
            }
            data.url = url;
          })
          .catch(error => {
            setTimeout(() => {
              this.$indicator.close();
            }, 0);
            this.toast("数据加载失败，请稍后重试~");
         //   this.$router.push('/xwapp/index')
          });
      });
    }
  }
});

Vue.prototype.$http = axios;

export default axios;
