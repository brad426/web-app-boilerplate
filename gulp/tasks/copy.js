'use strict';

var gulp = require('gulp');
var merge = require('merge-stream');

gulp.task('copy', function () {

  // Modernizr is not built into our application's JavaScript, make sure it gets copied over
  var modernizr = gulp.src('src/js/vendor/modernizr-respond-js.js')
    .pipe(gulp.dest(global.destination + '/js/vendor'));

  var staticAssets = gulp.src([
    'src/**/*',
    // Exclude the following:
    '!src/*.html', // html files are handled by html task
    '!src/{js,js/**}', // scripts are handled by scripts task
    '!src/{img,img/**}', // handled by image task
    '!src/{scss,scss/**}', // handled by styles task
    '!src/{partial,partial/**}' // we don't need partial
  ])
  .pipe(gulp.dest(global.destination));

  return merge(modernizr, staticAssets);
  
});