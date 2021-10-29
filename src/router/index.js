import { createRouter, createWebHistory } from 'vue-router'
import Leaders from '../views/Leaders.vue'
import Rewards from '../views/Rewards.vue'
import Counter from '../views/Counter.vue'

const routes = [
  {
    path: '/',
    name: 'Leaders',
    component: Leaders
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: Rewards
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
