'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var replace = require('gulp-replace');
var p = require('../../package.json');

gulp.task('set-runtime-app-mode', function() {

  // Update app.mode value in compiled JS
  return gulp.src( config.scripts.dest + '/' + config.scripts.bundleName + '-' + p.version + '.min.js' )
    .pipe(replace(/app.mode\s*=\s*(?:"[^"]+"|'[^']+')/gi, 'app.mode="' + global.addMode + '"'))
    .pipe(gulp.dest(config.scripts.dest));
});