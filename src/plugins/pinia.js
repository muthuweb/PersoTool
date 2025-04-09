import { createPinia } from 'pinia'
import persistedState from 'pinia-plugin-persistedstate'
import router from '@/router'

// Stores
import { useMainStore } from '@/stores'
import { useAuthStore } from '@/stores/auth'

// Create Pinia instance
const pinia = createPinia()
pinia.use(persistedState)

export default {
  install: (app) => {
    app.use(pinia)

    // Register the store globally
    app.config.globalProperties.$store = useMainStore()
    app.config.globalProperties.$auth = useAuthStore()
    app.config.globalProperties.$router = router
  }
}
