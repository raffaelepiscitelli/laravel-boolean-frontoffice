import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/index.umd'
import '@/assets/scss/app.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
