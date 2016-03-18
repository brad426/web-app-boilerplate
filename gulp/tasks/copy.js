'use strict';

var gulp = require('gulp');
var size = require('gulp-size');

gulp.task('copy', function () {

  // Modernizr is not built into our application's JavaScript, make sure it gets copied over
  gulp.src('src/js/vendor/modernizr-respond-js.js')
    .pipe(gulp.dest(global.destination + '/js/vendor'));

  return gulp.src([
      'src/**/*',
      // Exclude the following:
      '!src/*.html', // html files are handled by html task
      '!src/{js,js/**}', // scripts are handled by scripts task
      '!src/{img,img/**}', // handled by image task
      '!src/{scss,scss/**}', // handled by styles task
      '!src/{layout,layout/**}', // we don't need layout
      '!src/{include,include/**}' // we don't need include
    ])
    .pipe(gulp.dest(global.destination));
});