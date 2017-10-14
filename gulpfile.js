var gulp = require('gulp');
var sass = require('gulp-sass');

//sass
gulp.task('sass', function () {
    gulp.src(['themes/restaurant-theme/sass/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('themes/restaurant-theme/css/'));
});

// Default task
gulp.task('default', function () {
    gulp.start('sass');
});