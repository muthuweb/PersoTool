import { defineAsyncComponent } from 'vue'

export function registerGlobalComponents(app, components) {
  Object.entries(components).forEach(([path, module]) => {
    // Determine if the module has a default export, otherwise use the module itself
    const componentModule = module.default || module

    // Check if the path indicates a lazy-loaded component in the '/lazy/' directory
    const isLazy = path.includes('/lazy/')

    // Extract the component name from the path (e.g., 'MyComponent.vue' -> 'MyComponent')
    const componentName = path
      .split('/')
      .pop()
      .replace(/\.\w+$/, '') // Remove the file extension to get the component name

    // If the component is lazy-loaded, wrap it with defineAsyncComponent; otherwise, use it directly
    const component = isLazy ? defineAsyncComponent(componentModule) : componentModule

    // Register the component globally with Vue
    app.component(componentName, component)
  })
}
