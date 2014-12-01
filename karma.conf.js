// Karma configuration
module.exports = function(config) {
    var customLaunchers = {
        sl_ie8: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 7',
            version: '8'
        },
        sl_ie9: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 7',
            version: '9'
        },
        sl_ie10: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 8',
            version: '10'
        },
        sl_ie11: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 8.1',
            version: '11'
        },
        sl_chrome: {
            base: 'SauceLabs',
            browserName: 'chrome',
            platform: 'Windows 8.1',
            version: '39'
        },
        sl_firefox: {
            base: 'SauceLabs',
            browserName: 'firefox',
            platform: 'Windows 8.1',
            version: ''
        },
        sl_mac_safari8: {
            base: 'SauceLabs',
            browserName: 'safari',
            version: '8'
        },
        sl_mac_safari7: {
            base: 'SauceLabs',
            browserName: 'safari',
            version: '7'
        },
        sl_ios_safari81: {
            base: 'SauceLabs',
            browserName: 'iphone',
            version: '8.1'
        },
        sl_ios_safari80: {
            base: 'SauceLabs',
            browserName: 'iphone',
            version: '8.0'
        },
        sl_ios_safari71: {
            base: 'SauceLabs',
            browserName: 'iphone',
            version: '7.1'
        },
        sl_ios_safari70: {
            base: 'SauceLabs',
            browserName: 'iphone',
            version: '7.0'
        },
        sl_android44: {
            base: 'SauceLabs',
            browserName: 'android',
            version: '4.4',
            deviceName: 'Samsung Galaxy S4 Emulator'
        }
    };

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
    reporters: ['dots', 'saucelabs'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    sauceLabs: {
        testName: 'htmlspecialchars'
    },
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),

    // Timeout for capturing a browser (in ms).
    // Default: 60000
    captureTimeout: 5 * 60 * 1000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
