import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth.vue'
import Chatroom from '../views/Chatroom.vue'


const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
