'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var autoprefixer = require('gulp-autoprefixer');
var size         = require('gulp-size');


gulp.task('styles', function () {

  var dst = global.destination + '/css';

  return gulp.src('src/scss/**/*.scss')
    .pipe( sass({
      includePaths:['node_modules/bootstrap-sass/assets/stylesheets'],
      sourceComments: (global.appMode === 'prod') ? false : true,
      outputStyle: (global.appMode === 'prod') ? 'compressed' : 'nested',
      errLogToConsole: true
    }))
    .on('error', console.log)
    .pipe( autoprefixer('last 3 versions', '> 1%', 'ie 8') )
    .pipe( gulp.dest(dst) )
    .pipe( size({title: 'styles'}) );
});