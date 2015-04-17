'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var replace = require('gulp-replace');
var size = require('gulp-size');
var p = require('../../package.json');

gulp.task('replace-references', function () {

  // Update script references to minified & concatenated JS
  return gulp.src( config.dist.root + '/*.html')
    .pipe(replace('js/vendor/require.min.js', 'js/' + config.scripts.bundleName + '-' + p.version + '.min.js'))
    .pipe(replace('data-main="js/config" ', ''))
    .pipe(gulp.dest(config.dist.root));

});