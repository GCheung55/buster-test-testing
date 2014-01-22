(function(){
    var buster = this.buster || (this.buster = require('buster'))

    var assert = buster.assert
    var testCase = buster.testCase

    testCase('Basic Test', {
        'assert': function(){
            assert(true)
        }
    })
})()