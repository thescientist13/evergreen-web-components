module.exports = {

  presets: ['@babel/preset-env'],

  plugins: [
    ['babel-plugin-transform-builtin-classes', {
      globals: ['LitElement']
    }],
    '@babel/plugin-syntax-dynamic-import'
  ]

};