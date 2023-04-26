/* eslint-disable prettier/prettier */
/* eslint-env node */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:tailwindcss/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-refresh'],
	rules: {
		'tailwindcss/no-custom-classname': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
		'react/no-unescaped-entities': 'off',
		'react/react-in-jsx-scope': 'off',
		'jsx-quotes': ['error', 'prefer-single'],
		'react-refresh/only-export-components': 'warn',
	},
};
