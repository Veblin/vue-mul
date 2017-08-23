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
    extends: 'vue',
    // required to lint *.vue files
    plugins: [
      'html'
    ],
    // check if imports actually resolve
    'settings': {
      'import/resolver': {
        'webpack': {
          'config': 'webpack.config.js'
        }
      }
    },
    // add your custom rules here
    'rules': {
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
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
  }
  