import './assets/main.css'

import { createApp } from 'vue'
import naive from "naive-ui";
import router from './router'
import { createPinia } from 'pinia';
import App from './App.vue'


const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(naive);
app.use(pinia)
app.mount("#app");