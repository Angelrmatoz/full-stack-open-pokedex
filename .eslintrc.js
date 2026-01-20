module.exports = {
    env: {
        browser: true,
        es6: true,
        'jest/globals': true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'react', 'jest'
    ],
    rules: {
        indent: [
            'warn',
            2
        ],
        'linebreak-style': 'off',
        quotes: [
            'warn',
            'single', {allowTemplateLiterals: true, avoidEscape: true}
        ],
        semi: 'off',
        eqeqeq: 'warn',
        'no-trailing-spaces': 'off',
        'object-curly-spacing': [
            'warn', 'always'
        ],
        'arrow-spacing': [
            'warn', {before: true, after: true}
        ],
        'no-console': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'warn',
        'no-undef': 'warn'
    }
};
