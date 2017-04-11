var gulp = require("gulp");
var clean = require('gulp-clean');

// remove jscode folder*********************************************************************

gulp.task('remove-jscode', function () {
    return gulp.src(['src/jscode'], {
            read: false
        })
        .pipe(clean())
});