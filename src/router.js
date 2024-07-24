import { createWebHistory, createRouter } from 'vue-router'
import reg from './pages/auth/reg.vue'
import login from './pages/auth/login.vue'
import test from './pages/main/test.vue'
const routes = [
    { path: "/auth/reg", component: reg },
    { path: "/auth/login", component: login },
    { path: "/test", component: test },
  ]
  
  export default new createRouter({
    mode: history,
    history: createWebHistory(),
    routes
  })