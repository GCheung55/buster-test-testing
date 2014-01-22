var config = module.exports

config['Browser Tests'] = {
	rootPath: '../',
	environment: 'browser',
	tests: [
		'test/**/*-test.js'
	]
}

config['Node Tests'] = {
	rootPath: '../',
	environment: 'node',
	tests: [
		'test/**/*-test.js'
	]
}