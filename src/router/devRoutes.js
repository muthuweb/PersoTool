// Define routes that are specific to the development environment
// These routes are conditionally included based on the environment mode

const isDevelopment = import.meta.env.MODE === 'development'
const developmentRoutes = isDevelopment
  ? [
      {
        path: '/design',
        name: 'design',
        component: () => import('../views/DesignView.vue')
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('../views/TestView.vue')
      }
    ]
  : []

export default developmentRoutes
