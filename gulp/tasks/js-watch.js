var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('js-watch', ['js'], browserSync.reload);
