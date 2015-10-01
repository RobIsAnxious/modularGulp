var gulp = require('gulp');
    

gulp.task('copy:files', function() {
	return gulp.src(['src/**/*', '!src/style.css', '!src/js/*'])
		.pipe(gulp.dest('./dist/'));
});
