import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import TestApp from './TestApp.vue'
//import router from './router'
import './assets/index.css'

import BookApp from './BookApp.vue'

const app = createApp(App)

//
app.use(createPinia())
//app.use(router)

//app.mount('#app')

/*
const testApp = createApp(TestApp)

testApp.mount('#testApp')
*/
const bookApp = createApp(BookApp)

bookApp.mount('#bookApp')