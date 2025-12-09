const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

function build() {
  return gulp.src('src/index.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
    .pipe(rename('hr.dist.js'))
    .pipe(gulp.dest('examples'));
}

function watch() {
  gulp.watch('src/index.js', build);
}

exports.build = build;
exports.watch = watch;
exports.default = gulp.series(build, watch);