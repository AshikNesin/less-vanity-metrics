const path = require('path');

module.exports = {
	entry: {
		inject:'./extension/src/inject.js',
		background:'./extension/src/background.js',
		content:'./extension/src/content.js',

	},
	output: {
		path: path.resolve(__dirname, 'extension/dist'),
		filename: '[name].bundle.js'
	}
};
