'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpif   = require('gulp-if');
var replace = require('gulp-replace');
var handleErrors = require('../util/handleErrors');

var watchify = require('watchify');
var browserify = require('browserify');
var stringify = require('stringify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var assign = require('lodash.assign');


var b;

gulp.task('scripts', function() {

  // Only set up browserify/watchify the first time this task is run
  if( ! b ) {

    // Browserify options
    var customOpts = {
      paths: ['./src/js/', './src/'],
      entries: ['./src/js/index.js'],
      debug: global.mode === 'dev' // Enable source-maps
    };
    var opts = assign({}, watchify.args, customOpts);

    if(global.mode !== 'dev') {
      b = browserify(opts);
    }
    else {
      b = watchify(browserify(opts));
      b.on('update', bundle); // on any dep update, runs the bundler
      b.on('log', function(msg){gutil.log('Browserify::', msg)}); // output build logs to terminal
    }

    // Browserify transformations
    b.transform(stringify, {
        appliesTo: { includeExtensions: ['.html'] },
        minify: true
    });
  }

  return bundle();
});

function bundle() {

  return b.bundle()
    // log errors if they happen
    .on('error', handleErrors)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    // Update app.mode in JS app
    .pipe(replace(/app.mode\s*=\s*(?:"[^"]+"|'[^']+')/gi, 'app.mode="' + global.mode + '"'))
    .pipe(gulpif(global.mode !== 'dev', uglify()))
    .pipe(gulp.dest(global.destination + '/js'));
}