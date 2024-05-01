import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './assets/index.css'
import BookApp from './BookApp.vue'


const bookApp = createApp(BookApp)
bookApp.use(createPinia())
bookApp.use(router)
bookApp.mount('#bookApp')