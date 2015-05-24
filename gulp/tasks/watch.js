'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {

  gulp.watch('src/scss/**/*.scss',  ['styles']);

});