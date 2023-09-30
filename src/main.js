import { createApp } from 'vue'
import App from './App.vue'
import store from './Store';
import router from './routes'
import './assets/style.css'
import './firebase'
// import dotenv from 'dotenv'

// // Load environment variables from .env
// dotenv.config()

/* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* import specific icons */
// import { faMobileScreenButton, faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
// import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

// library.add(faUserSecret,faMobileScreenButton) //solid
// library.add(faGithub,faYoutube) //brands
// library.add(faEnvelope) //regular

const app = createApp(App)
  
app.use(store)
app.use(router)
//app.use(FontAwesomeIcon)
app.mount('#app')