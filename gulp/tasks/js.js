var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require ('gulp-concat');

gulp.task('js', function () {
    return gulp.src(['./src/js/*.js', './src/wtc-tools/*.js'])
        .pipe(uglify())
		.pipe(concat('index.js'))
        .pipe(gulp.dest('dist/js'));
});
