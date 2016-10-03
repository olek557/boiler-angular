var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('sass', function() {
 return gulp.src('./sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("./css/**/*.css", ['css']);
    gulp.watch("./*.html", ['html']);
    gulp.watch("./js/*.js", ['js']);
    gulp.watch("./js/libs/*.js", ['jslibs']);
    gulp.watch("./js/modules/**/*.js", ['jsmods']);
});

gulp.task('default', ['sass', 'watch']);
