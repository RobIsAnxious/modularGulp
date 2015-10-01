var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('css', function () {
    return sass('./src/sass/app.scss', { sourcemap: true })
		.on('error', function(err) {
			console.error('SASS Error!', err.message);
		})
		.pipe(rename('style.css'))
		.pipe(minifyCSS())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/'));
});
