import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

//importando framework materialize
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

import 'material-design-icons/iconfont/material-icons.css'


createApp(App).use(router).mount('#app')
