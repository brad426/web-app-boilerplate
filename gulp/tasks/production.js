'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var pkg    		= require('../../package.json');

gulp.task('prod', function(cb) {

  global.appMode = 'prod';
  global.destination = 'dist';
  global.compiledScriptsName = 'js-bundle-' + pkg.version + '.min.js'

  runSequence('clean', 'styles', ['images', 'requirejs', 'copy'], ['replace-references', 'set-runtime-app-mode'], cb);

});
