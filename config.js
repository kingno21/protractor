exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['index_spec.js'],
	multiCapabilities: [
		{
			'browserName': 'firefox',
			'moz:firefoxOptions': {
				args: [ "--headless" ]
			}
		}
	]
}
