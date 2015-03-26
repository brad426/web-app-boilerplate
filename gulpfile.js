'use strict';

var argv = require('minimist')(process.argv.slice(2));
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var size = require('gulp-size');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var rjs = require('gulp-requirejs');
var runSequence = require('run-sequence');
var del = require('del');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');

var p = require('./package.json');

var appModeArg = argv.mode;
if(appModeArg) {
	console.log('-----------------------------------');
	console.log('App mode will be set to "' + appModeArg + '"');
	console.log('-----------------------------------');
}

var sources = {
	root: 'src/**/*',
	scss: 'src/scss/**/*.scss',
	images: 'src/img/**/*.{jpg|png|gif}',
	sprites: 'src/img/sprite-src/*.png'
}

var outputDir = 'dist/';

/**
 * Compiles SASS into CSS.
 */
gulp.task('scss', function () {

	var outputStyle = (appModeArg === 'dev' || appModeArg === undefined) ? 'nested' : 'compressed';
	var sourceComments = (appModeArg === 'dev' || appModeArg === undefined) ? 'normal' : 'none';

	return gulp.src([sources.scss])
		.pipe( sass({
			includePaths:['node_modules/bootstrap-sass/assets/stylesheets'],
			outputStyle: outputStyle, // 'nested', 'compressed'
			sourceComments: sourceComments, // 'none', 'normal', 'map'
			errLogToConsole: true
		}))
		.pipe( autoprefixer('last 4 versions', '> 5%', 'ie 9') )
		.pipe( gulp.dest('src/css') )
		.pipe( size({title: 'styles:scss'}) );
});

/**
 * Create spritesheet
 * Combines multiple .png's images into a single .png image. Outputs a .scss file with
 * corresponding variables for each image in the spritesheet.
 */
gulp.task('sprite', function () {
	var spriteData = gulp.src(sources.sprites)
		.pipe( spritesmith({
			cssName: '_sprite.scss',
			cssFormat: 'css', // use .scss to get sprite generator mixin
			imgName: 'sprite.png',
			imgPath: '../img/sprite.png', // the path our css will reference
			algorithm: 'binary-tree',
			padding: 1, // prevents pixel rounding issues when we use CSS transforms on sprites
			cssOpts: {
				cssSelector: function (item) {
					return '.sprite-' + item.name;
				}
			}
		}));

	// Optimize and output the generated spritesheet image
	spriteData.img
		.pipe( imagemin() )
		.pipe( gulp.dest('src/img/') )
		.pipe( size({title: 'sprite'}) );

	// Output the generated .scss file
	spriteData.css
		.pipe( gulp.dest('src/scss/helper/') );  
});






//////////////////////////////////////////////////

gulp.task('requirejsBuild', function( cb ) {
    rjs({
        name: 'vendor/almond',
        baseUrl: 'src/js',
        deps: ['index'],
        mainConfigFile: 'src/js/config.js',
        out: 'bundle_' + p.version + '.min.js'
    })
    .pipe( uglify() )
    .pipe( gulp.dest( outputDir + 'js/' ) ); // pipe it to the output DIR

    cb();
});


gulp.task('replace-references', function() {	

  	// Update script references to minified & concatenated JS
	return gulp.src( outputDir + '*.html')
		.pipe(replace('js/vendor/require.min.js', 'js/bundle_' + p.version + '.min.js'))
		.pipe(replace('data-main="js/config" ', ''))
		.pipe(gulp.dest(outputDir))
});

gulp.task('set-app-mode', function() {	

	// Update app.mode value in compiled JS
	if(appModeArg) {
		return gulp.src( outputDir + 'js/*.js' )
			.pipe(replace(/app.mode\s*=\s*(?:"[^"]+"|'[^']+')/gi, 'app.mode="' + appModeArg + '"'))
			.pipe( gulp.dest(outputDir + 'js') );
	}
});

gulp.task('copy', function () {

  return gulp.src([
      sources.root,
      '!src/{js,js/**}',
      '!src/{scss,scss/**}',
      '!src/{partial,partial/**}',
      '!src/{json,json/**}'
    ])
    .pipe(gulp.dest(outputDir))
    .pipe(size({title: 'copy'}));
});

gulp.task('images', function() {
  return gulp.src(outputDir + 'img/**/*')
    .pipe( imagemin() )
    .pipe( gulp.dest(outputDir + 'img/') );
});

gulp.task( 'clean', del.bind(null, outputDir ) );


//////////////////////////////////////////////////


// Re-run these tasks when a file changes
gulp.task('watch', function() {

	gulp.watch(sources.scss, ['scss']);

	// Because our sprite task generates a new scss file, it will trigger the watched scss task
	gulp.watch(sources.sprites, ['sprite']);

});

gulp.task('build', function (cb) {
  runSequence('clean', 'sprite', ['scss', 'requirejsBuild'], 'copy', ['replace-references', 'set-app-mode', 'images'], cb);
});

gulp.task('default', ['build']);