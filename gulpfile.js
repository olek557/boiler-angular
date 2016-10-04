var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('./scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
  return gulp.src('css/**/*.css')
    .pipe(concatCSS('main.css'))
    .pipe(autoprefixer({browsers: ['last 4 versions', '> 1%', 'ie 9']}))
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('css/'))
    .pipe(notify('Done'));
});

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('css/**/*.css', ['default']);
})