var path = require('path');

module.exports = {
	entry: './js/main.js',
	output: {
		path: path.join(__dirname, 'js'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: path.join(__dirname, 'es6'),
				loader: 'babel-loader'
			}
		]
	}
};