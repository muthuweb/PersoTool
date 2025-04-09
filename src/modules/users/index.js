import router from './router'
import { useUsersStore } from './stores'

export default {
  install(app) {
    const { $router } = app.config.globalProperties

    const usersModuleStore = {
      users: useUsersStore()
    }
    app.config.globalProperties.$usersModuleStore = usersModuleStore

    // Add routes globally
    router.options.routes.forEach((route) => {
      $router.addRoute(route)
    })
  }
}
