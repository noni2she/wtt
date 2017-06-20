const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
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
		vendors: ["jquery", "bootstrap-js"],
		bundles: [PATH.resolve(__dirname, "../app/scripts/index.jsx")]
	},

	output: {
		path: `${__dirname}/../dist`,
		filename: "js/[name].js"
	},

	resolve: {
		modulesDirectories: ["node_modules", "app"],
		extensions: ["", ".js", ".jsx", ".sass"],
		alias: {
			"bootstrap-js": "bootstrap/dist/js/bootstrap.min",
			"bootstrap-css": "bootstrap/dist/css/bootstrap.min",
			"jquery": "jquery/src/jquery",
			"jquery-ui-dist": "jquery-ui-dist/jquery-ui.min"
		}
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
			},
			{
				// html template 加載器，可以處理引用的靜態資源，預設配置参数 attrs=img:src，處理圖片的 src 引用的資源
				// 例如配置 "attrs=img:src img:data-src" 就可以一併處理 data-src 引用的資源，如下
				test: /\.html$/,
				loader: "html?attrs=img:src img:data-src"
			}
		]
	},

	plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig,
		// 清除舊有的 dist 資料夾資料再打包
		new CleanWebpackPlugin(["dist"], {
				root: "../",
				verbose: true,	// Write logs to console.
				dry: false		// Use boolean "true" to test/emulate delete. (will not remove files).
				// (Default: "false", remove files)
				// exclude: ["files", "to", "ignore"] // Instead of removing whole path recursively,
				// remove all path's content with exclusion of provided immediate children.
				// Good for not removing shared files from build directories.
		}),

		new Webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	],

	devServer: {
		contentBase: "../dist/index.html",
		inline: true,
		port: 7777
	}
};

module.exports = CONFIG;
