import { createApp } from 'vue'
import './style.css'
import { router } from './router'
import { createPinia } from 'pinia'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
const pinia = createPinia()
const optionsToast = {
    duration: 2000,
    position: 'top',


}

createApp(App).use(router).use(ToastPlugin, optionsToast).use(pinia).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
