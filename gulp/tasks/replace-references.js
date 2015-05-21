'use strict';

var gulp         = require('gulp');
var replace = require('gulp-replace');
var size = require('gulp-size');
var p = require('../../package.json');

gulp.task('replace-references', function () {

  // Update script references to minified & concatenated JS
  return gulp.src( global.destination + '/*.html')
    .pipe(replace('js/vendor/require.min.js', 'js/' + global.compiledScriptsName))
    .pipe(replace('data-main="js/config" ', ''))
    .pipe(gulp.dest(global.destination));

});