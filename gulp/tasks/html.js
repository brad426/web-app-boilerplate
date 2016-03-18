'use strict';

var gulp     = require('gulp');
var nunjucks = require('gulp-nunjucks-html');

// Compiles HTML includes
gulp.task('html', function() {

  return gulp.src(['src/*.html'])
    .pipe(nunjucks({
      searchPaths: ['src/']
    }))
    .on('error', console.log)
    .pipe(gulp.dest(global.destination));
});