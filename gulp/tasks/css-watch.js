var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('css-watch', ['css'], browserSync.reload);
