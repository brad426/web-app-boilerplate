'use strict';

var gulp         = require('gulp');
var size = require('gulp-size');

gulp.task('copy', function () {

  // Modernizr is not built into our application's JavaScript, make sure it gets copied over
  gulp.src('src/js/vendor/modernizr-respond-js.js')
    .pipe(gulp.dest(global.destination + '/js/vendor'));

  return gulp.src([
      'src/**/*',
      // Exclude the following:
      '!src/{js,js/**}', // scripts are handled by require.js task
      '!src/{img,img/**}', // handled by image task
      '!src/{scss,scss/**}', // handled by styles task
      '!src/{partial,partial/**}' // partials not needed in built version
    ])
    .pipe(gulp.dest(global.destination));
});