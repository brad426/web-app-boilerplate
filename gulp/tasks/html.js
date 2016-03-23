'use strict';

var gulp     = require('gulp');
var nunjucks = require('gulp-nunjucks-html');
var handleErrors = require('../util/handleErrors');

// Compiles HTML includes
gulp.task('html', function() {

  return gulp.src(['src/*.html'])
    .pipe(nunjucks({
      searchPaths: ['src/']
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(global.destination));
});