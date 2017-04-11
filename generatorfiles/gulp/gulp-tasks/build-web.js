var gulp = require("gulp");

var runSequence = require('run-sequence');

// build web **********************************************************************************

gulp.task('build-web', function (done) {
    runSequence('clean', 'tsc', 'build-js', 'build-css', 'vendor-js', 'vendor-css', 'copy', 'remove-jscode', 'copy-component-html', 'copy-component-css', done);
});