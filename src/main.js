import { createApp } from 'vue'
import App from './App.vue'
import './assets/normalize.css'
import store from './store'
// import router from './router'

createApp(App)
    .use(store)
    .mount('#app')
