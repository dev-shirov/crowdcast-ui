import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Inquiry from '../views/Inquiry.vue'
import Forecast from '../views/Map.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inquiry',
    name: 'Inquiry',
    component: Inquiry
  },
  {
    path: '/forecast',
    name: 'Forecast',
    component: Forecast
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router