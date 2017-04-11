var gulp = require("gulp");

//Copy  files *****************************************************************************

gulp.task('copy', function () {
    return gulp.src('productionfiles/index.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy-component-html', function () {
    return gulp.src('src/app/**/*.html')
        .pipe(gulp.dest('dist/src/app'));
});

gulp.task('copy-component-css', function () {
    return gulp.src('src/app/**/*.css')
        .pipe(gulp.dest('dist/src/app'));
});