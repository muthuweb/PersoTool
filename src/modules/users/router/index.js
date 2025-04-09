import { createRouter, createWebHistory } from 'vue-router'
import UsersModule from '../UsersModule.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users-module',
      meta: {
        icon: 'mdi-account-plus'
      },
      component: UsersModule,
      children: [
        {
          path: '/users',
          name: 'Users',
          component: () => import('../views/UsersView.vue')
        }
      ]
    }
  ]
})

export default router
