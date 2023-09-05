import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import PrefecturePopulation from "@/pages/PrefecturePopulation.vue"
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: PrefecturePopulation
  }
  // TODO: もう1ページ, ExcludePrefectureListを追加してください
]
export default createRouter({
  history: createWebHistory(),
  routes
})
