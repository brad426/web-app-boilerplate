'use strict';

var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');
var size = require('gulp-size');

gulp.task('images', function() {

  return gulp.src([
      'src/img/**/*',
      '!src/img/{sprite-src,sprite-src/**}'// Exclude sprite source directory
    ])
    .pipe(imagemin())
    .pipe(gulp.dest(global.destination + '/img'));
});

gulp.task('sprite-images', function ( cb ) {

  var spriteData = gulp.src('src/img/sprite-src/**/*.png')
    .pipe(spritesmith({
      cssName: '_sprite-list.scss', // the name of the generated .scss file
      cssFormat: 'css', // use .scss instead to get sprite generator mixin
      imgName: 'sprite.png', // the name of the generated sprite-sheet image
      imgPath: '../img/sprite.png', // the path our css will reference
      algorithm: 'binary-tree',
      padding: 1, // prevents pixel rounding issues when we use CSS transforms on sprites
      cssOpts: {
        cssSelector: function (item) {
          return '.sprite-' + item.name; // the name for each class generated
        }
      }
    }));

  // Uutput the generated sprite-sheet image
  spriteData.img
    .pipe( gulp.dest('src/img') )
    .pipe( size({title: 'sprite-images'}) );

  // Output the generated .scss file
  spriteData.css
    .pipe( gulp.dest('src/scss/helper') );  

  cb();
});