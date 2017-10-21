var gulp = require('gulp');
var sass=require('gulp-sass');
var rename=require('gulp-rename');
var notify=require('gulp-notify');
cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./sass'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./app'))

});
gulp.task('watch',function(){
	gulp.watch('./sass/**/*.scss',['sass'])
});

gulp.task("default", ["sass", "watch"]);