var gulp = require("gulp"),
    browserSync = require('browser-sync'),
    connect = require('gulp-connect-php');

gulp.task('connect', ['clean:dist', 'js', 'css', 'copy:files'], function() {
    connect.server({
		base: "./dist"
	}, function(){
		browserSync();
	});
	gulp.watch("src/js/*.js", ['js-watch']);
	gulp.watch("src/sass/*.scss", ['css-watch']);
	gulp.watch(['src/**/*', '!src/style.css', '!src/js/*'], ['files-watch']);
});
