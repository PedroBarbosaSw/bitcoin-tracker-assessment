import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ApiClient from './config/axios-config'

ApiClient.init()
const app = createApp(App)

app.use(router)

app.mount('#app')
