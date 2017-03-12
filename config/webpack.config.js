const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PATH = require("path");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/../app/pages/index.html`,
	filename: "index.html",
	inject: "body"
});

const ExtractTextPluginConfig = new ExtractTextPlugin("[name].css");

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
			},
			{
				// css、style 加載器
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style", "css?sourceMap")
			},
			{
				// sass 加載器，一併處理 url() 的相對路徑問題
				test: /\.sass$/,
				loader: ExtractTextPlugin.extract("style", "css?sourceMap!resolve-url!sass?sourceMap&includePaths[]=node_modules/compass-mixins/lib")
			},
			{
				// 圖片加載器，雷同 file-loader，更適合圖片，可以將較小的圖片轉成 base64，减少 http 請求
				// 如下配置，將小於 8192 byte 的圖片轉成 base64
				test: /\.(jpe?g|png|gif|svg)$/,
				loader: "url-loader?limit=8192&name=./images/[hash].[ext]"
			}
		]
	},

	plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig],

	devServer: {
		contentBase: "./dist/index.html",
		inline: true,
		port: 7777
	}
};

module.exports = CONFIG;