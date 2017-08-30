// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: true,
    },
    // required to lint *.vue files
    plugins: [
      'html'
    ],
    {{#airbnb}}
    extends: 'airbnb-base',
    // check if imports actually resolve
    'settings': {
      'import/resolver': {
        'webpack': {
          'config': 'webpack.config.js'
        }
      }
    },
    {{/airbnb}}
    // add your custom rules here
    'rules': {
        "no-unused-expressions":0,
        // jsdoc valid
        "valid-jsdoc": ["error", {
            "requireReturn": true,
            "requireReturnType": true,
            "requireParamDescription": true,
            "requireReturnDescription": true
          }],
          // jsdoc require
          "require-jsdoc": ["error", {
              "require": {
                  "FunctionDeclaration": true,
                  "MethodDefinition": true,
                  "ClassDeclaration": true
              }
          }],
          'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never',
            'axios': 'never'
          }],
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
  }