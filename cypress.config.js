const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  viewportHeight: 800,
  viewportWidth: 1280,
  e2e: {
    specPattern: "cypress/features/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor",cucumber())
    },
  },
});
