import router from './router'
import { useLocationsStore } from './stores'
import { registerGlobalComponents } from '@/registerGlobalComponents'

export default {
  install(app) {
    const { $auth, $router } = app.config.globalProperties

    registerGlobalComponents(app, {
      // Register lazy components
      ...import.meta.glob('./components/core/lazy/**/*.vue'),
      // Register immediate components
      ...import.meta.glob('./components/core/immediate/**/*.vue', { eager: true })
    })

    const locationsModuleStore = {
      locations: useLocationsStore()
    }
    app.config.globalProperties.$locationsModuleStore = locationsModuleStore

    // Add routes globally
    router.options.routes.forEach((route) => {
      if (route.meta.roles.includes($auth.currentRole)) {
        $router.addRoute(route)
      }
    })
  }
}
