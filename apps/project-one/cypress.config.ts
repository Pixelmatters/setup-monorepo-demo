import { defineConfig } from 'cypress'
import pluginConfig from './cypress/plugins/index'

export default defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return pluginConfig(on, config)
    },
    baseUrl: 'http://127.0.0.1:5173',
  },
})
