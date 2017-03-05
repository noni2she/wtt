var Webpack = require("webpack");
var PATH = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var CONFIG = {
	context: "../app",
	/**
	 * 每個 entry 文件會被編譯打包，而其中 import 的檔案 (js, css, img) 也都會一起被打包
	 * @format: ["string"] or key: ["value"]
	 */
	entry: {
		vendors: ["react", "react-dom", "reactfire", "i18n-react", "jquery", "jquery-ui-dist"],
		"vendors-style": ["bootstrap-css", "jquery-ui-dist"]
	},

	/**
	 * 編譯打包後生成的檔案路徑
	 * @format: object
	 * build-in attribute:
	 *   path: 打包輸出的目錄配置
	 *   filename: 打包輸出的 js 配置 (對應到 entry 的設定)
	 *   chunkFilename: 未被列在 entry 中打包輸出的 js 配置
	 */
	output: {
		path: PATH.resolve(__dirname, "../dist"),
		filename: "js/[name].js?[hash]",
		chunkFilename: "js/[name].js"
	},

	/**
	 * import 相關設置
	 * @format: object
	 * build-in attribute:
	 *   modulesDirectories: 設定 import 時會用到的目錄位置以消除相對路徑配置
	 *   extensions: import 時可省略的副檔名
	 *   alias: 此設置中的 key 與 value 會形成相互對應
	 */
	resolve: {
		modulesDirectories: ["node_modules", "app"],
		extensions: ["", ".js", ".jsx", ".sass"],
		alias: {
			"bootstrap-js": "bootstrap/dist/js/bootstrap.min",
			"bootstrap-css": "bootstrap/dist/css/bootstrap.min",
			"jquery": "jquery/src/jquery.min",
			"jquery-ui-dist": "jquery-ui-dist/jquery-ui.min",
			"react": "react/dist/react.min",
			"react-dom": "react-dom/dist/react-dom.min",
			"reactfire": "reactfire/dist/reactfire.min"
		}
	},

	/**
	 * 各類資源相關設置
	 * @format: object
	 * build-in attribute:
	 *   loaders: 各類資源 loader 設置
	 *   noParse: 不經由 loader 轉換的檔案設置
	 */
	module: {
		/* 所有 loader 設定的字串 "-loader" 可省略不寫 */
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel?cacheDirectory=true"
			},
			{
				// jsx 加載器，處理 jsx 置換
				test: /\.jsx?$/,
				include: PATH.resolve("../app/scripts"),
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
				test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=8192&name=./fonts/[name].[ext]"
			},
			{
				// html template 加載器，可以處理引用的靜態資源，預設配置参数 attrs=img:src，處理圖片的 src 引用的資源
				// 例如配置 "attrs=img:src img:data-src" 就可以一併處理 data-src 引用的資源，如下
				test: /\.html$/,
				loader: "html?attrs=img:src img:data-src"
			},
			{
				test: /\.json$/,
				loader: "json"
			}
		]
	},

	/**
	 * 各類插件套用
	 * @format: object
	 */
	plugins: [
		// 清除舊有的 dist 資料夾資料再打包
		new CleanWebpackPlugin(["dist"], {
			root: PATH.resolve(__dirname, ".."),
			verbose: true, // Write logs to console.
			dry: false // Use boolean "true" to test/emulate delete. (will not remove files).
			// (Default: "false", remove files)
			// exclude: ["files", "to", "ignore"] // Instead of removing whole path recursively,
			// remove all path's content with exclusion of provided immediate children.
			// Good for not removing shared files from build directories.
		}),

		// 打包後清除不要的多餘文件
		new WebpackCleanPlugin([
			"../dist/js/vendors-style.js"
		]),

		// 合併圖片使用
		new SpritesmithPlugin({
			src: {
				cwd: PATH.resolve(__dirname, "../app/assets/images/sprite_source"),
				glob: "**/*.png",
			},
			target: {
				image: PATH.resolve(__dirname, "../app/assets/images/sprite_result/sprite.[hash].png"),
				css: PATH.resolve(__dirname, "../app/assets/styles/day/base/_sprite.sass")
			},
			apiOptions: {
				generateSpriteName: function (fileName) {
					var parsed = PATH.parse(fileName);
					var dir = parsed.dir.split(PATH.sep);
					var moduleName = dir[dir.length - 1];
					return 'icon-' + moduleName + '-' + parsed.name;
				},
				cssImageRef: "../../../images/sprite_result/sprite.[hash].png"
			},
			spritesmithOptions: {
				padding: 5
			}
		}),

		// jQuery 加載
		new Webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"windows.jQuery": "jquery"
		}),

		// for develope
		new Webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("develop")
			}
		})
	],

	/* 使用 webpack-dev-server --hot --inline */
	devServer: {
		contentBase: "./dist/index.html",
		host: "localhost",
		inline: false,
		hot: false,
		stats: { colors: true },
		clientLogLevel: 'warning',
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		}
	}
}