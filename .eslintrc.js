module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-param-reassign": 0, // 禁止给参数重新赋值
    "arrow-spacing": 0, // =>的前/后括号
    "linebreak-style": 0, // 关闭换行符验证
    'indent': 'off',
    'vue/script-indent': [
      'error',
      4,
      {
        'baseIndent': 1
      }
    ],
    //  Expected 'this' to be used by class method
    "class-methods-use-this": "off",
    "allowForLoopAfterthoughts": true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
