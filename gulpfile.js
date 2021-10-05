var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile', function() {
    return gulp.src('scss/main.scss').pipe(sass()).pipe(gulp.dest('css'))
});

gulp.task('watch-scss', function() {
    gulp.watch("scss/main.scss", gulp.series('compile'));
});

gulp.task('default', gulp.series('compile','watch-scss'), function(){});

//install order
// npm install -global gulp-cli
// npm install gulp@4.0.2
// npm install gulp-sass@4.0.2