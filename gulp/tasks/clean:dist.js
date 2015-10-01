var gulp = require('gulp'),
    del = require('del');


gulp.task('clean:dist', function(cb) {
	del.sync('./dist/*');
	cb();
});
