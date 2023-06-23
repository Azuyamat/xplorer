const path = require('path');

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.svg/,
				type: 'asset/inline',
			},
			{
				test: /\.png$/,
				type: 'asset/inline',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
				  "style-loader",
				  "css-loader",
				  "sass-loader",
				],
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.svg', '.png'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'out/src'),
	},
	cache: false,
};
