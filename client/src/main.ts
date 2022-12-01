import { createApp } from "vue"
import "@/index.css"
import { createPinia } from "pinia"
import App from "@/App.vue"
import router from "@/router"
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount("#app")
