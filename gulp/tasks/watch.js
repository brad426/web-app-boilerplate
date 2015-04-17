'use strict';

var config        = require('../config');
var gulp          = require('gulp');

gulp.task('watch', function() {

  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.sprites.src,  ['sprite-images']);

});