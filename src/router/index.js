import { createRouter, createWebHistory } from 'vue-router'

import { useUserStore } from '@/stores/user'


const requireAuth = async(to, from, next)=>{
  const userStore = useUserStore()
  userStore.loadingSession = true
  const user = await userStore.currentUser()
  if(user){
    next()
  }
  else{
    next('/login')
  }
  userStore.loadingSession = false
}



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/',
      name: 'home',
      beforeEnter: requireAuth,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue'),
    },
      
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'error',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ErrorView.vue'),
    },
  ],
})

export default router
