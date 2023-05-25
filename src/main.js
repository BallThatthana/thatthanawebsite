import { createApp } from 'vue'
import App from './App.vue'
import Store from './Store/vuex'
import Router from './routes.js'
import VueSweetalert2 from 'vue-sweetalert2'
import './assets/style.css'
import './firebase'

const app = createApp(App)
app.use(Store)
app.use(Router)
app.use(VueSweetalert2)
app.mount('#app')