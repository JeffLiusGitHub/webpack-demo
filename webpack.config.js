const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname, 'src/index.js'),
	},
	//from
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js',

		//add bundle name with hash
		//see name in the entry if you use [name]
		clean: true,
		//prevent redundant file
		assetModuleFilename: '[name][ext]',
		//otherwise some file will rename to sth else
	},
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 3000,
		open: true,
		//npm run dev, open browser automatically
		hot: true,
		//hot reloading
		compress: true,
		//gzip compression
		historyApiFallback: true,
	},
	//to
	module: {
		rules: [
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
			//any file end with scss will apply this loaders
			{
				test: /\.js$/,
				exclude: /\node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack app',
			filename: 'index.html',
			template: 'src/template.html',
		}),
		new BundleAnalyzerPlugin(),
	],
};
