const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'a5zbka',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://rahulshettyacademy.com',
    specPattern: 'cypress/e2e/**/*.js',
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 30000,
    video: false,
    screenshotOnRunFailure: true,
  },
  env: {
    url: 'https://rahulshettyacademy.com'
  }
});
