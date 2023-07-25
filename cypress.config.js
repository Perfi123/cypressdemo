const { defineConfig } = require('cypress')
const fastcsv =  require('fast-csv')

// module.exports = defineConfig({
// screenshotsFolder: 'cypress/results/screenshot',
// reporter:"mochawesome",
// reporterOptions: {
//   reportDir: "cypress/results",
//   overwrite: false,
//   html: false,
//   json: true
// },

// });


module.exports = defineConfig({e2e: {
  setupNodeEvents(on, config) {
    on('task', {
      readFromCsv() {
        return new Promise(resolve => {
          let dataArray = [];
          csv.parseFile("C:\Users\pooja.kawale\Downloads\Cypress-POM\cypress\fixtures\mycsv.csv",{headers: true})
          .on('data',(data) => {
            dataArray.push(data);
          })
          .on('end',()=>{
            resolve(dataArray)
          })
        });

      }

    })

  }

}
})

module.exports = {
  watchForFileChanges: false,
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotsFolder: 'cypress/results/screenshot',
  reporter:"mochawesome",
  reporterOptions: {
     reportDir: "cypress/results",
     overwrite: true,
     html: false,
     json: true
  },
  chromeWebSecurity: false,
  firefoxGcInterval: {
    runMode: null,
    openMode: null,
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  execTimout: 60000,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  requestTimeout: 10000,
  responseTimeout: 30000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    }
  }
}