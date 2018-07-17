exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['index_spec.js'],
	multiCapabilities: [
		{
			'browserName': 'chrome',
			'chromeOptions': {
				args: [ "--headless", "--disable-gpu"]
			}
		}
	]
}
