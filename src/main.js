import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(createStore(store)).use(router).mount('#app')
