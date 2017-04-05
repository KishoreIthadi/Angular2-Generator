var gulp = require("gulp");
var clean = require('gulp-clean');
var uglify = require("gulp-uglify");
var babel = require('gulp-babel');

var runSequence = require('run-sequence');

//Clean gulp build folders*********************************************************************

gulp.task('clean', function () {
    return gulp.src(['dist'], {
            read: false
        })
        .pipe(clean())
});

//uglify all the source files *****************************************************************************

gulp.task('build-js', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/src/'))
});

//Copy npmpublish files *****************************************************************************

gulp.task('copy-npmpublish-files', function () {
    return gulp.src('publishfiles/**/*')
        .pipe(gulp.dest('dist/'));
}); 

// Copy readme, MIT ****************************************************************************************

gulp.task('copy-readme-MIT', function () {
    return gulp.src(['readme.md','LICENSE'])
        .pipe(gulp.dest('dist/'));
});

// Copy generator files********************************************************************************

gulp.task('copy-generator-files', function () {
    return gulp.src('generatorfiles/**/*')
        .pipe(gulp.dest('dist/generatorfiles/'));
});

// builds npm package**********************************************************************************

gulp.task('build-npm', function (done) {
    runSequence('clean', 'build-js', 'copy-npmpublish-files', 'copy-readme-MIT', 'copy-generator-files', done);
});