import { createRouter, createWebHistory } from 'vue-router'
import Chatroom from '../views/Chatroom.vue'

const routes = [
  {
    path: '/',
    name: 'Chatroom',
    component:Chatroom
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
