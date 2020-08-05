import Vue from "vue";


// 引入初始化样式
import "./assets/css/base.css";
// 插件
// cnpm i swiper -S
import "swiper/css/swiper.min.css";
// 引入elementUi框架
// $cnpm i element-ui -S
// $cnpm install babel-plugin-component -D
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 配置axios
// cnpm i axios -S
import axios from "axios";
// axios.defaults.baseURL = "http://127.0.0.1:3000/"
Vue.prototype.$axios = axios;

// 安装时间模块
// cnpm i moment -S
import moment from "moment";
// 全局过滤器
Vue.filter("dateFormat",function(dateStr){
    return moment(dateStr).format("YYYY-MM-DD hh:mm:ss");
})

import App from "./App.vue";
import router from "./router";
import store from "./store";

// 封装提示成功的弹出框
Vue.prototype.notifySucceed = function (msg) {
  this.$notify({
    title: "成功",
    message: msg,
    type: "success",
    offset: 100
  });
};
// 封装提示失败的弹出框
Vue.prototype.notifyError = function (msg) {
  this.$notify.error({
    title: "错误",
    message: msg,
    offset: 100
  });
};

// 全局拦截器,在进入需要用户权限的页面前校验是否已经登录
router.beforeResolve((to, from, next) => {
  const loginUser = store.state.user.userlist.username;
  // 判断路由是否设置相应校验用户权限
  if (to.meta.requireAuth) {
    if (!loginUser) {
      // 没有登录，显示登录组件
      store.commit("user/setShowLogin", true);
      if (from.name == null) {
        //此时，是在页面没有加载，直接在地址栏输入链接，进入需要登录验证的页面
        next("/");
        return;
      }
      // 终止导航
      next(false);
      return;
    }
  }
  next();
});

//全局组件
import MyMenu from './components/MyMenu';
Vue.component(MyMenu.name, MyMenu);
import MyList from './components/MyList';
Vue.component(MyList.name, MyList);
import MyLogin from './components/MyLogin';
Vue.component(MyLogin.name, MyLogin);
import MyRegister from './components/MyRegister';
Vue.component(MyRegister.name, MyRegister);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
