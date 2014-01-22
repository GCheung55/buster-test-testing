var config = module.exports

var ext = {
    name: 'test-extension',

    create: function(options) {
        console.log('create extension', arguments)
        return Object.create(this)
    },

    configure: function(conf) {
        console.log('configure', arguments)
    }
}

config['Browser Tests'] = {
    rootPath: '../',
    environment: 'browser',
    sources: [
        'test/sources/*.js'
    ],
    resources: [
        'test/resources/*.js'
    ],
    tests: [
        'test/**/*-test.js'
    ],
    extensions: [
        ext
    ]
}

config['Node Tests'] = {
    rootPath: '../',
    environment: 'node',
    sources: [
        'test/sources/*.js'
    ],
    resources: [
        'test/resources/*.js'
    ],
    tests: [
        'test/**/*-test.js'
    ],
    extensions: [
        ext
    ]
}