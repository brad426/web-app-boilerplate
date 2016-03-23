'use strict';

var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var gulpif   = require('gulp-if');

gulp.task('images', function() {

  return gulp.src([
      'src/img/**/*'
    ])
  	.pipe(gulpif(global.mode === 'prod', imagemin()))
    .pipe(gulp.dest(global.destination + '/img'));
});