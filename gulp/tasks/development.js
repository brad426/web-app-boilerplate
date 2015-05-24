'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function(cb) {

  global.appMode = 'dev';

  runSequence('watch', cb);

});