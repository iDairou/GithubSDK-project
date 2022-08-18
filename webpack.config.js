const path = require("path");
// importuję bibliotekę [path] z [node.js]
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./src/js/app.js",
	output: {
		path: path.resolve(__dirname, "build"),

		filename: "app.min.js",
	},
	target: "web",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.js$/,

				exclude: /node_modules/,

				use: "babel-loader",
			},
			{
				test: /\.css$/,

				exclude: /node_modules/,

				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
	],
};
