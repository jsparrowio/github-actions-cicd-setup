import { defineConfig } from 'cypress';
const { GenerateCtrfReport } = require('cypress-ctrf-json-reporter')
import customViteConfig from './vite.config';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
    setupNodeEvents(on, config) {
      new GenerateCtrfReport({
        on,
      })
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      new GenerateCtrfReport({
        on,
      })
    },
  },
});
