'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var size = require('gulp-size');

gulp.task('copy', function () {

  // Modernizr is not built into our application js, make sure it gets copied over
  gulp.src(config.scripts.src + '/vendor/modernizr-respond-js.js')
    .pipe(gulp.dest(config.scripts.dest + '/vendor'));

  return gulp.src([
      config.root.src,
      // Exclude the following
      '!' + config.scripts.src + '{,/**}', // handled by requirejs task
      '!' + config.images.src.replace(global.stipWildcard, '') + '{,/**}', // handled by image task
      '!' + config.styles.src.replace(global.stipWildcard, '') + '{,/**}', // handled by styles task
      '!' + config.partials.src.replace(global.stipWildcard, '') + '{,/**}' // not needed in built version
    ])
    .pipe(gulp.dest(config.dist.root));
});