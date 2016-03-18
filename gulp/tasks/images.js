'use strict';

var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var gulpif   = require('gulp-if');
var size     = require('gulp-size');

gulp.task('images', function() {

  return gulp.src([
      'src/img/**/*'
    ])
  	.pipe(gulpif(global.appMode === 'prod', imagemin()))
    .pipe(gulp.dest(global.destination + '/img'))
    .pipe(size({title: 'images'}));
});