'use strict';

var gulp         = require('gulp');
var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var p = require('../../package.json');


gulp.task('requirejs', function (cb) {

  rjs({
    baseUrl: 'src/js',
    name: 'vendor/almond', // Use almond.js to load AMD modules in the built version, so we don't have to include require.js. The path to almond is relative to config.scripts.src
    //deps: ['index'],
    mainConfigFile: 'src/js/config.js',
    out: global.compiledScriptsName
  })
  .pipe(uglify())
  .pipe(gulp.dest(global.destination + '/js'))
  .pipe(size({title: 'require-js'}));

  cb();

});