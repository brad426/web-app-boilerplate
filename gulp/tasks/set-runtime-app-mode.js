'use strict';

var gulp         = require('gulp');
var replace = require('gulp-replace');
var p = require('../../package.json');

gulp.task('set-runtime-app-mode', function() {

  // Update app.mode value in compiled JS
  return gulp.src( global.destination + '/js/' + global.compiledScriptsName )
    .pipe(replace(/app.mode\s*=\s*(?:"[^"]+"|'[^']+')/gi, 'app.mode="' + global.appMode + '"'))
    .pipe(gulp.dest(global.destination + '/js'));
});