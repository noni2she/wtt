const Webpack = require("webpack");
const baseWebpackConfig = require("./webpack.config");

baseWebpackConfig.plugins.push(
	// 壓縮 JavaScipt, CSS
	new Webpack.optimize.UglifyJsPlugin({
		compress: {
			sequences: true,
			dead_code: true,
			conditionals: true,
			booleans: true,
			unused: true,
			if_return: true,
			join_vars: true,
			drop_console: true
		},
		mangle: {
			except: ["$super", "$", "exports", "require"]
		},
		output: {
			comments: false
		}
	})
);

console.log(baseWebpackConfig);
module.exports = baseWebpackConfig;

