// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const ciConfig = process.argv[4] === 'ci' ?
  {browser: 'ChromeHeadless', autoWatch: false, singleRun: true} :
  {browser: 'Chrome', autoWatch: true, singleRun: false};

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: ciConfig.autoWatch,//true
    browsers: [ciConfig.browser],
    singleRun: ciConfig.singleRun//false
  });
};
