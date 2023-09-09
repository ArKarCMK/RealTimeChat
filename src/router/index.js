import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth.vue'
import Chatroom from '../views/Chatroom.vue'
import { auth } from '@/firebase/config'


const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter(to, form, next) {
      if (auth.currentUser) {
        next();
      } else {
        next({ name: "Auth" })
      }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
