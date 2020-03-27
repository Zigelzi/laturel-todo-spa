import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "@/assets/scss/style.scss";

Vue.config.productionTip = false;
const axiosBaseUrl = process.env.VUE_APP_AXIOS_ROOT_URL;

axios.defaults.baseURL = `http://${axiosBaseUrl}/api/`;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
