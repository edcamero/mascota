import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Fundacion from '../views/Fundacion.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },

  {
    path: '/fundacion',
    name: 'Fundacion',
    component: Fundacion
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
