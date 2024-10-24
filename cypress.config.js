const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// cypress.config.js
module.exports = {
  e2e: {
    specPattern: ['cypress/e2e/**/*.test.js', 'cypress/e2e/**/*.cy.js'], // Customize the path and pattern as needed

  },
};

// module.exports = {
//   e2e: {
//     // specPattern: 'cypress/e2e/**/*.cy.js', // Customize the path and pattern as needed
    
//   },
// };

