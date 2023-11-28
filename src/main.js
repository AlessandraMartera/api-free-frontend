import { createApp } from 'vue'
import App from './app.vue'

// import router
import { router } from "./router.js"

createApp(App).use(router).mount('#app')