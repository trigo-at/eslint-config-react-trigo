module.exports = {
	extends: 'airbnb',
	parser: 'babel-eslint',
	plugins: [
		'mocha',
		'compat',
	],
	env: {
		node: true,
		mocha: true,
		browser: true,
	},
	rules: {
		strict: [0, 'global'],
		indent: [1, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
		'no-tabs': 0,
		'no-plusplus': 0,
		'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: true }],
		'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
		'no-console': [1, { allow: ['warn'] }],
		'max-len': [2, 160, 2, {
			ignoreUrls: true,
			ignoreComments: false,
		}],
		'object-shorthand': 0,
		'no-underscore-dangle': ['error', { allow: ['_id'], allowAfterThis: true, allowAfterSuper: true }],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/named': 2,
		'import/prefer-default-export': 0,
		'mocha/no-exclusive-tests': 'error',
		'no-restricted-syntax': [
			'error',
			'ForInStatement',
			'LabeledStatement',
			'WithStatement',
		],
		'no-await-in-loop': 0,
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-indent': [2, 'tab'],
	},
	settings: {
		polyfills: ['fetch'],
		compiler: 'babel',
	},
};
