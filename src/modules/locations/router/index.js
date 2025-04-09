import { createRouter, createWebHistory } from 'vue-router'
import LocationsModule from '../LocationsModule.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/locations-module',
      meta: {
        icon: 'mdi-office-building-outline',
        roles: ['perso-admin']
      },
      component: LocationsModule,
      children: [
        {
          path: '/locations',
          name: 'Locations',
          component: () => import('../views/LocationsView.vue'),
          meta: { roles: [] }
        },
        {
          path: '/countries',
          name: 'Countries',
          component: () => import('../views/CountriesView.vue'),
          meta: { roles: ['perso-admin'] }
        },
        {
          path: '/regions',
          name: 'Regions',
          component: () => import('../views/RegionsView.vue'),
          meta: { roles: [] }
        },
        {
          path: '/houses',
          name: 'Houses',
          component: () => import('../views/HousesView.vue'),
          meta: { roles: [] }
        }
      ]
    }
  ]
})

export default router
