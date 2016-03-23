'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function () {

  return gulp.src('src/scss/**/*.scss')
    .pipe( sass({
      includePaths:['node_modules/bootstrap-sass/assets/stylesheets'],
      sourceComments: (global.mode === 'prod') ? false : true,
      outputStyle: (global.mode === 'prod') ? 'compressed' : 'nested',
      errLogToConsole: true
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer({
        browsers: ['last 2 versions', '> 1%', 'ie 9', 'ie 10']
    }))
    .pipe( gulp.dest(global.destination + '/css') );
});