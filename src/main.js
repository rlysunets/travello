import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Progress from "vue3-progress";

const options = {
  position: "fixed",
  height: "80px",
  color: "linear-gradient(90deg, rgba(0,0,0, .1) 0%, rgba(9,9,121,.1) 35%, rgba(0,212,255,.1) 100%)",
};

import "@/assets/css/_reset.scss"
import "@/assets/css/fonts.scss"
import "@/assets/css/main.scss"

createApp(App).use(Vue3Progress, options).use(router).mount('#app')
