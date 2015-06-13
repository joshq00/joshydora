import webpack from 'webpack';
import path from 'path';
const target = 'web';

let entry = {
	index: 'index',
};

let output = {
	path: path.join( __dirname, 'build' ),
	publicPath: '/build/',
	filename: '[name].js',
};

let externals = {
	'socket.io-client': 'io',
	'react': 'React',
	'request-promise': 'requestPromise',
	'blowfish': 'Blowfish',
	'console': 'console',
};

let loaders = [ {
	test: /\.(jsx?|es6)$/,
	loaders: [
		'babel',
	],
	exclude: /node_modules/,
}, {
	test: /\.json$/,
	loader: 'json',
}, {
	test: /\.less$/,
	loaders: [ 'style', 'css', 'less' ],
}, ];

let resolve = {
	modulesDirectories: [
		'src',
		'web_modules',
		'node_modules',
	],
	extensions: [
		'',
		'.web.jsx',
		'.jsx',
		'.web.es6',
		'.es6',
		'.web.js',
		'.js',
		'.json',
	],
};

let plugins = [
	new webpack.optimize.DedupePlugin(),
	new webpack.DefinePlugin( {
		'process.browser': true,
	} ),
	// new webpack.optimize.CommonsChunkPlugin( 'common.js' )
];

let node = {
	// console: 'empty',
	// fs: 'empty',
	// net: 'empty',
	// tls: 'empty',
	console: false,
	process: false,
	Buffer: false,
};

export default {
	target,
	module: { loaders },
	entry,
	output,
	externals,
	resolve,
	node,
	plugins,
};
