'use strict';

module.exports = {

  'root': {
    'src': 'src/**/*'
  },

  'styles': {
    'src' : 'src/scss/**/*.scss',
    'dest': 'src/css'
  },

  'scripts': {
    'src': 'src/js', // no wildcard, used by requirejs as baseURL
    'dest': 'dist/js',
    'entry': 'src/js/config.js',
    'bundleName': 'bundle'
  },

  'images': {
    'src' : 'src/img/**/*',
    'dest': 'dist/img',
    'sprites': {
      'src': 'src/img/sprite-src/**/*.png',
      'dest': 'src/img',
      'spriteSheetName': 'sprite',
      'scssName': '_sprite-list',
      'scssDest': 'src/scss/helper'
    }
  },

  'partials': {
    'src'  : 'src/partial/**/*.html'
  },

  'dist': {
    'root'  : 'dist'
  }

};
