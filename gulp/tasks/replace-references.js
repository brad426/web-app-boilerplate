'use strict';

var gulp    = require('gulp');
var replace = require('gulp-replace');
var size    = require('gulp-size');

gulp.task('replace-references', function () {

  // Update script references to minified & concatenated JS
  return gulp.src( global.destination + '/*.html')
    .pipe(replace('js/vendor/require.min.js', 'js/' + global.compiledScriptsName))
    .pipe(replace('data-main="js/config" ', '')) // remove "data-main" attribute from script tag, as require.js is no longer in use
    .pipe(gulp.dest(global.destination));

});