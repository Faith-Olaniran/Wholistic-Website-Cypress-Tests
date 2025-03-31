const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://wholistic.work',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
