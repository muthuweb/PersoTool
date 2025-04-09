import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView.vue'
import { useAuthStore } from '@/stores/auth'
import { useMainStore } from '@/stores'
import developmentRoutes from './devRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: UsersView,
      meta: {
        icon: 'mdi-account-supervisor',
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: 'User Login'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotFound.vue'),
      meta: {
        title: 'Page Not found!'
      }
    },
    ...developmentRoutes
  ]
})

router.beforeEach(async (to, _, next) => {
  const auth = useAuthStore()
  const isLoggedIn = auth.isLoggedIn

  // Keycloak returns a long as path everytime, so we need to filter them out.
  if (to.fullPath !== to.path) {
    return next({ path: to.path })
  }

  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'] //The array of routes not require authentication

  // Check if the route is the NotFound page
  const isNotFoundPage = to.matched.some((record) => record.name === 'NotFound')

  // const authRequired = !publicPages.includes(to.path)
  const authRequired = !publicPages.includes(to.path) && !isNotFoundPage

  if (authRequired && !isLoggedIn) {
    //Save the intended URL so the user can be redirected back after login
    // auth.returnUrl = to.fullPath
    //Redirect to login
    return next('/login')
  }

  // Redirect logged-in users away from the login page
  if (to.path === '/login' && isLoggedIn) {
    return next('/')
  }

  // Role-based access control
  if (isLoggedIn) {
    const userRoles = auth.user.roles || []
    const requiredRoles = to.meta.roles || []

    if (requiredRoles.length > 0) {
      const hasRole = requiredRoles.some((role) => userRoles.includes(role))
      if (!hasRole) {
        useMainStore().addMessage({ messageKey: 'responseMessages.error.unauthorized' })
        return next({ path: '/' }) // Or redirect to a '403 Forbidden' page
      }
    }
  }

  document.title = to.meta.title || import.meta.env.VITE_TITLE || 'Perso Tool'

  next()
})

export default router
