'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', function(cb) {

  global.appMode = 'prod';

  runSequence('clean', 'sprite-images', 'styles', ['images', 'requirejs', 'copy'], ['replace-references', 'set-runtime-app-mode'], cb);

});
