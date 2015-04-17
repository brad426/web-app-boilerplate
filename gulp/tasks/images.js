'use strict';

var config      = require('../config');
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');
var size = require('gulp-size');

gulp.task('images', function() {

  return gulp.src([
      config.images.src,
      // Exclude sprite source directory
      '!' + config.images.sprites.src.replace(global.stipWildcard, '') + '{,/**}'
    ])
    .pipe(imagemin())
    .pipe(gulp.dest(config.images.dest));

});

gulp.task('sprite-images', function ( cb ) {

  var spriteData = gulp.src(config.images.sprites.src)
    .pipe(spritesmith({
      cssName: config.images.sprites.scssName + '.scss', // the name of the generated .scss file
      cssFormat: 'css', // use .scss instead to get sprite generator mixin
      imgName: config.images.sprites.spriteSheetName + '.png', // the name of the generated sprite-sheet image
      imgPath: '../' + config.images.dest.replace(config.dist.root + '/', '') + '/' + config.images.sprites.spriteSheetName + '.png', // the path our css will reference
      algorithm: 'binary-tree',
      padding: 1, // prevents pixel rounding issues when we use CSS transforms on sprites
      cssOpts: {
        cssSelector: function (item) {
          return '.sprite-' + item.name; // the name for each class generated
        }
      }
    }));

  // Optimize and output the generated sprite-sheet image
  spriteData.img
    .pipe( imagemin() )
    .pipe( gulp.dest(config.images.sprites.dest) )
    .pipe( size({title: 'sprite-images'}) );

  // Output the generated .scss file
  spriteData.css
    .pipe( gulp.dest(config.images.sprites.scssDest) );  

  cb();
});