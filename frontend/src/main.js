/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import store from './Store/index';
import router from './routes'
import VueSweetalert2 from 'vue-sweetalert2'
import './assets/style.css'
import './firebase'

const app = createApp(App)
  
app.use(VueSweetalert2)
app.use(store)
app.use(router)
app.mount('#app')