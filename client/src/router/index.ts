import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Login from "@/pages/LoginPage.vue"
import Employees from "@/pages/EmployeePage.vue"
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/employees",
    component: Employees
  }
]
export default createRouter({
  history: createWebHistory(),
  routes
})
