const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const { allureCypress } = require ("allure-cypress/reporter")

module.exports = defineConfig({
  viewportHeight: 800,
  viewportWidth: 1280,
  e2e: {
    specPattern: "cypress/features/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor",cucumber())
      allureCypress(on, config);
      return config;
    },
    env: {
      baseUrl: "https://www.amazon.com.br/",
      loginUser: "scan.teste.2019@gmail.com",
      password: "Scansource2022"
    }
  },
});
