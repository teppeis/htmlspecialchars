// Karma configuration
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/node-assert/assert.js',
      'index.js',
      'test/test.js'
    ],

    // list of files to exclude
    exclude: [
      'test/**/*.powered.js',
      'test/require-main.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    browserStack: {
      project: 'htmlspecialchars',
      name: 'karma.browserstack.conf.js'
    },

    // define browsers
    customLaunchers: {
      bs_ie11_win81: {
        base: 'BrowserStack',
        browser: 'ie',
        browser_version: '11',
        os: 'Windows',
        os_version: '8.1'
      },
      bs_ie10_win8: {
        base: 'BrowserStack',
        browser: 'ie',
        browser_version: '10',
        os: 'Windows',
        os_version: '8'
      },
      bs_ie9_win7: {
        base: 'BrowserStack',
        browser: 'ie',
        browser_version: '9',
        os: 'Windows',
        os_version: '7'
      },
      bs_ie8_win7: {
        base: 'BrowserStack',
        browser: 'ie',
        browser_version: '8',
        os: 'Windows',
        os_version: '7'
      },
      bs_chrome_win81: {
        base: 'BrowserStack',
        browser: 'chrome',
        browser_version: '38',
        os: 'Windows',
        os_version: '8.1'
      },
      bs_firefox_win81: {
        base: 'BrowserStack',
        browser: 'firefox',
        browser_version: '33',
        os: 'Windows',
        os_version: '8.1'
      },
      bs_safari8_mac_yosemite: {
        base: 'BrowserStack',
        browser: 'safari',
        browser_version: '8',
        os: 'OS X',
        os_version: 'Yosemite'
      },
      bs_safari7_mac_mavericks: {
        base: 'BrowserStack',
        browser: 'safari',
        browser_version: '7',
        os: 'OS X',
        os_version: 'Mavericks'
      },
      bs_iphone5s: {
        base: 'BrowserStack',
        device: 'iPhone 5S',
        browser: 'Mobile Safari',
        os: 'ios',
        os_version: '7.0'
      },
      bs_android5: {
        base: 'BrowserStack',
        device: 'Google Nexus 5',
        browser: 'Android Browser',
        browser_version: null,
        os: 'android',
        os_version: '5.0'
      }
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'bs_ie11_win81',
      'bs_ie8_win7',
      'bs_chrome_win81',
      'bs_firefox_win81',
      'bs_safari8_mac_yosemite',
      'bs_safari7_mac_mavericks',
      // 'bs_iphone5s',
      // 'bs_android5',
      'PhantomJS'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
