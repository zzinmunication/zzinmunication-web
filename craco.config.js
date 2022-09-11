const {ESLINT_MODES } = require("@craco/craco");
const CracoLessPlugin = require('craco-less');
const CracoAlias = require("craco-alias");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	reactScriptsVersion: "react-scripts",
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							"@primary-color": "#1DA57A",
							"@border-radius-base": "10px"
						},
						javascriptEnabled: true,
					},
				},
			},
		},
		{
			plugin: CracoAlias,
			options: {
				// see in examples section
				baseUrl: "./src",
				source: "tsconfig",
				tsConfigPath: "tsconfig.paths.json",
			},
		},
		{ plugin: new OpenBrowserPlugin({ url: "http://localhost:3000" }) },
	],
	webpack: {
		configure: (webpackConfig) => {
			webpackConfig.optimization.minimizer = [
				new TerserPlugin({
					cache: true,
					parallel: true,
					sourceMap: true, // Must be set to true if using source-maps in production
					terserOptions: {
						compress: {
							drop_console: true,
						},
					},
				}),
			];

			return webpackConfig;
		},
		plugins: [
		],
	},
	eslint: {
		mode: ESLINT_MODES.file,
	},
};