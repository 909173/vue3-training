import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import PrefectureListVue from "@/pages/PrefectureList.vue"
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: PrefectureListVue
  }
]
export default createRouter({
  history: createWebHistory(),
  routes
})
