module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.js'],
	parser: '@typescript-eslint/parser',
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
};
