'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {

  gulp.watch(['src/*.html', 'src/layout/**/*.html', 'src/include/**/*.html'],  ['html']);
  gulp.watch('src/scss/**/*.scss',  ['styles']);
  gulp.watch('src/img/**/*',  ['images']);
  // JS changes are monitored via watchify in scripts.js

});