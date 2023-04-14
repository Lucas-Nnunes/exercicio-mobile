const {join} = require('path')

exports.config = {
    Host: 'localhost',
    port: 4723,
    path: '/wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "appActivity": ".MainActivity",
        "app": join(process.cwd(), './app/android/Android-test.apk')
        
    }],
    waitforTimeout: 20000,
    mochaOpts: {
        timeout: 20000
    },


}