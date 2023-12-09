import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import service from "./lib/axios";
import echarts from "./lib/echarts";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.prototype.$axios = service;
Vue.prototype.$echarts = echarts;

import "./assets/main.css";
import "normalize.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
