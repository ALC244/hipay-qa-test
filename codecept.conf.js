const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'tests/**/*.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://hipay.com',
      show: true,
      waitForNavigation: 'networkidle',
      timeout: 10000
    }
  },
  include: {
    I: './steps_file.js',
    contactPage: './pages/contactPage.js'
  },
  gherkin: {
    features: './tests/*.feature',
    steps: ['./tests/contactSteps.js']
  },
  plugins: {
    htmlReporter: {
      enabled: true
    }
  },
  name: 'hipay-qa-test'
}