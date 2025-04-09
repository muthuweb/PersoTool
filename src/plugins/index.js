// Automatically included in `./src/main.js`

import pinia from './pinia'
import vuetify from './vuetify'
import i18n from './i18n'
import axios from './axios'
import router from '@/router'

const plugins = [pinia, vuetify, i18n, axios]

export function registerPlugins(app) {
  plugins.forEach((plugin) => app.use(plugin))

  app.use(router, { router })
}
