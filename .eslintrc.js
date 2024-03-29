module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/vue3-essential', '@vue/standard'],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'space-before-function-paren': 'off',
        'no-unused-vars': 'off',
        'eslint-plugin-vue': 'off',
        'eol-last': 'off',
        indent: 'off',
        'vue/multi-word-component-names': 'off',
        'space-in-parens': 'off',
        'func-call-spacing': 'off',
        eqeqeq: 'off'
    }
}