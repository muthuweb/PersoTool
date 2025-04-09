// Automatically included in `./src/main.js`

import locations from './locations'
import users from './users'

const modules = [locations, users]

export function registerModules(app) {
  // Dynamically register imported modules
  modules.forEach((module) => app.use(module))
}
