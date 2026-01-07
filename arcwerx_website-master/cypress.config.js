const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotsFolder: 'tests/e2e/screenshots',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    specPattern: 'tests/e2e/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
})
