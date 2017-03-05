const HtmlWebpackPlugin = require("html-webpack-plugin");
const PATH = require("path");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/../app/pages/index.html`,
	filename: "index.html",
	inject: "body"
});

const CONFIG = {
	context: PATH.resolve(__dirname, "../app"),

	entry: {
		bundles: [PATH.resolve(__dirname, "../app/scripts/index.jsx")]
	},

	output: {
		path: `${__dirname}/dist`,
		filename: "js/[name].js"
	},

	resolve: {
		extensions: ["", ".js", ".jsx", ".sass"]
	},

	module: {
		loaders: [
			{
				// jsx 加載器，處理 jsx 置換
				test: /\.jsx?$/,
				include: PATH.resolve(__dirname, "../app/scripts"),
				exclude: /(node_modules)/,
				loader: "babel"
			}
		]
	},

	plugins: [HtmlWebpackPluginConfig],

	devServer: {
		contentBase: "./dist/index.html",
		inline: true,
		port: 7777
	}
};

module.exports = CONFIG;