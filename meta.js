module.exports = {
    'prompts': {
      'name': {
        'type': 'string',
        'required': true,
        'message': 'Project name'
      },
      'description': {
        'type': 'string',
        'required': false,
        'message': 'Project description',
        'default': 'A Vue.js project'
      },
      'author': {
        'type': 'string',
        'message': 'Author'
      },
      'airbnb':{
        'type': 'confirm',
        'message': 'Use Airbnb ? (https://github.com/airbnb/javascript)',
        "default": false
      },
      'scss': {
        'type': 'confirm',
        'message': 'Use Sass or Less?'
      },
      'mock': {
        'type': 'confirm',
        'message': 'Use MockJS?',
        "default": false
      },
    },
    "filters": {
      "mock/**/*": "mock"
    },
    'completeMessage': 'To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://github.com/Veblin/vue-mul'
  }