import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import axios from "axios";
axios.defaults.baseURL = "https://newsapi.org/v2/";
axios.defaults.headers.common["Authorization"] =
  process.env.VUE_APP_NEWS_API_KEY;

createApp(App).use(router).mount("#app");
