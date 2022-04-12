import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/index.scss'
import { AuthService, AuthServiceToken } from '@/libs/api/auth'

createApp(App)
  .provide(AuthServiceToken, AuthService)
  .use(store).use(router).mount('#app')
