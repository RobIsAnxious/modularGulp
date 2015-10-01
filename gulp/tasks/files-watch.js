var gulp = require('gulp'),
    browserSync = require('browser-sync')

gulp.task('files-watch', ['copy:files'], browserSync.reload);
