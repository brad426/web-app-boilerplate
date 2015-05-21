'use strict';

var gulp          = require('gulp');

gulp.task('watch', function() {

  gulp.watch('src/scss/**/*.scss',  ['styles']);
  gulp.watch('src/img/sprite-src/**/*.png',  ['sprite-images']);

});