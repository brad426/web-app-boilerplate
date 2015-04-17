'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var p = require('../../package.json');


gulp.task('requirejs', function (cb) {

  rjs({
    baseUrl: config.scripts.src,
    name: 'vendor/almond', // Use almond.js to load AMD modules in the built version, so we don't have to include require.js. The path to almond is relative to config.scripts.src
    //deps: ['index'],
    mainConfigFile: config.scripts.entry,
    out: config.scripts.bundleName + '-' + p.version + '.min.js'
  })
  .pipe(uglify())
  .pipe(gulp.dest(config.scripts.dest))
  .pipe(size({title: 'require-js'}));

  cb();

});