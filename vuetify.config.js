// Set global configuration for @vue/test-utils

import { config } from '@vue/test-utils'
import vuetify from './src/plugins/vuetify'

config.global.plugins = [vuetify]
// config.global.CSS = { supports: () => false };
