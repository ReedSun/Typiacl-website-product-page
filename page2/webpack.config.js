module.exports = {
	entry: "./js/index.js",
	output: {
		path: __dirname + '/dist/js',
		filename: "merge.js"
	},
	resolve: {
		aligns: {
			jquery: "./node_modules/jquery/dist/jquery.min.js"
		}
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: "style!css" }
		]
	}
}