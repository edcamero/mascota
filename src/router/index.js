import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Fundacion from '../views/Fundacion.vue'
import Adoptante from '../views/Adoptante.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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

  {
    path: '/adoptante',
    name: 'Adoptante',
    component: Adoptante,
    meta:{
      requiresAuth: true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(localStorage.getItem('isLogin')==='true'){
      next();
    }else{
      next('/login')
    }
    }else{
      next()
    }
  }
)

export default router
