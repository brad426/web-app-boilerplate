'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var autoprefixer = require('gulp-autoprefixer');
var size = require('gulp-size');


gulp.task('styles', function () {

  return gulp.src('src/scss/**/*.scss')
    .pipe( sass({
      includePaths:['node_modules/bootstrap-sass/assets/stylesheets'],
      sourceComments: (global.appMode === 'prod') ? 'none' : 'normal',
      outputStyle: (global.appMode === 'prod') ? 'compressed' : 'nested',
      errLogToConsole: true
    }))
    .pipe( autoprefixer('last 3 versions', '> 1%', 'ie 8') )
    .on('error', handleErrors)
    .pipe( gulp.dest('src/css') )
    .pipe( size({title: 'styles'}) );
});