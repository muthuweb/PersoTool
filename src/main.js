import './styles/base.scss'

import { createApp } from 'vue'
import App from './App.vue'

import { registerGlobalComponents } from '@/registerGlobalComponents'

// Plugins
import { registerPlugins } from '@/plugins'

// Modules
import { registerModules } from '@/modules'

// Services
import keycloakService from '@/services/keycloak'

const globalComponents = {
  // Register lazy components
  ...import.meta.glob('./components/core/lazy/**/*.vue'),
  // Register immediate components
  ...import.meta.glob('./components/core/immediate/**/*.vue', { eager: true })
}

const initApp = async () => {
  const app = createApp(App)
  registerGlobalComponents(app, globalComponents)
  registerPlugins(app)
  registerModules(app)

  app.mount('#app')
}

keycloakService.init(initApp)
