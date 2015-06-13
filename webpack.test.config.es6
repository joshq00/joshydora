import orig from './webpack.config.es6';
import RewirePlugin from 'rewire-webpack';
let extend = Object.assign;
let cfg = extend( {}, orig );

// don't externalize any
cfg.externals = [];

cfg.module = extend( {}, cfg.module );

// add coverage postloader
// cfg.module.postLoaders = [
// 	...( cfg.module.postLoaders || [] ),
// 	{ // << add subject as webpack's postloader
// 		test: /\.jsx?$/,
// 		exclude: /(__tests__|node_modules|bower_components)/,
// 		loader: 'istanbul-instrumenter'
// 	}
// ];

cfg.module.preLoaders = [
	// transpile test files with babel as usual
	// {
	// 	test: /\.(es6|jsx?)$/,
	// 	include: /__tests__/,
	// 	loader: 'babel?optional=runtime'
	// 	// loader: 'babel?stage=1'
	// },
	// transpile and instrument testing files with isparta
	// {
	// 	test: /\.(es6|jsx?)$/,
	// 	exclude: /(__tests__|node_modules|bower_components)/,
	// 	loader: 'isparta'
	// 	// loader: 'isparta?{ noAutoWrap: false, babel: { stage: 1 } }'
	// }
];
export default cfg;
