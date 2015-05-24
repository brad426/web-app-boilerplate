'use strict';

var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var size     = require('gulp-size');

gulp.task('images', function() {

  return gulp.src([
      'src/img/**/*',
      '!src/img/{sprite-src,sprite-src/**}'// Exclude sprite source directory
    ])
    .pipe(imagemin())
    .pipe(gulp.dest(global.destination + '/img'))
    .pipe(size({title: 'images'}));
});