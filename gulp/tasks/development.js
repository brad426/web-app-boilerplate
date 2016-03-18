'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function(cb) {

  global.appMode = 'dev';
  global.destination = 'dev';

  runSequence('clean', ['styles', 'html', 'images', 'copy'], 'watch', cb);

});